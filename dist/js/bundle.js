/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/angular/angular.js":
/*!*****************************************!*\
  !*** ./node_modules/angular/angular.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/angular/index.js":
/*!***************************************!*\
  !*** ./node_modules/angular/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./angular */ \"./node_modules/angular/angular.js\");\nmodule.exports = angular;\n\n\n//# sourceURL=webpack:///./node_modules/angular/index.js?");

/***/ }),

/***/ "./src/apis/list.api.ts":
/*!******************************!*\
  !*** ./src/apis/list.api.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction getList(pageNum, pageSize, tab) {\n    var dataArr = [];\n    for (var i = 0; i < 30; i++) {\n        dataArr.push({ id: '' + Math.floor(Math.random() * 100) });\n    }\n    var data = {\n        totalPages: 20,\n        totalCount: 30,\n        pageNum: 3,\n        items: dataArr\n    };\n    return new Promise(function (resolve) {\n        setTimeout(function () {\n            resolve(data);\n        }, Math.random() * 5000);\n    });\n}\nexports.default = {\n    getList: getList\n};\n\n\n//# sourceURL=webpack:///./src/apis/list.api.ts?");

/***/ }),

/***/ "./src/client/components/item/index.ts":
/*!*********************************************!*\
  !*** ./src/client/components/item/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar item_controller_1 = __webpack_require__(/*! ./item.controller */ \"./src/client/components/item/item.controller.ts\");\nvar itemTemplate = __webpack_require__(/*! ./item.html */ \"./src/client/components/item/item.html\");\n__webpack_require__(/*! ./item.less */ \"./src/client/components/item/item.less\");\nfunction default_1() {\n    return {\n        restrict: 'E',\n        scope: {\n            listModel: '='\n        },\n        template: itemTemplate,\n        controller: item_controller_1.default,\n        controllerAs: 'vm',\n        bindToController: true\n    };\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/client/components/item/index.ts?");

/***/ }),

/***/ "./src/client/components/item/item.controller.ts":
/*!*******************************************************!*\
  !*** ./src/client/components/item/item.controller.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar default_1 = /** @class */ (function () {\n    function default_1($scope) {\n        this.$scope = $scope;\n    }\n    default_1.prototype.check = function (item) {\n        item.isSelected = !item.isSelected;\n        if (this.listModel.isSelectedAllByItems()) {\n            this.listModel.isSelectedAll = true;\n        }\n        else if (this.listModel.isNotSelectedAllByItems()) {\n            this.listModel.isSelectedAll = false;\n        }\n    };\n    default_1.$inject = ['$scope'];\n    return default_1;\n}());\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/client/components/item/item.controller.ts?");

/***/ }),

/***/ "./src/client/components/item/item.html":
/*!**********************************************!*\
  !*** ./src/client/components/item/item.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=item-container> <div ng-repeat=\\\"item in vm.listModel.list\\\"> <input type=checkbox name=itemCheckBox ng-click=vm.check(item) ng-model=item.isSelected> <span>{{item.id}}</span> </div> </div>\";\n\n//# sourceURL=webpack:///./src/client/components/item/item.html?");

/***/ }),

/***/ "./src/client/components/item/item.less":
/*!**********************************************!*\
  !*** ./src/client/components/item/item.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/client/components/item/item.less?");

/***/ }),

/***/ "./src/client/components/pager/index.ts":
/*!**********************************************!*\
  !*** ./src/client/components/pager/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar pager_controller_1 = __webpack_require__(/*! ./pager.controller */ \"./src/client/components/pager/pager.controller.ts\");\nvar pagerTemplate = __webpack_require__(/*! ./pager.html */ \"./src/client/components/pager/pager.html\");\n__webpack_require__(/*! ./pager.less */ \"./src/client/components/pager/pager.less\");\nfunction default_1() {\n    return {\n        restrict: 'E',\n        scope: {\n            listModel: '=',\n            reload: '&'\n        },\n        template: pagerTemplate,\n        controller: pager_controller_1.default,\n        controllerAs: 'vm',\n        bindToController: true\n    };\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/client/components/pager/index.ts?");

/***/ }),

/***/ "./src/client/components/pager/pager.controller.ts":
/*!*********************************************************!*\
  !*** ./src/client/components/pager/pager.controller.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar default_1 = /** @class */ (function () {\n    function default_1($location) {\n        this.$location = $location;\n    }\n    return default_1;\n}());\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/client/components/pager/pager.controller.ts?");

/***/ }),

/***/ "./src/client/components/pager/pager.html":
/*!************************************************!*\
  !*** ./src/client/components/pager/pager.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=pager-container> <div ng-if=!vm.listModel.isFirstPage()>...</div> <div ng-click=vm.reload() ng-if=!vm.listModel.isFirstPage() class=page-number>上一页</div> <div>{{vm.listModel.pageNum}}</div> <div ng-click=vm.reload() ng-if=!vm.listModel.isLastPage() class=page-number>下一页</div> <div ng-if=!vm.listModel.isLastPage()>...</div> </div>\";\n\n//# sourceURL=webpack:///./src/client/components/pager/pager.html?");

/***/ }),

/***/ "./src/client/components/pager/pager.less":
/*!************************************************!*\
  !*** ./src/client/components/pager/pager.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/client/components/pager/pager.less?");

/***/ }),

/***/ "./src/client/components/tabBar/index.ts":
/*!***********************************************!*\
  !*** ./src/client/components/tabBar/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tabBar_controller_1 = __webpack_require__(/*! ./tabBar.controller */ \"./src/client/components/tabBar/tabBar.controller.ts\");\nvar tabBarTemplate = __webpack_require__(/*! ./tabBar.html */ \"./src/client/components/tabBar/tabBar.html\");\n__webpack_require__(/*! ./tabBar.less */ \"./src/client/components/tabBar/tabBar.less\");\nfunction default_1() {\n    return {\n        restrict: 'E',\n        scope: {\n            tab: '='\n        },\n        template: tabBarTemplate,\n        controller: tabBar_controller_1.default,\n        controllerAs: 'vm',\n        bindToController: true\n    };\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/client/components/tabBar/index.ts?");

/***/ }),

/***/ "./src/client/components/tabBar/tabBar.controller.ts":
/*!***********************************************************!*\
  !*** ./src/client/components/tabBar/tabBar.controller.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar default_1 = /** @class */ (function () {\n    function default_1($scope) {\n        this.$scope = $scope;\n    }\n    default_1.prototype.changeTab = function (tab) {\n        this.tab = tab;\n    };\n    default_1.$inject = ['$scope'];\n    return default_1;\n}());\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/client/components/tabBar/tabBar.controller.ts?");

/***/ }),

/***/ "./src/client/components/tabBar/tabBar.html":
/*!**************************************************!*\
  !*** ./src/client/components/tabBar/tabBar.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=tab-container> <div class=tab-item ng-click=\\\"vm.changeTab('tab1')\\\"><span>tab1</span></div> <div class=tab-item ng-click=\\\"vm.changeTab('tab2')\\\"><span>tab2</span></div> <div class=tab-item ng-click=\\\"vm.changeTab('tab3')\\\"><span>tab3</span></div> </div>\";\n\n//# sourceURL=webpack:///./src/client/components/tabBar/tabBar.html?");

/***/ }),

/***/ "./src/client/components/tabBar/tabBar.less":
/*!**************************************************!*\
  !*** ./src/client/components/tabBar/tabBar.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/client/components/tabBar/tabBar.less?");

/***/ }),

/***/ "./src/client/pages/appController.js":
/*!*******************************************!*\
  !*** ./src/client/pages/appController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listModel */ \"./src/client/pages/listModel.ts\");\n/* harmony import */ var _listModel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_listModel__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppCtrl);\n\nAppCtrl.$inject = ['$scope'];\n\nfunction AppCtrl($scope) {\n    $scope.listModel = new _listModel__WEBPACK_IMPORTED_MODULE_0___default.a();\n    $scope.tab = null;\n\n    $scope.reload = () => {\n        $scope.listModel.tab = $scope.tab;\n        $scope.listModel.list = [];\n        $scope.listModel.reload().then(() => {\n            $scope.$apply();\n        });\n    };\n\n    $scope.selectAll = () => {\n        $scope.listModel.isSelectedAll = !$scope.listModel.isSelectedAll;\n        $scope.listModel.list.map((item) => {\n            item.isSelected = $scope.listModel.isSelectedAll;\n        })\n    };\n\n    $scope.$watch('tab', () => {\n        $scope.reload();\n    });\n\n    function init () {\n        $scope.reload();\n    }\n    init();\n}\n\n//# sourceURL=webpack:///./src/client/pages/appController.js?");

/***/ }),

/***/ "./src/client/pages/index.js":
/*!***********************************!*\
  !*** ./src/client/pages/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _appController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appController */ \"./src/client/pages/appController.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./src/client/pages/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/item */ \"./src/client/components/item/index.ts\");\n/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_item__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_pager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pager */ \"./src/client/components/pager/index.ts\");\n/* harmony import */ var _components_pager__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_pager__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tabBar */ \"./src/client/components/tabBar/index.ts\");\n/* harmony import */ var _components_tabBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_tabBar__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nangular.module('myApp', [])\n    .controller('AppCtrl', _appController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n    .directive('item', _components_item__WEBPACK_IMPORTED_MODULE_3___default.a)\n    .directive('pager', _components_pager__WEBPACK_IMPORTED_MODULE_4___default.a)\n    .directive('tabBar', _components_tabBar__WEBPACK_IMPORTED_MODULE_5___default.a);\n\n\n//# sourceURL=webpack:///./src/client/pages/index.js?");

/***/ }),

/***/ "./src/client/pages/index.less":
/*!*************************************!*\
  !*** ./src/client/pages/index.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/client/pages/index.less?");

/***/ }),

/***/ "./src/client/pages/listModel.ts":
/*!***************************************!*\
  !*** ./src/client/pages/listModel.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar list_api_1 = __webpack_require__(/*! ../../apis/list.api */ \"./src/apis/list.api.ts\");\nvar ListModel = /** @class */ (function () {\n    function ListModel() {\n        this.list = [];\n        this.totalPages = 0;\n        this.totalCount = 0;\n        this.isSelectedAll = false;\n        this.tab = null;\n        this.pageNum = 1;\n        this.pageSize = 20;\n    }\n    ListModel.prototype.reload = function () {\n        var _this = this;\n        return new Promise(function (resolve, reject) {\n            _this.lastResolverFun = resolve;\n            _this.lastRejectFun = reject;\n            list_api_1.default.getList(_this.pageNum, _this.pageSize, _this.tab)\n                .then(function (listData) {\n                if (resolve !== _this.lastResolverFun) {\n                    return;\n                }\n                _this.totalPages = listData.totalPages;\n                _this.totalCount = listData.totalCount;\n                _this.pageNum = listData.pageNum;\n                _this.list = listData.items.map(function (item) {\n                    item.isSelected = _this.isSelectedAll;\n                    return item;\n                });\n                _this.lastResolverFun();\n            }).catch(function (err) {\n                if (reject !== _this.lastRejectFun) {\n                    return;\n                }\n                _this.lastRejectFun(err);\n            });\n        });\n    };\n    ListModel.prototype.isSelectedAllByItems = function () {\n        return this.list.every(function (item) { return item.isSelected === true; });\n    };\n    ListModel.prototype.isNotSelectedAllByItems = function () {\n        return this.list.some(function (item) { return item.isSelected === false; });\n    };\n    ListModel.prototype.getSelectedArr = function () {\n        return this.list.filter(function (item) { return item.isSelected === true; });\n    };\n    ListModel.prototype.isFirstPage = function () {\n        return this.pageNum === 1;\n    };\n    ListModel.prototype.isLastPage = function () {\n        return this.totalPages === this.pageNum;\n    };\n    return ListModel;\n}());\nexports.default = ListModel;\n\n\n//# sourceURL=webpack:///./src/client/pages/listModel.ts?");

/***/ })

/******/ });