---
layout: default
permalink: /others/fias
nav: false
horizontal: false
title: FIAs
---

# Future Internet Architectures

## Background

The dramatic growth of the Internet has enabled ubiquitous access to information, fostering seamless communication and promoting effective collaboration.  Unfortunately, these capabilities have empowered state-level actors to deploy large-scale surveillance and censorship mechanisms to monitor people's Internet activities or limit their ability to freely access and publish information.  Although Internet surveillance and censorship mechanisms have substantially broadened and become more capable over the past decades, the deployment of effective privacy-enhancing tools remains a significant challenge.

## Surveillance and Censorship

As of today, state-level actors have been found to leverage different features of the IP protocol to undertake censorship efforts.  Many of these same methods can also be effectively used in FIAs.

### Packet Inspection

In deep packet inspection, the payload and headers of a packet are compared with a set of pre-defined patterns to identify similarities.  When a network packet matches the established criteria, the state-level adversary can take some action.  Many of the FIAs include additional information and functionality in their network-layer packet design such as complete routes, service-layer information, and content addresses. Access to this additional information may allow adversaries to enhance DPI-based surveillance efforts and develop more fine-grained filtering policies. The obscurity in packet source/destination introduced by content-centric designs is offset by their content address.

### Packet Manipulation

Besides seeking to identify or outright block specific flows in a network, adversaries might also seek to modify packet contents or change the way these packets move through the network. Packet manipulation generally violates the integrity of communications, and can allow an adversary to, for instance, intercept sensitive data and alter the communication between two parties.  Packet manipulation is markedly more difficult in many FIAs, as integrity checks and defenses were carefully considered in the design documents.  One overlooked aspect is the ability of an adversary to re-route packets through locations of their choosing, an attack that has few practical uses outside of censorship and surveillance.

### Traffic Analysis

Traffic analysis is the process of examining a network's connection metadata with the purpose of inferring information about the communications of users (e.g., the websites they browse or whom they speak to in instant-messaging applications), even when these communications are encrypted.  Although every FIA makes some adjustment to how packets are passed to and from users, there is little evidence to suggest that FIA designs are inherently resistant to traffic analysis attacks. More practical research is required to assess FIAs' susceptibility to traffic analysis attacks that involve, for instance, fingerprinting attempts.

## Research
Currently, we have analyzed the different design elements of six prominent FIAs, pinpointing conceivable avenues of attack that could be exploited by powerful network adversaries to surveil and censor Internet communications. Our analysis encompasses past efforts in designing countermeasures against such practices, while shedding light on areas requiring further attention. Furthermore, we have surveyed the applicability of privacy-enhancing technologies to FIAs. We also provide guidelines for future research into novel FIA-based privacy-enhancing technologies, and recommendations to guide the evaluation of these technologies. For the future of this project we plan to perform empirical testing to evaluate how various censorship evasion tools perform when applied to FIAs.
