module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/campaign/[id]/requests/new.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./lib/getETHPrice.js":
/*!****************************!*\
  !*** ./lib/getETHPrice.js ***!
  \****************************/
/*! exports provided: getETHPrice, getWEIPriceInUSD, getETHPriceInUSD, convertWeiToETH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getETHPrice", function() { return getETHPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWEIPriceInUSD", function() { return getWEIPriceInUSD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getETHPriceInUSD", function() { return getETHPriceInUSD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertWeiToETH", function() { return convertWeiToETH; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);

const getETHPrice = async () => {
  try {
    const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum");
    const data = await response.json();
    const ethPrice = data[0].current_price;
    return parseFloat(parseFloat(ethPrice).toFixed(2));
  } catch (error) {
    console.log(error);
  }
};
const getWEIPriceInUSD = (usd, wei) => {
  return parseFloat(convertWeiToETH(wei) * usd).toFixed(2);
};
const getETHPriceInUSD = (usd, eth) => {
  return parseFloat(eth * usd).toFixed(2);
};
const convertWeiToETH = wei => {
  return parseFloat(wei) / 1000000000000000000;
};

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

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

/***/ }),

/***/ "./pages/campaign/[id]/requests/new.js":
/*!*********************************************!*\
  !*** ./pages/campaign/[id]/requests/new.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewRequest; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_getETHPrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../lib/getETHPrice */ "./lib/getETHPrice.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _smart_contract_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../smart-contract/web3 */ "./smart-contract/web3.js");
/* harmony import */ var _smart_contract_campaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../smart-contract/campaign */ "./smart-contract/campaign.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Pranati\\Mini project\\Anudaan-main\\pages\\campaign\\[id]\\requests\\new.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function NewRequest() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    handleSubmit,
    register,
    formState: {
      isSubmitting,
      errors
    }
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    mode: "onChange"
  });
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])("");
  const {
    0: inUSD,
    1: setInUSD
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])();
  const {
    0: ETHPrice,
    1: setETHPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0);
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_4__["useWallet"])();
  Object(react_use__WEBPACK_IMPORTED_MODULE_12__["useAsync"])(async () => {
    try {
      const result = await Object(_lib_getETHPrice__WEBPACK_IMPORTED_MODULE_8__["getETHPrice"])();
      setETHPrice(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function onSubmit(data) {
    console.log(data);
    const campaign = Object(_smart_contract_campaign__WEBPACK_IMPORTED_MODULE_11__["default"])(id);

    try {
      const accounts = await _smart_contract_web3__WEBPACK_IMPORTED_MODULE_10__["default"].eth.getAccounts();
      await campaign.methods.createRequest(data.description, _smart_contract_web3__WEBPACK_IMPORTED_MODULE_10__["default"].utils.toWei(data.value, "ether"), data.recipient).send({
        from: accounts[0]
      });
      router.push(`/campaign/${id}/requests`);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Create a Withdrawal Request"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Create a Withdrawal Request"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/logo.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
        spacing: 8,
        mx: "auto",
        maxW: "2xl",
        py: 12,
        px: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          fontSize: "lg",
          color: "purple.700",
          justifyContent: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowBackIcon"], {
            mr: 2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: `/campaign/${id}/requests`,
            children: "Back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Heading"], {
            fontSize: "4xl",
            children: "Create a Withdrawal Request"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Box"], {
          rounded: "lg",
          bg: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["useColorModeValue"])("white", "gray.700"),
          boxShadow: "lg",
          p: 8,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: handleSubmit(onSubmit),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
              spacing: 4,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
                id: "description",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormLabel"], {
                  children: "Request Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Textarea"], _objectSpread(_objectSpread({}, register("description", {
                  required: true
                })), {}, {
                  isDisabled: isSubmitting
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
                id: "value",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormLabel"], {
                  children: "Amount in Ether"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], _objectSpread(_objectSpread({
                    type: "number"
                  }, register("value", {
                    required: true
                  })), {}, {
                    isDisabled: isSubmitting,
                    onChange: e => {
                      setInUSD(Math.abs(e.target.value));
                    },
                    step: "any"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 21
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["InputRightAddon"], {
                    children: "ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, this), inUSD ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormHelperText"], {
                  children: ["~$ ", Object(_lib_getETHPrice__WEBPACK_IMPORTED_MODULE_8__["getETHPriceInUSD"])(ETHPrice, inUSD)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 21
                }, this) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
                id: "recipient",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["FormLabel"], {
                  htmlFor: "recipient",
                  children: "Recipient Ethereum Wallet Address"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], _objectSpread(_objectSpread({
                  name: "recipient"
                }, register("recipient", {
                  required: true
                })), {}, {
                  isDisabled: isSubmitting
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, this), errors.description || errors.value || errors.recipient ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
                status: "error",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertIcon"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertDescription"], {
                  mr: 2,
                  children: [" ", "All Fields are Required"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 19
              }, this) : null, error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
                status: "error",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertIcon"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertDescription"], {
                  mr: 2,
                  children: [" ", error]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 19
              }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
                spacing: 10,
                children: wallet.status === "connected" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
                  bgGradient: "linear(to-r, purple.600,blue.500)",
                  color: "white",
                  _hover: {
                    bgGradient: "linear(to-r, purple.400,blue.400)",
                    boxShadow: "xl"
                  },
                  isLoading: isSubmitting,
                  type: "submit",
                  children: "Create Withdrawal Request"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 21
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
                  spacing: 3,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
                    color: "white",
                    bg: "purple.700",
                    _hover: {
                      bg: "purple.500"
                    },
                    onClick: () => wallet.connect(),
                    children: ["Connect Wallet", " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
                    status: "warning",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertIcon"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertDescription"], {
                      mr: 2,
                      children: "Please Connect Your Wallet First to Create a Request"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./smart-contract/build/Campaign.json":
/*!********************************************!*\
  !*** ./smart-contract/build/Campaign.json ***!
  \********************************************/
/*! exports provided: assembly, bytecode, functionHashes, gasEstimates, interface, metadata, opcodes, runtimeBytecode, srcmap, srcmapRuntime, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"assembly\":{\".code\":[{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":462,\"end\":2890,\"name\":\"MSTORE\"},{\"begin\":1068,\"end\":1363,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":1068,\"end\":1363,\"name\":\"POP\"},{\"begin\":1068,\"end\":1363,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1068,\"end\":1363,\"name\":\"MLOAD\"},{\"begin\":1068,\"end\":1363,\"name\":\"PUSHSIZE\"},{\"begin\":1068,\"end\":1363,\"name\":\"CODESIZE\"},{\"begin\":1068,\"end\":1363,\"name\":\"SUB\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP1\"},{\"begin\":1068,\"end\":1363,\"name\":\"PUSHSIZE\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP4\"},{\"begin\":1068,\"end\":1363,\"name\":\"CODECOPY\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP2\"},{\"begin\":1068,\"end\":1363,\"name\":\"ADD\"},{\"begin\":1068,\"end\":1363,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP1\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP2\"},{\"begin\":1068,\"end\":1363,\"name\":\"MSTORE\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP2\"},{\"begin\":1068,\"end\":1363,\"name\":\"MLOAD\"},{\"begin\":1068,\"end\":1363,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP1\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP5\"},{\"begin\":1068,\"end\":1363,\"name\":\"ADD\"},{\"begin\":1068,\"end\":1363,\"name\":\"MLOAD\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP3\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP5\"},{\"begin\":1068,\"end\":1363,\"name\":\"ADD\"},{\"begin\":1068,\"end\":1363,\"name\":\"MLOAD\"},{\"begin\":1068,\"end\":1363,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP6\"},{\"begin\":1068,\"end\":1363,\"name\":\"ADD\"},{\"begin\":1068,\"end\":1363,\"name\":\"MLOAD\"},{\"begin\":1068,\"end\":1363,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP7\"},{\"begin\":1068,\"end\":1363,\"name\":\"ADD\"},{\"begin\":1068,\"end\":1363,\"name\":\"MLOAD\"},{\"begin\":1068,\"end\":1363,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP8\"},{\"begin\":1068,\"end\":1363,\"name\":\"ADD\"},{\"begin\":1068,\"end\":1363,\"name\":\"MLOAD\"},{\"begin\":1188,\"end\":1195,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1188,\"end\":1205,\"name\":\"DUP1\"},{\"begin\":1188,\"end\":1205,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1188,\"end\":1205,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1188,\"end\":1205,\"name\":\"DUP10\"},{\"begin\":1188,\"end\":1205,\"name\":\"AND\"},{\"begin\":1188,\"end\":1205,\"name\":\"OR\"},{\"begin\":1188,\"end\":1205,\"name\":\"SWAP1\"},{\"begin\":1188,\"end\":1205,\"name\":\"SSTORE\"},{\"begin\":1213,\"end\":1232,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1213,\"end\":1242,\"name\":\"DUP7\"},{\"begin\":1213,\"end\":1242,\"name\":\"SWAP1\"},{\"begin\":1213,\"end\":1242,\"name\":\"SSTORE\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP3\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP8\"},{\"begin\":1068,\"end\":1363,\"name\":\"ADD\"},{\"begin\":1250,\"end\":1267,\"name\":\"DUP1\"},{\"begin\":1250,\"end\":1267,\"name\":\"MLOAD\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP6\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP8\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP1\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP6\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP3\"},{\"begin\":1068,\"end\":1363,\"name\":\"DUP2\"},{\"begin\":1068,\"end\":1363,\"name\":\"ADD\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP5\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP2\"},{\"begin\":1068,\"end\":1363,\"name\":\"ADD\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP3\"},{\"begin\":1068,\"end\":1363,\"name\":\"SWAP2\"},{\"begin\":1250,\"end\":1267,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":1250,\"end\":1267,\"name\":\"SWAP2\"},{\"begin\":1250,\"end\":1262,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1250,\"end\":1262,\"name\":\"SWAP2\"},{\"begin\":1250,\"end\":1267,\"name\":\"SWAP1\"},{\"begin\":1250,\"end\":1267,\"name\":\"DUP8\"},{\"begin\":1250,\"end\":1267,\"name\":\"ADD\"},{\"begin\":1250,\"end\":1267,\"name\":\"SWAP1\"},{\"begin\":1250,\"end\":1267,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":1250,\"end\":1267,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":1250,\"end\":1267,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":1250,\"end\":1267,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1275,\"end\":1306,\"name\":\"DUP3\"},{\"begin\":1275,\"end\":1306,\"name\":\"MLOAD\"},{\"begin\":1275,\"end\":1306,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":1275,\"end\":1306,\"name\":\"SWAP1\"},{\"begin\":1275,\"end\":1294,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1275,\"end\":1294,\"name\":\"SWAP1\"},{\"begin\":1275,\"end\":1306,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1275,\"end\":1306,\"name\":\"DUP7\"},{\"begin\":1275,\"end\":1306,\"name\":\"ADD\"},{\"begin\":1275,\"end\":1306,\"name\":\"SWAP1\"},{\"begin\":1275,\"end\":1306,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":1275,\"end\":1306,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":1275,\"end\":1306,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":1275,\"end\":1306,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1314,\"end\":1328,\"name\":\"DUP2\"},{\"begin\":1314,\"end\":1328,\"name\":\"MLOAD\"},{\"begin\":1314,\"end\":1328,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":1314,\"end\":1328,\"name\":\"SWAP1\"},{\"begin\":1314,\"end\":1322,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":1314,\"end\":1322,\"name\":\"SWAP1\"},{\"begin\":1314,\"end\":1328,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1314,\"end\":1328,\"name\":\"DUP6\"},{\"begin\":1314,\"end\":1328,\"name\":\"ADD\"},{\"begin\":1314,\"end\":1328,\"name\":\"SWAP1\"},{\"begin\":1314,\"end\":1328,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":1314,\"end\":1328,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":1314,\"end\":1328,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":1314,\"end\":1328,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1336,\"end\":1351,\"name\":\"PUSH\",\"value\":\"6\"},{\"begin\":1336,\"end\":1358,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"SLOAD\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"AND\"},{\"begin\":462,\"end\":2890,\"name\":\"ISZERO\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":462,\"end\":2890,\"name\":\"MUL\"},{\"begin\":462,\"end\":2890,\"name\":\"SUB\"},{\"begin\":462,\"end\":2890,\"name\":\"AND\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"DIV\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":2890,\"name\":\"MSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":2890,\"name\":\"KECCAK256\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"DIV\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP3\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":462,\"end\":2890,\"name\":\"LT\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"MLOAD\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":462,\"end\":2890,\"name\":\"NOT\"},{\"begin\":462,\"end\":2890,\"name\":\"AND\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP4\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"OR\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP6\"},{\"begin\":462,\"end\":2890,\"name\":\"SSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP6\"},{\"begin\":462,\"end\":2890,\"name\":\"SSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"ISZERO\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"GT\"},{\"begin\":462,\"end\":2890,\"name\":\"ISZERO\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"MLOAD\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"SSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP3\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"13\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"POP\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"16\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"GT\"},{\"begin\":462,\"end\":2890,\"name\":\"ISZERO\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"SSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"15\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH #[$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":2890,\"name\":\"CODECOPY\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":2890,\"name\":\"RETURN\"}],\".data\":{\"0\":{\".auxdata\":\"a165627a7a72305820aad25d8e217824a555bc1bdd5e1a9f3e747c267124ae4c557b53e47d0e434d790029\",\".code\":[{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":462,\"end\":2890,\"name\":\"MSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":462,\"end\":2890,\"name\":\"CALLDATASIZE\"},{\"begin\":462,\"end\":2890,\"name\":\"LT\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"FFFFFFFF\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"100000000000000000000000000000000000000000000000000000000\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":2890,\"name\":\"CALLDATALOAD\"},{\"begin\":462,\"end\":2890,\"name\":\"DIV\"},{\"begin\":462,\"end\":2890,\"name\":\"AND\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"3441006\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"2\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"A144391\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"3\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1FBED579\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"3410452A\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"4051DDAC\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"481C6A75\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"7E7CD1B3\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"81D12C58\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"82FDE093\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"8A9CFD55\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"97654A8C\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"A7F33715\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"ABA83150\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"B2A87FC3\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"D7D1BBDB\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"EA25213F\"},{\"begin\":462,\"end\":2890,\"name\":\"EQ\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"17\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"REVERT\"},{\"begin\":2126,\"end\":2402,\"name\":\"tag\",\"value\":\"2\"},{\"begin\":2126,\"end\":2402,\"name\":\"JUMPDEST\"},{\"begin\":2126,\"end\":2402,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"18\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"18\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2126,\"end\":2402,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":2126,\"end\":2402,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2126,\"end\":2402,\"name\":\"CALLDATALOAD\"},{\"begin\":2126,\"end\":2402,\"name\":\"PUSH [tag]\",\"value\":\"20\"},{\"begin\":2126,\"end\":2402,\"name\":\"JUMP\"},{\"begin\":2126,\"end\":2402,\"name\":\"tag\",\"value\":\"19\"},{\"begin\":2126,\"end\":2402,\"name\":\"JUMPDEST\"},{\"begin\":2126,\"end\":2402,\"name\":\"STOP\"},{\"begin\":913,\"end\":954,\"name\":\"tag\",\"value\":\"3\"},{\"begin\":913,\"end\":954,\"name\":\"JUMPDEST\"},{\"begin\":913,\"end\":954,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"21\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"21\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":913,\"end\":954,\"name\":\"PUSH [tag]\",\"value\":\"22\"},{\"begin\":913,\"end\":954,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":913,\"end\":954,\"name\":\"CALLDATALOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":913,\"end\":954,\"name\":\"AND\"},{\"begin\":913,\"end\":954,\"name\":\"PUSH [tag]\",\"value\":\"23\"},{\"begin\":913,\"end\":954,\"name\":\"JUMP\"},{\"begin\":913,\"end\":954,\"name\":\"tag\",\"value\":\"22\"},{\"begin\":913,\"end\":954,\"name\":\"JUMPDEST\"},{\"begin\":913,\"end\":954,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":913,\"end\":954,\"name\":\"DUP1\"},{\"begin\":913,\"end\":954,\"name\":\"MLOAD\"},{\"begin\":913,\"end\":954,\"name\":\"SWAP2\"},{\"begin\":913,\"end\":954,\"name\":\"ISZERO\"},{\"begin\":913,\"end\":954,\"name\":\"ISZERO\"},{\"begin\":913,\"end\":954,\"name\":\"DUP3\"},{\"begin\":913,\"end\":954,\"name\":\"MSTORE\"},{\"begin\":913,\"end\":954,\"name\":\"MLOAD\"},{\"begin\":913,\"end\":954,\"name\":\"SWAP1\"},{\"begin\":913,\"end\":954,\"name\":\"DUP2\"},{\"begin\":913,\"end\":954,\"name\":\"SWAP1\"},{\"begin\":913,\"end\":954,\"name\":\"SUB\"},{\"begin\":913,\"end\":954,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":913,\"end\":954,\"name\":\"ADD\"},{\"begin\":913,\"end\":954,\"name\":\"SWAP1\"},{\"begin\":913,\"end\":954,\"name\":\"RETURN\"},{\"begin\":880,\"end\":909,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":880,\"end\":909,\"name\":\"JUMPDEST\"},{\"begin\":880,\"end\":909,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"24\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"24\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":880,\"end\":909,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":880,\"end\":909,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":880,\"end\":909,\"name\":\"CALLDATALOAD\"},{\"begin\":880,\"end\":909,\"name\":\"PUSH [tag]\",\"value\":\"26\"},{\"begin\":880,\"end\":909,\"name\":\"JUMP\"},{\"begin\":880,\"end\":909,\"name\":\"tag\",\"value\":\"25\"},{\"begin\":880,\"end\":909,\"name\":\"JUMPDEST\"},{\"begin\":880,\"end\":909,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":880,\"end\":909,\"name\":\"DUP1\"},{\"begin\":880,\"end\":909,\"name\":\"MLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":880,\"end\":909,\"name\":\"SWAP1\"},{\"begin\":880,\"end\":909,\"name\":\"SWAP3\"},{\"begin\":880,\"end\":909,\"name\":\"AND\"},{\"begin\":880,\"end\":909,\"name\":\"DUP3\"},{\"begin\":880,\"end\":909,\"name\":\"MSTORE\"},{\"begin\":880,\"end\":909,\"name\":\"MLOAD\"},{\"begin\":880,\"end\":909,\"name\":\"SWAP1\"},{\"begin\":880,\"end\":909,\"name\":\"DUP2\"},{\"begin\":880,\"end\":909,\"name\":\"SWAP1\"},{\"begin\":880,\"end\":909,\"name\":\"SUB\"},{\"begin\":880,\"end\":909,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":880,\"end\":909,\"name\":\"ADD\"},{\"begin\":880,\"end\":909,\"name\":\"SWAP1\"},{\"begin\":880,\"end\":909,\"name\":\"RETURN\"},{\"begin\":2795,\"end\":2888,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":2795,\"end\":2888,\"name\":\"JUMPDEST\"},{\"begin\":2795,\"end\":2888,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"27\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"27\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":2795,\"end\":2888,\"name\":\"POP\"},{\"begin\":2795,\"end\":2888,\"name\":\"PUSH [tag]\",\"value\":\"28\"},{\"begin\":2795,\"end\":2888,\"name\":\"PUSH [tag]\",\"value\":\"29\"},{\"begin\":2795,\"end\":2888,\"name\":\"JUMP\"},{\"begin\":2795,\"end\":2888,\"name\":\"tag\",\"value\":\"28\"},{\"begin\":2795,\"end\":2888,\"name\":\"JUMPDEST\"},{\"begin\":2795,\"end\":2888,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2795,\"end\":2888,\"name\":\"DUP1\"},{\"begin\":2795,\"end\":2888,\"name\":\"MLOAD\"},{\"begin\":2795,\"end\":2888,\"name\":\"SWAP2\"},{\"begin\":2795,\"end\":2888,\"name\":\"DUP3\"},{\"begin\":2795,\"end\":2888,\"name\":\"MSTORE\"},{\"begin\":2795,\"end\":2888,\"name\":\"MLOAD\"},{\"begin\":2795,\"end\":2888,\"name\":\"SWAP1\"},{\"begin\":2795,\"end\":2888,\"name\":\"DUP2\"},{\"begin\":2795,\"end\":2888,\"name\":\"SWAP1\"},{\"begin\":2795,\"end\":2888,\"name\":\"SUB\"},{\"begin\":2795,\"end\":2888,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2795,\"end\":2888,\"name\":\"ADD\"},{\"begin\":2795,\"end\":2888,\"name\":\"SWAP1\"},{\"begin\":2795,\"end\":2888,\"name\":\"RETURN\"},{\"begin\":2409,\"end\":2789,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":2409,\"end\":2789,\"name\":\"JUMPDEST\"},{\"begin\":2409,\"end\":2789,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"30\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"30\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH [tag]\",\"value\":\"31\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH [tag]\",\"value\":\"32\"},{\"begin\":2409,\"end\":2789,\"name\":\"JUMP\"},{\"begin\":2409,\"end\":2789,\"name\":\"tag\",\"value\":\"31\"},{\"begin\":2409,\"end\":2789,\"name\":\"JUMPDEST\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2409,\"end\":2789,\"name\":\"MLOAD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP11\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP10\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP9\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP8\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP7\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"AND\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP6\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP5\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP5\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP9\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MLOAD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"MLOAD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP4\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"33\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"33\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"34\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2409,\"end\":2789,\"name\":\"AND\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"ISZERO\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH [tag]\",\"value\":\"36\"},{\"begin\":2409,\"end\":2789,\"name\":\"JUMPI\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP3\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"MLOAD\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP4\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2409,\"end\":2789,\"name\":\"EXP\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"NOT\"},{\"begin\":2409,\"end\":2789,\"name\":\"AND\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"tag\",\"value\":\"36\"},{\"begin\":2409,\"end\":2789,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP5\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP4\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP8\"},{\"begin\":2409,\"end\":2789,\"name\":\"MLOAD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP8\"},{\"begin\":2409,\"end\":2789,\"name\":\"MLOAD\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP3\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP10\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP4\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"37\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"38\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"37\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"38\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2409,\"end\":2789,\"name\":\"AND\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"ISZERO\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH [tag]\",\"value\":\"40\"},{\"begin\":2409,\"end\":2789,\"name\":\"JUMPI\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP3\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"MLOAD\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP4\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2409,\"end\":2789,\"name\":\"EXP\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"NOT\"},{\"begin\":2409,\"end\":2789,\"name\":\"AND\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"tag\",\"value\":\"40\"},{\"begin\":2409,\"end\":2789,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP5\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP3\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP7\"},{\"begin\":2409,\"end\":2789,\"name\":\"MLOAD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP7\"},{\"begin\":2409,\"end\":2789,\"name\":\"MLOAD\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP3\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP9\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP4\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"41\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"42\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"41\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"42\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2409,\"end\":2789,\"name\":\"AND\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"ISZERO\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH [tag]\",\"value\":\"44\"},{\"begin\":2409,\"end\":2789,\"name\":\"JUMPI\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP3\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"MLOAD\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP4\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2409,\"end\":2789,\"name\":\"EXP\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"NOT\"},{\"begin\":2409,\"end\":2789,\"name\":\"AND\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"MSTORE\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2409,\"end\":2789,\"name\":\"ADD\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"tag\",\"value\":\"44\"},{\"begin\":2409,\"end\":2789,\"name\":\"JUMPDEST\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP13\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2409,\"end\":2789,\"name\":\"MLOAD\"},{\"begin\":2409,\"end\":2789,\"name\":\"DUP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"SUB\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"RETURN\"},{\"begin\":695,\"end\":717,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":695,\"end\":717,\"name\":\"JUMPDEST\"},{\"begin\":695,\"end\":717,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"45\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"45\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":695,\"end\":717,\"name\":\"POP\"},{\"begin\":695,\"end\":717,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":695,\"end\":717,\"name\":\"PUSH [tag]\",\"value\":\"47\"},{\"begin\":695,\"end\":717,\"name\":\"JUMP\"},{\"begin\":756,\"end\":782,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":756,\"end\":782,\"name\":\"JUMPDEST\"},{\"begin\":756,\"end\":782,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"48\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"48\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH [tag]\",\"value\":\"49\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH [tag]\",\"value\":\"50\"},{\"begin\":756,\"end\":782,\"name\":\"JUMP\"},{\"begin\":756,\"end\":782,\"name\":\"tag\",\"value\":\"49\"},{\"begin\":756,\"end\":782,\"name\":\"JUMPDEST\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"MLOAD\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"DUP3\"},{\"begin\":756,\"end\":782,\"name\":\"MSTORE\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"MLOAD\"},{\"begin\":756,\"end\":782,\"name\":\"DUP2\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"MSTORE\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"MLOAD\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP2\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP3\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP3\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP2\"},{\"begin\":756,\"end\":782,\"name\":\"DUP6\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"51\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"52\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"51\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"52\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"DUP2\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":756,\"end\":782,\"name\":\"AND\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"ISZERO\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH [tag]\",\"value\":\"54\"},{\"begin\":756,\"end\":782,\"name\":\"JUMPI\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"DUP3\"},{\"begin\":756,\"end\":782,\"name\":\"SUB\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"MLOAD\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":756,\"end\":782,\"name\":\"SUB\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":756,\"end\":782,\"name\":\"EXP\"},{\"begin\":756,\"end\":782,\"name\":\"SUB\"},{\"begin\":756,\"end\":782,\"name\":\"NOT\"},{\"begin\":756,\"end\":782,\"name\":\"AND\"},{\"begin\":756,\"end\":782,\"name\":\"DUP2\"},{\"begin\":756,\"end\":782,\"name\":\"MSTORE\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP2\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"tag\",\"value\":\"54\"},{\"begin\":756,\"end\":782,\"name\":\"JUMPDEST\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP3\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":756,\"end\":782,\"name\":\"MLOAD\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP2\"},{\"begin\":756,\"end\":782,\"name\":\"SUB\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"RETURN\"},{\"begin\":666,\"end\":691,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPDEST\"},{\"begin\":666,\"end\":691,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"55\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"55\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH [tag]\",\"value\":\"56\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":666,\"end\":691,\"name\":\"CALLDATALOAD\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH [tag]\",\"value\":\"57\"},{\"begin\":666,\"end\":691,\"name\":\"JUMP\"},{\"begin\":666,\"end\":691,\"name\":\"tag\",\"value\":\"56\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPDEST\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"MLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"DUP8\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":666,\"end\":691,\"name\":\"DUP7\"},{\"begin\":666,\"end\":691,\"name\":\"AND\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP3\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP3\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP3\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"ISZERO\"},{\"begin\":666,\"end\":691,\"name\":\"ISZERO\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":666,\"end\":691,\"name\":\"DUP2\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":666,\"end\":691,\"name\":\"DUP8\"},{\"begin\":666,\"end\":691,\"name\":\"MLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":666,\"end\":691,\"name\":\"DUP7\"},{\"begin\":666,\"end\":691,\"name\":\"MLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"C0\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"DUP10\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"58\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"59\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"58\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"59\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP2\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":666,\"end\":691,\"name\":\"AND\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"ISZERO\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH [tag]\",\"value\":\"61\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPI\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"SUB\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"MLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":666,\"end\":691,\"name\":\"SUB\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":666,\"end\":691,\"name\":\"EXP\"},{\"begin\":666,\"end\":691,\"name\":\"SUB\"},{\"begin\":666,\"end\":691,\"name\":\"NOT\"},{\"begin\":666,\"end\":691,\"name\":\"AND\"},{\"begin\":666,\"end\":691,\"name\":\"DUP2\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"tag\",\"value\":\"61\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPDEST\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP7\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":666,\"end\":691,\"name\":\"MLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"SUB\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"RETURN\"},{\"begin\":958,\"end\":984,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":958,\"end\":984,\"name\":\"JUMPDEST\"},{\"begin\":958,\"end\":984,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"62\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"62\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":958,\"end\":984,\"name\":\"POP\"},{\"begin\":958,\"end\":984,\"name\":\"PUSH [tag]\",\"value\":\"28\"},{\"begin\":958,\"end\":984,\"name\":\"PUSH [tag]\",\"value\":\"64\"},{\"begin\":958,\"end\":984,\"name\":\"JUMP\"},{\"begin\":1559,\"end\":1885,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":1559,\"end\":1885,\"name\":\"JUMPDEST\"},{\"begin\":1559,\"end\":1885,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"65\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"65\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1559,\"end\":1885,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP1\"},{\"begin\":1559,\"end\":1885,\"name\":\"MLOAD\"},{\"begin\":1559,\"end\":1885,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1559,\"end\":1885,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP1\"},{\"begin\":1559,\"end\":1885,\"name\":\"CALLDATALOAD\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP1\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP3\"},{\"begin\":1559,\"end\":1885,\"name\":\"ADD\"},{\"begin\":1559,\"end\":1885,\"name\":\"CALLDATALOAD\"},{\"begin\":1559,\"end\":1885,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP2\"},{\"begin\":1559,\"end\":1885,\"name\":\"ADD\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP1\"},{\"begin\":1559,\"end\":1885,\"name\":\"DIV\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"MUL\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP6\"},{\"begin\":1559,\"end\":1885,\"name\":\"ADD\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"ADD\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP1\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP6\"},{\"begin\":1559,\"end\":1885,\"name\":\"MSTORE\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"MSTORE\"},{\"begin\":1559,\"end\":1885,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"CALLDATASIZE\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP3\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP4\"},{\"begin\":1559,\"end\":1885,\"name\":\"PUSH\",\"value\":\"24\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP4\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP3\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"ADD\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP2\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP1\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP2\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP1\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"ADD\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP4\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP3\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP1\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP3\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"CALLDATACOPY\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP8\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1559,\"end\":1885,\"name\":\"DUP5\"},{\"begin\":1559,\"end\":1885,\"name\":\"CALLDATALOAD\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP6\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1559,\"end\":1885,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP1\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP2\"},{\"begin\":1559,\"end\":1885,\"name\":\"ADD\"},{\"begin\":1559,\"end\":1885,\"name\":\"CALLDATALOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1559,\"end\":1885,\"name\":\"AND\"},{\"begin\":1559,\"end\":1885,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1559,\"end\":1885,\"name\":\"PUSH [tag]\",\"value\":\"67\"},{\"begin\":1559,\"end\":1885,\"name\":\"JUMP\"},{\"begin\":786,\"end\":819,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":786,\"end\":819,\"name\":\"JUMPDEST\"},{\"begin\":786,\"end\":819,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"68\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"68\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":786,\"end\":819,\"name\":\"POP\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH [tag]\",\"value\":\"49\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH [tag]\",\"value\":\"70\"},{\"begin\":786,\"end\":819,\"name\":\"JUMP\"},{\"begin\":721,\"end\":752,\"name\":\"tag\",\"value\":\"13\"},{\"begin\":721,\"end\":752,\"name\":\"JUMPDEST\"},{\"begin\":721,\"end\":752,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"75\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"75\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":721,\"end\":752,\"name\":\"POP\"},{\"begin\":721,\"end\":752,\"name\":\"PUSH [tag]\",\"value\":\"28\"},{\"begin\":721,\"end\":752,\"name\":\"PUSH [tag]\",\"value\":\"77\"},{\"begin\":721,\"end\":752,\"name\":\"JUMP\"},{\"begin\":823,\"end\":845,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":823,\"end\":845,\"name\":\"JUMPDEST\"},{\"begin\":823,\"end\":845,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"78\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"78\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":823,\"end\":845,\"name\":\"POP\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH [tag]\",\"value\":\"49\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH [tag]\",\"value\":\"80\"},{\"begin\":823,\"end\":845,\"name\":\"JUMP\"},{\"begin\":849,\"end\":876,\"name\":\"tag\",\"value\":\"15\"},{\"begin\":849,\"end\":876,\"name\":\"JUMPDEST\"},{\"begin\":849,\"end\":876,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"85\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"85\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":849,\"end\":876,\"name\":\"POP\"},{\"begin\":849,\"end\":876,\"name\":\"PUSH [tag]\",\"value\":\"28\"},{\"begin\":849,\"end\":876,\"name\":\"PUSH [tag]\",\"value\":\"87\"},{\"begin\":849,\"end\":876,\"name\":\"JUMP\"},{\"begin\":1889,\"end\":2122,\"name\":\"tag\",\"value\":\"16\"},{\"begin\":1889,\"end\":2122,\"name\":\"JUMPDEST\"},{\"begin\":1889,\"end\":2122,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"88\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"88\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1889,\"end\":2122,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":1889,\"end\":2122,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1889,\"end\":2122,\"name\":\"CALLDATALOAD\"},{\"begin\":1889,\"end\":2122,\"name\":\"PUSH [tag]\",\"value\":\"90\"},{\"begin\":1889,\"end\":2122,\"name\":\"JUMP\"},{\"begin\":1367,\"end\":1555,\"name\":\"tag\",\"value\":\"17\"},{\"begin\":1367,\"end\":1555,\"name\":\"JUMPDEST\"},{\"begin\":1367,\"end\":1555,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":1367,\"end\":1555,\"name\":\"PUSH [tag]\",\"value\":\"92\"},{\"begin\":1367,\"end\":1555,\"name\":\"JUMP\"},{\"begin\":2126,\"end\":2402,\"name\":\"tag\",\"value\":\"20\"},{\"begin\":2126,\"end\":2402,\"name\":\"JUMPDEST\"},{\"begin\":1042,\"end\":1049,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1042,\"end\":1049,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1042,\"end\":1049,\"name\":\"AND\"},{\"begin\":1028,\"end\":1038,\"name\":\"CALLER\"},{\"begin\":1028,\"end\":1049,\"name\":\"EQ\"},{\"begin\":1020,\"end\":1050,\"name\":\"PUSH [tag]\",\"value\":\"94\"},{\"begin\":1020,\"end\":1050,\"name\":\"JUMPI\"},{\"begin\":1020,\"end\":1050,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1020,\"end\":1050,\"name\":\"DUP1\"},{\"begin\":1020,\"end\":1050,\"name\":\"REVERT\"},{\"begin\":1020,\"end\":1050,\"name\":\"tag\",\"value\":\"94\"},{\"begin\":1020,\"end\":1050,\"name\":\"JUMPDEST\"},{\"begin\":2229,\"end\":2243,\"name\":\"PUSH\",\"value\":\"9\"},{\"begin\":2229,\"end\":2243,\"name\":\"SLOAD\"},{\"begin\":2246,\"end\":2247,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2246,\"end\":2247,\"name\":\"SWAP1\"},{\"begin\":2229,\"end\":2247,\"name\":\"DIV\"},{\"begin\":2196,\"end\":2204,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2205,\"end\":2210,\"name\":\"DUP3\"},{\"begin\":2196,\"end\":2211,\"name\":\"DUP2\"},{\"begin\":2196,\"end\":2211,\"name\":\"SLOAD\"},{\"begin\":2196,\"end\":2211,\"name\":\"DUP2\"},{\"begin\":2196,\"end\":2211,\"name\":\"LT\"},{\"begin\":2196,\"end\":2211,\"name\":\"ISZERO\"},{\"begin\":2196,\"end\":2211,\"name\":\"ISZERO\"},{\"begin\":2196,\"end\":2211,\"name\":\"PUSH [tag]\",\"value\":\"97\"},{\"begin\":2196,\"end\":2211,\"name\":\"JUMPI\"},{\"begin\":2196,\"end\":2211,\"name\":\"INVALID\"},{\"begin\":2196,\"end\":2211,\"name\":\"tag\",\"value\":\"97\"},{\"begin\":2196,\"end\":2211,\"name\":\"JUMPDEST\"},{\"begin\":2196,\"end\":2211,\"name\":\"SWAP1\"},{\"begin\":2196,\"end\":2211,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2196,\"end\":2211,\"name\":\"MSTORE\"},{\"begin\":2196,\"end\":2211,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2196,\"end\":2211,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2196,\"end\":2211,\"name\":\"KECCAK256\"},{\"begin\":2196,\"end\":2211,\"name\":\"SWAP1\"},{\"begin\":2196,\"end\":2211,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2196,\"end\":2211,\"name\":\"MUL\"},{\"begin\":2196,\"end\":2211,\"name\":\"ADD\"},{\"begin\":2196,\"end\":2225,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2196,\"end\":2225,\"name\":\"ADD\"},{\"begin\":2196,\"end\":2225,\"name\":\"SLOAD\"},{\"begin\":2196,\"end\":2248,\"name\":\"GT\"},{\"begin\":2188,\"end\":2249,\"name\":\"ISZERO\"},{\"begin\":2188,\"end\":2249,\"name\":\"ISZERO\"},{\"begin\":2188,\"end\":2249,\"name\":\"PUSH [tag]\",\"value\":\"99\"},{\"begin\":2188,\"end\":2249,\"name\":\"JUMPI\"},{\"begin\":2188,\"end\":2249,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2188,\"end\":2249,\"name\":\"DUP1\"},{\"begin\":2188,\"end\":2249,\"name\":\"REVERT\"},{\"begin\":2188,\"end\":2249,\"name\":\"tag\",\"value\":\"99\"},{\"begin\":2188,\"end\":2249,\"name\":\"JUMPDEST\"},{\"begin\":2266,\"end\":2274,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2266,\"end\":2281,\"name\":\"DUP1\"},{\"begin\":2266,\"end\":2281,\"name\":\"SLOAD\"},{\"begin\":2275,\"end\":2280,\"name\":\"DUP3\"},{\"begin\":2275,\"end\":2280,\"name\":\"SWAP1\"},{\"begin\":2266,\"end\":2281,\"name\":\"DUP2\"},{\"begin\":2266,\"end\":2281,\"name\":\"LT\"},{\"begin\":2266,\"end\":2281,\"name\":\"PUSH [tag]\",\"value\":\"100\"},{\"begin\":2266,\"end\":2281,\"name\":\"JUMPI\"},{\"begin\":2266,\"end\":2281,\"name\":\"INVALID\"},{\"begin\":2266,\"end\":2281,\"name\":\"tag\",\"value\":\"100\"},{\"begin\":2266,\"end\":2281,\"name\":\"JUMPDEST\"},{\"begin\":2266,\"end\":2281,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2266,\"end\":2281,\"name\":\"SWAP2\"},{\"begin\":2266,\"end\":2281,\"name\":\"DUP3\"},{\"begin\":2266,\"end\":2281,\"name\":\"MSTORE\"},{\"begin\":2266,\"end\":2281,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2266,\"end\":2281,\"name\":\"SWAP1\"},{\"begin\":2266,\"end\":2281,\"name\":\"SWAP2\"},{\"begin\":2266,\"end\":2281,\"name\":\"KECCAK256\"},{\"begin\":2266,\"end\":2281,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2266,\"end\":2281,\"name\":\"SWAP1\"},{\"begin\":2266,\"end\":2281,\"name\":\"SWAP2\"},{\"begin\":2266,\"end\":2281,\"name\":\"MUL\"},{\"begin\":2266,\"end\":2281,\"name\":\"ADD\"},{\"begin\":2266,\"end\":2290,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2266,\"end\":2290,\"name\":\"ADD\"},{\"begin\":2266,\"end\":2290,\"name\":\"SLOAD\"},{\"begin\":2266,\"end\":2290,\"name\":\"PUSH\",\"value\":\"10000000000000000000000000000000000000000\"},{\"begin\":2266,\"end\":2290,\"name\":\"SWAP1\"},{\"begin\":2266,\"end\":2290,\"name\":\"DIV\"},{\"begin\":2266,\"end\":2290,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2266,\"end\":2290,\"name\":\"AND\"},{\"begin\":2265,\"end\":2290,\"name\":\"ISZERO\"},{\"begin\":2257,\"end\":2291,\"name\":\"PUSH [tag]\",\"value\":\"102\"},{\"begin\":2257,\"end\":2291,\"name\":\"JUMPI\"},{\"begin\":2257,\"end\":2291,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2257,\"end\":2291,\"name\":\"DUP1\"},{\"begin\":2257,\"end\":2291,\"name\":\"REVERT\"},{\"begin\":2257,\"end\":2291,\"name\":\"tag\",\"value\":\"102\"},{\"begin\":2257,\"end\":2291,\"name\":\"JUMPDEST\"},{\"begin\":2300,\"end\":2308,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2300,\"end\":2315,\"name\":\"DUP1\"},{\"begin\":2300,\"end\":2315,\"name\":\"SLOAD\"},{\"begin\":2309,\"end\":2314,\"name\":\"DUP3\"},{\"begin\":2309,\"end\":2314,\"name\":\"SWAP1\"},{\"begin\":2300,\"end\":2315,\"name\":\"DUP2\"},{\"begin\":2300,\"end\":2315,\"name\":\"LT\"},{\"begin\":2300,\"end\":2315,\"name\":\"PUSH [tag]\",\"value\":\"103\"},{\"begin\":2300,\"end\":2315,\"name\":\"JUMPI\"},{\"begin\":2300,\"end\":2315,\"name\":\"INVALID\"},{\"begin\":2300,\"end\":2315,\"name\":\"tag\",\"value\":\"103\"},{\"begin\":2300,\"end\":2315,\"name\":\"JUMPDEST\"},{\"begin\":2300,\"end\":2315,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2300,\"end\":2315,\"name\":\"SWAP2\"},{\"begin\":2300,\"end\":2315,\"name\":\"DUP3\"},{\"begin\":2300,\"end\":2315,\"name\":\"MSTORE\"},{\"begin\":2300,\"end\":2315,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2300,\"end\":2315,\"name\":\"DUP3\"},{\"begin\":2300,\"end\":2315,\"name\":\"KECCAK256\"},{\"begin\":2300,\"end\":2315,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2300,\"end\":2315,\"name\":\"SWAP2\"},{\"begin\":2300,\"end\":2315,\"name\":\"SWAP1\"},{\"begin\":2300,\"end\":2315,\"name\":\"SWAP2\"},{\"begin\":2300,\"end\":2315,\"name\":\"MUL\"},{\"begin\":2300,\"end\":2315,\"name\":\"ADD\"},{\"begin\":2300,\"end\":2325,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2300,\"end\":2325,\"name\":\"ADD\"},{\"begin\":2300,\"end\":2325,\"name\":\"SLOAD\"},{\"begin\":2335,\"end\":2350,\"name\":\"DUP2\"},{\"begin\":2335,\"end\":2350,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2300,\"end\":2325,\"name\":\"SWAP1\"},{\"begin\":2300,\"end\":2325,\"name\":\"SWAP2\"},{\"begin\":2300,\"end\":2325,\"name\":\"AND\"},{\"begin\":2300,\"end\":2325,\"name\":\"SWAP2\"},{\"begin\":2300,\"end\":2357,\"name\":\"PUSH\",\"value\":\"8FC\"},{\"begin\":2300,\"end\":2357,\"name\":\"SWAP2\"},{\"begin\":2344,\"end\":2349,\"name\":\"DUP5\"},{\"begin\":2344,\"end\":2349,\"name\":\"SWAP1\"},{\"begin\":2335,\"end\":2350,\"name\":\"DUP2\"},{\"begin\":2335,\"end\":2350,\"name\":\"LT\"},{\"begin\":2335,\"end\":2350,\"name\":\"PUSH [tag]\",\"value\":\"105\"},{\"begin\":2335,\"end\":2350,\"name\":\"JUMPI\"},{\"begin\":2335,\"end\":2350,\"name\":\"INVALID\"},{\"begin\":2335,\"end\":2350,\"name\":\"tag\",\"value\":\"105\"},{\"begin\":2335,\"end\":2350,\"name\":\"JUMPDEST\"},{\"begin\":2335,\"end\":2350,\"name\":\"SWAP1\"},{\"begin\":2335,\"end\":2350,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2335,\"end\":2350,\"name\":\"MSTORE\"},{\"begin\":2335,\"end\":2350,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2335,\"end\":2350,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2335,\"end\":2350,\"name\":\"KECCAK256\"},{\"begin\":2335,\"end\":2350,\"name\":\"SWAP1\"},{\"begin\":2335,\"end\":2350,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2335,\"end\":2350,\"name\":\"MUL\"},{\"begin\":2335,\"end\":2350,\"name\":\"ADD\"},{\"begin\":2335,\"end\":2356,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2335,\"end\":2356,\"name\":\"ADD\"},{\"begin\":2335,\"end\":2356,\"name\":\"SLOAD\"},{\"begin\":2300,\"end\":2357,\"name\":\"SWAP1\"},{\"begin\":2300,\"end\":2357,\"name\":\"DUP2\"},{\"begin\":2300,\"end\":2357,\"name\":\"ISZERO\"},{\"begin\":2300,\"end\":2357,\"name\":\"MUL\"},{\"begin\":2300,\"end\":2357,\"name\":\"SWAP1\"},{\"begin\":2300,\"end\":2357,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2300,\"end\":2357,\"name\":\"MLOAD\"},{\"begin\":2300,\"end\":2357,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2300,\"end\":2357,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2300,\"end\":2357,\"name\":\"MLOAD\"},{\"begin\":2300,\"end\":2357,\"name\":\"DUP1\"},{\"begin\":2300,\"end\":2357,\"name\":\"DUP4\"},{\"begin\":2300,\"end\":2357,\"name\":\"SUB\"},{\"begin\":2300,\"end\":2357,\"name\":\"DUP2\"},{\"begin\":2300,\"end\":2357,\"name\":\"DUP6\"},{\"begin\":2300,\"end\":2357,\"name\":\"DUP9\"},{\"begin\":2300,\"end\":2357,\"name\":\"DUP9\"},{\"begin\":2300,\"end\":2357,\"name\":\"CALL\"},{\"begin\":2300,\"end\":2357,\"name\":\"SWAP4\"},{\"begin\":2300,\"end\":2357,\"name\":\"POP\"},{\"begin\":2300,\"end\":2357,\"name\":\"POP\"},{\"begin\":2300,\"end\":2357,\"name\":\"POP\"},{\"begin\":2300,\"end\":2357,\"name\":\"POP\"},{\"begin\":2300,\"end\":2357,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"107\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":45,\"end\":61,\"name\":\"RETURNDATASIZE\"},{\"begin\":42,\"end\":43,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":39,\"end\":40,\"name\":\"DUP1\"},{\"begin\":24,\"end\":62,\"name\":\"RETURNDATACOPY\"},{\"begin\":77,\"end\":93,\"name\":\"RETURNDATASIZE\"},{\"begin\":74,\"end\":75,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":67,\"end\":94,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"107\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":2300,\"end\":2357,\"name\":\"POP\"},{\"begin\":2392,\"end\":2396,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2365,\"end\":2373,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2374,\"end\":2379,\"name\":\"DUP3\"},{\"begin\":2365,\"end\":2380,\"name\":\"DUP2\"},{\"begin\":2365,\"end\":2380,\"name\":\"SLOAD\"},{\"begin\":2365,\"end\":2380,\"name\":\"DUP2\"},{\"begin\":2365,\"end\":2380,\"name\":\"LT\"},{\"begin\":2365,\"end\":2380,\"name\":\"ISZERO\"},{\"begin\":2365,\"end\":2380,\"name\":\"ISZERO\"},{\"begin\":2365,\"end\":2380,\"name\":\"PUSH [tag]\",\"value\":\"108\"},{\"begin\":2365,\"end\":2380,\"name\":\"JUMPI\"},{\"begin\":2365,\"end\":2380,\"name\":\"INVALID\"},{\"begin\":2365,\"end\":2380,\"name\":\"tag\",\"value\":\"108\"},{\"begin\":2365,\"end\":2380,\"name\":\"JUMPDEST\"},{\"begin\":2365,\"end\":2380,\"name\":\"SWAP1\"},{\"begin\":2365,\"end\":2380,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2365,\"end\":2380,\"name\":\"MSTORE\"},{\"begin\":2365,\"end\":2380,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2365,\"end\":2380,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2365,\"end\":2380,\"name\":\"KECCAK256\"},{\"begin\":2365,\"end\":2380,\"name\":\"SWAP1\"},{\"begin\":2365,\"end\":2380,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2365,\"end\":2380,\"name\":\"MUL\"},{\"begin\":2365,\"end\":2380,\"name\":\"ADD\"},{\"begin\":2365,\"end\":2389,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2365,\"end\":2389,\"name\":\"ADD\"},{\"begin\":2365,\"end\":2389,\"name\":\"PUSH\",\"value\":\"14\"},{\"begin\":2365,\"end\":2396,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2365,\"end\":2396,\"name\":\"EXP\"},{\"begin\":2365,\"end\":2396,\"name\":\"DUP2\"},{\"begin\":2365,\"end\":2396,\"name\":\"SLOAD\"},{\"begin\":2365,\"end\":2396,\"name\":\"DUP2\"},{\"begin\":2365,\"end\":2396,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2365,\"end\":2396,\"name\":\"MUL\"},{\"begin\":2365,\"end\":2396,\"name\":\"NOT\"},{\"begin\":2365,\"end\":2396,\"name\":\"AND\"},{\"begin\":2365,\"end\":2396,\"name\":\"SWAP1\"},{\"begin\":2365,\"end\":2396,\"name\":\"DUP4\"},{\"begin\":2365,\"end\":2396,\"name\":\"ISZERO\"},{\"begin\":2365,\"end\":2396,\"name\":\"ISZERO\"},{\"begin\":2365,\"end\":2396,\"name\":\"MUL\"},{\"begin\":2365,\"end\":2396,\"name\":\"OR\"},{\"begin\":2365,\"end\":2396,\"name\":\"SWAP1\"},{\"begin\":2365,\"end\":2396,\"name\":\"SSTORE\"},{\"begin\":2365,\"end\":2396,\"name\":\"POP\"},{\"begin\":2126,\"end\":2402,\"name\":\"POP\"},{\"begin\":2126,\"end\":2402,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":913,\"end\":954,\"name\":\"tag\",\"value\":\"23\"},{\"begin\":913,\"end\":954,\"name\":\"JUMPDEST\"},{\"begin\":913,\"end\":954,\"name\":\"PUSH\",\"value\":\"8\"},{\"begin\":913,\"end\":954,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":913,\"end\":954,\"name\":\"MSTORE\"},{\"begin\":913,\"end\":954,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":913,\"end\":954,\"name\":\"SWAP1\"},{\"begin\":913,\"end\":954,\"name\":\"DUP2\"},{\"begin\":913,\"end\":954,\"name\":\"MSTORE\"},{\"begin\":913,\"end\":954,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":913,\"end\":954,\"name\":\"SWAP1\"},{\"begin\":913,\"end\":954,\"name\":\"KECCAK256\"},{\"begin\":913,\"end\":954,\"name\":\"SLOAD\"},{\"begin\":913,\"end\":954,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":913,\"end\":954,\"name\":\"AND\"},{\"begin\":913,\"end\":954,\"name\":\"DUP2\"},{\"begin\":913,\"end\":954,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":880,\"end\":909,\"name\":\"tag\",\"value\":\"26\"},{\"begin\":880,\"end\":909,\"name\":\"JUMPDEST\"},{\"begin\":880,\"end\":909,\"name\":\"PUSH\",\"value\":\"7\"},{\"begin\":880,\"end\":909,\"name\":\"DUP1\"},{\"begin\":880,\"end\":909,\"name\":\"SLOAD\"},{\"begin\":880,\"end\":909,\"name\":\"DUP3\"},{\"begin\":880,\"end\":909,\"name\":\"SWAP1\"},{\"begin\":880,\"end\":909,\"name\":\"DUP2\"},{\"begin\":880,\"end\":909,\"name\":\"LT\"},{\"begin\":880,\"end\":909,\"name\":\"PUSH [tag]\",\"value\":\"110\"},{\"begin\":880,\"end\":909,\"name\":\"JUMPI\"},{\"begin\":880,\"end\":909,\"name\":\"INVALID\"},{\"begin\":880,\"end\":909,\"name\":\"tag\",\"value\":\"110\"},{\"begin\":880,\"end\":909,\"name\":\"JUMPDEST\"},{\"begin\":880,\"end\":909,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":880,\"end\":909,\"name\":\"SWAP2\"},{\"begin\":880,\"end\":909,\"name\":\"DUP3\"},{\"begin\":880,\"end\":909,\"name\":\"MSTORE\"},{\"begin\":880,\"end\":909,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":880,\"end\":909,\"name\":\"SWAP1\"},{\"begin\":880,\"end\":909,\"name\":\"SWAP2\"},{\"begin\":880,\"end\":909,\"name\":\"KECCAK256\"},{\"begin\":880,\"end\":909,\"name\":\"ADD\"},{\"begin\":880,\"end\":909,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":880,\"end\":909,\"name\":\"AND\"},{\"begin\":880,\"end\":909,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":880,\"end\":909,\"name\":\"DUP2\"},{\"begin\":880,\"end\":909,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":2795,\"end\":2888,\"name\":\"tag\",\"value\":\"29\"},{\"begin\":2795,\"end\":2888,\"name\":\"JUMPDEST\"},{\"begin\":2844,\"end\":2848,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2866,\"end\":2881,\"name\":\"SLOAD\"},{\"begin\":2795,\"end\":2888,\"name\":\"tag\",\"value\":\"112\"},{\"begin\":2795,\"end\":2888,\"name\":\"JUMPDEST\"},{\"begin\":2795,\"end\":2888,\"name\":\"SWAP1\"},{\"begin\":2795,\"end\":2888,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":2409,\"end\":2789,\"name\":\"tag\",\"value\":\"32\"},{\"begin\":2409,\"end\":2789,\"name\":\"JUMPDEST\"},{\"begin\":2452,\"end\":2456,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2457,\"end\":2461,\"name\":\"DUP1\"},{\"begin\":2462,\"end\":2466,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2467,\"end\":2471,\"name\":\"DUP1\"},{\"begin\":2472,\"end\":2479,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2480,\"end\":2486,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":2487,\"end\":2493,\"name\":\"DUP1\"},{\"begin\":2494,\"end\":2500,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":2501,\"end\":2505,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2537,\"end\":2556,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2537,\"end\":2556,\"name\":\"SLOAD\"},{\"begin\":2570,\"end\":2574,\"name\":\"ADDRESS\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2570,\"end\":2582,\"name\":\"AND\"},{\"begin\":2570,\"end\":2582,\"name\":\"BALANCE\"},{\"begin\":2596,\"end\":2604,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2596,\"end\":2611,\"name\":\"DUP1\"},{\"begin\":2596,\"end\":2611,\"name\":\"SLOAD\"},{\"begin\":2596,\"end\":2611,\"name\":\"SWAP1\"},{\"begin\":2596,\"end\":2611,\"name\":\"POP\"},{\"begin\":2625,\"end\":2639,\"name\":\"PUSH\",\"value\":\"9\"},{\"begin\":2625,\"end\":2639,\"name\":\"SLOAD\"},{\"begin\":2653,\"end\":2660,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2653,\"end\":2660,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2653,\"end\":2660,\"name\":\"SWAP1\"},{\"begin\":2653,\"end\":2660,\"name\":\"SLOAD\"},{\"begin\":2653,\"end\":2660,\"name\":\"SWAP1\"},{\"begin\":2653,\"end\":2660,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2653,\"end\":2660,\"name\":\"EXP\"},{\"begin\":2653,\"end\":2660,\"name\":\"SWAP1\"},{\"begin\":2653,\"end\":2660,\"name\":\"DIV\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2653,\"end\":2660,\"name\":\"AND\"},{\"begin\":2674,\"end\":2686,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2700,\"end\":2719,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2733,\"end\":2741,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2755,\"end\":2770,\"name\":\"PUSH\",\"value\":\"6\"},{\"begin\":2755,\"end\":2770,\"name\":\"SLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2517,\"end\":2782,\"name\":\"AND\"},{\"begin\":2517,\"end\":2782,\"name\":\"ISZERO\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2517,\"end\":2782,\"name\":\"MUL\"},{\"begin\":2517,\"end\":2782,\"name\":\"SUB\"},{\"begin\":2517,\"end\":2782,\"name\":\"AND\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DIV\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"DIV\"},{\"begin\":2517,\"end\":2782,\"name\":\"MUL\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2517,\"end\":2782,\"name\":\"MLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2517,\"end\":2782,\"name\":\"AND\"},{\"begin\":2517,\"end\":2782,\"name\":\"ISZERO\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2517,\"end\":2782,\"name\":\"MUL\"},{\"begin\":2517,\"end\":2782,\"name\":\"SUB\"},{\"begin\":2517,\"end\":2782,\"name\":\"AND\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DIV\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"ISZERO\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"114\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPI\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2517,\"end\":2782,\"name\":\"LT\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"115\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPI\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"SLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DIV\"},{\"begin\":2517,\"end\":2782,\"name\":\"MUL\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"114\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMP\"},{\"begin\":2517,\"end\":2782,\"name\":\"tag\",\"value\":\"115\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPDEST\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2517,\"end\":2782,\"name\":\"KECCAK256\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"tag\",\"value\":\"116\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPDEST\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"SLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"GT\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"116\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPI\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SUB\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2517,\"end\":2782,\"name\":\"AND\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"tag\",\"value\":\"114\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP7\"},{\"begin\":2517,\"end\":2782,\"name\":\"SLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"MLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP6\"},{\"begin\":2517,\"end\":2782,\"name\":\"AND\"},{\"begin\":2517,\"end\":2782,\"name\":\"ISZERO\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2517,\"end\":2782,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP5\"},{\"begin\":2517,\"end\":2782,\"name\":\"AND\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"DIV\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP5\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DIV\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP5\"},{\"begin\":2517,\"end\":2782,\"name\":\"MUL\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP5\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP6\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP10\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP9\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP5\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP5\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"ISZERO\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"117\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPI\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2517,\"end\":2782,\"name\":\"LT\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"118\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPI\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"SLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DIV\"},{\"begin\":2517,\"end\":2782,\"name\":\"MUL\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"117\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMP\"},{\"begin\":2517,\"end\":2782,\"name\":\"tag\",\"value\":\"118\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPDEST\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2517,\"end\":2782,\"name\":\"KECCAK256\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"tag\",\"value\":\"119\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPDEST\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"SLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"GT\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"119\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPI\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SUB\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2517,\"end\":2782,\"name\":\"AND\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"tag\",\"value\":\"117\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP6\"},{\"begin\":2517,\"end\":2782,\"name\":\"SLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"MLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP6\"},{\"begin\":2517,\"end\":2782,\"name\":\"AND\"},{\"begin\":2517,\"end\":2782,\"name\":\"ISZERO\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2517,\"end\":2782,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP5\"},{\"begin\":2517,\"end\":2782,\"name\":\"AND\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"DIV\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP5\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DIV\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP5\"},{\"begin\":2517,\"end\":2782,\"name\":\"MUL\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP5\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP6\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP9\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP8\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP5\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP5\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"ISZERO\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"120\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPI\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2517,\"end\":2782,\"name\":\"LT\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"121\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPI\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"SLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DIV\"},{\"begin\":2517,\"end\":2782,\"name\":\"MUL\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"120\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMP\"},{\"begin\":2517,\"end\":2782,\"name\":\"tag\",\"value\":\"121\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPDEST\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2517,\"end\":2782,\"name\":\"KECCAK256\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"tag\",\"value\":\"122\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPDEST\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"SLOAD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"MSTORE\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP4\"},{\"begin\":2517,\"end\":2782,\"name\":\"GT\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH [tag]\",\"value\":\"122\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPI\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP1\"},{\"begin\":2517,\"end\":2782,\"name\":\"SUB\"},{\"begin\":2517,\"end\":2782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2517,\"end\":2782,\"name\":\"AND\"},{\"begin\":2517,\"end\":2782,\"name\":\"DUP3\"},{\"begin\":2517,\"end\":2782,\"name\":\"ADD\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"tag\",\"value\":\"120\"},{\"begin\":2517,\"end\":2782,\"name\":\"JUMPDEST\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP2\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP9\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP9\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP9\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP9\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP9\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP9\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP9\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP9\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2517,\"end\":2782,\"name\":\"SWAP9\"},{\"begin\":2517,\"end\":2782,\"name\":\"POP\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP1\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP2\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP3\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP4\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP5\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP6\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP7\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP8\"},{\"begin\":2409,\"end\":2789,\"name\":\"SWAP9\"},{\"begin\":2409,\"end\":2789,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":695,\"end\":717,\"name\":\"tag\",\"value\":\"47\"},{\"begin\":695,\"end\":717,\"name\":\"JUMPDEST\"},{\"begin\":695,\"end\":717,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":695,\"end\":717,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":695,\"end\":717,\"name\":\"AND\"},{\"begin\":695,\"end\":717,\"name\":\"DUP2\"},{\"begin\":695,\"end\":717,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":756,\"end\":782,\"name\":\"tag\",\"value\":\"50\"},{\"begin\":756,\"end\":782,\"name\":\"JUMPDEST\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"SLOAD\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"MLOAD\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":756,\"end\":782,\"name\":\"DUP6\"},{\"begin\":756,\"end\":782,\"name\":\"AND\"},{\"begin\":756,\"end\":782,\"name\":\"ISZERO\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":756,\"end\":782,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP5\"},{\"begin\":756,\"end\":782,\"name\":\"AND\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP4\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP4\"},{\"begin\":756,\"end\":782,\"name\":\"DIV\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":756,\"end\":782,\"name\":\"DUP2\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"DUP5\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"DIV\"},{\"begin\":756,\"end\":782,\"name\":\"DUP5\"},{\"begin\":756,\"end\":782,\"name\":\"MUL\"},{\"begin\":756,\"end\":782,\"name\":\"DUP3\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"DUP5\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP3\"},{\"begin\":756,\"end\":782,\"name\":\"MSTORE\"},{\"begin\":756,\"end\":782,\"name\":\"DUP2\"},{\"begin\":756,\"end\":782,\"name\":\"DUP2\"},{\"begin\":756,\"end\":782,\"name\":\"MSTORE\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP3\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP2\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"DUP3\"},{\"begin\":756,\"end\":782,\"name\":\"DUP3\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"ISZERO\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH [tag]\",\"value\":\"123\"},{\"begin\":756,\"end\":782,\"name\":\"JUMPI\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":756,\"end\":782,\"name\":\"LT\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH [tag]\",\"value\":\"124\"},{\"begin\":756,\"end\":782,\"name\":\"JUMPI\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"SLOAD\"},{\"begin\":756,\"end\":782,\"name\":\"DIV\"},{\"begin\":756,\"end\":782,\"name\":\"MUL\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"MSTORE\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP2\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP2\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH [tag]\",\"value\":\"123\"},{\"begin\":756,\"end\":782,\"name\":\"JUMP\"},{\"begin\":756,\"end\":782,\"name\":\"tag\",\"value\":\"124\"},{\"begin\":756,\"end\":782,\"name\":\"JUMPDEST\"},{\"begin\":756,\"end\":782,\"name\":\"DUP3\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP2\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":756,\"end\":782,\"name\":\"MSTORE\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":756,\"end\":782,\"name\":\"KECCAK256\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"tag\",\"value\":\"125\"},{\"begin\":756,\"end\":782,\"name\":\"JUMPDEST\"},{\"begin\":756,\"end\":782,\"name\":\"DUP2\"},{\"begin\":756,\"end\":782,\"name\":\"SLOAD\"},{\"begin\":756,\"end\":782,\"name\":\"DUP2\"},{\"begin\":756,\"end\":782,\"name\":\"MSTORE\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"DUP1\"},{\"begin\":756,\"end\":782,\"name\":\"DUP4\"},{\"begin\":756,\"end\":782,\"name\":\"GT\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH [tag]\",\"value\":\"125\"},{\"begin\":756,\"end\":782,\"name\":\"JUMPI\"},{\"begin\":756,\"end\":782,\"name\":\"DUP3\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP1\"},{\"begin\":756,\"end\":782,\"name\":\"SUB\"},{\"begin\":756,\"end\":782,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":756,\"end\":782,\"name\":\"AND\"},{\"begin\":756,\"end\":782,\"name\":\"DUP3\"},{\"begin\":756,\"end\":782,\"name\":\"ADD\"},{\"begin\":756,\"end\":782,\"name\":\"SWAP2\"},{\"begin\":756,\"end\":782,\"name\":\"tag\",\"value\":\"123\"},{\"begin\":756,\"end\":782,\"name\":\"JUMPDEST\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"POP\"},{\"begin\":756,\"end\":782,\"name\":\"DUP2\"},{\"begin\":756,\"end\":782,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":666,\"end\":691,\"name\":\"tag\",\"value\":\"57\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPDEST\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"SLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP2\"},{\"begin\":666,\"end\":691,\"name\":\"LT\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH [tag]\",\"value\":\"126\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPI\"},{\"begin\":666,\"end\":691,\"name\":\"INVALID\"},{\"begin\":666,\"end\":691,\"name\":\"tag\",\"value\":\"126\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPDEST\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"KECCAK256\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"MUL\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"SLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"MLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP5\"},{\"begin\":666,\"end\":691,\"name\":\"AND\"},{\"begin\":666,\"end\":691,\"name\":\"ISZERO\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":666,\"end\":691,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP4\"},{\"begin\":666,\"end\":691,\"name\":\"AND\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP3\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP3\"},{\"begin\":666,\"end\":691,\"name\":\"DIV\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":666,\"end\":691,\"name\":\"DUP2\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"DUP6\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"DIV\"},{\"begin\":666,\"end\":691,\"name\":\"DUP6\"},{\"begin\":666,\"end\":691,\"name\":\"MUL\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"DUP6\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"ISZERO\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH [tag]\",\"value\":\"128\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPI\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":666,\"end\":691,\"name\":\"LT\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH [tag]\",\"value\":\"129\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPI\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"SLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"DIV\"},{\"begin\":666,\"end\":691,\"name\":\"MUL\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH [tag]\",\"value\":\"128\"},{\"begin\":666,\"end\":691,\"name\":\"JUMP\"},{\"begin\":666,\"end\":691,\"name\":\"tag\",\"value\":\"129\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPDEST\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":666,\"end\":691,\"name\":\"KECCAK256\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"tag\",\"value\":\"130\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPDEST\"},{\"begin\":666,\"end\":691,\"name\":\"DUP2\"},{\"begin\":666,\"end\":691,\"name\":\"SLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"DUP2\"},{\"begin\":666,\"end\":691,\"name\":\"MSTORE\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"DUP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"GT\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH [tag]\",\"value\":\"130\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPI\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"SUB\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":666,\"end\":691,\"name\":\"AND\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"tag\",\"value\":\"128\"},{\"begin\":666,\"end\":691,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP4\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":666,\"end\":691,\"name\":\"DUP5\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP5\"},{\"begin\":666,\"end\":691,\"name\":\"ADD\"},{\"begin\":666,\"end\":691,\"name\":\"SLOAD\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP3\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP4\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":666,\"end\":691,\"name\":\"DUP3\"},{\"begin\":666,\"end\":691,\"name\":\"AND\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"10000000000000000000000000000000000000000\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP2\"},{\"begin\":666,\"end\":691,\"name\":\"DIV\"},{\"begin\":666,\"end\":691,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":666,\"end\":691,\"name\":\"AND\"},{\"begin\":666,\"end\":691,\"name\":\"SWAP1\"},{\"begin\":666,\"end\":691,\"name\":\"DUP6\"},{\"begin\":666,\"end\":691,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":958,\"end\":984,\"name\":\"tag\",\"value\":\"64\"},{\"begin\":958,\"end\":984,\"name\":\"JUMPDEST\"},{\"begin\":958,\"end\":984,\"name\":\"PUSH\",\"value\":\"9\"},{\"begin\":958,\"end\":984,\"name\":\"SLOAD\"},{\"begin\":958,\"end\":984,\"name\":\"DUP2\"},{\"begin\":958,\"end\":984,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1559,\"end\":1885,\"name\":\"tag\",\"value\":\"67\"},{\"begin\":1559,\"end\":1885,\"name\":\"JUMPDEST\"},{\"begin\":1659,\"end\":1684,\"name\":\"PUSH [tag]\",\"value\":\"131\"},{\"begin\":1659,\"end\":1684,\"name\":\"PUSH [tag]\",\"value\":\"132\"},{\"begin\":1659,\"end\":1684,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":1659,\"end\":1684,\"name\":\"tag\",\"value\":\"131\"},{\"begin\":1659,\"end\":1684,\"name\":\"JUMPDEST\"},{\"begin\":1042,\"end\":1049,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1042,\"end\":1049,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1042,\"end\":1049,\"name\":\"AND\"},{\"begin\":1028,\"end\":1038,\"name\":\"CALLER\"},{\"begin\":1028,\"end\":1049,\"name\":\"EQ\"},{\"begin\":1020,\"end\":1050,\"name\":\"PUSH [tag]\",\"value\":\"134\"},{\"begin\":1020,\"end\":1050,\"name\":\"JUMPI\"},{\"begin\":1020,\"end\":1050,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1020,\"end\":1050,\"name\":\"DUP1\"},{\"begin\":1020,\"end\":1050,\"name\":\"REVERT\"},{\"begin\":1020,\"end\":1050,\"name\":\"tag\",\"value\":\"134\"},{\"begin\":1020,\"end\":1050,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1687,\"end\":1846,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP1\"},{\"begin\":1687,\"end\":1846,\"name\":\"MLOAD\"},{\"begin\":1687,\"end\":1846,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP2\"},{\"begin\":1687,\"end\":1846,\"name\":\"ADD\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP3\"},{\"begin\":1687,\"end\":1846,\"name\":\"MSTORE\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP5\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP2\"},{\"begin\":1687,\"end\":1846,\"name\":\"MSTORE\"},{\"begin\":1687,\"end\":1846,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP1\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP3\"},{\"begin\":1687,\"end\":1846,\"name\":\"ADD\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP6\"},{\"begin\":1687,\"end\":1846,\"name\":\"SWAP1\"},{\"begin\":1687,\"end\":1846,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP5\"},{\"begin\":1687,\"end\":1846,\"name\":\"AND\"},{\"begin\":1687,\"end\":1846,\"name\":\"SWAP3\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP3\"},{\"begin\":1687,\"end\":1846,\"name\":\"ADD\"},{\"begin\":1687,\"end\":1846,\"name\":\"SWAP3\"},{\"begin\":1687,\"end\":1846,\"name\":\"SWAP1\"},{\"begin\":1687,\"end\":1846,\"name\":\"SWAP3\"},{\"begin\":1687,\"end\":1846,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1687,\"end\":1846,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP3\"},{\"begin\":1687,\"end\":1846,\"name\":\"ADD\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP2\"},{\"begin\":1687,\"end\":1846,\"name\":\"SWAP1\"},{\"begin\":1687,\"end\":1846,\"name\":\"MSTORE\"},{\"begin\":1687,\"end\":1846,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP3\"},{\"begin\":1687,\"end\":1846,\"name\":\"ADD\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP2\"},{\"begin\":1687,\"end\":1846,\"name\":\"SWAP1\"},{\"begin\":1687,\"end\":1846,\"name\":\"MSTORE\"},{\"begin\":27,\"end\":37,\"name\":\"DUP1\"},{\"begin\":27,\"end\":37,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":23,\"end\":41,\"name\":\"DUP2\"},{\"begin\":23,\"end\":41,\"name\":\"ADD\"},{\"begin\":45,\"end\":68,\"name\":\"DUP1\"},{\"begin\":45,\"end\":68,\"name\":\"DUP4\"},{\"begin\":45,\"end\":68,\"name\":\"SSTORE\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP2\"},{\"begin\":1855,\"end\":1880,\"name\":\"DUP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"MSTORE\"},{\"begin\":1855,\"end\":1880,\"name\":\"DUP3\"},{\"begin\":1855,\"end\":1880,\"name\":\"MLOAD\"},{\"begin\":1855,\"end\":1880,\"name\":\"DUP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"MLOAD\"},{\"begin\":1687,\"end\":1846,\"name\":\"SWAP4\"},{\"begin\":1687,\"end\":1846,\"name\":\"SWAP5\"},{\"begin\":23,\"end\":41,\"name\":\"SWAP3\"},{\"begin\":23,\"end\":41,\"name\":\"SWAP4\"},{\"begin\":1687,\"end\":1846,\"name\":\"DUP6\"},{\"begin\":1687,\"end\":1846,\"name\":\"SWAP4\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP4\"},{\"begin\":1855,\"end\":1880,\"name\":\"MUL\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH\",\"value\":\"290DECD9548B62A8D60345A988386FC84BA6BC95484008F6362F93160EF3E563\"},{\"begin\":1855,\"end\":1880,\"name\":\"ADD\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP3\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH [tag]\",\"value\":\"137\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP3\"},{\"begin\":1855,\"end\":1880,\"name\":\"DUP5\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP3\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP2\"},{\"begin\":1855,\"end\":1880,\"name\":\"ADD\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH [tag]\",\"value\":\"138\"},{\"begin\":1855,\"end\":1880,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":1855,\"end\":1880,\"name\":\"tag\",\"value\":\"137\"},{\"begin\":1855,\"end\":1880,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1855,\"end\":1880,\"name\":\"DUP3\"},{\"begin\":1855,\"end\":1880,\"name\":\"ADD\"},{\"begin\":1855,\"end\":1880,\"name\":\"MLOAD\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1855,\"end\":1880,\"name\":\"DUP3\"},{\"begin\":1855,\"end\":1880,\"name\":\"ADD\"},{\"begin\":1855,\"end\":1880,\"name\":\"SSTORE\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1855,\"end\":1880,\"name\":\"DUP3\"},{\"begin\":1855,\"end\":1880,\"name\":\"ADD\"},{\"begin\":1855,\"end\":1880,\"name\":\"MLOAD\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1855,\"end\":1880,\"name\":\"DUP3\"},{\"begin\":1855,\"end\":1880,\"name\":\"ADD\"},{\"begin\":1855,\"end\":1880,\"name\":\"DUP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"SLOAD\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":1855,\"end\":1880,\"name\":\"DUP6\"},{\"begin\":1855,\"end\":1880,\"name\":\"ADD\"},{\"begin\":1855,\"end\":1880,\"name\":\"MLOAD\"},{\"begin\":1855,\"end\":1880,\"name\":\"ISZERO\"},{\"begin\":1855,\"end\":1880,\"name\":\"ISZERO\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH\",\"value\":\"10000000000000000000000000000000000000000\"},{\"begin\":1855,\"end\":1880,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF0000000000000000000000000000000000000000\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP5\"},{\"begin\":1855,\"end\":1880,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP3\"},{\"begin\":1855,\"end\":1880,\"name\":\"AND\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP2\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP2\"},{\"begin\":1855,\"end\":1880,\"name\":\"OR\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP3\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP3\"},{\"begin\":1855,\"end\":1880,\"name\":\"AND\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP2\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP2\"},{\"begin\":1855,\"end\":1880,\"name\":\"OR\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"SSTORE\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP2\"},{\"begin\":1855,\"end\":1880,\"name\":\"ADD\"},{\"begin\":1855,\"end\":1880,\"name\":\"MLOAD\"},{\"begin\":1855,\"end\":1880,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP1\"},{\"begin\":1855,\"end\":1880,\"name\":\"SWAP2\"},{\"begin\":1855,\"end\":1880,\"name\":\"ADD\"},{\"begin\":1855,\"end\":1880,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1559,\"end\":1885,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":786,\"end\":819,\"name\":\"tag\",\"value\":\"70\"},{\"begin\":786,\"end\":819,\"name\":\"JUMPDEST\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":786,\"end\":819,\"name\":\"DUP1\"},{\"begin\":786,\"end\":819,\"name\":\"SLOAD\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":786,\"end\":819,\"name\":\"DUP1\"},{\"begin\":786,\"end\":819,\"name\":\"MLOAD\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":786,\"end\":819,\"name\":\"DUP6\"},{\"begin\":786,\"end\":819,\"name\":\"AND\"},{\"begin\":786,\"end\":819,\"name\":\"ISZERO\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":786,\"end\":819,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":786,\"end\":819,\"name\":\"ADD\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP1\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP5\"},{\"begin\":786,\"end\":819,\"name\":\"AND\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP4\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP1\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP4\"},{\"begin\":786,\"end\":819,\"name\":\"DIV\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":786,\"end\":819,\"name\":\"DUP2\"},{\"begin\":786,\"end\":819,\"name\":\"ADD\"},{\"begin\":786,\"end\":819,\"name\":\"DUP5\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP1\"},{\"begin\":786,\"end\":819,\"name\":\"DIV\"},{\"begin\":786,\"end\":819,\"name\":\"DUP5\"},{\"begin\":786,\"end\":819,\"name\":\"MUL\"},{\"begin\":786,\"end\":819,\"name\":\"DUP3\"},{\"begin\":786,\"end\":819,\"name\":\"ADD\"},{\"begin\":786,\"end\":819,\"name\":\"DUP5\"},{\"begin\":786,\"end\":819,\"name\":\"ADD\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP1\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP3\"},{\"begin\":786,\"end\":819,\"name\":\"MSTORE\"},{\"begin\":786,\"end\":819,\"name\":\"DUP2\"},{\"begin\":786,\"end\":819,\"name\":\"DUP2\"},{\"begin\":786,\"end\":819,\"name\":\"MSTORE\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP3\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP2\"},{\"begin\":786,\"end\":819,\"name\":\"DUP4\"},{\"begin\":786,\"end\":819,\"name\":\"ADD\"},{\"begin\":786,\"end\":819,\"name\":\"DUP3\"},{\"begin\":786,\"end\":819,\"name\":\"DUP3\"},{\"begin\":786,\"end\":819,\"name\":\"DUP1\"},{\"begin\":786,\"end\":819,\"name\":\"ISZERO\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH [tag]\",\"value\":\"123\"},{\"begin\":786,\"end\":819,\"name\":\"JUMPI\"},{\"begin\":786,\"end\":819,\"name\":\"DUP1\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":786,\"end\":819,\"name\":\"LT\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH [tag]\",\"value\":\"124\"},{\"begin\":786,\"end\":819,\"name\":\"JUMPI\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":786,\"end\":819,\"name\":\"DUP1\"},{\"begin\":786,\"end\":819,\"name\":\"DUP4\"},{\"begin\":786,\"end\":819,\"name\":\"SLOAD\"},{\"begin\":786,\"end\":819,\"name\":\"DIV\"},{\"begin\":786,\"end\":819,\"name\":\"MUL\"},{\"begin\":786,\"end\":819,\"name\":\"DUP4\"},{\"begin\":786,\"end\":819,\"name\":\"MSTORE\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP2\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":786,\"end\":819,\"name\":\"ADD\"},{\"begin\":786,\"end\":819,\"name\":\"SWAP2\"},{\"begin\":786,\"end\":819,\"name\":\"PUSH [tag]\",\"value\":\"123\"},{\"begin\":786,\"end\":819,\"name\":\"JUMP\"},{\"begin\":721,\"end\":752,\"name\":\"tag\",\"value\":\"77\"},{\"begin\":721,\"end\":752,\"name\":\"JUMPDEST\"},{\"begin\":721,\"end\":752,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":721,\"end\":752,\"name\":\"SLOAD\"},{\"begin\":721,\"end\":752,\"name\":\"DUP2\"},{\"begin\":721,\"end\":752,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":823,\"end\":845,\"name\":\"tag\",\"value\":\"80\"},{\"begin\":823,\"end\":845,\"name\":\"JUMPDEST\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":823,\"end\":845,\"name\":\"DUP1\"},{\"begin\":823,\"end\":845,\"name\":\"SLOAD\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":823,\"end\":845,\"name\":\"DUP1\"},{\"begin\":823,\"end\":845,\"name\":\"MLOAD\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":823,\"end\":845,\"name\":\"DUP6\"},{\"begin\":823,\"end\":845,\"name\":\"AND\"},{\"begin\":823,\"end\":845,\"name\":\"ISZERO\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":823,\"end\":845,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":823,\"end\":845,\"name\":\"ADD\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP1\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP5\"},{\"begin\":823,\"end\":845,\"name\":\"AND\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP4\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP1\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP4\"},{\"begin\":823,\"end\":845,\"name\":\"DIV\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":823,\"end\":845,\"name\":\"DUP2\"},{\"begin\":823,\"end\":845,\"name\":\"ADD\"},{\"begin\":823,\"end\":845,\"name\":\"DUP5\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP1\"},{\"begin\":823,\"end\":845,\"name\":\"DIV\"},{\"begin\":823,\"end\":845,\"name\":\"DUP5\"},{\"begin\":823,\"end\":845,\"name\":\"MUL\"},{\"begin\":823,\"end\":845,\"name\":\"DUP3\"},{\"begin\":823,\"end\":845,\"name\":\"ADD\"},{\"begin\":823,\"end\":845,\"name\":\"DUP5\"},{\"begin\":823,\"end\":845,\"name\":\"ADD\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP1\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP3\"},{\"begin\":823,\"end\":845,\"name\":\"MSTORE\"},{\"begin\":823,\"end\":845,\"name\":\"DUP2\"},{\"begin\":823,\"end\":845,\"name\":\"DUP2\"},{\"begin\":823,\"end\":845,\"name\":\"MSTORE\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP3\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP2\"},{\"begin\":823,\"end\":845,\"name\":\"DUP4\"},{\"begin\":823,\"end\":845,\"name\":\"ADD\"},{\"begin\":823,\"end\":845,\"name\":\"DUP3\"},{\"begin\":823,\"end\":845,\"name\":\"DUP3\"},{\"begin\":823,\"end\":845,\"name\":\"DUP1\"},{\"begin\":823,\"end\":845,\"name\":\"ISZERO\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH [tag]\",\"value\":\"123\"},{\"begin\":823,\"end\":845,\"name\":\"JUMPI\"},{\"begin\":823,\"end\":845,\"name\":\"DUP1\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":823,\"end\":845,\"name\":\"LT\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH [tag]\",\"value\":\"124\"},{\"begin\":823,\"end\":845,\"name\":\"JUMPI\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":823,\"end\":845,\"name\":\"DUP1\"},{\"begin\":823,\"end\":845,\"name\":\"DUP4\"},{\"begin\":823,\"end\":845,\"name\":\"SLOAD\"},{\"begin\":823,\"end\":845,\"name\":\"DIV\"},{\"begin\":823,\"end\":845,\"name\":\"MUL\"},{\"begin\":823,\"end\":845,\"name\":\"DUP4\"},{\"begin\":823,\"end\":845,\"name\":\"MSTORE\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP2\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":823,\"end\":845,\"name\":\"ADD\"},{\"begin\":823,\"end\":845,\"name\":\"SWAP2\"},{\"begin\":823,\"end\":845,\"name\":\"PUSH [tag]\",\"value\":\"123\"},{\"begin\":823,\"end\":845,\"name\":\"JUMP\"},{\"begin\":849,\"end\":876,\"name\":\"tag\",\"value\":\"87\"},{\"begin\":849,\"end\":876,\"name\":\"JUMPDEST\"},{\"begin\":849,\"end\":876,\"name\":\"PUSH\",\"value\":\"6\"},{\"begin\":849,\"end\":876,\"name\":\"SLOAD\"},{\"begin\":849,\"end\":876,\"name\":\"DUP2\"},{\"begin\":849,\"end\":876,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1889,\"end\":2122,\"name\":\"tag\",\"value\":\"90\"},{\"begin\":1889,\"end\":2122,\"name\":\"JUMPDEST\"},{\"begin\":1958,\"end\":1968,\"name\":\"CALLER\"},{\"begin\":1948,\"end\":1969,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1948,\"end\":1969,\"name\":\"SWAP1\"},{\"begin\":1948,\"end\":1969,\"name\":\"DUP2\"},{\"begin\":1948,\"end\":1969,\"name\":\"MSTORE\"},{\"begin\":1948,\"end\":1957,\"name\":\"PUSH\",\"value\":\"8\"},{\"begin\":1948,\"end\":1969,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1948,\"end\":1969,\"name\":\"MSTORE\"},{\"begin\":1948,\"end\":1969,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1948,\"end\":1969,\"name\":\"SWAP1\"},{\"begin\":1948,\"end\":1969,\"name\":\"KECCAK256\"},{\"begin\":1948,\"end\":1969,\"name\":\"SLOAD\"},{\"begin\":1948,\"end\":1969,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1948,\"end\":1969,\"name\":\"AND\"},{\"begin\":1940,\"end\":1970,\"name\":\"ISZERO\"},{\"begin\":1940,\"end\":1970,\"name\":\"ISZERO\"},{\"begin\":1940,\"end\":1970,\"name\":\"PUSH [tag]\",\"value\":\"146\"},{\"begin\":1940,\"end\":1970,\"name\":\"JUMPI\"},{\"begin\":1940,\"end\":1970,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1940,\"end\":1970,\"name\":\"DUP1\"},{\"begin\":1940,\"end\":1970,\"name\":\"REVERT\"},{\"begin\":1940,\"end\":1970,\"name\":\"tag\",\"value\":\"146\"},{\"begin\":1940,\"end\":1970,\"name\":\"JUMPDEST\"},{\"begin\":1987,\"end\":1995,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1987,\"end\":2002,\"name\":\"DUP1\"},{\"begin\":1987,\"end\":2002,\"name\":\"SLOAD\"},{\"begin\":1996,\"end\":2001,\"name\":\"DUP3\"},{\"begin\":1996,\"end\":2001,\"name\":\"SWAP1\"},{\"begin\":1987,\"end\":2002,\"name\":\"DUP2\"},{\"begin\":1987,\"end\":2002,\"name\":\"LT\"},{\"begin\":1987,\"end\":2002,\"name\":\"PUSH [tag]\",\"value\":\"147\"},{\"begin\":1987,\"end\":2002,\"name\":\"JUMPI\"},{\"begin\":1987,\"end\":2002,\"name\":\"INVALID\"},{\"begin\":1987,\"end\":2002,\"name\":\"tag\",\"value\":\"147\"},{\"begin\":1987,\"end\":2002,\"name\":\"JUMPDEST\"},{\"begin\":1987,\"end\":2002,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1987,\"end\":2002,\"name\":\"SWAP2\"},{\"begin\":1987,\"end\":2002,\"name\":\"DUP3\"},{\"begin\":1987,\"end\":2002,\"name\":\"MSTORE\"},{\"begin\":1987,\"end\":2002,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1987,\"end\":2002,\"name\":\"DUP1\"},{\"begin\":1987,\"end\":2002,\"name\":\"DUP4\"},{\"begin\":1987,\"end\":2002,\"name\":\"KECCAK256\"},{\"begin\":2013,\"end\":2023,\"name\":\"CALLER\"},{\"begin\":1987,\"end\":2024,\"name\":\"DUP5\"},{\"begin\":1987,\"end\":2024,\"name\":\"MSTORE\"},{\"begin\":1987,\"end\":2012,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1987,\"end\":2002,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":1987,\"end\":2002,\"name\":\"SWAP1\"},{\"begin\":1987,\"end\":2002,\"name\":\"SWAP4\"},{\"begin\":1987,\"end\":2002,\"name\":\"MUL\"},{\"begin\":1987,\"end\":2002,\"name\":\"ADD\"},{\"begin\":1987,\"end\":2012,\"name\":\"SWAP2\"},{\"begin\":1987,\"end\":2012,\"name\":\"SWAP1\"},{\"begin\":1987,\"end\":2012,\"name\":\"SWAP2\"},{\"begin\":1987,\"end\":2012,\"name\":\"ADD\"},{\"begin\":1987,\"end\":2024,\"name\":\"SWAP1\"},{\"begin\":1987,\"end\":2024,\"name\":\"MSTORE\"},{\"begin\":1987,\"end\":2024,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1987,\"end\":2024,\"name\":\"SWAP1\"},{\"begin\":1987,\"end\":2024,\"name\":\"KECCAK256\"},{\"begin\":1987,\"end\":2024,\"name\":\"SLOAD\"},{\"begin\":1987,\"end\":2024,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1987,\"end\":2024,\"name\":\"AND\"},{\"begin\":1986,\"end\":2024,\"name\":\"ISZERO\"},{\"begin\":1978,\"end\":2025,\"name\":\"PUSH [tag]\",\"value\":\"149\"},{\"begin\":1978,\"end\":2025,\"name\":\"JUMPI\"},{\"begin\":1978,\"end\":2025,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1978,\"end\":2025,\"name\":\"DUP1\"},{\"begin\":1978,\"end\":2025,\"name\":\"REVERT\"},{\"begin\":1978,\"end\":2025,\"name\":\"tag\",\"value\":\"149\"},{\"begin\":1978,\"end\":2025,\"name\":\"JUMPDEST\"},{\"begin\":2074,\"end\":2078,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2034,\"end\":2042,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2043,\"end\":2048,\"name\":\"DUP3\"},{\"begin\":2034,\"end\":2049,\"name\":\"DUP2\"},{\"begin\":2034,\"end\":2049,\"name\":\"SLOAD\"},{\"begin\":2034,\"end\":2049,\"name\":\"DUP2\"},{\"begin\":2034,\"end\":2049,\"name\":\"LT\"},{\"begin\":2034,\"end\":2049,\"name\":\"ISZERO\"},{\"begin\":2034,\"end\":2049,\"name\":\"ISZERO\"},{\"begin\":2034,\"end\":2049,\"name\":\"PUSH [tag]\",\"value\":\"150\"},{\"begin\":2034,\"end\":2049,\"name\":\"JUMPI\"},{\"begin\":2034,\"end\":2049,\"name\":\"INVALID\"},{\"begin\":2034,\"end\":2049,\"name\":\"tag\",\"value\":\"150\"},{\"begin\":2034,\"end\":2049,\"name\":\"JUMPDEST\"},{\"begin\":2034,\"end\":2049,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2034,\"end\":2049,\"name\":\"SWAP2\"},{\"begin\":2034,\"end\":2049,\"name\":\"DUP3\"},{\"begin\":2034,\"end\":2049,\"name\":\"MSTORE\"},{\"begin\":2034,\"end\":2049,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2034,\"end\":2049,\"name\":\"DUP1\"},{\"begin\":2034,\"end\":2049,\"name\":\"DUP4\"},{\"begin\":2034,\"end\":2049,\"name\":\"KECCAK256\"},{\"begin\":2060,\"end\":2070,\"name\":\"CALLER\"},{\"begin\":2034,\"end\":2071,\"name\":\"DUP5\"},{\"begin\":2034,\"end\":2071,\"name\":\"MSTORE\"},{\"begin\":2034,\"end\":2049,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2034,\"end\":2049,\"name\":\"SWAP3\"},{\"begin\":2034,\"end\":2049,\"name\":\"SWAP1\"},{\"begin\":2034,\"end\":2049,\"name\":\"SWAP3\"},{\"begin\":2034,\"end\":2049,\"name\":\"MUL\"},{\"begin\":2034,\"end\":2049,\"name\":\"SWAP1\"},{\"begin\":2034,\"end\":2049,\"name\":\"SWAP2\"},{\"begin\":2034,\"end\":2049,\"name\":\"ADD\"},{\"begin\":2034,\"end\":2059,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2034,\"end\":2059,\"name\":\"ADD\"},{\"begin\":2034,\"end\":2071,\"name\":\"SWAP1\"},{\"begin\":2034,\"end\":2071,\"name\":\"MSTORE\"},{\"begin\":2034,\"end\":2071,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2034,\"end\":2071,\"name\":\"DUP2\"},{\"begin\":2034,\"end\":2071,\"name\":\"KECCAK256\"},{\"begin\":2034,\"end\":2078,\"name\":\"DUP1\"},{\"begin\":2034,\"end\":2078,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":2034,\"end\":2078,\"name\":\"AND\"},{\"begin\":2034,\"end\":2078,\"name\":\"SWAP3\"},{\"begin\":2034,\"end\":2078,\"name\":\"ISZERO\"},{\"begin\":2034,\"end\":2078,\"name\":\"ISZERO\"},{\"begin\":2034,\"end\":2078,\"name\":\"SWAP3\"},{\"begin\":2034,\"end\":2078,\"name\":\"SWAP1\"},{\"begin\":2034,\"end\":2078,\"name\":\"SWAP3\"},{\"begin\":2034,\"end\":2078,\"name\":\"OR\"},{\"begin\":2034,\"end\":2078,\"name\":\"SWAP1\"},{\"begin\":2034,\"end\":2078,\"name\":\"SWAP2\"},{\"begin\":2034,\"end\":2078,\"name\":\"SSTORE\"},{\"begin\":2086,\"end\":2101,\"name\":\"DUP1\"},{\"begin\":2086,\"end\":2101,\"name\":\"SLOAD\"},{\"begin\":2095,\"end\":2100,\"name\":\"DUP3\"},{\"begin\":2095,\"end\":2100,\"name\":\"SWAP1\"},{\"begin\":2086,\"end\":2101,\"name\":\"DUP2\"},{\"begin\":2086,\"end\":2101,\"name\":\"LT\"},{\"begin\":2086,\"end\":2101,\"name\":\"PUSH [tag]\",\"value\":\"152\"},{\"begin\":2086,\"end\":2101,\"name\":\"JUMPI\"},{\"begin\":2086,\"end\":2101,\"name\":\"INVALID\"},{\"begin\":2086,\"end\":2101,\"name\":\"tag\",\"value\":\"152\"},{\"begin\":2086,\"end\":2101,\"name\":\"JUMPDEST\"},{\"begin\":2086,\"end\":2101,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2086,\"end\":2101,\"name\":\"SWAP2\"},{\"begin\":2086,\"end\":2101,\"name\":\"DUP3\"},{\"begin\":2086,\"end\":2101,\"name\":\"MSTORE\"},{\"begin\":2086,\"end\":2101,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2086,\"end\":2101,\"name\":\"SWAP1\"},{\"begin\":2086,\"end\":2101,\"name\":\"SWAP2\"},{\"begin\":2086,\"end\":2101,\"name\":\"KECCAK256\"},{\"begin\":2086,\"end\":2115,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2086,\"end\":2101,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2086,\"end\":2101,\"name\":\"SWAP1\"},{\"begin\":2086,\"end\":2101,\"name\":\"SWAP3\"},{\"begin\":2086,\"end\":2101,\"name\":\"MUL\"},{\"begin\":2086,\"end\":2101,\"name\":\"ADD\"},{\"begin\":2086,\"end\":2115,\"name\":\"ADD\"},{\"begin\":2086,\"end\":2117,\"name\":\"DUP1\"},{\"begin\":2086,\"end\":2117,\"name\":\"SLOAD\"},{\"begin\":2086,\"end\":2117,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2086,\"end\":2117,\"name\":\"ADD\"},{\"begin\":2086,\"end\":2117,\"name\":\"SWAP1\"},{\"begin\":2086,\"end\":2117,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1889,\"end\":2122,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1367,\"end\":1555,\"name\":\"tag\",\"value\":\"92\"},{\"begin\":1367,\"end\":1555,\"name\":\"JUMPDEST\"},{\"begin\":1431,\"end\":1450,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1431,\"end\":1450,\"name\":\"SLOAD\"},{\"begin\":1419,\"end\":1428,\"name\":\"CALLVALUE\"},{\"begin\":1419,\"end\":1450,\"name\":\"GT\"},{\"begin\":1411,\"end\":1452,\"name\":\"PUSH [tag]\",\"value\":\"155\"},{\"begin\":1411,\"end\":1452,\"name\":\"JUMPI\"},{\"begin\":1411,\"end\":1452,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1411,\"end\":1452,\"name\":\"DUP1\"},{\"begin\":1411,\"end\":1452,\"name\":\"REVERT\"},{\"begin\":1411,\"end\":1452,\"name\":\"tag\",\"value\":\"155\"},{\"begin\":1411,\"end\":1452,\"name\":\"JUMPDEST\"},{\"begin\":1461,\"end\":1473,\"name\":\"PUSH\",\"value\":\"7\"},{\"begin\":27,\"end\":37,\"name\":\"DUP1\"},{\"begin\":27,\"end\":37,\"name\":\"SLOAD\"},{\"begin\":39,\"end\":40,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":23,\"end\":41,\"name\":\"DUP1\"},{\"begin\":23,\"end\":41,\"name\":\"DUP3\"},{\"begin\":23,\"end\":41,\"name\":\"ADD\"},{\"begin\":45,\"end\":68,\"name\":\"SWAP1\"},{\"begin\":45,\"end\":68,\"name\":\"SWAP3\"},{\"begin\":45,\"end\":68,\"name\":\"SSTORE\"},{\"begin\":1461,\"end\":1490,\"name\":\"PUSH\",\"value\":\"A66CC928B5EDB82AF9BD49922954155AB7B0942694BEA4CE44661D9A8736C688\"},{\"begin\":1461,\"end\":1490,\"name\":\"ADD\"},{\"begin\":1461,\"end\":1490,\"name\":\"DUP1\"},{\"begin\":1461,\"end\":1490,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1461,\"end\":1490,\"name\":\"AND\"},{\"begin\":1479,\"end\":1489,\"name\":\"CALLER\"},{\"begin\":1461,\"end\":1490,\"name\":\"SWAP1\"},{\"begin\":1461,\"end\":1490,\"name\":\"DUP2\"},{\"begin\":1461,\"end\":1490,\"name\":\"OR\"},{\"begin\":1461,\"end\":1490,\"name\":\"SWAP1\"},{\"begin\":1461,\"end\":1490,\"name\":\"SWAP2\"},{\"begin\":1461,\"end\":1490,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1498,\"end\":1519,\"name\":\"SWAP1\"},{\"begin\":1498,\"end\":1519,\"name\":\"DUP2\"},{\"begin\":1498,\"end\":1519,\"name\":\"MSTORE\"},{\"begin\":1498,\"end\":1507,\"name\":\"PUSH\",\"value\":\"8\"},{\"begin\":1461,\"end\":1490,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1498,\"end\":1519,\"name\":\"MSTORE\"},{\"begin\":1498,\"end\":1519,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1498,\"end\":1519,\"name\":\"SWAP1\"},{\"begin\":1498,\"end\":1519,\"name\":\"KECCAK256\"},{\"begin\":1498,\"end\":1526,\"name\":\"DUP1\"},{\"begin\":1498,\"end\":1526,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1498,\"end\":1526,\"name\":\"AND\"},{\"begin\":1498,\"end\":1526,\"name\":\"DUP3\"},{\"begin\":1498,\"end\":1526,\"name\":\"OR\"},{\"begin\":1498,\"end\":1526,\"name\":\"SWAP1\"},{\"begin\":1498,\"end\":1526,\"name\":\"SSTORE\"},{\"begin\":1534,\"end\":1548,\"name\":\"PUSH\",\"value\":\"9\"},{\"begin\":1534,\"end\":1550,\"name\":\"DUP1\"},{\"begin\":1534,\"end\":1550,\"name\":\"SLOAD\"},{\"begin\":1534,\"end\":1550,\"name\":\"SWAP1\"},{\"begin\":1534,\"end\":1550,\"name\":\"SWAP2\"},{\"begin\":1534,\"end\":1550,\"name\":\"ADD\"},{\"begin\":1534,\"end\":1550,\"name\":\"SWAP1\"},{\"begin\":1534,\"end\":1550,\"name\":\"SSTORE\"},{\"begin\":1367,\"end\":1555,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"132\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"MLOAD\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"MSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP4\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"MSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP3\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP4\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"MSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"MSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":462,\"end\":2890,\"name\":\"MSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"138\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"SLOAD\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"AND\"},{\"begin\":462,\"end\":2890,\"name\":\"ISZERO\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":462,\"end\":2890,\"name\":\"MUL\"},{\"begin\":462,\"end\":2890,\"name\":\"SUB\"},{\"begin\":462,\"end\":2890,\"name\":\"AND\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"DIV\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":2890,\"name\":\"MSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":2890,\"name\":\"KECCAK256\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"DIV\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP3\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":462,\"end\":2890,\"name\":\"LT\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"158\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"MLOAD\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":462,\"end\":2890,\"name\":\"NOT\"},{\"begin\":462,\"end\":2890,\"name\":\"AND\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP4\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"OR\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP6\"},{\"begin\":462,\"end\":2890,\"name\":\"SSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"160\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"158\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP6\"},{\"begin\":462,\"end\":2890,\"name\":\"SSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"ISZERO\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"160\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"159\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"GT\"},{\"begin\":462,\"end\":2890,\"name\":\"ISZERO\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"160\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"MLOAD\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"SSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"159\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"160\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"161\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP3\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"162\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"161\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"POP\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"162\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"112\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP2\"},{\"begin\":462,\"end\":2890,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":2890,\"name\":\"tag\",\"value\":\"164\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP1\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP3\"},{\"begin\":462,\"end\":2890,\"name\":\"GT\"},{\"begin\":462,\"end\":2890,\"name\":\"ISZERO\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"161\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":2890,\"name\":\"DUP2\"},{\"begin\":462,\"end\":2890,\"name\":\"SSTORE\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":462,\"end\":2890,\"name\":\"ADD\"},{\"begin\":462,\"end\":2890,\"name\":\"PUSH [tag]\",\"value\":\"164\"},{\"begin\":462,\"end\":2890,\"name\":\"JUMP\"}]}}},\"bytecode\":\"60806040523480156200001157600080fd5b506040516200105e3803806200105e8339810160409081528151602080840151928401516060850151608086015160a087015160018054600160a060020a031916600160a060020a03891617905560028690559287018051959790959281019491019291620000879160039190870190620000c3565b5082516200009d906004906020860190620000c3565b508151620000b3906005906020850190620000c3565b5060065550620001689350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200010657805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013657825182559160200191906001019062000119565b506200014492915062000148565b5090565b6200016591905b808211156200014457600081556001016200014f565b90565b610ee680620001786000396000f3006080604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630344100681146100ea5780630a144391146101045780631fbed579146101395780633410452a1461016d5780634051ddac14610194578063481c6a75146103295780637e7cd1b31461033e57806381d12c58146103c857806382fde0931461048a5780638a9cfd551461049f57806397654a8c14610509578063a7f337151461051e578063aba8315014610533578063b2a87fc314610548578063d7d1bbdb1461055d578063ea25213f14610575575b600080fd5b3480156100f657600080fd5b5061010260043561057d565b005b34801561011057600080fd5b50610125600160a060020a03600435166106c6565b604080519115158252519081900360200190f35b34801561014557600080fd5b506101516004356106db565b60408051600160a060020a039092168252519081900360200190f35b34801561017957600080fd5b50610182610703565b60408051918252519081900360200190f35b3480156101a057600080fd5b506101a961070a565b604051808a815260200189815260200188815260200187815260200186600160a060020a0316600160a060020a03168152602001806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b8381101561022457818101518382015260200161020c565b50505050905090810190601f1680156102515780820380516001836020036101000a031916815260200191505b50848103835287518152875160209182019189019080838360005b8381101561028457818101518382015260200161026c565b50505050905090810190601f1680156102b15780820380516001836020036101000a031916815260200191505b50848103825286518152865160209182019188019080838360005b838110156102e45781810151838201526020016102cc565b50505050905090810190601f1680156103115780820380516001836020036101000a031916815260200191505b509c5050505050505050505050505060405180910390f35b34801561033557600080fd5b50610151610924565b34801561034a57600080fd5b50610353610933565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561038d578181015183820152602001610375565b50505050905090810190601f1680156103ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103d457600080fd5b506103e06004356109c1565b604051808060200186815260200185600160a060020a0316600160a060020a0316815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561044b578181015183820152602001610433565b50505050905090810190601f1680156104785780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561049657600080fd5b50610182610aac565b3480156104ab57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101029436949293602493928401919081908401838280828437509497505084359550505050602090910135600160a060020a03169050610ab2565b34801561051557600080fd5b50610353610be4565b34801561052a57600080fd5b50610182610c3f565b34801561053f57600080fd5b50610353610c45565b34801561055457600080fd5b50610182610ca0565b34801561056957600080fd5b50610102600435610ca6565b610102610d68565b600154600160a060020a0316331461059457600080fd5b600954600290046000828154811015156105aa57fe5b9060005260206000209060050201600301541115156105c857600080fd5b60008054829081106105d657fe5b600091825260209091206005909102016002015474010000000000000000000000000000000000000000900460ff161561060f57600080fd5b600080548290811061061d57fe5b600091825260208220600260059092020101548154600160a060020a03909116916108fc918490811061064c57fe5b9060005260206000209060050201600101549081150290604051600060405180830381858888f19350505050158015610689573d6000803e3d6000fd5b50600160008281548110151561069b57fe5b906000526020600020906005020160020160146101000a81548160ff02191690831515021790555050565b60086020526000908152604090205460ff1681565b60078054829081106106e957fe5b600091825260209091200154600160a060020a0316905081565b6000545b90565b60008060008060006060806060600060025430600160a060020a031631600080549050600954600160009054906101000a9004600160a060020a0316600360046005600654838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107e45780601f106107b9576101008083540402835291602001916107e4565b820191906000526020600020905b8154815290600101906020018083116107c757829003601f168201915b5050865460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959950889450925084019050828280156108725780601f1061084757610100808354040283529160200191610872565b820191906000526020600020905b81548152906001019060200180831161085557829003601f168201915b5050855460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959850879450925084019050828280156109005780601f106108d557610100808354040283529160200191610900565b820191906000526020600020905b8154815290600101906020018083116108e357829003601f168201915b50505050509150985098509850985098509850985098509850909192939495969798565b600154600160a060020a031681565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109b95780601f1061098e576101008083540402835291602001916109b9565b820191906000526020600020905b81548152906001019060200180831161099c57829003601f168201915b505050505081565b60008054829081106109cf57fe5b60009182526020918290206005919091020180546040805160026001841615610100026000190190931692909204601f810185900485028301850190915280825291935091839190830182828015610a685780601f10610a3d57610100808354040283529160200191610a68565b820191906000526020600020905b815481529060010190602001808311610a4b57829003601f168201915b505050506001830154600284015460039094015492939092600160a060020a03821692507401000000000000000000000000000000000000000090910460ff169085565b60095481565b610aba610de7565b600154600160a060020a03163314610ad157600080fd5b506040805160a0810182528481526020808201859052600160a060020a03841692820192909252600060608201819052608082018190528054600181018083559180528251805193949293859360059093027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630192610b54928492910190610e22565b5060208201516001820155604082015160028201805460608501511515740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019600160a060020a0390941673ffffffffffffffffffffffffffffffffffffffff1990921691909117929092169190911790556080909101516003909101555050505050565b6004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109b95780601f1061098e576101008083540402835291602001916109b9565b60025481565b6005805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109b95780601f1061098e576101008083540402835291602001916109b9565b60065481565b3360009081526008602052604090205460ff161515610cc457600080fd5b6000805482908110610cd257fe5b600091825260208083203384526004600590930201919091019052604090205460ff1615610cff57600080fd5b6001600082815481101515610d1057fe5b60009182526020808320338452600592909202909101600401905260408120805460ff191692151592909217909155805482908110610d4b57fe5b600091825260209091206003600590920201018054600101905550565b6002543411610d7657600080fd5b6007805460018181019092557fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801805473ffffffffffffffffffffffffffffffffffffffff1916339081179091556000908152600860205260409020805460ff191682179055600980549091019055565b60a06040519081016040528060608152602001600081526020016000600160a060020a03168152602001600015158152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610e6357805160ff1916838001178555610e90565b82800160010185558215610e90579182015b82811115610e90578251825591602001919060010190610e75565b50610e9c929150610ea0565b5090565b61070791905b80821115610e9c5760008155600101610ea65600a165627a7a72305820aad25d8e217824a555bc1bdd5e1a9f3e747c267124ae4c557b53e47d0e434d790029\",\"functionHashes\":{\"CampaignDescription()\":\"97654a8c\",\"CampaignName()\":\"7e7cd1b3\",\"approveRequest(uint256)\":\"d7d1bbdb\",\"approvers(address)\":\"0a144391\",\"approversCount()\":\"82fde093\",\"contibute()\":\"ea25213f\",\"contributers(uint256)\":\"1fbed579\",\"createRequest(string,uint256,address)\":\"8a9cfd55\",\"finalizeRequest(uint256)\":\"03441006\",\"getRequestsCount()\":\"3410452a\",\"getSummary()\":\"4051ddac\",\"imageUrl()\":\"aba83150\",\"manager()\":\"481c6a75\",\"minimunContribution()\":\"a7f33715\",\"requests(uint256)\":\"81d12c58\",\"targetToAchieve()\":\"b2a87fc3\"},\"gasEstimates\":{\"creation\":[null,762800],\"external\":{\"CampaignDescription()\":null,\"CampaignName()\":null,\"approveRequest(uint256)\":42498,\"approvers(address)\":565,\"approversCount()\":560,\"contibute()\":81625,\"contributers(uint256)\":881,\"createRequest(string,uint256,address)\":null,\"finalizeRequest(uint256)\":null,\"getRequestsCount()\":451,\"getSummary()\":null,\"imageUrl()\":null,\"manager()\":647,\"minimunContribution()\":626,\"requests(uint256)\":null,\"targetToAchieve()\":670},\"internal\":{}},\"interface\":\"[{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"finalizeRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"approvers\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"contributers\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getRequestsCount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getSummary\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"manager\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"CampaignName\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"requests\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"complete\\\",\\\"type\\\":\\\"bool\\\"},{\\\"name\\\":\\\"approvalCount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"approversCount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"createRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"CampaignDescription\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"minimunContribution\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"imageUrl\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"targetToAchieve\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"approveRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"contibute\\\",\\\"outputs\\\":[],\\\"payable\\\":true,\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"name\\\":\\\"minimun\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"creator\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"image\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"target\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"}]\",\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.4.26+commit.4563c3fc\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"finalizeRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"approvers\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"contributers\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getRequestsCount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getSummary\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"manager\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"CampaignName\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"requests\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"complete\\\",\\\"type\\\":\\\"bool\\\"},{\\\"name\\\":\\\"approvalCount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"approversCount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"createRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"CampaignDescription\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"minimunContribution\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"imageUrl\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"targetToAchieve\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"approveRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"contibute\\\",\\\"outputs\\\":[],\\\"payable\\\":true,\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"name\\\":\\\"minimun\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"creator\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"image\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"target\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"\\\":\\\"Campaign\\\"},\\\"evmVersion\\\":\\\"byzantium\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":true,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"\\\":{\\\"keccak256\\\":\\\"0xb90d842a4c7f88cee0e134ddf6b7445f468fc012a96bfde8eab556089726b630\\\",\\\"urls\\\":[\\\"bzzr://37375c2d4413efffd4843ddfa53a7bc4fbecbe25db920ed45b871f89e15c5e3b\\\"]}},\\\"version\\\":1}\",\"opcodes\":\"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x105E CODESIZE SUB DUP1 PUSH3 0x105E DUP4 CODECOPY DUP2 ADD PUSH1 0x40 SWAP1 DUP2 MSTORE DUP2 MLOAD PUSH1 0x20 DUP1 DUP5 ADD MLOAD SWAP3 DUP5 ADD MLOAD PUSH1 0x60 DUP6 ADD MLOAD PUSH1 0x80 DUP7 ADD MLOAD PUSH1 0xA0 DUP8 ADD MLOAD PUSH1 0x1 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP10 AND OR SWAP1 SSTORE PUSH1 0x2 DUP7 SWAP1 SSTORE SWAP3 DUP8 ADD DUP1 MLOAD SWAP6 SWAP8 SWAP1 SWAP6 SWAP3 DUP2 ADD SWAP5 SWAP2 ADD SWAP3 SWAP2 PUSH3 0x87 SWAP2 PUSH1 0x3 SWAP2 SWAP1 DUP8 ADD SWAP1 PUSH3 0xC3 JUMP JUMPDEST POP DUP3 MLOAD PUSH3 0x9D SWAP1 PUSH1 0x4 SWAP1 PUSH1 0x20 DUP7 ADD SWAP1 PUSH3 0xC3 JUMP JUMPDEST POP DUP2 MLOAD PUSH3 0xB3 SWAP1 PUSH1 0x5 SWAP1 PUSH1 0x20 DUP6 ADD SWAP1 PUSH3 0xC3 JUMP JUMPDEST POP PUSH1 0x6 SSTORE POP PUSH3 0x168 SWAP4 POP POP POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH3 0x106 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH3 0x136 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH3 0x136 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x136 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x119 JUMP JUMPDEST POP PUSH3 0x144 SWAP3 SWAP2 POP PUSH3 0x148 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH3 0x165 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x144 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH3 0x14F JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH2 0xEE6 DUP1 PUSH3 0x178 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xE5 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x3441006 DUP2 EQ PUSH2 0xEA JUMPI DUP1 PUSH4 0xA144391 EQ PUSH2 0x104 JUMPI DUP1 PUSH4 0x1FBED579 EQ PUSH2 0x139 JUMPI DUP1 PUSH4 0x3410452A EQ PUSH2 0x16D JUMPI DUP1 PUSH4 0x4051DDAC EQ PUSH2 0x194 JUMPI DUP1 PUSH4 0x481C6A75 EQ PUSH2 0x329 JUMPI DUP1 PUSH4 0x7E7CD1B3 EQ PUSH2 0x33E JUMPI DUP1 PUSH4 0x81D12C58 EQ PUSH2 0x3C8 JUMPI DUP1 PUSH4 0x82FDE093 EQ PUSH2 0x48A JUMPI DUP1 PUSH4 0x8A9CFD55 EQ PUSH2 0x49F JUMPI DUP1 PUSH4 0x97654A8C EQ PUSH2 0x509 JUMPI DUP1 PUSH4 0xA7F33715 EQ PUSH2 0x51E JUMPI DUP1 PUSH4 0xABA83150 EQ PUSH2 0x533 JUMPI DUP1 PUSH4 0xB2A87FC3 EQ PUSH2 0x548 JUMPI DUP1 PUSH4 0xD7D1BBDB EQ PUSH2 0x55D JUMPI DUP1 PUSH4 0xEA25213F EQ PUSH2 0x575 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xF6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x102 PUSH1 0x4 CALLDATALOAD PUSH2 0x57D JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x110 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x125 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x6C6 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x145 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x151 PUSH1 0x4 CALLDATALOAD PUSH2 0x6DB JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x179 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x182 PUSH2 0x703 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1A0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1A9 PUSH2 0x70A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP11 DUP2 MSTORE PUSH1 0x20 ADD DUP10 DUP2 MSTORE PUSH1 0x20 ADD DUP9 DUP2 MSTORE PUSH1 0x20 ADD DUP8 DUP2 MSTORE PUSH1 0x20 ADD DUP7 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP6 DUP2 MSTORE PUSH1 0x20 ADD DUP5 DUP2 SUB DUP5 MSTORE DUP9 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x224 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x20C JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x251 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP DUP5 DUP2 SUB DUP4 MSTORE DUP8 MLOAD DUP2 MSTORE DUP8 MLOAD PUSH1 0x20 SWAP2 DUP3 ADD SWAP2 DUP10 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x284 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x26C JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x2B1 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP DUP5 DUP2 SUB DUP3 MSTORE DUP7 MLOAD DUP2 MSTORE DUP7 MLOAD PUSH1 0x20 SWAP2 DUP3 ADD SWAP2 DUP9 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x2E4 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x2CC JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x311 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP13 POP POP POP POP POP POP POP POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x335 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x151 PUSH2 0x924 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x34A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x353 PUSH2 0x933 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD SWAP2 SWAP3 DUP4 SWAP3 SWAP1 DUP4 ADD SWAP2 DUP6 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x38D JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x375 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x3BA JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3D4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x3E0 PUSH1 0x4 CALLDATALOAD PUSH2 0x9C1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP7 DUP2 MSTORE PUSH1 0x20 ADD DUP6 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD DUP5 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP8 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x44B JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x433 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x478 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP7 POP POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x496 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x182 PUSH2 0xAAC JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x4AB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x4 DUP1 CALLDATALOAD DUP1 DUP3 ADD CALLDATALOAD PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP6 ADD DUP5 ADD SWAP1 SWAP6 MSTORE DUP5 DUP5 MSTORE PUSH2 0x102 SWAP5 CALLDATASIZE SWAP5 SWAP3 SWAP4 PUSH1 0x24 SWAP4 SWAP3 DUP5 ADD SWAP2 SWAP1 DUP2 SWAP1 DUP5 ADD DUP4 DUP3 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP8 POP POP DUP5 CALLDATALOAD SWAP6 POP POP POP POP PUSH1 0x20 SWAP1 SWAP2 ADD CALLDATALOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP1 POP PUSH2 0xAB2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x515 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x353 PUSH2 0xBE4 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x52A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x182 PUSH2 0xC3F JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x53F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x353 PUSH2 0xC45 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x554 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x182 PUSH2 0xCA0 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x569 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x102 PUSH1 0x4 CALLDATALOAD PUSH2 0xCA6 JUMP JUMPDEST PUSH2 0x102 PUSH2 0xD68 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x594 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x9 SLOAD PUSH1 0x2 SWAP1 DIV PUSH1 0x0 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x5AA JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x5 MUL ADD PUSH1 0x3 ADD SLOAD GT ISZERO ISZERO PUSH2 0x5C8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x5D6 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 PUSH1 0x5 SWAP1 SWAP2 MUL ADD PUSH1 0x2 ADD SLOAD PUSH21 0x10000000000000000000000000000000000000000 SWAP1 DIV PUSH1 0xFF AND ISZERO PUSH2 0x60F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x61D JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP3 KECCAK256 PUSH1 0x2 PUSH1 0x5 SWAP1 SWAP3 MUL ADD ADD SLOAD DUP2 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP2 PUSH2 0x8FC SWAP2 DUP5 SWAP1 DUP2 LT PUSH2 0x64C JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x5 MUL ADD PUSH1 0x1 ADD SLOAD SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x689 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH1 0x1 PUSH1 0x0 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x69B JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x5 MUL ADD PUSH1 0x2 ADD PUSH1 0x14 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x7 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x6E9 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP1 POP DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP1 PUSH1 0x60 PUSH1 0x0 PUSH1 0x2 SLOAD ADDRESS PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND BALANCE PUSH1 0x0 DUP1 SLOAD SWAP1 POP PUSH1 0x9 SLOAD PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x3 PUSH1 0x4 PUSH1 0x5 PUSH1 0x6 SLOAD DUP4 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x7E4 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x7B9 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x7E4 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x7C7 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP DUP7 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP6 SWAP10 POP DUP9 SWAP5 POP SWAP3 POP DUP5 ADD SWAP1 POP DUP3 DUP3 DUP1 ISZERO PUSH2 0x872 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x847 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x872 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x855 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP DUP6 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP6 SWAP9 POP DUP8 SWAP5 POP SWAP3 POP DUP5 ADD SWAP1 POP DUP3 DUP3 DUP1 ISZERO PUSH2 0x900 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x8D5 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x900 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x8E3 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP2 POP SWAP9 POP SWAP9 POP SWAP9 POP SWAP9 POP SWAP9 POP SWAP9 POP SWAP9 POP SWAP9 POP SWAP9 POP SWAP1 SWAP2 SWAP3 SWAP4 SWAP5 SWAP6 SWAP7 SWAP8 SWAP9 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x3 DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0x9B9 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x98E JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x9B9 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x99C JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x9CF JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP2 DUP3 SWAP1 KECCAK256 PUSH1 0x5 SWAP2 SWAP1 SWAP2 MUL ADD DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x2 PUSH1 0x1 DUP5 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP4 AND SWAP3 SWAP1 SWAP3 DIV PUSH1 0x1F DUP2 ADD DUP6 SWAP1 DIV DUP6 MUL DUP4 ADD DUP6 ADD SWAP1 SWAP2 MSTORE DUP1 DUP3 MSTORE SWAP2 SWAP4 POP SWAP2 DUP4 SWAP2 SWAP1 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0xA68 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xA3D JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xA68 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xA4B JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP PUSH1 0x1 DUP4 ADD SLOAD PUSH1 0x2 DUP5 ADD SLOAD PUSH1 0x3 SWAP1 SWAP5 ADD SLOAD SWAP3 SWAP4 SWAP1 SWAP3 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND SWAP3 POP PUSH21 0x10000000000000000000000000000000000000000 SWAP1 SWAP2 DIV PUSH1 0xFF AND SWAP1 DUP6 JUMP JUMPDEST PUSH1 0x9 SLOAD DUP2 JUMP JUMPDEST PUSH2 0xABA PUSH2 0xDE7 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0xAD1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0xA0 DUP2 ADD DUP3 MSTORE DUP5 DUP2 MSTORE PUSH1 0x20 DUP1 DUP3 ADD DUP6 SWAP1 MSTORE PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP5 AND SWAP3 DUP3 ADD SWAP3 SWAP1 SWAP3 MSTORE PUSH1 0x0 PUSH1 0x60 DUP3 ADD DUP2 SWAP1 MSTORE PUSH1 0x80 DUP3 ADD DUP2 SWAP1 MSTORE DUP1 SLOAD PUSH1 0x1 DUP2 ADD DUP1 DUP4 SSTORE SWAP2 DUP1 MSTORE DUP3 MLOAD DUP1 MLOAD SWAP4 SWAP5 SWAP3 SWAP4 DUP6 SWAP4 PUSH1 0x5 SWAP1 SWAP4 MUL PUSH32 0x290DECD9548B62A8D60345A988386FC84BA6BC95484008F6362F93160EF3E563 ADD SWAP3 PUSH2 0xB54 SWAP3 DUP5 SWAP3 SWAP2 ADD SWAP1 PUSH2 0xE22 JUMP JUMPDEST POP PUSH1 0x20 DUP3 ADD MLOAD PUSH1 0x1 DUP3 ADD SSTORE PUSH1 0x40 DUP3 ADD MLOAD PUSH1 0x2 DUP3 ADD DUP1 SLOAD PUSH1 0x60 DUP6 ADD MLOAD ISZERO ISZERO PUSH21 0x10000000000000000000000000000000000000000 MUL PUSH21 0xFF0000000000000000000000000000000000000000 NOT PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP5 AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x80 SWAP1 SWAP2 ADD MLOAD PUSH1 0x3 SWAP1 SWAP2 ADD SSTORE POP POP POP POP POP JUMP JUMPDEST PUSH1 0x4 DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0x9B9 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x98E JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x9B9 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x5 DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0x9B9 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x98E JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x9B9 JUMP JUMPDEST PUSH1 0x6 SLOAD DUP2 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO ISZERO PUSH2 0xCC4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0xCD2 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP1 DUP4 KECCAK256 CALLER DUP5 MSTORE PUSH1 0x4 PUSH1 0x5 SWAP1 SWAP4 MUL ADD SWAP2 SWAP1 SWAP2 ADD SWAP1 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO PUSH2 0xCFF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0xD10 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP1 DUP4 KECCAK256 CALLER DUP5 MSTORE PUSH1 0x5 SWAP3 SWAP1 SWAP3 MUL SWAP1 SWAP2 ADD PUSH1 0x4 ADD SWAP1 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP3 ISZERO ISZERO SWAP3 SWAP1 SWAP3 OR SWAP1 SWAP2 SSTORE DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0xD4B JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 PUSH1 0x3 PUSH1 0x5 SWAP1 SWAP3 MUL ADD ADD DUP1 SLOAD PUSH1 0x1 ADD SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x2 SLOAD CALLVALUE GT PUSH2 0xD76 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x7 DUP1 SLOAD PUSH1 0x1 DUP2 DUP2 ADD SWAP1 SWAP3 SSTORE PUSH32 0xA66CC928B5EDB82AF9BD49922954155AB7B0942694BEA4CE44661D9A8736C688 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND CALLER SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND DUP3 OR SWAP1 SSTORE PUSH1 0x9 DUP1 SLOAD SWAP1 SWAP2 ADD SWAP1 SSTORE JUMP JUMPDEST PUSH1 0xA0 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x60 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 DUP2 MSTORE POP SWAP1 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0xE63 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0xE90 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0xE90 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0xE90 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0xE75 JUMP JUMPDEST POP PUSH2 0xE9C SWAP3 SWAP2 POP PUSH2 0xEA0 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x707 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xE9C JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0xEA6 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xaa 0xd2 0x5d DUP15 0x21 PUSH25 0x24A555BC1BDD5E1A9F3E747C267124AE4C557B53E47D0E434D PUSH26 0x29000000000000000000000000000000000000000000000000 \",\"runtimeBytecode\":\"6080604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630344100681146100ea5780630a144391146101045780631fbed579146101395780633410452a1461016d5780634051ddac14610194578063481c6a75146103295780637e7cd1b31461033e57806381d12c58146103c857806382fde0931461048a5780638a9cfd551461049f57806397654a8c14610509578063a7f337151461051e578063aba8315014610533578063b2a87fc314610548578063d7d1bbdb1461055d578063ea25213f14610575575b600080fd5b3480156100f657600080fd5b5061010260043561057d565b005b34801561011057600080fd5b50610125600160a060020a03600435166106c6565b604080519115158252519081900360200190f35b34801561014557600080fd5b506101516004356106db565b60408051600160a060020a039092168252519081900360200190f35b34801561017957600080fd5b50610182610703565b60408051918252519081900360200190f35b3480156101a057600080fd5b506101a961070a565b604051808a815260200189815260200188815260200187815260200186600160a060020a0316600160a060020a03168152602001806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b8381101561022457818101518382015260200161020c565b50505050905090810190601f1680156102515780820380516001836020036101000a031916815260200191505b50848103835287518152875160209182019189019080838360005b8381101561028457818101518382015260200161026c565b50505050905090810190601f1680156102b15780820380516001836020036101000a031916815260200191505b50848103825286518152865160209182019188019080838360005b838110156102e45781810151838201526020016102cc565b50505050905090810190601f1680156103115780820380516001836020036101000a031916815260200191505b509c5050505050505050505050505060405180910390f35b34801561033557600080fd5b50610151610924565b34801561034a57600080fd5b50610353610933565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561038d578181015183820152602001610375565b50505050905090810190601f1680156103ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103d457600080fd5b506103e06004356109c1565b604051808060200186815260200185600160a060020a0316600160a060020a0316815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561044b578181015183820152602001610433565b50505050905090810190601f1680156104785780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561049657600080fd5b50610182610aac565b3480156104ab57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101029436949293602493928401919081908401838280828437509497505084359550505050602090910135600160a060020a03169050610ab2565b34801561051557600080fd5b50610353610be4565b34801561052a57600080fd5b50610182610c3f565b34801561053f57600080fd5b50610353610c45565b34801561055457600080fd5b50610182610ca0565b34801561056957600080fd5b50610102600435610ca6565b610102610d68565b600154600160a060020a0316331461059457600080fd5b600954600290046000828154811015156105aa57fe5b9060005260206000209060050201600301541115156105c857600080fd5b60008054829081106105d657fe5b600091825260209091206005909102016002015474010000000000000000000000000000000000000000900460ff161561060f57600080fd5b600080548290811061061d57fe5b600091825260208220600260059092020101548154600160a060020a03909116916108fc918490811061064c57fe5b9060005260206000209060050201600101549081150290604051600060405180830381858888f19350505050158015610689573d6000803e3d6000fd5b50600160008281548110151561069b57fe5b906000526020600020906005020160020160146101000a81548160ff02191690831515021790555050565b60086020526000908152604090205460ff1681565b60078054829081106106e957fe5b600091825260209091200154600160a060020a0316905081565b6000545b90565b60008060008060006060806060600060025430600160a060020a031631600080549050600954600160009054906101000a9004600160a060020a0316600360046005600654838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107e45780601f106107b9576101008083540402835291602001916107e4565b820191906000526020600020905b8154815290600101906020018083116107c757829003601f168201915b5050865460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959950889450925084019050828280156108725780601f1061084757610100808354040283529160200191610872565b820191906000526020600020905b81548152906001019060200180831161085557829003601f168201915b5050855460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959850879450925084019050828280156109005780601f106108d557610100808354040283529160200191610900565b820191906000526020600020905b8154815290600101906020018083116108e357829003601f168201915b50505050509150985098509850985098509850985098509850909192939495969798565b600154600160a060020a031681565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109b95780601f1061098e576101008083540402835291602001916109b9565b820191906000526020600020905b81548152906001019060200180831161099c57829003601f168201915b505050505081565b60008054829081106109cf57fe5b60009182526020918290206005919091020180546040805160026001841615610100026000190190931692909204601f810185900485028301850190915280825291935091839190830182828015610a685780601f10610a3d57610100808354040283529160200191610a68565b820191906000526020600020905b815481529060010190602001808311610a4b57829003601f168201915b505050506001830154600284015460039094015492939092600160a060020a03821692507401000000000000000000000000000000000000000090910460ff169085565b60095481565b610aba610de7565b600154600160a060020a03163314610ad157600080fd5b506040805160a0810182528481526020808201859052600160a060020a03841692820192909252600060608201819052608082018190528054600181018083559180528251805193949293859360059093027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630192610b54928492910190610e22565b5060208201516001820155604082015160028201805460608501511515740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019600160a060020a0390941673ffffffffffffffffffffffffffffffffffffffff1990921691909117929092169190911790556080909101516003909101555050505050565b6004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109b95780601f1061098e576101008083540402835291602001916109b9565b60025481565b6005805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109b95780601f1061098e576101008083540402835291602001916109b9565b60065481565b3360009081526008602052604090205460ff161515610cc457600080fd5b6000805482908110610cd257fe5b600091825260208083203384526004600590930201919091019052604090205460ff1615610cff57600080fd5b6001600082815481101515610d1057fe5b60009182526020808320338452600592909202909101600401905260408120805460ff191692151592909217909155805482908110610d4b57fe5b600091825260209091206003600590920201018054600101905550565b6002543411610d7657600080fd5b6007805460018181019092557fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801805473ffffffffffffffffffffffffffffffffffffffff1916339081179091556000908152600860205260409020805460ff191682179055600980549091019055565b60a06040519081016040528060608152602001600081526020016000600160a060020a03168152602001600015158152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610e6357805160ff1916838001178555610e90565b82800160010185558215610e90579182015b82811115610e90578251825591602001919060010190610e75565b50610e9c929150610ea0565b5090565b61070791905b80821115610e9c5760008155600101610ea65600a165627a7a72305820aad25d8e217824a555bc1bdd5e1a9f3e747c267124ae4c557b53e47d0e434d790029\",\"srcmap\":\"462:2428:0:-;;;1068:295;8:9:-1;5:2;;;30:1;27;20:12;5:2;1068:295:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1188:7;:17;;-1:-1:-1;;;;;;1188:17:0;-1:-1:-1;;;;;1188:17:0;;;;;1213:19;:29;;;1068:295;;;1250:17;;1068:295;;;;;;;;;;;;1250:17;;:12;;:17;;;;;:::i;:::-;-1:-1:-1;1275:31:0;;;;:19;;:31;;;;;:::i;:::-;-1:-1:-1;1314:14:0;;;;:8;;:14;;;;;:::i;:::-;-1:-1:-1;1336:15:0;:22;-1:-1:-1;462:2428:0;;-1:-1:-1;;;;462:2428:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;462:2428:0;;;-1:-1:-1;462:2428:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;\",\"srcmapRuntime\":\"462:2428:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2126:276;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2126:276:0;;;;;;;913:41;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;913:41:0;;;-1:-1:-1;;;;;913:41:0;;;;;;;;;;;;;;;;;;;;;880:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;880:29:0;;;;;;;;;-1:-1:-1;;;;;880:29:0;;;;;;;;;;;;;;2795:93;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2795:93:0;;;;;;;;;;;;;;;;;;;;2409:380;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2409:380:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2409:380:0;-1:-1:-1;;;;;2409:380:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;2409:380:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2409:380:0;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;2409:380:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2409:380:0;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;2409:380:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;695:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;695:22:0;;;;756:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;756:26:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;756:26:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;666:25:0;;;;;;;;;;;;;;;;-1:-1:-1;;;;;666:25:0;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;666:25:0;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;666:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;958:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;958:26:0;;;;1559:326;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1559:326:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1559:326:0;;-1:-1:-1;;1559:326:0;;;-1:-1:-1;;;;1559:326:0;;;;;-1:-1:-1;;;;;1559:326:0;;-1:-1:-1;1559:326:0;;786:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;786:33:0;;;;721:31;;8:9:-1;5:2;;;30:1;27;20:12;5:2;721:31:0;;;;823:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;823:22:0;;;;849:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;849:27:0;;;;1889:233;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1889:233:0;;;;;1367:188;;;;2126:276;1042:7;;-1:-1:-1;;;;;1042:7:0;1028:10;:21;1020:30;;;;;;2229:14;;2246:1;;2229:18;2196:8;2205:5;2196:15;;;;;;;;;;;;;;;;;;;;:29;;;:52;2188:61;;;;;;;;2266:8;:15;;2275:5;;2266:15;;;;;;;;;;;;;;;;;;;:24;;;;;;;;2265:25;2257:34;;;;;;2300:8;:15;;2309:5;;2300:15;;;;;;;;;;;;;;;;;;;:25;;;2335:15;;-1:-1:-1;;;;;2300:25:0;;;;:57;;2344:5;;2335:15;;;;;;;;;;;;;;;;:21;;;2300:57;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2300:57:0;2392:4;2365:8;2374:5;2365:15;;;;;;;;;;;;;;;;;;;;:24;;;:31;;;;;;;;;;;;;;;;;;2126:276;:::o;913:41::-;;;;;;;;;;;;;;;:::o;880:29::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;880:29:0;;-1:-1:-1;880:29:0;:::o;2795:93::-;2844:4;2866:15;2795:93;;:::o;2409:380::-;2452:4;2457;2462;2467;2472:7;2480:6;2487;2494;2501:4;2537:19;;2570:4;-1:-1:-1;;;;;2570:12:0;;2596:8;:15;;;;2625:14;;2653:7;;;;;;;;;-1:-1:-1;;;;;2653:7:0;2674:12;2700:19;2733:8;2755:15;;2517:265;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2517:265:0;;;;;;;;;;;;;-1:-1:-1;;2517:265:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2517:265:0;;-1:-1:-1;2517:265:0;-1:-1:-1;2517:265:0;;;-1:-1:-1;2517:265:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2517:265:0;;;;;;;;;;;;;-1:-1:-1;;2517:265:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2517:265:0;;-1:-1:-1;2517:265:0;-1:-1:-1;2517:265:0;;;-1:-1:-1;2517:265:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2409:380;;;;;;;;;:::o;695:22::-;;;-1:-1:-1;;;;;695:22:0;;:::o;756:26::-;;;;;;;;;;;;;;;-1:-1:-1;;756:26:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;666:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;666:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;666:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;666:25:0;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;666:25:0;;;-1:-1:-1;;666:25:0;;;;;;;:::o;958:26::-;;;;:::o;1559:326::-;1659:25;;:::i;:::-;1042:7;;-1:-1:-1;;;;;1042:7:0;1028:10;:21;1020:30;;;;;;-1:-1:-1;1687:159:0;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1687:159:0;;;;;;;;;-1:-1:-1;1687:159:0;;;;;;;;;;;;27:10:-1;;-1:-1;23:18;;45:23;;;1855:25:0;;;;;;;1687:159;;23:18:-1;;1687:159:0;;1855:25;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1855:25:0;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;1855:25:0;;;-1:-1:-1;;1855:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1559:326:0:o;786:33::-;;;;;;;;;;;;;;;-1:-1:-1;;786:33:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;721:31;;;;:::o;823:22::-;;;;;;;;;;;;;;;-1:-1:-1;;823:22:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;849:27;;;;:::o;1889:233::-;1958:10;1948:21;;;;:9;:21;;;;;;;;1940:30;;;;;;;;1987:8;:15;;1996:5;;1987:15;;;;;;;;;;;;;;2013:10;1987:37;;:25;:15;;;;;:25;;;;:37;;;;;;;;1986:38;1978:47;;;;;;2074:4;2034:8;2043:5;2034:15;;;;;;;;;;;;;;;;;;2060:10;2034:37;;:15;;;;;;;;:25;;:37;;;;;:44;;-1:-1:-1;;2034:44:0;;;;;;;;;;;2086:15;;2095:5;;2086:15;;;;;;;;;;;;;;:29;:15;;;;;:29;:31;;;;;;-1:-1:-1;1889:233:0:o;1367:188::-;1431:19;;1419:9;:31;1411:41;;;;;;1461:12;27:10:-1;;39:1;23:18;;;45:23;;;1461:29:0;;;;-1:-1:-1;;1461:29:0;1479:10;1461:29;;;;;;-1:-1:-1;1498:21:0;;;:9;1461:29;1498:21;;;;:28;;-1:-1:-1;;1498:28:0;;;;;1534:14;:16;;;;;;;1367:188::o;462:2428::-;;;;;;;;;;;;;-1:-1:-1;462:2428:0;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;462:2428:0;;;-1:-1:-1;462:2428:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;\"}");

/***/ }),

/***/ "./smart-contract/campaign.js":
/*!************************************!*\
  !*** ./smart-contract/campaign.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./smart-contract/web3.js");
/* harmony import */ var _build_Campaign_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/Campaign.json */ "./smart-contract/build/Campaign.json");
var _build_Campaign_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/Campaign.json */ "./smart-contract/build/Campaign.json", 1);


/* harmony default export */ __webpack_exports__["default"] = (address => {
  return new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(JSON.parse(_build_Campaign_json__WEBPACK_IMPORTED_MODULE_1__.interface), address);
});

/***/ }),

/***/ "./smart-contract/web3.js":
/*!********************************!*\
  !*** ./smart-contract/web3.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;

if (false) {} else {
  // we are on the server *OR* meta mask is not running
  // creating our own provider
  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider("https://rinkeby.infura.io/v3/8e4c1e6b201449808dd590f7120dd682");
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-use":
/*!****************************!*\
  !*** external "react-use" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "use-wallet":
/*!*****************************!*\
  !*** external "use-wallet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-wallet");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9saWIvZ2V0RVRIUHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NhbXBhaWduLy9yZXF1ZXN0cy9uZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc21hcnQtY29udHJhY3QvY2FtcGFpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vc21hcnQtY29udHJhY3Qvd2ViMy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaG9vay1mb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC11c2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1c2Utd2FsbGV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbImdldEVUSFByaWNlIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXRoUHJpY2UiLCJjdXJyZW50X3ByaWNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRXRUlQcmljZUluVVNEIiwidXNkIiwid2VpIiwiY29udmVydFdlaVRvRVRIIiwiZ2V0RVRIUHJpY2VJblVTRCIsImV0aCIsInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiTmV3UmVxdWVzdCIsInVzZVJvdXRlciIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwiZm9ybVN0YXRlIiwiaXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwidXNlRm9ybSIsIm1vZGUiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwiaW5VU0QiLCJzZXRJblVTRCIsIkVUSFByaWNlIiwic2V0RVRIUHJpY2UiLCJ3YWxsZXQiLCJ1c2VXYWxsZXQiLCJ1c2VBc3luYyIsIm9uU3VibWl0IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsImFjY291bnRzIiwid2ViMyIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwidG9XZWkiLCJyZWNpcGllbnQiLCJzZW5kIiwiZnJvbSIsInVzZUNvbG9yTW9kZVZhbHVlIiwicmVxdWlyZWQiLCJhYnMiLCJzdGF0dXMiLCJiZ0dyYWRpZW50IiwiYm94U2hhZG93IiwiYmciLCJjb25uZWN0IiwiYWRkcmVzcyIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwicHJvdmlkZXIiLCJXZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxNQUFNQSxXQUFXLEdBQUcs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MkNBQUosQ0FBU0QsUUFBVCxDQUFQO0FBQ0Q7O0FBRWN2QixtRUFBZixFOzs7Ozs7Ozs7OztBQ2pCQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9jYW1wYWlnbi9baWRdL3JlcXVlc3RzL25ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY2FtcGFpZ24vW2lkXS9yZXF1ZXN0cy9uZXcuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5leHBvcnQgY29uc3QgZ2V0RVRIUHJpY2UgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvbWFya2V0cz92c19jdXJyZW5jeT11c2QmaWRzPWV0aGVyZXVtXCJcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgZXRoUHJpY2UgPSBkYXRhWzBdLmN1cnJlbnRfcHJpY2U7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGFyc2VGbG9hdChldGhQcmljZSkudG9GaXhlZCgyKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V0VJUHJpY2VJblVTRCA9ICh1c2QsIHdlaSkgPT4ge1xuICByZXR1cm4gcGFyc2VGbG9hdChjb252ZXJ0V2VpVG9FVEgod2VpKSAqIHVzZCkudG9GaXhlZCgyKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0RVRIUHJpY2VJblVTRCA9ICh1c2QsIGV0aCkgPT4ge1xuICByZXR1cm4gcGFyc2VGbG9hdChldGggKiB1c2QpLnRvRml4ZWQoMik7XG59O1xuXG5leHBvcnQgY29uc3QgY29udmVydFdlaVRvRVRIID0gKHdlaSkgPT4ge1xuICByZXR1cm4gcGFyc2VGbG9hdCh3ZWkpIC8gMTAwMDAwMDAwMDAwMDAwMDAwMDtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEFycm93QmFja0ljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSBcInVzZS13YWxsZXRcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRFVEhQcmljZSwgZ2V0RVRIUHJpY2VJblVTRCB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvZ2V0RVRIUHJpY2VcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgSW5wdXQsXG4gIFN0YWNrLFxuICBCdXR0b24sXG4gIEhlYWRpbmcsXG4gIFRleHQsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICBJbnB1dFJpZ2h0QWRkb24sXG4gIElucHV0R3JvdXAsXG4gIEFsZXJ0LFxuICBBbGVydEljb24sXG4gIEFsZXJ0RGVzY3JpcHRpb24sXG4gIEZvcm1FcnJvck1lc3NhZ2UsXG4gIEZvcm1IZWxwZXJUZXh0LFxuICBUZXh0YXJlYSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi8uLi8uLi9zbWFydC1jb250cmFjdC93ZWIzXCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uLy4uL3NtYXJ0LWNvbnRyYWN0L2NhbXBhaWduXCI7XG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gXCJyZWFjdC11c2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UmVxdWVzdCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3Qge1xuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICByZWdpc3RlcixcbiAgICBmb3JtU3RhdGU6IHsgaXNTdWJtaXR0aW5nLCBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm0oe1xuICAgIG1vZGU6IFwib25DaGFuZ2VcIixcbiAgfSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpblVTRCwgc2V0SW5VU0RdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW0VUSFByaWNlLCBzZXRFVEhQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XG4gIHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0RVRIUHJpY2UoKTtcbiAgICAgIHNldEVUSFByaWNlKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oaWQpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzXG4gICAgICAgIC5jcmVhdGVSZXF1ZXN0KFxuICAgICAgICAgIGRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgd2ViMy51dGlscy50b1dlaShkYXRhLnZhbHVlLCBcImV0aGVyXCIpLFxuICAgICAgICAgIGRhdGEucmVjaXBpZW50XG4gICAgICAgIClcbiAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcblxuICAgICAgcm91dGVyLnB1c2goYC9jYW1wYWlnbi8ke2lkfS9yZXF1ZXN0c2ApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBhIFdpdGhkcmF3YWwgUmVxdWVzdDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDcmVhdGUgYSBXaXRoZHJhd2FsIFJlcXVlc3RcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9sb2dvLnN2Z1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezh9IG14PXtcImF1dG9cIn0gbWF4Vz17XCIyeGxcIn0gcHk9ezEyfSBweD17Nn0+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9e1wibGdcIn0gY29sb3I9e1wicHVycGxlLjcwMFwifSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEFycm93QmFja0ljb24gbXI9ezJ9IC8+XG4gICAgICAgICAgICA8TmV4dExpbmsgaHJlZj17YC9jYW1wYWlnbi8ke2lkfS9yZXF1ZXN0c2B9PlxuICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT17XCI0eGxcIn0+Q3JlYXRlIGEgV2l0aGRyYXdhbCBSZXF1ZXN0PC9IZWFkaW5nPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgcm91bmRlZD17XCJsZ1wifVxuICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwid2hpdGVcIiwgXCJncmF5LjcwMFwiKX1cbiAgICAgICAgICAgIGJveFNoYWRvdz17XCJsZ1wifVxuICAgICAgICAgICAgcD17OH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5SZXF1ZXN0IERlc2NyaXB0aW9uPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZGVzY3JpcHRpb25cIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpZD1cInZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkFtb3VudCBpbiBFdGhlcjwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwidmFsdWVcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJblVTRChNYXRoLmFicyhlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRSaWdodEFkZG9uIGNoaWxkcmVuPVwiRVRIXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgICAgIHtpblVTRCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIH4kIHtnZXRFVEhQcmljZUluVVNEKEVUSFByaWNlLCBpblVTRCl9XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlkPVwicmVjaXBpZW50XCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJyZWNpcGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVjaXBpZW50IEV0aGVyZXVtIFdhbGxldCBBZGRyZXNzXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVjaXBpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwicmVjaXBpZW50XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmRlc2NyaXB0aW9uIHx8IGVycm9ycy52YWx1ZSB8fCBlcnJvcnMucmVjaXBpZW50ID8gKFxuICAgICAgICAgICAgICAgICAgPEFsZXJ0IHN0YXR1cz1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPEFsZXJ0RGVzY3JpcHRpb24gbXI9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICBBbGwgRmllbGRzIGFyZSBSZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtlcnJvciA/IChcbiAgICAgICAgICAgICAgICAgIDxBbGVydCBzdGF0dXM9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgIDxBbGVydERlc2NyaXB0aW9uIG1yPXsyfT4ge2Vycm9yfTwvQWxlcnREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEwfT5cbiAgICAgICAgICAgICAgICAgIHt3YWxsZXQuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGJnR3JhZGllbnQ9XCJsaW5lYXIodG8tciwgcHVycGxlLjYwMCxibHVlLjUwMClcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxuICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgICBiZ0dyYWRpZW50OiBcImxpbmVhcih0by1yLCBwdXJwbGUuNDAwLGJsdWUuNDAwKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJ4bFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFdpdGhkcmF3YWwgUmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgYmc9e1wicHVycGxlLjcwMFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJnOiBcInB1cnBsZS41MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3YWxsZXQuY29ubmVjdCgpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBzdGF0dXM9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnREZXNjcmlwdGlvbiBtcj17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBDb25uZWN0IFlvdXIgV2FsbGV0IEZpcnN0IHRvIENyZWF0ZSBhIFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHdlYjMgZnJvbSBcIi4vd2ViM1wiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuL2J1aWxkL0NhbXBhaWduLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgKGFkZHJlc3MpID0+IHtcbiAgcmV0dXJuIG5ldyB3ZWIzLmV0aC5Db250cmFjdChKU09OLnBhcnNlKENhbXBhaWduLmludGVyZmFjZSksIGFkZHJlc3MpO1xufTtcbiIsImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbmxldCB3ZWIzO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgLy8gd2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhIG1hc2sgaXMgaW5zdGFsbGVkXG4gIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xufSBlbHNlIHtcbiAgLy8gd2UgYXJlIG9uIHRoZSBzZXJ2ZXIgKk9SKiBtZXRhIG1hc2sgaXMgbm90IHJ1bm5pbmdcbiAgLy8gY3JlYXRpbmcgb3VyIG93biBwcm92aWRlclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgXCJodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzLzhlNGMxZTZiMjAxNDQ5ODA4ZGQ1OTBmNzEyMGRkNjgyXCJcbiAgKTtcblxuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC11c2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVzZS13YWxsZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9