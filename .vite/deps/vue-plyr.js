// node_modules/vue-plyr/dist/vue-plyr.esm.js
var e = function(e2) {
  try {
    return !!e2();
  } catch (e3) {
    return true;
  }
};
var t = !e(function() {
  return 7 != Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
});
var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function i(e2, t2, n2) {
  return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
    return function() {
      throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }(null == t3 && n2.path);
  } }, n2.exports), n2.exports;
}
var r = function(e2) {
  return e2 && e2.Math == Math && e2;
};
var a = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n && n) || Function("return this")();
var o = function(e2) {
  return "object" == typeof e2 ? null !== e2 : "function" == typeof e2;
};
var s = a.document;
var l = o(s) && o(s.createElement);
var c = function(e2) {
  return l ? s.createElement(e2) : {};
};
var u = !t && !e(function() {
  return 7 != Object.defineProperty(c("div"), "a", { get: function() {
    return 7;
  } }).a;
});
var h = function(e2) {
  if (!o(e2)) throw TypeError(String(e2) + " is not an object");
  return e2;
};
var d = function(e2, t2) {
  if (!o(e2)) return e2;
  var n2, i2;
  if (t2 && "function" == typeof (n2 = e2.toString) && !o(i2 = n2.call(e2))) return i2;
  if ("function" == typeof (n2 = e2.valueOf) && !o(i2 = n2.call(e2))) return i2;
  if (!t2 && "function" == typeof (n2 = e2.toString) && !o(i2 = n2.call(e2))) return i2;
  throw TypeError("Can't convert object to primitive value");
};
var f = Object.defineProperty;
var p = { f: t ? f : function(e2, t2, n2) {
  if (h(e2), t2 = d(t2, true), h(n2), u) try {
    return f(e2, t2, n2);
  } catch (e3) {
  }
  if ("get" in n2 || "set" in n2) throw TypeError("Accessors not supported");
  return "value" in n2 && (e2[t2] = n2.value), e2;
} };
var m = p.f;
var g = Function.prototype;
var v = g.toString;
var y = /^\s*function ([^ (]*)/;
t && !("name" in g) && m(g, "name", { configurable: true, get: function() {
  try {
    return v.call(this).match(y)[1];
  } catch (e2) {
    return "";
  }
} });
var b = {}.propertyIsEnumerable;
var w = Object.getOwnPropertyDescriptor;
var k = { f: w && !b.call({ 1: 2 }, 1) ? function(e2) {
  var t2 = w(this, e2);
  return !!t2 && t2.enumerable;
} : b };
var T = function(e2, t2) {
  return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: t2 };
};
var S = {}.toString;
var E = function(e2) {
  return S.call(e2).slice(8, -1);
};
var A = "".split;
var x = e(function() {
  return !Object("z").propertyIsEnumerable(0);
}) ? function(e2) {
  return "String" == E(e2) ? A.call(e2, "") : Object(e2);
} : Object;
var C = function(e2) {
  if (null == e2) throw TypeError("Can't call method on " + e2);
  return e2;
};
var P = function(e2) {
  return x(C(e2));
};
var O = {}.hasOwnProperty;
var I = function(e2, t2) {
  return O.call(e2, t2);
};
var L = Object.getOwnPropertyDescriptor;
var N = { f: t ? L : function(e2, t2) {
  if (e2 = P(e2), t2 = d(t2, true), u) try {
    return L(e2, t2);
  } catch (e3) {
  }
  if (I(e2, t2)) return T(!k.f.call(e2, t2), e2[t2]);
} };
var M = t ? function(e2, t2, n2) {
  return p.f(e2, t2, T(1, n2));
} : function(e2, t2, n2) {
  return e2[t2] = n2, e2;
};
var j = function(e2, t2) {
  try {
    M(a, e2, t2);
  } catch (n2) {
    a[e2] = t2;
  }
  return t2;
};
var R = a["__core-js_shared__"] || j("__core-js_shared__", {});
var _ = Function.toString;
"function" != typeof R.inspectSource && (R.inspectSource = function(e2) {
  return _.call(e2);
});
var D;
var F;
var q;
var U = R.inspectSource;
var H = a.WeakMap;
var B = "function" == typeof H && /native code/.test(U(H));
var V = i(function(e2) {
  (e2.exports = function(e3, t2) {
    return R[e3] || (R[e3] = void 0 !== t2 ? t2 : {});
  })("versions", []).push({ version: "3.6.5", mode: "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
});
var z = 0;
var W = Math.random();
var $ = function(e2) {
  return "Symbol(" + String(void 0 === e2 ? "" : e2) + ")_" + (++z + W).toString(36);
};
var K = V("keys");
var Y = function(e2) {
  return K[e2] || (K[e2] = $(e2));
};
var G = {};
var X = a.WeakMap;
if (B) {
  Q = new X(), J = Q.get, Z = Q.has, ee = Q.set;
  D = function(e2, t2) {
    return ee.call(Q, e2, t2), t2;
  }, F = function(e2) {
    return J.call(Q, e2) || {};
  }, q = function(e2) {
    return Z.call(Q, e2);
  };
} else {
  te = Y("state");
  G[te] = true, D = function(e2, t2) {
    return M(e2, te, t2), t2;
  }, F = function(e2) {
    return I(e2, te) ? e2[te] : {};
  }, q = function(e2) {
    return I(e2, te);
  };
}
var Q;
var J;
var Z;
var ee;
var te;
var ne;
var ie = { set: D, get: F, has: q, enforce: function(e2) {
  return q(e2) ? F(e2) : D(e2, {});
}, getterFor: function(e2) {
  return function(t2) {
    var n2;
    if (!o(t2) || (n2 = F(t2)).type !== e2) throw TypeError("Incompatible receiver, " + e2 + " required");
    return n2;
  };
} };
var re = i(function(e2) {
  var t2 = ie.get, n2 = ie.enforce, i2 = String(String).split("String");
  (e2.exports = function(e3, t3, r2, o2) {
    var s2 = !!o2 && !!o2.unsafe, l2 = !!o2 && !!o2.enumerable, c2 = !!o2 && !!o2.noTargetGet;
    "function" == typeof r2 && ("string" != typeof t3 || I(r2, "name") || M(r2, "name", t3), n2(r2).source = i2.join("string" == typeof t3 ? t3 : "")), e3 !== a ? (s2 ? !c2 && e3[t3] && (l2 = true) : delete e3[t3], l2 ? e3[t3] = r2 : M(e3, t3, r2)) : l2 ? e3[t3] = r2 : j(t3, r2);
  })(Function.prototype, "toString", function() {
    return "function" == typeof this && t2(this).source || U(this);
  });
});
var ae = a;
var oe = function(e2) {
  return "function" == typeof e2 ? e2 : void 0;
};
var se = function(e2, t2) {
  return arguments.length < 2 ? oe(ae[e2]) || oe(a[e2]) : ae[e2] && ae[e2][t2] || a[e2] && a[e2][t2];
};
var le = Math.ceil;
var ce = Math.floor;
var ue = function(e2) {
  return isNaN(e2 = +e2) ? 0 : (e2 > 0 ? ce : le)(e2);
};
var he = Math.min;
var de = function(e2) {
  return e2 > 0 ? he(ue(e2), 9007199254740991) : 0;
};
var fe = Math.max;
var pe = Math.min;
var me = function(e2, t2) {
  var n2 = ue(e2);
  return n2 < 0 ? fe(n2 + t2, 0) : pe(n2, t2);
};
var ge = function(e2) {
  return function(t2, n2, i2) {
    var r2, a2 = P(t2), o2 = de(a2.length), s2 = me(i2, o2);
    if (e2 && n2 != n2) {
      for (; o2 > s2; ) if ((r2 = a2[s2++]) != r2) return true;
    } else for (; o2 > s2; s2++) if ((e2 || s2 in a2) && a2[s2] === n2) return e2 || s2 || 0;
    return !e2 && -1;
  };
};
var ve = { includes: ge(true), indexOf: ge(false) };
var ye = ve.indexOf;
var be = function(e2, t2) {
  var n2, i2 = P(e2), r2 = 0, a2 = [];
  for (n2 in i2) !I(G, n2) && I(i2, n2) && a2.push(n2);
  for (; t2.length > r2; ) I(i2, n2 = t2[r2++]) && (~ye(a2, n2) || a2.push(n2));
  return a2;
};
var we = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
var ke = we.concat("length", "prototype");
var Te = { f: Object.getOwnPropertyNames || function(e2) {
  return be(e2, ke);
} };
var Se = { f: Object.getOwnPropertySymbols };
var Ee = se("Reflect", "ownKeys") || function(e2) {
  var t2 = Te.f(h(e2)), n2 = Se.f;
  return n2 ? t2.concat(n2(e2)) : t2;
};
var Ae = function(e2, t2) {
  for (var n2 = Ee(t2), i2 = p.f, r2 = N.f, a2 = 0; a2 < n2.length; a2++) {
    var o2 = n2[a2];
    I(e2, o2) || i2(e2, o2, r2(t2, o2));
  }
};
var xe = /#|\.prototype\./;
var Ce = function(t2, n2) {
  var i2 = Oe[Pe(t2)];
  return i2 == Le || i2 != Ie && ("function" == typeof n2 ? e(n2) : !!n2);
};
var Pe = Ce.normalize = function(e2) {
  return String(e2).replace(xe, ".").toLowerCase();
};
var Oe = Ce.data = {};
var Ie = Ce.NATIVE = "N";
var Le = Ce.POLYFILL = "P";
var Ne = Ce;
var Me = N.f;
var je = function(e2, t2) {
  var n2, i2, r2, o2, s2, l2 = e2.target, c2 = e2.global, u2 = e2.stat;
  if (n2 = c2 ? a : u2 ? a[l2] || j(l2, {}) : (a[l2] || {}).prototype) for (i2 in t2) {
    if (o2 = t2[i2], r2 = e2.noTargetGet ? (s2 = Me(n2, i2)) && s2.value : n2[i2], !Ne(c2 ? i2 : l2 + (u2 ? "." : "#") + i2, e2.forced) && void 0 !== r2) {
      if (typeof o2 == typeof r2) continue;
      Ae(o2, r2);
    }
    (e2.sham || r2 && r2.sham) && M(o2, "sham", true), re(n2, i2, o2, e2);
  }
};
var Re = !!Object.getOwnPropertySymbols && !e(function() {
  return !String(Symbol());
});
var _e = Re && !Symbol.sham && "symbol" == typeof Symbol.iterator;
var De = Array.isArray || function(e2) {
  return "Array" == E(e2);
};
var Fe = function(e2) {
  return Object(C(e2));
};
var qe = Object.keys || function(e2) {
  return be(e2, we);
};
var Ue = t ? Object.defineProperties : function(e2, t2) {
  h(e2);
  for (var n2, i2 = qe(t2), r2 = i2.length, a2 = 0; r2 > a2; ) p.f(e2, n2 = i2[a2++], t2[n2]);
  return e2;
};
var He = se("document", "documentElement");
var Be = Y("IE_PROTO");
var Ve = function() {
};
var ze = function(e2) {
  return "<script>" + e2 + "<\/script>";
};
var We = function() {
  try {
    ne = document.domain && new ActiveXObject("htmlfile");
  } catch (e3) {
  }
  var e2, t2;
  We = ne ? function(e3) {
    e3.write(ze("")), e3.close();
    var t3 = e3.parentWindow.Object;
    return e3 = null, t3;
  }(ne) : ((t2 = c("iframe")).style.display = "none", He.appendChild(t2), t2.src = String("javascript:"), (e2 = t2.contentWindow.document).open(), e2.write(ze("document.F=Object")), e2.close(), e2.F);
  for (var n2 = we.length; n2--; ) delete We.prototype[we[n2]];
  return We();
};
G[Be] = true;
var $e = Object.create || function(e2, t2) {
  var n2;
  return null !== e2 ? (Ve.prototype = h(e2), n2 = new Ve(), Ve.prototype = null, n2[Be] = e2) : n2 = We(), void 0 === t2 ? n2 : Ue(n2, t2);
};
var Ke = Te.f;
var Ye = {}.toString;
var Ge = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var Xe = { f: function(e2) {
  return Ge && "[object Window]" == Ye.call(e2) ? function(e3) {
    try {
      return Ke(e3);
    } catch (e4) {
      return Ge.slice();
    }
  }(e2) : Ke(P(e2));
} };
var Qe = V("wks");
var Je = a.Symbol;
var Ze = _e ? Je : Je && Je.withoutSetter || $;
var et = function(e2) {
  return I(Qe, e2) || (Re && I(Je, e2) ? Qe[e2] = Je[e2] : Qe[e2] = Ze("Symbol." + e2)), Qe[e2];
};
var tt = { f: et };
var nt = p.f;
var it = function(e2) {
  var t2 = ae.Symbol || (ae.Symbol = {});
  I(t2, e2) || nt(t2, e2, { value: tt.f(e2) });
};
var rt = p.f;
var at = et("toStringTag");
var ot = function(e2, t2, n2) {
  e2 && !I(e2 = n2 ? e2 : e2.prototype, at) && rt(e2, at, { configurable: true, value: t2 });
};
var st = function(e2) {
  if ("function" != typeof e2) throw TypeError(String(e2) + " is not a function");
  return e2;
};
var lt = function(e2, t2, n2) {
  if (st(e2), void 0 === t2) return e2;
  switch (n2) {
    case 0:
      return function() {
        return e2.call(t2);
      };
    case 1:
      return function(n3) {
        return e2.call(t2, n3);
      };
    case 2:
      return function(n3, i2) {
        return e2.call(t2, n3, i2);
      };
    case 3:
      return function(n3, i2, r2) {
        return e2.call(t2, n3, i2, r2);
      };
  }
  return function() {
    return e2.apply(t2, arguments);
  };
};
var ct = et("species");
var ut = function(e2, t2) {
  var n2;
  return De(e2) && ("function" != typeof (n2 = e2.constructor) || n2 !== Array && !De(n2.prototype) ? o(n2) && null === (n2 = n2[ct]) && (n2 = void 0) : n2 = void 0), new (void 0 === n2 ? Array : n2)(0 === t2 ? 0 : t2);
};
var ht = [].push;
var dt = function(e2) {
  var t2 = 1 == e2, n2 = 2 == e2, i2 = 3 == e2, r2 = 4 == e2, a2 = 6 == e2, o2 = 5 == e2 || a2;
  return function(s2, l2, c2, u2) {
    for (var h2, d2, f2 = Fe(s2), p2 = x(f2), m2 = lt(l2, c2, 3), g2 = de(p2.length), v2 = 0, y2 = u2 || ut, b2 = t2 ? y2(s2, g2) : n2 ? y2(s2, 0) : void 0; g2 > v2; v2++) if ((o2 || v2 in p2) && (d2 = m2(h2 = p2[v2], v2, f2), e2)) {
      if (t2) b2[v2] = d2;
      else if (d2) switch (e2) {
        case 3:
          return true;
        case 5:
          return h2;
        case 6:
          return v2;
        case 2:
          ht.call(b2, h2);
      }
      else if (r2) return false;
    }
    return a2 ? -1 : i2 || r2 ? r2 : b2;
  };
};
var ft = { forEach: dt(0), map: dt(1), filter: dt(2), some: dt(3), every: dt(4), find: dt(5), findIndex: dt(6) };
var pt = ft.forEach;
var mt = Y("hidden");
var gt = et("toPrimitive");
var vt = ie.set;
var yt = ie.getterFor("Symbol");
var bt = Object.prototype;
var wt = a.Symbol;
var kt = se("JSON", "stringify");
var Tt = N.f;
var St = p.f;
var Et = Xe.f;
var At = k.f;
var xt = V("symbols");
var Ct = V("op-symbols");
var Pt = V("string-to-symbol-registry");
var Ot = V("symbol-to-string-registry");
var It = V("wks");
var Lt = a.QObject;
var Nt = !Lt || !Lt.prototype || !Lt.prototype.findChild;
var Mt = t && e(function() {
  return 7 != $e(St({}, "a", { get: function() {
    return St(this, "a", { value: 7 }).a;
  } })).a;
}) ? function(e2, t2, n2) {
  var i2 = Tt(bt, t2);
  i2 && delete bt[t2], St(e2, t2, n2), i2 && e2 !== bt && St(bt, t2, i2);
} : St;
var jt = function(e2, n2) {
  var i2 = xt[e2] = $e(wt.prototype);
  return vt(i2, { type: "Symbol", tag: e2, description: n2 }), t || (i2.description = n2), i2;
};
var Rt = _e ? function(e2) {
  return "symbol" == typeof e2;
} : function(e2) {
  return Object(e2) instanceof wt;
};
var _t = function(e2, t2, n2) {
  e2 === bt && _t(Ct, t2, n2), h(e2);
  var i2 = d(t2, true);
  return h(n2), I(xt, i2) ? (n2.enumerable ? (I(e2, mt) && e2[mt][i2] && (e2[mt][i2] = false), n2 = $e(n2, { enumerable: T(0, false) })) : (I(e2, mt) || St(e2, mt, T(1, {})), e2[mt][i2] = true), Mt(e2, i2, n2)) : St(e2, i2, n2);
};
var Dt = function(e2, n2) {
  h(e2);
  var i2 = P(n2), r2 = qe(i2).concat(Ht(i2));
  return pt(r2, function(n3) {
    t && !Ft.call(i2, n3) || _t(e2, n3, i2[n3]);
  }), e2;
};
var Ft = function(e2) {
  var t2 = d(e2, true), n2 = At.call(this, t2);
  return !(this === bt && I(xt, t2) && !I(Ct, t2)) && (!(n2 || !I(this, t2) || !I(xt, t2) || I(this, mt) && this[mt][t2]) || n2);
};
var qt = function(e2, t2) {
  var n2 = P(e2), i2 = d(t2, true);
  if (n2 !== bt || !I(xt, i2) || I(Ct, i2)) {
    var r2 = Tt(n2, i2);
    return !r2 || !I(xt, i2) || I(n2, mt) && n2[mt][i2] || (r2.enumerable = true), r2;
  }
};
var Ut = function(e2) {
  var t2 = Et(P(e2)), n2 = [];
  return pt(t2, function(e3) {
    I(xt, e3) || I(G, e3) || n2.push(e3);
  }), n2;
};
var Ht = function(e2) {
  var t2 = e2 === bt, n2 = Et(t2 ? Ct : P(e2)), i2 = [];
  return pt(n2, function(e3) {
    !I(xt, e3) || t2 && !I(bt, e3) || i2.push(xt[e3]);
  }), i2;
};
if (Re || (re((wt = function() {
  if (this instanceof wt) throw TypeError("Symbol is not a constructor");
  var e2 = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, n2 = $(e2), i2 = function(e3) {
    this === bt && i2.call(Ct, e3), I(this, mt) && I(this[mt], n2) && (this[mt][n2] = false), Mt(this, n2, T(1, e3));
  };
  return t && Nt && Mt(bt, n2, { configurable: true, set: i2 }), jt(n2, e2);
}).prototype, "toString", function() {
  return yt(this).tag;
}), re(wt, "withoutSetter", function(e2) {
  return jt($(e2), e2);
}), k.f = Ft, p.f = _t, N.f = qt, Te.f = Xe.f = Ut, Se.f = Ht, tt.f = function(e2) {
  return jt(et(e2), e2);
}, t && (St(wt.prototype, "description", { configurable: true, get: function() {
  return yt(this).description;
} }), re(bt, "propertyIsEnumerable", Ft, { unsafe: true }))), je({ global: true, wrap: true, forced: !Re, sham: !Re }, { Symbol: wt }), pt(qe(It), function(e2) {
  it(e2);
}), je({ target: "Symbol", stat: true, forced: !Re }, { for: function(e2) {
  var t2 = String(e2);
  if (I(Pt, t2)) return Pt[t2];
  var n2 = wt(t2);
  return Pt[t2] = n2, Ot[n2] = t2, n2;
}, keyFor: function(e2) {
  if (!Rt(e2)) throw TypeError(e2 + " is not a symbol");
  if (I(Ot, e2)) return Ot[e2];
}, useSetter: function() {
  Nt = true;
}, useSimple: function() {
  Nt = false;
} }), je({ target: "Object", stat: true, forced: !Re, sham: !t }, { create: function(e2, t2) {
  return void 0 === t2 ? $e(e2) : Dt($e(e2), t2);
}, defineProperty: _t, defineProperties: Dt, getOwnPropertyDescriptor: qt }), je({ target: "Object", stat: true, forced: !Re }, { getOwnPropertyNames: Ut, getOwnPropertySymbols: Ht }), je({ target: "Object", stat: true, forced: e(function() {
  Se.f(1);
}) }, { getOwnPropertySymbols: function(e2) {
  return Se.f(Fe(e2));
} }), kt) {
  Bt = !Re || e(function() {
    var e2 = wt();
    return "[null]" != kt([e2]) || "{}" != kt({ a: e2 }) || "{}" != kt(Object(e2));
  });
  je({ target: "JSON", stat: true, forced: Bt }, { stringify: function(e2, t2, n2) {
    for (var i2, r2 = [e2], a2 = 1; arguments.length > a2; ) r2.push(arguments[a2++]);
    if (i2 = t2, (o(t2) || void 0 !== e2) && !Rt(e2)) return De(t2) || (t2 = function(e3, t3) {
      if ("function" == typeof i2 && (t3 = i2.call(this, e3, t3)), !Rt(t3)) return t3;
    }), r2[1] = t2, kt.apply(null, r2);
  } });
}
var Bt;
wt.prototype[gt] || M(wt.prototype, gt, wt.prototype.valueOf), ot(wt, "Symbol"), G[mt] = true;
var Vt;
var zt;
var Wt = se("navigator", "userAgent") || "";
var $t = a.process;
var Kt = $t && $t.versions;
var Yt = Kt && Kt.v8;
Yt ? zt = (Vt = Yt.split("."))[0] + Vt[1] : Wt && (!(Vt = Wt.match(/Edge\/(\d+)/)) || Vt[1] >= 74) && (Vt = Wt.match(/Chrome\/(\d+)/)) && (zt = Vt[1]);
var Gt = zt && +zt;
var Xt = et("species");
var Qt = function(t2) {
  return Gt >= 51 || !e(function() {
    var e2 = [];
    return (e2.constructor = {})[Xt] = function() {
      return { foo: 1 };
    }, 1 !== e2[t2](Boolean).foo;
  });
};
var Jt = Object.defineProperty;
var Zt = {};
var en = function(e2) {
  throw e2;
};
var tn = function(n2, i2) {
  if (I(Zt, n2)) return Zt[n2];
  i2 || (i2 = {});
  var r2 = [][n2], a2 = !!I(i2, "ACCESSORS") && i2.ACCESSORS, o2 = I(i2, 0) ? i2[0] : en, s2 = I(i2, 1) ? i2[1] : void 0;
  return Zt[n2] = !!r2 && !e(function() {
    if (a2 && !t) return true;
    var e2 = { length: -1 };
    a2 ? Jt(e2, 1, { enumerable: true, get: en }) : e2[1] = 1, r2.call(e2, o2, s2);
  });
};
var nn = ft.filter;
var rn = Qt("filter");
var an = tn("filter");
je({ target: "Array", proto: true, forced: !rn || !an }, { filter: function(e2) {
  return nn(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} });
var on = function(t2, n2) {
  var i2 = [][t2];
  return !!i2 && e(function() {
    i2.call(null, n2 || function() {
      throw 1;
    }, 1);
  });
};
var sn = ft.forEach;
var ln = on("forEach");
var cn = tn("forEach");
var un = ln && cn ? [].forEach : function(e2) {
  return sn(this, e2, arguments.length > 1 ? arguments[1] : void 0);
};
je({ target: "Array", proto: true, forced: [].forEach != un }, { forEach: un });
var hn = N.f;
var dn = e(function() {
  hn(1);
});
je({ target: "Object", stat: true, forced: !t || dn, sham: !t }, { getOwnPropertyDescriptor: function(e2, t2) {
  return hn(P(e2), t2);
} });
var fn = function(e2, t2, n2) {
  var i2 = d(t2);
  i2 in e2 ? p.f(e2, i2, T(0, n2)) : e2[i2] = n2;
};
je({ target: "Object", stat: true, sham: !t }, { getOwnPropertyDescriptors: function(e2) {
  for (var t2, n2, i2 = P(e2), r2 = N.f, a2 = Ee(i2), o2 = {}, s2 = 0; a2.length > s2; ) void 0 !== (n2 = r2(i2, t2 = a2[s2++])) && fn(o2, t2, n2);
  return o2;
} });
var pn = e(function() {
  qe(1);
});
je({ target: "Object", stat: true, forced: pn }, { keys: function(e2) {
  return qe(Fe(e2));
} });
var mn = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
for (gn in mn) {
  vn = a[gn], yn = vn && vn.prototype;
  if (yn && yn.forEach !== un) try {
    M(yn, "forEach", un);
  } catch (e2) {
    yn.forEach = un;
  }
}
var vn;
var yn;
var gn;
function bn(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function wn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    t2 && (i2 = i2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, i2);
  }
  return n2;
}
function kn(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? wn(Object(n2), true).forEach(function(t3) {
      bn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : wn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
var Tn = p.f;
var Sn = a.Symbol;
if (t && "function" == typeof Sn && (!("description" in Sn.prototype) || void 0 !== Sn().description)) {
  En = {}, An = function() {
    var e2 = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]), t2 = this instanceof An ? new Sn(e2) : void 0 === e2 ? Sn() : Sn(e2);
    return "" === e2 && (En[t2] = true), t2;
  };
  Ae(An, Sn);
  xn = An.prototype = Sn.prototype;
  xn.constructor = An;
  Cn = xn.toString, Pn = "Symbol(test)" == String(Sn("test")), On = /^Symbol\((.*)\)[^)]+$/;
  Tn(xn, "description", { configurable: true, get: function() {
    var e2 = o(this) ? this.valueOf() : this, t2 = Cn.call(e2);
    if (I(En, e2)) return "";
    var n2 = Pn ? t2.slice(7, -1) : t2.replace(On, "$1");
    return "" === n2 ? void 0 : n2;
  } }), je({ global: true, forced: true }, { Symbol: An });
}
var En;
var An;
var xn;
var Cn;
var Pn;
var On;
it("iterator");
var In = et("isConcatSpreadable");
var Ln = Gt >= 51 || !e(function() {
  var e2 = [];
  return e2[In] = false, e2.concat()[0] !== e2;
});
var Nn = Qt("concat");
var Mn = function(e2) {
  if (!o(e2)) return false;
  var t2 = e2[In];
  return void 0 !== t2 ? !!t2 : De(e2);
};
je({ target: "Array", proto: true, forced: !Ln || !Nn }, { concat: function(e2) {
  var t2, n2, i2, r2, a2, o2 = Fe(this), s2 = ut(o2, 0), l2 = 0;
  for (t2 = -1, i2 = arguments.length; t2 < i2; t2++) if (Mn(a2 = -1 === t2 ? o2 : arguments[t2])) {
    if (l2 + (r2 = de(a2.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
    for (n2 = 0; n2 < r2; n2++, l2++) n2 in a2 && fn(s2, l2, a2[n2]);
  } else {
    if (l2 >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
    fn(s2, l2++, a2);
  }
  return s2.length = l2, s2;
} });
var jn = ft.every;
var Rn = on("every");
var _n = tn("every");
je({ target: "Array", proto: true, forced: !Rn || !_n }, { every: function(e2) {
  return jn(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} });
var Dn = et("unscopables");
var Fn = Array.prototype;
null == Fn[Dn] && p.f(Fn, Dn, { configurable: true, value: $e(null) });
var qn = function(e2) {
  Fn[Dn][e2] = true;
};
var Un = ft.find;
var Hn = true;
var Bn = tn("find");
"find" in [] && Array(1).find(function() {
  Hn = false;
}), je({ target: "Array", proto: true, forced: Hn || !Bn }, { find: function(e2) {
  return Un(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} }), qn("find");
var Vn = ft.findIndex;
var zn = true;
var Wn = tn("findIndex");
"findIndex" in [] && Array(1).findIndex(function() {
  zn = false;
}), je({ target: "Array", proto: true, forced: zn || !Wn }, { findIndex: function(e2) {
  return Vn(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} }), qn("findIndex");
var $n = function(e2, t2, n2, i2) {
  try {
    return i2 ? t2(h(n2)[0], n2[1]) : t2(n2);
  } catch (t3) {
    var r2 = e2.return;
    throw void 0 !== r2 && h(r2.call(e2)), t3;
  }
};
var Kn = {};
var Yn = et("iterator");
var Gn = Array.prototype;
var Xn = function(e2) {
  return void 0 !== e2 && (Kn.Array === e2 || Gn[Yn] === e2);
};
var Qn = {};
Qn[et("toStringTag")] = "z";
var Jn = "[object z]" === String(Qn);
var Zn = et("toStringTag");
var ei = "Arguments" == E(/* @__PURE__ */ function() {
  return arguments;
}());
var ti = Jn ? E : function(e2) {
  var t2, n2, i2;
  return void 0 === e2 ? "Undefined" : null === e2 ? "Null" : "string" == typeof (n2 = function(e3, t3) {
    try {
      return e3[t3];
    } catch (e4) {
    }
  }(t2 = Object(e2), Zn)) ? n2 : ei ? E(t2) : "Object" == (i2 = E(t2)) && "function" == typeof t2.callee ? "Arguments" : i2;
};
var ni = et("iterator");
var ii = function(e2) {
  if (null != e2) return e2[ni] || e2["@@iterator"] || Kn[ti(e2)];
};
var ri = function(e2) {
  var t2, n2, i2, r2, a2, o2, s2 = Fe(e2), l2 = "function" == typeof this ? this : Array, c2 = arguments.length, u2 = c2 > 1 ? arguments[1] : void 0, h2 = void 0 !== u2, d2 = ii(s2), f2 = 0;
  if (h2 && (u2 = lt(u2, c2 > 2 ? arguments[2] : void 0, 2)), null == d2 || l2 == Array && Xn(d2)) for (n2 = new l2(t2 = de(s2.length)); t2 > f2; f2++) o2 = h2 ? u2(s2[f2], f2) : s2[f2], fn(n2, f2, o2);
  else for (a2 = (r2 = d2.call(s2)).next, n2 = new l2(); !(i2 = a2.call(r2)).done; f2++) o2 = h2 ? $n(r2, u2, [i2.value, f2], true) : i2.value, fn(n2, f2, o2);
  return n2.length = f2, n2;
};
var ai = et("iterator");
var oi = false;
try {
  si = 0, li = { next: function() {
    return { done: !!si++ };
  }, return: function() {
    oi = true;
  } };
  li[ai] = function() {
    return this;
  }, Array.from(li, function() {
    throw 2;
  });
} catch (e2) {
}
var si;
var li;
var ci = function(e2, t2) {
  if (!t2 && !oi) return false;
  var n2 = false;
  try {
    var i2 = {};
    i2[ai] = function() {
      return { next: function() {
        return { done: n2 = true };
      } };
    }, e2(i2);
  } catch (e3) {
  }
  return n2;
};
var ui = !ci(function(e2) {
  Array.from(e2);
});
je({ target: "Array", stat: true, forced: ui }, { from: ri });
var hi = ve.includes;
var di = tn("indexOf", { ACCESSORS: true, 1: 0 });
je({ target: "Array", proto: true, forced: !di }, { includes: function(e2) {
  return hi(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} }), qn("includes");
var fi = ve.indexOf;
var pi = [].indexOf;
var mi = !!pi && 1 / [1].indexOf(1, -0) < 0;
var gi = on("indexOf");
var vi = tn("indexOf", { ACCESSORS: true, 1: 0 });
je({ target: "Array", proto: true, forced: mi || !gi || !vi }, { indexOf: function(e2) {
  return mi ? pi.apply(this, arguments) || 0 : fi(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} });
var yi = [].join;
var bi = x != Object;
var wi = on("join", ",");
je({ target: "Array", proto: true, forced: bi || !wi }, { join: function(e2) {
  return yi.call(P(this), void 0 === e2 ? "," : e2);
} });
var ki = Math.min;
var Ti = [].lastIndexOf;
var Si = !!Ti && 1 / [1].lastIndexOf(1, -0) < 0;
var Ei = on("lastIndexOf");
var Ai = tn("indexOf", { ACCESSORS: true, 1: 0 });
var xi = Si || !Ei || !Ai ? function(e2) {
  if (Si) return Ti.apply(this, arguments) || 0;
  var t2 = P(this), n2 = de(t2.length), i2 = n2 - 1;
  for (arguments.length > 1 && (i2 = ki(i2, ue(arguments[1]))), i2 < 0 && (i2 = n2 + i2); i2 >= 0; i2--) if (i2 in t2 && t2[i2] === e2) return i2 || 0;
  return -1;
} : Ti;
je({ target: "Array", proto: true, forced: xi !== [].lastIndexOf }, { lastIndexOf: xi });
var Ci = ft.map;
var Pi = Qt("map");
var Oi = tn("map");
je({ target: "Array", proto: true, forced: !Pi || !Oi }, { map: function(e2) {
  return Ci(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} });
var Ii = function(e2) {
  return function(t2, n2, i2, r2) {
    st(n2);
    var a2 = Fe(t2), o2 = x(a2), s2 = de(a2.length), l2 = e2 ? s2 - 1 : 0, c2 = e2 ? -1 : 1;
    if (i2 < 2) for (; ; ) {
      if (l2 in o2) {
        r2 = o2[l2], l2 += c2;
        break;
      }
      if (l2 += c2, e2 ? l2 < 0 : s2 <= l2) throw TypeError("Reduce of empty array with no initial value");
    }
    for (; e2 ? l2 >= 0 : s2 > l2; l2 += c2) l2 in o2 && (r2 = n2(r2, o2[l2], l2, a2));
    return r2;
  };
};
var Li = { left: Ii(false), right: Ii(true) }.left;
var Ni = on("reduce");
var Mi = tn("reduce", { 1: 0 });
je({ target: "Array", proto: true, forced: !Ni || !Mi }, { reduce: function(e2) {
  return Li(this, e2, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
} });
var ji = Qt("slice");
var Ri = tn("slice", { ACCESSORS: true, 0: 0, 1: 2 });
var _i = et("species");
var Di = [].slice;
var Fi = Math.max;
je({ target: "Array", proto: true, forced: !ji || !Ri }, { slice: function(e2, t2) {
  var n2, i2, r2, a2 = P(this), s2 = de(a2.length), l2 = me(e2, s2), c2 = me(void 0 === t2 ? s2 : t2, s2);
  if (De(a2) && ("function" != typeof (n2 = a2.constructor) || n2 !== Array && !De(n2.prototype) ? o(n2) && null === (n2 = n2[_i]) && (n2 = void 0) : n2 = void 0, n2 === Array || void 0 === n2)) return Di.call(a2, l2, c2);
  for (i2 = new (void 0 === n2 ? Array : n2)(Fi(c2 - l2, 0)), r2 = 0; l2 < c2; l2++, r2++) l2 in a2 && fn(i2, r2, a2[l2]);
  return i2.length = r2, i2;
} });
var qi = ft.some;
var Ui = on("some");
var Hi = tn("some");
je({ target: "Array", proto: true, forced: !Ui || !Hi }, { some: function(e2) {
  return qi(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} });
var Bi = Qt("splice");
var Vi = tn("splice", { ACCESSORS: true, 0: 0, 1: 2 });
var zi = Math.max;
var Wi = Math.min;
je({ target: "Array", proto: true, forced: !Bi || !Vi }, { splice: function(e2, t2) {
  var n2, i2, r2, a2, o2, s2, l2 = Fe(this), c2 = de(l2.length), u2 = me(e2, c2), h2 = arguments.length;
  if (0 === h2 ? n2 = i2 = 0 : 1 === h2 ? (n2 = 0, i2 = c2 - u2) : (n2 = h2 - 2, i2 = Wi(zi(ue(t2), 0), c2 - u2)), c2 + n2 - i2 > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
  for (r2 = ut(l2, i2), a2 = 0; a2 < i2; a2++) (o2 = u2 + a2) in l2 && fn(r2, a2, l2[o2]);
  if (r2.length = i2, n2 < i2) {
    for (a2 = u2; a2 < c2 - i2; a2++) s2 = a2 + n2, (o2 = a2 + i2) in l2 ? l2[s2] = l2[o2] : delete l2[s2];
    for (a2 = c2; a2 > c2 - i2 + n2; a2--) delete l2[a2 - 1];
  } else if (n2 > i2) for (a2 = c2 - i2; a2 > u2; a2--) s2 = a2 + n2 - 1, (o2 = a2 + i2 - 1) in l2 ? l2[s2] = l2[o2] : delete l2[s2];
  for (a2 = 0; a2 < n2; a2++) l2[a2 + u2] = arguments[a2 + 2];
  return l2.length = c2 - i2 + n2, r2;
} }), je({ global: true }, { globalThis: a });
var $i = Math.sign || function(e2) {
  return 0 == (e2 = +e2) || e2 != e2 ? e2 : e2 < 0 ? -1 : 1;
};
je({ target: "Math", stat: true }, { sign: $i });
var Ki = Math.ceil;
var Yi = Math.floor;
je({ target: "Math", stat: true }, { trunc: function(e2) {
  return (e2 > 0 ? Yi : Ki)(e2);
} });
var Gi = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e2, t2 = false, n2 = {};
  try {
    (e2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n2, []), t2 = n2 instanceof Array;
  } catch (e3) {
  }
  return function(n3, i2) {
    return h(n3), function(e3) {
      if (!o(e3) && null !== e3) throw TypeError("Can't set " + String(e3) + " as a prototype");
    }(i2), t2 ? e2.call(n3, i2) : n3.__proto__ = i2, n3;
  };
}() : void 0);
var Xi = function(e2, t2, n2) {
  var i2, r2;
  return Gi && "function" == typeof (i2 = t2.constructor) && i2 !== n2 && o(r2 = i2.prototype) && r2 !== n2.prototype && Gi(e2, r2), e2;
};
var Qi = "	\n\v\f\r                　\u2028\u2029\uFEFF";
var Ji = "[" + Qi + "]";
var Zi = RegExp("^" + Ji + Ji + "*");
var er = RegExp(Ji + Ji + "*$");
var tr = function(e2) {
  return function(t2) {
    var n2 = String(C(t2));
    return 1 & e2 && (n2 = n2.replace(Zi, "")), 2 & e2 && (n2 = n2.replace(er, "")), n2;
  };
};
var nr = { start: tr(1), end: tr(2), trim: tr(3) };
var ir = Te.f;
var rr = N.f;
var ar = p.f;
var or = nr.trim;
var sr = a.Number;
var lr = sr.prototype;
var cr = "Number" == E($e(lr));
var ur = function(e2) {
  var t2, n2, i2, r2, a2, o2, s2, l2, c2 = d(e2, false);
  if ("string" == typeof c2 && c2.length > 2) {
    if (43 === (t2 = (c2 = or(c2)).charCodeAt(0)) || 45 === t2) {
      if (88 === (n2 = c2.charCodeAt(2)) || 120 === n2) return NaN;
    } else if (48 === t2) {
      switch (c2.charCodeAt(1)) {
        case 66:
        case 98:
          i2 = 2, r2 = 49;
          break;
        case 79:
        case 111:
          i2 = 8, r2 = 55;
          break;
        default:
          return +c2;
      }
      for (o2 = (a2 = c2.slice(2)).length, s2 = 0; s2 < o2; s2++) if ((l2 = a2.charCodeAt(s2)) < 48 || l2 > r2) return NaN;
      return parseInt(a2, i2);
    }
  }
  return +c2;
};
if (Ne("Number", !sr(" 0o1") || !sr("0b1") || sr("+0x1"))) {
  for (dr = function(t2) {
    var n2 = arguments.length < 1 ? 0 : t2, i2 = this;
    return i2 instanceof dr && (cr ? e(function() {
      lr.valueOf.call(i2);
    }) : "Number" != E(i2)) ? Xi(new sr(ur(n2)), i2, dr) : ur(n2);
  }, fr = t ? ir(sr) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), pr = 0; fr.length > pr; pr++) I(sr, hr = fr[pr]) && !I(dr, hr) && ar(dr, hr, rr(sr, hr));
  dr.prototype = lr, lr.constructor = dr, re(a, "Number", dr);
}
var hr;
var dr;
var fr;
var pr;
je({ target: "Number", stat: true }, { isNaN: function(e2) {
  return e2 != e2;
} });
var mr = "".repeat || function(e2) {
  var t2 = String(C(this)), n2 = "", i2 = ue(e2);
  if (i2 < 0 || i2 == 1 / 0) throw RangeError("Wrong number of repetitions");
  for (; i2 > 0; (i2 >>>= 1) && (t2 += t2)) 1 & i2 && (n2 += t2);
  return n2;
};
var gr = 1 .toFixed;
var vr = Math.floor;
var yr = function(e2, t2, n2) {
  return 0 === t2 ? n2 : t2 % 2 == 1 ? yr(e2, t2 - 1, n2 * e2) : yr(e2 * e2, t2 / 2, n2);
};
var br = gr && ("0.000" !== 8e-5.toFixed(3) || "1" !== 0.9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 1000000000000000100 .toFixed(0)) || !e(function() {
  gr.call({});
});
je({ target: "Number", proto: true, forced: br }, { toFixed: function(e2) {
  var t2, n2, i2, r2, a2 = function(e3) {
    if ("number" != typeof e3 && "Number" != E(e3)) throw TypeError("Incorrect invocation");
    return +e3;
  }(this), o2 = ue(e2), s2 = [0, 0, 0, 0, 0, 0], l2 = "", c2 = "0", u2 = function(e3, t3) {
    for (var n3 = -1, i3 = t3; ++n3 < 6; ) i3 += e3 * s2[n3], s2[n3] = i3 % 1e7, i3 = vr(i3 / 1e7);
  }, h2 = function(e3) {
    for (var t3 = 6, n3 = 0; --t3 >= 0; ) n3 += s2[t3], s2[t3] = vr(n3 / e3), n3 = n3 % e3 * 1e7;
  }, d2 = function() {
    for (var e3 = 6, t3 = ""; --e3 >= 0; ) if ("" !== t3 || 0 === e3 || 0 !== s2[e3]) {
      var n3 = String(s2[e3]);
      t3 = "" === t3 ? n3 : t3 + mr.call("0", 7 - n3.length) + n3;
    }
    return t3;
  };
  if (o2 < 0 || o2 > 20) throw RangeError("Incorrect fraction digits");
  if (a2 != a2) return "NaN";
  if (a2 <= -1e21 || a2 >= 1e21) return String(a2);
  if (a2 < 0 && (l2 = "-", a2 = -a2), a2 > 1e-21) if (n2 = (t2 = function(e3) {
    for (var t3 = 0, n3 = e3; n3 >= 4096; ) t3 += 12, n3 /= 4096;
    for (; n3 >= 2; ) t3 += 1, n3 /= 2;
    return t3;
  }(a2 * yr(2, 69, 1)) - 69) < 0 ? a2 * yr(2, -t2, 1) : a2 / yr(2, t2, 1), n2 *= 4503599627370496, (t2 = 52 - t2) > 0) {
    for (u2(0, n2), i2 = o2; i2 >= 7; ) u2(1e7, 0), i2 -= 7;
    for (u2(yr(10, i2, 1), 0), i2 = t2 - 1; i2 >= 23; ) h2(1 << 23), i2 -= 23;
    h2(1 << i2), u2(1, 1), h2(2), c2 = d2();
  } else u2(0, n2), u2(1 << -t2, 0), c2 = d2() + mr.call("0", o2);
  return c2 = o2 > 0 ? l2 + ((r2 = c2.length) <= o2 ? "0." + mr.call("0", o2 - r2) + c2 : c2.slice(0, r2 - o2) + "." + c2.slice(r2 - o2)) : l2 + c2;
} });
var wr = k.f;
var kr = function(e2) {
  return function(n2) {
    for (var i2, r2 = P(n2), a2 = qe(r2), o2 = a2.length, s2 = 0, l2 = []; o2 > s2; ) i2 = a2[s2++], t && !wr.call(r2, i2) || l2.push(e2 ? [i2, r2[i2]] : r2[i2]);
    return l2;
  };
};
var Tr = { entries: kr(true), values: kr(false) };
var Sr = Tr.entries;
je({ target: "Object", stat: true }, { entries: function(e2) {
  return Sr(e2);
} });
var Er = Jn ? {}.toString : function() {
  return "[object " + ti(this) + "]";
};
Jn || re(Object.prototype, "toString", Er, { unsafe: true });
var Ar = Tr.values;
je({ target: "Object", stat: true }, { values: function(e2) {
  return Ar(e2);
} });
var xr = et("match");
var Cr = function(e2) {
  var t2;
  return o(e2) && (void 0 !== (t2 = e2[xr]) ? !!t2 : "RegExp" == E(e2));
};
var Pr = function() {
  var e2 = h(this), t2 = "";
  return e2.global && (t2 += "g"), e2.ignoreCase && (t2 += "i"), e2.multiline && (t2 += "m"), e2.dotAll && (t2 += "s"), e2.unicode && (t2 += "u"), e2.sticky && (t2 += "y"), t2;
};
function Or(e2, t2) {
  return RegExp(e2, t2);
}
var Ir = { UNSUPPORTED_Y: e(function() {
  var e2 = Or("a", "y");
  return e2.lastIndex = 2, null != e2.exec("abcd");
}), BROKEN_CARET: e(function() {
  var e2 = Or("^r", "gy");
  return e2.lastIndex = 2, null != e2.exec("str");
}) };
var Lr = et("species");
var Nr = p.f;
var Mr = Te.f;
var jr = ie.set;
var Rr = et("match");
var _r = a.RegExp;
var Dr = _r.prototype;
var Fr = /a/g;
var qr = /a/g;
var Ur = new _r(Fr) !== Fr;
var Hr = Ir.UNSUPPORTED_Y;
if (t && Ne("RegExp", !Ur || Hr || e(function() {
  return qr[Rr] = false, _r(Fr) != Fr || _r(qr) == qr || "/a/i" != _r(Fr, "i");
}))) {
  for (Br = function(e2, t2) {
    var n2, i2 = this instanceof Br, r2 = Cr(e2), a2 = void 0 === t2;
    if (!i2 && r2 && e2.constructor === Br && a2) return e2;
    Ur ? r2 && !a2 && (e2 = e2.source) : e2 instanceof Br && (a2 && (t2 = Pr.call(e2)), e2 = e2.source), Hr && (n2 = !!t2 && t2.indexOf("y") > -1) && (t2 = t2.replace(/y/g, ""));
    var o2 = Xi(Ur ? new _r(e2, t2) : _r(e2, t2), i2 ? this : Dr, Br);
    return Hr && n2 && jr(o2, { sticky: n2 }), o2;
  }, Vr = function(e2) {
    e2 in Br || Nr(Br, e2, { configurable: true, get: function() {
      return _r[e2];
    }, set: function(t2) {
      _r[e2] = t2;
    } });
  }, zr = Mr(_r), Wr = 0; zr.length > Wr; ) Vr(zr[Wr++]);
  Dr.constructor = Br, Br.prototype = Dr, re(a, "RegExp", Br);
}
var Br;
var Vr;
var zr;
var Wr;
!function(e2) {
  var n2 = se(e2), i2 = p.f;
  t && n2 && !n2[Lr] && i2(n2, Lr, { configurable: true, get: function() {
    return this;
  } });
}("RegExp");
var $r = RegExp.prototype.exec;
var Kr = String.prototype.replace;
var Yr = $r;
var Gr = function() {
  var e2 = /a/, t2 = /b*/g;
  return $r.call(e2, "a"), $r.call(t2, "a"), 0 !== e2.lastIndex || 0 !== t2.lastIndex;
}();
var Xr = Ir.UNSUPPORTED_Y || Ir.BROKEN_CARET;
var Qr = void 0 !== /()??/.exec("")[1];
(Gr || Qr || Xr) && (Yr = function(e2) {
  var t2, n2, i2, r2, a2 = this, o2 = Xr && a2.sticky, s2 = Pr.call(a2), l2 = a2.source, c2 = 0, u2 = e2;
  return o2 && (-1 === (s2 = s2.replace("y", "")).indexOf("g") && (s2 += "g"), u2 = String(e2).slice(a2.lastIndex), a2.lastIndex > 0 && (!a2.multiline || a2.multiline && "\n" !== e2[a2.lastIndex - 1]) && (l2 = "(?: " + l2 + ")", u2 = " " + u2, c2++), n2 = new RegExp("^(?:" + l2 + ")", s2)), Qr && (n2 = new RegExp("^" + l2 + "$(?!\\s)", s2)), Gr && (t2 = a2.lastIndex), i2 = $r.call(o2 ? n2 : a2, u2), o2 ? i2 ? (i2.input = i2.input.slice(c2), i2[0] = i2[0].slice(c2), i2.index = a2.lastIndex, a2.lastIndex += i2[0].length) : a2.lastIndex = 0 : Gr && i2 && (a2.lastIndex = a2.global ? i2.index + i2[0].length : t2), Qr && i2 && i2.length > 1 && Kr.call(i2[0], n2, function() {
    for (r2 = 1; r2 < arguments.length - 2; r2++) void 0 === arguments[r2] && (i2[r2] = void 0);
  }), i2;
});
var Jr = Yr;
je({ target: "RegExp", proto: true, forced: /./.exec !== Jr }, { exec: Jr });
var Zr = RegExp.prototype;
var ea = Zr.toString;
var ta = e(function() {
  return "/a/b" != ea.call({ source: "a", flags: "b" });
});
var na = "toString" != ea.name;
(ta || na) && re(RegExp.prototype, "toString", function() {
  var e2 = h(this), t2 = String(e2.source), n2 = e2.flags;
  return "/" + t2 + "/" + String(void 0 === n2 && e2 instanceof RegExp && !("flags" in Zr) ? Pr.call(e2) : n2);
}, { unsafe: true });
var ia = function(e2) {
  if (Cr(e2)) throw TypeError("The method doesn't accept regular expressions");
  return e2;
};
var ra = et("match");
var aa = function(e2) {
  var t2 = /./;
  try {
    "/./"[e2](t2);
  } catch (n2) {
    try {
      return t2[ra] = false, "/./"[e2](t2);
    } catch (e3) {
    }
  }
  return false;
};
je({ target: "String", proto: true, forced: !aa("includes") }, { includes: function(e2) {
  return !!~String(C(this)).indexOf(ia(e2), arguments.length > 1 ? arguments[1] : void 0);
} });
var oa;
var sa;
var la;
var ca = function(e2) {
  return function(t2, n2) {
    var i2, r2, a2 = String(C(t2)), o2 = ue(n2), s2 = a2.length;
    return o2 < 0 || o2 >= s2 ? e2 ? "" : void 0 : (i2 = a2.charCodeAt(o2)) < 55296 || i2 > 56319 || o2 + 1 === s2 || (r2 = a2.charCodeAt(o2 + 1)) < 56320 || r2 > 57343 ? e2 ? a2.charAt(o2) : i2 : e2 ? a2.slice(o2, o2 + 2) : r2 - 56320 + (i2 - 55296 << 10) + 65536;
  };
};
var ua = { codeAt: ca(false), charAt: ca(true) };
var ha = !e(function() {
  function e2() {
  }
  return e2.prototype.constructor = null, Object.getPrototypeOf(new e2()) !== e2.prototype;
});
var da = Y("IE_PROTO");
var fa = Object.prototype;
var pa = ha ? Object.getPrototypeOf : function(e2) {
  return e2 = Fe(e2), I(e2, da) ? e2[da] : "function" == typeof e2.constructor && e2 instanceof e2.constructor ? e2.constructor.prototype : e2 instanceof Object ? fa : null;
};
var ma = et("iterator");
var ga = false;
[].keys && ("next" in (la = [].keys()) ? (sa = pa(pa(la))) !== Object.prototype && (oa = sa) : ga = true), null == oa && (oa = {}), I(oa, ma) || M(oa, ma, function() {
  return this;
});
var va = { IteratorPrototype: oa, BUGGY_SAFARI_ITERATORS: ga };
var ya = va.IteratorPrototype;
var ba = function() {
  return this;
};
var wa = function(e2, t2, n2) {
  var i2 = t2 + " Iterator";
  return e2.prototype = $e(ya, { next: T(1, n2) }), ot(e2, i2, false), Kn[i2] = ba, e2;
};
var ka = va.IteratorPrototype;
var Ta = va.BUGGY_SAFARI_ITERATORS;
var Sa = et("iterator");
var Ea = function() {
  return this;
};
var Aa = function(e2, t2, n2, i2, r2, a2, o2) {
  wa(n2, t2, i2);
  var s2, l2, c2, u2 = function(e3) {
    if (e3 === r2 && m2) return m2;
    if (!Ta && e3 in f2) return f2[e3];
    switch (e3) {
      case "keys":
      case "values":
      case "entries":
        return function() {
          return new n2(this, e3);
        };
    }
    return function() {
      return new n2(this);
    };
  }, h2 = t2 + " Iterator", d2 = false, f2 = e2.prototype, p2 = f2[Sa] || f2["@@iterator"] || r2 && f2[r2], m2 = !Ta && p2 || u2(r2), g2 = "Array" == t2 && f2.entries || p2;
  if (g2 && (s2 = pa(g2.call(new e2())), ka !== Object.prototype && s2.next && (pa(s2) !== ka && (Gi ? Gi(s2, ka) : "function" != typeof s2[Sa] && M(s2, Sa, Ea)), ot(s2, h2, true))), "values" == r2 && p2 && "values" !== p2.name && (d2 = true, m2 = function() {
    return p2.call(this);
  }), f2[Sa] !== m2 && M(f2, Sa, m2), Kn[t2] = m2, r2) if (l2 = { values: u2("values"), keys: a2 ? m2 : u2("keys"), entries: u2("entries") }, o2) for (c2 in l2) (Ta || d2 || !(c2 in f2)) && re(f2, c2, l2[c2]);
  else je({ target: t2, proto: true, forced: Ta || d2 }, l2);
  return l2;
};
var xa = ua.charAt;
var Ca = ie.set;
var Pa = ie.getterFor("String Iterator");
Aa(String, "String", function(e2) {
  Ca(this, { type: "String Iterator", string: String(e2), index: 0 });
}, function() {
  var e2, t2 = Pa(this), n2 = t2.string, i2 = t2.index;
  return i2 >= n2.length ? { value: void 0, done: true } : (e2 = xa(n2, i2), t2.index += e2.length, { value: e2, done: false });
});
var Oa = et("species");
var Ia = !e(function() {
  var e2 = /./;
  return e2.exec = function() {
    var e3 = [];
    return e3.groups = { a: "7" }, e3;
  }, "7" !== "".replace(e2, "$<a>");
});
var La = "$0" === "a".replace(/./, "$0");
var Na = et("replace");
var Ma = !!/./[Na] && "" === /./[Na]("a", "$0");
var ja = !e(function() {
  var e2 = /(?:)/, t2 = e2.exec;
  e2.exec = function() {
    return t2.apply(this, arguments);
  };
  var n2 = "ab".split(e2);
  return 2 !== n2.length || "a" !== n2[0] || "b" !== n2[1];
});
var Ra = function(t2, n2, i2, r2) {
  var a2 = et(t2), o2 = !e(function() {
    var e2 = {};
    return e2[a2] = function() {
      return 7;
    }, 7 != ""[t2](e2);
  }), s2 = o2 && !e(function() {
    var e2 = false, n3 = /a/;
    return "split" === t2 && ((n3 = {}).constructor = {}, n3.constructor[Oa] = function() {
      return n3;
    }, n3.flags = "", n3[a2] = /./[a2]), n3.exec = function() {
      return e2 = true, null;
    }, n3[a2](""), !e2;
  });
  if (!o2 || !s2 || "replace" === t2 && (!Ia || !La || Ma) || "split" === t2 && !ja) {
    var l2 = /./[a2], c2 = i2(a2, ""[t2], function(e2, t3, n3, i3, r3) {
      return t3.exec === Jr ? o2 && !r3 ? { done: true, value: l2.call(t3, n3, i3) } : { done: true, value: e2.call(n3, t3, i3) } : { done: false };
    }, { REPLACE_KEEPS_$0: La, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Ma }), u2 = c2[0], h2 = c2[1];
    re(String.prototype, t2, u2), re(RegExp.prototype, a2, 2 == n2 ? function(e2, t3) {
      return h2.call(e2, this, t3);
    } : function(e2) {
      return h2.call(e2, this);
    });
  }
  r2 && M(RegExp.prototype[a2], "sham", true);
};
var _a = ua.charAt;
var Da = function(e2, t2, n2) {
  return t2 + (n2 ? _a(e2, t2).length : 1);
};
var Fa = function(e2, t2) {
  var n2 = e2.exec;
  if ("function" == typeof n2) {
    var i2 = n2.call(e2, t2);
    if ("object" != typeof i2) throw TypeError("RegExp exec method returned something other than an Object or null");
    return i2;
  }
  if ("RegExp" !== E(e2)) throw TypeError("RegExp#exec called on incompatible receiver");
  return Jr.call(e2, t2);
};
Ra("match", 1, function(e2, t2, n2) {
  return [function(t3) {
    var n3 = C(this), i2 = null == t3 ? void 0 : t3[e2];
    return void 0 !== i2 ? i2.call(t3, n3) : new RegExp(t3)[e2](String(n3));
  }, function(e3) {
    var i2 = n2(t2, e3, this);
    if (i2.done) return i2.value;
    var r2 = h(e3), a2 = String(this);
    if (!r2.global) return Fa(r2, a2);
    var o2 = r2.unicode;
    r2.lastIndex = 0;
    for (var s2, l2 = [], c2 = 0; null !== (s2 = Fa(r2, a2)); ) {
      var u2 = String(s2[0]);
      l2[c2] = u2, "" === u2 && (r2.lastIndex = Da(a2, de(r2.lastIndex), o2)), c2++;
    }
    return 0 === c2 ? null : l2;
  }];
});
var qa = Math.max;
var Ua = Math.min;
var Ha = Math.floor;
var Ba = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var Va = /\$([$&'`]|\d\d?)/g;
Ra("replace", 2, function(e2, t2, n2, i2) {
  var r2 = i2.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, a2 = i2.REPLACE_KEEPS_$0, o2 = r2 ? "$" : "$0";
  return [function(n3, i3) {
    var r3 = C(this), a3 = null == n3 ? void 0 : n3[e2];
    return void 0 !== a3 ? a3.call(n3, r3, i3) : t2.call(String(r3), n3, i3);
  }, function(e3, i3) {
    if (!r2 && a2 || "string" == typeof i3 && -1 === i3.indexOf(o2)) {
      var l2 = n2(t2, e3, this, i3);
      if (l2.done) return l2.value;
    }
    var c2 = h(e3), u2 = String(this), d2 = "function" == typeof i3;
    d2 || (i3 = String(i3));
    var f2 = c2.global;
    if (f2) {
      var p2 = c2.unicode;
      c2.lastIndex = 0;
    }
    for (var m2 = []; ; ) {
      var g2 = Fa(c2, u2);
      if (null === g2) break;
      if (m2.push(g2), !f2) break;
      "" === String(g2[0]) && (c2.lastIndex = Da(u2, de(c2.lastIndex), p2));
    }
    for (var v2, y2 = "", b2 = 0, w2 = 0; w2 < m2.length; w2++) {
      g2 = m2[w2];
      for (var k2 = String(g2[0]), T2 = qa(Ua(ue(g2.index), u2.length), 0), S2 = [], E2 = 1; E2 < g2.length; E2++) S2.push(void 0 === (v2 = g2[E2]) ? v2 : String(v2));
      var A2 = g2.groups;
      if (d2) {
        var x2 = [k2].concat(S2, T2, u2);
        void 0 !== A2 && x2.push(A2);
        var C2 = String(i3.apply(void 0, x2));
      } else C2 = s2(k2, u2, T2, S2, A2, i3);
      T2 >= b2 && (y2 += u2.slice(b2, T2) + C2, b2 = T2 + k2.length);
    }
    return y2 + u2.slice(b2);
  }];
  function s2(e3, n3, i3, r3, a3, o3) {
    var s3 = i3 + e3.length, l2 = r3.length, c2 = Va;
    return void 0 !== a3 && (a3 = Fe(a3), c2 = Ba), t2.call(o3, c2, function(t3, o4) {
      var c3;
      switch (o4.charAt(0)) {
        case "$":
          return "$";
        case "&":
          return e3;
        case "`":
          return n3.slice(0, i3);
        case "'":
          return n3.slice(s3);
        case "<":
          c3 = a3[o4.slice(1, -1)];
          break;
        default:
          var u2 = +o4;
          if (0 === u2) return t3;
          if (u2 > l2) {
            var h2 = Ha(u2 / 10);
            return 0 === h2 ? t3 : h2 <= l2 ? void 0 === r3[h2 - 1] ? o4.charAt(1) : r3[h2 - 1] + o4.charAt(1) : t3;
          }
          c3 = r3[u2 - 1];
      }
      return void 0 === c3 ? "" : c3;
    });
  }
});
var za = Object.is || function(e2, t2) {
  return e2 === t2 ? 0 !== e2 || 1 / e2 == 1 / t2 : e2 != e2 && t2 != t2;
};
Ra("search", 1, function(e2, t2, n2) {
  return [function(t3) {
    var n3 = C(this), i2 = null == t3 ? void 0 : t3[e2];
    return void 0 !== i2 ? i2.call(t3, n3) : new RegExp(t3)[e2](String(n3));
  }, function(e3) {
    var i2 = n2(t2, e3, this);
    if (i2.done) return i2.value;
    var r2 = h(e3), a2 = String(this), o2 = r2.lastIndex;
    za(o2, 0) || (r2.lastIndex = 0);
    var s2 = Fa(r2, a2);
    return za(r2.lastIndex, o2) || (r2.lastIndex = o2), null === s2 ? -1 : s2.index;
  }];
});
var Wa = et("species");
var $a = [].push;
var Ka = Math.min;
var Ya = !e(function() {
  return !RegExp(4294967295, "y");
});
Ra("split", 2, function(e2, t2, n2) {
  var i2;
  return i2 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e3, n3) {
    var i3 = String(C(this)), r2 = void 0 === n3 ? 4294967295 : n3 >>> 0;
    if (0 === r2) return [];
    if (void 0 === e3) return [i3];
    if (!Cr(e3)) return t2.call(i3, e3, r2);
    for (var a2, o2, s2, l2 = [], c2 = (e3.ignoreCase ? "i" : "") + (e3.multiline ? "m" : "") + (e3.unicode ? "u" : "") + (e3.sticky ? "y" : ""), u2 = 0, h2 = new RegExp(e3.source, c2 + "g"); (a2 = Jr.call(h2, i3)) && !((o2 = h2.lastIndex) > u2 && (l2.push(i3.slice(u2, a2.index)), a2.length > 1 && a2.index < i3.length && $a.apply(l2, a2.slice(1)), s2 = a2[0].length, u2 = o2, l2.length >= r2)); ) h2.lastIndex === a2.index && h2.lastIndex++;
    return u2 === i3.length ? !s2 && h2.test("") || l2.push("") : l2.push(i3.slice(u2)), l2.length > r2 ? l2.slice(0, r2) : l2;
  } : "0".split(void 0, 0).length ? function(e3, n3) {
    return void 0 === e3 && 0 === n3 ? [] : t2.call(this, e3, n3);
  } : t2, [function(t3, n3) {
    var r2 = C(this), a2 = null == t3 ? void 0 : t3[e2];
    return void 0 !== a2 ? a2.call(t3, r2, n3) : i2.call(String(r2), t3, n3);
  }, function(e3, r2) {
    var a2 = n2(i2, e3, this, r2, i2 !== t2);
    if (a2.done) return a2.value;
    var o2 = h(e3), s2 = String(this), l2 = function(e4, t3) {
      var n3, i3 = h(e4).constructor;
      return void 0 === i3 || null == (n3 = h(i3)[Wa]) ? t3 : st(n3);
    }(o2, RegExp), c2 = o2.unicode, u2 = (o2.ignoreCase ? "i" : "") + (o2.multiline ? "m" : "") + (o2.unicode ? "u" : "") + (Ya ? "y" : "g"), d2 = new l2(Ya ? o2 : "^(?:" + o2.source + ")", u2), f2 = void 0 === r2 ? 4294967295 : r2 >>> 0;
    if (0 === f2) return [];
    if (0 === s2.length) return null === Fa(d2, s2) ? [s2] : [];
    for (var p2 = 0, m2 = 0, g2 = []; m2 < s2.length; ) {
      d2.lastIndex = Ya ? m2 : 0;
      var v2, y2 = Fa(d2, Ya ? s2 : s2.slice(m2));
      if (null === y2 || (v2 = Ka(de(d2.lastIndex + (Ya ? 0 : m2)), s2.length)) === p2) m2 = Da(s2, m2, c2);
      else {
        if (g2.push(s2.slice(p2, m2)), g2.length === f2) return g2;
        for (var b2 = 1; b2 <= y2.length - 1; b2++) if (g2.push(y2[b2]), g2.length === f2) return g2;
        m2 = p2 = v2;
      }
    }
    return g2.push(s2.slice(p2)), g2;
  }];
}, !Ya);
var Ga;
var Xa = N.f;
var Qa = "".startsWith;
var Ja = Math.min;
var Za = aa("startsWith");
var eo = !(Za || (Ga = Xa(String.prototype, "startsWith"), !Ga || Ga.writable));
je({ target: "String", proto: true, forced: !eo && !Za }, { startsWith: function(e2) {
  var t2 = String(C(this));
  ia(e2);
  var n2 = de(Ja(arguments.length > 1 ? arguments[1] : void 0, t2.length)), i2 = String(e2);
  return Qa ? Qa.call(t2, i2, n2) : t2.slice(n2, n2 + i2.length) === i2;
} });
var to = nr.trim;
je({ target: "String", proto: true, forced: function(t2) {
  return e(function() {
    return !!Qi[t2]() || "​᠎" != "​᠎"[t2]() || Qi[t2].name !== t2;
  });
}("trim") }, { trim: function() {
  return to(this);
} });
var no = function(e2, t2, n2) {
  for (var i2 in t2) re(e2, i2, t2[i2], n2);
  return e2;
};
var io = !e(function() {
  return Object.isExtensible(Object.preventExtensions({}));
});
var ro = i(function(e2) {
  var t2 = p.f, n2 = $("meta"), i2 = 0, r2 = Object.isExtensible || function() {
    return true;
  }, a2 = function(e3) {
    t2(e3, n2, { value: { objectID: "O" + ++i2, weakData: {} } });
  }, s2 = e2.exports = { REQUIRED: false, fastKey: function(e3, t3) {
    if (!o(e3)) return "symbol" == typeof e3 ? e3 : ("string" == typeof e3 ? "S" : "P") + e3;
    if (!I(e3, n2)) {
      if (!r2(e3)) return "F";
      if (!t3) return "E";
      a2(e3);
    }
    return e3[n2].objectID;
  }, getWeakData: function(e3, t3) {
    if (!I(e3, n2)) {
      if (!r2(e3)) return true;
      if (!t3) return false;
      a2(e3);
    }
    return e3[n2].weakData;
  }, onFreeze: function(e3) {
    return io && s2.REQUIRED && r2(e3) && !I(e3, n2) && a2(e3), e3;
  } };
  G[n2] = true;
});
var ao = i(function(e2) {
  var t2 = function(e3, t3) {
    this.stopped = e3, this.result = t3;
  };
  (e2.exports = function(e3, n2, i2, r2, a2) {
    var o2, s2, l2, c2, u2, d2, f2, p2 = lt(n2, i2, r2 ? 2 : 1);
    if (a2) o2 = e3;
    else {
      if ("function" != typeof (s2 = ii(e3))) throw TypeError("Target is not iterable");
      if (Xn(s2)) {
        for (l2 = 0, c2 = de(e3.length); c2 > l2; l2++) if ((u2 = r2 ? p2(h(f2 = e3[l2])[0], f2[1]) : p2(e3[l2])) && u2 instanceof t2) return u2;
        return new t2(false);
      }
      o2 = s2.call(e3);
    }
    for (d2 = o2.next; !(f2 = d2.call(o2)).done; ) if ("object" == typeof (u2 = $n(o2, p2, f2.value, r2)) && u2 && u2 instanceof t2) return u2;
    return new t2(false);
  }).stop = function(e3) {
    return new t2(true, e3);
  };
});
var oo = function(e2, t2, n2) {
  if (!(e2 instanceof t2)) throw TypeError("Incorrect " + (n2 ? n2 + " " : "") + "invocation");
  return e2;
};
var so = ro.getWeakData;
var lo = ie.set;
var co = ie.getterFor;
var uo = ft.find;
var ho = ft.findIndex;
var fo = 0;
var po = function(e2) {
  return e2.frozen || (e2.frozen = new mo());
};
var mo = function() {
  this.entries = [];
};
var go = function(e2, t2) {
  return uo(e2.entries, function(e3) {
    return e3[0] === t2;
  });
};
mo.prototype = { get: function(e2) {
  var t2 = go(this, e2);
  if (t2) return t2[1];
}, has: function(e2) {
  return !!go(this, e2);
}, set: function(e2, t2) {
  var n2 = go(this, e2);
  n2 ? n2[1] = t2 : this.entries.push([e2, t2]);
}, delete: function(e2) {
  var t2 = ho(this.entries, function(t3) {
    return t3[0] === e2;
  });
  return ~t2 && this.entries.splice(t2, 1), !!~t2;
} };
var vo = { getConstructor: function(e2, t2, n2, i2) {
  var r2 = e2(function(e3, a3) {
    oo(e3, r2, t2), lo(e3, { type: t2, id: fo++, frozen: void 0 }), null != a3 && ao(a3, e3[i2], e3, n2);
  }), a2 = co(t2), s2 = function(e3, t3, n3) {
    var i3 = a2(e3), r3 = so(h(t3), true);
    return true === r3 ? po(i3).set(t3, n3) : r3[i3.id] = n3, e3;
  };
  return no(r2.prototype, { delete: function(e3) {
    var t3 = a2(this);
    if (!o(e3)) return false;
    var n3 = so(e3);
    return true === n3 ? po(t3).delete(e3) : n3 && I(n3, t3.id) && delete n3[t3.id];
  }, has: function(e3) {
    var t3 = a2(this);
    if (!o(e3)) return false;
    var n3 = so(e3);
    return true === n3 ? po(t3).has(e3) : n3 && I(n3, t3.id);
  } }), no(r2.prototype, n2 ? { get: function(e3) {
    var t3 = a2(this);
    if (o(e3)) {
      var n3 = so(e3);
      return true === n3 ? po(t3).get(e3) : n3 ? n3[t3.id] : void 0;
    }
  }, set: function(e3, t3) {
    return s2(this, e3, t3);
  } } : { add: function(e3) {
    return s2(this, e3, true);
  } }), r2;
} };
var yo = (i(function(t2) {
  var n2, i2 = ie.enforce, r2 = !a.ActiveXObject && "ActiveXObject" in a, s2 = Object.isExtensible, l2 = function(e2) {
    return function() {
      return e2(this, arguments.length ? arguments[0] : void 0);
    };
  }, c2 = t2.exports = function(t3, n3, i3) {
    var r3 = -1 !== t3.indexOf("Map"), s3 = -1 !== t3.indexOf("Weak"), l3 = r3 ? "set" : "add", c3 = a[t3], u3 = c3 && c3.prototype, h3 = c3, d3 = {}, f3 = function(e2) {
      var t4 = u3[e2];
      re(u3, e2, "add" == e2 ? function(e3) {
        return t4.call(this, 0 === e3 ? 0 : e3), this;
      } : "delete" == e2 ? function(e3) {
        return !(s3 && !o(e3)) && t4.call(this, 0 === e3 ? 0 : e3);
      } : "get" == e2 ? function(e3) {
        return s3 && !o(e3) ? void 0 : t4.call(this, 0 === e3 ? 0 : e3);
      } : "has" == e2 ? function(e3) {
        return !(s3 && !o(e3)) && t4.call(this, 0 === e3 ? 0 : e3);
      } : function(e3, n4) {
        return t4.call(this, 0 === e3 ? 0 : e3, n4), this;
      });
    };
    if (Ne(t3, "function" != typeof c3 || !(s3 || u3.forEach && !e(function() {
      new c3().entries().next();
    })))) h3 = i3.getConstructor(n3, t3, r3, l3), ro.REQUIRED = true;
    else if (Ne(t3, true)) {
      var p3 = new h3(), m2 = p3[l3](s3 ? {} : -0, 1) != p3, g2 = e(function() {
        p3.has(1);
      }), v2 = ci(function(e2) {
        new c3(e2);
      }), y2 = !s3 && e(function() {
        for (var e2 = new c3(), t4 = 5; t4--; ) e2[l3](t4, t4);
        return !e2.has(-0);
      });
      v2 || ((h3 = n3(function(e2, n4) {
        oo(e2, h3, t3);
        var i4 = Xi(new c3(), e2, h3);
        return null != n4 && ao(n4, i4[l3], i4, r3), i4;
      })).prototype = u3, u3.constructor = h3), (g2 || y2) && (f3("delete"), f3("has"), r3 && f3("get")), (y2 || m2) && f3(l3), s3 && u3.clear && delete u3.clear;
    }
    return d3[t3] = h3, je({ global: true, forced: h3 != c3 }, d3), ot(h3, t3), s3 || i3.setStrong(h3, t3, r3), h3;
  }("WeakMap", l2, vo);
  if (B && r2) {
    n2 = vo.getConstructor(l2, "WeakMap", true), ro.REQUIRED = true;
    var u2 = c2.prototype, h2 = u2.delete, d2 = u2.has, f2 = u2.get, p2 = u2.set;
    no(u2, { delete: function(e2) {
      if (o(e2) && !s2(e2)) {
        var t3 = i2(this);
        return t3.frozen || (t3.frozen = new n2()), h2.call(this, e2) || t3.frozen.delete(e2);
      }
      return h2.call(this, e2);
    }, has: function(e2) {
      if (o(e2) && !s2(e2)) {
        var t3 = i2(this);
        return t3.frozen || (t3.frozen = new n2()), d2.call(this, e2) || t3.frozen.has(e2);
      }
      return d2.call(this, e2);
    }, get: function(e2) {
      if (o(e2) && !s2(e2)) {
        var t3 = i2(this);
        return t3.frozen || (t3.frozen = new n2()), d2.call(this, e2) ? f2.call(this, e2) : t3.frozen.get(e2);
      }
      return f2.call(this, e2);
    }, set: function(e2, t3) {
      if (o(e2) && !s2(e2)) {
        var r3 = i2(this);
        r3.frozen || (r3.frozen = new n2()), d2.call(this, e2) ? p2.call(this, e2, t3) : r3.frozen.set(e2, t3);
      } else p2.call(this, e2, t3);
      return this;
    } });
  }
}), ie.set);
var bo = ie.getterFor("Array Iterator");
var wo = Aa(Array, "Array", function(e2, t2) {
  yo(this, { type: "Array Iterator", target: P(e2), index: 0, kind: t2 });
}, function() {
  var e2 = bo(this), t2 = e2.target, n2 = e2.kind, i2 = e2.index++;
  return !t2 || i2 >= t2.length ? (e2.target = void 0, { value: void 0, done: true }) : "keys" == n2 ? { value: i2, done: false } : "values" == n2 ? { value: t2[i2], done: false } : { value: [i2, t2[i2]], done: false };
}, "values");
Kn.Arguments = Kn.Array, qn("keys"), qn("values"), qn("entries");
var ko = et("iterator");
var To = et("toStringTag");
var So = wo.values;
for (Eo in mn) {
  Ao = a[Eo], xo = Ao && Ao.prototype;
  if (xo) {
    if (xo[ko] !== So) try {
      M(xo, ko, So);
    } catch (e2) {
      xo[ko] = So;
    }
    if (xo[To] || M(xo, To, Eo), mn[Eo]) {
      for (Co in wo) if (xo[Co] !== wo[Co]) try {
        M(xo, Co, wo[Co]);
      } catch (e2) {
        xo[Co] = wo[Co];
      }
    }
  }
}
var Ao;
var xo;
var Co;
var Eo;
var Po = et("iterator");
var Oo = !e(function() {
  var e2 = new URL("b?a=1&b=2&c=3", "http://a"), t2 = e2.searchParams, n2 = "";
  return e2.pathname = "c%20d", t2.forEach(function(e3, i2) {
    t2.delete("b"), n2 += i2 + e3;
  }), !t2.sort || "http://a/c%20d?a=1&c=3" !== e2.href || "3" !== t2.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t2[Po] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n2 || "x" !== new URL("http://x", void 0).host;
});
var Io = Object.assign;
var Lo = Object.defineProperty;
var No = !Io || e(function() {
  if (t && 1 !== Io({ b: 1 }, Io(Lo({}, "a", { enumerable: true, get: function() {
    Lo(this, "b", { value: 3, enumerable: false });
  } }), { b: 2 })).b) return true;
  var e2 = {}, n2 = {}, i2 = Symbol(), r2 = "abcdefghijklmnopqrst";
  return e2[i2] = 7, r2.split("").forEach(function(e3) {
    n2[e3] = e3;
  }), 7 != Io({}, e2)[i2] || qe(Io({}, n2)).join("") != r2;
}) ? function(e2, n2) {
  for (var i2 = Fe(e2), r2 = arguments.length, a2 = 1, o2 = Se.f, s2 = k.f; r2 > a2; ) for (var l2, c2 = x(arguments[a2++]), u2 = o2 ? qe(c2).concat(o2(c2)) : qe(c2), h2 = u2.length, d2 = 0; h2 > d2; ) l2 = u2[d2++], t && !s2.call(c2, l2) || (i2[l2] = c2[l2]);
  return i2;
} : Io;
var Mo = /[^\0-\u007E]/;
var jo = /[.\u3002\uFF0E\uFF61]/g;
var Ro = "Overflow: input needs wider integers to process";
var _o = Math.floor;
var Do = String.fromCharCode;
var Fo = function(e2) {
  return e2 + 22 + 75 * (e2 < 26);
};
var qo = function(e2, t2, n2) {
  var i2 = 0;
  for (e2 = n2 ? _o(e2 / 700) : e2 >> 1, e2 += _o(e2 / t2); e2 > 455; i2 += 36) e2 = _o(e2 / 35);
  return _o(i2 + 36 * e2 / (e2 + 38));
};
var Uo = function(e2) {
  var t2, n2, i2 = [], r2 = (e2 = function(e3) {
    for (var t3 = [], n3 = 0, i3 = e3.length; n3 < i3; ) {
      var r3 = e3.charCodeAt(n3++);
      if (r3 >= 55296 && r3 <= 56319 && n3 < i3) {
        var a3 = e3.charCodeAt(n3++);
        56320 == (64512 & a3) ? t3.push(((1023 & r3) << 10) + (1023 & a3) + 65536) : (t3.push(r3), n3--);
      } else t3.push(r3);
    }
    return t3;
  }(e2)).length, a2 = 128, o2 = 0, s2 = 72;
  for (t2 = 0; t2 < e2.length; t2++) (n2 = e2[t2]) < 128 && i2.push(Do(n2));
  var l2 = i2.length, c2 = l2;
  for (l2 && i2.push("-"); c2 < r2; ) {
    var u2 = 2147483647;
    for (t2 = 0; t2 < e2.length; t2++) (n2 = e2[t2]) >= a2 && n2 < u2 && (u2 = n2);
    var h2 = c2 + 1;
    if (u2 - a2 > _o((2147483647 - o2) / h2)) throw RangeError(Ro);
    for (o2 += (u2 - a2) * h2, a2 = u2, t2 = 0; t2 < e2.length; t2++) {
      if ((n2 = e2[t2]) < a2 && ++o2 > 2147483647) throw RangeError(Ro);
      if (n2 == a2) {
        for (var d2 = o2, f2 = 36; ; f2 += 36) {
          var p2 = f2 <= s2 ? 1 : f2 >= s2 + 26 ? 26 : f2 - s2;
          if (d2 < p2) break;
          var m2 = d2 - p2, g2 = 36 - p2;
          i2.push(Do(Fo(p2 + m2 % g2))), d2 = _o(m2 / g2);
        }
        i2.push(Do(Fo(d2))), s2 = qo(o2, h2, c2 == l2), o2 = 0, ++c2;
      }
    }
    ++o2, ++a2;
  }
  return i2.join("");
};
var Ho = function(e2) {
  var t2 = ii(e2);
  if ("function" != typeof t2) throw TypeError(String(e2) + " is not iterable");
  return h(t2.call(e2));
};
var Bo = se("fetch");
var Vo = se("Headers");
var zo = et("iterator");
var Wo = ie.set;
var $o = ie.getterFor("URLSearchParams");
var Ko = ie.getterFor("URLSearchParamsIterator");
var Yo = /\+/g;
var Go = Array(4);
var Xo = function(e2) {
  return Go[e2 - 1] || (Go[e2 - 1] = RegExp("((?:%[\\da-f]{2}){" + e2 + "})", "gi"));
};
var Qo = function(e2) {
  try {
    return decodeURIComponent(e2);
  } catch (t2) {
    return e2;
  }
};
var Jo = function(e2) {
  var t2 = e2.replace(Yo, " "), n2 = 4;
  try {
    return decodeURIComponent(t2);
  } catch (e3) {
    for (; n2; ) t2 = t2.replace(Xo(n2--), Qo);
    return t2;
  }
};
var Zo = /[!'()~]|%20/g;
var es = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" };
var ts = function(e2) {
  return es[e2];
};
var ns = function(e2) {
  return encodeURIComponent(e2).replace(Zo, ts);
};
var is = function(e2, t2) {
  if (t2) for (var n2, i2, r2 = t2.split("&"), a2 = 0; a2 < r2.length; ) (n2 = r2[a2++]).length && (i2 = n2.split("="), e2.push({ key: Jo(i2.shift()), value: Jo(i2.join("=")) }));
};
var rs = function(e2) {
  this.entries.length = 0, is(this.entries, e2);
};
var as = function(e2, t2) {
  if (e2 < t2) throw TypeError("Not enough arguments");
};
var os = wa(function(e2, t2) {
  Wo(this, { type: "URLSearchParamsIterator", iterator: Ho($o(e2).entries), kind: t2 });
}, "Iterator", function() {
  var e2 = Ko(this), t2 = e2.kind, n2 = e2.iterator.next(), i2 = n2.value;
  return n2.done || (n2.value = "keys" === t2 ? i2.key : "values" === t2 ? i2.value : [i2.key, i2.value]), n2;
});
var ss = function() {
  oo(this, ss, "URLSearchParams");
  var e2, t2, n2, i2, r2, a2, s2, l2, c2, u2 = arguments.length > 0 ? arguments[0] : void 0, d2 = this, f2 = [];
  if (Wo(d2, { type: "URLSearchParams", entries: f2, updateURL: function() {
  }, updateSearchParams: rs }), void 0 !== u2) if (o(u2)) if ("function" == typeof (e2 = ii(u2))) for (n2 = (t2 = e2.call(u2)).next; !(i2 = n2.call(t2)).done; ) {
    if ((s2 = (a2 = (r2 = Ho(h(i2.value))).next).call(r2)).done || (l2 = a2.call(r2)).done || !a2.call(r2).done) throw TypeError("Expected sequence with length 2");
    f2.push({ key: s2.value + "", value: l2.value + "" });
  }
  else for (c2 in u2) I(u2, c2) && f2.push({ key: c2, value: u2[c2] + "" });
  else is(f2, "string" == typeof u2 ? "?" === u2.charAt(0) ? u2.slice(1) : u2 : u2 + "");
};
var ls = ss.prototype;
no(ls, { append: function(e2, t2) {
  as(arguments.length, 2);
  var n2 = $o(this);
  n2.entries.push({ key: e2 + "", value: t2 + "" }), n2.updateURL();
}, delete: function(e2) {
  as(arguments.length, 1);
  for (var t2 = $o(this), n2 = t2.entries, i2 = e2 + "", r2 = 0; r2 < n2.length; ) n2[r2].key === i2 ? n2.splice(r2, 1) : r2++;
  t2.updateURL();
}, get: function(e2) {
  as(arguments.length, 1);
  for (var t2 = $o(this).entries, n2 = e2 + "", i2 = 0; i2 < t2.length; i2++) if (t2[i2].key === n2) return t2[i2].value;
  return null;
}, getAll: function(e2) {
  as(arguments.length, 1);
  for (var t2 = $o(this).entries, n2 = e2 + "", i2 = [], r2 = 0; r2 < t2.length; r2++) t2[r2].key === n2 && i2.push(t2[r2].value);
  return i2;
}, has: function(e2) {
  as(arguments.length, 1);
  for (var t2 = $o(this).entries, n2 = e2 + "", i2 = 0; i2 < t2.length; ) if (t2[i2++].key === n2) return true;
  return false;
}, set: function(e2, t2) {
  as(arguments.length, 1);
  for (var n2, i2 = $o(this), r2 = i2.entries, a2 = false, o2 = e2 + "", s2 = t2 + "", l2 = 0; l2 < r2.length; l2++) (n2 = r2[l2]).key === o2 && (a2 ? r2.splice(l2--, 1) : (a2 = true, n2.value = s2));
  a2 || r2.push({ key: o2, value: s2 }), i2.updateURL();
}, sort: function() {
  var e2, t2, n2, i2 = $o(this), r2 = i2.entries, a2 = r2.slice();
  for (r2.length = 0, n2 = 0; n2 < a2.length; n2++) {
    for (e2 = a2[n2], t2 = 0; t2 < n2; t2++) if (r2[t2].key > e2.key) {
      r2.splice(t2, 0, e2);
      break;
    }
    t2 === n2 && r2.push(e2);
  }
  i2.updateURL();
}, forEach: function(e2) {
  for (var t2, n2 = $o(this).entries, i2 = lt(e2, arguments.length > 1 ? arguments[1] : void 0, 3), r2 = 0; r2 < n2.length; ) i2((t2 = n2[r2++]).value, t2.key, this);
}, keys: function() {
  return new os(this, "keys");
}, values: function() {
  return new os(this, "values");
}, entries: function() {
  return new os(this, "entries");
} }, { enumerable: true }), re(ls, zo, ls.entries), re(ls, "toString", function() {
  for (var e2, t2 = $o(this).entries, n2 = [], i2 = 0; i2 < t2.length; ) e2 = t2[i2++], n2.push(ns(e2.key) + "=" + ns(e2.value));
  return n2.join("&");
}, { enumerable: true }), ot(ss, "URLSearchParams"), je({ global: true, forced: !Oo }, { URLSearchParams: ss }), Oo || "function" != typeof Bo || "function" != typeof Vo || je({ global: true, enumerable: true, forced: true }, { fetch: function(e2) {
  var t2, n2, i2, r2 = [e2];
  return arguments.length > 1 && (o(t2 = arguments[1]) && (n2 = t2.body, "URLSearchParams" === ti(n2) && ((i2 = t2.headers ? new Vo(t2.headers) : new Vo()).has("content-type") || i2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t2 = $e(t2, { body: T(0, String(n2)), headers: T(0, i2) }))), r2.push(t2)), Bo.apply(this, r2);
} });
var cs;
var us = { URLSearchParams: ss, getState: $o };
var hs = ua.codeAt;
var ds = a.URL;
var fs = us.URLSearchParams;
var ps = us.getState;
var ms = ie.set;
var gs = ie.getterFor("URL");
var vs = Math.floor;
var ys = Math.pow;
var bs = /[A-Za-z]/;
var ws = /[\d+-.A-Za-z]/;
var ks = /\d/;
var Ts = /^(0x|0X)/;
var Ss = /^[0-7]+$/;
var Es = /^\d+$/;
var As = /^[\dA-Fa-f]+$/;
var xs = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
var Cs = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
var Ps = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
var Os = /[\u0009\u000A\u000D]/g;
var Is = function(e2, t2) {
  var n2, i2, r2;
  if ("[" == t2.charAt(0)) {
    if ("]" != t2.charAt(t2.length - 1)) return "Invalid host";
    if (!(n2 = Ns(t2.slice(1, -1)))) return "Invalid host";
    e2.host = n2;
  } else if (Us(e2)) {
    if (t2 = function(e3) {
      var t3, n3, i3 = [], r3 = e3.toLowerCase().replace(jo, ".").split(".");
      for (t3 = 0; t3 < r3.length; t3++) n3 = r3[t3], i3.push(Mo.test(n3) ? "xn--" + Uo(n3) : n3);
      return i3.join(".");
    }(t2), xs.test(t2)) return "Invalid host";
    if (null === (n2 = Ls(t2))) return "Invalid host";
    e2.host = n2;
  } else {
    if (Cs.test(t2)) return "Invalid host";
    for (n2 = "", i2 = ri(t2), r2 = 0; r2 < i2.length; r2++) n2 += Fs(i2[r2], js);
    e2.host = n2;
  }
};
var Ls = function(e2) {
  var t2, n2, i2, r2, a2, o2, s2, l2 = e2.split(".");
  if (l2.length && "" == l2[l2.length - 1] && l2.pop(), (t2 = l2.length) > 4) return e2;
  for (n2 = [], i2 = 0; i2 < t2; i2++) {
    if ("" == (r2 = l2[i2])) return e2;
    if (a2 = 10, r2.length > 1 && "0" == r2.charAt(0) && (a2 = Ts.test(r2) ? 16 : 8, r2 = r2.slice(8 == a2 ? 1 : 2)), "" === r2) o2 = 0;
    else {
      if (!(10 == a2 ? Es : 8 == a2 ? Ss : As).test(r2)) return e2;
      o2 = parseInt(r2, a2);
    }
    n2.push(o2);
  }
  for (i2 = 0; i2 < t2; i2++) if (o2 = n2[i2], i2 == t2 - 1) {
    if (o2 >= ys(256, 5 - t2)) return null;
  } else if (o2 > 255) return null;
  for (s2 = n2.pop(), i2 = 0; i2 < n2.length; i2++) s2 += n2[i2] * ys(256, 3 - i2);
  return s2;
};
var Ns = function(e2) {
  var t2, n2, i2, r2, a2, o2, s2, l2 = [0, 0, 0, 0, 0, 0, 0, 0], c2 = 0, u2 = null, h2 = 0, d2 = function() {
    return e2.charAt(h2);
  };
  if (":" == d2()) {
    if (":" != e2.charAt(1)) return;
    h2 += 2, u2 = ++c2;
  }
  for (; d2(); ) {
    if (8 == c2) return;
    if (":" != d2()) {
      for (t2 = n2 = 0; n2 < 4 && As.test(d2()); ) t2 = 16 * t2 + parseInt(d2(), 16), h2++, n2++;
      if ("." == d2()) {
        if (0 == n2) return;
        if (h2 -= n2, c2 > 6) return;
        for (i2 = 0; d2(); ) {
          if (r2 = null, i2 > 0) {
            if (!("." == d2() && i2 < 4)) return;
            h2++;
          }
          if (!ks.test(d2())) return;
          for (; ks.test(d2()); ) {
            if (a2 = parseInt(d2(), 10), null === r2) r2 = a2;
            else {
              if (0 == r2) return;
              r2 = 10 * r2 + a2;
            }
            if (r2 > 255) return;
            h2++;
          }
          l2[c2] = 256 * l2[c2] + r2, 2 != ++i2 && 4 != i2 || c2++;
        }
        if (4 != i2) return;
        break;
      }
      if (":" == d2()) {
        if (h2++, !d2()) return;
      } else if (d2()) return;
      l2[c2++] = t2;
    } else {
      if (null !== u2) return;
      h2++, u2 = ++c2;
    }
  }
  if (null !== u2) for (o2 = c2 - u2, c2 = 7; 0 != c2 && o2 > 0; ) s2 = l2[c2], l2[c2--] = l2[u2 + o2 - 1], l2[u2 + --o2] = s2;
  else if (8 != c2) return;
  return l2;
};
var Ms = function(e2) {
  var t2, n2, i2, r2;
  if ("number" == typeof e2) {
    for (t2 = [], n2 = 0; n2 < 4; n2++) t2.unshift(e2 % 256), e2 = vs(e2 / 256);
    return t2.join(".");
  }
  if ("object" == typeof e2) {
    for (t2 = "", i2 = function(e3) {
      for (var t3 = null, n3 = 1, i3 = null, r3 = 0, a2 = 0; a2 < 8; a2++) 0 !== e3[a2] ? (r3 > n3 && (t3 = i3, n3 = r3), i3 = null, r3 = 0) : (null === i3 && (i3 = a2), ++r3);
      return r3 > n3 && (t3 = i3, n3 = r3), t3;
    }(e2), n2 = 0; n2 < 8; n2++) r2 && 0 === e2[n2] || (r2 && (r2 = false), i2 === n2 ? (t2 += n2 ? ":" : "::", r2 = true) : (t2 += e2[n2].toString(16), n2 < 7 && (t2 += ":")));
    return "[" + t2 + "]";
  }
  return e2;
};
var js = {};
var Rs = No({}, js, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 });
var _s = No({}, Rs, { "#": 1, "?": 1, "{": 1, "}": 1 });
var Ds = No({}, _s, { "/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1 });
var Fs = function(e2, t2) {
  var n2 = hs(e2, 0);
  return n2 > 32 && n2 < 127 && !I(t2, e2) ? e2 : encodeURIComponent(e2);
};
var qs = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 };
var Us = function(e2) {
  return I(qs, e2.scheme);
};
var Hs = function(e2) {
  return "" != e2.username || "" != e2.password;
};
var Bs = function(e2) {
  return !e2.host || e2.cannotBeABaseURL || "file" == e2.scheme;
};
var Vs = function(e2, t2) {
  var n2;
  return 2 == e2.length && bs.test(e2.charAt(0)) && (":" == (n2 = e2.charAt(1)) || !t2 && "|" == n2);
};
var zs = function(e2) {
  var t2;
  return e2.length > 1 && Vs(e2.slice(0, 2)) && (2 == e2.length || "/" === (t2 = e2.charAt(2)) || "\\" === t2 || "?" === t2 || "#" === t2);
};
var Ws = function(e2) {
  var t2 = e2.path, n2 = t2.length;
  !n2 || "file" == e2.scheme && 1 == n2 && Vs(t2[0], true) || t2.pop();
};
var $s = function(e2) {
  return "." === e2 || "%2e" === e2.toLowerCase();
};
var Ks = {};
var Ys = {};
var Gs = {};
var Xs = {};
var Qs = {};
var Js = {};
var Zs = {};
var el = {};
var tl = {};
var nl = {};
var il = {};
var rl = {};
var al = {};
var ol = {};
var sl = {};
var ll = {};
var cl = {};
var ul = {};
var hl = {};
var dl = {};
var fl = {};
var pl = function(e2, t2, n2, i2) {
  var r2, a2, o2, s2, l2, c2 = n2 || Ks, u2 = 0, h2 = "", d2 = false, f2 = false, p2 = false;
  for (n2 || (e2.scheme = "", e2.username = "", e2.password = "", e2.host = null, e2.port = null, e2.path = [], e2.query = null, e2.fragment = null, e2.cannotBeABaseURL = false, t2 = t2.replace(Ps, "")), t2 = t2.replace(Os, ""), r2 = ri(t2); u2 <= r2.length; ) {
    switch (a2 = r2[u2], c2) {
      case Ks:
        if (!a2 || !bs.test(a2)) {
          if (n2) return "Invalid scheme";
          c2 = Gs;
          continue;
        }
        h2 += a2.toLowerCase(), c2 = Ys;
        break;
      case Ys:
        if (a2 && (ws.test(a2) || "+" == a2 || "-" == a2 || "." == a2)) h2 += a2.toLowerCase();
        else {
          if (":" != a2) {
            if (n2) return "Invalid scheme";
            h2 = "", c2 = Gs, u2 = 0;
            continue;
          }
          if (n2 && (Us(e2) != I(qs, h2) || "file" == h2 && (Hs(e2) || null !== e2.port) || "file" == e2.scheme && !e2.host)) return;
          if (e2.scheme = h2, n2) return void (Us(e2) && qs[e2.scheme] == e2.port && (e2.port = null));
          h2 = "", "file" == e2.scheme ? c2 = ol : Us(e2) && i2 && i2.scheme == e2.scheme ? c2 = Xs : Us(e2) ? c2 = el : "/" == r2[u2 + 1] ? (c2 = Qs, u2++) : (e2.cannotBeABaseURL = true, e2.path.push(""), c2 = hl);
        }
        break;
      case Gs:
        if (!i2 || i2.cannotBeABaseURL && "#" != a2) return "Invalid scheme";
        if (i2.cannotBeABaseURL && "#" == a2) {
          e2.scheme = i2.scheme, e2.path = i2.path.slice(), e2.query = i2.query, e2.fragment = "", e2.cannotBeABaseURL = true, c2 = fl;
          break;
        }
        c2 = "file" == i2.scheme ? ol : Js;
        continue;
      case Xs:
        if ("/" != a2 || "/" != r2[u2 + 1]) {
          c2 = Js;
          continue;
        }
        c2 = tl, u2++;
        break;
      case Qs:
        if ("/" == a2) {
          c2 = nl;
          break;
        }
        c2 = ul;
        continue;
      case Js:
        if (e2.scheme = i2.scheme, a2 == cs) e2.username = i2.username, e2.password = i2.password, e2.host = i2.host, e2.port = i2.port, e2.path = i2.path.slice(), e2.query = i2.query;
        else if ("/" == a2 || "\\" == a2 && Us(e2)) c2 = Zs;
        else if ("?" == a2) e2.username = i2.username, e2.password = i2.password, e2.host = i2.host, e2.port = i2.port, e2.path = i2.path.slice(), e2.query = "", c2 = dl;
        else {
          if ("#" != a2) {
            e2.username = i2.username, e2.password = i2.password, e2.host = i2.host, e2.port = i2.port, e2.path = i2.path.slice(), e2.path.pop(), c2 = ul;
            continue;
          }
          e2.username = i2.username, e2.password = i2.password, e2.host = i2.host, e2.port = i2.port, e2.path = i2.path.slice(), e2.query = i2.query, e2.fragment = "", c2 = fl;
        }
        break;
      case Zs:
        if (!Us(e2) || "/" != a2 && "\\" != a2) {
          if ("/" != a2) {
            e2.username = i2.username, e2.password = i2.password, e2.host = i2.host, e2.port = i2.port, c2 = ul;
            continue;
          }
          c2 = nl;
        } else c2 = tl;
        break;
      case el:
        if (c2 = tl, "/" != a2 || "/" != h2.charAt(u2 + 1)) continue;
        u2++;
        break;
      case tl:
        if ("/" != a2 && "\\" != a2) {
          c2 = nl;
          continue;
        }
        break;
      case nl:
        if ("@" == a2) {
          d2 && (h2 = "%40" + h2), d2 = true, o2 = ri(h2);
          for (var m2 = 0; m2 < o2.length; m2++) {
            var g2 = o2[m2];
            if (":" != g2 || p2) {
              var v2 = Fs(g2, Ds);
              p2 ? e2.password += v2 : e2.username += v2;
            } else p2 = true;
          }
          h2 = "";
        } else if (a2 == cs || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && Us(e2)) {
          if (d2 && "" == h2) return "Invalid authority";
          u2 -= ri(h2).length + 1, h2 = "", c2 = il;
        } else h2 += a2;
        break;
      case il:
      case rl:
        if (n2 && "file" == e2.scheme) {
          c2 = ll;
          continue;
        }
        if (":" != a2 || f2) {
          if (a2 == cs || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && Us(e2)) {
            if (Us(e2) && "" == h2) return "Invalid host";
            if (n2 && "" == h2 && (Hs(e2) || null !== e2.port)) return;
            if (s2 = Is(e2, h2)) return s2;
            if (h2 = "", c2 = cl, n2) return;
            continue;
          }
          "[" == a2 ? f2 = true : "]" == a2 && (f2 = false), h2 += a2;
        } else {
          if ("" == h2) return "Invalid host";
          if (s2 = Is(e2, h2)) return s2;
          if (h2 = "", c2 = al, n2 == rl) return;
        }
        break;
      case al:
        if (!ks.test(a2)) {
          if (a2 == cs || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && Us(e2) || n2) {
            if ("" != h2) {
              var y2 = parseInt(h2, 10);
              if (y2 > 65535) return "Invalid port";
              e2.port = Us(e2) && y2 === qs[e2.scheme] ? null : y2, h2 = "";
            }
            if (n2) return;
            c2 = cl;
            continue;
          }
          return "Invalid port";
        }
        h2 += a2;
        break;
      case ol:
        if (e2.scheme = "file", "/" == a2 || "\\" == a2) c2 = sl;
        else {
          if (!i2 || "file" != i2.scheme) {
            c2 = ul;
            continue;
          }
          if (a2 == cs) e2.host = i2.host, e2.path = i2.path.slice(), e2.query = i2.query;
          else if ("?" == a2) e2.host = i2.host, e2.path = i2.path.slice(), e2.query = "", c2 = dl;
          else {
            if ("#" != a2) {
              zs(r2.slice(u2).join("")) || (e2.host = i2.host, e2.path = i2.path.slice(), Ws(e2)), c2 = ul;
              continue;
            }
            e2.host = i2.host, e2.path = i2.path.slice(), e2.query = i2.query, e2.fragment = "", c2 = fl;
          }
        }
        break;
      case sl:
        if ("/" == a2 || "\\" == a2) {
          c2 = ll;
          break;
        }
        i2 && "file" == i2.scheme && !zs(r2.slice(u2).join("")) && (Vs(i2.path[0], true) ? e2.path.push(i2.path[0]) : e2.host = i2.host), c2 = ul;
        continue;
      case ll:
        if (a2 == cs || "/" == a2 || "\\" == a2 || "?" == a2 || "#" == a2) {
          if (!n2 && Vs(h2)) c2 = ul;
          else if ("" == h2) {
            if (e2.host = "", n2) return;
            c2 = cl;
          } else {
            if (s2 = Is(e2, h2)) return s2;
            if ("localhost" == e2.host && (e2.host = ""), n2) return;
            h2 = "", c2 = cl;
          }
          continue;
        }
        h2 += a2;
        break;
      case cl:
        if (Us(e2)) {
          if (c2 = ul, "/" != a2 && "\\" != a2) continue;
        } else if (n2 || "?" != a2) if (n2 || "#" != a2) {
          if (a2 != cs && (c2 = ul, "/" != a2)) continue;
        } else e2.fragment = "", c2 = fl;
        else e2.query = "", c2 = dl;
        break;
      case ul:
        if (a2 == cs || "/" == a2 || "\\" == a2 && Us(e2) || !n2 && ("?" == a2 || "#" == a2)) {
          if (".." === (l2 = (l2 = h2).toLowerCase()) || "%2e." === l2 || ".%2e" === l2 || "%2e%2e" === l2 ? (Ws(e2), "/" == a2 || "\\" == a2 && Us(e2) || e2.path.push("")) : $s(h2) ? "/" == a2 || "\\" == a2 && Us(e2) || e2.path.push("") : ("file" == e2.scheme && !e2.path.length && Vs(h2) && (e2.host && (e2.host = ""), h2 = h2.charAt(0) + ":"), e2.path.push(h2)), h2 = "", "file" == e2.scheme && (a2 == cs || "?" == a2 || "#" == a2)) for (; e2.path.length > 1 && "" === e2.path[0]; ) e2.path.shift();
          "?" == a2 ? (e2.query = "", c2 = dl) : "#" == a2 && (e2.fragment = "", c2 = fl);
        } else h2 += Fs(a2, _s);
        break;
      case hl:
        "?" == a2 ? (e2.query = "", c2 = dl) : "#" == a2 ? (e2.fragment = "", c2 = fl) : a2 != cs && (e2.path[0] += Fs(a2, js));
        break;
      case dl:
        n2 || "#" != a2 ? a2 != cs && ("'" == a2 && Us(e2) ? e2.query += "%27" : e2.query += "#" == a2 ? "%23" : Fs(a2, js)) : (e2.fragment = "", c2 = fl);
        break;
      case fl:
        a2 != cs && (e2.fragment += Fs(a2, Rs));
    }
    u2++;
  }
};
var ml = function(e2) {
  var n2, i2, r2 = oo(this, ml, "URL"), a2 = arguments.length > 1 ? arguments[1] : void 0, o2 = String(e2), s2 = ms(r2, { type: "URL" });
  if (void 0 !== a2) {
    if (a2 instanceof ml) n2 = gs(a2);
    else if (i2 = pl(n2 = {}, String(a2))) throw TypeError(i2);
  }
  if (i2 = pl(s2, o2, null, n2)) throw TypeError(i2);
  var l2 = s2.searchParams = new fs(), c2 = ps(l2);
  c2.updateSearchParams(s2.query), c2.updateURL = function() {
    s2.query = String(l2) || null;
  }, t || (r2.href = vl.call(r2), r2.origin = yl.call(r2), r2.protocol = bl.call(r2), r2.username = wl.call(r2), r2.password = kl.call(r2), r2.host = Tl.call(r2), r2.hostname = Sl.call(r2), r2.port = El.call(r2), r2.pathname = Al.call(r2), r2.search = xl.call(r2), r2.searchParams = Cl.call(r2), r2.hash = Pl.call(r2));
};
var gl = ml.prototype;
var vl = function() {
  var e2 = gs(this), t2 = e2.scheme, n2 = e2.username, i2 = e2.password, r2 = e2.host, a2 = e2.port, o2 = e2.path, s2 = e2.query, l2 = e2.fragment, c2 = t2 + ":";
  return null !== r2 ? (c2 += "//", Hs(e2) && (c2 += n2 + (i2 ? ":" + i2 : "") + "@"), c2 += Ms(r2), null !== a2 && (c2 += ":" + a2)) : "file" == t2 && (c2 += "//"), c2 += e2.cannotBeABaseURL ? o2[0] : o2.length ? "/" + o2.join("/") : "", null !== s2 && (c2 += "?" + s2), null !== l2 && (c2 += "#" + l2), c2;
};
var yl = function() {
  var e2 = gs(this), t2 = e2.scheme, n2 = e2.port;
  if ("blob" == t2) try {
    return new URL(t2.path[0]).origin;
  } catch (e3) {
    return "null";
  }
  return "file" != t2 && Us(e2) ? t2 + "://" + Ms(e2.host) + (null !== n2 ? ":" + n2 : "") : "null";
};
var bl = function() {
  return gs(this).scheme + ":";
};
var wl = function() {
  return gs(this).username;
};
var kl = function() {
  return gs(this).password;
};
var Tl = function() {
  var e2 = gs(this), t2 = e2.host, n2 = e2.port;
  return null === t2 ? "" : null === n2 ? Ms(t2) : Ms(t2) + ":" + n2;
};
var Sl = function() {
  var e2 = gs(this).host;
  return null === e2 ? "" : Ms(e2);
};
var El = function() {
  var e2 = gs(this).port;
  return null === e2 ? "" : String(e2);
};
var Al = function() {
  var e2 = gs(this), t2 = e2.path;
  return e2.cannotBeABaseURL ? t2[0] : t2.length ? "/" + t2.join("/") : "";
};
var xl = function() {
  var e2 = gs(this).query;
  return e2 ? "?" + e2 : "";
};
var Cl = function() {
  return gs(this).searchParams;
};
var Pl = function() {
  var e2 = gs(this).fragment;
  return e2 ? "#" + e2 : "";
};
var Ol = function(e2, t2) {
  return { get: e2, set: t2, configurable: true, enumerable: true };
};
if (t && Ue(gl, { href: Ol(vl, function(e2) {
  var t2 = gs(this), n2 = String(e2), i2 = pl(t2, n2);
  if (i2) throw TypeError(i2);
  ps(t2.searchParams).updateSearchParams(t2.query);
}), origin: Ol(yl), protocol: Ol(bl, function(e2) {
  var t2 = gs(this);
  pl(t2, String(e2) + ":", Ks);
}), username: Ol(wl, function(e2) {
  var t2 = gs(this), n2 = ri(String(e2));
  if (!Bs(t2)) {
    t2.username = "";
    for (var i2 = 0; i2 < n2.length; i2++) t2.username += Fs(n2[i2], Ds);
  }
}), password: Ol(kl, function(e2) {
  var t2 = gs(this), n2 = ri(String(e2));
  if (!Bs(t2)) {
    t2.password = "";
    for (var i2 = 0; i2 < n2.length; i2++) t2.password += Fs(n2[i2], Ds);
  }
}), host: Ol(Tl, function(e2) {
  var t2 = gs(this);
  t2.cannotBeABaseURL || pl(t2, String(e2), il);
}), hostname: Ol(Sl, function(e2) {
  var t2 = gs(this);
  t2.cannotBeABaseURL || pl(t2, String(e2), rl);
}), port: Ol(El, function(e2) {
  var t2 = gs(this);
  Bs(t2) || ("" == (e2 = String(e2)) ? t2.port = null : pl(t2, e2, al));
}), pathname: Ol(Al, function(e2) {
  var t2 = gs(this);
  t2.cannotBeABaseURL || (t2.path = [], pl(t2, e2 + "", cl));
}), search: Ol(xl, function(e2) {
  var t2 = gs(this);
  "" == (e2 = String(e2)) ? t2.query = null : ("?" == e2.charAt(0) && (e2 = e2.slice(1)), t2.query = "", pl(t2, e2, dl)), ps(t2.searchParams).updateSearchParams(t2.query);
}), searchParams: Ol(Cl), hash: Ol(Pl, function(e2) {
  var t2 = gs(this);
  "" != (e2 = String(e2)) ? ("#" == e2.charAt(0) && (e2 = e2.slice(1)), t2.fragment = "", pl(t2, e2, fl)) : t2.fragment = null;
}) }), re(gl, "toJSON", function() {
  return vl.call(this);
}, { enumerable: true }), re(gl, "toString", function() {
  return vl.call(this);
}, { enumerable: true }), ds) {
  Il = ds.createObjectURL, Ll = ds.revokeObjectURL;
  Il && re(ml, "createObjectURL", function(e2) {
    return Il.apply(ds, arguments);
  }), Ll && re(ml, "revokeObjectURL", function(e2) {
    return Ll.apply(ds, arguments);
  });
}
var Il;
var Ll;
function Nl(e2, t2) {
  if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
}
function Ml(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var i2 = t2[n2];
    i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
  }
}
function jl(e2, t2, n2) {
  return t2 && Ml(e2.prototype, t2), n2 && Ml(e2, n2), e2;
}
function Rl(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function _l(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    t2 && (i2 = i2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, i2);
  }
  return n2;
}
function Dl(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? _l(Object(n2), true).forEach(function(t3) {
      Rl(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : _l(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Fl(e2, t2) {
  if (null == e2) return {};
  var n2, i2, r2 = function(e3, t3) {
    if (null == e3) return {};
    var n3, i3, r3 = {}, a3 = Object.keys(e3);
    for (i3 = 0; i3 < a3.length; i3++) n3 = a3[i3], t3.indexOf(n3) >= 0 || (r3[n3] = e3[n3]);
    return r3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var a2 = Object.getOwnPropertySymbols(e2);
    for (i2 = 0; i2 < a2.length; i2++) n2 = a2[i2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (r2[n2] = e2[n2]);
  }
  return r2;
}
function ql(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3)) return e3;
  }(e2) || function(e3, t3) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e3)) {
      var n2 = [], i2 = true, r2 = false, a2 = void 0;
      try {
        for (var o2, s2 = e3[Symbol.iterator](); !(i2 = (o2 = s2.next()).done) && (n2.push(o2.value), !t3 || n2.length !== t3); i2 = true) ;
      } catch (e4) {
        r2 = true, a2 = e4;
      } finally {
        try {
          i2 || null == s2.return || s2.return();
        } finally {
          if (r2) throw a2;
        }
      }
      return n2;
    }
  }(e2, t2) || Hl(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Ul(e2) {
  return function(e3) {
    if (Array.isArray(e3)) return Bl(e3);
  }(e2) || function(e3) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e3)) return Array.from(e3);
  }(e2) || Hl(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Hl(e2, t2) {
  if (e2) {
    if ("string" == typeof e2) return Bl(e2, t2);
    var n2 = Object.prototype.toString.call(e2).slice(8, -1);
    return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Bl(e2, t2) : void 0;
  }
}
function Bl(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, i2 = new Array(t2); n2 < t2; n2++) i2[n2] = e2[n2];
  return i2;
}
function Vl(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var i2 = t2[n2];
    i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
  }
}
function zl(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Wl(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    t2 && (i2 = i2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, i2);
  }
  return n2;
}
function $l(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Wl(Object(n2), true).forEach(function(t3) {
      zl(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Wl(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
ot(ml, "URL"), je({ global: true, forced: !Oo, sham: !t }, { URL: ml });
var Kl = { addCSS: true, thumbWidth: 15, watch: true };
function Yl(e2, t2) {
  return (function() {
    return Array.from(document.querySelectorAll(t2)).includes(this);
  }).call(e2, t2);
}
var Gl = function(e2) {
  return null != e2 ? e2.constructor : null;
};
var Xl = function(e2, t2) {
  return !!(e2 && t2 && e2 instanceof t2);
};
var Ql = function(e2) {
  return null == e2;
};
var Jl = function(e2) {
  return Gl(e2) === Object;
};
var Zl = function(e2) {
  return Gl(e2) === String;
};
var ec = function(e2) {
  return Array.isArray(e2);
};
var tc = function(e2) {
  return Xl(e2, NodeList);
};
var nc = Zl;
var ic = ec;
var rc = tc;
var ac = function(e2) {
  return Xl(e2, Element);
};
var oc = function(e2) {
  return Xl(e2, Event);
};
var sc = function(e2) {
  return Ql(e2) || (Zl(e2) || ec(e2) || tc(e2)) && !e2.length || Jl(e2) && !Object.keys(e2).length;
};
function lc(e2, t2) {
  if (1 > t2) {
    var n2 = function(e3) {
      var t3 = "".concat(e3).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
      return t3 ? Math.max(0, (t3[1] ? t3[1].length : 0) - (t3[2] ? +t3[2] : 0)) : 0;
    }(t2);
    return parseFloat(e2.toFixed(n2));
  }
  return Math.round(e2 / t2) * t2;
}
var cc;
var uc;
var hc;
var dc = function() {
  function e2(t2, n2) {
    (function(e3, t3) {
      if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
    })(this, e2), ac(t2) ? this.element = t2 : nc(t2) && (this.element = document.querySelector(t2)), ac(this.element) && sc(this.element.rangeTouch) && (this.config = $l({}, Kl, {}, n2), this.init());
  }
  return function(e3, t2, n2) {
    t2 && Vl(e3.prototype, t2), n2 && Vl(e3, n2);
  }(e2, [{ key: "init", value: function() {
    e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
  } }, { key: "destroy", value: function() {
    e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
  } }, { key: "listeners", value: function(e3) {
    var t2 = this, n2 = e3 ? "addEventListener" : "removeEventListener";
    ["touchstart", "touchmove", "touchend"].forEach(function(e4) {
      t2.element[n2](e4, function(e5) {
        return t2.set(e5);
      }, false);
    });
  } }, { key: "get", value: function(t2) {
    if (!e2.enabled || !oc(t2)) return null;
    var n2, i2 = t2.target, r2 = t2.changedTouches[0], a2 = parseFloat(i2.getAttribute("min")) || 0, o2 = parseFloat(i2.getAttribute("max")) || 100, s2 = parseFloat(i2.getAttribute("step")) || 1, l2 = i2.getBoundingClientRect(), c2 = 100 / l2.width * (this.config.thumbWidth / 2) / 100;
    return 0 > (n2 = 100 / l2.width * (r2.clientX - l2.left)) ? n2 = 0 : 100 < n2 && (n2 = 100), 50 > n2 ? n2 -= (100 - 2 * n2) * c2 : 50 < n2 && (n2 += 2 * (n2 - 50) * c2), a2 + lc(n2 / 100 * (o2 - a2), s2);
  } }, { key: "set", value: function(t2) {
    e2.enabled && oc(t2) && !t2.target.disabled && (t2.preventDefault(), t2.target.value = this.get(t2), function(e3, t3) {
      if (e3 && t3) {
        var n2 = new Event(t3, { bubbles: true });
        e3.dispatchEvent(n2);
      }
    }(t2.target, "touchend" === t2.type ? "change" : "input"));
  } }], [{ key: "setup", value: function(t2) {
    var n2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i2 = null;
    if (sc(t2) || nc(t2) ? i2 = Array.from(document.querySelectorAll(nc(t2) ? t2 : 'input[type="range"]')) : ac(t2) ? i2 = [t2] : rc(t2) ? i2 = Array.from(t2) : ic(t2) && (i2 = t2.filter(ac)), sc(i2)) return null;
    var r2 = $l({}, Kl, {}, n2);
    if (nc(t2) && r2.watch) {
      var a2 = new MutationObserver(function(n3) {
        Array.from(n3).forEach(function(n4) {
          Array.from(n4.addedNodes).forEach(function(n5) {
            ac(n5) && Yl(n5, t2) && new e2(n5, r2);
          });
        });
      });
      a2.observe(document.body, { childList: true, subtree: true });
    }
    return i2.map(function(t3) {
      return new e2(t3, n2);
    });
  } }, { key: "enabled", get: function() {
    return "ontouchstart" in document.documentElement;
  } }]), e2;
}();
var fc = function(e2) {
  return null != e2 ? e2.constructor : null;
};
var pc = function(e2, t2) {
  return Boolean(e2 && t2 && e2 instanceof t2);
};
var mc = function(e2) {
  return null == e2;
};
var gc = function(e2) {
  return fc(e2) === Object;
};
var vc = function(e2) {
  return fc(e2) === String;
};
var yc = function(e2) {
  return fc(e2) === Function;
};
var bc = function(e2) {
  return Array.isArray(e2);
};
var wc = function(e2) {
  return pc(e2, NodeList);
};
var kc = function(e2) {
  return mc(e2) || (vc(e2) || bc(e2) || wc(e2)) && !e2.length || gc(e2) && !Object.keys(e2).length;
};
var Tc = mc;
var Sc = gc;
var Ec = function(e2) {
  return fc(e2) === Number && !Number.isNaN(e2);
};
var Ac = vc;
var xc = function(e2) {
  return fc(e2) === Boolean;
};
var Cc = yc;
var Pc = bc;
var Oc = wc;
var Ic = function(e2) {
  return pc(e2, Element);
};
var Lc = function(e2) {
  return pc(e2, Event);
};
var Nc = function(e2) {
  return pc(e2, KeyboardEvent);
};
var Mc = function(e2) {
  return pc(e2, TextTrack) || !mc(e2) && vc(e2.kind);
};
var jc = function(e2) {
  return pc(e2, Promise) && yc(e2.then);
};
var Rc = function(e2) {
  if (pc(e2, window.URL)) return true;
  if (!vc(e2)) return false;
  var t2 = e2;
  e2.startsWith("http://") && e2.startsWith("https://") || (t2 = "http://".concat(e2));
  try {
    return !kc(new URL(t2).hostname);
  } catch (e3) {
    return false;
  }
};
var _c = kc;
var Dc = (cc = document.createElement("span"), uc = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, hc = Object.keys(uc).find(function(e2) {
  return void 0 !== cc.style[e2];
}), !!Ac(hc) && uc[hc]);
function Fc(e2, t2) {
  setTimeout(function() {
    try {
      e2.hidden = true, e2.offsetHeight, e2.hidden = false;
    } catch (e3) {
    }
  }, t2);
}
var qc = { isIE: (
  /* @cc_on!@ */
  !!document.documentMode
), isEdge: window.navigator.userAgent.includes("Edge"), isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent), isIPhone: /(iPhone|iPod)/gi.test(navigator.platform), isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform) };
function Uc(e2, t2) {
  return t2.split(".").reduce(function(e3, t3) {
    return e3 && e3[t3];
  }, e2);
}
function Hc() {
  for (var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++) n2[i2 - 1] = arguments[i2];
  if (!n2.length) return e2;
  var r2 = n2.shift();
  return Sc(r2) ? (Object.keys(r2).forEach(function(t3) {
    Sc(r2[t3]) ? (Object.keys(e2).includes(t3) || Object.assign(e2, Rl({}, t3, {})), Hc(e2[t3], r2[t3])) : Object.assign(e2, Rl({}, t3, r2[t3]));
  }), Hc.apply(void 0, [e2].concat(n2))) : e2;
}
function Bc(e2, t2) {
  var n2 = e2.length ? e2 : [e2];
  Array.from(n2).reverse().forEach(function(e3, n3) {
    var i2 = n3 > 0 ? t2.cloneNode(true) : t2, r2 = e3.parentNode, a2 = e3.nextSibling;
    i2.appendChild(e3), a2 ? r2.insertBefore(i2, a2) : r2.appendChild(i2);
  });
}
function Vc(e2, t2) {
  Ic(e2) && !_c(t2) && Object.entries(t2).filter(function(e3) {
    var t3 = ql(e3, 2)[1];
    return !Tc(t3);
  }).forEach(function(t3) {
    var n2 = ql(t3, 2), i2 = n2[0], r2 = n2[1];
    return e2.setAttribute(i2, r2);
  });
}
function zc(e2, t2, n2) {
  var i2 = document.createElement(e2);
  return Sc(t2) && Vc(i2, t2), Ac(n2) && (i2.innerText = n2), i2;
}
function Wc(e2, t2, n2, i2) {
  Ic(t2) && t2.appendChild(zc(e2, n2, i2));
}
function $c(e2) {
  Oc(e2) || Pc(e2) ? Array.from(e2).forEach($c) : Ic(e2) && Ic(e2.parentNode) && e2.parentNode.removeChild(e2);
}
function Kc(e2) {
  if (Ic(e2)) for (var t2 = e2.childNodes.length; t2 > 0; ) e2.removeChild(e2.lastChild), t2 -= 1;
}
function Yc(e2, t2) {
  return Ic(t2) && Ic(t2.parentNode) && Ic(e2) ? (t2.parentNode.replaceChild(e2, t2), e2) : null;
}
function Gc(e2, t2) {
  if (!Ac(e2) || _c(e2)) return {};
  var n2 = {}, i2 = Hc({}, t2);
  return e2.split(",").forEach(function(e3) {
    var t3 = e3.trim(), r2 = t3.replace(".", ""), a2 = t3.replace(/[[\]]/g, "").split("="), o2 = ql(a2, 1)[0], s2 = a2.length > 1 ? a2[1].replace(/["']/g, "") : "";
    switch (t3.charAt(0)) {
      case ".":
        Ac(i2.class) ? n2.class = "".concat(i2.class, " ").concat(r2) : n2.class = r2;
        break;
      case "#":
        n2.id = t3.replace("#", "");
        break;
      case "[":
        n2[o2] = s2;
    }
  }), Hc(i2, n2);
}
function Xc(e2, t2) {
  if (Ic(e2)) {
    var n2 = t2;
    xc(n2) || (n2 = !e2.hidden), e2.hidden = n2;
  }
}
function Qc(e2, t2, n2) {
  if (Oc(e2)) return Array.from(e2).map(function(e3) {
    return Qc(e3, t2, n2);
  });
  if (Ic(e2)) {
    var i2 = "toggle";
    return void 0 !== n2 && (i2 = n2 ? "add" : "remove"), e2.classList[i2](t2), e2.classList.contains(t2);
  }
  return false;
}
function Jc(e2, t2) {
  return Ic(e2) && e2.classList.contains(t2);
}
function Zc(e2, t2) {
  var n2 = Element.prototype;
  return (n2.matches || n2.webkitMatchesSelector || n2.mozMatchesSelector || n2.msMatchesSelector || function() {
    return Array.from(document.querySelectorAll(t2)).includes(this);
  }).call(e2, t2);
}
function eu(e2) {
  return this.elements.container.querySelectorAll(e2);
}
function tu(e2) {
  return this.elements.container.querySelector(e2);
}
function nu() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  Ic(e2) && (e2.focus({ preventScroll: true }), t2 && Qc(e2, this.config.classNames.tabFocus));
}
var iu = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" };
var ru = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check: function(e2, t2, n2) {
  var i2 = qc.isIPhone && n2 && ru.playsinline, r2 = ru[e2] || "html5" !== t2;
  return { api: r2, ui: r2 && ru.rangeInput && ("video" !== e2 || !qc.isIPhone || i2) };
}, pip: !(qc.isIPhone || !Cc(zc("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || zc("video").disablePictureInPicture)), airplay: Cc(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime: function(e2) {
  if (_c(e2)) return false;
  var t2 = ql(e2.split("/"), 1)[0], n2 = e2;
  if (!this.isHTML5 || t2 !== this.type) return false;
  Object.keys(iu).includes(n2) && (n2 += '; codecs="'.concat(iu[e2], '"'));
  try {
    return Boolean(n2 && this.media.canPlayType(n2).replace(/no/, ""));
  } catch (e3) {
    return false;
  }
}, textTracks: "textTracks" in document.createElement("video"), rangeInput: function() {
  var e2 = document.createElement("input");
  return e2.type = "range", "range" === e2.type;
}(), touch: "ontouchstart" in document.documentElement, transitions: false !== Dc, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches };
var au = function() {
  var e2 = false;
  try {
    var t2 = Object.defineProperty({}, "passive", { get: function() {
      return e2 = true, null;
    } });
    window.addEventListener("test", null, t2), window.removeEventListener("test", null, t2);
  } catch (e3) {
  }
  return e2;
}();
function ou(e2, t2, n2) {
  var i2 = this, r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], o2 = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
  if (e2 && "addEventListener" in e2 && !_c(t2) && Cc(n2)) {
    var s2 = t2.split(" "), l2 = o2;
    au && (l2 = { passive: a2, capture: o2 }), s2.forEach(function(t3) {
      i2 && i2.eventListeners && r2 && i2.eventListeners.push({ element: e2, type: t3, callback: n2, options: l2 }), e2[r2 ? "addEventListener" : "removeEventListener"](t3, n2, l2);
    });
  }
}
function su(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n2 = arguments.length > 2 ? arguments[2] : void 0, i2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  ou.call(this, e2, t2, n2, true, i2, r2);
}
function lu(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n2 = arguments.length > 2 ? arguments[2] : void 0, i2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  ou.call(this, e2, t2, n2, false, i2, r2);
}
function cu(e2) {
  var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i2 = arguments.length > 2 ? arguments[2] : void 0, r2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], a2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o2 = function o3() {
    lu(e2, n2, o3, r2, a2);
    for (var s2 = arguments.length, l2 = new Array(s2), c2 = 0; c2 < s2; c2++) l2[c2] = arguments[c2];
    i2.apply(t2, l2);
  };
  ou.call(this, e2, n2, o2, true, r2, a2);
}
function uu(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (Ic(e2) && !_c(t2)) {
    var r2 = new CustomEvent(t2, { bubbles: n2, detail: Dl(Dl({}, i2), {}, { plyr: this }) });
    e2.dispatchEvent(r2);
  }
}
function hu() {
  this && this.eventListeners && (this.eventListeners.forEach(function(e2) {
    var t2 = e2.element, n2 = e2.type, i2 = e2.callback, r2 = e2.options;
    t2.removeEventListener(n2, i2, r2);
  }), this.eventListeners = []);
}
function du() {
  var e2 = this;
  return new Promise(function(t2) {
    return e2.ready ? setTimeout(t2, 0) : su.call(e2, e2.elements.container, "ready", t2);
  }).then(function() {
  });
}
function fu(e2) {
  jc(e2) && e2.then(null, function() {
  });
}
function pu(e2) {
  return !!(Pc(e2) || Ac(e2) && e2.includes(":")) && (Pc(e2) ? e2 : e2.split(":")).map(Number).every(Ec);
}
function mu(e2) {
  if (!Pc(e2) || !e2.every(Ec)) return null;
  var t2 = ql(e2, 2), n2 = t2[0], i2 = t2[1], r2 = function e3(t3, n3) {
    return 0 === n3 ? t3 : e3(n3, t3 % n3);
  }(n2, i2);
  return [n2 / r2, i2 / r2];
}
function gu(e2) {
  var t2 = function(e3) {
    return pu(e3) ? e3.split(":").map(Number) : null;
  }, n2 = t2(e2);
  if (null === n2 && (n2 = t2(this.config.ratio)), null === n2 && !_c(this.embed) && Pc(this.embed.ratio) && (n2 = this.embed.ratio), null === n2 && this.isHTML5) {
    var i2 = this.media;
    n2 = mu([i2.videoWidth, i2.videoHeight]);
  }
  return n2;
}
function vu(e2) {
  if (!this.isVideo) return {};
  var t2 = this.elements.wrapper, n2 = gu.call(this, e2), i2 = ql(Pc(n2) ? n2 : [0, 0], 2), r2 = 100 / i2[0] * i2[1];
  if (t2.style.paddingBottom = "".concat(r2, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
    var a2 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), o2 = (a2 - r2) / (a2 / 50);
    this.fullscreen.active ? t2.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(o2, "%)");
  } else this.isHTML5 && t2.classList.toggle(this.config.classNames.videoFixedRatio, null !== n2);
  return { padding: r2, ratio: n2 };
}
var yu = { getSources: function() {
  var e2 = this;
  return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function(t2) {
    var n2 = t2.getAttribute("type");
    return !!_c(n2) || ru.mime.call(e2, n2);
  }) : [];
}, getQualityOptions: function() {
  return this.config.quality.forced ? this.config.quality.options : yu.getSources.call(this).map(function(e2) {
    return Number(e2.getAttribute("size"));
  }).filter(Boolean);
}, setup: function() {
  if (this.isHTML5) {
    var e2 = this;
    e2.options.speed = e2.config.speed.options, _c(this.config.ratio) || vu.call(e2), Object.defineProperty(e2.media, "quality", { get: function() {
      var t2 = yu.getSources.call(e2).find(function(t3) {
        return t3.getAttribute("src") === e2.source;
      });
      return t2 && Number(t2.getAttribute("size"));
    }, set: function(t2) {
      if (e2.quality !== t2) {
        if (e2.config.quality.forced && Cc(e2.config.quality.onChange)) e2.config.quality.onChange(t2);
        else {
          var n2 = yu.getSources.call(e2).find(function(e3) {
            return Number(e3.getAttribute("size")) === t2;
          });
          if (!n2) return;
          var i2 = e2.media, r2 = i2.currentTime, a2 = i2.paused, o2 = i2.preload, s2 = i2.readyState, l2 = i2.playbackRate;
          e2.media.src = n2.getAttribute("src"), ("none" !== o2 || s2) && (e2.once("loadedmetadata", function() {
            e2.speed = l2, e2.currentTime = r2, a2 || fu(e2.play());
          }), e2.media.load());
        }
        uu.call(e2, e2.media, "qualitychange", false, { quality: t2 });
      }
    } });
  }
}, cancelRequests: function() {
  this.isHTML5 && ($c(yu.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
} };
function bu(e2) {
  return Pc(e2) ? e2.filter(function(t2, n2) {
    return e2.indexOf(t2) === n2;
  }) : e2;
}
function wu(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++) n2[i2 - 1] = arguments[i2];
  return _c(e2) ? e2 : e2.toString().replace(/{(\d+)}/g, function(e3, t3) {
    return n2[t3].toString();
  });
}
var ku = function() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
  return e2.replace(new RegExp(t2.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n2.toString());
};
var Tu = function() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  return e2.toString().replace(/\w\S*/g, function(e3) {
    return e3.charAt(0).toUpperCase() + e3.substr(1).toLowerCase();
  });
};
function Su() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t2 = e2.toString();
  return t2 = ku(t2, "-", " "), t2 = ku(t2, "_", " "), t2 = Tu(t2), ku(t2, " ", "");
}
function Eu(e2) {
  var t2 = document.createElement("div");
  return t2.appendChild(e2), t2.innerHTML;
}
var Au = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" };
var xu = function() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (_c(e2) || _c(t2)) return "";
  var n2 = Uc(t2.i18n, e2);
  if (_c(n2)) return Object.keys(Au).includes(e2) ? Au[e2] : "";
  var i2 = { "{seektime}": t2.seekTime, "{title}": t2.title };
  return Object.entries(i2).forEach(function(e3) {
    var t3 = ql(e3, 2), i3 = t3[0], r2 = t3[1];
    n2 = ku(n2, i3, r2);
  }), n2;
};
var Cu = function() {
  function e2(t2) {
    Nl(this, e2), this.enabled = t2.config.storage.enabled, this.key = t2.config.storage.key;
  }
  return jl(e2, [{ key: "get", value: function(t2) {
    if (!e2.supported || !this.enabled) return null;
    var n2 = window.localStorage.getItem(this.key);
    if (_c(n2)) return null;
    var i2 = JSON.parse(n2);
    return Ac(t2) && t2.length ? i2[t2] : i2;
  } }, { key: "set", value: function(t2) {
    if (e2.supported && this.enabled && Sc(t2)) {
      var n2 = this.get();
      _c(n2) && (n2 = {}), Hc(n2, t2), window.localStorage.setItem(this.key, JSON.stringify(n2));
    }
  } }], [{ key: "supported", get: function() {
    try {
      if (!("localStorage" in window)) return false;
      var e3 = "___test";
      return window.localStorage.setItem(e3, e3), window.localStorage.removeItem(e3), true;
    } catch (e4) {
      return false;
    }
  } }]), e2;
}();
function Pu(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
  return new Promise(function(n2, i2) {
    try {
      var r2 = new XMLHttpRequest();
      if (!("withCredentials" in r2)) return;
      r2.addEventListener("load", function() {
        if ("text" === t2) try {
          n2(JSON.parse(r2.responseText));
        } catch (e3) {
          n2(r2.responseText);
        }
        else n2(r2.response);
      }), r2.addEventListener("error", function() {
        throw new Error(r2.status);
      }), r2.open("GET", e2, true), r2.responseType = t2, r2.send();
    } catch (e3) {
      i2(e3);
    }
  });
}
function Ou(e2, t2) {
  if (Ac(e2)) {
    var n2 = "cache", i2 = Ac(t2), r2 = function() {
      return null !== document.getElementById(t2);
    }, a2 = function(e3, t3) {
      e3.innerHTML = t3, i2 && r2() || document.body.insertAdjacentElement("afterbegin", e3);
    };
    if (!i2 || !r2()) {
      var o2 = Cu.supported, s2 = document.createElement("div");
      if (s2.setAttribute("hidden", ""), i2 && s2.setAttribute("id", t2), o2) {
        var l2 = window.localStorage.getItem("".concat(n2, "-").concat(t2));
        if (null !== l2) {
          var c2 = JSON.parse(l2);
          a2(s2, c2.content);
        }
      }
      Pu(e2).then(function(e3) {
        _c(e3) || (o2 && window.localStorage.setItem("".concat(n2, "-").concat(t2), JSON.stringify({ content: e3 })), a2(s2, e3));
      }).catch(function() {
      });
    }
  }
}
var Iu = function(e2) {
  return Math.trunc(e2 / 60 / 60 % 60, 10);
};
var Lu = function(e2) {
  return Math.trunc(e2 / 60 % 60, 10);
};
var Nu = function(e2) {
  return Math.trunc(e2 % 60, 10);
};
function Mu() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!Ec(e2)) return Mu(void 0, t2, n2);
  var i2 = function(e3) {
    return "0".concat(e3).slice(-2);
  }, r2 = Iu(e2), a2 = Lu(e2), o2 = Nu(e2);
  return r2 = t2 || r2 > 0 ? "".concat(r2, ":") : "", "".concat(n2 && e2 > 0 ? "-" : "").concat(r2).concat(i2(a2), ":").concat(i2(o2));
}
var ju = { getIconUrl: function() {
  var e2 = new URL(this.config.iconUrl, window.location).host !== window.location.host || qc.isIE && !window.svg4everybody;
  return { url: this.config.iconUrl, cors: e2 };
}, findElements: function() {
  try {
    return this.elements.controls = tu.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: eu.call(this, this.config.selectors.buttons.play), pause: tu.call(this, this.config.selectors.buttons.pause), restart: tu.call(this, this.config.selectors.buttons.restart), rewind: tu.call(this, this.config.selectors.buttons.rewind), fastForward: tu.call(this, this.config.selectors.buttons.fastForward), mute: tu.call(this, this.config.selectors.buttons.mute), pip: tu.call(this, this.config.selectors.buttons.pip), airplay: tu.call(this, this.config.selectors.buttons.airplay), settings: tu.call(this, this.config.selectors.buttons.settings), captions: tu.call(this, this.config.selectors.buttons.captions), fullscreen: tu.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = tu.call(this, this.config.selectors.progress), this.elements.inputs = { seek: tu.call(this, this.config.selectors.inputs.seek), volume: tu.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: tu.call(this, this.config.selectors.display.buffer), currentTime: tu.call(this, this.config.selectors.display.currentTime), duration: tu.call(this, this.config.selectors.display.duration) }, Ic(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), true;
  } catch (e2) {
    return this.debug.warn("It looks like there is a problem with your custom controls HTML", e2), this.toggleNativeControls(true), false;
  }
}, createIcon: function(e2, t2) {
  var n2 = "http://www.w3.org/2000/svg", i2 = ju.getIconUrl.call(this), r2 = "".concat(i2.cors ? "" : i2.url, "#").concat(this.config.iconPrefix), a2 = document.createElementNS(n2, "svg");
  Vc(a2, Hc(t2, { "aria-hidden": "true", focusable: "false" }));
  var o2 = document.createElementNS(n2, "use"), s2 = "".concat(r2, "-").concat(e2);
  return "href" in o2 && o2.setAttributeNS("http://www.w3.org/1999/xlink", "href", s2), o2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s2), a2.appendChild(o2), a2;
}, createLabel: function(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = xu(e2, this.config), i2 = Dl(Dl({}, t2), {}, { class: [t2.class, this.config.classNames.hidden].filter(Boolean).join(" ") });
  return zc("span", i2, n2);
}, createBadge: function(e2) {
  if (_c(e2)) return null;
  var t2 = zc("span", { class: this.config.classNames.menu.value });
  return t2.appendChild(zc("span", { class: this.config.classNames.menu.badge }, e2)), t2;
}, createButton: function(e2, t2) {
  var n2 = this, i2 = Hc({}, t2), r2 = function() {
    var e3 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
    return (e3 = Su(e3)).charAt(0).toLowerCase() + e3.slice(1);
  }(e2), a2 = { element: "button", toggle: false, label: null, icon: null, labelPressed: null, iconPressed: null };
  switch (["element", "icon", "label"].forEach(function(e3) {
    Object.keys(i2).includes(e3) && (a2[e3] = i2[e3], delete i2[e3]);
  }), "button" !== a2.element || Object.keys(i2).includes("type") || (i2.type = "button"), Object.keys(i2).includes("class") ? i2.class.split(" ").some(function(e3) {
    return e3 === n2.config.classNames.control;
  }) || Hc(i2, { class: "".concat(i2.class, " ").concat(this.config.classNames.control) }) : i2.class = this.config.classNames.control, e2) {
    case "play":
      a2.toggle = true, a2.label = "play", a2.labelPressed = "pause", a2.icon = "play", a2.iconPressed = "pause";
      break;
    case "mute":
      a2.toggle = true, a2.label = "mute", a2.labelPressed = "unmute", a2.icon = "volume", a2.iconPressed = "muted";
      break;
    case "captions":
      a2.toggle = true, a2.label = "enableCaptions", a2.labelPressed = "disableCaptions", a2.icon = "captions-off", a2.iconPressed = "captions-on";
      break;
    case "fullscreen":
      a2.toggle = true, a2.label = "enterFullscreen", a2.labelPressed = "exitFullscreen", a2.icon = "enter-fullscreen", a2.iconPressed = "exit-fullscreen";
      break;
    case "play-large":
      i2.class += " ".concat(this.config.classNames.control, "--overlaid"), r2 = "play", a2.label = "play", a2.icon = "play";
      break;
    default:
      _c(a2.label) && (a2.label = r2), _c(a2.icon) && (a2.icon = e2);
  }
  var o2 = zc(a2.element);
  return a2.toggle ? (o2.appendChild(ju.createIcon.call(this, a2.iconPressed, { class: "icon--pressed" })), o2.appendChild(ju.createIcon.call(this, a2.icon, { class: "icon--not-pressed" })), o2.appendChild(ju.createLabel.call(this, a2.labelPressed, { class: "label--pressed" })), o2.appendChild(ju.createLabel.call(this, a2.label, { class: "label--not-pressed" }))) : (o2.appendChild(ju.createIcon.call(this, a2.icon)), o2.appendChild(ju.createLabel.call(this, a2.label))), Hc(i2, Gc(this.config.selectors.buttons[r2], i2)), Vc(o2, i2), "play" === r2 ? (Pc(this.elements.buttons[r2]) || (this.elements.buttons[r2] = []), this.elements.buttons[r2].push(o2)) : this.elements.buttons[r2] = o2, o2;
}, createRange: function(e2, t2) {
  var n2 = zc("input", Hc(Gc(this.config.selectors.inputs[e2]), { type: "range", min: 0, max: 100, step: 0.01, value: 0, autocomplete: "off", role: "slider", "aria-label": xu(e2, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t2));
  return this.elements.inputs[e2] = n2, ju.updateRangeFill.call(this, n2), dc.setup(n2), n2;
}, createProgress: function(e2, t2) {
  var n2 = zc("progress", Hc(Gc(this.config.selectors.display[e2]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": true }, t2));
  if ("volume" !== e2) {
    n2.appendChild(zc("span", null, "0"));
    var i2 = { played: "played", buffer: "buffered" }[e2], r2 = i2 ? xu(i2, this.config) : "";
    n2.innerText = "% ".concat(r2.toLowerCase());
  }
  return this.elements.display[e2] = n2, n2;
}, createTime: function(e2, t2) {
  var n2 = Gc(this.config.selectors.display[e2], t2), i2 = zc("div", Hc(n2, { class: "".concat(n2.class ? n2.class : "", " ").concat(this.config.classNames.display.time, " ").trim(), "aria-label": xu(e2, this.config) }), "00:00");
  return this.elements.display[e2] = i2, i2;
}, bindMenuItemShortcuts: function(e2, t2) {
  var n2 = this;
  su.call(this, e2, "keydown keyup", function(i2) {
    if ([32, 38, 39, 40].includes(i2.which) && (i2.preventDefault(), i2.stopPropagation(), "keydown" !== i2.type)) {
      var r2, a2 = Zc(e2, '[role="menuitemradio"]');
      !a2 && [32, 39].includes(i2.which) ? ju.showMenuPanel.call(n2, t2, true) : 32 !== i2.which && (40 === i2.which || a2 && 39 === i2.which ? (r2 = e2.nextElementSibling, Ic(r2) || (r2 = e2.parentNode.firstElementChild)) : (r2 = e2.previousElementSibling, Ic(r2) || (r2 = e2.parentNode.lastElementChild)), nu.call(n2, r2, true));
    }
  }, false), su.call(this, e2, "keyup", function(e3) {
    13 === e3.which && ju.focusFirstMenuItem.call(n2, null, true);
  });
}, createMenuItem: function(e2) {
  var t2 = this, n2 = e2.value, i2 = e2.list, r2 = e2.type, a2 = e2.title, o2 = e2.badge, s2 = void 0 === o2 ? null : o2, l2 = e2.checked, c2 = void 0 !== l2 && l2, u2 = Gc(this.config.selectors.inputs[r2]), h2 = zc("button", Hc(u2, { type: "button", role: "menuitemradio", class: "".concat(this.config.classNames.control, " ").concat(u2.class ? u2.class : "").trim(), "aria-checked": c2, value: n2 })), d2 = zc("span");
  d2.innerHTML = a2, Ic(s2) && d2.appendChild(s2), h2.appendChild(d2), Object.defineProperty(h2, "checked", { enumerable: true, get: function() {
    return "true" === h2.getAttribute("aria-checked");
  }, set: function(e3) {
    e3 && Array.from(h2.parentNode.children).filter(function(e4) {
      return Zc(e4, '[role="menuitemradio"]');
    }).forEach(function(e4) {
      return e4.setAttribute("aria-checked", "false");
    }), h2.setAttribute("aria-checked", e3 ? "true" : "false");
  } }), this.listeners.bind(h2, "click keyup", function(e3) {
    if (!Nc(e3) || 32 === e3.which) {
      switch (e3.preventDefault(), e3.stopPropagation(), h2.checked = true, r2) {
        case "language":
          t2.currentTrack = Number(n2);
          break;
        case "quality":
          t2.quality = n2;
          break;
        case "speed":
          t2.speed = parseFloat(n2);
      }
      ju.showMenuPanel.call(t2, "home", Nc(e3));
    }
  }, r2, false), ju.bindMenuItemShortcuts.call(this, h2, r2), i2.appendChild(h2);
}, formatTime: function() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!Ec(e2)) return e2;
  var n2 = Iu(this.duration) > 0;
  return Mu(e2, n2, t2);
}, updateTimeDisplay: function() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  Ic(e2) && Ec(t2) && (e2.innerText = ju.formatTime(t2, n2));
}, updateVolume: function() {
  this.supported.ui && (Ic(this.elements.inputs.volume) && ju.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), Ic(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
}, setRange: function(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  Ic(e2) && (e2.value = t2, ju.updateRangeFill.call(this, e2));
}, updateProgress: function(e2) {
  var t2 = this;
  if (this.supported.ui && Lc(e2)) {
    var n2 = 0;
    if (e2) switch (e2.type) {
      case "timeupdate":
      case "seeking":
      case "seeked":
        n2 = function(e3, t3) {
          return 0 === e3 || 0 === t3 || Number.isNaN(e3) || Number.isNaN(t3) ? 0 : (e3 / t3 * 100).toFixed(2);
        }(this.currentTime, this.duration), "timeupdate" === e2.type && ju.setRange.call(this, this.elements.inputs.seek, n2);
        break;
      case "playing":
      case "progress":
        !function(e3, n3) {
          var i2 = Ec(n3) ? n3 : 0, r2 = Ic(e3) ? e3 : t2.elements.display.buffer;
          if (Ic(r2)) {
            r2.value = i2;
            var a2 = r2.getElementsByTagName("span")[0];
            Ic(a2) && (a2.childNodes[0].nodeValue = i2);
          }
        }(this.elements.display.buffer, 100 * this.buffered);
    }
  }
}, updateRangeFill: function(e2) {
  var t2 = Lc(e2) ? e2.target : e2;
  if (Ic(t2) && "range" === t2.getAttribute("type")) {
    if (Zc(t2, this.config.selectors.inputs.seek)) {
      t2.setAttribute("aria-valuenow", this.currentTime);
      var n2 = ju.formatTime(this.currentTime), i2 = ju.formatTime(this.duration), r2 = xu("seekLabel", this.config);
      t2.setAttribute("aria-valuetext", r2.replace("{currentTime}", n2).replace("{duration}", i2));
    } else if (Zc(t2, this.config.selectors.inputs.volume)) {
      var a2 = 100 * t2.value;
      t2.setAttribute("aria-valuenow", a2), t2.setAttribute("aria-valuetext", "".concat(a2.toFixed(1), "%"));
    } else t2.setAttribute("aria-valuenow", t2.value);
    qc.isWebkit && t2.style.setProperty("--value", "".concat(t2.value / t2.max * 100, "%"));
  }
}, updateSeekTooltip: function(e2) {
  var t2 = this;
  if (this.config.tooltips.seek && Ic(this.elements.inputs.seek) && Ic(this.elements.display.seekTooltip) && 0 !== this.duration) {
    var n2 = "".concat(this.config.classNames.tooltip, "--visible"), i2 = function(e3) {
      return Qc(t2.elements.display.seekTooltip, n2, e3);
    };
    if (this.touch) i2(false);
    else {
      var r2 = 0, a2 = this.elements.progress.getBoundingClientRect();
      if (Lc(e2)) r2 = 100 / a2.width * (e2.pageX - a2.left);
      else {
        if (!Jc(this.elements.display.seekTooltip, n2)) return;
        r2 = parseFloat(this.elements.display.seekTooltip.style.left, 10);
      }
      r2 < 0 ? r2 = 0 : r2 > 100 && (r2 = 100), ju.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * r2), this.elements.display.seekTooltip.style.left = "".concat(r2, "%"), Lc(e2) && ["mouseenter", "mouseleave"].includes(e2.type) && i2("mouseenter" === e2.type);
    }
  }
}, timeUpdate: function(e2) {
  var t2 = !Ic(this.elements.display.duration) && this.config.invertTime;
  ju.updateTimeDisplay.call(this, this.elements.display.currentTime, t2 ? this.duration - this.currentTime : this.currentTime, t2), e2 && "timeupdate" === e2.type && this.media.seeking || ju.updateProgress.call(this, e2);
}, durationUpdate: function() {
  if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
    if (this.duration >= Math.pow(2, 32)) return Xc(this.elements.display.currentTime, true), void Xc(this.elements.progress, true);
    Ic(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
    var e2 = Ic(this.elements.display.duration);
    !e2 && this.config.displayDuration && this.paused && ju.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e2 && ju.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), ju.updateSeekTooltip.call(this);
  }
}, toggleMenuButton: function(e2, t2) {
  Xc(this.elements.settings.buttons[e2], !t2);
}, updateSetting: function(e2, t2, n2) {
  var i2 = this.elements.settings.panels[e2], r2 = null, a2 = t2;
  if ("captions" === e2) r2 = this.currentTrack;
  else {
    if (r2 = _c(n2) ? this[e2] : n2, _c(r2) && (r2 = this.config[e2].default), !_c(this.options[e2]) && !this.options[e2].includes(r2)) return void this.debug.warn("Unsupported value of '".concat(r2, "' for ").concat(e2));
    if (!this.config[e2].options.includes(r2)) return void this.debug.warn("Disabled value of '".concat(r2, "' for ").concat(e2));
  }
  if (Ic(a2) || (a2 = i2 && i2.querySelector('[role="menu"]')), Ic(a2)) {
    this.elements.settings.buttons[e2].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = ju.getLabel.call(this, e2, r2);
    var o2 = a2 && a2.querySelector('[value="'.concat(r2, '"]'));
    Ic(o2) && (o2.checked = true);
  }
}, getLabel: function(e2, t2) {
  switch (e2) {
    case "speed":
      return 1 === t2 ? xu("normal", this.config) : "".concat(t2, "&times;");
    case "quality":
      if (Ec(t2)) {
        var n2 = xu("qualityLabel.".concat(t2), this.config);
        return n2.length ? n2 : "".concat(t2, "p");
      }
      return Tu(t2);
    case "captions":
      return Du.getLabel.call(this);
    default:
      return null;
  }
}, setQualityMenu: function(e2) {
  var t2 = this;
  if (Ic(this.elements.settings.panels.quality)) {
    var n2 = "quality", i2 = this.elements.settings.panels.quality.querySelector('[role="menu"]');
    Pc(e2) && (this.options.quality = bu(e2).filter(function(e3) {
      return t2.config.quality.options.includes(e3);
    }));
    var r2 = !_c(this.options.quality) && this.options.quality.length > 1;
    if (ju.toggleMenuButton.call(this, n2, r2), Kc(i2), ju.checkMenu.call(this), r2) {
      var a2 = function(e3) {
        var n3 = xu("qualityBadge.".concat(e3), t2.config);
        return n3.length ? ju.createBadge.call(t2, n3) : null;
      };
      this.options.quality.sort(function(e3, n3) {
        var i3 = t2.config.quality.options;
        return i3.indexOf(e3) > i3.indexOf(n3) ? 1 : -1;
      }).forEach(function(e3) {
        ju.createMenuItem.call(t2, { value: e3, list: i2, type: n2, title: ju.getLabel.call(t2, "quality", e3), badge: a2(e3) });
      }), ju.updateSetting.call(this, n2, i2);
    }
  }
}, setCaptionsMenu: function() {
  var e2 = this;
  if (Ic(this.elements.settings.panels.captions)) {
    var t2 = "captions", n2 = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i2 = Du.getTracks.call(this), r2 = Boolean(i2.length);
    if (ju.toggleMenuButton.call(this, t2, r2), Kc(n2), ju.checkMenu.call(this), r2) {
      var a2 = i2.map(function(t3, i3) {
        return { value: i3, checked: e2.captions.toggled && e2.currentTrack === i3, title: Du.getLabel.call(e2, t3), badge: t3.language && ju.createBadge.call(e2, t3.language.toUpperCase()), list: n2, type: "language" };
      });
      a2.unshift({ value: -1, checked: !this.captions.toggled, title: xu("disabled", this.config), list: n2, type: "language" }), a2.forEach(ju.createMenuItem.bind(this)), ju.updateSetting.call(this, t2, n2);
    }
  }
}, setSpeedMenu: function() {
  var e2 = this;
  if (Ic(this.elements.settings.panels.speed)) {
    var t2 = "speed", n2 = this.elements.settings.panels.speed.querySelector('[role="menu"]');
    this.options.speed = this.options.speed.filter(function(t3) {
      return t3 >= e2.minimumSpeed && t3 <= e2.maximumSpeed;
    });
    var i2 = !_c(this.options.speed) && this.options.speed.length > 1;
    ju.toggleMenuButton.call(this, t2, i2), Kc(n2), ju.checkMenu.call(this), i2 && (this.options.speed.forEach(function(i3) {
      ju.createMenuItem.call(e2, { value: i3, list: n2, type: t2, title: ju.getLabel.call(e2, "speed", i3) });
    }), ju.updateSetting.call(this, t2, n2));
  }
}, checkMenu: function() {
  var e2 = this.elements.settings.buttons, t2 = !_c(e2) && Object.values(e2).some(function(e3) {
    return !e3.hidden;
  });
  Xc(this.elements.settings.menu, !t2);
}, focusFirstMenuItem: function(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!this.elements.settings.popup.hidden) {
    var n2 = e2;
    Ic(n2) || (n2 = Object.values(this.elements.settings.panels).find(function(e3) {
      return !e3.hidden;
    }));
    var i2 = n2.querySelector('[role^="menuitem"]');
    nu.call(this, i2, t2);
  }
}, toggleMenu: function(e2) {
  var t2 = this.elements.settings.popup, n2 = this.elements.buttons.settings;
  if (Ic(t2) && Ic(n2)) {
    var i2 = t2.hidden, r2 = i2;
    if (xc(e2)) r2 = e2;
    else if (Nc(e2) && 27 === e2.which) r2 = false;
    else if (Lc(e2)) {
      var a2 = Cc(e2.composedPath) ? e2.composedPath()[0] : e2.target, o2 = t2.contains(a2);
      if (o2 || !o2 && e2.target !== n2 && r2) return;
    }
    n2.setAttribute("aria-expanded", r2), Xc(t2, !r2), Qc(this.elements.container, this.config.classNames.menu.open, r2), r2 && Nc(e2) ? ju.focusFirstMenuItem.call(this, null, true) : r2 || i2 || nu.call(this, n2, Nc(e2));
  }
}, getMenuSize: function(e2) {
  var t2 = e2.cloneNode(true);
  t2.style.position = "absolute", t2.style.opacity = 0, t2.removeAttribute("hidden"), e2.parentNode.appendChild(t2);
  var n2 = t2.scrollWidth, i2 = t2.scrollHeight;
  return $c(t2), { width: n2, height: i2 };
}, showMenuPanel: function() {
  var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i2 = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t2));
  if (Ic(i2)) {
    var r2 = i2.parentNode, a2 = Array.from(r2.children).find(function(e3) {
      return !e3.hidden;
    });
    if (ru.transitions && !ru.reducedMotion) {
      r2.style.width = "".concat(a2.scrollWidth, "px"), r2.style.height = "".concat(a2.scrollHeight, "px");
      var o2 = ju.getMenuSize.call(this, i2), s2 = function t3(n3) {
        n3.target === r2 && ["width", "height"].includes(n3.propertyName) && (r2.style.width = "", r2.style.height = "", lu.call(e2, r2, Dc, t3));
      };
      su.call(this, r2, Dc, s2), r2.style.width = "".concat(o2.width, "px"), r2.style.height = "".concat(o2.height, "px");
    }
    Xc(a2, true), Xc(i2, false), ju.focusFirstMenuItem.call(this, i2, n2);
  }
}, setDownloadUrl: function() {
  var e2 = this.elements.buttons.download;
  Ic(e2) && e2.setAttribute("href", this.download);
}, create: function(e2) {
  var t2 = this, n2 = ju.bindMenuItemShortcuts, i2 = ju.createButton, r2 = ju.createProgress, a2 = ju.createRange, o2 = ju.createTime, s2 = ju.setQualityMenu, l2 = ju.setSpeedMenu, c2 = ju.showMenuPanel;
  this.elements.controls = null, Pc(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i2.call(this, "play-large"));
  var u2 = zc("div", Gc(this.config.selectors.controls.wrapper));
  this.elements.controls = u2;
  var h2 = { class: "plyr__controls__item" };
  return bu(Pc(this.config.controls) ? this.config.controls : []).forEach(function(s3) {
    if ("restart" === s3 && u2.appendChild(i2.call(t2, "restart", h2)), "rewind" === s3 && u2.appendChild(i2.call(t2, "rewind", h2)), "play" === s3 && u2.appendChild(i2.call(t2, "play", h2)), "fast-forward" === s3 && u2.appendChild(i2.call(t2, "fast-forward", h2)), "progress" === s3) {
      var l3 = zc("div", { class: "".concat(h2.class, " plyr__progress__container") }), d2 = zc("div", Gc(t2.config.selectors.progress));
      if (d2.appendChild(a2.call(t2, "seek", { id: "plyr-seek-".concat(e2.id) })), d2.appendChild(r2.call(t2, "buffer")), t2.config.tooltips.seek) {
        var f2 = zc("span", { class: t2.config.classNames.tooltip }, "00:00");
        d2.appendChild(f2), t2.elements.display.seekTooltip = f2;
      }
      t2.elements.progress = d2, l3.appendChild(t2.elements.progress), u2.appendChild(l3);
    }
    if ("current-time" === s3 && u2.appendChild(o2.call(t2, "currentTime", h2)), "duration" === s3 && u2.appendChild(o2.call(t2, "duration", h2)), "mute" === s3 || "volume" === s3) {
      var p2 = t2.elements.volume;
      if (Ic(p2) && u2.contains(p2) || (p2 = zc("div", Hc({}, h2, { class: "".concat(h2.class, " plyr__volume").trim() })), t2.elements.volume = p2, u2.appendChild(p2)), "mute" === s3 && p2.appendChild(i2.call(t2, "mute")), "volume" === s3 && !qc.isIos) {
        var m2 = { max: 1, step: 0.05, value: t2.config.volume };
        p2.appendChild(a2.call(t2, "volume", Hc(m2, { id: "plyr-volume-".concat(e2.id) })));
      }
    }
    if ("captions" === s3 && u2.appendChild(i2.call(t2, "captions", h2)), "settings" === s3 && !_c(t2.config.settings)) {
      var g2 = zc("div", Hc({}, h2, { class: "".concat(h2.class, " plyr__menu").trim(), hidden: "" }));
      g2.appendChild(i2.call(t2, "settings", { "aria-haspopup": true, "aria-controls": "plyr-settings-".concat(e2.id), "aria-expanded": false }));
      var v2 = zc("div", { class: "plyr__menu__container", id: "plyr-settings-".concat(e2.id), hidden: "" }), y2 = zc("div"), b2 = zc("div", { id: "plyr-settings-".concat(e2.id, "-home") }), w2 = zc("div", { role: "menu" });
      b2.appendChild(w2), y2.appendChild(b2), t2.elements.settings.panels.home = b2, t2.config.settings.forEach(function(i3) {
        var r3 = zc("button", Hc(Gc(t2.config.selectors.buttons.settings), { type: "button", class: "".concat(t2.config.classNames.control, " ").concat(t2.config.classNames.control, "--forward"), role: "menuitem", "aria-haspopup": true, hidden: "" }));
        n2.call(t2, r3, i3), su.call(t2, r3, "click", function() {
          c2.call(t2, i3, false);
        });
        var a3 = zc("span", null, xu(i3, t2.config)), o3 = zc("span", { class: t2.config.classNames.menu.value });
        o3.innerHTML = e2[i3], a3.appendChild(o3), r3.appendChild(a3), w2.appendChild(r3);
        var s4 = zc("div", { id: "plyr-settings-".concat(e2.id, "-").concat(i3), hidden: "" }), l4 = zc("button", { type: "button", class: "".concat(t2.config.classNames.control, " ").concat(t2.config.classNames.control, "--back") });
        l4.appendChild(zc("span", { "aria-hidden": true }, xu(i3, t2.config))), l4.appendChild(zc("span", { class: t2.config.classNames.hidden }, xu("menuBack", t2.config))), su.call(t2, s4, "keydown", function(e3) {
          37 === e3.which && (e3.preventDefault(), e3.stopPropagation(), c2.call(t2, "home", true));
        }, false), su.call(t2, l4, "click", function() {
          c2.call(t2, "home", false);
        }), s4.appendChild(l4), s4.appendChild(zc("div", { role: "menu" })), y2.appendChild(s4), t2.elements.settings.buttons[i3] = r3, t2.elements.settings.panels[i3] = s4;
      }), v2.appendChild(y2), g2.appendChild(v2), u2.appendChild(g2), t2.elements.settings.popup = v2, t2.elements.settings.menu = g2;
    }
    if ("pip" === s3 && ru.pip && u2.appendChild(i2.call(t2, "pip", h2)), "airplay" === s3 && ru.airplay && u2.appendChild(i2.call(t2, "airplay", h2)), "download" === s3) {
      var k2 = Hc({}, h2, { element: "a", href: t2.download, target: "_blank" });
      t2.isHTML5 && (k2.download = "");
      var T2 = t2.config.urls.download;
      !Rc(T2) && t2.isEmbed && Hc(k2, { icon: "logo-".concat(t2.provider), label: t2.provider }), u2.appendChild(i2.call(t2, "download", k2));
    }
    "fullscreen" === s3 && u2.appendChild(i2.call(t2, "fullscreen", h2));
  }), this.isHTML5 && s2.call(this, yu.getQualityOptions.call(this)), l2.call(this), u2;
}, inject: function() {
  var e2 = this;
  if (this.config.loadSprite) {
    var t2 = ju.getIconUrl.call(this);
    t2.cors && Ou(t2.url, "sprite-plyr");
  }
  this.id = Math.floor(1e4 * Math.random());
  var n2 = null;
  this.elements.controls = null;
  var i2, r2, a2 = { id: this.id, seektime: this.config.seekTime, title: this.config.title }, o2 = true;
  if (Cc(this.config.controls) && (this.config.controls = this.config.controls.call(this, a2)), this.config.controls || (this.config.controls = []), Ic(this.config.controls) || Ac(this.config.controls) ? n2 = this.config.controls : (n2 = ju.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: Du.getLabel.call(this) }), o2 = false), o2 && Ac(this.config.controls) && (i2 = n2, Object.entries(a2).forEach(function(e3) {
    var t3 = ql(e3, 2), n3 = t3[0], r3 = t3[1];
    i2 = ku(i2, "{".concat(n3, "}"), r3);
  }), n2 = i2), Ac(this.config.selectors.controls.container) && (r2 = document.querySelector(this.config.selectors.controls.container)), Ic(r2) || (r2 = this.elements.container), r2[Ic(n2) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n2), Ic(this.elements.controls) || ju.findElements.call(this), !_c(this.elements.buttons)) {
    var s2 = function(t3) {
      var n3 = e2.config.classNames.controlPressed;
      Object.defineProperty(t3, "pressed", { enumerable: true, get: function() {
        return Jc(t3, n3);
      }, set: function() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        Qc(t3, n3, e3);
      } });
    };
    Object.values(this.elements.buttons).filter(Boolean).forEach(function(e3) {
      Pc(e3) || Oc(e3) ? Array.from(e3).filter(Boolean).forEach(s2) : s2(e3);
    });
  }
  if (qc.isEdge && Fc(r2), this.config.tooltips.controls) {
    var l2 = this.config, c2 = l2.classNames, u2 = l2.selectors, h2 = "".concat(u2.controls.wrapper, " ").concat(u2.labels, " .").concat(c2.hidden), d2 = eu.call(this, h2);
    Array.from(d2).forEach(function(t3) {
      Qc(t3, e2.config.classNames.hidden, false), Qc(t3, e2.config.classNames.tooltip, true);
    });
  }
} };
function Ru(e2) {
  var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n2 = e2;
  if (t2) {
    var i2 = document.createElement("a");
    i2.href = n2, n2 = i2.href;
  }
  try {
    return new URL(n2);
  } catch (e3) {
    return null;
  }
}
function _u(e2) {
  var t2 = new URLSearchParams();
  return Sc(e2) && Object.entries(e2).forEach(function(e3) {
    var n2 = ql(e3, 2), i2 = n2[0], r2 = n2[1];
    t2.set(i2, r2);
  }), t2;
}
var Du = { setup: function() {
  if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !ru.textTracks) Pc(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && ju.setCaptionsMenu.call(this);
  else {
    if (Ic(this.elements.captions) || (this.elements.captions = zc("div", Gc(this.config.selectors.captions)), function(e3, t3) {
      Ic(e3) && Ic(t3) && t3.parentNode.insertBefore(e3, t3.nextSibling);
    }(this.elements.captions, this.elements.wrapper)), qc.isIE && window.URL) {
      var e2 = this.media.querySelectorAll("track");
      Array.from(e2).forEach(function(e3) {
        var t3 = e3.getAttribute("src"), n3 = Ru(t3);
        null !== n3 && n3.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n3.protocol) && Pu(t3, "blob").then(function(t4) {
          e3.setAttribute("src", window.URL.createObjectURL(t4));
        }).catch(function() {
          $c(e3);
        });
      });
    }
    var t2 = bu((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function(e3) {
      return e3.split("-")[0];
    })), n2 = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
    "auto" === n2 && (n2 = ql(t2, 1)[0]);
    var i2 = this.storage.get("captions");
    if (xc(i2) || (i2 = this.config.captions.active), Object.assign(this.captions, { toggled: false, active: i2, language: n2, languages: t2 }), this.isHTML5) {
      var r2 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
      su.call(this, this.media.textTracks, r2, Du.update.bind(this));
    }
    setTimeout(Du.update.bind(this), 0);
  }
}, update: function() {
  var e2 = this, t2 = Du.getTracks.call(this, true), n2 = this.captions, i2 = n2.active, r2 = n2.language, a2 = n2.meta, o2 = n2.currentTrackNode, s2 = Boolean(t2.find(function(e3) {
    return e3.language === r2;
  }));
  this.isHTML5 && this.isVideo && t2.filter(function(e3) {
    return !a2.get(e3);
  }).forEach(function(t3) {
    e2.debug.log("Track added", t3), a2.set(t3, { default: "showing" === t3.mode }), "showing" === t3.mode && (t3.mode = "hidden"), su.call(e2, t3, "cuechange", function() {
      return Du.updateCues.call(e2);
    });
  }), (s2 && this.language !== r2 || !t2.includes(o2)) && (Du.setLanguage.call(this, r2), Du.toggle.call(this, i2 && s2)), Qc(this.elements.container, this.config.classNames.captions.enabled, !_c(t2)), Pc(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && ju.setCaptionsMenu.call(this);
}, toggle: function(e2) {
  var t2 = this, n2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (this.supported.ui) {
    var i2 = this.captions.toggled, r2 = this.config.classNames.captions.active, a2 = Tc(e2) ? !i2 : e2;
    if (a2 !== i2) {
      if (n2 || (this.captions.active = a2, this.storage.set({ captions: a2 })), !this.language && a2 && !n2) {
        var o2 = Du.getTracks.call(this), s2 = Du.findTrack.call(this, [this.captions.language].concat(Ul(this.captions.languages)), true);
        return this.captions.language = s2.language, void Du.set.call(this, o2.indexOf(s2));
      }
      this.elements.buttons.captions && (this.elements.buttons.captions.pressed = a2), Qc(this.elements.container, r2, a2), this.captions.toggled = a2, ju.updateSetting.call(this, "captions"), uu.call(this, this.media, a2 ? "captionsenabled" : "captionsdisabled");
    }
    setTimeout(function() {
      a2 && t2.captions.toggled && (t2.captions.currentTrackNode.mode = "hidden");
    });
  }
}, set: function(e2) {
  var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n2 = Du.getTracks.call(this);
  if (-1 !== e2) if (Ec(e2)) if (e2 in n2) {
    if (this.captions.currentTrack !== e2) {
      this.captions.currentTrack = e2;
      var i2 = n2[e2], r2 = i2 || {}, a2 = r2.language;
      this.captions.currentTrackNode = i2, ju.updateSetting.call(this, "captions"), t2 || (this.captions.language = a2, this.storage.set({ language: a2 })), this.isVimeo && this.embed.enableTextTrack(a2), uu.call(this, this.media, "languagechange");
    }
    Du.toggle.call(this, true, t2), this.isHTML5 && this.isVideo && Du.updateCues.call(this);
  } else this.debug.warn("Track not found", e2);
  else this.debug.warn("Invalid caption argument", e2);
  else Du.toggle.call(this, false, t2);
}, setLanguage: function(e2) {
  var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (Ac(e2)) {
    var n2 = e2.toLowerCase();
    this.captions.language = n2;
    var i2 = Du.getTracks.call(this), r2 = Du.findTrack.call(this, [n2]);
    Du.set.call(this, i2.indexOf(r2), t2);
  } else this.debug.warn("Invalid language argument", e2);
}, getTracks: function() {
  var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n2 = Array.from((this.media || {}).textTracks || []);
  return n2.filter(function(n3) {
    return !e2.isHTML5 || t2 || e2.captions.meta.has(n3);
  }).filter(function(e3) {
    return ["captions", "subtitles"].includes(e3.kind);
  });
}, findTrack: function(e2) {
  var t2, n2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r2 = Du.getTracks.call(this), a2 = function(e3) {
    return Number((n2.captions.meta.get(e3) || {}).default);
  }, o2 = Array.from(r2).sort(function(e3, t3) {
    return a2(t3) - a2(e3);
  });
  return e2.every(function(e3) {
    return !(t2 = o2.find(function(t3) {
      return t3.language === e3;
    }));
  }), t2 || (i2 ? o2[0] : void 0);
}, getCurrentTrack: function() {
  return Du.getTracks.call(this)[this.currentTrack];
}, getLabel: function(e2) {
  var t2 = e2;
  return !Mc(t2) && ru.textTracks && this.captions.toggled && (t2 = Du.getCurrentTrack.call(this)), Mc(t2) ? _c(t2.label) ? _c(t2.language) ? xu("enabled", this.config) : e2.language.toUpperCase() : t2.label : xu("disabled", this.config);
}, updateCues: function(e2) {
  if (this.supported.ui) if (Ic(this.elements.captions)) if (Tc(e2) || Array.isArray(e2)) {
    var t2 = e2;
    if (!t2) {
      var n2 = Du.getCurrentTrack.call(this);
      t2 = Array.from((n2 || {}).activeCues || []).map(function(e3) {
        return e3.getCueAsHTML();
      }).map(Eu);
    }
    var i2 = t2.map(function(e3) {
      return e3.trim();
    }).join("\n");
    if (i2 !== this.elements.captions.innerHTML) {
      Kc(this.elements.captions);
      var r2 = zc("span", Gc(this.config.selectors.caption));
      r2.innerHTML = i2, this.elements.captions.appendChild(r2), uu.call(this, this.media, "cuechange");
    }
  } else this.debug.warn("updateCues: Invalid input", e2);
  else this.debug.warn("No captions element to render to");
} };
var Fu = { enabled: true, title: "", debug: false, autoplay: false, autopause: true, playsinline: true, seekTime: 10, volume: 1, muted: false, duration: null, displayDuration: true, invertTime: true, toggleInvert: true, ratio: null, clickToPlay: true, hideControls: true, resetOnEnd: false, disableContextMenu: true, loadSprite: true, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.6.1/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240], forced: false, onChange: null }, loop: { active: false }, speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }, keyboard: { focused: true, global: false }, tooltips: { controls: false, seek: true }, captions: { active: false, language: "auto", update: false }, fullscreen: { enabled: true, fallback: true, iosNative: false }, storage: { enabled: true, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", pip: "PIP", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/v2/video/{0}.json" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isIos: "plyr--is-ios", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, tabFocus: "plyr__tab-focus", previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" } }, ads: { enabled: false, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: false, src: "" }, vimeo: { byline: false, portrait: false, title: false, speed: true, transparent: false, premium: false, referrerPolicy: null }, youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1 } };
var qu = "picture-in-picture";
var Uu = "inline";
var Hu = { html5: "html5", youtube: "youtube", vimeo: "vimeo" };
var Bu = "audio";
var Vu = "video";
var zu = function() {
};
var Wu = function() {
  function e2() {
    var t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    Nl(this, e2), this.enabled = window.console && t2, this.enabled && this.log("Debugging enabled");
  }
  return jl(e2, [{ key: "log", get: function() {
    return this.enabled ? Function.prototype.bind.call(console.log, console) : zu;
  } }, { key: "warn", get: function() {
    return this.enabled ? Function.prototype.bind.call(console.warn, console) : zu;
  } }, { key: "error", get: function() {
    return this.enabled ? Function.prototype.bind.call(console.error, console) : zu;
  } }]), e2;
}();
var $u = function() {
  function e2(t2) {
    var n2 = this;
    Nl(this, e2), this.player = t2, this.prefix = e2.prefix, this.property = e2.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = "force" === t2.config.fullscreen.fallback, this.player.elements.fullscreen = t2.config.fullscreen.container && function(e3, t3) {
      return (Element.prototype.closest || function() {
        var e4 = this;
        do {
          if (Zc.matches(e4, t3)) return e4;
          e4 = e4.parentElement || e4.parentNode;
        } while (null !== e4 && 1 === e4.nodeType);
        return null;
      }).call(e3, t3);
    }(this.player.elements.container, t2.config.fullscreen.container), su.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function() {
      n2.onChange();
    }), su.call(this.player, this.player.elements.container, "dblclick", function(e3) {
      Ic(n2.player.elements.controls) && n2.player.elements.controls.contains(e3.target) || n2.toggle();
    }), su.call(this, this.player.elements.container, "keydown", function(e3) {
      return n2.trapFocus(e3);
    }), this.update();
  }
  return jl(e2, [{ key: "onChange", value: function() {
    if (this.enabled) {
      var e3 = this.player.elements.buttons.fullscreen;
      Ic(e3) && (e3.pressed = this.active);
      var t2 = this.target === this.player.media ? this.target : this.player.elements.container;
      uu.call(this.player, t2, this.active ? "enterfullscreen" : "exitfullscreen", true);
    }
  } }, { key: "toggleFallback", value: function() {
    var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (e3 ? this.scrollPosition = { x: window.scrollX || 0, y: window.scrollY || 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e3 ? "hidden" : "", Qc(this.target, this.player.config.classNames.fullscreen.fallback, e3), qc.isIos) {
      var t2 = document.head.querySelector('meta[name="viewport"]'), n2 = "viewport-fit=cover";
      t2 || (t2 = document.createElement("meta")).setAttribute("name", "viewport");
      var i2 = Ac(t2.content) && t2.content.includes(n2);
      e3 ? (this.cleanupViewport = !i2, i2 || (t2.content += ",".concat(n2))) : this.cleanupViewport && (t2.content = t2.content.split(",").filter(function(e4) {
        return e4.trim() !== n2;
      }).join(","));
    }
    this.onChange();
  } }, { key: "trapFocus", value: function(e3) {
    if (!qc.isIos && this.active && "Tab" === e3.key && 9 === e3.keyCode) {
      var t2 = document.activeElement, n2 = eu.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), i2 = ql(n2, 1)[0], r2 = n2[n2.length - 1];
      t2 !== r2 || e3.shiftKey ? t2 === i2 && e3.shiftKey && (r2.focus(), e3.preventDefault()) : (i2.focus(), e3.preventDefault());
    }
  } }, { key: "update", value: function() {
    var t2;
    this.enabled ? (t2 = this.forceFallback ? "Fallback (forced)" : e2.native ? "Native" : "Fallback", this.player.debug.log("".concat(t2, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled"), Qc(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
  } }, { key: "enter", value: function() {
    this.enabled && (qc.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !e2.native || this.forceFallback ? this.toggleFallback(true) : this.prefix ? _c(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({ navigationUI: "hide" }));
  } }, { key: "exit", value: function() {
    if (this.enabled) if (qc.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), fu(this.player.play());
    else if (!e2.native || this.forceFallback) this.toggleFallback(false);
    else if (this.prefix) {
      if (!_c(this.prefix)) {
        var t2 = "moz" === this.prefix ? "Cancel" : "Exit";
        document["".concat(this.prefix).concat(t2).concat(this.property)]();
      }
    } else (document.cancelFullScreen || document.exitFullscreen).call(document);
  } }, { key: "toggle", value: function() {
    this.active ? this.exit() : this.enter();
  } }, { key: "usingNative", get: function() {
    return e2.native && !this.forceFallback;
  } }, { key: "enabled", get: function() {
    return (e2.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
  } }, { key: "active", get: function() {
    if (!this.enabled) return false;
    if (!e2.native || this.forceFallback) return Jc(this.target, this.player.config.classNames.fullscreen.fallback);
    var t2 = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
    return t2 && t2.shadowRoot ? t2 === this.target.getRootNode().host : t2 === this.target;
  } }, { key: "target", get: function() {
    return qc.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
  } }], [{ key: "native", get: function() {
    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
  } }, { key: "prefix", get: function() {
    if (Cc(document.exitFullscreen)) return "";
    var e3 = "";
    return ["webkit", "moz", "ms"].some(function(t2) {
      return !(!Cc(document["".concat(t2, "ExitFullscreen")]) && !Cc(document["".concat(t2, "CancelFullScreen")]) || (e3 = t2, 0));
    }), e3;
  } }, { key: "property", get: function() {
    return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
  } }]), e2;
}();
function Ku(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
  return new Promise(function(n2, i2) {
    var r2 = new Image(), a2 = function() {
      delete r2.onload, delete r2.onerror, (r2.naturalWidth >= t2 ? n2 : i2)(r2);
    };
    Object.assign(r2, { onload: a2, onerror: a2, src: e2 });
  });
}
var Yu = { addStyleHook: function() {
  Qc(this.elements.container, this.config.selectors.container.replace(".", ""), true), Qc(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
}, toggleNativeControls: function() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  e2 && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
}, build: function() {
  var e2 = this;
  if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void Yu.toggleNativeControls.call(this, true);
  Ic(this.elements.controls) || (ju.inject.call(this), this.listeners.controls()), Yu.toggleNativeControls.call(this), this.isHTML5 && Du.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, ju.updateVolume.call(this), ju.timeUpdate.call(this), Yu.checkPlaying.call(this), Qc(this.elements.container, this.config.classNames.pip.supported, ru.pip && this.isHTML5 && this.isVideo), Qc(this.elements.container, this.config.classNames.airplay.supported, ru.airplay && this.isHTML5), Qc(this.elements.container, this.config.classNames.isIos, qc.isIos), Qc(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = true, setTimeout(function() {
    uu.call(e2, e2.media, "ready");
  }, 0), Yu.setTitle.call(this), this.poster && Yu.setPoster.call(this, this.poster, false).catch(function() {
  }), this.config.duration && ju.durationUpdate.call(this);
}, setTitle: function() {
  var e2 = xu("play", this.config);
  if (Ac(this.config.title) && !_c(this.config.title) && (e2 += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function(t3) {
    t3.setAttribute("aria-label", e2);
  }), this.isEmbed) {
    var t2 = tu.call(this, "iframe");
    if (!Ic(t2)) return;
    var n2 = _c(this.config.title) ? "video" : this.config.title, i2 = xu("frameTitle", this.config);
    t2.setAttribute("title", i2.replace("{title}", n2));
  }
}, togglePoster: function(e2) {
  Qc(this.elements.container, this.config.classNames.posterEnabled, e2);
}, setPoster: function(e2) {
  var t2 = this, n2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return n2 && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e2), du.call(this).then(function() {
    return Ku(e2);
  }).catch(function(n3) {
    throw e2 === t2.poster && Yu.togglePoster.call(t2, false), n3;
  }).then(function() {
    if (e2 !== t2.poster) throw new Error("setPoster cancelled by later call to setPoster");
  }).then(function() {
    return Object.assign(t2.elements.poster.style, { backgroundImage: "url('".concat(e2, "')"), backgroundSize: "" }), Yu.togglePoster.call(t2, true), e2;
  }));
}, checkPlaying: function(e2) {
  var t2 = this;
  Qc(this.elements.container, this.config.classNames.playing, this.playing), Qc(this.elements.container, this.config.classNames.paused, this.paused), Qc(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function(e3) {
    Object.assign(e3, { pressed: t2.playing }), e3.setAttribute("aria-label", xu(t2.playing ? "pause" : "play", t2.config));
  }), Lc(e2) && "timeupdate" === e2.type || Yu.toggleControls.call(this);
}, checkLoading: function(e2) {
  var t2 = this;
  this.loading = ["stalled", "waiting"].includes(e2.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function() {
    Qc(t2.elements.container, t2.config.classNames.loading, t2.loading), Yu.toggleControls.call(t2);
  }, this.loading ? 250 : 0);
}, toggleControls: function(e2) {
  var t2 = this.elements.controls;
  if (t2 && this.config.hideControls) {
    var n2 = this.touch && this.lastSeekTime + 2e3 > Date.now();
    this.toggleControls(Boolean(e2 || this.loading || this.paused || t2.pressed || t2.hover || n2));
  }
}, migrateStyles: function() {
  var e2 = this;
  Object.values(Dl({}, this.media.style)).filter(function(e3) {
    return !_c(e3) && Ac(e3) && e3.startsWith("--plyr");
  }).forEach(function(t2) {
    e2.elements.container.style.setProperty(t2, e2.media.style.getPropertyValue(t2)), e2.media.style.removeProperty(t2);
  }), _c(this.media.style) && this.media.removeAttribute("style");
} };
var Gu = function() {
  function e2(t2) {
    Nl(this, e2), this.player = t2, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
  }
  return jl(e2, [{ key: "handleKey", value: function(e3) {
    var t2 = this.player, n2 = t2.elements, i2 = e3.keyCode ? e3.keyCode : e3.which, r2 = "keydown" === e3.type, a2 = r2 && i2 === this.lastKey;
    if (!(e3.altKey || e3.ctrlKey || e3.metaKey || e3.shiftKey) && Ec(i2)) if (r2) {
      var o2 = document.activeElement;
      if (Ic(o2)) {
        var s2 = t2.config.selectors.editable;
        if (o2 !== n2.inputs.seek && Zc(o2, s2)) return;
        if (32 === e3.which && Zc(o2, 'button, [role^="menuitem"]')) return;
      }
      switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i2) && (e3.preventDefault(), e3.stopPropagation()), i2) {
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          a2 || (t2.currentTime = t2.duration / 10 * (i2 - 48));
          break;
        case 32:
        case 75:
          a2 || fu(t2.togglePlay());
          break;
        case 38:
          t2.increaseVolume(0.1);
          break;
        case 40:
          t2.decreaseVolume(0.1);
          break;
        case 77:
          a2 || (t2.muted = !t2.muted);
          break;
        case 39:
          t2.forward();
          break;
        case 37:
          t2.rewind();
          break;
        case 70:
          t2.fullscreen.toggle();
          break;
        case 67:
          a2 || t2.toggleCaptions();
          break;
        case 76:
          t2.loop = !t2.loop;
      }
      27 === i2 && !t2.fullscreen.usingNative && t2.fullscreen.active && t2.fullscreen.toggle(), this.lastKey = i2;
    } else this.lastKey = null;
  } }, { key: "toggleMenu", value: function(e3) {
    ju.toggleMenu.call(this.player, e3);
  } }, { key: "firstTouch", value: function() {
    var e3 = this.player, t2 = e3.elements;
    e3.touch = true, Qc(t2.container, e3.config.classNames.isTouch, true);
  } }, { key: "setTabFocus", value: function(e3) {
    var t2 = this.player, n2 = t2.elements;
    if (clearTimeout(this.focusTimer), "keydown" !== e3.type || 9 === e3.which) {
      "keydown" === e3.type && (this.lastKeyDown = e3.timeStamp);
      var i2, r2 = e3.timeStamp - this.lastKeyDown <= 20;
      ("focus" !== e3.type || r2) && (i2 = t2.config.classNames.tabFocus, Qc(eu.call(t2, ".".concat(i2)), i2, false), "focusout" !== e3.type && (this.focusTimer = setTimeout(function() {
        var e4 = document.activeElement;
        n2.container.contains(e4) && Qc(document.activeElement, t2.config.classNames.tabFocus, true);
      }, 10)));
    }
  } }, { key: "global", value: function() {
    var e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t2 = this.player;
    t2.config.keyboard.global && ou.call(t2, window, "keydown keyup", this.handleKey, e3, false), ou.call(t2, document.body, "click", this.toggleMenu, e3), cu.call(t2, document.body, "touchstart", this.firstTouch), ou.call(t2, document.body, "keydown focus blur focusout", this.setTabFocus, e3, false, true);
  } }, { key: "container", value: function() {
    var e3 = this.player, t2 = e3.config, n2 = e3.elements, i2 = e3.timers;
    !t2.keyboard.global && t2.keyboard.focused && su.call(e3, n2.container, "keydown keyup", this.handleKey, false), su.call(e3, n2.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function(t3) {
      var r3 = n2.controls;
      r3 && "enterfullscreen" === t3.type && (r3.pressed = false, r3.hover = false);
      var a3 = 0;
      ["touchstart", "touchmove", "mousemove"].includes(t3.type) && (Yu.toggleControls.call(e3, true), a3 = e3.touch ? 3e3 : 2e3), clearTimeout(i2.controls), i2.controls = setTimeout(function() {
        return Yu.toggleControls.call(e3, false);
      }, a3);
    });
    var r2 = function(t3) {
      if (!t3) return vu.call(e3);
      var i3 = n2.container.getBoundingClientRect(), r3 = i3.width, a3 = i3.height;
      return vu.call(e3, "".concat(r3, ":").concat(a3));
    }, a2 = function() {
      clearTimeout(i2.resized), i2.resized = setTimeout(r2, 50);
    };
    su.call(e3, n2.container, "enterfullscreen exitfullscreen", function(t3) {
      var i3 = e3.fullscreen, o2 = i3.target, s2 = i3.usingNative;
      if (o2 === n2.container && (e3.isEmbed || !_c(e3.config.ratio))) {
        var l2 = "enterfullscreen" === t3.type, c2 = r2(l2);
        c2.padding, !function(t4, n3, i4) {
          if (e3.isVimeo && !e3.config.vimeo.premium) {
            var r3 = e3.elements.wrapper.firstChild, a3 = ql(t4, 2)[1], o3 = ql(gu.call(e3), 2), s3 = o3[0], l3 = o3[1];
            r3.style.maxWidth = i4 ? "".concat(a3 / l3 * s3, "px") : null, r3.style.margin = i4 ? "0 auto" : null;
          }
        }(c2.ratio, 0, l2), s2 || (l2 ? su.call(e3, window, "resize", a2) : lu.call(e3, window, "resize", a2));
      }
    });
  } }, { key: "media", value: function() {
    var e3 = this, t2 = this.player, n2 = t2.elements;
    if (su.call(t2, t2.media, "timeupdate seeking seeked", function(e4) {
      return ju.timeUpdate.call(t2, e4);
    }), su.call(t2, t2.media, "durationchange loadeddata loadedmetadata", function(e4) {
      return ju.durationUpdate.call(t2, e4);
    }), su.call(t2, t2.media, "ended", function() {
      t2.isHTML5 && t2.isVideo && t2.config.resetOnEnd && (t2.restart(), t2.pause());
    }), su.call(t2, t2.media, "progress playing seeking seeked", function(e4) {
      return ju.updateProgress.call(t2, e4);
    }), su.call(t2, t2.media, "volumechange", function(e4) {
      return ju.updateVolume.call(t2, e4);
    }), su.call(t2, t2.media, "playing play pause ended emptied timeupdate", function(e4) {
      return Yu.checkPlaying.call(t2, e4);
    }), su.call(t2, t2.media, "waiting canplay seeked playing", function(e4) {
      return Yu.checkLoading.call(t2, e4);
    }), t2.supported.ui && t2.config.clickToPlay && !t2.isAudio) {
      var i2 = tu.call(t2, ".".concat(t2.config.classNames.video));
      if (!Ic(i2)) return;
      su.call(t2, n2.container, "click", function(r3) {
        ([n2.container, i2].includes(r3.target) || i2.contains(r3.target)) && (t2.touch && t2.config.hideControls || (t2.ended ? (e3.proxy(r3, t2.restart, "restart"), e3.proxy(r3, function() {
          fu(t2.play());
        }, "play")) : e3.proxy(r3, function() {
          fu(t2.togglePlay());
        }, "play")));
      });
    }
    t2.supported.ui && t2.config.disableContextMenu && su.call(t2, n2.wrapper, "contextmenu", function(e4) {
      e4.preventDefault();
    }, false), su.call(t2, t2.media, "volumechange", function() {
      t2.storage.set({ volume: t2.volume, muted: t2.muted });
    }), su.call(t2, t2.media, "ratechange", function() {
      ju.updateSetting.call(t2, "speed"), t2.storage.set({ speed: t2.speed });
    }), su.call(t2, t2.media, "qualitychange", function(e4) {
      ju.updateSetting.call(t2, "quality", null, e4.detail.quality);
    }), su.call(t2, t2.media, "ready qualitychange", function() {
      ju.setDownloadUrl.call(t2);
    });
    var r2 = t2.config.events.concat(["keyup", "keydown"]).join(" ");
    su.call(t2, t2.media, r2, function(e4) {
      var i3 = e4.detail, r3 = void 0 === i3 ? {} : i3;
      "error" === e4.type && (r3 = t2.media.error), uu.call(t2, n2.container, e4.type, true, r3);
    });
  } }, { key: "proxy", value: function(e3, t2, n2) {
    var i2 = this.player, r2 = i2.config.listeners[n2], a2 = true;
    Cc(r2) && (a2 = r2.call(i2, e3)), false !== a2 && Cc(t2) && t2.call(i2, e3);
  } }, { key: "bind", value: function(e3, t2, n2, i2) {
    var r2 = this, a2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], o2 = this.player, s2 = o2.config.listeners[i2], l2 = Cc(s2);
    su.call(o2, e3, t2, function(e4) {
      return r2.proxy(e4, n2, i2);
    }, a2 && !l2);
  } }, { key: "controls", value: function() {
    var e3 = this, t2 = this.player, n2 = t2.elements, i2 = qc.isIE ? "change" : "input";
    if (n2.buttons.play && Array.from(n2.buttons.play).forEach(function(n3) {
      e3.bind(n3, "click", function() {
        fu(t2.togglePlay());
      }, "play");
    }), this.bind(n2.buttons.restart, "click", t2.restart, "restart"), this.bind(n2.buttons.rewind, "click", t2.rewind, "rewind"), this.bind(n2.buttons.fastForward, "click", t2.forward, "fastForward"), this.bind(n2.buttons.mute, "click", function() {
      t2.muted = !t2.muted;
    }, "mute"), this.bind(n2.buttons.captions, "click", function() {
      return t2.toggleCaptions();
    }), this.bind(n2.buttons.download, "click", function() {
      uu.call(t2, t2.media, "download");
    }, "download"), this.bind(n2.buttons.fullscreen, "click", function() {
      t2.fullscreen.toggle();
    }, "fullscreen"), this.bind(n2.buttons.pip, "click", function() {
      t2.pip = "toggle";
    }, "pip"), this.bind(n2.buttons.airplay, "click", t2.airplay, "airplay"), this.bind(n2.buttons.settings, "click", function(e4) {
      e4.stopPropagation(), e4.preventDefault(), ju.toggleMenu.call(t2, e4);
    }, null, false), this.bind(n2.buttons.settings, "keyup", function(e4) {
      var n3 = e4.which;
      [13, 32].includes(n3) && (13 !== n3 ? (e4.preventDefault(), e4.stopPropagation(), ju.toggleMenu.call(t2, e4)) : ju.focusFirstMenuItem.call(t2, null, true));
    }, null, false), this.bind(n2.settings.menu, "keydown", function(e4) {
      27 === e4.which && ju.toggleMenu.call(t2, e4);
    }), this.bind(n2.inputs.seek, "mousedown mousemove", function(e4) {
      var t3 = n2.progress.getBoundingClientRect(), i3 = 100 / t3.width * (e4.pageX - t3.left);
      e4.currentTarget.setAttribute("seek-value", i3);
    }), this.bind(n2.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function(e4) {
      var n3 = e4.currentTarget, i3 = e4.keyCode ? e4.keyCode : e4.which, r3 = "play-on-seeked";
      if (!Nc(e4) || 39 === i3 || 37 === i3) {
        t2.lastSeekTime = Date.now();
        var a2 = n3.hasAttribute(r3), o2 = ["mouseup", "touchend", "keyup"].includes(e4.type);
        a2 && o2 ? (n3.removeAttribute(r3), fu(t2.play())) : !o2 && t2.playing && (n3.setAttribute(r3, ""), t2.pause());
      }
    }), qc.isIos) {
      var r2 = eu.call(t2, 'input[type="range"]');
      Array.from(r2).forEach(function(t3) {
        return e3.bind(t3, i2, function(e4) {
          return Fc(e4.target);
        });
      });
    }
    this.bind(n2.inputs.seek, i2, function(e4) {
      var n3 = e4.currentTarget, i3 = n3.getAttribute("seek-value");
      _c(i3) && (i3 = n3.value), n3.removeAttribute("seek-value"), t2.currentTime = i3 / n3.max * t2.duration;
    }, "seek"), this.bind(n2.progress, "mouseenter mouseleave mousemove", function(e4) {
      return ju.updateSeekTooltip.call(t2, e4);
    }), this.bind(n2.progress, "mousemove touchmove", function(e4) {
      var n3 = t2.previewThumbnails;
      n3 && n3.loaded && n3.startMove(e4);
    }), this.bind(n2.progress, "mouseleave touchend click", function() {
      var e4 = t2.previewThumbnails;
      e4 && e4.loaded && e4.endMove(false, true);
    }), this.bind(n2.progress, "mousedown touchstart", function(e4) {
      var n3 = t2.previewThumbnails;
      n3 && n3.loaded && n3.startScrubbing(e4);
    }), this.bind(n2.progress, "mouseup touchend", function(e4) {
      var n3 = t2.previewThumbnails;
      n3 && n3.loaded && n3.endScrubbing(e4);
    }), qc.isWebkit && Array.from(eu.call(t2, 'input[type="range"]')).forEach(function(n3) {
      e3.bind(n3, "input", function(e4) {
        return ju.updateRangeFill.call(t2, e4.target);
      });
    }), t2.config.toggleInvert && !Ic(n2.display.duration) && this.bind(n2.display.currentTime, "click", function() {
      0 !== t2.currentTime && (t2.config.invertTime = !t2.config.invertTime, ju.timeUpdate.call(t2));
    }), this.bind(n2.inputs.volume, i2, function(e4) {
      t2.volume = e4.target.value;
    }, "volume"), this.bind(n2.controls, "mouseenter mouseleave", function(e4) {
      n2.controls.hover = !t2.touch && "mouseenter" === e4.type;
    }), n2.fullscreen && Array.from(n2.fullscreen.children).filter(function(e4) {
      return !e4.contains(n2.container);
    }).forEach(function(i3) {
      e3.bind(i3, "mouseenter mouseleave", function(e4) {
        n2.controls.hover = !t2.touch && "mouseenter" === e4.type;
      });
    }), this.bind(n2.controls, "mousedown mouseup touchstart touchend touchcancel", function(e4) {
      n2.controls.pressed = ["mousedown", "touchstart"].includes(e4.type);
    }), this.bind(n2.controls, "focusin", function() {
      var i3 = t2.config, r3 = t2.timers;
      Qc(n2.controls, i3.classNames.noTransition, true), Yu.toggleControls.call(t2, true), setTimeout(function() {
        Qc(n2.controls, i3.classNames.noTransition, false);
      }, 0);
      var a2 = e3.touch ? 3e3 : 4e3;
      clearTimeout(r3.controls), r3.controls = setTimeout(function() {
        return Yu.toggleControls.call(t2, false);
      }, a2);
    }), this.bind(n2.inputs.volume, "wheel", function(e4) {
      var n3 = e4.webkitDirectionInvertedFromDevice, i3 = ql([e4.deltaX, -e4.deltaY].map(function(e5) {
        return n3 ? -e5 : e5;
      }), 2), r3 = i3[0], a2 = i3[1], o2 = Math.sign(Math.abs(r3) > Math.abs(a2) ? r3 : a2);
      t2.increaseVolume(o2 / 50);
      var s2 = t2.media.volume;
      (1 === o2 && s2 < 1 || -1 === o2 && s2 > 0) && e4.preventDefault();
    }, "volume", false);
  } }]), e2;
}();
var Xu = function(e2, t2) {
  return e2(t2 = { exports: {} }, t2.exports), t2.exports;
}(function(e2, t2) {
  e2.exports = function() {
    var e3 = function() {
    }, t3 = {}, n2 = {}, i2 = {};
    function r2(e4, t4) {
      if (e4) {
        var r3 = i2[e4];
        if (n2[e4] = t4, r3) for (; r3.length; ) r3[0](e4, t4), r3.splice(0, 1);
      }
    }
    function a2(t4, n3) {
      t4.call && (t4 = { success: t4 }), n3.length ? (t4.error || e3)(n3) : (t4.success || e3)(t4);
    }
    function o2(t4, n3, i3, r3) {
      var a3, s3, l3 = document, c2 = i3.async, u2 = (i3.numRetries || 0) + 1, h2 = i3.before || e3, d2 = t4.replace(/[\?|#].*$/, ""), f2 = t4.replace(/^(css|img)!/, "");
      r3 = r3 || 0, /(^css!|\.css$)/.test(d2) ? ((s3 = l3.createElement("link")).rel = "stylesheet", s3.href = f2, (a3 = "hideFocus" in s3) && s3.relList && (a3 = 0, s3.rel = "preload", s3.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d2) ? (s3 = l3.createElement("img")).src = f2 : ((s3 = l3.createElement("script")).src = t4, s3.async = void 0 === c2 || c2), s3.onload = s3.onerror = s3.onbeforeload = function(e4) {
        var l4 = e4.type[0];
        if (a3) try {
          s3.sheet.cssText.length || (l4 = "e");
        } catch (e5) {
          18 != e5.code && (l4 = "e");
        }
        if ("e" == l4) {
          if ((r3 += 1) < u2) return o2(t4, n3, i3, r3);
        } else if ("preload" == s3.rel && "style" == s3.as) return s3.rel = "stylesheet";
        n3(t4, l4, e4.defaultPrevented);
      }, false !== h2(t4, s3) && l3.head.appendChild(s3);
    }
    function s2(e4, t4, n3) {
      var i3, r3, a3 = (e4 = e4.push ? e4 : [e4]).length, s3 = a3, l3 = [];
      for (i3 = function(e5, n4, i4) {
        if ("e" == n4 && l3.push(e5), "b" == n4) {
          if (!i4) return;
          l3.push(e5);
        }
        --a3 || t4(l3);
      }, r3 = 0; r3 < s3; r3++) o2(e4[r3], i3, n3);
    }
    function l2(e4, n3, i3) {
      var o3, l3;
      if (n3 && n3.trim && (o3 = n3), l3 = (o3 ? i3 : n3) || {}, o3) {
        if (o3 in t3) throw "LoadJS";
        t3[o3] = true;
      }
      function c2(t4, n4) {
        s2(e4, function(e5) {
          a2(l3, e5), t4 && a2({ success: t4, error: n4 }, e5), r2(o3, e5);
        }, l3);
      }
      if (l3.returnPromise) return new Promise(c2);
      c2();
    }
    return l2.ready = function(e4, t4) {
      return function(e5, t5) {
        e5 = e5.push ? e5 : [e5];
        var r3, a3, o3, s3 = [], l3 = e5.length, c2 = l3;
        for (r3 = function(e6, n3) {
          n3.length && s3.push(e6), --c2 || t5(s3);
        }; l3--; ) a3 = e5[l3], (o3 = n2[a3]) ? r3(a3, o3) : (i2[a3] = i2[a3] || []).push(r3);
      }(e4, function(e5) {
        a2(t4, e5);
      }), l2;
    }, l2.done = function(e4) {
      r2(e4, []);
    }, l2.reset = function() {
      t3 = {}, n2 = {}, i2 = {};
    }, l2.isDefined = function(e4) {
      return e4 in t3;
    }, l2;
  }();
});
function Qu(e2) {
  return new Promise(function(t2, n2) {
    Xu(e2, { success: t2, error: n2 });
  });
}
function Ju(e2) {
  e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, uu.call(this, this.media, e2 ? "play" : "pause"));
}
var Zu = { setup: function() {
  var e2 = this;
  Qc(e2.elements.wrapper, e2.config.classNames.embed, true), e2.options.speed = e2.config.speed.options, vu.call(e2), Sc(window.Vimeo) ? Zu.ready.call(e2) : Qu(e2.config.urls.vimeo.sdk).then(function() {
    Zu.ready.call(e2);
  }).catch(function(t2) {
    e2.debug.warn("Vimeo SDK (player.js) failed to load", t2);
  });
}, ready: function() {
  var e2 = this, t2 = this, n2 = t2.config.vimeo, i2 = n2.premium, r2 = n2.referrerPolicy, a2 = Fl(n2, ["premium", "referrerPolicy"]);
  i2 && Object.assign(a2, { controls: false, sidedock: false });
  var o2 = _u(Dl({ loop: t2.config.loop.active, autoplay: t2.autoplay, muted: t2.muted, gesture: "media", playsinline: !this.config.fullscreen.iosNative }, a2)), s2 = t2.media.getAttribute("src");
  _c(s2) && (s2 = t2.media.getAttribute(t2.config.attributes.embed.id));
  var l2 = function(e3) {
    return _c(e3) ? null : Ec(Number(e3)) ? e3 : e3.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e3;
  }(s2), c2 = zc("iframe"), u2 = wu(t2.config.urls.vimeo.iframe, l2, o2);
  c2.setAttribute("src", u2), c2.setAttribute("allowfullscreen", ""), c2.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"), _c(r2) || c2.setAttribute("referrerPolicy", r2);
  var h2 = t2.poster;
  if (i2) c2.setAttribute("data-poster", h2), t2.media = Yc(c2, t2.media);
  else {
    var d2 = zc("div", { class: t2.config.classNames.embedContainer, "data-poster": h2 });
    d2.appendChild(c2), t2.media = Yc(d2, t2.media);
  }
  Pu(wu(t2.config.urls.vimeo.api, l2), "json").then(function(e3) {
    if (!_c(e3)) {
      var n3 = new URL(e3[0].thumbnail_large);
      n3.pathname = "".concat(n3.pathname.split("_")[0], ".jpg"), Yu.setPoster.call(t2, n3.href).catch(function() {
      });
    }
  }), t2.embed = new window.Vimeo.Player(c2, { autopause: t2.config.autopause, muted: t2.muted }), t2.media.paused = true, t2.media.currentTime = 0, t2.supported.ui && t2.embed.disableTextTrack(), t2.media.play = function() {
    return Ju.call(t2, true), t2.embed.play();
  }, t2.media.pause = function() {
    return Ju.call(t2, false), t2.embed.pause();
  }, t2.media.stop = function() {
    t2.pause(), t2.currentTime = 0;
  };
  var f2 = t2.media.currentTime;
  Object.defineProperty(t2.media, "currentTime", { get: function() {
    return f2;
  }, set: function(e3) {
    var n3 = t2.embed, i3 = t2.media, r3 = t2.paused, a3 = t2.volume, o3 = r3 && !n3.hasPlayed;
    i3.seeking = true, uu.call(t2, i3, "seeking"), Promise.resolve(o3 && n3.setVolume(0)).then(function() {
      return n3.setCurrentTime(e3);
    }).then(function() {
      return o3 && n3.pause();
    }).then(function() {
      return o3 && n3.setVolume(a3);
    }).catch(function() {
    });
  } });
  var p2 = t2.config.speed.selected;
  Object.defineProperty(t2.media, "playbackRate", { get: function() {
    return p2;
  }, set: function(e3) {
    t2.embed.setPlaybackRate(e3).then(function() {
      p2 = e3, uu.call(t2, t2.media, "ratechange");
    }).catch(function() {
      t2.options.speed = [1];
    });
  } });
  var m2 = t2.config.volume;
  Object.defineProperty(t2.media, "volume", { get: function() {
    return m2;
  }, set: function(e3) {
    t2.embed.setVolume(e3).then(function() {
      m2 = e3, uu.call(t2, t2.media, "volumechange");
    });
  } });
  var g2 = t2.config.muted;
  Object.defineProperty(t2.media, "muted", { get: function() {
    return g2;
  }, set: function(e3) {
    var n3 = !!xc(e3) && e3;
    t2.embed.setVolume(n3 ? 0 : t2.config.volume).then(function() {
      g2 = n3, uu.call(t2, t2.media, "volumechange");
    });
  } });
  var v2, y2 = t2.config.loop;
  Object.defineProperty(t2.media, "loop", { get: function() {
    return y2;
  }, set: function(e3) {
    var n3 = xc(e3) ? e3 : t2.config.loop.active;
    t2.embed.setLoop(n3).then(function() {
      y2 = n3;
    });
  } }), t2.embed.getVideoUrl().then(function(e3) {
    v2 = e3, ju.setDownloadUrl.call(t2);
  }).catch(function(t3) {
    e2.debug.warn(t3);
  }), Object.defineProperty(t2.media, "currentSrc", { get: function() {
    return v2;
  } }), Object.defineProperty(t2.media, "ended", { get: function() {
    return t2.currentTime === t2.duration;
  } }), Promise.all([t2.embed.getVideoWidth(), t2.embed.getVideoHeight()]).then(function(n3) {
    var i3 = ql(n3, 2), r3 = i3[0], a3 = i3[1];
    t2.embed.ratio = [r3, a3], vu.call(e2);
  }), t2.embed.setAutopause(t2.config.autopause).then(function(e3) {
    t2.config.autopause = e3;
  }), t2.embed.getVideoTitle().then(function(n3) {
    t2.config.title = n3, Yu.setTitle.call(e2);
  }), t2.embed.getCurrentTime().then(function(e3) {
    f2 = e3, uu.call(t2, t2.media, "timeupdate");
  }), t2.embed.getDuration().then(function(e3) {
    t2.media.duration = e3, uu.call(t2, t2.media, "durationchange");
  }), t2.embed.getTextTracks().then(function(e3) {
    t2.media.textTracks = e3, Du.setup.call(t2);
  }), t2.embed.on("cuechange", function(e3) {
    var n3 = e3.cues, i3 = (void 0 === n3 ? [] : n3).map(function(e4) {
      return function(e5) {
        var t3 = document.createDocumentFragment(), n4 = document.createElement("div");
        return t3.appendChild(n4), n4.innerHTML = e5, t3.firstChild.innerText;
      }(e4.text);
    });
    Du.updateCues.call(t2, i3);
  }), t2.embed.on("loaded", function() {
    t2.embed.getPaused().then(function(e3) {
      Ju.call(t2, !e3), e3 || uu.call(t2, t2.media, "playing");
    }), Ic(t2.embed.element) && t2.supported.ui && t2.embed.element.setAttribute("tabindex", -1);
  }), t2.embed.on("bufferstart", function() {
    uu.call(t2, t2.media, "waiting");
  }), t2.embed.on("bufferend", function() {
    uu.call(t2, t2.media, "playing");
  }), t2.embed.on("play", function() {
    Ju.call(t2, true), uu.call(t2, t2.media, "playing");
  }), t2.embed.on("pause", function() {
    Ju.call(t2, false);
  }), t2.embed.on("timeupdate", function(e3) {
    t2.media.seeking = false, f2 = e3.seconds, uu.call(t2, t2.media, "timeupdate");
  }), t2.embed.on("progress", function(e3) {
    t2.media.buffered = e3.percent, uu.call(t2, t2.media, "progress"), 1 === parseInt(e3.percent, 10) && uu.call(t2, t2.media, "canplaythrough"), t2.embed.getDuration().then(function(e4) {
      e4 !== t2.media.duration && (t2.media.duration = e4, uu.call(t2, t2.media, "durationchange"));
    });
  }), t2.embed.on("seeked", function() {
    t2.media.seeking = false, uu.call(t2, t2.media, "seeked");
  }), t2.embed.on("ended", function() {
    t2.media.paused = true, uu.call(t2, t2.media, "ended");
  }), t2.embed.on("error", function(e3) {
    t2.media.error = e3, uu.call(t2, t2.media, "error");
  }), setTimeout(function() {
    return Yu.build.call(t2);
  }, 0);
} };
function eh(e2) {
  e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, uu.call(this, this.media, e2 ? "play" : "pause"));
}
function th(e2) {
  return e2.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
}
var nh = { setup: function() {
  var e2 = this;
  if (Qc(this.elements.wrapper, this.config.classNames.embed, true), Sc(window.YT) && Cc(window.YT.Player)) nh.ready.call(this);
  else {
    var t2 = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function() {
      Cc(t2) && t2(), nh.ready.call(e2);
    }, Qu(this.config.urls.youtube.sdk).catch(function(t3) {
      e2.debug.warn("YouTube API failed to load", t3);
    });
  }
}, getTitle: function(e2) {
  var t2 = this;
  Pu(wu(this.config.urls.youtube.api, e2)).then(function(e3) {
    if (Sc(e3)) {
      var n2 = e3.title, i2 = e3.height, r2 = e3.width;
      t2.config.title = n2, Yu.setTitle.call(t2), t2.embed.ratio = [r2, i2];
    }
    vu.call(t2);
  }).catch(function() {
    vu.call(t2);
  });
}, ready: function() {
  var e2 = this, t2 = e2.media && e2.media.getAttribute("id");
  if (_c(t2) || !t2.startsWith("youtube-")) {
    var n2 = e2.media.getAttribute("src");
    _c(n2) && (n2 = e2.media.getAttribute(this.config.attributes.embed.id));
    var i2 = function(e3) {
      return _c(e3) ? null : e3.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e3;
    }(n2), r2 = function(e3) {
      return "".concat(e3, "-").concat(Math.floor(1e4 * Math.random()));
    }(e2.provider), a2 = zc("div", { id: r2, "data-poster": e2.poster });
    e2.media = Yc(a2, e2.media);
    var o2 = function(e3) {
      return "https://i.ytimg.com/vi/".concat(i2, "/").concat(e3, "default.jpg");
    };
    Ku(o2("maxres"), 121).catch(function() {
      return Ku(o2("sd"), 121);
    }).catch(function() {
      return Ku(o2("hq"));
    }).then(function(t3) {
      return Yu.setPoster.call(e2, t3.src);
    }).then(function(t3) {
      t3.includes("maxres") || (e2.elements.poster.style.backgroundSize = "cover");
    }).catch(function() {
    });
    var s2 = e2.config.youtube;
    e2.embed = new window.YT.Player(r2, { videoId: i2, host: th(s2), playerVars: Hc({}, { autoplay: e2.config.autoplay ? 1 : 0, hl: e2.config.hl, controls: e2.supported.ui ? 0 : 1, disablekb: 1, playsinline: e2.config.fullscreen.iosNative ? 0 : 1, cc_load_policy: e2.captions.active ? 1 : 0, cc_lang_pref: e2.config.captions.language, widget_referrer: window ? window.location.href : null }, s2), events: { onError: function(t3) {
      if (!e2.media.error) {
        var n3 = t3.data, i3 = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[n3] || "An unknown error occured";
        e2.media.error = { code: n3, message: i3 }, uu.call(e2, e2.media, "error");
      }
    }, onPlaybackRateChange: function(t3) {
      var n3 = t3.target;
      e2.media.playbackRate = n3.getPlaybackRate(), uu.call(e2, e2.media, "ratechange");
    }, onReady: function(t3) {
      if (!Cc(e2.media.play)) {
        var n3 = t3.target;
        nh.getTitle.call(e2, i2), e2.media.play = function() {
          eh.call(e2, true), n3.playVideo();
        }, e2.media.pause = function() {
          eh.call(e2, false), n3.pauseVideo();
        }, e2.media.stop = function() {
          n3.stopVideo();
        }, e2.media.duration = n3.getDuration(), e2.media.paused = true, e2.media.currentTime = 0, Object.defineProperty(e2.media, "currentTime", { get: function() {
          return Number(n3.getCurrentTime());
        }, set: function(t4) {
          e2.paused && !e2.embed.hasPlayed && e2.embed.mute(), e2.media.seeking = true, uu.call(e2, e2.media, "seeking"), n3.seekTo(t4);
        } }), Object.defineProperty(e2.media, "playbackRate", { get: function() {
          return n3.getPlaybackRate();
        }, set: function(e3) {
          n3.setPlaybackRate(e3);
        } });
        var r3 = e2.config.volume;
        Object.defineProperty(e2.media, "volume", { get: function() {
          return r3;
        }, set: function(t4) {
          r3 = t4, n3.setVolume(100 * r3), uu.call(e2, e2.media, "volumechange");
        } });
        var a3 = e2.config.muted;
        Object.defineProperty(e2.media, "muted", { get: function() {
          return a3;
        }, set: function(t4) {
          var i3 = xc(t4) ? t4 : a3;
          a3 = i3, n3[i3 ? "mute" : "unMute"](), uu.call(e2, e2.media, "volumechange");
        } }), Object.defineProperty(e2.media, "currentSrc", { get: function() {
          return n3.getVideoUrl();
        } }), Object.defineProperty(e2.media, "ended", { get: function() {
          return e2.currentTime === e2.duration;
        } });
        var o3 = n3.getAvailablePlaybackRates();
        e2.options.speed = o3.filter(function(t4) {
          return e2.config.speed.options.includes(t4);
        }), e2.supported.ui && e2.media.setAttribute("tabindex", -1), uu.call(e2, e2.media, "timeupdate"), uu.call(e2, e2.media, "durationchange"), clearInterval(e2.timers.buffering), e2.timers.buffering = setInterval(function() {
          e2.media.buffered = n3.getVideoLoadedFraction(), (null === e2.media.lastBuffered || e2.media.lastBuffered < e2.media.buffered) && uu.call(e2, e2.media, "progress"), e2.media.lastBuffered = e2.media.buffered, 1 === e2.media.buffered && (clearInterval(e2.timers.buffering), uu.call(e2, e2.media, "canplaythrough"));
        }, 200), setTimeout(function() {
          return Yu.build.call(e2);
        }, 50);
      }
    }, onStateChange: function(t3) {
      var n3 = t3.target;
      switch (clearInterval(e2.timers.playing), e2.media.seeking && [1, 2].includes(t3.data) && (e2.media.seeking = false, uu.call(e2, e2.media, "seeked")), t3.data) {
        case -1:
          uu.call(e2, e2.media, "timeupdate"), e2.media.buffered = n3.getVideoLoadedFraction(), uu.call(e2, e2.media, "progress");
          break;
        case 0:
          eh.call(e2, false), e2.media.loop ? (n3.stopVideo(), n3.playVideo()) : uu.call(e2, e2.media, "ended");
          break;
        case 1:
          e2.config.autoplay || !e2.media.paused || e2.embed.hasPlayed ? (eh.call(e2, true), uu.call(e2, e2.media, "playing"), e2.timers.playing = setInterval(function() {
            uu.call(e2, e2.media, "timeupdate");
          }, 50), e2.media.duration !== n3.getDuration() && (e2.media.duration = n3.getDuration(), uu.call(e2, e2.media, "durationchange"))) : e2.media.pause();
          break;
        case 2:
          e2.muted || e2.embed.unMute(), eh.call(e2, false);
          break;
        case 3:
          uu.call(e2, e2.media, "waiting");
      }
      uu.call(e2, e2.elements.container, "statechange", false, { code: t3.data });
    } } });
  }
} };
var ih = { setup: function() {
  this.media ? (Qc(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), Qc(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && Qc(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.isVideo && (this.elements.wrapper = zc("div", { class: this.config.classNames.video }), Bc(this.media, this.elements.wrapper), this.elements.poster = zc("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? yu.setup.call(this) : this.isYouTube ? nh.setup.call(this) : this.isVimeo && Zu.setup.call(this)) : this.debug.warn("No media element found!");
} };
var rh = function() {
  function e2(t2) {
    var n2 = this;
    Nl(this, e2), this.player = t2, this.config = t2.config.ads, this.playing = false, this.initialized = false, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function(e3, t3) {
      n2.on("loaded", e3), n2.on("error", t3);
    }), this.load();
  }
  return jl(e2, [{ key: "load", value: function() {
    var e3 = this;
    this.enabled && (Sc(window.google) && Sc(window.google.ima) ? this.ready() : Qu(this.player.config.urls.googleIMA.sdk).then(function() {
      e3.ready();
    }).catch(function() {
      e3.trigger("error", new Error("Google IMA SDK failed to load"));
    }));
  } }, { key: "ready", value: function() {
    var e3 = this;
    this.enabled || function(e4) {
      e4.manager && e4.manager.destroy(), e4.elements.displayContainer && e4.elements.displayContainer.destroy(), e4.elements.container.remove();
    }(this), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function() {
      e3.clearSafetyTimer("onAdsManagerLoaded()");
    }), this.listeners(), this.setupIMA();
  } }, { key: "setupIMA", value: function() {
    var e3 = this;
    this.elements.container = zc("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(t2) {
      return e3.onAdsManagerLoaded(t2);
    }, false), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(t2) {
      return e3.onAdError(t2);
    }, false), this.requestAds();
  } }, { key: "requestAds", value: function() {
    var e3 = this.player.elements.container;
    try {
      var t2 = new google.ima.AdsRequest();
      t2.adTagUrl = this.tagUrl, t2.linearAdSlotWidth = e3.offsetWidth, t2.linearAdSlotHeight = e3.offsetHeight, t2.nonLinearAdSlotWidth = e3.offsetWidth, t2.nonLinearAdSlotHeight = e3.offsetHeight, t2.forceNonLinearFullSlot = false, t2.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t2);
    } catch (e4) {
      this.onAdError(e4);
    }
  } }, { key: "pollCountdown", value: function() {
    var e3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!t2) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
    var n2 = function() {
      var t3 = Mu(Math.max(e3.manager.getRemainingTime(), 0)), n3 = "".concat(xu("advertisement", e3.player.config), " - ").concat(t3);
      e3.elements.container.setAttribute("data-badge-text", n3);
    };
    this.countdownTimer = setInterval(n2, 100);
  } }, { key: "onAdsManagerLoaded", value: function(e3) {
    var t2 = this;
    if (this.enabled) {
      var n2 = new google.ima.AdsRenderingSettings();
      n2.restoreCustomPlaybackStateOnAdBreakComplete = true, n2.enablePreloading = true, this.manager = e3.getAdsManager(this.player, n2), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(e4) {
        return t2.onAdError(e4);
      }), Object.keys(google.ima.AdEvent.Type).forEach(function(e4) {
        t2.manager.addEventListener(google.ima.AdEvent.Type[e4], function(e5) {
          return t2.onAdEvent(e5);
        });
      }), this.trigger("loaded");
    }
  } }, { key: "addCuePoints", value: function() {
    var e3 = this;
    _c(this.cuePoints) || this.cuePoints.forEach(function(t2) {
      if (0 !== t2 && -1 !== t2 && t2 < e3.player.duration) {
        var n2 = e3.player.elements.progress;
        if (Ic(n2)) {
          var i2 = 100 / e3.player.duration * t2, r2 = zc("span", { class: e3.player.config.classNames.cues });
          r2.style.left = "".concat(i2.toString(), "%"), n2.appendChild(r2);
        }
      }
    });
  } }, { key: "onAdEvent", value: function(e3) {
    var t2, n2 = this.player.elements.container, i2 = e3.getAd(), r2 = e3.getAdData();
    switch (t2 = e3.type, uu.call(this.player, this.player.media, "ads".concat(t2.replace(/_/g, "").toLowerCase())), e3.type) {
      case google.ima.AdEvent.Type.LOADED:
        this.trigger("loaded"), this.pollCountdown(true), i2.isLinear() || (i2.width = n2.offsetWidth, i2.height = n2.offsetHeight);
        break;
      case google.ima.AdEvent.Type.STARTED:
        this.manager.setVolume(this.player.volume);
        break;
      case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
        this.player.ended ? this.loadAds() : this.loader.contentComplete();
        break;
      case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
        this.pauseContent();
        break;
      case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
        this.pollCountdown(), this.resumeContent();
        break;
      case google.ima.AdEvent.Type.LOG:
        r2.adError && this.player.debug.warn("Non-fatal ad error: ".concat(r2.adError.getMessage()));
    }
  } }, { key: "onAdError", value: function(e3) {
    this.cancel(), this.player.debug.warn("Ads error", e3);
  } }, { key: "listeners", value: function() {
    var e3, t2 = this, n2 = this.player.elements.container;
    this.player.on("canplay", function() {
      t2.addCuePoints();
    }), this.player.on("ended", function() {
      t2.loader.contentComplete();
    }), this.player.on("timeupdate", function() {
      e3 = t2.player.currentTime;
    }), this.player.on("seeked", function() {
      var n3 = t2.player.currentTime;
      _c(t2.cuePoints) || t2.cuePoints.forEach(function(i2, r2) {
        e3 < i2 && i2 < n3 && (t2.manager.discardAdBreak(), t2.cuePoints.splice(r2, 1));
      });
    }), window.addEventListener("resize", function() {
      t2.manager && t2.manager.resize(n2.offsetWidth, n2.offsetHeight, google.ima.ViewMode.NORMAL);
    });
  } }, { key: "play", value: function() {
    var e3 = this, t2 = this.player.elements.container;
    this.managerPromise || this.resumeContent(), this.managerPromise.then(function() {
      e3.manager.setVolume(e3.player.volume), e3.elements.displayContainer.initialize();
      try {
        e3.initialized || (e3.manager.init(t2.offsetWidth, t2.offsetHeight, google.ima.ViewMode.NORMAL), e3.manager.start()), e3.initialized = true;
      } catch (t3) {
        e3.onAdError(t3);
      }
    }).catch(function() {
    });
  } }, { key: "resumeContent", value: function() {
    this.elements.container.style.zIndex = "", this.playing = false, fu(this.player.media.play());
  } }, { key: "pauseContent", value: function() {
    this.elements.container.style.zIndex = 3, this.playing = true, this.player.media.pause();
  } }, { key: "cancel", value: function() {
    this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
  } }, { key: "loadAds", value: function() {
    var e3 = this;
    this.managerPromise.then(function() {
      e3.manager && e3.manager.destroy(), e3.managerPromise = new Promise(function(t2) {
        e3.on("loaded", t2), e3.player.debug.log(e3.manager);
      }), e3.initialized = false, e3.requestAds();
    }).catch(function() {
    });
  } }, { key: "trigger", value: function(e3) {
    for (var t2 = this, n2 = arguments.length, i2 = new Array(n2 > 1 ? n2 - 1 : 0), r2 = 1; r2 < n2; r2++) i2[r2 - 1] = arguments[r2];
    var a2 = this.events[e3];
    Pc(a2) && a2.forEach(function(e4) {
      Cc(e4) && e4.apply(t2, i2);
    });
  } }, { key: "on", value: function(e3, t2) {
    return Pc(this.events[e3]) || (this.events[e3] = []), this.events[e3].push(t2), this;
  } }, { key: "startSafetyTimer", value: function(e3, t2) {
    var n2 = this;
    this.player.debug.log("Safety timer invoked from: ".concat(t2)), this.safetyTimer = setTimeout(function() {
      n2.cancel(), n2.clearSafetyTimer("startSafetyTimer()");
    }, e3);
  } }, { key: "clearSafetyTimer", value: function(e3) {
    Tc(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e3)), clearTimeout(this.safetyTimer), this.safetyTimer = null);
  } }, { key: "enabled", get: function() {
    var e3 = this.config;
    return this.player.isHTML5 && this.player.isVideo && e3.enabled && (!_c(e3.publisherId) || Rc(e3.tagUrl));
  } }, { key: "tagUrl", get: function() {
    var e3 = this.config;
    if (Rc(e3.tagUrl)) return e3.tagUrl;
    var t2 = { AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: e3.publisherId };
    return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(_u(t2));
  } }]), e2;
}();
var ah = function(e2) {
  var t2 = [];
  return e2.split(/\r\n\r\n|\n\n|\r\r/).forEach(function(e3) {
    var n2 = {};
    e3.split(/\r\n|\n|\r/).forEach(function(e4) {
      if (Ec(n2.startTime)) {
        if (!_c(e4.trim()) && _c(n2.text)) {
          var t3 = e4.trim().split("#xywh="), i2 = ql(t3, 1);
          if (n2.text = i2[0], t3[1]) {
            var r2 = ql(t3[1].split(","), 4);
            n2.x = r2[0], n2.y = r2[1], n2.w = r2[2], n2.h = r2[3];
          }
        }
      } else {
        var a2 = e4.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
        a2 && (n2.startTime = 60 * Number(a2[1] || 0) * 60 + 60 * Number(a2[2]) + Number(a2[3]) + Number("0.".concat(a2[4])), n2.endTime = 60 * Number(a2[6] || 0) * 60 + 60 * Number(a2[7]) + Number(a2[8]) + Number("0.".concat(a2[9])));
      }
    }), n2.text && t2.push(n2);
  }), t2;
};
var oh = function(e2, t2) {
  var n2 = {};
  return e2 > t2.width / t2.height ? (n2.width = t2.width, n2.height = 1 / e2 * t2.width) : (n2.height = t2.height, n2.width = e2 * t2.height), n2;
};
var sh = function() {
  function e2(t2) {
    Nl(this, e2), this.player = t2, this.thumbnails = [], this.loaded = false, this.lastMouseMoveTime = Date.now(), this.mouseDown = false, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load();
  }
  return jl(e2, [{ key: "load", value: function() {
    var e3 = this;
    this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(function() {
      e3.enabled && (e3.render(), e3.determineContainerAutoSizing(), e3.loaded = true);
    });
  } }, { key: "getThumbnails", value: function() {
    var e3 = this;
    return new Promise(function(t2) {
      var n2 = e3.player.config.previewThumbnails.src;
      if (_c(n2)) throw new Error("Missing previewThumbnails.src config attribute");
      var i2 = function() {
        e3.thumbnails.sort(function(e4, t3) {
          return e4.height - t3.height;
        }), e3.player.debug.log("Preview thumbnails", e3.thumbnails), t2();
      };
      if (Cc(n2)) n2(function(t3) {
        e3.thumbnails = t3, i2();
      });
      else {
        var r2 = (Ac(n2) ? [n2] : n2).map(function(t3) {
          return e3.getThumbnail(t3);
        });
        Promise.all(r2).then(i2);
      }
    });
  } }, { key: "getThumbnail", value: function(e3) {
    var t2 = this;
    return new Promise(function(n2) {
      Pu(e3).then(function(i2) {
        var r2 = { frames: ah(i2), height: null, urlPrefix: "" };
        r2.frames[0].text.startsWith("/") || r2.frames[0].text.startsWith("http://") || r2.frames[0].text.startsWith("https://") || (r2.urlPrefix = e3.substring(0, e3.lastIndexOf("/") + 1));
        var a2 = new Image();
        a2.onload = function() {
          r2.height = a2.naturalHeight, r2.width = a2.naturalWidth, t2.thumbnails.push(r2), n2();
        }, a2.src = r2.urlPrefix + r2.frames[0].text;
      });
    });
  } }, { key: "startMove", value: function(e3) {
    if (this.loaded && Lc(e3) && ["touchmove", "mousemove"].includes(e3.type) && this.player.media.duration) {
      if ("touchmove" === e3.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
      else {
        var t2 = this.player.elements.progress.getBoundingClientRect(), n2 = 100 / t2.width * (e3.pageX - t2.left);
        this.seekTime = this.player.media.duration * (n2 / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e3.pageX, this.elements.thumb.time.innerText = Mu(this.seekTime);
      }
      this.showImageAtCurrentTime();
    }
  } }, { key: "endMove", value: function() {
    this.toggleThumbContainer(false, true);
  } }, { key: "startScrubbing", value: function(e3) {
    (Tc(e3.button) || false === e3.button || 0 === e3.button) && (this.mouseDown = true, this.player.media.duration && (this.toggleScrubbingContainer(true), this.toggleThumbContainer(false, true), this.showImageAtCurrentTime()));
  } }, { key: "endScrubbing", value: function() {
    var e3 = this;
    this.mouseDown = false, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(false) : cu.call(this.player, this.player.media, "timeupdate", function() {
      e3.mouseDown || e3.toggleScrubbingContainer(false);
    });
  } }, { key: "listeners", value: function() {
    var e3 = this;
    this.player.on("play", function() {
      e3.toggleThumbContainer(false, true);
    }), this.player.on("seeked", function() {
      e3.toggleThumbContainer(false);
    }), this.player.on("timeupdate", function() {
      e3.lastTime = e3.player.media.currentTime;
    });
  } }, { key: "render", value: function() {
    this.elements.thumb.container = zc("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = zc("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
    var e3 = zc("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
    this.elements.thumb.time = zc("span", {}, "00:00"), e3.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e3), Ic(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = zc("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
  } }, { key: "destroy", value: function() {
    this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
  } }, { key: "showImageAtCurrentTime", value: function() {
    var e3 = this;
    this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
    var t2 = this.thumbnails[0].frames.findIndex(function(t3) {
      return e3.seekTime >= t3.startTime && e3.seekTime <= t3.endTime;
    }), n2 = t2 >= 0, i2 = 0;
    this.mouseDown || this.toggleThumbContainer(n2), n2 && (this.thumbnails.forEach(function(n3, r2) {
      e3.loadedImages.includes(n3.frames[t2].text) && (i2 = r2);
    }), t2 !== this.showingThumb && (this.showingThumb = t2, this.loadImage(i2)));
  } }, { key: "loadImage", value: function() {
    var e3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n2 = this.showingThumb, i2 = this.thumbnails[t2], r2 = i2.urlPrefix, a2 = i2.frames[n2], o2 = i2.frames[n2].text, s2 = r2 + o2;
    if (this.currentImageElement && this.currentImageElement.dataset.filename === o2) this.showImage(this.currentImageElement, a2, t2, n2, o2, false), this.currentImageElement.dataset.index = n2, this.removeOldImages(this.currentImageElement);
    else {
      this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
      var l2 = new Image();
      l2.src = s2, l2.dataset.index = n2, l2.dataset.filename = o2, this.showingThumbFilename = o2, this.player.debug.log("Loading image: ".concat(s2)), l2.onload = function() {
        return e3.showImage(l2, a2, t2, n2, o2, true);
      }, this.loadingImage = l2, this.removeOldImages(l2);
    }
  } }, { key: "showImage", value: function(e3, t2, n2, i2, r2) {
    var a2 = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
    this.player.debug.log("Showing thumb: ".concat(r2, ". num: ").concat(i2, ". qual: ").concat(n2, ". newimg: ").concat(a2)), this.setImageSizeAndOffset(e3, t2), a2 && (this.currentImageContainer.appendChild(e3), this.currentImageElement = e3, this.loadedImages.includes(r2) || this.loadedImages.push(r2)), this.preloadNearby(i2, true).then(this.preloadNearby(i2, false)).then(this.getHigherQuality(n2, e3, t2, r2));
  } }, { key: "removeOldImages", value: function(e3) {
    var t2 = this;
    Array.from(this.currentImageContainer.children).forEach(function(n2) {
      if ("img" === n2.tagName.toLowerCase()) {
        var i2 = t2.usingSprites ? 500 : 1e3;
        if (n2.dataset.index !== e3.dataset.index && !n2.dataset.deleting) {
          n2.dataset.deleting = true;
          var r2 = t2.currentImageContainer;
          setTimeout(function() {
            r2.removeChild(n2), t2.player.debug.log("Removing thumb: ".concat(n2.dataset.filename));
          }, i2);
        }
      }
    });
  } }, { key: "preloadNearby", value: function(e3) {
    var t2 = this, n2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return new Promise(function(i2) {
      setTimeout(function() {
        var r2 = t2.thumbnails[0].frames[e3].text;
        if (t2.showingThumbFilename === r2) {
          var a2;
          a2 = n2 ? t2.thumbnails[0].frames.slice(e3) : t2.thumbnails[0].frames.slice(0, e3).reverse();
          var o2 = false;
          a2.forEach(function(e4) {
            var n3 = e4.text;
            if (n3 !== r2 && !t2.loadedImages.includes(n3)) {
              o2 = true, t2.player.debug.log("Preloading thumb filename: ".concat(n3));
              var a3 = t2.thumbnails[0].urlPrefix + n3, s2 = new Image();
              s2.src = a3, s2.onload = function() {
                t2.player.debug.log("Preloaded thumb filename: ".concat(n3)), t2.loadedImages.includes(n3) || t2.loadedImages.push(n3), i2();
              };
            }
          }), o2 || i2();
        }
      }, 300);
    });
  } }, { key: "getHigherQuality", value: function(e3, t2, n2, i2) {
    var r2 = this;
    if (e3 < this.thumbnails.length - 1) {
      var a2 = t2.naturalHeight;
      this.usingSprites && (a2 = n2.h), a2 < this.thumbContainerHeight && setTimeout(function() {
        r2.showingThumbFilename === i2 && (r2.player.debug.log("Showing higher quality thumb for: ".concat(i2)), r2.loadImage(e3 + 1));
      }, 300);
    }
  } }, { key: "toggleThumbContainer", value: function() {
    var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n2 = this.player.config.classNames.previewThumbnails.thumbContainerShown;
    this.elements.thumb.container.classList.toggle(n2, e3), !e3 && t2 && (this.showingThumb = null, this.showingThumbFilename = null);
  } }, { key: "toggleScrubbingContainer", value: function() {
    var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t2 = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
    this.elements.scrubbing.container.classList.toggle(t2, e3), e3 || (this.showingThumb = null, this.showingThumbFilename = null);
  } }, { key: "determineContainerAutoSizing", value: function() {
    (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = true);
  } }, { key: "setThumbContainerSizeAndPos", value: function() {
    if (this.sizeSpecifiedInCSS) {
      if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
        var e3 = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
        this.elements.thumb.imageContainer.style.width = "".concat(e3, "px");
      } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
        var t2 = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
        this.elements.thumb.imageContainer.style.height = "".concat(t2, "px");
      }
    } else {
      var n2 = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
      this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(n2, "px");
    }
    this.setThumbContainerPos();
  } }, { key: "setThumbContainerPos", value: function() {
    var e3 = this.player.elements.progress.getBoundingClientRect(), t2 = this.player.elements.container.getBoundingClientRect(), n2 = this.elements.thumb.container, i2 = t2.left - e3.left + 10, r2 = t2.right - e3.left - n2.clientWidth - 10, a2 = this.mousePosX - e3.left - n2.clientWidth / 2;
    a2 < i2 && (a2 = i2), a2 > r2 && (a2 = r2), n2.style.left = "".concat(a2, "px");
  } }, { key: "setScrubbingContainerSize", value: function() {
    var e3 = oh(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight }), t2 = e3.width, n2 = e3.height;
    this.elements.scrubbing.container.style.width = "".concat(t2, "px"), this.elements.scrubbing.container.style.height = "".concat(n2, "px");
  } }, { key: "setImageSizeAndOffset", value: function(e3, t2) {
    if (this.usingSprites) {
      var n2 = this.thumbContainerHeight / t2.h;
      e3.style.height = "".concat(e3.naturalHeight * n2, "px"), e3.style.width = "".concat(e3.naturalWidth * n2, "px"), e3.style.left = "-".concat(t2.x * n2, "px"), e3.style.top = "-".concat(t2.y * n2, "px");
    }
  } }, { key: "enabled", get: function() {
    return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
  } }, { key: "currentImageContainer", get: function() {
    return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
  } }, { key: "usingSprites", get: function() {
    return Object.keys(this.thumbnails[0].frames[0]).includes("w");
  } }, { key: "thumbAspectRatio", get: function() {
    return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
  } }, { key: "thumbContainerHeight", get: function() {
    return this.mouseDown ? oh(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
  } }, { key: "currentImageElement", get: function() {
    return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
  }, set: function(e3) {
    this.mouseDown ? this.currentScrubbingImageElement = e3 : this.currentThumbnailImageElement = e3;
  } }]), e2;
}();
var lh = { insertElements: function(e2, t2) {
  var n2 = this;
  Ac(t2) ? Wc(e2, this.media, { src: t2 }) : Pc(t2) && t2.forEach(function(t3) {
    Wc(e2, n2.media, t3);
  });
}, change: function(e2) {
  var t2 = this;
  Uc(e2, "sources.length") ? (yu.cancelRequests.call(this), this.destroy.call(this, function() {
    t2.options.quality = [], $c(t2.media), t2.media = null, Ic(t2.elements.container) && t2.elements.container.removeAttribute("class");
    var n2 = e2.sources, i2 = e2.type, r2 = ql(n2, 1)[0], a2 = r2.provider, o2 = void 0 === a2 ? Hu.html5 : a2, s2 = r2.src, l2 = "html5" === o2 ? i2 : "div", c2 = "html5" === o2 ? {} : { src: s2 };
    Object.assign(t2, { provider: o2, type: i2, supported: ru.check(i2, o2, t2.config.playsinline), media: zc(l2, c2) }), t2.elements.container.appendChild(t2.media), xc(e2.autoplay) && (t2.config.autoplay = e2.autoplay), t2.isHTML5 && (t2.config.crossorigin && t2.media.setAttribute("crossorigin", ""), t2.config.autoplay && t2.media.setAttribute("autoplay", ""), _c(e2.poster) || (t2.poster = e2.poster), t2.config.loop.active && t2.media.setAttribute("loop", ""), t2.config.muted && t2.media.setAttribute("muted", ""), t2.config.playsinline && t2.media.setAttribute("playsinline", "")), Yu.addStyleHook.call(t2), t2.isHTML5 && lh.insertElements.call(t2, "source", n2), t2.config.title = e2.title, ih.setup.call(t2), t2.isHTML5 && Object.keys(e2).includes("tracks") && lh.insertElements.call(t2, "track", e2.tracks), (t2.isHTML5 || t2.isEmbed && !t2.supported.ui) && Yu.build.call(t2), t2.isHTML5 && t2.media.load(), _c(e2.previewThumbnails) || (Object.assign(t2.config.previewThumbnails, e2.previewThumbnails), t2.previewThumbnails && t2.previewThumbnails.loaded && (t2.previewThumbnails.destroy(), t2.previewThumbnails = null), t2.config.previewThumbnails.enabled && (t2.previewThumbnails = new sh(t2))), t2.fullscreen.update();
  }, true)) : this.debug.warn("Invalid source format");
} };
var ch = function() {
  function e2(t2, n2) {
    var i2 = this;
    if (Nl(this, e2), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = ru.touch, this.media = t2, Ac(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || Oc(this.media) || Pc(this.media)) && (this.media = this.media[0]), this.config = Hc({}, Fu, e2.defaults, n2 || {}, function() {
      try {
        return JSON.parse(i2.media.getAttribute("data-plyr-config"));
      } catch (e3) {
        return {};
      }
    }()), this.elements = { container: null, fullscreen: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: /* @__PURE__ */ new WeakMap() }, this.fullscreen = { active: false }, this.options = { speed: [], quality: [] }, this.debug = new Wu(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", ru), !Tc(this.media) && Ic(this.media)) if (this.media.plyr) this.debug.warn("Target already setup");
    else if (this.config.enabled) if (ru.check().api) {
      var r2 = this.media.cloneNode(true);
      r2.autoplay = false, this.elements.original = r2;
      var a2 = this.media.tagName.toLowerCase(), o2 = null, s2 = null;
      switch (a2) {
        case "div":
          if (o2 = this.media.querySelector("iframe"), Ic(o2)) {
            if (s2 = Ru(o2.getAttribute("src")), this.provider = function(e3) {
              return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e3) ? Hu.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e3) ? Hu.vimeo : null;
            }(s2.toString()), this.elements.container = this.media, this.media = o2, this.elements.container.className = "", s2.search.length) {
              var l2 = ["1", "true"];
              l2.includes(s2.searchParams.get("autoplay")) && (this.config.autoplay = true), l2.includes(s2.searchParams.get("loop")) && (this.config.loop.active = true), this.isYouTube ? (this.config.playsinline = l2.includes(s2.searchParams.get("playsinline")), this.config.youtube.hl = s2.searchParams.get("hl")) : this.config.playsinline = true;
            }
          } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
          if (_c(this.provider) || !Object.keys(Hu).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
          this.type = Vu;
          break;
        case "video":
        case "audio":
          this.type = a2, this.provider = Hu.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = true), this.media.hasAttribute("autoplay") && (this.config.autoplay = true), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = true), this.media.hasAttribute("muted") && (this.config.muted = true), this.media.hasAttribute("loop") && (this.config.loop.active = true);
          break;
        default:
          return void this.debug.error("Setup failed: unsupported type");
      }
      this.supported = ru.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Gu(this), this.storage = new Cu(this), this.media.plyr = this, Ic(this.elements.container) || (this.elements.container = zc("div", { tabindex: 0 }), Bc(this.media, this.elements.container)), Yu.migrateStyles.call(this), Yu.addStyleHook.call(this), ih.setup.call(this), this.config.debug && su.call(this, this.elements.container, this.config.events.join(" "), function(e3) {
        i2.debug.log("event: ".concat(e3.type));
      }), this.fullscreen = new $u(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Yu.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new rh(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", function() {
        return fu(i2.play());
      }), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new sh(this))) : this.debug.error("Setup failed: no support");
    } else this.debug.error("Setup failed: no support");
    else this.debug.error("Setup failed: disabled by config");
    else this.debug.error("Setup failed: no suitable element passed");
  }
  return jl(e2, [{ key: "play", value: function() {
    var e3 = this;
    return Cc(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(function() {
      return e3.ads.play();
    }).catch(function() {
      return fu(e3.media.play());
    }), this.media.play()) : null;
  } }, { key: "pause", value: function() {
    return this.playing && Cc(this.media.pause) ? this.media.pause() : null;
  } }, { key: "togglePlay", value: function(e3) {
    return (xc(e3) ? e3 : !this.playing) ? this.play() : this.pause();
  } }, { key: "stop", value: function() {
    this.isHTML5 ? (this.pause(), this.restart()) : Cc(this.media.stop) && this.media.stop();
  } }, { key: "restart", value: function() {
    this.currentTime = 0;
  } }, { key: "rewind", value: function(e3) {
    this.currentTime -= Ec(e3) ? e3 : this.config.seekTime;
  } }, { key: "forward", value: function(e3) {
    this.currentTime += Ec(e3) ? e3 : this.config.seekTime;
  } }, { key: "increaseVolume", value: function(e3) {
    var t2 = this.media.muted ? 0 : this.volume;
    this.volume = t2 + (Ec(e3) ? e3 : 0);
  } }, { key: "decreaseVolume", value: function(e3) {
    this.increaseVolume(-e3);
  } }, { key: "toggleCaptions", value: function(e3) {
    Du.toggle.call(this, e3, false);
  } }, { key: "airplay", value: function() {
    ru.airplay && this.media.webkitShowPlaybackTargetPicker();
  } }, { key: "toggleControls", value: function(e3) {
    if (this.supported.ui && !this.isAudio) {
      var t2 = Jc(this.elements.container, this.config.classNames.hideControls), n2 = void 0 === e3 ? void 0 : !e3, i2 = Qc(this.elements.container, this.config.classNames.hideControls, n2);
      if (i2 && Pc(this.config.controls) && this.config.controls.includes("settings") && !_c(this.config.settings) && ju.toggleMenu.call(this, false), i2 !== t2) {
        var r2 = i2 ? "controlshidden" : "controlsshown";
        uu.call(this, this.media, r2);
      }
      return !i2;
    }
    return false;
  } }, { key: "on", value: function(e3, t2) {
    su.call(this, this.elements.container, e3, t2);
  } }, { key: "once", value: function(e3, t2) {
    cu.call(this, this.elements.container, e3, t2);
  } }, { key: "off", value: function(e3, t2) {
    lu(this.elements.container, e3, t2);
  } }, { key: "destroy", value: function(e3) {
    var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this.ready) {
      var i2 = function() {
        document.body.style.overflow = "", t2.embed = null, n2 ? (Object.keys(t2.elements).length && ($c(t2.elements.buttons.play), $c(t2.elements.captions), $c(t2.elements.controls), $c(t2.elements.wrapper), t2.elements.buttons.play = null, t2.elements.captions = null, t2.elements.controls = null, t2.elements.wrapper = null), Cc(e3) && e3()) : (hu.call(t2), yu.cancelRequests.call(t2), Yc(t2.elements.original, t2.elements.container), uu.call(t2, t2.elements.original, "destroyed", true), Cc(e3) && e3.call(t2.elements.original), t2.ready = false, setTimeout(function() {
          t2.elements = null, t2.media = null;
        }, 200));
      };
      this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (Yu.toggleNativeControls.call(this, true), i2()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && Cc(this.embed.destroy) && this.embed.destroy(), i2()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i2), setTimeout(i2, 200));
    }
  } }, { key: "supports", value: function(e3) {
    return ru.mime.call(this, e3);
  } }, { key: "isHTML5", get: function() {
    return this.provider === Hu.html5;
  } }, { key: "isEmbed", get: function() {
    return this.isYouTube || this.isVimeo;
  } }, { key: "isYouTube", get: function() {
    return this.provider === Hu.youtube;
  } }, { key: "isVimeo", get: function() {
    return this.provider === Hu.vimeo;
  } }, { key: "isVideo", get: function() {
    return this.type === Vu;
  } }, { key: "isAudio", get: function() {
    return this.type === Bu;
  } }, { key: "playing", get: function() {
    return Boolean(this.ready && !this.paused && !this.ended);
  } }, { key: "paused", get: function() {
    return Boolean(this.media.paused);
  } }, { key: "stopped", get: function() {
    return Boolean(this.paused && 0 === this.currentTime);
  } }, { key: "ended", get: function() {
    return Boolean(this.media.ended);
  } }, { key: "currentTime", set: function(e3) {
    if (this.duration) {
      var t2 = Ec(e3) && e3 > 0;
      this.media.currentTime = t2 ? Math.min(e3, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
    }
  }, get: function() {
    return Number(this.media.currentTime);
  } }, { key: "buffered", get: function() {
    var e3 = this.media.buffered;
    return Ec(e3) ? e3 : e3 && e3.length && this.duration > 0 ? e3.end(0) / this.duration : 0;
  } }, { key: "seeking", get: function() {
    return Boolean(this.media.seeking);
  } }, { key: "duration", get: function() {
    var e3 = parseFloat(this.config.duration), t2 = (this.media || {}).duration, n2 = Ec(t2) && t2 !== 1 / 0 ? t2 : 0;
    return e3 || n2;
  } }, { key: "volume", set: function(e3) {
    var t2 = e3;
    Ac(t2) && (t2 = Number(t2)), Ec(t2) || (t2 = this.storage.get("volume")), Ec(t2) || (t2 = this.config.volume), t2 > 1 && (t2 = 1), t2 < 0 && (t2 = 0), this.config.volume = t2, this.media.volume = t2, !_c(e3) && this.muted && t2 > 0 && (this.muted = false);
  }, get: function() {
    return Number(this.media.volume);
  } }, { key: "muted", set: function(e3) {
    var t2 = e3;
    xc(t2) || (t2 = this.storage.get("muted")), xc(t2) || (t2 = this.config.muted), this.config.muted = t2, this.media.muted = t2;
  }, get: function() {
    return Boolean(this.media.muted);
  } }, { key: "hasAudio", get: function() {
    return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
  } }, { key: "speed", set: function(e3) {
    var t2 = this, n2 = null;
    Ec(e3) && (n2 = e3), Ec(n2) || (n2 = this.storage.get("speed")), Ec(n2) || (n2 = this.config.speed.selected);
    var i2 = this.minimumSpeed, r2 = this.maximumSpeed;
    n2 = function() {
      var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
      return Math.min(Math.max(e4, t3), n3);
    }(n2, i2, r2), this.config.speed.selected = n2, setTimeout(function() {
      t2.media.playbackRate = n2;
    }, 0);
  }, get: function() {
    return Number(this.media.playbackRate);
  } }, { key: "minimumSpeed", get: function() {
    return this.isYouTube ? Math.min.apply(Math, Ul(this.options.speed)) : this.isVimeo ? 0.5 : 0.0625;
  } }, { key: "maximumSpeed", get: function() {
    return this.isYouTube ? Math.max.apply(Math, Ul(this.options.speed)) : this.isVimeo ? 2 : 16;
  } }, { key: "quality", set: function(e3) {
    var t2 = this.config.quality, n2 = this.options.quality;
    if (n2.length) {
      var i2 = [!_c(e3) && Number(e3), this.storage.get("quality"), t2.selected, t2.default].find(Ec), r2 = true;
      if (!n2.includes(i2)) {
        var a2 = function(e4, t3) {
          return Pc(e4) && e4.length ? e4.reduce(function(e5, n3) {
            return Math.abs(n3 - t3) < Math.abs(e5 - t3) ? n3 : e5;
          }) : null;
        }(n2, i2);
        this.debug.warn("Unsupported quality option: ".concat(i2, ", using ").concat(a2, " instead")), i2 = a2, r2 = false;
      }
      t2.selected = i2, this.media.quality = i2, r2 && this.storage.set({ quality: i2 });
    }
  }, get: function() {
    return this.media.quality;
  } }, { key: "loop", set: function(e3) {
    var t2 = xc(e3) ? e3 : this.config.loop.active;
    this.config.loop.active = t2, this.media.loop = t2;
  }, get: function() {
    return Boolean(this.media.loop);
  } }, { key: "source", set: function(e3) {
    lh.change.call(this, e3);
  }, get: function() {
    return this.media.currentSrc;
  } }, { key: "download", get: function() {
    var e3 = this.config.urls.download;
    return Rc(e3) ? e3 : this.source;
  }, set: function(e3) {
    Rc(e3) && (this.config.urls.download = e3, ju.setDownloadUrl.call(this));
  } }, { key: "poster", set: function(e3) {
    this.isVideo ? Yu.setPoster.call(this, e3, false).catch(function() {
    }) : this.debug.warn("Poster can only be set for video");
  }, get: function() {
    return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
  } }, { key: "ratio", get: function() {
    if (!this.isVideo) return null;
    var e3 = mu(gu.call(this));
    return Pc(e3) ? e3.join(":") : e3;
  }, set: function(e3) {
    this.isVideo ? Ac(e3) && pu(e3) ? (this.config.ratio = e3, vu.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e3, ")")) : this.debug.warn("Aspect ratio can only be set for video");
  } }, { key: "autoplay", set: function(e3) {
    var t2 = xc(e3) ? e3 : this.config.autoplay;
    this.config.autoplay = t2;
  }, get: function() {
    return Boolean(this.config.autoplay);
  } }, { key: "currentTrack", set: function(e3) {
    Du.set.call(this, e3, false);
  }, get: function() {
    var e3 = this.captions, t2 = e3.toggled, n2 = e3.currentTrack;
    return t2 ? n2 : -1;
  } }, { key: "language", set: function(e3) {
    Du.setLanguage.call(this, e3, false);
  }, get: function() {
    return (Du.getCurrentTrack.call(this) || {}).language;
  } }, { key: "pip", set: function(e3) {
    if (ru.pip) {
      var t2 = xc(e3) ? e3 : !this.pip;
      Cc(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t2 ? qu : Uu), Cc(this.media.requestPictureInPicture) && (!this.pip && t2 ? this.media.requestPictureInPicture() : this.pip && !t2 && document.exitPictureInPicture());
    }
  }, get: function() {
    return ru.pip ? _c(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === qu : null;
  } }], [{ key: "supported", value: function(e3, t2, n2) {
    return ru.check(e3, t2, n2);
  } }, { key: "loadSprite", value: function(e3, t2) {
    return Ou(e3, t2);
  } }, { key: "setup", value: function(t2) {
    var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = null;
    return Ac(t2) ? i2 = Array.from(document.querySelectorAll(t2)) : Oc(t2) ? i2 = Array.from(t2) : Pc(t2) && (i2 = t2.filter(Ic)), _c(i2) ? null : i2.map(function(t3) {
      return new e2(t3, n2);
    });
  } }]), e2;
}();
ch.defaults = function(e2) {
  return JSON.parse(JSON.stringify(e2));
}(Fu);
var uh = { name: "VuePlyr", props: { options: { type: Object, required: false, default: function() {
  return {};
} } }, data: function() {
  return { player: {} };
}, computed: { opts: function() {
  var e2 = this.options;
  return Object.prototype.hasOwnProperty.call(this.options, "hideYouTubeDOMError") || (e2.hideYouTubeDOMError = true), e2;
} }, mounted: function() {
  this.player = new ch(this.$el, this.opts);
}, beforeUnmount: function() {
  try {
    this.player.destroy();
  } catch (e2) {
    this.opts.hideYouTubeDOMError && "The YouTube player is not attached to the DOM." === e2.message || console.error(e2);
  }
}, render: function() {
  var e2 = this.$slots.default;
  return "function" == typeof e2 ? e2()[0] : e2;
}, install: function(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  t2.plyr && (uh.props.options.default = function() {
    return kn({}, t2.plyr);
  }), e2.component(uh.name, uh);
} };
var vue_plyr_esm_default = uh;
export {
  vue_plyr_esm_default as default
};
//# sourceMappingURL=vue-plyr.js.map
