---
layout: page
title: Events
permalink: /events/
tags: [Events, Archive]
order: 4
hide: true
---

Events placeholder

{% include base.html %}

{% for event in site.events %}

   <h2>
     <a href="{{ base }}{{ event.url }}">
       {{ event.title }}
     </a>
   </h2>
   {{ event.excerpt }}

{% endfor %}
