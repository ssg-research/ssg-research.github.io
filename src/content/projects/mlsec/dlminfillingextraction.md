---
# Copy this file to start a new project page, then remove `published: false`
# so it goes live. Only the keys below are read — keep the frontmatter minimal.
title: Extracting Training Data from Diffusion Language Models via Infilling
permalink: /mlsec/dlminfillingextraction # the live URL: pick /mlsec, /platsec, or /others
# redirect_from:               # optional — old URLs that should redirect here
#   - /oldpath/
# published: false
---

# Extracting Training Data from Diffusion Language Models via Infilling

## Overview

Memorization in large language models has been studied almost exclusively through prefix-conditioned extraction, a natural choice for autoregressive models. 
  However, diffusion language models (DLMs) can denoise masked tokens at arbitrary positions. 
  Thus, prefix-only probing reveals only one facet of memorization in DLMs and significantly underestimates the risk of training-data extraction. 
    In order to realistically model extractability of training data in DLMs, we introduce infilling extraction, a data-extraction protocol parameterized by an arbitrary binary mask that subsumes prefix-only probing and accounts for the bidirectional inductive bias of DLMs. 
    Instantiating it on LLaDA-8B and Dream-7B across five extraction modes, three training pipelines, and three corpora covering verbatim and partial leakage, we find that mask geometry governs extractability: edge-conditioned masks extract up to three times more verbatim sequences than prefix-conditioned ones, and bidirectional access opens channels inaccessible in autoregressive models. 
      In particular, an adversary who obtains a PII-redacted copy of the training data can use targeted infilling to raise PII recall on fine-tuned DLMs by 2.5–4.5× over prefix-conditioned extraction, substantially narrowing the gap to a scale-matched autoregressive model and, for LLaDA on email addresses, exceeding it under greedy prefix-conditioned extraction. 
        Tunable parameters for decoding measurably affect extraction performance, while a follow-up supervised fine-tuning stage does not eliminate the prior memorization.


## Conference/journal paper publications

- Yihan Wang, N. Asokan: **Extracting Training Data from Diffusion Language Models via Infilling.** [2026](https://neurips.cc/virtual/2026/loc/sydney/poster/149365). arXiv preprint [arXiv:2605.24173](https://arxiv.org/abs/2605.24173).

## Source code

- [Repository name](https://github.com/ssg-research/DLM-Infilling-Extraction)
