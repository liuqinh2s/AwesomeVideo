(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s);
  }
})();
function Y0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var $ = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ci = Symbol.for("react.element"),
  X0 = Symbol.for("react.portal"),
  q0 = Symbol.for("react.fragment"),
  Q0 = Symbol.for("react.strict_mode"),
  Z0 = Symbol.for("react.profiler"),
  J0 = Symbol.for("react.provider"),
  ep = Symbol.for("react.context"),
  tp = Symbol.for("react.forward_ref"),
  np = Symbol.for("react.suspense"),
  rp = Symbol.for("react.memo"),
  ip = Symbol.for("react.lazy"),
  vu = Symbol.iterator;
function sp(n) {
  return n === null || typeof n != "object"
    ? null
    : ((n = (vu && n[vu]) || n["@@iterator"]),
      typeof n == "function" ? n : null);
}
var wd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kd = Object.assign,
  _d = {};
function pr(n, e, t) {
  (this.props = n),
    (this.context = e),
    (this.refs = _d),
    (this.updater = t || wd);
}
pr.prototype.isReactComponent = {};
pr.prototype.setState = function (n, e) {
  if (typeof n != "object" && typeof n != "function" && n != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, n, e, "setState");
};
pr.prototype.forceUpdate = function (n) {
  this.updater.enqueueForceUpdate(this, n, "forceUpdate");
};
function Pd() {}
Pd.prototype = pr.prototype;
function ol(n, e, t) {
  (this.props = n),
    (this.context = e),
    (this.refs = _d),
    (this.updater = t || wd);
}
var al = (ol.prototype = new Pd());
al.constructor = ol;
kd(al, pr.prototype);
al.isPureReactComponent = !0;
var xu = Array.isArray,
  Od = Object.prototype.hasOwnProperty,
  ll = { current: null },
  Bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function bd(n, e, t) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      Od.call(e, r) && !Bd.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = t;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (n && n.defaultProps)
    for (r in ((a = n.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ci,
    type: n,
    key: s,
    ref: o,
    props: i,
    _owner: ll.current,
  };
}
function op(n, e) {
  return {
    $$typeof: ci,
    type: n.type,
    key: e,
    ref: n.ref,
    props: n.props,
    _owner: n._owner,
  };
}
function ul(n) {
  return typeof n == "object" && n !== null && n.$$typeof === ci;
}
function ap(n) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    n.replace(/[=:]/g, function (t) {
      return e[t];
    })
  );
}
var Tu = /\/+/g;
function to(n, e) {
  return typeof n == "object" && n !== null && n.key != null
    ? ap("" + n.key)
    : e.toString(36);
}
function Ki(n, e, t, r, i) {
  var s = typeof n;
  (s === "undefined" || s === "boolean") && (n = null);
  var o = !1;
  if (n === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case ci:
          case X0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = n),
      (i = i(o)),
      (n = r === "" ? "." + to(o, 0) : r),
      xu(i)
        ? ((t = ""),
          n != null && (t = n.replace(Tu, "$&/") + "/"),
          Ki(i, e, t, "", function (u) {
            return u;
          }))
        : i != null &&
          (ul(i) &&
            (i = op(
              i,
              t +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Tu, "$&/") + "/") +
                n
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), xu(n)))
    for (var a = 0; a < n.length; a++) {
      s = n[a];
      var l = r + to(s, a);
      o += Ki(s, e, t, l, i);
    }
  else if (((l = sp(n)), typeof l == "function"))
    for (n = l.call(n), a = 0; !(s = n.next()).done; )
      (s = s.value), (l = r + to(s, a++)), (o += Ki(s, e, t, l, i));
  else if (s === "object")
    throw (
      ((e = String(n)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function gi(n, e, t) {
  if (n == null) return n;
  var r = [],
    i = 0;
  return (
    Ki(n, r, "", "", function (s) {
      return e.call(t, s, i++);
    }),
    r
  );
}
function lp(n) {
  if (n._status === -1) {
    var e = n._result;
    (e = e()),
      e.then(
        function (t) {
          (n._status === 0 || n._status === -1) &&
            ((n._status = 1), (n._result = t));
        },
        function (t) {
          (n._status === 0 || n._status === -1) &&
            ((n._status = 2), (n._result = t));
        }
      ),
      n._status === -1 && ((n._status = 0), (n._result = e));
  }
  if (n._status === 1) return n._result.default;
  throw n._result;
}
var Ue = { current: null },
  Vi = { transition: null },
  up = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: Vi,
    ReactCurrentOwner: ll,
  };
j.Children = {
  map: gi,
  forEach: function (n, e, t) {
    gi(
      n,
      function () {
        e.apply(this, arguments);
      },
      t
    );
  },
  count: function (n) {
    var e = 0;
    return (
      gi(n, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (n) {
    return (
      gi(n, function (e) {
        return e;
      }) || []
    );
  },
  only: function (n) {
    if (!ul(n))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return n;
  },
};
j.Component = pr;
j.Fragment = q0;
j.Profiler = Z0;
j.PureComponent = ol;
j.StrictMode = Q0;
j.Suspense = np;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = up;
j.cloneElement = function (n, e, t) {
  if (n == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        n +
        "."
    );
  var r = kd({}, n.props),
    i = n.key,
    s = n.ref,
    o = n._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = ll.current)),
      e.key !== void 0 && (i = "" + e.key),
      n.type && n.type.defaultProps)
    )
      var a = n.type.defaultProps;
    for (l in e)
      Od.call(e, l) &&
        !Bd.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = t;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ci, type: n.type, key: i, ref: s, props: r, _owner: o };
};
j.createContext = function (n) {
  return (
    (n = {
      $$typeof: ep,
      _currentValue: n,
      _currentValue2: n,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (n.Provider = { $$typeof: J0, _context: n }),
    (n.Consumer = n)
  );
};
j.createElement = bd;
j.createFactory = function (n) {
  var e = bd.bind(null, n);
  return (e.type = n), e;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (n) {
  return { $$typeof: tp, render: n };
};
j.isValidElement = ul;
j.lazy = function (n) {
  return { $$typeof: ip, _payload: { _status: -1, _result: n }, _init: lp };
};
j.memo = function (n, e) {
  return { $$typeof: rp, type: n, compare: e === void 0 ? null : e };
};
j.startTransition = function (n) {
  var e = Vi.transition;
  Vi.transition = {};
  try {
    n();
  } finally {
    Vi.transition = e;
  }
};
j.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
j.useCallback = function (n, e) {
  return Ue.current.useCallback(n, e);
};
j.useContext = function (n) {
  return Ue.current.useContext(n);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (n) {
  return Ue.current.useDeferredValue(n);
};
j.useEffect = function (n, e) {
  return Ue.current.useEffect(n, e);
};
j.useId = function () {
  return Ue.current.useId();
};
j.useImperativeHandle = function (n, e, t) {
  return Ue.current.useImperativeHandle(n, e, t);
};
j.useInsertionEffect = function (n, e) {
  return Ue.current.useInsertionEffect(n, e);
};
j.useLayoutEffect = function (n, e) {
  return Ue.current.useLayoutEffect(n, e);
};
j.useMemo = function (n, e) {
  return Ue.current.useMemo(n, e);
};
j.useReducer = function (n, e, t) {
  return Ue.current.useReducer(n, e, t);
};
j.useRef = function (n) {
  return Ue.current.useRef(n);
};
j.useState = function (n) {
  return Ue.current.useState(n);
};
j.useSyncExternalStore = function (n, e, t) {
  return Ue.current.useSyncExternalStore(n, e, t);
};
j.useTransition = function () {
  return Ue.current.useTransition();
};
j.version = "18.2.0";
(function (n) {
  n.exports = j;
})($);
const B = Y0($.exports);
var Jo = {},
  Nd = { exports: {} },
  tt = {},
  Md = { exports: {} },
  Ud = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (n) {
  function e(w, P) {
    var N = w.length;
    w.push(P);
    e: for (; 0 < N; ) {
      var W = (N - 1) >>> 1,
        H = w[W];
      if (0 < i(H, P)) (w[W] = P), (w[N] = H), (N = W);
      else break e;
    }
  }
  function t(w) {
    return w.length === 0 ? null : w[0];
  }
  function r(w) {
    if (w.length === 0) return null;
    var P = w[0],
      N = w.pop();
    if (N !== P) {
      w[0] = N;
      e: for (var W = 0, H = w.length, ae = H >>> 1; W < ae; ) {
        var me = 2 * (W + 1) - 1,
          be = w[me],
          ye = me + 1,
          rt = w[ye];
        if (0 > i(be, N))
          ye < H && 0 > i(rt, be)
            ? ((w[W] = rt), (w[ye] = N), (W = ye))
            : ((w[W] = be), (w[me] = N), (W = me));
        else if (ye < H && 0 > i(rt, N)) (w[W] = rt), (w[ye] = N), (W = ye);
        else break e;
      }
    }
    return P;
  }
  function i(w, P) {
    var N = w.sortIndex - P.sortIndex;
    return N !== 0 ? N : w.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    n.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    n.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    p = !1,
    g = !1,
    v = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    E = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(w) {
    for (var P = t(u); P !== null; ) {
      if (P.callback === null) r(u);
      else if (P.startTime <= w)
        r(u), (P.sortIndex = P.expirationTime), e(l, P);
      else break;
      P = t(u);
    }
  }
  function T(w) {
    if (((g = !1), x(w), !p))
      if (t(l) !== null) (p = !0), te(S);
      else {
        var P = t(u);
        P !== null && J(T, P.startTime - w);
      }
  }
  function S(w, P) {
    (p = !1), g && ((g = !1), m(I), (I = -1)), (h = !0);
    var N = f;
    try {
      for (
        x(P), d = t(l);
        d !== null && (!(d.expirationTime > P) || (w && !U()));

      ) {
        var W = d.callback;
        if (typeof W == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var H = W(d.expirationTime <= P);
          (P = n.unstable_now()),
            typeof H == "function" ? (d.callback = H) : d === t(l) && r(l),
            x(P);
        } else r(l);
        d = t(l);
      }
      if (d !== null) var ae = !0;
      else {
        var me = t(u);
        me !== null && J(T, me.startTime - P), (ae = !1);
      }
      return ae;
    } finally {
      (d = null), (f = N), (h = !1);
    }
  }
  var R = !1,
    L = null,
    I = -1,
    _ = 5,
    D = -1;
  function U() {
    return !(n.unstable_now() - D < _);
  }
  function b() {
    if (L !== null) {
      var w = n.unstable_now();
      D = w;
      var P = !0;
      try {
        P = L(!0, w);
      } finally {
        P ? Y() : ((R = !1), (L = null));
      }
    } else R = !1;
  }
  var Y;
  if (typeof E == "function")
    Y = function () {
      E(b);
    };
  else if (typeof MessageChannel < "u") {
    var Ae = new MessageChannel(),
      ne = Ae.port2;
    (Ae.port1.onmessage = b),
      (Y = function () {
        ne.postMessage(null);
      });
  } else
    Y = function () {
      v(b, 0);
    };
  function te(w) {
    (L = w), R || ((R = !0), Y());
  }
  function J(w, P) {
    I = v(function () {
      w(n.unstable_now());
    }, P);
  }
  (n.unstable_IdlePriority = 5),
    (n.unstable_ImmediatePriority = 1),
    (n.unstable_LowPriority = 4),
    (n.unstable_NormalPriority = 3),
    (n.unstable_Profiling = null),
    (n.unstable_UserBlockingPriority = 2),
    (n.unstable_cancelCallback = function (w) {
      w.callback = null;
    }),
    (n.unstable_continueExecution = function () {
      p || h || ((p = !0), te(S));
    }),
    (n.unstable_forceFrameRate = function (w) {
      0 > w || 125 < w
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < w ? Math.floor(1e3 / w) : 5);
    }),
    (n.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (n.unstable_getFirstCallbackNode = function () {
      return t(l);
    }),
    (n.unstable_next = function (w) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = f;
      }
      var N = f;
      f = P;
      try {
        return w();
      } finally {
        f = N;
      }
    }),
    (n.unstable_pauseExecution = function () {}),
    (n.unstable_requestPaint = function () {}),
    (n.unstable_runWithPriority = function (w, P) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var N = f;
      f = w;
      try {
        return P();
      } finally {
        f = N;
      }
    }),
    (n.unstable_scheduleCallback = function (w, P, N) {
      var W = n.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? W + N : W))
          : (N = W),
        w)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = N + H),
        (w = {
          id: c++,
          callback: P,
          priorityLevel: w,
          startTime: N,
          expirationTime: H,
          sortIndex: -1,
        }),
        N > W
          ? ((w.sortIndex = N),
            e(u, w),
            t(l) === null &&
              w === t(u) &&
              (g ? (m(I), (I = -1)) : (g = !0), J(T, N - W)))
          : ((w.sortIndex = H), e(l, w), p || h || ((p = !0), te(S))),
        w
      );
    }),
    (n.unstable_shouldYield = U),
    (n.unstable_wrapCallback = function (w) {
      var P = f;
      return function () {
        var N = f;
        f = P;
        try {
          return w.apply(this, arguments);
        } finally {
          f = N;
        }
      };
    });
})(Ud);
(function (n) {
  n.exports = Ud;
})(Md);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $d = $.exports,
  et = Md.exports;
function O(n) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, t = 1;
    t < arguments.length;
    t++
  )
    e += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    n +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Gd = new Set(),
  Kr = {};
function Pn(n, e) {
  ar(n, e), ar(n + "Capture", e);
}
function ar(n, e) {
  for (Kr[n] = e, n = 0; n < e.length; n++) Gd.add(e[n]);
}
var $t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ea = Object.prototype.hasOwnProperty,
  cp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Su = {},
  Au = {};
function dp(n) {
  return ea.call(Au, n)
    ? !0
    : ea.call(Su, n)
    ? !1
    : cp.test(n)
    ? (Au[n] = !0)
    : ((Su[n] = !0), !1);
}
function fp(n, e, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((n = n.toLowerCase().slice(0, 5)), n !== "data-" && n !== "aria-");
    default:
      return !1;
  }
}
function hp(n, e, t, r) {
  if (e === null || typeof e > "u" || fp(n, e, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function $e(n, e, t, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = t),
    (this.propertyName = n),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (n) {
    we[n] = new $e(n, 0, !1, n, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (n) {
  var e = n[0];
  we[e] = new $e(e, 1, !1, n[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (n) {
  we[n] = new $e(n, 2, !1, n.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (n) {
  we[n] = new $e(n, 2, !1, n, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (n) {
    we[n] = new $e(n, 3, !1, n.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (n) {
  we[n] = new $e(n, 3, !0, n, null, !1, !1);
});
["capture", "download"].forEach(function (n) {
  we[n] = new $e(n, 4, !1, n, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (n) {
  we[n] = new $e(n, 6, !1, n, null, !1, !1);
});
["rowSpan", "start"].forEach(function (n) {
  we[n] = new $e(n, 5, !1, n.toLowerCase(), null, !1, !1);
});
var cl = /[\-:]([a-z])/g;
function dl(n) {
  return n[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (n) {
    var e = n.replace(cl, dl);
    we[e] = new $e(e, 1, !1, n, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (n) {
    var e = n.replace(cl, dl);
    we[e] = new $e(e, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
  var e = n.replace(cl, dl);
  we[e] = new $e(e, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (n) {
  we[n] = new $e(n, 1, !1, n.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (n) {
  we[n] = new $e(n, 1, !1, n.toLowerCase(), null, !0, !0);
});
function fl(n, e, t, r) {
  var i = we.hasOwnProperty(e) ? we[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (hp(e, t, i, r) && (t = null),
    r || i === null
      ? dp(e) && (t === null ? n.removeAttribute(e) : n.setAttribute(e, "" + t))
      : i.mustUseProperty
      ? (n[i.propertyName] = t === null ? (i.type === 3 ? !1 : "") : t)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        t === null
          ? n.removeAttribute(e)
          : ((i = i.type),
            (t = i === 3 || (i === 4 && t === !0) ? "" : "" + t),
            r ? n.setAttributeNS(r, e, t) : n.setAttribute(e, t))));
}
var Ht = $d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mi = Symbol.for("react.element"),
  Gn = Symbol.for("react.portal"),
  Kn = Symbol.for("react.fragment"),
  hl = Symbol.for("react.strict_mode"),
  ta = Symbol.for("react.profiler"),
  Kd = Symbol.for("react.provider"),
  Vd = Symbol.for("react.context"),
  pl = Symbol.for("react.forward_ref"),
  na = Symbol.for("react.suspense"),
  ra = Symbol.for("react.suspense_list"),
  gl = Symbol.for("react.memo"),
  jt = Symbol.for("react.lazy"),
  Hd = Symbol.for("react.offscreen"),
  Lu = Symbol.iterator;
function Er(n) {
  return n === null || typeof n != "object"
    ? null
    : ((n = (Lu && n[Lu]) || n["@@iterator"]),
      typeof n == "function" ? n : null);
}
var he = Object.assign,
  no;
function Rr(n) {
  if (no === void 0)
    try {
      throw Error();
    } catch (t) {
      var e = t.stack.trim().match(/\n( *(at )?)/);
      no = (e && e[1]) || "";
    }
  return (
    `
` +
    no +
    n
  );
}
var ro = !1;
function io(n, e) {
  if (!n || ro) return "";
  ro = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(n, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        n.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      n();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  n.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", n.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (ro = !1), (Error.prepareStackTrace = t);
  }
  return (n = n ? n.displayName || n.name : "") ? Rr(n) : "";
}
function pp(n) {
  switch (n.tag) {
    case 5:
      return Rr(n.type);
    case 16:
      return Rr("Lazy");
    case 13:
      return Rr("Suspense");
    case 19:
      return Rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (n = io(n.type, !1)), n;
    case 11:
      return (n = io(n.type.render, !1)), n;
    case 1:
      return (n = io(n.type, !0)), n;
    default:
      return "";
  }
}
function ia(n) {
  if (n == null) return null;
  if (typeof n == "function") return n.displayName || n.name || null;
  if (typeof n == "string") return n;
  switch (n) {
    case Kn:
      return "Fragment";
    case Gn:
      return "Portal";
    case ta:
      return "Profiler";
    case hl:
      return "StrictMode";
    case na:
      return "Suspense";
    case ra:
      return "SuspenseList";
  }
  if (typeof n == "object")
    switch (n.$$typeof) {
      case Vd:
        return (n.displayName || "Context") + ".Consumer";
      case Kd:
        return (n._context.displayName || "Context") + ".Provider";
      case pl:
        var e = n.render;
        return (
          (n = n.displayName),
          n ||
            ((n = e.displayName || e.name || ""),
            (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
          n
        );
      case gl:
        return (
          (e = n.displayName || null), e !== null ? e : ia(n.type) || "Memo"
        );
      case jt:
        (e = n._payload), (n = n._init);
        try {
          return ia(n(e));
        } catch {}
    }
  return null;
}
function gp(n) {
  var e = n.type;
  switch (n.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (n = e.render),
        (n = n.displayName || n.name || ""),
        e.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ia(e);
    case 8:
      return e === hl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function dn(n) {
  switch (typeof n) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return n;
    case "object":
      return n;
    default:
      return "";
  }
}
function Wd(n) {
  var e = n.type;
  return (
    (n = n.nodeName) &&
    n.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function mp(n) {
  var e = Wd(n) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(n.constructor.prototype, e),
    r = "" + n[e];
  if (
    !n.hasOwnProperty(e) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var i = t.get,
      s = t.set;
    return (
      Object.defineProperty(n, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(n, e, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (n._valueTracker = null), delete n[e];
        },
      }
    );
  }
}
function yi(n) {
  n._valueTracker || (n._valueTracker = mp(n));
}
function zd(n) {
  if (!n) return !1;
  var e = n._valueTracker;
  if (!e) return !0;
  var t = e.getValue(),
    r = "";
  return (
    n && (r = Wd(n) ? (n.checked ? "true" : "false") : n.value),
    (n = r),
    n !== t ? (e.setValue(n), !0) : !1
  );
}
function ns(n) {
  if (((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u"))
    return null;
  try {
    return n.activeElement || n.body;
  } catch {
    return n.body;
  }
}
function sa(n, e) {
  var t = e.checked;
  return he({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t != null ? t : n._wrapperState.initialChecked,
  });
}
function Cu(n, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (t = dn(e.value != null ? e.value : t)),
    (n._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function jd(n, e) {
  (e = e.checked), e != null && fl(n, "checked", e, !1);
}
function oa(n, e) {
  jd(n, e);
  var t = dn(e.value),
    r = e.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && n.value === "") || n.value != t) && (n.value = "" + t)
      : n.value !== "" + t && (n.value = "" + t);
  else if (r === "submit" || r === "reset") {
    n.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? aa(n, e.type, t)
    : e.hasOwnProperty("defaultValue") && aa(n, e.type, dn(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (n.defaultChecked = !!e.defaultChecked);
}
function Du(n, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + n._wrapperState.initialValue),
      t || e === n.value || (n.value = e),
      (n.defaultValue = e);
  }
  (t = n.name),
    t !== "" && (n.name = ""),
    (n.defaultChecked = !!n._wrapperState.initialChecked),
    t !== "" && (n.name = t);
}
function aa(n, e, t) {
  (e !== "number" || ns(n.ownerDocument) !== n) &&
    (t == null
      ? (n.defaultValue = "" + n._wrapperState.initialValue)
      : n.defaultValue !== "" + t && (n.defaultValue = "" + t));
}
var Ir = Array.isArray;
function er(n, e, t, r) {
  if (((n = n.options), e)) {
    e = {};
    for (var i = 0; i < t.length; i++) e["$" + t[i]] = !0;
    for (t = 0; t < n.length; t++)
      (i = e.hasOwnProperty("$" + n[t].value)),
        n[t].selected !== i && (n[t].selected = i),
        i && r && (n[t].defaultSelected = !0);
  } else {
    for (t = "" + dn(t), e = null, i = 0; i < n.length; i++) {
      if (n[i].value === t) {
        (n[i].selected = !0), r && (n[i].defaultSelected = !0);
        return;
      }
      e !== null || n[i].disabled || (e = n[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function la(n, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(O(91));
  return he({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + n._wrapperState.initialValue,
  });
}
function Ru(n, e) {
  var t = e.value;
  if (t == null) {
    if (((t = e.children), (e = e.defaultValue), t != null)) {
      if (e != null) throw Error(O(92));
      if (Ir(t)) {
        if (1 < t.length) throw Error(O(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), (t = e);
  }
  n._wrapperState = { initialValue: dn(t) };
}
function Yd(n, e) {
  var t = dn(e.value),
    r = dn(e.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== n.value && (n.value = t),
    e.defaultValue == null && n.defaultValue !== t && (n.defaultValue = t)),
    r != null && (n.defaultValue = "" + r);
}
function Iu(n) {
  var e = n.textContent;
  e === n._wrapperState.initialValue && e !== "" && e !== null && (n.value = e);
}
function Xd(n) {
  switch (n) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ua(n, e) {
  return n == null || n === "http://www.w3.org/1999/xhtml"
    ? Xd(e)
    : n === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : n;
}
var Ei,
  qd = (function (n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, t, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return n(e, t, r, i);
          });
        }
      : n;
  })(function (n, e) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = e;
    else {
      for (
        Ei = Ei || document.createElement("div"),
          Ei.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Ei.firstChild;
        n.firstChild;

      )
        n.removeChild(n.firstChild);
      for (; e.firstChild; ) n.appendChild(e.firstChild);
    }
  });
function Vr(n, e) {
  if (e) {
    var t = n.firstChild;
    if (t && t === n.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  n.textContent = e;
}
var kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  yp = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function (n) {
  yp.forEach(function (e) {
    (e = e + n.charAt(0).toUpperCase() + n.substring(1)), (kr[e] = kr[n]);
  });
});
function Qd(n, e, t) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : t || typeof e != "number" || e === 0 || (kr.hasOwnProperty(n) && kr[n])
    ? ("" + e).trim()
    : e + "px";
}
function Zd(n, e) {
  n = n.style;
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        i = Qd(t, e[t], r);
      t === "float" && (t = "cssFloat"), r ? n.setProperty(t, i) : (n[t] = i);
    }
}
var Ep = he(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ca(n, e) {
  if (e) {
    if (Ep[n] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(O(137, n));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(O(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(O(62));
  }
}
function da(n, e) {
  if (n.indexOf("-") === -1) return typeof e.is == "string";
  switch (n) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fa = null;
function ml(n) {
  return (
    (n = n.target || n.srcElement || window),
    n.correspondingUseElement && (n = n.correspondingUseElement),
    n.nodeType === 3 ? n.parentNode : n
  );
}
var ha = null,
  tr = null,
  nr = null;
function Fu(n) {
  if ((n = hi(n))) {
    if (typeof ha != "function") throw Error(O(280));
    var e = n.stateNode;
    e && ((e = Ns(e)), ha(n.stateNode, n.type, e));
  }
}
function Jd(n) {
  tr ? (nr ? nr.push(n) : (nr = [n])) : (tr = n);
}
function ef() {
  if (tr) {
    var n = tr,
      e = nr;
    if (((nr = tr = null), Fu(n), e)) for (n = 0; n < e.length; n++) Fu(e[n]);
  }
}
function tf(n, e) {
  return n(e);
}
function nf() {}
var so = !1;
function rf(n, e, t) {
  if (so) return n(e, t);
  so = !0;
  try {
    return tf(n, e, t);
  } finally {
    (so = !1), (tr !== null || nr !== null) && (nf(), ef());
  }
}
function Hr(n, e) {
  var t = n.stateNode;
  if (t === null) return null;
  var r = Ns(t);
  if (r === null) return null;
  t = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((n = n.type),
        (r = !(
          n === "button" ||
          n === "input" ||
          n === "select" ||
          n === "textarea"
        ))),
        (n = !r);
      break e;
    default:
      n = !1;
  }
  if (n) return null;
  if (t && typeof t != "function") throw Error(O(231, e, typeof t));
  return t;
}
var pa = !1;
if ($t)
  try {
    var vr = {};
    Object.defineProperty(vr, "passive", {
      get: function () {
        pa = !0;
      },
    }),
      window.addEventListener("test", vr, vr),
      window.removeEventListener("test", vr, vr);
  } catch {
    pa = !1;
  }
function vp(n, e, t, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, u);
  } catch (c) {
    this.onError(c);
  }
}
var _r = !1,
  rs = null,
  is = !1,
  ga = null,
  xp = {
    onError: function (n) {
      (_r = !0), (rs = n);
    },
  };
function Tp(n, e, t, r, i, s, o, a, l) {
  (_r = !1), (rs = null), vp.apply(xp, arguments);
}
function Sp(n, e, t, r, i, s, o, a, l) {
  if ((Tp.apply(this, arguments), _r)) {
    if (_r) {
      var u = rs;
      (_r = !1), (rs = null);
    } else throw Error(O(198));
    is || ((is = !0), (ga = u));
  }
}
function On(n) {
  var e = n,
    t = n;
  if (n.alternate) for (; e.return; ) e = e.return;
  else {
    n = e;
    do (e = n), (e.flags & 4098) !== 0 && (t = e.return), (n = e.return);
    while (n);
  }
  return e.tag === 3 ? t : null;
}
function sf(n) {
  if (n.tag === 13) {
    var e = n.memoizedState;
    if (
      (e === null && ((n = n.alternate), n !== null && (e = n.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function wu(n) {
  if (On(n) !== n) throw Error(O(188));
}
function Ap(n) {
  var e = n.alternate;
  if (!e) {
    if (((e = On(n)), e === null)) throw Error(O(188));
    return e !== n ? null : n;
  }
  for (var t = n, r = e; ; ) {
    var i = t.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === t) return wu(i), n;
        if (s === r) return wu(i), e;
        s = s.sibling;
      }
      throw Error(O(188));
    }
    if (t.return !== r.return) (t = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === t) {
          (o = !0), (t = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (t = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === t) {
            (o = !0), (t = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (t = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(O(189));
      }
    }
    if (t.alternate !== r) throw Error(O(190));
  }
  if (t.tag !== 3) throw Error(O(188));
  return t.stateNode.current === t ? n : e;
}
function of(n) {
  return (n = Ap(n)), n !== null ? af(n) : null;
}
function af(n) {
  if (n.tag === 5 || n.tag === 6) return n;
  for (n = n.child; n !== null; ) {
    var e = af(n);
    if (e !== null) return e;
    n = n.sibling;
  }
  return null;
}
var lf = et.unstable_scheduleCallback,
  ku = et.unstable_cancelCallback,
  Lp = et.unstable_shouldYield,
  Cp = et.unstable_requestPaint,
  ge = et.unstable_now,
  Dp = et.unstable_getCurrentPriorityLevel,
  yl = et.unstable_ImmediatePriority,
  uf = et.unstable_UserBlockingPriority,
  ss = et.unstable_NormalPriority,
  Rp = et.unstable_LowPriority,
  cf = et.unstable_IdlePriority,
  Ps = null,
  It = null;
function Ip(n) {
  if (It && typeof It.onCommitFiberRoot == "function")
    try {
      It.onCommitFiberRoot(Ps, n, void 0, (n.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : kp,
  Fp = Math.log,
  wp = Math.LN2;
function kp(n) {
  return (n >>>= 0), n === 0 ? 32 : (31 - ((Fp(n) / wp) | 0)) | 0;
}
var vi = 64,
  xi = 4194304;
function Fr(n) {
  switch (n & -n) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return n & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return n;
  }
}
function os(n, e) {
  var t = n.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    i = n.suspendedLanes,
    s = n.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Fr(a)) : ((s &= o), s !== 0 && (r = Fr(s)));
  } else (o = t & ~i), o !== 0 ? (r = Fr(o)) : s !== 0 && (r = Fr(s));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    (e & i) === 0 &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if (((r & 4) !== 0 && (r |= t & 16), (e = n.entangledLanes), e !== 0))
    for (n = n.entanglements, e &= r; 0 < e; )
      (t = 31 - xt(e)), (i = 1 << t), (r |= n[t]), (e &= ~i);
  return r;
}
function _p(n, e) {
  switch (n) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Pp(n, e) {
  for (
    var t = n.suspendedLanes,
      r = n.pingedLanes,
      i = n.expirationTimes,
      s = n.pendingLanes;
    0 < s;

  ) {
    var o = 31 - xt(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? ((a & t) === 0 || (a & r) !== 0) && (i[o] = _p(a, e))
      : l <= e && (n.expiredLanes |= a),
      (s &= ~a);
  }
}
function ma(n) {
  return (
    (n = n.pendingLanes & -1073741825),
    n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
  );
}
function df() {
  var n = vi;
  return (vi <<= 1), (vi & 4194240) === 0 && (vi = 64), n;
}
function oo(n) {
  for (var e = [], t = 0; 31 > t; t++) e.push(n);
  return e;
}
function di(n, e, t) {
  (n.pendingLanes |= e),
    e !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
    (n = n.eventTimes),
    (e = 31 - xt(e)),
    (n[e] = t);
}
function Op(n, e) {
  var t = n.pendingLanes & ~e;
  (n.pendingLanes = e),
    (n.suspendedLanes = 0),
    (n.pingedLanes = 0),
    (n.expiredLanes &= e),
    (n.mutableReadLanes &= e),
    (n.entangledLanes &= e),
    (e = n.entanglements);
  var r = n.eventTimes;
  for (n = n.expirationTimes; 0 < t; ) {
    var i = 31 - xt(t),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (n[i] = -1), (t &= ~s);
  }
}
function El(n, e) {
  var t = (n.entangledLanes |= e);
  for (n = n.entanglements; t; ) {
    var r = 31 - xt(t),
      i = 1 << r;
    (i & e) | (n[r] & e) && (n[r] |= e), (t &= ~i);
  }
}
var Z = 0;
function ff(n) {
  return (
    (n &= -n),
    1 < n ? (4 < n ? ((n & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var hf,
  vl,
  pf,
  gf,
  mf,
  ya = !1,
  Ti = [],
  nn = null,
  rn = null,
  sn = null,
  Wr = new Map(),
  zr = new Map(),
  Qt = [],
  Bp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function _u(n, e) {
  switch (n) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      Wr.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zr.delete(e.pointerId);
  }
}
function xr(n, e, t, r, i, s) {
  return n === null || n.nativeEvent !== s
    ? ((n = {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = hi(e)), e !== null && vl(e)),
      n)
    : ((n.eventSystemFlags |= r),
      (e = n.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      n);
}
function bp(n, e, t, r, i) {
  switch (e) {
    case "focusin":
      return (nn = xr(nn, n, e, t, r, i)), !0;
    case "dragenter":
      return (rn = xr(rn, n, e, t, r, i)), !0;
    case "mouseover":
      return (sn = xr(sn, n, e, t, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Wr.set(s, xr(Wr.get(s) || null, n, e, t, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), zr.set(s, xr(zr.get(s) || null, n, e, t, r, i)), !0
      );
  }
  return !1;
}
function yf(n) {
  var e = xn(n.target);
  if (e !== null) {
    var t = On(e);
    if (t !== null) {
      if (((e = t.tag), e === 13)) {
        if (((e = sf(t)), e !== null)) {
          (n.blockedOn = e),
            mf(n.priority, function () {
              pf(t);
            });
          return;
        }
      } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        n.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  n.blockedOn = null;
}
function Hi(n) {
  if (n.blockedOn !== null) return !1;
  for (var e = n.targetContainers; 0 < e.length; ) {
    var t = Ea(n.domEventName, n.eventSystemFlags, e[0], n.nativeEvent);
    if (t === null) {
      t = n.nativeEvent;
      var r = new t.constructor(t.type, t);
      (fa = r), t.target.dispatchEvent(r), (fa = null);
    } else return (e = hi(t)), e !== null && vl(e), (n.blockedOn = t), !1;
    e.shift();
  }
  return !0;
}
function Pu(n, e, t) {
  Hi(n) && t.delete(e);
}
function Np() {
  (ya = !1),
    nn !== null && Hi(nn) && (nn = null),
    rn !== null && Hi(rn) && (rn = null),
    sn !== null && Hi(sn) && (sn = null),
    Wr.forEach(Pu),
    zr.forEach(Pu);
}
function Tr(n, e) {
  n.blockedOn === e &&
    ((n.blockedOn = null),
    ya ||
      ((ya = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, Np)));
}
function jr(n) {
  function e(i) {
    return Tr(i, n);
  }
  if (0 < Ti.length) {
    Tr(Ti[0], n);
    for (var t = 1; t < Ti.length; t++) {
      var r = Ti[t];
      r.blockedOn === n && (r.blockedOn = null);
    }
  }
  for (
    nn !== null && Tr(nn, n),
      rn !== null && Tr(rn, n),
      sn !== null && Tr(sn, n),
      Wr.forEach(e),
      zr.forEach(e),
      t = 0;
    t < Qt.length;
    t++
  )
    (r = Qt[t]), r.blockedOn === n && (r.blockedOn = null);
  for (; 0 < Qt.length && ((t = Qt[0]), t.blockedOn === null); )
    yf(t), t.blockedOn === null && Qt.shift();
}
var rr = Ht.ReactCurrentBatchConfig,
  as = !0;
function Mp(n, e, t, r) {
  var i = Z,
    s = rr.transition;
  rr.transition = null;
  try {
    (Z = 1), xl(n, e, t, r);
  } finally {
    (Z = i), (rr.transition = s);
  }
}
function Up(n, e, t, r) {
  var i = Z,
    s = rr.transition;
  rr.transition = null;
  try {
    (Z = 4), xl(n, e, t, r);
  } finally {
    (Z = i), (rr.transition = s);
  }
}
function xl(n, e, t, r) {
  if (as) {
    var i = Ea(n, e, t, r);
    if (i === null) yo(n, e, r, ls, t), _u(n, r);
    else if (bp(i, n, e, t, r)) r.stopPropagation();
    else if ((_u(n, r), e & 4 && -1 < Bp.indexOf(n))) {
      for (; i !== null; ) {
        var s = hi(i);
        if (
          (s !== null && hf(s),
          (s = Ea(n, e, t, r)),
          s === null && yo(n, e, r, ls, t),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else yo(n, e, r, null, t);
  }
}
var ls = null;
function Ea(n, e, t, r) {
  if (((ls = null), (n = ml(r)), (n = xn(n)), n !== null))
    if (((e = On(n)), e === null)) n = null;
    else if (((t = e.tag), t === 13)) {
      if (((n = sf(e)), n !== null)) return n;
      n = null;
    } else if (t === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      n = null;
    } else e !== n && (n = null);
  return (ls = n), null;
}
function Ef(n) {
  switch (n) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Dp()) {
        case yl:
          return 1;
        case uf:
          return 4;
        case ss:
        case Rp:
          return 16;
        case cf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null,
  Tl = null,
  Wi = null;
function vf() {
  if (Wi) return Wi;
  var n,
    e = Tl,
    t = e.length,
    r,
    i = "value" in Jt ? Jt.value : Jt.textContent,
    s = i.length;
  for (n = 0; n < t && e[n] === i[n]; n++);
  var o = t - n;
  for (r = 1; r <= o && e[t - r] === i[s - r]; r++);
  return (Wi = i.slice(n, 1 < r ? 1 - r : void 0));
}
function zi(n) {
  var e = n.keyCode;
  return (
    "charCode" in n
      ? ((n = n.charCode), n === 0 && e === 13 && (n = 13))
      : (n = e),
    n === 10 && (n = 13),
    32 <= n || n === 13 ? n : 0
  );
}
function Si() {
  return !0;
}
function Ou() {
  return !1;
}
function nt(n) {
  function e(t, r, i, s, o) {
    (this._reactName = t),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in n)
      n.hasOwnProperty(a) && ((t = n[a]), (this[a] = t ? t(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Si
        : Ou),
      (this.isPropagationStopped = Ou),
      this
    );
  }
  return (
    he(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = Si));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = Si));
      },
      persist: function () {},
      isPersistent: Si,
    }),
    e
  );
}
var gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (n) {
      return n.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Sl = nt(gr),
  fi = he({}, gr, { view: 0, detail: 0 }),
  $p = nt(fi),
  ao,
  lo,
  Sr,
  Os = he({}, fi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Al,
    button: 0,
    buttons: 0,
    relatedTarget: function (n) {
      return n.relatedTarget === void 0
        ? n.fromElement === n.srcElement
          ? n.toElement
          : n.fromElement
        : n.relatedTarget;
    },
    movementX: function (n) {
      return "movementX" in n
        ? n.movementX
        : (n !== Sr &&
            (Sr && n.type === "mousemove"
              ? ((ao = n.screenX - Sr.screenX), (lo = n.screenY - Sr.screenY))
              : (lo = ao = 0),
            (Sr = n)),
          ao);
    },
    movementY: function (n) {
      return "movementY" in n ? n.movementY : lo;
    },
  }),
  Bu = nt(Os),
  Gp = he({}, Os, { dataTransfer: 0 }),
  Kp = nt(Gp),
  Vp = he({}, fi, { relatedTarget: 0 }),
  uo = nt(Vp),
  Hp = he({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wp = nt(Hp),
  zp = he({}, gr, {
    clipboardData: function (n) {
      return "clipboardData" in n ? n.clipboardData : window.clipboardData;
    },
  }),
  jp = nt(zp),
  Yp = he({}, gr, { data: 0 }),
  bu = nt(Yp),
  Xp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  qp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Qp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Zp(n) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(n) : (n = Qp[n]) ? !!e[n] : !1;
}
function Al() {
  return Zp;
}
var Jp = he({}, fi, {
    key: function (n) {
      if (n.key) {
        var e = Xp[n.key] || n.key;
        if (e !== "Unidentified") return e;
      }
      return n.type === "keypress"
        ? ((n = zi(n)), n === 13 ? "Enter" : String.fromCharCode(n))
        : n.type === "keydown" || n.type === "keyup"
        ? qp[n.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Al,
    charCode: function (n) {
      return n.type === "keypress" ? zi(n) : 0;
    },
    keyCode: function (n) {
      return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
    },
    which: function (n) {
      return n.type === "keypress"
        ? zi(n)
        : n.type === "keydown" || n.type === "keyup"
        ? n.keyCode
        : 0;
    },
  }),
  eg = nt(Jp),
  tg = he({}, Os, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Nu = nt(tg),
  ng = he({}, fi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Al,
  }),
  rg = nt(ng),
  ig = he({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sg = nt(ig),
  og = he({}, Os, {
    deltaX: function (n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function (n) {
      return "deltaY" in n
        ? n.deltaY
        : "wheelDeltaY" in n
        ? -n.wheelDeltaY
        : "wheelDelta" in n
        ? -n.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ag = nt(og),
  lg = [9, 13, 27, 32],
  Ll = $t && "CompositionEvent" in window,
  Pr = null;
$t && "documentMode" in document && (Pr = document.documentMode);
var ug = $t && "TextEvent" in window && !Pr,
  xf = $t && (!Ll || (Pr && 8 < Pr && 11 >= Pr)),
  Mu = String.fromCharCode(32),
  Uu = !1;
function Tf(n, e) {
  switch (n) {
    case "keyup":
      return lg.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Sf(n) {
  return (n = n.detail), typeof n == "object" && "data" in n ? n.data : null;
}
var Vn = !1;
function cg(n, e) {
  switch (n) {
    case "compositionend":
      return Sf(e);
    case "keypress":
      return e.which !== 32 ? null : ((Uu = !0), Mu);
    case "textInput":
      return (n = e.data), n === Mu && Uu ? null : n;
    default:
      return null;
  }
}
function dg(n, e) {
  if (Vn)
    return n === "compositionend" || (!Ll && Tf(n, e))
      ? ((n = vf()), (Wi = Tl = Jt = null), (Vn = !1), n)
      : null;
  switch (n) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return xf && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var fg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function $u(n) {
  var e = n && n.nodeName && n.nodeName.toLowerCase();
  return e === "input" ? !!fg[n.type] : e === "textarea";
}
function Af(n, e, t, r) {
  Jd(r),
    (e = us(e, "onChange")),
    0 < e.length &&
      ((t = new Sl("onChange", "change", null, t, r)),
      n.push({ event: t, listeners: e }));
}
var Or = null,
  Yr = null;
function hg(n) {
  Of(n, 0);
}
function Bs(n) {
  var e = zn(n);
  if (zd(e)) return n;
}
function pg(n, e) {
  if (n === "change") return e;
}
var Lf = !1;
if ($t) {
  var co;
  if ($t) {
    var fo = "oninput" in document;
    if (!fo) {
      var Gu = document.createElement("div");
      Gu.setAttribute("oninput", "return;"),
        (fo = typeof Gu.oninput == "function");
    }
    co = fo;
  } else co = !1;
  Lf = co && (!document.documentMode || 9 < document.documentMode);
}
function Ku() {
  Or && (Or.detachEvent("onpropertychange", Cf), (Yr = Or = null));
}
function Cf(n) {
  if (n.propertyName === "value" && Bs(Yr)) {
    var e = [];
    Af(e, Yr, n, ml(n)), rf(hg, e);
  }
}
function gg(n, e, t) {
  n === "focusin"
    ? (Ku(), (Or = e), (Yr = t), Or.attachEvent("onpropertychange", Cf))
    : n === "focusout" && Ku();
}
function mg(n) {
  if (n === "selectionchange" || n === "keyup" || n === "keydown")
    return Bs(Yr);
}
function yg(n, e) {
  if (n === "click") return Bs(e);
}
function Eg(n, e) {
  if (n === "input" || n === "change") return Bs(e);
}
function vg(n, e) {
  return (n === e && (n !== 0 || 1 / n === 1 / e)) || (n !== n && e !== e);
}
var St = typeof Object.is == "function" ? Object.is : vg;
function Xr(n, e) {
  if (St(n, e)) return !0;
  if (typeof n != "object" || n === null || typeof e != "object" || e === null)
    return !1;
  var t = Object.keys(n),
    r = Object.keys(e);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var i = t[r];
    if (!ea.call(e, i) || !St(n[i], e[i])) return !1;
  }
  return !0;
}
function Vu(n) {
  for (; n && n.firstChild; ) n = n.firstChild;
  return n;
}
function Hu(n, e) {
  var t = Vu(n);
  n = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = n + t.textContent.length), n <= e && r >= e))
        return { node: t, offset: e - n };
      n = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Vu(t);
  }
}
function Df(n, e) {
  return n && e
    ? n === e
      ? !0
      : n && n.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Df(n, e.parentNode)
      : "contains" in n
      ? n.contains(e)
      : n.compareDocumentPosition
      ? !!(n.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Rf() {
  for (var n = window, e = ns(); e instanceof n.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) n = e.contentWindow;
    else break;
    e = ns(n.document);
  }
  return e;
}
function Cl(n) {
  var e = n && n.nodeName && n.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (n.type === "text" ||
        n.type === "search" ||
        n.type === "tel" ||
        n.type === "url" ||
        n.type === "password")) ||
      e === "textarea" ||
      n.contentEditable === "true")
  );
}
function xg(n) {
  var e = Rf(),
    t = n.focusedElem,
    r = n.selectionRange;
  if (
    e !== t &&
    t &&
    t.ownerDocument &&
    Df(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && Cl(t)) {
      if (
        ((e = r.start),
        (n = r.end),
        n === void 0 && (n = e),
        "selectionStart" in t)
      )
        (t.selectionStart = e), (t.selectionEnd = Math.min(n, t.value.length));
      else if (
        ((n = ((e = t.ownerDocument || document) && e.defaultView) || window),
        n.getSelection)
      ) {
        n = n.getSelection();
        var i = t.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !n.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Hu(t, s));
        var o = Hu(t, r);
        i &&
          o &&
          (n.rangeCount !== 1 ||
            n.anchorNode !== i.node ||
            n.anchorOffset !== i.offset ||
            n.focusNode !== o.node ||
            n.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          n.removeAllRanges(),
          s > r
            ? (n.addRange(e), n.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), n.addRange(e)));
      }
    }
    for (e = [], n = t; (n = n.parentNode); )
      n.nodeType === 1 &&
        e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
      (n = e[t]),
        (n.element.scrollLeft = n.left),
        (n.element.scrollTop = n.top);
  }
}
var Tg = $t && "documentMode" in document && 11 >= document.documentMode,
  Hn = null,
  va = null,
  Br = null,
  xa = !1;
function Wu(n, e, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  xa ||
    Hn == null ||
    Hn !== ns(r) ||
    ((r = Hn),
    "selectionStart" in r && Cl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Br && Xr(Br, r)) ||
      ((Br = r),
      (r = us(va, "onSelect")),
      0 < r.length &&
        ((e = new Sl("onSelect", "select", null, e, t)),
        n.push({ event: e, listeners: r }),
        (e.target = Hn))));
}
function Ai(n, e) {
  var t = {};
  return (
    (t[n.toLowerCase()] = e.toLowerCase()),
    (t["Webkit" + n] = "webkit" + e),
    (t["Moz" + n] = "moz" + e),
    t
  );
}
var Wn = {
    animationend: Ai("Animation", "AnimationEnd"),
    animationiteration: Ai("Animation", "AnimationIteration"),
    animationstart: Ai("Animation", "AnimationStart"),
    transitionend: Ai("Transition", "TransitionEnd"),
  },
  ho = {},
  If = {};
$t &&
  ((If = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wn.animationend.animation,
    delete Wn.animationiteration.animation,
    delete Wn.animationstart.animation),
  "TransitionEvent" in window || delete Wn.transitionend.transition);
function bs(n) {
  if (ho[n]) return ho[n];
  if (!Wn[n]) return n;
  var e = Wn[n],
    t;
  for (t in e) if (e.hasOwnProperty(t) && t in If) return (ho[n] = e[t]);
  return n;
}
var Ff = bs("animationend"),
  wf = bs("animationiteration"),
  kf = bs("animationstart"),
  _f = bs("transitionend"),
  Pf = new Map(),
  zu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function hn(n, e) {
  Pf.set(n, e), Pn(e, [n]);
}
for (var po = 0; po < zu.length; po++) {
  var go = zu[po],
    Sg = go.toLowerCase(),
    Ag = go[0].toUpperCase() + go.slice(1);
  hn(Sg, "on" + Ag);
}
hn(Ff, "onAnimationEnd");
hn(wf, "onAnimationIteration");
hn(kf, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(_f, "onTransitionEnd");
ar("onMouseEnter", ["mouseout", "mouseover"]);
ar("onMouseLeave", ["mouseout", "mouseover"]);
ar("onPointerEnter", ["pointerout", "pointerover"]);
ar("onPointerLeave", ["pointerout", "pointerover"]);
Pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Lg = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
function ju(n, e, t) {
  var r = n.type || "unknown-event";
  (n.currentTarget = t), Sp(r, e, void 0, n), (n.currentTarget = null);
}
function Of(n, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < n.length; t++) {
    var r = n[t],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          ju(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          ju(i, a, u), (s = l);
        }
    }
  }
  if (is) throw ((n = ga), (is = !1), (ga = null), n);
}
function ie(n, e) {
  var t = e[Ca];
  t === void 0 && (t = e[Ca] = new Set());
  var r = n + "__bubble";
  t.has(r) || (Bf(e, n, 2, !1), t.add(r));
}
function mo(n, e, t) {
  var r = 0;
  e && (r |= 4), Bf(t, n, r, e);
}
var Li = "_reactListening" + Math.random().toString(36).slice(2);
function qr(n) {
  if (!n[Li]) {
    (n[Li] = !0),
      Gd.forEach(function (t) {
        t !== "selectionchange" && (Lg.has(t) || mo(t, !1, n), mo(t, !0, n));
      });
    var e = n.nodeType === 9 ? n : n.ownerDocument;
    e === null || e[Li] || ((e[Li] = !0), mo("selectionchange", !1, e));
  }
}
function Bf(n, e, t, r) {
  switch (Ef(e)) {
    case 1:
      var i = Mp;
      break;
    case 4:
      i = Up;
      break;
    default:
      i = xl;
  }
  (t = i.bind(null, e, t, n)),
    (i = void 0),
    !pa ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? n.addEventListener(e, t, { capture: !0, passive: i })
        : n.addEventListener(e, t, !0)
      : i !== void 0
      ? n.addEventListener(e, t, { passive: i })
      : n.addEventListener(e, t, !1);
}
function yo(n, e, t, r, i) {
  var s = r;
  if ((e & 1) === 0 && (e & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = xn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  rf(function () {
    var u = s,
      c = ml(t),
      d = [];
    e: {
      var f = Pf.get(n);
      if (f !== void 0) {
        var h = Sl,
          p = n;
        switch (n) {
          case "keypress":
            if (zi(t) === 0) break e;
          case "keydown":
          case "keyup":
            h = eg;
            break;
          case "focusin":
            (p = "focus"), (h = uo);
            break;
          case "focusout":
            (p = "blur"), (h = uo);
            break;
          case "beforeblur":
          case "afterblur":
            h = uo;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Bu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Kp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = rg;
            break;
          case Ff:
          case wf:
          case kf:
            h = Wp;
            break;
          case _f:
            h = sg;
            break;
          case "scroll":
            h = $p;
            break;
          case "wheel":
            h = ag;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = jp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Nu;
        }
        var g = (e & 4) !== 0,
          v = !g && n === "scroll",
          m = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var E = u, x; E !== null; ) {
          x = E;
          var T = x.stateNode;
          if (
            (x.tag === 5 &&
              T !== null &&
              ((x = T),
              m !== null && ((T = Hr(E, m)), T != null && g.push(Qr(E, T, x)))),
            v)
          )
            break;
          E = E.return;
        }
        0 < g.length &&
          ((f = new h(f, p, null, t, c)), d.push({ event: f, listeners: g }));
      }
    }
    if ((e & 7) === 0) {
      e: {
        if (
          ((f = n === "mouseover" || n === "pointerover"),
          (h = n === "mouseout" || n === "pointerout"),
          f &&
            t !== fa &&
            (p = t.relatedTarget || t.fromElement) &&
            (xn(p) || p[Gt]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((p = t.relatedTarget || t.toElement),
              (h = u),
              (p = p ? xn(p) : null),
              p !== null &&
                ((v = On(p)), p !== v || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((h = null), (p = u)),
          h !== p)
        ) {
          if (
            ((g = Bu),
            (T = "onMouseLeave"),
            (m = "onMouseEnter"),
            (E = "mouse"),
            (n === "pointerout" || n === "pointerover") &&
              ((g = Nu),
              (T = "onPointerLeave"),
              (m = "onPointerEnter"),
              (E = "pointer")),
            (v = h == null ? f : zn(h)),
            (x = p == null ? f : zn(p)),
            (f = new g(T, E + "leave", h, t, c)),
            (f.target = v),
            (f.relatedTarget = x),
            (T = null),
            xn(c) === u &&
              ((g = new g(m, E + "enter", p, t, c)),
              (g.target = x),
              (g.relatedTarget = v),
              (T = g)),
            (v = T),
            h && p)
          )
            t: {
              for (g = h, m = p, E = 0, x = g; x; x = bn(x)) E++;
              for (x = 0, T = m; T; T = bn(T)) x++;
              for (; 0 < E - x; ) (g = bn(g)), E--;
              for (; 0 < x - E; ) (m = bn(m)), x--;
              for (; E--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = bn(g)), (m = bn(m));
              }
              g = null;
            }
          else g = null;
          h !== null && Yu(d, f, h, g, !1),
            p !== null && v !== null && Yu(d, v, p, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? zn(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var S = pg;
        else if ($u(f))
          if (Lf) S = Eg;
          else {
            S = mg;
            var R = gg;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (S = yg);
        if (S && (S = S(n, u))) {
          Af(d, S, t, c);
          break e;
        }
        R && R(n, f, u),
          n === "focusout" &&
            (R = f._wrapperState) &&
            R.controlled &&
            f.type === "number" &&
            aa(f, "number", f.value);
      }
      switch (((R = u ? zn(u) : window), n)) {
        case "focusin":
          ($u(R) || R.contentEditable === "true") &&
            ((Hn = R), (va = u), (Br = null));
          break;
        case "focusout":
          Br = va = Hn = null;
          break;
        case "mousedown":
          xa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xa = !1), Wu(d, t, c);
          break;
        case "selectionchange":
          if (Tg) break;
        case "keydown":
        case "keyup":
          Wu(d, t, c);
      }
      var L;
      if (Ll)
        e: {
          switch (n) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        Vn
          ? Tf(n, t) && (I = "onCompositionEnd")
          : n === "keydown" && t.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (xf &&
          t.locale !== "ko" &&
          (Vn || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && Vn && (L = vf())
            : ((Jt = c),
              (Tl = "value" in Jt ? Jt.value : Jt.textContent),
              (Vn = !0))),
        (R = us(u, I)),
        0 < R.length &&
          ((I = new bu(I, n, null, t, c)),
          d.push({ event: I, listeners: R }),
          L ? (I.data = L) : ((L = Sf(t)), L !== null && (I.data = L)))),
        (L = ug ? cg(n, t) : dg(n, t)) &&
          ((u = us(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new bu("onBeforeInput", "beforeinput", null, t, c)),
            d.push({ event: c, listeners: u }),
            (c.data = L)));
    }
    Of(d, e);
  });
}
function Qr(n, e, t) {
  return { instance: n, listener: e, currentTarget: t };
}
function us(n, e) {
  for (var t = e + "Capture", r = []; n !== null; ) {
    var i = n,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Hr(n, t)),
      s != null && r.unshift(Qr(n, s, i)),
      (s = Hr(n, e)),
      s != null && r.push(Qr(n, s, i))),
      (n = n.return);
  }
  return r;
}
function bn(n) {
  if (n === null) return null;
  do n = n.return;
  while (n && n.tag !== 5);
  return n || null;
}
function Yu(n, e, t, r, i) {
  for (var s = e._reactName, o = []; t !== null && t !== r; ) {
    var a = t,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Hr(t, s)), l != null && o.unshift(Qr(t, l, a)))
        : i || ((l = Hr(t, s)), l != null && o.push(Qr(t, l, a)))),
      (t = t.return);
  }
  o.length !== 0 && n.push({ event: e, listeners: o });
}
var Cg = /\r\n?/g,
  Dg = /\u0000|\uFFFD/g;
function Xu(n) {
  return (typeof n == "string" ? n : "" + n)
    .replace(
      Cg,
      `
`
    )
    .replace(Dg, "");
}
function Ci(n, e, t) {
  if (((e = Xu(e)), Xu(n) !== e && t)) throw Error(O(425));
}
function cs() {}
var Ta = null,
  Sa = null;
function Aa(n, e) {
  return (
    n === "textarea" ||
    n === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var La = typeof setTimeout == "function" ? setTimeout : void 0,
  Rg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  qu = typeof Promise == "function" ? Promise : void 0,
  Ig =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof qu < "u"
      ? function (n) {
          return qu.resolve(null).then(n).catch(Fg);
        }
      : La;
function Fg(n) {
  setTimeout(function () {
    throw n;
  });
}
function Eo(n, e) {
  var t = e,
    r = 0;
  do {
    var i = t.nextSibling;
    if ((n.removeChild(t), i && i.nodeType === 8))
      if (((t = i.data), t === "/$")) {
        if (r === 0) {
          n.removeChild(i), jr(e);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = i;
  } while (t);
  jr(e);
}
function on(n) {
  for (; n != null; n = n.nextSibling) {
    var e = n.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = n.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return n;
}
function Qu(n) {
  n = n.previousSibling;
  for (var e = 0; n; ) {
    if (n.nodeType === 8) {
      var t = n.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (e === 0) return n;
        e--;
      } else t === "/$" && e++;
    }
    n = n.previousSibling;
  }
  return null;
}
var mr = Math.random().toString(36).slice(2),
  Rt = "__reactFiber$" + mr,
  Zr = "__reactProps$" + mr,
  Gt = "__reactContainer$" + mr,
  Ca = "__reactEvents$" + mr,
  wg = "__reactListeners$" + mr,
  kg = "__reactHandles$" + mr;
function xn(n) {
  var e = n[Rt];
  if (e) return e;
  for (var t = n.parentNode; t; ) {
    if ((e = t[Gt] || t[Rt])) {
      if (
        ((t = e.alternate),
        e.child !== null || (t !== null && t.child !== null))
      )
        for (n = Qu(n); n !== null; ) {
          if ((t = n[Rt])) return t;
          n = Qu(n);
        }
      return e;
    }
    (n = t), (t = n.parentNode);
  }
  return null;
}
function hi(n) {
  return (
    (n = n[Rt] || n[Gt]),
    !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3) ? null : n
  );
}
function zn(n) {
  if (n.tag === 5 || n.tag === 6) return n.stateNode;
  throw Error(O(33));
}
function Ns(n) {
  return n[Zr] || null;
}
var Da = [],
  jn = -1;
function pn(n) {
  return { current: n };
}
function oe(n) {
  0 > jn || ((n.current = Da[jn]), (Da[jn] = null), jn--);
}
function re(n, e) {
  jn++, (Da[jn] = n.current), (n.current = e);
}
var fn = {},
  Be = pn(fn),
  je = pn(!1),
  Rn = fn;
function lr(n, e) {
  var t = n.type.contextTypes;
  if (!t) return fn;
  var r = n.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in t) i[s] = e[s];
  return (
    r &&
      ((n = n.stateNode),
      (n.__reactInternalMemoizedUnmaskedChildContext = e),
      (n.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ye(n) {
  return (n = n.childContextTypes), n != null;
}
function ds() {
  oe(je), oe(Be);
}
function Zu(n, e, t) {
  if (Be.current !== fn) throw Error(O(168));
  re(Be, e), re(je, t);
}
function bf(n, e, t) {
  var r = n.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(O(108, gp(n) || "Unknown", i));
  return he({}, t, r);
}
function fs(n) {
  return (
    (n =
      ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) || fn),
    (Rn = Be.current),
    re(Be, n),
    re(je, je.current),
    !0
  );
}
function Ju(n, e, t) {
  var r = n.stateNode;
  if (!r) throw Error(O(169));
  t
    ? ((n = bf(n, e, Rn)),
      (r.__reactInternalMemoizedMergedChildContext = n),
      oe(je),
      oe(Be),
      re(Be, n))
    : oe(je),
    re(je, t);
}
var Bt = null,
  Ms = !1,
  vo = !1;
function Nf(n) {
  Bt === null ? (Bt = [n]) : Bt.push(n);
}
function _g(n) {
  (Ms = !0), Nf(n);
}
function gn() {
  if (!vo && Bt !== null) {
    vo = !0;
    var n = 0,
      e = Z;
    try {
      var t = Bt;
      for (Z = 1; n < t.length; n++) {
        var r = t[n];
        do r = r(!0);
        while (r !== null);
      }
      (Bt = null), (Ms = !1);
    } catch (i) {
      throw (Bt !== null && (Bt = Bt.slice(n + 1)), lf(yl, gn), i);
    } finally {
      (Z = e), (vo = !1);
    }
  }
  return null;
}
var Yn = [],
  Xn = 0,
  hs = null,
  ps = 0,
  ot = [],
  at = 0,
  In = null,
  bt = 1,
  Nt = "";
function yn(n, e) {
  (Yn[Xn++] = ps), (Yn[Xn++] = hs), (hs = n), (ps = e);
}
function Mf(n, e, t) {
  (ot[at++] = bt), (ot[at++] = Nt), (ot[at++] = In), (In = n);
  var r = bt;
  n = Nt;
  var i = 32 - xt(r) - 1;
  (r &= ~(1 << i)), (t += 1);
  var s = 32 - xt(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (bt = (1 << (32 - xt(e) + i)) | (t << i) | r),
      (Nt = s + n);
  } else (bt = (1 << s) | (t << i) | r), (Nt = n);
}
function Dl(n) {
  n.return !== null && (yn(n, 1), Mf(n, 1, 0));
}
function Rl(n) {
  for (; n === hs; )
    (hs = Yn[--Xn]), (Yn[Xn] = null), (ps = Yn[--Xn]), (Yn[Xn] = null);
  for (; n === In; )
    (In = ot[--at]),
      (ot[at] = null),
      (Nt = ot[--at]),
      (ot[at] = null),
      (bt = ot[--at]),
      (ot[at] = null);
}
var Je = null,
  Ze = null,
  le = !1,
  yt = null;
function Uf(n, e) {
  var t = lt(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = e),
    (t.return = n),
    (e = n.deletions),
    e === null ? ((n.deletions = [t]), (n.flags |= 16)) : e.push(t);
}
function ec(n, e) {
  switch (n.tag) {
    case 5:
      var t = n.type;
      return (
        (e =
          e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((n.stateNode = e), (Je = n), (Ze = on(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = n.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((n.stateNode = e), (Je = n), (Ze = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((t = In !== null ? { id: bt, overflow: Nt } : null),
            (n.memoizedState = {
              dehydrated: e,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = lt(18, null, null, 0)),
            (t.stateNode = e),
            (t.return = n),
            (n.child = t),
            (Je = n),
            (Ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ra(n) {
  return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
}
function Ia(n) {
  if (le) {
    var e = Ze;
    if (e) {
      var t = e;
      if (!ec(n, e)) {
        if (Ra(n)) throw Error(O(418));
        e = on(t.nextSibling);
        var r = Je;
        e && ec(n, e)
          ? Uf(r, t)
          : ((n.flags = (n.flags & -4097) | 2), (le = !1), (Je = n));
      }
    } else {
      if (Ra(n)) throw Error(O(418));
      (n.flags = (n.flags & -4097) | 2), (le = !1), (Je = n);
    }
  }
}
function tc(n) {
  for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
    n = n.return;
  Je = n;
}
function Di(n) {
  if (n !== Je) return !1;
  if (!le) return tc(n), (le = !0), !1;
  var e;
  if (
    ((e = n.tag !== 3) &&
      !(e = n.tag !== 5) &&
      ((e = n.type),
      (e = e !== "head" && e !== "body" && !Aa(n.type, n.memoizedProps))),
    e && (e = Ze))
  ) {
    if (Ra(n)) throw ($f(), Error(O(418)));
    for (; e; ) Uf(n, e), (e = on(e.nextSibling));
  }
  if ((tc(n), n.tag === 13)) {
    if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
      throw Error(O(317));
    e: {
      for (n = n.nextSibling, e = 0; n; ) {
        if (n.nodeType === 8) {
          var t = n.data;
          if (t === "/$") {
            if (e === 0) {
              Ze = on(n.nextSibling);
              break e;
            }
            e--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || e++;
        }
        n = n.nextSibling;
      }
      Ze = null;
    }
  } else Ze = Je ? on(n.stateNode.nextSibling) : null;
  return !0;
}
function $f() {
  for (var n = Ze; n; ) n = on(n.nextSibling);
}
function ur() {
  (Ze = Je = null), (le = !1);
}
function Il(n) {
  yt === null ? (yt = [n]) : yt.push(n);
}
var Pg = Ht.ReactCurrentBatchConfig;
function gt(n, e) {
  if (n && n.defaultProps) {
    (e = he({}, e)), (n = n.defaultProps);
    for (var t in n) e[t] === void 0 && (e[t] = n[t]);
    return e;
  }
  return e;
}
var gs = pn(null),
  ms = null,
  qn = null,
  Fl = null;
function wl() {
  Fl = qn = ms = null;
}
function kl(n) {
  var e = gs.current;
  oe(gs), (n._currentValue = e);
}
function Fa(n, e, t) {
  for (; n !== null; ) {
    var r = n.alternate;
    if (
      ((n.childLanes & e) !== e
        ? ((n.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      n === t)
    )
      break;
    n = n.return;
  }
}
function ir(n, e) {
  (ms = n),
    (Fl = qn = null),
    (n = n.dependencies),
    n !== null &&
      n.firstContext !== null &&
      ((n.lanes & e) !== 0 && (ze = !0), (n.firstContext = null));
}
function ct(n) {
  var e = n._currentValue;
  if (Fl !== n)
    if (((n = { context: n, memoizedValue: e, next: null }), qn === null)) {
      if (ms === null) throw Error(O(308));
      (qn = n), (ms.dependencies = { lanes: 0, firstContext: n });
    } else qn = qn.next = n;
  return e;
}
var Tn = null;
function _l(n) {
  Tn === null ? (Tn = [n]) : Tn.push(n);
}
function Gf(n, e, t, r) {
  var i = e.interleaved;
  return (
    i === null ? ((t.next = t), _l(e)) : ((t.next = i.next), (i.next = t)),
    (e.interleaved = t),
    Kt(n, r)
  );
}
function Kt(n, e) {
  n.lanes |= e;
  var t = n.alternate;
  for (t !== null && (t.lanes |= e), t = n, n = n.return; n !== null; )
    (n.childLanes |= e),
      (t = n.alternate),
      t !== null && (t.childLanes |= e),
      (t = n),
      (n = n.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Yt = !1;
function Pl(n) {
  n.updateQueue = {
    baseState: n.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Kf(n, e) {
  (n = n.updateQueue),
    e.updateQueue === n &&
      (e.updateQueue = {
        baseState: n.baseState,
        firstBaseUpdate: n.firstBaseUpdate,
        lastBaseUpdate: n.lastBaseUpdate,
        shared: n.shared,
        effects: n.effects,
      });
}
function Ut(n, e) {
  return {
    eventTime: n,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(n, e, t) {
  var r = n.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (q & 2) !== 0)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      Kt(n, t)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), _l(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    Kt(n, t)
  );
}
function ji(n, e, t) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (t & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= n.pendingLanes), (t |= r), (e.lanes = t), El(n, t);
  }
}
function nc(n, e) {
  var t = n.updateQueue,
    r = n.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var i = null,
      s = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (t = t.next);
      } while (t !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (n.updateQueue = t);
    return;
  }
  (n = t.lastBaseUpdate),
    n === null ? (t.firstBaseUpdate = e) : (n.next = e),
    (t.lastBaseUpdate = e);
}
function ys(n, e, t, r) {
  var i = n.updateQueue;
  Yt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = n.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var p = n,
            g = a;
          switch (((f = e), (h = t), g.tag)) {
            case 1:
              if (((p = g.payload), typeof p == "function")) {
                d = p.call(h, d, f);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = g.payload),
                (f = typeof p == "function" ? p.call(h, d, f) : p),
                f == null)
              )
                break e;
              d = he({}, d, f);
              break e;
            case 2:
              Yt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((n.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    (wn |= o), (n.lanes = o), (n.memoizedState = d);
  }
}
function rc(n, e, t) {
  if (((n = e.effects), (e.effects = null), n !== null))
    for (e = 0; e < n.length; e++) {
      var r = n[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = t), typeof i != "function"))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var Vf = new $d.Component().refs;
function wa(n, e, t, r) {
  (e = n.memoizedState),
    (t = t(r, e)),
    (t = t == null ? e : he({}, e, t)),
    (n.memoizedState = t),
    n.lanes === 0 && (n.updateQueue.baseState = t);
}
var Us = {
  isMounted: function (n) {
    return (n = n._reactInternals) ? On(n) === n : !1;
  },
  enqueueSetState: function (n, e, t) {
    n = n._reactInternals;
    var r = Me(),
      i = un(n),
      s = Ut(r, i);
    (s.payload = e),
      t != null && (s.callback = t),
      (e = an(n, s, i)),
      e !== null && (Tt(e, n, i, r), ji(e, n, i));
  },
  enqueueReplaceState: function (n, e, t) {
    n = n._reactInternals;
    var r = Me(),
      i = un(n),
      s = Ut(r, i);
    (s.tag = 1),
      (s.payload = e),
      t != null && (s.callback = t),
      (e = an(n, s, i)),
      e !== null && (Tt(e, n, i, r), ji(e, n, i));
  },
  enqueueForceUpdate: function (n, e) {
    n = n._reactInternals;
    var t = Me(),
      r = un(n),
      i = Ut(t, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = an(n, i, r)),
      e !== null && (Tt(e, n, r, t), ji(e, n, r));
  },
};
function ic(n, e, t, r, i, s, o) {
  return (
    (n = n.stateNode),
    typeof n.shouldComponentUpdate == "function"
      ? n.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Xr(t, r) || !Xr(i, s)
      : !0
  );
}
function Hf(n, e, t) {
  var r = !1,
    i = fn,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ct(s))
      : ((i = Ye(e) ? Rn : Be.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? lr(n, i) : fn)),
    (e = new e(t, s)),
    (n.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Us),
    (n.stateNode = e),
    (e._reactInternals = n),
    r &&
      ((n = n.stateNode),
      (n.__reactInternalMemoizedUnmaskedChildContext = i),
      (n.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function sc(n, e, t, r) {
  (n = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(t, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(t, r),
    e.state !== n && Us.enqueueReplaceState(e, e.state, null);
}
function ka(n, e, t, r) {
  var i = n.stateNode;
  (i.props = t), (i.state = n.memoizedState), (i.refs = Vf), Pl(n);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (i.context = ct(s))
    : ((s = Ye(e) ? Rn : Be.current), (i.context = lr(n, s))),
    (i.state = n.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (wa(n, e, s, t), (i.state = n.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && Us.enqueueReplaceState(i, i.state, null),
      ys(n, t, i, r),
      (i.state = n.memoizedState)),
    typeof i.componentDidMount == "function" && (n.flags |= 4194308);
}
function Ar(n, e, t) {
  if (
    ((n = t.ref), n !== null && typeof n != "function" && typeof n != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(O(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(O(147, n));
      var i = r,
        s = "" + n;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs;
            a === Vf && (a = i.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof n != "string") throw Error(O(284));
    if (!t._owner) throw Error(O(290, n));
  }
  return n;
}
function Ri(n, e) {
  throw (
    ((n = Object.prototype.toString.call(e)),
    Error(
      O(
        31,
        n === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : n
      )
    ))
  );
}
function oc(n) {
  var e = n._init;
  return e(n._payload);
}
function Wf(n) {
  function e(m, E) {
    if (n) {
      var x = m.deletions;
      x === null ? ((m.deletions = [E]), (m.flags |= 16)) : x.push(E);
    }
  }
  function t(m, E) {
    if (!n) return null;
    for (; E !== null; ) e(m, E), (E = E.sibling);
    return null;
  }
  function r(m, E) {
    for (m = new Map(); E !== null; )
      E.key !== null ? m.set(E.key, E) : m.set(E.index, E), (E = E.sibling);
    return m;
  }
  function i(m, E) {
    return (m = cn(m, E)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, E, x) {
    return (
      (m.index = x),
      n
        ? ((x = m.alternate),
          x !== null
            ? ((x = x.index), x < E ? ((m.flags |= 2), E) : x)
            : ((m.flags |= 2), E))
        : ((m.flags |= 1048576), E)
    );
  }
  function o(m) {
    return n && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, E, x, T) {
    return E === null || E.tag !== 6
      ? ((E = Do(x, m.mode, T)), (E.return = m), E)
      : ((E = i(E, x)), (E.return = m), E);
  }
  function l(m, E, x, T) {
    var S = x.type;
    return S === Kn
      ? c(m, E, x.props.children, T, x.key)
      : E !== null &&
        (E.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === jt &&
            oc(S) === E.type))
      ? ((T = i(E, x.props)), (T.ref = Ar(m, E, x)), (T.return = m), T)
      : ((T = Ji(x.type, x.key, x.props, null, m.mode, T)),
        (T.ref = Ar(m, E, x)),
        (T.return = m),
        T);
  }
  function u(m, E, x, T) {
    return E === null ||
      E.tag !== 4 ||
      E.stateNode.containerInfo !== x.containerInfo ||
      E.stateNode.implementation !== x.implementation
      ? ((E = Ro(x, m.mode, T)), (E.return = m), E)
      : ((E = i(E, x.children || [])), (E.return = m), E);
  }
  function c(m, E, x, T, S) {
    return E === null || E.tag !== 7
      ? ((E = Ln(x, m.mode, T, S)), (E.return = m), E)
      : ((E = i(E, x)), (E.return = m), E);
  }
  function d(m, E, x) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (E = Do("" + E, m.mode, x)), (E.return = m), E;
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case mi:
          return (
            (x = Ji(E.type, E.key, E.props, null, m.mode, x)),
            (x.ref = Ar(m, null, E)),
            (x.return = m),
            x
          );
        case Gn:
          return (E = Ro(E, m.mode, x)), (E.return = m), E;
        case jt:
          var T = E._init;
          return d(m, T(E._payload), x);
      }
      if (Ir(E) || Er(E))
        return (E = Ln(E, m.mode, x, null)), (E.return = m), E;
      Ri(m, E);
    }
    return null;
  }
  function f(m, E, x, T) {
    var S = E !== null ? E.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return S !== null ? null : a(m, E, "" + x, T);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case mi:
          return x.key === S ? l(m, E, x, T) : null;
        case Gn:
          return x.key === S ? u(m, E, x, T) : null;
        case jt:
          return (S = x._init), f(m, E, S(x._payload), T);
      }
      if (Ir(x) || Er(x)) return S !== null ? null : c(m, E, x, T, null);
      Ri(m, x);
    }
    return null;
  }
  function h(m, E, x, T, S) {
    if ((typeof T == "string" && T !== "") || typeof T == "number")
      return (m = m.get(x) || null), a(E, m, "" + T, S);
    if (typeof T == "object" && T !== null) {
      switch (T.$$typeof) {
        case mi:
          return (m = m.get(T.key === null ? x : T.key) || null), l(E, m, T, S);
        case Gn:
          return (m = m.get(T.key === null ? x : T.key) || null), u(E, m, T, S);
        case jt:
          var R = T._init;
          return h(m, E, x, R(T._payload), S);
      }
      if (Ir(T) || Er(T)) return (m = m.get(x) || null), c(E, m, T, S, null);
      Ri(E, T);
    }
    return null;
  }
  function p(m, E, x, T) {
    for (
      var S = null, R = null, L = E, I = (E = 0), _ = null;
      L !== null && I < x.length;
      I++
    ) {
      L.index > I ? ((_ = L), (L = null)) : (_ = L.sibling);
      var D = f(m, L, x[I], T);
      if (D === null) {
        L === null && (L = _);
        break;
      }
      n && L && D.alternate === null && e(m, L),
        (E = s(D, E, I)),
        R === null ? (S = D) : (R.sibling = D),
        (R = D),
        (L = _);
    }
    if (I === x.length) return t(m, L), le && yn(m, I), S;
    if (L === null) {
      for (; I < x.length; I++)
        (L = d(m, x[I], T)),
          L !== null &&
            ((E = s(L, E, I)), R === null ? (S = L) : (R.sibling = L), (R = L));
      return le && yn(m, I), S;
    }
    for (L = r(m, L); I < x.length; I++)
      (_ = h(L, m, I, x[I], T)),
        _ !== null &&
          (n && _.alternate !== null && L.delete(_.key === null ? I : _.key),
          (E = s(_, E, I)),
          R === null ? (S = _) : (R.sibling = _),
          (R = _));
    return (
      n &&
        L.forEach(function (U) {
          return e(m, U);
        }),
      le && yn(m, I),
      S
    );
  }
  function g(m, E, x, T) {
    var S = Er(x);
    if (typeof S != "function") throw Error(O(150));
    if (((x = S.call(x)), x == null)) throw Error(O(151));
    for (
      var R = (S = null), L = E, I = (E = 0), _ = null, D = x.next();
      L !== null && !D.done;
      I++, D = x.next()
    ) {
      L.index > I ? ((_ = L), (L = null)) : (_ = L.sibling);
      var U = f(m, L, D.value, T);
      if (U === null) {
        L === null && (L = _);
        break;
      }
      n && L && U.alternate === null && e(m, L),
        (E = s(U, E, I)),
        R === null ? (S = U) : (R.sibling = U),
        (R = U),
        (L = _);
    }
    if (D.done) return t(m, L), le && yn(m, I), S;
    if (L === null) {
      for (; !D.done; I++, D = x.next())
        (D = d(m, D.value, T)),
          D !== null &&
            ((E = s(D, E, I)), R === null ? (S = D) : (R.sibling = D), (R = D));
      return le && yn(m, I), S;
    }
    for (L = r(m, L); !D.done; I++, D = x.next())
      (D = h(L, m, I, D.value, T)),
        D !== null &&
          (n && D.alternate !== null && L.delete(D.key === null ? I : D.key),
          (E = s(D, E, I)),
          R === null ? (S = D) : (R.sibling = D),
          (R = D));
    return (
      n &&
        L.forEach(function (b) {
          return e(m, b);
        }),
      le && yn(m, I),
      S
    );
  }
  function v(m, E, x, T) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Kn &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case mi:
          e: {
            for (var S = x.key, R = E; R !== null; ) {
              if (R.key === S) {
                if (((S = x.type), S === Kn)) {
                  if (R.tag === 7) {
                    t(m, R.sibling),
                      (E = i(R, x.props.children)),
                      (E.return = m),
                      (m = E);
                    break e;
                  }
                } else if (
                  R.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === jt &&
                    oc(S) === R.type)
                ) {
                  t(m, R.sibling),
                    (E = i(R, x.props)),
                    (E.ref = Ar(m, R, x)),
                    (E.return = m),
                    (m = E);
                  break e;
                }
                t(m, R);
                break;
              } else e(m, R);
              R = R.sibling;
            }
            x.type === Kn
              ? ((E = Ln(x.props.children, m.mode, T, x.key)),
                (E.return = m),
                (m = E))
              : ((T = Ji(x.type, x.key, x.props, null, m.mode, T)),
                (T.ref = Ar(m, E, x)),
                (T.return = m),
                (m = T));
          }
          return o(m);
        case Gn:
          e: {
            for (R = x.key; E !== null; ) {
              if (E.key === R)
                if (
                  E.tag === 4 &&
                  E.stateNode.containerInfo === x.containerInfo &&
                  E.stateNode.implementation === x.implementation
                ) {
                  t(m, E.sibling),
                    (E = i(E, x.children || [])),
                    (E.return = m),
                    (m = E);
                  break e;
                } else {
                  t(m, E);
                  break;
                }
              else e(m, E);
              E = E.sibling;
            }
            (E = Ro(x, m.mode, T)), (E.return = m), (m = E);
          }
          return o(m);
        case jt:
          return (R = x._init), v(m, E, R(x._payload), T);
      }
      if (Ir(x)) return p(m, E, x, T);
      if (Er(x)) return g(m, E, x, T);
      Ri(m, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        E !== null && E.tag === 6
          ? (t(m, E.sibling), (E = i(E, x)), (E.return = m), (m = E))
          : (t(m, E), (E = Do(x, m.mode, T)), (E.return = m), (m = E)),
        o(m))
      : t(m, E);
  }
  return v;
}
var cr = Wf(!0),
  zf = Wf(!1),
  pi = {},
  Ft = pn(pi),
  Jr = pn(pi),
  ei = pn(pi);
function Sn(n) {
  if (n === pi) throw Error(O(174));
  return n;
}
function Ol(n, e) {
  switch ((re(ei, e), re(Jr, n), re(Ft, pi), (n = e.nodeType), n)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : ua(null, "");
      break;
    default:
      (n = n === 8 ? e.parentNode : e),
        (e = n.namespaceURI || null),
        (n = n.tagName),
        (e = ua(e, n));
  }
  oe(Ft), re(Ft, e);
}
function dr() {
  oe(Ft), oe(Jr), oe(ei);
}
function jf(n) {
  Sn(ei.current);
  var e = Sn(Ft.current),
    t = ua(e, n.type);
  e !== t && (re(Jr, n), re(Ft, t));
}
function Bl(n) {
  Jr.current === n && (oe(Ft), oe(Jr));
}
var ce = pn(0);
function Es(n) {
  for (var e = n; e !== null; ) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if ((e.flags & 128) !== 0) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === n) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === n) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var xo = [];
function bl() {
  for (var n = 0; n < xo.length; n++)
    xo[n]._workInProgressVersionPrimary = null;
  xo.length = 0;
}
var Yi = Ht.ReactCurrentDispatcher,
  To = Ht.ReactCurrentBatchConfig,
  Fn = 0,
  fe = null,
  ve = null,
  Le = null,
  vs = !1,
  br = !1,
  ti = 0,
  Og = 0;
function ke() {
  throw Error(O(321));
}
function Nl(n, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < n.length; t++)
    if (!St(n[t], e[t])) return !1;
  return !0;
}
function Ml(n, e, t, r, i, s) {
  if (
    ((Fn = s),
    (fe = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Yi.current = n === null || n.memoizedState === null ? Mg : Ug),
    (n = t(r, i)),
    br)
  ) {
    s = 0;
    do {
      if (((br = !1), (ti = 0), 25 <= s)) throw Error(O(301));
      (s += 1),
        (Le = ve = null),
        (e.updateQueue = null),
        (Yi.current = $g),
        (n = t(r, i));
    } while (br);
  }
  if (
    ((Yi.current = xs),
    (e = ve !== null && ve.next !== null),
    (Fn = 0),
    (Le = ve = fe = null),
    (vs = !1),
    e)
  )
    throw Error(O(300));
  return n;
}
function Ul() {
  var n = ti !== 0;
  return (ti = 0), n;
}
function Lt() {
  var n = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Le === null ? (fe.memoizedState = Le = n) : (Le = Le.next = n), Le;
}
function dt() {
  if (ve === null) {
    var n = fe.alternate;
    n = n !== null ? n.memoizedState : null;
  } else n = ve.next;
  var e = Le === null ? fe.memoizedState : Le.next;
  if (e !== null) (Le = e), (ve = n);
  else {
    if (n === null) throw Error(O(310));
    (ve = n),
      (n = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      Le === null ? (fe.memoizedState = Le = n) : (Le = Le.next = n);
  }
  return Le;
}
function ni(n, e) {
  return typeof e == "function" ? e(n) : e;
}
function So(n) {
  var e = dt(),
    t = e.queue;
  if (t === null) throw Error(O(311));
  t.lastRenderedReducer = n;
  var r = ve,
    i = r.baseQueue,
    s = t.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (t.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Fn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : n(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (fe.lanes |= c),
          (wn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      St(r, e.memoizedState) || (ze = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (t.lastRenderedState = r);
  }
  if (((n = t.interleaved), n !== null)) {
    i = n;
    do (s = i.lane), (fe.lanes |= s), (wn |= s), (i = i.next);
    while (i !== n);
  } else i === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function Ao(n) {
  var e = dt(),
    t = e.queue;
  if (t === null) throw Error(O(311));
  t.lastRenderedReducer = n;
  var r = t.dispatch,
    i = t.pending,
    s = e.memoizedState;
  if (i !== null) {
    t.pending = null;
    var o = (i = i.next);
    do (s = n(s, o.action)), (o = o.next);
    while (o !== i);
    St(s, e.memoizedState) || (ze = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (t.lastRenderedState = s);
  }
  return [s, r];
}
function Yf() {}
function Xf(n, e) {
  var t = fe,
    r = dt(),
    i = e(),
    s = !St(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (ze = !0)),
    (r = r.queue),
    $l(Zf.bind(null, t, r, n), [n]),
    r.getSnapshot !== e || s || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      ri(9, Qf.bind(null, t, r, i, e), void 0, null),
      Ce === null)
    )
      throw Error(O(349));
    (Fn & 30) !== 0 || qf(t, e, i);
  }
  return i;
}
function qf(n, e, t) {
  (n.flags |= 16384),
    (n = { getSnapshot: e, value: t }),
    (e = fe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (fe.updateQueue = e),
        (e.stores = [n]))
      : ((t = e.stores), t === null ? (e.stores = [n]) : t.push(n));
}
function Qf(n, e, t, r) {
  (e.value = t), (e.getSnapshot = r), Jf(e) && eh(n);
}
function Zf(n, e, t) {
  return t(function () {
    Jf(e) && eh(n);
  });
}
function Jf(n) {
  var e = n.getSnapshot;
  n = n.value;
  try {
    var t = e();
    return !St(n, t);
  } catch {
    return !0;
  }
}
function eh(n) {
  var e = Kt(n, 1);
  e !== null && Tt(e, n, 1, -1);
}
function ac(n) {
  var e = Lt();
  return (
    typeof n == "function" && (n = n()),
    (e.memoizedState = e.baseState = n),
    (n = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ni,
      lastRenderedState: n,
    }),
    (e.queue = n),
    (n = n.dispatch = Ng.bind(null, fe, n)),
    [e.memoizedState, n]
  );
}
function ri(n, e, t, r) {
  return (
    (n = { tag: n, create: e, destroy: t, deps: r, next: null }),
    (e = fe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (fe.updateQueue = e),
        (e.lastEffect = n.next = n))
      : ((t = e.lastEffect),
        t === null
          ? (e.lastEffect = n.next = n)
          : ((r = t.next), (t.next = n), (n.next = r), (e.lastEffect = n))),
    n
  );
}
function th() {
  return dt().memoizedState;
}
function Xi(n, e, t, r) {
  var i = Lt();
  (fe.flags |= n),
    (i.memoizedState = ri(1 | e, t, void 0, r === void 0 ? null : r));
}
function $s(n, e, t, r) {
  var i = dt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ve !== null) {
    var o = ve.memoizedState;
    if (((s = o.destroy), r !== null && Nl(r, o.deps))) {
      i.memoizedState = ri(e, t, s, r);
      return;
    }
  }
  (fe.flags |= n), (i.memoizedState = ri(1 | e, t, s, r));
}
function lc(n, e) {
  return Xi(8390656, 8, n, e);
}
function $l(n, e) {
  return $s(2048, 8, n, e);
}
function nh(n, e) {
  return $s(4, 2, n, e);
}
function rh(n, e) {
  return $s(4, 4, n, e);
}
function ih(n, e) {
  if (typeof e == "function")
    return (
      (n = n()),
      e(n),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (n = n()),
      (e.current = n),
      function () {
        e.current = null;
      }
    );
}
function sh(n, e, t) {
  return (
    (t = t != null ? t.concat([n]) : null), $s(4, 4, ih.bind(null, e, n), t)
  );
}
function Gl() {}
function oh(n, e) {
  var t = dt();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Nl(e, r[1])
    ? r[0]
    : ((t.memoizedState = [n, e]), n);
}
function ah(n, e) {
  var t = dt();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Nl(e, r[1])
    ? r[0]
    : ((n = n()), (t.memoizedState = [n, e]), n);
}
function lh(n, e, t) {
  return (Fn & 21) === 0
    ? (n.baseState && ((n.baseState = !1), (ze = !0)), (n.memoizedState = t))
    : (St(t, e) || ((t = df()), (fe.lanes |= t), (wn |= t), (n.baseState = !0)),
      e);
}
function Bg(n, e) {
  var t = Z;
  (Z = t !== 0 && 4 > t ? t : 4), n(!0);
  var r = To.transition;
  To.transition = {};
  try {
    n(!1), e();
  } finally {
    (Z = t), (To.transition = r);
  }
}
function uh() {
  return dt().memoizedState;
}
function bg(n, e, t) {
  var r = un(n);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ch(n))
  )
    dh(e, t);
  else if (((t = Gf(n, e, t, r)), t !== null)) {
    var i = Me();
    Tt(t, n, r, i), fh(t, e, r);
  }
}
function Ng(n, e, t) {
  var r = un(n),
    i = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (ch(n)) dh(e, i);
  else {
    var s = n.alternate;
    if (
      n.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = s(o, t);
        if (((i.hasEagerState = !0), (i.eagerState = a), St(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((i.next = i), _l(e))
            : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (t = Gf(n, e, i, r)),
      t !== null && ((i = Me()), Tt(t, n, r, i), fh(t, e, r));
  }
}
function ch(n) {
  var e = n.alternate;
  return n === fe || (e !== null && e === fe);
}
function dh(n, e) {
  br = vs = !0;
  var t = n.pending;
  t === null ? (e.next = e) : ((e.next = t.next), (t.next = e)),
    (n.pending = e);
}
function fh(n, e, t) {
  if ((t & 4194240) !== 0) {
    var r = e.lanes;
    (r &= n.pendingLanes), (t |= r), (e.lanes = t), El(n, t);
  }
}
var xs = {
    readContext: ct,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useInsertionEffect: ke,
    useLayoutEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useMutableSource: ke,
    useSyncExternalStore: ke,
    useId: ke,
    unstable_isNewReconciler: !1,
  },
  Mg = {
    readContext: ct,
    useCallback: function (n, e) {
      return (Lt().memoizedState = [n, e === void 0 ? null : e]), n;
    },
    useContext: ct,
    useEffect: lc,
    useImperativeHandle: function (n, e, t) {
      return (
        (t = t != null ? t.concat([n]) : null),
        Xi(4194308, 4, ih.bind(null, e, n), t)
      );
    },
    useLayoutEffect: function (n, e) {
      return Xi(4194308, 4, n, e);
    },
    useInsertionEffect: function (n, e) {
      return Xi(4, 2, n, e);
    },
    useMemo: function (n, e) {
      var t = Lt();
      return (
        (e = e === void 0 ? null : e), (n = n()), (t.memoizedState = [n, e]), n
      );
    },
    useReducer: function (n, e, t) {
      var r = Lt();
      return (
        (e = t !== void 0 ? t(e) : e),
        (r.memoizedState = r.baseState = e),
        (n = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: n,
          lastRenderedState: e,
        }),
        (r.queue = n),
        (n = n.dispatch = bg.bind(null, fe, n)),
        [r.memoizedState, n]
      );
    },
    useRef: function (n) {
      var e = Lt();
      return (n = { current: n }), (e.memoizedState = n);
    },
    useState: ac,
    useDebugValue: Gl,
    useDeferredValue: function (n) {
      return (Lt().memoizedState = n);
    },
    useTransition: function () {
      var n = ac(!1),
        e = n[0];
      return (n = Bg.bind(null, n[1])), (Lt().memoizedState = n), [e, n];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (n, e, t) {
      var r = fe,
        i = Lt();
      if (le) {
        if (t === void 0) throw Error(O(407));
        t = t();
      } else {
        if (((t = e()), Ce === null)) throw Error(O(349));
        (Fn & 30) !== 0 || qf(r, e, t);
      }
      i.memoizedState = t;
      var s = { value: t, getSnapshot: e };
      return (
        (i.queue = s),
        lc(Zf.bind(null, r, s, n), [n]),
        (r.flags |= 2048),
        ri(9, Qf.bind(null, r, s, t, e), void 0, null),
        t
      );
    },
    useId: function () {
      var n = Lt(),
        e = Ce.identifierPrefix;
      if (le) {
        var t = Nt,
          r = bt;
        (t = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + t),
          (e = ":" + e + "R" + t),
          (t = ti++),
          0 < t && (e += "H" + t.toString(32)),
          (e += ":");
      } else (t = Og++), (e = ":" + e + "r" + t.toString(32) + ":");
      return (n.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  Ug = {
    readContext: ct,
    useCallback: oh,
    useContext: ct,
    useEffect: $l,
    useImperativeHandle: sh,
    useInsertionEffect: nh,
    useLayoutEffect: rh,
    useMemo: ah,
    useReducer: So,
    useRef: th,
    useState: function () {
      return So(ni);
    },
    useDebugValue: Gl,
    useDeferredValue: function (n) {
      var e = dt();
      return lh(e, ve.memoizedState, n);
    },
    useTransition: function () {
      var n = So(ni)[0],
        e = dt().memoizedState;
      return [n, e];
    },
    useMutableSource: Yf,
    useSyncExternalStore: Xf,
    useId: uh,
    unstable_isNewReconciler: !1,
  },
  $g = {
    readContext: ct,
    useCallback: oh,
    useContext: ct,
    useEffect: $l,
    useImperativeHandle: sh,
    useInsertionEffect: nh,
    useLayoutEffect: rh,
    useMemo: ah,
    useReducer: Ao,
    useRef: th,
    useState: function () {
      return Ao(ni);
    },
    useDebugValue: Gl,
    useDeferredValue: function (n) {
      var e = dt();
      return ve === null ? (e.memoizedState = n) : lh(e, ve.memoizedState, n);
    },
    useTransition: function () {
      var n = Ao(ni)[0],
        e = dt().memoizedState;
      return [n, e];
    },
    useMutableSource: Yf,
    useSyncExternalStore: Xf,
    useId: uh,
    unstable_isNewReconciler: !1,
  };
function fr(n, e) {
  try {
    var t = "",
      r = e;
    do (t += pp(r)), (r = r.return);
    while (r);
    var i = t;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: n, source: e, stack: i, digest: null };
}
function Lo(n, e, t) {
  return {
    value: n,
    source: null,
    stack: t != null ? t : null,
    digest: e != null ? e : null,
  };
}
function _a(n, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var Gg = typeof WeakMap == "function" ? WeakMap : Map;
function hh(n, e, t) {
  (t = Ut(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = e.value;
  return (
    (t.callback = function () {
      Ss || ((Ss = !0), (Ka = r)), _a(n, e);
    }),
    t
  );
}
function ph(n, e, t) {
  (t = Ut(-1, t)), (t.tag = 3);
  var r = n.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (t.payload = function () {
      return r(i);
    }),
      (t.callback = function () {
        _a(n, e);
      });
  }
  var s = n.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (t.callback = function () {
        _a(n, e),
          typeof r != "function" &&
            (ln === null ? (ln = new Set([this])) : ln.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    t
  );
}
function uc(n, e, t) {
  var r = n.pingCache;
  if (r === null) {
    r = n.pingCache = new Gg();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(t) || (i.add(t), (n = tm.bind(null, n, e, t)), e.then(n, n));
}
function cc(n) {
  do {
    var e;
    if (
      ((e = n.tag === 13) &&
        ((e = n.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return n;
    n = n.return;
  } while (n !== null);
  return null;
}
function dc(n, e, t, r, i) {
  return (n.mode & 1) === 0
    ? (n === e
        ? (n.flags |= 65536)
        : ((n.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((e = Ut(-1, 1)), (e.tag = 2), an(t, e, 1))),
          (t.lanes |= 1)),
      n)
    : ((n.flags |= 65536), (n.lanes = i), n);
}
var Kg = Ht.ReactCurrentOwner,
  ze = !1;
function Ne(n, e, t, r) {
  e.child = n === null ? zf(e, null, t, r) : cr(e, n.child, t, r);
}
function fc(n, e, t, r, i) {
  t = t.render;
  var s = e.ref;
  return (
    ir(e, i),
    (r = Ml(n, e, t, r, s, i)),
    (t = Ul()),
    n !== null && !ze
      ? ((e.updateQueue = n.updateQueue),
        (e.flags &= -2053),
        (n.lanes &= ~i),
        Vt(n, e, i))
      : (le && t && Dl(e), (e.flags |= 1), Ne(n, e, r, i), e.child)
  );
}
function hc(n, e, t, r, i) {
  if (n === null) {
    var s = t.type;
    return typeof s == "function" &&
      !Xl(s) &&
      s.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), gh(n, e, s, r, i))
      : ((n = Ji(t.type, null, r, e, e.mode, i)),
        (n.ref = e.ref),
        (n.return = e),
        (e.child = n));
  }
  if (((s = n.child), (n.lanes & i) === 0)) {
    var o = s.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Xr), t(o, r) && n.ref === e.ref)
    )
      return Vt(n, e, i);
  }
  return (
    (e.flags |= 1),
    (n = cn(s, r)),
    (n.ref = e.ref),
    (n.return = e),
    (e.child = n)
  );
}
function gh(n, e, t, r, i) {
  if (n !== null) {
    var s = n.memoizedProps;
    if (Xr(s, r) && n.ref === e.ref)
      if (((ze = !1), (e.pendingProps = r = s), (n.lanes & i) !== 0))
        (n.flags & 131072) !== 0 && (ze = !0);
      else return (e.lanes = n.lanes), Vt(n, e, i);
  }
  return Pa(n, e, t, r, i);
}
function mh(n, e, t) {
  var r = e.pendingProps,
    i = r.children,
    s = n !== null ? n.memoizedState : null;
  if (r.mode === "hidden")
    if ((e.mode & 1) === 0)
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(Zn, Qe),
        (Qe |= t);
    else {
      if ((t & 1073741824) === 0)
        return (
          (n = s !== null ? s.baseLanes | t : t),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: n,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          re(Zn, Qe),
          (Qe |= n),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : t),
        re(Zn, Qe),
        (Qe |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | t), (e.memoizedState = null)) : (r = t),
      re(Zn, Qe),
      (Qe |= r);
  return Ne(n, e, i, t), e.child;
}
function yh(n, e) {
  var t = e.ref;
  ((n === null && t !== null) || (n !== null && n.ref !== t)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Pa(n, e, t, r, i) {
  var s = Ye(t) ? Rn : Be.current;
  return (
    (s = lr(e, s)),
    ir(e, i),
    (t = Ml(n, e, t, r, s, i)),
    (r = Ul()),
    n !== null && !ze
      ? ((e.updateQueue = n.updateQueue),
        (e.flags &= -2053),
        (n.lanes &= ~i),
        Vt(n, e, i))
      : (le && r && Dl(e), (e.flags |= 1), Ne(n, e, t, i), e.child)
  );
}
function pc(n, e, t, r, i) {
  if (Ye(t)) {
    var s = !0;
    fs(e);
  } else s = !1;
  if ((ir(e, i), e.stateNode === null))
    qi(n, e), Hf(e, t, r), ka(e, t, r, i), (r = !0);
  else if (n === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = t.contextType;
    typeof u == "object" && u !== null
      ? (u = ct(u))
      : ((u = Ye(t) ? Rn : Be.current), (u = lr(e, u)));
    var c = t.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && sc(e, o, r, u)),
      (Yt = !1);
    var f = e.memoizedState;
    (o.state = f),
      ys(e, r, o, i),
      (l = e.memoizedState),
      a !== r || f !== l || je.current || Yt
        ? (typeof c == "function" && (wa(e, t, c, r), (l = e.memoizedState)),
          (a = Yt || ic(e, t, a, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      Kf(n, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : gt(e.type, a)),
      (o.props = u),
      (d = e.pendingProps),
      (f = o.context),
      (l = t.contextType),
      typeof l == "object" && l !== null
        ? (l = ct(l))
        : ((l = Ye(t) ? Rn : Be.current), (l = lr(e, l)));
    var h = t.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && sc(e, o, r, l)),
      (Yt = !1),
      (f = e.memoizedState),
      (o.state = f),
      ys(e, r, o, i);
    var p = e.memoizedState;
    a !== d || f !== p || je.current || Yt
      ? (typeof h == "function" && (wa(e, t, h, r), (p = e.memoizedState)),
        (u = Yt || ic(e, t, u, r, f, p, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, p, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, p, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === n.memoizedProps && f === n.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === n.memoizedProps && f === n.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = p)),
        (o.props = r),
        (o.state = p),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === n.memoizedProps && f === n.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === n.memoizedProps && f === n.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return Oa(n, e, t, r, s, i);
}
function Oa(n, e, t, r, i, s) {
  yh(n, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && Ju(e, t, !1), Vt(n, e, s);
  (r = e.stateNode), (Kg.current = e);
  var a =
    o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    n !== null && o
      ? ((e.child = cr(e, n.child, null, s)), (e.child = cr(e, null, a, s)))
      : Ne(n, e, a, s),
    (e.memoizedState = r.state),
    i && Ju(e, t, !0),
    e.child
  );
}
function Eh(n) {
  var e = n.stateNode;
  e.pendingContext
    ? Zu(n, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Zu(n, e.context, !1),
    Ol(n, e.containerInfo);
}
function gc(n, e, t, r, i) {
  return ur(), Il(i), (e.flags |= 256), Ne(n, e, t, r), e.child;
}
var Ba = { dehydrated: null, treeContext: null, retryLane: 0 };
function ba(n) {
  return { baseLanes: n, cachePool: null, transitions: null };
}
function vh(n, e, t) {
  var r = e.pendingProps,
    i = ce.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = n !== null && n.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (n === null || n.memoizedState !== null) && (i |= 1),
    re(ce, i & 1),
    n === null)
  )
    return (
      Ia(e),
      (n = e.memoizedState),
      n !== null && ((n = n.dehydrated), n !== null)
        ? ((e.mode & 1) === 0
            ? (e.lanes = 1)
            : n.data === "$!"
            ? (e.lanes = 8)
            : (e.lanes = 1073741824),
          null)
        : ((o = r.children),
          (n = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              (r & 1) === 0 && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Vs(o, r, 0, null)),
              (n = Ln(n, r, t, null)),
              (s.return = e),
              (n.return = e),
              (s.sibling = n),
              (e.child = s),
              (e.child.memoizedState = ba(t)),
              (e.memoizedState = Ba),
              n)
            : Kl(e, o))
    );
  if (((i = n.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Vg(n, e, o, r, a, i, t);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = n.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      (o & 1) === 0 && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = cn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = cn(a, s)) : ((s = Ln(s, o, t, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = n.child.memoizedState),
      (o =
        o === null
          ? ba(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = n.childLanes & ~t),
      (e.memoizedState = Ba),
      r
    );
  }
  return (
    (s = n.child),
    (n = s.sibling),
    (r = cn(s, { mode: "visible", children: r.children })),
    (e.mode & 1) === 0 && (r.lanes = t),
    (r.return = e),
    (r.sibling = null),
    n !== null &&
      ((t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function Kl(n, e) {
  return (
    (e = Vs({ mode: "visible", children: e }, n.mode, 0, null)),
    (e.return = n),
    (n.child = e)
  );
}
function Ii(n, e, t, r) {
  return (
    r !== null && Il(r),
    cr(e, n.child, null, t),
    (n = Kl(e, e.pendingProps.children)),
    (n.flags |= 2),
    (e.memoizedState = null),
    n
  );
}
function Vg(n, e, t, r, i, s, o) {
  if (t)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Lo(Error(O(422)))), Ii(n, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = n.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = Vs({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Ln(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        (e.mode & 1) !== 0 && cr(e, n.child, null, o),
        (e.child.memoizedState = ba(o)),
        (e.memoizedState = Ba),
        s);
  if ((e.mode & 1) === 0) return Ii(n, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(O(419))), (r = Lo(s, r, void 0)), Ii(n, e, o, r);
  }
  if (((a = (o & n.childLanes) !== 0), ze || a)) {
    if (((r = Ce), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = (i & (r.suspendedLanes | o)) !== 0 ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Kt(n, i), Tt(r, n, i, -1));
    }
    return Yl(), (r = Lo(Error(O(421)))), Ii(n, e, o, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = n.child),
      (e = nm.bind(null, n)),
      (i._reactRetry = e),
      null)
    : ((n = s.treeContext),
      (Ze = on(i.nextSibling)),
      (Je = e),
      (le = !0),
      (yt = null),
      n !== null &&
        ((ot[at++] = bt),
        (ot[at++] = Nt),
        (ot[at++] = In),
        (bt = n.id),
        (Nt = n.overflow),
        (In = e)),
      (e = Kl(e, r.children)),
      (e.flags |= 4096),
      e);
}
function mc(n, e, t) {
  n.lanes |= e;
  var r = n.alternate;
  r !== null && (r.lanes |= e), Fa(n.return, e, t);
}
function Co(n, e, t, r, i) {
  var s = n.memoizedState;
  s === null
    ? (n.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = t),
      (s.tailMode = i));
}
function xh(n, e, t) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ne(n, e, r.children, t), (r = ce.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (n !== null && (n.flags & 128) !== 0)
      e: for (n = e.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && mc(n, t, e);
        else if (n.tag === 19) mc(n, t, e);
        else if (n.child !== null) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === e) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) break e;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    r &= 1;
  }
  if ((re(ce, r), (e.mode & 1) === 0)) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (t = e.child, i = null; t !== null; )
          (n = t.alternate),
            n !== null && Es(n) === null && (i = t),
            (t = t.sibling);
        (t = i),
          t === null
            ? ((i = e.child), (e.child = null))
            : ((i = t.sibling), (t.sibling = null)),
          Co(e, !1, i, t, s);
        break;
      case "backwards":
        for (t = null, i = e.child, e.child = null; i !== null; ) {
          if (((n = i.alternate), n !== null && Es(n) === null)) {
            e.child = i;
            break;
          }
          (n = i.sibling), (i.sibling = t), (t = i), (i = n);
        }
        Co(e, !0, t, null, s);
        break;
      case "together":
        Co(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function qi(n, e) {
  (e.mode & 1) === 0 &&
    n !== null &&
    ((n.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Vt(n, e, t) {
  if (
    (n !== null && (e.dependencies = n.dependencies),
    (wn |= e.lanes),
    (t & e.childLanes) === 0)
  )
    return null;
  if (n !== null && e.child !== n.child) throw Error(O(153));
  if (e.child !== null) {
    for (
      n = e.child, t = cn(n, n.pendingProps), e.child = t, t.return = e;
      n.sibling !== null;

    )
      (n = n.sibling), (t = t.sibling = cn(n, n.pendingProps)), (t.return = e);
    t.sibling = null;
  }
  return e.child;
}
function Hg(n, e, t) {
  switch (e.tag) {
    case 3:
      Eh(e), ur();
      break;
    case 5:
      jf(e);
      break;
    case 1:
      Ye(e.type) && fs(e);
      break;
    case 4:
      Ol(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      re(gs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(ce, ce.current & 1), (e.flags |= 128), null)
          : (t & e.child.childLanes) !== 0
          ? vh(n, e, t)
          : (re(ce, ce.current & 1),
            (n = Vt(n, e, t)),
            n !== null ? n.sibling : null);
      re(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (t & e.childLanes) !== 0), (n.flags & 128) !== 0)) {
        if (r) return xh(n, e, t);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        re(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), mh(n, e, t);
  }
  return Vt(n, e, t);
}
var Th, Na, Sh, Ah;
Th = function (n, e) {
  for (var t = e.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) n.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Na = function () {};
Sh = function (n, e, t, r) {
  var i = n.memoizedProps;
  if (i !== r) {
    (n = e.stateNode), Sn(Ft.current);
    var s = null;
    switch (t) {
      case "input":
        (i = sa(n, i)), (r = sa(n, r)), (s = []);
        break;
      case "select":
        (i = he({}, i, { value: void 0 })),
          (r = he({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = la(n, i)), (r = la(n, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (n.onclick = cs);
    }
    ca(t, r);
    var o;
    t = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Kr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (t || (t = {}), (t[o] = l[o]));
          } else t || (s || (s = []), s.push(u, t)), (t = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Kr.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ie("scroll", n),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    t && (s = s || []).push("style", t);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Ah = function (n, e, t, r) {
  t !== r && (e.flags |= 4);
};
function Lr(n, e) {
  if (!le)
    switch (n.tailMode) {
      case "hidden":
        e = n.tail;
        for (var t = null; e !== null; )
          e.alternate !== null && (t = e), (e = e.sibling);
        t === null ? (n.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = n.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? e || n.tail === null
            ? (n.tail = null)
            : (n.tail.sibling = null)
          : (r.sibling = null);
    }
}
function _e(n) {
  var e = n.alternate !== null && n.alternate.child === n.child,
    t = 0,
    r = 0;
  if (e)
    for (var i = n.child; i !== null; )
      (t |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = n),
        (i = i.sibling);
  else
    for (i = n.child; i !== null; )
      (t |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = n),
        (i = i.sibling);
  return (n.subtreeFlags |= r), (n.childLanes = t), e;
}
function Wg(n, e, t) {
  var r = e.pendingProps;
  switch ((Rl(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(e), null;
    case 1:
      return Ye(e.type) && ds(), _e(e), null;
    case 3:
      return (
        (r = e.stateNode),
        dr(),
        oe(je),
        oe(Be),
        bl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (n === null || n.child === null) &&
          (Di(e)
            ? (e.flags |= 4)
            : n === null ||
              (n.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
              ((e.flags |= 1024), yt !== null && (Wa(yt), (yt = null)))),
        Na(n, e),
        _e(e),
        null
      );
    case 5:
      Bl(e);
      var i = Sn(ei.current);
      if (((t = e.type), n !== null && e.stateNode != null))
        Sh(n, e, t, r, i),
          n.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(O(166));
          return _e(e), null;
        }
        if (((n = Sn(Ft.current)), Di(e))) {
          (r = e.stateNode), (t = e.type);
          var s = e.memoizedProps;
          switch (((r[Rt] = e), (r[Zr] = s), (n = (e.mode & 1) !== 0), t)) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < wr.length; i++) ie(wr[i], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie("error", r), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              Cu(r, s), ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ie("invalid", r);
              break;
            case "textarea":
              Ru(r, s), ie("invalid", r);
          }
          ca(t, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, a, n),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, a, n),
                    (i = ["children", "" + a]))
                : Kr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ie("scroll", r);
            }
          switch (t) {
            case "input":
              yi(r), Du(r, s, !0);
              break;
            case "textarea":
              yi(r), Iu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = cs);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            n === "http://www.w3.org/1999/xhtml" && (n = Xd(t)),
            n === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((n = o.createElement("div")),
                  (n.innerHTML = "<script></script>"),
                  (n = n.removeChild(n.firstChild)))
                : typeof r.is == "string"
                ? (n = o.createElement(t, { is: r.is }))
                : ((n = o.createElement(t)),
                  t === "select" &&
                    ((o = n),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (n = o.createElementNS(n, t)),
            (n[Rt] = e),
            (n[Zr] = r),
            Th(n, e, !1, !1),
            (e.stateNode = n);
          e: {
            switch (((o = da(t, r)), t)) {
              case "dialog":
                ie("cancel", n), ie("close", n), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", n), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < wr.length; i++) ie(wr[i], n);
                i = r;
                break;
              case "source":
                ie("error", n), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ie("error", n), ie("load", n), (i = r);
                break;
              case "details":
                ie("toggle", n), (i = r);
                break;
              case "input":
                Cu(n, r), (i = sa(n, r)), ie("invalid", n);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (n._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = he({}, r, { value: void 0 })),
                  ie("invalid", n);
                break;
              case "textarea":
                Ru(n, r), (i = la(n, r)), ie("invalid", n);
                break;
              default:
                i = r;
            }
            ca(t, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Zd(n, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && qd(n, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (t !== "textarea" || l !== "") && Vr(n, l)
                    : typeof l == "number" && Vr(n, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Kr.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && ie("scroll", n)
                      : l != null && fl(n, s, l, o));
              }
            switch (t) {
              case "input":
                yi(n), Du(n, r, !1);
                break;
              case "textarea":
                yi(n), Iu(n);
                break;
              case "option":
                r.value != null && n.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                (n.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? er(n, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      er(n, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (n.onclick = cs);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return _e(e), null;
    case 6:
      if (n && e.stateNode != null) Ah(n, e, n.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(O(166));
        if (((t = Sn(ei.current)), Sn(Ft.current), Di(e))) {
          if (
            ((r = e.stateNode),
            (t = e.memoizedProps),
            (r[Rt] = e),
            (s = r.nodeValue !== t) && ((n = Je), n !== null))
          )
            switch (n.tag) {
              case 3:
                Ci(r.nodeValue, t, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ci(r.nodeValue, t, (n.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Rt] = e),
            (e.stateNode = r);
      }
      return _e(e), null;
    case 13:
      if (
        (oe(ce),
        (r = e.memoizedState),
        n === null ||
          (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
      ) {
        if (le && Ze !== null && (e.mode & 1) !== 0 && (e.flags & 128) === 0)
          $f(), ur(), (e.flags |= 98560), (s = !1);
        else if (((s = Di(e)), r !== null && r.dehydrated !== null)) {
          if (n === null) {
            if (!s) throw Error(O(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(O(317));
            s[Rt] = e;
          } else
            ur(),
              (e.flags & 128) === 0 && (e.memoizedState = null),
              (e.flags |= 4);
          _e(e), (s = !1);
        } else yt !== null && (Wa(yt), (yt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return (e.flags & 128) !== 0
        ? ((e.lanes = t), e)
        : ((r = r !== null),
          r !== (n !== null && n.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            (e.mode & 1) !== 0 &&
              (n === null || (ce.current & 1) !== 0
                ? xe === 0 && (xe = 3)
                : Yl())),
          e.updateQueue !== null && (e.flags |= 4),
          _e(e),
          null);
    case 4:
      return (
        dr(), Na(n, e), n === null && qr(e.stateNode.containerInfo), _e(e), null
      );
    case 10:
      return kl(e.type._context), _e(e), null;
    case 17:
      return Ye(e.type) && ds(), _e(e), null;
    case 19:
      if ((oe(ce), (s = e.memoizedState), s === null)) return _e(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Lr(s, !1);
        else {
          if (xe !== 0 || (n !== null && (n.flags & 128) !== 0))
            for (n = e.child; n !== null; ) {
              if (((o = Es(n)), o !== null)) {
                for (
                  e.flags |= 128,
                    Lr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = t,
                    t = e.child;
                  t !== null;

                )
                  (s = t),
                    (n = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = n),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (n = o.dependencies),
                        (s.dependencies =
                          n === null
                            ? null
                            : {
                                lanes: n.lanes,
                                firstContext: n.firstContext,
                              })),
                    (t = t.sibling);
                return re(ce, (ce.current & 1) | 2), e.child;
              }
              n = n.sibling;
            }
          s.tail !== null &&
            ge() > hr &&
            ((e.flags |= 128), (r = !0), Lr(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((n = Es(o)), n !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (t = n.updateQueue),
              t !== null && ((e.updateQueue = t), (e.flags |= 4)),
              Lr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !le)
            )
              return _e(e), null;
          } else
            2 * ge() - s.renderingStartTime > hr &&
              t !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Lr(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((t = s.last),
            t !== null ? (t.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = ge()),
          (e.sibling = null),
          (t = ce.current),
          re(ce, r ? (t & 1) | 2 : t & 1),
          e)
        : (_e(e), null);
    case 22:
    case 23:
      return (
        jl(),
        (r = e.memoizedState !== null),
        n !== null && (n.memoizedState !== null) !== r && (e.flags |= 8192),
        r && (e.mode & 1) !== 0
          ? (Qe & 1073741824) !== 0 &&
            (_e(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : _e(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, e.tag));
}
function zg(n, e) {
  switch ((Rl(e), e.tag)) {
    case 1:
      return (
        Ye(e.type) && ds(),
        (n = e.flags),
        n & 65536 ? ((e.flags = (n & -65537) | 128), e) : null
      );
    case 3:
      return (
        dr(),
        oe(je),
        oe(Be),
        bl(),
        (n = e.flags),
        (n & 65536) !== 0 && (n & 128) === 0
          ? ((e.flags = (n & -65537) | 128), e)
          : null
      );
    case 5:
      return Bl(e), null;
    case 13:
      if (
        (oe(ce), (n = e.memoizedState), n !== null && n.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(O(340));
        ur();
      }
      return (
        (n = e.flags), n & 65536 ? ((e.flags = (n & -65537) | 128), e) : null
      );
    case 19:
      return oe(ce), null;
    case 4:
      return dr(), null;
    case 10:
      return kl(e.type._context), null;
    case 22:
    case 23:
      return jl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fi = !1,
  Oe = !1,
  jg = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Qn(n, e) {
  var t = n.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        pe(n, e, r);
      }
    else t.current = null;
}
function Ma(n, e, t) {
  try {
    t();
  } catch (r) {
    pe(n, e, r);
  }
}
var yc = !1;
function Yg(n, e) {
  if (((Ta = as), (n = Rf()), Cl(n))) {
    if ("selectionStart" in n)
      var t = { start: n.selectionStart, end: n.selectionEnd };
    else
      e: {
        t = ((t = n.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, s.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = n,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== t || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === n) break t;
              if (
                (f === t && ++u === i && (a = o),
                f === s && ++c === r && (l = o),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          t = a === -1 || l === -1 ? null : { start: a, end: l };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Sa = { focusedElem: n, selectionRange: t }, as = !1, M = e; M !== null; )
    if (((e = M), (n = e.child), (e.subtreeFlags & 1028) !== 0 && n !== null))
      (n.return = e), (M = n);
    else
      for (; M !== null; ) {
        e = M;
        try {
          var p = e.alternate;
          if ((e.flags & 1024) !== 0)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var g = p.memoizedProps,
                    v = p.memoizedState,
                    m = e.stateNode,
                    E = m.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? g : gt(e.type, g),
                      v
                    );
                  m.__reactInternalSnapshotBeforeUpdate = E;
                }
                break;
              case 3:
                var x = e.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (T) {
          pe(e, e.return, T);
        }
        if (((n = e.sibling), n !== null)) {
          (n.return = e.return), (M = n);
          break;
        }
        M = e.return;
      }
  return (p = yc), (yc = !1), p;
}
function Nr(n, e, t) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & n) === n) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Ma(e, t, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Gs(n, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var t = (e = e.next);
    do {
      if ((t.tag & n) === n) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== e);
  }
}
function Ua(n) {
  var e = n.ref;
  if (e !== null) {
    var t = n.stateNode;
    switch (n.tag) {
      case 5:
        n = t;
        break;
      default:
        n = t;
    }
    typeof e == "function" ? e(n) : (e.current = n);
  }
}
function Lh(n) {
  var e = n.alternate;
  e !== null && ((n.alternate = null), Lh(e)),
    (n.child = null),
    (n.deletions = null),
    (n.sibling = null),
    n.tag === 5 &&
      ((e = n.stateNode),
      e !== null &&
        (delete e[Rt], delete e[Zr], delete e[Ca], delete e[wg], delete e[kg])),
    (n.stateNode = null),
    (n.return = null),
    (n.dependencies = null),
    (n.memoizedProps = null),
    (n.memoizedState = null),
    (n.pendingProps = null),
    (n.stateNode = null),
    (n.updateQueue = null);
}
function Ch(n) {
  return n.tag === 5 || n.tag === 3 || n.tag === 4;
}
function Ec(n) {
  e: for (;;) {
    for (; n.sibling === null; ) {
      if (n.return === null || Ch(n.return)) return null;
      n = n.return;
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

    ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.flags & 2)) return n.stateNode;
  }
}
function $a(n, e, t) {
  var r = n.tag;
  if (r === 5 || r === 6)
    (n = n.stateNode),
      e
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(n, e)
          : t.insertBefore(n, e)
        : (t.nodeType === 8
            ? ((e = t.parentNode), e.insertBefore(n, t))
            : ((e = t), e.appendChild(n)),
          (t = t._reactRootContainer),
          t != null || e.onclick !== null || (e.onclick = cs));
  else if (r !== 4 && ((n = n.child), n !== null))
    for ($a(n, e, t), n = n.sibling; n !== null; ) $a(n, e, t), (n = n.sibling);
}
function Ga(n, e, t) {
  var r = n.tag;
  if (r === 5 || r === 6)
    (n = n.stateNode), e ? t.insertBefore(n, e) : t.appendChild(n);
  else if (r !== 4 && ((n = n.child), n !== null))
    for (Ga(n, e, t), n = n.sibling; n !== null; ) Ga(n, e, t), (n = n.sibling);
}
var De = null,
  mt = !1;
function Wt(n, e, t) {
  for (t = t.child; t !== null; ) Dh(n, e, t), (t = t.sibling);
}
function Dh(n, e, t) {
  if (It && typeof It.onCommitFiberUnmount == "function")
    try {
      It.onCommitFiberUnmount(Ps, t);
    } catch {}
  switch (t.tag) {
    case 5:
      Oe || Qn(t, e);
    case 6:
      var r = De,
        i = mt;
      (De = null),
        Wt(n, e, t),
        (De = r),
        (mt = i),
        De !== null &&
          (mt
            ? ((n = De),
              (t = t.stateNode),
              n.nodeType === 8 ? n.parentNode.removeChild(t) : n.removeChild(t))
            : De.removeChild(t.stateNode));
      break;
    case 18:
      De !== null &&
        (mt
          ? ((n = De),
            (t = t.stateNode),
            n.nodeType === 8
              ? Eo(n.parentNode, t)
              : n.nodeType === 1 && Eo(n, t),
            jr(n))
          : Eo(De, t.stateNode));
      break;
    case 4:
      (r = De),
        (i = mt),
        (De = t.stateNode.containerInfo),
        (mt = !0),
        Wt(n, e, t),
        (De = r),
        (mt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && Ma(t, e, o),
            (i = i.next);
        } while (i !== r);
      }
      Wt(n, e, t);
      break;
    case 1:
      if (
        !Oe &&
        (Qn(t, e),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          pe(t, e, a);
        }
      Wt(n, e, t);
      break;
    case 21:
      Wt(n, e, t);
      break;
    case 22:
      t.mode & 1
        ? ((Oe = (r = Oe) || t.memoizedState !== null), Wt(n, e, t), (Oe = r))
        : Wt(n, e, t);
      break;
    default:
      Wt(n, e, t);
  }
}
function vc(n) {
  var e = n.updateQueue;
  if (e !== null) {
    n.updateQueue = null;
    var t = n.stateNode;
    t === null && (t = n.stateNode = new jg()),
      e.forEach(function (r) {
        var i = rm.bind(null, n, r);
        t.has(r) || (t.add(r), r.then(i, i));
      });
  }
}
function ft(n, e) {
  var t = e.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      try {
        var s = n,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (De = a.stateNode), (mt = !1);
              break e;
            case 3:
              (De = a.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (De = a.stateNode.containerInfo), (mt = !0);
              break e;
          }
          a = a.return;
        }
        if (De === null) throw Error(O(160));
        Dh(s, o, i), (De = null), (mt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        pe(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) Rh(e, n), (e = e.sibling);
}
function Rh(n, e) {
  var t = n.alternate,
    r = n.flags;
  switch (n.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(e, n), At(n), r & 4)) {
        try {
          Nr(3, n, n.return), Gs(3, n);
        } catch (g) {
          pe(n, n.return, g);
        }
        try {
          Nr(5, n, n.return);
        } catch (g) {
          pe(n, n.return, g);
        }
      }
      break;
    case 1:
      ft(e, n), At(n), r & 512 && t !== null && Qn(t, t.return);
      break;
    case 5:
      if (
        (ft(e, n),
        At(n),
        r & 512 && t !== null && Qn(t, t.return),
        n.flags & 32)
      ) {
        var i = n.stateNode;
        try {
          Vr(i, "");
        } catch (g) {
          pe(n, n.return, g);
        }
      }
      if (r & 4 && ((i = n.stateNode), i != null)) {
        var s = n.memoizedProps,
          o = t !== null ? t.memoizedProps : s,
          a = n.type,
          l = n.updateQueue;
        if (((n.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && jd(i, s),
              da(a, o);
            var u = da(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? Zd(i, d)
                : c === "dangerouslySetInnerHTML"
                ? qd(i, d)
                : c === "children"
                ? Vr(i, d)
                : fl(i, c, d, u);
            }
            switch (a) {
              case "input":
                oa(i, s);
                break;
              case "textarea":
                Yd(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var h = s.value;
                h != null
                  ? er(i, !!s.multiple, h, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? er(i, !!s.multiple, s.defaultValue, !0)
                      : er(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Zr] = s;
          } catch (g) {
            pe(n, n.return, g);
          }
      }
      break;
    case 6:
      if ((ft(e, n), At(n), r & 4)) {
        if (n.stateNode === null) throw Error(O(162));
        (i = n.stateNode), (s = n.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (g) {
          pe(n, n.return, g);
        }
      }
      break;
    case 3:
      if (
        (ft(e, n), At(n), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          jr(e.containerInfo);
        } catch (g) {
          pe(n, n.return, g);
        }
      break;
    case 4:
      ft(e, n), At(n);
      break;
    case 13:
      ft(e, n),
        At(n),
        (i = n.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Wl = ge())),
        r & 4 && vc(n);
      break;
    case 22:
      if (
        ((c = t !== null && t.memoizedState !== null),
        n.mode & 1 ? ((Oe = (u = Oe) || c), ft(e, n), (Oe = u)) : ft(e, n),
        At(n),
        r & 8192)
      ) {
        if (
          ((u = n.memoizedState !== null),
          (n.stateNode.isHidden = u) && !c && (n.mode & 1) !== 0)
        )
          for (M = n, c = n.child; c !== null; ) {
            for (d = M = c; M !== null; ) {
              switch (((f = M), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nr(4, f, f.return);
                  break;
                case 1:
                  Qn(f, f.return);
                  var p = f.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = f), (t = f.return);
                    try {
                      (e = r),
                        (p.props = e.memoizedProps),
                        (p.state = e.memoizedState),
                        p.componentWillUnmount();
                    } catch (g) {
                      pe(r, t, g);
                    }
                  }
                  break;
                case 5:
                  Qn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Tc(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (M = h)) : Tc(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = n; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Qd("display", o)));
              } catch (g) {
                pe(n, n.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                pe(n, n.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === n) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === n) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === n) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ft(e, n), At(n), r & 4 && vc(n);
      break;
    case 21:
      break;
    default:
      ft(e, n), At(n);
  }
}
function At(n) {
  var e = n.flags;
  if (e & 2) {
    try {
      e: {
        for (var t = n.return; t !== null; ) {
          if (Ch(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Vr(i, ""), (r.flags &= -33));
          var s = Ec(n);
          Ga(n, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Ec(n);
          $a(n, a, o);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      pe(n, n.return, l);
    }
    n.flags &= -3;
  }
  e & 4096 && (n.flags &= -4097);
}
function Xg(n, e, t) {
  (M = n), Ih(n);
}
function Ih(n, e, t) {
  for (var r = (n.mode & 1) !== 0; M !== null; ) {
    var i = M,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Fi;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Oe;
        a = Fi;
        var u = Oe;
        if (((Fi = o), (Oe = l) && !u))
          for (M = i; M !== null; )
            (o = M),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Sc(i)
                : l !== null
                ? ((l.return = o), (M = l))
                : Sc(i);
        for (; s !== null; ) (M = s), Ih(s), (s = s.sibling);
        (M = i), (Fi = a), (Oe = u);
      }
      xc(n);
    } else
      (i.subtreeFlags & 8772) !== 0 && s !== null
        ? ((s.return = i), (M = s))
        : xc(n);
  }
}
function xc(n) {
  for (; M !== null; ) {
    var e = M;
    if ((e.flags & 8772) !== 0) {
      var t = e.alternate;
      try {
        if ((e.flags & 8772) !== 0)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Oe || Gs(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Oe)
                if (t === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? t.memoizedProps
                      : gt(e.type, t.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = e.updateQueue;
              s !== null && rc(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((t = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      t = e.child.stateNode;
                      break;
                    case 1:
                      t = e.child.stateNode;
                  }
                rc(e, o, t);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (t === null && e.flags & 4) {
                t = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && t.focus();
                    break;
                  case "img":
                    l.src && (t.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && jr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Oe || (e.flags & 512 && Ua(e));
      } catch (f) {
        pe(e, e.return, f);
      }
    }
    if (e === n) {
      M = null;
      break;
    }
    if (((t = e.sibling), t !== null)) {
      (t.return = e.return), (M = t);
      break;
    }
    M = e.return;
  }
}
function Tc(n) {
  for (; M !== null; ) {
    var e = M;
    if (e === n) {
      M = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      (t.return = e.return), (M = t);
      break;
    }
    M = e.return;
  }
}
function Sc(n) {
  for (; M !== null; ) {
    var e = M;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            Gs(4, e);
          } catch (l) {
            pe(e, t, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              pe(e, i, l);
            }
          }
          var s = e.return;
          try {
            Ua(e);
          } catch (l) {
            pe(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Ua(e);
          } catch (l) {
            pe(e, o, l);
          }
      }
    } catch (l) {
      pe(e, e.return, l);
    }
    if (e === n) {
      M = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (M = a);
      break;
    }
    M = e.return;
  }
}
var qg = Math.ceil,
  Ts = Ht.ReactCurrentDispatcher,
  Vl = Ht.ReactCurrentOwner,
  ut = Ht.ReactCurrentBatchConfig,
  q = 0,
  Ce = null,
  Ee = null,
  Fe = 0,
  Qe = 0,
  Zn = pn(0),
  xe = 0,
  ii = null,
  wn = 0,
  Ks = 0,
  Hl = 0,
  Mr = null,
  He = null,
  Wl = 0,
  hr = 1 / 0,
  _t = null,
  Ss = !1,
  Ka = null,
  ln = null,
  wi = !1,
  en = null,
  As = 0,
  Ur = 0,
  Va = null,
  Qi = -1,
  Zi = 0;
function Me() {
  return (q & 6) !== 0 ? ge() : Qi !== -1 ? Qi : (Qi = ge());
}
function un(n) {
  return (n.mode & 1) === 0
    ? 1
    : (q & 2) !== 0 && Fe !== 0
    ? Fe & -Fe
    : Pg.transition !== null
    ? (Zi === 0 && (Zi = df()), Zi)
    : ((n = Z),
      n !== 0 || ((n = window.event), (n = n === void 0 ? 16 : Ef(n.type))),
      n);
}
function Tt(n, e, t, r) {
  if (50 < Ur) throw ((Ur = 0), (Va = null), Error(O(185)));
  di(n, t, r),
    ((q & 2) === 0 || n !== Ce) &&
      (n === Ce && ((q & 2) === 0 && (Ks |= t), xe === 4 && Zt(n, Fe)),
      Xe(n, r),
      t === 1 &&
        q === 0 &&
        (e.mode & 1) === 0 &&
        ((hr = ge() + 500), Ms && gn()));
}
function Xe(n, e) {
  var t = n.callbackNode;
  Pp(n, e);
  var r = os(n, n === Ce ? Fe : 0);
  if (r === 0)
    t !== null && ku(t), (n.callbackNode = null), (n.callbackPriority = 0);
  else if (((e = r & -r), n.callbackPriority !== e)) {
    if ((t != null && ku(t), e === 1))
      n.tag === 0 ? _g(Ac.bind(null, n)) : Nf(Ac.bind(null, n)),
        Ig(function () {
          (q & 6) === 0 && gn();
        }),
        (t = null);
    else {
      switch (ff(r)) {
        case 1:
          t = yl;
          break;
        case 4:
          t = uf;
          break;
        case 16:
          t = ss;
          break;
        case 536870912:
          t = cf;
          break;
        default:
          t = ss;
      }
      t = bh(t, Fh.bind(null, n));
    }
    (n.callbackPriority = e), (n.callbackNode = t);
  }
}
function Fh(n, e) {
  if (((Qi = -1), (Zi = 0), (q & 6) !== 0)) throw Error(O(327));
  var t = n.callbackNode;
  if (sr() && n.callbackNode !== t) return null;
  var r = os(n, n === Ce ? Fe : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & n.expiredLanes) !== 0 || e) e = Ls(n, r);
  else {
    e = r;
    var i = q;
    q |= 2;
    var s = kh();
    (Ce !== n || Fe !== e) && ((_t = null), (hr = ge() + 500), An(n, e));
    do
      try {
        Jg();
        break;
      } catch (a) {
        wh(n, a);
      }
    while (1);
    wl(),
      (Ts.current = s),
      (q = i),
      Ee !== null ? (e = 0) : ((Ce = null), (Fe = 0), (e = xe));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = ma(n)), i !== 0 && ((r = i), (e = Ha(n, i)))), e === 1)
    )
      throw ((t = ii), An(n, 0), Zt(n, r), Xe(n, ge()), t);
    if (e === 6) Zt(n, r);
    else {
      if (
        ((i = n.current.alternate),
        (r & 30) === 0 &&
          !Qg(i) &&
          ((e = Ls(n, r)),
          e === 2 && ((s = ma(n)), s !== 0 && ((r = s), (e = Ha(n, s)))),
          e === 1))
      )
        throw ((t = ii), An(n, 0), Zt(n, r), Xe(n, ge()), t);
      switch (((n.finishedWork = i), (n.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          En(n, He, _t);
          break;
        case 3:
          if (
            (Zt(n, r), (r & 130023424) === r && ((e = Wl + 500 - ge()), 10 < e))
          ) {
            if (os(n, 0) !== 0) break;
            if (((i = n.suspendedLanes), (i & r) !== r)) {
              Me(), (n.pingedLanes |= n.suspendedLanes & i);
              break;
            }
            n.timeoutHandle = La(En.bind(null, n, He, _t), e);
            break;
          }
          En(n, He, _t);
          break;
        case 4:
          if ((Zt(n, r), (r & 4194240) === r)) break;
          for (e = n.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - xt(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * qg(r / 1960)) - r),
            10 < r)
          ) {
            n.timeoutHandle = La(En.bind(null, n, He, _t), r);
            break;
          }
          En(n, He, _t);
          break;
        case 5:
          En(n, He, _t);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Xe(n, ge()), n.callbackNode === t ? Fh.bind(null, n) : null;
}
function Ha(n, e) {
  var t = Mr;
  return (
    n.current.memoizedState.isDehydrated && (An(n, e).flags |= 256),
    (n = Ls(n, e)),
    n !== 2 && ((e = He), (He = t), e !== null && Wa(e)),
    n
  );
}
function Wa(n) {
  He === null ? (He = n) : He.push.apply(He, n);
}
function Qg(n) {
  for (var e = n; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var i = t[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!St(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = e.child), e.subtreeFlags & 16384 && t !== null))
      (t.return = e), (e = t);
    else {
      if (e === n) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === n) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Zt(n, e) {
  for (
    e &= ~Hl,
      e &= ~Ks,
      n.suspendedLanes |= e,
      n.pingedLanes &= ~e,
      n = n.expirationTimes;
    0 < e;

  ) {
    var t = 31 - xt(e),
      r = 1 << t;
    (n[t] = -1), (e &= ~r);
  }
}
function Ac(n) {
  if ((q & 6) !== 0) throw Error(O(327));
  sr();
  var e = os(n, 0);
  if ((e & 1) === 0) return Xe(n, ge()), null;
  var t = Ls(n, e);
  if (n.tag !== 0 && t === 2) {
    var r = ma(n);
    r !== 0 && ((e = r), (t = Ha(n, r)));
  }
  if (t === 1) throw ((t = ii), An(n, 0), Zt(n, e), Xe(n, ge()), t);
  if (t === 6) throw Error(O(345));
  return (
    (n.finishedWork = n.current.alternate),
    (n.finishedLanes = e),
    En(n, He, _t),
    Xe(n, ge()),
    null
  );
}
function zl(n, e) {
  var t = q;
  q |= 1;
  try {
    return n(e);
  } finally {
    (q = t), q === 0 && ((hr = ge() + 500), Ms && gn());
  }
}
function kn(n) {
  en !== null && en.tag === 0 && (q & 6) === 0 && sr();
  var e = q;
  q |= 1;
  var t = ut.transition,
    r = Z;
  try {
    if (((ut.transition = null), (Z = 1), n)) return n();
  } finally {
    (Z = r), (ut.transition = t), (q = e), (q & 6) === 0 && gn();
  }
}
function jl() {
  (Qe = Zn.current), oe(Zn);
}
function An(n, e) {
  (n.finishedWork = null), (n.finishedLanes = 0);
  var t = n.timeoutHandle;
  if ((t !== -1 && ((n.timeoutHandle = -1), Rg(t)), Ee !== null))
    for (t = Ee.return; t !== null; ) {
      var r = t;
      switch ((Rl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ds();
          break;
        case 3:
          dr(), oe(je), oe(Be), bl();
          break;
        case 5:
          Bl(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          oe(ce);
          break;
        case 19:
          oe(ce);
          break;
        case 10:
          kl(r.type._context);
          break;
        case 22:
        case 23:
          jl();
      }
      t = t.return;
    }
  if (
    ((Ce = n),
    (Ee = n = cn(n.current, null)),
    (Fe = Qe = e),
    (xe = 0),
    (ii = null),
    (Hl = Ks = wn = 0),
    (He = Mr = null),
    Tn !== null)
  ) {
    for (e = 0; e < Tn.length; e++)
      if (((t = Tn[e]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var i = r.next,
          s = t.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        t.pending = r;
      }
    Tn = null;
  }
  return n;
}
function wh(n, e) {
  do {
    var t = Ee;
    try {
      if ((wl(), (Yi.current = xs), vs)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        vs = !1;
      }
      if (
        ((Fn = 0),
        (Le = ve = fe = null),
        (br = !1),
        (ti = 0),
        (Vl.current = null),
        t === null || t.return === null)
      ) {
        (xe = 1), (ii = e), (Ee = null);
        break;
      }
      e: {
        var s = n,
          o = t.return,
          a = t,
          l = e;
        if (
          ((e = Fe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if ((c.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = cc(o);
          if (h !== null) {
            (h.flags &= -257),
              dc(h, o, a, s, e),
              h.mode & 1 && uc(s, u, e),
              (e = h),
              (l = u);
            var p = e.updateQueue;
            if (p === null) {
              var g = new Set();
              g.add(l), (e.updateQueue = g);
            } else p.add(l);
            break e;
          } else {
            if ((e & 1) === 0) {
              uc(s, u, e), Yl();
              break e;
            }
            l = Error(O(426));
          }
        } else if (le && a.mode & 1) {
          var v = cc(o);
          if (v !== null) {
            (v.flags & 65536) === 0 && (v.flags |= 256),
              dc(v, o, a, s, e),
              Il(fr(l, a));
            break e;
          }
        }
        (s = l = fr(l, a)),
          xe !== 4 && (xe = 2),
          Mr === null ? (Mr = [s]) : Mr.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var m = hh(s, l, e);
              nc(s, m);
              break e;
            case 1:
              a = l;
              var E = s.type,
                x = s.stateNode;
              if (
                (s.flags & 128) === 0 &&
                (typeof E.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (ln === null || !ln.has(x))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var T = ph(s, a, e);
                nc(s, T);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ph(t);
    } catch (S) {
      (e = S), Ee === t && t !== null && (Ee = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function kh() {
  var n = Ts.current;
  return (Ts.current = xs), n === null ? xs : n;
}
function Yl() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Ce === null ||
      ((wn & 268435455) === 0 && (Ks & 268435455) === 0) ||
      Zt(Ce, Fe);
}
function Ls(n, e) {
  var t = q;
  q |= 2;
  var r = kh();
  (Ce !== n || Fe !== e) && ((_t = null), An(n, e));
  do
    try {
      Zg();
      break;
    } catch (i) {
      wh(n, i);
    }
  while (1);
  if ((wl(), (q = t), (Ts.current = r), Ee !== null)) throw Error(O(261));
  return (Ce = null), (Fe = 0), xe;
}
function Zg() {
  for (; Ee !== null; ) _h(Ee);
}
function Jg() {
  for (; Ee !== null && !Lp(); ) _h(Ee);
}
function _h(n) {
  var e = Bh(n.alternate, n, Qe);
  (n.memoizedProps = n.pendingProps),
    e === null ? Ph(n) : (Ee = e),
    (Vl.current = null);
}
function Ph(n) {
  var e = n;
  do {
    var t = e.alternate;
    if (((n = e.return), (e.flags & 32768) === 0)) {
      if (((t = Wg(t, e, Qe)), t !== null)) {
        Ee = t;
        return;
      }
    } else {
      if (((t = zg(t, e)), t !== null)) {
        (t.flags &= 32767), (Ee = t);
        return;
      }
      if (n !== null)
        (n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null);
      else {
        (xe = 6), (Ee = null);
        return;
      }
    }
    if (((e = e.sibling), e !== null)) {
      Ee = e;
      return;
    }
    Ee = e = n;
  } while (e !== null);
  xe === 0 && (xe = 5);
}
function En(n, e, t) {
  var r = Z,
    i = ut.transition;
  try {
    (ut.transition = null), (Z = 1), em(n, e, t, r);
  } finally {
    (ut.transition = i), (Z = r);
  }
  return null;
}
function em(n, e, t, r) {
  do sr();
  while (en !== null);
  if ((q & 6) !== 0) throw Error(O(327));
  t = n.finishedWork;
  var i = n.finishedLanes;
  if (t === null) return null;
  if (((n.finishedWork = null), (n.finishedLanes = 0), t === n.current))
    throw Error(O(177));
  (n.callbackNode = null), (n.callbackPriority = 0);
  var s = t.lanes | t.childLanes;
  if (
    (Op(n, s),
    n === Ce && ((Ee = Ce = null), (Fe = 0)),
    ((t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0) ||
      wi ||
      ((wi = !0),
      bh(ss, function () {
        return sr(), null;
      })),
    (s = (t.flags & 15990) !== 0),
    (t.subtreeFlags & 15990) !== 0 || s)
  ) {
    (s = ut.transition), (ut.transition = null);
    var o = Z;
    Z = 1;
    var a = q;
    (q |= 4),
      (Vl.current = null),
      Yg(n, t),
      Rh(t, n),
      xg(Sa),
      (as = !!Ta),
      (Sa = Ta = null),
      (n.current = t),
      Xg(t),
      Cp(),
      (q = a),
      (Z = o),
      (ut.transition = s);
  } else n.current = t;
  if (
    (wi && ((wi = !1), (en = n), (As = i)),
    (s = n.pendingLanes),
    s === 0 && (ln = null),
    Ip(t.stateNode),
    Xe(n, ge()),
    e !== null)
  )
    for (r = n.onRecoverableError, t = 0; t < e.length; t++)
      (i = e[t]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ss) throw ((Ss = !1), (n = Ka), (Ka = null), n);
  return (
    (As & 1) !== 0 && n.tag !== 0 && sr(),
    (s = n.pendingLanes),
    (s & 1) !== 0 ? (n === Va ? Ur++ : ((Ur = 0), (Va = n))) : (Ur = 0),
    gn(),
    null
  );
}
function sr() {
  if (en !== null) {
    var n = ff(As),
      e = ut.transition,
      t = Z;
    try {
      if (((ut.transition = null), (Z = 16 > n ? 16 : n), en === null))
        var r = !1;
      else {
        if (((n = en), (en = null), (As = 0), (q & 6) !== 0))
          throw Error(O(331));
        var i = q;
        for (q |= 4, M = n.current; M !== null; ) {
          var s = M,
            o = s.child;
          if ((M.flags & 16) !== 0) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nr(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (M = d);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var f = c.sibling,
                        h = c.return;
                      if ((Lh(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (M = f);
                        break;
                      }
                      M = h;
                    }
                }
              }
              var p = s.alternate;
              if (p !== null) {
                var g = p.child;
                if (g !== null) {
                  p.child = null;
                  do {
                    var v = g.sibling;
                    (g.sibling = null), (g = v);
                  } while (g !== null);
                }
              }
              M = s;
            }
          }
          if ((s.subtreeFlags & 2064) !== 0 && o !== null)
            (o.return = s), (M = o);
          else
            e: for (; M !== null; ) {
              if (((s = M), (s.flags & 2048) !== 0))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Nr(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (M = m);
                break e;
              }
              M = s.return;
            }
        }
        var E = n.current;
        for (M = E; M !== null; ) {
          o = M;
          var x = o.child;
          if ((o.subtreeFlags & 2064) !== 0 && x !== null)
            (x.return = o), (M = x);
          else
            e: for (o = E; M !== null; ) {
              if (((a = M), (a.flags & 2048) !== 0))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gs(9, a);
                  }
                } catch (S) {
                  pe(a, a.return, S);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var T = a.sibling;
              if (T !== null) {
                (T.return = a.return), (M = T);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((q = i), gn(), It && typeof It.onPostCommitFiberRoot == "function")
        )
          try {
            It.onPostCommitFiberRoot(Ps, n);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = t), (ut.transition = e);
    }
  }
  return !1;
}
function Lc(n, e, t) {
  (e = fr(t, e)),
    (e = hh(n, e, 1)),
    (n = an(n, e, 1)),
    (e = Me()),
    n !== null && (di(n, 1, e), Xe(n, e));
}
function pe(n, e, t) {
  if (n.tag === 3) Lc(n, n, t);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Lc(e, n, t);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ln === null || !ln.has(r)))
        ) {
          (n = fr(t, n)),
            (n = ph(e, n, 1)),
            (e = an(e, n, 1)),
            (n = Me()),
            e !== null && (di(e, 1, n), Xe(e, n));
          break;
        }
      }
      e = e.return;
    }
}
function tm(n, e, t) {
  var r = n.pingCache;
  r !== null && r.delete(e),
    (e = Me()),
    (n.pingedLanes |= n.suspendedLanes & t),
    Ce === n &&
      (Fe & t) === t &&
      (xe === 4 || (xe === 3 && (Fe & 130023424) === Fe && 500 > ge() - Wl)
        ? An(n, 0)
        : (Hl |= t)),
    Xe(n, e);
}
function Oh(n, e) {
  e === 0 &&
    ((n.mode & 1) === 0
      ? (e = 1)
      : ((e = xi), (xi <<= 1), (xi & 130023424) === 0 && (xi = 4194304)));
  var t = Me();
  (n = Kt(n, e)), n !== null && (di(n, e, t), Xe(n, t));
}
function nm(n) {
  var e = n.memoizedState,
    t = 0;
  e !== null && (t = e.retryLane), Oh(n, t);
}
function rm(n, e) {
  var t = 0;
  switch (n.tag) {
    case 13:
      var r = n.stateNode,
        i = n.memoizedState;
      i !== null && (t = i.retryLane);
      break;
    case 19:
      r = n.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(e), Oh(n, t);
}
var Bh;
Bh = function (n, e, t) {
  if (n !== null)
    if (n.memoizedProps !== e.pendingProps || je.current) ze = !0;
    else {
      if ((n.lanes & t) === 0 && (e.flags & 128) === 0)
        return (ze = !1), Hg(n, e, t);
      ze = (n.flags & 131072) !== 0;
    }
  else (ze = !1), le && (e.flags & 1048576) !== 0 && Mf(e, ps, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      qi(n, e), (n = e.pendingProps);
      var i = lr(e, Be.current);
      ir(e, t), (i = Ml(null, e, r, n, i, t));
      var s = Ul();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Ye(r) ? ((s = !0), fs(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Pl(e),
            (i.updater = Us),
            (e.stateNode = i),
            (i._reactInternals = e),
            ka(e, r, n, t),
            (e = Oa(null, e, r, !0, s, t)))
          : ((e.tag = 0), le && s && Dl(e), Ne(null, e, i, t), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (qi(n, e),
          (n = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = sm(r)),
          (n = gt(r, n)),
          i)
        ) {
          case 0:
            e = Pa(null, e, r, n, t);
            break e;
          case 1:
            e = pc(null, e, r, n, t);
            break e;
          case 11:
            e = fc(null, e, r, n, t);
            break e;
          case 14:
            e = hc(null, e, r, gt(r.type, n), t);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : gt(r, i)),
        Pa(n, e, r, i, t)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : gt(r, i)),
        pc(n, e, r, i, t)
      );
    case 3:
      e: {
        if ((Eh(e), n === null)) throw Error(O(387));
        (r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          Kf(n, e),
          ys(e, r, null, t);
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (i = fr(Error(O(423)), e)), (e = gc(n, e, r, t, i));
            break e;
          } else if (r !== i) {
            (i = fr(Error(O(424)), e)), (e = gc(n, e, r, t, i));
            break e;
          } else
            for (
              Ze = on(e.stateNode.containerInfo.firstChild),
                Je = e,
                le = !0,
                yt = null,
                t = zf(e, null, r, t),
                e.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((ur(), r === i)) {
            e = Vt(n, e, t);
            break e;
          }
          Ne(n, e, r, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        jf(e),
        n === null && Ia(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = n !== null ? n.memoizedProps : null),
        (o = i.children),
        Aa(r, i) ? (o = null) : s !== null && Aa(r, s) && (e.flags |= 32),
        yh(n, e),
        Ne(n, e, o, t),
        e.child
      );
    case 6:
      return n === null && Ia(e), null;
    case 13:
      return vh(n, e, t);
    case 4:
      return (
        Ol(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        n === null ? (e.child = cr(e, null, r, t)) : Ne(n, e, r, t),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : gt(r, i)),
        fc(n, e, r, i, t)
      );
    case 7:
      return Ne(n, e, e.pendingProps, t), e.child;
    case 8:
      return Ne(n, e, e.pendingProps.children, t), e.child;
    case 12:
      return Ne(n, e, e.pendingProps.children, t), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          re(gs, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (St(s.value, o)) {
            if (s.children === i.children && !je.current) {
              e = Vt(n, e, t);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = Ut(-1, t & -t)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= t),
                      (l = s.alternate),
                      l !== null && (l.lanes |= t),
                      Fa(s.return, t, e),
                      (a.lanes |= t);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(O(341));
                (o.lanes |= t),
                  (a = o.alternate),
                  a !== null && (a.lanes |= t),
                  Fa(o, t, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ne(n, e, i.children, t), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        ir(e, t),
        (i = ct(i)),
        (r = r(i)),
        (e.flags |= 1),
        Ne(n, e, r, t),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = gt(r, e.pendingProps)),
        (i = gt(r.type, i)),
        hc(n, e, r, i, t)
      );
    case 15:
      return gh(n, e, e.type, e.pendingProps, t);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : gt(r, i)),
        qi(n, e),
        (e.tag = 1),
        Ye(r) ? ((n = !0), fs(e)) : (n = !1),
        ir(e, t),
        Hf(e, r, i),
        ka(e, r, i, t),
        Oa(null, e, r, !0, n, t)
      );
    case 19:
      return xh(n, e, t);
    case 22:
      return mh(n, e, t);
  }
  throw Error(O(156, e.tag));
};
function bh(n, e) {
  return lf(n, e);
}
function im(n, e, t, r) {
  (this.tag = n),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function lt(n, e, t, r) {
  return new im(n, e, t, r);
}
function Xl(n) {
  return (n = n.prototype), !(!n || !n.isReactComponent);
}
function sm(n) {
  if (typeof n == "function") return Xl(n) ? 1 : 0;
  if (n != null) {
    if (((n = n.$$typeof), n === pl)) return 11;
    if (n === gl) return 14;
  }
  return 2;
}
function cn(n, e) {
  var t = n.alternate;
  return (
    t === null
      ? ((t = lt(n.tag, e, n.key, n.mode)),
        (t.elementType = n.elementType),
        (t.type = n.type),
        (t.stateNode = n.stateNode),
        (t.alternate = n),
        (n.alternate = t))
      : ((t.pendingProps = e),
        (t.type = n.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = n.flags & 14680064),
    (t.childLanes = n.childLanes),
    (t.lanes = n.lanes),
    (t.child = n.child),
    (t.memoizedProps = n.memoizedProps),
    (t.memoizedState = n.memoizedState),
    (t.updateQueue = n.updateQueue),
    (e = n.dependencies),
    (t.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (t.sibling = n.sibling),
    (t.index = n.index),
    (t.ref = n.ref),
    t
  );
}
function Ji(n, e, t, r, i, s) {
  var o = 2;
  if (((r = n), typeof n == "function")) Xl(n) && (o = 1);
  else if (typeof n == "string") o = 5;
  else
    e: switch (n) {
      case Kn:
        return Ln(t.children, i, s, e);
      case hl:
        (o = 8), (i |= 8);
        break;
      case ta:
        return (
          (n = lt(12, t, e, i | 2)), (n.elementType = ta), (n.lanes = s), n
        );
      case na:
        return (n = lt(13, t, e, i)), (n.elementType = na), (n.lanes = s), n;
      case ra:
        return (n = lt(19, t, e, i)), (n.elementType = ra), (n.lanes = s), n;
      case Hd:
        return Vs(t, i, s, e);
      default:
        if (typeof n == "object" && n !== null)
          switch (n.$$typeof) {
            case Kd:
              o = 10;
              break e;
            case Vd:
              o = 9;
              break e;
            case pl:
              o = 11;
              break e;
            case gl:
              o = 14;
              break e;
            case jt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(O(130, n == null ? n : typeof n, ""));
    }
  return (
    (e = lt(o, t, e, i)), (e.elementType = n), (e.type = r), (e.lanes = s), e
  );
}
function Ln(n, e, t, r) {
  return (n = lt(7, n, r, e)), (n.lanes = t), n;
}
function Vs(n, e, t, r) {
  return (
    (n = lt(22, n, r, e)),
    (n.elementType = Hd),
    (n.lanes = t),
    (n.stateNode = { isHidden: !1 }),
    n
  );
}
function Do(n, e, t) {
  return (n = lt(6, n, null, e)), (n.lanes = t), n;
}
function Ro(n, e, t) {
  return (
    (e = lt(4, n.children !== null ? n.children : [], n.key, e)),
    (e.lanes = t),
    (e.stateNode = {
      containerInfo: n.containerInfo,
      pendingChildren: null,
      implementation: n.implementation,
    }),
    e
  );
}
function om(n, e, t, r, i) {
  (this.tag = e),
    (this.containerInfo = n),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = oo(0)),
    (this.expirationTimes = oo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = oo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ql(n, e, t, r, i, s, o, a, l) {
  return (
    (n = new om(n, e, t, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = lt(3, null, null, e)),
    (n.current = s),
    (s.stateNode = n),
    (s.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Pl(s),
    n
  );
}
function am(n, e, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gn,
    key: r == null ? null : "" + r,
    children: n,
    containerInfo: e,
    implementation: t,
  };
}
function Nh(n) {
  if (!n) return fn;
  n = n._reactInternals;
  e: {
    if (On(n) !== n || n.tag !== 1) throw Error(O(170));
    var e = n;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Ye(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(O(171));
  }
  if (n.tag === 1) {
    var t = n.type;
    if (Ye(t)) return bf(n, t, e);
  }
  return e;
}
function Mh(n, e, t, r, i, s, o, a, l) {
  return (
    (n = ql(t, r, !0, n, i, s, o, a, l)),
    (n.context = Nh(null)),
    (t = n.current),
    (r = Me()),
    (i = un(t)),
    (s = Ut(r, i)),
    (s.callback = e != null ? e : null),
    an(t, s, i),
    (n.current.lanes = i),
    di(n, i, r),
    Xe(n, r),
    n
  );
}
function Hs(n, e, t, r) {
  var i = e.current,
    s = Me(),
    o = un(i);
  return (
    (t = Nh(t)),
    e.context === null ? (e.context = t) : (e.pendingContext = t),
    (e = Ut(s, o)),
    (e.payload = { element: n }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (n = an(i, e, o)),
    n !== null && (Tt(n, i, o, s), ji(n, i, o)),
    o
  );
}
function Cs(n) {
  if (((n = n.current), !n.child)) return null;
  switch (n.child.tag) {
    case 5:
      return n.child.stateNode;
    default:
      return n.child.stateNode;
  }
}
function Cc(n, e) {
  if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
    var t = n.retryLane;
    n.retryLane = t !== 0 && t < e ? t : e;
  }
}
function Ql(n, e) {
  Cc(n, e), (n = n.alternate) && Cc(n, e);
}
function lm() {
  return null;
}
var Uh =
  typeof reportError == "function"
    ? reportError
    : function (n) {
        console.error(n);
      };
function Zl(n) {
  this._internalRoot = n;
}
Ws.prototype.render = Zl.prototype.render = function (n) {
  var e = this._internalRoot;
  if (e === null) throw Error(O(409));
  Hs(n, e, null, null);
};
Ws.prototype.unmount = Zl.prototype.unmount = function () {
  var n = this._internalRoot;
  if (n !== null) {
    this._internalRoot = null;
    var e = n.containerInfo;
    kn(function () {
      Hs(null, n, null, null);
    }),
      (e[Gt] = null);
  }
};
function Ws(n) {
  this._internalRoot = n;
}
Ws.prototype.unstable_scheduleHydration = function (n) {
  if (n) {
    var e = gf();
    n = { blockedOn: null, target: n, priority: e };
    for (var t = 0; t < Qt.length && e !== 0 && e < Qt[t].priority; t++);
    Qt.splice(t, 0, n), t === 0 && yf(n);
  }
};
function Jl(n) {
  return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
}
function zs(n) {
  return !(
    !n ||
    (n.nodeType !== 1 &&
      n.nodeType !== 9 &&
      n.nodeType !== 11 &&
      (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
  );
}
function Dc() {}
function um(n, e, t, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Cs(o);
        s.call(u);
      };
    }
    var o = Mh(e, r, n, 0, null, !1, !1, "", Dc);
    return (
      (n._reactRootContainer = o),
      (n[Gt] = o.current),
      qr(n.nodeType === 8 ? n.parentNode : n),
      kn(),
      o
    );
  }
  for (; (i = n.lastChild); ) n.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Cs(l);
      a.call(u);
    };
  }
  var l = ql(n, 0, !1, null, null, !1, !1, "", Dc);
  return (
    (n._reactRootContainer = l),
    (n[Gt] = l.current),
    qr(n.nodeType === 8 ? n.parentNode : n),
    kn(function () {
      Hs(e, l, t, r);
    }),
    l
  );
}
function js(n, e, t, r, i) {
  var s = t._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Cs(o);
        a.call(l);
      };
    }
    Hs(e, o, n, i);
  } else o = um(t, e, n, i, r);
  return Cs(o);
}
hf = function (n) {
  switch (n.tag) {
    case 3:
      var e = n.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = Fr(e.pendingLanes);
        t !== 0 &&
          (El(e, t | 1),
          Xe(e, ge()),
          (q & 6) === 0 && ((hr = ge() + 500), gn()));
      }
      break;
    case 13:
      kn(function () {
        var r = Kt(n, 1);
        if (r !== null) {
          var i = Me();
          Tt(r, n, 1, i);
        }
      }),
        Ql(n, 1);
  }
};
vl = function (n) {
  if (n.tag === 13) {
    var e = Kt(n, 134217728);
    if (e !== null) {
      var t = Me();
      Tt(e, n, 134217728, t);
    }
    Ql(n, 134217728);
  }
};
pf = function (n) {
  if (n.tag === 13) {
    var e = un(n),
      t = Kt(n, e);
    if (t !== null) {
      var r = Me();
      Tt(t, n, e, r);
    }
    Ql(n, e);
  }
};
gf = function () {
  return Z;
};
mf = function (n, e) {
  var t = Z;
  try {
    return (Z = n), e();
  } finally {
    Z = t;
  }
};
ha = function (n, e, t) {
  switch (e) {
    case "input":
      if ((oa(n, t), (e = t.name), t.type === "radio" && e != null)) {
        for (t = n; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < t.length;
          e++
        ) {
          var r = t[e];
          if (r !== n && r.form === n.form) {
            var i = Ns(r);
            if (!i) throw Error(O(90));
            zd(r), oa(r, i);
          }
        }
      }
      break;
    case "textarea":
      Yd(n, t);
      break;
    case "select":
      (e = t.value), e != null && er(n, !!t.multiple, e, !1);
  }
};
tf = zl;
nf = kn;
var cm = { usingClientEntryPoint: !1, Events: [hi, zn, Ns, Jd, ef, zl] },
  Cr = {
    findFiberByHostInstance: xn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  dm = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (n) {
      return (n = of(n)), n === null ? null : n.stateNode;
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance || lm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ki.isDisabled && ki.supportsFiber)
    try {
      (Ps = ki.inject(dm)), (It = ki);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cm;
tt.createPortal = function (n, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Jl(e)) throw Error(O(200));
  return am(n, e, null, t);
};
tt.createRoot = function (n, e) {
  if (!Jl(n)) throw Error(O(299));
  var t = !1,
    r = "",
    i = Uh;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (t = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = ql(n, 1, !1, null, null, t, !1, r, i)),
    (n[Gt] = e.current),
    qr(n.nodeType === 8 ? n.parentNode : n),
    new Zl(e)
  );
};
tt.findDOMNode = function (n) {
  if (n == null) return null;
  if (n.nodeType === 1) return n;
  var e = n._reactInternals;
  if (e === void 0)
    throw typeof n.render == "function"
      ? Error(O(188))
      : ((n = Object.keys(n).join(",")), Error(O(268, n)));
  return (n = of(e)), (n = n === null ? null : n.stateNode), n;
};
tt.flushSync = function (n) {
  return kn(n);
};
tt.hydrate = function (n, e, t) {
  if (!zs(e)) throw Error(O(200));
  return js(null, n, e, !0, t);
};
tt.hydrateRoot = function (n, e, t) {
  if (!Jl(n)) throw Error(O(405));
  var r = (t != null && t.hydratedSources) || null,
    i = !1,
    s = "",
    o = Uh;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (i = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (e = Mh(e, null, n, 1, t != null ? t : null, i, !1, s, o)),
    (n[Gt] = e.current),
    qr(n),
    r)
  )
    for (n = 0; n < r.length; n++)
      (t = r[n]),
        (i = t._getVersion),
        (i = i(t._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [t, i])
          : e.mutableSourceEagerHydrationData.push(t, i);
  return new Ws(e);
};
tt.render = function (n, e, t) {
  if (!zs(e)) throw Error(O(200));
  return js(null, n, e, !1, t);
};
tt.unmountComponentAtNode = function (n) {
  if (!zs(n)) throw Error(O(40));
  return n._reactRootContainer
    ? (kn(function () {
        js(null, null, n, !1, function () {
          (n._reactRootContainer = null), (n[Gt] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = zl;
tt.unstable_renderSubtreeIntoContainer = function (n, e, t, r) {
  if (!zs(t)) throw Error(O(200));
  if (n == null || n._reactInternals === void 0) throw Error(O(38));
  return js(n, e, t, !1, r);
};
tt.version = "18.2.0-next-9e3b772b8-20220608";
(function (n) {
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  e(), (n.exports = tt);
})(Nd);
var Rc = Nd.exports;
(Jo.createRoot = Rc.createRoot), (Jo.hydrateRoot = Rc.hydrateRoot);
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function si() {
  return (
    (si = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    si.apply(this, arguments)
  );
}
var tn;
(function (n) {
  (n.Pop = "POP"), (n.Push = "PUSH"), (n.Replace = "REPLACE");
})(tn || (tn = {}));
const Ic = "popstate";
function fm(n) {
  n === void 0 && (n = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return za(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function t(r, i) {
    return typeof i == "string" ? i : $h(i);
  }
  return pm(e, t, null, n);
}
function Te(n, e) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(e);
}
function eu(n, e) {
  if (!n) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function hm() {
  return Math.random().toString(36).substr(2, 8);
}
function Fc(n, e) {
  return { usr: n.state, key: n.key, idx: e };
}
function za(n, e, t, r) {
  return (
    t === void 0 && (t = null),
    si(
      { pathname: typeof n == "string" ? n : n.pathname, search: "", hash: "" },
      typeof e == "string" ? yr(e) : e,
      { state: t, key: (e && e.key) || r || hm() }
    )
  );
}
function $h(n) {
  let { pathname: e = "/", search: t = "", hash: r = "" } = n;
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function yr(n) {
  let e = {};
  if (n) {
    let t = n.indexOf("#");
    t >= 0 && ((e.hash = n.substr(t)), (n = n.substr(0, t)));
    let r = n.indexOf("?");
    r >= 0 && ((e.search = n.substr(r)), (n = n.substr(0, r))),
      n && (e.pathname = n);
  }
  return e;
}
function pm(n, e, t, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = tn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(si({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = tn.Pop;
    let v = c(),
      m = v == null ? null : v - u;
    (u = v), l && l({ action: a, location: g.location, delta: m });
  }
  function f(v, m) {
    a = tn.Push;
    let E = za(g.location, v, m);
    t && t(E, v), (u = c() + 1);
    let x = Fc(E, u),
      T = g.createHref(E);
    try {
      o.pushState(x, "", T);
    } catch {
      i.location.assign(T);
    }
    s && l && l({ action: a, location: g.location, delta: 1 });
  }
  function h(v, m) {
    a = tn.Replace;
    let E = za(g.location, v, m);
    t && t(E, v), (u = c());
    let x = Fc(E, u),
      T = g.createHref(E);
    o.replaceState(x, "", T),
      s && l && l({ action: a, location: g.location, delta: 0 });
  }
  function p(v) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      E = typeof v == "string" ? v : $h(v);
    return (
      Te(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          E
      ),
      new URL(E, m)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return n(i, o);
    },
    listen(v) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Ic, d),
        (l = v),
        () => {
          i.removeEventListener(Ic, d), (l = null);
        }
      );
    },
    createHref(v) {
      return e(i, v);
    },
    createURL: p,
    encodeLocation(v) {
      let m = p(v);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: h,
    go(v) {
      return o.go(v);
    },
  };
  return g;
}
var wc;
(function (n) {
  (n.data = "data"),
    (n.deferred = "deferred"),
    (n.redirect = "redirect"),
    (n.error = "error");
})(wc || (wc = {}));
function gm(n, e, t) {
  t === void 0 && (t = "/");
  let r = typeof e == "string" ? yr(e) : e,
    i = Vh(r.pathname || "/", t);
  if (i == null) return null;
  let s = Gh(n);
  mm(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = Cm(s[a], Im(i));
  return o;
}
function Gh(n, e, t, r) {
  e === void 0 && (e = []), t === void 0 && (t = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (Te(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Cn([r, l.relativePath]),
      c = t.concat(l);
    s.children &&
      s.children.length > 0 &&
      (Te(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Gh(s.children, e, c, u)),
      !(s.path == null && !s.index) &&
        e.push({ path: u, score: Am(u, s.index), routesMeta: c });
  };
  return (
    n.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of Kh(s.path)) i(s, o, l);
    }),
    e
  );
}
function Kh(n) {
  let e = n.split("/");
  if (e.length === 0) return [];
  let [t, ...r] = e,
    i = t.endsWith("?"),
    s = t.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Kh(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (n.startsWith("/") && l === "" ? "/" : l))
  );
}
function mm(n) {
  n.sort((e, t) =>
    e.score !== t.score
      ? t.score - e.score
      : Lm(
          e.routesMeta.map((r) => r.childrenIndex),
          t.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ym = /^:\w+$/,
  Em = 3,
  vm = 2,
  xm = 1,
  Tm = 10,
  Sm = -2,
  kc = (n) => n === "*";
function Am(n, e) {
  let t = n.split("/"),
    r = t.length;
  return (
    t.some(kc) && (r += Sm),
    e && (r += vm),
    t
      .filter((i) => !kc(i))
      .reduce((i, s) => i + (ym.test(s) ? Em : s === "" ? xm : Tm), r)
  );
}
function Lm(n, e) {
  return n.length === e.length && n.slice(0, -1).every((r, i) => r === e[i])
    ? n[n.length - 1] - e[e.length - 1]
    : 0;
}
function Cm(n, e) {
  let { routesMeta: t } = n,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < t.length; ++o) {
    let a = t[o],
      l = o === t.length - 1,
      u = i === "/" ? e : e.slice(i.length) || "/",
      c = Dm(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = a.route;
    s.push({
      params: r,
      pathname: Cn([i, c.pathname]),
      pathnameBase: Om(Cn([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = Cn([i, c.pathnameBase]));
  }
  return s;
}
function Dm(n, e) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [t, r] = Rm(n.path, n.caseSensitive, n.end),
    i = e.match(t);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      if (c === "*") {
        let f = a[d] || "";
        o = s.slice(0, s.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = Fm(a[d] || "", c)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: n,
  };
}
function Rm(n, e, t) {
  e === void 0 && (e = !1),
    t === void 0 && (t = !0),
    eu(
      n === "*" || !n.endsWith("*") || n.endsWith("/*"),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + n.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, a) => (r.push(a), "/([^\\/]+)"));
  return (
    n.endsWith("*")
      ? (r.push("*"),
        (i += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : t
      ? (i += "\\/*$")
      : n !== "" && n !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function Im(n) {
  try {
    return decodeURI(n);
  } catch (e) {
    return (
      eu(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      n
    );
  }
}
function Fm(n, e) {
  try {
    return decodeURIComponent(n);
  } catch (t) {
    return (
      eu(
        !1,
        'The value for the URL param "' +
          e +
          '" will not be decoded because' +
          (' the string "' +
            n +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + t + ").")
      ),
      n
    );
  }
}
function Vh(n, e) {
  if (e === "/") return n;
  if (!n.toLowerCase().startsWith(e.toLowerCase())) return null;
  let t = e.endsWith("/") ? e.length - 1 : e.length,
    r = n.charAt(t);
  return r && r !== "/" ? null : n.slice(t) || "/";
}
function wm(n, e) {
  e === void 0 && (e = "/");
  let {
    pathname: t,
    search: r = "",
    hash: i = "",
  } = typeof n == "string" ? yr(n) : n;
  return {
    pathname: t ? (t.startsWith("/") ? t : km(t, e)) : e,
    search: Bm(r),
    hash: bm(i),
  };
}
function km(n, e) {
  let t = e.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((i) => {
      i === ".." ? t.length > 1 && t.pop() : i !== "." && t.push(i);
    }),
    t.length > 1 ? t.join("/") : "/"
  );
}
function Io(n, e, t, r) {
  return (
    "Cannot include a '" +
    n +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + t + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function _m(n) {
  return n.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Pm(n, e, t, r) {
  r === void 0 && (r = !1);
  let i;
  typeof n == "string"
    ? (i = yr(n))
    : ((i = si({}, n)),
      Te(
        !i.pathname || !i.pathname.includes("?"),
        Io("?", "pathname", "search", i)
      ),
      Te(
        !i.pathname || !i.pathname.includes("#"),
        Io("#", "pathname", "hash", i)
      ),
      Te(!i.search || !i.search.includes("#"), Io("#", "search", "hash", i)));
  let s = n === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (r || o == null) a = t;
  else {
    let d = e.length - 1;
    if (o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    a = d >= 0 ? e[d] : "/";
  }
  let l = wm(i, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && t.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Cn = (n) => n.join("/").replace(/\/\/+/g, "/"),
  Om = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Bm = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  bm = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function Nm(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
const Mm = ["post", "put", "patch", "delete"];
[...Mm];
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ds() {
  return (
    (Ds = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    Ds.apply(this, arguments)
  );
}
const tu = $.exports.createContext(null),
  Um = $.exports.createContext(null),
  Ys = $.exports.createContext(null),
  Xs = $.exports.createContext(null),
  Bn = $.exports.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Hh = $.exports.createContext(null);
function qs() {
  return $.exports.useContext(Xs) != null;
}
function Wh() {
  return qs() || Te(!1), $.exports.useContext(Xs).location;
}
function zh(n) {
  $.exports.useContext(Ys).static || $.exports.useLayoutEffect(n);
}
function jh() {
  let { isDataRoute: n } = $.exports.useContext(Bn);
  return n ? Zm() : $m();
}
function $m() {
  qs() || Te(!1);
  let n = $.exports.useContext(tu),
    { basename: e, navigator: t } = $.exports.useContext(Ys),
    { matches: r } = $.exports.useContext(Bn),
    { pathname: i } = Wh(),
    s = JSON.stringify(_m(r).map((l) => l.pathnameBase)),
    o = $.exports.useRef(!1);
  return (
    zh(() => {
      o.current = !0;
    }),
    $.exports.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !o.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let c = Pm(l, JSON.parse(s), i, u.relative === "path");
        n == null &&
          e !== "/" &&
          (c.pathname = c.pathname === "/" ? e : Cn([e, c.pathname])),
          (u.replace ? t.replace : t.push)(c, u.state, u);
      },
      [e, t, s, i, n]
    )
  );
}
function nu() {
  let { matches: n } = $.exports.useContext(Bn),
    e = n[n.length - 1];
  return e ? e.params : {};
}
function Gm(n, e) {
  return Km(n, e);
}
function Km(n, e, t) {
  qs() || Te(!1);
  let { navigator: r } = $.exports.useContext(Ys),
    { matches: i } = $.exports.useContext(Bn),
    s = i[i.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let l = Wh(),
    u;
  if (e) {
    var c;
    let g = typeof e == "string" ? yr(e) : e;
    a === "/" ||
      ((c = g.pathname) == null ? void 0 : c.startsWith(a)) ||
      Te(!1),
      (u = g);
  } else u = l;
  let d = u.pathname || "/",
    f = a === "/" ? d : d.slice(a.length) || "/",
    h = gm(n, { pathname: f }),
    p = jm(
      h &&
        h.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, o, g.params),
            pathname: Cn([
              a,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? a
                : Cn([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      i,
      t
    );
  return e && p
    ? $.exports.createElement(
        Xs.Provider,
        {
          value: {
            location: Ds(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: tn.Pop,
          },
        },
        p
      )
    : p;
}
function Vm() {
  let n = Qm(),
    e = Nm(n)
      ? n.status + " " + n.statusText
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    t = n instanceof Error ? n.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    s = null;
  return $.exports.createElement(
    $.exports.Fragment,
    null,
    $.exports.createElement("h2", null, "Unexpected Application Error!"),
    $.exports.createElement("h3", { style: { fontStyle: "italic" } }, e),
    t ? $.exports.createElement("pre", { style: i }, t) : null,
    s
  );
}
const Hm = $.exports.createElement(Vm, null);
class Wm extends $.exports.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location ||
      (t.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error || t.error,
          location: t.location,
          revalidation: e.revalidation || t.revalidation,
        };
  }
  componentDidCatch(e, t) {
    console.error(
      "React Router caught the following error during render",
      e,
      t
    );
  }
  render() {
    return this.state.error
      ? $.exports.createElement(
          Bn.Provider,
          { value: this.props.routeContext },
          $.exports.createElement(Hh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function zm(n) {
  let { routeContext: e, match: t, children: r } = n,
    i = $.exports.useContext(tu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    $.exports.createElement(Bn.Provider, { value: e }, r)
  );
}
function jm(n, e, t) {
  var r;
  if ((e === void 0 && (e = []), t === void 0 && (t = null), n == null)) {
    var i;
    if ((i = t) != null && i.errors) n = t.matches;
    else return null;
  }
  let s = n,
    o = (r = t) == null ? void 0 : r.errors;
  if (o != null) {
    let a = s.findIndex(
      (l) => l.route.id && (o == null ? void 0 : o[l.route.id])
    );
    a >= 0 || Te(!1), (s = s.slice(0, Math.min(s.length, a + 1)));
  }
  return s.reduceRight((a, l, u) => {
    let c = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
      d = null;
    t && (d = l.route.errorElement || Hm);
    let f = e.concat(s.slice(0, u + 1)),
      h = () => {
        let p;
        return (
          c
            ? (p = d)
            : l.route.Component
            ? (p = $.exports.createElement(l.route.Component, null))
            : l.route.element
            ? (p = l.route.element)
            : (p = a),
          $.exports.createElement(zm, {
            match: l,
            routeContext: { outlet: a, matches: f, isDataRoute: t != null },
            children: p,
          })
        );
      };
    return t && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? $.exports.createElement(Wm, {
          location: t.location,
          revalidation: t.revalidation,
          component: d,
          error: c,
          children: h(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var ja;
(function (n) {
  (n.UseBlocker = "useBlocker"),
    (n.UseRevalidator = "useRevalidator"),
    (n.UseNavigateStable = "useNavigate");
})(ja || (ja = {}));
var oi;
(function (n) {
  (n.UseBlocker = "useBlocker"),
    (n.UseLoaderData = "useLoaderData"),
    (n.UseActionData = "useActionData"),
    (n.UseRouteError = "useRouteError"),
    (n.UseNavigation = "useNavigation"),
    (n.UseRouteLoaderData = "useRouteLoaderData"),
    (n.UseMatches = "useMatches"),
    (n.UseRevalidator = "useRevalidator"),
    (n.UseNavigateStable = "useNavigate"),
    (n.UseRouteId = "useRouteId");
})(oi || (oi = {}));
function Ym(n) {
  let e = $.exports.useContext(tu);
  return e || Te(!1), e;
}
function Xm(n) {
  let e = $.exports.useContext(Um);
  return e || Te(!1), e;
}
function qm(n) {
  let e = $.exports.useContext(Bn);
  return e || Te(!1), e;
}
function Yh(n) {
  let e = qm(),
    t = e.matches[e.matches.length - 1];
  return t.route.id || Te(!1), t.route.id;
}
function Qm() {
  var n;
  let e = $.exports.useContext(Hh),
    t = Xm(oi.UseRouteError),
    r = Yh(oi.UseRouteError);
  return e || ((n = t.errors) == null ? void 0 : n[r]);
}
function Zm() {
  let { router: n } = Ym(ja.UseNavigateStable),
    e = Yh(oi.UseNavigateStable),
    t = $.exports.useRef(!1);
  return (
    zh(() => {
      t.current = !0;
    }),
    $.exports.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          t.current &&
            (typeof i == "number"
              ? n.navigate(i)
              : n.navigate(i, Ds({ fromRouteId: e }, s)));
      },
      [n, e]
    )
  );
}
function es(n) {
  Te(!1);
}
function Jm(n) {
  let {
    basename: e = "/",
    children: t = null,
    location: r,
    navigationType: i = tn.Pop,
    navigator: s,
    static: o = !1,
  } = n;
  qs() && Te(!1);
  let a = e.replace(/^\/*/, "/"),
    l = $.exports.useMemo(
      () => ({ basename: a, navigator: s, static: o }),
      [a, s, o]
    );
  typeof r == "string" && (r = yr(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: f = null,
      key: h = "default",
    } = r,
    p = $.exports.useMemo(() => {
      let g = Vh(u, a);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: d, state: f, key: h },
            navigationType: i,
          };
    }, [a, u, c, d, f, h, i]);
  return p == null
    ? null
    : $.exports.createElement(
        Ys.Provider,
        { value: l },
        $.exports.createElement(Xs.Provider, { children: t, value: p })
      );
}
function ey(n) {
  let { children: e, location: t } = n;
  return Gm(Ya(e), t);
}
var _c;
(function (n) {
  (n[(n.pending = 0)] = "pending"),
    (n[(n.success = 1)] = "success"),
    (n[(n.error = 2)] = "error");
})(_c || (_c = {}));
new Promise(() => {});
function Ya(n, e) {
  e === void 0 && (e = []);
  let t = [];
  return (
    $.exports.Children.forEach(n, (r, i) => {
      if (!$.exports.isValidElement(r)) return;
      let s = [...e, i];
      if (r.type === $.exports.Fragment) {
        t.push.apply(t, Ya(r.props.children, s));
        return;
      }
      r.type !== es && Te(!1), !r.props.index || !r.props.children || Te(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Ya(r.props.children, s)), t.push(o);
    }),
    t
  );
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ty(n) {
  let { basename: e, children: t, window: r } = n,
    i = $.exports.useRef();
  i.current == null && (i.current = fm({ window: r, v5Compat: !0 }));
  let s = i.current,
    [o, a] = $.exports.useState({ action: s.action, location: s.location });
  return (
    $.exports.useLayoutEffect(() => s.listen(a), [s]),
    $.exports.createElement(Jm, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: s,
    })
  );
}
var Pc;
(function (n) {
  (n.UseScrollRestoration = "useScrollRestoration"),
    (n.UseSubmitImpl = "useSubmitImpl"),
    (n.UseFetcher = "useFetcher");
})(Pc || (Pc = {}));
var Oc;
(function (n) {
  (n.UseFetchers = "useFetchers"),
    (n.UseScrollRestoration = "useScrollRestoration");
})(Oc || (Oc = {}));
const ny = (n) => {
    const { score: e } = n,
      t = () => {
        let r = e / 2;
        const i = Math.floor(r / 10);
        let s = Math.floor(r % 10);
        return s > 0 && (s = 5), (r = i * 10 + s), "star" + r;
      };
    return B.createElement(
      B.Fragment,
      null,
      B.createElement("span", { className: "star " + t() })
    );
  },
  Xh = (n) => {
    const { score: e } = n;
    return B.createElement(
      B.Fragment,
      null,
      B.createElement(
        "div",
        null,
        B.createElement(ny, { score: e }),
        B.createElement(
          "span",
          { style: { color: "#ffac2d" } },
          Number(e / 10).toFixed(1)
        )
      )
    );
  };
const ry = (n) => {
  const { data: e } = n,
    { cover: t, name: r, score: i, details: s } = e,
    {
      date: o,
      directors: a,
      actors: l,
      types: u,
      region: c,
      alias: d,
      intro: f,
    } = s;
  return B.createElement(
    B.Fragment,
    null,
    B.createElement(
      "div",
      { className: "video-card" },
      B.createElement("img", {
        style: { display: "block", paddingRight: "10px" },
        src: t,
      }),
      B.createElement(
        "div",
        { className: "info" },
        B.createElement(
          "div",
          null,
          B.createElement("h1", { className: "title" }, r),
          B.createElement("span", { className: "date" }, ` (${o})`),
          B.createElement(Xh, { score: i })
        ),
        B.createElement(
          "div",
          { className: "property" },
          B.createElement("span", { className: "key" }, "\u5BFC\u6F14 : "),
          B.createElement("span", { className: "value" }, a.join("/"))
        ),
        B.createElement(
          "div",
          { className: "property" },
          B.createElement("span", { className: "key" }, "\u4E3B\u6F14 : "),
          B.createElement("span", { className: "value" }, l.join("/"))
        ),
        B.createElement(
          "div",
          { className: "property" },
          B.createElement("span", { className: "key" }, "\u7C7B\u578B: "),
          B.createElement("span", { className: "value" }, u.join("/"))
        ),
        B.createElement(
          "div",
          { className: "property" },
          B.createElement(
            "span",
            { className: "key" },
            "\u5236\u7247\u56FD\u5BB6/\u5730\u533A : "
          ),
          B.createElement("span", { className: "value" }, c)
        ),
        B.createElement(
          "div",
          { className: "property" },
          B.createElement("span", { className: "key" }, "\u53C8\u540D : "),
          B.createElement("span", { className: "value" }, d.join("/"))
        ),
        B.createElement(
          "div",
          { className: "property" },
          B.createElement("span", { className: "key" }, "\u7B80\u4ECB : "),
          B.createElement("span", { className: "value" }, f)
        )
      )
    )
  );
};
function iy(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var qh = { exports: {} };
(function (n, e) {
  (function (t) {
    var r =
        /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,
      i = /^(?=([^\/?#]*))\1([^]*)$/,
      s = /(?:\/|^)\.(?=\/)/g,
      o = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
      a = {
        buildAbsoluteURL: function (l, u, c) {
          if (((c = c || {}), (l = l.trim()), (u = u.trim()), !u)) {
            if (!c.alwaysNormalize) return l;
            var d = a.parseURL(l);
            if (!d) throw new Error("Error trying to parse base URL.");
            return (d.path = a.normalizePath(d.path)), a.buildURLFromParts(d);
          }
          var f = a.parseURL(u);
          if (!f) throw new Error("Error trying to parse relative URL.");
          if (f.scheme)
            return c.alwaysNormalize
              ? ((f.path = a.normalizePath(f.path)), a.buildURLFromParts(f))
              : u;
          var h = a.parseURL(l);
          if (!h) throw new Error("Error trying to parse base URL.");
          if (!h.netLoc && h.path && h.path[0] !== "/") {
            var p = i.exec(h.path);
            (h.netLoc = p[1]), (h.path = p[2]);
          }
          h.netLoc && !h.path && (h.path = "/");
          var g = {
            scheme: h.scheme,
            netLoc: f.netLoc,
            path: null,
            params: f.params,
            query: f.query,
            fragment: f.fragment,
          };
          if (!f.netLoc && ((g.netLoc = h.netLoc), f.path[0] !== "/"))
            if (!f.path)
              (g.path = h.path),
                f.params ||
                  ((g.params = h.params), f.query || (g.query = h.query));
            else {
              var v = h.path,
                m = v.substring(0, v.lastIndexOf("/") + 1) + f.path;
              g.path = a.normalizePath(m);
            }
          return (
            g.path === null &&
              (g.path = c.alwaysNormalize ? a.normalizePath(f.path) : f.path),
            a.buildURLFromParts(g)
          );
        },
        parseURL: function (l) {
          var u = r.exec(l);
          return u
            ? {
                scheme: u[1] || "",
                netLoc: u[2] || "",
                path: u[3] || "",
                params: u[4] || "",
                query: u[5] || "",
                fragment: u[6] || "",
              }
            : null;
        },
        normalizePath: function (l) {
          for (
            l = l.split("").reverse().join("").replace(s, "");
            l.length !== (l = l.replace(o, "")).length;

          );
          return l.split("").reverse().join("");
        },
        buildURLFromParts: function (l) {
          return l.scheme + l.netLoc + l.path + l.params + l.query + l.fragment;
        },
      };
    n.exports = a;
  })();
})(qh);
var ru = qh.exports;
function Bc(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(n, i).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function qe(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Bc(Object(t), !0).forEach(function (r) {
          sy(n, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : Bc(Object(t)).forEach(function (r) {
          Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return n;
}
function sy(n, e, t) {
  return (
    (e = ay(e)),
    e in n
      ? Object.defineProperty(n, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[e] = t),
    n
  );
}
function Se() {
  return (
    (Se = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    Se.apply(this, arguments)
  );
}
function oy(n, e) {
  if (typeof n != "object" || n === null) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function ay(n) {
  var e = oy(n, "string");
  return typeof e == "symbol" ? e : String(e);
}
const G =
  Number.isFinite ||
  function (n) {
    return typeof n == "number" && isFinite(n);
  };
let y = (function (n) {
    return (
      (n.MEDIA_ATTACHING = "hlsMediaAttaching"),
      (n.MEDIA_ATTACHED = "hlsMediaAttached"),
      (n.MEDIA_DETACHING = "hlsMediaDetaching"),
      (n.MEDIA_DETACHED = "hlsMediaDetached"),
      (n.BUFFER_RESET = "hlsBufferReset"),
      (n.BUFFER_CODECS = "hlsBufferCodecs"),
      (n.BUFFER_CREATED = "hlsBufferCreated"),
      (n.BUFFER_APPENDING = "hlsBufferAppending"),
      (n.BUFFER_APPENDED = "hlsBufferAppended"),
      (n.BUFFER_EOS = "hlsBufferEos"),
      (n.BUFFER_FLUSHING = "hlsBufferFlushing"),
      (n.BUFFER_FLUSHED = "hlsBufferFlushed"),
      (n.MANIFEST_LOADING = "hlsManifestLoading"),
      (n.MANIFEST_LOADED = "hlsManifestLoaded"),
      (n.MANIFEST_PARSED = "hlsManifestParsed"),
      (n.LEVEL_SWITCHING = "hlsLevelSwitching"),
      (n.LEVEL_SWITCHED = "hlsLevelSwitched"),
      (n.LEVEL_LOADING = "hlsLevelLoading"),
      (n.LEVEL_LOADED = "hlsLevelLoaded"),
      (n.LEVEL_UPDATED = "hlsLevelUpdated"),
      (n.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated"),
      (n.LEVELS_UPDATED = "hlsLevelsUpdated"),
      (n.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated"),
      (n.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching"),
      (n.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched"),
      (n.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading"),
      (n.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded"),
      (n.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated"),
      (n.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared"),
      (n.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch"),
      (n.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading"),
      (n.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded"),
      (n.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed"),
      (n.CUES_PARSED = "hlsCuesParsed"),
      (n.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound"),
      (n.INIT_PTS_FOUND = "hlsInitPtsFound"),
      (n.FRAG_LOADING = "hlsFragLoading"),
      (n.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted"),
      (n.FRAG_LOADED = "hlsFragLoaded"),
      (n.FRAG_DECRYPTED = "hlsFragDecrypted"),
      (n.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment"),
      (n.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata"),
      (n.FRAG_PARSING_METADATA = "hlsFragParsingMetadata"),
      (n.FRAG_PARSED = "hlsFragParsed"),
      (n.FRAG_BUFFERED = "hlsFragBuffered"),
      (n.FRAG_CHANGED = "hlsFragChanged"),
      (n.FPS_DROP = "hlsFpsDrop"),
      (n.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping"),
      (n.ERROR = "hlsError"),
      (n.DESTROYING = "hlsDestroying"),
      (n.KEY_LOADING = "hlsKeyLoading"),
      (n.KEY_LOADED = "hlsKeyLoaded"),
      (n.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached"),
      (n.BACK_BUFFER_REACHED = "hlsBackBufferReached"),
      n
    );
  })({}),
  K = (function (n) {
    return (
      (n.NETWORK_ERROR = "networkError"),
      (n.MEDIA_ERROR = "mediaError"),
      (n.KEY_SYSTEM_ERROR = "keySystemError"),
      (n.MUX_ERROR = "muxError"),
      (n.OTHER_ERROR = "otherError"),
      n
    );
  })({}),
  F = (function (n) {
    return (
      (n.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys"),
      (n.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess"),
      (n.KEY_SYSTEM_NO_SESSION = "keySystemNoSession"),
      (n.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense"),
      (n.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed"),
      (n.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED =
        "keySystemServerCertificateRequestFailed"),
      (n.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED =
        "keySystemServerCertificateUpdateFailed"),
      (n.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed"),
      (n.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED =
        "keySystemStatusOutputRestricted"),
      (n.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError"),
      (n.MANIFEST_LOAD_ERROR = "manifestLoadError"),
      (n.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut"),
      (n.MANIFEST_PARSING_ERROR = "manifestParsingError"),
      (n.MANIFEST_INCOMPATIBLE_CODECS_ERROR =
        "manifestIncompatibleCodecsError"),
      (n.LEVEL_EMPTY_ERROR = "levelEmptyError"),
      (n.LEVEL_LOAD_ERROR = "levelLoadError"),
      (n.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut"),
      (n.LEVEL_PARSING_ERROR = "levelParsingError"),
      (n.LEVEL_SWITCH_ERROR = "levelSwitchError"),
      (n.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError"),
      (n.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut"),
      (n.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError"),
      (n.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut"),
      (n.FRAG_LOAD_ERROR = "fragLoadError"),
      (n.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut"),
      (n.FRAG_DECRYPT_ERROR = "fragDecryptError"),
      (n.FRAG_PARSING_ERROR = "fragParsingError"),
      (n.FRAG_GAP = "fragGap"),
      (n.REMUX_ALLOC_ERROR = "remuxAllocError"),
      (n.KEY_LOAD_ERROR = "keyLoadError"),
      (n.KEY_LOAD_TIMEOUT = "keyLoadTimeOut"),
      (n.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError"),
      (n.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError"),
      (n.BUFFER_APPEND_ERROR = "bufferAppendError"),
      (n.BUFFER_APPENDING_ERROR = "bufferAppendingError"),
      (n.BUFFER_STALLED_ERROR = "bufferStalledError"),
      (n.BUFFER_FULL_ERROR = "bufferFullError"),
      (n.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole"),
      (n.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall"),
      (n.INTERNAL_EXCEPTION = "internalException"),
      (n.INTERNAL_ABORTED = "aborted"),
      (n.UNKNOWN = "unknown"),
      n
    );
  })({});
const vn = function () {},
  Xa = { trace: vn, debug: vn, log: vn, warn: vn, info: vn, error: vn };
let $r = Xa;
function ly(n) {
  const e = self.console[n];
  return e ? e.bind(self.console, `[${n}] >`) : vn;
}
function uy(n, ...e) {
  e.forEach(function (t) {
    $r[t] = n[t] ? n[t].bind(n) : ly(t);
  });
}
function cy(n, e) {
  if ((self.console && n === !0) || typeof n == "object") {
    uy(n, "debug", "log", "info", "warn", "error");
    try {
      $r.log(`Debug logs enabled for "${e}" in hls.js version 1.4.4`);
    } catch {
      $r = Xa;
    }
  } else $r = Xa;
}
const A = $r,
  dy = /^(\d+)x(\d+)$/,
  bc = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class ue {
  constructor(e) {
    typeof e == "string" && (e = ue.parseAttrList(e));
    for (const t in e)
      e.hasOwnProperty(t) &&
        (t.substring(0, 2) === "X-" &&
          ((this.clientAttrs = this.clientAttrs || []),
          this.clientAttrs.push(t)),
        (this[t] = e[t]));
  }
  decimalInteger(e) {
    const t = parseInt(this[e], 10);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  hexadecimalInteger(e) {
    if (this[e]) {
      let t = (this[e] || "0x").slice(2);
      t = (t.length & 1 ? "0" : "") + t;
      const r = new Uint8Array(t.length / 2);
      for (let i = 0; i < t.length / 2; i++)
        r[i] = parseInt(t.slice(i * 2, i * 2 + 2), 16);
      return r;
    } else return null;
  }
  hexadecimalIntegerAsNumber(e) {
    const t = parseInt(this[e], 16);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  decimalFloatingPoint(e) {
    return parseFloat(this[e]);
  }
  optionalFloat(e, t) {
    const r = this[e];
    return r ? parseFloat(r) : t;
  }
  enumeratedString(e) {
    return this[e];
  }
  bool(e) {
    return this[e] === "YES";
  }
  decimalResolution(e) {
    const t = dy.exec(this[e]);
    if (t !== null)
      return { width: parseInt(t[1], 10), height: parseInt(t[2], 10) };
  }
  static parseAttrList(e) {
    let t;
    const r = {},
      i = '"';
    for (bc.lastIndex = 0; (t = bc.exec(e)) !== null; ) {
      let s = t[2];
      s.indexOf(i) === 0 &&
        s.lastIndexOf(i) === s.length - 1 &&
        (s = s.slice(1, -1));
      const o = t[1].trim();
      r[o] = s;
    }
    return r;
  }
}
function fy(n) {
  return (
    n !== "ID" &&
    n !== "CLASS" &&
    n !== "START-DATE" &&
    n !== "DURATION" &&
    n !== "END-DATE" &&
    n !== "END-ON-NEXT"
  );
}
function hy(n) {
  return n === "SCTE35-OUT" || n === "SCTE35-IN";
}
class Qh {
  constructor(e, t) {
    if (
      ((this.attr = void 0),
      (this._startDate = void 0),
      (this._endDate = void 0),
      (this._badValueForSameId = void 0),
      t)
    ) {
      const r = t.attr;
      for (const i in r)
        if (Object.prototype.hasOwnProperty.call(e, i) && e[i] !== r[i]) {
          A.warn(
            `DATERANGE tag attribute: "${i}" does not match for tags with ID: "${e.ID}"`
          ),
            (this._badValueForSameId = i);
          break;
        }
      e = Se(new ue({}), r, e);
    }
    if (
      ((this.attr = e),
      (this._startDate = new Date(e["START-DATE"])),
      "END-DATE" in this.attr)
    ) {
      const r = new Date(this.attr["END-DATE"]);
      G(r.getTime()) && (this._endDate = r);
    }
  }
  get id() {
    return this.attr.ID;
  }
  get class() {
    return this.attr.CLASS;
  }
  get startDate() {
    return this._startDate;
  }
  get endDate() {
    if (this._endDate) return this._endDate;
    const e = this.duration;
    return e !== null ? new Date(this._startDate.getTime() + e * 1e3) : null;
  }
  get duration() {
    if ("DURATION" in this.attr) {
      const e = this.attr.decimalFloatingPoint("DURATION");
      if (G(e)) return e;
    } else if (this._endDate)
      return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
    return null;
  }
  get plannedDuration() {
    return "PLANNED-DURATION" in this.attr
      ? this.attr.decimalFloatingPoint("PLANNED-DURATION")
      : null;
  }
  get endOnNext() {
    return this.attr.bool("END-ON-NEXT");
  }
  get isValid() {
    return (
      !!this.id &&
      !this._badValueForSameId &&
      G(this.startDate.getTime()) &&
      (this.duration === null || this.duration >= 0) &&
      (!this.endOnNext || !!this.class)
    );
  }
}
class Qs {
  constructor() {
    (this.aborted = !1),
      (this.loaded = 0),
      (this.retry = 0),
      (this.total = 0),
      (this.chunkCount = 0),
      (this.bwEstimate = 0),
      (this.loading = { start: 0, first: 0, end: 0 }),
      (this.parsing = { start: 0, end: 0 }),
      (this.buffering = { start: 0, first: 0, end: 0 });
  }
}
var ee = { AUDIO: "audio", VIDEO: "video", AUDIOVIDEO: "audiovideo" };
class Zh {
  constructor(e) {
    (this._byteRange = null),
      (this._url = null),
      (this.baseurl = void 0),
      (this.relurl = void 0),
      (this.elementaryStreams = {
        [ee.AUDIO]: null,
        [ee.VIDEO]: null,
        [ee.AUDIOVIDEO]: null,
      }),
      (this.baseurl = e);
  }
  setByteRange(e, t) {
    const r = e.split("@", 2),
      i = [];
    r.length === 1
      ? (i[0] = t ? t.byteRangeEndOffset : 0)
      : (i[0] = parseInt(r[1])),
      (i[1] = parseInt(r[0]) + i[0]),
      (this._byteRange = i);
  }
  get byteRange() {
    return this._byteRange ? this._byteRange : [];
  }
  get byteRangeStartOffset() {
    return this.byteRange[0];
  }
  get byteRangeEndOffset() {
    return this.byteRange[1];
  }
  get url() {
    return (
      !this._url &&
        this.baseurl &&
        this.relurl &&
        (this._url = ru.buildAbsoluteURL(this.baseurl, this.relurl, {
          alwaysNormalize: !0,
        })),
      this._url || ""
    );
  }
  set url(e) {
    this._url = e;
  }
}
class Fo extends Zh {
  constructor(e, t) {
    super(t),
      (this._decryptdata = null),
      (this.rawProgramDateTime = null),
      (this.programDateTime = null),
      (this.tagList = []),
      (this.duration = 0),
      (this.sn = 0),
      (this.levelkeys = void 0),
      (this.type = void 0),
      (this.loader = null),
      (this.keyLoader = null),
      (this.level = -1),
      (this.cc = 0),
      (this.startPTS = void 0),
      (this.endPTS = void 0),
      (this.startDTS = void 0),
      (this.endDTS = void 0),
      (this.start = 0),
      (this.deltaPTS = void 0),
      (this.maxStartPTS = void 0),
      (this.minEndPTS = void 0),
      (this.stats = new Qs()),
      (this.urlId = 0),
      (this.data = void 0),
      (this.bitrateTest = !1),
      (this.title = null),
      (this.initSegment = null),
      (this.endList = void 0),
      (this.gap = void 0),
      (this.type = e);
  }
  get decryptdata() {
    const { levelkeys: e } = this;
    if (!e && !this._decryptdata) return null;
    if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
      const t = this.levelkeys.identity;
      if (t) this._decryptdata = t.getDecryptData(this.sn);
      else {
        const r = Object.keys(this.levelkeys);
        if (r.length === 1)
          return (this._decryptdata = this.levelkeys[r[0]].getDecryptData(
            this.sn
          ));
      }
    }
    return this._decryptdata;
  }
  get end() {
    return this.start + this.duration;
  }
  get endProgramDateTime() {
    if (this.programDateTime === null || !G(this.programDateTime)) return null;
    const e = G(this.duration) ? this.duration : 0;
    return this.programDateTime + e * 1e3;
  }
  get encrypted() {
    var e;
    if ((e = this._decryptdata) != null && e.encrypted) return !0;
    if (this.levelkeys) {
      const t = Object.keys(this.levelkeys),
        r = t.length;
      if (r > 1 || (r === 1 && this.levelkeys[t[0]].encrypted)) return !0;
    }
    return !1;
  }
  setKeyFormat(e) {
    if (this.levelkeys) {
      const t = this.levelkeys[e];
      t &&
        !this._decryptdata &&
        (this._decryptdata = t.getDecryptData(this.sn));
    }
  }
  abortRequests() {
    var e, t;
    (e = this.loader) == null || e.abort(),
      (t = this.keyLoader) == null || t.abort();
  }
  setElementaryStreamInfo(e, t, r, i, s, o = !1) {
    const { elementaryStreams: a } = this,
      l = a[e];
    if (!l) {
      a[e] = { startPTS: t, endPTS: r, startDTS: i, endDTS: s, partial: o };
      return;
    }
    (l.startPTS = Math.min(l.startPTS, t)),
      (l.endPTS = Math.max(l.endPTS, r)),
      (l.startDTS = Math.min(l.startDTS, i)),
      (l.endDTS = Math.max(l.endDTS, s));
  }
  clearElementaryStreamInfo() {
    const { elementaryStreams: e } = this;
    (e[ee.AUDIO] = null), (e[ee.VIDEO] = null), (e[ee.AUDIOVIDEO] = null);
  }
}
class py extends Zh {
  constructor(e, t, r, i, s) {
    super(r),
      (this.fragOffset = 0),
      (this.duration = 0),
      (this.gap = !1),
      (this.independent = !1),
      (this.relurl = void 0),
      (this.fragment = void 0),
      (this.index = void 0),
      (this.stats = new Qs()),
      (this.duration = e.decimalFloatingPoint("DURATION")),
      (this.gap = e.bool("GAP")),
      (this.independent = e.bool("INDEPENDENT")),
      (this.relurl = e.enumeratedString("URI")),
      (this.fragment = t),
      (this.index = i);
    const o = e.enumeratedString("BYTERANGE");
    o && this.setByteRange(o, s),
      s && (this.fragOffset = s.fragOffset + s.duration);
  }
  get start() {
    return this.fragment.start + this.fragOffset;
  }
  get end() {
    return this.start + this.duration;
  }
  get loaded() {
    const { elementaryStreams: e } = this;
    return !!(e.audio || e.video || e.audiovideo);
  }
}
const gy = 10;
class my {
  constructor(e) {
    (this.PTSKnown = !1),
      (this.alignedSliding = !1),
      (this.averagetargetduration = void 0),
      (this.endCC = 0),
      (this.endSN = 0),
      (this.fragments = void 0),
      (this.fragmentHint = void 0),
      (this.partList = null),
      (this.dateRanges = void 0),
      (this.live = !0),
      (this.ageHeader = 0),
      (this.advancedDateTime = void 0),
      (this.updated = !0),
      (this.advanced = !0),
      (this.availabilityDelay = void 0),
      (this.misses = 0),
      (this.startCC = 0),
      (this.startSN = 0),
      (this.startTimeOffset = null),
      (this.targetduration = 0),
      (this.totalduration = 0),
      (this.type = null),
      (this.url = void 0),
      (this.m3u8 = ""),
      (this.version = null),
      (this.canBlockReload = !1),
      (this.canSkipUntil = 0),
      (this.canSkipDateRanges = !1),
      (this.skippedSegments = 0),
      (this.recentlyRemovedDateranges = void 0),
      (this.partHoldBack = 0),
      (this.holdBack = 0),
      (this.partTarget = 0),
      (this.preloadHint = void 0),
      (this.renditionReports = void 0),
      (this.tuneInGoal = 0),
      (this.deltaUpdateFailed = void 0),
      (this.driftStartTime = 0),
      (this.driftEndTime = 0),
      (this.driftStart = 0),
      (this.driftEnd = 0),
      (this.encryptedFragments = void 0),
      (this.playlistParsingError = null),
      (this.variableList = null),
      (this.hasVariableRefs = !1),
      (this.fragments = []),
      (this.encryptedFragments = []),
      (this.dateRanges = {}),
      (this.url = e);
  }
  reloaded(e) {
    if (!e) {
      (this.advanced = !0), (this.updated = !0);
      return;
    }
    const t = this.lastPartSn - e.lastPartSn,
      r = this.lastPartIndex - e.lastPartIndex;
    (this.updated = this.endSN !== e.endSN || !!r || !!t),
      (this.advanced = this.endSN > e.endSN || t > 0 || (t === 0 && r > 0)),
      this.updated || this.advanced
        ? (this.misses = Math.floor(e.misses * 0.6))
        : (this.misses = e.misses + 1),
      (this.availabilityDelay = e.availabilityDelay);
  }
  get hasProgramDateTime() {
    return this.fragments.length
      ? G(this.fragments[this.fragments.length - 1].programDateTime)
      : !1;
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || gy;
  }
  get drift() {
    const e = this.driftEndTime - this.driftStartTime;
    return e > 0 ? ((this.driftEnd - this.driftStart) * 1e3) / e : 1;
  }
  get edge() {
    return this.partEnd || this.fragmentEnd;
  }
  get partEnd() {
    var e;
    return (e = this.partList) != null && e.length
      ? this.partList[this.partList.length - 1].end
      : this.fragmentEnd;
  }
  get fragmentEnd() {
    var e;
    return (e = this.fragments) != null && e.length
      ? this.fragments[this.fragments.length - 1].end
      : 0;
  }
  get age() {
    return this.advancedDateTime
      ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3
      : 0;
  }
  get lastPartIndex() {
    var e;
    return (e = this.partList) != null && e.length
      ? this.partList[this.partList.length - 1].index
      : -1;
  }
  get lastPartSn() {
    var e;
    return (e = this.partList) != null && e.length
      ? this.partList[this.partList.length - 1].fragment.sn
      : this.endSN;
  }
}
function iu(n) {
  return Uint8Array.from(atob(n), (e) => e.charCodeAt(0));
}
function yy(n) {
  const e = Jh(n).subarray(0, 16),
    t = new Uint8Array(16);
  return t.set(e, 16 - e.length), t;
}
function Ey(n) {
  const e = function (r, i, s) {
    const o = r[i];
    (r[i] = r[s]), (r[s] = o);
  };
  e(n, 0, 3), e(n, 1, 2), e(n, 4, 5), e(n, 6, 7);
}
function vy(n) {
  const e = n.split(":");
  let t = null;
  if (e[0] === "data" && e.length === 2) {
    const r = e[1].split(";"),
      i = r[r.length - 1].split(",");
    if (i.length === 2) {
      const s = i[0] === "base64",
        o = i[1];
      s ? (r.splice(-1, 1), (t = iu(o))) : (t = yy(o));
    }
  }
  return t;
}
function Jh(n) {
  return Uint8Array.from(unescape(encodeURIComponent(n)), (e) =>
    e.charCodeAt(0)
  );
}
var de = {
    CLEARKEY: "org.w3.clearkey",
    FAIRPLAY: "com.apple.fps",
    PLAYREADY: "com.microsoft.playready",
    WIDEVINE: "com.widevine.alpha",
  },
  We = {
    CLEARKEY: "org.w3.clearkey",
    FAIRPLAY: "com.apple.streamingkeydelivery",
    PLAYREADY: "com.microsoft.playready",
    WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
  };
function Nc(n) {
  switch (n) {
    case We.FAIRPLAY:
      return de.FAIRPLAY;
    case We.PLAYREADY:
      return de.PLAYREADY;
    case We.WIDEVINE:
      return de.WIDEVINE;
    case We.CLEARKEY:
      return de.CLEARKEY;
  }
}
var e0 = { WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed" };
function xy(n) {
  if (n === e0.WIDEVINE) return de.WIDEVINE;
}
function Mc(n) {
  switch (n) {
    case de.FAIRPLAY:
      return We.FAIRPLAY;
    case de.PLAYREADY:
      return We.PLAYREADY;
    case de.WIDEVINE:
      return We.WIDEVINE;
    case de.CLEARKEY:
      return We.CLEARKEY;
  }
}
function wo(n) {
  const { drmSystems: e, widevineLicenseUrl: t } = n,
    r = e
      ? [de.FAIRPLAY, de.WIDEVINE, de.PLAYREADY, de.CLEARKEY].filter(
          (i) => !!e[i]
        )
      : [];
  return !r[de.WIDEVINE] && t && r.push(de.WIDEVINE), r;
}
const t0 = (function () {
  return typeof self < "u" &&
    self.navigator &&
    self.navigator.requestMediaKeySystemAccess
    ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator)
    : null;
})();
function Ty(n, e, t, r) {
  let i;
  switch (n) {
    case de.FAIRPLAY:
      i = ["cenc", "sinf"];
      break;
    case de.WIDEVINE:
    case de.PLAYREADY:
      i = ["cenc"];
      break;
    case de.CLEARKEY:
      i = ["cenc", "keyids"];
      break;
    default:
      throw new Error(`Unknown key-system: ${n}`);
  }
  return Sy(i, e, t, r);
}
function Sy(n, e, t, r) {
  return [
    {
      initDataTypes: n,
      persistentState: r.persistentState || "not-allowed",
      distinctiveIdentifier: r.distinctiveIdentifier || "not-allowed",
      sessionTypes: r.sessionTypes || [r.sessionType || "temporary"],
      audioCapabilities: e.map((s) => ({
        contentType: `audio/mp4; codecs="${s}"`,
        robustness: r.audioRobustness || "",
        encryptionScheme: r.audioEncryptionScheme || null,
      })),
      videoCapabilities: t.map((s) => ({
        contentType: `video/mp4; codecs="${s}"`,
        robustness: r.videoRobustness || "",
        encryptionScheme: r.videoEncryptionScheme || null,
      })),
    },
  ];
}
function Dn(n, e, t) {
  return Uint8Array.prototype.slice
    ? n.slice(e, t)
    : new Uint8Array(Array.prototype.slice.call(n, e, t));
}
const su = (n, e) =>
    e + 10 <= n.length &&
    n[e] === 73 &&
    n[e + 1] === 68 &&
    n[e + 2] === 51 &&
    n[e + 3] < 255 &&
    n[e + 4] < 255 &&
    n[e + 6] < 128 &&
    n[e + 7] < 128 &&
    n[e + 8] < 128 &&
    n[e + 9] < 128,
  n0 = (n, e) =>
    e + 10 <= n.length &&
    n[e] === 51 &&
    n[e + 1] === 68 &&
    n[e + 2] === 73 &&
    n[e + 3] < 255 &&
    n[e + 4] < 255 &&
    n[e + 6] < 128 &&
    n[e + 7] < 128 &&
    n[e + 8] < 128 &&
    n[e + 9] < 128,
  Rs = (n, e) => {
    const t = e;
    let r = 0;
    for (; su(n, e); ) {
      r += 10;
      const i = Zs(n, e + 6);
      (r += i), n0(n, e + 10) && (r += 10), (e += r);
    }
    if (r > 0) return n.subarray(t, t + r);
  },
  Zs = (n, e) => {
    let t = 0;
    return (
      (t = (n[e] & 127) << 21),
      (t |= (n[e + 1] & 127) << 14),
      (t |= (n[e + 2] & 127) << 7),
      (t |= n[e + 3] & 127),
      t
    );
  },
  Ay = (n, e) => su(n, e) && Zs(n, e + 6) + 10 <= n.length - e,
  Ly = (n) => {
    const e = i0(n);
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      if (r0(r)) return wy(r);
    }
  },
  r0 = (n) =>
    n &&
    n.key === "PRIV" &&
    n.info === "com.apple.streaming.transportStreamTimestamp",
  Cy = (n) => {
    const e = String.fromCharCode(n[0], n[1], n[2], n[3]),
      t = Zs(n, 4),
      r = 10;
    return { type: e, size: t, data: n.subarray(r, r + t) };
  },
  i0 = (n) => {
    let e = 0;
    const t = [];
    for (; su(n, e); ) {
      const r = Zs(n, e + 6);
      e += 10;
      const i = e + r;
      for (; e + 8 < i; ) {
        const s = Cy(n.subarray(e)),
          o = Dy(s);
        o && t.push(o), (e += s.size + 10);
      }
      n0(n, e) && (e += 10);
    }
    return t;
  },
  Dy = (n) => (n.type === "PRIV" ? Ry(n) : n.type[0] === "W" ? Fy(n) : Iy(n)),
  Ry = (n) => {
    if (n.size < 2) return;
    const e = wt(n.data, !0),
      t = new Uint8Array(n.data.subarray(e.length + 1));
    return { key: n.type, info: e, data: t.buffer };
  },
  Iy = (n) => {
    if (n.size < 2) return;
    if (n.type === "TXXX") {
      let t = 1;
      const r = wt(n.data.subarray(t), !0);
      t += r.length + 1;
      const i = wt(n.data.subarray(t));
      return { key: n.type, info: r, data: i };
    }
    const e = wt(n.data.subarray(1));
    return { key: n.type, data: e };
  },
  Fy = (n) => {
    if (n.type === "WXXX") {
      if (n.size < 2) return;
      let t = 1;
      const r = wt(n.data.subarray(t), !0);
      t += r.length + 1;
      const i = wt(n.data.subarray(t));
      return { key: n.type, info: r, data: i };
    }
    const e = wt(n.data);
    return { key: n.type, data: e };
  },
  wy = (n) => {
    if (n.data.byteLength === 8) {
      const e = new Uint8Array(n.data),
        t = e[3] & 1;
      let r = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
      return (r /= 45), t && (r += 4772185884e-2), Math.round(r);
    }
  },
  wt = (n, e = !1) => {
    const t = ky();
    if (t) {
      const u = t.decode(n);
      if (e) {
        const c = u.indexOf("\0");
        return c !== -1 ? u.substring(0, c) : u;
      }
      return u.replace(/\0/g, "");
    }
    const r = n.length;
    let i,
      s,
      o,
      a = "",
      l = 0;
    for (; l < r; ) {
      if (((i = n[l++]), i === 0 && e)) return a;
      if (i === 0 || i === 3) continue;
      switch (i >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          a += String.fromCharCode(i);
          break;
        case 12:
        case 13:
          (s = n[l++]), (a += String.fromCharCode(((i & 31) << 6) | (s & 63)));
          break;
        case 14:
          (s = n[l++]),
            (o = n[l++]),
            (a += String.fromCharCode(
              ((i & 15) << 12) | ((s & 63) << 6) | ((o & 63) << 0)
            ));
          break;
      }
    }
    return a;
  };
let ko;
function ky() {
  return (
    !ko &&
      typeof self.TextDecoder < "u" &&
      (ko = new self.TextDecoder("utf-8")),
    ko
  );
}
const Ct = {
    hexDump: function (n) {
      let e = "";
      for (let t = 0; t < n.length; t++) {
        let r = n[t].toString(16);
        r.length < 2 && (r = "0" + r), (e += r);
      }
      return e;
    },
  },
  Is = Math.pow(2, 32) - 1,
  _y = [].push,
  s0 = { video: 1, audio: 2, id3: 3, text: 4 };
function Re(n) {
  return String.fromCharCode.apply(null, n);
}
function o0(n, e) {
  const t = (n[e] << 8) | n[e + 1];
  return t < 0 ? 65536 + t : t;
}
function z(n, e) {
  const t = a0(n, e);
  return t < 0 ? 4294967296 + t : t;
}
function a0(n, e) {
  return (n[e] << 24) | (n[e + 1] << 16) | (n[e + 2] << 8) | n[e + 3];
}
function _o(n, e, t) {
  (n[e] = t >> 24),
    (n[e + 1] = (t >> 16) & 255),
    (n[e + 2] = (t >> 8) & 255),
    (n[e + 3] = t & 255);
}
function X(n, e) {
  const t = [];
  if (!e.length) return t;
  const r = n.byteLength;
  for (let i = 0; i < r; ) {
    const s = z(n, i),
      o = Re(n.subarray(i + 4, i + 8)),
      a = s > 1 ? i + s : r;
    if (o === e[0])
      if (e.length === 1) t.push(n.subarray(i + 8, a));
      else {
        const l = X(n.subarray(i + 8, a), e.slice(1));
        l.length && _y.apply(t, l);
      }
    i = a;
  }
  return t;
}
function Py(n) {
  const e = [],
    t = n[0];
  let r = 8;
  const i = z(n, r);
  r += 4;
  const s = 0,
    o = 0;
  t === 0 ? (r += 8) : (r += 16), (r += 2);
  let a = n.length + o;
  const l = o0(n, r);
  r += 2;
  for (let u = 0; u < l; u++) {
    let c = r;
    const d = z(n, c);
    c += 4;
    const f = d & 2147483647;
    if ((d & 2147483648) >>> 31 === 1)
      return A.warn("SIDX has hierarchical references (not supported)"), null;
    const p = z(n, c);
    (c += 4),
      e.push({
        referenceSize: f,
        subsegmentDuration: p,
        info: { duration: p / i, start: a, end: a + f - 1 },
      }),
      (a += f),
      (c += 4),
      (r = c);
  }
  return {
    earliestPresentationTime: s,
    timescale: i,
    version: t,
    referencesCount: l,
    references: e,
  };
}
function l0(n) {
  const e = [],
    t = X(n, ["moov", "trak"]);
  for (let i = 0; i < t.length; i++) {
    const s = t[i],
      o = X(s, ["tkhd"])[0];
    if (o) {
      let a = o[0],
        l = a === 0 ? 12 : 20;
      const u = z(o, l),
        c = X(s, ["mdia", "mdhd"])[0];
      if (c) {
        (a = c[0]), (l = a === 0 ? 12 : 20);
        const d = z(c, l),
          f = X(s, ["mdia", "hdlr"])[0];
        if (f) {
          const h = Re(f.subarray(8, 12)),
            p = { soun: ee.AUDIO, vide: ee.VIDEO }[h];
          if (p) {
            const g = X(s, ["mdia", "minf", "stbl", "stsd"])[0];
            let v;
            g && (v = Re(g.subarray(12, 16))),
              (e[u] = { timescale: d, type: p }),
              (e[p] = { timescale: d, id: u, codec: v });
          }
        }
      }
    }
  }
  return (
    X(n, ["moov", "mvex", "trex"]).forEach((i) => {
      const s = z(i, 4),
        o = e[s];
      o && (o.default = { duration: z(i, 12), flags: z(i, 20) });
    }),
    e
  );
}
function Oy(n, e) {
  if (!n || !e) return n;
  const t = e.keyId;
  return (
    t &&
      e.isCommonEncryption &&
      X(n, ["moov", "trak"]).forEach((i) => {
        const o = X(i, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8);
        let a = X(o, ["enca"]);
        const l = a.length > 0;
        l || (a = X(o, ["encv"])),
          a.forEach((u) => {
            const c = l ? u.subarray(28) : u.subarray(78);
            X(c, ["sinf"]).forEach((f) => {
              const h = u0(f);
              if (h) {
                const p = h.subarray(8, 24);
                p.some((g) => g !== 0) ||
                  (A.log(
                    `[eme] Patching keyId in 'enc${
                      l ? "a" : "v"
                    }>sinf>>tenc' box: ${Ct.hexDump(p)} -> ${Ct.hexDump(t)}`
                  ),
                  h.set(t, 8));
              }
            });
          });
      }),
    n
  );
}
function u0(n) {
  const e = X(n, ["schm"])[0];
  if (e) {
    const t = Re(e.subarray(4, 8));
    if (t === "cbcs" || t === "cenc") return X(n, ["schi", "tenc"])[0];
  }
  return A.error("[eme] missing 'schm' box"), null;
}
function By(n, e) {
  return X(e, ["moof", "traf"]).reduce((t, r) => {
    const i = X(r, ["tfdt"])[0],
      s = i[0],
      o = X(r, ["tfhd"]).reduce((a, l) => {
        const u = z(l, 4),
          c = n[u];
        if (c) {
          let d = z(i, 4);
          if (s === 1) {
            if (d === Is)
              return (
                A.warn(
                  "[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"
                ),
                a
              );
            (d *= Is + 1), (d += z(i, 8));
          }
          const f = c.timescale || 9e4,
            h = d / f;
          if (isFinite(h) && (a === null || h < a)) return h;
        }
        return a;
      }, null);
    return o !== null && isFinite(o) && (t === null || o < t) ? o : t;
  }, null);
}
function by(n, e) {
  let t = 0,
    r = 0,
    i = 0;
  const s = X(n, ["moof", "traf"]);
  for (let o = 0; o < s.length; o++) {
    const a = s[o],
      l = X(a, ["tfhd"])[0],
      u = z(l, 4),
      c = e[u];
    if (!c) continue;
    const d = c.default,
      f = z(l, 0) | (d == null ? void 0 : d.flags);
    let h = d == null ? void 0 : d.duration;
    f & 8 && (f & 2 ? (h = z(l, 12)) : (h = z(l, 8)));
    const p = c.timescale || 9e4,
      g = X(a, ["trun"]);
    for (let v = 0; v < g.length; v++) {
      if (((t = Ny(g[v])), !t && h)) {
        const m = z(g[v], 4);
        t = h * m;
      }
      c.type === ee.VIDEO ? (r += t / p) : c.type === ee.AUDIO && (i += t / p);
    }
  }
  if (r === 0 && i === 0) {
    let o = 0;
    const a = X(n, ["sidx"]);
    for (let l = 0; l < a.length; l++) {
      const u = Py(a[l]);
      u != null &&
        u.references &&
        (o += u.references.reduce((c, d) => c + d.info.duration || 0, 0));
    }
    return o;
  }
  return r || i;
}
function Ny(n) {
  const e = z(n, 0);
  let t = 8;
  e & 1 && (t += 4), e & 4 && (t += 4);
  let r = 0;
  const i = z(n, 4);
  for (let s = 0; s < i; s++) {
    if (e & 256) {
      const o = z(n, t);
      (r += o), (t += 4);
    }
    e & 512 && (t += 4), e & 1024 && (t += 4), e & 2048 && (t += 4);
  }
  return r;
}
function My(n, e, t) {
  X(e, ["moof", "traf"]).forEach((r) => {
    X(r, ["tfhd"]).forEach((i) => {
      const s = z(i, 4),
        o = n[s];
      if (!o) return;
      const a = o.timescale || 9e4;
      X(r, ["tfdt"]).forEach((l) => {
        const u = l[0];
        let c = z(l, 4);
        if (u === 0) (c -= t * a), (c = Math.max(c, 0)), _o(l, 4, c);
        else {
          (c *= Math.pow(2, 32)),
            (c += z(l, 8)),
            (c -= t * a),
            (c = Math.max(c, 0));
          const d = Math.floor(c / (Is + 1)),
            f = Math.floor(c % (Is + 1));
          _o(l, 4, d), _o(l, 8, f);
        }
      });
    });
  });
}
function Uy(n) {
  const e = { valid: null, remainder: null },
    t = X(n, ["moof"]);
  if (t) {
    if (t.length < 2) return (e.remainder = n), e;
  } else return e;
  const r = t[t.length - 1];
  return (
    (e.valid = Dn(n, 0, r.byteOffset - 8)),
    (e.remainder = Dn(n, r.byteOffset - 8)),
    e
  );
}
function _n(n, e) {
  const t = new Uint8Array(n.length + e.length);
  return t.set(n), t.set(e, n.length), t;
}
function Uc(n, e) {
  const t = [],
    r = e.samples,
    i = e.timescale,
    s = e.id;
  let o = !1;
  return (
    X(r, ["moof"]).map((l) => {
      const u = l.byteOffset - 8;
      X(l, ["traf"]).map((d) => {
        const f = X(d, ["tfdt"]).map((h) => {
          const p = h[0];
          let g = z(h, 4);
          return p === 1 && ((g *= Math.pow(2, 32)), (g += z(h, 8))), g / i;
        })[0];
        return (
          f !== void 0 && (n = f),
          X(d, ["tfhd"]).map((h) => {
            const p = z(h, 4),
              g = z(h, 0) & 16777215,
              v = (g & 1) !== 0,
              m = (g & 2) !== 0,
              E = (g & 8) !== 0;
            let x = 0;
            const T = (g & 16) !== 0;
            let S = 0;
            const R = (g & 32) !== 0;
            let L = 8;
            p === s &&
              (v && (L += 8),
              m && (L += 4),
              E && ((x = z(h, L)), (L += 4)),
              T && ((S = z(h, L)), (L += 4)),
              R && (L += 4),
              e.type === "video" && (o = $y(e.codec)),
              X(d, ["trun"]).map((I) => {
                const _ = I[0],
                  D = z(I, 0) & 16777215,
                  U = (D & 1) !== 0;
                let b = 0;
                const Y = (D & 4) !== 0,
                  Ae = (D & 256) !== 0;
                let ne = 0;
                const te = (D & 512) !== 0;
                let J = 0;
                const w = (D & 1024) !== 0,
                  P = (D & 2048) !== 0;
                let N = 0;
                const W = z(I, 4);
                let H = 8;
                U && ((b = z(I, H)), (H += 4)), Y && (H += 4);
                let ae = b + u;
                for (let me = 0; me < W; me++) {
                  if (
                    (Ae ? ((ne = z(I, H)), (H += 4)) : (ne = x),
                    te ? ((J = z(I, H)), (H += 4)) : (J = S),
                    w && (H += 4),
                    P && (_ === 0 ? (N = z(I, H)) : (N = a0(I, H)), (H += 4)),
                    e.type === ee.VIDEO)
                  ) {
                    let be = 0;
                    for (; be < J; ) {
                      const ye = z(r, ae);
                      if (((ae += 4), Gy(o, r[ae]))) {
                        const rt = r.subarray(ae, ae + ye);
                        c0(rt, o ? 2 : 1, n + N / i, t);
                      }
                      (ae += ye), (be += ye + 4);
                    }
                  }
                  n += ne / i;
                }
              }));
          })
        );
      });
    }),
    t
  );
}
function $y(n) {
  if (!n) return !1;
  const e = n.indexOf("."),
    t = e < 0 ? n : n.substring(0, e);
  return t === "hvc1" || t === "hev1" || t === "dvh1" || t === "dvhe";
}
function Gy(n, e) {
  if (n) {
    const t = (e >> 1) & 63;
    return t === 39 || t === 40;
  } else return (e & 31) === 6;
}
function c0(n, e, t, r) {
  const i = d0(n);
  let s = 0;
  s += e;
  let o = 0,
    a = 0,
    l = !1,
    u = 0;
  for (; s < i.length; ) {
    o = 0;
    do {
      if (s >= i.length) break;
      (u = i[s++]), (o += u);
    } while (u === 255);
    a = 0;
    do {
      if (s >= i.length) break;
      (u = i[s++]), (a += u);
    } while (u === 255);
    const c = i.length - s;
    if (!l && o === 4 && s < i.length) {
      if (((l = !0), i[s++] === 181)) {
        const f = o0(i, s);
        if (((s += 2), f === 49)) {
          const h = z(i, s);
          if (((s += 4), h === 1195456820)) {
            const p = i[s++];
            if (p === 3) {
              const g = i[s++],
                v = 31 & g,
                m = 64 & g,
                E = m ? 2 + v * 3 : 0,
                x = new Uint8Array(E);
              if (m) {
                x[0] = g;
                for (let T = 1; T < E; T++) x[T] = i[s++];
              }
              r.push({ type: p, payloadType: o, pts: t, bytes: x });
            }
          }
        }
      }
    } else if (o === 5 && a < c) {
      if (((l = !0), a > 16)) {
        const d = [];
        for (let p = 0; p < 16; p++) {
          const g = i[s++].toString(16);
          d.push(g.length == 1 ? "0" + g : g),
            (p === 3 || p === 5 || p === 7 || p === 9) && d.push("-");
        }
        const f = a - 16,
          h = new Uint8Array(f);
        for (let p = 0; p < f; p++) h[p] = i[s++];
        r.push({
          payloadType: o,
          pts: t,
          uuid: d.join(""),
          userData: wt(h),
          userDataBytes: h,
        });
      }
    } else if (a < c) s += a;
    else if (a > c) break;
  }
}
function d0(n) {
  const e = n.byteLength,
    t = [];
  let r = 1;
  for (; r < e - 2; )
    n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 3
      ? (t.push(r + 2), (r += 2))
      : r++;
  if (t.length === 0) return n;
  const i = e - t.length,
    s = new Uint8Array(i);
  let o = 0;
  for (r = 0; r < i; o++, r++) o === t[0] && (o++, t.shift()), (s[r] = n[o]);
  return s;
}
function Ky(n) {
  const e = n[0];
  let t = "",
    r = "",
    i = 0,
    s = 0,
    o = 0,
    a = 0,
    l = 0,
    u = 0;
  if (e === 0) {
    for (; Re(n.subarray(u, u + 1)) !== "\0"; )
      (t += Re(n.subarray(u, u + 1))), (u += 1);
    for (
      t += Re(n.subarray(u, u + 1)), u += 1;
      Re(n.subarray(u, u + 1)) !== "\0";

    )
      (r += Re(n.subarray(u, u + 1))), (u += 1);
    (r += Re(n.subarray(u, u + 1))),
      (u += 1),
      (i = z(n, 12)),
      (s = z(n, 16)),
      (a = z(n, 20)),
      (l = z(n, 24)),
      (u = 28);
  } else if (e === 1) {
    (u += 4), (i = z(n, u)), (u += 4);
    const d = z(n, u);
    u += 4;
    const f = z(n, u);
    for (
      u += 4,
        o = 2 ** 32 * d + f,
        Number.isSafeInteger(o) ||
          ((o = Number.MAX_SAFE_INTEGER),
          A.warn(
            "Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box"
          )),
        a = z(n, u),
        u += 4,
        l = z(n, u),
        u += 4;
      Re(n.subarray(u, u + 1)) !== "\0";

    )
      (t += Re(n.subarray(u, u + 1))), (u += 1);
    for (
      t += Re(n.subarray(u, u + 1)), u += 1;
      Re(n.subarray(u, u + 1)) !== "\0";

    )
      (r += Re(n.subarray(u, u + 1))), (u += 1);
    (r += Re(n.subarray(u, u + 1))), (u += 1);
  }
  const c = n.subarray(u, n.byteLength);
  return {
    schemeIdUri: t,
    value: r,
    timeScale: i,
    presentationTime: o,
    presentationTimeDelta: s,
    eventDuration: a,
    id: l,
    payload: c,
  };
}
function Vy(n, ...e) {
  const t = e.length;
  let r = 8,
    i = t;
  for (; i--; ) r += e[i].byteLength;
  const s = new Uint8Array(r);
  for (
    s[0] = (r >> 24) & 255,
      s[1] = (r >> 16) & 255,
      s[2] = (r >> 8) & 255,
      s[3] = r & 255,
      s.set(n, 4),
      i = 0,
      r = 8;
    i < t;
    i++
  )
    s.set(e[i], r), (r += e[i].byteLength);
  return s;
}
function Hy(n, e, t) {
  if (n.byteLength !== 16) throw new RangeError("Invalid system id");
  let r, i;
  if (e) {
    (r = 1), (i = new Uint8Array(e.length * 16));
    for (let a = 0; a < e.length; a++) {
      const l = e[a];
      if (l.byteLength !== 16) throw new RangeError("Invalid key");
      i.set(l, a * 16);
    }
  } else (r = 0), (i = new Uint8Array());
  let s;
  r > 0
    ? ((s = new Uint8Array(4)),
      e.length > 0 && new DataView(s.buffer).setUint32(0, e.length, !1))
    : (s = new Uint8Array());
  const o = new Uint8Array(4);
  return (
    t &&
      t.byteLength > 0 &&
      new DataView(o.buffer).setUint32(0, t.byteLength, !1),
    Vy(
      [112, 115, 115, 104],
      new Uint8Array([r, 0, 0, 0]),
      n,
      s,
      i,
      o,
      t || new Uint8Array()
    )
  );
}
function Wy(n) {
  if (!(n instanceof ArrayBuffer) || n.byteLength < 32) return null;
  const e = { version: 0, systemId: "", kids: null, data: null },
    t = new DataView(n),
    r = t.getUint32(0);
  if (
    (n.byteLength !== r && r > 44) ||
    t.getUint32(4) !== 1886614376 ||
    ((e.version = t.getUint32(8) >>> 24), e.version > 1)
  )
    return null;
  e.systemId = Ct.hexDump(new Uint8Array(n, 12, 16));
  const s = t.getUint32(28);
  if (e.version === 0) {
    if (r - 32 < s) return null;
    e.data = new Uint8Array(n, 32, s);
  } else if (e.version === 1) {
    e.kids = [];
    for (let o = 0; o < s; o++) e.kids.push(new Uint8Array(n, 32 + o * 16, 16));
  }
  return e;
}
let _i = {};
class ai {
  static clearKeyUriToKeyIdMap() {
    _i = {};
  }
  constructor(e, t, r, i = [1], s = null) {
    (this.uri = void 0),
      (this.method = void 0),
      (this.keyFormat = void 0),
      (this.keyFormatVersions = void 0),
      (this.encrypted = void 0),
      (this.isCommonEncryption = void 0),
      (this.iv = null),
      (this.key = null),
      (this.keyId = null),
      (this.pssh = null),
      (this.method = e),
      (this.uri = t),
      (this.keyFormat = r),
      (this.keyFormatVersions = i),
      (this.iv = s),
      (this.encrypted = e ? e !== "NONE" : !1),
      (this.isCommonEncryption = this.encrypted && e !== "AES-128");
  }
  isSupported() {
    if (this.method) {
      if (this.method === "AES-128" || this.method === "NONE") return !0;
      if (this.keyFormat === "identity") return this.method === "SAMPLE-AES";
      switch (this.keyFormat) {
        case We.FAIRPLAY:
        case We.WIDEVINE:
        case We.PLAYREADY:
        case We.CLEARKEY:
          return (
            [
              "ISO-23001-7",
              "SAMPLE-AES",
              "SAMPLE-AES-CENC",
              "SAMPLE-AES-CTR",
            ].indexOf(this.method) !== -1
          );
      }
    }
    return !1;
  }
  getDecryptData(e) {
    if (!this.encrypted || !this.uri) return null;
    if (this.method === "AES-128" && this.uri && !this.iv) {
      typeof e != "number" &&
        (this.method === "AES-128" &&
          !this.iv &&
          A.warn(
            `missing IV for initialization segment with method="${this.method}" - compliance issue`
          ),
        (e = 0));
      const r = zy(e);
      return new ai(
        this.method,
        this.uri,
        "identity",
        this.keyFormatVersions,
        r
      );
    }
    const t = vy(this.uri);
    if (t)
      switch (this.keyFormat) {
        case We.WIDEVINE:
          (this.pssh = t),
            t.length >= 22 &&
              (this.keyId = t.subarray(t.length - 22, t.length - 6));
          break;
        case We.PLAYREADY: {
          const r = new Uint8Array([
            154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95,
            149,
          ]);
          this.pssh = Hy(r, null, t);
          const i = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2),
            s = String.fromCharCode.apply(null, Array.from(i)),
            o = s.substring(s.indexOf("<"), s.length),
            u = new DOMParser()
              .parseFromString(o, "text/xml")
              .getElementsByTagName("KID")[0];
          if (u) {
            const c = u.childNodes[0]
              ? u.childNodes[0].nodeValue
              : u.getAttribute("VALUE");
            if (c) {
              const d = iu(c).subarray(0, 16);
              Ey(d), (this.keyId = d);
            }
          }
          break;
        }
        default: {
          let r = t.subarray(0, 16);
          if (r.length !== 16) {
            const i = new Uint8Array(16);
            i.set(r, 16 - r.length), (r = i);
          }
          this.keyId = r;
          break;
        }
      }
    if (!this.keyId || this.keyId.byteLength !== 16) {
      let r = _i[this.uri];
      if (!r) {
        const i = Object.keys(_i).length % Number.MAX_SAFE_INTEGER;
        (r = new Uint8Array(16)),
          new DataView(r.buffer, 12, 4).setUint32(0, i),
          (_i[this.uri] = r);
      }
      this.keyId = r;
    }
    return this;
  }
}
function zy(n) {
  const e = new Uint8Array(16);
  for (let t = 12; t < 16; t++) e[t] = (n >> (8 * (15 - t))) & 255;
  return e;
}
const f0 = /\{\$([a-zA-Z0-9-_]+)\}/g;
function $c(n) {
  return f0.test(n);
}
function Ke(n, e, t) {
  if (n.variableList !== null || n.hasVariableRefs)
    for (let r = t.length; r--; ) {
      const i = t[r],
        s = e[i];
      s && (e[i] = qa(n, s));
    }
}
function qa(n, e) {
  if (n.variableList !== null || n.hasVariableRefs) {
    const t = n.variableList;
    return e.replace(f0, (r) => {
      const i = r.substring(2, r.length - 1),
        s = t == null ? void 0 : t[i];
      return s === void 0
        ? (n.playlistParsingError ||
            (n.playlistParsingError = new Error(
              `Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`
            )),
          r)
        : s;
    });
  }
  return e;
}
function Gc(n, e, t) {
  let r = n.variableList;
  r || (n.variableList = r = {});
  let i, s;
  if ("QUERYPARAM" in e) {
    i = e.QUERYPARAM;
    try {
      const o = new self.URL(t).searchParams;
      if (o.has(i)) s = o.get(i);
      else
        throw new Error(
          `"${i}" does not match any query parameter in URI: "${t}"`
        );
    } catch (o) {
      n.playlistParsingError ||
        (n.playlistParsingError = new Error(
          `EXT-X-DEFINE QUERYPARAM: ${o.message}`
        ));
    }
  } else (i = e.NAME), (s = e.VALUE);
  i in r
    ? n.playlistParsingError ||
      (n.playlistParsingError = new Error(
        `EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`
      ))
    : (r[i] = s || "");
}
function jy(n, e, t) {
  const r = e.IMPORT;
  if (t && r in t) {
    let i = n.variableList;
    i || (n.variableList = i = {}), (i[r] = t[r]);
  } else
    n.playlistParsingError ||
      (n.playlistParsingError = new Error(
        `EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${r}"`
      ));
}
function Js() {
  if (!(typeof self > "u")) return self.MediaSource || self.WebKitMediaSource;
}
const Yy = {
    audio: {
      a3ds: !0,
      "ac-3": !0,
      "ac-4": !0,
      alac: !0,
      alaw: !0,
      dra1: !0,
      "dts+": !0,
      "dts-": !0,
      dtsc: !0,
      dtse: !0,
      dtsh: !0,
      "ec-3": !0,
      enca: !0,
      g719: !0,
      g726: !0,
      m4ae: !0,
      mha1: !0,
      mha2: !0,
      mhm1: !0,
      mhm2: !0,
      mlpa: !0,
      mp4a: !0,
      "raw ": !0,
      Opus: !0,
      opus: !0,
      samr: !0,
      sawb: !0,
      sawp: !0,
      sevc: !0,
      sqcp: !0,
      ssmv: !0,
      twos: !0,
      ulaw: !0,
    },
    video: {
      avc1: !0,
      avc2: !0,
      avc3: !0,
      avc4: !0,
      avcp: !0,
      av01: !0,
      drac: !0,
      dva1: !0,
      dvav: !0,
      dvh1: !0,
      dvhe: !0,
      encv: !0,
      hev1: !0,
      hvc1: !0,
      mjp2: !0,
      mp4v: !0,
      mvc1: !0,
      mvc2: !0,
      mvc3: !0,
      mvc4: !0,
      resv: !0,
      rv60: !0,
      s263: !0,
      svc1: !0,
      svc2: !0,
      "vc-1": !0,
      vp08: !0,
      vp09: !0,
    },
    text: { stpp: !0, wvtt: !0 },
  },
  Kc = Js();
function Xy(n, e) {
  const t = Yy[e];
  return !!t && t[n.slice(0, 4)] === !0;
}
function Po(n, e) {
  var t;
  return (t =
    Kc == null
      ? void 0
      : Kc.isTypeSupported(`${e || "video"}/mp4;codecs="${n}"`)) != null
    ? t
    : !1;
}
const Vc =
    /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
  Hc = /#EXT-X-MEDIA:(.*)/g,
  qy = /^#EXT(?:INF|-X-TARGETDURATION):/m,
  Wc = new RegExp(
    [
      /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
      /(?!#) *(\S[\S ]*)/.source,
      /#EXT-X-BYTERANGE:*(.+)/.source,
      /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
      /#.*/.source,
    ].join("|"),
    "g"
  ),
  Qy = new RegExp(
    [
      /#(EXTM3U)/.source,
      /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/
        .source,
      /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/
        .source,
      /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source,
      /(#)([^:]*):(.*)/.source,
      /(#)(.*)(?:.*)\r?\n?/.source,
    ].join("|")
  );
class vt {
  static findGroup(e, t) {
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      if (i.id === t) return i;
    }
  }
  static convertAVC1ToAVCOTI(e) {
    const t = e.split(".");
    if (t.length > 2) {
      let r = t.shift() + ".";
      return (
        (r += parseInt(t.shift()).toString(16)),
        (r += ("000" + parseInt(t.shift()).toString(16)).slice(-4)),
        r
      );
    }
    return e;
  }
  static resolve(e, t) {
    return ru.buildAbsoluteURL(t, e, { alwaysNormalize: !0 });
  }
  static isMediaPlaylist(e) {
    return qy.test(e);
  }
  static parseMasterPlaylist(e, t) {
    const r = $c(e),
      i = {
        contentSteering: null,
        levels: [],
        playlistParsingError: null,
        sessionData: null,
        sessionKeys: null,
        startTimeOffset: null,
        variableList: null,
        hasVariableRefs: r,
      },
      s = [];
    Vc.lastIndex = 0;
    let o;
    for (; (o = Vc.exec(e)) != null; )
      if (o[1]) {
        var a;
        const u = new ue(o[1]);
        Ke(i, u, [
          "CODECS",
          "SUPPLEMENTAL-CODECS",
          "ALLOWED-CPC",
          "PATHWAY-ID",
          "STABLE-VARIANT-ID",
          "AUDIO",
          "VIDEO",
          "SUBTITLES",
          "CLOSED-CAPTIONS",
          "NAME",
        ]);
        const c = qa(i, o[2]),
          d = {
            attrs: u,
            bitrate:
              u.decimalInteger("AVERAGE-BANDWIDTH") ||
              u.decimalInteger("BANDWIDTH"),
            name: u.NAME,
            url: vt.resolve(c, t),
          },
          f = u.decimalResolution("RESOLUTION");
        f && ((d.width = f.width), (d.height = f.height)),
          Zy(
            (u.CODECS || "").split(/[ ,]+/).filter((h) => h),
            d
          ),
          d.videoCodec &&
            d.videoCodec.indexOf("avc1") !== -1 &&
            (d.videoCodec = vt.convertAVC1ToAVCOTI(d.videoCodec)),
          ((a = d.unknownCodecs) != null && a.length) || s.push(d),
          i.levels.push(d);
      } else if (o[3]) {
        const u = o[3],
          c = o[4];
        switch (u) {
          case "SESSION-DATA": {
            const d = new ue(c);
            Ke(i, d, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
            const f = d["DATA-ID"];
            f &&
              (i.sessionData === null && (i.sessionData = {}),
              (i.sessionData[f] = d));
            break;
          }
          case "SESSION-KEY": {
            const d = zc(c, t, i);
            d.encrypted && d.isSupported()
              ? (i.sessionKeys === null && (i.sessionKeys = []),
                i.sessionKeys.push(d))
              : A.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${c}"`);
            break;
          }
          case "DEFINE": {
            {
              const d = new ue(c);
              Ke(i, d, ["NAME", "VALUE", "QUERYPARAM"]), Gc(i, d, t);
            }
            break;
          }
          case "CONTENT-STEERING": {
            const d = new ue(c);
            Ke(i, d, ["SERVER-URI", "PATHWAY-ID"]),
              (i.contentSteering = {
                uri: vt.resolve(d["SERVER-URI"], t),
                pathwayId: d["PATHWAY-ID"] || ".",
              });
            break;
          }
          case "START": {
            i.startTimeOffset = jc(c);
            break;
          }
        }
      }
    const l = s.length > 0 && s.length < i.levels.length;
    return (
      (i.levels = l ? s : i.levels),
      i.levels.length === 0 &&
        (i.playlistParsingError = new Error("no levels found in manifest")),
      i
    );
  }
  static parseMasterPlaylistMedia(e, t, r) {
    let i;
    const s = {},
      o = r.levels,
      a = {
        AUDIO: o.map((u) => ({ id: u.attrs.AUDIO, audioCodec: u.audioCodec })),
        SUBTITLES: o.map((u) => ({
          id: u.attrs.SUBTITLES,
          textCodec: u.textCodec,
        })),
        "CLOSED-CAPTIONS": [],
      };
    let l = 0;
    for (Hc.lastIndex = 0; (i = Hc.exec(e)) !== null; ) {
      const u = new ue(i[1]),
        c = u.TYPE;
      if (c) {
        const d = a[c],
          f = s[c] || [];
        (s[c] = f),
          Ke(r, u, [
            "URI",
            "GROUP-ID",
            "LANGUAGE",
            "ASSOC-LANGUAGE",
            "STABLE-RENDITION-ID",
            "NAME",
            "INSTREAM-ID",
            "CHARACTERISTICS",
            "CHANNELS",
          ]);
        const h = {
          attrs: u,
          bitrate: 0,
          id: l++,
          groupId: u["GROUP-ID"] || "",
          instreamId: u["INSTREAM-ID"],
          name: u.NAME || u.LANGUAGE || "",
          type: c,
          default: u.bool("DEFAULT"),
          autoselect: u.bool("AUTOSELECT"),
          forced: u.bool("FORCED"),
          lang: u.LANGUAGE,
          url: u.URI ? vt.resolve(u.URI, t) : "",
        };
        if (d != null && d.length) {
          const p = vt.findGroup(d, h.groupId) || d[0];
          Yc(h, p, "audioCodec"), Yc(h, p, "textCodec");
        }
        f.push(h);
      }
    }
    return s;
  }
  static parseLevelPlaylist(e, t, r, i, s, o) {
    const a = new my(t),
      l = a.fragments;
    let u = null,
      c = 0,
      d = 0,
      f = 0,
      h = 0,
      p = null,
      g = new Fo(i, t),
      v,
      m,
      E,
      x = -1,
      T = !1;
    for (
      Wc.lastIndex = 0, a.m3u8 = e, a.hasVariableRefs = $c(e);
      (v = Wc.exec(e)) !== null;

    ) {
      T &&
        ((T = !1),
        (g = new Fo(i, t)),
        (g.start = f),
        (g.sn = c),
        (g.cc = h),
        (g.level = r),
        u &&
          ((g.initSegment = u),
          (g.rawProgramDateTime = u.rawProgramDateTime),
          (u.rawProgramDateTime = null)));
      const I = v[1];
      if (I) {
        g.duration = parseFloat(I);
        const _ = (" " + v[2]).slice(1);
        (g.title = _ || null), g.tagList.push(_ ? ["INF", I, _] : ["INF", I]);
      } else if (v[3]) {
        if (G(g.duration)) {
          (g.start = f),
            E && Qc(g, E, a),
            (g.sn = c),
            (g.level = r),
            (g.cc = h),
            (g.urlId = s),
            l.push(g);
          const _ = (" " + v[3]).slice(1);
          (g.relurl = qa(a, _)),
            Xc(g, p),
            (p = g),
            (f += g.duration),
            c++,
            (d = 0),
            (T = !0);
        }
      } else if (v[4]) {
        const _ = (" " + v[4]).slice(1);
        p ? g.setByteRange(_, p) : g.setByteRange(_);
      } else if (v[5])
        (g.rawProgramDateTime = (" " + v[5]).slice(1)),
          g.tagList.push(["PROGRAM-DATE-TIME", g.rawProgramDateTime]),
          x === -1 && (x = l.length);
      else {
        if (((v = v[0].match(Qy)), !v)) {
          A.warn("No matches on slow regex match for level playlist!");
          continue;
        }
        for (m = 1; m < v.length && !(typeof v[m] < "u"); m++);
        const _ = (" " + v[m]).slice(1),
          D = (" " + v[m + 1]).slice(1),
          U = v[m + 2] ? (" " + v[m + 2]).slice(1) : "";
        switch (_) {
          case "PLAYLIST-TYPE":
            a.type = D.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            c = a.startSN = parseInt(D);
            break;
          case "SKIP": {
            const b = new ue(D);
            Ke(a, b, ["RECENTLY-REMOVED-DATERANGES"]);
            const Y = b.decimalInteger("SKIPPED-SEGMENTS");
            if (G(Y)) {
              a.skippedSegments = Y;
              for (let ne = Y; ne--; ) l.unshift(null);
              c += Y;
            }
            const Ae = b.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            Ae && (a.recentlyRemovedDateranges = Ae.split("	"));
            break;
          }
          case "TARGETDURATION":
            a.targetduration = Math.max(parseInt(D), 1);
            break;
          case "VERSION":
            a.version = parseInt(D);
            break;
          case "EXTM3U":
            break;
          case "ENDLIST":
            a.live = !1;
            break;
          case "#":
            (D || U) && g.tagList.push(U ? [D, U] : [D]);
            break;
          case "DISCONTINUITY":
            h++, g.tagList.push(["DIS"]);
            break;
          case "GAP":
            (g.gap = !0), g.tagList.push([_]);
            break;
          case "BITRATE":
            g.tagList.push([_, D]);
            break;
          case "DATERANGE": {
            const b = new ue(D);
            Ke(a, b, [
              "ID",
              "CLASS",
              "START-DATE",
              "END-DATE",
              "SCTE35-CMD",
              "SCTE35-OUT",
              "SCTE35-IN",
            ]),
              Ke(a, b, b.clientAttrs);
            const Y = new Qh(b, a.dateRanges[b.ID]);
            Y.isValid || a.skippedSegments
              ? (a.dateRanges[Y.id] = Y)
              : A.warn(`Ignoring invalid DATERANGE tag: "${D}"`),
              g.tagList.push(["EXT-X-DATERANGE", D]);
            break;
          }
          case "DEFINE": {
            {
              const b = new ue(D);
              Ke(a, b, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]),
                "IMPORT" in b ? jy(a, b, o) : Gc(a, b, t);
            }
            break;
          }
          case "DISCONTINUITY-SEQUENCE":
            h = parseInt(D);
            break;
          case "KEY": {
            const b = zc(D, t, a);
            if (b.isSupported()) {
              if (b.method === "NONE") {
                E = void 0;
                break;
              }
              E || (E = {}),
                E[b.keyFormat] && (E = Se({}, E)),
                (E[b.keyFormat] = b);
            } else A.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${D}"`);
            break;
          }
          case "START":
            a.startTimeOffset = jc(D);
            break;
          case "MAP": {
            const b = new ue(D);
            if ((Ke(a, b, ["BYTERANGE", "URI"]), g.duration)) {
              const Y = new Fo(i, t);
              qc(Y, b, r, E),
                (u = Y),
                (g.initSegment = u),
                u.rawProgramDateTime &&
                  !g.rawProgramDateTime &&
                  (g.rawProgramDateTime = u.rawProgramDateTime);
            } else qc(g, b, r, E), (u = g), (T = !0);
            break;
          }
          case "SERVER-CONTROL": {
            const b = new ue(D);
            (a.canBlockReload = b.bool("CAN-BLOCK-RELOAD")),
              (a.canSkipUntil = b.optionalFloat("CAN-SKIP-UNTIL", 0)),
              (a.canSkipDateRanges =
                a.canSkipUntil > 0 && b.bool("CAN-SKIP-DATERANGES")),
              (a.partHoldBack = b.optionalFloat("PART-HOLD-BACK", 0)),
              (a.holdBack = b.optionalFloat("HOLD-BACK", 0));
            break;
          }
          case "PART-INF": {
            const b = new ue(D);
            a.partTarget = b.decimalFloatingPoint("PART-TARGET");
            break;
          }
          case "PART": {
            let b = a.partList;
            b || (b = a.partList = []);
            const Y = d > 0 ? b[b.length - 1] : void 0,
              Ae = d++,
              ne = new ue(D);
            Ke(a, ne, ["BYTERANGE", "URI"]);
            const te = new py(ne, g, t, Ae, Y);
            b.push(te), (g.duration += te.duration);
            break;
          }
          case "PRELOAD-HINT": {
            const b = new ue(D);
            Ke(a, b, ["URI"]), (a.preloadHint = b);
            break;
          }
          case "RENDITION-REPORT": {
            const b = new ue(D);
            Ke(a, b, ["URI"]),
              (a.renditionReports = a.renditionReports || []),
              a.renditionReports.push(b);
            break;
          }
          default:
            A.warn(`line parsed but not handled: ${v}`);
            break;
        }
      }
    }
    p && !p.relurl
      ? (l.pop(), (f -= p.duration), a.partList && (a.fragmentHint = p))
      : a.partList &&
        (Xc(g, p), (g.cc = h), (a.fragmentHint = g), E && Qc(g, E, a));
    const S = l.length,
      R = l[0],
      L = l[S - 1];
    if (((f += a.skippedSegments * a.targetduration), f > 0 && S && L)) {
      a.averagetargetduration = f / S;
      const I = L.sn;
      (a.endSN = I !== "initSegment" ? I : 0),
        a.live || (L.endList = !0),
        R && (a.startCC = R.cc);
    } else (a.endSN = 0), (a.startCC = 0);
    return (
      a.fragmentHint && (f += a.fragmentHint.duration),
      (a.totalduration = f),
      (a.endCC = h),
      x > 0 && Jy(l, x),
      a
    );
  }
}
function zc(n, e, t) {
  var r, i;
  const s = new ue(n);
  Ke(t, s, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
  const o = (r = s.METHOD) != null ? r : "",
    a = s.URI,
    l = s.hexadecimalInteger("IV"),
    u = s.KEYFORMATVERSIONS,
    c = (i = s.KEYFORMAT) != null ? i : "identity";
  a && s.IV && !l && A.error(`Invalid IV: ${s.IV}`);
  const d = a ? vt.resolve(a, e) : "",
    f = (u || "1").split("/").map(Number).filter(Number.isFinite);
  return new ai(o, d, c, f, l);
}
function jc(n) {
  const t = new ue(n).decimalFloatingPoint("TIME-OFFSET");
  return G(t) ? t : null;
}
function Zy(n, e) {
  ["video", "audio", "text"].forEach((t) => {
    const r = n.filter((i) => Xy(i, t));
    if (r.length) {
      const i = r.filter(
        (s) => s.lastIndexOf("avc1", 0) === 0 || s.lastIndexOf("mp4a", 0) === 0
      );
      (e[`${t}Codec`] = i.length > 0 ? i[0] : r[0]),
        (n = n.filter((s) => r.indexOf(s) === -1));
    }
  }),
    (e.unknownCodecs = n);
}
function Yc(n, e, t) {
  const r = e[t];
  r && (n[t] = r);
}
function Jy(n, e) {
  let t = n[e];
  for (let r = e; r--; ) {
    const i = n[r];
    if (!i) return;
    (i.programDateTime = t.programDateTime - i.duration * 1e3), (t = i);
  }
}
function Xc(n, e) {
  n.rawProgramDateTime
    ? (n.programDateTime = Date.parse(n.rawProgramDateTime))
    : e != null &&
      e.programDateTime &&
      (n.programDateTime = e.endProgramDateTime),
    G(n.programDateTime) ||
      ((n.programDateTime = null), (n.rawProgramDateTime = null));
}
function qc(n, e, t, r) {
  (n.relurl = e.URI),
    e.BYTERANGE && n.setByteRange(e.BYTERANGE),
    (n.level = t),
    (n.sn = "initSegment"),
    r && (n.levelkeys = r),
    (n.initSegment = null);
}
function Qc(n, e, t) {
  n.levelkeys = e;
  const { encryptedFragments: r } = t;
  (!r.length || r[r.length - 1].levelkeys !== e) &&
    Object.keys(e).some((i) => e[i].isCommonEncryption) &&
    r.push(n);
}
var Q = {
    MANIFEST: "manifest",
    LEVEL: "level",
    AUDIO_TRACK: "audioTrack",
    SUBTITLE_TRACK: "subtitleTrack",
  },
  V = { MAIN: "main", AUDIO: "audio", SUBTITLE: "subtitle" };
function Zc(n) {
  const { type: e } = n;
  switch (e) {
    case Q.AUDIO_TRACK:
      return V.AUDIO;
    case Q.SUBTITLE_TRACK:
      return V.SUBTITLE;
    default:
      return V.MAIN;
  }
}
function Oo(n, e) {
  let t = n.url;
  return (t === void 0 || t.indexOf("data:") === 0) && (t = e.url), t;
}
class eE {
  constructor(e) {
    (this.hls = void 0),
      (this.loaders = Object.create(null)),
      (this.variableList = null),
      (this.hls = e),
      this.registerListeners();
  }
  startLoad(e) {}
  stopLoad() {
    this.destroyInternalLoaders();
  }
  registerListeners() {
    const { hls: e } = this;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.LEVEL_LOADING, this.onLevelLoading, this),
      e.on(y.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
      e.on(y.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  unregisterListeners() {
    const { hls: e } = this;
    e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.LEVEL_LOADING, this.onLevelLoading, this),
      e.off(y.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
      e.off(y.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  createInternalLoader(e) {
    const t = this.hls.config,
      r = t.pLoader,
      i = t.loader,
      s = r || i,
      o = new s(t);
    return (this.loaders[e.type] = o), o;
  }
  getInternalLoader(e) {
    return this.loaders[e.type];
  }
  resetInternalLoader(e) {
    this.loaders[e] && delete this.loaders[e];
  }
  destroyInternalLoaders() {
    for (const e in this.loaders) {
      const t = this.loaders[e];
      t && t.destroy(), this.resetInternalLoader(e);
    }
  }
  destroy() {
    (this.variableList = null),
      this.unregisterListeners(),
      this.destroyInternalLoaders();
  }
  onManifestLoading(e, t) {
    const { url: r } = t;
    (this.variableList = null),
      this.load({
        id: null,
        level: 0,
        responseType: "text",
        type: Q.MANIFEST,
        url: r,
        deliveryDirectives: null,
      });
  }
  onLevelLoading(e, t) {
    const { id: r, level: i, url: s, deliveryDirectives: o } = t;
    this.load({
      id: r,
      level: i,
      responseType: "text",
      type: Q.LEVEL,
      url: s,
      deliveryDirectives: o,
    });
  }
  onAudioTrackLoading(e, t) {
    const { id: r, groupId: i, url: s, deliveryDirectives: o } = t;
    this.load({
      id: r,
      groupId: i,
      level: null,
      responseType: "text",
      type: Q.AUDIO_TRACK,
      url: s,
      deliveryDirectives: o,
    });
  }
  onSubtitleTrackLoading(e, t) {
    const { id: r, groupId: i, url: s, deliveryDirectives: o } = t;
    this.load({
      id: r,
      groupId: i,
      level: null,
      responseType: "text",
      type: Q.SUBTITLE_TRACK,
      url: s,
      deliveryDirectives: o,
    });
  }
  load(e) {
    var t;
    const r = this.hls.config;
    let i = this.getInternalLoader(e);
    if (i) {
      const u = i.context;
      if (u && u.url === e.url) {
        A.trace("[playlist-loader]: playlist request ongoing");
        return;
      }
      A.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`),
        i.abort();
    }
    let s;
    if (
      (e.type === Q.MANIFEST
        ? (s = r.manifestLoadPolicy.default)
        : (s = Se({}, r.playlistLoadPolicy.default, {
            timeoutRetry: null,
            errorRetry: null,
          })),
      (i = this.createInternalLoader(e)),
      (t = e.deliveryDirectives) != null && t.part)
    ) {
      let u;
      if (
        (e.type === Q.LEVEL && e.level !== null
          ? (u = this.hls.levels[e.level].details)
          : e.type === Q.AUDIO_TRACK && e.id !== null
          ? (u = this.hls.audioTracks[e.id].details)
          : e.type === Q.SUBTITLE_TRACK &&
            e.id !== null &&
            (u = this.hls.subtitleTracks[e.id].details),
        u)
      ) {
        const c = u.partTarget,
          d = u.targetduration;
        if (c && d) {
          const f = Math.max(c * 3, d * 0.8) * 1e3;
          s = Se({}, s, {
            maxTimeToFirstByteMs: Math.min(f, s.maxTimeToFirstByteMs),
            maxLoadTimeMs: Math.min(f, s.maxTimeToFirstByteMs),
          });
        }
      }
    }
    const o = s.errorRetry || s.timeoutRetry || {},
      a = {
        loadPolicy: s,
        timeout: s.maxLoadTimeMs,
        maxRetry: o.maxNumRetry || 0,
        retryDelay: o.retryDelayMs || 0,
        maxRetryDelay: o.maxRetryDelayMs || 0,
      },
      l = {
        onSuccess: (u, c, d, f) => {
          const h = this.getInternalLoader(d);
          this.resetInternalLoader(d.type);
          const p = u.data;
          if (p.indexOf("#EXTM3U") !== 0) {
            this.handleManifestParsingError(
              u,
              d,
              new Error("no EXTM3U delimiter"),
              f || null,
              c
            );
            return;
          }
          (c.parsing.start = performance.now()),
            vt.isMediaPlaylist(p)
              ? this.handleTrackOrLevelPlaylist(u, c, d, f || null, h)
              : this.handleMasterPlaylist(u, c, d, f);
        },
        onError: (u, c, d, f) => {
          this.handleNetworkError(c, d, !1, u, f);
        },
        onTimeout: (u, c, d) => {
          this.handleNetworkError(c, d, !0, void 0, u);
        },
      };
    i.load(e, a, l);
  }
  handleMasterPlaylist(e, t, r, i) {
    const s = this.hls,
      o = e.data,
      a = Oo(e, r),
      l = vt.parseMasterPlaylist(o, a);
    if (l.playlistParsingError) {
      this.handleManifestParsingError(e, r, l.playlistParsingError, i, t);
      return;
    }
    const {
      contentSteering: u,
      levels: c,
      sessionData: d,
      sessionKeys: f,
      startTimeOffset: h,
      variableList: p,
    } = l;
    this.variableList = p;
    const {
      AUDIO: g = [],
      SUBTITLES: v,
      "CLOSED-CAPTIONS": m,
    } = vt.parseMasterPlaylistMedia(o, a, l);
    g.length &&
      !g.some((x) => !x.url) &&
      c[0].audioCodec &&
      !c[0].attrs.AUDIO &&
      (A.log(
        "[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"
      ),
      g.unshift({
        type: "main",
        name: "main",
        groupId: "main",
        default: !1,
        autoselect: !1,
        forced: !1,
        id: -1,
        attrs: new ue({}),
        bitrate: 0,
        url: "",
      })),
      s.trigger(y.MANIFEST_LOADED, {
        levels: c,
        audioTracks: g,
        subtitles: v,
        captions: m,
        contentSteering: u,
        url: a,
        stats: t,
        networkDetails: i,
        sessionData: d,
        sessionKeys: f,
        startTimeOffset: h,
        variableList: p,
      });
  }
  handleTrackOrLevelPlaylist(e, t, r, i, s) {
    const o = this.hls,
      { id: a, level: l, type: u } = r,
      c = Oo(e, r),
      d = G(a) ? a : 0,
      f = G(l) ? l : d,
      h = Zc(r),
      p = vt.parseLevelPlaylist(e.data, c, f, h, d, this.variableList);
    if (u === Q.MANIFEST) {
      const g = { attrs: new ue({}), bitrate: 0, details: p, name: "", url: c };
      o.trigger(y.MANIFEST_LOADED, {
        levels: [g],
        audioTracks: [],
        url: c,
        stats: t,
        networkDetails: i,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null,
      });
    }
    (t.parsing.end = performance.now()),
      (r.levelDetails = p),
      this.handlePlaylistLoaded(p, e, t, r, i, s);
  }
  handleManifestParsingError(e, t, r, i, s) {
    this.hls.trigger(y.ERROR, {
      type: K.NETWORK_ERROR,
      details: F.MANIFEST_PARSING_ERROR,
      fatal: t.type === Q.MANIFEST,
      url: e.url,
      err: r,
      error: r,
      reason: r.message,
      response: e,
      context: t,
      networkDetails: i,
      stats: s,
    });
  }
  handleNetworkError(e, t, r = !1, i, s) {
    let o = `A network ${
      r ? "timeout" : "error" + (i ? " (status " + i.code + ")" : "")
    } occurred while loading ${e.type}`;
    e.type === Q.LEVEL
      ? (o += `: ${e.level} id: ${e.id}`)
      : (e.type === Q.AUDIO_TRACK || e.type === Q.SUBTITLE_TRACK) &&
        (o += ` id: ${e.id} group-id: "${e.groupId}"`);
    const a = new Error(o);
    A.warn(`[playlist-loader]: ${o}`);
    let l = F.UNKNOWN,
      u = !1;
    const c = this.getInternalLoader(e);
    switch (e.type) {
      case Q.MANIFEST:
        (l = r ? F.MANIFEST_LOAD_TIMEOUT : F.MANIFEST_LOAD_ERROR), (u = !0);
        break;
      case Q.LEVEL:
        (l = r ? F.LEVEL_LOAD_TIMEOUT : F.LEVEL_LOAD_ERROR), (u = !1);
        break;
      case Q.AUDIO_TRACK:
        (l = r ? F.AUDIO_TRACK_LOAD_TIMEOUT : F.AUDIO_TRACK_LOAD_ERROR),
          (u = !1);
        break;
      case Q.SUBTITLE_TRACK:
        (l = r ? F.SUBTITLE_TRACK_LOAD_TIMEOUT : F.SUBTITLE_LOAD_ERROR),
          (u = !1);
        break;
    }
    c && this.resetInternalLoader(e.type);
    const d = {
      type: K.NETWORK_ERROR,
      details: l,
      fatal: u,
      url: e.url,
      loader: c,
      context: e,
      error: a,
      networkDetails: t,
      stats: s,
    };
    if (i) {
      const f = (t == null ? void 0 : t.url) || e.url;
      d.response = qe({ url: f, data: void 0 }, i);
    }
    this.hls.trigger(y.ERROR, d);
  }
  handlePlaylistLoaded(e, t, r, i, s, o) {
    const a = this.hls,
      { type: l, level: u, id: c, groupId: d, deliveryDirectives: f } = i,
      h = Oo(t, i),
      p = Zc(i),
      g = typeof i.level == "number" && p === V.MAIN ? u : void 0;
    if (!e.fragments.length) {
      const m = new Error("No Segments found in Playlist");
      a.trigger(y.ERROR, {
        type: K.NETWORK_ERROR,
        details: F.LEVEL_EMPTY_ERROR,
        fatal: !1,
        url: h,
        error: m,
        reason: m.message,
        response: t,
        context: i,
        level: g,
        parent: p,
        networkDetails: s,
        stats: r,
      });
      return;
    }
    e.targetduration ||
      (e.playlistParsingError = new Error("Missing Target Duration"));
    const v = e.playlistParsingError;
    if (v) {
      a.trigger(y.ERROR, {
        type: K.NETWORK_ERROR,
        details: F.LEVEL_PARSING_ERROR,
        fatal: !1,
        url: h,
        error: v,
        reason: v.message,
        response: t,
        context: i,
        level: g,
        parent: p,
        networkDetails: s,
        stats: r,
      });
      return;
    }
    switch (
      (e.live &&
        o &&
        (o.getCacheAge && (e.ageHeader = o.getCacheAge() || 0),
        (!o.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)),
      l)
    ) {
      case Q.MANIFEST:
      case Q.LEVEL:
        a.trigger(y.LEVEL_LOADED, {
          details: e,
          level: g || 0,
          id: c || 0,
          stats: r,
          networkDetails: s,
          deliveryDirectives: f,
        });
        break;
      case Q.AUDIO_TRACK:
        a.trigger(y.AUDIO_TRACK_LOADED, {
          details: e,
          id: c || 0,
          groupId: d || "",
          stats: r,
          networkDetails: s,
          deliveryDirectives: f,
        });
        break;
      case Q.SUBTITLE_TRACK:
        a.trigger(y.SUBTITLE_TRACK_LOADED, {
          details: e,
          id: c || 0,
          groupId: d || "",
          stats: r,
          networkDetails: s,
          deliveryDirectives: f,
        });
        break;
    }
  }
}
function h0(n, e) {
  let t;
  try {
    t = new Event("addtrack");
  } catch {
    (t = document.createEvent("Event")), t.initEvent("addtrack", !1, !1);
  }
  (t.track = n), e.dispatchEvent(t);
}
function p0(n, e) {
  const t = n.mode;
  if (
    (t === "disabled" && (n.mode = "hidden"),
    n.cues && !n.cues.getCueById(e.id))
  )
    try {
      if ((n.addCue(e), !n.cues.getCueById(e.id)))
        throw new Error(`addCue is failed for: ${e}`);
    } catch (r) {
      A.debug(`[texttrack-utils]: ${r}`);
      const i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
      (i.id = e.id), n.addCue(i);
    }
  t === "disabled" && (n.mode = t);
}
function Jn(n) {
  const e = n.mode;
  if ((e === "disabled" && (n.mode = "hidden"), n.cues))
    for (let t = n.cues.length; t--; ) n.removeCue(n.cues[t]);
  e === "disabled" && (n.mode = e);
}
function Qa(n, e, t, r) {
  const i = n.mode;
  if ((i === "disabled" && (n.mode = "hidden"), n.cues && n.cues.length > 0)) {
    const s = nE(n.cues, e, t);
    for (let o = 0; o < s.length; o++) (!r || r(s[o])) && n.removeCue(s[o]);
  }
  i === "disabled" && (n.mode = i);
}
function tE(n, e) {
  if (e < n[0].startTime) return 0;
  const t = n.length - 1;
  if (e > n[t].endTime) return -1;
  let r = 0,
    i = t;
  for (; r <= i; ) {
    const s = Math.floor((i + r) / 2);
    if (e < n[s].startTime) i = s - 1;
    else if (e > n[s].startTime && r < t) r = s + 1;
    else return s;
  }
  return n[r].startTime - e < e - n[i].startTime ? r : i;
}
function nE(n, e, t) {
  const r = [],
    i = tE(n, e);
  if (i > -1)
    for (let s = i, o = n.length; s < o; s++) {
      const a = n[s];
      if (a.startTime >= e && a.endTime <= t) r.push(a);
      else if (a.startTime > t) return r;
    }
  return r;
}
var Et = {
  audioId3: "org.id3",
  dateRange: "com.apple.quicktime.HLS",
  emsg: "https://aomedia.org/emsg/ID3",
};
const rE = 0.25;
function Za() {
  if (!(typeof self > "u"))
    return self.WebKitDataCue || self.VTTCue || self.TextTrackCue;
}
const Pi = (() => {
  const n = Za();
  try {
    new n(0, Number.POSITIVE_INFINITY, "");
  } catch {
    return Number.MAX_VALUE;
  }
  return Number.POSITIVE_INFINITY;
})();
function Bo(n, e) {
  return n.getTime() / 1e3 - e;
}
function iE(n) {
  return Uint8Array.from(
    n
      .replace(/^0x/, "")
      .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
      .replace(/ +$/, "")
      .split(" ")
  ).buffer;
}
class sE {
  constructor(e) {
    (this.hls = void 0),
      (this.id3Track = null),
      (this.media = null),
      (this.dateRangeCuesAppended = {}),
      (this.hls = e),
      this._registerListeners();
  }
  destroy() {
    this._unregisterListeners(),
      (this.id3Track = null),
      (this.media = null),
      (this.dateRangeCuesAppended = {}),
      (this.hls = null);
  }
  _registerListeners() {
    const { hls: e } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
      e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this),
      e.on(y.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  _unregisterListeners() {
    const { hls: e } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
      e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this),
      e.off(y.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  onMediaAttached(e, t) {
    this.media = t.media;
  }
  onMediaDetaching() {
    !this.id3Track ||
      (Jn(this.id3Track),
      (this.id3Track = null),
      (this.media = null),
      (this.dateRangeCuesAppended = {}));
  }
  onManifestLoading() {
    this.dateRangeCuesAppended = {};
  }
  createTrack(e) {
    const t = this.getID3Track(e.textTracks);
    return (t.mode = "hidden"), t;
  }
  getID3Track(e) {
    if (!!this.media) {
      for (let t = 0; t < e.length; t++) {
        const r = e[t];
        if (r.kind === "metadata" && r.label === "id3")
          return h0(r, this.media), r;
      }
      return this.media.addTextTrack("metadata", "id3");
    }
  }
  onFragParsingMetadata(e, t) {
    if (!this.media) return;
    const {
      hls: {
        config: { enableEmsgMetadataCues: r, enableID3MetadataCues: i },
      },
    } = this;
    if (!r && !i) return;
    const { samples: s } = t;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const o = Za();
    for (let a = 0; a < s.length; a++) {
      const l = s[a].type;
      if ((l === Et.emsg && !r) || !i) continue;
      const u = i0(s[a].data);
      if (u) {
        const c = s[a].pts;
        let d = c + s[a].duration;
        d > Pi && (d = Pi), d - c <= 0 && (d = c + rE);
        for (let h = 0; h < u.length; h++) {
          const p = u[h];
          if (!r0(p)) {
            this.updateId3CueEnds(c);
            const g = new o(c, d, "");
            (g.value = p), l && (g.type = l), this.id3Track.addCue(g);
          }
        }
      }
    }
  }
  updateId3CueEnds(e) {
    var t;
    const r = (t = this.id3Track) == null ? void 0 : t.cues;
    if (r)
      for (let i = r.length; i--; ) {
        const s = r[i];
        s.startTime < e && s.endTime === Pi && (s.endTime = e);
      }
  }
  onBufferFlushing(e, { startOffset: t, endOffset: r, type: i }) {
    const { id3Track: s, hls: o } = this;
    if (!o) return;
    const {
      config: { enableEmsgMetadataCues: a, enableID3MetadataCues: l },
    } = o;
    if (s && (a || l)) {
      let u;
      i === "audio"
        ? (u = (c) => c.type === Et.audioId3 && l)
        : i === "video"
        ? (u = (c) => c.type === Et.emsg && a)
        : (u = (c) =>
            (c.type === Et.audioId3 && l) || (c.type === Et.emsg && a)),
        Qa(s, t, r, u);
    }
  }
  onLevelUpdated(e, { details: t }) {
    if (
      !this.media ||
      !t.hasProgramDateTime ||
      !this.hls.config.enableDateRangeMetadataCues
    )
      return;
    const { dateRangeCuesAppended: r, id3Track: i } = this,
      { dateRanges: s } = t,
      o = Object.keys(s);
    if (i) {
      const c = Object.keys(r).filter((d) => !o.includes(d));
      for (let d = c.length; d--; ) {
        const f = c[d];
        Object.keys(r[f].cues).forEach((h) => {
          i.removeCue(r[f].cues[h]);
        }),
          delete r[f];
      }
    }
    const a = t.fragments[t.fragments.length - 1];
    if (o.length === 0 || !G(a == null ? void 0 : a.programDateTime)) return;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const l = a.programDateTime / 1e3 - a.start,
      u = Za();
    for (let c = 0; c < o.length; c++) {
      const d = o[c],
        f = s[d],
        h = r[d],
        p = (h == null ? void 0 : h.cues) || {};
      let g = (h == null ? void 0 : h.durationKnown) || !1;
      const v = Bo(f.startDate, l);
      let m = Pi;
      const E = f.endDate;
      if (E) (m = Bo(E, l)), (g = !0);
      else if (f.endOnNext && !g) {
        const T = o
          .reduce((S, R) => {
            const L = s[R];
            return (
              L.class === f.class &&
                L.id !== R &&
                L.startDate > f.startDate &&
                S.push(L),
              S
            );
          }, [])
          .sort((S, R) => S.startDate.getTime() - R.startDate.getTime())[0];
        T && ((m = Bo(T.startDate, l)), (g = !0));
      }
      const x = Object.keys(f.attr);
      for (let T = 0; T < x.length; T++) {
        const S = x[T];
        if (!fy(S)) continue;
        let R = p[S];
        if (R) g && !h.durationKnown && (R.endTime = m);
        else {
          let L = f.attr[S];
          (R = new u(v, m, "")),
            hy(S) && (L = iE(L)),
            (R.value = { key: S, data: L }),
            (R.type = Et.dateRange),
            (R.id = d),
            this.id3Track.addCue(R),
            (p[S] = R);
        }
      }
      r[d] = { cues: p, dateRange: f, durationKnown: g };
    }
  }
}
class oE {
  constructor(e) {
    (this.hls = void 0),
      (this.config = void 0),
      (this.media = null),
      (this.levelDetails = null),
      (this.currentTime = 0),
      (this.stallCount = 0),
      (this._latency = null),
      (this.timeupdateHandler = () => this.timeupdate()),
      (this.hls = e),
      (this.config = e.config),
      this.registerListeners();
  }
  get latency() {
    return this._latency || 0;
  }
  get maxLatency() {
    const { config: e, levelDetails: t } = this;
    return e.liveMaxLatencyDuration !== void 0
      ? e.liveMaxLatencyDuration
      : t
      ? e.liveMaxLatencyDurationCount * t.targetduration
      : 0;
  }
  get targetLatency() {
    const { levelDetails: e } = this;
    if (e === null) return null;
    const { holdBack: t, partHoldBack: r, targetduration: i } = e,
      {
        liveSyncDuration: s,
        liveSyncDurationCount: o,
        lowLatencyMode: a,
      } = this.config,
      l = this.hls.userConfig;
    let u = (a && r) || t;
    (l.liveSyncDuration || l.liveSyncDurationCount || u === 0) &&
      (u = s !== void 0 ? s : o * i);
    const c = i,
      d = 1;
    return u + Math.min(this.stallCount * d, c);
  }
  get liveSyncPosition() {
    const e = this.estimateLiveEdge(),
      t = this.targetLatency,
      r = this.levelDetails;
    if (e === null || t === null || r === null) return null;
    const i = r.edge,
      s = e - t - this.edgeStalled,
      o = i - r.totalduration,
      a =
        i - ((this.config.lowLatencyMode && r.partTarget) || r.targetduration);
    return Math.min(Math.max(o, s), a);
  }
  get drift() {
    const { levelDetails: e } = this;
    return e === null ? 1 : e.drift;
  }
  get edgeStalled() {
    const { levelDetails: e } = this;
    if (e === null) return 0;
    const t =
      ((this.config.lowLatencyMode && e.partTarget) || e.targetduration) * 3;
    return Math.max(e.age - t, 0);
  }
  get forwardBufferLength() {
    const { media: e, levelDetails: t } = this;
    if (!e || !t) return 0;
    const r = e.buffered.length;
    return (r ? e.buffered.end(r - 1) : t.edge) - this.currentTime;
  }
  destroy() {
    this.unregisterListeners(),
      this.onMediaDetaching(),
      (this.levelDetails = null),
      (this.hls = this.timeupdateHandler = null);
  }
  registerListeners() {
    this.hls.on(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      this.hls.on(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      this.hls.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      this.hls.on(y.LEVEL_UPDATED, this.onLevelUpdated, this),
      this.hls.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    this.hls.off(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      this.hls.off(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      this.hls.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      this.hls.off(y.LEVEL_UPDATED, this.onLevelUpdated, this),
      this.hls.off(y.ERROR, this.onError, this);
  }
  onMediaAttached(e, t) {
    (this.media = t.media),
      this.media.addEventListener("timeupdate", this.timeupdateHandler);
  }
  onMediaDetaching() {
    this.media &&
      (this.media.removeEventListener("timeupdate", this.timeupdateHandler),
      (this.media = null));
  }
  onManifestLoading() {
    (this.levelDetails = null), (this._latency = null), (this.stallCount = 0);
  }
  onLevelUpdated(e, { details: t }) {
    (this.levelDetails = t),
      t.advanced && this.timeupdate(),
      !t.live &&
        this.media &&
        this.media.removeEventListener("timeupdate", this.timeupdateHandler);
  }
  onError(e, t) {
    var r;
    t.details === F.BUFFER_STALLED_ERROR &&
      (this.stallCount++,
      (r = this.levelDetails) != null &&
        r.live &&
        A.warn(
          "[playback-rate-controller]: Stall detected, adjusting target latency"
        ));
  }
  timeupdate() {
    const { media: e, levelDetails: t } = this;
    if (!e || !t) return;
    this.currentTime = e.currentTime;
    const r = this.computeLatency();
    if (r === null) return;
    this._latency = r;
    const { lowLatencyMode: i, maxLiveSyncPlaybackRate: s } = this.config;
    if (!i || s === 1) return;
    const o = this.targetLatency;
    if (o === null) return;
    const a = r - o,
      l = Math.min(this.maxLatency, o + t.targetduration),
      u = a < l;
    if (t.live && u && a > 0.05 && this.forwardBufferLength > 1) {
      const c = Math.min(2, Math.max(1, s)),
        d =
          Math.round((2 / (1 + Math.exp(-0.75 * a - this.edgeStalled))) * 20) /
          20;
      e.playbackRate = Math.min(c, Math.max(1, d));
    } else e.playbackRate !== 1 && e.playbackRate !== 0 && (e.playbackRate = 1);
  }
  estimateLiveEdge() {
    const { levelDetails: e } = this;
    return e === null ? null : e.edge + e.age;
  }
  computeLatency() {
    const e = this.estimateLiveEdge();
    return e === null ? null : e - this.currentTime;
  }
}
const Ja = ["NONE", "TYPE-0", "TYPE-1", null];
var Gr = { No: "", Yes: "YES", v2: "v2" };
function aE(n, e) {
  const { canSkipUntil: t, canSkipDateRanges: r, endSN: i } = n,
    s = e !== void 0 ? e - i : 0;
  return t && s < t ? (r ? Gr.v2 : Gr.Yes) : Gr.No;
}
class Jc {
  constructor(e, t, r) {
    (this.msn = void 0),
      (this.part = void 0),
      (this.skip = void 0),
      (this.msn = e),
      (this.part = t),
      (this.skip = r);
  }
  addDirectives(e) {
    const t = new self.URL(e);
    return (
      this.msn !== void 0 &&
        t.searchParams.set("_HLS_msn", this.msn.toString()),
      this.part !== void 0 &&
        t.searchParams.set("_HLS_part", this.part.toString()),
      this.skip && t.searchParams.set("_HLS_skip", this.skip),
      t.href
    );
  }
}
class li {
  constructor(e) {
    (this._attrs = void 0),
      (this.audioCodec = void 0),
      (this.bitrate = void 0),
      (this.codecSet = void 0),
      (this.height = void 0),
      (this.id = void 0),
      (this.name = void 0),
      (this.videoCodec = void 0),
      (this.width = void 0),
      (this.unknownCodecs = void 0),
      (this.audioGroupIds = void 0),
      (this.details = void 0),
      (this.fragmentError = 0),
      (this.loadError = 0),
      (this.loaded = void 0),
      (this.realBitrate = 0),
      (this.textGroupIds = void 0),
      (this.url = void 0),
      (this._urlId = 0),
      (this.url = [e.url]),
      (this._attrs = [e.attrs]),
      (this.bitrate = e.bitrate),
      e.details && (this.details = e.details),
      (this.id = e.id || 0),
      (this.name = e.name),
      (this.width = e.width || 0),
      (this.height = e.height || 0),
      (this.audioCodec = e.audioCodec),
      (this.videoCodec = e.videoCodec),
      (this.unknownCodecs = e.unknownCodecs),
      (this.codecSet = [e.videoCodec, e.audioCodec]
        .filter((t) => t)
        .join(",")
        .replace(/\.[^.,]+/g, ""));
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate);
  }
  get attrs() {
    return this._attrs[this._urlId];
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || ".";
  }
  get uri() {
    return this.url[this._urlId] || "";
  }
  get urlId() {
    return this._urlId;
  }
  set urlId(e) {
    const t = e % this.url.length;
    this._urlId !== t &&
      ((this.fragmentError = 0),
      (this.loadError = 0),
      (this.details = void 0),
      (this._urlId = t));
  }
  get audioGroupId() {
    var e;
    return (e = this.audioGroupIds) == null ? void 0 : e[this.urlId];
  }
  get textGroupId() {
    var e;
    return (e = this.textGroupIds) == null ? void 0 : e[this.urlId];
  }
  addFallback(e) {
    this.url.push(e.url), this._attrs.push(e.attrs);
  }
}
function bo(n, e) {
  const t = e.startPTS;
  if (G(t)) {
    let r = 0,
      i;
    e.sn > n.sn ? ((r = t - n.start), (i = n)) : ((r = n.start - t), (i = e)),
      i.duration !== r && (i.duration = r);
  } else
    e.sn > n.sn
      ? n.cc === e.cc && n.minEndPTS
        ? (e.start = n.start + (n.minEndPTS - n.start))
        : (e.start = n.start + n.duration)
      : (e.start = Math.max(n.start - e.duration, 0));
}
function g0(n, e, t, r, i, s) {
  r - t <= 0 &&
    (A.warn("Fragment should have a positive duration", e),
    (r = t + e.duration),
    (s = i + e.duration));
  let a = t,
    l = r;
  const u = e.startPTS,
    c = e.endPTS;
  if (G(u)) {
    const v = Math.abs(u - t);
    G(e.deltaPTS) ? (e.deltaPTS = Math.max(v, e.deltaPTS)) : (e.deltaPTS = v),
      (a = Math.max(t, u)),
      (t = Math.min(t, u)),
      (i = Math.min(i, e.startDTS)),
      (l = Math.min(r, c)),
      (r = Math.max(r, c)),
      (s = Math.max(s, e.endDTS));
  }
  const d = t - e.start;
  e.start !== 0 && (e.start = t),
    (e.duration = r - e.start),
    (e.startPTS = t),
    (e.maxStartPTS = a),
    (e.startDTS = i),
    (e.endPTS = r),
    (e.minEndPTS = l),
    (e.endDTS = s);
  const f = e.sn;
  if (!n || f < n.startSN || f > n.endSN) return 0;
  let h;
  const p = f - n.startSN,
    g = n.fragments;
  for (g[p] = e, h = p; h > 0; h--) bo(g[h], g[h - 1]);
  for (h = p; h < g.length - 1; h++) bo(g[h], g[h + 1]);
  return (
    n.fragmentHint && bo(g[g.length - 1], n.fragmentHint),
    (n.PTSKnown = n.alignedSliding = !0),
    d
  );
}
function lE(n, e) {
  let t = null;
  const r = n.fragments;
  for (let l = r.length - 1; l >= 0; l--) {
    const u = r[l].initSegment;
    if (u) {
      t = u;
      break;
    }
  }
  n.fragmentHint && delete n.fragmentHint.endPTS;
  let i = 0,
    s;
  if (
    (dE(n, e, (l, u) => {
      l.relurl && (i = l.cc - u.cc),
        G(l.startPTS) &&
          G(l.endPTS) &&
          ((u.start = u.startPTS = l.startPTS),
          (u.startDTS = l.startDTS),
          (u.maxStartPTS = l.maxStartPTS),
          (u.endPTS = l.endPTS),
          (u.endDTS = l.endDTS),
          (u.minEndPTS = l.minEndPTS),
          (u.duration = l.endPTS - l.startPTS),
          u.duration && (s = u),
          (e.PTSKnown = e.alignedSliding = !0)),
        (u.elementaryStreams = l.elementaryStreams),
        (u.loader = l.loader),
        (u.stats = l.stats),
        (u.urlId = l.urlId),
        l.initSegment && ((u.initSegment = l.initSegment), (t = l.initSegment));
    }),
    t &&
      (e.fragmentHint
        ? e.fragments.concat(e.fragmentHint)
        : e.fragments
      ).forEach((u) => {
        var c;
        (!u.initSegment ||
          u.initSegment.relurl === ((c = t) == null ? void 0 : c.relurl)) &&
          (u.initSegment = t);
      }),
    e.skippedSegments)
  )
    if (
      ((e.deltaUpdateFailed = e.fragments.some((l) => !l)), e.deltaUpdateFailed)
    ) {
      A.warn(
        "[level-helper] Previous playlist missing segments skipped in delta playlist"
      );
      for (let l = e.skippedSegments; l--; ) e.fragments.shift();
      (e.startSN = e.fragments[0].sn), (e.startCC = e.fragments[0].cc);
    } else
      e.canSkipDateRanges &&
        (e.dateRanges = uE(
          n.dateRanges,
          e.dateRanges,
          e.recentlyRemovedDateranges
        ));
  const o = e.fragments;
  if (i) {
    A.warn("discontinuity sliding from playlist, take drift into account");
    for (let l = 0; l < o.length; l++) o[l].cc += i;
  }
  e.skippedSegments && (e.startCC = e.fragments[0].cc),
    cE(n.partList, e.partList, (l, u) => {
      (u.elementaryStreams = l.elementaryStreams), (u.stats = l.stats);
    }),
    s ? g0(e, s, s.startPTS, s.endPTS, s.startDTS, s.endDTS) : m0(n, e),
    o.length && (e.totalduration = e.edge - o[0].start),
    (e.driftStartTime = n.driftStartTime),
    (e.driftStart = n.driftStart);
  const a = e.advancedDateTime;
  if (e.advanced && a) {
    const l = e.edge;
    e.driftStart || ((e.driftStartTime = a), (e.driftStart = l)),
      (e.driftEndTime = a),
      (e.driftEnd = l);
  } else
    (e.driftEndTime = n.driftEndTime),
      (e.driftEnd = n.driftEnd),
      (e.advancedDateTime = n.advancedDateTime);
}
function uE(n, e, t) {
  const r = Se({}, n);
  return (
    t &&
      t.forEach((i) => {
        delete r[i];
      }),
    Object.keys(e).forEach((i) => {
      const s = new Qh(e[i].attr, r[i]);
      s.isValid
        ? (r[i] = s)
        : A.warn(
            `Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(
              e[i].attr
            )}"`
          );
    }),
    r
  );
}
function cE(n, e, t) {
  if (n && e) {
    let r = 0;
    for (let i = 0, s = n.length; i <= s; i++) {
      const o = n[i],
        a = e[i + r];
      o && a && o.index === a.index && o.fragment.sn === a.fragment.sn
        ? t(o, a)
        : r--;
    }
  }
}
function dE(n, e, t) {
  const r = e.skippedSegments,
    i = Math.max(n.startSN, e.startSN) - e.startSN,
    s =
      (n.fragmentHint ? 1 : 0) +
      (r ? e.endSN : Math.min(n.endSN, e.endSN)) -
      e.startSN,
    o = e.startSN - n.startSN,
    a = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments,
    l = n.fragmentHint ? n.fragments.concat(n.fragmentHint) : n.fragments;
  for (let u = i; u <= s; u++) {
    const c = l[o + u];
    let d = a[u];
    r && !d && u < r && (d = e.fragments[u] = c), c && d && t(c, d);
  }
}
function m0(n, e) {
  const t = e.startSN + e.skippedSegments - n.startSN,
    r = n.fragments;
  t < 0 || t >= r.length || el(e, r[t].start);
}
function el(n, e) {
  if (e) {
    const t = n.fragments;
    for (let r = n.skippedSegments; r < t.length; r++) t[r].start += e;
    n.fragmentHint && (n.fragmentHint.start += e);
  }
}
function fE(n, e = 1 / 0) {
  let t = 1e3 * n.targetduration;
  if (n.updated) {
    const r = n.fragments,
      i = 4;
    if (r.length && t * i > e) {
      const s = r[r.length - 1].duration * 1e3;
      s < t && (t = s);
    }
  } else t /= 2;
  return Math.round(t);
}
function hE(n, e, t) {
  if (!(n != null && n.details)) return null;
  const r = n.details;
  let i = r.fragments[e - r.startSN];
  return i || ((i = r.fragmentHint), i && i.sn === e)
    ? i
    : e < r.startSN && t && t.sn === e
    ? t
    : null;
}
function ed(n, e, t) {
  var r;
  return n != null && n.details
    ? y0((r = n.details) == null ? void 0 : r.partList, e, t)
    : null;
}
function y0(n, e, t) {
  if (n)
    for (let r = n.length; r--; ) {
      const i = n[r];
      if (i.index === t && i.fragment.sn === e) return i;
    }
  return null;
}
function Fs(n) {
  switch (n.details) {
    case F.FRAG_LOAD_TIMEOUT:
    case F.KEY_LOAD_TIMEOUT:
    case F.LEVEL_LOAD_TIMEOUT:
    case F.MANIFEST_LOAD_TIMEOUT:
      return !0;
  }
  return !1;
}
function td(n, e) {
  const t = Fs(e);
  return n.default[`${t ? "timeout" : "error"}Retry`];
}
function ou(n, e) {
  const t = n.backoff === "linear" ? 1 : Math.pow(2, e);
  return Math.min(t * n.retryDelayMs, n.maxRetryDelayMs);
}
function nd(n) {
  return qe(qe({}, n), { errorRetry: null, timeoutRetry: null });
}
function ws(n, e, t, r) {
  return !!n && e < n.maxNumRetry && (pE(r) || !!t);
}
function pE(n) {
  return (n === 0 && navigator.onLine === !1) || (!!n && (n < 400 || n > 499));
}
const E0 = {
  search: function (n, e) {
    let t = 0,
      r = n.length - 1,
      i = null,
      s = null;
    for (; t <= r; ) {
      (i = ((t + r) / 2) | 0), (s = n[i]);
      const o = e(s);
      if (o > 0) t = i + 1;
      else if (o < 0) r = i - 1;
      else return s;
    }
    return null;
  },
};
function gE(n, e, t) {
  if (e === null || !Array.isArray(n) || !n.length || !G(e)) return null;
  const r = n[0].programDateTime;
  if (e < (r || 0)) return null;
  const i = n[n.length - 1].endProgramDateTime;
  if (e >= (i || 0)) return null;
  t = t || 0;
  for (let s = 0; s < n.length; ++s) {
    const o = n[s];
    if (mE(e, t, o)) return o;
  }
  return null;
}
function ui(n, e, t = 0, r = 0) {
  let i = null;
  if (
    (n
      ? (i = e[n.sn - e[0].sn + 1] || null)
      : t === 0 && e[0].start === 0 && (i = e[0]),
    i && tl(t, r, i) === 0)
  )
    return i;
  const s = E0.search(e, tl.bind(null, t, r));
  return s && (s !== n || !i) ? s : i;
}
function tl(n = 0, e = 0, t) {
  if (t.start <= n && t.start + t.duration > n) return 0;
  const r = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
  return t.start + t.duration - r <= n
    ? 1
    : t.start - r > n && t.start
    ? -1
    : 0;
}
function mE(n, e, t) {
  const r = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)) * 1e3;
  return (t.endProgramDateTime || 0) - r > n;
}
function yE(n, e) {
  return E0.search(n, (t) => (t.cc < e ? 1 : t.cc > e ? -1 : 0));
}
const EE = 3e5;
var Ve = {
    DoNothing: 0,
    SendEndCallback: 1,
    SendAlternateToPenaltyBox: 2,
    RemoveAlternatePermanently: 3,
    InsertDiscontinuity: 4,
    RetryRequest: 5,
  },
  ht = {
    None: 0,
    MoveAllAlternatesMatchingHost: 1,
    MoveAllAlternatesMatchingHDCP: 2,
    SwitchToSDR: 4,
  };
class vE {
  constructor(e) {
    (this.hls = void 0),
      (this.playlistError = 0),
      (this.penalizedRenditions = {}),
      (this.log = void 0),
      (this.warn = void 0),
      (this.error = void 0),
      (this.hls = e),
      (this.log = A.log.bind(A, "[info]:")),
      (this.warn = A.warn.bind(A, "[warning]:")),
      (this.error = A.error.bind(A, "[error]:")),
      this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(y.ERROR, this.onError, this),
      e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    !e ||
      (e.off(y.ERROR, this.onError, this),
      e.off(y.ERROR, this.onErrorOut, this),
      e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.LEVEL_UPDATED, this.onLevelUpdated, this));
  }
  destroy() {
    this.unregisterListeners(),
      (this.hls = null),
      (this.penalizedRenditions = {});
  }
  startLoad(e) {
    this.playlistError = 0;
  }
  stopLoad() {}
  getVariantLevelIndex(e) {
    return (e == null ? void 0 : e.type) === V.MAIN
      ? e.level
      : this.hls.loadLevel;
  }
  onManifestLoading() {
    (this.playlistError = 0), (this.penalizedRenditions = {});
  }
  onLevelUpdated() {
    this.playlistError = 0;
  }
  onError(e, t) {
    var r;
    if (t.fatal) return;
    const i = this.hls,
      s = t.context;
    switch (t.details) {
      case F.FRAG_LOAD_ERROR:
      case F.FRAG_LOAD_TIMEOUT:
      case F.KEY_LOAD_ERROR:
      case F.KEY_LOAD_TIMEOUT:
        t.errorAction = this.getFragRetryOrSwitchAction(t);
        return;
      case F.FRAG_GAP:
      case F.FRAG_PARSING_ERROR:
      case F.FRAG_DECRYPT_ERROR: {
        (t.errorAction = this.getFragRetryOrSwitchAction(t)),
          (t.errorAction.action = Ve.SendAlternateToPenaltyBox);
        return;
      }
      case F.LEVEL_EMPTY_ERROR:
      case F.LEVEL_PARSING_ERROR:
        {
          var o, a;
          const l = t.parent === V.MAIN ? t.level : i.loadLevel;
          t.details === F.LEVEL_EMPTY_ERROR &&
          !!((o = t.context) != null && (a = o.levelDetails) != null && a.live)
            ? (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, l))
            : ((t.levelRetry = !1),
              (t.errorAction = this.getLevelSwitchAction(t, l)));
        }
        return;
      case F.LEVEL_LOAD_ERROR:
      case F.LEVEL_LOAD_TIMEOUT:
        typeof (s == null ? void 0 : s.level) == "number" &&
          (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, s.level));
        return;
      case F.AUDIO_TRACK_LOAD_ERROR:
      case F.AUDIO_TRACK_LOAD_TIMEOUT:
      case F.SUBTITLE_LOAD_ERROR:
      case F.SUBTITLE_TRACK_LOAD_TIMEOUT:
        if (s) {
          const l = i.levels[i.loadLevel];
          if (
            l &&
            ((s.type === Q.AUDIO_TRACK && s.groupId === l.audioGroupId) ||
              (s.type === Q.SUBTITLE_TRACK && s.groupId === l.textGroupId))
          ) {
            (t.errorAction = this.getPlaylistRetryOrSwitchAction(
              t,
              i.loadLevel
            )),
              (t.errorAction.action = Ve.SendAlternateToPenaltyBox),
              (t.errorAction.flags = ht.MoveAllAlternatesMatchingHost);
            return;
          }
        }
        return;
      case F.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
        {
          const l = i.levels[i.loadLevel],
            u = l == null ? void 0 : l.attrs["HDCP-LEVEL"];
          u &&
            (t.errorAction = {
              action: Ve.SendAlternateToPenaltyBox,
              flags: ht.MoveAllAlternatesMatchingHDCP,
              hdcpLevel: u,
            });
        }
        return;
      case F.BUFFER_ADD_CODEC_ERROR:
      case F.REMUX_ALLOC_ERROR:
        t.errorAction = this.getLevelSwitchAction(
          t,
          (r = t.level) != null ? r : i.loadLevel
        );
        return;
      case F.INTERNAL_EXCEPTION:
      case F.BUFFER_APPENDING_ERROR:
      case F.BUFFER_APPEND_ERROR:
      case F.BUFFER_FULL_ERROR:
      case F.LEVEL_SWITCH_ERROR:
      case F.BUFFER_STALLED_ERROR:
      case F.BUFFER_SEEK_OVER_HOLE:
      case F.BUFFER_NUDGE_ON_STALL:
        t.errorAction = { action: Ve.DoNothing, flags: ht.None };
        return;
    }
    if (t.type === K.KEY_SYSTEM_ERROR) {
      const l = this.getVariantLevelIndex(t.frag);
      (t.levelRetry = !1), (t.errorAction = this.getLevelSwitchAction(t, l));
      return;
    }
  }
  getPlaylistRetryOrSwitchAction(e, t) {
    var r;
    const i = this.hls,
      s = td(i.config.playlistLoadPolicy, e),
      o = this.playlistError++,
      a = (r = e.response) == null ? void 0 : r.code;
    if (ws(s, o, Fs(e), a))
      return {
        action: Ve.RetryRequest,
        flags: ht.None,
        retryConfig: s,
        retryCount: o,
      };
    const u = this.getLevelSwitchAction(e, t);
    return s && ((u.retryConfig = s), (u.retryCount = o)), u;
  }
  getFragRetryOrSwitchAction(e) {
    const t = this.hls,
      r = this.getVariantLevelIndex(e.frag),
      i = t.levels[r],
      { fragLoadPolicy: s, keyLoadPolicy: o } = t.config,
      a = td(e.details.startsWith("key") ? o : s, e),
      l = t.levels.reduce((d, f) => d + f.fragmentError, 0);
    if (i) {
      var u;
      e.details !== F.FRAG_GAP && i.fragmentError++;
      const d = (u = e.response) == null ? void 0 : u.code;
      if (ws(a, l, Fs(e), d))
        return {
          action: Ve.RetryRequest,
          flags: ht.None,
          retryConfig: a,
          retryCount: l,
        };
    }
    const c = this.getLevelSwitchAction(e, r);
    return a && ((c.retryConfig = a), (c.retryCount = l)), c;
  }
  getLevelSwitchAction(e, t) {
    const r = this.hls;
    t == null && (t = r.loadLevel);
    const i = this.hls.levels[t];
    if (i && (i.loadError++, r.autoLevelEnabled)) {
      var s, o;
      let a = -1;
      const l = r.levels,
        u = (s = e.frag) == null ? void 0 : s.type,
        { type: c, groupId: d } = (o = e.context) != null ? o : {};
      for (let f = l.length; f--; ) {
        const h = (f + r.loadLevel) % l.length;
        if (h !== r.loadLevel && l[h].loadError === 0) {
          const p = l[h];
          if (e.details === F.FRAG_GAP && e.frag) {
            const g = l[h].details;
            if (g) {
              const v = ui(e.frag, g.fragments, e.frag.start);
              if (v != null && v.gap) continue;
            }
          } else {
            if (
              (c === Q.AUDIO_TRACK && d === p.audioGroupId) ||
              (c === Q.SUBTITLE_TRACK && d === p.textGroupId)
            )
              continue;
            if (
              (u === V.AUDIO && i.audioGroupId === p.audioGroupId) ||
              (u === V.SUBTITLE && i.textGroupId === p.textGroupId)
            )
              continue;
          }
          a = h;
          break;
        }
      }
      if (a > -1 && r.loadLevel !== a)
        return (
          (e.levelRetry = !0),
          (this.playlistError = 0),
          {
            action: Ve.SendAlternateToPenaltyBox,
            flags: ht.None,
            nextAutoLevel: a,
          }
        );
    }
    return {
      action: Ve.SendAlternateToPenaltyBox,
      flags: ht.MoveAllAlternatesMatchingHost,
    };
  }
  onErrorOut(e, t) {
    var r;
    switch ((r = t.errorAction) == null ? void 0 : r.action) {
      case Ve.DoNothing:
        break;
      case Ve.SendAlternateToPenaltyBox:
        this.sendAlternateToPenaltyBox(t),
          !t.errorAction.resolved && t.details !== F.FRAG_GAP && (t.fatal = !0);
        break;
    }
    if (t.fatal) {
      this.hls.stopLoad();
      return;
    }
  }
  sendAlternateToPenaltyBox(e) {
    const t = this.hls,
      r = e.errorAction;
    if (!r) return;
    const { flags: i, hdcpLevel: s, nextAutoLevel: o } = r;
    switch (i) {
      case ht.None:
        this.switchLevel(e, o);
        break;
      case ht.MoveAllAlternatesMatchingHost:
        r.resolved || (r.resolved = this.redundantFailover(e));
        break;
      case ht.MoveAllAlternatesMatchingHDCP:
        s && ((t.maxHdcpLevel = Ja[Ja.indexOf(s) - 1]), (r.resolved = !0)),
          this.warn(
            `Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`
          );
        break;
    }
    r.resolved || this.switchLevel(e, o);
  }
  switchLevel(e, t) {
    t !== void 0 &&
      e.errorAction &&
      (this.warn(`switching to level ${t} after ${e.details}`),
      (this.hls.nextAutoLevel = t),
      (e.errorAction.resolved = !0),
      (this.hls.nextLoadLevel = this.hls.nextAutoLevel));
  }
  redundantFailover(e) {
    const { hls: t, penalizedRenditions: r } = this,
      i = e.parent === V.MAIN ? e.level : t.loadLevel,
      s = t.levels[i],
      o = s.url.length,
      a = e.frag ? e.frag.urlId : s.urlId;
    s.urlId === a && (!e.frag || s.details) && this.penalizeRendition(s, e);
    for (let l = 1; l < o; l++) {
      const u = (a + l) % o,
        c = r[u];
      if (!c || xE(c, e, r[a]))
        return (
          this.warn(
            `Switching to Redundant Stream ${u + 1}/${o}: "${s.url[u]}" after ${
              e.details
            }`
          ),
          (this.playlistError = 0),
          t.levels.forEach((d) => {
            d.urlId = u;
          }),
          (t.nextLoadLevel = i),
          !0
        );
    }
    return !1;
  }
  penalizeRendition(e, t) {
    const { penalizedRenditions: r } = this,
      i = r[e.urlId] || { lastErrorPerfMs: 0, errors: [], details: void 0 };
    (i.lastErrorPerfMs = performance.now()),
      i.errors.push(t),
      (i.details = e.details),
      (r[e.urlId] = i);
  }
}
function xE(n, e, t) {
  if (performance.now() - n.lastErrorPerfMs > EE) return !0;
  const r = n.details;
  if (e.details === F.FRAG_GAP && r && e.frag) {
    const i = e.frag.start,
      s = ui(null, r.fragments, i);
    if (s && !s.gap) return !0;
  }
  if (t && n.errors.length < t.errors.length) {
    const i = n.errors[n.errors.length - 1];
    if (
      r &&
      i.frag &&
      e.frag &&
      Math.abs(i.frag.start - e.frag.start) > r.targetduration * 3
    )
      return !0;
  }
  return !1;
}
class au {
  constructor(e, t) {
    (this.hls = void 0),
      (this.timer = -1),
      (this.requestScheduled = -1),
      (this.canLoad = !1),
      (this.log = void 0),
      (this.warn = void 0),
      (this.log = A.log.bind(A, `${t}:`)),
      (this.warn = A.warn.bind(A, `${t}:`)),
      (this.hls = e);
  }
  destroy() {
    this.clearTimer(), (this.hls = this.log = this.warn = null);
  }
  clearTimer() {
    clearTimeout(this.timer), (this.timer = -1);
  }
  startLoad() {
    (this.canLoad = !0), (this.requestScheduled = -1), this.loadPlaylist();
  }
  stopLoad() {
    (this.canLoad = !1), this.clearTimer();
  }
  switchParams(e, t) {
    const r = t == null ? void 0 : t.renditionReports;
    if (r) {
      let i = -1;
      for (let s = 0; s < r.length; s++) {
        const o = r[s];
        let a;
        try {
          a = new self.URL(o.URI, t.url).href;
        } catch (l) {
          A.warn(`Could not construct new URL for Rendition Report: ${l}`),
            (a = o.URI || "");
        }
        if (a === e) {
          i = s;
          break;
        } else a === e.substring(0, a.length) && (i = s);
      }
      if (i !== -1) {
        const s = r[i],
          o = parseInt(s["LAST-MSN"]) || (t == null ? void 0 : t.lastPartSn);
        let a =
          parseInt(s["LAST-PART"]) || (t == null ? void 0 : t.lastPartIndex);
        if (this.hls.config.lowLatencyMode) {
          const l = Math.min(t.age - t.partTarget, t.targetduration);
          a >= 0 && l > t.partTarget && (a += 1);
        }
        return new Jc(o, a >= 0 ? a : void 0, Gr.No);
      }
    }
  }
  loadPlaylist(e) {
    this.requestScheduled === -1 &&
      (this.requestScheduled = self.performance.now());
  }
  shouldLoadPlaylist(e) {
    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live);
  }
  shouldReloadPlaylist(e) {
    return (
      this.timer === -1 &&
      this.requestScheduled === -1 &&
      this.shouldLoadPlaylist(e)
    );
  }
  playlistLoaded(e, t, r) {
    const { details: i, stats: s } = t,
      o = self.performance.now(),
      a = s.loading.first ? Math.max(0, o - s.loading.first) : 0;
    if (
      ((i.advancedDateTime = Date.now() - a), i.live || (r != null && r.live))
    ) {
      if (
        (i.reloaded(r),
        r &&
          this.log(
            `live playlist ${e} ${
              i.advanced
                ? "REFRESHED " + i.lastPartSn + "-" + i.lastPartIndex
                : "MISSED"
            }`
          ),
        r && i.fragments.length > 0 && lE(r, i),
        !this.canLoad || !i.live)
      )
        return;
      let l, u, c;
      if (i.canBlockReload && i.endSN && i.advanced) {
        const v = this.hls.config.lowLatencyMode,
          m = i.lastPartSn,
          E = i.endSN,
          x = i.lastPartIndex,
          T = x !== -1,
          S = m === E,
          R = v ? 0 : x;
        T ? ((u = S ? E + 1 : m), (c = S ? R : x + 1)) : (u = E + 1);
        const L = i.age,
          I = L + i.ageHeader;
        let _ = Math.min(I - i.partTarget, i.targetduration * 1.5);
        if (_ > 0) {
          if (r && _ > r.tuneInGoal)
            this.warn(
              `CDN Tune-in goal increased from: ${r.tuneInGoal} to: ${_} with playlist age: ${i.age}`
            ),
              (_ = 0);
          else {
            const D = Math.floor(_ / i.targetduration);
            if (((u += D), c !== void 0)) {
              const U = Math.round((_ % i.targetduration) / i.partTarget);
              c += U;
            }
            this.log(
              `CDN Tune-in age: ${i.ageHeader}s last advanced ${L.toFixed(
                2
              )}s goal: ${_} skip sn ${D} to part ${c}`
            );
          }
          i.tuneInGoal = _;
        }
        if (
          ((l = this.getDeliveryDirectives(i, t.deliveryDirectives, u, c)),
          v || !S)
        ) {
          this.loadPlaylist(l);
          return;
        }
      } else
        i.canBlockReload &&
          (l = this.getDeliveryDirectives(i, t.deliveryDirectives, u, c));
      const d = this.hls.mainForwardBufferInfo,
        f = d ? d.end - d.len : 0,
        h = (i.edge - f) * 1e3,
        p = fE(i, h);
      i.updated &&
        o > this.requestScheduled + p &&
        (this.requestScheduled = s.loading.start),
        u !== void 0 && i.canBlockReload
          ? (this.requestScheduled =
              s.loading.first + p - (i.partTarget * 1e3 || 1e3))
          : this.requestScheduled === -1 || this.requestScheduled + p < o
          ? (this.requestScheduled = o)
          : this.requestScheduled - o <= 0 && (this.requestScheduled += p);
      let g = this.requestScheduled - o;
      (g = Math.max(0, g)),
        this.log(`reload live playlist ${e} in ${Math.round(g)} ms`),
        (this.timer = self.setTimeout(() => this.loadPlaylist(l), g));
    } else this.clearTimer();
  }
  getDeliveryDirectives(e, t, r, i) {
    let s = aE(e, r);
    return (
      t != null &&
        t.skip &&
        e.deltaUpdateFailed &&
        ((r = t.msn), (i = t.part), (s = Gr.No)),
      new Jc(r, i, s)
    );
  }
  checkRetry(e) {
    const t = e.details,
      r = Fs(e),
      i = e.errorAction,
      { action: s, retryCount: o = 0, retryConfig: a } = i || {},
      l =
        !!i &&
        !!a &&
        (s === Ve.RetryRequest ||
          (!i.resolved && s === Ve.SendAlternateToPenaltyBox));
    if (l) {
      var u;
      if (((this.requestScheduled = -1), o >= a.maxNumRetry)) return !1;
      if (r && (u = e.context) != null && u.deliveryDirectives)
        this.warn(
          `Retrying playlist loading ${o + 1}/${
            a.maxNumRetry
          } after "${t}" without delivery-directives`
        ),
          this.loadPlaylist();
      else {
        const c = ou(a, o);
        (this.timer = self.setTimeout(() => this.loadPlaylist(), c)),
          this.warn(
            `Retrying playlist loading ${o + 1}/${
              a.maxNumRetry
            } after "${t}" in ${c}ms`
          );
      }
      (e.levelRetry = !0), (i.resolved = !0);
    }
    return l;
  }
}
let No;
class TE extends au {
  constructor(e, t) {
    super(e, "[level-controller]"),
      (this._levels = []),
      (this._firstLevel = -1),
      (this._startLevel = void 0),
      (this.currentLevel = null),
      (this.currentLevelIndex = -1),
      (this.manualLevelIndex = -1),
      (this.steering = void 0),
      (this.onParsedComplete = void 0),
      (this.steering = t),
      this._registerListeners();
  }
  _registerListeners() {
    const { hls: e } = this;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this),
      e.on(y.LEVEL_LOADED, this.onLevelLoaded, this),
      e.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this),
      e.on(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
      e.on(y.FRAG_LOADED, this.onFragLoaded, this),
      e.on(y.ERROR, this.onError, this);
  }
  _unregisterListeners() {
    const { hls: e } = this;
    e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.MANIFEST_LOADED, this.onManifestLoaded, this),
      e.off(y.LEVEL_LOADED, this.onLevelLoaded, this),
      e.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this),
      e.off(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
      e.off(y.FRAG_LOADED, this.onFragLoaded, this),
      e.off(y.ERROR, this.onError, this);
  }
  destroy() {
    this._unregisterListeners(),
      (this.steering = null),
      this.resetLevels(),
      super.destroy();
  }
  startLoad() {
    this._levels.forEach((t) => {
      (t.loadError = 0), (t.fragmentError = 0);
    }),
      super.startLoad();
  }
  resetLevels() {
    (this._startLevel = void 0),
      (this.manualLevelIndex = -1),
      (this.currentLevelIndex = -1),
      (this.currentLevel = null),
      (this._levels = []);
  }
  onManifestLoading(e, t) {
    this.resetLevels();
  }
  onManifestLoaded(e, t) {
    const r = [],
      i = {};
    let s;
    t.levels.forEach((o) => {
      var a;
      const l = o.attrs;
      ((a = o.audioCodec) == null ? void 0 : a.indexOf("mp4a.40.34")) !== -1 &&
        (No || (No = /chrome|firefox/i.test(navigator.userAgent)),
        No && (o.audioCodec = void 0));
      const {
          AUDIO: u,
          CODECS: c,
          "FRAME-RATE": d,
          "PATHWAY-ID": f,
          RESOLUTION: h,
          SUBTITLES: p,
        } = l,
        v = `${`${f || "."}-`}${o.bitrate}-${h}-${d}-${c}`;
      (s = i[v]),
        s ? s.addFallback(o) : ((s = new li(o)), (i[v] = s), r.push(s)),
        ks(s, "audio", u),
        ks(s, "text", p);
    }),
      this.filterAndSortMediaOptions(r, t);
  }
  filterAndSortMediaOptions(e, t) {
    let r = [],
      i = [],
      s = !1,
      o = !1,
      a = !1,
      l = e.filter(
        ({
          audioCodec: h,
          videoCodec: p,
          width: g,
          height: v,
          unknownCodecs: m,
        }) => (
          s || (s = !!(g && v)),
          o || (o = !!p),
          a || (a = !!h),
          !(m != null && m.length) &&
            (!h || Po(h, "audio")) &&
            (!p || Po(p, "video"))
        )
      );
    if (
      ((s || o) &&
        a &&
        (l = l.filter(
          ({ videoCodec: h, width: p, height: g }) => !!h || !!(p && g)
        )),
      l.length === 0)
    ) {
      Promise.resolve().then(() => {
        if (this.hls) {
          const h = new Error(
            "no level with compatible codecs found in manifest"
          );
          this.hls.trigger(y.ERROR, {
            type: K.MEDIA_ERROR,
            details: F.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
            fatal: !0,
            url: t.url,
            error: h,
            reason: h.message,
          });
        }
      });
      return;
    }
    t.audioTracks &&
      ((r = t.audioTracks.filter(
        (h) => !h.audioCodec || Po(h.audioCodec, "audio")
      )),
      rd(r)),
      t.subtitles && ((i = t.subtitles), rd(i));
    const u = l.slice(0);
    l.sort((h, p) =>
      h.attrs["HDCP-LEVEL"] !== p.attrs["HDCP-LEVEL"]
        ? (h.attrs["HDCP-LEVEL"] || "") > (p.attrs["HDCP-LEVEL"] || "")
          ? 1
          : -1
        : h.bitrate !== p.bitrate
        ? h.bitrate - p.bitrate
        : h.attrs["FRAME-RATE"] !== p.attrs["FRAME-RATE"]
        ? h.attrs.decimalFloatingPoint("FRAME-RATE") -
          p.attrs.decimalFloatingPoint("FRAME-RATE")
        : h.attrs.SCORE !== p.attrs.SCORE
        ? h.attrs.decimalFloatingPoint("SCORE") -
          p.attrs.decimalFloatingPoint("SCORE")
        : s && h.height !== p.height
        ? h.height - p.height
        : 0
    );
    let c = u[0];
    if (
      this.steering &&
      ((l = this.steering.filterParsedLevels(l)), l.length !== u.length)
    ) {
      for (let h = 0; h < u.length; h++)
        if (u[h].pathwayId === l[0].pathwayId) {
          c = u[h];
          break;
        }
    }
    this._levels = l;
    for (let h = 0; h < l.length; h++)
      if (l[h] === c) {
        (this._firstLevel = h),
          this.log(
            `manifest loaded, ${l.length} level(s) found, first bitrate: ${c.bitrate}`
          );
        break;
      }
    const d = a && !o,
      f = {
        levels: l,
        audioTracks: r,
        subtitleTracks: i,
        sessionData: t.sessionData,
        sessionKeys: t.sessionKeys,
        firstLevel: this._firstLevel,
        stats: t.stats,
        audio: a,
        video: o,
        altAudio: !d && r.some((h) => !!h.url),
      };
    this.hls.trigger(y.MANIFEST_PARSED, f),
      (this.hls.config.autoStartLoad || this.hls.forceStartLoad) &&
        this.hls.startLoad(this.hls.config.startPosition);
  }
  get levels() {
    return this._levels.length === 0 ? null : this._levels;
  }
  get level() {
    return this.currentLevelIndex;
  }
  set level(e) {
    const t = this._levels;
    if (t.length === 0) return;
    if (e < 0 || e >= t.length) {
      const c = new Error("invalid level idx"),
        d = e < 0;
      if (
        (this.hls.trigger(y.ERROR, {
          type: K.OTHER_ERROR,
          details: F.LEVEL_SWITCH_ERROR,
          level: e,
          fatal: d,
          error: c,
          reason: c.message,
        }),
        d)
      )
        return;
      e = Math.min(e, t.length - 1);
    }
    const r = this.currentLevelIndex,
      i = this.currentLevel,
      s = i ? i.attrs["PATHWAY-ID"] : void 0,
      o = t[e],
      a = o.attrs["PATHWAY-ID"];
    if (
      ((this.currentLevelIndex = e),
      (this.currentLevel = o),
      r === e && o.details && i && s === a)
    )
      return;
    this.log(
      `Switching to level ${e}${a ? " with Pathway " + a : ""} from level ${r}${
        s ? " with Pathway " + s : ""
      }`
    );
    const l = Se({}, o, {
      level: e,
      maxBitrate: o.maxBitrate,
      attrs: o.attrs,
      uri: o.uri,
      urlId: o.urlId,
    });
    delete l._attrs, delete l._urlId, this.hls.trigger(y.LEVEL_SWITCHING, l);
    const u = o.details;
    if (!u || u.live) {
      const c = this.switchParams(o.uri, i == null ? void 0 : i.details);
      this.loadPlaylist(c);
    }
  }
  get manualLevel() {
    return this.manualLevelIndex;
  }
  set manualLevel(e) {
    (this.manualLevelIndex = e),
      this._startLevel === void 0 && (this._startLevel = e),
      e !== -1 && (this.level = e);
  }
  get firstLevel() {
    return this._firstLevel;
  }
  set firstLevel(e) {
    this._firstLevel = e;
  }
  get startLevel() {
    if (this._startLevel === void 0) {
      const e = this.hls.config.startLevel;
      return e !== void 0 ? e : this._firstLevel;
    } else return this._startLevel;
  }
  set startLevel(e) {
    this._startLevel = e;
  }
  onError(e, t) {
    t.fatal ||
      !t.context ||
      (t.context.type === Q.LEVEL &&
        t.context.level === this.level &&
        this.checkRetry(t));
  }
  onFragLoaded(e, { frag: t }) {
    if (t !== void 0 && t.type === V.MAIN) {
      const r = this._levels[t.level];
      r !== void 0 && (r.loadError = 0);
    }
  }
  onLevelLoaded(e, t) {
    var r;
    const { level: i, details: s } = t,
      o = this._levels[i];
    if (!o) {
      var a;
      this.warn(`Invalid level index ${i}`),
        (a = t.deliveryDirectives) != null &&
          a.skip &&
          (s.deltaUpdateFailed = !0);
      return;
    }
    i === this.currentLevelIndex
      ? (o.fragmentError === 0 && (o.loadError = 0),
        this.playlistLoaded(i, t, o.details))
      : (r = t.deliveryDirectives) != null &&
        r.skip &&
        (s.deltaUpdateFailed = !0);
  }
  onAudioTrackSwitched(e, t) {
    const r = this.currentLevel;
    if (!r) return;
    const i = this.hls.audioTracks[t.id].groupId;
    if (r.audioGroupIds && r.audioGroupId !== i) {
      let s = -1;
      for (let o = 0; o < r.audioGroupIds.length; o++)
        if (r.audioGroupIds[o] === i) {
          s = o;
          break;
        }
      s !== -1 &&
        s !== r.urlId &&
        ((r.urlId = s), this.canLoad && this.startLoad());
    }
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentLevelIndex,
      r = this.currentLevel;
    if (r && this.shouldLoadPlaylist(r)) {
      const i = r.urlId;
      let s = r.uri;
      if (e)
        try {
          s = e.addDirectives(s);
        } catch (a) {
          this.warn(
            `Could not construct new URL with HLS Delivery Directives: ${a}`
          );
        }
      const o = r.attrs["PATHWAY-ID"];
      this.log(
        `Loading level index ${t}${
          (e == null ? void 0 : e.msn) !== void 0
            ? " at sn " + e.msn + " part " + e.part
            : ""
        } with${o ? " Pathway " + o : ""} URI ${i + 1}/${r.url.length} ${s}`
      ),
        this.clearTimer(),
        this.hls.trigger(y.LEVEL_LOADING, {
          url: s,
          level: t,
          id: i,
          deliveryDirectives: e || null,
        });
    }
  }
  get nextLoadLevel() {
    return this.manualLevelIndex !== -1
      ? this.manualLevelIndex
      : this.hls.nextAutoLevel;
  }
  set nextLoadLevel(e) {
    (this.level = e),
      this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = e);
  }
  removeLevel(e, t) {
    const r = (s, o) => o !== t,
      i = this._levels.filter((s, o) =>
        o !== e
          ? !0
          : s.url.length > 1 && t !== void 0
          ? ((s.url = s.url.filter(r)),
            s.audioGroupIds && (s.audioGroupIds = s.audioGroupIds.filter(r)),
            s.textGroupIds && (s.textGroupIds = s.textGroupIds.filter(r)),
            (s.urlId = 0),
            !0)
          : (this.steering && this.steering.removeLevel(s), !1)
      );
    this.hls.trigger(y.LEVELS_UPDATED, { levels: i });
  }
  onLevelsUpdated(e, { levels: t }) {
    t.forEach((r, i) => {
      const { details: s } = r;
      s != null &&
        s.fragments &&
        s.fragments.forEach((o) => {
          o.level = i;
        });
    }),
      (this._levels = t);
  }
}
function ks(n, e, t) {
  !t ||
    (e === "audio"
      ? (n.audioGroupIds || (n.audioGroupIds = []),
        (n.audioGroupIds[n.url.length - 1] = t))
      : e === "text" &&
        (n.textGroupIds || (n.textGroupIds = []),
        (n.textGroupIds[n.url.length - 1] = t)));
}
function rd(n) {
  const e = {};
  n.forEach((t) => {
    const r = t.groupId || "";
    (t.id = e[r] = e[r] || 0), e[r]++;
  });
}
var Ie = {
  NOT_LOADED: "NOT_LOADED",
  APPENDING: "APPENDING",
  PARTIAL: "PARTIAL",
  OK: "OK",
};
class SE {
  constructor(e) {
    (this.activePartLists = Object.create(null)),
      (this.endListFragments = Object.create(null)),
      (this.fragments = Object.create(null)),
      (this.timeRanges = Object.create(null)),
      (this.bufferPadding = 0.2),
      (this.hls = void 0),
      (this.hasGaps = !1),
      (this.hls = e),
      this._registerListeners();
  }
  _registerListeners() {
    const { hls: e } = this;
    e.on(y.BUFFER_APPENDED, this.onBufferAppended, this),
      e.on(y.FRAG_BUFFERED, this.onFragBuffered, this),
      e.on(y.FRAG_LOADED, this.onFragLoaded, this);
  }
  _unregisterListeners() {
    const { hls: e } = this;
    e.off(y.BUFFER_APPENDED, this.onBufferAppended, this),
      e.off(y.FRAG_BUFFERED, this.onFragBuffered, this),
      e.off(y.FRAG_LOADED, this.onFragLoaded, this);
  }
  destroy() {
    this._unregisterListeners(),
      (this.fragments =
        this.activePartLists =
        this.endListFragments =
        this.timeRanges =
          null);
  }
  getAppendedFrag(e, t) {
    const r = this.activePartLists[t];
    if (r)
      for (let i = r.length; i--; ) {
        const s = r[i];
        if (!s) break;
        const o = s.end;
        if (s.start <= e && o !== null && e <= o) return s;
      }
    return this.getBufferedFrag(e, t);
  }
  getBufferedFrag(e, t) {
    const { fragments: r } = this,
      i = Object.keys(r);
    for (let s = i.length; s--; ) {
      const o = r[i[s]];
      if ((o == null ? void 0 : o.body.type) === t && o.buffered) {
        const a = o.body;
        if (a.start <= e && e <= a.end) return a;
      }
    }
    return null;
  }
  detectEvictedFragments(e, t, r, i) {
    this.timeRanges && (this.timeRanges[e] = t);
    const s = (i == null ? void 0 : i.fragment.sn) || -1;
    Object.keys(this.fragments).forEach((o) => {
      const a = this.fragments[o];
      if (!a || s >= a.body.sn) return;
      if (!a.buffered && !a.loaded) {
        a.body.type === r && this.removeFragment(a.body);
        return;
      }
      const l = a.range[e];
      !l ||
        l.time.some((u) => {
          const c = !this.isTimeBuffered(u.startPTS, u.endPTS, t);
          return c && this.removeFragment(a.body), c;
        });
    });
  }
  detectPartialFragments(e) {
    const t = this.timeRanges,
      { frag: r, part: i } = e;
    if (!t || r.sn === "initSegment") return;
    const s = Nn(r),
      o = this.fragments[s];
    if (!o) return;
    const a = !r.relurl;
    Object.keys(t).forEach((l) => {
      const u = r.elementaryStreams[l];
      if (!u) return;
      const c = t[l],
        d = a || u.partial === !0;
      o.range[l] = this.getBufferedTimes(r, i, d, c);
    }),
      (o.loaded = null),
      Object.keys(o.range).length
        ? ((o.buffered = !0),
          o.body.endList && (this.endListFragments[o.body.type] = o),
          Oi(o) || this.removeParts(r.sn - 1, r.type))
        : this.removeFragment(o.body);
  }
  removeParts(e, t) {
    const r = this.activePartLists[t];
    !r || (this.activePartLists[t] = r.filter((i) => i.fragment.sn >= e));
  }
  fragBuffered(e, t) {
    const r = Nn(e);
    let i = this.fragments[r];
    !i &&
      t &&
      ((i = this.fragments[r] =
        {
          body: e,
          appendedPTS: null,
          loaded: null,
          buffered: !1,
          range: Object.create(null),
        }),
      e.gap && (this.hasGaps = !0)),
      i && ((i.loaded = null), (i.buffered = !0));
  }
  getBufferedTimes(e, t, r, i) {
    const s = { time: [], partial: r },
      o = e.start,
      a = e.end,
      l = e.minEndPTS || a,
      u = e.maxStartPTS || o;
    for (let c = 0; c < i.length; c++) {
      const d = i.start(c) - this.bufferPadding,
        f = i.end(c) + this.bufferPadding;
      if (u >= d && l <= f) {
        s.time.push({
          startPTS: Math.max(o, i.start(c)),
          endPTS: Math.min(a, i.end(c)),
        });
        break;
      } else if (o < f && a > d)
        (s.partial = !0),
          s.time.push({
            startPTS: Math.max(o, i.start(c)),
            endPTS: Math.min(a, i.end(c)),
          });
      else if (a <= d) break;
    }
    return s;
  }
  getPartialFragment(e) {
    let t = null,
      r,
      i,
      s,
      o = 0;
    const { bufferPadding: a, fragments: l } = this;
    return (
      Object.keys(l).forEach((u) => {
        const c = l[u];
        !c ||
          (Oi(c) &&
            ((i = c.body.start - a),
            (s = c.body.end + a),
            e >= i &&
              e <= s &&
              ((r = Math.min(e - i, s - e)),
              o <= r && ((t = c.body), (o = r)))));
      }),
      t
    );
  }
  isEndListAppended(e) {
    const t = this.endListFragments[e];
    return t !== void 0 && (t.buffered || Oi(t));
  }
  getState(e) {
    const t = Nn(e),
      r = this.fragments[t];
    return r
      ? r.buffered
        ? Oi(r)
          ? Ie.PARTIAL
          : Ie.OK
        : Ie.APPENDING
      : Ie.NOT_LOADED;
  }
  isTimeBuffered(e, t, r) {
    let i, s;
    for (let o = 0; o < r.length; o++) {
      if (
        ((i = r.start(o) - this.bufferPadding),
        (s = r.end(o) + this.bufferPadding),
        e >= i && t <= s)
      )
        return !0;
      if (t <= i) return !1;
    }
    return !1;
  }
  onFragLoaded(e, t) {
    const { frag: r, part: i } = t;
    if (r.sn === "initSegment" || r.bitrateTest) return;
    const s = i ? null : t,
      o = Nn(r);
    this.fragments[o] = {
      body: r,
      appendedPTS: null,
      loaded: s,
      buffered: !1,
      range: Object.create(null),
    };
  }
  onBufferAppended(e, t) {
    const { frag: r, part: i, timeRanges: s } = t;
    if (r.sn === "initSegment") return;
    const o = r.type;
    if (i) {
      let a = this.activePartLists[o];
      a || (this.activePartLists[o] = a = []), a.push(i);
    }
    (this.timeRanges = s),
      Object.keys(s).forEach((a) => {
        const l = s[a];
        this.detectEvictedFragments(a, l, o, i);
      });
  }
  onFragBuffered(e, t) {
    this.detectPartialFragments(t);
  }
  hasFragment(e) {
    const t = Nn(e);
    return !!this.fragments[t];
  }
  hasParts(e) {
    var t;
    return !!((t = this.activePartLists[e]) != null && t.length);
  }
  removeFragmentsInRange(e, t, r, i, s) {
    (i && !this.hasGaps) ||
      Object.keys(this.fragments).forEach((o) => {
        const a = this.fragments[o];
        if (!a) return;
        const l = a.body;
        l.type !== r ||
          (i && !l.gap) ||
          (l.start < t &&
            l.end > e &&
            (a.buffered || s) &&
            this.removeFragment(l));
      });
  }
  removeFragment(e) {
    const t = Nn(e);
    (e.stats.loaded = 0), e.clearElementaryStreamInfo();
    const r = this.activePartLists[e.type];
    if (r) {
      const i = e.sn;
      this.activePartLists[e.type] = r.filter((s) => s.fragment.sn !== i);
    }
    delete this.fragments[t], e.endList && delete this.endListFragments[e.type];
  }
  removeAllFragments() {
    (this.fragments = Object.create(null)),
      (this.endListFragments = Object.create(null)),
      (this.activePartLists = Object.create(null)),
      (this.hasGaps = !1);
  }
}
function Oi(n) {
  var e, t, r;
  return (
    n.buffered &&
    (n.body.gap ||
      ((e = n.range.video) == null ? void 0 : e.partial) ||
      ((t = n.range.audio) == null ? void 0 : t.partial) ||
      ((r = n.range.audiovideo) == null ? void 0 : r.partial))
  );
}
function Nn(n) {
  return `${n.type}_${n.level}_${n.urlId}_${n.sn}`;
}
const id = Math.pow(2, 17);
class AE {
  constructor(e) {
    (this.config = void 0),
      (this.loader = null),
      (this.partLoadTimeout = -1),
      (this.config = e);
  }
  destroy() {
    this.loader && (this.loader.destroy(), (this.loader = null));
  }
  abort() {
    this.loader && this.loader.abort();
  }
  load(e, t) {
    const r = e.url;
    if (!r)
      return Promise.reject(
        new Pt({
          type: K.NETWORK_ERROR,
          details: F.FRAG_LOAD_ERROR,
          fatal: !1,
          frag: e,
          error: new Error(
            `Fragment does not have a ${r ? "part list" : "url"}`
          ),
          networkDetails: null,
        })
      );
    this.abort();
    const i = this.config,
      s = i.fLoader,
      o = i.loader;
    return new Promise((a, l) => {
      if ((this.loader && this.loader.destroy(), e.gap)) {
        l(od(e));
        return;
      }
      const u = (this.loader = e.loader = s ? new s(i) : new o(i)),
        c = sd(e),
        d = nd(i.fragLoadPolicy.default),
        f = {
          loadPolicy: d,
          timeout: d.maxLoadTimeMs,
          maxRetry: 0,
          retryDelay: 0,
          maxRetryDelay: 0,
          highWaterMark: e.sn === "initSegment" ? 1 / 0 : id,
        };
      (e.stats = u.stats),
        u.load(c, f, {
          onSuccess: (h, p, g, v) => {
            this.resetLoader(e, u);
            let m = h.data;
            g.resetIV &&
              e.decryptdata &&
              ((e.decryptdata.iv = new Uint8Array(m.slice(0, 16))),
              (m = m.slice(16))),
              a({ frag: e, part: null, payload: m, networkDetails: v });
          },
          onError: (h, p, g, v) => {
            this.resetLoader(e, u),
              l(
                new Pt({
                  type: K.NETWORK_ERROR,
                  details: F.FRAG_LOAD_ERROR,
                  fatal: !1,
                  frag: e,
                  response: qe({ url: r, data: void 0 }, h),
                  error: new Error(`HTTP Error ${h.code} ${h.text}`),
                  networkDetails: g,
                  stats: v,
                })
              );
          },
          onAbort: (h, p, g) => {
            this.resetLoader(e, u),
              l(
                new Pt({
                  type: K.NETWORK_ERROR,
                  details: F.INTERNAL_ABORTED,
                  fatal: !1,
                  frag: e,
                  error: new Error("Aborted"),
                  networkDetails: g,
                  stats: h,
                })
              );
          },
          onTimeout: (h, p, g) => {
            this.resetLoader(e, u),
              l(
                new Pt({
                  type: K.NETWORK_ERROR,
                  details: F.FRAG_LOAD_TIMEOUT,
                  fatal: !1,
                  frag: e,
                  error: new Error(`Timeout after ${f.timeout}ms`),
                  networkDetails: g,
                  stats: h,
                })
              );
          },
          onProgress: (h, p, g, v) => {
            t && t({ frag: e, part: null, payload: g, networkDetails: v });
          },
        });
    });
  }
  loadPart(e, t, r) {
    this.abort();
    const i = this.config,
      s = i.fLoader,
      o = i.loader;
    return new Promise((a, l) => {
      if ((this.loader && this.loader.destroy(), e.gap || t.gap)) {
        l(od(e, t));
        return;
      }
      const u = (this.loader = e.loader = s ? new s(i) : new o(i)),
        c = sd(e, t),
        d = nd(i.fragLoadPolicy.default),
        f = {
          loadPolicy: d,
          timeout: d.maxLoadTimeMs,
          maxRetry: 0,
          retryDelay: 0,
          maxRetryDelay: 0,
          highWaterMark: id,
        };
      (t.stats = u.stats),
        u.load(c, f, {
          onSuccess: (h, p, g, v) => {
            this.resetLoader(e, u), this.updateStatsFromPart(e, t);
            const m = { frag: e, part: t, payload: h.data, networkDetails: v };
            r(m), a(m);
          },
          onError: (h, p, g, v) => {
            this.resetLoader(e, u),
              l(
                new Pt({
                  type: K.NETWORK_ERROR,
                  details: F.FRAG_LOAD_ERROR,
                  fatal: !1,
                  frag: e,
                  part: t,
                  response: qe({ url: c.url, data: void 0 }, h),
                  error: new Error(`HTTP Error ${h.code} ${h.text}`),
                  networkDetails: g,
                  stats: v,
                })
              );
          },
          onAbort: (h, p, g) => {
            (e.stats.aborted = t.stats.aborted),
              this.resetLoader(e, u),
              l(
                new Pt({
                  type: K.NETWORK_ERROR,
                  details: F.INTERNAL_ABORTED,
                  fatal: !1,
                  frag: e,
                  part: t,
                  error: new Error("Aborted"),
                  networkDetails: g,
                  stats: h,
                })
              );
          },
          onTimeout: (h, p, g) => {
            this.resetLoader(e, u),
              l(
                new Pt({
                  type: K.NETWORK_ERROR,
                  details: F.FRAG_LOAD_TIMEOUT,
                  fatal: !1,
                  frag: e,
                  part: t,
                  error: new Error(`Timeout after ${f.timeout}ms`),
                  networkDetails: g,
                  stats: h,
                })
              );
          },
        });
    });
  }
  updateStatsFromPart(e, t) {
    const r = e.stats,
      i = t.stats,
      s = i.total;
    if (((r.loaded += i.loaded), s)) {
      const l = Math.round(e.duration / t.duration),
        u = Math.min(Math.round(r.loaded / s), l),
        d = (l - u) * Math.round(r.loaded / u);
      r.total = r.loaded + d;
    } else r.total = Math.max(r.loaded, r.total);
    const o = r.loading,
      a = i.loading;
    o.start
      ? (o.first += a.first - a.start)
      : ((o.start = a.start), (o.first = a.first)),
      (o.end = a.end);
  }
  resetLoader(e, t) {
    (e.loader = null),
      this.loader === t &&
        (self.clearTimeout(this.partLoadTimeout), (this.loader = null)),
      t.destroy();
  }
}
function sd(n, e = null) {
  const t = e || n,
    r = {
      frag: n,
      part: e,
      responseType: "arraybuffer",
      url: t.url,
      headers: {},
      rangeStart: 0,
      rangeEnd: 0,
    },
    i = t.byteRangeStartOffset,
    s = t.byteRangeEndOffset;
  if (G(i) && G(s)) {
    var o;
    let a = i,
      l = s;
    if (
      n.sn === "initSegment" &&
      ((o = n.decryptdata) == null ? void 0 : o.method) === "AES-128"
    ) {
      const u = s - i;
      u % 16 && (l = s + (16 - (u % 16))),
        i !== 0 && ((r.resetIV = !0), (a = i - 16));
    }
    (r.rangeStart = a), (r.rangeEnd = l);
  }
  return r;
}
function od(n, e) {
  const t = new Error(`GAP ${n.gap ? "tag" : "attribute"} found`),
    r = {
      type: K.MEDIA_ERROR,
      details: F.FRAG_GAP,
      fatal: !1,
      frag: n,
      error: t,
      networkDetails: null,
    };
  return e && (r.part = e), ((e || n).stats.aborted = !0), new Pt(r);
}
class Pt extends Error {
  constructor(e) {
    super(e.error.message), (this.data = void 0), (this.data = e);
  }
}
class LE {
  constructor(e) {
    (this.config = void 0),
      (this.keyUriToKeyInfo = {}),
      (this.emeController = null),
      (this.config = e);
  }
  abort(e) {
    for (const t in this.keyUriToKeyInfo) {
      const r = this.keyUriToKeyInfo[t].loader;
      if (r) {
        if (e && e !== r.context.frag.type) return;
        r.abort();
      }
    }
  }
  detach() {
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e];
      (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) &&
        delete this.keyUriToKeyInfo[e];
    }
  }
  destroy() {
    this.detach();
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e].loader;
      t && t.destroy();
    }
    this.keyUriToKeyInfo = {};
  }
  createKeyLoadError(e, t = F.KEY_LOAD_ERROR, r, i, s) {
    return new Pt({
      type: K.NETWORK_ERROR,
      details: t,
      fatal: !1,
      frag: e,
      response: s,
      error: r,
      networkDetails: i,
    });
  }
  loadClear(e, t) {
    if (this.emeController && this.config.emeEnabled) {
      const { sn: r, cc: i } = e;
      for (let s = 0; s < t.length; s++) {
        const o = t[s];
        if (
          i <= o.cc &&
          (r === "initSegment" || o.sn === "initSegment" || r < o.sn)
        ) {
          this.emeController.selectKeySystemFormat(o).then((a) => {
            o.setKeyFormat(a);
          });
          break;
        }
      }
    }
  }
  load(e) {
    return !e.decryptdata && e.encrypted && this.emeController
      ? this.emeController
          .selectKeySystemFormat(e)
          .then((t) => this.loadInternal(e, t))
      : this.loadInternal(e);
  }
  loadInternal(e, t) {
    var r, i;
    t && e.setKeyFormat(t);
    const s = e.decryptdata;
    if (!s) {
      const u = new Error(
        t
          ? `Expected frag.decryptdata to be defined after setting format ${t}`
          : "Missing decryption data on fragment in onKeyLoading"
      );
      return Promise.reject(this.createKeyLoadError(e, F.KEY_LOAD_ERROR, u));
    }
    const o = s.uri;
    if (!o)
      return Promise.reject(
        this.createKeyLoadError(
          e,
          F.KEY_LOAD_ERROR,
          new Error(`Invalid key URI: "${o}"`)
        )
      );
    let a = this.keyUriToKeyInfo[o];
    if ((r = a) != null && r.decryptdata.key)
      return (
        (s.key = a.decryptdata.key), Promise.resolve({ frag: e, keyInfo: a })
      );
    if ((i = a) != null && i.keyLoadPromise) {
      var l;
      switch ((l = a.mediaKeySessionContext) == null ? void 0 : l.keyStatus) {
        case void 0:
        case "status-pending":
        case "usable":
        case "usable-in-future":
          return a.keyLoadPromise.then(
            (u) => (
              (s.key = u.keyInfo.decryptdata.key), { frag: e, keyInfo: a }
            )
          );
      }
    }
    switch (
      ((a = this.keyUriToKeyInfo[o] =
        {
          decryptdata: s,
          keyLoadPromise: null,
          loader: null,
          mediaKeySessionContext: null,
        }),
      s.method)
    ) {
      case "ISO-23001-7":
      case "SAMPLE-AES":
      case "SAMPLE-AES-CENC":
      case "SAMPLE-AES-CTR":
        return s.keyFormat === "identity"
          ? this.loadKeyHTTP(a, e)
          : this.loadKeyEME(a, e);
      case "AES-128":
        return this.loadKeyHTTP(a, e);
      default:
        return Promise.reject(
          this.createKeyLoadError(
            e,
            F.KEY_LOAD_ERROR,
            new Error(`Key supplied with unsupported METHOD: "${s.method}"`)
          )
        );
    }
  }
  loadKeyEME(e, t) {
    const r = { frag: t, keyInfo: e };
    if (this.emeController && this.config.emeEnabled) {
      const i = this.emeController.loadKey(r);
      if (i)
        return (e.keyLoadPromise = i.then(
          (s) => ((e.mediaKeySessionContext = s), r)
        )).catch((s) => {
          throw ((e.keyLoadPromise = null), s);
        });
    }
    return Promise.resolve(r);
  }
  loadKeyHTTP(e, t) {
    const r = this.config,
      i = r.loader,
      s = new i(r);
    return (
      (t.keyLoader = e.loader = s),
      (e.keyLoadPromise = new Promise((o, a) => {
        const l = {
            keyInfo: e,
            frag: t,
            responseType: "arraybuffer",
            url: e.decryptdata.uri,
          },
          u = r.keyLoadPolicy.default,
          c = {
            loadPolicy: u,
            timeout: u.maxLoadTimeMs,
            maxRetry: 0,
            retryDelay: 0,
            maxRetryDelay: 0,
          },
          d = {
            onSuccess: (f, h, p, g) => {
              const { frag: v, keyInfo: m, url: E } = p;
              if (!v.decryptdata || m !== this.keyUriToKeyInfo[E])
                return a(
                  this.createKeyLoadError(
                    v,
                    F.KEY_LOAD_ERROR,
                    new Error("after key load, decryptdata unset or changed"),
                    g
                  )
                );
              (m.decryptdata.key = v.decryptdata.key = new Uint8Array(f.data)),
                (v.keyLoader = null),
                (m.loader = null),
                o({ frag: v, keyInfo: m });
            },
            onError: (f, h, p, g) => {
              this.resetLoader(h),
                a(
                  this.createKeyLoadError(
                    t,
                    F.KEY_LOAD_ERROR,
                    new Error(`HTTP Error ${f.code} loading key ${f.text}`),
                    p,
                    qe({ url: l.url, data: void 0 }, f)
                  )
                );
            },
            onTimeout: (f, h, p) => {
              this.resetLoader(h),
                a(
                  this.createKeyLoadError(
                    t,
                    F.KEY_LOAD_TIMEOUT,
                    new Error("key loading timed out"),
                    p
                  )
                );
            },
            onAbort: (f, h, p) => {
              this.resetLoader(h),
                a(
                  this.createKeyLoadError(
                    t,
                    F.INTERNAL_ABORTED,
                    new Error("key loading aborted"),
                    p
                  )
                );
            },
          };
        s.load(l, c, d);
      }))
    );
  }
  resetLoader(e) {
    const { frag: t, keyInfo: r, url: i } = e,
      s = r.loader;
    t.keyLoader === s && ((t.keyLoader = null), (r.loader = null)),
      delete this.keyUriToKeyInfo[i],
      s && s.destroy();
  }
}
class CE {
  constructor() {
    (this._boundTick = void 0),
      (this._tickTimer = null),
      (this._tickInterval = null),
      (this._tickCallCount = 0),
      (this._boundTick = this.tick.bind(this));
  }
  destroy() {
    this.onHandlerDestroying(), this.onHandlerDestroyed();
  }
  onHandlerDestroying() {
    this.clearNextTick(), this.clearInterval();
  }
  onHandlerDestroyed() {}
  hasInterval() {
    return !!this._tickInterval;
  }
  hasNextTick() {
    return !!this._tickTimer;
  }
  setInterval(e) {
    return this._tickInterval
      ? !1
      : ((this._tickCallCount = 0),
        (this._tickInterval = self.setInterval(this._boundTick, e)),
        !0);
  }
  clearInterval() {
    return this._tickInterval
      ? (self.clearInterval(this._tickInterval),
        (this._tickInterval = null),
        !0)
      : !1;
  }
  clearNextTick() {
    return this._tickTimer
      ? (self.clearTimeout(this._tickTimer), (this._tickTimer = null), !0)
      : !1;
  }
  tick() {
    this._tickCallCount++,
      this._tickCallCount === 1 &&
        (this.doTick(),
        this._tickCallCount > 1 && this.tickImmediate(),
        (this._tickCallCount = 0));
  }
  tickImmediate() {
    this.clearNextTick(),
      (this._tickTimer = self.setTimeout(this._boundTick, 0));
  }
  doTick() {}
}
const DE = { length: 0, start: () => 0, end: () => 0 };
class se {
  static isBuffered(e, t) {
    try {
      if (e) {
        const r = se.getBuffered(e);
        for (let i = 0; i < r.length; i++)
          if (t >= r.start(i) && t <= r.end(i)) return !0;
      }
    } catch {}
    return !1;
  }
  static bufferInfo(e, t, r) {
    try {
      if (e) {
        const i = se.getBuffered(e),
          s = [];
        let o;
        for (o = 0; o < i.length; o++)
          s.push({ start: i.start(o), end: i.end(o) });
        return this.bufferedInfo(s, t, r);
      }
    } catch {}
    return { len: 0, start: t, end: t, nextStart: void 0 };
  }
  static bufferedInfo(e, t, r) {
    (t = Math.max(0, t)),
      e.sort(function (u, c) {
        const d = u.start - c.start;
        return d || c.end - u.end;
      });
    let i = [];
    if (r)
      for (let u = 0; u < e.length; u++) {
        const c = i.length;
        if (c) {
          const d = i[c - 1].end;
          e[u].start - d < r
            ? e[u].end > d && (i[c - 1].end = e[u].end)
            : i.push(e[u]);
        } else i.push(e[u]);
      }
    else i = e;
    let s = 0,
      o,
      a = t,
      l = t;
    for (let u = 0; u < i.length; u++) {
      const c = i[u].start,
        d = i[u].end;
      if (t + r >= c && t < d) (a = c), (l = d), (s = l - t);
      else if (t + r < c) {
        o = c;
        break;
      }
    }
    return { len: s, start: a || 0, end: l || 0, nextStart: o };
  }
  static getBuffered(e) {
    try {
      return e.buffered;
    } catch (t) {
      return A.log("failed to get media.buffered", t), DE;
    }
  }
}
class lu {
  constructor(e, t, r, i = 0, s = -1, o = !1) {
    (this.level = void 0),
      (this.sn = void 0),
      (this.part = void 0),
      (this.id = void 0),
      (this.size = void 0),
      (this.partial = void 0),
      (this.transmuxing = Bi()),
      (this.buffering = { audio: Bi(), video: Bi(), audiovideo: Bi() }),
      (this.level = e),
      (this.sn = t),
      (this.id = r),
      (this.size = i),
      (this.part = s),
      (this.partial = o);
  }
}
function Bi() {
  return { start: 0, executeStart: 0, executeEnd: 0, end: 0 };
}
function v0(n, e) {
  let t = null;
  for (let r = 0, i = n.length; r < i; r++) {
    const s = n[r];
    if (s && s.cc === e) {
      t = s;
      break;
    }
  }
  return t;
}
function RE(n, e, t) {
  return !!(e.details && (t.endCC > t.startCC || (n && n.cc < t.startCC)));
}
function IE(n, e, t = 0) {
  const r = n.fragments,
    i = e.fragments;
  if (!i.length || !r.length) {
    A.log("No fragments to align");
    return;
  }
  const s = v0(r, i[0].cc);
  if (!s || (s && !s.startPTS)) {
    A.log("No frag in previous level to align on");
    return;
  }
  return s;
}
function ad(n, e) {
  if (n) {
    const t = n.start + e;
    (n.start = n.startPTS = t), (n.endPTS = t + n.duration);
  }
}
function uu(n, e) {
  const t = e.fragments;
  for (let r = 0, i = t.length; r < i; r++) ad(t[r], n);
  e.fragmentHint && ad(e.fragmentHint, n), (e.alignedSliding = !0);
}
function FE(n, e, t) {
  !e ||
    (wE(n, t, e),
    !t.alignedSliding && e.details && kE(t, e.details),
    !t.alignedSliding && e.details && !t.skippedSegments && m0(e.details, t));
}
function wE(n, e, t) {
  if (RE(n, t, e)) {
    const r = IE(t.details, e);
    r &&
      G(r.start) &&
      (A.log(
        `Adjusting PTS using last level due to CC increase within current level ${e.url}`
      ),
      uu(r.start, e));
  }
}
function kE(n, e) {
  if (!e.fragments.length || !n.hasProgramDateTime || !e.hasProgramDateTime)
    return;
  const t = e.fragments[0].programDateTime,
    r = n.fragments[0].programDateTime,
    i = (r - t) / 1e3 + e.fragments[0].start;
  i &&
    G(i) &&
    (A.log(
      `Adjusting PTS using programDateTime delta ${
        r - t
      }ms, sliding:${i.toFixed(3)} ${n.url} `
    ),
    uu(i, n));
}
function x0(n, e) {
  if (!n.hasProgramDateTime || !e.hasProgramDateTime) return;
  const t = n.fragments,
    r = e.fragments;
  if (!t.length || !r.length) return;
  const i = Math.round(r.length / 2) - 1,
    s = r[i],
    o = v0(t, s.cc) || t[Math.round(t.length / 2) - 1],
    a = s.programDateTime,
    l = o.programDateTime;
  if (a === null || l === null) return;
  const u = (l - a) / 1e3 - (o.start - s.start);
  uu(u, n);
}
class _E {
  constructor(e, t) {
    (this.subtle = void 0),
      (this.aesIV = void 0),
      (this.subtle = e),
      (this.aesIV = t);
  }
  decrypt(e, t) {
    return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, t, e);
  }
}
class PE {
  constructor(e, t) {
    (this.subtle = void 0),
      (this.key = void 0),
      (this.subtle = e),
      (this.key = t);
  }
  expandKey() {
    return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, !1, [
      "encrypt",
      "decrypt",
    ]);
  }
}
function OE(n) {
  const e = n.byteLength,
    t = e && new DataView(n.buffer).getUint8(e - 1);
  return t ? Dn(n, 0, e - t) : n;
}
class BE {
  constructor() {
    (this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]),
      (this.subMix = [
        new Uint32Array(256),
        new Uint32Array(256),
        new Uint32Array(256),
        new Uint32Array(256),
      ]),
      (this.invSubMix = [
        new Uint32Array(256),
        new Uint32Array(256),
        new Uint32Array(256),
        new Uint32Array(256),
      ]),
      (this.sBox = new Uint32Array(256)),
      (this.invSBox = new Uint32Array(256)),
      (this.key = new Uint32Array(0)),
      (this.ksRows = 0),
      (this.keySize = 0),
      (this.keySchedule = void 0),
      (this.invKeySchedule = void 0),
      this.initTable();
  }
  uint8ArrayToUint32Array_(e) {
    const t = new DataView(e),
      r = new Uint32Array(4);
    for (let i = 0; i < 4; i++) r[i] = t.getUint32(i * 4);
    return r;
  }
  initTable() {
    const e = this.sBox,
      t = this.invSBox,
      r = this.subMix,
      i = r[0],
      s = r[1],
      o = r[2],
      a = r[3],
      l = this.invSubMix,
      u = l[0],
      c = l[1],
      d = l[2],
      f = l[3],
      h = new Uint32Array(256);
    let p = 0,
      g = 0,
      v = 0;
    for (v = 0; v < 256; v++)
      v < 128 ? (h[v] = v << 1) : (h[v] = (v << 1) ^ 283);
    for (v = 0; v < 256; v++) {
      let m = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4);
      (m = (m >>> 8) ^ (m & 255) ^ 99), (e[p] = m), (t[m] = p);
      const E = h[p],
        x = h[E],
        T = h[x];
      let S = (h[m] * 257) ^ (m * 16843008);
      (i[p] = (S << 24) | (S >>> 8)),
        (s[p] = (S << 16) | (S >>> 16)),
        (o[p] = (S << 8) | (S >>> 24)),
        (a[p] = S),
        (S = (T * 16843009) ^ (x * 65537) ^ (E * 257) ^ (p * 16843008)),
        (u[m] = (S << 24) | (S >>> 8)),
        (c[m] = (S << 16) | (S >>> 16)),
        (d[m] = (S << 8) | (S >>> 24)),
        (f[m] = S),
        p ? ((p = E ^ h[h[h[T ^ E]]]), (g ^= h[h[g]])) : (p = g = 1);
    }
  }
  expandKey(e) {
    const t = this.uint8ArrayToUint32Array_(e);
    let r = !0,
      i = 0;
    for (; i < t.length && r; ) (r = t[i] === this.key[i]), i++;
    if (r) return;
    this.key = t;
    const s = (this.keySize = t.length);
    if (s !== 4 && s !== 6 && s !== 8)
      throw new Error("Invalid aes key size=" + s);
    const o = (this.ksRows = (s + 6 + 1) * 4);
    let a, l;
    const u = (this.keySchedule = new Uint32Array(o)),
      c = (this.invKeySchedule = new Uint32Array(o)),
      d = this.sBox,
      f = this.rcon,
      h = this.invSubMix,
      p = h[0],
      g = h[1],
      v = h[2],
      m = h[3];
    let E, x;
    for (a = 0; a < o; a++) {
      if (a < s) {
        E = u[a] = t[a];
        continue;
      }
      (x = E),
        a % s === 0
          ? ((x = (x << 8) | (x >>> 24)),
            (x =
              (d[x >>> 24] << 24) |
              (d[(x >>> 16) & 255] << 16) |
              (d[(x >>> 8) & 255] << 8) |
              d[x & 255]),
            (x ^= f[(a / s) | 0] << 24))
          : s > 6 &&
            a % s === 4 &&
            (x =
              (d[x >>> 24] << 24) |
              (d[(x >>> 16) & 255] << 16) |
              (d[(x >>> 8) & 255] << 8) |
              d[x & 255]),
        (u[a] = E = (u[a - s] ^ x) >>> 0);
    }
    for (l = 0; l < o; l++)
      (a = o - l),
        l & 3 ? (x = u[a]) : (x = u[a - 4]),
        l < 4 || a <= 4
          ? (c[l] = x)
          : (c[l] =
              p[d[x >>> 24]] ^
              g[d[(x >>> 16) & 255]] ^
              v[d[(x >>> 8) & 255]] ^
              m[d[x & 255]]),
        (c[l] = c[l] >>> 0);
  }
  networkToHostOrderSwap(e) {
    return (e << 24) | ((e & 65280) << 8) | ((e & 16711680) >> 8) | (e >>> 24);
  }
  decrypt(e, t, r) {
    const i = this.keySize + 6,
      s = this.invKeySchedule,
      o = this.invSBox,
      a = this.invSubMix,
      l = a[0],
      u = a[1],
      c = a[2],
      d = a[3],
      f = this.uint8ArrayToUint32Array_(r);
    let h = f[0],
      p = f[1],
      g = f[2],
      v = f[3];
    const m = new Int32Array(e),
      E = new Int32Array(m.length);
    let x, T, S, R, L, I, _, D, U, b, Y, Ae, ne, te;
    const J = this.networkToHostOrderSwap;
    for (; t < m.length; ) {
      for (
        U = J(m[t]),
          b = J(m[t + 1]),
          Y = J(m[t + 2]),
          Ae = J(m[t + 3]),
          L = U ^ s[0],
          I = Ae ^ s[1],
          _ = Y ^ s[2],
          D = b ^ s[3],
          ne = 4,
          te = 1;
        te < i;
        te++
      )
        (x =
          l[L >>> 24] ^
          u[(I >> 16) & 255] ^
          c[(_ >> 8) & 255] ^
          d[D & 255] ^
          s[ne]),
          (T =
            l[I >>> 24] ^
            u[(_ >> 16) & 255] ^
            c[(D >> 8) & 255] ^
            d[L & 255] ^
            s[ne + 1]),
          (S =
            l[_ >>> 24] ^
            u[(D >> 16) & 255] ^
            c[(L >> 8) & 255] ^
            d[I & 255] ^
            s[ne + 2]),
          (R =
            l[D >>> 24] ^
            u[(L >> 16) & 255] ^
            c[(I >> 8) & 255] ^
            d[_ & 255] ^
            s[ne + 3]),
          (L = x),
          (I = T),
          (_ = S),
          (D = R),
          (ne = ne + 4);
      (x =
        (o[L >>> 24] << 24) ^
        (o[(I >> 16) & 255] << 16) ^
        (o[(_ >> 8) & 255] << 8) ^
        o[D & 255] ^
        s[ne]),
        (T =
          (o[I >>> 24] << 24) ^
          (o[(_ >> 16) & 255] << 16) ^
          (o[(D >> 8) & 255] << 8) ^
          o[L & 255] ^
          s[ne + 1]),
        (S =
          (o[_ >>> 24] << 24) ^
          (o[(D >> 16) & 255] << 16) ^
          (o[(L >> 8) & 255] << 8) ^
          o[I & 255] ^
          s[ne + 2]),
        (R =
          (o[D >>> 24] << 24) ^
          (o[(L >> 16) & 255] << 16) ^
          (o[(I >> 8) & 255] << 8) ^
          o[_ & 255] ^
          s[ne + 3]),
        (E[t] = J(x ^ h)),
        (E[t + 1] = J(R ^ p)),
        (E[t + 2] = J(S ^ g)),
        (E[t + 3] = J(T ^ v)),
        (h = U),
        (p = b),
        (g = Y),
        (v = Ae),
        (t = t + 4);
    }
    return E.buffer;
  }
}
const bE = 16;
class cu {
  constructor(e, { removePKCS7Padding: t = !0 } = {}) {
    if (
      ((this.logEnabled = !0),
      (this.removePKCS7Padding = void 0),
      (this.subtle = null),
      (this.softwareDecrypter = null),
      (this.key = null),
      (this.fastAesKey = null),
      (this.remainderData = null),
      (this.currentIV = null),
      (this.currentResult = null),
      (this.useSoftware = void 0),
      (this.useSoftware = e.enableSoftwareAES),
      (this.removePKCS7Padding = t),
      t)
    )
      try {
        const r = self.crypto;
        r && (this.subtle = r.subtle || r.webkitSubtle);
      } catch {}
    this.subtle === null && (this.useSoftware = !0);
  }
  destroy() {
    (this.subtle = null),
      (this.softwareDecrypter = null),
      (this.key = null),
      (this.fastAesKey = null),
      (this.remainderData = null),
      (this.currentIV = null),
      (this.currentResult = null);
  }
  isSync() {
    return this.useSoftware;
  }
  flush() {
    const { currentResult: e, remainderData: t } = this;
    if (!e || t) return this.reset(), null;
    const r = new Uint8Array(e);
    return this.reset(), this.removePKCS7Padding ? OE(r) : r;
  }
  reset() {
    (this.currentResult = null),
      (this.currentIV = null),
      (this.remainderData = null),
      this.softwareDecrypter && (this.softwareDecrypter = null);
  }
  decrypt(e, t, r) {
    return this.useSoftware
      ? new Promise((i, s) => {
          this.softwareDecrypt(new Uint8Array(e), t, r);
          const o = this.flush();
          o
            ? i(o.buffer)
            : s(new Error("[softwareDecrypt] Failed to decrypt data"));
        })
      : this.webCryptoDecrypt(new Uint8Array(e), t, r);
  }
  softwareDecrypt(e, t, r) {
    const { currentIV: i, currentResult: s, remainderData: o } = this;
    this.logOnce("JS AES decrypt"),
      o && ((e = _n(o, e)), (this.remainderData = null));
    const a = this.getValidChunk(e);
    if (!a.length) return null;
    i && (r = i);
    let l = this.softwareDecrypter;
    l || (l = this.softwareDecrypter = new BE()), l.expandKey(t);
    const u = s;
    return (
      (this.currentResult = l.decrypt(a.buffer, 0, r)),
      (this.currentIV = Dn(a, -16).buffer),
      u || null
    );
  }
  webCryptoDecrypt(e, t, r) {
    const i = this.subtle;
    return (
      (this.key !== t || !this.fastAesKey) &&
        ((this.key = t), (this.fastAesKey = new PE(i, t))),
      this.fastAesKey
        .expandKey()
        .then((s) =>
          i
            ? (this.logOnce("WebCrypto AES decrypt"),
              new _E(i, new Uint8Array(r)).decrypt(e.buffer, s))
            : Promise.reject(new Error("web crypto not initialized"))
        )
        .catch(
          (s) => (
            A.warn(
              `[decrypter]: WebCrypto Error, disable WebCrypto API, ${s.name}: ${s.message}`
            ),
            this.onWebCryptoError(e, t, r)
          )
        )
    );
  }
  onWebCryptoError(e, t, r) {
    (this.useSoftware = !0),
      (this.logEnabled = !0),
      this.softwareDecrypt(e, t, r);
    const i = this.flush();
    if (i) return i.buffer;
    throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data");
  }
  getValidChunk(e) {
    let t = e;
    const r = e.length - (e.length % bE);
    return (
      r !== e.length && ((t = Dn(e, 0, r)), (this.remainderData = Dn(e, r))), t
    );
  }
  logOnce(e) {
    !this.logEnabled || (A.log(`[decrypter]: ${e}`), (this.logEnabled = !1));
  }
}
const NE = {
    toString: function (n) {
      let e = "";
      const t = n.length;
      for (let r = 0; r < t; r++)
        e += `[${n.start(r).toFixed(3)}-${n.end(r).toFixed(3)}]`;
      return e;
    },
  },
  k = {
    STOPPED: "STOPPED",
    IDLE: "IDLE",
    KEY_LOADING: "KEY_LOADING",
    FRAG_LOADING: "FRAG_LOADING",
    FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
    WAITING_TRACK: "WAITING_TRACK",
    PARSING: "PARSING",
    PARSED: "PARSED",
    ENDED: "ENDED",
    ERROR: "ERROR",
    WAITING_INIT_PTS: "WAITING_INIT_PTS",
    WAITING_LEVEL: "WAITING_LEVEL",
  };
class du extends CE {
  constructor(e, t, r, i, s) {
    super(),
      (this.hls = void 0),
      (this.fragPrevious = null),
      (this.fragCurrent = null),
      (this.fragmentTracker = void 0),
      (this.transmuxer = null),
      (this._state = k.STOPPED),
      (this.playlistType = void 0),
      (this.media = null),
      (this.mediaBuffer = null),
      (this.config = void 0),
      (this.bitrateTest = !1),
      (this.lastCurrentTime = 0),
      (this.nextLoadPosition = 0),
      (this.startPosition = 0),
      (this.startTimeOffset = null),
      (this.loadedmetadata = !1),
      (this.retryDate = 0),
      (this.levels = null),
      (this.fragmentLoader = void 0),
      (this.keyLoader = void 0),
      (this.levelLastLoaded = null),
      (this.startFragRequested = !1),
      (this.decrypter = void 0),
      (this.initPTS = []),
      (this.onvseeking = null),
      (this.onvended = null),
      (this.logPrefix = ""),
      (this.log = void 0),
      (this.warn = void 0),
      (this.playlistType = s),
      (this.logPrefix = i),
      (this.log = A.log.bind(A, `${i}:`)),
      (this.warn = A.warn.bind(A, `${i}:`)),
      (this.hls = e),
      (this.fragmentLoader = new AE(e.config)),
      (this.keyLoader = r),
      (this.fragmentTracker = t),
      (this.config = e.config),
      (this.decrypter = new cu(e.config)),
      e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  doTick() {
    this.onTickEnd();
  }
  onTickEnd() {}
  startLoad(e) {}
  stopLoad() {
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const e = this.fragCurrent;
    e != null &&
      e.loader &&
      (e.abortRequests(), this.fragmentTracker.removeFragment(e)),
      this.resetTransmuxer(),
      (this.fragCurrent = null),
      (this.fragPrevious = null),
      this.clearInterval(),
      this.clearNextTick(),
      (this.state = k.STOPPED);
  }
  _streamEnded(e, t) {
    if (t.live || e.nextStart || !e.end || !this.media) return !1;
    const r = t.partList;
    if (r != null && r.length) {
      const s = r[r.length - 1];
      return se.isBuffered(this.media, s.start + s.duration / 2);
    }
    const i = t.fragments[t.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(i);
  }
  getLevelDetails() {
    if (this.levels && this.levelLastLoaded !== null) {
      var e;
      return (e = this.levels[this.levelLastLoaded]) == null
        ? void 0
        : e.details;
    }
  }
  onMediaAttached(e, t) {
    const r = (this.media = this.mediaBuffer = t.media);
    (this.onvseeking = this.onMediaSeeking.bind(this)),
      (this.onvended = this.onMediaEnded.bind(this)),
      r.addEventListener("seeking", this.onvseeking),
      r.addEventListener("ended", this.onvended);
    const i = this.config;
    this.levels &&
      i.autoStartLoad &&
      this.state === k.STOPPED &&
      this.startLoad(i.startPosition);
  }
  onMediaDetaching() {
    const e = this.media;
    e != null &&
      e.ended &&
      (this.log("MSE detaching and video ended, reset startPosition"),
      (this.startPosition = this.lastCurrentTime = 0)),
      e &&
        this.onvseeking &&
        this.onvended &&
        (e.removeEventListener("seeking", this.onvseeking),
        e.removeEventListener("ended", this.onvended),
        (this.onvseeking = this.onvended = null)),
      this.keyLoader && this.keyLoader.detach(),
      (this.media = this.mediaBuffer = null),
      (this.loadedmetadata = !1),
      this.fragmentTracker.removeAllFragments(),
      this.stopLoad();
  }
  onMediaSeeking() {
    const {
        config: e,
        fragCurrent: t,
        media: r,
        mediaBuffer: i,
        state: s,
      } = this,
      o = r ? r.currentTime : 0,
      a = se.bufferInfo(i || r, o, e.maxBufferHole);
    if (
      (this.log(`media seeking to ${G(o) ? o.toFixed(3) : o}, state: ${s}`),
      this.state === k.ENDED)
    )
      this.resetLoadingState();
    else if (t) {
      const l = e.maxFragLookUpTolerance,
        u = t.start - l,
        c = t.start + t.duration + l;
      if (!a.len || c < a.start || u > a.end) {
        const d = o > c;
        (o < u || d) &&
          (d &&
            t.loader &&
            (this.log(
              "seeking outside of buffer while fragment load in progress, cancel fragment load"
            ),
            t.abortRequests(),
            this.resetLoadingState()),
          (this.fragPrevious = null));
      }
    }
    r &&
      (this.fragmentTracker.removeFragmentsInRange(
        o,
        1 / 0,
        this.playlistType,
        !0
      ),
      (this.lastCurrentTime = o)),
      !this.loadedmetadata &&
        !a.len &&
        (this.nextLoadPosition = this.startPosition = o),
      this.tickImmediate();
  }
  onMediaEnded() {
    this.startPosition = this.lastCurrentTime = 0;
  }
  onManifestLoaded(e, t) {
    (this.startTimeOffset = t.startTimeOffset), (this.initPTS = []);
  }
  onHandlerDestroying() {
    this.stopLoad(), super.onHandlerDestroying();
  }
  onHandlerDestroyed() {
    (this.state = k.STOPPED),
      this.fragmentLoader && this.fragmentLoader.destroy(),
      this.keyLoader && this.keyLoader.destroy(),
      this.decrypter && this.decrypter.destroy(),
      (this.hls =
        this.log =
        this.warn =
        this.decrypter =
        this.keyLoader =
        this.fragmentLoader =
        this.fragmentTracker =
          null),
      super.onHandlerDestroyed();
  }
  loadFragment(e, t, r) {
    this._loadFragForPlayback(e, t, r);
  }
  _loadFragForPlayback(e, t, r) {
    const i = (s) => {
      if (this.fragContextChanged(e)) {
        this.warn(
          `Fragment ${e.sn}${s.part ? " p: " + s.part.index : ""} of level ${
            e.level
          } was dropped during download.`
        ),
          this.fragmentTracker.removeFragment(e);
        return;
      }
      e.stats.chunkCount++, this._handleFragmentLoadProgress(s);
    };
    this._doFragLoad(e, t, r, i)
      .then((s) => {
        if (!s) return;
        const o = this.state;
        if (this.fragContextChanged(e)) {
          (o === k.FRAG_LOADING || (!this.fragCurrent && o === k.PARSING)) &&
            (this.fragmentTracker.removeFragment(e), (this.state = k.IDLE));
          return;
        }
        "payload" in s &&
          (this.log(`Loaded fragment ${e.sn} of level ${e.level}`),
          this.hls.trigger(y.FRAG_LOADED, s)),
          this._handleFragmentLoadComplete(s);
      })
      .catch((s) => {
        this.state === k.STOPPED ||
          this.state === k.ERROR ||
          (this.warn(s), this.resetFragmentLoading(e));
      });
  }
  clearTrackerIfNeeded(e) {
    var t;
    const { fragmentTracker: r } = this;
    if (r.getState(e) === Ie.APPENDING) {
      const s = e.type,
        o = this.getFwdBufferInfo(this.mediaBuffer, s),
        a = Math.max(e.duration, o ? o.len : this.config.maxBufferLength);
      this.reduceMaxBufferLength(a) && r.removeFragment(e);
    } else
      ((t = this.mediaBuffer) == null ? void 0 : t.buffered.length) === 0
        ? r.removeAllFragments()
        : r.hasParts(e.type) &&
          (r.detectPartialFragments({
            frag: e,
            part: null,
            stats: e.stats,
            id: e.type,
          }),
          r.getState(e) === Ie.PARTIAL && r.removeFragment(e));
  }
  flushMainBuffer(e, t, r = null) {
    if (!(e - t)) return;
    const i = { startOffset: e, endOffset: t, type: r };
    this.hls.trigger(y.BUFFER_FLUSHING, i);
  }
  _loadInitSegment(e, t) {
    this._doFragLoad(e, t)
      .then((r) => {
        if (!r || this.fragContextChanged(e) || !this.levels)
          throw new Error("init load aborted");
        return r;
      })
      .then((r) => {
        const { hls: i } = this,
          { payload: s } = r,
          o = e.decryptdata;
        if (
          s &&
          s.byteLength > 0 &&
          o &&
          o.key &&
          o.iv &&
          o.method === "AES-128"
        ) {
          const a = self.performance.now();
          return this.decrypter
            .decrypt(new Uint8Array(s), o.key.buffer, o.iv.buffer)
            .catch((l) => {
              throw (
                (i.trigger(y.ERROR, {
                  type: K.MEDIA_ERROR,
                  details: F.FRAG_DECRYPT_ERROR,
                  fatal: !1,
                  error: l,
                  reason: l.message,
                  frag: e,
                }),
                l)
              );
            })
            .then((l) => {
              const u = self.performance.now();
              return (
                i.trigger(y.FRAG_DECRYPTED, {
                  frag: e,
                  payload: l,
                  stats: { tstart: a, tdecrypt: u },
                }),
                (r.payload = l),
                r
              );
            });
        }
        return r;
      })
      .then((r) => {
        const { fragCurrent: i, hls: s, levels: o } = this;
        if (!o) throw new Error("init load aborted, missing levels");
        const a = e.stats;
        (this.state = k.IDLE),
          (t.fragmentError = 0),
          (e.data = new Uint8Array(r.payload)),
          (a.parsing.start = a.buffering.start = self.performance.now()),
          (a.parsing.end = a.buffering.end = self.performance.now()),
          r.frag === i &&
            s.trigger(y.FRAG_BUFFERED, {
              stats: a,
              frag: i,
              part: null,
              id: e.type,
            }),
          this.tick();
      })
      .catch((r) => {
        this.state === k.STOPPED ||
          this.state === k.ERROR ||
          (this.warn(r), this.resetFragmentLoading(e));
      });
  }
  fragContextChanged(e) {
    const { fragCurrent: t } = this;
    return (
      !e || !t || e.level !== t.level || e.sn !== t.sn || e.urlId !== t.urlId
    );
  }
  fragBufferedComplete(e, t) {
    var r, i, s, o;
    const a = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.log(
      `Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${
        this.playlistType === V.MAIN ? "level" : "track"
      } ${e.level} (frag:[${((r = e.startPTS) != null ? r : NaN).toFixed(
        3
      )}-${((i = e.endPTS) != null ? i : NaN).toFixed(3)}] > buffer:${
        a ? NE.toString(se.getBuffered(a)) : "(detached)"
      })`
    ),
      (this.state = k.IDLE),
      a &&
        (!this.loadedmetadata &&
          e.type == V.MAIN &&
          a.buffered.length &&
          ((s = this.fragCurrent) == null ? void 0 : s.sn) ===
            ((o = this.fragPrevious) == null ? void 0 : o.sn) &&
          ((this.loadedmetadata = !0), this.seekToStartPos()),
        this.tick());
  }
  seekToStartPos() {}
  _handleFragmentLoadComplete(e) {
    const { transmuxer: t } = this;
    if (!t) return;
    const { frag: r, part: i, partsLoaded: s } = e,
      o = !s || s.length === 0 || s.some((l) => !l),
      a = new lu(
        r.level,
        r.sn,
        r.stats.chunkCount + 1,
        0,
        i ? i.index : -1,
        !o
      );
    t.flush(a);
  }
  _handleFragmentLoadProgress(e) {}
  _doFragLoad(e, t, r = null, i) {
    var s;
    const o = t == null ? void 0 : t.details;
    if (!this.levels || !o)
      throw new Error(`frag load aborted, missing level${o ? "" : " detail"}s`);
    let a = null;
    if (
      (e.encrypted && !((s = e.decryptdata) != null && s.key)
        ? (this.log(
            `Loading key for ${e.sn} of [${o.startSN}-${o.endSN}], ${
              this.logPrefix === "[stream-controller]" ? "level" : "track"
            } ${e.level}`
          ),
          (this.state = k.KEY_LOADING),
          (this.fragCurrent = e),
          (a = this.keyLoader.load(e).then((c) => {
            if (!this.fragContextChanged(c.frag))
              return (
                this.hls.trigger(y.KEY_LOADED, c),
                this.state === k.KEY_LOADING && (this.state = k.IDLE),
                c
              );
          })),
          this.hls.trigger(y.KEY_LOADING, { frag: e }),
          this.fragCurrent === null &&
            (a = Promise.reject(
              new Error("frag load aborted, context changed in KEY_LOADING")
            )))
        : !e.encrypted &&
          o.encryptedFragments.length &&
          this.keyLoader.loadClear(e, o.encryptedFragments),
      (r = Math.max(e.start, r || 0)),
      this.config.lowLatencyMode && e.sn !== "initSegment")
    ) {
      const c = o.partList;
      if (c && i) {
        r > e.end && o.fragmentHint && (e = o.fragmentHint);
        const d = this.getNextPart(c, e, r);
        if (d > -1) {
          const f = c[d];
          this.log(
            `Loading part sn: ${e.sn} p: ${f.index} cc: ${e.cc} of playlist [${
              o.startSN
            }-${o.endSN}] parts [0-${d}-${c.length - 1}] ${
              this.logPrefix === "[stream-controller]" ? "level" : "track"
            }: ${e.level}, target: ${parseFloat(r.toFixed(3))}`
          ),
            (this.nextLoadPosition = f.start + f.duration),
            (this.state = k.FRAG_LOADING);
          let h;
          return (
            a
              ? (h = a
                  .then((p) =>
                    !p || this.fragContextChanged(p.frag)
                      ? null
                      : this.doFragPartsLoad(e, f, t, i)
                  )
                  .catch((p) => this.handleFragLoadError(p)))
              : (h = this.doFragPartsLoad(e, f, t, i).catch((p) =>
                  this.handleFragLoadError(p)
                )),
            this.hls.trigger(y.FRAG_LOADING, {
              frag: e,
              part: f,
              targetBufferTime: r,
            }),
            this.fragCurrent === null
              ? Promise.reject(
                  new Error(
                    "frag load aborted, context changed in FRAG_LOADING parts"
                  )
                )
              : h
          );
        } else if (!e.url || this.loadedEndOfParts(c, r))
          return Promise.resolve(null);
      }
    }
    this.log(
      `Loading fragment ${e.sn} cc: ${e.cc} ${
        o ? "of [" + o.startSN + "-" + o.endSN + "] " : ""
      }${this.logPrefix === "[stream-controller]" ? "level" : "track"}: ${
        e.level
      }, target: ${parseFloat(r.toFixed(3))}`
    ),
      G(e.sn) &&
        !this.bitrateTest &&
        (this.nextLoadPosition = e.start + e.duration),
      (this.state = k.FRAG_LOADING);
    const l = this.config.progressive;
    let u;
    return (
      l && a
        ? (u = a
            .then((c) =>
              !c || this.fragContextChanged(c == null ? void 0 : c.frag)
                ? null
                : this.fragmentLoader.load(e, i)
            )
            .catch((c) => this.handleFragLoadError(c)))
        : (u = Promise.all([this.fragmentLoader.load(e, l ? i : void 0), a])
            .then(([c]) => (!l && c && i && i(c), c))
            .catch((c) => this.handleFragLoadError(c))),
      this.hls.trigger(y.FRAG_LOADING, { frag: e, targetBufferTime: r }),
      this.fragCurrent === null
        ? Promise.reject(
            new Error("frag load aborted, context changed in FRAG_LOADING")
          )
        : u
    );
  }
  doFragPartsLoad(e, t, r, i) {
    return new Promise((s, o) => {
      var a;
      const l = [],
        u = (a = r.details) == null ? void 0 : a.partList,
        c = (d) => {
          this.fragmentLoader
            .loadPart(e, d, i)
            .then((f) => {
              l[d.index] = f;
              const h = f.part;
              this.hls.trigger(y.FRAG_LOADED, f);
              const p = ed(r, e.sn, d.index + 1) || y0(u, e.sn, d.index + 1);
              if (p) c(p);
              else return s({ frag: e, part: h, partsLoaded: l });
            })
            .catch(o);
        };
      c(t);
    });
  }
  handleFragLoadError(e) {
    if ("data" in e) {
      const t = e.data;
      e.data && t.details === F.INTERNAL_ABORTED
        ? this.handleFragLoadAborted(t.frag, t.part)
        : this.hls.trigger(y.ERROR, t);
    } else
      this.hls.trigger(y.ERROR, {
        type: K.OTHER_ERROR,
        details: F.INTERNAL_EXCEPTION,
        err: e,
        error: e,
        fatal: !0,
      });
    return null;
  }
  _handleTransmuxerFlush(e) {
    const t = this.getCurrentContext(e);
    if (!t || this.state !== k.PARSING) {
      !this.fragCurrent &&
        this.state !== k.STOPPED &&
        this.state !== k.ERROR &&
        (this.state = k.IDLE);
      return;
    }
    const { frag: r, part: i, level: s } = t,
      o = self.performance.now();
    (r.stats.parsing.end = o),
      i && (i.stats.parsing.end = o),
      this.updateLevelTiming(r, i, s, e.partial);
  }
  getCurrentContext(e) {
    const { levels: t, fragCurrent: r } = this,
      { level: i, sn: s, part: o } = e;
    if (!(t != null && t[i]))
      return (
        this.warn(
          `Levels object was unset while buffering fragment ${s} of level ${i}. The current chunk will not be buffered.`
        ),
        null
      );
    const a = t[i],
      l = o > -1 ? ed(a, s, o) : null,
      u = l ? l.fragment : hE(a, s, r);
    return u
      ? (r && r !== u && (u.stats = r.stats), { frag: u, part: l, level: a })
      : null;
  }
  bufferFragmentData(e, t, r, i) {
    var s;
    if (!e || this.state !== k.PARSING) return;
    const { data1: o, data2: a } = e;
    let l = o;
    if ((o && a && (l = _n(o, a)), !((s = l) != null && s.length))) return;
    const u = {
      type: e.type,
      frag: t,
      part: r,
      chunkMeta: i,
      parent: t.type,
      data: l,
    };
    this.hls.trigger(y.BUFFER_APPENDING, u),
      e.dropped && e.independent && !r && this.flushBufferGap(t);
  }
  flushBufferGap(e) {
    const t = this.media;
    if (!t) return;
    if (!se.isBuffered(t, t.currentTime)) {
      this.flushMainBuffer(0, e.start);
      return;
    }
    const r = t.currentTime,
      i = se.bufferInfo(t, r, 0),
      s = e.duration,
      o = Math.min(this.config.maxFragLookUpTolerance * 2, s * 0.25),
      a = Math.max(Math.min(e.start - o, i.end - o), r + o);
    e.start - a > o && this.flushMainBuffer(a, e.start);
  }
  getFwdBufferInfo(e, t) {
    const r = this.getLoadPosition();
    return G(r) ? this.getFwdBufferInfoAtPos(e, r, t) : null;
  }
  getFwdBufferInfoAtPos(e, t, r) {
    const {
        config: { maxBufferHole: i },
      } = this,
      s = se.bufferInfo(e, t, i);
    if (s.len === 0 && s.nextStart !== void 0) {
      const o = this.fragmentTracker.getBufferedFrag(t, r);
      if (o && s.nextStart < o.end)
        return se.bufferInfo(e, t, Math.max(s.nextStart, i));
    }
    return s;
  }
  getMaxBufferLength(e) {
    const { config: t } = this;
    let r;
    return (
      e
        ? (r = Math.max((8 * t.maxBufferSize) / e, t.maxBufferLength))
        : (r = t.maxBufferLength),
      Math.min(r, t.maxMaxBufferLength)
    );
  }
  reduceMaxBufferLength(e) {
    const t = this.config,
      r = e || t.maxBufferLength;
    return t.maxMaxBufferLength >= r
      ? ((t.maxMaxBufferLength /= 2),
        this.warn(`Reduce max buffer length to ${t.maxMaxBufferLength}s`),
        !0)
      : !1;
  }
  getAppendedFrag(e, t = V.MAIN) {
    const r = this.fragmentTracker.getAppendedFrag(e, V.MAIN);
    return r && "fragment" in r ? r.fragment : r;
  }
  getNextFragment(e, t) {
    const r = t.fragments,
      i = r.length;
    if (!i) return null;
    const { config: s } = this,
      o = r[0].start;
    let a;
    if (t.live) {
      const l = s.initialLiveManifestSize;
      if (i < l)
        return (
          this.warn(
            `Not enough fragments to start playback (have: ${i}, need: ${l})`
          ),
          null
        );
      !t.PTSKnown &&
        !this.startFragRequested &&
        this.startPosition === -1 &&
        ((a = this.getInitialLiveFragment(t, r)),
        (this.startPosition = a ? this.hls.liveSyncPosition || a.start : e));
    } else e <= o && (a = r[0]);
    if (!a) {
      const l = s.lowLatencyMode ? t.partEnd : t.fragmentEnd;
      a = this.getFragmentAtPosition(e, l, t);
    }
    return this.mapToInitFragWhenRequired(a);
  }
  isLoopLoading(e, t) {
    const r = this.fragmentTracker.getState(e);
    return (
      (r === Ie.OK || (r === Ie.PARTIAL && !!e.gap)) &&
      this.nextLoadPosition > t
    );
  }
  getNextFragmentLoopLoading(e, t, r, i, s) {
    const o = e.gap,
      a = this.getNextFragment(this.nextLoadPosition, t);
    if (a === null) return a;
    if (((e = a), o && e && !e.gap && r.nextStart)) {
      const l = this.getFwdBufferInfoAtPos(
        this.mediaBuffer ? this.mediaBuffer : this.media,
        r.nextStart,
        i
      );
      if (l !== null && r.len + l.len >= s)
        return (
          this.log(
            `buffer full after gaps in "${i}" playlist starting at sn: ${e.sn}`
          ),
          null
        );
    }
    return e;
  }
  mapToInitFragWhenRequired(e) {
    return e != null &&
      e.initSegment &&
      !(e != null && e.initSegment.data) &&
      !this.bitrateTest
      ? e.initSegment
      : e;
  }
  getNextPart(e, t, r) {
    let i = -1,
      s = !1,
      o = !0;
    for (let a = 0, l = e.length; a < l; a++) {
      const u = e[a];
      if (((o = o && !u.independent), i > -1 && r < u.start)) break;
      const c = u.loaded;
      c ? (i = -1) : (s || u.independent || o) && u.fragment === t && (i = a),
        (s = c);
    }
    return i;
  }
  loadedEndOfParts(e, t) {
    const r = e[e.length - 1];
    return r && t > r.start && r.loaded;
  }
  getInitialLiveFragment(e, t) {
    const r = this.fragPrevious;
    let i = null;
    if (r) {
      if (
        (e.hasProgramDateTime &&
          (this.log(
            `Live playlist, switching playlist, load frag with same PDT: ${r.programDateTime}`
          ),
          (i = gE(
            t,
            r.endProgramDateTime,
            this.config.maxFragLookUpTolerance
          ))),
        !i)
      ) {
        const s = r.sn + 1;
        if (s >= e.startSN && s <= e.endSN) {
          const o = t[s - e.startSN];
          r.cc === o.cc &&
            ((i = o),
            this.log(
              `Live playlist, switching playlist, load frag with next SN: ${i.sn}`
            ));
        }
        i ||
          ((i = yE(t, r.cc)),
          i &&
            this.log(
              `Live playlist, switching playlist, load frag with same CC: ${i.sn}`
            ));
      }
    } else {
      const s = this.hls.liveSyncPosition;
      s !== null &&
        (i = this.getFragmentAtPosition(
          s,
          this.bitrateTest ? e.fragmentEnd : e.edge,
          e
        ));
    }
    return i;
  }
  getFragmentAtPosition(e, t, r) {
    const { config: i } = this;
    let { fragPrevious: s } = this,
      { fragments: o, endSN: a } = r;
    const { fragmentHint: l } = r,
      u = i.maxFragLookUpTolerance,
      c = r.partList,
      d = !!(i.lowLatencyMode && c != null && c.length && l);
    d && l && !this.bitrateTest && ((o = o.concat(l)), (a = l.sn));
    let f;
    if (e < t) {
      const h = e > t - u ? 0 : u;
      f = ui(s, o, e, h);
    } else f = o[o.length - 1];
    if (f) {
      const h = f.sn - r.startSN,
        p = this.fragmentTracker.getState(f);
      if (
        ((p === Ie.OK || (p === Ie.PARTIAL && f.gap)) && (s = f),
        s &&
          f.sn === s.sn &&
          (!d || c[0].fragment.sn > f.sn) &&
          s &&
          f.level === s.level)
      ) {
        const v = o[h + 1];
        f.sn < a && this.fragmentTracker.getState(v) !== Ie.OK
          ? (f = v)
          : (f = null);
      }
    }
    return f;
  }
  synchronizeToLiveEdge(e) {
    const { config: t, media: r } = this;
    if (!r) return;
    const i = this.hls.liveSyncPosition,
      s = r.currentTime,
      o = e.fragments[0].start,
      a = e.edge,
      l = s >= o - t.maxFragLookUpTolerance && s <= a;
    if (i !== null && r.duration > i && (s < i || !l)) {
      const u =
        t.liveMaxLatencyDuration !== void 0
          ? t.liveMaxLatencyDuration
          : t.liveMaxLatencyDurationCount * e.targetduration;
      ((!l && r.readyState < 4) || s < a - u) &&
        (this.loadedmetadata || (this.nextLoadPosition = i),
        r.readyState &&
          (this.warn(
            `Playback: ${s.toFixed(
              3
            )} is located too far from the end of live sliding playlist: ${a}, reset currentTime to : ${i.toFixed(
              3
            )}`
          ),
          (r.currentTime = i)));
    }
  }
  alignPlaylists(e, t) {
    const { levels: r, levelLastLoaded: i, fragPrevious: s } = this,
      o = i !== null ? r[i] : null,
      a = e.fragments.length;
    if (!a) return this.warn("No fragments in live playlist"), 0;
    const l = e.fragments[0].start,
      u = !t,
      c = e.alignedSliding && G(l);
    if (u || (!c && !l)) {
      FE(s, o, e);
      const d = e.fragments[0].start;
      return (
        this.log(
          `Live playlist sliding: ${d.toFixed(2)} start-sn: ${
            t ? t.startSN : "na"
          }->${e.startSN} prev-sn: ${s ? s.sn : "na"} fragments: ${a}`
        ),
        d
      );
    }
    return l;
  }
  waitForCdnTuneIn(e) {
    return (
      e.live &&
      e.canBlockReload &&
      e.partTarget &&
      e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * 3)
    );
  }
  setStartPosition(e, t) {
    let r = this.startPosition;
    if ((r < t && (r = -1), r === -1 || this.lastCurrentTime === -1)) {
      const i = this.startTimeOffset !== null,
        s = i ? this.startTimeOffset : e.startTimeOffset;
      s !== null && G(s)
        ? ((r = t + s),
          s < 0 && (r += e.totalduration),
          (r = Math.min(Math.max(t, r), t + e.totalduration)),
          this.log(
            `Start time offset ${s} found in ${
              i ? "multivariant" : "media"
            } playlist, adjust startPosition to ${r}`
          ),
          (this.startPosition = r))
        : e.live
        ? (r = this.hls.liveSyncPosition || t)
        : (this.startPosition = r = 0),
        (this.lastCurrentTime = r);
    }
    this.nextLoadPosition = r;
  }
  getLoadPosition() {
    const { media: e } = this;
    let t = 0;
    return (
      this.loadedmetadata && e
        ? (t = e.currentTime)
        : this.nextLoadPosition && (t = this.nextLoadPosition),
      t
    );
  }
  handleFragLoadAborted(e, t) {
    this.transmuxer &&
      e.sn !== "initSegment" &&
      e.stats.aborted &&
      (this.warn(
        `Fragment ${e.sn}${t ? " part " + t.index : ""} of level ${
          e.level
        } was aborted`
      ),
      this.resetFragmentLoading(e));
  }
  resetFragmentLoading(e) {
    (!this.fragCurrent ||
      (!this.fragContextChanged(e) &&
        this.state !== k.FRAG_LOADING_WAITING_RETRY)) &&
      (this.state = k.IDLE);
  }
  onFragmentOrKeyLoadError(e, t) {
    if (t.chunkMeta && !t.frag) {
      const c = this.getCurrentContext(t.chunkMeta);
      c && (t.frag = c.frag);
    }
    const r = t.frag;
    if (!r || r.type !== e || !this.levels) return;
    if (this.fragContextChanged(r)) {
      var i;
      this.warn(
        `Frag load error must match current frag to retry ${r.url} > ${
          (i = this.fragCurrent) == null ? void 0 : i.url
        }`
      );
      return;
    }
    const s = t.details === F.FRAG_GAP;
    s && this.fragmentTracker.fragBuffered(r, !0);
    const o = t.errorAction,
      { action: a, retryCount: l = 0, retryConfig: u } = o || {};
    if (o && a === Ve.RetryRequest && u) {
      this.loadedmetadata ||
        ((this.startFragRequested = !1),
        (this.nextLoadPosition = this.startPosition));
      const c = ou(u, l);
      this.warn(
        `Fragment ${r.sn} of ${e} ${r.level} errored with ${
          t.details
        }, retrying loading ${l + 1}/${u.maxNumRetry} in ${c}ms`
      ),
        (o.resolved = !0),
        (this.retryDate = self.performance.now() + c),
        (this.state = k.FRAG_LOADING_WAITING_RETRY);
    } else
      u && o
        ? (this.resetFragmentErrors(e),
          l < u.maxNumRetry
            ? s || (o.resolved = !0)
            : A.warn(`${t.details} reached or exceeded max retry (${l})`))
        : (this.state = k.ERROR);
    this.tickImmediate();
  }
  reduceLengthAndFlushBuffer(e) {
    if (this.state === k.PARSING || this.state === k.PARSED) {
      const t = e.parent,
        r = this.getFwdBufferInfo(this.mediaBuffer, t),
        i = r && r.len > 0.5;
      i && this.reduceMaxBufferLength(r.len);
      const s = !i;
      return (
        s &&
          this.warn(
            `Buffer full error while media.currentTime is not buffered, flush ${t} buffer`
          ),
        e.frag &&
          (this.fragmentTracker.removeFragment(e.frag),
          (this.nextLoadPosition = e.frag.start)),
        this.resetLoadingState(),
        s
      );
    }
    return !1;
  }
  resetFragmentErrors(e) {
    e === V.AUDIO && (this.fragCurrent = null),
      this.loadedmetadata || (this.startFragRequested = !1),
      this.state !== k.STOPPED && (this.state = k.IDLE);
  }
  afterBufferFlushed(e, t, r) {
    if (!e) return;
    const i = se.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, i, r),
      this.state === k.ENDED && this.resetLoadingState();
  }
  resetLoadingState() {
    this.log("Reset loading state"),
      (this.fragCurrent = null),
      (this.fragPrevious = null),
      (this.state = k.IDLE);
  }
  resetStartWhenNotLoaded(e) {
    if (!this.loadedmetadata) {
      this.startFragRequested = !1;
      const t = this.levels ? this.levels[e].details : null;
      t != null && t.live
        ? ((this.startPosition = -1),
          this.setStartPosition(t, 0),
          this.resetLoadingState())
        : (this.nextLoadPosition = this.startPosition);
    }
  }
  resetWhenMissingContext(e) {
    this.warn(
      `The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`
    ),
      this.removeUnbufferedFrags(),
      this.resetStartWhenNotLoaded(e.level),
      this.resetLoadingState();
  }
  removeUnbufferedFrags(e = 0) {
    this.fragmentTracker.removeFragmentsInRange(
      e,
      1 / 0,
      this.playlistType,
      !1,
      !0
    );
  }
  updateLevelTiming(e, t, r, i) {
    var s;
    const o = r.details;
    if (!o) {
      this.warn("level.details undefined");
      return;
    }
    if (
      Object.keys(e.elementaryStreams).reduce((l, u) => {
        const c = e.elementaryStreams[u];
        if (c) {
          const d = c.endPTS - c.startPTS;
          if (d <= 0)
            return (
              this.warn(
                `Could not parse fragment ${e.sn} ${u} duration reliably (${d})`
              ),
              l || !1
            );
          const f = i
            ? 0
            : g0(o, e, c.startPTS, c.endPTS, c.startDTS, c.endDTS);
          return (
            this.hls.trigger(y.LEVEL_PTS_UPDATED, {
              details: o,
              level: r,
              drift: f,
              type: u,
              frag: e,
              start: c.startPTS,
              end: c.endPTS,
            }),
            !0
          );
        }
        return l;
      }, !1)
    )
      r.fragmentError = 0;
    else if (((s = this.transmuxer) == null ? void 0 : s.error) === null) {
      const l = new Error(
        `Found no media in fragment ${e.sn} of level ${r.id} resetting transmuxer to fallback to playlist timing`
      );
      if (
        (this.warn(l.message),
        this.hls.trigger(y.ERROR, {
          type: K.MEDIA_ERROR,
          details: F.FRAG_PARSING_ERROR,
          fatal: !1,
          error: l,
          frag: e,
          reason: `Found no media in msn ${e.sn} of level "${r.url}"`,
        }),
        !this.hls)
      )
        return;
      this.resetTransmuxer();
    }
    (this.state = k.PARSED),
      this.hls.trigger(y.FRAG_PARSED, { frag: e, part: t });
  }
  resetTransmuxer() {
    this.transmuxer && (this.transmuxer.destroy(), (this.transmuxer = null));
  }
  recoverWorkerError(e) {
    e.event === "demuxerWorker" &&
      (this.resetTransmuxer(), this.resetLoadingState());
  }
  set state(e) {
    const t = this._state;
    t !== e && ((this._state = e), this.log(`${t}->${e}`));
  }
  get state() {
    return this._state;
  }
}
function T0() {
  return self.SourceBuffer || self.WebKitSourceBuffer;
}
function ME() {
  const n = Js();
  if (!n) return !1;
  const e = T0(),
    t =
      n &&
      typeof n.isTypeSupported == "function" &&
      n.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
    r =
      !e ||
      (e.prototype &&
        typeof e.prototype.appendBuffer == "function" &&
        typeof e.prototype.remove == "function");
  return !!t && !!r;
}
function UE() {
  var n;
  const e = T0();
  return (
    typeof (e == null || (n = e.prototype) == null ? void 0 : n.changeType) ==
    "function"
  );
}
function $E() {
  return typeof __HLS_WORKER_BUNDLE__ == "function";
}
function GE() {
  const n = new self.Blob(
      [
        `var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`,
      ],
      { type: "text/javascript" }
    ),
    e = self.URL.createObjectURL(n);
  return { worker: new self.Worker(e), objectURL: e };
}
function KE(n) {
  const e = new self.URL(n, self.location.href).href;
  return { worker: new self.Worker(e), scriptURL: e };
}
function Dt(n = "", e = 9e4) {
  return {
    type: n,
    id: -1,
    pid: -1,
    inputTimeScale: e,
    sequenceNumber: -1,
    samples: [],
    dropped: 0,
  };
}
class S0 {
  constructor() {
    (this._audioTrack = void 0),
      (this._id3Track = void 0),
      (this.frameIndex = 0),
      (this.cachedData = null),
      (this.basePTS = null),
      (this.initPTS = null),
      (this.lastPTS = null);
  }
  resetInitSegment(e, t, r, i) {
    this._id3Track = {
      type: "id3",
      id: 3,
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
    };
  }
  resetTimeStamp(e) {
    (this.initPTS = e), this.resetContiguity();
  }
  resetContiguity() {
    (this.basePTS = null), (this.lastPTS = null), (this.frameIndex = 0);
  }
  canParse(e, t) {
    return !1;
  }
  appendFrame(e, t, r) {}
  demux(e, t) {
    this.cachedData && ((e = _n(this.cachedData, e)), (this.cachedData = null));
    let r = Rs(e, 0),
      i = r ? r.length : 0,
      s;
    const o = this._audioTrack,
      a = this._id3Track,
      l = r ? Ly(r) : void 0,
      u = e.length;
    for (
      (this.basePTS === null || (this.frameIndex === 0 && G(l))) &&
        ((this.basePTS = VE(l, t, this.initPTS)),
        (this.lastPTS = this.basePTS)),
        this.lastPTS === null && (this.lastPTS = this.basePTS),
        r &&
          r.length > 0 &&
          a.samples.push({
            pts: this.lastPTS,
            dts: this.lastPTS,
            data: r,
            type: Et.audioId3,
            duration: Number.POSITIVE_INFINITY,
          });
      i < u;

    ) {
      if (this.canParse(e, i)) {
        const c = this.appendFrame(o, e, i);
        c
          ? (this.frameIndex++,
            (this.lastPTS = c.sample.pts),
            (i += c.length),
            (s = i))
          : (i = u);
      } else
        Ay(e, i)
          ? ((r = Rs(e, i)),
            a.samples.push({
              pts: this.lastPTS,
              dts: this.lastPTS,
              data: r,
              type: Et.audioId3,
              duration: Number.POSITIVE_INFINITY,
            }),
            (i += r.length),
            (s = i))
          : i++;
      if (i === u && s !== u) {
        const c = Dn(e, s);
        this.cachedData
          ? (this.cachedData = _n(this.cachedData, c))
          : (this.cachedData = c);
      }
    }
    return { audioTrack: o, videoTrack: Dt(), id3Track: a, textTrack: Dt() };
  }
  demuxSampleAes(e, t, r) {
    return Promise.reject(
      new Error(`[${this}] This demuxer does not support Sample-AES decryption`)
    );
  }
  flush(e) {
    const t = this.cachedData;
    return (
      t && ((this.cachedData = null), this.demux(t, 0)),
      {
        audioTrack: this._audioTrack,
        videoTrack: Dt(),
        id3Track: this._id3Track,
        textTrack: Dt(),
      }
    );
  }
  destroy() {}
}
const VE = (n, e, t) => {
  if (G(n)) return n * 90;
  const r = t ? (t.baseTime * 9e4) / t.timescale : 0;
  return e * 9e4 + r;
};
function HE(n, e, t, r) {
  let i, s, o, a;
  const l = navigator.userAgent.toLowerCase(),
    u = r,
    c = [
      96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3,
      7350,
    ];
  i = ((e[t + 2] & 192) >>> 6) + 1;
  const d = (e[t + 2] & 60) >>> 2;
  if (d > c.length - 1) {
    n.trigger(y.ERROR, {
      type: K.MEDIA_ERROR,
      details: F.FRAG_PARSING_ERROR,
      fatal: !0,
      reason: `invalid ADTS sampling index:${d}`,
    });
    return;
  }
  return (
    (o = (e[t + 2] & 1) << 2),
    (o |= (e[t + 3] & 192) >>> 6),
    A.log(`manifest codec:${r}, ADTS type:${i}, samplingIndex:${d}`),
    /firefox/i.test(l)
      ? d >= 6
        ? ((i = 5), (a = new Array(4)), (s = d - 3))
        : ((i = 2), (a = new Array(2)), (s = d))
      : l.indexOf("android") !== -1
      ? ((i = 2), (a = new Array(2)), (s = d))
      : ((i = 5),
        (a = new Array(4)),
        (r &&
          (r.indexOf("mp4a.40.29") !== -1 || r.indexOf("mp4a.40.5") !== -1)) ||
        (!r && d >= 6)
          ? (s = d - 3)
          : (((r &&
              r.indexOf("mp4a.40.2") !== -1 &&
              ((d >= 6 && o === 1) || /vivaldi/i.test(l))) ||
              (!r && o === 1)) &&
              ((i = 2), (a = new Array(2))),
            (s = d))),
    (a[0] = i << 3),
    (a[0] |= (d & 14) >> 1),
    (a[1] |= (d & 1) << 7),
    (a[1] |= o << 3),
    i === 5 &&
      ((a[1] |= (s & 14) >> 1),
      (a[2] = (s & 1) << 7),
      (a[2] |= 2 << 2),
      (a[3] = 0)),
    {
      config: a,
      samplerate: c[d],
      channelCount: o,
      codec: "mp4a.40." + i,
      manifestCodec: u,
    }
  );
}
function A0(n, e) {
  return n[e] === 255 && (n[e + 1] & 246) === 240;
}
function L0(n, e) {
  return n[e + 1] & 1 ? 7 : 9;
}
function fu(n, e) {
  return ((n[e + 3] & 3) << 11) | (n[e + 4] << 3) | ((n[e + 5] & 224) >>> 5);
}
function WE(n, e) {
  return e + 5 < n.length;
}
function _s(n, e) {
  return e + 1 < n.length && A0(n, e);
}
function zE(n, e) {
  return WE(n, e) && A0(n, e) && fu(n, e) <= n.length - e;
}
function jE(n, e) {
  if (_s(n, e)) {
    const t = L0(n, e);
    if (e + t >= n.length) return !1;
    const r = fu(n, e);
    if (r <= t) return !1;
    const i = e + r;
    return i === n.length || _s(n, i);
  }
  return !1;
}
function C0(n, e, t, r, i) {
  if (!n.samplerate) {
    const s = HE(e, t, r, i);
    if (!s) return;
    (n.config = s.config),
      (n.samplerate = s.samplerate),
      (n.channelCount = s.channelCount),
      (n.codec = s.codec),
      (n.manifestCodec = s.manifestCodec),
      A.log(
        `parsed codec:${n.codec}, rate:${s.samplerate}, channels:${s.channelCount}`
      );
  }
}
function D0(n) {
  return (1024 * 9e4) / n;
}
function YE(n, e) {
  const t = L0(n, e);
  if (e + t <= n.length) {
    const r = fu(n, e) - t;
    if (r > 0) return { headerLength: t, frameLength: r };
  }
}
function R0(n, e, t, r, i) {
  const s = D0(n.samplerate),
    o = r + i * s,
    a = YE(e, t);
  let l;
  if (a) {
    const { frameLength: d, headerLength: f } = a,
      h = f + d,
      p = Math.max(0, t + h - e.length);
    p
      ? ((l = new Uint8Array(h - f)), l.set(e.subarray(t + f, e.length), 0))
      : (l = e.subarray(t + f, t + h));
    const g = { unit: l, pts: o };
    return p || n.samples.push(g), { sample: g, length: h, missing: p };
  }
  const u = e.length - t;
  return (
    (l = new Uint8Array(u)),
    l.set(e.subarray(t, e.length), 0),
    { sample: { unit: l, pts: o }, length: u, missing: -1 }
  );
}
class XE extends S0 {
  constructor(e, t) {
    super(),
      (this.observer = void 0),
      (this.config = void 0),
      (this.observer = e),
      (this.config = t);
  }
  resetInitSegment(e, t, r, i) {
    super.resetInitSegment(e, t, r, i),
      (this._audioTrack = {
        container: "audio/adts",
        type: "audio",
        id: 2,
        pid: -1,
        sequenceNumber: 0,
        segmentCodec: "aac",
        samples: [],
        manifestCodec: t,
        duration: i,
        inputTimeScale: 9e4,
        dropped: 0,
      });
  }
  static probe(e) {
    if (!e) return !1;
    let r = (Rs(e, 0) || []).length;
    for (let i = e.length; r < i; r++)
      if (jE(e, r)) return A.log("ADTS sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return zE(e, t);
  }
  appendFrame(e, t, r) {
    C0(e, this.observer, t, r, e.manifestCodec);
    const i = R0(e, t, r, this.basePTS, this.frameIndex);
    if (i && i.missing === 0) return i;
  }
}
const qE = /\/emsg[-/]ID3/i;
class QE {
  constructor(e, t) {
    (this.remainderData = null),
      (this.timeOffset = 0),
      (this.config = void 0),
      (this.videoTrack = void 0),
      (this.audioTrack = void 0),
      (this.id3Track = void 0),
      (this.txtTrack = void 0),
      (this.config = t);
  }
  resetTimeStamp() {}
  resetInitSegment(e, t, r, i) {
    const s = (this.videoTrack = Dt("video", 1)),
      o = (this.audioTrack = Dt("audio", 1)),
      a = (this.txtTrack = Dt("text", 1));
    if (
      ((this.id3Track = Dt("id3", 1)),
      (this.timeOffset = 0),
      !(e != null && e.byteLength))
    )
      return;
    const l = l0(e);
    if (l.video) {
      const { id: u, timescale: c, codec: d } = l.video;
      (s.id = u), (s.timescale = a.timescale = c), (s.codec = d);
    }
    if (l.audio) {
      const { id: u, timescale: c, codec: d } = l.audio;
      (o.id = u), (o.timescale = c), (o.codec = d);
    }
    (a.id = s0.text), (s.sampleDuration = 0), (s.duration = o.duration = i);
  }
  resetContiguity() {
    this.remainderData = null;
  }
  static probe(e) {
    return (
      (e = e.length > 16384 ? e.subarray(0, 16384) : e),
      X(e, ["moof"]).length > 0
    );
  }
  demux(e, t) {
    this.timeOffset = t;
    let r = e;
    const i = this.videoTrack,
      s = this.txtTrack;
    if (this.config.progressive) {
      this.remainderData && (r = _n(this.remainderData, e));
      const a = Uy(r);
      (this.remainderData = a.remainder),
        (i.samples = a.valid || new Uint8Array());
    } else i.samples = r;
    const o = this.extractID3Track(i, t);
    return (
      (s.samples = Uc(t, i)),
      {
        videoTrack: i,
        audioTrack: this.audioTrack,
        id3Track: o,
        textTrack: this.txtTrack,
      }
    );
  }
  flush() {
    const e = this.timeOffset,
      t = this.videoTrack,
      r = this.txtTrack;
    (t.samples = this.remainderData || new Uint8Array()),
      (this.remainderData = null);
    const i = this.extractID3Track(t, this.timeOffset);
    return (
      (r.samples = Uc(e, t)),
      { videoTrack: t, audioTrack: Dt(), id3Track: i, textTrack: Dt() }
    );
  }
  extractID3Track(e, t) {
    const r = this.id3Track;
    if (e.samples.length) {
      const i = X(e.samples, ["emsg"]);
      i &&
        i.forEach((s) => {
          const o = Ky(s);
          if (qE.test(o.schemeIdUri)) {
            const a = G(o.presentationTime)
              ? o.presentationTime / o.timeScale
              : t + o.presentationTimeDelta / o.timeScale;
            let l =
              o.eventDuration === 4294967295
                ? Number.POSITIVE_INFINITY
                : o.eventDuration / o.timeScale;
            l <= 0.001 && (l = Number.POSITIVE_INFINITY);
            const u = o.payload;
            r.samples.push({
              data: u,
              len: u.byteLength,
              dts: a,
              pts: a,
              type: Et.emsg,
              duration: l,
            });
          }
        });
    }
    return r;
  }
  demuxSampleAes(e, t, r) {
    return Promise.reject(
      new Error("The MP4 demuxer does not support SAMPLE-AES decryption")
    );
  }
  destroy() {}
}
let bi = null;
const ZE = [
    32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48,
    56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64,
    80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128,
    144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112,
    128, 144, 160,
  ],
  JE = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
  ev = [
    [0, 72, 144, 12],
    [0, 0, 0, 0],
    [0, 72, 144, 12],
    [0, 144, 144, 12],
  ],
  tv = [0, 1, 1, 4];
function I0(n, e, t, r, i) {
  if (t + 24 > e.length) return;
  const s = F0(e, t);
  if (s && t + s.frameLength <= e.length) {
    const o = (s.samplesPerFrame * 9e4) / s.sampleRate,
      a = r + i * o,
      l = { unit: e.subarray(t, t + s.frameLength), pts: a, dts: a };
    return (
      (n.config = []),
      (n.channelCount = s.channelCount),
      (n.samplerate = s.sampleRate),
      n.samples.push(l),
      { sample: l, length: s.frameLength, missing: 0 }
    );
  }
}
function F0(n, e) {
  const t = (n[e + 1] >> 3) & 3,
    r = (n[e + 1] >> 1) & 3,
    i = (n[e + 2] >> 4) & 15,
    s = (n[e + 2] >> 2) & 3;
  if (t !== 1 && i !== 0 && i !== 15 && s !== 3) {
    const o = (n[e + 2] >> 1) & 1,
      a = n[e + 3] >> 6,
      l = t === 3 ? 3 - r : r === 3 ? 3 : 4,
      u = ZE[l * 14 + i - 1] * 1e3,
      d = JE[(t === 3 ? 0 : t === 2 ? 1 : 2) * 3 + s],
      f = a === 3 ? 1 : 2,
      h = ev[t][r],
      p = tv[r],
      g = h * 8 * p,
      v = Math.floor((h * u) / d + o) * p;
    if (bi === null) {
      const x = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      bi = x ? parseInt(x[1]) : 0;
    }
    return (
      !!bi &&
        bi <= 87 &&
        r === 2 &&
        u >= 224e3 &&
        a === 0 &&
        (n[e + 3] = n[e + 3] | 128),
      { sampleRate: d, channelCount: f, frameLength: v, samplesPerFrame: g }
    );
  }
}
function hu(n, e) {
  return n[e] === 255 && (n[e + 1] & 224) === 224 && (n[e + 1] & 6) !== 0;
}
function w0(n, e) {
  return e + 1 < n.length && hu(n, e);
}
function nv(n, e) {
  return hu(n, e) && 4 <= n.length - e;
}
function rv(n, e) {
  if (e + 1 < n.length && hu(n, e)) {
    const r = F0(n, e);
    let i = 4;
    r != null && r.frameLength && (i = r.frameLength);
    const s = e + i;
    return s === n.length || w0(n, s);
  }
  return !1;
}
class ld {
  constructor(e) {
    (this.data = void 0),
      (this.bytesAvailable = void 0),
      (this.word = void 0),
      (this.bitsAvailable = void 0),
      (this.data = e),
      (this.bytesAvailable = e.byteLength),
      (this.word = 0),
      (this.bitsAvailable = 0);
  }
  loadWord() {
    const e = this.data,
      t = this.bytesAvailable,
      r = e.byteLength - t,
      i = new Uint8Array(4),
      s = Math.min(4, t);
    if (s === 0) throw new Error("no bytes available");
    i.set(e.subarray(r, r + s)),
      (this.word = new DataView(i.buffer).getUint32(0)),
      (this.bitsAvailable = s * 8),
      (this.bytesAvailable -= s);
  }
  skipBits(e) {
    let t;
    (e = Math.min(e, this.bytesAvailable * 8 + this.bitsAvailable)),
      this.bitsAvailable > e
        ? ((this.word <<= e), (this.bitsAvailable -= e))
        : ((e -= this.bitsAvailable),
          (t = e >> 3),
          (e -= t << 3),
          (this.bytesAvailable -= t),
          this.loadWord(),
          (this.word <<= e),
          (this.bitsAvailable -= e));
  }
  readBits(e) {
    let t = Math.min(this.bitsAvailable, e);
    const r = this.word >>> (32 - t);
    if (
      (e > 32 && A.error("Cannot read more than 32 bits at a time"),
      (this.bitsAvailable -= t),
      this.bitsAvailable > 0)
    )
      this.word <<= t;
    else if (this.bytesAvailable > 0) this.loadWord();
    else throw new Error("no bits available");
    return (
      (t = e - t), t > 0 && this.bitsAvailable ? (r << t) | this.readBits(t) : r
    );
  }
  skipLZ() {
    let e;
    for (e = 0; e < this.bitsAvailable; ++e)
      if ((this.word & (2147483648 >>> e)) !== 0)
        return (this.word <<= e), (this.bitsAvailable -= e), e;
    return this.loadWord(), e + this.skipLZ();
  }
  skipUEG() {
    this.skipBits(1 + this.skipLZ());
  }
  skipEG() {
    this.skipBits(1 + this.skipLZ());
  }
  readUEG() {
    const e = this.skipLZ();
    return this.readBits(e + 1) - 1;
  }
  readEG() {
    const e = this.readUEG();
    return 1 & e ? (1 + e) >>> 1 : -1 * (e >>> 1);
  }
  readBoolean() {
    return this.readBits(1) === 1;
  }
  readUByte() {
    return this.readBits(8);
  }
  readUShort() {
    return this.readBits(16);
  }
  readUInt() {
    return this.readBits(32);
  }
  skipScalingList(e) {
    let t = 8,
      r = 8,
      i;
    for (let s = 0; s < e; s++)
      r !== 0 && ((i = this.readEG()), (r = (t + i + 256) % 256)),
        (t = r === 0 ? t : r);
  }
  readSPS() {
    let e = 0,
      t = 0,
      r = 0,
      i = 0,
      s,
      o,
      a;
    const l = this.readUByte.bind(this),
      u = this.readBits.bind(this),
      c = this.readUEG.bind(this),
      d = this.readBoolean.bind(this),
      f = this.skipBits.bind(this),
      h = this.skipEG.bind(this),
      p = this.skipUEG.bind(this),
      g = this.skipScalingList.bind(this);
    l();
    const v = l();
    if (
      (u(5),
      f(3),
      l(),
      p(),
      v === 100 ||
        v === 110 ||
        v === 122 ||
        v === 244 ||
        v === 44 ||
        v === 83 ||
        v === 86 ||
        v === 118 ||
        v === 128)
    ) {
      const R = c();
      if ((R === 3 && f(1), p(), p(), f(1), d()))
        for (o = R !== 3 ? 8 : 12, a = 0; a < o; a++)
          d() && (a < 6 ? g(16) : g(64));
    }
    p();
    const m = c();
    if (m === 0) c();
    else if (m === 1) for (f(1), h(), h(), s = c(), a = 0; a < s; a++) h();
    p(), f(1);
    const E = c(),
      x = c(),
      T = u(1);
    T === 0 && f(1), f(1), d() && ((e = c()), (t = c()), (r = c()), (i = c()));
    let S = [1, 1];
    if (d() && d())
      switch (l()) {
        case 1:
          S = [1, 1];
          break;
        case 2:
          S = [12, 11];
          break;
        case 3:
          S = [10, 11];
          break;
        case 4:
          S = [16, 11];
          break;
        case 5:
          S = [40, 33];
          break;
        case 6:
          S = [24, 11];
          break;
        case 7:
          S = [20, 11];
          break;
        case 8:
          S = [32, 11];
          break;
        case 9:
          S = [80, 33];
          break;
        case 10:
          S = [18, 11];
          break;
        case 11:
          S = [15, 11];
          break;
        case 12:
          S = [64, 33];
          break;
        case 13:
          S = [160, 99];
          break;
        case 14:
          S = [4, 3];
          break;
        case 15:
          S = [3, 2];
          break;
        case 16:
          S = [2, 1];
          break;
        case 255: {
          S = [(l() << 8) | l(), (l() << 8) | l()];
          break;
        }
      }
    return {
      width: Math.ceil((E + 1) * 16 - e * 2 - t * 2),
      height: (2 - T) * (x + 1) * 16 - (T ? 2 : 4) * (r + i),
      pixelRatio: S,
    };
  }
  readSliceType() {
    return this.readUByte(), this.readUEG(), this.readUEG();
  }
}
class iv {
  constructor(e, t, r) {
    (this.keyData = void 0),
      (this.decrypter = void 0),
      (this.keyData = r),
      (this.decrypter = new cu(t, { removePKCS7Padding: !1 }));
  }
  decryptBuffer(e) {
    return this.decrypter.decrypt(
      e,
      this.keyData.key.buffer,
      this.keyData.iv.buffer
    );
  }
  decryptAacSample(e, t, r) {
    const i = e[t].unit;
    if (i.length <= 16) return;
    const s = i.subarray(16, i.length - (i.length % 16)),
      o = s.buffer.slice(s.byteOffset, s.byteOffset + s.length);
    this.decryptBuffer(o).then((a) => {
      const l = new Uint8Array(a);
      i.set(l, 16),
        this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, r);
    });
  }
  decryptAacSamples(e, t, r) {
    for (; ; t++) {
      if (t >= e.length) {
        r();
        return;
      }
      if (
        !(e[t].unit.length < 32) &&
        (this.decryptAacSample(e, t, r), !this.decrypter.isSync())
      )
        return;
    }
  }
  getAvcEncryptedData(e) {
    const t = Math.floor((e.length - 48) / 160) * 16 + 16,
      r = new Int8Array(t);
    let i = 0;
    for (let s = 32; s < e.length - 16; s += 160, i += 16)
      r.set(e.subarray(s, s + 16), i);
    return r;
  }
  getAvcDecryptedUnit(e, t) {
    const r = new Uint8Array(t);
    let i = 0;
    for (let s = 32; s < e.length - 16; s += 160, i += 16)
      e.set(r.subarray(i, i + 16), s);
    return e;
  }
  decryptAvcSample(e, t, r, i, s) {
    const o = d0(s.data),
      a = this.getAvcEncryptedData(o);
    this.decryptBuffer(a.buffer).then((l) => {
      (s.data = this.getAvcDecryptedUnit(o, l)),
        this.decrypter.isSync() || this.decryptAvcSamples(e, t, r + 1, i);
    });
  }
  decryptAvcSamples(e, t, r, i) {
    if (e instanceof Uint8Array)
      throw new Error("Cannot decrypt samples of type Uint8Array");
    for (; ; t++, r = 0) {
      if (t >= e.length) {
        i();
        return;
      }
      const s = e[t].units;
      for (; !(r >= s.length); r++) {
        const o = s[r];
        if (
          !(o.data.length <= 48 || (o.type !== 1 && o.type !== 5)) &&
          (this.decryptAvcSample(e, t, r, i, o), !this.decrypter.isSync())
        )
          return;
      }
    }
  }
}
const Pe = 188;
class Xt {
  constructor(e, t, r) {
    (this.observer = void 0),
      (this.config = void 0),
      (this.typeSupported = void 0),
      (this.sampleAes = null),
      (this.pmtParsed = !1),
      (this.audioCodec = void 0),
      (this.videoCodec = void 0),
      (this._duration = 0),
      (this._pmtId = -1),
      (this._avcTrack = void 0),
      (this._audioTrack = void 0),
      (this._id3Track = void 0),
      (this._txtTrack = void 0),
      (this.aacOverFlow = null),
      (this.avcSample = null),
      (this.remainderData = null),
      (this.observer = e),
      (this.config = t),
      (this.typeSupported = r);
  }
  static probe(e) {
    const t = Xt.syncOffset(e);
    return (
      t > 0 &&
        A.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`),
      t !== -1
    );
  }
  static syncOffset(e) {
    const t = e.length;
    let r = Math.min(Pe * 5, e.length - Pe) + 1,
      i = 0;
    for (; i < r; ) {
      let s = !1,
        o = -1,
        a = 0;
      for (let l = i; l < t; l += Pe)
        if (e[l] === 71) {
          if (
            (a++,
            o === -1 &&
              ((o = l),
              o !== 0 && (r = Math.min(o + Pe * 99, e.length - Pe) + 1)),
            s || (s = nl(e, l) === 0),
            s && a > 1 && ((o === 0 && a > 2) || l + Pe > r))
          )
            return o;
        } else {
          if (a) return -1;
          break;
        }
      i++;
    }
    return -1;
  }
  static createTrack(e, t) {
    return {
      container: e === "video" || e === "audio" ? "video/mp2t" : void 0,
      type: e,
      id: s0[e],
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
      duration: e === "audio" ? t : void 0,
    };
  }
  resetInitSegment(e, t, r, i) {
    (this.pmtParsed = !1),
      (this._pmtId = -1),
      (this._avcTrack = Xt.createTrack("video")),
      (this._audioTrack = Xt.createTrack("audio", i)),
      (this._id3Track = Xt.createTrack("id3")),
      (this._txtTrack = Xt.createTrack("text")),
      (this._audioTrack.segmentCodec = "aac"),
      (this.aacOverFlow = null),
      (this.avcSample = null),
      (this.remainderData = null),
      (this.audioCodec = t),
      (this.videoCodec = r),
      (this._duration = i);
  }
  resetTimeStamp() {}
  resetContiguity() {
    const { _audioTrack: e, _avcTrack: t, _id3Track: r } = this;
    e && (e.pesData = null),
      t && (t.pesData = null),
      r && (r.pesData = null),
      (this.aacOverFlow = null),
      (this.avcSample = null),
      (this.remainderData = null);
  }
  demux(e, t, r = !1, i = !1) {
    r || (this.sampleAes = null);
    let s;
    const o = this._avcTrack,
      a = this._audioTrack,
      l = this._id3Track,
      u = this._txtTrack;
    let c = o.pid,
      d = o.pesData,
      f = a.pid,
      h = l.pid,
      p = a.pesData,
      g = l.pesData,
      v = null,
      m = this.pmtParsed,
      E = this._pmtId,
      x = e.length;
    if (
      (this.remainderData &&
        ((e = _n(this.remainderData, e)),
        (x = e.length),
        (this.remainderData = null)),
      x < Pe && !i)
    )
      return (
        (this.remainderData = e),
        { audioTrack: a, videoTrack: o, id3Track: l, textTrack: u }
      );
    const T = Math.max(0, Xt.syncOffset(e));
    (x -= (x - T) % Pe),
      x < e.byteLength &&
        !i &&
        (this.remainderData = new Uint8Array(
          e.buffer,
          x,
          e.buffer.byteLength - x
        ));
    let S = 0;
    for (let L = T; L < x; L += Pe)
      if (e[L] === 71) {
        const I = !!(e[L + 1] & 64),
          _ = nl(e, L),
          D = (e[L + 3] & 48) >> 4;
        let U;
        if (D > 1) {
          if (((U = L + 5 + e[L + 4]), U === L + Pe)) continue;
        } else U = L + 4;
        switch (_) {
          case c:
            I &&
              (d && (s = Mn(d)) && this.parseAVCPES(o, u, s, !1),
              (d = { data: [], size: 0 })),
              d && (d.data.push(e.subarray(U, L + Pe)), (d.size += L + Pe - U));
            break;
          case f:
            if (I) {
              if (p && (s = Mn(p)))
                switch (a.segmentCodec) {
                  case "aac":
                    this.parseAACPES(a, s);
                    break;
                  case "mp3":
                    this.parseMPEGPES(a, s);
                    break;
                }
              p = { data: [], size: 0 };
            }
            p && (p.data.push(e.subarray(U, L + Pe)), (p.size += L + Pe - U));
            break;
          case h:
            I &&
              (g && (s = Mn(g)) && this.parseID3PES(l, s),
              (g = { data: [], size: 0 })),
              g && (g.data.push(e.subarray(U, L + Pe)), (g.size += L + Pe - U));
            break;
          case 0:
            I && (U += e[U] + 1), (E = this._pmtId = sv(e, U));
            break;
          case E: {
            I && (U += e[U] + 1);
            const b = ov(e, U, this.typeSupported, r);
            (c = b.avc),
              c > 0 && (o.pid = c),
              (f = b.audio),
              f > 0 && ((a.pid = f), (a.segmentCodec = b.segmentCodec)),
              (h = b.id3),
              h > 0 && (l.pid = h),
              v !== null &&
                !m &&
                (A.warn(
                  `MPEG-TS PMT found at ${L} after unknown PID '${v}'. Backtracking to sync byte @${T} to parse all TS packets.`
                ),
                (v = null),
                (L = T - 188)),
              (m = this.pmtParsed = !0);
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            v = _;
            break;
        }
      } else S++;
    if (S > 0) {
      const L = new Error(`Found ${S} TS packet/s that do not start with 0x47`);
      this.observer.emit(y.ERROR, y.ERROR, {
        type: K.MEDIA_ERROR,
        details: F.FRAG_PARSING_ERROR,
        fatal: !1,
        error: L,
        reason: L.message,
      });
    }
    (o.pesData = d), (a.pesData = p), (l.pesData = g);
    const R = { audioTrack: a, videoTrack: o, id3Track: l, textTrack: u };
    return i && this.extractRemainingSamples(R), R;
  }
  flush() {
    const { remainderData: e } = this;
    this.remainderData = null;
    let t;
    return (
      e
        ? (t = this.demux(e, -1, !1, !0))
        : (t = {
            videoTrack: this._avcTrack,
            audioTrack: this._audioTrack,
            id3Track: this._id3Track,
            textTrack: this._txtTrack,
          }),
      this.extractRemainingSamples(t),
      this.sampleAes ? this.decrypt(t, this.sampleAes) : t
    );
  }
  extractRemainingSamples(e) {
    const { audioTrack: t, videoTrack: r, id3Track: i, textTrack: s } = e,
      o = r.pesData,
      a = t.pesData,
      l = i.pesData;
    let u;
    if (
      (o && (u = Mn(o))
        ? (this.parseAVCPES(r, s, u, !0), (r.pesData = null))
        : (r.pesData = o),
      a && (u = Mn(a)))
    ) {
      switch (t.segmentCodec) {
        case "aac":
          this.parseAACPES(t, u);
          break;
        case "mp3":
          this.parseMPEGPES(t, u);
          break;
      }
      t.pesData = null;
    } else
      a != null &&
        a.size &&
        A.log("last AAC PES packet truncated,might overlap between fragments"),
        (t.pesData = a);
    l && (u = Mn(l))
      ? (this.parseID3PES(i, u), (i.pesData = null))
      : (i.pesData = l);
  }
  demuxSampleAes(e, t, r) {
    const i = this.demux(e, r, !0, !this.config.progressive),
      s = (this.sampleAes = new iv(this.observer, this.config, t));
    return this.decrypt(i, s);
  }
  decrypt(e, t) {
    return new Promise((r) => {
      const { audioTrack: i, videoTrack: s } = e;
      i.samples && i.segmentCodec === "aac"
        ? t.decryptAacSamples(i.samples, 0, () => {
            s.samples
              ? t.decryptAvcSamples(s.samples, 0, 0, () => {
                  r(e);
                })
              : r(e);
          })
        : s.samples &&
          t.decryptAvcSamples(s.samples, 0, 0, () => {
            r(e);
          });
    });
  }
  destroy() {
    this._duration = 0;
  }
  parseAVCPES(e, t, r, i) {
    const s = this.parseAVCNALu(e, r.data);
    let o = this.avcSample,
      a,
      l = !1;
    (r.data = null),
      o &&
        s.length &&
        !e.audFound &&
        (Mo(o, e), (o = this.avcSample = Ni(!1, r.pts, r.dts, ""))),
      s.forEach((u) => {
        switch (u.type) {
          case 1: {
            (a = !0),
              o || (o = this.avcSample = Ni(!0, r.pts, r.dts, "")),
              (o.frame = !0);
            const c = u.data;
            if (l && c.length > 4) {
              const d = new ld(c).readSliceType();
              (d === 2 || d === 4 || d === 7 || d === 9) && (o.key = !0);
            }
            break;
          }
          case 5:
            (a = !0),
              o || (o = this.avcSample = Ni(!0, r.pts, r.dts, "")),
              (o.key = !0),
              (o.frame = !0);
            break;
          case 6: {
            (a = !0), c0(u.data, 1, r.pts, t.samples);
            break;
          }
          case 7:
            if (((a = !0), (l = !0), !e.sps)) {
              const c = u.data,
                f = new ld(c).readSPS();
              (e.width = f.width),
                (e.height = f.height),
                (e.pixelRatio = f.pixelRatio),
                (e.sps = [c]),
                (e.duration = this._duration);
              const h = c.subarray(1, 4);
              let p = "avc1.";
              for (let g = 0; g < 3; g++) {
                let v = h[g].toString(16);
                v.length < 2 && (v = "0" + v), (p += v);
              }
              e.codec = p;
            }
            break;
          case 8:
            (a = !0), e.pps || (e.pps = [u.data]);
            break;
          case 9:
            (a = !1),
              (e.audFound = !0),
              o && Mo(o, e),
              (o = this.avcSample = Ni(!1, r.pts, r.dts, ""));
            break;
          case 12:
            a = !0;
            break;
          default:
            (a = !1), o && (o.debug += "unknown NAL " + u.type + " ");
            break;
        }
        o && a && o.units.push(u);
      }),
      i && o && (Mo(o, e), (this.avcSample = null));
  }
  getLastNalUnit(e) {
    var t;
    let r = this.avcSample,
      i;
    if (
      ((!r || r.units.length === 0) && (r = e[e.length - 1]),
      (t = r) != null && t.units)
    ) {
      const s = r.units;
      i = s[s.length - 1];
    }
    return i;
  }
  parseAVCNALu(e, t) {
    const r = t.byteLength;
    let i = e.naluState || 0;
    const s = i,
      o = [];
    let a = 0,
      l,
      u,
      c,
      d = -1,
      f = 0;
    for (i === -1 && ((d = 0), (f = t[0] & 31), (i = 0), (a = 1)); a < r; ) {
      if (((l = t[a++]), !i)) {
        i = l ? 0 : 1;
        continue;
      }
      if (i === 1) {
        i = l ? 0 : 2;
        continue;
      }
      if (!l) i = 3;
      else if (l === 1) {
        if (d >= 0) {
          const h = { data: t.subarray(d, a - i - 1), type: f };
          o.push(h);
        } else {
          const h = this.getLastNalUnit(e.samples);
          if (
            h &&
            (s &&
              a <= 4 - s &&
              h.state &&
              (h.data = h.data.subarray(0, h.data.byteLength - s)),
            (u = a - i - 1),
            u > 0)
          ) {
            const p = new Uint8Array(h.data.byteLength + u);
            p.set(h.data, 0),
              p.set(t.subarray(0, u), h.data.byteLength),
              (h.data = p),
              (h.state = 0);
          }
        }
        a < r ? ((c = t[a] & 31), (d = a), (f = c), (i = 0)) : (i = -1);
      } else i = 0;
    }
    if (d >= 0 && i >= 0) {
      const h = { data: t.subarray(d, r), type: f, state: i };
      o.push(h);
    }
    if (o.length === 0) {
      const h = this.getLastNalUnit(e.samples);
      if (h) {
        const p = new Uint8Array(h.data.byteLength + t.byteLength);
        p.set(h.data, 0), p.set(t, h.data.byteLength), (h.data = p);
      }
    }
    return (e.naluState = i), o;
  }
  parseAACPES(e, t) {
    let r = 0;
    const i = this.aacOverFlow;
    let s = t.data;
    if (i) {
      this.aacOverFlow = null;
      const d = i.missing,
        f = i.sample.unit.byteLength;
      if (d === -1) {
        const h = new Uint8Array(f + s.byteLength);
        h.set(i.sample.unit, 0), h.set(s, f), (s = h);
      } else {
        const h = f - d;
        i.sample.unit.set(s.subarray(0, d), h),
          e.samples.push(i.sample),
          (r = i.missing);
      }
    }
    let o, a;
    for (o = r, a = s.length; o < a - 1 && !_s(s, o); o++);
    if (o !== r) {
      let d;
      const f = o < a - 1;
      f
        ? (d = `AAC PES did not start with ADTS header,offset:${o}`)
        : (d = "No ADTS header found in AAC PES");
      const h = new Error(d);
      if (
        (A.warn(`parsing error: ${d}`),
        this.observer.emit(y.ERROR, y.ERROR, {
          type: K.MEDIA_ERROR,
          details: F.FRAG_PARSING_ERROR,
          fatal: !1,
          levelRetry: f,
          error: h,
          reason: d,
        }),
        !f)
      )
        return;
    }
    C0(e, this.observer, s, o, this.audioCodec);
    let l;
    if (t.pts !== void 0) l = t.pts;
    else if (i) {
      const d = D0(e.samplerate);
      l = i.sample.pts + d;
    } else {
      A.warn("[tsdemuxer]: AAC PES unknown PTS");
      return;
    }
    let u = 0,
      c;
    for (; o < a; )
      if (((c = R0(e, s, o, l, u)), (o += c.length), c.missing)) {
        this.aacOverFlow = c;
        break;
      } else for (u++; o < a - 1 && !_s(s, o); o++);
  }
  parseMPEGPES(e, t) {
    const r = t.data,
      i = r.length;
    let s = 0,
      o = 0;
    const a = t.pts;
    if (a === void 0) {
      A.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return;
    }
    for (; o < i; )
      if (w0(r, o)) {
        const l = I0(e, r, o, a, s);
        if (l) (o += l.length), s++;
        else break;
      } else o++;
  }
  parseID3PES(e, t) {
    if (t.pts === void 0) {
      A.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return;
    }
    const r = Se({}, t, {
      type: this._avcTrack ? Et.emsg : Et.audioId3,
      duration: Number.POSITIVE_INFINITY,
    });
    e.samples.push(r);
  }
}
function Ni(n, e, t, r) {
  return { key: n, frame: !1, pts: e, dts: t, units: [], debug: r, length: 0 };
}
function nl(n, e) {
  return ((n[e + 1] & 31) << 8) + n[e + 2];
}
function sv(n, e) {
  return ((n[e + 10] & 31) << 8) | n[e + 11];
}
function ov(n, e, t, r) {
  const i = { audio: -1, avc: -1, id3: -1, segmentCodec: "aac" },
    s = ((n[e + 1] & 15) << 8) | n[e + 2],
    o = e + 3 + s - 4,
    a = ((n[e + 10] & 15) << 8) | n[e + 11];
  for (e += 12 + a; e < o; ) {
    const l = nl(n, e);
    switch (n[e]) {
      case 207:
        if (!r) {
          A.log(
            "ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream"
          );
          break;
        }
      case 15:
        i.audio === -1 && (i.audio = l);
        break;
      case 21:
        i.id3 === -1 && (i.id3 = l);
        break;
      case 219:
        if (!r) {
          A.log(
            "H.264 with AES-128-CBC slice encryption found in unencrypted stream"
          );
          break;
        }
      case 27:
        i.avc === -1 && (i.avc = l);
        break;
      case 3:
      case 4:
        t.mpeg !== !0 && t.mp3 !== !0
          ? A.log("MPEG audio found, not supported in this browser")
          : i.audio === -1 && ((i.audio = l), (i.segmentCodec = "mp3"));
        break;
      case 36:
        A.warn("Unsupported HEVC stream type found");
        break;
    }
    e += (((n[e + 3] & 15) << 8) | n[e + 4]) + 5;
  }
  return i;
}
function Mn(n) {
  let e = 0,
    t,
    r,
    i,
    s,
    o;
  const a = n.data;
  if (!n || n.size === 0) return null;
  for (; a[0].length < 19 && a.length > 1; ) {
    const u = new Uint8Array(a[0].length + a[1].length);
    u.set(a[0]), u.set(a[1], a[0].length), (a[0] = u), a.splice(1, 1);
  }
  if (((t = a[0]), (t[0] << 16) + (t[1] << 8) + t[2] === 1)) {
    if (((r = (t[4] << 8) + t[5]), r && r > n.size - 6)) return null;
    const u = t[7];
    u & 192 &&
      ((s =
        (t[9] & 14) * 536870912 +
        (t[10] & 255) * 4194304 +
        (t[11] & 254) * 16384 +
        (t[12] & 255) * 128 +
        (t[13] & 254) / 2),
      u & 64
        ? ((o =
            (t[14] & 14) * 536870912 +
            (t[15] & 255) * 4194304 +
            (t[16] & 254) * 16384 +
            (t[17] & 255) * 128 +
            (t[18] & 254) / 2),
          s - o > 60 * 9e4 &&
            (A.warn(
              `${Math.round(
                (s - o) / 9e4
              )}s delta between PTS and DTS, align them`
            ),
            (s = o)))
        : (o = s)),
      (i = t[8]);
    let c = i + 9;
    if (n.size <= c) return null;
    n.size -= c;
    const d = new Uint8Array(n.size);
    for (let f = 0, h = a.length; f < h; f++) {
      t = a[f];
      let p = t.byteLength;
      if (c)
        if (c > p) {
          c -= p;
          continue;
        } else (t = t.subarray(c)), (p -= c), (c = 0);
      d.set(t, e), (e += p);
    }
    return r && (r -= i + 3), { data: d, pts: s, dts: o, len: r };
  }
  return null;
}
function Mo(n, e) {
  if (n.units.length && n.frame) {
    if (n.pts === void 0) {
      const t = e.samples,
        r = t.length;
      if (r) {
        const i = t[r - 1];
        (n.pts = i.pts), (n.dts = i.dts);
      } else {
        e.dropped++;
        return;
      }
    }
    e.samples.push(n);
  }
  n.debug.length && A.log(n.pts + "/" + n.dts + ":" + n.debug);
}
class av extends S0 {
  resetInitSegment(e, t, r, i) {
    super.resetInitSegment(e, t, r, i),
      (this._audioTrack = {
        container: "audio/mpeg",
        type: "audio",
        id: 2,
        pid: -1,
        sequenceNumber: 0,
        segmentCodec: "mp3",
        samples: [],
        manifestCodec: t,
        duration: i,
        inputTimeScale: 9e4,
        dropped: 0,
      });
  }
  static probe(e) {
    if (!e) return !1;
    let r = (Rs(e, 0) || []).length;
    for (let i = e.length; r < i; r++)
      if (rv(e, r)) return A.log("MPEG Audio sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return nv(e, t);
  }
  appendFrame(e, t, r) {
    if (this.basePTS !== null)
      return I0(e, t, r, this.basePTS, this.frameIndex);
  }
}
class ud {
  static getSilentFrame(e, t) {
    switch (e) {
      case "mp4a.40.2":
        if (t === 1) return new Uint8Array([0, 200, 0, 128, 35, 128]);
        if (t === 2) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        if (t === 3)
          return new Uint8Array([
            0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142,
          ]);
        if (t === 4)
          return new Uint8Array([
            0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2,
            56,
          ]);
        if (t === 5)
          return new Uint8Array([
            0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0,
            33, 144, 2, 56,
          ]);
        if (t === 6)
          return new Uint8Array([
            0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0,
            33, 144, 2, 0, 178, 0, 32, 8, 224,
          ]);
        break;
      default:
        if (t === 1)
          return new Uint8Array([
            1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193,
            10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
            90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
            90, 90, 90, 90, 90, 90, 90, 94,
          ]);
        if (t === 2)
          return new Uint8Array([
            1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6,
            241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
            90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
            90, 90, 90, 90, 90, 90, 90, 90, 94,
          ]);
        if (t === 3)
          return new Uint8Array([
            1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6,
            241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
            90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
            90, 90, 90, 90, 90, 90, 90, 90, 94,
          ]);
        break;
    }
  }
}
const zt = Math.pow(2, 32) - 1;
class C {
  static init() {
    C.types = {
      avc1: [],
      avcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      ".mp3": [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: [],
      smhd: [],
    };
    let e;
    for (e in C.types)
      C.types.hasOwnProperty(e) &&
        (C.types[e] = [
          e.charCodeAt(0),
          e.charCodeAt(1),
          e.charCodeAt(2),
          e.charCodeAt(3),
        ]);
    const t = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0,
      ]),
      r = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0,
      ]);
    C.HDLR_TYPES = { video: t, audio: r };
    const i = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1,
      ]),
      s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
    (C.STTS = C.STSC = C.STCO = s),
      (C.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
      (C.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])),
      (C.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
      (C.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]));
    const o = new Uint8Array([105, 115, 111, 109]),
      a = new Uint8Array([97, 118, 99, 49]),
      l = new Uint8Array([0, 0, 0, 1]);
    (C.FTYP = C.box(C.types.ftyp, o, l, o, a)),
      (C.DINF = C.box(C.types.dinf, C.box(C.types.dref, i)));
  }
  static box(e, ...t) {
    let r = 8,
      i = t.length;
    const s = i;
    for (; i--; ) r += t[i].byteLength;
    const o = new Uint8Array(r);
    for (
      o[0] = (r >> 24) & 255,
        o[1] = (r >> 16) & 255,
        o[2] = (r >> 8) & 255,
        o[3] = r & 255,
        o.set(e, 4),
        i = 0,
        r = 8;
      i < s;
      i++
    )
      o.set(t[i], r), (r += t[i].byteLength);
    return o;
  }
  static hdlr(e) {
    return C.box(C.types.hdlr, C.HDLR_TYPES[e]);
  }
  static mdat(e) {
    return C.box(C.types.mdat, e);
  }
  static mdhd(e, t) {
    t *= e;
    const r = Math.floor(t / (zt + 1)),
      i = Math.floor(t % (zt + 1));
    return C.box(
      C.types.mdhd,
      new Uint8Array([
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        (e >> 24) & 255,
        (e >> 16) & 255,
        (e >> 8) & 255,
        e & 255,
        r >> 24,
        (r >> 16) & 255,
        (r >> 8) & 255,
        r & 255,
        i >> 24,
        (i >> 16) & 255,
        (i >> 8) & 255,
        i & 255,
        85,
        196,
        0,
        0,
      ])
    );
  }
  static mdia(e) {
    return C.box(
      C.types.mdia,
      C.mdhd(e.timescale, e.duration),
      C.hdlr(e.type),
      C.minf(e)
    );
  }
  static mfhd(e) {
    return C.box(
      C.types.mfhd,
      new Uint8Array([
        0,
        0,
        0,
        0,
        e >> 24,
        (e >> 16) & 255,
        (e >> 8) & 255,
        e & 255,
      ])
    );
  }
  static minf(e) {
    return e.type === "audio"
      ? C.box(C.types.minf, C.box(C.types.smhd, C.SMHD), C.DINF, C.stbl(e))
      : C.box(C.types.minf, C.box(C.types.vmhd, C.VMHD), C.DINF, C.stbl(e));
  }
  static moof(e, t, r) {
    return C.box(C.types.moof, C.mfhd(e), C.traf(r, t));
  }
  static moov(e) {
    let t = e.length;
    const r = [];
    for (; t--; ) r[t] = C.trak(e[t]);
    return C.box.apply(
      null,
      [C.types.moov, C.mvhd(e[0].timescale, e[0].duration)]
        .concat(r)
        .concat(C.mvex(e))
    );
  }
  static mvex(e) {
    let t = e.length;
    const r = [];
    for (; t--; ) r[t] = C.trex(e[t]);
    return C.box.apply(null, [C.types.mvex, ...r]);
  }
  static mvhd(e, t) {
    t *= e;
    const r = Math.floor(t / (zt + 1)),
      i = Math.floor(t % (zt + 1)),
      s = new Uint8Array([
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        (e >> 24) & 255,
        (e >> 16) & 255,
        (e >> 8) & 255,
        e & 255,
        r >> 24,
        (r >> 16) & 255,
        (r >> 8) & 255,
        r & 255,
        i >> 24,
        (i >> 16) & 255,
        (i >> 8) & 255,
        i & 255,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        64,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        255,
        255,
        255,
      ]);
    return C.box(C.types.mvhd, s);
  }
  static sdtp(e) {
    const t = e.samples || [],
      r = new Uint8Array(4 + t.length);
    let i, s;
    for (i = 0; i < t.length; i++)
      (s = t[i].flags),
        (r[i + 4] =
          (s.dependsOn << 4) | (s.isDependedOn << 2) | s.hasRedundancy);
    return C.box(C.types.sdtp, r);
  }
  static stbl(e) {
    return C.box(
      C.types.stbl,
      C.stsd(e),
      C.box(C.types.stts, C.STTS),
      C.box(C.types.stsc, C.STSC),
      C.box(C.types.stsz, C.STSZ),
      C.box(C.types.stco, C.STCO)
    );
  }
  static avc1(e) {
    let t = [],
      r = [],
      i,
      s,
      o;
    for (i = 0; i < e.sps.length; i++)
      (s = e.sps[i]),
        (o = s.byteLength),
        t.push((o >>> 8) & 255),
        t.push(o & 255),
        (t = t.concat(Array.prototype.slice.call(s)));
    for (i = 0; i < e.pps.length; i++)
      (s = e.pps[i]),
        (o = s.byteLength),
        r.push((o >>> 8) & 255),
        r.push(o & 255),
        (r = r.concat(Array.prototype.slice.call(s)));
    const a = C.box(
        C.types.avcC,
        new Uint8Array(
          [1, t[3], t[4], t[5], 255, 224 | e.sps.length]
            .concat(t)
            .concat([e.pps.length])
            .concat(r)
        )
      ),
      l = e.width,
      u = e.height,
      c = e.pixelRatio[0],
      d = e.pixelRatio[1];
    return C.box(
      C.types.avc1,
      new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        (l >> 8) & 255,
        l & 255,
        (u >> 8) & 255,
        u & 255,
        0,
        72,
        0,
        0,
        0,
        72,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        18,
        100,
        97,
        105,
        108,
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        17,
        17,
      ]),
      a,
      C.box(
        C.types.btrt,
        new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])
      ),
      C.box(
        C.types.pasp,
        new Uint8Array([
          c >> 24,
          (c >> 16) & 255,
          (c >> 8) & 255,
          c & 255,
          d >> 24,
          (d >> 16) & 255,
          (d >> 8) & 255,
          d & 255,
        ])
      )
    );
  }
  static esds(e) {
    const t = e.config.length;
    return new Uint8Array(
      [
        0,
        0,
        0,
        0,
        3,
        23 + t,
        0,
        1,
        0,
        4,
        15 + t,
        64,
        21,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
      ]
        .concat([t])
        .concat(e.config)
        .concat([6, 1, 2])
    );
  }
  static mp4a(e) {
    const t = e.samplerate;
    return C.box(
      C.types.mp4a,
      new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        e.channelCount,
        0,
        16,
        0,
        0,
        0,
        0,
        (t >> 8) & 255,
        t & 255,
        0,
        0,
      ]),
      C.box(C.types.esds, C.esds(e))
    );
  }
  static mp3(e) {
    const t = e.samplerate;
    return C.box(
      C.types[".mp3"],
      new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        e.channelCount,
        0,
        16,
        0,
        0,
        0,
        0,
        (t >> 8) & 255,
        t & 255,
        0,
        0,
      ])
    );
  }
  static stsd(e) {
    return e.type === "audio"
      ? e.segmentCodec === "mp3" && e.codec === "mp3"
        ? C.box(C.types.stsd, C.STSD, C.mp3(e))
        : C.box(C.types.stsd, C.STSD, C.mp4a(e))
      : C.box(C.types.stsd, C.STSD, C.avc1(e));
  }
  static tkhd(e) {
    const t = e.id,
      r = e.duration * e.timescale,
      i = e.width,
      s = e.height,
      o = Math.floor(r / (zt + 1)),
      a = Math.floor(r % (zt + 1));
    return C.box(
      C.types.tkhd,
      new Uint8Array([
        1,
        0,
        0,
        7,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        (t >> 24) & 255,
        (t >> 16) & 255,
        (t >> 8) & 255,
        t & 255,
        0,
        0,
        0,
        0,
        o >> 24,
        (o >> 16) & 255,
        (o >> 8) & 255,
        o & 255,
        a >> 24,
        (a >> 16) & 255,
        (a >> 8) & 255,
        a & 255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        64,
        0,
        0,
        0,
        (i >> 8) & 255,
        i & 255,
        0,
        0,
        (s >> 8) & 255,
        s & 255,
        0,
        0,
      ])
    );
  }
  static traf(e, t) {
    const r = C.sdtp(e),
      i = e.id,
      s = Math.floor(t / (zt + 1)),
      o = Math.floor(t % (zt + 1));
    return C.box(
      C.types.traf,
      C.box(
        C.types.tfhd,
        new Uint8Array([
          0,
          0,
          0,
          0,
          i >> 24,
          (i >> 16) & 255,
          (i >> 8) & 255,
          i & 255,
        ])
      ),
      C.box(
        C.types.tfdt,
        new Uint8Array([
          1,
          0,
          0,
          0,
          s >> 24,
          (s >> 16) & 255,
          (s >> 8) & 255,
          s & 255,
          o >> 24,
          (o >> 16) & 255,
          (o >> 8) & 255,
          o & 255,
        ])
      ),
      C.trun(e, r.length + 16 + 20 + 8 + 16 + 8 + 8),
      r
    );
  }
  static trak(e) {
    return (
      (e.duration = e.duration || 4294967295),
      C.box(C.types.trak, C.tkhd(e), C.mdia(e))
    );
  }
  static trex(e) {
    const t = e.id;
    return C.box(
      C.types.trex,
      new Uint8Array([
        0,
        0,
        0,
        0,
        t >> 24,
        (t >> 16) & 255,
        (t >> 8) & 255,
        t & 255,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
      ])
    );
  }
  static trun(e, t) {
    const r = e.samples || [],
      i = r.length,
      s = 12 + 16 * i,
      o = new Uint8Array(s);
    let a, l, u, c, d, f;
    for (
      t += 8 + s,
        o.set(
          [
            e.type === "video" ? 1 : 0,
            0,
            15,
            1,
            (i >>> 24) & 255,
            (i >>> 16) & 255,
            (i >>> 8) & 255,
            i & 255,
            (t >>> 24) & 255,
            (t >>> 16) & 255,
            (t >>> 8) & 255,
            t & 255,
          ],
          0
        ),
        a = 0;
      a < i;
      a++
    )
      (l = r[a]),
        (u = l.duration),
        (c = l.size),
        (d = l.flags),
        (f = l.cts),
        o.set(
          [
            (u >>> 24) & 255,
            (u >>> 16) & 255,
            (u >>> 8) & 255,
            u & 255,
            (c >>> 24) & 255,
            (c >>> 16) & 255,
            (c >>> 8) & 255,
            c & 255,
            (d.isLeading << 2) | d.dependsOn,
            (d.isDependedOn << 6) |
              (d.hasRedundancy << 4) |
              (d.paddingValue << 1) |
              d.isNonSync,
            d.degradPrio & (240 << 8),
            d.degradPrio & 15,
            (f >>> 24) & 255,
            (f >>> 16) & 255,
            (f >>> 8) & 255,
            f & 255,
          ],
          12 + 16 * a
        );
    return C.box(C.types.trun, o);
  }
  static initSegment(e) {
    C.types || C.init();
    const t = C.moov(e),
      r = new Uint8Array(C.FTYP.byteLength + t.byteLength);
    return r.set(C.FTYP), r.set(t, C.FTYP.byteLength), r;
  }
}
C.types = void 0;
C.HDLR_TYPES = void 0;
C.STTS = void 0;
C.STSC = void 0;
C.STCO = void 0;
C.STSZ = void 0;
C.VMHD = void 0;
C.SMHD = void 0;
C.STSD = void 0;
C.FTYP = void 0;
C.DINF = void 0;
const k0 = 9e4;
function pu(n, e, t = 1, r = !1) {
  const i = n * e * t;
  return r ? Math.round(i) : i;
}
function lv(n, e, t = 1, r = !1) {
  return pu(n, e, 1 / t, r);
}
function Dr(n, e = !1) {
  return pu(n, 1e3, 1 / k0, e);
}
function uv(n, e = 1) {
  return pu(n, k0, 1 / e);
}
const cv = 10 * 1e3,
  cd = 1024,
  dv = 1152;
let Mi = null,
  Uo = null;
class $o {
  constructor(e, t, r, i = "") {
    if (
      ((this.observer = void 0),
      (this.config = void 0),
      (this.typeSupported = void 0),
      (this.ISGenerated = !1),
      (this._initPTS = null),
      (this._initDTS = null),
      (this.nextAvcDts = null),
      (this.nextAudioPts = null),
      (this.videoSampleDuration = null),
      (this.isAudioContiguous = !1),
      (this.isVideoContiguous = !1),
      (this.observer = e),
      (this.config = t),
      (this.typeSupported = r),
      (this.ISGenerated = !1),
      Mi === null)
    ) {
      const o = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      Mi = o ? parseInt(o[1]) : 0;
    }
    if (Uo === null) {
      const s = navigator.userAgent.match(/Safari\/(\d+)/i);
      Uo = s ? parseInt(s[1]) : 0;
    }
  }
  destroy() {}
  resetTimeStamp(e) {
    A.log("[mp4-remuxer]: initPTS & initDTS reset"),
      (this._initPTS = this._initDTS = e);
  }
  resetNextTimestamp() {
    A.log("[mp4-remuxer]: reset next timestamp"),
      (this.isVideoContiguous = !1),
      (this.isAudioContiguous = !1);
  }
  resetInitSegment() {
    A.log("[mp4-remuxer]: ISGenerated flag reset"), (this.ISGenerated = !1);
  }
  getVideoStartPts(e) {
    let t = !1;
    const r = e.reduce((i, s) => {
      const o = s.pts - i;
      return o < -4294967296 ? ((t = !0), st(i, s.pts)) : o > 0 ? i : s.pts;
    }, e[0].pts);
    return t && A.debug("PTS rollover detected"), r;
  }
  remux(e, t, r, i, s, o, a, l) {
    let u,
      c,
      d,
      f,
      h,
      p,
      g = s,
      v = s;
    const m = e.pid > -1,
      E = t.pid > -1,
      x = t.samples.length,
      T = e.samples.length > 0,
      S = (a && x > 0) || x > 1;
    if (((!m || T) && (!E || S)) || this.ISGenerated || a) {
      this.ISGenerated || (d = this.generateIS(e, t, s, o));
      const L = this.isVideoContiguous;
      let I = -1,
        _;
      if (
        S &&
        ((I = fv(t.samples)), !L && this.config.forceKeyFrameOnDiscontinuity)
      )
        if (((p = !0), I > 0)) {
          A.warn(
            `[mp4-remuxer]: Dropped ${I} out of ${x} video samples due to a missing keyframe`
          );
          const D = this.getVideoStartPts(t.samples);
          (t.samples = t.samples.slice(I)),
            (t.dropped += I),
            (v += (t.samples[0].pts - D) / t.inputTimeScale),
            (_ = v);
        } else
          I === -1 &&
            (A.warn(
              `[mp4-remuxer]: No keyframe found out of ${x} video samples`
            ),
            (p = !1));
      if (this.ISGenerated) {
        if (T && S) {
          const D = this.getVideoStartPts(t.samples),
            b = (st(e.samples[0].pts, D) - D) / t.inputTimeScale;
          (g += Math.max(0, b)), (v += Math.max(0, -b));
        }
        if (T) {
          if (
            (e.samplerate ||
              (A.warn(
                "[mp4-remuxer]: regenerate InitSegment as audio detected"
              ),
              (d = this.generateIS(e, t, s, o))),
            (c = this.remuxAudio(
              e,
              g,
              this.isAudioContiguous,
              o,
              E || S || l === V.AUDIO ? v : void 0
            )),
            S)
          ) {
            const D = c ? c.endPTS - c.startPTS : 0;
            t.inputTimeScale ||
              (A.warn(
                "[mp4-remuxer]: regenerate InitSegment as video detected"
              ),
              (d = this.generateIS(e, t, s, o))),
              (u = this.remuxVideo(t, v, L, D));
          }
        } else S && (u = this.remuxVideo(t, v, L, 0));
        u &&
          ((u.firstKeyFrame = I),
          (u.independent = I !== -1),
          (u.firstKeyFramePTS = _));
      }
    }
    return (
      this.ISGenerated &&
        this._initPTS &&
        this._initDTS &&
        (r.samples.length && (h = _0(r, s, this._initPTS, this._initDTS)),
        i.samples.length && (f = P0(i, s, this._initPTS))),
      { audio: c, video: u, initSegment: d, independent: p, text: f, id3: h }
    );
  }
  generateIS(e, t, r, i) {
    const s = e.samples,
      o = t.samples,
      a = this.typeSupported,
      l = {},
      u = this._initPTS;
    let c = !u || i,
      d = "audio/mp4",
      f,
      h,
      p;
    if ((c && (f = h = 1 / 0), e.config && s.length)) {
      switch (((e.timescale = e.samplerate), e.segmentCodec)) {
        case "mp3":
          a.mpeg
            ? ((d = "audio/mpeg"), (e.codec = ""))
            : a.mp3 && (e.codec = "mp3");
          break;
      }
      (l.audio = {
        id: "audio",
        container: d,
        codec: e.codec,
        initSegment:
          e.segmentCodec === "mp3" && a.mpeg
            ? new Uint8Array(0)
            : C.initSegment([e]),
        metadata: { channelCount: e.channelCount },
      }),
        c &&
          ((p = e.inputTimeScale),
          !u || p !== u.timescale
            ? (f = h = s[0].pts - Math.round(p * r))
            : (c = !1));
    }
    if (
      t.sps &&
      t.pps &&
      o.length &&
      ((t.timescale = t.inputTimeScale),
      (l.video = {
        id: "main",
        container: "video/mp4",
        codec: t.codec,
        initSegment: C.initSegment([t]),
        metadata: { width: t.width, height: t.height },
      }),
      c)
    )
      if (((p = t.inputTimeScale), !u || p !== u.timescale)) {
        const g = this.getVideoStartPts(o),
          v = Math.round(p * r);
        (h = Math.min(h, st(o[0].dts, g) - v)), (f = Math.min(f, g - v));
      } else c = !1;
    if (Object.keys(l).length)
      return (
        (this.ISGenerated = !0),
        c
          ? ((this._initPTS = { baseTime: f, timescale: p }),
            (this._initDTS = { baseTime: h, timescale: p }))
          : (f = p = void 0),
        { tracks: l, initPTS: f, timescale: p }
      );
  }
  remuxVideo(e, t, r, i) {
    const s = e.inputTimeScale,
      o = e.samples,
      a = [],
      l = o.length,
      u = this._initPTS;
    let c = this.nextAvcDts,
      d = 8,
      f = this.videoSampleDuration,
      h,
      p,
      g = Number.POSITIVE_INFINITY,
      v = Number.NEGATIVE_INFINITY,
      m = !1;
    if (!r || c === null) {
      const w = t * s,
        P = o[0].pts - st(o[0].dts, o[0].pts);
      c = w - P;
    }
    const E = (u.baseTime * s) / u.timescale;
    for (let w = 0; w < l; w++) {
      const P = o[w];
      (P.pts = st(P.pts - E, c)),
        (P.dts = st(P.dts - E, c)),
        P.dts < o[w > 0 ? w - 1 : w].dts && (m = !0);
    }
    m &&
      o.sort(function (w, P) {
        const N = w.dts - P.dts,
          W = w.pts - P.pts;
        return N || W;
      }),
      (h = o[0].dts),
      (p = o[o.length - 1].dts);
    const x = p - h,
      T = x ? Math.round(x / (l - 1)) : f || e.inputTimeScale / 30;
    if (r) {
      const w = h - c,
        P = w > T,
        N = w < -1;
      if (
        (P || N) &&
        (P
          ? A.warn(
              `AVC: ${Dr(
                w,
                !0
              )} ms (${w}dts) hole between fragments detected, filling it`
            )
          : A.warn(
              `AVC: ${Dr(
                -w,
                !0
              )} ms (${w}dts) overlapping between fragments detected`
            ),
        !N || c >= o[0].pts)
      ) {
        h = c;
        const W = o[0].pts - w;
        (o[0].dts = h),
          (o[0].pts = W),
          A.log(
            `Video: First PTS/DTS adjusted: ${Dr(W, !0)}/${Dr(
              h,
              !0
            )}, delta: ${Dr(w, !0)} ms`
          );
      }
    }
    h = Math.max(0, h);
    let S = 0,
      R = 0;
    for (let w = 0; w < l; w++) {
      const P = o[w],
        N = P.units,
        W = N.length;
      let H = 0;
      for (let ae = 0; ae < W; ae++) H += N[ae].data.length;
      (R += H),
        (S += W),
        (P.length = H),
        (P.dts = Math.max(P.dts, h)),
        (g = Math.min(P.pts, g)),
        (v = Math.max(P.pts, v));
    }
    p = o[l - 1].dts;
    const L = R + 4 * S + 8;
    let I;
    try {
      I = new Uint8Array(L);
    } catch (w) {
      this.observer.emit(y.ERROR, y.ERROR, {
        type: K.MUX_ERROR,
        details: F.REMUX_ALLOC_ERROR,
        fatal: !1,
        error: w,
        bytes: L,
        reason: `fail allocating video mdat ${L}`,
      });
      return;
    }
    const _ = new DataView(I.buffer);
    _.setUint32(0, L), I.set(C.types.mdat, 4);
    let D = !1,
      U = Number.POSITIVE_INFINITY,
      b = Number.POSITIVE_INFINITY,
      Y = Number.NEGATIVE_INFINITY,
      Ae = Number.NEGATIVE_INFINITY;
    for (let w = 0; w < l; w++) {
      const P = o[w],
        N = P.units;
      let W = 0;
      for (let me = 0, be = N.length; me < be; me++) {
        const ye = N[me],
          rt = ye.data,
          eo = ye.data.byteLength;
        _.setUint32(d, eo), (d += 4), I.set(rt, d), (d += eo), (W += 4 + eo);
      }
      let H;
      if (w < l - 1) (f = o[w + 1].dts - P.dts), (H = o[w + 1].pts - P.pts);
      else {
        const me = this.config,
          be = w > 0 ? P.dts - o[w - 1].dts : T;
        if (
          ((H = w > 0 ? P.pts - o[w - 1].pts : T),
          me.stretchShortVideoTrack && this.nextAudioPts !== null)
        ) {
          const ye = Math.floor(me.maxBufferHole * s),
            rt = (i ? g + i * s : this.nextAudioPts) - P.pts;
          rt > ye
            ? ((f = rt - be),
              f < 0 ? (f = be) : (D = !0),
              A.log(
                `[mp4-remuxer]: It is approximately ${
                  rt / 90
                } ms to the next segment; using duration ${
                  f / 90
                } ms for the last video frame.`
              ))
            : (f = be);
        } else f = be;
      }
      const ae = Math.round(P.pts - P.dts);
      (U = Math.min(U, f)),
        (Y = Math.max(Y, f)),
        (b = Math.min(b, H)),
        (Ae = Math.max(Ae, H)),
        a.push(new dd(P.key, f, W, ae));
    }
    if (a.length) {
      if (Mi) {
        if (Mi < 70) {
          const w = a[0].flags;
          (w.dependsOn = 2), (w.isNonSync = 0);
        }
      } else if (Uo && Ae - b < Y - U && T / Y < 0.025 && a[0].cts === 0) {
        A.warn(
          "Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration."
        );
        let w = h;
        for (let P = 0, N = a.length; P < N; P++) {
          const W = w + a[P].duration,
            H = w + a[P].cts;
          if (P < N - 1) {
            const ae = W + a[P + 1].cts;
            a[P].duration = ae - H;
          } else a[P].duration = P ? a[P - 1].duration : T;
          (a[P].cts = 0), (w = W);
        }
      }
    }
    (f = D || !f ? T : f),
      (this.nextAvcDts = c = p + f),
      (this.videoSampleDuration = f),
      (this.isVideoContiguous = !0);
    const ne = C.moof(e.sequenceNumber++, h, Se({}, e, { samples: a })),
      te = "video",
      J = {
        data1: ne,
        data2: I,
        startPTS: g / s,
        endPTS: (v + f) / s,
        startDTS: h / s,
        endDTS: c / s,
        type: te,
        hasAudio: !1,
        hasVideo: !0,
        nb: a.length,
        dropped: e.dropped,
      };
    return (e.samples = []), (e.dropped = 0), J;
  }
  remuxAudio(e, t, r, i, s) {
    const o = e.inputTimeScale,
      a = e.samplerate ? e.samplerate : o,
      l = o / a,
      u = e.segmentCodec === "aac" ? cd : dv,
      c = u * l,
      d = this._initPTS,
      f = e.segmentCodec === "mp3" && this.typeSupported.mpeg,
      h = [],
      p = s !== void 0;
    let g = e.samples,
      v = f ? 0 : 8,
      m = this.nextAudioPts || -1;
    const E = t * o,
      x = (d.baseTime * o) / d.timescale;
    if (
      ((this.isAudioContiguous = r =
        r ||
        (g.length &&
          m > 0 &&
          ((i && Math.abs(E - m) < 9e3) ||
            Math.abs(st(g[0].pts - x, E) - m) < 20 * c))),
      g.forEach(function (te) {
        te.pts = st(te.pts - x, E);
      }),
      !r || m < 0)
    ) {
      if (((g = g.filter((te) => te.pts >= 0)), !g.length)) return;
      s === 0 ? (m = 0) : i && !p ? (m = Math.max(0, E)) : (m = g[0].pts);
    }
    if (e.segmentCodec === "aac") {
      const te = this.config.maxAudioFramesDrift;
      for (let J = 0, w = m; J < g.length; J++) {
        const P = g[J],
          N = P.pts,
          W = N - w,
          H = Math.abs((1e3 * W) / o);
        if (W <= -te * c && p)
          J === 0 &&
            (A.warn(
              `Audio frame @ ${(N / o).toFixed(
                3
              )}s overlaps nextAudioPts by ${Math.round((1e3 * W) / o)} ms.`
            ),
            (this.nextAudioPts = m = w = N));
        else if (W >= te * c && H < cv && p) {
          let ae = Math.round(W / c);
          (w = N - ae * c),
            w < 0 && (ae--, (w += c)),
            J === 0 && (this.nextAudioPts = m = w),
            A.warn(
              `[mp4-remuxer]: Injecting ${ae} audio frame @ ${(w / o).toFixed(
                3
              )}s due to ${Math.round((1e3 * W) / o)} ms gap.`
            );
          for (let me = 0; me < ae; me++) {
            const be = Math.max(w, 0);
            let ye = ud.getSilentFrame(
              e.manifestCodec || e.codec,
              e.channelCount
            );
            ye ||
              (A.log(
                "[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."
              ),
              (ye = P.unit.subarray())),
              g.splice(J, 0, { unit: ye, pts: be }),
              (w += c),
              J++;
          }
        }
        (P.pts = w), (w += c);
      }
    }
    let T = null,
      S = null,
      R,
      L = 0,
      I = g.length;
    for (; I--; ) L += g[I].unit.byteLength;
    for (let te = 0, J = g.length; te < J; te++) {
      const w = g[te],
        P = w.unit;
      let N = w.pts;
      if (S !== null) {
        const H = h[te - 1];
        H.duration = Math.round((N - S) / l);
      } else if ((r && e.segmentCodec === "aac" && (N = m), (T = N), L > 0)) {
        L += v;
        try {
          R = new Uint8Array(L);
        } catch (H) {
          this.observer.emit(y.ERROR, y.ERROR, {
            type: K.MUX_ERROR,
            details: F.REMUX_ALLOC_ERROR,
            fatal: !1,
            error: H,
            bytes: L,
            reason: `fail allocating audio mdat ${L}`,
          });
          return;
        }
        f || (new DataView(R.buffer).setUint32(0, L), R.set(C.types.mdat, 4));
      } else return;
      R.set(P, v);
      const W = P.byteLength;
      (v += W), h.push(new dd(!0, u, W, 0)), (S = N);
    }
    const _ = h.length;
    if (!_) return;
    const D = h[h.length - 1];
    this.nextAudioPts = m = S + l * D.duration;
    const U = f
      ? new Uint8Array(0)
      : C.moof(e.sequenceNumber++, T / l, Se({}, e, { samples: h }));
    e.samples = [];
    const b = T / o,
      Y = m / o,
      ne = {
        data1: U,
        data2: R,
        startPTS: b,
        endPTS: Y,
        startDTS: b,
        endDTS: Y,
        type: "audio",
        hasAudio: !0,
        hasVideo: !1,
        nb: _,
      };
    return (this.isAudioContiguous = !0), ne;
  }
  remuxEmptyAudio(e, t, r, i) {
    const s = e.inputTimeScale,
      o = e.samplerate ? e.samplerate : s,
      a = s / o,
      l = this.nextAudioPts,
      u = this._initDTS,
      c = (u.baseTime * 9e4) / u.timescale,
      d = (l !== null ? l : i.startDTS * s) + c,
      f = i.endDTS * s + c,
      h = a * cd,
      p = Math.ceil((f - d) / h),
      g = ud.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
    if ((A.warn("[mp4-remuxer]: remux empty Audio"), !g)) {
      A.trace(
        "[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec"
      );
      return;
    }
    const v = [];
    for (let m = 0; m < p; m++) {
      const E = d + m * h;
      v.push({ unit: g, pts: E, dts: E });
    }
    return (e.samples = v), this.remuxAudio(e, t, r, !1);
  }
}
function st(n, e) {
  let t;
  if (e === null) return n;
  for (
    e < n ? (t = -8589934592) : (t = 8589934592);
    Math.abs(n - e) > 4294967296;

  )
    n += t;
  return n;
}
function fv(n) {
  for (let e = 0; e < n.length; e++) if (n[e].key) return e;
  return -1;
}
function _0(n, e, t, r) {
  const i = n.samples.length;
  if (!i) return;
  const s = n.inputTimeScale;
  for (let a = 0; a < i; a++) {
    const l = n.samples[a];
    (l.pts = st(l.pts - (t.baseTime * s) / t.timescale, e * s) / s),
      (l.dts = st(l.dts - (r.baseTime * s) / r.timescale, e * s) / s);
  }
  const o = n.samples;
  return (n.samples = []), { samples: o };
}
function P0(n, e, t) {
  const r = n.samples.length;
  if (!r) return;
  const i = n.inputTimeScale;
  for (let o = 0; o < r; o++) {
    const a = n.samples[o];
    a.pts = st(a.pts - (t.baseTime * 9e4) / t.timescale, e * i) / i;
  }
  n.samples.sort((o, a) => o.pts - a.pts);
  const s = n.samples;
  return (n.samples = []), { samples: s };
}
class dd {
  constructor(e, t, r, i) {
    (this.size = void 0),
      (this.duration = void 0),
      (this.cts = void 0),
      (this.flags = void 0),
      (this.duration = t),
      (this.size = r),
      (this.cts = i),
      (this.flags = new hv(e));
  }
}
class hv {
  constructor(e) {
    (this.isLeading = 0),
      (this.isDependedOn = 0),
      (this.hasRedundancy = 0),
      (this.degradPrio = 0),
      (this.dependsOn = 1),
      (this.isNonSync = 1),
      (this.dependsOn = e ? 2 : 1),
      (this.isNonSync = e ? 0 : 1);
  }
}
class pv {
  constructor() {
    (this.emitInitSegment = !1),
      (this.audioCodec = void 0),
      (this.videoCodec = void 0),
      (this.initData = void 0),
      (this.initPTS = null),
      (this.initTracks = void 0),
      (this.lastEndTime = null);
  }
  destroy() {}
  resetTimeStamp(e) {
    (this.initPTS = e), (this.lastEndTime = null);
  }
  resetNextTimestamp() {
    this.lastEndTime = null;
  }
  resetInitSegment(e, t, r, i) {
    (this.audioCodec = t),
      (this.videoCodec = r),
      this.generateInitSegment(Oy(e, i)),
      (this.emitInitSegment = !0);
  }
  generateInitSegment(e) {
    let { audioCodec: t, videoCodec: r } = this;
    if (!(e != null && e.byteLength)) {
      (this.initTracks = void 0), (this.initData = void 0);
      return;
    }
    const i = (this.initData = l0(e));
    t || (t = fd(i.audio, ee.AUDIO)), r || (r = fd(i.video, ee.VIDEO));
    const s = {};
    i.audio && i.video
      ? (s.audiovideo = {
          container: "video/mp4",
          codec: t + "," + r,
          initSegment: e,
          id: "main",
        })
      : i.audio
      ? (s.audio = {
          container: "audio/mp4",
          codec: t,
          initSegment: e,
          id: "audio",
        })
      : i.video
      ? (s.video = {
          container: "video/mp4",
          codec: r,
          initSegment: e,
          id: "main",
        })
      : A.warn(
          "[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."
        ),
      (this.initTracks = s);
  }
  remux(e, t, r, i, s, o) {
    var a, l;
    let { initPTS: u, lastEndTime: c } = this;
    const d = {
      audio: void 0,
      video: void 0,
      text: i,
      id3: r,
      initSegment: void 0,
    };
    G(c) || (c = this.lastEndTime = s || 0);
    const f = t.samples;
    if (!(f != null && f.length)) return d;
    const h = { initPTS: void 0, timescale: 1 };
    let p = this.initData;
    if (
      (((a = p) != null && a.length) ||
        (this.generateInitSegment(f), (p = this.initData)),
      !((l = p) != null && l.length))
    )
      return (
        A.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), d
      );
    this.emitInitSegment &&
      ((h.tracks = this.initTracks), (this.emitInitSegment = !1));
    const g = by(f, p),
      v = By(p, f),
      m = v === null ? s : v;
    (gv(u, m, s, g) || (h.timescale !== u.timescale && o)) &&
      ((h.initPTS = m - s),
      u &&
        u.timescale === 1 &&
        A.warn(`Adjusting initPTS by ${h.initPTS - u.baseTime}`),
      (this.initPTS = u = { baseTime: h.initPTS, timescale: 1 }));
    const E = e ? m - u.baseTime / u.timescale : c,
      x = E + g;
    My(p, f, u.baseTime / u.timescale),
      g > 0
        ? (this.lastEndTime = x)
        : (A.warn("Duration parsed from mp4 should be greater than zero"),
          this.resetNextTimestamp());
    const T = !!p.audio,
      S = !!p.video;
    let R = "";
    T && (R += "audio"), S && (R += "video");
    const L = {
      data1: f,
      startPTS: E,
      startDTS: E,
      endPTS: x,
      endDTS: x,
      type: R,
      hasAudio: T,
      hasVideo: S,
      nb: 1,
      dropped: 0,
    };
    return (
      (d.audio = L.type === "audio" ? L : void 0),
      (d.video = L.type !== "audio" ? L : void 0),
      (d.initSegment = h),
      (d.id3 = _0(r, s, u, u)),
      i.samples.length && (d.text = P0(i, s, u)),
      d
    );
  }
}
function gv(n, e, t, r) {
  if (n === null) return !0;
  const i = Math.max(r, 1),
    s = e - n.baseTime / n.timescale;
  return Math.abs(s - t) > i;
}
function fd(n, e) {
  const t = n == null ? void 0 : n.codec;
  return t && t.length > 4
    ? t
    : t === "hvc1" || t === "hev1"
    ? "hvc1.1.6.L120.90"
    : t === "av01"
    ? "av01.0.04M.08"
    : t === "avc1" || e === ee.VIDEO
    ? "avc1.42e01e"
    : "mp4a.40.5";
}
let Ot;
try {
  Ot = self.performance.now.bind(self.performance);
} catch {
  A.debug("Unable to use Performance API on this environment"),
    (Ot = typeof self < "u" && self.Date.now);
}
const Go = [
  { demux: QE, remux: pv },
  { demux: Xt, remux: $o },
  { demux: XE, remux: $o },
  { demux: av, remux: $o },
];
class hd {
  constructor(e, t, r, i, s) {
    (this.async = !1),
      (this.observer = void 0),
      (this.typeSupported = void 0),
      (this.config = void 0),
      (this.vendor = void 0),
      (this.id = void 0),
      (this.demuxer = void 0),
      (this.remuxer = void 0),
      (this.decrypter = void 0),
      (this.probe = void 0),
      (this.decryptionPromise = null),
      (this.transmuxConfig = void 0),
      (this.currentTransmuxState = void 0),
      (this.observer = e),
      (this.typeSupported = t),
      (this.config = r),
      (this.vendor = i),
      (this.id = s);
  }
  configure(e) {
    (this.transmuxConfig = e), this.decrypter && this.decrypter.reset();
  }
  push(e, t, r, i) {
    const s = r.transmuxing;
    s.executeStart = Ot();
    let o = new Uint8Array(e);
    const { currentTransmuxState: a, transmuxConfig: l } = this;
    i && (this.currentTransmuxState = i);
    const {
        contiguous: u,
        discontinuity: c,
        trackSwitch: d,
        accurateTimeOffset: f,
        timeOffset: h,
        initSegmentChange: p,
      } = i || a,
      {
        audioCodec: g,
        videoCodec: v,
        defaultInitPts: m,
        duration: E,
        initSegmentData: x,
      } = l,
      T = mv(o, t);
    if (T && T.method === "AES-128") {
      const I = this.getDecrypter();
      if (I.isSync()) {
        let _ = I.softwareDecrypt(o, T.key.buffer, T.iv.buffer);
        if ((r.part > -1 && (_ = I.flush()), !_))
          return (s.executeEnd = Ot()), Ko(r);
        o = new Uint8Array(_);
      } else
        return (
          (this.decryptionPromise = I.webCryptoDecrypt(
            o,
            T.key.buffer,
            T.iv.buffer
          ).then((_) => {
            const D = this.push(_, null, r);
            return (this.decryptionPromise = null), D;
          })),
          this.decryptionPromise
        );
    }
    const S = this.needsProbing(c, d);
    if (S) {
      const I = this.configureTransmuxer(o);
      if (I)
        return (
          A.warn(`[transmuxer] ${I.message}`),
          this.observer.emit(y.ERROR, y.ERROR, {
            type: K.MEDIA_ERROR,
            details: F.FRAG_PARSING_ERROR,
            fatal: !1,
            error: I,
            reason: I.message,
          }),
          (s.executeEnd = Ot()),
          Ko(r)
        );
    }
    (c || d || p || S) && this.resetInitSegment(x, g, v, E, t),
      (c || p || S) && this.resetInitialTimestamp(m),
      u || this.resetContiguity();
    const R = this.transmux(o, T, h, f, r),
      L = this.currentTransmuxState;
    return (
      (L.contiguous = !0),
      (L.discontinuity = !1),
      (L.trackSwitch = !1),
      (s.executeEnd = Ot()),
      R
    );
  }
  flush(e) {
    const t = e.transmuxing;
    t.executeStart = Ot();
    const {
      decrypter: r,
      currentTransmuxState: i,
      decryptionPromise: s,
    } = this;
    if (s) return s.then(() => this.flush(e));
    const o = [],
      { timeOffset: a } = i;
    if (r) {
      const d = r.flush();
      d && o.push(this.push(d, null, e));
    }
    const { demuxer: l, remuxer: u } = this;
    if (!l || !u) return (t.executeEnd = Ot()), [Ko(e)];
    const c = l.flush(a);
    return ts(c)
      ? c.then((d) => (this.flushRemux(o, d, e), o))
      : (this.flushRemux(o, c, e), o);
  }
  flushRemux(e, t, r) {
    const { audioTrack: i, videoTrack: s, id3Track: o, textTrack: a } = t,
      { accurateTimeOffset: l, timeOffset: u } = this.currentTransmuxState;
    A.log(
      `[transmuxer.ts]: Flushed fragment ${r.sn}${
        r.part > -1 ? " p: " + r.part : ""
      } of level ${r.level}`
    );
    const c = this.remuxer.remux(i, s, o, a, u, l, !0, this.id);
    e.push({ remuxResult: c, chunkMeta: r }), (r.transmuxing.executeEnd = Ot());
  }
  resetInitialTimestamp(e) {
    const { demuxer: t, remuxer: r } = this;
    !t || !r || (t.resetTimeStamp(e), r.resetTimeStamp(e));
  }
  resetContiguity() {
    const { demuxer: e, remuxer: t } = this;
    !e || !t || (e.resetContiguity(), t.resetNextTimestamp());
  }
  resetInitSegment(e, t, r, i, s) {
    const { demuxer: o, remuxer: a } = this;
    !o ||
      !a ||
      (o.resetInitSegment(e, t, r, i), a.resetInitSegment(e, t, r, s));
  }
  destroy() {
    this.demuxer && (this.demuxer.destroy(), (this.demuxer = void 0)),
      this.remuxer && (this.remuxer.destroy(), (this.remuxer = void 0));
  }
  transmux(e, t, r, i, s) {
    let o;
    return (
      t && t.method === "SAMPLE-AES"
        ? (o = this.transmuxSampleAes(e, t, r, i, s))
        : (o = this.transmuxUnencrypted(e, r, i, s)),
      o
    );
  }
  transmuxUnencrypted(e, t, r, i) {
    const {
      audioTrack: s,
      videoTrack: o,
      id3Track: a,
      textTrack: l,
    } = this.demuxer.demux(e, t, !1, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(s, o, a, l, t, r, !1, this.id),
      chunkMeta: i,
    };
  }
  transmuxSampleAes(e, t, r, i, s) {
    return this.demuxer
      .demuxSampleAes(e, t, r)
      .then((o) => ({
        remuxResult: this.remuxer.remux(
          o.audioTrack,
          o.videoTrack,
          o.id3Track,
          o.textTrack,
          r,
          i,
          !1,
          this.id
        ),
        chunkMeta: s,
      }));
  }
  configureTransmuxer(e) {
    const { config: t, observer: r, typeSupported: i, vendor: s } = this;
    let o;
    for (let d = 0, f = Go.length; d < f; d++)
      if (Go[d].demux.probe(e)) {
        o = Go[d];
        break;
      }
    if (!o) return new Error("Failed to find demuxer by probing fragment data");
    const a = this.demuxer,
      l = this.remuxer,
      u = o.remux,
      c = o.demux;
    (!l || !(l instanceof u)) && (this.remuxer = new u(r, t, i, s)),
      (!a || !(a instanceof c)) &&
        ((this.demuxer = new c(r, t, i)), (this.probe = c.probe));
  }
  needsProbing(e, t) {
    return !this.demuxer || !this.remuxer || e || t;
  }
  getDecrypter() {
    let e = this.decrypter;
    return e || (e = this.decrypter = new cu(this.config)), e;
  }
}
function mv(n, e) {
  let t = null;
  return (
    n.byteLength > 0 &&
      e != null &&
      e.key != null &&
      e.iv !== null &&
      e.method != null &&
      (t = e),
    t
  );
}
const Ko = (n) => ({ remuxResult: {}, chunkMeta: n });
function ts(n) {
  return "then" in n && n.then instanceof Function;
}
class yv {
  constructor(e, t, r, i, s) {
    (this.audioCodec = void 0),
      (this.videoCodec = void 0),
      (this.initSegmentData = void 0),
      (this.duration = void 0),
      (this.defaultInitPts = void 0),
      (this.audioCodec = e),
      (this.videoCodec = t),
      (this.initSegmentData = r),
      (this.duration = i),
      (this.defaultInitPts = s || null);
  }
}
class Ev {
  constructor(e, t, r, i, s, o) {
    (this.discontinuity = void 0),
      (this.contiguous = void 0),
      (this.accurateTimeOffset = void 0),
      (this.trackSwitch = void 0),
      (this.timeOffset = void 0),
      (this.initSegmentChange = void 0),
      (this.discontinuity = e),
      (this.contiguous = t),
      (this.accurateTimeOffset = r),
      (this.trackSwitch = i),
      (this.timeOffset = s),
      (this.initSegmentChange = o);
  }
}
var O0 = { exports: {} };
(function (n) {
  var e = Object.prototype.hasOwnProperty,
    t = "~";
  function r() {}
  Object.create &&
    ((r.prototype = Object.create(null)), new r().__proto__ || (t = !1));
  function i(l, u, c) {
    (this.fn = l), (this.context = u), (this.once = c || !1);
  }
  function s(l, u, c, d, f) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var h = new i(c, d || l, f),
      p = t ? t + u : u;
    return (
      l._events[p]
        ? l._events[p].fn
          ? (l._events[p] = [l._events[p], h])
          : l._events[p].push(h)
        : ((l._events[p] = h), l._eventsCount++),
      l
    );
  }
  function o(l, u) {
    --l._eventsCount === 0 ? (l._events = new r()) : delete l._events[u];
  }
  function a() {
    (this._events = new r()), (this._eventsCount = 0);
  }
  (a.prototype.eventNames = function () {
    var u = [],
      c,
      d;
    if (this._eventsCount === 0) return u;
    for (d in (c = this._events)) e.call(c, d) && u.push(t ? d.slice(1) : d);
    return Object.getOwnPropertySymbols
      ? u.concat(Object.getOwnPropertySymbols(c))
      : u;
  }),
    (a.prototype.listeners = function (u) {
      var c = t ? t + u : u,
        d = this._events[c];
      if (!d) return [];
      if (d.fn) return [d.fn];
      for (var f = 0, h = d.length, p = new Array(h); f < h; f++)
        p[f] = d[f].fn;
      return p;
    }),
    (a.prototype.listenerCount = function (u) {
      var c = t ? t + u : u,
        d = this._events[c];
      return d ? (d.fn ? 1 : d.length) : 0;
    }),
    (a.prototype.emit = function (u, c, d, f, h, p) {
      var g = t ? t + u : u;
      if (!this._events[g]) return !1;
      var v = this._events[g],
        m = arguments.length,
        E,
        x;
      if (v.fn) {
        switch ((v.once && this.removeListener(u, v.fn, void 0, !0), m)) {
          case 1:
            return v.fn.call(v.context), !0;
          case 2:
            return v.fn.call(v.context, c), !0;
          case 3:
            return v.fn.call(v.context, c, d), !0;
          case 4:
            return v.fn.call(v.context, c, d, f), !0;
          case 5:
            return v.fn.call(v.context, c, d, f, h), !0;
          case 6:
            return v.fn.call(v.context, c, d, f, h, p), !0;
        }
        for (x = 1, E = new Array(m - 1); x < m; x++) E[x - 1] = arguments[x];
        v.fn.apply(v.context, E);
      } else {
        var T = v.length,
          S;
        for (x = 0; x < T; x++)
          switch (
            (v[x].once && this.removeListener(u, v[x].fn, void 0, !0), m)
          ) {
            case 1:
              v[x].fn.call(v[x].context);
              break;
            case 2:
              v[x].fn.call(v[x].context, c);
              break;
            case 3:
              v[x].fn.call(v[x].context, c, d);
              break;
            case 4:
              v[x].fn.call(v[x].context, c, d, f);
              break;
            default:
              if (!E)
                for (S = 1, E = new Array(m - 1); S < m; S++)
                  E[S - 1] = arguments[S];
              v[x].fn.apply(v[x].context, E);
          }
      }
      return !0;
    }),
    (a.prototype.on = function (u, c, d) {
      return s(this, u, c, d, !1);
    }),
    (a.prototype.once = function (u, c, d) {
      return s(this, u, c, d, !0);
    }),
    (a.prototype.removeListener = function (u, c, d, f) {
      var h = t ? t + u : u;
      if (!this._events[h]) return this;
      if (!c) return o(this, h), this;
      var p = this._events[h];
      if (p.fn)
        p.fn === c && (!f || p.once) && (!d || p.context === d) && o(this, h);
      else {
        for (var g = 0, v = [], m = p.length; g < m; g++)
          (p[g].fn !== c || (f && !p[g].once) || (d && p[g].context !== d)) &&
            v.push(p[g]);
        v.length ? (this._events[h] = v.length === 1 ? v[0] : v) : o(this, h);
      }
      return this;
    }),
    (a.prototype.removeAllListeners = function (u) {
      var c;
      return (
        u
          ? ((c = t ? t + u : u), this._events[c] && o(this, c))
          : ((this._events = new r()), (this._eventsCount = 0)),
        this
      );
    }),
    (a.prototype.off = a.prototype.removeListener),
    (a.prototype.addListener = a.prototype.on),
    (a.prefixed = t),
    (a.EventEmitter = a),
    (n.exports = a);
})(O0);
var vv = O0.exports,
  gu = iy(vv);
const Vo = Js() || { isTypeSupported: () => !1 };
class B0 {
  constructor(e, t, r, i) {
    (this.error = null),
      (this.hls = void 0),
      (this.id = void 0),
      (this.observer = void 0),
      (this.frag = null),
      (this.part = null),
      (this.useWorker = void 0),
      (this.workerContext = null),
      (this.onwmsg = void 0),
      (this.transmuxer = null),
      (this.onTransmuxComplete = void 0),
      (this.onFlush = void 0);
    const s = e.config;
    (this.hls = e),
      (this.id = t),
      (this.useWorker = !!s.enableWorker),
      (this.onTransmuxComplete = r),
      (this.onFlush = i);
    const o = (u, c) => {
      (c = c || {}),
        (c.frag = this.frag),
        (c.id = this.id),
        u === y.ERROR && (this.error = c.error),
        this.hls.trigger(u, c);
    };
    (this.observer = new gu()),
      this.observer.on(y.FRAG_DECRYPTED, o),
      this.observer.on(y.ERROR, o);
    const a = {
        mp4: Vo.isTypeSupported("video/mp4"),
        mpeg: Vo.isTypeSupported("audio/mpeg"),
        mp3: Vo.isTypeSupported('audio/mp4; codecs="mp3"'),
      },
      l = navigator.vendor;
    if (this.useWorker && typeof Worker < "u" && (s.workerPath || $E())) {
      try {
        s.workerPath
          ? (A.log(`loading Web Worker ${s.workerPath} for "${t}"`),
            (this.workerContext = KE(s.workerPath)))
          : (A.log(`injecting Web Worker for "${t}"`),
            (this.workerContext = GE())),
          (this.onwmsg = (d) => this.onWorkerMessage(d));
        const { worker: c } = this.workerContext;
        c.addEventListener("message", this.onwmsg),
          (c.onerror = (d) => {
            const f = new Error(`${d.message}  (${d.filename}:${d.lineno})`);
            (s.enableWorker = !1),
              A.warn(`Error in "${t}" Web Worker, fallback to inline`),
              this.hls.trigger(y.ERROR, {
                type: K.OTHER_ERROR,
                details: F.INTERNAL_EXCEPTION,
                fatal: !1,
                event: "demuxerWorker",
                error: f,
              });
          }),
          c.postMessage({
            cmd: "init",
            typeSupported: a,
            vendor: l,
            id: t,
            config: JSON.stringify(s),
          });
      } catch (c) {
        A.warn(`Error setting up "${t}" Web Worker, fallback to inline`, c),
          this.resetWorker(),
          (this.error = null),
          (this.transmuxer = new hd(this.observer, a, s, l, t));
      }
      return;
    }
    this.transmuxer = new hd(this.observer, a, s, l, t);
  }
  resetWorker() {
    if (this.workerContext) {
      const { worker: e, objectURL: t } = this.workerContext;
      t && self.URL.revokeObjectURL(t),
        e.removeEventListener("message", this.onwmsg),
        (e.onerror = null),
        e.terminate(),
        (this.workerContext = null);
    }
  }
  destroy() {
    if (this.workerContext) this.resetWorker(), (this.onwmsg = void 0);
    else {
      const t = this.transmuxer;
      t && (t.destroy(), (this.transmuxer = null));
    }
    const e = this.observer;
    e && e.removeAllListeners(),
      (this.frag = null),
      (this.observer = null),
      (this.hls = null);
  }
  push(e, t, r, i, s, o, a, l, u, c) {
    var d, f;
    u.transmuxing.start = self.performance.now();
    const { transmuxer: h } = this,
      p = o ? o.start : s.start,
      g = s.decryptdata,
      v = this.frag,
      m = !(v && s.cc === v.cc),
      E = !(v && u.level === v.level),
      x = v ? u.sn - v.sn : -1,
      T = this.part ? u.part - this.part.index : -1,
      S =
        x === 0 &&
        u.id > 1 &&
        u.id === (v == null ? void 0 : v.stats.chunkCount),
      R = !E && (x === 1 || (x === 0 && (T === 1 || (S && T <= 0)))),
      L = self.performance.now();
    (E || x || s.stats.parsing.start === 0) && (s.stats.parsing.start = L),
      o && (T || !R) && (o.stats.parsing.start = L);
    const I = !(
        v &&
        ((d = s.initSegment) == null ? void 0 : d.url) ===
          ((f = v.initSegment) == null ? void 0 : f.url)
      ),
      _ = new Ev(m, R, l, E, p, I);
    if (!R || m || I) {
      A.log(`[transmuxer-interface, ${s.type}]: Starting new transmux session for sn: ${u.sn} p: ${u.part} level: ${u.level} id: ${u.id}
        discontinuity: ${m}
        trackSwitch: ${E}
        contiguous: ${R}
        accurateTimeOffset: ${l}
        timeOffset: ${p}
        initSegmentChange: ${I}`);
      const D = new yv(r, i, t, a, c);
      this.configureTransmuxer(D);
    }
    if (((this.frag = s), (this.part = o), this.workerContext))
      this.workerContext.worker.postMessage(
        { cmd: "demux", data: e, decryptdata: g, chunkMeta: u, state: _ },
        e instanceof ArrayBuffer ? [e] : []
      );
    else if (h) {
      const D = h.push(e, g, u, _);
      ts(D)
        ? ((h.async = !0),
          D.then((U) => {
            this.handleTransmuxComplete(U);
          }).catch((U) => {
            this.transmuxerError(U, u, "transmuxer-interface push error");
          }))
        : ((h.async = !1), this.handleTransmuxComplete(D));
    }
  }
  flush(e) {
    e.transmuxing.start = self.performance.now();
    const { transmuxer: t } = this;
    if (this.workerContext)
      this.workerContext.worker.postMessage({ cmd: "flush", chunkMeta: e });
    else if (t) {
      let r = t.flush(e);
      ts(r) || t.async
        ? (ts(r) || (r = Promise.resolve(r)),
          r
            .then((s) => {
              this.handleFlushResult(s, e);
            })
            .catch((s) => {
              this.transmuxerError(s, e, "transmuxer-interface flush error");
            }))
        : this.handleFlushResult(r, e);
    }
  }
  transmuxerError(e, t, r) {
    !this.hls ||
      ((this.error = e),
      this.hls.trigger(y.ERROR, {
        type: K.MEDIA_ERROR,
        details: F.FRAG_PARSING_ERROR,
        chunkMeta: t,
        fatal: !1,
        error: e,
        err: e,
        reason: r,
      }));
  }
  handleFlushResult(e, t) {
    e.forEach((r) => {
      this.handleTransmuxComplete(r);
    }),
      this.onFlush(t);
  }
  onWorkerMessage(e) {
    const t = e.data,
      r = this.hls;
    switch (t.event) {
      case "init": {
        var i;
        const s = (i = this.workerContext) == null ? void 0 : i.objectURL;
        s && self.URL.revokeObjectURL(s);
        break;
      }
      case "transmuxComplete": {
        this.handleTransmuxComplete(t.data);
        break;
      }
      case "flush": {
        this.onFlush(t.data);
        break;
      }
      case "workerLog":
        A[t.data.logType] && A[t.data.logType](t.data.message);
        break;
      default: {
        (t.data = t.data || {}),
          (t.data.frag = this.frag),
          (t.data.id = this.id),
          r.trigger(t.event, t.data);
        break;
      }
    }
  }
  configureTransmuxer(e) {
    const { transmuxer: t } = this;
    this.workerContext
      ? this.workerContext.worker.postMessage({ cmd: "configure", config: e })
      : t && t.configure(e);
  }
  handleTransmuxComplete(e) {
    (e.chunkMeta.transmuxing.end = self.performance.now()),
      this.onTransmuxComplete(e);
  }
}
const xv = 250,
  Ho = 2,
  Tv = 0.1,
  Sv = 0.05;
class Av {
  constructor(e, t, r, i) {
    (this.config = void 0),
      (this.media = null),
      (this.fragmentTracker = void 0),
      (this.hls = void 0),
      (this.nudgeRetry = 0),
      (this.stallReported = !1),
      (this.stalled = null),
      (this.moved = !1),
      (this.seeking = !1),
      (this.config = e),
      (this.media = t),
      (this.fragmentTracker = r),
      (this.hls = i);
  }
  destroy() {
    (this.media = null), (this.hls = this.fragmentTracker = null);
  }
  poll(e, t) {
    const { config: r, media: i, stalled: s } = this;
    if (i === null) return;
    const { currentTime: o, seeking: a } = i,
      l = this.seeking && !a,
      u = !this.seeking && a;
    if (((this.seeking = a), o !== e)) {
      if (((this.moved = !0), s !== null)) {
        if (this.stallReported) {
          const m = self.performance.now() - s;
          A.warn(`playback not stuck anymore @${o}, after ${Math.round(m)}ms`),
            (this.stallReported = !1);
        }
        (this.stalled = null), (this.nudgeRetry = 0);
      }
      return;
    }
    if (u || l) {
      this.stalled = null;
      return;
    }
    if (
      (i.paused && !a) ||
      i.ended ||
      i.playbackRate === 0 ||
      !se.getBuffered(i).length
    )
      return;
    const c = se.bufferInfo(i, o, 0),
      d = c.len > 0,
      f = c.nextStart || 0;
    if (!d && !f) return;
    if (a) {
      const m = c.len > Ho,
        E =
          !f ||
          (t && t.start <= o) ||
          (f - o > Ho && !this.fragmentTracker.getPartialFragment(o));
      if (m || E) return;
      this.moved = !1;
    }
    if (!this.moved && this.stalled !== null) {
      var h;
      const m = Math.max(f, c.start || 0) - o,
        E = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
        T = (E == null || (h = E.details) == null ? void 0 : h.live)
          ? E.details.targetduration * 2
          : Ho,
        S = this.fragmentTracker.getPartialFragment(o);
      if (m > 0 && (m <= T || S)) {
        this._trySkipBufferHole(S);
        return;
      }
    }
    const p = self.performance.now();
    if (s === null) {
      this.stalled = p;
      return;
    }
    const g = p - s;
    if (!a && g >= xv && (this._reportStall(c), !this.media)) return;
    const v = se.bufferInfo(i, o, r.maxBufferHole);
    this._tryFixBufferStall(v, g);
  }
  _tryFixBufferStall(e, t) {
    const { config: r, fragmentTracker: i, media: s } = this;
    if (s === null) return;
    const o = s.currentTime,
      a = i.getPartialFragment(o);
    (a && (this._trySkipBufferHole(a) || !this.media)) ||
      ((e.len > r.maxBufferHole ||
        (e.nextStart && e.nextStart - o < r.maxBufferHole)) &&
        t > r.highBufferWatchdogPeriod * 1e3 &&
        (A.warn("Trying to nudge playhead over buffer-hole"),
        (this.stalled = null),
        this._tryNudgeBuffer()));
  }
  _reportStall(e) {
    const { hls: t, media: r, stallReported: i } = this;
    if (!i && r) {
      this.stallReported = !0;
      const s = new Error(
        `Playback stalling at @${
          r.currentTime
        } due to low buffer (${JSON.stringify(e)})`
      );
      A.warn(s.message),
        t.trigger(y.ERROR, {
          type: K.MEDIA_ERROR,
          details: F.BUFFER_STALLED_ERROR,
          fatal: !1,
          error: s,
          buffer: e.len,
        });
    }
  }
  _trySkipBufferHole(e) {
    const { config: t, hls: r, media: i } = this;
    if (i === null) return 0;
    const s = i.currentTime,
      o = se.bufferInfo(i, s, 0),
      a = s < o.start ? o.start : o.nextStart;
    if (a) {
      const l = o.len <= t.maxBufferHole,
        u = o.len > 0 && o.len < 1 && i.readyState < 3,
        c = a - s;
      if (c > 0 && (l || u)) {
        if (c > t.maxBufferHole) {
          const { fragmentTracker: f } = this;
          let h = !1;
          if (s === 0) {
            const p = f.getAppendedFrag(0, V.MAIN);
            p && a < p.end && (h = !0);
          }
          if (!h) {
            const p = e || f.getAppendedFrag(s, V.MAIN);
            if (p) {
              let g = !1,
                v = p.end;
              for (; v < a; ) {
                const m = f.getPartialFragment(v);
                if (m) v += m.duration;
                else {
                  g = !0;
                  break;
                }
              }
              if (g) return 0;
            }
          }
        }
        const d = Math.max(a + Sv, s + Tv);
        if (
          (A.warn(`skipping hole, adjusting currentTime from ${s} to ${d}`),
          (this.moved = !0),
          (this.stalled = null),
          (i.currentTime = d),
          e && !e.gap)
        ) {
          const f = new Error(
            `fragment loaded with buffer holes, seeking from ${s} to ${d}`
          );
          r.trigger(y.ERROR, {
            type: K.MEDIA_ERROR,
            details: F.BUFFER_SEEK_OVER_HOLE,
            fatal: !1,
            error: f,
            reason: f.message,
            frag: e,
          });
        }
        return d;
      }
    }
    return 0;
  }
  _tryNudgeBuffer() {
    const { config: e, hls: t, media: r, nudgeRetry: i } = this;
    if (r === null) return;
    const s = r.currentTime;
    if ((this.nudgeRetry++, i < e.nudgeMaxRetry)) {
      const o = s + (i + 1) * e.nudgeOffset,
        a = new Error(`Nudging 'currentTime' from ${s} to ${o}`);
      A.warn(a.message),
        (r.currentTime = o),
        t.trigger(y.ERROR, {
          type: K.MEDIA_ERROR,
          details: F.BUFFER_NUDGE_ON_STALL,
          error: a,
          fatal: !1,
        });
    } else {
      const o = new Error(
        `Playhead still not moving while enough data buffered @${s} after ${e.nudgeMaxRetry} nudges`
      );
      A.error(o.message),
        t.trigger(y.ERROR, {
          type: K.MEDIA_ERROR,
          details: F.BUFFER_STALLED_ERROR,
          error: o,
          fatal: !0,
        });
    }
  }
}
const Lv = 100;
class Cv extends du {
  constructor(e, t, r) {
    super(e, t, r, "[stream-controller]", V.MAIN),
      (this.audioCodecSwap = !1),
      (this.gapController = null),
      (this.level = -1),
      (this._forceStartLoad = !1),
      (this.altAudio = !1),
      (this.audioOnly = !1),
      (this.fragPlaying = null),
      (this.onvplaying = null),
      (this.onvseeked = null),
      (this.fragLastKbps = 0),
      (this.couldBacktrack = !1),
      (this.backtrackFragment = null),
      (this.audioCodecSwitch = !1),
      (this.videoBuffer = null),
      this._registerListeners();
  }
  _registerListeners() {
    const { hls: e } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.on(y.LEVEL_LOADING, this.onLevelLoading, this),
      e.on(y.LEVEL_LOADED, this.onLevelLoaded, this),
      e.on(
        y.FRAG_LOAD_EMERGENCY_ABORTED,
        this.onFragLoadEmergencyAborted,
        this
      ),
      e.on(y.ERROR, this.onError, this),
      e.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
      e.on(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
      e.on(y.BUFFER_CREATED, this.onBufferCreated, this),
      e.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this),
      e.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this),
      e.on(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const { hls: e } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.off(y.LEVEL_LOADED, this.onLevelLoaded, this),
      e.off(
        y.FRAG_LOAD_EMERGENCY_ABORTED,
        this.onFragLoadEmergencyAborted,
        this
      ),
      e.off(y.ERROR, this.onError, this),
      e.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
      e.off(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
      e.off(y.BUFFER_CREATED, this.onBufferCreated, this),
      e.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this),
      e.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this),
      e.off(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onHandlerDestroying() {
    this._unregisterListeners(), this.onMediaDetaching();
  }
  startLoad(e) {
    if (this.levels) {
      const { lastCurrentTime: t, hls: r } = this;
      if (
        (this.stopLoad(),
        this.setInterval(Lv),
        (this.level = -1),
        !this.startFragRequested)
      ) {
        let i = r.startLevel;
        i === -1 &&
          (r.config.testBandwidth && this.levels.length > 1
            ? ((i = 0), (this.bitrateTest = !0))
            : (i = r.nextAutoLevel)),
          (this.level = r.nextLoadLevel = i),
          (this.loadedmetadata = !1);
      }
      t > 0 &&
        e === -1 &&
        (this.log(
          `Override startPosition with lastCurrentTime @${t.toFixed(3)}`
        ),
        (e = t)),
        (this.state = k.IDLE),
        (this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e),
        this.tick();
    } else (this._forceStartLoad = !0), (this.state = k.STOPPED);
  }
  stopLoad() {
    (this._forceStartLoad = !1), super.stopLoad();
  }
  doTick() {
    switch (this.state) {
      case k.WAITING_LEVEL: {
        var e;
        const { levels: r, level: i } = this,
          s = r == null || (e = r[i]) == null ? void 0 : e.details;
        if (s && (!s.live || this.levelLastLoaded === this.level)) {
          if (this.waitForCdnTuneIn(s)) break;
          this.state = k.IDLE;
          break;
        }
        break;
      }
      case k.FRAG_LOADING_WAITING_RETRY:
        {
          var t;
          const r = self.performance.now(),
            i = this.retryDate;
          (!i || r >= i || ((t = this.media) != null && t.seeking)) &&
            (this.resetStartWhenNotLoaded(this.level), (this.state = k.IDLE));
        }
        break;
    }
    this.state === k.IDLE && this.doTickIdle(), this.onTickEnd();
  }
  onTickEnd() {
    super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged();
  }
  doTickIdle() {
    const { hls: e, levelLastLoaded: t, levels: r, media: i } = this,
      { config: s, nextLoadLevel: o } = e;
    if (
      t === null ||
      (!i && (this.startFragRequested || !s.startFragPrefetch)) ||
      (this.altAudio && this.audioOnly) ||
      !(r != null && r[o])
    )
      return;
    const a = r[o],
      l = this.getMainFwdBufferInfo();
    if (l === null) return;
    const u = this.getLevelDetails();
    if (u && this._streamEnded(l, u)) {
      const v = {};
      this.altAudio && (v.type = "video"),
        this.hls.trigger(y.BUFFER_EOS, v),
        (this.state = k.ENDED);
      return;
    }
    e.loadLevel !== o &&
      e.manualLevel === -1 &&
      this.log(`Adapting to level ${o} from level ${this.level}`),
      (this.level = e.nextLoadLevel = o);
    const c = a.details;
    if (
      !c ||
      this.state === k.WAITING_LEVEL ||
      (c.live && this.levelLastLoaded !== o)
    ) {
      (this.level = o), (this.state = k.WAITING_LEVEL);
      return;
    }
    const d = l.len,
      f = this.getMaxBufferLength(a.maxBitrate);
    if (d >= f) return;
    this.backtrackFragment &&
      this.backtrackFragment.start > l.end &&
      (this.backtrackFragment = null);
    const h = this.backtrackFragment ? this.backtrackFragment.start : l.end;
    let p = this.getNextFragment(h, c);
    if (
      this.couldBacktrack &&
      !this.fragPrevious &&
      p &&
      p.sn !== "initSegment" &&
      this.fragmentTracker.getState(p) !== Ie.OK
    ) {
      var g;
      const m = ((g = this.backtrackFragment) != null ? g : p).sn - c.startSN,
        E = c.fragments[m - 1];
      E && p.cc === E.cc && ((p = E), this.fragmentTracker.removeFragment(E));
    } else this.backtrackFragment && l.len && (this.backtrackFragment = null);
    if (p && this.isLoopLoading(p, h)) {
      if (!p.gap) {
        const m = this.audioOnly && !this.altAudio ? ee.AUDIO : ee.VIDEO,
          E =
            (m === ee.VIDEO ? this.videoBuffer : this.mediaBuffer) ||
            this.media;
        E && this.afterBufferFlushed(E, m, V.MAIN);
      }
      p = this.getNextFragmentLoopLoading(p, c, l, V.MAIN, f);
    }
    !p ||
      (p.initSegment &&
        !p.initSegment.data &&
        !this.bitrateTest &&
        (p = p.initSegment),
      this.loadFragment(p, a, h));
  }
  loadFragment(e, t, r) {
    const i = this.fragmentTracker.getState(e);
    (this.fragCurrent = e),
      i === Ie.NOT_LOADED || i === Ie.PARTIAL
        ? e.sn === "initSegment"
          ? this._loadInitSegment(e, t)
          : this.bitrateTest
          ? (this.log(
              `Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`
            ),
            this._loadBitrateTestFrag(e, t))
          : ((this.startFragRequested = !0), super.loadFragment(e, t, r))
        : this.clearTrackerIfNeeded(e);
  }
  getBufferedFrag(e) {
    return this.fragmentTracker.getBufferedFrag(e, V.MAIN);
  }
  followingBufferedFrag(e) {
    return e ? this.getBufferedFrag(e.end + 0.5) : null;
  }
  immediateLevelSwitch() {
    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
  }
  nextLevelSwitch() {
    const { levels: e, media: t } = this;
    if (t != null && t.readyState) {
      let r;
      const i = this.getAppendedFrag(t.currentTime);
      i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
      const s = this.getLevelDetails();
      if (s != null && s.live) {
        const a = this.getMainFwdBufferInfo();
        if (!a || a.len < s.targetduration * 2) return;
      }
      if (!t.paused && e) {
        const a = this.hls.nextLoadLevel,
          l = e[a],
          u = this.fragLastKbps;
        u && this.fragCurrent
          ? (r = (this.fragCurrent.duration * l.maxBitrate) / (1e3 * u) + 1)
          : (r = 0);
      } else r = 0;
      const o = this.getBufferedFrag(t.currentTime + r);
      if (o) {
        const a = this.followingBufferedFrag(o);
        if (a) {
          this.abortCurrentFrag();
          const l = a.maxStartPTS ? a.maxStartPTS : a.start,
            u = a.duration,
            c = Math.max(
              o.end,
              l +
                Math.min(
                  Math.max(u - this.config.maxFragLookUpTolerance, u * 0.5),
                  u * 0.75
                )
            );
          this.flushMainBuffer(c, Number.POSITIVE_INFINITY);
        }
      }
    }
  }
  abortCurrentFrag() {
    const e = this.fragCurrent;
    switch (
      ((this.fragCurrent = null),
      (this.backtrackFragment = null),
      e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)),
      this.state)
    ) {
      case k.KEY_LOADING:
      case k.FRAG_LOADING:
      case k.FRAG_LOADING_WAITING_RETRY:
      case k.PARSING:
      case k.PARSED:
        this.state = k.IDLE;
        break;
    }
    this.nextLoadPosition = this.getLoadPosition();
  }
  flushMainBuffer(e, t) {
    super.flushMainBuffer(e, t, this.altAudio ? "video" : null);
  }
  onMediaAttached(e, t) {
    super.onMediaAttached(e, t);
    const r = t.media;
    (this.onvplaying = this.onMediaPlaying.bind(this)),
      (this.onvseeked = this.onMediaSeeked.bind(this)),
      r.addEventListener("playing", this.onvplaying),
      r.addEventListener("seeked", this.onvseeked),
      (this.gapController = new Av(
        this.config,
        r,
        this.fragmentTracker,
        this.hls
      ));
  }
  onMediaDetaching() {
    const { media: e } = this;
    e &&
      this.onvplaying &&
      this.onvseeked &&
      (e.removeEventListener("playing", this.onvplaying),
      e.removeEventListener("seeked", this.onvseeked),
      (this.onvplaying = this.onvseeked = null),
      (this.videoBuffer = null)),
      (this.fragPlaying = null),
      this.gapController &&
        (this.gapController.destroy(), (this.gapController = null)),
      super.onMediaDetaching();
  }
  onMediaPlaying() {
    this.tick();
  }
  onMediaSeeked() {
    const e = this.media,
      t = e ? e.currentTime : null;
    G(t) && this.log(`Media seeked to ${t.toFixed(3)}`);
    const r = this.getMainFwdBufferInfo();
    if (r === null || r.len === 0) {
      this.warn(
        `Main forward buffer length on "seeked" event ${r ? r.len : "empty"})`
      );
      return;
    }
    this.tick();
  }
  onManifestLoading() {
    this.log("Trigger BUFFER_RESET"),
      this.hls.trigger(y.BUFFER_RESET, void 0),
      this.fragmentTracker.removeAllFragments(),
      (this.couldBacktrack = !1),
      (this.startPosition = this.lastCurrentTime = 0),
      (this.levels = this.fragPlaying = this.backtrackFragment = null),
      (this.altAudio = this.audioOnly = !1);
  }
  onManifestParsed(e, t) {
    let r = !1,
      i = !1,
      s;
    t.levels.forEach((o) => {
      (s = o.audioCodec),
        s &&
          (s.indexOf("mp4a.40.2") !== -1 && (r = !0),
          s.indexOf("mp4a.40.5") !== -1 && (i = !0));
    }),
      (this.audioCodecSwitch = r && i && !UE()),
      this.audioCodecSwitch &&
        this.log(
          "Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"
        ),
      (this.levels = t.levels),
      (this.startFragRequested = !1);
  }
  onLevelLoading(e, t) {
    const { levels: r } = this;
    if (!r || this.state !== k.IDLE) return;
    const i = r[t.level];
    (!i.details ||
      (i.details.live && this.levelLastLoaded !== t.level) ||
      this.waitForCdnTuneIn(i.details)) &&
      (this.state = k.WAITING_LEVEL);
  }
  onLevelLoaded(e, t) {
    var r;
    const { levels: i } = this,
      s = t.level,
      o = t.details,
      a = o.totalduration;
    if (!i) {
      this.warn(`Levels were reset while loading level ${s}`);
      return;
    }
    this.log(
      `Level ${s} loaded [${o.startSN},${o.endSN}]${
        o.lastPartSn ? `[part-${o.lastPartSn}-${o.lastPartIndex}]` : ""
      }, cc [${o.startCC}, ${o.endCC}] duration:${a}`
    );
    const l = i[s],
      u = this.fragCurrent;
    u &&
      (this.state === k.FRAG_LOADING ||
        this.state === k.FRAG_LOADING_WAITING_RETRY) &&
      (u.level !== t.level || u.urlId !== l.urlId) &&
      u.loader &&
      this.abortCurrentFrag();
    let c = 0;
    if (o.live || ((r = l.details) != null && r.live)) {
      if ((o.fragments[0] || (o.deltaUpdateFailed = !0), o.deltaUpdateFailed))
        return;
      c = this.alignPlaylists(o, l.details);
    }
    if (
      ((l.details = o),
      (this.levelLastLoaded = s),
      this.hls.trigger(y.LEVEL_UPDATED, { details: o, level: s }),
      this.state === k.WAITING_LEVEL)
    ) {
      if (this.waitForCdnTuneIn(o)) return;
      this.state = k.IDLE;
    }
    this.startFragRequested
      ? o.live && this.synchronizeToLiveEdge(o)
      : this.setStartPosition(o, c),
      this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const { frag: r, part: i, payload: s } = e,
      { levels: o } = this;
    if (!o) {
      this.warn(
        `Levels were reset while fragment load was in progress. Fragment ${r.sn} of level ${r.level} will not be buffered`
      );
      return;
    }
    const a = o[r.level],
      l = a.details;
    if (!l) {
      this.warn(
        `Dropping fragment ${r.sn} of level ${r.level} after level details were reset`
      ),
        this.fragmentTracker.removeFragment(r);
      return;
    }
    const u = a.videoCodec,
      c = l.PTSKnown || !l.live,
      d = (t = r.initSegment) == null ? void 0 : t.data,
      f = this._getAudioCodec(a),
      h = (this.transmuxer =
        this.transmuxer ||
        new B0(
          this.hls,
          V.MAIN,
          this._handleTransmuxComplete.bind(this),
          this._handleTransmuxerFlush.bind(this)
        )),
      p = i ? i.index : -1,
      g = p !== -1,
      v = new lu(r.level, r.sn, r.stats.chunkCount, s.byteLength, p, g),
      m = this.initPTS[r.cc];
    h.push(s, d, f, u, r, i, l.totalduration, c, v, m);
  }
  onAudioTrackSwitching(e, t) {
    const r = this.altAudio;
    if (!!!t.url) {
      if (this.mediaBuffer !== this.media) {
        this.log(
          "Switching on main audio, use media.buffered to schedule main fragment loading"
        ),
          (this.mediaBuffer = this.media);
        const o = this.fragCurrent;
        o &&
          (this.log("Switching to main audio track, cancel main fragment load"),
          o.abortRequests(),
          this.fragmentTracker.removeFragment(o)),
          this.resetTransmuxer(),
          this.resetLoadingState();
      } else this.audioOnly && this.resetTransmuxer();
      const s = this.hls;
      r &&
        (s.trigger(y.BUFFER_FLUSHING, {
          startOffset: 0,
          endOffset: Number.POSITIVE_INFINITY,
          type: null,
        }),
        this.fragmentTracker.removeAllFragments()),
        s.trigger(y.AUDIO_TRACK_SWITCHED, t);
    }
  }
  onAudioTrackSwitched(e, t) {
    const r = t.id,
      i = !!this.hls.audioTracks[r].url;
    if (i) {
      const s = this.videoBuffer;
      s &&
        this.mediaBuffer !== s &&
        (this.log(
          "Switching on alternate audio, use video.buffered to schedule main fragment loading"
        ),
        (this.mediaBuffer = s));
    }
    (this.altAudio = i), this.tick();
  }
  onBufferCreated(e, t) {
    const r = t.tracks;
    let i,
      s,
      o = !1;
    for (const a in r) {
      const l = r[a];
      if (l.id === "main") {
        if (((s = a), (i = l), a === "video")) {
          const u = r[a];
          u && (this.videoBuffer = u.buffer);
        }
      } else o = !0;
    }
    o && i
      ? (this.log(
          `Alternate track found, use ${s}.buffered to schedule main fragment loading`
        ),
        (this.mediaBuffer = i.buffer))
      : (this.mediaBuffer = this.media);
  }
  onFragBuffered(e, t) {
    const { frag: r, part: i } = t;
    if (r && r.type !== V.MAIN) return;
    if (this.fragContextChanged(r)) {
      this.warn(
        `Fragment ${r.sn}${i ? " p: " + i.index : ""} of level ${
          r.level
        } finished buffering, but was aborted. state: ${this.state}`
      ),
        this.state === k.PARSED && (this.state = k.IDLE);
      return;
    }
    const s = i ? i.stats : r.stats;
    (this.fragLastKbps = Math.round(
      (8 * s.total) / (s.buffering.end - s.loading.first)
    )),
      r.sn !== "initSegment" && (this.fragPrevious = r),
      this.fragBufferedComplete(r, i);
  }
  onError(e, t) {
    var r;
    if (t.fatal) {
      this.state = k.ERROR;
      return;
    }
    switch (t.details) {
      case F.FRAG_GAP:
      case F.FRAG_PARSING_ERROR:
      case F.FRAG_DECRYPT_ERROR:
      case F.FRAG_LOAD_ERROR:
      case F.FRAG_LOAD_TIMEOUT:
      case F.KEY_LOAD_ERROR:
      case F.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(V.MAIN, t);
        break;
      case F.LEVEL_LOAD_ERROR:
      case F.LEVEL_LOAD_TIMEOUT:
      case F.LEVEL_PARSING_ERROR:
        !t.levelRetry &&
          this.state === k.WAITING_LEVEL &&
          ((r = t.context) == null ? void 0 : r.type) === Q.LEVEL &&
          (this.state = k.IDLE);
        break;
      case F.BUFFER_FULL_ERROR:
        if (!t.parent || t.parent !== "main") return;
        this.reduceLengthAndFlushBuffer(t) &&
          this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
        break;
      case F.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  checkBuffer() {
    const { media: e, gapController: t } = this;
    if (!(!e || !t || !e.readyState)) {
      if (this.loadedmetadata || !se.getBuffered(e).length) {
        const r = this.state !== k.IDLE ? this.fragCurrent : null;
        t.poll(this.lastCurrentTime, r);
      }
      this.lastCurrentTime = e.currentTime;
    }
  }
  onFragLoadEmergencyAborted() {
    (this.state = k.IDLE),
      this.loadedmetadata ||
        ((this.startFragRequested = !1),
        (this.nextLoadPosition = this.startPosition)),
      this.tickImmediate();
  }
  onBufferFlushed(e, { type: t }) {
    if (t !== ee.AUDIO || (this.audioOnly && !this.altAudio)) {
      const r =
        (t === ee.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
      this.afterBufferFlushed(r, t, V.MAIN);
    }
  }
  onLevelsUpdated(e, t) {
    this.levels = t.levels;
  }
  swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap;
  }
  seekToStartPos() {
    const { media: e } = this;
    if (!e) return;
    const t = e.currentTime;
    let r = this.startPosition;
    if (r >= 0 && t < r) {
      if (e.seeking) {
        this.log(`could not seek to ${r}, already seeking at ${t}`);
        return;
      }
      const i = se.getBuffered(e),
        o = (i.length ? i.start(0) : 0) - r;
      o > 0 &&
        (o < this.config.maxBufferHole ||
          o < this.config.maxFragLookUpTolerance) &&
        (this.log(`adjusting start position by ${o} to match buffer start`),
        (r += o),
        (this.startPosition = r)),
        this.log(`seek to target start position ${r} from current time ${t}`),
        (e.currentTime = r);
    }
  }
  _getAudioCodec(e) {
    let t = this.config.defaultAudioCodec || e.audioCodec;
    return (
      this.audioCodecSwap &&
        t &&
        (this.log("Swapping audio codec"),
        t.indexOf("mp4a.40.5") !== -1 ? (t = "mp4a.40.2") : (t = "mp4a.40.5")),
      t
    );
  }
  _loadBitrateTestFrag(e, t) {
    (e.bitrateTest = !0),
      this._doFragLoad(e, t).then((r) => {
        const { hls: i } = this;
        if (!r || this.fragContextChanged(e)) return;
        (t.fragmentError = 0),
          (this.state = k.IDLE),
          (this.startFragRequested = !1),
          (this.bitrateTest = !1);
        const s = e.stats;
        (s.parsing.start =
          s.parsing.end =
          s.buffering.start =
          s.buffering.end =
            self.performance.now()),
          i.trigger(y.FRAG_LOADED, r),
          (e.bitrateTest = !1);
      });
  }
  _handleTransmuxComplete(e) {
    var t;
    const r = "main",
      { hls: i } = this,
      { remuxResult: s, chunkMeta: o } = e,
      a = this.getCurrentContext(o);
    if (!a) {
      this.resetWhenMissingContext(o);
      return;
    }
    const { frag: l, part: u, level: c } = a,
      { video: d, text: f, id3: h, initSegment: p } = s,
      { details: g } = c,
      v = this.altAudio ? void 0 : s.audio;
    if (this.fragContextChanged(l)) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (((this.state = k.PARSING), p)) {
      if (p != null && p.tracks) {
        const x = l.initSegment || l;
        this._bufferInitSegment(c, p.tracks, x, o),
          i.trigger(y.FRAG_PARSING_INIT_SEGMENT, {
            frag: x,
            id: r,
            tracks: p.tracks,
          });
      }
      const m = p.initPTS,
        E = p.timescale;
      G(m) &&
        ((this.initPTS[l.cc] = { baseTime: m, timescale: E }),
        i.trigger(y.INIT_PTS_FOUND, {
          frag: l,
          id: r,
          initPTS: m,
          timescale: E,
        }));
    }
    if (d && s.independent !== !1) {
      if (g) {
        const { startPTS: m, endPTS: E, startDTS: x, endDTS: T } = d;
        if (u)
          u.elementaryStreams[d.type] = {
            startPTS: m,
            endPTS: E,
            startDTS: x,
            endDTS: T,
          };
        else if (
          (d.firstKeyFrame &&
            d.independent &&
            o.id === 1 &&
            (this.couldBacktrack = !0),
          d.dropped && d.independent)
        ) {
          const S = this.getMainFwdBufferInfo(),
            R =
              (S ? S.end : this.getLoadPosition()) + this.config.maxBufferHole,
            L = d.firstKeyFramePTS ? d.firstKeyFramePTS : m;
          if (R < L - this.config.maxBufferHole) {
            this.backtrack(l);
            return;
          }
          l.setElementaryStreamInfo(d.type, l.start, E, l.start, T, !0);
        }
        l.setElementaryStreamInfo(d.type, m, E, x, T),
          this.backtrackFragment && (this.backtrackFragment = l),
          this.bufferFragmentData(d, l, u, o);
      }
    } else if (s.independent === !1) {
      this.backtrack(l);
      return;
    }
    if (v) {
      const { startPTS: m, endPTS: E, startDTS: x, endDTS: T } = v;
      u &&
        (u.elementaryStreams[ee.AUDIO] = {
          startPTS: m,
          endPTS: E,
          startDTS: x,
          endDTS: T,
        }),
        l.setElementaryStreamInfo(ee.AUDIO, m, E, x, T),
        this.bufferFragmentData(v, l, u, o);
    }
    if (g && h != null && (t = h.samples) != null && t.length) {
      const m = { id: r, frag: l, details: g, samples: h.samples };
      i.trigger(y.FRAG_PARSING_METADATA, m);
    }
    if (g && f) {
      const m = { id: r, frag: l, details: g, samples: f.samples };
      i.trigger(y.FRAG_PARSING_USERDATA, m);
    }
  }
  _bufferInitSegment(e, t, r, i) {
    if (this.state !== k.PARSING) return;
    (this.audioOnly = !!t.audio && !t.video),
      this.altAudio && !this.audioOnly && delete t.audio;
    const { audio: s, video: o, audiovideo: a } = t;
    if (s) {
      let l = e.audioCodec;
      const u = navigator.userAgent.toLowerCase();
      this.audioCodecSwitch &&
        (l &&
          (l.indexOf("mp4a.40.5") !== -1
            ? (l = "mp4a.40.2")
            : (l = "mp4a.40.5")),
        s.metadata.channelCount !== 1 &&
          u.indexOf("firefox") === -1 &&
          (l = "mp4a.40.5")),
        u.indexOf("android") !== -1 &&
          s.container !== "audio/mpeg" &&
          ((l = "mp4a.40.2"), this.log(`Android: force audio codec to ${l}`)),
        e.audioCodec &&
          e.audioCodec !== l &&
          this.log(
            `Swapping manifest audio codec "${e.audioCodec}" for "${l}"`
          ),
        (s.levelCodec = l),
        (s.id = "main"),
        this.log(
          `Init audio buffer, container:${
            s.container
          }, codecs[selected/level/parsed]=[${l || ""}/${e.audioCodec || ""}/${
            s.codec
          }]`
        );
    }
    o &&
      ((o.levelCodec = e.videoCodec),
      (o.id = "main"),
      this.log(
        `Init video buffer, container:${o.container}, codecs[level/parsed]=[${
          e.videoCodec || ""
        }/${o.codec}]`
      )),
      a &&
        this.log(
          `Init audiovideo buffer, container:${
            a.container
          }, codecs[level/parsed]=[${e.attrs.CODECS || ""}/${a.codec}]`
        ),
      this.hls.trigger(y.BUFFER_CODECS, t),
      Object.keys(t).forEach((l) => {
        const c = t[l].initSegment;
        c != null &&
          c.byteLength &&
          this.hls.trigger(y.BUFFER_APPENDING, {
            type: l,
            data: c,
            frag: r,
            part: null,
            chunkMeta: i,
            parent: r.type,
          });
      }),
      this.tick();
  }
  getMainFwdBufferInfo() {
    return this.getFwdBufferInfo(
      this.mediaBuffer ? this.mediaBuffer : this.media,
      V.MAIN
    );
  }
  backtrack(e) {
    (this.couldBacktrack = !0),
      (this.backtrackFragment = e),
      this.resetTransmuxer(),
      this.flushBufferGap(e),
      this.fragmentTracker.removeFragment(e),
      (this.fragPrevious = null),
      (this.nextLoadPosition = e.start),
      (this.state = k.IDLE);
  }
  checkFragmentChanged() {
    const e = this.media;
    let t = null;
    if (e && e.readyState > 1 && e.seeking === !1) {
      const r = e.currentTime;
      if (
        (se.isBuffered(e, r)
          ? (t = this.getAppendedFrag(r))
          : se.isBuffered(e, r + 0.1) && (t = this.getAppendedFrag(r + 0.1)),
        t)
      ) {
        this.backtrackFragment = null;
        const i = this.fragPlaying,
          s = t.level;
        (!i || t.sn !== i.sn || i.level !== s || t.urlId !== i.urlId) &&
          ((this.fragPlaying = t),
          this.hls.trigger(y.FRAG_CHANGED, { frag: t }),
          (!i || i.level !== s) &&
            this.hls.trigger(y.LEVEL_SWITCHED, { level: s }));
      }
    }
  }
  get nextLevel() {
    const e = this.nextBufferedFrag;
    return e ? e.level : -1;
  }
  get currentFrag() {
    const e = this.media;
    return e ? this.fragPlaying || this.getAppendedFrag(e.currentTime) : null;
  }
  get currentProgramDateTime() {
    const e = this.media;
    if (e) {
      const t = e.currentTime,
        r = this.currentFrag;
      if (r && G(t) && G(r.programDateTime)) {
        const i = r.programDateTime + (t - r.start) * 1e3;
        return new Date(i);
      }
    }
    return null;
  }
  get currentLevel() {
    const e = this.currentFrag;
    return e ? e.level : -1;
  }
  get nextBufferedFrag() {
    const e = this.currentFrag;
    return e ? this.followingBufferedFrag(e) : null;
  }
  get forceStartLoad() {
    return this._forceStartLoad;
  }
}
class Un {
  constructor(e, t = 0, r = 0) {
    (this.halfLife = void 0),
      (this.alpha_ = void 0),
      (this.estimate_ = void 0),
      (this.totalWeight_ = void 0),
      (this.halfLife = e),
      (this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0),
      (this.estimate_ = t),
      (this.totalWeight_ = r);
  }
  sample(e, t) {
    const r = Math.pow(this.alpha_, e);
    (this.estimate_ = t * (1 - r) + r * this.estimate_),
      (this.totalWeight_ += e);
  }
  getTotalWeight() {
    return this.totalWeight_;
  }
  getEstimate() {
    if (this.alpha_) {
      const e = 1 - Math.pow(this.alpha_, this.totalWeight_);
      if (e) return this.estimate_ / e;
    }
    return this.estimate_;
  }
}
class Dv {
  constructor(e, t, r, i = 100) {
    (this.defaultEstimate_ = void 0),
      (this.minWeight_ = void 0),
      (this.minDelayMs_ = void 0),
      (this.slow_ = void 0),
      (this.fast_ = void 0),
      (this.defaultTTFB_ = void 0),
      (this.ttfb_ = void 0),
      (this.defaultEstimate_ = r),
      (this.minWeight_ = 0.001),
      (this.minDelayMs_ = 50),
      (this.slow_ = new Un(e)),
      (this.fast_ = new Un(t)),
      (this.defaultTTFB_ = i),
      (this.ttfb_ = new Un(e));
  }
  update(e, t) {
    const { slow_: r, fast_: i, ttfb_: s } = this;
    r.halfLife !== e &&
      (this.slow_ = new Un(e, r.getEstimate(), r.getTotalWeight())),
      i.halfLife !== t &&
        (this.fast_ = new Un(t, i.getEstimate(), i.getTotalWeight())),
      s.halfLife !== e &&
        (this.ttfb_ = new Un(e, s.getEstimate(), s.getTotalWeight()));
  }
  sample(e, t) {
    e = Math.max(e, this.minDelayMs_);
    const r = 8 * t,
      i = e / 1e3,
      s = r / i;
    this.fast_.sample(i, s), this.slow_.sample(i, s);
  }
  sampleTTFB(e) {
    const t = e / 1e3,
      r = Math.sqrt(2) * Math.exp(-Math.pow(t, 2) / 2);
    this.ttfb_.sample(r, Math.max(e, 5));
  }
  canEstimate() {
    return this.fast_.getTotalWeight() >= this.minWeight_;
  }
  getEstimate() {
    return this.canEstimate()
      ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate())
      : this.defaultEstimate_;
  }
  getEstimateTTFB() {
    return this.ttfb_.getTotalWeight() >= this.minWeight_
      ? this.ttfb_.getEstimate()
      : this.defaultTTFB_;
  }
  destroy() {}
}
class Rv {
  constructor(e) {
    (this.hls = void 0),
      (this.lastLevelLoadSec = 0),
      (this.lastLoadedFragLevel = 0),
      (this._nextAutoLevel = -1),
      (this.timer = -1),
      (this.onCheck = this._abandonRulesCheck.bind(this)),
      (this.fragCurrent = null),
      (this.partCurrent = null),
      (this.bitrateTestDelay = 0),
      (this.bwEstimator = void 0),
      (this.hls = e);
    const t = e.config;
    (this.bwEstimator = new Dv(
      t.abrEwmaSlowVoD,
      t.abrEwmaFastVoD,
      t.abrEwmaDefaultEstimate
    )),
      this.registerListeners();
  }
  registerListeners() {
    const { hls: e } = this;
    e.on(y.FRAG_LOADING, this.onFragLoading, this),
      e.on(y.FRAG_LOADED, this.onFragLoaded, this),
      e.on(y.FRAG_BUFFERED, this.onFragBuffered, this),
      e.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this),
      e.on(y.LEVEL_LOADED, this.onLevelLoaded, this);
  }
  unregisterListeners() {
    const { hls: e } = this;
    e.off(y.FRAG_LOADING, this.onFragLoading, this),
      e.off(y.FRAG_LOADED, this.onFragLoaded, this),
      e.off(y.FRAG_BUFFERED, this.onFragBuffered, this),
      e.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this),
      e.off(y.LEVEL_LOADED, this.onLevelLoaded, this);
  }
  destroy() {
    this.unregisterListeners(),
      this.clearTimer(),
      (this.hls = this.onCheck = null),
      (this.fragCurrent = this.partCurrent = null);
  }
  onFragLoading(e, t) {
    var r;
    const i = t.frag;
    this.ignoreFragment(i) ||
      ((this.fragCurrent = i),
      (this.partCurrent = (r = t.part) != null ? r : null),
      this.clearTimer(),
      (this.timer = self.setInterval(this.onCheck, 100)));
  }
  onLevelSwitching(e, t) {
    this.clearTimer();
  }
  getTimeToLoadFrag(e, t, r, i) {
    const s = e + r / t,
      o = i ? this.lastLevelLoadSec : 0;
    return s + o;
  }
  onLevelLoaded(e, t) {
    const r = this.hls.config,
      { total: i, bwEstimate: s } = t.stats;
    G(i) && G(s) && (this.lastLevelLoadSec = (8 * i) / s),
      t.details.live
        ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive)
        : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD);
  }
  _abandonRulesCheck() {
    const { fragCurrent: e, partCurrent: t, hls: r } = this,
      { autoLevelEnabled: i, media: s } = r;
    if (!e || !s) return;
    const o = performance.now(),
      a = t ? t.stats : e.stats,
      l = t ? t.duration : e.duration,
      u = o - a.loading.start;
    if (a.aborted || (a.loaded && a.loaded === a.total) || e.level === 0) {
      this.clearTimer(), (this._nextAutoLevel = -1);
      return;
    }
    if (!i || s.paused || !s.playbackRate || !s.readyState) return;
    const c = r.mainForwardBufferInfo;
    if (c === null) return;
    const d = this.bwEstimator.getEstimateTTFB(),
      f = Math.abs(s.playbackRate);
    if (u <= Math.max(d, 1e3 * (l / (f * 2)))) return;
    const h = c.len / f;
    if (h >= (2 * l) / f) return;
    const p = a.loading.first ? a.loading.first - a.loading.start : -1,
      g = a.loaded && p > -1,
      v = this.bwEstimator.getEstimate(),
      { levels: m, minAutoLevel: E } = r,
      x = m[e.level],
      T = a.total || Math.max(a.loaded, Math.round((l * x.maxBitrate) / 8));
    let S = u - p;
    S < 1 && g && (S = Math.min(u, (a.loaded * 8) / v));
    const R = g ? (a.loaded * 1e3) / S : 0,
      L = R ? (T - a.loaded) / R : (T * 8) / v + d / 1e3;
    if (L <= h) return;
    const I = R ? R * 8 : v;
    let _ = Number.POSITIVE_INFINITY,
      D;
    for (D = e.level - 1; D > E; D--) {
      const U = m[D].maxBitrate;
      if (
        ((_ = this.getTimeToLoadFrag(d / 1e3, I, l * U, !m[D].details)), _ < h)
      )
        break;
    }
    _ >= L ||
      _ > l * 10 ||
      ((r.nextLoadLevel = D),
      g
        ? this.bwEstimator.sample(u - Math.min(d, p), a.loaded)
        : this.bwEstimator.sampleTTFB(u),
      this.clearTimer(),
      A.warn(`[abr] Fragment ${e.sn}${t ? " part " + t.index : ""} of level ${
        e.level
      } is loading too slowly;
      Time to underbuffer: ${h.toFixed(3)} s
      Estimated load time for current fragment: ${L.toFixed(3)} s
      Estimated load time for down switch fragment: ${_.toFixed(3)} s
      TTFB estimate: ${p}
      Current BW estimate: ${G(v) ? (v / 1024).toFixed(3) : "Unknown"} Kb/s
      New BW estimate: ${(this.bwEstimator.getEstimate() / 1024).toFixed(
        3
      )} Kb/s
      Aborting and switching to level ${D}`),
      e.loader &&
        ((this.fragCurrent = this.partCurrent = null), e.abortRequests()),
      r.trigger(y.FRAG_LOAD_EMERGENCY_ABORTED, { frag: e, part: t, stats: a }));
  }
  onFragLoaded(e, { frag: t, part: r }) {
    const i = r ? r.stats : t.stats;
    if (
      (t.type === V.MAIN &&
        this.bwEstimator.sampleTTFB(i.loading.first - i.loading.start),
      !this.ignoreFragment(t))
    ) {
      if (
        (this.clearTimer(),
        (this.lastLoadedFragLevel = t.level),
        (this._nextAutoLevel = -1),
        this.hls.config.abrMaxWithRealBitrate)
      ) {
        const s = r ? r.duration : t.duration,
          o = this.hls.levels[t.level],
          a = (o.loaded ? o.loaded.bytes : 0) + i.loaded,
          l = (o.loaded ? o.loaded.duration : 0) + s;
        (o.loaded = { bytes: a, duration: l }),
          (o.realBitrate = Math.round((8 * a) / l));
      }
      if (t.bitrateTest) {
        const s = { stats: i, frag: t, part: r, id: t.type };
        this.onFragBuffered(y.FRAG_BUFFERED, s), (t.bitrateTest = !1);
      }
    }
  }
  onFragBuffered(e, t) {
    const { frag: r, part: i } = t,
      s = i != null && i.stats.loaded ? i.stats : r.stats;
    if (s.aborted || this.ignoreFragment(r)) return;
    const o =
      s.parsing.end -
      s.loading.start -
      Math.min(
        s.loading.first - s.loading.start,
        this.bwEstimator.getEstimateTTFB()
      );
    this.bwEstimator.sample(o, s.loaded),
      (s.bwEstimate = this.bwEstimator.getEstimate()),
      r.bitrateTest
        ? (this.bitrateTestDelay = o / 1e3)
        : (this.bitrateTestDelay = 0);
  }
  ignoreFragment(e) {
    return e.type !== V.MAIN || e.sn === "initSegment";
  }
  clearTimer() {
    self.clearInterval(this.timer);
  }
  get nextAutoLevel() {
    const e = this._nextAutoLevel,
      t = this.bwEstimator;
    if (e !== -1 && !t.canEstimate()) return e;
    let r = this.getNextABRAutoLevel();
    if (e !== -1) {
      const i = this.hls.levels;
      if (i.length > Math.max(e, r) && i[e].loadError <= i[r].loadError)
        return e;
    }
    return e !== -1 && (r = Math.min(e, r)), r;
  }
  getNextABRAutoLevel() {
    const { fragCurrent: e, partCurrent: t, hls: r } = this,
      { maxAutoLevel: i, config: s, minAutoLevel: o, media: a } = r,
      l = t ? t.duration : e ? e.duration : 0,
      u = a && a.playbackRate !== 0 ? Math.abs(a.playbackRate) : 1,
      c = this.bwEstimator
        ? this.bwEstimator.getEstimate()
        : s.abrEwmaDefaultEstimate,
      d = r.mainForwardBufferInfo,
      f = (d ? d.len : 0) / u;
    let h = this.findBestLevel(
      c,
      o,
      i,
      f,
      s.abrBandWidthFactor,
      s.abrBandWidthUpFactor
    );
    if (h >= 0) return h;
    A.trace(
      `[abr] ${
        f ? "rebuffering expected" : "buffer is empty"
      }, finding optimal quality level`
    );
    let p = l ? Math.min(l, s.maxStarvationDelay) : s.maxStarvationDelay,
      g = s.abrBandWidthFactor,
      v = s.abrBandWidthUpFactor;
    if (!f) {
      const m = this.bitrateTestDelay;
      m &&
        ((p = (l ? Math.min(l, s.maxLoadingDelay) : s.maxLoadingDelay) - m),
        A.trace(
          `[abr] bitrate test took ${Math.round(
            1e3 * m
          )}ms, set first fragment max fetchDuration to ${Math.round(
            1e3 * p
          )} ms`
        ),
        (g = v = 1));
    }
    return (h = this.findBestLevel(c, o, i, f + p, g, v)), Math.max(h, 0);
  }
  findBestLevel(e, t, r, i, s, o) {
    var a;
    const { fragCurrent: l, partCurrent: u, lastLoadedFragLevel: c } = this,
      { levels: d } = this.hls,
      f = d[c],
      h = !!(f != null && (a = f.details) != null && a.live),
      p = f == null ? void 0 : f.codecSet,
      g = u ? u.duration : l ? l.duration : 0,
      v = this.bwEstimator.getEstimateTTFB() / 1e3;
    let m = t,
      E = -1;
    for (let x = r; x >= t; x--) {
      const T = d[x];
      if (!T || (p && T.codecSet !== p)) {
        T && ((m = Math.min(x, m)), (E = Math.max(x, E)));
        continue;
      }
      E !== -1 &&
        A.trace(
          `[abr] Skipped level(s) ${m}-${E} with CODECS:"${d[E].attrs.CODECS}"; not compatible with "${f.attrs.CODECS}"`
        );
      const S = T.details,
        R =
          (u
            ? S == null
              ? void 0
              : S.partTarget
            : S == null
            ? void 0
            : S.averagetargetduration) || g;
      let L;
      x <= c ? (L = s * e) : (L = o * e);
      const I = d[x].maxBitrate,
        _ = this.getTimeToLoadFrag(v, L, I * R, S === void 0);
      if (
        (A.trace(
          `[abr] level:${x} adjustedbw-bitrate:${Math.round(
            L - I
          )} avgDuration:${R.toFixed(1)} maxFetchDuration:${i.toFixed(
            1
          )} fetchDuration:${_.toFixed(1)}`
        ),
        L > I && (_ === 0 || !G(_) || (h && !this.bitrateTestDelay) || _ < i))
      )
        return x;
    }
    return -1;
  }
  set nextAutoLevel(e) {
    this._nextAutoLevel = e;
  }
}
class b0 {
  constructor() {
    (this.chunks = []), (this.dataLength = 0);
  }
  push(e) {
    this.chunks.push(e), (this.dataLength += e.length);
  }
  flush() {
    const { chunks: e, dataLength: t } = this;
    let r;
    if (e.length) e.length === 1 ? (r = e[0]) : (r = Iv(e, t));
    else return new Uint8Array(0);
    return this.reset(), r;
  }
  reset() {
    (this.chunks.length = 0), (this.dataLength = 0);
  }
}
function Iv(n, e) {
  const t = new Uint8Array(e);
  let r = 0;
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    t.set(s, r), (r += s.length);
  }
  return t;
}
const pd = 100;
class Fv extends du {
  constructor(e, t, r) {
    super(e, t, r, "[audio-stream-controller]", V.AUDIO),
      (this.videoBuffer = null),
      (this.videoTrackCC = -1),
      (this.waitingVideoCC = -1),
      (this.bufferedTrack = null),
      (this.switchingTrack = null),
      (this.trackId = -1),
      (this.waitingData = null),
      (this.mainDetails = null),
      (this.bufferFlushed = !1),
      (this.cachedTrackLoadedData = null),
      this._registerListeners();
  }
  onHandlerDestroying() {
    this._unregisterListeners(),
      (this.mainDetails = null),
      (this.bufferedTrack = null),
      (this.switchingTrack = null);
  }
  _registerListeners() {
    const { hls: e } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.LEVEL_LOADED, this.onLevelLoaded, this),
      e.on(y.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
      e.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
      e.on(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
      e.on(y.ERROR, this.onError, this),
      e.on(y.BUFFER_RESET, this.onBufferReset, this),
      e.on(y.BUFFER_CREATED, this.onBufferCreated, this),
      e.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this),
      e.on(y.INIT_PTS_FOUND, this.onInitPtsFound, this),
      e.on(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const { hls: e } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.LEVEL_LOADED, this.onLevelLoaded, this),
      e.off(y.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
      e.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
      e.off(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
      e.off(y.ERROR, this.onError, this),
      e.off(y.BUFFER_RESET, this.onBufferReset, this),
      e.off(y.BUFFER_CREATED, this.onBufferCreated, this),
      e.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this),
      e.off(y.INIT_PTS_FOUND, this.onInitPtsFound, this),
      e.off(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onInitPtsFound(e, { frag: t, id: r, initPTS: i, timescale: s }) {
    if (r === "main") {
      const o = t.cc;
      (this.initPTS[t.cc] = { baseTime: i, timescale: s }),
        this.log(`InitPTS for cc: ${o} found from main: ${i}`),
        (this.videoTrackCC = o),
        this.state === k.WAITING_INIT_PTS && this.tick();
    }
  }
  startLoad(e) {
    if (!this.levels) {
      (this.startPosition = e), (this.state = k.STOPPED);
      return;
    }
    const t = this.lastCurrentTime;
    this.stopLoad(),
      this.setInterval(pd),
      t > 0 && e === -1
        ? (this.log(
            `Override startPosition with lastCurrentTime @${t.toFixed(3)}`
          ),
          (e = t),
          (this.state = k.IDLE))
        : ((this.loadedmetadata = !1), (this.state = k.WAITING_TRACK)),
      (this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e),
      this.tick();
  }
  doTick() {
    switch (this.state) {
      case k.IDLE:
        this.doTickIdle();
        break;
      case k.WAITING_TRACK: {
        var e;
        const { levels: r, trackId: i } = this,
          s = r == null || (e = r[i]) == null ? void 0 : e.details;
        if (s) {
          if (this.waitForCdnTuneIn(s)) break;
          this.state = k.WAITING_INIT_PTS;
        }
        break;
      }
      case k.FRAG_LOADING_WAITING_RETRY: {
        var t;
        const r = performance.now(),
          i = this.retryDate;
        (!i || r >= i || ((t = this.media) != null && t.seeking)) &&
          (this.log("RetryDate reached, switch back to IDLE state"),
          this.resetStartWhenNotLoaded(this.trackId),
          (this.state = k.IDLE));
        break;
      }
      case k.WAITING_INIT_PTS: {
        const r = this.waitingData;
        if (r) {
          const { frag: i, part: s, cache: o, complete: a } = r;
          if (this.initPTS[i.cc] !== void 0) {
            (this.waitingData = null),
              (this.waitingVideoCC = -1),
              (this.state = k.FRAG_LOADING);
            const l = o.flush(),
              u = { frag: i, part: s, payload: l, networkDetails: null };
            this._handleFragmentLoadProgress(u),
              a && super._handleFragmentLoadComplete(u);
          } else if (this.videoTrackCC !== this.waitingVideoCC)
            this.log(
              `Waiting fragment cc (${i.cc}) cancelled because video is at cc ${this.videoTrackCC}`
            ),
              this.clearWaitingFragment();
          else {
            const l = this.getLoadPosition(),
              u = se.bufferInfo(this.mediaBuffer, l, this.config.maxBufferHole);
            tl(u.end, this.config.maxFragLookUpTolerance, i) < 0 &&
              (this.log(
                `Waiting fragment cc (${i.cc}) @ ${i.start} cancelled because another fragment at ${u.end} is needed`
              ),
              this.clearWaitingFragment());
          }
        } else this.state = k.IDLE;
      }
    }
    this.onTickEnd();
  }
  clearWaitingFragment() {
    const e = this.waitingData;
    e &&
      (this.fragmentTracker.removeFragment(e.frag),
      (this.waitingData = null),
      (this.waitingVideoCC = -1),
      (this.state = k.IDLE));
  }
  resetLoadingState() {
    this.clearWaitingFragment(), super.resetLoadingState();
  }
  onTickEnd() {
    const { media: e } = this;
    !(e != null && e.readyState) || (this.lastCurrentTime = e.currentTime);
  }
  doTickIdle() {
    const { hls: e, levels: t, media: r, trackId: i } = this,
      s = e.config;
    if (
      !(t != null && t[i]) ||
      (!r && (this.startFragRequested || !s.startFragPrefetch))
    )
      return;
    const o = t[i],
      a = o.details;
    if (
      !a ||
      (a.live && this.levelLastLoaded !== i) ||
      this.waitForCdnTuneIn(a)
    ) {
      this.state = k.WAITING_TRACK;
      return;
    }
    const l = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.bufferFlushed &&
      l &&
      ((this.bufferFlushed = !1),
      this.afterBufferFlushed(l, ee.AUDIO, V.AUDIO));
    const u = this.getFwdBufferInfo(l, V.AUDIO);
    if (u === null) return;
    const { bufferedTrack: c, switchingTrack: d } = this;
    if (!d && this._streamEnded(u, a)) {
      e.trigger(y.BUFFER_EOS, { type: "audio" }), (this.state = k.ENDED);
      return;
    }
    const f = this.getFwdBufferInfo(
        this.videoBuffer ? this.videoBuffer : this.media,
        V.MAIN
      ),
      h = u.len,
      p = this.getMaxBufferLength(f == null ? void 0 : f.len);
    if (h >= p && !d) return;
    const v = a.fragments[0].start;
    let m = u.end;
    if (d && r) {
      const S = this.getLoadPosition();
      c && d.attrs !== c.attrs && (m = S),
        a.PTSKnown &&
          S < v &&
          (u.end > v || u.nextStart) &&
          (this.log(
            "Alt audio track ahead of main track, seek to start of alt audio track"
          ),
          (r.currentTime = v + 0.05));
    }
    let E = this.getNextFragment(m, a),
      x = !1;
    if (
      (E &&
        this.isLoopLoading(E, m) &&
        ((x = !!E.gap),
        (E = this.getNextFragmentLoopLoading(E, a, u, V.MAIN, p))),
      !E)
    ) {
      this.bufferFlushed = !0;
      return;
    }
    const T = f && E.start > f.end + a.targetduration;
    if (T || (!(f != null && f.len) && u.len)) {
      const S = this.getAppendedFrag(E.start, V.MAIN);
      if (
        S === null ||
        (x || (x = !!S.gap || (!!T && f.len === 0)),
        (T && !x) || (x && u.nextStart && u.nextStart < S.end))
      )
        return;
    }
    this.loadFragment(E, o, m);
  }
  getMaxBufferLength(e) {
    const t = super.getMaxBufferLength();
    return e ? Math.min(Math.max(t, e), this.config.maxMaxBufferLength) : t;
  }
  onMediaDetaching() {
    (this.videoBuffer = null), super.onMediaDetaching();
  }
  onAudioTracksUpdated(e, { audioTracks: t }) {
    this.resetTransmuxer(), (this.levels = t.map((r) => new li(r)));
  }
  onAudioTrackSwitching(e, t) {
    const r = !!t.url;
    this.trackId = t.id;
    const { fragCurrent: i } = this;
    i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)),
      this.resetLoadingState(),
      r ? this.setInterval(pd) : this.resetTransmuxer(),
      r
        ? ((this.switchingTrack = t), (this.state = k.IDLE))
        : ((this.switchingTrack = null),
          (this.bufferedTrack = t),
          (this.state = k.STOPPED)),
      this.tick();
  }
  onManifestLoading() {
    this.fragmentTracker.removeAllFragments(),
      (this.startPosition = this.lastCurrentTime = 0),
      (this.bufferFlushed = !1),
      (this.levels =
        this.mainDetails =
        this.waitingData =
        this.bufferedTrack =
        this.cachedTrackLoadedData =
        this.switchingTrack =
          null),
      (this.startFragRequested = !1),
      (this.trackId = this.videoTrackCC = this.waitingVideoCC = -1);
  }
  onLevelLoaded(e, t) {
    (this.mainDetails = t.details),
      this.cachedTrackLoadedData !== null &&
        (this.hls.trigger(y.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData),
        (this.cachedTrackLoadedData = null));
  }
  onAudioTrackLoaded(e, t) {
    var r;
    if (this.mainDetails == null) {
      this.cachedTrackLoadedData = t;
      return;
    }
    const { levels: i } = this,
      { details: s, id: o } = t;
    if (!i) {
      this.warn(`Audio tracks were reset while loading level ${o}`);
      return;
    }
    this.log(
      `Track ${o} loaded [${s.startSN},${s.endSN}]${
        s.lastPartSn ? `[part-${s.lastPartSn}-${s.lastPartIndex}]` : ""
      },duration:${s.totalduration}`
    );
    const a = i[o];
    let l = 0;
    if (s.live || ((r = a.details) != null && r.live)) {
      const u = this.mainDetails;
      if (
        (s.fragments[0] || (s.deltaUpdateFailed = !0),
        s.deltaUpdateFailed || !u)
      )
        return;
      !a.details && s.hasProgramDateTime && u.hasProgramDateTime
        ? (x0(s, u), (l = s.fragments[0].start))
        : (l = this.alignPlaylists(s, a.details));
    }
    (a.details = s),
      (this.levelLastLoaded = o),
      !this.startFragRequested &&
        (this.mainDetails || !s.live) &&
        this.setStartPosition(a.details, l),
      this.state === k.WAITING_TRACK &&
        !this.waitForCdnTuneIn(s) &&
        (this.state = k.IDLE),
      this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const { frag: r, part: i, payload: s } = e,
      { config: o, trackId: a, levels: l } = this;
    if (!l) {
      this.warn(
        `Audio tracks were reset while fragment load was in progress. Fragment ${r.sn} of level ${r.level} will not be buffered`
      );
      return;
    }
    const u = l[a];
    if (!u) {
      this.warn("Audio track is undefined on fragment load progress");
      return;
    }
    const c = u.details;
    if (!c) {
      this.warn("Audio track details undefined on fragment load progress"),
        this.removeUnbufferedFrags(r.start);
      return;
    }
    const d = o.defaultAudioCodec || u.audioCodec || "mp4a.40.2";
    let f = this.transmuxer;
    f ||
      (f = this.transmuxer =
        new B0(
          this.hls,
          V.AUDIO,
          this._handleTransmuxComplete.bind(this),
          this._handleTransmuxerFlush.bind(this)
        ));
    const h = this.initPTS[r.cc],
      p = (t = r.initSegment) == null ? void 0 : t.data;
    if (h !== void 0) {
      const v = i ? i.index : -1,
        m = v !== -1,
        E = new lu(r.level, r.sn, r.stats.chunkCount, s.byteLength, v, m);
      f.push(s, p, d, "", r, i, c.totalduration, !1, E, h);
    } else {
      this.log(
        `Unknown video PTS for cc ${r.cc}, waiting for video PTS before demuxing audio frag ${r.sn} of [${c.startSN} ,${c.endSN}],track ${a}`
      );
      const { cache: g } = (this.waitingData = this.waitingData || {
        frag: r,
        part: i,
        cache: new b0(),
        complete: !1,
      });
      g.push(new Uint8Array(s)),
        (this.waitingVideoCC = this.videoTrackCC),
        (this.state = k.WAITING_INIT_PTS);
    }
  }
  _handleFragmentLoadComplete(e) {
    if (this.waitingData) {
      this.waitingData.complete = !0;
      return;
    }
    super._handleFragmentLoadComplete(e);
  }
  onBufferReset() {
    (this.mediaBuffer = this.videoBuffer = null), (this.loadedmetadata = !1);
  }
  onBufferCreated(e, t) {
    const r = t.tracks.audio;
    r && (this.mediaBuffer = r.buffer || null),
      t.tracks.video && (this.videoBuffer = t.tracks.video.buffer || null);
  }
  onFragBuffered(e, t) {
    const { frag: r, part: i } = t;
    if (r.type !== V.AUDIO) {
      if (!this.loadedmetadata && r.type === V.MAIN) {
        const s = this.videoBuffer || this.media;
        s && se.getBuffered(s).length && (this.loadedmetadata = !0);
      }
      return;
    }
    if (this.fragContextChanged(r)) {
      this.warn(
        `Fragment ${r.sn}${i ? " p: " + i.index : ""} of level ${
          r.level
        } finished buffering, but was aborted. state: ${
          this.state
        }, audioSwitch: ${
          this.switchingTrack ? this.switchingTrack.name : "false"
        }`
      );
      return;
    }
    if (r.sn !== "initSegment") {
      this.fragPrevious = r;
      const s = this.switchingTrack;
      s &&
        ((this.bufferedTrack = s),
        (this.switchingTrack = null),
        this.hls.trigger(y.AUDIO_TRACK_SWITCHED, qe({}, s)));
    }
    this.fragBufferedComplete(r, i);
  }
  onError(e, t) {
    var r;
    if (t.fatal) {
      this.state = k.ERROR;
      return;
    }
    switch (t.details) {
      case F.FRAG_GAP:
      case F.FRAG_PARSING_ERROR:
      case F.FRAG_DECRYPT_ERROR:
      case F.FRAG_LOAD_ERROR:
      case F.FRAG_LOAD_TIMEOUT:
      case F.KEY_LOAD_ERROR:
      case F.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(V.AUDIO, t);
        break;
      case F.AUDIO_TRACK_LOAD_ERROR:
      case F.AUDIO_TRACK_LOAD_TIMEOUT:
      case F.LEVEL_PARSING_ERROR:
        !t.levelRetry &&
          this.state === k.WAITING_TRACK &&
          ((r = t.context) == null ? void 0 : r.type) === Q.AUDIO_TRACK &&
          (this.state = k.IDLE);
        break;
      case F.BUFFER_FULL_ERROR:
        if (!t.parent || t.parent !== "audio") return;
        this.reduceLengthAndFlushBuffer(t) &&
          ((this.bufferedTrack = null),
          super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
        break;
      case F.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onBufferFlushed(e, { type: t }) {
    t === ee.AUDIO &&
      ((this.bufferFlushed = !0),
      this.state === k.ENDED && (this.state = k.IDLE));
  }
  _handleTransmuxComplete(e) {
    var t;
    const r = "audio",
      { hls: i } = this,
      { remuxResult: s, chunkMeta: o } = e,
      a = this.getCurrentContext(o);
    if (!a) {
      this.resetWhenMissingContext(o);
      return;
    }
    const { frag: l, part: u, level: c } = a,
      { details: d } = c,
      { audio: f, text: h, id3: p, initSegment: g } = s;
    if (this.fragContextChanged(l) || !d) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (
      ((this.state = k.PARSING),
      this.switchingTrack && f && this.completeAudioSwitch(this.switchingTrack),
      g != null && g.tracks)
    ) {
      const v = l.initSegment || l;
      this._bufferInitSegment(g.tracks, v, o),
        i.trigger(y.FRAG_PARSING_INIT_SEGMENT, {
          frag: v,
          id: r,
          tracks: g.tracks,
        });
    }
    if (f) {
      const { startPTS: v, endPTS: m, startDTS: E, endDTS: x } = f;
      u &&
        (u.elementaryStreams[ee.AUDIO] = {
          startPTS: v,
          endPTS: m,
          startDTS: E,
          endDTS: x,
        }),
        l.setElementaryStreamInfo(ee.AUDIO, v, m, E, x),
        this.bufferFragmentData(f, l, u, o);
    }
    if (p != null && (t = p.samples) != null && t.length) {
      const v = Se({ id: r, frag: l, details: d }, p);
      i.trigger(y.FRAG_PARSING_METADATA, v);
    }
    if (h) {
      const v = Se({ id: r, frag: l, details: d }, h);
      i.trigger(y.FRAG_PARSING_USERDATA, v);
    }
  }
  _bufferInitSegment(e, t, r) {
    if (this.state !== k.PARSING) return;
    e.video && delete e.video;
    const i = e.audio;
    if (!i) return;
    (i.levelCodec = i.codec),
      (i.id = "audio"),
      this.log(
        `Init audio buffer, container:${i.container}, codecs[parsed]=[${i.codec}]`
      ),
      this.hls.trigger(y.BUFFER_CODECS, e);
    const s = i.initSegment;
    if (s != null && s.byteLength) {
      const o = {
        type: "audio",
        frag: t,
        part: null,
        chunkMeta: r,
        parent: t.type,
        data: s,
      };
      this.hls.trigger(y.BUFFER_APPENDING, o);
    }
    this.tick();
  }
  loadFragment(e, t, r) {
    const i = this.fragmentTracker.getState(e);
    if (
      ((this.fragCurrent = e),
      this.switchingTrack || i === Ie.NOT_LOADED || i === Ie.PARTIAL)
    ) {
      var s;
      e.sn === "initSegment"
        ? this._loadInitSegment(e, t)
        : (s = t.details) != null && s.live && !this.initPTS[e.cc]
        ? (this.log(
            `Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`
          ),
          (this.state = k.WAITING_INIT_PTS))
        : ((this.startFragRequested = !0), super.loadFragment(e, t, r));
    } else this.clearTrackerIfNeeded(e);
  }
  completeAudioSwitch(e) {
    const { hls: t, media: r, bufferedTrack: i } = this,
      s = i == null ? void 0 : i.attrs,
      o = e.attrs;
    r &&
      s &&
      (s.CHANNELS !== o.CHANNELS ||
        s.NAME !== o.NAME ||
        s.LANGUAGE !== o.LANGUAGE) &&
      (this.log("Switching audio track : flushing all audio"),
      super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio")),
      (this.bufferedTrack = e),
      (this.switchingTrack = null),
      t.trigger(y.AUDIO_TRACK_SWITCHED, qe({}, e));
  }
}
class wv extends au {
  constructor(e) {
    super(e, "[audio-track-controller]"),
      (this.tracks = []),
      (this.groupId = null),
      (this.tracksInGroup = []),
      (this.trackId = -1),
      (this.currentTrack = null),
      (this.selectDefaultTrack = !0),
      this.registerListeners();
  }
  registerListeners() {
    const { hls: e } = this;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.on(y.LEVEL_LOADING, this.onLevelLoading, this),
      e.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this),
      e.on(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
      e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const { hls: e } = this;
    e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.off(y.LEVEL_LOADING, this.onLevelLoading, this),
      e.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this),
      e.off(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
      e.off(y.ERROR, this.onError, this);
  }
  destroy() {
    this.unregisterListeners(),
      (this.tracks.length = 0),
      (this.tracksInGroup.length = 0),
      (this.currentTrack = null),
      super.destroy();
  }
  onManifestLoading() {
    (this.tracks = []),
      (this.groupId = null),
      (this.tracksInGroup = []),
      (this.trackId = -1),
      (this.currentTrack = null),
      (this.selectDefaultTrack = !0);
  }
  onManifestParsed(e, t) {
    this.tracks = t.audioTracks || [];
  }
  onAudioTrackLoaded(e, t) {
    const { id: r, groupId: i, details: s } = t,
      o = this.tracksInGroup[r];
    if (!o || o.groupId !== i) {
      this.warn(
        `Track with id:${r} and group:${i} not found in active group ${o.groupId}`
      );
      return;
    }
    const a = o.details;
    (o.details = t.details),
      this.log(
        `audio-track ${r} "${o.name}" lang:${o.lang} group:${i} loaded [${s.startSN}-${s.endSN}]`
      ),
      r === this.trackId && this.playlistLoaded(r, t, a);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!(t != null && t.audioGroupIds)) return;
    const r = t.audioGroupIds[t.urlId];
    if (this.groupId !== r) {
      this.groupId = r || null;
      const i = this.tracks.filter((o) => !r || o.groupId === r);
      this.selectDefaultTrack &&
        !i.some((o) => o.default) &&
        (this.selectDefaultTrack = !1),
        (this.tracksInGroup = i);
      const s = { audioTracks: i };
      this.log(
        `Updating audio tracks, ${i.length} track(s) found in group:${r}`
      ),
        this.hls.trigger(y.AUDIO_TRACKS_UPDATED, s),
        this.selectInitialTrack();
    } else
      this.shouldReloadPlaylist(this.currentTrack) &&
        this.setAudioTrack(this.trackId);
  }
  onError(e, t) {
    t.fatal ||
      !t.context ||
      (t.context.type === Q.AUDIO_TRACK &&
        t.context.id === this.trackId &&
        t.context.groupId === this.groupId &&
        ((this.requestScheduled = -1), this.checkRetry(t)));
  }
  get audioTracks() {
    return this.tracksInGroup;
  }
  get audioTrack() {
    return this.trackId;
  }
  set audioTrack(e) {
    (this.selectDefaultTrack = !1), this.setAudioTrack(e);
  }
  setAudioTrack(e) {
    const t = this.tracksInGroup;
    if (e < 0 || e >= t.length) {
      this.warn("Invalid id passed to audio-track controller");
      return;
    }
    this.clearTimer();
    const r = this.currentTrack;
    t[this.trackId];
    const i = t[e],
      { groupId: s, name: o } = i;
    if (
      (this.log(
        `Switching to audio-track ${e} "${o}" lang:${i.lang} group:${s}`
      ),
      (this.trackId = e),
      (this.currentTrack = i),
      (this.selectDefaultTrack = !1),
      this.hls.trigger(y.AUDIO_TRACK_SWITCHING, qe({}, i)),
      i.details && !i.details.live)
    )
      return;
    const a = this.switchParams(i.url, r == null ? void 0 : r.details);
    this.loadPlaylist(a);
  }
  selectInitialTrack() {
    const e = this.tracksInGroup,
      t = this.findTrackId(this.currentTrack) | this.findTrackId(null);
    if (t !== -1) this.setAudioTrack(t);
    else {
      const r = new Error(
        `No track found for running audio group-ID: ${this.groupId} track count: ${e.length}`
      );
      this.warn(r.message),
        this.hls.trigger(y.ERROR, {
          type: K.MEDIA_ERROR,
          details: F.AUDIO_TRACK_LOAD_ERROR,
          fatal: !0,
          error: r,
        });
    }
  }
  findTrackId(e) {
    const t = this.tracksInGroup;
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      if (
        (!this.selectDefaultTrack || i.default) &&
        (!e ||
          (e.attrs["STABLE-RENDITION-ID"] !== void 0 &&
            e.attrs["STABLE-RENDITION-ID"] ===
              i.attrs["STABLE-RENDITION-ID"]) ||
          (e.name === i.name && e.lang === i.lang))
      )
        return i.id;
    }
    return -1;
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.tracksInGroup[this.trackId];
    if (this.shouldLoadPlaylist(t)) {
      const r = t.id,
        i = t.groupId;
      let s = t.url;
      if (e)
        try {
          s = e.addDirectives(s);
        } catch (o) {
          this.warn(
            `Could not construct new URL with HLS Delivery Directives: ${o}`
          );
        }
      this.log(
        `loading audio-track playlist ${r} "${t.name}" lang:${t.lang} group:${i}`
      ),
        this.clearTimer(),
        this.hls.trigger(y.AUDIO_TRACK_LOADING, {
          url: s,
          id: r,
          groupId: i,
          deliveryDirectives: e || null,
        });
    }
  }
}
function N0(n, e) {
  if (n.length !== e.length) return !1;
  for (let t = 0; t < n.length; t++) if (!kv(n[t].attrs, e[t].attrs)) return !1;
  return !0;
}
function kv(n, e) {
  const t = n["STABLE-RENDITION-ID"];
  return t
    ? t === e["STABLE-RENDITION-ID"]
    : ![
        "LANGUAGE",
        "NAME",
        "CHARACTERISTICS",
        "AUTOSELECT",
        "DEFAULT",
        "FORCED",
      ].some((r) => n[r] !== e[r]);
}
const gd = 500;
class _v extends du {
  constructor(e, t, r) {
    super(e, t, r, "[subtitle-stream-controller]", V.SUBTITLE),
      (this.levels = []),
      (this.currentTrackId = -1),
      (this.tracksBuffered = []),
      (this.mainDetails = null),
      this._registerListeners();
  }
  onHandlerDestroying() {
    this._unregisterListeners(), (this.mainDetails = null);
  }
  _registerListeners() {
    const { hls: e } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.LEVEL_LOADED, this.onLevelLoaded, this),
      e.on(y.ERROR, this.onError, this),
      e.on(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
      e.on(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
      e.on(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
      e.on(y.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
      e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this),
      e.on(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const { hls: e } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.LEVEL_LOADED, this.onLevelLoaded, this),
      e.off(y.ERROR, this.onError, this),
      e.off(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
      e.off(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
      e.off(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
      e.off(y.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
      e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this),
      e.off(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  startLoad(e) {
    this.stopLoad(),
      (this.state = k.IDLE),
      this.setInterval(gd),
      (this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e),
      this.tick();
  }
  onManifestLoading() {
    (this.mainDetails = null), this.fragmentTracker.removeAllFragments();
  }
  onMediaDetaching() {
    (this.tracksBuffered = []), super.onMediaDetaching();
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
  }
  onSubtitleFragProcessed(e, t) {
    const { frag: r, success: i } = t;
    if (((this.fragPrevious = r), (this.state = k.IDLE), !i)) return;
    const s = this.tracksBuffered[this.currentTrackId];
    if (!s) return;
    let o;
    const a = r.start;
    for (let u = 0; u < s.length; u++)
      if (a >= s[u].start && a <= s[u].end) {
        o = s[u];
        break;
      }
    const l = r.start + r.duration;
    o ? (o.end = l) : ((o = { start: a, end: l }), s.push(o)),
      this.fragmentTracker.fragBuffered(r);
  }
  onBufferFlushing(e, t) {
    const { startOffset: r, endOffset: i } = t;
    if (r === 0 && i !== Number.POSITIVE_INFINITY) {
      const { currentTrackId: s, levels: o } = this;
      if (!o.length || !o[s] || !o[s].details) return;
      const l = o[s].details.targetduration,
        u = i - l;
      if (u <= 0) return;
      (t.endOffsetSubtitles = Math.max(0, u)),
        this.tracksBuffered.forEach((c) => {
          for (let d = 0; d < c.length; ) {
            if (c[d].end <= u) {
              c.shift();
              continue;
            } else if (c[d].start < u) c[d].start = u;
            else break;
            d++;
          }
        }),
        this.fragmentTracker.removeFragmentsInRange(r, u, V.SUBTITLE);
    }
  }
  onFragBuffered(e, t) {
    if (!this.loadedmetadata && t.frag.type === V.MAIN) {
      var r;
      (r = this.media) != null &&
        r.buffered.length &&
        (this.loadedmetadata = !0);
    }
  }
  onError(e, t) {
    const r = t.frag;
    (r == null ? void 0 : r.type) === V.SUBTITLE &&
      (this.fragCurrent && this.fragCurrent.abortRequests(),
      this.state !== k.STOPPED && (this.state = k.IDLE));
  }
  onSubtitleTracksUpdated(e, { subtitleTracks: t }) {
    if (N0(this.levels, t)) {
      this.levels = t.map((r) => new li(r));
      return;
    }
    (this.tracksBuffered = []),
      (this.levels = t.map((r) => {
        const i = new li(r);
        return (this.tracksBuffered[i.id] = []), i;
      })),
      this.fragmentTracker.removeFragmentsInRange(
        0,
        Number.POSITIVE_INFINITY,
        V.SUBTITLE
      ),
      (this.fragPrevious = null),
      (this.mediaBuffer = null);
  }
  onSubtitleTrackSwitch(e, t) {
    if (
      ((this.currentTrackId = t.id),
      !this.levels.length || this.currentTrackId === -1)
    ) {
      this.clearInterval();
      return;
    }
    const r = this.levels[this.currentTrackId];
    r != null && r.details
      ? (this.mediaBuffer = this.mediaBufferTimeRanges)
      : (this.mediaBuffer = null),
      r && this.setInterval(gd);
  }
  onSubtitleTrackLoaded(e, t) {
    var r;
    const { details: i, id: s } = t,
      { currentTrackId: o, levels: a } = this;
    if (!a.length) return;
    const l = a[o];
    if (s >= a.length || s !== o || !l) return;
    this.mediaBuffer = this.mediaBufferTimeRanges;
    let u = 0;
    if (i.live || ((r = l.details) != null && r.live)) {
      const c = this.mainDetails;
      if (i.deltaUpdateFailed || !c) return;
      const d = c.fragments[0];
      l.details
        ? ((u = this.alignPlaylists(i, l.details)),
          u === 0 && d && ((u = d.start), el(i, u)))
        : i.hasProgramDateTime && c.hasProgramDateTime
        ? (x0(i, c), (u = i.fragments[0].start))
        : d && ((u = d.start), el(i, u));
    }
    (l.details = i),
      (this.levelLastLoaded = s),
      !this.startFragRequested &&
        (this.mainDetails || !i.live) &&
        this.setStartPosition(l.details, u),
      this.tick(),
      i.live &&
        !this.fragCurrent &&
        this.media &&
        this.state === k.IDLE &&
        (ui(null, i.fragments, this.media.currentTime, 0) ||
          (this.warn("Subtitle playlist not aligned with playback"),
          (l.details = void 0)));
  }
  _handleFragmentLoadComplete(e) {
    const { frag: t, payload: r } = e,
      i = t.decryptdata,
      s = this.hls;
    if (
      !this.fragContextChanged(t) &&
      r &&
      r.byteLength > 0 &&
      i &&
      i.key &&
      i.iv &&
      i.method === "AES-128"
    ) {
      const o = performance.now();
      this.decrypter
        .decrypt(new Uint8Array(r), i.key.buffer, i.iv.buffer)
        .catch((a) => {
          throw (
            (s.trigger(y.ERROR, {
              type: K.MEDIA_ERROR,
              details: F.FRAG_DECRYPT_ERROR,
              fatal: !1,
              error: a,
              reason: a.message,
              frag: t,
            }),
            a)
          );
        })
        .then((a) => {
          const l = performance.now();
          s.trigger(y.FRAG_DECRYPTED, {
            frag: t,
            payload: a,
            stats: { tstart: o, tdecrypt: l },
          });
        })
        .catch((a) => {
          this.warn(`${a.name}: ${a.message}`), (this.state = k.IDLE);
        });
    }
  }
  doTick() {
    if (!this.media) {
      this.state = k.IDLE;
      return;
    }
    if (this.state === k.IDLE) {
      const { currentTrackId: e, levels: t } = this,
        r = t[e];
      if (!t.length || !r || !r.details) return;
      const i = r.details,
        s = i.targetduration,
        { config: o } = this,
        a = this.getLoadPosition(),
        l = se.bufferedInfo(
          this.tracksBuffered[this.currentTrackId] || [],
          a - s,
          o.maxBufferHole
        ),
        { end: u, len: c } = l,
        d = this.getFwdBufferInfo(this.media, V.MAIN),
        f = this.getMaxBufferLength(d == null ? void 0 : d.len) + s;
      if (c > f) return;
      const h = i.fragments,
        p = h.length,
        g = i.edge;
      let v = null;
      const m = this.fragPrevious;
      if (u < g) {
        const { maxFragLookUpTolerance: E } = o;
        (v = ui(m, h, Math.max(h[0].start, u), E)),
          !v && m && m.start < h[0].start && (v = h[0]);
      } else v = h[p - 1];
      if (!v) return;
      (v = this.mapToInitFragWhenRequired(v)),
        this.fragmentTracker.getState(v) === Ie.NOT_LOADED &&
          this.loadFragment(v, r, u);
    }
  }
  getMaxBufferLength(e) {
    const t = super.getMaxBufferLength();
    return e ? Math.max(t, e) : t;
  }
  loadFragment(e, t, r) {
    (this.fragCurrent = e),
      e.sn === "initSegment"
        ? this._loadInitSegment(e, t)
        : ((this.startFragRequested = !0), super.loadFragment(e, t, r));
  }
  get mediaBufferTimeRanges() {
    return new Pv(this.tracksBuffered[this.currentTrackId] || []);
  }
}
class Pv {
  constructor(e) {
    this.buffered = void 0;
    const t = (r, i, s) => {
      if (((i = i >>> 0), i > s - 1))
        throw new DOMException(
          `Failed to execute '${r}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${s})`
        );
      return e[i][r];
    };
    this.buffered = {
      get length() {
        return e.length;
      },
      end(r) {
        return t("end", r, e.length);
      },
      start(r) {
        return t("start", r, e.length);
      },
    };
  }
}
class Ov extends au {
  constructor(e) {
    super(e, "[subtitle-track-controller]"),
      (this.media = null),
      (this.tracks = []),
      (this.groupId = null),
      (this.tracksInGroup = []),
      (this.trackId = -1),
      (this.selectDefaultTrack = !0),
      (this.queuedDefaultTrack = -1),
      (this.trackChangeListener = () => this.onTextTracksChanged()),
      (this.asyncPollTrackChange = () => this.pollTrackChange(0)),
      (this.useTextTrackPolling = !1),
      (this.subtitlePollingInterval = -1),
      (this._subtitleDisplay = !0),
      this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(),
      (this.tracks.length = 0),
      (this.tracksInGroup.length = 0),
      (this.trackChangeListener = this.asyncPollTrackChange = null),
      super.destroy();
  }
  get subtitleDisplay() {
    return this._subtitleDisplay;
  }
  set subtitleDisplay(e) {
    (this._subtitleDisplay = e),
      this.trackId > -1 && this.toggleTrackModes(this.trackId);
  }
  registerListeners() {
    const { hls: e } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.on(y.LEVEL_LOADING, this.onLevelLoading, this),
      e.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this),
      e.on(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
      e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const { hls: e } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.off(y.LEVEL_LOADING, this.onLevelLoading, this),
      e.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this),
      e.off(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
      e.off(y.ERROR, this.onError, this);
  }
  onMediaAttached(e, t) {
    (this.media = t.media),
      this.media &&
        (this.queuedDefaultTrack > -1 &&
          ((this.subtitleTrack = this.queuedDefaultTrack),
          (this.queuedDefaultTrack = -1)),
        (this.useTextTrackPolling = !(
          this.media.textTracks && "onchange" in this.media.textTracks
        )),
        this.useTextTrackPolling
          ? this.pollTrackChange(500)
          : this.media.textTracks.addEventListener(
              "change",
              this.asyncPollTrackChange
            ));
  }
  pollTrackChange(e) {
    self.clearInterval(this.subtitlePollingInterval),
      (this.subtitlePollingInterval = self.setInterval(
        this.trackChangeListener,
        e
      ));
  }
  onMediaDetaching() {
    if (!this.media) return;
    self.clearInterval(this.subtitlePollingInterval),
      this.useTextTrackPolling ||
        this.media.textTracks.removeEventListener(
          "change",
          this.asyncPollTrackChange
        ),
      this.trackId > -1 && (this.queuedDefaultTrack = this.trackId),
      Wo(this.media.textTracks).forEach((t) => {
        Jn(t);
      }),
      (this.subtitleTrack = -1),
      (this.media = null);
  }
  onManifestLoading() {
    (this.tracks = []),
      (this.groupId = null),
      (this.tracksInGroup = []),
      (this.trackId = -1),
      (this.selectDefaultTrack = !0);
  }
  onManifestParsed(e, t) {
    this.tracks = t.subtitleTracks;
  }
  onSubtitleTrackLoaded(e, t) {
    const { id: r, details: i } = t,
      { trackId: s } = this,
      o = this.tracksInGroup[s];
    if (!o) {
      this.warn(`Invalid subtitle track id ${r}`);
      return;
    }
    const a = o.details;
    (o.details = t.details),
      this.log(`subtitle track ${r} loaded [${i.startSN}-${i.endSN}]`),
      r === this.trackId && this.playlistLoaded(r, t, a);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!(t != null && t.textGroupIds)) return;
    const r = t.textGroupIds[t.urlId],
      i = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
    if (this.groupId !== r) {
      const s = this.tracks.filter((l) => !r || l.groupId === r);
      this.tracksInGroup = s;
      const o =
        this.findTrackId(i == null ? void 0 : i.name) || this.findTrackId();
      this.groupId = r || null;
      const a = { subtitleTracks: s };
      this.log(
        `Updating subtitle tracks, ${s.length} track(s) found in "${r}" group-id`
      ),
        this.hls.trigger(y.SUBTITLE_TRACKS_UPDATED, a),
        o !== -1 && this.setSubtitleTrack(o, i);
    } else
      this.shouldReloadPlaylist(i) && this.setSubtitleTrack(this.trackId, i);
  }
  findTrackId(e) {
    const t = this.tracksInGroup;
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      if ((!this.selectDefaultTrack || i.default) && (!e || e === i.name))
        return i.id;
    }
    return -1;
  }
  onError(e, t) {
    t.fatal ||
      !t.context ||
      (t.context.type === Q.SUBTITLE_TRACK &&
        t.context.id === this.trackId &&
        t.context.groupId === this.groupId &&
        this.checkRetry(t));
  }
  get subtitleTracks() {
    return this.tracksInGroup;
  }
  get subtitleTrack() {
    return this.trackId;
  }
  set subtitleTrack(e) {
    this.selectDefaultTrack = !1;
    const t = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
    this.setSubtitleTrack(e, t);
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.tracksInGroup[this.trackId];
    if (this.shouldLoadPlaylist(t)) {
      const r = t.id,
        i = t.groupId;
      let s = t.url;
      if (e)
        try {
          s = e.addDirectives(s);
        } catch (o) {
          this.warn(
            `Could not construct new URL with HLS Delivery Directives: ${o}`
          );
        }
      this.log(`Loading subtitle playlist for id ${r}`),
        this.hls.trigger(y.SUBTITLE_TRACK_LOADING, {
          url: s,
          id: r,
          groupId: i,
          deliveryDirectives: e || null,
        });
    }
  }
  toggleTrackModes(e) {
    const { media: t, trackId: r } = this;
    if (!t) return;
    const i = Wo(t.textTracks),
      s = i.filter((a) => a.groupId === this.groupId);
    if (e === -1)
      [].slice.call(i).forEach((a) => {
        a.mode = "disabled";
      });
    else {
      const a = s[r];
      a && (a.mode = "disabled");
    }
    const o = s[e];
    o && (o.mode = this.subtitleDisplay ? "showing" : "hidden");
  }
  setSubtitleTrack(e, t) {
    var r;
    const i = this.tracksInGroup;
    if (!this.media) {
      this.queuedDefaultTrack = e;
      return;
    }
    if (
      (this.trackId !== e && this.toggleTrackModes(e),
      (this.trackId === e && (e === -1 || ((r = i[e]) != null && r.details))) ||
        e < -1 ||
        e >= i.length)
    )
      return;
    this.clearTimer();
    const s = i[e];
    if (
      (this.log(
        `Switching to subtitle-track ${e}` +
          (s ? ` "${s.name}" lang:${s.lang} group:${s.groupId}` : "")
      ),
      (this.trackId = e),
      s)
    ) {
      const { id: o, groupId: a = "", name: l, type: u, url: c } = s;
      this.hls.trigger(y.SUBTITLE_TRACK_SWITCH, {
        id: o,
        groupId: a,
        name: l,
        type: u,
        url: c,
      });
      const d = this.switchParams(s.url, t == null ? void 0 : t.details);
      this.loadPlaylist(d);
    } else this.hls.trigger(y.SUBTITLE_TRACK_SWITCH, { id: e });
  }
  onTextTracksChanged() {
    if (
      (this.useTextTrackPolling ||
        self.clearInterval(this.subtitlePollingInterval),
      !this.media || !this.hls.config.renderTextTracksNatively)
    )
      return;
    let e = -1;
    const t = Wo(this.media.textTracks);
    for (let r = 0; r < t.length; r++)
      if (t[r].mode === "hidden") e = r;
      else if (t[r].mode === "showing") {
        e = r;
        break;
      }
    this.subtitleTrack !== e && (this.subtitleTrack = e);
  }
}
function Wo(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    (r.kind === "subtitles" || r.kind === "captions") &&
      r.label &&
      e.push(n[t]);
  }
  return e;
}
class Bv {
  constructor(e) {
    (this.buffers = void 0),
      (this.queues = { video: [], audio: [], audiovideo: [] }),
      (this.buffers = e);
  }
  append(e, t) {
    const r = this.queues[t];
    r.push(e), r.length === 1 && this.buffers[t] && this.executeNext(t);
  }
  insertAbort(e, t) {
    this.queues[t].unshift(e), this.executeNext(t);
  }
  appendBlocker(e) {
    let t;
    const r = new Promise((s) => {
        t = s;
      }),
      i = {
        execute: t,
        onStart: () => {},
        onComplete: () => {},
        onError: () => {},
      };
    return this.append(i, e), r;
  }
  executeNext(e) {
    const { buffers: t, queues: r } = this,
      i = t[e],
      s = r[e];
    if (s.length) {
      const o = s[0];
      try {
        o.execute();
      } catch (a) {
        A.warn(
          "[buffer-operation-queue]: Unhandled exception executing the current operation"
        ),
          o.onError(a),
          (i != null && i.updating) || (s.shift(), this.executeNext(e));
      }
    }
  }
  shiftAndExecuteNext(e) {
    this.queues[e].shift(), this.executeNext(e);
  }
  current(e) {
    return this.queues[e][0];
  }
}
const md = Js(),
  yd = /([ha]vc.)(?:\.[^.,]+)+/;
class bv {
  constructor(e) {
    (this.details = null),
      (this._objectUrl = null),
      (this.operationQueue = void 0),
      (this.listeners = void 0),
      (this.hls = void 0),
      (this.bufferCodecEventsExpected = 0),
      (this._bufferCodecEventsTotal = 0),
      (this.media = null),
      (this.mediaSource = null),
      (this.lastMpegAudioChunk = null),
      (this.appendError = 0),
      (this.tracks = {}),
      (this.pendingTracks = {}),
      (this.sourceBuffer = void 0),
      (this._onMediaSourceOpen = () => {
        const { media: t, mediaSource: r } = this;
        A.log("[buffer-controller]: Media source opened"),
          t &&
            (t.removeEventListener("emptied", this._onMediaEmptied),
            this.updateMediaElementDuration(),
            this.hls.trigger(y.MEDIA_ATTACHED, { media: t })),
          r && r.removeEventListener("sourceopen", this._onMediaSourceOpen),
          this.checkPendingTracks();
      }),
      (this._onMediaSourceClose = () => {
        A.log("[buffer-controller]: Media source closed");
      }),
      (this._onMediaSourceEnded = () => {
        A.log("[buffer-controller]: Media source ended");
      }),
      (this._onMediaEmptied = () => {
        const { media: t, _objectUrl: r } = this;
        t &&
          t.src !== r &&
          A.error(
            `Media element src was set while attaching MediaSource (${r} > ${t.src})`
          );
      }),
      (this.hls = e),
      this._initSourceBuffer(),
      this.registerListeners();
  }
  hasSourceTypes() {
    return (
      this.getSourceBufferTypes().length > 0 ||
      Object.keys(this.pendingTracks).length > 0
    );
  }
  destroy() {
    this.unregisterListeners(),
      (this.details = null),
      (this.lastMpegAudioChunk = null);
  }
  registerListeners() {
    const { hls: e } = this;
    e.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this),
      e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.on(y.BUFFER_RESET, this.onBufferReset, this),
      e.on(y.BUFFER_APPENDING, this.onBufferAppending, this),
      e.on(y.BUFFER_CODECS, this.onBufferCodecs, this),
      e.on(y.BUFFER_EOS, this.onBufferEos, this),
      e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this),
      e.on(y.LEVEL_UPDATED, this.onLevelUpdated, this),
      e.on(y.FRAG_PARSED, this.onFragParsed, this),
      e.on(y.FRAG_CHANGED, this.onFragChanged, this);
  }
  unregisterListeners() {
    const { hls: e } = this;
    e.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this),
      e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.off(y.BUFFER_RESET, this.onBufferReset, this),
      e.off(y.BUFFER_APPENDING, this.onBufferAppending, this),
      e.off(y.BUFFER_CODECS, this.onBufferCodecs, this),
      e.off(y.BUFFER_EOS, this.onBufferEos, this),
      e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this),
      e.off(y.LEVEL_UPDATED, this.onLevelUpdated, this),
      e.off(y.FRAG_PARSED, this.onFragParsed, this),
      e.off(y.FRAG_CHANGED, this.onFragChanged, this);
  }
  _initSourceBuffer() {
    (this.sourceBuffer = {}),
      (this.operationQueue = new Bv(this.sourceBuffer)),
      (this.listeners = { audio: [], video: [], audiovideo: [] }),
      (this.lastMpegAudioChunk = null);
  }
  onManifestLoading() {
    (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0),
      (this.details = null);
  }
  onManifestParsed(e, t) {
    let r = 2;
    ((t.audio && !t.video) || !t.altAudio) && (r = 1),
      (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r),
      A.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`);
  }
  onMediaAttaching(e, t) {
    const r = (this.media = t.media);
    if (r && md) {
      const i = (this.mediaSource = new md());
      i.addEventListener("sourceopen", this._onMediaSourceOpen),
        i.addEventListener("sourceended", this._onMediaSourceEnded),
        i.addEventListener("sourceclose", this._onMediaSourceClose),
        (r.src = self.URL.createObjectURL(i)),
        (this._objectUrl = r.src),
        r.addEventListener("emptied", this._onMediaEmptied);
    }
  }
  onMediaDetaching() {
    const { media: e, mediaSource: t, _objectUrl: r } = this;
    if (t) {
      if (
        (A.log("[buffer-controller]: media source detaching"),
        t.readyState === "open")
      )
        try {
          t.endOfStream();
        } catch (i) {
          A.warn(
            `[buffer-controller]: onMediaDetaching: ${i.message} while calling endOfStream`
          );
        }
      this.onBufferReset(),
        t.removeEventListener("sourceopen", this._onMediaSourceOpen),
        t.removeEventListener("sourceended", this._onMediaSourceEnded),
        t.removeEventListener("sourceclose", this._onMediaSourceClose),
        e &&
          (e.removeEventListener("emptied", this._onMediaEmptied),
          r && self.URL.revokeObjectURL(r),
          e.src === r
            ? (e.removeAttribute("src"), e.load())
            : A.warn(
                "[buffer-controller]: media.src was changed by a third party - skip cleanup"
              )),
        (this.mediaSource = null),
        (this.media = null),
        (this._objectUrl = null),
        (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal),
        (this.pendingTracks = {}),
        (this.tracks = {});
    }
    this.hls.trigger(y.MEDIA_DETACHED, void 0);
  }
  onBufferReset() {
    this.getSourceBufferTypes().forEach((e) => {
      const t = this.sourceBuffer[e];
      try {
        t &&
          (this.removeBufferListeners(e),
          this.mediaSource && this.mediaSource.removeSourceBuffer(t),
          (this.sourceBuffer[e] = void 0));
      } catch (r) {
        A.warn(`[buffer-controller]: Failed to reset the ${e} buffer`, r);
      }
    }),
      this._initSourceBuffer();
  }
  onBufferCodecs(e, t) {
    const r = this.getSourceBufferTypes().length;
    Object.keys(t).forEach((i) => {
      if (r) {
        const s = this.tracks[i];
        if (s && typeof s.buffer.changeType == "function") {
          const {
              id: o,
              codec: a,
              levelCodec: l,
              container: u,
              metadata: c,
            } = t[i],
            d = (s.levelCodec || s.codec).replace(yd, "$1"),
            f = (l || a).replace(yd, "$1");
          if (d !== f) {
            const h = `${u};codecs=${l || a}`;
            this.appendChangeType(i, h),
              A.log(`[buffer-controller]: switching codec ${d} to ${f}`),
              (this.tracks[i] = {
                buffer: s.buffer,
                codec: a,
                container: u,
                levelCodec: l,
                metadata: c,
                id: o,
              });
          }
        }
      } else this.pendingTracks[i] = t[i];
    }),
      !r &&
        ((this.bufferCodecEventsExpected = Math.max(
          this.bufferCodecEventsExpected - 1,
          0
        )),
        this.mediaSource &&
          this.mediaSource.readyState === "open" &&
          this.checkPendingTracks());
  }
  appendChangeType(e, t) {
    const { operationQueue: r } = this,
      i = {
        execute: () => {
          const s = this.sourceBuffer[e];
          s &&
            (A.log(
              `[buffer-controller]: changing ${e} sourceBuffer type to ${t}`
            ),
            s.changeType(t)),
            r.shiftAndExecuteNext(e);
        },
        onStart: () => {},
        onComplete: () => {},
        onError: (s) => {
          A.warn(
            `[buffer-controller]: Failed to change ${e} SourceBuffer type`,
            s
          );
        },
      };
    r.append(i, e);
  }
  onBufferAppending(e, t) {
    const { hls: r, operationQueue: i, tracks: s } = this,
      { data: o, type: a, frag: l, part: u, chunkMeta: c } = t,
      d = c.buffering[a],
      f = self.performance.now();
    d.start = f;
    const h = l.stats.buffering,
      p = u ? u.stats.buffering : null;
    h.start === 0 && (h.start = f), p && p.start === 0 && (p.start = f);
    const g = s.audio;
    let v = !1;
    a === "audio" &&
      (g == null ? void 0 : g.container) === "audio/mpeg" &&
      ((v =
        !this.lastMpegAudioChunk ||
        c.id === 1 ||
        this.lastMpegAudioChunk.sn !== c.sn),
      (this.lastMpegAudioChunk = c));
    const m = l.start,
      E = {
        execute: () => {
          if (((d.executeStart = self.performance.now()), v)) {
            const x = this.sourceBuffer[a];
            if (x) {
              const T = m - x.timestampOffset;
              Math.abs(T) >= 0.1 &&
                (A.log(
                  `[buffer-controller]: Updating audio SourceBuffer timestampOffset to ${m} (delta: ${T}) sn: ${l.sn})`
                ),
                (x.timestampOffset = m));
            }
          }
          this.appendExecutor(o, a);
        },
        onStart: () => {},
        onComplete: () => {
          const x = self.performance.now();
          (d.executeEnd = d.end = x),
            h.first === 0 && (h.first = x),
            p && p.first === 0 && (p.first = x);
          const { sourceBuffer: T } = this,
            S = {};
          for (const R in T) S[R] = se.getBuffered(T[R]);
          (this.appendError = 0),
            this.hls.trigger(y.BUFFER_APPENDED, {
              type: a,
              frag: l,
              part: u,
              chunkMeta: c,
              parent: l.type,
              timeRanges: S,
            });
        },
        onError: (x) => {
          A.error(
            `[buffer-controller]: Error encountered while trying to append to the ${a} SourceBuffer`,
            x
          );
          const T = {
            type: K.MEDIA_ERROR,
            parent: l.type,
            details: F.BUFFER_APPEND_ERROR,
            frag: l,
            part: u,
            chunkMeta: c,
            error: x,
            err: x,
            fatal: !1,
          };
          x.code === DOMException.QUOTA_EXCEEDED_ERR
            ? (T.details = F.BUFFER_FULL_ERROR)
            : (this.appendError++,
              (T.details = F.BUFFER_APPEND_ERROR),
              this.appendError > r.config.appendErrorMaxRetry &&
                (A.error(
                  `[buffer-controller]: Failed ${r.config.appendErrorMaxRetry} times to append segment in sourceBuffer`
                ),
                (T.fatal = !0))),
            r.trigger(y.ERROR, T);
        },
      };
    i.append(E, a);
  }
  onBufferFlushing(e, t) {
    const { operationQueue: r } = this,
      i = (s) => ({
        execute: this.removeExecutor.bind(this, s, t.startOffset, t.endOffset),
        onStart: () => {},
        onComplete: () => {
          this.hls.trigger(y.BUFFER_FLUSHED, { type: s });
        },
        onError: (o) => {
          A.warn(
            `[buffer-controller]: Failed to remove from ${s} SourceBuffer`,
            o
          );
        },
      });
    t.type
      ? r.append(i(t.type), t.type)
      : this.getSourceBufferTypes().forEach((s) => {
          r.append(i(s), s);
        });
  }
  onFragParsed(e, t) {
    const { frag: r, part: i } = t,
      s = [],
      o = i ? i.elementaryStreams : r.elementaryStreams;
    o[ee.AUDIOVIDEO]
      ? s.push("audiovideo")
      : (o[ee.AUDIO] && s.push("audio"), o[ee.VIDEO] && s.push("video"));
    const a = () => {
      const l = self.performance.now();
      (r.stats.buffering.end = l), i && (i.stats.buffering.end = l);
      const u = i ? i.stats : r.stats;
      this.hls.trigger(y.FRAG_BUFFERED, {
        frag: r,
        part: i,
        stats: u,
        id: r.type,
      });
    };
    s.length === 0 &&
      A.warn(
        `Fragments must have at least one ElementaryStreamType set. type: ${r.type} level: ${r.level} sn: ${r.sn}`
      ),
      this.blockBuffers(a, s);
  }
  onFragChanged(e, t) {
    this.flushBackBuffer();
  }
  onBufferEos(e, t) {
    this.getSourceBufferTypes().reduce((i, s) => {
      const o = this.sourceBuffer[s];
      return (
        o &&
          (!t.type || t.type === s) &&
          ((o.ending = !0),
          o.ended ||
            ((o.ended = !0),
            A.log(`[buffer-controller]: ${s} sourceBuffer now EOS`))),
        i && !!(!o || o.ended)
      );
    }, !0) &&
      (A.log("[buffer-controller]: Queueing mediaSource.endOfStream()"),
      this.blockBuffers(() => {
        this.getSourceBufferTypes().forEach((s) => {
          const o = this.sourceBuffer[s];
          o && (o.ending = !1);
        });
        const { mediaSource: i } = this;
        if (!i || i.readyState !== "open") {
          i &&
            A.info(
              `[buffer-controller]: Could not call mediaSource.endOfStream(). mediaSource.readyState: ${i.readyState}`
            );
          return;
        }
        A.log("[buffer-controller]: Calling mediaSource.endOfStream()"),
          i.endOfStream();
      }));
  }
  onLevelUpdated(e, { details: t }) {
    !t.fragments.length ||
      ((this.details = t),
      this.getSourceBufferTypes().length
        ? this.blockBuffers(this.updateMediaElementDuration.bind(this))
        : this.updateMediaElementDuration());
  }
  flushBackBuffer() {
    const { hls: e, details: t, media: r, sourceBuffer: i } = this;
    if (!r || t === null) return;
    const s = this.getSourceBufferTypes();
    if (!s.length) return;
    const o =
      t.live && e.config.liveBackBufferLength !== null
        ? e.config.liveBackBufferLength
        : e.config.backBufferLength;
    if (!G(o) || o < 0) return;
    const a = r.currentTime,
      l = t.levelTargetDuration,
      u = Math.max(o, l),
      c = Math.floor(a / l) * l - u;
    s.forEach((d) => {
      const f = i[d];
      if (f) {
        const h = se.getBuffered(f);
        if (h.length > 0 && c > h.start(0)) {
          if ((e.trigger(y.BACK_BUFFER_REACHED, { bufferEnd: c }), t.live))
            e.trigger(y.LIVE_BACK_BUFFER_REACHED, { bufferEnd: c });
          else if (f.ended && h.end(h.length - 1) - a < l * 2) {
            A.info(
              `[buffer-controller]: Cannot flush ${d} back buffer while SourceBuffer is in ended state`
            );
            return;
          }
          e.trigger(y.BUFFER_FLUSHING, {
            startOffset: 0,
            endOffset: c,
            type: d,
          });
        }
      }
    });
  }
  updateMediaElementDuration() {
    if (
      !this.details ||
      !this.media ||
      !this.mediaSource ||
      this.mediaSource.readyState !== "open"
    )
      return;
    const { details: e, hls: t, media: r, mediaSource: i } = this,
      s = e.fragments[0].start + e.totalduration,
      o = r.duration,
      a = G(i.duration) ? i.duration : 0;
    e.live && t.config.liveDurationInfinity
      ? (A.log("[buffer-controller]: Media Source duration is set to Infinity"),
        (i.duration = 1 / 0),
        this.updateSeekableRange(e))
      : ((s > a && s > o) || !G(o)) &&
        (A.log(
          `[buffer-controller]: Updating Media Source duration to ${s.toFixed(
            3
          )}`
        ),
        (i.duration = s));
  }
  updateSeekableRange(e) {
    const t = this.mediaSource,
      r = e.fragments;
    if (r.length && e.live && t != null && t.setLiveSeekableRange) {
      const s = Math.max(0, r[0].start),
        o = Math.max(s, s + e.totalduration);
      t.setLiveSeekableRange(s, o);
    }
  }
  checkPendingTracks() {
    const {
        bufferCodecEventsExpected: e,
        operationQueue: t,
        pendingTracks: r,
      } = this,
      i = Object.keys(r).length;
    if ((i && !e) || i === 2) {
      this.createSourceBuffers(r), (this.pendingTracks = {});
      const s = this.getSourceBufferTypes();
      if (s.length)
        this.hls.trigger(y.BUFFER_CREATED, { tracks: this.tracks }),
          s.forEach((o) => {
            t.executeNext(o);
          });
      else {
        const o = new Error(
          "could not create source buffer for media codec(s)"
        );
        this.hls.trigger(y.ERROR, {
          type: K.MEDIA_ERROR,
          details: F.BUFFER_INCOMPATIBLE_CODECS_ERROR,
          fatal: !0,
          error: o,
          reason: o.message,
        });
      }
    }
  }
  createSourceBuffers(e) {
    const { sourceBuffer: t, mediaSource: r } = this;
    if (!r) throw Error("createSourceBuffers called when mediaSource was null");
    for (const i in e)
      if (!t[i]) {
        const s = e[i];
        if (!s)
          throw Error(
            `source buffer exists for track ${i}, however track does not`
          );
        const o = s.levelCodec || s.codec,
          a = `${s.container};codecs=${o}`;
        A.log(`[buffer-controller]: creating sourceBuffer(${a})`);
        try {
          const l = (t[i] = r.addSourceBuffer(a)),
            u = i;
          this.addBufferListener(u, "updatestart", this._onSBUpdateStart),
            this.addBufferListener(u, "updateend", this._onSBUpdateEnd),
            this.addBufferListener(u, "error", this._onSBUpdateError),
            (this.tracks[i] = {
              buffer: l,
              codec: o,
              container: s.container,
              levelCodec: s.levelCodec,
              metadata: s.metadata,
              id: s.id,
            });
        } catch (l) {
          A.error(
            `[buffer-controller]: error while trying to add sourceBuffer: ${l.message}`
          ),
            this.hls.trigger(y.ERROR, {
              type: K.MEDIA_ERROR,
              details: F.BUFFER_ADD_CODEC_ERROR,
              fatal: !1,
              error: l,
              mimeType: a,
            });
        }
      }
  }
  _onSBUpdateStart(e) {
    const { operationQueue: t } = this;
    t.current(e).onStart();
  }
  _onSBUpdateEnd(e) {
    const { operationQueue: t } = this;
    t.current(e).onComplete(), t.shiftAndExecuteNext(e);
  }
  _onSBUpdateError(e, t) {
    const r = new Error(`${e} SourceBuffer error`);
    A.error(`[buffer-controller]: ${r}`, t),
      this.hls.trigger(y.ERROR, {
        type: K.MEDIA_ERROR,
        details: F.BUFFER_APPENDING_ERROR,
        error: r,
        fatal: !1,
      });
    const i = this.operationQueue.current(e);
    i && i.onError(t);
  }
  removeExecutor(e, t, r) {
    const {
        media: i,
        mediaSource: s,
        operationQueue: o,
        sourceBuffer: a,
      } = this,
      l = a[e];
    if (!i || !s || !l) {
      A.warn(
        `[buffer-controller]: Attempting to remove from the ${e} SourceBuffer, but it does not exist`
      ),
        o.shiftAndExecuteNext(e);
      return;
    }
    const u = G(i.duration) ? i.duration : 1 / 0,
      c = G(s.duration) ? s.duration : 1 / 0,
      d = Math.max(0, t),
      f = Math.min(r, u, c);
    f > d && !l.ending
      ? ((l.ended = !1),
        A.log(
          `[buffer-controller]: Removing [${d},${f}] from the ${e} SourceBuffer`
        ),
        l.remove(d, f))
      : o.shiftAndExecuteNext(e);
  }
  appendExecutor(e, t) {
    const { operationQueue: r, sourceBuffer: i } = this,
      s = i[t];
    if (!s) {
      A.warn(
        `[buffer-controller]: Attempting to append to the ${t} SourceBuffer, but it does not exist`
      ),
        r.shiftAndExecuteNext(t);
      return;
    }
    (s.ended = !1), s.appendBuffer(e);
  }
  blockBuffers(e, t = this.getSourceBufferTypes()) {
    if (!t.length) {
      A.log(
        "[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"
      ),
        Promise.resolve().then(e);
      return;
    }
    const { operationQueue: r } = this,
      i = t.map((s) => r.appendBlocker(s));
    Promise.all(i).then(() => {
      e(),
        t.forEach((s) => {
          const o = this.sourceBuffer[s];
          (o != null && o.updating) || r.shiftAndExecuteNext(s);
        });
    });
  }
  getSourceBufferTypes() {
    return Object.keys(this.sourceBuffer);
  }
  addBufferListener(e, t, r) {
    const i = this.sourceBuffer[e];
    if (!i) return;
    const s = r.bind(this, e);
    this.listeners[e].push({ event: t, listener: s }), i.addEventListener(t, s);
  }
  removeBufferListeners(e) {
    const t = this.sourceBuffer[e];
    !t ||
      this.listeners[e].forEach((r) => {
        t.removeEventListener(r.event, r.listener);
      });
  }
}
const Ed = {
    42: 225,
    92: 233,
    94: 237,
    95: 243,
    96: 250,
    123: 231,
    124: 247,
    125: 209,
    126: 241,
    127: 9608,
    128: 174,
    129: 176,
    130: 189,
    131: 191,
    132: 8482,
    133: 162,
    134: 163,
    135: 9834,
    136: 224,
    137: 32,
    138: 232,
    139: 226,
    140: 234,
    141: 238,
    142: 244,
    143: 251,
    144: 193,
    145: 201,
    146: 211,
    147: 218,
    148: 220,
    149: 252,
    150: 8216,
    151: 161,
    152: 42,
    153: 8217,
    154: 9473,
    155: 169,
    156: 8480,
    157: 8226,
    158: 8220,
    159: 8221,
    160: 192,
    161: 194,
    162: 199,
    163: 200,
    164: 202,
    165: 203,
    166: 235,
    167: 206,
    168: 207,
    169: 239,
    170: 212,
    171: 217,
    172: 249,
    173: 219,
    174: 171,
    175: 187,
    176: 195,
    177: 227,
    178: 205,
    179: 204,
    180: 236,
    181: 210,
    182: 242,
    183: 213,
    184: 245,
    185: 123,
    186: 125,
    187: 92,
    188: 94,
    189: 95,
    190: 124,
    191: 8764,
    192: 196,
    193: 228,
    194: 214,
    195: 246,
    196: 223,
    197: 165,
    198: 164,
    199: 9475,
    200: 197,
    201: 229,
    202: 216,
    203: 248,
    204: 9487,
    205: 9491,
    206: 9495,
    207: 9499,
  },
  M0 = function (e) {
    let t = e;
    return Ed.hasOwnProperty(e) && (t = Ed[e]), String.fromCharCode(t);
  },
  pt = 15,
  kt = 100,
  Nv = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
  Mv = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
  Uv = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
  $v = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
  Gv = [
    "white",
    "green",
    "blue",
    "cyan",
    "red",
    "yellow",
    "magenta",
    "black",
    "transparent",
  ];
class Kv {
  constructor() {
    (this.time = null), (this.verboseLevel = 0);
  }
  log(e, t) {
    if (this.verboseLevel >= e) {
      const r = typeof t == "function" ? t() : t;
      A.log(`${this.time} [${e}] ${r}`);
    }
  }
}
const mn = function (e) {
  const t = [];
  for (let r = 0; r < e.length; r++) t.push(e[r].toString(16));
  return t;
};
class U0 {
  constructor(e, t, r, i, s) {
    (this.foreground = void 0),
      (this.underline = void 0),
      (this.italics = void 0),
      (this.background = void 0),
      (this.flash = void 0),
      (this.foreground = e || "white"),
      (this.underline = t || !1),
      (this.italics = r || !1),
      (this.background = i || "black"),
      (this.flash = s || !1);
  }
  reset() {
    (this.foreground = "white"),
      (this.underline = !1),
      (this.italics = !1),
      (this.background = "black"),
      (this.flash = !1);
  }
  setStyles(e) {
    const t = ["foreground", "underline", "italics", "background", "flash"];
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      e.hasOwnProperty(i) && (this[i] = e[i]);
    }
  }
  isDefault() {
    return (
      this.foreground === "white" &&
      !this.underline &&
      !this.italics &&
      this.background === "black" &&
      !this.flash
    );
  }
  equals(e) {
    return (
      this.foreground === e.foreground &&
      this.underline === e.underline &&
      this.italics === e.italics &&
      this.background === e.background &&
      this.flash === e.flash
    );
  }
  copy(e) {
    (this.foreground = e.foreground),
      (this.underline = e.underline),
      (this.italics = e.italics),
      (this.background = e.background),
      (this.flash = e.flash);
  }
  toString() {
    return (
      "color=" +
      this.foreground +
      ", underline=" +
      this.underline +
      ", italics=" +
      this.italics +
      ", background=" +
      this.background +
      ", flash=" +
      this.flash
    );
  }
}
class Vv {
  constructor(e, t, r, i, s, o) {
    (this.uchar = void 0),
      (this.penState = void 0),
      (this.uchar = e || " "),
      (this.penState = new U0(t, r, i, s, o));
  }
  reset() {
    (this.uchar = " "), this.penState.reset();
  }
  setChar(e, t) {
    (this.uchar = e), this.penState.copy(t);
  }
  setPenState(e) {
    this.penState.copy(e);
  }
  equals(e) {
    return this.uchar === e.uchar && this.penState.equals(e.penState);
  }
  copy(e) {
    (this.uchar = e.uchar), this.penState.copy(e.penState);
  }
  isEmpty() {
    return this.uchar === " " && this.penState.isDefault();
  }
}
class Hv {
  constructor(e) {
    (this.chars = void 0),
      (this.pos = void 0),
      (this.currPenState = void 0),
      (this.cueStartTime = void 0),
      (this.logger = void 0),
      (this.chars = []);
    for (let t = 0; t < kt; t++) this.chars.push(new Vv());
    (this.logger = e), (this.pos = 0), (this.currPenState = new U0());
  }
  equals(e) {
    let t = !0;
    for (let r = 0; r < kt; r++)
      if (!this.chars[r].equals(e.chars[r])) {
        t = !1;
        break;
      }
    return t;
  }
  copy(e) {
    for (let t = 0; t < kt; t++) this.chars[t].copy(e.chars[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < kt; t++)
      if (!this.chars[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  setCursor(e) {
    this.pos !== e && (this.pos = e),
      this.pos < 0
        ? (this.logger.log(3, "Negative cursor position " + this.pos),
          (this.pos = 0))
        : this.pos > kt &&
          (this.logger.log(3, "Too large cursor position " + this.pos),
          (this.pos = kt));
  }
  moveCursor(e) {
    const t = this.pos + e;
    if (e > 1)
      for (let r = this.pos + 1; r < t + 1; r++)
        this.chars[r].setPenState(this.currPenState);
    this.setCursor(t);
  }
  backSpace() {
    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
  }
  insertChar(e) {
    e >= 144 && this.backSpace();
    const t = M0(e);
    if (this.pos >= kt) {
      this.logger.log(
        0,
        () =>
          "Cannot insert " +
          e.toString(16) +
          " (" +
          t +
          ") at position " +
          this.pos +
          ". Skipping it!"
      );
      return;
    }
    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1);
  }
  clearFromPos(e) {
    let t;
    for (t = e; t < kt; t++) this.chars[t].reset();
  }
  clear() {
    this.clearFromPos(0), (this.pos = 0), this.currPenState.reset();
  }
  clearToEndOfRow() {
    this.clearFromPos(this.pos);
  }
  getTextString() {
    const e = [];
    let t = !0;
    for (let r = 0; r < kt; r++) {
      const i = this.chars[r].uchar;
      i !== " " && (t = !1), e.push(i);
    }
    return t ? "" : e.join("");
  }
  setPenStyles(e) {
    this.currPenState.setStyles(e),
      this.chars[this.pos].setPenState(this.currPenState);
  }
}
class zo {
  constructor(e) {
    (this.rows = void 0),
      (this.currRow = void 0),
      (this.nrRollUpRows = void 0),
      (this.lastOutputScreen = void 0),
      (this.logger = void 0),
      (this.rows = []);
    for (let t = 0; t < pt; t++) this.rows.push(new Hv(e));
    (this.logger = e),
      (this.currRow = pt - 1),
      (this.nrRollUpRows = null),
      (this.lastOutputScreen = null),
      this.reset();
  }
  reset() {
    for (let e = 0; e < pt; e++) this.rows[e].clear();
    this.currRow = pt - 1;
  }
  equals(e) {
    let t = !0;
    for (let r = 0; r < pt; r++)
      if (!this.rows[r].equals(e.rows[r])) {
        t = !1;
        break;
      }
    return t;
  }
  copy(e) {
    for (let t = 0; t < pt; t++) this.rows[t].copy(e.rows[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < pt; t++)
      if (!this.rows[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  backSpace() {
    this.rows[this.currRow].backSpace();
  }
  clearToEndOfRow() {
    this.rows[this.currRow].clearToEndOfRow();
  }
  insertChar(e) {
    this.rows[this.currRow].insertChar(e);
  }
  setPen(e) {
    this.rows[this.currRow].setPenStyles(e);
  }
  moveCursor(e) {
    this.rows[this.currRow].moveCursor(e);
  }
  setCursor(e) {
    this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e);
  }
  setPAC(e) {
    this.logger.log(2, () => "pacData = " + JSON.stringify(e));
    let t = e.row - 1;
    if (
      (this.nrRollUpRows &&
        t < this.nrRollUpRows - 1 &&
        (t = this.nrRollUpRows - 1),
      this.nrRollUpRows && this.currRow !== t)
    ) {
      for (let a = 0; a < pt; a++) this.rows[a].clear();
      const s = this.currRow + 1 - this.nrRollUpRows,
        o = this.lastOutputScreen;
      if (o) {
        const a = o.rows[s].cueStartTime,
          l = this.logger.time;
        if (a && l !== null && a < l)
          for (let u = 0; u < this.nrRollUpRows; u++)
            this.rows[t - this.nrRollUpRows + u + 1].copy(o.rows[s + u]);
      }
    }
    this.currRow = t;
    const r = this.rows[this.currRow];
    if (e.indent !== null) {
      const s = e.indent,
        o = Math.max(s - 1, 0);
      r.setCursor(e.indent), (e.color = r.chars[o].penState.foreground);
    }
    const i = {
      foreground: e.color,
      underline: e.underline,
      italics: e.italics,
      background: "black",
      flash: !1,
    };
    this.setPen(i);
  }
  setBkgData(e) {
    this.logger.log(2, () => "bkgData = " + JSON.stringify(e)),
      this.backSpace(),
      this.setPen(e),
      this.insertChar(32);
  }
  setRollUpRows(e) {
    this.nrRollUpRows = e;
  }
  rollUp() {
    if (this.nrRollUpRows === null) {
      this.logger.log(3, "roll_up but nrRollUpRows not set yet");
      return;
    }
    this.logger.log(1, () => this.getDisplayText());
    const e = this.currRow + 1 - this.nrRollUpRows,
      t = this.rows.splice(e, 1)[0];
    t.clear(),
      this.rows.splice(this.currRow, 0, t),
      this.logger.log(2, "Rolling up");
  }
  getDisplayText(e) {
    e = e || !1;
    const t = [];
    let r = "",
      i = -1;
    for (let s = 0; s < pt; s++) {
      const o = this.rows[s].getTextString();
      o &&
        ((i = s + 1),
        e ? t.push("Row " + i + ": '" + o + "'") : t.push(o.trim()));
    }
    return (
      t.length > 0 &&
        (e
          ? (r = "[" + t.join(" | ") + "]")
          : (r = t.join(`
`))),
      r
    );
  }
  getTextAndFormat() {
    return this.rows;
  }
}
class vd {
  constructor(e, t, r) {
    (this.chNr = void 0),
      (this.outputFilter = void 0),
      (this.mode = void 0),
      (this.verbose = void 0),
      (this.displayedMemory = void 0),
      (this.nonDisplayedMemory = void 0),
      (this.lastOutputScreen = void 0),
      (this.currRollUpRow = void 0),
      (this.writeScreen = void 0),
      (this.cueStartTime = void 0),
      (this.logger = void 0),
      (this.chNr = e),
      (this.outputFilter = t),
      (this.mode = null),
      (this.verbose = 0),
      (this.displayedMemory = new zo(r)),
      (this.nonDisplayedMemory = new zo(r)),
      (this.lastOutputScreen = new zo(r)),
      (this.currRollUpRow = this.displayedMemory.rows[pt - 1]),
      (this.writeScreen = this.displayedMemory),
      (this.mode = null),
      (this.cueStartTime = null),
      (this.logger = r);
  }
  reset() {
    (this.mode = null),
      this.displayedMemory.reset(),
      this.nonDisplayedMemory.reset(),
      this.lastOutputScreen.reset(),
      this.outputFilter.reset(),
      (this.currRollUpRow = this.displayedMemory.rows[pt - 1]),
      (this.writeScreen = this.displayedMemory),
      (this.mode = null),
      (this.cueStartTime = null);
  }
  getHandler() {
    return this.outputFilter;
  }
  setHandler(e) {
    this.outputFilter = e;
  }
  setPAC(e) {
    this.writeScreen.setPAC(e);
  }
  setBkgData(e) {
    this.writeScreen.setBkgData(e);
  }
  setMode(e) {
    e !== this.mode &&
      ((this.mode = e),
      this.logger.log(2, () => "MODE=" + e),
      this.mode === "MODE_POP-ON"
        ? (this.writeScreen = this.nonDisplayedMemory)
        : ((this.writeScreen = this.displayedMemory), this.writeScreen.reset()),
      this.mode !== "MODE_ROLL-UP" &&
        ((this.displayedMemory.nrRollUpRows = null),
        (this.nonDisplayedMemory.nrRollUpRows = null)),
      (this.mode = e));
  }
  insertChars(e) {
    for (let r = 0; r < e.length; r++) this.writeScreen.insertChar(e[r]);
    const t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
    this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)),
      (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") &&
        (this.logger.log(
          1,
          () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)
        ),
        this.outputDataUpdate());
  }
  ccRCL() {
    this.logger.log(2, "RCL - Resume Caption Loading"),
      this.setMode("MODE_POP-ON");
  }
  ccBS() {
    this.logger.log(2, "BS - BackSpace"),
      this.mode !== "MODE_TEXT" &&
        (this.writeScreen.backSpace(),
        this.writeScreen === this.displayedMemory && this.outputDataUpdate());
  }
  ccAOF() {}
  ccAON() {}
  ccDER() {
    this.logger.log(2, "DER- Delete to End of Row"),
      this.writeScreen.clearToEndOfRow(),
      this.outputDataUpdate();
  }
  ccRU(e) {
    this.logger.log(2, "RU(" + e + ") - Roll Up"),
      (this.writeScreen = this.displayedMemory),
      this.setMode("MODE_ROLL-UP"),
      this.writeScreen.setRollUpRows(e);
  }
  ccFON() {
    this.logger.log(2, "FON - Flash On"),
      this.writeScreen.setPen({ flash: !0 });
  }
  ccRDC() {
    this.logger.log(2, "RDC - Resume Direct Captioning"),
      this.setMode("MODE_PAINT-ON");
  }
  ccTR() {
    this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
  }
  ccRTD() {
    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
  }
  ccEDM() {
    this.logger.log(2, "EDM - Erase Displayed Memory"),
      this.displayedMemory.reset(),
      this.outputDataUpdate(!0);
  }
  ccCR() {
    this.logger.log(2, "CR - Carriage Return"),
      this.writeScreen.rollUp(),
      this.outputDataUpdate(!0);
  }
  ccENM() {
    this.logger.log(2, "ENM - Erase Non-displayed Memory"),
      this.nonDisplayedMemory.reset();
  }
  ccEOC() {
    if (
      (this.logger.log(2, "EOC - End Of Caption"), this.mode === "MODE_POP-ON")
    ) {
      const e = this.displayedMemory;
      (this.displayedMemory = this.nonDisplayedMemory),
        (this.nonDisplayedMemory = e),
        (this.writeScreen = this.nonDisplayedMemory),
        this.logger.log(
          1,
          () => "DISP: " + this.displayedMemory.getDisplayText()
        );
    }
    this.outputDataUpdate(!0);
  }
  ccTO(e) {
    this.logger.log(2, "TO(" + e + ") - Tab Offset"),
      this.writeScreen.moveCursor(e);
  }
  ccMIDROW(e) {
    const t = { flash: !1 };
    if (((t.underline = e % 2 === 1), (t.italics = e >= 46), t.italics))
      t.foreground = "white";
    else {
      const r = Math.floor(e / 2) - 16,
        i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
      t.foreground = i[r];
    }
    this.logger.log(2, "MIDROW: " + JSON.stringify(t)),
      this.writeScreen.setPen(t);
  }
  outputDataUpdate(e = !1) {
    const t = this.logger.time;
    t !== null &&
      this.outputFilter &&
      (this.cueStartTime === null && !this.displayedMemory.isEmpty()
        ? (this.cueStartTime = t)
        : this.displayedMemory.equals(this.lastOutputScreen) ||
          (this.outputFilter.newCue(
            this.cueStartTime,
            t,
            this.lastOutputScreen
          ),
          e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(),
          (this.cueStartTime = this.displayedMemory.isEmpty() ? null : t)),
      this.lastOutputScreen.copy(this.displayedMemory));
  }
  cueSplitAtTime(e) {
    this.outputFilter &&
      (this.displayedMemory.isEmpty() ||
        (this.outputFilter.newCue &&
          this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory),
        (this.cueStartTime = e)));
  }
}
class xd {
  constructor(e, t, r) {
    (this.channels = void 0),
      (this.currentChannel = 0),
      (this.cmdHistory = void 0),
      (this.logger = void 0);
    const i = new Kv();
    (this.channels = [null, new vd(e, t, i), new vd(e + 1, r, i)]),
      (this.cmdHistory = Sd()),
      (this.logger = i);
  }
  getHandler(e) {
    return this.channels[e].getHandler();
  }
  setHandler(e, t) {
    this.channels[e].setHandler(t);
  }
  addData(e, t) {
    let r,
      i,
      s,
      o = !1;
    this.logger.time = e;
    for (let a = 0; a < t.length; a += 2)
      if (((i = t[a] & 127), (s = t[a + 1] & 127), !(i === 0 && s === 0))) {
        if (
          (this.logger.log(
            3,
            "[" + mn([t[a], t[a + 1]]) + "] -> (" + mn([i, s]) + ")"
          ),
          (r = this.parseCmd(i, s)),
          r || (r = this.parseMidrow(i, s)),
          r || (r = this.parsePAC(i, s)),
          r || (r = this.parseBackgroundAttributes(i, s)),
          !r && ((o = this.parseChars(i, s)), o))
        ) {
          const l = this.currentChannel;
          l && l > 0
            ? this.channels[l].insertChars(o)
            : this.logger.log(2, "No channel found yet. TEXT-MODE?");
        }
        !r &&
          !o &&
          this.logger.log(
            2,
            "Couldn't parse cleaned data " +
              mn([i, s]) +
              " orig: " +
              mn([t[a], t[a + 1]])
          );
      }
  }
  parseCmd(e, t) {
    const { cmdHistory: r } = this,
      i = (e === 20 || e === 28 || e === 21 || e === 29) && t >= 32 && t <= 47,
      s = (e === 23 || e === 31) && t >= 33 && t <= 35;
    if (!(i || s)) return !1;
    if (Td(e, t, r))
      return (
        $n(null, null, r),
        this.logger.log(3, "Repeated command (" + mn([e, t]) + ") is dropped"),
        !0
      );
    const o = e === 20 || e === 21 || e === 23 ? 1 : 2,
      a = this.channels[o];
    return (
      e === 20 || e === 21 || e === 28 || e === 29
        ? t === 32
          ? a.ccRCL()
          : t === 33
          ? a.ccBS()
          : t === 34
          ? a.ccAOF()
          : t === 35
          ? a.ccAON()
          : t === 36
          ? a.ccDER()
          : t === 37
          ? a.ccRU(2)
          : t === 38
          ? a.ccRU(3)
          : t === 39
          ? a.ccRU(4)
          : t === 40
          ? a.ccFON()
          : t === 41
          ? a.ccRDC()
          : t === 42
          ? a.ccTR()
          : t === 43
          ? a.ccRTD()
          : t === 44
          ? a.ccEDM()
          : t === 45
          ? a.ccCR()
          : t === 46
          ? a.ccENM()
          : t === 47 && a.ccEOC()
        : a.ccTO(t - 32),
      $n(e, t, r),
      (this.currentChannel = o),
      !0
    );
  }
  parseMidrow(e, t) {
    let r = 0;
    if ((e === 17 || e === 25) && t >= 32 && t <= 47) {
      if ((e === 17 ? (r = 1) : (r = 2), r !== this.currentChannel))
        return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
      const i = this.channels[r];
      return i
        ? (i.ccMIDROW(t), this.logger.log(3, "MIDROW (" + mn([e, t]) + ")"), !0)
        : !1;
    }
    return !1;
  }
  parsePAC(e, t) {
    let r;
    const i = this.cmdHistory,
      s = ((e >= 17 && e <= 23) || (e >= 25 && e <= 31)) && t >= 64 && t <= 127,
      o = (e === 16 || e === 24) && t >= 64 && t <= 95;
    if (!(s || o)) return !1;
    if (Td(e, t, i)) return $n(null, null, i), !0;
    const a = e <= 23 ? 1 : 2;
    t >= 64 && t <= 95
      ? (r = a === 1 ? Nv[e] : Uv[e])
      : (r = a === 1 ? Mv[e] : $v[e]);
    const l = this.channels[a];
    return l
      ? (l.setPAC(this.interpretPAC(r, t)),
        $n(e, t, i),
        (this.currentChannel = a),
        !0)
      : !1;
  }
  interpretPAC(e, t) {
    let r;
    const i = { color: null, italics: !1, indent: null, underline: !1, row: e };
    return (
      t > 95 ? (r = t - 96) : (r = t - 64),
      (i.underline = (r & 1) === 1),
      r <= 13
        ? (i.color = [
            "white",
            "green",
            "blue",
            "cyan",
            "red",
            "yellow",
            "magenta",
            "white",
          ][Math.floor(r / 2)])
        : r <= 15
        ? ((i.italics = !0), (i.color = "white"))
        : (i.indent = Math.floor((r - 16) / 2) * 4),
      i
    );
  }
  parseChars(e, t) {
    let r,
      i = null,
      s = null;
    if (
      (e >= 25 ? ((r = 2), (s = e - 8)) : ((r = 1), (s = e)),
      s >= 17 && s <= 19)
    ) {
      let o;
      s === 17 ? (o = t + 80) : s === 18 ? (o = t + 112) : (o = t + 144),
        this.logger.log(2, "Special char '" + M0(o) + "' in channel " + r),
        (i = [o]);
    } else e >= 32 && e <= 127 && (i = t === 0 ? [e] : [e, t]);
    if (i) {
      const o = mn(i);
      this.logger.log(3, "Char codes =  " + o.join(",")),
        $n(e, t, this.cmdHistory);
    }
    return i;
  }
  parseBackgroundAttributes(e, t) {
    const r = (e === 16 || e === 24) && t >= 32 && t <= 47,
      i = (e === 23 || e === 31) && t >= 45 && t <= 47;
    if (!(r || i)) return !1;
    let s;
    const o = {};
    e === 16 || e === 24
      ? ((s = Math.floor((t - 32) / 2)),
        (o.background = Gv[s]),
        t % 2 === 1 && (o.background = o.background + "_semi"))
      : t === 45
      ? (o.background = "transparent")
      : ((o.foreground = "black"), t === 47 && (o.underline = !0));
    const a = e <= 23 ? 1 : 2;
    return this.channels[a].setBkgData(o), $n(e, t, this.cmdHistory), !0;
  }
  reset() {
    for (let e = 0; e < Object.keys(this.channels).length; e++) {
      const t = this.channels[e];
      t && t.reset();
    }
    this.cmdHistory = Sd();
  }
  cueSplitAtTime(e) {
    for (let t = 0; t < this.channels.length; t++) {
      const r = this.channels[t];
      r && r.cueSplitAtTime(e);
    }
  }
}
function $n(n, e, t) {
  (t.a = n), (t.b = e);
}
function Td(n, e, t) {
  return t.a === n && t.b === e;
}
function Sd() {
  return { a: null, b: null };
}
class Ui {
  constructor(e, t) {
    (this.timelineController = void 0),
      (this.cueRanges = []),
      (this.trackName = void 0),
      (this.startTime = null),
      (this.endTime = null),
      (this.screen = null),
      (this.timelineController = e),
      (this.trackName = t);
  }
  dispatchCue() {
    this.startTime !== null &&
      (this.timelineController.addCues(
        this.trackName,
        this.startTime,
        this.endTime,
        this.screen,
        this.cueRanges
      ),
      (this.startTime = null));
  }
  newCue(e, t, r) {
    (this.startTime === null || this.startTime > e) && (this.startTime = e),
      (this.endTime = t),
      (this.screen = r),
      this.timelineController.createCaptionsTrack(this.trackName);
  }
  reset() {
    (this.cueRanges = []), (this.startTime = null);
  }
}
var mu = (function () {
  if (typeof self < "u" && self.VTTCue) return self.VTTCue;
  const n = ["", "lr", "rl"],
    e = ["start", "middle", "end", "left", "right"];
  function t(a, l) {
    if (typeof l != "string" || !Array.isArray(a)) return !1;
    const u = l.toLowerCase();
    return ~a.indexOf(u) ? u : !1;
  }
  function r(a) {
    return t(n, a);
  }
  function i(a) {
    return t(e, a);
  }
  function s(a, ...l) {
    let u = 1;
    for (; u < arguments.length; u++) {
      const c = arguments[u];
      for (const d in c) a[d] = c[d];
    }
    return a;
  }
  function o(a, l, u) {
    const c = this,
      d = { enumerable: !0 };
    c.hasBeenReset = !1;
    let f = "",
      h = !1,
      p = a,
      g = l,
      v = u,
      m = null,
      E = "",
      x = !0,
      T = "auto",
      S = "start",
      R = 50,
      L = "middle",
      I = 50,
      _ = "middle";
    Object.defineProperty(
      c,
      "id",
      s({}, d, {
        get: function () {
          return f;
        },
        set: function (D) {
          f = "" + D;
        },
      })
    ),
      Object.defineProperty(
        c,
        "pauseOnExit",
        s({}, d, {
          get: function () {
            return h;
          },
          set: function (D) {
            h = !!D;
          },
        })
      ),
      Object.defineProperty(
        c,
        "startTime",
        s({}, d, {
          get: function () {
            return p;
          },
          set: function (D) {
            if (typeof D != "number")
              throw new TypeError("Start time must be set to a number.");
            (p = D), (this.hasBeenReset = !0);
          },
        })
      ),
      Object.defineProperty(
        c,
        "endTime",
        s({}, d, {
          get: function () {
            return g;
          },
          set: function (D) {
            if (typeof D != "number")
              throw new TypeError("End time must be set to a number.");
            (g = D), (this.hasBeenReset = !0);
          },
        })
      ),
      Object.defineProperty(
        c,
        "text",
        s({}, d, {
          get: function () {
            return v;
          },
          set: function (D) {
            (v = "" + D), (this.hasBeenReset = !0);
          },
        })
      ),
      Object.defineProperty(
        c,
        "region",
        s({}, d, {
          get: function () {
            return m;
          },
          set: function (D) {
            (m = D), (this.hasBeenReset = !0);
          },
        })
      ),
      Object.defineProperty(
        c,
        "vertical",
        s({}, d, {
          get: function () {
            return E;
          },
          set: function (D) {
            const U = r(D);
            if (U === !1)
              throw new SyntaxError(
                "An invalid or illegal string was specified."
              );
            (E = U), (this.hasBeenReset = !0);
          },
        })
      ),
      Object.defineProperty(
        c,
        "snapToLines",
        s({}, d, {
          get: function () {
            return x;
          },
          set: function (D) {
            (x = !!D), (this.hasBeenReset = !0);
          },
        })
      ),
      Object.defineProperty(
        c,
        "line",
        s({}, d, {
          get: function () {
            return T;
          },
          set: function (D) {
            if (typeof D != "number" && D !== "auto")
              throw new SyntaxError(
                "An invalid number or illegal string was specified."
              );
            (T = D), (this.hasBeenReset = !0);
          },
        })
      ),
      Object.defineProperty(
        c,
        "lineAlign",
        s({}, d, {
          get: function () {
            return S;
          },
          set: function (D) {
            const U = i(D);
            if (!U)
              throw new SyntaxError(
                "An invalid or illegal string was specified."
              );
            (S = U), (this.hasBeenReset = !0);
          },
        })
      ),
      Object.defineProperty(
        c,
        "position",
        s({}, d, {
          get: function () {
            return R;
          },
          set: function (D) {
            if (D < 0 || D > 100)
              throw new Error("Position must be between 0 and 100.");
            (R = D), (this.hasBeenReset = !0);
          },
        })
      ),
      Object.defineProperty(
        c,
        "positionAlign",
        s({}, d, {
          get: function () {
            return L;
          },
          set: function (D) {
            const U = i(D);
            if (!U)
              throw new SyntaxError(
                "An invalid or illegal string was specified."
              );
            (L = U), (this.hasBeenReset = !0);
          },
        })
      ),
      Object.defineProperty(
        c,
        "size",
        s({}, d, {
          get: function () {
            return I;
          },
          set: function (D) {
            if (D < 0 || D > 100)
              throw new Error("Size must be between 0 and 100.");
            (I = D), (this.hasBeenReset = !0);
          },
        })
      ),
      Object.defineProperty(
        c,
        "align",
        s({}, d, {
          get: function () {
            return _;
          },
          set: function (D) {
            const U = i(D);
            if (!U)
              throw new SyntaxError(
                "An invalid or illegal string was specified."
              );
            (_ = U), (this.hasBeenReset = !0);
          },
        })
      ),
      (c.displayState = void 0);
  }
  return (
    (o.prototype.getCueAsHTML = function () {
      return self.WebVTT.convertCueToDOMTree(self, this.text);
    }),
    o
  );
})();
class Wv {
  decode(e, t) {
    if (!e) return "";
    if (typeof e != "string") throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(e));
  }
}
function $0(n) {
  function e(r, i, s, o) {
    return (r | 0) * 3600 + (i | 0) * 60 + (s | 0) + parseFloat(o || 0);
  }
  const t = n.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return t
    ? parseFloat(t[2]) > 59
      ? e(t[2], t[3], 0, t[4])
      : e(t[1], t[2], t[3], t[4])
    : null;
}
class zv {
  constructor() {
    this.values = Object.create(null);
  }
  set(e, t) {
    !this.get(e) && t !== "" && (this.values[e] = t);
  }
  get(e, t, r) {
    return r
      ? this.has(e)
        ? this.values[e]
        : t[r]
      : this.has(e)
      ? this.values[e]
      : t;
  }
  has(e) {
    return e in this.values;
  }
  alt(e, t, r) {
    for (let i = 0; i < r.length; ++i)
      if (t === r[i]) {
        this.set(e, t);
        break;
      }
  }
  integer(e, t) {
    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
  }
  percent(e, t) {
    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
      const r = parseFloat(t);
      if (r >= 0 && r <= 100) return this.set(e, r), !0;
    }
    return !1;
  }
}
function G0(n, e, t, r) {
  const i = r ? n.split(r) : [n];
  for (const s in i) {
    if (typeof i[s] != "string") continue;
    const o = i[s].split(t);
    if (o.length !== 2) continue;
    const a = o[0],
      l = o[1];
    e(a, l);
  }
}
const rl = new mu(0, 0, ""),
  $i = rl.align === "middle" ? "middle" : "center";
function jv(n, e, t) {
  const r = n;
  function i() {
    const a = $0(n);
    if (a === null) throw new Error("Malformed timestamp: " + r);
    return (n = n.replace(/^[^\sa-zA-Z-]+/, "")), a;
  }
  function s(a, l) {
    const u = new zv();
    G0(
      a,
      function (f, h) {
        let p;
        switch (f) {
          case "region":
            for (let g = t.length - 1; g >= 0; g--)
              if (t[g].id === h) {
                u.set(f, t[g].region);
                break;
              }
            break;
          case "vertical":
            u.alt(f, h, ["rl", "lr"]);
            break;
          case "line":
            (p = h.split(",")),
              u.integer(f, p[0]),
              u.percent(f, p[0]) && u.set("snapToLines", !1),
              u.alt(f, p[0], ["auto"]),
              p.length === 2 && u.alt("lineAlign", p[1], ["start", $i, "end"]);
            break;
          case "position":
            (p = h.split(",")),
              u.percent(f, p[0]),
              p.length === 2 &&
                u.alt("positionAlign", p[1], [
                  "start",
                  $i,
                  "end",
                  "line-left",
                  "line-right",
                  "auto",
                ]);
            break;
          case "size":
            u.percent(f, h);
            break;
          case "align":
            u.alt(f, h, ["start", $i, "end", "left", "right"]);
            break;
        }
      },
      /:/,
      /\s/
    ),
      (l.region = u.get("region", null)),
      (l.vertical = u.get("vertical", ""));
    let c = u.get("line", "auto");
    c === "auto" && rl.line === -1 && (c = -1),
      (l.line = c),
      (l.lineAlign = u.get("lineAlign", "start")),
      (l.snapToLines = u.get("snapToLines", !0)),
      (l.size = u.get("size", 100)),
      (l.align = u.get("align", $i));
    let d = u.get("position", "auto");
    d === "auto" &&
      rl.position === 50 &&
      (d =
        l.align === "start" || l.align === "left"
          ? 0
          : l.align === "end" || l.align === "right"
          ? 100
          : 50),
      (l.position = d);
  }
  function o() {
    n = n.replace(/^\s+/, "");
  }
  if ((o(), (e.startTime = i()), o(), n.slice(0, 3) !== "-->"))
    throw new Error(
      "Malformed time stamp (time stamps must be separated by '-->'): " + r
    );
  (n = n.slice(3)), o(), (e.endTime = i()), o(), s(n, e);
}
function K0(n) {
  return n.replace(
    /<br(?: \/)?>/gi,
    `
`
  );
}
class Yv {
  constructor() {
    (this.state = "INITIAL"),
      (this.buffer = ""),
      (this.decoder = new Wv()),
      (this.regionList = []),
      (this.cue = null),
      (this.oncue = void 0),
      (this.onparsingerror = void 0),
      (this.onflush = void 0);
  }
  parse(e) {
    const t = this;
    e && (t.buffer += t.decoder.decode(e, { stream: !0 }));
    function r() {
      let s = t.buffer,
        o = 0;
      for (
        s = K0(s);
        o < s.length &&
        s[o] !== "\r" &&
        s[o] !==
          `
`;

      )
        ++o;
      const a = s.slice(0, o);
      return (
        s[o] === "\r" && ++o,
        s[o] ===
          `
` && ++o,
        (t.buffer = s.slice(o)),
        a
      );
    }
    function i(s) {
      G0(s, function (o, a) {}, /:/);
    }
    try {
      let s = "";
      if (t.state === "INITIAL") {
        if (!/\r\n|\n/.test(t.buffer)) return this;
        s = r();
        const a = s.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if (!(a != null && a[0]))
          throw new Error("Malformed WebVTT signature.");
        t.state = "HEADER";
      }
      let o = !1;
      for (; t.buffer; ) {
        if (!/\r\n|\n/.test(t.buffer)) return this;
        switch ((o ? (o = !1) : (s = r()), t.state)) {
          case "HEADER":
            /:/.test(s) ? i(s) : s || (t.state = "ID");
            continue;
          case "NOTE":
            s || (t.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(s)) {
              t.state = "NOTE";
              break;
            }
            if (!s) continue;
            if (
              ((t.cue = new mu(0, 0, "")),
              (t.state = "CUE"),
              s.indexOf("-->") === -1)
            ) {
              t.cue.id = s;
              continue;
            }
          case "CUE":
            if (!t.cue) {
              t.state = "BADCUE";
              continue;
            }
            try {
              jv(s, t.cue, t.regionList);
            } catch {
              (t.cue = null), (t.state = "BADCUE");
              continue;
            }
            t.state = "CUETEXT";
            continue;
          case "CUETEXT":
            {
              const a = s.indexOf("-->") !== -1;
              if (!s || (a && (o = !0))) {
                t.oncue && t.cue && t.oncue(t.cue),
                  (t.cue = null),
                  (t.state = "ID");
                continue;
              }
              if (t.cue === null) continue;
              t.cue.text &&
                (t.cue.text += `
`),
                (t.cue.text += s);
            }
            continue;
          case "BADCUE":
            s || (t.state = "ID");
        }
      }
    } catch {
      t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue),
        (t.cue = null),
        (t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE");
    }
    return this;
  }
  flush() {
    const e = this;
    try {
      if (
        ((e.cue || e.state === "HEADER") &&
          ((e.buffer += `

`),
          e.parse()),
        e.state === "INITIAL" || e.state === "BADWEBVTT")
      )
        throw new Error("Malformed WebVTT signature.");
    } catch (t) {
      e.onparsingerror && e.onparsingerror(t);
    }
    return e.onflush && e.onflush(), this;
  }
}
const Xv = /\r\n|\n\r|\n|\r/g,
  jo = function (e, t, r = 0) {
    return e.slice(r, r + t.length) === t;
  },
  qv = function (e) {
    let t = parseInt(e.slice(-3));
    const r = parseInt(e.slice(-6, -4)),
      i = parseInt(e.slice(-9, -7)),
      s = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
    if (!G(t) || !G(r) || !G(i) || !G(s))
      throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
    return (t += 1e3 * r), (t += 60 * 1e3 * i), (t += 60 * 60 * 1e3 * s), t;
  },
  Yo = function (e) {
    let t = 5381,
      r = e.length;
    for (; r; ) t = (t * 33) ^ e.charCodeAt(--r);
    return (t >>> 0).toString();
  };
function yu(n, e, t) {
  return Yo(n.toString()) + Yo(e.toString()) + Yo(t);
}
const Qv = function (e, t, r) {
  let i = e[t],
    s = e[i.prevCC];
  if (!s || (!s.new && i.new)) {
    (e.ccOffset = e.presentationOffset = i.start), (i.new = !1);
    return;
  }
  for (; (o = s) != null && o.new; ) {
    var o;
    (e.ccOffset += i.start - s.start), (i.new = !1), (i = s), (s = e[i.prevCC]);
  }
  e.presentationOffset = r;
};
function Zv(n, e, t, r, i, s, o) {
  const a = new Yv(),
    l = wt(new Uint8Array(n))
      .trim()
      .replace(
        Xv,
        `
`
      ).split(`
`),
    u = [],
    c = uv(e.baseTime, e.timescale);
  let d = "00:00.000",
    f = 0,
    h = 0,
    p,
    g = !0;
  (a.oncue = function (v) {
    const m = t[r];
    let E = t.ccOffset;
    const x = (f - c) / 9e4;
    m != null &&
      m.new &&
      (h !== void 0 ? (E = t.ccOffset = m.start) : Qv(t, r, x)),
      x && (E = x - t.presentationOffset);
    const T = v.endTime - v.startTime,
      S = st((v.startTime + E - h) * 9e4, i * 9e4) / 9e4;
    (v.startTime = Math.max(S, 0)), (v.endTime = Math.max(S + T, 0));
    const R = v.text.trim();
    (v.text = decodeURIComponent(encodeURIComponent(R))),
      v.id || (v.id = yu(v.startTime, v.endTime, R)),
      v.endTime > 0 && u.push(v);
  }),
    (a.onparsingerror = function (v) {
      p = v;
    }),
    (a.onflush = function () {
      if (p) {
        o(p);
        return;
      }
      s(u);
    }),
    l.forEach((v) => {
      if (g)
        if (jo(v, "X-TIMESTAMP-MAP=")) {
          (g = !1),
            v
              .slice(16)
              .split(",")
              .forEach((m) => {
                jo(m, "LOCAL:")
                  ? (d = m.slice(6))
                  : jo(m, "MPEGTS:") && (f = parseInt(m.slice(7)));
              });
          try {
            h = qv(d) / 1e3;
          } catch (m) {
            p = m;
          }
          return;
        } else v === "" && (g = !1);
      a.parse(
        v +
          `
`
      );
    }),
    a.flush();
}
const Xo = "stpp.ttml.im1t",
  V0 = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
  H0 = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
  Jv = {
    left: "start",
    center: "center",
    right: "end",
    start: "start",
    end: "end",
  };
function Ad(n, e, t, r) {
  const i = X(new Uint8Array(n), ["mdat"]);
  if (i.length === 0) {
    r(new Error("Could not parse IMSC1 mdat"));
    return;
  }
  const s = i.map((a) => wt(a)),
    o = lv(e.baseTime, 1, e.timescale);
  try {
    s.forEach((a) => t(ex(a, o)));
  } catch (a) {
    r(a);
  }
}
function ex(n, e) {
  const i = new DOMParser()
    .parseFromString(n, "text/xml")
    .getElementsByTagName("tt")[0];
  if (!i) throw new Error("Invalid ttml");
  const s = {
      frameRate: 30,
      subFrameRate: 1,
      frameRateMultiplier: 0,
      tickRate: 0,
    },
    o = Object.keys(s).reduce(
      (d, f) => ((d[f] = i.getAttribute(`ttp:${f}`) || s[f]), d),
      {}
    ),
    a = i.getAttribute("xml:space") !== "preserve",
    l = Ld(qo(i, "styling", "style")),
    u = Ld(qo(i, "layout", "region")),
    c = qo(i, "body", "[begin]");
  return [].map
    .call(c, (d) => {
      const f = W0(d, a);
      if (!f || !d.hasAttribute("begin")) return null;
      const h = Zo(d.getAttribute("begin"), o),
        p = Zo(d.getAttribute("dur"), o);
      let g = Zo(d.getAttribute("end"), o);
      if (h === null) throw Cd(d);
      if (g === null) {
        if (p === null) throw Cd(d);
        g = h + p;
      }
      const v = new mu(h - e, g - e, f);
      v.id = yu(v.startTime, v.endTime, v.text);
      const m = u[d.getAttribute("region")],
        E = l[d.getAttribute("style")],
        x = tx(m, E, l),
        { textAlign: T } = x;
      if (T) {
        const S = Jv[T];
        S && (v.lineAlign = S), (v.align = T);
      }
      return Se(v, x), v;
    })
    .filter((d) => d !== null);
}
function qo(n, e, t) {
  const r = n.getElementsByTagName(e)[0];
  return r ? [].slice.call(r.querySelectorAll(t)) : [];
}
function Ld(n) {
  return n.reduce((e, t) => {
    const r = t.getAttribute("xml:id");
    return r && (e[r] = t), e;
  }, {});
}
function W0(n, e) {
  return [].slice.call(n.childNodes).reduce((t, r, i) => {
    var s;
    return r.nodeName === "br" && i
      ? t +
          `
`
      : (s = r.childNodes) != null && s.length
      ? W0(r, e)
      : e
      ? t + r.textContent.trim().replace(/\s+/g, " ")
      : t + r.textContent;
  }, "");
}
function tx(n, e, t) {
  const r = "http://www.w3.org/ns/ttml#styling";
  let i = null;
  const s = [
      "displayAlign",
      "textAlign",
      "color",
      "backgroundColor",
      "fontSize",
      "fontFamily",
    ],
    o = n != null && n.hasAttribute("style") ? n.getAttribute("style") : null;
  return (
    o && t.hasOwnProperty(o) && (i = t[o]),
    s.reduce((a, l) => {
      const u = Qo(e, r, l) || Qo(n, r, l) || Qo(i, r, l);
      return u && (a[l] = u), a;
    }, {})
  );
}
function Qo(n, e, t) {
  return n && n.hasAttributeNS(e, t) ? n.getAttributeNS(e, t) : null;
}
function Cd(n) {
  return new Error(`Could not parse ttml timestamp ${n}`);
}
function Zo(n, e) {
  if (!n) return null;
  let t = $0(n);
  return (
    t === null && (V0.test(n) ? (t = nx(n, e)) : H0.test(n) && (t = rx(n, e))),
    t
  );
}
function nx(n, e) {
  const t = V0.exec(n),
    r = (t[4] | 0) + (t[5] | 0) / e.subFrameRate;
  return (t[1] | 0) * 3600 + (t[2] | 0) * 60 + (t[3] | 0) + r / e.frameRate;
}
function rx(n, e) {
  const t = H0.exec(n),
    r = Number(t[1]);
  switch (t[2]) {
    case "h":
      return r * 3600;
    case "m":
      return r * 60;
    case "ms":
      return r * 1e3;
    case "f":
      return r / e.frameRate;
    case "t":
      return r / e.tickRate;
  }
  return r;
}
class ix {
  constructor(e) {
    if (
      ((this.hls = void 0),
      (this.media = null),
      (this.config = void 0),
      (this.enabled = !0),
      (this.Cues = void 0),
      (this.textTracks = []),
      (this.tracks = []),
      (this.initPTS = []),
      (this.unparsedVttFrags = []),
      (this.captionsTracks = {}),
      (this.nonNativeCaptionsTracks = {}),
      (this.cea608Parser1 = void 0),
      (this.cea608Parser2 = void 0),
      (this.lastSn = -1),
      (this.lastPartIndex = -1),
      (this.prevCC = -1),
      (this.vttCCs = Dd()),
      (this.captionsProperties = void 0),
      (this.hls = e),
      (this.config = e.config),
      (this.Cues = e.config.cueHandler),
      (this.captionsProperties = {
        textTrack1: {
          label: this.config.captionsTextTrack1Label,
          languageCode: this.config.captionsTextTrack1LanguageCode,
        },
        textTrack2: {
          label: this.config.captionsTextTrack2Label,
          languageCode: this.config.captionsTextTrack2LanguageCode,
        },
        textTrack3: {
          label: this.config.captionsTextTrack3Label,
          languageCode: this.config.captionsTextTrack3LanguageCode,
        },
        textTrack4: {
          label: this.config.captionsTextTrack4Label,
          languageCode: this.config.captionsTextTrack4LanguageCode,
        },
      }),
      this.config.enableCEA708Captions)
    ) {
      const t = new Ui(this, "textTrack1"),
        r = new Ui(this, "textTrack2"),
        i = new Ui(this, "textTrack3"),
        s = new Ui(this, "textTrack4");
      (this.cea608Parser1 = new xd(1, t, r)),
        (this.cea608Parser2 = new xd(3, i, s));
    }
    e.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this),
      e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this),
      e.on(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
      e.on(y.FRAG_LOADING, this.onFragLoading, this),
      e.on(y.FRAG_LOADED, this.onFragLoaded, this),
      e.on(y.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
      e.on(y.FRAG_DECRYPTED, this.onFragDecrypted, this),
      e.on(y.INIT_PTS_FOUND, this.onInitPtsFound, this),
      e.on(y.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
      e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  destroy() {
    const { hls: e } = this;
    e.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this),
      e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this),
      e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.MANIFEST_LOADED, this.onManifestLoaded, this),
      e.off(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
      e.off(y.FRAG_LOADING, this.onFragLoading, this),
      e.off(y.FRAG_LOADED, this.onFragLoaded, this),
      e.off(y.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
      e.off(y.FRAG_DECRYPTED, this.onFragDecrypted, this),
      e.off(y.INIT_PTS_FOUND, this.onInitPtsFound, this),
      e.off(y.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
      e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this),
      (this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null);
  }
  addCues(e, t, r, i, s) {
    let o = !1;
    for (let a = s.length; a--; ) {
      const l = s[a],
        u = ox(l[0], l[1], t, r);
      if (
        u >= 0 &&
        ((l[0] = Math.min(l[0], t)),
        (l[1] = Math.max(l[1], r)),
        (o = !0),
        u / (r - t) > 0.5)
      )
        return;
    }
    if ((o || s.push([t, r]), this.config.renderTextTracksNatively)) {
      const a = this.captionsTracks[e];
      this.Cues.newCue(a, t, r, i);
    } else {
      const a = this.Cues.newCue(null, t, r, i);
      this.hls.trigger(y.CUES_PARSED, { type: "captions", cues: a, track: e });
    }
  }
  onInitPtsFound(e, { frag: t, id: r, initPTS: i, timescale: s }) {
    const { unparsedVttFrags: o } = this;
    r === "main" && (this.initPTS[t.cc] = { baseTime: i, timescale: s }),
      o.length &&
        ((this.unparsedVttFrags = []),
        o.forEach((a) => {
          this.onFragLoaded(y.FRAG_LOADED, a);
        }));
  }
  getExistingTrack(e) {
    const { media: t } = this;
    if (t)
      for (let r = 0; r < t.textTracks.length; r++) {
        const i = t.textTracks[r];
        if (i[e]) return i;
      }
    return null;
  }
  createCaptionsTrack(e) {
    this.config.renderTextTracksNatively
      ? this.createNativeTrack(e)
      : this.createNonNativeTrack(e);
  }
  createNativeTrack(e) {
    if (this.captionsTracks[e]) return;
    const { captionsProperties: t, captionsTracks: r, media: i } = this,
      { label: s, languageCode: o } = t[e],
      a = this.getExistingTrack(e);
    if (a) (r[e] = a), Jn(r[e]), h0(r[e], i);
    else {
      const l = this.createTextTrack("captions", s, o);
      l && ((l[e] = !0), (r[e] = l));
    }
  }
  createNonNativeTrack(e) {
    if (this.nonNativeCaptionsTracks[e]) return;
    const t = this.captionsProperties[e];
    if (!t) return;
    const r = t.label,
      i = {
        _id: e,
        label: r,
        kind: "captions",
        default: t.media ? !!t.media.default : !1,
        closedCaptions: t.media,
      };
    (this.nonNativeCaptionsTracks[e] = i),
      this.hls.trigger(y.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [i] });
  }
  createTextTrack(e, t, r) {
    const i = this.media;
    if (!!i) return i.addTextTrack(e, t, r);
  }
  onMediaAttaching(e, t) {
    (this.media = t.media), this._cleanTracks();
  }
  onMediaDetaching() {
    const { captionsTracks: e } = this;
    Object.keys(e).forEach((t) => {
      Jn(e[t]), delete e[t];
    }),
      (this.nonNativeCaptionsTracks = {});
  }
  onManifestLoading() {
    (this.lastSn = -1),
      (this.lastPartIndex = -1),
      (this.prevCC = -1),
      (this.vttCCs = Dd()),
      this._cleanTracks(),
      (this.tracks = []),
      (this.captionsTracks = {}),
      (this.nonNativeCaptionsTracks = {}),
      (this.textTracks = []),
      (this.unparsedVttFrags = this.unparsedVttFrags || []),
      (this.initPTS = []),
      this.cea608Parser1 &&
        this.cea608Parser2 &&
        (this.cea608Parser1.reset(), this.cea608Parser2.reset());
  }
  _cleanTracks() {
    const { media: e } = this;
    if (!e) return;
    const t = e.textTracks;
    if (t) for (let r = 0; r < t.length; r++) Jn(t[r]);
  }
  onSubtitleTracksUpdated(e, t) {
    const r = t.subtitleTracks || [],
      i = r.some((s) => s.textCodec === Xo);
    if (this.config.enableWebVTT || (i && this.config.enableIMSC1)) {
      if (N0(this.tracks, r)) {
        this.tracks = r;
        return;
      }
      if (
        ((this.textTracks = []),
        (this.tracks = r),
        this.config.renderTextTracksNatively)
      ) {
        const o = this.media ? this.media.textTracks : null;
        this.tracks.forEach((a, l) => {
          let u;
          if (o && l < o.length) {
            let c = null;
            for (let d = 0; d < o.length; d++)
              if (sx(o[d], a)) {
                c = o[d];
                break;
              }
            c && (u = c);
          }
          if (u) Jn(u);
          else {
            const c = this._captionsOrSubtitlesFromCharacteristics(a);
            (u = this.createTextTrack(c, a.name, a.lang)),
              u && (u.mode = "disabled");
          }
          u && ((u.groupId = a.groupId), this.textTracks.push(u));
        });
      } else if (this.tracks.length) {
        const o = this.tracks.map((a) => ({
          label: a.name,
          kind: a.type.toLowerCase(),
          default: a.default,
          subtitleTrack: a,
        }));
        this.hls.trigger(y.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: o });
      }
    }
  }
  _captionsOrSubtitlesFromCharacteristics(e) {
    if (e.attrs.CHARACTERISTICS) {
      const t = /transcribes-spoken-dialog/gi.test(e.attrs.CHARACTERISTICS),
        r = /describes-music-and-sound/gi.test(e.attrs.CHARACTERISTICS);
      if (t && r) return "captions";
    }
    return "subtitles";
  }
  onManifestLoaded(e, t) {
    this.config.enableCEA708Captions &&
      t.captions &&
      t.captions.forEach((r) => {
        const i = /(?:CC|SERVICE)([1-4])/.exec(r.instreamId);
        if (!i) return;
        const s = `textTrack${i[1]}`,
          o = this.captionsProperties[s];
        !o ||
          ((o.label = r.name),
          r.lang && (o.languageCode = r.lang),
          (o.media = r));
      });
  }
  closedCaptionsForLevel(e) {
    const t = this.hls.levels[e.level];
    return t == null ? void 0 : t.attrs["CLOSED-CAPTIONS"];
  }
  onFragLoading(e, t) {
    const {
      cea608Parser1: r,
      cea608Parser2: i,
      lastSn: s,
      lastPartIndex: o,
    } = this;
    if (!(!this.enabled || !(r && i)) && t.frag.type === V.MAIN) {
      var a, l;
      const u = t.frag.sn,
        c =
          (a = t == null || (l = t.part) == null ? void 0 : l.index) != null
            ? a
            : -1;
      u === s + 1 || (u === s && c === o + 1) || (r.reset(), i.reset()),
        (this.lastSn = u),
        (this.lastPartIndex = c);
    }
  }
  onFragLoaded(e, t) {
    const { frag: r, payload: i } = t,
      { initPTS: s, unparsedVttFrags: o } = this;
    if (r.type === V.SUBTITLE)
      if (i.byteLength) {
        if (!s[r.cc]) {
          o.push(t),
            s.length &&
              this.hls.trigger(y.SUBTITLE_FRAG_PROCESSED, {
                success: !1,
                frag: r,
                error: new Error("Missing initial subtitle PTS"),
              });
          return;
        }
        const a = r.decryptdata,
          l = "stats" in t;
        if (a == null || !a.encrypted || l) {
          const u = this.tracks[r.level],
            c = this.vttCCs;
          c[r.cc] ||
            ((c[r.cc] = { start: r.start, prevCC: this.prevCC, new: !0 }),
            (this.prevCC = r.cc)),
            u && u.textCodec === Xo
              ? this._parseIMSC1(r, i)
              : this._parseVTTs(r, i, c);
        }
      } else
        this.hls.trigger(y.SUBTITLE_FRAG_PROCESSED, {
          success: !1,
          frag: r,
          error: new Error("Empty subtitle payload"),
        });
  }
  _parseIMSC1(e, t) {
    const r = this.hls;
    Ad(
      t,
      this.initPTS[e.cc],
      (i) => {
        this._appendCues(i, e.level),
          r.trigger(y.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: e });
      },
      (i) => {
        A.log(`Failed to parse IMSC1: ${i}`),
          r.trigger(y.SUBTITLE_FRAG_PROCESSED, {
            success: !1,
            frag: e,
            error: i,
          });
      }
    );
  }
  _parseVTTs(e, t, r) {
    var i;
    const s = this.hls,
      o =
        (i = e.initSegment) != null && i.data
          ? _n(e.initSegment.data, new Uint8Array(t))
          : t;
    Zv(
      o,
      this.initPTS[e.cc],
      r,
      e.cc,
      e.start,
      (a) => {
        this._appendCues(a, e.level),
          s.trigger(y.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: e });
      },
      (a) => {
        this._fallbackToIMSC1(e, t),
          A.log(`Failed to parse VTT cue: ${a}`),
          s.trigger(y.SUBTITLE_FRAG_PROCESSED, {
            success: !1,
            frag: e,
            error: a,
          });
      }
    );
  }
  _fallbackToIMSC1(e, t) {
    const r = this.tracks[e.level];
    r.textCodec ||
      Ad(
        t,
        this.initPTS[e.cc],
        () => {
          (r.textCodec = Xo), this._parseIMSC1(e, t);
        },
        () => {
          r.textCodec = "wvtt";
        }
      );
  }
  _appendCues(e, t) {
    const r = this.hls;
    if (this.config.renderTextTracksNatively) {
      const i = this.textTracks[t];
      if (!i || i.mode === "disabled") return;
      e.forEach((s) => p0(i, s));
    } else {
      const i = this.tracks[t];
      if (!i) return;
      const s = i.default ? "default" : "subtitles" + t;
      r.trigger(y.CUES_PARSED, { type: "subtitles", cues: e, track: s });
    }
  }
  onFragDecrypted(e, t) {
    const { frag: r } = t;
    if (r.type === V.SUBTITLE) {
      if (!this.initPTS[r.cc]) {
        this.unparsedVttFrags.push(t);
        return;
      }
      this.onFragLoaded(y.FRAG_LOADED, t);
    }
  }
  onSubtitleTracksCleared() {
    (this.tracks = []), (this.captionsTracks = {});
  }
  onFragParsingUserdata(e, t) {
    const { cea608Parser1: r, cea608Parser2: i } = this;
    if (!this.enabled || !(r && i)) return;
    const { frag: s, samples: o } = t;
    if (!(s.type === V.MAIN && this.closedCaptionsForLevel(s) === "NONE"))
      for (let a = 0; a < o.length; a++) {
        const l = o[a].bytes;
        if (l) {
          const u = this.extractCea608Data(l);
          r.addData(o[a].pts, u[0]), i.addData(o[a].pts, u[1]);
        }
      }
  }
  onBufferFlushing(
    e,
    { startOffset: t, endOffset: r, endOffsetSubtitles: i, type: s }
  ) {
    const { media: o } = this;
    if (!(!o || o.currentTime < r)) {
      if (!s || s === "video") {
        const { captionsTracks: a } = this;
        Object.keys(a).forEach((l) => Qa(a[l], t, r));
      }
      if (this.config.renderTextTracksNatively && t === 0 && i !== void 0) {
        const { textTracks: a } = this;
        Object.keys(a).forEach((l) => Qa(a[l], t, i));
      }
    }
  }
  extractCea608Data(e) {
    const t = [[], []],
      r = e[0] & 31;
    let i = 2;
    for (let s = 0; s < r; s++) {
      const o = e[i++],
        a = 127 & e[i++],
        l = 127 & e[i++];
      if (a === 0 && l === 0) continue;
      if ((4 & o) !== 0) {
        const c = 3 & o;
        (c === 0 || c === 1) && (t[c].push(a), t[c].push(l));
      }
    }
    return t;
  }
}
function sx(n, e) {
  return !!n && n.label === e.name && !(n.textTrack1 || n.textTrack2);
}
function ox(n, e, t, r) {
  return Math.min(e, r) - Math.max(n, t);
}
function Dd() {
  return {
    ccOffset: 0,
    presentationOffset: 0,
    0: { start: 0, prevCC: -1, new: !0 },
  };
}
class Eu {
  constructor(e) {
    (this.hls = void 0),
      (this.autoLevelCapping = void 0),
      (this.firstLevel = void 0),
      (this.media = void 0),
      (this.restrictedLevels = void 0),
      (this.timer = void 0),
      (this.clientRect = void 0),
      (this.streamController = void 0),
      (this.hls = e),
      (this.autoLevelCapping = Number.POSITIVE_INFINITY),
      (this.firstLevel = -1),
      (this.media = null),
      (this.restrictedLevels = []),
      (this.timer = void 0),
      (this.clientRect = null),
      this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  destroy() {
    this.unregisterListener(),
      this.hls.config.capLevelToPlayerSize && this.stopCapping(),
      (this.media = null),
      (this.clientRect = null),
      (this.hls = this.streamController = null);
  }
  registerListeners() {
    const { hls: e } = this;
    e.on(y.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
      e.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this),
      e.on(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.on(y.BUFFER_CODECS, this.onBufferCodecs, this),
      e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListener() {
    const { hls: e } = this;
    e.off(y.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
      e.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this),
      e.off(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.off(y.BUFFER_CODECS, this.onBufferCodecs, this),
      e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  onFpsDropLevelCapping(e, t) {
    const r = this.hls.levels[t.droppedLevel];
    this.isLevelAllowed(r) &&
      this.restrictedLevels.push({
        bitrate: r.bitrate,
        height: r.height,
        width: r.width,
      });
  }
  onMediaAttaching(e, t) {
    (this.media = t.media instanceof HTMLVideoElement ? t.media : null),
      (this.clientRect = null);
  }
  onManifestParsed(e, t) {
    const r = this.hls;
    (this.restrictedLevels = []),
      (this.firstLevel = t.firstLevel),
      r.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onBufferCodecs(e, t) {
    this.hls.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onMediaDetaching() {
    this.stopCapping();
  }
  detectPlayerSize() {
    if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
      const e = this.hls.levels;
      if (e.length) {
        const t = this.hls;
        (t.autoLevelCapping = this.getMaxLevel(e.length - 1)),
          t.autoLevelCapping > this.autoLevelCapping &&
            this.streamController &&
            this.streamController.nextLevelSwitch(),
          (this.autoLevelCapping = t.autoLevelCapping);
      }
    }
  }
  getMaxLevel(e) {
    const t = this.hls.levels;
    if (!t.length) return -1;
    const r = t.filter((i, s) => this.isLevelAllowed(i) && s <= e);
    return (
      (this.clientRect = null),
      Eu.getMaxLevelByMediaSize(r, this.mediaWidth, this.mediaHeight)
    );
  }
  startCapping() {
    this.timer ||
      ((this.autoLevelCapping = Number.POSITIVE_INFINITY),
      (this.hls.firstLevel = this.getMaxLevel(this.firstLevel)),
      self.clearInterval(this.timer),
      (this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3)),
      this.detectPlayerSize());
  }
  stopCapping() {
    (this.restrictedLevels = []),
      (this.firstLevel = -1),
      (this.autoLevelCapping = Number.POSITIVE_INFINITY),
      this.timer && (self.clearInterval(this.timer), (this.timer = void 0));
  }
  getDimensions() {
    if (this.clientRect) return this.clientRect;
    const e = this.media,
      t = { width: 0, height: 0 };
    if (e) {
      const r = e.getBoundingClientRect();
      (t.width = r.width),
        (t.height = r.height),
        !t.width &&
          !t.height &&
          ((t.width = r.right - r.left || e.width || 0),
          (t.height = r.bottom - r.top || e.height || 0));
    }
    return (this.clientRect = t), t;
  }
  get mediaWidth() {
    return this.getDimensions().width * this.contentScaleFactor;
  }
  get mediaHeight() {
    return this.getDimensions().height * this.contentScaleFactor;
  }
  get contentScaleFactor() {
    let e = 1;
    if (!this.hls.config.ignoreDevicePixelRatio)
      try {
        e = self.devicePixelRatio;
      } catch {}
    return e;
  }
  isLevelAllowed(e) {
    return !this.restrictedLevels.some(
      (r) =>
        e.bitrate === r.bitrate && e.width === r.width && e.height === r.height
    );
  }
  static getMaxLevelByMediaSize(e, t, r) {
    if (!(e != null && e.length)) return -1;
    const i = (o, a) => (a ? o.width !== a.width || o.height !== a.height : !0);
    let s = e.length - 1;
    for (let o = 0; o < e.length; o += 1) {
      const a = e[o];
      if ((a.width >= t || a.height >= r) && i(a, e[o + 1])) {
        s = o;
        break;
      }
    }
    return s;
  }
}
class ax {
  constructor(e) {
    (this.hls = void 0),
      (this.isVideoPlaybackQualityAvailable = !1),
      (this.timer = void 0),
      (this.media = null),
      (this.lastTime = void 0),
      (this.lastDroppedFrames = 0),
      (this.lastDecodedFrames = 0),
      (this.streamController = void 0),
      (this.hls = e),
      this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  registerListeners() {
    this.hls.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this);
  }
  unregisterListeners() {
    this.hls.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this);
  }
  destroy() {
    this.timer && clearInterval(this.timer),
      this.unregisterListeners(),
      (this.isVideoPlaybackQualityAvailable = !1),
      (this.media = null);
  }
  onMediaAttaching(e, t) {
    const r = this.hls.config;
    if (r.capLevelOnFPSDrop) {
      const i = t.media instanceof self.HTMLVideoElement ? t.media : null;
      (this.media = i),
        i &&
          typeof i.getVideoPlaybackQuality == "function" &&
          (this.isVideoPlaybackQualityAvailable = !0),
        self.clearInterval(this.timer),
        (this.timer = self.setInterval(
          this.checkFPSInterval.bind(this),
          r.fpsDroppedMonitoringPeriod
        ));
    }
  }
  checkFPS(e, t, r) {
    const i = performance.now();
    if (t) {
      if (this.lastTime) {
        const s = i - this.lastTime,
          o = r - this.lastDroppedFrames,
          a = t - this.lastDecodedFrames,
          l = (1e3 * o) / s,
          u = this.hls;
        if (
          (u.trigger(y.FPS_DROP, {
            currentDropped: o,
            currentDecoded: a,
            totalDroppedFrames: r,
          }),
          l > 0 && o > u.config.fpsDroppedMonitoringThreshold * a)
        ) {
          let c = u.currentLevel;
          A.warn(
            "drop FPS ratio greater than max allowed value for currentLevel: " +
              c
          ),
            c > 0 &&
              (u.autoLevelCapping === -1 || u.autoLevelCapping >= c) &&
              ((c = c - 1),
              u.trigger(y.FPS_DROP_LEVEL_CAPPING, {
                level: c,
                droppedLevel: u.currentLevel,
              }),
              (u.autoLevelCapping = c),
              this.streamController.nextLevelSwitch());
        }
      }
      (this.lastTime = i),
        (this.lastDroppedFrames = r),
        (this.lastDecodedFrames = t);
    }
  }
  checkFPSInterval() {
    const e = this.media;
    if (e)
      if (this.isVideoPlaybackQualityAvailable) {
        const t = e.getVideoPlaybackQuality();
        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
      } else
        this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);
  }
}
const Gi = "[eme]";
class or {
  constructor(e) {
    (this.hls = void 0),
      (this.config = void 0),
      (this.media = null),
      (this.keyFormatPromise = null),
      (this.keySystemAccessPromises = {}),
      (this._requestLicenseFailureCount = 0),
      (this.mediaKeySessions = []),
      (this.keyIdToKeySessionPromise = {}),
      (this.setMediaKeysQueue = or.CDMCleanupPromise
        ? [or.CDMCleanupPromise]
        : []),
      (this.onMediaEncrypted = this._onMediaEncrypted.bind(this)),
      (this.onWaitingForKey = this._onWaitingForKey.bind(this)),
      (this.debug = A.debug.bind(A, Gi)),
      (this.log = A.log.bind(A, Gi)),
      (this.warn = A.warn.bind(A, Gi)),
      (this.error = A.error.bind(A, Gi)),
      (this.hls = e),
      (this.config = e.config),
      this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached();
    const e = this.config;
    (e.requestMediaKeySystemAccessFunc = null),
      (e.licenseXhrSetup = e.licenseResponseCallback = void 0),
      (e.drmSystems = e.drmSystemOptions = {}),
      (this.hls =
        this.onMediaEncrypted =
        this.onWaitingForKey =
        this.keyIdToKeySessionPromise =
          null),
      (this.config = null);
  }
  registerListeners() {
    this.hls.on(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      this.hls.on(y.MEDIA_DETACHED, this.onMediaDetached, this),
      this.hls.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      this.hls.on(y.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  unregisterListeners() {
    this.hls.off(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      this.hls.off(y.MEDIA_DETACHED, this.onMediaDetached, this),
      this.hls.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      this.hls.off(y.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  getLicenseServerUrl(e) {
    const { drmSystems: t, widevineLicenseUrl: r } = this.config,
      i = t[e];
    if (i) return i.licenseUrl;
    if (e === de.WIDEVINE && r) return r;
    throw new Error(`no license server URL configured for key-system "${e}"`);
  }
  getServerCertificateUrl(e) {
    const { drmSystems: t } = this.config,
      r = t[e];
    if (r) return r.serverCertificateUrl;
    this.log(`No Server Certificate in config.drmSystems["${e}"]`);
  }
  attemptKeySystemAccess(e) {
    const t = this.hls.levels,
      r = (o, a, l) => !!o && l.indexOf(o) === a,
      i = t.map((o) => o.audioCodec).filter(r),
      s = t.map((o) => o.videoCodec).filter(r);
    return (
      i.length + s.length === 0 && s.push("avc1.42e01e"),
      new Promise((o, a) => {
        const l = (u) => {
          const c = u.shift();
          this.getMediaKeysPromise(c, i, s)
            .then((d) => o({ keySystem: c, mediaKeys: d }))
            .catch((d) => {
              u.length
                ? l(u)
                : d instanceof it
                ? a(d)
                : a(
                    new it(
                      {
                        type: K.KEY_SYSTEM_ERROR,
                        details: F.KEY_SYSTEM_NO_ACCESS,
                        error: d,
                        fatal: !0,
                      },
                      d.message
                    )
                  );
            });
        };
        l(e);
      })
    );
  }
  requestMediaKeySystemAccess(e, t) {
    const { requestMediaKeySystemAccessFunc: r } = this.config;
    if (typeof r != "function") {
      let i = `Configured requestMediaKeySystemAccess is not a function ${r}`;
      return (
        t0 === null &&
          self.location.protocol === "http:" &&
          (i = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),
        Promise.reject(new Error(i))
      );
    }
    return r(e, t);
  }
  getMediaKeysPromise(e, t, r) {
    const i = Ty(e, t, r, this.config.drmSystemOptions),
      s = this.keySystemAccessPromises[e];
    let o = s == null ? void 0 : s.keySystemAccess;
    if (!o) {
      this.log(
        `Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(
          i
        )}`
      ),
        (o = this.requestMediaKeySystemAccess(e, i));
      const a = (this.keySystemAccessPromises[e] = { keySystemAccess: o });
      return (
        o.catch((l) => {
          this.log(`Failed to obtain access to key-system "${e}": ${l}`);
        }),
        o.then((l) => {
          this.log(`Access for key-system "${l.keySystem}" obtained`);
          const u = this.fetchServerCertificate(e);
          return (
            this.log(`Create media-keys for "${e}"`),
            (a.mediaKeys = l
              .createMediaKeys()
              .then(
                (c) => (
                  this.log(`Media-keys created for "${e}"`),
                  u.then((d) =>
                    d ? this.setMediaKeysServerCertificate(c, e, d) : c
                  )
                )
              )),
            a.mediaKeys.catch((c) => {
              this.error(`Failed to create media-keys for "${e}"}: ${c}`);
            }),
            a.mediaKeys
          );
        })
      );
    }
    return o.then(() => s.mediaKeys);
  }
  createMediaKeySessionContext({ decryptdata: e, keySystem: t, mediaKeys: r }) {
    this.log(
      `Creating key-system session "${t}" keyId: ${Ct.hexDump(e.keyId || [])}`
    );
    const i = r.createSession(),
      s = {
        decryptdata: e,
        keySystem: t,
        mediaKeys: r,
        mediaKeysSession: i,
        keyStatus: "status-pending",
      };
    return this.mediaKeySessions.push(s), s;
  }
  renewKeySession(e) {
    const t = e.decryptdata;
    if (t.pssh) {
      const r = this.createMediaKeySessionContext(e),
        i = this.getKeyIdString(t),
        s = "cenc";
      this.keyIdToKeySessionPromise[i] =
        this.generateRequestWithPreferredKeySession(r, s, t.pssh, "expired");
    } else this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(e);
  }
  getKeyIdString(e) {
    if (!e) throw new Error("Could not read keyId of undefined decryptdata");
    if (e.keyId === null) throw new Error("keyId is null");
    return Ct.hexDump(e.keyId);
  }
  updateKeySession(e, t) {
    var r;
    const i = e.mediaKeysSession;
    return (
      this.log(`Updating key-session "${i.sessionId}" for keyID ${Ct.hexDump(
        ((r = e.decryptdata) == null ? void 0 : r.keyId) || []
      )}
      } (data length: ${t && t.byteLength})`),
      i.update(t)
    );
  }
  selectKeySystemFormat(e) {
    const t = Object.keys(e.levelkeys || {});
    return (
      this.keyFormatPromise ||
        (this.log(
          `Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${
            e.level
          }) key formats ${t.join(", ")}`
        ),
        (this.keyFormatPromise = this.getKeyFormatPromise(t))),
      this.keyFormatPromise
    );
  }
  getKeyFormatPromise(e) {
    return new Promise((t, r) => {
      const i = wo(this.config),
        s = e.map(Nc).filter((o) => !!o && i.indexOf(o) !== -1);
      return this.getKeySystemSelectionPromise(s)
        .then(({ keySystem: o }) => {
          const a = Mc(o);
          a
            ? t(a)
            : r(new Error(`Unable to find format for key-system "${o}"`));
        })
        .catch(r);
    });
  }
  loadKey(e) {
    const t = e.keyInfo.decryptdata,
      r = this.getKeyIdString(t),
      i = `(keyId: ${r} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
    this.log(`Starting session for key ${i}`);
    let s = this.keyIdToKeySessionPromise[r];
    return (
      s ||
        ((s = this.keyIdToKeySessionPromise[r] =
          this.getKeySystemForKeyPromise(t).then(
            ({ keySystem: o, mediaKeys: a }) => (
              this.throwIfDestroyed(),
              this.log(
                `Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`
              ),
              this.attemptSetMediaKeys(o, a).then(() => {
                this.throwIfDestroyed();
                const l = this.createMediaKeySessionContext({
                    keySystem: o,
                    mediaKeys: a,
                    decryptdata: t,
                  }),
                  u = "cenc";
                return this.generateRequestWithPreferredKeySession(
                  l,
                  u,
                  t.pssh,
                  "playlist-key"
                );
              })
            )
          )),
        s.catch((o) => this.handleError(o))),
      s
    );
  }
  throwIfDestroyed(e = "Invalid state") {
    if (!this.hls) throw new Error("invalid state");
  }
  handleError(e) {
    !this.hls ||
      (this.error(e.message),
      e instanceof it
        ? this.hls.trigger(y.ERROR, e.data)
        : this.hls.trigger(y.ERROR, {
            type: K.KEY_SYSTEM_ERROR,
            details: F.KEY_SYSTEM_NO_KEYS,
            error: e,
            fatal: !0,
          }));
  }
  getKeySystemForKeyPromise(e) {
    const t = this.getKeyIdString(e),
      r = this.keyIdToKeySessionPromise[t];
    if (!r) {
      const i = Nc(e.keyFormat),
        s = i ? [i] : wo(this.config);
      return this.attemptKeySystemAccess(s);
    }
    return r;
  }
  getKeySystemSelectionPromise(e) {
    if ((e.length || (e = wo(this.config)), e.length === 0))
      throw new it(
        {
          type: K.KEY_SYSTEM_ERROR,
          details: F.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
          fatal: !0,
        },
        `Missing key-system license configuration options ${JSON.stringify({
          drmSystems: this.config.drmSystems,
        })}`
      );
    return this.attemptKeySystemAccess(e);
  }
  _onMediaEncrypted(e) {
    const { initDataType: t, initData: r } = e;
    if ((this.debug(`"${e.type}" event: init data type: "${t}"`), r === null))
      return;
    let i, s;
    if (t === "sinf" && this.config.drmSystems[de.FAIRPLAY]) {
      const c = Re(new Uint8Array(r));
      try {
        const d = iu(JSON.parse(c).sinf),
          f = u0(new Uint8Array(d));
        if (!f) return;
        (i = f.subarray(8, 24)), (s = de.FAIRPLAY);
      } catch {
        this.warn('Failed to parse sinf "encrypted" event message initData');
        return;
      }
    } else {
      const c = Wy(r);
      if (c === null) return;
      c.version === 0 &&
        c.systemId === e0.WIDEVINE &&
        c.data &&
        (i = c.data.subarray(8, 24)),
        (s = xy(c.systemId));
    }
    if (!s || !i) return;
    const o = Ct.hexDump(i),
      { keyIdToKeySessionPromise: a, mediaKeySessions: l } = this;
    let u = a[o];
    for (let c = 0; c < l.length; c++) {
      const d = l[c],
        f = d.decryptdata;
      if (f.pssh || !f.keyId) continue;
      const h = Ct.hexDump(f.keyId);
      if (o === h || f.uri.replace(/-/g, "").indexOf(o) !== -1) {
        (u = a[h]),
          delete a[h],
          (f.pssh = new Uint8Array(r)),
          (f.keyId = i),
          (u = a[o] =
            u.then(() =>
              this.generateRequestWithPreferredKeySession(
                d,
                t,
                r,
                "encrypted-event-key-match"
              )
            ));
        break;
      }
    }
    u ||
      (u = a[o] =
        this.getKeySystemSelectionPromise([s]).then(
          ({ keySystem: c, mediaKeys: d }) => {
            var f;
            this.throwIfDestroyed();
            const h = new ai("ISO-23001-7", o, (f = Mc(c)) != null ? f : "");
            return (
              (h.pssh = new Uint8Array(r)),
              (h.keyId = i),
              this.attemptSetMediaKeys(c, d).then(() => {
                this.throwIfDestroyed();
                const p = this.createMediaKeySessionContext({
                  decryptdata: h,
                  keySystem: c,
                  mediaKeys: d,
                });
                return this.generateRequestWithPreferredKeySession(
                  p,
                  t,
                  r,
                  "encrypted-event-no-match"
                );
              })
            );
          }
        )),
      u.catch((c) => this.handleError(c));
  }
  _onWaitingForKey(e) {
    this.log(`"${e.type}" event`);
  }
  attemptSetMediaKeys(e, t) {
    const r = this.setMediaKeysQueue.slice();
    this.log(`Setting media-keys for "${e}"`);
    const i = Promise.all(r).then(() => {
      if (!this.media)
        throw new Error(
          "Attempted to set mediaKeys without media element attached"
        );
      return this.media.setMediaKeys(t);
    });
    return (
      this.setMediaKeysQueue.push(i),
      i.then(() => {
        this.log(`Media-keys set for "${e}"`),
          r.push(i),
          (this.setMediaKeysQueue = this.setMediaKeysQueue.filter(
            (s) => r.indexOf(s) === -1
          ));
      })
    );
  }
  generateRequestWithPreferredKeySession(e, t, r, i) {
    var s, o;
    const a =
      (s = this.config.drmSystems) == null || (o = s[e.keySystem]) == null
        ? void 0
        : o.generateRequest;
    if (a)
      try {
        const f = a.call(this.hls, t, r, e);
        if (!f)
          throw new Error(
            "Invalid response from configured generateRequest filter"
          );
        (t = f.initDataType),
          (r = e.decryptdata.pssh =
            f.initData ? new Uint8Array(f.initData) : null);
      } catch (f) {
        var l;
        if ((this.warn(f.message), (l = this.hls) != null && l.config.debug))
          throw f;
      }
    if (r === null)
      return (
        this.log(`Skipping key-session request for "${i}" (no initData)`),
        Promise.resolve(e)
      );
    const u = this.getKeyIdString(e.decryptdata);
    this.log(
      `Generating key-session request for "${i}": ${u} (init data type: ${t} length: ${
        r ? r.byteLength : null
      })`
    );
    const c = new gu();
    (e.mediaKeysSession.onmessage = (f) => {
      const h = e.mediaKeysSession;
      if (!h) {
        c.emit("error", new Error("invalid state"));
        return;
      }
      const { messageType: p, message: g } = f;
      this.log(
        `"${p}" message event for session "${h.sessionId}" message size: ${g.byteLength}`
      ),
        p === "license-request" || p === "license-renewal"
          ? this.renewLicense(e, g).catch((v) => {
              this.handleError(v), c.emit("error", v);
            })
          : p === "license-release"
          ? e.keySystem === de.FAIRPLAY &&
            (this.updateKeySession(e, Jh("acknowledged")),
            this.removeSession(e))
          : this.warn(`unhandled media key message type "${p}"`);
    }),
      (e.mediaKeysSession.onkeystatuseschange = (f) => {
        if (!e.mediaKeysSession) {
          c.emit("error", new Error("invalid state"));
          return;
        }
        this.onKeyStatusChange(e);
        const p = e.keyStatus;
        c.emit("keyStatus", p),
          p === "expired" &&
            (this.warn(`${e.keySystem} expired for key ${u}`),
            this.renewKeySession(e));
      });
    const d = new Promise((f, h) => {
      c.on("error", h),
        c.on("keyStatus", (p) => {
          p.startsWith("usable")
            ? f()
            : p === "output-restricted"
            ? h(
                new it(
                  {
                    type: K.KEY_SYSTEM_ERROR,
                    details: F.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
                    fatal: !1,
                  },
                  "HDCP level output restricted"
                )
              )
            : p === "internal-error"
            ? h(
                new it(
                  {
                    type: K.KEY_SYSTEM_ERROR,
                    details: F.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
                    fatal: !0,
                  },
                  `key status changed to "${p}"`
                )
              )
            : p === "expired"
            ? h(new Error("key expired while generating request"))
            : this.warn(`unhandled key status change "${p}"`);
        });
    });
    return e.mediaKeysSession
      .generateRequest(t, r)
      .then(() => {
        var f;
        this.log(
          `Request generated for key-session "${
            (f = e.mediaKeysSession) == null ? void 0 : f.sessionId
          }" keyId: ${u}`
        );
      })
      .catch((f) => {
        throw new it(
          {
            type: K.KEY_SYSTEM_ERROR,
            details: F.KEY_SYSTEM_NO_SESSION,
            error: f,
            fatal: !1,
          },
          `Error generating key-session request: ${f}`
        );
      })
      .then(() => d)
      .catch((f) => {
        throw (c.removeAllListeners(), this.removeSession(e), f);
      })
      .then(() => (c.removeAllListeners(), e));
  }
  onKeyStatusChange(e) {
    e.mediaKeysSession.keyStatuses.forEach((t, r) => {
      this.log(
        `key status change "${t}" for keyStatuses keyId: ${Ct.hexDump(
          "buffer" in r
            ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength)
            : new Uint8Array(r)
        )} session keyId: ${Ct.hexDump(
          new Uint8Array(e.decryptdata.keyId || [])
        )} uri: ${e.decryptdata.uri}`
      ),
        (e.keyStatus = t);
    });
  }
  fetchServerCertificate(e) {
    const t = this.config,
      r = t.loader,
      i = new r(t),
      s = this.getServerCertificateUrl(e);
    return s
      ? (this.log(`Fetching serverCertificate for "${e}"`),
        new Promise((o, a) => {
          const l = { responseType: "arraybuffer", url: s },
            u = t.certLoadPolicy.default,
            c = {
              loadPolicy: u,
              timeout: u.maxLoadTimeMs,
              maxRetry: 0,
              retryDelay: 0,
              maxRetryDelay: 0,
            },
            d = {
              onSuccess: (f, h, p, g) => {
                o(f.data);
              },
              onError: (f, h, p, g) => {
                a(
                  new it(
                    {
                      type: K.KEY_SYSTEM_ERROR,
                      details: F.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                      fatal: !0,
                      networkDetails: p,
                      response: qe({ url: l.url, data: void 0 }, f),
                    },
                    `"${e}" certificate request failed (${s}). Status: ${f.code} (${f.text})`
                  )
                );
              },
              onTimeout: (f, h, p) => {
                a(
                  new it(
                    {
                      type: K.KEY_SYSTEM_ERROR,
                      details: F.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                      fatal: !0,
                      networkDetails: p,
                      response: { url: l.url, data: void 0 },
                    },
                    `"${e}" certificate request timed out (${s})`
                  )
                );
              },
              onAbort: (f, h, p) => {
                a(new Error("aborted"));
              },
            };
          i.load(l, c, d);
        }))
      : Promise.resolve();
  }
  setMediaKeysServerCertificate(e, t, r) {
    return new Promise((i, s) => {
      e.setServerCertificate(r)
        .then((o) => {
          this.log(
            `setServerCertificate ${o ? "success" : "not supported by CDM"} (${
              r == null ? void 0 : r.byteLength
            }) on "${t}"`
          ),
            i(e);
        })
        .catch((o) => {
          s(
            new it(
              {
                type: K.KEY_SYSTEM_ERROR,
                details: F.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
                error: o,
                fatal: !0,
              },
              o.message
            )
          );
        });
    });
  }
  renewLicense(e, t) {
    return this.requestLicense(e, new Uint8Array(t)).then((r) =>
      this.updateKeySession(e, new Uint8Array(r)).catch((i) => {
        throw new it(
          {
            type: K.KEY_SYSTEM_ERROR,
            details: F.KEY_SYSTEM_SESSION_UPDATE_FAILED,
            error: i,
            fatal: !0,
          },
          i.message
        );
      })
    );
  }
  setupLicenseXHR(e, t, r, i) {
    const s = this.config.licenseXhrSetup;
    return s
      ? Promise.resolve()
          .then(() => {
            if (!r.decryptdata) throw new Error("Key removed");
            return s.call(this.hls, e, t, r, i);
          })
          .catch((o) => {
            if (!r.decryptdata) throw o;
            return e.open("POST", t, !0), s.call(this.hls, e, t, r, i);
          })
          .then(
            (o) => (
              e.readyState || e.open("POST", t, !0),
              { xhr: e, licenseChallenge: o || i }
            )
          )
      : (e.open("POST", t, !0),
        Promise.resolve({ xhr: e, licenseChallenge: i }));
  }
  requestLicense(e, t) {
    const r = this.config.keyLoadPolicy.default;
    return new Promise((i, s) => {
      const o = this.getLicenseServerUrl(e.keySystem);
      this.log(`Sending license request to URL: ${o}`);
      const a = new XMLHttpRequest();
      (a.responseType = "arraybuffer"),
        (a.onreadystatechange = () => {
          if (!this.hls || !e.mediaKeysSession)
            return s(new Error("invalid state"));
          if (a.readyState === 4)
            if (a.status === 200) {
              this._requestLicenseFailureCount = 0;
              let l = a.response;
              this.log(
                `License received ${
                  l instanceof ArrayBuffer ? l.byteLength : l
                }`
              );
              const u = this.config.licenseResponseCallback;
              if (u)
                try {
                  l = u.call(this.hls, a, o, e);
                } catch (c) {
                  this.error(c);
                }
              i(l);
            } else {
              const l = r.errorRetry,
                u = l ? l.maxNumRetry : 0;
              if (
                (this._requestLicenseFailureCount++,
                this._requestLicenseFailureCount > u ||
                  (a.status >= 400 && a.status < 500))
              )
                s(
                  new it(
                    {
                      type: K.KEY_SYSTEM_ERROR,
                      details: F.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                      fatal: !0,
                      networkDetails: a,
                      response: {
                        url: o,
                        data: void 0,
                        code: a.status,
                        text: a.statusText,
                      },
                    },
                    `License Request XHR failed (${o}). Status: ${a.status} (${a.statusText})`
                  )
                );
              else {
                const c = u - this._requestLicenseFailureCount + 1;
                this.warn(`Retrying license request, ${c} attempts left`),
                  this.requestLicense(e, t).then(i, s);
              }
            }
        }),
        e.licenseXhr &&
          e.licenseXhr.readyState !== XMLHttpRequest.DONE &&
          e.licenseXhr.abort(),
        (e.licenseXhr = a),
        this.setupLicenseXHR(a, o, e, t).then(
          ({ xhr: l, licenseChallenge: u }) => {
            l.send(u);
          }
        );
    });
  }
  onMediaAttached(e, t) {
    if (!this.config.emeEnabled) return;
    const r = t.media;
    (this.media = r),
      r.addEventListener("encrypted", this.onMediaEncrypted),
      r.addEventListener("waitingforkey", this.onWaitingForKey);
  }
  onMediaDetached() {
    const e = this.media,
      t = this.mediaKeySessions;
    e &&
      (e.removeEventListener("encrypted", this.onMediaEncrypted),
      e.removeEventListener("waitingforkey", this.onWaitingForKey),
      (this.media = null)),
      (this._requestLicenseFailureCount = 0),
      (this.setMediaKeysQueue = []),
      (this.mediaKeySessions = []),
      (this.keyIdToKeySessionPromise = {}),
      ai.clearKeyUriToKeyIdMap();
    const r = t.length;
    or.CDMCleanupPromise = Promise.all(
      t
        .map((i) => this.removeSession(i))
        .concat(
          e == null
            ? void 0
            : e.setMediaKeys(null).catch((i) => {
                this.log(
                  `Could not clear media keys: ${i}. media.src: ${
                    e == null ? void 0 : e.src
                  }`
                );
              })
        )
    )
      .then(() => {
        r &&
          (this.log("finished closing key sessions and clearing media keys"),
          (t.length = 0));
      })
      .catch((i) => {
        this.log(
          `Could not close sessions and clear media keys: ${i}. media.src: ${
            e == null ? void 0 : e.src
          }`
        );
      });
  }
  onManifestLoading() {
    this.keyFormatPromise = null;
  }
  onManifestLoaded(e, { sessionKeys: t }) {
    if (!(!t || !this.config.emeEnabled) && !this.keyFormatPromise) {
      const r = t.reduce(
        (i, s) => (i.indexOf(s.keyFormat) === -1 && i.push(s.keyFormat), i),
        []
      );
      this.log(`Selecting key-system from session-keys ${r.join(", ")}`),
        (this.keyFormatPromise = this.getKeyFormatPromise(r));
    }
  }
  removeSession(e) {
    const { mediaKeysSession: t, licenseXhr: r } = e;
    if (t) {
      this.log(`Remove licenses and keys and close session ${t.sessionId}`),
        (t.onmessage = null),
        (t.onkeystatuseschange = null),
        r && r.readyState !== XMLHttpRequest.DONE && r.abort(),
        (e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0);
      const i = this.mediaKeySessions.indexOf(e);
      return (
        i > -1 && this.mediaKeySessions.splice(i, 1),
        t
          .remove()
          .catch((s) => {
            this.log(`Could not remove session: ${s}`);
          })
          .then(() => t.close())
          .catch((s) => {
            this.log(`Could not close session: ${s}`);
          })
      );
    }
  }
}
or.CDMCleanupPromise = void 0;
class it extends Error {
  constructor(e, t) {
    super(t),
      (this.data = void 0),
      e.error || (e.error = new Error(t)),
      (this.data = e),
      (e.err = e.error);
  }
}
const lx = 1;
var Ge = {
  MANIFEST: "m",
  AUDIO: "a",
  VIDEO: "v",
  MUXED: "av",
  INIT: "i",
  CAPTION: "c",
  TIMED_TEXT: "tt",
  KEY: "k",
  OTHER: "o",
};
const ux = "h";
class qt {
  constructor(e) {
    (this.hls = void 0),
      (this.config = void 0),
      (this.media = void 0),
      (this.sid = void 0),
      (this.cid = void 0),
      (this.useHeaders = !1),
      (this.initialized = !1),
      (this.starved = !1),
      (this.buffering = !0),
      (this.audioBuffer = void 0),
      (this.videoBuffer = void 0),
      (this.onWaiting = () => {
        this.initialized && (this.starved = !0), (this.buffering = !0);
      }),
      (this.onPlaying = () => {
        this.initialized || (this.initialized = !0), (this.buffering = !1);
      }),
      (this.applyPlaylistData = (i) => {
        try {
          this.apply(i, { ot: Ge.MANIFEST, su: !this.initialized });
        } catch (s) {
          A.warn("Could not generate manifest CMCD data.", s);
        }
      }),
      (this.applyFragmentData = (i) => {
        try {
          const s = i.frag,
            o = this.hls.levels[s.level],
            a = this.getObjectType(s),
            l = { d: s.duration * 1e3, ot: a };
          (a === Ge.VIDEO || a === Ge.AUDIO || a == Ge.MUXED) &&
            ((l.br = o.bitrate / 1e3),
            (l.tb = this.getTopBandwidth(a) / 1e3),
            (l.bl = this.getBufferLength(a))),
            this.apply(i, l);
        } catch (s) {
          A.warn("Could not generate segment CMCD data.", s);
        }
      }),
      (this.hls = e);
    const t = (this.config = e.config),
      { cmcd: r } = t;
    r != null &&
      ((t.pLoader = this.createPlaylistLoader()),
      (t.fLoader = this.createFragmentLoader()),
      (this.sid = r.sessionId || qt.uuid()),
      (this.cid = r.contentId),
      (this.useHeaders = r.useHeaders === !0),
      this.registerListeners());
  }
  registerListeners() {
    const e = this.hls;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.on(y.MEDIA_DETACHED, this.onMediaDetached, this),
      e.on(y.BUFFER_CREATED, this.onBufferCreated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this),
      e.off(y.MEDIA_DETACHED, this.onMediaDetached, this),
      e.off(y.BUFFER_CREATED, this.onBufferCreated, this);
  }
  destroy() {
    this.unregisterListeners(),
      this.onMediaDetached(),
      (this.hls = this.config = this.audioBuffer = this.videoBuffer = null);
  }
  onMediaAttached(e, t) {
    (this.media = t.media),
      this.media.addEventListener("waiting", this.onWaiting),
      this.media.addEventListener("playing", this.onPlaying);
  }
  onMediaDetached() {
    !this.media ||
      (this.media.removeEventListener("waiting", this.onWaiting),
      this.media.removeEventListener("playing", this.onPlaying),
      (this.media = null));
  }
  onBufferCreated(e, t) {
    var r, i;
    (this.audioBuffer = (r = t.tracks.audio) == null ? void 0 : r.buffer),
      (this.videoBuffer = (i = t.tracks.video) == null ? void 0 : i.buffer);
  }
  createData() {
    var e;
    return {
      v: lx,
      sf: ux,
      sid: this.sid,
      cid: this.cid,
      pr: (e = this.media) == null ? void 0 : e.playbackRate,
      mtp: this.hls.bandwidthEstimate / 1e3,
    };
  }
  apply(e, t = {}) {
    Se(t, this.createData());
    const r = t.ot === Ge.INIT || t.ot === Ge.VIDEO || t.ot === Ge.MUXED;
    if (
      (this.starved && r && ((t.bs = !0), (t.su = !0), (this.starved = !1)),
      t.su == null && (t.su = this.buffering),
      this.useHeaders)
    ) {
      const i = qt.toHeaders(t);
      if (!Object.keys(i).length) return;
      e.headers || (e.headers = {}), Se(e.headers, i);
    } else {
      const i = qt.toQuery(t);
      if (!i) return;
      e.url = qt.appendQueryToUri(e.url, i);
    }
  }
  getObjectType(e) {
    const { type: t } = e;
    if (t === "subtitle") return Ge.TIMED_TEXT;
    if (e.sn === "initSegment") return Ge.INIT;
    if (t === "audio") return Ge.AUDIO;
    if (t === "main") return this.hls.audioTracks.length ? Ge.VIDEO : Ge.MUXED;
  }
  getTopBandwidth(e) {
    let t = 0,
      r;
    const i = this.hls;
    if (e === Ge.AUDIO) r = i.audioTracks;
    else {
      const s = i.maxAutoLevel,
        o = s > -1 ? s + 1 : i.levels.length;
      r = i.levels.slice(0, o);
    }
    for (const s of r) s.bitrate > t && (t = s.bitrate);
    return t > 0 ? t : NaN;
  }
  getBufferLength(e) {
    const t = this.hls.media,
      r = e === Ge.AUDIO ? this.audioBuffer : this.videoBuffer;
    return !r || !t
      ? NaN
      : se.bufferInfo(r, t.currentTime, this.config.maxBufferHole).len * 1e3;
  }
  createPlaylistLoader() {
    const { pLoader: e } = this.config,
      t = this.applyPlaylistData,
      r = e || this.config.loader;
    return class {
      constructor(s) {
        (this.loader = void 0), (this.loader = new r(s));
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(s, o, a) {
        t(s), this.loader.load(s, o, a);
      }
    };
  }
  createFragmentLoader() {
    const { fLoader: e } = this.config,
      t = this.applyFragmentData,
      r = e || this.config.loader;
    return class {
      constructor(s) {
        (this.loader = void 0), (this.loader = new r(s));
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(s, o, a) {
        t(s), this.loader.load(s, o, a);
      }
    };
  }
  static uuid() {
    const e = URL.createObjectURL(new Blob()),
      t = e.toString();
    return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1);
  }
  static serialize(e) {
    const t = [],
      r = (u) => !Number.isNaN(u) && u != null && u !== "" && u !== !1,
      i = (u) => Math.round(u),
      s = (u) => i(u / 100) * 100,
      a = {
        br: i,
        d: i,
        bl: s,
        dl: s,
        mtp: s,
        nor: (u) => encodeURIComponent(u),
        rtp: s,
        tb: i,
      },
      l = Object.keys(e || {}).sort();
    for (const u of l) {
      let c = e[u];
      if (!r(c) || (u === "v" && c === 1) || (u == "pr" && c === 1)) continue;
      const d = a[u];
      d && (c = d(c));
      const f = typeof c;
      let h;
      u === "ot" || u === "sf" || u === "st"
        ? (h = `${u}=${c}`)
        : f === "boolean"
        ? (h = u)
        : f === "number"
        ? (h = `${u}=${c}`)
        : (h = `${u}=${JSON.stringify(c)}`),
        t.push(h);
    }
    return t.join(",");
  }
  static toHeaders(e) {
    const t = Object.keys(e),
      r = {},
      i = ["Object", "Request", "Session", "Status"],
      s = [{}, {}, {}, {}],
      o = {
        br: 0,
        d: 0,
        ot: 0,
        tb: 0,
        bl: 1,
        dl: 1,
        mtp: 1,
        nor: 1,
        nrr: 1,
        su: 1,
        cid: 2,
        pr: 2,
        sf: 2,
        sid: 2,
        st: 2,
        v: 2,
        bs: 3,
        rtp: 3,
      };
    for (const a of t) {
      const l = o[a] != null ? o[a] : 1;
      s[l][a] = e[a];
    }
    for (let a = 0; a < s.length; a++) {
      const l = qt.serialize(s[a]);
      l && (r[`CMCD-${i[a]}`] = l);
    }
    return r;
  }
  static toQuery(e) {
    return `CMCD=${encodeURIComponent(qt.serialize(e))}`;
  }
  static appendQueryToUri(e, t) {
    if (!t) return e;
    const r = e.includes("?") ? "&" : "?";
    return `${e}${r}${t}`;
  }
}
const cx = 3e5;
class dx {
  constructor(e) {
    (this.hls = void 0),
      (this.log = void 0),
      (this.loader = null),
      (this.uri = null),
      (this.pathwayId = "."),
      (this.pathwayPriority = null),
      (this.timeToLoad = 300),
      (this.reloadTimer = -1),
      (this.updated = 0),
      (this.started = !1),
      (this.enabled = !0),
      (this.levels = null),
      (this.audioTracks = null),
      (this.subtitleTracks = null),
      (this.penalizedPathways = {}),
      (this.hls = e),
      (this.log = A.log.bind(A, "[content-steering]:")),
      this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this),
      e.on(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const e = this.hls;
    !e ||
      (e.off(y.MANIFEST_LOADING, this.onManifestLoading, this),
      e.off(y.MANIFEST_LOADED, this.onManifestLoaded, this),
      e.off(y.MANIFEST_PARSED, this.onManifestParsed, this),
      e.off(y.ERROR, this.onError, this));
  }
  startLoad() {
    if (
      ((this.started = !0),
      self.clearTimeout(this.reloadTimer),
      this.enabled && this.uri)
    )
      if (this.updated) {
        const e = Math.max(
          this.timeToLoad * 1e3 - (performance.now() - this.updated),
          0
        );
        this.scheduleRefresh(this.uri, e);
      } else this.loadSteeringManifest(this.uri);
  }
  stopLoad() {
    (this.started = !1),
      this.loader && (this.loader.destroy(), (this.loader = null)),
      self.clearTimeout(this.reloadTimer);
  }
  destroy() {
    this.unregisterListeners(),
      this.stopLoad(),
      (this.hls = null),
      (this.levels = this.audioTracks = this.subtitleTracks = null);
  }
  removeLevel(e) {
    const t = this.levels;
    t && (this.levels = t.filter((r) => r !== e));
  }
  onManifestLoading() {
    this.stopLoad(),
      (this.enabled = !0),
      (this.timeToLoad = 300),
      (this.updated = 0),
      (this.uri = null),
      (this.pathwayId = "."),
      (this.levels = this.audioTracks = this.subtitleTracks = null);
  }
  onManifestLoaded(e, t) {
    const { contentSteering: r } = t;
    r !== null &&
      ((this.pathwayId = r.pathwayId),
      (this.uri = r.uri),
      this.started && this.startLoad());
  }
  onManifestParsed(e, t) {
    (this.audioTracks = t.audioTracks),
      (this.subtitleTracks = t.subtitleTracks);
  }
  onError(e, t) {
    const { errorAction: r } = t;
    if (
      (r == null ? void 0 : r.action) === Ve.SendAlternateToPenaltyBox &&
      r.flags === ht.MoveAllAlternatesMatchingHost
    ) {
      let i = this.pathwayPriority;
      const s = this.pathwayId;
      this.penalizedPathways[s] ||
        (this.penalizedPathways[s] = performance.now()),
        !i &&
          this.levels &&
          (i = this.levels.reduce(
            (o, a) => (o.indexOf(a.pathwayId) === -1 && o.push(a.pathwayId), o),
            []
          )),
        i &&
          i.length > 1 &&
          (this.updatePathwayPriority(i), (r.resolved = this.pathwayId !== s));
    }
  }
  filterParsedLevels(e) {
    this.levels = e;
    let t = this.getLevelsForPathway(this.pathwayId);
    if (t.length === 0) {
      const r = e[0].pathwayId;
      this.log(
        `No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${r}"`
      ),
        (t = this.getLevelsForPathway(r)),
        (this.pathwayId = r);
    }
    return t.length !== e.length
      ? (this.log(
          `Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`
        ),
        t)
      : e;
  }
  getLevelsForPathway(e) {
    return this.levels === null
      ? []
      : this.levels.filter((t) => e === t.pathwayId);
  }
  updatePathwayPriority(e) {
    this.pathwayPriority = e;
    let t;
    const r = this.penalizedPathways,
      i = performance.now();
    Object.keys(r).forEach((s) => {
      i - r[s] > cx && delete r[s];
    });
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (r[o]) continue;
      if (o === this.pathwayId) return;
      const a = this.hls.nextLoadLevel,
        l = this.hls.levels[a];
      if (((t = this.getLevelsForPathway(o)), t.length > 0)) {
        this.log(`Setting Pathway to "${o}"`),
          (this.pathwayId = o),
          this.hls.trigger(y.LEVELS_UPDATED, { levels: t });
        const u = this.hls.levels[a];
        l &&
          u &&
          this.levels &&
          (u.attrs["STABLE-VARIANT-ID"] !== l.attrs["STABLE-VARIANT-ID"] &&
            u.bitrate !== l.bitrate &&
            this.log(
              `Unstable Pathways change from bitrate ${l.bitrate} to ${u.bitrate}`
            ),
          (this.hls.nextLoadLevel = a));
        break;
      }
    }
  }
  clonePathways(e) {
    const t = this.levels;
    if (!t) return;
    const r = {},
      i = {};
    e.forEach((s) => {
      const { ID: o, "BASE-ID": a, "URI-REPLACEMENT": l } = s;
      if (t.some((c) => c.pathwayId === o)) return;
      const u = this.getLevelsForPathway(a).map((c) => {
        const d = Se({}, c);
        (d.details = void 0),
          (d.url = z0(
            c.uri,
            c.attrs["STABLE-VARIANT-ID"],
            "PER-VARIANT-URIS",
            l
          ));
        const f = new ue(c.attrs);
        f["PATHWAY-ID"] = o;
        const h = f.AUDIO && `${f.AUDIO}_clone_${o}`,
          p = f.SUBTITLES && `${f.SUBTITLES}_clone_${o}`;
        h && ((r[f.AUDIO] = h), (f.AUDIO = h)),
          p && ((i[f.SUBTITLES] = p), (f.SUBTITLES = p)),
          (d.attrs = f);
        const g = new li(d);
        return ks(g, "audio", h), ks(g, "text", p), g;
      });
      t.push(...u),
        Rd(this.audioTracks, r, l, o),
        Rd(this.subtitleTracks, i, l, o);
    });
  }
  loadSteeringManifest(e) {
    const t = this.hls.config,
      r = t.loader;
    this.loader && this.loader.destroy(), (this.loader = new r(t));
    let i;
    try {
      i = new self.URL(e);
    } catch {
      (this.enabled = !1),
        this.log(`Failed to parse Steering Manifest URI: ${e}`);
      return;
    }
    if (i.protocol !== "data:") {
      const c = (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate) | 0;
      i.searchParams.set("_HLS_pathway", this.pathwayId),
        i.searchParams.set("_HLS_throughput", "" + c);
    }
    const s = { responseType: "json", url: i.href },
      o = t.steeringManifestLoadPolicy.default,
      a = o.errorRetry || o.timeoutRetry || {},
      l = {
        loadPolicy: o,
        timeout: o.maxLoadTimeMs,
        maxRetry: a.maxNumRetry || 0,
        retryDelay: a.retryDelayMs || 0,
        maxRetryDelay: a.maxRetryDelayMs || 0,
      },
      u = {
        onSuccess: (c, d, f, h) => {
          this.log(`Loaded steering manifest: "${i}"`);
          const p = c.data;
          if (p.VERSION !== 1) {
            this.log(`Steering VERSION ${p.VERSION} not supported!`);
            return;
          }
          (this.updated = performance.now()), (this.timeToLoad = p.TTL);
          const {
            "RELOAD-URI": g,
            "PATHWAY-CLONES": v,
            "PATHWAY-PRIORITY": m,
          } = p;
          if (g)
            try {
              this.uri = new self.URL(g, i).href;
            } catch {
              (this.enabled = !1),
                this.log(`Failed to parse Steering Manifest RELOAD-URI: ${g}`);
              return;
            }
          this.scheduleRefresh(this.uri || f.url),
            v && this.clonePathways(v),
            m && this.updatePathwayPriority(m);
        },
        onError: (c, d, f, h) => {
          if (
            (this.log(
              `Error loading steering manifest: ${c.code} ${c.text} (${d.url})`
            ),
            this.stopLoad(),
            c.code === 410)
          ) {
            (this.enabled = !1),
              this.log(`Steering manifest ${d.url} no longer available`);
            return;
          }
          let p = this.timeToLoad * 1e3;
          if (c.code === 429) {
            const g = this.loader;
            if (
              typeof (g == null ? void 0 : g.getResponseHeader) == "function"
            ) {
              const v = g.getResponseHeader("Retry-After");
              v && (p = parseFloat(v) * 1e3);
            }
            this.log(`Steering manifest ${d.url} rate limited`);
            return;
          }
          this.scheduleRefresh(this.uri || d.url, p);
        },
        onTimeout: (c, d, f) => {
          this.log(`Timeout loading steering manifest (${d.url})`),
            this.scheduleRefresh(this.uri || d.url);
        },
      };
    this.log(`Requesting steering manifest: ${i}`), this.loader.load(s, l, u);
  }
  scheduleRefresh(e, t = this.timeToLoad * 1e3) {
    self.clearTimeout(this.reloadTimer),
      (this.reloadTimer = self.setTimeout(() => {
        this.loadSteeringManifest(e);
      }, t));
  }
}
function Rd(n, e, t, r) {
  !n ||
    Object.keys(e).forEach((i) => {
      const s = n
        .filter((o) => o.groupId === i)
        .map((o) => {
          const a = Se({}, o);
          return (
            (a.details = void 0),
            (a.attrs = new ue(a.attrs)),
            (a.url = a.attrs.URI =
              z0(
                o.url,
                o.attrs["STABLE-RENDITION-ID"],
                "PER-RENDITION-URIS",
                t
              )),
            (a.groupId = a.attrs["GROUP-ID"] = e[i]),
            (a.attrs["PATHWAY-ID"] = r),
            a
          );
        });
      n.push(...s);
    });
}
function z0(n, e, t, r) {
  const { HOST: i, PARAMS: s, [t]: o } = r;
  let a;
  e && ((a = o == null ? void 0 : o[e]), a && (n = a));
  const l = new self.URL(n);
  return (
    i && !a && (l.host = i),
    s &&
      Object.keys(s)
        .sort()
        .forEach((u) => {
          u && l.searchParams.set(u, s[u]);
        }),
    l.href
  );
}
const fx = /^age:\s*[\d.]+\s*$/im;
class j0 {
  constructor(e) {
    (this.xhrSetup = void 0),
      (this.requestTimeout = void 0),
      (this.retryTimeout = void 0),
      (this.retryDelay = void 0),
      (this.config = null),
      (this.callbacks = null),
      (this.context = void 0),
      (this.loader = null),
      (this.stats = void 0),
      (this.xhrSetup = (e && e.xhrSetup) || null),
      (this.stats = new Qs()),
      (this.retryDelay = 0);
  }
  destroy() {
    (this.callbacks = null),
      this.abortInternal(),
      (this.loader = null),
      (this.config = null);
  }
  abortInternal() {
    const e = this.loader;
    self.clearTimeout(this.requestTimeout),
      self.clearTimeout(this.retryTimeout),
      e &&
        ((e.onreadystatechange = null),
        (e.onprogress = null),
        e.readyState !== 4 && ((this.stats.aborted = !0), e.abort()));
  }
  abort() {
    var e;
    this.abortInternal(),
      (e = this.callbacks) != null &&
        e.onAbort &&
        this.callbacks.onAbort(this.stats, this.context, this.loader);
  }
  load(e, t, r) {
    if (this.stats.loading.start)
      throw new Error("Loader can only be used once.");
    (this.stats.loading.start = self.performance.now()),
      (this.context = e),
      (this.config = t),
      (this.callbacks = r),
      this.loadInternal();
  }
  loadInternal() {
    const { config: e, context: t } = this;
    if (!e) return;
    const r = (this.loader = new self.XMLHttpRequest()),
      i = this.stats;
    (i.loading.first = 0), (i.loaded = 0);
    const s = this.xhrSetup;
    s
      ? Promise.resolve()
          .then(() => {
            if (!this.stats.aborted) return s(r, t.url);
          })
          .catch((o) => (r.open("GET", t.url, !0), s(r, t.url)))
          .then(() => {
            this.stats.aborted || this.openAndSendXhr(r, t, e);
          })
          .catch((o) => {
            this.callbacks.onError(
              { code: r.status, text: o.message },
              t,
              r,
              i
            );
          })
      : this.openAndSendXhr(r, t, e);
  }
  openAndSendXhr(e, t, r) {
    e.readyState || e.open("GET", t.url, !0);
    const i = this.context.headers,
      { maxTimeToFirstByteMs: s, maxLoadTimeMs: o } = r.loadPolicy;
    if (i) for (const a in i) e.setRequestHeader(a, i[a]);
    t.rangeEnd &&
      e.setRequestHeader(
        "Range",
        "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)
      ),
      (e.onreadystatechange = this.readystatechange.bind(this)),
      (e.onprogress = this.loadprogress.bind(this)),
      (e.responseType = t.responseType),
      self.clearTimeout(this.requestTimeout),
      (r.timeout = s && G(s) ? s : o),
      (this.requestTimeout = self.setTimeout(
        this.loadtimeout.bind(this),
        r.timeout
      )),
      e.send();
  }
  readystatechange() {
    const { context: e, loader: t, stats: r } = this;
    if (!e || !t) return;
    const i = t.readyState,
      s = this.config;
    if (
      !r.aborted &&
      i >= 2 &&
      (r.loading.first === 0 &&
        ((r.loading.first = Math.max(self.performance.now(), r.loading.start)),
        s.timeout !== s.loadPolicy.maxLoadTimeMs &&
          (self.clearTimeout(this.requestTimeout),
          (s.timeout = s.loadPolicy.maxLoadTimeMs),
          (this.requestTimeout = self.setTimeout(
            this.loadtimeout.bind(this),
            s.loadPolicy.maxLoadTimeMs - (r.loading.first - r.loading.start)
          )))),
      i === 4)
    ) {
      self.clearTimeout(this.requestTimeout),
        (t.onreadystatechange = null),
        (t.onprogress = null);
      const o = t.status,
        a = t.responseType !== "text";
      if (
        o >= 200 &&
        o < 300 &&
        ((a && t.response) || t.responseText !== null)
      ) {
        r.loading.end = Math.max(self.performance.now(), r.loading.first);
        const l = a ? t.response : t.responseText,
          u = t.responseType === "arraybuffer" ? l.byteLength : l.length;
        if (
          ((r.loaded = r.total = u),
          (r.bwEstimate = (r.total * 8e3) / (r.loading.end - r.loading.first)),
          !this.callbacks)
        )
          return;
        const c = this.callbacks.onProgress;
        if ((c && c(r, e, l, t), !this.callbacks)) return;
        const d = { url: t.responseURL, data: l, code: o };
        this.callbacks.onSuccess(d, r, e, t);
      } else {
        const l = s.loadPolicy.errorRetry,
          u = r.retry;
        ws(l, u, !1, o)
          ? this.retry(l)
          : (A.error(`${o} while loading ${e.url}`),
            this.callbacks.onError({ code: o, text: t.statusText }, e, t, r));
      }
    }
  }
  loadtimeout() {
    var e;
    const t = (e = this.config) == null ? void 0 : e.loadPolicy.timeoutRetry,
      r = this.stats.retry;
    if (ws(t, r, !0)) this.retry(t);
    else {
      A.warn(`timeout while loading ${this.context.url}`);
      const i = this.callbacks;
      i &&
        (this.abortInternal(),
        i.onTimeout(this.stats, this.context, this.loader));
    }
  }
  retry(e) {
    const { context: t, stats: r } = this;
    (this.retryDelay = ou(e, r.retry)),
      r.retry++,
      A.warn(
        `${status ? "HTTP Status " + status : "Timeout"} while loading ${
          t.url
        }, retrying ${r.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`
      ),
      this.abortInternal(),
      (this.loader = null),
      self.clearTimeout(this.retryTimeout),
      (this.retryTimeout = self.setTimeout(
        this.loadInternal.bind(this),
        this.retryDelay
      ));
  }
  loadprogress(e) {
    const t = this.stats;
    (t.loaded = e.loaded), e.lengthComputable && (t.total = e.total);
  }
  getCacheAge() {
    let e = null;
    if (this.loader && fx.test(this.loader.getAllResponseHeaders())) {
      const t = this.loader.getResponseHeader("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.loader &&
      new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(
        this.loader.getAllResponseHeaders()
      )
      ? this.loader.getResponseHeader(e)
      : null;
  }
}
function hx() {
  if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
    try {
      return new self.ReadableStream({}), !0;
    } catch {}
  return !1;
}
const px = /(\d+)-(\d+)\/(\d+)/;
class Id {
  constructor(e) {
    (this.fetchSetup = void 0),
      (this.requestTimeout = void 0),
      (this.request = void 0),
      (this.response = void 0),
      (this.controller = void 0),
      (this.context = void 0),
      (this.config = null),
      (this.callbacks = null),
      (this.stats = void 0),
      (this.loader = null),
      (this.fetchSetup = e.fetchSetup || Ex),
      (this.controller = new self.AbortController()),
      (this.stats = new Qs());
  }
  destroy() {
    (this.loader = this.callbacks = null), this.abortInternal();
  }
  abortInternal() {
    const e = this.response;
    (e != null && e.ok) || ((this.stats.aborted = !0), this.controller.abort());
  }
  abort() {
    var e;
    this.abortInternal(),
      (e = this.callbacks) != null &&
        e.onAbort &&
        this.callbacks.onAbort(this.stats, this.context, this.response);
  }
  load(e, t, r) {
    const i = this.stats;
    if (i.loading.start) throw new Error("Loader can only be used once.");
    i.loading.start = self.performance.now();
    const s = gx(e, this.controller.signal),
      o = r.onProgress,
      a = e.responseType === "arraybuffer",
      l = a ? "byteLength" : "length",
      { maxTimeToFirstByteMs: u, maxLoadTimeMs: c } = t.loadPolicy;
    (this.context = e),
      (this.config = t),
      (this.callbacks = r),
      (this.request = this.fetchSetup(e, s)),
      self.clearTimeout(this.requestTimeout),
      (t.timeout = u && G(u) ? u : c),
      (this.requestTimeout = self.setTimeout(() => {
        this.abortInternal(), r.onTimeout(i, e, this.response);
      }, t.timeout)),
      self
        .fetch(this.request)
        .then((d) => {
          this.response = this.loader = d;
          const f = Math.max(self.performance.now(), i.loading.start);
          if (
            (self.clearTimeout(this.requestTimeout),
            (t.timeout = c),
            (this.requestTimeout = self.setTimeout(() => {
              this.abortInternal(), r.onTimeout(i, e, this.response);
            }, c - (f - i.loading.start))),
            !d.ok)
          ) {
            const { status: h, statusText: p } = d;
            throw new vx(p || "fetch, bad network response", h, d);
          }
          return (
            (i.loading.first = f),
            (i.total = yx(d.headers) || i.total),
            o && G(t.highWaterMark)
              ? this.loadProgressively(d, i, e, t.highWaterMark, o)
              : a
              ? d.arrayBuffer()
              : e.responseType === "json"
              ? d.json()
              : d.text()
          );
        })
        .then((d) => {
          const { response: f } = this;
          self.clearTimeout(this.requestTimeout),
            (i.loading.end = Math.max(self.performance.now(), i.loading.first));
          const h = d[l];
          h && (i.loaded = i.total = h);
          const p = { url: f.url, data: d, code: f.status };
          o && !G(t.highWaterMark) && o(i, e, d, f), r.onSuccess(p, i, e, f);
        })
        .catch((d) => {
          if ((self.clearTimeout(this.requestTimeout), i.aborted)) return;
          const f = (d && d.code) || 0,
            h = d ? d.message : null;
          r.onError({ code: f, text: h }, e, d ? d.details : null, i);
        });
  }
  getCacheAge() {
    let e = null;
    if (this.response) {
      const t = this.response.headers.get("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.response ? this.response.headers.get(e) : null;
  }
  loadProgressively(e, t, r, i = 0, s) {
    const o = new b0(),
      a = e.body.getReader(),
      l = () =>
        a
          .read()
          .then((u) => {
            if (u.done)
              return (
                o.dataLength && s(t, r, o.flush(), e),
                Promise.resolve(new ArrayBuffer(0))
              );
            const c = u.value,
              d = c.length;
            return (
              (t.loaded += d),
              d < i || o.dataLength
                ? (o.push(c), o.dataLength >= i && s(t, r, o.flush(), e))
                : s(t, r, c, e),
              l()
            );
          })
          .catch(() => Promise.reject());
    return l();
  }
}
function gx(n, e) {
  const t = {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    signal: e,
    headers: new self.Headers(Se({}, n.headers)),
  };
  return (
    n.rangeEnd &&
      t.headers.set(
        "Range",
        "bytes=" + n.rangeStart + "-" + String(n.rangeEnd - 1)
      ),
    t
  );
}
function mx(n) {
  const e = px.exec(n);
  if (e) return parseInt(e[2]) - parseInt(e[1]) + 1;
}
function yx(n) {
  const e = n.get("Content-Range");
  if (e) {
    const r = mx(e);
    if (G(r)) return r;
  }
  const t = n.get("Content-Length");
  if (t) return parseInt(t);
}
function Ex(n, e) {
  return new self.Request(n.url, e);
}
class vx extends Error {
  constructor(e, t, r) {
    super(e),
      (this.code = void 0),
      (this.details = void 0),
      (this.code = t),
      (this.details = r);
  }
}
const xx = /\s/,
  Tx = {
    newCue(n, e, t, r) {
      const i = [];
      let s, o, a, l, u;
      const c = self.VTTCue || self.TextTrackCue;
      for (let f = 0; f < r.rows.length; f++)
        if (((s = r.rows[f]), (a = !0), (l = 0), (u = ""), !s.isEmpty())) {
          var d;
          for (let g = 0; g < s.chars.length; g++)
            xx.test(s.chars[g].uchar) && a
              ? l++
              : ((u += s.chars[g].uchar), (a = !1));
          (s.cueStartTime = e), e === t && (t += 1e-4), l >= 16 ? l-- : l++;
          const h = K0(u.trim()),
            p = yu(e, t, h);
          (n != null && (d = n.cues) != null && d.getCueById(p)) ||
            ((o = new c(e, t, h)),
            (o.id = p),
            (o.line = f + 1),
            (o.align = "left"),
            (o.position = 10 + Math.min(80, Math.floor((l * 8) / 32) * 10)),
            i.push(o));
        }
      return (
        n &&
          i.length &&
          (i.sort((f, h) =>
            f.line === "auto" || h.line === "auto"
              ? 0
              : f.line > 8 && h.line > 8
              ? h.line - f.line
              : f.line - h.line
          ),
          i.forEach((f) => p0(n, f))),
        i
      );
    },
  },
  Sx = {
    maxTimeToFirstByteMs: 8e3,
    maxLoadTimeMs: 2e4,
    timeoutRetry: null,
    errorRetry: null,
  },
  Ax = qe(
    qe(
      {
        autoStartLoad: !0,
        startPosition: -1,
        defaultAudioCodec: void 0,
        debug: !1,
        capLevelOnFPSDrop: !1,
        capLevelToPlayerSize: !1,
        ignoreDevicePixelRatio: !1,
        initialLiveManifestSize: 1,
        maxBufferLength: 30,
        backBufferLength: 1 / 0,
        maxBufferSize: 60 * 1e3 * 1e3,
        maxBufferHole: 0.1,
        highBufferWatchdogPeriod: 2,
        nudgeOffset: 0.1,
        nudgeMaxRetry: 3,
        maxFragLookUpTolerance: 0.25,
        liveSyncDurationCount: 3,
        liveMaxLatencyDurationCount: 1 / 0,
        liveSyncDuration: void 0,
        liveMaxLatencyDuration: void 0,
        maxLiveSyncPlaybackRate: 1,
        liveDurationInfinity: !1,
        liveBackBufferLength: null,
        maxMaxBufferLength: 600,
        enableWorker: !0,
        workerPath: null,
        enableSoftwareAES: !0,
        startLevel: void 0,
        startFragPrefetch: !1,
        fpsDroppedMonitoringPeriod: 5e3,
        fpsDroppedMonitoringThreshold: 0.2,
        appendErrorMaxRetry: 3,
        loader: j0,
        fLoader: void 0,
        pLoader: void 0,
        xhrSetup: void 0,
        licenseXhrSetup: void 0,
        licenseResponseCallback: void 0,
        abrController: Rv,
        bufferController: bv,
        capLevelController: Eu,
        errorController: vE,
        fpsController: ax,
        stretchShortVideoTrack: !1,
        maxAudioFramesDrift: 1,
        forceKeyFrameOnDiscontinuity: !0,
        abrEwmaFastLive: 3,
        abrEwmaSlowLive: 9,
        abrEwmaFastVoD: 3,
        abrEwmaSlowVoD: 9,
        abrEwmaDefaultEstimate: 5e5,
        abrBandWidthFactor: 0.95,
        abrBandWidthUpFactor: 0.7,
        abrMaxWithRealBitrate: !1,
        maxStarvationDelay: 4,
        maxLoadingDelay: 4,
        minAutoBitrate: 0,
        emeEnabled: !1,
        widevineLicenseUrl: void 0,
        drmSystems: {},
        drmSystemOptions: {},
        requestMediaKeySystemAccessFunc: t0,
        testBandwidth: !0,
        progressive: !1,
        lowLatencyMode: !0,
        cmcd: void 0,
        enableDateRangeMetadataCues: !0,
        enableEmsgMetadataCues: !0,
        enableID3MetadataCues: !0,
        certLoadPolicy: { default: Sx },
        keyLoadPolicy: {
          default: {
            maxTimeToFirstByteMs: 8e3,
            maxLoadTimeMs: 2e4,
            timeoutRetry: {
              maxNumRetry: 1,
              retryDelayMs: 1e3,
              maxRetryDelayMs: 2e4,
              backoff: "linear",
            },
            errorRetry: {
              maxNumRetry: 8,
              retryDelayMs: 1e3,
              maxRetryDelayMs: 2e4,
              backoff: "linear",
            },
          },
        },
        manifestLoadPolicy: {
          default: {
            maxTimeToFirstByteMs: 1 / 0,
            maxLoadTimeMs: 2e4,
            timeoutRetry: {
              maxNumRetry: 2,
              retryDelayMs: 0,
              maxRetryDelayMs: 0,
            },
            errorRetry: {
              maxNumRetry: 1,
              retryDelayMs: 1e3,
              maxRetryDelayMs: 8e3,
            },
          },
        },
        playlistLoadPolicy: {
          default: {
            maxTimeToFirstByteMs: 1e4,
            maxLoadTimeMs: 2e4,
            timeoutRetry: {
              maxNumRetry: 2,
              retryDelayMs: 0,
              maxRetryDelayMs: 0,
            },
            errorRetry: {
              maxNumRetry: 2,
              retryDelayMs: 1e3,
              maxRetryDelayMs: 8e3,
            },
          },
        },
        fragLoadPolicy: {
          default: {
            maxTimeToFirstByteMs: 1e4,
            maxLoadTimeMs: 12e4,
            timeoutRetry: {
              maxNumRetry: 4,
              retryDelayMs: 0,
              maxRetryDelayMs: 0,
            },
            errorRetry: {
              maxNumRetry: 6,
              retryDelayMs: 1e3,
              maxRetryDelayMs: 8e3,
            },
          },
        },
        steeringManifestLoadPolicy: {
          default: {
            maxTimeToFirstByteMs: 1e4,
            maxLoadTimeMs: 2e4,
            timeoutRetry: {
              maxNumRetry: 2,
              retryDelayMs: 0,
              maxRetryDelayMs: 0,
            },
            errorRetry: {
              maxNumRetry: 1,
              retryDelayMs: 1e3,
              maxRetryDelayMs: 8e3,
            },
          },
        },
        manifestLoadingTimeOut: 1e4,
        manifestLoadingMaxRetry: 1,
        manifestLoadingRetryDelay: 1e3,
        manifestLoadingMaxRetryTimeout: 64e3,
        levelLoadingTimeOut: 1e4,
        levelLoadingMaxRetry: 4,
        levelLoadingRetryDelay: 1e3,
        levelLoadingMaxRetryTimeout: 64e3,
        fragLoadingTimeOut: 2e4,
        fragLoadingMaxRetry: 6,
        fragLoadingRetryDelay: 1e3,
        fragLoadingMaxRetryTimeout: 64e3,
      },
      Lx()
    ),
    {},
    {
      subtitleStreamController: _v,
      subtitleTrackController: Ov,
      timelineController: ix,
      audioStreamController: Fv,
      audioTrackController: wv,
      emeController: or,
      cmcdController: qt,
      contentSteeringController: dx,
    }
  );
function Lx() {
  return {
    cueHandler: Tx,
    enableWebVTT: !0,
    enableIMSC1: !0,
    enableCEA708Captions: !0,
    captionsTextTrack1Label: "English",
    captionsTextTrack1LanguageCode: "en",
    captionsTextTrack2Label: "Spanish",
    captionsTextTrack2LanguageCode: "es",
    captionsTextTrack3Label: "Unknown CC",
    captionsTextTrack3LanguageCode: "",
    captionsTextTrack4Label: "Unknown CC",
    captionsTextTrack4LanguageCode: "",
    renderTextTracksNatively: !0,
  };
}
function Cx(n, e) {
  if (
    (e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) &&
    (e.liveSyncDuration || e.liveMaxLatencyDuration)
  )
    throw new Error(
      "Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration"
    );
  if (
    e.liveMaxLatencyDurationCount !== void 0 &&
    (e.liveSyncDurationCount === void 0 ||
      e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)
  )
    throw new Error(
      'Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"'
    );
  if (
    e.liveMaxLatencyDuration !== void 0 &&
    (e.liveSyncDuration === void 0 ||
      e.liveMaxLatencyDuration <= e.liveSyncDuration)
  )
    throw new Error(
      'Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"'
    );
  const t = il(n),
    r = ["manifest", "level", "frag"],
    i = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return (
    r.forEach((s) => {
      const o = `${s === "level" ? "playlist" : s}LoadPolicy`,
        a = e[o] === void 0,
        l = [];
      i.forEach((u) => {
        const c = `${s}Loading${u}`,
          d = e[c];
        if (d !== void 0 && a) {
          l.push(c);
          const f = t[o].default;
          switch (((e[o] = { default: f }), u)) {
            case "TimeOut":
              (f.maxLoadTimeMs = d), (f.maxTimeToFirstByteMs = d);
              break;
            case "MaxRetry":
              (f.errorRetry.maxNumRetry = d), (f.timeoutRetry.maxNumRetry = d);
              break;
            case "RetryDelay":
              (f.errorRetry.retryDelayMs = d),
                (f.timeoutRetry.retryDelayMs = d);
              break;
            case "MaxRetryTimeout":
              (f.errorRetry.maxRetryDelayMs = d),
                (f.timeoutRetry.maxRetryDelayMs = d);
              break;
          }
        }
      }),
        l.length &&
          A.warn(
            `hls.js config: "${l.join(
              '", "'
            )}" setting(s) are deprecated, use "${o}": ${JSON.stringify(e[o])}`
          );
    }),
    qe(qe({}, t), e)
  );
}
function il(n) {
  return n && typeof n == "object"
    ? Array.isArray(n)
      ? n.map(il)
      : Object.keys(n).reduce((e, t) => ((e[t] = il(n[t])), e), {})
    : n;
}
function Dx(n) {
  const e = n.loader;
  e !== Id && e !== j0
    ? (A.log(
        "[config]: Custom loader detected, cannot enable progressive streaming"
      ),
      (n.progressive = !1))
    : hx() &&
      ((n.loader = Id),
      (n.progressive = !0),
      (n.enableSoftwareAES = !0),
      A.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
class Mt {
  static get version() {
    return "1.4.4";
  }
  static isSupported() {
    return ME();
  }
  static get Events() {
    return y;
  }
  static get ErrorTypes() {
    return K;
  }
  static get ErrorDetails() {
    return F;
  }
  static get DefaultConfig() {
    return Mt.defaultConfig ? Mt.defaultConfig : Ax;
  }
  static set DefaultConfig(e) {
    Mt.defaultConfig = e;
  }
  constructor(e = {}) {
    (this.config = void 0),
      (this.userConfig = void 0),
      (this.coreComponents = void 0),
      (this.networkControllers = void 0),
      (this._emitter = new gu()),
      (this._autoLevelCapping = void 0),
      (this._maxHdcpLevel = null),
      (this.abrController = void 0),
      (this.bufferController = void 0),
      (this.capLevelController = void 0),
      (this.latencyController = void 0),
      (this.levelController = void 0),
      (this.streamController = void 0),
      (this.audioTrackController = void 0),
      (this.subtitleTrackController = void 0),
      (this.emeController = void 0),
      (this.cmcdController = void 0),
      (this._media = null),
      (this.url = null),
      cy(e.debug || !1, "Hls instance");
    const t = (this.config = Cx(Mt.DefaultConfig, e));
    (this.userConfig = e),
      (this._autoLevelCapping = -1),
      t.progressive && Dx(t);
    const {
        abrController: r,
        bufferController: i,
        capLevelController: s,
        errorController: o,
        fpsController: a,
      } = t,
      l = new o(this),
      u = (this.abrController = new r(this)),
      c = (this.bufferController = new i(this)),
      d = (this.capLevelController = new s(this)),
      f = new a(this),
      h = new eE(this),
      p = new sE(this),
      g = t.contentSteeringController,
      v = g ? new g(this) : null,
      m = (this.levelController = new TE(this, v)),
      E = new SE(this),
      x = new LE(this.config),
      T = (this.streamController = new Cv(this, E, x));
    d.setStreamController(T), f.setStreamController(T);
    const S = [h, m, T];
    v && S.splice(1, 0, v), (this.networkControllers = S);
    const R = [u, c, d, f, p, E];
    this.audioTrackController = this.createController(
      t.audioTrackController,
      S
    );
    const L = t.audioStreamController;
    L && S.push(new L(this, E, x)),
      (this.subtitleTrackController = this.createController(
        t.subtitleTrackController,
        S
      ));
    const I = t.subtitleStreamController;
    I && S.push(new I(this, E, x)),
      this.createController(t.timelineController, R),
      (x.emeController = this.emeController =
        this.createController(t.emeController, R)),
      (this.cmcdController = this.createController(t.cmcdController, R)),
      (this.latencyController = this.createController(oE, R)),
      (this.coreComponents = R),
      S.push(l);
    const _ = l.onErrorOut;
    typeof _ == "function" && this.on(y.ERROR, _, l);
  }
  createController(e, t) {
    if (e) {
      const r = new e(this);
      return t && t.push(r), r;
    }
    return null;
  }
  on(e, t, r = this) {
    this._emitter.on(e, t, r);
  }
  once(e, t, r = this) {
    this._emitter.once(e, t, r);
  }
  removeAllListeners(e) {
    this._emitter.removeAllListeners(e);
  }
  off(e, t, r = this, i) {
    this._emitter.off(e, t, r, i);
  }
  listeners(e) {
    return this._emitter.listeners(e);
  }
  emit(e, t, r) {
    return this._emitter.emit(e, t, r);
  }
  trigger(e, t) {
    if (this.config.debug) return this.emit(e, e, t);
    try {
      return this.emit(e, e, t);
    } catch (r) {
      A.error(
        "An internal error happened while handling event " +
          e +
          '. Error message: "' +
          r.message +
          '". Here is a stacktrace:',
        r
      ),
        this.trigger(y.ERROR, {
          type: K.OTHER_ERROR,
          details: F.INTERNAL_EXCEPTION,
          fatal: !1,
          event: e,
          error: r,
        });
    }
    return !1;
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
  destroy() {
    A.log("destroy"),
      this.trigger(y.DESTROYING, void 0),
      this.detachMedia(),
      this.removeAllListeners(),
      (this._autoLevelCapping = -1),
      (this.url = null),
      this.networkControllers.forEach((t) => t.destroy()),
      (this.networkControllers.length = 0),
      this.coreComponents.forEach((t) => t.destroy()),
      (this.coreComponents.length = 0);
    const e = this.config;
    (e.xhrSetup = e.fetchSetup = void 0), (this.userConfig = null);
  }
  attachMedia(e) {
    A.log("attachMedia"),
      (this._media = e),
      this.trigger(y.MEDIA_ATTACHING, { media: e });
  }
  detachMedia() {
    A.log("detachMedia"),
      this.trigger(y.MEDIA_DETACHING, void 0),
      (this._media = null);
  }
  loadSource(e) {
    this.stopLoad();
    const t = this.media,
      r = this.url,
      i = (this.url = ru.buildAbsoluteURL(self.location.href, e, {
        alwaysNormalize: !0,
      }));
    A.log(`loadSource:${i}`),
      t &&
        r &&
        (r !== i || this.bufferController.hasSourceTypes()) &&
        (this.detachMedia(), this.attachMedia(t)),
      this.trigger(y.MANIFEST_LOADING, { url: e });
  }
  startLoad(e = -1) {
    A.log(`startLoad(${e})`),
      this.networkControllers.forEach((t) => {
        t.startLoad(e);
      });
  }
  stopLoad() {
    A.log("stopLoad"),
      this.networkControllers.forEach((e) => {
        e.stopLoad();
      });
  }
  swapAudioCodec() {
    A.log("swapAudioCodec"), this.streamController.swapAudioCodec();
  }
  recoverMediaError() {
    A.log("recoverMediaError");
    const e = this._media;
    this.detachMedia(), e && this.attachMedia(e);
  }
  removeLevel(e, t = 0) {
    this.levelController.removeLevel(e, t);
  }
  get levels() {
    const e = this.levelController.levels;
    return e || [];
  }
  get currentLevel() {
    return this.streamController.currentLevel;
  }
  set currentLevel(e) {
    A.log(`set currentLevel:${e}`),
      (this.loadLevel = e),
      this.abrController.clearTimer(),
      this.streamController.immediateLevelSwitch();
  }
  get nextLevel() {
    return this.streamController.nextLevel;
  }
  set nextLevel(e) {
    A.log(`set nextLevel:${e}`),
      (this.levelController.manualLevel = e),
      this.streamController.nextLevelSwitch();
  }
  get loadLevel() {
    return this.levelController.level;
  }
  set loadLevel(e) {
    A.log(`set loadLevel:${e}`), (this.levelController.manualLevel = e);
  }
  get nextLoadLevel() {
    return this.levelController.nextLoadLevel;
  }
  set nextLoadLevel(e) {
    this.levelController.nextLoadLevel = e;
  }
  get firstLevel() {
    return Math.max(this.levelController.firstLevel, this.minAutoLevel);
  }
  set firstLevel(e) {
    A.log(`set firstLevel:${e}`), (this.levelController.firstLevel = e);
  }
  get startLevel() {
    return this.levelController.startLevel;
  }
  set startLevel(e) {
    A.log(`set startLevel:${e}`),
      e !== -1 && (e = Math.max(e, this.minAutoLevel)),
      (this.levelController.startLevel = e);
  }
  get capLevelToPlayerSize() {
    return this.config.capLevelToPlayerSize;
  }
  set capLevelToPlayerSize(e) {
    const t = !!e;
    t !== this.config.capLevelToPlayerSize &&
      (t
        ? this.capLevelController.startCapping()
        : (this.capLevelController.stopCapping(),
          (this.autoLevelCapping = -1),
          this.streamController.nextLevelSwitch()),
      (this.config.capLevelToPlayerSize = t));
  }
  get autoLevelCapping() {
    return this._autoLevelCapping;
  }
  get bandwidthEstimate() {
    const { bwEstimator: e } = this.abrController;
    return e ? e.getEstimate() : NaN;
  }
  get ttfbEstimate() {
    const { bwEstimator: e } = this.abrController;
    return e ? e.getEstimateTTFB() : NaN;
  }
  set autoLevelCapping(e) {
    this._autoLevelCapping !== e &&
      (A.log(`set autoLevelCapping:${e}`), (this._autoLevelCapping = e));
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel;
  }
  set maxHdcpLevel(e) {
    Ja.indexOf(e) > -1 && (this._maxHdcpLevel = e);
  }
  get autoLevelEnabled() {
    return this.levelController.manualLevel === -1;
  }
  get manualLevel() {
    return this.levelController.manualLevel;
  }
  get minAutoLevel() {
    const {
      levels: e,
      config: { minAutoBitrate: t },
    } = this;
    if (!e) return 0;
    const r = e.length;
    for (let i = 0; i < r; i++) if (e[i].maxBitrate >= t) return i;
    return 0;
  }
  get maxAutoLevel() {
    const { levels: e, autoLevelCapping: t, maxHdcpLevel: r } = this;
    let i;
    if ((t === -1 && e && e.length ? (i = e.length - 1) : (i = t), r))
      for (let s = i; s--; ) {
        const o = e[s].attrs["HDCP-LEVEL"];
        if (o && o <= r) return s;
      }
    return i;
  }
  get nextAutoLevel() {
    return Math.min(
      Math.max(this.abrController.nextAutoLevel, this.minAutoLevel),
      this.maxAutoLevel
    );
  }
  set nextAutoLevel(e) {
    this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e);
  }
  get playingDate() {
    return this.streamController.currentProgramDateTime;
  }
  get mainForwardBufferInfo() {
    return this.streamController.getMainFwdBufferInfo();
  }
  get audioTracks() {
    const e = this.audioTrackController;
    return e ? e.audioTracks : [];
  }
  get audioTrack() {
    const e = this.audioTrackController;
    return e ? e.audioTrack : -1;
  }
  set audioTrack(e) {
    const t = this.audioTrackController;
    t && (t.audioTrack = e);
  }
  get subtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTracks : [];
  }
  get subtitleTrack() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTrack : -1;
  }
  get media() {
    return this._media;
  }
  set subtitleTrack(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleTrack = e);
  }
  get subtitleDisplay() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleDisplay : !1;
  }
  set subtitleDisplay(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleDisplay = e);
  }
  get lowLatencyMode() {
    return this.config.lowLatencyMode;
  }
  set lowLatencyMode(e) {
    this.config.lowLatencyMode = e;
  }
  get liveSyncPosition() {
    return this.latencyController.liveSyncPosition;
  }
  get latency() {
    return this.latencyController.latency;
  }
  get maxLatency() {
    return this.latencyController.maxLatency;
  }
  get targetLatency() {
    return this.latencyController.targetLatency;
  }
  get drift() {
    return this.latencyController.drift;
  }
  get forceStartLoad() {
    return this.streamController.forceStartLoad;
  }
}
Mt.defaultConfig = void 0;
const Rx = (n) => {
    const { source: e } = n;
    return (
      $.exports.useEffect(() => {
        const t = document.getElementById("video"),
          r = e;
        if (Mt.isSupported()) {
          const i = new Mt();
          i.loadSource(r),
            i.attachMedia(t),
            i.on(Mt.Events.MANIFEST_PARSED, function () {});
        } else
          t.canPlayType("application/vnd.apple.mpegurl") &&
            ((t.src = r), t.addEventListener("loadedmetadata", function () {}));
      }),
      B.createElement(
        B.Fragment,
        null,
        B.createElement("video", {
          controls: !0,
          autoPlay: !1,
          style: { width: "100%" },
          id: "video",
        })
      )
    );
  },
  sl = [
    {
      name: "\u4E00\u4E5D\u56DB\u4E8C",
      source:
        "https://cdn.zoubuting.com/20221130/3IIvCUnL/1000kb/hls/index.m3u8",
      cover: "https://www.nunuyy5.org/img/22752.jpg",
      score: "81",
      details: {
        alias: [
          "\u6E29\u65451942",
          "1942",
          "\u6E29\u6545\u4E00\u4E5D\u56DB\u4E8C",
          "Back to 1942",
        ],
        directors: ["\u51AF\u5C0F\u521A"],
        scriptwriter: ["\u5218\u9707\u4E91"],
        actors: [
          "\u5F20\u56FD\u7ACB",
          "\u5F20\u9ED8",
          "\u5F90\u5E06",
          "\u674E\u96EA\u5065",
          "\u9648\u9053\u660E",
          "\u827E\u5FB7\u91CC\u5B89\xB7\u5E03\u6D1B\u8FEA",
          "\u8482\u59C6\xB7\u7F57\u5BBE\u65AF",
          "\u51AF\u8FDC\u5F81",
          "\u5F20\u6DB5\u4E88",
          "\u738B\u5B50\u6587",
          "\u6BB5\u5955\u5B8F",
          "\u8303\u4F1F",
          "\u67EF\u84DD",
          "\u5F20\u56FD\u5F3A",
          "\u6797\u6C38\u5065",
          "\u4E54\u632F\u5B87",
          "\u674E\u5029",
          "\u8D75\u6BC5",
        ],
        types: ["\u5267\u60C5", "\u5386\u53F2", "\u6218\u4E89", "\u707E\u96BE"],
        region: "\u4E2D\u56FD\u5927\u9646",
        language: [
          "\u6CB3\u5357\u65B9\u8A00",
          "\u82F1\u8BED",
          "\u65E5\u8BED",
          "\u6C49\u8BED\u666E\u901A\u8BDD",
        ],
        date: "2012-11-29",
        duration: "146\u5206\u949F",
        IMDB: "tt2113822",
        intro:
          "1942\u5E74\uFF0C\u6297\u65E5\u6218\u4E89\u4E0E\u7B2C\u4E8C\u6B21\u4E16\u754C\u5927\u6218\u6B63\u5904\u4E8E\u767D\u70ED\u5316\u9636\u6BB5\u3002\u71CE\u539F\u4E4B\u706B\uFF0C\u751F\u7075\u6D82\u70AD\uFF0C\u5929\u707E\u4EBA\u7978\uFF0C\u54C0\u9E3F\u904D\u91CE\u3002\u5F53\u519B\u4E8B\u5BB6\u548C\u653F\u6CBB\u5BB6\u7684\u76EE\u5149\u805A\u7126\u5728\u4E00\u57CE\u4E00\u90ED\u7684\u5F81\u4F10\u52AB\u63A0\u4E4B\u65F6\uFF0C\u51E0\u4E4E\u9C9C\u5C11\u6709\u4EBA\u6CE8\u610F\u5230\u53E4\u8001\u7684\u4E2D\u539F\u6CB3\u5357\u6B63\u7206\u53D1\u4E00\u573A\u60E8\u7EDD\u4EBA\u5BF0\u7684\u5927\u65F1\u707E\u3002\u5F71\u7247\u7684\u4E3B\u89D2\u8001\u4E1C\u5BB6\uFF08\u5F20\u56FD\u7ACB \u9970\uFF09\uFF0C\u72E1\u733E\u3001\u5E02\u4FA9\uFF0C\u5178\u578B\u7684\u5C01\u5EFA\u5730\u4E3B\uFF0C\u53EF\u5373\u4FBF\u5982\u6B64\u4E5F\u65E0\u6CD5\u5BF9\u6297\u8FD9\u53F2\u65E0\u524D\u4F8B\u7684\u707E\u96BE\uFF0C\u4ED6\u88AB\u8FEB\u9003\u8352\uFF0C\u4EB2\u773C\u89C1\u8BC1\u7740\u513F\u5B50\u3001\u513F\u5AB3\u3001\u8001\u4F34\u7B49\u4EB2\u4EBA\u7684\u79CD\u79CD\u6B7B\u72B6\u3002\u4ED6\u7684\u906D\u9047\u662F\u4E09\u767E\u4E07\u707E\u6C11\u7684\u7F29\u5F71\uFF0C\u9762\u5BF9\u8FD9\u7FA4\u4EBA\u7684\u82E6\u96BE\uFF0C\u65E0\u8BBA\u662F\u9AD8\u9AD8\u5728\u4E0A\u7684\u848B\u59D4\u5458\u957F\uFF08\u9648\u9053\u660E \u9970\uFF09\uFF0C\u8FD8\u662F\u6DF1\u5165\u6C11\u95F4\u62A5\u9053\u707E\u96BE\u771F\u76F8\u7684\u7F8E\u56FD\u8BB0\u8005\u767D\u4FEE\u5FB7\uFF08\u963F\u5FB7\u91CC\u5B89\u2022\u5E03\u52B3\u8FEA Adrien Brody \u9970\uFF09\uFF0C\u4EE5\u53CA\u6D77\u5185\u5916\u7684\u6BCF\u4E00\u4E2A\u4EBA\uFF0C\u5982\u4F55\u80FD\u4ECE\u8FD9\u773C\u524D\u7684\u4EBA\u95F4\u70BC\u72F1\u4E4B\u666F\u4FA7\u76EE\u3002\u7EDD\u671B\u65E0\u6B62\u7684\u9003\u751F\u574E\u9014\uFF0C\u4E2D\u534E\u6C11\u65CF\u591A\u821B\u547D\u8FD0\u7684\u82E6\u96BE\u4E00\u6591\u2026\u2026\u672C\u7247\u6839\u636E\u5218\u9707\u4E91\u7684\u5C0F\u8BF4\u300A\u6E29\u6545\u4E00\u4E5D\u56DB\u4E8C\u300B\u6539\u7F16\u3002",
      },
    },
    {
      name: "\u6D3B\u7740",
      source:
        "https://vip.lzcdn2.com/20220407/2614_9730c040/1200k/hls/mixed.m3u8",
      cover: "https://www.nunuyy5.org/img/10359.jpg",
      score: "93",
      details: {
        alias: ["\u4EBA\u751F", "Lifetimes", "To Live"],
        directors: ["\u5F20\u827A\u8C0B"],
        scriptwriter: ["\u82A6\u82C7", "\u4F59\u534E"],
        actors: [
          "\u845B\u4F18",
          "\u5DE9\u4FD0",
          "\u59DC\u6B66",
          "\u725B\u7287",
          "\u90ED\u6D9B",
          "\u5F20\u7490",
          "\u502A\u5927\u7EA2",
          "\u8096\u806A",
          "\u8463\u98DE",
          "\u5218\u5929\u6C60",
          "\u8463\u7ACB\u8303",
          "\u9EC4\u5B97\u6D1B",
          "\u5218\u71D5\u747E",
          "\u674E\u8FDE\u4E49",
          "\u6768\u540C\u987A",
        ],
        types: ["\u5267\u60C5", "\u5BB6\u5EAD", "\u5386\u53F2"],
        region: "\u4E2D\u56FD\u5927\u9646 / \u4E2D\u56FD\u9999\u6E2F",
        language: ["\u6C49\u8BED\u666E\u901A\u8BDD"],
        date: "1994-06-30",
        duration: "132\u5206\u949F",
        IMDB: "tt0110081",
        intro:
          "\u6839\u636E\u4F59\u534E\u540C\u540D\u5C0F\u8BF4\u6539\u7F16\u3002\u5BCC\u5C11\u798F\u8D35\uFF08\u845B\u4F18\uFF09\u55DC\u8D4C\u6210\u6027\uFF0C\u59BB\u5B50\u5BB6\u73CD\uFF08\u5DE9\u4FD0\uFF09\u5C61\u529D\u65E0\u679C\u540E\u5E26\u7740\u5973\u513F\u51E4\u971E\u79BB\u5F00\u4E86\u4ED6\uFF0C\u5F53\u591C\uFF0C\u798F\u8D35\u8F93\u5149\u6240\u6709\u5BB6\u4EA7\u6C14\u6B7B\u7236\u4EB2\uFF0C\u88AB\u8FEB\u9760\u53D8\u5356\u6BCD\u4EB2\u9996\u9970\u79DF\u95F4\u7834\u5C4B\u8FC7\u6D3B\u3002\u4E00\u5E74\u540E\uFF0C\u5BB6\u73CD\u624B\u62C9\u51E4\u971E\u6000\u62B1\u521A\u51FA\u4E16\u7684\u513F\u5B50\u6709\u5E86\u56DE\u5230\u5BB6\u4E2D\uFF0C\u798F\u8D35\u75DB\u6539\u524D\u975E\uFF0C\u5F00\u59CB\u9760\u6F14\u76AE\u5F71\u620F\u8FC7\u8D77\u5B89\u4EFD\u5B88\u5DF1\u7684\u65E5\u5B50\u3002\u4F46\u597D\u666F\u4E0D\u5E38\uFF0C\u5185\u6218\u65F6\u671F\uFF0C\u798F\u8D35\u88AB\u56FD\u6C11\u515A\u6293\u53BB\u5F53\u52B3\u5DE5\uFF0C\u4E00\u756A\u8F97\u8F6C\u7EC8\u56DE\u5230\u5BB6\u4E61\u4E0E\u4E00\u5BB6\u4EBA\u56E2\u5706\u540E\uFF0C\u51E4\u971E\u56E0\u75C5\u53D8\u6210\u54D1\u5DF4\uFF0C\u800C\u5728\u540E\u6765\u7684\u5927\u8DC3\u8FDB\u8FD0\u52A8\u548C\u6587\u5316\u5927\u9769\u547D\u4E2D\uFF0C\u4ED6\u867D\u83B7\u67D0\u4E9B\u5C0F\u798F\uFF0C\u9006\u5883\u5374\u4E5F\u4E00\u76F4\u4E0E\u4ED6\u5982\u5F71\u76F8\u968F\u3002",
      },
    },
    {
      name: "\u76D7\u68A6\u7A7A\u95F4 Inception",
      source: "https://vip.lzcdn2.com/20220318/5_1dddc8ed/1200k/hls/mixed.m3u8",
      cover: "https://www.nunuyy5.org/img/7234.jpg",
      score: "94",
      details: {
        alias: [
          "\u6F5C\u884C\u51F6\u95F4(\u6E2F)",
          "\u5168\u9762\u542F\u52A8(\u53F0)",
          "\u5960\u57FA",
          "\u5FC3\u7075\u72AF\u6848",
          "\u8BB0\u5FC6\u8FF7\u9635",
          "\u8BB0\u5FC6\u9B54\u65B9",
        ],
        directors: ["\u514B\u91CC\u65AF\u6258\u5F17\xB7\u8BFA\u5170"],
        scriptwriter: ["\u514B\u91CC\u65AF\u6258\u5F17\xB7\u8BFA\u5170"],
        actors: [
          "\u83B1\u6602\u7EB3\u591A\xB7\u8FEA\u5361\u666E\u91CC\u5965",
          "\u7EA6\u745F\u592B\xB7\u9AD8\u767B-\u83B1\u7EF4\u7279",
          "\u827E\u5229\u5965\u7279\xB7\u4F69\u5409",
          "\u6C64\u59C6\xB7\u54C8\u8FEA",
          "\u6E21\u8FB9\u8C26",
          "\u8FEA\u5229\u666E\xB7\u52B3",
          "\u57FA\u91CC\u5B89\xB7\u58A8\u83F2",
          "\u6C64\u59C6\xB7\u8D1D\u4F26\u6770",
          "\u739B\u4E3D\u6602\xB7\u6B4C\u8FEA\u4E9A",
          "\u76AE\u7279\xB7\u6CE2\u65AF\u5C14\u601D\u97E6\u7279",
          "\u8FC8\u514B\u5C14\xB7\u51EF\u6069",
          "\u5362\u5361\u65AF\xB7\u54C8\u65AF",
          "\u674E\u592A\u529B",
          "\u514B\u83B1\u5C14\xB7\u5409\u5C14\u857E",
          "\u9A6C\u683C\u52AA\u65AF\xB7\u8BFA\u5170",
          "\u6CF0\u52D2\xB7\u5409\u857E",
          "\u4E54\u7EB3\u68EE\xB7\u5409\u5C14",
          "\u6C34\u6E90\u58EB\u90CE",
          "\u5188\u672C\u7389\u4E8C",
          "\u5384\u5C14\xB7\u5361\u6885\u4F26",
          "\u745E\u6069\xB7\u6D77\u6C83\u5FB7",
          "\u7C73\u5170\u8FBE\xB7\u8BFA\u5170",
          "\u62C9\u4EC0\xB7\u8D39\u52A0",
          "\u8482\u59C6\xB7\u79D1\u52D2\u8D6B",
          "\u59B2\u9732\u62C9\xB7\u83B1\u8389",
        ],
        types: ["\u5267\u60C5", "\u79D1\u5E7B", "\u60AC\u7591", "\u5192\u9669"],
        region: "\u7F8E\u56FD / \u82F1\u56FD",
        language: ["\u82F1\u8BED", "\u65E5\u8BED", "\u6CD5\u8BED"],
        date: "2010-09-01",
        duration: "148\u5206\u949F",
        IMDB: "tt1375666",
        intro:
          "\u9053\u59C6\xB7\u67EF\u5E03\uFF08\u83B1\u6602\u7EB3\u591A\xB7\u8FEA\u5361\u666E\u91CC\u5965 Leonardo DiCaprio \u9970\uFF09\u4E0E\u540C\u4E8B\u963F\u745F\uFF08\u7EA6\u745F\u592B\xB7\u6208\u767B-\u83B1\u7EF4\u7279 Joseph Gordon-Levitt \u9970\uFF09\u548C\u7EB3\u4EC0\uFF08\u5362\u5361\u65AF\xB7\u54C8\u65AF Lukas Haas \u9970\uFF09\u5728\u4E00\u6B21\u9488\u5BF9\u65E5\u672C\u80FD\u6E90\u5927\u4EA8\u9F50\u85E4\uFF08\u6E21\u8FB9\u8C26 \u9970\uFF09\u7684\u76D7\u68A6\u884C\u52A8\u4E2D\u5931\u8D25\uFF0C\u53CD\u88AB\u9F50\u85E4\u5229\u7528\u3002\u9F50\u85E4\u5A01\u903C\u5229\u8BF1\u56E0\u906D\u901A\u7F09\u800C\u6D41\u4EA1\u6D77\u5916\u7684\u67EF\u5E03\u5E2E\u4ED6\u62C6\u5206\u4ED6\u7ADE\u4E89\u5BF9\u624B\u7684\u516C\u53F8\uFF0C\u91C7\u53D6\u6781\u7AEF\u63AA\u65BD\u5728\u5176\u552F\u4E00\u7EE7\u627F\u4EBA\u7F57\u4F2F\u7279\xB7\u8D39\u5E0C\u5C14\uFF08\u5E0C\u91CC\u5B89\xB7\u58A8\u83F2 Cillian Murphy \u9970\uFF09\u7684\u6DF1\u5C42\u6F5C\u610F\u8BC6\u4E2D\u79CD\u4E0B\u653E\u5F03\u5BB6\u65CF\u516C\u53F8\u3001\u81EA\u7ACB\u95E8\u6237\u7684\u60F3\u6CD5\u3002\u4E3A\u4E86\u91CD\u8FD4\u7F8E\u56FD\uFF0C\u67EF\u5E03\u5077\u5077\u6C42\u52A9\u4E8E\u5CB3\u7236\u8FC8\u5C14\u65AF\uFF08\u8FC8\u514B\u5C14\xB7\u51EF\u6069 Michael Caine \u9970\uFF09\uFF0C\u5438\u6536\u4E86\u5E74\u8F7B\u7684\u68A6\u5883\u8BBE\u8BA1\u5E08\u827E\u91CC\u963F\u5FB7\u59AE\uFF08\u827E\u4F26\xB7\u4F69\u5409 Ellen Page \u9970\uFF09\u3001\u68A6\u5883\u6F14\u5458\u827E\u59C6\u65AF\uFF08\u6C64\u59C6\xB7\u54C8\u8FEA Tom Hardy \u9970\uFF09\u548C\u836F\u5242\u5E08\u7EA6\u745F\u592B\uFF08\u8FEA\u5229\u666E\xB7\u52B3 Dileep Rao \u9970\uFF09\u52A0\u5165\u884C\u52A8\u3002\u5728\u4E00\u5C42\u5C42\u9012\u8FDB\u7684\u68A6\u5883\u4E2D\uFF0C\u67EF\u5E03\u4E0D\u4EC5\u8981\u5BF9\u4ED8\u8D39\u5E0C\u5C14\u6F5C\u610F\u8BC6\u7684\u672C\u80FD\u53CD\u6297\uFF0C\u8FD8\u5FC5\u987B\u76F4\u9762\u5DF2\u901D\u59BB\u5B50\u6885\u5C14\uFF08\u739B\u4E3D\u6602\xB7\u6B4C\u8FEA\u4E9A Marion Cotillard \u9970\uFF09\u7684\u5904\u5904\u7834\u574F\uFF0C\u5B9E\u9645\u60C5\u51B5\u8FDC\u6BD4\u9884\u60F3\u5371\u9669\u5F97\u591A\u2026\u2026",
      },
    },
    {
      name: "\u72FC\u7FA4",
      source: "",
      cover:
        "https://pic.rmb.bdstatic.com/bjh/4092b755ca751ae195a4f6635a041843.jpeg",
      score: "55",
      details: {
        directors: ["\u848B\u4E1B"],
        actors: [
          "\u5F20\u664B",
          "\u674E\u6CBB\u5EF7",
          "\u848B\u7490\u971E",
          "\u5218\u667A\u6EE1",
          "\u53F6\u6D4F",
          "\u5F20\u8863",
          "\u5510\u56FD\u5FE0",
          "\u9AD8\u51AC\u5E73",
          "\u859B\u4F73\u51DD",
        ],
        types: ["\u52A8\u4F5C", "\u6218\u4E89"],
        region: "\u4E2D\u56FD\u5927\u9646",
        alias: [
          "\u6211\u7684\u4F63\u5175\u751F\u6DAF",
          "\u4F63\u5175",
          "Wolf Pack",
        ],
        intro:
          "\u5883\u5916\u6050\u6016\u52BF\u529B\u6380\u8D77\u80FD\u6E90\u5371\u673A\uFF0C7\u540D\u53CD\u6050\u7CBE\u82F1\u79D8\u5BC6\u5B88\u62A4\u201C\u5730\u4E0B\u957F\u57CE\u201D\uFF01\u8001\u5201\uFF08\u5F20\u664B \u9970\uFF09\u7387\u9886\u7684\u201C\u72FC\u7FA4\u5C0F\u961F\u201D\u957F\u671F\u4ECE\u4E8B\u5883\u5916\u5B89\u4FDD\u5DE5\u4F5C\uFF0C\u67D0\u6B21\u6267\u884C\u4EFB\u52A1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u610F\u5916\u53D1\u73B0\u5883\u5916\u6050\u6016\u52BF\u529B\u5C06\u9ED1\u624B\u4F38\u5411\u4E2D\u56FD\u80FD\u6E90\u547D\u8109\uFF01\u8001\u5201\u4E34\u5371\u53D7\u547D\uFF0C\u7387\u9886\u67EF\u7AE5\uFF08\u674E\u6CBB\u5EF7 \u9970\uFF09\u3001\u5996\u602A\uFF08\u848B\u7490\u971E \u9970\uFF09\u7B49\u961F\u5458\u96F7\u9706\u51FA\u51FB\u3002\u5371\u673A\u8FEB\u5728\u7709\u776B\uFF0C\u201C\u72FC\u7FA4\u5C0F\u961F\u201D\u80FD\u5426\u5316\u9669\u4E3A\u5937\uFF1F",
        scriptwriter: ["\u848B\u4E1B"],
        date: "2022-09-09",
        duration: "105\u5206\u949F",
        language: ["\u6C49\u8BED\u666E\u901A\u8BDD", "\u82F1\u8BED"],
        IMDB: "tt11771642",
      },
    },
    {
      name: "\u72FC\u7FA4",
      source: "",
      cover:
        "https://pic.rmb.bdstatic.com/bjh/4092b755ca751ae195a4f6635a041843.jpeg",
      score: "55",
      details: {
        directors: ["\u848B\u4E1B"],
        actors: [
          "\u5F20\u664B",
          "\u674E\u6CBB\u5EF7",
          "\u848B\u7490\u971E",
          "\u5218\u667A\u6EE1",
          "\u53F6\u6D4F",
          "\u5F20\u8863",
          "\u5510\u56FD\u5FE0",
          "\u9AD8\u51AC\u5E73",
          "\u859B\u4F73\u51DD",
        ],
        types: ["\u52A8\u4F5C", "\u6218\u4E89"],
        region: "\u4E2D\u56FD\u5927\u9646",
        alias: [
          "\u6211\u7684\u4F63\u5175\u751F\u6DAF",
          "\u4F63\u5175",
          "Wolf Pack",
        ],
        intro:
          "\u5883\u5916\u6050\u6016\u52BF\u529B\u6380\u8D77\u80FD\u6E90\u5371\u673A\uFF0C7\u540D\u53CD\u6050\u7CBE\u82F1\u79D8\u5BC6\u5B88\u62A4\u201C\u5730\u4E0B\u957F\u57CE\u201D\uFF01\u8001\u5201\uFF08\u5F20\u664B \u9970\uFF09\u7387\u9886\u7684\u201C\u72FC\u7FA4\u5C0F\u961F\u201D\u957F\u671F\u4ECE\u4E8B\u5883\u5916\u5B89\u4FDD\u5DE5\u4F5C\uFF0C\u67D0\u6B21\u6267\u884C\u4EFB\u52A1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u610F\u5916\u53D1\u73B0\u5883\u5916\u6050\u6016\u52BF\u529B\u5C06\u9ED1\u624B\u4F38\u5411\u4E2D\u56FD\u80FD\u6E90\u547D\u8109\uFF01\u8001\u5201\u4E34\u5371\u53D7\u547D\uFF0C\u7387\u9886\u67EF\u7AE5\uFF08\u674E\u6CBB\u5EF7 \u9970\uFF09\u3001\u5996\u602A\uFF08\u848B\u7490\u971E \u9970\uFF09\u7B49\u961F\u5458\u96F7\u9706\u51FA\u51FB\u3002\u5371\u673A\u8FEB\u5728\u7709\u776B\uFF0C\u201C\u72FC\u7FA4\u5C0F\u961F\u201D\u80FD\u5426\u5316\u9669\u4E3A\u5937\uFF1F",
        scriptwriter: ["\u848B\u4E1B"],
        date: "2022-09-09",
        duration: "105\u5206\u949F",
        language: ["\u6C49\u8BED\u666E\u901A\u8BDD", "\u82F1\u8BED"],
        IMDB: "tt11771642",
      },
    },
    {
      name: "\u72FC\u7FA4",
      source: "",
      cover:
        "https://pic.rmb.bdstatic.com/bjh/4092b755ca751ae195a4f6635a041843.jpeg",
      score: "55",
      details: {
        directors: ["\u848B\u4E1B"],
        actors: [
          "\u5F20\u664B",
          "\u674E\u6CBB\u5EF7",
          "\u848B\u7490\u971E",
          "\u5218\u667A\u6EE1",
          "\u53F6\u6D4F",
          "\u5F20\u8863",
          "\u5510\u56FD\u5FE0",
          "\u9AD8\u51AC\u5E73",
          "\u859B\u4F73\u51DD",
        ],
        types: ["\u52A8\u4F5C", "\u6218\u4E89"],
        region: "\u4E2D\u56FD\u5927\u9646",
        alias: [
          "\u6211\u7684\u4F63\u5175\u751F\u6DAF",
          "\u4F63\u5175",
          "Wolf Pack",
        ],
        intro:
          "\u5883\u5916\u6050\u6016\u52BF\u529B\u6380\u8D77\u80FD\u6E90\u5371\u673A\uFF0C7\u540D\u53CD\u6050\u7CBE\u82F1\u79D8\u5BC6\u5B88\u62A4\u201C\u5730\u4E0B\u957F\u57CE\u201D\uFF01\u8001\u5201\uFF08\u5F20\u664B \u9970\uFF09\u7387\u9886\u7684\u201C\u72FC\u7FA4\u5C0F\u961F\u201D\u957F\u671F\u4ECE\u4E8B\u5883\u5916\u5B89\u4FDD\u5DE5\u4F5C\uFF0C\u67D0\u6B21\u6267\u884C\u4EFB\u52A1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u610F\u5916\u53D1\u73B0\u5883\u5916\u6050\u6016\u52BF\u529B\u5C06\u9ED1\u624B\u4F38\u5411\u4E2D\u56FD\u80FD\u6E90\u547D\u8109\uFF01\u8001\u5201\u4E34\u5371\u53D7\u547D\uFF0C\u7387\u9886\u67EF\u7AE5\uFF08\u674E\u6CBB\u5EF7 \u9970\uFF09\u3001\u5996\u602A\uFF08\u848B\u7490\u971E \u9970\uFF09\u7B49\u961F\u5458\u96F7\u9706\u51FA\u51FB\u3002\u5371\u673A\u8FEB\u5728\u7709\u776B\uFF0C\u201C\u72FC\u7FA4\u5C0F\u961F\u201D\u80FD\u5426\u5316\u9669\u4E3A\u5937\uFF1F",
        scriptwriter: ["\u848B\u4E1B"],
        date: "2022-09-09",
        duration: "105\u5206\u949F",
        language: ["\u6C49\u8BED\u666E\u901A\u8BDD", "\u82F1\u8BED"],
        IMDB: "tt11771642",
      },
    },
    {
      name: "\u72FC\u7FA4",
      source: "",
      cover:
        "https://pic.rmb.bdstatic.com/bjh/4092b755ca751ae195a4f6635a041843.jpeg",
      score: "55",
      details: {
        directors: ["\u848B\u4E1B"],
        actors: [
          "\u5F20\u664B",
          "\u674E\u6CBB\u5EF7",
          "\u848B\u7490\u971E",
          "\u5218\u667A\u6EE1",
          "\u53F6\u6D4F",
          "\u5F20\u8863",
          "\u5510\u56FD\u5FE0",
          "\u9AD8\u51AC\u5E73",
          "\u859B\u4F73\u51DD",
        ],
        types: ["\u52A8\u4F5C", "\u6218\u4E89"],
        region: "\u4E2D\u56FD\u5927\u9646",
        alias: [
          "\u6211\u7684\u4F63\u5175\u751F\u6DAF",
          "\u4F63\u5175",
          "Wolf Pack",
        ],
        intro:
          "\u5883\u5916\u6050\u6016\u52BF\u529B\u6380\u8D77\u80FD\u6E90\u5371\u673A\uFF0C7\u540D\u53CD\u6050\u7CBE\u82F1\u79D8\u5BC6\u5B88\u62A4\u201C\u5730\u4E0B\u957F\u57CE\u201D\uFF01\u8001\u5201\uFF08\u5F20\u664B \u9970\uFF09\u7387\u9886\u7684\u201C\u72FC\u7FA4\u5C0F\u961F\u201D\u957F\u671F\u4ECE\u4E8B\u5883\u5916\u5B89\u4FDD\u5DE5\u4F5C\uFF0C\u67D0\u6B21\u6267\u884C\u4EFB\u52A1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u610F\u5916\u53D1\u73B0\u5883\u5916\u6050\u6016\u52BF\u529B\u5C06\u9ED1\u624B\u4F38\u5411\u4E2D\u56FD\u80FD\u6E90\u547D\u8109\uFF01\u8001\u5201\u4E34\u5371\u53D7\u547D\uFF0C\u7387\u9886\u67EF\u7AE5\uFF08\u674E\u6CBB\u5EF7 \u9970\uFF09\u3001\u5996\u602A\uFF08\u848B\u7490\u971E \u9970\uFF09\u7B49\u961F\u5458\u96F7\u9706\u51FA\u51FB\u3002\u5371\u673A\u8FEB\u5728\u7709\u776B\uFF0C\u201C\u72FC\u7FA4\u5C0F\u961F\u201D\u80FD\u5426\u5316\u9669\u4E3A\u5937\uFF1F",
        scriptwriter: ["\u848B\u4E1B"],
        date: "2022-09-09",
        duration: "105\u5206\u949F",
        language: ["\u6C49\u8BED\u666E\u901A\u8BDD", "\u82F1\u8BED"],
        IMDB: "tt11771642",
      },
    },
    {
      name: "\u72FC\u7FA4",
      source: "",
      cover:
        "https://pic.rmb.bdstatic.com/bjh/4092b755ca751ae195a4f6635a041843.jpeg",
      score: "55",
      details: {
        directors: ["\u848B\u4E1B"],
        actors: [
          "\u5F20\u664B",
          "\u674E\u6CBB\u5EF7",
          "\u848B\u7490\u971E",
          "\u5218\u667A\u6EE1",
          "\u53F6\u6D4F",
          "\u5F20\u8863",
          "\u5510\u56FD\u5FE0",
          "\u9AD8\u51AC\u5E73",
          "\u859B\u4F73\u51DD",
        ],
        types: ["\u52A8\u4F5C", "\u6218\u4E89"],
        region: "\u4E2D\u56FD\u5927\u9646",
        alias: [
          "\u6211\u7684\u4F63\u5175\u751F\u6DAF",
          "\u4F63\u5175",
          "Wolf Pack",
        ],
        intro:
          "\u5883\u5916\u6050\u6016\u52BF\u529B\u6380\u8D77\u80FD\u6E90\u5371\u673A\uFF0C7\u540D\u53CD\u6050\u7CBE\u82F1\u79D8\u5BC6\u5B88\u62A4\u201C\u5730\u4E0B\u957F\u57CE\u201D\uFF01\u8001\u5201\uFF08\u5F20\u664B \u9970\uFF09\u7387\u9886\u7684\u201C\u72FC\u7FA4\u5C0F\u961F\u201D\u957F\u671F\u4ECE\u4E8B\u5883\u5916\u5B89\u4FDD\u5DE5\u4F5C\uFF0C\u67D0\u6B21\u6267\u884C\u4EFB\u52A1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u610F\u5916\u53D1\u73B0\u5883\u5916\u6050\u6016\u52BF\u529B\u5C06\u9ED1\u624B\u4F38\u5411\u4E2D\u56FD\u80FD\u6E90\u547D\u8109\uFF01\u8001\u5201\u4E34\u5371\u53D7\u547D\uFF0C\u7387\u9886\u67EF\u7AE5\uFF08\u674E\u6CBB\u5EF7 \u9970\uFF09\u3001\u5996\u602A\uFF08\u848B\u7490\u971E \u9970\uFF09\u7B49\u961F\u5458\u96F7\u9706\u51FA\u51FB\u3002\u5371\u673A\u8FEB\u5728\u7709\u776B\uFF0C\u201C\u72FC\u7FA4\u5C0F\u961F\u201D\u80FD\u5426\u5316\u9669\u4E3A\u5937\uFF1F",
        scriptwriter: ["\u848B\u4E1B"],
        date: "2022-09-09",
        duration: "105\u5206\u949F",
        language: ["\u6C49\u8BED\u666E\u901A\u8BDD", "\u82F1\u8BED"],
        IMDB: "tt11771642",
      },
    },
  ],
  Ix = () => {
    const n = nu() || {};
    return B.createElement(
      B.Fragment,
      null,
      B.createElement(ry, { data: sl[n.id || 0] }),
      B.createElement(Rx, { source: sl[n.id || 0].source })
    );
  };
const Fx = (n) => {
  const { list: e } = n,
    t = jh(),
    [r, i] = $.exports.useState(0),
    s = () => {
      let o = [];
      for (let a = 0; a < e.length; a++) {
        const { title: l, path: u } = e[a];
        o.push(
          B.createElement(
            "li",
            {
              key: a,
              className: a === r ? "active" : "",
              onClick: () => {
                i(a), t("/" + u);
              },
            },
            l
          )
        );
      }
      return o;
    };
  return B.createElement(
    B.Fragment,
    null,
    B.createElement("ul", { className: "category" }, s())
  );
};
const wx = (n) => {
  const { id: e, name: t, cover: r, score: i } = n,
    s = jh(),
    o = nu(),
    a = () => {
      s("/" + (o.id || "video") + "/" + e);
    };
  return B.createElement(
    B.Fragment,
    null,
    B.createElement(
      "div",
      { className: "simple-card" },
      B.createElement("img", {
        className: "cover",
        src: r,
        onClick: () => {
          a();
        },
      }),
      B.createElement(
        "div",
        {
          className: "title",
          onClick: () => {
            a();
          },
        },
        t
      ),
      B.createElement(Xh, { score: i })
    )
  );
};
const kx = (n) => {
    const { data: e } = n,
      t = () => {
        let r = [];
        for (let i = 0; i < e.length; i++)
          r.push(
            B.createElement(
              "div",
              { key: i, className: "card-wrap" },
              B.createElement(wx, {
                name: e[i].name,
                cover: e[i].cover,
                score: e[i].score,
                id: i + "",
              })
            )
          );
        return r;
      };
    return B.createElement(
      B.Fragment,
      null,
      B.createElement("div", { className: "block" }, t())
    );
  },
  Fd = () => {
    const n = nu();
    return (
      console.log(n),
      B.createElement(
        B.Fragment,
        null,
        B.createElement(Fx, {
          list: [
            { title: "\u89C6\u9891", path: "video" },
            { title: "\u7535\u5B50\u4E66", path: "ebook" },
            { title: "\u97F3\u4E50", path: "music" },
            { title: "\u56FE\u7247", path: "picture" },
            { title: "\u6587\u7AE0", path: "article" },
            { title: "RSS", path: "rss" },
          ],
        }),
        B.createElement(kx, { data: sl })
      )
    );
  };
function _x() {
  return B.createElement(
    B.Fragment,
    null,
    B.createElement(
      ty,
      null,
      B.createElement(
        ey,
        null,
        B.createElement(es, { path: "/", element: B.createElement(Fd, null) }),
        B.createElement(es, {
          path: "/:id",
          element: B.createElement(Fd, null),
        }),
        B.createElement(es, {
          path: "/video/:id",
          element: B.createElement(Ix, null),
        })
      )
    )
  );
}
Jo.createRoot(document.getElementById("root")).render(
  B.createElement(B.StrictMode, null, B.createElement(_x, null))
);