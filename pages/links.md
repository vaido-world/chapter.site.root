---
layout: page
title: Links
permalink: /links/
order: 2
hide: false
---

{% include base.html %}

{% for link in site.links %}
{% if link.hide==false %}

<div class="item_in_list">
    <div class="card item_card">
        <h3>
          <a href="{{ base }}{{ link.url }}">
            {{ link.title }}
          </a>
        </h3>       
        {{ link.excerpt }}
        
        <a href="{{ base }}{{ link.url }}">Read more</a>
    </div>
</div>

{% endif %}
{% endfor %}

