---
layout: default
permalink: /platsec/memallo
nav: false
horizontal: false
title: Memory Allocation
---

# Memory Allocation


## Objectives

Heap-related vulnerabilities, such as overflow, double-free, and use-after-free (UAF), are widespread and pose significant threats. Yet, many default memory allocators offer limited protection against these vulnerabilities. This project focuses on creating secure memory allocators with straightforward and effective designs, aiming to develop alternatives to the default system allocators that ensure both enhanced security and acceptable performance overheads.

## Conference/journal paper publications

<div class="publications">
  {% bibliography -f {{ site.scholar.bibliography }} --group_by none --query @*[selected=malloc]* %}
</div>

## Source code

- [SeMalloc](https://github.com/ssg-research/semalloc)
- [S2Malloc](https://github.com/ssg-research/s2malloc)
