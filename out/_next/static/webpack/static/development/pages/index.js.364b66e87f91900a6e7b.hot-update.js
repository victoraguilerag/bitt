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
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2340715591", ["/".concat(items[active].img, ".jpg")]]]) + " " + "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2340715591", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Home"), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\n            "), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2340715591", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2340715591", ["/".concat(items[active].img, ".jpg")]]]) + " " + "Hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    ref: animationContainer,
    onClick: handleAnimation,
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2340715591", ["/".concat(items[active].img, ".jpg")]]]) + " " + "animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2340715591", ["/".concat(items[active].img, ".jpg")]]]) + " " + "video-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2340715591", ["/".concat(items[active].img, ".jpg")]]]) + " " + "water-mark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("img", {
    src: "/water-mark.svg",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2340715591", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2340715591", ["/".concat(items[active].img, ".jpg")]]]) + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, brands.map(function (item, i) {
    return __jsx("div", {
      onMouseEnter: function onMouseEnter() {
        return handleHover(i);
      },
      className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2340715591", ["/".concat(items[active].img, ".jpg")]]]) + " " + "item ".concat(active == i ? 'active' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, item.label.toUpperCase());
  }))), __jsx(_components_Detalle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "589421798",
    __self: this
  }, "@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Medium.otf\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Bold.otf\");font-weight:bold;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-ExtraLight.otf\");font-weight:lighter;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-Medium.otf\");font-weight:normal;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSFMsQUFJaUMsQUFNQSxBQU1ILEFBTUEsaUJBTG1CLEFBTUosR0FsQkEsQUFNRiw2QkFhWCxDQVpGLEVBTkUsQ0FZQyxjQUxGLENBWUEsR0FsQkEsRUFZQSxZQUxwQixDQVlBLEdBbEJBLEVBWUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlbGl0b1xcYml0dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZm9udHMuY3NzJ1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCAqIGFzIGFuaW1hdGlvbkRhdGEgZnJvbSAnLi4vcHVibGljL2J1cmdlci1hbmltYXRpb24tbG90dGllLmpzb24nXHJcbmltcG9ydCBEZXRhbGxlIGZyb20gJy4uL2NvbXBvbmVudHMvRGV0YWxsZSdcclxuZnVuY3Rpb24gSG9tZSAoKSB7XHJcbiAgY29uc3QgYnJhbmRzID0gW1xyXG4gICAge2xhYmVsOiAnZm9yZCcsaW1nOiAnQklUVF8wMScsfSxcclxuICAgIHtsYWJlbDogJ3ZvbGtzd2FnZW4nLCBpbWc6IFwiQklUVF8wMlwifSxcclxuICAgIHtsYWJlbDogJ2NvY2EtY29sYScsIGltZzogXCJCSVRUXzAzXCJ9LFxyXG4gICAge2xhYmVsOiAnbmVzY2FmZScsIGltZzogXCJCSVRUXzA0XCJ9LFxyXG4gICAge2xhYmVsOiAnbWFuemFuYWRhJywgaW1nOiBcIkJJVFRfMDVcIn0sXHJcbiAgICB7bGFiZWw6ICdheGlvbicsIGltZzogXCJCSVRUXzA2XCJ9LFxyXG4gICAge2xhYmVsOiAnY2F0c3VwJywgaW1nOiBcIkJJVFRfMDdcIn0sXHJcbiAgICB7bGFiZWw6ICdiYW5jbyBkZSBib3NxdWVzJywgaW1nOiBcIkJJVFRfMDhcIn0sXHJcbiAgICB7bGFiZWw6ICdkcmFsaW9uJywgaW1nOiBcIkJJVFRfMDlcIn0sXHJcbiAgICB7bGFiZWw6ICdlbGl0ZScsIGltZzogXCJCSVRUXzEwXCJ9LFxyXG4gICAge2xhYmVsOiAnZnJpdG9zJywgaW1nOiBcIkJJVFRfMDFcIn0sXHJcbiAgICB7bGFiZWw6ICdnY2JhJywgaW1nOiBcIkJJVFRfMDJcIn0sXHJcbiAgICB7bGFiZWw6ICdnb3QgbWlsaycsIGltZzogXCJCSVRUXzAzXCJ9LFxyXG4gICAge2xhYmVsOiAnbml2ZWEnLCBpbWc6IFwiQklUVF8wNFwifSxcclxuICAgIHtsYWJlbDogJ3Bvd2VyYWRlJywgaW1nOiBcIkJJVFRfMDVcIn0sXHJcbiAgICB7bGFiZWw6ICd2aWxsYXZpY2VuY2lvJywgaW1nOiBcIkJJVFRfMDZcIn0sXHJcbiAgXVxyXG4gIGNvbnN0IGFuaW1hdGlvbkNvbnRhaW5lciA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGFuaW1hdGlvbkRpcmVjdGlvbiA9IHVzZVJlZignZm9yd2FyZCcpO1xyXG4gIGNvbnN0IGFuaW1hdGlvbiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IFthbmltYXRpb25TdGF0ZSwgc2V0QW5pbWF0aW9uU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpIFxyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoYnJhbmRzKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uQ29udGFpbmVyKVxyXG4gICAgY29uc29sZS5sb2coJ2FuaW1hdGlvbkNvbnRhaW5lcicpXHJcbiAgICBhbmltYXRpb24uY3VycmVudCA9IGxvdHRpZS5sb2FkQW5pbWF0aW9uKHtcclxuICAgICAgY29udGFpbmVyOiBhbmltYXRpb25Db250YWluZXIuY3VycmVudCwgLy8gdGhlIGRvbSBlbGVtZW50IHRoYXQgd2lsbCBjb250YWluIHRoZSBhbmltYXRpb25cclxuICAgICAgcmVuZGVyZXI6ICdzdmcnLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgIHBhdGg6ICcvYnVyZ2VyLWFuaW1hdGlvbi1sb3R0aWUuanNvbicgLy8gdGhlIHBhdGggdG8gdGhlIGFuaW1hdGlvbiBqc29uXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGFuaW1hdGlvbi5jdXJyZW50KVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGFuaW1hdGlvbi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VudGVyRnJhbWUnLCBlID0+IHtcclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUaW1lID49IDI3ICYmIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ICE9PSAnYmFjaycpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ID0gJ2JhY2snXHJcbiAgICAgICAgICBhbmltYXRpb24uY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGltZSA8IDI1ICYmIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ICE9PSAnZm9yd2FyZCcpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ID0gJ2ZvcndhcmQnXHJcbiAgICAgICAgICBhbmltYXRpb24uY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sIDIwMDApXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChhY3RpdmUgPT0gMTUpIHJldHVybiBzZXRBY3RpdmUoMClcclxuICAgICAgY29uc3QgaW5jcmVtZW50ID0gYWN0aXZlICsgMTtcclxuICAgICAgc2V0QWN0aXZlKGluY3JlbWVudCk7XHJcbiAgICB9LCAzMDAwKVxyXG4gICAgc2V0VGltZXIodGltZXIpXHJcbiAgfSwgW2FjdGl2ZV0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gaSA9PiB7XHJcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgc2V0QWN0aXZlKGkpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50LnBsYXkoKVxyXG4gIH1cclxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSwgXHJcbiAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb25EYXRhLFxyXG4gICAgcmVuZGVyZXJTZXR0aW5nczoge1xyXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgc2xpY2UnXHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIb21lXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9cIj5cclxuICAgICAgICA8ZGl2IHJlZj17YW5pbWF0aW9uQ29udGFpbmVyfSBvbkNsaWNrPXtoYW5kbGVBbmltYXRpb259IGNsYXNzTmFtZT1cImFuaW1hdGlvblwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXRlci1tYXJrXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3dhdGVyLW1hcmsuc3ZnXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZHMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbSAke2FjdGl2ZSA9PSBpID8gJ2FjdGl2ZSc6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKGkpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RGV0YWxsZSAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRHJ1bmtcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvRHJ1a1dpZGUtTWVkaXVtLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRydW5rXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL0RydWtXaWRlLUJvbGQub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRUXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL1RULUhvdmVzLUV4dHJhTGlnaHQub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRUXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL1RULUhvdmVzLU1lZGl1bS5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5IZXJvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VDRTZERTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtgLyR7aXRlbXNbYWN0aXZlXS5pbWd9LmpwZ2B9KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODgwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4ODBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudmlkZW8tY29udGFpbmVyIC53YXRlci1tYXJrIGltZyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogODgwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgLml0ZW0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBEcnVuaztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI0E3QTE5QTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IC5pdGVtLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTQxMzEzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1lbnUgLml0ZW0ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hbmltYXRpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1dnc7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuey8qIDxkaXYgY2xhc3NOYW1lPVwiRGV0YWxsZVwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cIkxpc3RhZG9cIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5JdGVtPC9kaXY+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJwaWVcIj5QaWU8L2Rpdj5cclxuPC9kaXY+ICovfSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2340715591",
    dynamic: ["/".concat(items[active].img, ".jpg")],
    __self: this
  }, "body{margin:0;overflow-y:hidden;}.Hero.__jsx-style-dynamic-selector{background:#ECE6DE;height:100vh;display:grid;grid-template-columns:50% 50%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.video-container.__jsx-style-dynamic-selector{justify-self:flex-end;background:url(".concat("/".concat(items[active].img, ".jpg"), ");background-position:center;background-size:cover;margin:50px;height:880px;width:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding-bottom:28px;}@media screen and (max-width:1600px){.video-container.__jsx-style-dynamic-selector{width:40vw;height:40vw;}.video-container.__jsx-style-dynamic-selector .water-mark.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:80%;margin:0 auto;}}.menu.__jsx-style-dynamic-selector{height:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:40px;font-size:40px;font-weight:bold;font-family:Drunk;cursor:pointer;color:#A7A19A;}.menu.__jsx-style-dynamic-selector .item.active.__jsx-style-dynamic-selector{color:#141313;}@media screen and (max-width:1600px){.menu.__jsx-style-dynamic-selector{height:40vw;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:16px;font-size:16px;}}.animation.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;background:white;top:50px;right:5vw;width:50px;height:50px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSlMsQUFHc0IsQUFJVSxBQVFHLEFBY1QsQUFNRSxBQU1GLEFBTUQsQUFRRSxBQUlBLEFBR0EsQUFLRCxTQTlEaEIsRUF5QmlCLENBa0JDLEFBWWYsQUFHaUIsQ0FyQkosQ0FjZixLQWhEZSxHQVFnQyxDQWdCN0MsSUEzQkYsQUE0Q21CLEFBZWpCLEtBdkRhLFlBeUNLLENBeENZLGlCQXlDZixLQWxDWSxPQW1CZixBQWdDTSxDQXpESyxFQXlDVCxPQWZFLEdBTUMsSUFVbkIsQ0FnQm1CLEVBbkRLLElBb0J0QixXQWdDUyxPQW5ERyxFQW9ERixVQW5ERyxBQW9ERixXQUNDLEVBcERBLFNBdUJhLENBOEJWLEVBcERGLGFBcURmLFFBL0RxQixxREFXSSxvQkFzQnpCLG9CQWhDQSwyREFXdUIscUdBQ0Qsb0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL2ZvbnRzLmNzcydcclxuaW1wb3J0IGxvdHRpZSBmcm9tICdsb3R0aWUtd2ViJ1xyXG5pbXBvcnQgKiBhcyBhbmltYXRpb25EYXRhIGZyb20gJy4uL3B1YmxpYy9idXJnZXItYW5pbWF0aW9uLWxvdHRpZS5qc29uJ1xyXG5pbXBvcnQgRGV0YWxsZSBmcm9tICcuLi9jb21wb25lbnRzL0RldGFsbGUnXHJcbmZ1bmN0aW9uIEhvbWUgKCkge1xyXG4gIGNvbnN0IGJyYW5kcyA9IFtcclxuICAgIHtsYWJlbDogJ2ZvcmQnLGltZzogJ0JJVFRfMDEnLH0sXHJcbiAgICB7bGFiZWw6ICd2b2xrc3dhZ2VuJywgaW1nOiBcIkJJVFRfMDJcIn0sXHJcbiAgICB7bGFiZWw6ICdjb2NhLWNvbGEnLCBpbWc6IFwiQklUVF8wM1wifSxcclxuICAgIHtsYWJlbDogJ25lc2NhZmUnLCBpbWc6IFwiQklUVF8wNFwifSxcclxuICAgIHtsYWJlbDogJ21hbnphbmFkYScsIGltZzogXCJCSVRUXzA1XCJ9LFxyXG4gICAge2xhYmVsOiAnYXhpb24nLCBpbWc6IFwiQklUVF8wNlwifSxcclxuICAgIHtsYWJlbDogJ2NhdHN1cCcsIGltZzogXCJCSVRUXzA3XCJ9LFxyXG4gICAge2xhYmVsOiAnYmFuY28gZGUgYm9zcXVlcycsIGltZzogXCJCSVRUXzA4XCJ9LFxyXG4gICAge2xhYmVsOiAnZHJhbGlvbicsIGltZzogXCJCSVRUXzA5XCJ9LFxyXG4gICAge2xhYmVsOiAnZWxpdGUnLCBpbWc6IFwiQklUVF8xMFwifSxcclxuICAgIHtsYWJlbDogJ2ZyaXRvcycsIGltZzogXCJCSVRUXzAxXCJ9LFxyXG4gICAge2xhYmVsOiAnZ2NiYScsIGltZzogXCJCSVRUXzAyXCJ9LFxyXG4gICAge2xhYmVsOiAnZ290IG1pbGsnLCBpbWc6IFwiQklUVF8wM1wifSxcclxuICAgIHtsYWJlbDogJ25pdmVhJywgaW1nOiBcIkJJVFRfMDRcIn0sXHJcbiAgICB7bGFiZWw6ICdwb3dlcmFkZScsIGltZzogXCJCSVRUXzA1XCJ9LFxyXG4gICAge2xhYmVsOiAndmlsbGF2aWNlbmNpbycsIGltZzogXCJCSVRUXzA2XCJ9LFxyXG4gIF1cclxuICBjb25zdCBhbmltYXRpb25Db250YWluZXIgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBhbmltYXRpb25EaXJlY3Rpb24gPSB1c2VSZWYoJ2ZvcndhcmQnKTtcclxuICBjb25zdCBhbmltYXRpb24gPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBbYW5pbWF0aW9uU3RhdGUsIHNldEFuaW1hdGlvblN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKSBcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKGJyYW5kcyk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGFuaW1hdGlvbkNvbnRhaW5lcilcclxuICAgIGNvbnNvbGUubG9nKCdhbmltYXRpb25Db250YWluZXInKVxyXG4gICAgYW5pbWF0aW9uLmN1cnJlbnQgPSBsb3R0aWUubG9hZEFuaW1hdGlvbih7XHJcbiAgICAgIGNvbnRhaW5lcjogYW5pbWF0aW9uQ29udGFpbmVyLmN1cnJlbnQsIC8vIHRoZSBkb20gZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgIHJlbmRlcmVyOiAnc3ZnJyxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICBwYXRoOiAnL2J1cmdlci1hbmltYXRpb24tbG90dGllLmpzb24nIC8vIHRoZSBwYXRoIHRvIHRoZSBhbmltYXRpb24ganNvblxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhhbmltYXRpb24uY3VycmVudClcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBhbmltYXRpb24uY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdlbnRlckZyYW1lJywgZSA9PiB7XHJcbiAgICAgICAgZGVidWdnZXJcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGltZSA+PSAyNyAmJiBhbmltYXRpb25EaXJlY3Rpb24uY3VycmVudCAhPT0gJ2JhY2snKSB7XHJcbiAgICAgICAgICBhbmltYXRpb25EaXJlY3Rpb24uY3VycmVudCA9ICdiYWNrJ1xyXG4gICAgICAgICAgYW5pbWF0aW9uLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuY3VycmVudFRpbWUgPCAyNSAmJiBhbmltYXRpb25EaXJlY3Rpb24uY3VycmVudCAhPT0gJ2ZvcndhcmQnKSB7XHJcbiAgICAgICAgICBhbmltYXRpb25EaXJlY3Rpb24uY3VycmVudCA9ICdmb3J3YXJkJ1xyXG4gICAgICAgICAgYW5pbWF0aW9uLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LCAyMDAwKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoYWN0aXZlID09IDE1KSByZXR1cm4gc2V0QWN0aXZlKDApXHJcbiAgICAgIGNvbnN0IGluY3JlbWVudCA9IGFjdGl2ZSArIDE7XHJcbiAgICAgIHNldEFjdGl2ZShpbmNyZW1lbnQpO1xyXG4gICAgfSwgMzAwMClcclxuICAgIHNldFRpbWVyKHRpbWVyKVxyXG4gIH0sIFthY3RpdmVdKVxyXG5cclxuICBjb25zdCBoYW5kbGVIb3ZlciA9IGkgPT4ge1xyXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIHNldEFjdGl2ZShpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVBbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgICBhbmltYXRpb24uY3VycmVudC5wbGF5KClcclxuICB9XHJcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsIFxyXG4gICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uRGF0YSxcclxuICAgIHJlbmRlcmVyU2V0dGluZ3M6IHtcclxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkIHNsaWNlJ1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSG9tZVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvXCI+XHJcbiAgICAgICAgPGRpdiByZWY9e2FuaW1hdGlvbkNvbnRhaW5lcn0gb25DbGljaz17aGFuZGxlQW5pbWF0aW9ufSBjbGFzc05hbWU9XCJhbmltYXRpb25cIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2F0ZXItbWFya1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi93YXRlci1tYXJrLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJhbmRzLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gJHthY3RpdmUgPT0gaSA/ICdhY3RpdmUnOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVIb3ZlcihpKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERldGFsbGUgLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRydW5rXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL0RydWtXaWRlLU1lZGl1bS5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJEcnVua1wiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9EcnVrV2lkZS1Cb2xkLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJUVFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9UVC1Ib3Zlcy1FeHRyYUxpZ2h0Lm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJUVFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9UVC1Ib3Zlcy1NZWRpdW0ub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbChib2R5KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuSGVybyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFQ0U2REU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7YC8ke2l0ZW1zW2FjdGl2ZV0uaW1nfS5qcGdgfSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODgwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDB2dztcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciAud2F0ZXItbWFyayBpbWcge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IC5pdGVtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogRHJ1bms7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNBN0ExOUE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSAuaXRlbS5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzE0MTMxMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tZW51IC5pdGVtIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW5pbWF0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICByaWdodDogNXZ3O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbnsvKiA8ZGl2IGNsYXNzTmFtZT1cIkRldGFsbGVcIj48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJMaXN0YWRvXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+SXRlbTwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicGllXCI+UGllPC9kaXY+XHJcbjwvZGl2PiAqL30iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */")));
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
//# sourceMappingURL=index.js.364b66e87f91900a6e7b.hot-update.js.map