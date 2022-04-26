webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\ReactJS Beginner's Course\\Section 23 - Next Level NextJS Project\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";
// This is the startup page, or localhost:3000/
// show MeetupList.js here -> send up dummy data/meetups data via props of meetups -> make sure to import
// plug in dummy data to props of MeetupList import -> will eventually change to fetch in backend API
// You can add metadata to the head tags in the html. Some may include to add a description while searching or a page title shown in the tab
// Add by using the Head import from 'next/head'. Add in JSX of the below HomePage(props);
 //import { useEffect, useState } from 'react';
//import Layout from "../components/layout/Layout";



// const DUMMY_MEETUPS = [
//     {  
//         id: 'm1',
//         title: 'A First Meetup',
//         image: "https://thumbor.thedailymeal.com/OaCGsIE1iH7uob0N5wZYP56pvlk=/1560x390/filters:focal(805x899:806x900):format(webp)/https://www.theactivetimes.com/sites/default/files/2020/05/13/Nature_Photos_Getty_hero.jpg",
//         address: "Some Address 1, 12345 Clown City",
//         description: "This is a first meetup!"
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: "https://www.planetware.com/wpimages/2020/01/pennsylvania-in-pictures-beaufiful-places-to-photograph-delaware-water-gap.jpg",
//         address: "Some Address 2, 678910 Gotham City",
//         description: "This is a Second Meetup!"
//     }
// ]
// Get setup for calling to backend at start of page by useEffect, useState imports
function HomePage(props) {
  /* SEO becomes messed up this way, uses first HTML load/render, list items aren't shown in the view source right click
       This helps to show that call to backend wouldn't show, a minor flaw in NextJS, but there is a solution...
     This state will store the meetups data, as of start, set to empty array
   const [loadedMeetups, setLoadedMeetups] = useState([]);
   useEffect() on start of page to retrieve data from backend -> no backend yet, but just retrieve dummy data
        empty dependency array, send loadedMeetups which is changed by state in useEffect()
            set props of meetups to loadedMeetups
   useEffect(() =>{
       setLoadedMeetups(DUMMY_MEETUPS);
   }, []); */
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, this);
} // re-runs on every request which may seem positive, but could be negative by:
// needing to wait for page to be generated by every incoming request
// If page changes multiple times every seconds or need access to request/response, then using this is better
//, else use getStaticProps()
// export async function getServerSideProps(context) {
//     // access to incoming requests and response via the context keyword by req and res property
//     const req= context.req;
//     const res = context.res;
//     // can still fetch data from an API, also runs on server like below function    
//         // no need for revalidate, since it re renders on every request.
//     return {
//         props: {DUMMY_MEETUPS}
//     }
// }
// This is the function to data fetch for static pages, can be asynchronous
// This code won't ever execute on the client side -> never executes on page os user's pages.


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNJO0FBQ0k7QUFFUjtBQUNJO0NBRUo7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDckI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHSSxzQkFDSSxxRUFBQyxRQUFEO0FBQUEsNEJBVUkscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSixlQWFBLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSCxDLENBRUQ7QUFDSTtBQUNJO0FBQ0k7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0k7OztLQWpES0YsUTs7QUFpR01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY2M2MxODNhNzliZjY3YWZjZjBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHRoZSBzdGFydHVwIHBhZ2UsIG9yIGxvY2FsaG9zdDozMDAwL1xyXG4gICAgLy8gc2hvdyBNZWV0dXBMaXN0LmpzIGhlcmUgLT4gc2VuZCB1cCBkdW1teSBkYXRhL21lZXR1cHMgZGF0YSB2aWEgcHJvcHMgb2YgbWVldHVwcyAtPiBtYWtlIHN1cmUgdG8gaW1wb3J0XHJcbiAgICAgICAgLy8gcGx1ZyBpbiBkdW1teSBkYXRhIHRvIHByb3BzIG9mIE1lZXR1cExpc3QgaW1wb3J0IC0+IHdpbGwgZXZlbnR1YWxseSBjaGFuZ2UgdG8gZmV0Y2ggaW4gYmFja2VuZCBBUElcclxuXHJcbi8vIFlvdSBjYW4gYWRkIG1ldGFkYXRhIHRvIHRoZSBoZWFkIHRhZ3MgaW4gdGhlIGh0bWwuIFNvbWUgbWF5IGluY2x1ZGUgdG8gYWRkIGEgZGVzY3JpcHRpb24gd2hpbGUgc2VhcmNoaW5nIG9yIGEgcGFnZSB0aXRsZSBzaG93biBpbiB0aGUgdGFiXHJcbiAgICAvLyBBZGQgYnkgdXNpbmcgdGhlIEhlYWQgaW1wb3J0IGZyb20gJ25leHQvaGVhZCcuIEFkZCBpbiBKU1ggb2YgdGhlIGJlbG93IEhvbWVQYWdlKHByb3BzKTtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuLy9pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vL2ltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5cclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIiA7XHJcblxyXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4vLyAgICAgeyAgXHJcbi8vICAgICAgICAgaWQ6ICdtMScsXHJcbi8vICAgICAgICAgdGl0bGU6ICdBIEZpcnN0IE1lZXR1cCcsXHJcbi8vICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly90aHVtYm9yLnRoZWRhaWx5bWVhbC5jb20vT2FDR3NJRTFpSDd1b2IwTjV3WllQNTZwdmxrPS8xNTYweDM5MC9maWx0ZXJzOmZvY2FsKDgwNXg4OTk6ODA2eDkwMCk6Zm9ybWF0KHdlYnApL2h0dHBzOi8vd3d3LnRoZWFjdGl2ZXRpbWVzLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzLzIwMjAvMDUvMTMvTmF0dXJlX1Bob3Rvc19HZXR0eV9oZXJvLmpwZ1wiLFxyXG4vLyAgICAgICAgIGFkZHJlc3M6IFwiU29tZSBBZGRyZXNzIDEsIDEyMzQ1IENsb3duIENpdHlcIixcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgZmlyc3QgbWVldHVwIVwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOiAnbTInLFxyXG4vLyAgICAgICAgIHRpdGxlOiAnQSBTZWNvbmQgTWVldHVwJyxcclxuLy8gICAgICAgICBpbWFnZTogXCJodHRwczovL3d3dy5wbGFuZXR3YXJlLmNvbS93cGltYWdlcy8yMDIwLzAxL3Blbm5zeWx2YW5pYS1pbi1waWN0dXJlcy1iZWF1ZmlmdWwtcGxhY2VzLXRvLXBob3RvZ3JhcGgtZGVsYXdhcmUtd2F0ZXItZ2FwLmpwZ1wiLFxyXG4vLyAgICAgICAgIGFkZHJlc3M6IFwiU29tZSBBZGRyZXNzIDIsIDY3ODkxMCBHb3RoYW0gQ2l0eVwiLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBTZWNvbmQgTWVldHVwIVwiXHJcbi8vICAgICB9XHJcbi8vIF1cclxuXHJcbi8vIEdldCBzZXR1cCBmb3IgY2FsbGluZyB0byBiYWNrZW5kIGF0IHN0YXJ0IG9mIHBhZ2UgYnkgdXNlRWZmZWN0LCB1c2VTdGF0ZSBpbXBvcnRzXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgICAvKiBTRU8gYmVjb21lcyBtZXNzZWQgdXAgdGhpcyB3YXksIHVzZXMgZmlyc3QgSFRNTCBsb2FkL3JlbmRlciwgbGlzdCBpdGVtcyBhcmVuJ3Qgc2hvd24gaW4gdGhlIHZpZXcgc291cmNlIHJpZ2h0IGNsaWNrXHJcbiAgICAgICAgIFRoaXMgaGVscHMgdG8gc2hvdyB0aGF0IGNhbGwgdG8gYmFja2VuZCB3b3VsZG4ndCBzaG93LCBhIG1pbm9yIGZsYXcgaW4gTmV4dEpTLCBidXQgdGhlcmUgaXMgYSBzb2x1dGlvbi4uLlxyXG5cclxuICAgICBUaGlzIHN0YXRlIHdpbGwgc3RvcmUgdGhlIG1lZXR1cHMgZGF0YSwgYXMgb2Ygc3RhcnQsIHNldCB0byBlbXB0eSBhcnJheVxyXG4gICAgIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgICB1c2VFZmZlY3QoKSBvbiBzdGFydCBvZiBwYWdlIHRvIHJldHJpZXZlIGRhdGEgZnJvbSBiYWNrZW5kIC0+IG5vIGJhY2tlbmQgeWV0LCBidXQganVzdCByZXRyaWV2ZSBkdW1teSBkYXRhXHJcbiAgICAgICAgICBlbXB0eSBkZXBlbmRlbmN5IGFycmF5LCBzZW5kIGxvYWRlZE1lZXR1cHMgd2hpY2ggaXMgY2hhbmdlZCBieSBzdGF0ZSBpbiB1c2VFZmZlY3QoKVxyXG4gICAgICAgICAgICAgIHNldCBwcm9wcyBvZiBtZWV0dXBzIHRvIGxvYWRlZE1lZXR1cHNcclxuICAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbiAgICAgfSwgW10pOyAqL1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHsvKiAgdXNlIDxIZWFkPjwvSGVhZD4gdGFncyBpbiB0aGlzXHJcbiAgICAgICAgIExheW91dCB1c2VzIE1haW5OYXZpZ2F0aW9uLmpzXHJcbiAgICAgICAgICAgICBtYWtlIHN1cmUgdG8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4gICAgICAgICAgICAgaW4gTWFpbk5hdmlnYXRpb24uanMgb3IgZWxzZSBhbiBlcnJvciB3aWxsIHNob3cuXHJcbiAgICAgICAgICAgICBub3QgcmVhY3Qgcm91dGVyIGVpdGhlciBzbyBjaGFuZ2UgdG8gcHJvcGVydHkgdG8gaHJlZiBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAgbm8gbmVlZCBmb3IgTGF5b3V0IHdyYXBwZXIgaGVyZSwgb25seSBpbiBfYXBwLmpzXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgbWFrZSBzdXJlIHRvIGNoYW5nZSB0aGlzIHRvIHByb3BzLm1lZXR1cHMgd2hpY2ggaXMgY2FsbGVkIGZyb20gcHJvcHMgaW4gZnVuY3Rpb24gYmVsb3dcclxuICAgICAgICA8L0xheW91dD4gKi99XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlJlYWN0IE1lZXR1cHMhPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9Lz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gcmUtcnVucyBvbiBldmVyeSByZXF1ZXN0IHdoaWNoIG1heSBzZWVtIHBvc2l0aXZlLCBidXQgY291bGQgYmUgbmVnYXRpdmUgYnk6XHJcbiAgICAvLyBuZWVkaW5nIHRvIHdhaXQgZm9yIHBhZ2UgdG8gYmUgZ2VuZXJhdGVkIGJ5IGV2ZXJ5IGluY29taW5nIHJlcXVlc3RcclxuICAgICAgICAvLyBJZiBwYWdlIGNoYW5nZXMgbXVsdGlwbGUgdGltZXMgZXZlcnkgc2Vjb25kcyBvciBuZWVkIGFjY2VzcyB0byByZXF1ZXN0L3Jlc3BvbnNlLCB0aGVuIHVzaW5nIHRoaXMgaXMgYmV0dGVyXHJcbiAgICAgICAgICAgIC8vLCBlbHNlIHVzZSBnZXRTdGF0aWNQcm9wcygpXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgICAgLy8gYWNjZXNzIHRvIGluY29taW5nIHJlcXVlc3RzIGFuZCByZXNwb25zZSB2aWEgdGhlIGNvbnRleHQga2V5d29yZCBieSByZXEgYW5kIHJlcyBwcm9wZXJ0eVxyXG4vLyAgICAgY29uc3QgcmVxPSBjb250ZXh0LnJlcTtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAgIC8vIGNhbiBzdGlsbCBmZXRjaCBkYXRhIGZyb20gYW4gQVBJLCBhbHNvIHJ1bnMgb24gc2VydmVyIGxpa2UgYmVsb3cgZnVuY3Rpb24gICAgXHJcbi8vICAgICAgICAgLy8gbm8gbmVlZCBmb3IgcmV2YWxpZGF0ZSwgc2luY2UgaXQgcmUgcmVuZGVycyBvbiBldmVyeSByZXF1ZXN0LlxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwcm9wczoge0RVTU1ZX01FRVRVUFN9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRvIGRhdGEgZmV0Y2ggZm9yIHN0YXRpYyBwYWdlcywgY2FuIGJlIGFzeW5jaHJvbm91c1xyXG4gICAgLy8gVGhpcyBjb2RlIHdvbid0IGV2ZXIgZXhlY3V0ZSBvbiB0aGUgY2xpZW50IHNpZGUgLT4gbmV2ZXIgZXhlY3V0ZXMgb24gcGFnZSBvcyB1c2VyJ3MgcGFnZXMuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUEksIGFsd2F5cyByZXR1cm4gYW4gb2JqZWN0IGluIGhlcmVcclxuICAgICAgICAvLyB0aGUgcHJvcHMgcHJvcGVydHkgb2YgdGhlIHJldHVybiBvYmplY3QgaXMgYW4gb2JqZWN0IGl0c2VsZiBhbmQgaXMgdGhlIHByb3BzIHNlbnQgdXAgdG8gSG9tZVBhZ2UocHJvcHMpIGFib3ZlXHJcbiAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgbmVlZCBmb3IgdXNlU3RhdGUgYW5kIHVzZUVmZmVjdCBpbiB0aGUgSG9tZVBhZ2UoKSBGbiBhYm92ZS5cclxuICAgICAgICAgICAgICAgIC8vIFdoYXQgd291bGQgbm9ybWFsbHkgcmVwcmVzZW50IGdldHRpbmcgZGF0YSBmcm9tIGEgYmFja2VuZCBpcyBubyBsb25nZXIgbmVlZGVkIGJlY2F1c2UgdGhlIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VudCB1cCBwcm9wcyB0byB0aGUgY29tcG9uZW50IGZ1bmN0aW9uIGFib3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbiBiZSBmZXRjaGVkIGluIHRoaXMgZnVuY3Rpb24gYW5kIHNlbnQgaW4sIHdoaWNoIGluIHRoZSBlbmQgaGFwcGVuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gdGhlIHByZS1yZW5kZXIgcHJvY2VzcyhTZXJ2ZXIgU2lkZSkgcmF0aGVyIHRoYW4gb24gdGhlIGNsaWVudCBzaWRlIGxpa2UgYWJvdmUgZG9lc1xyXG4gICAgICAgIFxyXG4gICAgLy8gTm8gbmVlZCB0byBjYWxsIGFuZCBjcmVhdGUgYW5vdGhlciBBUEkgcm91dGUgdG8gZmV0Y2ggZnJvbSwgY2FuIGp1c3QgZG8gQVBJIHJvdXRlIGNyZWF0aW9uIGFuZCBjYWxsIGluIGhlcmU/XHJcbiAgICAgICAgLy8gU2ltaWxhciB0byBjYWxsIGluIG5ldy1tZWV0dXAuanNcclxuICAgICAgICBcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXCJtb25nb2RiK3NydjovL1hhbmRlcl9NaWs6SXNhaWFoNTVAY2x1c3RlcjAuaGp1dW4ubW9uZ29kYi5uZXQvdGVzdERiP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiKVxyXG4gICAgICAgIC8vIGdldCBob2xkIG9mIGRhdGFiYXNlIGJ5OlxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAvLyBnZXQgYWNjZXNzIHRvIG1lZXR1cHMgY29sbGVjdGlvbiB3aGljaCBpcyBpbiB0aGUgREIgLT4gTm9TUUwgREIgY29sbGVjdGlvbnMgZnVsbCBvZiBkb2N1bWVudHMgaW4gTW9uZ29EQlxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcclxuXHJcbiAgICAvLyBhbiBhc3luYyB0YXNrIHRoYXQgcmV0dXJucyBhIHByb21pc2UsIHJldHVybnMgYWxsIGRvY3VtZW50cyBpbiBjb2xsZWN0aW9uIGJ5IGRlZmF1bHQgLT4gY2hhbmdlIHRvIGFycmF5IG9mIGRvY3Mvb2JqZWN0c1xyXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcblxyXG4gICAgLy8gY2xvc2UgY29ubmVjdGlvbiB0byBEQiBvbmNlIGRvbmVcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICAvLyBtYXAgdGhpcyB0byBuZXcgYXJyYXkgYmVjdWFzZSBpZCBmaWVsZCBpcyB3ZWlyZCBpbiBNb25nb0RiIGFuZCBpcyBfaWQgZmlyc3QgYW5kIHNlY29uZHMgaXQncyB2YWx1ZSBpcyBPYmplY3Qgd3JhcHBlZCBhcm91bmQgc29tZXRoaW5nXHJcbiAgICAgICAgICAgIC8vbWFwIHRvIGEgbmV3IGFycmF5ICB3aXRoIF9pZC50b1N0cmluZygpLCBhbHNvIHdlIG9ubHkgbmVlZCBpbWFnZSwgdGl0bGUsIGFuZCBhZGRyZXNzLCBubyBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRvIHdyYXAgb2JqZWN0IGluICgpIG9yIGVsc2UgdGhlIHBwcm9wZXJ0aWVzIHdpbGwgcmV0dXJuIHJhbmRvbSB1bmtub3duIGVycm9yc1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKG1lZXR1cCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBQcm9ibGVtIHdpdGggdGhpcywgaXQgb25seSBjYWxscyBvbiB0aGUgYmVnaW5uaW5nLCBkYXRhIGNhbiBiZSBvdXRkYXRlZCBpZiBubyBjbGllbnQtc2lkZSB1cGRhdGluZ1xyXG4gICAgICAgICAgICAvLyBzbyBpZiBhIG5ldyBtZWV0dXAgd2FzIGFkZGVkIHRvIHRoZSBiYWNrZW5kLCBpdCB3b3VsZG4ndCBzaG93IG9uIHRoZSBwYWdlIGJlY2F1c2UgcHJlLXJlbmRlclxyXG4gICAgICAgICAgICAgICAgLy8gIG9ubHkgc2hvd3Mgd2hhdHMgaW5pdGlhbGx5IGNhbGxlZCBub3Qgd2hhdCdzIGFkZGVkXHJcbiAgICAgICAgLy8gVGhpcyByZXZhbGlkYXRlIHByb3BlcnR5IGZpeGVzIHRoYXQgYnkgcmV2YWxpZGF0aW5nIHRoZSBwYWdlIGV2ZXJ5ICMgb2Ygc2Vjb25kcyxcclxuICAgICAgICAgICAgLy8gc28gaWYgbmV3IGRhdGEgaXMgYWRkZWQgdG8gdGhlIGJhY2tlbmQsIHdpbGwgc2hvdyBvbiB0aGUgbnVtYmVyIG9mIHNlY29uZHMgc2hvd24uXHJcbiAgICAgICAgLy8gSWYgeW91IHdhbnQgdG8gcmVidWlsZCBvbiBldmVyeSByZXF1ZXN0LCB1c2UgYSBkaWZmZXJlbnQgZnVuY3Rpb24gc2VydmVyIHNpZGUgcmVuZGVyaW5nIGJ5KGdldFNlcnZlclNpZGVQcm9wcygpKVxyXG4gICAgICAgIHJldmFsaWRhdGU6IDFcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=