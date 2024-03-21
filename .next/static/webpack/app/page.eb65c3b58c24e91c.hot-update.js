"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Card */ \"(app-pages-browser)/./src/app/component/Card/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! postcss */ \"(app-pages-browser)/./node_modules/postcss/lib/postcss.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"https://dummyjson.com/products\");\n                const data = await response.json();\n                setProducts(data.products);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-5 gap-5 h-32\",\n        children: [\n            products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: product.thumbnail,\n                            width: 300,\n                            height: 300\n                        }, void 0, false, {\n                            fileName: \"C:\\\\File Ansell\\\\FILE MAGANG\\\\nextjs\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: product.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\File Ansell\\\\FILE MAGANG\\\\nextjs\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Rp.\",\n                                product.price,\n                                \".000,\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\File Ansell\\\\FILE MAGANG\\\\nextjs\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: product.category\n                        }, void 0, false, {\n                            fileName: \"C:\\\\File Ansell\\\\FILE MAGANG\\\\nextjs\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, product.id, true, {\n                    fileName: \"C:\\\\File Ansell\\\\FILE MAGANG\\\\nextjs\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\File Ansell\\\\FILE MAGANG\\\\nextjs\\\\src\\\\app\\\\page.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\File Ansell\\\\FILE MAGANG\\\\nextjs\\\\src\\\\app\\\\page.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // async function getProducts() {\n //     const response = await fetch('https://dummyjson.com/products')\n //     const data = await response.json()\n //     return data\n // }\n // export default async function Home() {\n //     const products = await getProducts()\n //     console.log(products)\n //     return (\n //        <CardList/>\n //     )\n // }\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBQ2Y7QUFDTDtBQUNLO0FBRXBDLE1BQU1NLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8sWUFBWTtZQUNsQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ0wsWUFBWUksS0FBS0wsUUFBUTtZQUMzQixFQUFFLE9BQU9PLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFFQUw7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ087UUFBSUMsV0FBVTs7WUFDZFYsU0FBU1csR0FBRyxDQUFDQyxDQUFBQSx3QkFDWiw4REFBQ0g7O3NDQUVDLDhEQUFDSTs0QkFBSUMsS0FBS0YsUUFBUUcsU0FBUzs0QkFBRUMsT0FBTzs0QkFBS0MsUUFBUTs7Ozs7O3NDQUNqRCw4REFBQ0M7c0NBQUdOLFFBQVFPLEtBQUs7Ozs7OztzQ0FDakIsOERBQUNEOztnQ0FBRTtnQ0FBSU4sUUFBUVEsS0FBSztnQ0FBQzs7Ozs7OztzQ0FDckIsOERBQUNGO3NDQUFHTixRQUFRUyxRQUFROzs7Ozs7O21CQUxaVCxRQUFRVSxFQUFFOzs7OzswQkFRdEIsOERBQUMxQix1REFBSUE7Ozs7Ozs7Ozs7O0FBR1g7R0EvQklHO0tBQUFBO0FBaUNOLCtEQUFlQSxJQUFJQSxFQUFDLENBRXBCLGlDQUFpQztDQUNqQyxxRUFBcUU7Q0FDckUseUNBQXlDO0NBQ3pDLGtCQUFrQjtDQUNsQixJQUFJO0NBR0oseUNBQXlDO0NBQ3pDLDJDQUEyQztDQUMzQyw0QkFBNEI7Q0FDNUIsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixRQUFRO0NBQ1IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnQvQ2FyZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdwb3N0Y3NzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cycpO1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgc2V0UHJvZHVjdHMoZGF0YS5wcm9kdWN0cyk7IFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9O1xuICBcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKTtcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01IGdhcC01IGgtMzJcIj4gXG4gICAgICAgIHtwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC50aHVtYm5haWx9IHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSAvPiBcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxwPlJwLntwcm9kdWN0LnByaWNlfS4wMDAsPC9wPlxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPENhcmQvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMnKVxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbi8vICAgICByZXR1cm4gZGF0YVxuLy8gfVxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEhvbWUoKSB7XG4vLyAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBnZXRQcm9kdWN0cygpXG4vLyAgICAgY29uc29sZS5sb2cocHJvZHVjdHMpXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICA8Q2FyZExpc3QvPlxuLy8gICAgIClcbi8vIH1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYXJkIiwiSW1hZ2UiLCJDb250YWluZXIiLCJIb21lIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3QiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJ0aXRsZSIsInByaWNlIiwiY2F0ZWdvcnkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});