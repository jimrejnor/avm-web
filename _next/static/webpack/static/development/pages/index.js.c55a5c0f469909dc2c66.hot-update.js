webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/portfolio.js":
/*!*********************************!*\
  !*** ./components/portfolio.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/Row.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/Col.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _page_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-section */ "./components/page-section.js");






var portfolios = [{
  title: "Threads",
  description: "Illustration",
  image: "/static/images/portfolio/01-small.jpg"
}, {
  title: "Explore",
  description: "Graphic Design",
  image: "/static/images/portfolio/02-small.jpg"
}, {
  title: "Finish",
  description: "Identity",
  image: "/static/images/portfolio/03-small.jpg"
}, {
  title: "Lines",
  description: "Branding",
  image: "/static/images/portfolio/04-small.jpg"
}, {
  title: "Southwest",
  description: "Website Design",
  image: "/static/images/portfolio/05-small.jpg"
}, {
  title: "Window",
  description: "Photography",
  image: "/static/images/portfolio/06-small.jpg"
}];

function Portfolio() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "portfolio",
    title: "PROJEKTI",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    titleAnimation: {
      animateIn: "fadeInDown"
    },
    descriptionAnimation: {
      animateIn: "fadeInUp"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, null, portfolios.map(function (item, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItem, {
      key: item.title,
      title: item.title,
      description: item.description,
      image: item.image,
      index: idx
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "d-flex justify-content-center pt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default.a, {
    animateIn: "fadeInUp",
    duration: 1.5,
    delay: 300,
    animateOnce: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projekti"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#contact",
    className: "btn btn-custom btn-lg round-item"
  }, "Ostali Projekti")))))));
}

function PortfolioItem(_ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image,
      index = _ref.index;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6 col-md-4 col-lg-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default.a, {
    animateIn: "fadeIn",
    duration: 1.5,
    delay: index * 100,
    animateOnce: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hover-bg"
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    title: title
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hover-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    className: "img-fluid",
    alt: title
  }), " "), " "))));
}

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

})
//# sourceMappingURL=index.js.c55a5c0f469909dc2c66.hot-update.js.map