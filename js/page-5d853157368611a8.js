(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[2885, 2962, 9293], {
		31519: function(e, t, r) {
			Promise.resolve().then(r.bind(r, 36337))
		},
		36337: function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, {
				default: function() {
					return S
				}
			});
			var s = r(57437),
				a = r(2265),
				i = r(99376),
				n = r(27648),
				d = r(98239),
				o = r(57586),
				l = r(62869),
				c = r(66070),
				m = r(54280),
				h = r(19293),
				u = r(12962),
				g = r(96498),
				x = r(29202),
				p = r(99397),
				b = r(82023),
				f = r(42488),
				w = r(15868),
				v = r(70525),
				y = r(95468),
				j = r(76865),
				N = r(96362),
				k = r(32489),
				I = r(18930),
				U = r(6076);

			function S() {
				let e = (0, i.useRouter)(),
					[t, r] = (0, a.useState)([]),
					[S, E] = (0, a.useState)(!0),
					[z, D] = (0, a.useState)(""),
					[T, A] = (0, a.useState)([]),
					[Z, C] = (0, a.useState)(new Set);
				(0, a.useEffect)(() => {
					L()
				}, []);
				let R = async e => {
					try {
						let t = await fetch("/api/sites/validate-urls", {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									"X-User-ID": e
								},
								body: JSON.stringify({
									userId: e
								})
							}),
							r = await t.json();
						r.success && r.mismatches && r.mismatches.length > 0 && (A(r.mismatches), g.A.warning("URL Configuration Issues Detected", "".concat(r.mismatches.length, " site(s) have App ID redirect URL issues.")))
					} catch (e) {
						console.error("Failed to check URL mismatches:", e)
					}
				}, L = async () => {
					try {
						// Authentication removed - use a default user ID or skip user-specific functionality
						let defaultUserId = "default-user";
						D(defaultUserId);
						let s = await m.R.getUserSites(defaultUserId);
						r(s), s.length > 0 && R(defaultUserId)
					} catch (e) {
						console.error("Failed to load sites:", e)
					} finally {
						E(!1)
					}
				}, P = e => {
					C(t => new Set([...t, e]))
				}, F = T.filter(e => !Z.has(e.siteId)), $ = async e => {
					if (confirm("Are you sure you want to delete this site?")) try {
						await m.R.deleteSite(e), r(t.filter(t => t.$id !== e))
					} catch (e) {
						console.error("Failed to delete site:", e), g.A.error("Error", "Failed to delete site")
					}
				}, O = async e => {
					if (confirm("Deploy ".concat(e.domain, " to production?"))) try {
						// Use default user ID for deployment since authentication is removed
						let defaultUserId = "default-user";
						let t = await m.R.createDeployment(e.$id, defaultUserId, defaultUserId);
						await u.functionsService.triggerDeployment(t.$id, e.$id), await m.R.updateSite(e.$id, {
							status: "pending"
						}), g.A.success("Deployment Started", "Check the Deployments page for progress."), await L()
					} catch (e) {
						console.error("Failed to deploy site:", e), g.A.error("Deployment Failed", e.message)
					}
				}, _ = (e, t) => {
					if (t) return (0, s.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800",
						children: [(0, s.jsx)("span", {
							className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"
						}), "Suspended"]
					});
					let r = {
							draft: {
								bg: "bg-slate-100 dark:bg-slate-800",
								text: "text-slate-700 dark:text-slate-300",
								dot: "bg-slate-500"
							},
							pending: {
								bg: "bg-amber-50 dark:bg-amber-950/50",
								text: "text-amber-700 dark:text-amber-300",
								dot: "bg-amber-500 animate-pulse"
							},
							deployed: {
								bg: "bg-emerald-50 dark:bg-emerald-950/50",
								text: "text-emerald-700 dark:text-emerald-300",
								dot: "bg-emerald-500"
							},
							failed: {
								bg: "bg-red-50 dark:bg-red-950/50",
								text: "text-red-700 dark:text-red-300",
								dot: "bg-red-500"
							}
						},
						a = r[e] || r.draft;
					return (0, s.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ".concat(a.bg, " ").concat(a.text),
						children: [(0, s.jsx)("span", {
							className: "w-1.5 h-1.5 rounded-full ".concat(a.dot)
						}), e.charAt(0).toUpperCase() + e.slice(1)]
					})
				};
				return S ? (0, s.jsx)("div", {
					className: "flex items-center justify-center min-h-[400px]",
					children: (0, s.jsxs)(d.E.div, {
						className: "text-center",
						initial: {
							opacity: 0,
							scale: .9
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						children: [(0, s.jsxs)("div", {
							className: "relative w-16 h-16 mx-auto mb-4",
							children: [(0, s.jsx)("div", {
								className: "absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 animate-spin",
								style: {
									animationDuration: "3s"
								},
								children: (0, s.jsx)("div", {
									className: "absolute inset-[3px] rounded-full bg-white dark:bg-slate-900"
								})
							}), (0, s.jsx)(x.Z, {
								className: "absolute inset-0 m-auto h-6 w-6 text-indigo-500"
							})]
						}), (0, s.jsx)("p", {
							className: "text-muted-foreground font-medium",
							children: "Loading your sites..."
						})]
					})
				}) : (0, s.jsxs)("div", {
					className: "space-y-8",
					children: [(0, s.jsxs)(d.E.div, {
						className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
						initial: {
							opacity: 0,
							y: -20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .5
						},
						children: [(0, s.jsxs)("div", {
							children: [(0, s.jsxs)("div", {
								className: "flex items-center gap-3 mb-2",
								children: [(0, s.jsx)("div", {
									className: "p-2 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25",
									children: (0, s.jsx)(x.Z, {
										className: "h-5 w-5"
									})
								}), (0, s.jsx)("h1", {
									className: "text-3xl font-bold font-heading bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent",
									children: "Your Sites"
								})]
							}), (0, s.jsx)("p", {
								className: "text-muted-foreground",
								children: "Manage and deploy your trading platform sites"
							})]
						}), (0, s.jsx)(d.E.div, {
							whileHover: {
								scale: 1.02
							},
							whileTap: {
								scale: .98
							},
							children: (0, s.jsx)(n.default, {
								href: "/sites/new",
								children: (0, s.jsxs)(l.z, {
									className: "gap-2 shadow-lg shadow-indigo-500/25 h-11",
									children: [(0, s.jsx)(p.Z, {
										className: "h-4 w-4"
									}), "Create Site", (0, s.jsx)(b.Z, {
										className: "h-3 w-3 ml-1 opacity-70"
									})]
								})
							})
						})]
					}), t.length > 0 && (0, s.jsxs)(d.E.div, {
						className: "grid grid-cols-2 md:grid-cols-4 gap-4",
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .1
						},
						children: [(0, s.jsxs)("div", {
							className: "p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/50 dark:to-slate-900 border border-indigo-100 dark:border-indigo-900/50",
							children: [(0, s.jsxs)("div", {
								className: "flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1",
								children: [(0, s.jsx)(x.Z, {
									className: "h-4 w-4"
								}), (0, s.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider",
									children: "Total Sites"
								})]
							}), (0, s.jsx)("p", {
								className: "text-2xl font-bold text-gray-900 dark:text-white",
								children: t.length
							})]
						}), (0, s.jsxs)("div", {
							className: "p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/50 dark:to-slate-900 border border-emerald-100 dark:border-emerald-900/50",
							children: [(0, s.jsxs)("div", {
								className: "flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1",
								children: [(0, s.jsx)(f.Z, {
									className: "h-4 w-4"
								}), (0, s.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider",
									children: "Deployed"
								})]
							}), (0, s.jsx)("p", {
								className: "text-2xl font-bold text-gray-900 dark:text-white",
								children: t.filter(e => "deployed" === e.status).length
							})]
						}), (0, s.jsxs)("div", {
							className: "p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/50 dark:to-slate-900 border border-amber-100 dark:border-amber-900/50",
							children: [(0, s.jsxs)("div", {
								className: "flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-1",
								children: [(0, s.jsx)(w.Z, {
									className: "h-4 w-4"
								}), (0, s.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider",
									children: "Drafts"
								})]
							}), (0, s.jsx)("p", {
								className: "text-2xl font-bold text-gray-900 dark:text-white",
								children: t.filter(e => "draft" === e.status).length
							})]
						}), (0, s.jsxs)("div", {
							className: "p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/50 dark:to-slate-900 border border-purple-100 dark:border-purple-900/50",
							children: [(0, s.jsxs)("div", {
								className: "flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1",
								children: [(0, s.jsx)(v.Z, {
									className: "h-4 w-4"
								}), (0, s.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider",
									children: "This Month"
								})]
							}), (0, s.jsx)("p", {
								className: "text-2xl font-bold text-gray-900 dark:text-white",
								children: t.filter(e => new Date(e.createdAt).getMonth() === new Date().getMonth()).length
							})]
						}), t.some(e => e.suspended) && (0, s.jsxs)("div", {
							className: "p-4 rounded-2xl bg-gradient-to-br from-red-50 to-white dark:from-red-950/50 dark:to-slate-900 border border-red-100 dark:border-red-900/50 col-span-2 md:col-span-4",
							children: [(0, s.jsxs)("div", {
								className: "flex items-center gap-2 text-red-600 dark:text-red-400 mb-1",
								children: [(0, s.jsx)(y.Z, {
									className: "h-4 w-4"
								}), (0, s.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider",
									children: "Suspended Sites"
								})]
							}), (0, s.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [(0, s.jsx)("p", {
									className: "text-2xl font-bold text-red-600 dark:text-red-400",
									children: t.filter(e => e.suspended).length
								}), (0, s.jsx)("p", {
									className: "text-sm text-red-500 dark:text-red-400",
									children: "Contact support if you believe this is an error"
								})]
							})]
						})]
					}), F.length > 0 && (0, s.jsxs)(d.E.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .15
						},
						className: "space-y-3",
						children: [(0, s.jsxs)("div", {
							className: "flex items-center gap-2 text-amber-600 dark:text-amber-400",
							children: [(0, s.jsx)(j.Z, {
								className: "h-5 w-5"
							}), (0, s.jsx)("h3", {
								className: "font-semibold",
								children: "URL Configuration Issues Detected"
							})]
						}), F.map(e => (0, s.jsx)(d.E.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							exit: {
								opacity: 0,
								x: 20
							},
							className: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border-2 border-amber-300 dark:border-amber-700 rounded-xl p-4 shadow-md",
							children: (0, s.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [(0, s.jsxs)("div", {
									className: "flex-1",
									children: [(0, s.jsxs)("div", {
										className: "flex items-center flex-wrap gap-2 mb-2",
										children: [(0, s.jsx)(j.Z, {
											className: "h-4 w-4 text-amber-600"
										}), (0, s.jsx)("span", {
											className: "font-bold text-amber-900 dark:text-amber-100",
											children: e.siteName
										}), (0, s.jsx)("span", {
											className: "text-xs bg-amber-200 dark:bg-amber-800 px-2 py-0.5 rounded-full text-amber-800 dark:text-amber-200",
											children: e.siteDomain
										}), (0, s.jsxs)("span", {
											className: "text-xs bg-blue-100 dark:bg-blue-900/50 px-2 py-0.5 rounded-full text-blue-700 dark:text-blue-300 font-mono",
											children: ["App: ", e.mismatch.appName, " (ID: ", e.appId, ")"]
										})]
									}), (0, s.jsxs)("p", {
										className: "text-sm text-amber-800 dark:text-amber-200 mb-3",
										children: ["App ", (0, s.jsxs)("strong", {
											children: ['"', e.mismatch.appName, '"']
										}), " ", "(ID:", " ", (0, s.jsx)("code", {
											className: "bg-blue-100 dark:bg-blue-900/50 px-1 rounded text-blue-700 dark:text-blue-300",
											children: e.appId
										}), ") has redirect URL", " ", (0, s.jsx)("code", {
											className: "bg-red-100 dark:bg-red-900/50 px-1.5 py-0.5 rounded text-red-700 dark:text-red-300 line-through",
											children: e.mismatch.appRedirectDomain
										}), " ", "which doesn't match your site domain."]
									}), (0, s.jsx)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: (0, s.jsxs)("span", {
											className: "text-xs text-amber-600 dark:text-amber-400",
											children: ["Fix: In Deriv Dashboard, find app", " ", (0, s.jsxs)("strong", {
												children: ['"', e.mismatch.appName, '"']
											}), " ", "(ID: ", e.appId, ") and set redirect URL to", " ", (0, s.jsxs)("code", {
												className: "bg-emerald-100 dark:bg-emerald-900/50 px-1.5 py-0.5 rounded text-emerald-700 dark:text-emerald-300",
												children: ["https://", e.mismatch.siteDomain, "/"]
											})]
										})
									})]
								}), (0, s.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [(0, s.jsx)(l.z, {
										size: "sm",
										variant: "outline",
										className: "border-amber-300 text-amber-700 hover:bg-amber-100 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-900/50",
										asChild: !0,
										children: (0, s.jsxs)("a", {
											href: "https://api.deriv.com/dashboard/",
											target: "_blank",
											rel: "noopener noreferrer",
											children: [(0, s.jsx)(N.Z, {
												className: "h-3 w-3 mr-1"
											}), "Fix Now"]
										})
									}), (0, s.jsxs)(l.z, {
										size: "sm",
										variant: "ghost",
										className: "text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-900/30",
										onClick: () => P(e.siteId),
										children: [(0, s.jsx)(k.Z, {
											className: "h-3 w-3 mr-1"
										}), "Dismiss"]
									})]
								})]
							})
						}, e.siteId))]
					}), 0 === t.length ? (0, s.jsx)(d.E.div, {
						initial: {
							opacity: 0,
							scale: .95
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							delay: .2
						},
						children: (0, s.jsx)(c.Zb, {
							className: "border-dashed border-2 bg-gradient-to-br from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-800/50",
							children: (0, s.jsxs)(c.aY, {
								className: "flex flex-col items-center justify-center py-16",
								children: [(0, s.jsx)(d.E.div, {
									className: "p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 mb-6",
									animate: {
										scale: [1, 1.05, 1]
									},
									transition: {
										duration: 2,
										repeat: 1 / 0
									},
									children: (0, s.jsx)(x.Z, {
										className: "h-16 w-16 text-indigo-500"
									})
								}), (0, s.jsx)("h3", {
									className: "text-xl font-bold text-gray-900 dark:text-gray-100 mb-2",
									children: "No sites yet"
								}), (0, s.jsx)("p", {
									className: "text-muted-foreground mb-8 text-center max-w-md",
									children: "Get started by creating your first site. You can customize branding, colors, and deploy it with just a few clicks."
								}), (0, s.jsx)(d.E.div, {
									whileHover: {
										scale: 1.02
									},
									whileTap: {
										scale: .98
									},
									children: (0, s.jsx)(n.default, {
										href: "/sites/new",
										children: (0, s.jsxs)(l.z, {
											size: "lg",
											className: "gap-2 shadow-lg shadow-indigo-500/25",
											children: [(0, s.jsx)(p.Z, {
												className: "h-5 w-5"
											}), "Create Your First Site", (0, s.jsx)(b.Z, {
												className: "h-4 w-4 ml-1"
											})]
										})
									})
								})]
							})
						})
					}) : (0, s.jsx)(d.E.div, {
						className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						initial: {
							opacity: 0
						},
						animate: {
							opacity: 1
						},
						transition: {
							delay: .2
						},
						children: (0, s.jsx)(o.M, {
							children: t.map((e, t) => (0, s.jsx)(d.E.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									scale: .9
								},
								transition: {
									delay: .05 * t
								},
								children: (0, s.jsxs)(c.Zb, {
									className: "group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ".concat(e.suspended ? "border-red-200 dark:border-red-800/50 bg-red-50/30 dark:bg-red-950/10" : "hover:shadow-indigo-500/10"),
									children: [(0, s.jsx)("div", {
										className: "absolute inset-0 transition-all duration-500 ".concat(e.suspended ? "bg-gradient-to-br from-red-500/5 via-red-500/5 to-red-500/5" : "bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5")
									}), (0, s.jsxs)(c.Ol, {
										className: "relative",
										children: [(0, s.jsxs)("div", {
											className: "flex justify-between items-start",
											children: [(0, s.jsxs)("div", {
												className: "flex-1",
												children: [(0, s.jsx)(c.ll, {
													className: "text-lg transition-colors ".concat(e.suspended ? "text-red-600 dark:text-red-400" : "group-hover:text-indigo-600 dark:group-hover:text-indigo-400"),
													children: e.config.siteName
												}), (0, s.jsxs)(c.SZ, {
													className: "mt-1 flex items-center gap-1",
													children: [(0, s.jsx)(x.Z, {
														className: "h-3 w-3"
													}), e.domain]
												})]
											}), _(e.status, e.suspended)]
										}), e.suspended && e.suspendedReason && (0, s.jsxs)("div", {
											className: "mt-3 p-3 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800",
											children: [(0, s.jsx)("p", {
												className: "text-xs font-medium text-red-600 dark:text-red-400 uppercase tracking-wider mb-1",
												children: "Suspension Reason"
											}), (0, s.jsx)("p", {
												className: "text-sm text-red-700 dark:text-red-300",
												children: e.suspendedReason
											})]
										})]
									}), (0, s.jsx)(c.aY, {
										className: "relative",
										children: (0, s.jsxs)("div", {
											className: "space-y-3",
											children: [(0, s.jsxs)("div", {
												className: "flex items-center text-sm",
												children: [(0, s.jsx)("span", {
													className: "text-muted-foreground w-24",
													children: "App ID:"
												}), (0, s.jsx)("span", {
													className: "font-mono text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md",
													children: e.config.appId
												})]
											}), (0, s.jsxs)("div", {
												className: "flex items-center text-sm",
												children: [(0, s.jsx)("span", {
													className: "text-muted-foreground w-24",
													children: "Environment:"
												}), (0, s.jsx)("span", {
													className: "font-medium capitalize",
													children: e.config.environment
												})]
											}), (0, s.jsxs)("div", {
												className: "flex items-center text-sm",
												children: [(0, s.jsx)("span", {
													className: "text-muted-foreground w-24",
													children: "Created:"
												}), (0, s.jsx)("span", {
													className: "font-medium",
													children: new Date(e.createdAt).toLocaleDateString("en-US", {
														month: "short",
														day: "numeric",
														year: "numeric"
													})
												})]
											}), (0, s.jsxs)("div", {
												className: "flex flex-col gap-2 pt-4 border-t border-border/50",
												children: [(0, s.jsxs)("div", {
													className: "flex gap-2",
													children: [(0, s.jsx)(d.E.div, {
														className: "flex-1",
														whileHover: {
															scale: 1.02
														},
														whileTap: {
															scale: .98
														},
														children: (0, s.jsx)(n.default, {
															href: "/sites/".concat(e.$id),
															className: "block",
															children: (0, s.jsxs)(l.z, {
																variant: "outline",
																size: "sm",
																className: "w-full gap-1",
																children: [(0, s.jsx)(w.Z, {
																	className: "h-3.5 w-3.5"
																}), "Edit"]
															})
														})
													}), e.deploymentUrl && (0, s.jsx)(d.E.div, {
														className: "flex-1",
														whileHover: {
															scale: 1.02
														},
														whileTap: {
															scale: .98
														},
														children: (0, s.jsx)("a", {
															href: e.deploymentUrl,
															target: "_blank",
															rel: "noopener noreferrer",
															className: "block",
															children: (0, s.jsxs)(l.z, {
																variant: "outline",
																size: "sm",
																className: "w-full gap-1",
																children: [(0, s.jsx)(N.Z, {
																	className: "h-3.5 w-3.5"
																}), "View"]
															})
														})
													}), (0, s.jsx)(d.E.div, {
														whileHover: {
															scale: 1.02
														},
														whileTap: {
															scale: .98
														},
														children: (0, s.jsx)(l.z, {
															variant: "outline",
															size: "sm",
															onClick: () => $(e.$id),
															className: "text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 border-red-200 dark:border-red-800/50",
															children: (0, s.jsx)(I.Z, {
																className: "h-3.5 w-3.5"
															})
														})
													})]
												}), "draft" === e.status && (0, s.jsx)(d.E.div, {
													whileHover: {
														scale: 1.01
													},
													whileTap: {
														scale: .99
													},
													children: (0, s.jsxs)(l.z, {
														size: "sm",
														onClick: () => O(e),
														className: "w-full gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 shadow-lg shadow-indigo-500/25",
														children: [(0, s.jsx)(U.Z, {
															className: "h-3.5 w-3.5"
														}), "Deploy to Production"]
													})
												})]
											})]
										})
									})]
								})
							}, e.$id))
						})
					})]
				})
			}
		},
		62869: function(e, t, r) {
			"use strict";
			r.d(t, {
				d: function() {
					return d
				},
				z: function() {
					return o
				}
			});
			var s = r(57437),
				a = r(2265),
				i = r(90535),
				n = r(47984);
			let d = (0, i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
					variants: {
						variant: {
							default: "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40",
							destructive: "bg-gradient-to-r from-red-600 to-red-600 text-white hover:from-red-700 hover:to-red-700 shadow-lg shadow-red-500/25 hover:shadow-red-500/40",
							outline: "border-2 border-border bg-transparent hover:bg-muted text-foreground",
							secondary: "bg-muted text-foreground hover:bg-muted/80",
							ghost: "hover:bg-muted text-foreground",
							link: "text-primary underline-offset-4 hover:underline",
							glow: "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-cyan-700 shadow-glow hover:shadow-glow-lg",
							success: "bg-gradient-to-r from-emerald-600 to-emerald-600 text-white hover:from-emerald-700 hover:to-emerald-700 shadow-lg shadow-emerald-500/25"
						},
						size: {
							default: "h-11 px-5 py-2",
							sm: "h-9 rounded-lg px-4 text-xs",
							lg: "h-12 rounded-xl px-8 text-base",
							xl: "h-14 rounded-2xl px-10 text-base",
							icon: "h-10 w-10"
						}
					},
					defaultVariants: {
						variant: "default",
						size: "default"
					}
				}),
				o = a.forwardRef((e, t) => {
					let {
						className: r,
						variant: a,
						size: i,
						...o
					} = e;
					return (0, s.jsx)("button", {
						className: (0, n.cn)(d({
							variant: a,
							size: i,
							className: r
						})),
						ref: t,
						...o
					})
				});
			o.displayName = "Button"
		},
		19293: function(e, t, r) {
			"use strict";
			r.d(t, {
				authService: function() {
					return i
				}
			});
			let s = function() {
				for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r]
			};
			class a {
				async ensureInitialized() {
					this.initPromise && await this.initPromise
				}
				async initializeSession() {
					if (!this.isInitialized) try {
						s("Initializing session from server...");
						let {
							getSessionInfo: e
						} = await r.e(6981).then(r.bind(r, 36981)), {
							isAuthenticated: t,
							user: a
						} = await e();
						t && a ? (this.loggedInUser = a, s("Session initialized from server:", a.email)) : (this.loggedInUser = null, s("No active session found"))
					} catch (e) {
						s("Error initializing session:", e), this.loggedInUser = null
					} finally {
						this.isInitialized = !0
					}
				}
				async register(e) {
					let {
						email: t,
						password: a,
						name: i
					} = e;
					try {
						s("Registering new user:", t);
						let {
							signUpWithEmail: e
						} = await r.e(6981).then(r.bind(r, 36981)), n = new FormData;
						n.append("email", t), n.append("password", a), n.append("name", i), await e(n), s("User created on server");
						let {
							signInWithEmail: d
						} = await r.e(6981).then(r.bind(r, 36981)), o = await d(t, a);
						if (!o.success || !o.user) throw Error("Failed to create session after registration");
						return s("✓ Server session created and cookie set"), this.loggedInUser = o.user, {
							$id: o.user.$id,
							email: o.user.email,
							name: o.user.name
						}
					} catch (e) {
						throw console.error("[AUTH] Registration error:", e), e
					}
				}
				async login(e) {
					let {
						email: t,
						password: a
					} = e;
					s("=== LOGIN ATTEMPT ==="), s("Email:", t);
					try {
						this.loggedInUser = null;
						let {
							signInWithEmail: e
						} = await r.e(6981).then(r.bind(r, 36981)), i = await e(t, a);
						if (!i.success || !i.user) throw Error("Login failed");
						return s("✓ Server session created and cookie set"), this.loggedInUser = i.user, s("✓ Login successful, userId:", i.user.$id), {
							success: !0,
							user: this.loggedInUser
						}
					} catch (e) {
						throw s("✗ Login error:", (null == e ? void 0 : e.message) || e), this.loggedInUser = null, e
					}
				}
				async logout() {
					s("=== LOGOUT ===");
					try {
						try {
							let {
								account: e
							} = await Promise.all([r.e(8890), r.e(9095)]).then(r.bind(r, 49095));
							await e.deleteSession("current"), s("✓ Client-side session deleted")
						} catch (e) {}
						let {
							signOut: e
						} = await r.e(6981).then(r.bind(r, 36981));
						await e(), this.loggedInUser = null, s("✓ Logout successful")
					} catch (e) {
						this.loggedInUser = null, s("Logout completed (with potential server error):", null == e ? void 0 : e.message)
					}
				}
				async getCurrentUser() {
					if (s("getCurrentUser called"), s("Cached user:", this.loggedInUser ? this.loggedInUser.email : "NONE"), await this.ensureInitialized(), this.loggedInUser) return s("Returning cached user"), this.loggedInUser;
					s("No cached user, fetching from server...");
					try {
						let {
							getSessionInfo: e
						} = await r.e(6981).then(r.bind(r, 36981)), {
							isAuthenticated: t,
							user: a
						} = await e();
						if (t && a) return this.loggedInUser = a, s("✓ User fetched:", a.email), this.loggedInUser;
						return s("No authenticated session"), null
					} catch (e) {
						return s("✗ Could not fetch user:", null == e ? void 0 : e.message), this.loggedInUser = null, null
					}
				}
				async isAuthenticated() {
					if (s("isAuthenticated called"), await this.ensureInitialized(), this.loggedInUser) return s("✓ Authenticated (from cache)"), !0;
					s("No cached user, checking with server...");
					try {
						let {
							getSessionInfo: e
						} = await r.e(6981).then(r.bind(r, 36981)), {
							isAuthenticated: t,
							user: a
						} = await e();
						if (t && a) return this.loggedInUser = a, s("✓ Authenticated (from server):", a.email), !0;
						return s("✗ Not authenticated"), !1
					} catch (e) {
						return s("✗ Not authenticated:", null == e ? void 0 : e.message), this.loggedInUser = null, !1
					}
				}
				async refreshUser() {
					try {
						let {
							getSessionInfo: e
						} = await r.e(6981).then(r.bind(r, 36981)), {
							isAuthenticated: t,
							user: s
						} = await e();
						if (t && s) return this.loggedInUser = s, this.loggedInUser;
						return this.loggedInUser = null, null
					} catch (e) {
						return this.loggedInUser = null, null
					}
				}
				async resetPassword(e) {
					try {
						let {
							sendPasswordRecovery: t
						} = await r.e(6981).then(r.bind(r, 36981));
						return await t(e)
					} catch (e) {
						throw console.error("Password reset error:", e), e
					}
				}
				async completePasswordReset(e, t, s) {
					try {
						let {
							completePasswordRecovery: a
						} = await r.e(6981).then(r.bind(r, 36981));
						return await a(e, t, s)
					} catch (e) {
						throw console.error("Password reset completion error:", e), e
					}
				}
				async updateName(e) {
					try {
						let {
							updateUserName: t
						} = await r.e(6981).then(r.bind(r, 36981)), s = await t(e);
						return this.loggedInUser && (this.loggedInUser.name = e), s
					} catch (e) {
						throw console.error("Update name error:", e), e
					}
				}
				async updatePassword(e, t) {
					try {
						let {
							updateUserPassword: s
						} = await r.e(6981).then(r.bind(r, 36981));
						return await s(e, t)
					} catch (e) {
						throw console.error("Update password error:", e), e
					}
				}
				isAdmin() {
					var e, t;
					return (null === (t = this.loggedInUser) || void 0 === t ? void 0 : null === (e = t.labels) || void 0 === e ? void 0 : e.includes("admin")) || !1
				}
				getCachedUser() {
					return this.loggedInUser
				}
				constructor() {
					this.loggedInUser = null, this.isInitialized = !1, this.initPromise = null, this.initPromise = this.initializeSession()
				}
			}
			let i = new a
		},
		49095: function(e, t, r) {
			"use strict";
			r.d(t, {
				Lp: function() {
					return i
				},
				UA: function() {
					return d
				},
				account: function() {
					return n
				},
				tO: function() {
					return o
				}
			});
			var s = r(85658),
				a = r(37892);
			let i = new s.KU().setEndpoint(a.qA.endpoint).setProject(a.qA.projectId),
				n = new s.mR(i),
				d = new s.Lg(i),
				o = new s.Ke(i)
		},
		12962: function(e, t, r) {
			"use strict";
			r.d(t, {
				functionsService: function() {
					return n
				}
			});
			var s = r(85658),
				a = r(49095);
			let i = new s.FI(a.Lp),
				n = {
					triggerDeployment: async function(e, t) {
						try {
							let r = await fetch("/api/deploy", {
									method: "POST",
									headers: {
										"Content-Type": "application/json"
									},
									body: JSON.stringify({
										deploymentId: e,
										siteId: t
									}),
									credentials: "include"
								}),
								s = await r.json();
							if (!r.ok) throw Error(s.error || "Failed to trigger deployment");
							return {
								$id: s.executionId,
								status: s.status
							}
						} catch (e) {
							throw console.error("Failed to trigger deployment:", e), e
						}
					},
					getExecutionStatus: async function(e, t) {
						try {
							return await i.getExecution(e, t)
						} catch (e) {
							throw console.error("Failed to get execution status:", e), e
						}
					}
				}
		},
		96498: function(e, t, r) {
			"use strict";
			r.d(t, {
				A: function() {
					return a
				},
				E: function() {
					return s
				}
			});
			let s = (0, r(3011).U)(e => ({
					toasts: [],
					addToast: t => {
						var r;
						let s = Math.random().toString(36).substring(2, 9);
						e(e => ({
							toasts: [...e.toasts, {
								...t,
								id: s
							}]
						}));
						let a = null !== (r = t.duration) && void 0 !== r ? r : 5e3;
						a > 0 && setTimeout(() => {
							e(e => ({
								toasts: e.toasts.filter(e => e.id !== s)
							}))
						}, a)
					},
					removeToast: t => e(e => ({
						toasts: e.toasts.filter(e => e.id !== t)
					})),
					clearToasts: () => e({
						toasts: []
					})
				})),
				a = {
					success: (e, t, r) => {
						s.getState().addToast({
							title: e,
							message: t,
							type: "success",
							duration: r
						})
					},
					error: (e, t, r) => {
						s.getState().addToast({
							title: e,
							message: t,
							type: "error",
							duration: r
						})
					},
					warning: (e, t, r) => {
						s.getState().addToast({
							title: e,
							message: t,
							type: "warning",
							duration: r
						})
					},
					info: (e, t, r) => {
						s.getState().addToast({
							title: e,
							message: t,
							type: "info",
							duration: r
						})
					}
				}
		}
	},
	function(e) {
		e.O(0, [8890, 8590, 7648, 8239, 9689, 6032, 2971, 2117, 1744], function() {
			return e(e.s = 31519)
		}), _N_E = e.O()
	}
]);