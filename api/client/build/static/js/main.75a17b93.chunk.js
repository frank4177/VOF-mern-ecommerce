(this["webpackJsonpecommerce-site"] =
  this["webpackJsonpecommerce-site"] || []).push([
  [0],
  {
    135: function (e, t, c) {},
    136: function (e, t, c) {},
    137: function (e, t, c) {},
    138: function (e, t, c) {},
    139: function (e, t, c) {},
    140: function (e, t, c) {},
    141: function (e, t, c) {},
    142: function (e, t, c) {},
    143: function (e, t, c) {},
    144: function (e, t, c) {},
    149: function (e, t, c) {
      "use strict";
      c.r(t);
      var s = c(2),
        a = c(57),
        n = c.n(a),
        r = (c(96), c(1)),
        i = c.n(r),
        l = c(5),
        j = c(9),
        o = c(171),
        d = c(168),
        b = c(172),
        u = c(174),
        O = c(175),
        h = c(176),
        x = c(177),
        m = (c(70), c(173)),
        p = c(170),
        v = c(165),
        f = c(167),
        g = c(0),
        N = [
          {
            title: "Men Fashion",
            Menus: [
              { id: 1, subTitile: "Oxfords", cat: "oxfords" },
              { id: 2, subTitile: "Sneakers", cat: "sneakers" },
              { id: 2, subTitile: "Steel Toe", cat: "men-steel-toe" },
              { cat: "Watches", path: "/shoes" },
              { cat: "Sunglasses", path: "/shoes" },
            ],
          },
          {
            title: "Women Fashion",
            Menus: [
              { subTitile: "Heeled", cat: "women-heels" },
              { subTitile: "Flats", cat: "flats" },
              { subTitile: "Rain Boots", cat: "women-rain-boot" },
              { cat: "Watches", path: "/shoes" },
              { cat: "Sunglasses", path: "/shoes" },
            ],
          },
        ],
        y =
          (v.a,
          v.a,
          v.a,
          v.a,
          f.a,
          v.a,
          v.a,
          v.a,
          v.a,
          f.a,
          v.a,
          v.a,
          v.a,
          v.a,
          f.a,
          v.a,
          v.a,
          v.a,
          v.a,
          f.a,
          c(18)),
        w = function (e) {
          var t = e.item,
            c = Object(s.useState)(!1),
            a = Object(j.a)(c, 2),
            n = a[0],
            r = a[1],
            i = function () {
              return r(!n);
            };
          return Object(g.jsxs)("div", {
            onClick: function () {
              return i();
            },
            className: "juza",
            children: [
              Object(g.jsxs)("div", {
                className: "jj",
                children: [t.title, " ", Object(g.jsx)(d.a, {})],
              }),
              n &&
                t.Menus.map(function (e, t) {
                  return Object(g.jsx)(
                    y.b,
                    {
                      to: "products/".concat(e.cat),
                      item: e,
                      className: "kki",
                      onClick: i,
                      children: e.subTitile,
                    },
                    t
                  );
                }),
            ],
          });
        },
        S = c(17),
        C = c(16),
        k = (c(71), c(169)),
        T = c(44),
        F = Object(T.b)({
          name: "cart",
          initialState: { products: [], quantity: 0, total: 0 },
          reducers: {
            addProduct: function (e, t) {
              (e.quantity += 1),
                e.products.push(t.payload),
                (e.total += t.payload.price * t.payload.quantity);
            },
            removeProduct: function (e, t) {
              (e.quantity -= 1),
                e.products.pop(t.payload),
                (e.total -= t.payload.price * t.payload.quantity);
            },
          },
        }),
        I = F.actions.addProduct,
        R = F.actions.removeProduct,
        A = F.reducer,
        P = c(33),
        z = c.n(P),
        L = "https://vofshoes.herokuapp.com/api",
        E = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
          .currentUser.tokenkey,
        D = z.a.create({ baseURL: L }),
        W =
          (z.a.create({ baseURL: L, headers: { token: "Bearer ".concat(E) } }),
          c(14)),
        B = function (e) {
          var t = e.item,
            c = Object(s.useState)([]),
            a = Object(j.a)(c, 2),
            n = (a[0], a[1], Object(S.b)(), Object(s.useState)({})),
            r = Object(j.a)(n, 2),
            o = (r[0], r[1]),
            d = Object(W.f)().pathname.split("/")[2];
          Object(s.useEffect)(
            function () {
              var e = (function () {
                var e = Object(l.a)(
                  i.a.mark(function e() {
                    var t;
                    return i.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                D.get("/products/find/" + d)
                              );
                            case 3:
                              (t = e.sent), o(t.data.product), (e.next = 9);
                              break;
                            case 7:
                              (e.prev = 7), (e.t0 = e.catch(0));
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            },
            [d]
          );
          return Object(g.jsxs)("div", {
            className: "feature-images",
            children: [
              Object(g.jsx)("img", { src: t.image, alt: "" }),
              Object(g.jsx)("div", {
                className: "featureCat-icons",
                children: Object(g.jsx)(y.b, {
                  to: "/product/".concat(t._id),
                  children: Object(g.jsx)(k.a, { className: "featureIcons" }),
                }),
              }),
              Object(g.jsxs)("div", {
                className: "productDesc",
                children: [
                  Object(g.jsx)("h2", { children: t.title }),
                  t.rating,
                  Object(g.jsxs)("h2", { children: [" \u20a6 ", t.price] }),
                ],
              }),
            ],
          });
        },
        M = function () {
          var e = Object(S.c)(function (e) {
              return e.cart.quantity;
            }),
            t = Object(s.useState)([]),
            c = Object(j.a)(t, 2),
            a = (c[0], c[1]);
          Object(s.useEffect)(function () {
            var e = (function () {
              var e = Object(l.a)(
                i.a.mark(function e() {
                  var t;
                  return i.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              z.a.get(
                                "https://vofshoes.herokuapp.com/api/Products?title"
                              )
                            );
                          case 3:
                            (t = e.sent), a(t.data.products), (e.next = 9);
                            break;
                          case 7:
                            (e.prev = 7), (e.t0 = e.catch(0));
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e();
          }, []);
          var n = Object(p.a)(function (e) {
              return {
                badge: {
                  backgroundColor: "yellowgreen",
                  color: "white",
                  fontWeight: 500,
                  fontSize: "1rem",
                },
              };
            })(),
            r = Object(s.useState)(!1),
            v = Object(j.a)(r, 2),
            f = v[0],
            C = v[1],
            k = function () {
              return C(!f);
            };
          return Object(g.jsx)(g.Fragment, {
            children: Object(g.jsxs)("div", {
              className: "containner",
              children: [
                Object(g.jsxs)("div", {
                  className: "navbar",
                  children: [
                    Object(g.jsx)("div", {
                      className: "menu-bars",
                      children: Object(g.jsx)(o.a, {
                        className: "icon",
                        onClick: k,
                      }),
                    }),
                    Object(g.jsx)(y.b, {
                      to: "/home",
                      className: "logo-container",
                      children: Object(g.jsx)("h1", {
                        className: "logo",
                        children: "VOF",
                      }),
                    }),
                    Object(g.jsxs)("div", {
                      className: "menu",
                      children: [
                        Object(g.jsxs)("div", {
                          className: "li",
                          children: [
                            Object(g.jsxs)("div", {
                              href: "",
                              children: ["Categories ", Object(g.jsx)(d.a, {})],
                            }),
                            Object(g.jsxs)("div", {
                              className: "subMenu",
                              children: [
                                Object(g.jsxs)("div", {
                                  className: "li",
                                  children: [
                                    Object(g.jsxs)("a", {
                                      href: "",
                                      children: [
                                        "Men Fashion ",
                                        Object(g.jsx)(b.a, {}),
                                      ],
                                    }),
                                    Object(g.jsxs)("div", {
                                      className: "subMenu2",
                                      children: [
                                        Object(g.jsx)("div", {
                                          className: "li",
                                          children: Object(g.jsx)(y.b, {
                                            to: "/products/oxfords",
                                            children: "Oxfords",
                                          }),
                                        }),
                                        Object(g.jsx)("div", {
                                          className: "li",
                                          children: Object(g.jsx)(y.b, {
                                            to: "/products/sneakers",
                                            children: "Sneakers",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(g.jsxs)("div", {
                                  className: "li",
                                  children: [
                                    Object(g.jsxs)("a", {
                                      href: "",
                                      children: [
                                        "Women Fashion ",
                                        Object(g.jsx)(b.a, {}),
                                      ],
                                    }),
                                    Object(g.jsxs)("div", {
                                      className: "subMenu22",
                                      children: [
                                        Object(g.jsx)("div", {
                                          className: "li",
                                          children: Object(g.jsx)(y.b, {
                                            to: "/products/women-heels",
                                            children: "Heeled",
                                          }),
                                        }),
                                        Object(g.jsx)("div", {
                                          className: "li",
                                          children: Object(g.jsx)(y.b, {
                                            to: "/products/women-heels",
                                            children: "Flats",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(g.jsx)("div", {
                                  className: "li",
                                  children: Object(g.jsx)("a", {
                                    href: "",
                                    children: "kids Fashion",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(g.jsx)(y.b, {
                          to: "/signup",
                          className: "li",
                          children: "Sign Up",
                        }),
                        Object(g.jsx)(y.b, {
                          to: "/login",
                          className: "li",
                          children: "Login",
                        }),
                      ],
                    }),
                    Object(g.jsx)("div", {
                      className: "huo",
                      children: Object(g.jsxs)(y.b, {
                        to: "/cart",
                        className: "cart-wrap",
                        children: [
                          Object(g.jsx)(m.a, {
                            badgeContent: e,
                            classes: { badge: n.badge },
                            className: "badge",
                            children: Object(g.jsx)(u.a, {
                              color: "action",
                              className: "cartColor",
                            }),
                          }),
                          Object(g.jsx)("div", {
                            className: "cart-text",
                            children: "Cart",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                Object(g.jsx)("div", {
                  className: f ? "nav-menu active" : "nav-menu",
                  children: Object(g.jsxs)("ul", {
                    className: "nav-menu-items",
                    children: [
                      Object(g.jsx)("li", {
                        className: "navbar-toggle",
                        children: Object(g.jsx)("div", {
                          className: "menu-barss",
                          children: Object(g.jsx)(O.a, {
                            className: "icon",
                            onClick: k,
                          }),
                        }),
                      }),
                      Object(g.jsxs)("ul", {
                        className: "mob-menu",
                        children: [
                          Object(g.jsx)("li", {
                            children: Object(g.jsxs)(y.b, {
                              to: "/login",
                              className: "nav-text",
                              children: [
                                Object(g.jsx)(h.a, {
                                  style: {
                                    marginRight: "10px",
                                    fontSize: "2rem",
                                  },
                                }),
                                "login",
                              ],
                            }),
                          }),
                          Object(g.jsx)("li", {
                            children: Object(g.jsxs)(y.b, {
                              to: "/signUp",
                              className: "nav-text",
                              children: [
                                Object(g.jsx)(x.a, {
                                  style: {
                                    marginRight: "10px",
                                    fontSize: "2rem",
                                  },
                                }),
                                "sign up",
                              ],
                            }),
                          }),
                          Object(g.jsx)("li", {
                            className: "cat",
                            children: Object(g.jsx)("a", {
                              href: "",
                              children: "categories",
                            }),
                          }),
                          N.map(function (e, t) {
                            return Object(g.jsx)(w, { item: e }, t);
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        U = c(60),
        G = c.n(U);
      c(135), c.p, c.p, c.p;
      function Y(e) {
        var t = e.className,
          c = e.style,
          s = e.onClick;
        return Object(g.jsx)("div", {
          className: t,
          style: Object(C.a)(
            Object(C.a)({}, c),
            {},
            {
              display: "flex",
              marginRight: 30,
              background: "grey",
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }
          ),
          onClick: s,
        });
      }
      function X(e) {
        var t = e.className,
          c = e.style,
          s = e.onClick;
        return Object(g.jsx)("div", {
          className: t,
          style: Object(C.a)(
            Object(C.a)({}, c),
            {},
            {
              display: "flex",
              marginLeft: 30,
              background: "grey",
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }
          ),
          onClick: s,
        });
      }
      var _ = function () {
        var e = {
            dots: !0,
            fade: !0,
            infinite: !0,
            autoplay: !0,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: Object(g.jsx)(Y, {}),
            prevArrow: Object(g.jsx)(X, {}),
          },
          t = Object(s.useState)(!1),
          c = Object(j.a)(t, 2);
        return (
          c[0],
          c[1],
          Object(g.jsxs)("div", {
            className: "container",
            children: [
              Object(g.jsx)("div", {
                className: "showcase",
                children: Object(g.jsxs)(
                  G.a,
                  Object(C.a)(
                    Object(C.a)({}, e),
                    {},
                    {
                      children: [
                        Object(g.jsx)("div", {
                          children: Object(g.jsx)("div", {
                            className: "image",
                            children: Object(g.jsx)("img", {
                              src: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm0yMDhiYXRjaDgtMjUxLW5hcC10d2l0dGVyaGVhZGVyLTAxLmpwZw.jpg?s=4xTP6qGTJYm0eW5jpgWLBGFmUFKcMVizNgKoLVM35x8",
                              alt: "j",
                            }),
                          }),
                        }),
                        Object(g.jsx)("div", {
                          children: Object(g.jsx)("div", {
                            className: "image",
                            children: Object(g.jsx)("img", {
                              src: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm0yMDhiYXRjaDE0LXdhbi0wNS1sLmpwZw.jpg?s=mGNc-pFOoHDAXQ-TbLIrC0ems3vEYiRjeSZ2W1IMiJY",
                              alt: "j",
                            }),
                          }),
                        }),
                      ],
                    }
                  )
                ),
              }),
              Object(g.jsx)("div", {
                className: "mobileShowCase",
                children: Object(g.jsxs)("div", {
                  className: "mobileShowCase-container",
                  children: [
                    Object(g.jsxs)("h1", {
                      children: [
                        Object(g.jsx)("span", {
                          style: { color: "orangered" },
                          children: "40%",
                        }),
                        " SALE OFF",
                      ],
                    }),
                    Object(g.jsx)("h1", { children: "END OF YEAR DEALS" }),
                    Object(g.jsx)("button", { children: "SHOP NOW" }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      c(136);
      function q(e) {
        var t = e.className,
          c = e.style,
          s = e.onClick;
        return Object(g.jsx)("div", {
          className: t,
          style: Object(C.a)(
            Object(C.a)({}, c),
            {},
            {
              display: "flex",
              marginRight: 30,
              background: "rgba(255, 166, 0, 0.644)",
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }
          ),
          onClick: s,
        });
      }
      function V(e) {
        var t = e.className,
          c = e.style,
          s = e.onClick;
        return Object(g.jsx)("div", {
          className: t,
          style: Object(C.a)(
            Object(C.a)({}, c),
            {},
            {
              display: "flex",
              marginLeft: 30,
              background: "rgba(255, 166, 0, 0.644)",
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }
          ),
          onClick: s,
        });
      }
      var J,
        H,
        K = function () {
          var e = Object(s.useState)([]),
            t = Object(j.a)(e, 2),
            c = (t[0], t[1], Object(S.b)(), Object(s.useState)([])),
            a = Object(j.a)(c, 2),
            n = a[0],
            r = a[1];
          Object(s.useEffect)(function () {
            var e = (function () {
              var e = Object(l.a)(
                i.a.mark(function e() {
                  var t;
                  return i.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              z.a.get(
                                "https://vofshoes.herokuapp.com/api/Products"
                              )
                            );
                          case 3:
                            (t = e.sent), r(t.data.products), (e.next = 9);
                            break;
                          case 7:
                            (e.prev = 7), (e.t0 = e.catch(0));
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e();
          }, []);
          var o = {
            dots: !1,
            infinite: !0,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: !0,
            autoplaySpeed: 11e3,
            nextArrow: Object(g.jsx)(q, {}),
            prevArrow: Object(g.jsx)(V, {}),
            pauseOnHover: !0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: !0,
                  dots: !0,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
            ],
          };
          return Object(g.jsxs)("div", {
            className: "hot-container",
            children: [
              Object(g.jsxs)("h1", {
                children: [
                  "Latest ",
                  Object(g.jsx)("span", {
                    style: { color: "orangered" },
                    children: "Shoes",
                  }),
                ],
              }),
              Object(g.jsx)(
                G.a,
                Object(C.a)(
                  Object(C.a)({}, o),
                  {},
                  {
                    children: n.slice(0, 8).map(function (e) {
                      return Object(g.jsx)(
                        "div",
                        {
                          item: e,
                          children: Object(g.jsxs)("div", {
                            className: "Hot-images",
                            children: [
                              Object(g.jsx)("img", { src: e.image, alt: "" }),
                              Object(g.jsx)("div", {
                                className: "hotdeals-icons",
                                children: Object(g.jsx)(y.b, {
                                  to: "/product/".concat(e._id),
                                  children: Object(g.jsx)(k.a, {
                                    className: "hotIcons",
                                  }),
                                }),
                              }),
                              Object(g.jsx)(y.b, {
                                to: "/product/61f1b0543fb87649c84b008a",
                                children: Object(g.jsx)("h2", {
                                  children: e.title,
                                }),
                              }),
                              Object(g.jsxs)("div", {
                                children: [
                                  Object(g.jsx)(v.a, {
                                    style: {
                                      color: "gold",
                                      fontSize: "2.2rem",
                                    },
                                  }),
                                  Object(g.jsx)(v.a, {
                                    style: {
                                      color: "gold",
                                      fontSize: "2.2rem",
                                    },
                                  }),
                                  Object(g.jsx)(v.a, {
                                    style: {
                                      color: "gold",
                                      fontSize: "2.2rem",
                                    },
                                  }),
                                  Object(g.jsx)(v.a, {
                                    style: {
                                      color: "gold",
                                      fontSize: "2.2rem",
                                    },
                                  }),
                                  Object(g.jsx)(f.a, {
                                    style: {
                                      color: "gold",
                                      fontSize: "2.2rem",
                                    },
                                  }),
                                ],
                              }),
                              Object(g.jsx)("h2", { children: e.price }),
                            ],
                          }),
                        },
                        e.id
                      );
                    }),
                  }
                )
              ),
            ],
          });
        },
        Z = c(178),
        Q = (c(137), c(47)),
        $ =
          (c(81),
          Q.a
            .initializeApp({
              apiKey: "AIzaSyDfwEP_Ux2h3UQgxAKztKX_dy47w24K2dI",
              authDomain: "full-commerce-newsletter.firebaseapp.com",
              projectId: "full-commerce-newsletter",
              storageBucket: "full-commerce-newsletter.appspot.com",
              messagingSenderId: "286985967697",
              appId: "1:286985967697:web:81c932ad2a649bbfab8070",
            })
            .firestore()),
        ee = function () {
          var e = Object(s.useState)(""),
            t = Object(j.a)(e, 2),
            c = t[0],
            a = t[1],
            n = Object(s.useState)(""),
            r = Object(j.a)(n, 2),
            i = r[0],
            l = r[1];
          return Object(g.jsxs)("div", {
            className: "newsLetter-container",
            children: [
              Object(g.jsx)("h1", { children: "Newsletter" }),
              Object(g.jsx)("div", {
                className: "description",
                children: "Get timely updates of your favorite products",
              }),
              Object(g.jsxs)("form", {
                action: "",
                className: "searchForm",
                children: [
                  Object(g.jsx)("input", {
                    type: "email",
                    className: "searchBox",
                    placeholder: "Your email",
                    onChange: function (e) {
                      a(e.target.value);
                    },
                    value: c,
                  }),
                  Object(g.jsx)(Z.a, {
                    className: "searchLogo",
                    onClick: function (e) {
                      e.preventDefault(),
                        c &&
                          ($.collection("emails").add({
                            email: c,
                            time: Q.a.firestore.FieldValue.serverTimestamp(),
                          }),
                          a(""),
                          l("Thank you for subscribing!"),
                          setTimeout(function () {
                            l("");
                          }, 3e3));
                    },
                  }),
                ],
              }),
              i && Object(g.jsx)("h2", { children: i }),
            ],
          });
        },
        te = (c(138), c(179)),
        ce = c(180),
        se = c(181),
        ae = c(182),
        ne = c(183),
        re = c(184),
        ie = c(185),
        le = c(186),
        je = c.p + "static/media/credit_card_logos1.ce498c3e.jpg",
        oe = function () {
          return Object(g.jsxs)(g.Fragment, {
            children: [
              Object(g.jsxs)("div", {
                className: "footer-container",
                children: [
                  Object(g.jsxs)("div", {
                    className: "vof",
                    children: [
                      Object(g.jsx)("h1", {
                        style: { color: "orangered" },
                        children: "VOF",
                      }),
                      Object(g.jsx)("p", {
                        children:
                          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nesciunt, soluta modi ut mollitia illum inventore ",
                      }),
                      Object(g.jsxs)("div", {
                        className: "icons-container",
                        children: [
                          Object(g.jsx)(te.a, {
                            className: "icons",
                            style: { color: "blue" },
                          }),
                          Object(g.jsx)(ce.a, {
                            className: "icons",
                            style: { color: "red" },
                          }),
                          Object(g.jsx)(se.a, {
                            className: "icons",
                            style: { color: "skyblue" },
                          }),
                          Object(g.jsx)(ae.a, {
                            className: "icons",
                            style: { color: "red" },
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(g.jsxs)("div", {
                    className: "my-acct",
                    children: [
                      Object(g.jsx)("div", {
                        className: "desc",
                        children: "My Account",
                      }),
                      Object(g.jsxs)("ul", {
                        className: "my-acct-menus",
                        children: [
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(ne.a, {
                                className: "arrowForward",
                              }),
                              " ",
                              Object(g.jsx)("span", { children: "My Account" }),
                            ],
                          }),
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(ne.a, {
                                className: "arrowForward",
                              }),
                              Object(g.jsx)("span", {
                                children: "Order Tracking",
                              }),
                            ],
                          }),
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(ne.a, {
                                className: "arrowForward",
                              }),
                              Object(g.jsx)("span", { children: "Wishilist" }),
                            ],
                          }),
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(ne.a, {
                                className: "arrowForward",
                              }),
                              Object(g.jsx)("span", {
                                children: "Men Fashion",
                              }),
                            ],
                          }),
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(ne.a, {
                                className: "arrowForward",
                              }),
                              Object(g.jsx)("span", {
                                children: "Women Fashion",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(g.jsxs)("div", {
                    className: "info",
                    children: [
                      Object(g.jsx)("div", {
                        className: "desc",
                        children: "Information",
                      }),
                      Object(g.jsxs)("ul", {
                        className: "my-info-menus",
                        children: [
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(ne.a, {
                                className: "arrowForward",
                              }),
                              Object(g.jsx)("span", { children: "Return" }),
                            ],
                          }),
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(ne.a, {
                                className: "arrowForward",
                              }),
                              Object(g.jsx)("span", { children: "Affiliate" }),
                            ],
                          }),
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(ne.a, {
                                className: "arrowForward",
                              }),
                              Object(g.jsx)("span", {
                                children: "Privacy Policy",
                              }),
                            ],
                          }),
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(ne.a, {
                                className: "arrowForward",
                              }),
                              Object(g.jsx)("span", {
                                children: "Terms & Conditions",
                              }),
                            ],
                          }),
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(ne.a, {
                                className: "arrowForward",
                              }),
                              Object(g.jsx)("span", { children: "Contact Us" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(g.jsxs)("div", {
                    className: "contact",
                    children: [
                      Object(g.jsx)("div", {
                        className: "desc",
                        children: "Contact",
                      }),
                      Object(g.jsxs)("ul", {
                        className: "my-contact-menus",
                        children: [
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(re.a, {
                                style: { color: "ora" },
                                className: "arrowForward",
                              }),
                              " No. 622 lio Cresc, Tia Rejni.",
                            ],
                          }),
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(ie.a, {
                                className: "arrowForward",
                              }),
                              " +234 5676 6754 76",
                            ],
                          }),
                          Object(g.jsxs)("li", {
                            children: [
                              Object(g.jsx)(le.a, {
                                className: "arrowForward",
                              }),
                              " contact@vof.com",
                            ],
                          }),
                          Object(g.jsx)("div", {
                            className: "payment-icons",
                            children: Object(g.jsx)("img", {
                              src: je,
                              alt: "",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(g.jsx)("div", {
                className: "copyright",
                children: Object(g.jsx)("h3", {
                  children: "\u24b8 2021 All Rights Reserved VOF.COM",
                }),
              }),
            ],
          });
        },
        de = c(22),
        be = (c.p, c(13)),
        ue =
          (c(139),
          function () {
            var e = Object(W.f)().pathname.split("/")[2],
              t = Object(s.useState)({}),
              c = Object(j.a)(t, 2),
              a = c[0],
              n = c[1],
              r = Object(s.useState)("newest"),
              i = Object(j.a)(r, 2),
              l = i[0],
              o = i[1],
              d = function (e) {
                var t = e.target.value;
                n(
                  Object(C.a)(
                    Object(C.a)({}, a),
                    {},
                    Object(be.a)({}, e.target.name, t)
                  )
                );
              };
            return Object(g.jsxs)("div", {
              children: [
                Object(g.jsx)(M, {}),
                Object(g.jsx)("h1", { className: "dresses" }),
                Object(g.jsxs)("div", {
                  className: "filterContainer",
                  children: [
                    Object(g.jsxs)("div", {
                      className: "filter",
                      children: [
                        Object(g.jsx)("div", {
                          className: "filterText",
                          children: "Filter Products:",
                        }),
                        Object(g.jsxs)("select", {
                          name: "color",
                          id: "",
                          onChange: d,
                          children: [
                            Object(g.jsx)("option", {
                              value: "",
                              selected: !0,
                              disabled: !0,
                              children: "Color",
                            }),
                            Object(g.jsx)("option", {
                              value: "White",
                              children: "White",
                            }),
                            Object(g.jsx)("option", {
                              value: "Black",
                              children: "Black",
                            }),
                            Object(g.jsx)("option", {
                              value: "Brown",
                              children: "Brown",
                            }),
                            Object(g.jsx)("option", {
                              value: "Gray",
                              children: "Gray",
                            }),
                            Object(g.jsx)("option", {
                              value: "Green",
                              children: "Green",
                            }),
                            Object(g.jsx)("option", {
                              value: "Red",
                              children: "Red",
                            }),
                          ],
                        }),
                        Object(g.jsxs)("select", {
                          name: "size",
                          id: "",
                          onChange: d,
                          children: [
                            Object(g.jsx)("option", {
                              value: "",
                              selected: !0,
                              disabled: !0,
                              children: "Size",
                            }),
                            Object(g.jsx)("option", {
                              value: "S",
                              children: "S",
                            }),
                            Object(g.jsx)("option", {
                              value: "M",
                              children: "M",
                            }),
                            Object(g.jsx)("option", {
                              value: "L",
                              children: "L",
                            }),
                            Object(g.jsx)("option", {
                              value: "XL",
                              children: "XL",
                            }),
                          ],
                        }),
                        Object(g.jsxs)("select", {
                          name: "brand",
                          id: "",
                          onChange: d,
                          children: [
                            Object(g.jsx)("option", {
                              value: "brands",
                              selected: !0,
                              disabled: !0,
                              children: "Brand",
                            }),
                            Object(g.jsx)("option", {
                              value: "Nike",
                              children: "Nike",
                            }),
                            Object(g.jsx)("option", {
                              value: "Reebok",
                              children: "Reebok",
                            }),
                            Object(g.jsx)("option", {
                              value: "Lara",
                              children: "Lara",
                            }),
                            Object(g.jsx)("option", {
                              value: "Brogues",
                              children: "Brogues",
                            }),
                            Object(g.jsx)("option", {
                              value: "Stacy Adams",
                              children: "Stacy Adams ",
                            }),
                            Object(g.jsx)("option", {
                              value: "Rossy",
                              children: "Rossy",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(g.jsxs)("div", {
                      className: "filter",
                      children: [
                        Object(g.jsx)("div", {
                          className: "filterText",
                          children: "Sort Products:",
                        }),
                        Object(g.jsxs)("select", {
                          onChange: function (e) {
                            return o(e.target.value);
                          },
                          children: [
                            Object(g.jsx)("option", {
                              value: "newest",
                              children: "Newest",
                            }),
                            Object(g.jsx)("option", {
                              value: "asc",
                              children: "Price (asc)",
                            }),
                            Object(g.jsx)("option", {
                              value: "desc",
                              children: "Price (desc)",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(g.jsx)(Oe, { cat: e, filters: a, sort: l }),
                Object(g.jsx)(ee, {}),
                Object(g.jsx)(oe, {}),
              ],
            });
          }),
        Oe = function (e) {
          var t = e.cat,
            c = e.filters,
            a = e.sort,
            n = Object(s.useState)([]),
            r = Object(j.a)(n, 2),
            o = r[0],
            d = r[1],
            b = Object(s.useState)([]),
            u = Object(j.a)(b, 2),
            O = u[0],
            h = u[1],
            x = Object(s.useState)([]),
            m = Object(j.a)(x, 2),
            p = m[0],
            v = m[1];
          return (
            Object(s.useEffect)(
              function () {
                var e = (function () {
                  var e = Object(l.a)(
                    i.a.mark(function e() {
                      var c;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  z.a.get(
                                    t
                                      ? "https://vofshoes.herokuapp.com/api/Products?category=".concat(
                                          t
                                        )
                                      : "https://vofshoes.herokuapp.com/api/Products"
                                  )
                                );
                              case 3:
                                (c = e.sent), d(c.data.products), (e.next = 9);
                                break;
                              case 7:
                                (e.prev = 7), (e.t0 = e.catch(0));
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                e();
              },
              [t]
            ),
            Object(s.useEffect)(function () {
              var e = (function () {
                var e = Object(l.a)(
                  i.a.mark(function e() {
                    var t;
                    return i.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                z.a.get(
                                  "https://vofshoes.herokuapp.com/api/Products?category=sneakers"
                                )
                              );
                            case 3:
                              (t = e.sent), h(t.data.products), (e.next = 9);
                              break;
                            case 7:
                              (e.prev = 7), (e.t0 = e.catch(0));
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            }, []),
            Object(s.useEffect)(
              function () {
                t &&
                  v(
                    o.filter(function (e) {
                      return Object.entries(c).every(function (t) {
                        var c = Object(j.a)(t, 2),
                          s = c[0],
                          a = c[1];
                        return e[s].includes(a);
                      });
                    })
                  );
              },
              [o, t, c]
            ),
            Object(s.useEffect)(
              function () {
                v(
                  "newest" === a
                    ? function (e) {
                        return Object(de.a)(e).sort(function (e, t) {
                          return e.createdAt - t.createdAt;
                        });
                      }
                    : function (e) {
                        return Object(de.a)(e).sort(function (e, t) {
                          return e.price - t.price;
                        });
                      }
                );
              },
              [a]
            ),
            Object(g.jsxs)("div", {
              className: "featured-container",
              children: [
                Object(g.jsxs)("h1", {
                  children: [
                    "Featured",
                    Object(g.jsx)("span", {
                      style: { color: "orangered" },
                      children: " Collection",
                    }),
                  ],
                }),
                Object(g.jsx)("div", {
                  className: "image-container",
                  children: t
                    ? p.map(function (e) {
                        return Object(g.jsx)(B, { item: e }, e.id);
                      })
                    : O.slice(0, 8).map(function (e) {
                        return Object(g.jsx)(B, { item: e }, e.id);
                      }),
                }),
              ],
            })
          );
        },
        he = function () {
          return Object(g.jsxs)("div", {
            className: "App",
            children: [
              Object(g.jsx)(_, {}),
              Object(g.jsx)(K, {}),
              Object(g.jsx)(Oe, {}),
              Object(g.jsx)(ee, {}),
              Object(g.jsx)(oe, {}),
            ],
          });
        },
        xe = (c(140), c(141), c(187)),
        me = c(188),
        pe = function () {
          var e,
            t,
            c = Object(W.f)().pathname.split("/")[2],
            a = Object(s.useState)({}),
            n = Object(j.a)(a, 2),
            r = n[0],
            o = n[1],
            d = Object(s.useState)(1),
            b = Object(j.a)(d, 2),
            u = b[0],
            O = b[1],
            h = Object(s.useState)(""),
            x = Object(j.a)(h, 2),
            m = x[0],
            p = x[1],
            v = Object(s.useState)(""),
            f = Object(j.a)(v, 2),
            N = f[0],
            y = f[1],
            w = Object(S.b)();
          Object(s.useEffect)(
            function () {
              var e = (function () {
                var e = Object(l.a)(
                  i.a.mark(function e() {
                    var t;
                    return i.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                D.get("/products/find/" + c)
                              );
                            case 3:
                              (t = e.sent), o(t.data.product), (e.next = 9);
                              break;
                            case 7:
                              (e.prev = 7), (e.t0 = e.catch(0));
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            },
            [c]
          );
          var k = function (e) {
            "dec" === e ? u > 1 && O(u - 1) : O(u + 1);
          };
          return Object(g.jsxs)("div", {
            className: "Productcontainer",
            children: [
              Object(g.jsx)(M, {}),
              Object(g.jsxs)("div", {
                className: "wrapper",
                children: [
                  Object(g.jsx)("div", {
                    className: "ProductImageContainer",
                    children: Object(g.jsx)("img", { src: r.image, alt: "" }),
                  }),
                  Object(g.jsxs)("div", {
                    className: "InfoContainer",
                    children: [
                      Object(g.jsx)("h1", { children: r.title }),
                      Object(g.jsxs)("p", {
                        className: "info-desc",
                        children: [r.description, "."],
                      }),
                      Object(g.jsxs)("div", {
                        className: "price",
                        children: ["\u20a6 ", r.price],
                      }),
                      Object(g.jsxs)("div", {
                        className: "ProductfilterContainer",
                        children: [
                          Object(g.jsxs)("div", {
                            className: "Productfilter",
                            children: [
                              Object(g.jsx)("div", {
                                className: "filterTitle",
                                children: "Color",
                              }),
                              null === (e = r.color) || void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    return Object(g.jsx)(
                                      "div",
                                      {
                                        className: "filterColor",
                                        color: e,
                                        onClick: function () {
                                          return p(e);
                                        },
                                      },
                                      e
                                    );
                                  }),
                            ],
                          }),
                          Object(g.jsxs)("div", {
                            className: "Productfilter",
                            children: [
                              Object(g.jsx)("div", {
                                className: "filterTitle",
                                children: "Size",
                              }),
                              Object(g.jsx)("select", {
                                className: "filterSize",
                                onChange: function (e) {
                                  return y(e.target.value);
                                },
                                children:
                                  null === (t = r.size) || void 0 === t
                                    ? void 0
                                    : t.map(function (e) {
                                        return Object(g.jsx)(
                                          "option",
                                          {
                                            className: "filterSizeOption",
                                            children: e,
                                          },
                                          e
                                        );
                                      }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(g.jsxs)("div", {
                        className: "addContainer",
                        children: [
                          Object(g.jsxs)("div", {
                            className: "amountContainer",
                            children: [
                              Object(g.jsx)(xe.a, {
                                onClick: function () {
                                  return k("dec");
                                },
                              }),
                              Object(g.jsx)("div", {
                                className: "amount",
                                children: u,
                              }),
                              Object(g.jsx)(me.a, {
                                onClick: function () {
                                  return k("inc");
                                },
                              }),
                            ],
                          }),
                          Object(g.jsx)("button", {
                            onClick: function () {
                              w(
                                I(
                                  Object(C.a)(
                                    Object(C.a)({}, r),
                                    {},
                                    { quantity: u, color: m, size: N }
                                  )
                                )
                              );
                            },
                            children: "ADD TO CART",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(g.jsx)(ee, {}),
              Object(g.jsx)(oe, {}),
            ],
          });
        },
        ve =
          (c(142),
          Object(T.b)({
            name: "user",
            initialState: { currentUser: null, isFetching: !1, error: !1 },
            reducers: {
              loginStart: function (e) {
                e.isFetching = !0;
              },
              loginSuccess: function (e, t) {
                (e.isFetching = !1), (e.currentUser = t.payload);
              },
              loginFailure: function (e) {
                (e.isFetching = !1), (e.error = !0);
              },
            },
          })),
        fe = ve.actions,
        ge = fe.loginStart,
        Ne = fe.loginSuccess,
        ye = fe.loginFailure,
        we = ve.reducer,
        Se = (function () {
          var e = Object(l.a)(
            i.a.mark(function e(t, c) {
              var s;
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t(ge()),
                          (e.prev = 1),
                          (e.next = 4),
                          D.post("signup/login", c)
                        );
                      case 4:
                        (s = e.sent), t(Ne(s.data)), (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(1)), t(ye());
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t, c) {
            return e.apply(this, arguments);
          };
        })(),
        Ce = (function () {
          var e = Object(l.a)(
            i.a.mark(function e(t, c) {
              var s;
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t(ge()),
                          (e.prev = 1),
                          (e.next = 4),
                          D.post("signup/register", c)
                        );
                      case 4:
                        (s = e.sent), t(Ne(s.data)), (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(1)), t(ye());
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t, c) {
            return e.apply(this, arguments);
          };
        })(),
        ke = function () {
          var e = Object(s.useState)(""),
            t = Object(j.a)(e, 2),
            c = t[0],
            a = t[1],
            n = Object(s.useState)(""),
            r = Object(j.a)(n, 2),
            i = r[0],
            l = r[1],
            o = Object(s.useState)(""),
            d = Object(j.a)(o, 2),
            b = d[0],
            u = d[1],
            O = Object(s.useState)(""),
            h = Object(j.a)(O, 2),
            x = h[0],
            m = h[1],
            p = Object(s.useState)(""),
            v = Object(j.a)(p, 2),
            f = v[0],
            N = v[1],
            y = Object(s.useState)(""),
            w = Object(j.a)(y, 2),
            C = w[0],
            k = w[1],
            T = Object(s.useState)(""),
            F = Object(j.a)(T, 2),
            I = F[0],
            R = F[1],
            A = Object(S.b)(),
            P = Object(S.c)(function (e) {
              return e.user;
            });
          P.isFetching, P.error;
          return Object(g.jsx)("div", {
            className: "signup-container",
            children: Object(g.jsxs)("div", {
              className: "signup-wrapper",
              children: [
                Object(g.jsx)("h1", { children: "CREATE AN ACCOUNT" }),
                Object(g.jsxs)("form", {
                  action: "",
                  children: [
                    Object(g.jsx)("input", {
                      type: "text",
                      placeholder: "name",
                      value: x,
                      onChange: function (e) {
                        return m(e.target.value);
                      },
                    }),
                    Object(g.jsx)("input", {
                      type: "text",
                      placeholder: "last name",
                      value: f,
                      onChange: function (e) {
                        return N(e.target.value);
                      },
                    }),
                    Object(g.jsx)("input", {
                      type: "text",
                      placeholder: "email",
                      value: c,
                      onChange: function (e) {
                        return a(e.target.value);
                      },
                    }),
                    Object(g.jsx)("input", {
                      type: "text",
                      placeholder: "username",
                      value: b,
                      onChange: function (e) {
                        return u(e.target.value);
                      },
                    }),
                    Object(g.jsx)("input", {
                      type: "text",
                      placeholder: "password",
                      value: i,
                      onChange: function (e) {
                        return l(e.target.value);
                      },
                    }),
                    Object(g.jsx)("input", {
                      type: "text",
                      placeholder: "phone number",
                      value: C,
                      onChange: function (e) {
                        return k(e.target.value);
                      },
                    }),
                    Object(g.jsxs)("div", {
                      className: "agreement",
                      children: [
                        "By creating an account, I consent to the processing of my personal data in accordance with the ",
                        Object(g.jsx)("b", { children: "PRIVACY POLICY" }),
                      ],
                    }),
                    Object(g.jsx)("button", {
                      onClick: function (e) {
                        e.preventDefault(),
                          Ce(A, {
                            email: c,
                            password: i,
                            userName: b,
                            firstName: x,
                            lastName: f,
                            phoneNumber: C,
                          }),
                          m(""),
                          N(""),
                          l(""),
                          a(""),
                          u(""),
                          k(""),
                          R("Thank you for Registering!"),
                          setTimeout(function () {
                            R("");
                          }, 3e3);
                      },
                      children: Object(g.jsx)("h3", { children: "Create" }),
                    }),
                  ],
                }),
                I && Object(g.jsx)("h2", { children: I }),
              ],
            }),
          });
        },
        Te = c(62),
        Fe = (c(143), c(48)),
        Ie = function () {
          var e = Object(s.useState)(""),
            t = Object(j.a)(e, 2),
            c = t[0],
            a = t[1],
            n = Object(s.useState)(""),
            r = Object(j.a)(n, 2),
            i = r[0],
            l = r[1],
            o = Object(S.b)(),
            d = Object(S.c)(function (e) {
              return e.user;
            }),
            b = d.isFetching,
            u = d.error,
            O = Fe.a.button(
              J ||
                (J = Object(Te.a)([
                  "\n    width: 40%;\n    border: none;\n    padding: 15px 20px;\n    background-color: orange;\n    color: white;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 10px;\n    &:disabled{\n        color: orange ;\n        cursor: not-allowed;\n    }\n    ",
                ]))
            );
          return Object(g.jsx)("div", {
            className: "login-container",
            children: Object(g.jsxs)("div", {
              className: "login-wrapper",
              children: [
                Object(g.jsx)("h1", { children: "SIGN IN" }),
                Object(g.jsxs)("form", {
                  action: "",
                  children: [
                    Object(g.jsx)("input", {
                      type: "email",
                      placeholder: "username",
                      value: c,
                      onChange: function (e) {
                        return a(e.target.value);
                      },
                    }),
                    Object(g.jsx)("input", {
                      placeholder: "password",
                      type: "password",
                      value: i,
                      onChange: function (e) {
                        return l(e.target.value);
                      },
                      required: !0,
                    }),
                    Object(g.jsx)(O, {
                      onClick: function (e) {
                        e.preventDefault(), Se(o, { email: c, password: i });
                      },
                      disabled: b,
                      children: "LOGIN",
                    }),
                    u &&
                      Object(g.jsx)("h3", {
                        style: { color: "red" },
                        children: "Something went wrong...",
                      }),
                    Object(g.jsx)("a", {
                      href: "",
                      children: "FORGOT PASSWORD?",
                    }),
                    Object(g.jsx)("a", {
                      href: "",
                      children: "CREATE A NEW ACCOUNT",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Re = (c(144), c.p, c(189)),
        Ae =
          (c(145),
          c(146),
          Fe.a.button(
            H ||
              (H = Object(Te.a)([
                " \n    padding: 10px;\n    font-weight: 600;\n    cursor: pointer;\n    border:",
                ";\n    background-color:",
                ";\n    color:",
                "",
              ])),
            function (e) {
              return "filter" === e.type && "none";
            },
            function (e) {
              return "filter" === e.type ? "orange" : "tranparent";
            },
            function (e) {
              return "filter" === e.type && "white";
            }
          )),
        Pe = function () {
          var e = Object(S.b)(),
            t = Object(s.useState)({}),
            c = Object(j.a)(t, 2),
            a = c[0],
            n =
              (c[1],
              Object(S.c)(function (e) {
                return e.cart;
              })),
            r = function () {
              e(R(Object(C.a)({}, a)));
            };
          return Object(g.jsxs)(g.Fragment, {
            children: [
              Object(g.jsx)("div", {
                className: "cart-container",
                children: Object(g.jsxs)("div", {
                  className: "cart-wrapper",
                  children: [
                    Object(g.jsx)("h1", { children: "YOUR BAG" }),
                    Object(g.jsxs)("div", {
                      className: "top",
                      children: [
                        Object(g.jsx)(Ae, { children: "CONTINUE SHOPPING" }),
                        Object(g.jsxs)("div", {
                          className: "topText",
                          children: [
                            Object(g.jsx)("h2", {
                              children: "Shopping Bag (2)",
                            }),
                            Object(g.jsx)("h2", {
                              children: "Your Wishlist (0)",
                            }),
                          ],
                        }),
                        Object(g.jsx)(Ae, {
                          type: "filter",
                          children: "CHECKOUT NOW",
                        }),
                      ],
                    }),
                    Object(g.jsxs)("div", {
                      className: "bottom",
                      children: [
                        Object(g.jsxs)("div", {
                          className: "info",
                          children: [
                            n.products.map(function (e) {
                              return Object(g.jsxs)("div", {
                                className: "product",
                                children: [
                                  Object(g.jsxs)("div", {
                                    className: "productDetail",
                                    children: [
                                      Object(g.jsx)("img", {
                                        src: e.image,
                                        alt: "",
                                      }),
                                      Object(g.jsxs)("div", {
                                        className: "details",
                                        children: [
                                          Object(g.jsxs)("div", {
                                            className: "productName",
                                            children: [
                                              Object(g.jsx)("b", {
                                                children: "PRODUCT:",
                                              }),
                                              " ",
                                              e.title,
                                            ],
                                          }),
                                          Object(g.jsxs)("div", {
                                            className: "productID",
                                            children: [
                                              Object(g.jsx)("b", {
                                                children: "ID:",
                                              }),
                                              e._id,
                                            ],
                                          }),
                                          Object(g.jsx)("div", {
                                            className: "productColor",
                                            color: e.color,
                                          }),
                                          Object(g.jsxs)("div", {
                                            className: "productSize",
                                            children: [
                                              Object(g.jsx)("b", {
                                                children: "Size:",
                                              }),
                                              e.size,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Object(g.jsxs)("div", {
                                    className: "priceDetail",
                                    children: [
                                      Object(g.jsxs)("div", {
                                        className: "productAmountContainer",
                                        children: [
                                          Object(g.jsx)(me.a, {
                                            style: { fontSize: "20px" },
                                          }),
                                          Object(g.jsx)("div", {
                                            className: "productAmount",
                                            children: e.quantity,
                                          }),
                                          Object(g.jsx)(xe.a, {
                                            style: { fontSize: "20px" },
                                          }),
                                        ],
                                      }),
                                      Object(g.jsxs)("div", {
                                        className: "productPrice",
                                        children: ["$ ", e.price * e.quantity],
                                      }),
                                      Object(g.jsx)(Re.a, {
                                        style: {
                                          marginTop: 30,
                                          fontSize: 20,
                                          color: "red",
                                        },
                                        onClick: r,
                                      }),
                                    ],
                                  }),
                                ],
                              });
                            }),
                            Object(g.jsx)("hr", {
                              style: {
                                marginTop: "15px",
                                width: "90%",
                                marginBottom: "15px",
                              },
                            }),
                          ],
                        }),
                        Object(g.jsxs)("div", {
                          className: "summary",
                          children: [
                            Object(g.jsx)("div", {
                              className: "summaryTitle",
                              children: "ORDER SUMMARY",
                            }),
                            Object(g.jsxs)("div", {
                              className: "summaryItem",
                              children: [
                                Object(g.jsx)("div", {
                                  className: "summaryItemText",
                                  children: "Subtotal:",
                                }),
                                Object(g.jsxs)("div", {
                                  className: "summaryItemText",
                                  children: ["\u20a6 ", n.total],
                                }),
                              ],
                            }),
                            Object(g.jsxs)("div", {
                              className: "summaryItem",
                              children: [
                                Object(g.jsx)("div", {
                                  className: "summaryItemText",
                                  children: "Estimated Shipping:",
                                }),
                                Object(g.jsx)("div", {
                                  className: "summaryItemText",
                                  children: "\u20a6 5.90",
                                }),
                              ],
                            }),
                            Object(g.jsxs)("div", {
                              className: "summaryItem",
                              children: [
                                Object(g.jsx)("div", {
                                  className: "summaryItemText",
                                  children: "Shipping Discount:",
                                }),
                                Object(g.jsx)("div", {
                                  className: "summaryItemText",
                                  children: "\u20a6 -5.90",
                                }),
                              ],
                            }),
                            Object(g.jsxs)("div", {
                              className: "summaryItemBold",
                              children: [
                                Object(g.jsx)("div", {
                                  className: "summaryItemText",
                                  children: "Total",
                                }),
                                Object(g.jsxs)("div", {
                                  className: "summaryItemText",
                                  children: ["\u20a6 ", n.total],
                                }),
                              ],
                            }),
                            Object(g.jsx)("button", {
                              className: "summaryButton",
                              children: Object(g.jsx)("a", {
                                style: { color: "white" },
                                href: "https://paystack.com/pay/7vuqwc90jv?first_name=&email=&last_name=&amount=".concat(
                                  n.total,
                                  "&readonly=email,amount,first_name,last_name"
                                ),
                                children: "CHECKOUT NOW",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(g.jsx)(oe, {}),
            ],
          });
        };
      var ze = function () {
          var e = Object(S.c)(function (e) {
            return e.user.currentUser;
          });
          return Object(g.jsxs)(y.a, {
            children: [
              Object(g.jsx)(M, {}),
              Object(g.jsxs)(W.d, {
                children: [
                  Object(g.jsx)(W.b, {
                    path: "/",
                    exact: !0,
                    element: Object(g.jsx)(he, {}),
                  }),
                  Object(g.jsx)(W.b, {
                    path: "/home",
                    exact: !0,
                    element: Object(g.jsx)(he, {}),
                  }),
                  Object(g.jsx)(W.b, {
                    path: "products/:category",
                    element: Object(g.jsx)(ue, {}),
                  }),
                  Object(g.jsx)(W.b, {
                    path: "/product/:id",
                    element: Object(g.jsx)(pe, {}),
                  }),
                  Object(g.jsx)(W.b, {
                    path: "/signup",
                    element: e
                      ? Object(g.jsx)(W.a, { to: "/" })
                      : Object(g.jsx)(ke, {}),
                  }),
                  Object(g.jsx)(W.b, {
                    path: "/login",
                    element: e
                      ? Object(g.jsx)(W.a, { to: "/" })
                      : Object(g.jsx)(Ie, {}),
                  }),
                  Object(g.jsx)(W.b, {
                    path: "/cart",
                    element: Object(g.jsx)(Pe, {}),
                  }),
                ],
              }),
            ],
          });
        },
        Le = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 191))
              .then(function (t) {
                var c = t.getCLS,
                  s = t.getFID,
                  a = t.getFCP,
                  n = t.getLCP,
                  r = t.getTTFB;
                c(e), s(e), a(e), n(e), r(e);
              });
        },
        Ee = c(25),
        De = c(36),
        We = c(87),
        Be = { key: "root", version: 1, storage: c.n(We).a },
        Me = Object(Ee.b)({ user: we, cart: A }),
        Ue = Object(De.g)(Be, Me),
        Ge = Object(T.a)({
          reducer: Ue,
          middleware: function (e) {
            return e({
              serializableCheck: {
                ignoredActions: [De.a, De.f, De.b, De.c, De.d, De.e],
              },
            });
          },
        }),
        Ye = Object(De.h)(Ge),
        Xe = c(88);
      n.a.render(
        Object(g.jsx)(S.a, {
          store: Ge,
          children: Object(g.jsx)(Xe.a, {
            loading: null,
            persistor: Ye,
            children: Object(g.jsx)(ze, {}),
          }),
        }),
        document.getElementById("root")
      ),
        Le();
    },
    70: function (e, t, c) {},
    71: function (e, t, c) {},
    96: function (e, t, c) {},
  },
  [[149, 1, 2]],
]);
//# sourceMappingURL=main.75a17b93.chunk.js.map
