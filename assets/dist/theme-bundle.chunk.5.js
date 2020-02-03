(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");








var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
    var $input = jquery__WEBPACK_IMPORTED_MODULE_3___default()(input);
    var $formField = $input.parent('.' + formFieldClass);
    var tagName = $input.prop('tagName').toLowerCase();

    var className = formFieldClass + '--' + tagName;
    var specificClassName = void 0;

    // Input can be text/checkbox/radio etc...
    if (tagName === 'input') {
        var inputType = $input.prop('type');

        if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
            // ie: .form-field--checkbox, .form-field--radio
            className = formFieldClass + '--' + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
        } else {
            // ie: .form-field--input .form-field--inputText
            specificClassName = '' + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
        }
    }

    // Apply class modifier
    return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var $form = jquery__WEBPACK_IMPORTED_MODULE_3___default()(formSelector);
    var $inputs = $form.find(inputTagNames.join(', '));

    // Obtain options
    var _options$formFieldCla = options.formFieldClass,
        formFieldClass = _options$formFieldCla === undefined ? 'form-field' : _options$formFieldCla;

    // Classify each input in a form

    $inputs.each(function (__, input) {
        classifyInput(input, formFieldClass);
    });

    return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
    var fieldId = $field.prop('name').match(/(\[.*\])/);

    if (fieldId && fieldId.length !== 0) {
        return fieldId[0];
    }

    return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
    var fieldId = getFieldId($stateField);
    var stateFieldAttrs = {
        type: 'hidden',
        name: 'FormFieldIsText' + fieldId,
        value: '1'
    };

    $stateField.after(jquery__WEBPACK_IMPORTED_MODULE_3___default()('<input />', stateFieldAttrs));
}

var Validators = {
    /**
     * Sets up a new validation when the form is dirty
     * @param validator
     * @param field
     */
    setEmailValidation: function setEmailValidation(validator, field) {
        if (field) {
            validator.add({
                selector: field,
                validate: function validate(cb, val) {
                    var result = _models_forms__WEBPACK_IMPORTED_MODULE_5__["default"].email(val);

                    cb(result);
                },
                errorMessage: 'You must enter a valid email.'
            });
        }
    },

    /**
     * Validate password fields
     * @param validator
     * @param passwordSelector
     * @param password2Selector
     * @param requirements
     * @param isOptional
     */
    setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
        var $password = jquery__WEBPACK_IMPORTED_MODULE_3___default()(passwordSelector);
        var passwordValidations = [{
            selector: passwordSelector,
            validate: function validate(cb, val) {
                var result = val.length;

                if (isOptional) {
                    return cb(true);
                }

                cb(result);
            },
            errorMessage: 'You must enter a password.'
        }, {
            selector: passwordSelector,
            validate: function validate(cb, val) {
                var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

                // If optional and nothing entered, it is valid
                if (isOptional && val.length === 0) {
                    return cb(true);
                }

                cb(result);
            },
            errorMessage: requirements.error
        }, {
            selector: password2Selector,
            validate: function validate(cb, val) {
                var result = val.length;

                if (isOptional) {
                    return cb(true);
                }

                cb(result);
            },
            errorMessage: 'You must enter a password.'
        }, {
            selector: password2Selector,
            validate: function validate(cb, val) {
                var result = val === $password.val();

                cb(result);
            },
            errorMessage: 'Your passwords do not match.'
        }];

        validator.add(passwordValidations);
    },

    /**
     * Validate password fields
     * @param {Nod} validator
     * @param {Object} selectors
     * @param {string} selectors.errorSelector
     * @param {string} selectors.fieldsetSelector
     * @param {string} selectors.formSelector
     * @param {string} selectors.maxPriceSelector
     * @param {string} selectors.minPriceSelector
     */
    setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
        var errorSelector = selectors.errorSelector,
            fieldsetSelector = selectors.fieldsetSelector,
            formSelector = selectors.formSelector,
            maxPriceSelector = selectors.maxPriceSelector,
            minPriceSelector = selectors.minPriceSelector;


        validator.configure({
            form: formSelector,
            preventSubmit: true,
            successClass: '_' // KLUDGE: Don't apply success class
        });

        validator.add({
            errorMessage: 'Min price must be less than max. price.',
            selector: minPriceSelector,
            validate: 'min-max:' + minPriceSelector + ':' + maxPriceSelector
        });

        validator.add({
            errorMessage: 'Min price must be less than max. price.',
            selector: maxPriceSelector,
            validate: 'min-max:' + minPriceSelector + ':' + maxPriceSelector
        });

        validator.add({
            errorMessage: 'Max. price is required.',
            selector: maxPriceSelector,
            validate: 'presence'
        });

        validator.add({
            errorMessage: 'Min. price is required.',
            selector: minPriceSelector,
            validate: 'presence'
        });

        validator.add({
            errorMessage: 'Input must be greater than 0.',
            selector: [minPriceSelector, maxPriceSelector],
            validate: 'min-number:0'
        });

        validator.setMessageOptions({
            selector: [minPriceSelector, maxPriceSelector],
            parent: fieldsetSelector,
            errorSpan: errorSelector
        });
    },

    /**
     * Sets up a new validation when the form is dirty
     * @param validator
     * @param field
     */
    setStateCountryValidation: function setStateCountryValidation(validator, field) {
        if (field) {
            validator.add({
                selector: field,
                validate: 'presence',
                errorMessage: 'The \'State/Province\' field cannot be blank.'
            });
        }
    },

    /**
     * Removes classes from dirty form if previously checked
     * @param field
     */
    cleanUpStateValidation: function cleanUpStateValidation(field) {
        var $fieldClassElement = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-type="' + field.data('fieldType') + '"]');

        Object.keys(_nod__WEBPACK_IMPORTED_MODULE_4__["default"].classes).forEach(function (value) {
            if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_4__["default"].classes[value])) {
                $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_4__["default"].classes[value]);
            }
        });
    }
};



/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
    email: function email(value) {
        var re = /^.+@.+\..+/;
        return re.test(value);
    },


    /**
     * Validates a password field
     * @param value
     * @returns {boolean}
     */
    password: function password(value) {
        return this.notEmpty(value);
    },


    /**
     * validates if a field is empty
     * @param value
     * @returns {boolean}
     *
     */
    notEmpty: function notEmpty(value) {
        return value.length > 0;
    }
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Import all product specific js
 */








var Product = function (_PageManager) {
    _inherits(Product, _PageManager);

    function Product(context) {
        _classCallCheck(this, Product);

        var _this = _possibleConstructorReturn(this, _PageManager.call(this, context));

        _this.url = window.location.href;
        _this.$reviewLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-reveal-id="modal-review-form"]');
        return _this;
    }

    Product.prototype.onReady = function onReady() {
        var _this2 = this;

        // Listen for foundation modal close events to sanitize URL after review.
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('close.fndtn.reveal', function () {
            if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        var validator = void 0;

        // Init collapsible
        Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();

        this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.productView'), this.context, window.BCData.product_attributes);

        Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();

        var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.writeReview-form');
        var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
            validator = review.registerValidation(_this2.context);
        });

        $reviewForm.on('submit', function () {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();
    };

    Product.prototype.productReviewHandler = function productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    };

    return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var _class = function () {
    function _class($reviewForm) {
        _classCallCheck(this, _class);

        this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
            submit: $reviewForm.find('input[type="submit"]')
        });

        this.$reviewsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-reviews');
        this.$collapsible = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-collapsible]', this.$reviewsContent);

        this.initLinkBind();
        this.injectPaginationLink();
        this.collapseReviews();
    }

    /**
     * On initial page load, the user clicks on "(12 Reviews)" link
     * The browser jumps to the review page and should expand the reviews section
     */


    _class.prototype.initLinkBind = function initLinkBind() {
        var _this = this;

        var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#productReviews-content', this.$reviewsContent);

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.productView-reviewLink').on('click', function () {
            if (!$content.hasClass('is-open')) {
                _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
            }
        });
    };

    _class.prototype.collapseReviews = function collapseReviews() {
        // We're in paginating state, do not collapse
        if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
            return;
        }

        // force collapse on page load
        this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
    };

    /**
     * Inject ID into the pagination link
     */


    _class.prototype.injectPaginationLink = function injectPaginationLink() {
        var $nextLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination-item--next .pagination-link', this.$reviewsContent);
        var $prevLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination-item--previous .pagination-link', this.$reviewsContent);

        if ($nextLink.length) {
            $nextLink.attr('href', $nextLink.attr('href') + ' #product-reviews');
        }

        if ($prevLink.length) {
            $prevLink.attr('href', $prevLink.attr('href') + ' #product-reviews');
        }
    };

    _class.prototype.registerValidation = function registerValidation(context) {
        this.context = context;
        this.validator.add([{
            selector: '[name="revrating"]',
            validate: 'presence',
            errorMessage: this.context.reviewRating
        }, {
            selector: '[name="revtitle"]',
            validate: 'min-length:2',
            errorMessage: this.context.reviewSubject
        }, {
            selector: '[name="revtext"]',
            validate: 'min-length:2',
            errorMessage: this.context.reviewComment
        }, {
            selector: '[name="email"]',
            validate: function validate(cb, val) {
                var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
                cb(result);
            },
            errorMessage: this.context.reviewEmail
        }]);

        return this.validator;
    };

    _class.prototype.validate = function validate() {
        return this.validator.performCheck();
    };

    return _class;
}();

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var VideoGallery = function () {
    function VideoGallery($element) {
        _classCallCheck(this, VideoGallery);

        this.$player = $element.find('[data-video-player]');
        this.$videos = $element.find('[data-video-item]');
        this.currentVideo = {};
        this.bindEvents();
    }

    VideoGallery.prototype.selectNewVideo = function selectNewVideo(e) {
        e.preventDefault();

        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);

        this.currentVideo = {
            id: $target.data('videoId'),
            $selectedThumb: $target
        };

        this.setMainVideo();
        this.setActiveThumb();
    };

    VideoGallery.prototype.setMainVideo = function setMainVideo() {
        this.$player.attr('src', '//www.youtube.com/embed/' + this.currentVideo.id);
    };

    VideoGallery.prototype.setActiveThumb = function setActiveThumb() {
        this.$videos.removeClass('is-active');
        this.currentVideo.$selectedThumb.addClass('is-active');
    };

    VideoGallery.prototype.bindEvents = function bindEvents() {
        this.$videos.on('click', this.selectNewVideo.bind(this));
    };

    return VideoGallery;
}();

function videoGallery() {
    var pluginKey = 'video-gallery';
    var $videoGallery = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + pluginKey + ']');

    $videoGallery.each(function (index, element) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
        var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

        if (isInitialized) {
            return;
        }

        $el.data(pluginKey, new VideoGallery($el));
    });
}

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.5.js.map