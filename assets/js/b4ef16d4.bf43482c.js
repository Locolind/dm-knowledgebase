"use strict";(self.webpackChunkdm_knowledgebase=self.webpackChunkdm_knowledgebase||[]).push([[309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>T,frontMatter:()=>v,metadata:()=>g,toc:()=>E});var r=n(7462),a=n(7294),l=n(3905),o=n(6010),i=n(2389),u=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:l,values:i,groupId:m,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=i??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,u.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,s.U)(),[E,x]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==E&&k.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=T.indexOf(t),r=k[n].value;r!==E&&(w(t),x(r),null!=m&&h(m,String(r)))},O=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},b)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:O,onClick:N},l,{className:(0,o.Z)("tabs__item",d,l?.className,{"tabs__item--active":E===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function b(e){const t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function k(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(f,r),hidden:n},t)}const v={sidebar_position:1},y="\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",g={unversionedId:"profession/about",id:"profession/about",title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",description:"\u0420\u043e\u043b\u044c Delivery Manager \u2013 data-driven \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 End-to-End \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438: \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u0435\u0442 Time to market \u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c. \u0422\u0430\u043c \u0433\u0434\u0435 \u043d\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0441\u043a\u0432\u043e\u0437\u043d\u043e\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u2013 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0432\u0441\u044e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e \u0446\u0435\u043f\u043e\u0447\u043a\u0443.",source:"@site/docs/profession/about.md",sourceDirName:"profession",slug:"/profession/about",permalink:"/dm-knowledgebase/docs/profession/about",draft:!1,editUrl:"https://github.com/Tinkoff/dm-knowledgebase/edit/main/docs/profession/about.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"start",next:{title:"\u0413\u0440\u0435\u0439\u0434\u044b",permalink:"/dm-knowledgebase/docs/profession/competencies/grades"}},h={},E=[{value:"\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u0435\u043d",id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u0435\u043d",level:2},{value:"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442",id:"\u0447\u0442\u043e-\u0434\u0435\u043b\u0430\u0435\u0442",level:2},{value:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430\u0435\u0442",id:"\u043a\u0430\u043a-\u0434\u0435\u043b\u0430\u0435\u0442",level:2}],x={toc:E};function T(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,l.kt)("p",null,"\u0420\u043e\u043b\u044c ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Delivery Manager"))," \u2013 ",(0,l.kt)("strong",{parentName:"p"},"data-driven \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 ",(0,l.kt)("strong",{parentName:"p"},"\u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 End-to-End \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),": \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u0435\u0442 Time to market \u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c. \u0422\u0430\u043c \u0433\u0434\u0435 \u043d\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0441\u043a\u0432\u043e\u0437\u043d\u043e\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u2013 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0432\u0441\u044e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e \u0446\u0435\u043f\u043e\u0447\u043a\u0443."),(0,l.kt)("p",null,"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u0441\u043e \u0441\u043b\u043e\u0436\u0438\u0432\u0448\u0438\u043c\u0441\u044f \u043d\u0430 \u0440\u044b\u043d\u043a\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f\u043c\u0438, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a Service Delivery Manager, Scrum Master \u0438\u043b\u0438 Agile Coach, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043e\u043d\u0438 \u043d\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u044e\u0442 \u0440\u043e\u043b\u044c Delivery Manager."),(0,l.kt)("h2",{id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u0435\u043d"},"\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u0435\u043d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u043c\u043e\u0447\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u044e\u0449\u0435\u0439\u0441\u044f \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 (IT-\u0441\u0438\u0441\u0442\u0435\u043c, \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432, \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0439, \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432) \u0443\u0441\u043a\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u043d\u0430 \u0440\u044b\u043d\u043e\u043a"),(0,l.kt)("li",{parentName:"ul"},"\u0422\u0430\u043a\u0436\u0435 \u043f\u043e\u043c\u043e\u0447\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0435 \u0442\u0435\u0440\u044f\u0442\u044c \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438: \u043f\u0435\u0440\u0435\u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u0438 \u0443\u043b\u0443\u0447\u0448\u0430\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u043f\u043e\u0434 \u0440\u043e\u0441\u0442 \u0438\u043b\u0438 \u0440\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u0431\u0438\u0437\u043d\u0435\u0441\u0430"),(0,l.kt)("li",{parentName:"ul"},"\u041d\u0430\u043a\u0430\u043f\u043b\u0438\u0432\u0430\u0442\u044c \u0438 \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u043c\u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u043c\u0438 \u0438 \u043e\u043f\u044b\u0442\u043e\u043c \u0441 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0438 \u0435\u0451 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c\u0438, \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430\u043c\u0438, \u043a\u043e\u043c\u044c\u044e\u043d\u0438\u0442\u0438")),(0,l.kt)("h2",{id:"\u0447\u0442\u043e-\u0434\u0435\u043b\u0430\u0435\u0442"},"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442"),(0,l.kt)("p",null,"\u0423\u0441\u043b\u043e\u0432\u043d\u043e \u0437\u0430\u0434\u0430\u0447\u0438 Delivery Manager \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 2 \u0433\u0440\u0443\u043f\u043f\u044b:"),(0,l.kt)("mermaid",{value:"flowchart TD\n"}),(0,l.kt)(b,{mdxType:"Tabs"},(0,l.kt)(k,{value:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438",label:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438",mdxType:"TabItem"},(0,l.kt)("mermaid",{value:"graph TD\n    A(\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439) --\x3e B[\u0412\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0435\u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439]\n    B --\x3e C[\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u043f\u043e \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 <br> - \u043f\u043b\u0430\u043d \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0439]\n    C --\x3e D[\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 <br> \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434]\n    D --\x3e D1[\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043a\u0438\u0445 \u043c\u0435\u0441\u0442, <br>\u0438\u0445 \u043d\u0438\u0432\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435]\n    C --\x3e E[\u0412\u044b\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 <br>\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u0441\u0440\u043e\u043a]\n    E --\x3e E1[\u0421\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442 <br> - \u0445\u0432\u043e\u0441\u0442 \u0432 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0438 Cycle Time]\n    E1 --\x3e E2[\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b <br>\u043d\u0430\u0434 \u0444\u0438\u0447\u0430\u043c\u0438 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438]\n    C --\x3e F[\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b]\n    F --\x3e F1[\u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434]\n    F1 --\x3e F2[\u0424\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0441\u0431\u043e\u0440\u0430 \u043c\u0435\u0442\u0440\u0438\u043a]\n    F2 --\x3e F3[\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0439 <br>\u043c\u0435\u0436\u0434\u0443 \u043e\u0442\u0434\u0435\u043b\u0430\u043c\u0438, <br>\u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c\u0438, \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u0438\u043d\u0438\u044f\u043c\u0438]\n    F3 --\x3e F4[\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 <br>Upstream + \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u0435]\n    F4 --\x3e F5[\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435]"})),(0,l.kt)(k,{value:"\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u043a",label:"\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u043a",mdxType:"TabItem"},(0,l.kt)("mermaid",{value:"graph TD\n  A(\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u043a) --\x3e B[\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u0437\u0440\u0435\u043b\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b] & C[\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043e\u0431\u043c\u0435\u043d\u0430 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438]\n  B --\x3e B1[\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0443 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 <br>\u043b\u0438\u0434\u043e\u0432 \u0438 \u0440\u0443\u043a \u043e\u0442\u0434\u0435\u043b\u043e\u0432]\n  C --\x3e D[\u0412\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0437\u043d\u0430\u043d\u0438\u0439] & E[\u0410\u0441\u0441\u0435\u0441\u0441\u043c\u0435\u043d\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434]\n  E --\x3e E1[\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f \u043f\u043e \u043b\u0443\u0447\u0448\u0438\u043c \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u043c]"}))),(0,l.kt)("h2",{id:"\u043a\u0430\u043a-\u0434\u0435\u043b\u0430\u0435\u0442"},"\u041a\u0430\u043a \u0434\u0435\u043b\u0430\u0435\u0442"),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0441\u0432\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 Delivery Manager \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u0432 3-\u0445 \u0440\u043e\u043b\u044f\u0445."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},'\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u041f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441"'),(0,l.kt)("th",{parentName:"tr",align:null},"\u0410\u0433\u0435\u043d\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u0443\u0447"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u0432\u0441\u0451\u043c End-to-End \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435"),(0,l.kt)("li",null,"\u0412\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0438 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u043a\u0438\u0435 \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0432\u0441\u0435\u043c\u0438 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,l.kt)("li",null,"\u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b, \u0434\u0435\u043b\u0430\u044f \u0438\u0445 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c\u0438 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438"),(0,l.kt)("li",null,"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430\u0434 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435\u043c \u043c\u0435\u0442\u0440\u0438\u043a Discovery \u0438 Delivery, \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044f \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0435 \u0438 \u0438\u0437\u043c\u0435\u0440\u0438\u043c\u044b\u0435 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u043c\u0438, \u0441\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u043c\u0438 \u0438 \u0431\u0438\u0437\u043d\u0435\u0441-\u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c\u0438"),(0,l.kt)("li",null,"\u0424\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u043d\u044f\u0442\u043d\u0443\u044e \u0438 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044e \u043a\u0440\u0430\u0442\u043a\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445 \u0438 \u0434\u043e\u043b\u0433\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445 \u043f\u043b\u0430\u043d\u043e\u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u0441 \u0443\u0447\u0451\u0442\u043e\u043c \u0446\u0435\u043b\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u043c\u0435\u043d\u0442\u0430 \u0432\u043e\u0432\u043b\u0435\u043a\u0430\u044f \u043b\u044e\u0434\u0435\u0439 \u0432 \u043e\u0431\u0449\u0435\u0435 \u0434\u0435\u043b\u043e"),(0,l.kt)("li",null,"\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u0438 \u0440\u0430\u0431\u043e\u0447\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),(0,l.kt)("li",null,"\u0414\u043e\u0432\u043e\u0434\u0438\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043e \u0442\u0430\u043a\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u043e\u0441\u043e\u0437\u043d\u0430\u043d\u043d\u043e\u0441\u0442\u0438, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0438 \u043c\u043e\u0433\u043b\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e, \u0431\u0435\u0437 \u043f\u043e\u043c\u043e\u0449\u0438 \u0434\u0435\u043b\u0438\u0432\u0435\u0440\u0438-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430, \u0443\u043b\u0443\u0447\u0448\u0430\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b"),(0,l.kt)("li",null,"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c\u0438 \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f data-driven \u043f\u043e\u0434\u0445\u043e\u0434"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u0412\u0437\u0440\u0430\u0449\u0438\u0432\u0430\u0435\u0442 \u0432 \u043b\u044e\u0434\u044f\u0445 \u043f\u0440\u043e\u0430\u043a\u0442\u0438\u0432\u043d\u0443\u044e \u043f\u043e\u0437\u0438\u0446\u0438\u044e \u0443\u0447\u0430\u0441\u0442\u0438\u044f \u0432 \u0436\u0438\u0437\u043d\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438 \u0435\u0451 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432"),(0,l.kt)("li",null,"\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u0442 \u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043b\u044e\u0434\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u043a\u043e\u0443\u0447\u0438\u043d\u0433\u0430, \u043c\u0435\u043d\u0442\u043e\u0440\u0438\u043d\u0433\u0430, \u0444\u0430\u0441\u0438\u043b\u0438\u0442\u0430\u0446\u0438\u0438, \u0441\u0443\u043f\u0435\u0440\u0432\u0438\u0437\u0438\u0438 \u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0438\u043c \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043b\u0430\u043d\u043e\u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432"),(0,l.kt)("li",null,"\u041d\u0430\u043a\u0430\u043f\u043b\u0438\u0432\u0430\u0435\u0442 \u0437\u043d\u0430\u043d\u0438\u044f \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438, \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u0443\u0435\u0442 \u0438\u0445 \u043f\u043e\u0434 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0438 \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0438\u043c\u0438 \u0441 \u043a\u043e\u043b\u043b\u0435\u0433\u0430\u043c\u0438"),(0,l.kt)("li",null,"\u041f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c \u0440\u0435\u0448\u0430\u0442\u044c \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u0438 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c \u043a \u043d\u0430\u0438\u043b\u0443\u0447\u0448\u0438\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u044f\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0444\u0430\u0441\u0438\u043b\u0438\u0442\u0430\u0446\u0438\u0438")))))))}T.isMDXComponent=!0}}]);