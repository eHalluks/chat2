// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"juhEU":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "8e2664b1b63e173a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hKMZ0":[function(require,module,exports) {
var _uuid = require("uuid");
console.log("Test start UI file");
const newBook = document.querySelector("#newBook");
const booksList = document.querySelector("#list");
const booksForm = document.querySelector("#booksForm");
const inputText = document.querySelector('[data-name="input-text"]');
const addInputValue = document.querySelectorAll('[data-name="addInputValue"]');
const booksFromLocalDataBase = [
    {
        id: 0,
        title: "C sharp",
        category: "Fantasy",
        author: "UNKNOWN",
        year: 2022,
        price: 7.99
    },
    {
        id: 0,
        title: "Metamorphoses",
        category: "Fantasy",
        author: "Ovid",
        year: 100,
        price: 559.3000000000001
    },
    {
        id: 0,
        title: "The Book of Disquiet",
        category: "Fantasy",
        author: "Fernando Pessoa",
        year: 1928,
        price: 567.29
    },
    {
        id: 0,
        title: "Tales",
        category: "Fantasy",
        author: "Edgar Allan Poe",
        year: 1950,
        price: 575.28
    },
    {
        id: 0,
        title: "In Search of Lost Time",
        category: "Fantasy",
        author: "Marcel Proust",
        year: 1920,
        price: 583.27
    },
    {
        id: 0,
        title: "Gargantua and Pantagruel",
        category: "Fantasy",
        author: "Fran\xe7ois Rabelais",
        year: 1533,
        price: 591.26
    },
    {
        id: 0,
        title: "Pedro P\xe1ramo",
        category: "Fantasy",
        author: "Juan Rulfo",
        year: 1955,
        price: 599.25
    },
    {
        id: 0,
        title: "The Masnavi",
        category: "Fantasy",
        author: "Rumi",
        year: 1236,
        price: 607.24
    },
    {
        id: 0,
        title: "Midnight's Children",
        category: "Fantasy",
        author: "Salman Rushdie",
        year: 1981,
        price: 615.23
    },
    {
        id: 0,
        title: "Bostan",
        category: "Fantasy",
        author: "Saadi",
        year: 1257,
        price: 623.22
    },
    {
        id: 0,
        title: "Season of Migration to the North",
        category: "Fantasy",
        author: "Tayeb Salih",
        year: 1966,
        price: 631.21
    },
    {
        id: 0,
        title: "Blindness",
        category: "Fantasy",
        author: "Jos\xe9 Saramago",
        year: 1995,
        price: 639.2
    },
    {
        id: 0,
        title: "Hamlet",
        category: "Fantasy",
        author: "William Shakespeare",
        year: 1603,
        price: 647.19
    },
    {
        id: 0,
        title: "King Lear",
        category: "Fantasy",
        author: "William Shakespeare",
        year: 1608,
        price: 655.1800000000001
    },
    {
        id: 0,
        title: "Othello",
        category: "Fantasy",
        author: "William Shakespeare",
        year: 1609,
        price: 663.1700000000001
    },
    {
        id: 0,
        title: "Oedipus the King",
        category: "Fantasy",
        author: "Sophocles",
        year: -430,
        price: 671.16
    },
    {
        id: 0,
        title: "The Red and the Black",
        category: "Fantasy",
        author: "Stendhal",
        year: 1830,
        price: 679.15
    },
    {
        id: 0,
        title: "The Life And Opinions of Tristram Shandy",
        category: "Fantasy",
        author: "Laurence Sterne",
        year: 1760,
        price: 687.14
    },
    {
        id: 0,
        title: "Confessions of Zeno",
        category: "Fantasy",
        author: "Italo Svevo",
        year: 1923,
        price: 695.13
    },
    {
        id: 0,
        title: "Gulliver's Travels",
        category: "Fantasy",
        author: "Jonathan Swift",
        year: 1726,
        price: 703.12
    },
    {
        id: 0,
        title: "War and Peace",
        category: "Fantasy",
        author: "Leo Tolstoy",
        year: 1867,
        price: 711.11
    },
    {
        id: 0,
        title: "Anna Karenina",
        category: "Fantasy",
        author: "Leo Tolstoy",
        year: 1877,
        price: 719.1
    },
    {
        id: 0,
        title: "The Death of Ivan Ilyich",
        category: "Fantasy",
        author: "Leo Tolstoy",
        year: 1886,
        price: 727.09
    },
    {
        id: 0,
        title: "The Adventures of Huckleberry Finn",
        category: "Fantasy",
        author: "Mark Twain",
        year: 1884,
        price: 735.08
    },
    {
        id: 0,
        title: "Ramayana",
        category: "Fantasy",
        author: "Valmiki",
        year: -450,
        price: 743.07
    },
    {
        id: 0,
        title: "The Aeneid",
        category: "Fantasy",
        author: "Virgil",
        year: -23,
        price: 751.0600000000001
    },
    {
        id: 0,
        title: "Mahabharata",
        category: "Fantasy",
        author: "Vyasa",
        year: -700,
        price: 759.0500000000001
    },
    {
        id: 0,
        title: "Leaves of Grass",
        category: "Fantasy",
        author: "Walt Whitman",
        year: 1855,
        price: 767.04
    },
    {
        id: 0,
        title: "Things Fall Apart",
        category: "Fantasy",
        author: "Chinua Achebe",
        year: 1958,
        price: 0
    },
    {
        id: 0,
        title: "Fairy tales",
        category: "Fantasy",
        author: "Hans Christian Andersen",
        year: 1836,
        price: 7.99
    },
    {
        id: 0,
        title: "The Divine Comedy",
        category: "Fantasy",
        author: "Dante Alighieri",
        year: 1315,
        price: 15.98
    },
    {
        id: 0,
        title: "The Epic Of Gilgamesh",
        category: "Fantasy",
        author: "Unknown",
        year: -1700,
        price: 23.97
    },
    {
        id: 0,
        title: "The Book Of Job",
        category: "Fantasy",
        author: "Unknown",
        year: -600,
        price: 31.96
    },
    {
        id: 0,
        title: "One Thousand and One Nights",
        category: "Fantasy",
        author: "Unknown",
        year: 1200,
        price: 39.95
    },
    {
        id: 0,
        title: "Nj\xe1l's Saga",
        category: "Fantasy",
        author: "Unknown",
        year: 1350,
        price: 47.94
    },
    {
        id: 0,
        title: "Pride and Prejudice",
        category: "Fantasy",
        author: "Jane Austen",
        year: 1813,
        price: 55.93
    },
    {
        id: 0,
        title: "Le P\xe8re Goriot",
        category: "Fantasy",
        author: "Honor\xe9 de Balzac",
        year: 1835,
        price: 63.92
    },
    {
        id: 0,
        title: "Molloy, Malone Dies, The Unnamable, the trilogy",
        category: "Fantasy",
        author: "Samuel Beckett",
        year: 1952,
        price: 71.91
    },
    {
        id: 0,
        title: "The Decameron",
        category: "Fantasy",
        author: "Giovanni Boccaccio",
        year: 1351,
        price: 79.9
    },
    {
        id: 0,
        title: "Ficciones",
        category: "Fantasy",
        author: "Jorge Luis Borges",
        year: 1965,
        price: 87.89
    },
    {
        id: 0,
        title: "Wuthering Heights",
        category: "Fantasy",
        author: "Emily Bront\xeb",
        year: 1847,
        price: 95.88
    },
    {
        id: 0,
        title: "The Stranger",
        category: "Fantasy",
        author: "Albert Camus",
        year: 1942,
        price: 103.87
    },
    {
        id: 0,
        title: "Poems",
        category: "Fantasy",
        author: "Paul Celan",
        year: 1952,
        price: 111.86
    },
    {
        id: 0,
        title: "Journey to the End of the Night",
        category: "Fantasy",
        author: "Louis-Ferdinand C\xe9line",
        year: 1932,
        price: 119.85000000000001
    },
    {
        id: 0,
        title: "Don Quijote De La Mancha",
        category: "Fantasy",
        author: "Miguel de Cervantes",
        year: 1610,
        price: 127.84
    },
    {
        id: 0,
        title: "The Canterbury Tales",
        category: "Fantasy",
        author: "Geoffrey Chaucer",
        year: 1450,
        price: 135.83
    },
    {
        id: 0,
        title: "Stories",
        category: "Fantasy",
        author: "Anton Chekhov",
        year: 1886,
        price: 143.82
    },
    {
        id: 0,
        title: "Nostromo",
        category: "Fantasy",
        author: "Joseph Conrad",
        year: 1904,
        price: 151.81
    },
    {
        id: 0,
        title: "Great Expectations",
        category: "Fantasy",
        author: "Charles Dickens",
        year: 1861,
        price: 159.8
    },
    {
        id: 0,
        title: "Jacques the Fatalist",
        category: "Fantasy",
        author: "Denis Diderot",
        year: 1796,
        price: 167.79
    },
    {
        id: 0,
        title: "Berlin Alexanderplatz",
        category: "Fantasy",
        author: "Alfred D\xf6blin",
        year: 1929,
        price: 175.78
    },
    {
        id: 0,
        title: "Crime and Punishment",
        category: "Fantasy",
        author: "Fyodor Dostoevsky",
        year: 1866,
        price: 183.77
    },
    {
        id: 0,
        title: "The Idiot",
        category: "Fantasy",
        author: "Fyodor Dostoevsky",
        year: 1869,
        price: 191.76
    },
    {
        id: 0,
        title: "The Possessed",
        category: "Fantasy",
        author: "Fyodor Dostoevsky",
        year: 1872,
        price: 199.75
    },
    {
        id: 0,
        title: "The Brothers Karamazov",
        category: "Fantasy",
        author: "Fyodor Dostoevsky",
        year: 1880,
        price: 207.74
    },
    {
        id: 0,
        title: "Middlemarch",
        category: "Fantasy",
        author: "George Eliot",
        year: 1871,
        price: 215.73000000000002
    },
    {
        id: 0,
        title: "Invisible Man",
        category: "Fantasy",
        author: "Ralph Ellison",
        year: 1952,
        price: 223.72
    },
    {
        id: 0,
        title: "Medea",
        category: "Fantasy",
        author: "Euripides",
        year: -431,
        price: 231.71
    },
    {
        id: 0,
        title: "Absalom, Absalom!",
        category: "Fantasy",
        author: "William Faulkner",
        year: 1936,
        price: 239.70000000000002
    },
    {
        id: 0,
        title: "The Sound and the Fury",
        category: "Fantasy",
        author: "William Faulkner",
        year: 1929,
        price: 247.69
    },
    {
        id: 0,
        title: "Madame Bovary",
        category: "Fantasy",
        author: "Gustave Flaubert",
        year: 1857,
        price: 255.68
    },
    {
        id: 0,
        title: "Sentimental Education",
        category: "Fantasy",
        author: "Gustave Flaubert",
        year: 1869,
        price: 263.67
    },
    {
        id: 0,
        title: "Gypsy Ballads",
        category: "Fantasy",
        author: "Federico Garc\xeda Lorca",
        year: 1928,
        price: 271.66
    },
    {
        id: 0,
        title: "One Hundred Years of Solitude",
        category: "Fantasy",
        author: "Gabriel Garc\xeda M\xe1rquez",
        year: 1967,
        price: 279.65000000000003
    },
    {
        id: 0,
        title: "Love in the Time of Cholera",
        category: "Fantasy",
        author: "Gabriel Garc\xeda M\xe1rquez",
        year: 1985,
        price: 287.64
    },
    {
        id: 0,
        title: "Faust",
        category: "Fantasy",
        author: "Johann Wolfgang von Goethe",
        year: 1832,
        price: 295.63
    },
    {
        id: 0,
        title: "Dead Souls",
        category: "Fantasy",
        author: "Nikolai Gogol",
        year: 1842,
        price: 303.62
    },
    {
        id: 0,
        title: "The Tin Drum",
        category: "Fantasy",
        author: "G\xfcnter Grass",
        year: 1959,
        price: 311.61
    },
    {
        id: 0,
        title: "The Devil to Pay in the Backlands",
        category: "Fantasy",
        author: "Jo\xe3o Guimar\xe3es Rosa",
        year: 1956,
        price: 319.6
    },
    {
        id: 0,
        title: "Hunger",
        category: "Fantasy",
        author: "Knut Hamsun",
        year: 1890,
        price: 327.59000000000003
    },
    {
        id: 0,
        title: "The Old Man and the Sea",
        category: "Fantasy",
        author: "Ernest Hemingway",
        year: 1952,
        price: 335.58
    },
    {
        id: 0,
        title: "Iliad",
        category: "Fantasy",
        author: "Homer",
        year: -735,
        price: 343.57
    },
    {
        id: 0,
        title: "Odyssey",
        category: "Fantasy",
        author: "Homer",
        year: -800,
        price: 351.56
    },
    {
        id: 0,
        title: "A Doll's House",
        category: "Fantasy",
        author: "Henrik Ibsen",
        year: 1879,
        price: 359.55
    },
    {
        id: 0,
        title: "Ulysses",
        category: "Fantasy",
        author: "James Joyce",
        year: 1922,
        price: 367.54
    },
    {
        id: 0,
        title: "The Trial",
        category: "Fantasy",
        author: "Franz Kafka",
        year: 1925,
        price: 383.52
    },
    {
        id: 0,
        title: "The Castle",
        category: "Fantasy",
        author: "Franz Kafka",
        year: 1926,
        price: 391.51
    },
    {
        id: 0,
        title: "The recognition of Shakuntala",
        category: "Fantasy",
        author: "Kālidāsa",
        year: 150,
        price: 399.5
    },
    {
        id: 0,
        title: "The Sound of the Mountain",
        category: "Fantasy",
        author: "Yasunari Kawabata",
        year: 1954,
        price: 407.49
    },
    {
        id: 0,
        title: "Zorba the Greek",
        category: "Fantasy",
        author: "Nikos Kazantzakis",
        year: 1946,
        price: 415.48
    },
    {
        id: 0,
        title: "Sons and Lovers",
        category: "Fantasy",
        author: "D. H. Lawrence",
        year: 1913,
        price: 423.47
    },
    {
        id: 0,
        title: "Independent People",
        category: "Fantasy",
        author: "Halld\xf3r Laxness",
        year: 1934,
        price: 431.46000000000004
    },
    {
        id: 0,
        title: "The Golden Notebook",
        category: "Fantasy",
        author: "Doris Lessing",
        year: 1962,
        price: 447.44
    },
    {
        id: 0,
        title: "Pippi Longstocking",
        category: "Fantasy",
        author: "Astrid Lindgren",
        year: 1945,
        price: 455.43
    },
    {
        id: 0,
        title: "Diary of a Madman",
        category: "Fantasy",
        author: "Lu Xun",
        year: 1918,
        price: 463.42
    },
    {
        id: 0,
        title: "Children of Gebelawi",
        category: "Fantasy",
        author: "Naguib Mahfouz",
        year: 1959,
        price: 471.41
    },
    {
        id: 0,
        title: "Buddenbrooks",
        category: "Fantasy",
        author: "Thomas Mann",
        year: 1901,
        price: 479.40000000000003
    },
    {
        id: 0,
        title: "The Magic Mountain",
        category: "Fantasy",
        author: "Thomas Mann",
        year: 1924,
        price: 487.39
    },
    {
        id: 0,
        title: "Moby Dick",
        category: "Fantasy",
        author: "Herman Melville",
        year: 1851,
        price: 495.38
    },
    {
        id: 0,
        title: "Essays",
        category: "Fantasy",
        author: "Michel de Montaigne",
        year: 1595,
        price: 503.37
    },
    {
        id: 0,
        title: "History",
        category: "Fantasy",
        author: "Elsa Morante",
        year: 1974,
        price: 511.36
    },
    {
        id: 0,
        title: "Beloved",
        category: "Fantasy",
        author: "Toni Morrison",
        year: 1987,
        price: 519.35
    },
    {
        id: 0,
        title: "The Tale of Genji",
        category: "Fantasy",
        author: "Murasaki Shikibu",
        year: 1006,
        price: 527.34
    },
    {
        id: 0,
        title: "The Man Without Qualities",
        category: "Fantasy",
        author: "Robert Musil",
        year: 1931,
        price: 535.33
    },
    {
        id: 0,
        title: "Lolita",
        category: "Fantasy",
        author: "Vladimir Nabokov",
        year: 1955,
        price: 543.32
    },
    {
        id: 0,
        title: "Nineteen Eighty-Four",
        category: "Fantasy",
        author: "George Orwell",
        year: 1949,
        price: 551.3100000000001
    },
    {
        id: 0,
        title: "Mrs Dalloway",
        category: "Fantasy",
        author: "Virginia Woolf",
        year: 1925,
        price: 775.03
    },
    {
        id: 0,
        title: "To the Lighthouse",
        category: "Fantasy",
        author: "Virginia Woolf",
        year: 1927,
        price: 783.02
    },
    {
        id: 0,
        title: "Memoirs of Hadrian",
        category: "Fantasy",
        author: "Marguerite Yourcenar",
        year: 1951,
        price: 791.01
    }
];
const tempArr = [];
let myFunAddIdToBook;
let myFunRenderBooks;
let myFunFilterBooks;
let addNewBook;
/*
code to remove duplicates from array
let result = booksFromLocalDataBase.filter(function ({ title }) {
    return !this.has(title) && this.add(title);
}, new Set)

console.log(result);
*/ //ES9 - if variable -eq (undefined || null || false) you can use operator ?? in re
const bookLibrary = JSON.parse(localStorage.getItem("books")) ?? booksFromLocalDataBase;
myFunAddIdToBook = ()=>{
    bookLibrary.forEach((element, i)=>{
        element.uniCode = (0, _uuid.v4)();
        element.id = i + 1;
    });
};
myFunRenderBooks = (booksOfList)=>{
    myFunAddIdToBook();
    booksList.innerHTML = "";
    booksOfList.forEach(({ id , title , category , author , year , price  })=>{
        booksList.innerHTML += `
        <div class="grid-item">
            <li>
                <h2>${title}</h2>
                <p><strong>No: </strong>#${id}</p>
                <p><strong>Author: </strong>${category}</p>
                <p><strong>Category: </strong>${author}</p>
                <p><strong>Year: </strong>${year}</p>
                <p><strong>Price: </strong>${price.toFixed(2)} PLN</p>
            </li>
        </div>`;
    });
};
myFunFilterBooks = (event)=>{
    event.preventDefault();
    const foundBooks = bookLibrary.filter(({ title  })=>{
        return title.toLowerCase().includes(inputText.value.toLowerCase());
    });
    setTimeout(()=>{
        location.reload();
    }, 10000);
    myFunRenderBooks(foundBooks);
    inputText.value = "";
    inputText.focus();
};
addNewBook = (event)=>{
    event.preventDefault();
    addInputValue.forEach((element)=>{
        tempArr.push(element.value);
    });
    const book = {
        id: 0,
        title: tempArr[0],
        category: tempArr[1],
        author: tempArr[2],
        year: Number(tempArr[3]),
        price: Number(tempArr[4])
    };
    bookLibrary.push(book);
    localStorage.setItem("books", JSON.stringify(bookLibrary));
    tempArr.length = 0;
    addInputValue.forEach((element)=>{
        element.value = "";
    });
    myFunRenderBooks(bookLibrary);
};
myFunRenderBooks(bookLibrary);
booksForm.addEventListener("submit", myFunFilterBooks);
newBook.addEventListener("submit", addNewBook);

},{"uuid":"j4KJi"}],"j4KJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"8zJtu","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":"eHPgI","./stringify.js":"5Y9F1","./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zJtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"lYayS","./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYayS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2psyE":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}
exports.default = rng;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Y9F1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["juhEU","hKMZ0"], "hKMZ0", "parcelRequireef3d")

//# sourceMappingURL=index.b63e173a.js.map
