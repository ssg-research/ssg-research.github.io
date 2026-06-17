---
title: Availability and Run-time Integrity Conflicts
permalink: /platsec/pair
---

# Availability and Run-time Integrity Conflicts

## Background

Run-time integrity enforcement presents a fundamental conflict with availability, particularly in real-time systems. Existing approaches in this space primarily focus on minimizing the execution-time overehad of monitoring. However after a violation is detected, a trade-off is faced: (1) prioritize availability and allow a compromised system to continue to ensure applications meet their deadlines or (2) prioritize security by generating a fault to abort all execution. This project explores architectural methods to offer a middle ground.

## Technical reports

- Adam Ilyas Caulfield, Muhammad Wasif Kamran, N. Asokan: **Resolving Availability and Run-time Integrity Conflicts in Real-Time Embedded Systems** arXiv preprint [arXiv:2511.14088](https://arxiv.org/abs/2511.14088)
