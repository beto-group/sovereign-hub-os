import E from "react";
import pr from "react-dom";
var de = { exports: {} }, J = {};
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
  if (We) return J;
  We = 1;
  var l = E, p = Symbol.for("react.element"), F = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, S = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(_, s, C) {
    var c, h = {}, x = null, g = null;
    C !== void 0 && (x = "" + C), s.key !== void 0 && (x = "" + s.key), s.ref !== void 0 && (g = s.ref);
    for (c in s) y.call(s, c) && !R.hasOwnProperty(c) && (h[c] = s[c]);
    if (_ && _.defaultProps) for (c in s = _.defaultProps, s) h[c] === void 0 && (h[c] = s[c]);
    return { $$typeof: p, type: _, key: x, ref: g, props: h, _owner: S.current };
  }
  return J.Fragment = F, J.jsx = O, J.jsxs = O, J;
}
var K = {};
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
    var l = E, p = Symbol.for("react.element"), F = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), _ = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), D = Symbol.iterator, b = "@@iterator";
    function M(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[b];
      return typeof r == "function" ? r : null;
    }
    var j = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var A = !1, $ = !1, N = !1, U = !1, re = !1, z;
    z = Symbol.for("react.module.reference");
    function te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === R || re || e === S || e === C || e === c || U || e === g || A || $ || N || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === h || e.$$typeof === O || e.$$typeof === _ || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === z || e.getModuleId !== void 0));
    }
    function ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function G(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case F:
          return "Portal";
        case R:
          return "Profiler";
        case S:
          return "StrictMode";
        case C:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return G(r) + ".Consumer";
          case O:
            var t = e;
            return G(t._context) + ".Provider";
          case s:
            return ne(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : I(e.type) || "Memo";
          case x: {
            var o = e, u = o._payload, i = o._init;
            try {
              return I(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, q = 0, ve, ge, me, ye, be, he, we;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ve() {
      {
        if (q === 0) {
          ve = console.log, ge = console.info, me = console.warn, ye = console.error, be = console.group, he = console.groupCollapsed, we = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
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
        q++;
      }
    }
    function Ye() {
      {
        if (q--, q === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: ve
            }),
            info: W({}, e, {
              value: ge
            }),
            warn: W({}, e, {
              value: me
            }),
            error: W({}, e, {
              value: ye
            }),
            group: W({}, e, {
              value: be
            }),
            groupCollapsed: W({}, e, {
              value: he
            }),
            groupEnd: W({}, e, {
              value: we
            })
          });
        }
        q < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = j.ReactCurrentDispatcher, ie;
    function X(e, r, t) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            ie = n && n[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var oe = !1, H;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Ne();
    }
    function Re(e, r) {
      if (!e || oe)
        return "";
      {
        var t = H.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      oe = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = ae.current, ae.current = null, Ve();
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
            } catch (T) {
              n = T;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (T) {
              n = T;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            n = T;
          }
          e();
        }
      } catch (T) {
        if (T && n && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), w = n.stack.split(`
`), d = a.length - 1, v = w.length - 1; d >= 1 && v >= 0 && a[d] !== w[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (a[d] !== w[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || a[d] !== w[v]) {
                    var P = `
` + a[d].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, P), P;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ae.current = u, Ye(), Error.prepareStackTrace = o;
      }
      var Y = e ? e.displayName || e.name : "", L = Y ? X(Y) : "";
      return typeof e == "function" && H.set(e, L), L;
    }
    function Ue(e, r, t) {
      return Re(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, qe(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case C:
          return X("Suspense");
        case c:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Ue(e.render);
          case h:
            return Q(e.type, r, t);
          case x: {
            var n = e, o = n._payload, u = n._init;
            try {
              return Q(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, _e = {}, xe = j.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, t = Q(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, o) {
      {
        var u = Function.call.bind(B);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var w = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              a = d;
            }
            a && !(a instanceof Error) && (Z(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), Z(null)), a instanceof Error && !(a.message in _e) && (_e[a.message] = !0, Z(o), f("Failed %s type: %s", t, a.message), Z(null));
          }
      }
    }
    var Je = Array.isArray;
    function se(e) {
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
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Se(e) {
      if (ze(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Te(e);
    }
    var Ce = j.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Oe;
    function Xe(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (B.call(e, "key")) {
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
          je || (je = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Oe || (Oe = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
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
        var u, i = {}, a = null, w = null;
        t !== void 0 && (Se(t), a = "" + t), He(r) && (Se(r.key), a = "" + r.key), Xe(r) && (w = r.ref, Qe(r, o));
        for (u in r)
          B.call(r, u) && !Ge.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (u in d)
            i[u] === void 0 && (i[u] = d[u]);
        }
        if (a || w) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, v), w && er(i, v);
        }
        return rr(e, a, w, o, n, Ce.current, i);
      }
    }
    var ue = j.ReactCurrentOwner, ke = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = Q(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function Pe() {
      {
        if (ue.current) {
          var e = I(ue.current.type);
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
        e && e._owner && e._owner !== ue.current && (n = " It was passed a child from " + I(e._owner.type) + "."), V(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), V(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            le(n) && Ae(n, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = M(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              le(i.value) && Ae(i.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = I(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ce) {
          ce = !0;
          var o = I(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            V(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), V(null);
            break;
          }
        }
        e.ref !== null && (V(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    var Me = {};
    function Ie(e, r, t, n, o, u) {
      {
        var i = te(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = nr();
          w ? a += w : a += Pe();
          var d;
          e === null ? d = "null" : se(e) ? d = "array" : e !== void 0 && e.$$typeof === p ? (d = "<" + (I(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, a);
        }
        var v = tr(e, r, t, o, u);
        if (v == null)
          return v;
        if (i) {
          var P = r.children;
          if (P !== void 0)
            if (n)
              if (se(P)) {
                for (var Y = 0; Y < P.length; Y++)
                  De(P[Y], e);
                Object.freeze && Object.freeze(P);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(P, e);
        }
        if (B.call(r, "key")) {
          var L = I(e), T = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), fe = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Me[L + fe]) {
            var fr = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fe, L, fr, L), Me[L + fe] = !0;
          }
        }
        return e === y ? or(v) : ir(v), v;
      }
    }
    function sr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var cr = ur, lr = sr;
    K.Fragment = y, K.jsx = cr, K.jsxs = lr;
  }()), K;
}
process.env.NODE_ENV === "production" ? de.exports = vr() : de.exports = gr();
var m = de.exports, pe, ee = pr;
if (process.env.NODE_ENV === "production")
  pe = ee.createRoot, ee.hydrateRoot;
else {
  var $e = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  pe = function(l, p) {
    $e.usingClientEntryPoint = !0;
    try {
      return ee.createRoot(l, p);
    } finally {
      $e.usingClientEntryPoint = !1;
    }
  };
}
function mr({ folderPath: l }) {
  const p = {
    timer: null,
    start: (y, S) => {
      p.timer && clearInterval(p.timer);
      const R = y + "/mcp_commands.json", O = y + "/mcp_activity.json";
      return p.timer = setInterval(async () => {
        var _, s, C, c, h, x;
        try {
          const g = (C = (s = (_ = window.dc) == null ? void 0 : _.app) == null ? void 0 : s.vault) == null ? void 0 : C.adapter;
          if (!g || !await g.exists(R)) return;
          const D = await g.read(R);
          let b;
          try {
            b = JSON.parse(D);
          } catch {
            return;
          }
          if (b && b.executed === !1 && ["reload", "open_settings"].includes(b.action))
            if (b.executed = !0, b.result = "Executed by Safe Agent", b.executedAt = (/* @__PURE__ */ new Date()).toISOString(), await g.write(R, JSON.stringify(b, null, 2)), b.action === "reload") {
              const j = [{ timestamp: (/* @__PURE__ */ new Date()).toISOString(), action: "reload", status: "success", result: "Reloading via Safe Agent" }];
              try {
                await g.write(O, JSON.stringify(j, null, 2));
              } catch {
              }
              S();
            } else b.action === "open_settings" && ((x = (h = (c = window.dc) == null ? void 0 : c.app) == null ? void 0 : h.setting) == null || x.open());
        } catch (g) {
          console.error("[SafeAgent] Error", g);
        }
      }, 1e3), () => clearInterval(p.timer);
    }
  }, F = () => {
    const [y, S] = E.useState(null), [R, O] = E.useState(null), [_, s] = E.useState(0);
    if (E.useEffect(() => p.start(l, () => {
      var k, A, $, N;
      (N = ($ = (A = (k = window.dc) == null ? void 0 : k.app) == null ? void 0 : A.workspace) == null ? void 0 : $.activeLeaf) != null && N.rebuildView ? window.dc.app.workspace.activeLeaf.rebuildView() : s((U) => U + 1);
    }), []), E.useEffect(() => {
      (async () => {
        try {
          console.log(`[SafeView] Loading modules... Timestamp: ${Date.now()}`);
          const k = await window.dc.require(l + "/src/utils/domUtils.jsx"), { useTheme: A } = await window.dc.require(l + "/src/hooks/useTheme.jsx"), { useFullTab: $ } = await window.dc.require(l + "/src/hooks/useFullTab.jsx"), U = (await window.dc.require(l + "/src/components/MCPBridge.jsx")).MCPBridge, re = await window.dc.require(l + "/src/TestRunner.jsx"), { MainComponent: z } = await window.dc.require(l + "/src/components/MainComponent.jsx"), { ControlsMenu: te } = await window.dc.require(l + "/src/components/ControlsMenu.jsx"), { debugManager: ne } = await window.dc.require(l + "/src/utils/debugManager.jsx"), { CSS: G } = await window.dc.require(l + "/src/styles/theme.css.js");
          S({
            MainComponent: z,
            MCPBridge: U,
            useTheme: A,
            debugManager: ne,
            TestRunner: re,
            ControlsMenu: te,
            useFullTab: $,
            domUtils: k,
            CSS: G
          }), O(null);
        } catch (k) {
          console.error("Critical Load Error:", k), O(k);
        }
      })();
    }, [_]), R)
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
    if (!y)
      return /* @__PURE__ */ m.jsxs("div", { style: { height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#666" }, children: [
        /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", gap: "10px", alignItems: "center" }, children: [
          /* @__PURE__ */ m.jsx("span", { style: { animation: "spin 1s linear infinite" }, children: "⏳" }),
          "Loading 66.6..."
        ] }),
        /* @__PURE__ */ m.jsx("style", { children: "@keyframes spin { 100% { transform: rotate(360deg); } }" })
      ] });
    const { MainComponent: C, MCPBridge: c, useTheme: h, debugManager: x, TestRunner: g, ControlsMenu: D, useFullTab: b, domUtils: M, CSS: j } = y;
    return /* @__PURE__ */ m.jsx(
      yr,
      {
        MainComponent: C,
        MCPBridge: c,
        useTheme: h,
        debugManager: x,
        TestRunner: g,
        ControlsMenu: D,
        useFullTab: b,
        domUtils: M,
        folderPath: l,
        themeCSS: j
      }
    );
  };
  return /* @__PURE__ */ m.jsx(F, {});
}
function yr({
  MainComponent: l,
  MCPBridge: p,
  useTheme: F,
  debugManager: y,
  TestRunner: S,
  ControlsMenu: R,
  useFullTab: O,
  domUtils: _,
  folderPath: s,
  themeCSS: C
}) {
  const c = E.useRef(null), [h, x] = E.useState(0), [g, D] = E.useState(!0);
  F({ css: C, folderPath: s }), O({ isFullTab: g, containerRef: c, domUtils: _ });
  const b = () => {
    var M, j, f, k;
    (k = (f = (j = (M = window.dc) == null ? void 0 : M.app) == null ? void 0 : j.workspace) == null ? void 0 : f.activeLeaf) != null && k.rebuildView ? window.dc.app.workspace.activeLeaf.rebuildView() : x((A) => A + 1);
    try {
      S.reloadTestWindow(s);
    } catch {
    }
  };
  return /* @__PURE__ */ m.jsxs("div", { ref: c, style: { width: "100%", height: "100%" }, id: "datacore-component-root", children: [
    /* @__PURE__ */ m.jsx(
      p,
      {
        folderPath: s,
        containerRef: c,
        onReload: b,
        onRunTests: () => S.spawnTestWindow(s),
        debugManager: y
      }
    ),
    /* @__PURE__ */ m.jsx(
      l,
      {
        folderPath: s,
        containerRef: c,
        isFullTab: g,
        onToggleFullTab: () => D(!g),
        onCodeReloadRequest: b,
        onRunTests: () => S.spawnTestWindow(s),
        ControlsMenu: R
      },
      h
    )
  ] });
}
async function wr(l, p) {
  const F = pe(l), y = p.legacyDc || {
    useState: E.useState,
    useEffect: E.useEffect,
    useMemo: E.useMemo,
    useCallback: E.useCallback,
    useRef: E.useRef,
    useQuery: () => [],
    app: p.app || {}
  };
  return window.dc = y, F.render(/* @__PURE__ */ m.jsx(mr, { dc: y, folderPath: p.folderPath || "", platformAPI: p })), function() {
    F.unmount();
  };
}
export {
  wr as mount_app
};
