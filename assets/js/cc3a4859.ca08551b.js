"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[261],{7002:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>k});var n=a(7462),i=(a(7294),a(3905)),l=a(3901),r=a(5488),o=a(5162);const s={sidebar_position:3},p="Getting started with Network Policies",c={unversionedId:"documentation/getting-started/network-policies",id:"documentation/getting-started/network-policies",title:"Getting started with Network Policies",description:"Get started with Otterize.",source:"@site/docs/documentation/getting-started/network-policies.md",sourceDirName:"documentation/getting-started",slug:"/documentation/getting-started/network-policies",permalink:"/documentation/getting-started/network-policies",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/getting-started/network-policies.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docSidebar",previous:{title:"Kicking the tires",permalink:"/documentation/getting-started/kicking-the-tires"},next:{title:"Deploy mTLS",permalink:"/documentation/getting-started/mtls"}},d={},k=[{value:"Install Otterize",id:"install-otterize",level:2},{value:"Pick a scope",id:"pick-a-scope",level:2},{value:"Apply intents",id:"apply-intents",level:2},{value:"Inspect generated Network Policies",id:"inspect-generated-network-policies",level:2},{value:"Test what\u2019s protected now relative to scope:",id:"test-whats-protected-now-relative-to-scope",level:2}],m={toc:k};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-network-policies"},"Getting started with Network Policies"),(0,i.kt)("p",null,"Get started with Otterize."),(0,i.kt)(l.Z,{toc:k,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"install-otterize"},"Install Otterize"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add\nhelm install\n")),(0,i.kt)("h2",{id:"pick-a-scope"},"Pick a scope"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pick one or more client services and a server service "),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You\u2019ll end up with ",(0,i.kt)("strong",{parentName:"p"},"every")," undeclared client being ",(0,i.kt)("strong",{parentName:"p"},"blocked")," from accessing this server service")),(0,i.kt)("p",{parentName:"li"},"Create the client intents file(s) (vanilla or CRD)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Bootstrapped intents from existing traffic"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sniff & iterate & generate intents (see ",(0,i.kt)("a",{parentName:"li",href:"/documentation/getting-started/kicking-the-tires"},"Kicking the tires"),")"),(0,i.kt)("li",{parentName:"ul"},"Configure global network policies as needed, e.g. to allow ingress")))),(0,i.kt)("h2",{id:"apply-intents"},"Apply intents"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"otterize",label:"Otterize",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"otterize apply intents\n"))),(0,i.kt)(o.Z,{value:"kubectl",label:"Kubectl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f intents.yaml\n")))),(0,i.kt)("h2",{id:"inspect-generated-network-policies"},"Inspect generated Network Policies"),(0,i.kt)("p",null,"Look at the generated network policies that have been applied"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get networkpolicies -n lab\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"NAMESPACE   NAME                            POD-SELECTOR                                AGE\nlab         access-to-zookeeper-from-kafka  otterize/server=zookeeper-lab-c7544928bffa  116m\nlab         access-to-kafka-from-client     otterize/server=kafka-lab-05a2278fbe7a      4m17s\n")),(0,i.kt)("p",null,"Look at the generated pod labels"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -n lab client-66b6c48dd5-s8xs9 --show-labels\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"NAME                      READY   STATUS    RESTARTS    AGE     LABELS\nclient-66b6c48dd5-s8xs9    1/1     Running   0           7d1h    app=client,otterize/server=client-lab-05a2278fbe7a\n")),(0,i.kt)("h2",{id:"test-whats-protected-now-relative-to-scope"},"Test what\u2019s protected now relative to scope:"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To expand")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Client-server scope:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If there were other clients to this server, see they\u2019re now failing"))),(0,i.kt)("li",{parentName:"ol"},"Bootstrapped scope:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See if something that was not captured in the traffic is now failing"))),(0,i.kt)("li",{parentName:"ol"},"All scopes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Omit a client intents file, apply intents again, and see the client is failing"),(0,i.kt)("li",{parentName:"ul"},"Change a service to make an undeclared call and redeploy, see it fails"),(0,i.kt)("li",{parentName:"ul"},"Create a test service making an undeclared call, deploy, see it fails")))))}u.isMDXComponent=!0}}]);