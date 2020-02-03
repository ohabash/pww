(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Instafeed = __webpack_require__(/*! ./custom/instagram-feed */ "./assets/js/theme/custom/instagram-feed.js");

var Brand = function (_CatalogPage) {
    _inherits(Brand, _CatalogPage);

    function Brand() {
        _classCallCheck(this, Brand);

        return _possibleConstructorReturn(this, _CatalogPage.apply(this, arguments));
    }

    Brand.prototype.onReady = function onReady() {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
        }
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

    Brand.prototype.initFacetedSearch = function initFacetedSearch() {
        var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
        var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
        var productsPerPage = this.context.brandProductsPerPage;
        var requestOptions = {
            template: {
                productListing: 'brand/product-listing',
                sidebar: 'brand/sidebar'
            },
            config: {
                shop_by_brand: true,
                brand: {
                    products: {
                        limit: productsPerPage
                    }
                }
            },
            showMore: 'brand/show-more'
        };

        this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').animate({
                scrollTop: 0
            }, 100);
        });
    };

    return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.14.js.map