---
layout: page
title: Notes
permalink: /notes/
tags: [Notes, Archive]
order: 4
---

TZM archived meeting notes

{% include base.html %}

{% assign sortednotes = site.notes | sort: 'date' %}

<ul>
{% for note in sortednotes reversed %}

   <li>
     <a href="{{ note.id | replace:'/notes/',''}}.html">
       {{ note.title }}
     </a>
   </li>

{% endfor %}
</ul>