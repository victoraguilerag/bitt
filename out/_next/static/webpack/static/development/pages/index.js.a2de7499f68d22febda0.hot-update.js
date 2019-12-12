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
          debugger;
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
      lineNumber: 79
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Home"), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\n            "), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "Hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    ref: animationContainer,
    onClick: handleAnimation,
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "video-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "water-mark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("img", {
    src: "/water-mark.svg",
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-589421798 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1242730136", ["/".concat(items[active].img, ".jpg")]]]) + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
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
        lineNumber: 103
      },
      __self: this
    }, item.label.toUpperCase());
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "589421798",
    __self: this
  }, "@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Medium.otf\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Drunk\";src:url(\"/DrukWide-Bold.otf\");font-weight:bold;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-ExtraLight.otf\");font-weight:lighter;font-style:normal;}@font-face{font-family:\"TT\";src:url(\"/TT-Hoves-Medium.otf\");font-weight:normal;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSFMsQUFJaUMsQUFNQSxBQU1ILEFBTUEsaUJBTG1CLEFBTUosR0FsQkEsQUFNRiw2QkFhWCxDQVpGLEVBTkUsQ0FZQyxjQUxGLENBWUEsR0FsQkEsRUFZQSxZQUxwQixDQVlBLEdBbEJBLEVBWUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlbGl0b1xcYml0dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZm9udHMuY3NzJ1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCAqIGFzIGFuaW1hdGlvbkRhdGEgZnJvbSAnLi4vcHVibGljL2J1cmdlci1hbmltYXRpb24tbG90dGllLmpzb24nXHJcblxyXG5mdW5jdGlvbiBIb21lICgpIHtcclxuICBjb25zdCBicmFuZHMgPSBbXHJcbiAgICB7bGFiZWw6ICdmb3JkJyxpbWc6ICdCSVRUXzAxJyx9LFxyXG4gICAge2xhYmVsOiAndm9sa3N3YWdlbicsIGltZzogXCJCSVRUXzAyXCJ9LFxyXG4gICAge2xhYmVsOiAnY29jYS1jb2xhJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduZXNjYWZlJywgaW1nOiBcIkJJVFRfMDRcIn0sXHJcbiAgICB7bGFiZWw6ICdtYW56YW5hZGEnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ2F4aW9uJywgaW1nOiBcIkJJVFRfMDZcIn0sXHJcbiAgICB7bGFiZWw6ICdjYXRzdXAnLCBpbWc6IFwiQklUVF8wN1wifSxcclxuICAgIHtsYWJlbDogJ2JhbmNvIGRlIGJvc3F1ZXMnLCBpbWc6IFwiQklUVF8wOFwifSxcclxuICAgIHtsYWJlbDogJ2RyYWxpb24nLCBpbWc6IFwiQklUVF8wOVwifSxcclxuICAgIHtsYWJlbDogJ2VsaXRlJywgaW1nOiBcIkJJVFRfMTBcIn0sXHJcbiAgICB7bGFiZWw6ICdmcml0b3MnLCBpbWc6IFwiQklUVF8wMVwifSxcclxuICAgIHtsYWJlbDogJ2djYmEnLCBpbWc6IFwiQklUVF8wMlwifSxcclxuICAgIHtsYWJlbDogJ2dvdCBtaWxrJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduaXZlYScsIGltZzogXCJCSVRUXzA0XCJ9LFxyXG4gICAge2xhYmVsOiAncG93ZXJhZGUnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ3ZpbGxhdmljZW5jaW8nLCBpbWc6IFwiQklUVF8wNlwifSxcclxuICBdXHJcbiAgY29uc3QgYW5pbWF0aW9uQ29udGFpbmVyID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2FuaW1hdGlvblN0YXRlLCBzZXRBbmltYXRpb25TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShicmFuZHMpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhbmltYXRpb25Db250YWluZXIpXHJcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0aW9uQ29udGFpbmVyJylcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50ID0gbG90dGllLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICBjb250YWluZXI6IGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50LCAvLyB0aGUgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICByZW5kZXJlcjogJ3N2ZycsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgcGF0aDogJy9idXJnZXItYW5pbWF0aW9uLWxvdHRpZS5qc29uJyAvLyB0aGUgcGF0aCB0byB0aGUgYW5pbWF0aW9uIGpzb25cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uLmN1cnJlbnQpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQuZ29Ub0FuZFBsYXkoMCwgdHJ1ZSlcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJGcmFtZScsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUaW1lID49IDI3KSB7XHJcbiAgICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgICAgYW5pbWF0aW9uLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LCAxMDAwKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoYWN0aXZlID09IDE1KSByZXR1cm4gc2V0QWN0aXZlKDApXHJcbiAgICAgIGNvbnN0IGluY3JlbWVudCA9IGFjdGl2ZSArIDE7XHJcbiAgICAgIHNldEFjdGl2ZShpbmNyZW1lbnQpO1xyXG4gICAgfSwgMzAwMClcclxuICAgIHNldFRpbWVyKHRpbWVyKVxyXG4gIH0sIFthY3RpdmVdKVxyXG5cclxuICBjb25zdCBoYW5kbGVIb3ZlciA9IGkgPT4ge1xyXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIHNldEFjdGl2ZShpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVBbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVudGVyRnJhbWVcIiwgYW5pbWF0aW9uLmN1cnJlbnQpXHJcbiAgICBhbmltYXRpb24uY3VycmVudC5wbGF5KClcclxuICB9XHJcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsIFxyXG4gICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uRGF0YSxcclxuICAgIHJlbmRlcmVyU2V0dGluZ3M6IHtcclxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkIHNsaWNlJ1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSG9tZVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvXCI+XHJcbiAgICAgICAgPGRpdiByZWY9e2FuaW1hdGlvbkNvbnRhaW5lcn0gb25DbGljaz17aGFuZGxlQW5pbWF0aW9ufSBjbGFzc05hbWU9XCJhbmltYXRpb25cIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2F0ZXItbWFya1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi93YXRlci1tYXJrLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJhbmRzLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gJHthY3RpdmUgPT0gaSA/ICdhY3RpdmUnOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVIb3ZlcihpKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRydW5rXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL0RydWtXaWRlLU1lZGl1bS5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJEcnVua1wiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9EcnVrV2lkZS1Cb2xkLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJUVFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9UVC1Ib3Zlcy1FeHRyYUxpZ2h0Lm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJUVFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9UVC1Ib3Zlcy1NZWRpdW0ub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbChib2R5KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5IZXJvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VDRTZERTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtgLyR7aXRlbXNbYWN0aXZlXS5pbWd9LmpwZ2B9KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODgwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4ODBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudmlkZW8tY29udGFpbmVyIC53YXRlci1tYXJrIGltZyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogODgwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgLml0ZW0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBEcnVuaztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI0E3QTE5QTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IC5pdGVtLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTQxMzEzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1lbnUgLml0ZW0ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hbmltYXRpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbnsvKiA8ZGl2IGNsYXNzTmFtZT1cIkRldGFsbGVcIj48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJMaXN0YWRvXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+SXRlbTwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicGllXCI+UGllPC9kaXY+XHJcbjwvZGl2PiAqL30iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1242730136",
    dynamic: ["/".concat(items[active].img, ".jpg")],
    __self: this
  }, "body{margin:0;}.Hero.__jsx-style-dynamic-selector{background:#ECE6DE;height:100vh;display:grid;grid-template-columns:50% 50%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.video-container.__jsx-style-dynamic-selector{justify-self:flex-end;background:url(".concat("/".concat(items[active].img, ".jpg"), ");background-position:center;background-size:cover;margin:50px;height:880px;width:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding-bottom:28px;}@media screen and (max-width:1600px){.video-container.__jsx-style-dynamic-selector{width:40vw;height:40vw;}.video-container.__jsx-style-dynamic-selector .water-mark.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:80%;margin:0 auto;}}.menu.__jsx-style-dynamic-selector{height:880px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:40px;font-size:40px;font-weight:bold;font-family:Drunk;cursor:pointer;color:#A7A19A;}.menu.__jsx-style-dynamic-selector .item.active.__jsx-style-dynamic-selector{color:#141313;}@media screen and (max-width:1600px){.menu.__jsx-style-dynamic-selector{height:40vw;}.menu.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{height:16px;font-size:16px;}}.animation.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;background:white;top:0;right:0;width:128px;height:128px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZWxpdG9cXGJpdHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSVMsQUFHc0IsQUFHVSxBQVFHLEFBY1QsQUFNRSxBQU1GLEFBTUQsQUFRRSxBQUlBLEFBR0EsQUFLRCxTQTlEZixFQXlCZ0IsQ0FrQkMsQUFZZixBQUdpQixDQXJCSixDQWNmLEtBaERlLEdBUWdDLENBZ0I3QyxJQWlCaUIsQUFlakIsS0F2RGEsWUF5Q0ssQ0F4Q1ksaUJBeUNmLEtBbENZLE9BbUJmLEFBZ0NNLENBekRLLEVBeUNULE9BZkUsR0FNQyxJQVVuQixDQWdCbUIsRUFuREssSUFvQnRCLFdBZ0NNLE1BQ0UsQ0FwREksT0FxREEsS0FwREMsT0FxREEsTUFwREQsT0FxRGQsRUE5QjJCLEdBdEJaLHFCQVZNLHFEQVdJLG9CQXNCekIsb0JBaENBLDJEQVd1QixxR0FDRCxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlbGl0b1xcYml0dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZm9udHMuY3NzJ1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCAqIGFzIGFuaW1hdGlvbkRhdGEgZnJvbSAnLi4vcHVibGljL2J1cmdlci1hbmltYXRpb24tbG90dGllLmpzb24nXHJcblxyXG5mdW5jdGlvbiBIb21lICgpIHtcclxuICBjb25zdCBicmFuZHMgPSBbXHJcbiAgICB7bGFiZWw6ICdmb3JkJyxpbWc6ICdCSVRUXzAxJyx9LFxyXG4gICAge2xhYmVsOiAndm9sa3N3YWdlbicsIGltZzogXCJCSVRUXzAyXCJ9LFxyXG4gICAge2xhYmVsOiAnY29jYS1jb2xhJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduZXNjYWZlJywgaW1nOiBcIkJJVFRfMDRcIn0sXHJcbiAgICB7bGFiZWw6ICdtYW56YW5hZGEnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ2F4aW9uJywgaW1nOiBcIkJJVFRfMDZcIn0sXHJcbiAgICB7bGFiZWw6ICdjYXRzdXAnLCBpbWc6IFwiQklUVF8wN1wifSxcclxuICAgIHtsYWJlbDogJ2JhbmNvIGRlIGJvc3F1ZXMnLCBpbWc6IFwiQklUVF8wOFwifSxcclxuICAgIHtsYWJlbDogJ2RyYWxpb24nLCBpbWc6IFwiQklUVF8wOVwifSxcclxuICAgIHtsYWJlbDogJ2VsaXRlJywgaW1nOiBcIkJJVFRfMTBcIn0sXHJcbiAgICB7bGFiZWw6ICdmcml0b3MnLCBpbWc6IFwiQklUVF8wMVwifSxcclxuICAgIHtsYWJlbDogJ2djYmEnLCBpbWc6IFwiQklUVF8wMlwifSxcclxuICAgIHtsYWJlbDogJ2dvdCBtaWxrJywgaW1nOiBcIkJJVFRfMDNcIn0sXHJcbiAgICB7bGFiZWw6ICduaXZlYScsIGltZzogXCJCSVRUXzA0XCJ9LFxyXG4gICAge2xhYmVsOiAncG93ZXJhZGUnLCBpbWc6IFwiQklUVF8wNVwifSxcclxuICAgIHtsYWJlbDogJ3ZpbGxhdmljZW5jaW8nLCBpbWc6IFwiQklUVF8wNlwifSxcclxuICBdXHJcbiAgY29uc3QgYW5pbWF0aW9uQ29udGFpbmVyID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2FuaW1hdGlvblN0YXRlLCBzZXRBbmltYXRpb25TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShicmFuZHMpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhbmltYXRpb25Db250YWluZXIpXHJcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0aW9uQ29udGFpbmVyJylcclxuICAgIGFuaW1hdGlvbi5jdXJyZW50ID0gbG90dGllLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICBjb250YWluZXI6IGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50LCAvLyB0aGUgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICByZW5kZXJlcjogJ3N2ZycsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgcGF0aDogJy9idXJnZXItYW5pbWF0aW9uLWxvdHRpZS5qc29uJyAvLyB0aGUgcGF0aCB0byB0aGUgYW5pbWF0aW9uIGpzb25cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uLmN1cnJlbnQpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQuZ29Ub0FuZFBsYXkoMCwgdHJ1ZSlcclxuICAgICAgYW5pbWF0aW9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJGcmFtZScsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUaW1lID49IDI3KSB7XHJcbiAgICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgICAgYW5pbWF0aW9uLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LCAxMDAwKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoYWN0aXZlID09IDE1KSByZXR1cm4gc2V0QWN0aXZlKDApXHJcbiAgICAgIGNvbnN0IGluY3JlbWVudCA9IGFjdGl2ZSArIDE7XHJcbiAgICAgIHNldEFjdGl2ZShpbmNyZW1lbnQpO1xyXG4gICAgfSwgMzAwMClcclxuICAgIHNldFRpbWVyKHRpbWVyKVxyXG4gIH0sIFthY3RpdmVdKVxyXG5cclxuICBjb25zdCBoYW5kbGVIb3ZlciA9IGkgPT4ge1xyXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIHNldEFjdGl2ZShpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVBbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVudGVyRnJhbWVcIiwgYW5pbWF0aW9uLmN1cnJlbnQpXHJcbiAgICBhbmltYXRpb24uY3VycmVudC5wbGF5KClcclxuICB9XHJcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsIFxyXG4gICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uRGF0YSxcclxuICAgIHJlbmRlcmVyU2V0dGluZ3M6IHtcclxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkIHNsaWNlJ1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSG9tZVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvXCI+XHJcbiAgICAgICAgPGRpdiByZWY9e2FuaW1hdGlvbkNvbnRhaW5lcn0gb25DbGljaz17aGFuZGxlQW5pbWF0aW9ufSBjbGFzc05hbWU9XCJhbmltYXRpb25cIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2F0ZXItbWFya1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi93YXRlci1tYXJrLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJhbmRzLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gJHthY3RpdmUgPT0gaSA/ICdhY3RpdmUnOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVIb3ZlcihpKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRydW5rXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL0RydWtXaWRlLU1lZGl1bS5vdGZcIik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJEcnVua1wiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9EcnVrV2lkZS1Cb2xkLm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJUVFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9UVC1Ib3Zlcy1FeHRyYUxpZ2h0Lm90ZlwiKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJUVFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChcIi9UVC1Ib3Zlcy1NZWRpdW0ub3RmXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbChib2R5KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5IZXJvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VDRTZERTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtgLyR7aXRlbXNbYWN0aXZlXS5pbWd9LmpwZ2B9KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODgwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4ODBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudmlkZW8tY29udGFpbmVyIC53YXRlci1tYXJrIGltZyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogODgwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgLml0ZW0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBEcnVuaztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI0E3QTE5QTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IC5pdGVtLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTQxMzEzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1lbnUgLml0ZW0ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hbmltYXRpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbnsvKiA8ZGl2IGNsYXNzTmFtZT1cIkRldGFsbGVcIj48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJMaXN0YWRvXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+SXRlbTwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicGllXCI+UGllPC9kaXY+XHJcbjwvZGl2PiAqL30iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\joselito\\\\bitt\\\\pages\\\\index.js */")));
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
//# sourceMappingURL=index.js.a2de7499f68d22febda0.hot-update.js.map