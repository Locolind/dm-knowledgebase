"use strict";(self.webpackChunkdm_knowledgebase=self.webpackChunkdm_knowledgebase||[]).push([[7094],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),l=r(6010),o=r(2466),u=r(6550),i=r(1980),s=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=p(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,s]=b({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),v=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var v=r(2389);const k="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",y,o?.className,{"tabs__item--active":u===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(h,(0,n.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(E,(0,n.Z)({key:String(t)},e))}},2173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),l=r(4866),o=r(5162);const u={sidebar_position:1},i="\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",s={unversionedId:"profession/about",id:"version-0.0.1/profession/about",title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",description:"\u0420\u043e\u043b\u044c Delivery Manager \u2013 data-driven \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 End-to-End \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438: \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u0435\u0442 Time to market \u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c. \u0422\u0430\u043c \u0433\u0434\u0435 \u043d\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0441\u043a\u0432\u043e\u0437\u043d\u043e\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u2013 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0432\u0441\u044e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e \u0446\u0435\u043f\u043e\u0447\u043a\u0443.",source:"@site/versioned_docs/version-0.0.1/profession/about.md",sourceDirName:"profession",slug:"/profession/about",permalink:"/dm-knowledgebase/docs/0.0.1/profession/about",draft:!1,editUrl:"https://github.com/Tinkoff/dm-knowledgebase/edit/main/versioned_docs/version-0.0.1/profession/about.md",tags:[],version:"0.0.1",lastUpdatedBy:"Pavel Akhv",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"start",next:{title:"\u0413\u0440\u0435\u0439\u0434\u044b",permalink:"/dm-knowledgebase/docs/0.0.1/profession/competencies/grades"}},c={},d=[{value:"\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u0435\u043d",id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u0435\u043d",level:2},{value:"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442",id:"\u0447\u0442\u043e-\u0434\u0435\u043b\u0430\u0435\u0442",level:2},{value:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430\u0435\u0442",id:"\u043a\u0430\u043a-\u0434\u0435\u043b\u0430\u0435\u0442",level:2}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("p",null,"\u0420\u043e\u043b\u044c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Delivery Manager"))," \u2013 ",(0,a.kt)("strong",{parentName:"p"},"data-driven \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 ",(0,a.kt)("strong",{parentName:"p"},"\u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 End-to-End \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),": \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u0435\u0442 Time to market \u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c. \u0422\u0430\u043c \u0433\u0434\u0435 \u043d\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0441\u043a\u0432\u043e\u0437\u043d\u043e\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u2013 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0432\u0441\u044e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e \u0446\u0435\u043f\u043e\u0447\u043a\u0443."),(0,a.kt)("p",null,"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u0441\u043e \u0441\u043b\u043e\u0436\u0438\u0432\u0448\u0438\u043c\u0441\u044f \u043d\u0430 \u0440\u044b\u043d\u043a\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f\u043c\u0438, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a Service Delivery Manager, Scrum Master \u0438\u043b\u0438 Agile Coach, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043e\u043d\u0438 \u043d\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u044e\u0442 \u0440\u043e\u043b\u044c Delivery Manager."),(0,a.kt)("h2",{id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u0435\u043d"},"\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u0435\u043d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u043c\u043e\u0447\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u044e\u0449\u0435\u0439\u0441\u044f \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 (IT-\u0441\u0438\u0441\u0442\u0435\u043c, \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432, \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0439, \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432) \u0443\u0441\u043a\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u043d\u0430 \u0440\u044b\u043d\u043e\u043a"),(0,a.kt)("li",{parentName:"ul"},"\u0422\u0430\u043a\u0436\u0435 \u043f\u043e\u043c\u043e\u0447\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0435 \u0442\u0435\u0440\u044f\u0442\u044c \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438: \u043f\u0435\u0440\u0435\u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u0438 \u0443\u043b\u0443\u0447\u0448\u0430\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u043f\u043e\u0434 \u0440\u043e\u0441\u0442 \u0438\u043b\u0438 \u0440\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u0431\u0438\u0437\u043d\u0435\u0441\u0430"),(0,a.kt)("li",{parentName:"ul"},"\u041d\u0430\u043a\u0430\u043f\u043b\u0438\u0432\u0430\u0442\u044c \u0438 \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u043c\u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u043c\u0438 \u0438 \u043e\u043f\u044b\u0442\u043e\u043c \u0441 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0438 \u0435\u0451 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c\u0438, \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430\u043c\u0438, \u043a\u043e\u043c\u044c\u044e\u043d\u0438\u0442\u0438")),(0,a.kt)("h2",{id:"\u0447\u0442\u043e-\u0434\u0435\u043b\u0430\u0435\u0442"},"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442"),(0,a.kt)("p",null,"\u0423\u0441\u043b\u043e\u0432\u043d\u043e \u0437\u0430\u0434\u0430\u0447\u0438 Delivery Manager \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 2 \u0433\u0440\u0443\u043f\u043f\u044b:"),(0,a.kt)("mermaid",{value:"flowchart TD\n"}),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438",label:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438",mdxType:"TabItem"},(0,a.kt)("mermaid",{value:"graph TD\n    A(\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439) --\x3e B[\u0412\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0435\u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439]\n    B --\x3e C[\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u043f\u043e \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 <br> - \u043f\u043b\u0430\u043d \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0439]\n    C --\x3e D[\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 <br> \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434]\n    D --\x3e D1[\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043a\u0438\u0445 \u043c\u0435\u0441\u0442, <br>\u0438\u0445 \u043d\u0438\u0432\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435]\n    C --\x3e E[\u0412\u044b\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 <br>\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u0441\u0440\u043e\u043a]\n    E --\x3e E1[\u0421\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442 <br> - \u0445\u0432\u043e\u0441\u0442 \u0432 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0438 Cycle Time]\n    E1 --\x3e E2[\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b <br>\u043d\u0430\u0434 \u0444\u0438\u0447\u0430\u043c\u0438 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438]\n    C --\x3e F[\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b]\n    F --\x3e F1[\u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434]\n    F1 --\x3e F2[\u0424\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0441\u0431\u043e\u0440\u0430 \u043c\u0435\u0442\u0440\u0438\u043a]\n    F2 --\x3e F3[\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0439 <br>\u043c\u0435\u0436\u0434\u0443 \u043e\u0442\u0434\u0435\u043b\u0430\u043c\u0438, <br>\u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c\u0438, \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u0438\u043d\u0438\u044f\u043c\u0438]\n    F3 --\x3e F4[\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 <br>Upstream + \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u0435]\n    F4 --\x3e F5[\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435]"})),(0,a.kt)(o.Z,{value:"\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u043a",label:"\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u043a",mdxType:"TabItem"},(0,a.kt)("mermaid",{value:"graph TD\n  A(\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u043a) --\x3e B[\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u0437\u0440\u0435\u043b\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b] & C[\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043e\u0431\u043c\u0435\u043d\u0430 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438]\n  B --\x3e B1[\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0443 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 <br>\u043b\u0438\u0434\u043e\u0432 \u0438 \u0440\u0443\u043a \u043e\u0442\u0434\u0435\u043b\u043e\u0432]\n  C --\x3e D[\u0412\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0437\u043d\u0430\u043d\u0438\u0439] & E[\u0410\u0441\u0441\u0435\u0441\u0441\u043c\u0435\u043d\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434]\n  E --\x3e E1[\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f \u043f\u043e \u043b\u0443\u0447\u0448\u0438\u043c \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u043c]"}))),(0,a.kt)("h2",{id:"\u043a\u0430\u043a-\u0434\u0435\u043b\u0430\u0435\u0442"},"\u041a\u0430\u043a \u0434\u0435\u043b\u0430\u0435\u0442"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0441\u0432\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 Delivery Manager \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u0432 3-\u0445 \u0440\u043e\u043b\u044f\u0445."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},'\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u041f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441"'),(0,a.kt)("th",{parentName:"tr",align:null},"\u0410\u0433\u0435\u043d\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"),(0,a.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u0443\u0447"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u0432\u0441\u0451\u043c End-to-End \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435"),(0,a.kt)("li",null,"\u0412\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0438 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u043a\u0438\u0435 \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0432\u0441\u0435\u043c\u0438 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,a.kt)("li",null,"\u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b, \u0434\u0435\u043b\u0430\u044f \u0438\u0445 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c\u0438 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438"),(0,a.kt)("li",null,"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430\u0434 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435\u043c \u043c\u0435\u0442\u0440\u0438\u043a Discovery \u0438 Delivery, \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044f \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0435 \u0438 \u0438\u0437\u043c\u0435\u0440\u0438\u043c\u044b\u0435 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u043c\u0438, \u0441\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u043c\u0438 \u0438 \u0431\u0438\u0437\u043d\u0435\u0441-\u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c\u0438"),(0,a.kt)("li",null,"\u0424\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u043d\u044f\u0442\u043d\u0443\u044e \u0438 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044e \u043a\u0440\u0430\u0442\u043a\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445 \u0438 \u0434\u043e\u043b\u0433\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445 \u043f\u043b\u0430\u043d\u043e\u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u0441 \u0443\u0447\u0451\u0442\u043e\u043c \u0446\u0435\u043b\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u043c\u0435\u043d\u0442\u0430 \u0432\u043e\u0432\u043b\u0435\u043a\u0430\u044f \u043b\u044e\u0434\u0435\u0439 \u0432 \u043e\u0431\u0449\u0435\u0435 \u0434\u0435\u043b\u043e"),(0,a.kt)("li",null,"\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u0438 \u0440\u0430\u0431\u043e\u0447\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),(0,a.kt)("li",null,"\u0414\u043e\u0432\u043e\u0434\u0438\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043e \u0442\u0430\u043a\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u043e\u0441\u043e\u0437\u043d\u0430\u043d\u043d\u043e\u0441\u0442\u0438, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0438 \u043c\u043e\u0433\u043b\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e, \u0431\u0435\u0437 \u043f\u043e\u043c\u043e\u0449\u0438 \u0434\u0435\u043b\u0438\u0432\u0435\u0440\u0438-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430, \u0443\u043b\u0443\u0447\u0448\u0430\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b"),(0,a.kt)("li",null,"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c\u0438 \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f data-driven \u043f\u043e\u0434\u0445\u043e\u0434"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u0412\u0437\u0440\u0430\u0449\u0438\u0432\u0430\u0435\u0442 \u0432 \u043b\u044e\u0434\u044f\u0445 \u043f\u0440\u043e\u0430\u043a\u0442\u0438\u0432\u043d\u0443\u044e \u043f\u043e\u0437\u0438\u0446\u0438\u044e \u0443\u0447\u0430\u0441\u0442\u0438\u044f \u0432 \u0436\u0438\u0437\u043d\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438 \u0435\u0451 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432"),(0,a.kt)("li",null,"\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u0442 \u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043b\u044e\u0434\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u043a\u043e\u0443\u0447\u0438\u043d\u0433\u0430, \u043c\u0435\u043d\u0442\u043e\u0440\u0438\u043d\u0433\u0430, \u0444\u0430\u0441\u0438\u043b\u0438\u0442\u0430\u0446\u0438\u0438, \u0441\u0443\u043f\u0435\u0440\u0432\u0438\u0437\u0438\u0438 \u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0438\u043c \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043b\u0430\u043d\u043e\u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432"),(0,a.kt)("li",null,"\u041d\u0430\u043a\u0430\u043f\u043b\u0438\u0432\u0430\u0435\u0442 \u0437\u043d\u0430\u043d\u0438\u044f \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438, \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u0443\u0435\u0442 \u0438\u0445 \u043f\u043e\u0434 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0438 \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0438\u043c\u0438 \u0441 \u043a\u043e\u043b\u043b\u0435\u0433\u0430\u043c\u0438"),(0,a.kt)("li",null,"\u041f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c \u0440\u0435\u0448\u0430\u0442\u044c \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u0438 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c \u043a \u043d\u0430\u0438\u043b\u0443\u0447\u0448\u0438\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u044f\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0444\u0430\u0441\u0438\u043b\u0438\u0442\u0430\u0446\u0438\u0438")))))))}m.isMDXComponent=!0}}]);