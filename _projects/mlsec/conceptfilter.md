---
layout: default
permalink: /mlsec/conceptfilter
nav: false
horizontal: false
title: Content Moderation for Generative Models
---


# Content Moderation for Generative Models

## Background 

Diffusion based text-to-image (T2I) models generate high fidelity images for given textual prompts. 
They are trained on large datasets scraped from the Internet, potentially containing unacceptable concepts (e.g., copyright infringing or unsafe). 
Retraining T2I models after filtering out unacceptable concepts in the training data is inefficient and degrades utility.
Hence, there is a need for concept removal techniques.

We introduce Espresso, the first robust concept filter based on Contrastive Language-Image Pre-Training (CLIP). 
We show Espresso is effective in removing unacceptable concepts, utility-preserving on acceptable concepts, and robust against evasion with adversarial prompts.

We demonstrate that, despite concept replacement techniques being applied, when generative diffusion models are used in the Image-to-Image (I2I) setting, images containing the unacceptable concept are able to be reconstructed. This calls into question whether current replacement techniques are sufficient to prevent unacceptable concepts from being generated. Furthermore, we present AntiMirror, a technique to prevent unacceptable concept generation in the I2I setting by modifying targeted regions of the generated image prior to outputting it, and we show its viability on celebrity concepts.

## Conference/journal paper publications

- Anudeep Das, Vasisht Duddu, Rui Zhang, N. Asokan: **Espresso: Robust Concept Filtering in Text-to-Image Models.** [ACM CODASPY 2025](https://www.codaspy.org/2025/). arXiv preprint. [arxiv:2404.19227](https://arxiv.org/abs/2404.19227) (Best paper award)

## Pre-Prints

- Anudeep Das, Gurjot Singh, Prach Chantasantitam, N. Asokan:  **Do Concept Replacement Techniques Really Erase Unacceptable Concepts?** arXiv preprint. [arxiv:2506.08991](https://arxiv.org/abs/2506.08991)
