---
layout: page
title: Projects
permalink: /projects/
order: 2
hide: false
---


{% include base.html %}

{% for project in site.projects %}

   <h2>
     <a href="{{ base }}{{ project.url }}">
       {{ project.title }}
     </a>
   </h2>
   {{ project.excerpt }}

{% endfor %}

