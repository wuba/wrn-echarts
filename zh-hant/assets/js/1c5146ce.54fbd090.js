"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[5534],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},h="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),h=c(n),m=r,d=h["".concat(o,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,s(s({ref:e},p),{},{components:n})):a.createElement(d,s({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[h]="string"==typeof t?t:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},778:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={slug:"using-wuba-react-native-echarts",title:"\u5728 Expo \u4e2d\u4f7f\u7528 @wuba/react-native-echarts",authors:["iambool"],tags:["expo"]},s=void 0,l={permalink:"/react-native-echarts/zh-hant/blog/using-wuba-react-native-echarts",editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/i18n/zh-hant/docusaurus-plugin-content-blog/2023-03-10-using-wuba-react-native-echarts/index.md",source:"@site/i18n/zh-hant/docusaurus-plugin-content-blog/2023-03-10-using-wuba-react-native-echarts/index.md",title:"\u5728 Expo \u4e2d\u4f7f\u7528 @wuba/react-native-echarts",description:"\u5beb\u4f5c\u8207\u5716\u8868\u76f8\u95dc\u9700\u6c42\u6700\u5e38\u7528\u7684\u5716\u8868\u5eab\u662fecharts\u3002 echarts \u5728\u7db2\u7ad9\u4e0a\u7684\u6027\u80fd\u975e\u5e38\u6210\u719f\uff0c\u4e26\u63d0\u4f9b\u4e86\u5b98\u65b9\u89e3\u6c7a\u65b9\u6848\u4ee5\u652f\u6301\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u4f46\u5728 RN \u4e2d\u537b\u6c92\u6709\u76f8\u61c9\u7684\u652f\u63f4\u3002\u5e02\u5834\u4e0a\uff0c\u5927\u591a\u6578\u641c\u7d22\u4ecd\u7136\u57fa\u65bc webview \u5be6\u73fe\u7684\u672c\u8cea\uff0c\u800c\u6211\u66f4\u559c\u6b61\u57fa\u65bc RN \u7684\u7a0b\u5f0f\uff0c\u7562\u7adf\u539f\u751f\u9ad4\u9a57\u6703\u6bd4 Web \u66f4\u597d\u3002",date:"2023-03-10T00:00:00.000Z",formattedDate:"2023\u5e743\u670810\u65e5",tags:[{label:"expo",permalink:"/react-native-echarts/zh-hant/blog/tags/expo"}],readingTime:11.96,hasTruncateMarker:!0,authors:[{name:"iambool",title:"react-native-echarts \u7684\u7dad\u8b77\u8005",url:"https://github.com/iambool",imageURL:"https://github.com/iambool.png",key:"iambool"}],frontMatter:{slug:"using-wuba-react-native-echarts",title:"\u5728 Expo \u4e2d\u4f7f\u7528 @wuba/react-native-echarts",authors:["iambool"],tags:["expo"]},prevItem:{title:"React Native Echarts \u6b63\u5f0f\u7db2\u7ad9\u5df2\u4e0a\u7dda\uff01",permalink:"/react-native-echarts/zh-hant/blog/the-official-website-has-launched"},nextItem:{title:"\u5728 React Native \u4e2d\u4f7f\u7528 Apache ECharts",permalink:"/react-native-echarts/zh-hant/blog/using-apache-echarts-in-react-native"}},o={authorsImageUrls:[void 0]},c=[{value:"\u63d0\u793a",id:"\u63d0\u793a",level:3},{value:"\u4f7f\u7528\u6b65\u9a5f\u5982\u4e0b",id:"\u4f7f\u7528\u6b65\u9a5f\u5982\u4e0b",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u8a2d\u7f6e\u958b\u767c\u74b0\u5883",id:"\u7b2c-1-\u6b65\u8a2d\u7f6e\u958b\u767c\u74b0\u5883",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u5275\u5efa RN \u9805\u76ee",id:"\u7b2c-2-\u6b65\u5275\u5efa-rn-\u9805\u76ee",level:3},{value:"\u7b2c 3 \u6b65\uff1a\u5728\u79fb\u52d5\u8a2d\u5099\u4e0a\u69cb\u5efa\u61c9\u7528\u7a0b\u5e8f",id:"\u7b2c-3-\u6b65\u5728\u79fb\u52d5\u8a2d\u5099\u4e0a\u69cb\u5efa\u61c9\u7528\u7a0b\u5e8f",level:3},{value:"\u7b2c 4 \u6b65\uff1a\u5b89\u88dd\u76f8\u95dc\u4f9d\u8cf4",id:"\u7b2c-4-\u6b65\u5b89\u88dd\u76f8\u95dc\u4f9d\u8cf4",level:3},{value:"\u7b2c 5 \u6b65\uff1a\u8a66\u7528 Skia \u6a21\u5f0f",id:"\u7b2c-5-\u6b65\u8a66\u7528-skia-\u6a21\u5f0f",level:3},{value:"\u7b2c 6 \u6b65\uff1a\u8a66\u7528 Svg \u6a21\u5f0f",id:"\u7b2c-6-\u6b65\u8a66\u7528-svg-\u6a21\u5f0f",level:3},{value:"\u7b2c 7 \u6b65\uff1a\u5c01\u88dd Chart \u7d44\u4ef6",id:"\u7b2c-7-\u6b65\u5c01\u88dd-chart-\u7d44\u4ef6",level:3},{value:"\u7b2c 8 \u6b65\uff1a\u4f7f\u7528\u591a\u500b\u5716\u8868",id:"\u7b2c-8-\u6b65\u4f7f\u7528\u591a\u500b\u5716\u8868",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],p={toc:c},h="wrapper";function u(t){let{components:e,...i}=t;return(0,r.kt)(h,(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5beb\u4f5c\u8207\u5716\u8868\u76f8\u95dc\u9700\u6c42\u6700\u5e38\u7528\u7684\u5716\u8868\u5eab\u662f",(0,r.kt)("strong",{parentName:"p"},"echarts"),"\u3002 echarts \u5728\u7db2\u7ad9\u4e0a\u7684\u6027\u80fd\u975e\u5e38\u6210\u719f\uff0c\u4e26\u63d0\u4f9b\u4e86\u5b98\u65b9\u89e3\u6c7a\u65b9\u6848\u4ee5\u652f\u6301\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u4f46\u5728 RN \u4e2d\u537b\u6c92\u6709\u76f8\u61c9\u7684\u652f\u63f4\u3002\u5e02\u5834\u4e0a\uff0c\u5927\u591a\u6578\u641c\u7d22\u4ecd\u7136\u57fa\u65bc webview \u5be6\u73fe\u7684\u672c\u8cea\uff0c\u800c\u6211\u66f4\u559c\u6b61\u57fa\u65bc RN \u7684\u7a0b\u5f0f\uff0c\u7562\u7adf\u539f\u751f\u9ad4\u9a57\u6703\u6bd4 Web \u66f4\u597d\u3002"),(0,r.kt)("p",null,"\u5f8c\u4f86\u767c\u73fe ",(0,r.kt)("a",{parentName:"p",href:"https://wuba.github.io/react-native-echarts/"},(0,r.kt)("strong",{parentName:"a"},"@wuba/react-native-echarts"))," \u80fd\u5920\u6eff\u8db3\u9700\u6c42\uff0c\u56e0\u6b64\u5617\u8a66\u4f7f\u7528\u5b83\uff0c\u7d50\u679c\u975e\u5e38\u51fa\u8272\u3002\u5c0d\u65bc\u90a3\u4e9b\u5c0d\u5be6\u73fe\u539f\u7406\u611f\u8208\u8da3\u7684\u4eba\uff0c\u8acb\u9ede\u64ca",(0,r.kt)("a",{parentName:"p",href:"https://wuba.github.io/react-native-echarts/zh-hant/blog/using-apache-echarts-in-react-native"},"\u9019\u88e1")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4194).Z,width:"1716",height:"1946"})),(0,r.kt)("h3",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u5df2\u7d93\u6709\u4e00\u500b APP \u5305\uff0c\u53ef\u4ee5\u5ffd\u7565\u4e4b\u524d\u7684\u6253\u5305\u904e\u7a0b\uff0c\u76f4\u63a5\u5f9e\u7b2c 4 \u6b65\u958b\u59cb\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8a66\u7528\u7684\u5b8c\u6574\u4ee3\u78bc\u5728 GitHub \u4e0a\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iambool/TestApp"},"https://github.com/iambool/TestApp"))),(0,r.kt)("h2",{id:"\u4f7f\u7528\u6b65\u9a5f\u5982\u4e0b"},"\u4f7f\u7528\u6b65\u9a5f\u5982\u4e0b"),(0,r.kt)("h3",{id:"\u7b2c-1-\u6b65\u8a2d\u7f6e\u958b\u767c\u74b0\u5883"},"\u7b2c 1 \u6b65\uff1a\u8a2d\u7f6e\u958b\u767c\u74b0\u5883"),(0,r.kt)("p",null,"\u642d\u5efa\u672c\u5730 RN \u958b\u767c\u74b0\u5883\u7684\u904e\u7a0b\u5728\u7db2\u4e0a\u5df2\u7d93\u6709\u5f88\u591a\u8cc7\u6599\uff0c\u9019\u88e1\u5c31\u4e0d\u518d\u8d05\u8ff0\u4e86\u3002\u60a8\u53ef\u4ee5\u5728 Google \u4e0a\u641c\u7d22\u76f8\u95dc\u8cc7\u6599\u3002"),(0,r.kt)("h3",{id:"\u7b2c-2-\u6b65\u5275\u5efa-rn-\u9805\u76ee"},"\u7b2c 2 \u6b65\uff1a\u5275\u5efa RN \u9805\u76ee"),(0,r.kt)("p",null,"\u7531\u65bc\u9019\u662f\u4e00\u500b\u8a66\u7528\uff0c\u6211\u4f7f\u7528\u4e86 Expo \u4f86\u65b0\u5efa\u4e00\u500b\u540d\u70ba TestApp \u7684 RN \u9805\u76ee\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx create-expo-app TestApp\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create TestApp",src:n(3555).Z,width:"1272",height:"1020"})),(0,r.kt)("h3",{id:"\u7b2c-3-\u6b65\u5728\u79fb\u52d5\u8a2d\u5099\u4e0a\u69cb\u5efa\u61c9\u7528\u7a0b\u5e8f"},"\u7b2c 3 \u6b65\uff1a\u5728\u79fb\u52d5\u8a2d\u5099\u4e0a\u69cb\u5efa\u61c9\u7528\u7a0b\u5e8f"),(0,r.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u884c\u751f\u6210 iOS \u548c Android \u7684\u61c9\u7528\u7a0b\u5e8f\u5305\u3002\u5efa\u8b70\u5728 iOS \u4e0a\u4f7f\u7528\u6a21\u64ec\u5668\uff08\u7121\u9700\u5339\u914d\u8b49\u66f8\uff09\uff0c\u800c\u6211\u5247\u9023\u63a5\u4e86\u771f\u5be6\u7684 Android \u624b\u6a5f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn android\nyarn ios\n")),(0,r.kt)("p",null,"\u751f\u6210\u61c9\u7528\u7a0b\u5e8f\u5305\u5f8c\uff0c\u624b\u6a5f\u4e0a\u5df2\u7d93\u5b89\u88dd\u4e86\u5982\u4e0b\u7684\u61c9\u7528\u7a0b\u5e8f\uff0c\u9019\u610f\u5473\u8457\u69cb\u5efa\u6210\u529f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture",src:n(4423).Z,width:"222",height:"280"})),(0,r.kt)("h3",{id:"\u7b2c-4-\u6b65\u5b89\u88dd\u76f8\u95dc\u4f9d\u8cf4"},"\u7b2c 4 \u6b65\uff1a\u5b89\u88dd\u76f8\u95dc\u4f9d\u8cf4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add @wuba/react-native-echarts echarts\nyarn add @shopify/react-native-skia\nyarn add react-native-svg\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u5728\u73fe\u6709\u9805\u76ee\u4e2d\u5b89\u88dd\uff0c\u5b89\u88dd\u5b8c\u6210\u5f8c\u5fc5\u9808\u91cd\u65b0\u69cb\u5efa\u4e00\u500b\u65b0\u7684\u5305\uff0c\u5426\u5247\u7f3a\u5c11\u539f\u751f\u4f9d\u8cf4\u5c07\u5831\u932f\u3002")),(0,r.kt)("h3",{id:"\u7b2c-5-\u6b65\u8a66\u7528-skia-\u6a21\u5f0f"},"\u7b2c 5 \u6b65\uff1a\u8a66\u7528 Skia \u6a21\u5f0f"),(0,r.kt)("p",null,"@wuba/react-native-echarts \u652f\u6301\u5169\u7a2e",(0,r.kt)("strong",{parentName:"p"},"\u6e32\u67d3\u6a21\u5f0f\uff08Skia \u548c Svg\uff09"),"\uff0c\u5148\u8a66\u7528\u4e00\u500b\u7c21\u55ae\u7684 Skia \u6a21\u5f0f\u7684\u5716\u8868\u3002\u5177\u9ad4\u5206\u70ba\u4ee5\u4e0b\u5e7e\u500b\u5c0f\u6b65\u9a5f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165 echarts\u3001\u5716\u8868\u7d44\u4ef6\u7b49\u4f9d\u8cf4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8a3b\u518a\u5716\u8868\u7d44\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5275\u5efa\u5716\u8868\u5be6\u4f8b\u4e26\u8a2d\u7f6e\u9078\u9805\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u9801\u9762\u92b7\u6bc0\u6642\u540c\u6b65\u92b7\u6bc0\u5716\u8868\u5be6\u4f8b\u3002")),(0,r.kt)("p",null,"\u5177\u9ad4\u4ee3\u78bc\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useRef, useEffect } from 'react';\nimport { View } from 'react-native';\n/**\n * 1. \u5f15\u5165 echarts \u4f9d\u8cf4\uff0c\u9019\u500b\u4f8b\u5b50\u5148\u8a66\u7528\u6298\u7dda\u5716\n */\nimport * as echarts from 'echarts/core';\nimport { LineChart } from 'echarts/charts';\nimport { GridComponent } from 'echarts/components';\nimport SkiaChart, { SVGRenderer } from '@wuba/react-native-echarts/skiaChart';\n\n/**\n * 2. \u8a3b\u518a\u6240\u9700\u7684\u7d44\u4ef6\n * SVGRenderer\uff1a\u5fc5\u9808\u8a3b\u518a\n * LineChart\uff1a\u56e0\u70ba\u6211\u5011\u8981\u5c55\u793a\u6298\u7dda\u5716\uff0c\u6240\u4ee5\u8981\u5f15\u5165 LineChart\n *      - \u5982\u679c\u4e0d\u77e5\u9053\u8981\u5f15\u5165\u54ea\u4e9b\u7d44\u4ef6\uff0c\u53ef\u4ee5\u770b\u4e00\u4e0b\u5831\u932f\u4fe1\u606f\uff0c\u7f3a\u5c11\u4ec0\u9ebc\u5c31\u5f15\u5165\u4ec0\u9ebc\n * GridComponent\uff1a\u9019\u662f\u5831\u932f\u6642\u7684\u63d0\u793a\uff0c\u7136\u5f8c\u6211\u5c31\u52a0\u4e0a\u4e86\uff0c\u54c8\u54c8\n */\necharts.use([SVGRenderer, LineChart, GridComponent]);\n\nexport default () => {\n  const skiaRef = useRef(null); // \u4fdd\u5b58\u5716\u8868\u5be6\u4f8b\u7684 ref\n  useEffect(() => {\n    /**\n     * 3. \u5716\u8868\u9078\u9805\n     */\n    const option = {\n      xAxis: {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n      yAxis: {\n        type: 'value',\n      },\n      series: [\n        {\n          data: [150, 230, 224, 218, 135, 147, 260],\n          type: 'line',\n        },\n      ],\n    };\n    let chart;\n    if (skiaRef.current) {\n      /**\n       * 4. \u521d\u59cb\u5316\u5716\u8868\uff0c\u6307\u5b9a\u5bec\u9ad8\n       */\n      chart = echarts.init(skiaRef.current, 'light', {\n        renderer: 'svg',\n        width: 400,\n        height: 400,\n      });\n      chart.setOption(option);\n    }\n    /**\n     * 5. \u5728\u9801\u9762\u92b7\u6bc0\u6642\u92b7\u6bc0\u5716\u8868\u5be6\u4f8b\n     */\n    return () => chart?.dispose();\n  }, []);\n  return (\n    <View className='index'>\n      <SkiaChart ref={skiaRef} />\n    </View>\n  );\n};\n")),(0,r.kt)("p",null,"\u7de8\u5beb\u4ee3\u78bc\u5f8c\uff0c\u6416\u6643\u624b\u6a5f\u4e26\u91cd\u65b0\u52a0\u8f09 bundle \u5305\uff0c\u5831\u932f\u4e86\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'ERROR Invariant Violation: requireNativeComponent: "SkiaDomView" was not found in the UIManager.')),(0,r.kt)("p",null,"\u6211\u5728 Google \u4e0a\u641c\u7d22\u4e86\u4e00\u4e0b\uff0c\u767c\u73fe\u9700\u8981\u9032\u884c",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/74648194/shopify-react-native-skia-with-expo"},"\u7248\u672c\u964d\u7d1a"),"\uff0c\u9700\u8981\u5c0d\u61c9\u5230 expo \u7684\u7248\u672c\uff0c\u5b89\u88dd\u4f9d\u8cf4\u6642\u6703\u6709\u985e\u4f3c\u7684\u63d0\u793a\uff0c\u5b89\u88dd\u63d0\u793a\u7684\u7248\u672c\u5c31\u53ef\u4ee5\u4e86\u3002\n",(0,r.kt)("img",{alt:"warning",src:n(5259).Z,width:"1692",height:"340"})),(0,r.kt)("p",null,"\u65bc\u662f\u6211\u6309\u7167\u63d0\u793a\u9032\u884c\u4e86\u7248\u672c\u964d\u7d1a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@shopify/react-native-skia@0.1.157\nreact-native-svg@13.4.0\n")),(0,r.kt)("p",null,"\u91cd\u65b0\u69cb\u5efa\u61c9\u7528\u7a0b\u5e8f\u5f8c\uff0c\u6210\u529f\u52a0\u8f09\u4e86\u3002\u4e0d\u904e Android \u628a\u9ede\u7d66\u84cb\u4f4f\u4e86\uff0c\u770b\u4f86\u61c9\u8a72\u8981\u5c4f\u5e55\u5bec\u5ea6\u81ea\u9069\u61c9\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Android"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"iOS",src:n(545).Z,width:"1170",height:"2532"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Android",src:n(5703).Z,width:"1080",height:"2340"}))))),(0,r.kt)("h3",{id:"\u7b2c-6-\u6b65\u8a66\u7528-svg-\u6a21\u5f0f"},"\u7b2c 6 \u6b65\uff1a\u8a66\u7528 Svg \u6a21\u5f0f"),(0,r.kt)("p",null,"\u7528 Svg \u6a21\u5f0f\u5beb\u4e00\u500b\u66f4\u8907\u96dc\u7684\u52d5\u614b\u6392\u5e8f\u67f1\u72c0\u5716\uff0c\u9806\u4fbf\u6bd4\u8f03\u4e00\u4e0b Svg \u548c Skia \u7684\u6548\u679c\u3002\u5b8c\u6574\u4ee3\u78bc\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iambool/TestApp/blob/main/pages/barRace/index.js"},"\u9019\u88e1"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import SvgChart, { SVGRenderer } from '@wuba/react-native-echarts/svgChart';\n// ...\u9019\u88e1\u7701\u7565\u4e86\u4e00\u4e9b\u4e0d\u91cd\u8981\u7684\u4ee3\u78bc\n\n// \u8a3b\u518a\u6240\u9700\u7684\u7d44\u4ef6\uff0c\u5982 BarChart \u548c LegendComponent\necharts.use([SVGRenderer, BarChart, LegendComponent, GridComponent]);\n\nexport default () => {\n  const skiaRef = useRef(null);\n  const svgRef = useRef(null);\n\n  useEffect(() => {\n    // Skia \u6a21\u5f0f\n    const skiaChartData = getData(); // \u751f\u6210\u5716\u8868\u67f1\u72c0\u5716\u6578\u64da\n    let skiaChart;\n    let skiaInter;\n    if (skiaRef.current) {\n      skiaChart = echarts.init(skiaRef.current, 'light', {\n        renderer: 'svg',\n        width: 300,\n        height: 300,\n      });\n      skiaChart.setOption(getDefaultOption(skiaChartData));\n      setTimeout(function () {\n        run(skiaChart, skiaChartData);\n      }, 0);\n      skiaInter = setInterval(function () {\n        run(skiaChart, skiaChartData);\n      }, 3000);\n    }\n\n    // Svg \u6a21\u5f0f\n    const svgChartData = getData();\n    let svgChart;\n    let svgInter;\n    if (svgRef.current) {\n      svgChart = echarts.init(svgRef.current, 'light', {\n        renderer: 'svg',\n        width: 300,\n        height: 300,\n      });\n      svgChart.setOption(getDefaultOption(svgChartData));\n      setTimeout(function () {\n        run(svgChart, svgChartData);\n      }, 0);\n      svgInter = setInterval(function () {\n        run(svgChart, svgChartData);\n      }, 3000);\n    }\n\n    return () => {\n      skiaChart?.dispose();\n      svgChart?.dispose();\n      // \u5b9a\u6642\u5668\u8981\u6e05\u7406\u6389\uff0c\u5426\u5247\u9000\u51fa\u9801\u9762\u5f8c\u9084\u6703\u7e7c\u7e8c\u904b\u884c\n      clearInterval(skiaInter);\n      clearInterval(svgInter);\n    };\n  }, []);\n  return (\n    <View>\n      <Text>skia</Text>\n      <SkiaChart ref={skiaRef} />\n      <Text>svg</Text>\n      <SvgChart ref={svgRef} />\n    </View>\n  );\n};\n")),(0,r.kt)("p",null,"\u6211\u7528\u8089\u773c\u770b\u4e0d\u51fa\u9019\u5169\u7a2e\u6a21\u5f0f\u6709\u4ec0\u9ebc\u5340\u5225\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Android"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"picture",src:n(3158).Z,width:"640",height:"1385"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"picture",src:n(1618).Z,width:"590",height:"1280"}))))),(0,r.kt)("h3",{id:"\u7b2c-7-\u6b65\u5c01\u88dd-chart-\u7d44\u4ef6"},"\u7b2c 7 \u6b65\uff1a\u5c01\u88dd Chart \u7d44\u4ef6"),(0,r.kt)("p",null,"\u5230\u76ee\u524d\u70ba\u6b62\u6548\u679c\u9084\u4e0d\u932f\uff0c\u4f46\u6bcf\u6b21\u90fd\u8981\u5f15\u5165\u4e00\u5806\u6771\u897f\uff0c\u6709\u9ede\u9ebb\u7169\u3002\u6211\u5011\u4f86\u7c21\u55ae\u5c01\u88dd\u4e00\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useRef, useEffect } from 'react';\nimport * as echarts from 'echarts/core';\nimport { BarChart, LineChart, PieChart } from 'echarts/charts';\nimport {\n  DataZoomComponent,\n  GridComponent,\n  LegendComponent,\n  TitleComponent,\n  ToolboxComponent,\n  TooltipComponent,\n} from 'echarts/components';\nimport {\n  SVGRenderer,\n  SvgChart as _SvgChart,\n  SkiaChart as _SkiaChart,\n} from '@wuba/react-native-echarts';\n// \u6ce8\u610f\uff1a\u5982\u679c\u53ea\u5b89\u88dd\u4e86 svg \u6216 skia \u5176\u4e2d\u4e00\u500b\uff0c\u9700\u8981\u5206\u5225\u5f15\u5165\u5982\u4e0b\n// import _SkiaChart, { SVGRenderer } from '@wuba/react-native-echarts/skiaChart';\n// import _SvgChart, { SVGRenderer } from '@wuba/react-native-echarts/svgChart';\n\nimport { Dimensions } from 'react-native';\n\n// \u8a3b\u518a\u6240\u9700\u7684\u7d44\u4ef6\necharts.use([\n  DataZoomComponent,\n  SVGRenderer,\n  BarChart,\n  GridComponent,\n  LegendComponent,\n  ToolboxComponent,\n  TooltipComponent,\n  TitleComponent,\n  PieChart,\n  LineChart,\n]);\n\n// \u5716\u8868\u7684\u9ed8\u8a8d\u5bec\u5ea6\u548c\u9ad8\u5ea6\nconst CHART_WIDTH = Dimensions.get('screen').width; // \u9ed8\u8a8d\u4f7f\u7528\u624b\u6a5f\u5c4f\u5e55\u5bec\u5ea6\nconst CHART_HEIGHT = 300;\n\nconst Chart = ({\n  option,\n  onInit,\n  width = CHART_WIDTH,\n  height = CHART_HEIGHT,\n  ChartComponent,\n}) => {\n  const chartRef = useRef(null);\n\n  useEffect(() => {\n    let chart;\n    if (chartRef.current) {\n      chart = echarts.init(chartRef.current, 'light', {\n        renderer: 'svg',\n        width,\n        height,\n      });\n      option && chart.setOption(option);\n      onInit?.(chart);\n    }\n    return () => chart?.dispose();\n  }, [option]);\n  return <ChartComponent ref={chartRef} />;\n};\n\nconst SkiaChart = (props) => <Chart {...props} ChartComponent={_SkiaChart} />;\nconst SvgChart = (props) => <Chart {...props} ChartComponent={_SvgChart} />;\n// \u53ea\u5c0e\u51fa\u9019\u5169\u500b\u7d44\u4ef6\nexport { SkiaChart, SvgChart };\n")),(0,r.kt)("h3",{id:"\u7b2c-8-\u6b65\u4f7f\u7528\u591a\u500b\u5716\u8868"},"\u7b2c 8 \u6b65\uff1a\u4f7f\u7528\u591a\u500b\u5716\u8868"),(0,r.kt)("p",null,"\u5c01\u88dd\u597d\u4e4b\u5f8c\uff0c\u6211\u5011\u4f86\u5beb\u4e00\u500b\u5305\u542b\u591a\u500b\u5716\u8868\u7684\u9801\u9762\uff0c\u770b\u770b\u6548\u679c\u5982\u4f55\u3002\u9019\u88e1\u4ee5\u201c\u96fb\u5546\u6578\u64da\u5206\u6790\u201d\u70ba\u4f8b\uff0c\u5305\u542b\u4e86\u4e00\u500b\u6298\u7dda\u5716\u3001\u67f1\u72c0\u5716\u548c\u9905\u5716\u3002\u4ee5\u4e0b\u662f\u4f7f\u7528 svg \u6a21\u5f0f\u7de8\u5beb\u7684\u4e3b\u8981\u4ee3\u78bc\uff0c\u8a73\u7d30\u4ee3\u78bc\u53ef\u4ee5\u9ede\u64ca",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iambool/TestApp/tree/main/pages/ECdata"},"\u9019\u88e1"),"\u67e5\u770b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { SkiaChart } from '../../components/Chart';\nimport { ScrollView, Text, View } from 'react-native';\nimport { StatusBar } from 'expo-status-bar';\nimport { useCallback, useEffect, useState } from 'react';\nimport {\n  defaultActual,\n  lineOption,\n  salesStatus,\n  salesVolume,\n  userAnaly,\n  getLineData,\n} from './contants';\nimport styles from './styles';\n// \u6253\u958b\u5716\u8868\u7684 loading \u6548\u679c\nconst showChartLoading = (chart) =>\n  chart.showLoading('default', {\n    maskColor: '#305d9e',\n  });\n// \u95dc\u9589\u5716\u8868\u7684 loading \u6548\u679c\nconst hideChartLoading = (chart) => chart.hideLoading();\n\nexport default () => {\n  const [actual, setActual] = useState(defaultActual); // \u4fdd\u5b58\u5be6\u6642\u6578\u64da\n\n  useEffect(() => {\n    // \u5047\u8a2d\u662f\u4e00\u500b\u5b9a\u6642\u8acb\u6c42\u6578\u64da\u7684\u64cd\u4f5c\n    const interv = setInterval(() => {\n      const newActual = [];\n      for (let it of actual) {\n        newActual.push({\n          ...it,\n          num: it.num + Math.floor((Math.random() * it.num) / 100),\n        });\n      }\n      setActual(newActual);\n    }, 200);\n    return () => clearInterval(interv);\n  }, [actual]);\n\n  const onInitLineChart = useCallback((myChart) => {\n    showChartLoading(myChart);\n    // \u6a21\u64ec\u6578\u64da\u8acb\u6c42\n    setTimeout(() => {\n      myChart.setOption({\n        series: getLineData,\n      });\n      hideChartLoading(myChart);\n    }, 1000);\n  }, []);\n\n  const onInitUserChart = useCallback((myChart) => {\n    // \u6a21\u64ec\u6578\u64da\u8acb\u6c42\uff0c\u985e\u4f3c onInitLineChart\n  }, []);\n  const onInitSaleChart = useCallback((myChart) => {\n    // \u6a21\u64ec\u6578\u64da\u8acb\u6c42\uff0c\u985e\u4f3c onInitLineChart\n  }, []);\n  const onInitStatusChart = useCallback((myChart) => {\n    // \u6a21\u64ec\u6578\u64da\u8acb\u6c42\uff0c\u985e\u4f3c onInitLineChart\n  }, []);\n\n  const chartList = [\n    ['\u8ba2\u5355\u8d70\u52bf', lineOption, onInitLineChart],\n    ['\u7528\u6237\u7edf\u8ba1', userAnaly, onInitUserChart],\n    ['\u5404\u54c1\u7c7b\u9500\u552e\u7edf\u8ba1', salesVolume, onInitSaleChart],\n    ['\u8ba2\u5355\u72b6\u6001\u7edf\u8ba1', salesStatus, onInitStatusChart],\n  ];\n\n  return (\n    <ScrollView style={styles.index}>\n      <StatusBar style='light' />\n      <View>\n        <View style={styles.index_panel_header}>\n          <Text style={styles.index_panel_title}>\u5b9e\u65f6\u6570\u636e</Text>\n        </View>\n        <View style={styles.index_panel_content}>\n          {actual.map(({ title, num, unit }) => (\n            <View key={title} style={styles.sale_item}>\n              <View style={styles.sale_item_cell}>\n                <Text style={styles.sale_item_text}>{title}</Text>\n              </View>\n              <View style={[styles.sale_item_cell, styles.num]}>\n                <Text style={styles.sale_item_num}>{num}</Text>\n              </View>\n              <View style={[styles.sale_item_cell, styles.unit]}>\n                <Text style={styles.sale_item_text}>{unit}</Text>\n              </View>\n            </View>\n          ))}\n        </View>\n      </View>\n      {chartList.map(([title, data, callback]) => (\n        <View key={title}>\n          <View style={styles.index_panel_header}>\n            <Text style={styles.index_panel_title}>{title}</Text>\n          </View>\n          <View style={styles.index_panel_content}>\n            <SkiaChart option={data} onInit={callback} />\n          </View>\n        </View>\n      ))}\n    </ScrollView>\n  );\n};\n")),(0,r.kt)("p",null,"\u91cd\u65b0\u52a0\u8f09 bundle \u5305\uff0c\u770b\u770b\u6548\u679c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Android"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"picture",src:n(66).Z,width:"400",height:"888"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"picture",src:n(7717).Z,width:"400",height:"868"}))))),(0,r.kt)("p",null,"\u6e32\u67d3\u5f8c\uff0ciOS \u4e0a\u7684\u4e92\u52d5\u975e\u5e38\u6d41\u66a2\uff0c\u800c Android \u4e0a\u7684\u4e92\u52d5\u5076\u723e\u6703\u611f\u89ba\u6709\u9ede\u5361\u9813\uff08\u4e0d\u662f\u56e0\u70ba\u6211\u7684\u624b\u6a5f\u592a\u5dee\u4e86\u5427\uff1f...\uff09"),(0,r.kt)("p",null,"\u518d\u8a66\u8a66 Skia \u6a21\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture",src:n(3944).Z,width:"322",height:"696"})),(0,r.kt)("p",null,"\u55ef\uff0c\u96d6\u7136\u53ef\u4ee5\uff0c\u4f46\u4f3c\u4e4e\u7121\u6cd5\u6b63\u78ba\u986f\u793a\u4e2d\u6587\uff0cAndroid \u4e0a\u7121\u6cd5\u986f\u793a\u4e2d\u6587\uff0c\u800c iOS \u5247\u662f\u4e00\u5718\u4e82\u78bc\u3002\u5728\u95b1\u8b80\u6587\u6a94\u5f8c\uff0c\u6211\u767c\u73fe skia \u76ee\u524d\u4e0d\u652f\u6301 Android \u7aef\u7684\u4e2d\u6587\u986f\u793a\uff0c\u6211\u5011\u53ef\u4ee5\u901a\u904e\u5c07\u5b57\u9ad4\u8a2d\u7f6e\u70ba 'PingFang SC' \u4f86\u5728 iOS \u4e0a\u986f\u793a\u4e2d\u6587\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const option = {\n  title: {\n    text: '\u6211\u662f\u4e2d\u6587',\n    textStyle: {\n      fontFamily: 'PingFang SC', // \u8a2d\u7f6e\u5b57\u9ad4\u985e\u578b\n    },\n  },\n};\n")),(0,r.kt)("p",null,"\u4f46\u662f\u6bcf\u500b\u986f\u793a\u4e2d\u6587\u7684\u5730\u65b9\u90fd\u9700\u8981\u8a2d\u7f6e\u5b57\u9ad4... \u8981\u4e0d\u5c31\u5148\u4f7f\u7528 Svg\uff0c\u6211\u6709\u9ede\u61f6\u3002"),(0,r.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,r.kt)("p",null,"\u4f7f\u7528\u4e00\u6bb5\u6642\u9593\u5f8c\uff0c\u6211\u7e3d\u7d50\u4e86\u4ee5\u4e0b\u5167\u5bb9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u652f\u6301\u65b9\u9762\uff0c@wuba/react-native-echarts \u652f\u6301\u9664\u4e86 GL \u7cfb\u5217\u548c\u5730\u5716\u5716\u8868\u4e4b\u5916\u7684\u6240\u6709\u985e\u578b\u7684\u5716\u8868\uff0c\u9019\u5c0d\u65bc\u65e5\u5e38\u696d\u52d9\u4f86\u8aaa\u5df2\u7d93\u975e\u5e38\u8db3\u5920\u4e86\u3002\u5be6\u73fe\u5404\u7a2e\u5716\u8868\u7684\u4ee3\u78bc\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wuba/taro-playground"},"taro-playground")," \u4e2d\u627e\u5230\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e92\u52d5\u65b9\u9762\uff0ciOS \u975e\u5e38\u6d41\u66a2\uff0cAndroid \u5076\u723e\u6703\u6709\u5e40\u7387\u4e0b\u964d\u7684\u60c5\u6cc1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd\u65b9\u9762\uff1a\u5b98\u65b9\u5831\u544a\u7684\u6027\u80fd\u6bd4\u5176\u4ed6\u89e3\u6c7a\u65b9\u6848\u66f4\u597d\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6211\u8a66\u904e\uff0c\u6578\u64da\u91cf\u4e0d\u662f\u5f88\u5927\u6642\u4e0d\u6703\u6709\u4efb\u4f55\u554f\u984c\uff0c\u4f46\u662f\u7576\u6578\u64da\u91cf\u592a\u5927\u6642\uff08\u4f8b\u5982\u7e6a\u88fd\u5927\u91cf\u6578\u64da\u7684\u71b1\u529b\u5716\uff09\uff0c\u6e32\u67d3\u901f\u5ea6\u660e\u986f\u4e0b\u964d\u4e86\u5f88\u591a\uff0c\u9019\u662f\u4e00\u500b\u7b49\u5f85\u5b98\u65b9\u512a\u5316\u7684\u9ede\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6b64\u5916\uff0c\u5982\u679c\u9801\u9762\u4e0a\u6709\u5f88\u591a\u5716\u8868\uff0c\u4f7f\u7528\u771f\u6a5f\u8abf\u8a66\u6642\u52a0\u8f09\u901f\u5ea6\u6703\u5f88\u6162\uff0c\u5efa\u8b70\u5148\u4f7f\u7528\u6a21\u64ec\u5668\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u6587\u652f\u6301\uff0cSvg \u6a21\u5f0f\u652f\u6301\u4e2d\u6587\uff0c\u4f46 Skia \u6a21\u5f0f\u76ee\u524d\u4e0d\u53ef\u7528\u3002")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u50c5\u70ba\u500b\u4eba\u89c0\u9ede\uff0c\u6b61\u8fce\u4ea4\u6d41\u4efb\u4f55\u554f\u984c\u3002"))}u.isMDXComponent=!0},3555:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/create-expo-3e491a8c7755f9697ddfef5a2d7e736d.jpeg"},1618:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/dynamic-data-android-a3a87f304ce4b02b5f552ea83bbd15a5.gif"},3158:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/dynamic-data-ios-a48f027a0a497a7eef3ff6ba4c47c2f4.gif"},7717:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ecdata-android-5ead76e0684e019e33e9b780617f6e11.gif"},66:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ecdata-ios-941b5a2e55c797502af1f3f9fddad871.gif"},4194:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/example-6d869e9b1647cc3ebb8f87dac4d444ae.png"},4423:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/expo-app-e5e5fc8d237f76a2a2b457f619024188.png"},5703:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/skia-android-81c23447be12009352f45a607e082328.jpg"},3944:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/skia-chinese-284dae33c30d6d1057aef3b39336f8a3.png"},545:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/skia-ios-2f06aa82687b30a65848913f0e68cb83.png"},5259:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/warning-850be6006cf70a2e55d7dfb51c2936e0.jpg"}}]);