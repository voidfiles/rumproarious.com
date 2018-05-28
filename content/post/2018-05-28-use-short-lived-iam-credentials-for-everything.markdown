---
layout: post
title: "Use Short-Lived AWS IAM Credentials For Everything"
date: 2018-05-28T15:48:24-06:00
---

Managing IAM credentials is a burden. Besides juggling N separate credentials, I don't more secretes to manage. There must be a better way and I'm experimenting with some tools to find a better way.

<!--more-->

Automatically generating short-lived credentials for security seems like a good solution. This solution is demonstrated by tools like [Bless](https://github.com/Netflix/bless) from Netflix, [SSH Secrets Engine](https://www.vaultproject.io/docs/secrets/ssh/index.html) in Vault from Hashicorp, and [Let's Encrypt](https://letsencrypt.org/). The short-lived nature of the credentials limit the scope of a compromise and forces secret rotation often. The auto-generated nature of the secrets means that you aren't increasing the number of long lived secrets that you store. Also, if it's easy it will be peoples default method of access.

The solution I propose isn't ground breaking, its been supported for a few years now, but the AWS docs around this concept are almost impenetrable. To figure it out required a lot of experimentation. I used [terraform](https://www.terraform.io/) to speed up the experimentation cycle. I would recommend you spare a lot of time for futzing.

Here's what you need to start.

- An Identity Provider either SAML or Openid Connect (I used [Auth0](https://auth0.com/), because free plan).
- Roles in your AWS account that trust the Identity Provider
- A way to get an Identity Token from your Identity Provider

The main method for deriving short lived IAM credentials looks like this.

1. You get an identity token from your identity provider
2. You then call `aws sts assume-role-with-web-identity` on a role with an identity token.
3. Then use the new STS credentials to do AWS things.


## How

Roughly, here is what I have setup.

### Auth0 Identity Provider

I started with an account on Auth0. This part took some finagling, I imagine using something like Google would be easier, but Auth0 has a free account.

I created a social connection with GitHub. This allows users to login via GitHub so my application doesn't have to maintain user info.

Then I created an application and made sure OpenID Connect was enabled.

I'm not sure why this part was so hard, but you need to get a thumbprint for the next step. [Follow this directions in order to get it](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc_verify-thumbprint.html).

I used this information in the next part.

### AWS Setup

I use terraform to setup my AWS organization. There is a chicken and egg situation here. But, lets imagine you have credentials you can use to make changes to an AWS account. I'll write more about how to do this without also having more credentials in another post.

From there you can setup roles, and identity provider, and grant your identity provider access to the roles.

I use a terraform that looks something like this.

``` terraform
resource "aws_iam_role" "users_admin_role" {
  name                 = "UsersAdminRole"
  description          = "This role allows you to administer everything in this account"
  max_session_duration = 10800

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "AWS": "${var.users_account_id}"
      },
      "Effect": "Allow",
      "Sid": ""
    }, {
      "Action": [
        "sts:AssumeRoleWithWebIdentity"
      ],
      "Principal": {
        "Federated": "${aws_iam_openid_connect_provider.default.arn}"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_openid_connect_provider" "default" {
  url = "${var.identity_provider_url}"

  client_id_list = [
    "${var.client_id}",
  ]

  thumbprint_list = [
    "${var.thumbprint}",
  ]
}

resource "aws_iam_role_policy_attachment" "users_admin_role_attach" {
  role       = "${aws_iam_role.users_admin_role.name}"
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}
```

Once, you have applied this terraform. You can now move on to the next step.

### Gaining access

At this point, you should have an Identity Provider, and an AWS account that trusts that Identity Provider. From here you can obtain an identity token and use that to assume the role you created in the previous step.

This part is a little tricky, because for most Identity Providers you need to do an OAuth2 authorize flow in order to get the token, but that involves running a website.

I've copied an idea used in a couple of projects that involves spawning a locally hosted website that would use the implicit flow in order to obtain the id token. It uses the implicit flow so you don't have to include the client secret.

So, you can use the app in this way.

``` bash
export ID_TOKEN=$(...)
aws sts assume-role-with-web-identity --role-arn XXX --session-name XXX --identity ${ID_TOKEN}
```

You should see temporary credentials spit out.

You can now use those credentials to perform aws actions. I believe that it's possible to build a tool chain on top of these steps that would allow people to quickly obtain temporary credentials. And that ability is directly tied to your SSO flow.

If it is easy, and you can manage all users from one place, and you can easily revoke access from your SSO provider. This method should be easier then explicitly providing, or allowing users to generate long lived IAM credentials.
