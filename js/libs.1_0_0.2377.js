/*! imetriq v1.0.0 | (c) 2021  | ISC License | git+https://github.com/jelicich/imetriq.git */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.i18next = factory());
  }(this, (function () { 'use strict';
  
    function _typeof(obj) {
      "@babel/helpers - typeof";
  
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }
  
      return _typeof(obj);
    }
  
    function _defineProperty(obj, key, value) {
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
    }
  
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? Object(arguments[i]) : {};
        var ownKeys = Object.keys(source);
  
        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          })));
        }
  
        ownKeys.forEach((function (key) {
          _defineProperty(target, key, source[key]);
        }));
      }
  
      return target;
    }
  
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
  
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
  
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
  
      return self;
    }
  
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
  
      return _assertThisInitialized(self);
    }
  
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }
  
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  
      return _setPrototypeOf(o, p);
    }
  
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
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
  
    var consoleLogger = {
      type: 'logger',
      log: function log(args) {
        this.output('log', args);
      },
      warn: function warn(args) {
        this.output('warn', args);
      },
      error: function error(args) {
        this.output('error', args);
      },
      output: function output(type, args) {
        if (console && console[type]) console[type].apply(console, args);
      }
    };
  
    var Logger = (function () {
      function Logger(concreteLogger) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        _classCallCheck(this, Logger);
  
        this.init(concreteLogger, options);
      }
  
      _createClass(Logger, [{
        key: "init",
        value: function init(concreteLogger) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.prefix = options.prefix || 'i18next:';
          this.logger = concreteLogger || consoleLogger;
          this.options = options;
          this.debug = options.debug;
        }
      }, {
        key: "setDebug",
        value: function setDebug(bool) {
          this.debug = bool;
        }
      }, {
        key: "log",
        value: function log() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
  
          return this.forward(args, 'log', '', true);
        }
      }, {
        key: "warn",
        value: function warn() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
  
          return this.forward(args, 'warn', '', true);
        }
      }, {
        key: "error",
        value: function error() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
  
          return this.forward(args, 'error', '');
        }
      }, {
        key: "deprecate",
        value: function deprecate() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
  
          return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
        }
      }, {
        key: "forward",
        value: function forward(args, lvl, prefix, debugOnly) {
          if (debugOnly && !this.debug) return null;
          if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
          return this.logger[lvl](args);
        }
      }, {
        key: "create",
        value: function create(moduleName) {
          return new Logger(this.logger, _objectSpread({}, {
            prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
          }, this.options));
        }
      }]);
  
      return Logger;
    })();
  
    var baseLogger = new Logger();
  
    var EventEmitter = (function () {
      function EventEmitter() {
        _classCallCheck(this, EventEmitter);
  
        this.observers = {};
      }
  
      _createClass(EventEmitter, [{
        key: "on",
        value: function on(events, listener) {
          var _this = this;
  
          events.split(' ').forEach((function (event) {
            _this.observers[event] = _this.observers[event] || [];
  
            _this.observers[event].push(listener);
          }));
          return this;
        }
      }, {
        key: "off",
        value: function off(event, listener) {
          if (!this.observers[event]) return;
  
          if (!listener) {
            delete this.observers[event];
            return;
          }
  
          this.observers[event] = this.observers[event].filter((function (l) {
            return l !== listener;
          }));
        }
      }, {
        key: "emit",
        value: function emit(event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
  
          if (this.observers[event]) {
            var cloned = [].concat(this.observers[event]);
            cloned.forEach((function (observer) {
              observer.apply(void 0, args);
            }));
          }
  
          if (this.observers['*']) {
            var _cloned = [].concat(this.observers['*']);
  
            _cloned.forEach((function (observer) {
              observer.apply(observer, [event].concat(args));
            }));
          }
        }
      }]);
  
      return EventEmitter;
    })();
  
    function defer() {
      var res;
      var rej;
      var promise = new Promise(function (resolve, reject) {
        res = resolve;
        rej = reject;
      });
      promise.resolve = res;
      promise.reject = rej;
      return promise;
    }
    function makeString(object) {
      if (object == null) return '';
      return '' + object;
    }
    function copy(a, s, t) {
      a.forEach((function (m) {
        if (s[m]) t[m] = s[m];
      }));
    }
  
    function getLastOfPath(object, path, Empty) {
      function cleanKey(key) {
        return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
      }
  
      function canNotTraverseDeeper() {
        return !object || typeof object === 'string';
      }
  
      var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
  
      while (stack.length > 1) {
        if (canNotTraverseDeeper()) return {};
        var key = cleanKey(stack.shift());
        if (!object[key] && Empty) object[key] = new Empty();
        object = object[key];
      }
  
      if (canNotTraverseDeeper()) return {};
      return {
        obj: object,
        k: cleanKey(stack.shift())
      };
    }
  
    function setPath(object, path, newValue) {
      var _getLastOfPath = getLastOfPath(object, path, Object),
          obj = _getLastOfPath.obj,
          k = _getLastOfPath.k;
  
      obj[k] = newValue;
    }
    function pushPath(object, path, newValue, concat) {
      var _getLastOfPath2 = getLastOfPath(object, path, Object),
          obj = _getLastOfPath2.obj,
          k = _getLastOfPath2.k;
  
      obj[k] = obj[k] || [];
      if (concat) obj[k] = obj[k].concat(newValue);
      if (!concat) obj[k].push(newValue);
    }
    function getPath(object, path) {
      var _getLastOfPath3 = getLastOfPath(object, path),
          obj = _getLastOfPath3.obj,
          k = _getLastOfPath3.k;
  
      if (!obj) return undefined;
      return obj[k];
    }
    function getPathWithDefaults(data, defaultData, key) {
      var value = getPath(data, key);
  
      if (value !== undefined) {
        return value;
      }
  
      return getPath(defaultData, key);
    }
    function deepExtend(target, source, overwrite) {
      for (var prop in source) {
        if (prop !== '__proto__') {
          if (prop in target) {
            if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
              if (overwrite) target[prop] = source[prop];
            } else {
              deepExtend(target[prop], source[prop], overwrite);
            }
          } else {
            target[prop] = source[prop];
          }
        }
      }
  
      return target;
    }
    function regexEscape(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
    var _entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;'
    };
    function escape(data) {
      if (typeof data === 'string') {
        return data.replace(/[&<>"'\/]/g, (function (s) {
          return _entityMap[s];
        }));
      }
  
      return data;
    }
    var isIE10 = typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
  
    var ResourceStore = (function (_EventEmitter) {
      _inherits(ResourceStore, _EventEmitter);
  
      function ResourceStore(data) {
        var _this;
  
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          ns: ['translation'],
          defaultNS: 'translation'
        };
  
        _classCallCheck(this, ResourceStore);
  
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ResourceStore).call(this));
  
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
  
        _this.data = data || {};
        _this.options = options;
  
        if (_this.options.keySeparator === undefined) {
          _this.options.keySeparator = '.';
        }
  
        return _this;
      }
  
      _createClass(ResourceStore, [{
        key: "addNamespaces",
        value: function addNamespaces(ns) {
          if (this.options.ns.indexOf(ns) < 0) {
            this.options.ns.push(ns);
          }
        }
      }, {
        key: "removeNamespaces",
        value: function removeNamespaces(ns) {
          var index = this.options.ns.indexOf(ns);
  
          if (index > -1) {
            this.options.ns.splice(index, 1);
          }
        }
      }, {
        key: "getResource",
        value: function getResource(lng, ns, key) {
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
          var path = [lng, ns];
          if (key && typeof key !== 'string') path = path.concat(key);
          if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);
  
          if (lng.indexOf('.') > -1) {
            path = lng.split('.');
          }
  
          return getPath(this.data, path);
        }
      }, {
        key: "addResource",
        value: function addResource(lng, ns, key, value) {
          var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
            silent: false
          };
          var keySeparator = this.options.keySeparator;
          if (keySeparator === undefined) keySeparator = '.';
          var path = [lng, ns];
          if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
  
          if (lng.indexOf('.') > -1) {
            path = lng.split('.');
            value = ns;
            ns = path[1];
          }
  
          this.addNamespaces(ns);
          setPath(this.data, path, value);
          if (!options.silent) this.emit('added', lng, ns, key, value);
        }
      }, {
        key: "addResources",
        value: function addResources(lng, ns, resources) {
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
            silent: false
          };
  
          for (var m in resources) {
            if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
              silent: true
            });
          }
  
          if (!options.silent) this.emit('added', lng, ns, resources);
        }
      }, {
        key: "addResourceBundle",
        value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
          var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
            silent: false
          };
          var path = [lng, ns];
  
          if (lng.indexOf('.') > -1) {
            path = lng.split('.');
            deep = resources;
            resources = ns;
            ns = path[1];
          }
  
          this.addNamespaces(ns);
          var pack = getPath(this.data, path) || {};
  
          if (deep) {
            deepExtend(pack, resources, overwrite);
          } else {
            pack = _objectSpread({}, pack, resources);
          }
  
          setPath(this.data, path, pack);
          if (!options.silent) this.emit('added', lng, ns, resources);
        }
      }, {
        key: "removeResourceBundle",
        value: function removeResourceBundle(lng, ns) {
          if (this.hasResourceBundle(lng, ns)) {
            delete this.data[lng][ns];
          }
  
          this.removeNamespaces(ns);
          this.emit('removed', lng, ns);
        }
      }, {
        key: "hasResourceBundle",
        value: function hasResourceBundle(lng, ns) {
          return this.getResource(lng, ns) !== undefined;
        }
      }, {
        key: "getResourceBundle",
        value: function getResourceBundle(lng, ns) {
          if (!ns) ns = this.options.defaultNS;
          if (this.options.compatibilityAPI === 'v1') return _objectSpread({}, {}, this.getResource(lng, ns));
          return this.getResource(lng, ns);
        }
      }, {
        key: "getDataByLanguage",
        value: function getDataByLanguage(lng) {
          return this.data[lng];
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return this.data;
        }
      }]);
  
      return ResourceStore;
    })(EventEmitter);
  
    var postProcessor = {
      processors: {},
      addPostProcessor: function addPostProcessor(module) {
        this.processors[module.name] = module;
      },
      handle: function handle(processors, value, key, options, translator) {
        var _this = this;
  
        processors.forEach((function (processor) {
          if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
        }));
        return value;
      }
    };
  
    var checkedLoadedFor = {};
  
    var Translator = (function (_EventEmitter) {
      _inherits(Translator, _EventEmitter);
  
      function Translator(services) {
        var _this;
  
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        _classCallCheck(this, Translator);
  
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Translator).call(this));
  
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
  
        copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this));
        _this.options = options;
  
        if (_this.options.keySeparator === undefined) {
          _this.options.keySeparator = '.';
        }
  
        _this.logger = baseLogger.create('translator');
        return _this;
      }
  
      _createClass(Translator, [{
        key: "changeLanguage",
        value: function changeLanguage(lng) {
          if (lng) this.language = lng;
        }
      }, {
        key: "exists",
        value: function exists(key) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            interpolation: {}
          };
          var resolved = this.resolve(key, options);
          return resolved && resolved.res !== undefined;
        }
      }, {
        key: "extractFromKey",
        value: function extractFromKey(key, options) {
          var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
          if (nsSeparator === undefined) nsSeparator = ':';
          var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
          var namespaces = options.ns || this.options.defaultNS;
  
          if (nsSeparator && key.indexOf(nsSeparator) > -1) {
            var m = key.match(this.interpolator.nestingRegexp);
  
            if (m && m.length > 0) {
              return {
                key: key,
                namespaces: namespaces
              };
            }
  
            var parts = key.split(nsSeparator);
            if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
            key = parts.join(keySeparator);
          }
  
          if (typeof namespaces === 'string') namespaces = [namespaces];
          return {
            key: key,
            namespaces: namespaces
          };
        }
      }, {
        key: "translate",
        value: function translate(keys, options, lastKey) {
          var _this2 = this;
  
          if (_typeof(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
            options = this.options.overloadTranslationOptionHandler(arguments);
          }
  
          if (!options) options = {};
          if (keys === undefined || keys === null) return '';
          if (!Array.isArray(keys)) keys = [String(keys)];
          var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
  
          var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
              key = _this$extractFromKey.key,
              namespaces = _this$extractFromKey.namespaces;
  
          var namespace = namespaces[namespaces.length - 1];
          var lng = options.lng || this.language;
          var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
  
          if (lng && lng.toLowerCase() === 'cimode') {
            if (appendNamespaceToCIMode) {
              var nsSeparator = options.nsSeparator || this.options.nsSeparator;
              return namespace + nsSeparator + key;
            }
  
            return key;
          }
  
          var resolved = this.resolve(keys, options);
          var res = resolved && resolved.res;
          var resUsedKey = resolved && resolved.usedKey || key;
          var resExactUsedKey = resolved && resolved.exactUsedKey || key;
          var resType = Object.prototype.toString.apply(res);
          var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
          var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
          var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
          var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';
  
          if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
            if (!options.returnObjects && !this.options.returnObjects) {
              this.logger.warn('accessing an object - but returnObjects options is not enabled!');
              return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
            }
  
            if (keySeparator) {
              var resTypeIsArray = resType === '[object Array]';
              var copy$$1 = resTypeIsArray ? [] : {};
              var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
  
              for (var m in res) {
                if (Object.prototype.hasOwnProperty.call(res, m)) {
                  var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
                  copy$$1[m] = this.translate(deepKey, _objectSpread({}, options, {
                    joinArrays: false,
                    ns: namespaces
                  }));
                  if (copy$$1[m] === deepKey) copy$$1[m] = res[m];
                }
              }
  
              res = copy$$1;
            }
          } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
            res = res.join(joinArrays);
            if (res) res = this.extendTranslation(res, keys, options, lastKey);
          } else {
            var usedDefault = false;
            var usedKey = false;
  
            if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
              usedDefault = true;
  
              if (options.count !== undefined) {
                var suffix = this.pluralResolver.getSuffix(lng, options.count);
                res = options["defaultValue".concat(suffix)];
              }
  
              if (!res) res = options.defaultValue;
            }
  
            if (!this.isValidLookup(res)) {
              usedKey = true;
              res = key;
            }
  
            var updateMissing = options.defaultValue && options.defaultValue !== res && this.options.updateMissing;
  
            if (usedKey || usedDefault || updateMissing) {
              this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? options.defaultValue : res);
  
              if (keySeparator) {
                var fk = this.resolve(key, _objectSpread({}, options, {
                  keySeparator: false
                }));
                if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
              }
  
              var lngs = [];
              var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
  
              if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
                for (var i = 0; i < fallbackLngs.length; i++) {
                  lngs.push(fallbackLngs[i]);
                }
              } else if (this.options.saveMissingTo === 'all') {
                lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
              } else {
                lngs.push(options.lng || this.language);
              }
  
              var send = function send(l, k) {
                if (_this2.options.missingKeyHandler) {
                  _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
                } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
                  _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
                }
  
                _this2.emit('missingKey', l, namespace, k, res);
              };
  
              if (this.options.saveMissing) {
                var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
  
                if (this.options.saveMissingPlurals && needsPluralHandling) {
                  lngs.forEach((function (l) {
                    var plurals = _this2.pluralResolver.getPluralFormsOfKey(l, key);
  
                    plurals.forEach((function (p) {
                      return send([l], p);
                    }));
                  }));
                } else {
                  send(lngs, key);
                }
              }
            }
  
            res = this.extendTranslation(res, keys, options, resolved, lastKey);
            if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
            if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
          }
  
          return res;
        }
      }, {
        key: "extendTranslation",
        value: function extendTranslation(res, key, options, resolved, lastKey) {
          var _this3 = this;
  
          if (this.i18nFormat && this.i18nFormat.parse) {
            res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
              resolved: resolved
            });
          } else if (!options.skipInterpolation) {
            if (options.interpolation) this.interpolator.init(_objectSpread({}, options, {
              interpolation: _objectSpread({}, this.options.interpolation, options.interpolation)
            }));
            var skipOnVariables = options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
            var nestBef;
  
            if (skipOnVariables) {
              var nb = res.match(this.interpolator.nestingRegexp);
              nestBef = nb && nb.length;
            }
  
            var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
            if (this.options.interpolation.defaultVariables) data = _objectSpread({}, this.options.interpolation.defaultVariables, data);
            res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
  
            if (skipOnVariables) {
              var na = res.match(this.interpolator.nestingRegexp);
              var nestAft = na && na.length;
              if (nestBef < nestAft) options.nest = false;
            }
  
            if (options.nest !== false) res = this.interpolator.nest(res, (function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
  
              if (lastKey && lastKey[0] === args[0]) {
                _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
  
                return null;
              }
  
              return _this3.translate.apply(_this3, args.concat([key]));
            }), options);
            if (options.interpolation) this.interpolator.reset();
          }
  
          var postProcess = options.postProcess || this.options.postProcess;
          var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;
  
          if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
            res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread({
              i18nResolved: resolved
            }, options) : options, this);
          }
  
          return res;
        }
      }, {
        key: "resolve",
        value: function resolve(keys) {
          var _this4 = this;
  
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var found;
          var usedKey;
          var exactUsedKey;
          var usedLng;
          var usedNS;
          if (typeof keys === 'string') keys = [keys];
          keys.forEach((function (k) {
            if (_this4.isValidLookup(found)) return;
  
            var extracted = _this4.extractFromKey(k, options);
  
            var key = extracted.key;
            usedKey = key;
            var namespaces = extracted.namespaces;
            if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
            var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
            var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';
            var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
            namespaces.forEach((function (ns) {
              if (_this4.isValidLookup(found)) return;
              usedNS = ns;
  
              if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
                checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
  
                _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
              }
  
              codes.forEach((function (code) {
                if (_this4.isValidLookup(found)) return;
                usedLng = code;
                var finalKey = key;
                var finalKeys = [finalKey];
  
                if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
                  _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
                } else {
                  var pluralSuffix;
                  if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count);
                  if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);
                  if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context));
                  if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
                }
  
                var possibleKey;
  
                while (possibleKey = finalKeys.pop()) {
                  if (!_this4.isValidLookup(found)) {
                    exactUsedKey = possibleKey;
                    found = _this4.getResource(code, ns, possibleKey, options);
                  }
                }
              }));
            }));
          }));
          return {
            res: found,
            usedKey: usedKey,
            exactUsedKey: exactUsedKey,
            usedLng: usedLng,
            usedNS: usedNS
          };
        }
      }, {
        key: "isValidLookup",
        value: function isValidLookup(res) {
          return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
        }
      }, {
        key: "getResource",
        value: function getResource(code, ns, key) {
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
          return this.resourceStore.getResource(code, ns, key, options);
        }
      }]);
  
      return Translator;
    })(EventEmitter);
  
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    var LanguageUtil = (function () {
      function LanguageUtil(options) {
        _classCallCheck(this, LanguageUtil);
  
        this.options = options;
        this.whitelist = this.options.supportedLngs || false;
        this.supportedLngs = this.options.supportedLngs || false;
        this.logger = baseLogger.create('languageUtils');
      }
  
      _createClass(LanguageUtil, [{
        key: "getScriptPartFromCode",
        value: function getScriptPartFromCode(code) {
          if (!code || code.indexOf('-') < 0) return null;
          var p = code.split('-');
          if (p.length === 2) return null;
          p.pop();
          if (p[p.length - 1].toLowerCase() === 'x') return null;
          return this.formatLanguageCode(p.join('-'));
        }
      }, {
        key: "getLanguagePartFromCode",
        value: function getLanguagePartFromCode(code) {
          if (!code || code.indexOf('-') < 0) return code;
          var p = code.split('-');
          return this.formatLanguageCode(p[0]);
        }
      }, {
        key: "formatLanguageCode",
        value: function formatLanguageCode(code) {
          if (typeof code === 'string' && code.indexOf('-') > -1) {
            var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
            var p = code.split('-');
  
            if (this.options.lowerCaseLng) {
              p = p.map((function (part) {
                return part.toLowerCase();
              }));
            } else if (p.length === 2) {
              p[0] = p[0].toLowerCase();
              p[1] = p[1].toUpperCase();
              if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
            } else if (p.length === 3) {
              p[0] = p[0].toLowerCase();
              if (p[1].length === 2) p[1] = p[1].toUpperCase();
              if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
              if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
              if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
            }
  
            return p.join('-');
          }
  
          return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
        }
      }, {
        key: "isWhitelisted",
        value: function isWhitelisted(code) {
          this.logger.deprecate('languageUtils.isWhitelisted', 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.');
          return this.isSupportedCode(code);
        }
      }, {
        key: "isSupportedCode",
        value: function isSupportedCode(code) {
          if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
            code = this.getLanguagePartFromCode(code);
          }
  
          return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
        }
      }, {
        key: "getBestMatchFromCodes",
        value: function getBestMatchFromCodes(codes) {
          var _this = this;
  
          if (!codes) return null;
          var found;
          codes.forEach((function (code) {
            if (found) return;
  
            var cleanedLng = _this.formatLanguageCode(code);
  
            if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
          }));
  
          if (!found && this.options.supportedLngs) {
            codes.forEach((function (code) {
              if (found) return;
  
              var lngOnly = _this.getLanguagePartFromCode(code);
  
              if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
              found = _this.options.supportedLngs.find((function (supportedLng) {
                if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
              }));
            }));
          }
  
          if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
          return found;
        }
      }, {
        key: "getFallbackCodes",
        value: function getFallbackCodes(fallbacks, code) {
          if (!fallbacks) return [];
          if (typeof fallbacks === 'string') fallbacks = [fallbacks];
          if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
          if (!code) return fallbacks["default"] || [];
          var found = fallbacks[code];
          if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
          if (!found) found = fallbacks[this.formatLanguageCode(code)];
          if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
          if (!found) found = fallbacks["default"];
          return found || [];
        }
      }, {
        key: "toResolveHierarchy",
        value: function toResolveHierarchy(code, fallbackCode) {
          var _this2 = this;
  
          var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
          var codes = [];
  
          var addCode = function addCode(c) {
            if (!c) return;
  
            if (_this2.isSupportedCode(c)) {
              codes.push(c);
            } else {
              _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
            }
          };
  
          if (typeof code === 'string' && code.indexOf('-') > -1) {
            if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
            if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
            if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
          } else if (typeof code === 'string') {
            addCode(this.formatLanguageCode(code));
          }
  
          fallbackCodes.forEach((function (fc) {
            if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
          }));
          return codes;
        }
      }]);
  
      return LanguageUtil;
    })();
  
    var sets = [{
      lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'ti', 'tr', 'uz', 'wa'],
      nr: [1, 2],
      fc: 1
    }, {
      lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
      nr: [1, 2],
      fc: 2
    }, {
      lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
      nr: [1],
      fc: 3
    }, {
      lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
      nr: [1, 2, 5],
      fc: 4
    }, {
      lngs: ['ar'],
      nr: [0, 1, 2, 3, 11, 100],
      fc: 5
    }, {
      lngs: ['cs', 'sk'],
      nr: [1, 2, 5],
      fc: 6
    }, {
      lngs: ['csb', 'pl'],
      nr: [1, 2, 5],
      fc: 7
    }, {
      lngs: ['cy'],
      nr: [1, 2, 3, 8],
      fc: 8
    }, {
      lngs: ['fr'],
      nr: [1, 2],
      fc: 9
    }, {
      lngs: ['ga'],
      nr: [1, 2, 3, 7, 11],
      fc: 10
    }, {
      lngs: ['gd'],
      nr: [1, 2, 3, 20],
      fc: 11
    }, {
      lngs: ['is'],
      nr: [1, 2],
      fc: 12
    }, {
      lngs: ['jv'],
      nr: [0, 1],
      fc: 13
    }, {
      lngs: ['kw'],
      nr: [1, 2, 3, 4],
      fc: 14
    }, {
      lngs: ['lt'],
      nr: [1, 2, 10],
      fc: 15
    }, {
      lngs: ['lv'],
      nr: [1, 2, 0],
      fc: 16
    }, {
      lngs: ['mk'],
      nr: [1, 2],
      fc: 17
    }, {
      lngs: ['mnk'],
      nr: [0, 1, 2],
      fc: 18
    }, {
      lngs: ['mt'],
      nr: [1, 2, 11, 20],
      fc: 19
    }, {
      lngs: ['or'],
      nr: [2, 1],
      fc: 2
    }, {
      lngs: ['ro'],
      nr: [1, 2, 20],
      fc: 20
    }, {
      lngs: ['sl'],
      nr: [5, 1, 2, 3],
      fc: 21
    }, {
      lngs: ['he', 'iw'],
      nr: [1, 2, 20, 21],
      fc: 22
    }];
    var _rulesPluralsTypes = {
      1: function _(n) {
        return Number(n > 1);
      },
      2: function _(n) {
        return Number(n != 1);
      },
      3: function _(n) {
        return 0;
      },
      4: function _(n) {
        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
      },
      5: function _(n) {
        return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
      },
      6: function _(n) {
        return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
      },
      7: function _(n) {
        return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
      },
      8: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
      },
      9: function _(n) {
        return Number(n >= 2);
      },
      10: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
      },
      11: function _(n) {
        return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
      },
      12: function _(n) {
        return Number(n % 10 != 1 || n % 100 == 11);
      },
      13: function _(n) {
        return Number(n !== 0);
      },
      14: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
      },
      15: function _(n) {
        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
      },
      16: function _(n) {
        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
      },
      17: function _(n) {
        return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
      },
      18: function _(n) {
        return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
      },
      19: function _(n) {
        return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
      },
      20: function _(n) {
        return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
      },
      21: function _(n) {
        return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
      },
      22: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
      }
    };
  
    function createRules() {
      var rules = {};
      sets.forEach((function (set) {
        set.lngs.forEach((function (l) {
          rules[l] = {
            numbers: set.nr,
            plurals: _rulesPluralsTypes[set.fc]
          };
        }));
      }));
      return rules;
    }
  
    var PluralResolver = (function () {
      function PluralResolver(languageUtils) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        _classCallCheck(this, PluralResolver);
  
        this.languageUtils = languageUtils;
        this.options = options;
        this.logger = baseLogger.create('pluralResolver');
        this.rules = createRules();
      }
  
      _createClass(PluralResolver, [{
        key: "addRule",
        value: function addRule(lng, obj) {
          this.rules[lng] = obj;
        }
      }, {
        key: "getRule",
        value: function getRule(code) {
          return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
        }
      }, {
        key: "needsPlural",
        value: function needsPlural(code) {
          var rule = this.getRule(code);
          return rule && rule.numbers.length > 1;
        }
      }, {
        key: "getPluralFormsOfKey",
        value: function getPluralFormsOfKey(code, key) {
          var _this = this;
  
          var ret = [];
          var rule = this.getRule(code);
          if (!rule) return ret;
          rule.numbers.forEach((function (n) {
            var suffix = _this.getSuffix(code, n);
  
            ret.push("".concat(key).concat(suffix));
          }));
          return ret;
        }
      }, {
        key: "getSuffix",
        value: function getSuffix(code, count) {
          var _this2 = this;
  
          var rule = this.getRule(code);
  
          if (rule) {
            var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
            var suffix = rule.numbers[idx];
  
            if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
              if (suffix === 2) {
                suffix = 'plural';
              } else if (suffix === 1) {
                suffix = '';
              }
            }
  
            var returnSuffix = function returnSuffix() {
              return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
            };
  
            if (this.options.compatibilityJSON === 'v1') {
              if (suffix === 1) return '';
              if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
              return returnSuffix();
            } else if (this.options.compatibilityJSON === 'v2') {
              return returnSuffix();
            } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
              return returnSuffix();
            }
  
            return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
          }
  
          this.logger.warn("no plural rule found for: ".concat(code));
          return '';
        }
      }]);
  
      return PluralResolver;
    })();
  
    var Interpolator = (function () {
      function Interpolator() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  
        _classCallCheck(this, Interpolator);
  
        this.logger = baseLogger.create('interpolator');
        this.options = options;
  
        this.format = options.interpolation && options.interpolation.format || function (value) {
          return value;
        };
  
        this.init(options);
      }
  
      _createClass(Interpolator, [{
        key: "init",
        value: function init() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          if (!options.interpolation) options.interpolation = {
            escapeValue: true
          };
          var iOpts = options.interpolation;
          this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
          this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
          this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
          this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
          this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
          this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
          this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
          this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
          this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
          this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
          this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
          this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
          this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
          this.resetRegExp();
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.options) this.init(this.options);
        }
      }, {
        key: "resetRegExp",
        value: function resetRegExp() {
          var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
          this.regexp = new RegExp(regexpStr, 'g');
          var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
          this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
          var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
        }
      }, {
        key: "interpolate",
        value: function interpolate(str, data, lng, options) {
          var _this = this;
  
          var match;
          var value;
          var replaces;
          var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
  
          function regexSafe(val) {
            return val.replace(/\$/g, '$$$$');
          }
  
          var handleFormat = function handleFormat(key) {
            if (key.indexOf(_this.formatSeparator) < 0) {
              var path = getPathWithDefaults(data, defaultData, key);
              return _this.alwaysFormat ? _this.format(path, undefined, lng) : path;
            }
  
            var p = key.split(_this.formatSeparator);
            var k = p.shift().trim();
            var f = p.join(_this.formatSeparator).trim();
            return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, options);
          };
  
          this.resetRegExp();
          var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
          var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
          var todos = [{
            regex: this.regexpUnescape,
            safeValue: function safeValue(val) {
              return regexSafe(val);
            }
          }, {
            regex: this.regexp,
            safeValue: function safeValue(val) {
              return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
            }
          }];
          todos.forEach((function (todo) {
            replaces = 0;
  
            while (match = todo.regex.exec(str)) {
              value = handleFormat(match[1].trim());
  
              if (value === undefined) {
                if (typeof missingInterpolationHandler === 'function') {
                  var temp = missingInterpolationHandler(str, match, options);
                  value = typeof temp === 'string' ? temp : '';
                } else if (skipOnVariables) {
                  value = match[0];
                  continue;
                } else {
                  _this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
  
                  value = '';
                }
              } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
                value = makeString(value);
              }
  
              str = str.replace(match[0], todo.safeValue(value));
              todo.regex.lastIndex = 0;
              replaces++;
  
              if (replaces >= _this.maxReplaces) {
                break;
              }
            }
          }));
          return str;
        }
      }, {
        key: "nest",
        value: function nest(str, fc) {
          var _this2 = this;
  
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var match;
          var value;
  
          var clonedOptions = _objectSpread({}, options);
  
          clonedOptions.applyPostProcessor = false;
          delete clonedOptions.defaultValue;
  
          function handleHasOptions(key, inheritedOptions) {
            var sep = this.nestingOptionsSeparator;
            if (key.indexOf(sep) < 0) return key;
            var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
            var optionsString = "{".concat(c[1]);
            key = c[0];
            optionsString = this.interpolate(optionsString, clonedOptions);
            optionsString = optionsString.replace(/'/g, '"');
  
            try {
              clonedOptions = JSON.parse(optionsString);
              if (inheritedOptions) clonedOptions = _objectSpread({}, inheritedOptions, clonedOptions);
            } catch (e) {
              this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
              return "".concat(key).concat(sep).concat(optionsString);
            }
  
            delete clonedOptions.defaultValue;
            return key;
          }
  
          while (match = this.nestingRegexp.exec(str)) {
            var formatters = [];
            var doReduce = false;
  
            if (match[0].includes(this.formatSeparator) && !/{.*}/.test(match[1])) {
              var r = match[1].split(this.formatSeparator).map((function (elem) {
                return elem.trim();
              }));
              match[1] = r.shift();
              formatters = r;
              doReduce = true;
            }
  
            value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
            if (value && match[0] === str && typeof value !== 'string') return value;
            if (typeof value !== 'string') value = makeString(value);
  
            if (!value) {
              this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
              value = '';
            }
  
            if (doReduce) {
              value = formatters.reduce((function (v, f) {
                return _this2.format(v, f, options.lng, options);
              }), value.trim());
            }
  
            str = str.replace(match[0], value);
            this.regexp.lastIndex = 0;
          }
  
          return str;
        }
      }]);
  
      return Interpolator;
    })();
  
    function remove(arr, what) {
      var found = arr.indexOf(what);
  
      while (found !== -1) {
        arr.splice(found, 1);
        found = arr.indexOf(what);
      }
    }
  
    var Connector = (function (_EventEmitter) {
      _inherits(Connector, _EventEmitter);
  
      function Connector(backend, store, services) {
        var _this;
  
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  
        _classCallCheck(this, Connector);
  
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Connector).call(this));
  
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
  
        _this.backend = backend;
        _this.store = store;
        _this.services = services;
        _this.languageUtils = services.languageUtils;
        _this.options = options;
        _this.logger = baseLogger.create('backendConnector');
        _this.state = {};
        _this.queue = [];
  
        if (_this.backend && _this.backend.init) {
          _this.backend.init(services, options.backend, options);
        }
  
        return _this;
      }
  
      _createClass(Connector, [{
        key: "queueLoad",
        value: function queueLoad(languages, namespaces, options, callback) {
          var _this2 = this;
  
          var toLoad = [];
          var pending = [];
          var toLoadLanguages = [];
          var toLoadNamespaces = [];
          languages.forEach((function (lng) {
            var hasAllNamespaces = true;
            namespaces.forEach((function (ns) {
              var name = "".concat(lng, "|").concat(ns);
  
              if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
                _this2.state[name] = 2;
              } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
                if (pending.indexOf(name) < 0) pending.push(name);
              } else {
                _this2.state[name] = 1;
                hasAllNamespaces = false;
                if (pending.indexOf(name) < 0) pending.push(name);
                if (toLoad.indexOf(name) < 0) toLoad.push(name);
                if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
              }
            }));
            if (!hasAllNamespaces) toLoadLanguages.push(lng);
          }));
  
          if (toLoad.length || pending.length) {
            this.queue.push({
              pending: pending,
              loaded: {},
              errors: [],
              callback: callback
            });
          }
  
          return {
            toLoad: toLoad,
            pending: pending,
            toLoadLanguages: toLoadLanguages,
            toLoadNamespaces: toLoadNamespaces
          };
        }
      }, {
        key: "loaded",
        value: function loaded(name, err, data) {
          var s = name.split('|');
          var lng = s[0];
          var ns = s[1];
          if (err) this.emit('failedLoading', lng, ns, err);
  
          if (data) {
            this.store.addResourceBundle(lng, ns, data);
          }
  
          this.state[name] = err ? -1 : 2;
          var loaded = {};
          this.queue.forEach((function (q) {
            pushPath(q.loaded, [lng], ns);
            remove(q.pending, name);
            if (err) q.errors.push(err);
  
            if (q.pending.length === 0 && !q.done) {
              Object.keys(q.loaded).forEach((function (l) {
                if (!loaded[l]) loaded[l] = [];
  
                if (q.loaded[l].length) {
                  q.loaded[l].forEach((function (ns) {
                    if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
                  }));
                }
              }));
              q.done = true;
  
              if (q.errors.length) {
                q.callback(q.errors);
              } else {
                q.callback();
              }
            }
          }));
          this.emit('loaded', loaded);
          this.queue = this.queue.filter((function (q) {
            return !q.done;
          }));
        }
      }, {
        key: "read",
        value: function read(lng, ns, fcName) {
          var _this3 = this;
  
          var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 350;
          var callback = arguments.length > 5 ? arguments[5] : undefined;
          if (!lng.length) return callback(null, {});
          return this.backend[fcName](lng, ns, (function (err, data) {
            if (err && data && tried < 5) {
              setTimeout((function () {
                _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
              }), wait);
              return;
            }
  
            callback(err, data);
          }));
        }
      }, {
        key: "prepareLoading",
        value: function prepareLoading(languages, namespaces) {
          var _this4 = this;
  
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var callback = arguments.length > 3 ? arguments[3] : undefined;
  
          if (!this.backend) {
            this.logger.warn('No backend was added via i18next.use. Will not load resources.');
            return callback && callback();
          }
  
          if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
          if (typeof namespaces === 'string') namespaces = [namespaces];
          var toLoad = this.queueLoad(languages, namespaces, options, callback);
  
          if (!toLoad.toLoad.length) {
            if (!toLoad.pending.length) callback();
            return null;
          }
  
          toLoad.toLoad.forEach((function (name) {
            _this4.loadOne(name);
          }));
        }
      }, {
        key: "load",
        value: function load(languages, namespaces, callback) {
          this.prepareLoading(languages, namespaces, {}, callback);
        }
      }, {
        key: "reload",
        value: function reload(languages, namespaces, callback) {
          this.prepareLoading(languages, namespaces, {
            reload: true
          }, callback);
        }
      }, {
        key: "loadOne",
        value: function loadOne(name) {
          var _this5 = this;
  
          var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var s = name.split('|');
          var lng = s[0];
          var ns = s[1];
          this.read(lng, ns, 'read', undefined, undefined, (function (err, data) {
            if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
  
            _this5.loaded(name, err, data);
          }));
        }
      }, {
        key: "saveMissing",
        value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
          var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  
          if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
            this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
            return;
          }
  
          if (key === undefined || key === null || key === '') return;
  
          if (this.backend && this.backend.create) {
            this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread({}, options, {
              isUpdate: isUpdate
            }));
          }
  
          if (!languages || !languages[0]) return;
          this.store.addResource(languages[0], namespace, key, fallbackValue);
        }
      }]);
  
      return Connector;
    })(EventEmitter);
  
    function get() {
      return {
        debug: false,
        initImmediate: true,
        ns: ['translation'],
        defaultNS: ['translation'],
        fallbackLng: ['dev'],
        fallbackNS: false,
        whitelist: false,
        nonExplicitWhitelist: false,
        supportedLngs: false,
        nonExplicitSupportedLngs: false,
        load: 'all',
        preload: false,
        simplifyPluralSuffix: true,
        keySeparator: '.',
        nsSeparator: ':',
        pluralSeparator: '_',
        contextSeparator: '_',
        partialBundledLanguages: false,
        saveMissing: false,
        updateMissing: false,
        saveMissingTo: 'fallback',
        saveMissingPlurals: true,
        missingKeyHandler: false,
        missingInterpolationHandler: false,
        postProcess: false,
        postProcessPassResolved: false,
        returnNull: true,
        returnEmptyString: true,
        returnObjects: false,
        joinArrays: false,
        returnedObjectHandler: false,
        parseMissingKeyHandler: false,
        appendNamespaceToMissingKey: false,
        appendNamespaceToCIMode: false,
        overloadTranslationOptionHandler: function handle(args) {
          var ret = {};
          if (_typeof(args[1]) === 'object') ret = args[1];
          if (typeof args[1] === 'string') ret.defaultValue = args[1];
          if (typeof args[2] === 'string') ret.tDescription = args[2];
  
          if (_typeof(args[2]) === 'object' || _typeof(args[3]) === 'object') {
            var options = args[3] || args[2];
            Object.keys(options).forEach((function (key) {
              ret[key] = options[key];
            }));
          }
  
          return ret;
        },
        interpolation: {
          escapeValue: true,
          format: function format(value, _format, lng, options) {
            return value;
          },
          prefix: '{{',
          suffix: '}}',
          formatSeparator: ',',
          unescapePrefix: '-',
          nestingPrefix: '$t(',
          nestingSuffix: ')',
          nestingOptionsSeparator: ',',
          maxReplaces: 1000,
          skipOnVariables: false
        }
      };
    }
    function transformOptions(options) {
      if (typeof options.ns === 'string') options.ns = [options.ns];
      if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
      if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];
  
      if (options.whitelist) {
        if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
          options.whitelist = options.whitelist.concat(['cimode']);
        }
  
        options.supportedLngs = options.whitelist;
      }
  
      if (options.nonExplicitWhitelist) {
        options.nonExplicitSupportedLngs = options.nonExplicitWhitelist;
      }
  
      if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
        options.supportedLngs = options.supportedLngs.concat(['cimode']);
      }
  
      return options;
    }
  
    function noop() {}
  
    var I18n = (function (_EventEmitter) {
      _inherits(I18n, _EventEmitter);
  
      function I18n() {
        var _this;
  
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments.length > 1 ? arguments[1] : undefined;
  
        _classCallCheck(this, I18n);
  
        _this = _possibleConstructorReturn(this, _getPrototypeOf(I18n).call(this));
  
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
  
        _this.options = transformOptions(options);
        _this.services = {};
        _this.logger = baseLogger;
        _this.modules = {
          external: []
        };
  
        if (callback && !_this.isInitialized && !options.isClone) {
          if (!_this.options.initImmediate) {
            _this.init(options, callback);
  
            return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
          }
  
          setTimeout((function () {
            _this.init(options, callback);
          }), 0);
        }
  
        return _this;
      }
  
      _createClass(I18n, [{
        key: "init",
        value: function init() {
          var _this2 = this;
  
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var callback = arguments.length > 1 ? arguments[1] : undefined;
  
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
  
          if (options.whitelist && !options.supportedLngs) {
            this.logger.deprecate('whitelist', 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.');
          }
  
          if (options.nonExplicitWhitelist && !options.nonExplicitSupportedLngs) {
            this.logger.deprecate('whitelist', 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.');
          }
  
          this.options = _objectSpread({}, get(), this.options, transformOptions(options));
          this.format = this.options.interpolation.format;
          if (!callback) callback = noop;
  
          function createClassOnDemand(ClassOrObject) {
            if (!ClassOrObject) return null;
            if (typeof ClassOrObject === 'function') return new ClassOrObject();
            return ClassOrObject;
          }
  
          if (!this.options.isClone) {
            if (this.modules.logger) {
              baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
            } else {
              baseLogger.init(null, this.options);
            }
  
            var lu = new LanguageUtil(this.options);
            this.store = new ResourceStore(this.options.resources, this.options);
            var s = this.services;
            s.logger = baseLogger;
            s.resourceStore = this.store;
            s.languageUtils = lu;
            s.pluralResolver = new PluralResolver(lu, {
              prepend: this.options.pluralSeparator,
              compatibilityJSON: this.options.compatibilityJSON,
              simplifyPluralSuffix: this.options.simplifyPluralSuffix
            });
            s.interpolator = new Interpolator(this.options);
            s.utils = {
              hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            };
            s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
            s.backendConnector.on('*', (function (event) {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
  
              _this2.emit.apply(_this2, [event].concat(args));
            }));
  
            if (this.modules.languageDetector) {
              s.languageDetector = createClassOnDemand(this.modules.languageDetector);
              s.languageDetector.init(s, this.options.detection, this.options);
            }
  
            if (this.modules.i18nFormat) {
              s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
              if (s.i18nFormat.init) s.i18nFormat.init(this);
            }
  
            this.translator = new Translator(this.services, this.options);
            this.translator.on('*', (function (event) {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
  
              _this2.emit.apply(_this2, [event].concat(args));
            }));
            this.modules.external.forEach((function (m) {
              if (m.init) m.init(_this2);
            }));
          }
  
          if (!this.modules.languageDetector && !this.options.lng) {
            this.logger.warn('init: no languageDetector is used and no lng is defined');
          }
  
          var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
          storeApi.forEach((function (fcName) {
            _this2[fcName] = function () {
              var _this2$store;
  
              return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
            };
          }));
          var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
          storeApiChained.forEach((function (fcName) {
            _this2[fcName] = function () {
              var _this2$store2;
  
              (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
  
              return _this2;
            };
          }));
          var deferred = defer();
  
          var load = function load() {
            _this2.changeLanguage(_this2.options.lng, (function (err, t) {
              _this2.isInitialized = true;
  
              _this2.logger.log('initialized', _this2.options);
  
              _this2.emit('initialized', _this2.options);
  
              deferred.resolve(t);
              callback(err, t);
            }));
          };
  
          if (this.options.resources || !this.options.initImmediate) {
            load();
          } else {
            setTimeout(load, 0);
          }
  
          return deferred;
        }
      }, {
        key: "loadResources",
        value: function loadResources(language) {
          var _this3 = this;
  
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
          var usedCallback = callback;
          var usedLng = typeof language === 'string' ? language : this.language;
          if (typeof language === 'function') usedCallback = language;
  
          if (!this.options.resources || this.options.partialBundledLanguages) {
            if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
            var toLoad = [];
  
            var append = function append(lng) {
              if (!lng) return;
  
              var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
  
              lngs.forEach((function (l) {
                if (toLoad.indexOf(l) < 0) toLoad.push(l);
              }));
            };
  
            if (!usedLng) {
              var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
              fallbacks.forEach((function (l) {
                return append(l);
              }));
            } else {
              append(usedLng);
            }
  
            if (this.options.preload) {
              this.options.preload.forEach((function (l) {
                return append(l);
              }));
            }
  
            this.services.backendConnector.load(toLoad, this.options.ns, usedCallback);
          } else {
            usedCallback(null);
          }
        }
      }, {
        key: "reloadResources",
        value: function reloadResources(lngs, ns, callback) {
          var deferred = defer();
          if (!lngs) lngs = this.languages;
          if (!ns) ns = this.options.ns;
          if (!callback) callback = noop;
          this.services.backendConnector.reload(lngs, ns, (function (err) {
            deferred.resolve();
            callback(err);
          }));
          return deferred;
        }
      }, {
        key: "use",
        value: function use(module) {
          if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
          if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
  
          if (module.type === 'backend') {
            this.modules.backend = module;
          }
  
          if (module.type === 'logger' || module.log && module.warn && module.error) {
            this.modules.logger = module;
          }
  
          if (module.type === 'languageDetector') {
            this.modules.languageDetector = module;
          }
  
          if (module.type === 'i18nFormat') {
            this.modules.i18nFormat = module;
          }
  
          if (module.type === 'postProcessor') {
            postProcessor.addPostProcessor(module);
          }
  
          if (module.type === '3rdParty') {
            this.modules.external.push(module);
          }
  
          return this;
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(lng, callback) {
          var _this4 = this;
  
          this.isLanguageChangingTo = lng;
          var deferred = defer();
          this.emit('languageChanging', lng);
  
          var done = function done(err, l) {
            if (l) {
              _this4.language = l;
              _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
  
              _this4.translator.changeLanguage(l);
  
              _this4.isLanguageChangingTo = undefined;
  
              _this4.emit('languageChanged', l);
  
              _this4.logger.log('languageChanged', l);
            } else {
              _this4.isLanguageChangingTo = undefined;
            }
  
            deferred.resolve((function () {
              return _this4.t.apply(_this4, arguments);
            }));
            if (callback) callback(err, (function () {
              return _this4.t.apply(_this4, arguments);
            }));
          };
  
          var setLng = function setLng(lngs) {
            var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
  
            if (l) {
              if (!_this4.language) {
                _this4.language = l;
                _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
              }
  
              if (!_this4.translator.language) _this4.translator.changeLanguage(l);
              if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
            }
  
            _this4.loadResources(l, (function (err) {
              done(err, l);
            }));
          };
  
          if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
            setLng(this.services.languageDetector.detect());
          } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
            this.services.languageDetector.detect(setLng);
          } else {
            setLng(lng);
          }
  
          return deferred;
        }
      }, {
        key: "getFixedT",
        value: function getFixedT(lng, ns) {
          var _this5 = this;
  
          var fixedT = function fixedT(key, opts) {
            var options;
  
            if (_typeof(opts) !== 'object') {
              for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                rest[_key3 - 2] = arguments[_key3];
              }
  
              options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
            } else {
              options = _objectSpread({}, opts);
            }
  
            options.lng = options.lng || fixedT.lng;
            options.lngs = options.lngs || fixedT.lngs;
            options.ns = options.ns || fixedT.ns;
            return _this5.t(key, options);
          };
  
          if (typeof lng === 'string') {
            fixedT.lng = lng;
          } else {
            fixedT.lngs = lng;
          }
  
          fixedT.ns = ns;
          return fixedT;
        }
      }, {
        key: "t",
        value: function t() {
          var _this$translator;
  
          return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
        }
      }, {
        key: "exists",
        value: function exists() {
          var _this$translator2;
  
          return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
        }
      }, {
        key: "setDefaultNamespace",
        value: function setDefaultNamespace(ns) {
          this.options.defaultNS = ns;
        }
      }, {
        key: "hasLoadedNamespace",
        value: function hasLoadedNamespace(ns) {
          var _this6 = this;
  
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
          if (!this.isInitialized) {
            this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
            return false;
          }
  
          if (!this.languages || !this.languages.length) {
            this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
            return false;
          }
  
          var lng = this.languages[0];
          var fallbackLng = this.options ? this.options.fallbackLng : false;
          var lastLng = this.languages[this.languages.length - 1];
          if (lng.toLowerCase() === 'cimode') return true;
  
          var loadNotPending = function loadNotPending(l, n) {
            var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];
  
            return loadState === -1 || loadState === 2;
          };
  
          if (options.precheck) {
            var preResult = options.precheck(this, loadNotPending);
            if (preResult !== undefined) return preResult;
          }
  
          if (this.hasResourceBundle(lng, ns)) return true;
          if (!this.services.backendConnector.backend) return true;
          if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
          return false;
        }
      }, {
        key: "loadNamespaces",
        value: function loadNamespaces(ns, callback) {
          var _this7 = this;
  
          var deferred = defer();
  
          if (!this.options.ns) {
            callback && callback();
            return Promise.resolve();
          }
  
          if (typeof ns === 'string') ns = [ns];
          ns.forEach((function (n) {
            if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
          }));
          this.loadResources((function (err) {
            deferred.resolve();
            if (callback) callback(err);
          }));
          return deferred;
        }
      }, {
        key: "loadLanguages",
        value: function loadLanguages(lngs, callback) {
          var deferred = defer();
          if (typeof lngs === 'string') lngs = [lngs];
          var preloaded = this.options.preload || [];
          var newLngs = lngs.filter((function (lng) {
            return preloaded.indexOf(lng) < 0;
          }));
  
          if (!newLngs.length) {
            if (callback) callback();
            return Promise.resolve();
          }
  
          this.options.preload = preloaded.concat(newLngs);
          this.loadResources((function (err) {
            deferred.resolve();
            if (callback) callback(err);
          }));
          return deferred;
        }
      }, {
        key: "dir",
        value: function dir(lng) {
          if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
          if (!lng) return 'rtl';
          var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];
          return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
        }
      }, {
        key: "createInstance",
        value: function createInstance() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var callback = arguments.length > 1 ? arguments[1] : undefined;
          return new I18n(options, callback);
        }
      }, {
        key: "cloneInstance",
        value: function cloneInstance() {
          var _this8 = this;
  
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  
          var mergedOptions = _objectSpread({}, this.options, options, {
            isClone: true
          });
  
          var clone = new I18n(mergedOptions);
          var membersToCopy = ['store', 'services', 'language'];
          membersToCopy.forEach((function (m) {
            clone[m] = _this8[m];
          }));
          clone.services = _objectSpread({}, this.services);
          clone.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
          };
          clone.translator = new Translator(clone.services, clone.options);
          clone.translator.on('*', (function (event) {
            for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              args[_key4 - 1] = arguments[_key4];
            }
  
            clone.emit.apply(clone, [event].concat(args));
          }));
          clone.init(mergedOptions, callback);
          clone.translator.options = clone.options;
          clone.translator.backendConnector.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
          };
          return clone;
        }
      }]);
  
      return I18n;
    })(EventEmitter);
  
    var i18next = new I18n();
  
    return i18next;
  
  })));
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.i18nextHttpBackend = f()}})((function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,(function(r){var n=e[i][1][r];return o(n||r)}),p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    (function (global){
    var fetchApi
    if (typeof fetch === 'function') {
      if (typeof global !== 'undefined' && global.fetch) {
        fetchApi = global.fetch
      } else if (typeof window !== 'undefined' && window.fetch) {
        fetchApi = window.fetch
      }
    }
    
    if (typeof require !== 'undefined' && (typeof window === 'undefined' || typeof window.document === 'undefined')) {
      var f = fetchApi || require('node-fetch')
      if (f.default) f = f.default
      exports.default = f
      module.exports = exports.default
    }
    
    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"node-fetch":5}],2:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    
    var _utils = require("./utils.js");
    
    var _request = _interopRequireDefault(require("./request.js"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    
    var getDefaults = function getDefaults() {
      return {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
        addPath: '/locales/add/{{lng}}/{{ns}}',
        allowMultiLoading: false,
        parse: function parse(data) {
          return JSON.parse(data);
        },
        stringify: JSON.stringify,
        parsePayload: function parsePayload(namespace, key, fallbackValue) {
          return _defineProperty({}, key, fallbackValue || '');
        },
        request: _request.default,
        reloadInterval: typeof window !== 'undefined' ? false : 60 * 60 * 1000,
        customHeaders: {},
        queryStringParams: {},
        crossDomain: false,
        withCredentials: false,
        overrideMimeType: false,
        requestOptions: {
          mode: 'cors',
          credentials: 'same-origin',
          cache: 'default'
        }
      };
    };
    
    var Backend = (function () {
      function Backend(services) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    
        _classCallCheck(this, Backend);
    
        this.services = services;
        this.options = options;
        this.allOptions = allOptions;
        this.type = 'backend';
        this.init(services, options, allOptions);
      }
    
      _createClass(Backend, [{
        key: "init",
        value: function init(services) {
          var _this = this;
    
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          this.services = services;
          this.options = (0, _utils.defaults)(options, this.options || {}, getDefaults());
          this.allOptions = allOptions;
    
          if (this.options.reloadInterval) {
            setInterval((function () {
              return _this.reload();
            }), this.options.reloadInterval);
          }
        }
      }, {
        key: "readMulti",
        value: function readMulti(languages, namespaces, callback) {
          var loadPath = this.options.loadPath;
    
          if (typeof this.options.loadPath === 'function') {
            loadPath = this.options.loadPath(languages, namespaces);
          }
    
          var url = this.services.interpolator.interpolate(loadPath, {
            lng: languages.join('+'),
            ns: namespaces.join('+')
          });
          this.loadUrl(url, callback, languages, namespaces);
        }
      }, {
        key: "read",
        value: function read(language, namespace, callback) {
          var loadPath = this.options.loadPath;
    
          if (typeof this.options.loadPath === 'function') {
            loadPath = this.options.loadPath([language], [namespace]);
          }
    
          var url = this.services.interpolator.interpolate(loadPath, {
            lng: language,
            ns: namespace
          });
          this.loadUrl(url, callback, language, namespace);
        }
      }, {
        key: "loadUrl",
        value: function loadUrl(url, callback, languages, namespaces) {
          var _this2 = this;
    
          this.options.request(this.options, url, undefined, (function (err, res) {
            if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback('failed loading ' + url, true);
            if (res && res.status >= 400 && res.status < 500) return callback('failed loading ' + url, false);
            if (!res && err && err.message && err.message.indexOf('Failed to fetch') > -1) return callback('failed loading ' + url, true);
            if (err) return callback(err, false);
            var ret, parseErr;
    
            try {
              if (typeof res.data === 'string') {
                ret = _this2.options.parse(res.data, languages, namespaces);
              } else {
                ret = res.data;
              }
            } catch (e) {
              parseErr = 'failed parsing ' + url + ' to json';
            }
    
            if (parseErr) return callback(parseErr, false);
            callback(null, ret);
          }));
        }
      }, {
        key: "create",
        value: function create(languages, namespace, key, fallbackValue) {
          var _this3 = this;
    
          if (!this.options.addPath) return;
          if (typeof languages === 'string') languages = [languages];
          var payload = this.options.parsePayload(namespace, key, fallbackValue);
          languages.forEach((function (lng) {
            var url = _this3.services.interpolator.interpolate(_this3.options.addPath, {
              lng: lng,
              ns: namespace
            });
    
            _this3.options.request(_this3.options, url, payload, (function (data, res) {}));
          }));
        }
      }, {
        key: "reload",
        value: function reload() {
          var _this4 = this;
    
          var _this$services = this.services,
              backendConnector = _this$services.backendConnector,
              languageUtils = _this$services.languageUtils,
              logger = _this$services.logger;
          var currentLanguage = backendConnector.language;
          if (currentLanguage && currentLanguage.toLowerCase() === 'cimode') return;
          var toLoad = [];
    
          var append = function append(lng) {
            var lngs = languageUtils.toResolveHierarchy(lng);
            lngs.forEach((function (l) {
              if (toLoad.indexOf(l) < 0) toLoad.push(l);
            }));
          };
    
          append(currentLanguage);
          if (this.allOptions.preload) this.allOptions.preload.forEach((function (l) {
            return append(l);
          }));
          toLoad.forEach((function (lng) {
            _this4.allOptions.ns.forEach((function (ns) {
              backendConnector.read(lng, ns, 'read', null, null, (function (err, data) {
                if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
                if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
                backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
              }));
            }));
          }));
        }
      }]);
    
      return Backend;
    })();
    
    Backend.type = 'backend';
    var _default = Backend;
    exports.default = _default;
    module.exports = exports.default;
    },{"./request.js":3,"./utils.js":4}],3:[function(require,module,exports){
    (function (global){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    
    var _utils = require("./utils.js");
    
    var fetchNode = _interopRequireWildcard(require("./getFetch.js"));
    
    function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }
    
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    var fetchApi;
    
    if (typeof fetch === 'function') {
      if (typeof global !== 'undefined' && global.fetch) {
        fetchApi = global.fetch;
      } else if (typeof window !== 'undefined' && window.fetch) {
        fetchApi = window.fetch;
      }
    }
    
    var XmlHttpRequestApi;
    
    if (typeof XMLHttpRequest === 'function') {
      if (typeof global !== 'undefined' && global.XMLHttpRequest) {
        XmlHttpRequestApi = global.XMLHttpRequest;
      } else if (typeof window !== 'undefined' && window.XMLHttpRequest) {
        XmlHttpRequestApi = window.XMLHttpRequest;
      }
    }
    
    var ActiveXObjectApi;
    
    if (typeof ActiveXObject === 'function') {
      if (typeof global !== 'undefined' && global.ActiveXObject) {
        ActiveXObjectApi = global.ActiveXObject;
      } else if (typeof window !== 'undefined' && window.ActiveXObject) {
        ActiveXObjectApi = window.ActiveXObject;
      }
    }
    
    if (!fetchApi && fetchNode && !XmlHttpRequestApi && !ActiveXObjectApi) fetchApi = fetchNode.default || fetchNode;
    if (typeof fetchApi !== 'function') fetchApi = undefined;
    
    var addQueryString = function addQueryString(url, params) {
      if (params && _typeof(params) === 'object') {
        var queryString = '';
    
        for (var paramName in params) {
          queryString += '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(params[paramName]);
        }
    
        if (!queryString) return url;
        url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
      }
    
      return url;
    };
    
    var requestWithFetch = function requestWithFetch(options, url, payload, callback) {
      if (options.queryStringParams) {
        url = addQueryString(url, options.queryStringParams);
      }
    
      var headers = (0, _utils.defaults)({}, options.customHeaders);
      if (payload) headers['Content-Type'] = 'application/json';
      fetchApi(url, (0, _utils.defaults)({
        method: payload ? 'POST' : 'GET',
        body: payload ? options.stringify(payload) : undefined,
        headers: headers
      }, typeof options.requestOptions === 'function' ? options.requestOptions(payload) : options.requestOptions)).then((function (response) {
        if (!response.ok) return callback(response.statusText || 'Error', {
          status: response.status
        });
        response.text().then((function (data) {
          callback(null, {
            status: response.status,
            data: data
          });
        })).catch(callback);
      })).catch(callback);
    };
    
    var requestWithXmlHttpRequest = function requestWithXmlHttpRequest(options, url, payload, callback) {
      if (payload && _typeof(payload) === 'object') {
        payload = addQueryString('', payload).slice(1);
      }
    
      if (options.queryStringParams) {
        url = addQueryString(url, options.queryStringParams);
      }
    
      try {
        var x;
    
        if (XmlHttpRequestApi) {
          x = new XmlHttpRequestApi();
        } else {
          x = new ActiveXObjectApi('MSXML2.XMLHTTP.3.0');
        }
    
        x.open(payload ? 'POST' : 'GET', url, 1);
    
        if (!options.crossDomain) {
          x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }
    
        x.withCredentials = !!options.withCredentials;
    
        if (payload) {
          x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
    
        if (x.overrideMimeType) {
          x.overrideMimeType('application/json');
        }
    
        var h = options.customHeaders;
        h = typeof h === 'function' ? h() : h;
    
        if (h) {
          for (var i in h) {
            x.setRequestHeader(i, h[i]);
          }
        }
    
        x.onreadystatechange = function () {
          x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
            status: x.status,
            data: x.responseText
          });
        };
    
        x.send(payload);
      } catch (e) {
        console && console.log(e);
      }
    };
    
    var request = function request(options, url, payload, callback) {
      if (typeof payload === 'function') {
        callback = payload;
        payload = undefined;
      }
    
      callback = callback || function () {};
    
      if (fetchApi) {
        return requestWithFetch(options, url, payload, callback);
      }
    
      if (typeof XMLHttpRequest === 'function' || typeof ActiveXObject === 'function') {
        return requestWithXmlHttpRequest(options, url, payload, callback);
      }
    };
    
    var _default = request;
    exports.default = _default;
    module.exports = exports.default;
    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"./getFetch.js":1,"./utils.js":4}],4:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defaults = defaults;
    var arr = [];
    var each = arr.forEach;
    var slice = arr.slice;
    
    function defaults(obj) {
      each.call(slice.call(arguments, 1), (function (source) {
        if (source) {
          for (var prop in source) {
            if (obj[prop] === undefined) obj[prop] = source[prop];
          }
        }
      }));
      return obj;
    }
    },{}],5:[function(require,module,exports){
    
    },{}]},{},[2])(2)
    }));
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.locI18next = factory());
}(this, (function () { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaults = {
  selectorAttr: 'data-i18n',
  targetAttr: 'i18n-target',
  optionsAttr: 'i18n-options',
  useOptionsAttr: false,
  parseDefaultValueFromContent: true,
  document: document
};

function init(i18next) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  options = _extends({}, defaults, options);
  var extendDefault = function extendDefault(o, val) {
      return options.parseDefaultValueFromContent ? _extends({}, o, { defaultValue: val }) : o;
  };
  function parse(elem, key, opts) {
      var attr = 'text';

      if (key.indexOf('[') == 0) {
          var parts = key.split(']');
          key = parts[1];
          attr = parts[0].substr(1, parts[0].length - 1);
      }

      key = key.indexOf(';') == key.length - 1 ? key.substr(0, key.length - 2) : key;

      if (attr === 'html') {
          elem.innerHTML = i18next.t(key, extendDefault(opts, elem.innerHTML));
      } else if (attr === 'text') {
          elem.textContent = i18next.t(key, extendDefault(opts, elem.textContent));
      } else if (attr === 'prepend') {
          var startIdx = elem.innerHTML.indexOf('<loc-i18n>');
          var endIdx = elem.innerHTML.indexOf('</loc-i18n>') + 11;
          if (startIdx > -1 && endIdx > 6) {
              elem.innerHTML = [elem.innerHTML.substring(0, startIdx), elem.innerHTML.slice(endIdx)].join('');
          }
          elem.innerHTML = ['<loc-i18n>', i18next.t(key, extendDefault(opts, elem.innerHTML)), '</loc-i18n>', elem.innerHTML].join('');
      } else if (attr === 'append') {
          var _startIdx = elem.innerHTML.indexOf('<loc-i18n>');
          var _endIdx = elem.innerHTML.indexOf('</loc-i18n>') + 11;
          if (_startIdx > -1 && _endIdx > 6) {
              elem.innerHTML = [elem.innerHTML.substring(0, _startIdx), elem.innerHTML.slice(_endIdx)].join('');
          }
          elem.innerHTML = [elem.innerHTML, '<loc-i18n>', i18next.t(key, extendDefault(opts, elem.innerHTML), '</loc-i18n>')].join('');
      } else if (attr.indexOf('data-') === 0) {
          var dataAttr = attr.substr('data-'.length);
          var translated = i18next.t(key, extendDefault(opts, elem.getAttribute(dataAttr)));
          // we change into the data cache
          elem.setAttribute(dataAttr, translated);
          // we change into the dom
          elem.setAttribute(attr, translated);
      } else {
          elem.setAttribute(attr, i18next.t(key, extendDefault(opts, elem.getAttribute(attr))));
      }
  };

  function relaxedJsonParse(badJSON) {
      return JSON.parse(badJSON.replace(/:\s*"([^"]*)"/g, (function (match, p1) {
          return ': "' + p1.replace(/:/g, '@colon@') + '"';
      })).replace(/:\s*'([^']*)'/g, (function (match, p1) {
          return ': "' + p1.replace(/:/g, '@colon@') + '"';
      })).replace(/(['"])?([a-z0-9A-Z_]+)(['"])?\s*:/g, '"$2": ').replace(/@colon@/g, ':'));
  }

  function _loc(elem, opts) {
      var key = elem.getAttribute(options.selectorAttr);
      //        if (!key && typeof key !== 'undefined' && key !== false)
      //            key = elem.textContent || elem.innerHTML;
      if (!key) return;

      var target = elem,
          targetSelector = elem.getAttribute(options.targetAttr);

      if (targetSelector != null) target = elem.querySelector(targetSelector) || elem;

      if (!opts && options.useOptionsAttr === true) opts = relaxedJsonParse(elem.getAttribute(options.optionsAttr) || '{}');

      opts = opts || {};

      if (key.indexOf(';') >= 0) {
          var keys = key.split(';');
          for (var ix = 0, l_ix = keys.length; ix < l_ix; ix++) {
              if (keys[ix] != '') parse(target, keys[ix], opts);
          }
      } else {
          parse(target, key, opts);
      }

      if (options.useOptionsAttr === true) {
          var clone = {};
          clone = _extends({ clone: clone }, opts);
          delete clone.lng;
          elem.setAttribute(options.optionsAttr, JSON.stringify(clone));
      }
  }

  function handle(selector, opts) {
      var elems = options.document.querySelectorAll(selector);
      for (var i = 0; i < elems.length; i++) {
          var elem = elems[i];
          var childs = elem.querySelectorAll('[' + options.selectorAttr + ']');
          for (var j = childs.length - 1; j > -1; j--) {
              _loc(childs[j], opts);
          }
          _loc(elem, opts);
      }
  };
  return handle;
}

var main = {
  init: init
};

return main;

})));
/**
 * SVGInject - Version 1.2.3
 * A tiny, intuitive, robust, caching solution for injecting SVG files inline into the DOM.
 *
 * https://github.com/iconfu/svg-inject
 *
 * Copyright (c) 2018 INCORS, the creators of iconfu.com
 * @license MIT License - https://github.com/iconfu/svg-inject/blob/master/LICENSE
 */

(function(window, document) {
    // constants for better minification
    var _CREATE_ELEMENT_ = 'createElement';
    var _GET_ELEMENTS_BY_TAG_NAME_ = 'getElementsByTagName';
    var _LENGTH_ = 'length';
    var _STYLE_ = 'style';
    var _TITLE_ = 'title';
    var _UNDEFINED_ = 'undefined';
    var _SET_ATTRIBUTE_ = 'setAttribute';
    var _GET_ATTRIBUTE_ = 'getAttribute';
  
    var NULL = null;
  
    // constants
    var __SVGINJECT = '__svgInject';
    var ID_SUFFIX = '--inject-';
    var ID_SUFFIX_REGEX = new RegExp(ID_SUFFIX + '\\d+', "g");
    var LOAD_FAIL = 'LOAD_FAIL';
    var SVG_NOT_SUPPORTED = 'SVG_NOT_SUPPORTED';
    var SVG_INVALID = 'SVG_INVALID';
    var ATTRIBUTE_EXCLUSION_NAMES = ['src', 'alt', 'onload', 'onerror'];
    var A_ELEMENT = document[_CREATE_ELEMENT_]('a');
    var IS_SVG_SUPPORTED = typeof SVGRect != _UNDEFINED_;
    var DEFAULT_OPTIONS = {
      useCache: true,
      copyAttributes: true,
      makeIdsUnique: true
    };
    // Map of IRI referenceable tag names to properties that can reference them. This is defined in
    // https://www.w3.org/TR/SVG11/linking.html#processingIRI
    var IRI_TAG_PROPERTIES_MAP = {
      clipPath: ['clip-path'],
      'color-profile': NULL,
      cursor: NULL,
      filter: NULL,
      linearGradient: ['fill', 'stroke'],
      marker: ['marker', 'marker-end', 'marker-mid', 'marker-start'],
      mask: NULL,
      pattern: ['fill', 'stroke'],
      radialGradient: ['fill', 'stroke']
    };
    var INJECTED = 1;
    var FAIL = 2;
  
    var uniqueIdCounter = 1;
    var xmlSerializer;
    var domParser;
  
  
    // creates an SVG document from an SVG string
    function svgStringToSvgDoc(svgStr) {
      domParser = domParser || new DOMParser();
      return domParser.parseFromString(svgStr, 'text/xml');
    }
  
  
    // searializes an SVG element to an SVG string
    function svgElemToSvgString(svgElement) {
      xmlSerializer = xmlSerializer || new XMLSerializer();
      return xmlSerializer.serializeToString(svgElement);
    }
  
  
    // Returns the absolute url for the specified url
    function getAbsoluteUrl(url) {
      A_ELEMENT.href = url;
      return A_ELEMENT.href;
    }
  
  
    // Load svg with an XHR request
    function loadSvg(url, callback, errorCallback) {
      if (url) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function() {
          if (req.readyState == 4) {
            // readyState is DONE
            var status = req.status;
            if (status == 200) {
              // request status is OK
              callback(req.responseXML, req.responseText.trim());
            } else if (status >= 400) {
              // request status is error (4xx or 5xx)
              errorCallback();
            } else if (status == 0) {
              // request status 0 can indicate a failed cross-domain call
              errorCallback();
            }
          }
        };
        req.open('GET', url, true);
        req.send();
      }
    }
  
  
    // Copy attributes from img element to svg element
    function copyAttributes(imgElem, svgElem) {
      var attribute;
      var attributeName;
      var attributeValue;
      var attributes = imgElem.attributes;
      for (var i = 0; i < attributes[_LENGTH_]; i++) {
        attribute = attributes[i];
        attributeName = attribute.name;
        // Only copy attributes not explicitly excluded from copying
        if (ATTRIBUTE_EXCLUSION_NAMES.indexOf(attributeName) == -1) {
          attributeValue = attribute.value;
          // If img attribute is "title", insert a title element into SVG element
          if (attributeName == _TITLE_) {
            var titleElem;
            var firstElementChild = svgElem.firstElementChild;
            if (firstElementChild && firstElementChild.localName.toLowerCase() == _TITLE_) {
              // If the SVG element's first child is a title element, keep it as the title element
              titleElem = firstElementChild;
            } else {
              // If the SVG element's first child element is not a title element, create a new title
              // ele,emt and set it as the first child
              titleElem = document[_CREATE_ELEMENT_ + 'NS']('http://www.w3.org/2000/svg', _TITLE_);
              svgElem.insertBefore(titleElem, firstElementChild);
            }
            // Set new title content
            titleElem.textContent = attributeValue;
          } else {
            // Set img attribute to svg element
            svgElem[_SET_ATTRIBUTE_](attributeName, attributeValue);
          }
        }
      }
    }
  
  
    // This function appends a suffix to IDs of referenced elements in the <defs> in order to  to avoid ID collision
    // between multiple injected SVGs. The suffix has the form "--inject-X", where X is a running number which is
    // incremented with each injection. References to the IDs are adjusted accordingly.
    // We assume tha all IDs within the injected SVG are unique, therefore the same suffix can be used for all IDs of one
    // injected SVG.
    // If the onlyReferenced argument is set to true, only those IDs will be made unique that are referenced from within the SVG
    function makeIdsUnique(svgElem, onlyReferenced) {
      var idSuffix = ID_SUFFIX + uniqueIdCounter++;
      // Regular expression for functional notations of an IRI references. This will find occurences in the form
      // url(#anyId) or url("#anyId") (for Internet Explorer) and capture the referenced ID
      var funcIriRegex = /url\("?#([a-zA-Z][\w:.-]*)"?\)/g;
      // Get all elements with an ID. The SVG spec recommends to put referenced elements inside <defs> elements, but
      // this is not a requirement, therefore we have to search for IDs in the whole SVG.
      var idElements = svgElem.querySelectorAll('[id]');
      var idElem;
      // An object containing referenced IDs  as keys is used if only referenced IDs should be uniquified.
      // If this object does not exist, all IDs will be uniquified.
      var referencedIds = onlyReferenced ? [] : NULL;
      var tagName;
      var iriTagNames = {};
      var iriProperties = [];
      var changed = false;
      var i, j;
  
      if (idElements[_LENGTH_]) {
        // Make all IDs unique by adding the ID suffix and collect all encountered tag names
        // that are IRI referenceable from properities.
        for (i = 0; i < idElements[_LENGTH_]; i++) {
          tagName = idElements[i].localName; // Use non-namespaced tag name
          // Make ID unique if tag name is IRI referenceable
          if (tagName in IRI_TAG_PROPERTIES_MAP) {
            iriTagNames[tagName] = 1;
          }
        }
        // Get all properties that are mapped to the found IRI referenceable tags
        for (tagName in iriTagNames) {
          (IRI_TAG_PROPERTIES_MAP[tagName] || [tagName]).forEach((function (mappedProperty) {
            // Add mapped properties to array of iri referencing properties.
            // Use linear search here because the number of possible entries is very small (maximum 11)
            if (iriProperties.indexOf(mappedProperty) < 0) {
              iriProperties.push(mappedProperty);
            }
          }));
        }
        if (iriProperties[_LENGTH_]) {
          // Add "style" to properties, because it may contain references in the form 'style="fill:url(#myFill)"'
          iriProperties.push(_STYLE_);
        }
        // Run through all elements of the SVG and replace IDs in references.
        // To get all descending elements, getElementsByTagName('*') seems to perform faster than querySelectorAll('*').
        // Since svgElem.getElementsByTagName('*') does not return the svg element itself, we have to handle it separately.
        var descElements = svgElem[_GET_ELEMENTS_BY_TAG_NAME_]('*');
        var element = svgElem;
        var propertyName;
        var value;
        var newValue;
        for (i = -1; element != NULL;) {
          if (element.localName == _STYLE_) {
            // If element is a style element, replace IDs in all occurences of "url(#anyId)" in text content
            value = element.textContent;
            newValue = value && value.replace(funcIriRegex, (function(match, id) {
              if (referencedIds) {
                referencedIds[id] = 1;
              }
              return 'url(#' + id + idSuffix + ')';
            }));
            if (newValue !== value) {
              element.textContent = newValue;
            }
          } else if (element.hasAttributes()) {
            // Run through all property names for which IDs were found
            for (j = 0; j < iriProperties[_LENGTH_]; j++) {
              propertyName = iriProperties[j];
              value = element[_GET_ATTRIBUTE_](propertyName);
              newValue = value && value.replace(funcIriRegex, (function(match, id) {
                if (referencedIds) {
                  referencedIds[id] = 1;
                }
                  return 'url(#' + id + idSuffix + ')';
              }));
              if (newValue !== value) {
                element[_SET_ATTRIBUTE_](propertyName, newValue);
              }
            }
            // Replace IDs in xlink:ref and href attributes
            ['xlink:href', 'href'].forEach((function(refAttrName) {
              var iri = element[_GET_ATTRIBUTE_](refAttrName);
              if (/^\s*#/.test(iri)) { // Check if iri is non-null and internal reference
                iri = iri.trim();
                element[_SET_ATTRIBUTE_](refAttrName, iri + idSuffix);
                if (referencedIds) {
                  // Add ID to referenced IDs
                  referencedIds[iri.substring(1)] = 1;
                }
              }
            }));
          }
          element = descElements[++i];
        }
        for (i = 0; i < idElements[_LENGTH_]; i++) {
          idElem = idElements[i];
          // If set of referenced IDs exists, make only referenced IDs unique,
          // otherwise make all IDs unique.
          if (!referencedIds || referencedIds[idElem.id]) {
            // Add suffix to element's ID
            idElem.id += idSuffix;
            changed = true;
          }
        }
      }
      // return true if SVG element has changed
      return changed;
    }
  
  
    // For cached SVGs the IDs are made unique by simply replacing the already inserted unique IDs with a
    // higher ID counter. This is much more performant than a call to makeIdsUnique().
    function makeIdsUniqueCached(svgString) {
      return svgString.replace(ID_SUFFIX_REGEX, ID_SUFFIX + uniqueIdCounter++);
    }
  
  
    // Inject SVG by replacing the img element with the SVG element in the DOM
    function inject(imgElem, svgElem, absUrl, options) {
      if (svgElem) {
        svgElem[_SET_ATTRIBUTE_]('data-inject-url', absUrl);
        var parentNode = imgElem.parentNode;
        if (parentNode) {
          if (options.copyAttributes) {
            copyAttributes(imgElem, svgElem);
          }
          // Invoke beforeInject hook if set
          var beforeInject = options.beforeInject;
          var injectElem = (beforeInject && beforeInject(imgElem, svgElem)) || svgElem;
          // Replace img element with new element. This is the actual injection.
          parentNode.replaceChild(injectElem, imgElem);
          // Mark img element as injected
          imgElem[__SVGINJECT] = INJECTED;
          removeOnLoadAttribute(imgElem);
          // Invoke afterInject hook if set
          var afterInject = options.afterInject;
          if (afterInject) {
            afterInject(imgElem, injectElem);
          }
        }
      } else {
        svgInvalid(imgElem, options);
      }
    }
  
  
    // Merges any number of options objects into a new object
    function mergeOptions() {
      var mergedOptions = {};
      var args = arguments;
      // Iterate over all specified options objects and add all properties to the new options object
      for (var i = 0; i < args[_LENGTH_]; i++) {
        var argument = args[i];
          for (var key in argument) {
            if (argument.hasOwnProperty(key)) {
              mergedOptions[key] = argument[key];
            }
          }
        }
      return mergedOptions;
    }
  
  
    // Adds the specified CSS to the document's <head> element
    function addStyleToHead(css) {
      var head = document[_GET_ELEMENTS_BY_TAG_NAME_]('head')[0];
      if (head) {
        var style = document[_CREATE_ELEMENT_](_STYLE_);
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
      }
    }
  
  
    // Builds an SVG element from the specified SVG string
    function buildSvgElement(svgStr, verify) {
      if (verify) {
        var svgDoc;
        try {
          // Parse the SVG string with DOMParser
          svgDoc = svgStringToSvgDoc(svgStr);
        } catch(e) {
          return NULL;
        }
        if (svgDoc[_GET_ELEMENTS_BY_TAG_NAME_]('parsererror')[_LENGTH_]) {
          // DOMParser does not throw an exception, but instead puts parsererror tags in the document
          return NULL;
        }
        return svgDoc.documentElement;
      } else {
        var div = document.createElement('div');
        div.innerHTML = svgStr;
        return div.firstElementChild;
      }
    }
  
  
    function removeOnLoadAttribute(imgElem) {
      // Remove the onload attribute. Should only be used to remove the unstyled image flash protection and
      // make the element visible, not for removing the event listener.
      imgElem.removeAttribute('onload');
    }
  
  
    function errorMessage(msg) {
      console.error('SVGInject: ' + msg);
    }
  
  
    function fail(imgElem, status, options) {
      imgElem[__SVGINJECT] = FAIL;
      if (options.onFail) {
        options.onFail(imgElem, status);
      } else {
        errorMessage(status);
      }
    }
  
  
    function svgInvalid(imgElem, options) {
      removeOnLoadAttribute(imgElem);
      fail(imgElem, SVG_INVALID, options);
    }
  
  
    function svgNotSupported(imgElem, options) {
      removeOnLoadAttribute(imgElem);
      fail(imgElem, SVG_NOT_SUPPORTED, options);
    }
  
  
    function loadFail(imgElem, options) {
      fail(imgElem, LOAD_FAIL, options);
    }
  
  
    function removeEventListeners(imgElem) {
      imgElem.onload = NULL;
      imgElem.onerror = NULL;
    }
  
  
    function imgNotSet(msg) {
      errorMessage('no img element');
    }
  
  
    function createSVGInject(globalName, options) {
      var defaultOptions = mergeOptions(DEFAULT_OPTIONS, options);
      var svgLoadCache = {};
  
      if (IS_SVG_SUPPORTED) {
        // If the browser supports SVG, add a small stylesheet that hides the <img> elements until
        // injection is finished. This avoids showing the unstyled SVGs before style is applied.
        addStyleToHead('img[onload^="' + globalName + '("]{visibility:hidden;}');
      }
  
  
      /**
       * SVGInject
       *
       * Injects the SVG specified in the `src` attribute of the specified `img` element or array of `img`
       * elements. Returns a Promise object which resolves if all passed in `img` elements have either been
       * injected or failed to inject (Only if a global Promise object is available like in all modern browsers
       * or through a polyfill).
       *
       * Options:
       * useCache: If set to `true` the SVG will be cached using the absolute URL. Default value is `true`.
       * copyAttributes: If set to `true` the attributes will be copied from `img` to `svg`. Dfault value
       *     is `true`.
       * makeIdsUnique: If set to `true` the ID of elements in the `<defs>` element that can be references by
       *     property values (for example 'clipPath') are made unique by appending "--inject-X", where X is a
       *     running number which increases with each injection. This is done to avoid duplicate IDs in the DOM.
       * beforeLoad: Hook before SVG is loaded. The `img` element is passed as a parameter. If the hook returns
       *     a string it is used as the URL instead of the `img` element's `src` attribute.
       * afterLoad: Hook after SVG is loaded. The loaded `svg` element and `svg` string are passed as a
       *     parameters. If caching is active this hook will only get called once for injected SVGs with the
       *     same absolute path. Changes to the `svg` element in this hook will be applied to all injected SVGs
       *     with the same absolute path. It's also possible to return an `svg` string or `svg` element which
       *     will then be used for the injection.
       * beforeInject: Hook before SVG is injected. The `img` and `svg` elements are passed as parameters. If
       *     any html element is returned it gets injected instead of applying the default SVG injection.
       * afterInject: Hook after SVG is injected. The `img` and `svg` elements are passed as parameters.
       * onAllFinish: Hook after all `img` elements passed to an SVGInject() call have either been injected or
       *     failed to inject.
       * onFail: Hook after injection fails. The `img` element and a `status` string are passed as an parameter.
       *     The `status` can be either `'SVG_NOT_SUPPORTED'` (the browser does not support SVG),
       *     `'SVG_INVALID'` (the SVG is not in a valid format) or `'LOAD_FAILED'` (loading of the SVG failed).
       *
       * @param {HTMLImageElement} img - an img element or an array of img elements
       * @param {Object} [options] - optional parameter with [options](#options) for this injection.
       */
      function SVGInject(img, options) {
        options = mergeOptions(defaultOptions, options);
  
        var run = function(resolve) {
          var allFinish = function() {
            var onAllFinish = options.onAllFinish;
            if (onAllFinish) {
              onAllFinish();
            }
            resolve && resolve();
          };
  
          if (img && typeof img[_LENGTH_] != _UNDEFINED_) {
            // an array like structure of img elements
            var injectIndex = 0;
            var injectCount = img[_LENGTH_];
  
            if (injectCount == 0) {
              allFinish();
            } else {
              var finish = function() {
                if (++injectIndex == injectCount) {
                  allFinish();
                }
              };
  
              for (var i = 0; i < injectCount; i++) {
                SVGInjectElement(img[i], options, finish);
              }
            }
          } else {
            // only one img element
            SVGInjectElement(img, options, allFinish);
          }
        };
  
        // return a Promise object if globally available
        return typeof Promise == _UNDEFINED_ ? run() : new Promise(run);
      }
  
  
      // Injects a single svg element. Options must be already merged with the default options.
      function SVGInjectElement(imgElem, options, callback) {
        if (imgElem) {
          var svgInjectAttributeValue = imgElem[__SVGINJECT];
          if (!svgInjectAttributeValue) {
            removeEventListeners(imgElem);
  
            if (!IS_SVG_SUPPORTED) {
              svgNotSupported(imgElem, options);
              callback();
              return;
            }
            // Invoke beforeLoad hook if set. If the beforeLoad returns a value use it as the src for the load
            // URL path. Else use the imgElem's src attribute value.
            var beforeLoad = options.beforeLoad;
            var src = (beforeLoad && beforeLoad(imgElem)) || imgElem[_GET_ATTRIBUTE_]('src');
  
            if (!src) {
              // If no image src attribute is set do no injection. This can only be reached by using javascript
              // because if no src attribute is set the onload and onerror events do not get called
              if (src === '') {
                loadFail(imgElem, options);
              }
              callback();
              return;
            }
  
            // set array so later calls can register callbacks
            var onFinishCallbacks = [];
            imgElem[__SVGINJECT] = onFinishCallbacks;
  
            var onFinish = function() {
              callback();
              onFinishCallbacks.forEach((function(onFinishCallback) {
                onFinishCallback();
              }));
            };
  
            var absUrl = getAbsoluteUrl(src);
            var useCacheOption = options.useCache;
            var makeIdsUniqueOption = options.makeIdsUnique;
            
            var setSvgLoadCacheValue = function(val) {
              if (useCacheOption) {
                svgLoadCache[absUrl].forEach((function(svgLoad) {
                  svgLoad(val);
                }));
                svgLoadCache[absUrl] = val;
              }
            };
  
            if (useCacheOption) {
              var svgLoad = svgLoadCache[absUrl];
  
              var handleLoadValue = function(loadValue) {
                if (loadValue === LOAD_FAIL) {
                  loadFail(imgElem, options);
                } else if (loadValue === SVG_INVALID) {
                  svgInvalid(imgElem, options);
                } else {
                  var hasUniqueIds = loadValue[0];
                  var svgString = loadValue[1];
                  var uniqueIdsSvgString = loadValue[2];
                  var svgElem;
  
                  if (makeIdsUniqueOption) {
                    if (hasUniqueIds === NULL) {
                      // IDs for the SVG string have not been made unique before. This may happen if previous
                      // injection of a cached SVG have been run with the option makedIdsUnique set to false
                      svgElem = buildSvgElement(svgString, false);
                      hasUniqueIds = makeIdsUnique(svgElem, false);
  
                      loadValue[0] = hasUniqueIds;
                      loadValue[2] = hasUniqueIds && svgElemToSvgString(svgElem);
                    } else if (hasUniqueIds) {
                      // Make IDs unique for already cached SVGs with better performance
                      svgString = makeIdsUniqueCached(uniqueIdsSvgString);
                    }
                  }
  
                  svgElem = svgElem || buildSvgElement(svgString, false);
  
                  inject(imgElem, svgElem, absUrl, options);
                }
                onFinish();
              };
  
              if (typeof svgLoad != _UNDEFINED_) {
                // Value for url exists in cache
                if (svgLoad.isCallbackQueue) {
                  // Same url has been cached, but value has not been loaded yet, so add to callbacks
                  svgLoad.push(handleLoadValue);
                } else {
                  handleLoadValue(svgLoad);
                }
                return;
              } else {
                var svgLoad = [];
                // set property isCallbackQueue to Array to differentiate from array with cached loaded values
                svgLoad.isCallbackQueue = true;
                svgLoadCache[absUrl] = svgLoad;
              }
            }
  
            // Load the SVG because it is not cached or caching is disabled
            loadSvg(absUrl, (function(svgXml, svgString) {
              // Use the XML from the XHR request if it is an instance of Document. Otherwise
              // (for example of IE9), create the svg document from the svg string.
              var svgElem = svgXml instanceof Document ? svgXml.documentElement : buildSvgElement(svgString, true);
  
              var afterLoad = options.afterLoad;
              if (afterLoad) {
                // Invoke afterLoad hook which may modify the SVG element. After load may also return a new
                // svg element or svg string
                var svgElemOrSvgString = afterLoad(svgElem, svgString) || svgElem;
                if (svgElemOrSvgString) {
                  // Update svgElem and svgString because of modifications to the SVG element or SVG string in
                  // the afterLoad hook, so the modified SVG is also used for all later cached injections
                  var isString = typeof svgElemOrSvgString == 'string';
                  svgString = isString ? svgElemOrSvgString : svgElemToSvgString(svgElem);
                  svgElem = isString ? buildSvgElement(svgElemOrSvgString, true) : svgElemOrSvgString;
                }
              }
  
              if (svgElem instanceof SVGElement) {
                var hasUniqueIds = NULL;
                if (makeIdsUniqueOption) {
                  hasUniqueIds = makeIdsUnique(svgElem, false);
                }
  
                if (useCacheOption) {
                  var uniqueIdsSvgString = hasUniqueIds && svgElemToSvgString(svgElem);
                  // set an array with three entries to the load cache
                  setSvgLoadCacheValue([hasUniqueIds, svgString, uniqueIdsSvgString]);
                }
  
                inject(imgElem, svgElem, absUrl, options);
              } else {
                svgInvalid(imgElem, options);
                setSvgLoadCacheValue(SVG_INVALID);
              }
              onFinish();
            }), (function() {
              loadFail(imgElem, options);
              setSvgLoadCacheValue(LOAD_FAIL);
              onFinish();
            }));
          } else {
            if (Array.isArray(svgInjectAttributeValue)) {
              // svgInjectAttributeValue is an array. Injection is not complete so register callback
              svgInjectAttributeValue.push(callback);
            } else {
              callback();
            }
          }
        } else {
          imgNotSet();
        }
      }
  
  
      /**
       * Sets the default [options](#options) for SVGInject.
       *
       * @param {Object} [options] - default [options](#options) for an injection.
       */
      SVGInject.setOptions = function(options) {
        defaultOptions = mergeOptions(defaultOptions, options);
      };
  
  
      // Create a new instance of SVGInject
      SVGInject.create = createSVGInject;
  
  
      /**
       * Used in onerror Event of an `<img>` element to handle cases when the loading the original src fails
       * (for example if file is not found or if the browser does not support SVG). This triggers a call to the
       * options onFail hook if available. The optional second parameter will be set as the new src attribute
       * for the img element.
       *
       * @param {HTMLImageElement} img - an img element
       * @param {String} [fallbackSrc] - optional parameter fallback src
       */
      SVGInject.err = function(img, fallbackSrc) {
        if (img) {
          if (img[__SVGINJECT] != FAIL) {
            removeEventListeners(img);
  
            if (!IS_SVG_SUPPORTED) {
              svgNotSupported(img, defaultOptions);
            } else {
              removeOnLoadAttribute(img);
              loadFail(img, defaultOptions);
            }
            if (fallbackSrc) {
              removeOnLoadAttribute(img);
              img.src = fallbackSrc;
            }
          }
        } else {
          imgNotSet();
        }
      };
  
      window[globalName] = SVGInject;
  
      return SVGInject;
    }
  
    var SVGInjectInstance = createSVGInject('SVGInject');
  
    if (typeof module == 'object' && typeof module.exports == 'object') {
      module.exports = SVGInjectInstance;
    }
  })(window, document);