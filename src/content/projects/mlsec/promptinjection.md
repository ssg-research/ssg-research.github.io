---
title: Prompt Injection Attacks and Defenses
permalink: /mlsec/promptinjection
---

# Prompt Injection Attacks and Defenses

## Overview

Large language model (LLM) agents routinely retrieve and process untrusted external data, such as web pages, emails, and documents, exposing them to indirect prompt injection (IPI) attacks. Because LLMs cannot reliably separate instructions from data, an attacker can embed malicious instructions in external data to hijack an agent into executing an attacker-chosen task, such as data exfiltration or unauthorized actions. An IPI defense must prevent the agent from following the malicious instructions while still allowing it to use the retrieved data to complete the user's task. Existing defenses often block static attacks, which embed pre-written instructions without adapting to the defense or querying the agent. However, many fail against defense-adaptive attacks that exploit knowledge of the defense, or iterative-adaptive attacks that refine the malicious instructions based on the agent's outputs across repeated queries.

In this project, we develop new attacks and evaluation methods, including automated red-teaming, to expose weaknesses in IPI defenses and understand why they fail. We also investigate defenses at both the model and system levels to protect LLM agents against IPI.

## Technical reports

- Lipeng He, Yihan Wang, Jiawen Zhang, N. Asokan: **PIPETTE: Prompt Injection Purple-Teaming for Robust LLM Agents.** arXiv preprint [arXiv:2611.24362](https://arxiv.org/abs/2611.24362).
- Lipeng He, Yihan Wang, Jiawen Zhang, N. Asokan: **Defending against Adaptive Prompt Injection Attacks via Reasoning-enabled Task Alignment.** arXiv preprint [arXiv:2606.15441](https://arxiv.org/abs/2606.15441).
