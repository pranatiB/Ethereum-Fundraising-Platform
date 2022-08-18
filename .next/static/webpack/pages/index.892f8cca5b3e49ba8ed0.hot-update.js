webpackHotUpdate_N_E("pages/index",{

/***/ "./smart-contract/web3.js":
/*!********************************!*\
  !*** ./smart-contract/web3.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

var web3;

if ( true && typeof window.web3 !== "undefined") {
  // we are in the browser and meta mask is installed
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);
} else {
  // we are on the server *OR* meta mask is not running
  // creating our own provider
  var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider("https://rinkeby.infura.io/v3/8e4c1e6b201449808dd590f7120dd682");
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc21hcnQtY29udHJhY3Qvd2ViMy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwid2luZG93IiwiV2ViMyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFJQSxJQUFKOztBQUVBLElBQUksU0FBaUMsT0FBT0MsTUFBTSxDQUFDRCxJQUFkLEtBQXVCLFdBQTVELEVBQXlFO0FBQ3ZFO0FBQ0FBLE1BQUksR0FBRyxJQUFJRSwyQ0FBSixDQUFTRCxNQUFNLENBQUNELElBQVAsQ0FBWUcsZUFBckIsQ0FBUDtBQUNELENBSEQsTUFHTztBQUNMO0FBQ0E7QUFDQSxNQUFNQyxRQUFRLEdBQUcsSUFBSUYsMkNBQUksQ0FBQ0csU0FBTCxDQUFlQyxZQUFuQixDQUNmLCtEQURlLENBQWpCO0FBSUFOLE1BQUksR0FBRyxJQUFJRSwyQ0FBSixDQUFTRSxRQUFULENBQVA7QUFDRDs7QUFFY0osbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODkyZjhjY2E1YjNlNDliYThlZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbmxldCB3ZWIzO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgLy8gd2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhIG1hc2sgaXMgaW5zdGFsbGVkXG4gIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xufSBlbHNlIHtcbiAgLy8gd2UgYXJlIG9uIHRoZSBzZXJ2ZXIgKk9SKiBtZXRhIG1hc2sgaXMgbm90IHJ1bm5pbmdcbiAgLy8gY3JlYXRpbmcgb3VyIG93biBwcm92aWRlclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgXCJodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzLzhlNGMxZTZiMjAxNDQ5ODA4ZGQ1OTBmNzEyMGRkNjgyXCJcbiAgKTtcblxuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==