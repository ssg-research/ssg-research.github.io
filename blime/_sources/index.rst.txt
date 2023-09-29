Blinded Memory
==============

Outsourced computing is widely used today. However, current approaches for protecting client data in outsourced computing fall short: use of cryptographic techniques like fully-homomorphic encryption incurs substantial costs, whereas use of hardware-assisted trusted execution environments has been shown to be vulnerable to server malware, run-time attacks, and side-channel attacks.

We present Blinded Memory (BliMe), an architecture to realize efficient and secure outsourced computation. BliMe consists of a novel and minimal set of ISA extensions implementing a taint-tracking policy to ensure the confidentiality of client data even in the presence of server vulnerabilities. To secure outsourced computation, the BliMe extensions can be used together with an attestable, fixed-function hardware security module (HSM) and an encryption engine that provides atomic decrypt-and-taint and encrypt-and-untaint operations. Clients rely on remote attestation and key agreement with the HSM to ensure that their data can be transferred securely to and from the encryption engine and will always be protected by BliMe's taint-tracking policy while at the server.

We provide a machine-checked security proof of BliMe extensions, and an RTL implementation BliMe-BOOM based on the BOOM RISC-V core. BliMe-BOOM incurs no reduction in clock frequency relative to unmodified BOOM, nor does it use significantly more power (<0.5%) or FPGA resources (<5.5%). Various implementations of BliMe (on FPGA and the gem5 simulator) incur only moderate performance overhead (8-25%).

.. toctree::
   :maxdepth: 1

   Preprint <https://arxiv.org/abs/2204.09649>
   Source code <https://github.com/ssg-research/blime>
   Formal model <blime-model/index>

**Cite as:**

  H ElAtali, L J Gunn, H Liljestrand, N Asokan, "BliMe: Verifiably Secure Outsourced Computation with Hardware-Enforced Taint Tracking", Network and Distributed Systems Symposium (NDSS), San Diego, CA, USA. 2024. ArXiV:2204.09649.


**For more information see the** `Secure Systems Group website <https://ssg-research.github.io/>`_.
