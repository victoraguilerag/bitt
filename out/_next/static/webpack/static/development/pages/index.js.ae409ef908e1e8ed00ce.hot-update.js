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
    detalle.scrollIntoView({
      behavior: 'smooth'
    });
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
      lineNumber: 91
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Home"), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "\n            "), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), __jsx("div", {
    id: "Hero",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "Hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    ref: animationContainer,
    onClick: handleAnimation,
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "video-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "water-mark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("img", {
    src: "/water-mark.svg",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["162032214", ["/".concat(items[active].img, ".jpg")]]]) + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
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
        lineNumber: 115
      },
      __self: this
    }, item.label.toUpperCase());
  }))), __jsx(_components_Detalle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selected: selected,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "589421798",
    __self: this
  }, "@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Medium.otf\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Bold.otf\");font-weight:bold;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-ExtraLight.otf\");font-weight:lighter;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-Medium.otf\");font-weight:normal;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSVMsQUFJaUMsQUFNQSxBQU1ILEFBTUEsaUJBTG1CLEFBTUosR0FsQkEsQUFNRiw2QkFhWCxDQVpGLEVBTkUsQ0FZQyxjQUxGLENBWUEsR0FsQkEsRUFZQSxZQUxwQixDQVlBLEdBbEJBLEVBWUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlbGl0b1xcYml0dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZm9udHMuY3NzJ1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCAqIGFzIGFuaW1hdGlvbkRhdGEgZnJvbSAnLi4vcHVibGljL2J1cmdlci1hbmltYXRpb24tbG90dGllLmpzb24nXHJcbmltcG9ydCBEZXRhbGxlIGZyb20gJy4uL2NvbXBvbmVudHMvRGV0YWxsZSdcclxuZnVuY3Rpb24gSG9tZSAoKSB7XHJcbiAgY29uc3QgYnJhbmRzID0gW1xyXG4gICAge2xhYmVsOiAnZm9yZCcsaW1nOiAnQklUVF8wMScsfSxcclxuICAgIHtsYWJlbDogJ3ZvbGtzd2FnZW4nLCBpbWc6IFwiQklUVF8wMlwifSxcclxuICAgIHtsYWJlbDogJ2NvY2EtY29sYScsIGltZzogXCJCSVRUXzAzXCJ9LFxyXG4gICAge2xhYmVsOiAnbmVzY2FmZScsIGltZzogXCJCSVRUXzA0XCJ9LFxyXG4gICAge2xhYmVsOiAnbWFuemFuYWRhJywgaW1nOiBcIkJJVFRfMDVcIn0sXHJcbiAgICB7bGFiZWw6ICdheGlvbicsIGltZzogXCJCSVRUXzA2XCJ9LFxyXG4gICAge2xhYmVsOiAnY2F0c3VwJywgaW1nOiBcIkJJVFRfMDdcIn0sXHJcbiAgICB7bGFiZWw6ICdiYW5jbyBkZSBib3NxdWVzJywgaW1nOiBcIkJJVFRfMDhcIn0sXHJcbiAgICB7bGFiZWw6ICdkcmFsaW9uJywgaW1nOiBcIkJJVFRfMDlcIn0sXHJcbiAgICB7bGFiZWw6ICdlbGl0ZScsIGltZzogXCJCSVRUXzEwXCJ9LFxyXG4gICAge2xhYmVsOiAnZnJpdG9zJywgaW1nOiBcIkJJVFRfMDFcIn0sXHJcbiAgICB7bGFiZWw6ICdnY2JhJywgaW1nOiBcIkJJVFRfMDJcIn0sXHJcbiAgICB7bGFiZWw6ICdnb3QgbWlsaycsIGltZzogXCJCSVRUXzAzXCJ9LFxyXG4gICAge2xhYmVsOiAnbml2ZWEnLCBpbWc6IFwiQklUVF8wNFwifSxcclxuICAgIHtsYWJlbDogJ3Bvd2VyYWRlJywgaW1nOiBcIkJJVFRfMDVcIn0sXHJcbiAgICB7bGFiZWw6ICd2aWxsYXZpY2VuY2lvJywgaW1nOiBcIkJJVFRfMDZcIn0sXHJcbiAgXVxyXG4gIGNvbnN0IGFuaW1hdGlvbkNvbnRhaW5lciA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGFuaW1hdGlvbkRpcmVjdGlvbiA9IHVzZVJlZignZm9yd2FyZCcpO1xyXG4gIGNvbnN0IGFuaW1hdGlvbiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IFthbmltYXRpb25TdGF0ZSwgc2V0QW5pbWF0aW9uU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpIFxyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoYnJhbmRzKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjY3RlZF0gPSB1c2VTdGF0ZShpdGVtc1swXSlcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uQ29udGFpbmVyKVxyXG4gICAgY29uc29sZS5sb2coJ2FuaW1hdGlvbkNvbnRhaW5lcicpXHJcbiAgICBhbmltYXRpb24uY3VycmVudCA9IGxvdHRpZS5sb2FkQW5pbWF0aW9uKHtcclxuICAgICAgY29udGFpbmVyOiBhbmltYXRpb25Db250YWluZXIuY3VycmVudCwgLy8gdGhlIGRvbSBlbGVtZW50IHRoYXQgd2lsbCBjb250YWluIHRoZSBhbmltYXRpb25cclxuICAgICAgcmVuZGVyZXI6ICdzdmcnLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgIHBhdGg6ICcvYnVyZ2VyLWFuaW1hdGlvbi1sb3R0aWUuanNvbicgLy8gdGhlIHBhdGggdG8gdGhlIGFuaW1hdGlvbiBqc29uXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGFuaW1hdGlvbi5jdXJyZW50KVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGFuaW1hdGlvbi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VudGVyRnJhbWUnLCBlID0+IHtcclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUaW1lID49IDI3ICYmIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ICE9PSAnYmFjaycpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ID0gJ2JhY2snXHJcbiAgICAgICAgICBhbmltYXRpb24uY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGltZSA8IDI1ICYmIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ICE9PSAnZm9yd2FyZCcpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbkRpcmVjdGlvbi5jdXJyZW50ID0gJ2ZvcndhcmQnXHJcbiAgICAgICAgICBhbmltYXRpb24uY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sIDIwMDApXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgIGlmIChhY3RpdmUgPT0gMTUpIHJldHVybiBzZXRBY3RpdmUoMClcclxuICAgIC8vICAgY29uc3QgaW5jcmVtZW50ID0gYWN0aXZlICsgMTtcclxuICAgIC8vICAgc2V0QWN0aXZlKGluY3JlbWVudCk7XHJcbiAgICAvLyB9LCAzMDAwKVxyXG4gICAgLy8gc2V0VGltZXIodGltZXIpXHJcbiAgfSwgW2FjdGl2ZV0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUl0ZW0gPSBpID0+IHtcclxuICAgIHNldFNlbGVjY3RlZChpdGVtc1tpXSk7XHJcbiAgICBjb25zdCBkZXRhbGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFsbGUnKTtcclxuICAgIGRldGFsbGUuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVIb3ZlciA9IGkgPT4ge1xyXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIHNldEFjdGl2ZShpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVBbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgICBhbmltYXRpb24uY3VycmVudC5wbGF5KClcclxuICB9XHJcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsIFxyXG4gICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uRGF0YSxcclxuICAgIHJlbmRlcmVyU2V0dGluZ3M6IHtcclxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkIHNsaWNlJ1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSG9tZVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBpZD1cIkhlcm9cIiBjbGFzc05hbWU9XCJIZXJvXCI+XHJcbiAgICAgICAgPGRpdiByZWY9e2FuaW1hdGlvbkNvbnRhaW5lcn0gb25DbGljaz17aGFuZGxlQW5pbWF0aW9ufSBjbGFzc05hbWU9XCJhbmltYXRpb25cIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2F0ZXItbWFya1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi93YXRlci1tYXJrLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJhbmRzLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gJHthY3RpdmUgPT0gaSA/ICdhY3RpdmUnOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVIb3ZlcihpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW0oaSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWwudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEZXRhbGxlIHNlbGVjdGVkPXtzZWxlY3RlZH0gLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRydW5rXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL0RydWtXaWRlLU1lZGl1bS5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJEcnVua1wiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9EcnVrV2lkZS1Cb2xkLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJUVFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9UVC1Ib3Zlcy1FeHRyYUxpZ2h0Lm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJUVFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9UVC1Ib3Zlcy1NZWRpdW0ub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbChib2R5KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkhlcm8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUNFNkRFO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2AvJHtpdGVtc1thY3RpdmVdLmltZ30uanBnYH0pO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4ODBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg4MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52aWRlby1jb250YWluZXIgLndhdGVyLW1hcmsgaW1nIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4ODBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSAuaXRlbSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IERydW5rO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQTdBMTlBO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgLml0ZW0uYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxNDEzMTM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDB2dztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWVudSAuaXRlbSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFuaW1hdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDV2dztcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG57LyogPGRpdiBjbGFzc05hbWU9XCJEZXRhbGxlXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiTGlzdGFkb1wiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPkl0ZW08L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInBpZVwiPlBpZTwvZGl2PlxyXG48L2Rpdj4gKi99Il19 */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "162032214",
    dynamic: ["/".concat(items[active].img, ".jpg")],
    __self: this
  }, "body{margin:0;overflow-y:hidden;}.Hero.__jsx-style-dynamic-selector{background:#ECE6DE;height:100vh;display:grid;grid-template-columns:50% 50%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.video-container.__jsx-style-dynamic-selector{justify-self:flex-end;background:url(".concat("/".concat(items[active].img, ".jpg"), ");background-position:center;background-size:cover;margin:50px;height:880px;width:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding-bottom:28px;}@media screen and (max-width:1600px){.video-container.__jsx-style-dynamic-selector{width:40vw;height:40vw;}.video-container.__jsx-style-dynamic-selector .water-mark.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:80%;margin:0 auto;}}.menu.__jsx-style-dynamic-selector{height:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:40px;font-size:40px;font-weight:bold;font-family:Drunk;cursor:pointer;color:#A7A19A;}.menu.__jsx-style-dynamic-selector .item.active.__jsx-style-dynamic-selector{color:#141313;}@media screen and (max-width:1600px){.menu.__jsx-style-dynamic-selector{height:40vw;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:16px;font-size:16px;}}.animation.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;background:white;top:50px;right:5vw;width:50px;height:50px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SlMsQUFHc0IsQUFJVSxBQVFHLEFBY1QsQUFNRSxBQU1GLEFBTUQsQUFRRSxBQUlBLEFBR0EsQUFLRCxTQS9ESyxFQTBCSixDQWtCQyxBQVlmLEFBR2lCLENBckJKLENBY2YsS0FoRGUsR0FRZ0MsQ0FnQjdDLElBM0JGLEFBNENtQixBQWVqQixLQXZEYSxZQXlDSyxDQXhDWSxpQkF5Q2YsS0FsQ1ksT0FtQmYsQUFnQ00sQ0F6REssRUF5Q1QsT0FmRSxHQU1DLElBVW5CLENBZ0JtQixFQW5ESyxJQW9CdEIsV0FnQ1MsT0FuREcsRUFvREYsVUFuREcsQUFvREYsV0FDQyxFQXBEQSxTQXVCYSxDQThCVixFQXBERixhQXFEZixRQS9EcUIscURBV0ksb0JBc0J6QixvQkFoQ0EsMkRBV3VCLHFHQUNELG9CQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXGpvc2VsaXRvXFxiaXR0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9mb250cy5jc3MnXHJcbmltcG9ydCBsb3R0aWUgZnJvbSAnbG90dGllLXdlYidcclxuaW1wb3J0ICogYXMgYW5pbWF0aW9uRGF0YSBmcm9tICcuLi9wdWJsaWMvYnVyZ2VyLWFuaW1hdGlvbi1sb3R0aWUuanNvbidcclxuaW1wb3J0IERldGFsbGUgZnJvbSAnLi4vY29tcG9uZW50cy9EZXRhbGxlJ1xyXG5mdW5jdGlvbiBIb21lICgpIHtcclxuICBjb25zdCBicmFuZHMgPSBbXHJcbiAgICB7bGFiZWw6ICdmb3JkJyxpbWc6ICdCSVRUXzAxJyx9LFxyXG4gICAge2xhYmVsOiAndm9sa3N3YWdlbicsIGltZzogXCJCSVRUXzAyXCJ9LFxyXG4gICAge2xhYmVsOiAnY29jYS1jb2xhJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduZXNjYWZlJywgaW1nOiBcIkJJVFRfMDRcIn0sXHJcbiAgICB7bGFiZWw6ICdtYW56YW5hZGEnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ2F4aW9uJywgaW1nOiBcIkJJVFRfMDZcIn0sXHJcbiAgICB7bGFiZWw6ICdjYXRzdXAnLCBpbWc6IFwiQklUVF8wN1wifSxcclxuICAgIHtsYWJlbDogJ2JhbmNvIGRlIGJvc3F1ZXMnLCBpbWc6IFwiQklUVF8wOFwifSxcclxuICAgIHtsYWJlbDogJ2RyYWxpb24nLCBpbWc6IFwiQklUVF8wOVwifSxcclxuICAgIHtsYWJlbDogJ2VsaXRlJywgaW1nOiBcIkJJVFRfMTBcIn0sXHJcbiAgICB7bGFiZWw6ICdmcml0b3MnLCBpbWc6IFwiQklUVF8wMVwifSxcclxuICAgIHtsYWJlbDogJ2djYmEnLCBpbWc6IFwiQklUVF8wMlwifSxcclxuICAgIHtsYWJlbDogJ2dvdCBtaWxrJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduaXZlYScsIGltZzogXCJCSVRUXzA0XCJ9LFxyXG4gICAge2xhYmVsOiAncG93ZXJhZGUnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ3ZpbGxhdmljZW5jaW8nLCBpbWc6IFwiQklUVF8wNlwifSxcclxuICBdXHJcbiAgY29uc3QgYW5pbWF0aW9uQ29udGFpbmVyID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgYW5pbWF0aW9uRGlyZWN0aW9uID0gdXNlUmVmKCdmb3J3YXJkJyk7XHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2FuaW1hdGlvblN0YXRlLCBzZXRBbmltYXRpb25TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShicmFuZHMpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWNjdGVkXSA9IHVzZVN0YXRlKGl0ZW1zWzBdKVxyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhbmltYXRpb25Db250YWluZXIpXHJcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0aW9uQ29udGFpbmVyJylcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50ID0gbG90dGllLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICBjb250YWluZXI6IGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50LCAvLyB0aGUgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICByZW5kZXJlcjogJ3N2ZycsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgcGF0aDogJy9idXJnZXItYW5pbWF0aW9uLWxvdHRpZS5qc29uJyAvLyB0aGUgcGF0aCB0byB0aGUgYW5pbWF0aW9uIGpzb25cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uLmN1cnJlbnQpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJGcmFtZScsIGUgPT4ge1xyXG4gICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRpbWUgPj0gMjcgJiYgYW5pbWF0aW9uRGlyZWN0aW9uLmN1cnJlbnQgIT09ICdiYWNrJykge1xyXG4gICAgICAgICAgYW5pbWF0aW9uRGlyZWN0aW9uLmN1cnJlbnQgPSAnYmFjaydcclxuICAgICAgICAgIGFuaW1hdGlvbi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmN1cnJlbnRUaW1lIDwgMjUgJiYgYW5pbWF0aW9uRGlyZWN0aW9uLmN1cnJlbnQgIT09ICdmb3J3YXJkJykge1xyXG4gICAgICAgICAgYW5pbWF0aW9uRGlyZWN0aW9uLmN1cnJlbnQgPSAnZm9yd2FyZCdcclxuICAgICAgICAgIGFuaW1hdGlvbi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSwgMjAwMClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgaWYgKGFjdGl2ZSA9PSAxNSkgcmV0dXJuIHNldEFjdGl2ZSgwKVxyXG4gICAgLy8gICBjb25zdCBpbmNyZW1lbnQgPSBhY3RpdmUgKyAxO1xyXG4gICAgLy8gICBzZXRBY3RpdmUoaW5jcmVtZW50KTtcclxuICAgIC8vIH0sIDMwMDApXHJcbiAgICAvLyBzZXRUaW1lcih0aW1lcilcclxuICB9LCBbYWN0aXZlXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlSXRlbSA9IGkgPT4ge1xyXG4gICAgc2V0U2VsZWNjdGVkKGl0ZW1zW2ldKTtcclxuICAgIGNvbnN0IGRldGFsbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWxsZScpO1xyXG4gICAgZGV0YWxsZS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gaSA9PiB7XHJcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgc2V0QWN0aXZlKGkpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50LnBsYXkoKVxyXG4gIH1cclxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSwgXHJcbiAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb25EYXRhLFxyXG4gICAgcmVuZGVyZXJTZXR0aW5nczoge1xyXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgc2xpY2UnXHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIb21lXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwiSGVyb1wiIGNsYXNzTmFtZT1cIkhlcm9cIj5cclxuICAgICAgICA8ZGl2IHJlZj17YW5pbWF0aW9uQ29udGFpbmVyfSBvbkNsaWNrPXtoYW5kbGVBbmltYXRpb259IGNsYXNzTmFtZT1cImFuaW1hdGlvblwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXRlci1tYXJrXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3dhdGVyLW1hcmsuc3ZnXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZHMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbSAke2FjdGl2ZSA9PSBpID8gJ2FjdGl2ZSc6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbShpKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERldGFsbGUgc2VsZWN0ZWQ9e3NlbGVjdGVkfSAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRHJ1bmtcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvRHJ1a1dpZGUtTWVkaXVtLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRydW5rXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL0RydWtXaWRlLUJvbGQub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRUXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL1RULUhvdmVzLUV4dHJhTGlnaHQub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRUXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL1RULUhvdmVzLU1lZGl1bS5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuSGVybyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFQ0U2REU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7YC8ke2l0ZW1zW2FjdGl2ZV0uaW1nfS5qcGdgfSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODgwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDB2dztcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciAud2F0ZXItbWFyayBpbWcge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IC5pdGVtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogRHJ1bms7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNBN0ExOUE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSAuaXRlbS5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzE0MTMxMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tZW51IC5pdGVtIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW5pbWF0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICByaWdodDogNXZ3O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbnsvKiA8ZGl2IGNsYXNzTmFtZT1cIkRldGFsbGVcIj48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJMaXN0YWRvXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+SXRlbTwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicGllXCI+UGllPC9kaXY+XHJcbjwvZGl2PiAqL30iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */")));
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
//# sourceMappingURL=index.js.ae409ef908e1e8ed00ce.hot-update.js.map