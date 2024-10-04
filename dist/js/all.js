"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (ie, e) {
  "use strict";

  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat ? function (e) {
      return oe.flat.call(e);
    } : function (e) {
      return oe.concat.apply([], e);
    },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function v(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    y = function y(e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (o.text = e, t) for (r in u) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[i.call(e)] || "object" : _typeof(e);
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function ce(e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  ce.fn = ce.prototype = {
    jquery: t,
    constructor: ce,
    length: 0,
    toArray: function toArray() {
      return ae.call(this);
    },
    get: function get(e) {
      return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = ce.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return ce.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(ce.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(ae.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(ce.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(ce.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: oe.sort,
    splice: oe.splice
  }, ce.extend = ce.fn.extend = function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a;
  }, ce.extend({
    expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      m(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
        r = 0;
      if (c(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    text: function text(e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (!i) while (t = e[r++]) n += ce.text(t);
      return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : se.call(t, e, n);
    },
    isXMLDoc: function isXMLDoc(e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !l.test(t || n && n.nodeName || "HTML");
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function map(e, t, n) {
      var r,
        i,
        o = 0,
        a = [];
      if (c(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: le
  }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function l(e, t) {
        return e === t && (a = !0), 0;
      },
      f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
      g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function P(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
      M = function M() {
        V();
      },
      R = J(function (e) {
        return !0 === e.disabled && fe(e, "fieldset");
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function apply(e, t) {
          me.apply(e, ae.call(t));
        },
        call: function call(e) {
          me.apply(e, ae.call(arguments, 1));
        }
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (V(e), e = e || T, C)) {
        if (11 !== p && (u = L.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return k.call(n, a), n;
          } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n;
        } else {
          if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n;
        }
        if (!(h[t + " "] || d && d.test(t))) {
          if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
            (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }
    function F(e) {
      return e[S] = !0, e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return o = +o, F(function (e, t) {
          var n,
            r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }
    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function (e) {
        return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = $(function (e) {
        return i.call(e, "*");
      }), le.scope = $(function () {
        return T.querySelectorAll(":scope");
      }), le.cssHas = $(function () {
        try {
          return T.querySelector(":has(*,:jqfake)"), !1;
        } catch (e) {
          return !0;
        }
      }), le.getById ? (b.filter.ID = function (e) {
        var t = e.replace(O, P);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(O, P);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n,
            r,
            i,
            o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }
          return [];
        }
      }), b.find.TAG = function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
      }, b.find.CLASS = function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e);
      }, d = [], $(function (e) {
        var t;
        r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
      }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function l(e, t) {
        if (e === t) return a = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1);
      }), T;
    }
    for (e in I.matches = function (e, t) {
      return I(e, null, null, t);
    }, I.matchesSelector = function (e, t) {
      if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
        var n = i.call(e, t);
        if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        h(t, !0);
      }
      return 0 < I(t, T, null, [e]).length;
    }, I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }, I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }, I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return o = null, e;
    }, ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (b = ce.expr = {
      cacheLength: 50,
      createPseudo: F,
      match: D,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
            n = !e[6] && e[2];
          return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(O, P).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return fe(e, t);
          };
        },
        CLASS: function CLASS(e) {
          var t = s[e + " "];
          return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = I.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(d, e, t, h, g) {
          var v = "nth" !== d.slice(0, 3),
            y = "last" !== d.slice(-4),
            m = "of-type" === e;
          return 1 === h && 0 === g ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u = v !== y ? "nextSibling" : "previousSibling",
              l = e.parentNode,
              c = m && e.nodeName.toLowerCase(),
              f = !n && !m,
              p = !1;
            if (l) {
              if (v) {
                while (u) {
                  o = e;
                  while (o = o[u]) if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                  s = u = "only" === d && !s && "nextSibling";
                }
                return !0;
              }
              if (s = [y ? l.firstChild : l.lastChild], y && f) {
                p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if (1 === o.nodeType && ++p && o === e) {
                  i[d] = [E, a, p];
                  break;
                }
              } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p) while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
              return (p -= g) === h || p % h == 0 && 0 <= p / h;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
            a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function (e, t) {
            var n,
              r = a(e, o),
              i = r.length;
            while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: F(function (e) {
          var r = [],
            i = [],
            s = ne(e.replace(ve, "$1"));
          return s[S] ? F(function (e, t, n, r) {
            var i,
              o = s(e, null, r, []),
              a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: F(function (t) {
          return function (e) {
            return 0 < I(t, e).length;
          };
        }),
        contains: F(function (t) {
          return t = t.replace(O, P), function (e) {
            return -1 < (e.textContent || ce.text(e)).indexOf(t);
          };
        }),
        lang: F(function (n) {
          return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(), function (e) {
            var t;
            do {
              if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function target(e) {
          var t = ie.location && ie.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === r;
        },
        focus: function focus(e) {
          return e === function () {
            try {
              return T.activeElement;
            } catch (e) {}
          }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: z(!1),
        disabled: z(!0),
        checked: function checked(e) {
          return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return q.test(e.nodeName);
        },
        input: function input(e) {
          return N.test(e.nodeName);
        },
        button: function button(e) {
          return fe(e, "input") && "button" === e.type || fe(e, "button");
        },
        text: function text(e) {
          var t;
          return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: X(function () {
          return [0];
        }),
        last: X(function (e, t) {
          return [t - 1];
        }),
        eq: X(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: X(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: X(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: X(function (e, t, n) {
          var r;
          for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
          return e;
        }),
        gt: X(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = B(e);
    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(ve, " ")
        }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first ? function (e, t, n) {
        while (e = e[s]) if (1 === e.nodeType || c) return a(e, t, n);
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o = [E, f];
        if (n) {
          while (e = e[s]) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
        } else while (e = e[s]) if (1 === e.nodeType || c) if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;else {
          if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
          if ((i[l] = o)[2] = a(e, t, n)) return !0;
        }
        return !1;
      };
    }
    function K(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0;
      } : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u = [],
          l = [],
          c = t.length,
          f = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
          p = !d || !e && h ? f : Z(f, u, d, n, r);
        if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
          i = Z(s, l), v(i, [], n, r), o = i.length;
          while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = s.length;
              while (o--) (a = s[o]) && i.push(p[o] = a);
              y(null, s = [], i, r);
            }
            o = s.length;
            while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a));
          }
        } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s);
      });
    }
    function te(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function (e) {
          return e === i;
        }, a, !0), l = J(function (e) {
          return -1 < se.call(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) if (t = b.relative[e[s].type]) c = [J(K(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
          return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e));
        }
        c.push(t);
      }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), n = t.length;
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = E += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == T || (V(o), n = !C);
              while (s = v[a++]) if (s(o, t || T, n)) {
                k.call(_r, o);
                break;
              }
              i && (E = h);
            }
            m && ((o = !s && o) && u--, e && c.push(o));
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(_r));
              f = Z(f);
            }
            k.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(_r);
          }
          return i && (E = h, w = p), c;
        }, m ? F(r) : r))).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
            break;
          }
        }
      }
      return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n;
    }
    G.prototype = b.filters = b.pseudos, b.setFilters = new G(), le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function (e) {
      return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
    }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort;
  }();
  var d = function d(e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && ce(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    h = function h(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n) ? ce.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? ce.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? ce.grep(e, function (e) {
      return -1 < se.call(n, e) !== r;
    }) : ce.filter(n, e, r);
  }
  ce.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, ce.fn.extend({
    find: function find(e) {
      var t,
        n,
        r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(ce(e).filter(function () {
        for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
      return 1 < r ? ce.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(T(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(T(this, e || [], !0));
    },
    is: function is(e) {
      return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length;
    }
  });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || k, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this);
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function has(e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function closest(e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), ce.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return d(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return d(e, "parentNode", n);
    },
    next: function next(e) {
      return A(e, "nextSibling");
    },
    prev: function prev(e) {
      return A(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return d(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return d(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return d(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return d(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return h((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return h(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes));
    }
  }, function (r, i) {
    ce.fn[r] = function (e, t) {
      var n = ce.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  ce.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function (e, t) {
      n[t] = !0;
    }), n) : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function c() {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
      f = {
        add: function add() {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            ce.each(e, function (e, t) {
              v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function remove() {
          return ce.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
          }), this;
        },
        has: function has(e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function empty() {
          return s && (s = []), this;
        },
        disable: function disable() {
          return a = u = [], s = t = "", this;
        },
        disabled: function disabled() {
          return !s;
        },
        lock: function lock() {
          return a = u = [], t || i || (s = t = ""), this;
        },
        locked: function locked() {
          return !!a;
        },
        fireWith: function fireWith(e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        },
        fire: function fire() {
          return f.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!o;
        }
      };
    return f;
  }, ce.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]],
        i = "pending",
        a = {
          state: function state() {
            return i;
          },
          always: function always() {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return a.then(null, e);
          },
          pipe: function pipe() {
            var i = arguments;
            return ce.Deferred(function (r) {
              ce.each(o, function (e, t) {
                var n = v(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          },
          then: function then(t, n, r) {
            var u = 0;
            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function e() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };
                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t));
              };
            }
            return ce.Deferred(function (e) {
              o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? ce.extend(e, a) : a;
          }
        },
        s = {};
      return ce.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = ae.call(arguments),
        o = ce.Deferred(),
        a = function a(t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
      while (t--) L(i[t], a(t), o.reject);
      return o.promise();
    }
  });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function (e, t) {
    ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, ce.readyException = function (e) {
    ie.setTimeout(function () {
      throw e;
    });
  };
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  ce.fn.ready = function (e) {
    return O.then(e)["catch"](function (e) {
      ce.readyException(e);
    }), this;
  }, ce.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
    }
  }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function M(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) for (s in i = !0, n) M(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
        return l.call(ce(e), n);
      })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function $(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  B.uid = 1, B.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" == typeof t) i[F(t)] = n;else for (r in t) i[F(r)] = t[r];
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
        r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
          while (n--) delete r[t[n]];
        }
        (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !ce.isEmptyObject(t);
    }
  };
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i);
      } catch (e) {}
      z.set(e, t, n);
    } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function hasData(e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function data(e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      z.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      _.remove(e, t);
    }
  }), ce.fn.extend({
    data: function data(n, e) {
      var t,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
          _.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == _typeof(n) ? this.each(function () {
        z.set(this, n);
      }) : M(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
        this.each(function () {
          z.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        z.remove(this, e);
      });
    }
  }), ce.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";
      var n = ce.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = ce._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        ce.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return _.get(e, n) || _.access(e, n, {
        empty: ce.Callbacks("once memory").add(function () {
          _.remove(e, [t + "queue", n]);
        })
      });
    }
  }), ce.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = ce.queue(this, t, n);
        ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        ce.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
        r = 1,
        i = ce.Deferred(),
        o = this,
        a = this.length,
        s = function s() {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function K(e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = {
      composed: !0
    };
  J.getRootNode && (K = function K(e) {
    return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument;
  });
  var ee = function ee(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display");
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r ? function () {
        return r.cur();
      } : function () {
        return ce.css(e, t, "");
      },
      u = s(),
      l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, ce.style(e, t, c + l), n = n || [];
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function show() {
      return re(this, !0);
    },
    hide: function hide() {
      return re(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ee(this) ? ce(this).show() : ce(this).hide();
      });
    }
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function Se(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n;
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);else if (je.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      ce.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++]) if (r && -1 < ce.inArray(o, r)) i && i.push(o);else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
      c = 0;
      while (o = a[c++]) Ce.test(o.type || "") && n.push(o);
    }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return ce().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = ce.guid++)), e.each(function () {
      ce.event.add(this, t, i, r, n);
    });
  }
  function He(e, r, t) {
    t ? (_.set(e, r, !1), ce.event.add(e, r, {
      namespace: !1,
      handler: function handler(e) {
        var t,
          n = _.get(this, r);
        if (1 & e.isTrigger && this[r]) {
          if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation();else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t;
        } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne);
      }
    })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  ce.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(D) || [""]).length;
        while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && ce.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0);
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--) if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = ce.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, ce.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, ce.Event = function (e, t) {
    if (!(this instanceof ce.Event)) return new ce.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0;
  }, ce.Event.prototype = {
    constructor: ce.Event,
    isDefaultPrevented: qe,
    isPropagationStopped: qe,
    isImmediatePropagationStopped: qe,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, ce.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, ce.event.addProp), ce.each({
    focus: "focusin",
    blur: "focusout"
  }, function (r, i) {
    function o(e) {
      if (C.documentMode) {
        var t = _.get(this, "handle"),
          n = ce.event.fix(e);
        n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n);
      } else ce.event.simulate(i, e.target, ce.event.fix(e));
    }
    ce.event.special[r] = {
      setup: function setup() {
        var e;
        if (He(this, r, !0), !C.documentMode) return !1;
        (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1);
      },
      trigger: function trigger() {
        return He(this, r), !0;
      },
      teardown: function teardown() {
        var e;
        if (!C.documentMode) return !1;
        (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i));
      },
      _default: function _default(e) {
        return _.get(e.target, r);
      },
      delegateType: i
    }, ce.event.special[i] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i);
        n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i) - 1;
        n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i));
      }
    };
  }), ce.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    ce.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
          n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), ce.fn.extend({
    on: function on(e, t, n, r) {
      return Le(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Le(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == _typeof(e)) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function () {
        ce.event.remove(this, e, n, t);
      });
    }
  });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e;
  }
  function Ie(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function We(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events)) for (i in _.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
    });
    if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : m(u.textContent.replace(Me, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);else Fe(e, c);
      return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++) if ($(n)) {
        if (t = n[_.expando]) {
          if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
          n[_.expando] = void 0;
        }
        n[z.expando] && (n[z.expando] = void 0);
      }
    }
  }), ce.fn.extend({
    detach: function detach(e) {
      return Be(this, e, !0);
    },
    remove: function remove(e) {
      return Be(this, e);
    },
    text: function text(e) {
      return M(this, function (e) {
        return void 0 === e ? ce.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return $e(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return $e(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Re(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ce.clone(this, e, t);
      });
    },
    html: function html(e) {
      return M(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = ce.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return $e(this, arguments, function (e) {
        var t = this.parentNode;
        ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), ce.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    ce.fn[e] = function (e) {
      for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
      return this.pushStack(n);
    };
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function Xe(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = ie), t.getComputedStyle(e);
    },
    Ue = function Ue(e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a;
  }
  function Ye(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null;
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a;
      }
    }));
  }();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return t || (e in Je ? e : Ke[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Qe.length;
      while (n--) if ((e = Qe[n] + t) in Je) return e;
    }(e) || e);
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    nt = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l;
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), ce.each(["height", "width"], function (e, u) {
    ce.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function () {
          return ot(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
          i = Xe(e),
          o = !le.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
          s = n ? it(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s);
      }
    };
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), ce.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    ce.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
        return n;
      }
    }, "margin" !== i && (ce.cssHooks[i + o].set = rt);
  }), ce.fn.extend({
    css: function css(e, t) {
      return M(this, function (e, t, n) {
        var r,
          i,
          o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
          return o;
        }
        return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((ce.Tween = at).prototype = {
    constructor: at,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = at.propHooks[this.prop];
      return e && e.get ? e.get(this) : at.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
        n = at.propHooks[this.prop];
      return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this;
    }
  }).init.prototype = at.prototype, (at.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = at.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, ce.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return ie.setTimeout(function () {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function u() {
        if (a) return !1;
        for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(!0, {
          specialEasing: {},
          easing: ce.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function createTween(e, t) {
          var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function stop(e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
      c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }
  ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return te(n.elem, e, Y.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      v(e) ? (t = e, e = ["*"]) : e = e.match(D);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ee(e),
        v = _.get(e, "fxshow");
      for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], ft.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }
        d[r] = v && v[r] || ce.style(e, r);
      }
      if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && re([e], !0), p.done(function () {
        for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r]);
      })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function prefilter(e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    }
  }), ce.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? ce.extend({}, e) : {
      complete: n || !n && t || v(e) && e,
      duration: e,
      easing: n && t || t && !v(t) && t
    };
    return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
    }, r;
  }, ce.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ee).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = ce.isEmptyObject(t),
        o = ce.speed(e, n, r),
        a = function a() {
          var e = yt(this, ce.extend({}, t), o);
          (i || _.get(this, "finish")) && e.stop(!0);
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = ce.timers,
          r = _.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || ce.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
          t = _.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = ce.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish;
      });
    }
  }), ce.each(["toggle", "show", "hide"], function (e, r) {
    var i = ce.fn[r];
    ce.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n);
    };
  }), ce.each({
    slideDown: gt("show"),
    slideUp: gt("hide"),
    slideToggle: gt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    ce.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), ce.timers = [], ce.fx.tick = function () {
    var e,
      t = 0,
      n = ce.timers;
    for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || ce.fx.stop(), st = void 0;
  }, ce.fx.timer = function (e) {
    ce.timers.push(e), ce.fx.start();
  }, ce.fx.interval = 13, ce.fx.start = function () {
    ut || (ut = !0, dt());
  }, ce.fx.stop = function () {
    ut = null;
  }, ce.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ce.fn.delay = function (r, e) {
    return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = ie.setTimeout(e, r);
      t.stop = function () {
        ie.clearTimeout(n);
      };
    });
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function attr(e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    }
  }), ce.extend({
    attr: function attr(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!le.radioValue && "radio" === t && fe(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
        r = 0,
        i = t && t.match(D);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), mt = {
    set: function set(e, t, n) {
      return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = xt[t] || ce.find.attr;
    xt[t] = function (e, t, n) {
      var r,
        i,
        o = t.toLowerCase();
      return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || [];
  }
  ce.fn.extend({
    prop: function prop(e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    }
  }), ce.extend({
    prop: function prop(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = ce.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), le.optSelected || (ce.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({
    addClass: function addClass(t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).addClass(t.call(this, e, Ct(this)));
      }) : (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this;
    },
    removeClass: function removeClass(t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).removeClass(t.call(this, e, Ct(this)));
      }) : arguments.length ? (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) {
            i = e[o];
            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
          }
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this : this.attr("class", "");
    },
    toggleClass: function toggleClass(t, n) {
      var e,
        r,
        i,
        o,
        a = _typeof(t),
        s = "string" === a || Array.isArray(t);
      return v(t) ? this.each(function (e) {
        ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
      }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function () {
        if (s) for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""));
      }));
    },
    hasClass: function hasClass(e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
      return !1;
    }
  });
  var St = /\r/g;
  ce.fn.extend({
    val: function val(n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length ? (i = v(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0;
    }
  }), ce.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = ce.find.attr(e, "value");
          return null != t ? t : Tt(ce.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
            if (t = ce(n).val(), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function set(e, t) {
          var n,
            r,
            i = e.options,
            o = ce.makeArray(t),
            a = i.length;
          while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), ce.each(["radio", "checkbox"], function () {
    ce.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t);
      }
    }, le.checkOn || (ce.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Et = ie.location,
    jt = {
      guid: Date.now()
    },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function Nt(e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !y(n)) {
          for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = ce.extend(new ce.Event(), n, {
        type: e,
        isSimulated: !0
      });
      ce.event.trigger(r, null, t);
    }
  }), ce.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        ce.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return ce.event.trigger(e, t, n, !0);
    }
  });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) ce.each(e, function (e, t) {
      r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== x(e)) i(n, e);else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  ce.param = function (e, t) {
    var n,
      r = [],
      i = function i(e, t) {
        var n = v(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }, ce.fn.extend({
    serialize: function serialize() {
      return ce.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = ce.prop(this, "elements");
        return e ? ce.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e));
      }).map(function (e, t) {
        var n = ce(this).val();
        return null == n ? null : Array.isArray(n) ? ce.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Lt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Lt, "\r\n")
        };
      }).get();
    }
  });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return s[e] = !0, ce.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  Xt.href = Et.href, ce.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": zt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": ce.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
    },
    ajaxPrefilter: Ut(Bt),
    ajaxTransport: Ut(_t),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
        f,
        p,
        n,
        d,
        r,
        h,
        g,
        i,
        o,
        v = ce.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
        x = ce.Deferred(),
        b = ce.Callbacks("once memory"),
        w = v.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = n[e.toLowerCase() + " "];
            }
            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return h ? p : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == h && (v.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
            return this;
          },
          abort: function abort(e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this;
          }
        };
      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
        r = C.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
      for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = ie.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));
        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");
      function l(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = t;
        h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }
              a || (a = i);
            }
            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + u + " to " + o
              };
            }
          }
          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return ce.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return ce.get(e, void 0, t, "script");
    }
  }), ce.each(["get", "post"], function (e, i) {
    ce[i] = function (e, t, n, r) {
      return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, ce.isPlainObject(e) && e));
    };
  }), ce.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), ce._evalUrl = function (e, t, n) {
    return ce.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        ce.globalEval(e, t, n);
      }
    });
  }, ce.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return v(n) ? this.each(function (e) {
        ce(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = ce(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = v(t);
      return this.each(function (e) {
        ce(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        ce(this).replaceWith(this.childNodes);
      }), this;
    }
  }), ce.expr.pseudos.hidden = function (e) {
    return !ce.expr.pseudos.visible(e);
  }, ce.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, ce.ajaxSettings.xhr = function () {
    try {
      return new ie.XMLHttpRequest();
    } catch (e) {}
  };
  var Yt = {
      0: 200,
      1223: 204
    },
    Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function (i) {
    var _o, a;
    if (le.cors || Qt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
          r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && ie.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");
        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), ce.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), ce.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return ce.globalEval(e), e;
      }
    }
  }), ce.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), ce.ajaxTransport("script", function (n) {
    var r, _i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = ce("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), C.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return this[e] = !0, e;
    }
  }), ce.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
      i,
      o,
      a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || ce.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
    var r, i, o;
  }, ce.fn.load = function (e, t, n) {
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && ce.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, ce.expr.pseudos.animated = function (t) {
    return ce.grep(ce.timers, function (e) {
      return t === e.elem;
    }).length;
  }, ce.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = ce.css(e, "position"),
        c = ce(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, ce.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        ce.offset.setOffset(this, t, e);
      });
      var e,
        n,
        r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
          t,
          n,
          r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - ce.css(r, "marginTop", !0),
          left: t.left - i.left - ce.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
        return e || J;
      });
    }
  }), ce.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    ce.fn[t] = function (e) {
      return M(this, function (e, t, n) {
        var r;
        if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), ce.each(["top", "left"], function (e, n) {
    ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
      if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t;
    });
  }), ce.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    ce.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      ce.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return M(this, function (e, t, n) {
          var r;
          return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ce.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), ce.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.on("mouseenter", e).on("mouseleave", t || e);
    }
  }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    ce.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(ae.call(arguments)));
    }).guid = e.guid = e.guid || ce.guid++, i;
  }, ce.holdReady = function (e) {
    e ? ce.readyWait++ : ce.ready(!0);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
    var t = ce.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce;
  });
  var tn = ie.jQuery,
    nn = ie.$;
  return ce.noConflict = function (e) {
    return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Swiper 6.8.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 23, 2021
 */

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function e(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  function t() {
    return (t = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
      }
      return e;
    }).apply(this, arguments);
  }
  function a(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }
  function i(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (s) {
      void 0 === e[s] ? e[s] = t[s] : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s]);
    });
  }
  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function r() {
    var e = "undefined" != typeof document ? document : {};
    return i(e, s), e;
  }
  var n = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };
  function l() {
    var e = "undefined" != typeof window ? window : {};
    return i(e, n), e;
  }
  function o(e) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function d(e, t) {
    return (d = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }
  function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }
  function u(e, t, a) {
    return (u = p() ? Reflect.construct : function (e, t, a) {
      var i = [null];
      i.push.apply(i, t);
      var s = new (Function.bind.apply(e, i))();
      return a && d(s, a.prototype), s;
    }).apply(null, arguments);
  }
  function c(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (c = function c(e) {
      if (null === e || (a = e, -1 === Function.toString.call(a).indexOf("[native code]"))) return e;
      var a;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, i);
      }
      function i() {
        return u(e, arguments, o(this).constructor);
      }
      return i.prototype = Object.create(e.prototype, {
        constructor: {
          value: i,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), d(i, e);
    })(e);
  }
  var h = function (e) {
    var t, a;
    function i(t) {
      var a, i, s;
      return a = e.call.apply(e, [this].concat(t)) || this, i = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(a), s = i.__proto__, Object.defineProperty(i, "__proto__", {
        get: function get() {
          return s;
        },
        set: function set(e) {
          s.__proto__ = e;
        }
      }), a;
    }
    return a = e, (t = i).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, i;
  }(c(Array));
  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
    }), t;
  }
  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function m(e, t) {
    var a = l(),
      i = r(),
      s = [];
    if (!t && e instanceof h) return e;
    if (!e) return new h(s);
    if ("string" == typeof e) {
      var n = e.trim();
      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
        var d = i.createElement(o);
        d.innerHTML = n;
        for (var p = 0; p < d.childNodes.length; p += 1) s.push(d.childNodes[p]);
      } else s = function (e, t) {
        if ("string" != typeof e) return [e];
        for (var a = [], i = t.querySelectorAll(e), s = 0; s < i.length; s += 1) a.push(i[s]);
        return a;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === a || e === i) s.push(e);else if (Array.isArray(e)) {
      if (e instanceof h) return e;
      s = e;
    }
    return new h(function (e) {
      for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
      return t;
    }(s));
  }
  m.fn = h.prototype;
  var g,
    b,
    w,
    y = {
      addClass: function addClass() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        var i = v(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).add.apply(t, i);
        }), this;
      },
      removeClass: function removeClass() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        var i = v(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).remove.apply(t, i);
        }), this;
      },
      hasClass: function hasClass() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        var i = v(t.map(function (e) {
          return e.split(" ");
        }));
        return f(this, function (e) {
          return i.filter(function (t) {
            return e.classList.contains(t);
          }).length > 0;
        }).length > 0;
      },
      toggleClass: function toggleClass() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        var i = v(t.map(function (e) {
          return e.split(" ");
        }));
        this.forEach(function (e) {
          i.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function attr(e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
        for (var a = 0; a < this.length; a += 1) if (2 === arguments.length) this[a].setAttribute(e, t);else for (var i in e) this[a][i] = e[i], this[a].setAttribute(i, e[i]);
        return this;
      },
      removeAttr: function removeAttr(e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function transform(e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function transition(e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function on() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
        function l(e) {
          var t = e.target;
          if (t) {
            var a = e.target.dom7EventData || [];
            if (a.indexOf(e) < 0 && a.unshift(e), m(t).is(s)) r.apply(t, a);else for (var i = m(t).parents(), n = 0; n < i.length; n += 1) m(i[n]).is(s) && r.apply(i[n], a);
          }
        }
        function o(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);
        for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
          var c = this[u];
          if (s) for (d = 0; d < p.length; d += 1) {
            var h = p[d];
            c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
              listener: r,
              proxyListener: l
            }), c.addEventListener(h, l, n);
          } else for (d = 0; d < p.length; d += 1) {
            var v = p[d];
            c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[v] || (c.dom7Listeners[v] = []), c.dom7Listeners[v].push({
              listener: r,
              proxyListener: o
            }), c.addEventListener(v, o, n);
          }
        }
        return this;
      },
      off: function off() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
        "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);
        for (var l = i.split(" "), o = 0; o < l.length; o += 1) for (var d = l[o], p = 0; p < this.length; p += 1) {
          var u = this[p],
            c = void 0;
          if (!s && u.dom7Listeners ? c = u.dom7Listeners[d] : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]), c && c.length) for (var h = c.length - 1; h >= 0; h -= 1) {
            var v = c[h];
            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1)) : r || (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1));
          }
        }
        return this;
      },
      trigger: function trigger() {
        for (var e = l(), t = arguments.length, a = new Array(t), i = 0; i < t; i++) a[i] = arguments[i];
        for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1) for (var o = s[n], d = 0; d < this.length; d += 1) {
          var p = this[d];
          if (e.CustomEvent) {
            var u = new e.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            });
            p.dom7EventData = a.filter(function (e, t) {
              return t > 0;
            }), p.dispatchEvent(u), p.dom7EventData = [], delete p.dom7EventData;
          }
        }
        return this;
      },
      transitionEnd: function transitionEnd(e) {
        var t = this;
        return e && t.on("transitionend", function a(i) {
          i.target === this && (e.call(this, i), t.off("transitionend", a));
        }), this;
      },
      outerWidth: function outerWidth(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function outerHeight(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function styles() {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function offset() {
        if (this.length > 0) {
          var e = l(),
            t = r(),
            a = this[0],
            i = a.getBoundingClientRect(),
            s = t.body,
            n = a.clientTop || s.clientTop || 0,
            o = a.clientLeft || s.clientLeft || 0,
            d = a === e ? e.scrollY : a.scrollTop,
            p = a === e ? e.scrollX : a.scrollLeft;
          return {
            top: i.top + d - n,
            left: i.left + p - o
          };
        }
        return null;
      },
      css: function css(e, t) {
        var a,
          i = l();
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (a = 0; a < this.length; a += 1) for (var s in e) this[a].style[s] = e[s];
            return this;
          }
          if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
          return this;
        }
        return this;
      },
      each: function each(e) {
        return e ? (this.forEach(function (t, a) {
          e.apply(t, [t, a]);
        }), this) : this;
      },
      html: function html(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function text(e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function is(e) {
        var t,
          a,
          i = l(),
          s = r(),
          n = this[0];
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (t = m(e), a = 0; a < t.length; a += 1) if (t[a] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === i) return n === i;
        if (e.nodeType || e instanceof h) {
          for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) if (t[a] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function index() {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function eq(e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return m([]);
        if (e < 0) {
          var a = t + e;
          return m(a < 0 ? [] : [this[a]]);
        }
        return m([this[e]]);
      },
      append: function append() {
        for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
          e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
          for (var i = 0; i < this.length; i += 1) if ("string" == typeof e) {
            var s = t.createElement("div");
            for (s.innerHTML = e; s.firstChild;) this[i].appendChild(s.firstChild);
          } else if (e instanceof h) for (var n = 0; n < e.length; n += 1) this[i].appendChild(e[n]);else this[i].appendChild(e);
        }
        return this;
      },
      prepend: function prepend(e) {
        var t,
          a,
          i = r();
        for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
          var s = i.createElement("div");
          for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
        } else if (e instanceof h) for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function next(e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
      },
      nextAll: function nextAll(e) {
        var t = [],
          a = this[0];
        if (!a) return m([]);
        for (; a.nextElementSibling;) {
          var i = a.nextElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), a = i;
        }
        return m(t);
      },
      prev: function prev(e) {
        if (this.length > 0) {
          var t = this[0];
          return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
        }
        return m([]);
      },
      prevAll: function prevAll(e) {
        var t = [],
          a = this[0];
        if (!a) return m([]);
        for (; a.previousElementSibling;) {
          var i = a.previousElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), a = i;
        }
        return m(t);
      },
      parent: function parent(e) {
        for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
        return m(t);
      },
      parents: function parents(e) {
        for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].parentNode; i;) e ? m(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
        return m(t);
      },
      closest: function closest(e) {
        var t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function find(e) {
        for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
        return m(t);
      },
      children: function children(e) {
        for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].children, s = 0; s < i.length; s += 1) e && !m(i[s]).is(e) || t.push(i[s]);
        return m(t);
      },
      filter: function filter(e) {
        return m(f(this, e));
      },
      remove: function remove() {
        for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      }
    };
  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function x() {
    return Date.now();
  }
  function T(e, t) {
    void 0 === t && (t = "x");
    var a,
      i,
      s,
      r = l(),
      n = function (e) {
        var t,
          a = l();
        return a.getComputedStyle && (t = a.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t;
      }(e);
    return r.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }
  function C(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }
  function S(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function M() {
    for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], a = 1; a < arguments.length; a += 1) {
      var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (null != i && !S(i)) for (var s = Object.keys(Object(i)).filter(function (e) {
          return t.indexOf(e) < 0;
        }), r = 0, n = s.length; r < n; r += 1) {
        var l = s[r],
          o = Object.getOwnPropertyDescriptor(i, l);
        void 0 !== o && o.enumerable && (C(e[l]) && C(i[l]) ? i[l].__swiper__ ? e[l] = i[l] : M(e[l], i[l]) : !C(e[l]) && C(i[l]) ? (e[l] = {}, i[l].__swiper__ ? e[l] = i[l] : M(e[l], i[l])) : e[l] = i[l]);
      }
    }
    return e;
  }
  function z(e, t) {
    Object.keys(t).forEach(function (a) {
      C(t[a]) && Object.keys(t[a]).forEach(function (i) {
        "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
      }), e[a] = t[a];
    });
  }
  function P(e) {
    return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".");
  }
  function k(e, t, a, i) {
    var s = r();
    return a && Object.keys(i).forEach(function (a) {
      if (!t[a] && !0 === t.auto) {
        var r = s.createElement("div");
        r.className = i[a], e.append(r), t[a] = r;
      }
    }), t;
  }
  function $() {
    return g || (g = function () {
      var e = l(),
        t = r();
      return {
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
        passiveListener: function () {
          var t = !1;
          try {
            var a = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, a);
          } catch (e) {}
          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), g;
  }
  function L(e) {
    return void 0 === e && (e = {}), b || (b = function (e) {
      var t = (void 0 === e ? {} : e).userAgent,
        a = $(),
        i = l(),
        s = i.navigator.platform,
        r = t || i.navigator.userAgent,
        n = {
          ios: !1,
          android: !1
        },
        o = i.screen.width,
        d = i.screen.height,
        p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
        u = r.match(/(iPad).*OS\s([\d_]+)/),
        c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
        h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        v = "Win32" === s,
        f = "MacIntel" === s;
      return !u && f && a.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((u = r.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), f = !1), p && !v && (n.os = "android", n.android = !0), (u || h || c) && (n.os = "ios", n.ios = !0), n;
    }(e)), b;
  }
  function I() {
    return w || (w = function () {
      var e,
        t = l();
      return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
    }()), w;
  }
  Object.keys(y).forEach(function (e) {
    Object.defineProperty(m.fn, e, {
      value: y[e],
      writable: !0
    });
  });
  var O = {
      name: "resize",
      create: function create() {
        var e = this;
        M(e, {
          resize: {
            observer: null,
            createObserver: function createObserver() {
              e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver(function (t) {
                var a = e.width,
                  i = e.height,
                  s = a,
                  r = i;
                t.forEach(function (t) {
                  var a = t.contentBoxSize,
                    i = t.contentRect,
                    n = t.target;
                  n && n !== e.el || (s = i ? i.width : (a[0] || a).inlineSize, r = i ? i.height : (a[0] || a).blockSize);
                }), s === a && r === i || e.resize.resizeHandler();
              }), e.resize.observer.observe(e.el));
            },
            removeObserver: function removeObserver() {
              e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null);
            },
            resizeHandler: function resizeHandler() {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function orientationChangeHandler() {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function init(e) {
          var t = l();
          e.params.resizeObserver && void 0 !== l().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
        },
        destroy: function destroy(e) {
          var t = l();
          e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
        }
      }
    },
    A = {
      attach: function attach(e, t) {
        void 0 === t && (t = {});
        var a = l(),
          i = this,
          s = new (a.MutationObserver || a.WebkitMutationObserver)(function (e) {
            if (1 !== e.length) {
              var t = function t() {
                i.emit("observerUpdate", e[0]);
              };
              a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
            } else i.emit("observerUpdate", e[0]);
          });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), i.observer.observers.push(s);
      },
      init: function init() {
        var e = this;
        if (e.support.observer && e.params.observer) {
          if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          }), e.observer.attach(e.$wrapperEl[0], {
            attributes: !1
          });
        }
      },
      destroy: function destroy() {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }), this.observer.observers = [];
      }
    },
    D = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function create() {
        z(this, {
          observer: t({}, A, {
            observers: []
          })
        });
      },
      on: {
        init: function init(e) {
          e.observer.init();
        },
        destroy: function destroy(e) {
          e.observer.destroy();
        }
      }
    };
  function N(e) {
    var t = this,
      a = r(),
      i = l(),
      s = t.touchEventsData,
      n = t.params,
      o = t.touches;
    if (t.enabled && (!t.animating || !n.preventInteractionOnTransition)) {
      var d = e;
      d.originalEvent && (d = d.originalEvent);
      var p = m(d.target);
      if (("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length) && (s.isTouchEvent = "touchstart" === d.type, (s.isTouchEvent || !("which" in d) || 3 !== d.which) && !(!s.isTouchEvent && "button" in d && d.button > 0 || s.isTouched && s.isMoved))) {
        !!n.noSwipingClass && "" !== n.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (p = m(e.path[0]));
        var u = n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass,
          c = !(!d.target || !d.target.shadowRoot);
        if (n.noSwiping && (c ? function (e, t) {
          return void 0 === t && (t = this), function t(a) {
            return a && a !== r() && a !== l() ? (a.assignedSlot && (a = a.assignedSlot), a.closest(e) || t(a.getRootNode().host)) : null;
          }(t);
        }(u, d.target) : p.closest(u)[0])) t.allowClick = !0;else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
          o.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, o.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
          var h = o.currentX,
            v = o.currentY,
            f = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
            g = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
          if (f && (h <= g || h >= i.innerWidth - g)) {
            if ("prevent" !== f) return;
            e.preventDefault();
          }
          if (M(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), o.startX = h, o.startY = v, s.touchStartTime = x(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== d.type) {
            var b = !0;
            p.is(s.focusableElements) && (b = !1), a.activeElement && m(a.activeElement).is(s.focusableElements) && a.activeElement !== p[0] && a.activeElement.blur();
            var w = b && t.allowTouchMove && n.touchStartPreventDefault;
            !n.touchStartForcePreventDefault && !w || p[0].isContentEditable || d.preventDefault();
          }
          t.emit("touchStart", d);
        }
      }
    }
  }
  function G(e) {
    var t = r(),
      a = this,
      i = a.touchEventsData,
      s = a.params,
      n = a.touches,
      l = a.rtlTranslate;
    if (a.enabled) {
      var o = e;
      if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
        if (!i.isTouchEvent || "touchmove" === o.type) {
          var d = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
            p = "touchmove" === o.type ? d.pageX : o.pageX,
            u = "touchmove" === o.type ? d.pageY : o.pageY;
          if (o.preventedByNestedSwiper) return n.startX = p, void (n.startY = u);
          if (!a.allowTouchMove) return a.allowClick = !1, void (i.isTouched && (M(n, {
            startX: p,
            startY: u,
            currentX: p,
            currentY: u
          }), i.touchStartTime = x()));
          if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (a.isVertical()) {
            if (u < n.startY && a.translate <= a.maxTranslate() || u > n.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
          } else if (p < n.startX && a.translate <= a.maxTranslate() || p > n.startX && a.translate >= a.minTranslate()) return;
          if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(i.focusableElements)) return i.isMoved = !0, void (a.allowClick = !1);
          if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
            n.currentX = p, n.currentY = u;
            var c = n.currentX - n.startX,
              h = n.currentY - n.startY;
            if (!(a.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < a.params.threshold)) {
              var v;
              if (void 0 === i.isScrolling) a.isHorizontal() && n.currentY === n.startY || a.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : c * c + h * h >= 25 && (v = 180 * Math.atan2(Math.abs(h), Math.abs(c)) / Math.PI, i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
              if (i.isScrolling && a.emit("touchMoveOpposite", o), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                a.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
                var f = a.isHorizontal() ? c : h;
                n.diff = f, f *= s.touchRatio, l && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                var g = !0,
                  b = s.resistanceRatio;
                if (s.touchReleaseOnEdges && (b = 0), f > 0 && i.currentTranslate > a.minTranslate() ? (g = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, b))) : f < 0 && i.currentTranslate < a.maxTranslate() && (g = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, b))), g && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.allowSlidePrev || a.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                  if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = a.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
                }
                s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                  position: n[a.isHorizontal() ? "startX" : "startY"],
                  time: i.touchStartTime
                }), i.velocities.push({
                  position: n[a.isHorizontal() ? "currentX" : "currentY"],
                  time: x()
                })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate));
              }
            }
          }
        }
      } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
    }
  }
  function B(e) {
    var t = this,
      a = t.touchEventsData,
      i = t.params,
      s = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      l = t.slidesGrid,
      o = t.snapGrid;
    if (t.enabled) {
      var d = e;
      if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
      i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
      var p,
        u = x(),
        c = u - a.touchStartTime;
      if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), c < 300 && u - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), a.lastClickTime = x(), E(function () {
        t.destroyed || (t.allowClick = !0);
      }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
      if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, !i.cssMode) if (i.freeMode) {
        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (p > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));
        if (i.freeModeMomentum) {
          if (a.velocities.length > 1) {
            var h = a.velocities.pop(),
              v = a.velocities.pop(),
              f = h.position - v.position,
              m = h.time - v.time;
            t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - h.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
          var g = 1e3 * i.freeModeMomentumRatio,
            b = t.velocity * g,
            w = t.translate + b;
          r && (w = -w);
          var y,
            T,
            C = !1,
            S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
          if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), y = t.maxTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (T = !0);else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), y = t.minTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (T = !0);else if (i.freeModeSticky) {
            for (var M, z = 0; z < o.length; z += 1) if (o[z] > -w) {
              M = z;
              break;
            }
            w = -(w = Math.abs(o[M] - w) < Math.abs(o[M - 1] - w) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
          }
          if (T && t.once("transitionEnd", function () {
            t.loopFix();
          }), 0 !== t.velocity) {
            if (g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), i.freeModeSticky) {
              var P = Math.abs((r ? -w : w) - t.translate),
                k = t.slidesSizesGrid[t.activeIndex];
              g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
            }
          } else if (i.freeModeSticky) return void t.slideToClosest();
          i.freeModeMomentumBounce && C ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
            t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(function () {
              t.setTranslate(y), n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              });
            }, 0));
          })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
            t && !t.destroyed && t.transitionEnd();
          }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(w)), t.updateActiveIndex(), t.updateSlidesClasses();
        } else {
          if (i.freeModeSticky) return void t.slideToClosest();
          i.freeMode && t.emit("_freeModeNoMomentumRelease");
        }
        (!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
          var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== l[I + O] ? p >= l[I] && p < l[I + O] && ($ = I, L = l[I + O] - l[I]) : p >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2]);
        }
        var A = (p - l[$]) / L,
          D = $ < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (c > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (A >= i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($));
        }
      }
    }
  }
  function H() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
      e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }
  function R(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function X() {
    var e = this,
      t = e.wrapperEl,
      a = e.rtlTranslate;
    if (e.enabled) {
      e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
      var i = e.maxTranslate() - e.minTranslate();
      (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    }
  }
  var Y = !1;
  function V() {}
  var W = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
    },
    F = {
      modular: {
        useParams: function useParams(e) {
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (a) {
            var i = t.modules[a];
            i.params && M(e, i.params);
          });
        },
        useModules: function useModules(e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (a) {
            var i = t.modules[a],
              s = e[a] || {};
            i.on && t.on && Object.keys(i.on).forEach(function (e) {
              t.on(e, i.on[e]);
            }), i.create && i.create.bind(t)(s);
          });
        }
      },
      eventsEmitter: {
        on: function on(e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          var s = a ? "unshift" : "push";
          return e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
          }), i;
        },
        once: function once(e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          function s() {
            i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
            for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
            t.apply(i, r);
          }
          return s.__emitterProxy = t, i.on(e, s, a);
        },
        onAny: function onAny(e, t) {
          var a = this;
          if ("function" != typeof e) return a;
          var i = t ? "unshift" : "push";
          return a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a;
        },
        offAny: function offAny(e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          var a = t.eventsAnyListeners.indexOf(e);
          return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
        },
        off: function off(e, t) {
          var a = this;
          return a.eventsListeners ? (e.split(" ").forEach(function (e) {
            void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].forEach(function (i, s) {
              (i === t || i.__emitterProxy && i.__emitterProxy === t) && a.eventsListeners[e].splice(s, 1);
            });
          }), a) : a;
        },
        emit: function emit() {
          var e,
            t,
            a,
            i = this;
          if (!i.eventsListeners) return i;
          for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
          "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), a = i) : (e = r[0].events, t = r[0].data, a = r[0].context || i), t.unshift(a);
          var l = Array.isArray(e) ? e : e.split(" ");
          return l.forEach(function (e) {
            i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(function (i) {
              i.apply(a, [e].concat(t));
            }), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach(function (e) {
              e.apply(a, t);
            });
          }), i;
        }
      },
      update: {
        updateSize: function updateSize() {
          var e,
            t,
            a = this,
            i = a.$el;
          e = void 0 !== a.params.width && null !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height && null !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), M(a, {
            width: e,
            height: t,
            size: a.isHorizontal() ? e : t
          }));
        },
        updateSlides: function updateSlides() {
          var e = this;
          function t(t) {
            return e.isHorizontal() ? t : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
            }[t];
          }
          function a(e, a) {
            return parseFloat(e.getPropertyValue(t(a)) || 0);
          }
          var i = e.params,
            s = e.$wrapperEl,
            r = e.size,
            n = e.rtlTranslate,
            l = e.wrongRTL,
            o = e.virtual && i.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            p = s.children("." + e.params.slideClass),
            u = o ? e.virtual.slides.length : p.length,
            c = [],
            h = [],
            v = [],
            f = i.slidesOffsetBefore;
          "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
          var m = i.slidesOffsetAfter;
          "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
            b = e.slidesGrid.length,
            w = i.spaceBetween,
            y = -f,
            E = 0,
            x = 0;
          if (void 0 !== r) {
            var T, C;
            "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, n ? p.css({
              marginLeft: "",
              marginBottom: "",
              marginTop: ""
            }) : p.css({
              marginRight: "",
              marginBottom: "",
              marginTop: ""
            }), i.slidesPerColumn > 1 && (T = Math.floor(u / i.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));
            for (var S, z, P, k = i.slidesPerColumn, $ = T / k, L = Math.floor(u / i.slidesPerColumn), I = 0; I < u; I += 1) {
              C = 0;
              var O = p.eq(I);
              if (i.slidesPerColumn > 1) {
                var A = void 0,
                  D = void 0,
                  N = void 0;
                if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                  var G = Math.floor(I / (i.slidesPerGroup * i.slidesPerColumn)),
                    B = I - i.slidesPerColumn * i.slidesPerGroup * G,
                    H = 0 === G ? i.slidesPerGroup : Math.min(Math.ceil((u - G * k * i.slidesPerGroup) / k), i.slidesPerGroup);
                  A = (D = B - (N = Math.floor(B / H)) * H + G * i.slidesPerGroup) + N * T / k, O.css({
                    "-webkit-box-ordinal-group": A,
                    "-moz-box-ordinal-group": A,
                    "-ms-flex-order": A,
                    "-webkit-order": A,
                    order: A
                  });
                } else "column" === i.slidesPerColumnFill ? (N = I - (D = Math.floor(I / k)) * k, (D > L || D === L && N === k - 1) && (N += 1) >= k && (N = 0, D += 1)) : D = I - (N = Math.floor(I / $)) * $;
                O.css(t("margin-top"), 0 !== N ? i.spaceBetween && i.spaceBetween + "px" : "");
              }
              if ("none" !== O.css("display")) {
                if ("auto" === i.slidesPerView) {
                  var R = getComputedStyle(O[0]),
                    X = O[0].style.transform,
                    Y = O[0].style.webkitTransform;
                  if (X && (O[0].style.transform = "none"), Y && (O[0].style.webkitTransform = "none"), i.roundLengths) C = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);else {
                    var V = a(R, "width"),
                      W = a(R, "padding-left"),
                      F = a(R, "padding-right"),
                      _ = a(R, "margin-left"),
                      q = a(R, "margin-right"),
                      j = R.getPropertyValue("box-sizing");
                    if (j && "border-box" === j) C = V + _ + q;else {
                      var U = O[0],
                        K = U.clientWidth;
                      C = V + W + F + _ + q + (U.offsetWidth - K);
                    }
                  }
                  X && (O[0].style.transform = X), Y && (O[0].style.webkitTransform = Y), i.roundLengths && (C = Math.floor(C));
                } else C = (r - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), p[I] && (p[I].style[t("width")] = C + "px");
                p[I] && (p[I].swiperSlideSize = C), v.push(C), i.centeredSlides ? (y = y + C / 2 + E / 2 + w, 0 === E && 0 !== I && (y = y - r / 2 - w), 0 === I && (y = y - r / 2 - w), Math.abs(y) < .001 && (y = 0), i.roundLengths && (y = Math.floor(y)), x % i.slidesPerGroup == 0 && c.push(y), h.push(y)) : (i.roundLengths && (y = Math.floor(y)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && c.push(y), h.push(y), y = y + C + w), e.virtualSize += C + w, E = C, x += 1;
              }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + m, n && l && ("slide" === i.effect || "coverflow" === i.effect) && s.css({
              width: e.virtualSize + i.spaceBetween + "px"
            }), i.setWrapperSize) s.css(((z = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", z));
            if (i.slidesPerColumn > 1) if (e.virtualSize = (C + i.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween, s.css(((P = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", P)), i.centeredSlides) {
              S = [];
              for (var Z = 0; Z < c.length; Z += 1) {
                var J = c[Z];
                i.roundLengths && (J = Math.floor(J)), c[Z] < e.virtualSize + c[0] && S.push(J);
              }
              c = S;
            }
            if (!i.centeredSlides) {
              S = [];
              for (var Q = 0; Q < c.length; Q += 1) {
                var ee = c[Q];
                i.roundLengths && (ee = Math.floor(ee)), c[Q] <= e.virtualSize - r && S.push(ee);
              }
              c = S, Math.floor(e.virtualSize - r) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - r);
            }
            if (0 === c.length && (c = [0]), 0 !== i.spaceBetween) {
              var te,
                ae = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
              p.filter(function (e, t) {
                return !i.cssMode || t !== p.length - 1;
              }).css(((te = {})[ae] = w + "px", te));
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              var ie = 0;
              v.forEach(function (e) {
                ie += e + (i.spaceBetween ? i.spaceBetween : 0);
              });
              var se = (ie -= i.spaceBetween) - r;
              c = c.map(function (e) {
                return e < 0 ? -f : e > se ? se + m : e;
              });
            }
            if (i.centerInsufficientSlides) {
              var re = 0;
              if (v.forEach(function (e) {
                re += e + (i.spaceBetween ? i.spaceBetween : 0);
              }), (re -= i.spaceBetween) < r) {
                var ne = (r - re) / 2;
                c.forEach(function (e, t) {
                  c[t] = e - ne;
                }), h.forEach(function (e, t) {
                  h[t] = e + ne;
                });
              }
            }
            M(e, {
              slides: p,
              snapGrid: c,
              slidesGrid: h,
              slidesSizesGrid: v
            }), u !== d && e.emit("slidesLengthChange"), c.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function updateAutoHeight(e) {
          var t,
            a = this,
            i = [],
            s = a.virtual && a.params.virtual.enabled,
            r = 0;
          "number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);
          var n = function n(e) {
            return s ? a.slides.filter(function (t) {
              return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
            })[0] : a.slides.eq(e)[0];
          };
          if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1) {
            if (a.params.centeredSlides) a.visibleSlides.each(function (e) {
              i.push(e);
            });else for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
              var l = a.activeIndex + t;
              if (l > a.slides.length && !s) break;
              i.push(n(l));
            }
          } else i.push(n(a.activeIndex));
          for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
            var o = i[t].offsetHeight;
            r = o > r ? o : r;
          }
          r && a.$wrapperEl.css("height", r + "px");
        },
        updateSlidesOffset: function updateSlidesOffset() {
          for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function updateSlidesProgress(e) {
          void 0 === e && (e = this && this.translate || 0);
          var t = this,
            a = t.params,
            i = t.slides,
            s = t.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            var r = -e;
            s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (var n = 0; n < i.length; n += 1) {
              var l = i[n],
                o = (r + (a.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + a.spaceBetween);
              if (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) {
                var d = -(r - l.swiperSlideOffset),
                  p = d + t.slidesSizesGrid[n];
                (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
              }
              l.progress = s ? -o : o;
            }
            t.visibleSlides = m(t.visibleSlides);
          }
        },
        updateProgress: function updateProgress(e) {
          var t = this;
          if (void 0 === e) {
            var a = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * a || 0;
          }
          var i = t.params,
            s = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            n = t.isBeginning,
            l = t.isEnd,
            o = n,
            d = l;
          0 === s ? (r = 0, n = !0, l = !0) : (n = (r = (e - t.minTranslate()) / s) <= 0, l = r >= 1), M(t, {
            progress: r,
            isBeginning: n,
            isEnd: l
          }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (o && !n || d && !l) && t.emit("fromEdge"), t.emit("progress", r);
        },
        updateSlidesClasses: function updateSlidesClasses() {
          var e,
            t = this,
            a = t.slides,
            i = t.params,
            s = t.$wrapperEl,
            r = t.activeIndex,
            n = t.realIndex,
            l = t.virtual && i.virtual.enabled;
          a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = l ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
          var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
          i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
          var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
          i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses();
        },
        updateActiveIndex: function updateActiveIndex(e) {
          var t,
            a = this,
            i = a.rtlTranslate ? a.translate : -a.translate,
            s = a.slidesGrid,
            r = a.snapGrid,
            n = a.params,
            l = a.activeIndex,
            o = a.realIndex,
            d = a.snapIndex,
            p = e;
          if (void 0 === p) {
            for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? p = u : i >= s[u] && i < s[u + 1] && (p = u + 1) : i >= s[u] && (p = u);
            n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
          }
          if (r.indexOf(i) >= 0) t = r.indexOf(i);else {
            var c = Math.min(n.slidesPerGroupSkip, p);
            t = c + Math.floor((p - c) / n.slidesPerGroup);
          }
          if (t >= r.length && (t = r.length - 1), p !== l) {
            var h = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
            M(a, {
              snapIndex: t,
              realIndex: h,
              previousIndex: l,
              activeIndex: p
            }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), o !== h && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange");
          } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
        },
        updateClickedSlide: function updateClickedSlide(e) {
          var t,
            a = this,
            i = a.params,
            s = m(e.target).closest("." + i.slideClass)[0],
            r = !1;
          if (s) for (var n = 0; n < a.slides.length; n += 1) if (a.slides[n] === s) {
            r = !0, t = n;
            break;
          }
          if (!s || !r) return a.clickedSlide = void 0, void (a.clickedIndex = void 0);
          a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(m(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = t, i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide();
        }
      },
      translate: {
        getTranslate: function getTranslate(e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
            a = t.params,
            i = t.rtlTranslate,
            s = t.translate,
            r = t.$wrapperEl;
          if (a.virtualTranslate) return i ? -s : s;
          if (a.cssMode) return s;
          var n = T(r[0], e);
          return i && (n = -n), n || 0;
        },
        setTranslate: function setTranslate(e, t) {
          var a = this,
            i = a.rtlTranslate,
            s = a.params,
            r = a.$wrapperEl,
            n = a.wrapperEl,
            l = a.progress,
            o = 0,
            d = 0;
          a.isHorizontal() ? o = i ? -e : e : d = e, s.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.cssMode ? n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -d : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + d + "px, 0px)"), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : d;
          var p = a.maxTranslate() - a.minTranslate();
          (0 === p ? 0 : (e - a.minTranslate()) / p) !== l && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
        },
        minTranslate: function minTranslate() {
          return -this.snapGrid[0];
        },
        maxTranslate: function maxTranslate() {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function translateTo(e, t, a, i, s) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === i && (i = !0);
          var r = this,
            n = r.params,
            l = r.wrapperEl;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o,
            d = r.minTranslate(),
            p = r.maxTranslate();
          if (o = i && e > d ? d : i && e < p ? p : e, r.updateProgress(o), n.cssMode) {
            var u,
              c = r.isHorizontal();
            if (0 === t) l[c ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((u = {})[c ? "left" : "top"] = -o, u.behavior = "smooth", u));else l[c ? "scrollLeft" : "scrollTop"] = -o;
            return !0;
          }
          return 0 === t ? (r.setTransition(0), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, a && r.emit("transitionEnd"));
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
        }
      },
      transition: {
        setTransition: function setTransition(e, t) {
          var a = this;
          a.params.cssMode || a.$wrapperEl.transition(e), a.emit("setTransition", e, t);
        },
        transitionStart: function transitionStart(e, t) {
          void 0 === e && (e = !0);
          var a = this,
            i = a.activeIndex,
            s = a.params,
            r = a.previousIndex;
          if (!s.cssMode) {
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
              if ("reset" === n) return void a.emit("slideResetTransitionStart");
              a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function transitionEnd(e, t) {
          void 0 === e && (e = !0);
          var a = this,
            i = a.activeIndex,
            s = a.previousIndex,
            r = a.params;
          if (a.animating = !1, !r.cssMode) {
            a.setTransition(0);
            var n = t;
            if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
              if ("reset" === n) return void a.emit("slideResetTransitionEnd");
              a.emit("slideChangeTransitionEnd"), "next" === n ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
            }
          }
        }
      },
      slide: {
        slideTo: function slideTo(e, t, a, i, s) {
          if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + _typeof(e) + "] given.");
          if ("string" == typeof e) {
            var r = parseInt(e, 10);
            if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
            e = r;
          }
          var n = this,
            l = e;
          l < 0 && (l = 0);
          var o = n.params,
            d = n.snapGrid,
            p = n.slidesGrid,
            u = n.previousIndex,
            c = n.activeIndex,
            h = n.rtlTranslate,
            v = n.wrapperEl,
            f = n.enabled;
          if (n.animating && o.preventInteractionOnTransition || !f && !i && !s) return !1;
          var m = Math.min(n.params.slidesPerGroupSkip, l),
            g = m + Math.floor((l - m) / n.params.slidesPerGroup);
          g >= d.length && (g = d.length - 1), (c || o.initialSlide || 0) === (u || 0) && a && n.emit("beforeSlideChangeStart");
          var b,
            w = -d[g];
          if (n.updateProgress(w), o.normalizeSlideIndex) for (var y = 0; y < p.length; y += 1) {
            var E = -Math.floor(100 * w),
              x = Math.floor(100 * p[y]),
              T = Math.floor(100 * p[y + 1]);
            void 0 !== p[y + 1] ? E >= x && E < T - (T - x) / 2 ? l = y : E >= x && E < T && (l = y + 1) : E >= x && (l = y);
          }
          if (n.initialized && l !== c) {
            if (!n.allowSlideNext && w < n.translate && w < n.minTranslate()) return !1;
            if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (c || 0) !== l) return !1;
          }
          if (b = l > c ? "next" : l < c ? "prev" : "reset", h && -w === n.translate || !h && w === n.translate) return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== b && (n.transitionStart(a, b), n.transitionEnd(a, b)), !1;
          if (o.cssMode) {
            var C,
              S = n.isHorizontal(),
              M = -w;
            if (h && (M = v.scrollWidth - v.offsetWidth - M), 0 === t) v[S ? "scrollLeft" : "scrollTop"] = M;else if (v.scrollTo) v.scrollTo(((C = {})[S ? "left" : "top"] = M, C.behavior = "smooth", C));else v[S ? "scrollLeft" : "scrollTop"] = M;
            return !0;
          }
          return 0 === t ? (n.setTransition(0), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.transitionEnd(a, b)) : (n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
            n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(a, b));
          }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0;
        },
        slideToLoop: function slideToLoop(e, t, a, i) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
          var s = this,
            r = e;
          return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
        },
        slideNext: function slideNext(e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            r = i.animating;
          if (!i.enabled) return i;
          var n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
          }
          return i.slideTo(i.activeIndex + n, e, t, a);
        },
        slidePrev: function slidePrev(e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            r = i.animating,
            n = i.snapGrid,
            l = i.slidesGrid,
            o = i.rtlTranslate;
          if (!i.enabled) return i;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var p,
            u = d(o ? i.translate : -i.translate),
            c = n.map(function (e) {
              return d(e);
            }),
            h = n[c.indexOf(u) - 1];
          return void 0 === h && s.cssMode && n.forEach(function (e) {
            !h && u >= e && (h = e);
          }), void 0 !== h && (p = l.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a);
        },
        slideReset: function slideReset(e, t, a) {
          return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
        },
        slideToClosest: function slideToClosest(e, t, a, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
          var s = this,
            r = s.activeIndex,
            n = Math.min(s.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / s.params.slidesPerGroup),
            o = s.rtlTranslate ? s.translate : -s.translate;
          if (o >= s.snapGrid[l]) {
            var d = s.snapGrid[l];
            o - d > (s.snapGrid[l + 1] - d) * i && (r += s.params.slidesPerGroup);
          } else {
            var p = s.snapGrid[l - 1];
            o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup);
          }
          return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, a);
        },
        slideToClickedSlide: function slideToClickedSlide() {
          var e,
            t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
            r = t.clickedIndex;
          if (a.loop) {
            if (t.animating) return;
            e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E(function () {
              t.slideTo(r);
            })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E(function () {
              t.slideTo(r);
            })) : t.slideTo(r);
          } else t.slideTo(r);
        }
      },
      loop: {
        loopCreate: function loopCreate() {
          var e = this,
            t = r(),
            a = e.params,
            i = e.$wrapperEl;
          i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
          var s = i.children("." + a.slideClass);
          if (a.loopFillGroupWithBlank) {
            var n = a.slidesPerGroup - s.length % a.slidesPerGroup;
            if (n !== a.slidesPerGroup) {
              for (var l = 0; l < n; l += 1) {
                var o = m(t.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
                i.append(o);
              }
              s = i.children("." + a.slideClass);
            }
          }
          "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10)), e.loopedSlides += a.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
          var d = [],
            p = [];
          s.each(function (t, a) {
            var i = m(t);
            a < e.loopedSlides && p.push(t), a < s.length && a >= s.length - e.loopedSlides && d.push(t), i.attr("data-swiper-slide-index", a);
          });
          for (var u = 0; u < p.length; u += 1) i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
          for (var c = d.length - 1; c >= 0; c -= 1) i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
        },
        loopFix: function loopFix() {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            a = e.activeIndex,
            i = e.slides,
            s = e.loopedSlides,
            r = e.allowSlidePrev,
            n = e.allowSlideNext,
            l = e.snapGrid,
            o = e.rtlTranslate;
          e.allowSlidePrev = !0, e.allowSlideNext = !0;
          var d = -l[a] - e.getTranslate();
          if (a < s) t = i.length - 3 * s + a, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);else if (a >= i.length - s) {
            t = -i.length + a + s, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
          }
          e.allowSlidePrev = r, e.allowSlideNext = n, e.emit("loopFix");
        },
        loopDestroy: function loopDestroy() {
          var e = this,
            t = e.$wrapperEl,
            a = e.params,
            i = e.slides;
          t.children("." + a.slideClass + "." + a.slideDuplicateClass + ",." + a.slideClass + "." + a.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
        }
      },
      grabCursor: {
        setGrabCursor: function setGrabCursor(e) {
          var t = this;
          if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
            var a = t.el;
            a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab";
          }
        },
        unsetGrabCursor: function unsetGrabCursor() {
          var e = this;
          e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "");
        }
      },
      manipulation: {
        appendSlide: function appendSlide(e) {
          var t = this,
            a = t.$wrapperEl,
            i = t.params;
          if (i.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);else a.append(e);
          i.loop && t.loopCreate(), i.observer && t.support.observer || t.update();
        },
        prependSlide: function prependSlide(e) {
          var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          a.loop && t.loopDestroy();
          var r = s + 1;
          if ("object" == _typeof(e) && "length" in e) {
            for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
            r = s + e.length;
          } else i.prepend(e);
          a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), t.slideTo(r, 0, !1);
        },
        addSlide: function addSlide(e, t) {
          var a = this,
            i = a.$wrapperEl,
            s = a.params,
            r = a.activeIndex;
          s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
          var n = a.slides.length;
          if (e <= 0) a.prependSlide(t);else if (e >= n) a.appendSlide(t);else {
            for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
              var p = a.slides.eq(d);
              p.remove(), o.unshift(p);
            }
            if ("object" == _typeof(t) && "length" in t) {
              for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
              l = r > e ? r + t.length : r;
            } else i.append(t);
            for (var c = 0; c < o.length; c += 1) i.append(o[c]);
            s.loop && a.loopCreate(), s.observer && a.support.observer || a.update(), s.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1);
          }
        },
        removeSlide: function removeSlide(e) {
          var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
          var r,
            n = s;
          if ("object" == _typeof(e) && "length" in e) {
            for (var l = 0; l < e.length; l += 1) r = e[l], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
            n = Math.max(n, 0);
          } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
          a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
        },
        removeAllSlides: function removeAllSlides() {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        }
      },
      events: {
        attachEvents: function attachEvents() {
          var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support;
          e.onTouchStart = N.bind(e), e.onTouchMove = G.bind(e), e.onTouchEnd = B.bind(e), a.cssMode && (e.onScroll = X.bind(e)), e.onClick = R.bind(e);
          var d = !!a.nested;
          if (!o.touch && o.pointerEvents) s.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, d), t.addEventListener(i.end, e.onTouchEnd, !1);else {
            if (o.touch) {
              var p = !("touchstart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.addEventListener(i.start, e.onTouchStart, p), s.addEventListener(i.move, e.onTouchMove, o.passiveListener ? {
                passive: !1,
                capture: d
              } : d), s.addEventListener(i.end, e.onTouchEnd, p), i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p), Y || (t.addEventListener("touchstart", V), Y = !0);
            }
            (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, d), t.addEventListener("mouseup", e.onTouchEnd, !1));
          }
          (a.preventClicks || a.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), a.cssMode && n.addEventListener("scroll", e.onScroll), a.updateOnWindowResize ? e.on(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : e.on("observerUpdate", H, !0);
        },
        detachEvents: function detachEvents() {
          var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support,
            d = !!a.nested;
          if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, d), t.removeEventListener(i.end, e.onTouchEnd, !1);else {
            if (o.touch) {
              var p = !("onTouchStart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.removeEventListener(i.start, e.onTouchStart, p), s.removeEventListener(i.move, e.onTouchMove, d), s.removeEventListener(i.end, e.onTouchEnd, p), i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p);
            }
            (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, d), t.removeEventListener("mouseup", e.onTouchEnd, !1));
          }
          (a.preventClicks || a.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), a.cssMode && n.removeEventListener("scroll", e.onScroll), e.off(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H);
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides,
            s = void 0 === i ? 0 : i,
            r = e.params,
            n = e.$el,
            l = r.breakpoints;
          if (l && (!l || 0 !== Object.keys(l).length)) {
            var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
            if (o && e.currentBreakpoint !== o) {
              var d = o in l ? l[o] : void 0;
              d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                var t = d[e];
                void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
              });
              var p = d || e.originalParams,
                u = r.slidesPerColumn > 1,
                c = p.slidesPerColumn > 1,
                h = r.enabled;
              u && !c ? (n.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !u && c && (n.addClass(r.containerModifierClass + "multirow"), (p.slidesPerColumnFill && "column" === p.slidesPerColumnFill || !p.slidesPerColumnFill && "column" === r.slidesPerColumnFill) && n.addClass(r.containerModifierClass + "multirow-column"), e.emitContainerClasses());
              var v = p.direction && p.direction !== r.direction,
                f = r.loop && (p.slidesPerView !== r.slidesPerView || v);
              v && a && e.changeDirection(), M(e.params, p);
              var m = e.params.enabled;
              M(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), h && !m ? e.disable() : !h && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", p), f && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", p);
            }
          }
        },
        getBreakpoint: function getBreakpoint(e, t, a) {
          if (void 0 === t && (t = "window"), e && ("container" !== t || a)) {
            var i = !1,
              s = l(),
              r = "window" === t ? s.innerHeight : a.clientHeight,
              n = Object.keys(e).map(function (e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return {
                    value: r * t,
                    point: e
                  };
                }
                return {
                  value: e,
                  point: e
                };
              });
            n.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var o = 0; o < n.length; o += 1) {
              var d = n[o],
                p = d.point,
                u = d.value;
              "window" === t ? s.matchMedia("(min-width: " + u + "px)").matches && (i = p) : u <= a.clientWidth && (i = p);
            }
            return i || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this,
            t = e.params,
            a = e.isLocked,
            i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
          t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), a && a !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update());
        }
      },
      classes: {
        addClasses: function addClasses() {
          var e,
            t,
            a,
            i = this,
            s = i.classNames,
            r = i.params,
            n = i.rtl,
            l = i.$el,
            o = i.device,
            d = i.support,
            p = (e = ["initialized", r.direction, {
              "pointer-events": d.pointerEvents && !d.touch
            }, {
              "free-mode": r.freeMode
            }, {
              autoheight: r.autoHeight
            }, {
              rtl: n
            }, {
              multirow: r.slidesPerColumn > 1
            }, {
              "multirow-column": r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill
            }, {
              android: o.android
            }, {
              ios: o.ios
            }, {
              "css-mode": r.cssMode
            }], t = r.containerModifierClass, a = [], e.forEach(function (e) {
              "object" == _typeof(e) ? Object.keys(e).forEach(function (i) {
                e[i] && a.push(t + i);
              }) : "string" == typeof e && a.push(t + e);
            }), a);
          s.push.apply(s, p), l.addClass([].concat(s).join(" ")), i.emitContainerClasses();
        },
        removeClasses: function removeClasses() {
          var e = this,
            t = e.$el,
            a = e.classNames;
          t.removeClass(a.join(" ")), e.emitContainerClasses();
        }
      },
      images: {
        loadImage: function loadImage(e, t, a, i, s, r) {
          var n,
            o = l();
          function d() {
            r && r();
          }
          m(e).parent("picture")[0] || e.complete && s ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : d();
        },
        preloadImages: function preloadImages() {
          var e = this;
          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
    _ = {},
    q = function () {
      function t() {
        for (var e, a, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
        if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? a = s[0] : (e = s[0], a = s[1]), a || (a = {}), a = M({}, a), e && !a.el && (a.el = e), a.el && m(a.el).length > 1) {
          var n = [];
          return m(a.el).each(function (e) {
            var i = M({}, a, {
              el: e
            });
            n.push(new t(i));
          }), n;
        }
        var l = this;
        l.__swiper__ = !0, l.support = $(), l.device = L({
          userAgent: a.userAgent
        }), l.browser = I(), l.eventsListeners = {}, l.eventsAnyListeners = [], void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
          var t = l.modules[e];
          if (t.params) {
            var i = Object.keys(t.params)[0],
              s = t.params[i];
            if ("object" != _typeof(s) || null === s) return;
            if (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === a[i] && (a[i] = {
              auto: !0
            }), !(i in a) || !("enabled" in s)) return;
            !0 === a[i] && (a[i] = {
              enabled: !0
            }), "object" != _typeof(a[i]) || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
              enabled: !1
            });
          }
        });
        var o,
          d,
          p = M({}, W);
        return l.useParams(p), l.params = M({}, p, _, a), l.originalParams = M({}, l.params), l.passedParams = M({}, a), l.params && l.params.on && Object.keys(l.params.on).forEach(function (e) {
          l.on(e, l.params.on[e]);
        }), l.params && l.params.onAny && l.onAny(l.params.onAny), l.$ = m, M(l, {
          enabled: l.params.enabled,
          el: e,
          classNames: [],
          slides: m(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === l.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === l.params.direction;
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEvents: (o = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], l.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
            start: o[0],
            move: o[1],
            end: o[2],
            cancel: o[3]
          }, l.touchEventsDesktop = {
            start: d[0],
            move: d[1],
            end: d[2]
          }, l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: l.params.focusableElements,
            lastClickTime: x(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), l.useModules(), l.emit("_swiper"), l.params.init && l.init(), l;
      }
      var a,
        i,
        s,
        n = t.prototype;
      return n.enable = function () {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }, n.disable = function () {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }, n.setProgress = function (e, t) {
        var a = this;
        e = Math.min(Math.max(e, 0), 1);
        var i = a.minTranslate(),
          s = (a.maxTranslate() - i) * e + i;
        a.translateTo(s, void 0 === t ? 0 : t), a.updateActiveIndex(), a.updateSlidesClasses();
      }, n.emitContainerClasses = function () {
        var e = this;
        if (e.params._emitClasses && e.el) {
          var t = e.el.className.split(" ").filter(function (t) {
            return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
          });
          e.emit("_containerClasses", t.join(" "));
        }
      }, n.getSlideClasses = function (e) {
        var t = this;
        return e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }, n.emitSlidesClasses = function () {
        var e = this;
        if (e.params._emitClasses && e.el) {
          var t = [];
          e.slides.each(function (a) {
            var i = e.getSlideClasses(a);
            t.push({
              slideEl: a,
              classNames: i
            }), e.emit("_slideClass", a, i);
          }), e.emit("_slideClasses", t);
        }
      }, n.slidesPerViewDynamic = function () {
        var e = this,
          t = e.params,
          a = e.slides,
          i = e.slidesGrid,
          s = e.size,
          r = e.activeIndex,
          n = 1;
        if (t.centeredSlides) {
          for (var l, o = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !l && (n += 1, (o += a[d].swiperSlideSize) > s && (l = !0));
          for (var p = r - 1; p >= 0; p -= 1) a[p] && !l && (n += 1, (o += a[p].swiperSlideSize) > s && (l = !0));
        } else for (var u = r + 1; u < a.length; u += 1) i[u] - i[r] < s && (n += 1);
        return n;
      }, n.update = function () {
        var e = this;
        if (e && !e.destroyed) {
          var t = e.snapGrid,
            a = e.params;
          a.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), a.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
        function i() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
        }
      }, n.changeDirection = function (e, t) {
        void 0 === t && (t = !0);
        var a = this,
          i = a.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (a.$el.removeClass("" + a.params.containerModifierClass + i).addClass("" + a.params.containerModifierClass + e), a.emitContainerClasses(), a.params.direction = e, a.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), a.emit("changeDirection"), t && a.update()), a;
      }, n.mount = function (e) {
        var t = this;
        if (t.mounted) return !0;
        var a = m(e || t.params.el);
        if (!(e = a[0])) return !1;
        e.swiper = t;
        var i = function i() {
            return "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
          },
          s = function () {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              var t = m(e.shadowRoot.querySelector(i()));
              return t.children = function (e) {
                return a.children(e);
              }, t;
            }
            return a.children(i());
          }();
        if (0 === s.length && t.params.createElements) {
          var n = r().createElement("div");
          s = m(n), n.className = t.params.wrapperClass, a.append(n), a.children("." + t.params.slideClass).each(function (e) {
            s.append(e);
          });
        }
        return M(t, {
          $el: a,
          el: e,
          $wrapperEl: s,
          wrapperEl: s[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction")),
          wrongRTL: "-webkit-box" === s.css("display")
        }), !0;
      }, n.init = function (e) {
        var t = this;
        return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }, n.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var a,
          i = this,
          s = i.params,
          r = i.$el,
          n = i.$wrapperEl,
          l = i.slides;
        return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
          i.off(e);
        }), !1 !== e && (i.$el[0].swiper = null, a = i, Object.keys(a).forEach(function (e) {
          try {
            a[e] = null;
          } catch (e) {}
          try {
            delete a[e];
          } catch (e) {}
        })), i.destroyed = !0), null;
      }, t.extendDefaults = function (e) {
        M(_, e);
      }, t.installModule = function (e) {
        t.prototype.modules || (t.prototype.modules = {});
        var a = e.name || Object.keys(t.prototype.modules).length + "_" + x();
        t.prototype.modules[a] = e;
      }, t.use = function (e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return t.installModule(e);
        }), t) : (t.installModule(e), t);
      }, a = t, s = [{
        key: "extendedDefaults",
        get: function get() {
          return _;
        }
      }, {
        key: "defaults",
        get: function get() {
          return W;
        }
      }], (i = null) && e(a.prototype, i), s && e(a, s), t;
    }();
  Object.keys(F).forEach(function (e) {
    Object.keys(F[e]).forEach(function (t) {
      q.prototype[t] = F[e][t];
    });
  }), q.use([O, D]);
  var j = {
      update: function update(e) {
        var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          u = d.to,
          c = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          b,
          w = t.activeIndex || 0;
        m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
        var y = Math.max((w || 0) - b, 0),
          E = Math.min((w || 0) + g, c.length - 1),
          x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
        function T() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (M(t.virtual, {
          from: y,
          to: E,
          offset: x,
          slidesGrid: t.slidesGrid
        }), p === y && u === E && !e) return t.slidesGrid !== h && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: x,
          from: y,
          to: E,
          slides: function () {
            for (var e = [], t = y; t <= E; t += 1) e.push(c[t]);
            return e;
          }()
        }), void (t.params.virtual.renderExternalUpdate && T());
        var C = [],
          S = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = p; z <= u; z += 1) (z < y || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
        for (var P = 0; P < c.length; P += 1) P >= y && P <= E && (void 0 === u || e ? S.push(P) : (P > u && S.push(P), P < p && C.push(P)));
        S.forEach(function (e) {
          t.$wrapperEl.append(v(c[e], e));
        }), C.sort(function (e, t) {
          return t - e;
        }).forEach(function (e) {
          t.$wrapperEl.prepend(v(c[e], e));
        }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
      },
      renderSlide: function renderSlide(e, t) {
        var a = this,
          i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide ? m(i.renderSlide.call(a, e, t)) : m('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
      },
      appendSlide: function appendSlide(e) {
        var t = this;
        if ("object" == _typeof(e) && "length" in e) for (var a = 0; a < e.length; a += 1) e[a] && t.virtual.slides.push(e[a]);else t.virtual.slides.push(e);
        t.virtual.update(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
          i = a + e.length, s = e.length;
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
            l = {};
          Object.keys(n).forEach(function (e) {
            var t = n[e],
              a = t.attr("data-swiper-slide-index");
            a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1), l[parseInt(e, 10) + s] = t;
          }), t.virtual.cache = l;
        }
        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeSlide: function removeSlide(e) {
        var t = this;
        if (null != e) {
          var a = t.activeIndex;
          if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
          t.virtual.update(!0), t.slideTo(a, 0);
        }
      },
      removeAllSlides: function removeAllSlides() {
        var e = this;
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
      }
    },
    U = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        z(this, {
          virtual: t({}, j, {
            slides: this.params.virtual.slides,
            cache: {}
          })
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = {
              watchSlidesProgress: !0
            };
            M(e.params, t), M(e.originalParams, t), e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function setTranslate(e) {
          e.params.virtual.enabled && e.virtual.update();
        }
      }
    },
    K = {
      handle: function handle(e) {
        var t = this;
        if (t.enabled) {
          var a = l(),
            i = r(),
            s = t.rtlTranslate,
            n = e;
          n.originalEvent && (n = n.originalEvent);
          var o = n.keyCode || n.charCode,
            d = t.params.keyboard.pageUpDown,
            p = d && 33 === o,
            u = d && 34 === o,
            c = 37 === o,
            h = 39 === o,
            v = 38 === o,
            f = 40 === o;
          if (!t.allowSlideNext && (t.isHorizontal() && h || t.isVertical() && f || u)) return !1;
          if (!t.allowSlidePrev && (t.isHorizontal() && c || t.isVertical() && v || p)) return !1;
          if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
            if (t.params.keyboard.onlyInViewport && (p || u || c || h || v || f)) {
              var m = !1;
              if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
              var g = t.$el,
                b = g[0].clientWidth,
                w = g[0].clientHeight,
                y = a.innerWidth,
                E = a.innerHeight,
                x = t.$el.offset();
              s && (x.left -= t.$el[0].scrollLeft);
              for (var T = [[x.left, x.top], [x.left + b, x.top], [x.left, x.top + w], [x.left + b, x.top + w]], C = 0; C < T.length; C += 1) {
                var S = T[C];
                if (S[0] >= 0 && S[0] <= y && S[1] >= 0 && S[1] <= E) {
                  if (0 === S[0] && 0 === S[1]) continue;
                  m = !0;
                }
              }
              if (!m) return;
            }
            t.isHorizontal() ? ((p || u || c || h) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((u || h) && !s || (p || c) && s) && t.slideNext(), ((p || c) && !s || (u || h) && s) && t.slidePrev()) : ((p || u || v || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (u || f) && t.slideNext(), (p || v) && t.slidePrev()), t.emit("keyPress", o);
          }
        }
      },
      enable: function enable() {
        var e = this,
          t = r();
        e.keyboard.enabled || (m(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0);
      },
      disable: function disable() {
        var e = this,
          t = r();
        e.keyboard.enabled && (m(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1);
      }
    },
    Z = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0,
          pageUpDown: !0
        }
      },
      create: function create() {
        z(this, {
          keyboard: t({
            enabled: !1
          }, K)
        });
      },
      on: {
        init: function init(e) {
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function destroy(e) {
          e.keyboard.enabled && e.keyboard.disable();
        }
      }
    };
  var J = {
      lastScrollTime: x(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function event() {
        return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
          var e = r(),
            t = "onwheel",
            a = (t in e);
          if (!a) {
            var i = e.createElement("div");
            i.setAttribute(t, "return;"), a = "function" == typeof i.onwheel;
          }
          return !a && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (a = e.implementation.hasFeature("Events.wheel", "3.0")), a;
        }() ? "wheel" : "mousewheel";
      },
      normalize: function normalize(e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
          spinX: t,
          spinY: a,
          pixelX: i,
          pixelY: s
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        this.enabled && (this.mouseEntered = !0);
      },
      handleMouseLeave: function handleMouseLeave() {
        this.enabled && (this.mouseEntered = !1);
      },
      handle: function handle(e) {
        var t = e,
          a = this;
        if (a.enabled) {
          var i = a.params.mousewheel;
          a.params.cssMode && t.preventDefault();
          var s = a.$el;
          if ("container" !== a.params.mousewheel.eventsTarget && (s = m(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges) return !0;
          t.originalEvent && (t = t.originalEvent);
          var r = 0,
            n = a.rtlTranslate ? -1 : 1,
            l = J.normalize(t);
          if (i.forceToAxis) {
            if (a.isHorizontal()) {
              if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
              r = -l.pixelX * n;
            } else {
              if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
              r = -l.pixelY;
            }
          } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
          if (0 === r) return !0;
          i.invert && (r = -r);
          var o = a.getTranslate() + r * i.sensitivity;
          if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), (!!a.params.loop || !(o === a.minTranslate() || o === a.maxTranslate())) && a.params.nested && t.stopPropagation(), a.params.freeMode) {
            var d = {
                time: x(),
                delta: Math.abs(r),
                direction: Math.sign(r)
              },
              p = a.mousewheel.lastEventBeforeSnap,
              u = p && d.time < p.time + 500 && d.delta <= p.delta && d.direction === p.direction;
            if (!u) {
              a.mousewheel.lastEventBeforeSnap = void 0, a.params.loop && a.loopFix();
              var c = a.getTranslate() + r * i.sensitivity,
                h = a.isBeginning,
                v = a.isEnd;
              if (c >= a.minTranslate() && (c = a.minTranslate()), c <= a.maxTranslate() && (c = a.maxTranslate()), a.setTransition(0), a.setTranslate(c), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!h && a.isBeginning || !v && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
                clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = void 0;
                var f = a.mousewheel.recentWheelEvents;
                f.length >= 15 && f.shift();
                var g = f.length ? f[f.length - 1] : void 0,
                  b = f[0];
                if (f.push(d), g && (d.delta > g.delta || d.direction !== g.direction)) f.splice(0);else if (f.length >= 15 && d.time - b.time < 500 && b.delta - d.delta >= 1 && d.delta <= 6) {
                  var w = r > 0 ? .8 : .2;
                  a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.mousewheel.timeout = E(function () {
                    a.slideToClosest(a.params.speed, !0, void 0, w);
                  }, 0);
                }
                a.mousewheel.timeout || (a.mousewheel.timeout = E(function () {
                  a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5);
                }, 500));
              }
              if (u || a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), c === a.minTranslate() || c === a.maxTranslate()) return !0;
            }
          } else {
            var y = {
                time: x(),
                delta: Math.abs(r),
                direction: Math.sign(r),
                raw: e
              },
              T = a.mousewheel.recentWheelEvents;
            T.length >= 2 && T.shift();
            var C = T.length ? T[T.length - 1] : void 0;
            if (T.push(y), C ? (y.direction !== C.direction || y.delta > C.delta || y.time > C.time + 150) && a.mousewheel.animateSlider(y) : a.mousewheel.animateSlider(y), a.mousewheel.releaseScroll(y)) return !0;
          }
          return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
        }
      },
      animateSlider: function animateSlider(e) {
        var t = this,
          a = l();
        return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = new a.Date().getTime(), !1));
      },
      releaseScroll: function releaseScroll(e) {
        var t = this,
          a = t.params.mousewheel;
        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
        } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;
        return !1;
      },
      enable: function enable() {
        var e = this,
          t = J.event();
        if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (e.mousewheel.enabled) return !1;
        var a = e.$el;
        return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.on("mouseenter", e.mousewheel.handleMouseEnter), a.on("mouseleave", e.mousewheel.handleMouseLeave), a.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
      },
      disable: function disable() {
        var e = this,
          t = J.event();
        if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (!e.mousewheel.enabled) return !1;
        var a = e.$el;
        return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
      }
    },
    Q = {
      toggleEl: function toggleEl(e, t) {
        e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
      },
      update: function update() {
        var e = this,
          t = e.params.navigation,
          a = e.navigation.toggleEl;
        if (!e.params.loop) {
          var i = e.navigation,
            s = i.$nextEl,
            r = i.$prevEl;
          r && r.length > 0 && (e.isBeginning ? a(r, !0) : a(r, !1), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && s.length > 0 && (e.isEnd ? a(s, !0) : a(s, !1), e.params.watchOverflow && e.enabled && s[e.isLocked ? "addClass" : "removeClass"](t.lockClass));
        }
      },
      onPrevClick: function onPrevClick(e) {
        var t = this;
        e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        var t = this;
        e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext();
      },
      init: function init() {
        var e,
          t,
          a = this,
          i = a.params.navigation;
        (a.params.navigation = k(a.$el, a.params.navigation, a.params.createElements, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev"
        }), i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), t && t.length > 0 && t.on("click", a.navigation.onPrevClick), M(a.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }), a.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
      },
      destroy: function destroy() {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
        a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
      }
    },
    ee = {
      update: function update() {
        var e = this,
          t = e.rtl,
          a = e.params.pagination;
        if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var i,
            s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            r = e.pagination.$el,
            n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
          if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== e.params.paginationType && (i = n + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
            var l,
              o,
              d,
              p = e.pagination.bullets;
            if (a.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex, e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = i - e.pagination.dynamicBulletIndex, d = ((o = l + (Math.min(p.length, a.dynamicMainBullets) - 1)) + l) / 2), p.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), r.length > 1) p.each(function (e) {
              var t = m(e),
                s = t.index();
              s === i && t.addClass(a.bulletActiveClass), a.dynamicBullets && (s >= l && s <= o && t.addClass(a.bulletActiveClass + "-main"), s === l && t.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), s === o && t.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"));
            });else {
              var u = p.eq(i),
                c = u.index();
              if (u.addClass(a.bulletActiveClass), a.dynamicBullets) {
                for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1) p.eq(f).addClass(a.bulletActiveClass + "-main");
                if (e.params.loop) {
                  if (c >= p.length - a.dynamicMainBullets) {
                    for (var g = a.dynamicMainBullets; g >= 0; g -= 1) p.eq(p.length - g).addClass(a.bulletActiveClass + "-main");
                    p.eq(p.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev");
                  } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
                } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
              }
            }
            if (a.dynamicBullets) {
              var b = Math.min(p.length, a.dynamicMainBullets + 4),
                w = (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                y = t ? "right" : "left";
              p.css(e.isHorizontal() ? y : "top", w + "px");
            }
          }
          if ("fraction" === a.type && (r.find(P(a.currentClass)).text(a.formatFractionCurrent(i + 1)), r.find(P(a.totalClass)).text(a.formatFractionTotal(n))), "progressbar" === a.type) {
            var E;
            E = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
            var x = (i + 1) / n,
              T = 1,
              C = 1;
            "horizontal" === E ? T = x : C = x, r.find(P(a.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")").transition(e.params.speed);
          }
          "custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e, i + 1, n)), e.emit("paginationRender", r[0])) : e.emit("paginationUpdate", r[0]), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](a.lockClass);
        }
      },
      render: function render() {
        var e = this,
          t = e.params.pagination;
        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && !e.params.loop && r > a && (r = a);
            for (var n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
            i.html(s), e.pagination.bullets = i.find(P(t.bulletClass));
          }
          "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function init() {
        var e = this;
        e.params.pagination = k(e.$el, e.params.pagination, e.params.createElements, {
          el: "swiper-pagination"
        });
        var t = e.params.pagination;
        if (t.el) {
          var a = m(t.el);
          0 !== a.length && (e.params.uniqueNavElements && "string" == typeof t.el && a.length > 1 && (a = e.$el.find(t.el)), "bullets" === t.type && t.clickable && a.addClass(t.clickableClass), a.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (a.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && a.addClass(t.progressbarOppositeClass), t.clickable && a.on("click", P(t.bulletClass), function (t) {
            t.preventDefault();
            var a = m(this).index() * e.params.slidesPerGroup;
            e.params.loop && (a += e.loopedSlides), e.slideTo(a);
          }), M(e.pagination, {
            $el: a,
            el: a[0]
          }), e.enabled || a.addClass(t.lockClass));
        }
      },
      destroy: function destroy() {
        var e = this,
          t = e.params.pagination;
        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", P(t.bulletClass));
        }
      }
    },
    te = {
      setTranslate: function setTranslate() {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            l = t.$el,
            o = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
          a ? (p = -p) > 0 ? (d = s - p, p = 0) : -p + s > r && (d = r + p) : p < 0 ? (d = s + p, p = 0) : p + s > r && (d = r - p), e.isHorizontal() ? (n.transform("translate3d(" + p + "px, 0, 0)"), n[0].style.width = d + "px") : (n.transform("translate3d(0px, " + p + "px, 0)"), n[0].style.height = d + "px"), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
            l[0].style.opacity = 0, l.transition(400);
          }, 1e3));
        }
      },
      setTransition: function setTransition(e) {
        var t = this;
        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
      },
      updateSize: function updateSize() {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          a[0].style.width = "", a[0].style.height = "";
          var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            l = n * (r / e.size);
          s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), M(t, {
            trackSize: r,
            divider: n,
            moveDivider: l,
            dragSize: s
          }), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function getPointerPosition(e) {
        return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
      },
      setDragPosition: function setDragPosition(e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          l = i.trackSize,
          o = i.dragStartPos;
        t = (i.getPointerPosition(e) - r.offset()[a.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (l - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
        var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(d), a.setTranslate(d), a.updateActiveIndex(), a.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e);
      },
      onDragMove: function onDragMove(e) {
        var t = this,
          a = t.scrollbar,
          i = t.$wrapperEl,
          s = a.$el,
          r = a.$dragEl;
        t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e));
      },
      onDragEnd: function onDragEnd(e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el;
        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = E(function () {
          r.css("opacity", 0), r.transition(400);
        }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function enableDraggable() {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          o && (l.touch ? (o.addEventListener(i.start, e.scrollbar.onDragStart, d), o.addEventListener(i.move, e.scrollbar.onDragMove, d), o.addEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.addEventListener(s.start, e.scrollbar.onDragStart, d), t.addEventListener(s.move, e.scrollbar.onDragMove, d), t.addEventListener(s.end, e.scrollbar.onDragEnd, p)));
        }
      },
      disableDraggable: function disableDraggable() {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          o && (l.touch ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, d), o.removeEventListener(i.move, e.scrollbar.onDragMove, d), o.removeEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.removeEventListener(s.start, e.scrollbar.onDragStart, d), t.removeEventListener(s.move, e.scrollbar.onDragMove, d), t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)));
        }
      },
      init: function init() {
        var e = this,
          t = e.scrollbar,
          a = e.$el;
        e.params.scrollbar = k(a, e.params.scrollbar, e.params.createElements, {
          el: "swiper-scrollbar"
        });
        var i = e.params.scrollbar;
        if (i.el) {
          var s = m(i.el);
          e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === a.find(i.el).length && (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length && (r = m('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), M(t, {
            $el: s,
            el: s[0],
            $dragEl: r,
            dragEl: r[0]
          }), i.draggable && t.enableDraggable(), s && s[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
        }
      },
      destroy: function destroy() {
        this.scrollbar.disableDraggable();
      }
    },
    ae = {
      setTransform: function setTransform(e, t) {
        var a = this.rtl,
          i = m(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          l = i.attr("data-swiper-parallax-y"),
          o = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");
        if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p;
        }
        if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");else {
          var u = o - (o - 1) * (1 - Math.abs(t));
          i.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + u + ")");
        }
      },
      setTranslate: function setTranslate() {
        var e = this,
          t = e.$el,
          a = e.slides,
          i = e.progress,
          s = e.snapGrid;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, i);
        }), a.each(function (t, a) {
          var r = t.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(a / 2) - i * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
            e.parallax.setTransform(t, r);
          });
        });
      },
      setTransition: function setTransition(e) {
        void 0 === e && (e = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          var a = m(t),
            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (i = 0), a.transition(i);
        });
      }
    },
    ie = {
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function onGestureStart(e) {
        var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;
        if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !a.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          s.fakeGestureTouched = !0, r.scaleStart = ie.getDistanceBetweenTouches(e);
        }
        r.$slideEl && r.$slideEl.length || (r.$slideEl = m(e.target).closest("." + t.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0;
      },
      onGestureChange: function onGestureChange(e) {
        var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;
        if (!a.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          s.fakeGestureMoved = !0, r.scaleMove = ie.getDistanceBetweenTouches(e);
        }
        r.$imageEl && 0 !== r.$imageEl.length ? (a.gestures ? s.scale = e.scale * s.currentScale : s.scale = r.scaleMove / r.scaleStart * s.currentScale, s.scale > r.maxRatio && (s.scale = r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
      },
      onGestureEnd: function onGestureEnd(e) {
        var t = this,
          a = t.device,
          i = t.support,
          s = t.params.zoom,
          r = t.zoom,
          n = r.gesture;
        if (!i.gestures) {
          if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !a.android) return;
          r.fakeGestureTouched = !1, r.fakeGestureMoved = !1;
        }
        n.$imageEl && 0 !== n.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio), n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (n.$slideEl = void 0));
      },
      onTouchStart: function onTouchStart(e) {
        var t = this.device,
          a = this.zoom,
          i = a.gesture,
          s = a.image;
        i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (t.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      },
      onTouchMove: function onTouchMove(e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0));
          var n = s.width * a.scale,
            l = s.height * a.scale;
          if (!(n < i.slideWidth && l < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - l / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
              if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
              if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
            }
            e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
          }
        }
      },
      onTouchEnd: function onTouchEnd() {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
          a.isTouched = !1, a.isMoved = !1;
          var s = 300,
            r = 300,
            n = i.x * s,
            l = a.currentX + n,
            o = i.y * r,
            d = a.currentY + o;
          0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          a.currentX = l, a.currentY = d;
          var u = a.width * e.scale,
            c = a.height * e.scale;
          a.minX = Math.min(t.slideWidth / 2 - u / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - c / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        var e = this,
          t = e.zoom,
          a = t.gesture;
        a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0);
      },
      toggle: function toggle(e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t["in"](e);
      },
      "in": function _in(e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          o,
          d,
          p,
          u,
          c,
          h,
          v,
          f,
          g,
          b,
          w = this,
          y = l(),
          E = w.zoom,
          x = w.params.zoom,
          T = E.gesture,
          C = E.image;
        (T.$slideEl || (e && e.target && (T.$slideEl = m(e.target).closest("." + w.params.slideClass)), T.$slideEl || (w.params.virtual && w.params.virtual.enabled && w.virtual ? T.$slideEl = w.$wrapperEl.children("." + w.params.slideActiveClass) : T.$slideEl = w.slides.eq(w.activeIndex)), T.$imageEl = T.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), T.$imageWrapEl = T.$imageEl.parent("." + x.containerClass)), T.$imageEl && 0 !== T.$imageEl.length && T.$imageWrapEl && 0 !== T.$imageWrapEl.length) && (T.$slideEl.addClass("" + x.zoomedSlideClass), void 0 === C.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = C.touchesStart.x, a = C.touchesStart.y), E.scale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, E.currentScale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, e ? (g = T.$slideEl[0].offsetWidth, b = T.$slideEl[0].offsetHeight, i = T.$slideEl.offset().left + y.scrollX + g / 2 - t, s = T.$slideEl.offset().top + y.scrollY + b / 2 - a, o = T.$imageEl[0].offsetWidth, d = T.$imageEl[0].offsetHeight, p = o * E.scale, u = d * E.scale, v = -(c = Math.min(g / 2 - p / 2, 0)), f = -(h = Math.min(b / 2 - u / 2, 0)), (r = i * E.scale) < c && (r = c), r > v && (r = v), (n = s * E.scale) < h && (n = h), n > f && (n = f)) : (r = 0, n = 0), T.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), T.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + E.scale + ")"));
      },
      out: function out() {
        var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
        i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && i.$imageWrapEl && 0 !== i.$imageWrapEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
      },
      toggleGestures: function toggleGestures(e) {
        var t = this,
          a = t.zoom,
          i = a.slideSelector,
          s = a.passiveListener;
        t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s), t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s), t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
      },
      enableGestures: function enableGestures() {
        this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
      },
      disableGestures: function disableGestures() {
        this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
      },
      enable: function enable() {
        var e = this,
          t = e.support,
          a = e.zoom;
        if (!a.enabled) {
          a.enabled = !0;
          var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1
            },
            s = !t.passiveListener || {
              passive: !1,
              capture: !0
            },
            r = "." + e.params.slideClass;
          e.zoom.passiveListener = i, e.zoom.slideSelector = r, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, a.onTouchMove, s);
        }
      },
      disable: function disable() {
        var e = this,
          t = e.zoom;
        if (t.enabled) {
          var a = e.support;
          e.zoom.enabled = !1;
          var i = !("touchstart" !== e.touchEvents.start || !a.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1
            },
            s = !a.passiveListener || {
              passive: !1,
              capture: !0
            },
            r = "." + e.params.slideClass;
          a.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, s);
        }
      }
    },
    se = {
      loadInSlide: function loadInSlide(e, t) {
        void 0 === t && (t = !0);
        var a = this,
          i = a.params.lazy;
        if (void 0 !== e && 0 !== a.slides.length) {
          var s = a.virtual && a.params.virtual.enabled ? a.$wrapperEl.children("." + a.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : a.slides.eq(e),
            r = s.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
          !s.hasClass(i.elementClass) || s.hasClass(i.loadedClass) || s.hasClass(i.loadingClass) || r.push(s[0]), 0 !== r.length && r.each(function (e) {
            var r = m(e);
            r.addClass(i.loadingClass);
            var n = r.attr("data-background"),
              l = r.attr("data-src"),
              o = r.attr("data-srcset"),
              d = r.attr("data-sizes"),
              p = r.parent("picture");
            a.loadImage(r[0], l || n, o, d, !1, function () {
              if (null != a && a && (!a || a.params) && !a.destroyed) {
                if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), p.length && p.children("source").each(function (e) {
                  var t = m(e);
                  t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(i.loadedClass).removeClass(i.loadingClass), s.find("." + i.preloaderClass).remove(), a.params.loop && t) {
                  var e = s.attr("data-swiper-slide-index");
                  if (s.hasClass(a.params.slideDuplicateClass)) {
                    var u = a.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + a.params.slideDuplicateClass + ")");
                    a.lazy.loadInSlide(u.index(), !1);
                  } else {
                    var c = a.$wrapperEl.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    a.lazy.loadInSlide(c.index(), !1);
                  }
                }
                a.emit("lazyImageReady", s[0], r[0]), a.params.autoHeight && a.updateAutoHeight();
              }
            }), a.emit("lazyImageLoad", s[0], r[0]);
          });
        }
      },
      load: function load() {
        var e = this,
          t = e.$wrapperEl,
          a = e.params,
          i = e.slides,
          s = e.activeIndex,
          r = e.virtual && a.virtual.enabled,
          n = a.lazy,
          l = a.slidesPerView;
        function o(e) {
          if (r) {
            if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
          } else if (i[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
        }
        if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (t) {
          var a = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
          e.lazy.loadInSlide(a);
        });else if (l > 1) for (var p = s; p < s + l; p += 1) o(p) && e.lazy.loadInSlide(p);else e.lazy.loadInSlide(s);
        if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
          for (var u = n.loadPrevNextAmount, c = l, h = Math.min(s + c + Math.max(u, c), i.length), v = Math.max(s - Math.max(c, u), 0), f = s + l; f < h; f += 1) o(f) && e.lazy.loadInSlide(f);
          for (var g = v; g < s; g += 1) o(g) && e.lazy.loadInSlide(g);
        } else {
          var b = t.children("." + a.slideNextClass);
          b.length > 0 && e.lazy.loadInSlide(d(b));
          var w = t.children("." + a.slidePrevClass);
          w.length > 0 && e.lazy.loadInSlide(d(w));
        }
      },
      checkInViewOnLoad: function checkInViewOnLoad() {
        var e = l(),
          t = this;
        if (t && !t.destroyed) {
          var a = t.params.lazy.scrollingElement ? m(t.params.lazy.scrollingElement) : m(e),
            i = a[0] === e,
            s = i ? e.innerWidth : a[0].offsetWidth,
            r = i ? e.innerHeight : a[0].offsetHeight,
            n = t.$el.offset(),
            o = !1;
          t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);
          for (var d = [[n.left, n.top], [n.left + t.width, n.top], [n.left, n.top + t.height], [n.left + t.width, n.top + t.height]], p = 0; p < d.length; p += 1) {
            var u = d[p];
            if (u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= r) {
              if (0 === u[0] && 0 === u[1]) continue;
              o = !0;
            }
          }
          var c = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          o ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad, c)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, a.on("scroll", t.lazy.checkInViewOnLoad, c));
        }
      }
    },
    re = {
      LinearSpline: function LinearSpline(e, t) {
        var a,
          i,
          s,
          r,
          n,
          l = function l(e, t) {
            for (i = -1, a = e.length; a - i > 1;) e[s = a + i >> 1] <= t ? i = s : a = s;
            return a;
          };
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
        }, this;
      },
      getInterpolateFunction: function getInterpolateFunction(e) {
        var t = this;
        t.controller.spline || (t.controller.spline = t.params.loop ? new re.LinearSpline(t.slidesGrid, e.slidesGrid) : new re.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function setTranslate(e, t) {
        var a,
          i,
          s = this,
          r = s.controller.control,
          n = s.constructor;
        function l(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof n && l(r[o]);else r instanceof n && t !== r && l(r);
      },
      setTransition: function setTransition(e, t) {
        var a,
          i = this,
          s = i.constructor,
          r = i.controller.control;
        function n(t) {
          t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
            t.updateAutoHeight();
          }), t.$wrapperEl.transitionEnd(function () {
            r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd());
          }));
        }
        if (Array.isArray(r)) for (a = 0; a < r.length; a += 1) r[a] !== t && r[a] instanceof s && n(r[a]);else r instanceof s && t !== r && n(r);
      }
    },
    ne = {
      getRandomNumber: function getRandomNumber(e) {
        void 0 === e && (e = 16);
        return "x".repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        });
      },
      makeElFocusable: function makeElFocusable(e) {
        return e.attr("tabIndex", "0"), e;
      },
      makeElNotFocusable: function makeElNotFocusable(e) {
        return e.attr("tabIndex", "-1"), e;
      },
      addElRole: function addElRole(e, t) {
        return e.attr("role", t), e;
      },
      addElRoleDescription: function addElRoleDescription(e, t) {
        return e.attr("aria-roledescription", t), e;
      },
      addElControls: function addElControls(e, t) {
        return e.attr("aria-controls", t), e;
      },
      addElLabel: function addElLabel(e, t) {
        return e.attr("aria-label", t), e;
      },
      addElId: function addElId(e, t) {
        return e.attr("id", t), e;
      },
      addElLive: function addElLive(e, t) {
        return e.attr("aria-live", t), e;
      },
      disableEl: function disableEl(e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function enableEl(e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
        if (13 === e.keyCode || 32 === e.keyCode) {
          var t = this,
            a = t.params.a11y,
            i = m(e.target);
          t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is(P(t.params.pagination.bulletClass)) && i[0].click();
        }
      },
      notify: function notify(e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function updateNavigation() {
        var e = this;
        if (!e.params.loop && e.navigation) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), a && a.length > 0 && (e.isEnd ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a)) : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
        }
      },
      updatePagination: function updatePagination() {
        var e = this,
          t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (a) {
          var i = m(a);
          e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)));
        });
      },
      init: function init() {
        var e = this,
          t = e.params.a11y;
        e.$el.append(e.a11y.liveRegion);
        var a = e.$el;
        t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
        var i = e.$wrapperEl,
          s = i.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
          r = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        e.a11y.addElId(i, s), e.a11y.addElLive(i, r), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), t.slideRole);
        var n,
          l,
          o = e.params.loop ? e.slides.filter(function (t) {
            return !t.classList.contains(e.params.slideDuplicateClass);
          }).length : e.slides.length;
        e.slides.each(function (a, i) {
          var s = m(a),
            r = e.params.loop ? parseInt(s.attr("data-swiper-slide-index"), 10) : i,
            n = t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, o);
          e.a11y.addElLabel(s, n);
        }), e.navigation && e.navigation.$nextEl && (n = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (l = e.navigation.$prevEl), n && n.length && (e.a11y.makeElFocusable(n), "BUTTON" !== n[0].tagName && (e.a11y.addElRole(n, "button"), n.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(n, t.nextSlideMessage), e.a11y.addElControls(n, s)), l && l.length && (e.a11y.makeElFocusable(l), "BUTTON" !== l[0].tagName && (e.a11y.addElRole(l, "button"), l.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(l, t.prevSlideMessage), e.a11y.addElControls(l, s)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", P(e.params.pagination.bulletClass), e.a11y.onEnterOrSpaceKey);
      },
      destroy: function destroy() {
        var e,
          t,
          a = this;
        a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterOrSpaceKey), t && t.off("keydown", a.a11y.onEnterOrSpaceKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", P(a.params.pagination.bulletClass), a.a11y.onEnterOrSpaceKey);
      }
    },
    le = {
      init: function init() {
        var e = this,
          t = l();
        if (e.params.history) {
          if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
          var a = e.history;
          a.initialized = !0, a.paths = le.getPathValues(e.params.url), (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function destroy() {
        var e = l();
        this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function setHistoryPopState() {
        var e = this;
        e.history.paths = le.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
      },
      getPathValues: function getPathValues(e) {
        var t = l(),
          a = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
            return "" !== e;
          }),
          i = a.length;
        return {
          key: a[i - 2],
          value: a[i - 1]
        };
      },
      setHistory: function setHistory(e, t) {
        var a = this,
          i = l();
        if (a.history.initialized && a.params.history.enabled) {
          var s;
          s = a.params.url ? new URL(a.params.url) : i.location;
          var r = a.slides.eq(t),
            n = le.slugify(r.attr("data-history"));
          if (a.params.history.root.length > 0) {
            var o = a.params.history.root;
            "/" === o[o.length - 1] && (o = o.slice(0, o.length - 1)), n = o + "/" + e + "/" + n;
          } else s.pathname.includes(e) || (n = e + "/" + n);
          var d = i.history.state;
          d && d.value === n || (a.params.history.replaceState ? i.history.replaceState({
            value: n
          }, null, n) : i.history.pushState({
            value: n
          }, null, n));
        }
      },
      slugify: function slugify(e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      },
      scrollToSlide: function scrollToSlide(e, t, a) {
        var i = this;
        if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
          var n = i.slides.eq(s);
          if (le.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
            var l = n.index();
            i.slideTo(l, e, a);
          }
        } else i.slideTo(0, e, a);
      }
    },
    oe = {
      onHashChange: function onHashChange() {
        var e = this,
          t = r();
        e.emit("hashChange");
        var a = t.location.hash.replace("#", "");
        if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + a + '"]').index();
          if (void 0 === i) return;
          e.slideTo(i);
        }
      },
      setHash: function setHash() {
        var e = this,
          t = l(),
          a = r();
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""), e.emit("hashSet");else {
          var i = e.slides.eq(e.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
          a.location.hash = s || "", e.emit("hashSet");
        }
      },
      init: function init() {
        var e = this,
          t = r(),
          a = l();
        if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
          e.hashNavigation.initialized = !0;
          var i = t.location.hash.replace("#", "");
          if (i) for (var s = 0, n = e.slides.length; s < n; s += 1) {
            var o = e.slides.eq(s);
            if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(e.params.slideDuplicateClass)) {
              var d = o.index();
              e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
            }
          }
          e.params.hashNavigation.watchState && m(a).on("hashchange", e.hashNavigation.onHashChange);
        }
      },
      destroy: function destroy() {
        var e = l();
        this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashChange);
      }
    },
    de = {
      run: function run() {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
          var t;
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
        }, a);
      },
      start: function start() {
        var e = this;
        return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
      },
      stop: function stop() {
        var e = this;
        return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
      },
      pause: function pause(e) {
        var t = this;
        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
          t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd);
        }) : (t.autoplay.paused = !1, t.autoplay.run())));
      },
      onVisibilityChange: function onVisibilityChange() {
        var e = this,
          t = r();
        "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
      },
      onTransitionEnd: function onTransitionEnd(e) {
        var t = this;
        t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
          t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
        }), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
      },
      onMouseEnter: function onMouseEnter() {
        var e = this;
        e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
        });
      },
      onMouseLeave: function onMouseLeave() {
        var e = this;
        e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, e.autoplay.run());
      },
      attachMouseEvents: function attachMouseEvents() {
        var e = this;
        e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", e.autoplay.onMouseEnter), e.$el.on("mouseleave", e.autoplay.onMouseLeave));
      },
      detachMouseEvents: function detachMouseEvents() {
        var e = this;
        e.$el.off("mouseenter", e.autoplay.onMouseEnter), e.$el.off("mouseleave", e.autoplay.onMouseLeave);
      }
    },
    pe = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || (r = s, s = 0);
          var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: n
          }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
          a = t.slides,
          i = t.$wrapperEl;
        if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
          var s = !1;
          a.transitionEnd(function () {
            if (!s && t && !t.destroyed) {
              s = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a]);
            }
          });
        }
      }
    },
    ue = {
      setTranslate: function setTranslate() {
        var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          l = t.rtlTranslate,
          o = t.size,
          d = t.browser,
          p = t.params.cubeEffect,
          u = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          h = 0;
        p.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
          height: r + "px"
        })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), a.append(e)));
        for (var v = 0; v < s.length; v += 1) {
          var f = s.eq(v),
            g = v;
          c && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
          var b = 90 * g,
            w = Math.floor(b / 360);
          l && (b = -b, w = Math.floor(-b / 360));
          var y = Math.max(Math.min(f[0].progress, 1), -1),
            E = 0,
            x = 0,
            T = 0;
          g % 4 == 0 ? (E = 4 * -w * o, T = 0) : (g - 1) % 4 == 0 ? (E = 0, T = 4 * -w * o) : (g - 2) % 4 == 0 ? (E = o + 4 * w * o, T = o) : (g - 3) % 4 == 0 && (E = -o, T = 3 * o + 4 * o * w), l && (E = -E), u || (x = E, E = 0);
          var C = "rotateX(" + (u ? 0 : -b) + "deg) rotateY(" + (u ? b : 0) + "deg) translate3d(" + E + "px, " + x + "px, " + T + "px)";
          if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, l && (h = 90 * -g - 90 * y)), f.transform(C), p.slideShadows) {
            var S = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              M = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
            0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(M)), S.length && (S[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0));
          }
        }
        if (i.css({
          "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
          "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
          "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
          "transform-origin": "50% 50% -" + o / 2 + "px"
        }), p.shadow) if (u) e.transform("translate3d(0px, " + (r / 2 + p.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");else {
          var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
            P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
            k = p.shadowScale,
            $ = p.shadowScale / P,
            L = p.shadowOffset;
          e.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (n / 2 + L) + "px, " + -n / 2 / $ + "px) rotateX(-90deg)");
        }
        var I = d.isSafari || d.isWebView ? -o / 2 : 0;
        i.transform("translate3d(0px,0," + I + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)");
      },
      setTransition: function setTransition(e) {
        var t = this,
          a = t.$el;
        t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e);
      }
    },
    ce = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
          var s = t.eq(i),
            r = s[0].progress;
          e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            l = 0,
            o = -s[0].swiperSlideOffset,
            d = 0;
          if (e.isHorizontal() ? a && (n = -n) : (d = o, o = 0, l = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
            var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              u = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
            0 === p.length && (p = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === u.length && (u = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), p.length && (p[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0));
          }
          s.transform("translate3d(" + o + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + n + "deg)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl;
        if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          var r = !1;
          a.eq(i).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              r = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) s.trigger(e[a]);
            }
          });
        }
      }
    },
    he = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.slidesSizesGrid, r = e.params.coverflowEffect, n = e.isHorizontal(), l = e.translate, o = n ? t / 2 - l : a / 2 - l, d = n ? r.rotate : -r.rotate, p = r.depth, u = 0, c = i.length; u < c; u += 1) {
          var h = i.eq(u),
            v = s[u],
            f = (o - h[0].swiperSlideOffset - v / 2) / v * r.modifier,
            g = n ? d * f : 0,
            b = n ? 0 : d * f,
            w = -p * Math.abs(f),
            y = r.stretch;
          "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * v);
          var E = n ? 0 : y * f,
            x = n ? y * f : 0,
            T = 1 - (1 - r.scale) * Math.abs(f);
          Math.abs(x) < .001 && (x = 0), Math.abs(E) < .001 && (E = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0), Math.abs(T) < .001 && (T = 0);
          var C = "translate3d(" + x + "px," + E + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg) scale(" + T + ")";
          if (h.transform(C), h[0].style.zIndex = 1 - Math.abs(Math.round(f)), r.slideShadows) {
            var S = n ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
              M = n ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
            0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"></div>'), h.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"></div>'), h.append(M)), S.length && (S[0].style.opacity = f > 0 ? f : 0), M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
          }
        }
      },
      setTransition: function setTransition(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      }
    },
    ve = {
      init: function init() {
        var e = this,
          t = e.params.thumbs;
        if (e.thumbs.initialized) return !1;
        e.thumbs.initialized = !0;
        var a = e.constructor;
        return t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, M(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), M(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : C(t.swiper) && (e.thumbs.swiper = new a(M({}, t.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0;
      },
      onThumbClick: function onThumbClick() {
        var e = this,
          t = e.thumbs.swiper;
        if (t) {
          var a = t.clickedIndex,
            i = t.clickedSlide;
          if (!(i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
            var s;
            if (s = t.params.loop ? parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
              var r = e.activeIndex;
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
              var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                l = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
              s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n;
            }
            e.slideTo(s);
          }
        }
      },
      update: function update(e) {
        var t = this,
          a = t.thumbs.swiper;
        if (a) {
          var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
            s = t.params.thumbs.autoScrollOffset,
            r = s && !a.params.loop;
          if (t.realIndex !== a.realIndex || r) {
            var n,
              l,
              o = a.activeIndex;
            if (a.params.loop) {
              a.slides.eq(o).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, o = a.activeIndex);
              var d = a.slides.eq(o).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                p = a.slides.eq(o).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
              n = void 0 === d ? p : void 0 === p ? d : p - o == o - d ? a.params.slidesPerGroup > 1 ? p : o : p - o < o - d ? p : d, l = t.activeIndex > t.previousIndex ? "next" : "prev";
            } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";
            r && (n += "next" === l ? s : -1 * s), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = n > o ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > o && a.params.slidesPerGroup, a.slideTo(n, e ? 0 : void 0));
          }
          var u = 1,
            c = t.params.thumbs.slideThumbActiveClass;
          if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (u = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (u = 1), u = Math.floor(u), a.slides.removeClass(c), a.params.loop || a.params.virtual && a.params.virtual.enabled) for (var h = 0; h < u; h += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + h) + '"]').addClass(c);else for (var v = 0; v < u; v += 1) a.slides.eq(t.realIndex + v).addClass(c);
        }
      }
    },
    fe = [U, Z, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null
        }
      },
      create: function create() {
        z(this, {
          mousewheel: {
            enabled: !1,
            lastScrollTime: x(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            enable: J.enable,
            disable: J.disable,
            handle: J.handle,
            handleMouseEnter: J.handleMouseEnter,
            handleMouseLeave: J.handleMouseLeave,
            animateSlider: J.animateSlider,
            releaseScroll: J.releaseScroll
          }
        });
      },
      on: {
        init: function init(e) {
          !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
        },
        destroy: function destroy(e) {
          e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function create() {
        z(this, {
          navigation: t({}, Q)
        });
      },
      on: {
        init: function init(e) {
          e.navigation.init(), e.navigation.update();
        },
        toEdge: function toEdge(e) {
          e.navigation.update();
        },
        fromEdge: function fromEdge(e) {
          e.navigation.update();
        },
        destroy: function destroy(e) {
          e.navigation.destroy();
        },
        "enable disable": function enableDisable(e) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          a && a[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
        },
        click: function click(e, t) {
          var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl,
            r = t.target;
          if (e.params.navigation.hideOnClick && !m(r).is(s) && !m(r).is(i)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
            var n;
            i ? n = i.hasClass(e.params.navigation.hiddenClass) : s && (n = s.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass);
          }
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(e) {
            return e;
          },
          formatFractionTotal: function formatFractionTotal(e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function create() {
        z(this, {
          pagination: t({
            dynamicBulletIndex: 0
          }, ee)
        });
      },
      on: {
        init: function init(e) {
          e.pagination.init(), e.pagination.render(), e.pagination.update();
        },
        activeIndexChange: function activeIndexChange(e) {
          (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
        },
        snapIndexChange: function snapIndexChange(e) {
          e.params.loop || e.pagination.update();
        },
        slidesLengthChange: function slidesLengthChange(e) {
          e.params.loop && (e.pagination.render(), e.pagination.update());
        },
        snapGridLengthChange: function snapGridLengthChange(e) {
          e.params.loop || (e.pagination.render(), e.pagination.update());
        },
        destroy: function destroy(e) {
          e.pagination.destroy();
        },
        "enable disable": function enableDisable(e) {
          var t = e.pagination.$el;
          t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
        },
        click: function click(e, t) {
          var a = t.target;
          if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(a).hasClass(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && a === e.navigation.nextEl || e.navigation.prevEl && a === e.navigation.prevEl)) return;
            !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
          }
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function create() {
        z(this, {
          scrollbar: t({
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }, te)
        });
      },
      on: {
        init: function init(e) {
          e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
        },
        update: function update(e) {
          e.scrollbar.updateSize();
        },
        resize: function resize(e) {
          e.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate(e) {
          e.scrollbar.updateSize();
        },
        setTranslate: function setTranslate(e) {
          e.scrollbar.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          e.scrollbar.setTransition(t);
        },
        "enable disable": function enableDisable(e) {
          var t = e.scrollbar.$el;
          t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
        },
        destroy: function destroy(e) {
          e.scrollbar.destroy();
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function create() {
        z(this, {
          parallax: t({}, ae)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        init: function init(e) {
          e.params.parallax.enabled && e.parallax.setTranslate();
        },
        setTranslate: function setTranslate(e) {
          e.params.parallax.enabled && e.parallax.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          e.params.parallax.enabled && e.parallax.setTransition(t);
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function create() {
        var e = this;
        z(e, {
          zoom: t({
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          }, ie)
        });
        var a = 1;
        Object.defineProperty(e.zoom, "scale", {
          get: function get() {
            return a;
          },
          set: function set(t) {
            if (a !== t) {
              var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
              e.emit("zoomChange", t, i, s);
            }
            a = t;
          }
        });
      },
      on: {
        init: function init(e) {
          e.params.zoom.enabled && e.zoom.enable();
        },
        destroy: function destroy(e) {
          e.zoom.disable();
        },
        touchStart: function touchStart(e, t) {
          e.zoom.enabled && e.zoom.onTouchStart(t);
        },
        touchEnd: function touchEnd(e, t) {
          e.zoom.enabled && e.zoom.onTouchEnd(t);
        },
        doubleTap: function doubleTap(e, t) {
          !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
        },
        transitionEnd: function transitionEnd(e) {
          e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
        },
        slideChange: function slideChange(e) {
          e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function create() {
        z(this, {
          lazy: t({
            initialImageLoaded: !1
          }, se)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
        },
        init: function init(e) {
          e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
        },
        scroll: function scroll(e) {
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
        },
        "scrollbarDragMove resize _freeModeNoMomentumRelease": function scrollbarDragMoveResize_freeModeNoMomentumRelease(e) {
          e.params.lazy.enabled && e.lazy.load();
        },
        transitionStart: function transitionStart(e) {
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
        },
        transitionEnd: function transitionEnd(e) {
          e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
        },
        slideChange: function slideChange(e) {
          var t = e.params,
            a = t.lazy,
            i = t.cssMode,
            s = t.watchSlidesVisibility,
            r = t.watchSlidesProgress,
            n = t.touchReleaseOnEdges,
            l = t.resistanceRatio;
          a.enabled && (i || (s || r) && (n || 0 === l)) && e.lazy.load();
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function create() {
        z(this, {
          controller: t({
            control: this.params.controller.control
          }, re)
        });
      },
      on: {
        update: function update(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        resize: function resize(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        observerUpdate: function observerUpdate(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        setTranslate: function setTranslate(e, t, a) {
          e.controller.control && e.controller.setTranslate(t, a);
        },
        setTransition: function setTransition(e, t, a) {
          e.controller.control && e.controller.setTransition(t, a);
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group"
        }
      },
      create: function create() {
        z(this, {
          a11y: t({}, ne, {
            liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          })
        });
      },
      on: {
        afterInit: function afterInit(e) {
          e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
        },
        toEdge: function toEdge(e) {
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        fromEdge: function fromEdge(e) {
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate(e) {
          e.params.a11y.enabled && e.a11y.updatePagination();
        },
        destroy: function destroy(e) {
          e.params.a11y.enabled && e.a11y.destroy();
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides"
        }
      },
      create: function create() {
        z(this, {
          history: t({}, le)
        });
      },
      on: {
        init: function init(e) {
          e.params.history.enabled && e.history.init();
        },
        destroy: function destroy(e) {
          e.params.history.enabled && e.history.destroy();
        },
        "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease(e) {
          e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
        },
        slideChange: function slideChange(e) {
          e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function create() {
        z(this, {
          hashNavigation: t({
            initialized: !1
          }, oe)
        });
      },
      on: {
        init: function init(e) {
          e.params.hashNavigation.enabled && e.hashNavigation.init();
        },
        destroy: function destroy(e) {
          e.params.hashNavigation.enabled && e.hashNavigation.destroy();
        },
        "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease(e) {
          e.hashNavigation.initialized && e.hashNavigation.setHash();
        },
        slideChange: function slideChange(e) {
          e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1
        }
      },
      create: function create() {
        z(this, {
          autoplay: t({}, de, {
            running: !1,
            paused: !1
          })
        });
      },
      on: {
        init: function init(e) {
          e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents());
        },
        beforeTransitionStart: function beforeTransitionStart(e, t, a) {
          e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
        },
        sliderFirstMove: function sliderFirstMove(e) {
          e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
        },
        touchEnd: function touchEnd(e) {
          e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
        },
        destroy: function destroy(e) {
          e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function create() {
        z(this, {
          fadeEffect: t({}, pe)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("fade" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "fade");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            M(e.params, t), M(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "fade" === e.params.effect && e.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "fade" === e.params.effect && e.fadeEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function create() {
        z(this, {
          cubeEffect: t({}, ue)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("cube" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            M(e.params, t), M(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "cube" === e.params.effect && e.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "cube" === e.params.effect && e.cubeEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function create() {
        z(this, {
          flipEffect: t({}, ce)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("flip" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            M(e.params, t), M(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "flip" === e.params.effect && e.flipEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "flip" === e.params.effect && e.flipEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function create() {
        z(this, {
          coverflowEffect: t({}, he)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        setTranslate: function setTranslate(e) {
          "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create: function create() {
        z(this, {
          thumbs: t({
            swiper: null,
            initialized: !1
          }, ve)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          var t = e.params.thumbs;
          t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
        },
        slideChange: function slideChange(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        update: function update(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        resize: function resize(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        observerUpdate: function observerUpdate(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        setTransition: function setTransition(e, t) {
          var a = e.thumbs.swiper;
          a && a.setTransition(t);
        },
        beforeDestroy: function beforeDestroy(e) {
          var t = e.thumbs.swiper;
          t && e.thumbs.swiperCreated && t && t.destroy();
        }
      }
    }];
  return q.use(fe), q;
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (t) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], function (e) {
    return t(e, window);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window);
}(function (s, n) {
  "use strict";

  function e(e) {
    return 0 <= function (e, t) {
      for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
        if (+o[a] < +n[a]) return 1;
        if (+n[a] < +o[a]) return -1;
      }
      return 0;
    }(s.fn.jquery, e);
  }
  s.migrateVersion = "3.4.1";
  var t = Object.create(null);
  s.migrateDisablePatches = function () {
    for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0;
  }, s.migrateEnablePatches = function () {
    for (var e = 0; e < arguments.length; e++) delete t[arguments[e]];
  }, s.migrateIsPatchEnabled = function (e) {
    return !t[e];
  }, n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0") || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
  var o = {};
  function u(e, t) {
    var r = n.console;
    !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()));
  }
  function r(e, t, r, n, o) {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !0,
      get: function get() {
        return u(n, o), r;
      },
      set: function set(e) {
        u(n, o), r = e;
      }
    });
  }
  function a(e, t, r, n, o) {
    var a = e[t];
    e[t] = function () {
      return o && u(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments);
    };
  }
  function c(e, t, r, n, o) {
    if (!o) throw new Error("No warning message provided");
    return a(e, t, r, n, o), 0;
  }
  function i(e, t, r, n) {
    return a(e, t, r, n), 0;
  }
  s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function () {
    o = {}, s.migrateWarnings.length = 0;
  }, "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
  var d,
    l,
    p,
    f = {},
    m = s.fn.init,
    y = s.find,
    h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
    g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
    v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  for (d in i(s.fn, "init", function (e) {
    var t = Array.prototype.slice.call(arguments);
    return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t);
  }, "selector-empty-id"), s.fn.init.prototype = s.fn, i(s, "find", function (t) {
    var r = Array.prototype.slice.call(arguments);
    if ("string" == typeof t && h.test(t)) try {
      n.document.querySelector(t);
    } catch (e) {
      t = t.replace(g, function (e, t, r, n) {
        return "[" + t + r + '"' + n + '"]';
      });
      try {
        n.document.querySelector(t), u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t;
      } catch (e) {
        u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0]);
      }
    }
    return y.apply(this, r);
  }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
  c(s.fn, "size", function () {
    return this.length;
  }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), c(s, "parseJSON", function () {
    return JSON.parse.apply(null, arguments);
  }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && c(s, "trim", function (e) {
    return null == e ? "" : (e + "").replace(v, "$1");
  }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (c(s, "nodeName", function (e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }, "nodeName", "jQuery.nodeName is deprecated"), c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (c(s, "isNumeric", function (e) {
    var t = _typeof(e);
    return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e));
  }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    f["[object " + t + "]"] = t.toLowerCase();
  }), c(s, "type", function (e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : _typeof(e);
  }, "type", "jQuery.type is deprecated"), c(s, "isFunction", function (e) {
    return "function" == typeof e;
  }, "isFunction", "jQuery.isFunction() is deprecated"), c(s, "isWindow", function (e) {
    return null != e && e === e.window;
  }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, i(s, "ajax", function () {
    var e = l.apply(this, arguments);
    return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e;
  }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function (e) {
    !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated");
  }));
  var j = s.fn.removeAttr,
    b = s.fn.toggleClass,
    w = /\S+/g;
  function x(e) {
    return e.replace(/-([a-z])/g, function (e, t) {
      return t.toUpperCase();
    });
  }
  i(s.fn, "removeAttr", function (e) {
    var r = this,
      n = !1;
    return s.each(e.match(w), function (e, t) {
      s.expr.match.bool.test(t) && r.each(function () {
        if (!1 !== s(this).prop(t)) return !(n = !0);
      }), n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1));
    }), j.apply(this, arguments);
  }, "removeAttr-bool"), i(s.fn, "toggleClass", function (t) {
    return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
      var e = this.getAttribute && this.getAttribute("class") || "";
      e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "");
    }));
  }, "toggleClass-bool");
  var Q,
    A,
    R = !1,
    C = /^[a-z]/,
    N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  s.swap && s.each(["height", "width", "reliableMarginRight"], function (e, t) {
    var r = s.cssHooks[t] && s.cssHooks[t].get;
    r && (s.cssHooks[t].get = function () {
      var e;
      return R = !0, e = r.apply(this, arguments), R = !1, e;
    });
  }), i(s, "swap", function (e, t, r, n) {
    var o,
      a,
      i = {};
    for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"), t) i[a] = e.style[a], e.style[a] = t[a];
    for (a in o = r.apply(e, n || []), t) e.style[a] = i[a];
    return o;
  }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
    set: function set() {
      return u("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments);
    }
  })), e("4.0.0") ? (A = {
    animationIterationCount: !0,
    columnCount: !0,
    fillOpacity: !0,
    flexGrow: !0,
    flexShrink: !0,
    fontWeight: !0,
    gridArea: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnStart: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowStart: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0
  }, "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A, {
    get: function get() {
      return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments);
    },
    set: function set() {
      return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments);
    }
  }) : s.cssNumber = A) : A = s.cssNumber, Q = s.fn.css, i(s.fn, "css", function (e, t) {
    var r,
      n,
      o = this;
    return e && "object" == _typeof(e) && !Array.isArray(e) ? (s.each(e, function (e, t) {
      s.fn.css.call(o, e, t);
    }), this) : ("number" == typeof t && (r = x(e), n = r, C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments));
  }, "css-number");
  var S,
    P,
    k,
    H,
    E = s.data;
  i(s, "data", function (e, t, r) {
    var n, o, a;
    if (t && "object" == _typeof(t) && 2 === arguments.length) {
      for (a in n = s.hasData(e) && E.call(this, e), o = {}, t) a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
      return E.call(this, e, o), t;
    }
    return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : E.apply(this, arguments);
  }, "data-camelCase"), s.fx && (k = s.Tween.prototype.run, H = function H(e) {
    return e;
  }, i(s.Tween.prototype, "run", function () {
    1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = H), k.apply(this, arguments);
  }, "easing-one-arg"), S = s.fx.interval, P = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
    configurable: !0,
    enumerable: !0,
    get: function get() {
      return n.document.hidden || u("fx-interval", P), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S;
    },
    set: function set(e) {
      u("fx-interval", P), S = e;
    }
  }));
  var M = s.fn.load,
    q = s.event.add,
    O = s.event.fix;
  s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), i(s.event, "fix", function (e) {
    var t,
      r = e.type,
      n = this.fixHooks[r],
      o = s.event.props;
    if (o.length) {
      u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
      while (o.length) s.event.addProp(o.pop());
    }
    if (n && !n._migrated_ && (n._migrated_ = !0, u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length)) while (o.length) s.event.addProp(o.pop());
    return t = O.call(this, e), n && n.filter ? n.filter(t, e) : t;
  }, "event-old-patch"), i(s.event, "add", function (e, t) {
    return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), q.apply(this, arguments);
  }, "load-after-event"), s.each(["load", "unload", "error"], function (e, t) {
    i(s.fn, t, function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this));
    }, "shorthand-removed-v3");
  }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, r) {
    c(s.fn, r, function (e, t) {
      return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r);
    }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated");
  }), s(function () {
    s(n.document).triggerHandler("ready");
  }), s.event.special.ready = {
    setup: function setup() {
      this === n.document && u("ready-event", "'ready' event is deprecated");
    }
  }, c(s.fn, "bind", function (e, t, r) {
    return this.on(e, null, t, r);
  }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), c(s.fn, "unbind", function (e, t) {
    return this.off(e, null, t);
  }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), c(s.fn, "delegate", function (e, t, r, n) {
    return this.on(t, e, r, n);
  }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), c(s.fn, "undelegate", function (e, t, r) {
    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r);
  }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), c(s.fn, "hover", function (e, t) {
    return this.on("mouseenter", e).on("mouseleave", t || e);
  }, "pre-on-methods", "jQuery.fn.hover() is deprecated");
  function T(e) {
    var t = n.document.implementation.createHTMLDocument("");
    return t.body.innerHTML = e, t.body && t.body.innerHTML;
  }
  var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
    s.migrateEnablePatches("self-closed-tags");
  }, i(s, "htmlPrefilter", function (e) {
    var t, r;
    return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(F, "<$1></$2>");
  }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags");
  var D,
    W,
    _,
    I = s.fn.offset;
  return i(s.fn, "offset", function () {
    var e = this[0];
    return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0);
  }, "offset-valid-elem"), s.ajax && (D = s.param, i(s, "param", function (e, t) {
    var r = s.ajaxSettings && s.ajaxSettings.traditional;
    return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t);
  }, "param-ajax-traditional")), c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (W = s.Deferred, _ = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]], i(s, "Deferred", function (e) {
    var a = W(),
      i = a.promise();
    function t() {
      var o = arguments;
      return s.Deferred(function (n) {
        s.each(_, function (e, t) {
          var r = "function" == typeof o[e] && o[e];
          a[t[1]](function () {
            var e = r && r.apply(this, arguments);
            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments);
          });
        }), o = null;
      }).promise();
    }
    return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a;
  }, "deferred-pipe"), s.Deferred.exceptionHook = W.exceptionHook), s;
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! UIkit 2.27.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  var i;
  if (!window.jQuery) throw new Error("UIkit 2.x requires jQuery");
  i = t(window.jQuery), "function" == typeof define && define.amd && define("uikit", function () {
    return i.load = function (t, e, n, o) {
      var s,
        a = t.split(","),
        r = [],
        l = (o.config && o.config.uikit && o.config.uikit.base ? o.config.uikit.base : "").replace(/\/+$/g, "");
      if (!l) throw new Error("Please define base path to UIkit in the requirejs config.");
      for (s = 0; s < a.length; s += 1) {
        var c = a[s].replace(/\./g, "/");
        r.push(l + "/components/" + c);
      }
      e(r, function () {
        n(i);
      });
    }, i;
  });
}(function (t) {
  "use strict";

  if (window.UIkit2) return window.UIkit2;
  var i = {},
    e = window.UIkit || void 0;
  if (i.version = "2.27.4", i.noConflict = function () {
    return e && (window.UIkit = e, t.UIkit = e, t.fn.uk = e.fn), i;
  }, window.UIkit2 = i, e || (window.UIkit = i), i.$ = t, i.$doc = i.$(document), i.$win = i.$(window), i.$html = i.$("html"), i.support = {}, i.support.transition = function () {
    var t = function () {
      var t,
        i = document.body || document.documentElement,
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
      for (t in e) if (void 0 !== i.style[t]) return e[t];
    }();
    return t && {
      end: t
    };
  }(), i.support.animation = function () {
    var t = function () {
      var t,
        i = document.body || document.documentElement,
        e = {
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "animationend",
          OAnimation: "oAnimationEnd oanimationend",
          animation: "animationend"
        };
      for (t in e) if (void 0 !== i.style[t]) return e[t];
    }();
    return t && {
      end: t
    };
  }(), function () {
    Date.now = Date.now || function () {
      return new Date().getTime();
    };
    for (var t = ["webkit", "moz"], i = 0; i < t.length && !window.requestAnimationFrame; ++i) {
      var e = t[i];
      window.requestAnimationFrame = window[e + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var n = 0;
      window.requestAnimationFrame = function (t) {
        var i = Date.now(),
          e = Math.max(n + 16, i);
        return setTimeout(function () {
          t(n = e);
        }, e - i);
      }, window.cancelAnimationFrame = clearTimeout;
    }
  }(), i.support.touch = "ontouchstart" in document || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0 || !1, i.support.mutationobserver = window.MutationObserver || window.WebKitMutationObserver || null, i.Utils = {}, i.Utils.isFullscreen = function () {
    return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || !1;
  }, i.Utils.str2json = function (t, i) {
    try {
      return i ? JSON.parse(t.replace(/([\$\w]+)\s*:/g, function (t, i) {
        return '"' + i + '":';
      }).replace(/'([^']+)'/g, function (t, i) {
        return '"' + i + '"';
      })) : new Function("", "var json = " + t + "; return JSON.parse(JSON.stringify(json));")();
    } catch (e) {
      return !1;
    }
  }, i.Utils.debounce = function (t, i, e) {
    var n;
    return function () {
      var o = this,
        s = arguments,
        a = function a() {
          n = null, e || t.apply(o, s);
        },
        r = e && !n;
      clearTimeout(n), n = setTimeout(a, i), r && t.apply(o, s);
    };
  }, i.Utils.throttle = function (t, i) {
    var e = !1;
    return function () {
      e || (t.call(), e = !0, setTimeout(function () {
        e = !1;
      }, i));
    };
  }, i.Utils.removeCssRules = function (t) {
    var i, e, n, o, s, a, r, l, c, u;
    t && setTimeout(function () {
      try {
        for (u = document.styleSheets, o = 0, r = u.length; r > o; o++) {
          for (n = u[o], e = [], n.cssRules = n.cssRules, i = s = 0, l = n.cssRules.length; l > s; i = ++s) n.cssRules[i].type === CSSRule.STYLE_RULE && t.test(n.cssRules[i].selectorText) && e.unshift(i);
          for (a = 0, c = e.length; c > a; a++) n.deleteRule(e[a]);
        }
      } catch (d) {}
    }, 0);
  }, i.Utils.isInView = function (e, n) {
    var o = t(e);
    if (!o.is(":visible")) return !1;
    var s = i.$win.scrollLeft(),
      a = i.$win.scrollTop(),
      r = o.offset(),
      l = r.left,
      c = r.top;
    return n = t.extend({
      topoffset: 0,
      leftoffset: 0
    }, n), c + o.height() >= a && c - n.topoffset <= a + i.$win.height() && l + o.width() >= s && l - n.leftoffset <= s + i.$win.width() ? !0 : !1;
  }, i.Utils.checkDisplay = function (e, n) {
    var o = i.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]", e || document);
    return e && !o.length && (o = t(e)), o.trigger("display.uk.check"), n && ("string" != typeof n && (n = '[class*="uk-animation-"]'), o.find(n).each(function () {
      var t = i.$(this),
        e = t.attr("class"),
        n = e.match(/uk-animation-(.+)/);
      t.removeClass(n[0]).width(), t.addClass(n[0]);
    })), o;
  }, i.Utils.options = function (e) {
    if ("string" != t.type(e)) return e;
    -1 != e.indexOf(":") && "}" != e.trim().substr(-1) && (e = "{" + e + "}");
    var n = e ? e.indexOf("{") : -1,
      o = {};
    if (-1 != n) try {
      o = i.Utils.str2json(e.substr(n));
    } catch (s) {}
    return o;
  }, i.Utils.animate = function (e, n) {
    var o = t.Deferred();
    return e = i.$(e), e.css("display", "none").addClass(n).one(i.support.animation.end, function () {
      e.removeClass(n), o.resolve();
    }), e.css("display", ""), o.promise();
  }, i.Utils.uid = function (t) {
    return (t || "id") + new Date().getTime() + "RAND" + Math.ceil(1e5 * Math.random());
  }, i.Utils.template = function (t, i) {
    for (var e, n, o, s, a = t.replace(/\n/g, "\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g), r = 0, l = [], c = 0; r < a.length;) {
      if (e = a[r], e.match(/\{\{\s*(.+?)\s*\}\}/)) switch (r += 1, e = a[r], n = e[0], o = e.substring(e.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0), n) {
        case "~":
          l.push("for(var $i=0;$i<" + o + ".length;$i++) { var $item = " + o + "[$i];"), c++;
          break;
        case ":":
          l.push("for(var $key in " + o + ") { var $val = " + o + "[$key];"), c++;
          break;
        case "#":
          l.push("if(" + o + ") {"), c++;
          break;
        case "^":
          l.push("if(!" + o + ") {"), c++;
          break;
        case "/":
          l.push("}"), c--;
          break;
        case "!":
          l.push("__ret.push(" + o + ");");
          break;
        default:
          l.push("__ret.push(escape(" + o + "));");
      } else l.push("__ret.push('" + e.replace(/\'/g, "\\'") + "');");
      r += 1;
    }
    return s = new Function("$data", ["var __ret = [];", "try {", "with($data){", c ? '__ret = ["Not all blocks are closed correctly."]' : l.join(""), "};", "}catch(e){__ret = [e.message];}", 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")), i ? s(i) : s;
  }, i.Utils.focus = function (i, e) {
    if (i = t(i), !i.length) return i;
    var n,
      o = i.find("[autofocus]:first");
    return o.length ? o.focus() : (o = i.find(":input" + (e && "," + e || "")).first(), o.length ? o.focus() : (i.attr("tabindex") || (n = 1e3, i.attr("tabindex", n)), i[0].focus(), n && i.attr("tabindex", ""), i));
  }, i.Utils.events = {}, i.Utils.events.click = i.support.touch ? "tap" : "click", i.fn = function (e, n) {
    var o = arguments,
      s = e.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
      a = s[1],
      r = s[2];
    return i[a] ? this.each(function () {
      var e = t(this),
        s = e.data(a);
      s || e.data(a, s = i[a](this, r ? void 0 : n)), r && s[r].apply(s, Array.prototype.slice.call(o, 1));
    }) : (t.error("UIkit component [" + a + "] does not exist."), this);
  }, t.UIkit = i, t.fn.uk = i.fn, i.langdirection = "rtl" == i.$html.attr("dir") ? "right" : "left", i.components = {}, i.component = function (e, n, o) {
    if (i.components[e] && !o) return i.components[e];
    var s = function s(n, o) {
      var a = this;
      return this.UIkit = i, this.element = n ? i.$(n) : null, this.options = t.extend(!0, {}, this.defaults, o), this.plugins = {}, this.element && this.element.data(e, this), this.init(), (this.options.plugins.length ? this.options.plugins : Object.keys(s.plugins)).forEach(function (t) {
        s.plugins[t].init && (s.plugins[t].init(a), a.plugins[t] = !0);
      }), this.trigger("init.uk.component", [e, this]), this;
    };
    return s.plugins = {}, t.extend(!0, s.prototype, {
      defaults: {
        plugins: []
      },
      boot: function boot() {},
      init: function init() {},
      on: function on(t, e, n) {
        return i.$(this.element || this).on(t, e, n);
      },
      one: function one(t, e, n) {
        return i.$(this.element || this).one(t, e, n);
      },
      off: function off(t) {
        return i.$(this.element || this).off(t);
      },
      trigger: function trigger(t, e) {
        return i.$(this.element || this).trigger(t, e);
      },
      find: function find(t) {
        return i.$(this.element ? this.element : []).find(t);
      },
      proxy: function proxy(t, i) {
        var e = this;
        i.split(" ").forEach(function (i) {
          e[i] || (e[i] = function () {
            return t[i].apply(t, arguments);
          });
        });
      },
      mixin: function mixin(t, i) {
        var e = this;
        i.split(" ").forEach(function (i) {
          e[i] || (e[i] = t[i].bind(e));
        });
      },
      option: function option() {
        return 1 == arguments.length ? this.options[arguments[0]] || void 0 : (2 == arguments.length && (this.options[arguments[0]] = arguments[1]), void 0);
      }
    }, n), this.components[e] = s, this[e] = function () {
      var n, o;
      if (arguments.length) switch (arguments.length) {
        case 1:
          "string" == typeof arguments[0] || arguments[0].nodeType || arguments[0] instanceof jQuery ? n = t(arguments[0]) : o = arguments[0];
          break;
        case 2:
          n = t(arguments[0]), o = arguments[1];
      }
      return n && n.data(e) ? n.data(e) : new i.components[e](n, o);
    }, i.domready && i.component.boot(e), s;
  }, i.plugin = function (t, i, e) {
    this.components[t].plugins[i] = e;
  }, i.component.boot = function (t) {
    i.components[t].prototype && i.components[t].prototype.boot && !i.components[t].booted && (i.components[t].prototype.boot.apply(i, []), i.components[t].booted = !0);
  }, i.component.bootComponents = function () {
    for (var t in i.components) i.component.boot(t);
  }, i.domObservers = [], i.domready = !1, i.ready = function (t) {
    i.domObservers.push(t), i.domready && t(document);
  }, i.on = function (t, e, n) {
    return t && t.indexOf("ready.uk.dom") > -1 && i.domready && e.apply(i.$doc), i.$doc.on(t, e, n);
  }, i.one = function (t, e, n) {
    return t && t.indexOf("ready.uk.dom") > -1 && i.domready ? (e.apply(i.$doc), i.$doc) : i.$doc.one(t, e, n);
  }, i.trigger = function (t, e) {
    return i.$doc.trigger(t, e);
  }, i.domObserve = function (t, e) {
    i.support.mutationobserver && (e = e || function () {}, i.$(t).each(function () {
      var t = this,
        n = i.$(t);
      if (!n.data("observer")) try {
        var o = new i.support.mutationobserver(i.Utils.debounce(function () {
          e.apply(t, [n]), n.trigger("changed.uk.dom");
        }, 50), {
          childList: !0,
          subtree: !0
        });
        o.observe(t, {
          childList: !0,
          subtree: !0
        }), n.data("observer", o);
      } catch (s) {}
    }));
  }, i.init = function (t) {
    t = t || document, i.domObservers.forEach(function (i) {
      i(t);
    });
  }, i.on("domready.uk.dom", function () {
    i.init(), i.domready && i.Utils.checkDisplay();
  }), document.addEventListener("DOMContentLoaded", function () {
    var e = function e() {
      i.$body = i.$("body"), i.trigger("beforeready.uk.dom"), i.component.bootComponents();
      var e = requestAnimationFrame(function () {
        var t = {
            dir: {
              x: 0,
              y: 0
            },
            x: window.pageXOffset,
            y: window.pageYOffset
          },
          n = function n() {
            var o = window.pageXOffset,
              s = window.pageYOffset;
            (t.x != o || t.y != s) && (t.dir.x = o != t.x ? o > t.x ? 1 : -1 : 0, t.dir.y = s != t.y ? s > t.y ? 1 : -1 : 0, t.x = o, t.y = s, i.$doc.trigger("scrolling.uk.document", [{
              dir: {
                x: t.dir.x,
                y: t.dir.y
              },
              x: o,
              y: s
            }])), cancelAnimationFrame(e), e = requestAnimationFrame(n);
          };
        return i.support.touch && i.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup", n), (t.x || t.y) && n(), n;
      }());
      if (i.trigger("domready.uk.dom"), i.support.touch && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && i.$win.on("load orientationchange resize", i.Utils.debounce(function () {
        var i = function i() {
          return t(".uk-height-viewport").css("height", window.innerHeight), i;
        };
        return i();
      }(), 100)), i.trigger("afterready.uk.dom"), i.domready = !0, i.support.mutationobserver) {
        var n = i.Utils.debounce(function () {
          requestAnimationFrame(function () {
            i.init(document.body);
          });
        }, 10);
        new i.support.mutationobserver(function (t) {
          var i = !1;
          t.every(function (t) {
            if ("childList" != t.type) return !0;
            for (var e, n = 0; n < t.addedNodes.length; ++n) if (e = t.addedNodes[n], e.outerHTML && -1 !== e.outerHTML.indexOf("data-uk-")) return (i = !0) && !1;
            return !0;
          }), i && n();
        }).observe(document.body, {
          childList: !0,
          subtree: !0
        });
      }
    };
    return ("complete" == document.readyState || "interactive" == document.readyState) && setTimeout(e), e;
  }()), i.$html.addClass(i.support.touch ? "uk-touch" : "uk-notouch"), i.support.touch) {
    var n,
      o = !1,
      s = "uk-hover",
      a = ".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";
    i.$html.on("mouseenter touchstart MSPointerDown pointerdown", a, function () {
      o && t("." + s).removeClass(s), o = t(this).addClass(s);
    }).on("mouseleave touchend MSPointerUp pointerup", function (i) {
      n = t(i.target).parents(a), o && o.not(n).removeClass(s);
    });
  }
  return i;
}), function (t) {
  function i(t, i, e, n) {
    return Math.abs(t - i) >= Math.abs(e - n) ? t - i > 0 ? "Left" : "Right" : e - n > 0 ? "Up" : "Down";
  }
  function e() {
    c = null, d.last && (void 0 !== d.el && d.el.trigger("longTap"), d = {});
  }
  function n() {
    c && clearTimeout(c), c = null;
  }
  function o() {
    a && clearTimeout(a), r && clearTimeout(r), l && clearTimeout(l), c && clearTimeout(c), a = r = l = c = null, d = {};
  }
  function s(t) {
    return t.pointerType == t.MSPOINTER_TYPE_TOUCH && t.isPrimary;
  }
  if (!t.fn.swipeLeft) {
    var a,
      r,
      l,
      c,
      u,
      d = {},
      h = 750,
      p = ("ontouchstart" in window),
      f = window.PointerEvent,
      m = p || window.DocumentTouch && document instanceof DocumentTouch || navigator.msPointerEnabled && navigator.msMaxTouchPoints > 0 || navigator.pointerEnabled && navigator.maxTouchPoints > 0;
    t(function () {
      var g,
        v,
        k,
        w = 0,
        b = 0;
      "MSGesture" in window && (u = new MSGesture(), u.target = document.body), t(document).on("MSGestureEnd gestureend", function (t) {
        var i = t.originalEvent.velocityX > 1 ? "Right" : t.originalEvent.velocityX < -1 ? "Left" : t.originalEvent.velocityY > 1 ? "Down" : t.originalEvent.velocityY < -1 ? "Up" : null;
        i && void 0 !== d.el && (d.el.trigger("swipe"), d.el.trigger("swipe" + i));
      }).on("touchstart MSPointerDown pointerdown", function (i) {
        ("MSPointerDown" != i.type || s(i.originalEvent)) && (k = "MSPointerDown" == i.type || "pointerdown" == i.type ? i : i.originalEvent.touches[0], g = Date.now(), v = g - (d.last || g), d.el = t("tagName" in k.target ? k.target : k.target.parentNode), a && clearTimeout(a), d.x1 = k.pageX, d.y1 = k.pageY, v > 0 && 250 >= v && (d.isDoubleTap = !0), d.last = g, c = setTimeout(e, h), i.originalEvent && i.originalEvent.pointerId && u && ("MSPointerDown" == i.type || "pointerdown" == i.type || "touchstart" == i.type) && u.addPointer(i.originalEvent.pointerId));
      }).on("touchmove MSPointerMove pointermove", function (t) {
        ("MSPointerMove" != t.type || s(t.originalEvent)) && (k = "MSPointerMove" == t.type || "pointermove" == t.type ? t : t.originalEvent.touches[0], n(), d.x2 = k.pageX, d.y2 = k.pageY, w += Math.abs(d.x1 - d.x2), b += Math.abs(d.y1 - d.y2));
      }).on("touchend MSPointerUp pointerup", function (e) {
        ("MSPointerUp" != e.type || s(e.originalEvent)) && (n(), d.x2 && Math.abs(d.x1 - d.x2) > 30 || d.y2 && Math.abs(d.y1 - d.y2) > 30 ? l = setTimeout(function () {
          void 0 !== d.el && (d.el.trigger("swipe"), d.el.trigger("swipe" + i(d.x1, d.x2, d.y1, d.y2))), d = {};
        }, 0) : "last" in d && (isNaN(w) || 30 > w && 30 > b ? r = setTimeout(function () {
          var i = t.Event("tap");
          i.cancelTouch = o, void 0 !== d.el && d.el.trigger(i), d.isDoubleTap ? (void 0 !== d.el && d.el.trigger("doubleTap"), d = {}) : a = setTimeout(function () {
            a = null, void 0 !== d.el && d.el.trigger("singleTap"), d = {};
          }, 250);
        }, 0) : d = {}, w = b = 0));
      }).on("touchcancel MSPointerCancel pointercancel", function (t) {
        ("touchcancel" == t.type && p && m || !p && "pointercancel" == t.type && f) && o();
      }), t(window).on("scroll", o);
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (i) {
      t.fn[i] = function (e) {
        return t(this).on(i, e);
      };
    });
  }
}(jQuery), function (t) {
  "use strict";

  var i = [];
  t.component("stackMargin", {
    defaults: {
      cls: "uk-margin-small-top",
      rowfirst: !1,
      observe: !1
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-margin]", i).each(function () {
          var i = t.$(this);
          i.data("stackMargin") || t.stackMargin(i, t.Utils.options(i.attr("data-uk-margin")));
        });
      });
    },
    init: function init() {
      var e = this;
      t.$win.on("resize orientationchange", function () {
        var i = function i() {
          e.process();
        };
        return t.$(function () {
          i(), t.$win.on("load", i);
        }), t.Utils.debounce(i, 20);
      }()), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.process();
      }.bind(this)), this.options.observe && t.domObserve(this.element, function () {
        e.element.is(":visible") && e.process();
      }), i.push(this);
    },
    process: function process() {
      var i = this.element.children();
      if (t.Utils.stackMargin(i, this.options), !this.options.rowfirst || !i.length) return this;
      var e = {},
        n = !1;
      return i.removeClass(this.options.rowfirst).each(function (i, o) {
        o = t.$(this), "none" != this.style.display && (i = o.offset().left, ((e[i] = e[i] || []) && e[i]).push(this), n = n === !1 ? i : Math.min(n, i));
      }), t.$(e[n]).addClass(this.options.rowfirst), this;
    }
  }), function () {
    var i = [],
      e = function e(t) {
        if (t.is(":visible")) {
          var i = t.parent().width(),
            e = t.data("width"),
            n = i / e,
            o = Math.floor(n * t.data("height"));
          t.css({
            height: e > i ? o : t.data("height")
          });
        }
      };
    t.component("responsiveElement", {
      defaults: {},
      boot: function boot() {
        t.ready(function (i) {
          t.$("iframe.uk-responsive-width, [data-uk-responsive]", i).each(function () {
            var i,
              e = t.$(this);
            e.data("responsiveElement") || (i = t.responsiveElement(e, {}));
          });
        });
      },
      init: function init() {
        var t = this.element;
        t.attr("width") && t.attr("height") && (t.data({
          width: t.attr("width"),
          height: t.attr("height")
        }).on("display.uk.check", function () {
          e(t);
        }), e(t), i.push(t));
      }
    }), t.$win.on("resize load", t.Utils.debounce(function () {
      i.forEach(function (t) {
        e(t);
      });
    }, 15));
  }(), t.Utils.stackMargin = function (i, e) {
    e = t.$.extend({
      cls: "uk-margin-small-top"
    }, e), i = t.$(i).removeClass(e.cls);
    var n = !1;
    i.each(function (i, e, o, s) {
      s = t.$(this), "none" != s.css("display") && (i = s.offset(), e = s.outerHeight(), o = i.top + e, s.data({
        ukMarginPos: o,
        ukMarginTop: i.top
      }), (n === !1 || i.top < n.top) && (n = {
        top: i.top,
        left: i.left,
        pos: o
      }));
    }).each(function (i) {
      i = t.$(this), "none" != i.css("display") && i.data("ukMarginTop") > n.top && i.data("ukMarginPos") > n.pos && i.addClass(e.cls);
    });
  }, t.Utils.matchHeights = function (i, e) {
    i = t.$(i).css("min-height", ""), e = t.$.extend({
      row: !0
    }, e);
    var n = function n(i) {
      if (!(i.length < 2)) {
        var e = 0;
        i.each(function () {
          e = Math.max(e, t.$(this).outerHeight());
        }).each(function () {
          var i = t.$(this),
            n = e - ("border-box" == i.css("box-sizing") ? 0 : i.outerHeight() - i.height());
          i.css("min-height", n + "px");
        });
      }
    };
    e.row ? (i.first().width(), setTimeout(function () {
      var e = !1,
        o = [];
      i.each(function () {
        var i = t.$(this),
          s = i.offset().top;
        s != e && o.length && (n(t.$(o)), o = [], s = i.offset().top), o.push(i), e = s;
      }), o.length && n(t.$(o));
    }, 0)) : n(i);
  }, function (i) {
    t.Utils.inlineSvg = function (e, n) {
      t.$(e || 'img[src$=".svg"]', n || document).each(function () {
        var e = t.$(this),
          n = e.attr("src");
        if (!i[n]) {
          var o = t.$.Deferred();
          t.$.get(n, {
            nc: Math.random()
          }, function (i) {
            o.resolve(t.$(i).find("svg"));
          }), i[n] = o.promise();
        }
        i[n].then(function (i) {
          var n = t.$(i).clone();
          e.attr("id") && n.attr("id", e.attr("id")), e.attr("class") && n.attr("class", e.attr("class")), e.attr("style") && n.attr("style", e.attr("style")), e.attr("width") && (n.attr("width", e.attr("width")), e.attr("height") || n.removeAttr("height")), e.attr("height") && (n.attr("height", e.attr("height")), e.attr("width") || n.removeAttr("width")), e.replaceWith(n);
        });
      });
    }, t.ready(function (i) {
      t.Utils.inlineSvg("[data-uk-svg]", i);
    });
  }({}), t.Utils.getCssVar = function (t) {
    var i,
      e = document.documentElement,
      n = e.appendChild(document.createElement("div"));
    n.classList.add("var-" + t);
    try {
      i = JSON.parse(i = getComputedStyle(n, ":before").content.replace(/^["'](.*)["']$/, "$1"));
    } catch (o) {
      i = void 0;
    }
    return e.removeChild(n), i;
  };
}(UIkit2), function (t) {
  "use strict";

  function i(i, e) {
    e = t.$.extend({
      duration: 1e3,
      transition: "easeOutExpo",
      offset: 0,
      complete: function complete() {}
    }, e);
    var n = i.offset().top - e.offset,
      o = t.$doc.height(),
      s = window.innerHeight;
    n + s > o && (n = o - s), t.$("html,body").stop().animate({
      scrollTop: n
    }, e.duration, e.transition).promise().done(e.complete);
  }
  t.component("smoothScroll", {
    boot: function boot() {
      t.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function () {
        var i = t.$(this);
        if (!i.data("smoothScroll")) {
          {
            t.smoothScroll(i, t.Utils.options(i.attr("data-uk-smooth-scroll")));
          }
          i.trigger("click");
        }
        return !1;
      });
    },
    init: function init() {
      var e = this;
      this.on("click", function (n) {
        n.preventDefault(), i(t.$(this.hash).length ? t.$(this.hash) : t.$("body"), e.options);
      });
    }
  }), t.Utils.scrollToElement = i, t.$.easing.easeOutExpo || (t.$.easing.easeOutExpo = function (t, i, e, n, o) {
    return i == o ? e + n : n * (-Math.pow(2, -10 * i / o) + 1) + e;
  });
}(UIkit2), function (t) {
  "use strict";

  var i = t.$win,
    e = t.$doc,
    n = [],
    o = function o() {
      for (var t = 0; t < n.length; t++) window.requestAnimationFrame.apply(window, [n[t].check]);
    };
  t.component("scrollspy", {
    defaults: {
      target: !1,
      cls: "uk-scrollspy-inview",
      initcls: "uk-scrollspy-init-inview",
      topoffset: 0,
      leftoffset: 0,
      repeat: !1,
      delay: 0
    },
    boot: function boot() {
      e.on("scrolling.uk.document", o), i.on("load resize orientationchange", t.Utils.debounce(o, 50)), t.ready(function (i) {
        t.$("[data-uk-scrollspy]", i).each(function () {
          var i = t.$(this);
          if (!i.data("scrollspy")) {
            t.scrollspy(i, t.Utils.options(i.attr("data-uk-scrollspy")));
          }
        });
      });
    },
    init: function init() {
      var i,
        e = this,
        o = this.options.cls.split(/,/),
        s = function s() {
          var n = e.options.target ? e.element.find(e.options.target) : e.element,
            s = 1 === n.length ? 1 : 0,
            a = 0;
          n.each(function () {
            var n = t.$(this),
              r = n.data("inviewstate"),
              l = t.Utils.isInView(n, e.options),
              c = n.attr("data-uk-scrollspy-cls") || o[a].trim();
            !l || r || n.data("scrollspy-idle") || (i || (n.addClass(e.options.initcls), e.offset = n.offset(), i = !0, n.trigger("init.uk.scrollspy")), n.data("scrollspy-idle", setTimeout(function () {
              n.addClass("uk-scrollspy-inview").toggleClass(c).width(), n.trigger("inview.uk.scrollspy"), n.data("scrollspy-idle", !1), n.data("inviewstate", !0);
            }, e.options.delay * s)), s++), !l && r && e.options.repeat && (n.data("scrollspy-idle") && (clearTimeout(n.data("scrollspy-idle")), n.data("scrollspy-idle", !1)), n.removeClass("uk-scrollspy-inview").toggleClass(c), n.data("inviewstate", !1), n.trigger("outview.uk.scrollspy")), a = o[a + 1] ? a + 1 : 0;
          });
        };
      s(), this.check = s, n.push(this);
    }
  });
  var s = [],
    a = function a() {
      for (var t = 0; t < s.length; t++) window.requestAnimationFrame.apply(window, [s[t].check]);
    };
  t.component("scrollspynav", {
    defaults: {
      cls: "uk-active",
      closest: !1,
      topoffset: 0,
      leftoffset: 0,
      smoothscroll: !1
    },
    boot: function boot() {
      e.on("scrolling.uk.document", a), i.on("resize orientationchange", t.Utils.debounce(a, 50)), t.ready(function (i) {
        t.$("[data-uk-scrollspy-nav]", i).each(function () {
          var i = t.$(this);
          if (!i.data("scrollspynav")) {
            t.scrollspynav(i, t.Utils.options(i.attr("data-uk-scrollspy-nav")));
          }
        });
      });
    },
    init: function init() {
      var e,
        n = [],
        o = this.find("a[href^='#']").each(function () {
          "#" !== this.getAttribute("href").trim() && n.push(this.getAttribute("href"));
        }),
        a = t.$(n.join(",")),
        r = this.options.cls,
        l = this.options.closest || this.options.closest,
        c = this,
        u = function u() {
          e = [];
          for (var n = 0; n < a.length; n++) t.Utils.isInView(a.eq(n), c.options) && e.push(a.eq(n));
          if (e.length) {
            var s,
              u = i.scrollTop(),
              d = function () {
                for (var t = 0; t < e.length; t++) if (e[t].offset().top - c.options.topoffset >= u) return e[t];
              }();
            if (!d) return;
            c.options.closest ? (o.blur().closest(l).removeClass(r), s = o.filter("a[href='#" + d.attr("id") + "']").closest(l).addClass(r)) : s = o.removeClass(r).filter("a[href='#" + d.attr("id") + "']").addClass(r), c.element.trigger("inview.uk.scrollspynav", [d, s]);
          }
        };
      this.options.smoothscroll && t.smoothScroll && o.each(function () {
        t.smoothScroll(this, c.options.smoothscroll);
      }), u(), this.element.data("scrollspynav", this), this.check = u, s.push(this);
    }
  });
}(UIkit2), function (t) {
  "use strict";

  var i = [];
  t.component("toggle", {
    defaults: {
      target: !1,
      cls: "uk-hidden",
      animation: !1,
      duration: 200
    },
    boot: function boot() {
      t.ready(function (e) {
        t.$("[data-uk-toggle]", e).each(function () {
          var i = t.$(this);
          if (!i.data("toggle")) {
            t.toggle(i, t.Utils.options(i.attr("data-uk-toggle")));
          }
        }), setTimeout(function () {
          i.forEach(function (t) {
            t.getToggles();
          });
        }, 0);
      });
    },
    init: function init() {
      var t = this;
      this.aria = -1 !== this.options.cls.indexOf("uk-hidden"), this.on("click", function (i) {
        t.element.is('a[href="#"]') && i.preventDefault(), t.toggle();
      }), i.push(this);
    },
    toggle: function toggle() {
      if (this.getToggles(), this.totoggle.length) {
        if (this.options.animation && t.support.animation) {
          var i = this,
            e = this.options.animation.split(",");
          1 == e.length && (e[1] = e[0]), e[0] = e[0].trim(), e[1] = e[1].trim(), this.totoggle.css("animation-duration", this.options.duration + "ms"), this.totoggle.each(function () {
            var n = t.$(this);
            n.hasClass(i.options.cls) ? (n.toggleClass(i.options.cls), t.Utils.animate(n, e[0]).then(function () {
              n.css("animation-duration", ""), t.Utils.checkDisplay(n);
            })) : t.Utils.animate(this, e[1] + " uk-animation-reverse").then(function () {
              n.toggleClass(i.options.cls).css("animation-duration", ""), t.Utils.checkDisplay(n);
            });
          });
        } else this.totoggle.toggleClass(this.options.cls), t.Utils.checkDisplay(this.totoggle);
        this.updateAria();
      }
    },
    getToggles: function getToggles() {
      this.totoggle = this.options.target ? t.$(this.options.target) : [], this.updateAria();
    },
    updateAria: function updateAria() {
      this.aria && this.totoggle.length && this.totoggle.not("[aria-hidden]").each(function () {
        t.$(this).attr("aria-hidden", t.$(this).hasClass("uk-hidden"));
      });
    }
  });
}(UIkit2), function (t) {
  "use strict";

  t.component("alert", {
    defaults: {
      fade: !0,
      duration: 200,
      trigger: ".uk-alert-close"
    },
    boot: function boot() {
      t.$html.on("click.alert.uikit", "[data-uk-alert]", function (i) {
        var e = t.$(this);
        if (!e.data("alert")) {
          var n = t.alert(e, t.Utils.options(e.attr("data-uk-alert")));
          t.$(i.target).is(n.options.trigger) && (i.preventDefault(), n.close());
        }
      });
    },
    init: function init() {
      var t = this;
      this.on("click", this.options.trigger, function (i) {
        i.preventDefault(), t.close();
      });
    },
    close: function close() {
      var t = this.trigger("close.uk.alert"),
        i = function () {
          this.trigger("closed.uk.alert").remove();
        }.bind(this);
      this.options.fade ? t.css("overflow", "hidden").css("max-height", t.height()).animate({
        height: 0,
        opacity: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
      }, this.options.duration, i) : i();
    }
  });
}(UIkit2), function (t) {
  "use strict";

  t.component("buttonRadio", {
    defaults: {
      activeClass: "uk-active",
      target: ".uk-button"
    },
    boot: function boot() {
      t.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function (i) {
        var e = t.$(this);
        if (!e.data("buttonRadio")) {
          var n = t.buttonRadio(e, t.Utils.options(e.attr("data-uk-button-radio"))),
            o = t.$(i.target);
          o.is(n.options.target) && o.trigger("click");
        }
      });
    },
    init: function init() {
      var i = this;
      this.find(i.options.target).attr("aria-checked", "false").filter("." + i.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function (e) {
        var n = t.$(this);
        n.is('a[href="#"]') && e.preventDefault(), i.find(i.options.target).not(n).removeClass(i.options.activeClass).blur(), n.addClass(i.options.activeClass), i.find(i.options.target).not(n).attr("aria-checked", "false"), n.attr("aria-checked", "true"), i.trigger("change.uk.button", [n]);
      });
    },
    getSelected: function getSelected() {
      return this.find("." + this.options.activeClass);
    }
  }), t.component("buttonCheckbox", {
    defaults: {
      activeClass: "uk-active",
      target: ".uk-button"
    },
    boot: function boot() {
      t.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function (i) {
        var e = t.$(this);
        if (!e.data("buttonCheckbox")) {
          var n = t.buttonCheckbox(e, t.Utils.options(e.attr("data-uk-button-checkbox"))),
            o = t.$(i.target);
          o.is(n.options.target) && o.trigger("click");
        }
      });
    },
    init: function init() {
      var i = this;
      this.find(i.options.target).attr("aria-checked", "false").filter("." + i.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function (e) {
        var n = t.$(this);
        n.is('a[href="#"]') && e.preventDefault(), n.toggleClass(i.options.activeClass).blur(), n.attr("aria-checked", n.hasClass(i.options.activeClass)), i.trigger("change.uk.button", [n]);
      });
    },
    getSelected: function getSelected() {
      return this.find("." + this.options.activeClass);
    }
  }), t.component("button", {
    defaults: {},
    boot: function boot() {
      t.$html.on("click.button.uikit", "[data-uk-button]", function () {
        var i = t.$(this);
        if (!i.data("button")) {
          {
            t.button(i, t.Utils.options(i.attr("data-uk-button")));
          }
          i.trigger("click");
        }
      });
    },
    init: function init() {
      var t = this;
      this.element.attr("aria-pressed", this.element.hasClass("uk-active")), this.on("click", function (i) {
        t.element.is('a[href="#"]') && i.preventDefault(), t.toggle(), t.trigger("change.uk.button", [t.element.blur().hasClass("uk-active")]);
      });
    },
    toggle: function toggle() {
      this.element.toggleClass("uk-active"), this.element.attr("aria-pressed", this.element.hasClass("uk-active"));
    }
  });
}(UIkit2), function (t) {
  "use strict";

  function i(i, e, n, o) {
    if (i = t.$(i), e = t.$(e), n = n || window.innerWidth, o = o || i.offset(), e.length) {
      var s = e.outerWidth();
      if (i.css("min-width", s), "right" == t.langdirection) {
        var a = n - (e.offset().left + s),
          r = n - (i.offset().left + i.outerWidth());
        i.css("margin-right", a - r);
      } else i.css("margin-left", e.offset().left - o.left);
    }
  }
  var e,
    n = !1,
    o = {
      x: {
        "bottom-left": "bottom-right",
        "bottom-right": "bottom-left",
        "bottom-center": "bottom-center",
        "top-left": "top-right",
        "top-right": "top-left",
        "top-center": "top-center",
        "left-top": "right-top",
        "left-bottom": "right-bottom",
        "left-center": "right-center",
        "right-top": "left-top",
        "right-bottom": "left-bottom",
        "right-center": "left-center"
      },
      y: {
        "bottom-left": "top-left",
        "bottom-right": "top-right",
        "bottom-center": "top-center",
        "top-left": "bottom-left",
        "top-right": "bottom-right",
        "top-center": "bottom-center",
        "left-top": "left-bottom",
        "left-bottom": "left-top",
        "left-center": "left-center",
        "right-top": "right-bottom",
        "right-bottom": "right-top",
        "right-center": "right-center"
      },
      xy: {
        "bottom-left": "top-right",
        "bottom-right": "top-left",
        "bottom-center": "top-center",
        "top-left": "bottom-right",
        "top-right": "bottom-left",
        "top-center": "bottom-center",
        "left-top": "right-bottom",
        "left-bottom": "right-top",
        "left-center": "right-center",
        "right-top": "left-bottom",
        "right-bottom": "left-top",
        "right-center": "left-center"
      }
    };
  t.component("dropdown", {
    defaults: {
      mode: "hover",
      pos: "bottom-left",
      offset: 0,
      remaintime: 800,
      justify: !1,
      boundary: t.$win,
      delay: 0,
      dropdownSelector: ".uk-dropdown,.uk-dropdown-blank",
      hoverDelayIdle: 250,
      preventflip: !1
    },
    remainIdle: !1,
    boot: function boot() {
      var i = t.support.touch ? "click" : "mouseenter";
      t.$html.on(i + ".dropdown.uikit focus pointerdown", "[data-uk-dropdown]", function (e) {
        var n = t.$(this);
        if (!n.data("dropdown")) {
          var o = t.dropdown(n, t.Utils.options(n.attr("data-uk-dropdown")));
          ("click" == e.type || "mouseenter" == e.type && "hover" == o.options.mode) && o.element.trigger(i), o.dropdown.length && e.preventDefault();
        }
      });
    },
    init: function init() {
      var i = this;
      this.dropdown = this.find(this.options.dropdownSelector), this.offsetParent = this.dropdown.parents().filter(function () {
        return -1 !== t.$.inArray(t.$(this).css("position"), ["relative", "fixed", "absolute"]);
      }).slice(0, 1), this.offsetParent.length || (this.offsetParent = this.element), this.centered = this.dropdown.hasClass("uk-dropdown-center"), this.justified = this.options.justify ? t.$(this.options.justify) : !1, this.boundary = t.$(this.options.boundary), this.boundary.length || (this.boundary = t.$win), this.dropdown.hasClass("uk-dropdown-up") && (this.options.pos = "top-left"), this.dropdown.hasClass("uk-dropdown-flip") && (this.options.pos = this.options.pos.replace("left", "right")), this.dropdown.hasClass("uk-dropdown-center") && (this.options.pos = this.options.pos.replace(/(left|right)/, "center")), this.element.attr("aria-haspopup", "true"), this.element.attr("aria-expanded", this.element.hasClass("uk-open")), this.dropdown.attr("aria-hidden", "true"), "click" == this.options.mode || t.support.touch ? this.on("click.uk.dropdown", function (e) {
        var n = t.$(e.target);
        n.parents(i.options.dropdownSelector).length || ((n.is("a[href='#']") || n.parent().is("a[href='#']") || i.dropdown.length && !i.dropdown.is(":visible")) && e.preventDefault(), n.blur()), i.element.hasClass("uk-open") ? (!i.dropdown.find(e.target).length || n.is(".uk-dropdown-close") || n.parents(".uk-dropdown-close").length) && i.hide() : i.show();
      }) : this.on("mouseenter", function () {
        i.trigger("pointerenter.uk.dropdown", [i]), i.remainIdle && clearTimeout(i.remainIdle), e && clearTimeout(e), n && n == i || (e = n && n != i ? setTimeout(function () {
          e = setTimeout(i.show.bind(i), i.options.delay);
        }, i.options.hoverDelayIdle) : setTimeout(i.show.bind(i), i.options.delay));
      }).on("mouseleave", function () {
        e && clearTimeout(e), i.remainIdle = setTimeout(function () {
          n && n == i && i.hide();
        }, i.options.remaintime), i.trigger("pointerleave.uk.dropdown", [i]);
      }).on("click", function (e) {
        var o = t.$(e.target);
        return i.remainIdle && clearTimeout(i.remainIdle), n && n == i ? ((!i.dropdown.find(e.target).length || o.is(".uk-dropdown-close") || o.parents(".uk-dropdown-close").length) && i.hide(), void 0) : ((o.is("a[href='#']") || o.parent().is("a[href='#']")) && e.preventDefault(), i.show(), void 0);
      });
    },
    show: function show() {
      t.$html.off("click.outer.dropdown"), n && n != this && n.hide(!0), e && clearTimeout(e), this.trigger("beforeshow.uk.dropdown", [this]), this.checkDimensions(), this.element.addClass("uk-open"), this.element.attr("aria-expanded", "true"), this.dropdown.attr("aria-hidden", "false"), this.trigger("show.uk.dropdown", [this]), t.Utils.checkDisplay(this.dropdown, !0), t.Utils.focus(this.dropdown), n = this, this.registerOuterClick();
    },
    hide: function hide(t) {
      this.trigger("beforehide.uk.dropdown", [this, t]), this.element.removeClass("uk-open"), this.remainIdle && clearTimeout(this.remainIdle), this.remainIdle = !1, this.element.attr("aria-expanded", "false"), this.dropdown.attr("aria-hidden", "true"), this.trigger("hide.uk.dropdown", [this, t]), n == this && (n = !1);
    },
    registerOuterClick: function registerOuterClick() {
      var i = this;
      t.$html.off("click.outer.dropdown"), setTimeout(function () {
        t.$html.on("click.outer.dropdown", function (o) {
          e && clearTimeout(e);
          t.$(o.target);
          n != i || i.element.find(o.target).length || (i.hide(!0), t.$html.off("click.outer.dropdown"));
        });
      }, 10);
    },
    checkDimensions: function checkDimensions() {
      if (this.dropdown.length) {
        this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip").css({
          topLeft: "",
          left: "",
          marginLeft: "",
          marginRight: ""
        }), this.justified && this.justified.length && this.dropdown.css("min-width", "");
        var e,
          n = t.$.extend({}, this.offsetParent.offset(), {
            width: this.offsetParent[0].offsetWidth,
            height: this.offsetParent[0].offsetHeight
          }),
          s = this.options.offset,
          a = this.dropdown,
          r = (a.show().offset() || {
            left: 0,
            top: 0
          }, a.outerWidth()),
          l = a.outerHeight(),
          c = this.boundary.width(),
          u = (this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset() : {
            top: 0,
            left: 0
          }, this.options.pos),
          d = {
            "bottom-left": {
              top: 0 + n.height + s,
              left: 0
            },
            "bottom-right": {
              top: 0 + n.height + s,
              left: 0 + n.width - r
            },
            "bottom-center": {
              top: 0 + n.height + s,
              left: 0 + n.width / 2 - r / 2
            },
            "top-left": {
              top: 0 - l - s,
              left: 0
            },
            "top-right": {
              top: 0 - l - s,
              left: 0 + n.width - r
            },
            "top-center": {
              top: 0 - l - s,
              left: 0 + n.width / 2 - r / 2
            },
            "left-top": {
              top: 0,
              left: 0 - r - s
            },
            "left-bottom": {
              top: 0 + n.height - l,
              left: 0 - r - s
            },
            "left-center": {
              top: 0 + n.height / 2 - l / 2,
              left: 0 - r - s
            },
            "right-top": {
              top: 0,
              left: 0 + n.width + s
            },
            "right-bottom": {
              top: 0 + n.height - l,
              left: 0 + n.width + s
            },
            "right-center": {
              top: 0 + n.height / 2 - l / 2,
              left: 0 + n.width + s
            }
          },
          h = {};
        if (e = u.split("-"), h = d[u] ? d[u] : d["bottom-left"], this.justified && this.justified.length) i(a.css({
          left: 0
        }), this.justified, c);else if (this.options.preventflip !== !0) {
          var p;
          switch (this.checkBoundary(n.left + h.left, n.top + h.top, r, l, c)) {
            case "x":
              "x" !== this.options.preventflip && (p = o.x[u] || "right-top");
              break;
            case "y":
              "y" !== this.options.preventflip && (p = o.y[u] || "top-left");
              break;
            case "xy":
              this.options.preventflip || (p = o.xy[u] || "right-bottom");
          }
          p && (e = p.split("-"), h = d[p] ? d[p] : d["bottom-left"], a.addClass("uk-dropdown-autoflip"), this.checkBoundary(n.left + h.left, n.top + h.top, r, l, c) && (e = u.split("-"), h = d[u] ? d[u] : d["bottom-left"]));
        }
        r > c && (a.addClass("uk-dropdown-stack"), this.trigger("stack.uk.dropdown", [this])), a.css(h).css("display", "").addClass("uk-dropdown-" + e[0]);
      }
    },
    checkBoundary: function checkBoundary(i, e, n, o, s) {
      var a = "";
      return (0 > i || i - t.$win.scrollLeft() + n > s) && (a += "x"), (e - t.$win.scrollTop() < 0 || e - t.$win.scrollTop() + o > window.innerHeight) && (a += "y"), a;
    }
  }), t.component("dropdownOverlay", {
    defaults: {
      justify: !1,
      cls: "",
      duration: 200
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-dropdown-overlay]", i).each(function () {
          var i = t.$(this);
          i.data("dropdownOverlay") || t.dropdownOverlay(i, t.Utils.options(i.attr("data-uk-dropdown-overlay")));
        });
      });
    },
    init: function init() {
      var e = this;
      this.justified = this.options.justify ? t.$(this.options.justify) : !1, this.overlay = this.element.find("uk-dropdown-overlay"), this.overlay.length || (this.overlay = t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)), this.overlay.addClass(this.options.cls), this.on({
        "beforeshow.uk.dropdown": function beforeshowUkDropdown(t, n) {
          e.dropdown = n, e.justified && e.justified.length && i(e.overlay.css({
            display: "block",
            marginLeft: "",
            marginRight: ""
          }), e.justified, e.justified.outerWidth());
        },
        "show.uk.dropdown": function showUkDropdown() {
          var i = e.dropdown.dropdown.outerHeight(!0);
          e.dropdown.element.removeClass("uk-open"), e.overlay.stop().css("display", "block").animate({
            height: i
          }, e.options.duration, function () {
            e.dropdown.dropdown.css("visibility", ""), e.dropdown.element.addClass("uk-open"), t.Utils.checkDisplay(e.dropdown.dropdown, !0);
          }), e.pointerleave = !1;
        },
        "hide.uk.dropdown": function hideUkDropdown() {
          e.overlay.stop().animate({
            height: 0
          }, e.options.duration);
        },
        "pointerenter.uk.dropdown": function pointerenterUkDropdown() {
          clearTimeout(e.remainIdle);
        },
        "pointerleave.uk.dropdown": function pointerleaveUkDropdown() {
          e.pointerleave = !0;
        }
      }), this.overlay.on({
        mouseenter: function mouseenter() {
          e.remainIdle && (clearTimeout(e.dropdown.remainIdle), clearTimeout(e.remainIdle));
        },
        mouseleave: function mouseleave() {
          e.pointerleave && n && (e.remainIdle = setTimeout(function () {
            n && n.hide();
          }, n.options.remaintime));
        }
      });
    }
  });
}(UIkit2), function (t) {
  "use strict";

  var i = [];
  t.component("gridMatchHeight", {
    defaults: {
      target: !1,
      row: !0,
      ignorestacked: !1,
      observe: !1
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-grid-match]", i).each(function () {
          var i,
            e = t.$(this);
          e.data("gridMatchHeight") || (i = t.gridMatchHeight(e, t.Utils.options(e.attr("data-uk-grid-match"))));
        });
      });
    },
    init: function init() {
      var e = this;
      this.columns = this.element.children(), this.elements = this.options.target ? this.find(this.options.target) : this.columns, this.columns.length && (t.$win.on("load resize orientationchange", function () {
        var i = function i() {
          e.element.is(":visible") && e.match();
        };
        return t.$(function () {
          i();
        }), t.Utils.debounce(i, 50);
      }()), this.options.observe && t.domObserve(this.element, function () {
        e.element.is(":visible") && e.match();
      }), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.match();
      }.bind(this)), i.push(this));
    },
    match: function match() {
      var i = this.columns.filter(":visible:first");
      if (i.length) {
        var e = Math.ceil(100 * parseFloat(i.css("width")) / parseFloat(i.parent().css("width"))) >= 100;
        return e && !this.options.ignorestacked ? this.revert() : t.Utils.matchHeights(this.elements, this.options), this;
      }
    },
    revert: function revert() {
      return this.elements.css("min-height", ""), this;
    }
  }), t.component("gridMargin", {
    defaults: {
      cls: "uk-grid-margin",
      rowfirst: "uk-row-first"
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-grid-margin]", i).each(function () {
          var i,
            e = t.$(this);
          e.data("gridMargin") || (i = t.gridMargin(e, t.Utils.options(e.attr("data-uk-grid-margin"))));
        });
      });
    },
    init: function init() {
      t.stackMargin(this.element, this.options);
    }
  });
}(UIkit2), function (t) {
  "use strict";

  function i(i, e) {
    return e ? ("object" == _typeof(i) ? (i = i instanceof jQuery ? i : t.$(i), i.parent().length && (e.persist = i, e.persist.data("modalPersistParent", i.parent()))) : i = "string" == typeof i || "number" == typeof i ? t.$("<div></div>").html(i) : t.$("<div></div>").html("UIkit2.modal Error: Unsupported data type: " + _typeof(i)), i.appendTo(e.element.find(".uk-modal-dialog")), e) : void 0;
  }
  var e,
    n = !1,
    o = 0,
    s = t.$html;
  t.$win.on("resize orientationchange", t.Utils.debounce(function () {
    t.$(".uk-modal.uk-open").each(function () {
      return t.$(this).data("modal") && t.$(this).data("modal").resize();
    });
  }, 150)), t.component("modal", {
    defaults: {
      keyboard: !0,
      bgclose: !0,
      minScrollHeight: 150,
      center: !1,
      modal: !0
    },
    scrollable: !1,
    transition: !1,
    hasTransitioned: !0,
    init: function init() {
      if (e || (e = t.$("body")), this.element.length) {
        var i = this;
        this.paddingdir = "padding-" + ("left" == t.langdirection ? "right" : "left"), this.dialog = this.find(".uk-modal-dialog"), this.active = !1, this.element.attr("aria-hidden", this.element.hasClass("uk-open")), this.on("click", ".uk-modal-close", function (t) {
          t.preventDefault(), i.hide();
        }).on("click", function (e) {
          var n = t.$(e.target);
          n[0] == i.element[0] && i.options.bgclose && i.hide();
        }), t.domObserve(this.element, function () {
          i.resize();
        });
      }
    },
    toggle: function toggle() {
      return this[this.isActive() ? "hide" : "show"]();
    },
    show: function show() {
      if (this.element.length) {
        var i = this;
        if (!this.isActive()) return this.options.modal && n && n.hide(!0), this.element.removeClass("uk-open").show(), this.resize(!0), this.options.modal && (n = this), this.active = !0, o++, t.support.transition ? (this.hasTransitioned = !1, this.element.one(t.support.transition.end, function () {
          i.hasTransitioned = !0, t.Utils.focus(i.dialog, "a[href]");
        }).addClass("uk-open")) : (this.element.addClass("uk-open"), t.Utils.focus(this.dialog, "a[href]")), s.addClass("uk-modal-page").height(), this.element.attr("aria-hidden", "false"), this.element.trigger("show.uk.modal"), t.Utils.checkDisplay(this.dialog, !0), this;
      }
    },
    hide: function hide(i) {
      if (!i && t.support.transition && this.hasTransitioned) {
        var e = this;
        this.one(t.support.transition.end, function () {
          e._hide();
        }).removeClass("uk-open");
      } else this._hide();
      return this;
    },
    resize: function resize(t) {
      if (this.isActive() || t) {
        var i = e.width();
        if (this.scrollbarwidth = window.innerWidth - i, e.css(this.paddingdir, this.scrollbarwidth), this.element.css("overflow-y", this.scrollbarwidth ? "scroll" : "auto"), !this.updateScrollable() && this.options.center) {
          var n = this.dialog.outerHeight(),
            o = parseInt(this.dialog.css("margin-top"), 10) + parseInt(this.dialog.css("margin-bottom"), 10);
          n + o < window.innerHeight ? this.dialog.css({
            top: window.innerHeight / 2 - n / 2 - o
          }) : this.dialog.css({
            top: ""
          });
        }
      }
    },
    updateScrollable: function updateScrollable() {
      var t = this.dialog.find(".uk-overflow-container:visible:first");
      if (t.length) {
        t.css("height", 0);
        var i = Math.abs(parseInt(this.dialog.css("margin-top"), 10)),
          e = this.dialog.outerHeight(),
          n = window.innerHeight,
          o = n - 2 * (20 > i ? 20 : i) - e;
        return t.css({
          maxHeight: o < this.options.minScrollHeight ? "" : o,
          height: ""
        }), !0;
      }
      return !1;
    },
    _hide: function _hide() {
      this.active = !1, o > 0 ? o-- : o = 0, this.element.hide().removeClass("uk-open"), this.element.attr("aria-hidden", "true"), o || (s.removeClass("uk-modal-page"), e.css(this.paddingdir, "")), n === this && (n = !1), this.trigger("hide.uk.modal");
    },
    isActive: function isActive() {
      return this.element.hasClass("uk-open");
    }
  }), t.component("modalTrigger", {
    boot: function boot() {
      t.$html.on("click.modal.uikit", "[data-uk-modal]", function (i) {
        var e = t.$(this);
        if (e.is("a") && i.preventDefault(), !e.data("modalTrigger")) {
          var n = t.modalTrigger(e, t.Utils.options(e.attr("data-uk-modal")));
          n.show();
        }
      }), t.$html.on("keydown.modal.uikit", function (t) {
        n && 27 === t.keyCode && n.options.keyboard && (t.preventDefault(), n.hide());
      });
    },
    init: function init() {
      var i = this;
      this.options = t.$.extend({
        target: i.element.is("a") ? i.element.attr("href") : !1
      }, this.options), this.modal = t.modal(this.options.target, this.options), this.on("click", function (t) {
        t.preventDefault(), i.show();
      }), this.proxy(this.modal, "show hide isActive");
    }
  }), t.modal.dialog = function (e, n) {
    var o = t.modal(t.$(t.modal.dialog.template).appendTo("body"), n);
    return o.on("hide.uk.modal", function () {
      o.persist && (o.persist.appendTo(o.persist.data("modalPersistParent")), o.persist = !1), o.element.remove();
    }), i(e, o), o;
  }, t.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>', t.modal.alert = function (i, e) {
    e = t.$.extend(!0, {
      bgclose: !1,
      keyboard: !1,
      modal: !1,
      labels: t.modal.labels
    }, e);
    var n = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + e.labels.Ok + "</button></div>"].join(""), e);
    return n.on("show.uk.modal", function () {
      setTimeout(function () {
        n.element.find("button:first").focus();
      }, 50);
    }), n.show();
  }, t.modal.confirm = function (i, e, n) {
    var o = arguments.length > 1 && arguments[arguments.length - 1] ? arguments[arguments.length - 1] : {};
    e = t.$.isFunction(e) ? e : function () {}, n = t.$.isFunction(n) ? n : function () {}, o = t.$.extend(!0, {
      bgclose: !1,
      keyboard: !1,
      modal: !1,
      labels: t.modal.labels
    }, t.$.isFunction(o) ? {} : o);
    var s = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">' + o.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-confirm">' + o.labels.Ok + "</button></div>"].join(""), o);
    return s.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function () {
      t.$(this).is(".js-modal-confirm") ? e() : n(), s.hide();
    }), s.on("show.uk.modal", function () {
      setTimeout(function () {
        s.element.find(".js-modal-confirm").focus();
      }, 50);
    }), s.show();
  }, t.modal.prompt = function (i, e, n, o) {
    n = t.$.isFunction(n) ? n : function () {}, o = t.$.extend(!0, {
      bgclose: !1,
      keyboard: !1,
      modal: !1,
      labels: t.modal.labels
    }, o);
    var s = t.modal.dialog([i ? '<div class="uk-modal-content uk-form">' + String(i) + "</div>" : "", '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + o.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + o.labels.Ok + "</button></div>"].join(""), o),
      a = s.element.find("input[type='text']").val(e || "").on("keyup", function (t) {
        13 == t.keyCode && s.element.find(".js-modal-ok").trigger("click");
      });
    return s.element.find(".js-modal-ok").on("click", function () {
      n(a.val()) !== !1 && s.hide();
    }), s.show();
  }, t.modal.blockUI = function (i, e) {
    var n = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i || '<div class="uk-text-center">...</div>') + "</div>"].join(""), t.$.extend({
      bgclose: !1,
      keyboard: !1,
      modal: !1
    }, e));
    return n.content = n.element.find(".uk-modal-content:first"), n.show();
  }, t.modal.labels = {
    Ok: "Ok",
    Cancel: "Cancel"
  };
}(UIkit2), function (t) {
  "use strict";

  function i(i) {
    var e = t.$(i),
      n = "auto";
    if (e.is(":visible")) n = e.outerHeight();else {
      var o = {
        position: e.css("position"),
        visibility: e.css("visibility"),
        display: e.css("display")
      };
      n = e.css({
        position: "absolute",
        visibility: "hidden",
        display: "block"
      }).outerHeight(), e.css(o);
    }
    return n;
  }
  t.component("nav", {
    defaults: {
      toggle: '>li.uk-parent > a[href="#"]',
      lists: ">li.uk-parent > ul",
      multiple: !1
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-nav]", i).each(function () {
          var i = t.$(this);
          if (!i.data("nav")) {
            t.nav(i, t.Utils.options(i.attr("data-uk-nav")));
          }
        });
      });
    },
    init: function init() {
      var i = this;
      this.on("click.uk.nav", this.options.toggle, function (e) {
        e.preventDefault();
        var n = t.$(this);
        i.open(n.parent()[0] == i.element[0] ? n : n.parent("li"));
      }), this.update(), t.domObserve(this.element, function () {
        i.element.find(i.options.lists).not("[role]").length && i.update();
      });
    },
    update: function update() {
      var i = this;
      this.find(this.options.lists).each(function () {
        var e = t.$(this).attr("role", "menu"),
          n = e.closest("li"),
          o = n.hasClass("uk-active");
        n.data("list-container") || (e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), n.data("list-container", e.parent()[o ? "removeClass" : "addClass"]("uk-hidden"))), n.attr("aria-expanded", n.hasClass("uk-open")), o && i.open(n, !0);
      });
    },
    open: function open(e, n) {
      var o = this,
        s = this.element,
        a = t.$(e),
        r = a.data("list-container");
      this.options.multiple || s.children(".uk-open").not(e).each(function () {
        var i = t.$(this);
        i.data("list-container") && i.data("list-container").stop().animate({
          height: 0
        }, function () {
          t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden");
        });
      }), a.toggleClass("uk-open"), a.attr("aria-expanded", a.hasClass("uk-open")), r && (a.hasClass("uk-open") && r.removeClass("uk-hidden"), n ? (r.stop().height(a.hasClass("uk-open") ? "auto" : 0), a.hasClass("uk-open") || r.addClass("uk-hidden"), this.trigger("display.uk.check")) : r.stop().animate({
        height: a.hasClass("uk-open") ? i(r.find("ul:first")) : 0
      }, function () {
        a.hasClass("uk-open") ? r.css("height", "") : r.addClass("uk-hidden"), o.trigger("display.uk.check");
      }));
    }
  });
}(UIkit2), function (t) {
  "use strict";

  var i = {
      x: window.scrollX,
      y: window.scrollY
    },
    e = (t.$win, t.$doc, t.$html),
    n = {
      show: function show(n, o) {
        if (n = t.$(n), n.length) {
          o = t.$.extend({
            mode: "push"
          }, o);
          var s = t.$("body"),
            a = n.find(".uk-offcanvas-bar:first"),
            r = "right" == t.langdirection,
            l = a.hasClass("uk-offcanvas-bar-flip") ? -1 : 1,
            c = l * (r ? -1 : 1),
            u = window.innerWidth - s.width();
          i = {
            x: window.pageXOffset,
            y: window.pageYOffset
          }, a.attr("mode", o.mode), n.addClass("uk-active"), s.css({
            width: window.innerWidth - u,
            height: window.innerHeight
          }).addClass("uk-offcanvas-page"), ("push" == o.mode || "reveal" == o.mode) && s.css(r ? "margin-right" : "margin-left", (r ? -1 : 1) * a.outerWidth() * c), "reveal" == o.mode && a.css("clip", "rect(0, " + a.outerWidth() + "px, 100vh, 0)"), e.css("margin-top", -1 * i.y).width(), a.addClass("uk-offcanvas-bar-show"), this._initElement(n), a.trigger("show.uk.offcanvas", [n, a]), n.attr("aria-hidden", "false");
        }
      },
      hide: function hide(n) {
        var o = t.$("body"),
          s = t.$(".uk-offcanvas.uk-active"),
          a = "right" == t.langdirection,
          r = s.find(".uk-offcanvas-bar:first"),
          l = function l() {
            o.removeClass("uk-offcanvas-page").css({
              width: "",
              height: "",
              marginLeft: "",
              marginRight: ""
            }), s.removeClass("uk-active"), r.removeClass("uk-offcanvas-bar-show"), e.css("margin-top", ""), window.scrollTo(i.x, i.y), r.trigger("hide.uk.offcanvas", [s, r]), s.attr("aria-hidden", "true");
          };
        s.length && ("none" == r.attr("mode") && (n = !0), t.support.transition && !n ? (o.one(t.support.transition.end, function () {
          l();
        }).css(a ? "margin-right" : "margin-left", ""), "reveal" == r.attr("mode") && r.css("clip", ""), setTimeout(function () {
          r.removeClass("uk-offcanvas-bar-show");
        }, 0)) : l());
      },
      _initElement: function _initElement(i) {
        i.data("OffcanvasInit") || (i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function (i) {
          var e = t.$(i.target);
          if (!i.type.match(/swipe/) && !e.hasClass("uk-offcanvas-close")) {
            if (e.hasClass("uk-offcanvas-bar")) return;
            if (e.parents(".uk-offcanvas-bar:first").length) return;
          }
          i.stopImmediatePropagation(), n.hide();
        }), i.on("click", 'a[href*="#"]', function () {
          var i = t.$(this),
            e = i.attr("href");
          "#" != e && (t.$doc.one("hide.uk.offcanvas", function () {
            var n;
            try {
              n = t.$(i[0].hash);
            } catch (o) {
              n = "";
            }
            n.length || (n = t.$('[name="' + i[0].hash.replace("#", "") + '"]')), n.length && t.Utils.scrollToElement ? t.Utils.scrollToElement(n, t.Utils.options(i.attr("data-uk-smooth-scroll") || "{}")) : window.location.href = e;
          }), n.hide());
        }), i.data("OffcanvasInit", !0));
      }
    };
  t.component("offcanvasTrigger", {
    boot: function boot() {
      e.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function (i) {
        i.preventDefault();
        var e = t.$(this);
        if (!e.data("offcanvasTrigger")) {
          {
            t.offcanvasTrigger(e, t.Utils.options(e.attr("data-uk-offcanvas")));
          }
          e.trigger("click");
        }
      }), e.on("keydown.uk.offcanvas", function (t) {
        27 === t.keyCode && n.hide();
      });
    },
    init: function init() {
      var i = this;
      this.options = t.$.extend({
        target: i.element.is("a") ? i.element.attr("href") : !1,
        mode: "push"
      }, this.options), this.on("click", function (t) {
        t.preventDefault(), n.show(i.options.target, i.options);
      });
    }
  }), t.offcanvas = n;
}(UIkit2), function (t) {
  "use strict";

  function i(i, e, n) {
    var o,
      s = t.$.Deferred(),
      a = i,
      r = i;
    return n[0] === e[0] ? (s.resolve(), s.promise()) : ("object" == _typeof(i) && (a = i[0], r = i[1] || i[0]), t.$body.css("overflow-x", "hidden"), o = function o() {
      e && e.hide().removeClass("uk-active " + r + " uk-animation-reverse"), n.addClass(a).one(t.support.animation.end, function () {
        setTimeout(function () {
          n.removeClass("" + a).css({
            opacity: "",
            display: ""
          });
        }, 0), s.resolve(), t.$body.css("overflow-x", ""), e && e.css({
          opacity: "",
          display: ""
        });
      }.bind(this)).show();
    }, n.css("animation-duration", this.options.duration + "ms"), e && e.length ? (e.css("animation-duration", this.options.duration + "ms"), e.css("display", "none").addClass(r + " uk-animation-reverse").one(t.support.animation.end, function () {
      o();
    }.bind(this)).css("display", "")) : (n.addClass("uk-active"), o()), s.promise());
  }
  var e;
  t.component("switcher", {
    defaults: {
      connect: !1,
      toggle: ">*",
      active: 0,
      animation: !1,
      duration: 200,
      swiping: !0
    },
    animating: !1,
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-switcher]", i).each(function () {
          var i = t.$(this);
          if (!i.data("switcher")) {
            t.switcher(i, t.Utils.options(i.attr("data-uk-switcher")));
          }
        });
      });
    },
    init: function init() {
      var i = this;
      this.on("click.uk.switcher", this.options.toggle, function (t) {
        t.preventDefault(), i.show(this);
      }), this.options.connect && (this.connect = t.$(this.options.connect), this.connect.length && (this.connect.on("click.uk.switcher", "[data-uk-switcher-item]", function (e) {
        e.preventDefault();
        var n = t.$(this).attr("data-uk-switcher-item");
        if (i.index != n) switch (n) {
          case "next":
          case "previous":
            i.show(i.index + ("next" == n ? 1 : -1));
            break;
          default:
            i.show(parseInt(n, 10));
        }
      }), this.options.swiping && this.connect.on("swipeRight swipeLeft", function (t) {
        t.preventDefault(), window.getSelection().toString() || i.show(i.index + ("swipeLeft" == t.type ? 1 : -1));
      }), this.update()));
    },
    update: function update() {
      this.connect.children().removeClass("uk-active").attr("aria-hidden", "true");
      var t = this.find(this.options.toggle),
        i = t.filter(".uk-active");
      if (i.length) this.show(i, !1);else {
        if (this.options.active === !1) return;
        i = t.eq(this.options.active), this.show(i.length ? i : t.eq(0), !1);
      }
      t.not(i).attr("aria-expanded", "false"), i.attr("aria-expanded", "true");
    },
    show: function show(n, o) {
      if (!this.animating) {
        var s = this.find(this.options.toggle);
        isNaN(n) ? n = t.$(n) : (n = 0 > n ? s.length - 1 : n, n = s.eq(s[n] ? n : 0));
        var a = this,
          r = t.$(n),
          l = e[this.options.animation] || function (t, n) {
            if (!a.options.animation) return e.none.apply(a);
            var o = a.options.animation.split(",");
            return 1 == o.length && (o[1] = o[0]), o[0] = o[0].trim(), o[1] = o[1].trim(), i.apply(a, [o, t, n]);
          };
        o !== !1 && t.support.animation || (l = e.none), r.hasClass("uk-disabled") || (s.attr("aria-expanded", "false"), r.attr("aria-expanded", "true"), s.filter(".uk-active").removeClass("uk-active"), r.addClass("uk-active"), this.options.connect && this.connect.length && (this.index = this.find(this.options.toggle).index(r), -1 == this.index && (this.index = 0), this.connect.each(function () {
          var i = t.$(this),
            e = t.$(i.children()),
            n = t.$(e.filter(".uk-active")),
            o = t.$(e.eq(a.index));
          a.animating = !0, l.apply(a, [n, o]).then(function () {
            n.removeClass("uk-active"), o.addClass("uk-active"), n.attr("aria-hidden", "true"), o.attr("aria-hidden", "false"), t.Utils.checkDisplay(o, !0), a.animating = !1;
          });
        })), this.trigger("show.uk.switcher", [r]));
      }
    }
  }), e = {
    none: function none() {
      var i = t.$.Deferred();
      return i.resolve(), i.promise();
    },
    fade: function fade(t, e) {
      return i.apply(this, ["uk-animation-fade", t, e]);
    },
    "slide-bottom": function slideBottom(t, e) {
      return i.apply(this, ["uk-animation-slide-bottom", t, e]);
    },
    "slide-top": function slideTop(t, e) {
      return i.apply(this, ["uk-animation-slide-top", t, e]);
    },
    "slide-vertical": function slideVertical(t, e) {
      var n = ["uk-animation-slide-top", "uk-animation-slide-bottom"];
      return t && t.index() > e.index() && n.reverse(), i.apply(this, [n, t, e]);
    },
    "slide-left": function slideLeft(t, e) {
      return i.apply(this, ["uk-animation-slide-left", t, e]);
    },
    "slide-right": function slideRight(t, e) {
      return i.apply(this, ["uk-animation-slide-right", t, e]);
    },
    "slide-horizontal": function slideHorizontal(t, e) {
      var n = ["uk-animation-slide-right", "uk-animation-slide-left"];
      return t && t.index() > e.index() && n.reverse(), i.apply(this, [n, t, e]);
    },
    scale: function scale(t, e) {
      return i.apply(this, ["uk-animation-scale-up", t, e]);
    }
  }, t.switcher.animations = e;
}(UIkit2), function (t) {
  "use strict";

  t.component("tab", {
    defaults: {
      target: ">li:not(.uk-tab-responsive, .uk-disabled)",
      connect: !1,
      active: 0,
      animation: !1,
      duration: 200,
      swiping: !0
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-tab]", i).each(function () {
          var i = t.$(this);
          if (!i.data("tab")) {
            t.tab(i, t.Utils.options(i.attr("data-uk-tab")));
          }
        });
      });
    },
    init: function init() {
      var i = this;
      this.current = !1, this.on("click.uk.tab", this.options.target, function (e) {
        if (e.preventDefault(), !i.switcher || !i.switcher.animating) {
          var n = i.find(i.options.target).not(this);
          n.removeClass("uk-active").blur(), i.trigger("change.uk.tab", [t.$(this).addClass("uk-active"), i.current]), i.current = t.$(this), i.options.connect || (n.attr("aria-expanded", "false"), t.$(this).attr("aria-expanded", "true"));
        }
      }), this.options.connect && (this.connect = t.$(this.options.connect)), this.responsivetab = t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'), this.responsivetab.dropdown = this.responsivetab.find(".uk-dropdown"), this.responsivetab.lst = this.responsivetab.dropdown.find("ul"), this.responsivetab.caption = this.responsivetab.find("a:first"), this.element.hasClass("uk-tab-bottom") && this.responsivetab.dropdown.addClass("uk-dropdown-up"), this.responsivetab.lst.on("click.uk.tab", "a", function (e) {
        e.preventDefault(), e.stopPropagation();
        var n = t.$(this);
        i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click");
      }), this.on("show.uk.switcher change.uk.tab", function (t, e) {
        i.responsivetab.caption.html(e.text());
      }), this.element.append(this.responsivetab), this.options.connect && (this.switcher = t.switcher(this.element, {
        toggle: ">li:not(.uk-tab-responsive)",
        connect: this.options.connect,
        active: this.options.active,
        animation: this.options.animation,
        duration: this.options.duration,
        swiping: this.options.swiping
      })), t.dropdown(this.responsivetab, {
        mode: "click",
        preventflip: "y"
      }), i.trigger("change.uk.tab", [this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]), this.check(), t.$win.on("resize orientationchange", t.Utils.debounce(function () {
        i.element.is(":visible") && i.check();
      }, 100)), this.on("display.uk.check", function () {
        i.element.is(":visible") && i.check();
      });
    },
    check: function check() {
      var i = this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");
      if (!i.length) return this.responsivetab.addClass("uk-hidden"), void 0;
      var e,
        n,
        o,
        s = i.eq(0).offset().top + Math.ceil(i.eq(0).height() / 2),
        a = !1;
      if (this.responsivetab.lst.empty(), i.each(function () {
        t.$(this).offset().top > s && (a = !0);
      }), a) for (var r = 0; r < i.length; r++) e = t.$(i.eq(r)), n = e.find("a"), "none" == e.css("float") || e.attr("uk-dropdown") || (e.hasClass("uk-disabled") || (o = t.$(e[0].outerHTML), o.find("a").data("index", r), this.responsivetab.lst.append(o)), e.addClass("uk-hidden"));
      this.responsivetab[this.responsivetab.lst.children("li").length ? "removeClass" : "addClass"]("uk-hidden");
    }
  });
}(UIkit2), function (t) {
  "use strict";

  t.component("cover", {
    defaults: {
      automute: !0
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-cover]", i).each(function () {
          var i = t.$(this);
          if (!i.data("cover")) {
            t.cover(i, t.Utils.options(i.attr("data-uk-cover")));
          }
        });
      });
    },
    init: function init() {
      if (this.parent = this.element.parent(), t.$win.on("load resize orientationchange", t.Utils.debounce(function () {
        this.check();
      }.bind(this), 100)), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.check();
      }.bind(this)), this.check(), this.element.is("iframe") && this.options.automute) {
        var i = this.element.attr("src");
        this.element.attr("src", "").on("load", function () {
          this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*");
        }).attr("src", [i, i.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1"].join(""));
      }
    },
    check: function check() {
      this.element.css({
        width: "",
        height: ""
      }), this.dimension = {
        w: this.element.width(),
        h: this.element.height()
      }, this.element.attr("width") && !isNaN(this.element.attr("width")) && (this.dimension.w = this.element.attr("width")), this.element.attr("height") && !isNaN(this.element.attr("height")) && (this.dimension.h = this.element.attr("height")), this.ratio = this.dimension.w / this.dimension.h;
      var t,
        i,
        e = this.parent.width(),
        n = this.parent.height();
      e / this.ratio < n ? (t = Math.ceil(n * this.ratio), i = n) : (t = e, i = Math.ceil(e / this.ratio)), this.element.css({
        width: t,
        height: i
      });
    }
  });
}(UIkit2);
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! UIkit 2.27.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  var i;
  window.UIkit2 && (i = t(UIkit2)), "function" == typeof define && define.amd && define("uikit-sticky", ["uikit"], function () {
    return i || t(UIkit2);
  });
}(function (t) {
  "use strict";

  function i() {
    var i = arguments.length ? arguments : n;
    if (i.length && !(e.scrollTop() < 0)) for (var o, a, r, h, p = e.scrollTop(), c = s.height(), l = e.height(), m = c - l, d = p > m ? m - p : 0, u = 0; u < i.length; u++) if (h = i[u], h.element.is(":visible") && !h.animate) {
      if (h.check()) {
        if (h.top < 0 ? o = 0 : (r = h.element.outerHeight(), o = c - r - h.top - h.options.bottom - p - d, o = 0 > o ? o + h.top : h.top), h.boundary && h.boundary.length) {
          var f = h.boundary.offset().top;
          a = h.boundtoparent ? c - (f + h.boundary.outerHeight()) + parseInt(h.boundary.css("padding-bottom")) : c - f, o = p + r > c - a - (h.top < 0 ? 0 : h.top) ? c - a - (p + r) : o;
        }
        if (h.currentTop != o) {
          if (h.element.css({
            position: "fixed",
            top: o,
            width: h.getWidthFrom.length ? h.getWidthFrom.width() : h.element.width()
          }), !h.init && (h.element.addClass(h.options.clsinit), location.hash && p > 0 && h.options.target)) {
            var g = t.$(location.hash);
            g.length && setTimeout(function (t, i) {
              return function () {
                i.element.width();
                var e = t.offset(),
                  s = e.top + t.outerHeight(),
                  n = i.element.offset(),
                  o = i.element.outerHeight(),
                  a = n.top + o;
                n.top < s && e.top < a && (p = e.top - o - i.options.target, window.scrollTo(0, p));
              };
            }(g, h), 0);
          }
          h.element.addClass(h.options.clsactive).removeClass(h.options.clsinactive), h.element.trigger("active.uk.sticky"), h.element.css("margin", ""), h.options.animation && h.init && !t.Utils.isInView(h.wrapper) && h.element.addClass(h.options.animation), h.currentTop = o;
        }
      } else null !== h.currentTop && h.reset();
      h.init = !0;
    }
  }
  var e = t.$win,
    s = t.$doc,
    n = [],
    o = 1;
  return t.component("sticky", {
    defaults: {
      top: 0,
      bottom: 0,
      animation: "",
      clsinit: "uk-sticky-init",
      clsactive: "uk-active",
      clsinactive: "",
      getWidthFrom: "",
      showup: !1,
      boundary: !1,
      media: !1,
      target: !1,
      disabled: !1
    },
    boot: function boot() {
      t.$doc.on("scrolling.uk.document", function (t, e) {
        e && e.dir && (o = e.dir.y, i());
      }), t.$win.on("resize orientationchange", t.Utils.debounce(function () {
        if (n.length) {
          for (var t = 0; t < n.length; t++) n[t].reset(!0), n[t].self.computeWrapper();
          i();
        }
      }, 100)), t.ready(function (e) {
        setTimeout(function () {
          t.$("[data-uk-sticky]", e).each(function () {
            var i = t.$(this);
            i.data("sticky") || t.sticky(i, t.Utils.options(i.attr("data-uk-sticky")));
          }), i();
        }, 0);
      });
    },
    init: function init() {
      var i,
        a = this.options.boundary;
      this.wrapper = this.element.wrap('<div class="uk-sticky-placeholder"></div>').parent(), this.computeWrapper(), this.wrapper.css({
        "margin-top": this.element.css("margin-top"),
        "margin-bottom": this.element.css("margin-bottom"),
        "margin-left": this.element.css("margin-left"),
        "margin-right": this.element.css("margin-right")
      }), this.element.css("margin", 0), a && (a === !0 || "!" === a[0] ? (a = a === !0 ? this.wrapper.parent() : this.wrapper.closest(a.substr(1)), i = !0) : "string" == typeof a && (a = t.$(a))), this.sticky = {
        self: this,
        options: this.options,
        element: this.element,
        currentTop: null,
        wrapper: this.wrapper,
        init: !1,
        getWidthFrom: t.$(this.options.getWidthFrom || this.wrapper),
        boundary: a,
        boundtoparent: i,
        top: 0,
        calcTop: function calcTop() {
          var i = this.options.top;
          if (this.options.top && "string" == typeof this.options.top) if (this.options.top.match(/^(-|)(\d+)vh$/)) i = window.innerHeight * parseInt(this.options.top, 10) / 100;else {
            var e = t.$(this.options.top).first();
            e.length && e.is(":visible") && (i = -1 * (e.offset().top + e.outerHeight() - this.wrapper.offset().top));
          }
          this.top = i;
        },
        reset: function reset(i) {
          this.calcTop();
          var e = function () {
            this.element.css({
              position: "",
              top: "",
              width: "",
              left: "",
              margin: "0"
            }), this.element.removeClass([this.options.animation, "uk-animation-reverse", this.options.clsactive].join(" ")), this.element.addClass(this.options.clsinactive), this.element.trigger("inactive.uk.sticky"), this.currentTop = null, this.animate = !1;
          }.bind(this);
          !i && this.options.animation && t.support.animation && !t.Utils.isInView(this.wrapper) ? (this.animate = !0, this.element.removeClass(this.options.animation).one(t.support.animation.end, function () {
            e();
          }).width(), this.element.addClass(this.options.animation + " uk-animation-reverse")) : e();
        },
        check: function check() {
          if (this.options.disabled) return !1;
          if (this.options.media) switch (_typeof(this.options.media)) {
            case "number":
              if (window.innerWidth < this.options.media) return !1;
              break;
            case "string":
              if (window.matchMedia && !window.matchMedia(this.options.media).matches) return !1;
          }
          var i = e.scrollTop(),
            n = s.height(),
            a = n - window.innerHeight,
            r = i > a ? a - i : 0,
            h = this.wrapper.offset().top,
            p = h - this.top - r,
            c = i >= p;
          return c && this.options.showup && (1 == o && (c = !1), -1 == o && !this.element.hasClass(this.options.clsactive) && t.Utils.isInView(this.wrapper) && (c = !1)), c;
        }
      }, this.sticky.calcTop(), n.push(this.sticky);
    },
    update: function update() {
      i(this.sticky);
    },
    enable: function enable() {
      this.options.disabled = !1, this.update();
    },
    disable: function disable(t) {
      this.options.disabled = !0, this.sticky.reset(t);
    },
    computeWrapper: function computeWrapper() {
      this.wrapper.css({
        height: -1 == ["absolute", "fixed"].indexOf(this.element.css("position")) ? this.element.outerHeight() : "",
        "float": "none" != this.element.css("float") ? this.element.css("float") : ""
      }), "fixed" == this.element.css("position") && this.element.css({
        width: this.sticky.getWidthFrom.length ? this.sticky.getWidthFrom.width() : this.element.width()
      });
    }
  }), t.sticky;
});
"use strict";

/*! UIkit 2.27.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  var e;
  window.UIkit2 && (e = t(UIkit2)), "function" == typeof define && define.amd && define("uikit-notify", ["uikit"], function () {
    return e || t(UIkit2);
  });
}(function (t) {
  "use strict";

  var e = {},
    i = {},
    s = function s(e) {
      return "string" == t.$.type(e) && (e = {
        message: e
      }), arguments[1] && (e = t.$.extend(e, "string" == t.$.type(arguments[1]) ? {
        status: arguments[1]
      } : arguments[1])), new n(e).show();
    },
    o = function o(t, e) {
      var s;
      if (t) for (s in i) t === i[s].group && i[s].close(e);else for (s in i) i[s].close(e);
    },
    n = function n(s) {
      this.options = t.$.extend({}, n.defaults, s), this.uuid = t.Utils.uid("notifymsg"), this.element = t.$(['<div class="uk-notify-message">', '<a class="uk-close"></a>', "<div></div>", "</div>"].join("")).data("notifyMessage", this), this.content(this.options.message), this.options.status && (this.element.addClass("uk-notify-message-" + this.options.status), this.currentstatus = this.options.status), this.group = this.options.group, i[this.uuid] = this, e[this.options.pos] || (e[this.options.pos] = t.$('<div class="uk-notify uk-notify-' + this.options.pos + '"></div>').appendTo("body").on("click", ".uk-notify-message", function () {
        var e = t.$(this).data("notifyMessage");
        e.element.trigger("manualclose.uk.notify", [e]), e.close();
      }));
    };
  return t.$.extend(n.prototype, {
    uuid: !1,
    element: !1,
    timout: !1,
    currentstatus: "",
    group: !1,
    show: function show() {
      if (!this.element.is(":visible")) {
        var t = this;
        e[this.options.pos].show().prepend(this.element);
        var i = parseInt(this.element.css("margin-bottom"), 10);
        return this.element.css({
          opacity: 0,
          marginTop: -1 * this.element.outerHeight(),
          marginBottom: 0
        }).animate({
          opacity: 1,
          marginTop: 0,
          marginBottom: i
        }, function () {
          if (t.options.timeout) {
            var e = function e() {
              t.close();
            };
            t.timeout = setTimeout(e, t.options.timeout), t.element.hover(function () {
              clearTimeout(t.timeout);
            }, function () {
              t.timeout = setTimeout(e, t.options.timeout);
            });
          }
        }), this;
      }
    },
    close: function close(t) {
      var s = this,
        o = function o() {
          s.element.remove(), e[s.options.pos].children().length || e[s.options.pos].hide(), s.options.onClose.apply(s, []), s.element.trigger("close.uk.notify", [s]), delete i[s.uuid];
        };
      this.timeout && clearTimeout(this.timeout), t ? o() : this.element.animate({
        opacity: 0,
        marginTop: -1 * this.element.outerHeight(),
        marginBottom: 0
      }, function () {
        o();
      });
    },
    content: function content(t) {
      var e = this.element.find(">div");
      return t ? (e.html(t), this) : e.html();
    },
    status: function status(t) {
      return t ? (this.element.removeClass("uk-notify-message-" + this.currentstatus).addClass("uk-notify-message-" + t), this.currentstatus = t, this) : this.currentstatus;
    }
  }), n.defaults = {
    message: "",
    status: "",
    timeout: 5e3,
    group: null,
    pos: "top-center",
    onClose: function onClose() {}
  }, t.notify = s, t.notify.message = n, t.notify.closeAll = o, s;
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
      s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
      t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
      t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
      e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
      t,
      o = this;
    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
      e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");
        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");
          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }
          d.appendChild(a);
        }
        o.appendChild(d);
      }
      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = !1,
      d = r.$slider.width(),
      a = window.innerWidth || i(window).width();
    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = i(e.currentTarget);
    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;
      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;
      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;
      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }
      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
      e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
      t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
      e = 0,
      t = 0,
      o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
      t,
      o,
      s,
      n = this,
      r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
      e = this,
      t = 0,
      o = 0,
      s = [];
    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
      t,
      o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
      t = Math.ceil(e.slideCount / e.options.slidesToShow),
      o = e.getNavigableIndexes().filter(function (i) {
        return i >= 0 && i < e.slideCount;
      });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());
    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
          t = i(this).attr("data-lazy"),
          o = i(this).attr("data-srcset"),
          s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
          r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }
    var t,
      o,
      s,
      n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
      o,
      s,
      n,
      r,
      l = this,
      d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
      o,
      s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
      t,
      o,
      s = this,
      n = s.options.responsive || null;
    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";
      for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
      }
      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
      t,
      o = this,
      s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
      t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
      t,
      o,
      s,
      n,
      r = this,
      l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
      for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
      r.options.responsive.push(s[t]);
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
      e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
      t,
      o,
      s,
      n = this;
    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
      t,
      o,
      s = this;
    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
      o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
      s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
      s,
      n,
      r,
      l,
      d = null,
      a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
      e,
      t,
      o,
      s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
      t,
      o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;
        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }
      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;
      case "move":
        e.swipeMove(i);
        break;
      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
      t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
      t,
      o = this,
      s = arguments[0],
      n = Array.prototype.slice.call(arguments, 1),
      r = o.length;
    for (i = 0; i < r; i++) if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    return o;
  };
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! choices.js v7.1.5 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Choices = t() : e.Choices = t();
}(window, function () {
  return function (e) {
    var t = {};
    function i(n) {
      if (t[n]) return t[n].exports;
      var s = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
    }
    return i.m = e, i.c = t, i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, i.t = function (e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var s in e) i.d(n, s, function (t) {
        return e[t];
      }.bind(null, s));
      return n;
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return i.d(t, "a", t), t;
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "/public/assets/scripts/", i(i.s = 5);
  }([function (e, t, i) {
    var n;
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    !function () {
      "use strict";

      var i = {}.hasOwnProperty;
      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var n = arguments[t];
          if (n) {
            var r = _typeof(n);
            if ("string" === r || "number" === r) e.push(n);else if (Array.isArray(n) && n.length) {
              var o = s.apply(null, n);
              o && e.push(o);
            } else if ("object" === r) for (var a in n) i.call(n, a) && n[a] && e.push(a);
          }
        }
        return e.join(" ");
      }
      e.exports ? (s["default"] = s, e.exports = s) : void 0 === (n = function () {
        return s;
      }.apply(t, [])) || (e.exports = n);
    }();
  }, function (e, t, i) {
    "use strict";

    var n = function n(e) {
      return function (e) {
        return !!e && "object" == _typeof(e);
      }(e) && !function (e) {
        var t = Object.prototype.toString.call(e);
        return "[object RegExp]" === t || "[object Date]" === t || function (e) {
          return e.$$typeof === s;
        }(e);
      }(e);
    };
    var s = "function" == typeof Symbol && Symbol["for"] ? Symbol["for"]("react.element") : 60103;
    function r(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e) ? c((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
      var i;
    }
    function o(e, t, i) {
      return e.concat(t).map(function (e) {
        return r(e, i);
      });
    }
    function a(e) {
      return Object.keys(e).concat(function (e) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (t) {
          return e.propertyIsEnumerable(t);
        }) : [];
      }(e));
    }
    function l(e, t, i) {
      var n = {};
      return i.isMergeableObject(e) && a(e).forEach(function (t) {
        n[t] = r(e[t], i);
      }), a(t).forEach(function (s) {
        (function (e, t) {
          try {
            return t in e && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
          } catch (e) {
            return !1;
          }
        })(e, s) || (i.isMergeableObject(t[s]) && e[s] ? n[s] = function (e, t) {
          if (!t.customMerge) return c;
          var i = t.customMerge(e);
          return "function" == typeof i ? i : c;
        }(s, i)(e[s], t[s], i) : n[s] = r(t[s], i));
      }), n;
    }
    function c(e, t, i) {
      (i = i || {}).arrayMerge = i.arrayMerge || o, i.isMergeableObject = i.isMergeableObject || n, i.cloneUnlessOtherwiseSpecified = r;
      var s = Array.isArray(t);
      return s === Array.isArray(e) ? s ? i.arrayMerge(e, t, i) : l(e, t, i) : r(t, i);
    }
    c.all = function (e, t) {
      if (!Array.isArray(e)) throw new Error("first argument should be an array");
      return e.reduce(function (e, i) {
        return c(e, i, t);
      }, {});
    };
    var h = c;
    e.exports = h;
  }, function (e, t, i) {
    "use strict";

    (function (e, n) {
      var s,
        r = i(4);
      s = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : n;
      var o = Object(r.a)(s);
      t.a = o;
    }).call(this, i(7), i(8)(e));
  }, function (e, t, i) {
    /*!
     * Fuse.js v3.4.2 - Lightweight fuzzy-search (http://fusejs.io)
     * 
     * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
     * All Rights Reserved. Apache Software License 2.0
     * 
     * http://www.apache.org/licenses/LICENSE-2.0
     */
    var n;
    n = function n() {
      return function (e) {
        var t = {};
        function i(n) {
          if (t[n]) return t[n].exports;
          var s = t[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
        }
        return i.m = e, i.c = t, i.d = function (e, t, n) {
          i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
          });
        }, i.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          });
        }, i.t = function (e, t) {
          if (1 & t && (e = i(e)), 8 & t) return e;
          if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
          var n = Object.create(null);
          if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
          }), 2 & t && "string" != typeof e) for (var s in e) i.d(n, s, function (t) {
            return e[t];
          }.bind(null, s));
          return n;
        }, i.n = function (e) {
          var t = e && e.__esModule ? function () {
            return e["default"];
          } : function () {
            return e;
          };
          return i.d(t, "a", t), t;
        }, i.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, i.p = "", i(i.s = "./src/index.js");
      }({
        "./src/bitap/bitap_matched_indices.js":
        /*!********************************************!*\
          !*** ./src/bitap/bitap_matched_indices.js ***!
          \********************************************/
        /*! no static exports found */
        function srcBitapBitap_matched_indicesJs(e, t) {
          e.exports = function () {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = [], n = -1, s = -1, r = 0, o = e.length; r < o; r += 1) {
              var a = e[r];
              a && -1 === n ? n = r : a || -1 === n || ((s = r - 1) - n + 1 >= t && i.push([n, s]), n = -1);
            }
            return e[r - 1] && r - n >= t && i.push([n, r - 1]), i;
          };
        },
        "./src/bitap/bitap_pattern_alphabet.js":
        /*!*********************************************!*\
          !*** ./src/bitap/bitap_pattern_alphabet.js ***!
          \*********************************************/
        /*! no static exports found */
        function srcBitapBitap_pattern_alphabetJs(e, t) {
          e.exports = function (e) {
            for (var t = {}, i = e.length, n = 0; n < i; n += 1) t[e.charAt(n)] = 0;
            for (var s = 0; s < i; s += 1) t[e.charAt(s)] |= 1 << i - s - 1;
            return t;
          };
        },
        "./src/bitap/bitap_regex_search.js":
        /*!*****************************************!*\
          !*** ./src/bitap/bitap_regex_search.js ***!
          \*****************************************/
        /*! no static exports found */
        function srcBitapBitap_regex_searchJs(e, t) {
          var i = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
          e.exports = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
              s = new RegExp(t.replace(i, "\\$&").replace(n, "|")),
              r = e.match(s),
              o = !!r,
              a = [];
            if (o) for (var l = 0, c = r.length; l < c; l += 1) {
              var h = r[l];
              a.push([e.indexOf(h), h.length - 1]);
            }
            return {
              score: o ? .5 : 1,
              isMatch: o,
              matchedIndices: a
            };
          };
        },
        "./src/bitap/bitap_score.js":
        /*!**********************************!*\
          !*** ./src/bitap/bitap_score.js ***!
          \**********************************/
        /*! no static exports found */
        function srcBitapBitap_scoreJs(e, t) {
          e.exports = function (e, t) {
            var i = t.errors,
              n = void 0 === i ? 0 : i,
              s = t.currentLocation,
              r = void 0 === s ? 0 : s,
              o = t.expectedLocation,
              a = void 0 === o ? 0 : o,
              l = t.distance,
              c = void 0 === l ? 100 : l,
              h = n / e.length,
              u = Math.abs(a - r);
            return c ? h + u / c : u ? 1 : h;
          };
        },
        "./src/bitap/bitap_search.js":
        /*!***********************************!*\
          !*** ./src/bitap/bitap_search.js ***!
          \***********************************/
        /*! no static exports found */
        function srcBitapBitap_searchJs(e, t, i) {
          var n = i( /*! ./bitap_score */"./src/bitap/bitap_score.js"),
            s = i( /*! ./bitap_matched_indices */"./src/bitap/bitap_matched_indices.js");
          e.exports = function (e, t, i, r) {
            for (var o = r.location, a = void 0 === o ? 0 : o, l = r.distance, c = void 0 === l ? 100 : l, h = r.threshold, u = void 0 === h ? .6 : h, d = r.findAllMatches, p = void 0 !== d && d, f = r.minMatchCharLength, m = void 0 === f ? 1 : f, v = a, g = e.length, _ = u, b = e.indexOf(t, v), y = t.length, E = [], S = 0; S < g; S += 1) E[S] = 0;
            if (-1 !== b) {
              var I = n(t, {
                errors: 0,
                currentLocation: b,
                expectedLocation: v,
                distance: c
              });
              if (_ = Math.min(I, _), -1 !== (b = e.lastIndexOf(t, v + y))) {
                var w = n(t, {
                  errors: 0,
                  currentLocation: b,
                  expectedLocation: v,
                  distance: c
                });
                _ = Math.min(w, _);
              }
            }
            b = -1;
            for (var C = [], O = 1, A = y + g, x = 1 << y - 1, T = 0; T < y; T += 1) {
              for (var L = 0, k = A; L < k;) n(t, {
                errors: T,
                currentLocation: v + k,
                expectedLocation: v,
                distance: c
              }) <= _ ? L = k : A = k, k = Math.floor((A - L) / 2 + L);
              A = k;
              var D = Math.max(1, v - k + 1),
                P = p ? g : Math.min(v + k, g) + y,
                F = Array(P + 2);
              F[P + 1] = (1 << T) - 1;
              for (var j = P; j >= D; j -= 1) {
                var M = j - 1,
                  N = i[e.charAt(M)];
                if (N && (E[M] = 1), F[j] = (F[j + 1] << 1 | 1) & N, 0 !== T && (F[j] |= (C[j + 1] | C[j]) << 1 | 1 | C[j + 1]), F[j] & x && (O = n(t, {
                  errors: T,
                  currentLocation: M,
                  expectedLocation: v,
                  distance: c
                })) <= _) {
                  if (_ = O, (b = M) <= v) break;
                  D = Math.max(1, 2 * v - b);
                }
              }
              if (n(t, {
                errors: T + 1,
                currentLocation: v,
                expectedLocation: v,
                distance: c
              }) > _) break;
              C = F;
            }
            return {
              isMatch: b >= 0,
              score: 0 === O ? .001 : O,
              matchedIndices: s(E, m)
            };
          };
        },
        "./src/bitap/index.js":
        /*!****************************!*\
          !*** ./src/bitap/index.js ***!
          \****************************/
        /*! no static exports found */
        function srcBitapIndexJs(e, t, i) {
          function n(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
          }
          var s = i( /*! ./bitap_regex_search */"./src/bitap/bitap_regex_search.js"),
            r = i( /*! ./bitap_search */"./src/bitap/bitap_search.js"),
            o = i( /*! ./bitap_pattern_alphabet */"./src/bitap/bitap_pattern_alphabet.js"),
            a = function () {
              function e(t, i) {
                var n = i.location,
                  s = void 0 === n ? 0 : n,
                  r = i.distance,
                  a = void 0 === r ? 100 : r,
                  l = i.threshold,
                  c = void 0 === l ? .6 : l,
                  h = i.maxPatternLength,
                  u = void 0 === h ? 32 : h,
                  d = i.isCaseSensitive,
                  p = void 0 !== d && d,
                  f = i.tokenSeparator,
                  m = void 0 === f ? / +/g : f,
                  v = i.findAllMatches,
                  g = void 0 !== v && v,
                  _ = i.minMatchCharLength,
                  b = void 0 === _ ? 1 : _;
                !function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.options = {
                  location: s,
                  distance: a,
                  threshold: c,
                  maxPatternLength: u,
                  isCaseSensitive: p,
                  tokenSeparator: m,
                  findAllMatches: g,
                  minMatchCharLength: b
                }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= u && (this.patternAlphabet = o(this.pattern));
              }
              var t, i, a;
              return t = e, (i = [{
                key: "search",
                value: function value(e) {
                  if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return {
                    isMatch: !0,
                    score: 0,
                    matchedIndices: [[0, e.length - 1]]
                  };
                  var t = this.options,
                    i = t.maxPatternLength,
                    n = t.tokenSeparator;
                  if (this.pattern.length > i) return s(e, this.pattern, n);
                  var o = this.options,
                    a = o.location,
                    l = o.distance,
                    c = o.threshold,
                    h = o.findAllMatches,
                    u = o.minMatchCharLength;
                  return r(e, this.pattern, this.patternAlphabet, {
                    location: a,
                    distance: l,
                    threshold: c,
                    findAllMatches: h,
                    minMatchCharLength: u
                  });
                }
              }]) && n(t.prototype, i), a && n(t, a), e;
            }();
          e.exports = a;
        },
        "./src/helpers/deep_value.js":
        /*!***********************************!*\
          !*** ./src/helpers/deep_value.js ***!
          \***********************************/
        /*! no static exports found */
        function srcHelpersDeep_valueJs(e, t, i) {
          var n = i( /*! ./is_array */"./src/helpers/is_array.js");
          e.exports = function (e, t) {
            return function e(t, i, s) {
              if (i) {
                var r = i.indexOf("."),
                  o = i,
                  a = null;
                -1 !== r && (o = i.slice(0, r), a = i.slice(r + 1));
                var l = t[o];
                if (null != l) if (a || "string" != typeof l && "number" != typeof l) {
                  if (n(l)) for (var c = 0, h = l.length; c < h; c += 1) e(l[c], a, s);else a && e(l, a, s);
                } else s.push(l.toString());
              } else s.push(t);
              return s;
            }(e, t, []);
          };
        },
        "./src/helpers/is_array.js":
        /*!*********************************!*\
          !*** ./src/helpers/is_array.js ***!
          \*********************************/
        /*! no static exports found */
        function srcHelpersIs_arrayJs(e, t) {
          e.exports = function (e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
          };
        },
        "./src/index.js":
        /*!**********************!*\
          !*** ./src/index.js ***!
          \**********************/
        /*! no static exports found */
        function srcIndexJs(e, t, i) {
          function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
              return _typeof(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
            })(e);
          }
          function s(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
          }
          var r = i( /*! ./bitap */"./src/bitap/index.js"),
            o = i( /*! ./helpers/deep_value */"./src/helpers/deep_value.js"),
            a = i( /*! ./helpers/is_array */"./src/helpers/is_array.js"),
            l = function () {
              function e(t, i) {
                var n = i.location,
                  s = void 0 === n ? 0 : n,
                  r = i.distance,
                  a = void 0 === r ? 100 : r,
                  l = i.threshold,
                  c = void 0 === l ? .6 : l,
                  h = i.maxPatternLength,
                  u = void 0 === h ? 32 : h,
                  d = i.caseSensitive,
                  p = void 0 !== d && d,
                  f = i.tokenSeparator,
                  m = void 0 === f ? / +/g : f,
                  v = i.findAllMatches,
                  g = void 0 !== v && v,
                  _ = i.minMatchCharLength,
                  b = void 0 === _ ? 1 : _,
                  y = i.id,
                  E = void 0 === y ? null : y,
                  S = i.keys,
                  I = void 0 === S ? [] : S,
                  w = i.shouldSort,
                  C = void 0 === w || w,
                  O = i.getFn,
                  A = void 0 === O ? o : O,
                  x = i.sortFn,
                  T = void 0 === x ? function (e, t) {
                    return e.score - t.score;
                  } : x,
                  L = i.tokenize,
                  k = void 0 !== L && L,
                  D = i.matchAllTokens,
                  P = void 0 !== D && D,
                  F = i.includeMatches,
                  j = void 0 !== F && F,
                  M = i.includeScore,
                  N = void 0 !== M && M,
                  K = i.verbose,
                  R = void 0 !== K && K;
                !function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.options = {
                  location: s,
                  distance: a,
                  threshold: c,
                  maxPatternLength: u,
                  isCaseSensitive: p,
                  tokenSeparator: m,
                  findAllMatches: g,
                  minMatchCharLength: b,
                  id: E,
                  keys: I,
                  includeMatches: j,
                  includeScore: N,
                  shouldSort: C,
                  getFn: A,
                  sortFn: T,
                  verbose: R,
                  tokenize: k,
                  matchAllTokens: P
                }, this.setCollection(t);
              }
              var t, i, l;
              return t = e, (i = [{
                key: "setCollection",
                value: function value(e) {
                  return this.list = e, e;
                }
              }, {
                key: "search",
                value: function value(e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    limit: !1
                  };
                  this._log('---------\nSearch pattern: "'.concat(e, '"'));
                  var i = this._prepareSearchers(e),
                    n = i.tokenSearchers,
                    s = i.fullSearcher,
                    r = this._search(n, s),
                    o = r.weights,
                    a = r.results;
                  return this._computeScore(o, a), this.options.shouldSort && this._sort(a), t.limit && "number" == typeof t.limit && (a = a.slice(0, t.limit)), this._format(a);
                }
              }, {
                key: "_prepareSearchers",
                value: function value() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = [];
                  if (this.options.tokenize) for (var i = e.split(this.options.tokenSeparator), n = 0, s = i.length; n < s; n += 1) t.push(new r(i[n], this.options));
                  var o = new r(e, this.options);
                  return {
                    tokenSearchers: t,
                    fullSearcher: o
                  };
                }
              }, {
                key: "_search",
                value: function value() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    i = this.list,
                    n = {},
                    s = [];
                  if ("string" == typeof i[0]) {
                    for (var r = 0, o = i.length; r < o; r += 1) this._analyze({
                      key: "",
                      value: i[r],
                      record: r,
                      index: r
                    }, {
                      resultMap: n,
                      results: s,
                      tokenSearchers: e,
                      fullSearcher: t
                    });
                    return {
                      weights: null,
                      results: s
                    };
                  }
                  for (var a = {}, l = 0, c = i.length; l < c; l += 1) for (var h = i[l], u = 0, d = this.options.keys.length; u < d; u += 1) {
                    var p = this.options.keys[u];
                    if ("string" != typeof p) {
                      if (a[p.name] = {
                        weight: 1 - p.weight || 1
                      }, p.weight <= 0 || p.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                      p = p.name;
                    } else a[p] = {
                      weight: 1
                    };
                    this._analyze({
                      key: p,
                      value: this.options.getFn(h, p),
                      record: h,
                      index: l
                    }, {
                      resultMap: n,
                      results: s,
                      tokenSearchers: e,
                      fullSearcher: t
                    });
                  }
                  return {
                    weights: a,
                    results: s
                  };
                }
              }, {
                key: "_analyze",
                value: function value(e, t) {
                  var i = e.key,
                    n = e.arrayIndex,
                    s = void 0 === n ? -1 : n,
                    r = e.value,
                    o = e.record,
                    l = e.index,
                    c = t.tokenSearchers,
                    h = void 0 === c ? [] : c,
                    u = t.fullSearcher,
                    d = void 0 === u ? [] : u,
                    p = t.resultMap,
                    f = void 0 === p ? {} : p,
                    m = t.results,
                    v = void 0 === m ? [] : m;
                  if (null != r) {
                    var g = !1,
                      _ = -1,
                      b = 0;
                    if ("string" == typeof r) {
                      this._log("\nKey: ".concat("" === i ? "-" : i));
                      var y = d.search(r);
                      if (this._log('Full text: "'.concat(r, '", score: ').concat(y.score)), this.options.tokenize) {
                        for (var E = r.split(this.options.tokenSeparator), S = [], I = 0; I < h.length; I += 1) {
                          var w = h[I];
                          this._log('\nPattern: "'.concat(w.pattern, '"'));
                          for (var C = !1, O = 0; O < E.length; O += 1) {
                            var A = E[O],
                              x = w.search(A),
                              T = {};
                            x.isMatch ? (T[A] = x.score, g = !0, C = !0, S.push(x.score)) : (T[A] = 1, this.options.matchAllTokens || S.push(1)), this._log('Token: "'.concat(A, '", score: ').concat(T[A]));
                          }
                          C && (b += 1);
                        }
                        _ = S[0];
                        for (var L = S.length, k = 1; k < L; k += 1) _ += S[k];
                        _ /= L, this._log("Token score average:", _);
                      }
                      var D = y.score;
                      _ > -1 && (D = (D + _) / 2), this._log("Score average:", D);
                      var P = !this.options.tokenize || !this.options.matchAllTokens || b >= h.length;
                      if (this._log("\nCheck Matches: ".concat(P)), (g || y.isMatch) && P) {
                        var F = f[l];
                        F ? F.output.push({
                          key: i,
                          arrayIndex: s,
                          value: r,
                          score: D,
                          matchedIndices: y.matchedIndices
                        }) : (f[l] = {
                          item: o,
                          output: [{
                            key: i,
                            arrayIndex: s,
                            value: r,
                            score: D,
                            matchedIndices: y.matchedIndices
                          }]
                        }, v.push(f[l]));
                      }
                    } else if (a(r)) for (var j = 0, M = r.length; j < M; j += 1) this._analyze({
                      key: i,
                      arrayIndex: j,
                      value: r[j],
                      record: o,
                      index: l
                    }, {
                      resultMap: f,
                      results: v,
                      tokenSearchers: h,
                      fullSearcher: d
                    });
                  }
                }
              }, {
                key: "_computeScore",
                value: function value(e, t) {
                  this._log("\n\nComputing score:\n");
                  for (var i = 0, n = t.length; i < n; i += 1) {
                    for (var s = t[i].output, r = s.length, o = 1, a = 1, l = 0; l < r; l += 1) {
                      var c = e ? e[s[l].key].weight : 1,
                        h = (1 === c ? s[l].score : s[l].score || .001) * c;
                      1 !== c ? a = Math.min(a, h) : (s[l].nScore = h, o *= h);
                    }
                    t[i].score = 1 === a ? o : a, this._log(t[i]);
                  }
                }
              }, {
                key: "_sort",
                value: function value(e) {
                  this._log("\n\nSorting...."), e.sort(this.options.sortFn);
                }
              }, {
                key: "_format",
                value: function value(e) {
                  var t = [];
                  if (this.options.verbose) {
                    var i = [];
                    this._log("\n\nOutput:\n\n", JSON.stringify(e, function (e, t) {
                      if ("object" === n(t) && null !== t) {
                        if (-1 !== i.indexOf(t)) return;
                        i.push(t);
                      }
                      return t;
                    })), i = null;
                  }
                  var s = [];
                  this.options.includeMatches && s.push(function (e, t) {
                    var i = e.output;
                    t.matches = [];
                    for (var n = 0, s = i.length; n < s; n += 1) {
                      var r = i[n];
                      if (0 !== r.matchedIndices.length) {
                        var o = {
                          indices: r.matchedIndices,
                          value: r.value
                        };
                        r.key && (o.key = r.key), r.hasOwnProperty("arrayIndex") && r.arrayIndex > -1 && (o.arrayIndex = r.arrayIndex), t.matches.push(o);
                      }
                    }
                  }), this.options.includeScore && s.push(function (e, t) {
                    t.score = e.score;
                  });
                  for (var r = 0, o = e.length; r < o; r += 1) {
                    var a = e[r];
                    if (this.options.id && (a.item = this.options.getFn(a.item, this.options.id)[0]), s.length) {
                      for (var l = {
                          item: a.item
                        }, c = 0, h = s.length; c < h; c += 1) s[c](a, l);
                      t.push(l);
                    } else t.push(a.item);
                  }
                  return t;
                }
              }, {
                key: "_log",
                value: function value() {
                  var e;
                  this.options.verbose && (e = console).log.apply(e, arguments);
                }
              }]) && s(t.prototype, i), l && s(t, l), e;
            }();
          e.exports = l;
        }
      });
    }, e.exports = n();
  }, function (e, t, i) {
    "use strict";

    function n(e) {
      var t,
        i = e.Symbol;
      return "function" == typeof i ? i.observable ? t = i.observable : (t = i("observable"), i.observable = t) : t = "@@observable", t;
    }
    i.d(t, "a", function () {
      return n;
    });
  }, function (e, t, i) {
    e.exports = i(9);
  }, function (e, t) {
    window.delegateEvent = function () {
      var e, t;
      function i(t) {
        var i = e.get(t.type);
        i && i.forEach(function (e) {
          return e(t);
        });
      }
      return void 0 === e && (e = new Map()), void 0 === t && (t = []), {
        add: function add(n, s) {
          e.has(n) ? e.get(n).push(s) : e.set(n, [s]), -1 === t.indexOf(n) && (document.documentElement.addEventListener(n, i, !0), t.push(n));
        },
        remove: function remove(i, n) {
          e.get(i) && (e.set(i, e.get(i).filter(function (e) {
            return e !== n;
          })), e.get(i).length || t.splice(t.indexOf(i), 1));
        }
      };
    }();
  }, function (e, t) {
    var i;
    i = function () {
      return this;
    }();
    try {
      i = i || new Function("return this")();
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (i = window);
    }
    e.exports = i;
  }, function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []), Object.defineProperty(t, "loaded", {
          enumerable: !0,
          get: function get() {
            return t.l;
          }
        }), Object.defineProperty(t, "id", {
          enumerable: !0,
          get: function get() {
            return t.i;
          }
        }), Object.defineProperty(t, "exports", {
          enumerable: !0
        }), t.webpackPolyfill = 1;
      }
      return t;
    };
  }, function (e, t, i) {
    "use strict";

    i.r(t);
    var n = i(3),
      s = i.n(n),
      r = i(1),
      o = i.n(r),
      a = (i(6), i(2)),
      l = function l() {
        return Math.random().toString(36).substring(7).split("").join(".");
      },
      c = {
        INIT: "@@redux/INIT" + l(),
        REPLACE: "@@redux/REPLACE" + l(),
        PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
          return "@@redux/PROBE_UNKNOWN_ACTION" + l();
        }
      };
    function h(e) {
      if ("object" != _typeof(e) || null === e) return !1;
      for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    function u(e, t, i) {
      var n;
      if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
      if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
        if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
        return i(u)(e, t);
      }
      if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
      var s = e,
        r = t,
        o = [],
        l = o,
        d = !1;
      function p() {
        l === o && (l = o.slice());
      }
      function f() {
        if (d) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        return r;
      }
      function m(e) {
        if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
        if (d) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
        var t = !0;
        return p(), l.push(e), function () {
          if (t) {
            if (d) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            t = !1, p();
            var i = l.indexOf(e);
            l.splice(i, 1);
          }
        };
      }
      function v(e) {
        if (!h(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (d) throw new Error("Reducers may not dispatch actions.");
        try {
          d = !0, r = s(r, e);
        } finally {
          d = !1;
        }
        for (var t = o = l, i = 0; i < t.length; i++) {
          (0, t[i])();
        }
        return e;
      }
      return v({
        type: c.INIT
      }), (n = {
        dispatch: v,
        subscribe: m,
        getState: f,
        replaceReducer: function replaceReducer(e) {
          if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
          s = e, v({
            type: c.REPLACE
          });
        }
      })[a.a] = function () {
        var e,
          t = m;
        return (e = {
          subscribe: function subscribe(e) {
            if ("object" != _typeof(e) || null === e) throw new TypeError("Expected the observer to be an object.");
            function i() {
              e.next && e.next(f());
            }
            return i(), {
              unsubscribe: t(i)
            };
          }
        })[a.a] = function () {
          return this;
        }, e;
      }, n;
    }
    function d(e, t) {
      var i = t && t.type;
      return "Given " + (i && 'action "' + String(i) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
    }
    var p = [];
    var f = [];
    var m = [];
    var v,
      g = {
        loading: !1
      },
      _ = function _(e, t) {
        switch (void 0 === e && (e = g), t.type) {
          case "SET_IS_LOADING":
            return {
              loading: t.isLoading
            };
          default:
            return e;
        }
      },
      b = function b(e) {
        for (var t, i, n = "", s = 0; s < e; s++) {
          n += (t = 0, i = 36, Math.floor(Math.random() * (i - t) + t)).toString(36);
        }
        return n;
      },
      y = function y(e, t) {
        var i = e.id || e.name && e.name + "-" + b(2) || b(4);
        return i = t + "-" + (i = i.replace(/(:|\.|\[|\]|,)/g, ""));
      },
      E = function E(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      S = function S(e, t) {
        return null != t && E(t) === e;
      },
      I = function I(e) {
        return e instanceof Element;
      },
      w = function w(e, t) {
        for (var i = e; i;) {
          if (i.hasAttribute(t)) return i;
          i = i.parentElement;
        }
        return null;
      },
      C = function C(e) {
        return S("String", e) ? e.replace(/&/g, "&amp;").replace(/>/g, "&rt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") : e;
      },
      O = (v = document.createElement("div"), function (e) {
        var t = e.trim();
        v.innerHTML = t;
        for (var i = v.children[0]; v.firstChild;) v.removeChild(v.firstChild);
        return i;
      }),
      A = function A(e, t) {
        return e.score - t.score;
      },
      x = function e(t, i) {
        var n = i.indexOf(".");
        return n > -1 ? e(t[i.substring(0, n)], i.substr(n + 1)) : t[i];
      },
      T = function T(e) {
        return JSON.parse(JSON.stringify(e));
      },
      L = function L(e, t) {
        var i = Object.keys(e).sort(),
          n = Object.keys(t).sort();
        return i.filter(function (e) {
          return n.indexOf(e) < 0;
        });
      },
      k = function (e) {
        for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
          var s = t[n];
          0, "function" == typeof e[s] && (i[s] = e[s]);
        }
        var r,
          o = Object.keys(i);
        try {
          !function (e) {
            Object.keys(e).forEach(function (t) {
              var i = e[t];
              if (void 0 === i(void 0, {
                type: c.INIT
              })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
              if (void 0 === i(void 0, {
                type: c.PROBE_UNKNOWN_ACTION()
              })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + c.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
            });
          }(i);
        } catch (e) {
          r = e;
        }
        return function (e, t) {
          if (void 0 === e && (e = {}), r) throw r;
          for (var n = !1, s = {}, a = 0; a < o.length; a++) {
            var l = o[a],
              c = i[l],
              h = e[l],
              u = c(h, t);
            if (void 0 === u) {
              var p = d(l, t);
              throw new Error(p);
            }
            s[l] = u, n = n || u !== h;
          }
          return n ? s : e;
        };
      }({
        items: function items(e, t) {
          switch (void 0 === e && (e = p), t.type) {
            case "ADD_ITEM":
              return [].concat(e, [{
                id: t.id,
                choiceId: t.choiceId,
                groupId: t.groupId,
                value: t.value,
                label: t.label,
                active: !0,
                highlighted: !1,
                customProperties: t.customProperties,
                placeholder: t.placeholder || !1,
                keyCode: null
              }]).map(function (e) {
                var t = e;
                return t.highlighted = !1, t;
              });
            case "REMOVE_ITEM":
              return e.map(function (e) {
                var i = e;
                return i.id === t.id && (i.active = !1), i;
              });
            case "HIGHLIGHT_ITEM":
              return e.map(function (e) {
                var i = e;
                return i.id === t.id && (i.highlighted = t.highlighted), i;
              });
            default:
              return e;
          }
        },
        groups: function groups(e, t) {
          switch (void 0 === e && (e = f), t.type) {
            case "ADD_GROUP":
              return [].concat(e, [{
                id: t.id,
                value: t.value,
                active: t.active,
                disabled: t.disabled
              }]);
            case "CLEAR_CHOICES":
              return [];
            default:
              return e;
          }
        },
        choices: function choices(e, t) {
          switch (void 0 === e && (e = m), t.type) {
            case "ADD_CHOICE":
              return [].concat(e, [{
                id: t.id,
                elementId: t.elementId,
                groupId: t.groupId,
                value: t.value,
                label: t.label || t.value,
                disabled: t.disabled || !1,
                selected: !1,
                active: !0,
                score: 9999,
                customProperties: t.customProperties,
                placeholder: t.placeholder || !1,
                keyCode: null
              }]);
            case "ADD_ITEM":
              return t.activateOptions ? e.map(function (e) {
                var i = e;
                return i.active = t.active, i;
              }) : t.choiceId > -1 ? e.map(function (e) {
                var i = e;
                return i.id === parseInt(t.choiceId, 10) && (i.selected = !0), i;
              }) : e;
            case "REMOVE_ITEM":
              return t.choiceId > -1 ? e.map(function (e) {
                var i = e;
                return i.id === parseInt(t.choiceId, 10) && (i.selected = !1), i;
              }) : e;
            case "FILTER_CHOICES":
              return e.map(function (e) {
                var i = e;
                return i.active = t.results.some(function (e) {
                  var t = e.item,
                    n = e.score;
                  return t.id === i.id && (i.score = n, !0);
                }), i;
              });
            case "ACTIVATE_CHOICES":
              return e.map(function (e) {
                var i = e;
                return i.active = t.active, i;
              });
            case "CLEAR_CHOICES":
              return m;
            default:
              return e;
          }
        },
        general: _
      }),
      D = function D(e, t) {
        var i = e;
        if ("CLEAR_ALL" === t.type) i = void 0;else if ("RESET_TO" === t.type) return T(t.state);
        return k(i, t);
      };
    function P(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    var F = function () {
        function e() {
          this._store = u(D, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        }
        var t,
          i,
          n,
          s = e.prototype;
        return s.subscribe = function (e) {
          this._store.subscribe(e);
        }, s.dispatch = function (e) {
          this._store.dispatch(e);
        }, s.isLoading = function () {
          return this.state.general.loading;
        }, s.getChoiceById = function (e) {
          return !!e && this.activeChoices.find(function (t) {
            return t.id === parseInt(e, 10);
          });
        }, s.getGroupById = function (e) {
          return this.groups.find(function (t) {
            return t.id === parseInt(e, 10);
          });
        }, t = e, (i = [{
          key: "state",
          get: function get() {
            return this._store.getState();
          }
        }, {
          key: "items",
          get: function get() {
            return this.state.items;
          }
        }, {
          key: "activeItems",
          get: function get() {
            return this.items.filter(function (e) {
              return !0 === e.active;
            });
          }
        }, {
          key: "highlightedActiveItems",
          get: function get() {
            return this.items.filter(function (e) {
              return e.active && e.highlighted;
            });
          }
        }, {
          key: "choices",
          get: function get() {
            return this.state.choices;
          }
        }, {
          key: "activeChoices",
          get: function get() {
            return this.choices.filter(function (e) {
              return !0 === e.active;
            });
          }
        }, {
          key: "selectableChoices",
          get: function get() {
            return this.choices.filter(function (e) {
              return !0 !== e.disabled;
            });
          }
        }, {
          key: "searchableChoices",
          get: function get() {
            return this.selectableChoices.filter(function (e) {
              return !0 !== e.placeholder;
            });
          }
        }, {
          key: "placeholderChoice",
          get: function get() {
            return [].concat(this.choices).reverse().find(function (e) {
              return !0 === e.placeholder;
            });
          }
        }, {
          key: "groups",
          get: function get() {
            return this.state.groups;
          }
        }, {
          key: "activeGroups",
          get: function get() {
            var e = this.groups,
              t = this.choices;
            return e.filter(function (e) {
              var i = !0 === e.active && !1 === e.disabled,
                n = t.some(function (e) {
                  return !0 === e.active && !1 === e.disabled;
                });
              return i && n;
            }, []);
          }
        }]) && P(t.prototype, i), n && P(t, n), e;
      }(),
      j = function () {
        function e(e) {
          var t = e.element,
            i = e.type,
            n = e.classNames;
          Object.assign(this, {
            element: t,
            type: i,
            classNames: n
          }), this.isActive = !1;
        }
        var t = e.prototype;
        return t.distanceFromTopWindow = function () {
          return this.dimensions = this.element.getBoundingClientRect(), this.position = Math.ceil(this.dimensions.top + window.pageYOffset + this.element.offsetHeight), this.position;
        }, t.getChild = function (e) {
          return this.element.querySelector(e);
        }, t.show = function () {
          return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this;
        }, t.hide = function () {
          return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this;
        }, e;
      }(),
      M = function () {
        function e(e) {
          var t = e.element,
            i = e.type,
            n = e.classNames,
            s = e.position;
          Object.assign(this, {
            element: t,
            classNames: n,
            type: i,
            position: s
          }), this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
        }
        var t = e.prototype;
        return t.addEventListeners = function () {
          this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
        }, t.removeEventListeners = function () {
          this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
        }, t.shouldFlip = function (e, t) {
          var i, n;
          if (void 0 === t && (i = document.body, n = document.documentElement, t = Math.max(i.scrollHeight, i.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)), void 0 === e) return !1;
          var s = !1;
          return "auto" === this.position ? s = e >= t : "top" === this.position && (s = !0), s;
        }, t.setActiveDescendant = function (e) {
          this.element.setAttribute("aria-activedescendant", e);
        }, t.removeActiveDescendant = function () {
          this.element.removeAttribute("aria-activedescendant");
        }, t.open = function (e) {
          this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0);
        }, t.close = function () {
          this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1);
        }, t.focus = function () {
          this.isFocussed || this.element.focus();
        }, t.addFocusState = function () {
          this.element.classList.add(this.classNames.focusState);
        }, t.removeFocusState = function () {
          this.element.classList.remove(this.classNames.focusState);
        }, t.enable = function () {
          this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), "select-one" === this.type && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1;
        }, t.disable = function () {
          this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), "select-one" === this.type && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0;
        }, t.wrap = function (e) {
          !function (e, t) {
            void 0 === t && (t = document.createElement("div")), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.appendChild(e);
          }(e, this.element);
        }, t.unwrap = function (e) {
          this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element);
        }, t.addLoadingState = function () {
          this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0;
        }, t.removeLoadingState = function () {
          this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1;
        }, t._onFocus = function () {
          this.isFocussed = !0;
        }, t._onBlur = function () {
          this.isFocussed = !1;
        }, e;
      }();
    function N(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    var K = function () {
        function e(e) {
          var t = e.element,
            i = e.type,
            n = e.classNames,
            s = e.placeholderValue;
          Object.assign(this, {
            element: t,
            type: i,
            classNames: n,
            placeholderValue: s
          }), this.element = t, this.classNames = n, this.isFocussed = this.element === document.activeElement, this.isDisabled = !1, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
        }
        var t,
          i,
          n,
          s = e.prototype;
        return s.addEventListeners = function () {
          this.element.addEventListener("input", this._onInput), this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur), this.element.form && this.element.form.addEventListener("reset", this._onFormReset);
        }, s.removeEventListeners = function () {
          this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur), this.element.form && this.element.form.removeEventListener("reset", this._onFormReset);
        }, s.enable = function () {
          this.element.removeAttribute("disabled"), this.isDisabled = !1;
        }, s.disable = function () {
          this.element.setAttribute("disabled", ""), this.isDisabled = !0;
        }, s.focus = function () {
          this.isFocussed || this.element.focus();
        }, s.blur = function () {
          this.isFocussed && this.element.blur();
        }, s.clear = function (e) {
          return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this;
        }, s.setWidth = function (e) {
          var t = this,
            i = function i(e) {
              t.element.style.width = e;
            };
          if (this._placeholderValue) {
            var n = this.element.value.length >= this._placeholderValue.length / 1.25;
            (this.element.value && n || e) && this.calcWidth(i);
          } else this.calcWidth(i);
        }, s.calcWidth = function (e) {
          return function (e, t) {
            var i = e.value || e.placeholder,
              n = e.offsetWidth;
            if (i) {
              var s = O("<span>" + C(i) + "</span>");
              if (s.style.position = "absolute", s.style.padding = "0", s.style.top = "-9999px", s.style.left = "-9999px", s.style.width = "auto", s.style.whiteSpace = "pre", document.body.contains(e) && window.getComputedStyle) {
                var r = window.getComputedStyle(e);
                r && (s.style.fontSize = r.fontSize, s.style.fontFamily = r.fontFamily, s.style.fontWeight = r.fontWeight, s.style.fontStyle = r.fontStyle, s.style.letterSpacing = r.letterSpacing, s.style.textTransform = r.textTransform, s.style.paddingLeft = r.paddingLeft, s.style.paddingRight = r.paddingRight);
              }
              document.body.appendChild(s), requestAnimationFrame(function () {
                i && s.offsetWidth !== e.offsetWidth && (n = s.offsetWidth + 4), document.body.removeChild(s), t.call(void 0, n + "px");
              });
            } else t.call(void 0, n + "px");
          }(this.element, e);
        }, s.setActiveDescendant = function (e) {
          this.element.setAttribute("aria-activedescendant", e);
        }, s.removeActiveDescendant = function () {
          this.element.removeAttribute("aria-activedescendant");
        }, s._onInput = function () {
          "select-one" !== this.type && this.setWidth();
        }, s._onPaste = function (e) {
          e.target === this.element && this.preventPaste && e.preventDefault();
        }, s._onFocus = function () {
          this.isFocussed = !0;
        }, s._onBlur = function () {
          this.isFocussed = !1;
        }, t = e, (i = [{
          key: "placeholder",
          set: function set(e) {
            this.element.placeholder = e;
          }
        }, {
          key: "value",
          set: function set(e) {
            this.element.value = e;
          },
          get: function get() {
            return C(this.element.value);
          }
        }]) && N(t.prototype, i), n && N(t, n), e;
      }(),
      R = {
        items: [],
        choices: [],
        silent: !1,
        renderChoiceLimit: -1,
        maxItemCount: -1,
        addItems: !0,
        addItemFilterFn: null,
        removeItems: !0,
        removeItemButton: !1,
        editItems: !1,
        duplicateItemsAllowed: !0,
        delimiter: ",",
        paste: !0,
        searchEnabled: !0,
        searchChoices: !0,
        searchFloor: 1,
        searchResultLimit: 4,
        searchFields: ["label", "value"],
        position: "auto",
        resetScrollPosition: !0,
        shouldSort: !0,
        shouldSortItems: !1,
        sortFn: function sortFn(e, t) {
          var i = ("" + (e.label || e.value)).toLowerCase(),
            n = ("" + (t.label || t.value)).toLowerCase();
          return i < n ? -1 : i > n ? 1 : 0;
        },
        placeholder: !0,
        placeholderValue: null,
        searchPlaceholderValue: null,
        prependValue: null,
        appendValue: null,
        renderSelectedChoices: "auto",
        loadingText: "Loading...",
        noResultsText: "No results found",
        noChoicesText: "No choices to choose from",
        itemSelectText: "Press to select",
        uniqueItemText: "Only unique values can be added",
        customAddItemText: "Only values matching specific conditions can be added",
        addItemText: function addItemText(e) {
          return 'Press Enter to add <b>"' + C(e) + '"</b>';
        },
        maxItemText: function maxItemText(e) {
          return "Only " + e + " values can be added";
        },
        itemComparer: function itemComparer(e, t) {
          return e === t;
        },
        fuseOptions: {
          includeScore: !0
        },
        callbackOnInit: null,
        callbackOnCreateTemplates: null,
        classNames: {
          containerOuter: "choices",
          containerInner: "choices__inner",
          input: "choices__input",
          inputCloned: "choices__input--cloned",
          list: "choices__list",
          listItems: "choices__list--multiple",
          listSingle: "choices__list--single",
          listDropdown: "choices__list--dropdown",
          item: "choices__item",
          itemSelectable: "choices__item--selectable",
          itemDisabled: "choices__item--disabled",
          itemChoice: "choices__item--choice",
          placeholder: "choices__placeholder",
          group: "choices__group",
          groupHeading: "choices__heading",
          button: "choices__button",
          activeState: "is-active",
          focusState: "is-focused",
          openState: "is-open",
          disabledState: "is-disabled",
          highlightedState: "is-highlighted",
          hiddenState: "is-hidden",
          flippedState: "is-flipped",
          loadingState: "is-loading",
          noResults: "has-no-results",
          noChoices: "has-no-choices"
        }
      },
      B = "showDropdown",
      V = "hideDropdown",
      H = "change",
      G = "choice",
      q = "search",
      W = "addItem",
      U = "removeItem",
      z = "highlightItem",
      X = "highlightChoice",
      Y = "ADD_CHOICE",
      $ = "FILTER_CHOICES",
      J = "ACTIVATE_CHOICES",
      Z = "CLEAR_CHOICES",
      Q = "ADD_GROUP",
      ee = "ADD_ITEM",
      te = "REMOVE_ITEM",
      ie = "HIGHLIGHT_ITEM",
      ne = 46,
      se = 8,
      re = 13,
      oe = 65,
      ae = 27,
      le = 38,
      ce = 40,
      he = 33,
      ue = 34,
      de = function () {
        function e(e) {
          var t = e.element;
          Object.assign(this, {
            element: t
          }), this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight, this.hasChildren = !!this.element.children;
        }
        var t = e.prototype;
        return t.clear = function () {
          this.element.innerHTML = "";
        }, t.append = function (e) {
          this.element.appendChild(e);
        }, t.getChild = function (e) {
          return this.element.querySelector(e);
        }, t.scrollToTop = function () {
          this.element.scrollTop = 0;
        }, t.scrollToChoice = function (e, t) {
          var i = this;
          if (e) {
            var n = this.element.offsetHeight,
              s = e.offsetHeight,
              r = e.offsetTop + s,
              o = this.element.scrollTop + n,
              a = t > 0 ? this.element.scrollTop + r - o : e.offsetTop;
            requestAnimationFrame(function (e) {
              i._animateScroll(e, a, t);
            });
          }
        }, t._scrollDown = function (e, t, i) {
          var n = (i - e) / t,
            s = n > 1 ? n : 1;
          this.element.scrollTop = e + s;
        }, t._scrollUp = function (e, t, i) {
          var n = (e - i) / t,
            s = n > 1 ? n : 1;
          this.element.scrollTop = e - s;
        }, t._animateScroll = function (e, t, i) {
          var n = this,
            s = this.element.scrollTop,
            r = !1;
          i > 0 ? (this._scrollDown(s, 4, t), s < t && (r = !0)) : (this._scrollUp(s, 4, t), s > t && (r = !0)), r && requestAnimationFrame(function () {
            n._animateScroll(e, t, i);
          });
        }, e;
      }();
    function pe(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    var fe = function () {
      function e(e) {
        var t = e.element,
          i = e.classNames;
        if (Object.assign(this, {
          element: t,
          classNames: i
        }), !I(t)) throw new TypeError("Invalid element passed");
        this.isDisabled = !1;
      }
      var t,
        i,
        n,
        s = e.prototype;
      return s.conceal = function () {
        this.element.classList.add(this.classNames.input), this.element.classList.add(this.classNames.hiddenState), this.element.tabIndex = "-1";
        var e = this.element.getAttribute("style");
        e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("aria-hidden", "true"), this.element.setAttribute("data-choice", "active");
      }, s.reveal = function () {
        this.element.classList.remove(this.classNames.input), this.element.classList.remove(this.classNames.hiddenState), this.element.removeAttribute("tabindex");
        var e = this.element.getAttribute("data-choice-orig-style");
        e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("aria-hidden"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value;
      }, s.enable = function () {
        this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1;
      }, s.disable = function () {
        this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0;
      }, s.triggerEvent = function (e, t) {
        !function (e, t, i) {
          void 0 === i && (i = null);
          var n = new CustomEvent(t, {
            detail: i,
            bubbles: !0,
            cancelable: !0
          });
          e.dispatchEvent(n);
        }(this.element, e, t);
      }, t = e, (i = [{
        key: "value",
        get: function get() {
          return this.element.value;
        },
        set: function set(e) {
          this.element.value = e;
        }
      }]) && pe(t.prototype, i), n && pe(t, n), e;
    }();
    function me(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    var ve = function (e) {
      var t, i, n, s, r;
      function o(t) {
        var i,
          n = t.element,
          s = t.classNames,
          r = t.delimiter;
        return (i = e.call(this, {
          element: n,
          classNames: s
        }) || this).delimiter = r, i;
      }
      return i = e, (t = o).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, n = o, (s = [{
        key: "value",
        set: function set(e) {
          var t = e.map(function (e) {
            return e.value;
          }).join(this.delimiter);
          this.element.setAttribute("value", t), this.element.value = t;
        },
        get: function get() {
          return this.element.value;
        }
      }]) && me(n.prototype, s), r && me(n, r), o;
    }(fe);
    function ge(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    var _e = function (e) {
        var t, i, n, s, r;
        function o(t) {
          var i,
            n = t.element,
            s = t.classNames,
            r = t.template;
          return (i = e.call(this, {
            element: n,
            classNames: s
          }) || this).template = r, i;
        }
        return i = e, (t = o).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, o.prototype.appendDocFragment = function (e) {
          this.element.innerHTML = "", this.element.appendChild(e);
        }, n = o, (s = [{
          key: "placeholderOption",
          get: function get() {
            return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
          }
        }, {
          key: "optionGroups",
          get: function get() {
            return Array.from(this.element.getElementsByTagName("OPTGROUP"));
          }
        }, {
          key: "options",
          get: function get() {
            return Array.from(this.element.options);
          },
          set: function set(e) {
            var t = this,
              i = document.createDocumentFragment();
            e.forEach(function (e) {
              return n = e, s = t.template(n), void i.appendChild(s);
              var n, s;
            }), this.appendDocFragment(i);
          }
        }]) && ge(n.prototype, s), r && ge(n, r), o;
      }(fe),
      be = i(0),
      ye = i.n(be),
      Ee = {
        containerOuter: function containerOuter(e, t, i, n, s, r) {
          var o = n ? 'tabindex="0"' : "",
            a = i ? 'role="listbox"' : "",
            l = "";
          return i && s && (a = 'role="combobox"', l = 'aria-autocomplete="list"'), O('\n      <div\n        class="' + e.containerOuter + '"\n        data-type="' + r + '"\n        ' + a + "\n        " + o + "\n        " + l + '\n        aria-haspopup="true"\n        aria-expanded="false"\n        dir="' + t + '"\n        >\n      </div>\n    ');
        },
        containerInner: function containerInner(e) {
          return O('\n      <div class="' + e.containerInner + '"></div>\n    ');
        },
        itemList: function itemList(e, t) {
          var i,
            n = ye()(e.list, ((i = {})[e.listSingle] = t, i[e.listItems] = !t, i));
          return O('\n      <div class="' + n + '"></div>\n    ');
        },
        placeholder: function placeholder(e, t) {
          return O('\n      <div class="' + e.placeholder + '">\n        ' + t + "\n      </div>\n    ");
        },
        item: function item(e, t, i) {
          var n,
            s,
            r = t.active ? 'aria-selected="true"' : "",
            o = t.disabled ? 'aria-disabled="true"' : "",
            a = ye()(e.item, ((n = {})[e.highlightedState] = t.highlighted, n[e.itemSelectable] = !t.highlighted, n[e.placeholder] = t.placeholder, n));
          return i ? (a = ye()(e.item, ((s = {})[e.highlightedState] = t.highlighted, s[e.itemSelectable] = !t.disabled, s[e.placeholder] = t.placeholder, s)), O('\n        <div\n          class="' + a + '"\n          data-item\n          data-id="' + t.id + '"\n          data-value="' + t.value + "\"\n          data-custom-properties='" + t.customProperties + "'\n          data-deletable\n          " + r + "\n          " + o + "\n          >\n          " + t.label + '\x3c!--\n       --\x3e<button\n            type="button"\n            class="' + e.button + '"\n            data-button\n            aria-label="Remove item: \'' + t.value + "'\"\n            >\n            Remove item\n          </button>\n        </div>\n      ")) : O('\n      <div\n        class="' + a + '"\n        data-item\n        data-id="' + t.id + '"\n        data-value="' + t.value + '"\n        ' + r + "\n        " + o + "\n        >\n        " + t.label + "\n      </div>\n    ");
        },
        choiceList: function choiceList(e, t) {
          var i = t ? "" : 'aria-multiselectable="true"';
          return O('\n      <div\n        class="' + e.list + '"\n        dir="ltr"\n        role="listbox"\n        ' + i + "\n        >\n      </div>\n    ");
        },
        choiceGroup: function choiceGroup(e, t) {
          var i,
            n = t.disabled ? 'aria-disabled="true"' : "",
            s = ye()(e.group, ((i = {})[e.itemDisabled] = t.disabled, i));
          return O('\n      <div\n        class="' + s + '"\n        data-group\n        data-id="' + t.id + '"\n        data-value="' + t.value + '"\n        role="group"\n        ' + n + '\n        >\n        <div class="' + e.groupHeading + '">' + t.value + "</div>\n      </div>\n    ");
        },
        choice: function choice(e, t, i) {
          var n,
            s = t.groupId > 0 ? 'role="treeitem"' : 'role="option"',
            r = ye()(e.item, e.itemChoice, ((n = {})[e.itemDisabled] = t.disabled, n[e.itemSelectable] = !t.disabled, n[e.placeholder] = t.placeholder, n));
          return O('\n      <div\n        class="' + r + '"\n        data-select-text="' + i + '"\n        data-choice\n        data-id="' + t.id + '"\n        data-value="' + t.value + '"\n        ' + (t.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable") + '\n        id="' + t.elementId + '"\n        ' + s + "\n        >\n        " + t.label + "\n      </div>\n    ");
        },
        input: function input(e, t) {
          var i = ye()(e.input, e.inputCloned);
          return O('\n      <input\n        type="text"\n        class="' + i + '"\n        autocomplete="off"\n        autocapitalize="off"\n        spellcheck="false"\n        role="textbox"\n        aria-autocomplete="list"\n        aria-label="' + t + '"\n        >\n    ');
        },
        dropdown: function dropdown(e) {
          var t = ye()(e.list, e.listDropdown);
          return O('\n      <div\n        class="' + t + '"\n        aria-expanded="false"\n        >\n      </div>\n    ');
        },
        notice: function notice(e, t, i) {
          var n;
          void 0 === i && (i = "");
          var s = ye()(e.item, e.itemChoice, ((n = {})[e.noResults] = "no-results" === i, n[e.noChoices] = "no-choices" === i, n));
          return O('\n      <div class="' + s + '">\n        ' + t + "\n      </div>\n    ");
        },
        option: function option(e) {
          return O('\n      <option value="' + e.value + '" ' + (e.active ? "selected" : "") + " " + (e.disabled ? "disabled" : "") + " " + (e.customProperties ? "data-custom-properties=" + e.customProperties : "") + ">" + e.label + "</option>\n    ");
        }
      },
      Se = function Se(e) {
        return void 0 === e && (e = !0), {
          type: J,
          active: e
        };
      },
      Ie = function Ie(e, t) {
        return {
          type: ie,
          id: e,
          highlighted: t
        };
      },
      we = function we(e, t, i, n) {
        return {
          type: Q,
          value: e,
          id: t,
          active: i,
          disabled: n
        };
      },
      Ce = function () {
        function e(t, i) {
          var n = this;
          if (void 0 === t && (t = "[data-choice]"), void 0 === i && (i = {}), S("String", t)) {
            var s = Array.from(document.querySelectorAll(t));
            if (s.length > 1) return this._generateInstances(s, i);
          }
          this.config = o.a.all([R, e.userDefaults, i], {
            arrayMerge: function arrayMerge(e, t) {
              return [].concat(t);
            }
          });
          var r = L(this.config, R);
          r.length && console.warn("Unknown config option(s) passed", r.join(", ")), ["auto", "always"].includes(this.config.renderSelectedChoices) || (this.config.renderSelectedChoices = "auto");
          var a = S("String", t) ? document.querySelector(t) : t;
          if (a) {
            if (this._isTextElement = "text" === a.type, this._isSelectOneElement = "select-one" === a.type, this._isSelectMultipleElement = "select-multiple" === a.type, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this._isTextElement ? this.passedElement = new ve({
              element: a,
              classNames: this.config.classNames,
              delimiter: this.config.delimiter
            }) : this._isSelectElement && (this.passedElement = new _e({
              element: a,
              classNames: this.config.classNames,
              template: function template(e) {
                return n.config.templates.option(e);
              }
            })), !this.passedElement) return console.error("Passed element was of an invalid type");
            this.initialised = !1, this._store = new F(this.render), this._initialState = {}, this._currentState = {}, this._prevState = {}, this._currentValue = "", this._canSearch = this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = y(this.passedElement.element, "choices-"), this._direction = this.passedElement.element.getAttribute("dir") || "ltr", this._idNames = {
              itemChoice: "item-choice"
            }, this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && (this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onAKey = this._onAKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.config.silent || (!0 === this.config.shouldSortItems && this._isSelectOneElement && console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false."), "active" === this.passedElement.element.getAttribute("data-choice") && console.warn("Trying to initialise Choices on element already initialised")), this.init();
          } else this.config.silent || console.error("Could not find passed element or passed element was of an invalid type");
        }
        var t = e.prototype;
        return t.init = function () {
          if (!this.initialised) {
            this._createTemplates(), this._createElements(), this._createStructure(), this._initialState = T(this._store.state), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
            var e = this.config.callbackOnInit;
            e && S("Function", e) && e.call(this);
          }
        }, t.destroy = function () {
          this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this._isSelectElement && (this.passedElement.options = this._presetChoices), this.clearStore(), this.config.templates = null, this.initialised = !1);
        }, t.enable = function () {
          return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this;
        }, t.disable = function () {
          return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this;
        }, t.highlightItem = function (e, t) {
          if (void 0 === t && (t = !0), !e) return this;
          var i = e.id,
            n = e.groupId,
            s = void 0 === n ? -1 : n,
            r = e.value,
            o = void 0 === r ? "" : r,
            a = e.label,
            l = void 0 === a ? "" : a,
            c = s >= 0 ? this._store.getGroupById(s) : null;
          return this._store.dispatch(Ie(i, !0)), t && this.passedElement.triggerEvent(z, {
            id: i,
            value: o,
            label: l,
            groupValue: c && c.value ? c.value : null
          }), this;
        }, t.unhighlightItem = function (e) {
          if (!e) return this;
          var t = e.id,
            i = e.groupId,
            n = void 0 === i ? -1 : i,
            s = e.value,
            r = void 0 === s ? "" : s,
            o = e.label,
            a = void 0 === o ? "" : o,
            l = n >= 0 ? this._store.getGroupById(n) : null;
          return this._store.dispatch(Ie(t, !1)), this.passedElement.triggerEvent(z, {
            id: t,
            value: r,
            label: a,
            groupValue: l && l.value ? l.value : null
          }), this;
        }, t.highlightAll = function () {
          var e = this;
          return this._store.items.forEach(function (t) {
            return e.highlightItem(t);
          }), this;
        }, t.unhighlightAll = function () {
          var e = this;
          return this._store.items.forEach(function (t) {
            return e.unhighlightItem(t);
          }), this;
        }, t.removeActiveItemsByValue = function (e) {
          var t = this;
          return this._store.activeItems.filter(function (t) {
            return t.value === e;
          }).forEach(function (e) {
            return t._removeItem(e);
          }), this;
        }, t.removeActiveItems = function (e) {
          var t = this;
          return this._store.activeItems.filter(function (t) {
            return t.id !== e;
          }).forEach(function (e) {
            return t._removeItem(e);
          }), this;
        }, t.removeHighlightedItems = function (e) {
          var t = this;
          return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach(function (i) {
            t._removeItem(i), e && t._triggerChange(i.value);
          }), this;
        }, t.showDropdown = function (e) {
          var t = this;
          return this.dropdown.isActive ? this : (requestAnimationFrame(function () {
            t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow()), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(B, {});
          }), this);
        }, t.hideDropdown = function (e) {
          var t = this;
          return this.dropdown.isActive ? (requestAnimationFrame(function () {
            t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(V, {});
          }), this) : this;
        }, t.getValue = function (e) {
          void 0 === e && (e = !1);
          var t = this._store.activeItems.reduce(function (t, i) {
            var n = e ? i.value : i;
            return t.push(n), t;
          }, []);
          return this._isSelectOneElement ? t[0] : t;
        }, t.setValue = function (e) {
          var t = this;
          return this.initialised ? ([].concat(e).forEach(function (e) {
            return t._setChoiceOrItem(e);
          }), this) : this;
        }, t.setChoiceByValue = function (e) {
          var t = this;
          return !this.initialised || this._isTextElement ? this : ((S("Array", e) ? e : [e]).forEach(function (e) {
            return t._findAndSelectChoiceByValue(e);
          }), this);
        }, t.setChoices = function (e, t, i, n) {
          var s = this;
          if (void 0 === e && (e = []), void 0 === t && (t = ""), void 0 === i && (i = ""), void 0 === n && (n = !1), !this._isSelectElement || !t) return this;
          n && this.clearChoices(), this.containerOuter.removeLoadingState();
          return this._setLoading(!0), e.forEach(function (e) {
            e.choices ? s._addGroup({
              group: e,
              id: e.id || null,
              valueKey: t,
              labelKey: i
            }) : s._addChoice({
              value: e[t],
              label: e[i],
              isSelected: e.selected,
              isDisabled: e.disabled,
              customProperties: e.customProperties,
              placeholder: e.placeholder
            });
          }), this._setLoading(!1), this;
        }, t.clearChoices = function () {
          this._store.dispatch({
            type: Z
          });
        }, t.clearStore = function () {
          return this._store.dispatch({
            type: "CLEAR_ALL"
          }), this;
        }, t.clearInput = function () {
          var e = !this._isSelectOneElement;
          return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch(Se(!0))), this;
        }, t.ajax = function (e) {
          var t = this;
          return this.initialised && this._isSelectElement && e ? (requestAnimationFrame(function () {
            return t._handleLoadingState(!0);
          }), e(this._ajaxCallback()), this) : this;
        }, t._render = function () {
          if (!this._store.isLoading()) {
            this._currentState = this._store.state;
            var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
              t = this._isSelectElement,
              i = this._currentState.items !== this._prevState.items;
            e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState);
          }
        }, t._renderChoices = function () {
          var e = this,
            t = this._store,
            i = t.activeGroups,
            n = t.activeChoices,
            s = document.createDocumentFragment();
          if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame(function () {
            return e.choiceList.scrollToTop();
          }), i.length >= 1 && !this._isSearching) {
            var r = n.filter(function (e) {
              return !0 === e.placeholder && -1 === e.groupId;
            });
            r.length >= 1 && (s = this._createChoicesFragment(r, s)), s = this._createGroupsFragment(i, n, s);
          } else n.length >= 1 && (s = this._createChoicesFragment(n, s));
          if (s.childNodes && s.childNodes.length > 0) {
            var o = this._store.activeItems,
              a = this._canAddItem(o, this.input.value);
            a.response ? (this.choiceList.append(s), this._highlightChoice()) : this.choiceList.append(this._getTemplate("notice", a.notice));
          } else {
            var l, c;
            this._isSearching ? (c = S("Function", this.config.noResultsText) ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = S("Function", this.config.noChoicesText) ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l);
          }
        }, t._renderItems = function () {
          var e = this._store.activeItems || [];
          this.itemList.clear();
          var t = this._createItemsFragment(e);
          t.childNodes && this.itemList.append(t);
        }, t._createGroupsFragment = function (e, t, i) {
          var n = this,
            s = i || document.createDocumentFragment();
          return this.config.shouldSort && e.sort(this.config.sortFn), e.forEach(function (e) {
            var i = function (e) {
              return t.filter(function (t) {
                return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
              });
            }(e);
            if (i.length >= 1) {
              var r = n._getTemplate("choiceGroup", e);
              s.appendChild(r), n._createChoicesFragment(i, s, !0);
            }
          }), s;
        }, t._createChoicesFragment = function (e, t, i) {
          var n = this;
          void 0 === i && (i = !1);
          var s = t || document.createDocumentFragment(),
            r = this.config,
            o = r.renderSelectedChoices,
            a = r.searchResultLimit,
            l = r.renderChoiceLimit,
            c = this._isSearching ? A : this.config.sortFn,
            h = function h(e) {
              if ("auto" !== o || n._isSelectOneElement || !e.selected) {
                var t = n._getTemplate("choice", e, n.config.itemSelectText);
                s.appendChild(t);
              }
            },
            u = e;
          "auto" !== o || this._isSelectOneElement || (u = e.filter(function (e) {
            return !e.selected;
          }));
          var d = u.reduce(function (e, t) {
              return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e;
            }, {
              placeholderChoices: [],
              normalChoices: []
            }),
            p = d.placeholderChoices,
            f = d.normalChoices;
          (this.config.shouldSort || this._isSearching) && f.sort(c);
          var m = u.length,
            v = [].concat(p, f);
          this._isSearching ? m = a : l > 0 && !i && (m = l);
          for (var g = 0; g < m; g += 1) v[g] && h(v[g]);
          return s;
        }, t._createItemsFragment = function (e, t) {
          var i = this;
          void 0 === t && (t = null);
          var n = this.config,
            s = n.shouldSortItems,
            r = n.sortFn,
            o = n.removeItemButton,
            a = t || document.createDocumentFragment();
          s && !this._isSelectOneElement && e.sort(r), this._isTextElement ? this.passedElement.value = e : this.passedElement.options = e;
          return e.forEach(function (e) {
            return function (e) {
              var t = i._getTemplate("item", e, o);
              a.appendChild(t);
            }(e);
          }), a;
        }, t._triggerChange = function (e) {
          null != e && this.passedElement.triggerEvent(H, {
            value: e
          });
        }, t._selectPlaceholderChoice = function () {
          var e = this._store.placeholderChoice;
          e && (this._addItem({
            value: e.value,
            label: e.label,
            choiceId: e.id,
            groupId: e.groupId,
            placeholder: e.placeholder
          }), this._triggerChange(e.value));
        }, t._handleButtonAction = function (e, t) {
          if (e && t && this.config.removeItems && this.config.removeItemButton) {
            var i = t.parentNode.getAttribute("data-id"),
              n = e.find(function (e) {
                return e.id === parseInt(i, 10);
              });
            this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._selectPlaceholderChoice();
          }
        }, t._handleItemAction = function (e, t, i) {
          var n = this;
          if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
            var s = t.getAttribute("data-id");
            e.forEach(function (e) {
              e.id !== parseInt(s, 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e);
            }), this.input.focus();
          }
        }, t._handleChoiceAction = function (e, t) {
          if (e && t) {
            var i = t.getAttribute("data-id"),
              n = this._store.getChoiceById(i),
              s = e[0] && e[0].keyCode ? e[0].keyCode : null,
              r = this.dropdown.isActive;
            if (n.keyCode = s, this.passedElement.triggerEvent(G, {
              choice: n
            }), n && !n.selected && !n.disabled) this._canAddItem(e, n.value).response && (this._addItem({
              value: n.value,
              label: n.label,
              choiceId: n.id,
              groupId: n.groupId,
              customProperties: n.customProperties,
              placeholder: n.placeholder,
              keyCode: n.keyCode
            }), this._triggerChange(n.value));
            this.clearInput(), r && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus());
          }
        }, t._handleBackspace = function (e) {
          if (this.config.removeItems && e) {
            var t = e[e.length - 1],
              i = e.some(function (e) {
                return e.highlighted;
              });
            this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0));
          }
        }, t._setLoading = function (e) {
          this._store.dispatch(function (e) {
            return {
              type: "SET_IS_LOADING",
              isLoading: e
            };
          }(e));
        }, t._handleLoadingState = function (e) {
          void 0 === e && (e = !0);
          var t = this.itemList.getChild("." + this.config.classNames.placeholder);
          e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText), this.itemList.append(t)) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t.innerHTML = this._placeholderValue || "" : this.input.placeholder = this._placeholderValue || "");
        }, t._handleSearch = function (e) {
          if (e && this.input.isFocussed) {
            var t = this._store.choices,
              i = this.config,
              n = i.searchFloor,
              s = i.searchChoices,
              r = t.some(function (e) {
                return !e.active;
              });
            if (e && e.length >= n) {
              var o = s ? this._searchChoices(e) : 0;
              this.passedElement.triggerEvent(q, {
                value: e,
                resultCount: o
              });
            } else r && (this._isSearching = !1, this._store.dispatch(Se(!0)));
          }
        }, t._canAddItem = function (e, t) {
          var i = !0,
            n = S("Function", this.config.addItemText) ? this.config.addItemText(t) : this.config.addItemText;
          if (!this._isSelectOneElement) {
            var s = function (e, t, i) {
              return void 0 === i && (i = "value"), e.some(function (e) {
                return S("String", t) ? e[i] === t.trim() : e[i] === t;
              });
            }(e, t);
            this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, n = S("Function", this.config.maxItemText) ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && s && i && (i = !1, n = S("Function", this.config.uniqueItemText) ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && S("Function", this.config.addItemFilterFn) && !this.config.addItemFilterFn(t) && (i = !1, n = S("Function", this.config.customAddItemText) ? this.config.customAddItemText(t) : this.config.customAddItemText);
          }
          return {
            response: i,
            notice: n
          };
        }, t._ajaxCallback = function () {
          var e = this;
          return function (t, i, n) {
            if (t && i) {
              var s = S("Object", t) ? [t] : t;
              s && S("Array", s) && s.length ? (e._handleLoadingState(!1), e._setLoading(!0), s.forEach(function (t) {
                t.choices ? e._addGroup({
                  group: t,
                  id: t.id || null,
                  valueKey: i,
                  labelKey: n
                }) : e._addChoice({
                  value: x(t, i),
                  label: x(t, n),
                  isSelected: t.selected,
                  isDisabled: t.disabled,
                  customProperties: t.customProperties,
                  placeholder: t.placeholder
                });
              }), e._setLoading(!1), e._isSelectOneElement && e._selectPlaceholderChoice()) : e._handleLoadingState(!1);
            }
          };
        }, t._searchChoices = function (e) {
          var t = S("String", e) ? e.trim() : e,
            i = S("String", this._currentValue) ? this._currentValue.trim() : this._currentValue;
          if (t.length < 1 && t === i + " ") return 0;
          var n = this._store.searchableChoices,
            r = t,
            o = [].concat(this.config.searchFields),
            a = Object.assign(this.config.fuseOptions, {
              keys: o
            }),
            l = new s.a(n, a).search(r);
          return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch(function (e) {
            return {
              type: $,
              results: e
            };
          }(l)), l.length;
        }, t._addEventListeners = function () {
          window.delegateEvent.add("keyup", this._onKeyUp), window.delegateEvent.add("keydown", this._onKeyDown), window.delegateEvent.add("click", this._onClick), window.delegateEvent.add("touchmove", this._onTouchMove), window.delegateEvent.add("touchend", this._onTouchEnd), window.delegateEvent.add("mousedown", this._onMouseDown), window.delegateEvent.add("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus), this.containerOuter.element.addEventListener("blur", this._onBlur)), this.input.element.addEventListener("focus", this._onFocus), this.input.element.addEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset), this.input.addEventListeners();
        }, t._removeEventListeners = function () {
          window.delegateEvent.remove("keyup", this._onKeyUp), window.delegateEvent.remove("keydown", this._onKeyDown), window.delegateEvent.remove("click", this._onClick), window.delegateEvent.remove("touchmove", this._onTouchMove), window.delegateEvent.remove("touchend", this._onTouchEnd), window.delegateEvent.remove("mousedown", this._onMouseDown), window.delegateEvent.remove("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners();
        }, t._onKeyDown = function (e) {
          var t,
            i = e.target,
            n = e.keyCode,
            s = e.ctrlKey,
            r = e.metaKey;
          if (i === this.input.element || this.containerOuter.element.contains(i)) {
            var o = this._store.activeItems,
              a = this.input.isFocussed,
              l = this.dropdown.isActive,
              c = this.itemList.hasChildren,
              h = String.fromCharCode(n),
              u = ne,
              d = se,
              p = re,
              f = oe,
              m = ae,
              v = le,
              g = ce,
              _ = he,
              b = ue,
              y = s || r;
            !this._isTextElement && /[a-zA-Z0-9-_ ]/.test(h) && this.showDropdown();
            var E = ((t = {})[f] = this._onAKey, t[p] = this._onEnterKey, t[m] = this._onEscapeKey, t[v] = this._onDirectionKey, t[_] = this._onDirectionKey, t[g] = this._onDirectionKey, t[b] = this._onDirectionKey, t[d] = this._onDeleteKey, t[u] = this._onDeleteKey, t);
            E[n] && E[n]({
              event: e,
              target: i,
              keyCode: n,
              metaKey: r,
              activeItems: o,
              hasFocusedInput: a,
              hasActiveDropdown: l,
              hasItems: c,
              hasCtrlDownKeyPressed: y
            });
          }
        }, t._onKeyUp = function (e) {
          var t = e.target,
            i = e.keyCode;
          if (t === this.input.element) {
            var n = this.input.value,
              s = this._store.activeItems,
              r = this._canAddItem(s, n),
              o = ne,
              a = se;
            if (this._isTextElement) {
              if (r.notice && n) {
                var l = this._getTemplate("notice", r.notice);
                this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0);
              } else this.hideDropdown(!0);
            } else {
              var c = (i === o || i === a) && !t.value,
                h = !this._isTextElement && this._isSearching,
                u = this._canSearch && r.response;
              c && h ? (this._isSearching = !1, this._store.dispatch(Se(!0))) : u && this._handleSearch(this.input.value);
            }
            this._canSearch = this.config.searchEnabled;
          }
        }, t._onAKey = function (e) {
          var t = e.hasItems;
          e.hasCtrlDownKeyPressed && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
        }, t._onEnterKey = function (e) {
          var t = e.event,
            i = e.target,
            n = e.activeItems,
            s = e.hasActiveDropdown,
            r = re,
            o = i.hasAttribute("data-button");
          if (this._isTextElement && i.value) {
            var a = this.input.value;
            this._canAddItem(n, a).response && (this.hideDropdown(!0), this._addItem({
              value: a
            }), this._triggerChange(a), this.clearInput());
          }
          if (o && (this._handleButtonAction(n, i), t.preventDefault()), s) {
            var l = this.dropdown.getChild("." + this.config.classNames.highlightedState);
            l && (n[0] && (n[0].keyCode = r), this._handleChoiceAction(n, l)), t.preventDefault();
          } else this._isSelectOneElement && (this.showDropdown(), t.preventDefault());
        }, t._onEscapeKey = function (e) {
          e.hasActiveDropdown && (this.hideDropdown(!0), this.containerOuter.focus());
        }, t._onDirectionKey = function (e) {
          var t = e.event,
            i = e.hasActiveDropdown,
            n = e.keyCode,
            s = e.metaKey,
            r = ce,
            o = he,
            a = ue;
          if (i || this._isSelectOneElement) {
            this.showDropdown(), this._canSearch = !1;
            var l,
              c = n === r || n === a ? 1 : -1;
            if (s || n === a || n === o) l = c > 0 ? Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]")).pop() : this.dropdown.element.querySelector("[data-choice-selectable]");else {
              var h = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);
              l = h ? function (e, t, i) {
                if (void 0 === i && (i = 1), e && t) {
                  var n = e.parentNode.parentNode,
                    s = Array.from(n.querySelectorAll(t)),
                    r = s.indexOf(e);
                  return s[r + (i > 0 ? 1 : -1)];
                }
              }(h, "[data-choice-selectable]", c) : this.dropdown.element.querySelector("[data-choice-selectable]");
            }
            l && (function (e, t, i) {
              if (void 0 === i && (i = 1), e) return i > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop;
            }(l, this.choiceList.element, c) || this.choiceList.scrollToChoice(l, c), this._highlightChoice(l)), t.preventDefault();
          }
        }, t._onDeleteKey = function (e) {
          var t = e.event,
            i = e.target,
            n = e.hasFocusedInput,
            s = e.activeItems;
          !n || i.value || this._isSelectOneElement || (this._handleBackspace(s), t.preventDefault());
        }, t._onTouchMove = function () {
          this._wasTap && (this._wasTap = !1);
        }, t._onTouchEnd = function (e) {
          var t = (e || e.touches[0]).target;
          this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation());
          this._wasTap = !0;
        }, t._onMouseDown = function (e) {
          var t = e.target,
            i = e.shiftKey;
          if (this.choiceList.element.contains(t) && navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/) && (this._isScrollingOnIe = !0), this.containerOuter.element.contains(t) && t !== this.input.element) {
            var n = this._store.activeItems,
              s = i,
              r = w(t, "data-button"),
              o = w(t, "data-item"),
              a = w(t, "data-choice");
            r ? this._handleButtonAction(n, r) : o ? this._handleItemAction(n, o, s) : a && this._handleChoiceAction(n, a), e.preventDefault();
          }
        }, t._onMouseOver = function (e) {
          var t = e.target;
          (t === this.dropdown || this.dropdown.element.contains(t)) && t.hasAttribute("data-choice") && this._highlightChoice(t);
        }, t._onClick = function (e) {
          var t = e.target;
          this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0));
        }, t._onFocus = function (e) {
          var t = this,
            i = e.target;
          this.containerOuter.element.contains(i) && {
            text: function text() {
              i === t.input.element && t.containerOuter.addFocusState();
            },
            "select-one": function selectOne() {
              t.containerOuter.addFocusState(), i === t.input.element && t.showDropdown(!0);
            },
            "select-multiple": function selectMultiple() {
              i === t.input.element && (t.showDropdown(!0), t.containerOuter.addFocusState());
            }
          }[this.passedElement.element.type]();
        }, t._onBlur = function (e) {
          var t = this,
            i = e.target;
          if (this.containerOuter.element.contains(i) && !this._isScrollingOnIe) {
            var n = this._store.activeItems.some(function (e) {
              return e.highlighted;
            });
            ({
              text: function text() {
                i === t.input.element && (t.containerOuter.removeFocusState(), n && t.unhighlightAll(), t.hideDropdown(!0));
              },
              "select-one": function selectOne() {
                t.containerOuter.removeFocusState(), (i === t.input.element || i === t.containerOuter.element && !t._canSearch) && t.hideDropdown(!0);
              },
              "select-multiple": function selectMultiple() {
                i === t.input.element && (t.containerOuter.removeFocusState(), t.hideDropdown(!0), n && t.unhighlightAll());
              }
            })[this.passedElement.element.type]();
          } else this._isScrollingOnIe = !1, this.input.element.focus();
        }, t._onFormReset = function () {
          this._store.dispatch({
            type: "RESET_TO",
            state: this._initialState
          });
        }, t._highlightChoice = function (e) {
          var t = this;
          void 0 === e && (e = null);
          var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
          if (i.length) {
            var n = e;
            Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)).forEach(function (e) {
              e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false");
            }), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(X, {
              el: n
            }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
          }
        }, t._addItem = function (e) {
          var t = e.value,
            i = e.label,
            n = void 0 === i ? null : i,
            s = e.choiceId,
            r = void 0 === s ? -1 : s,
            o = e.groupId,
            a = void 0 === o ? -1 : o,
            l = e.customProperties,
            c = void 0 === l ? null : l,
            h = e.placeholder,
            u = void 0 !== h && h,
            d = e.keyCode,
            p = void 0 === d ? null : d,
            f = S("String", t) ? t.trim() : t,
            m = p,
            v = c,
            g = this._store.items,
            _ = n || f,
            b = parseInt(r, 10) || -1,
            y = a >= 0 ? this._store.getGroupById(a) : null,
            E = g ? g.length + 1 : 1;
          return this.config.prependValue && (f = this.config.prependValue + f.toString()), this.config.appendValue && (f += this.config.appendValue.toString()), this._store.dispatch(function (e) {
            var t = e.value,
              i = e.label,
              n = e.id,
              s = e.choiceId,
              r = e.groupId,
              o = e.customProperties,
              a = e.placeholder,
              l = e.keyCode;
            return {
              type: ee,
              value: t,
              label: i,
              id: n,
              choiceId: s,
              groupId: r,
              customProperties: o,
              placeholder: a,
              keyCode: l
            };
          }({
            value: f,
            label: _,
            id: E,
            choiceId: b,
            groupId: a,
            customProperties: c,
            placeholder: u,
            keyCode: m
          })), this._isSelectOneElement && this.removeActiveItems(E), this.passedElement.triggerEvent(W, {
            id: E,
            value: f,
            label: _,
            customProperties: v,
            groupValue: y && y.value ? y.value : void 0,
            keyCode: m
          }), this;
        }, t._removeItem = function (e) {
          if (!e || !S("Object", e)) return this;
          var t = e.id,
            i = e.value,
            n = e.label,
            s = e.choiceId,
            r = e.groupId,
            o = r >= 0 ? this._store.getGroupById(r) : null;
          return this._store.dispatch(function (e, t) {
            return {
              type: te,
              id: e,
              choiceId: t
            };
          }(t, s)), o && o.value ? this.passedElement.triggerEvent(U, {
            id: t,
            value: i,
            label: n,
            groupValue: o.value
          }) : this.passedElement.triggerEvent(U, {
            id: t,
            value: i,
            label: n
          }), this;
        }, t._addChoice = function (e) {
          var t = e.value,
            i = e.label,
            n = void 0 === i ? null : i,
            s = e.isSelected,
            r = void 0 !== s && s,
            o = e.isDisabled,
            a = void 0 !== o && o,
            l = e.groupId,
            c = void 0 === l ? -1 : l,
            h = e.customProperties,
            u = void 0 === h ? null : h,
            d = e.placeholder,
            p = void 0 !== d && d,
            f = e.keyCode,
            m = void 0 === f ? null : f;
          if (null != t) {
            var v = this._store.choices,
              g = n || t,
              _ = v ? v.length + 1 : 1,
              b = this._baseId + "-" + this._idNames.itemChoice + "-" + _;
            this._store.dispatch(function (e) {
              var t = e.value,
                i = e.label,
                n = e.id,
                s = e.groupId,
                r = e.disabled,
                o = e.elementId,
                a = e.customProperties,
                l = e.placeholder,
                c = e.keyCode;
              return {
                type: Y,
                value: t,
                label: i,
                id: n,
                groupId: s,
                disabled: r,
                elementId: o,
                customProperties: a,
                placeholder: l,
                keyCode: c
              };
            }({
              value: t,
              label: g,
              id: _,
              groupId: c,
              disabled: a,
              elementId: b,
              customProperties: u,
              placeholder: p,
              keyCode: m
            })), r && this._addItem({
              value: t,
              label: g,
              choiceId: _,
              customProperties: u,
              placeholder: p,
              keyCode: m
            });
          }
        }, t._addGroup = function (e) {
          var t = this,
            i = e.group,
            n = e.id,
            s = e.valueKey,
            r = void 0 === s ? "value" : s,
            o = e.labelKey,
            a = void 0 === o ? "label" : o,
            l = S("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
            c = n || Math.floor(new Date().valueOf() * Math.random()),
            h = !!i.disabled && i.disabled;
          if (l) {
            this._store.dispatch(we(i.label, c, !0, h));
            l.forEach(function (e) {
              var i = e.disabled || e.parentNode && e.parentNode.disabled;
              t._addChoice({
                value: e[r],
                label: S("Object", e) ? e[a] : e.innerHTML,
                isSelected: e.selected,
                isDisabled: i,
                groupId: c,
                customProperties: e.customProperties,
                placeholder: e.placeholder
              });
            });
          } else this._store.dispatch(we(i.label, i.id, !1, i.disabled));
        }, t._getTemplate = function (e) {
          var t;
          if (!e) return null;
          for (var i = this.config, n = i.templates, s = i.classNames, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
          return (t = n[e]).call.apply(t, [this, s].concat(o));
        }, t._createTemplates = function () {
          var e = this.config.callbackOnCreateTemplates,
            t = {};
          e && S("Function", e) && (t = e.call(this, O)), this.config.templates = o()(Ee, t);
        }, t._createElements = function () {
          this.containerOuter = new M({
            element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
          }), this.containerInner = new M({
            element: this._getTemplate("containerInner"),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
          }), this.input = new K({
            element: this._getTemplate("input", this._placeholderValue),
            classNames: this.config.classNames,
            type: this.passedElement.element.type
          }), this.choiceList = new de({
            element: this._getTemplate("choiceList", this._isSelectOneElement)
          }), this.itemList = new de({
            element: this._getTemplate("itemList", this._isSelectOneElement)
          }), this.dropdown = new j({
            element: this._getTemplate("dropdown"),
            classNames: this.config.classNames,
            type: this.passedElement.element.type
          });
        }, t._createStructure = function () {
          this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth(!0)), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement ? this._addPredefinedChoices() : this._isTextElement && this._addPredefinedItems();
        }, t._addPredefinedChoices = function () {
          var e = this,
            t = this.passedElement.optionGroups;
          if (this._highlightPosition = 0, this._isSearching = !1, this._setLoading(!0), t && t.length) {
            var i = this.passedElement.placeholderOption;
            i && "SELECT" === i.parentNode.tagName && this._addChoice({
              value: i.value,
              label: i.innerHTML,
              isSelected: i.selected,
              isDisabled: i.disabled,
              placeholder: !0
            }), t.forEach(function (t) {
              return e._addGroup({
                group: t,
                id: t.id || null
              });
            });
          } else {
            var n = this.passedElement.options,
              s = this.config.sortFn,
              r = this._presetChoices;
            n.forEach(function (e) {
              r.push({
                value: e.value,
                label: e.innerHTML,
                selected: e.selected,
                disabled: e.disabled || e.parentNode.disabled,
                placeholder: e.hasAttribute("placeholder"),
                customProperties: e.getAttribute("data-custom-properties")
              });
            }), this.config.shouldSort && r.sort(s);
            var o = r.some(function (e) {
              return e.selected;
            });
            r.forEach(function (t, i) {
              return function (t, i) {
                var n = t.value,
                  s = t.label,
                  r = t.customProperties,
                  a = t.placeholder;
                if (e._isSelectElement) {
                  if (t.choices) e._addGroup({
                    group: t,
                    id: t.id || null
                  });else {
                    var l = e._isSelectOneElement && !o && 0 === i,
                      c = !!l || t.selected,
                      h = !l && t.disabled;
                    e._addChoice({
                      value: n,
                      label: s,
                      isSelected: c,
                      isDisabled: h,
                      customProperties: r,
                      placeholder: a
                    });
                  }
                } else e._addChoice({
                  value: n,
                  label: s,
                  isSelected: t.selected,
                  isDisabled: t.disabled,
                  customProperties: r,
                  placeholder: a
                });
              }(t, i);
            });
          }
          this._setLoading(!1);
        }, t._addPredefinedItems = function () {
          var e = this;
          this._presetItems.forEach(function (t) {
            return function (t) {
              var i = E(t);
              "Object" === i && t.value ? e._addItem({
                value: t.value,
                label: t.label,
                choiceId: t.id,
                customProperties: t.customProperties,
                placeholder: t.placeholder
              }) : "String" === i && e._addItem({
                value: t
              });
            }(t);
          });
        }, t._setChoiceOrItem = function (e) {
          var t = this;
          ({
            object: function object() {
              e.value && (t._isTextElement ? t._addItem({
                value: e.value,
                label: e.label,
                choiceId: e.id,
                customProperties: e.customProperties,
                placeholder: e.placeholder
              }) : t._addChoice({
                value: e.value,
                label: e.label,
                isSelected: !0,
                isDisabled: !1,
                customProperties: e.customProperties,
                placeholder: e.placeholder
              }));
            },
            string: function string() {
              t._isTextElement ? t._addItem({
                value: e
              }) : t._addChoice({
                value: e,
                label: e,
                isSelected: !0,
                isDisabled: !1
              });
            }
          })[E(e).toLowerCase()]();
        }, t._findAndSelectChoiceByValue = function (e) {
          var t = this,
            i = this._store.choices.find(function (i) {
              return t.config.itemComparer(i.value, e);
            });
          i && !i.selected && this._addItem({
            value: i.value,
            label: i.label,
            choiceId: i.id,
            groupId: i.groupId,
            customProperties: i.customProperties,
            placeholder: i.placeholder,
            keyCode: i.keyCode
          });
        }, t._generateInstances = function (t, i) {
          return t.reduce(function (t, n) {
            return t.push(new e(n, i)), t;
          }, [this]);
        }, t._generatePlaceholderValue = function () {
          return !this._isSelectOneElement && !!this.config.placeholder && (this.config.placeholderValue || this.passedElement.element.getAttribute("placeholder"));
        }, e;
      }();
    Ce.userDefaults = {};
    t["default"] = Ce;
  }])["default"];
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.autocomplete = factory());
})(void 0, function () {
  'use strict';

  /*
   * https://github.com/kraaden/autocomplete
   * Copyright (c) 2016 Denys Krasnoshchok
   * MIT License
   */
  function autocomplete(settings) {
    // just an alias to minimize JS file size
    var doc = document;
    var container = doc.createElement("div");
    var containerStyle = container.style;
    var userAgent = navigator.userAgent;
    var mobileFirefox = userAgent.indexOf("Firefox") !== -1 && userAgent.indexOf("Mobile") !== -1;
    var debounceWaitMs = settings.debounceWaitMs || 0;
    var preventSubmit = settings.preventSubmit || false;
    // 'keyup' event will not be fired on Mobile Firefox, so we have to use 'input' event instead
    var keyUpEventName = mobileFirefox ? "input" : "keyup";
    var items = [];
    var inputValue = "";
    var minLen = 2;
    var showOnFocus = settings.showOnFocus;
    var selected;
    var keypressCounter = 0;
    var debounceTimer;
    if (settings.minLength !== undefined) {
      minLen = settings.minLength;
    }
    if (!settings.input) {
      throw new Error("input undefined");
    }
    var input = settings.input;
    container.className = "autocomplete " + (settings.className || "");
    containerStyle.position = "fixed";
    /**
     * Detach the container from DOM
     */
    function detach() {
      var parent = container.parentNode;
      if (parent) {
        parent.removeChild(container);
      }
    }
    /**
     * Detect if the script is running on IOS
     */
    function isIOS() {
      return /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream;
    }
    /**
     * Clear debouncing timer if assigned
     */
    function clearDebounceTimer() {
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }
    }
    /**
     * Attach the container to DOM
     */
    function attach() {
      if (!container.parentNode) {
        doc.body.appendChild(container);
      }
    }
    /**
     * Check if container for autocomplete is displayed
     */
    function containerDisplayed() {
      return !!container.parentNode;
    }
    /**
     * Clear autocomplete state and hide container
     */
    function clear() {
      keypressCounter++;
      items = [];
      inputValue = "";
      selected = undefined;
      detach();
    }
    /**
     * Update autocomplete position
     */
    function updatePosition() {
      if (!containerDisplayed()) {
        return;
      }
      containerStyle.height = "auto";
      containerStyle.width = input.offsetWidth + "px";
      var inputRect = input.getBoundingClientRect();
      var top = isIOS() ? inputRect.top + window.pageYOffset // a fix for buggy getBoundingClientRect on IOS
      : inputRect.top;
      top = top + input.offsetHeight;
      var maxHeight = window.innerHeight - (inputRect.top + input.offsetHeight);
      if (maxHeight < 0) {
        maxHeight = 0;
      }
      containerStyle.top = top + "px";
      containerStyle.bottom = "";
      containerStyle.left = inputRect.left + "px";
      containerStyle.maxHeight = maxHeight + "px";
      if (settings.customize) {
        settings.customize(input, inputRect, container, maxHeight);
      }
    }
    /**
     * Redraw the autocomplete div element with suggestions
     */
    function update() {
      // delete all children from autocomplete DOM container
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      // function for rendering autocomplete suggestions
      var render = function render(item, currentValue) {
        var itemElement = doc.createElement("div");
        itemElement.textContent = item.label || "";
        return itemElement;
      };
      if (settings.render) {
        render = settings.render;
      }
      // function to render autocomplete groups
      var renderGroup = function renderGroup(groupName, currentValue) {
        var groupDiv = doc.createElement("div");
        groupDiv.textContent = groupName;
        return groupDiv;
      };
      if (settings.renderGroup) {
        renderGroup = settings.renderGroup;
      }
      var fragment = doc.createDocumentFragment();
      var prevGroup = "#9?$";
      items.forEach(function (item) {
        if (item.group && item.group !== prevGroup) {
          prevGroup = item.group;
          var groupDiv = renderGroup(item.group, inputValue);
          if (groupDiv) {
            groupDiv.className += " group";
            fragment.appendChild(groupDiv);
          }
        }
        var div = render(item, inputValue);
        if (div) {
          div.addEventListener("click", function (ev) {
            settings.onSelect(item, input);
            clear();
            ev.preventDefault();
            ev.stopPropagation();
          });
          if (item === selected) {
            div.className += " selected";
          }
          fragment.appendChild(div);
        }
      });
      container.appendChild(fragment);
      if (items.length < 1) {
        if (settings.emptyMsg) {
          var empty = doc.createElement("div");
          empty.className = "empty";
          empty.textContent = settings.emptyMsg;
          container.appendChild(empty);
        } else {
          clear();
          return;
        }
      }
      attach();
      updatePosition();
      updateScroll();
    }
    function updateIfDisplayed() {
      if (containerDisplayed()) {
        update();
      }
    }
    function resizeEventHandler() {
      updateIfDisplayed();
    }
    function scrollEventHandler(e) {
      if (e.target !== container) {
        updateIfDisplayed();
      } else {
        e.preventDefault();
      }
    }
    function keyupEventHandler(ev) {
      var keyCode = ev.which || ev.keyCode || 0;
      var ignore = [38 /* Up */, 13 /* Enter */, 27 /* Esc */, 39 /* Right */, 37 /* Left */, 16 /* Shift */, 17 /* Ctrl */, 18 /* Alt */, 20 /* CapsLock */, 91 /* WindowsKey */, 9 /* Tab */];
      for (var _i = 0, ignore_1 = ignore; _i < ignore_1.length; _i++) {
        var key = ignore_1[_i];
        if (keyCode === key) {
          return;
        }
      }
      // the down key is used to open autocomplete
      if (keyCode === 40 /* Down */ && containerDisplayed()) {
        return;
      }
      startFetch(0 /* Keyboard */);
    }
    /**
     * Automatically move scroll bar if selected item is not visible
     */
    function updateScroll() {
      var elements = container.getElementsByClassName("selected");
      if (elements.length > 0) {
        var element = elements[0];
        // make group visible
        var previous = element.previousElementSibling;
        if (previous && previous.className.indexOf("group") !== -1 && !previous.previousElementSibling) {
          element = previous;
        }
        if (element.offsetTop < container.scrollTop) {
          container.scrollTop = element.offsetTop;
        } else {
          var selectBottom = element.offsetTop + element.offsetHeight;
          var containerBottom = container.scrollTop + container.offsetHeight;
          if (selectBottom > containerBottom) {
            container.scrollTop += selectBottom - containerBottom;
          }
        }
      }
    }
    /**
     * Select the previous item in suggestions
     */
    function selectPrev() {
      if (items.length < 1) {
        selected = undefined;
      } else {
        if (selected === items[0]) {
          selected = items[items.length - 1];
        } else {
          for (var i = items.length - 1; i > 0; i--) {
            if (selected === items[i] || i === 1) {
              selected = items[i - 1];
              break;
            }
          }
        }
      }
    }
    /**
     * Select the next item in suggestions
     */
    function selectNext() {
      if (items.length < 1) {
        selected = undefined;
      }
      if (!selected || selected === items[items.length - 1]) {
        selected = items[0];
        return;
      }
      for (var i = 0; i < items.length - 1; i++) {
        if (selected === items[i]) {
          selected = items[i + 1];
          break;
        }
      }
    }
    function keydownEventHandler(ev) {
      var keyCode = ev.which || ev.keyCode || 0;
      if (keyCode === 38 /* Up */ || keyCode === 40 /* Down */ || keyCode === 27 /* Esc */) {
        var containerIsDisplayed = containerDisplayed();
        if (keyCode === 27 /* Esc */) {
          clear();
        } else {
          if (!containerDisplayed || items.length < 1) {
            return;
          }
          keyCode === 38 /* Up */ ? selectPrev() : selectNext();
          update();
        }
        ev.preventDefault();
        if (containerIsDisplayed) {
          ev.stopPropagation();
        }
        return;
      }
      if (keyCode === 13 /* Enter */) {
        if (selected) {
          settings.onSelect(selected, input);
          clear();
        }
        if (preventSubmit) {
          ev.preventDefault();
        }
      }
    }
    function focusEventHandler() {
      if (showOnFocus) {
        startFetch(1 /* Focus */);
      }
    }

    function startFetch(trigger) {
      // if multiple keys were pressed, before we get update from server,
      // this may cause redrawing our autocomplete multiple times after the last key press.
      // to avoid this, the number of times keyboard was pressed will be
      // saved and checked before redraw our autocomplete box.
      var savedKeypressCounter = ++keypressCounter;
      var val = input.value;
      if (val.length >= minLen || trigger === 1 /* Focus */) {
        clearDebounceTimer();
        debounceTimer = window.setTimeout(function () {
          settings.fetch(val, function (elements) {
            if (keypressCounter === savedKeypressCounter && elements) {
              items = elements;
              inputValue = val;
              selected = items.length > 0 ? items[0] : undefined;
              update();
            }
          }, 0 /* Keyboard */);
        }, trigger === 0 /* Keyboard */ ? debounceWaitMs : 0);
      } else {
        clear();
      }
    }
    function blurEventHandler() {
      // we need to delay clear, because when we click on an item, blur will be called before click and remove items from DOM
      setTimeout(function () {
        if (doc.activeElement !== input) {
          clear();
        }
      }, 200);
    }
    /**
     * Fixes #26: on long clicks focus will be lost and onSelect method will not be called
     */
    container.addEventListener("mousedown", function (evt) {
      evt.stopPropagation();
      evt.preventDefault();
    });
    /**
     * This function will remove DOM elements and clear event handlers
     */
    function destroy() {
      input.removeEventListener("focus", focusEventHandler);
      input.removeEventListener("keydown", keydownEventHandler);
      input.removeEventListener(keyUpEventName, keyupEventHandler);
      input.removeEventListener("blur", blurEventHandler);
      window.removeEventListener("resize", resizeEventHandler);
      doc.removeEventListener("scroll", scrollEventHandler, true);
      clearDebounceTimer();
      clear();
      // prevent the update call if there are pending AJAX requests
      keypressCounter++;
    }
    // setup event handlers
    input.addEventListener("keydown", keydownEventHandler);
    input.addEventListener(keyUpEventName, keyupEventHandler);
    input.addEventListener("blur", blurEventHandler);
    input.addEventListener("focus", focusEventHandler);
    window.addEventListener("resize", resizeEventHandler);
    doc.addEventListener("scroll", scrollEventHandler, true);
    return {
      destroy: destroy
    };
  }
  return autocomplete;
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto);
}(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function t() {},
    u = !!window.jQuery,
    v = a(window),
    w = function w(a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function x(b, c, d, e) {
      var f = document.createElement("div");
      return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
    },
    y = function y(c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function z(c) {
      return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
    },
    A = function A() {
      a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
    },
    B = function B() {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length;) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  t.prototype = {
    constructor: t,
    init: function init() {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
    },
    open: function open(c) {
      var e;
      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
          b.index = e;
          break;
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close();
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close();
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
      }
      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type);
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close();
      }), v.on("resize" + p, function () {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
    },
    close: function close() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close();
      }, b.st.removalDelay)) : b._close());
    },
    _close: function _close() {
      y(h);
      var c = r + " " + q + " ";
      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
    },
    updateSize: function updateSize(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d;
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function updateItemHTML() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
    },
    appendContent: function appendContent(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
    },
    parseEl: function parseEl(c) {
      var d,
        e = b.items[c];
      if (e.tagName ? e = {
        el: a(e)
      } : (d = e.type, e = {
        data: e,
        src: e.src
      }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) {
          d = f[g];
          break;
        }
        e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
      }
      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
    },
    addGroup: function addGroup(a, c) {
      var d = function d(_d) {
        _d.mfpEl = this, b._openClick(_d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
    },
    _openClick: function _openClick(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    },
    updateStatus: function updateStatus(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), c = a;
      }
    },
    _checkIfClose: function _checkIfClose(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function _addClassToMFP(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function _removeClassFromMFP(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function _hasScrollBar(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    },
    _setFocus: function _setFocus() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    },
    _parseMarkup: function _parseMarkup(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;
        if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);
          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
          }
        } else b.find(p + "-" + c).html(d);
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      }
      return b.scrollbarSize;
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function open(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    },
    close: function close() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    },
    registerModule: function registerModule(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c) {
      if ("open" === c) {
        var e,
          f = u ? d.data("magnificPopup") : d[0].magnificPopup,
          g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f);
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d;
  };
  var C,
    D,
    E,
    F = "inline",
    G = function G() {
      E && (D.after(E.addClass(C)).detach(), E = null);
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function initInline() {
        b.types.push(F), w(h + "." + F, function () {
          G();
        });
      },
      getInline: function getInline(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");
          return c.inlineElement = f, f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      }
    }
  });
  var H,
    I = "ajax",
    J = function J() {
      H && a(document.body).removeClass(H);
    },
    K = function K() {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
      },
      getAjax: function getAjax(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function success(d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q);
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
          },
          error: function error() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), "";
      }
    }
  });
  var L,
    M = function M(c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function resizeImage() {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function _onImageHasSize(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
      },
      findImageSize: function findImageSize(a) {
        var c = 0,
          d = a.img[0],
          e = function e(f) {
            L && clearInterval(L), L = setInterval(function () {
              return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
            }, f);
          };
        e(1);
      },
      getImage: function getImage(c, d) {
        var e = 0,
          f = function f() {
            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function g() {
            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
        }
        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
      }
    }
  });
  var N,
    O = function O() {
      return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function opener(a) {
        return a.is("img") ? a : a.find("img");
      }
    },
    proto: {
      initZoom: function initZoom() {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function j(a) {
              var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                f = "transition";
              return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
            },
            k = function k() {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded");
                  }, 16);
                }, g);
              }, 16);
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a);
              }
              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null);
          });
        }
      },
      _allowZoom: function _allowZoom() {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function _getItemToZoom() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function _getOffset(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
      }
    }
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function R(a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function () {
          R();
        });
      },
      getIframe: function getIframe(c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      }
    }
  });
  var S = function S(a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function T(a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function initGallery() {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0;
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
          });
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
              e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
              f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.click(function () {
              b.prev();
            }), f.click(function () {
              b.next();
            }), b.container.append(e.add(f));
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null;
          }, 16);
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
        })) : !1;
      },
      next: function next() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
      },
      prev: function prev() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
      },
      goTo: function goTo(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
      },
      _preloadItem: function _preloadItem(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0;
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
          }).attr("src", d.src)), d.preloaded = !0;
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function replaceSrc(a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            });
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          }));
        }
      }
    }
  }), A();
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function (r) {
  "function" == typeof define && define.amd ? define(["jquery"], r) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (e, t) {
    return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), r(t), t;
  } : r(jQuery);
}(function (q) {
  "use strict";

  var m = /\r?\n/g,
    S = {};
  S.fileapi = void 0 !== q('<input type="file">').get(0).files, S.formdata = void 0 !== window.FormData;
  var _ = !!q.fn.prop;
  function o(e) {
    var t = e.data;
    e.isDefaultPrevented() || (e.preventDefault(), q(e.target).closest("form").ajaxSubmit(t));
  }
  function i(e) {
    var t = e.target,
      r = q(t);
    if (!r.is("[type=submit],[type=image]")) {
      var a = r.closest("[type=submit]");
      if (0 === a.length) return;
      t = a[0];
    }
    var n,
      o = t.form;
    "image" === (o.clk = t).type && (void 0 !== e.offsetX ? (o.clk_x = e.offsetX, o.clk_y = e.offsetY) : "function" == typeof q.fn.offset ? (n = r.offset(), o.clk_x = e.pageX - n.left, o.clk_y = e.pageY - n.top) : (o.clk_x = e.pageX - t.offsetLeft, o.clk_y = e.pageY - t.offsetTop)), setTimeout(function () {
      o.clk = o.clk_x = o.clk_y = null;
    }, 100);
  }
  function N() {
    var e;
    q.fn.ajaxSubmit.debug && (e = "[jquery.form] " + Array.prototype.join.call(arguments, ""), window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e));
  }
  q.fn.attr2 = function () {
    if (!_) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments);
  }, q.fn.ajaxSubmit = function (M, e, t, r) {
    if (!this.length) return N("ajaxSubmit: skipping submit process - no element selected"), this;
    var O,
      a,
      n,
      o,
      X = this;
    "function" == typeof M ? M = {
      success: M
    } : "string" == typeof M || !1 === M && 0 < arguments.length ? (M = {
      url: M,
      data: e,
      dataType: t
    }, "function" == typeof r && (M.success = r)) : void 0 === M && (M = {}), O = M.method || M.type || this.attr2("method"), n = (n = (n = "string" == typeof (a = M.url || this.attr2("action")) ? q.trim(a) : "") || window.location.href || "") && (n.match(/^([^#]+)/) || [])[1], o = /(MSIE|Trident)/.test(navigator.userAgent || "") && /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", M = q.extend(!0, {
      url: n,
      success: q.ajaxSettings.success,
      type: O || q.ajaxSettings.type,
      iframeSrc: o
    }, M);
    var i = {};
    if (this.trigger("form-pre-serialize", [this, M, i]), i.veto) return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
    if (M.beforeSerialize && !1 === M.beforeSerialize(this, M)) return N("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
    var s = M.traditional;
    void 0 === s && (s = q.ajaxSettings.traditional);
    var u,
      c,
      C = [],
      l = this.formToArray(M.semantic, C, M.filtering);
    if (M.data && (c = q.isFunction(M.data) ? M.data(l) : M.data, M.extraData = c, u = q.param(c, s)), M.beforeSubmit && !1 === M.beforeSubmit(l, this, M)) return N("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
    if (this.trigger("form-submit-validate", [l, this, M, i]), i.veto) return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
    var f = q.param(l, s);
    u && (f = f ? f + "&" + u : u), "GET" === M.type.toUpperCase() ? (M.url += (0 <= M.url.indexOf("?") ? "&" : "?") + f, M.data = null) : M.data = f;
    var d,
      m,
      p,
      h = [];
    M.resetForm && h.push(function () {
      X.resetForm();
    }), M.clearForm && h.push(function () {
      X.clearForm(M.includeHidden);
    }), !M.dataType && M.target ? (d = M.success || function () {}, h.push(function (e, t, r) {
      var a = arguments,
        n = M.replaceTarget ? "replaceWith" : "html";
      q(M.target)[n](e).each(function () {
        d.apply(this, a);
      });
    })) : M.success && (q.isArray(M.success) ? q.merge(h, M.success) : h.push(M.success)), M.success = function (e, t, r) {
      for (var a = M.context || this, n = 0, o = h.length; n < o; n++) h[n].apply(a, [e, t, r || X, X]);
    }, M.error && (m = M.error, M.error = function (e, t, r) {
      var a = M.context || this;
      m.apply(a, [e, t, r, X]);
    }), M.complete && (p = M.complete, M.complete = function (e, t) {
      var r = M.context || this;
      p.apply(r, [e, t, X]);
    });
    var v = 0 < q("input[type=file]:enabled", this).filter(function () {
        return "" !== q(this).val();
      }).length,
      g = "multipart/form-data",
      x = X.attr("enctype") === g || X.attr("encoding") === g,
      y = S.fileapi && S.formdata;
    N("fileAPI :" + y);
    var b,
      T = (v || x) && !y;
    !1 !== M.iframe && (M.iframe || T) ? M.closeKeepAlive ? q.get(M.closeKeepAlive, function () {
      b = w(l);
    }) : b = w(l) : b = (v || x) && y ? function (e) {
      for (var r = new FormData(), t = 0; t < e.length; t++) r.append(e[t].name, e[t].value);
      if (M.extraData) {
        var a = function (e) {
          var t,
            r,
            a = q.param(e, M.traditional).split("&"),
            n = a.length,
            o = [];
          for (t = 0; t < n; t++) a[t] = a[t].replace(/\+/g, " "), r = a[t].split("="), o.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
          return o;
        }(M.extraData);
        for (t = 0; t < a.length; t++) a[t] && r.append(a[t][0], a[t][1]);
      }
      M.data = null;
      var n = q.extend(!0, {}, q.ajaxSettings, M, {
        contentType: !1,
        processData: !1,
        cache: !1,
        type: O || "POST"
      });
      M.uploadProgress && (n.xhr = function () {
        var e = q.ajaxSettings.xhr();
        return e.upload && e.upload.addEventListener("progress", function (e) {
          var t = 0,
            r = e.loaded || e.position,
            a = e.total;
          e.lengthComputable && (t = Math.ceil(r / a * 100)), M.uploadProgress(e, r, a, t);
        }, !1), e;
      });
      n.data = null;
      var o = n.beforeSend;
      return n.beforeSend = function (e, t) {
        M.formData ? t.data = M.formData : t.data = r, o && o.call(this, e, t);
      }, q.ajax(n);
    }(l) : q.ajax(M), X.removeData("jqxhr").data("jqxhr", b);
    for (var j = 0; j < C.length; j++) C[j] = null;
    return this.trigger("form-submit-notify", [this, M]), this;
    function w(e) {
      var t,
        r,
        l,
        f,
        o,
        d,
        m,
        p,
        a,
        n,
        h,
        v,
        i = X[0],
        g = q.Deferred();
      if (g.abort = function (e) {
        p.abort(e);
      }, e) for (r = 0; r < C.length; r++) t = q(C[r]), _ ? t.prop("disabled", !1) : t.removeAttr("disabled");
      (l = q.extend(!0, {}, q.ajaxSettings, M)).context = l.context || l, o = "jqFormIO" + new Date().getTime();
      var s = i.ownerDocument,
        u = X.closest("body");
      if (l.iframeTarget ? (n = (d = q(l.iframeTarget, s)).attr2("name")) ? o = n : d.attr2("name", o) : (d = q('<iframe name="' + o + '" src="' + l.iframeSrc + '" />', s)).css({
        position: "absolute",
        top: "-1000px",
        left: "-1000px"
      }), m = d[0], p = {
        aborted: 0,
        responseText: null,
        responseXML: null,
        status: 0,
        statusText: "n/a",
        getAllResponseHeaders: function getAllResponseHeaders() {},
        getResponseHeader: function getResponseHeader() {},
        setRequestHeader: function setRequestHeader() {},
        abort: function abort(e) {
          var t = "timeout" === e ? "timeout" : "aborted";
          N("aborting upload... " + t), this.aborted = 1;
          try {
            m.contentWindow.document.execCommand && m.contentWindow.document.execCommand("Stop");
          } catch (e) {}
          d.attr("src", l.iframeSrc), p.error = t, l.error && l.error.call(l.context, p, t, e), f && q.event.trigger("ajaxError", [p, l, t]), l.complete && l.complete.call(l.context, p, t);
        }
      }, (f = l.global) && 0 == q.active++ && q.event.trigger("ajaxStart"), f && q.event.trigger("ajaxSend", [p, l]), l.beforeSend && !1 === l.beforeSend.call(l.context, p, l)) return l.global && q.active--, g.reject(), g;
      if (p.aborted) return g.reject(), g;
      (a = i.clk) && (n = a.name) && !a.disabled && (l.extraData = l.extraData || {}, l.extraData[n] = a.value, "image" === a.type && (l.extraData[n + ".x"] = i.clk_x, l.extraData[n + ".y"] = i.clk_y));
      var x = 1,
        y = 2;
      function b(t) {
        var r = null;
        try {
          t.contentWindow && (r = t.contentWindow.document);
        } catch (e) {
          N("cannot get iframe.contentWindow document: " + e);
        }
        if (r) return r;
        try {
          r = t.contentDocument ? t.contentDocument : t.document;
        } catch (e) {
          N("cannot get iframe.contentDocument: " + e), r = t.document;
        }
        return r;
      }
      var c = q("meta[name=csrf-token]").attr("content"),
        T = q("meta[name=csrf-param]").attr("content");
      function j() {
        var e = X.attr2("target"),
          t = X.attr2("action"),
          r = X.attr("enctype") || X.attr("encoding") || "multipart/form-data";
        i.setAttribute("target", o), O && !/post/i.test(O) || i.setAttribute("method", "POST"), t !== l.url && i.setAttribute("action", l.url), l.skipEncodingOverride || O && !/post/i.test(O) || X.attr({
          encoding: "multipart/form-data",
          enctype: "multipart/form-data"
        }), l.timeout && (v = setTimeout(function () {
          h = !0, A(x);
        }, l.timeout));
        var a = [];
        try {
          if (l.extraData) for (var n in l.extraData) l.extraData.hasOwnProperty(n) && (q.isPlainObject(l.extraData[n]) && l.extraData[n].hasOwnProperty("name") && l.extraData[n].hasOwnProperty("value") ? a.push(q('<input type="hidden" name="' + l.extraData[n].name + '">', s).val(l.extraData[n].value).appendTo(i)[0]) : a.push(q('<input type="hidden" name="' + n + '">', s).val(l.extraData[n]).appendTo(i)[0]));
          l.iframeTarget || d.appendTo(u), m.attachEvent ? m.attachEvent("onload", A) : m.addEventListener("load", A, !1), setTimeout(function e() {
            try {
              var t = b(m).readyState;
              N("state = " + t), t && "uninitialized" === t.toLowerCase() && setTimeout(e, 50);
            } catch (e) {
              N("Server abort: ", e, " (", e.name, ")"), A(y), v && clearTimeout(v), v = void 0;
            }
          }, 15);
          try {
            i.submit();
          } catch (e) {
            document.createElement("form").submit.apply(i);
          }
        } finally {
          i.setAttribute("action", t), i.setAttribute("enctype", r), e ? i.setAttribute("target", e) : X.removeAttr("target"), q(a).remove();
        }
      }
      T && c && (l.extraData = l.extraData || {}, l.extraData[T] = c), l.forceSync ? j() : setTimeout(j, 10);
      var w,
        S,
        k,
        D = 50;
      function A(e) {
        if (!p.aborted && !k) {
          if ((S = b(m)) || (N("cannot access response document"), e = y), e === x && p) return p.abort("timeout"), void g.reject(p, "timeout");
          if (e === y && p) return p.abort("server abort"), void g.reject(p, "error", "server abort");
          if (S && S.location.href !== l.iframeSrc || h) {
            m.detachEvent ? m.detachEvent("onload", A) : m.removeEventListener("load", A, !1);
            var t,
              r = "success";
            try {
              if (h) throw "timeout";
              var a = "xml" === l.dataType || S.XMLDocument || q.isXMLDoc(S);
              if (N("isXml=" + a), !a && window.opera && (null === S.body || !S.body.innerHTML) && --D) return N("requeing onLoad callback, DOM not available"), void setTimeout(A, 250);
              var n = S.body ? S.body : S.documentElement;
              p.responseText = n ? n.innerHTML : null, p.responseXML = S.XMLDocument ? S.XMLDocument : S, a && (l.dataType = "xml"), p.getResponseHeader = function (e) {
                return {
                  "content-type": l.dataType
                }[e.toLowerCase()];
              }, n && (p.status = Number(n.getAttribute("status")) || p.status, p.statusText = n.getAttribute("statusText") || p.statusText);
              var o,
                i,
                s,
                u = (l.dataType || "").toLowerCase(),
                c = /(json|script|text)/.test(u);
              c || l.textarea ? (o = S.getElementsByTagName("textarea")[0]) ? (p.responseText = o.value, p.status = Number(o.getAttribute("status")) || p.status, p.statusText = o.getAttribute("statusText") || p.statusText) : c && (i = S.getElementsByTagName("pre")[0], s = S.getElementsByTagName("body")[0], i ? p.responseText = i.textContent ? i.textContent : i.innerText : s && (p.responseText = s.textContent ? s.textContent : s.innerText)) : "xml" === u && !p.responseXML && p.responseText && (p.responseXML = F(p.responseText));
              try {
                w = E(p, u, l);
              } catch (e) {
                r = "parsererror", p.error = t = e || r;
              }
            } catch (e) {
              N("error caught: ", e), r = "error", p.error = t = e || r;
            }
            p.aborted && (N("upload aborted"), r = null), p.status && (r = 200 <= p.status && p.status < 300 || 304 === p.status ? "success" : "error"), "success" === r ? (l.success && l.success.call(l.context, w, "success", p), g.resolve(p.responseText, "success", p), f && q.event.trigger("ajaxSuccess", [p, l])) : r && (void 0 === t && (t = p.statusText), l.error && l.error.call(l.context, p, r, t), g.reject(p, "error", t), f && q.event.trigger("ajaxError", [p, l, t])), f && q.event.trigger("ajaxComplete", [p, l]), f && ! --q.active && q.event.trigger("ajaxStop"), l.complete && l.complete.call(l.context, p, r), k = !0, l.timeout && clearTimeout(v), setTimeout(function () {
              l.iframeTarget ? d.attr("src", l.iframeSrc) : d.remove(), p.responseXML = null;
            }, 100);
          }
        }
      }
      var F = q.parseXML || function (e, t) {
          return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = new DOMParser().parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" !== t.documentElement.nodeName ? t : null;
        },
        L = q.parseJSON || function (e) {
          return window.eval("(" + e + ")");
        },
        E = function E(e, t, r) {
          var a = e.getResponseHeader("content-type") || "",
            n = ("xml" === t || !t) && 0 <= a.indexOf("xml"),
            o = n ? e.responseXML : e.responseText;
          return n && "parsererror" === o.documentElement.nodeName && q.error && q.error("parsererror"), r && r.dataFilter && (o = r.dataFilter(o, t)), "string" == typeof o && (("json" === t || !t) && 0 <= a.indexOf("json") ? o = L(o) : ("script" === t || !t) && 0 <= a.indexOf("javascript") && q.globalEval(o)), o;
        };
      return g;
    }
  }, q.fn.ajaxForm = function (e, t, r, a) {
    if (("string" == typeof e || !1 === e && 0 < arguments.length) && (e = {
      url: e,
      data: t,
      dataType: r
    }, "function" == typeof a && (e.success = a)), (e = e || {}).delegation = e.delegation && q.isFunction(q.fn.on), e.delegation || 0 !== this.length) return e.delegation ? (q(document).off("submit.form-plugin", this.selector, o).off("click.form-plugin", this.selector, i).on("submit.form-plugin", this.selector, e, o).on("click.form-plugin", this.selector, e, i), this) : (e.beforeFormUnbind && e.beforeFormUnbind(this, e), this.ajaxFormUnbind().on("submit.form-plugin", e, o).on("click.form-plugin", e, i));
    var n = {
      s: this.selector,
      c: this.context
    };
    return !q.isReady && n.s ? (N("DOM not ready, queuing ajaxForm"), q(function () {
      q(n.s, n.c).ajaxForm(e);
    })) : N("terminating; zero elements found by selector" + (q.isReady ? "" : " (DOM not ready)")), this;
  }, q.fn.ajaxFormUnbind = function () {
    return this.off("submit.form-plugin click.form-plugin");
  }, q.fn.formToArray = function (e, t, r) {
    var a = [];
    if (0 === this.length) return a;
    var n,
      o,
      i,
      s,
      u,
      c,
      l,
      f,
      d,
      m,
      p = this[0],
      h = this.attr("id"),
      v = (v = e || void 0 === p.elements ? p.getElementsByTagName("*") : p.elements) && q.makeArray(v);
    if (h && (e || /(Edge|Trident)\//.test(navigator.userAgent)) && (n = q(':input[form="' + h + '"]').get()).length && (v = (v || []).concat(n)), !v || !v.length) return a;
    for (q.isFunction(r) && (v = q.map(v, r)), o = 0, c = v.length; o < c; o++) if ((m = (u = v[o]).name) && !u.disabled) if (e && p.clk && "image" === u.type) p.clk === u && (a.push({
      name: m,
      value: q(u).val(),
      type: u.type
    }), a.push({
      name: m + ".x",
      value: p.clk_x
    }, {
      name: m + ".y",
      value: p.clk_y
    }));else if ((s = q.fieldValue(u, !0)) && s.constructor === Array) for (t && t.push(u), i = 0, l = s.length; i < l; i++) a.push({
      name: m,
      value: s[i]
    });else if (S.fileapi && "file" === u.type) {
      t && t.push(u);
      var g = u.files;
      if (g.length) for (i = 0; i < g.length; i++) a.push({
        name: m,
        value: g[i],
        type: u.type
      });else a.push({
        name: m,
        value: "",
        type: u.type
      });
    } else null != s && (t && t.push(u), a.push({
      name: m,
      value: s,
      type: u.type,
      required: u.required
    }));
    return e || !p.clk || (m = (d = (f = q(p.clk))[0]).name) && !d.disabled && "image" === d.type && (a.push({
      name: m,
      value: f.val()
    }), a.push({
      name: m + ".x",
      value: p.clk_x
    }, {
      name: m + ".y",
      value: p.clk_y
    })), a;
  }, q.fn.formSerialize = function (e) {
    return q.param(this.formToArray(e));
  }, q.fn.fieldSerialize = function (n) {
    var o = [];
    return this.each(function () {
      var e = this.name;
      if (e) {
        var t = q.fieldValue(this, n);
        if (t && t.constructor === Array) for (var r = 0, a = t.length; r < a; r++) o.push({
          name: e,
          value: t[r]
        });else null != t && o.push({
          name: this.name,
          value: t
        });
      }
    }), q.param(o);
  }, q.fn.fieldValue = function (e) {
    for (var t = [], r = 0, a = this.length; r < a; r++) {
      var n = this[r],
        o = q.fieldValue(n, e);
      null == o || o.constructor === Array && !o.length || (o.constructor === Array ? q.merge(t, o) : t.push(o));
    }
    return t;
  }, q.fieldValue = function (e, t) {
    var r = e.name,
      a = e.type,
      n = e.tagName.toLowerCase();
    if (void 0 === t && (t = !0), t && (!r || e.disabled || "reset" === a || "button" === a || ("checkbox" === a || "radio" === a) && !e.checked || ("submit" === a || "image" === a) && e.form && e.form.clk !== e || "select" === n && -1 === e.selectedIndex)) return null;
    if ("select" !== n) return q(e).val().replace(m, "\r\n");
    var o = e.selectedIndex;
    if (o < 0) return null;
    for (var i = [], s = e.options, u = "select-one" === a, c = u ? o + 1 : s.length, l = u ? o : 0; l < c; l++) {
      var f = s[l];
      if (f.selected && !f.disabled) {
        var d = (d = f.value) || (f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value);
        if (u) return d;
        i.push(d);
      }
    }
    return i;
  }, q.fn.clearForm = function (e) {
    return this.each(function () {
      q("input,select,textarea", this).clearFields(e);
    });
  }, q.fn.clearFields = q.fn.clearInputs = function (r) {
    var a = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function () {
      var e = this.type,
        t = this.tagName.toLowerCase();
      a.test(e) || "textarea" === t ? this.value = "" : "checkbox" === e || "radio" === e ? this.checked = !1 : "select" === t ? this.selectedIndex = -1 : "file" === e ? /MSIE/.test(navigator.userAgent) ? q(this).replaceWith(q(this).clone(!0)) : q(this).val("") : r && (!0 === r && /hidden/.test(e) || "string" == typeof r && q(this).is(r)) && (this.value = "");
    });
  }, q.fn.resetForm = function () {
    return this.each(function () {
      var t = q(this),
        e = this.tagName.toLowerCase();
      switch (e) {
        case "input":
          this.checked = this.defaultChecked;
        case "textarea":
          return this.value = this.defaultValue, !0;
        case "option":
        case "optgroup":
          var r = t.parents("select");
          return r.length && r[0].multiple ? "option" === e ? this.selected = this.defaultSelected : t.find("option").resetForm() : r.resetForm(), !0;
        case "select":
          return t.find("option").each(function (e) {
            if (this.selected = this.defaultSelected, this.defaultSelected && !t[0].multiple) return t[0].selectedIndex = e, !1;
          }), !0;
        case "label":
          var a = q(t.attr("for")),
            n = t.find("input,select,textarea");
          return a[0] && n.unshift(a[0]), n.resetForm(), !0;
        case "form":
          return "function" != typeof this.reset && ("object" != _typeof(this.reset) || this.reset.nodeType) || this.reset(), !0;
        default:
          return t.find("form,input,label,select,textarea").resetForm(), !0;
      }
    });
  }, q.fn.enable = function (e) {
    return void 0 === e && (e = !0), this.each(function () {
      this.disabled = !e;
    });
  }, q.fn.selected = function (r) {
    return void 0 === r && (r = !0), this.each(function () {
      var e,
        t = this.type;
      "checkbox" === t || "radio" === t ? this.checked = r : "option" === this.tagName.toLowerCase() && (e = q(this).parent("select"), r && e[0] && "select-one" === e[0].type && e.find("option").selected(!1), this.selected = r);
    });
  }, q.fn.ajaxSubmit.debug = !1;
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  a.extend(a.fn, {
    validate: function validate(b) {
      if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
        c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
      }), this.on("submit.validate", function (b) {
        function d() {
          var d, e;
          return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e);
        }
        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1);
      })), c);
    },
    valid: function valid() {
      var b, c, d;
      return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b, b || (d = d.concat(c.errorList));
      }), c.errorList = d), b;
    },
    rules: function rules(b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0],
        k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
      if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
        if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;
          case "remove":
            return c ? (i = {}, a.each(c.split(/\s/), function (a, b) {
              i[b] = f[b], delete f[b];
            }), i) : (delete e[j.name], f);
        }
        return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
          required: h
        }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
          remote: h
        })), g;
      }
    }
  });
  var b = function b(a) {
    return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
  a.extend(a.expr.pseudos || a.expr[":"], {
    blank: function blank(c) {
      return !b("" + a(c).val());
    },
    filled: function filled(c) {
      var d = a(c).val();
      return null !== d && !!b("" + d);
    },
    unchecked: function unchecked(b) {
      return !a(b).prop("checked");
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init();
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c);
    } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c;
      });
    }), b);
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function onfocusin(a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
      },
      onfocusout: function onfocusout(a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
      },
      onkeyup: function onkeyup(b, c) {
        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b);
      },
      onclick: function onclick(a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
      },
      highlight: function highlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
      },
      unhighlight: function unhighlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
      }
    },
    setDefaults: function setDefaults(b) {
      a.extend(a.validator.defaults, b);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}."),
      step: a.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function init() {
        function b(b) {
          var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
          if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), d === this.form) {
            var e = a.data(this.form, "validator"),
              f = "on" + b.type.replace(/^validate/, ""),
              g = e.settings;
            g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
          }
        }
        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c,
          d = this.currentForm,
          e = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            e[c] = b;
          });
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d);
        }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      },
      form: function form() {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();
        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
        return this.valid();
      },
      element: function element(b) {
        var c,
          d,
          e = this.clean(b),
          f = this.validationTargetFor(e),
          g = this,
          h = !0;
        return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
          b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h));
        }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h;
      },
      showErrors: function showErrors(b) {
        if (b) {
          var c = this;
          a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
            return {
              message: a,
              element: c.findByName(b)[0]
            };
          }), this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b);
          });
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      },
      resetForm: function resetForm() {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
        var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(b);
      },
      resetElements: function resetElements(a) {
        var b;
        if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(a) {
        var b,
          c = 0;
        for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
        return c;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide();
      },
      valid: function valid() {
        return 0 === this.size();
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
        } catch (b) {}
      },
      findLastActive: function findLastActive() {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name;
        }).length && b;
      },
      elements: function elements() {
        var b = this,
          c = {};
        return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var d = this.name || a(this).attr("name"),
            e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
          return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0);
        });
      },
      clean: function clean(b) {
        return a(b)[0];
      },
      errors: function errors() {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext);
      },
      resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]);
      },
      reset: function reset() {
        this.resetInternals(), this.currentElements = a([]);
      },
      prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(a) {
        this.reset(), this.toHide = this.errorsFor(a);
      },
      elementValue: function elementValue(b) {
        var c,
          d,
          e = a(b),
          f = b.type,
          g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
        return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c);
      },
      check: function check(b) {
        b = this.validationTargetFor(this.clean(b));
        var c,
          d,
          e,
          f,
          g = a(b).rules(),
          h = a.map(g, function (a, b) {
            return b;
          }).length,
          i = !1,
          j = this.elementValue(b);
        "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);
        for (d in g) {
          e = {
            method: d,
            parameters: g[d]
          };
          try {
            if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
              i = !0;
              continue;
            }
            if (i = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1;
          } catch (k) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k;
          }
        }
        if (!i) return this.objectLength(g) && this.successList.push(b), !0;
      },
      customDataMessage: function customDataMessage(b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
      },
      customMessage: function customMessage(a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b]);
      },
      findDefined: function findDefined() {
        for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
      },
      defaultMessage: function defaultMessage(b, c) {
        "string" == typeof c && (c = {
          method: c
        });
        var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
          e = /\$?\{(\d+)\}/g;
        return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d;
      },
      formatAndAdd: function formatAndAdd(a, b) {
        var c = this.defaultMessage(a, b);
        this.errorList.push({
          message: c,
          element: a,
          method: b.method
        }), this.errorMap[a.name] = c, this.submitted[a.name] = c;
      },
      addWrapper: function addWrapper(a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
      },
      defaultShowErrors: function defaultShowErrors() {
        var a, b, c;
        for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
        if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return a(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(b, c) {
        var d,
          e,
          f,
          g,
          h = this.errorsFor(b),
          i = this.idOrName(b),
          j = a(b).attr("aria-describedby");
        h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
          c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
        })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h);
      },
      errorsFor: function errorsFor(b) {
        var c = this.escapeCssMeta(this.idOrName(b)),
          d = a(b).attr("aria-describedby"),
          e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
      },
      escapeCssMeta: function escapeCssMeta(a) {
        return void 0 === a ? "" : a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function idOrName(a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
      },
      validationTargetFor: function validationTargetFor(b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
      },
      checkable: function checkable(a) {
        return /radio|checkbox/i.test(a.type);
      },
      findByName: function findByName(b) {
        return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
      },
      getLength: function getLength(b, c) {
        switch (c.nodeName.toLowerCase()) {
          case "select":
            return a("option:selected", c).length;
          case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
        }
        return b.length;
      },
      depend: function depend(a, b) {
        return !this.dependTypes[_typeof(a)] || this.dependTypes[_typeof(a)](a, b);
      },
      dependTypes: {
        "boolean": function boolean(a) {
          return a;
        },
        string: function string(b, c) {
          return !!a(b, c.form).length;
        },
        "function": function _function(a, b) {
          return a(b);
        }
      },
      optional: function optional(b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
      },
      startRequest: function startRequest(b) {
        this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0);
      },
      stopRequest: function stopRequest(b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() && 0 === this.pendingRequest ? (a(this.currentForm).trigger("submit"), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      },
      previousValue: function previousValue(b, c) {
        return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, {
            method: c
          })
        });
      },
      destroy: function destroy() {
        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function addClassRules(b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
    },
    classRules: function classRules(b) {
      var c = {},
        d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
      }), c;
    },
    normalizeAttributeRule: function normalizeAttributeRule(a, b, c, d) {
      /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a["date" === b ? "dateISO" : c] = !0);
    },
    attributeRules: function attributeRules(b) {
      var c,
        d,
        e = {},
        f = a(b),
        g = b.getAttribute("type");
      for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
    },
    dataRules: function dataRules(b) {
      var c,
        d,
        e = {},
        f = a(b),
        g = b.getAttribute("type");
      for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
      return e;
    },
    staticRules: function staticRules(b) {
      var c = {},
        d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
    },
    normalizeRules: function normalizeRules(b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];
        if (e.param || e.depends) {
          var f = !0;
          switch (_typeof(e.depends)) {
            case "string":
              f = !!a(e.depends, c.form).length;
              break;
            case "function":
              f = e.depends.call(c, c);
          }
          f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d]);
        }
      }), a.each(b, function (a, d) {
        b[a] = "function" == typeof d && "normalizer" !== a ? d(c) : d;
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]));
      }), a.each(["rangelength", "range"], function () {
        var a;
        b[this] && (Array.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (a = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(a[0]), Number(a[1])]));
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b;
    },
    normalizeRule: function normalizeRule(b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0;
        }), b = c;
      }
      return b;
    },
    addMethod: function addMethod(b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
    },
    methods: {
      required: function required(b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";
        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0;
        }
        return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0;
      },
      email: function email(a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
      },
      url: function url(a, b) {
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a);
      },
      date: function () {
        var a = !1;
        return function (b, c) {
          return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString());
        };
      }(),
      dateISO: function dateISO(a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
      },
      number: function number(a, b) {
        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
      },
      digits: function digits(a, b) {
        return this.optional(b) || /^\d+$/.test(a);
      },
      minlength: function minlength(a, b, c) {
        var d = Array.isArray(a) ? a.length : this.getLength(a, b);
        return this.optional(b) || d >= c;
      },
      maxlength: function maxlength(a, b, c) {
        var d = Array.isArray(a) ? a.length : this.getLength(a, b);
        return this.optional(b) || d <= c;
      },
      rangelength: function rangelength(a, b, c) {
        var d = Array.isArray(a) ? a.length : this.getLength(a, b);
        return this.optional(b) || d >= c[0] && d <= c[1];
      },
      min: function min(a, b, c) {
        return this.optional(b) || a >= c;
      },
      max: function max(a, b, c) {
        return this.optional(b) || a <= c;
      },
      range: function range(a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1];
      },
      step: function step(b, c, d) {
        var e,
          f = a(c).attr("type"),
          g = "Step attribute on input type " + f + " is not supported.",
          h = ["text", "number", "range"],
          i = new RegExp("\\b" + f + "\\b"),
          j = f && !i.test(h.join()),
          k = function k(a) {
            var b = ("" + a).match(/(?:\.(\d+))?$/);
            return b && b[1] ? b[1].length : 0;
          },
          l = function l(a) {
            return Math.round(a * Math.pow(10, e));
          },
          m = !0;
        if (j) throw new Error(g);
        return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m;
      },
      equalTo: function equalTo(b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          a(c).valid();
        }), b === e.val();
      },
      remote: function remote(b, c, d, e) {
        if (this.optional(c)) return "dependency-mismatch";
        e = "string" == typeof e && e || "remote";
        var f,
          g,
          h,
          i = this.previousValue(c, e);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
          url: d
        } || d, h = a.param(a.extend({
          data: b
        }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: g,
          context: f.currentForm,
          success: function success(a) {
            var d,
              g,
              h,
              j = a === !0 || "true" === a;
            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
              method: e,
              parameters: b
            }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j);
          }
        }, d)), "pending");
      }
    }
  });
  var c,
    d = {};
  return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, c) {
    var e = a.port;
    "abort" === a.mode && (d[e] && d[e].abort(), d[e] = c);
  }) : (c = a.ajax, a.ajax = function (b) {
    var e = ("mode" in b ? b : a.ajaxSettings).mode,
      f = ("port" in b ? b : a.ajaxSettings).port;
    return "abort" === e ? (d[f] && d[f].abort(), d[f] = c.apply(this, arguments), d[f]) : c.apply(this, arguments);
  }), a;
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], a) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  return a.extend(a.validator.messages, {
    required: "Это поле необходимо заполнить.",
    remote: "Пожалуйста, введите правильное значение.",
    email: "Пожалуйста, введите корректный адрес электронной почты.",
    url: "Пожалуйста, введите корректный URL.",
    date: "Пожалуйста, введите корректную дату.",
    dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
    number: "Пожалуйста, введите число.",
    digits: "Пожалуйста, вводите только цифры.",
    creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
    equalTo: "Пожалуйста, введите такое же значение ещё раз.",
    extension: "Пожалуйста, выберите файл с правильным расширением.",
    maxlength: a.validator.format("Пожалуйста, введите не больше {0} символов."),
    minlength: a.validator.format("Пожалуйста, введите не меньше {0} символов."),
    rangelength: a.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
    range: a.validator.format("Пожалуйста, введите число от {0} до {1}."),
    max: a.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
    min: a.validator.format("Пожалуйста, введите число, большее или равное {0}.")
  }), a;
});
"use strict";

$(function () {
  var showItem = function showItem(target) {
    var $target = $(target);
    var mobilemenu = $target.parents('.mobilemenu').first();
    var overflow = mobilemenu.data('overflow') || 'scroll';
    mobilemenu.isDowndrop ? $target.closest("li").hasClass("expanded") ? $target.closest("li").removeClass("expanded") : $target.closest("li").addClass("expanded") : ($target.closest("li").addClass("expanded"), function () {
      if (!mobilemenu.isDowndrop) {
        var e = mobilemenu.find(".scroller").first(),
          t = mobilemenu.find(".wrap").first();
        if (t.length) {
          var a = t.data("params"),
            i = mobilemenu.find(".expanded>.dropdown").eq(a.depth);
          if (i.length) {
            a.scroll[a.depth] = parseInt(mobilemenu.scrollTop()), a.height[a.depth + 1] = Math.max(i.height(), a.depth ? mobilemenu.find(".expanded>.dropdown").eq(a.depth - 1).height() : t.height()), e.css("height", a.height[a.depth + 1] + "px"), ++a.depth, t.css("transform", "translateX(" + -100 * a.depth + "%)");
            if (overflow === 'scroll') {
              setTimeout(function () {
                mobilemenu.animate({
                  scrollTop: 0
                }, 200);
              }, 100);
            }
            var o = i.height();
            setTimeout(function () {
              o ? e.css("height", o + "px") : e.css("height", "");
            }, 200);
          }
          t.data("params", a);
        }
      }
    }());
  };
  $(".mobilemenu").each(function () {
    var mobilemenu = $(this);

    // дефолтные настройки для скрола
    mobilemenu.find(".wrap").first().data("params", {
      depth: 0,
      scroll: {},
      height: {}
    });

    // дополнительная разметка
    mobilemenu.find(".dropdown").each(function () {
      var $this = $(this);
      var $parent = $this.prev();
      var $grandparent = $this.parent().parent().prev();
      $this.prepend('<li class="menu_title"><a href="' + $parent.attr('href') + '">' + $parent.text() + '</a></li>');
      $this.prepend('<li class="menu_back"><a href="#" rel="nofollow"><i class="uk-icon-angle-left svg"></i> ' + ($grandparent.length ? $grandparent.text() : 'Каталог') + '</a></li>');
    });
    $(".menu a, .social-icons a", mobilemenu).click(function (event) {
      if ($(this).hasClass("parent")) {
        event.preventDefault();
        showItem(this);
      }
    });
    $(".dropdown .menu_back", mobilemenu).click(function (e) {
      e.preventDefault();
      var t = $(this);
      !function () {
        if (!mobilemenu.isDowndrop) {
          var e = mobilemenu.find(".scroller").first(),
            t = mobilemenu.find(".wrap").first();
          if (t.length) {
            var a = t.data("params");
            if (0 < a.depth) {
              var i = mobilemenu.find(".expanded>.dropdown").eq(a.depth - 1);
              if (i.length) {
                e.css("height", a.height[a.depth] + "px"), --a.depth, t.css("transform", "translateX(" + -100 * a.depth + "%)"), setTimeout(function () {
                  mobilemenu.animate({
                    scrollTop: a.scroll[a.depth]
                  }, 200);
                }, 100);
                var o = !!a.depth && mobilemenu.find(".expanded>.dropdown").eq(a.depth - 1).height();
                setTimeout(function () {
                  o ? e.css("height", o + "px") : e.css("height", "");
                }, 200);
              }
            }
            t.data("params", a);
          }
        }
      }(), setTimeout(function () {
        t.closest(".expanded").removeClass("expanded");
      }, 400);
    });
  });
  $(".left-menu .parent-active").each(function () {
    // $(this).click();
    showItem(this);
  });
  var offcanvasInitialExecuted = false;
  $('#uk-offcanvas').on('show.uk.offcanvas', function () {
    if (!offcanvasInitialExecuted) {
      $(".parent-active", this).each(function () {
        // $(this).click();
        showItem(this);
      });
      offcanvasInitialExecuted = true;
    }
  });
});
"use strict";

// тригерим ресайз окна для обновления закрепленных блоков
$('[data-uk-switcher]').on('show.uk.switcher', function () {
  $(window).trigger('resize');
});
$(document).on('af_complete', function (e, response) {
  response.form.parents('.uk-modal').find('.uk-modal-close').click();
});

/* Лайтбокс */
$('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".JPG"], a[href$=".png"], a[href$=".gif"]').not('[target="_blank"]').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
});
$(document).on('click', '.comment-image', function () {
  $.magnificPopup.open({
    items: {
      src: $(this).attr('href')
    },
    type: 'image'
  });
  return false;
});
$('.js-popup-map').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});
$('.js-popup-inline').magnificPopup({
  type: 'inline'
});
$('.js-image-comment').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
});
$('.js-image-lightbox').magnificPopup({
  type: 'image',
  image: {
    markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '<div class="mfp-share">Поделиться в соцсетях: <span class="js-mfp-share"></span></div>' + '</div>' + '<div class="mfp-comments"></div>' + '</div>'
  },
  gallery: {
    enabled: true
  },
  alignTop: true,
  //closeBtnInside: false,
  callbacks: {
    change: function change() {
      var popup = this,
        id = popup.currItem.el.data('id'),
        share = popup.currItem.el.data('share');
      popup.content.find('.js-mfp-share').html($(share).clone(true));
      $.post(document.location.href, {
        action: 'comments',
        thread: 'file-' + id
      }, function (response) {
        popup.content.find('.mfp-comments').html(response);
      });
    }
  }
});
$('.js-video-lightbox').magnificPopup({
  type: 'inline',
  gallery: {
    enabled: true
  },
  alignTop: true,
  callbacks: {
    change: function change() {
      var popup = this,
        id = popup.currItem.el.data('id');
      $.post(document.location.href, {
        action: 'comments',
        thread: 'file-' + id
      }, function (response) {
        popup.content.find('.mfp-comments').html(response);
      });
    }
  }
});
var hash_video = location.hash.match(new RegExp('video=([^&]*)'));
if (hash_video) {
  $('.js-video-lightbox[data-id="' + hash_video[1] + '"]').click();
}
var hash_image = location.hash.match(new RegExp('image=([^&]*)'));
if (hash_image) {
  $('.js-image-lightbox[data-id="' + hash_image[1] + '"]').click();
}
$('.js-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: '<button class="slider__prev"><i class="uk-icon-angle-left"></i></button>',
  nextArrow: '<button class="slider__next"><i class="uk-icon-angle-right"></i></button>',
  dots: true
});
$('.js-about-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true
});
$('.js-seeAlso-carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '.js-seeAlso-previous',
  nextArrow: '.js-seeAlso-next',
  responsive: [{
    breakpoint: 960,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
$('.js-viewed-carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '.js-viewed-previous',
  nextArrow: '.js-viewed-next',
  responsive: [{
    breakpoint: 960,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
$('.js-actions-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true
});
$('.js-left-menu-toggle').click(function () {
  //var height = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
  $(this).toggleClass('opened');
  $(this).nextAll('ul').animate({
    left: '0',
    right: '0'
  });
});
$('.left-menu .parent').click(function () {
  console.log('scroll top');
  $('html, body').animate({
    scrollTop: 0
  }, 500);
});
$(document).ready(function () {
  $('.slideout-menu__lvl1 > .js-left-menu-toggle').click(function () {
    $('.slideout-menu').toggleClass('slideout-sticky');
  });
});
$(document).ready(function () {
  $('.slideout-menu__lvl2 > .js-left-menu-toggle').click(function () {
    $('.slideout-menu').toggleClass('slideout-sticky-lvl');
  });
});
$('.js-right-menu-toggle').on('click', function () {
  $(this).parent('.touch').animate({
    left: '100%',
    right: '-100%'
  });
});
$(document).ready(function () {
  $('.js-right-menu-toggle').click(function () {
    $('.slideout-menu').removeClass('slideout-sticky');
  });
});
$(document).ready(function () {
  $('.js-right-menu-toggle').click(function () {
    $('.slideout-menu').removeClass('slideout-sticky-lvl');
  });
});

// смена внешней ссылки при выборе селекта
$('.js-contacts-select').each(function () {
  var $select = $(this),
    uri = $select.find('option:selected').data('uri'),
    target = $select.data('target');
  $(target).attr('href', uri).show();
  $select.change(function () {
    var uri = $(this).find('option:selected').data('uri'),
      target = $(this).data('target');
    $(target).attr('href', uri);
  });
});
$('.js-input-number-up').click(function () {
  var input = $(this).parent('.js-input-number').find('input');
  var val = Number(input.val()) + 1;
  input.val(val);
  input.change();
});
$('.js-input-number-down').click(function () {
  var input = $(this).parent('.js-input-number').find('input');
  var val = Number(input.val()) - 1;
  if (!input.attr('min') || val >= input.attr('min')) {
    input.val(val);
    input.change();
  }
});

/** Валидация и отправка форм **/
$('.js-form').each(function () {
  $(this).validate({
    submitHandler: function submitHandler(form) {
      var target = $(form).data('target');
      $(form).ajaxSubmit({
        url: location.href,
        type: 'POST',
        dataType: 'html',
        success: function success(response, statusText, xhr, $form) {
          var $target = $(document.createElement('div')).append(response).find(target);
          $(target).html($target.html());
        }
      });
    }
  });
});
$('.js-form-validate').each(function () {
  $(this).validate();
});
$('#msOrder').validate({
  groups: {
    order_receiver: 'receiver email phone conditions',
    order_address: 'index region city street building room'
  },
  errorPlacement: function errorPlacement(error, element) {
    switch (element.attr('name')) {
      case 'index':
      case 'region':
      case 'city':
      case 'street':
      case 'building':
      case 'room':
        error.insertAfter('#order-address-error');
        break;
      case 'receiver':
      case 'email':
      case 'phone':
      case 'conditions':
        error.insertAfter('#order-receiver-error');
        break;
      default:
        error.insertAfter(element);
        break;
    }
  },
  messages: {
    index: {
      required: 'Заполните все поля адреса доставки.'
    },
    region: {
      required: 'Заполните все поля адреса доставки.'
    },
    city: {
      required: 'Заполните все поля адреса доставки.'
    },
    street: {
      required: 'Заполните все поля адреса доставки.'
    },
    building: {
      required: 'Заполните все поля адреса доставки.'
    },
    room: {
      required: 'Заполните все поля адреса доставки.'
    },
    receiver: {
      required: 'Заполните обязательные поля.'
    },
    email: {
      required: 'Заполните обязательные поля.'
    },
    phone: {
      required: 'Заполните обязательные поля.'
    },
    conditions: {
      required: 'Согласитесь с условиями обработки персональных данных'
    }
  }
});

/** Видео **/
$('.js-video').each(function () {
  $(this).data('videojs', videojs(this));
});
$('.js-video-modal').each(function () {
  $(this).data('videojs', videojs(this, {
    width: $(window).width() > 1000 ? 1000 : $(window).width() - 10
  }));
});

/** Формы загрузки файлов **/
$('.js-download-popup').magnificPopup({
  type: 'inline',
  midClick: true
});
$('.js-insert-file').each(function (i, wrapper) {
  var $wrapper = $(wrapper);
  $wrapper.find('.ms2galleryform-file-image-wrapper').append('<span>Вставить</span>');
  $wrapper.on('click', '.ms2galleryform-file-link', function () {
    var target = $(this).parents('.js-insert-file').data('target');
    var link = $(this).attr('href');
    var name = $(this).attr('title');
    $.markItUp({
      target: target,
      replaceWith: '<a href="' + link + '" class="comment-image" target="_blank"><img src="' + link + '" alt="' + name + '"></a>'
    });
    UIkit.modal(wrapper).hide();
    return false;
  });
});
$(document).on('click', '.msbuyoneclick', function () {
  var id = $(this).data('id');
  $.ajax({
    type: 'POST',
    url: 'template/buyoneclick.php',
    data: {
      action: 'product',
      id: id
    },
    success: function success(response) {
      var modal = UIkit.modal($(response).appendTo('body'), {});
      modal.on('hide.uk.modal', function () {
        if (modal.persist) {
          modal.persist.appendTo(modal.persist.data('modalPersistParent'));
          modal.persist = false;
        }
        modal.element.remove();
      });
      modal.show();
      modal.find('form').each(function () {
        var form = $(this);
        form.submit(function () {
          $.ajax({
            type: 'POST',
            url: 'template/buyoneclick.php',
            data: form.serialize(),
            success: function success(response) {
              response = $.parseJSON(response);
              if (response.redirect) {
                window.location = response.redirect;
              } else if (response.success) {
                UIkit.notify('<b>Заказ успешно оформлен.</b><br> Наши менеджеры свяжутся с Вами.', {
                  status: 'success'
                });
                modal.hide();
              } else {
                UIkit.notify(response.message, {
                  status: 'danger',
                  timeout: 3000
                });
              }
            }
          });
          return false;
        });
      });
    }
  });
  return false;
});
$(document).on('click', '[data-add-remains]', function (e) {
  e.preventDefault();
  var url = $(this).data('add-remains');
  if (url) {
    $('#under-order [name="url"]').val(url);
  }
  var modal = UIkit.modal('#under-order');
  if (modal.isActive()) {
    modal.hide();
  } else {
    modal.show();
  }
  return false;
});
$(document).on('click', '[data-add-options]', function (e) {
  e.preventDefault();
  var $modal = $($(this).data('add-options'));
  if ($modal.first().parent().prop('tagName') !== 'BODY') {
    $modal.appendTo('body');
  }
  var modal = UIkit.modal($modal, {
    center: true,
    container: 'body'
  });
  $modal.on({
    'show.uk.modal': optionsWidth
  });
  if (modal.isActive()) {
    modal.hide();
  } else {
    modal.show();
  }
  return false;
});
$('.auth-button-restore').click(function (e) {
  $('#office-login-form-password').val('');
  $('#office-auth-login').toggleClass('auth-form-restore');
  return false;
});
$('#cheaper').on('click', '.cheaper-plus', function () {
  var row = $(this).parents('.cheaper-address-row'),
    clone = row.clone();
  clone.find('input').val('');
  row.after(clone);
});
$('#cheaper').on('click', '.cheaper-minus', function () {
  var row = $(this).parents('.cheaper-address-row');
  row.remove();
});
$('.js-home-catalog').click(function (e) {
  if ($(window).width() < 960) {
    UIkit.offcanvas.show('#uk-offcanvas');
    return false;
  }
});
$(document).on('change', '#mse2_filters select', function () {
  $('html, body').animate({
    scrollTop: /*$("#pdopage").offset().top || */0
  }, 1000);
});

/**
 * Виртуальная форма купона в корзине
 **/
var discount_field = $('#msOrder input[name="discount_code"]');
var discount_form = $('#msCartCoupon');
if (Boolean(discount_field.val())) {
  discount_form.addClass('cart-coupon--applied');
}
discount_form.on('submit', function (e) {
  e.preventDefault();
  var value = $('[name="discount_code"]', this).val();
  discount_field.val(value);
  discount_field.trigger('change');
})

/**
 * Скрытие полей адреса и контактов
 **/;
(function () {
  var deliveries = $('[name="delivery"]');
  var deliveries_inputs = $('#msOrder input');
  deliveries_inputs.on('change', function () {
    var delivery = parseInt(deliveries.filter(':checked').val());

    // if ([1, 3].indexOf(delivery) !== -1) {
    //     $('#field-passport').hide();
    // } else {
    //     $('#field-passport').show();
    // }
    if ([1, 4, 6, 7, 9, 10, 11, 13].indexOf(delivery) !== -1) {
      $('#field-index').hide();
    } else {
      $('#field-index').show();
    }
    if ([1, 4].indexOf(delivery) !== -1) {
      $('#field-region').hide();
    } else {
      $('#field-region').show();
    }
    // if (value == 1) {
    //     $('#field-city').hide();
    // } else {
    //     $('#field-city').show();
    // }
    if ([1, 4].indexOf(delivery) !== -1) {
      $('#field-street').hide();
    } else {
      $('#field-street').show();
    }
    if ([1, 4].indexOf(delivery) !== -1) {
      $('#field-room').hide();
    } else {
      $('#field-room').show();
    }
    if ([1, 4].indexOf(delivery) !== -1) {
      $('#field-building').hide();
    } else {
      $('#field-building').show();
    }
  });
})();
var cartSwitcher = UIkit.switcher('#cart-tabs', {
  connect: '#cart-switcher',
  active: /\#msOrder/.test(document.location.href) ? 1 : 0,
  swiping: false
});
$('#cart-tabs').on('show.uk.switcher', function (event, area) {
  if ($(miniShop2.Order.paymentInput, miniShop2.Order.order).filter(':visible:checked').length == 0) {
    $(miniShop2.Order.paymentInput, miniShop2.Order.order).filter(':visible:first').trigger('click');
  }
});
$('.js-cart-submit').click(function () {
  cartSwitcher.show(1);
  // var headerHeight = $(window).width() < 960 ? 77 : 133;
  // $(".content").offset().top - headerHeight
  $([document.documentElement, document.body]).animate({
    scrollTop: 0
  }, 1000);
});
$('.js-header-modern-catalog').click(function () {
  if ($(window).width() < 960) {
    UIkit.offcanvas.show('#uk-offcanvas');
    return false;
  }
});

/**
 * Переключатель в контактах
 **/
var switcherContactsTabsActive = $('#switcher-contacts-content>li').has('li.active').index();
UIkit.switcher('#switcher-contacts-tabs', {
  active: switcherContactsTabsActive === -1 ? 0 : switcherContactsTabsActive,
  connect: '#switcher-contacts-content',
  swiping: false
});
(function () {
  var prevScroll = window.scrollY;
  var delay = 30;
  var catalog = document.querySelector('.fixed-catalog');
  var scrolltop = document.querySelector('.scrolltop');
  window.addEventListener('scroll', function (e) {
    if (window.scrollY < prevScroll) {
      delay = 30;
      catalog.classList.add('fixed-catalog_visible');
      scrolltop.classList.add('scrolltop_visible');
    } else {
      if (delay <= 0) {
        catalog.classList.remove('fixed-catalog_visible');
        scrolltop.classList.remove('scrolltop_visible');
      } else {
        delay--;
      }
    }
    prevScroll = window.scrollY;
  });
})();
$('.ajax_form').append('<input type="text" name="org" value="" class="_org" style="position:absolute; visibility:hidden; height: 0; width: 0; padding: 0; border:none;"/>');
var contactsSelect = document.querySelector('.js-contacts-select');
if (contactsSelect) {
  new Choices(contactsSelect);
}
function optionsWidth() {
  var groups = $('.u-product-options__items');
  groups.each(function (i1, group) {
    var items = $(group).find('.u-product-options__item');
    var minWidth = 0;
    items.each(function (i2, item) {
      if ($(item).outerWidth() > minWidth) {
        minWidth = $(item).outerWidth();
      }
    });
    if (minWidth > 0) {
      var perRow = Math.floor($(group).outerWidth() / minWidth);
      var normalPerRow = Math.ceil(items.length / Math.ceil(items.length / perRow));
      var maxWidth = $(group).outerWidth() / normalPerRow;
      items.css('width', maxWidth);
    }
  });
}
$('.js-share-dropdown').each(function () {
  var dropdown = UIkit.dropdown(this, {
    remaintime: 0,
    mode: 'click'
  });
  $(window).scroll(function () {
    dropdown.hide();
  });
});
$('.u-rating__add').click(function () {
  if ($('#comment-form').is(':visible')) {
    $(this).removeClass('u-rating__add_active');
    $('#comment-form').slideUp(500, function () {
      // тригерим ресайз окна для обновления закрепленных блоков
      $(window).trigger('resize');
    });
  } else {
    $(this).addClass('u-rating__add_active');
    $('#comment-form').slideDown(500, function () {
      // тригерим ресайз окна для обновления закрепленных блоков
      $(window).trigger('resize');
    });
  }
});
$('[data-uk-switcher]').on('show.uk.switcher', function () {
  $('.u-rating__add').removeClass('u-rating__add_active');
  $('#comment-form').slideUp(500);
});
$(function () {
  var deliveries = [{
    id: 1,
    label: 'Самовывоз',
    payments: [2]
  }, {
    id: 2,
    label: 'ТК СДЭК по Москве',
    payments: [1, 3]
  }, {
    id: 3,
    label: 'ТК СДЭК по Москве (за МКАД)',
    payments: [1, 3]
  }, {
    id: 4,
    label: 'Почта России',
    payments: [1, 3]
  }, {
    id: 5,
    label: 'Транспортные компании',
    payments: [1]
  }, {
    id: 6,
    label: 'ТК СДЭК (до пункта выдачи)',
    payments: [1, 3]
  }, {
    id: 7,
    label: 'ТК СДЭК (до двери получателя)',
    payments: [1, 3]
  }];
  var payments = [{
    id: 1,
    label: 'Онлайн оплата'
  }, {
    id: 2,
    label: 'Оплата в магазине'
  }, {
    id: 3,
    label: 'Оплата при получении'
  }];
  $('.js-calc').each(function (i, form) {
    var cityInput = form.querySelector('[name="city"]');
    var cityLabel = form.querySelector('.js-calc-city-name');
    var citySubmit = form.querySelector('.js-calc-city-submit');
    var citySelect = form.querySelector('[name="autocomplete"]');
    var deliverySelect = form.querySelector('[name="delivery"]');
    var deliveryChoices = new Choices(deliverySelect, {
      searchEnabled: false,
      noChoicesText: 'Укажите город'
    });
    var paymentSelect = form.querySelector('[name="payment"]');
    var paymentChoices = new Choices(paymentSelect, {
      searchEnabled: false,
      noChoicesText: 'Выберите способ доставки'
    });
    var errorBox = form.querySelector('.js-calc-error');
    var resultBox = form.querySelector('.js-calc-result');
    var resultDelivery = form.querySelector('.js-calc-result-delivery');
    var resultTime = form.querySelector('.js-calc-result-time');
    var resultPrice = form.querySelector('.js-calc-result-price');
    var costInput = form.querySelector('[name="cost"]');
    var calculateSubmit = form.querySelector('.js-calc-calculate');
    var setCity = function setCity(city) {
      if (city.indexOf('г ') === 0) {
        city = city.substring(2);
      }
      cityLabel.innerHTML = cityInput.value = city;
      var idx = [];
      if (['Воронеж', 'Курск'].indexOf(city) !== -1) {
        idx = [1];
      } else if (['Москва'].indexOf(city) !== -1) {
        idx = [1, 2, 3];
      } else {
        idx = [4, 5, 6, 7];
      }
      // способы доставки в соответствии с выбранным городом
      deliveryChoices.setChoices(deliveries.filter(function (row) {
        return idx.indexOf(row.id) !== -1;
      }).map(function (row, index) {
        return {
          value: row.id,
          label: row.label,
          selected: index === 0
        };
      }), 'value', 'label', true);
      deliverySelect.dispatchEvent(new Event('change'));
    };
    var onChangeDelivery = function onChangeDelivery(e) {
      var item = deliveries.find(function (row) {
        return row.id === parseInt(e.target.value);
      });
      // способы оплаты в соответствии с выбранным способом доставки
      paymentChoices.setChoices(payments.filter(function (row) {
        return item.payments.indexOf(row.id) !== -1;
      }).map(function (row, index) {
        return {
          value: row.id,
          label: row.label,
          selected: index === 0
        };
      }), 'value', 'label', true);
    };
    var calculate = function calculate(e) {
      e.preventDefault();
      var errors = [];
      if (!cityInput.value) {
        errors.push('Укажите город.');
      }
      if (!costInput.value) {
        errors.push('Укажите стоимость заказа.');
      }
      if (!deliverySelect.value) {
        errors.push('Укажите способ доставки.');
      }
      if (!paymentSelect.value) {
        errors.push('Укажите способ оплаты.');
      }
      if (errors.length > 0) {
        $(resultBox).hide();
        $(errorBox).html(errors.join('<br />')).show();
        return false;
      } else {
        $(resultBox).show();
        $(errorBox).hide();
      }
      var payment = payments.find(function (row) {
        return row.id === parseInt(paymentSelect.value);
      });
      var delivery = deliveries.find(function (row) {
        return row.id === parseInt(deliverySelect.value);
      });
      resultDelivery.innerHTML = delivery.label;
      if (['Воронеж', 'Курск'].indexOf(cityInput.value) !== -1) {
        resultTime.innerHTML = 'Сегодня';
        resultPrice.innerHTML = 'Бесплатно';
      } else if (['Москва'].indexOf(cityInput.value) !== -1) {
        if (delivery.id === 1) {
          if (payment.id === 2) {
            resultTime.innerHTML = 'Сегодня';
            resultPrice.innerHTML = 'Бесплатно';
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else if ([2, 3].indexOf(delivery.id) !== -1) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
              resultPrice.innerHTML = '350 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
              resultPrice.innerHTML = '300 руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
              resultPrice.innerHTML = '400 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 400) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
              resultPrice.innerHTML = '300 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 300) + ' руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
              resultPrice.innerHTML = '0 + ' + costInput.value * 0.04 + ' = ' + costInput.value * 0.04 + ' руб.';
            }
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else {
          errors.push('Неверный способ доставки.');
        }
      } else {
        if (delivery.id === 4) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '4-6 дней';
              resultPrice.innerHTML = '300 руб.';
            } else if (costInput.value >= 5000) {
              resultTime.innerHTML = '4-6 дней';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '4-6 дней';
              resultPrice.innerHTML = '300 + ' + costInput.value * 0.08 + ' = ' + (costInput.value * 0.08 + 300) + ' руб.';
            } else if (costInput.value >= 5000) {
              resultTime.innerHTML = '4-6 дней';
              resultPrice.innerHTML = '0 + ' + costInput.value * 0.08 + ' = ' + costInput.value * 0.08 + ' руб.';
            }
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else if (delivery.id === 5) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '3-5 дней';
              resultPrice.innerHTML = '400 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 15000) {
              resultTime.innerHTML = '3-5 дней';
              resultPrice.innerHTML = '350 руб.';
            } else if (costInput.value >= 15000) {
              resultTime.innerHTML = '3-5 дней';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else if (delivery.id === 6) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '400 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '350 руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '500 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 500) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '400 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 400) + ' руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '0 + ' + costInput.value * 0.04 + ' = ' + costInput.value * 0.04 + ' руб.';
            }
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else if (delivery.id === 7) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '900 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '850 руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '500 руб.';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '1000 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 1000) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '900 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 900) + ' руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '500 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 500) + ' руб.';
            }
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else {
          errors.push('Неверный способ доставки.');
        }
      }
    };
    $(citySubmit).click(function (e) {
      return setCity(citySelect.value);
    });
    $(citySelect).suggestions({
      token: '4b25f9cb98a44de7c49207580b8644f4c4cfa2ba',
      type: 'ADDRESS',
      hint: false,
      scrollOnFocus: false,
      bounds: 'city',
      constraints: {
        label: '',
        locations: {
          city_type_full: 'город'
        }
      },
      onSelect: function onSelect(e) {
        return setCity(e.data.city);
      }
    });
    $(deliverySelect).change(onChangeDelivery);
    $(form).submit(calculate);
    setCity(form.dataset.city || 'Москва'); // Москва по умолчанию
    // $(paymentSelect).change(calculate)
    // $(deliverySelect).change(calculate)
    // $(costInput).change(calculate)
  });
});

/*$('.brands').each(function (wrapper) {
    const maxHeight = function () {
        return window.matchMedia("(max-width: 640px)").matches ? '100px' : '50px'
    }

    let $body = $('.brands__body', wrapper);
    let $more = $('.brands__more', wrapper);
    let $shadow = $('.brands__shadow', wrapper);
    let height = $body.height();
    let opened = false;

    $body.css('height', maxHeight());

    $more.click(function () {
        if (window.matchMedia("(max-width: 640px)").matches) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $body.offset().top - 80
            }, 1000);
        }

        if (opened) {
            opened = false;
            $body.css('height', maxHeight());
            $more.html('Показать все');
            $shadow.show();
        } else {
            opened = true;
            $body.css('height', height);
            $more.html('Скрыть');
            $shadow.hide();
        }
    });
});*/

$('.js-categories-slider').slick({
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  variableWidth: true,
  swipeToSlide: true,
  touchThreshold: 15
});
$('.js-detail-gallery').each(function () {
  var $wrapper = $(this);
  var $thumbs = $('.js-detail-gallery-thumbs', this);
  var $main = $('.js-detail-gallery-main', this);
  var perView = Math.ceil(this.offsetWidth / 64);
  var windowPerView = Math.ceil(window.innerWidth / 64);

  // Product Gallery
  var galleryThumbs = new Swiper($thumbs[0], {
    allowTouchMove: false,
    spaceBetween: 4,
    slidesPerView: perView,
    freeMode: true,
    loopedSlides: 6,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true
  });
  var galleryTop = new Swiper($main[0], {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 6,
    //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });
  $('.js-detail-gallery-main', this).on('click', '.swiper-slide', function () {
    $wrapper.addClass('detail-gallery_lightbox');
    galleryTop.update();
    galleryThumbs.update();
    galleryThumbs.params.slidesPerView = windowPerView;
    galleryThumbs.update();
    galleryTop.autoplay.stop();
  });
  $('.js-detail-gallery-button', this).click(function () {
    $wrapper.removeClass('detail-gallery_lightbox');
    galleryTop.update();
    galleryThumbs.update();
    galleryThumbs.params.slidesPerView = perView;
    galleryThumbs.update();
    galleryTop.autoplay.start();
  });
});
$('.js-home-slider').each(function () {
  var $wrapper = $(this);
  var $thumbs = $('.js-home-slider-thumbs', this);
  var $main = $('.js-home-slider-main', this);
  var galleryThumbs = new Swiper($thumbs[0], {
    direction: 'vertical',
    allowTouchMove: false,
    slidesPerView: 3,
    loop: true,
    loopedSlides: 6,
    spaceBetween: 10,
    centeredSlides: true
  });
  var galleryTop = new Swiper($main[0], {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 6,
    //looped slides should be the same
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  });
  galleryTop.on('slideChange', function () {
    galleryThumbs.slideTo(galleryTop.activeIndex);
  });
});
function initProductsImageOnDesktop() {
  $(document).on('mouseenter', '.products-image', function () {
    this.classList.add('products-image_hover');
  });
  $(document).on('mouseleave', '.products-image', function () {
    this.classList.remove('products-image_hover');
  });
}
function initProductsImageOnMobile() {
  var hoveredItem = null;
  document.addEventListener('touchstart', function (e) {
    if (hoveredItem && !hoveredItem.contains(e.target)) {
      $(hoveredItem).removeClass('products-image_hover');
      hoveredItem = null;
    }
  });
  $(document).on('touchstart', '.products-image', function () {
    $('.products-image').data('canClick', false);
    if (hoveredItem == this) {
      $(this).data('canClick', true);
    }
    $('.products-image').removeClass('products-image_hover');
    $(this).addClass('products-image_hover');
    hoveredItem = this;
  });
  $(document).on('click', '.products-image', function (e) {
    if (!$(this).data('canClick')) {
      e.preventDefault();
    }
  });
}
if (window.matchMedia('(min-width: 768px)').matches) {
  initProductsImageOnDesktop();
} else {
  initProductsImageOnMobile();
}
function initFeedbackMessageOnDesktop() {
  $('.u-feedback-message').on('mouseenter', function () {
    this.classList.add('u-feedback-message_active');
  });
  $('.u-feedback-message').on('mouseleave', function () {
    this.classList.remove('u-feedback-message_active');
  });
}
function initFeedbackMessageOnMobile() {
  $('.u-feedback-message').on('click', function () {
    var el = this;
    el.classList.add('u-feedback-message_active');
    var outsideClick = function outsideClick(e) {
      var itsChildren = el.contains(e.target);
      if (e.target != el && !itsChildren) {
        el.classList.remove('u-feedback-message_active');
        document.removeEventListener('click', outsideClick);
      }
    };
    document.addEventListener('click', outsideClick);
  });
}
if (window.matchMedia('(min-width: 768px)').matches) {
  initFeedbackMessageOnDesktop();
} else {
  initFeedbackMessageOnMobile();
}