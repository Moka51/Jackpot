(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [304], {
        1031: function(t, e, n) {
            "use strict";
            n.d(e, {
                IM: function() {
                    return i
                },
                IU: function() {
                    return a
                },
                q3: function() {
                    return s
                }
            });
            var r = n(5893);

            function s({
                symbol: t
            }) {
                return (0, r.jsxs)("div", {
                    className: "inline-flex relative items-center py-2 pr-3 pl-2 space-x-2 text-lg leading-6 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-4 bg-primary",
                    children: [(0, r.jsx)("img", {
                        alt: t,
                        className: "w-6 h-6 rounded-full",
                        height: 24,
                        src: "https://github.com/addo47/LastApeStanding/blob/master/img/logo-las.png?raw=true",
                        width: 24
                    }), (0, r.jsx)("span", {
                        className: "block font-medium truncate",
                        children: t
                    })]
                })
            }

            function a({
                style: t,
                text: e
            }) {
                return (0, r.jsx)("div", {
                    style: t,
                    className: "inline-flex relative items-center py-2 pr-3 pl-2 space-x-2 text-lg leading-6 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-4 bg-primary",
                    children: e
                })
            }

            function i({
                text: t
            }) {
                return (0, r.jsx)("div", {
                    style: {
                        whiteSpace: "pre",
                        padding: "20px"
                    },
                    className: "inline-flex relative items-center py-2 pr-3 pl-2 space-x-2 text-lg leading-6 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-4 bg-primary",
                    children: t
                })
            }
        },
        7219: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return k
                }
            });
            var r = n(1031),
                s = n(3372),
                a = n(6923),
                i = n(6658),
                l = n(8100),
                c = n(1143);
            const o = 1e4;

            function u(t) {
                const e = (0, c.Kk)(),
                    n = !!e;
                return (0, l.ZP)(n ? ["usdEquivalent", t.toString()] : null, function(t) {
                    return async (e, n) => await t.usdEquivalent(n)
                }(e), {
                    fallbackData: "0",
                    refreshInterval: o
                })
            }
            var d = n(9499),
                x = n(7294),
                f = n(9115),
                h = n(7177),
                p = n(5893);

            function m(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? m(Object(n), !0).forEach((function(e) {
                        (0, d.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            class y extends x.Component {
                constructor(t) {
                    super(t), (0, d.Z)(this, "fadeAnimation", void 0), this.fadeAnimation = new f.Z.Value(1)
                }
                componentDidMount() {
                    f.Z.loop(f.Z.sequence([f.Z.timing(this.fadeAnimation, {
                        toValue: .5,
                        duration: this.props.duration,
                        useNativeDriver: !0
                    }), f.Z.timing(this.fadeAnimation, {
                        toValue: 1,
                        duration: this.props.duration,
                        useNativeDriver: !0
                    })]), {
                        iterations: this.props.repeat_count
                    }).start()
                }
                render() {
                    return (0, p.jsx)(h.Z, {
                        style: j({}, this.props.style),
                        children: (0, p.jsx)(f.Z.View, {
                            style: {
                                opacity: this.fadeAnimation
                            },
                            children: this.props.children
                        })
                    })
                }
            }
            var b = n(1193),
                v = n(1481);
            var g = function() {
                var t;
                const e = null !== (t = (0, i.Z)((t => t.chainId))) && void 0 !== t ? t : s.HL.MAINNET,
                    n = a.gQ.LAS[e].decimals,
                    {
                        data: d
                    } = function() {
                        const t = (0, c.Kk)(),
                            e = !!t;
                        return (0, l.ZP)(e ? ["jackpotBalance"] : null, function(t) {
                            return async e => await t.getJackpot()
                        }(t), {
                            fallbackData: [0, 0],
                            refreshInterval: o
                        })
                    }();
                let x = (0, b.K)(d[0], 18, 2),
                    f = (0, b.K)(d[1], n, 2);
                const {
                    data: h
                } = u(d[0]), m = (0, b.K)(h, 18, 2), {
                    data: j
                } = function() {
                    const t = (0, c.Kk)(),
                        e = !!t;
                    return (0, l.ZP)(e ? ["jackpotBuybackAmount"] : null, function(t) {
                        return async e => await t.jackpotBuybackAmount()
                    }(t), {
                        fallbackData: [0, 0],
                        refreshInterval: o
                    })
                }();
                let g = (0, b.K)(j[0], 18, 2),
                    k = (0, b.K)(j[1], n, 2);
                const {
                    data: w
                } = u(j[0]), N = (0, b.K)(w, 18), {
                    data: O
                } = function() {
                    const t = (0, c.Kk)(),
                        e = !!t;
                    return (0, l.ZP)(e ? ["jackpotBuyerShareAmount"] : null, function(t) {
                        return async e => await t.jackpotBuyerShareAmount()
                    }(t), {
                        fallbackData: [0, 0],
                        refreshInterval: o
                    })
                }(), A = (0, b.K)(O[0], 18, 2), I = (0, b.K)(O[1], n, 2), {
                    data: B
                } = u(O[0]), D = (0, b.K)(B, 18), {
                    data: K
                } = function() {
                    const t = (0, c.Kk)(),
                        e = !!t;
                    return (0, l.ZP)(e ? ["getLastBuy"] : null, function(t) {
                        return async e => await t.getLastBuy()
                    }(t), {
                        fallbackData: ["0x0", 0],
                        refreshInterval: o
                    })
                }(), {
                    data: P
                } = function() {
                    const t = (0, c.Kk)(),
                        e = !!t;
                    return (0, l.ZP)(e ? ["jackpotTimespan"] : null, function(t) {
                        return async e => await t.jackpotTimespan()
                    }(t), {
                        fallbackData: 600,
                        refreshInterval: o
                    })
                }();
                let M = K[0],
                    Z = K[1],
                    L = "-";
                if (M == a.gQ.LAS[e].address && (M = "-"), 0 == Z) Z = "-";
                else if (Z = new Date(1e3 * K[1]), P) {
                    const t = +K[1] + +P - Math.round(Date.now() / 1e3);
                    L = t <= 0 ? "AWARDED ON NEXT TRANSACTION" : (0, v.d)(t)
                }
                const {
                    data: S
                } = function() {
                    const t = (0, c.Kk)(),
                        e = !!t;
                    return (0, l.ZP)(e ? ["jackpotHardLimit"] : null, function(t) {
                        return async e => await t.jackpotHardLimit()
                    }(t), {
                        fallbackData: 25e19,
                        refreshInterval: o
                    })
                }(), {
                    data: _
                } = u((S - d[0]).toString());
                let E;
                return E = 0 === _ ? "-" : (0, b.K)(_, 18), (0, p.jsx)("section", {
                    className: "pt-8 md:pt-16 pb-8",
                    children: (0, p.jsx)("div", {
                        className: "px-5 max-w-lg mx-auto",
                        children: (0, p.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0, p.jsx)("h1", {
                                className: "text-2xl font-semibold text-center",
                                style: {
                                    color: "white",
                                    fontFamily: "jap"
                                },
                                children: (0, p.jsxs)("div", {
                                    children: [(0, p.jsx)(y, {
                                        style: {
                                            display: "inline-block"
                                        },
                                        duration: 800,
                                        children: (0, p.jsx)("text", {
                                            children: "\ud83d\udd34"
                                        })
                                    }), "\xa0Krypto Puppy Jackpot Fund"]
                                })
                            }), (0, p.jsxs)("h2", {
                                className: "text-2xl font-semibold text-center",
                                style: {
                                    color: "white"
                                },
                                children: [(0, p.jsx)("div", {
                                    children: "$".concat(m)
                                }), (0, p.jsx)("br", {}), (0, p.jsx)("div", {
                                    children: "\u23f3Time Left"
                                }), (0, p.jsx)("div", {
                                    children: L
                                })]
                            }), (0, p.jsxs)("div", {
                                className: "text-2xl font-semibold text-center flex-2",
                                style: {
                                    color: "white"
                                },
                                children: [(0, p.jsx)(r.IM, {
                                    text: "BNB\n".concat(x)
                                }), (0, p.jsx)(r.IM, {
                                    text: "Krypto\n".concat(f)
                                })]
                            }), (0, p.jsxs)("h1", {
                                className: "text-2xl font-semibold text-center",
                                style: {
                                    color: "white",
                                    fontFamily: "jap"
                                },
                                children: [(0, p.jsx)(y, {
                                    style: {
                                        display: "inline-block"
                                    },
                                    duration: 800,
                                    children: (0, p.jsx)("text", {
                                        children: "\ud83d\udd34"
                                    })
                                }), "\xa0Next Winner's Share"]
                            }), (0, p.jsx)("h2", {
                                className: "text-2xl font-semibold text-center",
                                style: {
                                    color: "white"
                                },
                                children: (0, p.jsx)("div", {
                                    children: "$".concat(D)
                                })
                            }), (0, p.jsxs)("div", {
                                className: "text-2xl font-semibold text-center flex-2",
                                style: {
                                    color: "white"
                                },
                                children: [(0, p.jsx)(r.IM, {
                                    text: "BNB\n".concat(A)
                                }), (0, p.jsx)(r.IM, {
                                    text: "Krypto\n".concat(I)
                                })]
                            }), (0, p.jsxs)("h1", {
                                className: "text-2xl font-semibold text-center",
                                style: {
                                    color: "white",
                                    fontFamily: "jap"
                                },
                                children: [(0, p.jsx)(y, {
                                    style: {
                                        display: "inline-block"
                                    },
                                    duration: 800,
                                    children: (0, p.jsx)("text", {
                                        children: "\ud83d\udd34"
                                    })
                                }), "\xa0Buyback's Share"]
                            }), (0, p.jsx)("h2", {
                                className: "text-2xl font-semibold text-center",
                                style: {
                                    color: "white"
                                },
                                children: (0, p.jsx)("div", {
                                    children: "$".concat(N)
                                })
                            }), (0, p.jsxs)("div", {
                                className: "text-2xl font-semibold text-center flex-2",
                                style: {
                                    color: "white"
                                },
                                children: [(0, p.jsx)(r.IM, {
                                    text: "BNB\n".concat(g)
                                }), (0, p.jsx)(r.IM, {
                                    text: "Krypto\n".concat(k)
                                })]
                            }), (0, p.jsxs)("h1", {
                                className: "text-2xl font-semibold text-center",
                                style: {
                                    color: "white",
                                    fontFamily: "jap"
                                },
                                children: [(0, p.jsx)(y, {
                                    style: {
                                        display: "inline-block"
                                    },
                                    duration: 800,
                                    children: (0, p.jsx)("text", {
                                        children: "\ud83d\udd34"
                                    })
                                }), "\xa0Last Buy"]
                            }), (0, p.jsxs)("div", {
                                className: "text-2xl font-semibold text-center flex-2",
                                style: {
                                    color: "white"
                                },
                                children: [(0, p.jsx)(r.IM, {
                                    text: "Last Buyer (Potential Jackpot Winner)\n".concat(M)
                                }), (0, p.jsx)(r.IM, {
                                    text: "Last Buy @\n".concat(Z)
                                })]
                            }), (0, p.jsxs)("h1", {
                                className: "text-2xl font-semibold text-center",
                                style: {
                                    color: "white",
                                    fontFamily: "jap"
                                },
                                children: [(0, p.jsx)(y, {
                                    style: {
                                        display: "inline-block"
                                    },
                                    duration: 800,
                                    children: (0, p.jsx)("text", {
                                        children: "" 
                                    })
                                }), ""]
                            }), (0, p.jsx)("h2", {
                                className: "text-2xl font-semibold text-center",
                                style: {
                                    color: "white"
                                },
                                children: (0, p.jsx)("div", {
                                    children: ""
                                })
                            })]
                        })
                    })
                })
            };
            var k = function() {
                return (0, p.jsx)(g, {})
            }
        },
        1193: function(t, e, n) {
            "use strict";
            n.d(e, {
                K: function() {
                    return s
                }
            });
            var r = n(5553);

            function s(t, e = 9, n = 2) {
                return t ? (0, r.Fn)(Number((0, r.bM)(t, e)).toFixed(n)) : Number(0).toFixed(n)
            }
        },
        1481: function(t, e, n) {
            "use strict";
            n.d(e, {
                d: function() {
                    return r
                }
            });
            const r = t => {
                for (var e = [
                        [Math.floor(t / 31536e3), "years"],
                        [Math.floor(t % 31536e3 / 86400), "days"],
                        [Math.floor(t % 31536e3 % 86400 / 3600), "hours"],
                        [Math.floor(t % 31536e3 % 86400 % 3600 / 60), "minutes"],
                        [(t % 31536e3 % 86400 % 3600 % 60).toFixed(1), "seconds"]
                    ], n = "", r = 0, s = e.length; r < s; r++) 0 !== e[r][0] && (n += " " + e[r][0] + " " + (1 === e[r][0] ? e[r][1].substr(0, e[r][1].length - 1) : e[r][1]));
                return n.trim()
            }
        },
        9820: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/jackpot", function() {
                return n(7219)
            }])
        }
    },
    function(t) {
        t.O(0, [115, 774, 888, 179], (function() {
            return e = 9820, t(t.s = e);
            var e
        }));
        var e = t.O();
        _N_E = e
    }
]);