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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0k7QUFDSTtBQUVSO0FBQ0k7Q0FFSjtBQUNBOztBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3JCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0ksc0JBQ0kscUVBQUMsOENBQUQ7QUFBQSw0QkFVSSxxRUFBQyxnREFBRDtBQUFBLDhCQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkosZUFlQSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkgsQyxDQUVEO0FBQ0k7QUFDSTtBQUNJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNJOzs7S0FuREtGLFE7O0FBbUdNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYzY3ZTQ5MWFmYTQwMjI0ZGU5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyB0aGUgc3RhcnR1cCBwYWdlLCBvciBsb2NhbGhvc3Q6MzAwMC9cclxuICAgIC8vIHNob3cgTWVldHVwTGlzdC5qcyBoZXJlIC0+IHNlbmQgdXAgZHVtbXkgZGF0YS9tZWV0dXBzIGRhdGEgdmlhIHByb3BzIG9mIG1lZXR1cHMgLT4gbWFrZSBzdXJlIHRvIGltcG9ydFxyXG4gICAgICAgIC8vIHBsdWcgaW4gZHVtbXkgZGF0YSB0byBwcm9wcyBvZiBNZWV0dXBMaXN0IGltcG9ydCAtPiB3aWxsIGV2ZW50dWFsbHkgY2hhbmdlIHRvIGZldGNoIGluIGJhY2tlbmQgQVBJXHJcblxyXG4vLyBZb3UgY2FuIGFkZCBtZXRhZGF0YSB0byB0aGUgaGVhZCB0YWdzIGluIHRoZSBodG1sLiBTb21lIG1heSBpbmNsdWRlIHRvIGFkZCBhIGRlc2NyaXB0aW9uIHdoaWxlIHNlYXJjaGluZyBvciBhIHBhZ2UgdGl0bGUgc2hvd24gaW4gdGhlIHRhYlxyXG4gICAgLy8gQWRkIGJ5IHVzaW5nIHRoZSBIZWFkIGltcG9ydCBmcm9tICduZXh0L2hlYWQnLiBBZGQgaW4gSlNYIG9mIHRoZSBiZWxvdyBIb21lUGFnZShwcm9wcyk7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbi8vaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy9pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCIgO1xyXG5cclxuLy8gY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuLy8gICAgIHsgIFxyXG4vLyAgICAgICAgIGlkOiAnbTEnLFxyXG4vLyAgICAgICAgIHRpdGxlOiAnQSBGaXJzdCBNZWV0dXAnLFxyXG4vLyAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vdGh1bWJvci50aGVkYWlseW1lYWwuY29tL09hQ0dzSUUxaUg3dW9iME41d1pZUDU2cHZsaz0vMTU2MHgzOTAvZmlsdGVyczpmb2NhbCg4MDV4ODk5OjgwNng5MDApOmZvcm1hdCh3ZWJwKS9odHRwczovL3d3dy50aGVhY3RpdmV0aW1lcy5jb20vc2l0ZXMvZGVmYXVsdC9maWxlcy8yMDIwLzA1LzEzL05hdHVyZV9QaG90b3NfR2V0dHlfaGVyby5qcGdcIixcclxuLy8gICAgICAgICBhZGRyZXNzOiBcIlNvbWUgQWRkcmVzcyAxLCAxMjM0NSBDbG93biBDaXR5XCIsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCFcIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogJ20yJyxcclxuLy8gICAgICAgICB0aXRsZTogJ0EgU2Vjb25kIE1lZXR1cCcsXHJcbi8vICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cucGxhbmV0d2FyZS5jb20vd3BpbWFnZXMvMjAyMC8wMS9wZW5uc3lsdmFuaWEtaW4tcGljdHVyZXMtYmVhdWZpZnVsLXBsYWNlcy10by1waG90b2dyYXBoLWRlbGF3YXJlLXdhdGVyLWdhcC5qcGdcIixcclxuLy8gICAgICAgICBhZGRyZXNzOiBcIlNvbWUgQWRkcmVzcyAyLCA2Nzg5MTAgR290aGFtIENpdHlcIixcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgU2Vjb25kIE1lZXR1cCFcIlxyXG4vLyAgICAgfVxyXG4vLyBdXHJcblxyXG4vLyBHZXQgc2V0dXAgZm9yIGNhbGxpbmcgdG8gYmFja2VuZCBhdCBzdGFydCBvZiBwYWdlIGJ5IHVzZUVmZmVjdCwgdXNlU3RhdGUgaW1wb3J0c1xyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gICAgLyogU0VPIGJlY29tZXMgbWVzc2VkIHVwIHRoaXMgd2F5LCB1c2VzIGZpcnN0IEhUTUwgbG9hZC9yZW5kZXIsIGxpc3QgaXRlbXMgYXJlbid0IHNob3duIGluIHRoZSB2aWV3IHNvdXJjZSByaWdodCBjbGlja1xyXG4gICAgICAgICBUaGlzIGhlbHBzIHRvIHNob3cgdGhhdCBjYWxsIHRvIGJhY2tlbmQgd291bGRuJ3Qgc2hvdywgYSBtaW5vciBmbGF3IGluIE5leHRKUywgYnV0IHRoZXJlIGlzIGEgc29sdXRpb24uLi5cclxuXHJcbiAgICAgVGhpcyBzdGF0ZSB3aWxsIHN0b3JlIHRoZSBtZWV0dXBzIGRhdGEsIGFzIG9mIHN0YXJ0LCBzZXQgdG8gZW1wdHkgYXJyYXlcclxuICAgICBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAgdXNlRWZmZWN0KCkgb24gc3RhcnQgb2YgcGFnZSB0byByZXRyaWV2ZSBkYXRhIGZyb20gYmFja2VuZCAtPiBubyBiYWNrZW5kIHlldCwgYnV0IGp1c3QgcmV0cmlldmUgZHVtbXkgZGF0YVxyXG4gICAgICAgICAgZW1wdHkgZGVwZW5kZW5jeSBhcnJheSwgc2VuZCBsb2FkZWRNZWV0dXBzIHdoaWNoIGlzIGNoYW5nZWQgYnkgc3RhdGUgaW4gdXNlRWZmZWN0KClcclxuICAgICAgICAgICAgICBzZXQgcHJvcHMgb2YgbWVldHVwcyB0byBsb2FkZWRNZWV0dXBzXHJcbiAgICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xyXG4gICAgIH0sIFtdKTsgKi9cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICB7LyogIHVzZSA8SGVhZD48L0hlYWQ+IHRhZ3MgaW4gdGhpc1xyXG4gICAgICAgICBMYXlvdXQgdXNlcyBNYWluTmF2aWdhdGlvbi5qc1xyXG4gICAgICAgICAgICAgbWFrZSBzdXJlIHRvIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuICAgICAgICAgICAgIGluIE1haW5OYXZpZ2F0aW9uLmpzIG9yIGVsc2UgYW4gZXJyb3Igd2lsbCBzaG93LlxyXG4gICAgICAgICAgICAgbm90IHJlYWN0IHJvdXRlciBlaXRoZXIgc28gY2hhbmdlIHRvIHByb3BlcnR5IHRvIGhyZWYgcHJvcGVydHlcclxuICAgICAgICAgICAgIG5vIG5lZWQgZm9yIExheW91dCB3cmFwcGVyIGhlcmUsIG9ubHkgaW4gX2FwcC5qc1xyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIG1ha2Ugc3VyZSB0byBjaGFuZ2UgdGhpcyB0byBwcm9wcy5tZWV0dXBzIHdoaWNoIGlzIGNhbGxlZCBmcm9tIHByb3BzIGluIGZ1bmN0aW9uIGJlbG93XHJcbiAgICAgICAgPC9MYXlvdXQ+ICovfVxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIHsvKiBUaXRsZSBvZiBQYWdlIGluIE1ldGFEYXRhIGlzIFJlYWN0IE1lZXR1cHMsIG5vdCBsb2NhbGhvc3Q6MzAwMCBhbnltb3JlIC0+IGNhbiBhbHNvIHNlZSBpbiBkZXZ0b29scyBhbmQgdmlldyBzb3VyY2Ugb2YgcGFnZSAqL31cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5SZWFjdCBNZWV0dXBzITwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PScnPjwvbWV0YT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9Lz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gcmUtcnVucyBvbiBldmVyeSByZXF1ZXN0IHdoaWNoIG1heSBzZWVtIHBvc2l0aXZlLCBidXQgY291bGQgYmUgbmVnYXRpdmUgYnk6XHJcbiAgICAvLyBuZWVkaW5nIHRvIHdhaXQgZm9yIHBhZ2UgdG8gYmUgZ2VuZXJhdGVkIGJ5IGV2ZXJ5IGluY29taW5nIHJlcXVlc3RcclxuICAgICAgICAvLyBJZiBwYWdlIGNoYW5nZXMgbXVsdGlwbGUgdGltZXMgZXZlcnkgc2Vjb25kcyBvciBuZWVkIGFjY2VzcyB0byByZXF1ZXN0L3Jlc3BvbnNlLCB0aGVuIHVzaW5nIHRoaXMgaXMgYmV0dGVyXHJcbiAgICAgICAgICAgIC8vLCBlbHNlIHVzZSBnZXRTdGF0aWNQcm9wcygpXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgICAgLy8gYWNjZXNzIHRvIGluY29taW5nIHJlcXVlc3RzIGFuZCByZXNwb25zZSB2aWEgdGhlIGNvbnRleHQga2V5d29yZCBieSByZXEgYW5kIHJlcyBwcm9wZXJ0eVxyXG4vLyAgICAgY29uc3QgcmVxPSBjb250ZXh0LnJlcTtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAgIC8vIGNhbiBzdGlsbCBmZXRjaCBkYXRhIGZyb20gYW4gQVBJLCBhbHNvIHJ1bnMgb24gc2VydmVyIGxpa2UgYmVsb3cgZnVuY3Rpb24gICAgXHJcbi8vICAgICAgICAgLy8gbm8gbmVlZCBmb3IgcmV2YWxpZGF0ZSwgc2luY2UgaXQgcmUgcmVuZGVycyBvbiBldmVyeSByZXF1ZXN0LlxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwcm9wczoge0RVTU1ZX01FRVRVUFN9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRvIGRhdGEgZmV0Y2ggZm9yIHN0YXRpYyBwYWdlcywgY2FuIGJlIGFzeW5jaHJvbm91c1xyXG4gICAgLy8gVGhpcyBjb2RlIHdvbid0IGV2ZXIgZXhlY3V0ZSBvbiB0aGUgY2xpZW50IHNpZGUgLT4gbmV2ZXIgZXhlY3V0ZXMgb24gcGFnZSBvcyB1c2VyJ3MgcGFnZXMuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUEksIGFsd2F5cyByZXR1cm4gYW4gb2JqZWN0IGluIGhlcmVcclxuICAgICAgICAvLyB0aGUgcHJvcHMgcHJvcGVydHkgb2YgdGhlIHJldHVybiBvYmplY3QgaXMgYW4gb2JqZWN0IGl0c2VsZiBhbmQgaXMgdGhlIHByb3BzIHNlbnQgdXAgdG8gSG9tZVBhZ2UocHJvcHMpIGFib3ZlXHJcbiAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgbmVlZCBmb3IgdXNlU3RhdGUgYW5kIHVzZUVmZmVjdCBpbiB0aGUgSG9tZVBhZ2UoKSBGbiBhYm92ZS5cclxuICAgICAgICAgICAgICAgIC8vIFdoYXQgd291bGQgbm9ybWFsbHkgcmVwcmVzZW50IGdldHRpbmcgZGF0YSBmcm9tIGEgYmFja2VuZCBpcyBubyBsb25nZXIgbmVlZGVkIGJlY2F1c2UgdGhlIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VudCB1cCBwcm9wcyB0byB0aGUgY29tcG9uZW50IGZ1bmN0aW9uIGFib3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbiBiZSBmZXRjaGVkIGluIHRoaXMgZnVuY3Rpb24gYW5kIHNlbnQgaW4sIHdoaWNoIGluIHRoZSBlbmQgaGFwcGVuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gdGhlIHByZS1yZW5kZXIgcHJvY2VzcyhTZXJ2ZXIgU2lkZSkgcmF0aGVyIHRoYW4gb24gdGhlIGNsaWVudCBzaWRlIGxpa2UgYWJvdmUgZG9lc1xyXG4gICAgICAgIFxyXG4gICAgLy8gTm8gbmVlZCB0byBjYWxsIGFuZCBjcmVhdGUgYW5vdGhlciBBUEkgcm91dGUgdG8gZmV0Y2ggZnJvbSwgY2FuIGp1c3QgZG8gQVBJIHJvdXRlIGNyZWF0aW9uIGFuZCBjYWxsIGluIGhlcmU/XHJcbiAgICAgICAgLy8gU2ltaWxhciB0byBjYWxsIGluIG5ldy1tZWV0dXAuanNcclxuICAgICAgICBcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXCJtb25nb2RiK3NydjovL1hhbmRlcl9NaWs6SXNhaWFoNTVAY2x1c3RlcjAuaGp1dW4ubW9uZ29kYi5uZXQvdGVzdERiP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiKVxyXG4gICAgICAgIC8vIGdldCBob2xkIG9mIGRhdGFiYXNlIGJ5OlxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAvLyBnZXQgYWNjZXNzIHRvIG1lZXR1cHMgY29sbGVjdGlvbiB3aGljaCBpcyBpbiB0aGUgREIgLT4gTm9TUUwgREIgY29sbGVjdGlvbnMgZnVsbCBvZiBkb2N1bWVudHMgaW4gTW9uZ29EQlxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcclxuXHJcbiAgICAvLyBhbiBhc3luYyB0YXNrIHRoYXQgcmV0dXJucyBhIHByb21pc2UsIHJldHVybnMgYWxsIGRvY3VtZW50cyBpbiBjb2xsZWN0aW9uIGJ5IGRlZmF1bHQgLT4gY2hhbmdlIHRvIGFycmF5IG9mIGRvY3Mvb2JqZWN0c1xyXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcblxyXG4gICAgLy8gY2xvc2UgY29ubmVjdGlvbiB0byBEQiBvbmNlIGRvbmVcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICAvLyBtYXAgdGhpcyB0byBuZXcgYXJyYXkgYmVjdWFzZSBpZCBmaWVsZCBpcyB3ZWlyZCBpbiBNb25nb0RiIGFuZCBpcyBfaWQgZmlyc3QgYW5kIHNlY29uZHMgaXQncyB2YWx1ZSBpcyBPYmplY3Qgd3JhcHBlZCBhcm91bmQgc29tZXRoaW5nXHJcbiAgICAgICAgICAgIC8vbWFwIHRvIGEgbmV3IGFycmF5ICB3aXRoIF9pZC50b1N0cmluZygpLCBhbHNvIHdlIG9ubHkgbmVlZCBpbWFnZSwgdGl0bGUsIGFuZCBhZGRyZXNzLCBubyBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRvIHdyYXAgb2JqZWN0IGluICgpIG9yIGVsc2UgdGhlIHBwcm9wZXJ0aWVzIHdpbGwgcmV0dXJuIHJhbmRvbSB1bmtub3duIGVycm9yc1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKG1lZXR1cCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBQcm9ibGVtIHdpdGggdGhpcywgaXQgb25seSBjYWxscyBvbiB0aGUgYmVnaW5uaW5nLCBkYXRhIGNhbiBiZSBvdXRkYXRlZCBpZiBubyBjbGllbnQtc2lkZSB1cGRhdGluZ1xyXG4gICAgICAgICAgICAvLyBzbyBpZiBhIG5ldyBtZWV0dXAgd2FzIGFkZGVkIHRvIHRoZSBiYWNrZW5kLCBpdCB3b3VsZG4ndCBzaG93IG9uIHRoZSBwYWdlIGJlY2F1c2UgcHJlLXJlbmRlclxyXG4gICAgICAgICAgICAgICAgLy8gIG9ubHkgc2hvd3Mgd2hhdHMgaW5pdGlhbGx5IGNhbGxlZCBub3Qgd2hhdCdzIGFkZGVkXHJcbiAgICAgICAgLy8gVGhpcyByZXZhbGlkYXRlIHByb3BlcnR5IGZpeGVzIHRoYXQgYnkgcmV2YWxpZGF0aW5nIHRoZSBwYWdlIGV2ZXJ5ICMgb2Ygc2Vjb25kcyxcclxuICAgICAgICAgICAgLy8gc28gaWYgbmV3IGRhdGEgaXMgYWRkZWQgdG8gdGhlIGJhY2tlbmQsIHdpbGwgc2hvdyBvbiB0aGUgbnVtYmVyIG9mIHNlY29uZHMgc2hvd24uXHJcbiAgICAgICAgLy8gSWYgeW91IHdhbnQgdG8gcmVidWlsZCBvbiBldmVyeSByZXF1ZXN0LCB1c2UgYSBkaWZmZXJlbnQgZnVuY3Rpb24gc2VydmVyIHNpZGUgcmVuZGVyaW5nIGJ5KGdldFNlcnZlclNpZGVQcm9wcygpKVxyXG4gICAgICAgIHJldmFsaWRhdGU6IDFcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=