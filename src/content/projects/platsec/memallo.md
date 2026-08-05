---
title: Memory Allocation
permalink: /platsec/memallo
---

# Memory Allocation

## Objectives

Heap-related vulnerabilities, such as overflow, double-free, and use-after-free (UAF), are widespread and pose significant threats. Yet, many default memory allocators offer limited protection against these vulnerabilities. This project focuses on creating secure memory allocators with straightforward and effective designs, aiming to develop alternatives to the default system allocators that ensure both enhanced security and acceptable performance overheads.

## Conference/journal paper publications

- Ruizhe Wang, Meng Xu, N. Asokan: **S2malloc: Statistically Secure Allocator for Use-After-Free Protection And More.** Conference on Detection of Intrusions and Malware & Vulnerability Assessment (DIMVA) 2024. arXiv preprint [arXiv:2402.01894](https://arxiv.org/abs/2402.01894).
- Ruizhe Wang, Meng Xu, N. Asokan: **SeMalloc: Semantics-Informed Memory Allocator.** ACM Conference on Computer and Communications Security (CCS) 2024. arXiv preprint [arXiv:2402.03373](https://arxiv.org/abs/2402.03373).

## Source code

- [SeMalloc](https://github.com/ssg-research/semalloc)
- [S2Malloc](https://github.com/ssg-research/s2malloc)
