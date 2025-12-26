"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8704, 9293], {
		62869: function(e, t, r) {
			r.d(t, {
				d: function() {
					return a
				},
				z: function() {
					return l
				}
			});
			var o = r(57437),
				i = r(2265),
				n = r(90535),
				s = r(47984);
			let a = (0, n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
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
				l = i.forwardRef((e, t) => {
					let {
						className: r,
						variant: i,
						size: n,
						...l
					} = e;
					return (0, o.jsx)("button", {
						className: (0, s.cn)(a({
							variant: i,
							size: n,
							className: r
						})),
						ref: t,
						...l
					})
				});
			l.displayName = "Button"
		},
		19293: function(e, t, r) {
			r.d(t, {
				authService: function() {
					return n
				}
			});
			let o = function() {
				for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r]
			};
			class i {
				async ensureInitialized() {
					this.initPromise && await this.initPromise
				}
				async initializeSession() {
					if (!this.isInitialized) try {
						o("Initializing session from server...");
						let {
							getSessionInfo: e
						} = await r.e(6981).then(r.bind(r, 36981)), {
							isAuthenticated: t,
							user: i
						} = await e();
						t && i ? (this.loggedInUser = i, o("Session initialized from server:", i.email)) : (this.loggedInUser = null, o("No active session found"))
					} catch (e) {
						o("Error initializing session:", e), this.loggedInUser = null
					} finally {
						this.isInitialized = !0
					}
				}
				async register(e) {
					let {
						email: t,
						password: i,
						name: n
					} = e;
					try {
						o("Registering new user:", t);
						let {
							signUpWithEmail: e
						} = await r.e(6981).then(r.bind(r, 36981)), s = new FormData;
						s.append("email", t), s.append("password", i), s.append("name", n), await e(s), o("User created on server");
						let {
							signInWithEmail: a
						} = await r.e(6981).then(r.bind(r, 36981)), l = await a(t, i);
						if (!l.success || !l.user) throw Error("Failed to create session after registration");
						return o("✓ Server session created and cookie set"), this.loggedInUser = l.user, {
							$id: l.user.$id,
							email: l.user.email,
							name: l.user.name
						}
					} catch (e) {
						throw console.error("[AUTH] Registration error:", e), e
					}
				}
				async login(e) {
					let {
						email: t,
						password: i
					} = e;
					o("=== LOGIN ATTEMPT ==="), o("Email:", t);
					try {
						this.loggedInUser = null;
						let {
							signInWithEmail: e
						} = await r.e(6981).then(r.bind(r, 36981)), n = await e(t, i);
						if (!n.success || !n.user) throw Error("Login failed");
						return o("✓ Server session created and cookie set"), this.loggedInUser = n.user, o("✓ Login successful, userId:", n.user.$id), {
							success: !0,
							user: this.loggedInUser
						}
					} catch (e) {
						throw o("✗ Login error:", (null == e ? void 0 : e.message) || e), this.loggedInUser = null, e
					}
				}
				async logout() {
					o("=== LOGOUT ===");
					try {
						try {
							let {
								account: e
							} = await Promise.all([r.e(8890), r.e(9095)]).then(r.bind(r, 49095));
							await e.deleteSession("current"), o("✓ Client-side session deleted")
						} catch (e) {}
						let {
							signOut: e
						} = await r.e(6981).then(r.bind(r, 36981));
						await e(), this.loggedInUser = null, o("✓ Logout successful")
					} catch (e) {
						this.loggedInUser = null, o("Logout completed (with potential server error):", null == e ? void 0 : e.message)
					}
				}
				async getCurrentUser() {
					if (o("getCurrentUser called"), o("Cached user:", this.loggedInUser ? this.loggedInUser.email : "NONE"), await this.ensureInitialized(), this.loggedInUser) return o("Returning cached user"), this.loggedInUser;
					o("No cached user, fetching from server...");
					try {
						let {
							getSessionInfo: e
						} = await r.e(6981).then(r.bind(r, 36981)), {
							isAuthenticated: t,
							user: i
						} = await e();
						if (t && i) return this.loggedInUser = i, o("✓ User fetched:", i.email), this.loggedInUser;
						return o("No authenticated session"), null
					} catch (e) {
						return o("✗ Could not fetch user:", null == e ? void 0 : e.message), this.loggedInUser = null, null
					}
				}
				async isAuthenticated() {
					if (o("isAuthenticated called"), await this.ensureInitialized(), this.loggedInUser) return o("✓ Authenticated (from cache)"), !0;
					o("No cached user, checking with server...");
					try {
						let {
							getSessionInfo: e
						} = await r.e(6981).then(r.bind(r, 36981)), {
							isAuthenticated: t,
							user: i
						} = await e();
						if (t && i) return this.loggedInUser = i, o("✓ Authenticated (from server):", i.email), !0;
						return o("✗ Not authenticated"), !1
					} catch (e) {
						return o("✗ Not authenticated:", null == e ? void 0 : e.message), this.loggedInUser = null, !1
					}
				}
				async refreshUser() {
					try {
						let {
							getSessionInfo: e
						} = await r.e(6981).then(r.bind(r, 36981)), {
							isAuthenticated: t,
							user: o
						} = await e();
						if (t && o) return this.loggedInUser = o, this.loggedInUser;
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
				async completePasswordReset(e, t, o) {
					try {
						let {
							completePasswordRecovery: i
						} = await r.e(6981).then(r.bind(r, 36981));
						return await i(e, t, o)
					} catch (e) {
						throw console.error("Password reset completion error:", e), e
					}
				}
				async updateName(e) {
					try {
						let {
							updateUserName: t
						} = await r.e(6981).then(r.bind(r, 36981)), o = await t(e);
						return this.loggedInUser && (this.loggedInUser.name = e), o
					} catch (e) {
						throw console.error("Update name error:", e), e
					}
				}
				async updatePassword(e, t) {
					try {
						let {
							updateUserPassword: o
						} = await r.e(6981).then(r.bind(r, 36981));
						return await o(e, t)
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
			let n = new i
		},
		49095: function(e, t, r) {
			r.d(t, {
				Lp: function() {
					return n
				},
				UA: function() {
					return a
				},
				account: function() {
					return s
				},
				tO: function() {
					return l
				}
			});
			var o = r(85658),
				i = r(37892);
			let n = new o.KU().setEndpoint(i.qA.endpoint).setProject(i.qA.projectId),
				s = new o.mR(n),
				a = new o.Lg(n),
				l = new o.Ke(n)
		},
		37892: function(e, t, r) {
			r.d(t, {
				qA: function() {
					return i
				},
				y0: function() {
					return n
				}
			});
			var o = r(40257);
			let i = {
				endpoint: "https://fra.cloud.appwrite.io/v1",
				projectId: "67dd37e20034254eca59",
				databaseId: "platform_dashboard_db",
				sitesCollectionId: "sites_collection",
				deploymentsCollectionId: "deployments_collection",
				usersMetadataCollectionId: "users_metadata_collection",
				domainOwnershipCollectionId: "domain_ownership_collection",
				mpesaPaymentsCollectionId: "mpesa_payments_collection",
				commissionRecordsCollectionId: o.env.NEXT_PUBLIC_APPWRITE_COMMISSION_RECORDS_COLLECTION_ID || "commission_records",
				promoCodesCollectionId: "promo_codes",
				demoToRealConversionsCollectionId: o.env.NEXT_PUBLIC_APPWRITE_DEMO_REAL_CONVERSIONS_COLLECTION_ID || "demo_real_conversions",
				announcementsCollectionId: "announcements_collection",
				xmlBotsCollectionId: "xml_bots_collection",
				authorizedUsersCollectionId: "authorized_users_collection",
				failedPurchasesCollectionId: "failed_purchases_collection",
				flutterwavePaymentsCollectionId: "flutterwave_payments",
				platformUpdatesCollectionId: "platform_updates_collection",
				userUpdateReadsCollectionId: "user_update_reads_collection",
				pushSubscriptionsCollectionId: "push_subscriptions_collection",
				botStoresCollectionId: "bot_stores_collection",
				signalStrategiesCollectionId: o.env.NEXT_PUBLIC_APPWRITE_SIGNAL_STRATEGIES_COLLECTION_ID || "signal_strategies_collection",
				strategyCodeCollectionId: o.env.NEXT_PUBLIC_APPWRITE_STRATEGY_CODE_COLLECTION_ID || "strategy_code_collection",
				executionLogsCollectionId: o.env.NEXT_PUBLIC_APPWRITE_EXECUTION_LOGS_COLLECTION_ID || "strategy_execution_logs_collection",
				botRequestsCollectionId: "bot_requests_collection",
				developerTasksCollectionId: "developer_tasks_collection",
				storageBucketId: "site_assets_bucket",
				xmlBotsBucketId: "xml_bots_bucket"
			};
			o.env.APPWRITE_API_KEY, o.env.VAPID_PRIVATE_KEY, o.env.VAPID_SUBJECT;
			let n = {
				wsEndpoint: "wss://ws.derivws.com/websockets/v3",
				appId: "1089"
			}
		},
		85058: function(e, t, r) {
			r.d(t, {
				$: function() {
					return l
				}
			});
			var o = r(85658),
				i = r(49095),
				n = r(11409),
				s = r(37892);
			class a {
				async createUpdate(e, t) {
					try {
						let r = new Date().toISOString();
						return await n.U.createDocument(s.qA.platformUpdatesCollectionId, {
							title: t.title,
							content: t.content,
							category: t.category,
							imageUrl: t.imageUrl || null,
							videoUrl: t.videoUrl || null,
							isPublished: t.isPublished,
							isPinned: t.isPinned,
							publishedAt: t.publishedAt,
							createdAt: r,
							updatedAt: r,
							createdBy: e
						}, o.ID.unique())
					} catch (e) {
						throw console.error("Create platform update error:", e), e
					}
				}
				async getUpdate(e) {
					try {
						return await i.UA.getDocument(s.qA.databaseId, s.qA.platformUpdatesCollectionId, e)
					} catch (e) {
						throw console.error("Get platform update error:", e), e
					}
				}
				async getAllUpdates() {
					try {
						return (await i.UA.listDocuments(s.qA.databaseId, s.qA.platformUpdatesCollectionId, [o.AE.orderDesc("publishedAt"), o.AE.limit(100)])).documents
					} catch (e) {
						throw console.error("Get all platform updates error:", e), e
					}
				}
				async getPublishedUpdates() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50;
					try {
						let t = new Date().toISOString();
						return (await i.UA.listDocuments(s.qA.databaseId, s.qA.platformUpdatesCollectionId, [o.AE.equal("isPublished", !0), o.AE.lessThanEqual("publishedAt", t), o.AE.orderDesc("isPinned"), o.AE.orderDesc("publishedAt"), o.AE.limit(e)])).documents
					} catch (e) {
						throw console.error("Get published platform updates error:", e), e
					}
				}
				async updateUpdate(e) {
					try {
						let {
							$id: t,
							...r
						} = e, o = new Date().toISOString();
						return await n.U.updateDocument(s.qA.platformUpdatesCollectionId, t, {
							...r,
							updatedAt: o
						})
					} catch (e) {
						throw console.error("Update platform update error:", e), e
					}
				}
				async deleteUpdate(e) {
					try {
						await n.U.deleteDocument(s.qA.platformUpdatesCollectionId, e)
					} catch (e) {
						throw console.error("Delete platform update error:", e), e
					}
				}
				async markAsRead(e, t) {
					try {
						let r = await this.getUserReadStatus(e, t);
						if (r) return r;
						let i = new Date().toISOString();
						return await n.U.createDocument(s.qA.userUpdateReadsCollectionId, {
							userId: e,
							updateId: t,
							readAt: i
						}, o.ID.unique())
					} catch (e) {
						throw console.error("Mark update as read error:", e), e
					}
				}
				async markAllAsRead(e) {
					try {
						let t = await this.getPublishedUpdates(),
							r = await this.getUserReadUpdates(e),
							i = new Set(r.map(e => e.updateId)),
							a = new Date().toISOString(),
							l = t.filter(e => !i.has(e.$id)).map(t => n.U.createDocument(s.qA.userUpdateReadsCollectionId, {
								userId: e,
								updateId: t.$id,
								readAt: a
							}, o.ID.unique()));
						await Promise.all(l)
					} catch (e) {
						throw console.error("Mark all updates as read error:", e), e
					}
				}
				async getUserReadStatus(e, t) {
					try {
						let r = await n.U.listDocuments(s.qA.userUpdateReadsCollectionId, [o.AE.equal("userId", e), o.AE.equal("updateId", t), o.AE.limit(1)]);
						return r.documents.length > 0 ? r.documents[0] : null
					} catch (e) {
						return console.error("Get user read status error:", e), null
					}
				}
				async getUserReadUpdates(e) {
					try {
						return (await n.U.listDocuments(s.qA.userUpdateReadsCollectionId, [o.AE.equal("userId", e), o.AE.limit(1e3)])).documents
					} catch (e) {
						return console.error("Get user read updates error:", e), []
					}
				}
				async getUnreadCount(e) {
					try {
						let [t, r] = await Promise.all([this.getPublishedUpdates(), this.getUserReadUpdates(e)]), o = new Set(r.map(e => e.updateId)), i = t.filter(e => !o.has(e.$id));
						return {
							count: i.length,
							latestUpdate: i[0] || void 0
						}
					} catch (e) {
						return console.error("Get unread count error:", e), {
							count: 0
						}
					}
				}
			}
			let l = new a
		},
		33136: function(e, t, r) {
			r.d(t, {
				h: function() {
					return l
				}
			});
			var o = r(37892),
				i = r(11409),
				n = r(85658);
			let s = "BJ_hEzEufwHoRP-7y5Fzed0RIl0TC7uMY-hGRgFfS8eJMSvxPoAdaG_Aw-8DUiKirywViN_N0qfvnwOf_uFhwz8";
			class a {
				isSupported() {
					return "serviceWorker" in navigator && "PushManager" in window
				}
				getPermissionStatus() {
					return this.isSupported() ? Notification.permission : "unsupported"
				}
				async requestPermission() {
					if (!this.isSupported()) throw Error("Push notifications are not supported");
					return await Notification.requestPermission()
				}
				async registerServiceWorker() {
					if (!this.isSupported()) throw Error("Service workers are not supported");
					let e = await navigator.serviceWorker.register("/sw.js", {
						scope: "/"
					});
					return await navigator.serviceWorker.ready, e
				}
				urlBase64ToUint8Array(e) {
					let t = "=".repeat((4 - e.length % 4) % 4),
						r = (e + t).replace(/-/g, "+").replace(/_/g, "/"),
						o = window.atob(r),
						i = new Uint8Array(new ArrayBuffer(o.length));
					for (let e = 0; e < o.length; ++e) i[e] = o.charCodeAt(e);
					return i
				}
				async subscribe(e) {
					var t, r;
					if (!this.isSupported()) throw Error("Push notifications are not supported");
					if ("granted" !== await this.requestPermission()) throw Error("Notification permission denied");
					let a = await this.registerServiceWorker(),
						l = await a.pushManager.getSubscription();
					if (!l) {
						if (!s) throw Error("VAPID public key not configured");
						l = await a.pushManager.subscribe({
							userVisibleOnly: !0,
							applicationServerKey: this.urlBase64ToUint8Array(s)
						})
					}
					let d = l.toJSON(),
						c = l.endpoint,
						u = (null === (t = d.keys) || void 0 === t ? void 0 : t.p256dh) || "",
						h = (null === (r = d.keys) || void 0 === r ? void 0 : r.auth) || "";
					if (!u || !h) throw Error("Failed to get subscription keys");
					try {
						let t = await i.U.listDocuments(o.qA.pushSubscriptionsCollectionId, [n.AE.equal("endpoint", c), n.AE.equal("userId", e)]);
						if (t.documents.length > 0) {
							let e = t.documents[0];
							return await i.U.updateDocument(o.qA.pushSubscriptionsCollectionId, e.$id, {
								p256dh: u,
								auth: h,
								isActive: !0,
								userAgent: navigator.userAgent,
								updatedAt: new Date().toISOString()
							})
						}
					} catch (e) {
						console.error("Error checking existing subscription:", e)
					}
					let p = new Date().toISOString();
					return await i.U.createDocument(o.qA.pushSubscriptionsCollectionId, {
						userId: e,
						endpoint: c,
						p256dh: u,
						auth: h,
						userAgent: navigator.userAgent,
						isActive: !0,
						createdAt: p
					}, n.ID.unique())
				}
				async unsubscribe(e) {
					if (this.isSupported()) try {
						let t = await navigator.serviceWorker.ready,
							r = await t.pushManager.getSubscription();
						if (r) {
							let t = r.endpoint;
							for (let s of (await r.unsubscribe(), (await i.U.listDocuments(o.qA.pushSubscriptionsCollectionId, [n.AE.equal("endpoint", t), n.AE.equal("userId", e)])).documents)) await i.U.updateDocument(o.qA.pushSubscriptionsCollectionId, s.$id, {
								isActive: !1,
								updatedAt: new Date().toISOString()
							})
						}
					} catch (e) {
						throw console.error("Error unsubscribing:", e), e
					}
				}
				async isSubscribed(e) {
					if (!this.isSupported()) return !1;
					try {
						let t = await navigator.serviceWorker.ready,
							r = await t.pushManager.getSubscription();
						if (!r) return !1;
						return (await i.U.listDocuments(o.qA.pushSubscriptionsCollectionId, [n.AE.equal("endpoint", r.endpoint), n.AE.equal("userId", e), n.AE.equal("isActive", !0)])).documents.length > 0
					} catch (e) {
						return console.error("Error checking subscription:", e), !1
					}
				}
				async getUserSubscriptions(e) {
					try {
						return (await i.U.listDocuments(o.qA.pushSubscriptionsCollectionId, [n.AE.equal("userId", e), n.AE.equal("isActive", !0)])).documents
					} catch (e) {
						return console.error("Error getting user subscriptions:", e), []
					}
				}
			}
			let l = new a
		},
		11409: function(e, t, r) {
			r.d(t, {
				U: function() {
					return i
				}
			});
			class o {
				async createDocument(e, t, r) {
					let o = await fetch("/api/db", {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								collectionId: e,
								data: t,
								documentId: r
							}),
							credentials: "include"
						}),
						i = await o.json();
					if (!o.ok) throw Error(i.error || "Failed to create document");
					return i.document
				}
				async getDocument(e, t) {
					let r = new URLSearchParams({
							collectionId: e,
							documentId: t
						}),
						o = await fetch("/api/db?".concat(r), {
							method: "GET",
							credentials: "include"
						}),
						i = await o.json();
					if (!o.ok) throw Error(i.error || "Failed to get document");
					return i.document
				}
				async listDocuments(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
						r = new URLSearchParams({
							collectionId: e,
							queries: JSON.stringify(t)
						}),
						o = await fetch("/api/db?".concat(r), {
							method: "GET",
							credentials: "include"
						}),
						i = await o.json();
					if (!o.ok) throw Error(i.error || "Failed to list documents");
					return {
						documents: i.documents,
						total: i.total
					}
				}
				async updateDocument(e, t, r) {
					let o = await fetch("/api/db", {
							method: "PATCH",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								collectionId: e,
								documentId: t,
								data: r
							}),
							credentials: "include"
						}),
						i = await o.json();
					if (!o.ok) throw Error(i.error || "Failed to update document");
					return i.document
				}
				async deleteDocument(e, t) {
					let r = await fetch("/api/db", {
							method: "DELETE",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								collectionId: e,
								documentId: t
							}),
							credentials: "include"
						}),
						o = await r.json();
					if (!r.ok) throw Error(o.error || "Failed to delete document")
				}
			}
			let i = new o
		},
		47984: function(e, t, r) {
			r.d(t, {
				cn: function() {
					return n
				}
			});
			var o = r(61994),
				i = r(53335);

			function n() {
				for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				return (0, i.m6)((0, o.W)(t))
			}
		}
	}
]);