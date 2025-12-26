(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[5619], {
		56439: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, n(79205).Z)("Megaphone", [
				["path", {
					d: "m3 11 18-5v12L3 14v-3z",
					key: "n962bs"
				}],
				["path", {
					d: "M11.6 16.8a3 3 0 1 1-5.8-1.6",
					key: "1yl0tm"
				}]
			])
		},
		32096: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, n(79205).Z)("Newspaper", [
				["path", {
					d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
					key: "7pis2x"
				}],
				["path", {
					d: "M18 14h-8",
					key: "sponae"
				}],
				["path", {
					d: "M15 18h-5",
					key: "95g1m2"
				}],
				["path", {
					d: "M10 6h8v4h-8V6Z",
					key: "smlsk5"
				}]
			])
		},
		88906: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, n(79205).Z)("Shield", [
				["path", {
					d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
					key: "oel41y"
				}]
			])
		},
		82023: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, n(79205).Z)("Sparkles", [
				["path", {
					d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
					key: "4pj2yx"
				}],
				["path", {
					d: "M20 3v4",
					key: "1olli1"
				}],
				["path", {
					d: "M22 5h-4",
					key: "1gvqau"
				}],
				["path", {
					d: "M4 17v2",
					key: "vumght"
				}],
				["path", {
					d: "M5 18H3",
					key: "zchphs"
				}]
			])
		},
		40257: function(e, t, n) {
			"use strict";
			var r, o;
			e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof(null == (o = n.g.process) ? void 0 : o.env) ? n.g.process : n(44227)
		},
		44227: function(e) {
			! function() {
				var t = {
						229: function(e) {
							var t, n, r, o = e.exports = {};

							function i() {
								throw Error("setTimeout has not been defined")
							}

							function u() {
								throw Error("clearTimeout has not been defined")
							}

							function s(e) {
								if (t === setTimeout) return setTimeout(e, 0);
								if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
								try {
									return t(e, 0)
								} catch (n) {
									try {
										return t.call(null, e, 0)
									} catch (n) {
										return t.call(this, e, 0)
									}
								}
							}! function() {
								try {
									t = "function" == typeof setTimeout ? setTimeout : i
								} catch (e) {
									t = i
								}
								try {
									n = "function" == typeof clearTimeout ? clearTimeout : u
								} catch (e) {
									n = u
								}
							}();
							var l = [],
								c = !1,
								a = -1;

							function f() {
								c && r && (c = !1, r.length ? l = r.concat(l) : a = -1, l.length && h())
							}

							function h() {
								if (!c) {
									var e = s(f);
									c = !0;
									for (var t = l.length; t;) {
										for (r = l, l = []; ++a < t;) r && r[a].run();
										a = -1, t = l.length
									}
									r = null, c = !1,
										function(e) {
											if (n === clearTimeout) return clearTimeout(e);
											if ((n === u || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
											try {
												n(e)
											} catch (t) {
												try {
													return n.call(null, e)
												} catch (t) {
													return n.call(this, e)
												}
											}
										}(e)
								}
							}

							function p(e, t) {
								this.fun = e, this.array = t
							}

							function d() {}
							o.nextTick = function(e) {
								var t = Array(arguments.length - 1);
								if (arguments.length > 1)
									for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
								l.push(new p(e, t)), 1 !== l.length || c || s(h)
							}, p.prototype.run = function() {
								this.fun.apply(null, this.array)
							}, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = d, o.addListener = d, o.once = d, o.off = d, o.removeListener = d, o.removeAllListeners = d, o.emit = d, o.prependListener = d, o.prependOnceListener = d, o.listeners = function(e) {
								return []
							}, o.binding = function(e) {
								throw Error("process.binding is not supported")
							}, o.cwd = function() {
								return "/"
							}, o.chdir = function(e) {
								throw Error("process.chdir is not supported")
							}, o.umask = function() {
								return 0
							}
						}
					},
					n = {};

				function r(e) {
					var o = n[e];
					if (void 0 !== o) return o.exports;
					var i = n[e] = {
							exports: {}
						},
						u = !0;
					try {
						t[e](i, i.exports, r), u = !1
					} finally {
						u && delete n[e]
					}
					return i.exports
				}
				r.ab = "//";
				var o = r(229);
				e.exports = o
			}()
		},
		57586: function(e, t, n) {
			"use strict";
			n.d(t, {
				M: function() {
					return x
				}
			});
			var r = n(57437),
				o = n(2265),
				i = n(58881),
				u = n(53576),
				s = n(11534),
				l = n(64252),
				c = n(13537),
				a = n(45750);

			function f(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}
			class h extends o.Component {
				getSnapshotBeforeUpdate(e) {
					let t = this.props.childRef.current;
					if (t && e.isPresent && !this.props.isPresent) {
						let e = t.offsetParent,
							n = (0, c.R)(e) && e.offsetWidth || 0,
							r = this.props.sizeRef.current;
						r.height = t.offsetHeight || 0, r.width = t.offsetWidth || 0, r.top = t.offsetTop, r.left = t.offsetLeft, r.right = n - r.width - r.left
					}
					return null
				}
				componentDidUpdate() {}
				render() {
					return this.props.children
				}
			}

			function p(e) {
				let {
					children: t,
					isPresent: n,
					anchorX: i,
					root: u
				} = e, s = (0, o.useId)(), l = (0, o.useRef)(null), c = (0, o.useRef)({
					width: 0,
					height: 0,
					top: 0,
					left: 0,
					right: 0
				}), {
					nonce: p
				} = (0, o.useContext)(a._), d = function(...e) {
					return o.useCallback(function(...e) {
						return t => {
							let n = !1,
								r = e.map(e => {
									let r = f(e, t);
									return n || "function" != typeof r || (n = !0), r
								});
							if (n) return () => {
								for (let t = 0; t < r.length; t++) {
									let n = r[t];
									"function" == typeof n ? n() : f(e[t], null)
								}
							}
						}
					}(...e), e)
				}(l, null == t ? void 0 : t.ref);
				return (0, o.useInsertionEffect)(() => {
					let {
						width: e,
						height: t,
						top: r,
						left: o,
						right: a
					} = c.current;
					if (n || !l.current || !e || !t) return;
					l.current.dataset.motionPopId = s;
					let f = document.createElement("style");
					p && (f.nonce = p);
					let h = null != u ? u : document.head;
					return h.appendChild(f), f.sheet && f.sheet.insertRule('\n          [data-motion-pop-id="'.concat(s, '"] {\n            position: absolute !important;\n            width: ').concat(e, "px !important;\n            height: ").concat(t, "px !important;\n            ").concat("left" === i ? "left: ".concat(o) : "right: ".concat(a), "px !important;\n            top: ").concat(r, "px !important;\n          }\n        ")), () => {
						h.contains(f) && h.removeChild(f)
					}
				}, [n]), (0, r.jsx)(h, {
					isPresent: n,
					childRef: l,
					sizeRef: c,
					children: o.cloneElement(t, {
						ref: d
					})
				})
			}
			let d = e => {
				let {
					children: t,
					initial: n,
					isPresent: i,
					onExitComplete: s,
					custom: c,
					presenceAffectsLayout: a,
					mode: f,
					anchorX: h,
					root: d
				} = e, v = (0, u.h)(m), y = (0, o.useId)(), g = !0, x = (0, o.useMemo)(() => (g = !1, {
					id: y,
					initial: n,
					isPresent: i,
					custom: c,
					onExitComplete: e => {
						for (let t of (v.set(e, !0), v.values()))
							if (!t) return;
						s && s()
					},
					register: e => (v.set(e, !1), () => v.delete(e))
				}), [i, v, s]);
				return a && g && (x = {
					...x
				}), (0, o.useMemo)(() => {
					v.forEach((e, t) => v.set(t, !1))
				}, [i]), o.useEffect(() => {
					i || v.size || !s || s()
				}, [i]), "popLayout" === f && (t = (0, r.jsx)(p, {
					isPresent: i,
					anchorX: h,
					root: d,
					children: t
				})), (0, r.jsx)(l.O.Provider, {
					value: x,
					children: t
				})
			};

			function m() {
				return new Map
			}
			var v = n(49637);
			let y = e => e.key || "";

			function g(e) {
				let t = [];
				return o.Children.forEach(e, e => {
					(0, o.isValidElement)(e) && t.push(e)
				}), t
			}
			let x = e => {
				let {
					children: t,
					custom: n,
					initial: l = !0,
					onExitComplete: c,
					presenceAffectsLayout: a = !0,
					mode: f = "sync",
					propagate: h = !1,
					anchorX: p = "left",
					root: m
				} = e, [x, k] = (0, v.oO)(h), w = (0, o.useMemo)(() => g(t), [t]), M = h && !x ? [] : w.map(y), T = (0, o.useRef)(!0), E = (0, o.useRef)(w), b = (0, u.h)(() => new Map), [C, L] = (0, o.useState)(w), [R, Z] = (0, o.useState)(w);
				(0, s.L)(() => {
					T.current = !1, E.current = w;
					for (let e = 0; e < R.length; e++) {
						let t = y(R[e]);
						M.includes(t) ? b.delete(t) : !0 !== b.get(t) && b.set(t, !1)
					}
				}, [R, M.length, M.join("-")]);
				let j = [];
				if (w !== C) {
					let e = [...w];
					for (let t = 0; t < R.length; t++) {
						let n = R[t],
							r = y(n);
						M.includes(r) || (e.splice(t, 0, n), j.push(n))
					}
					return "wait" === f && j.length && (e = j), Z(g(e)), L(w), null
				}
				let {
					forceRender: P
				} = (0, o.useContext)(i.p);
				return (0, r.jsx)(r.Fragment, {
					children: R.map(e => {
						let t = y(e),
							o = (!h || !!x) && (w === R || M.includes(t));
						return (0, r.jsx)(d, {
							isPresent: o,
							initial: (!T.current || !!l) && void 0,
							custom: n,
							presenceAffectsLayout: a,
							mode: f,
							root: m,
							onExitComplete: o ? void 0 : () => {
								if (!b.has(t)) return;
								b.set(t, !0);
								let e = !0;
								b.forEach(t => {
									t || (e = !1)
								}), e && (null == P || P(), Z(E.current), h && (null == k || k()), c && c())
							},
							anchorX: p,
							children: e
						}, t)
					})
				})
			}
		}
	}
]);