---
layout: default
permalink: /mlsec/mlattestation
nav: false
horizontal: false
title: Machine Learning Property Attestations
---


# Machine Learning Property Attestations

## Background 

Providers of machine-learning (ML)-based services make various claims about their models, e.g., accuracy, fairness, or the provenance and representativeness of the data used to train it. 
Regulators and potential clients must convince themselves that these claims are accurate. 
Prior works have used purely ML approaches or cryptographic primitives to prove certain properties, such as distributional properties or proof of training. 
There is a need to efficiently furnish attestations for different types properties across the ML model training and inference pipeline.
We explore different technical mechanisms such as trusted execution environments to furnish such attestations. 

## Conference/journal paper publications

- Vasisht Duddu, Oskari Järvinen, Lachlan J. Gunn, N. Asokan. **Laminator: Verifiable ML Property Cards using Hardware-assisted Attestations.** [ACM CODASPY 2025](https://www.codaspy.org/2025/). arXiV preprint [arXiv:2406.17548](https://arxiv.org/abs/2406.17548)

- Vasisht Duddu, Anudeep Das, Nora Khayata, Hossein Yalame, Thomas Schneider, N. Asokan: **Attesting Distributional Properties of Training Data for Machine Learning.** [ESORICS 2024](https://esorics2024.org/). arXiv preprint [arXiv:2308.09552](https://arxiv.org/abs/2308.09552)

## Posters

- Vasisht Duddu, Oskari Jarvinen, Lachlan J. Gunn, N. Asokan. **Machine Learning Property Attestations using TEEs.** [pdf](../../assets/pdf/mlsec/AttestedML_poster.pdf). IEEE S&P'24.

## Source code

- [GitHub source code for Laminator](https://github.com/ssg-research/laminator)
- [GitHub source code for Distributional Attestation](https://github.com/ssg-research/distribution-attestation)

