(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./assets/js/theme/rss.js":
/*!********************************!*\
  !*** ./assets/js/theme/rss.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Instafeed = __webpack_require__(/*! ./custom/instagram-feed */ "./assets/js/theme/custom/instagram-feed.js");

var RSS = function (_PageManager) {
    _inherits(RSS, _PageManager);

    function RSS() {
        _classCallCheck(this, RSS);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    RSS.prototype.onReady = function onReady() {
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

    return RSS;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (RSS);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.21.js.map