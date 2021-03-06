(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _options_options_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./options/options.component */
      "./src/app/options/options.component.ts");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'neon-index';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 21,
        vars: 0,
        consts: [[1, "content", "has-text-centered"], ["href", "https://ddmal.music.mcgill.ca"], ["href", "https://simssa.ca"], ["target", "_blank", "href", "https://github.com/DDMAL/Neon/wiki/Quick-Start"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Neon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "A Neume Editor Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Neon is developed at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "DDMAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " and is part of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "SIMSSA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " project. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Need help? Check out the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Neon quick start guide. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_options_options_component__WEBPACK_IMPORTED_MODULE_1__["OptionsComponent"]],
        styles: ["header[_ngcontent-%COMP%] {\n    text-align: center;\n    background-color: cornflowerblue;\n}\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    font-weight: 600;\n    line-height: 1.125;\n    color: white;\n}\n\nheader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-weight: normal;\n    color: white;\n}\n\n@media (min-height: 750px) {\n    header[_ngcontent-%COMP%] {\n        height: 100%;\n        grid-row: 1 / 3;\n        grid-column: 1 / 4;\n        align-self: end;\n    }\n\n    header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        padding-top: 5%;\n        font-size: 5rem;\n    }\n\n    header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-weight: normal;\n        color: white;\n    }\n\n    main[_ngcontent-%COMP%] {\n        grid-row: 3 / 9;\n        grid-column: 1 / 4;\n    }\n\n    app-options[_ngcontent-%COMP%] {\n        height: 100%;\n        width: 100%;\n    }\n\n    footer[_ngcontent-%COMP%] {\n        grid-column: 1 / 4;\n        grid-row: 8;\n    }\n}\n\napp-options[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztBQUN6QyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG5cbmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xMjU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5oZWFkZXIgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDc1MHB4KSB7XG4gICAgaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIH1cblxuICAgIGhlYWRlciBoMSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgIH1cblxuICAgIGhlYWRlciBoMiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICBtYWluIHtcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA5O1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gICAgfVxuXG4gICAgYXBwLW9wdGlvbnMge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGZvb3RlciB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgICAgICAgZ3JpZC1yb3c6IDg7XG4gICAgfVxufVxuXG5hcHAtb3B0aW9ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _options_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./options/options.component */
      "./src/app/options/options.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/stepper */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_4__["OptionsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_4__["OptionsComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/options/documents.ts":
    /*!**************************************!*\
      !*** ./src/app/options/documents.ts ***!
      \**************************************/

    /*! exports provided: pages */

    /***/
    function srcAppOptionsDocumentsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pages", function () {
        return pages;
      });

      var pages = ["CF-005", "CF-009", "CF-010", "CF-011", "CF-012", "CF-013", "CF-014", "CF-015", "CF-016", "CF-017", "CF-018", "CF-019", "CF-020", "CF-024", "CF-025", "CF-026", "CF-027", "CF-028", "CF-029", "CF-030", "CF-031", "CF-032", "CF-033", "CF-034", "CF-035", "CF-036", "CF-037", "CF-038", "CF-039", "CF-040", "CF-041", "CF-042", "CF-044", "CF-045", "CF-046", "CF-047", "CF-048", "CF-049", "CF-050", "CF-051", "CF-052", "CF-053", "CF-054", "CF-055", "CF-056"];
      /***/
    },

    /***/
    "./src/app/options/options.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/options/options.component.ts ***!
      \**********************************************/

    /*! exports provided: OptionsComponent */

    /***/
    function srcAppOptionsOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionsComponent", function () {
        return OptionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storage */
      "./src/app/options/storage.ts");
      /* harmony import */


      var _documents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./documents */
      "./src/app/options/documents.ts");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/stepper */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function OptionsComponent_form_32_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var page_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", page_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](page_r8);
        }
      }

      function OptionsComponent_form_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function OptionsComponent_form_32_Template_form_ngSubmit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r9.handleSubmit($event.target.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Select a Page:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "-- select a page--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, OptionsComponent_form_32_option_8_Template, 2, 2, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r1.formGroup3_1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.pages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r1.formGroup3_1.valid);
        }
      }

      function OptionsComponent_form_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function OptionsComponent_form_33_Template_form_ngSubmit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.handleSubmit($event.target.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Select a Manuscript:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "-- select a manuscript --");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Salzinnes Antiphonal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r2.formGroup3_2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r2.formGroup3_2.valid);
        }
      }

      function OptionsComponent_form_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function OptionsComponent_form_34_Template_form_ngSubmit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r13.handleSubmit($event.target.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Select an MEI Neume File:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Select a Background Image:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r3.formGroup3_3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r3.formGroup3_3.valid);
        }
      }

      function OptionsComponent_form_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function OptionsComponent_form_35_Template_form_ngSubmit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r15.handleSubmit($event.target.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Select a Manifest to Load:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r4.formGroup3_4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r4.formGroup3_4.valid);
        }
      }

      function OptionsComponent_form_36_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var page_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", page_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](page_r18);
        }
      }

      function OptionsComponent_form_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function OptionsComponent_form_36_Template_form_ngSubmit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.handleSubmit($event.target.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Select a Page:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "-- select a page --");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, OptionsComponent_form_36_option_8_Template, 2, 2, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r5.formGroup3_5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r5.addedPages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r5.formGroup3_5.valid);
        }
      }

      function OptionsComponent_form_37_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var manuscript_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", manuscript_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](manuscript_r22);
        }
      }

      function OptionsComponent_form_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function OptionsComponent_form_37_Template_form_ngSubmit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r23.handleSubmit($event.target.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Select a Manuscript:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "-- select a manuscript --");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, OptionsComponent_form_37_option_8_Template, 2, 2, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r6.formGroup3_6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r6.addedManuscripts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r6.formGroup3_6.valid);
        }
      }

      function makeParams(obj) {
        return Object.keys(obj).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
        }).join('&');
      }

      var OptionsComponent = /*#__PURE__*/function () {
        function OptionsComponent() {
          _classCallCheck(this, OptionsComponent);

          this.selectOrUpload = '';
          this.pageOrManuscript = '';
          this.pageOrManifest = '';
          this.pageSelect = '';
          this.formGroup1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            selectOrUpload: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.selectOrUpload, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.formGroup2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            pageOrManuscript: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.pageOrManuscript, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.formGroup3_1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            pageSelect: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.pageSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.formGroup3_2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            manuscriptSelect: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.formGroup3_3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            meiUpload: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bgUpload: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.formGroup3_4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            manifestUpload: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.formGroup3_5 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            selection: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.formGroup3_6 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            selection: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.addedPages = [];
          this.addedManuscripts = [];
        }

        _createClass(OptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.pagesOrig = _documents__WEBPACK_IMPORTED_MODULE_3__["pages"];
            this.pages = _documents__WEBPACK_IMPORTED_MODULE_3__["pages"];
            Object(_storage__WEBPACK_IMPORTED_MODULE_2__["getAllDocuments"])().then(function (response) {
              var _iterator = _createForOfIteratorHelper(response['rows']),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var doc = _step.value;

                  if (doc.doc.kind === "page") {
                    _this.addedPages.push(doc.key);
                  } else {
                    _this.addedManuscripts.push(doc.key);
                  }

                  console.debug(doc);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        }, {
          key: "handleSubmit",
          value: function handleSubmit(e) {
            console.debug("Submit");
            console.debug(e);
            var params;

            switch (e) {
              case "formGroup3_1":
                var value = this.formGroup3_1.controls.pageSelect.value;
                params = makeParams({
                  manifest: value
                });
                window.location.href = "./editor.html?" + params;
                break;

              case "formGroup3_2":
                params = makeParams({
                  manifest: this.formGroup3_2.controls.manuscriptSelect.value
                });
                window.location.href = "./editor.html?" + params;
                break;

              case "formGroup3_3":
                var mei = document.getElementById("meiUpload").files[0];
                var bg = document.getElementById("bgUpload").files[0];
                Object(_storage__WEBPACK_IMPORTED_MODULE_2__["createManifest"])(mei, bg).then(function (manifest) {
                  var manifestBlob = new Blob([JSON.stringify(manifest, null, 2)], {
                    type: 'application/ld+json'
                  });
                  return Object(_storage__WEBPACK_IMPORTED_MODULE_2__["addEntry"])(mei.name, manifestBlob, true);
                }).then(function (_) {
                  window.location.reload();
                })["catch"](function (err) {
                  console.error(err);
                });
                break;

              case "formGroup3_4":
                var manifest = document.getElementById("manifestUpload").files[0];
                Object(_storage__WEBPACK_IMPORTED_MODULE_2__["addEntry"])(manifest.name, manifest, false).then(function (_) {
                  window.location.reload();
                })["catch"](function (err) {
                  console.error(err);
                });
                break;

              case "formGroup3_5":
              case "formGroup3_6":
                var selection = this[e].controls.selection.value;
                params = makeParams({
                  storage: selection
                });
                window.location.href = "./editor.html?" + params;
                break;

              default:
                console.error("Unexpected ID: " + e);
                break;
            }
          }
        }]);

        return OptionsComponent;
      }();

      OptionsComponent.??fac = function OptionsComponent_Factory(t) {
        return new (t || OptionsComponent)();
      };

      OptionsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OptionsComponent,
        selectors: [["app-options"]],
        decls: 38,
        vars: 15,
        consts: [["linear", "true"], ["stepper", ""], ["label", "Select an Option", 3, "stepControl"], [3, "formGroup"], [1, "control", "field"], ["for", "select", 1, "label"], ["type", "radio", "id", "select", "formControlName", "selectOrUpload", "value", "select", 3, "ngModel", "ngModelChange"], ["for", "upload", 1, "label"], ["type", "radio", "id", "upload", "formControlName", "selectOrUpload", "value", "upload", 3, "ngModel", "ngModelChange"], ["for", "uploaded", 1, "label"], ["type", "radio", "id", "uploaded", "formControlName", "selectOrUpload", "value", "uploaded", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "matStepperNext", "", "type", "button"], ["label", "Page or Manuscript", 3, "stepControl"], ["for", "page", 1, "label"], ["type", "radio", "id", "page", "formControlName", "pageOrManuscript", "value", "page", 3, "ngModel", "ngModelChange"], ["for", "manuscript", 1, "label"], ["type", "radio", "id", "manuscript", "formControlName", "pageOrManuscript", "value", "manuscript", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "matStepperPrevious", "", "type", "button"], ["label", "Make Selection"], ["id", "formGroup3_1", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "formGroup3_2", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "formGroup3_3", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "formGroup3_4", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "formGroup3_5", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "formGroup3_6", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "formGroup3_1", 3, "formGroup", "ngSubmit"], ["for", "pageSubmit", 1, "label"], [1, "select"], ["name", "submission", "id", "pageSubmit", "formControlName", "pageSelect"], ["disabled", "", "selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], [3, "value"], ["id", "formGroup3_2", 3, "formGroup", "ngSubmit"], ["for", "manuscriptSubmit", 1, "label"], ["name", "submission", "id", "pageSubmit", "formControlName", "manuscriptSelect"], ["value", "Salzinnes"], ["id", "formGroup3_3", 3, "formGroup", "ngSubmit"], ["for", "meiUpload", 1, "label"], ["type", "file", "formControlName", "meiUpload", "accept", "application/xml, application/x-mei, application/mei, .mei, .x-mei", "id", "meiUpload"], ["for", "bgUpload", 1, "label"], ["type", "file", "formControlName", "bgUpload", "accept", "image/png, image/jpeg", "id", "bgUpload"], ["id", "formGroup3_4", 3, "formGroup", "ngSubmit"], ["for", "manifestUpload", 1, "label"], ["type", "file", "formControlName", "manifestUpload", "accept", ".jsonld,.json,application/ld+json,application/json", "id", "manifestUpload"], ["id", "formGroup3_5", 3, "formGroup", "ngSubmit"], ["id", "pageSubmit", "formControlName", "selection"], ["id", "formGroup3_6", 3, "formGroup", "ngSubmit"], ["id", "manuscriptSubmit", "formControlName", "selection"]],
        template: function OptionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-vertical-stepper", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-step", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "fieldset", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Select a Sample Document:\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OptionsComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.selectOrUpload = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Load a New Document:\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OptionsComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.selectOrUpload = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Select a User-Provided Document:\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OptionsComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.selectOrUpload = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-step", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "fieldset", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Page\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OptionsComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.pageOrManuscript = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Manuscript\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OptionsComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.pageOrManuscript = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-step", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, OptionsComponent_form_32_Template, 14, 3, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, OptionsComponent_form_33_Template, 15, 2, "form", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, OptionsComponent_form_34_Template, 15, 2, "form", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, OptionsComponent_form_35_Template, 11, 2, "form", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, OptionsComponent_form_36_Template, 14, 3, "form", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, OptionsComponent_form_37_Template, 14, 3, "form", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.formGroup1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.formGroup1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectOrUpload);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectOrUpload);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectOrUpload);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.formGroup2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.formGroup2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.pageOrManuscript);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.pageOrManuscript);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectOrUpload === "select" && ctx.pageOrManuscript === "page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectOrUpload === "select" && ctx.pageOrManuscript === "manuscript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectOrUpload === "upload" && ctx.pageOrManuscript === "page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectOrUpload === "upload" && ctx.pageOrManuscript === "manuscript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectOrUpload === "uploaded" && ctx.pageOrManuscript === "page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectOrUpload === "uploaded" && ctx.pageOrManuscript === "manuscript");
          }
        },
        directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperPrevious"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: ["mat-vertical-stepper[_ngcontent-%COMP%] {\n    grid-column: 2;\n}\n\nsection[_ngcontent-%COMP%] {\n    padding: 1rem;\n}\n\nlegend[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\nlabel[_ngcontent-%COMP%] {\n    font-weight: normal;\n}\n\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n    border-left: 5px solid #a94442;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXZlcnRpY2FsLXN0ZXBwZXIge1xuICAgIGdyaWQtY29sdW1uOiAyO1xufVxuXG5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG5sZWdlbmQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OptionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-options',
            templateUrl: './options.component.html',
            styleUrls: ['./options.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/options/storage.ts":
    /*!************************************!*\
      !*** ./src/app/options/storage.ts ***!
      \************************************/

    /*! exports provided: getAllDocuments, createManifest, addEntry, deleteEntry */

    /***/
    function srcAppOptionsStorageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAllDocuments", function () {
        return getAllDocuments;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createManifest", function () {
        return createManifest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addEntry", function () {
        return addEntry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteEntry", function () {
        return deleteEntry;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! uuid */
      "./node_modules/uuid/index.js");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);

      var db = new PouchDB('Neon-User-Storage');

      function getAllDocuments() {
        return new Promise(function (resolve, reject) {
          db.allDocs({
            include_docs: true
          }).then(function (result) {
            resolve(result);
          })["catch"](function (err) {
            reject(err);
          });
        });
      }

      function createManifest(mei, bg) {
        var _this2 = this;

        return new Promise(function (resolve) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var manifest, meiUri, bgUri, meiPromise, bgPromise;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch('https://ddmal.music.mcgill.ca/Neon/contexts/1/manifest.jsonld').then(function (result) {
                      if (result.ok) {
                        return result.json();
                      }
                    });

                  case 2:
                    manifest = _context.sent;
                    manifest['@id'] = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
                    manifest['title'] = mei.name;
                    manifest['timestamp'] = new Date().toISOString();
                    meiPromise = new Promise(function (resolve) {
                      var meiReader = new FileReader();
                      meiReader.addEventListener('load', function () {
                        resolve(meiReader.result);
                      });
                      meiReader.readAsDataURL(mei);
                    });
                    bgPromise = new Promise(function (resolve) {
                      var bgReader = new FileReader();
                      bgReader.addEventListener('load', function () {
                        resolve(bgReader.result);
                      });
                      bgReader.readAsDataURL(bg);
                    });
                    _context.next = 10;
                    return meiPromise;

                  case 10:
                    meiUri = _context.sent;
                    _context.next = 13;
                    return bgPromise;

                  case 13:
                    bgUri = _context.sent;
                    manifest['image'] = bgUri;
                    manifest['mei_annotations'] = [{
                      'id': Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
                      'type': 'Annotation',
                      'body': meiUri,
                      'target': bgUri
                    }];
                    resolve(manifest);

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        });
      }

      function addEntry(title, content, single) {
        return new Promise(function (resolve, reject) {
          db.put({
            _id: title,
            kind: single ? "page" : "manuscript",
            _attachments: {
              manifest: {
                content_type: 'application/ld+json',
                data: content
              }
            }
          }).then(function (_) {
            resolve(true);
          })["catch"](function (err) {
            reject(err);
          });
        });
      }

      function deleteEntry(id) {
        return new Promise(function (resolve, reject) {
          db.get(id).then(function (doc) {
            db.remove(doc).then(function (_) {
              resolve(true);
            })["catch"](function (err) {
              return reject(err);
            });
          })["catch"](function (err) {
            return reject(err);
          });
        });
      }
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/gabrielle/Desktop/DDMAL_summer2021/neon-index/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map