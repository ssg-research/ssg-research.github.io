---
title: Enhancing Memory-Safe Architectures
permalink: /platsec/coloredcaps
---

# Enhancing Memory-Safe Architectures

## Background

Capability Hardware Enhanced RISC Instructions (CHERI) is an instruction-set architecture (ISA) extension that replaces conventional pointers with capabilities, unforgeable tokens carrying explicit bounds and permissions, to enforce spatial memory safety. CHERI has been adapted across multiple architectures and is gaining real-world deployment. This project explores extending CHERI's guarantees beyond spatial memory safety, broadening its security model across memory and system abstractions.

## Publications

- Merve Gülmez, Ruben Sturm, Hossam ElAtali, Håkan Englund, Jonathan Woodruff, N. Asokan, Thomas Nyman: **PICASSO: Scaling CHERI Use-After-Free Protection to Millions of Allocations using Colored Capabilities** USENIX Security 2026, arXiv preprint [arXiv:2602.09131](https://arxiv.org/abs/2602.09131)
