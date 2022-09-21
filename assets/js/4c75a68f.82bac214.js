"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[908],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:11,title:"Debugging"},o=void 0,l={unversionedId:"debugging/README",id:"debugging/README",title:"Debugging",description:"Debugging flow:",source:"@site/docs/11-debugging/README.mdx",sourceDirName:"11-debugging",slug:"/debugging/",permalink:"/debugging/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/11-debugging/README.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Debugging"},sidebar:"docSidebar",previous:{title:"Helm chart",permalink:"/components/spire-integration-operator/helm-chart"}},p={},s=[{value:"Debugging flow:",id:"debugging-flow",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"debugging-flow"},"Debugging flow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pod status"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ContainerCreating"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Event"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"MountVolume.SetUp"),' failed for volume "otterize-credentials" : secret "XXX" not found'),(0,a.kt)("p",{parentName:"li"},"  Credentials were not generated and stored in the K8s ",(0,a.kt)("inlineCode",{parentName:"p"},"secret"),". Please verify"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Otterize is installed with the ",(0,a.kt)("strong",{parentName:"li"},"Credential Operator")," ",(0,a.kt)("inlineCode",{parentName:"li"},"enabled")),(0,a.kt)("li",{parentName:"ul"},"Pod is annotated with ",(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/tls-secret-name"),". Follow instruction in ",(0,a.kt)("a",{parentName:"li",href:"/guides/k8s-mtls/#annotation-parameters"},"here"),"."))))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"kubectl"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Error from server (NotFound): secrets "client-credentials-secret" not found'),(0,a.kt)("p",{parentName:"li"},"Credentials were not generated and stored in the K8s ",(0,a.kt)("inlineCode",{parentName:"p"},"secret"),". Please verify"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Otterize is installed with the ",(0,a.kt)("strong",{parentName:"li"},"Credential Operator")," ",(0,a.kt)("inlineCode",{parentName:"li"},"enabled")),(0,a.kt)("li",{parentName:"ul"},"Pod is annotated with ",(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/tls-secret-name"),". Follow instruction in ",(0,a.kt)("a",{parentName:"li",href:"/credential-operator/behavior"},"Behavior"),".")))))))}c.isMDXComponent=!0}}]);