webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/fonts.css */ "./components/fonts.css");
/* harmony import */ var _components_fonts_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_fonts_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_burger_animation_lottie_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/burger-animation-lottie.json */ "./public/burger-animation-lottie.json");
var _public_burger_animation_lottie_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/burger-animation-lottie.json */ "./public/burger-animation-lottie.json", 1);
var _jsxFileName = "C:\\Users\\joselito\\bitt\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Home() {
  var brands = [{
    label: 'ford',
    img: 'BITT_01'
  }, {
    label: 'volkswagen',
    img: "BITT_02"
  }, {
    label: 'coca-cola',
    img: "BITT_03"
  }, {
    label: 'nescafe',
    img: "BITT_04"
  }, {
    label: 'manzanada',
    img: "BITT_05"
  }, {
    label: 'axion',
    img: "BITT_06"
  }, {
    label: 'catsup',
    img: "BITT_07"
  }, {
    label: 'banco de bosques',
    img: "BITT_08"
  }, {
    label: 'dralion',
    img: "BITT_09"
  }, {
    label: 'elite',
    img: "BITT_10"
  }, {
    label: 'fritos',
    img: "BITT_01"
  }, {
    label: 'gcba',
    img: "BITT_02"
  }, {
    label: 'got milk',
    img: "BITT_03"
  }, {
    label: 'nivea',
    img: "BITT_04"
  }, {
    label: 'powerade',
    img: "BITT_05"
  }, {
    label: 'villavicencio',
    img: "BITT_06"
  }];
  var animationContainer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var animation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      animationState = _useState[0],
      setAnimationState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(brands),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      active = _useState3[0],
      setActive = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      timer = _useState4[0],
      setTimer = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(animationContainer);
    console.log('animationContainer');
    animation.current = lottie_web__WEBPACK_IMPORTED_MODULE_4___default.a.loadAnimation({
      container: animationContainer.current,
      // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: '/burger-animation-lottie.json' // the path to the animation json

    });
    console.log(animation.current);
    setTimeout(function () {
      animation.current.playSegments([[0, 27], [27, 54]], true); // animation.current.addEventListener('enterFrame', e => {
      //   console.log(animationState)
      //   if (e.currentTime >= 26 && !animationState) {
      //     debugger
      //     setAnimationState(true)
      //     animation.current.pause();
      //   } else if (e.currentTime < 27 && !animationState) {
      //     debugger
      //     setAnimationState(false)
      //     animation.current.pause()
      //   }
      //   console.log(e)
      // })
    }, 1000);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timer = setTimeout(function () {
      if (active == 15) return setActive(0);
      var increment = active + 1;
      setActive(increment);
    }, 3000);
    setTimer(timer);
  }, [active]);

  var handleHover = function handleHover(i) {
    window.clearTimeout(timer);
    setActive(i);
  };

  var handleAnimation = function handleAnimation() {
    animation.current.play();
  };

  var defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: _public_burger_animation_lottie_json__WEBPACK_IMPORTED_MODULE_5___namespace,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Home"), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "\n            "), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "Hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    ref: animationContainer,
    onClick: handleAnimation,
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "video-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "water-mark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("img", {
    src: "/water-mark.svg",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, brands.map(function (item, i) {
    return __jsx("div", {
      onMouseEnter: function onMouseEnter() {
        return handleHover(i);
      },
      className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "item ".concat(active == i ? 'active' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, item.label.toUpperCase());
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "589421798",
    __self: this
  }, "@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Medium.otf\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Bold.otf\");font-weight:bold;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-ExtraLight.otf\");font-weight:lighter;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-Medium.otf\");font-weight:normal;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SFMsQUFJaUMsQUFNQSxBQU1ILEFBTUEsaUJBTG1CLEFBTUosR0FsQkEsQUFNRiw2QkFhWCxDQVpGLEVBTkUsQ0FZQyxjQUxGLENBWUEsR0FsQkEsRUFZQSxZQUxwQixDQVlBLEdBbEJBLEVBWUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlbGl0b1xcYml0dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZm9udHMuY3NzJ1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCAqIGFzIGFuaW1hdGlvbkRhdGEgZnJvbSAnLi4vcHVibGljL2J1cmdlci1hbmltYXRpb24tbG90dGllLmpzb24nXHJcblxyXG5mdW5jdGlvbiBIb21lICgpIHtcclxuICBjb25zdCBicmFuZHMgPSBbXHJcbiAgICB7bGFiZWw6ICdmb3JkJyxpbWc6ICdCSVRUXzAxJyx9LFxyXG4gICAge2xhYmVsOiAndm9sa3N3YWdlbicsIGltZzogXCJCSVRUXzAyXCJ9LFxyXG4gICAge2xhYmVsOiAnY29jYS1jb2xhJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduZXNjYWZlJywgaW1nOiBcIkJJVFRfMDRcIn0sXHJcbiAgICB7bGFiZWw6ICdtYW56YW5hZGEnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ2F4aW9uJywgaW1nOiBcIkJJVFRfMDZcIn0sXHJcbiAgICB7bGFiZWw6ICdjYXRzdXAnLCBpbWc6IFwiQklUVF8wN1wifSxcclxuICAgIHtsYWJlbDogJ2JhbmNvIGRlIGJvc3F1ZXMnLCBpbWc6IFwiQklUVF8wOFwifSxcclxuICAgIHtsYWJlbDogJ2RyYWxpb24nLCBpbWc6IFwiQklUVF8wOVwifSxcclxuICAgIHtsYWJlbDogJ2VsaXRlJywgaW1nOiBcIkJJVFRfMTBcIn0sXHJcbiAgICB7bGFiZWw6ICdmcml0b3MnLCBpbWc6IFwiQklUVF8wMVwifSxcclxuICAgIHtsYWJlbDogJ2djYmEnLCBpbWc6IFwiQklUVF8wMlwifSxcclxuICAgIHtsYWJlbDogJ2dvdCBtaWxrJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduaXZlYScsIGltZzogXCJCSVRUXzA0XCJ9LFxyXG4gICAge2xhYmVsOiAncG93ZXJhZGUnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ3ZpbGxhdmljZW5jaW8nLCBpbWc6IFwiQklUVF8wNlwifSxcclxuICBdXHJcbiAgY29uc3QgYW5pbWF0aW9uQ29udGFpbmVyID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2FuaW1hdGlvblN0YXRlLCBzZXRBbmltYXRpb25TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShicmFuZHMpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhbmltYXRpb25Db250YWluZXIpXHJcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0aW9uQ29udGFpbmVyJylcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50ID0gbG90dGllLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICBjb250YWluZXI6IGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50LCAvLyB0aGUgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICByZW5kZXJlcjogJ3N2ZycsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgcGF0aDogJy9idXJnZXItYW5pbWF0aW9uLWxvdHRpZS5qc29uJyAvLyB0aGUgcGF0aCB0byB0aGUgYW5pbWF0aW9uIGpzb25cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uLmN1cnJlbnQpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQucGxheVNlZ21lbnRzKFtbMCwyN10sIFsyNyw1NF1dLCB0cnVlKTtcclxuICAgICAgLy8gYW5pbWF0aW9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJGcmFtZScsIGUgPT4ge1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGFuaW1hdGlvblN0YXRlKVxyXG4gICAgICAvLyAgIGlmIChlLmN1cnJlbnRUaW1lID49IDI2ICYmICFhbmltYXRpb25TdGF0ZSkge1xyXG4gICAgICAvLyAgICAgZGVidWdnZXJcclxuICAgICAgLy8gICAgIHNldEFuaW1hdGlvblN0YXRlKHRydWUpXHJcbiAgICAgIC8vICAgICBhbmltYXRpb24uY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAvLyAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGltZSA8IDI3ICYmICFhbmltYXRpb25TdGF0ZSkge1xyXG4gICAgICAvLyAgICAgZGVidWdnZXJcclxuICAgICAgLy8gICAgIHNldEFuaW1hdGlvblN0YXRlKGZhbHNlKVxyXG4gICAgICAvLyAgICAgYW5pbWF0aW9uLmN1cnJlbnQucGF1c2UoKVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAvLyB9KVxyXG4gICAgfSwgMTAwMClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGFjdGl2ZSA9PSAxNSkgcmV0dXJuIHNldEFjdGl2ZSgwKVxyXG4gICAgICBjb25zdCBpbmNyZW1lbnQgPSBhY3RpdmUgKyAxO1xyXG4gICAgICBzZXRBY3RpdmUoaW5jcmVtZW50KTtcclxuICAgIH0sIDMwMDApXHJcbiAgICBzZXRUaW1lcih0aW1lcilcclxuICB9LCBbYWN0aXZlXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlSG92ZXIgPSBpID0+IHtcclxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICBzZXRBY3RpdmUoaSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gICAgYW5pbWF0aW9uLmN1cnJlbnQucGxheSgpXHJcbiAgfVxyXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLCBcclxuICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEsXHJcbiAgICByZW5kZXJlclNldHRpbmdzOiB7XHJcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBzbGljZSdcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkhvbWVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1wiPlxyXG4gICAgICAgIDxkaXYgcmVmPXthbmltYXRpb25Db250YWluZXJ9IG9uQ2xpY2s9e2hhbmRsZUFuaW1hdGlvbn0gY2xhc3NOYW1lPVwiYW5pbWF0aW9uXCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdGVyLW1hcmtcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvd2F0ZXItbWFyay5zdmdcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyYW5kcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtICR7YWN0aXZlID09IGkgPyAnYWN0aXZlJzogJyd9YH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlSG92ZXIoaSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWwudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7YFxyXG5cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJEcnVua1wiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9EcnVrV2lkZS1NZWRpdW0ub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRHJ1bmtcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvRHJ1a1dpZGUtQm9sZC5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVFRcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvVFQtSG92ZXMtRXh0cmFMaWdodC5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVFRcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvVFQtSG92ZXMtTWVkaXVtLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoYm9keSkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuSGVybyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFQ0U2REU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7YC8ke2l0ZW1zW2FjdGl2ZV0uaW1nfS5qcGdgfSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODgwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDB2dztcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciAud2F0ZXItbWFyayBpbWcge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IC5pdGVtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogRHJ1bms7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNBN0ExOUE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSAuaXRlbS5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzE0MTMxMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tZW51IC5pdGVtIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW5pbWF0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG57LyogPGRpdiBjbGFzc05hbWU9XCJEZXRhbGxlXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiTGlzdGFkb1wiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPkl0ZW08L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInBpZVwiPlBpZTwvZGl2PlxyXG48L2Rpdj4gKi99Il19 */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1242730136",
    dynamic: ["/".concat(items[active].img, ".jpg")],
    __self: this
  }, "body{margin:0;}.Hero.__jsx-style-dynamic-selector{background:#ECE6DE;height:100vh;display:grid;grid-template-columns:50% 50%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.video-container.__jsx-style-dynamic-selector{justify-self:flex-end;background:url(".concat("/".concat(items[active].img, ".jpg"), ");background-position:center;background-size:cover;margin:50px;height:880px;width:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding-bottom:28px;}@media screen and (max-width:1600px){.video-container.__jsx-style-dynamic-selector{width:40vw;height:40vw;}.video-container.__jsx-style-dynamic-selector .water-mark.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:80%;margin:0 auto;}}.menu.__jsx-style-dynamic-selector{height:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:40px;font-size:40px;font-weight:bold;font-family:Drunk;cursor:pointer;color:#A7A19A;}.menu.__jsx-style-dynamic-selector .item.active.__jsx-style-dynamic-selector{color:#141313;}@media screen and (max-width:1600px){.menu.__jsx-style-dynamic-selector{height:40vw;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:16px;font-size:16px;}}.animation.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;background:white;top:0;right:0;width:128px;height:128px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSlMsQUFHc0IsQUFHVSxBQVFHLEFBY1QsQUFNRSxBQU1GLEFBTUQsQUFRRSxBQUlBLEFBR0EsQUFLRCxTQTlEZixFQXlCZ0IsQ0FrQkMsQUFZZixBQUdpQixDQXJCSixDQWNmLEtBaERlLEdBUWdDLENBZ0I3QyxJQWlCaUIsQUFlakIsS0F2RGEsWUF5Q0ssQ0F4Q1ksaUJBeUNmLEtBbENZLE9BbUJmLEFBZ0NNLENBekRLLEVBeUNULE9BZkUsR0FNQyxJQVVuQixDQWdCbUIsRUFuREssSUFvQnRCLFdBZ0NNLE1BQ0UsQ0FwREksT0FxREEsS0FwREMsT0FxREEsTUFwREQsT0FxRGQsRUE5QjJCLEdBdEJaLHFCQVZNLHFEQVdJLG9CQXNCekIsb0JBaENBLDJEQVd1QixxR0FDRCxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlbGl0b1xcYml0dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZm9udHMuY3NzJ1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCAqIGFzIGFuaW1hdGlvbkRhdGEgZnJvbSAnLi4vcHVibGljL2J1cmdlci1hbmltYXRpb24tbG90dGllLmpzb24nXHJcblxyXG5mdW5jdGlvbiBIb21lICgpIHtcclxuICBjb25zdCBicmFuZHMgPSBbXHJcbiAgICB7bGFiZWw6ICdmb3JkJyxpbWc6ICdCSVRUXzAxJyx9LFxyXG4gICAge2xhYmVsOiAndm9sa3N3YWdlbicsIGltZzogXCJCSVRUXzAyXCJ9LFxyXG4gICAge2xhYmVsOiAnY29jYS1jb2xhJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduZXNjYWZlJywgaW1nOiBcIkJJVFRfMDRcIn0sXHJcbiAgICB7bGFiZWw6ICdtYW56YW5hZGEnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ2F4aW9uJywgaW1nOiBcIkJJVFRfMDZcIn0sXHJcbiAgICB7bGFiZWw6ICdjYXRzdXAnLCBpbWc6IFwiQklUVF8wN1wifSxcclxuICAgIHtsYWJlbDogJ2JhbmNvIGRlIGJvc3F1ZXMnLCBpbWc6IFwiQklUVF8wOFwifSxcclxuICAgIHtsYWJlbDogJ2RyYWxpb24nLCBpbWc6IFwiQklUVF8wOVwifSxcclxuICAgIHtsYWJlbDogJ2VsaXRlJywgaW1nOiBcIkJJVFRfMTBcIn0sXHJcbiAgICB7bGFiZWw6ICdmcml0b3MnLCBpbWc6IFwiQklUVF8wMVwifSxcclxuICAgIHtsYWJlbDogJ2djYmEnLCBpbWc6IFwiQklUVF8wMlwifSxcclxuICAgIHtsYWJlbDogJ2dvdCBtaWxrJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduaXZlYScsIGltZzogXCJCSVRUXzA0XCJ9LFxyXG4gICAge2xhYmVsOiAncG93ZXJhZGUnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ3ZpbGxhdmljZW5jaW8nLCBpbWc6IFwiQklUVF8wNlwifSxcclxuICBdXHJcbiAgY29uc3QgYW5pbWF0aW9uQ29udGFpbmVyID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2FuaW1hdGlvblN0YXRlLCBzZXRBbmltYXRpb25TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShicmFuZHMpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhbmltYXRpb25Db250YWluZXIpXHJcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0aW9uQ29udGFpbmVyJylcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50ID0gbG90dGllLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICBjb250YWluZXI6IGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50LCAvLyB0aGUgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICByZW5kZXJlcjogJ3N2ZycsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgcGF0aDogJy9idXJnZXItYW5pbWF0aW9uLWxvdHRpZS5qc29uJyAvLyB0aGUgcGF0aCB0byB0aGUgYW5pbWF0aW9uIGpzb25cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uLmN1cnJlbnQpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQucGxheVNlZ21lbnRzKFtbMCwyN10sIFsyNyw1NF1dLCB0cnVlKTtcclxuICAgICAgLy8gYW5pbWF0aW9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJGcmFtZScsIGUgPT4ge1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGFuaW1hdGlvblN0YXRlKVxyXG4gICAgICAvLyAgIGlmIChlLmN1cnJlbnRUaW1lID49IDI2ICYmICFhbmltYXRpb25TdGF0ZSkge1xyXG4gICAgICAvLyAgICAgZGVidWdnZXJcclxuICAgICAgLy8gICAgIHNldEFuaW1hdGlvblN0YXRlKHRydWUpXHJcbiAgICAgIC8vICAgICBhbmltYXRpb24uY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAvLyAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGltZSA8IDI3ICYmICFhbmltYXRpb25TdGF0ZSkge1xyXG4gICAgICAvLyAgICAgZGVidWdnZXJcclxuICAgICAgLy8gICAgIHNldEFuaW1hdGlvblN0YXRlKGZhbHNlKVxyXG4gICAgICAvLyAgICAgYW5pbWF0aW9uLmN1cnJlbnQucGF1c2UoKVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAvLyB9KVxyXG4gICAgfSwgMTAwMClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGFjdGl2ZSA9PSAxNSkgcmV0dXJuIHNldEFjdGl2ZSgwKVxyXG4gICAgICBjb25zdCBpbmNyZW1lbnQgPSBhY3RpdmUgKyAxO1xyXG4gICAgICBzZXRBY3RpdmUoaW5jcmVtZW50KTtcclxuICAgIH0sIDMwMDApXHJcbiAgICBzZXRUaW1lcih0aW1lcilcclxuICB9LCBbYWN0aXZlXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlSG92ZXIgPSBpID0+IHtcclxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICBzZXRBY3RpdmUoaSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gICAgYW5pbWF0aW9uLmN1cnJlbnQucGxheSgpXHJcbiAgfVxyXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLCBcclxuICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEsXHJcbiAgICByZW5kZXJlclNldHRpbmdzOiB7XHJcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBzbGljZSdcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkhvbWVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1wiPlxyXG4gICAgICAgIDxkaXYgcmVmPXthbmltYXRpb25Db250YWluZXJ9IG9uQ2xpY2s9e2hhbmRsZUFuaW1hdGlvbn0gY2xhc3NOYW1lPVwiYW5pbWF0aW9uXCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdGVyLW1hcmtcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvd2F0ZXItbWFyay5zdmdcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyYW5kcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtICR7YWN0aXZlID09IGkgPyAnYWN0aXZlJzogJyd9YH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlSG92ZXIoaSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWwudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7YFxyXG5cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJEcnVua1wiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9EcnVrV2lkZS1NZWRpdW0ub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRHJ1bmtcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvRHJ1a1dpZGUtQm9sZC5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVFRcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvVFQtSG92ZXMtRXh0cmFMaWdodC5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVFRcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvVFQtSG92ZXMtTWVkaXVtLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoYm9keSkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuSGVybyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFQ0U2REU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7YC8ke2l0ZW1zW2FjdGl2ZV0uaW1nfS5qcGdgfSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODgwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDB2dztcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciAud2F0ZXItbWFyayBpbWcge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IC5pdGVtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogRHJ1bms7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNBN0ExOUE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSAuaXRlbS5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzE0MTMxMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tZW51IC5pdGVtIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW5pbWF0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG57LyogPGRpdiBjbGFzc05hbWU9XCJEZXRhbGxlXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiTGlzdGFkb1wiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPkl0ZW08L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInBpZVwiPlBpZTwvZGl2PlxyXG48L2Rpdj4gKi99Il19 */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);
{
  /* <div className="Detalle"></div>
  <div className="Listado">
   <div className="item">Item</div>
   <div className="pie">Pie</div>
  </div> */
}

/***/ })

})
//# sourceMappingURL=index.js.ac404dbb7de880fe6430.hot-update.js.map