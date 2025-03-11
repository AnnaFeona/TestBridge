System.register(["__unresolved_0"], function (_export2, _context2) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export2("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export2("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        System.register("chunks:///_virtual/CarController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./state.ts", "./model.ts"], function (e) {
          var i, r, t, o, n, a, l, s, c, d, u, h, m, p, C, g, f;
          return {
            setters: [function (e) {
              i = e.applyDecoratedDescriptor, r = e.inheritsLoose, t = e.initializerDefineProperty, o = e.assertThisInitialized;
            }, function (e) {
              n = e.cclegacy, a = e._decorator, l = e.RigidBody, s = e.BoxCollider, c = e.Camera, d = e.Node, u = e.Collider, h = e.Animation, m = e.Vec3, p = e.Component;
            }, function (e) {
              C = e.gameState;
            }, function (e) {
              g = e.NodesName, f = e.AnimationName;
            }],
            execute: function execute() {
              var y, v, b, B, N, w, O, z, D, F, G, P, R;

              n._RF.push({}, "54c24TacpND3ruv4vZSbqby", "CarController", void 0);

              var S = a.ccclass,
                  A = a.property;
              e("CarController", (y = S("CarController"), v = A(l), b = A(s), B = A(c), N = A(d), w = A(d), y((D = i((z = function (e) {
                function i() {
                  for (var i, r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];

                  return i = e.call.apply(e, [this].concat(n)) || this, t(i, "rigidBody", D, o(i)), t(i, "carCollider", F, o(i)), t(i, "mainCamera", G, o(i)), t(i, "carBody", P, o(i)), t(i, "gameOverNode", R, o(i)), i.force = new m(0, 0, 0), i.parentNode = null, i.animation = null, i.isGameOver = !1, i;
                }

                r(i, e);
                var n = i.prototype;
                return n.start = function () {
                  this.rigidBody || (this.rigidBody = this.node.getComponent(l)), this.rigidBody.mass = C.carMass, this.rigidBody.useCCD = !0;
                  var e = this.node.getComponent(u).sharedMaterial;
                  e.friction = 1, e.restitution = .1, this.animation || (this.animation = this.node.getComponent(h)), this.carCollider || (this.carCollider = this.node.getComponent(s)), this.carCollider.on("onCollisionEnter", this.onCollision, this), this.carCollider.on("onTriggerEnter", this.onCollision, this);
                }, n.update = function () {
                  var e = C.isLeverActive,
                      i = C.isFinished;
                  e && !i && this.moveCar();
                }, n.moveCar = function () {
                  var e = C.carSpeed;
                  this.force = new m(e, 0, 0), C.isFinished || this.rigidBody.applyImpulse(this.force);
                }, n.onCollision = function (e) {
                  var i = e.otherCollider.node.name;

                  if (i === g.FinishPlatform || i === g.BridgeDeep) {
                    if (this.isGameOver) return;
                    this.isGameOver = !0, C.carSpeed = 0, C.isFinished = !1, this.enadlePhisics(), this.animation.play(f.CarDestroy), this.completeRace();
                  }
                }, n.enadlePhisics = function () {
                  this.carBody.children.forEach(function (e) {
                    e.addComponent(l), e.getComponent(s).isTrigger = !1;
                  }), this.rigidBody.useGravity = !1, this.rigidBody.mass = 1e3;
                }, n.completeRace = function () {
                  this.gameOverNode.getComponent("GameOver").gameOver();
                }, i;
              }(p)).prototype, "rigidBody", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), F = i(z.prototype, "carCollider", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), G = i(z.prototype, "mainCamera", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), P = i(z.prototype, "carBody", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
              }), R = i(z.prototype, "gameOverNode", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
              }), O = z)) || O));

              n._RF.pop();
            }
          };
        });
        System.register("chunks:///_virtual/CoinsController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./model.ts", "./state.ts"], function (e) {
          var n, o, t, i, r, a, l, c, s, u, C, f, p, b, d, m, h, g, v;
          return {
            setters: [function (e) {
              n = e.applyDecoratedDescriptor, o = e.inheritsLoose, t = e.initializerDefineProperty, i = e.assertThisInitialized;
            }, function (e) {
              r = e.cclegacy, a = e._decorator, l = e.Prefab, c = e.Node, s = e.BoxCollider, u = e.Vec3, C = e.instantiate, f = e.UITransform, p = e.find, b = e.tween, d = e.v3, m = e.Label, h = e.Component;
            }, function (e) {
              g = e.NodesName;
            }, function (e) {
              v = e.gameState;
            }],
            execute: function execute() {
              var y, z, w, T, I, L, P, S, U, A, N, x, _;

              r._RF.push({}, "ab883240EJOupTOcDNuxueU", "CoinsController", void 0);

              var D = a.ccclass,
                  R = a.property;
              e("CoinsController", (y = D("CoinsController"), z = R(l), w = R(c), T = R(c), I = R(Number), L = R(c), y((U = n((S = function (e) {
                function n() {
                  for (var n, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];

                  return n = e.call.apply(e, [this].concat(r)) || this, t(n, "coinPrefab", U, i(n)), t(n, "coinUI", A, i(n)), t(n, "scoreLabel", N, i(n)), t(n, "coinAmount", x, i(n)), t(n, "baseCoin", _, i(n)), n.baseCollider = null, n;
                }

                o(n, e);
                var r = n.prototype;
                return r.onLoad = function () {
                  var e = this.baseCoin.position,
                      n = e.x,
                      o = e.y,
                      t = e.z;
                  this.baseCollider = this.baseCoin.getComponent(s);

                  for (var i = 1; i < this.coinAmount; i++) {
                    var r = new u(n + 15 * i, o, t);
                    this.renderCoin(r, i);
                  }
                }, r.start = function () {
                  var e = this;
                  this.node.children.map(function (e) {
                    return e.getComponent(s);
                  }).forEach(function (n) {
                    n.on("onTriggerEnter", e.onCoinCollected, e);
                  });
                }, r.renderCoin = function (e, n) {
                  var o = C(this.coinPrefab);
                  this.node.addChild(o), o.scale = this.baseCoin.scale, o.name = this.baseCoin.name + "_" + n, o.setPosition(e);
                  var t = o.addComponent(s);
                  t.isTrigger = !0, t.size = this.baseCollider.size;
                }, r.onCoinCollected = function (e) {
                  var n = e.otherCollider.node.name,
                      o = e.selfCollider.node;
                  n === g.Car && (this.animateCoinToUI(o), this.incrementScore());
                }, r.animateCoinToUI = function (e) {
                  var n = this.coinUI.getComponent(f).convertToWorldSpaceAR(new u(0, 0, 0)),
                      o = p("Canvas").getComponent(f).convertToNodeSpaceAR(n);
                  b(e).to(3, {
                    position: d(o.x, o.y, o.z)
                  }).call(function () {
                    e.destroy();
                  }).start();
                }, r.incrementScore = function () {
                  v.scoreCouter++, this.scoreLabel.getComponent(m).string = v.scoreCouter.toString();
                }, n;
              }(h)).prototype, "coinPrefab", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), A = n(S.prototype, "coinUI", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), N = n(S.prototype, "scoreLabel", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), x = n(S.prototype, "coinAmount", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return 10;
                }
              }), _ = n(S.prototype, "baseCoin", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), P = S)) || P));

              r._RF.pop();
            }
          };
        });
        System.register("chunks:///_virtual/debug-view-runtime-control.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (t) {
          var e, o, i, n, s, l, r, a, g, h, p, c, C, d, m, u, L;
          return {
            setters: [function (t) {
              e = t.applyDecoratedDescriptor, o = t.inheritsLoose, i = t.initializerDefineProperty, n = t.assertThisInitialized;
            }, function (t) {
              s = t.cclegacy, l = t._decorator, r = t.Node, a = t.Canvas, g = t.UITransform, h = t.instantiate, p = t.Label, c = t.Color, C = t.RichText, d = t.Toggle, m = t.Button, u = t.director, L = t.Component;
            }],
            execute: function execute() {
              var f, M, b, v, T, S, x, E, I;

              s._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", void 0);

              var A = l.ccclass,
                  y = l.property;
              t("DebugViewRuntimeControl", (f = A("internal.DebugViewRuntimeControl"), M = y(r), b = y(r), v = y(r), f((x = e((S = function (t) {
                function e() {
                  for (var e, o = arguments.length, s = new Array(o), l = 0; l < o; l++) s[l] = arguments[l];

                  return e = t.call.apply(t, [this].concat(s)) || this, i(e, "compositeModeToggle", x, n(e)), i(e, "singleModeToggle", E, n(e)), i(e, "EnableAllCompositeModeButton", I, n(e)), e._single = 0, e.strSingle = ["No Single Debug", "Vertex Color", "Vertex Normal", "Vertex Tangent", "World Position", "Vertex Mirror", "Face Side", "UV0", "UV1", "UV Lightmap", "Project Depth", "Linear Depth", "Fragment Normal", "Fragment Tangent", "Fragment Binormal", "Base Color", "Diffuse Color", "Specular Color", "Transparency", "Metallic", "Roughness", "Specular Intensity", "IOR", "Direct Diffuse", "Direct Specular", "Direct All", "Env Diffuse", "Env Specular", "Env All", "Emissive", "Light Map", "Shadow", "AO", "Fresnel", "Direct Transmit Diffuse", "Direct Transmit Specular", "Env Transmit Diffuse", "Env Transmit Specular", "Transmit All", "Direct Internal Specular", "Env Internal Specular", "Internal All", "Fog"], e.strComposite = ["Direct Diffuse", "Direct Specular", "Env Diffuse", "Env Specular", "Emissive", "Light Map", "Shadow", "AO", "Normal Map", "Fog", "Tone Mapping", "Gamma Correction", "Fresnel", "Transmit Diffuse", "Transmit Specular", "Internal Specular", "TT"], e.strMisc = ["CSM Layer Coloration", "Lighting With Albedo"], e.compositeModeToggleList = [], e.singleModeToggleList = [], e.miscModeToggleList = [], e.textComponentList = [], e.labelComponentList = [], e.textContentList = [], e.hideButtonLabel = void 0, e._currentColorIndex = 0, e.strColor = ["<color=#ffffff>", "<color=#000000>", "<color=#ff0000>", "<color=#00ff00>", "<color=#0000ff>"], e.color = [c.WHITE, c.BLACK, c.RED, c.GREEN, c.BLUE], e;
                }

                o(e, t);
                var s = e.prototype;
                return s.start = function () {
                  if (this.node.parent.getComponent(a)) {
                    var t = this.node.parent.getComponent(g),
                        e = .5 * t.width,
                        o = .5 * t.height,
                        i = .1 * e - e,
                        n = o - .1 * o,
                        s = this.node.getChildByName("MiscMode"),
                        l = h(s);
                    l.parent = this.node, l.name = "Buttons";
                    var r = h(s);
                    r.parent = this.node, r.name = "Titles";

                    for (var u = 0; u < 2; u++) {
                      var L = h(this.EnableAllCompositeModeButton.getChildByName("Label"));
                      L.setPosition(i + (u > 0 ? 450 : 150), n, 0), L.setScale(.75, .75, .75), L.parent = r;
                      var f = L.getComponent(p);
                      f.string = u ? "----------Composite Mode----------" : "----------Single Mode----------", f.color = c.WHITE, f.overflow = 0, this.labelComponentList[this.labelComponentList.length] = f;
                    }

                    n -= 20;

                    for (var M = 0, b = 0; b < this.strSingle.length; b++, M++) {
                      b === this.strSingle.length >> 1 && (i += 200, M = 0);
                      var v = b ? h(this.singleModeToggle) : this.singleModeToggle;
                      v.setPosition(i, n - 20 * M, 0), v.setScale(.5, .5, .5), v.parent = this.singleModeToggle.parent;
                      var T = v.getComponentInChildren(C);
                      T.string = this.strSingle[b], this.textComponentList[this.textComponentList.length] = T, this.textContentList[this.textContentList.length] = T.string, v.on(d.EventType.TOGGLE, this.toggleSingleMode, this), this.singleModeToggleList[b] = v;
                    }

                    i += 200, this.EnableAllCompositeModeButton.setPosition(i + 15, n, 0), this.EnableAllCompositeModeButton.setScale(.5, .5, .5), this.EnableAllCompositeModeButton.on(m.EventType.CLICK, this.enableAllCompositeMode, this), this.EnableAllCompositeModeButton.parent = l;
                    var S = this.EnableAllCompositeModeButton.getComponentInChildren(p);
                    this.labelComponentList[this.labelComponentList.length] = S;
                    var x = h(this.EnableAllCompositeModeButton);
                    x.setPosition(i + 90, n, 0), x.setScale(.5, .5, .5), x.on(m.EventType.CLICK, this.changeTextColor, this), x.parent = l, (S = x.getComponentInChildren(p)).string = "TextColor", this.labelComponentList[this.labelComponentList.length] = S;
                    var E = h(this.EnableAllCompositeModeButton);
                    E.setPosition(i + 200, n, 0), E.setScale(.5, .5, .5), E.on(m.EventType.CLICK, this.hideUI, this), E.parent = this.node.parent, (S = E.getComponentInChildren(p)).string = "Hide UI", this.labelComponentList[this.labelComponentList.length] = S, this.hideButtonLabel = S, n -= 40;

                    for (var I = 0; I < this.strMisc.length; I++) {
                      var A = h(this.compositeModeToggle);
                      A.setPosition(i, n - 20 * I, 0), A.setScale(.5, .5, .5), A.parent = s;
                      var y = A.getComponentInChildren(C);
                      y.string = this.strMisc[I], this.textComponentList[this.textComponentList.length] = y, this.textContentList[this.textContentList.length] = y.string, A.getComponent(d).isChecked = !!I, A.on(d.EventType.TOGGLE, I ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this), this.miscModeToggleList[I] = A;
                    }

                    n -= 150;

                    for (var D = 0; D < this.strComposite.length; D++) {
                      var B = D ? h(this.compositeModeToggle) : this.compositeModeToggle;
                      B.setPosition(i, n - 20 * D, 0), B.setScale(.5, .5, .5), B.parent = this.compositeModeToggle.parent;
                      var w = B.getComponentInChildren(C);
                      w.string = this.strComposite[D], this.textComponentList[this.textComponentList.length] = w, this.textContentList[this.textContentList.length] = w.string, B.on(d.EventType.TOGGLE, this.toggleCompositeMode, this), this.compositeModeToggleList[D] = B;
                    }
                  } else console.error("debug-view-runtime-control should be child of Canvas");
                }, s.isTextMatched = function (t, e) {
                  var o = new String(t),
                      i = o.search(">");
                  return -1 === i ? t === e : (o = (o = o.substr(i + 1)).substr(0, o.search("<"))) === e;
                }, s.toggleSingleMode = function (t) {
                  for (var e = u.root.debugView, o = t.getComponentInChildren(C), i = 0; i < this.strSingle.length; i++) this.isTextMatched(o.string, this.strSingle[i]) && (e.singleMode = i);
                }, s.toggleCompositeMode = function (t) {
                  for (var e = u.root.debugView, o = t.getComponentInChildren(C), i = 0; i < this.strComposite.length; i++) this.isTextMatched(o.string, this.strComposite[i]) && e.enableCompositeMode(i, t.isChecked);
                }, s.toggleLightingWithAlbedo = function (t) {
                  u.root.debugView.lightingWithAlbedo = t.isChecked;
                }, s.toggleCSMColoration = function (t) {
                  u.root.debugView.csmLayerColoration = t.isChecked;
                }, s.enableAllCompositeMode = function (t) {
                  var e = u.root.debugView;
                  e.enableAllCompositeMode(!0);

                  for (var o = 0; o < this.compositeModeToggleList.length; o++) {
                    this.compositeModeToggleList[o].getComponent(d).isChecked = !0;
                  }

                  var i = this.miscModeToggleList[0].getComponent(d);
                  i.isChecked = !1, e.csmLayerColoration = !1, (i = this.miscModeToggleList[1].getComponent(d)).isChecked = !0, e.lightingWithAlbedo = !0;
                }, s.hideUI = function (t) {
                  var e = this.node.getChildByName("Titles"),
                      o = !e.active;
                  this.singleModeToggleList[0].parent.active = o, this.miscModeToggleList[0].parent.active = o, this.compositeModeToggleList[0].parent.active = o, this.EnableAllCompositeModeButton.parent.active = o, e.active = o, this.hideButtonLabel.string = o ? "Hide UI" : "Show UI";
                }, s.changeTextColor = function (t) {
                  this._currentColorIndex++, this._currentColorIndex >= this.strColor.length && (this._currentColorIndex = 0);

                  for (var e = 0; e < this.textComponentList.length; e++) this.textComponentList[e].string = this.strColor[this._currentColorIndex] + this.textContentList[e] + "</color>";

                  for (var o = 0; o < this.labelComponentList.length; o++) this.labelComponentList[o].color = this.color[this._currentColorIndex];
                }, s.onLoad = function () {}, s.update = function (t) {}, e;
              }(L)).prototype, "compositeModeToggle", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), E = e(S.prototype, "singleModeToggle", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), I = e(S.prototype, "EnableAllCompositeModeButton", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), T = S)) || T));

              s._RF.pop();
            }
          };
        });
        System.register("chunks:///_virtual/DownloadButtonController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./state.ts"], function (t) {
          var n, o, e, r, i, l, a, u, s, c, p, f;
          return {
            setters: [function (t) {
              n = t.applyDecoratedDescriptor, o = t.inheritsLoose, e = t.initializerDefineProperty, r = t.assertThisInitialized;
            }, function (t) {
              i = t.cclegacy, l = t._decorator, a = t.Node, u = t.sys, s = t.Component;
            }, function (t) {
              c = t.APP_STORE_URL, p = t.PLAY_STORE_URL, f = t.WEB_URL;
            }],
            execute: function execute() {
              var d, b, w, _, y, h, D;

              i._RF.push({}, "4c141aG1dZNaa8fQ427aBT7", "DownloadButtonController", void 0);

              var g = l.ccclass,
                  v = l.property;
              t("DownloadButtonController", (d = g("DownloadButtonController"), b = v(a), w = v(a), d((h = n((y = function (t) {
                function n() {
                  for (var n, o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];

                  return n = t.call.apply(t, [this].concat(i)) || this, e(n, "button", h, r(n)), e(n, "settings", D, r(n)), n;
                }

                o(n, t);
                var i = n.prototype;
                return i.start = function () {
                  this.button.on(a.EventType.TOUCH_END, this.openStore, this);
                }, i.openStore = function () {
                  u.os === u.OS.IOS ? window.open(c, "_blank") : u.os === u.OS.ANDROID ? window.open(p, "_blank") : window.open(f, "_blank");
                }, n;
              }(s)).prototype, "button", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), D = n(y.prototype, "settings", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), _ = y)) || _));

              i._RF.pop();
            }
          };
        });
        System.register("chunks:///_virtual/GameOver.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./state.ts"], function (t) {
          var e, n, o, r, i, a, u, c, s, l, p, h, d, f;
          return {
            setters: [function (t) {
              e = t.applyDecoratedDescriptor, n = t.inheritsLoose, o = t.initializerDefineProperty, r = t.assertThisInitialized;
            }, function (t) {
              i = t.cclegacy, a = t._decorator, u = t.Node, c = t.input, s = t.Input, l = t.tween, p = t.v3, h = t.UIOpacity, d = t.Component;
            }, function (t) {
              f = t.gameState;
            }],
            execute: function execute() {
              var y, v, g, O, m, w, b, B, k, C, I;

              i._RF.push({}, "8c424k7aXpO06wJejcyQTqw", "GameOver", void 0);

              var G = a.ccclass,
                  z = a.property;
              t("GameOver", (y = G("GameOver"), v = z(u), g = z(u), O = z(u), m = z(u), y((B = e((b = function (t) {
                function e() {
                  for (var e, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];

                  return e = t.call.apply(t, [this].concat(i)) || this, o(e, "crossUI", B, r(e)), o(e, "background", k, r(e)), o(e, "downloadButton", C, r(e)), o(e, "retryButton", I, r(e)), e.isGameOver = !1, e;
                }

                n(e, t);
                var i = e.prototype;
                return i.start = function () {}, i.update = function () {
                  this.isGameOver || f.isFinished && (this.isGameOver = !0, this.gameOver());
                }, i.gameOver = function () {
                  var t = this.downloadButton.getComponent("DownloadButtonController");
                  c.on(s.EventType.TOUCH_START, t.openStore), this.scheduleOnce(this.showCross, .5), this.scheduleOnce(this.fadeInBackground, 1), this.scheduleOnce(this.fadeOutDownloadButton, 1), this.scheduleOnce(this.showRetryButton, 1);
                }, i.showCross = function () {
                  this.crossUI.active = !0;
                }, i.fadeInBackground = function () {
                  this.background.active = !0, this.changeOpacity(this.background, 0, 220);
                }, i.fadeOutDownloadButton = function () {
                  this.changeOpacity(this.downloadButton, 255, 0, 2);
                }, i.showRetryButton = function () {
                  this.retryButton.active = !0, l(this.retryButton).to(.5, {
                    scale: p(1.1, 1.1, 1)
                  }).to(.5, {
                    scale: p(1, 1, 1)
                  }).union().repeatForever().start();
                }, i.changeOpacity = function (t, e, n, o) {
                  void 0 === o && (o = 1);
                  var r = t.getComponent(h);
                  r || (r = t.addComponent(h)), r.opacity = e, l(r).to(o, {
                    opacity: n
                  }).start();
                }, e;
              }(d)).prototype, "crossUI", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), k = e(b.prototype, "background", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), C = e(b.prototype, "downloadButton", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), I = e(b.prototype, "retryButton", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), w = b)) || w));

              i._RF.pop();
            }
          };
        });
        System.register("chunks:///_virtual/LeverController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./state.ts"], function (t) {
          var i, n, e, o, a, r, s, h, l, u, c, p;
          return {
            setters: [function (t) {
              i = t.applyDecoratedDescriptor, n = t.inheritsLoose, e = t.initializerDefineProperty, o = t.assertThisInitialized;
            }, function (t) {
              a = t.cclegacy, r = t._decorator, s = t.Node, h = t.UITransform, l = t.tween, u = t.Vec3, c = t.Component;
            }, function (t) {
              p = t.gameState;
            }],
            execute: function execute() {
              var d, m, v, f, T, y, w, g, D;

              a._RF.push({}, "2d312m7p7ZLo42dM9n6XDMo", "LeverController", void 0);

              var x = r.ccclass,
                  b = r.property;
              t("LeverController", (d = x("LeverController"), m = b(s), v = b(s), f = b(s), d((w = i((y = function (t) {
                function i() {
                  for (var i, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];

                  return i = t.call.apply(t, [this].concat(a)) || this, e(i, "hand", w, o(i)), e(i, "lever", g, o(i)), e(i, "platform", D, o(i)), i.minY = void 0, i.maxY = void 0, i.isTouched = !1, i.animationDuration = 1, i.animationDelay = 1.5, i.leverTween = null, i.handTween = null, i;
                }

                n(i, t);
                var a = i.prototype;
                return a.onLoad = function () {
                  this.node.on(s.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(s.EventType.TOUCH_END, this.onTouchEnd, this);
                }, a.start = function () {
                  var t = this.node.parent.getComponent(h).height,
                      i = this.lever.getComponent(h).height;
                  this.minY = -t / 2 + i / 2, this.maxY = t / 2 - i / 2, this.startAnimation();
                }, a.startAnimation = function () {
                  this.hand && this.lever && (this.hand.active = !this.isTouched, this.loopAnimation());
                }, a.loopAnimation = function () {
                  var t = this;

                  if (!this.isTouched) {
                    var i = function i(_i, n) {
                      return void 0 === n && (n = _i), l(_i).to(t.animationDuration, {
                        position: new u(_i.position.x, t.maxY, 0)
                      }).to(t.animationDuration, {
                        position: new u(_i.position.x, t.minY, 0)
                      }).to(t.animationDuration, {
                        position: new u(_i.position.x, n.position.y, 0)
                      });
                    };

                    this.leverTween = i(this.lever).delay(this.animationDelay).start(), i(this.hand).call(function () {
                      t.hand.active = !1;
                    }).delay(this.animationDelay).call(function () {
                      t.startAnimation();
                    }).start();
                  }
                }, a.stopAnimation = function () {
                  this.isTouched = !0, this.hand && (this.hand.active = !1), this.leverTween && (this.leverTween.stop(), this.leverTween = null);
                }, a.onTouchStart = function () {
                  this.stopAnimation(), this.isTouched = !0, p.isLeverActive = !0;
                }, a.onTouchMove = function (t) {
                  if (this.isTouched && !p.isFinished) {
                    var i = t.getDelta(),
                        n = this.node.position.clone();
                    n.y += i.y, n.y = Math.min(Math.max(n.y, this.minY), this.maxY), this.node.setPosition(n), this.updateSpeed();
                  }
                }, a.onTouchEnd = function () {}, a.updateSpeed = function () {
                  var t = p.minSpeed,
                      i = p.maxSpeed,
                      n = p.isFinished,
                      e = this.minY,
                      o = this.maxY,
                      a = (this.lever.position.y - e) / (o - e);
                  p.carSpeed = n ? 0 : t + (i - t) * a;
                }, i;
              }(c)).prototype, "hand", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), g = i(y.prototype, "lever", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), D = i(y.prototype, "platform", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), T = y)) || T));

              a._RF.pop();
            }
          };
        });
        System.register("chunks:///_virtual/main", ["./debug-view-runtime-control.ts", "./CarController.ts", "./CoinsController.ts", "./DownloadButtonController.ts", "./GameOver.ts", "./LeverController.ts", "./RoadController.ts", "./model.ts", "./state.ts"], function () {
          return {
            setters: [null, null, null, null, null, null, null, null, null],
            execute: function execute() {}
          };
        });
        System.register("chunks:///_virtual/model.ts", ["cc"], function (o) {
          var r;
          return {
            setters: [function (o) {
              r = o.cclegacy;
            }],
            execute: function execute() {
              r._RF.push({}, "1636aqha0lEzZ3RwilIXjjM", "model", void 0);

              o("NodesName", function (o) {
                return o.Car = "Car", o.BridgeBlock = "Road_Block_Wood", o.StartPlatform = "Road_platform", o.FinishPlatform = "Road_platform.001", o.BridgeDeep = "Road", o;
              }({})), o("AnimationName", function (o) {
                return o.CarDestroy = "carDestroy", o;
              }({}));

              r._RF.pop();
            }
          };
        });
        System.register("chunks:///_virtual/RoadController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./state.ts", "./model.ts"], function (e) {
          var o, n, r, t, i, a, l, c, p, d, s, u, f;
          return {
            setters: [function (e) {
              o = e.applyDecoratedDescriptor, n = e.inheritsLoose, r = e.initializerDefineProperty, t = e.assertThisInitialized;
            }, function (e) {
              i = e.cclegacy, a = e._decorator, l = e.Node, c = e.BoxCollider, p = e.RigidBody, d = e.Vec3, s = e.Component;
            }, function (e) {
              u = e.gameState;
            }, function (e) {
              f = e.NodesName;
            }],
            execute: function execute() {
              var g, m, C, y, h;

              i._RF.push({}, "7b0b9E8Tp5I94FbvTAO2LPT", "RoadController", void 0);

              var v = a.ccclass,
                  B = a.property;
              e("RoadController", (g = v("RoadController"), m = B(l), g((h = o((y = function (e) {
                function o() {
                  for (var o, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];

                  return o = e.call.apply(e, [this].concat(i)) || this, r(o, "baseBridgeBlock", h, t(o)), o;
                }

                return n(o, e), o.prototype.onLoad = function () {
                  var e = this;
                  this.node.children.filter(function (e) {
                    return e.name.includes(f.BridgeBlock);
                  }).forEach(function (o, n) {
                    var r = e.baseBridgeBlock.getComponent(c),
                        t = o.getComponent(p),
                        i = o.getComponent(c);

                    if (!t) {
                      t = o.addComponent(p);
                      var a = Math.ceil(n / 59);
                      t.type = p.Type.STATIC, t.mass = u.bridgeBlockMass / (a + 1), t.linearFactor = new d(1, 1, 1);
                      var l = new d(0, 100 * -n, 0);
                      t.applyForce(l, new d(0, 0, 0)), t.angularDamping = .5;
                    }

                    i || ((i = o.addComponent(c)).size = r.size, i.on("onCollisionEnter", function (e) {
                      if (e.otherCollider.node.name === f.Car) {
                        t.type = p.Type.DYNAMIC, e.otherCollider.node.getComponent(p).linearDampingn = 4 * n / 600 + .6;
                        var o = u.carSpeed / u.maxSpeed;
                        u.carSpeed = (u.maxSpeed - .011 * n) * o;
                      }
                    }, e));
                  });
                }, o;
              }(s)).prototype, "baseBridgeBlock", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function initializer() {
                  return null;
                }
              }), C = y)) || C));

              i._RF.pop();
            }
          };
        });
        System.register("chunks:///_virtual/state.ts", ["cc"], function (e) {
          var t;
          return {
            setters: [function (e) {
              t = e.cclegacy;
            }],
            execute: function execute() {
              t._RF.push({}, "bdec2L/cv9PYIBihoNPKYPD", "state", void 0);

              e("gameState", {
                carSpeed: 0,
                carMass: 30,
                minSpeed: 0,
                maxSpeed: 18,
                isLeverActive: !1,
                isGameStarted: !1,
                isFinished: !1,
                bridgeBlockMass: 100,
                scoreCouter: 0
              }), e("APP_STORE_URL", "https://apps.apple.com/us/app/ride-master-car-builder-game/id6449224139"), e("PLAY_STORE_URL", "https://play.google.com/store/apps/details?id=com.LuB.DeliveryConstruct&hl=en"), e("WEB_URL", "https://google.com");

              t._RF.pop();
            }
          };
        });

        (function (r) {
          r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
        })(function (mid, cid) {
          System.register(mid, [cid], function (_export, _context) {
            return {
              setters: [function (_m) {
                var _exportObj = {};

                for (var _key in _m) {
                  if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
              }],
              execute: function execute() {}
            };
          });
        }); // #endregion ORIGINAL CODE


        _export2("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=8b887a08c208ced136b9420b5ac73dc822284b34.js.map