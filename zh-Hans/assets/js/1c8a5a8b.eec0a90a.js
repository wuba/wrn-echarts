"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[5641],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},h="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(o,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,s(s({ref:e},c),{},{components:n})):a.createElement(d,s({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[h]="string"==typeof t?t:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},950:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={slug:"using-wuba-react-native-echarts",title:"Expo\u4e2d\u4f7f\u7528@wuba/react-native-echarts",authors:["iambool"],tags:["expo"]},s=void 0,l={permalink:"/react-native-echarts/zh-Hans/blog/using-wuba-react-native-echarts",editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/i18n/zh-Hans/docusaurus-plugin-content-blog/2023-03-10-using-wuba-react-native-echarts/index.md",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2023-03-10-using-wuba-react-native-echarts/index.md",title:"Expo\u4e2d\u4f7f\u7528@wuba/react-native-echarts",description:"\u524d\u8a00",date:"2023-03-10T00:00:00.000Z",formattedDate:"2023\u5e743\u670810\u65e5",tags:[{label:"expo",permalink:"/react-native-echarts/zh-Hans/blog/tags/expo"}],readingTime:11.51,hasTruncateMarker:!0,authors:[{name:"iambool",title:"react-native-echarts \u7684\u7ef4\u62a4\u8005",url:"https://github.com/iambool",imageURL:"https://github.com/iambool.png",key:"iambool"}],frontMatter:{slug:"using-wuba-react-native-echarts",title:"Expo\u4e2d\u4f7f\u7528@wuba/react-native-echarts",authors:["iambool"],tags:["expo"]},prevItem:{title:"React Native Echarts \u5b98\u65b9\u7f51\u7ad9\u6b63\u5f0f\u4e0a\u7ebf\uff01",permalink:"/react-native-echarts/zh-Hans/blog/the-official-website-has-launched"},nextItem:{title:"\u5728 React Native \u4e2d\u4f7f\u7528 Apache ECharts",permalink:"/react-native-echarts/zh-Hans/blog/using-apache-echarts-in-react-native"}},o={authorsImageUrls:[void 0]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"Tips",id:"tips",level:3},{value:"\u8be6\u7ec6\u4f7f\u7528\u8fc7\u7a0b\u5982\u4e0b",id:"\u8be6\u7ec6\u4f7f\u7528\u8fc7\u7a0b\u5982\u4e0b",level:2},{value:"1\u3001\u5f00\u53d1\u73af\u5883\u642d\u5efa",id:"1\u5f00\u53d1\u73af\u5883\u642d\u5efa",level:3},{value:"2\u3001\u51c6\u5907 RN \u5de5\u7a0b",id:"2\u51c6\u5907-rn-\u5de5\u7a0b",level:3},{value:"3\u3001build App \u5305",id:"3build-app-\u5305",level:3},{value:"4\u3001 \u5b89\u88c5\u76f8\u5173\u4f9d\u8d56",id:"4-\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56",level:3},{value:"5\u3001\u8bd5\u7528 Skia \u6a21\u5f0f",id:"5\u8bd5\u7528-skia-\u6a21\u5f0f",level:3},{value:"6\u3001\u8bd5\u7528 Svg \u6a21\u5f0f",id:"6\u8bd5\u7528-svg-\u6a21\u5f0f",level:3},{value:"7\u3001\u5c01\u88c5 Chart \u7ec4\u4ef6",id:"7\u5c01\u88c5-chart-\u7ec4\u4ef6",level:3},{value:"8\u3001\u591a\u4e2a\u56fe\u8868\u4f7f\u7528",id:"8\u591a\u4e2a\u56fe\u8868\u4f7f\u7528",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:p},h="wrapper";function u(t){let{components:e,...i}=t;return(0,r.kt)(h,(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u5e73\u65f6\u5199\u56fe\u8868\u76f8\u5173\u9700\u6c42\uff0c\u7528\u5f97\u6700\u591a\u7684\u56fe\u8868\u5e93\u5c31\u662f",(0,r.kt)("strong",{parentName:"p"},"echarts"),"\u3002echarts \u5728 web \u7aef\u7684\u8868\u73b0\u5df2\u7ecf\u76f8\u5f53\u6210\u719f\uff0c\u5b98\u65b9\u5bf9\u5c0f\u7a0b\u5e8f\u7aef\u4e5f\u63d0\u4f9b\u4e86\u89e3\u51b3\u65b9\u6848\uff0c\u800c\u5728 RN \u65b9\u9762\u5374\u6ca1\u6709\u76f8\u5e94\u652f\u6301\u3002\u5e02\u9762\u4e0a\u641c\u5230\u7684\uff0c\u5927\u591a\u672c\u8d28\u8fd8\u662f\u57fa\u4e8e webview \u5b9e\u73b0\uff0c\u800c\u6211\u66f4\u503e\u5411\u4e8e\u57fa\u4e8e RN \u7684\u65b9\u6848\uff0c\u6bd5\u7adf\u539f\u751f\u7684\u4f53\u9a8c\u4f1a\u6bd4 Web \u7684\u66f4\u597d\u4e00\u4e9b\u3002"),(0,r.kt)("p",null,"\u7ecf\u8fc7\u4e00\u756a\u5bfb\u627e\u53d1\u73b0 ",(0,r.kt)("a",{parentName:"p",href:"https://wuba.github.io/react-native-echarts/"},(0,r.kt)("strong",{parentName:"a"},"@wuba/react-native-echarts"))," \u6ee1\u8db3\u9700\u6c42\uff0c\u4e8e\u662f\u4e0a\u624b\u8bd5\u4e86\u4e0b\uff0c\u6548\u679c\u8fd8\u4e0d\u9519 ~ \u5bf9\u5b9e\u73b0\u539f\u7406\u611f\u5174\u8da3\u7684\u53ef\u4ee5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7199529508112711738"},"\u8fd9\u91cc"),"\n",(0,r.kt)("img",{src:n(6767).Z,width:"1716",height:"1946"})),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5df2\u7ecf\u6709 APP \u5305\uff0c\u53ef\u4ee5\u5ffd\u7565\u524d\u9762\u7684\u6253\u5305\u6d41\u7a0b\uff0c\u76f4\u63a5\u8df3\u5230\u7b2c 4 \u6b65\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bd5\u7528\u7684\u5b8c\u6574\u4ee3\u7801\u653e\u5728 github \u4e0a\u4e86\uff0c\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iambool/TestApp"},"https://github.com/iambool/TestApp"))),(0,r.kt)("h2",{id:"\u8be6\u7ec6\u4f7f\u7528\u8fc7\u7a0b\u5982\u4e0b"},"\u8be6\u7ec6\u4f7f\u7528\u8fc7\u7a0b\u5982\u4e0b"),(0,r.kt)("h3",{id:"1\u5f00\u53d1\u73af\u5883\u642d\u5efa"},"1\u3001\u5f00\u53d1\u73af\u5883\u642d\u5efa"),(0,r.kt)("p",null,"\u672c\u5730\u642d\u597d RN \u5f00\u53d1\u73af\u5883\uff0c\u642d\u5efa\u8fc7\u7a0b\u7f51\u4e0a\u4e00\u6293\u4e00\u5927\u628a\uff0c\u5c31\u4e0d\u8d58\u8ff0\u4e86\u3002"),(0,r.kt)("h3",{id:"2\u51c6\u5907-rn-\u5de5\u7a0b"},"2\u3001\u51c6\u5907 RN \u5de5\u7a0b"),(0,r.kt)("p",null,"\u56e0\u4e3a\u662f\u8bd5\u7528\uff0c\u6240\u4ee5\u6211\u7528 expo \u65b0\u521d\u59cb\u5316\u4e86\u4e00\u4e2a rn \u5de5\u7a0b\uff0c\u53eb TestApp\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx create-expo-app TestApp\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create TestApp",src:n(4588).Z,width:"1272",height:"1020"})),(0,r.kt)("h3",{id:"3build-app-\u5305"},"3\u3001build App \u5305"),(0,r.kt)("p",null,"\u7528\u547d\u4ee4\u884c\u751f\u6210\u5305 ios android app \u5305\u3002\u8fd9\u91cc ios \u5efa\u8bae\u7528\u6a21\u62df\u5668\uff08\u4e0d\u9700\u8981\u914d\u8bc1\u4e66\uff09\uff0c\u5b89\u5353\u6211\u662f\u8fde\u7684\u771f\u673a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn android\nyarn ios\n")),(0,r.kt)("p",null,"\u751f\u6210\u5305\u540e\uff0c\u624b\u673a\u770b\u5230\u5df2\u7ecf\u5b89\u88c5\u4e86\u8fd9\u4e2a\u5e94\u7528\uff0c\u5c31\u4ee3\u8868\u6210\u529f\u5566\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u56fe\u7247",src:n(5013).Z,width:"222",height:"280"})),(0,r.kt)("h3",{id:"4-\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56"},"4\u3001 \u5b89\u88c5\u76f8\u5173\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add @wuba/react-native-echarts echarts\nyarn add @shopify/react-native-skia\nyarn add react-native-svg\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u662f\u5728\u5df2\u6709\u5de5\u7a0b\u4e2d\u5b89\u88c5\uff0c\u5b89\u88c5\u5b8c\u6210\u540e\u8981\u91cd\u65b0\u6253\u4e2a\u65b0\u5305\uff0c\u4e0d\u7136\u7f3a\u5c11\u539f\u751f\u4f9d\u8d56\u4f1a\u62a5\u9519\uff1b"),(0,r.kt)("h3",{id:"5\u8bd5\u7528-skia-\u6a21\u5f0f"},"5\u3001\u8bd5\u7528 Skia \u6a21\u5f0f"),(0,r.kt)("p",null,"@wuba/react-native-echarts \u652f\u6301",(0,r.kt)("strong",{parentName:"p"},"\u4e24\u79cd\u6e32\u67d3\u6a21\u5f0f\uff08Skia \u548c Svg\uff09"),"\uff0c\u5148\u7528 Skia \u8bd5\u4e00\u4e2a\u7b80\u5355\u7684\u56fe\u8868\u3002\u5927\u81f4\u5206\u4e3a\u8fd9\u51e0\u4e2a\u5c0f\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165 echarts\u3001\u56fe\u8868\u7ec4\u4ef6\u7b49\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u56fe\u8868\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u56fe\u8868\u5b9e\u4f8b\uff0c\u5e76\u8bbe\u7f6e\u56fe\u8868\u7684\u914d\u7f6e\uff08option\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u9875\u9762\u9500\u6bc1\u65f6\u8981\u8bb0\u5f97\u540c\u6b65\u9500\u6bc1\u56fe\u8868\u5b9e\u4f8b")),(0,r.kt)("p",null,"\u5177\u4f53\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useRef, useEffect } from 'react';\nimport { View } from 'react-native';\n/**\n * \u4e00\u3001\u5f15\u5165echarts\u4f9d\u8d56\uff0c\u8fd9\u91cc\u5148\u8bd5\u4e0b\u6298\u7ebf\u56fe\n */\nimport * as echarts from 'echarts/core';\nimport { LineChart } from 'echarts/charts';\nimport { GridComponent } from 'echarts/components';\nimport SkiaChart, { SVGRenderer } from '@wuba/react-native-echarts/skiaChart';\n\n/**\n * \u4e8c\u3001\u6ce8\u518c\u9700\u8981\u7528\u5230\u7684\u7ec4\u4ef6\n * SVGRenderer: \u662f\u5fc5\u987b\u6ce8\u518c\u7684\n * LineChart: \u56e0\u4e3a\u7528\u7684\u6298\u7ebf\u56fe\uff0c\u6240\u4ee5\u8981\u5f15\u5165LineChart\uff08\u5982\u679c\u4e0d\u77e5\u9053\u8be5\u5f15\u5165\u54ea\u4e9b\u7ec4\u4ef6\uff0c\u5c31\u76f4\u63a5\u770b\u62a5\u9519\uff0c\u62a5\u9519\u8bf4\u7f3a\u4ec0\u4e48\u5c31\u52a0\u4ec0\u4e48\uff09\n * GridComponent: \u8fd9\u4e2a\u5c31\u662f\u62a5\u9519\u7684\u65f6\u5019\u63d0\u793a\uff0c\u7136\u540e\u6211\u52a0\u7684hhh\n */\necharts.use([SVGRenderer, LineChart, GridComponent]);\n\nexport default () => {\n  const skiaRef = useRef(null); // Ref\u7528\u4e8e\u4fdd\u5b58\u56fe\u8868\u5b9e\u4f8b\n  useEffect(() => {\n    /**\n     * \u56db\u3001\u56fe\u8868\u914d\u7f6e\n     */\n    const option = {\n      xAxis: {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n      yAxis: {\n        type: 'value',\n      },\n      series: [\n        {\n          data: [150, 230, 224, 218, 135, 147, 260],\n          type: 'line',\n        },\n      ],\n    };\n    let chart;\n    if (skiaRef.current) {\n      /**\n       * \u4e94\u3001\u521d\u59cb\u5316\u56fe\u8868\uff0c\u6307\u5b9a\u4e0b\u5bbd\u9ad8\n       */\n      chart = echarts.init(skiaRef.current, 'light', {\n        renderer: 'svg',\n        width: 400,\n        height: 400,\n      });\n      chart.setOption(option);\n    }\n    /**\n     * \u516d\u3001\u9875\u9762\u5173\u95ed\u540e\u8981\u9500\u6bc1\u56fe\u8868\u5b9e\u4f8b\n     */\n    return () => chart?.dispose();\n  }, []);\n  return (\n    <View className='index'>\n      <SkiaChart ref={skiaRef} />\n    </View>\n  );\n};\n")),(0,r.kt)("p",null,"\u5199\u5b8c\u6447\u4e00\u6447\u624b\u673a\uff0creload bundle \u5305\u65f6\u51fa\u73b0\u4e86\u62a5\u9519\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'ERROR Invariant Violation: requireNativeComponent: "SkiaDomView" was not found in the UIManager.')),(0,r.kt)("p",null,"google \u4e86\u4e00\u4e0b\uff0c\u8bf4\u662f\u9700\u8981",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/74648194/shopify-react-native-skia-with-expo"},"\u964d\u7ea7"),"\u89e3\u51b3\u3002\u5176\u5b9e\u662f\u8981\u8ddf expo \u7248\u672c\u5bf9\u5e94\uff0c\u5728\u5b89\u88c5\u4f9d\u8d56\u7684\u65f6\u5019\u4e5f\u4f1a\u6709\u7c7b\u4f3c\u8fd9\u6837\u7684\u63d0\u793a\uff0c\u5b89\u88c5\u63d0\u793a\u7684\u7248\u672c\u5c31\u53ef\u4ee5\u4e86\n",(0,r.kt)("img",{alt:"\u56fe\u7247",src:n(2559).Z,width:"1692",height:"340"})),(0,r.kt)("p",null,"\u4e8e\u662f\u6309\u7167\u63d0\u793a\u505a\u4e86\u7248\u672c\u964d\u7ea7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@shopify/react-native-skia@0.1.157\nreact-native-svg@13.4.0\n")),(0,r.kt)("p",null,"\u91cd\u65b0\u6784\u5efa app \u540e\u52a0\u8f7d\u51fa\u6765\u4e86\uff0c\u9488\u4e0d\u6233\uff1b\uff08\u5b89\u5353\u906e\u4f4f\u4e86\u70b9\uff0c\u770b\u6765\u5e94\u8be5\u81ea\u9002\u5e94\u5c4f\u5e55\u5bbd\u5ea6\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Android"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"iOS\u622a\u56fe",src:n(6185).Z,width:"1170",height:"2532"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"\u5b89\u5353\u622a\u56fe",src:n(8953).Z,width:"1080",height:"2340"}))))),(0,r.kt)("h3",{id:"6\u8bd5\u7528-svg-\u6a21\u5f0f"},"6\u3001\u8bd5\u7528 Svg \u6a21\u5f0f"),(0,r.kt)("p",null,"\u5199\u4e2a\u590d\u6742\u70b9\u7684\u52a8\u6001\u6392\u5e8f\u67f1\u72b6\u56fe\uff0c\u8bd5\u8bd5 Svg \u6a21\u5f0f\uff0c\u7ed9 Svg \u548c Skia \u505a\u4e2a\u5bf9\u6bd4\uff0c\u5b8c\u6574\u4ee3\u7801\u770b",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iambool/TestApp/blob/main/pages/barRace/index.js"},"\u8fd9\u91cc"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import SvgChart, { SVGRenderer } from '@wuba/react-native-echarts/svgChart';\n// ...\u6b64\u5904\u7701\u7565\u4e00\u4e9b\u4e0d\u91cd\u8981\u7684\u4ee3\u7801\n\n// \u6ce8\u518c\u9700\u8981\u7528\u5230\u7684\u7ec4\u4ef6\uff0cBarChart-\u67f1\u72b6\u56fe LegendComponent-\u56fe\u4f8b\necharts.use([SVGRenderer, BarChart, LegendComponent, GridComponent]);\n\nexport default () => {\n  const skiaRef = useRef(null);\n  const svgRef = useRef(null);\n\n  useEffect(() => {\n    // Skia\u6a21\u5f0f\n    const skiaChartData = getData(); // \u751f\u6210\u56fe\u8868\u67f1\u72b6\u56fe\u6570\u636e\n    let skiaChart;\n    let skiaInter;\n    if (skiaRef.current) {\n      skiaChart = echarts.init(skiaRef.current, 'light', {\n        renderer: 'svg',\n        width: 300,\n        height: 300,\n      });\n      skiaChart.setOption(getDefaultOption(skiaChartData));\n      setTimeout(function () {\n        run(skiaChart, skiaChartData);\n      }, 0);\n      skiaInter = setInterval(function () {\n        run(skiaChart, skiaChartData);\n      }, 3000);\n    }\n\n    // Svg\u6a21\u5f0f\n    const svgChartData = getData();\n    let svgChart;\n    let svgInter;\n    if (svgRef.current) {\n      svgChart = echarts.init(svgRef.current, 'light', {\n        renderer: 'svg',\n        width: 300,\n        height: 300,\n      });\n      svgChart.setOption(getDefaultOption(svgChartData));\n      setTimeout(function () {\n        run(svgChart, svgChartData);\n      }, 0);\n      svgInter = setInterval(function () {\n        run(svgChart, svgChartData);\n      }, 3000);\n    }\n\n    return () => {\n      skiaChart?.dispose();\n      svgChart?.dispose();\n      // \u5b9a\u65f6\u5668\u5f97\u6e05\u7406\u6389\uff0c\u4e0d\u7136\u9000\u51fa\u9875\u9762\u540e\u8fd8\u4f1a\u8fd0\u884c\n      clearInterval(skiaInter);\n      clearInterval(svgInter);\n    };\n  }, []);\n  return (\n    <View>\n      <Text>skia\u5982\u4e0b</Text>\n      <SkiaChart ref={skiaRef} />\n      <Text>svg\u5982\u4e0b</Text>\n      <SvgChart ref={svgRef} />\n    </View>\n  );\n};\n")),(0,r.kt)("p",null,"Skia \u548c Svg \u6a21\u5f0f\uff0c\u8089\u773c\u770b\u4e0d\u51fa\u660e\u663e\u5dee\u522b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Android"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"\u56fe\u7247",src:n(5475).Z,width:"640",height:"1385"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"\u56fe\u7247",src:n(3915).Z,width:"590",height:"1280"}))))),(0,r.kt)("h3",{id:"7\u5c01\u88c5-chart-\u7ec4\u4ef6"},"7\u3001\u5c01\u88c5 Chart \u7ec4\u4ef6"),(0,r.kt)("p",null,"\u6548\u679c\u4e0d\u9519\uff0c\u4e0d\u8fc7\u6bcf\u6b21\u4f7f\u7528\u90fd\u8981\u628a\u4e00\u5806\u4e1c\u897f\u5f15\u8fdb\u53bb\u597d\u70e6\uff0c\u5148\u7b80\u5355\u5c01\u88c5\u4e0b\u5427"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useRef, useEffect } from 'react';\nimport * as echarts from 'echarts/core';\nimport { BarChart, LineChart, PieChart } from 'echarts/charts';\nimport {\n  DataZoomComponent,\n  GridComponent,\n  LegendComponent,\n  TitleComponent,\n  ToolboxComponent,\n  TooltipComponent,\n} from 'echarts/components';\nimport {\n  SVGRenderer,\n  SvgChart as _SvgChart,\n  SkiaChart as _SkiaChart,\n} from '@wuba/react-native-echarts';\n// \u5982\u679c\u53ea\u5b89\u88c5\u4e86svg\u6216skia\u4e2d\u7684\u4e00\u4e2a\uff0c\u9700\u8981\u6309\u5982\u4e0b\u65b9\u5f0f\u5355\u72ec\u5f15\u5165\n// import _SkiaChart, { SVGRenderer } from '@wuba/react-native-echarts/skiaChart';\n// import _SvgChart, { SVGRenderer } from '@wuba/react-native-echarts/svgChart';\nimport { Dimensions } from 'react-native';\n\n// \u6ce8\u518c\u9700\u8981\u7528\u5230\u7684\u7ec4\u4ef6\necharts.use([\n  DataZoomComponent,\n  SVGRenderer,\n  BarChart,\n  GridComponent,\n  LegendComponent,\n  ToolboxComponent,\n  TooltipComponent,\n  TitleComponent,\n  PieChart,\n  LineChart,\n]);\n\n// \u56fe\u8868\u9ed8\u8ba4\u5bbd\u9ad8\nconst CHART_WIDTH = Dimensions.get('screen').width; // \u9ed8\u8ba4\u7528\u624b\u673a\u5c4f\u5e55\u5bbd\u5ea6\nconst CHART_HEIGHT = 300;\n\nconst Chart = ({\n  option,\n  onInit,\n  width = CHART_WIDTH,\n  height = CHART_HEIGHT,\n  ChartComponent,\n}) => {\n  const chartRef = useRef(null);\n\n  useEffect(() => {\n    let chart;\n    if (chartRef.current) {\n      chart = echarts.init(chartRef.current, 'light', {\n        renderer: 'svg',\n        width,\n        height,\n      });\n      option && chart.setOption(option);\n      onInit?.(chart);\n    }\n    return () => chart?.dispose();\n  }, [option]);\n  return <ChartComponent ref={chartRef} />;\n};\n\nconst SkiaChart = (props) => <Chart {...props} ChartComponent={_SkiaChart} />;\nconst SvgChart = (props) => <Chart {...props} ChartComponent={_SvgChart} />;\n// \u5bf9\u5916\u53ea\u66b4\u9732\u8fd9\u54e5\u4fe9\u5c31\u884c\nexport { SkiaChart, SvgChart };\n")),(0,r.kt)("h3",{id:"8\u591a\u4e2a\u56fe\u8868\u4f7f\u7528"},"8\u3001\u591a\u4e2a\u56fe\u8868\u4f7f\u7528"),(0,r.kt)("p",null,"\u5c01\u88c5\u597d\u4e86\uff0c\u54b1\u5c31\u5199\u4e2a\u591a\u56fe\u8868\u540c\u65f6\u4f7f\u7528\u7684\u9875\u9762\u770b\u770b\u6548\u679c\u3002\u8fd9\u91cc\u5199\u4e86\u4e2a\u201c\u7535\u5546\u6570\u636e\u5206\u6790\u201d\u9875\u9762\uff0c\u5206\u522b\u6709\u6298\u7ebf\u56fe\u3001\u67f1\u72b6\u56fe\u3001\u997c\u56fe\u3002\u4e0b\u65b9\u662f\u4e3b\u8981\u4ee3\u7801\uff0c\u7528\u7684 svg \u6a21\u5f0f\uff0c\u8be6\u7ec6\u4ee3\u7801\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iambool/TestApp/tree/main/pages/ECdata"},"\u8fd9\u91cc"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u9875\u9762\u4ee3\u7801\nimport { SkiaChart } from '../../components/Chart';\nimport { ScrollView, Text, View } from 'react-native';\nimport { StatusBar } from 'expo-status-bar';\nimport { useCallback, useEffect, useState } from 'react';\nimport {\n  defaultActual,\n  lineOption,\n  salesStatus,\n  salesVolume,\n  userAnaly,\n  getLineData,\n} from './contants';\nimport styles from './styles';\n// \u5f00\u542f\u56fe\u8868loading\nconst showChartLoading = (chart) =>\n  chart.showLoading('default', {\n    maskColor: '#305d9e',\n  });\n// \u5173\u95ed\u56fe\u8868loading\nconst hideChartLoading = (chart) => chart.hideLoading();\n\nexport default () => {\n  const [actual, setActual] = useState(defaultActual); // \u8bb0\u5f55\u5b9e\u65f6\u6570\u636e\n\n  useEffect(() => {\n    // \u5047\u8bbe\u5faa\u73af\u8bf7\u6c42\u6570\u636e\n    const interv = setInterval(() => {\n      const newActual = [];\n      for (let it of actual) {\n        newActual.push({\n          ...it,\n          num: it.num + Math.floor((Math.random() * it.num) / 100),\n        });\n      }\n      setActual(newActual);\n    }, 200);\n    return () => clearInterval(interv);\n  }, [actual]);\n\n  const onInitLineChart = useCallback((myChart) => {\n    showChartLoading(myChart);\n    // \u6a21\u62df\u6570\u636e\u8bf7\u6c42\n    setTimeout(() => {\n      myChart.setOption({\n        series: getLineData,\n      });\n      hideChartLoading(myChart);\n    }, 1000);\n  }, []);\n\n  const onInitUserChart = useCallback((myChart) => {\n    // \u6a21\u62df\u6570\u636e\u8bf7\u6c42\uff0c\u8ddfonInitLineChart\u7c7b\u4f3c\n  }, []);\n  const onInitSaleChart = useCallback((myChart) => {\n    // \u6a21\u62df\u6570\u636e\u8bf7\u6c42\uff0c\u8ddfonInitLineChart\u7c7b\u4f3c\n  }, []);\n  const onInitStatusChart = useCallback((myChart) => {\n    // \u6a21\u62df\u6570\u636e\u8bf7\u6c42\uff0c\u8ddfonInitLineChart\u7c7b\u4f3c\n  }, []);\n\n  const chartList = [\n    ['\u8ba2\u5355\u8d70\u52bf', lineOption, onInitLineChart],\n    ['\u7528\u6237\u7edf\u8ba1', userAnaly, onInitUserChart],\n    ['\u5404\u54c1\u7c7b\u9500\u552e\u7edf\u8ba1', salesVolume, onInitSaleChart],\n    ['\u8ba2\u5355\u72b6\u6001\u7edf\u8ba1', salesStatus, onInitStatusChart],\n  ];\n\n  return (\n    <ScrollView style={styles.index}>\n      <StatusBar style='light' />\n      <View>\n        <View style={styles.index_panel_header}>\n          <Text style={styles.index_panel_title}>\u5b9e\u65f6\u6570\u636e</Text>\n        </View>\n        <View style={styles.index_panel_content}>\n          {actual.map(({ title, num, unit }) => (\n            <View key={title} style={styles.sale_item}>\n              <View style={styles.sale_item_cell}>\n                <Text style={styles.sale_item_text}>{title}</Text>\n              </View>\n              <View style={[styles.sale_item_cell, styles.num]}>\n                <Text style={styles.sale_item_num}>{num}</Text>\n              </View>\n              <View style={[styles.sale_item_cell, styles.unit]}>\n                <Text style={styles.sale_item_text}>{unit}</Text>\n              </View>\n            </View>\n          ))}\n        </View>\n      </View>\n      {chartList.map(([title, data, callback]) => (\n        <View key={title}>\n          <View style={styles.index_panel_header}>\n            <Text style={styles.index_panel_title}>{title}</Text>\n          </View>\n          <View style={styles.index_panel_content}>\n            <SkiaChart option={data} onInit={callback} />\n          </View>\n        </View>\n      ))}\n    </ScrollView>\n  );\n};\n")),(0,r.kt)("p",null,"\u91cd\u65b0\u52a0\u8f7d bundle\uff0c\u770b\u770b\u6548\u679c\u56fe"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Android"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"\u56fe\u7247",src:n(6581).Z,width:"400",height:"888"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"\u56fe\u7247",src:n(9223).Z,width:"400",height:"868"}))))),(0,r.kt)("p",null,"\u6e32\u67d3\u51fa\u6765\u540e\uff0ciOS \u4e0a\u4ea4\u4e92\u5f88\u4e1d\u6ed1\uff0c\u5b89\u5353\u4e0a\u4ea4\u4e92\u65f6\u611f\u89c9\u5076\u5c14\u4f1a\u6709\u5361\u987f\uff08\u4e0d\u4f1a\u662f\u56e0\u4e3a\u6211\u624b\u673a\u592a\u5dee\u5427\u2026\uff09\u3002"),(0,r.kt)("p",null,"\u518d\u6362 Skia \u6a21\u5f0f\u770b\u770b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u56fe\u7247",src:n(5368).Z,width:"322",height:"696"})),(0,r.kt)("p",null,"emmm \u867d\u7136\u53ef\u4ee5\uff0c\u4f46\u662f\u597d\u50cf\u4e2d\u6587\u4e0d\u80fd\u6b63\u5e38\u663e\u793a\uff0c\u5b89\u5353\u4e0a\u4e2d\u6587\u90fd\u6ca1\u6709\u663e\u793a\uff0ciOS \u5219\u662f\u4e71\u7801\u3002\u770b\u4e86\u4e0b\u6587\u6863\uff0c\u76ee\u524d skia \u5728\u5b89\u5353\u7aef\u8fd8\u4e0d\u652f\u6301\u4e2d\u6587\uff0c\u5728 iOS \u7aef\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u5b57\u4f53\u4e3a 'PingFang SC'\u663e\u793a\u4e2d\u6587\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const option = {\n  title: {\n    text: '\u6211\u662f\u4e2d\u6587',\n    textStyle: {\n      fontFamily: 'PingFang SC', // \u6307\u5b9a\u5b57\u4f53\u7c7b\u578b\n    },\n  },\n};\n")),(0,r.kt)("p",null,"\u4f46\u662f\u6bcf\u4e2a\u663e\u793a\u4e2d\u6587\u7684\u5730\u65b9\u90fd\u8981\u8bbe\u7f6e\u5b57\u4f53\u2026\u2026\u90a3\u8fd8\u662f\u5148\u7528 svg \u5427\uff0c\u6211\u61d2\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u4f7f\u7528\u4e86\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u6211\u603b\u7ed3\u4e86\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5ea6\u4e0a\uff0c@wuba/react-native-echarts \u9664\u4e86 GL \u7cfb\u5217\u3001\u5730\u56fe\u7c7b\u56fe\u8868\u8fd8\u4e0d\u652f\u6301\u5916\uff0c\u5176\u4f59\u7c7b\u578b\u7684\u56fe\u8868\u90fd\u652f\u6301\uff0c\u5bf9\u4e8e\u65e5\u5e38\u4e1a\u52a1\u6765\u8bf4\u5df2\u7ecf\u975e\u5e38 enough \u4e86\u3002echarts \u5404\u79cd\u7c7b\u578b\u7684\u56fe\u8868\u5b9e\u73b0\uff0c\u90fd\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wuba/taro-playground"},"taro-playground"),"\u4e0a\u627e\u5230\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4ea4\u4e92\u4e0a\uff0ciOS \u5f88\u4e1d\u6ed1\uff0c\u5b89\u5353\u6709\u65f6\u4f1a\u51fa\u73b0\u6389\u5e27\u7684\u60c5\u51b5\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd\u4e0a\uff0c\u5b98\u65b9\u62a5\u544a\u663e\u793a\u4f18\u4e8e react-native-echarts-pro\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e2a\u4eba\u8bd5\u4e86\u4e0b\uff0c\u4e0d\u662f\u8d85\u5927\u6570\u636e\u91cf\u5c31\u4e0d\u4f1a\u6709\u4ec0\u4e48\u95ee\u9898\uff0c\u4f46\u662f\u6570\u636e\u91cf\u592a\u5927\u7684\u65f6\u5019\uff08\u6bd4\u5982\u753b\u5927\u6570\u636e\u91cf\u7684\u70ed\u529b\u56fe\uff09\uff0c\u6e32\u67d3\u901f\u5ea6\u660e\u663e\u4e0b\u964d\u4e86\u5f88\u591a\uff0c\u8fd9\u662f\u4e00\u4e2a\u7b49\u5f85\u5b98\u65b9\u53bb\u4f18\u5316\u7684\u70b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53e6\u5916\u9875\u9762\u5185\u56fe\u8868\u591a\u7684\u8bdd\uff0c\u771f\u673a\u8c03\u8bd5\u65f6\u52a0\u8f7d\u901f\u5ea6\u4f1a\u53d8\u6162\uff0c\u5efa\u8bae\u5148\u7528\u6a21\u62df\u5668\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u6587\u652f\u6301\uff0cSvg \u6a21\u5f0f\u652f\u6301\u4e2d\u6587\uff0c\u4f46 Skia \u6a21\u5f0f\u76ee\u524d\u8fd8\u4e0d\u53ef\u4ee5\u3002")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4ec5\u4ee3\u8868\u4e2a\u4eba\u89c2\u70b9\uff0c\u6709\u95ee\u9898\u6b22\u8fce\u4ea4\u6d41\u3002"))}u.isMDXComponent=!0},4588:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/create-expo-3e491a8c7755f9697ddfef5a2d7e736d.jpeg"},3915:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/dynamic-data-android-a3a87f304ce4b02b5f552ea83bbd15a5.gif"},5475:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/dynamic-data-ios-a48f027a0a497a7eef3ff6ba4c47c2f4.gif"},9223:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ecdata-android-5ead76e0684e019e33e9b780617f6e11.gif"},6581:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ecdata-ios-941b5a2e55c797502af1f3f9fddad871.gif"},6767:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/example-6d869e9b1647cc3ebb8f87dac4d444ae.png"},5013:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/expo-app-e5e5fc8d237f76a2a2b457f619024188.png"},8953:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/skia-android-81c23447be12009352f45a607e082328.jpg"},5368:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/skia-chinese-284dae33c30d6d1057aef3b39336f8a3.png"},6185:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/skia-ios-2f06aa82687b30a65848913f0e68cb83.png"},2559:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/warning-850be6006cf70a2e55d7dfb51c2936e0.jpg"}}]);