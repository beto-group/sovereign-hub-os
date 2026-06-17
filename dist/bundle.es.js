import M from "react";
import pr from "react-dom";
var fe = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function vr() {
  if (We) return U;
  We = 1;
  var f = M, i = Symbol.for("react.element"), E = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, y = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(R, u, x) {
    var s, g = {}, w = null, k = null;
    x !== void 0 && (w = "" + x), u.key !== void 0 && (w = "" + u.key), u.ref !== void 0 && (k = u.ref);
    for (s in u) T.call(u, s) && !j.hasOwnProperty(s) && (g[s] = u[s]);
    if (R && R.defaultProps) for (s in u = R.defaultProps, u) g[s] === void 0 && (g[s] = u[s]);
    return { $$typeof: i, type: R, key: w, ref: k, props: g, _owner: y.current };
  }
  return U.Fragment = E, U.jsx = b, U.jsxs = b, U;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function gr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var f = M, i = Symbol.for("react.element"), E = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), R = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), F = Symbol.iterator, $ = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[$];
      return typeof r == "function" ? r : null;
    }
    var C = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Q("error", e, t);
      }
    }
    function Q(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, c = n.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var P = !1, V = !1, Z = !1, pe = !1, ee = !1, B;
    B = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === T || e === j || ee || e === y || e === x || e === s || pe || e === k || P || V || Z || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === g || e.$$typeof === b || e.$$typeof === R || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === B || e.getModuleId !== void 0));
    }
    function te(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function J(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case E:
          return "Portal";
        case j:
          return "Profiler";
        case y:
          return "StrictMode";
        case x:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return J(r) + ".Consumer";
          case b:
            var t = e;
            return J(t._context) + ".Provider";
          case u:
            return te(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case w: {
            var c = e, l = c._payload, o = c._init;
            try {
              return O(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, Y = 0, ve, ge, me, ye, be, he, Ee;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ve() {
      {
        if (Y === 0) {
          ve = console.log, ge = console.info, me = console.warn, ye = console.error, be = console.group, he = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Y++;
      }
    }
    function Ye() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: ve
            }),
            info: A({}, e, {
              value: ge
            }),
            warn: A({}, e, {
              value: me
            }),
            error: A({}, e, {
              value: ye
            }),
            group: A({}, e, {
              value: be
            }),
            groupCollapsed: A({}, e, {
              value: he
            }),
            groupEnd: A({}, e, {
              value: Ee
            })
          });
        }
        Y < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = C.ReactCurrentDispatcher, ae;
    function K(e, r, t) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (c) {
            var n = c.stack.trim().match(/\n( *(at )?)/);
            ae = n && n[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var oe = !1, z;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Ne();
    }
    function _e(e, r) {
      if (!e || oe)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      oe = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = ne.current, ne.current = null, Ve();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), h = n.stack.split(`
`), d = a.length - 1, v = h.length - 1; d >= 1 && v >= 0 && a[d] !== h[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (a[d] !== h[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || a[d] !== h[v]) {
                    var S = `
` + a[d].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, S), S;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = l, Ye(), Error.prepareStackTrace = c;
      }
      var L = e ? e.displayName || e.name : "", D = L ? K(L) : "";
      return typeof e == "function" && z.set(e, D), D;
    }
    function Ue(e, r, t) {
      return _e(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, qe(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case x:
          return K("Suspense");
        case s:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ue(e.render);
          case g:
            return G(e.type, r, t);
          case w: {
            var n = e, c = n._payload, l = n._init;
            try {
              return G(l(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, Te = {}, we = C.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, c) {
      {
        var l = Function.call.bind(N);
        for (var o in e)
          if (l(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              a = d;
            }
            a && !(a instanceof Error) && (X(c), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), X(null)), a instanceof Error && !(a.message in Te) && (Te[a.message] = !0, X(c), p("Failed %s type: %s", t, a.message), X(null));
          }
      }
    }
    var Je = Array.isArray;
    function ie(e) {
      return Je(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function Se(e) {
      if (ze(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), xe(e);
    }
    var Ce = C.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Oe;
    function Xe(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && Ce.current;
    }
    function Ze(e, r) {
      {
        var t = function() {
          je || (je = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, c, l, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, c) {
      {
        var l, o = {}, a = null, h = null;
        t !== void 0 && (Se(t), a = "" + t), He(r) && (Se(r.key), a = "" + r.key), Xe(r) && (h = r.ref, Qe(r, c));
        for (l in r)
          N.call(r, l) && !Ge.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            o[l] === void 0 && (o[l] = d[l]);
        }
        if (a || h) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, v), h && er(o, v);
        }
        return rr(e, a, h, c, n, Ce.current, o);
      }
    }
    var se = C.ReactCurrentOwner, ke = C.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Pe() {
      {
        if (se.current) {
          var e = O(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var Fe = {};
    function ar(e) {
      {
        var r = Pe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Fe[t])
          return;
        Fe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== se.current && (n = " It was passed a child from " + O(e._owner.type) + "."), W(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), W(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ce(n) && Ae(n, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = I(e);
          if (typeof c == "function" && c !== e.entries)
            for (var l = c.call(e), o; !(o = l.next()).done; )
              ce(o.value) && Ae(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var c = O(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            W(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Me = {};
    function Ie(e, r, t, n, c, l) {
      {
        var o = re(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = nr();
          h ? a += h : a += Pe();
          var d;
          e === null ? d = "null" : ie(e) ? d = "array" : e !== void 0 && e.$$typeof === i ? (d = "<" + (O(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, a);
        }
        var v = tr(e, r, t, c, l);
        if (v == null)
          return v;
        if (o) {
          var S = r.children;
          if (S !== void 0)
            if (n)
              if (ie(S)) {
                for (var L = 0; L < S.length; L++)
                  De(S[L], e);
                Object.freeze && Object.freeze(S);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(S, e);
        }
        if (N.call(r, "key")) {
          var D = O(e), _ = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), le = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Me[D + le]) {
            var fr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, D, fr, D), Me[D + le] = !0;
          }
        }
        return e === T ? ir(v) : or(v), v;
      }
    }
    function sr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var cr = ur, lr = sr;
    q.Fragment = T, q.jsx = cr, q.jsxs = lr;
  }()), q;
}
process.env.NODE_ENV === "production" ? fe.exports = vr() : fe.exports = gr();
var m = fe.exports, de, H = pr;
if (process.env.NODE_ENV === "production")
  de = H.createRoot, H.hydrateRoot;
else {
  var $e = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  de = function(f, i) {
    $e.usingClientEntryPoint = !0;
    try {
      return H.createRoot(f, i);
    } finally {
      $e.usingClientEntryPoint = !1;
    }
  };
}
function mr({ folderPath: f }) {
  const i = window.dc || globalThis.dc, E = {
    timer: null,
    start: (y, j) => {
      E.timer && clearInterval(E.timer);
      const b = y + "/mcp_commands.json", R = y + "/mcp_activity.json";
      return E.timer = setInterval(async () => {
        try {
          const u = i.app.vault.adapter;
          if (!await u.exists(b)) return;
          const x = await u.read(b);
          let s;
          try {
            s = JSON.parse(x);
          } catch {
            return;
          }
          if (s && s.executed === !1 && ["reload", "open_settings"].includes(s.action))
            if (s.executed = !0, s.result = "Executed by Safe Agent", s.executedAt = (/* @__PURE__ */ new Date()).toISOString(), await u.write(b, JSON.stringify(s, null, 2)), s.action === "reload") {
              const w = [{ timestamp: (/* @__PURE__ */ new Date()).toISOString(), action: "reload", status: "success", result: "Reloading via Safe Agent" }];
              try {
                await u.write(R, JSON.stringify(w, null, 2));
              } catch {
              }
              j();
            } else s.action === "open_settings" && i.app.setting.open();
        } catch (u) {
          console.error("[SafeAgent] Error", u);
        }
      }, 1e3), () => clearInterval(E.timer);
    }
  }, T = () => {
    const [y, j] = i.useState(null), [b, R] = i.useState(null), [u, x] = i.useState(0);
    if (i.useEffect(() => E.start(f, () => {
      var P;
      (P = i.app.workspace.activeLeaf) != null && P.rebuildView ? i.app.workspace.activeLeaf.rebuildView() : x((V) => V + 1);
    }), []), i.useEffect(() => {
      (async () => {
        try {
          console.log(`[SafeView] Loading modules... Timestamp: ${Date.now()}`);
          const P = await i.require(f + "/src/utils/domUtils.jsx"), { useTheme: V } = await i.require(f + "/src/hooks/useTheme.jsx"), { useFullTab: Z } = await i.require(f + "/src/hooks/useFullTab.jsx"), ee = (await i.require(f + "/src/components/MCPBridge.jsx")).MCPBridge, B = await i.require(f + "/src/TestRunner.jsx"), { MainComponent: re } = await i.require(f + "/src/components/MainComponent.jsx"), { ControlsMenu: te } = await i.require(f + "/src/components/ControlsMenu.jsx"), { debugManager: J } = await i.require(f + "/src/utils/debugManager.jsx"), { CSS: O } = await i.require(f + "/src/styles/theme.css.js");
          j({
            MainComponent: re,
            MCPBridge: ee,
            useTheme: V,
            debugManager: J,
            TestRunner: B,
            ControlsMenu: te,
            useFullTab: Z,
            domUtils: P,
            CSS: O
          }), R(null);
        } catch (P) {
          console.error("Critical Load Error:", P), R(P);
        }
      })();
    }, [u]), b)
      return /* @__PURE__ */ m.jsxs("div", { style: { padding: "40px", background: "#2d1b1b", color: "#ffaaaa", height: "100%", fontFamily: "monospace", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }, children: [
        /* @__PURE__ */ m.jsx("div", { style: { fontSize: "48px", marginBottom: "16px" }, children: "💥" }),
        /* @__PURE__ */ m.jsx("h2", { style: { marginTop: 0, color: "#ff8888" }, children: "Component Crashed" }),
        /* @__PURE__ */ m.jsxs("p", { style: { maxWidth: "500px", lineHeight: "1.5", marginBottom: "24px", opacity: 0.8 }, children: [
          "The internal component failed to load. The ",
          /* @__PURE__ */ m.jsx("strong", { children: "Agent Console" }),
          " is still active and can be used to reload once fixes are applied."
        ] }),
        /* @__PURE__ */ m.jsxs("div", { style: { background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "8px", overflow: "auto", width: "100%", maxWidth: "600px", textAlign: "left", border: "1px solid #522" }, children: [
          /* @__PURE__ */ m.jsx("div", { style: { fontWeight: "bold", marginBottom: "8px", color: "#ffcccc" }, children: b.message }),
          /* @__PURE__ */ m.jsx("div", { style: { fontSize: "11px", opacity: 0.6 }, children: b.stack })
        ] })
      ] });
    if (!y)
      return /* @__PURE__ */ m.jsxs("div", { style: { height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#666" }, children: [
        /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", gap: "10px", alignItems: "center" }, children: [
          /* @__PURE__ */ m.jsx("span", { style: { animation: "spin 1s linear infinite" }, children: "⏳" }),
          "Loading 66.6..."
        ] }),
        /* @__PURE__ */ m.jsx("style", { children: "@keyframes spin { 100% { transform: rotate(360deg); } }" })
      ] });
    const { MainComponent: s, MCPBridge: g, useTheme: w, debugManager: k, TestRunner: F, ControlsMenu: $, useFullTab: I, domUtils: C, CSS: p } = y;
    return /* @__PURE__ */ m.jsx(
      yr,
      {
        MainComponent: s,
        MCPBridge: g,
        useTheme: w,
        debugManager: k,
        TestRunner: F,
        ControlsMenu: $,
        useFullTab: I,
        domUtils: C,
        folderPath: f,
        themeCSS: p
      }
    );
  };
  return /* @__PURE__ */ m.jsx(T, {});
}
function yr({
  MainComponent: f,
  MCPBridge: i,
  useTheme: E,
  debugManager: T,
  TestRunner: y,
  ControlsMenu: j,
  useFullTab: b,
  domUtils: R,
  folderPath: u,
  themeCSS: x
}) {
  const s = window.dc || globalThis.dc, g = s.useRef(null), [w, k] = s.useState(0), [F, $] = s.useState(!0);
  E({ css: x, folderPath: u }), b({ isFullTab: F, containerRef: g, domUtils: R });
  const I = () => {
    var C;
    (C = s.app.workspace.activeLeaf) != null && C.rebuildView ? s.app.workspace.activeLeaf.rebuildView() : k((p) => p + 1);
    try {
      y.reloadTestWindow(u);
    } catch {
    }
  };
  return /* @__PURE__ */ m.jsxs("div", { ref: g, style: { width: "100%", height: "100%" }, id: "datacore-component-root", children: [
    /* @__PURE__ */ m.jsx(
      i,
      {
        folderPath: u,
        containerRef: g,
        onReload: I,
        onRunTests: () => y.spawnTestWindow(u),
        debugManager: T
      }
    ),
    /* @__PURE__ */ m.jsx(
      f,
      {
        folderPath: u,
        containerRef: g,
        isFullTab: F,
        onToggleFullTab: () => $(!F),
        onCodeReloadRequest: I,
        onRunTests: () => y.spawnTestWindow(u),
        ControlsMenu: j
      },
      w
    )
  ] });
}
async function Er(f, i) {
  const E = de(f), T = i.legacyDc || {
    useState: M.useState,
    useEffect: M.useEffect,
    useMemo: M.useMemo,
    useCallback: M.useCallback,
    useRef: M.useRef,
    useQuery: () => [],
    app: i.app || {}
  };
  return window.dc = T, E.render(/* @__PURE__ */ m.jsx(mr, { dc: T, folderPath: i.folderPath || "", platformAPI: i })), function() {
    E.unmount();
  };
}
export {
  Er as mount_app
};
