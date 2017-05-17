---
layout: post
title: "JSON Feed For Hugo"
date: 2017-05-17 10:00:00 -0700
---

After learning about JSON Feed I took some time to implment a template for Hugo. This relies upon version 0.20 of Hugo which has support for many alternative formats. You can see find this in the [github repo for this site](https://github.com/voidfiles/rumproarious.com/blob/master/layouts/index.json).

<!--more-->

I put this template at `layouts/index.json`

```
{
    "version": "https://jsonfeed.org/version/1",
    "title": {{ .Site.Title | jsonify  }},
    "home_page_url": {{ .Permalink | jsonify }},
    {{ with  .OutputFormats.Get "json" -}}
    "feed_url": {{ .Permalink | jsonify  }},
    {{- end }}
    {{ if (.Site.Params.author) or (.Site.Params.author_url) -}}
    "author": {
        {{ if .Site.Params.author -}}
        "name": {{ .Site.Params.author | jsonify }},
        {{- end }}
        {{ if .Site.Params.author_url -}}
        "url": {{ .Site.Params.author_url | jsonify }}
        {{- end }}
    },
    {{- end }}
    {{ if .Data.Pages }}
    "items": [
        {{ range $index, $element := first 10 .Data.Pages }}
        {{if $index }},{{end}} {
            "title": {{ $element.Title | jsonify }},
            "id": {{ $element.Permalink | jsonify }},
            "url": {{ $element.Permalink | jsonify }},
            "content_html": {{ $element.Content | jsonify }},
            "date_published": {{ $element.Date.Format "2006-02-01T15:04:05-0700" | jsonify }}
        }
        {{ end }}
    ]
    {{ end }}
}
```

And, I added this to the header of my site

```
{{ range .AlternativeOutputFormats -}}
<link rel="{{ .Rel }}" type="{{ .MediaType.Type }}" href="{{ .Permalink | safeURL }}">
{{ end -}}
```