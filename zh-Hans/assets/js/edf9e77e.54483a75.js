"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[3451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(s,".").concat(b)]||p[b]||h[b]||c;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const c={slug:"using-wuba-react-native-echarts",title:"Expo\u4e2d\u4f7f\u7528@wuba/react-native-echarts",authors:["iambool"],tags:["expo"]},o=void 0,i={permalink:"/react-native-echarts/zh-Hans/blog/using-wuba-react-native-echarts",editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/i18n/zh-Hans/docusaurus-plugin-content-blog/2023-03-10-using-wuba-react-native-echarts/index.md",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2023-03-10-using-wuba-react-native-echarts/index.md",title:"Expo\u4e2d\u4f7f\u7528@wuba/react-native-echarts",description:"\u524d\u8a00",date:"2023-03-10T00:00:00.000Z",formattedDate:"2023\u5e743\u670810\u65e5",tags:[{label:"expo",permalink:"/react-native-echarts/zh-Hans/blog/tags/expo"}],readingTime:11.51,hasTruncateMarker:!0,authors:[{name:"iambool",title:"react-native-echarts \u7684\u7ef4\u62a4\u8005",url:"https://github.com/iambool",imageURL:"https://github.com/iambool.png",key:"iambool"}],frontMatter:{slug:"using-wuba-react-native-echarts",title:"Expo\u4e2d\u4f7f\u7528@wuba/react-native-echarts",authors:["iambool"],tags:["expo"]},prevItem:{title:"React Native Echarts \u5b98\u65b9\u7f51\u7ad9\u6b63\u5f0f\u4e0a\u7ebf\uff01",permalink:"/react-native-echarts/zh-Hans/blog/the-official-website-has-launched"},nextItem:{title:"\u5728 React Native \u4e2d\u4f7f\u7528 Apache ECharts",permalink:"/react-native-echarts/zh-Hans/blog/using-apache-echarts-in-react-native"}},s={authorsImageUrls:[void 0]},l=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...c}=e;return(0,n.kt)(p,(0,a.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,n.kt)("p",null,"\u5e73\u65f6\u5199\u56fe\u8868\u76f8\u5173\u9700\u6c42\uff0c\u7528\u5f97\u6700\u591a\u7684\u56fe\u8868\u5e93\u5c31\u662f",(0,n.kt)("strong",{parentName:"p"},"echarts"),"\u3002echarts \u5728 web \u7aef\u7684\u8868\u73b0\u5df2\u7ecf\u76f8\u5f53\u6210\u719f\uff0c\u5b98\u65b9\u5bf9\u5c0f\u7a0b\u5e8f\u7aef\u4e5f\u63d0\u4f9b\u4e86\u89e3\u51b3\u65b9\u6848\uff0c\u800c\u5728 RN \u65b9\u9762\u5374\u6ca1\u6709\u76f8\u5e94\u652f\u6301\u3002\u5e02\u9762\u4e0a\u641c\u5230\u7684\uff0c\u5927\u591a\u672c\u8d28\u8fd8\u662f\u57fa\u4e8e webview \u5b9e\u73b0\uff0c\u800c\u6211\u66f4\u503e\u5411\u4e8e\u57fa\u4e8e RN \u7684\u65b9\u6848\uff0c\u6bd5\u7adf\u539f\u751f\u7684\u4f53\u9a8c\u4f1a\u6bd4 Web \u7684\u66f4\u597d\u4e00\u4e9b\u3002"),(0,n.kt)("p",null,"\u7ecf\u8fc7\u4e00\u756a\u5bfb\u627e\u53d1\u73b0 ",(0,n.kt)("a",{parentName:"p",href:"https://wuba.github.io/react-native-echarts/"},(0,n.kt)("strong",{parentName:"a"},"@wuba/react-native-echarts"))," \u6ee1\u8db3\u9700\u6c42\uff0c\u4e8e\u662f\u4e0a\u624b\u8bd5\u4e86\u4e0b\uff0c\u6548\u679c\u8fd8\u4e0d\u9519 ~ \u5bf9\u5b9e\u73b0\u539f\u7406\u611f\u5174\u8da3\u7684\u53ef\u4ee5\u770b",(0,n.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7199529508112711738"},"\u8fd9\u91cc"),"\n",(0,n.kt)("img",{src:r(6767).Z,width:"1716",height:"1946"})))}h.isMDXComponent=!0},6767:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/example-6d869e9b1647cc3ebb8f87dac4d444ae.png"}}]);