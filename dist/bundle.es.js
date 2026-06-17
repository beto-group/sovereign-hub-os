import D from "react";
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
  var l = D, p = Symbol.for("react.element"), j = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, x = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(g, u, f) {
    var c, h = {}, S = null, O = null;
    f !== void 0 && (S = "" + f), u.key !== void 0 && (S = "" + u.key), u.ref !== void 0 && (O = u.ref);
    for (c in u) b.call(u, c) && !R.hasOwnProperty(c) && (h[c] = u[c]);
    if (g && g.defaultProps) for (c in u = g.defaultProps, u) h[c] === void 0 && (h[c] = u[c]);
    return { $$typeof: p, type: g, key: S, ref: O, props: h, _owner: x.current };
  }
  return U.Fragment = j, U.jsx = T, U.jsxs = T, U;
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
    var l = D, p = Symbol.for("react.element"), j = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), g = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), M = Symbol.iterator, I = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[I];
      return typeof r == "function" ? r : null;
    }
    var C = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var V = !1, Q = !1, pe = !1, Z = !1, ee = !1, B;
    B = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === R || ee || e === x || e === f || e === c || Z || e === O || V || Q || pe || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === h || e.$$typeof === T || e.$$typeof === g || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === B || e.getModuleId !== void 0));
    }
    function te(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function J(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case j:
          return "Portal";
        case R:
          return "Profiler";
        case x:
          return "StrictMode";
        case f:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return J(r) + ".Consumer";
          case T:
            var t = e;
            return J(t._context) + ".Provider";
          case u:
            return te(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case S: {
            var o = e, s = o._payload, i = o._init;
            try {
              return P(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, Y = 0, ve, ge, me, ye, be, he, Ee;
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
            log: F({}, e, {
              value: ve
            }),
            info: F({}, e, {
              value: ge
            }),
            warn: F({}, e, {
              value: me
            }),
            error: F({}, e, {
              value: ye
            }),
            group: F({}, e, {
              value: be
            }),
            groupCollapsed: F({}, e, {
              value: he
            }),
            groupEnd: F({}, e, {
              value: Ee
            })
          });
        }
        Y < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = C.ReactCurrentDispatcher, ae;
    function K(e, r, t) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            ae = n && n[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var ie = !1, z;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Ne();
    }
    function _e(e, r) {
      if (!e || ie)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ie = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ne.current, ne.current = null, Ve();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (_) {
              n = _;
            }
            e.call(i.prototype);
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
`), E = n.stack.split(`
`), d = a.length - 1, v = E.length - 1; d >= 1 && v >= 0 && a[d] !== E[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (a[d] !== E[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || a[d] !== E[v]) {
                    var w = `
` + a[d].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, w), w;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ne.current = s, Ye(), Error.prepareStackTrace = o;
      }
      var $ = e ? e.displayName || e.name : "", A = $ ? K($) : "";
      return typeof e == "function" && z.set(e, A), A;
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
        case f:
          return K("Suspense");
        case c:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ue(e.render);
          case h:
            return G(e.type, r, t);
          case S: {
            var n = e, o = n._payload, s = n._init;
            try {
              return G(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, xe = {}, Te = C.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, o) {
      {
        var s = Function.call.bind(N);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              a = d;
            }
            a && !(a instanceof Error) && (X(o), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), X(null)), a instanceof Error && !(a.message in xe) && (xe[a.message] = !0, X(o), y("Failed %s type: %s", t, a.message), X(null));
          }
      }
    }
    var Je = Array.isArray;
    function oe(e) {
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
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function we(e) {
      if (ze(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Se(e);
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
          je || (je = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Oe || (Oe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, o, s, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
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
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, o) {
      {
        var s, i = {}, a = null, E = null;
        t !== void 0 && (we(t), a = "" + t), He(r) && (we(r.key), a = "" + r.key), Xe(r) && (E = r.ref, Qe(r, o));
        for (s in r)
          N.call(r, s) && !Ge.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (s in d)
            i[s] === void 0 && (i[s] = d[s]);
        }
        if (a || E) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, v), E && er(i, v);
        }
        return rr(e, a, E, o, n, Ce.current, i);
      }
    }
    var se = C.ReactCurrentOwner, ke = C.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function Pe() {
      {
        if (se.current) {
          var e = P(se.current.type);
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
        e && e._owner && e._owner !== se.current && (n = " It was passed a child from " + P(e._owner.type) + "."), L(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), L(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ce(n) && Ae(n, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = W(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              ce(i.value) && Ae(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var o = P(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            L(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var Me = {};
    function Ie(e, r, t, n, o, s) {
      {
        var i = re(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = nr();
          E ? a += E : a += Pe();
          var d;
          e === null ? d = "null" : oe(e) ? d = "array" : e !== void 0 && e.$$typeof === p ? (d = "<" + (P(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, a);
        }
        var v = tr(e, r, t, o, s);
        if (v == null)
          return v;
        if (i) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (oe(w)) {
                for (var $ = 0; $ < w.length; $++)
                  De(w[$], e);
                Object.freeze && Object.freeze(w);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(w, e);
        }
        if (N.call(r, "key")) {
          var A = P(e), _ = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), le = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Me[A + le]) {
            var fr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, A, fr, A), Me[A + le] = !0;
          }
        }
        return e === b ? or(v) : ir(v), v;
      }
    }
    function sr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var cr = ur, lr = sr;
    q.Fragment = b, q.jsx = cr, q.jsxs = lr;
  }()), q;
}
process.env.NODE_ENV === "production" ? fe.exports = vr() : fe.exports = gr();
var m = fe.exports, de, H = pr;
if (process.env.NODE_ENV === "production")
  de = H.createRoot, H.hydrateRoot;
else {
  var $e = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  de = function(l, p) {
    $e.usingClientEntryPoint = !0;
    try {
      return H.createRoot(l, p);
    } finally {
      $e.usingClientEntryPoint = !1;
    }
  };
}
function mr({ folderPath: l }) {
  const p = {
    timer: null,
    start: (b, x) => {
      p.timer && clearInterval(p.timer);
      const R = b + "/mcp_commands.json", T = b + "/mcp_activity.json";
      return p.timer = setInterval(async () => {
        try {
          const g = dc.app.vault.adapter;
          if (!await g.exists(R)) return;
          const u = await g.read(R);
          let f;
          try {
            f = JSON.parse(u);
          } catch {
            return;
          }
          if (f && f.executed === !1 && ["reload", "open_settings"].includes(f.action))
            if (f.executed = !0, f.result = "Executed by Safe Agent", f.executedAt = (/* @__PURE__ */ new Date()).toISOString(), await g.write(R, JSON.stringify(f, null, 2)), f.action === "reload") {
              const h = [{ timestamp: (/* @__PURE__ */ new Date()).toISOString(), action: "reload", status: "success", result: "Reloading via Safe Agent" }];
              try {
                await g.write(T, JSON.stringify(h, null, 2));
              } catch {
              }
              x();
            } else f.action === "open_settings" && dc.app.setting.open();
        } catch (g) {
          console.error("[SafeAgent] Error", g);
        }
      }, 1e3), () => clearInterval(p.timer);
    }
  }, j = () => {
    const [b, x] = dc.useState(null), [R, T] = dc.useState(null), [g, u] = dc.useState(0);
    if (dc.useEffect(() => p.start(l, () => {
      var k;
      (k = dc.app.workspace.activeLeaf) != null && k.rebuildView ? dc.app.workspace.activeLeaf.rebuildView() : u((V) => V + 1);
    }), []), dc.useEffect(() => {
      (async () => {
        try {
          console.log(`[SafeView] Loading modules... Timestamp: ${Date.now()}`);
          const k = await dc.require(l + "/src/utils/domUtils.jsx"), { useTheme: V } = await dc.require(l + "/src/hooks/useTheme.jsx"), { useFullTab: Q } = await dc.require(l + "/src/hooks/useFullTab.jsx"), Z = (await dc.require(l + "/src/components/MCPBridge.jsx")).MCPBridge, ee = await dc.require(l + "/src/TestRunner.jsx"), { MainComponent: B } = await dc.require(l + "/src/components/MainComponent.jsx"), { ControlsMenu: re } = await dc.require(l + "/src/components/ControlsMenu.jsx"), { debugManager: te } = await dc.require(l + "/src/utils/debugManager.jsx"), { CSS: J } = await dc.require(l + "/src/styles/theme.css.js");
          x({
            MainComponent: B,
            MCPBridge: Z,
            useTheme: V,
            debugManager: te,
            TestRunner: ee,
            ControlsMenu: re,
            useFullTab: Q,
            domUtils: k,
            CSS: J
          }), T(null);
        } catch (k) {
          console.error("Critical Load Error:", k), T(k);
        }
      })();
    }, [g]), R)
      return /* @__PURE__ */ m.jsxs("div", { style: { padding: "40px", background: "#2d1b1b", color: "#ffaaaa", height: "100%", fontFamily: "monospace", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }, children: [
        /* @__PURE__ */ m.jsx("div", { style: { fontSize: "48px", marginBottom: "16px" }, children: "💥" }),
        /* @__PURE__ */ m.jsx("h2", { style: { marginTop: 0, color: "#ff8888" }, children: "Component Crashed" }),
        /* @__PURE__ */ m.jsxs("p", { style: { maxWidth: "500px", lineHeight: "1.5", marginBottom: "24px", opacity: 0.8 }, children: [
          "The internal component failed to load. The ",
          /* @__PURE__ */ m.jsx("strong", { children: "Agent Console" }),
          " is still active and can be used to reload once fixes are applied."
        ] }),
        /* @__PURE__ */ m.jsxs("div", { style: { background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "8px", overflow: "auto", width: "100%", maxWidth: "600px", textAlign: "left", border: "1px solid #522" }, children: [
          /* @__PURE__ */ m.jsx("div", { style: { fontWeight: "bold", marginBottom: "8px", color: "#ffcccc" }, children: R.message }),
          /* @__PURE__ */ m.jsx("div", { style: { fontSize: "11px", opacity: 0.6 }, children: R.stack })
        ] })
      ] });
    if (!b)
      return /* @__PURE__ */ m.jsxs("div", { style: { height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#666" }, children: [
        /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", gap: "10px", alignItems: "center" }, children: [
          /* @__PURE__ */ m.jsx("span", { style: { animation: "spin 1s linear infinite" }, children: "⏳" }),
          "Loading 66.6..."
        ] }),
        /* @__PURE__ */ m.jsx("style", { children: "@keyframes spin { 100% { transform: rotate(360deg); } }" })
      ] });
    const { MainComponent: f, MCPBridge: c, useTheme: h, debugManager: S, TestRunner: O, ControlsMenu: M, useFullTab: I, domUtils: W, CSS: C } = b;
    return /* @__PURE__ */ m.jsx(
      yr,
      {
        MainComponent: f,
        MCPBridge: c,
        useTheme: h,
        debugManager: S,
        TestRunner: O,
        ControlsMenu: M,
        useFullTab: I,
        domUtils: W,
        folderPath: l,
        themeCSS: C
      }
    );
  };
  return /* @__PURE__ */ m.jsx(j, {});
}
function yr({
  MainComponent: l,
  MCPBridge: p,
  useTheme: j,
  debugManager: b,
  TestRunner: x,
  ControlsMenu: R,
  useFullTab: T,
  domUtils: g,
  folderPath: u,
  themeCSS: f
}) {
  const c = dc.useRef(null), [h, S] = dc.useState(0), [O, M] = dc.useState(!0);
  j({ css: f, folderPath: u }), T({ isFullTab: O, containerRef: c, domUtils: g });
  const I = () => {
    var W;
    (W = dc.app.workspace.activeLeaf) != null && W.rebuildView ? dc.app.workspace.activeLeaf.rebuildView() : S((C) => C + 1);
    try {
      x.reloadTestWindow(u);
    } catch {
    }
  };
  return /* @__PURE__ */ m.jsxs("div", { ref: c, style: { width: "100%", height: "100%" }, id: "datacore-component-root", children: [
    /* @__PURE__ */ m.jsx(
      p,
      {
        folderPath: u,
        containerRef: c,
        onReload: I,
        onRunTests: () => x.spawnTestWindow(u),
        debugManager: b
      }
    ),
    /* @__PURE__ */ m.jsx(
      l,
      {
        folderPath: u,
        containerRef: c,
        isFullTab: O,
        onToggleFullTab: () => M(!O),
        onCodeReloadRequest: I,
        onRunTests: () => x.spawnTestWindow(u),
        ControlsMenu: R
      },
      h
    )
  ] });
}
async function Er(l, p) {
  const j = de(l), b = p.legacyDc || {
    useState: D.useState,
    useEffect: D.useEffect,
    useMemo: D.useMemo,
    useCallback: D.useCallback,
    useRef: D.useRef,
    useQuery: () => [],
    app: p.app || {}
  };
  return j.render(/* @__PURE__ */ m.jsx(mr, { dc: b, folderPath: p.folderPath || "", platformAPI: p })), function() {
    j.unmount();
  };
}
export {
  Er as mount_app
};
