var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
    
function scrollToView(a) {
        var b = a.offset().top
          , c = $(window).scrollTop()
          , d = c + window.innerHeight;
        return b < c || b > d ? ($("html,body").animate({
            scrollTop: a.offset().top - 90
        }, 400),
        !1) : !0
    }
    function addToMailingList() {
        var a = $("#ipt-mailing-list").val();
        return a && a.length > 0 && ($("#mailing-list").html('<br><p class="subscribe" style="text-align:center;width:100%;margin-top:10px;margin-bottom:3px;font-weight:bold">Thanks for subscribing!</p><br>'),
        $.getScript("/mailing_list/add?email=" + a)),
        !1
    }
    (function(a, b) {
        function h(a) {
            var b = g[a] = {}, c, d;
            a = a.split(/\s+/);
            for (c = 0,
            d = a.length; c < d; c++)
                b[a[c]] = !0;
            return b
        }
        function l(a, c, d) {
            if (d === b && a.nodeType === 1) {
                var e = "data-" + c.replace(k, "-$1").toLowerCase();
                d = a.getAttribute(e);
                if (typeof d == "string") {
                    try {
                        d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                    } catch (g) {}
                    f.data(a, c, d)
                } else
                    d = b
            }
            return d
        }
        function m(a) {
            for (var b in a) {
                if (b === "data" && f.isEmptyObject(a[b]))
                    continue;
                if (b !== "toJSON")
                    return !1
            }
            return !0
        }
        function n(a, b, c) {
            var d = b + "defer"
              , e = b + "queue"
              , g = b + "mark"
              , h = f._data(a, d);
            h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
                !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0),
                h.fire())
            }, 0)
        }
        function J() {
            return !1
        }
        function K() {
            return !0
        }
        function S(a) {
            return !a || !a.parentNode || a.parentNode.nodeType === 11
        }
        function T(a, b, c) {
            b = b || 0;
            if (f.isFunction(b))
                return f.grep(a, function(a, d) {
                    var e = !!b.call(a, d, a);
                    return e === c
                });
            if (b.nodeType)
                return f.grep(a, function(a, d) {
                    return a === b === c
                });
            if (typeof b == "string") {
                var d = f.grep(a, function(a) {
                    return a.nodeType === 1
                });
                if (O.test(b))
                    return f.filter(b, d, !c);
                b = f.filter(b, d)
            }
            return f.grep(a, function(a, d) {
                return f.inArray(a, b) >= 0 === c
            })
        }
        function U(a) {
            var b = V.split("|")
              , c = a.createDocumentFragment();
            if (c.createElement)
                while (b.length)
                    c.createElement(b.pop());
            return c
        }
        function bi(a, b) {
            return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }
        function bj(a, b) {
            if (b.nodeType !== 1 || !f.hasData(a))
                return;
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle,
                h.events = {};
                for (c in i)
                    for (d = 0,
                    e = i[c].length; d < e; d++)
                        f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({}, h.data))
        }
        function bk(a, b) {
            var c;
            if (b.nodeType !== 1)
                return;
            b.clearAttributes && b.clearAttributes(),
            b.mergeAttributes && b.mergeAttributes(a),
            c = b.nodeName.toLowerCase(),
            c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked),
            b.value !== a.value && (b.value = a.value)),
            b.removeAttribute(f.expando),
            b.removeAttribute("_submit_attached"),
            b.removeAttribute("_change_attached")
        }
        function bl(a) {
            return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
        }
        function bm(a) {
            if (a.type === "checkbox" || a.type === "radio")
                a.defaultChecked = a.checked
        }
        function bn(a) {
            var b = (a.nodeName || "").toLowerCase();
            b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
        }
        function bo(a) {
            var b = c.createElement("div");
            return bh.appendChild(b),
            b.innerHTML = a.outerHTML,
            b.firstChild
        }
        function bB(a, b, c) {
            var d = b === "width" ? a.offsetWidth : a.offsetHeight
              , e = b === "width" ? 1 : 0
              , g = 4;
            if (d > 0) {
                if (c !== "border")
                    for (; e < g; e += 2)
                        c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0),
                        c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
                return d + "px"
            }
            d = by(a, b);
            if (d < 0 || d == null)
                d = a.style[b];
            if (bt.test(d))
                return d;
            d = parseFloat(d) || 0;
            if (c)
                for (; e < g; e += 2)
                    d += parseFloat(f.css(a, "padding" + bx[e])) || 0,
                    c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0),
                    c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
            return d + "px"
        }
        function bY(a) {
            return function(b, c) {
                typeof b != "string" && (c = b,
                b = "*");
                if (f.isFunction(c)) {
                    var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j;
                    for (; e < g; e++)
                        h = d[e],
                        j = /^\+/.test(h),
                        j && (h = h.substr(1) || "*"),
                        i = a[h] = a[h] || [],
                        i[j ? "unshift" : "push"](c)
                }
            }
        }
        function bZ(a, c, d, e, f, g) {
            f = f || c.dataTypes[0],
            g = g || {},
            g[f] = !0;
            var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l;
            for (; i < j && (k || !l); i++)
                l = h[i](c, d, e),
                typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l),
                l = bZ(a, c, d, e, l, g)));
            return (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g)),
            l
        }
        function b$(a, c) {
            var d, e, g = f.ajaxSettings.flatOptions || {};
            for (d in c)
                c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
            e && f.extend(!0, a, e)
        }
        function b_(a, b, c, d) {
            if (f.isArray(b))
                f.each(b, function(b, e) {
                    c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
                });
            else if (!c && f.type(b) === "object")
                for (var e in b)
                    b_(a + "[" + e + "]", b[e], c, d);
            else
                d(a, b)
        }
        function ca(a, c, d) {
            var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
            for (i in g)
                i in d && (c[g[i]] = d[i]);
            while (f[0] === "*")
                f.shift(),
                h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
            if (h)
                for (i in e)
                    if (e[i] && e[i].test(h)) {
                        f.unshift(i);
                        break
                    }
            if (f[0]in d)
                j = f[0];
            else {
                for (i in d) {
                    if (!f[0] || a.converters[i + " " + f[0]]) {
                        j = i;
                        break
                    }
                    k || (k = i)
                }
                j = j || k
            }
            if (j)
                return j !== f[0] && f.unshift(j),
                d[j]
        }
        function cb(a, c) {
            a.dataFilter && (c = a.dataFilter(c, a.dataType));
            var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
            for (g = 1; g < i; g++) {
                if (g === 1)
                    for (h in a.converters)
                        typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
                l = k,
                k = d[g];
                if (k === "*")
                    k = l;
                else if (l !== "*" && l !== k) {
                    m = l + " " + k,
                    n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o],
                                    o === !0 ? n = p : p === !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }
                    !n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
                    n !== !0 && (c = n ? n(c) : p(o(c)))
                }
            }
            return c
        }
        function ch() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }
        function ci() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }
        function cr() {
            return setTimeout(cs, 0),
            cq = f.now()
        }
        function cs() {
            cq = b
        }
        function ct(a, b) {
            var c = {};
            return f.each(cp.concat.apply([], cp.slice(0, b)), function() {
                c[this] = a
            }),
            c
        }
        function cu(a) {
            if (!cj[a]) {
                var b = c.body
                  , d = f("<" + a + ">").appendTo(b)
                  , e = d.css("display");
                d.remove();
                if (e === "none" || e === "") {
                    ck || (ck = c.createElement("iframe"),
                    ck.frameBorder = ck.width = ck.height = 0),
                    b.appendChild(ck);
                    if (!cl || !ck.createElement)
                        cl = (ck.contentWindow || ck.contentDocument).document,
                        cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"),
                        cl.close();
                    d = cl.createElement(a),
                    cl.body.appendChild(d),
                    e = f.css(d, "display"),
                    b.removeChild(ck)
                }
                cj[a] = e
            }
            return cj[a]
        }
        function cy(a) {
            return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
        }
        var c = a.document
          , d = a.navigator
          , e = a.location
          , f = function() {
            function J() {
                if (e.isReady)
                    return;
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
            var e = function(a, b) {
                return new e.fn.init(a,b,h)
            }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function(a, b) {
                return (b + "").toUpperCase()
            }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
            return e.fn = e.prototype = {
                constructor: e,
                init: function(a, d, f) {
                    var g, h, j, k;
                    if (!a)
                        return this;
                    if (a.nodeType)
                        return this.context = this[0] = a,
                        this.length = 1,
                        this;
                    if (a === "body" && !d && c.body)
                        return this.context = c,
                        this[0] = c.body,
                        this.selector = a,
                        this.length = 1,
                        this;
                    if (typeof a == "string") {
                        a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? g = [null, a, null] : g = i.exec(a);
                        if (g && (g[1] || !d)) {
                            if (g[1])
                                return d = d instanceof e ? d[0] : d,
                                k = d ? d.ownerDocument || d : c,
                                j = m.exec(a),
                                j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])],
                                e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]),
                                a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes),
                                e.merge(this, a);
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2])
                                    return f.find(a);
                                this.length = 1,
                                this[0] = h
                            }
                            return this.context = c,
                            this.selector = a,
                            this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    return e.isFunction(a) ? f.ready(a) : (a.selector !== b && (this.selector = a.selector,
                    this.context = a.context),
                    e.makeArray(a, this))
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return F.call(this, 0)
                },
                get: function(a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    return e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
                    d.prevObject = this,
                    d.context = this.context,
                    b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
                    d
                },
                each: function(a, b) {
                    return e.each(this, a, b)
                },
                ready: function(a) {
                    return e.bindReady(),
                    A.add(a),
                    this
                },
                eq: function(a) {
                    return a = +a,
                    a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(e.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            },
            e.fn.init.prototype = e.fn,
            e.extend = e.fn.extend = function() {
                var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
                typeof i == "boolean" && (l = i,
                i = arguments[1] || {},
                j = 2),
                typeof i != "object" && !e.isFunction(i) && (i = {}),
                k === j && (i = this,
                --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c],
                            f = a[c];
                            if (i === f)
                                continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1,
                            h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {},
                            i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                return i
            }
            ,
            e.extend({
                noConflict: function(b) {
                    return a.$ === e && (a.$ = g),
                    b && a.jQuery === e && (a.jQuery = f),
                    e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body)
                            return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0)
                            return;
                        A.fireWith(c, [e]),
                        e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (A)
                        return;
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete")
                        return setTimeout(e.ready, 1);
                    if (c.addEventListener)
                        c.addEventListener("DOMContentLoaded", B, !1),
                        a.addEventListener("load", e.ready, !1);
                    else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B),
                        a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch (d) {}
                        c.documentElement.doScroll && b && J()
                    }
                },
                isFunction: function(a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function(a) {
                    return e.type(a) === "array"
                }
                ,
                isWindow: function(a) {
                    return a != null && a == a.window
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))
                        return !1;
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a)
                        ;
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function(a) {
                    for (var b in a)
                        return !1;
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseJSON: function(b) {
                    if (typeof b != "string" || !b)
                        return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse)
                        return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))
                        return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function(c) {
                    if (typeof c != "string" || !c)
                        return null;
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser,
                        d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),
                        d.async = "false",
                        d.loadXML(c))
                    } catch (g) {
                        d = b
                    }
                    return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c),
                    d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && j.test(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    }
                    )(b)
                },
                camelCase: function(a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1)
                                    break
                        } else
                            for (; g < h; )
                                if (c.apply(a[g++], d) === !1)
                                    break
                    } else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1)
                                break
                    } else
                        for (; g < h; )
                            if (c.call(a[g], g, a[g++]) === !1)
                                break;
                    return a
                },
                trim: G ? function(a) {
                    return a == null ? "" : G.call(a)
                }
                : function(a) {
                    return a == null ? "" : a.toString().replace(k, "").replace(l, "")
                }
                ,
                makeArray: function(a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (H)
                            return H.call(b, a, c);
                        d = b.length,
                        c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++)
                            if (c in b && b[c] === a)
                                return c
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length
                      , e = 0;
                    if (typeof c.length == "number")
                        for (var f = c.length; e < f; e++)
                            a[d++] = c[e];
                    else
                        while (c[e] !== b)
                            a[d++] = c[e++];
                    return a.length = d,
                    a
                },
                grep: function(a, b, c) {
                    var d = [], e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++)
                        e = !!b(a[f], f),
                        c !== e && d.push(a[f]);
                    return d
                },
                map: function(a, c, d) {
                    var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++)
                            f = c(a[i], i, d),
                            f != null && (h[h.length] = f);
                    else
                        for (g in a)
                            f = c(a[g], g, d),
                            f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function(a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a,
                        a = d
                    }
                    if (!e.isFunction(a))
                        return b;
                    var f = F.call(arguments, 2)
                      , g = function() {
                        return a.apply(c, f.concat(F.call(arguments)))
                    };
                    return g.guid = a.guid = a.guid || g.guid || e.guid++,
                    g
                },
                access: function(a, c, d, f, g, h, i) {
                    var j, k = d == null, l = 0, m = a.length;
                    if (d && typeof d == "object") {
                        for (l in d)
                            e.access(a, c, l, d[l], 1, h, f);
                        g = 1
                    } else if (f !== b) {
                        j = i === b && e.isFunction(f),
                        k && (j ? (j = c,
                        c = function(a, b, c) {
                            return j.call(e(a), c)
                        }
                        ) : (c.call(a, f),
                        c = null));
                        if (c)
                            for (; l < m; l++)
                                c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                        g = 1
                    }
                    return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b,c)
                    }
                    e.extend(!0, a, this),
                    a.superclass = this,
                    a.fn = a.prototype = this(),
                    a.fn.constructor = a,
                    a.sub = this.sub,
                    a.fn.init = function(d, f) {
                        return f && f instanceof e && !(f instanceof a) && (f = a(f)),
                        e.fn.init.call(this, d, f, b)
                    }
                    ,
                    a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }),
            e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }),
            z = e.uaMatch(y),
            z.browser && (e.browser[z.browser] = !0,
            e.browser.version = z.version),
            e.browser.webkit && (e.browser.safari = !0),
            j.test(" ") && (k = /^[\s\xA0]+/,
            l = /[\s\xA0]+$/),
            h = e(c),
            c.addEventListener ? B = function() {
                c.removeEventListener("DOMContentLoaded", B, !1),
                e.ready()
            }
            : c.attachEvent && (B = function() {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B),
                e.ready())
            }
            ),
            e
        }()
          , g = {};
        f.Callbacks = function(a) {
            a = a ? g[a] || h(a) : {};
            var c = [], d = [], e, i, j, k, l, m, n = function(b) {
                var d, e, g, h, i;
                for (d = 0,
                e = b.length; d < e; d++)
                    g = b[d],
                    h = f.type(g),
                    h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
            }, o = function(b, f) {
                f = f || [],
                e = !a.memory || [b, f],
                i = !0,
                j = !0,
                m = k || 0,
                k = 0,
                l = c.length;
                for (; c && m < l; m++)
                    if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                j = !1,
                c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(),
                p.fireWith(e[0], e[1])))
            }, p = {
                add: function() {
                    if (c) {
                        var a = c.length;
                        n(arguments),
                        j ? l = c.length : e && e !== !0 && (k = a,
                        o(e[0], e[1]))
                    }
                    return this
                },
                remove: function() {
                    if (c) {
                        var b = arguments
                          , d = 0
                          , e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    j && f <= l && (l--,
                                    f <= m && m--),
                                    c.splice(f--, 1);
                                    if (a.unique)
                                        break
                                }
                    }
                    return this
                },
                has: function(a) {
                    if (c) {
                        var b = 0
                          , d = c.length;
                        for (; b < d; b++)
                            if (a === c[b])
                                return !0
                    }
                    return !1
                },
                empty: function() {
                    return c = [],
                    this
                },
                disable: function() {
                    return c = d = e = b,
                    this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return d = b,
                    (!e || e === !0) && p.disable(),
                    this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(b, c) {
                    return d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c)),
                    this
                },
                fire: function() {
                    return p.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!i
                }
            };
            return p
        }
        ;
        var i = [].slice;
        f.extend({
            Deferred: function(a) {
                var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {
                    resolve: b,
                    reject: c,
                    notify: d
                }, h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function() {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function(a, b, c) {
                        return i.done(a).fail(b).progress(c),
                        this
                    },
                    always: function() {
                        return i.done.apply(i, arguments).fail.apply(i, arguments),
                        this
                    },
                    pipe: function(a, b, c) {
                        return f.Deferred(function(d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c = b[0], e = b[1], g;
                                f.isFunction(c) ? i[a](function() {
                                    g = c.apply(this, arguments),
                                    g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null)
                            a = h;
                        else
                            for (var b in h)
                                a[b] = h[b];
                        return a
                    }
                }, i = h.promise({}), j;
                for (j in g)
                    i[j] = g[j].fire,
                    i[j + "With"] = g[j].fireWith;
                return i.done(function() {
                    e = "resolved"
                }, c.disable, d.lock).fail(function() {
                    e = "rejected"
                }, b.disable, d.lock),
                a && a.call(i, i),
                i
            },
            when: function(a) {
                function l(a) {
                    return function(c) {
                        b[a] = arguments.length > 1 ? i.call(arguments, 0) : c,
                        --g || j.resolveWith(j, b)
                    }
                }
                function m(a) {
                    return function(b) {
                        e[a] = arguments.length > 1 ? i.call(arguments, 0) : b,
                        j.notifyWith(k, e)
                    }
                }
                var b = i.call(arguments, 0)
                  , c = 0
                  , d = b.length
                  , e = new Array(d)
                  , g = d
                  , h = d
                  , j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred()
                  , k = j.promise();
                if (d > 1) {
                    for (; c < d; c++)
                        b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                    g || j.resolveWith(j, b)
                } else
                    j !== a && j.resolveWith(j, d ? [a] : []);
                return k
            }
        }),
        f.support = function() {
            var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement;
            p.setAttribute("className", "t"),
            p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
            d = p.getElementsByTagName("*"),
            e = p.getElementsByTagName("a")[0];
            if (!d || !d.length || !e)
                return {};
            g = c.createElement("select"),
            h = g.appendChild(c.createElement("option")),
            i = p.getElementsByTagName("input")[0],
            b = {
                leadingWhitespace: p.firstChild.nodeType === 3,
                tbody: !p.getElementsByTagName("tbody").length,
                htmlSerialize: !!p.getElementsByTagName("link").length,
                style: /top/.test(e.getAttribute("style")),
                hrefNormalized: e.getAttribute("href") === "/a",
                opacity: /^0.55/.test(e.style.opacity),
                cssFloat: !!e.style.cssFloat,
                checkOn: i.value === "on",
                optSelected: h.selected,
                getSetAttribute: p.className !== "t",
                enctype: !!c.createElement("form").enctype,
                html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                pixelMargin: !0
            },
            f.boxModel = b.boxModel = c.compatMode === "CSS1Compat",
            i.checked = !0,
            b.noCloneChecked = i.cloneNode(!0).checked,
            g.disabled = !0,
            b.optDisabled = !h.disabled;
            try {
                delete p.test
            } catch (r) {
                b.deleteExpando = !1
            }
            !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function() {
                b.noCloneEvent = !1
            }),
            p.cloneNode(!0).fireEvent("onclick")),
            i = c.createElement("input"),
            i.value = "t",
            i.setAttribute("type", "radio"),
            b.radioValue = i.value === "t",
            i.setAttribute("checked", "checked"),
            i.setAttribute("name", "t"),
            p.appendChild(i),
            j = c.createDocumentFragment(),
            j.appendChild(p.lastChild),
            b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked,
            b.appendChecked = i.checked,
            j.removeChild(i),
            j.appendChild(p);
            if (p.attachEvent)
                for (n in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                })
                    m = "on" + n,
                    o = m in p,
                    o || (p.setAttribute(m, "return;"),
                    o = typeof p[m] == "function"),
                    b[n + "Bubbles"] = o;
            return j.removeChild(p),
            j = g = h = p = i = null,
            f(function() {
                var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
                if (!u)
                    return;
                m = 1,
                t = "padding:0;margin:0;border:",
                r = "position:absolute;top:0;left:0;width:1px;height:1px;",
                s = t + "0;visibility:hidden;",
                n = "style='" + r + t + "5px solid #000;",
                q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>",
                d = c.createElement("div"),
                d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px",
                u.insertBefore(d, u.firstChild),
                p = c.createElement("div"),
                d.appendChild(p),
                p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>",
                k = p.getElementsByTagName("td"),
                o = k[0].offsetHeight === 0,
                k[0].style.display = "",
                k[1].style.display = "none",
                b.reliableHiddenOffsets = o && k[0].offsetHeight === 0,
                a.getComputedStyle && (p.innerHTML = "",
                l = c.createElement("div"),
                l.style.width = "0",
                l.style.marginRight = "0",
                p.style.width = "2px",
                p.appendChild(l),
                b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                    marginRight: 0
                }).marginRight, 10) || 0) === 0),
                typeof p.style.zoom != "undefined" && (p.innerHTML = "",
                p.style.width = p.style.padding = "1px",
                p.style.border = 0,
                p.style.overflow = "hidden",
                p.style.display = "inline",
                p.style.zoom = 1,
                b.inlineBlockNeedsLayout = p.offsetWidth === 3,
                p.style.display = "block",
                p.style.overflow = "visible",
                p.innerHTML = "<div style='width:5px;'></div>",
                b.shrinkWrapBlocks = p.offsetWidth !== 3),
                p.style.cssText = r + s,
                p.innerHTML = q,
                e = p.firstChild,
                g = e.firstChild,
                i = e.nextSibling.firstChild.firstChild,
                j = {
                    doesNotAddBorder: g.offsetTop !== 5,
                    doesAddBorderForTableAndCells: i.offsetTop === 5
                },
                g.style.position = "fixed",
                g.style.top = "20px",
                j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15,
                g.style.position = g.style.top = "",
                e.style.overflow = "hidden",
                e.style.position = "relative",
                j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5,
                j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m,
                a.getComputedStyle && (p.style.marginTop = "1%",
                b.pixelMargin = (a.getComputedStyle(p, null) || {
                    marginTop: 0
                }).marginTop !== "1%"),
                typeof d.style.zoom != "undefined" && (d.style.zoom = 1),
                u.removeChild(d),
                l = p = d = null,
                f.extend(b, j)
            }),
            b
        }();
        var j = /^(?:\{.*\}|\[.*\])$/
          , k = /([A-Z])/g;
        f.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                return a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando],
                !!a && !m(a)
            },
            data: function(a, c, d, e) {
                if (!f.acceptData(a))
                    return;
                var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b)
                    return;
                n || (l ? a[j] = n = ++f.uuid : n = j),
                m[n] || (m[n] = {},
                l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function")
                    e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                return g = h = m[n],
                e || (h.data || (h.data = {}),
                h = h.data),
                d !== b && (h[f.camelCase(c)] = d),
                o && !h[c] ? g.events : (k ? (i = h[c],
                i == null && (i = h[f.camelCase(c)])) : i = h,
                i)
            },
            removeData: function(a, b, c) {
                if (!f.acceptData(a))
                    return;
                var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
                if (!j[k])
                    return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b),
                        b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0,
                        g = b.length; e < g; e++)
                            delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d))
                            return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k]))
                        return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
                i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            },
            _data: function(a, b, c) {
                return f.data(a, b, c, !0)
            },
            acceptData: function(a) {
                if (a.nodeName) {
                    var b = f.noData[a.nodeName.toLowerCase()];
                    if (b)
                        return b !== !0 && a.getAttribute("classid") === b
                }
                return !0
            }
        }),
        f.fn.extend({
            data: function(a, c) {
                var d, e, g, h, i, j = this[0], k = 0, m = null;
                if (a === b) {
                    if (this.length) {
                        m = f.data(j);
                        if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                            g = j.attributes;
                            for (i = g.length; k < i; k++)
                                h = g[k].name,
                                h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)),
                                l(j, h, m[h]));
                            f._data(j, "parsedAttrs", !0)
                        }
                    }
                    return m
                }
                return typeof a == "object" ? this.each(function() {
                    f.data(this, a)
                }) : (d = a.split(".", 2),
                d[1] = d[1] ? "." + d[1] : "",
                e = d[1] + "!",
                f.access(this, function(c) {
                    if (c === b)
                        return m = this.triggerHandler("getData" + e, [d[0]]),
                        m === b && j && (m = f.data(j, a),
                        m = l(j, a, m)),
                        m === b && d[1] ? this.data(d[0]) : m;
                    d[1] = c,
                    this.each(function() {
                        var b = f(this);
                        b.triggerHandler("setData" + e, d),
                        f.data(this, a, c),
                        b.triggerHandler("changeData" + e, d)
                    })
                }, null, c, arguments.length > 1, null, !1))
            },
            removeData: function(a) {
                return this.each(function() {
                    f.removeData(this, a)
                })
            }
        }),
        f.extend({
            _mark: function(a, b) {
                a && (b = (b || "fx") + "mark",
                f._data(a, b, (f._data(a, b) || 0) + 1))
            },
            _unmark: function(a, b, c) {
                a !== !0 && (c = b,
                b = a,
                a = !1);
                if (b) {
                    c = c || "fx";
                    var d = c + "mark"
                      , e = a ? 0 : (f._data(b, d) || 1) - 1;
                    e ? f._data(b, d, e) : (f.removeData(b, d, !0),
                    n(b, c, "mark"))
                }
            },
            queue: function(a, b, c) {
                var d;
                if (a)
                    return b = (b || "fx") + "queue",
                    d = f._data(a, b),
                    c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c)),
                    d || []
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = f.queue(a, b)
                  , d = c.shift()
                  , e = {};
                d === "inprogress" && (d = c.shift()),
                d && (b === "fx" && c.unshift("inprogress"),
                f._data(a, b + ".run", e),
                d.call(a, function() {
                    f.dequeue(a, b)
                }, e)),
                c.length || (f.removeData(a, b + "queue " + b + ".run", !0),
                n(a, b, "queue"))
            }
        }),
        f.fn.extend({
            queue: function(a, c) {
                var d = 2;
                return typeof a != "string" && (c = a,
                a = "fx",
                d--),
                arguments.length < d ? f.queue(this[0], a) : c === b ? this : this.each(function() {
                    var b = f.queue(this, a, c);
                    a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    f.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                return a = f.fx ? f.fx.speeds[a] || a : a,
                b = b || "fx",
                this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, c) {
                function m() {
                    --h || d.resolveWith(e, [e])
                }
                typeof a != "string" && (c = a,
                a = b),
                a = a || "fx";
                var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
                while (g--)
                    if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0))
                        h++,
                        l.add(m);
                return m(),
                d.promise(c)
            }
        });
        var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
        f.fn.extend({
            attr: function(a, b) {
                return f.access(this, f.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    f.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return f.access(this, f.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = f.propFix[a] || a,
                this.each(function() {
                    try {
                        this[a] = b,
                        delete this[a]
                    } catch (c) {}
                })
            },
            addClass: function(a) {
                var b, c, d, e, g, h, i;
                if (f.isFunction(a))
                    return this.each(function(b) {
                        f(this).addClass(a.call(this, b, this.className))
                    });
                if (a && typeof a == "string") {
                    b = a.split(p);
                    for (c = 0,
                    d = this.length; c < d; c++) {
                        e = this[c];
                        if (e.nodeType === 1)
                            if (!e.className && b.length === 1)
                                e.className = a;
                            else {
                                g = " " + e.className + " ";
                                for (h = 0,
                                i = b.length; h < i; h++)
                                    ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                                e.className = f.trim(g)
                            }
                    }
                }
                return this
            },
            removeClass: function(a) {
                var c, d, e, g, h, i, j;
                if (f.isFunction(a))
                    return this.each(function(b) {
                        f(this).removeClass(a.call(this, b, this.className))
                    });
                if (a && typeof a == "string" || a === b) {
                    c = (a || "").split(p);
                    for (d = 0,
                    e = this.length; d < e; d++) {
                        g = this[d];
                        if (g.nodeType === 1 && g.className)
                            if (a) {
                                h = (" " + g.className + " ").replace(o, " ");
                                for (i = 0,
                                j = c.length; i < j; i++)
                                    h = h.replace(" " + c[i] + " ", " ");
                                g.className = f.trim(h)
                            } else
                                g.className = ""
                    }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a
                  , d = typeof b == "boolean";
                return f.isFunction(a) ? this.each(function(c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if (c === "string") {
                        var e, g = 0, h = f(this), i = b, j = a.split(p);
                        while (e = j[g++])
                            i = d ? i : !h.hasClass(e),
                            h[i ? "addClass" : "removeClass"](e)
                    } else if (c === "undefined" || c === "boolean")
                        this.className && f._data(this, "__className__", this.className),
                        this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
                })
            },
            hasClass: function(a) {
                var b = " " + a + " "
                  , c = 0
                  , d = this.length;
                for (; c < d; c++)
                    if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1)
                        return !0;
                return !1
            },
            val: function(a) {
                var c, d, e, g = this[0];
                if (!arguments.length) {
                    if (g)
                        return c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()],
                        c && "get"in c && (d = c.get(g, "value")) !== b ? d : (d = g.value,
                        typeof d == "string" ? d.replace(q, "") : d == null ? "" : d);
                    return
                }
                return e = f.isFunction(a),
                this.each(function(d) {
                    var g = f(this), h;
                    if (this.nodeType !== 1)
                        return;
                    e ? h = a.call(this, d, g.val()) : h = a,
                    h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
                        return a == null ? "" : a + ""
                    })),
                    c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                    if (!c || !("set"in c) || c.set(this, h, "value") === b)
                        this.value = h
                })
            }
        }),
        f.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
                        if (g < 0)
                            return null;
                        c = j ? g : 0,
                        d = j ? g + 1 : i.length;
                        for (; c < d; c++) {
                            e = i[c];
                            if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                                b = f(e).val();
                                if (j)
                                    return b;
                                h.push(b)
                            }
                        }
                        return j && !h.length && i.length ? f(i[g]).val() : h
                    },
                    set: function(a, b) {
                        var c = f.makeArray(b);
                        return f(a).find("option").each(function() {
                            this.selected = f.inArray(f(this).val(), c) >= 0
                        }),
                        c.length || (a.selectedIndex = -1),
                        c
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attr: function(a, c, d, e) {
                var g, h, i, j = a.nodeType;
                if (!a || j === 3 || j === 8 || j === 2)
                    return;
                if (e && c in f.attrFn)
                    return f(a)[c](d);
                if (typeof a.getAttribute == "undefined")
                    return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a),
                i && (c = c.toLowerCase(),
                h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    return h && "set"in h && i && (g = h.set(a, d, c)) !== b ? g : (a.setAttribute(c, "" + d),
                    d)
                }
                return h && "get"in h && i && (g = h.get(a, c)) !== null ? g : (g = a.getAttribute(c),
                g === null ? b : g)
            },
            removeAttr: function(a, b) {
                var c, d, e, g, h, i = 0;
                if (b && a.nodeType === 1) {
                    d = b.toLowerCase().split(p),
                    g = d.length;
                    for (; i < g; i++)
                        e = d[i],
                        e && (c = f.propFix[e] || e,
                        h = u.test(e),
                        h || f.attr(a, e, ""),
                        a.removeAttribute(v ? e : c),
                        h && c in a && (a[c] = !1))
                }
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (r.test(a.nodeName) && a.parentNode)
                            f.error("type property can't be changed");
                        else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b),
                            c && (a.value = c),
                            b
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return w && f.nodeName(a, "button") ? w.get(a, b) : b in a ? a.value : null
                    },
                    set: function(a, b, c) {
                        if (w && f.nodeName(a, "button"))
                            return w.set(a, b, c);
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, c, d) {
                var e, g, h, i = a.nodeType;
                if (!a || i === 3 || i === 8 || i === 2)
                    return;
                return h = i !== 1 || !f.isXMLDoc(a),
                h && (c = f.propFix[c] || c,
                g = f.propHooks[c]),
                d !== b ? g && "set"in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get"in g && (e = g.get(a, c)) !== null ? e : a[c]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                    }
                }
            }
        }),
        f.attrHooks.tabindex = f.propHooks.tabIndex,
        x = {
            get: function(a, c) {
                var d, e = f.prop(a, c);
                return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
            },
            set: function(a, b, c) {
                var d;
                return b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c,
                d in a && (a[d] = !0),
                a.setAttribute(c, c.toLowerCase())),
                c
            }
        },
        v || (y = {
            name: !0,
            id: !0,
            coords: !0
        },
        w = f.valHooks.button = {
            get: function(a, c) {
                var d;
                return d = a.getAttributeNode(c),
                d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
            },
            set: function(a, b, d) {
                var e = a.getAttributeNode(d);
                return e || (e = c.createAttribute(d),
                a.setAttributeNode(e)),
                e.nodeValue = b + ""
            }
        },
        f.attrHooks.tabindex.set = w.set,
        f.each(["width", "height"], function(a, b) {
            f.attrHooks[b] = f.extend(f.attrHooks[b], {
                set: function(a, c) {
                    if (c === "")
                        return a.setAttribute(b, "auto"),
                        c
                }
            })
        }),
        f.attrHooks.contenteditable = {
            get: w.get,
            set: function(a, b, c) {
                b === "" && (b = "false"),
                w.set(a, b, c)
            }
        }),
        f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
            f.attrHooks[c] = f.extend(f.attrHooks[c], {
                get: function(a) {
                    var d = a.getAttribute(c, 2);
                    return d === null ? b : d
                }
            })
        }),
        f.support.style || (f.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || b
            },
            set: function(a, b) {
                return a.style.cssText = "" + b
            }
        }),
        f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex,
                b.parentNode && b.parentNode.selectedIndex),
                null
            }
        })),
        f.support.enctype || (f.propFix.enctype = "encoding"),
        f.support.checkOn || f.each(["radio", "checkbox"], function() {
            f.valHooks[this] = {
                get: function(a) {
                    return a.getAttribute("value") === null ? "on" : a.value
                }
            }
        }),
        f.each(["radio", "checkbox"], function() {
            f.valHooks[this] = f.extend(f.valHooks[this], {
                set: function(a, b) {
                    if (f.isArray(b))
                        return a.checked = f.inArray(f(a).val(), b) >= 0
                }
            })
        });
        var z = /^(?:textarea|input|select)$/i
          , A = /^([^\.]*)?(?:\.(.+))?$/
          , B = /(?:^|\s)hover(\.\S+)?\b/
          , C = /^key/
          , D = /^(?:mouse|contextmenu)|click/
          , E = /^(?:focusinfocus|focusoutblur)$/
          , F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/
          , G = function(a) {
            var b = F.exec(a);
            return b && (b[1] = (b[1] || "").toLowerCase(),
            b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")),
            b
        }
          , H = function(a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        }
          , I = function(a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
        f.event = {
            add: function(a, c, d, e, g) {
                var h, i, j, k, l, m, n, o, p, q, r, s;
                if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))
                    return;
                d.handler && (p = d,
                d = p.handler,
                g = p.selector),
                d.guid || (d.guid = f.guid++),
                j = h.events,
                j || (h.events = j = {}),
                i = h.handle,
                i || (h.handle = i = function(a) {
                    return typeof f == "undefined" || !!a && f.event.triggered === a.type ? b : f.event.dispatch.apply(i.elem, arguments)
                }
                ,
                i.elem = a),
                c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [],
                    m = l[1],
                    n = (l[2] || "").split(".").sort(),
                    s = f.event.special[m] || {},
                    m = (g ? s.delegateType : s.bindType) || m,
                    s = f.event.special[m] || {},
                    o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: g && G(g),
                        namespace: n.join(".")
                    }, p),
                    r = j[m];
                    if (!r) {
                        r = j[m] = [],
                        r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1)
                            a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o),
                    o.handler.guid || (o.handler.guid = d.guid)),
                    g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
                    f.event.global[m] = !0
                }
                a = null
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
                if (!g || !(o = g.events))
                    return;
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [],
                    j = k = i[1],
                    l = i[2];
                    if (!j) {
                        for (j in o)
                            f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {},
                    j = (d ? p.delegateType : p.bindType) || j,
                    r = o[j] || [],
                    m = r.length,
                    l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++)
                        s = r[n],
                        (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1),
                        s.selector && r.delegateCount--,
                        p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle),
                    delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle,
                q && (q.elem = null),
                f.removeData(a, ["events", "handle"], !0))
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, g) {
                if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                    var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
                    if (E.test(h + f.event.triggered))
                        return;
                    h.indexOf("!") >= 0 && (h = h.slice(0, -1),
                    k = !0),
                    h.indexOf(".") >= 0 && (i = h.split("."),
                    h = i.shift(),
                    i.sort());
                    if ((!e || f.event.customEvent[h]) && !f.event.global[h])
                        return;
                    c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h,c) : new f.Event(h),
                    c.type = h,
                    c.isTrigger = !0,
                    c.exclusive = k,
                    c.namespace = i.join("."),
                    c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                    o = h.indexOf(":") < 0 ? "on" + h : "";
                    if (!e) {
                        j = f.cache;
                        for (l in j)
                            j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                        return
                    }
                    c.result = b,
                    c.target || (c.target = e),
                    d = d != null ? f.makeArray(d) : [],
                    d.unshift(c),
                    p = f.event.special[h] || {};
                    if (p.trigger && p.trigger.apply(e, d) === !1)
                        return;
                    r = [[e, p.bindType || h]];
                    if (!g && !p.noBubble && !f.isWindow(e)) {
                        s = p.delegateType || h,
                        m = E.test(s + h) ? e : e.parentNode,
                        n = null;
                        for (; m; m = m.parentNode)
                            r.push([m, s]),
                            n = m;
                        n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                    }
                    for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
                        m = r[l][0],
                        c.type = r[l][1],
                        q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"),
                        q && q.apply(m, d),
                        q = o && m[o],
                        q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                    return c.type = h,
                    !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o],
                    n && (e[o] = null),
                    f.event.triggered = h,
                    e[h](),
                    f.event.triggered = b,
                    n && (e[o] = n)),
                    c.result
                }
                return
            },
            dispatch: function(c) {
                c = f.event.fix(c || a.event);
                var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s, t, u;
                g[0] = c,
                c.delegateTarget = this;
                if (i.preDispatch && i.preDispatch.call(this, c) === !1)
                    return;
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this),
                    n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this)
                        if (m.disabled !== !0) {
                            p = {},
                            r = [],
                            n[0] = m;
                            for (k = 0; k < e; k++)
                                s = d[k],
                                t = s.selector,
                                p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)),
                                p[t] && r.push(s);
                            r.length && j.push({
                                elem: m,
                                matches: r
                            })
                        }
                }
                d.length > e && j.push({
                    elem: this,
                    matches: d.slice(e)
                });
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k],
                    c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace))
                            c.data = s.data,
                            c.handleObj = s,
                            o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g),
                            o !== b && (c.result = o,
                            o === !1 && (c.preventDefault(),
                            c.stopPropagation()))
                    }
                }
                return i.postDispatch && i.postDispatch.call(this, c),
                c.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode),
                    a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, d) {
                    var e, f, g, h = d.button, i = d.fromElement;
                    return a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c,
                    f = e.documentElement,
                    g = e.body,
                    a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0),
                    a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                    !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i),
                    !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0),
                    a
                }
            },
            fix: function(a) {
                if (a[f.expando])
                    return a;
                var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
                a = f.Event(g);
                for (d = i.length; d; )
                    e = i[--d],
                    a[e] = g[e];
                return a.target || (a.target = g.srcElement || c),
                a.target.nodeType === 3 && (a.target = a.target.parentNode),
                a.metaKey === b && (a.metaKey = a.ctrlKey),
                h.filter ? h.filter(a, g) : a
            },
            special: {
                ready: {
                    setup: f.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        f.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = f.extend(new f.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault()
            }
        },
        f.event.handle = f.event.dispatch,
        f.removeEvent = c.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
        : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }
        ,
        f.Event = function(a, b) {
            if (!(this instanceof f.Event))
                return new f.Event(a,b);
            a && a.type ? (this.originalEvent = a,
            this.type = a.type,
            this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a,
            b && f.extend(this, b),
            this.timeStamp = a && a.timeStamp || f.now(),
            this[f.expando] = !0
        }
        ,
        f.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                if (!a)
                    return;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            },
            stopPropagation: function() {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                if (!a)
                    return;
                a.stopPropagation && a.stopPropagation(),
                a.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = K,
                this.stopPropagation()
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J
        },
        f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            f.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
                    if (!d || d !== c && !f.contains(c, d))
                        a.type = e.origType,
                        h = e.handler.apply(this, arguments),
                        a.type = b;
                    return h
                }
            }
        }),
        f.support.submitBubbles || (f.event.special.submit = {
            setup: function() {
                if (f.nodeName(this, "form"))
                    return !1;
                f.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target
                      , d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }),
                    d._submit_attached = !0)
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble,
                this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                if (f.nodeName(this, "form"))
                    return !1;
                f.event.remove(this, "._submit")
            }
        }),
        f.support.changeBubbles || (f.event.special.change = {
            setup: function() {
                if (z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio")
                        f.event.add(this, "propertychange._change", function(a) {
                            a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }),
                        f.event.add(this, "click._change", function(a) {
                            this._just_changed && !a.isTrigger && (this._just_changed = !1,
                            f.event.simulate("change", this, a, !0))
                        });
                    return !1
                }
                f.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                    }),
                    b._change_attached = !0)
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")
                    return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return f.event.remove(this, "._change"),
                z.test(this.nodeName)
            }
        }),
        f.support.focusinBubbles || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var d = 0
              , e = function(a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
            f.event.special[b] = {
                setup: function() {
                    d++ === 0 && c.addEventListener(a, e, !0)
                },
                teardown: function() {
                    --d === 0 && c.removeEventListener(a, e, !0)
                }
            }
        }),
        f.fn.extend({
            on: function(a, c, d, e, g) {
                var h, i;
                if (typeof a == "object") {
                    typeof c != "string" && (d = d || c,
                    c = b);
                    for (i in a)
                        this.on(i, c, d, a[i], g);
                    return this
                }
                d == null && e == null ? (e = c,
                d = c = b) : e == null && (typeof c == "string" ? (e = d,
                d = b) : (e = d,
                d = c,
                c = b));
                if (e === !1)
                    e = J;
                else if (!e)
                    return this;
                return g === 1 && (h = e,
                e = function(a) {
                    return f().off(a),
                    h.apply(this, arguments)
                }
                ,
                e.guid = h.guid || (h.guid = f.guid++)),
                this.each(function() {
                    f.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    return f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler),
                    this
                }
                if (typeof a == "object") {
                    for (var g in a)
                        this.off(g, c, a[g]);
                    return this
                }
                if (c === !1 || typeof c == "function")
                    d = c,
                    c = b;
                return d === !1 && (d = J),
                this.each(function() {
                    f.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                return f(this.context).on(a, this.selector, b, c),
                this
            },
            die: function(a, b) {
                return f(this.context).off(a, this.selector || "**", b),
                this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0])
                    return f.event.trigger(a, b, this[0], !0)
            },
            toggle: function(a) {
                var b = arguments
                  , c = a.guid || f.guid++
                  , d = 0
                  , e = function(c) {
                    var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                    return f._data(this, "lastToggle" + a.guid, e + 1),
                    c.preventDefault(),
                    b[e].apply(this, arguments) || !1
                };
                e.guid = c;
                while (d < b.length)
                    b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }),
        f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            f.fn[b] = function(a, c) {
                return c == null && (c = a,
                a = null),
                arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
            ,
            f.attrFn && (f.attrFn[b] = !0),
            C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
            D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
        }),
        function() {
            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c,
                            j.sizset = h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c,
                                j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
              , d = "sizcache" + (Math.random() + "").replace(".", "")
              , e = 0
              , g = Object.prototype.toString
              , h = !1
              , i = !0
              , j = /\\/g
              , k = /\r\n/g
              , l = /\W/;
            [0, 0].sort(function() {
                return i = !1,
                0
            });
            var m = function(b, d, e, f) {
                e = e || [],
                d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9)
                    return [];
                if (!b || typeof b != "string")
                    return e;
                var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
                do {
                    a.exec(""),
                    i = a.exec(x);
                    if (i) {
                        x = i[3],
                        w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b))
                    if (w.length === 2 && o.relative[w[0]])
                        j = y(w[0] + w[1], d, f);
                    else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length)
                            b = w.shift(),
                            o.relative[b] && (b += w.shift()),
                            j = y(b, j, f)
                    }
                else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v),
                    d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length !== 1 || w[0] !== "~" && w[0] !== "+" || !d.parentNode ? d : d.parentNode, v),
                        j = n.expr ? m.filter(n.expr, n.set) : n.set,
                        w.length > 0 ? k = s(j) : u = !1;
                        while (w.length)
                            q = w.pop(),
                            r = q,
                            o.relative[q] ? r = w.pop() : q = "",
                            r == null && (r = d),
                            o.relative[q](k, r, v)
                    } else
                        k = w = []
                }
                k || (k = j),
                k || m.error(q || b);
                if (g.call(k) === "[object Array]")
                    if (!u)
                        e.push.apply(e, k);
                    else if (d && d.nodeType === 1)
                        for (t = 0; k[t] != null; t++)
                            k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
                    else
                        for (t = 0; k[t] != null; t++)
                            k[t] && k[t].nodeType === 1 && e.push(j[t]);
                else
                    s(k, e);
                return l && (m(l, h, e, f),
                m.uniqueSort(e)),
                e
            };
            m.uniqueSort = function(a) {
                if (u) {
                    h = i,
                    a.sort(u);
                    if (h)
                        for (var b = 1; b < a.length; b++)
                            a[b] === a[b - 1] && a.splice(b--, 1)
                }
                return a
            }
            ,
            m.matches = function(a, b) {
                return m(a, null, null, b)
            }
            ,
            m.matchesSelector = function(a, b) {
                return m(b, null, null, [a]).length > 0
            }
            ,
            m.find = function(a, b, c) {
                var d, e, f, g, h, i;
                if (!a)
                    return [];
                for (e = 0,
                f = o.order.length; e < f; e++) {
                    h = o.order[e];
                    if (g = o.leftMatch[h].exec(a)) {
                        i = g[1],
                        g.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(j, ""),
                            d = o.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(o.match[h], "");
                                break
                            }
                        }
                    }
                }
                return d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []),
                {
                    set: d,
                    expr: a
                }
            }
            ,
            m.filter = function(a, c, d, e) {
                var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
                while (a && c.length) {
                    for (h in o.filter)
                        if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                            k = o.filter[h],
                            l = f[1],
                            g = !1,
                            f.splice(1, 1);
                            if (l.substr(l.length - 1) === "\\")
                                continue;
                            s === r && (r = []);
                            if (o.preFilter[h]) {
                                f = o.preFilter[h](f, s, d, r, e, t);
                                if (!f)
                                    g = i = !0;
                                else if (f === !0)
                                    continue
                            }
                            if (f)
                                for (n = 0; (j = s[n]) != null; n++)
                                    j && (i = k(j, f, n, s),
                                    p = e ^ i,
                                    d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j),
                                    g = !0));
                            if (i !== b) {
                                d || (s = r),
                                a = a.replace(o.match[h], "");
                                if (!g)
                                    return [];
                                break
                            }
                        }
                    if (a === q) {
                        if (g != null)
                            break;
                        m.error(a)
                    }
                    q = a
                }
                return s
            }
            ,
            m.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }
            ;
            var n = m.getText = function(a) {
                var b, c, d = a.nodeType, e = "";
                if (d) {
                    if (d === 1 || d === 9 || d === 11) {
                        if (typeof a.textContent == "string")
                            return a.textContent;
                        if (typeof a.innerText == "string")
                            return a.innerText.replace(k, "");
                        for (a = a.firstChild; a; a = a.nextSibling)
                            e += n(a)
                    } else if (d === 3 || d === 4)
                        return a.nodeValue
                } else
                    for (b = 0; c = a[b]; b++)
                        c.nodeType !== 8 && (e += n(c));
                return e
            }
              , o = m.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function(a) {
                        return a.getAttribute("href")
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function(a, b) {
                        var c = typeof b == "string"
                          , d = c && !l.test(b)
                          , e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f = 0, g = a.length, h; f < g; f++)
                            if (h = a[f]) {
                                while ((h = h.previousSibling) && h.nodeType !== 1)
                                    ;
                                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                            }
                        e && m.filter(b, a, !0)
                    },
                    ">": function(a, b) {
                        var c, d = typeof b == "string", e = 0, f = a.length;
                        if (d && !l.test(b)) {
                            b = b.toLowerCase();
                            for (; e < f; e++) {
                                c = a[e];
                                if (c) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                            }
                        } else {
                            for (; e < f; e++)
                                c = a[e],
                                c && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && m.filter(b, a, !0)
                        }
                    },
                    "": function(a, b, c) {
                        var d, f = e++, g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(),
                        d = b,
                        g = w),
                        g("parentNode", b, f, a, d, c)
                    },
                    "~": function(a, b, c) {
                        var d, f = e++, g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(),
                        d = b,
                        g = w),
                        g("previousSibling", b, f, a, d, c)
                    }
                },
                find: {
                    ID: function(a, b, c) {
                        if (typeof b.getElementById != "undefined" && !c) {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : []
                        }
                    },
                    NAME: function(a, b) {
                        if (typeof b.getElementsByName != "undefined") {
                            var c = []
                              , d = b.getElementsByName(a[1]);
                            for (var e = 0, f = d.length; e < f; e++)
                                d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function(a, b) {
                        if (typeof b.getElementsByTagName != "undefined")
                            return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function(a, b, c, d, e, f) {
                        a = " " + a[1].replace(j, "") + " ";
                        if (f)
                            return a;
                        for (var g = 0, h; (h = b[g]) != null; g++)
                            h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                        return !1
                    },
                    ID: function(a) {
                        return a[1].replace(j, "")
                    },
                    TAG: function(a, b) {
                        return a[1].replace(j, "").toLowerCase()
                    },
                    CHILD: function(a) {
                        if (a[1] === "nth") {
                            a[2] || m.error(a[0]),
                            a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0,
                            a[3] = b[3] - 0
                        } else
                            a[2] && m.error(a[0]);
                        return a[0] = e++,
                        a
                    },
                    ATTR: function(a, b, c, d, e, f) {
                        var g = a[1] = a[1].replace(j, "");
                        return !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                        a[4] = (a[4] || a[5] || "").replace(j, ""),
                        a[2] === "~=" && (a[4] = " " + a[4] + " "),
                        a
                    },
                    PSEUDO: function(b, c, d, e, f) {
                        if (b[1] === "not") {
                            if (!((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))) {
                                var g = m.filter(b[3], c, d, !0 ^ f);
                                return d || e.push.apply(e, g),
                                !1
                            }
                            b[3] = m(b[3], null, null, c)
                        } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))
                            return !0;
                        return b
                    },
                    POS: function(a) {
                        return a.unshift(!0),
                        a
                    }
                },
                filters: {
                    enabled: function(a) {
                        return a.disabled === !1 && a.type !== "hidden"
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        return a.checked === !0
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex,
                        a.selected === !0
                    },
                    parent: function(a) {
                        return !!a.firstChild
                    },
                    empty: function(a) {
                        return !a.firstChild
                    },
                    has: function(a, b, c) {
                        return !!m(c[3], a).length
                    },
                    header: function(a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function(a) {
                        var b = a.getAttribute("type")
                          , c = a.type;
                        return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                    },
                    radio: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                    },
                    checkbox: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                    },
                    file: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "file" === a.type
                    },
                    password: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "password" === a.type
                    },
                    submit: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "submit" === a.type
                    },
                    image: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "image" === a.type
                    },
                    reset: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "reset" === a.type
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && "button" === a.type || b === "button"
                    },
                    input: function(a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function(a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function(a, b) {
                        return b === 0
                    },
                    last: function(a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function(a, b) {
                        return b % 2 === 0
                    },
                    odd: function(a, b) {
                        return b % 2 === 1
                    },
                    lt: function(a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function(a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function(a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function(a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function(a, b, c, d) {
                        var e = b[1]
                          , f = o.filters[e];
                        if (f)
                            return f(a, c, b, d);
                        if (e === "contains")
                            return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            var g = b[3];
                            for (var h = 0, i = g.length; h < i; h++)
                                if (g[h] === a)
                                    return !1;
                            return !0
                        }
                        m.error(e)
                    },
                    CHILD: function(a, b) {
                        var c, e, f, g, h, i, j, k = b[1], l = a;
                        switch (k) {
                        case "only":
                        case "first":
                            while (l = l.previousSibling)
                                if (l.nodeType === 1)
                                    return !1;
                            if (k === "first")
                                return !0;
                            l = a;
                        case "last":
                            while (l = l.nextSibling)
                                if (l.nodeType === 1)
                                    return !1;
                            return !0;
                        case "nth":
                            c = b[2],
                            e = b[3];
                            if (c === 1 && e === 0)
                                return !0;
                            f = b[0],
                            g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling)
                                    l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            return j = a.nodeIndex - e,
                            c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                        }
                    },
                    ID: function(a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function(a, b) {
                        return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                    },
                    CLASS: function(a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function(a, b) {
                        var c = b[1]
                          , d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c)
                          , e = d + ""
                          , f = b[2]
                          , g = b[4];
                        return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                    },
                    POS: function(a, b, c, d) {
                        var e = b[2]
                          , f = o.setFilters[e];
                        if (f)
                            return f(a, c, b, d)
                    }
                }
            }
              , p = o.match.POS
              , q = function(a, b) {
                return "\\" + (b - 0 + 1)
            };
            for (var r in o.match)
                o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
                o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            o.match.globalPOS = p;
            var s = function(a, b) {
                return a = Array.prototype.slice.call(a, 0),
                b ? (b.push.apply(b, a),
                b) : a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function(a, b) {
                    var c = 0
                      , d = b || [];
                    if (g.call(a) === "[object Array]")
                        Array.prototype.push.apply(d, a);
                    else if (typeof a.length == "number")
                        for (var e = a.length; c < e; c++)
                            d.push(a[c]);
                    else
                        for (; a[c]; c++)
                            d.push(a[c]);
                    return d
                }
            }
            var u, v;
            c.documentElement.compareDocumentPosition ? u = function(a, b) {
                return a === b ? (h = !0,
                0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
            }
            : (u = function(a, b) {
                if (a === b)
                    return h = !0,
                    0;
                if (a.sourceIndex && b.sourceIndex)
                    return a.sourceIndex - b.sourceIndex;
                var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
                if (g === i)
                    return v(a, b);
                if (!g)
                    return -1;
                if (!i)
                    return 1;
                while (j)
                    e.unshift(j),
                    j = j.parentNode;
                j = i;
                while (j)
                    f.unshift(j),
                    j = j.parentNode;
                c = e.length,
                d = f.length;
                for (var k = 0; k < c && k < d; k++)
                    if (e[k] !== f[k])
                        return v(e[k], f[k]);
                return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
            }
            ,
            v = function(a, b, c) {
                if (a === b)
                    return c;
                var d = a.nextSibling;
                while (d) {
                    if (d === b)
                        return -1;
                    d = d.nextSibling
                }
                return 1
            }
            ),
            function() {
                var a = c.createElement("div")
                  , d = "script" + (new Date).getTime()
                  , e = c.documentElement;
                a.innerHTML = "<a name='" + d + "'/>",
                e.insertBefore(a, e.firstChild),
                c.getElementById(d) && (o.find.ID = function(a, c, d) {
                    if (typeof c.getElementById != "undefined" && !d) {
                        var e = c.getElementById(a[1]);
                        return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                    }
                }
                ,
                o.filter.ID = function(a, b) {
                    var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                    return a.nodeType === 1 && c && c.nodeValue === b
                }
                ),
                e.removeChild(a),
                e = a = null
            }(),
            function() {
                var a = c.createElement("div");
                a.appendChild(c.createComment("")),
                a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                    var c = b.getElementsByTagName(a[1]);
                    if (a[1] === "*") {
                        var d = [];
                        for (var e = 0; c[e]; e++)
                            c[e].nodeType === 1 && d.push(c[e]);
                        c = d
                    }
                    return c
                }
                ),
                a.innerHTML = "<a href='#'></a>",
                a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                    return a.getAttribute("href", 2)
                }
                ),
                a = null
            }(),
            c.querySelectorAll && function() {
                var a = m
                  , b = c.createElement("div")
                  , d = "__sizzle__";
                b.innerHTML = "<p class='TEST'></p>";
                if (b.querySelectorAll && b.querySelectorAll(".TEST").length === 0)
                    return;
                m = function(b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1])
                                return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName)
                                return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body)
                                return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode)
                                    return s([], f);
                                if (i.id === h[3])
                                    return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e
                              , l = e.getAttribute("id")
                              , n = l || d
                              , p = e.parentNode
                              , q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n),
                            q && p && (e = e.parentNode);
                            try {
                                if (!q || p)
                                    return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {} finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                }
                ;
                for (var e in a)
                    m[e] = a[e];
                b = null
            }(),
            function() {
                var a = c.documentElement
                  , b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                if (b) {
                    var d = !b.call(c.createElement("div"), "div")
                      , e = !1;
                    try {
                        b.call(c.documentElement, "[test!='']:sizzle")
                    } catch (f) {
                        e = !0
                    }
                    m.matchesSelector = function(a, c) {
                        c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                        if (!m.isXML(a))
                            try {
                                if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                    var f = b.call(a, c);
                                    if (f || !d || a.document && a.document.nodeType !== 11)
                                        return f
                                }
                            } catch (g) {}
                        return m(c, null, null, [a]).length > 0
                    }
                }
            }(),
            function() {
                var a = c.createElement("div");
                a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                if (!a.getElementsByClassName || a.getElementsByClassName("e").length === 0)
                    return;
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1)
                    return;
                o.order.splice(1, 0, "CLASS"),
                o.find.CLASS = function(a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c)
                        return b.getElementsByClassName(a[1])
                }
                ,
                a = null
            }(),
            c.documentElement.contains ? m.contains = function(a, b) {
                return a !== b && (a.contains ? a.contains(b) : !0)
            }
            : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
                return !!(a.compareDocumentPosition(b) & 16)
            }
            : m.contains = function() {
                return !1
            }
            ,
            m.isXML = function(a) {
                var b = (a ? a.ownerDocument || a : 0).documentElement;
                return b ? b.nodeName !== "HTML" : !1
            }
            ;
            var y = function(a, b, c) {
                var d, e = [], f = "", g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a))
                    f += d[0],
                    a = a.replace(o.match.PSEUDO, "");
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++)
                    m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = f.attr,
            m.selectors.attrMap = {},
            f.find = m,
            f.expr = m.selectors,
            f.expr[":"] = f.expr.filters,
            f.unique = m.uniqueSort,
            f.text = m.getText,
            f.isXMLDoc = m.isXML,
            f.contains = m.contains
        }();
        var L = /Until$/
          , M = /^(?:parents|prevUntil|prevAll)/
          , N = /,/
          , O = /^.[^:#\[\.,]*$/
          , P = Array.prototype.slice
          , Q = f.expr.match.globalPOS
          , R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        f.fn.extend({
            find: function(a) {
                var b = this, c, d;
                if (typeof a != "string")
                    return f(a).filter(function() {
                        for (c = 0,
                        d = b.length; c < d; c++)
                            if (f.contains(b[c], this))
                                return !0
                    });
                var e = this.pushStack("", "find", a), g, h, i;
                for (c = 0,
                d = this.length; c < d; c++) {
                    g = e.length,
                    f.find(a, this[c], e);
                    if (c > 0)
                        for (h = g; h < e.length; h++)
                            for (i = 0; i < g; i++)
                                if (e[i] === e[h]) {
                                    e.splice(h--, 1);
                                    break
                                }
                }
                return e
            },
            has: function(a) {
                var b = f(a);
                return this.filter(function() {
                    for (var a = 0, c = b.length; a < c; a++)
                        if (f.contains(this, b[a]))
                            return !0
                })
            },
            not: function(a) {
                return this.pushStack(T(this, a, !1), "not", a)
            },
            filter: function(a) {
                return this.pushStack(T(this, a, !0), "filter", a)
            },
            is: function(a) {
                return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
            },
            closest: function(a, b) {
                var c = [], d, e, g = this[0];
                if (f.isArray(a)) {
                    var h = 1;
                    while (g && g.ownerDocument && g !== b) {
                        for (d = 0; d < a.length; d++)
                            f(g).is(a[d]) && c.push({
                                selector: a[d],
                                elem: g,
                                level: h
                            });
                        g = g.parentNode,
                        h++
                    }
                    return c
                }
                var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
                for (d = 0,
                e = this.length; d < e; d++) {
                    g = this[d];
                    while (g) {
                        if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                            c.push(g);
                            break
                        }
                        g = g.parentNode;
                        if (!g || !g.ownerDocument || g === b || g.nodeType === 11)
                            break
                    }
                }
                return c = c.length > 1 ? f.unique(c) : c,
                this.pushStack(c, "closest", a)
            },
            index: function(a) {
                return a ? typeof a == "string" ? f.inArray(this[0], f(a)) : f.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(a, b) {
                var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a)
                  , d = f.merge(this.get(), c);
                return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        }),
        f.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && b.nodeType !== 11 ? b : null
            },
            parents: function(a) {
                return f.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return f.dir(a, "parentNode", c)
            },
            next: function(a) {
                return f.nth(a, 2, "nextSibling")
            },
            prev: function(a) {
                return f.nth(a, 2, "previousSibling")
            },
            nextAll: function(a) {
                return f.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return f.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return f.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return f.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return f.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return f.sibling(a.firstChild)
            },
            contents: function(a) {
                return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
            }
        }, function(a, b) {
            f.fn[a] = function(c, d) {
                var e = f.map(this, b, c);
                return L.test(a) || (d = c),
                d && typeof d == "string" && (e = f.filter(d, e)),
                e = this.length > 1 && !R[a] ? f.unique(e) : e,
                (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse()),
                this.pushStack(e, a, P.call(arguments).join(","))
            }
        }),
        f.extend({
            filter: function(a, b, c) {
                return c && (a = ":not(" + a + ")"),
                b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
            },
            dir: function(a, c, d) {
                var e = []
                  , g = a[c];
                while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))
                    g.nodeType === 1 && e.push(g),
                    g = g[c];
                return e
            },
            nth: function(a, b, c, d) {
                b = b || 1;
                var e = 0;
                for (; a; a = a[c])
                    if (a.nodeType === 1 && ++e === b)
                        break;
                return a
            },
            sibling: function(a, b) {
                var c = [];
                for (; a; a = a.nextSibling)
                    a.nodeType === 1 && a !== b && c.push(a);
                return c
            }
        });
        var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
          , W = / jQuery\d+="(?:\d+|null)"/g
          , X = /^\s+/
          , Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
          , Z = /<([\w:]+)/
          , $ = /<tbody/i
          , _ = /<|&#?\w+;/
          , ba = /<(?:script|style)/i
          , bb = /<(?:script|object|embed|option|style)/i
          , bc = new RegExp("<(?:" + V + ")[\\s/>]","i")
          , bd = /checked\s*(?:[^=]|=\s*.checked.)/i
          , be = /\/(java|ecma)script/i
          , bf = /^\s*<!(?:\[CDATA\[|\-\-)/
          , bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }
          , bh = U(c);
        bg.optgroup = bg.option,
        bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead,
        bg.th = bg.td,
        f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
        f.fn.extend({
            text: function(a) {
                return f.access(this, function(a) {
                    return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
                }, null, a, arguments.length)
            },
            wrapAll: function(a) {
                if (f.isFunction(a))
                    return this.each(function(b) {
                        f(this).wrapAll(a.call(this, b))
                    });
                if (this[0]) {
                    var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                    b.map(function() {
                        var a = this;
                        while (a.firstChild && a.firstChild.nodeType === 1)
                            a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return f.isFunction(a) ? this.each(function(b) {
                    f(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = f(this)
                      , c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = f.isFunction(a);
                return this.each(function(c) {
                    f(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    this.nodeType === 1 && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    this.nodeType === 1 && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function(a) {
                        this.parentNode.insertBefore(a, this)
                    });
                if (arguments.length) {
                    var a = f.clean(arguments);
                    return a.push.apply(a, this.toArray()),
                    this.pushStack(a, "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function(a) {
                        this.parentNode.insertBefore(a, this.nextSibling)
                    });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    return a.push.apply(a, f.clean(arguments)),
                    a
                }
            },
            remove: function(a, b) {
                for (var c = 0, d; (d = this[c]) != null; c++)
                    if (!a || f.filter(a, [d]).length)
                        !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")),
                        f.cleanData([d])),
                        d.parentNode && d.parentNode.removeChild(d);
                return this
            },
            empty: function() {
                for (var a = 0, b; (b = this[a]) != null; a++) {
                    b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                    while (b.firstChild)
                        b.removeChild(b.firstChild)
                }
                return this
            },
            clone: function(a, b) {
                return a = a == null ? !1 : a,
                b = b == null ? a : b,
                this.map(function() {
                    return f.clone(this, a, b)
                })
            },
            html: function(a) {
                return f.access(this, function(a) {
                    var c = this[0] || {}
                      , d = 0
                      , e = this.length;
                    if (a === b)
                        return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                    if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Y, "<$1></$2>");
                        try {
                            for (; d < e; d++)
                                c = this[d] || {},
                                c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")),
                                c.innerHTML = a);
                            c = 0
                        } catch (g) {}
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function(a) {
                return this[0] && this[0].parentNode ? f.isFunction(a) ? this.each(function(b) {
                    var c = f(this)
                      , d = c.html();
                    c.replaceWith(a.call(this, b, d))
                }) : (typeof a != "string" && (a = f(a).detach()),
                this.each(function() {
                    var b = this.nextSibling
                      , c = this.parentNode;
                    f(this).remove(),
                    b ? f(b).before(a) : f(c).append(a)
                })) : this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, c, d) {
                var e, g, h, i, j = a[0], k = [];
                if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j))
                    return this.each(function() {
                        f(this).domManip(a, c, d, !0)
                    });
                if (f.isFunction(j))
                    return this.each(function(e) {
                        var g = f(this);
                        a[0] = j.call(this, e, c ? g.html() : b),
                        g.domManip(a, c, d)
                    });
                if (this[0]) {
                    i = j && j.parentNode,
                    f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                        fragment: i
                    } : e = f.buildFragment(a, this, k),
                    h = e.fragment,
                    h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                    if (g) {
                        c = c && f.nodeName(g, "tr");
                        for (var l = 0, m = this.length, n = m - 1; l < m; l++)
                            d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                    k.length && f.each(k, function(a, b) {
                        b.src ? f.ajax({
                            type: "GET",
                            global: !1,
                            url: b.src,
                            async: !1,
                            dataType: "script"
                        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")),
                        b.parentNode && b.parentNode.removeChild(b)
                    })
                }
                return this
            }
        }),
        f.buildFragment = function(a, b, d) {
            var e, g, h, i, j = a[0];
            return b && b[0] && (i = b[0].ownerDocument || b[0]),
            i.createDocumentFragment || (i = c),
            a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0,
            h = f.fragments[j],
            h && h !== 1 && (e = h)),
            e || (e = i.createDocumentFragment(),
            f.clean(a, i, e, d)),
            g && (f.fragments[j] = h ? e : 1),
            {
                fragment: e,
                cacheable: g
            }
        }
        ,
        f.fragments = {},
        f.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            f.fn[a] = function(c) {
                var d = []
                  , e = f(c)
                  , g = this.length === 1 && this[0].parentNode;
                if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1)
                    return e[b](this[0]),
                    this;
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = (h > 0 ? this.clone(!0) : this).get();
                    f(e[h])[b](j),
                    d = d.concat(j)
                }
                return this.pushStack(d, a, e.selector)
            }
        }),
        f.extend({
            clone: function(a, b, c) {
                var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
                if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                    bk(a, h),
                    d = bl(a),
                    e = bl(h);
                    for (g = 0; d[g]; ++g)
                        e[g] && bk(d[g], e[g])
                }
                if (b) {
                    bj(a, h);
                    if (c) {
                        d = bl(a),
                        e = bl(h);
                        for (g = 0; d[g]; ++g)
                            bj(d[g], e[g])
                    }
                }
                return d = e = null,
                h
            },
            clean: function(a, b, d, e) {
                var g, h, i, j = [];
                b = b || c,
                typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
                for (var k = 0, l; (l = a[k]) != null; k++) {
                    typeof l == "number" && (l += "");
                    if (!l)
                        continue;
                    if (typeof l == "string")
                        if (!_.test(l))
                            l = b.createTextNode(l);
                        else {
                            l = l.replace(Y, "<$1></$2>");
                            var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0], p = b.createElement("div"), q = bh.childNodes, r;
                            b === c ? bh.appendChild(p) : U(b).appendChild(p),
                            p.innerHTML = n[1] + l + n[2];
                            while (o--)
                                p = p.lastChild;
                            if (!f.support.tbody) {
                                var s = $.test(l)
                                  , t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                                for (i = t.length - 1; i >= 0; --i)
                                    f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                            }
                            !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild),
                            l = p.childNodes,
                            p && (p.parentNode.removeChild(p),
                            q.length > 0 && (r = q[q.length - 1],
                            r && r.parentNode && r.parentNode.removeChild(r)))
                        }
                    var u;
                    if (!f.support.appendChecked)
                        if (l[0] && typeof (u = l.length) == "number")
                            for (i = 0; i < u; i++)
                                bn(l[i]);
                        else
                            bn(l);
                    l.nodeType ? j.push(l) : j = f.merge(j, l)
                }
                if (d) {
                    g = function(a) {
                        return !a.type || be.test(a.type)
                    }
                    ;
                    for (k = 0; j[k]; k++) {
                        h = j[k];
                        if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type)))
                            e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
                        else {
                            if (h.nodeType === 1) {
                                var v = f.grep(h.getElementsByTagName("script"), g);
                                j.splice.apply(j, [k + 1, 0].concat(v))
                            }
                            d.appendChild(h)
                        }
                    }
                }
                return j
            },
            cleanData: function(a) {
                var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
                for (var h = 0, i; (i = a[h]) != null; h++) {
                    if (i.nodeName && f.noData[i.nodeName.toLowerCase()])
                        continue;
                    c = i[f.expando];
                    if (c) {
                        b = d[c];
                        if (b && b.events) {
                            for (var j in b.events)
                                e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                            b.handle && (b.handle.elem = null)
                        }
                        g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
                        delete d[c]
                    }
                }
            }
        });
        var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i, bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/, bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, bx = ["Top", "Right", "Bottom", "Left"], by, bz, bA;
        f.fn.css = function(a, c) {
            return f.access(this, function(a, c, d) {
                return d !== b ? f.style(a, c, d) : f.css(a, c)
            }, a, c, arguments.length > 1)
        }
        ,
        f.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = by(a, "opacity");
                            return c === "" ? "1" : c
                        }
                        return a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, c, d, e) {
                if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style)
                    return;
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b)
                    return k && "get"in k && (g = k.get(a, !1, e)) !== b ? g : j[c];
                h = typeof d,
                h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)),
                h = "number");
                if (d == null || h === "number" && isNaN(d))
                    return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set"in k) || (d = k.set(a, d)) !== b)
                    try {
                        j[c] = d
                    } catch (l) {}
            },
            css: function(a, c, d) {
                var e, g;
                c = f.camelCase(c),
                g = f.cssHooks[c],
                c = f.cssProps[c] || c,
                c === "cssFloat" && (c = "float");
                if (g && "get"in g && (e = g.get(a, !0, d)) !== b)
                    return e;
                if (by)
                    return by(a, c)
            },
            swap: function(a, b, c) {
                var d = {}, e, f;
                for (f in b)
                    d[f] = a.style[f],
                    a.style[f] = b[f];
                e = c.call(a);
                for (f in b)
                    a.style[f] = d[f];
                return e
            }
        }),
        f.curCSS = f.css,
        c.defaultView && c.defaultView.getComputedStyle && (bz = function(a, b) {
            var c, d, e, g, h = a.style;
            return b = b.replace(br, "-$1").toLowerCase(),
            (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b),
            c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))),
            !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width,
            h.width = c,
            c = e.width,
            h.width = g),
            c
        }
        ),
        c.documentElement.currentStyle && (bA = function(a, b) {
            var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
            return f == null && g && (e = g[b]) && (f = e),
            bt.test(f) && (c = g.left,
            d = a.runtimeStyle && a.runtimeStyle.left,
            d && (a.runtimeStyle.left = a.currentStyle.left),
            g.left = b === "fontSize" ? "1em" : f,
            f = g.pixelLeft + "px",
            g.left = c,
            d && (a.runtimeStyle.left = d)),
            f === "" ? "auto" : f
        }
        ),
        by = bz || bA,
        f.each(["height", "width"], function(a, b) {
            f.cssHooks[b] = {
                get: function(a, c, d) {
                    if (c)
                        return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function() {
                            return bB(a, b, d)
                        })
                },
                set: function(a, b) {
                    return bs.test(b) ? b + "px" : b
                }
            }
        }),
        f.support.opacity || (f.cssHooks.opacity = {
            get: function(a, b) {
                return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style
                  , d = a.currentStyle
                  , e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : ""
                  , g = d && d.filter || c.filter || "";
                c.zoom = 1;
                if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                    c.removeAttribute("filter");
                    if (d && !d.filter)
                        return
                }
                c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
            }
        }),
        f(function() {
            f.support.reliableMarginRight || (f.cssHooks.marginRight = {
                get: function(a, b) {
                    return f.swap(a, {
                        display: "inline-block"
                    }, function() {
                        return b ? by(a, "margin-right") : a.style.marginRight
                    })
                }
            })
        }),
        f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
            var b = a.offsetWidth
              , c = a.offsetHeight;
            return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
        }
        ,
        f.expr.filters.visible = function(a) {
            return !f.expr.filters.hidden(a)
        }
        ),
        f.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            f.cssHooks[a + b] = {
                expand: function(c) {
                    var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
                    for (d = 0; d < 4; d++)
                        f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                    return f
                }
            }
        });
        var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//, bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/, bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {}, bU, bV, bW = ["*/"] + ["*"];
        try {
            bU = e.href
        } catch (bX) {
            bU = c.createElement("a"),
            bU.href = "",
            bU = bU.href
        }
        bV = bQ.exec(bU.toLowerCase()) || [],
        f.fn.extend({
            load: function(a, c, d) {
                if (typeof a != "string" && bR)
                    return bR.apply(this, arguments);
                if (!this.length)
                    return this;
                var e = a.indexOf(" ");
                if (e >= 0) {
                    var g = a.slice(e, a.length);
                    a = a.slice(0, e)
                }
                var h = "GET";
                c && (f.isFunction(c) ? (d = c,
                c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional),
                h = "POST"));
                var i = this;
                return f.ajax({
                    url: a,
                    type: h,
                    dataType: "html",
                    data: c,
                    complete: function(a, b, c) {
                        c = a.responseText,
                        a.isResolved() && (a.done(function(a) {
                            c = a
                        }),
                        i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)),
                        d && i.each(d, [c, b, a])
                    }
                }),
                this
            },
            serialize: function() {
                return f.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? f.makeArray(this.elements) : this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
                }).map(function(a, b) {
                    var c = f(this).val();
                    return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                        return {
                            name: b.name,
                            value: a.replace(bE, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(bE, "\r\n")
                    }
                }).get()
            }
        }),
        f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
            f.fn[b] = function(a) {
                return this.on(b, a)
            }
        }),
        f.each(["get", "post"], function(a, c) {
            f[c] = function(a, d, e, g) {
                return f.isFunction(d) && (g = g || e,
                e = d,
                d = b),
                f.ajax({
                    type: c,
                    url: a,
                    data: d,
                    success: e,
                    dataType: g
                })
            }
        }),
        f.extend({
            getScript: function(a, c) {
                return f.get(a, b, c, "script")
            },
            getJSON: function(a, b, c) {
                return f.get(a, b, c, "json")
            },
            ajaxSetup: function(a, b) {
                return b ? b$(a, f.ajaxSettings) : (b = a,
                a = f.ajaxSettings),
                b$(a, b),
                a
            },
            ajaxSettings: {
                url: bU,
                isLocal: bI.test(bV[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": bW
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": f.parseJSON,
                    "text xml": f.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: bY(bS),
            ajaxTransport: bY(bT),
            ajax: function(a, c) {
                function w(a, c, l, m) {
                    if (s === 2)
                        return;
                    s = 2,
                    q && clearTimeout(q),
                    p = b,
                    n = m || "",
                    v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified"))
                                f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag"))
                                f.etag[k] = z
                        }
                        if (a === 304)
                            w = "notmodified",
                            o = !0;
                        else
                            try {
                                r = cb(d, x),
                                w = "success",
                                o = !0
                            } catch (A) {
                                w = "parsererror",
                                u = A
                            }
                    } else {
                        u = w;
                        if (!w || a)
                            w = "error",
                            a < 0 && (a = 0)
                    }
                    v.status = a,
                    v.statusText = "" + (c || w),
                    o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
                    v.statusCode(j),
                    j = b,
                    t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]),
                    i.fireWith(e, [v, w]),
                    t && (g.trigger("ajaxComplete", [v, d]),
                    --f.active || f.event.trigger("ajaxStop"))
                }
                typeof a == "object" && (c = a,
                a = b),
                c = c || {};
                var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a,
                            l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bG.exec(n))
                                    o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        return s || (d.mimeType = a),
                        this
                    },
                    abort: function(a) {
                        return a = a || "abort",
                        p && p.abort(a),
                        w(0, a),
                        this
                    }
                };
                h.promise(v),
                v.success = v.done,
                v.error = v.fail,
                v.complete = i.add,
                v.statusCode = function(a) {
                    if (a) {
                        var b;
                        if (s < 2)
                            for (b in a)
                                j[b] = [j[b], a[b]];
                        else
                            b = a[v.status],
                            v.then(b, b)
                    }
                    return this
                }
                ,
                d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"),
                d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO),
                d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()),
                d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))),
                d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
                bZ(bS, d, c, v);
                if (s === 2)
                    return !1;
                t = d.global,
                d.type = d.type.toUpperCase(),
                d.hasContent = !bJ.test(d.type),
                t && f.active++ === 0 && f.event.trigger("ajaxStart");
                if (!d.hasContent) {
                    d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data,
                    delete d.data),
                    k = d.url;
                    if (d.cache === !1) {
                        var x = f.now()
                          , y = d.url.replace(bP, "$1_=" + x);
                        d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                    }
                }
                (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
                d.ifModified && (k = k || d.url,
                f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]),
                f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
                v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers)
                    v.setRequestHeader(u, d.headers[u]);
                if (!d.beforeSend || d.beforeSend.call(e, v, d) !== !1 && s !== 2) {
                    for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        v[u](d[u]);
                    p = bZ(bT, d, c, v);
                    if (!p)
                        w(-1, "No Transport");
                    else {
                        v.readyState = 1,
                        t && g.trigger("ajaxSend", [v, d]),
                        d.async && d.timeout > 0 && (q = setTimeout(function() {
                            v.abort("timeout")
                        }, d.timeout));
                        try {
                            s = 1,
                            p.send(l, w)
                        } catch (z) {
                            if (!(s < 2))
                                throw z;
                            w(-1, z)
                        }
                    }
                    return v
                }
                return v.abort(),
                !1
            },
            param: function(a, c) {
                var d = []
                  , e = function(a, b) {
                    b = f.isFunction(b) ? b() : b,
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
                c === b && (c = f.ajaxSettings.traditional);
                if (f.isArray(a) || a.jquery && !f.isPlainObject(a))
                    f.each(a, function() {
                        e(this.name, this.value)
                    });
                else
                    for (var g in a)
                        b_(g, a[g], c, e);
                return d.join("&").replace(bC, "+")
            }
        }),
        f.extend({
            active: 0,
            lastModified: {},
            etag: {}
        });
        var cc = f.now()
          , cd = /(\=)\?(&|$)|\?\?/i;
        f.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                return f.expando + "_" + cc++
            }
        }),
        f.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
            if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
                var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
                return b.jsonp !== !1 && (j = j.replace(cd, l),
                b.url === j && (e && (k = k.replace(cd, l)),
                b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),
                b.url = j,
                b.data = k,
                a[h] = function(a) {
                    g = [a]
                }
                ,
                d.always(function() {
                    a[h] = i,
                    g && f.isFunction(i) && a[h](g[0])
                }),
                b.converters["script json"] = function() {
                    return g || f.error(h + " was not called"),
                    g[0]
                }
                ,
                b.dataTypes[0] = "json",
                "script"
            }
        }),
        f.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(a) {
                    return f.globalEval(a),
                    a
                }
            }
        }),
        f.ajaxPrefilter("script", function(a) {
            a.cache === b && (a.cache = !1),
            a.crossDomain && (a.type = "GET",
            a.global = !1)
        }),
        f.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
                return {
                    send: function(f, g) {
                        d = c.createElement("script"),
                        d.async = "async",
                        a.scriptCharset && (d.charset = a.scriptCharset),
                        d.src = a.url,
                        d.onload = d.onreadystatechange = function(a, c) {
                            if (c || !d.readyState || /loaded|complete/.test(d.readyState))
                                d.onload = d.onreadystatechange = null,
                                e && d.parentNode && e.removeChild(d),
                                d = b,
                                c || g(200, "success")
                        }
                        ,
                        e.insertBefore(d, e.firstChild)
                    },
                    abort: function() {
                        d && d.onload(0, 1)
                    }
                }
            }
        });
        var ce = a.ActiveXObject ? function() {
            for (var a in cg)
                cg[a](0, 1)
        }
        : !1, cf = 0, cg;
        f.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && ch() || ci()
        }
        : ch,
        function(a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials"in a
            })
        }(f.ajaxSettings.xhr()),
        f.support.ajax && f.ajaxTransport(function(c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    send: function(e, g) {
                        var h = c.xhr(), i, j;
                        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (j in c.xhrFields)
                                h[j] = c.xhrFields[j];
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                        !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e)
                                h.setRequestHeader(j, e[j])
                        } catch (k) {}
                        h.send(c.hasContent && c.data || null),
                        d = function(a, e) {
                            var j, k, l, m, n;
                            try {
                                if (d && (e || h.readyState === 4)) {
                                    d = b,
                                    i && (h.onreadystatechange = f.noop,
                                    ce && delete cg[i]);
                                    if (e)
                                        h.readyState !== 4 && h.abort();
                                    else {
                                        j = h.status,
                                        l = h.getAllResponseHeaders(),
                                        m = {},
                                        n = h.responseXML,
                                        n && n.documentElement && (m.xml = n);
                                        try {
                                            m.text = h.responseText
                                        } catch (a) {}
                                        try {
                                            k = h.statusText
                                        } catch (o) {
                                            k = ""
                                        }
                                        !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                    }
                                }
                            } catch (p) {
                                e || g(-1, p)
                            }
                            m && g(j, k, m, l)
                        }
                        ,
                        !c.async || h.readyState === 4 ? d() : (i = ++cf,
                        ce && (cg || (cg = {},
                        f(a).unload(ce)),
                        cg[i] = d),
                        h.onreadystatechange = d)
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
        var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co, cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cq;
        f.fn.extend({
            show: function(a, b, c) {
                var d, e;
                if (a || a === 0)
                    return this.animate(ct("show", 3), a, b, c);
                for (var g = 0, h = this.length; g < h; g++)
                    d = this[g],
                    d.style && (e = d.style.display,
                    !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""),
                    (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
                for (g = 0; g < h; g++) {
                    d = this[g];
                    if (d.style) {
                        e = d.style.display;
                        if (e === "" || e === "none")
                            d.style.display = f._data(d, "olddisplay") || ""
                    }
                }
                return this
            },
            hide: function(a, b, c) {
                if (a || a === 0)
                    return this.animate(ct("hide", 3), a, b, c);
                var d, e, g = 0, h = this.length;
                for (; g < h; g++)
                    d = this[g],
                    d.style && (e = f.css(d, "display"),
                    e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
                for (g = 0; g < h; g++)
                    this[g].style && (this[g].style.display = "none");
                return this
            },
            _toggle: f.fn.toggle,
            toggle: function(a, b, c) {
                var d = typeof a == "boolean";
                return f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                    var b = d ? a : f(this).is(":hidden");
                    f(this)[b ? "show" : "hide"]()
                }) : this.animate(ct("toggle", 3), a, b, c),
                this
            },
            fadeTo: function(a, b, c, d) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                function g() {
                    e.queue === !1 && f._mark(this);
                    var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o, p, q;
                    b.animatedProperties = {};
                    for (i in a) {
                        g = f.camelCase(i),
                        i !== g && (a[g] = a[i],
                        delete a[i]);
                        if ((k = f.cssHooks[g]) && "expand"in k) {
                            l = k.expand(a[g]),
                            delete a[g];
                            for (i in l)
                                i in a || (a[i] = l[i])
                        }
                    }
                    for (g in a) {
                        h = a[g],
                        f.isArray(h) ? (b.animatedProperties[g] = h[1],
                        h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                        if (h === "hide" && d || h === "show" && !d)
                            return b.complete.call(this);
                        c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                        f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                    }
                    b.overflow != null && (this.style.overflow = "hidden");
                    for (i in a)
                        j = new f.fx(this,b,i),
                        h = a[i],
                        cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0),
                        q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"),
                        j[q]()) : j[h]()) : (m = cn.exec(h),
                        n = j.cur(),
                        m ? (o = parseFloat(m[2]),
                        p = m[3] || (f.cssNumber[i] ? "" : "px"),
                        p !== "px" && (f.style(this, i, (o || 1) + p),
                        n = (o || 1) / j.cur() * n,
                        f.style(this, i, n + p)),
                        m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n),
                        j.custom(n, o, p)) : j.custom(n, h, ""));
                    return !0
                }
                var e = f.speed(b, c, d);
                return f.isEmptyObject(a) ? this.each(e.complete, [!1]) : (a = f.extend({}, a),
                e.queue === !1 ? this.each(g) : this.queue(e.queue, g))
            },
            stop: function(a, c, d) {
                return typeof a != "string" && (d = c,
                c = a,
                a = b),
                c && a !== !1 && this.queue(a || "fx", []),
                this.each(function() {
                    function h(a, b, c) {
                        var e = b[c];
                        f.removeData(a, c, !0),
                        e.stop(d)
                    }
                    var b, c = !1, e = f.timers, g = f._data(this);
                    d || f._unmark(!0, this);
                    if (a == null)
                        for (b in g)
                            g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                    else
                        g[b = a + ".run"] && g[b].stop && h(this, g, b);
                    for (b = e.length; b--; )
                        e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(),
                        c = !0,
                        e.splice(b, 1));
                    (!d || !c) && f.dequeue(this, a)
                })
            }
        }),
        f.each({
            slideDown: ct("show", 1),
            slideUp: ct("hide", 1),
            slideToggle: ct("toggle", 1),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            f.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        f.extend({
            speed: function(a, b, c) {
                var d = a && typeof a == "object" ? f.extend({}, a) : {
                    complete: c || !c && b || f.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !f.isFunction(b) && b
                };
                d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
                if (d.queue == null || d.queue === !0)
                    d.queue = "fx";
                return d.old = d.complete,
                d.complete = function(a) {
                    f.isFunction(d.old) && d.old.call(this),
                    d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
                }
                ,
                d
            },
            easing: {
                linear: function(a) {
                    return a
                },
                swing: function(a) {
                    return -Math.cos(a * Math.PI) / 2 + .5
                }
            },
            timers: [],
            fx: function(a, b, c) {
                this.options = b,
                this.elem = a,
                this.prop = c,
                b.orig = b.orig || {}
            }
        }),
        f.fx.prototype = {
            update: function() {
                this.options.step && this.options.step.call(this.elem, this.now, this),
                (f.fx.step[this.prop] || f.fx.step._default)(this)
            },
            cur: function() {
                if (this.elem[this.prop] == null || !!this.elem.style && this.elem.style[this.prop] != null) {
                    var a, b = f.css(this.elem, this.prop);
                    return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
                }
                return this.elem[this.prop]
            },
            custom: function(a, c, d) {
                function h(a) {
                    return e.step(a)
                }
                var e = this
                  , g = f.fx;
                this.startTime = cq || cr(),
                this.end = c,
                this.now = this.start = a,
                this.pos = this.state = 0,
                this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"),
                h.queue = this.options.queue,
                h.elem = this.elem,
                h.saveState = function() {
                    f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
                }
                ,
                h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
            },
            show: function() {
                var a = f._data(this.elem, "fxshow" + this.prop);
                this.options.orig[this.prop] = a || f.style(this.elem, this.prop),
                this.options.show = !0,
                a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
                f(this.elem).show()
            },
            hide: function() {
                this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop),
                this.options.hide = !0,
                this.custom(this.cur(), 0)
            },
            step: function(a) {
                var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options;
                if (a || e >= i.duration + this.startTime) {
                    this.now = this.end,
                    this.pos = this.state = 1,
                    this.update(),
                    i.animatedProperties[this.prop] = !0;
                    for (b in i.animatedProperties)
                        i.animatedProperties[b] !== !0 && (g = !1);
                    if (g) {
                        i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
                            h.style["overflow" + b] = i.overflow[a]
                        }),
                        i.hide && f(h).hide();
                        if (i.hide || i.show)
                            for (b in i.animatedProperties)
                                f.style(h, b, i.orig[b]),
                                f.removeData(h, "fxshow" + b, !0),
                                f.removeData(h, "toggle" + b, !0);
                        d = i.complete,
                        d && (i.complete = !1,
                        d.call(h))
                    }
                    return !1
                }
                return i.duration == Infinity ? this.now = e : (c = e - this.startTime,
                this.state = c / i.duration,
                this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration),
                this.now = this.start + (this.end - this.start) * this.pos),
                this.update(),
                !0
            }
        },
        f.extend(f.fx, {
            tick: function() {
                var a, b = f.timers, c = 0;
                for (; c < b.length; c++)
                    a = b[c],
                    !a() && b[c] === a && b.splice(c--, 1);
                b.length || f.fx.stop()
            },
            interval: 13,
            stop: function() {
                clearInterval(co),
                co = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function(a) {
                    f.style(a.elem, "opacity", a.now)
                },
                _default: function(a) {
                    a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
                }
            }
        }),
        f.each(cp.concat.apply([], cp), function(a, b) {
            b.indexOf("margin") && (f.fx.step[b] = function(a) {
                f.style(a.elem, b, Math.max(0, a.now) + a.unit)
            }
            )
        }),
        f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
            return f.grep(f.timers, function(b) {
                return a === b.elem
            }).length
        }
        );
        var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
        "getBoundingClientRect"in c.documentElement ? cv = function(a, b, c, d) {
            try {
                d = a.getBoundingClientRect()
            } catch (e) {}
            if (!d || !f.contains(c, a))
                return d ? {
                    top: d.top,
                    left: d.left
                } : {
                    top: 0,
                    left: 0
                };
            var g = b.body
              , h = cy(b)
              , i = c.clientTop || g.clientTop || 0
              , j = c.clientLeft || g.clientLeft || 0
              , k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop
              , l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft
              , m = d.top + k - i
              , n = d.left + l - j;
            return {
                top: m,
                left: n
            }
        }
        : cv = function(a, b, c) {
            var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft;
            while ((a = a.parentNode) && a !== h && a !== c) {
                if (f.support.fixedPosition && j.position === "fixed")
                    break;
                d = i ? i.getComputedStyle(a, null) : a.currentStyle,
                k -= a.scrollTop,
                l -= a.scrollLeft,
                a === e && (k += a.offsetTop,
                l += a.offsetLeft,
                f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0,
                l += parseFloat(d.borderLeftWidth) || 0),
                g = e,
                e = a.offsetParent),
                f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0,
                l += parseFloat(d.borderLeftWidth) || 0),
                j = d
            }
            if (j.position === "relative" || j.position === "static")
                k += h.offsetTop,
                l += h.offsetLeft;
            return f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop),
            l += Math.max(c.scrollLeft, h.scrollLeft)),
            {
                top: k,
                left: l
            }
        }
        ,
        f.fn.offset = function(a) {
            if (arguments.length)
                return a === b ? this : this.each(function(b) {
                    f.offset.setOffset(this, a, b)
                });
            var c = this[0]
              , d = c && c.ownerDocument;
            return d ? c === d.body ? f.offset.bodyOffset(c) : cv(c, d, d.documentElement) : null
        }
        ,
        f.offset = {
            bodyOffset: function(a) {
                var b = a.offsetTop
                  , c = a.offsetLeft;
                return f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0,
                c += parseFloat(f.css(a, "marginLeft")) || 0),
                {
                    top: b,
                    left: c
                }
            },
            setOffset: function(a, b, c) {
                var d = f.css(a, "position");
                d === "static" && (a.style.position = "relative");
                var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
                j ? (l = e.position(),
                m = l.top,
                n = l.left) : (m = parseFloat(h) || 0,
                n = parseFloat(i) || 0),
                f.isFunction(b) && (b = b.call(a, c, g)),
                b.top != null && (k.top = b.top - g.top + m),
                b.left != null && (k.left = b.left - g.left + n),
                "using"in b ? b.using.call(a, k) : e.css(k)
            }
        },
        f.fn.extend({
            position: function() {
                if (!this[0])
                    return null;
                var a = this[0]
                  , b = this.offsetParent()
                  , c = this.offset()
                  , d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
                return c.top -= parseFloat(f.css(a, "marginTop")) || 0,
                c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
                d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
                d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0,
                {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent || c.body;
                    while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static")
                        a = a.offsetParent;
                    return a
                })
            }
        }),
        f.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, c) {
            var d = /Y/.test(c);
            f.fn[a] = function(e) {
                return f.access(this, function(a, e, g) {
                    var h = cy(a);
                    if (g === b)
                        return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                    h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
                }, a, e, arguments.length, null)
            }
        }),
        f.each({
            Height: "height",
            Width: "width"
        }, function(a, c) {
            var d = "client" + a
              , e = "scroll" + a
              , g = "offset" + a;
            f.fn["inner" + a] = function() {
                var a = this[0];
                return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
            }
            ,
            f.fn["outer" + a] = function(a) {
                var b = this[0];
                return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
            }
            ,
            f.fn[c] = function(a) {
                return f.access(this, function(a, c, h) {
                    var i, j, k, l;
                    if (f.isWindow(a))
                        return i = a.document,
                        j = i.documentElement[d],
                        f.support.boxModel && j || i.body && i.body[d] || j;
                    if (a.nodeType === 9)
                        return i = a.documentElement,
                        i[d] >= i[e] ? i[d] : Math.max(a.body[e], i[e], a.body[g], i[g]);
                    if (h === b)
                        return k = f.css(a, c),
                        l = parseFloat(k),
                        f.isNumeric(l) ? l : k;
                    f(a).css(c, h)
                }, c, a, arguments.length, null)
            }
        }),
        a.jQuery = a.$ = f,
        typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return f
        })
    }
    )(window),
    function(a, b) {
        var c;
        a.rails = c = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",
            disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input:file",
            linkDisableSelector: "a[data-disable-with]",
            CSRFProtection: function(b) {
                var c = a('meta[name="csrf-token"]').attr("content");
                c && b.setRequestHeader("X-CSRF-Token", c)
            },
            fire: function(b, c, d) {
                var e = a.Event(c);
                return b.trigger(e, d),
                e.result !== !1
            },
            confirm: function(a) {
                return confirm(a)
            },
            ajax: function(b) {
                return a.ajax(b)
            },
            href: function(a) {
                return a.attr("href")
            },
            handleRemote: function(d) {
                var e, f, g, h, i, j;
                if (c.fire(d, "ajax:before")) {
                    h = d.data("cross-domain") || null,
                    i = d.data("type") || a.ajaxSettings && a.ajaxSettings.dataType;
                    if (d.is("form")) {
                        e = d.attr("method"),
                        f = d.attr("action"),
                        g = d.serializeArray();
                        var k = d.data("ujs:submit-button");
                        k && (g.push(k),
                        d.data("ujs:submit-button", null))
                    } else
                        d.is(c.inputChangeSelector) ? (e = d.data("method"),
                        f = d.data("url"),
                        g = d.serialize(),
                        d.data("params") && (g = g + "&" + d.data("params"))) : (e = d.data("method"),
                        f = c.href(d),
                        g = d.data("params") || null);
                    return j = {
                        type: e || "GET",
                        data: g,
                        dataType: i,
                        crossDomain: h,
                        beforeSend: function(a, e) {
                            return e.dataType === b && a.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script),
                            c.fire(d, "ajax:beforeSend", [a, e])
                        },
                        success: function(a, b, c) {
                            d.trigger("ajax:success", [a, b, c])
                        },
                        complete: function(a, b) {
                            d.trigger("ajax:complete", [a, b])
                        },
                        error: function(a, b, c) {
                            d.trigger("ajax:error", [a, b, c])
                        }
                    },
                    f && (j.url = f),
                    c.ajax(j)
                }
                return !1
            },
            handleMethod: function(d) {
                var e = c.href(d)
                  , f = d.data("method")
                  , g = d.attr("target")
                  , h = a("meta[name=csrf-token]").attr("content")
                  , i = a("meta[name=csrf-param]").attr("content")
                  , j = a('<form method="post" action="' + e + '"></form>')
                  , k = '<input name="_method" value="' + f + '" type="hidden" />';
                i !== b && h !== b && (k += '<input name="' + i + '" value="' + h + '" type="hidden" />'),
                g && j.attr("target", g),
                j.hide().append(k).appendTo("body"),
                j.submit()
            },
            disableFormElements: function(b) {
                b.find(c.disableSelector).each(function() {
                    var b = a(this)
                      , c = b.is("button") ? "html" : "val";
                    b.data("ujs:enable-with", b[c]()),
                    b[c](b.data("disable-with")),
                    b.prop("disabled", !0)
                })
            },
            enableFormElements: function(b) {
                b.find(c.enableSelector).each(function() {
                    var b = a(this)
                      , c = b.is("button") ? "html" : "val";
                    b.data("ujs:enable-with") && b[c](b.data("ujs:enable-with")),
                    b.prop("disabled", !1)
                })
            },
            allowAction: function(a) {
                var b = a.data("confirm"), d = !1, e;
                return b ? (c.fire(a, "confirm") && (d = c.confirm(b),
                e = c.fire(a, "confirm:complete", [d])),
                d && e) : !0
            },
            blankInputs: function(b, c, d) {
                var e = a(), f, g = c || "input,textarea";
                return b.find(g).each(function() {
                    f = a(this);
                    if (d ? f.val() : !f.val())
                        e = e.add(f)
                }),
                e.length ? e : !1
            },
            nonBlankInputs: function(a, b) {
                return c.blankInputs(a, b, !0)
            },
            stopEverything: function(b) {
                return a(b.target).trigger("ujs:everythingStopped"),
                b.stopImmediatePropagation(),
                !1
            },
            callFormSubmitBindings: function(c, d) {
                var e = c.data("events")
                  , f = !0;
                return e !== b && e.submit !== b && a.each(e.submit, function(a, b) {
                    if (typeof b.handler == "function")
                        return f = b.handler(d)
                }),
                f
            },
            disableElement: function(a) {
                a.data("ujs:enable-with", a.html()),
                a.html(a.data("disable-with")),
                a.bind("click.railsDisable", function(a) {
                    return c.stopEverything(a)
                })
            },
            enableElement: function(a) {
                a.data("ujs:enable-with") !== b && (a.html(a.data("ujs:enable-with")),
                a.data("ujs:enable-with", !1)),
                a.unbind("click.railsDisable")
            }
        },
        a.ajaxPrefilter(function(a, b, d) {
            a.crossDomain || c.CSRFProtection(d)
        }),
        a(document).delegate(c.linkDisableSelector, "ajax:complete", function() {
            c.enableElement(a(this))
        }),
        a(document).delegate(c.linkClickSelector, "click.rails", function(d) {
            var e = a(this)
              , f = e.data("method")
              , g = e.data("params");
            if (!c.allowAction(e))
                return c.stopEverything(d);
            e.is(c.linkDisableSelector) && c.disableElement(e);
            if (e.data("remote") !== b)
                return (d.metaKey || d.ctrlKey) && (!f || f === "GET") && !g ? !0 : (c.handleRemote(e) === !1 && c.enableElement(e),
                !1);
            if (e.data("method"))
                return c.handleMethod(e),
                !1
        }),
        a(document).delegate(c.inputChangeSelector, "change.rails", function(b) {
            var d = a(this);
            return c.allowAction(d) ? (c.handleRemote(d),
            !1) : c.stopEverything(b)
        }),
        a(document).delegate(c.formSubmitSelector, "submit.rails", function(d) {
            var e = a(this)
              , f = e.data("remote") !== b
              , g = c.blankInputs(e, c.requiredInputSelector)
              , h = c.nonBlankInputs(e, c.fileInputSelector);
            if (!c.allowAction(e))
                return c.stopEverything(d);
            if (g && e.attr("novalidate") == b && c.fire(e, "ajax:aborted:required", [g]))
                return c.stopEverything(d);
            if (f)
                return h ? c.fire(e, "ajax:aborted:file", [h]) : !a.support.submitBubbles && a().jquery < "1.7" && c.callFormSubmitBindings(e, d) === !1 ? c.stopEverything(d) : (c.handleRemote(e),
                !1);
            setTimeout(function() {
                c.disableFormElements(e)
            }, 13)
        }),
        a(document).delegate(c.formInputClickSelector, "click.rails", function(b) {
            var d = a(this);
            if (!c.allowAction(d))
                return c.stopEverything(b);
            var e = d.attr("name")
              , f = e ? {
                name: e,
                value: d.val()
            } : null;
            d.closest("form").data("ujs:submit-button", f)
        }),
        a(document).delegate(c.formSubmitSelector, "ajax:beforeSend.rails", function(b) {
            this == b.target && c.disableFormElements(a(this))
        }),
        a(document).delegate(c.formSubmitSelector, "ajax:complete.rails", function(b) {
            this == b.target && c.enableFormElements(a(this))
        })
    }(jQuery),
    function(a) {
        function b(b, c) {
            var e = a.extend({}, a.fn.accordion.defaults, c)
              , f = "";
            return b.each(function() {
                var b = a(this);
                d(b, e),
                e.bind == "mouseenter" && b.bind("mouseenter", function(a) {
                    a.preventDefault(),
                    g(b, e)
                }),
                e.bind == "mouseover" && b.bind("mouseover", function(a) {
                    a.preventDefault(),
                    g(b, e)
                }),
                e.bind == "click" && b.bind("click", function(a) {
                    a.preventDefault(),
                    g(b, e)
                }),
                e.bind == "dblclick" && b.bind("dblclick", function(a) {
                    a.preventDefault(),
                    g(b, e)
                }),
                id = b.attr("id"),
                h(e) ? k(e) ? j(id, e) === !1 ? (b.addClass(e.cssClose),
                e.loadClose(b, e)) : (b.addClass(e.cssOpen),
                e.loadOpen(b, e),
                f = id) : id != e.defaultOpen ? (b.addClass(e.cssClose),
                e.loadClose(b, e)) : (b.addClass(e.cssOpen),
                e.loadOpen(b, e),
                f = id) : id != e.defaultOpen ? (b.addClass(e.cssClose),
                e.loadClose(b, e)) : (b.addClass(e.cssOpen),
                e.loadOpen(b, e),
                f = id)
            }),
            f.length > 0 && h(e) ? i(f, e) : i("", e),
            b
        }
        function c(a) {
            return a.data("accordion-opts")
        }
        function d(a, b) {
            return a.data("accordion-opts", b)
        }
        function e(b) {
            opened = a(document).find("." + b.cssOpen),
            a.each(opened, function() {
                a(this).addClass(b.cssClose).removeClass(b.cssOpen),
                b.animateClose(a(this), b)
            })
        }
        function f(a, b) {
            e(b),
            a.removeClass(b.cssClose).addClass(b.cssOpen),
            b.animateOpen(a, b),
            h(b) && (id = a.attr("id"),
            i(id, b))
        }
        function g(a, b) {
            return a.hasClass(b.cssOpen) ? (e(b),
            h(b) && i("", b),
            !1) : (e(b),
            f(a, b),
            !1)
        }
        function h(b) {
            return !a.cookie || b.cookieName == "" ? !1 : !0
        }
        function i(b, c) {
            if (!h(c))
                return !1;
            a.cookie(c.cookieName, b, c.cookieOptions)
        }
        function j(b, c) {
            return h(c) ? k(c) ? (cookie = unescape(a.cookie(c.cookieName)),
            cookie != b ? !1 : !0) : !1 : !1
        }
        function k(b) {
            return h(b) ? a.cookie(b.cookieName) == null ? !1 : !0 : !1
        }
        a.fn.accordion = function(a) {
            if (!this || this.length < 1)
                return this;
            b(this, a)
        }
        ,
        a.fn.accordion.defaults = {
            cssClose: "accordion-close",
            cssOpen: "accordion-open",
            cookieName: "accordion",
            cookieOptions: {
                path: "/",
                expires: 7,
                domain: "",
                secure: ""
            },
            defaultOpen: "",
            speed: "slow",
            bind: "click",
            animateOpen: function(a, b) {
                a.next().stop(!0, !0).slideDown(b.speed, function() {
                    scrollToView(a.next())
                })
            },
            animateClose: function(a, b) {
                a.next().stop(!0, !0).slideUp(b.speed)
            },
            loadOpen: function(a, b) {
                a.next().show()
            },
            loadClose: function(a, b) {
                a.next().hide()
            }
        }
    }(jQuery),
    jQuery.easing.jswing = jQuery.easing.swing,
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return b == 0 ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158
              , g = 0
              , h = d;
            if (b == 0)
                return c;
            if ((b /= e) == 1)
                return c + d;
            g || (g = e * .3);
            if (h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else
                var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158
              , g = 0
              , h = d;
            if (b == 0)
                return c;
            if ((b /= e) == 1)
                return c + d;
            g || (g = e * .3);
            if (h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else
                var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158
              , g = 0
              , h = d;
            if (b == 0)
                return c;
            if ((b /= e / 2) == 2)
                return c + d;
            g || (g = e * .3 * 1.5);
            if (h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else
                var f = g / (2 * Math.PI) * Math.asin(d / h);
            return b < 1 ? -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return f == undefined && (f = 1.70158),
            d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return f == undefined && (f = 1.70158),
            d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return f == undefined && (f = 1.70158),
            (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return b < e / 2 ? jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * .5 + c : jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * .5 + d * .5 + c
        }
    }),
    !function(a) {
        var b, c, d, e, f, g, h, i, j = {
            getSliderValuesAtPositionPx: function(a, b) {
                var c, d, e = this, f = e.data("pixel_to_value_mapping");
                if ("undefined" != typeof f)
                    c = f(a),
                    d = f(b);
                else {
                    var g = j.getSliderWidthPx.call(e) - e.data("left_grip_width");
                    c = j.inverse_rangemap_0_to_n.call(e, a, g),
                    d = j.inverse_rangemap_0_to_n.call(e, b, g)
                }
                return [c, d]
            },
            validateAndMoveGripsToPx: function(a, b) {
                var c = this
                  , d = j.getSliderWidthPx.call(c) - c.data("left_grip_width");
                if (d >= b && a >= 0 && d >= a && (!c.data("has_right_grip") || b >= a)) {
                    var e = c.data("cur_min")
                      , f = c.data("cur_max");
                    j.set_position_from_px.call(c, a, b),
                    j.refresh_grips_style.call(c),
                    j.notify_changed_implicit.call(c, "drag_move", e, f)
                }
                return c
            },
            updateAriaAttributes: function() {
                var a = this
                  , b = a.data("settings")
                  , c = a.find(b.left_grip_selector);
                if (a.data("has_right_grip")) {
                    var d = a.find(b.right_grip_selector);
                    c.attr("aria-valuemin", a.data("range_min")).attr("aria-valuenow", k.get_current_min_value.call(a)).attr("aria-valuemax", k.get_current_max_value.call(a)),
                    d.attr("aria-valuemin", k.get_current_min_value.call(a)).attr("aria-valuenow", k.get_current_max_value.call(a)).attr("aria-valuemax", a.data("range_max"))
                } else
                    c.attr("aria-valuemin", a.data("range_min")).attr("aria-valuenow", k.get_current_min_value.call(a)).attr("aria-valuemax", a.data("range_max"));
                return a
            },
            getSliderWidthPx: function() {
                var a = this;
                return Math.round(a.width())
            },
            getGripPositionPx: function(a) {
                return parseInt(a.css("left").replace("px", ""), 10)
            },
            getLeftGripPositionPx: function() {
                var a = this
                  , b = a.data("settings")
                  , c = a.find(b.left_grip_selector);
                return j.getGripPositionPx.call(a, c)
            },
            getRightGripPositionPx: function() {
                var a = this
                  , b = a.data("settings");
                if (a.data("has_right_grip"))
                    return j.getGripPositionPx.call(a, a.find(b.right_grip_selector));
                var c = j.getSliderWidthPx.call(a) - a.data("left_grip_width");
                return j.rangemap_0_to_n.call(a, a.data("cur_max"), c)
            },
            getLeftGripWidth: function() {
                var a = this
                  , b = a.data("settings")
                  , c = a.find(b.left_grip_selector);
                return Math.round(c.width())
            },
            getRightGripWidth: function() {
                var a = this
                  , b = a.data("settings")
                  , c = a.find(b.right_grip_selector);
                return Math.round(c.width())
            },
            binarySearch: function(a, b, c, d) {
                for (var e, f, g = 0, h = a.length - 1; h >= g; ) {
                    e = (g + h) / 2 | 0,
                    f = c(a, e);
                    var i = d(b, a, e);
                    if (i > 0)
                        g = e + 1;
                    else {
                        if (!(0 > i))
                            return e;
                        h = e - 1
                    }
                }
                return -1
            },
            haveLimits: function() {
                var a = this
                  , b = a.data("lower-limit")
                  , c = a.data("upper-limit")
                  , d = !1;
                return "undefined" != typeof b && "undefined" != typeof c && (d = !0),
                d
            },
            refresh_grips_style: function() {
                var a = this
                  , b = a.data("settings");
                if ("undefined" != typeof b.highlight) {
                    var c = a.data("highlightedRangeMin");
                    if ("undefined" != typeof c) {
                        var d = a.find(b.left_grip_selector)
                          , e = a.find(b.right_grip_selector)
                          , f = a.data("highlightedRangeMax")
                          , g = a.data("cur_min")
                          , h = a.data("cur_max")
                          , i = b.highlight.grip_class;
                        c > g || g > f ? d.removeClass(i) : d.addClass(i),
                        c > h || h > f ? e.removeClass(i) : e.addClass(i)
                    }
                }
            },
            valueToPx: function(a) {
                var b = this
                  , c = b.data("value_to_pixel_mapping");
                if ("undefined" != typeof c)
                    return c(a);
                var d = j.getSliderWidthPx.call(b) - b.data("left_grip_width");
                return j.rangemap_0_to_n.call(b, a, d)
            },
            set_position_from_val: function(a, b) {
                var c = this
                  , d = c.data("range_min")
                  , e = c.data("range_max");
                d > a && (a = d),
                a > e && (a = e),
                c.data("has_right_grip") ? (b > e && (b = e),
                d > b && (b = d)) : b = c.data("cur_max");
                var f = j.valueToPx.call(c, a)
                  , g = j.valueToPx.call(c, b);
                return j.set_handles_at_px.call(c, f, g),
                c.data("cur_min", a),
                c.data("has_right_grip") && c.data("cur_max", b),
                c
            },
            set_position_from_px: function(a, b) {
                var c = this;
                j.set_handles_at_px.call(c, a, b);
                var d = j.getSliderValuesAtPositionPx.call(c, a, b)
                  , e = d[0]
                  , f = d[1];
                return c.data("cur_min", e),
                c.data("has_right_grip") && c.data("cur_max", f),
                c
            },
            set_handles_at_px: function(a, b) {
                var c = this
                  , d = c.data("settings")
                  , e = d.left_grip_selector
                  , f = d.right_grip_selector
                  , g = d.value_bar_selector
                  , h = c.data("left_grip_width")
                  , i = h / 2;
                return c.data("has_right_grip") ? (c.find(g).css("left", a + i + "px").css("width", b - a + i + "px"),
                c.find(e).css("left", a + "px")) : (b > a ? c.find(g).css("left", a + i + "px").css("width", b - a + i + "px") : c.find(g).css("left", b + i + "px").css("width", a - b + i + "px"),
                c.find(e).css("left", a + "px")),
                c.find(f).css("left", b + "px"),
                c
            },
            drag_start_func_touch: function(a, b, c, e, f) {
                var g = this
                  , h = a.originalEvent
                  , i = h.touches[0]
                  , k = i.pageY
                  , l = i.pageX
                  , m = Math.abs(g.offset().top - k)
                  , n = g.offset().left
                  , o = n - l
                  , p = l - (n + g.width());
                m > b.touch_tolerance_value_bar_y || o > b.touch_tolerance_value_bar_x || p > b.touch_tolerance_value_bar_x || (h.preventDefault(),
                d = i.pageX,
                j.drag_start_func.call(g, i, b, c, e, f))
            },
            drag_start_func: function(d, f, g, h, i) {
                var l = this;
                if (l.find(f.left_grip_selector + "," + f.value_bar_selector + "," + f.right_grip_selector).removeClass(f.animating_css_class),
                k.is_enabled.call(l)) {
                    var m = a(d.target)
                      , n = !1;
                    if ("object" == typeof f.highlight && (n = m.is(f.highlight.panel_selector)),
                    i !== !1 || m.is(f.left_grip_selector) || m.is(f.right_grip_selector) || m.is(f.value_bar_selector) || n || m.is(l)) {
                        b = l;
                        var o, p, q, r, s, t, u = j.getGripPositionPx.call(l, g), v = j.getSliderWidthPx.call(l) - l.data("left_grip_width"), w = g.offset().left, x = j.getRightGripPositionPx.call(l);
                        p = d.pageX - l.data("left_grip_width") / 2,
                        q = Math.abs(w - p),
                        s = p - w,
                        l.data("has_right_grip") ? (o = h.offset().left,
                        r = Math.abs(o - p),
                        t = p - o) : (r = 2 * q,
                        t = 2 * s),
                        f.user_drag_start_callback.call(l, d),
                        q === r ? w > p ? (u += s,
                        e = !0) : (x += t,
                        e = !1) : r > q ? (u += s,
                        e = !0) : (x += t,
                        e = !1),
                        l.data("has_right_grip") ? x > v && (x = v) : u > v && (u = v),
                        0 > u && (u = 0),
                        c = !0;
                        var y = l.data("cur_min")
                          , z = l.data("cur_max");
                        j.set_position_from_px.call(l, u, x),
                        j.refresh_grips_style.call(l),
                        j.notify_changed_implicit.call(l, "drag_start", y, z),
                        d.preventDefault()
                    }
                }
            },
            drag_move_func_touch: function(a) {
                if (c === !0) {
                    var b = a.originalEvent;
                    b.preventDefault();
                    var d = b.touches[0];
                    j.drag_move_func(d)
                }
            },
            drag_move_func: function(a) {
                if (c) {
                    var f = b
                      , g = j.getSliderWidthPx.call(f) - f.data("left_grip_width")
                      , h = j.getLeftGripPositionPx.call(f)
                      , i = j.getRightGripPositionPx.call(f)
                      , k = a.pageX
                      , l = k - d
                      , m = f.offset().left + f.data("left_grip_width")
                      , n = m + g
                      , o = 0
                      , p = 0;
                    m > k && (o = 1,
                    p = 0),
                    k > n && (p = 1,
                    o = 0),
                    f.data("has_right_grip") && (e ? g >= i && h + l > i && (e = !1,
                    h = i) : h >= 0 && h > i + l && (e = !0,
                    i = h));
                    var q = h
                      , r = i;
                    (l > 0 && !o || 0 > l && !p) && (e ? q += l : r += l),
                    j.validateAndMoveGripsToPx.call(f, q, r),
                    d = k,
                    a.preventDefault()
                }
            },
            drag_end_func_touch: function(a) {
                var b = a.originalEvent;
                b.preventDefault();
                var c = b.touches[0];
                j.drag_end_func(c)
            },
            drag_end_func: function() {
                var a = b;
                if ("undefined" != typeof a) {
                    c = !1,
                    d = void 0,
                    j.notify_mouse_up_implicit.call(a, e),
                    b = void 0;
                    var f = a.data("settings");
                    a.find(f.left_grip_selector + "," + f.value_bar_selector + "," + f.right_grip_selector).addClass(f.animating_css_class)
                }
            },
            get_rounding_for_value: function(a) {
                var b = this
                  , c = b.data("rounding")
                  , d = b.data("rounding_ranges");
                if ("object" == typeof d) {
                    var e = j.binarySearch.call(b, d, a, function(a, b) {
                        return a[b].range
                    }, function(a, b, c) {
                        return a < b[c].range ? c > 0 ? a >= b[c - 1].range ? 0 : -1 : 0 : 1
                    });
                    if (c = 1,
                    e > -1)
                        c = parseInt(d[e].value, 10);
                    else {
                        var f = d.length - 1;
                        a >= d[f].range && (c = d[f].value)
                    }
                }
                return c
            },
            notify_mouse_up_implicit: function(a) {
                var b = this
                  , c = k.get_current_min_value.call(b)
                  , d = k.get_current_max_value.call(b)
                  , e = !1;
                (b.data("beforestart_min") !== c || b.data("beforestart_max") !== d) && (e = !0,
                b.data("beforestart_min", c),
                b.data("beforestart_max", d));
                var f = b.data("settings");
                return f.user_mouseup_callback.call(b, k.get_current_min_value.call(b), k.get_current_max_value.call(b), a, e),
                b
            },
            notify_changed_implicit: function(a, b, c) {
                var d = this
                  , e = !1;
                ("init" === a || "refresh" === a) && (e = !0);
                var f = k.get_current_min_value.call(d)
                  , g = k.get_current_max_value.call(d);
                return e || (b = k.round_value_according_to_rounding.call(d, b),
                c = k.round_value_according_to_rounding.call(d, c)),
                (e || f !== b || g !== c) && (j.notify_changed_explicit.call(d, a, b, c, f, g),
                e = 1),
                e
            },
            notify_changed_explicit: function(a, b, c, d, e) {
                var f = this
                  , g = f.data("settings");
                return f.data("aria_enabled") && j.updateAriaAttributes.call(f),
                g.value_changed_callback.call(f, a, d, e, b, c),
                f
            },
            validate_params: function(b) {
                var c = this
                  , d = c.data("range_min")
                  , e = c.data("range_max")
                  , f = c.data("cur_min")
                  , g = c.data("lower-limit")
                  , h = c.data("upper-limit")
                  , i = j.haveLimits.call(c);
                "undefined" == typeof d && a.error("the data-range_min attribute was not defined"),
                "undefined" == typeof e && a.error("the data-range_max attribute was not defined"),
                "undefined" == typeof f && a.error("the data-cur_min attribute must be defined"),
                d > e && a.error("Invalid input parameter. must be min < max"),
                i && g > h && a.error("Invalid data-lower-limit or data-upper-limit"),
                0 === c.find(b.left_grip_selector).length && a.error("Cannot find element pointed by left_grip_selector: " + b.left_grip_selector),
                "undefined" != typeof b.right_grip_selector && 0 === c.find(b.right_grip_selector).length && a.error("Cannot find element pointed by right_grip_selector: " + b.right_grip_selector),
                "undefined" != typeof b.value_bar_selector && 0 === c.find(b.value_bar_selector).length && a.error("Cannot find element pointed by value_bar_selector" + b.value_bar_selector)
            },
            rangemap_0_to_n: function(a, b) {
                var c = this
                  , d = c.data("range_min")
                  , e = c.data("range_max");
                return d >= a ? 0 : a >= e ? b : Math.floor((b * a - b * d) / (e - d))
            },
            inverse_rangemap_0_to_n: function(a, b) {
                var c = this
                  , d = c.data("range_min")
                  , e = c.data("range_max");
                if (0 >= a)
                    return d;
                if (a >= b)
                    return e;
                var f = (e - d) * a / b;
                return f + d
            }
        }, k = {
            teardown: function() {
                var b = this;
                return b.removeData(),
                a(document).unbind("mousemove.nstSlider").unbind("mouseup.nstSlider"),
                b.parent().unbind("mousedown.nstSlider").unbind("touchstart.nstSlider").unbind("touchmove.nstSlider").unbind("touchend.nstSlider"),
                b.unbind("keydown.nstSlider").unbind("keyup.nstSlider"),
                b
            },
            init: function(b) {
                var c = a.extend({
                    animating_css_class: "nst-animating",
                    touch_tolerance_value_bar_y: 30,
                    touch_tolerance_value_bar_x: 15,
                    left_grip_selector: ".nst-slider-grip-left",
                    right_grip_selector: void 0,
                    highlight: void 0,
                    rounding: void 0,
                    value_bar_selector: void 0,
                    value_changed_callback: function() {},
                    user_mouseup_callback: function() {},
                    user_drag_start_callback: function() {}
                }, b)
                  , d = a(document);
                return d.unbind("mouseup.nstSlider"),
                d.unbind("mousemove.nstSlider"),
                d.bind("mousemove.nstSlider", j.drag_move_func),
                d.bind("mouseup.nstSlider", j.drag_end_func),
                this.each(function() {
                    var b = a(this)
                      , d = b.parent();
                    b.data("enabled", !0);
                    var l = b.data("range_min")
                      , m = b.data("range_max")
                      , n = b.data("cur_min")
                      , o = b.data("cur_max");
                    "undefined" == typeof o && (o = n),
                    "" === l && (l = 0),
                    "" === m && (m = 0),
                    "" === n && (n = 0),
                    "" === o && (o = 0),
                    b.data("range_min", l),
                    b.data("range_max", m),
                    b.data("cur_min", n),
                    b.data("cur_max", o),
                    j.validate_params.call(b, c),
                    b.data("settings", c),
                    "undefined" != typeof c.rounding ? k.set_rounding.call(b, c.rounding) : "undefined" != typeof b.data("rounding") ? k.set_rounding.call(b, b.data("rounding")) : k.set_rounding.call(b, 1);
                    var p = b.find(c.left_grip_selector)[0]
                      , q = a(p)
                      , r = a(b.find(c.right_grip_selector)[0]);
                    "undefined" == typeof q.attr("tabindex") && q.attr("tabindex", 0);
                    var s = !1;
                    b.find(c.right_grip_selector).length > 0 && (s = !0,
                    "undefined" == typeof r.attr("tabindex") && r.attr("tabindex", 0)),
                    b.data("has_right_grip", s),
                    b.data("aria_enabled") === !0 && (q.attr("role", "slider").attr("aria-disabled", "false"),
                    s && r.attr("role", "slider").attr("aria-disabled", "false")),
                    b.bind("keyup.nstSlider", function(a) {
                        if (b.data("enabled")) {
                            switch (a.which) {
                            case 37:
                            case 38:
                            case 39:
                            case 40:
                                if (f === h) {
                                    var c, d, l, m = j.getSliderWidthPx.call(b);
                                    if (0 > g - i) {
                                        for (d = i; m >= d; d++)
                                            if (c = k.round_value_according_to_rounding.call(b, j.getSliderValuesAtPositionPx.call(b, d, d)[1]),
                                            c !== h) {
                                                l = d;
                                                break
                                            }
                                    } else
                                        for (d = i; d >= 0; d--)
                                            if (c = k.round_value_according_to_rounding.call(b, j.getSliderValuesAtPositionPx.call(b, d, d)[1]),
                                            c !== h) {
                                                l = d;
                                                break
                                            }
                                    e ? j.validateAndMoveGripsToPx.call(b, l, j.getRightGripPositionPx.call(b)) : j.validateAndMoveGripsToPx.call(b, j.getLeftGripPositionPx.call(b), l),
                                    j.notify_mouse_up_implicit.call(b, e)
                                }
                            }
                            f = void 0,
                            g = void 0,
                            h = void 0,
                            i = void 0
                        }
                    }),
                    b.bind("keydown.nstSlider", function(a) {
                        if (b.data("enabled")) {
                            var c = function(a, c) {
                                var d = j.getLeftGripPositionPx.call(b)
                                  , l = j.getRightGripPositionPx.call(b);
                                switch ("undefined" == typeof f && (g = e ? d : l,
                                f = e ? k.get_current_min_value.call(b) : k.get_current_max_value.call(b)),
                                c.which) {
                                case 37:
                                case 40:
                                    e ? d-- : l--,
                                    c.preventDefault();
                                    break;
                                case 38:
                                case 39:
                                    e ? d++ : l++,
                                    c.preventDefault()
                                }
                                i = e ? d : l,
                                j.validateAndMoveGripsToPx.call(b, d, l),
                                h = e ? k.get_current_min_value.call(b) : k.get_current_max_value.call(b)
                            };
                            s && b.find(":focus").is(r) ? (e = !1,
                            c.call(b, r, a)) : (e = !0,
                            c.call(b, q, a))
                        }
                    });
                    var t = j.getLeftGripWidth.call(b)
                      , u = s ? j.getRightGripWidth.call(b) : t;
                    b.data("left_grip_width", t),
                    b.data("right_grip_width", u),
                    b.data("value_bar_selector", c.value_bar_selector),
                    l === m || n === o ? k.set_range.call(b, l, m) : j.set_position_from_val.call(b, b.data("cur_min"), b.data("cur_max")),
                    j.notify_changed_implicit.call(b, "init"),
                    b.data("beforestart_min", k.get_current_min_value.call(b)),
                    b.data("beforestart_max", k.get_current_max_value.call(b)),
                    b.bind("mousedown.nstSlider", function(a) {
                        j.drag_start_func.call(b, a, c, q, r, !1)
                    }),
                    d.bind("touchstart.nstSlider", function(a) {
                        j.drag_start_func_touch.call(b, a, c, q, r, !0)
                    }),
                    d.bind("touchend.nstSlider", function(a) {
                        j.drag_end_func_touch.call(b, a)
                    }),
                    d.bind("touchmove.nstSlider", function(a) {
                        j.drag_move_func_touch.call(b, a)
                    });
                    var v = b.data("histogram");
                    "undefined" != typeof v && k.set_step_histogram.call(b, v)
                })
            },
            get_range_min: function() {
                var a = this;
                return a.data("range_min")
            },
            get_range_max: function() {
                var a = this;
                return a.data("range_max")
            },
            get_current_min_value: function() {
                var b, c = a(this), d = k.get_range_min.call(c), e = k.get_range_max.call(c), f = c.data("cur_min");
                if (b = d >= f ? d : k.round_value_according_to_rounding.call(c, f),
                j.haveLimits.call(c)) {
                    if (d >= b)
                        return c.data("lower-limit");
                    if (b >= e)
                        return c.data("upper-limit")
                } else {
                    if (d >= b)
                        return d;
                    if (b >= e)
                        return e
                }
                return b
            },
            get_current_max_value: function() {
                var b, c = a(this), d = k.get_range_min.call(c), e = k.get_range_max.call(c), f = c.data("cur_max");
                if (b = f >= e ? e : k.round_value_according_to_rounding.call(c, f),
                j.haveLimits.call(c)) {
                    if (b >= e)
                        return c.data("upper-limit");
                    if (d >= b)
                        return c.data("lower-limit")
                } else {
                    if (b >= e)
                        return e;
                    if (d >= b)
                        return d
                }
                return b
            },
            is_handle_to_left_extreme: function() {
                var a = this;
                return j.haveLimits.call(a) ? a.data("lower-limit") === k.get_current_min_value.call(a) : k.get_range_min.call(a) === k.get_current_min_value.call(a)
            },
            is_handle_to_right_extreme: function() {
                var a = this;
                return j.haveLimits.call(a) ? a.data("upper-limit") === k.get_current_max_value.call(a) : k.get_range_max.call(a) === k.get_current_max_value.call(a)
            },
            refresh: function() {
                var a = this
                  , b = a.data("last_step_histogram");
                "undefined" != typeof b && k.set_step_histogram.call(a, b),
                j.set_position_from_val.call(a, k.get_current_min_value.call(a), k.get_current_max_value.call(a));
                var c = a.data("highlightedRangeMin");
                if ("number" == typeof c) {
                    var d = a.data("highlightedRangeMax");
                    k.highlight_range.call(a, c, d)
                }
                return j.notify_changed_implicit.call(a, "refresh"),
                a
            },
            disable: function() {
                var a = this
                  , b = a.data("settings");
                return a.data("enabled", !1).find(b.left_grip_selector).attr("aria-disabled", "true").end().find(b.right_grip_selector).attr("aria-disabled", "true"),
                a
            },
            enable: function() {
                var a = this
                  , b = a.data("settings");
                return a.data("enabled", !0).find(b.left_grip_selector).attr("aria-disabled", "false").end().find(b.right_grip_selector).attr("aria-disabled", "false"),
                a
            },
            is_enabled: function() {
                var a = this;
                return a.data("enabled")
            },
            set_position: function(a, b) {
                var c = this
                  , d = c.data("cur_min")
                  , e = c.data("cur_max");
                a > b ? j.set_position_from_val.call(c, b, a) : j.set_position_from_val.call(c, a, b),
                j.refresh_grips_style.call(c),
                j.notify_changed_implicit.call(c, "set_position", d, e),
                c.data("beforestart_min", a),
                c.data("beforestart_max", b)
            },
            set_step_histogram: function(b) {
                var c = this;
                c.data("last_step_histogram", b),
                "undefined" == typeof b && (a.error("got an undefined histogram in set_step_histogram"),
                j.unset_step_histogram.call(c));
                var d = j.getSliderWidthPx.call(c) - c.data("left_grip_width")
                  , e = b.length;
                if (!(0 >= d)) {
                    var f, g = 0;
                    for (f = 0; e > f; f++)
                        g += b[f];
                    if (0 === g)
                        return k.unset_step_histogram.call(c),
                        c;
                    var h = parseFloat(g) / d;
                    for (f = 0; e > f; f++)
                        b[f] = b[f] / h;
                    var i = [b[0]];
                    for (f = 1; e > f; f++) {
                        var l = i[f - 1] + b[f];
                        i.push(l)
                    }
                    i.push(d);
                    for (var m = [c.data("range_min")], n = 0, o = m[0], p = 0; d >= n; ) {
                        var q = parseInt(i.shift(), 10)
                          , r = j.inverse_rangemap_0_to_n.call(c, p + 1, e + 1);
                        p++;
                        var s = q - n
                          , t = r - o;
                        for (f = n; q > f; f++) {
                            var u = o + t * (f - n + 1) / s;
                            m.push(u),
                            n++,
                            o = u
                        }
                        if (n === d)
                            break
                    }
                    m[m.length - 1] = c.data("range_max");
                    var v = function(a) {
                        return m[parseInt(a, 10)]
                    }
                      , w = function(b) {
                        var d = j.binarySearch.call(c, m, b, function(a, b) {
                            return a[b]
                        }, function(b, c, d) {
                            return b === c[d] ? 0 : b < c[d] && 0 === d ? 0 : c[d - 1] <= b && b < c[d] ? 0 : b > c[d] ? 1 : b <= c[d - 1] ? -1 : void a.error("cannot compare s: " + b + " with a[" + d + "]. a is: " + c.join(","))
                        });
                        return d
                    };
                    return c.data("pixel_to_value_mapping", v),
                    c.data("value_to_pixel_mapping", w),
                    c
                }
            },
            unset_step_histogram: function() {
                var a = this;
                return a.removeData("pixel_to_value_mapping"),
                a.removeData("value_to_pixel_mapping"),
                a.removeData("last_step_histogram"),
                a
            },
            set_range: function(a, b) {
                var c = this
                  , d = k.get_current_min_value.call(c)
                  , e = k.get_current_max_value.call(c);
                return c.data("range_min", a),
                c.data("range_max", b),
                j.set_position_from_val.call(c, d, e),
                j.notify_changed_implicit.call(c, "set_range", d, e),
                c
            },
            highlight_range: function(b, c) {
                var d = this
                  , e = d.data("settings");
                "undefined" == typeof e.highlight && a.error('you cannot call highlight_range if you haven\' specified the "highlight" parameter in construction!'),
                b || (b = 0),
                c || (c = 0);
                var f = j.valueToPx.call(d, b)
                  , g = j.valueToPx.call(d, c)
                  , h = g - f + d.data("left_grip_width")
                  , i = d.find(e.highlight.panel_selector);
                return i.css("left", f + "px"),
                i.css("width", h + "px"),
                d.data("highlightedRangeMin", b),
                d.data("highlightedRangeMax", c),
                j.refresh_grips_style.call(d),
                d
            },
            set_rounding: function(b) {
                var c = this;
                "string" == typeof b && b.indexOf("{") > -1 && (b = a.parseJSON(b)),
                c.data("rounding", b);
                var d = [];
                if ("object" == typeof b) {
                    var e;
                    for (e in b)
                        if (b.hasOwnProperty(e)) {
                            var f = b[e];
                            d.push({
                                range: f,
                                value: e
                            })
                        }
                    d.sort(function(a, b) {
                        return a.range - b.range
                    }),
                    c.data("rounding_ranges", d)
                } else
                    c.removeData("rounding_ranges");
                return c
            },
            get_rounding: function() {
                var a = this;
                return a.data("rounding")
            },
            round_value_according_to_rounding: function(b) {
                var c = this
                  , d = j.get_rounding_for_value.call(c, b);
                if (d > 0) {
                    var e = b / d
                      , f = parseInt(e, 10)
                      , g = e - f;
                    g > .5 && f++;
                    var h = f * d;
                    return h
                }
                return a.error("rounding must be > 0, got " + d + " instead"),
                b
            }
        }, l = "nstSlider";
        a.fn[l] = function(b) {
            if (k[b]) {
                if (this.data("initialized") === !0)
                    return k[b].apply(this, Array.prototype.slice.call(arguments, 1));
                throw new Error("method " + b + " called on an uninitialized instance of " + l)
            }
            return "object" != typeof b && b ? void a.error("Cannot call method " + b) : (this.data("initialized", !0),
            k.init.apply(this, arguments))
        }
    }(jQuery),
    function(a) {
        var b = !1
          , c = !1
          , d = {
            isUrl: function(a) {
                var b = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                return b.test(a) ? !0 : !1
            },
            loadContent: function(a, b) {
                a.html(b)
            },
            addPrefix: function(a) {
                var b = a.attr("id")
                  , c = a.attr("class");
                "string" == typeof b && "" !== b && a.attr("id", b.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")),
                "string" == typeof c && "" !== c && "sidr-inner" !== c && a.attr("class", c.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")),
                a.removeAttr("style")
            },
            execute: function(d, f, g) {
                "function" == typeof f ? (g = f,
                f = "sidr") : f || (f = "sidr");
                var h, j, k, l = a("#" + f), m = a(l.data("body")), n = a("html"), p = l.outerWidth(!0), q = l.data("speed"), r = l.data("side"), s = l.data("displace"), u = l.data("onOpen"), v = l.data("onClose"), w = "sidr" === f ? "sidr-open" : "sidr-open " + f + "-open";
                if ("open" === d || "toggle" === d && !l.is(":visible")) {
                    if (l.is(":visible") || b)
                        return;
                    if (c !== !1)
                        return e.close(c, function() {
                            e.open(f)
                        }),
                        void 0;
                    b = !0,
                    "left" === r ? (h = {
                        left: p + "px"
                    },
                    j = {
                        left: "0px"
                    }) : (h = {
                        right: p + "px"
                    },
                    j = {
                        right: "0px"
                    }),
                    m.is("body") && (k = n.scrollTop(),
                    n.css("overflow-x", "hidden").scrollTop(k)),
                    s ? m.addClass("sidr-animating").css({
                        width: m.width(),
                        position: "absolute"
                    }).animate(h, q, function() {
                        a(this).addClass(w)
                    }) : setTimeout(function() {
                        a(this).addClass(w)
                    }, q),
                    l.css("display", "block").animate(j, q, function() {
                        b = !1,
                        c = f,
                        "function" == typeof g && g(f),
                        m.removeClass("sidr-animating")
                    }),
                    u()
                } else {
                    if (!l.is(":visible") || b)
                        return;
                    b = !0,
                    "left" === r ? (h = {
                        left: 0
                    },
                    j = {
                        left: "-" + p + "px"
                    }) : (h = {
                        right: 0
                    },
                    j = {
                        right: "-" + p + "px"
                    }),
                    m.is("body") && (k = n.scrollTop(),
                    n.removeAttr("style").scrollTop(k)),
                    m.addClass("sidr-animating").animate(h, q).removeClass(w),
                    l.animate(j, q, function() {
                        l.removeAttr("style").hide(),
                        m.removeAttr("style"),
                        a("html").removeAttr("style"),
                        b = !1,
                        c = !1,
                        "function" == typeof g && g(f),
                        m.removeClass("sidr-animating")
                    }),
                    v()
                }
            }
        }
          , e = {
            open: function(a, b) {
                d.execute("open", a, b)
            },
            close: function(a, b) {
                d.execute("close", a, b)
            },
            toggle: function(a, b) {
                d.execute("toggle", a, b)
            },
            toogle: function(a, b) {
                d.execute("toggle", a, b)
            }
        };
        a.sidr = function(b) {
            return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof b && "string" != typeof b && b ? (a.error("Method " + b + " does not exist on jQuery.sidr"),
            void 0) : e.toggle.apply(this, arguments)
        }
        ,
        a.fn.sidr = function(b) {
            var c = a.extend({
                name: "sidr",
                speed: 200,
                side: "left",
                source: null,
                renaming: !0,
                body: "body",
                displace: !0,
                onOpen: function() {},
                onClose: function() {}
            }, b)
              , f = c.name
              , g = a("#" + f);
            if (0 === g.length && (g = a("<div />").attr("id", f).appendTo(a("body"))),
            g.addClass("sidr").addClass(c.side).data({
                speed: c.speed,
                side: c.side,
                body: c.body,
                displace: c.displace,
                onOpen: c.onOpen,
                onClose: c.onClose
            }),
            "function" == typeof c.source) {
                var h = c.source(f);
                d.loadContent(g, h)
            } else if ("string" == typeof c.source && d.isUrl(c.source))
                a.get(c.source, function(a) {
                    d.loadContent(g, a)
                });
            else if ("string" == typeof c.source) {
                var i = ""
                  , j = c.source.split(",");
                if (a.each(j, function(b, c) {
                    i += '<div class="sidr-inner">' + a(c).html() + "</div>"
                }),
                c.renaming) {
                    var k = a("<div />").html(i);
                    k.find("*").each(function(b, c) {
                        var e = a(c);
                        d.addPrefix(e)
                    }),
                    i = k.html()
                }
                d.loadContent(g, i)
            } else
                null !== c.source && a.error("Invalid Sidr Source");
            return this.each(function() {
                var b = a(this)
                  , c = b.data("sidr");
                c || (b.data("sidr", f),
                "ontouchstart"in document.documentElement ? (b.bind("touchstart", function(a) {
                    a.originalEvent.touches[0],
                    this.touched = a.timeStamp
                }),
                b.bind("touchend", function(a) {
                    var b = Math.abs(a.timeStamp - this.touched);
                    200 > b && (a.preventDefault(),
                    e.toggle(f))
                })) : b.click(function(a) {
                    a.preventDefault(),
                    e.toggle(f)
                }))
            })
        }
    }(jQuery),
    function(a) {
        a.fn.touchwipe = function(b) {
            var c = {
                min_move_x: 20,
                min_move_y: 20,
                wipeLeft: function() {},
                wipeRight: function() {},
                wipeUp: function() {},
                wipeDown: function() {},
                preventDefaultEvents: !0
            };
            return b && a.extend(c, b),
            this.each(function() {
                function e() {
                    this.removeEventListener("touchmove", f),
                    a = null,
                    d = !1
                }
                function f(f) {
                    c.preventDefaultEvents && f.preventDefault();
                    if (d) {
                        var g = f.touches[0].pageX
                          , h = f.touches[0].pageY
                          , i = a - g
                          , j = b - h;
                        Math.abs(i) >= c.min_move_x ? (e(),
                        i > 0 ? c.wipeLeft() : c.wipeRight()) : Math.abs(j) >= c.min_move_y && (e(),
                        j > 0 ? c.wipeDown() : c.wipeUp())
                    }
                }
                function g(c) {
                    c.touches.length == 1 && (a = c.touches[0].pageX,
                    b = c.touches[0].pageY,
                    d = !0,
                    this.addEventListener("touchmove", f, !1))
                }
                var a, b, d = !1;
                "ontouchstart"in document.documentElement && this.addEventListener("touchstart", g, !1)
            }),
            this
        }
    }(jQuery),
    function(a) {
        a.fn.visible = function(b, c, d) {
            var f = a(this).eq(0)
              , g = f.get(0)
              , h = a(window)
              , i = h.scrollTop()
              , j = i + h.height()
              , k = h.scrollLeft()
              , l = k + h.width()
              , m = f.offset().top
              , n = m + f.height()
              , o = f.offset().left
              , p = o + f.width()
              , q = b === !0 ? n : m
              , r = b === !0 ? m : n
              , s = b === !0 ? p : o
              , t = b === !0 ? o : p
              , u = c === !0 ? g.offsetWidth * g.offsetHeight : !0
              , d = d ? d : "both";
            if (d === "both")
                return !!u && r <= j && q >= i && t <= l && s >= k;
            if (d === "vertical")
                return !!u && r <= j && q >= i;
            if (d === "horizontal")
                return !!u && t <= l && s >= k
        }
    }(jQuery),
    window.Modernizr = function(a, b, c) {
        function d(a) {
            r.cssText = a
        }
        function e(a, b) {
            return d(v.join(a + ";") + (b || ""))
        }
        function f(a, b) {
            return typeof a === b
        }
        function g(a, b) {
            return !!~("" + a).indexOf(b)
        }
        function h(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!g(e, "-") && r[e] !== c)
                    return b == "pfx" ? e : !0
            }
            return !1
        }
        function i(a, b, d) {
            for (var e in a) {
                var g = b[a[e]];
                if (g !== c)
                    return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }
        function j(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1)
              , e = (a + " " + x.join(d + " ") + d).split(" ");
            return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + y.join(d + " ") + d).split(" "),
            i(e, b, c))
        }
        function k() {
            m.input = function(c) {
                for (var d = 0, e = c.length; d < e; d++)
                    C[c[d]] = c[d]in s;
                return C.list && (C.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
                C
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
            m.inputtypes = function(a) {
                for (var d = 0, e, f, g, h = a.length; d < h; d++)
                    s.setAttribute("type", f = a[d]),
                    e = s.type !== "text",
                    e && (s.value = t,
                    s.style.cssText = "position:absolute;visibility:hidden;",
                    /^range$/.test(f) && s.style.WebkitAppearance !== c ? (o.appendChild(s),
                    g = b.defaultView,
                    e = g.getComputedStyle && g.getComputedStyle(s, null).WebkitAppearance !== "textfield" && s.offsetHeight !== 0,
                    o.removeChild(s)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = s.checkValidity && s.checkValidity() === !1 : e = s.value != t)),
                    B[a[d]] = !!e;
                return B
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var l = "2.6.2", m = {}, n = !0, o = b.documentElement, p = "modernizr", q = b.createElement(p), r = q.style, s = b.createElement("input"), t = ":)", u = {}.toString, v = " -webkit- -moz- -o- -ms- ".split(" "), w = "Webkit Moz O ms", x = w.split(" "), y = w.toLowerCase().split(" "), z = {
            svg: "http://www.w3.org/2000/svg"
        }, A = {}, B = {}, C = {}, D = [], E = D.slice, F, G = function(a, c, d, e) {
            var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body");
            if (parseInt(d, 10))
                while (d--)
                    h = b.createElement("div"),
                    h.id = e ? e[d] : p + (d + 1),
                    j.appendChild(h);
            return f = ["&#173;", '<style id="s', p, '">', a, "</style>"].join(""),
            j.id = p,
            (k ? j : l).innerHTML += f,
            l.appendChild(j),
            k || (l.style.background = "",
            l.style.overflow = "hidden",
            i = o.style.overflow,
            o.style.overflow = "hidden",
            o.appendChild(l)),
            g = c(j, a),
            k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l),
            o.style.overflow = i),
            !!g
        }, H = function(b) {
            var c = a.matchMedia || a.msMatchMedia;
            if (c)
                return c(b).matches;
            var d;
            return G("@media " + b + " { #" + p + " { position: absolute; } }", function(b) {
                d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
            }),
            d
        }, I = function() {
            function a(a, e) {
                e = e || b.createElement(d[a] || "div"),
                a = "on" + a;
                var g = a in e;
                return g || (e.setAttribute || (e = b.createElement("div")),
                e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""),
                g = f(e[a], "function"),
                f(e[a], "undefined") || (e[a] = c),
                e.removeAttribute(a))),
                e = null,
                g
            }
            var d = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return a
        }(), J = {}.hasOwnProperty, K;
        !f(J, "undefined") && !f(J.call, "undefined") ? K = function(a, b) {
            return J.call(a, b)
        }
        : K = function(a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
        }
        ,
        Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if (typeof b != "function")
                throw new TypeError;
            var c = E.call(arguments, 1)
              , d = function() {
                if (this instanceof d) {
                    var e = function() {};
                    e.prototype = b.prototype;
                    var f = new e
                      , g = b.apply(f, c.concat(E.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return b.apply(a, c.concat(E.call(arguments)))
            };
            return d
        }
        ),
        A.flexbox = function() {
            return j("flexWrap")
        }
        ,
        A.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }
        ,
        A.canvastext = function() {
            return !!m.canvas && !!f(b.createElement("canvas").getContext("2d").fillText, "function")
        }
        ,
        A.webgl = function() {
            return !!a.WebGLRenderingContext
        }
        ,
        A.touch = function() {
            var c;
            return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : G(["@media (", v.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = a.offsetTop === 9
            }),
            c
        }
        ,
        A.geolocation = function() {
            return "geolocation"in navigator
        }
        ,
        A.postmessage = function() {
            return !!a.postMessage
        }
        ,
        A.websqldatabase = function() {
            return !!a.openDatabase
        }
        ,
        A.indexedDB = function() {
            return !!j("indexedDB", a)
        }
        ,
        A.hashchange = function() {
            return I("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }
        ,
        A.history = function() {
            return !!a.history && !!history.pushState
        }
        ,
        A.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable"in a || "ondragstart"in a && "ondrop"in a
        }
        ,
        A.websockets = function() {
            return "WebSocket"in a || "MozWebSocket"in a
        }
        ,
        A.rgba = function() {
            return d("background-color:rgba(150,255,150,.5)"),
            g(r.backgroundColor, "rgba")
        }
        ,
        A.hsla = function() {
            return d("background-color:hsla(120,40%,100%,.5)"),
            g(r.backgroundColor, "rgba") || g(r.backgroundColor, "hsla")
        }
        ,
        A.multiplebgs = function() {
            return d("background:url(https://),url(https://),red url(https://)"),
            /(url\s*\(.*?){3}/.test(r.background)
        }
        ,
        A.backgroundsize = function() {
            return j("backgroundSize")
        }
        ,
        A.borderimage = function() {
            return j("borderImage")
        }
        ,
        A.borderradius = function() {
            return j("borderRadius")
        }
        ,
        A.boxshadow = function() {
            return j("boxShadow")
        }
        ,
        A.textshadow = function() {
            return b.createElement("div").style.textShadow === ""
        }
        ,
        A.opacity = function() {
            return e("opacity:.55"),
            /^0.55$/.test(r.opacity)
        }
        ,
        A.cssanimations = function() {
            return j("animationName")
        }
        ,
        A.csscolumns = function() {
            return j("columnCount")
        }
        ,
        A.cssgradients = function() {
            var a = "background-image:"
              , b = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
              , c = "linear-gradient(left top,#9f9, white);";
            return d((a + "-webkit- ".split(" ").join(b + a) + v.join(c + a)).slice(0, -a.length)),
            g(r.backgroundImage, "gradient")
        }
        ,
        A.cssreflections = function() {
            return j("boxReflect")
        }
        ,
        A.csstransforms = function() {
            return !!j("transform")
        }
        ,
        A.csstransforms3d = function() {
            var a = !!j("perspective");
            return a && "webkitPerspective"in o.style && G("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = b.offsetLeft === 9 && b.offsetHeight === 3
            }),
            a
        }
        ,
        A.csstransitions = function() {
            return j("transition")
        }
        ,
        A.fontface = function() {
            var a;
            return G('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr")
                  , f = e.sheet || e.styleSheet
                  , g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
            }),
            a
        }
        ,
        A.generatedcontent = function() {
            var a;
            return G(["#", p, "{font:0/0 a}#", p, ':after{content:"', t, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }),
            a
        }
        ,
        A.video = function() {
            var a = b.createElement("video")
              , c = !1;
            try {
                if (c = !!a.canPlayType)
                    c = new Boolean(c),
                    c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
                    c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
                    c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            } catch (d) {}
            return c
        }
        ,
        A.audio = function() {
            var a = b.createElement("audio")
              , c = !1;
            try {
                if (c = !!a.canPlayType)
                    c = new Boolean(c),
                    c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
            } catch (d) {}
            return c
        }
        ,
        A.localstorage = function() {
            try {
                return localStorage.setItem(p, p),
                localStorage.removeItem(p),
                !0
            } catch (a) {
                return !1
            }
        }
        ,
        A.sessionstorage = function() {
            try {
                return sessionStorage.setItem(p, p),
                sessionStorage.removeItem(p),
                !0
            } catch (a) {
                return !1
            }
        }
        ,
        A.webworkers = function() {
            return !!a.Worker
        }
        ,
        A.applicationcache = function() {
            return !!a.applicationCache
        }
        ,
        A.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(z.svg, "svg").createSVGRect
        }
        ,
        A.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>",
            (a.firstChild && a.firstChild.namespaceURI) == z.svg
        }
        ,
        A.smil = function() {
            return !!b.createElementNS && /SVGAnimate/.test(u.call(b.createElementNS(z.svg, "animate")))
        }
        ,
        A.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(u.call(b.createElementNS(z.svg, "clipPath")))
        }
        ;
        for (var L in A)
            K(A, L) && (F = L.toLowerCase(),
            m[F] = A[L](),
            D.push((m[F] ? "" : "no-") + F));
        return m.input || k(),
        m.addTest = function(a, b) {
            if (typeof a == "object")
                for (var d in a)
                    K(a, d) && m.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (m[a] !== c)
                    return m;
                b = typeof b == "function" ? b() : b,
                typeof n != "undefined" && n && (o.className += " " + (b ? "" : "no-") + a),
                m[a] = b
            }
            return m
        }
        ,
        d(""),
        q = s = null,
        function(a, b) {
            function c(a, b) {
                var c = a.createElement("p")
                  , d = a.getElementsByTagName("head")[0] || a.documentElement;
                return c.innerHTML = "x<style>" + b + "</style>",
                d.insertBefore(c.lastChild, d.firstChild)
            }
            function d() {
                var a = r.elements;
                return typeof a == "string" ? a.split(" ") : a
            }
            function e(a) {
                var b = p[a[n]];
                return b || (b = {},
                o++,
                a[n] = o,
                p[o] = b),
                b
            }
            function f(a, c, d) {
                c || (c = b);
                if (q)
                    return c.createElement(a);
                d || (d = e(c));
                var f;
                return d.cache[a] ? f = d.cache[a].cloneNode() : l.test(a) ? f = (d.cache[a] = d.createElem(a)).cloneNode() : f = d.createElem(a),
                f.canHaveChildren && !k.test(a) ? d.frag.appendChild(f) : f
            }
            function g(a, c) {
                a || (a = b);
                if (q)
                    return a.createDocumentFragment();
                c = c || e(a);
                var f = c.frag.cloneNode()
                  , g = 0
                  , h = d()
                  , i = h.length;
                for (; g < i; g++)
                    f.createElement(h[g]);
                return f
            }
            function h(a, b) {
                b.cache || (b.cache = {},
                b.createElem = a.createElement,
                b.createFrag = a.createDocumentFragment,
                b.frag = b.createFrag()),
                a.createElement = function(c) {
                    return r.shivMethods ? f(c, a, b) : b.createElem(c)
                }
                ,
                a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g, function(a) {
                    return b.createElem(a),
                    b.frag.createElement(a),
                    'c("' + a + '")'
                }) + ");return n}")(r, b.frag)
            }
            function i(a) {
                a || (a = b);
                var d = e(a);
                return r.shivCSS && !m && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
                q || h(a, d),
                a
            }
            var j = a.html5 || {}, k = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, l = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, m, n = "_html5shiv", o = 0, p = {}, q;
            (function() {
                try {
                    var a = b.createElement("a");
                    a.innerHTML = "<xyz></xyz>",
                    m = "hidden"in a,
                    q = a.childNodes.length == 1 || function() {
                        b.createElement("a");
                        var a = b.createDocumentFragment();
                        return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                    }()
                } catch (c) {
                    m = !0,
                    q = !0
                }
            }
            )();
            var r = {
                elements: j.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                shivCSS: j.shivCSS !== !1,
                supportsUnknownElements: q,
                shivMethods: j.shivMethods !== !1,
                type: "default",
                shivDocument: i,
                createElement: f,
                createDocumentFragment: g
            };
            a.html5 = r,
            i(b)
        }(this, b),
        m._version = l,
        m._prefixes = v,
        m._domPrefixes = y,
        m._cssomPrefixes = x,
        m.mq = H,
        m.hasEvent = I,
        m.testProp = function(a) {
            return h([a])
        }
        ,
        m.testAllProps = j,
        m.testStyles = G,
        m.prefixed = function(a, b, c) {
            return b ? j(a, b, c) : j(a, "pfx")
        }
        ,
        o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (n ? " js " + D.join(" ") : ""),
        m
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }
        function e(a) {
            return "string" == typeof a
        }
        function f() {}
        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }
        function h() {
            var a = p.shift();
            q = 1,
            a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(),
            h()) : q = 0
        }
        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1,
                !q && h(),
                l.onload = l.onreadystatechange = null,
                b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c])
                        y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout
              , l = b.createElement(a)
              , o = 0
              , r = 0
              , u = {
                t: d,
                s: c,
                e: f,
                a: i,
                x: j
            };
            1 === y[c] && (r = 1,
            y[c] = []),
            "object" == a ? l.data = c : (l.src = c,
            l.type = a),
            l.width = l.height = "0",
            l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }
            ,
            p.splice(e, 0, u),
            "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n),
            m(k, j)) : y[c].push(l))
        }
        function j(a, b, c, d, f) {
            return q = 0,
            b = b || "j",
            e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a),
            1 == p.length && h()),
            this
        }
        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            },
            a
        }
        var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
            return "[object Array]" == o.call(a)
        }
        , x = [], y = {}, z = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]),
                a
            }
        }, A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                    url: c,
                    origUrl: c,
                    prefixes: a
                }, e, f, g;
                for (f = 0; f < d; f++)
                    g = a[f].split("="),
                    (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++)
                    c = x[f](c);
                return c
            }
            function g(a, e, f, g, h) {
                var i = b(a)
                  , j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(),
                i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
                i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1,
                f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout),
                (d(e) || d(j)) && f.load(function() {
                    k(),
                    e && e(i.origUrl, h, g),
                    j && j(i.origUrl, h, g),
                    y[i.url] = 2
                })))
            }
            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a))
                            c || (j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a),
                                l()
                            }
                            ),
                            g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                var b = 0, c;
                                for (c in a)
                                    a.hasOwnProperty(c) && b++;
                                return b
                            }(),
                            a)
                                a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a),
                                    l()
                                }
                                : j[n] = function(a) {
                                    return function() {
                                        var b = [].slice.call(arguments);
                                        a && a.apply(this, b),
                                        l()
                                    }
                                }(k[n])),
                                g(a[n], j, b, n, h))
                    } else
                        !c && l()
                }
                var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
                c(h ? a.yep : a.nope, !!i),
                i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a))
                g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++)
                    j = a[i],
                    e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else
                Object(a) === a && h(a, l)
        }
        ,
        B.addPrefix = function(a, b) {
            z[a] = b
        }
        ,
        B.addFilter = function(a) {
            x.push(a)
        }
        ,
        B.errorTimeout = 1e4,
        null == b.readyState && b.addEventListener && (b.readyState = "loading",
        b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0),
            b.readyState = "complete"
        }
        , 0)),
        a.yepnope = k(),
        a.yepnope.executeStack = h,
        a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d)
                k.setAttribute(o, d[o]);
            c = j ? h : c || f,
            k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1,
                c(),
                k.onload = k.onreadystatechange = null)
            }
            ,
            m(function() {
                l || (l = 1,
                c(1))
            }, e),
            i ? k.onload() : n.parentNode.insertBefore(k, n)
        }
        ,
        a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"), j, c = i ? h : c || f;
            e.href = a,
            e.rel = "stylesheet",
            e.type = "text/css";
            for (j in d)
                e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n),
            m(c, 0))
        }
    }(this, document),
    Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }
    ,
    !function(a) {
        var b = !1
          , c = !1
          , d = {
            isUrl: function(a) {
                var b = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                return b.test(a) ? !0 : !1
            },
            loadContent: function(a, b) {
                a.html(b)
            },
            addPrefix: function(a) {
                var b = a.attr("id")
                  , c = a.attr("class");
                "string" == typeof b && "" !== b && a.attr("id", b.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")),
                "string" == typeof c && "" !== c && "sidr-inner" !== c && a.attr("class", c.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")),
                a.removeAttr("style")
            },
            execute: function(d, f, g) {
                "function" == typeof f ? (g = f,
                f = "sidr") : f || (f = "sidr");
                var h, i, j, k = a("#" + f), l = a(k.data("body")), m = a("html"), n = k.outerWidth(!0), o = k.data("speed"), p = k.data("side"), q = k.data("displace"), s = k.data("onOpen"), u = k.data("onClose"), v = "sidr" === f ? "sidr-open" : "sidr-open " + f + "-open";
                if ("open" === d || "toggle" === d && !k.is(":visible")) {
                    if (k.is(":visible") || b)
                        return;
                    if (c !== !1)
                        return void e.close(c, function() {
                            e.open(f)
                        });
                    b = !0,
                    "left" === p ? (h = {
                        left: n + "px"
                    },
                    i = {
                        left: "0px"
                    }) : (h = {
                        right: n + "px"
                    },
                    i = {
                        right: "0px"
                    }),
                    l.is("body") && (j = m.scrollTop(),
                    m.css("overflow-x", "hidden").scrollTop(j)),
                    q ? l.addClass("sidr-animating").css({
                        width: l.width(),
                        position: "absolute"
                    }).animate(h, o, function() {
                        a(this).addClass(v)
                    }) : setTimeout(function() {
                        a(this).addClass(v)
                    }, o),
                    k.css("display", "block").animate(i, o, function() {
                        b = !1,
                        c = f,
                        "function" == typeof g && g(f),
                        l.removeClass("sidr-animating")
                    }),
                    s()
                } else {
                    if (!k.is(":visible") || b)
                        return;
                    b = !0,
                    "left" === p ? (h = {
                        left: 0
                    },
                    i = {
                        left: "-" + n + "px"
                    }) : (h = {
                        right: 0
                    },
                    i = {
                        right: "-" + n + "px"
                    }),
                    l.is("body") && (j = m.scrollTop(),
                    m.removeAttr("style").scrollTop(j)),
                    l.addClass("sidr-animating").animate(h, o).removeClass(v),
                    k.animate(i, o, function() {
                        k.removeAttr("style").hide(),
                        l.removeAttr("style"),
                        a("html").removeAttr("style"),
                        b = !1,
                        c = !1,
                        "function" == typeof g && g(f),
                        l.removeClass("sidr-animating")
                    }),
                    u()
                }
            }
        }
          , e = {
            open: function(a, b) {
                d.execute("open", a, b)
            },
            close: function(a, b) {
                d.execute("close", a, b)
            },
            toggle: function(a, b) {
                d.execute("toggle", a, b)
            },
            toogle: function(a, b) {
                d.execute("toggle", a, b)
            }
        };
        a.sidr = function(b) {
            return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof b && "string" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.sidr") : e.toggle.apply(this, arguments)
        }
        ,
        a.fn.sidr = function(b) {
            var c = a.extend({
                name: "sidr",
                speed: 200,
                side: "left",
                source: null,
                renaming: !0,
                body: "body",
                displace: !0,
                onOpen: function() {},
                onClose: function() {}
            }, b)
              , f = c.name
              , g = a("#" + f);
            if (0 === g.length && (g = a("<div />").attr("id", f).appendTo(a("body"))),
            g.addClass("sidr").addClass(c.side).data({
                speed: c.speed,
                side: c.side,
                body: c.body,
                displace: c.displace,
                onOpen: c.onOpen,
                onClose: c.onClose
            }),
            "function" == typeof c.source) {
                var h = c.source(f);
                d.loadContent(g, h)
            } else if ("string" == typeof c.source && d.isUrl(c.source))
                a.get(c.source, function(a) {
                    d.loadContent(g, a)
                });
            else if ("string" == typeof c.source) {
                var j = ""
                  , k = c.source.split(",");
                if (a.each(k, function(b, c) {
                    j += '<div class="sidr-inner">' + a(c).html() + "</div>"
                }),
                c.renaming) {
                    var l = a("<div />").html(j);
                    l.find("*").each(function(b, c) {
                        var e = a(c);
                        d.addPrefix(e)
                    }),
                    j = l.html()
                }
                d.loadContent(g, j)
            } else
                null !== c.source && a.error("Invalid Sidr Source");
            return this.each(function() {
                var b = a(this)
                  , c = b.data("sidr");
                c || (b.data("sidr", f),
                "ontouchstart"in document.documentElement ? (b.bind("touchstart", function(a) {
                    a.originalEvent.touches[0],
                    this.touched = a.timeStamp
                }),
                b.bind("touchend", function(a) {
                    var b = Math.abs(a.timeStamp - this.touched);
                    200 > b && (a.preventDefault(),
                    e.toggle(f))
                })) : b.click(function(a) {
                    a.preventDefault(),
                    e.toggle(f)
                }))
            })
        }
    }(jQuery),
    !function(a) {
        var b, c, d, e, f, g, h, i, j = {
            getSliderValuesAtPositionPx: function(a, b) {
                var c, d, e = this, f = e.data("pixel_to_value_mapping");
                if ("undefined" != typeof f)
                    c = f(a),
                    d = f(b);
                else {
                    var g = j.getSliderWidthPx.call(e) - e.data("left_grip_width");
                    c = j.inverse_rangemap_0_to_n.call(e, a, g),
                    d = j.inverse_rangemap_0_to_n.call(e, b, g)
                }
                return [c, d]
            },
            validateAndMoveGripsToPx: function(a, b) {
                var c = this
                  , d = j.getSliderWidthPx.call(c) - c.data("left_grip_width");
                if (d >= b && a >= 0 && d >= a && (!c.data("has_right_grip") || b >= a)) {
                    var e = c.data("cur_min")
                      , f = c.data("cur_max");
                    j.set_position_from_px.call(c, a, b),
                    j.refresh_grips_style.call(c),
                    j.notify_changed_implicit.call(c, "drag_move", e, f)
                }
                return c
            },
            updateAriaAttributes: function() {
                var a = this
                  , b = a.data("settings")
                  , c = a.find(b.left_grip_selector);
                if (a.data("has_right_grip")) {
                    var d = a.find(b.right_grip_selector);
                    c.attr("aria-valuemin", a.data("range_min")).attr("aria-valuenow", k.get_current_min_value.call(a)).attr("aria-valuemax", k.get_current_max_value.call(a)),
                    d.attr("aria-valuemin", k.get_current_min_value.call(a)).attr("aria-valuenow", k.get_current_max_value.call(a)).attr("aria-valuemax", a.data("range_max"))
                } else
                    c.attr("aria-valuemin", a.data("range_min")).attr("aria-valuenow", k.get_current_min_value.call(a)).attr("aria-valuemax", a.data("range_max"));
                return a
            },
            getSliderWidthPx: function() {
                var a = this;
                return Math.round(a.width())
            },
            getGripPositionPx: function(a) {
                return parseInt(a.css("left").replace("px", ""), 10)
            },
            getLeftGripPositionPx: function() {
                var a = this
                  , b = a.data("settings")
                  , c = a.find(b.left_grip_selector);
                return j.getGripPositionPx.call(a, c)
            },
            getRightGripPositionPx: function() {
                var a = this
                  , b = a.data("settings");
                if (a.data("has_right_grip"))
                    return j.getGripPositionPx.call(a, a.find(b.right_grip_selector));
                var c = j.getSliderWidthPx.call(a) - a.data("left_grip_width");
                return j.rangemap_0_to_n.call(a, a.data("cur_max"), c)
            },
            getLeftGripWidth: function() {
                var a = this
                  , b = a.data("settings")
                  , c = a.find(b.left_grip_selector);
                return Math.round(c.width())
            },
            getRightGripWidth: function() {
                var a = this
                  , b = a.data("settings")
                  , c = a.find(b.right_grip_selector);
                return Math.round(c.width())
            },
            binarySearch: function(a, b, c, d) {
                for (var e, f, g = 0, h = a.length - 1; h >= g; ) {
                    e = (g + h) / 2 | 0,
                    f = c(a, e);
                    var i = d(b, a, e);
                    if (i > 0)
                        g = e + 1;
                    else {
                        if (!(0 > i))
                            return e;
                        h = e - 1
                    }
                }
                return -1
            },
            haveLimits: function() {
                var a = this
                  , b = a.data("lower-limit")
                  , c = a.data("upper-limit")
                  , d = !1;
                return "undefined" != typeof b && "undefined" != typeof c && (d = !0),
                d
            },
            refresh_grips_style: function() {
                var a = this
                  , b = a.data("settings");
                if ("undefined" != typeof b.highlight) {
                    var c = a.data("highlightedRangeMin");
                    if ("undefined" != typeof c) {
                        var d = a.find(b.left_grip_selector)
                          , e = a.find(b.right_grip_selector)
                          , f = a.data("highlightedRangeMax")
                          , g = a.data("cur_min")
                          , h = a.data("cur_max")
                          , i = b.highlight.grip_class;
                        c > g || g > f ? d.removeClass(i) : d.addClass(i),
                        c > h || h > f ? e.removeClass(i) : e.addClass(i)
                    }
                }
            },
            valueToPx: function(a) {
                var b = this
                  , c = b.data("value_to_pixel_mapping");
                if ("undefined" != typeof c)
                    return c(a);
                var d = j.getSliderWidthPx.call(b) - b.data("left_grip_width");
                return j.rangemap_0_to_n.call(b, a, d)
            },
            set_position_from_val: function(a, b) {
                var c = this
                  , d = c.data("range_min")
                  , e = c.data("range_max");
                d > a && (a = d),
                a > e && (a = e),
                c.data("has_right_grip") ? (b > e && (b = e),
                d > b && (b = d)) : b = c.data("cur_max");
                var f = j.valueToPx.call(c, a)
                  , g = j.valueToPx.call(c, b);
                return j.set_handles_at_px.call(c, f, g),
                c.data("cur_min", a),
                c.data("has_right_grip") && c.data("cur_max", b),
                c
            },
            set_position_from_px: function(a, b) {
                var c = this;
                j.set_handles_at_px.call(c, a, b);
                var d = j.getSliderValuesAtPositionPx.call(c, a, b)
                  , e = d[0]
                  , f = d[1];
                return c.data("cur_min", e),
                c.data("has_right_grip") && c.data("cur_max", f),
                c
            },
            set_handles_at_px: function(a, b) {
                var c = this
                  , d = c.data("settings")
                  , e = d.left_grip_selector
                  , f = d.right_grip_selector
                  , g = d.value_bar_selector
                  , h = c.data("left_grip_width")
                  , i = h / 2;
                return c.data("has_right_grip") ? (c.find(g).css("left", a + i + "px").css("width", b - a + i + "px"),
                c.find(e).css("left", a + "px")) : (b > a ? c.find(g).css("left", a + i + "px").css("width", b - a + i + "px") : c.find(g).css("left", b + i + "px").css("width", a - b + i + "px"),
                c.find(e).css("left", a + "px")),
                c.find(f).css("left", b + "px"),
                c
            },
            drag_start_func_touch: function(a, b, c, e, f) {
                var g = this
                  , h = a.originalEvent
                  , i = h.touches[0]
                  , k = i.pageY
                  , l = i.pageX
                  , m = Math.abs(g.offset().top - k)
                  , n = g.offset().left
                  , o = n - l
                  , p = l - (n + g.width());
                m > b.touch_tolerance_value_bar_y || o > b.touch_tolerance_value_bar_x || p > b.touch_tolerance_value_bar_x || (h.preventDefault(),
                d = i.pageX,
                j.drag_start_func.call(g, i, b, c, e, f))
            },
            drag_start_func: function(d, f, g, h, i) {
                var l = this;
                if (l.find(f.left_grip_selector + "," + f.value_bar_selector + "," + f.right_grip_selector).removeClass(f.animating_css_class),
                k.is_enabled.call(l)) {
                    var m = a(d.target)
                      , n = !1;
                    if ("object" == typeof f.highlight && (n = m.is(f.highlight.panel_selector)),
                    i !== !1 || m.is(f.left_grip_selector) || m.is(f.right_grip_selector) || m.is(f.value_bar_selector) || n || m.is(l)) {
                        b = l;
                        var o, p, q, u, v, w, x = j.getGripPositionPx.call(l, g), y = j.getSliderWidthPx.call(l) - l.data("left_grip_width"), z = g.offset().left, A = j.getRightGripPositionPx.call(l);
                        p = d.pageX - l.data("left_grip_width") / 2,
                        q = Math.abs(z - p),
                        v = p - z,
                        l.data("has_right_grip") ? (o = h.offset().left,
                        u = Math.abs(o - p),
                        w = p - o) : (u = 2 * q,
                        w = 2 * v),
                        f.user_drag_start_callback.call(l, d),
                        q === u ? z > p ? (x += v,
                        e = !0) : (A += w,
                        e = !1) : u > q ? (x += v,
                        e = !0) : (A += w,
                        e = !1),
                        l.data("has_right_grip") ? A > y && (A = y) : x > y && (x = y),
                        0 > x && (x = 0),
                        c = !0;
                        var B = l.data("cur_min")
                          , C = l.data("cur_max");
                        j.set_position_from_px.call(l, x, A),
                        j.refresh_grips_style.call(l),
                        j.notify_changed_implicit.call(l, "drag_start", B, C),
                        d.preventDefault()
                    }
                }
            },
            drag_move_func_touch: function(a) {
                if (c === !0) {
                    var b = a.originalEvent;
                    b.preventDefault();
                    var d = b.touches[0];
                    j.drag_move_func(d)
                }
            },
            drag_move_func: function(a) {
                if (c) {
                    var f = b
                      , g = j.getSliderWidthPx.call(f) - f.data("left_grip_width")
                      , h = j.getLeftGripPositionPx.call(f)
                      , i = j.getRightGripPositionPx.call(f)
                      , k = a.pageX
                      , l = k - d
                      , m = f.offset().left + f.data("left_grip_width")
                      , n = m + g
                      , o = 0
                      , p = 0;
                    m > k && (o = 1,
                    p = 0),
                    k > n && (p = 1,
                    o = 0),
                    f.data("has_right_grip") && (e ? g >= i && h + l > i && (e = !1,
                    h = i) : h >= 0 && h > i + l && (e = !0,
                    i = h));
                    var q = h
                      , t = i;
                    (l > 0 && !o || 0 > l && !p) && (e ? q += l : t += l),
                    j.validateAndMoveGripsToPx.call(f, q, t),
                    d = k,
                    a.preventDefault()
                }
            },
            drag_end_func_touch: function(a) {
                var b = a.originalEvent;
                b.preventDefault();
                var c = b.touches[0];
                j.drag_end_func(c)
            },
            drag_end_func: function() {
                var a = b;
                if ("undefined" != typeof a) {
                    c = !1,
                    d = void 0,
                    j.notify_mouse_up_implicit.call(a, e),
                    b = void 0;
                    var f = a.data("settings");
                    a.find(f.left_grip_selector + "," + f.value_bar_selector + "," + f.right_grip_selector).addClass(f.animating_css_class)
                }
            },
            get_rounding_for_value: function(a) {
                var b = this
                  , c = b.data("rounding")
                  , d = b.data("rounding_ranges");
                if ("object" == typeof d) {
                    var e = j.binarySearch.call(b, d, a, function(a, b) {
                        return a[b].range
                    }, function(a, b, c) {
                        return a < b[c].range ? c > 0 ? a >= b[c - 1].range ? 0 : -1 : 0 : 1
                    });
                    if (c = 1,
                    e > -1)
                        c = parseInt(d[e].value, 10);
                    else {
                        var f = d.length - 1;
                        a >= d[f].range && (c = d[f].value)
                    }
                }
                return c
            },
            notify_mouse_up_implicit: function(a) {
                var b = this
                  , c = k.get_current_min_value.call(b)
                  , d = k.get_current_max_value.call(b)
                  , e = !1;
                (b.data("beforestart_min") !== c || b.data("beforestart_max") !== d) && (e = !0,
                b.data("beforestart_min", c),
                b.data("beforestart_max", d));
                var f = b.data("settings");
                return f.user_mouseup_callback.call(b, k.get_current_min_value.call(b), k.get_current_max_value.call(b), a, e),
                b
            },
            notify_changed_implicit: function(a, b, c) {
                var d = this
                  , e = !1;
                ("init" === a || "refresh" === a) && (e = !0);
                var f = k.get_current_min_value.call(d)
                  , g = k.get_current_max_value.call(d);
                return e || (b = k.round_value_according_to_rounding.call(d, b),
                c = k.round_value_according_to_rounding.call(d, c)),
                (e || f !== b || g !== c) && (j.notify_changed_explicit.call(d, a, b, c, f, g),
                e = 1),
                e
            },
            notify_changed_explicit: function(a, b, c, d, e) {
                var f = this
                  , g = f.data("settings");
                return f.data("aria_enabled") && j.updateAriaAttributes.call(f),
                g.value_changed_callback.call(f, a, d, e, b, c),
                f
            },
            validate_params: function(b) {
                var c = this
                  , d = c.data("range_min")
                  , e = c.data("range_max")
                  , f = c.data("cur_min")
                  , g = c.data("lower-limit")
                  , h = c.data("upper-limit")
                  , i = j.haveLimits.call(c);
                "undefined" == typeof d && a.error("the data-range_min attribute was not defined"),
                "undefined" == typeof e && a.error("the data-range_max attribute was not defined"),
                "undefined" == typeof f && a.error("the data-cur_min attribute must be defined"),
                d > e && a.error("Invalid input parameter. must be min < max"),
                i && g > h && a.error("Invalid data-lower-limit or data-upper-limit"),
                0 === c.find(b.left_grip_selector).length && a.error("Cannot find element pointed by left_grip_selector: " + b.left_grip_selector),
                "undefined" != typeof b.right_grip_selector && 0 === c.find(b.right_grip_selector).length && a.error("Cannot find element pointed by right_grip_selector: " + b.right_grip_selector),
                "undefined" != typeof b.value_bar_selector && 0 === c.find(b.value_bar_selector).length && a.error("Cannot find element pointed by value_bar_selector" + b.value_bar_selector)
            },
            rangemap_0_to_n: function(a, b) {
                var c = this
                  , d = c.data("range_min")
                  , e = c.data("range_max");
                return d >= a ? 0 : a >= e ? b : Math.floor((b * a - b * d) / (e - d))
            },
            inverse_rangemap_0_to_n: function(a, b) {
                var c = this
                  , d = c.data("range_min")
                  , e = c.data("range_max");
                if (0 >= a)
                    return d;
                if (a >= b)
                    return e;
                var f = (e - d) * a / b;
                return f + d
            }
        }, k = {
            teardown: function() {
                var b = this;
                return b.removeData(),
                a(document).unbind("mousemove.nstSlider").unbind("mouseup.nstSlider"),
                b.parent().unbind("mousedown.nstSlider").unbind("touchstart.nstSlider").unbind("touchmove.nstSlider").unbind("touchend.nstSlider"),
                b.unbind("keydown.nstSlider").unbind("keyup.nstSlider"),
                b
            },
            init: function(b) {
                var c = a.extend({
                    animating_css_class: "nst-animating",
                    touch_tolerance_value_bar_y: 30,
                    touch_tolerance_value_bar_x: 15,
                    left_grip_selector: ".nst-slider-grip-left",
                    right_grip_selector: void 0,
                    highlight: void 0,
                    rounding: void 0,
                    value_bar_selector: void 0,
                    value_changed_callback: function() {},
                    user_mouseup_callback: function() {},
                    user_drag_start_callback: function() {}
                }, b)
                  , d = a(document);
                return d.unbind("mouseup.nstSlider"),
                d.unbind("mousemove.nstSlider"),
                d.bind("mousemove.nstSlider", j.drag_move_func),
                d.bind("mouseup.nstSlider", j.drag_end_func),
                this.each(function() {
                    var b = a(this)
                      , d = b.parent();
                    b.data("enabled", !0);
                    var l = b.data("range_min")
                      , m = b.data("range_max")
                      , p = b.data("cur_min")
                      , q = b.data("cur_max");
                    "undefined" == typeof q && (q = p),
                    "" === l && (l = 0),
                    "" === m && (m = 0),
                    "" === p && (p = 0),
                    "" === q && (q = 0),
                    b.data("range_min", l),
                    b.data("range_max", m),
                    b.data("cur_min", p),
                    b.data("cur_max", q),
                    j.validate_params.call(b, c),
                    b.data("settings", c),
                    "undefined" != typeof c.rounding ? k.set_rounding.call(b, c.rounding) : "undefined" != typeof b.data("rounding") ? k.set_rounding.call(b, b.data("rounding")) : k.set_rounding.call(b, 1);
                    var u = b.find(c.left_grip_selector)[0]
                      , v = a(u)
                      , w = a(b.find(c.right_grip_selector)[0]);
                    "undefined" == typeof v.attr("tabindex") && v.attr("tabindex", 0);
                    var x = !1;
                    b.find(c.right_grip_selector).length > 0 && (x = !0,
                    "undefined" == typeof w.attr("tabindex") && w.attr("tabindex", 0)),
                    b.data("has_right_grip", x),
                    b.data("aria_enabled") === !0 && (v.attr("role", "slider").attr("aria-disabled", "false"),
                    x && w.attr("role", "slider").attr("aria-disabled", "false")),
                    b.bind("keyup.nstSlider", function(a) {
                        if (b.data("enabled")) {
                            switch (a.which) {
                            case 37:
                            case 38:
                            case 39:
                            case 40:
                                if (f === h) {
                                    var c, d, l, m = j.getSliderWidthPx.call(b);
                                    if (0 > g - i) {
                                        for (d = i; m >= d; d++)
                                            if (c = k.round_value_according_to_rounding.call(b, j.getSliderValuesAtPositionPx.call(b, d, d)[1]),
                                            c !== h) {
                                                l = d;
                                                break
                                            }
                                    } else
                                        for (d = i; d >= 0; d--)
                                            if (c = k.round_value_according_to_rounding.call(b, j.getSliderValuesAtPositionPx.call(b, d, d)[1]),
                                            c !== h) {
                                                l = d;
                                                break
                                            }
                                    e ? j.validateAndMoveGripsToPx.call(b, l, j.getRightGripPositionPx.call(b)) : j.validateAndMoveGripsToPx.call(b, j.getLeftGripPositionPx.call(b), l),
                                    j.notify_mouse_up_implicit.call(b, e)
                                }
                            }
                            f = void 0,
                            g = void 0,
                            h = void 0,
                            i = void 0
                        }
                    }),
                    b.bind("keydown.nstSlider", function(a) {
                        if (b.data("enabled")) {
                            var c = function(a, c) {
                                var d = j.getLeftGripPositionPx.call(b)
                                  , l = j.getRightGripPositionPx.call(b);
                                switch ("undefined" == typeof f && (g = e ? d : l,
                                f = e ? k.get_current_min_value.call(b) : k.get_current_max_value.call(b)),
                                c.which) {
                                case 37:
                                case 40:
                                    e ? d-- : l--,
                                    c.preventDefault();
                                    break;
                                case 38:
                                case 39:
                                    e ? d++ : l++,
                                    c.preventDefault()
                                }
                                i = e ? d : l,
                                j.validateAndMoveGripsToPx.call(b, d, l),
                                h = e ? k.get_current_min_value.call(b) : k.get_current_max_value.call(b)
                            };
                            x && b.find(":focus").is(w) ? (e = !1,
                            c.call(b, w, a)) : (e = !0,
                            c.call(b, v, a))
                        }
                    });
                    var y = j.getLeftGripWidth.call(b)
                      , z = x ? j.getRightGripWidth.call(b) : y;
                    b.data("left_grip_width", y),
                    b.data("right_grip_width", z),
                    b.data("value_bar_selector", c.value_bar_selector),
                    l === m || p === q ? k.set_range.call(b, l, m) : j.set_position_from_val.call(b, b.data("cur_min"), b.data("cur_max")),
                    j.notify_changed_implicit.call(b, "init"),
                    b.data("beforestart_min", k.get_current_min_value.call(b)),
                    b.data("beforestart_max", k.get_current_max_value.call(b)),
                    b.bind("mousedown.nstSlider", function(a) {
                        j.drag_start_func.call(b, a, c, v, w, !1)
                    }),
                    d.bind("touchstart.nstSlider", function(a) {
                        j.drag_start_func_touch.call(b, a, c, v, w, !0)
                    }),
                    d.bind("touchend.nstSlider", function(a) {
                        j.drag_end_func_touch.call(b, a)
                    }),
                    d.bind("touchmove.nstSlider", function(a) {
                        j.drag_move_func_touch.call(b, a)
                    });
                    var A = b.data("histogram");
                    "undefined" != typeof A && k.set_step_histogram.call(b, A)
                })
            },
            get_range_min: function() {
                var a = this;
                return a.data("range_min")
            },
            get_range_max: function() {
                var a = this;
                return a.data("range_max")
            },
            get_current_min_value: function() {
                var b, c = a(this), d = k.get_range_min.call(c), e = k.get_range_max.call(c), f = c.data("cur_min");
                if (b = d >= f ? d : k.round_value_according_to_rounding.call(c, f),
                j.haveLimits.call(c)) {
                    if (d >= b)
                        return c.data("lower-limit");
                    if (b >= e)
                        return c.data("upper-limit")
                } else {
                    if (d >= b)
                        return d;
                    if (b >= e)
                        return e
                }
                return b
            },
            get_current_max_value: function() {
                var b, c = a(this), d = k.get_range_min.call(c), e = k.get_range_max.call(c), f = c.data("cur_max");
                if (b = f >= e ? e : k.round_value_according_to_rounding.call(c, f),
                j.haveLimits.call(c)) {
                    if (b >= e)
                        return c.data("upper-limit");
                    if (d >= b)
                        return c.data("lower-limit")
                } else {
                    if (b >= e)
                        return e;
                    if (d >= b)
                        return d
                }
                return b
            },
            is_handle_to_left_extreme: function() {
                var a = this;
                return j.haveLimits.call(a) ? a.data("lower-limit") === k.get_current_min_value.call(a) : k.get_range_min.call(a) === k.get_current_min_value.call(a)
            },
            is_handle_to_right_extreme: function() {
                var a = this;
                return j.haveLimits.call(a) ? a.data("upper-limit") === k.get_current_max_value.call(a) : k.get_range_max.call(a) === k.get_current_max_value.call(a)
            },
            refresh: function() {
                var a = this
                  , b = a.data("last_step_histogram");
                "undefined" != typeof b && k.set_step_histogram.call(a, b),
                j.set_position_from_val.call(a, k.get_current_min_value.call(a), k.get_current_max_value.call(a));
                var c = a.data("highlightedRangeMin");
                if ("number" == typeof c) {
                    var d = a.data("highlightedRangeMax");
                    k.highlight_range.call(a, c, d)
                }
                return j.notify_changed_implicit.call(a, "refresh"),
                a
            },
            disable: function() {
                var a = this
                  , b = a.data("settings");
                return a.data("enabled", !1).find(b.left_grip_selector).attr("aria-disabled", "true").end().find(b.right_grip_selector).attr("aria-disabled", "true"),
                a
            },
            enable: function() {
                var a = this
                  , b = a.data("settings");
                return a.data("enabled", !0).find(b.left_grip_selector).attr("aria-disabled", "false").end().find(b.right_grip_selector).attr("aria-disabled", "false"),
                a
            },
            is_enabled: function() {
                var a = this;
                return a.data("enabled")
            },
            set_position: function(a, b) {
                var c = this
                  , d = c.data("cur_min")
                  , e = c.data("cur_max");
                a > b ? j.set_position_from_val.call(c, b, a) : j.set_position_from_val.call(c, a, b),
                j.refresh_grips_style.call(c),
                j.notify_changed_implicit.call(c, "set_position", d, e),
                c.data("beforestart_min", a),
                c.data("beforestart_max", b)
            },
            set_step_histogram: function(b) {
                var c = this;
                c.data("last_step_histogram", b),
                "undefined" == typeof b && (a.error("got an undefined histogram in set_step_histogram"),
                j.unset_step_histogram.call(c));
                var d = j.getSliderWidthPx.call(c) - c.data("left_grip_width")
                  , e = b.length;
                if (!(0 >= d)) {
                    var f, g = 0;
                    for (f = 0; e > f; f++)
                        g += b[f];
                    if (0 === g)
                        return k.unset_step_histogram.call(c),
                        c;
                    var h = parseFloat(g) / d;
                    for (f = 0; e > f; f++)
                        b[f] = b[f] / h;
                    var i = [b[0]];
                    for (f = 1; e > f; f++) {
                        var l = i[f - 1] + b[f];
                        i.push(l)
                    }
                    i.push(d);
                    for (var m = [c.data("range_min")], n = 0, o = m[0], p = 0; d >= n; ) {
                        var q = parseInt(i.shift(), 10)
                          , r = j.inverse_rangemap_0_to_n.call(c, p + 1, e + 1);
                        p++;
                        var u = q - n
                          , v = r - o;
                        for (f = n; q > f; f++) {
                            var w = o + v * (f - n + 1) / u;
                            m.push(w),
                            n++,
                            o = w
                        }
                        if (n === d)
                            break
                    }
                    m[m.length - 1] = c.data("range_max");
                    var x = function(a) {
                        return m[parseInt(a, 10)]
                    }
                      , y = function(b) {
                        var d = j.binarySearch.call(c, m, b, function(a, b) {
                            return a[b]
                        }, function(b, c, d) {
                            return b === c[d] ? 0 : b < c[d] && 0 === d ? 0 : c[d - 1] <= b && b < c[d] ? 0 : b > c[d] ? 1 : b <= c[d - 1] ? -1 : void a.error("cannot compare s: " + b + " with a[" + d + "]. a is: " + c.join(","))
                        });
                        return d
                    };
                    return c.data("pixel_to_value_mapping", x),
                    c.data("value_to_pixel_mapping", y),
                    c
                }
            },
            unset_step_histogram: function() {
                var a = this;
                return a.removeData("pixel_to_value_mapping"),
                a.removeData("value_to_pixel_mapping"),
                a.removeData("last_step_histogram"),
                a
            },
            set_range: function(a, b) {
                var c = this
                  , d = k.get_current_min_value.call(c)
                  , e = k.get_current_max_value.call(c);
                return c.data("range_min", a),
                c.data("range_max", b),
                j.set_position_from_val.call(c, d, e),
                j.notify_changed_implicit.call(c, "set_range", d, e),
                c
            },
            highlight_range: function(b, c) {
                var d = this
                  , e = d.data("settings");
                "undefined" == typeof e.highlight && a.error('you cannot call highlight_range if you haven\' specified the "highlight" parameter in construction!'),
                b || (b = 0),
                c || (c = 0);
                var f = j.valueToPx.call(d, b)
                  , g = j.valueToPx.call(d, c)
                  , h = g - f + d.data("left_grip_width")
                  , i = d.find(e.highlight.panel_selector);
                return i.css("left", f + "px"),
                i.css("width", h + "px"),
                d.data("highlightedRangeMin", b),
                d.data("highlightedRangeMax", c),
                j.refresh_grips_style.call(d),
                d
            },
            set_rounding: function(b) {
                var c = this;
                "string" == typeof b && b.indexOf("{") > -1 && (b = a.parseJSON(b)),
                c.data("rounding", b);
                var d = [];
                if ("object" == typeof b) {
                    var e;
                    for (e in b)
                        if (b.hasOwnProperty(e)) {
                            var f = b[e];
                            d.push({
                                range: f,
                                value: e
                            })
                        }
                    d.sort(function(a, b) {
                        return a.range - b.range
                    }),
                    c.data("rounding_ranges", d)
                } else
                    c.removeData("rounding_ranges");
                return c
            },
            get_rounding: function() {
                var a = this;
                return a.data("rounding")
            },
            round_value_according_to_rounding: function(b) {
                var c = this
                  , d = j.get_rounding_for_value.call(c, b);
                if (d > 0) {
                    var e = b / d
                      , f = parseInt(e, 10)
                      , g = e - f;
                    g > .5 && f++;
                    var h = f * d;
                    return h
                }
                return a.error("rounding must be > 0, got " + d + " instead"),
                b
            }
        }, l = "nstSlider";
        a.fn[l] = function(b) {
            if (k[b]) {
                if (this.data("initialized") === !0)
                    return k[b].apply(this, Array.prototype.slice.call(arguments, 1));
                throw new Error("method " + b + " called on an uninitialized instance of " + l)
            }
            return "object" != typeof b && b ? void a.error("Cannot call method " + b) : (this.data("initialized", !0),
            k.init.apply(this, arguments))
        }
    }(jQuery),
    function() {
        for (var a, b = function() {}, c = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], d = c.length, e = window.console = window.console || {}; d--; )
            a = c[d],
            e[a] || (e[a] = b)
    }(),
    $(function() {
        $("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var a = $(this.hash);
                if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"),
                a.length)
                    return $("html,body").animate({
                        scrollTop: a.offset().top
                    }, 1e3),
                    !1
            }
        })
    }),
    jQuery(document).ready(function(a) {
        a("ul.mobile-nav").show(),
        a("#menu-mobile").sidr({
            name: "sidr",
            side: "left"
        }),
        a(".site").click(function() {
            a.sidr("close", "sidr")
        }),
        a(window).resize(function() {
            a(window).width() > 768 && a.sidr("close", "sidr")
        })
    }),
    function(a, b, c, d, e, f, g) {
        a.GoogleAnalyticsObject = e,
        a[e] = a[e] || function() {
            (a[e].q = a[e].q || []).push(arguments)
        }
        ,
        a[e].l = 1 * new Date,
        f = b.createElement(c),
        g = b.getElementsByTagName(c)[0],
        f.async = 1,
        f.src = d,
        g.parentNode.insertBefore(f, g)
    }(window, document, "script", "//web.archive.org/web/20211129223110/http://www.google-analytics.com/analytics.js", "ga"),
    ga("create", "UA-55662510-1", "auto"),
    ga("send", "pageview"),
    $(".twitter-popup").click(function(a) {
        var b = 575
          , c = 400
          , d = ($(window).width() - b) / 2
          , e = ($(window).height() - c) / 2
          , f = this.href
          , g = "status=1,width=" + b + ",height=" + c + ",top=" + e + ",left=" + d;
        return window.open(f, "twitter", g),
        !1
    }),
    function(a, b, c, d, e, f, g) {
        a.GoogleAnalyticsObject = e,
        a[e] = a[e] || function() {
            (a[e].q = a[e].q || []).push(arguments)
        }
        ,
        a[e].l = 1 * new Date,
        f = b.createElement(c),
        g = b.getElementsByTagName(c)[0],
        f.async = 1,
        f.src = d,
        g.parentNode.insertBefore(f, g)
    }(window, document, "script", "//web.archive.org/web/20211129223110/http://www.google-analytics.com/analytics.js", "ga"),
    ga("create", "UA-55662510-1", "auto"),
    ga("send", "pageview");

}
/*
     FILE ARCHIVED ON 22:31:10 Nov 29, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:06:40 Jun 21, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 139.114
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.06
  cdx.remote: 0.074
  esindex: 0.011
  LoadShardBlock: 115.961 (3)
  PetaboxLoader3.datanode: 327.35 (6)
  load_resource: 525.726 (2)
  PetaboxLoader3.resolve: 263.899 (2)
  loaddict: 27.215
*/
