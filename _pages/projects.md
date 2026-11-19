---
layout: page
permalink: /projects/
title: 科研项目
description: 连接研究问题与工程实践。 / Connecting research with engineering practice.
nav: true
nav_order: 2
---

{% include site-tools.liquid %}

<div class="research-projects">
{% assign projects = site.projects | sort: "importance" %}
{% for project in projects %}
<article class="card hoverable">
<div class="card-body">
<p class="project-meta"><span data-zh="{{ project.role_zh | escape }}" data-en="{{ project.role_en | escape }}">{{ project.role_zh }}</span> · {{ project.date_label }}</p>
<h2 class="card-title"><a href="{{ project.url | relative_url }}"><span data-zh="{{ project.title | escape }}" data-en="{{ project.title_en | escape }}">{{ project.title }}</span></a></h2>
<p class="card-text" data-zh="{{ project.description | escape }}" data-en="{{ project.description_en | escape }}">{{ project.description }}</p>
<a href="{{ project.url | relative_url }}"><span data-zh="项目详情 →" data-en="Project details →">项目详情 →</span></a>
</div>
</article>
{% endfor %}
</div>
