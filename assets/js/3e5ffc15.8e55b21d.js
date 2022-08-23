"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[279],{4782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var a=n(7462),i=n(7294),l=n(3905),r=n(3901),s=n(5488),o=n(5162),c=n(814);function k(){return i.createElement(i.Fragment,null,i.createElement("p",null,"otterize observer enable:"),i.createElement(c.Z,{language:"shell"},"otterize observer enable"))}function d(){return i.createElement(i.Fragment,null,i.createElement(c.Z,{language:"shell"},"helm repo add\nhelm install"))}const p={sidebar_position:2},m="Kicking the tires",u={unversionedId:"documentation/getting-started/kicking-the-tires",id:"documentation/getting-started/kicking-the-tires",title:"Kicking the tires",description:"Get started with Otterize.",source:"@site/docs/documentation/getting-started/kicking-the-tires.md",sourceDirName:"documentation/getting-started",slug:"/documentation/getting-started/kicking-the-tires",permalink:"/documentation/getting-started/kicking-the-tires",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/getting-started/kicking-the-tires.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"Quickstart",permalink:"/documentation/getting-started/quickstart"},next:{title:"Getting started with Network Policies",permalink:"/documentation/getting-started/network-policies"}},g={},h=[{value:"Enable the Intents Observer",id:"enable-the-intents-observer",level:2},{value:"Show traffic as intents",id:"show-traffic-as-intents",level:2},{value:"Change traffic -&gt; Sniff&amp;Diff",id:"change-traffic---sniffdiff",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],f={toc:h};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kicking-the-tires"},"Kicking the tires"),(0,l.kt)("p",null,"Get started with Otterize."),(0,l.kt)(r.Z,{toc:h,mdxType:"TOCInline"}),(0,l.kt)("h2",{id:"enable-the-intents-observer"},"Enable the Intents Observer"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"cli",label:"Otterize CLI",default:!0,mdxType:"TabItem"},(0,l.kt)(k,{mdxType:"CLI"})),(0,l.kt)(o.Z,{value:"helm",label:"Helm",mdxType:"TabItem"},(0,l.kt)(d,{mdxType:"Helm"}))),(0,l.kt)("h2",{id:"show-traffic-as-intents"},"Show traffic as intents"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"plain",label:"Plain",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"otterize observer export\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kafka calls:\n  - zookeeper\n\nclient calls:\n  - kafka\n"))),(0,l.kt)(o.Z,{value:"intents",label:"Intents",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"otterize observer export -o intents\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: kafka\nspec:\n  service:\n    name: kafka\n    calls:\n      - name: zookeeper\n---\napiVersion: k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: client\nspec:\n  service:\n    name: client\n    calls:\n      - name: kafka\n"))),(0,l.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"otterize observer export -o yaml\n")))),(0,l.kt)("h2",{id:"change-traffic---sniffdiff"},"Change traffic -> Sniff&Diff"),(0,l.kt)("p",null,"Let's add traffic to the cluster and see how the Intents Observer tracks it.\nConnect to the client pod."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec --tty -i client --namespace lab -- bash\n")),(0,l.kt)("p",null,"Initiate a connection to the zookeeper pod."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nc zookeeper 2181\n")),(0,l.kt)("p",null,"And now export the updated observed intents."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"otterize observer export\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kafka calls:\n  - zookeeper\n\nclient calls:\n  - kafka\n  - zookeeper\n")),(0,l.kt)("h2",{id:"whats-next"},"What's next"),(0,l.kt)("p",null,"Now that we observed cluster intents we can use them with the Intents Operator."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configure ",(0,l.kt)("a",{parentName:"li",href:"/documentation/getting-started/network-policies"},"Network Policies")),(0,l.kt)("li",{parentName:"ul"},"Configure secure access for Kafka")))}b.isMDXComponent=!0}}]);