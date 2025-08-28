---
layout: default
permalink: /platsec/probandroid
redirect_from:
  - /probandroid/
nav: false
horizontal: false
title: Probably Android
---

# Probably Android

## Overview

With more than 70% of the current market share, Android dominates the global market of mobile OSes. Although Google provides the base for Android framework in the form of AOSP, custom vendors heavily customize this codebase by including private framework APIs. With such a widespread usage along with heavy customizations, access control vulnerabilities within Android framework are numerous, frequent, and have a deep impact, affecting a huge number of users. Therefore, systematic analysis of Android framework to discover access control flaws is of paramount importance.

There exists a long line of research that utilizes various techniques such as static and dynamic analysis to analyze Android framework. Due to a wide variety in the existing access control flaws, it has been repeatedly shown that existing approaches still suffer from shortcomings such as missing to identify previously unknown types of vulnerabilities, and relatively high false positive and false negative rates. Recent advancements in this area have proved that these shortcomings can be mitigated by extracting different types of access control hints and modeling their uncertainty using probabilistic inference. We hypothesize that probabilistic inference is not limited to specific approaches but can be applied in many different ways to uncover various types of access control inconsistencies within the Android framework.

To this end, we focus on (i) discovering various sources of hints that can provide essential information about the sensitivity of framework APIs, (ii) developing approaches to extract these hints, and (iii) utilizing these hints by modeling their inherent uncertainty through probabilistic inference. These steps ultimately result in developing novel approaches that can uncover new types of access control vulnerabilities. By following this methodology, we have developed a new approach that utilizes hints extracted from the preloaded system apps to audit vendor specified private framework APIs. Our approach can detect new types of inconsistencies that cannot be discovered by existing approaches. Next, we plan to apply this methodology to systematically analyze data structures defined by the vendors that augment AOSP. We aim to extract access control related hints through this analysis and recommend fine-grained access controls for the members of these data structures using probabilistic inference. In the long run, we aim to analyze Android framework through the lens of probabilistic inference and show how it can be used in numerous different ways to accurately detect different kinds of access control issues within the Android framework.

## Conference/journal paper publications

<!--
- {% reference bluebird23 %}
-->

<div class="publications">
  {% bibliography -f {{ site.scholar.bibliography }} --group_by none --query @*[selected=bluebird]* %}
</div>

<!--
- {% reference ariadne25 %}
-->

<div class="publications">
  {% bibliography -f {{ site.scholar.bibliography }} --group_by none --query @*[selected=ariadne]* %}
</div>

## Talks

- Auditing Framework APIs via Inferred App-side Security Specifications: SEC'23 talk [video](https://youtu.be/EnpNT_vyh2g)
