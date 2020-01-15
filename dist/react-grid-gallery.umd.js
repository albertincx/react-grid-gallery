(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('prop-types'), require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['prop-types', 'react', 'react-dom'], factory) :
  (global = global || self, global.ReactGridGallery = factory(global.PropTypes, global.React, global.ReactDOM));
}(this, (function (PropTypes$1, React, reactDom) { 'use strict';

  PropTypes$1 = PropTypes$1 && PropTypes$1.hasOwnProperty('default') ? PropTypes$1['default'] : PropTypes$1;
  var React__default = 'default' in React ? React['default'] : React;
  var reactDom__default = 'default' in reactDom ? reactDom['default'] : reactDom;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var sheet = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function last(arr) {
    return arr[arr.length - 1];
  }
  // import assign from 'object-assign'
  /*

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance
  - 'polyfills' on server side


  // usage

  import StyleSheet from 'glamor/lib/sheet'
  let styleSheet = new StyleSheet()

  styleSheet.inject()
  - 'injects' the stylesheet into the page (or into memory if on server)

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet


  */

  // const doc = global.document;

  var isBrowser = typeof window !== 'undefined';

  var oldIE = function () {
    if (isBrowser) {
      var div = document.createElement('div');
      div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
      return div.getElementsByTagName('i').length === 1;
    }
    return false;
  }();

  var StyleSheet = function () {
    function StyleSheet() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          document = _ref.document,
          _ref$speedy = _ref.speedy,
          speedy = _ref$speedy === undefined ? !("development" !== 'production')  : _ref$speedy,
          _ref$maxLength = _ref.maxLength,
          maxLength = _ref$maxLength === undefined ? oldIE ? 4000 : 65000 : _ref$maxLength;

      _classCallCheck(this, StyleSheet);

      this.document = document;
      this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
      // this.sheet = undefined;
      this.tags = [];
      this.maxLength = maxLength;
      this.ctr = 0;
      this.inject();
    }

    _createClass(StyleSheet, [{
      key: 'makeStyleTag',
      value: function makeStyleTag() {
        var tag = this.document.createElement('style');
        tag.type = 'text/css';
        tag.setAttribute('data-glamor', '');
        tag.appendChild(this.document.createTextNode(''));
        // todo - use a reference node
        (this.document.head || this.document.getElementsByTagName('head')[0]).appendChild(tag);
        return tag;
      }
    }, {
      key: 'sheetForTag',
      value: function sheetForTag(tag) {
        if (tag.sheet) {
          return tag.sheet;
        }

        // this weirdness brought to you by firefox
        for (var i = 0; i < this.document.styleSheets.length; i++) {
          if (this.document.styleSheets[i].ownerNode === tag) {
            return this.document.styleSheets[i];
          }
        }
      }
    }, {
      key: 'getSheet',
      value: function getSheet() {
        return this.sheetForTag(last(this.tags));
      }
    }, {
      key: 'inject',
      value: function inject() {
        if (this.injected) {
          throw new Error('already injected');
        }
        this.tags[0] = this.makeStyleTag();
        this.injected = true;
      }
    }, {
      key: '_insert',
      value: function _insert(rule) {
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          var sheet = this.getSheet();
          sheet && sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : sheet.cssRules.length);
        } catch (e) {
          {
            // might need beter dx for this
            console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
          }
        }
      }
    }, {
      key: 'insert',
      value: function insert(rule) {
        var sheet = this.getSheet();
        // this is the ultrafast version, works across browsers
        if (this.isSpeedy && sheet && sheet.insertRule) {
          this._insert(rule);
        } else {
          if (rule.indexOf('@import') !== -1) {
            var tag = last(this.tags);
            tag.insertBefore(this.document.createTextNode(rule), tag.firstChild);
          } else {
            last(this.tags).appendChild(this.document.createTextNode(rule));
          }
        }

        this.ctr++;
        if (this.ctr % this.maxLength === 0) {
          this.tags.push(this.makeStyleTag());
        }
      }
    }, {
      key: 'rules',
      value: function rules() {
        var _this = this;

        var arr = [];
        this.tags.forEach(function (tag) {
          return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(_this.sheetForTag(tag).cssRules))));
        });
        return arr;
      }
    }]);

    return StyleSheet;
  }();

  exports.default = StyleSheet;
  });

  unwrapExports(sheet);

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  var _hyphenPattern = /-(.)/g;

  /**
   * Camelcases a hyphenated string, for example:
   *
   *   > camelize('background-color')
   *   < "backgroundColor"
   *
   * @param {string} string
   * @return {string}
   */
  function camelize(string) {
    return string.replace(_hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  }

  var camelize_1 = camelize;

  var msPattern = /^-ms-/;

  /**
   * Camelcases a hyphenated CSS property name, for example:
   *
   *   > camelizeStyleName('background-color')
   *   < "backgroundColor"
   *   > camelizeStyleName('-moz-transition')
   *   < "MozTransition"
   *   > camelizeStyleName('-ms-transition')
   *   < "msTransition"
   *
   * As Andi Smith suggests
   * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
   * is converted to lowercase `ms`.
   *
   * @param {string} string
   * @return {string}
   */
  function camelizeStyleName(string) {
    return camelize_1(string.replace(msPattern, 'ms-'));
  }

  var camelizeStyleName_1 = camelizeStyleName;

  var CSSProperty_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule CSSProperty
   */

  /**
   * CSS properties which accept numbers but are not in units of "px".
   */

  var isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridRowStart: true,
    gridRowEnd: true,
    gridColumn: true,
    gridColumnStart: true,
    gridColumnEnd: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,

    // SVG-related properties
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true

    /**
     * @param {string} prefix vendor-specific prefix, eg: Webkit
     * @param {string} key style name, eg: transitionDuration
     * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
     * WebkitTransitionDuration
     */
  };function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  }

  /**
   * Support style names that may come passed in prefixed by adding permutations
   * of vendor prefixes.
   */
  var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

  // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
  // infinite loop, because it iterates over the newly added props too.
  Object.keys(isUnitlessNumber).forEach(function (prop) {
    prefixes.forEach(function (prefix) {
      isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
  });

  /**
   * Most style properties can be unset by doing .style[prop] = '' but IE8
   * doesn't like doing that with shorthand properties so for the properties that
   * IE8 breaks on, which are listed here, we instead unset each of the
   * individual properties. See http://bugs.jquery.com/ticket/12385.
   * The 4-value 'clock' properties like margin, padding, border-width seem to
   * behave without any problems. Curiously, list-style works too without any
   * special prodding.
   */
  var shorthandPropertyExpansions = {
    background: {
      backgroundAttachment: true,
      backgroundColor: true,
      backgroundImage: true,
      backgroundPositionX: true,
      backgroundPositionY: true,
      backgroundRepeat: true
    },
    backgroundPosition: {
      backgroundPositionX: true,
      backgroundPositionY: true
    },
    border: {
      borderWidth: true,
      borderStyle: true,
      borderColor: true
    },
    borderBottom: {
      borderBottomWidth: true,
      borderBottomStyle: true,
      borderBottomColor: true
    },
    borderLeft: {
      borderLeftWidth: true,
      borderLeftStyle: true,
      borderLeftColor: true
    },
    borderRight: {
      borderRightWidth: true,
      borderRightStyle: true,
      borderRightColor: true
    },
    borderTop: {
      borderTopWidth: true,
      borderTopStyle: true,
      borderTopColor: true
    },
    font: {
      fontStyle: true,
      fontVariant: true,
      fontWeight: true,
      fontSize: true,
      lineHeight: true,
      fontFamily: true
    },
    outline: {
      outlineWidth: true,
      outlineStyle: true,
      outlineColor: true
    }
  };

  var CSSProperty = {
    isUnitlessNumber: isUnitlessNumber,
    shorthandPropertyExpansions: shorthandPropertyExpansions
  };

  exports.default = CSSProperty;
  });

  unwrapExports(CSSProperty_1);

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  var emptyFunction_1 = emptyFunction;

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var warning = emptyFunction_1;

  {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  }

  var warning_1 = warning;

  var dangerousStyleValue_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _CSSProperty2 = _interopRequireDefault(CSSProperty_1);



  var _warning2 = _interopRequireDefault(warning_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule dangerousStyleValue
   */

  var isUnitlessNumber = _CSSProperty2.default.isUnitlessNumber;
  var styleWarnings = {};

  /**
   * Convert a value into the proper css writable value. The style name `name`
   * should be logical (no hyphens), as specified
   * in `CSSProperty.isUnitlessNumber`.
   *
   * @param {string} name CSS property name such as `topMargin`.
   * @param {*} value CSS property value such as `10px`.
   * @param {ReactDOMComponent} component
   * @return {string} Normalized style value with dimensions applied.
   */
  function dangerousStyleValue(name, value, component) {
    // Note that we've removed escapeTextForBrowser() calls here since the
    // whole string will be escaped when the attribute is injected into
    // the markup. If you provide unsafe user data here they can inject
    // arbitrary CSS which may be problematic (I couldn't repro this):
    // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
    // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
    // This is not an XSS hole but instead a potential CSS injection issue
    // which has lead to a greater discussion about how we're going to
    // trust URLs moving forward. See #2115901

    var isEmpty = value == null || typeof value === 'boolean' || value === '';
    if (isEmpty) {
      return '';
    }

    var isNonNumeric = isNaN(value);
    if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
      return '' + value; // cast to string
    }

    if (typeof value === 'string') {
      {
        // Allow '0' to pass through without warning. 0 is already special and
        // doesn't require units, so we don't need to warn about it.
        if (component && value !== '0') {
          var owner = component._currentElement._owner;
          var ownerName = owner ? owner.getName() : null;
          if (ownerName && !styleWarnings[ownerName]) {
            styleWarnings[ownerName] = {};
          }
          var warned = false;
          if (ownerName) {
            var warnings = styleWarnings[ownerName];
            warned = warnings[name];
            if (!warned) {
              warnings[name] = true;
            }
          }
          if (!warned) {
             (0, _warning2.default)(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) ;
          }
        }
      }
      value = value.trim();
    }
    return value + 'px';
  }

  exports.default = dangerousStyleValue;
  });

  unwrapExports(dangerousStyleValue_1);

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  var _uppercasePattern = /([A-Z])/g;

  /**
   * Hyphenates a camelcased string, for example:
   *
   *   > hyphenate('backgroundColor')
   *   < "background-color"
   *
   * For CSS style names, use `hyphenateStyleName` instead which works properly
   * with all vendor prefixes, including `ms`.
   *
   * @param {string} string
   * @return {string}
   */
  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
  }

  var hyphenate_1 = hyphenate;

  var msPattern$1 = /^ms-/;

  /**
   * Hyphenates a camelcased CSS property name, for example:
   *
   *   > hyphenateStyleName('backgroundColor')
   *   < "background-color"
   *   > hyphenateStyleName('MozTransition')
   *   < "-moz-transition"
   *   > hyphenateStyleName('msTransition')
   *   < "-ms-transition"
   *
   * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
   * is converted to `-ms-`.
   *
   * @param {string} string
   * @return {string}
   */
  function hyphenateStyleName(string) {
    return hyphenate_1(string).replace(msPattern$1, '-ms-');
  }

  var hyphenateStyleName_1 = hyphenateStyleName;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   * @typechecks static-only
   */

  /**
   * Memoizes the return value of a function that accepts one string argument.
   */

  function memoizeStringOnly(callback) {
    var cache = {};
    return function (string) {
      if (!cache.hasOwnProperty(string)) {
        cache[string] = callback.call(this, string);
      }
      return cache[string];
    };
  }

  var memoizeStringOnly_1 = memoizeStringOnly;

  var CSSPropertyOperations = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.processStyleName = undefined;
  exports.createMarkupForStyles = createMarkupForStyles;



  var _camelizeStyleName2 = _interopRequireDefault(camelizeStyleName_1);



  var _dangerousStyleValue2 = _interopRequireDefault(dangerousStyleValue_1);



  var _hyphenateStyleName2 = _interopRequireDefault(hyphenateStyleName_1);



  var _memoizeStringOnly2 = _interopRequireDefault(memoizeStringOnly_1);



  var _warning2 = _interopRequireDefault(warning_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var processStyleName = exports.processStyleName = (0, _memoizeStringOnly2.default)(_hyphenateStyleName2.default); /**
                                                                                                                     * Copyright 2013-present, Facebook, Inc.
                                                                                                                     * All rights reserved.
                                                                                                                     *
                                                                                                                     * This source code is licensed under the BSD-style license found in the
                                                                                                                     * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                     * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                     *
                                                                                                                     * @providesModule CSSPropertyOperations
                                                                                                                     */

  {
    // 'msTransform' is correct, but the other prefixes should be capitalized
    var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

    // style values shouldn't contain a semicolon
    var badStyleValueWithSemicolonPattern = /;\s*$/;

    var warnedStyleNames = {};
    var warnedStyleValues = {};
    var warnedForNaNValue = false;

    var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
        return;
      }

      warnedStyleNames[name] = true;
       (0, _warning2.default)(false, 'Unsupported style property %s. Did you mean %s?%s', name, (0, _camelizeStyleName2.default)(name), checkRenderMessage(owner)) ;
    };

    var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
        return;
      }

      warnedStyleNames[name] = true;
       (0, _warning2.default)(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) ;
    };

    var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
      if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
        return;
      }

      warnedStyleValues[value] = true;
       (0, _warning2.default)(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) ;
    };

    var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
      if (warnedForNaNValue) {
        return;
      }

      warnedForNaNValue = true;
       (0, _warning2.default)(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) ;
    };

    var checkRenderMessage = function checkRenderMessage(owner) {
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    };

    /**
     * @param {string} name
     * @param {*} value
     * @param {ReactDOMComponent} component
     */
    var warnValidStyle = function warnValidStyle(name, value, component) {
      //eslint-disable-line no-var
      var owner = void 0;
      if (component) {
        owner = component._currentElement._owner;
      }
      if (name.indexOf('-') > -1) {
        warnHyphenatedStyleName(name, owner);
      } else if (badVendoredStyleNamePattern.test(name)) {
        warnBadVendoredStyleName(name, owner);
      } else if (badStyleValueWithSemicolonPattern.test(value)) {
        warnStyleValueWithSemicolon(name, value, owner);
      }

      if (typeof value === 'number' && isNaN(value)) {
        warnStyleValueIsNaN(name, value, owner);
      }
    };
  }

  /**
     * Serializes a mapping of style properties for use as inline styles:
     *
     *   > createMarkupForStyles({width: '200px', height: 0})
     *   "width:200px;height:0;"
     *
     * Undefined values are ignored so that declarative programming is easier.
     * The result should be HTML-escaped before insertion into the DOM.
     *
     * @param {object} styles
     * @param {ReactDOMComponent} component
     * @return {?string}
     */

  function createMarkupForStyles(styles, component) {
    var serialized = '';
    for (var styleName in styles) {
      var isCustomProp = styleName.indexOf('--') === 0;
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      if (styleName === 'label') {
        continue;
      }
      var styleValue = styles[styleName];
      if ( !isCustomProp) {
        warnValidStyle(styleName, styleValue, component);
      }
      if (styleValue != null) {
        if (isCustomProp) {
          serialized += styleName + ':' + styleValue + ';';
        } else {
          serialized += processStyleName(styleName) + ':';
          serialized += (0, _dangerousStyleValue2.default)(styleName, styleValue, component) + ';';
        }
      }
    }
    return serialized || null;
  }
  });

  unwrapExports(CSSPropertyOperations);
  var CSSPropertyOperations_1 = CSSPropertyOperations.processStyleName;
  var CSSPropertyOperations_2 = CSSPropertyOperations.createMarkupForStyles;

  var staticData = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var w = ["Webkit"];
  var m = ["Moz"];
  var ms = ["ms"];
  var wm = ["Webkit", "Moz"];
  var wms = ["Webkit", "ms"];
  var wmms = ["Webkit", "Moz", "ms"];

  exports.default = {
    plugins: [],
    prefixMap: { "appearance": wm, "userSelect": wmms, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "filter": w, "fontFeatureSettings": w, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "writingMode": wms, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
  };
  module.exports = exports["default"];
  });

  unwrapExports(staticData);

  var capitalizeString_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = capitalizeString;
  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  module.exports = exports["default"];
  });

  unwrapExports(capitalizeString_1);

  var prefixProperty_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixProperty;



  var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function prefixProperty(prefixProperties, property, style) {
    if (prefixProperties.hasOwnProperty(property)) {
      var requiredPrefixes = prefixProperties[property];
      for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
        style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
      }
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(prefixProperty_1);

  var prefixValue_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixValue;
  function prefixValue(plugins, property, value, style, metaData) {
    for (var i = 0, len = plugins.length; i < len; ++i) {
      var processedValue = plugins[i](property, value, style, metaData);

      // we can stop processing if a value is returned
      // as all plugin criteria are unique
      if (processedValue) {
        return processedValue;
      }
    }
  }
  module.exports = exports["default"];
  });

  unwrapExports(prefixValue_1);

  var cursor_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cursor;
  var prefixes = ['-webkit-', '-moz-', ''];

  var values = {
    'zoom-in': true,
    'zoom-out': true,
    grab: true,
    grabbing: true
  };

  function cursor(property, value) {
    if (property === 'cursor' && values.hasOwnProperty(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(cursor_1);

  var isPrefixedValue_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isPrefixedValue;
  var regex = /-webkit-|-moz-|-ms-/;

  function isPrefixedValue(value) {
    return typeof value === 'string' && regex.test(value);
  }
  module.exports = exports['default'];
  });

  unwrapExports(isPrefixedValue_1);

  var crossFade_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = crossFade;



  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // http://caniuse.com/#search=cross-fade
  var prefixes = ['-webkit-', ''];
  function crossFade(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
      return prefixes.map(function (prefix) {
        return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
      });
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(crossFade_1);

  var filter_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = filter;



  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // http://caniuse.com/#feat=css-filter-function
  var prefixes = ['-webkit-', ''];
  function filter(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
      return prefixes.map(function (prefix) {
        return value.replace(/filter\(/g, prefix + 'filter(');
      });
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(filter_1);

  var flex_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flex;
  var values = {
    flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
    'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
  };

  function flex(property, value) {
    if (property === 'display' && values.hasOwnProperty(value)) {
      return values[value];
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(flex_1);

  var flexboxOld_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexboxOld;
  var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple'
  };

  var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines'
  };

  function flexboxOld(property, value, style) {
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(flexboxOld_1);

  var gradient_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = gradient;



  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var prefixes = ['-webkit-', '-moz-', ''];

  var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

  function gradient(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(gradient_1);

  var imageSet_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = imageSet;



  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // http://caniuse.com/#feat=css-image-set
  var prefixes = ['-webkit-', ''];
  function imageSet(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
      return prefixes.map(function (prefix) {
        return value.replace(/image-set\(/g, prefix + 'image-set(');
      });
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(imageSet_1);

  var position_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = position;
  function position(property, value) {
    if (property === 'position' && value === 'sticky') {
      return ['-webkit-sticky', 'sticky'];
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(position_1);

  var sizing_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = sizing;
  var prefixes = ['-webkit-', '-moz-', ''];

  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
  };

  function sizing(property, value) {
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(sizing_1);

  /* eslint-disable no-var, prefer-template */
  var uppercasePattern = /[A-Z]/g;
  var msPattern$2 = /^ms-/;
  var cache = {};

  function toHyphenLower(match) {
    return '-' + match.toLowerCase()
  }

  function hyphenateStyleName$1(name) {
    if (cache.hasOwnProperty(name)) {
      return cache[name]
    }

    var hName = name.replace(uppercasePattern, toHyphenLower);
    return (cache[name] = msPattern$2.test(hName) ? '-' + hName : hName)
  }

  var hyphenateProperty_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hyphenateProperty;



  var _hyphenateStyleName2 = _interopRequireDefault(hyphenateStyleName$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function hyphenateProperty(property) {
    return (0, _hyphenateStyleName2.default)(property);
  }
  module.exports = exports['default'];
  });

  unwrapExports(hyphenateProperty_1);

  var transition_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = transition;



  var _hyphenateProperty2 = _interopRequireDefault(hyphenateProperty_1);



  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);



  var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
  };


  var prefixMapping = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-'
  };

  function prefixValue(value, propertyPrefixMap) {
    if ((0, _isPrefixedValue2.default)(value)) {
      return value;
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    for (var i = 0, len = multipleValues.length; i < len; ++i) {
      var singleValue = multipleValues[i];
      var values = [singleValue];
      for (var property in propertyPrefixMap) {
        var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

        if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          var prefixes = propertyPrefixMap[property];
          for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
            // join all prefixes and create a new value
            values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
          }
        }
      }

      multipleValues[i] = values.join(',');
    }

    return multipleValues.join(',');
  }

  function transition(property, value, style, propertyPrefixMap) {
    // also check for already prefixed transitions
    if (typeof value === 'string' && properties.hasOwnProperty(property)) {
      var outputValue = prefixValue(value, propertyPrefixMap);
      // if the property is already prefixed
      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-moz-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Webkit') > -1) {
        return webkitOutput;
      }

      var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-webkit-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Moz') > -1) {
        return mozOutput;
      }

      style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
      style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
      return outputValue;
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(transition_1);

  var prefix = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixer;



  var _staticData2 = _interopRequireDefault(staticData);



  var _prefixProperty2 = _interopRequireDefault(prefixProperty_1);



  var _prefixValue2 = _interopRequireDefault(prefixValue_1);



  var _cursor2 = _interopRequireDefault(cursor_1);



  var _crossFade2 = _interopRequireDefault(crossFade_1);



  var _filter2 = _interopRequireDefault(filter_1);



  var _flex2 = _interopRequireDefault(flex_1);



  var _flexboxOld2 = _interopRequireDefault(flexboxOld_1);



  var _gradient2 = _interopRequireDefault(gradient_1);



  var _imageSet2 = _interopRequireDefault(imageSet_1);



  var _position2 = _interopRequireDefault(position_1);



  var _sizing2 = _interopRequireDefault(sizing_1);



  var _transition2 = _interopRequireDefault(transition_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];
  // custom facade for inline-style-prefixer

  var prefixMap = _staticData2.default.prefixMap;

  function prefixer(style) {
    for (var property in style) {
      var value = style[property];

      var processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

      // only modify the value if it was touched
      // by any plugin to prevent unnecessary mutations
      if (processedValue) {
        style[property] = processedValue;
      }

      (0, _prefixProperty2.default)(prefixMap, property, style);
    }
    return style;
  }
  });

  unwrapExports(prefix);

  var plugins = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  // parser plugins
  // render plugins

  exports.fallbacks = fallbacks;
  exports.contentWrap = contentWrap;
  exports.prefixes = prefixes;





  var _prefix2 = _interopRequireDefault(prefix);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function fallbacks(node) {
    var hasArray = Object.keys(node.style).map(function (x) {
      return Array.isArray(node.style[x]);
    }).indexOf(true) >= 0;
    if (hasArray) {
      var style = node.style;

      var flattened = Object.keys(style).reduce(function (o, key) {
        o[key] = Array.isArray(style[key]) ? style[key].join('; ' + (0, CSSPropertyOperations.processStyleName)(key) + ': ') : style[key];
        return o;
      }, {});
      // todo -
      // flatten arrays which haven't been flattened yet
      return _extends({}, node, { style: flattened });
    }
    return node;
  }

  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit'];

  function contentWrap(node) {
    if (node.style.content) {
      var cont = node.style.content;
      if (contentValues.indexOf(cont) >= 0) {
        return node;
      }
      if (/^(attr|calc|counters?|url)\(/.test(cont)) {
        return node;
      }
      if (cont.charAt(0) === cont.charAt(cont.length - 1) && (cont.charAt(0) === '"' || cont.charAt(0) === "'")) {
        return node;
      }
      return _extends({}, node, { style: _extends({}, node.style, { content: '"' + cont + '"' }) });
    }
    return node;
  }

  function prefixes(node) {
    return _extends({}, node, { style: (0, _prefix2.default)(_extends({}, node.style)) });
  }
  });

  unwrapExports(plugins);
  var plugins_1 = plugins.fallbacks;
  var plugins_2 = plugins.contentWrap;
  var plugins_3 = plugins.prefixes;

  var generate_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.simulations = simulations;
  exports.default = generate;
  // import type { AST } from './types';


  // a flag to enable simulation meta tags on dom nodes
  // defaults to true in dev mode. recommend *not* to
  // toggle often.
  var canSimulate = "development" !== 'production';

  // toggles simulation activity. shouldn't be needed in most cases
  function simulations() {
    var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    canSimulate = !!bool;
  }

  // takes a string, converts to lowercase, strips out nonalphanumeric.
  function simple(str) {
    var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    return str.toLowerCase().replace(/[^a-z0-9]/g, replace);
  }

  // from https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61

  // "Tokenizes" the selectors into parts relevant for the next function.
  // Strings and comments are matched, but ignored afterwards.
  // This is not a full tokenizers. It only recognizes comas, parentheses,
  // strings and comments.
  // regexp generated by scripts/regexps.js then trimmed by hand
  var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

  /**
   * This will split a coma-separated selector list into individual selectors,
   * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
   *
   * @param {string} selector
   * @return {string[]}
   */

  function splitSelector(selector) {
    if (selector.indexOf(',') === -1) {
      return [selector];
    }

    var indices = [],
        res = [],
        inParen = 0,
        o;
    /*eslint-disable no-cond-assign*/
    while (o = selectorTokenizer.exec(selector)) {
      /*eslint-enable no-cond-assign*/
      switch (o[0]) {
        case '(':
          inParen++;
          break;
        case ')':
          inParen--;
          break;
        case ',':
          if (inParen) break;
          indices.push(o.index);
      }
    }
    for (o = indices.length; o--;) {
      res.unshift(selector.slice(indices[o] + 1));
      selector = selector.slice(0, indices[o]);
    }
    res.unshift(selector);
    return res;
  }

  function selector(id) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (!id && path) {
      return path.replace(/\&/g, '');
    }
    if (id && !path) return '.' + id;

    var x = splitSelector(path).map(function (x) {
      return x.indexOf('&') >= 0 ? x.replace(/\&/gm, '.' + id) // todo - make sure each sub selector has an &
      : '.' + id + x;
    }).join(',');

    if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
      x += ',.' + id + '[data-simulate-' + simple(path) + ']';
    }
    return x;
  }

  function toCSS(node) {
    var result = (0, plugins.prefixes)((0, plugins.fallbacks)((0, plugins.contentWrap)(node)));
    return result.selector + '{' + (0, CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
  }

  function toCSSArray(id, parsed) {
    var css = [];

    // plugins here
    var plain = parsed.plain,
        selects = parsed.selects,
        medias = parsed.medias,
        supports = parsed.supports;
    // todo - :host?

    if (plain) {
      css.push(toCSS({ style: plain, selector: selector(id) }));
    }
    if (selects) {
      Object.keys(selects).forEach(function (key) {
        return css.push(toCSS({ style: selects[key], selector: selector(id, key) }));
      });
    }
    if (medias) {
      Object.keys(medias).forEach(function (key) {
        return css.push(key + '{' + toCSSArray(id, medias[key]).join('') + '}');
      });
    }
    if (supports) {
      Object.keys(supports).forEach(function (key) {
        return css.push(key + '{' + toCSSArray(id, supports[key]).join('') + '}');
      });
    }
    return css;
  }

  // todo - if server side, then cache on classname
  function generate(_ref) {
    var className = _ref.className,
        parsed = _ref.parsed;

    return toCSSArray(className, parsed);
  }
  });

  unwrapExports(generate_1);
  var generate_2 = generate_1.simulations;

  var Glam_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _sheet2 = _interopRequireDefault(sheet);



  var _generate2 = _interopRequireDefault(generate_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var isBrowser = typeof window !== 'undefined';


  var cache = new WeakMap();

  var Glam = function () {
    function Glam() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Glam);

      this.props = props;
      if (isBrowser) {
        var doc = this.props.document;
        var cached = cache.get(doc);
        if (cached) {
          return cached;
        }
        cache.set(doc, this);
        this.sheet = new _sheet2.default({ document: doc });
      }

      this.inserted = {};
      this.tagged = {};
    }

    _createClass(Glam, [{
      key: 'hydrate',
      value: function hydrate(ids) {
        var _this = this;

        ids.forEach(function (id) {
          return _this.inserted[id] = true;
        });
      }
    }, {
      key: 'tag',
      value: function tag(id) {
        this.tagged[id] = true;
      }
    }, {
      key: 'isTagged',
      value: function isTagged(id) {
        return this.tagged[id];
      }
    }, {
      key: 'insert',
      value: function insert(ast) {
        var _this2 = this;

        if (!this.inserted[ast.className]) {
          var _rules = (0, _generate2.default)(ast);
          if (isBrowser) {
            _rules.forEach(function (rule) {
              return _this2.sheet.insert(rule);
            });
          }
          this.inserted[ast.className] = true; // on server, add rules instead
        }
      }
    }]);

    return Glam;
  }();

  exports.default = Glam;
  });

  unwrapExports(Glam_1);

  var flatten_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flatten;
  function flatten(inArr) {
    var arr = [];
    for (var i = 0; i < inArr.length; i++) {
      if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));else arr = arr.concat(inArr[i]);
    }
    return arr;
  }
  });

  unwrapExports(flatten_1);

  var hash = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hashify;

  // murmurhash2 via https://gist.github.com/raycmorgan/588423

  function hashify(obj) {
    var str = JSON.stringify(obj);
    var toRet = doHash(str, str.length).toString(36);
    // if(obj.label && (obj.label.length > 0) && isDev){
    //   return simple(obj.label.join('.'), '-') + '-' + toRet
    // }
    return toRet;
  }

  function doHash(str, seed) {
    var m = 0x5bd1e995;
    var r = 24;
    var h = seed ^ str.length;
    var length = str.length;
    var currentIndex = 0;

    while (length >= 4) {
      var k = UInt32(str, currentIndex);

      k = Umul32(k, m);
      k ^= k >>> r;
      k = Umul32(k, m);

      h = Umul32(h, m);
      h ^= k;

      currentIndex += 4;
      length -= 4;
    }

    switch (length) {
      case 3:
        h ^= UInt16(str, currentIndex);
        h ^= str.charCodeAt(currentIndex + 2) << 16;
        h = Umul32(h, m);
        break;

      case 2:
        h ^= UInt16(str, currentIndex);
        h = Umul32(h, m);
        break;

      case 1:
        h ^= str.charCodeAt(currentIndex);
        h = Umul32(h, m);
        break;
    }

    h ^= h >>> 13;
    h = Umul32(h, m);
    h ^= h >>> 15;

    return h >>> 0;
  }

  function UInt32(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
  }

  function UInt16(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
  }

  function Umul32(n, m) {
    n = n | 0;
    m = m | 0;
    var nlo = n & 0xffff;
    var nhi = n >>> 16;
    var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
    return res;
  }
  });

  unwrapExports(hash);

  var parse_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cssLabels = cssLabels;
  exports.default = parse;



  var _flatten2 = _interopRequireDefault(flatten_1);



  var _hash2 = _interopRequireDefault(hash);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**** labels ****/
  // toggle for debug labels.
  // *shouldn't* have to mess with this manually


  // import clean from './clean';
  var hasLabels = "development" !== 'production';

  function cssLabels(bool) {
    hasLabels = !!bool;
  }

  var prefixedPseudoSelectors = {
    '::placeholder': ['::-webkit-input-placeholder', '::-moz-placeholder', '::-ms-input-placeholder'],
    ':fullscreen': [':-webkit-full-screen', ':-moz-full-screen', ':-ms-fullscreen']
  };

  function isSelector(key) {
    var possibles = [':', '.', '[', '>', ' '],
        found = false,
        ch = key.charAt(0);
    for (var i = 0; i < possibles.length; i++) {
      if (ch === possibles[i]) {
        found = true;
        break;
      }
    }
    return found || key.indexOf('&') >= 0;
  }
  // from https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61

  // "Tokenizes" the selectors into parts relevant for the next function.
  // Strings and comments are matched, but ignored afterwards.
  // This is not a full tokenizers. It only recognizes comas, parentheses,
  // strings and comments.
  // regexp generated by scripts/regexps.js then trimmed by hand
  var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

  /**
   * This will split a coma-separated selector list into individual selectors,
   * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
   *
   * @param {string} selector
   * @return {string[]}
   */

  function splitSelector(selector) {
    if (selector.indexOf(',') === -1) {
      return [selector];
    }

    var indices = [],
        res = [],
        inParen = 0,
        o;
    /*eslint-disable no-cond-assign*/
    while (o = selectorTokenizer.exec(selector)) {
      /*eslint-enable no-cond-assign*/
      switch (o[0]) {
        case '(':
          inParen++;
          break;
        case ')':
          inParen--;
          break;
        case ',':
          if (inParen) break;
          indices.push(o.index);
      }
    }
    for (o = indices.length; o--;) {
      res.unshift(selector.slice(indices[o] + 1));
      selector = selector.slice(0, indices[o]);
    }
    res.unshift(selector);
    return res;
  }

  function joinSelectors(a, b) {
    var as = splitSelector(a).map(function (a) {
      return !(a.indexOf('&') >= 0) ? '&' + a : a;
    });
    var bs = splitSelector(b).map(function (b) {
      return !(b.indexOf('&') >= 0) ? '&' + b : b;
    });

    return bs.reduce(function (arr, b) {
      return arr.concat(as.map(function (a) {
        return b.replace(/\&/g, a);
      }));
    }, []).join(',');
  }

  function joinMediaQueries(a, b) {
    return a ? '@media ' + a.substring(6) + ' and ' + b.substring(6) : b;
  }

  function isMediaQuery(key) {
    return key.indexOf('@media') === 0;
  }

  function isSupports(key) {
    return key.indexOf('@supports') === 0;
  }

  function joinSupports(a, b) {
    return a ? '@supports ' + a.substring(9) + ' and ' + b.substring(9) : b;
  }

  // mutable! modifies dest.
  function construct(dest, _ref) {
    var _ref$selector = _ref.selector,
        selector = _ref$selector === undefined ? '' : _ref$selector,
        _ref$mq = _ref.mq,
        mq = _ref$mq === undefined ? '' : _ref$mq,
        _ref$supp = _ref.supp,
        supp = _ref$supp === undefined ? '' : _ref$supp,
        _ref$inputs = _ref.inputs,
        inputs = _ref$inputs === undefined ? {} : _ref$inputs;

    var inputArray = !Array.isArray(inputs) ? [inputs] : (0, _flatten2.default)(inputs);

    inputArray.filter(function (x) {
      return !!x;
    }).forEach(function (input) {
      var src = input;

      Object.keys(src || {}).forEach(function (key) {
        if (isSelector(key)) {
          // todo - regex test the string to look for prefixedpseudos
          if (prefixedPseudoSelectors[key]) {
            prefixedPseudoSelectors[key].forEach(function (p) {
              return construct(dest, {
                selector: joinSelectors(selector, p),
                mq: mq,
                supp: supp,
                inputs: src[key]
              });
            });
          }
          construct(dest, {
            selector: joinSelectors(selector, key),
            mq: mq,
            supp: supp,
            inputs: src[key]
          });
        } else if (isMediaQuery(key)) {
          construct(dest, {
            selector: selector,
            mq: joinMediaQueries(mq, key),
            supp: supp,
            inputs: src[key]
          });
        } else if (isSupports(key)) {
          construct(dest, {
            selector: selector,
            mq: mq,
            supp: joinSupports(supp, key),
            inputs: src[key]
          });
        } else {
          var _dest = dest;
          if (supp) {
            _dest[supp] = _dest[supp] || {};
            _dest = _dest[supp];
          }
          if (mq) {
            _dest[mq] = _dest[mq] || {};
            _dest = _dest[mq];
          }
          if (selector) {
            _dest[selector] = _dest[selector] || {};
            _dest = _dest[selector];
          }

          if (key === 'label') {
            if (hasLabels) {
              // concat at root of object
              dest.label = dest.label.concat(src.label);
            }
          } else {
            _dest[key] = src[key];
          }
        }
      });
    });

    return dest;
  }

  function groupByType(style) {
    // we can be sure it's not infinitely nested here
    var plain = void 0,
        selects = void 0,
        medias = void 0,
        supports = void 0;
    Object.keys(style).forEach(function (key) {
      if (key.indexOf('&') >= 0) {
        selects = selects || {};
        selects[key] = style[key];
      } else if (key.indexOf('@media') === 0) {
        medias = medias || {};
        medias[key] = groupByType(style[key]);
      } else if (key.indexOf('@supports') === 0) {
        supports = supports || {};
        supports[key] = groupByType(style[key]);
      } else if (key === 'label') {
        if (style.label.length > 0) {
          plain = plain || {};
          plain.label = hasLabels ? style.label.join('.') : '';
        }
      } else {
        plain = plain || {};
        plain[key] = style[key];
      }
    });
    return { plain: plain, selects: selects, medias: medias, supports: supports };
  }

  function parse(css) {
    var parsed = groupByType(construct({ label: [] }, { inputs: css }));
    var className = 'css-' + (0, _hash2.default)(parsed);
    return { className: className, parsed: parsed };
  }
  });

  unwrapExports(parse_1);
  var parse_2 = parse_1.cssLabels;

  var lib = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  exports.default = glam;
  exports.hydrate = hydrate;



  var _propTypes2 = _interopRequireDefault(PropTypes$1);



  var _react2 = _interopRequireDefault(React__default);





  var _Glam2 = _interopRequireDefault(Glam_1);



  var _parse2 = _interopRequireDefault(parse_1);



  var _generate2 = _interopRequireDefault(generate_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var isBrowser = typeof window !== 'undefined';

  var isHydrating = false;

  var nullClass = (0, _parse2.default)({}).className;

  // @theme
  var Styled = function (_React$Component) {
    _inherits(Styled, _React$Component);

    function Styled() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Styled);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Styled.__proto__ || Object.getPrototypeOf(Styled)).call.apply(_ref, [this].concat(args))), _this), _this.glam = _this.context.glam || new _Glam2.default(isBrowser ? { document: document } : undefined), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Styled, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          glam: this.glam
        };
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.flush) {
          this.flush();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var css = this.props.css;

        // check parse cache
        // else

        var ast = (0, _parse2.default)(css);

        var cls = ast.className === nullClass ? '' : ast.className;

        var element = this.props.render(cls);

        if (!isBrowser || isBrowser && isHydrating) {
          if (this.glam.isTagged(ast.className)) {
            return element;
          }
          this.glam.tag(ast.className);

          this.flush = function () {
            return _this2.glam.insert(ast);
          }; // you already have this content via `$([data-glam='${cls}'])`
          var generated = (0, _generate2.default)(ast).join('');

          return generated ? React__default.Children.toArray([_react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: generated } }), element]) : element;
        }
        this.glam.insert(ast);
        return element;
      }
    }]);

    return Styled;
  }(_react2.default.Component);

  Styled.displayName = 'css';
  Styled.contextTypes = {
    glam: _propTypes2.default.object
  };
  Styled.childContextTypes = {
    glam: _propTypes2.default.object
  };
  function glam(Type, props) {
    for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      children[_key2 - 2] = arguments[_key2];
    }

    var _ref2 = props || {},
        css = _ref2.css,
        className = _ref2.className,
        rest = _objectWithoutProperties(_ref2, ['css', 'className']);
    // clean css ?


    if (css) {
      return _react2.default.createElement(Styled, {
        css: css,
        render: function render(cls) {
          var applyClass = className ? cls ? className + ' ' + cls : className : cls;
          return React__default.createElement.apply(undefined, [Type, applyClass ? _extends({}, rest, { className: applyClass }) : rest].concat(children));
        }
      });
    } else {
      return React__default.createElement.apply(undefined, [Type, props].concat(children));
    }
  }

  function hydrate(element, dom, callback) {
    isHydrating = true;
    (0, reactDom__default.hydrate)(element, dom, function () {
      isHydrating = false;
      callback && callback();
    });
  }
  });

  var glam = unwrapExports(lib);
  var lib_1 = lib.hydrate;

  var rafScheduler = (function (fn) {
    var lastArgs = [];
    var frameId = null;

    var wrapperFn = function wrapperFn() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      lastArgs = args;

      if (frameId) {
        return frameId;
      }

      frameId = requestAnimationFrame(function () {
        frameId = null;
        fn.apply(undefined, lastArgs);
      });

      return frameId;
    };

    wrapperFn.cancel = function () {
      if (!frameId) {
        return;
      }

      cancelAnimationFrame(frameId);
      frameId = null;
    };

    var resultFn = wrapperFn;

    return resultFn;
  });

  //      
  // An event handler can take an optional event argument
  // and should not return a value
                                            
                                                                 

  // An array of all currently registered event handlers for a type
                                              
                                                              
  // A map of event types and their corresponding event handlers.
                          
                                   
                                     
    

  /** Mitt: Tiny (~200b) functional event emitter / pubsub.
   *  @name mitt
   *  @returns {Mitt}
   */
  function mitt(all                 ) {
  	all = all || Object.create(null);

  	return {
  		/**
  		 * Register an event handler for the given type.
  		 *
  		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
  		 * @param  {Function} handler Function to call in response to given event
  		 * @memberOf mitt
  		 */
  		on: function on(type        , handler              ) {
  			(all[type] || (all[type] = [])).push(handler);
  		},

  		/**
  		 * Remove an event handler for the given type.
  		 *
  		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
  		 * @param  {Function} handler Handler function to remove
  		 * @memberOf mitt
  		 */
  		off: function off(type        , handler              ) {
  			if (all[type]) {
  				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
  			}
  		},

  		/**
  		 * Invoke all handlers for the given type.
  		 * If present, `"*"` handlers are invoked after type-matched handlers.
  		 *
  		 * @param {String} type  The event type to invoke
  		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
  		 * @memberOf mitt
  		 */
  		emit: function emit(type        , evt     ) {
  			(all[type] || []).slice().map(function (handler) { handler(evt); });
  			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
  		}
  	};
  }

  var tabbable = function(el, options) {
    options = options || {};

    var elementDocument = el.ownerDocument || el;
    var basicTabbables = [];
    var orderedTabbables = [];

    // A node is "available" if
    // - it's computed style
    var isUnavailable = createIsUnavailable(elementDocument);

    var candidateSelectors = [
      'input',
      'select',
      'a[href]',
      'textarea',
      'button',
      '[tabindex]',
    ];

    var candidates = el.querySelectorAll(candidateSelectors.join(','));

    if (options.includeContainer) {
      var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

      if (
        candidateSelectors.some(function(candidateSelector) {
          return matches.call(el, candidateSelector);
        })
      ) {
        candidates = Array.prototype.slice.apply(candidates);
        candidates.unshift(el);
      }
    }

    var candidate, candidateIndex;
    for (var i = 0, l = candidates.length; i < l; i++) {
      candidate = candidates[i];
      candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

      if (
        candidateIndex < 0
        || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
        || candidate.disabled
        || isUnavailable(candidate, elementDocument)
      ) {
        continue;
      }

      if (candidateIndex === 0) {
        basicTabbables.push(candidate);
      } else {
        orderedTabbables.push({
          index: i,
          tabIndex: candidateIndex,
          node: candidate,
        });
      }
    }

    var tabbableNodes = orderedTabbables
      .sort(function(a, b) {
        return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
      })
      .map(function(a) {
        return a.node
      });

    Array.prototype.push.apply(tabbableNodes, basicTabbables);

    return tabbableNodes;
  };

  function createIsUnavailable(elementDocument) {
    // Node cache must be refreshed on every check, in case
    // the content of the element has changed
    var isOffCache = [];

    // "off" means `display: none;`, as opposed to "hidden",
    // which means `visibility: hidden;`. getComputedStyle
    // accurately reflects visiblity in context but not
    // "off" state, so we need to recursively check parents.

    function isOff(node, nodeComputedStyle) {
      if (node === elementDocument.documentElement) return false;

      // Find the cached node (Array.prototype.find not available in IE9)
      for (var i = 0, length = isOffCache.length; i < length; i++) {
        if (isOffCache[i][0] === node) return isOffCache[i][1];
      }

      nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);

      var result = false;

      if (nodeComputedStyle.display === 'none') {
        result = true;
      } else if (node.parentNode) {
        result = isOff(node.parentNode);
      }

      isOffCache.push([node, result]);

      return result;
    }

    return function isUnavailable(node) {
      if (node === elementDocument.documentElement) return false;

      var computedStyle = elementDocument.defaultView.getComputedStyle(node);

      if (isOff(node, computedStyle)) return true;

      return computedStyle.visibility === 'hidden';
    }
  }

  var piecewise_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = piecewise;
  function piecewise(xs, ys) {
    return function (x) {
      // out of bounds
      if (x <= xs[0]) {
        return ys[0];
      } else if (x >= xs[xs.length - 1]) {
        return ys[xs.length - 1];
      }

      // bisect
      var lo = 0;
      var hi = xs.length - 1;

      while (hi - lo > 1) {
        var mid = lo + hi >> 1;
        if (x < xs[mid]) {
          hi = mid;
        } else {
          lo = mid;
        }
      }

      // project
      return ys[lo] + (ys[hi] - ys[lo]) / (xs[hi] - xs[lo]) * (x - xs[lo]);
    };
  }
  module.exports = exports["default"];
  });

  unwrapExports(piecewise_1);

  var polylinearScale_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  exports.default = polylinearScale;



  var _piecewise2 = _interopRequireDefault(piecewise_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function polylinearScale(stops) {
    var xs = [];
    var ys_r = [];
    var ys_g = [];
    var ys_b = [];

    stops.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          domain = _ref2[0],
          range = _ref2[1];

      xs.push(domain);
      if (isNaN(range)) {
        ys_r.push(parseInt(range.substr(1, 2), 16));
        ys_g.push(parseInt(range.substr(3, 2), 16));
        ys_b.push(parseInt(range.substr(5, 2), 16));
      } else {
        ys_r.push(range);
      }
    });

    var pw_r = (0, _piecewise2.default)(xs, ys_r);

    if (ys_g.length && ys_b.length) {
      var _ret = function () {
        var pw_g = (0, _piecewise2.default)(xs, ys_g);
        var pw_b = (0, _piecewise2.default)(xs, ys_b);
        return {
          v: function v(x) {
            return 'rgb(' + Math.round(pw_r(x)) + ', ' + Math.round(pw_g(x)) + ', ' + Math.round(pw_b(x)) + ')';
          }
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    } else {
      return function (x) {
        return pw_r(x);
      };
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(polylinearScale_1);

  var animationBus = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _polylinearScale2 = _interopRequireDefault(polylinearScale_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var transformUnits = {
    perspective: 'px',
    rotate: 'deg',
    rotateX: 'deg',
    rotateY: 'deg',
    rotateZ: 'deg',
    scale: '',
    scaleX: '',
    scaleY: '',
    scaleZ: '',
    skew: 'deg',
    skewX: 'deg',
    skewY: 'deg',
    translateX: 'px',
    translateY: 'px',
    translateZ: 'px'
  };
  var transformKeys = Object.keys(transformUnits);

  var AnimationBus = function () {
    function AnimationBus(_ref) {
      var animations = _ref.animations,
          element = _ref.element,
          origin = _ref.origin;

      _classCallCheck(this, AnimationBus);

      this.animations = animations;
      this.element = element;
      this.origin = origin;
    }

    _createClass(AnimationBus, [{
      key: 'getStyles',
      value: function getStyles() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;

        var origin = this.origin(element);
        var transformValues = [];
        var styles = {};

        this.animations.forEach(function (animation) {
          var prop = animation.prop;
          var unit = animation.unit || transformUnits[prop] || '';
          var value = (0, _polylinearScale2.default)(animation.stops)(origin);

          if (transformKeys.indexOf(prop) > -1) {
            transformValues.push(prop + '(' + value + unit + ')');
          } else {
            styles[prop] = '' + value + unit;
          }
        });

        if (transformValues.length) {
          styles.transform = transformValues.join(' ');
        }

        return styles;
      }
    }, {
      key: 'applyStyles',
      value: function applyStyles() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;

        var styles = this.getStyles(element);
        Object.keys(styles).forEach(function (key) {
          return element.style[key] = styles[key];
        });
      }
    }]);

    return AnimationBus;
  }();

  exports.default = AnimationBus;
  module.exports = exports['default'];
  });

  unwrapExports(animationBus);

  /**
   * A collection of shims that provide minimal functionality of the ES6 collections.
   *
   * These implementations are not meant to be used outside of the ResizeObserver
   * modules as they cover only a limited range of use cases.
   */
  /* eslint-disable require-jsdoc, valid-jsdoc */
  var MapShim = (function () {
      if (typeof Map !== 'undefined') {
          return Map;
      }

      /**
       * Returns index in provided array that matches the specified key.
       *
       * @param {Array<Array>} arr
       * @param {*} key
       * @returns {number}
       */
      function getIndex(arr, key) {
          var result = -1;

          arr.some(function (entry, index) {
              if (entry[0] === key) {
                  result = index;

                  return true;
              }

              return false;
          });

          return result;
      }

      return (function () {
          function anonymous() {
              this.__entries__ = [];
          }

          var prototypeAccessors = { size: { configurable: true } };

          /**
           * @returns {boolean}
           */
          prototypeAccessors.size.get = function () {
              return this.__entries__.length;
          };

          /**
           * @param {*} key
           * @returns {*}
           */
          anonymous.prototype.get = function (key) {
              var index = getIndex(this.__entries__, key);
              var entry = this.__entries__[index];

              return entry && entry[1];
          };

          /**
           * @param {*} key
           * @param {*} value
           * @returns {void}
           */
          anonymous.prototype.set = function (key, value) {
              var index = getIndex(this.__entries__, key);

              if (~index) {
                  this.__entries__[index][1] = value;
              } else {
                  this.__entries__.push([key, value]);
              }
          };

          /**
           * @param {*} key
           * @returns {void}
           */
          anonymous.prototype.delete = function (key) {
              var entries = this.__entries__;
              var index = getIndex(entries, key);

              if (~index) {
                  entries.splice(index, 1);
              }
          };

          /**
           * @param {*} key
           * @returns {void}
           */
          anonymous.prototype.has = function (key) {
              return !!~getIndex(this.__entries__, key);
          };

          /**
           * @returns {void}
           */
          anonymous.prototype.clear = function () {
              this.__entries__.splice(0);
          };

          /**
           * @param {Function} callback
           * @param {*} [ctx=null]
           * @returns {void}
           */
          anonymous.prototype.forEach = function (callback, ctx) {
              var this$1 = this;
              if ( ctx === void 0 ) ctx = null;

              for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                  var entry = list[i];

                  callback.call(ctx, entry[1], entry[0]);
              }
          };

          Object.defineProperties( anonymous.prototype, prototypeAccessors );

          return anonymous;
      }());
  })();

  /**
   * Detects whether window and document objects are available in current environment.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

  // Returns global object of a current environment.
  var global$1 = (function () {
      if (typeof global !== 'undefined' && global.Math === Math) {
          return global;
      }

      if (typeof self !== 'undefined' && self.Math === Math) {
          return self;
      }

      if (typeof window !== 'undefined' && window.Math === Math) {
          return window;
      }

      // eslint-disable-next-line no-new-func
      return Function('return this')();
  })();

  /**
   * A shim for the requestAnimationFrame which falls back to the setTimeout if
   * first one is not supported.
   *
   * @returns {number} Requests' identifier.
   */
  var requestAnimationFrame$1 = (function () {
      if (typeof requestAnimationFrame === 'function') {
          // It's required to use a bounded function because IE sometimes throws
          // an "Invalid calling object" error if rAF is invoked without the global
          // object on the left hand side.
          return requestAnimationFrame.bind(global$1);
      }

      return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
  })();

  // Defines minimum timeout before adding a trailing call.
  var trailingTimeout = 2;

  /**
   * Creates a wrapper function which ensures that provided callback will be
   * invoked only once during the specified delay period.
   *
   * @param {Function} callback - Function to be invoked after the delay period.
   * @param {number} delay - Delay after which to invoke callback.
   * @returns {Function}
   */
  var throttle = function (callback, delay) {
      var leadingCall = false,
          trailingCall = false,
          lastCallTime = 0;

      /**
       * Invokes the original callback function and schedules new invocation if
       * the "proxy" was called during current request.
       *
       * @returns {void}
       */
      function resolvePending() {
          if (leadingCall) {
              leadingCall = false;

              callback();
          }

          if (trailingCall) {
              proxy();
          }
      }

      /**
       * Callback invoked after the specified delay. It will further postpone
       * invocation of the original function delegating it to the
       * requestAnimationFrame.
       *
       * @returns {void}
       */
      function timeoutCallback() {
          requestAnimationFrame$1(resolvePending);
      }

      /**
       * Schedules invocation of the original function.
       *
       * @returns {void}
       */
      function proxy() {
          var timeStamp = Date.now();

          if (leadingCall) {
              // Reject immediately following calls.
              if (timeStamp - lastCallTime < trailingTimeout) {
                  return;
              }

              // Schedule new call to be in invoked when the pending one is resolved.
              // This is important for "transitions" which never actually start
              // immediately so there is a chance that we might miss one if change
              // happens amids the pending invocation.
              trailingCall = true;
          } else {
              leadingCall = true;
              trailingCall = false;

              setTimeout(timeoutCallback, delay);
          }

          lastCallTime = timeStamp;
      }

      return proxy;
  };

  // Minimum delay before invoking the update of observers.
  var REFRESH_DELAY = 20;

  // A list of substrings of CSS properties used to find transition events that
  // might affect dimensions of observed elements.
  var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

  // Check if MutationObserver is available.
  var mutationObserverSupported = typeof MutationObserver !== 'undefined';

  /**
   * Singleton controller class which handles updates of ResizeObserver instances.
   */
  var ResizeObserverController = function() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];

      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  };

  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */


  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */


  /**
   * Keeps reference to the instance of MutationObserver.
   *
   * @private {MutationObserver}
   */

  /**
   * Indicates whether DOM listeners have been added.
   *
   * @private {boolean}
   */
  ResizeObserverController.prototype.addObserver = function (observer) {
      if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
      }

      // Add listeners if they haven't been added yet.
      if (!this.connected_) {
          this.connect_();
      }
  };

  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */
  ResizeObserverController.prototype.removeObserver = function (observer) {
      var observers = this.observers_;
      var index = observers.indexOf(observer);

      // Remove observer if it's present in registry.
      if (~index) {
          observers.splice(index, 1);
      }

      // Remove listeners if controller has no connected observers.
      if (!observers.length && this.connected_) {
          this.disconnect_();
      }
  };

  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */
  ResizeObserverController.prototype.refresh = function () {
      var changesDetected = this.updateObservers_();

      // Continue running updates if changes have been detected as there might
      // be future ones caused by CSS transitions.
      if (changesDetected) {
          this.refresh();
      }
  };

  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *  dimensions of it's elements.
   */
  ResizeObserverController.prototype.updateObservers_ = function () {
      // Collect observers that have active observations.
      var activeObservers = this.observers_.filter(function (observer) {
          return observer.gatherActive(), observer.hasActive();
      });

      // Deliver notifications in a separate cycle in order to avoid any
      // collisions between observers, e.g. when multiple instances of
      // ResizeObserver are tracking the same element and the callback of one
      // of them changes content dimensions of the observed target. Sometimes
      // this may result in notifications being blocked for the rest of observers.
      activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

      return activeObservers.length > 0;
  };

  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.connect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already added.
      if (!isBrowser || this.connected_) {
          return;
      }

      // Subscription to the "Transitionend" event is used as a workaround for
      // delayed transitions. This way it's possible to capture at least the
      // final state of an element.
      document.addEventListener('transitionend', this.onTransitionEnd_);

      window.addEventListener('resize', this.refresh);

      if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);

          this.mutationsObserver_.observe(document, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true
          });
      } else {
          document.addEventListener('DOMSubtreeModified', this.refresh);

          this.mutationEventsAdded_ = true;
      }

      this.connected_ = true;
  };

  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.disconnect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already removed.
      if (!isBrowser || !this.connected_) {
          return;
      }

      document.removeEventListener('transitionend', this.onTransitionEnd_);
      window.removeEventListener('resize', this.refresh);

      if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
      }

      if (this.mutationEventsAdded_) {
          document.removeEventListener('DOMSubtreeModified', this.refresh);
      }

      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
  };

  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */
  ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
          var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

      // Detect whether transition may affect dimensions of an element.
      var isReflowProperty = transitionKeys.some(function (key) {
          return !!~propertyName.indexOf(key);
      });

      if (isReflowProperty) {
          this.refresh();
      }
  };

  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */
  ResizeObserverController.getInstance = function () {
      if (!this.instance_) {
          this.instance_ = new ResizeObserverController();
      }

      return this.instance_;
  };

  ResizeObserverController.instance_ = null;

  /**
   * Defines non-writable/enumerable properties of the provided target object.
   *
   * @param {Object} target - Object for which to define properties.
   * @param {Object} props - Properties to be defined.
   * @returns {Object} Target object.
   */
  var defineConfigurable = (function (target, props) {
      for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
          var key = list[i];

          Object.defineProperty(target, key, {
              value: props[key],
              enumerable: false,
              writable: false,
              configurable: true
          });
      }

      return target;
  });

  /**
   * Returns the global object associated with provided element.
   *
   * @param {Object} target
   * @returns {Object}
   */
  var getWindowOf = (function (target) {
      // Assume that the element is an instance of Node, which means that it
      // has the "ownerDocument" property from which we can retrieve a
      // corresponding global object.
      var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

      // Return the local global object if it's not possible extract one from
      // provided element.
      return ownerGlobal || global$1;
  });

  // Placeholder of an empty content rectangle.
  var emptyRect = createRectInit(0, 0, 0, 0);

  /**
   * Converts provided string to a number.
   *
   * @param {number|string} value
   * @returns {number}
   */
  function toFloat(value) {
      return parseFloat(value) || 0;
  }

  /**
   * Extracts borders size from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @param {...string} positions - Borders positions (top, right, ...)
   * @returns {number}
   */
  function getBordersSize(styles) {
      var positions = [], len = arguments.length - 1;
      while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

      return positions.reduce(function (size, position) {
          var value = styles['border-' + position + '-width'];

          return size + toFloat(value);
      }, 0);
  }

  /**
   * Extracts paddings sizes from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @returns {Object} Paddings box.
   */
  function getPaddings(styles) {
      var positions = ['top', 'right', 'bottom', 'left'];
      var paddings = {};

      for (var i = 0, list = positions; i < list.length; i += 1) {
          var position = list[i];

          var value = styles['padding-' + position];

          paddings[position] = toFloat(value);
      }

      return paddings;
  }

  /**
   * Calculates content rectangle of provided SVG element.
   *
   * @param {SVGGraphicsElement} target - Element content rectangle of which needs
   *      to be calculated.
   * @returns {DOMRectInit}
   */
  function getSVGContentRect(target) {
      var bbox = target.getBBox();

      return createRectInit(0, 0, bbox.width, bbox.height);
  }

  /**
   * Calculates content rectangle of provided HTMLElement.
   *
   * @param {HTMLElement} target - Element for which to calculate the content rectangle.
   * @returns {DOMRectInit}
   */
  function getHTMLElementContentRect(target) {
      // Client width & height properties can't be
      // used exclusively as they provide rounded values.
      var clientWidth = target.clientWidth;
      var clientHeight = target.clientHeight;

      // By this condition we can catch all non-replaced inline, hidden and
      // detached elements. Though elements with width & height properties less
      // than 0.5 will be discarded as well.
      //
      // Without it we would need to implement separate methods for each of
      // those cases and it's not possible to perform a precise and performance
      // effective test for hidden elements. E.g. even jQuery's ':visible' filter
      // gives wrong results for elements with width & height less than 0.5.
      if (!clientWidth && !clientHeight) {
          return emptyRect;
      }

      var styles = getWindowOf(target).getComputedStyle(target);
      var paddings = getPaddings(styles);
      var horizPad = paddings.left + paddings.right;
      var vertPad = paddings.top + paddings.bottom;

      // Computed styles of width & height are being used because they are the
      // only dimensions available to JS that contain non-rounded values. It could
      // be possible to utilize the getBoundingClientRect if only it's data wasn't
      // affected by CSS transformations let alone paddings, borders and scroll bars.
      var width = toFloat(styles.width),
          height = toFloat(styles.height);

      // Width & height include paddings and borders when the 'border-box' box
      // model is applied (except for IE).
      if (styles.boxSizing === 'border-box') {
          // Following conditions are required to handle Internet Explorer which
          // doesn't include paddings and borders to computed CSS dimensions.
          //
          // We can say that if CSS dimensions + paddings are equal to the "client"
          // properties then it's either IE, and thus we don't need to subtract
          // anything, or an element merely doesn't have paddings/borders styles.
          if (Math.round(width + horizPad) !== clientWidth) {
              width -= getBordersSize(styles, 'left', 'right') + horizPad;
          }

          if (Math.round(height + vertPad) !== clientHeight) {
              height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
          }
      }

      // Following steps can't be applied to the document's root element as its
      // client[Width/Height] properties represent viewport area of the window.
      // Besides, it's as well not necessary as the <html> itself neither has
      // rendered scroll bars nor it can be clipped.
      if (!isDocumentElement(target)) {
          // In some browsers (only in Firefox, actually) CSS width & height
          // include scroll bars size which can be removed at this step as scroll
          // bars are the only difference between rounded dimensions + paddings
          // and "client" properties, though that is not always true in Chrome.
          var vertScrollbar = Math.round(width + horizPad) - clientWidth;
          var horizScrollbar = Math.round(height + vertPad) - clientHeight;

          // Chrome has a rather weird rounding of "client" properties.
          // E.g. for an element with content width of 314.2px it sometimes gives
          // the client width of 315px and for the width of 314.7px it may give
          // 314px. And it doesn't happen all the time. So just ignore this delta
          // as a non-relevant.
          if (Math.abs(vertScrollbar) !== 1) {
              width -= vertScrollbar;
          }

          if (Math.abs(horizScrollbar) !== 1) {
              height -= horizScrollbar;
          }
      }

      return createRectInit(paddings.left, paddings.top, width, height);
  }

  /**
   * Checks whether provided element is an instance of the SVGGraphicsElement.
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  var isSVGGraphicsElement = (function () {
      // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
      // interface.
      if (typeof SVGGraphicsElement !== 'undefined') {
          return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
      }

      // If it's so, then check that element is at least an instance of the
      // SVGElement and that it has the "getBBox" method.
      // eslint-disable-next-line no-extra-parens
      return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
  })();

  /**
   * Checks whether provided element is a document element (<html>).
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  function isDocumentElement(target) {
      return target === getWindowOf(target).document.documentElement;
  }

  /**
   * Calculates an appropriate content rectangle for provided html or svg element.
   *
   * @param {Element} target - Element content rectangle of which needs to be calculated.
   * @returns {DOMRectInit}
   */
  function getContentRect(target) {
      if (!isBrowser) {
          return emptyRect;
      }

      if (isSVGGraphicsElement(target)) {
          return getSVGContentRect(target);
      }

      return getHTMLElementContentRect(target);
  }

  /**
   * Creates rectangle with an interface of the DOMRectReadOnly.
   * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
   *
   * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
   * @returns {DOMRectReadOnly}
   */
  function createReadOnlyRect(ref) {
      var x = ref.x;
      var y = ref.y;
      var width = ref.width;
      var height = ref.height;

      // If DOMRectReadOnly is available use it as a prototype for the rectangle.
      var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
      var rect = Object.create(Constr.prototype);

      // Rectangle's properties are not writable and non-enumerable.
      defineConfigurable(rect, {
          x: x, y: y, width: width, height: height,
          top: y,
          right: x + width,
          bottom: height + y,
          left: x
      });

      return rect;
  }

  /**
   * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
   * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
   *
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   * @param {number} width - Rectangle's width.
   * @param {number} height - Rectangle's height.
   * @returns {DOMRectInit}
   */
  function createRectInit(x, y, width, height) {
      return { x: x, y: y, width: width, height: height };
  }

  /**
   * Class that is responsible for computations of the content rectangle of
   * provided DOM element and for keeping track of it's changes.
   */
  var ResizeObservation = function(target) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = createRectInit(0, 0, 0, 0);

      this.target = target;
  };

  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */


  /**
   * Reference to the last observed content rectangle.
   *
   * @private {DOMRectInit}
   */


  /**
   * Broadcasted width of content rectangle.
   *
   * @type {number}
   */
  ResizeObservation.prototype.isActive = function () {
      var rect = getContentRect(this.target);

      this.contentRect_ = rect;

      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };

  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */
  ResizeObservation.prototype.broadcastRect = function () {
      var rect = this.contentRect_;

      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;

      return rect;
  };

  var ResizeObserverEntry = function(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);

      // According to the specification following properties are not writable
      // and are also not enumerable in the native implementation.
      //
      // Property accessors are not being used as they'd require to define a
      // private WeakMap storage which may cause memory leaks in browsers that
      // don't support this type of collections.
      defineConfigurable(this, { target: target, contentRect: contentRect });
  };

  var ResizeObserverSPI = function(callback, controller, callbackCtx) {
      this.activeObservations_ = [];
      this.observations_ = new MapShim();

      if (typeof callback !== 'function') {
          throw new TypeError('The callback provided as parameter 1 is not a function.');
      }

      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
  };

  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */


  /**
   * Registry of the ResizeObservation instances.
   *
   * @private {Map<Element, ResizeObservation>}
   */


  /**
   * Public ResizeObserver instance which will be passed to the callback
   * function and used as a value of it's "this" binding.
   *
   * @private {ResizeObserver}
   */

  /**
   * Collection of resize observations that have detected changes in dimensions
   * of elements.
   *
   * @private {Array<ResizeObservation>}
   */
  ResizeObserverSPI.prototype.observe = function (target) {
      if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
      }

      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
      }

      if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
      }

      var observations = this.observations_;

      // Do nothing if element is already being observed.
      if (observations.has(target)) {
          return;
      }

      observations.set(target, new ResizeObservation(target));

      this.controller_.addObserver(this);

      // Force the update of observations.
      this.controller_.refresh();
  };

  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.unobserve = function (target) {
      if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
      }

      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
      }

      if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
      }

      var observations = this.observations_;

      // Do nothing if element is not being observed.
      if (!observations.has(target)) {
          return;
      }

      observations.delete(target);

      if (!observations.size) {
          this.controller_.removeObserver(this);
      }
  };

  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.disconnect = function () {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
  };

  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.gatherActive = function () {
          var this$1 = this;

      this.clearActive();

      this.observations_.forEach(function (observation) {
          if (observation.isActive()) {
              this$1.activeObservations_.push(observation);
          }
      });
  };

  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.broadcastActive = function () {
      // Do nothing if observer doesn't have active observations.
      if (!this.hasActive()) {
          return;
      }

      var ctx = this.callbackCtx_;

      // Create ResizeObserverEntry instance for every active observation.
      var entries = this.activeObservations_.map(function (observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });

      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
  };

  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
  };

  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */
  ResizeObserverSPI.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
  };

  // Registry of internal observers. If WeakMap is not available use current shim
  // for the Map collection as it has all required methods and because WeakMap
  // can't be fully polyfilled anyway.
  var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

  /**
   * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
   * exposing only those methods and properties that are defined in the spec.
   */
  var ResizeObserver = function(callback) {
      if (!(this instanceof ResizeObserver)) {
          throw new TypeError('Cannot call a class as a function.');
      }
      if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
      }

      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);

      observers.set(this, observer);
  };

  // Expose public methods of ResizeObserver.
  ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
      ResizeObserver.prototype[method] = function () {
          return (ref = observers.get(this))[method].apply(ref, arguments);
          var ref;
      };
  });

  var index = (function () {
      // Export existing implementation if available.
      if (typeof global$1.ResizeObserver !== 'undefined') {
          return global$1.ResizeObserver;
      }

      return ResizeObserver;
  })();

  var PagerElement_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var PagerElement = function () {
    function PagerElement(_ref) {
      var node = _ref.node,
          pager = _ref.pager,
          width = _ref.width,
          height = _ref.height;

      _classCallCheck(this, PagerElement);

      this.node = node;
      this.pager = pager;
      this.x = this.y = 0;
      this.setSize(width, height);
    }

    _createClass(PagerElement, [{
      key: 'setSize',
      value: function setSize(width, height) {
        this.width = width || this.node.offsetWidth;
        this.height = height || this.node.offsetHeight;
      }
    }, {
      key: 'setPosition',
      value: function setPosition(position) {
        this[this.pager.options.axis] = position;
      }
    }, {
      key: 'getSize',
      value: function getSize(dimension) {
        if (dimension === 'width' || dimension === 'height') {
          return this[dimension];
        } else {
          var axis = this.pager.options.axis;
          return this[axis === 'x' ? 'width' : 'height'];
        }
      }
    }, {
      key: 'getPosition',
      value: function getPosition() {
        return this[this.pager.options.axis];
      }
    }]);

    return PagerElement;
  }();

  exports.default = PagerElement;
  module.exports = exports['default'];
  });

  unwrapExports(PagerElement_1);

  var utils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.modulo = modulo;
  exports.clamp = clamp;
  exports.sum = sum;
  exports.max = max;
  exports.range = range;

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function modulo(val, max) {
    return (val % max + max) % max;
  }

  function clamp(val, min, max) {
    return Math.min(Math.max(min, val), max);
  }

  function sum(arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  function max(arr) {
    return Math.max.apply(null, arr);
  }

  function range(start, end, max) {
    return [].concat(_toConsumableArray(Array(1 + end - start))).map(function (val) {
      return max ? modulo(start + val, max) : start + val;
    });
  }
  });

  unwrapExports(utils);
  var utils_1 = utils.modulo;
  var utils_2 = utils.clamp;
  var utils_3 = utils.sum;
  var utils_4 = utils.max;
  var utils_5 = utils.range;

  var lib$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = getPrefix;

  function getPrefix(prop) {
    if (typeof document === 'undefined') return prop;

    var styles = document.createElement('p').style;
    var vendors = ['ms', 'O', 'Moz', 'Webkit'];

    if (styles[prop] === '') return prop;

    prop = prop.charAt(0).toUpperCase() + prop.slice(1);

    for (var i = vendors.length; i--;) {
      if (styles[vendors[i] + prop] === '') {
        return vendors[i] + prop;
      }
    }
  }

  module.exports = exports['default'];
  });

  unwrapExports(lib$1);

  var Pager_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _mitt2 = _interopRequireDefault(mitt);



  var _tabbable2 = _interopRequireDefault(tabbable);



  var _animationBus2 = _interopRequireDefault(animationBus);



  var _resizeObserverPolyfill2 = _interopRequireDefault(index);



  var _PagerElement4 = _interopRequireDefault(PagerElement_1);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var TRANSFORM = lib$1('transform');
  var isWindowDefined = typeof window !== 'undefined';

  var Track = function (_PagerElement) {
    _inherits(Track, _PagerElement);

    function Track() {
      _classCallCheck(this, Track);

      return _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).apply(this, arguments));
    }

    _createClass(Track, [{
      key: 'getStyles',
      value: function getStyles(trackPosition) {
        var _pager$getPositionVal = this.pager.getPositionValue(trackPosition),
            x = _pager$getPositionVal.x,
            y = _pager$getPositionVal.y;

        var trackSize = this.pager.getTrackSize();
        var style = _defineProperty({}, TRANSFORM, 'translate3d(' + x + 'px, ' + y + 'px, 0)');

        if (trackSize) {
          var _pager$options = this.pager.options,
              axis = _pager$options.axis,
              viewsToShow = _pager$options.viewsToShow;

          var dimension = axis === 'x' ? 'width' : 'height';

          style[dimension] = viewsToShow === 'auto' ? trackSize : this.pager.views.length / viewsToShow * 100 + '%';
        }

        return style;
      }
    }]);

    return Track;
  }(_PagerElement4.default);

  var View = function (_PagerElement2) {
    _inherits(View, _PagerElement2);

    function View(_ref) {
      var index = _ref.index,
          restOptions = _objectWithoutProperties(_ref, ['index']);

      _classCallCheck(this, View);

      var _this2 = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, restOptions));

      _this2.index = index;
      _this2.inBounds = true;
      _this2.tabbableChildren = [];
      _this2.setCurrent(false);
      _this2.setVisible(false);
      _this2.setTarget();
      _this2.setOrigin();

      // TODO: look into getting rid of setTimeout
      // not sure the reason for needing setTimeout in order to get proper children,
      // might be due to something in React that we're not doing at the right time
      setTimeout(function () {
        _this2.tabbableChildren = (0, _tabbable2.default)(_this2.node);
        _this2.setTabbableChildren();
      });
      return _this2;
    }

    _createClass(View, [{
      key: 'setCurrent',
      value: function setCurrent(isCurrent) {
        this.isCurrent = isCurrent;
      }
    }, {
      key: 'setVisible',
      value: function setVisible(isVisible) {
        this.isVisible = isVisible;
        this.setTabbableChildren();
      }
    }, {
      key: 'setTabbableChildren',
      value: function setTabbableChildren() {
        // only allow tabbing in current slides
        for (var i = 0; i < this.tabbableChildren.length; i++) {
          this.tabbableChildren[i].tabIndex = this.isCurrent ? 0 : -1;
        }
      }
    }, {
      key: 'setTarget',
      value: function setTarget() {
        var _pager$options2 = this.pager.options,
            align = _pager$options2.align,
            viewsToShow = _pager$options2.viewsToShow;

        var target = this.pager.getStartCoords(this.index);

        if (align) {
          target += this.pager.getAlignOffset(this);
        }

        this.target = target;
      }
    }, {
      key: 'setOrigin',
      value: function setOrigin() {
        var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pager.trackPosition;

        this.origin = this.target - trackPosition;
      }
    }, {
      key: 'getStyles',
      value: function getStyles() {
        var _pager$options3 = this.pager.options,
            axis = _pager$options3.axis,
            viewsToShow = _pager$options3.viewsToShow,
            infinite = _pager$options3.infinite;

        var style = {};

        // we need to position views inline when using the x axis
        if (axis === 'x') {
          style.display = 'inline-block';
          style.verticalAlign = 'top';
        }

        // set width or height on view when viewsToShow is not auto
        if (viewsToShow !== 'auto') {
          style[axis === 'x' ? 'width' : 'height'] = 100 / this.pager.views.length + '%';
        }

        // make sure view stays in frame when using infinite option
        if (infinite && !this.inBounds) {
          style.position = 'relative';
          style[axis === 'y' ? 'top' : 'left'] = this.getPosition();
        }

        // finally, apply any animations
        return _extends({}, style, this.pager.animationBus.getStyles(this));
      }
    }]);

    return View;
  }(_PagerElement4.default);

  var defaultOptions = {
    viewsToShow: 1,
    viewsToMove: 1,
    align: 0,
    contain: false,
    axis: 'x',
    autoSize: false,
    animations: [],
    infinite: false,
    instant: false,
    swipe: true,
    swipeThreshold: 0.5,
    flickTimeout: 300,
    accessibility: true
  };

  var Pager = function () {
    function Pager() {
      var _this3 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Pager);

      this.hydrate = function () {
        _this3.frame.setSize();
        _this3.track.setSize();
        _this3.views.forEach(function (view) {
          view.setSize();
          view.setTarget();
        });
        _this3.setPositionValue();
        _this3.setViewStyles();
        _this3.emit('hydrated');
      };

      var emitter = (0, _mitt2.default)();

      this.on = emitter.on;
      this.emit = emitter.emit;
      this.off = emitter.off;

      this.views = [];
      this.currentIndex = 0;
      this.currentView = null;
      this.currentTween = 0;
      this.trackPosition = 0;
      this.isSwiping = false;

      this.options = _extends({}, defaultOptions, options);

      this.animationBus = new _animationBus2.default({
        animations: this.options.animations,
        origin: function origin(view) {
          return view.origin;
        }
      });

      if (isWindowDefined) {
        this.resizeObserver = new _resizeObserverPolyfill2.default(function () {
          _this3.hydrate();
        });
      }
    }

    _createClass(Pager, [{
      key: 'setOptions',
      value: function setOptions(options) {
        var lastOptions = this.options;

        // spread new options over the old ones
        this.options = _extends({}, this.options, options);

        // merge animations into animation bus
        this.animationBus.animations = this.options.animations;

        // fire a viewChange event with the new indicies if viewsToShow has changed
        if (lastOptions.viewsToShow !== this.options.viewsToShow) {
          this.emit('viewChange', this.getCurrentIndicies());
        }
      }
    }, {
      key: 'addFrame',
      value: function addFrame(node) {
        this.frame = new _PagerElement4.default({
          node: node,
          pager: this
        });
      }
    }, {
      key: 'addTrack',
      value: function addTrack(node) {
        this.track = new Track({
          node: node,
          pager: this
        });
      }
    }, {
      key: 'addView',
      value: function addView(node) {
        var index = this.views.length;
        var view = new View({
          node: node,
          index: index,
          pager: this
        });

        // add view to collection
        this.views.push(view);

        // set this as the first view if there isn't one yet
        if (!this.currentView) {
          this.setCurrentView({
            index: index,
            suppressEvent: true
          });
        }

        // listen for width and height changes
        if (isWindowDefined) {
          this.resizeObserver.observe(node);
        }

        // fire an event
        this.emit('viewAdded');

        return view;
      }
    }, {
      key: 'removeView',
      value: function removeView(view) {
        // filter out view
        this.views = this.views.filter(function (_view) {
          return view !== _view;
        });

        // stop observing node
        if (isWindowDefined) {
          this.resizeObserver.disconnect(view.node);
        }

        // fire an event
        this.emit('viewRemoved');
      }
    }, {
      key: 'prev',
      value: function prev() {
        this.setCurrentView({ direction: -1 });
      }
    }, {
      key: 'next',
      value: function next() {
        this.setCurrentView({ direction: 1 });
      }
    }, {
      key: 'setCurrentView',
      value: function setCurrentView(_ref2) {
        var _ref2$direction = _ref2.direction,
            direction = _ref2$direction === undefined ? 0 : _ref2$direction,
            _ref2$index = _ref2.index,
            index = _ref2$index === undefined ? this.currentIndex : _ref2$index,
            _ref2$suppressEvent = _ref2.suppressEvent,
            suppressEvent = _ref2$suppressEvent === undefined ? false : _ref2$suppressEvent;
        var _options = this.options,
            viewsToMove = _options.viewsToMove,
            infinite = _options.infinite;

        var newIndex = index + direction * viewsToMove;

        var previousIndex = this.currentIndex;
        var currentIndex = infinite ? newIndex : (0, utils.clamp)(newIndex, 0, this.views.length - 1);

        var previousView = this.getView(previousIndex);
        var currentView = this.getView(currentIndex);

        // set current index and view
        this.currentIndex = currentIndex;
        this.currentView = currentView;

        // swap current view flags
        previousView.setCurrent(false);
        currentView.setCurrent(true);

        var rangeStart = currentIndex;
        var rangeEnd = currentIndex + viewsToMove - 1;
        var viewRange = (0, utils.range)(rangeStart, rangeEnd, this.views.length);

        // set flags for which views are currently showing
        this.views.forEach(function (view, index) {
          view.setVisible(index === currentIndex);
        });

        // set the track position to the new view
        this.setPositionValue();

        if (!suppressEvent) {
          this.emit('viewChange', this.getCurrentIndicies());
        }
      }
    }, {
      key: 'setPositionValue',
      value: function setPositionValue() {
        var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentView ? this.currentView.target : 0;

        if (!this.isSwiping) {
          var _options2 = this.options,
              viewsToShow = _options2.viewsToShow,
              autoSize = _options2.autoSize,
              infinite = _options2.infinite,
              contain = _options2.contain;

          var trackSize = this.getTrackSize();

          if (infinite) {
            // we offset by a track multiplier so infinite animation can take advantage of
            // physics by animating to a large value, the final value provided in getTransformValue
            // will return the proper wrapped value
            trackPosition -= (Math.floor(this.currentIndex / this.views.length) || 0) * trackSize;
          }

          if (contain) {
            var trackEndOffset = viewsToShow === 'auto' && autoSize || viewsToShow <= 1 ? 0 : this.getFrameSize({ autoSize: false });
            trackPosition = (0, utils.clamp)(trackPosition, trackEndOffset - trackSize, 0);
          }
        }

        this.trackPosition = trackPosition;
      }
    }, {
      key: 'setViewStyles',
      value: function setViewStyles() {
        var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var _options3 = this.options,
            infinite = _options3.infinite,
            align = _options3.align;

        var frameSize = this.getFrameSize();
        var trackSize = this.getTrackSize();
        var wrappedtrackPosition = (0, utils.modulo)(trackPosition, -trackSize);

        this.views.reduce(function (lastPosition, view, index) {
          var viewSize = view.getSize();
          var nextPosition = lastPosition + viewSize;
          var position = lastPosition;

          if (nextPosition + viewSize * align < Math.abs(wrappedtrackPosition)) {
            // shift views around so they are always visible in frame
            if (infinite) {
              position += trackSize - lastPosition;
            }
            view.inBounds = false;
          } else {
            view.inBounds = true;
          }

          view.setPosition(position);
          view.setOrigin(trackPosition);

          return nextPosition;
        }, 0);
      }
    }, {
      key: 'getNumericViewsToShow',
      value: function getNumericViewsToShow() {
        return isNaN(this.options.viewsToShow) ? 1 : this.options.viewsToShow;
      }
    }, {
      key: 'getMaxDimensions',
      value: function getMaxDimensions(indices) {
        var _this4 = this;

        var axis = this.options.axis;

        var widths = [];
        var heights = [];

        indices.forEach(function (index) {
          var view = isNaN(index) ? index : _this4.getView(index);
          widths.push(view.getSize('width'));
          heights.push(view.getSize('height'));
        });

        return {
          width: axis === 'x' ? (0, utils.sum)(widths) : (0, utils.max)(widths),
          height: axis === 'y' ? (0, utils.sum)(heights) : (0, utils.max)(heights)
        };
      }
    }, {
      key: 'getCurrentIndicies',
      value: function getCurrentIndicies() {
        var _options4 = this.options,
            infinite = _options4.infinite,
            contain = _options4.contain;

        var currentViews = [];
        var viewsToShow = isNaN(this.options.viewsToShow) ? 1 : this.options.viewsToShow;
        var minIndex = this.currentIndex;
        var maxIndex = this.currentIndex + (viewsToShow - 1);

        if (contain) {
          // if containing, we need to clamp the start and end indexes so we only return what's in view
          minIndex = (0, utils.clamp)(minIndex, 0, this.views.length - viewsToShow);
          maxIndex = (0, utils.clamp)(maxIndex, 0, this.views.length - 1);
          for (var i = minIndex; i <= maxIndex; i++) {
            currentViews.push(i);
          }
        } else {
          for (var _i = minIndex; _i <= maxIndex; _i++) {
            currentViews.push(infinite ? (0, utils.modulo)(_i, this.views.length) : (0, utils.clamp)(_i, 0, this.views.length - 1));
          }
        }

        return currentViews;
      }
    }, {
      key: 'getFrameSize',
      value: function getFrameSize() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref3$autoSize = _ref3.autoSize,
            autoSize = _ref3$autoSize === undefined ? this.options.autoSize : _ref3$autoSize,
            _ref3$fullSize = _ref3.fullSize,
            fullSize = _ref3$fullSize === undefined ? false : _ref3$fullSize;

        var dimensions = {
          width: 0,
          height: 0
        };

        if (this.views.length) {
          if (autoSize) {
            var currentViews = this.getCurrentIndicies();
            dimensions = this.getMaxDimensions(currentViews);
          } else if (this.frame) {
            dimensions = {
              width: this.frame.getSize('width'),
              height: this.frame.getSize('height')
            };
          }
        }

        if (fullSize) {
          return dimensions;
        } else {
          return dimensions[this.options.axis === 'x' ? 'width' : 'height'];
        }
      }
    }, {
      key: 'getTrackSize',
      value: function getTrackSize() {
        var includeLastSlide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        var lastIndex = includeLastSlide ? this.views.length : this.views.length - 1;
        var size = 0;
        this.views.slice(0, lastIndex).forEach(function (view) {
          size += view.getSize();
        });
        return size;
      }
    }, {
      key: 'getView',
      value: function getView(index) {
        return this.views[(0, utils.modulo)(index, this.views.length)];
      }

      // where the view should start

    }, {
      key: 'getStartCoords',
      value: function getStartCoords(index) {
        var target = 0;
        this.views.slice(0, index).forEach(function (view) {
          target -= view.getSize();
        });
        return target;
      }

      // how much to offset the view defined by the align option

    }, {
      key: 'getAlignOffset',
      value: function getAlignOffset(view) {
        var frameSize = this.getFrameSize({ autoSize: false });
        var viewSize = view.getSize();
        return (frameSize - viewSize) * this.options.align;
      }
    }, {
      key: 'getPositionValue',
      value: function getPositionValue() {
        var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.trackPosition;
        var _options5 = this.options,
            infinite = _options5.infinite,
            contain = _options5.contain;

        var position = { x: 0, y: 0

          // store the current animated value so we can reference it later
        };this.currentTween = trackPosition;

        // wrap the track position if this is an infinite track
        if (infinite) {
          var trackSize = this.getTrackSize();
          trackPosition = (0, utils.modulo)(trackPosition, -trackSize) || 0;
        }

        // emit a "scroll" event so we can do things based on the progress of the track
        this.emit('scroll', {
          progress: trackPosition / this.getTrackSize(false),
          position: trackPosition
        });

        // set the proper transform axis based on our options
        position[this.options.axis] = trackPosition;

        return position;
      }
    }, {
      key: 'resetViewIndex',
      value: function resetViewIndex() {
        // reset back to a normal index
        this.setCurrentView({
          index: (0, utils.modulo)(this.currentIndex, this.views.length),
          suppressEvent: true
        });
      }
    }]);

    return Pager;
  }();

  exports.default = Pager;
  module.exports = exports['default'];
  });

  unwrapExports(Pager_1);

  var ViewPager_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);



  var _Pager2 = _interopRequireDefault(Pager_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ViewPager = function (_Component) {
    _inherits(ViewPager, _Component);

    function ViewPager(props) {
      _classCallCheck(this, ViewPager);

      var _this = _possibleConstructorReturn(this, (ViewPager.__proto__ || Object.getPrototypeOf(ViewPager)).call(this, props));

      var pager = new _Pager2.default();
      var forceUpdate = function forceUpdate() {
        return _this.forceUpdate();
      };

      // re-render the whole tree to update components on certain events
      pager.on('viewChange', forceUpdate);
      pager.on('hydrated', forceUpdate);

      _this._pager = pager;
      return _this;
    }

    _createClass(ViewPager, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          pager: this._pager
        };
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        // run a hydration on the next animation frame to obtain proper targets and positioning
        requestAnimationFrame(function () {
          _this2._pager.hydrate();
        });
      }
    }, {
      key: 'getInstance',
      value: function getInstance() {
        return this._pager;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            tag = _props.tag,
            restProps = _objectWithoutProperties(_props, ['tag']);

        return (0, React__default.createElement)(tag, restProps);
      }
    }]);

    return ViewPager;
  }(React__default.Component);

  ViewPager.childContextTypes = {
    pager: _propTypes2.default.instanceOf(_Pager2.default)
  };
  ViewPager.propTypes = {
    tag: _propTypes2.default.string
  };
  ViewPager.defaultProps = {
    tag: 'div'
  };
  exports.default = ViewPager;
  module.exports = exports['default'];
  });

  unwrapExports(ViewPager_1);

  var mapToZero_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports['default'] = mapToZero;

  function mapToZero(obj) {
    var ret = {};
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        ret[key] = 0;
      }
    }
    return ret;
  }

  module.exports = exports['default'];
  });

  unwrapExports(mapToZero_1);

  var stripStyle_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports['default'] = stripStyle;

  function stripStyle(style) {
    var ret = {};
    for (var key in style) {
      if (!Object.prototype.hasOwnProperty.call(style, key)) {
        continue;
      }
      ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
    }
    return ret;
  }

  module.exports = exports['default'];
  });

  unwrapExports(stripStyle_1);

  var stepper_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports["default"] = stepper;

  var reusedTuple = [0, 0];

  function stepper(secondPerFrame, x, v, destX, k, b, precision) {
    // Spring stiffness, in kg / s^2

    // for animations, destX is really spring length (spring at rest). initial
    // position is considered as the stretched/compressed position of a spring
    var Fspring = -k * (x - destX);

    // Damping, in kg / s
    var Fdamper = -b * v;

    // usually we put mass here, but for animation purposes, specifying mass is a
    // bit redundant. you could simply adjust k and b accordingly
    // let a = (Fspring + Fdamper) / mass;
    var a = Fspring + Fdamper;

    var newV = v + a * secondPerFrame;
    var newX = x + newV * secondPerFrame;

    if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
      reusedTuple[0] = destX;
      reusedTuple[1] = 0;
      return reusedTuple;
    }

    reusedTuple[0] = newX;
    reusedTuple[1] = newV;
    return reusedTuple;
  }

  module.exports = exports["default"];
  // array reference around.
  });

  unwrapExports(stepper_1);

  var performanceNow = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.7.1
  (function() {
    var getNanoSeconds, hrtime, loadTime;

    if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
      module.exports = function() {
        return performance.now();
      };
    } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
      module.exports = function() {
        return (getNanoSeconds() - loadTime) / 1e6;
      };
      hrtime = process.hrtime;
      getNanoSeconds = function() {
        var hr;
        hr = hrtime();
        return hr[0] * 1e9 + hr[1];
      };
      loadTime = getNanoSeconds();
    } else if (Date.now) {
      module.exports = function() {
        return Date.now() - loadTime;
      };
      loadTime = Date.now();
    } else {
      module.exports = function() {
        return new Date().getTime() - loadTime;
      };
      loadTime = new Date().getTime();
    }

  }).call(commonjsGlobal);
  });

  var performanceNow$1 = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.2
  (function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

    if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
      module.exports = function() {
        return performance.now();
      };
    } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
      module.exports = function() {
        return (getNanoSeconds() - nodeLoadTime) / 1e6;
      };
      hrtime = process.hrtime;
      getNanoSeconds = function() {
        var hr;
        hr = hrtime();
        return hr[0] * 1e9 + hr[1];
      };
      moduleLoadTime = getNanoSeconds();
      upTime = process.uptime() * 1e9;
      nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
      module.exports = function() {
        return Date.now() - loadTime;
      };
      loadTime = Date.now();
    } else {
      module.exports = function() {
        return new Date().getTime() - loadTime;
      };
      loadTime = new Date().getTime();
    }

  }).call(commonjsGlobal);


  });

  var root = typeof window === 'undefined' ? commonjsGlobal : window
    , vendors = ['moz', 'webkit']
    , suffix = 'AnimationFrame'
    , raf = root['request' + suffix]
    , caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

  for(var i = 0; !raf && i < vendors.length; i++) {
    raf = root[vendors[i] + 'Request' + suffix];
    caf = root[vendors[i] + 'Cancel' + suffix]
        || root[vendors[i] + 'CancelRequest' + suffix];
  }

  // Some versions of FF have rAF but not cAF
  if(!raf || !caf) {
    var last = 0
      , id = 0
      , queue = []
      , frameDuration = 1000 / 60;

    raf = function(callback) {
      if(queue.length === 0) {
        var _now = performanceNow$1()
          , next = Math.max(0, frameDuration - (_now - last));
        last = next + _now;
        setTimeout(function() {
          var cp = queue.slice(0);
          // Clear queue here to prevent
          // callbacks from appending listeners
          // to the current frame's queue
          queue.length = 0;
          for(var i = 0; i < cp.length; i++) {
            if(!cp[i].cancelled) {
              try{
                cp[i].callback(last);
              } catch(e) {
                setTimeout(function() { throw e }, 0);
              }
            }
          }
        }, Math.round(next));
      }
      queue.push({
        handle: ++id,
        callback: callback,
        cancelled: false
      });
      return id
    };

    caf = function(handle) {
      for(var i = 0; i < queue.length; i++) {
        if(queue[i].handle === handle) {
          queue[i].cancelled = true;
        }
      }
    };
  }

  var raf_1 = function(fn) {
    // Wrap in a new function to prevent
    // `cancel` potentially being assigned
    // to the native rAF function
    return raf.call(root, fn)
  };
  var cancel = function() {
    caf.apply(root, arguments);
  };
  var polyfill = function(object) {
    if (!object) {
      object = root;
    }
    object.requestAnimationFrame = raf;
    object.cancelAnimationFrame = caf;
  };
  raf_1.cancel = cancel;
  raf_1.polyfill = polyfill;

  var shouldStopAnimation_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports['default'] = shouldStopAnimation;

  function shouldStopAnimation(currentStyle, style, currentVelocity) {
    for (var key in style) {
      if (!Object.prototype.hasOwnProperty.call(style, key)) {
        continue;
      }

      if (currentVelocity[key] !== 0) {
        return false;
      }

      var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
      // stepper will have already taken care of rounding precision errors, so
      // won't have such thing as 0.9999 !=== 1
      if (currentStyle[key] !== styleValue) {
        return false;
      }
    }

    return true;
  }

  module.exports = exports['default'];
  });

  unwrapExports(shouldStopAnimation_1);

  var Motion_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



  var _mapToZero2 = _interopRequireDefault(mapToZero_1);



  var _stripStyle2 = _interopRequireDefault(stripStyle_1);



  var _stepper4 = _interopRequireDefault(stepper_1);



  var _performanceNow2 = _interopRequireDefault(performanceNow);



  var _raf2 = _interopRequireDefault(raf_1);



  var _shouldStopAnimation2 = _interopRequireDefault(shouldStopAnimation_1);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);

  var msPerFrame = 1000 / 60;

  var Motion = (function (_React$Component) {
    _inherits(Motion, _React$Component);

    _createClass(Motion, null, [{
      key: 'propTypes',
      value: {
        // TOOD: warn against putting a config in here
        defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
        children: _propTypes2['default'].func.isRequired,
        onRest: _propTypes2['default'].func
      },
      enumerable: true
    }]);

    function Motion(props) {
      var _this = this;

      _classCallCheck(this, Motion);

      _React$Component.call(this, props);
      this.wasAnimating = false;
      this.animationID = null;
      this.prevTime = 0;
      this.accumulatedTime = 0;
      this.unreadPropStyle = null;

      this.clearUnreadPropStyle = function (destStyle) {
        var dirty = false;
        var _state = _this.state;
        var currentStyle = _state.currentStyle;
        var currentVelocity = _state.currentVelocity;
        var lastIdealStyle = _state.lastIdealStyle;
        var lastIdealVelocity = _state.lastIdealVelocity;

        for (var key in destStyle) {
          if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
            continue;
          }

          var styleValue = destStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              currentStyle = _extends({}, currentStyle);
              currentVelocity = _extends({}, currentVelocity);
              lastIdealStyle = _extends({}, lastIdealStyle);
              lastIdealVelocity = _extends({}, lastIdealVelocity);
            }

            currentStyle[key] = styleValue;
            currentVelocity[key] = 0;
            lastIdealStyle[key] = styleValue;
            lastIdealVelocity[key] = 0;
          }
        }

        if (dirty) {
          _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
        }
      };

      this.startAnimationIfNecessary = function () {
        // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
        // call cb? No, otherwise accidental parent rerender causes cb trigger
        _this.animationID = _raf2['default'](function (timestamp) {
          // check if we need to animate in the first place
          var propsStyle = _this.props.style;
          if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
            if (_this.wasAnimating && _this.props.onRest) {
              _this.props.onRest();
            }

            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.wasAnimating = false;
            _this.accumulatedTime = 0;
            return;
          }

          _this.wasAnimating = true;

          var currentTime = timestamp || _performanceNow2['default']();
          var timeDelta = currentTime - _this.prevTime;
          _this.prevTime = currentTime;
          _this.accumulatedTime = _this.accumulatedTime + timeDelta;
          // more than 10 frames? prolly switched browser tab. Restart
          if (_this.accumulatedTime > msPerFrame * 10) {
            _this.accumulatedTime = 0;
          }

          if (_this.accumulatedTime === 0) {
            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.startAnimationIfNecessary();
            return;
          }

          var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
          var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};
          var newCurrentStyle = {};
          var newCurrentVelocity = {};

          for (var key in propsStyle) {
            if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
              continue;
            }

            var styleValue = propsStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
              var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
              for (var i = 0; i < framesToCatchUp; i++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          _this.animationID = null;
          // the amount we're looped over above
          _this.accumulatedTime -= framesToCatchUp * msPerFrame;

          _this.setState({
            currentStyle: newCurrentStyle,
            currentVelocity: newCurrentVelocity,
            lastIdealStyle: newLastIdealStyle,
            lastIdealVelocity: newLastIdealVelocity
          });

          _this.unreadPropStyle = null;

          _this.startAnimationIfNecessary();
        });
      };

      this.state = this.defaultState();
    }

    Motion.prototype.defaultState = function defaultState() {
      var _props = this.props;
      var defaultStyle = _props.defaultStyle;
      var style = _props.style;

      var currentStyle = defaultStyle || _stripStyle2['default'](style);
      var currentVelocity = _mapToZero2['default'](currentStyle);
      return {
        currentStyle: currentStyle,
        currentVelocity: currentVelocity,
        lastIdealStyle: currentStyle,
        lastIdealVelocity: currentVelocity
      };
    };

    // it's possible that currentStyle's value is stale: if props is immediately
    // changed from 0 to 400 to spring(0) again, the async currentStyle is still
    // at 0 (didn't have time to tick and interpolate even once). If we naively
    // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
    // In reality currentStyle should be 400

    Motion.prototype.componentDidMount = function componentDidMount() {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    };

    Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
      if (this.unreadPropStyle != null) {
        // previous props haven't had the chance to be set yet; set them here
        this.clearUnreadPropStyle(this.unreadPropStyle);
      }

      this.unreadPropStyle = props.style;
      if (this.animationID == null) {
        this.prevTime = _performanceNow2['default']();
        this.startAnimationIfNecessary();
      }
    };

    Motion.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.animationID != null) {
        _raf2['default'].cancel(this.animationID);
        this.animationID = null;
      }
    };

    Motion.prototype.render = function render() {
      var renderedChildren = this.props.children(this.state.currentStyle);
      return renderedChildren && _react2['default'].Children.only(renderedChildren);
    };

    return Motion;
  })(_react2['default'].Component);

  exports['default'] = Motion;
  module.exports = exports['default'];

  // after checking for unreadPropStyle != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  });

  unwrapExports(Motion_1);

  var StaggeredMotion_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



  var _mapToZero2 = _interopRequireDefault(mapToZero_1);



  var _stripStyle2 = _interopRequireDefault(stripStyle_1);



  var _stepper4 = _interopRequireDefault(stepper_1);



  var _performanceNow2 = _interopRequireDefault(performanceNow);



  var _raf2 = _interopRequireDefault(raf_1);



  var _shouldStopAnimation2 = _interopRequireDefault(shouldStopAnimation_1);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);

  var msPerFrame = 1000 / 60;

  function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
    for (var i = 0; i < currentStyles.length; i++) {
      if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
        return false;
      }
    }
    return true;
  }

  var StaggeredMotion = (function (_React$Component) {
    _inherits(StaggeredMotion, _React$Component);

    _createClass(StaggeredMotion, null, [{
      key: 'propTypes',
      value: {
        // TOOD: warn against putting a config in here
        defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
        styles: _propTypes2['default'].func.isRequired,
        children: _propTypes2['default'].func.isRequired
      },
      enumerable: true
    }]);

    function StaggeredMotion(props) {
      var _this = this;

      _classCallCheck(this, StaggeredMotion);

      _React$Component.call(this, props);
      this.animationID = null;
      this.prevTime = 0;
      this.accumulatedTime = 0;
      this.unreadPropStyles = null;

      this.clearUnreadPropStyle = function (unreadPropStyles) {
        var _state = _this.state;
        var currentStyles = _state.currentStyles;
        var currentVelocities = _state.currentVelocities;
        var lastIdealStyles = _state.lastIdealStyles;
        var lastIdealVelocities = _state.lastIdealVelocities;

        var someDirty = false;
        for (var i = 0; i < unreadPropStyles.length; i++) {
          var unreadPropStyle = unreadPropStyles[i];
          var dirty = false;

          for (var key in unreadPropStyle) {
            if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
              continue;
            }

            var styleValue = unreadPropStyle[key];
            if (typeof styleValue === 'number') {
              if (!dirty) {
                dirty = true;
                someDirty = true;
                currentStyles[i] = _extends({}, currentStyles[i]);
                currentVelocities[i] = _extends({}, currentVelocities[i]);
                lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
                lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
              }
              currentStyles[i][key] = styleValue;
              currentVelocities[i][key] = 0;
              lastIdealStyles[i][key] = styleValue;
              lastIdealVelocities[i][key] = 0;
            }
          }
        }

        if (someDirty) {
          _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
        }
      };

      this.startAnimationIfNecessary = function () {
        // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
        // call cb? No, otherwise accidental parent rerender causes cb trigger
        _this.animationID = _raf2['default'](function (timestamp) {
          var destStyles = _this.props.styles(_this.state.lastIdealStyles);

          // check if we need to animate in the first place
          if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.accumulatedTime = 0;
            return;
          }

          var currentTime = timestamp || _performanceNow2['default']();
          var timeDelta = currentTime - _this.prevTime;
          _this.prevTime = currentTime;
          _this.accumulatedTime = _this.accumulatedTime + timeDelta;
          // more than 10 frames? prolly switched browser tab. Restart
          if (_this.accumulatedTime > msPerFrame * 10) {
            _this.accumulatedTime = 0;
          }

          if (_this.accumulatedTime === 0) {
            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.startAnimationIfNecessary();
            return;
          }

          var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
          var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

          var newLastIdealStyles = [];
          var newLastIdealVelocities = [];
          var newCurrentStyles = [];
          var newCurrentVelocities = [];

          for (var i = 0; i < destStyles.length; i++) {
            var destStyle = destStyles[i];
            var newCurrentStyle = {};
            var newCurrentVelocity = {};
            var newLastIdealStyle = {};
            var newLastIdealVelocity = {};

            for (var key in destStyle) {
              if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
                continue;
              }

              var styleValue = destStyle[key];
              if (typeof styleValue === 'number') {
                newCurrentStyle[key] = styleValue;
                newCurrentVelocity[key] = 0;
                newLastIdealStyle[key] = styleValue;
                newLastIdealVelocity[key] = 0;
              } else {
                var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
                var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
                for (var j = 0; j < framesToCatchUp; j++) {
                  var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                  newLastIdealStyleValue = _stepper[0];
                  newLastIdealVelocityValue = _stepper[1];
                }

                var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                var nextIdealX = _stepper2[0];
                var nextIdealV = _stepper2[1];

                newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
                newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
                newLastIdealStyle[key] = newLastIdealStyleValue;
                newLastIdealVelocity[key] = newLastIdealVelocityValue;
              }
            }

            newCurrentStyles[i] = newCurrentStyle;
            newCurrentVelocities[i] = newCurrentVelocity;
            newLastIdealStyles[i] = newLastIdealStyle;
            newLastIdealVelocities[i] = newLastIdealVelocity;
          }

          _this.animationID = null;
          // the amount we're looped over above
          _this.accumulatedTime -= framesToCatchUp * msPerFrame;

          _this.setState({
            currentStyles: newCurrentStyles,
            currentVelocities: newCurrentVelocities,
            lastIdealStyles: newLastIdealStyles,
            lastIdealVelocities: newLastIdealVelocities
          });

          _this.unreadPropStyles = null;

          _this.startAnimationIfNecessary();
        });
      };

      this.state = this.defaultState();
    }

    StaggeredMotion.prototype.defaultState = function defaultState() {
      var _props = this.props;
      var defaultStyles = _props.defaultStyles;
      var styles = _props.styles;

      var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
      var currentVelocities = currentStyles.map(function (currentStyle) {
        return _mapToZero2['default'](currentStyle);
      });
      return {
        currentStyles: currentStyles,
        currentVelocities: currentVelocities,
        lastIdealStyles: currentStyles,
        lastIdealVelocities: currentVelocities
      };
    };

    StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    };

    StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
      if (this.unreadPropStyles != null) {
        // previous props haven't had the chance to be set yet; set them here
        this.clearUnreadPropStyle(this.unreadPropStyles);
      }

      this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
      if (this.animationID == null) {
        this.prevTime = _performanceNow2['default']();
        this.startAnimationIfNecessary();
      }
    };

    StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.animationID != null) {
        _raf2['default'].cancel(this.animationID);
        this.animationID = null;
      }
    };

    StaggeredMotion.prototype.render = function render() {
      var renderedChildren = this.props.children(this.state.currentStyles);
      return renderedChildren && _react2['default'].Children.only(renderedChildren);
    };

    return StaggeredMotion;
  })(_react2['default'].Component);

  exports['default'] = StaggeredMotion;
  module.exports = exports['default'];

  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400

  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  });

  unwrapExports(StaggeredMotion_1);

  var mergeDiff_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports['default'] = mergeDiff;

  function mergeDiff(prev, next, onRemove) {
    // bookkeeping for easier access of a key's index below. This is 2 allocations +
    // potentially triggering chrome hash map mode for objs (so it might be faster

    var prevKeyIndex = {};
    for (var i = 0; i < prev.length; i++) {
      prevKeyIndex[prev[i].key] = i;
    }
    var nextKeyIndex = {};
    for (var i = 0; i < next.length; i++) {
      nextKeyIndex[next[i].key] = i;
    }

    // first, an overly elaborate way of merging prev and next, eliminating
    // duplicates (in terms of keys). If there's dupe, keep the item in next).
    // This way of writing it saves allocations
    var ret = [];
    for (var i = 0; i < next.length; i++) {
      ret[i] = next[i];
    }
    for (var i = 0; i < prev.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
        // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
        // merge in keys that the user desires to kill
        var fill = onRemove(i, prev[i]);
        if (fill != null) {
          ret.push(fill);
        }
      }
    }

    // now all the items all present. Core sorting logic to have the right order
    return ret.sort(function (a, b) {
      var nextOrderA = nextKeyIndex[a.key];
      var nextOrderB = nextKeyIndex[b.key];
      var prevOrderA = prevKeyIndex[a.key];
      var prevOrderB = prevKeyIndex[b.key];

      if (nextOrderA != null && nextOrderB != null) {
        // both keys in next
        return nextKeyIndex[a.key] - nextKeyIndex[b.key];
      } else if (prevOrderA != null && prevOrderB != null) {
        // both keys in prev
        return prevKeyIndex[a.key] - prevKeyIndex[b.key];
      } else if (nextOrderA != null) {
        // key a in next, key b in prev

        // how to determine the order between a and b? We find a "pivot" (term
        // abuse), a key present in both prev and next, that is sandwiched between
        // a and b. In the context of our above example, if we're comparing a and
        // d, b's (the only) pivot
        for (var i = 0; i < next.length; i++) {
          var pivot = next[i].key;
          if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
            continue;
          }

          if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
            return -1;
          } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
            return 1;
          }
        }
        // pluggable. default to: next bigger than prev
        return 1;
      }
      // prevOrderA, nextOrderB
      for (var i = 0; i < next.length; i++) {
        var pivot = next[i].key;
        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
          continue;
        }
        if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
          return 1;
        } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
          return -1;
        }
      }
      // pluggable. default to: next bigger than prev
      return -1;
    });
  }

  module.exports = exports['default'];
  // to loop through and find a key's index each time), but I no longer care
  });

  unwrapExports(mergeDiff_1);

  var TransitionMotion_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



  var _mapToZero2 = _interopRequireDefault(mapToZero_1);



  var _stripStyle2 = _interopRequireDefault(stripStyle_1);



  var _stepper4 = _interopRequireDefault(stepper_1);



  var _mergeDiff2 = _interopRequireDefault(mergeDiff_1);



  var _performanceNow2 = _interopRequireDefault(performanceNow);



  var _raf2 = _interopRequireDefault(raf_1);



  var _shouldStopAnimation2 = _interopRequireDefault(shouldStopAnimation_1);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);

  var msPerFrame = 1000 / 60;

  // the children function & (potential) styles function asks as param an
  // Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
  // {key: string, data?: any, style: PlainStyle}. However, the way we keep
  // internal states doesn't contain such a data structure (check the state and
  // TransitionMotionState). So when children function and others ask for such
  // data we need to generate them on the fly by combining mergedPropsStyles and
  // currentStyles/lastIdealStyles
  function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
    // Copy the value to a `const` so that Flow understands that the const won't
    // change and will be non-nullable in the callback below.
    var cUnreadPropStyles = unreadPropStyles;
    if (cUnreadPropStyles == null) {
      return mergedPropsStyles.map(function (mergedPropsStyle, i) {
        return {
          key: mergedPropsStyle.key,
          data: mergedPropsStyle.data,
          style: plainStyles[i]
        };
      });
    }
    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
      for (var j = 0; j < cUnreadPropStyles.length; j++) {
        if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
          return {
            key: cUnreadPropStyles[j].key,
            data: cUnreadPropStyles[j].data,
            style: plainStyles[i]
          };
        }
      }
      return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
    });
  }

  function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
    if (mergedPropsStyles.length !== destStyles.length) {
      return false;
    }

    for (var i = 0; i < mergedPropsStyles.length; i++) {
      if (mergedPropsStyles[i].key !== destStyles[i].key) {
        return false;
      }
    }

    // we have the invariant that mergedPropsStyles and
    // currentStyles/currentVelocities/last* are synced in terms of cells, see
    // mergeAndSync comment for more info
    for (var i = 0; i < mergedPropsStyles.length; i++) {
      if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
        return false;
      }
    }

    return true;
  }

  // core key merging logic

  // things to do: say previously merged style is {a, b}, dest style (prop) is {b,
  // c}, previous current (interpolating) style is {a, b}
  // **invariant**: current[i] corresponds to merged[i] in terms of key

  // steps:
  // turn merged style into {a?, b, c}
  //    add c, value of c is destStyles.c
  //    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
  // turn current (interpolating) style from {a, b} into {a?, b, c}
  //    maybe remove a
  //    certainly add c, value of c is willEnter(c)
  // loop over merged and construct new current
  // dest doesn't change, that's owner's
  function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
    var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
      var leavingStyle = willLeave(oldMergedPropsStyle);
      if (leavingStyle == null) {
        didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
        return null;
      }
      if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
        didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
        return null;
      }
      return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
    });

    var newCurrentStyles = [];
    var newCurrentVelocities = [];
    var newLastIdealStyles = [];
    var newLastIdealVelocities = [];
    for (var i = 0; i < newMergedPropsStyles.length; i++) {
      var newMergedPropsStyleCell = newMergedPropsStyles[i];
      var foundOldIndex = null;
      for (var j = 0; j < oldMergedPropsStyles.length; j++) {
        if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
          foundOldIndex = j;
          break;
        }
      }
      // TODO: key search code
      if (foundOldIndex == null) {
        var plainStyle = willEnter(newMergedPropsStyleCell);
        newCurrentStyles[i] = plainStyle;
        newLastIdealStyles[i] = plainStyle;

        var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
        newCurrentVelocities[i] = velocity;
        newLastIdealVelocities[i] = velocity;
      } else {
        newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
        newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
        newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
        newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
      }
    }

    return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
  }

  var TransitionMotion = (function (_React$Component) {
    _inherits(TransitionMotion, _React$Component);

    _createClass(TransitionMotion, null, [{
      key: 'propTypes',
      value: {
        defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
          key: _propTypes2['default'].string.isRequired,
          data: _propTypes2['default'].any,
          style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
        })),
        styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
          key: _propTypes2['default'].string.isRequired,
          data: _propTypes2['default'].any,
          style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
        }))]).isRequired,
        children: _propTypes2['default'].func.isRequired,
        willEnter: _propTypes2['default'].func,
        willLeave: _propTypes2['default'].func,
        didLeave: _propTypes2['default'].func
      },
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        willEnter: function willEnter(styleThatEntered) {
          return _stripStyle2['default'](styleThatEntered.style);
        },
        // recall: returning null makes the current unmounting TransitionStyle
        // disappear immediately
        willLeave: function willLeave() {
          return null;
        },
        didLeave: function didLeave() {}
      },
      enumerable: true
    }]);

    function TransitionMotion(props) {
      var _this = this;

      _classCallCheck(this, TransitionMotion);

      _React$Component.call(this, props);
      this.unmounting = false;
      this.animationID = null;
      this.prevTime = 0;
      this.accumulatedTime = 0;
      this.unreadPropStyles = null;

      this.clearUnreadPropStyle = function (unreadPropStyles) {
        var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

        var mergedPropsStyles = _mergeAndSync[0];
        var currentStyles = _mergeAndSync[1];
        var currentVelocities = _mergeAndSync[2];
        var lastIdealStyles = _mergeAndSync[3];
        var lastIdealVelocities = _mergeAndSync[4];

        for (var i = 0; i < unreadPropStyles.length; i++) {
          var unreadPropStyle = unreadPropStyles[i].style;
          var dirty = false;

          for (var key in unreadPropStyle) {
            if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
              continue;
            }

            var styleValue = unreadPropStyle[key];
            if (typeof styleValue === 'number') {
              if (!dirty) {
                dirty = true;
                currentStyles[i] = _extends({}, currentStyles[i]);
                currentVelocities[i] = _extends({}, currentVelocities[i]);
                lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
                lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
                mergedPropsStyles[i] = {
                  key: mergedPropsStyles[i].key,
                  data: mergedPropsStyles[i].data,
                  style: _extends({}, mergedPropsStyles[i].style)
                };
              }
              currentStyles[i][key] = styleValue;
              currentVelocities[i][key] = 0;
              lastIdealStyles[i][key] = styleValue;
              lastIdealVelocities[i][key] = 0;
              mergedPropsStyles[i].style[key] = styleValue;
            }
          }
        }

        // unlike the other 2 components, we can't detect staleness and optionally
        // opt out of setState here. each style object's data might contain new
        // stuff we're not/cannot compare
        _this.setState({
          currentStyles: currentStyles,
          currentVelocities: currentVelocities,
          mergedPropsStyles: mergedPropsStyles,
          lastIdealStyles: lastIdealStyles,
          lastIdealVelocities: lastIdealVelocities
        });
      };

      this.startAnimationIfNecessary = function () {
        if (_this.unmounting) {
          return;
        }

        // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
        // call cb? No, otherwise accidental parent rerender causes cb trigger
        _this.animationID = _raf2['default'](function (timestamp) {
          // https://github.com/chenglou/react-motion/pull/420
          // > if execution passes the conditional if (this.unmounting), then
          // executes async defaultRaf and after that component unmounts and after
          // that the callback of defaultRaf is called, then setState will be called
          // on unmounted component.
          if (_this.unmounting) {
            return;
          }

          var propStyles = _this.props.styles;
          var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

          // check if we need to animate in the first place
          if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.accumulatedTime = 0;
            return;
          }

          var currentTime = timestamp || _performanceNow2['default']();
          var timeDelta = currentTime - _this.prevTime;
          _this.prevTime = currentTime;
          _this.accumulatedTime = _this.accumulatedTime + timeDelta;
          // more than 10 frames? prolly switched browser tab. Restart
          if (_this.accumulatedTime > msPerFrame * 10) {
            _this.accumulatedTime = 0;
          }

          if (_this.accumulatedTime === 0) {
            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.startAnimationIfNecessary();
            return;
          }

          var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
          var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

          var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

          var newMergedPropsStyles = _mergeAndSync2[0];
          var newCurrentStyles = _mergeAndSync2[1];
          var newCurrentVelocities = _mergeAndSync2[2];
          var newLastIdealStyles = _mergeAndSync2[3];
          var newLastIdealVelocities = _mergeAndSync2[4];

          for (var i = 0; i < newMergedPropsStyles.length; i++) {
            var newMergedPropsStyle = newMergedPropsStyles[i].style;
            var newCurrentStyle = {};
            var newCurrentVelocity = {};
            var newLastIdealStyle = {};
            var newLastIdealVelocity = {};

            for (var key in newMergedPropsStyle) {
              if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
                continue;
              }

              var styleValue = newMergedPropsStyle[key];
              if (typeof styleValue === 'number') {
                newCurrentStyle[key] = styleValue;
                newCurrentVelocity[key] = 0;
                newLastIdealStyle[key] = styleValue;
                newLastIdealVelocity[key] = 0;
              } else {
                var newLastIdealStyleValue = newLastIdealStyles[i][key];
                var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
                for (var j = 0; j < framesToCatchUp; j++) {
                  var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                  newLastIdealStyleValue = _stepper[0];
                  newLastIdealVelocityValue = _stepper[1];
                }

                var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                var nextIdealX = _stepper2[0];
                var nextIdealV = _stepper2[1];

                newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
                newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
                newLastIdealStyle[key] = newLastIdealStyleValue;
                newLastIdealVelocity[key] = newLastIdealVelocityValue;
              }
            }

            newLastIdealStyles[i] = newLastIdealStyle;
            newLastIdealVelocities[i] = newLastIdealVelocity;
            newCurrentStyles[i] = newCurrentStyle;
            newCurrentVelocities[i] = newCurrentVelocity;
          }

          _this.animationID = null;
          // the amount we're looped over above
          _this.accumulatedTime -= framesToCatchUp * msPerFrame;

          _this.setState({
            currentStyles: newCurrentStyles,
            currentVelocities: newCurrentVelocities,
            lastIdealStyles: newLastIdealStyles,
            lastIdealVelocities: newLastIdealVelocities,
            mergedPropsStyles: newMergedPropsStyles
          });

          _this.unreadPropStyles = null;

          _this.startAnimationIfNecessary();
        });
      };

      this.state = this.defaultState();
    }

    TransitionMotion.prototype.defaultState = function defaultState() {
      var _props = this.props;
      var defaultStyles = _props.defaultStyles;
      var styles = _props.styles;
      var willEnter = _props.willEnter;
      var willLeave = _props.willLeave;
      var didLeave = _props.didLeave;

      var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

      // this is special. for the first time around, we don't have a comparison
      // between last (no last) and current merged props. we'll compute last so:
      // say default is {a, b} and styles (dest style) is {b, c}, we'll
      // fabricate last as {a, b}
      var oldMergedPropsStyles = undefined;
      if (defaultStyles == null) {
        oldMergedPropsStyles = destStyles;
      } else {
        oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
          // TODO: key search code
          for (var i = 0; i < destStyles.length; i++) {
            if (destStyles[i].key === defaultStyleCell.key) {
              return destStyles[i];
            }
          }
          return defaultStyleCell;
        });
      }
      var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
        return _stripStyle2['default'](s.style);
      }) : defaultStyles.map(function (s) {
        return _stripStyle2['default'](s.style);
      });
      var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
        return _mapToZero2['default'](s.style);
      }) : defaultStyles.map(function (s) {
        return _mapToZero2['default'](s.style);
      });

      var _mergeAndSync3 = mergeAndSync(
      // Because this is an old-style createReactClass component, Flow doesn't
      // understand that the willEnter and willLeave props have default values
      // and will always be present.
      willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
      oldCurrentVelocities);

      var mergedPropsStyles = _mergeAndSync3[0];
      var currentStyles = _mergeAndSync3[1];
      var currentVelocities = _mergeAndSync3[2];
      var lastIdealStyles = _mergeAndSync3[3];
      var lastIdealVelocities = _mergeAndSync3[4];
      // oldLastIdealVelocities really

      return {
        currentStyles: currentStyles,
        currentVelocities: currentVelocities,
        lastIdealStyles: lastIdealStyles,
        lastIdealVelocities: lastIdealVelocities,
        mergedPropsStyles: mergedPropsStyles
      };
    };

    // after checking for unreadPropStyles != null, we manually go set the
    // non-interpolating values (those that are a number, without a spring
    // config)

    TransitionMotion.prototype.componentDidMount = function componentDidMount() {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    };

    TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
      if (this.unreadPropStyles) {
        // previous props haven't had the chance to be set yet; set them here
        this.clearUnreadPropStyle(this.unreadPropStyles);
      }

      var styles = props.styles;
      if (typeof styles === 'function') {
        this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
      } else {
        this.unreadPropStyles = styles;
      }

      if (this.animationID == null) {
        this.prevTime = _performanceNow2['default']();
        this.startAnimationIfNecessary();
      }
    };

    TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unmounting = true;
      if (this.animationID != null) {
        _raf2['default'].cancel(this.animationID);
        this.animationID = null;
      }
    };

    TransitionMotion.prototype.render = function render() {
      var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
      var renderedChildren = this.props.children(hydratedStyles);
      return renderedChildren && _react2['default'].Children.only(renderedChildren);
    };

    return TransitionMotion;
  })(_react2['default'].Component);

  exports['default'] = TransitionMotion;
  module.exports = exports['default'];

  // list of styles, each containing interpolating values. Part of what's passed
  // to children function. Notice that this is
  // Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
  // data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
  // contains the key & data info (so that we only have a single source of truth
  // for these, and to save space). Check the comment for `rehydrateStyles` to
  // see how we regenerate the entirety of what's passed to children function

  // the array that keeps track of currently rendered stuff! Including stuff
  // that you've unmounted but that's still animating. This is where it lives

  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  });

  unwrapExports(TransitionMotion_1);

  var presets = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports["default"] = {
    noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
    gentle: { stiffness: 120, damping: 14 },
    wobbly: { stiffness: 180, damping: 12 },
    stiff: { stiffness: 210, damping: 20 }
  };
  module.exports = exports["default"];
  });

  unwrapExports(presets);

  var spring_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports['default'] = spring;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



  var _presets2 = _interopRequireDefault(presets);

  var defaultConfig = _extends({}, _presets2['default'].noWobble, {
    precision: 0.01
  });

  function spring(val, config) {
    return _extends({}, defaultConfig, config, { val: val });
  }

  module.exports = exports['default'];
  });

  unwrapExports(spring_1);

  var reorderKeys_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports['default'] = reorderKeys;

  var hasWarned = false;

  function reorderKeys() {
    {
      if (!hasWarned) {
        hasWarned = true;
        console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
      }
    }
  }

  module.exports = exports['default'];
  });

  unwrapExports(reorderKeys_1);

  var reactMotion = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }



  exports.Motion = _interopRequire(Motion_1);



  exports.StaggeredMotion = _interopRequire(StaggeredMotion_1);



  exports.TransitionMotion = _interopRequire(TransitionMotion_1);



  exports.spring = _interopRequire(spring_1);



  exports.presets = _interopRequire(presets);



  exports.stripStyle = _interopRequire(stripStyle_1);

  // deprecated, dummy warning function



  exports.reorderKeys = _interopRequire(reorderKeys_1);
  });

  unwrapExports(reactMotion);
  var reactMotion_1 = reactMotion.Motion;
  var reactMotion_2 = reactMotion.StaggeredMotion;
  var reactMotion_3 = reactMotion.TransitionMotion;
  var reactMotion_4 = reactMotion.spring;
  var reactMotion_5 = reactMotion.presets;
  var reactMotion_6 = reactMotion.stripStyle;
  var reactMotion_7 = reactMotion.reorderKeys;

  var Swipe_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function getTouchEvent(e) {
    return e.touches && e.touches[0] || e;
  }

  var Swipe = function () {
    function Swipe(pager) {
      var _this = this;

      _classCallCheck(this, Swipe);

      this._onSwipeStart = function (e) {
        var _getTouchEvent = getTouchEvent(e),
            pageX = _getTouchEvent.pageX,
            pageY = _getTouchEvent.pageY;

        // we're now swiping


        _this.pager.isSwiping = true;

        // store the initial starting coordinates
        _this._swipeStart = {
          x: pageX,
          y: pageY

          // reset swipeDiff
        };_this._swipeDiff = {
          x: 0,
          y: 0

          // determine if a flick or not
        };_this._isFlick = true;

        setTimeout(function () {
          _this._isFlick = false;
        }, _this.pager.options.flickTimeout);

        _this.pager.emit('swipeStart');
      };

      this._onSwipeMove = function (e) {
        // bail if we aren't swiping
        if (!_this.pager.isSwiping) return;

        var _pager$options = _this.pager.options,
            swipeThreshold = _pager$options.swipeThreshold,
            axis = _pager$options.axis;

        var _getTouchEvent2 = getTouchEvent(e),
            pageX = _getTouchEvent2.pageX,
            pageY = _getTouchEvent2.pageY;

        // grab the current position of the track before


        if (!_this._trackStart) {
          _this._trackStart = _this.pager.currentTween;
        }

        // determine how much we have moved
        _this._swipeDiff = {
          x: _this._swipeStart.x - pageX,
          y: _this._swipeStart.y - pageY
        };

        if (_this._isSwipe(swipeThreshold)) {
          e.preventDefault();
          e.stopPropagation();

          var swipeDiff = _this._swipeDiff[axis];
          var trackPosition = _this._trackStart - swipeDiff;

          _this.pager.setPositionValue(trackPosition);

          _this.pager.emit('swipeMove');
        }
      };

      this._onSwipeEnd = function () {
        var _pager$options2 = _this.pager.options,
            swipeThreshold = _pager$options2.swipeThreshold,
            viewsToMove = _pager$options2.viewsToMove,
            axis = _pager$options2.axis,
            infinite = _pager$options2.infinite;

        var threshold = _this._isFlick ? swipeThreshold : _this.pager.currentView.getSize() * viewsToMove * swipeThreshold;

        // we've stopped swiping
        _this.pager.isSwiping = false;

        // reset start track so we can grab it again on the next swipe
        _this._trackStart = false;

        // don't move anything if there hasn't been an attempted swipe
        if (_this._swipeDiff.x || _this._swipeDiff.y) {
          // determine if we've passed the defined threshold
          if (_this._isSwipe(threshold)) {
            if (_this._swipeDiff[axis] < 0) {
              _this.pager.prev();
            } else {
              _this.pager.next();
            }
          }
          // if we didn't, reset back to original view
          else {
              _this.pager.setPositionValue();
            }
        }

        _this.pager.emit('swipeEnd');
      };

      this._onSwipePast = function () {
        // perform a swipe end if we swiped past the component
        if (_this.pager.isSwiping) {
          _this._onSwipeEnd();
        }
      };

      this.pager = pager;
      this._trackStart = false;
      this._swipeStart = this._swipeDiff = {
        x: 0,
        y: 0
      };
    }

    _createClass(Swipe, [{
      key: '_isSwipe',
      value: function _isSwipe(threshold) {
        var _swipeDiff = this._swipeDiff,
            x = _swipeDiff.x,
            y = _swipeDiff.y;

        return this.pager.options.axis === 'x' ? Math.abs(x) > Math.max(threshold, Math.abs(y)) : Math.abs(x) < Math.max(threshold, Math.abs(y));
      }
    }, {
      key: 'getEvents',
      value: function getEvents() {
        var swipe = this.pager.options.swipe;

        var swipeEvents = {};

        if (swipe === true || swipe === 'mouse') {
          swipeEvents.onMouseDown = this._onSwipeStart;
          swipeEvents.onMouseMove = this._onSwipeMove;
          swipeEvents.onMouseUp = this._onSwipeEnd;
          swipeEvents.onMouseLeave = this._onSwipePast;
        }

        if (swipe === true || swipe === 'touch') {
          swipeEvents.onTouchStart = this._onSwipeStart;
          swipeEvents.onTouchMove = this._onSwipeMove;
          swipeEvents.onTouchEnd = this._onSwipeEnd;
        }

        return swipeEvents;
      }
    }]);

    return Swipe;
  }();

  exports.default = Swipe;
  module.exports = exports['default'];
  });

  unwrapExports(Swipe_1);

  var Keyboard_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Keyboard = function () {
    function Keyboard(pager) {
      var _this = this;

      _classCallCheck(this, Keyboard);

      this._handleKeyDown = function (e) {
        // handle respective key controls
        switch (e.key) {
          // move to the previous view
          case 'ArrowUp':
          case 'ArrowLeft':
            _this.pager.prev();
            return;

          // move to the next view
          case 'ArrowDown':
          case 'ArrowRight':
          case ' ':
            _this.pager.next();
            return;

          // move to first view
          case 'Home':
            _this.pager.setCurrentView({ index: 0 });
            return;

          // move to last view
          case 'End':
            _this.pager.setCurrentView({ index: _this.pager.views.length - 1 });
            return;
        }

        // 1 - 9 keys mapped to respective slide number
        var maxNumKey = (0, utils.clamp)(_this.pager.views.length, 0, 9);

        for (var i = 1; i <= maxNumKey; i++) {
          if (+e.key === i) {
            _this.pager.setCurrentView({ index: i - 1 });
          }
        }
      };

      this.pager = pager;
    }

    _createClass(Keyboard, [{
      key: 'getEvents',
      value: function getEvents() {
        var keyboardEvents = {};

        if (this.pager.options.accessibility) {
          keyboardEvents.onKeyDown = this._handleKeyDown;
        }

        return keyboardEvents;
      }
    }]);

    return Keyboard;
  }();

  exports.default = Keyboard;
  module.exports = exports['default'];
  });

  unwrapExports(Keyboard_1);

  var specialAssign_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = specialAssign;
  function specialAssign(a, b, reserved) {
    for (var x in b) {
      if (!b.hasOwnProperty(x) || reserved[x]) continue;
      a[x] = b[x];
    }
    return a;
  }
  module.exports = exports["default"];
  });

  unwrapExports(specialAssign_1);

  var Frame_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);







  var _Pager2 = _interopRequireDefault(Pager_1);



  var _Swipe2 = _interopRequireDefault(Swipe_1);



  var _Keyboard2 = _interopRequireDefault(Keyboard_1);



  var _specialAssign2 = _interopRequireDefault(specialAssign_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var checkedProps = {
    tag: _propTypes2.default.any,
    autoSize: _propTypes2.default.oneOf([true, false, 'width', 'height']),
    accessibility: _propTypes2.default.bool,
    springConfig: _propTypes2.default.objectOf(_propTypes2.default.number)
  };

  var Frame = function (_Component) {
    _inherits(Frame, _Component);

    function Frame(props) {
      _classCallCheck(this, Frame);

      var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, props));

      _this._setFrameSize = function () {
        var frameSize = _this.context.pager.getFrameSize({ fullSize: true });

        if (frameSize.width && frameSize.height) {
          _this.setState(frameSize, function () {
            // we need to unset the instant flag now that React Motion has dimensions to animate to
            if (_this.state.instant) {
              _this.setState({ instant: false });
            }
          });
        }
      };

      _this.state = {
        width: 0,
        height: 0,
        instant: true
      };
      _this._hydrate = false;
      return _this;
    }

    _createClass(Frame, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var pager = this.context.pager;
        var _props = this.props,
            autoSize = _props.autoSize,
            accessibility = _props.accessibility;


        pager.setOptions({ autoSize: autoSize, accessibility: accessibility });

        this._swipe = new _Swipe2.default(pager);
        this._keyboard = new _Keyboard2.default(pager);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var pager = this.context.pager;


        pager.addFrame((0, reactDom__default.findDOMNode)(this));

        // set frame size initially and then based on certain pager events
        this._setFrameSize();
        pager.on('viewChange', this._setFrameSize);
        pager.on('hydrated', this._setFrameSize);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(_ref) {
        var autoSize = _ref.autoSize,
            accessibility = _ref.accessibility;

        // update any options that have changed
        if (this.props.autoSize !== autoSize || this.props.accessibility !== accessibility) {
          this.context.pager.setOptions({ autoSize: autoSize, accessibility: accessibility });
          this._hydrate = true;
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(nextProps) {
        if (this._hydrate) {
          this.context.pager.hydrate();
          this._hydrate = false;
        }
      }
    }, {
      key: '_getFrameStyle',
      value: function _getFrameStyle() {
        var springConfig = this.props.springConfig;
        var _state = this.state,
            width = _state.width,
            height = _state.height,
            instant = _state.instant;

        return {
          maxWidth: instant ? width : (0, reactMotion.spring)(width, springConfig),
          height: instant ? height : (0, reactMotion.spring)(height, springConfig)
        };
      }
    }, {
      key: '_renderFrame',
      value: function _renderFrame(style) {
        var pager = this.context.pager;
        var _props2 = this.props,
            tag = _props2.tag,
            accessibility = _props2.accessibility;

        var props = (0, _specialAssign2.default)(_extends({}, this._swipe.getEvents(), this._keyboard.getEvents(), {
          tabIndex: accessibility ? 0 : null
        }), this.props, checkedProps);

        return (0, React__default.createElement)(tag, _extends({}, props, {
          style: _extends({}, style, props.style)
        }));
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var autoSize = this.props.autoSize;
        var height = this.state.height;

        var style = {
          position: 'relative',
          overflow: 'hidden'
        };

        if (autoSize) {
          return _react2.default.createElement(
            reactMotion.Motion,
            { style: this._getFrameStyle() },
            function (dimensions) {
              if ((autoSize === true || autoSize === 'width') && dimensions.maxWidth) {
                style.maxWidth = dimensions.maxWidth;
              }
              if ((autoSize === true || autoSize === 'height') && dimensions.height) {
                style.height = dimensions.height;
              }
              return _this2._renderFrame(style);
            }
          );
        } else {
          return this._renderFrame(style);
        }
      }
    }]);

    return Frame;
  }(React__default.Component);

  Frame.contextTypes = {
    pager: _propTypes2.default.instanceOf(_Pager2.default)
  };
  Frame.propTypes = checkedProps;
  Frame.defaultProps = {
    tag: 'div',
    autoSize: false,
    accessibility: true,
    springConfig: reactMotion.presets.noWobble
  };
  exports.default = Frame;
  module.exports = exports['default'];
  });

  unwrapExports(Frame_1);

  var getIndex_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getIndex;



  function getIndex(key, children) {
    var index = null;

    React__default.Children.forEach(children, function (child, _index) {
      if (child.key === key || _index === key) {
        index = _index;
        return;
      }
    });

    return index;
  }
  module.exports = exports['default'];
  });

  unwrapExports(getIndex_1);

  var Track_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);







  var _Pager2 = _interopRequireDefault(Pager_1);



  var _getIndex2 = _interopRequireDefault(getIndex_1);



  var _specialAssign2 = _interopRequireDefault(specialAssign_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var noop = function noop() {
    return null;
  };
  var checkedProps = {
    tag: _propTypes2.default.any,
    currentView: _propTypes2.default.any,
    viewsToShow: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['auto'])]),
    viewsToMove: _propTypes2.default.number,
    align: _propTypes2.default.number,
    contain: _propTypes2.default.bool,
    axis: _propTypes2.default.oneOf(['x', 'y']),
    animations: _propTypes2.default.array,
    infinite: _propTypes2.default.bool,
    instant: _propTypes2.default.bool,
    swipe: _propTypes2.default.oneOf([true, false, 'mouse', 'touch']),
    swipeThreshold: _propTypes2.default.number,
    flickTimeout: _propTypes2.default.number,
    // rightToLeft: PropTypes.bool,
    // lazyLoad: PropTypes.bool,
    springConfig: _propTypes2.default.objectOf(_propTypes2.default.number),
    onSwipeStart: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    onScroll: _propTypes2.default.func,
    onViewChange: _propTypes2.default.func,
    onRest: _propTypes2.default.func
  };
  var isNotEqual = function isNotEqual(current, next) {
    return current.viewsToShow !== next.viewsToShow || current.viewsToMove !== next.viewsToMove || current.align !== next.align || current.axis !== next.axis || current.animations !== next.animations || current.infinite !== next.infinite || current.swipe !== next.swipe || current.swipeThreshold !== next.swipeThreshold || current.flickTimeout !== next.flickTimeout;
  };

  // Track scroller is an intermediate component that allows us to provide the
  // React Motion value to onScroll and lets any user of onScroll use setState

  var TrackScroller = function (_Component) {
    _inherits(TrackScroller, _Component);

    function TrackScroller() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, TrackScroller);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TrackScroller.__proto__ || Object.getPrototypeOf(TrackScroller)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        x: 0,
        y: 0
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TrackScroller, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(_ref2) {
        var _this2 = this;

        var trackPosition = _ref2.trackPosition;
        var pager = this.context.pager;

        // update view styles with current position tween
        // this method can get called hundreds of times, let's make sure to optimize as much as we can

        pager.setViewStyles(trackPosition);

        // update onScroll callback, we use requestAnimationFrame to avoid bouncing
        // back from updates from onScroll while React Motion is trying to update it's own tree
        // https://github.com/chenglou/react-motion/issues/357#issuecomment-262393424
        if (this.props.trackPosition !== trackPosition) {
          requestAnimationFrame(function () {
            return _this2.props.onScroll(trackPosition / pager.getTrackSize(false) * -1, trackPosition);
          });
        }
      }
    }, {
      key: '_renderViews',
      value: function _renderViews() {
        // we need Children map in order for the infinite option to work
        // not actually sure why this is the case
        return React__default.Children.map(this.props.children, function (child) {
          return child;
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var pager = this.context.pager;

        var _props = this.props,
            tag = _props.tag,
            trackPosition = _props.trackPosition,
            children = _props.children,
            restProps = _objectWithoutProperties(_props, ['tag', 'trackPosition', 'children']);

        var style = _extends({}, restProps.style);

        if (pager.track) {
          style = _extends({}, style, pager.track.getStyles(trackPosition));
        }

        return (0, React__default.createElement)(tag, _extends({}, restProps, {
          style: style
        }), this._renderViews());
      }
    }]);

    return TrackScroller;
  }(React__default.Component);

  TrackScroller.propTypes = checkedProps;
  TrackScroller.contextTypes = {
    pager: _propTypes2.default.instanceOf(_Pager2.default)
  };

  var Track = function (_Component2) {
    _inherits(Track, _Component2);

    function Track() {
      var _ref3;

      var _temp2, _this3, _ret2;

      _classCallCheck(this, Track);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref3 = Track.__proto__ || Object.getPrototypeOf(Track)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {
        instant: false
      }, _this3._currentTween = 0, _this3._hydrate = false, _this3._handleOnRest = function () {
        if (_this3.props.infinite && !_this3.state.instant) {
          // reset back to a normal index
          _this3.context.pager.resetViewIndex();

          // set instant flag so we can prime track for next move
          _this3._setValueInstantly(true, true);
        }

        _this3.props.onRest();
      }, _temp2), _possibleConstructorReturn(_this3, _ret2);
    }

    _createClass(Track, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.pager.setOptions(this.props);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this4 = this;

        var pager = this.context.pager;

        // add track to pager

        pager.addTrack((0, reactDom__default.findDOMNode)(this));

        // set initial view index and listen for any incoming view index changes
        this.scrollTo((0, _getIndex2.default)(this.props.currentView, this.props.children));

        // set values instantly on respective events
        pager.on('hydrated', function () {
          return _this4._setValueInstantly(true, true);
        });
        pager.on('swipeMove', function () {
          return _this4._setValueInstantly(true);
        });
        pager.on('swipeEnd', function () {
          return _this4._setValueInstantly(false);
        });

        // prop callbacks
        pager.on('swipeStart', this.props.onSwipeStart);
        pager.on('swipeMove', this.props.onSwipeMove);
        pager.on('swipeEnd', this.props.onSwipeEnd);
        pager.on('viewChange', this.props.onViewChange);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var currentView = nextProps.currentView,
            instant = nextProps.instant,
            children = nextProps.children;

        // update instant state from props

        if (this.props.instant !== instant) {
          this._setValueInstantly(instant);
        }

        // update state with new index if necessary
        if ((typeof currentView === 'undefined' ? 'undefined' : _typeof(currentView)) !== undefined && this.props.currentView !== currentView) {
          this.scrollTo((0, _getIndex2.default)(currentView, children));
        }

        // update any options that have changed
        if (isNotEqual(this.props, nextProps)) {
          this.context.pager.setOptions(nextProps);
          this._hydrate = true;
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(nextProps) {
        if (this._hydrate) {
          this.context.pager.hydrate();
          this._hydrate = false;
        }
      }
    }, {
      key: 'prev',
      value: function prev() {
        this.context.pager.prev();
      }
    }, {
      key: 'next',
      value: function next() {
        this.context.pager.next();
      }
    }, {
      key: 'scrollTo',
      value: function scrollTo(index) {
        this.context.pager.setCurrentView({ index: index });
      }
    }, {
      key: '_setValueInstantly',
      value: function _setValueInstantly(instant, reset) {
        var _this5 = this;

        this.setState({ instant: instant }, function () {
          if (reset) {
            _this5.setState({ instant: false });
          }
        });
      }
    }, {
      key: '_getTrackStyle',
      value: function _getTrackStyle() {
        var trackPosition = this.context.pager.trackPosition;

        if (!this.state.instant) {
          trackPosition = (0, reactMotion.spring)(trackPosition, this.props.springConfig);
        }
        return { trackPosition: trackPosition };
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            tag = _props2.tag,
            onScroll = _props2.onScroll,
            restProps = _objectWithoutProperties(_props2, ['tag', 'onScroll']);

        return _react2.default.createElement(
          reactMotion.Motion,
          {
            style: this._getTrackStyle(),
            onRest: this._handleOnRest
          },
          function (_ref4) {
            var trackPosition = _ref4.trackPosition;
            return (0, React__default.createElement)(TrackScroller, (0, _specialAssign2.default)({ trackPosition: trackPosition, tag: tag, onScroll: onScroll }, restProps, checkedProps));
          }
        );
      }
    }]);

    return Track;
  }(React__default.Component);

  Track.propTypes = checkedProps;
  Track.defaultProps = {
    tag: 'div',
    currentView: 0,
    viewsToShow: 1,
    viewsToMove: 1,
    align: 0,
    contain: false,
    axis: 'x',
    infinite: false,
    instant: false,
    swipe: true,
    swipeThreshold: 0.5,
    flickTimeout: 300,
    springConfig: reactMotion.presets.noWobble,
    onSwipeStart: noop,
    onSwipeMove: noop,
    onSwipeEnd: noop,
    onScroll: noop,
    onViewChange: noop,
    onRest: noop
  };
  Track.contextTypes = {
    pager: _propTypes2.default.instanceOf(_Pager2.default)
  };
  exports.default = Track;
  module.exports = exports['default'];
  });

  unwrapExports(Track_1);

  var View_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);





  var _Pager2 = _interopRequireDefault(Pager_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var View = function (_Component) {
    _inherits(View, _Component);

    function View() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, View);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = View.__proto__ || Object.getPrototypeOf(View)).call.apply(_ref, [this].concat(args))), _this), _this._viewAdded = false, _this._viewInstance = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(View, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          view: this._viewInstance
        };
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._viewInstance = this.context.pager.addView((0, reactDom__default.findDOMNode)(this));
        this._viewAdded = true;
        this.forceUpdate();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.context.pager.removeView(this._viewInstance);
      }
    }, {
      key: 'render',
      value: function render() {
        var pager = this.context.pager;
        var _pager$options = pager.options,
            viewsToShow = _pager$options.viewsToShow,
            axis = _pager$options.axis;

        var _props = this.props,
            tag = _props.tag,
            trackSize = _props.trackSize,
            restProps = _objectWithoutProperties(_props, ['tag', 'trackSize']);

        var style = _extends({}, restProps.style);

        // hide view visually until it has been added to the pager
        // this should help avoid FOUC
        if (!this._viewAdded) {
          style.visibility = 'hidden';
          style.pointerEvents = 'none';
        }

        if (this._viewInstance) {
          style = _extends({}, style, this._viewInstance.getStyles());
        }

        return (0, React__default.createElement)(tag, _extends({}, restProps, { style: style }));
      }
    }]);

    return View;
  }(React__default.Component);

  View.contextTypes = {
    pager: _propTypes2.default.instanceOf(_Pager2.default)
  };
  View.childContextTypes = {
    view: _propTypes2.default.any
  };
  View.propTypes = {
    tag: _propTypes2.default.any
  };
  View.defaultProps = {
    tag: 'div'
  };
  exports.default = View;
  module.exports = exports['default'];
  });

  unwrapExports(View_1);

  var AnimatedView_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);



  var _animationBus2 = _interopRequireDefault(animationBus);



  var _Pager2 = _interopRequireDefault(Pager_1);



  var _specialAssign2 = _interopRequireDefault(specialAssign_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var checkedProps = {
    tag: _propTypes2.default.string,
    index: _propTypes2.default.number,
    animations: _propTypes2.default.array
  };

  var AnimatedView = function (_Component) {
    _inherits(AnimatedView, _Component);

    function AnimatedView() {
      _classCallCheck(this, AnimatedView);

      return _possibleConstructorReturn(this, (AnimatedView.__proto__ || Object.getPrototypeOf(AnimatedView)).apply(this, arguments));
    }

    _createClass(AnimatedView, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var animations = this.props.animations;


        if (animations.length) {
          this._animationBus = new _animationBus2.default({
            animations: animations,
            origin: function origin(view) {
              return view.origin;
            }
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            tag = _props.tag,
            index = _props.index,
            restProps = _objectWithoutProperties(_props, ['tag', 'index']);

        var style = _extends({}, restProps.style);

        if (this._animationBus) {
          var view = this.context.view || this.context.pager.getView(index);
          if (view) {
            style = _extends({}, restProps.style, this._animationBus.getStyles(view));
          }
        }

        return (0, React__default.createElement)(tag, (0, _specialAssign2.default)({ style: style }, this.props, checkedProps));
      }
    }]);

    return AnimatedView;
  }(React__default.Component);

  AnimatedView.contextTypes = {
    pager: _propTypes2.default.instanceOf(_Pager2.default),
    view: _propTypes2.default.any
  };
  AnimatedView.propTypes = checkedProps;
  AnimatedView.defaultProps = {
    tag: 'div',
    animations: []
  };
  exports.default = AnimatedView;
  module.exports = exports['default'];
  });

  unwrapExports(AnimatedView_1);

  var reactViewPager = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.utils = exports.AnimatedView = exports.View = exports.Track = exports.Frame = exports.ViewPager = undefined;



  var _ViewPager3 = _interopRequireDefault(ViewPager_1);



  var _Frame3 = _interopRequireDefault(Frame_1);



  var _Track3 = _interopRequireDefault(Track_1);



  var _View3 = _interopRequireDefault(View_1);



  var _AnimatedView3 = _interopRequireDefault(AnimatedView_1);



  var _utils3 = _interopRequireDefault(utils);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.ViewPager = _ViewPager3.default;
  exports.Frame = _Frame3.default;
  exports.Track = _Track3.default;
  exports.View = _View3.default;
  exports.AnimatedView = _AnimatedView3.default;
  exports.utils = _utils3.default;
  });

  unwrapExports(reactViewPager);
  var reactViewPager_1 = reactViewPager.utils;
  var reactViewPager_2 = reactViewPager.AnimatedView;
  var reactViewPager_3 = reactViewPager.View;
  var reactViewPager_4 = reactViewPager.Track;
  var reactViewPager_5 = reactViewPager.Frame;
  var reactViewPager_6 = reactViewPager.ViewPager;

  var lib$2 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var key = {
    fullscreenEnabled: 0,
    fullscreenElement: 1,
    requestFullscreen: 2,
    exitFullscreen: 3,
    fullscreenchange: 4,
    fullscreenerror: 5
  };

  var webkit = ['webkitFullscreenEnabled', 'webkitFullscreenElement', 'webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitfullscreenchange', 'webkitfullscreenerror'];

  var moz = ['mozFullScreenEnabled', 'mozFullScreenElement', 'mozRequestFullScreen', 'mozCancelFullScreen', 'mozfullscreenchange', 'mozfullscreenerror'];

  var ms = ['msFullscreenEnabled', 'msFullscreenElement', 'msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'MSFullscreenError'];

  // so it doesn't throw if no window or document
  var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};

  var vendor = 'fullscreenEnabled' in document && Object.keys(key) || webkit[0] in document && webkit || moz[0] in document && moz || ms[0] in document && ms || [];

  exports.default = {
    requestFullscreen: function requestFullscreen(element) {
      return element[vendor[key.requestFullscreen]]();
    },
    requestFullscreenFunction: function requestFullscreenFunction(element) {
      return element[vendor[key.requestFullscreen]];
    },
    get exitFullscreen() {
      return document[vendor[key.exitFullscreen]].bind(document);
    },
    addEventListener: function addEventListener(type, handler, options) {
      return document.addEventListener(vendor[key[type]], handler, options);
    },
    removeEventListener: function removeEventListener(type, handler, options) {
      return document.removeEventListener(vendor[key[type]], handler, options);
    },
    get fullscreenEnabled() {
      return Boolean(document[vendor[key.fullscreenEnabled]]);
    },
    set fullscreenEnabled(val) {},
    get fullscreenElement() {
      return document[vendor[key.fullscreenElement]];
    },
    set fullscreenElement(val) {},
    get onfullscreenchange() {
      return document[('on' + vendor[key.fullscreenchange]).toLowerCase()];
    },
    set onfullscreenchange(handler) {
      return document[('on' + vendor[key.fullscreenchange]).toLowerCase()] = handler;
    },
    get onfullscreenerror() {
      return document[('on' + vendor[key.fullscreenerror]).toLowerCase()];
    },
    set onfullscreenerror(handler) {
      return document[('on' + vendor[key.fullscreenerror]).toLowerCase()] = handler;
    }
  };
  });

  unwrapExports(lib$2);

  var dist = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);



  var _fscreen2 = _interopRequireDefault(lib$2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FullScreen = function (_Component) {
    _inherits(FullScreen, _Component);

    function FullScreen(props) {
      _classCallCheck(this, FullScreen);

      var _this = _possibleConstructorReturn(this, (FullScreen.__proto__ || Object.getPrototypeOf(FullScreen)).call(this, props));

      _this.detectFullScreen = _this.detectFullScreen.bind(_this);
      return _this;
    }

    _createClass(FullScreen, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        _fscreen2.default.addEventListener("fullscreenchange", this.detectFullScreen);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _fscreen2.default.removeEventListener("fullscreenchange", this.detectFullScreen);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.handleProps(this.props);
      }
    }, {
      key: "handleProps",
      value: function handleProps(props) {
        var enabled = _fscreen2.default.fullscreenElement === this.node;
        if (enabled && !props.enabled) {
          this.leaveFullScreen();
        } else if (!enabled && props.enabled) {
          this.enterFullScreen();
        }
      }
    }, {
      key: "detectFullScreen",
      value: function detectFullScreen() {
        if (this.props.onChange) {
          this.props.onChange(_fscreen2.default.fullscreenElement === this.node);
        }
      }
    }, {
      key: "enterFullScreen",
      value: function enterFullScreen() {
        if (_fscreen2.default.fullscreenEnabled) {
          _fscreen2.default.requestFullscreen(this.node);
        }
      }
    }, {
      key: "leaveFullScreen",
      value: function leaveFullScreen() {
        if (_fscreen2.default.fullscreenEnabled) {
          _fscreen2.default.exitFullscreen();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var className = ["fullscreen"];
        if (this.props.enabled) {
          className.push("fullscreen-enabled");
        }

        return _react2.default.createElement(
          "div",
          {
            className: className.join(" "),
            ref: function ref(node) {
              return _this2.node = node;
            },
            style: this.props.enabled ? { height: "100%", width: "100%" } : undefined
          },
          this.props.children
        );
      }
    }]);

    return FullScreen;
  }(React__default.Component);

  FullScreen.propTypes = {
    children: _propTypes2.default.node.isRequired,
    enabled: _propTypes2.default.bool.isRequired,
    onChange: _propTypes2.default.func
  };
  FullScreen.defaultProps = {
    enabled: false
  };
  exports.default = FullScreen;
  });

  var Fullscreen = unwrapExports(dist);

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  var emptyObject = {};

  {
    Object.freeze(emptyObject);
  }

  var emptyObject_1 = emptyObject;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var validateFormat = function validateFormat(format) {};

  {
    validateFormat = function validateFormat(format) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    };
  }

  function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  }

  var invariant_1 = invariant;

  {
    var warning$1 = warning_1;
  }

  var MIXINS_KEY = 'mixins';

  // Helper function to allow the creation of anonymous functions which do not
  // have .name set to the name of the variable being assigned to.
  function identity(fn) {
    return fn;
  }

  var ReactPropTypeLocationNames;
  {
    ReactPropTypeLocationNames = {
      prop: 'prop',
      context: 'context',
      childContext: 'child context'
    };
  }

  function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
    /**
     * Policies that describe methods in `ReactClassInterface`.
     */

    var injectedMixins = [];

    /**
     * Composite components are higher-level components that compose other composite
     * or host components.
     *
     * To create a new type of `ReactClass`, pass a specification of
     * your new class to `React.createClass`. The only requirement of your class
     * specification is that you implement a `render` method.
     *
     *   var MyComponent = React.createClass({
     *     render: function() {
     *       return <div>Hello World</div>;
     *     }
     *   });
     *
     * The class specification supports a specific protocol of methods that have
     * special meaning (e.g. `render`). See `ReactClassInterface` for
     * more the comprehensive protocol. Any other properties and methods in the
     * class specification will be available on the prototype.
     *
     * @interface ReactClassInterface
     * @internal
     */
    var ReactClassInterface = {
      /**
       * An array of Mixin objects to include when defining your component.
       *
       * @type {array}
       * @optional
       */
      mixins: 'DEFINE_MANY',

      /**
       * An object containing properties and methods that should be defined on
       * the component's constructor instead of its prototype (static methods).
       *
       * @type {object}
       * @optional
       */
      statics: 'DEFINE_MANY',

      /**
       * Definition of prop types for this component.
       *
       * @type {object}
       * @optional
       */
      propTypes: 'DEFINE_MANY',

      /**
       * Definition of context types for this component.
       *
       * @type {object}
       * @optional
       */
      contextTypes: 'DEFINE_MANY',

      /**
       * Definition of context types this component sets for its children.
       *
       * @type {object}
       * @optional
       */
      childContextTypes: 'DEFINE_MANY',

      // ==== Definition methods ====

      /**
       * Invoked when the component is mounted. Values in the mapping will be set on
       * `this.props` if that prop is not specified (i.e. using an `in` check).
       *
       * This method is invoked before `getInitialState` and therefore cannot rely
       * on `this.state` or use `this.setState`.
       *
       * @return {object}
       * @optional
       */
      getDefaultProps: 'DEFINE_MANY_MERGED',

      /**
       * Invoked once before the component is mounted. The return value will be used
       * as the initial value of `this.state`.
       *
       *   getInitialState: function() {
       *     return {
       *       isOn: false,
       *       fooBaz: new BazFoo()
       *     }
       *   }
       *
       * @return {object}
       * @optional
       */
      getInitialState: 'DEFINE_MANY_MERGED',

      /**
       * @return {object}
       * @optional
       */
      getChildContext: 'DEFINE_MANY_MERGED',

      /**
       * Uses props from `this.props` and state from `this.state` to render the
       * structure of the component.
       *
       * No guarantees are made about when or how often this method is invoked, so
       * it must not have side effects.
       *
       *   render: function() {
       *     var name = this.props.name;
       *     return <div>Hello, {name}!</div>;
       *   }
       *
       * @return {ReactComponent}
       * @required
       */
      render: 'DEFINE_ONCE',

      // ==== Delegate methods ====

      /**
       * Invoked when the component is initially created and about to be mounted.
       * This may have side effects, but any external subscriptions or data created
       * by this method must be cleaned up in `componentWillUnmount`.
       *
       * @optional
       */
      componentWillMount: 'DEFINE_MANY',

      /**
       * Invoked when the component has been mounted and has a DOM representation.
       * However, there is no guarantee that the DOM node is in the document.
       *
       * Use this as an opportunity to operate on the DOM when the component has
       * been mounted (initialized and rendered) for the first time.
       *
       * @param {DOMElement} rootNode DOM element representing the component.
       * @optional
       */
      componentDidMount: 'DEFINE_MANY',

      /**
       * Invoked before the component receives new props.
       *
       * Use this as an opportunity to react to a prop transition by updating the
       * state using `this.setState`. Current props are accessed via `this.props`.
       *
       *   componentWillReceiveProps: function(nextProps, nextContext) {
       *     this.setState({
       *       likesIncreasing: nextProps.likeCount > this.props.likeCount
       *     });
       *   }
       *
       * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
       * transition may cause a state change, but the opposite is not true. If you
       * need it, you are probably looking for `componentWillUpdate`.
       *
       * @param {object} nextProps
       * @optional
       */
      componentWillReceiveProps: 'DEFINE_MANY',

      /**
       * Invoked while deciding if the component should be updated as a result of
       * receiving new props, state and/or context.
       *
       * Use this as an opportunity to `return false` when you're certain that the
       * transition to the new props/state/context will not require a component
       * update.
       *
       *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
       *     return !equal(nextProps, this.props) ||
       *       !equal(nextState, this.state) ||
       *       !equal(nextContext, this.context);
       *   }
       *
       * @param {object} nextProps
       * @param {?object} nextState
       * @param {?object} nextContext
       * @return {boolean} True if the component should update.
       * @optional
       */
      shouldComponentUpdate: 'DEFINE_ONCE',

      /**
       * Invoked when the component is about to update due to a transition from
       * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
       * and `nextContext`.
       *
       * Use this as an opportunity to perform preparation before an update occurs.
       *
       * NOTE: You **cannot** use `this.setState()` in this method.
       *
       * @param {object} nextProps
       * @param {?object} nextState
       * @param {?object} nextContext
       * @param {ReactReconcileTransaction} transaction
       * @optional
       */
      componentWillUpdate: 'DEFINE_MANY',

      /**
       * Invoked when the component's DOM representation has been updated.
       *
       * Use this as an opportunity to operate on the DOM when the component has
       * been updated.
       *
       * @param {object} prevProps
       * @param {?object} prevState
       * @param {?object} prevContext
       * @param {DOMElement} rootNode DOM element representing the component.
       * @optional
       */
      componentDidUpdate: 'DEFINE_MANY',

      /**
       * Invoked when the component is about to be removed from its parent and have
       * its DOM representation destroyed.
       *
       * Use this as an opportunity to deallocate any external resources.
       *
       * NOTE: There is no `componentDidUnmount` since your component will have been
       * destroyed by that point.
       *
       * @optional
       */
      componentWillUnmount: 'DEFINE_MANY',

      /**
       * Replacement for (deprecated) `componentWillMount`.
       *
       * @optional
       */
      UNSAFE_componentWillMount: 'DEFINE_MANY',

      /**
       * Replacement for (deprecated) `componentWillReceiveProps`.
       *
       * @optional
       */
      UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

      /**
       * Replacement for (deprecated) `componentWillUpdate`.
       *
       * @optional
       */
      UNSAFE_componentWillUpdate: 'DEFINE_MANY',

      // ==== Advanced methods ====

      /**
       * Updates the component's currently mounted DOM representation.
       *
       * By default, this implements React's rendering and reconciliation algorithm.
       * Sophisticated clients may wish to override this.
       *
       * @param {ReactReconcileTransaction} transaction
       * @internal
       * @overridable
       */
      updateComponent: 'OVERRIDE_BASE'
    };

    /**
     * Similar to ReactClassInterface but for static methods.
     */
    var ReactClassStaticInterface = {
      /**
       * This method is invoked after a component is instantiated and when it
       * receives new props. Return an object to update state in response to
       * prop changes. Return null to indicate no change to state.
       *
       * If an object is returned, its keys will be merged into the existing state.
       *
       * @return {object || null}
       * @optional
       */
      getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
    };

    /**
     * Mapping from class specification keys to special processing functions.
     *
     * Although these are declared like instance properties in the specification
     * when defining classes using `React.createClass`, they are actually static
     * and are accessible on the constructor instead of the prototype. Despite
     * being static, they must be defined outside of the "statics" key under
     * which all other static methods are defined.
     */
    var RESERVED_SPEC_KEYS = {
      displayName: function(Constructor, displayName) {
        Constructor.displayName = displayName;
      },
      mixins: function(Constructor, mixins) {
        if (mixins) {
          for (var i = 0; i < mixins.length; i++) {
            mixSpecIntoComponent(Constructor, mixins[i]);
          }
        }
      },
      childContextTypes: function(Constructor, childContextTypes) {
        {
          validateTypeDef(Constructor, childContextTypes, 'childContext');
        }
        Constructor.childContextTypes = objectAssign(
          {},
          Constructor.childContextTypes,
          childContextTypes
        );
      },
      contextTypes: function(Constructor, contextTypes) {
        {
          validateTypeDef(Constructor, contextTypes, 'context');
        }
        Constructor.contextTypes = objectAssign(
          {},
          Constructor.contextTypes,
          contextTypes
        );
      },
      /**
       * Special case getDefaultProps which should move into statics but requires
       * automatic merging.
       */
      getDefaultProps: function(Constructor, getDefaultProps) {
        if (Constructor.getDefaultProps) {
          Constructor.getDefaultProps = createMergedResultFunction(
            Constructor.getDefaultProps,
            getDefaultProps
          );
        } else {
          Constructor.getDefaultProps = getDefaultProps;
        }
      },
      propTypes: function(Constructor, propTypes) {
        {
          validateTypeDef(Constructor, propTypes, 'prop');
        }
        Constructor.propTypes = objectAssign({}, Constructor.propTypes, propTypes);
      },
      statics: function(Constructor, statics) {
        mixStaticSpecIntoComponent(Constructor, statics);
      },
      autobind: function() {}
    };

    function validateTypeDef(Constructor, typeDef, location) {
      for (var propName in typeDef) {
        if (typeDef.hasOwnProperty(propName)) {
          // use a warning instead of an _invariant so components
          // don't show up in prod but only in __DEV__
          {
            warning$1(
              typeof typeDef[propName] === 'function',
              '%s: %s type `%s` is invalid; it must be a function, usually from ' +
                'React.PropTypes.',
              Constructor.displayName || 'ReactClass',
              ReactPropTypeLocationNames[location],
              propName
            );
          }
        }
      }
    }

    function validateMethodOverride(isAlreadyDefined, name) {
      var specPolicy = ReactClassInterface.hasOwnProperty(name)
        ? ReactClassInterface[name]
        : null;

      // Disallow overriding of base class methods unless explicitly allowed.
      if (ReactClassMixin.hasOwnProperty(name)) {
        invariant_1(
          specPolicy === 'OVERRIDE_BASE',
          'ReactClassInterface: You are attempting to override ' +
            '`%s` from your class specification. Ensure that your method names ' +
            'do not overlap with React methods.',
          name
        );
      }

      // Disallow defining methods more than once unless explicitly allowed.
      if (isAlreadyDefined) {
        invariant_1(
          specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClassInterface: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be due ' +
            'to a mixin.',
          name
        );
      }
    }

    /**
     * Mixin helper which handles policy validation and reserved
     * specification keys when building React classes.
     */
    function mixSpecIntoComponent(Constructor, spec) {
      if (!spec) {
        {
          var typeofSpec = typeof spec;
          var isMixinValid = typeofSpec === 'object' && spec !== null;

          {
            warning$1(
              isMixinValid,
              "%s: You're attempting to include a mixin that is either null " +
                'or not an object. Check the mixins included by the component, ' +
                'as well as any mixins they include themselves. ' +
                'Expected object but got %s.',
              Constructor.displayName || 'ReactClass',
              spec === null ? null : typeofSpec
            );
          }
        }

        return;
      }

      invariant_1(
        typeof spec !== 'function',
        "ReactClass: You're attempting to " +
          'use a component class or function as a mixin. Instead, just use a ' +
          'regular object.'
      );
      invariant_1(
        !isValidElement(spec),
        "ReactClass: You're attempting to " +
          'use a component as a mixin. Instead, just use a regular object.'
      );

      var proto = Constructor.prototype;
      var autoBindPairs = proto.__reactAutoBindPairs;

      // By handling mixins before any other properties, we ensure the same
      // chaining order is applied to methods with DEFINE_MANY policy, whether
      // mixins are listed before or after these methods in the spec.
      if (spec.hasOwnProperty(MIXINS_KEY)) {
        RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
      }

      for (var name in spec) {
        if (!spec.hasOwnProperty(name)) {
          continue;
        }

        if (name === MIXINS_KEY) {
          // We have already handled mixins in a special case above.
          continue;
        }

        var property = spec[name];
        var isAlreadyDefined = proto.hasOwnProperty(name);
        validateMethodOverride(isAlreadyDefined, name);

        if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
          RESERVED_SPEC_KEYS[name](Constructor, property);
        } else {
          // Setup methods on prototype:
          // The following member methods should not be automatically bound:
          // 1. Expected ReactClass methods (in the "interface").
          // 2. Overridden methods (that were mixed in).
          var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
          var isFunction = typeof property === 'function';
          var shouldAutoBind =
            isFunction &&
            !isReactClassMethod &&
            !isAlreadyDefined &&
            spec.autobind !== false;

          if (shouldAutoBind) {
            autoBindPairs.push(name, property);
            proto[name] = property;
          } else {
            if (isAlreadyDefined) {
              var specPolicy = ReactClassInterface[name];

              // These cases should already be caught by validateMethodOverride.
              invariant_1(
                isReactClassMethod &&
                  (specPolicy === 'DEFINE_MANY_MERGED' ||
                    specPolicy === 'DEFINE_MANY'),
                'ReactClass: Unexpected spec policy %s for key %s ' +
                  'when mixing in component specs.',
                specPolicy,
                name
              );

              // For methods which are defined more than once, call the existing
              // methods before calling the new property, merging if appropriate.
              if (specPolicy === 'DEFINE_MANY_MERGED') {
                proto[name] = createMergedResultFunction(proto[name], property);
              } else if (specPolicy === 'DEFINE_MANY') {
                proto[name] = createChainedFunction(proto[name], property);
              }
            } else {
              proto[name] = property;
              {
                // Add verbose displayName to the function, which helps when looking
                // at profiling tools.
                if (typeof property === 'function' && spec.displayName) {
                  proto[name].displayName = spec.displayName + '_' + name;
                }
              }
            }
          }
        }
      }
    }

    function mixStaticSpecIntoComponent(Constructor, statics) {
      if (!statics) {
        return;
      }

      for (var name in statics) {
        var property = statics[name];
        if (!statics.hasOwnProperty(name)) {
          continue;
        }

        var isReserved = name in RESERVED_SPEC_KEYS;
        invariant_1(
          !isReserved,
          'ReactClass: You are attempting to define a reserved ' +
            'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
            'as an instance property instead; it will still be accessible on the ' +
            'constructor.',
          name
        );

        var isAlreadyDefined = name in Constructor;
        if (isAlreadyDefined) {
          var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
            ? ReactClassStaticInterface[name]
            : null;

          invariant_1(
            specPolicy === 'DEFINE_MANY_MERGED',
            'ReactClass: You are attempting to define ' +
              '`%s` on your component more than once. This conflict may be ' +
              'due to a mixin.',
            name
          );

          Constructor[name] = createMergedResultFunction(Constructor[name], property);

          return;
        }

        Constructor[name] = property;
      }
    }

    /**
     * Merge two objects, but throw if both contain the same key.
     *
     * @param {object} one The first object, which is mutated.
     * @param {object} two The second object
     * @return {object} one after it has been mutated to contain everything in two.
     */
    function mergeIntoWithNoDuplicateKeys(one, two) {
      invariant_1(
        one && two && typeof one === 'object' && typeof two === 'object',
        'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
      );

      for (var key in two) {
        if (two.hasOwnProperty(key)) {
          invariant_1(
            one[key] === undefined,
            'mergeIntoWithNoDuplicateKeys(): ' +
              'Tried to merge two objects with the same key: `%s`. This conflict ' +
              'may be due to a mixin; in particular, this may be caused by two ' +
              'getInitialState() or getDefaultProps() methods returning objects ' +
              'with clashing keys.',
            key
          );
          one[key] = two[key];
        }
      }
      return one;
    }

    /**
     * Creates a function that invokes two functions and merges their return values.
     *
     * @param {function} one Function to invoke first.
     * @param {function} two Function to invoke second.
     * @return {function} Function that invokes the two argument functions.
     * @private
     */
    function createMergedResultFunction(one, two) {
      return function mergedResult() {
        var a = one.apply(this, arguments);
        var b = two.apply(this, arguments);
        if (a == null) {
          return b;
        } else if (b == null) {
          return a;
        }
        var c = {};
        mergeIntoWithNoDuplicateKeys(c, a);
        mergeIntoWithNoDuplicateKeys(c, b);
        return c;
      };
    }

    /**
     * Creates a function that invokes two functions and ignores their return vales.
     *
     * @param {function} one Function to invoke first.
     * @param {function} two Function to invoke second.
     * @return {function} Function that invokes the two argument functions.
     * @private
     */
    function createChainedFunction(one, two) {
      return function chainedFunction() {
        one.apply(this, arguments);
        two.apply(this, arguments);
      };
    }

    /**
     * Binds a method to the component.
     *
     * @param {object} component Component whose method is going to be bound.
     * @param {function} method Method to be bound.
     * @return {function} The bound method.
     */
    function bindAutoBindMethod(component, method) {
      var boundMethod = method.bind(component);
      {
        boundMethod.__reactBoundContext = component;
        boundMethod.__reactBoundMethod = method;
        boundMethod.__reactBoundArguments = null;
        var componentName = component.constructor.displayName;
        var _bind = boundMethod.bind;
        boundMethod.bind = function(newThis) {
          for (
            var _len = arguments.length,
              args = Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            args[_key - 1] = arguments[_key];
          }

          // User is trying to bind() an autobound method; we effectively will
          // ignore the value of "this" that the user is trying to use, so
          // let's warn.
          if (newThis !== component && newThis !== null) {
            {
              warning$1(
                false,
                'bind(): React component methods may only be bound to the ' +
                  'component instance. See %s',
                componentName
              );
            }
          } else if (!args.length) {
            {
              warning$1(
                false,
                'bind(): You are binding a component method to the component. ' +
                  'React does this for you automatically in a high-performance ' +
                  'way, so you can safely remove this call. See %s',
                componentName
              );
            }
            return boundMethod;
          }
          var reboundMethod = _bind.apply(boundMethod, arguments);
          reboundMethod.__reactBoundContext = component;
          reboundMethod.__reactBoundMethod = method;
          reboundMethod.__reactBoundArguments = args;
          return reboundMethod;
        };
      }
      return boundMethod;
    }

    /**
     * Binds all auto-bound methods in a component.
     *
     * @param {object} component Component whose method is going to be bound.
     */
    function bindAutoBindMethods(component) {
      var pairs = component.__reactAutoBindPairs;
      for (var i = 0; i < pairs.length; i += 2) {
        var autoBindKey = pairs[i];
        var method = pairs[i + 1];
        component[autoBindKey] = bindAutoBindMethod(component, method);
      }
    }

    var IsMountedPreMixin = {
      componentDidMount: function() {
        this.__isMounted = true;
      }
    };

    var IsMountedPostMixin = {
      componentWillUnmount: function() {
        this.__isMounted = false;
      }
    };

    /**
     * Add more to the ReactClass base class. These are all legacy features and
     * therefore not already part of the modern ReactComponent.
     */
    var ReactClassMixin = {
      /**
       * TODO: This will be deprecated because state should always keep a consistent
       * type signature and the only use case for this, is to avoid that.
       */
      replaceState: function(newState, callback) {
        this.updater.enqueueReplaceState(this, newState, callback);
      },

      /**
       * Checks whether or not this composite component is mounted.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function() {
        {
          warning$1(
            this.__didWarnIsMounted,
            '%s: isMounted is deprecated. Instead, make sure to clean up ' +
              'subscriptions and pending requests in componentWillUnmount to ' +
              'prevent memory leaks.',
            (this.constructor && this.constructor.displayName) ||
              this.name ||
              'Component'
          );
          this.__didWarnIsMounted = true;
        }
        return !!this.__isMounted;
      }
    };

    var ReactClassComponent = function() {};
    objectAssign(
      ReactClassComponent.prototype,
      ReactComponent.prototype,
      ReactClassMixin
    );

    /**
     * Creates a composite component class given a class specification.
     * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
     *
     * @param {object} spec Class specification (which must define `render`).
     * @return {function} Component constructor function.
     * @public
     */
    function createClass(spec) {
      // To keep our warnings more understandable, we'll use a little hack here to
      // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
      // unnecessarily identify a class without displayName as 'Constructor'.
      var Constructor = identity(function(props, context, updater) {
        // This constructor gets overridden by mocks. The argument is used
        // by mocks to assert on what gets mounted.

        {
          warning$1(
            this instanceof Constructor,
            'Something is calling a React component directly. Use a factory or ' +
              'JSX instead. See: https://fb.me/react-legacyfactory'
          );
        }

        // Wire up auto-binding
        if (this.__reactAutoBindPairs.length) {
          bindAutoBindMethods(this);
        }

        this.props = props;
        this.context = context;
        this.refs = emptyObject_1;
        this.updater = updater || ReactNoopUpdateQueue;

        this.state = null;

        // ReactClasses doesn't have constructors. Instead, they use the
        // getInitialState and componentWillMount methods for initialization.

        var initialState = this.getInitialState ? this.getInitialState() : null;
        {
          // We allow auto-mocks to proceed as if they're returning null.
          if (
            initialState === undefined &&
            this.getInitialState._isMockFunction
          ) {
            // This is probably bad practice. Consider warning here and
            // deprecating this convenience.
            initialState = null;
          }
        }
        invariant_1(
          typeof initialState === 'object' && !Array.isArray(initialState),
          '%s.getInitialState(): must return an object or null',
          Constructor.displayName || 'ReactCompositeComponent'
        );

        this.state = initialState;
      });
      Constructor.prototype = new ReactClassComponent();
      Constructor.prototype.constructor = Constructor;
      Constructor.prototype.__reactAutoBindPairs = [];

      injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

      mixSpecIntoComponent(Constructor, IsMountedPreMixin);
      mixSpecIntoComponent(Constructor, spec);
      mixSpecIntoComponent(Constructor, IsMountedPostMixin);

      // Initialize the defaultProps property after all mixins have been merged.
      if (Constructor.getDefaultProps) {
        Constructor.defaultProps = Constructor.getDefaultProps();
      }

      {
        // This is a tag to indicate that the use of these method names is ok,
        // since it's used with createClass. If it's not, then it's likely a
        // mistake so we'll warn you to use the static property, property
        // initializer or constructor respectively.
        if (Constructor.getDefaultProps) {
          Constructor.getDefaultProps.isReactClassApproved = {};
        }
        if (Constructor.prototype.getInitialState) {
          Constructor.prototype.getInitialState.isReactClassApproved = {};
        }
      }

      invariant_1(
        Constructor.prototype.render,
        'createClass(...): Class specification must implement a `render` method.'
      );

      {
        warning$1(
          !Constructor.prototype.componentShouldUpdate,
          '%s has a method called ' +
            'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
            'The name is phrased as a question because the function is ' +
            'expected to return a value.',
          spec.displayName || 'A component'
        );
        warning$1(
          !Constructor.prototype.componentWillRecieveProps,
          '%s has a method called ' +
            'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
          spec.displayName || 'A component'
        );
        warning$1(
          !Constructor.prototype.UNSAFE_componentWillRecieveProps,
          '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
            'Did you mean UNSAFE_componentWillReceiveProps()?',
          spec.displayName || 'A component'
        );
      }

      // Reduce time spent doing lookups by setting these on the prototype.
      for (var methodName in ReactClassInterface) {
        if (!Constructor.prototype[methodName]) {
          Constructor.prototype[methodName] = null;
        }
      }

      return Constructor;
    }

    return createClass;
  }

  var factory_1 = factory;

  if (typeof React__default === 'undefined') {
    throw Error(
      'create-react-class could not find the React object. If you are using script tags, ' +
        'make sure that React is being loaded before create-react-class.'
    );
  }

  // Hack to grab NoopUpdateQueue from isomorphic React
  var ReactNoopUpdateQueue = new React__default.Component().updater;

  var createReactClass = factory_1(
    React__default.Component,
    React__default.isValidElement,
    ReactNoopUpdateQueue
  );

  /*
  	NOTES

  	1. Stop content jumping around when overflow is hidden on the body.
  	2. Mobile Safari ignores { overflow: hidden } declaration on the body.
  	3. Allow scroll on provided target.
  */

  var listenerOptions = { capture: false, passive: false };
  var ScrollLock = createReactClass({
  	propTypes: {
  		scrollTarget: PropTypes$1.object,
  		preventContentJumping: PropTypes$1.bool
  	},
  	componentDidMount: function () {
  		if (!canUseDom()) return;

  		var scrollTarget = this.props.scrollTarget;
  		var target = document.body;

  		if (this.props.preventContentJumping) {
  			var scrollbarWidth = window.innerWidth - document.body.clientWidth; // 1.

  			target.style.paddingRight = scrollbarWidth + 'px';
  		}
  		target.style.overflowY = 'hidden';

  		target.addEventListener('touchmove', preventTouchMove, listenerOptions); // 2.

  		if (scrollTarget) {
  			scrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions); // 3.
  			scrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions); // 3.
  		}
  	},
  	componentWillUnmount: function () {
  		if (!canUseDom()) return;

  		var scrollTarget = this.props.scrollTarget;
  		var target = document.body;

  		if (this.props.preventContentJumping) {
  			target.style.paddingRight = '';
  		}
  		target.style.overflowY = '';

  		target.removeEventListener('touchmove', preventTouchMove, listenerOptions);

  		if (scrollTarget) {
  			scrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
  			scrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
  		}
  	},
  	render: function () {
  		return null;
  	}
  });

  ScrollLock.defaultProps = {
   preventContentJumping: true
  };

  function preventTouchMove (e) {
  	e.preventDefault();
  }
  function allowTouchMove (e) {
  	e.stopPropagation();
  }
  function preventInertiaScroll () {
  	var top = this.scrollTop;
  	var totalScroll = this.scrollHeight;
  	var currentScroll = top + this.offsetHeight;

  	if (top === 0) {
  		this.scrollTop = 1;
  	} else if (currentScroll === totalScroll) {
  		this.scrollTop = top - 1;
  	}
  }

  function canUseDom () {
  	return !!(
  		typeof window !== 'undefined'
  		&& window.document
  		&& window.document.createElement
  	);
  }
  var ScrollLock_1 = ScrollLock;

  var reactScrolllock = ScrollLock_1;

  var storedFocusElement;

  var storeFocus = function() {
    storedFocusElement = document.activeElement;
  };

  var clearStoredFocus = function() {
    storedFocusElement = null;
  };

  var restoreFocus = function() {
    if (!storedFocusElement) return;
    try { storedFocusElement.focus(); } catch (err) {}
    storedFocusElement = null;
  };

  var a11yFocusStore = {
  	storeFocus: storeFocus,
  	clearStoredFocus: clearStoredFocus,
  	restoreFocus: restoreFocus
  };

  var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault;
  });

  unwrapExports(interopRequireDefault);

  var hasClass_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = hasClass;

  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }

  module.exports = exports["default"];
  });

  unwrapExports(hasClass_1);

  var addClass_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = addClass;

  var _hasClass = interopRequireDefault(hasClass_1);

  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
  }

  module.exports = exports["default"];
  });

  unwrapExports(addClass_1);

  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }

  var removeClass = function removeClass(element, className) {
    if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) {
      this.setState(state);
    }
  }

  function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
      var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
      return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
  }

  function componentWillUpdate(nextProps, nextState) {
    try {
      var prevProps = this.props;
      var prevState = this.state;
      this.props = nextProps;
      this.state = nextState;
      this.__reactInternalSnapshotFlag = true;
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
        prevProps,
        prevState
      );
    } finally {
      this.props = prevProps;
      this.state = prevState;
    }
  }

  // React may warn about cWM/cWRP/cWU methods being deprecated.
  // Add a flag to suppress these warnings for this special case.
  componentWillMount.__suppressDeprecationWarning = true;
  componentWillReceiveProps.__suppressDeprecationWarning = true;
  componentWillUpdate.__suppressDeprecationWarning = true;

  function polyfill$1(Component) {
    var prototype = Component.prototype;

    if (!prototype || !prototype.isReactComponent) {
      throw new Error('Can only polyfill class components');
    }

    if (
      typeof Component.getDerivedStateFromProps !== 'function' &&
      typeof prototype.getSnapshotBeforeUpdate !== 'function'
    ) {
      return Component;
    }

    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === 'function') {
      foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
      foundWillMountName = 'UNSAFE_componentWillMount';
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }
    if (typeof prototype.componentWillUpdate === 'function') {
      foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
      foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }
    if (
      foundWillMountName !== null ||
      foundWillReceivePropsName !== null ||
      foundWillUpdateName !== null
    ) {
      var componentName = Component.displayName || Component.name;
      var newApiName =
        typeof Component.getDerivedStateFromProps === 'function'
          ? 'getDerivedStateFromProps()'
          : 'getSnapshotBeforeUpdate()';

      throw Error(
        'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
          componentName +
          ' uses ' +
          newApiName +
          ' but also contains the following legacy lifecycles:' +
          (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
          (foundWillReceivePropsName !== null
            ? '\n  ' + foundWillReceivePropsName
            : '') +
          (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
          '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
          'https://fb.me/react-async-component-lifecycle-hooks'
      );
    }

    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === 'function') {
      prototype.componentWillMount = componentWillMount;
      prototype.componentWillReceiveProps = componentWillReceiveProps;
    }

    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
      if (typeof prototype.componentDidUpdate !== 'function') {
        throw new Error(
          'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
        );
      }

      prototype.componentWillUpdate = componentWillUpdate;

      var componentDidUpdate = prototype.componentDidUpdate;

      prototype.componentDidUpdate = function componentDidUpdatePolyfill(
        prevProps,
        prevState,
        maybeSnapshot
      ) {
        // 16.3+ will not execute our will-update method;
        // It will pass a snapshot value to did-update though.
        // Older versions will require our polyfilled will-update value.
        // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
        // Because for <= 15.x versions this might be a "prevContext" object.
        // We also can't just check "__reactInternalSnapshot",
        // Because get-snapshot might return a falsy value.
        // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
        var snapshot = this.__reactInternalSnapshotFlag
          ? this.__reactInternalSnapshot
          : maybeSnapshot;

        componentDidUpdate.call(this, prevProps, prevState, snapshot);
      };
    }

    return Component;
  }

  var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    polyfill: polyfill$1
  });

  var PropTypes = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.classNamesShape = exports.timeoutsShape = void 0;

  var _propTypes = _interopRequireDefault(PropTypes$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var timeoutsShape =  _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number,
    appear: _propTypes.default.number
  }).isRequired]) ;
  exports.timeoutsShape = timeoutsShape;
  var classNamesShape =  _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
    enter: _propTypes.default.string,
    exit: _propTypes.default.string,
    active: _propTypes.default.string
  }), _propTypes.default.shape({
    enter: _propTypes.default.string,
    enterDone: _propTypes.default.string,
    enterActive: _propTypes.default.string,
    exit: _propTypes.default.string,
    exitDone: _propTypes.default.string,
    exitActive: _propTypes.default.string
  })]) ;
  exports.classNamesShape = classNamesShape;
  });

  unwrapExports(PropTypes);
  var PropTypes_1 = PropTypes.classNamesShape;
  var PropTypes_2 = PropTypes.timeoutsShape;

  var Transition_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

  var PropTypes$2 = _interopRequireWildcard(PropTypes$1);

  var _react = _interopRequireDefault(React__default);

  var _reactDom = _interopRequireDefault(reactDom__default);





  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var UNMOUNTED = 'unmounted';
  exports.UNMOUNTED = UNMOUNTED;
  var EXITED = 'exited';
  exports.EXITED = EXITED;
  var ENTERING = 'entering';
  exports.ENTERING = ENTERING;
  var ENTERED = 'entered';
  exports.ENTERED = ENTERED;
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 0 },
   *   entered:  { opacity: 1 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  exports.EXITING = EXITING;

  var Transition =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    var _proto = Transition.prototype;

    _proto.getChildContext = function getChildContext() {
      return {
        transitionGroup: null // allows for nested Transitions

      };
    };

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }

      return null;
    }; // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }


    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();

        var node = _reactDom.default.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    _proto.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(node, appearing);

        _this2.onTransitionEnd(node, enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    _proto.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

      if (!exit) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
        return;
      }

      this.props.onExit(node);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }

      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children,
          childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        return children(status, childProps);
      }

      var child = _react.default.Children.only(children);

      return _react.default.cloneElement(child, childProps);
    };

    return Transition;
  }(_react.default.Component);

  Transition.contextTypes = {
    transitionGroup: PropTypes$2.object
  };
  Transition.childContextTypes = {
    transitionGroup: function transitionGroup() {}
  };
  Transition.propTypes =  {
    /**
     * A `function` child can be used instead of a React element. This function is
     * called with the current transition status (`'entering'`, `'entered'`,
     * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
     * specific props to a component.
     *
     * ```jsx
     * <Transition in={this.state.in} timeout={150}>
     *   {state => (
     *     <MyComponent className={`fade fade-${state}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: PropTypes$2.oneOfType([PropTypes$2.func.isRequired, PropTypes$2.element.isRequired]).isRequired,

    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes$2.bool,

    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: PropTypes$2.bool,

    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: PropTypes$2.bool,

    /**
     * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
     * If you want to transition on the first mount set `appear` to `true`, and the
     * component will transition in as soon as the `<Transition>` mounts.
     *
     * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
     */
    appear: PropTypes$2.bool,

    /**
     * Enable or disable enter transitions.
     */
    enter: PropTypes$2.bool,

    /**
     * Enable or disable exit transitions.
     */
    exit: PropTypes$2.bool,

    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided.
     *
     * You may specify a single timeout for all transitions:
     *
     * ```jsx
     * timeout={500}
     * ```
     *
     * or individually:
     *
     * ```jsx
     * timeout={{
     *  appear: 500,
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * - `appear` defaults to the value of `enter`
     * - `enter` defaults to `0`
     * - `exit` defaults to `0`
     *
     * @type {number | { enter?: number, exit?: number, appear?: number }}
     */
    timeout: function timeout(props) {
      var pt = PropTypes.timeoutsShape;
      if (!props.addEndListener) pt = pt.isRequired;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return pt.apply(void 0, [props].concat(args));
    },

    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. **Note:** Timeouts are still used as a fallback if provided.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: PropTypes$2.func,

    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: PropTypes$2.func,

    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: PropTypes$2.func,

    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: PropTypes$2.func,

    /**
     * Callback fired before the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: PropTypes$2.func,

    /**
     * Callback fired after the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: PropTypes$2.func,

    /**
     * Callback fired after the "exited" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: PropTypes$2.func // Name the function so it is clearer in the documentation

  } ;

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;

  var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

  exports.default = _default;
  });

  unwrapExports(Transition_1);
  var Transition_2 = Transition_1.EXITING;
  var Transition_3 = Transition_1.ENTERED;
  var Transition_4 = Transition_1.ENTERING;
  var Transition_5 = Transition_1.EXITED;
  var Transition_6 = Transition_1.UNMOUNTED;

  var CSSTransition_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var PropTypes$2 = _interopRequireWildcard(PropTypes$1);

  var _addClass = _interopRequireDefault(addClass_1);

  var _removeClass = _interopRequireDefault(removeClass);

  var _react = _interopRequireDefault(React__default);

  var _Transition = _interopRequireDefault(Transition_1);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var addClass = function addClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return (0, _addClass.default)(node, c);
    });
  };

  var removeClass$1 = function removeClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return (0, _removeClass.default)(node, c);
    });
  };
  /**
   * A transition component inspired by the excellent
   * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
   * using CSS transitions or animations. It's built upon the
   * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
   * component, so it inherits all of its props.
   *
   * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
   * and `exit` states of the transition. The first class is applied and then a
   * second `*-active` class in order to activate the CSSS transition. After the
   * transition, matching `*-done` class names are applied to persist the
   * transition state.
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
   *         <div>
   *           {"I'll receive my-node-* classes"}
   *         </div>
   *       </CSSTransition>
   *       <button type="button" onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the `in` prop is set to `true`, the child component will first receive
   * the class `example-enter`, then the `example-enter-active` will be added in
   * the next tick. `CSSTransition` [forces a
   * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * between before adding the `example-enter-active`. This is an important trick
   * because it allows us to transition between `example-enter` and
   * `example-enter-active` even though they were added immediately one after
   * another. Most notably, this is what makes it possible for us to animate
   * _appearance_.
   *
   * ```css
   * .my-node-enter {
   *   opacity: 0;
   * }
   * .my-node-enter-active {
   *   opacity: 1;
   *   transition: opacity 200ms;
   * }
   * .my-node-exit {
   *   opacity: 1;
   * }
   * .my-node-exit-active {
   *   opacity: 0;
   *   transition: opacity: 200ms;
   * }
   * ```
   *
   * `*-active` classes represent which styles you want to animate **to**.
   */


  var CSSTransition =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(CSSTransition, _React$Component);

    function CSSTransition() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _this.onEnter = function (node, appearing) {
        var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
            className = _this$getClassNames.className;

        _this.removeClasses(node, 'exit');

        addClass(node, className);

        if (_this.props.onEnter) {
          _this.props.onEnter(node, appearing);
        }
      };

      _this.onEntering = function (node, appearing) {
        var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
            activeClassName = _this$getClassNames2.activeClassName;

        _this.reflowAndAddClass(node, activeClassName);

        if (_this.props.onEntering) {
          _this.props.onEntering(node, appearing);
        }
      };

      _this.onEntered = function (node, appearing) {
        var appearClassName = _this.getClassNames('appear').doneClassName;

        var enterClassName = _this.getClassNames('enter').doneClassName;

        var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

        _this.removeClasses(node, appearing ? 'appear' : 'enter');

        addClass(node, doneClassName);

        if (_this.props.onEntered) {
          _this.props.onEntered(node, appearing);
        }
      };

      _this.onExit = function (node) {
        var _this$getClassNames3 = _this.getClassNames('exit'),
            className = _this$getClassNames3.className;

        _this.removeClasses(node, 'appear');

        _this.removeClasses(node, 'enter');

        addClass(node, className);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      };

      _this.onExiting = function (node) {
        var _this$getClassNames4 = _this.getClassNames('exit'),
            activeClassName = _this$getClassNames4.activeClassName;

        _this.reflowAndAddClass(node, activeClassName);

        if (_this.props.onExiting) {
          _this.props.onExiting(node);
        }
      };

      _this.onExited = function (node) {
        var _this$getClassNames5 = _this.getClassNames('exit'),
            doneClassName = _this$getClassNames5.doneClassName;

        _this.removeClasses(node, 'exit');

        addClass(node, doneClassName);

        if (_this.props.onExited) {
          _this.props.onExited(node);
        }
      };

      _this.getClassNames = function (type) {
        var classNames = _this.props.classNames;
        var isStringClassNames = typeof classNames === 'string';
        var prefix = isStringClassNames && classNames ? classNames + '-' : '';
        var className = isStringClassNames ? prefix + type : classNames[type];
        var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
        var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
        return {
          className: className,
          activeClassName: activeClassName,
          doneClassName: doneClassName
        };
      };

      return _this;
    }

    var _proto = CSSTransition.prototype;

    _proto.removeClasses = function removeClasses(node, type) {
      var _this$getClassNames6 = this.getClassNames(type),
          className = _this$getClassNames6.className,
          activeClassName = _this$getClassNames6.activeClassName,
          doneClassName = _this$getClassNames6.doneClassName;

      className && removeClass$1(node, className);
      activeClassName && removeClass$1(node, activeClassName);
      doneClassName && removeClass$1(node, doneClassName);
    };

    _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
      // This is for to force a repaint,
      // which is necessary in order to transition styles when adding a class name.
      if (className) {
        /* eslint-disable no-unused-expressions */
        node && node.scrollTop;
        /* eslint-enable no-unused-expressions */

        addClass(node, className);
      }
    };

    _proto.render = function render() {
      var props = _extends({}, this.props);

      delete props.classNames;
      return _react.default.createElement(_Transition.default, _extends({}, props, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }));
    };

    return CSSTransition;
  }(_react.default.Component);

  CSSTransition.defaultProps = {
    classNames: ''
  };
  CSSTransition.propTypes =  _extends({}, _Transition.default.propTypes, {
    /**
     * The animation classNames applied to the component as it enters, exits or
     * has finished the transition. A single name can be provided and it will be
     * suffixed for each stage: e.g.
     *
     * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
     * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
     * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
     *
     * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
     * This allows you to define different behavior for when appearing is done and
     * when regular entering is done, using selectors like
     * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
     * epic entrance animation when element first appears in the DOM using
     * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
     * simply use `fade-enter-done` for defining both cases.
     *
     * Each individual classNames can also be specified independently like:
     *
     * ```js
     * classNames={{
     *  appear: 'my-appear',
     *  appearActive: 'my-active-appear',
     *  appearDone: 'my-done-appear',
     *  enter: 'my-enter',
     *  enterActive: 'my-active-enter',
     *  enterDone: 'my-done-enter',
     *  exit: 'my-exit',
     *  exitActive: 'my-active-exit',
     *  exitDone: 'my-done-exit',
     * }}
     * ```
     *
     * If you want to set these classes using CSS Modules:
     *
     * ```js
     * import styles from './styles.css';
     * ```
     *
     * you might want to use camelCase in your CSS file, that way could simply
     * spread them instead of listing them one by one:
     *
     * ```js
     * classNames={{ ...styles }}
     * ```
     *
     * @type {string | {
     *  appear?: string,
     *  appearActive?: string,
     *  appearDone?: string,
     *  enter?: string,
     *  enterActive?: string,
     *  enterDone?: string,
     *  exit?: string,
     *  exitActive?: string,
     *  exitDone?: string,
     * }}
     */
    classNames: PropTypes.classNamesShape,

    /**
     * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
     * applied.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEnter: PropTypes$2.func,

    /**
     * A `<Transition>` callback fired immediately after the 'enter-active' or
     * 'appear-active' class is applied.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: PropTypes$2.func,

    /**
     * A `<Transition>` callback fired immediately after the 'enter' or
     * 'appear' classes are **removed** and the `done` class is added to the DOM node.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntered: PropTypes$2.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit' class is
     * applied.
     *
     * @type Function(node: HtmlElement)
     */
    onExit: PropTypes$2.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
     *
     * @type Function(node: HtmlElement)
     */
    onExiting: PropTypes$2.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit' classes
     * are **removed** and the `exit-done` class is added to the DOM node.
     *
     * @type Function(node: HtmlElement)
     */
    onExited: PropTypes$2.func
  }) ;
  var _default = CSSTransition;
  exports.default = _default;
  module.exports = exports["default"];
  });

  unwrapExports(CSSTransition_1);

  var ChildMapping = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.getChildMapping = getChildMapping;
  exports.mergeChildMappings = mergeChildMappings;
  exports.getInitialChildMapping = getInitialChildMapping;
  exports.getNextChildMapping = getNextChildMapping;



  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */
  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) React__default.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */


  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list


    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`


    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }

  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!(0, React__default.isValidElement)(child)) return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = (0, React__default.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = (0, React__default.cloneElement)(child, {
          in: false
        });
      } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = (0, React__default.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }
  });

  unwrapExports(ChildMapping);
  var ChildMapping_1 = ChildMapping.getChildMapping;
  var ChildMapping_2 = ChildMapping.mergeChildMappings;
  var ChildMapping_3 = ChildMapping.getInitialChildMapping;
  var ChildMapping_4 = ChildMapping.getNextChildMapping;

  var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var _propTypes = _interopRequireDefault(PropTypes$1);

  var _react = _interopRequireDefault(React__default);





  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
    /**
     * The `<TransitionGroup>` component manages a set of transition components
     * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
     * components, `<TransitionGroup>` is a state machine for managing the mounting
     * and unmounting of components over time.
     *
     * Consider the example below. As items are removed or added to the TodoList the
     * `in` prop is toggled automatically by the `<TransitionGroup>`.
     *
     * Note that `<TransitionGroup>`  does not define any animation behavior!
     * Exactly _how_ a list item animates is up to the individual transition
     * component. This means you can mix and match animations across different list
     * items.
     */

  };

  var TransitionGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


      _this.state = {
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.getChildContext = function getChildContext() {
      return {
        transitionGroup: {
          isMounting: !this.appeared
        }
      };
    };

    _proto.componentDidMount = function componentDidMount() {
      this.appeared = true;
      this.mounted = true;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends({}, state.children);

          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return children;
      }

      return _react.default.createElement(Component, props, children);
    };

    return TransitionGroup;
  }(_react.default.Component);

  TransitionGroup.childContextTypes = {
    transitionGroup: _propTypes.default.object.isRequired
  };
  TransitionGroup.propTypes =  {
    /**
     * `<TransitionGroup>` renders a `<div>` by default. You can change this
     * behavior by providing a `component` prop.
     * If you use React v16+ and would like to avoid a wrapping `<div>` element
     * you can pass in `component={null}`. This is useful if the wrapping div
     * borks your css styles.
     */
    component: _propTypes.default.any,

    /**
     * A set of `<Transition>` components, that are toggled `in` and out as they
     * leave. the `<TransitionGroup>` will inject specific transition props, so
     * remember to spread them through if you are wrapping the `<Transition>` as
     * with our `<Fade>` example.
     *
     * While this component is meant for multiple `Transition` or `CSSTransition`
     * children, sometimes you may want to have a single transition child with
     * content that you want to be transitioned out and in when you change it
     * (e.g. routes, images etc.) In that case you can change the `key` prop of
     * the transition child as you change its content, this will cause
     * `TransitionGroup` to transition the child out and back in.
     */
    children: _propTypes.default.node,

    /**
     * A convenience prop that enables or disables appear animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    appear: _propTypes.default.bool,

    /**
     * A convenience prop that enables or disables enter animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    enter: _propTypes.default.bool,

    /**
     * A convenience prop that enables or disables exit animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    exit: _propTypes.default.bool,

    /**
     * You may need to apply reactive updates to a child as it is exiting.
     * This is generally done by using `cloneElement` however in the case of an exiting
     * child the element has already been removed and not accessible to the consumer.
     *
     * If you do need to update a child as it leaves you can provide a `childFactory`
     * to wrap every child, even the ones that are leaving.
     *
     * @type Function(child: ReactElement) -> ReactElement
     */
    childFactory: _propTypes.default.func
  } ;
  TransitionGroup.defaultProps = defaultProps;

  var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

  exports.default = _default;
  module.exports = exports["default"];
  });

  unwrapExports(TransitionGroup_1);

  var ReplaceTransition_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var _propTypes = _interopRequireDefault(PropTypes$1);

  var _react = _interopRequireDefault(React__default);



  var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  /**
   * The `<ReplaceTransition>` component is a specialized `Transition` component
   * that animates between two children.
   *
   * ```jsx
   * <ReplaceTransition in>
   *   <Fade><div>I appear first</div></Fade>
   *   <Fade><div>I replace the above</div></Fade>
   * </ReplaceTransition>
   * ```
   */
  var ReplaceTransition =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ReplaceTransition, _React$Component);

    function ReplaceTransition() {
      var _this;

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

      _this.handleEnter = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return _this.handleLifecycle('onEnter', 0, args);
      };

      _this.handleEntering = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return _this.handleLifecycle('onEntering', 0, args);
      };

      _this.handleEntered = function () {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return _this.handleLifecycle('onEntered', 0, args);
      };

      _this.handleExit = function () {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        return _this.handleLifecycle('onExit', 1, args);
      };

      _this.handleExiting = function () {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }

        return _this.handleLifecycle('onExiting', 1, args);
      };

      _this.handleExited = function () {
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }

        return _this.handleLifecycle('onExited', 1, args);
      };

      return _this;
    }

    var _proto = ReplaceTransition.prototype;

    _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
      var _child$props;

      var children = this.props.children;

      var child = _react.default.Children.toArray(children)[idx];

      if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
      if (this.props[handler]) this.props[handler]((0, reactDom__default.findDOMNode)(this));
    };

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          inProp = _this$props.in,
          props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

      var _React$Children$toArr = _react.default.Children.toArray(children),
          first = _React$Children$toArr[0],
          second = _React$Children$toArr[1];

      delete props.onEnter;
      delete props.onEntering;
      delete props.onEntered;
      delete props.onExit;
      delete props.onExiting;
      delete props.onExited;
      return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
        key: 'first',
        onEnter: this.handleEnter,
        onEntering: this.handleEntering,
        onEntered: this.handleEntered
      }) : _react.default.cloneElement(second, {
        key: 'second',
        onEnter: this.handleExit,
        onEntering: this.handleExiting,
        onEntered: this.handleExited
      }));
    };

    return ReplaceTransition;
  }(_react.default.Component);

  ReplaceTransition.propTypes =  {
    in: _propTypes.default.bool.isRequired,
    children: function children(props, propName) {
      if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
      return null;
    }
  } ;
  var _default = ReplaceTransition;
  exports.default = _default;
  module.exports = exports["default"];
  });

  unwrapExports(ReplaceTransition_1);

  var reactTransitionGroup = createCommonjsModule(function (module) {

  var _CSSTransition = _interopRequireDefault(CSSTransition_1);

  var _ReplaceTransition = _interopRequireDefault(ReplaceTransition_1);

  var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

  var _Transition = _interopRequireDefault(Transition_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  module.exports = {
    Transition: _Transition.default,
    TransitionGroup: _TransitionGroup.default,
    ReplaceTransition: _ReplaceTransition.default,
    CSSTransition: _CSSTransition.default
  };
  });

  unwrapExports(reactTransitionGroup);
  var reactTransitionGroup_1 = reactTransitionGroup.Transition;
  var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
  var reactTransitionGroup_3 = reactTransitionGroup.ReplaceTransition;
  var reactTransitionGroup_4 = reactTransitionGroup.CSSTransition;

  var classCallCheck$1 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass$1 = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };



  var inherits$1 = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };









  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn$1 = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  // @jsx glam
  var Base = function Base(_ref) {
    var css = _ref.css,
        innerRef = _ref.innerRef,
        Tag = _ref.tag,
        props = objectWithoutProperties(_ref, ['css', 'innerRef', 'tag']);
    return glam(Tag, _extends({
      ref: innerRef,
      css: _extends({
        boxSizing: 'border-box'
      }, css)
    }, props));
  };


  var Button = function Button(props) {
    return glam(Base, _extends({ tag: 'button' }, props));
  };
  var Div = function Div(props) {
    return glam(Base, _extends({ tag: 'div' }, props));
  };
  var Img = function Img(props) {
    return glam(Base, _extends({ tag: 'img' }, props));
  };
  var Nav = function Nav(props) {
    return glam(Base, _extends({ tag: 'nav' }, props));
  };
  var Span = function Span(props) {
    return glam(Base, _extends({ tag: 'span' }, props));
  };

  // ==============================
  // NO OP
  // ==============================



  // ==============================
  // Class Name Prefixer
  // ==============================

  var CLASS_PREFIX = 'react-images';

  /**
   String representation of component state for styling with class names.

   Expects an array of strings OR a string/object pair:
   - className(['comp', 'comp-arg', 'comp-arg-2'])
     @returns 'react-images__comp react-images__comp-arg react-images__comp-arg-2'
   - className('comp', { some: true, state: false })
     @returns 'react-images__comp react-images__comp--some'
  */
  function className(name, state) {
    var arr = Array.isArray(name) ? name : [name];

    // loop through state object, remove falsey values and combine with name
    if (state && typeof name === 'string') {
      for (var _key in state) {
        if (state.hasOwnProperty(_key) && state[_key]) {
          arr.push(name + '--' + _key);
        }
      }
    }

    // prefix everything and return a string
    return arr.map(function (cn) {
      return CLASS_PREFIX + '__' + cn;
    }).join(' ');
  }

  // ==============================
  // Touch Capability Detector
  // ==============================

  function isTouch() {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  }

  // @jsx glam
  var containerCSS = function containerCSS(_ref) {
    var isFullscreen = _ref.isFullscreen;
    return {
      backgroundColor: isFullscreen ? 'black' : null,
      display: 'flex ',
      flexDirection: 'column',
      height: '100%'
    };
  };

  var Container = function Container(props) {
    var children = props.children,
        getStyles = props.getStyles,
        isFullscreen = props.isFullscreen,
        isModal = props.isModal,
        innerProps = props.innerProps;

    return glam(
      Div,
      _extends({
        css: getStyles('container', props),
        className: className('container', { isFullscreen: isFullscreen, isModal: isModal })
      }, innerProps),
      children
    );
  };

  var smallDevice = '@media (max-width: 769px)';

  // @jsx glam
  var footerCSS = function footerCSS(_ref) {
    var isModal = _ref.isModal,
        interactionIsIdle = _ref.interactionIsIdle;
    return defineProperty({
      alignItems: 'top',
      bottom: isModal ? 0 : null,
      color: isModal ? 'rgba(255, 255, 255, 0.9)' : '#666',
      display: 'flex ',
      flex: '0 0 auto',
      fontSize: 13,
      justifyContent: 'space-between',
      left: isModal ? 0 : null,
      opacity: interactionIsIdle && isModal ? 0 : 1,
      padding: isModal ? '30px 20px 20px' : '10px 0',
      position: isModal ? 'absolute' : null,
      right: isModal ? 0 : null,
      transform: isModal ? 'translateY(' + (interactionIsIdle ? 10 : 0) + 'px)' : null,
      transition: 'opacity 300ms, transform 300ms',
      zIndex: isModal ? 1 : null

    }, smallDevice, {
      padding: isModal ? '20px 15px 15px' : '5px 0'
    });
  };

  var Footer = function Footer(props) {
    var components = props.components,
        getStyles = props.getStyles,
        innerProps = props.innerProps,
        isFullscreen = props.isFullscreen,
        isModal = props.isModal;


    var style = isModal ? { background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.33))' } : null;

    var state = { isFullscreen: isFullscreen, isModal: isModal };
    var cn = {
      container: className('footer', state),
      caption: className('footer__caption', state),
      count: className('footer__count', state)
    };
    var css = {
      container: getStyles('footer', props),
      caption: getStyles('footerCaption', props),
      count: getStyles('footerCount', props)
    };
    var Caption = components.Caption,
        Count = components.Count;


    return glam(
      Div,
      _extends({
        css: css.container,
        className: cn.container
        // TODO glam prefixer fails on gradients
        // https://github.com/threepointone/glam/issues/35
        , style: style
      }, innerProps),
      glam(Caption, props),
      glam(Count, props)
    );
  };

  // ==============================
  // Inner Elements
  // ==============================

  var footerCaptionCSS = function footerCaptionCSS() {
    return {};
  };

  var FooterCaption = function FooterCaption(props) {
    var currentView = props.currentView,
        getStyles = props.getStyles,
        isFullscreen = props.isFullscreen,
        isModal = props.isModal;
    var caption = currentView.caption;

    var state = { isFullscreen: isFullscreen, isModal: isModal };

    return glam(
      Span,
      {
        css: getStyles('footerCaption', props),
        className: className('footer__caption', state)
      },
      caption
    );
  };

  var footerCountCSS = function footerCountCSS() {
    return { flexShrink: 0, marginLeft: '1em' };
  };

  var FooterCount = function FooterCount(props) {
    var currentIndex = props.currentIndex,
        getStyles = props.getStyles,
        isFullscreen = props.isFullscreen,
        isModal = props.isModal,
        views = props.views;

    var state = { isFullscreen: isFullscreen, isModal: isModal };
    var activeView = currentIndex + 1;
    var totalViews = views.length;

    if (!activeView || !totalViews) return null;

    return glam(
      Span,
      {
        css: getStyles('footerCount', props),
        className: className('footer__count', state)
      },
      activeView,
      ' of ',
      totalViews
    );
  };

  // @jsx glam
  var Svg = function Svg(_ref) {
    var size = _ref.size,
        props = objectWithoutProperties(_ref, ['size']);
    return glam('svg', _extends({
      role: 'presentation',
      viewBox: '0 0 24 24',
      css: {
        display: 'inline-block',
        fill: 'currentColor',
        height: size,
        stroke: 'currentColor',
        strokeWidth: 0,
        width: size
      }
    }, props));
  };

  var ChevronLeft = function ChevronLeft(_ref2) {
    var _ref2$size = _ref2.size,
        size = _ref2$size === undefined ? 32 : _ref2$size,
        props = objectWithoutProperties(_ref2, ['size']);
    return glam(
      Svg,
      _extends({ size: size }, props),
      glam('path', { d: 'M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z' })
    );
  };
  var ChevronRight = function ChevronRight(_ref3) {
    var _ref3$size = _ref3.size,
        size = _ref3$size === undefined ? 32 : _ref3$size,
        props = objectWithoutProperties(_ref3, ['size']);
    return glam(
      Svg,
      _extends({ size: size }, props),
      glam('path', { d: 'M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z' })
    );
  };
  var Close = function Close(_ref4) {
    var _ref4$size = _ref4.size,
        size = _ref4$size === undefined ? 32 : _ref4$size,
        props = objectWithoutProperties(_ref4, ['size']);
    return glam(
      Svg,
      _extends({ size: size }, props),
      glam('path', { d: 'M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' })
    );
  };
  var FullscreenEnter = function FullscreenEnter(_ref5) {
    var _ref5$size = _ref5.size,
        size = _ref5$size === undefined ? 32 : _ref5$size,
        props = objectWithoutProperties(_ref5, ['size']);
    return glam(
      Svg,
      _extends({ size: size }, props),
      glam('path', { d: 'M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z' })
    );
  };
  var FullscreenExit = function FullscreenExit(_ref6) {
    var _ref6$size = _ref6.size,
        size = _ref6$size === undefined ? 32 : _ref6$size,
        props = objectWithoutProperties(_ref6, ['size']);
    return glam(
      Svg,
      _extends({ size: size }, props),
      glam('path', { d: 'M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z' })
    );
  };

  // @jsx glam
  var headerCSS = function headerCSS(_ref) {
    var interactionIsIdle = _ref.interactionIsIdle;
    return {
      alignItems: 'center',
      display: 'flex ',
      flex: '0 0 auto',
      justifyContent: 'space-between',
      opacity: interactionIsIdle ? 0 : 1,
      padding: 10,
      paddingBottom: 20,
      position: 'absolute',
      transform: 'translateY(' + (interactionIsIdle ? -10 : 0) + 'px)',
      transition: 'opacity 300ms, transform 300ms',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1
    };
  };

  var Header = function Header(props) {
    var components = props.components,
        getStyles = props.getStyles,
        getCloseLabel = props.getCloseLabel,
        getFullscreenLabel = props.getFullscreenLabel,
        innerProps = props.innerProps,
        isModal = props.isModal,
        modalProps = props.modalProps;


    if (!isModal) return null;

    var allowFullscreen = modalProps.allowFullscreen,
        isFullscreen = modalProps.isFullscreen,
        onClose = modalProps.onClose,
        toggleFullscreen = modalProps.toggleFullscreen;

    var FsIcon = isFullscreen ? FullscreenExit : FullscreenEnter;
    var CloseButton = components.CloseButton,
        FullscreenButton = components.FullscreenButton;

    var state = { isFullscreen: isFullscreen, isModal: isModal };

    return glam(
      Div,
      _extends({
        css: getStyles('header', props),
        className: className('header', state)
        // TODO glam prefixer fails on gradients
        // https://github.com/threepointone/glam/issues/35
        , style: {
          background: 'linear-gradient(rgba(0,0,0,0.33), rgba(0,0,0,0))'
        }
      }, innerProps),
      glam('span', null),
      glam(
        'span',
        null,
        allowFullscreen ? glam(
          FullscreenButton,
          {
            getStyles: getStyles,
            innerProps: {
              onClick: toggleFullscreen,
              title: getFullscreenLabel(state)
            }
          },
          glam(FsIcon, { size: 32 })
        ) : null,
        glam(
          CloseButton,
          {
            getStyles: getStyles,
            innerProps: {
              onClick: onClose,
              title: getCloseLabel(state)
            }
          },
          glam(Close, { size: 32 })
        )
      )
    );
  };

  // ==============================
  // Header Buttons
  // ==============================

  var headerButtonCSS = function headerButtonCSS() {
    return {
      alignItems: 'center',
      background: 0,
      border: 0,
      color: 'rgba(255, 255, 255, 0.75)',
      cursor: 'pointer',
      display: 'inline-flex ',
      height: 44,
      justifyContent: 'center',
      outline: 0,
      padding: 0,
      position: 'relative',
      width: 44,

      '&:hover': {
        color: 'white'
      }
    };
  };

  var headerFullscreenCSS = headerButtonCSS;
  var HeaderFullscreen = function HeaderFullscreen(props) {
    var children = props.children,
        getStyles = props.getStyles,
        innerProps = props.innerProps;


    return glam(
      Button,
      _extends({
        css: getStyles('headerFullscreen', props),
        className: className(['header_button', 'header_button--fullscreen']),
        type: 'button'
      }, innerProps),
      children
    );
  };

  var headerCloseCSS = headerButtonCSS;
  var HeaderClose = function HeaderClose(props) {
    var children = props.children,
        getStyles = props.getStyles,
        innerProps = props.innerProps;


    return glam(
      Button,
      _extends({
        css: getStyles('headerClose', props),
        className: className(['header_button', 'header_button--close']),
        type: 'button'
      }, innerProps),
      children
    );
  };

  // @jsx glam
  // ==============================
  // Navigation
  // ==============================

  var navigationCSS = function navigationCSS(_ref) {
    var interactionIsIdle = _ref.interactionIsIdle;
    return {
      display: 'flex ',
      alignItems: 'center',
      justifyContent: 'space-between',
      opacity: interactionIsIdle ? 0 : 1,
      transition: 'opacity 300ms'
    };
  };

  var Navigation = function Navigation(props) {
    var children = props.children,
        getStyles = props.getStyles,
        isFullscreen = props.isFullscreen,
        isModal = props.isModal;

    return !isTouch() ? glam(
      Nav,
      {
        css: getStyles('navigation', props),
        className: className('navigation', { isFullscreen: isFullscreen, isModal: isModal })
      },
      children
    ) : null;
  };

  // ==============================
  // Nav Item
  // ==============================

  var BUTTON_SIZE = 50;

  var navigationItemCSS = function navigationItemCSS(_ref2) {
    var _ref3;

    var align = _ref2.align;
    return _ref3 = {
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.2)',
      border: 0,
      borderRadius: '50%',
      color: 'white',
      cursor: 'pointer',
      display: 'flex ',
      fontSize: 'inherit',
      height: BUTTON_SIZE,
      justifyContent: 'center',
      marginTop: -(BUTTON_SIZE / 2),
      outline: 0,
      position: 'absolute',
      top: '50%',
      transition: 'background-color 200ms',
      width: BUTTON_SIZE
    }, defineProperty(_ref3, align, 20), defineProperty(_ref3, '&:hover', {
      background: 'rgba(255, 255, 255, 0.3)'
    }), defineProperty(_ref3, '&:active', {
      background: 'rgba(255, 255, 255, 0.2)'
    }), _ref3;
  };

  var navigationPrevCSS = navigationItemCSS;
  var NavigationPrev = function NavigationPrev(props) {
    var _props$children = props.children,
        children = _props$children === undefined ? glam(ChevronLeft, { size: 48 }) : _props$children,
        getStyles = props.getStyles,
        innerProps = props.innerProps;


    return glam(
      Button,
      _extends({
        type: 'button',
        css: getStyles('navigationPrev', props)
      }, innerProps),
      children
    );
  };

  var navigationNextCSS = navigationItemCSS;
  var NavigationNext = function NavigationNext(props) {
    var _props$children2 = props.children,
        children = _props$children2 === undefined ? glam(ChevronRight, { size: 48 }) : _props$children2,
        getStyles = props.getStyles,
        innerProps = props.innerProps;


    return glam(
      Button,
      _extends({
        type: 'button',
        css: getStyles('navigationNext', props)
      }, innerProps),
      children
    );
  };

  // @jsx glam
  // ==============================
  // Blanket
  // ==============================

  var blanketCSS = function blanketCSS(_ref) {
    var isFullscreen = _ref.isFullscreen;
    return {
      backgroundColor: isFullscreen ? 'black' : 'rgba(0, 0, 0, 0.8)',
      bottom: 0,
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 1
    };
  };

  var Blanket = function Blanket(props) {
    var getStyles = props.getStyles,
        innerProps = props.innerProps,
        isFullscreen = props.isFullscreen;

    return glam(Div, _extends({
      css: getStyles('blanket', props),
      className: className('blanket', { isFullscreen: isFullscreen })
    }, innerProps));
  };

  // ==============================
  // Positioner
  // ==============================

  var positionerCSS = function positionerCSS() {
    return {
      alignItems: 'center',
      bottom: 0,
      display: 'flex ',
      justifyContent: 'center',
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 1
    };
  };

  var Positioner = function Positioner(props) {
    var children = props.children,
        getStyles = props.getStyles,
        innerProps = props.innerProps,
        isFullscreen = props.isFullscreen;

    return glam(
      Div,
      _extends({
        css: getStyles('positioner', props),
        className: className('positioner', { isFullscreen: isFullscreen })
      }, innerProps),
      children
    );
  };

  // ==============================
  // Dialog
  // ==============================

  var dialogCSS = function dialogCSS() {
    return {};
  };

  var Dialog = function Dialog(props) {
    var children = props.children,
        getStyles = props.getStyles,
        innerProps = props.innerProps,
        isFullscreen = props.isFullscreen;

    return glam(
      Div,
      _extends({
        css: getStyles('dialog', props),
        className: className('dialog', { isFullscreen: isFullscreen })
      }, innerProps),
      children
    );
  };

  function getSource(_ref) {
    var data = _ref.data,
        isFullscreen = _ref.isFullscreen;
    var _data$source = data.source,
        source = _data$source === undefined ? data.src : _data$source;

    if (typeof source === 'string') return source;

    return isFullscreen ? source.fullscreen : source.regular;
  }

  // @jsx glam
  var viewCSS = function viewCSS() {
    return {
      lineHeight: 0,
      position: 'relative',
      textAlign: 'center'
    };
  };

  var View$1 = function View$$1(props) {
    var data = props.data,
        formatters = props.formatters,
        getStyles = props.getStyles,
        index = props.index,
        isFullscreen = props.isFullscreen,
        isModal = props.isModal;

    var innerProps = {
      alt: formatters.getAltText({ data: data, index: index }),
      src: getSource({ data: data, isFullscreen: isFullscreen })
    };

    return glam(
      Div,
      {
        css: getStyles('view', props),
        className: className('view', { isFullscreen: isFullscreen, isModal: isModal })
      },
      glam(Img, _extends({}, innerProps, {
        className: className('view-image', { isFullscreen: isFullscreen, isModal: isModal }),
        css: {
          height: 'auto',
          maxHeight: '100vh',
          maxWidth: '100%',
          userSelect: 'none'
        }
      }))
    );
  };

  var carouselComponents = {
    Container: Container,
    Footer: Footer,
    FooterCaption: FooterCaption,
    FooterCount: FooterCount,
    Header: Header,
    HeaderClose: HeaderClose,
    HeaderFullscreen: HeaderFullscreen,
    Navigation: Navigation,
    NavigationPrev: NavigationPrev,
    NavigationNext: NavigationNext,
    View: View$1
  };

  var defaultCarouselComponents = function defaultCarouselComponents(providedComponents) {
    return _extends({}, carouselComponents, providedComponents);
  };

  // ==============================
  // Modal
  // ==============================

  var modalComponents = {
    Blanket: Blanket,
    Positioner: Positioner,
    Dialog: Dialog
  };

  var defaultModalComponents = function defaultModalComponents(providedComponents) {
    return _extends({}, modalComponents, providedComponents);
  };

  // Carousel
  // Modal
  var defaultCarouselStyles = {
    container: containerCSS,
    footer: footerCSS,
    footerCaption: footerCaptionCSS,
    footerCount: footerCountCSS,
    header: headerCSS,
    headerClose: headerCloseCSS,
    headerFullscreen: headerFullscreenCSS,
    navigation: navigationCSS,
    navigationPrev: navigationPrevCSS,
    navigationNext: navigationNextCSS,
    view: viewCSS
  };
  var defaultModalStyles = {
    blanket: blanketCSS,
    dialog: dialogCSS,
    positioner: positionerCSS
  };

  // Merge Utility
  // Allows consumers to extend a base Carousel or Modal with additional styles

  var easing = 'cubic-bezier(0.23, 1, 0.32, 1)'; // easeOutQuint
  var verticalOffset = 40;

  // ==============================
  // Fade
  // ==============================

  var Fade = function Fade(_ref) {
    var Tag = _ref.component,
        onEntered = _ref.onEntered,
        onExited = _ref.onExited,
        inProp = _ref.in,
        originalProps = _ref.innerProps,
        props = objectWithoutProperties(_ref, ['component', 'onEntered', 'onExited', 'in', 'innerProps']);

    var enter = 300;
    var exit = 500;
    var fadeStyle = {
      transition: 'opacity 200ms',
      opacity: 0
    };
    var fadeTransition = {
      entering: { opacity: 0 },
      entered: { opacity: 1 },
      exiting: { opacity: 0, transitionDuration: exit + 'ms' }
    };

    return React__default.createElement(
      reactTransitionGroup_1,
      {
        appear: true,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: onEntered,
        onExited: onExited,
        key: 'fade',
        'in': inProp,
        timeout: { enter: enter, exit: exit }
      },
      function (status) {
        var innerProps = _extends({}, originalProps, {
          style: _extends({}, fadeStyle, fadeTransition[status])
        });

        if (status === 'exited') return null;

        return React__default.createElement(Tag, _extends({ innerProps: innerProps }, props));
      }
    );
  };

  var SlideUp = function SlideUp(_ref2) {
    var Tag = _ref2.component,
        onEntered = _ref2.onEntered,
        onExited = _ref2.onExited,
        inProp = _ref2.in,
        originalProps = _ref2.innerProps,
        props = objectWithoutProperties(_ref2, ['component', 'onEntered', 'onExited', 'in', 'innerProps']);

    var enter = 300;
    var exit = 500;
    var restingTransform = 'translate3d(0, 0, 0)';
    var slideStyle = {
      transition: 'transform ' + enter + 'ms ' + easing + ', opacity ' + enter + 'ms ' + easing,
      transform: restingTransform
    };
    var slideTransition = {
      entering: {
        opacity: 0,
        transform: 'translate3d(0, ' + verticalOffset + 'px, 0) scale(0.9)'
      },
      entered: {
        opacity: 1,
        transform: restingTransform
      },
      exiting: {
        opacity: 0,
        transform: 'translate3d(0, ' + verticalOffset + 'px, 0) scale(0.9)',
        transition: 'transform ' + exit + 'ms ' + easing + ', opacity ' + exit + 'ms ' + easing
      }
    };

    return React__default.createElement(
      reactTransitionGroup_1,
      {
        appear: true,
        'in': inProp,
        mountOnEnter: true,
        onEntered: onEntered,
        onExited: onExited,
        timeout: { enter: enter, exit: exit },
        unmountOnExit: true
      },
      function (status) {
        if (status === 'exited') return null;

        var innerProps = _extends({}, originalProps, {
          style: _extends({}, slideStyle, slideTransition[status])
        });

        return React__default.createElement(Tag, _extends({ innerProps: innerProps }, props));
      }
    );
  };

  // @jsx glam
  var defaultProps$1 = {
    allowFullscreen: !isTouch(),
    closeOnBackdropClick: true,
    closeOnEsc: true,
    styles: {}
  };

  var Modal = function (_Component) {
    inherits$1(Modal, _Component);

    // TODO
    function Modal(props) {
      classCallCheck$1(this, Modal);

      var _this = possibleConstructorReturn$1(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

      _initialiseProps$1.call(_this);

      _this.cacheComponents(props.components);

      _this.state = { isFullscreen: false };
      return _this;
    }

    createClass$1(Modal, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.components !== this.props.components) {
          this.cacheComponents(nextProps.components);
        }
      }

      // emulate `componentDidMount` & `componentWillUnmount`
      // called on complete of enter & exit transitions respectively

    }, {
      key: 'getCommonProps',
      value: function getCommonProps() {
        var isFullscreen = this.state.isFullscreen;


        return {
          getStyles: this.getStyles,
          isFullscreen: isFullscreen,
          modalProps: this.props
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _components = this.components,
            Blanket = _components.Blanket,
            Positioner = _components.Positioner,
            Dialog = _components.Dialog;
        var _props = this.props,
            allowFullscreen = _props.allowFullscreen,
            children = _props.children;
        var isFullscreen = this.state.isFullscreen;

        var commonProps = this.commonProps = this.getCommonProps();

        // $FlowFixMe
        var transitionIn = this.props.in;

        // forward props to modal for use in internal components
        var modalProps = {
          allowFullscreen: allowFullscreen,
          isFullscreen: isFullscreen,
          onClose: this.handleClose,
          toggleFullscreen: this.toggleFullscreen
        };

        // augment user carousel with modal props
        // $FlowFixMe
        var carouselComponent = React.cloneElement(children, {
          isModal: true,
          modalProps: modalProps
        });

        return glam(
          Fullscreen,
          { enabled: isFullscreen, onChange: this.handleFullscreenChange },
          glam(Fade, _extends({}, commonProps, { component: Blanket, 'in': transitionIn })),
          glam(
            SlideUp,
            _extends({}, commonProps, {
              component: Positioner,
              'in': transitionIn,
              innerProps: {
                onClick: this.handleBackdropClick
              },
              onEntered: this.modalDidMount,
              onExited: this.modalWillUnmount
            }),
            glam(
              Dialog,
              commonProps,
              carouselComponent
            ),
            glam(reactScrolllock, null)
          )
        );
      }
    }]);
    return Modal;
  }(React.Component);

  Modal.defaultProps = defaultProps$1;

  var _initialiseProps$1 = function _initialiseProps() {
    var _this2 = this;

    this.modalDidMount = function () {
      document.addEventListener('keyup', _this2.handleKeyUp);
      a11yFocusStore.storeFocus();
    };

    this.modalWillUnmount = function () {
      document.removeEventListener('keyup', _this2.handleKeyUp);
      a11yFocusStore.restoreFocus();
    };

    this.cacheComponents = function (comps) {
      _this2.components = defaultModalComponents(comps);
    };

    this.handleFullscreenChange = function (isFullscreen) {
      _this2.setState({ isFullscreen: isFullscreen });
    };

    this.handleKeyUp = function (event) {
      var _props2 = _this2.props,
          allowFullscreen = _props2.allowFullscreen,
          closeOnEsc = _props2.closeOnEsc;
      var isFullscreen = _this2.state.isFullscreen;

      var allowClose = event.key === 'Escape' && closeOnEsc && !isFullscreen;

      // toggle fullscreen
      if (allowFullscreen && event.key === 'f') {
        _this2.toggleFullscreen();
      }

      // close on escape when not fullscreen
      if (allowClose) _this2.handleClose(event);
    };

    this.handleBackdropClick = function (event) {
      var closeOnBackdropClick = _this2.props.closeOnBackdropClick;


      if (!event.target.classList.contains(className('view')) || !closeOnBackdropClick) return;

      _this2.handleClose(event);
    };

    this.toggleFullscreen = function () {
      _this2.setState(function (state) {
        return { isFullscreen: !state.isFullscreen };
      });
    };

    this.handleClose = function (event) {
      var onClose = _this2.props.onClose;
      var isFullscreen = _this2.state.isFullscreen;

      // force exit fullscreen mode on close

      if (isFullscreen) {
        _this2.toggleFullscreen();
      }

      // call the consumer's onClose func
      onClose(event);
    };

    this.getStyles = function (key, props) {
      var base = defaultModalStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this2.props.styles[key];
      return custom ? custom(base, props) : base;
    };
  };

  // ==============================
  // Navigation
  // ==============================

  /* ARIA label for the next button */


  // NOTE: props aren't used by default for some getters but consumers may need
  // them, this needs to be reflected in the flow type.

  /* eslint-disable no-unused-vars */

  function getNextLabel(_ref) {
    var currentIndex = _ref.currentIndex,
        views = _ref.views;

    return 'Show slide ' + (currentIndex + 2) + ' of ' + views.length;
  }

  /* ARIA label for the previous button */
  function getPrevLabel(_ref2) {
    var currentIndex = _ref2.currentIndex,
        views = _ref2.views;

    return 'Show slide ' + currentIndex + ' of ' + views.length;
  }

  /* HTML title for the next button */
  function getNextTitle(props) {
    return 'Next (right arrow)';
  }

  /* HTML title for the previous button */
  function getPrevTitle(props) {
    return 'Previous (left arrow)';
  }

  // ==============================
  // Header
  // ==============================

  /* ARIA label for the close button */
  function getCloseLabel(props) {
    return 'Close (esc)';
  }
  /* ARIA label for the fullscreen button */
  function getFullscreenLabel(_ref3) {
    var isFullscreen = _ref3.isFullscreen;

    return isFullscreen ? 'Exit fullscreen (f)' : 'Enter fullscreen (f)';
  }

  // ==============================
  // View
  // ==============================

  /* alt text for each image in the carousel */
  function getAltText(_ref4) {
    var data = _ref4.data,
        index = _ref4.index;

    if (data.caption) return data.caption;

    return 'Image ' + (index + 1);
  }

  // ==============================
  // Exports
  // ==============================

  var formatters = {
    getAltText: getAltText,
    getNextLabel: getNextLabel,
    getPrevLabel: getPrevLabel,
    getNextTitle: getNextTitle,
    getPrevTitle: getPrevTitle,
    getCloseLabel: getCloseLabel,
    getFullscreenLabel: getFullscreenLabel
  };

  // @jsx glam
  var viewPagerStyles = { flex: '1 1 auto', position: 'relative' };
  var frameStyles = { outline: 0 };

  var defaultProps = {
    currentIndex: 0,
    formatters: formatters,
    hideControlsWhenIdle: 3000,
    styles: {},
    trackProps: {
      instant: !isTouch(),
      swipe: 'touch'
    }
  };

  var Carousel$1 = function (_Component) {
    inherits$1(Carousel, _Component);

    function Carousel(props) {
      classCallCheck$1(this, Carousel);

      var _this = possibleConstructorReturn$1(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

      _initialiseProps.call(_this);

      _this.cacheComponents(props.components);

      _this.state = {
        currentIndex: props.currentIndex,
        interactionIsIdle: isTouch()
      };
      return _this;
    } // TODO


    createClass$1(Carousel, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
            hideControlsWhenIdle = _props.hideControlsWhenIdle,
            modalProps = _props.modalProps;

        var isModal = Boolean(modalProps);

        this.mounted = true;

        if (hideControlsWhenIdle && this.container) {
          this.container.addEventListener('mousedown', this.handleMouseActivity);
          this.container.addEventListener('mousemove', this.handleMouseActivity);
          this.container.addEventListener('touchmove', this.handleMouseActivity);
        }
        if (isModal) {
          this.focusViewFrame();
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.components !== this.props.components) {
          this.cacheComponents(nextProps.components);
        }

        if (this.props.currentIndex !== nextProps.currentIndex) {
          this.setState({ currentIndex: nextProps.currentIndex });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.mounted = false;

        if (this.props.hideControlsWhenIdle && this.container) {
          this.container.removeEventListener('mousedown', this.handleMouseActivity);
          this.container.removeEventListener('mousemove', this.handleMouseActivity);
          this.container.removeEventListener('touchmove', this.handleMouseActivity);
          this.handleMouseActivity.cancel();
        }
      }

      // ==============================
      // Refs
      // ==============================

      // ==============================
      // Utilities
      // ==============================

      // combine defaultProps with consumer props to maintain expected behaviour

      // combine defaultProps with consumer props to maintain expected behaviour


      // ==============================
      // Handlers
      // ==============================

      // ==============================
      // Renderers
      // ==============================

    }, {
      key: 'getCommonProps',
      value: function getCommonProps() {
        var _props2 = this.props,
            frameProps = _props2.frameProps,
            trackProps = _props2.trackProps,
            modalProps = _props2.modalProps,
            views = _props2.views;

        var isModal = Boolean(modalProps);
        var isFullscreen = Boolean(modalProps && modalProps.isFullscreen);
        var _state = this.state,
            currentIndex = _state.currentIndex,
            interactionIsIdle = _state.interactionIsIdle;

        var currentView = this.getViewData();

        return {
          carouselProps: this.props,
          currentIndex: currentIndex,
          currentView: currentView,
          formatters: this.props.formatters,
          frameProps: frameProps,
          getStyles: this.getStyles,
          isFullscreen: isFullscreen,
          isModal: isModal,
          modalProps: modalProps,
          interactionIsIdle: interactionIsIdle,
          trackProps: trackProps,
          views: views
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _components = this.components,
            Container = _components.Container,
            View$$1 = _components.View;
        var currentIndex = this.state.currentIndex;
        var _props3 = this.props,
            frameProps = _props3.frameProps,
            views = _props3.views;

        var commonProps = this.commonProps = this.getCommonProps();

        return glam(
          Container,
          _extends({}, commonProps, { innerProps: { innerRef: this.getContainer } }),
          this.renderHeader(),
          glam(
            reactViewPager_6,
            {
              tag: 'main',
              style: viewPagerStyles,
              className: className('pager')
            },
            glam(
              reactViewPager_5,
              _extends({}, frameProps, {
                ref: this.getFrame,
                className: className('frame'),
                style: frameStyles
              }),
              glam(
                reactViewPager_4,
                _extends({}, this.getTrackProps(this.props), {
                  style: { display: 'flex', alignItems: 'center' },
                  currentView: currentIndex,
                  className: className('track'),
                  onViewChange: this.handleViewChange,
                  ref: this.getTrack
                }),
                views && views.map(function (data, index) {
                  return glam(
                    reactViewPager_3,
                    { className: className('view-wrapper'), key: index },
                    glam(View$$1, _extends({}, commonProps, { data: data, index: index }))
                  );
                })
              )
            ),
            this.renderNavigation()
          ),
          this.renderFooter()
        );
      }
    }]);
    return Carousel;
  }(React.Component);

  Carousel$1.defaultProps = defaultProps;

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.mounted = false;

    this.cacheComponents = function (comps) {
      _this2.components = defaultCarouselComponents(comps);
    };

    this.getContainer = function (ref) {
      _this2.container = ref;
    };

    this.getFooter = function (ref) {
      _this2.footer = ref;
    };

    this.getFrame = function (ref) {
      _this2.frame = reactDom.findDOMNode(ref);
    };

    this.getHeader = function (ref) {
      _this2.header = ref;
    };

    this.getTrack = function (ref) {
      _this2.track = ref;
    };

    this.hasPreviousView = function () {
      var trackProps = _this2.props.trackProps;
      var currentIndex = _this2.state.currentIndex;


      return trackProps.infinite || currentIndex !== 0;
    };

    this.hasNextView = function () {
      var _props4 = _this2.props,
          trackProps = _props4.trackProps,
          views = _props4.views;
      var currentIndex = _this2.state.currentIndex;


      return trackProps.infinite || currentIndex !== views.length - 1;
    };

    this.getStyles = function (key, props) {
      var base = defaultCarouselStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this2.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    this.getTrackProps = function (props) {
      return _extends({}, defaultProps.trackProps, props.trackProps);
    };

    this.getFormatters = function () {
      return _extends({}, defaultProps.formatters, _this2.props.formatters);
    };

    this.getViewData = function () {
      var views = _this2.props.views;
      var currentIndex = _this2.state.currentIndex;


      return views[currentIndex];
    };

    this.focusViewFrame = function () {
      if (_this2.frame && document.activeElement !== _this2.frame) {
        _this2.frame.focus();
      }
    };

    this.prev = function () {
      _this2.track.prev();
      _this2.focusViewFrame();
    };

    this.next = function () {
      _this2.track.next();
      _this2.focusViewFrame();
    };

    this.handleMouseActivity = rafScheduler(function () {
      clearTimeout(_this2.timer);

      if (_this2.state.interactionIsIdle) {
        _this2.setState({ interactionIsIdle: false });
      }

      _this2.timer = setTimeout(function () {
        if (_this2.mounted) {
          _this2.setState({ interactionIsIdle: true });
        }
      }, _this2.props.hideControlsWhenIdle);
    });

    this.handleViewChange = function (indicies) {
      var trackProps = _this2.props.trackProps;

      // simplify by enforcing number

      var currentIndex = indicies[0];

      _this2.setState({ currentIndex: currentIndex });

      // call the consumer's onViewChange fn
      if (trackProps && trackProps.onViewChange) {
        trackProps.onViewChange(currentIndex);
      }
    };

    this.renderNavigation = function () {
      var _getFormatters = _this2.getFormatters(),
          getNextLabel = _getFormatters.getNextLabel,
          getPrevLabel = _getFormatters.getPrevLabel,
          getNextTitle = _getFormatters.getNextTitle,
          getPrevTitle = _getFormatters.getPrevTitle;

      var _components2 = _this2.components,
          Navigation = _components2.Navigation,
          NavigationPrev = _components2.NavigationPrev,
          NavigationNext = _components2.NavigationNext;
      var commonProps = _this2.commonProps;


      var showPrev = _this2.hasPreviousView();
      var showNext = _this2.hasNextView();
      var showNav = (showPrev || showNext) && Navigation;

      return showNav ? glam(
        Navigation,
        commonProps,
        showPrev && glam(NavigationPrev, _extends({}, commonProps, {
          align: 'left',
          innerProps: {
            'aria-label': getPrevLabel(commonProps),
            onClick: _this2.prev,
            title: getPrevTitle(commonProps)
          }
        })),
        showNext && glam(NavigationNext, _extends({}, commonProps, {
          align: 'right',
          innerProps: {
            'aria-label': getNextLabel(commonProps),
            onClick: _this2.next,
            title: getNextTitle(commonProps)
          }
        }))
      ) : null;
    };

    this.renderFooter = function () {
      var _components3 = _this2.components,
          Footer = _components3.Footer,
          FooterCaption = _components3.FooterCaption,
          FooterCount = _components3.FooterCount;
      var commonProps = _this2.commonProps;


      return Footer ? glam(Footer, _extends({}, commonProps, {
        components: {
          Caption: FooterCaption,
          Count: FooterCount
        },
        innerProps: { innerRef: _this2.getFooter }
      })) : null;
    };

    this.renderHeader = function () {
      var _components4 = _this2.components,
          Header = _components4.Header,
          HeaderClose = _components4.HeaderClose,
          HeaderFullscreen = _components4.HeaderFullscreen;

      var _getFormatters2 = _this2.getFormatters(),
          getCloseLabel = _getFormatters2.getCloseLabel,
          getFullscreenLabel = _getFormatters2.getFullscreenLabel;

      var commonProps = _this2.commonProps;


      return Header ? glam(Header, _extends({}, commonProps, {
        getCloseLabel: getCloseLabel,
        getFullscreenLabel: getFullscreenLabel,
        components: {
          CloseButton: HeaderClose,
          FullscreenButton: HeaderFullscreen
        },
        data: _this2.getViewData(),
        innerProps: { innerRef: _this2.getHeader }
      })) : null;
    };
  };

  var FirstChild = function FirstChild(_ref) {
    var children = _ref.children;
    return React.Children.toArray(children)[0] || null;
  };

  var ModalGateway = function (_Component) {
    inherits$1(ModalGateway, _Component);

    function ModalGateway() {
      classCallCheck$1(this, ModalGateway);
      return possibleConstructorReturn$1(this, (ModalGateway.__proto__ || Object.getPrototypeOf(ModalGateway)).apply(this, arguments));
    }

    createClass$1(ModalGateway, [{
      key: 'render',
      value: function render() {
        if (typeof window === 'undefined') return null;
        var _props = this.props,
            target = _props.target,
            children = _props.children;

        return reactDom.createPortal(React__default.createElement(reactTransitionGroup_2, { component: FirstChild, children: children }), target);
      }
    }]);
    return ModalGateway;
  }(React.Component);

  ModalGateway.defaultProps = {
    target: typeof window !== 'undefined' ? document.body : null
  };

  var CheckButton = function (_Component) {
    inherits(CheckButton, _Component);

    function CheckButton(props) {
      var _this;

      classCallCheck(this, CheckButton);

      _this = possibleConstructorReturn(this, getPrototypeOf(CheckButton).call(this, props));
      _this.state = {
        hover: _this.props.hover
      };
      _this.fill = _this.fill.bind(assertThisInitialized(_this));
      _this.visibility = _this.visibility.bind(assertThisInitialized(_this));
      return _this;
    }

    createClass(CheckButton, [{
      key: "fill",
      value: function fill() {
        if (this.props.isSelected) return this.props.selectedColor;else if (this.state.hover) return this.props.hoverColor;
        return this.props.color;
      }
    }, {
      key: "visibility",
      value: function visibility() {
        if (this.props.isSelected || this.props.isSelectable && this.props.parentHover) return 'visible';
        return 'hidden';
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var circleStyle = {
          display: this.props.isSelected ? 'block' : 'none'
        };
        return React__default.createElement("div", {
          title: "Select",
          style: {
            visibility: this.visibility(),
            background: 'none',
            float: 'left',
            width: '36px',
            height: '36px',
            border: 'none',
            padding: '6px',
            cursor: 'pointer',
            pointerEvents: 'visible'
          },
          onClick: this.props.onClick ? function (e) {
            return _this2.props.onClick(_this2.props.index, e);
          } : null,
          onMouseOver: function onMouseOver(e) {
            return _this2.setState({
              hover: true
            });
          },
          onMouseOut: function onMouseOut(e) {
            return _this2.setState({
              hover: false
            });
          }
        }, React__default.createElement("svg", {
          fill: this.fill(),
          height: "24",
          viewBox: "0 0 24 24",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg"
        }, React__default.createElement("radialGradient", {
          id: "shadow",
          cx: "38",
          cy: "95.488",
          r: "10.488",
          gradientTransform: "matrix(1 0 0 -1 -26 109)",
          gradientUnits: "userSpaceOnUse"
        }, React__default.createElement("stop", {
          offset: ".832",
          stopColor: "#010101"
        }), React__default.createElement("stop", {
          offset: "1",
          stopColor: "#010101",
          stopOpacity: "0"
        })), React__default.createElement("circle", {
          style: circleStyle,
          opacity: ".26",
          fill: "url(#shadow)",
          cx: "12",
          cy: "13.512",
          r: "10.488"
        }), React__default.createElement("circle", {
          style: circleStyle,
          fill: "#FFF",
          cx: "12",
          cy: "12.2",
          r: "8.292"
        }), React__default.createElement("path", {
          d: "M0 0h24v24H0z",
          fill: "none"
        }), React__default.createElement("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        })));
      }
    }]);

    return CheckButton;
  }(React.Component);

  CheckButton.propTypes = {
    index: PropTypes$1.number,
    color: PropTypes$1.string,
    isSelectable: PropTypes$1.bool,
    isSelected: PropTypes$1.bool,
    selectedColor: PropTypes$1.string,
    parentHover: PropTypes$1.bool,
    hover: PropTypes$1.bool,
    hoverColor: PropTypes$1.string,
    onClick: PropTypes$1.func
  };
  CheckButton.defaultProps = {
    isSelectable: true,
    isSelected: false,
    parentHover: false,
    hover: false
  };

  var Image = function (_Component) {
    inherits(Image, _Component);

    function Image(props) {
      var _this;

      classCallCheck(this, Image);

      _this = possibleConstructorReturn(this, getPrototypeOf(Image).call(this, props));
      _this.state = {
        hover: false
      };
      return _this;
    }

    createClass(Image, [{
      key: "tagStyle",
      value: function tagStyle() {
        if (this.props.tagStyle) return this.props.tagStyle;
        return {
          display: 'inline',
          padding: '.2em .6em .3em',
          fontSize: '75%',
          fontWeight: '600',
          lineHeight: '1',
          color: 'yellow',
          background: 'rgba(0,0,0,0.65)',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          verticalAlign: 'baseline',
          borderRadius: '.25em'
        };
      }
    }, {
      key: "tileViewportStyle",
      value: function tileViewportStyle() {
        if (this.props.tileViewportStyle) return this.props.tileViewportStyle.call(this);
        var nanoBase64Backgorund = {};

        if (this.props.item.nano) {
          nanoBase64Backgorund = {
            background: "url(".concat(this.props.item.nano, ")"),
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          };
        }

        if (this.props.item.isSelected) return Object.assign({
          width: this.props.item.vwidth - 32,
          height: this.props.height - 32,
          margin: 16,
          overflow: 'hidden'
        }, nanoBase64Backgorund);
        return Object.assign({
          width: this.props.item.vwidth,
          height: this.props.height,
          overflow: 'hidden'
        }, nanoBase64Backgorund);
      }
    }, {
      key: "thumbnailStyle",
      value: function thumbnailStyle() {
        if (this.props.thumbnailStyle) return this.props.thumbnailStyle.call(this);
        var rotationTransformValue = undefined;

        switch (this.props.item.orientation) {
          case 3:
            rotationTransformValue = 'rotate(180deg)';
            break;

          case 6:
            rotationTransformValue = 'rotate(90deg)';
            break;

          case 8:
            rotationTransformValue = 'rotate(270deg)';
            break;

          case 2:
            rotationTransformValue = 'rotateY(180deg)';
            break;

          case 4:
            rotationTransformValue = 'rotate(180deg) rotateY(180deg)';
            break;

          case 5:
            rotationTransformValue = 'rotate(270deg) rotateY(180deg)';
            break;

          case 7:
            rotationTransformValue = 'rotate(90deg) rotateY(180deg)';
            break;
        }

        if (this.props.item.isSelected) {
          var ratio = this.props.item.scaletwidth / this.props.height;
          var height = 0;
          var width = 0;
          var viewportHeight = this.props.height - 32;
          var viewportWidth = this.props.item.vwidth - 32;

          if (this.props.item.scaletwidth > this.props.height) {
            width = this.props.item.scaletwidth - 32;
            height = Math.floor(width / ratio);
          } else {
            height = this.props.height - 32;
            width = Math.floor(height * ratio);
          }

          var marginTop = -Math.abs(Math.floor((viewportHeight - height) / 2));
          var marginLeft = -Math.abs(Math.floor((viewportWidth - width) / 2));
          return {
            cursor: 'pointer',
            width: width,
            height: height,
            marginLeft: marginLeft,
            marginTop: marginTop,
            transform: rotationTransformValue
          };
        }

        return {
          cursor: 'pointer',
          width: this.props.item.scaletwidth,
          height: this.props.height,
          marginLeft: this.props.item.marginLeft,
          marginTop: 0,
          transform: rotationTransformValue
        };
      }
    }, {
      key: "renderCheckButton",
      value: function renderCheckButton() {
        return React__default.createElement(CheckButton, {
          key: "Select",
          index: this.props.index,
          color: 'rgba(255, 255, 255, 0.7)',
          selectedColor: '#4285f4',
          hoverColor: 'rgba(255, 255, 255, 1)',
          isSelected: this.props.item.isSelected,
          isSelectable: this.props.isSelectable,
          onClick: this.props.isSelectable ? this.props.onSelectImage : null,
          parentHover: this.state.hover
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var alt = this.props.item.alt ? this.props.item.alt : '';
        var tags = typeof this.props.item.tags === 'undefined' ? React__default.createElement("noscript", null) : this.props.item.tags.map(function (tag) {
          return React__default.createElement("div", {
            title: tag.title,
            key: 'tag-' + tag.value,
            style: {
              display: 'inline-block',
              cursor: 'pointer',
              pointerEvents: 'visible',
              margin: '2px'
            }
          }, React__default.createElement("span", {
            style: _this2.tagStyle()
          }, tag.value));
        });
        var customOverlay = typeof this.props.item.customOverlay === 'undefined' ? React__default.createElement("noscript", null) : React__default.createElement("div", {
          className: "custom-overlay",
          key: 'custom-overlay-' + this.props.index,
          style: {
            pointerEvents: 'none',
            opacity: this.state.hover ? 1 : 0,
            position: 'absolute',
            height: '100%',
            width: '100%'
          }
        }, this.props.item.customOverlay);
        var DirItem = null;

        if (this.props.DirItem) {
          DirItem = this.props.DirItem;
        }

        var isDir = this.props.item.isDir;
        var propClick = this.props.onClick ? function (e) {
          return _this2.props.onClick.call(_this2, _this2.props.index, e);
        } : null;

        if (isDir) {
          propClick = null;
        }

        return React__default.createElement("div", {
          className: "tile",
          key: 'tile-' + this.props.index,
          onMouseEnter: function onMouseEnter(e) {
            return _this2.setState({
              hover: true
            });
          },
          onMouseLeave: function onMouseLeave(e) {
            return _this2.setState({
              hover: false
            });
          },
          style: {
            margin: this.props.margin,
            WebkitUserSelect: 'none',
            position: 'relative',
            float: 'left',
            background: '#eee',
            padding: '0px'
          }
        }, React__default.createElement("div", {
          className: "tile-icon-bar",
          key: 'tile-icon-bar-' + this.props.index,
          style: {
            pointerEvents: 'none',
            opacity: 1,
            position: 'absolute',
            height: '36px',
            width: '100%'
          }
        }, this.renderCheckButton()), React__default.createElement("div", {
          className: "tile-bottom-bar",
          key: 'tile-bottom-bar-' + this.props.index,
          style: {
            padding: '2px',
            pointerEvents: 'none',
            position: 'absolute',
            minHeight: '0px',
            maxHeight: '160px',
            width: '100%',
            bottom: '0px',
            overflow: 'hidden'
          }
        }, tags), customOverlay, React__default.createElement("div", {
          className: "tile-overlay",
          key: 'tile-overlay-' + this.props.index,
          style: {
            pointerEvents: 'none',
            opacity: 1,
            position: 'absolute',
            height: '100%',
            width: '100%',
            background: this.state.hover && !this.props.item.isSelected && this.props.isSelectable ? 'linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)' : 'none'
          }
        }), React__default.createElement("div", {
          className: "tile-viewport",
          style: this.tileViewportStyle(),
          key: 'tile-viewport-' + this.props.index,
          onClick: propClick
        }, !isDir ? React__default.createElement("img", {
          key: 'img-' + this.props.index,
          src: this.props.item.thumbnail,
          alt: alt,
          title: this.props.item.caption,
          style: this.thumbnailStyle()
        }) : DirItem ? React__default.createElement(DirItem, {
          item: this.props.item
        }) : null), this.props.item.thumbnailCaption && React__default.createElement("div", {
          className: "tile-description",
          style: {
            background: 'white',
            height: '100%',
            width: '100%',
            margin: 0,
            userSelect: 'text',
            WebkitUserSelect: 'text',
            MozUserSelect: 'text',
            overflow: 'hidden'
          }
        }, this.props.item.thumbnailCaption));
      }
    }]);

    return Image;
  }(React.Component);

  Image.propTypes = {
    item: PropTypes$1.object,
    index: PropTypes$1.number,
    margin: PropTypes$1.number,
    height: PropTypes$1.number,
    isSelectable: PropTypes$1.bool,
    onClick: PropTypes$1.func,
    onSelectImage: PropTypes$1.func,
    tileViewportStyle: PropTypes$1.func,
    thumbnailStyle: PropTypes$1.func,
    tagStyle: PropTypes$1.object,
    customOverlay: PropTypes$1.element
  };
  Image.defaultProps = {
    isSelectable: true,
    hover: false
  };

  var Gallery = function (_Component) {
    inherits(Gallery, _Component);

    function Gallery(props) {
      var _this;

      classCallCheck(this, Gallery);

      _this = possibleConstructorReturn(this, getPrototypeOf(Gallery).call(this, props));
      _this.state = {
        images: _this.props.images,
        thumbnails: [],
        lightboxIsOpen: _this.props.isOpen,
        currentImage: _this.props.currentImage,
        containerWidth: 0
      };
      _this.onResize = _this.onResize.bind(assertThisInitialized(_this));
      _this.closeLightbox = _this.closeLightbox.bind(assertThisInitialized(_this));
      _this.gotoImage = _this.gotoImage.bind(assertThisInitialized(_this));
      _this.gotoNext = _this.gotoNext.bind(assertThisInitialized(_this));
      _this.gotoPrevious = _this.gotoPrevious.bind(assertThisInitialized(_this));
      _this.onClickImage = _this.onClickImage.bind(assertThisInitialized(_this));
      _this.openLightbox = _this.openLightbox.bind(assertThisInitialized(_this));
      _this.onSelectImage = _this.onSelectImage.bind(assertThisInitialized(_this));
      return _this;
    }

    createClass(Gallery, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.onResize();
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(np) {
        if (this.state.images != np.images || this.props.maxRows != np.maxRows) {
          this.setState({
            images: np.images,
            thumbnails: this.renderThumbs(this._gallery.clientWidth, np.images)
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (!this._gallery) return;

        if (this._gallery.clientWidth !== this.state.containerWidth) {
          this.onResize();
        }
      }
    }, {
      key: "onResize",
      value: function onResize() {
        if (!this._gallery) return;
        this.setState({
          containerWidth: Math.floor(this._gallery.clientWidth),
          thumbnails: this.renderThumbs(this._gallery.clientWidth)
        });
      }
    }, {
      key: "openLightbox",
      value: function openLightbox(index, event) {
        if (event) {
          event.preventDefault();
        }

        if (this.props.lightboxWillOpen) {
          this.props.lightboxWillOpen.call(this, index);
        }

        if (this.props.currentImageWillChange) {
          this.props.currentImageWillChange.call(this, index);
        }

        this.setState({
          currentImage: index,
          lightboxIsOpen: true
        });
      }
    }, {
      key: "closeLightbox",
      value: function closeLightbox() {
        if (this.props.lightboxWillClose) {
          this.props.lightboxWillClose.call(this);
        }

        if (this.props.currentImageWillChange) {
          this.props.currentImageWillChange.call(this, 0);
        }

        this.setState({
          currentImage: 0,
          lightboxIsOpen: false
        });
      }
    }, {
      key: "gotoPrevious",
      value: function gotoPrevious() {
        if (this.props.currentImageWillChange) {
          this.props.currentImageWillChange.call(this, this.state.currentImage - 1);
        }

        this.setState({
          currentImage: this.state.currentImage - 1
        });
      }
    }, {
      key: "gotoNext",
      value: function gotoNext() {
        if (this.props.currentImageWillChange) {
          this.props.currentImageWillChange.call(this, this.state.currentImage + 1);
        }

        this.setState({
          currentImage: this.state.currentImage + 1
        });
      }
    }, {
      key: "onClickImage",
      value: function onClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return;
        this.gotoNext();
      }
    }, {
      key: "onSelectImage",
      value: function onSelectImage(index, event) {
        event.preventDefault();
        if (this.props.onSelectImage) this.props.onSelectImage.call(this, index, this.state.images[index]);
      }
    }, {
      key: "gotoImage",
      value: function gotoImage(index) {
        if (this.props.currentImageWillChange) {
          this.props.currentImageWillChange.call(this, index);
        }

        this.setState({
          currentImage: index
        });
      }
    }, {
      key: "getOnClickThumbnailFn",
      value: function getOnClickThumbnailFn() {
        if (!this.props.onClickThumbnail && this.props.enableLightbox) return this.openLightbox;
        if (this.props.onClickThumbnail) return this.props.onClickThumbnail;
        return null;
      }
    }, {
      key: "getOnClickLightboxThumbnailFn",
      value: function getOnClickLightboxThumbnailFn() {
        if (!this.props.onClickLightboxThumbnail && this.props.showLightboxThumbnails) return this.gotoImage;
        if (this.props.onClickLightboxThumbnail && this.props.showLightboxThumbnails) return this.props.onClickLightboxThumbnail;
        return null;
      }
    }, {
      key: "getOnClickImageFn",
      value: function getOnClickImageFn() {
        if (this.props.onClickImage) return this.props.onClickImage;
        return this.onClickImage;
      }
    }, {
      key: "getOnClickPrevFn",
      value: function getOnClickPrevFn() {
        if (this.props.onClickPrev) return this.props.onClickPrev;
        return this.gotoPrevious;
      }
    }, {
      key: "getOnClickNextFn",
      value: function getOnClickNextFn() {
        if (this.props.onClickNext) return this.props.onClickNext;
        return this.gotoNext;
      }
    }, {
      key: "calculateCutOff",
      value: function calculateCutOff(len, delta, items) {
        var cutoff = [];
        var cutsum = 0;

        for (var i in items) {
          var item = items[i];
          var fractOfLen = item.scaletwidth / len;
          cutoff[i] = Math.floor(fractOfLen * delta);
          cutsum += cutoff[i];
        }

        var stillToCutOff = delta - cutsum;

        while (stillToCutOff > 0) {
          for (i in cutoff) {
            cutoff[i]++;
            stillToCutOff--;
            if (stillToCutOff < 0) break;
          }
        }

        return cutoff;
      }
    }, {
      key: "buildImageRow",
      value: function buildImageRow(items, containerWidth) {
        var row = [];
        var len = 0;
        var imgMargin = 2 * this.props.margin;

        while (items.length > 0 && len < containerWidth) {
          var item = items.shift();
          row.push(item);
          len += item.scaletwidth + imgMargin;
        }

        var delta = len - containerWidth;

        if (row.length > 0 && delta > 0) {
          var cutoff = this.calculateCutOff(len, delta, row);

          for (var i in row) {
            var pixelsToRemove = cutoff[i];
            item = row[i];
            item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
            item.vwidth = item.scaletwidth - pixelsToRemove;
          }
        } else {
          for (var j in row) {
            item = row[j];
            item.marginLeft = 0;
            item.vwidth = item.scaletwidth;
          }
        }

        return row;
      }
    }, {
      key: "setThumbScale",
      value: function setThumbScale(item) {
        item.scaletwidth = Math.floor(this.props.rowHeight * (item.thumbnailWidth / item.thumbnailHeight));
      }
    }, {
      key: "renderThumbs",
      value: function renderThumbs(containerWidth) {
        var images = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.images;
        if (!images) return [];
        if (containerWidth === 0) return [];
        var items = images.slice();

        for (var t in items) {
          this.setThumbScale(items[t]);
        }

        var thumbs = [];
        var rows = [];

        while (items.length > 0) {
          rows.push(this.buildImageRow(items, containerWidth));
        }

        for (var r in rows) {
          for (var i in rows[r]) {
            var item = rows[r][i];

            if (this.props.maxRows) {
              if (r < this.props.maxRows) {
                thumbs.push(item);
              }
            } else {
              thumbs.push(item);
            }
          }
        }

        return thumbs;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var images = this.state.thumbnails.map(function (item, idx) {
          return React__default.createElement(Image, {
            key: 'Image-' + idx + '-' + item.src,
            item: item,
            index: idx,
            DirItem: _this2.props.DirItem,
            margin: _this2.props.margin,
            height: _this2.props.rowHeight,
            isSelectable: _this2.props.enableImageSelection,
            onClick: _this2.getOnClickThumbnailFn(),
            onSelectImage: _this2.onSelectImage,
            tagStyle: _this2.props.tagStyle,
            tileViewportStyle: _this2.props.tileViewportStyle,
            thumbnailStyle: _this2.props.thumbnailStyle
          });
        });
        var resizeIframeStyles = {
          height: 0,
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          borderWidth: 0,
          position: 'fixed',
          backgroundColor: 'transparent',
          width: '100%'
        };
        return React__default.createElement("div", {
          id: this.props.id,
          className: "ReactGridGallery",
          ref: function ref(c) {
            return _this2._gallery = c;
          }
        }, React__default.createElement("iframe", {
          style: resizeIframeStyles,
          ref: function ref(c) {
            return c && c.contentWindow && c.contentWindow.addEventListener('resize', _this2.onResize);
          }
        }), images, React__default.createElement(Carousel$1, {
          images: this.props.images,
          backdropClosesModal: this.props.backdropClosesModal,
          currentImage: this.state.currentImage,
          preloadNextImage: this.props.preloadNextImage,
          customControls: this.props.customControls,
          enableKeyboardInput: this.props.enableKeyboardInput,
          imageCountSeparator: this.props.imageCountSeparator,
          isOpen: this.state.lightboxIsOpen,
          onClickImage: this.getOnClickImageFn(),
          onClickNext: this.getOnClickNextFn(),
          onClickPrev: this.getOnClickPrevFn(),
          showCloseButton: this.props.showCloseButton,
          showImageCount: this.props.showImageCount,
          onClose: this.closeLightbox,
          width: this.props.lightboxWidth,
          theme: this.props.theme,
          onClickThumbnail: this.getOnClickLightboxThumbnailFn(),
          showThumbnails: this.props.showLightboxThumbnails
        }));
      }
    }]);

    return Gallery;
  }(React.Component);

  Gallery.displayName = 'Gallery';
  Gallery.propTypes = {
    images: PropTypes$1.arrayOf(PropTypes$1.shape({
      src: PropTypes$1.string.isRequired,
      nano: PropTypes$1.string,
      alt: PropTypes$1.string,
      thumbnail: PropTypes$1.string.isRequired,
      srcset: PropTypes$1.array,
      caption: PropTypes$1.string,
      tags: PropTypes$1.arrayOf(PropTypes$1.shape({
        value: PropTypes$1.string.isRequired,
        title: PropTypes$1.string.isRequired
      })),
      thumbnailWidth: PropTypes$1.number.isRequired,
      thumbnailHeight: PropTypes$1.number.isRequired,
      isSelected: PropTypes$1.bool,
      thumbnailCaption: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.element])
    })).isRequired,
    id: PropTypes$1.string,
    enableImageSelection: PropTypes$1.bool,
    onSelectImage: PropTypes$1.func,
    rowHeight: PropTypes$1.number,
    maxRows: PropTypes$1.number,
    margin: PropTypes$1.number,
    onClickThumbnail: PropTypes$1.func,
    lightboxWillOpen: PropTypes$1.func,
    lightboxWillClose: PropTypes$1.func,
    enableLightbox: PropTypes$1.bool,
    backdropClosesModal: PropTypes$1.bool,
    currentImage: PropTypes$1.number,
    preloadNextImage: PropTypes$1.bool,
    customControls: PropTypes$1.arrayOf(PropTypes$1.node),
    currentImageWillChange: PropTypes$1.func,
    enableKeyboardInput: PropTypes$1.bool,
    imageCountSeparator: PropTypes$1.string,
    isOpen: PropTypes$1.bool,
    onClickImage: PropTypes$1.func,
    onClickNext: PropTypes$1.func,
    onClickPrev: PropTypes$1.func,
    onClose: PropTypes$1.func,
    showCloseButton: PropTypes$1.bool,
    showImageCount: PropTypes$1.bool,
    lightboxWidth: PropTypes$1.number,
    tileViewportStyle: PropTypes$1.func,
    thumbnailStyle: PropTypes$1.func,
    showLightboxThumbnails: PropTypes$1.bool,
    onClickLightboxThumbnail: PropTypes$1.func,
    tagStyle: PropTypes$1.object
  };
  Gallery.defaultProps = {
    id: 'ReactGridGallery',
    enableImageSelection: true,
    rowHeight: 180,
    margin: 2,
    enableLightbox: true,
    backdropClosesModal: false,
    currentImage: 0,
    preloadNextImage: true,
    enableKeyboardInput: true,
    imageCountSeparator: ' of ',
    isOpen: false,
    showCloseButton: true,
    showImageCount: true,
    lightboxWidth: 1024,
    showLightboxThumbnails: false
  };

  return Gallery;

})));
