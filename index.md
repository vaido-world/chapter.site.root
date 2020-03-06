---
layout: home
bootstrap: true

# title
postnav_title: TZM Community pages

# second title
postnav_subtitle: ''

slim_header: true

# second link
postnav_link: "abouttzm"

# second linktext
postnav_linktext: "Learn more"

# home page header image
header_image: "/assets/img/autumn-219972_1280.jpg"

---
## Projects

<ul>
{% for project in site.projects %}

   <li>
     <a href="{{ base }}{{ project.url }}">
       {{ project.title }}
     </a>
   </li>

{% endfor %}
</ul>

## Community websites

### Branches

Finland [https://tzm.fi](https://tzm.fi)

### Other

[https://news.tzm.community/](https://news.tzm.community/ "https://news.tzm.community/")

[https://materials.tzm.community/](https://materials.tzm.community/ "https://materials.tzm.community/")

[https://template.tzm.community/](https://template.tzm.community/ "https://template.tzm.community/")

[https://tzmcommunity.github.io/docs](https://tzmcommunity.github.io/docs "https://tzmcommunity.github.io/docs")

[https://test.tzm.community/](https://test.tzm.community/ "https://test.tzm.community/")


