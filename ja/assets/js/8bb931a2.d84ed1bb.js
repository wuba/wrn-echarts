"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[87],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6776:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294);const a=["@wuba/react-native-echarts@1.2.5-all.0","react-native-svg","react-native-reanimated","@shopify/react-native-skia","react-native-gesture-handler"];function o(e){const n=e.name?decodeURIComponent(e.name):"Example",t=e.description?decodeURIComponent(e.description):"Example usage",o=`App.${e.ext?decodeURIComponent(e.ext):"tsx"}`,s=encodeURIComponent(JSON.stringify({[o]:{type:"CODE",contents:e.children}})),i=e.dependencies||a.join(","),c=e.platform||"web",l=e.supportedPlatforms||"ios,android,web",p=e.theme||"light",u=e.preview||"true",d=e.loading||"lazy";return r.createElement("div",{className:"snack-player","data-snack-name":n,"data-snack-description":t,"data-snack-files":s,"data-snack-dependencies":i,"data-snack-platform":c,"data-snack-supported-platforms":l,"data-snack-theme":p,"data-snack-preview":u,"data-snack-loading":d})}},5269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905)),o=t(6776);const s="// Original example: https://echarts.apache.org/examples/en/editor.html?c=area-simple\n// The following code is modified from\n// https://github.com/apache/echarts-examples/blob/gh-pages/public/examples/ts/area-simple.ts\n// under Apache License 2.0.\n\nimport { useRef, useEffect } from 'react';\nimport { StyleSheet, View, Dimensions } from 'react-native';\nimport { SVGRenderer, SkiaChart, echarts } from '@wuba/react-native-echarts';\nimport { GestureHandlerRootView } from 'react-native-gesture-handler';\n\necharts.use([SVGRenderer]);\n\nconst E_HEIGHT = 400;\nconst E_WIDTH = Dimensions.get('window').width;\n\nlet base = +new Date(1968, 9, 3);\nlet oneDay = 24 * 3600 * 1000;\nlet date = [];\nlet data = [Math.random() * 300];\nfor (let i = 1; i < 20000; i++) {\n  var now = new Date((base += oneDay));\n  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));\n  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));\n}\n\nconst option = {\n  tooltip: {\n    trigger: 'axis',\n    position: function (pt) {\n      return [pt[0], '10%'];\n    }\n  },\n  title: {\n    left: 'center',\n    text: 'Large Area Chart'\n  },\n  toolbox: {\n    feature: {\n      dataZoom: {\n        yAxisIndex: 'none'\n      },\n      restore: {},\n      saveAsImage: {}\n    }\n  },\n  xAxis: {\n    type: 'category',\n    boundaryGap: false,\n    data: date\n  },\n  yAxis: {\n    type: 'value',\n    boundaryGap: [0, '100%']\n  },\n  dataZoom: [\n    {\n      type: 'inside',\n      start: 0,\n      end: 10\n    },\n    {\n      start: 0,\n      end: 10\n    }\n  ],\n  series: [\n    {\n      name: 'Fake Data',\n      type: 'line',\n      symbol: 'none',\n      sampling: 'lttb',\n      itemStyle: {\n        color: 'rgb(255, 70, 131)'\n      },\n      areaStyle: {\n        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [\n          {\n            offset: 0,\n            color: 'rgb(255, 158, 68)'\n          },\n          {\n            offset: 1,\n            color: 'rgb(255, 70, 131)'\n          }\n        ])\n      },\n      data: data\n    }\n  ]\n};\n\nexport default function App() {\n  const skiaRef = useRef<any>(null);\n  useEffect(() => {\n    let chart: any;\n    if (skiaRef.current) {\n      chart = echarts.init(skiaRef.current, 'light', {\n        renderer: 'svg',\n        width: E_WIDTH,\n        height: E_HEIGHT,\n      });\n      chart.setOption(option);\n    }\n    return () => chart?.dispose();\n  }, []);\n\n  return (\n    <GestureHandlerRootView style={{ flex: 1 }}>\n      <View style={styles.container}>\n        <SkiaChart ref={skiaRef} useRNGH />\n      </View>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});",i={sidebar_position:3},c="\u30ea\u30a2\u30af\u30c8\u30cd\u30a4\u30c6\u30a3\u30d6\u30b8\u30a7\u30b9\u30c1\u30e3\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u3092\u4f7f\u7528\u3057\u305f\u5927\u9762\u7a4d\u30c1\u30e3\u30fc\u30c8",l={unversionedId:"expo-snacks/large-area-chart-use-rngh",id:"expo-snacks/large-area-chart-use-rngh",title:"\u30ea\u30a2\u30af\u30c8\u30cd\u30a4\u30c6\u30a3\u30d6\u30b8\u30a7\u30b9\u30c1\u30e3\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u3092\u4f7f\u7528\u3057\u305f\u5927\u9762\u7a4d\u30c1\u30e3\u30fc\u30c8",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/expo-snacks/large-area-chart-use-rngh.md",sourceDirName:"expo-snacks",slug:"/expo-snacks/large-area-chart-use-rngh",permalink:"/react-native-echarts/ja/docs/expo-snacks/large-area-chart-use-rngh",draft:!1,editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/i18n/ja/docusaurus-plugin-content-docs/current/expo-snacks/large-area-chart-use-rngh.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u30b7\u30f3\u30d7\u30eb\u306a\u6298\u308c\u7dda\u30b0\u30e9\u30d5",permalink:"/react-native-echarts/ja/docs/expo-snacks/simple-line-chart"},next:{title:"React Native Gesture Handler\u3092\u4f7f\u7528\u3057\u305f\u30ab\u30b9\u30bf\u30e0\u30b8\u30a7\u30b9\u30c1\u30e3\u30fc",permalink:"/react-native-echarts/ja/docs/expo-snacks/custom-gesture-use-rngh"}},p={},u=[],d={toc:u},m="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u30ea\u30a2\u30af\u30c8\u30cd\u30a4\u30c6\u30a3\u30d6\u30b8\u30a7\u30b9\u30c1\u30e3\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u3092\u4f7f\u7528\u3057\u305f\u5927\u9762\u7a4d\u30c1\u30e3\u30fc\u30c8"},"\u30ea\u30a2\u30af\u30c8\u30cd\u30a4\u30c6\u30a3\u30d6\u30b8\u30a7\u30b9\u30c1\u30e3\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u3092\u4f7f\u7528\u3057\u305f\u5927\u9762\u7a4d\u30c1\u30e3\u30fc\u30c8"),(0,a.kt)(o.Z,{name:"\u5927\u9762\u7a4d\u30c1\u30e3\u30fc\u30c8",mdxType:"SnackPlayer"},s))}f.isMDXComponent=!0}}]);