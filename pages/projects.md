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

{% capture tagString %}{% for tag in site.tags %}{{ tag[0] }}#{{ tag[1][0].date }}{% unless forloop.last %}|{% endunless %}{% endfor %}{% endcapture %}
{% assign tags = tagString | split: '|' | sort: 'downcase' | reverse %}

{% for stag in tags %}
    {% assign tagsplit = stag | downcase | split: '#' %}
    {% assign tag = tagsplit[0] %}
    
    {% assign ndate = site.tags[tag][0].date %}  
    {% for project in site.projects %}
        {% if project.tags[0] == tag and project.hide==false %}

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
{% endfor %}

{% for project in site.projects %}
{% if project.hide==false and project.tag == nil %}

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

