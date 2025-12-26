"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8890], {
		85658: function(e, t, i) {
			var n, o, r, a, s, c, l, d, u, p, h, f, v, g, w, m, y, b, I;

			function M(e, t, i, n) {
				return new(i || (i = Promise))(function(o, r) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							c(n.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function c(e) {
						var t;
						e.done ? o(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
							e(t)
						})).then(a, s)
					}
					c((n = n.apply(e, t || [])).next())
				})
			}
			i.d(t, {
				AE: function() {
					return k
				},
				FI: function() {
					return U
				},
				ID: function() {
					return E
				},
				KU: function() {
					return j
				},
				Ke: function() {
					return A
				},
				Lg: function() {
					return L
				},
				mR: function() {
					return R
				}
			});
			class k {
				constructor(e, t, i) {
					this.method = e, this.attribute = t, void 0 !== i && (Array.isArray(i) ? this.values = i : this.values = [i])
				}
				toString() {
					return JSON.stringify({
						method: this.method,
						attribute: this.attribute,
						values: this.values
					})
				}
			}
			k.equal = (e, t) => new k("equal", e, t).toString(), k.notEqual = (e, t) => new k("notEqual", e, t).toString(), k.lessThan = (e, t) => new k("lessThan", e, t).toString(), k.lessThanEqual = (e, t) => new k("lessThanEqual", e, t).toString(), k.greaterThan = (e, t) => new k("greaterThan", e, t).toString(), k.greaterThanEqual = (e, t) => new k("greaterThanEqual", e, t).toString(), k.isNull = e => new k("isNull", e).toString(), k.isNotNull = e => new k("isNotNull", e).toString(), k.between = (e, t, i) => new k("between", e, [t, i]).toString(), k.startsWith = (e, t) => new k("startsWith", e, t).toString(), k.endsWith = (e, t) => new k("endsWith", e, t).toString(), k.select = e => new k("select", void 0, e).toString(), k.search = (e, t) => new k("search", e, t).toString(), k.orderDesc = e => new k("orderDesc", e).toString(), k.orderAsc = e => new k("orderAsc", e).toString(), k.cursorAfter = e => new k("cursorAfter", void 0, e).toString(), k.cursorBefore = e => new k("cursorBefore", void 0, e).toString(), k.limit = e => new k("limit", void 0, e).toString(), k.offset = e => new k("offset", void 0, e).toString(), k.contains = (e, t) => new k("contains", e, t).toString(), k.or = e => new k("or", void 0, e.map(e => JSON.parse(e))).toString(), k.and = e => new k("and", void 0, e.map(e => JSON.parse(e))).toString();
			class S extends Error {
				constructor(e, t = 0, i = "", n = "") {
					super(e), this.name = "AppwriteException", this.message = e, this.code = t, this.type = i, this.response = n
				}
			}
			class j {
				constructor() {
					this.config = {
						endpoint: "https://cloud.appwrite.io/v1",
						endpointRealtime: "",
						project: "",
						jwt: "",
						locale: "",
						session: ""
					}, this.headers = {
						"x-sdk-name": "Web",
						"x-sdk-platform": "client",
						"x-sdk-language": "web",
						"x-sdk-version": "16.1.0",
						"X-Appwrite-Response-Format": "1.6.0"
					}, this.realtime = {
						socket: void 0,
						timeout: void 0,
						heartbeat: void 0,
						url: "",
						channels: new Set,
						subscriptions: new Map,
						subscriptionsCounter: 0,
						reconnect: !0,
						reconnectAttempts: 0,
						lastMessage: void 0,
						connect: () => {
							clearTimeout(this.realtime.timeout), this.realtime.timeout = null == window ? void 0 : window.setTimeout(() => {
								this.realtime.createSocket()
							}, 50)
						},
						getTimeout: () => {
							switch (!0) {
								case this.realtime.reconnectAttempts < 5:
									return 1e3;
								case this.realtime.reconnectAttempts < 15:
									return 5e3;
								case this.realtime.reconnectAttempts < 100:
									return 1e4;
								default:
									return 6e4
							}
						},
						createHeartbeat: () => {
							this.realtime.heartbeat && clearTimeout(this.realtime.heartbeat), this.realtime.heartbeat = null == window ? void 0 : window.setInterval(() => {
								var e;
								null === (e = this.realtime.socket) || void 0 === e || e.send(JSON.stringify({
									type: "ping"
								}))
							}, 2e4)
						},
						createSocket: () => {
							var e, t, i;
							if (this.realtime.channels.size < 1) {
								this.realtime.reconnect = !1, null === (e = this.realtime.socket) || void 0 === e || e.close();
								return
							}
							let n = new URLSearchParams;
							n.set("project", this.config.project), this.realtime.channels.forEach(e => {
								n.append("channels[]", e)
							});
							let o = this.config.endpointRealtime + "/realtime?" + n.toString();
							(o !== this.realtime.url || !this.realtime.socket || (null === (t = this.realtime.socket) || void 0 === t ? void 0 : t.readyState) > WebSocket.OPEN) && (this.realtime.socket && (null === (i = this.realtime.socket) || void 0 === i ? void 0 : i.readyState) < WebSocket.CLOSING && (this.realtime.reconnect = !1, this.realtime.socket.close()), this.realtime.url = o, this.realtime.socket = new WebSocket(o), this.realtime.socket.addEventListener("message", this.realtime.onMessage), this.realtime.socket.addEventListener("open", e => {
								this.realtime.reconnectAttempts = 0, this.realtime.createHeartbeat()
							}), this.realtime.socket.addEventListener("close", e => {
								var t, i, n;
								if (!this.realtime.reconnect || (null === (i = null === (t = this.realtime) || void 0 === t ? void 0 : t.lastMessage) || void 0 === i ? void 0 : i.type) === "error" && 1008 === (null === (n = this.realtime) || void 0 === n ? void 0 : n.lastMessage.data).code) {
									this.realtime.reconnect = !0;
									return
								}
								let o = this.realtime.getTimeout();
								console.error(`Realtime got disconnected. Reconnect will be attempted in ${o/1e3} seconds.`, e.reason), setTimeout(() => {
									this.realtime.reconnectAttempts++, this.realtime.createSocket()
								}, o)
							}))
						},
						onMessage: e => {
							var t, i;
							try {
								let n = JSON.parse(e.data);
								switch (this.realtime.lastMessage = n, n.type) {
									case "connected":
										let o = JSON.parse(null !== (t = window.localStorage.getItem("cookieFallback")) && void 0 !== t ? t : "{}"),
											r = null == o ? void 0 : o[`a_session_${this.config.project}`],
											a = n.data;
										r && !a.user && (null === (i = this.realtime.socket) || void 0 === i || i.send(JSON.stringify({
											type: "authentication",
											data: {
												session: r
											}
										})));
										break;
									case "event":
										let s = n.data;
										if (null == s ? void 0 : s.channels) {
											if (!s.channels.some(e => this.realtime.channels.has(e))) return;
											this.realtime.subscriptions.forEach(e => {
												s.channels.some(t => e.channels.includes(t)) && setTimeout(() => e.callback(s))
											})
										}
										break;
									case "error":
										throw n.data
								}
							} catch (e) {
								console.error(e)
							}
						},
						cleanUp: e => {
							this.realtime.channels.forEach(t => {
								e.includes(t) && !Array.from(this.realtime.subscriptions).some(([e, i]) => i.channels.includes(t)) && this.realtime.channels.delete(t)
							})
						}
					}
				}
				setEndpoint(e) {
					return this.config.endpoint = e, this.config.endpointRealtime = this.config.endpointRealtime || this.config.endpoint.replace("https://", "wss://").replace("http://", "ws://"), this
				}
				setEndpointRealtime(e) {
					return this.config.endpointRealtime = e, this
				}
				setProject(e) {
					return this.headers["X-Appwrite-Project"] = e, this.config.project = e, this
				}
				setJWT(e) {
					return this.headers["X-Appwrite-JWT"] = e, this.config.jwt = e, this
				}
				setLocale(e) {
					return this.headers["X-Appwrite-Locale"] = e, this.config.locale = e, this
				}
				setSession(e) {
					return this.headers["X-Appwrite-Session"] = e, this.config.session = e, this
				}
				subscribe(e, t) {
					let i = "string" == typeof e ? [e] : e;
					i.forEach(e => this.realtime.channels.add(e));
					let n = this.realtime.subscriptionsCounter++;
					return this.realtime.subscriptions.set(n, {
						channels: i,
						callback: t
					}), this.realtime.connect(), () => {
						this.realtime.subscriptions.delete(n), this.realtime.cleanUp(i), this.realtime.connect()
					}
				}
				prepareRequest(e, t, i = {}, n = {}) {
					if (e = e.toUpperCase(), i = Object.assign({}, this.headers, i), "undefined" != typeof window && window.localStorage) {
						let e = window.localStorage.getItem("cookieFallback");
						e && (i["X-Fallback-Cookies"] = e)
					}
					let o = {
						method: e,
						headers: i,
						credentials: "include"
					};
					if ("GET" === e)
						for (let [e, i] of Object.entries(j.flatten(n))) t.searchParams.append(e, i);
					else switch (i["content-type"]) {
						case "application/json":
							o.body = JSON.stringify(n);
							break;
						case "multipart/form-data":
							let r = new FormData;
							for (let [e, t] of Object.entries(n))
								if (t instanceof File) r.append(e, t, t.name);
								else if (Array.isArray(t))
								for (let i of t) r.append(`${e}[]`, i);
							else r.append(e, t);
							o.body = r, delete i["content-type"]
					}
					return {
						uri: t.toString(),
						options: o
					}
				}
				chunkedUpload(e, t, i = {}, n = {}, o) {
					return M(this, void 0, void 0, function*() {
						let r = Object.values(n).find(e => e instanceof File);
						if (r.size <= j.CHUNK_SIZE) return yield this.call(e, t, i, n);
						let a = 0,
							s = null;
						for (; a < r.size;) {
							let c = a + j.CHUNK_SIZE;
							c >= r.size && (c = r.size), i["content-range"] = `bytes ${a}-${c-1}/${r.size}`;
							let l = r.slice(a, c),
								d = Object.assign(Object.assign({}, n), {
									file: new File([l], r.name)
								});
							s = yield this.call(e, t, i, d), o && "function" == typeof o && o({
								$id: s.$id,
								progress: Math.round(c / r.size * 100),
								sizeUploaded: c,
								chunksTotal: Math.ceil(r.size / j.CHUNK_SIZE),
								chunksUploaded: Math.ceil(c / j.CHUNK_SIZE)
							}), s && s.$id && (i["x-appwrite-id"] = s.$id), a = c
						}
						return s
					})
				}
				ping() {
					return M(this, void 0, void 0, function*() {
						return this.call("GET", new URL(this.config.endpoint + "/ping"))
					})
				}
				call(e, t, i = {}, n = {}, o = "json") {
					var r;
					return M(this, void 0, void 0, function*() {
						let {
							uri: a,
							options: s
						} = this.prepareRequest(e, t, i, n), c = null, l = yield fetch(a, s), d = l.headers.get("x-appwrite-warning");
						if (d && d.split(";").forEach(e => console.warn("Warning: " + e)), c = (null === (r = l.headers.get("content-type")) || void 0 === r ? void 0 : r.includes("application/json")) ? yield l.json(): "arrayBuffer" === o ? yield l.arrayBuffer(): {
								message: yield l.text()
							}, 400 <= l.status) throw new S(null == c ? void 0 : c.message, l.status, null == c ? void 0 : c.type, c);
						let u = l.headers.get("X-Fallback-Cookies");
						return "undefined" != typeof window && window.localStorage && u && (window.console.warn("Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."), window.localStorage.setItem("cookieFallback", u)), c
					})
				}
				static flatten(e, t = "") {
					let i = {};
					for (let [n, o] of Object.entries(e)) {
						let e = t ? t + "[" + n + "]" : n;
						Array.isArray(o) ? i = Object.assign(Object.assign({}, i), j.flatten(o, e)) : i[e] = o
					}
					return i
				}
			}
			j.CHUNK_SIZE = 5242880;
			class q {
				constructor(e) {
					this.client = e
				}
				static flatten(e, t = "") {
					let i = {};
					for (let [n, o] of Object.entries(e)) {
						let e = t ? t + "[" + n + "]" : n;
						Array.isArray(o) ? i = Object.assign(Object.assign({}, i), q.flatten(o, e)) : i[e] = o
					}
					return i
				}
			}
			q.CHUNK_SIZE = 5242880;
			class R {
				constructor(e) {
					this.client = e
				}
				get() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account");
						return yield this.client.call("get", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				create(e, t, i, n) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "userId"');
						if (void 0 === t) throw new S('Missing required parameter: "email"');
						if (void 0 === i) throw new S('Missing required parameter: "password"');
						let o = {};
						void 0 !== e && (o.userId = e), void 0 !== t && (o.email = t), void 0 !== i && (o.password = i), void 0 !== n && (o.name = n);
						let r = new URL(this.client.config.endpoint + "/account");
						return yield this.client.call("post", r, {
							"content-type": "application/json"
						}, o)
					})
				}
				updateEmail(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "email"');
						if (void 0 === t) throw new S('Missing required parameter: "password"');
						let i = {};
						void 0 !== e && (i.email = e), void 0 !== t && (i.password = t);
						let n = new URL(this.client.config.endpoint + "/account/email");
						return yield this.client.call("patch", n, {
							"content-type": "application/json"
						}, i)
					})
				}
				listIdentities(e) {
					return M(this, void 0, void 0, function*() {
						let t = {};
						void 0 !== e && (t.queries = e);
						let i = new URL(this.client.config.endpoint + "/account/identities");
						return yield this.client.call("get", i, {
							"content-type": "application/json"
						}, t)
					})
				}
				deleteIdentity(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "identityId"');
						let t = "/account/identities/{identityId}".replace("{identityId}", e),
							i = new URL(this.client.config.endpoint + t);
						return yield this.client.call("delete", i, {
							"content-type": "application/json"
						}, {})
					})
				}
				createJWT() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account/jwts");
						return yield this.client.call("post", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				listLogs(e) {
					return M(this, void 0, void 0, function*() {
						let t = {};
						void 0 !== e && (t.queries = e);
						let i = new URL(this.client.config.endpoint + "/account/logs");
						return yield this.client.call("get", i, {
							"content-type": "application/json"
						}, t)
					})
				}
				updateMFA(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "mfa"');
						let t = {};
						void 0 !== e && (t.mfa = e);
						let i = new URL(this.client.config.endpoint + "/account/mfa");
						return yield this.client.call("patch", i, {
							"content-type": "application/json"
						}, t)
					})
				}
				createMfaAuthenticator(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "type"');
						let t = "/account/mfa/authenticators/{type}".replace("{type}", e),
							i = new URL(this.client.config.endpoint + t);
						return yield this.client.call("post", i, {
							"content-type": "application/json"
						}, {})
					})
				}
				updateMfaAuthenticator(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "type"');
						if (void 0 === t) throw new S('Missing required parameter: "otp"');
						let i = "/account/mfa/authenticators/{type}".replace("{type}", e),
							n = {};
						void 0 !== t && (n.otp = t);
						let o = new URL(this.client.config.endpoint + i);
						return yield this.client.call("put", o, {
							"content-type": "application/json"
						}, n)
					})
				}
				deleteMfaAuthenticator(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "type"');
						let t = "/account/mfa/authenticators/{type}".replace("{type}", e),
							i = new URL(this.client.config.endpoint + t);
						return yield this.client.call("delete", i, {
							"content-type": "application/json"
						}, {})
					})
				}
				createMfaChallenge(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "factor"');
						let t = {};
						void 0 !== e && (t.factor = e);
						let i = new URL(this.client.config.endpoint + "/account/mfa/challenge");
						return yield this.client.call("post", i, {
							"content-type": "application/json"
						}, t)
					})
				}
				updateMfaChallenge(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "challengeId"');
						if (void 0 === t) throw new S('Missing required parameter: "otp"');
						let i = {};
						void 0 !== e && (i.challengeId = e), void 0 !== t && (i.otp = t);
						let n = new URL(this.client.config.endpoint + "/account/mfa/challenge");
						return yield this.client.call("put", n, {
							"content-type": "application/json"
						}, i)
					})
				}
				listMfaFactors() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account/mfa/factors");
						return yield this.client.call("get", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				getMfaRecoveryCodes() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account/mfa/recovery-codes");
						return yield this.client.call("get", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				createMfaRecoveryCodes() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account/mfa/recovery-codes");
						return yield this.client.call("post", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				updateMfaRecoveryCodes() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account/mfa/recovery-codes");
						return yield this.client.call("patch", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				updateName(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "name"');
						let t = {};
						void 0 !== e && (t.name = e);
						let i = new URL(this.client.config.endpoint + "/account/name");
						return yield this.client.call("patch", i, {
							"content-type": "application/json"
						}, t)
					})
				}
				updatePassword(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "password"');
						let i = {};
						void 0 !== e && (i.password = e), void 0 !== t && (i.oldPassword = t);
						let n = new URL(this.client.config.endpoint + "/account/password");
						return yield this.client.call("patch", n, {
							"content-type": "application/json"
						}, i)
					})
				}
				updatePhone(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "phone"');
						if (void 0 === t) throw new S('Missing required parameter: "password"');
						let i = {};
						void 0 !== e && (i.phone = e), void 0 !== t && (i.password = t);
						let n = new URL(this.client.config.endpoint + "/account/phone");
						return yield this.client.call("patch", n, {
							"content-type": "application/json"
						}, i)
					})
				}
				getPrefs() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account/prefs");
						return yield this.client.call("get", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				updatePrefs(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "prefs"');
						let t = {};
						void 0 !== e && (t.prefs = e);
						let i = new URL(this.client.config.endpoint + "/account/prefs");
						return yield this.client.call("patch", i, {
							"content-type": "application/json"
						}, t)
					})
				}
				createRecovery(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "email"');
						if (void 0 === t) throw new S('Missing required parameter: "url"');
						let i = {};
						void 0 !== e && (i.email = e), void 0 !== t && (i.url = t);
						let n = new URL(this.client.config.endpoint + "/account/recovery");
						return yield this.client.call("post", n, {
							"content-type": "application/json"
						}, i)
					})
				}
				updateRecovery(e, t, i) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "userId"');
						if (void 0 === t) throw new S('Missing required parameter: "secret"');
						if (void 0 === i) throw new S('Missing required parameter: "password"');
						let n = {};
						void 0 !== e && (n.userId = e), void 0 !== t && (n.secret = t), void 0 !== i && (n.password = i);
						let o = new URL(this.client.config.endpoint + "/account/recovery");
						return yield this.client.call("put", o, {
							"content-type": "application/json"
						}, n)
					})
				}
				listSessions() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account/sessions");
						return yield this.client.call("get", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				deleteSessions() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account/sessions");
						return yield this.client.call("delete", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				createAnonymousSession() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account/sessions/anonymous");
						return yield this.client.call("post", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				createEmailPasswordSession(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "email"');
						if (void 0 === t) throw new S('Missing required parameter: "password"');
						let i = {};
						void 0 !== e && (i.email = e), void 0 !== t && (i.password = t);
						let n = new URL(this.client.config.endpoint + "/account/sessions/email");
						return yield this.client.call("post", n, {
							"content-type": "application/json"
						}, i)
					})
				}
				updateMagicURLSession(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "userId"');
						if (void 0 === t) throw new S('Missing required parameter: "secret"');
						let i = {};
						void 0 !== e && (i.userId = e), void 0 !== t && (i.secret = t);
						let n = new URL(this.client.config.endpoint + "/account/sessions/magic-url");
						return yield this.client.call("put", n, {
							"content-type": "application/json"
						}, i)
					})
				}
				createOAuth2Session(e, t, i, n) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "provider"');
						let o = "/account/sessions/oauth2/{provider}".replace("{provider}", e),
							r = {};
						void 0 !== t && (r.success = t), void 0 !== i && (r.failure = i), void 0 !== n && (r.scopes = n);
						let a = new URL(this.client.config.endpoint + o);
						for (let [e, t] of(r.project = this.client.config.project, Object.entries(q.flatten(r)))) a.searchParams.append(e, t);
						if ("undefined" == typeof window || null == window || !window.location) return a.toString();
						window.location.href = a.toString()
					})
				}
				updatePhoneSession(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "userId"');
						if (void 0 === t) throw new S('Missing required parameter: "secret"');
						let i = {};
						void 0 !== e && (i.userId = e), void 0 !== t && (i.secret = t);
						let n = new URL(this.client.config.endpoint + "/account/sessions/phone");
						return yield this.client.call("put", n, {
							"content-type": "application/json"
						}, i)
					})
				}
				createSession(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "userId"');
						if (void 0 === t) throw new S('Missing required parameter: "secret"');
						let i = {};
						void 0 !== e && (i.userId = e), void 0 !== t && (i.secret = t);
						let n = new URL(this.client.config.endpoint + "/account/sessions/token");
						return yield this.client.call("post", n, {
							"content-type": "application/json"
						}, i)
					})
				}
				getSession(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "sessionId"');
						let t = "/account/sessions/{sessionId}".replace("{sessionId}", e),
							i = new URL(this.client.config.endpoint + t);
						return yield this.client.call("get", i, {
							"content-type": "application/json"
						}, {})
					})
				}
				updateSession(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "sessionId"');
						let t = "/account/sessions/{sessionId}".replace("{sessionId}", e),
							i = new URL(this.client.config.endpoint + t);
						return yield this.client.call("patch", i, {
							"content-type": "application/json"
						}, {})
					})
				}
				deleteSession(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "sessionId"');
						let t = "/account/sessions/{sessionId}".replace("{sessionId}", e),
							i = new URL(this.client.config.endpoint + t);
						return yield this.client.call("delete", i, {
							"content-type": "application/json"
						}, {})
					})
				}
				updateStatus() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account/status");
						return yield this.client.call("patch", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				createPushTarget(e, t, i) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "targetId"');
						if (void 0 === t) throw new S('Missing required parameter: "identifier"');
						let n = {};
						void 0 !== e && (n.targetId = e), void 0 !== t && (n.identifier = t), void 0 !== i && (n.providerId = i);
						let o = new URL(this.client.config.endpoint + "/account/targets/push");
						return yield this.client.call("post", o, {
							"content-type": "application/json"
						}, n)
					})
				}
				updatePushTarget(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "targetId"');
						if (void 0 === t) throw new S('Missing required parameter: "identifier"');
						let i = "/account/targets/{targetId}/push".replace("{targetId}", e),
							n = {};
						void 0 !== t && (n.identifier = t);
						let o = new URL(this.client.config.endpoint + i);
						return yield this.client.call("put", o, {
							"content-type": "application/json"
						}, n)
					})
				}
				deletePushTarget(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "targetId"');
						let t = "/account/targets/{targetId}/push".replace("{targetId}", e),
							i = new URL(this.client.config.endpoint + t);
						return yield this.client.call("delete", i, {
							"content-type": "application/json"
						}, {})
					})
				}
				createEmailToken(e, t, i) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "userId"');
						if (void 0 === t) throw new S('Missing required parameter: "email"');
						let n = {};
						void 0 !== e && (n.userId = e), void 0 !== t && (n.email = t), void 0 !== i && (n.phrase = i);
						let o = new URL(this.client.config.endpoint + "/account/tokens/email");
						return yield this.client.call("post", o, {
							"content-type": "application/json"
						}, n)
					})
				}
				createMagicURLToken(e, t, i, n) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "userId"');
						if (void 0 === t) throw new S('Missing required parameter: "email"');
						let o = {};
						void 0 !== e && (o.userId = e), void 0 !== t && (o.email = t), void 0 !== i && (o.url = i), void 0 !== n && (o.phrase = n);
						let r = new URL(this.client.config.endpoint + "/account/tokens/magic-url");
						return yield this.client.call("post", r, {
							"content-type": "application/json"
						}, o)
					})
				}
				createOAuth2Token(e, t, i, n) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "provider"');
						let o = "/account/tokens/oauth2/{provider}".replace("{provider}", e),
							r = {};
						void 0 !== t && (r.success = t), void 0 !== i && (r.failure = i), void 0 !== n && (r.scopes = n);
						let a = new URL(this.client.config.endpoint + o);
						for (let [e, t] of(r.project = this.client.config.project, Object.entries(q.flatten(r)))) a.searchParams.append(e, t);
						if ("undefined" == typeof window || null == window || !window.location) return a.toString();
						window.location.href = a.toString()
					})
				}
				createPhoneToken(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "userId"');
						if (void 0 === t) throw new S('Missing required parameter: "phone"');
						let i = {};
						void 0 !== e && (i.userId = e), void 0 !== t && (i.phone = t);
						let n = new URL(this.client.config.endpoint + "/account/tokens/phone");
						return yield this.client.call("post", n, {
							"content-type": "application/json"
						}, i)
					})
				}
				createVerification(e) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "url"');
						let t = {};
						void 0 !== e && (t.url = e);
						let i = new URL(this.client.config.endpoint + "/account/verification");
						return yield this.client.call("post", i, {
							"content-type": "application/json"
						}, t)
					})
				}
				updateVerification(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "userId"');
						if (void 0 === t) throw new S('Missing required parameter: "secret"');
						let i = {};
						void 0 !== e && (i.userId = e), void 0 !== t && (i.secret = t);
						let n = new URL(this.client.config.endpoint + "/account/verification");
						return yield this.client.call("put", n, {
							"content-type": "application/json"
						}, i)
					})
				}
				createPhoneVerification() {
					return M(this, void 0, void 0, function*() {
						let e = new URL(this.client.config.endpoint + "/account/verification/phone");
						return yield this.client.call("post", e, {
							"content-type": "application/json"
						}, {})
					})
				}
				updatePhoneVerification(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "userId"');
						if (void 0 === t) throw new S('Missing required parameter: "secret"');
						let i = {};
						void 0 !== e && (i.userId = e), void 0 !== t && (i.secret = t);
						let n = new URL(this.client.config.endpoint + "/account/verification/phone");
						return yield this.client.call("put", n, {
							"content-type": "application/json"
						}, i)
					})
				}
			}
			class L {
				constructor(e) {
					this.client = e
				}
				listDocuments(e, t, i) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "databaseId"');
						if (void 0 === t) throw new S('Missing required parameter: "collectionId"');
						let n = "/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}", e).replace("{collectionId}", t),
							o = {};
						void 0 !== i && (o.queries = i);
						let r = new URL(this.client.config.endpoint + n);
						return yield this.client.call("get", r, {
							"content-type": "application/json"
						}, o)
					})
				}
				createDocument(e, t, i, n, o) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "databaseId"');
						if (void 0 === t) throw new S('Missing required parameter: "collectionId"');
						if (void 0 === i) throw new S('Missing required parameter: "documentId"');
						if (void 0 === n) throw new S('Missing required parameter: "data"');
						let r = "/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}", e).replace("{collectionId}", t),
							a = {};
						void 0 !== i && (a.documentId = i), void 0 !== n && (a.data = n), void 0 !== o && (a.permissions = o);
						let s = new URL(this.client.config.endpoint + r);
						return yield this.client.call("post", s, {
							"content-type": "application/json"
						}, a)
					})
				}
				getDocument(e, t, i, n) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "databaseId"');
						if (void 0 === t) throw new S('Missing required parameter: "collectionId"');
						if (void 0 === i) throw new S('Missing required parameter: "documentId"');
						let o = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", e).replace("{collectionId}", t).replace("{documentId}", i),
							r = {};
						void 0 !== n && (r.queries = n);
						let a = new URL(this.client.config.endpoint + o);
						return yield this.client.call("get", a, {
							"content-type": "application/json"
						}, r)
					})
				}
				updateDocument(e, t, i, n, o) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "databaseId"');
						if (void 0 === t) throw new S('Missing required parameter: "collectionId"');
						if (void 0 === i) throw new S('Missing required parameter: "documentId"');
						let r = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", e).replace("{collectionId}", t).replace("{documentId}", i),
							a = {};
						void 0 !== n && (a.data = n), void 0 !== o && (a.permissions = o);
						let s = new URL(this.client.config.endpoint + r);
						return yield this.client.call("patch", s, {
							"content-type": "application/json"
						}, a)
					})
				}
				deleteDocument(e, t, i) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "databaseId"');
						if (void 0 === t) throw new S('Missing required parameter: "collectionId"');
						if (void 0 === i) throw new S('Missing required parameter: "documentId"');
						let n = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", e).replace("{collectionId}", t).replace("{documentId}", i),
							o = new URL(this.client.config.endpoint + n);
						return yield this.client.call("delete", o, {
							"content-type": "application/json"
						}, {})
					})
				}
			}
			class U {
				constructor(e) {
					this.client = e
				}
				listExecutions(e, t, i) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "functionId"');
						let n = "/functions/{functionId}/executions".replace("{functionId}", e),
							o = {};
						void 0 !== t && (o.queries = t), void 0 !== i && (o.search = i);
						let r = new URL(this.client.config.endpoint + n);
						return yield this.client.call("get", r, {
							"content-type": "application/json"
						}, o)
					})
				}
				createExecution(e, t, i, n, o, r, a) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "functionId"');
						let s = "/functions/{functionId}/executions".replace("{functionId}", e),
							c = {};
						void 0 !== t && (c.body = t), void 0 !== i && (c.async = i), void 0 !== n && (c.path = n), void 0 !== o && (c.method = o), void 0 !== r && (c.headers = r), void 0 !== a && (c.scheduledAt = a);
						let l = new URL(this.client.config.endpoint + s);
						return yield this.client.call("post", l, {
							"content-type": "application/json"
						}, c)
					})
				}
				getExecution(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "functionId"');
						if (void 0 === t) throw new S('Missing required parameter: "executionId"');
						let i = "/functions/{functionId}/executions/{executionId}".replace("{functionId}", e).replace("{executionId}", t),
							n = new URL(this.client.config.endpoint + i);
						return yield this.client.call("get", n, {
							"content-type": "application/json"
						}, {})
					})
				}
			}
			class A {
				constructor(e) {
					this.client = e
				}
				listFiles(e, t, i) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "bucketId"');
						let n = "/storage/buckets/{bucketId}/files".replace("{bucketId}", e),
							o = {};
						void 0 !== t && (o.queries = t), void 0 !== i && (o.search = i);
						let r = new URL(this.client.config.endpoint + n);
						return yield this.client.call("get", r, {
							"content-type": "application/json"
						}, o)
					})
				}
				createFile(e, t, i, n, o = e => {}) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "bucketId"');
						if (void 0 === t) throw new S('Missing required parameter: "fileId"');
						if (void 0 === i) throw new S('Missing required parameter: "file"');
						let r = "/storage/buckets/{bucketId}/files".replace("{bucketId}", e),
							a = {};
						void 0 !== t && (a.fileId = t), void 0 !== i && (a.file = i), void 0 !== n && (a.permissions = n);
						let s = new URL(this.client.config.endpoint + r);
						return yield this.client.chunkedUpload("post", s, {
							"content-type": "multipart/form-data"
						}, a, o)
					})
				}
				getFile(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "bucketId"');
						if (void 0 === t) throw new S('Missing required parameter: "fileId"');
						let i = "/storage/buckets/{bucketId}/files/{fileId}".replace("{bucketId}", e).replace("{fileId}", t),
							n = new URL(this.client.config.endpoint + i);
						return yield this.client.call("get", n, {
							"content-type": "application/json"
						}, {})
					})
				}
				updateFile(e, t, i, n) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "bucketId"');
						if (void 0 === t) throw new S('Missing required parameter: "fileId"');
						let o = "/storage/buckets/{bucketId}/files/{fileId}".replace("{bucketId}", e).replace("{fileId}", t),
							r = {};
						void 0 !== i && (r.name = i), void 0 !== n && (r.permissions = n);
						let a = new URL(this.client.config.endpoint + o);
						return yield this.client.call("put", a, {
							"content-type": "application/json"
						}, r)
					})
				}
				deleteFile(e, t) {
					return M(this, void 0, void 0, function*() {
						if (void 0 === e) throw new S('Missing required parameter: "bucketId"');
						if (void 0 === t) throw new S('Missing required parameter: "fileId"');
						let i = "/storage/buckets/{bucketId}/files/{fileId}".replace("{bucketId}", e).replace("{fileId}", t),
							n = new URL(this.client.config.endpoint + i);
						return yield this.client.call("delete", n, {
							"content-type": "application/json"
						}, {})
					})
				}
				getFileDownload(e, t) {
					if (void 0 === e) throw new S('Missing required parameter: "bucketId"');
					if (void 0 === t) throw new S('Missing required parameter: "fileId"');
					let i = "/storage/buckets/{bucketId}/files/{fileId}/download".replace("{bucketId}", e).replace("{fileId}", t),
						n = {},
						o = new URL(this.client.config.endpoint + i);
					for (let [e, t] of(n.project = this.client.config.project, Object.entries(q.flatten(n)))) o.searchParams.append(e, t);
					for (let [e, t] of(n.project = this.client.config.project, Object.entries(j.flatten(n)))) o.searchParams.append(e, t);
					return o.toString()
				}
				getFilePreview(e, t, i, n, o, r, a, s, c, l, d, u, p) {
					if (void 0 === e) throw new S('Missing required parameter: "bucketId"');
					if (void 0 === t) throw new S('Missing required parameter: "fileId"');
					let h = "/storage/buckets/{bucketId}/files/{fileId}/preview".replace("{bucketId}", e).replace("{fileId}", t),
						f = {};
					void 0 !== i && (f.width = i), void 0 !== n && (f.height = n), void 0 !== o && (f.gravity = o), void 0 !== r && (f.quality = r), void 0 !== a && (f.borderWidth = a), void 0 !== s && (f.borderColor = s), void 0 !== c && (f.borderRadius = c), void 0 !== l && (f.opacity = l), void 0 !== d && (f.rotation = d), void 0 !== u && (f.background = u), void 0 !== p && (f.output = p);
					let v = new URL(this.client.config.endpoint + h);
					for (let [e, t] of(f.project = this.client.config.project, Object.entries(q.flatten(f)))) v.searchParams.append(e, t);
					for (let [e, t] of(f.project = this.client.config.project, Object.entries(j.flatten(f)))) v.searchParams.append(e, t);
					return v.toString()
				}
				getFileView(e, t) {
					if (void 0 === e) throw new S('Missing required parameter: "bucketId"');
					if (void 0 === t) throw new S('Missing required parameter: "fileId"');
					let i = "/storage/buckets/{bucketId}/files/{fileId}/view".replace("{bucketId}", e).replace("{fileId}", t),
						n = {},
						o = new URL(this.client.config.endpoint + i);
					for (let [e, t] of(n.project = this.client.config.project, Object.entries(q.flatten(n)))) o.searchParams.append(e, t);
					for (let [e, t] of(n.project = this.client.config.project, Object.entries(j.flatten(n)))) o.searchParams.append(e, t);
					return o.toString()
				}
			}
			class T {}
			T.read = e => `read("${e}")`, T.write = e => `write("${e}")`, T.create = e => `create("${e}")`, T.update = e => `update("${e}")`, T.delete = e => `delete("${e}")`;
			class E {
				static custom(e) {
					return e
				}
				static unique(e = 7) {
					let t = (function(e, t, i, n) {
							if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
							return n
						})(E, n, 0, o).call(E),
						i = "";
					for (let t = 0; t < e; t++) i += Math.floor(16 * Math.random()).toString(16);
					return t + i
				}
			}
			n = E, o = function() {
				let e = new Date,
					t = Math.floor(e.getTime() / 1e3),
					i = e.getMilliseconds();
				return t.toString(16) + i.toString(16).padStart(5, "0")
			}, (r || (r = {})).Totp = "totp", (f = a || (a = {})).Email = "email", f.Phone = "phone", f.Totp = "totp", f.Recoverycode = "recoverycode", (v = s || (s = {})).Amazon = "amazon", v.Apple = "apple", v.Auth0 = "auth0", v.Authentik = "authentik", v.Autodesk = "autodesk", v.Bitbucket = "bitbucket", v.Bitly = "bitly", v.Box = "box", v.Dailymotion = "dailymotion", v.Discord = "discord", v.Disqus = "disqus", v.Dropbox = "dropbox", v.Etsy = "etsy", v.Facebook = "facebook", v.Github = "github", v.Gitlab = "gitlab", v.Google = "google", v.Linkedin = "linkedin", v.Microsoft = "microsoft", v.Notion = "notion", v.Oidc = "oidc", v.Okta = "okta", v.Paypal = "paypal", v.PaypalSandbox = "paypalSandbox", v.Podio = "podio", v.Salesforce = "salesforce", v.Slack = "slack", v.Spotify = "spotify", v.Stripe = "stripe", v.Tradeshift = "tradeshift", v.TradeshiftBox = "tradeshiftBox", v.Twitch = "twitch", v.Wordpress = "wordpress", v.Yahoo = "yahoo", v.Yammer = "yammer", v.Yandex = "yandex", v.Zoho = "zoho", v.Zoom = "zoom", v.Mock = "mock", (g = c || (c = {})).AvantBrowser = "aa", g.AndroidWebViewBeta = "an", g.GoogleChrome = "ch", g.GoogleChromeIOS = "ci", g.GoogleChromeMobile = "cm", g.Chromium = "cr", g.MozillaFirefox = "ff", g.Safari = "sf", g.MobileSafari = "mf", g.MicrosoftEdge = "ps", g.MicrosoftEdgeIOS = "oi", g.OperaMini = "om", g.Opera = "op", g.OperaNext = "on", (w = l || (l = {})).AmericanExpress = "amex", w.Argencard = "argencard", w.Cabal = "cabal", w.Cencosud = "cencosud", w.DinersClub = "diners", w.Discover = "discover", w.Elo = "elo", w.Hipercard = "hipercard", w.JCB = "jcb", w.Mastercard = "mastercard", w.Naranja = "naranja", w.TarjetaShopping = "targeta-shopping", w.UnionChinaPay = "union-china-pay", w.Visa = "visa", w.MIR = "mir", w.Maestro = "maestro", (m = d || (d = {})).Afghanistan = "af", m.Angola = "ao", m.Albania = "al", m.Andorra = "ad", m.UnitedArabEmirates = "ae", m.Argentina = "ar", m.Armenia = "am", m.AntiguaAndBarbuda = "ag", m.Australia = "au", m.Austria = "at", m.Azerbaijan = "az", m.Burundi = "bi", m.Belgium = "be", m.Benin = "bj", m.BurkinaFaso = "bf", m.Bangladesh = "bd", m.Bulgaria = "bg", m.Bahrain = "bh", m.Bahamas = "bs", m.BosniaAndHerzegovina = "ba", m.Belarus = "by", m.Belize = "bz", m.Bolivia = "bo", m.Brazil = "br", m.Barbados = "bb", m.BruneiDarussalam = "bn", m.Bhutan = "bt", m.Botswana = "bw", m.CentralAfricanRepublic = "cf", m.Canada = "ca", m.Switzerland = "ch", m.Chile = "cl", m.China = "cn", m.CoteDIvoire = "ci", m.Cameroon = "cm", m.DemocraticRepublicOfTheCongo = "cd", m.RepublicOfTheCongo = "cg", m.Colombia = "co", m.Comoros = "km", m.CapeVerde = "cv", m.CostaRica = "cr", m.Cuba = "cu", m.Cyprus = "cy", m.CzechRepublic = "cz", m.Germany = "de", m.Djibouti = "dj", m.Dominica = "dm", m.Denmark = "dk", m.DominicanRepublic = "do", m.Algeria = "dz", m.Ecuador = "ec", m.Egypt = "eg", m.Eritrea = "er", m.Spain = "es", m.Estonia = "ee", m.Ethiopia = "et", m.Finland = "fi", m.Fiji = "fj", m.France = "fr", m.MicronesiaFederatedStatesOf = "fm", m.Gabon = "ga", m.UnitedKingdom = "gb", m.Georgia = "ge", m.Ghana = "gh", m.Guinea = "gn", m.Gambia = "gm", m.GuineaBissau = "gw", m.EquatorialGuinea = "gq", m.Greece = "gr", m.Grenada = "gd", m.Guatemala = "gt", m.Guyana = "gy", m.Honduras = "hn", m.Croatia = "hr", m.Haiti = "ht", m.Hungary = "hu", m.Indonesia = "id", m.India = "in", m.Ireland = "ie", m.IranIslamicRepublicOf = "ir", m.Iraq = "iq", m.Iceland = "is", m.Israel = "il", m.Italy = "it", m.Jamaica = "jm", m.Jordan = "jo", m.Japan = "jp", m.Kazakhstan = "kz", m.Kenya = "ke", m.Kyrgyzstan = "kg", m.Cambodia = "kh", m.Kiribati = "ki", m.SaintKittsAndNevis = "kn", m.SouthKorea = "kr", m.Kuwait = "kw", m.LaoPeopleSDemocraticRepublic = "la", m.Lebanon = "lb", m.Liberia = "lr", m.Libya = "ly", m.SaintLucia = "lc", m.Liechtenstein = "li", m.SriLanka = "lk", m.Lesotho = "ls", m.Lithuania = "lt", m.Luxembourg = "lu", m.Latvia = "lv", m.Morocco = "ma", m.Monaco = "mc", m.Moldova = "md", m.Madagascar = "mg", m.Maldives = "mv", m.Mexico = "mx", m.MarshallIslands = "mh", m.NorthMacedonia = "mk", m.Mali = "ml", m.Malta = "mt", m.Myanmar = "mm", m.Montenegro = "me", m.Mongolia = "mn", m.Mozambique = "mz", m.Mauritania = "mr", m.Mauritius = "mu", m.Malawi = "mw", m.Malaysia = "my", m.Namibia = "na", m.Niger = "ne", m.Nigeria = "ng", m.Nicaragua = "ni", m.Netherlands = "nl", m.Norway = "no", m.Nepal = "np", m.Nauru = "nr", m.NewZealand = "nz", m.Oman = "om", m.Pakistan = "pk", m.Panama = "pa", m.Peru = "pe", m.Philippines = "ph", m.Palau = "pw", m.PapuaNewGuinea = "pg", m.Poland = "pl", m.FrenchPolynesia = "pf", m.NorthKorea = "kp", m.Portugal = "pt", m.Paraguay = "py", m.Qatar = "qa", m.Romania = "ro", m.Russia = "ru", m.Rwanda = "rw", m.SaudiArabia = "sa", m.Sudan = "sd", m.Senegal = "sn", m.Singapore = "sg", m.SolomonIslands = "sb", m.SierraLeone = "sl", m.ElSalvador = "sv", m.SanMarino = "sm", m.Somalia = "so", m.Serbia = "rs", m.SouthSudan = "ss", m.SaoTomeAndPrincipe = "st", m.Suriname = "sr", m.Slovakia = "sk", m.Slovenia = "si", m.Sweden = "se", m.Eswatini = "sz", m.Seychelles = "sc", m.Syria = "sy", m.Chad = "td", m.Togo = "tg", m.Thailand = "th", m.Tajikistan = "tj", m.Turkmenistan = "tm", m.TimorLeste = "tl", m.Tonga = "to", m.TrinidadAndTobago = "tt", m.Tunisia = "tn", m.Turkey = "tr", m.Tuvalu = "tv", m.Tanzania = "tz", m.Uganda = "ug", m.Ukraine = "ua", m.Uruguay = "uy", m.UnitedStates = "us", m.Uzbekistan = "uz", m.VaticanCity = "va", m.SaintVincentAndTheGrenadines = "vc", m.Venezuela = "ve", m.Vietnam = "vn", m.Vanuatu = "vu", m.Samoa = "ws", m.Yemen = "ye", m.SouthAfrica = "za", m.Zambia = "zm", m.Zimbabwe = "zw", (y = u || (u = {})).GET = "GET", y.POST = "POST", y.PUT = "PUT", y.PATCH = "PATCH", y.DELETE = "DELETE", y.OPTIONS = "OPTIONS", (b = p || (p = {})).Center = "center", b.Topleft = "top-left", b.Top = "top", b.Topright = "top-right", b.Left = "left", b.Right = "right", b.Bottomleft = "bottom-left", b.Bottom = "bottom", b.Bottomright = "bottom-right", (I = h || (h = {})).Jpg = "jpg", I.Jpeg = "jpeg", I.Gif = "gif", I.Png = "png", I.Webp = "webp", I.Avif = "avif"
		}
	}
]);