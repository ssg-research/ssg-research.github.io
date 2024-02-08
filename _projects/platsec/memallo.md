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

## Preprints

<div class="publications">
  {% bibliography -f {{ site.scholar.bibliography }} --group_by none --query @*[selected=malloc]* %}
</div>
