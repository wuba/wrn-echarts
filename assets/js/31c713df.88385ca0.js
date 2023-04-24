"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[8478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},a="Troubleshooting",s={unversionedId:"trouble-shooting/troubleshooting",id:"trouble-shooting/troubleshooting",title:"Troubleshooting",description:'- ### ERROR Invariant Violation "SkiaDomView" was not found in the UIManager.',source:"@site/docs/trouble-shooting/troubleshooting.md",sourceDirName:"trouble-shooting",slug:"/trouble-shooting/troubleshooting",permalink:"/react-native-echarts/docs/trouble-shooting/troubleshooting",draft:!1,editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/docs/trouble-shooting/troubleshooting.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Use React Native Gesture Handler",permalink:"/react-native-echarts/docs/advanced-guides/use-rngh"},next:{title:"Contributors",permalink:"/react-native-echarts/docs/about/contributors"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"error-invariant-violation-requirenativecomponent-skiadomview-was-not-found-in-the-uimanager"},'ERROR Invariant Violation: requireNativeComponent: "SkiaDomView" was not found in the UIManager.'),(0,o.kt)("p",{parentName:"li"},"If expo is used, you need to install the version of skia/svg that corresponds to the version built into expo, otherwise the above error will occur. If you are not sure which version should be installed, you can refer to the version recommended at expo startup, e.g."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"&quot;SkiaDomView&quot; was not found",src:n(3943).Z,width:"1634",height:"273"})))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"error-echarts-component-xxx-is-used-but-not-imported"},"ERROR ","[ECharts]"," Component XXX is used but not imported."),(0,o.kt)("p",{parentName:"li"},"The above error indicates that the XXX component is used in the chart but has not been registered. The components used in the chart need to be registered manually in the following way."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { XXX } from 'echarts/components';\necharts.use([XXX]);\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"error-echarts-unknown-series-undefined"},"ERROR ","[ECharts]"," Unknown series undefined"),"When the above error occurs during chart restoration, it is likely that the option was passed in as an empty object during the initialization of the chart object, or that the object was passed in without a series field, as in this case ",(0,o.kt)("inlineCode",{parentName:"li"},"chartInstance.setOption({})"),". When initializing, the option should be passed into the series configuration as much as possible.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"element-type-is-invalid-expected-a-string-for-built-in-components-or-a-classfunction-for-composite-components-but-got-undefined"},"Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined."),(0,o.kt)("p",{parentName:"li"},"If only the Svg or Skia dependencies are installed, but introduced via the ",(0,o.kt)("inlineCode",{parentName:"p"},"import { SVGRenderer, XXXChart } from '@wuba/react-native-echarts'")," write, the above error will occur."),(0,o.kt)("p",{parentName:"li"},"Individual import reference ",(0,o.kt)("a",{parentName:"p",href:"../advanced-guides/import-individually"},"here")))))}d.isMDXComponent=!0},3943:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/require-native-component-fbe67b04052a1fe5267064f220a50da5.png"}}]);