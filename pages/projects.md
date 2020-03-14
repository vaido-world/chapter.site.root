---
layout: page
title: Projects
permalink: /projects/
order: 2
hide: false
---


{% include base.html %}

## What is this

This is a list of projects branches and people in TZM are working on. 
Finnish chapter is taking care of the updates. If you have a project you would like to have listed, contact [info@tzm.fi](mailto://info@tzm.fi) 

## List of projects

{% for project in site.projects %}

{% if project.hide==false %}

<div class="project_in_list">
    <div class="card project_card">
        <h3>
          <a href="{{ base }}{{ project.url }}">
            {{ project.title }}
          </a>
        </h3>       
        {{ project.excerpt }}
        
        <a href="{{ base }}{{ project.url }}">Read more</a>
    </div>
</div>

{% endif %}

{% endfor %}

