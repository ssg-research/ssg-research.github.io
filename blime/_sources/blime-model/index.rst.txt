.. blinded-model documentation master file, created by
   sphinx-quickstart on Thu Mar 24 10:12:40 2022.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Formal model of BliME
=====================

We here document the machine-checked proof of security of the `BliMe <https://arxiv.org/abs/2204.09649>`_ taint-tracking policy.

You will find the model itself `on Github <https://github.com/ssg-research/BliMe>`_

You can also find the slides from a talk on this model `here <https://lachlan.gunn.ee/slides/2023-08-22%20Blime-FStar.pdf>`_.

.. toctree::
   :maxdepth: 2
   :caption: Modules:

   src/Cpu
   src/InstructionDecoder
   src/ISA

   src/Value
   src/Memory
   src/Multi
