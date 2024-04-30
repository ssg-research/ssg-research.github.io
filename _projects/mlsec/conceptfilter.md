---
layout: default
permalink: /mlsec/mlattestation
nav: false
horizontal: false
title: Robust Concept Filtering in Text to Image Models
---


# Robust Concept Filtering in Text to Image Models

## Background 

Diffusion based text-to-image (T2I) models generate high fidelity images for given textual prompts. 
They are trained on large datasets scraped from the Internet, potentially containing unacceptable concepts (e.g., copyright infringing or unsafe). 
Retraining T2I models after filtering out unacceptable concepts in the training data is inefficient and degrades utility.
Hence, there is a need for concept removal techniques.

We introduce Espresso, the first robust concept filter based on Contrastive Language-Image Pre-Training (CLIP). 
We show Espresso is effective in removing unacceptable concepts, utility-preserving on acceptable concepts, and robust against evasion with adversarial prompts.

## Technical Reports

- Anudeep Das, Vasisht Duddu, Rui Zhang, N. Asokan: **Espresso: Robust Concept Filtering in Text-to-Image Models.** arXiv preprint


## Source code

- [GitHub source code for Espresso]()

