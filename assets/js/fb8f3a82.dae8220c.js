"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:6,title:"Terminology"},a=void 0,s={unversionedId:"reference/terminology/README",id:"reference/terminology/README",title:"Terminology",description:"An overview of the terminology used in Otterize OSS documentation.",source:"@site/docs/reference/terminology/README.mdx",sourceDirName:"reference/terminology",slug:"/reference/terminology/",permalink:"/reference/terminology/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/reference/terminology/README.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Terminology"},sidebar:"docSidebar",previous:{title:"Service identities and resolution",permalink:"/reference/service-identities/"},next:{title:"Network policies deep dive",permalink:"/reference/network-policies/"}},c={},l=[{value:"Basics",id:"basics",level:2},{value:"Service",id:"service",level:3},{value:"CLI",id:"cli",level:3},{value:"Intent (or client intent)",id:"intent-or-client-intent",level:3},{value:"Identity",id:"identity",level:2},{value:"PKI",id:"pki",level:3},{value:"mTLS",id:"mtls",level:3},{value:"SPIRE",id:"spire",level:3},{value:"Credentials operator",id:"credentials-operator",level:3},{value:"Enforcement",id:"enforcement",level:2},{value:"Network policies",id:"network-policies",level:3},{value:"Kafka ACLs",id:"kafka-acls",level:3},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Custom resource",id:"custom-resource",level:3},{value:"CNI (Container Network Interface)",id:"cni-container-network-interface",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An overview of the terminology used in Otterize OSS documentation.\nIf you think a term is missing here, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/otterize/docs/issues/new"},"let us know"),"."),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("h3",{id:"service"},"Service"),(0,i.kt)("p",null,'An Otterize service is the logical "atom" of service-to-service authentication and authorization. It can be a client or a server or both. Services are connected through client intents: one service intends to call another service. ',(0,i.kt)("a",{parentName:"p",href:"/reference/service-identities"},"Learn how service identity resolution happens"),"."),(0,i.kt)("h3",{id:"cli"},"CLI"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/reference/cli"},"Otterize CLI")," is a command-line utility used to control and interact with the Otterize network mapper, manipulate local Intents files, and (coming soon!) interact with Otterize Cloud."),(0,i.kt)("h3",{id:"intent-or-client-intent"},"Intent (or client intent)"),(0,i.kt)("p",null,"Otterize intents are a way to declare that one service intends to call another service. Otterize uses them to apply authorization rules to enable the calls to go through, and block any unintended calls. An ",(0,i.kt)("em",{parentName:"p"},"intent")," refers to a client declaring a particular call to a server; ",(0,i.kt)("em",{parentName:"p"},"all")," a given client's intents to the servers it intends to call are collected in a single ",(0,i.kt)("em",{parentName:"p"},"client intents file"),". ",(0,i.kt)("a",{parentName:"p",href:"/reference/intents-and-intents-files"},"Learn more about intents"),"."),(0,i.kt)("h2",{id:"identity"},"Identity"),(0,i.kt)("h3",{id:"pki"},"PKI"),(0,i.kt)("p",null,"PKI stands for public key infrastructure, and refers to the infrastructure used to provision X.509 credentials.\nA common use case for PKI is to support mTLS."),(0,i.kt)("h3",{id:"mtls"},"mTLS"),(0,i.kt)("p",null,"mTLS stands for mutual TLS, and is a form of TLS where both the client and server mutually authenticate to each other.\nIn other words, mTLS is mutual TLS."),(0,i.kt)("p",null,"In regular TLS, only the server is authenticated. For example, when you connect to google.com, a\nnd your browser authenticates google.com using its certificate, you're using TLS;\nbut google.com does not authenticate you, as the client, with a certificate, so the communication isn't using mTLS, just TLS."),(0,i.kt)("h3",{id:"spire"},"SPIRE"),(0,i.kt)("p",null,"An open-source implementation of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spiffe/spire"},"SPIFFE")," specification. It's used for workload attestation and credential management. ",(0,i.kt)("a",{parentName:"p",href:"https://spiffe.io/docs/latest/spire-about/"},"Read more about SPIRE in the official documentation"),"."),(0,i.kt)("h3",{id:"credentials-operator"},"Credentials operator"),(0,i.kt)("p",null,"The Otterize ",(0,i.kt)("a",{parentName:"p",href:"/reference/configuration/credentials-operator"},"Credentials operator")," automatically resolves pods to dev-friendly service names, registers them with a SPIRE server, and provisions credentials as a Kubernetes Secrets."),(0,i.kt)("h2",{id:"enforcement"},"Enforcement"),(0,i.kt)("h3",{id:"network-policies"},"Network policies"),(0,i.kt)("p",null,"Kubernetes network policies can be used to control network access between pods in a Kubernetes cluster.\nTo do so they require the installation of a Kubernetes CNI network plugin that supports network policy enforcement.\nOne commonly supported CNI is Calico.\n",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"Read more about network policies in the official documentation"),"."),(0,i.kt)("h3",{id:"kafka-acls"},"Kafka ACLs"),(0,i.kt)("p",null,"ACLs stand for Access Control Lists, a built-in mechanism in Kafka (and other systems) for authorizing access\nto Kafka resources such as topics.\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/kafka/authorization.html#authorization-using-acls"},"Read more about Kafka ACLs in the official documentation"),"."),(0,i.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,i.kt)("h3",{id:"custom-resource"},"Custom resource"),(0,i.kt)("p",null,"A Kubernetes custom resource refers to a resource that is not present in the base distribution of Kubernetes (such as Deployment or Pod), but comes with an installed operator. The ",(0,i.kt)("a",{parentName:"p",href:"/reference/intents-and-intents-files/"},"Otterize ClientIntents")," are one such resource. ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Read more about Kubernetes custom resources here"),"."),(0,i.kt)("h3",{id:"cni-container-network-interface"},"CNI (Container Network Interface)"),(0,i.kt)("p",null,"CNI is a CNCF project that provides libraries for implementing plugins for configuring network interfaces in Linux containers, and is used by Kubernetes to provide pods running in a cluster with network connectivity.\nExamples of CNI plugins are Calico, Cilium, the AWS VPC CNI plugin. ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"Read more about Kubernetes CNI plugins here"),"."))}p.isMDXComponent=!0}}]);