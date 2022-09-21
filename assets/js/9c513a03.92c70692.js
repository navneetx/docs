"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=l,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),l=n(7294),r=n(6010),o=n(2389),i=n(7392),s=n(7094),p=n(2466);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:u,values:k,groupId:f,className:h}=e,y=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,i.l)(g,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===u?u:null!=(t=null!=u?u:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[x,T]=(0,l.useState)(b),z=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=f){const e=v[f];null!=e&&e!==x&&g.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=z.indexOf(t),a=g[n].value;a!==x&&(C(t),T(a),null!=f&&N(f,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=z.indexOf(e.currentTarget)+1;n=null!=(a=z[t])?a:z[0];break}case"ArrowLeft":{var l;const t=z.indexOf(e.currentTarget)-1;n=null!=(l=z[t])?l:z[z.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},h)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>z.push(e),onKeyDown:E,onFocus:S,onClick:S},o,{className:(0,r.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},8858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),o=n(5162);const i={sidebar_position:2,title:"Deeper dive into network policies"},s=void 0,p={unversionedId:"guides/k8s-ibac-via-network-policies/deeper-dive",id:"guides/k8s-ibac-via-network-policies/deeper-dive",title:"Deeper dive into network policies",description:"Network policies are one of the tools we",source:"@site/docs/3-guides/2-k8s-ibac-via-network-policies/2-deeper-dive.mdx",sourceDirName:"3-guides/2-k8s-ibac-via-network-policies",slug:"/guides/k8s-ibac-via-network-policies/deeper-dive",permalink:"/guides/k8s-ibac-via-network-policies/deeper-dive",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/3-guides/2-k8s-ibac-via-network-policies/2-deeper-dive.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Deeper dive into network policies"},sidebar:"docSidebar",previous:{title:"IBAC in Kubernetes via network policies",permalink:"/guides/k8s-ibac-via-network-policies/"},next:{title:"Intent-based access control for Kafka in Kubernetes",permalink:"/guides/ibac-for-k8s-kafka/"}},c={},m=[{value:"How a network policy looks like",id:"how-a-network-policy-looks-like",level:2},{value:"Setting security scope via default network policies",id:"setting-security-scope-via-default-network-policies",level:2},{value:"Default deny network policy",id:"default-deny-network-policy",level:2},{value:"Auto generating network policies for external traffic",id:"auto-generating-network-policies-for-external-traffic",level:2},{value:"How intents translate to network policies.",id:"how-intents-translate-to-network-policies",level:2},{value:"Deploy example",id:"deploy-example",level:3},{value:"Track artifacts",id:"track-artifacts",level:3}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"Network policies")," are one of the tools we\ncan use for traffic shaping within K8s clusters. They allow us to shape traffic using selectors, policies, and L3\nand L4 identifiers. To enforce network policies, a Kubernetes cluster requires a CNI supporting network policies to be\ninstalled. Some popular options are Calico and Cilium."),(0,l.kt)("h2",{id:"how-a-network-policy-looks-like"},"How a network policy looks like"),(0,l.kt)("p",null,"Let's take a look at an example showing a network policy allowing traffic"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"from")," pods labeled ",(0,l.kt)("inlineCode",{parentName:"li"},"app:backend")," in namespaces labeled ",(0,l.kt)("inlineCode",{parentName:"li"},"env:production")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"to")," pods labeled ",(0,l.kt)("inlineCode",{parentName:"li"},"app:db")," in the namespace  ",(0,l.kt)("inlineCode",{parentName:"li"},"production-db"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-production-backend\n  # highlight-next-line\n  namespace: production-db            # [Target filter] Policy applies to target pods in this namespace\nspec:\n  podSelector:\n    matchLabels:\n      # highlight-next-line\n      app: db                         # [Target filter] Policy applies to target pods with this label\n  policyTypes:\n    # highlight-next-line\n    - Ingress                         # [Direction] Policy implemented as a filter on incoming connections\n  ingress:\n    - from:\n        - namespaceSelector:\n            matchLabels:\n              # highlight-next-line\n              env: production         # [Source filter] Policy filters source pods from namespaces with this label\n        - podSelector:\n            matchLabels:\n              # highlight-next-line\n              app: backend            # [Source filter] Policy filters source pods from with this label\n")),(0,l.kt)("h2",{id:"setting-security-scope-via-default-network-policies"},"Setting security scope via default network policies"),(0,l.kt)("p",null,"Two common approaches for working with network policies are"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Allow all traffic between pods, protect some pods by applying ingress network policies to them."),(0,l.kt)("li",{parentName:"ul"},"Block all traffic between pods except allowed traffic by network policies.")),(0,l.kt)("p",null,"You can apply both approaches (allow/block all) within your cluster (e.g. by applying network policies based on\nnamespaces)."),(0,l.kt)("h2",{id:"default-deny-network-policy"},"Default deny network policy"),(0,l.kt)("p",null,"To block all traffic within a namespace (e.g. ",(0,l.kt)("em",{parentName:"p"},"production"),") you can apply a default deny network policy like the\nfollowing example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-ingress\n  namespace: production\nspec:\n  podSelector: { }\n  policyTypes:\n    - Ingress\n")),(0,l.kt)("h2",{id:"auto-generating-network-policies-for-external-traffic"},"Auto generating network policies for external traffic"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Otterize defaults to automatically generate network policies for LoadBalancer, NodePort, and Ingress traffic\nwhen an intent will generate a network policy that can block external traffic. To disable this feature XXX")),(0,l.kt)("p",null,"Let's look at an example from our demo. We have a ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," service being accessed from multiple source"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"loadgenerator")," calls it from within the cluster to generate traffic"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"frontend-external")," is a ",(0,l.kt)("inlineCode",{parentName:"li"},"LoadBalancer")," directing traffic from outside the cluster to the ",(0,l.kt)("inlineCode",{parentName:"li"},"frontend"))),(0,l.kt)("p",null,"Be applying the following intents file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: loadgenerator\nspec:\n  service:\n    name: loadgenerator\n  calls:\n    - name: frontend\n      type: HTTP\n")),(0,l.kt)("p",null,"Otterize will generate a network policy allowing access from the ",(0,l.kt)("inlineCode",{parentName:"p"},"loadgenerator")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend"),".\nIf left unhandled, any other traffic not allowed by existing network policies to the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," will get blocked. In our\ncase that means that the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend-external")," ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," won't be able to communicate with with ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend"),"."),(0,l.kt)("p",null,"To overcome this, Otterize will automatically generate a network policy to allow traffic from ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend-external"),"\nto ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," by relying on the existence of the ingress (in this case ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),") as an intent between the two."),(0,l.kt)("p",null,"FAQ:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Why can't Otterize always generate network policies for ingress types?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If no network policies exist, automatically generating a network policy to allow ",(0,l.kt)("inlineCode",{parentName:"li"},"frontend-external")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"frontend")," will\nblock existing traffic like ",(0,l.kt)("inlineCode",{parentName:"li"},"loadgenerator")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"frontend"),".")))),(0,l.kt)("h2",{id:"how-intents-translate-to-network-policies"},"How intents translate to network policies."),(0,l.kt)("p",null,"Let's follow an example scenario and track how Otterize configures network policies when we apply intents."),(0,l.kt)("h3",{id:"deploy-example"},"Deploy example"),(0,l.kt)("p",null,"Our example consists of two pods: an HTTP server and a client that calls it. We also deploy a default-deny ingress network policy,\nblocking pods from accepting incoming calls unless another network policy explicitly allows them."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand to see the details of this example..."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"\n> include file not found: ../../../../static/code-examples/network-policies/namespace.yaml --\x3e /home/runner/work/docs/static/code-examples/network-policies/namespace.yaml\n\n"))),(0,l.kt)(o.Z,{value:"server.yaml",label:"server.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"\n> include file not found: ../../../../static/code-examples/network-policies/server-deployment.yaml --\x3e /home/runner/work/docs/static/code-examples/network-policies/server-deployment.yaml\n\n---\n\n> include file not found: ../../../../static/code-examples/network-policies/server-service.yaml --\x3e /home/runner/work/docs/static/code-examples/network-policies/server-service.yaml\n\n"))),(0,l.kt)(o.Z,{value:"client.yaml",label:"client.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"\n> include file not found: ../../../../static/code-examples/network-policies/client-deployment.yaml --\x3e /home/runner/work/docs/static/code-examples/network-policies/client-deployment.yaml\n\n"))),(0,l.kt)(o.Z,{value:"default-deny.yaml",label:"default-deny.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"\n> include file not found: ../../../../static/code-examples/network-policies/default-deny-network-policy.yaml --\x3e /home/runner/work/docs/static/code-examples/network-policies/default-deny-network-policy.yaml\n\n"))))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Deploy the client, server, and the default deny network policy using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/network-policies/all.yaml\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check that the ",(0,l.kt)("inlineCode",{parentName:"p"},"client")," and server ",(0,l.kt)("inlineCode",{parentName:"p"},"pods")," were deployed"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-npol\n")),(0,l.kt)("p",{parentName:"li"},"You should see"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5689997b5c-grlnt   1/1     Running   0          35s\nserver-6698c58cbc-v9n9b   1/1     Running   0          34s\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The client intents to call the server are declared with this ",(0,l.kt)("inlineCode",{parentName:"p"},"intents.yaml")," file:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"include file not found: ../../../../static/code-examples/network-policies/intents.yaml --\x3e /home/runner/work/docs/static/code-examples/network-policies/intents.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Let's apply it:\n```shell\nkubectl apply -f https://docs.otterize.com/code-examples/network-policies/intents.yaml\n")),(0,l.kt)("h3",{id:"track-artifacts"},"Track artifacts"),(0,l.kt)("p",null,"After applying the intents file Otterize generated multiple artifacts to configure access from the client to\nserver via network policies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a network policy allowing traffic from the ","[client, namespace -labeled]"," pods to ","[server-labeled]"," pods"),(0,l.kt)("li",{parentName:"ul"},"Label the client pods"),(0,l.kt)("li",{parentName:"ul"},"Label the client pod namespaces"),(0,l.kt)("li",{parentName:"ul"},"Label the server pods")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Let's look at the generated network policy"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe networkpolicies -n otterize-tutorial-npol access-to-server-from-otterize-tutorial-npol\n")),(0,l.kt)("p",{parentName:"li"},"You should see (without the comments)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Name:         access-to-server-from-otterize-tutorial-npol\n# [Target filter] namespace\n# highlight-next-line\nNamespace:    otterize-tutorial-npol\nCreated on:   2022-09-08 19:12:24 +0300 IDT\nLabels:       intents.otterize.com/network-policy=true\nAnnotations:  <none>\nSpec:\n  # [Target filter] pods with this label\n  # highlight-next-line\n  PodSelector:     intents.otterize.com/server=server-otterize-tutorial-np-7e16db\n  Allowing ingress traffic:\n    To Port: <any> (traffic allowed to all ports)\n    From:\n      # [Source filter] namespaces with this label\n      # highlight-next-line\n      NamespaceSelector: intents.otterize.com/namespace-name=otterize-tutorial-npol\n      # [Source filter] pods with this label\n      # highlight-next-line\n      PodSelector: intents.otterize.com/access-server-otterize-tutorial-np-7e16db=true\n  Not affecting egress traffic\n  # [Direction]\n  # highlight-next-line\n  Policy Types: Ingress\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"And we can also see that the client and server pods are now labeled"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-npol --show-labels\n")),(0,l.kt)("p",{parentName:"li"},"You should see"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                      READY   STATUS    RESTARTS   AGE     LABELS\nclient-5cb67b748-l25vg    1/1     Running   0          7m57s   app=client,intents.otterize.com/access-server-otterize-tutorial-np-7e16db=true,intents.otterize.com/client=true,intents.otterize.com/server=client-otterize-tutorial-np-699302,pod-template-hash=5cb67b748,spire-integration.otterize.com/service-name=client\nserver-564b56f596-54str   1/1     Running   0          7m56s   app=server,intents.otterize.com/server=server-otterize-tutorial-np-7e16db,pod-template-hash=564b56f596,spire-integration.otterize.com/service-name=server\n")),(0,l.kt)("p",{parentName:"li"},"And when we break down the label structure we can see"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For the server - ",(0,l.kt)("span",{style:{color:"gray"}},"intents.otterize.com/server"),"=",(0,l.kt)("span",{style:{color:"magenta"}},"server"),"-",(0,l.kt)("span",{style:{color:"red"}},"otterize-tutorial-np"),"-",(0,l.kt)("span",{style:{color:"green"}},"7e16db"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"gray"}},"intents.otterize.com/server")," - Label prefix for servers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"magenta"}},"server")," - Server pod name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"red"}},"otterize-tutorial-np")," - Server pod namespace (might be truncated)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"green"}},"7e16db")," - Hash for server pod name and and namespace"))),(0,l.kt)("li",{parentName:"ul"},"For the client - ",(0,l.kt)("span",{style:{color:"gray"}},"intents.otterize.com/access"),"-",(0,l.kt)("span",{style:{color:"magenta"}},"server"),"-",(0,l.kt)("span",{style:{color:"red"}},"otterize-tutorial-np"),"-",(0,l.kt)("span",{style:{color:"green"}},"7e16db"),"=true",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"gray"}},"intents.otterize.com/access")," - Label prefix for clients"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"magenta"}},"server")," - Server pod name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"red"}},"otterize-tutorial-np")," - Server pod namespace (might be truncated)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"green"}},"7e16db")," - Hash for server pod name and and namespace"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Finally, let's look at the namespace label with"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get namespace otterize-tutorial-npol --show-labels\n")),(0,l.kt)("p",{parentName:"li"},"  You should see"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                     STATUS   AGE   LABELS\notterize-tutorial-npol   Active   36s   intents.otterize.com/namespace-name=otterize-tutorial-npol,kubernetes.io/metadata.name=otterize-tutorial-npol\n")),(0,l.kt)("p",{parentName:"li"},"  With the new label add by otterize - ",(0,l.kt)("inlineCode",{parentName:"p"},"intents.otterize.com/namespace-name=otterize-tutorial-npol")))))}u.isMDXComponent=!0}}]);