"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[492],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="\u5355\u72ec\u5bfc\u5165",c={unversionedId:"advanced-guides/import-individually",id:"advanced-guides/import-individually",title:"\u5355\u72ec\u5bfc\u5165",description:"\u5982\u679c\u4f60\u53ea\u9700\u8981\u4f7f\u7528 react-native-skia \u6e32\u67d3\u5668\uff0c\u4f60\u53ef\u4ee5\u5355\u72ec\u5bfc\u5165 SVGRenderer \u548c SkiaChart\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/advanced-guides/import-individually.md",sourceDirName:"advanced-guides",slug:"/advanced-guides/import-individually",permalink:"/react-native-echarts/zh-Hans/docs/advanced-guides/import-individually",draft:!1,editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/i18n/zh-Hans/docusaurus-plugin-content-docs/current/advanced-guides/import-individually.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u6298\u7ebf\u56fe",permalink:"/react-native-echarts/zh-Hans/docs/getting-started/write-a-simple-line-chart"},next:{title:"\u8d21\u732e\u8005",permalink:"/react-native-echarts/zh-Hans/docs/about/contributors"}},s={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5355\u72ec\u5bfc\u5165"},"\u5355\u72ec\u5bfc\u5165"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u9700\u8981\u4f7f\u7528 react-native-skia \u6e32\u67d3\u5668\uff0c\u4f60\u53ef\u4ee5\u5355\u72ec\u5bfc\u5165 SVGRenderer \u548c SkiaChart\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import SkiaChart, { SVGRenderer } from 'wrn-echarts/skiaChart';\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u9700\u8981\u4f7f\u7528 react-native-svg \u6e32\u67d3\u5668\uff0c\u4f60\u53ef\u4ee5\u5355\u72ec\u5bfc\u5165 SVGRenderer \u548c SvgChart\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import SvgChart, { SVGRenderer } from 'wrn-echarts/svgChart';\n")))}p.isMDXComponent=!0}}]);