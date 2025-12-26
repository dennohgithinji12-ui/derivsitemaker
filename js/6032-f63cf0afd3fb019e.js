"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[6032], {
		66070: function(e, t, o) {
			o.d(t, {
				Ol: function() {
					return s
				},
				SZ: function() {
					return d
				},
				Zb: function() {
					return i
				},
				aY: function() {
					return l
				},
				eW: function() {
					return u
				},
				ll: function() {
					return c
				}
			});
			var r = o(57437),
				n = o(2265),
				a = o(47984);
			let i = n.forwardRef((e, t) => {
				let {
					className: o,
					...n
				} = e;
				return (0, r.jsx)("div", {
					ref: t,
					className: (0, a.cn)("rounded-2xl border border-gray-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl text-gray-950 dark:text-gray-50 shadow-xl shadow-black/5 dark:shadow-black/20 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5", o),
					...n
				})
			});
			i.displayName = "Card";
			let s = n.forwardRef((e, t) => {
				let {
					className: o,
					...n
				} = e;
				return (0, r.jsx)("div", {
					ref: t,
					className: (0, a.cn)("flex flex-col space-y-1.5 p-6", o),
					...n
				})
			});
			s.displayName = "CardHeader";
			let c = n.forwardRef((e, t) => {
				let {
					className: o,
					...n
				} = e;
				return (0, r.jsx)("h3", {
					ref: t,
					className: (0, a.cn)("text-2xl font-bold leading-none tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent", o),
					...n
				})
			});
			c.displayName = "CardTitle";
			let d = n.forwardRef((e, t) => {
				let {
					className: o,
					...n
				} = e;
				return (0, r.jsx)("p", {
					ref: t,
					className: (0, a.cn)("text-sm text-gray-500 dark:text-gray-400", o),
					...n
				})
			});
			d.displayName = "CardDescription";
			let l = n.forwardRef((e, t) => {
				let {
					className: o,
					...n
				} = e;
				return (0, r.jsx)("div", {
					ref: t,
					className: (0, a.cn)("p-6 pt-0", o),
					...n
				})
			});
			l.displayName = "CardContent";
			let u = n.forwardRef((e, t) => {
				let {
					className: o,
					...n
				} = e;
				return (0, r.jsx)("div", {
					ref: t,
					className: (0, a.cn)("flex items-center p-6 pt-0", o),
					...n
				})
			});
			u.displayName = "CardFooter"
		},
		37892: function(e, t, o) {
			o.d(t, {
				qA: function() {
					return n
				},
				y0: function() {
					return a
				}
			});
			var r = o(40257);
			let n = {
				endpoint: "https://fra.cloud.appwrite.io/v1",
				projectId: "67dd37e20034254eca59",
				databaseId: "platform_dashboard_db",
				sitesCollectionId: "sites_collection",
				deploymentsCollectionId: "deployments_collection",
				usersMetadataCollectionId: "users_metadata_collection",
				domainOwnershipCollectionId: "domain_ownership_collection",
				mpesaPaymentsCollectionId: "mpesa_payments_collection",
				commissionRecordsCollectionId: r.env.NEXT_PUBLIC_APPWRITE_COMMISSION_RECORDS_COLLECTION_ID || "commission_records",
				promoCodesCollectionId: "promo_codes",
				demoToRealConversionsCollectionId: r.env.NEXT_PUBLIC_APPWRITE_DEMO_REAL_CONVERSIONS_COLLECTION_ID || "demo_real_conversions",
				announcementsCollectionId: "announcements_collection",
				xmlBotsCollectionId: "xml_bots_collection",
				authorizedUsersCollectionId: "authorized_users_collection",
				failedPurchasesCollectionId: "failed_purchases_collection",
				flutterwavePaymentsCollectionId: "flutterwave_payments",
				platformUpdatesCollectionId: "platform_updates_collection",
				userUpdateReadsCollectionId: "user_update_reads_collection",
				pushSubscriptionsCollectionId: "push_subscriptions_collection",
				botStoresCollectionId: "bot_stores_collection",
				signalStrategiesCollectionId: r.env.NEXT_PUBLIC_APPWRITE_SIGNAL_STRATEGIES_COLLECTION_ID || "signal_strategies_collection",
				strategyCodeCollectionId: r.env.NEXT_PUBLIC_APPWRITE_STRATEGY_CODE_COLLECTION_ID || "strategy_code_collection",
				executionLogsCollectionId: r.env.NEXT_PUBLIC_APPWRITE_EXECUTION_LOGS_COLLECTION_ID || "strategy_execution_logs_collection",
				botRequestsCollectionId: "bot_requests_collection",
				developerTasksCollectionId: "developer_tasks_collection",
				storageBucketId: "site_assets_bucket",
				xmlBotsBucketId: "xml_bots_bucket"
			};
			r.env.APPWRITE_API_KEY, r.env.VAPID_PRIVATE_KEY, r.env.VAPID_SUBJECT;
			let a = {
				wsEndpoint: "wss://ws.derivws.com/websockets/v3",
				appId: "1089"
			}
		},
		54280: function(e, t, o) {
			o.d(t, {
				R: function() {
					return s
				}
			});
			var r = o(85658),
				n = o(11409),
				a = o(37892);
			class i {
				async createSite(e, t, o) {
					try {
						let r = await fetch("/api/sites", {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify({
									userId: e,
									domain: t,
									config: o
								}),
								credentials: "include"
							}),
							n = await r.json();
						if (!r.ok) throw Error(n.error || "Failed to create site");
						return n.site
					} catch (e) {
						throw console.error("Create site error:", e), e
					}
				}
				async getSite(e) {
					try {
						let t = await n.U.getDocument(a.qA.sitesCollectionId, e);
						return {
							...t,
							config: "string" == typeof t.config ? JSON.parse(t.config) : t.config,
							domainConfig: "string" == typeof t.domainConfig ? JSON.parse(t.domainConfig) : t.domainConfig
						}
					} catch (e) {
						throw console.error("Get site error:", e), e
					}
				}
				async getUserSites(e) {
					try {
						let t = await fetch("/api/sites?userId=".concat(encodeURIComponent(e)), {
								method: "GET",
								credentials: "include"
							}),
							o = await t.json();
						if (!t.ok) throw Error(o.error || "Failed to get sites");
						return o.sites
					} catch (e) {
						throw console.error("Get user sites error:", e), e
					}
				}
				async getAllSites() {
					try {
						return (await n.U.listDocuments(a.qA.sitesCollectionId, [r.AE.orderDesc("createdAt"), r.AE.limit(1e3)])).documents.map(e => ({
							...e,
							config: "string" == typeof e.config ? JSON.parse(e.config) : e.config
						}))
					} catch (e) {
						throw console.error("Get all sites error:", e), e
					}
				}
				async getDeployedSites() {
					try {
						return (await n.U.listDocuments(a.qA.sitesCollectionId, [r.AE.equal("status", "deployed"), r.AE.orderDesc("createdAt")])).documents.map(e => ({
							...e,
							config: "string" == typeof e.config ? JSON.parse(e.config) : e.config
						}))
					} catch (e) {
						throw console.error("Get deployed sites error:", e), e
					}
				}
				async updateSite(e, t) {
					try {
						let o = {
							...t,
							updatedAt: new Date().toISOString()
						};
						t.config && (o.config = JSON.stringify(t.config)), t.domainConfig && (o.domainConfig = JSON.stringify(t.domainConfig));
						let r = await n.U.updateDocument(a.qA.sitesCollectionId, e, o);
						return {
							...r,
							config: "string" == typeof r.config ? JSON.parse(r.config) : r.config,
							domainConfig: "string" == typeof r.domainConfig ? JSON.parse(r.domainConfig) : r.domainConfig
						}
					} catch (e) {
						throw console.error("Update site error:", e), e
					}
				}
				async updateSiteTabStyle(e, t) {
					try {
						let o = {
							...(await this.getSite(e)).config,
							tabStyle: t
						};
						return await this.updateSite(e, {
							config: o
						})
					} catch (e) {
						throw console.error("Update site tab style error:", e), e
					}
				}
				async updateSiteAnalysisToolType(e, t) {
					try {
						let o = {
							...(await this.getSite(e)).config,
							analysisToolType: t
						};
						return await this.updateSite(e, {
							config: o
						})
					} catch (e) {
						throw console.error("Update site analysis tool type error:", e), e
					}
				}
				async deleteSite(e) {
					try {
						await n.U.deleteDocument(a.qA.sitesCollectionId, e)
					} catch (e) {
						throw console.error("Delete site error:", e), e
					}
				}
				async isDomainTaken(e, t) {
					try {
						let o = await n.U.listDocuments(a.qA.sitesCollectionId, [r.AE.equal("domain", e)]);
						if (t) return o.documents.some(e => e.$id !== t);
						return o.documents.length > 0
					} catch (e) {
						return console.error("Check domain error:", e), !1
					}
				}
				async createDeployment(e, t, o) {
					try {
						if (!e) throw Error("siteId is required");
						if (!t) throw Error("userId is required");
						if (!o) throw Error("triggeredBy is required");
						let r = new Date().toISOString();
						return await n.U.createDocument(a.qA.deploymentsCollectionId, {
							siteId: e,
							userId: t,
							status: "queued",
							triggeredBy: o,
							startedAt: r
						})
					} catch (e) {
						throw console.error("Create deployment error:", e), e
					}
				}
				async getDeployment(e) {
					try {
						return await n.U.getDocument(a.qA.deploymentsCollectionId, e)
					} catch (e) {
						throw console.error("Get deployment error:", e), e
					}
				}
				async getSiteDeployments(e) {
					try {
						return (await n.U.listDocuments(a.qA.deploymentsCollectionId, [r.AE.equal("siteId", e), r.AE.orderDesc("startedAt"), r.AE.limit(50)])).documents
					} catch (e) {
						throw console.error("Get site deployments error:", e), e
					}
				}
				async getUserDeployments(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
					try {
						return (await n.U.listDocuments(a.qA.deploymentsCollectionId, [r.AE.equal("userId", e), r.AE.orderDesc("startedAt"), r.AE.limit(t)])).documents
					} catch (e) {
						throw console.error("Get user deployments error:", e), e
					}
				}
				async updateDeployment(e, t) {
					try {
						let o = {
							...t
						};
						if (t.completedAt) {
							let r = await this.getDeployment(e),
								n = new Date(r.startedAt).getTime(),
								a = new Date(t.completedAt).getTime();
							o.duration = a - n
						}
						return await n.U.updateDocument(a.qA.deploymentsCollectionId, e, o)
					} catch (e) {
						throw console.error("Update deployment error:", e), e
					}
				}
				async createUserMetadata(e, t, o) {
					try {
						return await n.U.createDocument(a.qA.usersMetadataCollectionId, {
							email: t,
							displayName: o,
							role: "user",
							sitesCount: 0,
							deploymentsCount: 0,
							quotaLimit: 5,
							createdAt: new Date().toISOString()
						}, e)
					} catch (e) {
						throw console.error("Create user metadata error:", e), e
					}
				}
				async getUserMetadata(e) {
					try {
						return await n.U.getDocument(a.qA.usersMetadataCollectionId, e)
					} catch (e) {
						return null
					}
				}
				async updateUserMetadata(e, t) {
					try {
						return await n.U.updateDocument(a.qA.usersMetadataCollectionId, e, t)
					} catch (e) {
						throw console.error("Update user metadata error:", e), e
					}
				}
				async incrementSitesCount(e) {
					try {
						let t = await this.getUserMetadata(e);
						t && await this.updateUserMetadata(e, {
							sitesCount: t.sitesCount + 1
						})
					} catch (e) {
						console.error("Increment sites count error:", e)
					}
				}
				async incrementDeploymentsCount(e) {
					try {
						let t = await this.getUserMetadata(e);
						t && await this.updateUserMetadata(e, {
							deploymentsCount: t.deploymentsCount + 1
						})
					} catch (e) {
						console.error("Increment deployments count error:", e)
					}
				}
				async linkDerivAccount(e, t, o) {
					try {
						if (await this.getUserMetadata(e)) return await this.updateUserMetadata(e, {
							derivToken: o.token,
							derivFullname: o.fullname,
							derivCountry: o.country,
							derivUserId: o.userId,
							derivLoginid: o.loginid,
							derivScopes: o.scopes
						});
						return await n.U.createDocument(a.qA.usersMetadataCollectionId, {
							email: t,
							displayName: o.fullname,
							role: "user",
							sitesCount: 0,
							deploymentsCount: 0,
							quotaLimit: 5,
							createdAt: new Date().toISOString(),
							derivToken: o.token,
							derivFullname: o.fullname,
							derivCountry: o.country,
							derivUserId: o.userId,
							derivLoginid: o.loginid,
							derivScopes: o.scopes
						}, e)
					} catch (e) {
						throw console.error("Link Deriv account error:", e), e
					}
				}
				async unlinkDerivAccount(e) {
					try {
						return await this.updateUserMetadata(e, {
							derivToken: ""
						})
					} catch (e) {
						throw console.error("Unlink Deriv account error:", e), e
					}
				}
				async hasDerivAccount(e) {
					try {
						let t = await this.getUserMetadata(e);
						return !!(null == t ? void 0 : t.derivToken) && t.derivToken.length > 0
					} catch (e) {
						return !1
					}
				}
				async getUserMetadataByEmail(e) {
					try {
						let t = await n.U.listDocuments(a.qA.usersMetadataCollectionId, [r.AE.equal("email", e)]);
						if (t.documents.length > 0) return t.documents[0];
						return null
					} catch (e) {
						return console.error("Get user metadata by email error:", e), null
					}
				}
				async upsertCommissionRecord(e) {
					try {
						let t = await n.U.listDocuments(a.qA.commissionRecordsCollectionId, [r.AE.equal("siteId", e.siteId), r.AE.equal("month", e.month)]),
							o = new Date().toISOString();
						if (t.documents.length > 0) return await n.U.updateDocument(a.qA.commissionRecordsCollectionId, t.documents[0].$id, {
							totalCommission: e.totalCommission,
							partnershipShare: e.partnershipShare,
							derivPaymentReceived: e.derivPaymentReceived,
							derivPaymentAmount: e.derivPaymentAmount,
							lastSyncedAt: o
						});
						return await n.U.createDocument(a.qA.commissionRecordsCollectionId, {
							siteId: e.siteId,
							userId: e.userId,
							siteName: e.siteName,
							siteDomain: e.siteDomain,
							appId: e.appId,
							month: e.month,
							totalCommission: e.totalCommission || 0,
							partnershipShare: e.partnershipShare || 0,
							paymentStatus: "pending",
							derivPaymentReceived: e.derivPaymentReceived || !1,
							derivPaymentAmount: e.derivPaymentAmount || 0,
							lastSyncedAt: o
						}, r.ID.unique())
					} catch (e) {
						throw console.error("Upsert commission record error:", e), e
					}
				}
				async getAllCommissionRecords() {
					try {
						return (await n.U.listDocuments(a.qA.commissionRecordsCollectionId, [r.AE.orderDesc("month"), r.AE.limit(1e3)])).documents
					} catch (e) {
						throw console.error("Get all commission records error:", e), e
					}
				}
				async getCommissionRecordsByMonth(e) {
					try {
						return (await n.U.listDocuments(a.qA.commissionRecordsCollectionId, [r.AE.equal("month", e)])).documents
					} catch (e) {
						throw console.error("Get commission records by month error:", e), e
					}
				}
				async getCommissionRecordsByStatus(e) {
					try {
						return (await n.U.listDocuments(a.qA.commissionRecordsCollectionId, [r.AE.equal("paymentStatus", e), r.AE.orderDesc("month")])).documents
					} catch (e) {
						throw console.error("Get commission records by status error:", e), e
					}
				}
				async updateCommissionPaymentStatus(e, t, o, r, i) {
					try {
						let s = {
							paymentStatus: t
						};
						return "paid" === t && (s.paymentDate = o || new Date().toISOString(), r && (s.paymentReference = r)), i && (s.notes = i), await n.U.updateDocument(a.qA.commissionRecordsCollectionId, e, s)
					} catch (e) {
						throw console.error("Update commission payment status error:", e), e
					}
				}
				async getAllUsersMetadata() {
					try {
						return (await n.U.listDocuments(a.qA.usersMetadataCollectionId, [r.AE.limit(1e3)])).documents
					} catch (e) {
						throw console.error("Get all users metadata error:", e), e
					}
				}
				async createDemoToRealConversion(e, t) {
					try {
						let o = new Date().toISOString();
						return await n.U.createDocument(a.qA.demoToRealConversionsCollectionId, {
							vrtcId: t.vrtcId,
							crId: t.crId,
							domains: t.domains,
							balanceDeduction: t.balanceDeduction,
							isActive: t.isActive,
							description: t.description || "",
							createdAt: o,
							updatedAt: o,
							createdBy: e
						}, r.ID.unique())
					} catch (e) {
						throw console.error("Create demo-to-real conversion error:", e), e
					}
				}
				async getAllDemoToRealConversions() {
					try {
						return (await n.U.listDocuments(a.qA.demoToRealConversionsCollectionId, [r.AE.orderDesc("createdAt"), r.AE.limit(100)])).documents
					} catch (e) {
						throw console.error("Get all demo-to-real conversions error:", e), e
					}
				}
				async getDemoToRealConversion(e) {
					try {
						return await n.U.getDocument(a.qA.demoToRealConversionsCollectionId, e)
					} catch (e) {
						throw console.error("Get demo-to-real conversion error:", e), e
					}
				}
				async getDemoToRealConversionForDomain(e) {
					try {
						let t = await n.U.listDocuments(a.qA.demoToRealConversionsCollectionId, [r.AE.equal("isActive", !0), r.AE.contains("domains", [e]), r.AE.limit(1)]);
						return t.documents.length > 0 ? t.documents[0] : null
					} catch (e) {
						return console.error("Get demo-to-real conversion for domain error:", e), null
					}
				}
				async updateDemoToRealConversion(e, t) {
					try {
						let o = {
							...t,
							updatedAt: new Date().toISOString()
						};
						return await n.U.updateDocument(a.qA.demoToRealConversionsCollectionId, e, o)
					} catch (e) {
						throw console.error("Update demo-to-real conversion error:", e), e
					}
				}
				async deleteDemoToRealConversion(e) {
					try {
						await n.U.deleteDocument(a.qA.demoToRealConversionsCollectionId, e)
					} catch (e) {
						throw console.error("Delete demo-to-real conversion error:", e), e
					}
				}
				async toggleDemoToRealConversionStatus(e, t) {
					try {
						return await n.U.updateDocument(a.qA.demoToRealConversionsCollectionId, e, {
							isActive: t,
							updatedAt: new Date().toISOString()
						})
					} catch (e) {
						throw console.error("Toggle demo-to-real conversion status error:", e), e
					}
				}
				async addAuthorizedUser(e, t) {
					try {
						let o = new Date().toISOString(),
							i = await this.getAuthorizedUserByLoginId(e, t.loginid);
						if (i) return await n.U.updateDocument(a.qA.authorizedUsersCollectionId, i.$id, {
							derivToken: t.token,
							derivFullname: t.fullname,
							derivEmail: t.email || "",
							derivCountry: t.country || "",
							derivScopes: t.scopes,
							tokenLastValidated: o,
							tokenStatus: "valid",
							updatedAt: o
						});
						return await n.U.createDocument(a.qA.authorizedUsersCollectionId, {
							ownerId: e,
							derivLoginid: t.loginid,
							derivToken: t.token,
							derivFullname: t.fullname,
							derivEmail: t.email || "",
							derivCountry: t.country || "",
							derivUserId: t.userId,
							derivScopes: t.scopes,
							tokenLastValidated: o,
							tokenStatus: "valid",
							sitesCreated: 0,
							createdAt: o,
							updatedAt: o
						}, r.ID.unique())
					} catch (e) {
						throw console.error("Add authorized user error:", e), e
					}
				}
				async getAuthorizedUsers(e) {
					try {
						return (await n.U.listDocuments(a.qA.authorizedUsersCollectionId, [r.AE.equal("ownerId", e), r.AE.orderDesc("createdAt")])).documents
					} catch (e) {
						return console.error("Get authorized users error:", e), []
					}
				}
				async getAuthorizedUser(e) {
					try {
						return await n.U.getDocument(a.qA.authorizedUsersCollectionId, e)
					} catch (e) {
						return console.error("Get authorized user error:", e), null
					}
				}
				async getAuthorizedUserByLoginId(e, t) {
					try {
						let o = await n.U.listDocuments(a.qA.authorizedUsersCollectionId, [r.AE.equal("ownerId", e), r.AE.equal("derivLoginid", t)]);
						return o.documents.length > 0 ? o.documents[0] : null
					} catch (e) {
						return console.error("Get authorized user by login ID error:", e), null
					}
				}
				async updateAuthorizedUserTokenStatus(e, t, o) {
					try {
						let r = new Date().toISOString(),
							i = {
								tokenStatus: t,
								tokenLastValidated: r,
								updatedAt: r
							};
						return o && (i.derivToken = o), await n.U.updateDocument(a.qA.authorizedUsersCollectionId, e, i)
					} catch (e) {
						throw console.error("Update authorized user token status error:", e), e
					}
				}
				async incrementAuthorizedUserSitesCount(e) {
					try {
						let t = await this.getAuthorizedUser(e);
						t && await n.U.updateDocument(a.qA.authorizedUsersCollectionId, e, {
							sitesCreated: (t.sitesCreated || 0) + 1,
							updatedAt: new Date().toISOString()
						})
					} catch (e) {
						console.error("Increment authorized user sites count error:", e)
					}
				}
				async deleteAuthorizedUser(e) {
					try {
						await n.U.deleteDocument(a.qA.authorizedUsersCollectionId, e)
					} catch (e) {
						throw console.error("Delete authorized user error:", e), e
					}
				}
				async isOwnDerivAccount(e, t) {
					try {
						let o = await this.getUserMetadata(e);
						if (!(null == o ? void 0 : o.derivLoginid)) return !1;
						return o.derivLoginid === t
					} catch (e) {
						return console.error("Check own Deriv account error:", e), !1
					}
				}
			}
			let s = new i
		},
		11409: function(e, t, o) {
			o.d(t, {
				U: function() {
					return n
				}
			});
			class r {
				async createDocument(e, t, o) {
					let r = await fetch("/api/db", {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								collectionId: e,
								data: t,
								documentId: o
							}),
							credentials: "include"
						}),
						n = await r.json();
					if (!r.ok) throw Error(n.error || "Failed to create document");
					return n.document
				}
				async getDocument(e, t) {
					let o = new URLSearchParams({
							collectionId: e,
							documentId: t
						}),
						r = await fetch("/api/db?".concat(o), {
							method: "GET",
							credentials: "include"
						}),
						n = await r.json();
					if (!r.ok) throw Error(n.error || "Failed to get document");
					return n.document
				}
				async listDocuments(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
						o = new URLSearchParams({
							collectionId: e,
							queries: JSON.stringify(t)
						}),
						r = await fetch("/api/db?".concat(o), {
							method: "GET",
							credentials: "include"
						}),
						n = await r.json();
					if (!r.ok) throw Error(n.error || "Failed to list documents");
					return {
						documents: n.documents,
						total: n.total
					}
				}
				async updateDocument(e, t, o) {
					let r = await fetch("/api/db", {
							method: "PATCH",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								collectionId: e,
								documentId: t,
								data: o
							}),
							credentials: "include"
						}),
						n = await r.json();
					if (!r.ok) throw Error(n.error || "Failed to update document");
					return n.document
				}
				async deleteDocument(e, t) {
					let o = await fetch("/api/db", {
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
						r = await o.json();
					if (!o.ok) throw Error(r.error || "Failed to delete document")
				}
			}
			let n = new r
		},
		47984: function(e, t, o) {
			o.d(t, {
				cn: function() {
					return a
				}
			});
			var r = o(61994),
				n = o(53335);

			function a() {
				for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
				return (0, n.m6)((0, r.W)(t))
			}
		}
	}
]);