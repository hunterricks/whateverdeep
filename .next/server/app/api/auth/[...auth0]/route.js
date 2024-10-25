"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...auth0]/route";
exports.ids = ["app/api/auth/[...auth0]/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute.ts&appDir=%2FUsers%2Fhunterricks%2FDocuments%2Fwhateverdeep%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhunterricks%2FDocuments%2Fwhateverdeep&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute.ts&appDir=%2FUsers%2Fhunterricks%2FDocuments%2Fwhateverdeep%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhunterricks%2FDocuments%2Fwhateverdeep&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_hunterricks_Documents_whateverdeep_app_api_auth_auth0_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...auth0]/route.ts */ \"(rsc)/./app/api/auth/[...auth0]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...auth0]/route\",\n        pathname: \"/api/auth/[...auth0]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...auth0]/route\"\n    },\n    resolvedPagePath: \"/Users/hunterricks/Documents/whateverdeep/app/api/auth/[...auth0]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_hunterricks_Documents_whateverdeep_app_api_auth_auth0_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...auth0]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4uYXV0aDAlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5hdXRoMCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5hdXRoMCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmh1bnRlcnJpY2tzJTJGRG9jdW1lbnRzJTJGd2hhdGV2ZXJkZWVwJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmh1bnRlcnJpY2tzJTJGRG9jdW1lbnRzJTJGd2hhdGV2ZXJkZWVwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMwQjtBQUN2RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVvd25lci1zZXJ2aWNlcy1wbGF0Zm9ybS8/NWRlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaHVudGVycmlja3MvRG9jdW1lbnRzL3doYXRldmVyZGVlcC9hcHAvYXBpL2F1dGgvWy4uLmF1dGgwXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4uYXV0aDBdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4uYXV0aDBdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5hdXRoMF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvaHVudGVycmlja3MvRG9jdW1lbnRzL3doYXRldmVyZGVlcC9hcHAvYXBpL2F1dGgvWy4uLmF1dGgwXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4uYXV0aDBdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute.ts&appDir=%2FUsers%2Fhunterricks%2FDocuments%2Fwhateverdeep%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhunterricks%2FDocuments%2Fwhateverdeep&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...auth0]/route.ts":
/*!******************************************!*\
  !*** ./app/api/auth/[...auth0]/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"(rsc)/./node_modules/@auth0/nextjs-auth0/dist/index.js\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\nconst isWebContainer = \"local\" === \"webcontainer\";\nasync function GET(ctx) {\n    if (!ctx || !ctx.params) {\n        throw new Error(\"Context or params are undefined\");\n    }\n    const { params } = ctx;\n    // In WebContainer mode, don't use Auth0\n    if (isWebContainer) {\n        return new Response(\"Auth0 routes not available in WebContainer\", {\n            status: 404\n        });\n    }\n    // Ensure we have the required Auth0 configuration\n    if (!process.env.AUTH0_SECRET || !\"dev-tv1tri5qe7ysjzi0.us.auth0.com\") {\n        console.error(\"Missing required Auth0 configuration\");\n        return new Response(\"Auth0 configuration error\", {\n            status: 500\n        });\n    }\n    try {\n        // Get the auth0 route from params\n        const auth0Route = params.auth0[0];\n        // Handle different auth routes\n        switch(auth0Route){\n            case \"login\":\n                return (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleLogin)({\n                    returnTo: \"/dashboard\",\n                    authorizationParams: {\n                        prompt: \"login\"\n                    }\n                })(ctx.request);\n            case \"callback\":\n                return (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleCallback)({\n                    afterCallback: async (req, res, session)=>{\n                        if (session?.user) {\n                            // Add roles to the session based on Auth0 metadata\n                            const roles = session.user[\"https://myapp.org/roles\"] || [\n                                \"homeowner\"\n                            ];\n                            session.user.roles = roles;\n                            session.user.activeRole = roles[0];\n                        }\n                        return session;\n                    }\n                })(ctx.request);\n            case \"logout\":\n                return (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleLogout)({\n                    returnTo: new URL(\"/\", ctx.request.url).toString()\n                })(ctx.request);\n            default:\n                return (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleAuth)()(ctx.request);\n        }\n    } catch (error) {\n        console.error(\"Auth0 handler error:\", error);\n        return new Response(\"Internal server error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLmF1dGgwXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNEY7QUFFNUYsTUFBTUksaUJBQWlCQyxPQUFnQyxLQUFLO0FBRXJELGVBQWVHLElBQUlDLEdBQVE7SUFDaEMsSUFBSSxDQUFDQSxPQUFPLENBQUNBLElBQUlDLE1BQU0sRUFBRTtRQUN2QixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxNQUFNLEVBQUVELE1BQU0sRUFBRSxHQUFHRDtJQUVuQix3Q0FBd0M7SUFDeEMsSUFBSUwsZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSVEsU0FBUyw4Q0FBOEM7WUFBRUMsUUFBUTtRQUFJO0lBQ2xGO0lBRUEsa0RBQWtEO0lBQ2xELElBQUksQ0FBQ1IsUUFBUUMsR0FBRyxDQUFDUSxZQUFZLElBQUksQ0FBQ1QsbUNBQWlDLEVBQUU7UUFDbkVXLFFBQVFDLEtBQUssQ0FBQztRQUNkLE9BQU8sSUFBSUwsU0FBUyw2QkFBNkI7WUFBRUMsUUFBUTtRQUFJO0lBQ2pFO0lBRUEsSUFBSTtRQUNGLGtDQUFrQztRQUNsQyxNQUFNSyxhQUFhUixPQUFPUyxLQUFLLENBQUMsRUFBRTtRQUVsQywrQkFBK0I7UUFDL0IsT0FBUUQ7WUFDTixLQUFLO2dCQUNILE9BQU9oQixnRUFBV0EsQ0FBQztvQkFDakJrQixVQUFVO29CQUNWQyxxQkFBcUI7d0JBQ25CQyxRQUFRO29CQUNWO2dCQUNGLEdBQUdiLElBQUljLE9BQU87WUFFaEIsS0FBSztnQkFDSCxPQUFPdEIsbUVBQWNBLENBQUM7b0JBQ3BCdUIsZUFBZSxPQUFPQyxLQUFLQyxLQUFLQzt3QkFDOUIsSUFBSUEsU0FBU0MsTUFBTTs0QkFDakIsbURBQW1EOzRCQUNuRCxNQUFNQyxRQUFRRixRQUFRQyxJQUFJLENBQUMsMEJBQTBCLElBQUk7Z0NBQUM7NkJBQVk7NEJBQ3RFRCxRQUFRQyxJQUFJLENBQUNDLEtBQUssR0FBR0E7NEJBQ3JCRixRQUFRQyxJQUFJLENBQUNFLFVBQVUsR0FBR0QsS0FBSyxDQUFDLEVBQUU7d0JBQ3BDO3dCQUNBLE9BQU9GO29CQUNUO2dCQUNGLEdBQUdsQixJQUFJYyxPQUFPO1lBRWhCLEtBQUs7Z0JBQ0gsT0FBT3BCLGlFQUFZQSxDQUFDO29CQUNsQmlCLFVBQVUsSUFBSVcsSUFBSSxLQUFLdEIsSUFBSWMsT0FBTyxDQUFDUyxHQUFHLEVBQUVDLFFBQVE7Z0JBQ2xELEdBQUd4QixJQUFJYyxPQUFPO1lBRWhCO2dCQUNFLE9BQU92QiwrREFBVUEsR0FBR1MsSUFBSWMsT0FBTztRQUNuQztJQUNGLEVBQUUsT0FBT04sT0FBTztRQUNkRCxRQUFRQyxLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxPQUFPLElBQUlMLFNBQVMseUJBQXlCO1lBQUVDLFFBQVE7UUFBSTtJQUM3RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZW93bmVyLXNlcnZpY2VzLXBsYXRmb3JtLy4vYXBwL2FwaS9hdXRoL1suLi5hdXRoMF0vcm91dGUudHM/N2U1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IGhhbmRsZUF1dGgsIGhhbmRsZUNhbGxiYWNrLCBoYW5kbGVMb2dpbiwgaGFuZGxlTG9nb3V0IH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XG5cbmNvbnN0IGlzV2ViQ29udGFpbmVyID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU5WX01PREUgPT09ICd3ZWJjb250YWluZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKGN0eDogYW55KSB7XG4gIGlmICghY3R4IHx8ICFjdHgucGFyYW1zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ29udGV4dCBvciBwYXJhbXMgYXJlIHVuZGVmaW5lZFwiKTtcbiAgfVxuICBjb25zdCB7IHBhcmFtcyB9ID0gY3R4O1xuXG4gIC8vIEluIFdlYkNvbnRhaW5lciBtb2RlLCBkb24ndCB1c2UgQXV0aDBcbiAgaWYgKGlzV2ViQ29udGFpbmVyKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSgnQXV0aDAgcm91dGVzIG5vdCBhdmFpbGFibGUgaW4gV2ViQ29udGFpbmVyJywgeyBzdGF0dXM6IDQwNCB9KTtcbiAgfVxuXG4gIC8vIEVuc3VyZSB3ZSBoYXZlIHRoZSByZXF1aXJlZCBBdXRoMCBjb25maWd1cmF0aW9uXG4gIGlmICghcHJvY2Vzcy5lbnYuQVVUSDBfU0VDUkVUIHx8ICFwcm9jZXNzLmVudi5BVVRIMF9JU1NVRVJfQkFTRV9VUkwpIHtcbiAgICBjb25zb2xlLmVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIEF1dGgwIGNvbmZpZ3VyYXRpb24nKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCdBdXRoMCBjb25maWd1cmF0aW9uIGVycm9yJywgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2V0IHRoZSBhdXRoMCByb3V0ZSBmcm9tIHBhcmFtc1xuICAgIGNvbnN0IGF1dGgwUm91dGUgPSBwYXJhbXMuYXV0aDBbMF07XG5cbiAgICAvLyBIYW5kbGUgZGlmZmVyZW50IGF1dGggcm91dGVzXG4gICAgc3dpdGNoIChhdXRoMFJvdXRlKSB7XG4gICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgIHJldHVybiBoYW5kbGVMb2dpbih7XG4gICAgICAgICAgcmV0dXJuVG86ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgICBhdXRob3JpemF0aW9uUGFyYW1zOiB7XG4gICAgICAgICAgICBwcm9tcHQ6ICdsb2dpbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkoY3R4LnJlcXVlc3QpO1xuXG4gICAgICBjYXNlICdjYWxsYmFjayc6XG4gICAgICAgIHJldHVybiBoYW5kbGVDYWxsYmFjayh7XG4gICAgICAgICAgYWZ0ZXJDYWxsYmFjazogYXN5bmMgKHJlcSwgcmVzLCBzZXNzaW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Vzc2lvbj8udXNlcikge1xuICAgICAgICAgICAgICAvLyBBZGQgcm9sZXMgdG8gdGhlIHNlc3Npb24gYmFzZWQgb24gQXV0aDAgbWV0YWRhdGFcbiAgICAgICAgICAgICAgY29uc3Qgcm9sZXMgPSBzZXNzaW9uLnVzZXJbJ2h0dHBzOi8vbXlhcHAub3JnL3JvbGVzJ10gfHwgWydob21lb3duZXInXTtcbiAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGVzID0gcm9sZXM7XG4gICAgICAgICAgICAgIHNlc3Npb24udXNlci5hY3RpdmVSb2xlID0gcm9sZXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgICAgICB9LFxuICAgICAgICB9KShjdHgucmVxdWVzdCk7XG5cbiAgICAgIGNhc2UgJ2xvZ291dCc6XG4gICAgICAgIHJldHVybiBoYW5kbGVMb2dvdXQoe1xuICAgICAgICAgIHJldHVyblRvOiBuZXcgVVJMKCcvJywgY3R4LnJlcXVlc3QudXJsKS50b1N0cmluZygpLFxuICAgICAgICB9KShjdHgucmVxdWVzdCk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBoYW5kbGVBdXRoKCkoY3R4LnJlcXVlc3QpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBdXRoMCBoYW5kbGVyIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InLCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbImhhbmRsZUF1dGgiLCJoYW5kbGVDYWxsYmFjayIsImhhbmRsZUxvZ2luIiwiaGFuZGxlTG9nb3V0IiwiaXNXZWJDb250YWluZXIiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRU5WX01PREUiLCJHRVQiLCJjdHgiLCJwYXJhbXMiLCJFcnJvciIsIlJlc3BvbnNlIiwic3RhdHVzIiwiQVVUSDBfU0VDUkVUIiwiQVVUSDBfSVNTVUVSX0JBU0VfVVJMIiwiY29uc29sZSIsImVycm9yIiwiYXV0aDBSb3V0ZSIsImF1dGgwIiwicmV0dXJuVG8iLCJhdXRob3JpemF0aW9uUGFyYW1zIiwicHJvbXB0IiwicmVxdWVzdCIsImFmdGVyQ2FsbGJhY2siLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwidXNlciIsInJvbGVzIiwiYWN0aXZlUm9sZSIsIlVSTCIsInVybCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...auth0]/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@auth0","vendor-chunks/@opentelemetry","vendor-chunks/tslib","vendor-chunks/joi","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@sideway","vendor-chunks/@hapi","vendor-chunks/debug","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/url-join","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...auth0%5D%2Froute.ts&appDir=%2FUsers%2Fhunterricks%2FDocuments%2Fwhateverdeep%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhunterricks%2FDocuments%2Fwhateverdeep&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();