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
/* harmony import */ var _components_Detalle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Detalle */ "./components/Detalle.js");
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
  var animationDirection = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('forward');
  var animation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      animationState = _useState[0],
      setAnimationState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(brands),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(items[0]),
      selected = _useState3[0],
      setSeleccted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      active = _useState4[0],
      setActive = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      timer = _useState5[0],
      setTimer = _useState5[1];

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
      animation.current.addEventListener('enterFrame', function (e) {
        debugger;

        if (e.currentTime >= 27 && animationDirection.current !== 'back') {
          animationDirection.current = 'back';
          animation.current.pause();
        } else if (e.currentTime < 25 && animationDirection.current !== 'forward') {
          animationDirection.current = 'forward';
          animation.current.pause();
        }
      });
    }, 2000);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {// const timer = setTimeout(() => {
    //   if (active == 15) return setActive(0)
    //   const increment = active + 1;
    //   setActive(increment);
    // }, 3000)
    // setTimer(timer)
  }, [active]);

  var handleItem = function handleItem(i) {
    setSeleccted(items[i]);
    var detalle = document.getElementById('detalle');
    detalle.scrollIntoView();
  };

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
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Home"), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "\n            "), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "Hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    ref: animationContainer,
    onClick: handleAnimation,
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "video-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "water-mark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("img", {
    src: "/water-mark.svg",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, brands.map(function (item, i) {
    return __jsx("div", {
      onMouseEnter: function onMouseEnter() {
        return handleHover(i);
      },
      onClick: function onClick() {
        return handleItem(i);
      },
      className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "item ".concat(active == i ? 'active' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, item.label.toUpperCase());
  }))), __jsx(_components_Detalle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selected: selected,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "589421798",
    __self: this
  }, "@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Medium.otf\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Bold.otf\");font-weight:bold;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-ExtraLight.otf\");font-weight:lighter;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-Medium.otf\");font-weight:normal;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SFMsQUFJaUMsQUFNQSxBQU1ILEFBTUEsaUJBTG1CLEFBTUosR0FsQkEsQUFNRiw2QkFhWCxDQVpGLEVBTkUsQ0FZQyxjQUxGLENBWUEsR0FsQkEsRUFZQSxZQUxwQixDQVlBLEdBbEJBLEVBWUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlbGl0b1xcYml0dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZm9udHMuY3NzJ1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCAqIGFzIGFuaW1hdGlvbkRhdGEgZnJvbSAnLi4vcHVibGljL2J1cmdlci1hbmltYXRpb24tbG90dGllLmpzb24nXHJcbmltcG9ydCBEZXRhbGxlIGZyb20gJy4uL2NvbXBvbmVudHMvRGV0YWxsZSdcclxuZnVuY3Rpb24gSG9tZSAoKSB7XHJcbiAgY29uc3QgYnJhbmRzID0gW1xyXG4gICAge2xhYmVsOiAnZm9yZCcsaW1nOiAnQklUVF8wMScsfSxcclxuICAgIHtsYWJlbDogJ3ZvbGtzd2FnZW4nLCBpbWc6IFwiQklUVF8wMlwifSxcclxuICAgIHtsYWJlbDogJ2NvY2EtY29sYScsIGltZzogXCJCSVRUXzAzXCJ9LFxyXG4gICAge2xhYmVsOiAnbmVzY2FmZScsIGltZzogXCJCSVRUXzA0XCJ9LFxyXG4gICAge2xhYmVsOiAnbWFuemFuYWRhJywgaW1nOiBcIkJJVFRfMDVcIn0sXHJcbiAgICB7bGFiZWw6ICdheGlvbicsIGltZzogXCJCSVRUXzA2XCJ9LFxyXG4gICAge2xhYmVsOiAnY2F0c3VwJywgaW1nOiBcIkJJVFRfMDdcIn0sXHJcbiAgICB7bGFiZWw6ICdiYW5jbyBkZSBib3NxdWVzJywgaW1nOiBcIkJJVFRfMDhcIn0sXHJcbiAgICB7bGFiZWw6ICdkcmFsaW9uJywgaW1nOiBcIkJJVFRfMDlcIn0sXHJcbiAgICB7bGFiZWw6ICdlbGl0ZScsIGltZzogXCJCSVRUXzEwXCJ9LFxyXG4gICAge2xhYmVsOiAnZnJpdG9zJywgaW1nOiBcIkJJVFRfMDFcIn0sXHJcbiAgICB7bGFiZWw6ICdnY2JhJywgaW1nOiBcIkJJVFRfMDJcIn0sXHJcbiAgICB7bGFiZWw6ICdnb3QgbWlsaycsIGltZzogXCJCSVRUXzAzXCJ9LFxyXG4gICAge2xhYmVsOiAnbml2ZWEnLCBpbWc6IFwiQklUVF8wNFwifSxcclxuICAgIHtsYWJlbDogJ3Bvd2VyYWRlJywgaW1nOiBcIkJJVFRfMDVcIn0sXHJcbiAgICB7bGFiZWw6ICd2aWxsYXZpY2VuY2lvJywgaW1nOiBcIkJJVFRfMDZcIn0sXHJcbiAgXVxyXG4gIGNvbnN0IGFuaW1hdGlvbkNvbnRhaW5lciA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGFuaW1hdGlvbkRpcmVjdGlvbiA9IHVzZVJlZignZm9yd2FyZCcpO1xyXG4gIGNvbnN0IGFuaW1hdGlvbiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IFthbmltYXRpb25TdGF0ZSwgc2V0QW5pbWF0aW9uU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpIFxyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoYnJhbmRzKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjY3RlZF0gPSB1c2VTdGF0ZShpdGVtc1swXSlcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uQ29udGFpbmVyKVxyXG4gICAgY29uc29sZS5sb2coJ2FuaW1hdGlvbkNvbnRhaW5lcicpXHJcbiAgICBhbmltYXRpb24uY3VycmVudCA9IGxvdHRpZS5sb2FkQW5pbWF0aW9uKHtcclxuICAgICAgY29udGFpbmVyOiBhbmltYXRpb25Db250YWluZXIuY3VycmVudCwgLy8gdGhlIGRvbSBlbGVtZW50IHRoYXQgd2lsbCBjb250YWluIHRoZSBhbmltYXRpb25cclxuICAgICAgcmVuZGVyZXI6ICdzdmcnLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgIHBhdGg6ICcvYnVyZ2VyLWFuaW1hdGlvbi1sb3R0aWUuanNvbicgLy8gdGhlIHBhdGggdG8gdGhlIGFuaW1hdGlvbiBqc29uXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGFuaW1hdGlvbi5jdXJyZW50KVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGFuaW1hdGlvbi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VudGVyRnJhbWUnLCBlID0+IHtcclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUaW1lID49IDI3ICYmIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ICE9PSAnYmFjaycpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ID0gJ2JhY2snXHJcbiAgICAgICAgICBhbmltYXRpb24uY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGltZSA8IDI1ICYmIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ICE9PSAnZm9yd2FyZCcpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ID0gJ2ZvcndhcmQnXHJcbiAgICAgICAgICBhbmltYXRpb24uY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sIDIwMDApXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgIGlmIChhY3RpdmUgPT0gMTUpIHJldHVybiBzZXRBY3RpdmUoMClcclxuICAgIC8vICAgY29uc3QgaW5jcmVtZW50ID0gYWN0aXZlICsgMTtcclxuICAgIC8vICAgc2V0QWN0aXZlKGluY3JlbWVudCk7XHJcbiAgICAvLyB9LCAzMDAwKVxyXG4gICAgLy8gc2V0VGltZXIodGltZXIpXHJcbiAgfSwgW2FjdGl2ZV0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUl0ZW0gPSBpID0+IHtcclxuICAgIHNldFNlbGVjY3RlZChpdGVtc1tpXSk7XHJcbiAgICBjb25zdCBkZXRhbGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFsbGUnKTtcclxuICAgIGRldGFsbGUuc2Nyb2xsSW50b1ZpZXcoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSG92ZXIgPSBpID0+IHtcclxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICBzZXRBY3RpdmUoaSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gICAgYW5pbWF0aW9uLmN1cnJlbnQucGxheSgpXHJcbiAgfVxyXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLCBcclxuICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEsXHJcbiAgICByZW5kZXJlclNldHRpbmdzOiB7XHJcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBzbGljZSdcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkhvbWVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1wiPlxyXG4gICAgICAgIDxkaXYgcmVmPXthbmltYXRpb25Db250YWluZXJ9IG9uQ2xpY2s9e2hhbmRsZUFuaW1hdGlvbn0gY2xhc3NOYW1lPVwiYW5pbWF0aW9uXCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdGVyLW1hcmtcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvd2F0ZXItbWFyay5zdmdcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyYW5kcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtICR7YWN0aXZlID09IGkgPyAnYWN0aXZlJzogJyd9YH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlSG92ZXIoaSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtKGkpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RGV0YWxsZSBzZWxlY3RlZD17c2VsZWN0ZWR9IC8+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7YFxyXG5cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJEcnVua1wiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9EcnVrV2lkZS1NZWRpdW0ub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRHJ1bmtcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvRHJ1a1dpZGUtQm9sZC5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVFRcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvVFQtSG92ZXMtRXh0cmFMaWdodC5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVFRcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvVFQtSG92ZXMtTWVkaXVtLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoYm9keSkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5IZXJvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VDRTZERTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtgLyR7aXRlbXNbYWN0aXZlXS5pbWd9LmpwZ2B9KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODgwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4ODBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudmlkZW8tY29udGFpbmVyIC53YXRlci1tYXJrIGltZyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogODgwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgLml0ZW0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBEcnVuaztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI0E3QTE5QTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IC5pdGVtLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTQxMzEzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1lbnUgLml0ZW0ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hbmltYXRpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1dnc7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuey8qIDxkaXYgY2xhc3NOYW1lPVwiRGV0YWxsZVwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cIkxpc3RhZG9cIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5JdGVtPC9kaXY+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJwaWVcIj5QaWU8L2Rpdj5cclxuPC9kaXY+ICovfSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "162032214",
    dynamic: ["/".concat(items[active].img, ".jpg")],
    __self: this
  }, "body{margin:0;overflow-y:hidden;}.Hero.__jsx-style-dynamic-selector{background:#ECE6DE;height:100vh;display:grid;grid-template-columns:50% 50%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.video-container.__jsx-style-dynamic-selector{justify-self:flex-end;background:url(".concat("/".concat(items[active].img, ".jpg"), ");background-position:center;background-size:cover;margin:50px;height:880px;width:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding-bottom:28px;}@media screen and (max-width:1600px){.video-container.__jsx-style-dynamic-selector{width:40vw;height:40vw;}.video-container.__jsx-style-dynamic-selector .water-mark.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:80%;margin:0 auto;}}.menu.__jsx-style-dynamic-selector{height:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:40px;font-size:40px;font-weight:bold;font-family:Drunk;cursor:pointer;color:#A7A19A;}.menu.__jsx-style-dynamic-selector .item.active.__jsx-style-dynamic-selector{color:#141313;}@media screen and (max-width:1600px){.menu.__jsx-style-dynamic-selector{height:40vw;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:16px;font-size:16px;}}.animation.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;background:white;top:50px;right:5vw;width:50px;height:50px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySlMsQUFHc0IsQUFJVSxBQVFHLEFBY1QsQUFNRSxBQU1GLEFBTUQsQUFRRSxBQUlBLEFBR0EsQUFLRCxTQS9ESyxFQTBCSixDQWtCQyxBQVlmLEFBR2lCLENBckJKLENBY2YsS0FoRGUsR0FRZ0MsQ0FnQjdDLElBM0JGLEFBNENtQixBQWVqQixLQXZEYSxZQXlDSyxDQXhDWSxpQkF5Q2YsS0FsQ1ksT0FtQmYsQUFnQ00sQ0F6REssRUF5Q1QsT0FmRSxHQU1DLElBVW5CLENBZ0JtQixFQW5ESyxJQW9CdEIsV0FnQ1MsT0FuREcsRUFvREYsVUFuREcsQUFvREYsV0FDQyxFQXBEQSxTQXVCYSxDQThCVixFQXBERixhQXFEZixRQS9EcUIscURBV0ksb0JBc0J6QixvQkFoQ0EsMkRBV3VCLHFHQUNELG9CQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXGpvc2VsaXRvXFxiaXR0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9mb250cy5jc3MnXHJcbmltcG9ydCBsb3R0aWUgZnJvbSAnbG90dGllLXdlYidcclxuaW1wb3J0ICogYXMgYW5pbWF0aW9uRGF0YSBmcm9tICcuLi9wdWJsaWMvYnVyZ2VyLWFuaW1hdGlvbi1sb3R0aWUuanNvbidcclxuaW1wb3J0IERldGFsbGUgZnJvbSAnLi4vY29tcG9uZW50cy9EZXRhbGxlJ1xyXG5mdW5jdGlvbiBIb21lICgpIHtcclxuICBjb25zdCBicmFuZHMgPSBbXHJcbiAgICB7bGFiZWw6ICdmb3JkJyxpbWc6ICdCSVRUXzAxJyx9LFxyXG4gICAge2xhYmVsOiAndm9sa3N3YWdlbicsIGltZzogXCJCSVRUXzAyXCJ9LFxyXG4gICAge2xhYmVsOiAnY29jYS1jb2xhJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduZXNjYWZlJywgaW1nOiBcIkJJVFRfMDRcIn0sXHJcbiAgICB7bGFiZWw6ICdtYW56YW5hZGEnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ2F4aW9uJywgaW1nOiBcIkJJVFRfMDZcIn0sXHJcbiAgICB7bGFiZWw6ICdjYXRzdXAnLCBpbWc6IFwiQklUVF8wN1wifSxcclxuICAgIHtsYWJlbDogJ2JhbmNvIGRlIGJvc3F1ZXMnLCBpbWc6IFwiQklUVF8wOFwifSxcclxuICAgIHtsYWJlbDogJ2RyYWxpb24nLCBpbWc6IFwiQklUVF8wOVwifSxcclxuICAgIHtsYWJlbDogJ2VsaXRlJywgaW1nOiBcIkJJVFRfMTBcIn0sXHJcbiAgICB7bGFiZWw6ICdmcml0b3MnLCBpbWc6IFwiQklUVF8wMVwifSxcclxuICAgIHtsYWJlbDogJ2djYmEnLCBpbWc6IFwiQklUVF8wMlwifSxcclxuICAgIHtsYWJlbDogJ2dvdCBtaWxrJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduaXZlYScsIGltZzogXCJCSVRUXzA0XCJ9LFxyXG4gICAge2xhYmVsOiAncG93ZXJhZGUnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ3ZpbGxhdmljZW5jaW8nLCBpbWc6IFwiQklUVF8wNlwifSxcclxuICBdXHJcbiAgY29uc3QgYW5pbWF0aW9uQ29udGFpbmVyID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgYW5pbWF0aW9uRGlyZWN0aW9uID0gdXNlUmVmKCdmb3J3YXJkJyk7XHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2FuaW1hdGlvblN0YXRlLCBzZXRBbmltYXRpb25TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShicmFuZHMpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWNjdGVkXSA9IHVzZVN0YXRlKGl0ZW1zWzBdKVxyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhbmltYXRpb25Db250YWluZXIpXHJcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0aW9uQ29udGFpbmVyJylcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50ID0gbG90dGllLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICBjb250YWluZXI6IGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50LCAvLyB0aGUgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICByZW5kZXJlcjogJ3N2ZycsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgcGF0aDogJy9idXJnZXItYW5pbWF0aW9uLWxvdHRpZS5qc29uJyAvLyB0aGUgcGF0aCB0byB0aGUgYW5pbWF0aW9uIGpzb25cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uLmN1cnJlbnQpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJGcmFtZScsIGUgPT4ge1xyXG4gICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRpbWUgPj0gMjcgJiYgYW5pbWF0aW9uRGlyZWN0aW9uLmN1cnJlbnQgIT09ICdiYWNrJykge1xyXG4gICAgICAgICAgYW5pbWF0aW9uRGlyZWN0aW9uLmN1cnJlbnQgPSAnYmFjaydcclxuICAgICAgICAgIGFuaW1hdGlvbi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmN1cnJlbnRUaW1lIDwgMjUgJiYgYW5pbWF0aW9uRGlyZWN0aW9uLmN1cnJlbnQgIT09ICdmb3J3YXJkJykge1xyXG4gICAgICAgICAgYW5pbWF0aW9uRGlyZWN0aW9uLmN1cnJlbnQgPSAnZm9yd2FyZCdcclxuICAgICAgICAgIGFuaW1hdGlvbi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSwgMjAwMClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgaWYgKGFjdGl2ZSA9PSAxNSkgcmV0dXJuIHNldEFjdGl2ZSgwKVxyXG4gICAgLy8gICBjb25zdCBpbmNyZW1lbnQgPSBhY3RpdmUgKyAxO1xyXG4gICAgLy8gICBzZXRBY3RpdmUoaW5jcmVtZW50KTtcclxuICAgIC8vIH0sIDMwMDApXHJcbiAgICAvLyBzZXRUaW1lcih0aW1lcilcclxuICB9LCBbYWN0aXZlXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlSXRlbSA9IGkgPT4ge1xyXG4gICAgc2V0U2VsZWNjdGVkKGl0ZW1zW2ldKTtcclxuICAgIGNvbnN0IGRldGFsbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWxsZScpO1xyXG4gICAgZGV0YWxsZS5zY3JvbGxJbnRvVmlldygpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVIb3ZlciA9IGkgPT4ge1xyXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIHNldEFjdGl2ZShpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVBbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgICBhbmltYXRpb24uY3VycmVudC5wbGF5KClcclxuICB9XHJcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsIFxyXG4gICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uRGF0YSxcclxuICAgIHJlbmRlcmVyU2V0dGluZ3M6IHtcclxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkIHNsaWNlJ1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSG9tZVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvXCI+XHJcbiAgICAgICAgPGRpdiByZWY9e2FuaW1hdGlvbkNvbnRhaW5lcn0gb25DbGljaz17aGFuZGxlQW5pbWF0aW9ufSBjbGFzc05hbWU9XCJhbmltYXRpb25cIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2F0ZXItbWFya1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi93YXRlci1tYXJrLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJhbmRzLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gJHthY3RpdmUgPT0gaSA/ICdhY3RpdmUnOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVIb3ZlcihpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW0oaSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWwudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEZXRhbGxlIHNlbGVjdGVkPXtzZWxlY3RlZH0gLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRydW5rXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL0RydWtXaWRlLU1lZGl1bS5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJEcnVua1wiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9EcnVrV2lkZS1Cb2xkLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJUVFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9UVC1Ib3Zlcy1FeHRyYUxpZ2h0Lm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJUVFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9UVC1Ib3Zlcy1NZWRpdW0ub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbChib2R5KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkhlcm8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUNFNkRFO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2AvJHtpdGVtc1thY3RpdmVdLmltZ30uanBnYH0pO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4ODBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg4MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52aWRlby1jb250YWluZXIgLndhdGVyLW1hcmsgaW1nIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4ODBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSAuaXRlbSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IERydW5rO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQTdBMTlBO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgLml0ZW0uYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxNDEzMTM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDB2dztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWVudSAuaXRlbSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFuaW1hdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDV2dztcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG57LyogPGRpdiBjbGFzc05hbWU9XCJEZXRhbGxlXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiTGlzdGFkb1wiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPkl0ZW08L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInBpZVwiPlBpZTwvZGl2PlxyXG48L2Rpdj4gKi99Il19 */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */")));
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
//# sourceMappingURL=index.js.343be116b2ed415f5eb2.hot-update.js.map