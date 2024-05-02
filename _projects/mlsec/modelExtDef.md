---
layout: default
permalink: /mlsec/modelExtDef
nav: false
horizontal: false
title: Model Extraction Attacks and Defenses
---


# Model Extraction Attacks and Defenses

## Background 
As machine learning (ML) applications become increasingly prevalent, protecting the confidentiality of ML models becomes paramount. One way to protect model confidentiality is to limit access to the model only via well-defined prediction APIs. Nevertheless, prediction APIs still leak information so that it is possible to mount model extraction attacks. In model extraction, the adversary only has access to the prediction API of a target model which he queries to extract information about the model internals. The adversary uses this information to gradually train a substitute model that reproduces the predictive behaviour of the target model.

## Conference/journal paper publications

- Rui Zhang, Jian Liu, Sebastian Szyller, Kui Ren, N. Asokan: **False Claims Against Model Ownership Resolution.** [Usenix Sec 2024](https://www.usenix.org/conference/usenixsecurity24) arXiv preprint [arXiv:2304.06607](https://arxiv.org/abs/2304.06607)
- Asim Waheed, Vasisht Duddu, N. Asokan: **GrOVe: Ownership Verification of Graph Neural Networks using Embeddings.** [IEEE S&P 2024](https://sp2024.ieee-security.org/). arXiv preprint [arXiv:2304.08566](https://arxiv.org/abs/2304.08566)
- Buse Gul Atli Tekgul, N Asokan: **FLARE: Fingerprinting Deep Reinforcement Learning Agents using Universal Adversarial Masks.** [ACSAC 2023](https://sp2024.ieee-security.org/). arXiv preprint [arXiv:2307.14751](https://arxiv.org/abs/2307.14751)
- Sebastian Szyller, Rui Zhang, Jian Liu, N. Asokan: **On the Robustness of Dataset Inference.** [TMLR 2023](https://openreview.net/forum?id=LKz5SqIXPJ)</a>. arXiv preprint [arXiv:2210.13631](https://arxiv.org/abs/2210.13631)
- Sebastian Szyller, N. Asokan: **Conflicting Interactions Among Protection Mechanisms for Machine Learning Models**. [AAAI 2023](https://aaai-23.aaai.org). arXiv preprint [arXiv:2207.01991](https://arxiv.org/abs/2207.01991)
- Buse G. A. Tekgul, N. Asokan: **On the Effectiveness of Dataset Watermarking.** [CODASPY-IWSPA 2022](https://sites.google.com/view/iwspa-2022/). arXiv preprint [arXiv:2202.12506](https://arxiv.org/abs/2202.12506)
- Sebastian Szyller, Buse G. A. Tekgul, Samuel Marchal, N. Asokan: **DAWN: Dynamic Adversarial Watermarking of Neural Networks.** [ACM Multimedia 2021](https://2021.acmmm.org/). arXiv preprint [arXiv:1906.00830](https://arxiv.org/abs/1906.00830)
- Buse G. A. Tekgul, Yuxi Xia, Samuel Marchal, N. Asokan. **WAFFLE: Watermarking in Federated Learning.** [SRDS 2021](https://srds-conference.org/). arXiv preprint [arXiv:2008.07298](https://arxiv.org/abs/2008.07298)
- Buse G. A. Tekgul, Sebastian Szyller, Mika Juuti, Samuel Marchal, N. Asokan: **Extraction of Complex DNN Models: Real Threat or Boogeyman?** [AAAI-EDSMLS 2020](https://sites.google.com/view/edsmls2020/home). arXiv preprint: [arXiv:1910.05429](https://arxiv.org/abs/1910.05429)
- Mika Juuti, Sebastian Szyller, Alexey Dmitrenko, Samuel Marchal, N. Asokan: **PRADA: Protecting against DNN Model Stealing Attacks.** IEEE Euro S&P 2019. arXiv preprint [arXiv:1805.02628](https://arxiv.org/abs/1805.02628)

## Technical reports

- Sebastian Szyller, Vasisht Duddu, Tommi Gröndahl, N. Asokan: **Good Artists Copy, Great Artists Steal: Model Extraction Attacks Against Image Translation Generative Adversarial Networks.** arXiv preprint [arXiv:2104.12623](https://arxiv.org/abs/2104.12623)

## Theses

- Sebastian Szyller (Doctoral Dissertation): **Ownership and Confidentiality in Machine Learning** (2023), [link](https://aaltodoc.aalto.fi/handle/123456789/122309)
- Asim Waheed (MMath Thesis @UWaterloo): **On Using Embeddings for Ownership Verification of Graph Neural Networks** (2023), [link](https://uwspace.uwaterloo.ca/handle/10012/19674)
- Buse Gul Atli (Doctoral Dissertation): **Securing Machine Learning: Streamlining Attacks and Defenses Under Realistic Adversary Models** (2022), [link](https://aaltodoc.aalto.fi/handle/123456789/115558)
- Shelly Wang (MMath Thesis @UWaterloo): **Security and Ownership Verification in Deep Reinforcement Learning** (2022), [link](https://uwspace.uwaterloo.ca/handle/10012/18443)

## Talks

- On the Robustness of Dataset Watermarking: TMLR'23 [talk](https://www.youtube.com/watch?v=jZ3Lw98gfv8)
- On the Effectiveness of Dataset Watermarking: IWSPA'22 [pdf](https://ssg.aalto.fi/wp-content/uploads/2022/05/IWSPA2022-DatasetWatermarking.pdf) [talk](https://www.youtube.com/watch?v=9whoREZim2U&list=PLabB1oNtPsdC7cbfHt0VacTaf1XB8Bmhz&index=10)
- WAFFLE: SRDS'21 [pdf](https://ssg.aalto.fi/wp-content/uploads/2022/05/SRDS2021-WAFFLE.pdf) [talk](https://www.youtube.com/watch?v=C_zoHSU1wOs)
- Extraction of Complex DNN models: Brief overview [pdf](https://ssg.aalto.fi/wp-content/uploads/2020/02/IntelTalk_Jan_2020.pdf), AAAI-EDSMLS'20 [pdf](https://ssg.aalto.fi/wp-content/uploads/2019/12/EDSMLS_presentation.pdf)
- PRADA: Euro S&P'19 [pdf](https://ssg.aalto.fi/wp-content/uploads/2019/08/EuroSP19.pdf)

## Demos and Posters

- GrOVe Poster[pdf](../../assets/pdf/mlsec/grove_poster.pdf)
- [CS Research Day 2020](https://www.aalto.fi/en/events/cs-research-day-2020): **WAFFLE: Watermarking in Federated Learning** (October 1, Aalto University, Finland), [presentation](https://www.youtube.com/watch?v=C_zoHSU1wOs)
- [Secure Systems Demo Day 2019](https://ssg.aalto.fi/events/demo-day-2019/): **Stealing Complex DNN Models: Limitations and Defense Strategies** (May 29, Aalto University, Finland), [poster](https://ssg.aalto.fi/wp-content/uploads/2019/05/20_Atli.pdf)

## Source code

- [GitHub source code for False-Claims](https://github.com/ssg-research/Falseclaims)
- [GitHub source code for GrOVe](https://github.com/ssg-research/GrOVe")
- [GitHub source code for FLARE](https://github.com/ssg-research/FLARE)
- [GitHub source code for Conflicting Interactions](https://github.com/ssg-research/conflicts-in-ml-protection-mechanisms)
- [GitHub source code for WAFFLE](https://github.com/ssg-research/WAFFLE)
- [GitHub source code for DAWN](https://github.com/ssg-research/dawn-dynamic-adversarial-watermarking-of-neural-networks)
- [GitHub source code for PRADA](https://github.com/SSGAalto/prada-protecting-against-dnn-model-stealing-attacks)
