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
      animation.current.goToAndPlay(0, true);
      animation.current.addEventListener('enterFrame', function (e) {
        if (e.currentTime >= 27) {
          animation.current.pause();
        }
      });
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
    window.removeEventListener("enterFrame", animation.current);
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
      lineNumber: 78
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Home"), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "\n            "), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "Hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    ref: animationContainer,
    onClick: handleAnimation,
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "video-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "water-mark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("img", {
    src: "/water-mark.svg",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
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
        lineNumber: 102
      },
      __self: this
    }, item.label.toUpperCase());
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "589421798",
    __self: this
  }, "@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Medium.otf\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Bold.otf\");font-weight:bold;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-ExtraLight.otf\");font-weight:lighter;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-Medium.otf\");font-weight:normal;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSFMsQUFJaUMsQUFNQSxBQU1ILEFBTUEsaUJBTG1CLEFBTUosR0FsQkEsQUFNRiw2QkFhWCxDQVpGLEVBTkUsQ0FZQyxjQUxGLENBWUEsR0FsQkEsRUFZQSxZQUxwQixDQVlBLEdBbEJBLEVBWUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlbGl0b1xcYml0dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZm9udHMuY3NzJ1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCAqIGFzIGFuaW1hdGlvbkRhdGEgZnJvbSAnLi4vcHVibGljL2J1cmdlci1hbmltYXRpb24tbG90dGllLmpzb24nXHJcblxyXG5mdW5jdGlvbiBIb21lICgpIHtcclxuICBjb25zdCBicmFuZHMgPSBbXHJcbiAgICB7bGFiZWw6ICdmb3JkJyxpbWc6ICdCSVRUXzAxJyx9LFxyXG4gICAge2xhYmVsOiAndm9sa3N3YWdlbicsIGltZzogXCJCSVRUXzAyXCJ9LFxyXG4gICAge2xhYmVsOiAnY29jYS1jb2xhJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduZXNjYWZlJywgaW1nOiBcIkJJVFRfMDRcIn0sXHJcbiAgICB7bGFiZWw6ICdtYW56YW5hZGEnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ2F4aW9uJywgaW1nOiBcIkJJVFRfMDZcIn0sXHJcbiAgICB7bGFiZWw6ICdjYXRzdXAnLCBpbWc6IFwiQklUVF8wN1wifSxcclxuICAgIHtsYWJlbDogJ2JhbmNvIGRlIGJvc3F1ZXMnLCBpbWc6IFwiQklUVF8wOFwifSxcclxuICAgIHtsYWJlbDogJ2RyYWxpb24nLCBpbWc6IFwiQklUVF8wOVwifSxcclxuICAgIHtsYWJlbDogJ2VsaXRlJywgaW1nOiBcIkJJVFRfMTBcIn0sXHJcbiAgICB7bGFiZWw6ICdmcml0b3MnLCBpbWc6IFwiQklUVF8wMVwifSxcclxuICAgIHtsYWJlbDogJ2djYmEnLCBpbWc6IFwiQklUVF8wMlwifSxcclxuICAgIHtsYWJlbDogJ2dvdCBtaWxrJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduaXZlYScsIGltZzogXCJCSVRUXzA0XCJ9LFxyXG4gICAge2xhYmVsOiAncG93ZXJhZGUnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ3ZpbGxhdmljZW5jaW8nLCBpbWc6IFwiQklUVF8wNlwifSxcclxuICBdXHJcbiAgY29uc3QgYW5pbWF0aW9uQ29udGFpbmVyID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2FuaW1hdGlvblN0YXRlLCBzZXRBbmltYXRpb25TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShicmFuZHMpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhbmltYXRpb25Db250YWluZXIpXHJcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0aW9uQ29udGFpbmVyJylcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50ID0gbG90dGllLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICBjb250YWluZXI6IGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50LCAvLyB0aGUgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICByZW5kZXJlcjogJ3N2ZycsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgcGF0aDogJy9idXJnZXItYW5pbWF0aW9uLWxvdHRpZS5qc29uJyAvLyB0aGUgcGF0aCB0byB0aGUgYW5pbWF0aW9uIGpzb25cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uLmN1cnJlbnQpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQuZ29Ub0FuZFBsYXkoMCwgdHJ1ZSlcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJGcmFtZScsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUaW1lID49IDI3KSB7XHJcbiAgICAgICAgICBhbmltYXRpb24uY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sIDEwMDApXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChhY3RpdmUgPT0gMTUpIHJldHVybiBzZXRBY3RpdmUoMClcclxuICAgICAgY29uc3QgaW5jcmVtZW50ID0gYWN0aXZlICsgMTtcclxuICAgICAgc2V0QWN0aXZlKGluY3JlbWVudCk7XHJcbiAgICB9LCAzMDAwKVxyXG4gICAgc2V0VGltZXIodGltZXIpXHJcbiAgfSwgW2FjdGl2ZV0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gaSA9PiB7XHJcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgc2V0QWN0aXZlKGkpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZW50ZXJGcmFtZVwiLCBhbmltYXRpb24uY3VycmVudClcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50LnBsYXkoKVxyXG4gIH1cclxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSwgXHJcbiAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb25EYXRhLFxyXG4gICAgcmVuZGVyZXJTZXR0aW5nczoge1xyXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgc2xpY2UnXHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIb21lXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9cIj5cclxuICAgICAgICA8ZGl2IHJlZj17YW5pbWF0aW9uQ29udGFpbmVyfSBvbkNsaWNrPXtoYW5kbGVBbmltYXRpb259IGNsYXNzTmFtZT1cImFuaW1hdGlvblwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXRlci1tYXJrXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3dhdGVyLW1hcmsuc3ZnXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZHMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbSAke2FjdGl2ZSA9PSBpID8gJ2FjdGl2ZSc6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKGkpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRHJ1bmtcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvRHJ1a1dpZGUtTWVkaXVtLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRydW5rXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL0RydWtXaWRlLUJvbGQub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRUXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL1RULUhvdmVzLUV4dHJhTGlnaHQub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRUXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL1RULUhvdmVzLU1lZGl1bS5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkhlcm8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUNFNkRFO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2AvJHtpdGVtc1thY3RpdmVdLmltZ30uanBnYH0pO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4ODBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg4MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52aWRlby1jb250YWluZXIgLndhdGVyLW1hcmsgaW1nIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4ODBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSAuaXRlbSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IERydW5rO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQTdBMTlBO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgLml0ZW0uYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxNDEzMTM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDB2dztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWVudSAuaXRlbSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFuaW1hdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuey8qIDxkaXYgY2xhc3NOYW1lPVwiRGV0YWxsZVwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cIkxpc3RhZG9cIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5JdGVtPC9kaXY+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJwaWVcIj5QaWU8L2Rpdj5cclxuPC9kaXY+ICovfSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1242730136",
    dynamic: ["/".concat(items[active].img, ".jpg")],
    __self: this
  }, "body{margin:0;}.Hero.__jsx-style-dynamic-selector{background:#ECE6DE;height:100vh;display:grid;grid-template-columns:50% 50%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.video-container.__jsx-style-dynamic-selector{justify-self:flex-end;background:url(".concat("/".concat(items[active].img, ".jpg"), ");background-position:center;background-size:cover;margin:50px;height:880px;width:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding-bottom:28px;}@media screen and (max-width:1600px){.video-container.__jsx-style-dynamic-selector{width:40vw;height:40vw;}.video-container.__jsx-style-dynamic-selector .water-mark.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:80%;margin:0 auto;}}.menu.__jsx-style-dynamic-selector{height:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:40px;font-size:40px;font-weight:bold;font-family:Drunk;cursor:pointer;color:#A7A19A;}.menu.__jsx-style-dynamic-selector .item.active.__jsx-style-dynamic-selector{color:#141313;}@media screen and (max-width:1600px){.menu.__jsx-style-dynamic-selector{height:40vw;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:16px;font-size:16px;}}.animation.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;background:white;top:0;right:0;width:128px;height:128px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SVMsQUFHc0IsQUFHVSxBQVFHLEFBY1QsQUFNRSxBQU1GLEFBTUQsQUFRRSxBQUlBLEFBR0EsQUFLRCxTQTlEZixFQXlCZ0IsQ0FrQkMsQUFZZixBQUdpQixDQXJCSixDQWNmLEtBaERlLEdBUWdDLENBZ0I3QyxJQWlCaUIsQUFlakIsS0F2RGEsWUF5Q0ssQ0F4Q1ksaUJBeUNmLEtBbENZLE9BbUJmLEFBZ0NNLENBekRLLEVBeUNULE9BZkUsR0FNQyxJQVVuQixDQWdCbUIsRUFuREssSUFvQnRCLFdBZ0NNLE1BQ0UsQ0FwREksT0FxREEsS0FwREMsT0FxREEsTUFwREQsT0FxRGQsRUE5QjJCLEdBdEJaLHFCQVZNLHFEQVdJLG9CQXNCekIsb0JBaENBLDJEQVd1QixxR0FDRCxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlbGl0b1xcYml0dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZm9udHMuY3NzJ1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCAqIGFzIGFuaW1hdGlvbkRhdGEgZnJvbSAnLi4vcHVibGljL2J1cmdlci1hbmltYXRpb24tbG90dGllLmpzb24nXHJcblxyXG5mdW5jdGlvbiBIb21lICgpIHtcclxuICBjb25zdCBicmFuZHMgPSBbXHJcbiAgICB7bGFiZWw6ICdmb3JkJyxpbWc6ICdCSVRUXzAxJyx9LFxyXG4gICAge2xhYmVsOiAndm9sa3N3YWdlbicsIGltZzogXCJCSVRUXzAyXCJ9LFxyXG4gICAge2xhYmVsOiAnY29jYS1jb2xhJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduZXNjYWZlJywgaW1nOiBcIkJJVFRfMDRcIn0sXHJcbiAgICB7bGFiZWw6ICdtYW56YW5hZGEnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ2F4aW9uJywgaW1nOiBcIkJJVFRfMDZcIn0sXHJcbiAgICB7bGFiZWw6ICdjYXRzdXAnLCBpbWc6IFwiQklUVF8wN1wifSxcclxuICAgIHtsYWJlbDogJ2JhbmNvIGRlIGJvc3F1ZXMnLCBpbWc6IFwiQklUVF8wOFwifSxcclxuICAgIHtsYWJlbDogJ2RyYWxpb24nLCBpbWc6IFwiQklUVF8wOVwifSxcclxuICAgIHtsYWJlbDogJ2VsaXRlJywgaW1nOiBcIkJJVFRfMTBcIn0sXHJcbiAgICB7bGFiZWw6ICdmcml0b3MnLCBpbWc6IFwiQklUVF8wMVwifSxcclxuICAgIHtsYWJlbDogJ2djYmEnLCBpbWc6IFwiQklUVF8wMlwifSxcclxuICAgIHtsYWJlbDogJ2dvdCBtaWxrJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduaXZlYScsIGltZzogXCJCSVRUXzA0XCJ9LFxyXG4gICAge2xhYmVsOiAncG93ZXJhZGUnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ3ZpbGxhdmljZW5jaW8nLCBpbWc6IFwiQklUVF8wNlwifSxcclxuICBdXHJcbiAgY29uc3QgYW5pbWF0aW9uQ29udGFpbmVyID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2FuaW1hdGlvblN0YXRlLCBzZXRBbmltYXRpb25TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShicmFuZHMpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhbmltYXRpb25Db250YWluZXIpXHJcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0aW9uQ29udGFpbmVyJylcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50ID0gbG90dGllLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICBjb250YWluZXI6IGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50LCAvLyB0aGUgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICByZW5kZXJlcjogJ3N2ZycsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgcGF0aDogJy9idXJnZXItYW5pbWF0aW9uLWxvdHRpZS5qc29uJyAvLyB0aGUgcGF0aCB0byB0aGUgYW5pbWF0aW9uIGpzb25cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uLmN1cnJlbnQpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQuZ29Ub0FuZFBsYXkoMCwgdHJ1ZSlcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJGcmFtZScsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUaW1lID49IDI3KSB7XHJcbiAgICAgICAgICBhbmltYXRpb24uY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sIDEwMDApXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChhY3RpdmUgPT0gMTUpIHJldHVybiBzZXRBY3RpdmUoMClcclxuICAgICAgY29uc3QgaW5jcmVtZW50ID0gYWN0aXZlICsgMTtcclxuICAgICAgc2V0QWN0aXZlKGluY3JlbWVudCk7XHJcbiAgICB9LCAzMDAwKVxyXG4gICAgc2V0VGltZXIodGltZXIpXHJcbiAgfSwgW2FjdGl2ZV0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gaSA9PiB7XHJcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgc2V0QWN0aXZlKGkpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZW50ZXJGcmFtZVwiLCBhbmltYXRpb24uY3VycmVudClcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50LnBsYXkoKVxyXG4gIH1cclxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSwgXHJcbiAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb25EYXRhLFxyXG4gICAgcmVuZGVyZXJTZXR0aW5nczoge1xyXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgc2xpY2UnXHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIb21lXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9cIj5cclxuICAgICAgICA8ZGl2IHJlZj17YW5pbWF0aW9uQ29udGFpbmVyfSBvbkNsaWNrPXtoYW5kbGVBbmltYXRpb259IGNsYXNzTmFtZT1cImFuaW1hdGlvblwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXRlci1tYXJrXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3dhdGVyLW1hcmsuc3ZnXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZHMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbSAke2FjdGl2ZSA9PSBpID8gJ2FjdGl2ZSc6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKGkpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRHJ1bmtcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoXCIvRHJ1a1dpZGUtTWVkaXVtLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRydW5rXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL0RydWtXaWRlLUJvbGQub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRUXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL1RULUhvdmVzLUV4dHJhTGlnaHQub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRUXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL1RULUhvdmVzLU1lZGl1bS5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkhlcm8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUNFNkRFO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2AvJHtpdGVtc1thY3RpdmVdLmltZ30uanBnYH0pO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4ODBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg4MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52aWRlby1jb250YWluZXIgLndhdGVyLW1hcmsgaW1nIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4ODBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSAuaXRlbSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IERydW5rO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQTdBMTlBO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgLml0ZW0uYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxNDEzMTM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDB2dztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWVudSAuaXRlbSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFuaW1hdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuey8qIDxkaXYgY2xhc3NOYW1lPVwiRGV0YWxsZVwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cIkxpc3RhZG9cIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5JdGVtPC9kaXY+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJwaWVcIj5QaWU8L2Rpdj5cclxuPC9kaXY+ICovfSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */")));
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
//# sourceMappingURL=index.js.2b6a3d75908cc5380fde.hot-update.js.map