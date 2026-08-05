---
title: Blinded Memory
permalink: /platsec/blime
redirect_from:
  - /blime/
---

# Blinded Memory

## Overview

Outsourced computing is widely used today. However, current approaches for protecting client data in outsourced computing fall short: use of cryptographic techniques like fully-homomorphic encryption incurs substantial costs, whereas use of hardware-assisted trusted execution environments has been shown to be vulnerable to run-time attacks, and side-channel attacks.

We present Blinded Memory (BliMe), an architecture to realize efficient and secure outsourced computation. BliMe consists of a novel and minimal set of ISA extensions implementing a taint-tracking policy to ensure the confidentiality of client data even in the presence of server vulnerabilities. To secure outsourced computation, the BliMe extensions can be used together with an attestable, fixed-function hardware security module (HSM) and an encryption engine that provides atomic decrypt-and-taint and encrypt-and-untaint operations. Clients rely on remote attestation and key agreement with the HSM to ensure that their data can be transferred securely to and from the encryption engine and will always be protected by BliMe's taint-tracking policy while at the server.

We provide a machine-checked security proof of BliMe extensions, and an RTL implementation BliMe-BOOM based on the BOOM RISC-V core. BliMe-BOOM incurs no reduction in clock frequency relative to unmodified BOOM, nor does it use significantly more power (&lt;1.5%) or FPGA resources (≤9.0%). Various implementations of BliMe (on FPGA and the gem5 simulator) incur only moderate performance overhead (8-25%). We also provide a machine-checked security proof of a simplified model ISA with BliMe extensions.

## Conference/journal paper publications

- H ElAtali, M Gülmez, T Nyman, N Asokan: **BLACKOUT: Data-Oblivious Computation with Blinded Capabilities.** [ACM Conference on Computer and Communications Security (CCS) 2025](https://doi.org/10.1145/3719027.3765169). arXiv preprint [arXiv:2504.14654](https://arxiv.org/abs/2504.14654). [Project website](https://blindedcapabilities.github.io/).
- P Makkar, H ElAtali, A Caulfield, N Asokan: **MAGNET: Memory Tagging with Efficient Tag Prediction.** [International Workshop on Hardware and Architectural Support for Security and Privacy (HASP) 2025](https://doi.org/10.1145/3768725.3768728).
- H ElAtali, L J Gunn, H Liljestrand, N Asokan: **BliMe: Verifiably Secure Outsourced Computation with Hardware-Enforced Taint Tracking.** [Network and Distributed Systems Symposium (NDSS) 2024](https://www.ndss-symposium.org/ndss-paper/blime-verifiably-secure-outsourced-computation-with-hardware-enforced-taint-tracking/). arXiv preprint [arXiv:2204.09649](https://arxiv.org/abs/2204.09649).
- H ElAtali, X Duan, H Liljestrand, M Xu, N Asokan: **BliMe Linter.** [IEEE Secure Development Conference (SecDev) 2024](https://doi.org/10.1109/SecDev61143.2024.00011). arXiv preprint [arXiv:2406.15302](https://arxiv.org/abs/2406.15302).
- H ElAtali, J Z Jekel, L J Gunn, N Asokan: **Data-Oblivious ML Accelerators using Hardware Security Extensions.** [IEEE International Symposium on Hardware Oriented Security and Trust (HOST) 2024](https://doi.org/10.1109/HOST55342.2024.10545398). arXiv preprint [arXiv:2401.16583](https://arxiv.org/abs/2401.16583).

## Doctoral Dissertations
- Hossam ElAtali, [Hardware-Assisted Defenses for Data Integrity and Confidentiality](https://uwspace.uwaterloo.ca/items/b84f777e-53c1-4904-9c5a-b28931e4c7c7), University of Waterloo, 2025

## Master's Theses

- Mehdi Aghakishiyev, [Compiler Support for Constant-Time Programs in LLVM](https://uwspace.uwaterloo.ca/items/98518790-b765-4520-946a-3a8656b1a362), University of Waterloo, 2025
- Xiaohe Duan, [Compiler-Based Approach to Enhance BliMe Hardware Usability](https://uwspace.uwaterloo.ca/items/faf4d40c-71d0-4d98-9222-9a0c04237f5e), University of Waterloo, 2023

## Talks

- BliMe: NDSS'24 [talk](https://youtu.be/cfyvaW1wwQk?si=TuICEfLogqUjTgAp), [pdf](/assets/pdf/platsec/BliMe-NDSS24-slides.pdf)
- Dolma: HOST'24 [poster](/assets/pdf/platsec/Dolma-HOST24-poster.pdf)

## Source code

- [BliMe-BOOM on Chipyard/FireSim](https://github.com/ssg-research/BliMe/tree/main/firesim)
- [Formal model in F*](https://blinded-computation.github.io/blime-model/index.html)

<!-- ## Follow-up work

- [BLACKOUT](https://blindedcapabilities.github.io/) -->
