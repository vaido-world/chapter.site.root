---
layout: page
title: News
permalink: /news/
tags: [News, Archive]
order: 3
hide: true
---

{% include base.html %}

{% for post in site.posts %}

   <h2>
     <a href="{{ base }}{{ post.url }}">
       {{ post.title }}
     </a>
   </h2>
   <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
   {{ post.content }}

{% endfor %}
