"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[1888],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||i;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3},s="\u5beb\u4e00\u500b\u7c21\u55ae\u7684\u6298\u7dda\u5716",o={unversionedId:"getting-started/write-a-simple-line-chart",id:"getting-started/write-a-simple-line-chart",title:"\u5beb\u4e00\u500b\u7c21\u55ae\u7684\u6298\u7dda\u5716",description:"\u63a5\u4e0b\u4f86\u6211\u5011\u8a66\u8457\u7e6a\u88fd\u6700\u57fa\u672c\u7684\u5716\u8868\u2014\u57fa\u672c\u6298\u7dda\u5716\u3002",source:"@site/i18n/zh-hant/docusaurus-plugin-content-docs/current/getting-started/write-a-simple-line-chart.md",sourceDirName:"getting-started",slug:"/getting-started/write-a-simple-line-chart",permalink:"/react-native-echarts/zh-hant/docs/getting-started/write-a-simple-line-chart",draft:!1,editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/i18n/zh-hant/docusaurus-plugin-content-docs/current/getting-started/write-a-simple-line-chart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u904b\u884c\u7bc4\u4f8b",permalink:"/react-native-echarts/zh-hant/docs/getting-started/run-example"},next:{title:"\u64b0\u5beb\u52d5\u614b\u6578\u64da\u5716\u8868",permalink:"/react-native-echarts/zh-hant/docs/getting-started/write-a-dynamic-data-chart"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5beb\u4e00\u500b\u7c21\u55ae\u7684\u6298\u7dda\u5716"},"\u5beb\u4e00\u500b\u7c21\u55ae\u7684\u6298\u7dda\u5716"),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u8a66\u8457\u7e6a\u88fd\u6700\u57fa\u672c\u7684\u5716\u8868\u2014\u57fa\u672c\u6298\u7dda\u5716\u3002"),(0,a.kt)("p",null,"\u8981\u67e5\u770b\u5728\u700f\u89bd\u5668\u4e2d\u7684\u6a23\u5b50\uff0c\u60a8\u53ef\u4ee5\u8a2a\u554f ",(0,a.kt)("a",{parentName:"p",href:"https://echarts.apache.org/examples/en/editor.html?c=line-simple"},"echarts \u7de8\u8f2f\u5668"),"\u4e26\u5617\u8a66\u5c07\u914d\u7f6e\u4fee\u6539\u70ba\u770b\u5230\u8b8a\u5316\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c0e\u5165 echarts\u3001@wuba/react-native-echarts \u548c react\u3002\u9019\u88e1\u6211\u53ea\u5c0e\u5165\u4e86 SkiaChart \u548c SVGRenderer\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useRef, useEffect } from 'react';\nimport * as echarts from 'echarts/core';\nimport { LineChart } from 'echarts/charts';\nimport { GridComponent } from 'echarts/components';\nimport { SVGRenderer, SkiaChart } from '@wuba/react-native-echarts';\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 echarts.use \u8a3b\u518a\u6e32\u67d3\u5668\u548c\u5716\u8868\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"echarts.use([SVGRenderer, LineChart, GridComponent]);\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u70ba SkiaChart \u5275\u5efa\u4e00\u500b ref\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default function App() {\n  const skiaRef = useRef<any>(null);\n  return <SkiaChart ref={skiaRef} />;\n}\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u7de8\u5beb\u5716\u8868\u9078\u9805\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const option = {\n  xAxis: {\n    type: 'category',\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n  },\n  yAxis: {\n    type: 'value',\n  },\n  series: [\n    {\n      data: [150, 230, 224, 218, 135, 147, 260],\n      type: 'line',\n    },\n  ],\n};\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u4e00\u500b\u5716\u8868\u4f8b\u9805\u4e26\u8a2d\u5b9a\u9078\u9805\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"let chart = echarts.init(skiaRef.current, 'light', {\n  renderer: 'svg',\n  width: 400,\n  height: 400,\n});\nchart.setOption(option);\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528useEffect\u78ba\u4fdd\u5716\u8868\u53ea\u521d\u59cb\u5316\u4e00\u6b21\u3002 \u7576\u5143\u4ef6\u89e3\u9664\u5b89\u88dd\u6642\uff0c\u8655\u7406\u5716\u8868\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  return () => chart?.dispose();\n}, []);\n")),(0,a.kt)("p",null,"\u5c31\u662f\u9019\u6a23\uff01\u9019\u662f\u4ee3\u78bc\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useRef, useEffect } from 'react';\nimport * as echarts from 'echarts/core';\nimport { LineChart } from 'echarts/charts';\nimport { GridComponent } from 'echarts/components';\nimport { SVGRenderer, SkiaChart } from '@wuba/react-native-echarts';\n\necharts.use([SVGRenderer, LineChart, GridComponent]);\n\nexport default function App() {\n  const skiaRef = useRef<any>(null);\n  useEffect(() => {\n    const option = {\n      xAxis: {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n      yAxis: {\n        type: 'value',\n      },\n      series: [\n        {\n          data: [150, 230, 224, 218, 135, 147, 260],\n          type: 'line',\n        },\n      ],\n    };\n    let chart: any;\n    if (skiaRef.current) {\n      chart = echarts.init(skiaRef.current, 'light', {\n        renderer: 'svg',\n        width: 400,\n        height: 400,\n      });\n      chart.setOption(option);\n    }\n    return () => chart?.dispose();\n  }, []);\n\n  return <SkiaChart ref={skiaRef} />;\n}\n")),(0,a.kt)("p",null,"\u60a8\u61c9\u8a72\u770b\u5230\u4ee5\u4e0b\u87a2\u5e55\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"iOS"),(0,a.kt)("th",{parentName:"tr",align:null},"Android"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"ios",src:r(7246).Z,width:"1290",height:"2796"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"android",src:r(1496).Z,width:"1080",height:"2340"}))))),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4f7f\u7528 react-native-svg\uff0c\u53ea\u9700\u5c07 SkiaChart \u66ff\u63db\u70ba SvgChart \u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\uff0c\u60a8\u53ef\u4ee5\u5f9e ",(0,a.kt)("a",{parentName:"p",href:"https://echarts.apache.org/examples/en/index.html"},"echarts \u793a\u4f8b"),"\u4e2d\u627e\u5230\u66f4\u591a\u7528\u65bc @wuba/react-native-echarts \u7684\u914d\u7f6e\u3002"))}m.isMDXComponent=!0},1496:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/android-line-0da6020c8b1255532a9c4fb2162adf7e.jpg"},7246:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ios-line-e54ad9fb3f2ce1a2e2a1237c0adbca45.png"}}]);