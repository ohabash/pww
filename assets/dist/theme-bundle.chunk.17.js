(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./assets/js/theme/compare.js":
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Instafeed = __webpack_require__(/*! ./custom/instagram-feed */ "./assets/js/theme/custom/instagram-feed.js");

var Compare = function (_PageManager) {
    _inherits(Compare, _PageManager);

    function Compare() {
        _classCallCheck(this, Compare);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    Compare.prototype.onReady = function onReady() {
        var _this2 = this;

        var message = this.context.compareRemoveMessage;

        jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').on('click', '[data-comparison-remove]', function (event) {
            if (_this2.context.comparisons.length <= 2) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    text: message,
                    type: 'error'
                });
                event.preventDefault();
            }
        });

        if (this.context.showInstagramFeed && this.context.instagramAccessToken) {
            var instafeed = new Instafeed({
                accessToken: this.context.instagramAccessToken,
                resolution: 'standard_resolution',
                imageTemplate: '<div class=\"instagramFeed-post\"><a href=\"{{link}}\" target="_blank"><img src=\"{{model.images.standard_resolution.url}}\"><div class=\"instagramFeed-meta\"><div class=\"instagramFeed-caption\">{{caption}} <span class=\"instagramFeed-likes\"><i class=\"far fa-heart\"></i> {{likes}}</span></div></div></div></a></div>',
                videoTemplate: '<div class=\"instagramFeed-post\"><a href=\"{{link}}\" target="_blank"><img src=\"{{model.images.standard_resolution.url}}\"><div class=\"instagramFeed-meta\"><div class=\"instagramFeed-caption\">{{caption}} <span class=\"instagramFeed-likes\"><i class=\"far fa-heart\"></i> {{likes}}</span></div></div></div></a></div>'
                // filter: (image) => image.type.indexOf('image') >= 0,
            });

            instafeed.run();
        }
    };

    return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Compare);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.17.js.map