(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Instafeed = __webpack_require__(/*! ./custom/instagram-feed */ "./assets/js/theme/custom/instagram-feed.js");

var Account = function (_PageManager) {
    _inherits(Account, _PageManager);

    function Account(context) {
        _classCallCheck(this, Account);

        var _this = _possibleConstructorReturn(this, _PageManager.call(this, context));

        _this.$state = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-field-type="State"]');
        _this.$body = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body');
        return _this;
    }

    Account.prototype.onReady = function onReady() {
        var $editAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('form[data-edit-account-form]');
        var $addressForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('form[data-address-form]');
        var $inboxForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('form[data-inbox-form]');
        var $accountReturnForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('[data-account-return-form]');
        var $reorderForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('[data-account-reorder-form]');
        var $invoiceButton = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-print-invoice]');

        // Injected via template
        this.passwordRequirements = this.context.passwordRequirements;

        // Instantiates wish list JS
        _wishlist__WEBPACK_IMPORTED_MODULE_3__["default"].load(this.context);

        if ($editAccountForm.length) {
            this.registerEditAccountValidation($editAccountForm);
            if (this.$state.is('input')) {
                Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["insertStateHiddenField"])(this.$state);
            }
        }

        if ($invoiceButton.length) {
            $invoiceButton.on('click', function () {
                var left = window.screen.availWidth / 2 - 450;
                var top = window.screen.availHeight / 2 - 320;
                var url = $invoiceButton.data('printInvoice');

                window.open(url, 'orderInvoice', 'width=900,height=650,left=' + left + ',top=' + top + ',scrollbars=1');
            });
        }

        if ($addressForm.length) {
            this.initAddressFormValidation($addressForm);

            if (this.$state.is('input')) {
                Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["insertStateHiddenField"])(this.$state);
            }
        }

        if ($inboxForm.length) {
            this.registerInboxValidation($inboxForm);
        }

        if ($accountReturnForm.length) {
            this.initAccountReturnFormValidation($accountReturnForm);
        }

        if ($reorderForm.length) {
            this.initReorderForm($reorderForm);
        }

        this.bindDeleteAddress();
    };

    /**
     * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
     */


    Account.prototype.bindDeleteAddress = function bindDeleteAddress() {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-delete-address]').on('submit', function (event) {
            var message = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).data('deleteAddress');

            if (!window.confirm(message)) {
                event.preventDefault();
            }
        });
    };

    Account.prototype.initReorderForm = function initReorderForm($reorderForm) {
        var _this2 = this;

        $reorderForm.on('submit', function (event) {
            var $productReorderCheckboxes = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.account-listItem .form-checkbox:checked');
            var submitForm = false;

            $reorderForm.find('[name^="reorderitem"]').remove();

            $productReorderCheckboxes.each(function (index, productCheckbox) {
                var productId = jquery__WEBPACK_IMPORTED_MODULE_1___default()(productCheckbox).val();
                var $input = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<input>', {
                    type: 'hidden',
                    name: 'reorderitem[' + productId + ']',
                    value: '1'
                });

                submitForm = true;

                $reorderForm.append($input);
            });

            if (!submitForm) {
                event.preventDefault();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                    text: _this2.context.selectItem,
                    type: 'error'
                });
            }
        });
    };

    Account.prototype.initAddressFormValidation = function initAddressFormValidation($addressForm) {
        var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_4__["default"])($addressForm);
        var stateSelector = 'form[data-address-form] [data-field-type="State"]';
        var $stateElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()(stateSelector);
        var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
            submit: 'form[data-address-form] input[type="submit"]'
        });

        addressValidator.add(validationModel);

        if ($stateElement) {
            var $last = void 0;

            // Requests the states for a country with AJAX
            Object(_common_state_country__WEBPACK_IMPORTED_MODULE_5__["default"])($stateElement, this.context, function (err, field) {
                if (err) {
                    throw new Error(err);
                }

                var $field = jquery__WEBPACK_IMPORTED_MODULE_1___default()(field);

                if (addressValidator.getStatus($stateElement) !== 'undefined') {
                    addressValidator.remove($stateElement);
                }

                if ($last) {
                    addressValidator.remove($last);
                }

                if ($field.is('select')) {
                    $last = field;
                    _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].setStateCountryValidation(addressValidator, field);
                } else {
                    _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].cleanUpStateValidation(field);
                }
            });
        }

        $addressForm.on('submit', function (event) {
            addressValidator.performCheck();

            if (addressValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    Account.prototype.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
        var errorMessage = $accountReturnForm.data('accountReturnFormError');

        $accountReturnForm.on('submit', function (event) {
            var formSubmit = false;

            // Iterate until we find a non-zero value in the dropdown for quantity
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
                if (parseInt(jquery__WEBPACK_IMPORTED_MODULE_1___default()(ele).val(), 10) !== 0) {
                    formSubmit = true;

                    // Exit out of loop if we found at least one return
                    return true;
                }
            });

            if (formSubmit) {
                return true;
            }

            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                text: errorMessage,
                type: 'error'
            });

            return event.preventDefault();
        });
    };

    Account.prototype.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
        var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_4__["default"])($editAccountForm);
        var formEditSelector = 'form[data-edit-account-form]';
        var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
            submit: '${formEditSelector} input[type="submit"]'
        });
        var emailSelector = formEditSelector + ' [data-field-type="EmailAddress"]';
        var $emailElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()(emailSelector);
        var passwordSelector = formEditSelector + ' [data-field-type="Password"]';
        var $passwordElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()(passwordSelector);
        var password2Selector = formEditSelector + ' [data-field-type="ConfirmPassword"]';
        var $password2Element = jquery__WEBPACK_IMPORTED_MODULE_1___default()(password2Selector);
        var currentPasswordSelector = formEditSelector + ' [data-field-type="CurrentPassword"]';
        var $currentPassword = jquery__WEBPACK_IMPORTED_MODULE_1___default()(currentPasswordSelector);

        // This only handles the custom fields, standard fields are added below
        editValidator.add(validationModel);

        if ($emailElement) {
            editValidator.remove(emailSelector);
            _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].setEmailValidation(editValidator, emailSelector);
        }

        if ($passwordElement && $password2Element) {
            editValidator.remove(passwordSelector);
            editValidator.remove(password2Selector);
            _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
        }

        if ($currentPassword) {
            editValidator.add({
                selector: currentPasswordSelector,
                validate: function validate(cb, val) {
                    var result = true;

                    if (val === '' && $passwordElement.val() !== '') {
                        result = false;
                    }

                    cb(result);
                },
                errorMessage: this.context.currentPassword
            });
        }

        editValidator.add([{
            selector: formEditSelector + ' input[name=\'account_firstname\']',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.firstName
        }, {
            selector: formEditSelector + ' input[name=\'account_lastname\']',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.lastName
        }, {
            selector: formEditSelector + ' input[name=\'account_phone\']',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.phoneNumber
        }]);

        $editAccountForm.on('submit', function (event) {
            editValidator.performCheck();

            if (editValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    Account.prototype.registerInboxValidation = function registerInboxValidation($inboxForm) {
        var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
            submit: 'form[data-inbox-form] input[type="submit"]'
        });

        inboxValidator.add([{
            selector: 'form[data-inbox-form] select[name="message_order_id"]',
            validate: function validate(cb, val) {
                var result = Number(val) !== 0;

                cb(result);
            },
            errorMessage: this.context.enterOrderNum
        }, {
            selector: 'form[data-inbox-form] input[name="message_subject"]',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.enterSubject
        }, {
            selector: 'form[data-inbox-form] textarea[name="message_content"]',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.enterMessage
        }]);

        $inboxForm.on('submit', function (event) {
            inboxValidator.performCheck();

            if (inboxValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
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

    return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation) {
    // No date range restriction, skip
    if (validation.min_date && validation.max_date) {
        var invalidMessage = 'Your chosen date must fall between ' + validation.min_date + ' and ' + validation.max_date + '.';
        var formElementId = $formField.attr('id');
        var minSplit = validation.min_date.split('-');
        var maxSplit = validation.max_date.split('-');
        var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
        var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);

        return {
            selector: '#' + formElementId + ' select[data-label="year"]',
            triggeredBy: '#' + formElementId + ' select:not([data-label="year"])',
            validate: function validate(cb, val) {
                var day = Number($formField.find('select[data-label="day"]').val());
                var month = Number($formField.find('select[data-label="month"]').val()) - 1;
                var year = Number(val);
                var chosenDate = new Date(year, month, day);

                cb(chosenDate >= minDate && chosenDate <= maxDate);
            },
            errorMessage: invalidMessage
        };
    }
}

/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 */
function buildRequiredCheckboxValidation($formField, validation) {
    var formFieldId = $formField.attr('id');
    var primarySelector = '#' + formFieldId + ' input:first-of-type';
    var secondarySelector = '#' + formFieldId + ' input';

    return {
        selector: primarySelector,
        triggeredBy: secondarySelector,
        validate: function validate(cb) {
            var result = false;

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(secondarySelector).each(function (index, checkbox) {
                if (checkbox.checked) {
                    result = true;

                    return false;
                }
            });

            cb(result);
        },
        errorMessage: 'The \'' + validation.label + '\' field cannot be blank.'
    };
}

function buildRequiredValidation(validation, selector) {
    return {
        selector: selector,
        validate: function validate(cb, val) {
            cb(val.length > 0);
        },

        errorMessage: 'The \'' + validation.label + '\' field cannot be blank.'
    };
}

function buildNumberRangeValidation(validation, formFieldSelector) {
    var invalidMessage = 'The value for ' + validation.label + ' must be between ' + validation.min + ' and ' + validation.max + '.';
    var min = Number(validation.min);
    var max = Number(validation.max);

    return {
        selector: formFieldSelector + ' input[name="' + validation.name + '"]',
        validate: function validate(cb, val) {
            var numberVal = Number(val);

            cb(numberVal >= min && numberVal <= max);
        },
        errorMessage: invalidMessage
    };
}

function buildValidation($validateableElement) {
    var validation = $validateableElement.data('validation');
    var fieldValidations = [];
    var formFieldSelector = '#' + $validateableElement.attr('id');

    if (validation.type === 'datechooser') {
        var dateValidation = buildDateValidation($validateableElement, validation);

        if (dateValidation) {
            fieldValidations.push(dateValidation);
        }
    } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
        fieldValidations.push(buildRequiredCheckboxValidation($validateableElement, validation));
    } else {
        $validateableElement.find('input, select, textarea').each(function (index, element) {
            var $inputElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
            var tagName = $inputElement.get(0).tagName;
            var inputName = $inputElement.attr('name');
            var elementSelector = formFieldSelector + ' ' + tagName + '[name="' + inputName + '"]';

            if (validation.type === 'numberonly') {
                fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
            }
            if (validation.required) {
                fieldValidations.push(buildRequiredValidation(validation, elementSelector));
            }
        });
    }

    return fieldValidations;
}

/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @returns {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function ($form) {
    var validationsToPerform = [];

    $form.find('[data-validation]').each(function (index, input) {
        validationsToPerform = validationsToPerform.concat(buildValidation(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input)));
    });

    return validationsToPerform;
});

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/transform.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/transform.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.7.js.map