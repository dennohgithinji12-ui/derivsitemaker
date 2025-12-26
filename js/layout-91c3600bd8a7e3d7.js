(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[5642], {
		29708: function(e, t, a) {
			Promise.resolve().then(a.bind(a, 70535))
		},
		70535: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, {
				default: function() {
					return $
				}
			});
			var r = a(57437),
				i = a(2265),
				n = a(99376),
				s = a(98239),
				o = a(57586),
				l = a(19293),
				d = a(27648),
				c = a(33145),
				u = a(75260),
				m = a(85058),
				h = a(62869),
				f = a(17009),
				p = a(29202),
				g = a(98335),
				x = a(32096),
				v = a(6076),
				y = a(95252),
				b = a(56439),
				k = a(2207),
				j = a(82222),
				w = a(11239),
				N = a(35471),
				Z = a(88906),
				S = a(98728),
				E = a(10407),
				M = a(82023),
				z = a(79205);
			var D = a(32489);
			let A = (0, z.Z)("Menu", [
					["line", {
						x1: "4",
						x2: "20",
						y1: "12",
						y2: "12",
						key: "1e0a9i"
					}],
					["line", {
						x1: "4",
						x2: "20",
						y1: "6",
						y2: "6",
						key: "1owob3"
					}],
					["line", {
						x1: "4",
						x2: "20",
						y1: "18",
						y2: "18",
						key: "yk5zj1"
					}]
				]),
				I = [{
					name: "Sites",
					href: "/sites",
					icon: p.Z,
					description: "Manage your trading sites"
				}, {
					name: "Domains",
					href: "/domains",
					icon: g.Z,
					description: "Domain management"
				}, {
					name: "Platform Updates",
					href: "/updates",
					icon: x.Z,
					description: "News & announcements",
					showBadge: !0
				}, {
					name: "Deployments",
					href: "/deployments",
					icon: v.Z,
					description: "Deploy & monitor"
				}, {
					name: "Commissions",
					href: "/commissions",
					icon: y.Z,
					description: "Track earnings"
				}, {
					name: "Announcements",
					href: "/announcements",
					icon: b.Z,
					description: "Site announcements"
				}, {
					name: "Website Editor",
					href: "/website-editor",
					icon: k.Z,
					description: "Customize designs"
				}, {
					name: "XML Bots",
					href: "/bots",
					icon: j.Z,
					description: "Upload trading bots"
				}, {
					name: "AI Signals",
					href: "/signals",
					icon: w.Z,
					description: "AI-powered trading signals"
				}, {
					name: "Support",
					href: "/support",
					icon: N.Z,
					description: "Get help & contact us"
				}, {
					name: "Admin",
					href: "/admin",
					icon: Z.Z,
					adminOnly: !0,
					description: "Admin controls"
				}, {
					name: "Settings",
					href: "/settings",
					icon: S.Z,
					description: "App preferences"
				}];

			function P() {
				let e = (0, n.usePathname)(),
					t = (0, n.useRouter)(),
					[a, p] = (0, i.useState)(!1),
					[g, x] = (0, i.useState)(!1),
					[v, y] = (0, i.useState)(!0),
					[b, k] = (0, i.useState)(0);
				(0, i.useEffect)(() => {
					j(), w();
					let e = setTimeout(() => y(!1), 100);
					return () => clearTimeout(e)
				}, []), (0, i.useEffect)(() => {
					let e = () => {
						w()
					};
					return window.addEventListener("updates-read-changed", e), () => {
						window.removeEventListener("updates-read-changed", e)
					}
				}, []), (0, i.useEffect)(() => {
					if ("/updates" === e) {
						let e = setTimeout(() => w(), 1e3);
						return () => clearTimeout(e)
					}
				}, [e]);
				let j = async () => {
					p(await u.d$.isAdmin())
				}, w = async () => {
					try {
						let e = await l.authService.getCurrentUser();
						if (e) {
							let t = await m.$.getUnreadCount(e.$id);
							k(t.count)
						}
					} catch (e) {
						console.error("Failed to load unread count:", e)
					}
				}, N = (0, i.useCallback)(async () => {
					// Logout functionality removed
					console.log("Logout functionality has been removed")
				}, [t]);
				(0, i.useEffect)(() => {
					x(!1)
				}, [e]);
				let Z = () => (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("div", {
						className: "p-6 border-b border-border/50",
						children: (0, r.jsxs)(d.default, {
							href: "/sites",
							className: "flex items-center gap-3 group",
							children: [(0, r.jsxs)("div", {
								className: "relative w-10 h-10 transition-transform duration-200 group-hover:scale-105",
								children: [(0, r.jsx)(c.default, {
									src: "/derivforgelogo.png",
									alt: "DerivForge",
									fill: !0,
									className: "object-contain",
									priority: !0
								}), (0, r.jsx)("div", {
									className: "absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"
								})]
							}), (0, r.jsxs)("div", {
								children: [(0, r.jsx)("h1", {
									className: "text-lg font-bold font-heading bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent",
									children: "DerivForge"
								}), (0, r.jsx)("p", {
									className: "text-[10px] text-muted-foreground font-medium tracking-wider uppercase",
									children: "Trading Platform"
								})]
							})]
						})
					}), (0, r.jsx)("nav", {
						className: "p-4 overflow-y-auto",
						children: (0, r.jsx)("div", {
							className: "space-y-1",
							children: I.map((t, i) => {
								let n = t.icon,
									s = !t.external && (null == e ? void 0 : e.startsWith(t.href));
								return t.adminOnly && !a || t.devOnly ? null : t.external ? (0, r.jsxs)("a", {
									href: t.href,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group relative flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-200",
									style: {
										animationDelay: v ? "".concat(50 * i, "ms") : "0ms",
										animation: v ? "fadeSlideIn 0.3s ease-out forwards" : "none",
										opacity: v ? 0 : 1
									},
									children: [(0, r.jsx)("div", {
										className: "absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-300"
									}), (0, r.jsx)("div", {
										className: "relative p-2 rounded-lg bg-muted group-hover:bg-muted/80 transition-colors duration-200",
										children: (0, r.jsx)(n, {
											className: "h-4 w-4"
										})
									}), (0, r.jsx)("span", {
										className: "relative font-medium flex-1",
										children: t.name
									}), (0, r.jsx)(E.Z, {
										className: "relative h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
									})]
								}, t.href) : (0, r.jsxs)(d.default, {
									href: t.href,
									className: "group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ".concat(s ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
									style: {
										animationDelay: v ? "".concat(50 * i, "ms") : "0ms",
										animation: v ? "fadeSlideIn 0.3s ease-out forwards" : "none",
										opacity: v ? 0 : 1
									},
									children: [(0, r.jsx)("div", {
										className: "absolute inset-0 rounded-xl transition-all duration-300 ".concat(s ? "bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-500/20" : "bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5")
									}), (0, r.jsx)("div", {
										className: "relative p-2 rounded-lg transition-all duration-200 ".concat(s ? "bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25" : "bg-muted group-hover:bg-muted/80"),
										children: (0, r.jsx)(n, {
											className: "h-4 w-4"
										})
									}), (0, r.jsx)("span", {
										className: "relative font-medium flex-1 ".concat(s ? "text-foreground" : ""),
										children: t.name
									}), t.showBadge && b > 0 && (0, r.jsx)("span", {
										className: "relative flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-1.5 text-[10px] font-bold text-white shadow-lg shadow-red-500/30 animate-pulse",
										children: b > 99 ? "99+" : b
									}), s && !t.showBadge && (0, r.jsx)(M.Z, {
										className: "relative h-4 w-4 text-indigo-500"
									})]
								}, t.href)
							})
						})
					}), (0, r.jsx)("div", {
						className: "flex-1"
					}), (0, r.jsxs)("div", {
						className: "p-4 border-t border-border/50 space-y-3 mt-auto",
						children: [(0, r.jsxs)("div", {
							className: "flex items-center justify-between px-4 py-2",
							children: [(0, r.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: "Theme"
							}), (0, r.jsx)(f.T, {})]
						}), (0, r.jsx)("div", {
							className: "px-4 pt-2",
							children: (0, r.jsx)("p", {
								className: "text-xs text-muted-foreground/60 text-center",
								children: "\xa9 2025 DerivForge"
							})
						})]
					})]
				});
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("aside", {
						className: "hidden lg:flex flex-col w-72 bg-card/80 backdrop-blur-xl border-r border-border/50 min-h-screen sticky top-0",
						style: {
							animation: "slideInLeft 0.4s ease-out"
						},
						children: (0, r.jsx)(Z, {})
					}), (0, r.jsx)("button", {
						className: "lg:hidden fixed top-4 left-4 z-50 p-3 rounded-xl bg-card/90 backdrop-blur-xl border border-border/50 shadow-soft transition-transform duration-200 hover:scale-105 active:scale-95",
						onClick: () => x(!g),
						children: g ? (0, r.jsx)(D.Z, {
							className: "h-5 w-5"
						}) : (0, r.jsx)(A, {
							className: "h-5 w-5"
						})
					}), (0, r.jsx)(o.M, {
						children: g && (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(s.E.div, {
								className: "lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40",
								initial: {
									opacity: 0
								},
								animate: {
									opacity: 1
								},
								exit: {
									opacity: 0
								},
								transition: {
									duration: .2
								},
								onClick: () => x(!1)
							}), (0, r.jsx)(s.E.aside, {
								className: "lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-card/95 backdrop-blur-xl border-r border-border/50 z-50 flex flex-col",
								initial: {
									x: -288
								},
								animate: {
									x: 0
								},
								exit: {
									x: -288
								},
								transition: {
									type: "spring",
									damping: 30,
									stiffness: 300
								},
								children: (0, r.jsx)(Z, {})
							})]
						})
					})]
				})
			}
			var L = a(94766),
				T = a(33136);
			let U = "notification_prompt_dismissed";

			function q() {
				let [e, t] = (0, i.useState)(!1), [a, n] = (0, i.useState)(!1), [s, o] = (0, i.useState)(null);
				(0, i.useEffect)(() => {
					d()
				}, []);
				let d = async () => {
					try {
						if (!T.h.isSupported()) return;
						let e = T.h.getPermissionStatus();
						if ("denied" === e) return;
						if ("granted" === e) {
							let e = await l.authService.getCurrentUser();
							if (e) {
								if (await T.h.isSubscribed(e.$id)) return;
								o(e.$id)
							}
						} else {
							let e = await l.authService.getCurrentUser();
							if (!e) return;
							o(e.$id)
						}
						let a = localStorage.getItem(U);
						if (a) {
							let e = parseInt(a, 10);
							if (Date.now() - e < 108e5) return
						}
						setTimeout(() => t(!0), 2e3)
					} catch (e) {
						console.error("Error checking notification status:", e)
					}
				}, c = async () => {
					if (s) {
						n(!0);
						try {
							await T.h.subscribe(s), t(!1)
						} catch (e) {
							console.error("Error enabling notifications:", e), "Notification permission denied" === e.message && t(!1)
						} finally {
							n(!1)
						}
					}
				}, u = () => {
					localStorage.setItem(U, Date.now().toString()), t(!1)
				};
				return e ? (0, r.jsx)("div", {
					className: "fixed bottom-4 right-4 left-4 md:left-auto md:w-96 z-50 animate-in slide-in-from-bottom-5 duration-300",
					children: (0, r.jsx)("div", {
						className: "bg-card border rounded-lg shadow-lg p-4",
						children: (0, r.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [(0, r.jsx)("div", {
								className: "p-2 rounded-full bg-primary/10 shrink-0",
								children: (0, r.jsx)(L.Z, {
									className: "h-5 w-5 text-primary"
								})
							}), (0, r.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [(0, r.jsx)("h4", {
									className: "font-semibold text-sm",
									children: "Stay Updated!"
								}), (0, r.jsx)("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: "Enable notifications to get instant updates about new features, announcements, and important changes."
								}), (0, r.jsxs)("div", {
									className: "flex items-center gap-2 mt-3",
									children: [(0, r.jsx)(h.z, {
										size: "sm",
										onClick: c,
										disabled: a,
										className: "h-8",
										children: a ? "Enabling..." : "Enable Notifications"
									}), (0, r.jsx)(h.z, {
										size: "sm",
										variant: "ghost",
										onClick: u,
										className: "h-8 text-muted-foreground",
										children: "Not now"
									})]
								})]
							}), (0, r.jsx)("button", {
								onClick: u,
								className: "p-1 hover:bg-muted rounded-md transition-colors shrink-0",
								"aria-label": "Dismiss",
								children: (0, r.jsx)(D.Z, {
									className: "h-4 w-4 text-muted-foreground"
								})
							})]
						})
					})
				}) : null
			}

			function $(e) {
				let {
					children: t
				} = e, a = (0, n.useRouter)(), [d, u] = (0, i.useState)(!0);
				return ((0, i.useEffect)(() => {
					// Authentication removed - directly set loading to false
					u(!1)
				}, [a]), d) ? (0, r.jsxs)("div", {
					className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/30",
					children: [(0, r.jsx)("div", {
						className: "fixed top-4 right-4 z-50",
						children: (0, r.jsx)(f.T, {})
					}), (0, r.jsxs)("div", {
						className: "absolute inset-0 overflow-hidden pointer-events-none",
						children: [(0, r.jsx)("div", {
							className: "absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl"
						}), (0, r.jsx)("div", {
							className: "absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl"
						})]
					}), (0, r.jsxs)(s.E.div, {
						className: "text-center relative z-10",
						initial: {
							opacity: 0,
							scale: .9
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: .5
						},
						children: [(0, r.jsxs)(s.E.div, {
							className: "relative mx-auto mb-6",
							animate: {
								scale: [1, 1.05, 1]
							},
							transition: {
								duration: 2,
								repeat: 1 / 0,
								ease: "easeInOut"
							},
							children: [(0, r.jsx)("div", {
								className: "w-20 h-20 mx-auto relative",
								children: (0, r.jsx)(c.default, {
									src: "/derivforgelogo.png",
									alt: "DerivForge",
									fill: !0,
									className: "object-contain",
									priority: !0
								})
							}), (0, r.jsx)("div", {
								className: "absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-20 blur-xl animate-pulse"
							})]
						}), (0, r.jsxs)(s.E.div, {
							className: "flex items-center justify-center gap-2",
							initial: {
								opacity: 0
							},
							animate: {
								opacity: 1
							},
							transition: {
								delay: .3
							},
							children: [(0, r.jsx)("div", {
								className: "w-2 h-2 bg-indigo-500 rounded-full animate-bounce",
								style: {
									animationDelay: "0ms"
								}
							}), (0, r.jsx)("div", {
								className: "w-2 h-2 bg-purple-500 rounded-full animate-bounce",
								style: {
									animationDelay: "150ms"
								}
							}), (0, r.jsx)("div", {
								className: "w-2 h-2 bg-cyan-500 rounded-full animate-bounce",
								style: {
									animationDelay: "300ms"
								}
							})]
						}), (0, r.jsx)(s.E.p, {
							className: "mt-4 text-sm text-gray-600 dark:text-gray-400 font-medium",
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .5
							},
							children: "Loading your dashboard..."
						})]
					})]
				}) : (0, r.jsxs)("div", {
					className: "flex min-h-screen bg-gradient-to-br from-slate-50/50 via-white to-indigo-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/20",
					children: [(0, r.jsxs)("div", {
						className: "fixed inset-0 overflow-hidden pointer-events-none",
						children: [(0, r.jsx)("div", {
							className: "absolute -top-1/2 -left-1/4 w-1/2 h-full bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl"
						}), (0, r.jsx)("div", {
							className: "absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-cyan-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl"
						}), (0, r.jsx)("div", {
							className: "absolute -bottom-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"
						})]
					}), (0, r.jsx)(P, {}), (0, r.jsx)(o.M, {
						mode: "wait",
						children: (0, r.jsx)(s.E.main, {
							className: "flex-1 p-6 lg:p-8 overflow-auto relative",
							initial: {
								opacity: 0,
								x: 20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							exit: {
								opacity: 0,
								x: -20
							},
							transition: {
								duration: .3,
								ease: "easeOut"
							},
							children: t
						})
					}), (0, r.jsx)(q, {})]
				})
			}
		},
		17009: function(e, t, a) {
			"use strict";
			a.d(t, {
				T: function() {
					return d
				}
			});
			var r = a(57437),
				i = a(2265),
				n = a(98239),
				s = a(79205);
			let o = (0, s.Z)("Sun", [
					["circle", {
						cx: "12",
						cy: "12",
						r: "4",
						key: "4exip2"
					}],
					["path", {
						d: "M12 2v2",
						key: "tus03m"
					}],
					["path", {
						d: "M12 20v2",
						key: "1lh1kg"
					}],
					["path", {
						d: "m4.93 4.93 1.41 1.41",
						key: "149t6j"
					}],
					["path", {
						d: "m17.66 17.66 1.41 1.41",
						key: "ptbguv"
					}],
					["path", {
						d: "M2 12h2",
						key: "1t8f8n"
					}],
					["path", {
						d: "M20 12h2",
						key: "1q8mjw"
					}],
					["path", {
						d: "m6.34 17.66-1.41 1.41",
						key: "1m8zz5"
					}],
					["path", {
						d: "m19.07 4.93-1.41 1.41",
						key: "1shlcs"
					}]
				]),
				l = (0, s.Z)("Moon", [
					["path", {
						d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
						key: "a7tn18"
					}]
				]);

			function d() {
				let [e, t] = (0, i.useState)("light"), [a, s] = (0, i.useState)(!1);
				return ((0, i.useEffect)(() => {
					s(!0);
					let e = localStorage.getItem("theme"),
						a = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
						r = e || a;
					t(r), "dark" === r ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
				}, []), a) ? (0, r.jsx)(n.E.button, {
					onClick: () => {
						let a = "light" === e ? "dark" : "light";
						t(a), localStorage.setItem("theme", a), "dark" === a ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					},
					className: "relative w-12 h-7 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 dark:from-indigo-400/30 dark:via-purple-400/30 dark:to-cyan-400/30 border border-border/50 p-1 transition-all duration-300 hover:shadow-md hover:shadow-indigo-500/10",
					title: "Switch to ".concat("light" === e ? "dark" : "light", " mode"),
					whileHover: {
						scale: 1.05
					},
					whileTap: {
						scale: .95
					},
					children: (0, r.jsx)(n.E.div, {
						className: "w-5 h-5 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center",
						animate: {
							x: "dark" === e ? 20 : 0
						},
						transition: {
							type: "spring",
							stiffness: 500,
							damping: 30
						},
						children: "light" === e ? (0, r.jsx)(o, {
							className: "h-3 w-3 text-amber-500"
						}) : (0, r.jsx)(l, {
							className: "h-3 w-3 text-indigo-400"
						})
					})
				}) : null
			}
		},
		75260: function(e, t, a) {
			"use strict";
			a.d(t, {
				d$: function() {
					return s
				}
			});
			var r = a(19293);
			async function i() {
				var e, t;
				try {
					let t = await r.authService.getCurrentUser();
					if (!t) return !1;
					let a = await fetch("/api/admin/verify", {
						method: "GET",
						credentials: "include",
						headers: {
							"X-User-ID": t.$id
						}
					});
					if (a.ok) {
						let e = await a.json();
						return !0 === e.isAdmin
					}
					return (null === (e = t.labels) || void 0 === e ? void 0 : e.includes("admin")) || !1
				} catch (e) {
					console.error("Error checking admin status:", e);
					try {
						let e = await r.authService.getCurrentUser();
						return (null == e ? void 0 : null === (t = e.labels) || void 0 === t ? void 0 : t.includes("admin")) || !1
					} catch (e) {
						return !1
					}
				}
			}
			async function n() {
				if (!await i()) throw Error("Unauthorized: Admin access required");
				return !0
			}
			let s = {
				isAdmin: i,
				requireAdmin: n,
				verifyAdminSecure: async function() {
					var e, t;
					try {
						let t = await r.authService.getCurrentUser();
						if (!t) return {
							isAdmin: !1
						};
						let a = await fetch("/api/admin/verify", {
							method: "GET",
							credentials: "include",
							headers: {
								"X-User-ID": t.$id
							}
						});
						if (!a.ok) {
							let a = (null === (e = t.labels) || void 0 === e ? void 0 : e.includes("admin")) || !1;
							return {
								isAdmin: a,
								userId: a ? t.$id : void 0
							}
						}
						return await a.json()
					} catch (e) {
						console.error("Error verifying admin status:", e);
						try {
							let e = await r.authService.getCurrentUser(),
								a = (null == e ? void 0 : null === (t = e.labels) || void 0 === t ? void 0 : t.includes("admin")) || !1;
							return {
								isAdmin: a,
								userId: a ? null == e ? void 0 : e.$id : void 0
							}
						} catch (e) {
							return {
								isAdmin: !1
							}
						}
					}
				}
			}
		},
		94766: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("Bell", [
				["path", {
					d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
					key: "1qo2s2"
				}],
				["path", {
					d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
					key: "qgo35s"
				}]
			])
		},
		82222: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("Bot", [
				["path", {
					d: "M12 8V4H8",
					key: "hb8ula"
				}],
				["rect", {
					width: "16",
					height: "12",
					x: "4",
					y: "8",
					rx: "2",
					key: "enze0r"
				}],
				["path", {
					d: "M2 14h2",
					key: "vft8re"
				}],
				["path", {
					d: "M20 14h2",
					key: "4cs60a"
				}],
				["path", {
					d: "M15 13v2",
					key: "1xurst"
				}],
				["path", {
					d: "M9 13v2",
					key: "rq6x2g"
				}]
			])
		},
		10407: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("ChevronRight", [
				["path", {
					d: "m9 18 6-6-6-6",
					key: "mthhwq"
				}]
			])
		},
		95252: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("DollarSign", [
				["line", {
					x1: "12",
					x2: "12",
					y1: "2",
					y2: "22",
					key: "7eqyqh"
				}],
				["path", {
					d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
					key: "1b0p4s"
				}]
			])
		},
		29202: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("Globe", [
				["circle", {
					cx: "12",
					cy: "12",
					r: "10",
					key: "1mglay"
				}],
				["path", {
					d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
					key: "13o1zl"
				}],
				["path", {
					d: "M2 12h20",
					key: "9i4pu4"
				}]
			])
		},
		35471: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("Headphones", [
				["path", {
					d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
					key: "1xhozi"
				}]
			])
		},
		98335: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("Link", [
				["path", {
					d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
					key: "1cjeqo"
				}],
				["path", {
					d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
					key: "19qd67"
				}]
			])
		},
		2207: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("PenLine", [
				["path", {
					d: "M12 20h9",
					key: "t2du7b"
				}],
				["path", {
					d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
					key: "1ykcvy"
				}]
			])
		},
		6076: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("Rocket", [
				["path", {
					d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
					key: "m3kijz"
				}],
				["path", {
					d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
					key: "1fmvmk"
				}],
				["path", {
					d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
					key: "1f8sc4"
				}],
				["path", {
					d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
					key: "qeys4"
				}]
			])
		},
		98728: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("Settings", [
				["path", {
					d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
					key: "1qme2f"
				}],
				["circle", {
					cx: "12",
					cy: "12",
					r: "3",
					key: "1v7zrd"
				}]
			])
		},
		32489: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("X", [
				["path", {
					d: "M18 6 6 18",
					key: "1bl5f8"
				}],
				["path", {
					d: "m6 6 12 12",
					key: "d8bk6v"
				}]
			])
		},
		11239: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return r
				}
			});
			let r = (0, a(79205).Z)("Zap", [
				["path", {
					d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
					key: "1xq2db"
				}]
			])
		},
		99376: function(e, t, a) {
			"use strict";
			var r = a(35475);
			a.o(r, "useParams") && a.d(t, {
				useParams: function() {
					return r.useParams
				}
			}), a.o(r, "usePathname") && a.d(t, {
				usePathname: function() {
					return r.usePathname
				}
			}), a.o(r, "useRouter") && a.d(t, {
				useRouter: function() {
					return r.useRouter
				}
			}), a.o(r, "useSearchParams") && a.d(t, {
				useSearchParams: function() {
					return r.useSearchParams
				}
			})
		}
	},
	function(e) {
		e.O(0, [8890, 8590, 7648, 8239, 5157, 5619, 8704, 2971, 2117, 1744], function() {
			return e(e.s = 29708)
		}), _N_E = e.O()
	}
]);