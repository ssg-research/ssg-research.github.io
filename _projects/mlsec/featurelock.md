---
layout: default
permalink: /mlsec/featurelock
nav: false
horizontal: false
title: Feature Locking for Language Models
---


# Feature Locking for Language Models

Chatbot service providers (e.g., OpenAI) rely on tiered subscription plans to generate revenue, offering black-box access to basic models for free users and advanced models to paying subscribers. 
However, this approach is unprofitable and inflexible for the users. A pay-to-unlock scheme for premium features (e.g., math, coding) offers a more sustainable alternative. 
Enabling such a scheme requires a feature-locking technique (FLoTE) that is (i) effective in refusing locked features, (ii) utility-preserving for unlocked features, (iii) robust against evasion or unauthorized credential sharing, and (iv) scalable to multiple features and clients. Existing FLoTEs (e.g., password-locked models) fail to meet these criteria. 


In this line of work, we present LOCKET, the first robust and scalable FLoTE to enable pay-to-unlock schemes. 


## Pre-Prints

- Lipeng He, Vasisht Duddu, N. Asokan: **Locket: Robust Feature-Locking Technique for Language Models** arXiv preprint. [arxiv:2510.12117](https://arxiv.org/abs/2510.12117)

