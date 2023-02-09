"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3,title:"Credentials operator"},o=void 0,l={unversionedId:"reference/configuration/credentials-operator/README",id:"reference/configuration/credentials-operator/README",title:"Credentials operator",description:"The Otterize Credentials operator automatically resolves pods to dev-friendly service names, registers them with a SPIRE server or with Otterize Cloud, and provisions credentials as Kubernetes Secrets.",source:"@site/docs/reference/configuration/credentials-operator/README.mdx",sourceDirName:"reference/configuration/credentials-operator",slug:"/reference/configuration/credentials-operator/",permalink:"/reference/configuration/credentials-operator/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/reference/configuration/credentials-operator/README.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Credentials operator"},sidebar:"docSidebar",previous:{title:"Configuring Kafka brokers",permalink:"/reference/configuration/intents-operator/configuration"},next:{title:"Helm chart",permalink:"/reference/configuration/credentials-operator/helm-chart"}},s={},d=[{value:"Deploying the Credentials operator",id:"deploying-the-credentials-operator",level:2},{value:"Acquiring mTLS credentials using the Credentials operator",id:"acquiring-mtls-credentials-using-the-credentials-operator",level:2},{value:"Spire workload registrar",id:"spire-workload-registrar",level:2},{value:"Pod annotations",id:"pod-annotations",level:3},{value:"How does the Credentials operator work?",id:"how-does-the-credentials-operator-work",level:2},{value:"SPIRE entry registration",id:"spire-entry-registration",level:3},{value:"Credential generation",id:"credential-generation",level:3},{value:"Service name resolution and automatic pod labeling",id:"service-name-resolution-and-automatic-pod-labeling",level:3}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Otterize Credentials operator automatically resolves pods to dev-friendly service names, registers them with a SPIRE server or with Otterize Cloud, and provisions credentials as Kubernetes Secrets."),(0,a.kt)("h2",{id:"deploying-the-credentials-operator"},"Deploying the Credentials operator"),(0,a.kt)("p",null,"To deploy the operator, ",(0,a.kt)("a",{parentName:"p",href:"/reference/configuration/credentials-operator/helm-chart"},"use the Helm chart"),"."),(0,a.kt)("h2",{id:"acquiring-mtls-credentials-using-the-credentials-operator"},"Acquiring mTLS credentials using the Credentials operator"),(0,a.kt)("p",null,"The Credentials operator is controlled using annotations placed on pods. To have it create credentials, you must specify ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials-operator.otterize.com/tls-secret-name"),"."),(0,a.kt)("h2",{id:"spire-workload-registrar"},"Spire workload registrar"),(0,a.kt)("p",null,"When using Spire, the operator registers every pod (even those without annotations).\nAlongside the Credentials operator, you could use SPIRE agents and the SPIRE SDK to work with the same SPIRE server.\nTo learn more, check the documentation for ",(0,a.kt)("a",{parentName:"p",href:"https://spiffe.io/docs/latest/spire-about/spire-concepts/"},"SPIRE"),". Note that to use the Credentials operator, you do not need to work directly with SPIRE or SPIRE agents, and can do everything completely using annotations and Kubernetes Secrets."),(0,a.kt)("h3",{id:"pod-annotations"},"Pod annotations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/tls-secret-name")),(0,a.kt)("td",{parentName:"tr",align:null},"If set, the operator will create a secret with this name with mTLS credentials for this pod."),(0,a.kt)("td",{parentName:"tr",align:null},"N/A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/dns-names")),(0,a.kt)("td",{parentName:"tr",align:null},"If set, overrides the list of subject alternative names in the certificate. Should include the hostname of Kubernetes services that will be used to access this pod."),(0,a.kt)("td",{parentName:"tr",align:null},"N/A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/cert-ttl")),(0,a.kt)("td",{parentName:"tr",align:null},"Override for the expiration time for the certificate in seconds."),(0,a.kt)("td",{parentName:"tr",align:null},"If deployed with the bundled SPIRE server, 1 day (86400).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/cert-type")),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the credential bundle - ",(0,a.kt)("inlineCode",{parentName:"td"},"pem")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/cert-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Certificate key name in the secret. When mounted, this is the filename for the certificate (when using spire it's the SVID file). Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"pem"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"svid.pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/ca-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Bundle (certificate chain bundle) key name in the secret. When mounted, this is the filename for the certificate chain. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"pem"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bundle.pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/key-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Private key key name in the secret. When mounted, this is the filename for the private key. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"pem"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"key.pem"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/keystore-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Keystore key name in the secret. When mounted, this is the filename for the keystore. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"keystore.jks"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/truststore-file-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Truststore key name in the secret. When mounted, this is the filename for the truststore. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"truststore.jks"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/jks-password")),(0,a.kt)("td",{parentName:"tr",align:null},"Password for the JKS truststore and keystore. Only used when cert-type is ",(0,a.kt)("inlineCode",{parentName:"td"},"jks"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"password"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/restart-pod-on-certificate-renewal")),(0,a.kt)("td",{parentName:"tr",align:null},"A pod with this annotation (no matter the value) will be restarted after certificate renewal, along with any replicas. Should be ideally set through the pod owner's ",(0,a.kt)("inlineCode",{parentName:"td"},"template")," spec so it will persist between restarts."),(0,a.kt)("td",{parentName:"tr",align:null},"N/A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"intents.otterize.com/service-name")),(0,a.kt)("td",{parentName:"tr",align:null},"Otterize-wide override for this service's name. Used by the operator when registering the service with SPIRE and generating credentials."),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"/reference/service-identities"},"Service identities"))))),(0,a.kt)("h2",{id:"how-does-the-credentials-operator-work"},"How does the Credentials operator work?"),(0,a.kt)("h3",{id:"spire-entry-registration"},"SPIRE entry registration"),(0,a.kt)("p",null,"Once the operator ",(0,a.kt)("a",{parentName:"p",href:"#service-name-resolution-and-automatic-pod-labeling"},"resolves the service name")," for a pod, it labels the pod and registers an entry with the SPIRE server."),(0,a.kt)("h3",{id:"credential-generation"},"Credential generation"),(0,a.kt)("p",null,"After the operator has registered the pod, which happens automatically upon startup, the pod can use the SPIRE Workload API to generate credentials for the SVID ",(0,a.kt)("inlineCode",{parentName:"p"},"<servicename>.<namespace>"),"."),(0,a.kt)("p",null,"Additionally, the operator consults the label ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials-operator.otterize.com/tls-secret-name"),". If that label exists, the operator creates a secret named after the value of the label with X.509 credentials within (a SPIRE SVID). This way, the pod can get autogenerated credentials without modifying its code."),(0,a.kt)("p",null,"For more information, see the docs."),(0,a.kt)("h3",{id:"service-name-resolution-and-automatic-pod-labeling"},"Service name resolution and automatic pod labeling"),(0,a.kt)("p",null,"Service name resolution is performed one of two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If an ",(0,a.kt)("inlineCode",{parentName:"li"},"intents.otterize.com/service-name")," annotation is present, that name is used."),(0,a.kt)("li",{parentName:"ol"},"If not, a recursive look up is performed for the Kubernetes resource owner for a Pod until the root is reached. For example, if you have a ",(0,a.kt)("inlineCode",{parentName:"li"},"Deployment")," named ",(0,a.kt)("inlineCode",{parentName:"li"},"client"),", which then creates and owns a ",(0,a.kt)("inlineCode",{parentName:"li"},"ReplicaSet"),", which then creates and owns a ",(0,a.kt)("inlineCode",{parentName:"li"},"Pod"),", then the service name for that pod is ",(0,a.kt)("inlineCode",{parentName:"li"},"client")," - same as the name of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Deployment"),".")),(0,a.kt)("p",null,"The value resulting from this process forms the value of the label ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials-operator.otterize.com/service-name"),"."))}c.isMDXComponent=!0}}]);