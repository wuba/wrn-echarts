"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[485],{832:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"using-apache-echarts-in-react-native","metadata":{"permalink":"/react-native-echarts/blog/using-apache-echarts-in-react-native","editUrl":"https://github.com/wuba/react-native-echarts/tree/docs/blog/2023-02-09-using-apache-echarts-in-react-native/index.md","source":"@site/blog/2023-02-09-using-apache-echarts-in-react-native/index.md","title":"Using Apache ECharts in React Native","description":"We have developed an open source graphics library for react native APP, which is based on Apache ECharts and uses RNSVG or RNSkia for rendering in a way that is almost identical to using it in the web, and can satisfy most graphics situations. The project source code is available at https://github.com/wuba/react-native-echarts.","date":"2023-02-09T00:00:00.000Z","formattedDate":"February 9, 2023","tags":[{"label":"intro","permalink":"/react-native-echarts/blog/tags/intro"}],"readingTime":6.785,"hasTruncateMarker":false,"authors":[{"name":"Zhiqing Chen","title":"Maintainer of wrn-echarts","url":"https://github.com/zhiqingchen","imageURL":"https://github.com/zhiqingchen.png","key":"zhiqing"}],"frontMatter":{"slug":"using-apache-echarts-in-react-native","title":"Using Apache ECharts in React Native","authors":["zhiqing"],"tags":["intro"]},"nextItem":{"title":"Welcome","permalink":"/react-native-echarts/blog/welcome"}},"content":"We have developed an [open source graphics library](https://github.com/wuba/react-native-echarts) for react native APP, which is based on [Apache ECharts](https://github.com/apache/echarts) and uses [RNSVG](https://github.com/react-native-svg/react-native-svg) or [RNSkia](https://github.com/shopify/react-native-skia) for rendering in a way that is almost identical to using it in the web, and can satisfy most graphics situations. The project source code is available at https://github.com/wuba/react-native-echarts.\\n\\n![Examples](./examples.jpg)\\n\\n## Introduction\\n\\nWhen drawing charts, the chart library we use most frequently is ECharts. As one of the most mature chart libraries on the market, mainly for web-side use, there is no best way to use it in React Native, in the face of this situation, our solutions are:\\n\\nOption 1, use a chart libraries developed specifically for React Native as an alternative, such as [react-native-charts-wrapper](https://github.com/wuxudong/react-native-charts-wrapper), [victory-native](https://github.com/FormidableLabs/victory/tree/main/packages/victory-native), etc. The style and interaction of these chart libraries are different from ECahrts, and the richness of charts is not enough. Especially in the scenario of multi-platform requirements, a separate UI interaction design is needed for React Native.\\n\\nOption 2, charts are rendered by [react-native-webview](https://github.com/react-native-webview/react-native-webview), This solution uses injectedJavaScript for initialization and postMessage for event response, you can directly use open source libraries such as [react-native-echarts-pro](https://github.com/supervons/react-native-echarts-pro), [native-echarts](https://github.com/somonus/react-native-echarts), etc. When there are multiple charts or too many chart elements on the page, it will encounter performance bottlenecks, such as white screen phenomenon for large data volume area charts and single-axis scatter charts on Android, and there will be more obvious lag and frame drop during rendering.\\n\\nTherefore, we consider developing a new chart library that can integrate the capabilities of ECharts into React Native applications for better usability and stronger performance.\\n\\nSince we don\u2019t want to write a graphics library from scratch, let\u2019s look at what graphics libraries we currently have designed for React Native:\\n\\n1. react-native-svg: provides SVG support to React Native on iOS, Android, macOS, Windows, and a compatibility layer for the web.\\n2. react-native-skia: React Native Skia brings the Skia Graphics Library to React Native. Skia serves as the graphics engine for Google Chrome and Chrome OS, Android, Flutter, Mozilla Firefox and Firefox OS, and many other products. It also provides an [ImageSVG](https://shopify.github.io/react-native-skia/docs/images-svg) component that supports rendering of SVG formatted images.\\n\\nWe know that ECharts supports SVG rendering, so if we get the SVG data before the chart is rendered and provide it to react-native-svg or react-native-skia for rendering, we will be able to achieve our goal.\\n\\nAfter a period of experimentation, we have developed [wrn-echart](https://github.com/wuba/react-native-echarts) with the following features\uff1a\\n\\n- \ud83d\udd25 The same way as Apache ECharts\\n- \ud83c\udfa8 Rich charts, covering almost all usage scenarios\\n- \u2728 Optional rendering library, Skia or SVG\\n- \ud83d\ude80 Able to reuse code with web\\n- \ud83d\udcf1 Support for zoom gestures\\n\\n## How to use\\n\\nIn practice, the overall process for wrn-echarts is similar to ECharts:\\n\\n1. yarn add wrn-echarts\\n2. Choose to install react-native-svg or @shopify/react-native-skia\\n3. Introduce the relevant components from wrn-echarts\\n4. Replace the SVGRenderer of ECharts with the SVGRenderer of wrn-echarts\\n5. Write the option configuration information for the chart\\n6. Use SkiaChart / SvgChart component\\n\\nHere is the sample code\uff1a\\n\\n```ts\\n// import { SkiaChart, SVGRenderer } from \'wrn-echarts\';\\nimport SkiaChart, { SVGRenderer } from \'wrn-echarts/skiaChart\';\\nimport * as echarts from \'echarts/core\';\\nimport { useRef, useEffect } from \'react\';\\nimport { LineChart } from \'echarts/charts\';\\n\\necharts.use([ SVGRenderer, LineChart ])\\n\\nexport default function App() {\\n  const skiaRef = useRef<any>(null);\\n  useEffect(() => {\\n    const option = {\\n      xAxis: {\\n        type: \'category\',\\n        data: [\'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\', \'Sun\']\\n      },\\n      yAxis: {\\n        type: \'value\'\\n      },\\n      series: [\\n        {\\n          data: [150, 230, 224, 218, 135, 147, 260],\\n          type: \'line\'\\n        }\\n      ]\\n    }\\n    let chart: any;\\n    if (skiaRef.current) {\\n      chart = echarts.init(skiaRef.current, \'light\', {\\n        renderer: \'svg\',\\n        width: 250,\\n        height: 300,\\n      });\\n      chart.setOption(option);\\n    }\\n    return () => chart?.dispose();\\n  }, []);\\n\\n  return <SkiaChart ref={skiaRef} />;\\n}\\n```\\n\\nHere is a screenshot of it:\\n\\n![Screenshot](./screenshot.jpg)\\n\\nIsn\u2019t it particularly easy? More chart configurations can be viewed on the [echarts website](https://echarts.apache.org/examples/en/index.html).\\n\\nWe support most of the charts currently supported by ECharts. I will show some of the charts below, and more examples can be seen on the [taro-playground](https://github.com/wuba/taro-playground) project.\\n\\n![Example](./example.jpg)\\n![Animate1](./animate1.gif)\\n![Animate2](./animate2.gif)\\n![Animate3](./animate3.gif)\\n\\n## Performance\\n\\nAs mentioned before, the mainstream solution for using ECharts in React Native is to implement it via WebView. Among the many WebView-based implementations, react-native-echarts-pro has more users, so we chose react-native-echarts-pro as a comparison.\\n\\nThe following are screenshots of the initialization process for the different implementations:\\n\\n![Performance](./performance.gif)\\n\\nAfter quite a few test cases, we found that wrn-echarts has performance advantages in regular usage scenarios, but in scenarios with large amounts of data, there will be significant lag because of the declarative UI rendering method, which we will continue to explore to improve performance subsequently.\\n\\n## Implementation details\\n\\n![Principle](./principle.webp)\\n\\nAbove is the flowchart of the library, taking react-native-svg as an example, the core workflow is:\\n\\n1. Replace the SVGRenderer of ECharts, and replace the registered SVGPainter with the custom SVGPainter.\\n2. CustomSVGPainter inherits from SVGPainter, overwrites the constructor and part of the refresh function, calls the patch function registered on SVGComponent when the chart data is initialized or updated, and passes the calculated new SVG data to it.\\n3. Define SVGComponent, which manages the current chart instance and has a core patch function on it to receive real-time SVG data and then call the SVGElement function.\\n4. SVGElement function iterates all SVG nodes and transforms them into the corresponding SVG elements provided by react-native-svg for the final rendering action.\\n\\nWhen using react-native-skia, there are some differences. There is a core method patchString on the defined SkiaComponent component. patchString receives the changed SVG data, converts it into SVG string, and passes it to the ImageSVG component of react-native-skia for rendering.\\n\\n## Handling TouchEvent\\n\\nECharts events are mouse events, such as click, dblclick, mousedown, mousemove, etc. The mouse events are used to trigger the display or animation of the chart elements.\\n\\nWe use the PanResponder of React Native to capture the events, then simulate the mobile TouchEvent as a mouse event and dispatch it to the chart instance generated by the ECharts init method.\\n\\nFor example, the action of following the mouse to display the legend on the chart is TouchStart + TouchMove on the mobile side, which translates to a mouse event of mousedown + mousemove.\\n\\nAnother example is the zooming of the chart, the mobile side is two-finger zooming, which is translated to the mouse mousewheel event, and the corresponding mousewheel scrolling distance is calculated by the two-finger distance change.\\n\\nHere is the key code:\\n\\n1. Convert TouchEvent to MouseEvent\\n\\n```ts\\nPanResponder.create({\\n  onPanResponderGrant: ({ nativeEvent }) => {\\n    // Action start, translated into mouse down and move events\\n    dispatchEvent(\\n      zrenderId,\\n      [\'mousedown\', \'mousemove\'],\\n      nativeEvent,\\n      \'start\'\\n    );\\n  },\\n  onPanResponderMove: ({ nativeEvent }) => {\\n    // Handling finger movement operations\\n    const length = nativeEvent.touches.length;\\n    if (length === 1) {\\n      // single finger\\n    } else if (length === 2) {\\n      // Handling two-finger movement operations here\\n      if (!zooming) {\\n        // ...\\n      } else {\\n        // Here the event is converted to a scroll wheel\\n        const { initialX, initialY, prevDistance } = pan.current;\\n        const delta = distance - prevDistance;\\n        pan.current.prevDistance = distance;\\n        dispatchEvent(zrenderId, [\'mousewheel\'], nativeEvent, undefined, {\\n          zrX: initialX,\\n          zrY: initialY,\\n          zrDelta: delta / 120,\\n        });\\n      }\\n    }\\n  },\\n  onPanResponderRelease: ({ nativeEvent }) => {\\n    // The action is over, where it is transformed into a mouse click release operation\\n  },\\n})\\n```\\n\\n2. Applying a MouseEvent to an ECharts chart instance\\n\\n```ts\\nfunction dispatchEvent(\\n  zrenderId: number,\\n  types: HandlerName[],\\n  nativeEvent: NativeTouchEvent,\\n  stage: \'start\' | \'end\' | \'change\' | undefined,\\n  props: any = {\\n    zrX: nativeEvent.locationX,\\n    zrY: nativeEvent.locationY,\\n  }\\n) {\\n  if (zrenderId) {\\n    var handler = getInstance(zrenderId).handler;\\n    types.forEach(function (type) {\\n      handler.dispatch(type, {\\n        preventDefault: noop,\\n        stopImmediatePropagation: noop,\\n        stopPropagation: noop,\\n        ...props,\\n      });\\n      stage && handler.processGesture(wrapTouch(nativeEvent), stage);\\n    });\\n  }\\n}\\n```\\n\\n## For more information\\n\\nGo to https://github.com/wuba/react-native-echarts to view the source code, and give us a star if you like it. If you encounter any problems, you can submit an [issue](https://github.com/wuba/react-native-echarts/issues).\\n\\nThe sample code in this post is on the https://github.com/wuba/taro-playground project, which is also open source, and interested parties can also install the new version of the Taro Playground app directly from the app store or from the [releases page](https://github.com/wuba/taro-playground/releases) to experience it."},{"id":"welcome","metadata":{"permalink":"/react-native-echarts/blog/welcome","editUrl":"https://github.com/wuba/react-native-echarts/tree/docs/blog/2023-02-08-welcome/index.md","source":"@site/blog/2023-02-08-welcome/index.md","title":"Welcome","description":"Welcome to react-native-echarts!","date":"2023-02-08T00:00:00.000Z","formattedDate":"February 8, 2023","tags":[{"label":"hello","permalink":"/react-native-echarts/blog/tags/hello"}],"readingTime":0.015,"hasTruncateMarker":false,"authors":[{"name":"Zhiqing Chen","title":"Maintainer of wrn-echarts","url":"https://github.com/zhiqingchen","imageURL":"https://github.com/zhiqingchen.png","key":"zhiqing"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["zhiqing"],"tags":["hello"]},"prevItem":{"title":"Using Apache ECharts in React Native","permalink":"/react-native-echarts/blog/using-apache-echarts-in-react-native"}},"content":"Welcome to react-native-echarts!"}]}')}}]);