"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[9291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},i="\u6545\u969c\u6392\u9664",s={unversionedId:"trouble-shooting/troubleshooting",id:"trouble-shooting/troubleshooting",title:"\u6545\u969c\u6392\u9664",description:'- ### ERROR Invariant Violation "SkiaDomView" was not found in the UIManager.',source:"@site/i18n/zh-hant/docusaurus-plugin-content-docs/current/trouble-shooting/troubleshooting.md",sourceDirName:"trouble-shooting",slug:"/trouble-shooting/troubleshooting",permalink:"/react-native-echarts/zh-hant/docs/trouble-shooting/troubleshooting",draft:!1,editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/i18n/zh-hant/docusaurus-plugin-content-docs/current/trouble-shooting/troubleshooting.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5728 React \u4e2d\u4f7f\u7528",permalink:"/react-native-echarts/zh-hant/docs/advanced-guides/use-in-react"},next:{title:"\u8ca2\u737b\u8005",permalink:"/react-native-echarts/zh-hant/docs/about/contributors"}},c={},u=[],l={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"error-invariant-violation-requirenativecomponent-skiadomview-was-not-found-in-the-uimanager"},'ERROR Invariant Violation: requireNativeComponent: "SkiaDomView" was not found in the UIManager.'),(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528 expo\uff0c\u60a8\u9700\u8981\u5b89\u88dd\u8207 expo \u5167\u5efa\u7248\u672c\u5c0d\u61c9\u7684 skia/svg \u7248\u672c\uff0c\u5426\u5247\u5c07\u767c\u751f\u4e0a\u8ff0\u932f\u8aa4\u3002 \u5982\u679c\u60a8\u4e0d\u78ba\u5b9a\u61c9\u8a72\u5b89\u88dd\u54ea\u500b\u7248\u672c\uff0c\u60a8\u53ef\u4ee5\u53c3\u8003 expo \u555f\u52d5\u6642\u63a8\u85a6\u7684\u7248\u672c\uff0c\u4f8b\u5982"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"&quot;SkiaDomView&quot; was not found",src:n(9332).Z,width:"1634",height:"273"})))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"error-echarts-component-xxx-is-used-but-not-imported"},"ERROR ","[ECharts]"," Component XXX is used but not imported."),(0,o.kt)("p",{parentName:"li"},"\u4e0a\u8ff0\u932f\u8aa4\u8868\u660e XXX \u5143\u4ef6\u5df2\u5728\u5716\u8868\u4e2d\u4f7f\u7528\uff0c\u4f46\u5c1a\u672a\u8a3b\u518a\u3002 \u5716\u8868\u4e2d\u4f7f\u7528\u7684\u5143\u4ef6\u9700\u8981\u4ee5\u4ee5\u4e0b\u65b9\u5f0f\u624b\u52d5\u8a3b\u518a\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { XXX } from 'echarts/components';\necharts.use([XXX]);\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"error-echarts-unknown-series-undefined"},"ERROR ","[ECharts]"," Unknown series undefined"),"\u5728\u5716\u8868\u9084\u539f(restore)\u6642\u51fa\u73fe\u4e0a\u8ff0\u932f\u8aa4\uff0c\u5f88\u53ef\u80fd\u662f\u5728\u5716\u8868\u5c0d\u50cf\u521d\u59cb\u5316\u6642\uff0coption \u50b3\u5165\u7684\u662f\u7a7a\u7684\u5c0d\u8c61\uff0c\u6216\u50b3\u5165\u7684\u5c0d\u50cf\u4e2d\u6c92\u6709series \u5b57\u6bb5\uff0c\u6bd4\u5982\u9019\u6a23\u7684\u5beb\u6cd5",(0,o.kt)("inlineCode",{parentName:"li"},"chartInstance.setOption({} )"),"\u3002\u521d\u59cb\u5316\u6642\uff0coption \u61c9\u76e1\u91cf\u50b3\u5165series \u8a2d\u5b9a\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"element-type-is-invalid-expected-a-string-for-built-in-components-or-a-classfunction-for-composite-components-but-got-undefined"},"Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined."),(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u53ea\u5b89\u88dd\u4e86Svg \u6216Skia \u4f9d\u8cf4\uff0c\u4f46\u662f\u537b\u900f\u904e",(0,o.kt)("inlineCode",{parentName:"p"},"import { SVGRenderer, XXXChart } from '@wuba/react-native-echarts'")," \u7684\u5beb\u6cd5\u5f15\u5165\uff0c\u6703\u51fa\u73fe\u4e0a\u8ff0\u932f\u8aa4\uff1b"),(0,o.kt)("p",{parentName:"li"},"\u55ae\u7368\u5c0e\u5165\u53c3\u8003",(0,o.kt)("a",{parentName:"p",href:"../advanced-guides/import-individually"},"\u9019\u88e1")))))}m.isMDXComponent=!0},9332:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/require-native-component-fbe67b04052a1fe5267064f220a50da5.png"}}]);