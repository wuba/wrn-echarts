"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[2782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),m=r,v=h["".concat(o,".").concat(m)]||h[m]||u[m]||i;return a?n.createElement(v,c(c({ref:t},p),{},{components:a})):n.createElement(v,c({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[h]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8155:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={slug:"using-apache-echarts-in-react-native",title:"\u5728 React Native \u4e2d\u4f7f\u7528 Apache ECharts",authors:["zhiqing"],tags:["intro"]},c=void 0,s={permalink:"/react-native-echarts/zh-hant/blog/using-apache-echarts-in-react-native",editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/i18n/zh-hant/docusaurus-plugin-content-blog/2023-02-09-using-apache-echarts-in-react-native/index.md",source:"@site/i18n/zh-hant/docusaurus-plugin-content-blog/2023-02-09-using-apache-echarts-in-react-native/index.md",title:"\u5728 React Native \u4e2d\u4f7f\u7528 Apache ECharts",description:"\u6211\u5011\u70ba React Native APP \u958b\u767c\u4e86\u4e00\u500b\u958b\u6e90\u5716\u5f62\u5eab\uff0c\u5b83\u57fa\u65bc Apache ECharts \u4e26\u4f7f\u7528 RNSVG \u6216 RNSkia \u9032\u884c\u6e32\u67d3\uff0c\u5e7e\u4e4e\u8207\u5728 Web \u4e0a\u4f7f\u7528\u76f8\u540c\uff0c\u53ef\u4ee5\u6eff\u8db3\u5927\u591a\u6578\u7684\u5716\u5f62\u60c5\u6cc1\u3002\u8a72\u9805\u76ee\u7684\u539f\u59cb\u78bc\u53ef\u5728 https://github.com/wuba/react-native-echarts \u627e\u5230\u3002",date:"2023-02-09T00:00:00.000Z",formattedDate:"2023\u5e742\u67089\u65e5",tags:[{label:"intro",permalink:"/react-native-echarts/zh-hant/blog/tags/intro"}],readingTime:8.76,hasTruncateMarker:!0,authors:[{name:"Zhiqing Chen",title:"react-native-echarts \u7684\u7dad\u8b77\u8005",url:"https://github.com/zhiqingchen",imageURL:"https://github.com/zhiqingchen.png",key:"zhiqing"}],frontMatter:{slug:"using-apache-echarts-in-react-native",title:"\u5728 React Native \u4e2d\u4f7f\u7528 Apache ECharts",authors:["zhiqing"],tags:["intro"]},prevItem:{title:"\u5728 Expo \u4e2d\u4f7f\u7528 @wuba/react-native-echarts",permalink:"/react-native-echarts/zh-hant/blog/using-wuba-react-native-echarts"},nextItem:{title:"\u6b61\u8fce",permalink:"/react-native-echarts/zh-hant/blog/welcome"}},o={authorsImageUrls:[void 0]},l=[{value:"\u4ecb\u7d39",id:"\u4ecb\u7d39",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u8868\u73fe",id:"\u8868\u73fe",level:2},{value:"\u5be6\u65bd\u7d30\u7bc0",id:"\u5be6\u65bd\u7d30\u7bc0",level:2},{value:"\u8655\u7406\u89f8\u63a7\u4e8b\u4ef6",id:"\u8655\u7406\u89f8\u63a7\u4e8b\u4ef6",level:2},{value:"\u6709\u95dc\u66f4\u591a\u8cc7\u8a0a",id:"\u6709\u95dc\u66f4\u591a\u8cc7\u8a0a",level:2}],p={toc:l},h="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6211\u5011\u70ba React Native APP \u958b\u767c\u4e86\u4e00\u500b",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts"},"\u958b\u6e90\u5716\u5f62\u5eab"),"\uff0c\u5b83\u57fa\u65bc ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts"},"Apache ECharts")," \u4e26\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-svg/react-native-svg"},"RNSVG")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shopify/react-native-skia"},"RNSkia")," \u9032\u884c\u6e32\u67d3\uff0c\u5e7e\u4e4e\u8207\u5728 Web \u4e0a\u4f7f\u7528\u76f8\u540c\uff0c\u53ef\u4ee5\u6eff\u8db3\u5927\u591a\u6578\u7684\u5716\u5f62\u60c5\u6cc1\u3002\u8a72\u9805\u76ee\u7684\u539f\u59cb\u78bc\u53ef\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts"},"https://github.com/wuba/react-native-echarts")," \u627e\u5230\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4f8b\u5b50",src:a(1062).Z,width:"4160",height:"3120"})),(0,r.kt)("h2",{id:"\u4ecb\u7d39"},"\u4ecb\u7d39"),(0,r.kt)("p",null,"\u5728\u7e6a\u88fd\u5716\u8868\u6642\uff0c\u6211\u5011\u6700\u5e38\u4f7f\u7528\u7684\u5716\u8868\u5eab\u662f ECharts\u3002\u4f5c\u70ba\u5e02\u5834\u4e0a\u6700\u6210\u719f\u7684\u5716\u8868\u5eab\u4e4b\u4e00\uff0c\u4e3b\u8981\u7528\u65bc Web \u7aef\u4f7f\u7528\uff0c\u5728 React Native \u4e2d\u6c92\u6709\u6700\u4f73\u7684\u4f7f\u7528\u65b9\u5f0f\u3002\u9762\u5c0d\u9019\u7a2e\u60c5\u6cc1\uff0c\u6211\u5011\u7684\u89e3\u6c7a\u65b9\u6848\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"\u9078\u9805 1\uff1a\u4f5c\u70ba\u66ff\u4ee3\u65b9\u6848\uff0c\u4f7f\u7528\u5c08\u9580\u91dd\u5c0d React Native \u958b\u767c\u7684\u5716\u8868\u5eab\uff0c\u4f8b\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuxudong/react-native-charts-wrapper"},"react-native-charts-wrapper"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/victory/tree/main/packages/victory-native"},"victory-native"),"\u7b49\u3002\u9019\u4e9b\u5716\u8868\u5eab\u7684\u98a8\u683c\u548c\u4e92\u52d5\u8207 ECharts \u4e0d\u540c\uff0c\u4e14\u5716\u8868\u8c50\u5bcc\u5ea6\u4e0d\u5920\u3002\u7279\u5225\u662f\u5728\u591a\u5e73\u53f0\u9700\u6c42\u5834\u666f\u4e2d\u9700\u8981\u70ba React Native \u88fd\u5b9a\u55ae\u7368\u7684 UI \u4e92\u52d5\u8a2d\u8a08\u3002"),(0,r.kt)("p",null,"\u9078\u9805 2\uff1a\u901a\u904e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview"},"react-native-webview")," \u6e32\u67d3\u5716\u8868\u3002\u6b64\u89e3\u6c7a\u65b9\u6848\u4f7f\u7528 injectedJavaScript \u9032\u884c\u521d\u59cb\u5316\u548c postMessage \u9032\u884c\u4e8b\u4ef6\u97ff\u61c9\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u958b\u6e90\u5eab\u5eab\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/supervons/react-native-echarts-pro"},"react-native-echarts-pro"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/somonus/react-native-echarts"},"native-echarts")," \u7b49\u3002\u7576\u9801\u9762\u4e0a\u5b58\u5728\u591a\u500b\u6216\u8005\u592a\u591a\u5143\u7d20\u6642\u6703\u9047\u5230\u6027\u80fd bottleneck \u554f\u984c\uff0c\u4f8b\u5982 Android \u4e0a\u5927\u6578\u64da\u91cf\u5340\u57df\u5716\u548c\u55ae\u8ef8\u6563\u9ede\u5716\u51fa\u73fe\u767d\u5c4f\u73fe\u8c61\uff0c\u5728\u6e32\u67d3\u671f\u9593\u4e5f\u6703\u660e\u986f\u51fa\u73fe\u5ef6\u9072\u548c\u5e40\u7387\u4e0b\u964d\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u5011\u8003\u616e\u958b\u767c\u4e00\u500b\u65b0\u7684\u5716\u8868\u5eab\uff0c\u5728\u5176\u4e2d\u6574\u5408 ECharts \u7684\u529f\u80fd\u4ee5\u63d0\u9ad8 React Native \u61c9\u7528\u7a0b\u5f0f\u7684\u53ef\u7528\u6027\u548c\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u7531\u65bc\u6211\u5011\u4e0d\u60f3\u5f9e\u982d\u958b\u59cb\u64b0\u5beb\u4e00\u500b\u8996\u89ba\u5316\u51fd\u5f0f\u5eab\uff0c\u8b93\u6211\u5011\u770b\u770b\u76ee\u524d\u5df2\u7d93\u91dd\u5c0d React Native \u8a2d\u8a08\u597d\u4e86\u54ea\u4e9b\u8996\u89ba\u5316\u51fd\u5f0f\u5eab\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"react-native-svg\uff1a\u63d0\u4f9b iOS\u3001Android\u3001macOS\u3001Windows \u7684 SVG \u652f\u63f4\u4ee5\u53ca Web \u7684\u76f8\u5bb9\u5c64\u652f\u63f4\u3002"),(0,r.kt)("li",{parentName:"ol"},"react-native-skia\uff1aReact Native Skia \u5c07 Skia \u5716\u5f62\u51fd\u5f0f\u5eab\u5f15\u5165\u5230 React Native \u4e2d\u3002Skia \u662f Google Chrome \u548c \u548c Chrome OS\u3001Android\u3001Flutter\u3001Mozilla Firefox \u548c Firefox OS \u7b49\u773e\u591a\u7522\u54c1\u6240\u63a1\u7528\u7684\u56fe\u5f62\u5f15\u64ce\uff0c\u5e76\u63d0\u4f9b\u652f\u6301 SVG \u683c\u5f0f\u5f71\u50cf\u6e32\u67d3\u529f\u80fd\u4e4b ",(0,r.kt)("a",{parentName:"li",href:"https://shopify.github.io/react-native-skia/docs/images-svg"},"ImageSVG")," \u5143\u4ef6\u3002")),(0,r.kt)("p",null,"\u6211\u77e5\u9053 ECharts \u652f\u6301 SVG \u6e32\u67d3, \u56e0\u6b64\u5982\u679c\u6211\u4eec\u5728\u6e32\u67d3\u56fe\u6807\u4e4b\u524d\u83b7\u53d6 SVG \u6570\u636e\u5e76\u5c06\u5176\u63d0\u4f9b\u7ed9 react-native-svg \u6216 react-native-skia \u8fdb\u884c\u6e32\u67d3\uff0c\u5219\u53ef\u4ee5\u5b9e\u73b0\u6211\u4eec\u76ee\u6807."),(0,r.kt)("p",null,"\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u8bd5\u9a8c\u540e, \u6211\u4eec\u5f00\u53d1\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts"},"@wuba/react-native-echart"),"\uff0c\u5177\u6709\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd25 \u4e0e Apache ECharts \u76f8\u540c"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfa8 \u8c50\u5bcc\u56fe\u793a\u6db5\u84cb\u5e7e\u4e4e\u6240\u6709\u4f7f\u7528\u60c5\u5883"),(0,r.kt)("li",{parentName:"ul"},"\u2728 \u53ef\u9009\u6e32\u67d3\u540d\u5e93, Skia \u6216 SVG"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude80 \u80fd\u5920\u8207 web \u5171\u4eab\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf1 \u652f\u6301\u7f29\u653e\u624b\u52bf")),(0,r.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728\u5b9e\u8df5\u4e2d\uff0c@wuba/react-native-echarts \u7684\u6574\u4f53\u6d41\u7a0b\u4e0e ECharts \u7c7b\u4f3c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"yarn add @wuba/react-native-echarts"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5b89\u88c5 react-native-svg \u6216 @shopify/react-native-skia"),(0,r.kt)("li",{parentName:"ol"},"\u4ece @wuba/react-native-echarts \u5f15\u5165\u76f8\u5173\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"\u5c06 ECharts \u7684 SVGRenderer \u66ff\u6362\u4e3a @wuba/react-native-echarts \u7684 SVGRenderer"),(0,r.kt)("li",{parentName:"ol"},"\u7f16\u5199\u56fe\u8868\u7684\u9009\u9879\u914d\u7f6e\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 SkiaChart / SvgChart \u7ec4\u4ef6")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// import { SkiaChart, SVGRenderer } from '@wuba/react-native-echarts';\nimport SkiaChart, { SVGRenderer } from '@wuba/react-native-echarts/skiaChart';\nimport * as echarts from 'echarts/core';\nimport { useRef, useEffect } from 'react';\nimport { LineChart } from 'echarts/charts';\n\necharts.use([ SVGRenderer, LineChart ])\n\nexport default function App() {\n  const skiaRef = useRef<any>(null);\n  useEffect(() => {\n    const option = {\n      xAxis: {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n      },\n      yAxis: {\n        type: 'value'\n      },\n      series: [\n        {\n          data: [150, 230, 224, 218, 135, 147, 260],\n          type: 'line'\n        }\n      ]\n    }\n    let chart: any;\n    if (skiaRef.current) {\n      chart = echarts.init(skiaRef.current, 'light', {\n        renderer: 'svg',\n        width: 250,\n        height: 300,\n      });\n      chart.setOption(option);\n    }\n    return () => chart?.dispose();\n  }, []);\n\n  return <SkiaChart ref={skiaRef} />;\n}\n")),(0,r.kt)("p",null,"\u9019\u662f\u5b83\u7684\u87a2\u5e55\u622a\u5716\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u87a2\u5e55\u622a\u5716",src:a(2779).Z,width:"584",height:"395"})),(0,r.kt)("p",null,"\u4e0d\u662f\u7279\u5225\u5bb9\u6613\u55ce\uff1f\u66f4\u591a\u7684\u5716\u8868\u914d\u7f6e\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/examples/en/index.html"},"echarts \u7db2\u7ad9"),"\u4e0a\u67e5\u770b\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u652f\u63f4\u76ee\u524d\u7531 ECharts \u652f\u63f4\u7684\u5927\u90e8\u5206\u5716\u8868\u3002\u6211\u5c07\u5c55\u793a\u4e00\u4e9b\u4e0b\u9762\u7684\u5716\u8868\uff0c\u66f4\u591a\u7bc4\u4f8b\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/taro-playground"},"taro-playground"),"\u9805\u76ee\u4e2d\u770b\u5230\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example",src:a(1868).Z,width:"645",height:"527"}),"\n",(0,r.kt)("img",{alt:"Animate1",src:a(8456).Z,width:"400",height:"287"}),"\n",(0,r.kt)("img",{alt:"Animate2",src:a(5582).Z,width:"400",height:"292"}),"\n",(0,r.kt)("img",{alt:"Animate3",src:a(2965).Z,width:"400",height:"284"})),(0,r.kt)("h2",{id:"\u8868\u73fe"},"\u8868\u73fe"),(0,r.kt)("p",null,"\u5982\u524d\u6240\u8ff0\uff0c\u5728 React Native \u4e2d\u4f7f\u7528 ECharts \u7684\u4e3b\u6d41\u89e3\u6c7a\u65b9\u6848\u662f\u900f\u904e WebView \u5be6\u73fe\u5b83\u3002 \u5728\u8a31\u591a\u57fa\u65bc WebView \u7684\u5be6\u73fe\u4e2d\uff0creact-native-echarts-pro \u6709\u66f4\u591a\u7684\u4f7f\u7528\u8005\uff0c\u56e0\u6b64\u6211\u5011\u9078\u64c7\u4e86 react-native-echarts-pro \u4f5c\u70ba\u6bd4\u8f03\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e0d\u540c\u5be6\u73fe\u7684\u521d\u59cb\u5316\u904e\u7a0b\u7684\u87a2\u5e55\u622a\u5716\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Performance",src:a(4427).Z,width:"400",height:"776"})),(0,r.kt)("p",null,"\u7d93\u904e\u4e0d\u5c11\u6e2c\u8a66\u7528\u4f8b\uff0c\u6211\u5011\u767c\u73fe @wuba/react-native-echarts \u5728\u5e38\u898f\u4f7f\u7528\u5834\u666f\u4e2d\u5177\u6709\u6548\u80fd\u512a\u52e2\uff0c\u4f46\u5728\u8cc7\u6599\u91cf\u5927\u7684\u5834\u666f\u4e2d\uff0c\u7531\u65bc\u5ba3\u544a\u6027 UI \u6e32\u67d3\u65b9\u6cd5\uff0c\u5c07\u51fa\u73fe\u660e\u986f\u7684\u6eef\u5f8c\uff0c\u6211\u5011\u5c07\u7e7c\u7e8c\u63a2\u7d22\u4ee5\u63d0\u9ad8\u6548\u80fd\u3002"),(0,r.kt)("h2",{id:"\u5be6\u65bd\u7d30\u7bc0"},"\u5be6\u65bd\u7d30\u7bc0"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Principle",src:a(5386).Z,width:"1146",height:"640"})),(0,r.kt)("p",null,"\u4e0a\u9762\u662f\u8a72\u51fd\u5f0f\u5eab\u7684\u6d41\u7a0b\u5716\uff0c\u4ee5 react-native-svg \u70ba\u4f8b\uff0c\u6838\u5fc3\u5de5\u4f5c\u6d41\u7a0b\u70ba\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53d6\u4ee3 ECharts \u7684 SVGRenderer\uff0c\u5c07\u5df2\u8a3b\u518a\u7684 SVGPainter \u66ff\u63db\u70ba\u81ea\u8a02\u7684 SVGPainter\u3002"),(0,r.kt)("li",{parentName:"ol"},"CustomSVGPainter \u7e7c\u627f\u81ea SVGPainter\uff0c\u91cd\u5beb\u4e86\u5efa\u69cb\u5b50\u548c\u90e8\u5206\u5237\u65b0\u51fd\u6578\uff0c\u5728\u5716\u8868\u8cc7\u6599\u521d\u59cb\u5316\u6216\u66f4\u65b0\u6642\u547c\u53eb SVGComponent \u4e0a\u8a3b\u518a\u7684 patch \u51fd\u6578\uff0c\u4e26\u5c07\u8a08\u7b97\u51fa\u7684\u65b0 SVG \u8cc7\u6599\u50b3\u905e\u7d66\u5b83\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u7fa9 SVGComponent\uff0c\u5b83\u7ba1\u7406\u76ee\u524d\u5716\u8868\u5be6\u4f8b\uff0c\u5176\u4e0a\u6709\u4e00\u500b\u6838\u5fc3\u88dc\u4e01\u51fd\u6578\uff0c\u7528\u65bc\u63a5\u6536\u5373\u6642 SVG \u6578\u64da\uff0c\u7136\u5f8c\u547c\u53eb SVGElement \u51fd\u6578\u3002"),(0,r.kt)("li",{parentName:"ol"},"SVGElement \u51fd\u6578\u8fed\u4ee3\u6240\u6709 SVG \u7bc0\u9ede\u4e26\u5c07\u5176\u8f49\u63db\u70ba react-native-svg \u63d0\u4f9b\u7684\u5c0d\u61c9 SVG \u5143\u7d20\u4ee5\u9032\u884c\u6700\u7d42\u7684\u6e32\u67d3\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,"\u4f7f\u7528 react-native-skia \u6642\uff0c\u5b58\u5728\u4e00\u4e9b\u5dee\u7570\u3002\u5b9a\u7fa9\u7684 SkiaComponent \u5143\u4ef6\u4e0a\u6709\u4e00\u500b\u6838\u5fc3\u65b9\u6cd5 patchString\u3002 patchString \u63a5\u6536\u8b8a\u5316\u7684 SVG \u6578\u64da\uff0c\u5c07\u5176\u8f49\u63db\u70ba SVG \u5b57\u4e32\uff0c\u4e26\u50b3\u905e\u7d66 react-native-skia \u7684 ImageSVG \u5143\u4ef6\u9032\u884c\u6e32\u67d3\u3002"),(0,r.kt)("h2",{id:"\u8655\u7406\u89f8\u63a7\u4e8b\u4ef6"},"\u8655\u7406\u89f8\u63a7\u4e8b\u4ef6"),(0,r.kt)("p",null,"ECharts\u4e8b\u4ef6\u662f\u6ed1\u9f20\u4e8b\u4ef6\uff0c\u5982 click\u3001dblclick\u3001mousedown\u3001mousemove \u7b49\u3002 \u6ed1\u9f20\u4e8b\u4ef6\u7528\u65bc\u89f8\u767c\u5716\u8868\u5143\u7d20\u7684\u986f\u793a\u6216\u52d5\u756b\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u4f7f\u7528 React Native \u7684 PanResponder \u4f86\u6355\u7372\u4e8b\u4ef6\uff0c\u7136\u5f8c\u5c07\u79fb\u52d5 TouchEvent \u6a21\u64ec\u70ba\u6ed1\u9f20\u4e8b\u4ef6\uff0c\u4e26\u5c07\u5176\u50b3\u9001\u5230 ECharts init \u65b9\u6cd5\u751f\u6210\u7684\u5716\u8868\u4f8b\u9805\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u8ddf\u96a8\u6ed1\u9f20\u5728\u5716\u8868\u4e0a\u986f\u793a\u5716\u4f8b\u7684\u52d5\u4f5c\u662f\u79fb\u52d5\u7aef\u7684 TouchStart + TouchMove\uff0c\u9019\u8f49\u5316\u70ba\u6ed1\u9f20\u5411\u4e0b+\u6ed1\u9f20\u79fb\u52d5\u7684\u6ed1\u9f20\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u500b\u4f8b\u5b50\u662f\u5716\u8868\u7684\u7e2e\u653e\uff0c\u79fb\u52d5\u7aef\u662f\u96d9\u6307\u7e2e\u653e\uff0c\u8f49\u63db\u70ba\u6ed1\u9f20\u6ed1\u9f20\u8f2a\u4e8b\u4ef6\uff0c\u76f8\u61c9\u7684\u6ed1\u9f20\u8f2a\u6efe\u52d5\u8ddd\u96e2\u7531\u5169\u6307\u8ddd\u96e2\u8b8a\u5316\u8a08\u7b97\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u95dc\u9375\u7a0b\u5f0f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c07 TouchEvent \u8f49\u63db\u70ba MouseEvent")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"PanResponder.create({\n  onPanResponderGrant: ({ nativeEvent }) => {\n    // Action start, translated into mouse down and move events\n    dispatchEvent(\n      zrenderId,\n      ['mousedown', 'mousemove'],\n      nativeEvent,\n      'start'\n    );\n  },\n  onPanResponderMove: ({ nativeEvent }) => {\n    // Handling finger movement operations\n    const length = nativeEvent.touches.length;\n    if (length === 1) {\n      // single finger\n    } else if (length === 2) {\n      // Handling two-finger movement operations here\n      if (!zooming) {\n        // ...\n      } else {\n        // Here the event is converted to a scroll wheel\n        const { initialX, initialY, prevDistance } = pan.current;\n        const delta = distance - prevDistance;\n        pan.current.prevDistance = distance;\n        dispatchEvent(zrenderId, ['mousewheel'], nativeEvent, undefined, {\n          zrX: initialX,\n          zrY: initialY,\n          zrDelta: delta / 120,\n        });\n      }\n    }\n  },\n  onPanResponderRelease: ({ nativeEvent }) => {\n    // The action is over, where it is transformed into a mouse click release operation\n  },\n})\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5c07 MouseEvent \u61c9\u7528\u65bc ECharts \u5716\u8868\u4f8b\u9805")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function dispatchEvent(\n  zrenderId: number,\n  types: HandlerName[],\n  nativeEvent: NativeTouchEvent,\n  stage: 'start' | 'end' | 'change' | undefined,\n  props: any = {\n    zrX: nativeEvent.locationX,\n    zrY: nativeEvent.locationY,\n  }\n) {\n  if (zrenderId) {\n    var handler = getInstance(zrenderId).handler;\n    types.forEach(function (type) {\n      handler.dispatch(type, {\n        preventDefault: noop,\n        stopImmediatePropagation: noop,\n        stopPropagation: noop,\n        ...props,\n      });\n      stage && handler.processGesture(wrapTouch(nativeEvent), stage);\n    });\n  }\n}\n")),(0,r.kt)("h2",{id:"\u6709\u95dc\u66f4\u591a\u8cc7\u8a0a"},"\u6709\u95dc\u66f4\u591a\u8cc7\u8a0a"),(0,r.kt)("p",null,"\u524d\u5f80 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts"},"https://github.com/wuba/react-native-echarts")," \u67e5\u770b\u6e90\u4ee3\u78bc\uff0c\u5982\u679c\u4f60\u559c\u6b61\u7684\u8a71\u7d66\u6211\u5011\u4e00\u9846\u661f\u3002\u5982\u679c\u9047\u5230\u4efb\u4f55\u554f\u984c\uff0c\u53ef\u4ee5\u63d0\u4ea4",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts/issues"},"\u554f\u984c"),"\u3002"),(0,r.kt)("p",null,"\u672c\u5e16\u4e2d\u7684\u793a\u4f8b\u4ee3\u78bc\u4f4d\u65bc ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/taro-playground"},"https://github.com/wuba/taro-playground")," \u9805\u76ee\u4e2d\uff0c\u8a72\u9805\u76ee\u4e5f\u662f\u958b\u6e90\u7684\uff0c\u6709\u8208\u8da3\u7684\u4eba\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5f9e\u61c9\u7528\u5546\u5e97\u6216",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/taro-playground/releases"},"\u767c\u5e03\u9801\u9762"),"\u5b89\u88dd Taro Playground \u61c9\u7528\u7a0b\u5f0f\u7684\u65b0\u7248\u672c\u4f86\u9ad4\u9a57\u5b83\u3002"))}u.isMDXComponent=!0},8456:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/animate1-dbd822744dbd0fe1f6889daa7a980b0e.gif"},5582:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/animate2-f3d76bae8015d20cf42452fc509cdec0.gif"},2965:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/animate3-f7aa597993b2b557ba16e2551d5efe64.gif"},1868:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example-425748ac187589df63f342b881e6f028.jpg"},1062:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/examples-3176fb6a357e32d589e7b3eb13b21ace.jpg"},4427:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/performance-e78c5567d2d303b78c2e7b7ac9d3d9f4.gif"},5386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/principle-40b62cc09f12dee58ca5dffe28733a63.webp"},2779:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-00bb1a17b9d5bf43e26b384f6deff8c0.jpg"}}]);