"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docSidebar":[{"type":"link","label":"Introduction to Otterize","href":"/","docId":"documentation/introduction"},{"type":"link","label":"Getting started with Otterize","href":"/documentation/getting-started/","docId":"documentation/getting-started/README"},{"type":"category","label":"Quick tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Automate network policies","href":"/documentation/quick-tutorials/k8s-network-policies","docId":"documentation/quick-tutorials/k8s-network-policies"},{"type":"link","label":"Map your cluster","href":"/documentation/quick-tutorials/k8s-network-mapper","docId":"documentation/quick-tutorials/k8s-network-mapper"},{"type":"link","label":"Deploy mTLS between pods and Kafka","href":"/documentation/quick-tutorials/kafka-mtls","docId":"documentation/quick-tutorials/kafka-mtls"},{"type":"link","label":"Deploy mTLS between pods","href":"/documentation/quick-tutorials/k8s-mtls","docId":"documentation/quick-tutorials/k8s-mtls"}],"href":"/documentation/quick-tutorials/"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installing Otterize in Kubernetes","href":"/documentation/guides/k8s-installation","docId":"documentation/guides/k8s-installation"},{"type":"category","label":"IBAC in Kubernetes via network policies","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Deeper dive into network policies","href":"/documentation/guides/k8s-ibac-via-network-policies/deeper-dive","docId":"documentation/guides/k8s-ibac-via-network-policies/deeper-dive"}],"href":"/documentation/guides/k8s-ibac-via-network-policies/"},{"type":"category","label":"IBAC for Kafka in Kubernetes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Credentials","href":"/documentation/guides/ibac-for-k8s-kafka/credentials","docId":"documentation/guides/ibac-for-k8s-kafka/credentials"}],"href":"/documentation/guides/ibac-for-k8s-kafka/"},{"type":"link","label":"Mapping pod-to-pod calls in Kubernetes","href":"/documentation/guides/k8s-mapping-pod-to-pod-calls","docId":"documentation/guides/k8s-mapping-pod-to-pod-calls"},{"type":"link","label":"Kubernetes mTLS with Otterize","href":"/documentation/guides/k8s-mtls/","docId":"documentation/guides/k8s-mtls/README"},{"type":"link","label":"Implementing IBAC with Otterize","href":"/documentation/guides/implementing-ibac","docId":"documentation/guides/implementing-ibac"}],"href":"/documentation/guides/"},{"type":"link","label":"Terminology","href":"/documentation/terminology/","docId":"documentation/terminology/README"},{"type":"link","label":"IBAC: Intent-based access control","href":"/documentation/intents-based-access-control/","docId":"documentation/intents-based-access-control/README"},{"type":"link","label":"Intents and intents files","href":"/documentation/intents-and-intents-files/","docId":"documentation/intents-and-intents-files/README"},{"type":"category","label":"Service identities","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Using credentials","href":"/documentation/service-identities/using-credentials/","docId":"documentation/service-identities/using-credentials/README"}],"href":"/documentation/service-identities/"},{"type":"link","label":"CLI command reference","href":"/documentation/cli/","docId":"documentation/cli/README"},{"type":"link","label":"FAQ","href":"/documentation/faq/","docId":"documentation/faq/README"},{"type":"category","label":"Components","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Otterize OSS","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Helm chart","href":"/documentation/components/otterize/helm-chart","docId":"documentation/components/otterize/helm-chart"}],"href":"/documentation/components/otterize/"},{"type":"category","label":"Intents operator","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Helm chart","href":"/documentation/components/intents-operator/helm-chart","docId":"documentation/components/intents-operator/helm-chart"}],"href":"/documentation/components/intents-operator/"},{"type":"category","label":"SPIRE integration operator","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Helm chart","href":"/documentation/components/spire-integration-operator/helm-chart","docId":"documentation/components/spire-integration-operator/helm-chart"}],"href":"/documentation/components/spire-integration-operator/"}]},{"type":"link","label":"Debugging","href":"/documentation/debugging/","docId":"documentation/debugging/README"}]},"docs":{"documentation/cli/README":{"id":"documentation/cli/README","title":"CLI command reference","description":"The following are the commands offered by the Otterize command line interface (CLI).","sidebar":"docSidebar"},"documentation/components/intents-operator/helm-chart":{"id":"documentation/components/intents-operator/helm-chart","title":"Helm chart","description":"https://github.com/otterize/helm-charts/tree/main/intents-operator","sidebar":"docSidebar"},"documentation/components/intents-operator/README":{"id":"documentation/components/intents-operator/README","title":"Intents operator","description":"The Otterize intents operator is an open source Kubernetes operator for easily managing service-to-service authorization","sidebar":"docSidebar"},"documentation/components/otterize/helm-chart":{"id":"documentation/components/otterize/helm-chart","title":"Helm chart","description":"https://github.com/otterize/helm-charts/tree/main/otterize-kubernetes","sidebar":"docSidebar"},"documentation/components/otterize/README":{"id":"documentation/components/otterize/README","title":"Otterize OSS","description":"","sidebar":"docSidebar"},"documentation/components/spire-integration-operator/helm-chart":{"id":"documentation/components/spire-integration-operator/helm-chart","title":"Helm chart","description":"https://github.com/otterize/helm-charts/tree/main/spire-integration-operator","sidebar":"docSidebar"},"documentation/components/spire-integration-operator/README":{"id":"documentation/components/spire-integration-operator/README","title":"SPIRE integration operator","description":"The Otterize SPIRE Integration Operator automatically resolves pods to dev-friendly service names, registers them with a SPIRE server, and optionally provisions credentials as a Kubernetes Secrets.","sidebar":"docSidebar"},"documentation/debugging/README":{"id":"documentation/debugging/README","title":"Debugging","description":"Debugging flow:","sidebar":"docSidebar"},"documentation/faq/README":{"id":"documentation/faq/README","title":"FAQ","description":"1. What is the difference between authorization and authentication?","sidebar":"docSidebar"},"documentation/getting-started/README":{"id":"documentation/getting-started/README","title":"Getting started with Otterize","description":"Otterize OSS implements intent-based access control in a single Kubernetes cluster.","sidebar":"docSidebar"},"documentation/guides/ibac-for-k8s-kafka/credentials":{"id":"documentation/guides/ibac-for-k8s-kafka/credentials","title":"Credentials","description":"The following examples reference the Kafka and client deployed in the tutorial","sidebar":"docSidebar"},"documentation/guides/ibac-for-k8s-kafka/README":{"id":"documentation/guides/ibac-for-k8s-kafka/README","title":"Intent-based access control for Kafka in Kubernetes","description":"We can realize intent-based access control in Kubernetes is by leveraging the built-in capabilities","sidebar":"docSidebar"},"documentation/guides/implementing-ibac":{"id":"documentation/guides/implementing-ibac","title":"Implementing IBAC with Otterize","description":"","sidebar":"docSidebar"},"documentation/guides/k8s-ibac-via-network-policies/deeper-dive":{"id":"documentation/guides/k8s-ibac-via-network-policies/deeper-dive","title":"Deeper dive into network policies","description":"Network policies are one of the tools we","sidebar":"docSidebar"},"documentation/guides/k8s-ibac-via-network-policies/README":{"id":"documentation/guides/k8s-ibac-via-network-policies/README","title":"IBAC in Kubernetes via network policies","description":"One of the easiest ways to realize intent-based access control in Kubernetes is by leveraging network policies.","sidebar":"docSidebar"},"documentation/guides/k8s-installation":{"id":"documentation/guides/k8s-installation","title":"Installing Otterize in Kubernetes","description":"Install Otterize on a Kubernetes cluster using helm.","sidebar":"docSidebar"},"documentation/guides/k8s-mapping-pod-to-pod-calls":{"id":"documentation/guides/k8s-mapping-pod-to-pod-calls","title":"Mapping pod-to-pod calls in Kubernetes","description":"How to collect call traffic","sidebar":"docSidebar"},"documentation/guides/k8s-mtls/README":{"id":"documentation/guides/k8s-mtls/README","title":"Kubernetes mTLS with Otterize","description":"Otterize can automatically provision mTLS credentials by baking exiting K8s workload identities into certificates.","sidebar":"docSidebar"},"documentation/guides/README":{"id":"documentation/guides/README","title":"Guides","description":"These guides take you through installing and using Otterize.","sidebar":"docSidebar"},"documentation/intents-and-intents-files/README":{"id":"documentation/intents-and-intents-files/README","title":"Intents and intents files","description":"","sidebar":"docSidebar"},"documentation/intents-based-access-control/README":{"id":"documentation/intents-based-access-control/README","title":"IBAC: Intent-based access control","description":"At Otterize, we believe service-to-service access control should become not only easy but actually transparent to service developers. We believe that access should not only be self-serve \u2014 that it should happen without needing to go through any extra steps beyond what developers are already doing. And we believe that access control enforcement should be completely decoupled from the functional development of the software: that as the organization improves its security and compliance posture, developers should not need to revisit their working code.","sidebar":"docSidebar"},"documentation/introduction":{"id":"documentation/introduction","title":"Introduction to Otterize","description":"What is Otterize","sidebar":"docSidebar"},"documentation/quick-tutorials/k8s-mtls":{"id":"documentation/quick-tutorials/k8s-mtls","title":"Deploy mTLS between pods","description":"This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.","sidebar":"docSidebar"},"documentation/quick-tutorials/k8s-network-mapper":{"id":"documentation/quick-tutorials/k8s-network-mapper","title":"Map your cluster","description":"The Network Mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you","sidebar":"docSidebar"},"documentation/quick-tutorials/k8s-network-policies":{"id":"documentation/quick-tutorials/k8s-network-policies","title":"Automate network policies","description":"Otterize automates network policies within your cluster by abstracting away","sidebar":"docSidebar"},"documentation/quick-tutorials/kafka-mtls":{"id":"documentation/quick-tutorials/kafka-mtls","title":"Deploy mTLS between pods and Kafka","description":"This tutorial will walk you through applying intents and deploying mTLS certificates between a client and a Kafka cluster","sidebar":"docSidebar"},"documentation/quick-tutorials/README":{"id":"documentation/quick-tutorials/README","title":"Quick tutorials","description":"Get to know Otterize in 5 minutes with these quick tutorials.","sidebar":"docSidebar"},"documentation/service-identities/README":{"id":"documentation/service-identities/README","title":"Service identities","description":"All about service names, identities, labels, and credentials","sidebar":"docSidebar"},"documentation/service-identities/using-credentials/README":{"id":"documentation/service-identities/using-credentials/README","title":"Using credentials","description":"mTLS credentials","sidebar":"docSidebar"},"documentation/terminology/README":{"id":"documentation/terminology/README","title":"Terminology","description":"An overview of the terminology used in Otterize OSS documentation.","sidebar":"docSidebar"}}}')}}]);