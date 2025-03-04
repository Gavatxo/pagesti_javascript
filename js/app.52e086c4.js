; (function (t) {
  function e(e) {
    for (
      var n, s, o = e[0], l = e[1], c = e[2], u = 0, d = [];
      u < o.length;
      u++
    )
      (s = o[u]),
        Object.prototype.hasOwnProperty.call(i, s) && i[s] && d.push(i[s][0]),
        (i[s] = 0)
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n])
    p && p(e)
    while (d.length) d.shift()()
    return r.push.apply(r, c || []), a()
  }
  function a() {
    for (var t, e = 0; e < r.length; e++) {
      for (var a = r[e], n = !0, o = 1; o < a.length; o++) {
        var l = a[o]
        0 !== i[l] && (n = !1)
      }
      n && (r.splice(e--, 1), (t = s((s.s = a[0]))))
    }
    return t
  }
  var n = {},
    i = { app: 0 },
    r = []
  function s(e) {
    if (n[e]) return n[e].exports
    var a = (n[e] = { i: e, l: !1, exports: {} })
    return t[e].call(a.exports, a, a.exports, s), (a.l = !0), a.exports
  }
  ; (s.m = t),
    (s.c = n),
    (s.d = function (t, e, a) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a })
    }),
    (s.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (s.t = function (t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var a = Object.create(null)
      if (
        (s.r(a),
          Object.defineProperty(a, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
      )
        for (var n in t)
          s.d(
            a,
            n,
            function (e) {
              return t[e]
            }.bind(null, n)
          )
      return a
    }),
    (s.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
            return t['default']
          }
          : function () {
            return t
          }
      return s.d(e, 'a', e), e
    }),
    (s.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (s.p = '/')
  var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = o.push.bind(o)
    ; (o.push = e), (o = o.slice())
  for (var c = 0; c < o.length; c++) e(o[c])
  var p = l
  r.push([0, 'chunk-vendors']), a()
})({
  0: function (t, e, a) {
    t.exports = a('56d7')
  },
  '0192': function (t, e, a) { },
  '05ea': function (t, e, a) {
    'use strict'
    var n = a('9ca3'),
      i = a.n(n)
    i.a
  },
  '05f8': function (t, e, a) {
    t.exports = a.p + 'img/parc2.6a79c333.png'
  },
  '0b70': function (t, e, a) {
    t.exports = a.p + 'img/gestion_illu.ead1567c.png'
  },
  '0bd8': function (t, e, a) { },
  '0d98': function (t, e, a) {
    t.exports = a.p + 'img/PxMP.69efb36f.png'
  },
  '14c9': function (t, e, a) {
    t.exports = a.p + 'img/computerShadow@2x.a9d2104b.png'
  },
  1552: function (t, e, a) {
    t.exports = a.p + 'img/test.685284fd.png'
  },
  '15ab': function (t, e, a) {
    t.exports = a.p + 'img/archi2Shadow.e4b38ce3.png'
  },
  1771: function (t, e, a) {
    var n = {
      './PxMP.png': '0d98',
      './archi.png': '36a2',
      './archi2.png': 'aac7',
      './archi2@2x.png': '65d0',
      './archi2Shadow.png': '15ab',
      './archi2Shadow@2x.png': 'dd19',
      './archi3Shadow.png': '95d1',
      './archi3Shadow@2x.png': 'b120',
      './archi@2x.png': '96cc',
      './arrow_down.svg': 'c551',
      './computer.png': '6333',
      './computer2.png': '1e72',
      './computer2@2x.png': 'd003',
      './computer3.png': 'a55c',
      './computer3@2x.png': '9312',
      './computer4.png': '8837',
      './computer4@2x.png': '1b03',
      './computer@2x.png': '2622',
      './computerShadow.png': '8e1a',
      './computerShadow@2x.png': '14c9',
      './contactUs.png': 'a232',
      './gestion.svg': '935c',
      './gestion_illu.png': '0b70',
      './illu1.png': 'a89c',
      './illu1@2x.png': '91c6',
      './illu2.png': '94d3',
      './illu2@2x.png': '7227',
      './illu3.png': '562c',
      './illu3@2x.png': '89ae',
      './illu4.png': 'd112',
      './illu4@2x.png': 'a0b3',
      './loc_illu.png': 'a1af',
      './loc_illu@2x.png': 'cb3c',
      './location.svg': 'a1fb',
      './logo.svg': '9b19',
      './map.png': '8b55',
      './map@2x.png': 'a38a',
      './menu.svg': '36be',
      './mouse.svg': 'beac',
      './parc1.png': '3166',
      './parc1@2x.png': '4e60',
      './parc2.png': '05f8',
      './parc2@2x.png': 'b5ec',
      './parc3.png': 'ec32',
      './parc3@2x.png': '84fa',
      './paris_illu.png': '97d0',
      './syndic.svg': '7bb9',
      './syndic_illu.png': '9276',
      './syndic_illu@2x.png': 'c4ab',
      './test.png': '1552',
      './test@2x.png': '8357',
      './transac_illu.png': 'd2c3',
      './transac_illu@2x.png': '8338',
      './transaction.svg': 'ba33',
      './unitTest.png': 'acf1',
      './unitTest@2x.png': 'e72a',
      './user.png': 'c121'
    }
    function i(t) {
      var e = r(t)
      return a(e)
    }
    function r(t) {
      if (!a.o(n, t)) {
        var e = new Error("Cannot find module '" + t + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      return n[t]
    }
    ; (i.keys = function () {
      return Object.keys(n)
    }),
      (i.resolve = r),
      (t.exports = i),
      (i.id = '1771')
  },
  '1b03': function (t, e, a) {
    t.exports = a.p + 'img/computer4@2x.7631d167.png'
  },
  '1e72': function (t, e, a) {
    t.exports = a.p + 'img/computer2.d1af702a.png'
  },
  '24db': function (t, e, a) { },
  2622: function (t, e, a) {
    t.exports = a.p + 'img/computer@2x.ec536d88.png'
  },
  3166: function (t, e, a) {
    t.exports = a.p + 'img/parc1.e3872c81.png'
  },
  '36a2': function (t, e, a) {
    t.exports = a.p + 'img/archi.58df4bad.png'
  },
  '36be': function (t, e, a) {
    t.exports = a.p + 'img/menu.03dc68d7.svg'
  },
  '391f': function (t, e, a) {
    'use strict'
    var n = a('c28f'),
      i = a.n(n)
    i.a
  },
  '4e60': function (t, e, a) {
    t.exports = a.p + 'img/parc1@2x.50941861.png'
  },
  5551: function (t, e, a) {
    'use strict'
    var n = a('24db'),
      i = a.n(n)
    i.a
  },
  '562c': function (t, e, a) {
    t.exports = a.p + 'img/illu3.4b6b9b8a.png'
  },
  '56d7': function (t, e, a) {
    'use strict'
    a.r(e)
    a('cadf'), a('551c'), a('f751'), a('097d')
    var n = a('2b0e'),
      i = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a(
          'v-app',
          [a('Nav'), a('v-content', [a('router-view'), a('Footer')], 1)],
          1
        )
      },
      r = [],
      s = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'v-dialog',
          {
            attrs: {
              fullscreen: '',
              'hide-overlay': '',
              transition: 'dialog-bottom-transition'
            },
            scopedSlots: t._u([
              {
                key: 'activator',
                fn: function (e) {
                  e.on
                  return [
                    n(
                      'v-app-bar',
                      {
                        attrs: {
                          fixed: '',
                          'hide-on-scroll': '',
                          app: '',
                          'inverted-scroll': '',
                          elevation: '0'
                        }
                      },
                      [
                        n('v-toolbar-title', [
                          n(
                            'a',
                            { attrs: { href: '/' } },
                            [
                              n('v-img', {
                                attrs: {
                                  src: a('9b19'),
                                  height: '45',
                                  contain: ''
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        n('v-spacer'),
                        t.$vuetify.breakpoint.smAndDown
                          ? t._e()
                          : n(
                            'div',
                            [
                              n(
                                'v-btn',
                                {
                                  attrs: {
                                    text: '',
                                    disabled: '',
                                    color: 'black--text primary',
                                    to: 'gestion'
                                  }
                                },
                                [t._v('Gestion')]
                              ),
                              n(
                                'v-btn',
                                {
                                  attrs: {
                                    text: '',
                                    disabled: '',
                                    color: 'black--text primary',
                                    to: 'location'
                                  }
                                },
                                [t._v('Location')]
                              ),
                              n(
                                'v-btn',
                                {
                                  attrs: {
                                    text: '',
                                    disabled: '',
                                    color: 'black--text primary',
                                    to: 'transaction'
                                  }
                                },
                                [t._v('Transaction')]
                              ),
                              n(
                                'v-btn',
                                {
                                  attrs: {
                                    text: '',
                                    disabled: '',
                                    color: 'black--text primary',
                                    to: 'syndic'
                                  }
                                },
                                [t._v('Syndic')]
                              ),
                              n(
                                'v-btn',
                                {
                                  attrs: {
                                    text: '',
                                    color: 'black--text primary',
                                    href: 'https://npimmo.monespaceclient.immo'
                                  }
                                },
                                [t._v('Espace client')]
                              )
                            ],
                            1
                          )
                      ],
                      1
                    ),
                    n(
                      'div',
                      { attrs: { id: 'burger' } },
                      [
                        n('v-spacer'),
                        n(
                          'v-btn',
                          {
                            attrs: {
                              text: '',
                              disabled: '',
                              color: 'black--text primary',
                              to: 'gestion'
                            }
                          },
                          [t._v('Gestion')]
                        ),
                        n(
                          'v-btn',
                          {
                            attrs: {
                              text: '',
                              disabled: '',
                              color: 'black--text primary',
                              to: 'location'
                            }
                          },
                          [t._v('Location')]
                        ),
                        n(
                          'v-btn',
                          {
                            attrs: {
                              text: '',
                              disabled: '',
                              color: 'black--text primary',
                              to: 'transaction'
                            }
                          },
                          [t._v('Transaction')]
                        ),
                        n(
                          'v-btn',
                          {
                            attrs: {
                              text: '',
                              disabled: '',
                              color: 'black--text primary',
                              to: 'syndic'
                            }
                          },
                          [t._v('Syndic')]
                        ),
                        n(
                          'v-btn',
                          {
                            attrs: {
                              text: '',
                              color: 'black--text primary',
                              href: 'https://npimmo.monespaceclient.immo'
                            }
                          },
                          [t._v('Espace client')]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ]),
            model: {
              value: t.dialog,
              callback: function (e) {
                t.dialog = e
              },
              expression: 'dialog'
            }
          },
          [
            n(
              'v-card',
              { attrs: { color: t.color } },
              [
                n(
                  'v-card-text',
                  [
                    n(
                      'v-container',
                      { attrs: { 'grid-list-xl': '', fluid: '', 'pa-5': '' } },
                      [
                        n(
                          'v-row',
                          { staticClass: 'pb-5', attrs: { row: '', wrap: '' } },
                          [
                            n(
                              'v-col',
                              [
                                n('v-img', {
                                  attrs: { src: a('9b19'), width: '150' }
                                })
                              ],
                              1
                            ),
                            n('v-spacer'),
                            n(
                              'v-col',
                              { attrs: { sm: 'auto' } },
                              [
                                n(
                                  'v-btn',
                                  {
                                    attrs: { large: '', icon: '' },
                                    on: {
                                      click: function (e) {
                                        t.dialog = !1
                                      }
                                    }
                                  },
                                  [
                                    n('v-icon', { attrs: { large: '' } }, [
                                      t._v('mdi-close')
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        n(
                          'v-row',
                          {
                            staticClass: 'mt-5 pt-5',
                            attrs: {
                              row: '',
                              wrap: '',
                              'justify-space-between': ''
                            }
                          },
                          [
                            n(
                              'v-col',
                              { attrs: { md: '4' } },
                              [
                                n(
                                  'v-list',
                                  {
                                    staticClass: 'transparent pa-0',
                                    attrs: { nav: '', flat: '' }
                                  },
                                  t._l(t.navs, function (e, a) {
                                    return n(
                                      'v-list-item',
                                      { key: a, staticClass: 'pa-0' },
                                      [
                                        n(
                                          'v-list-item-content',
                                          { staticClass: 'pa-0' },
                                          [
                                            e.active
                                              ? n(
                                                'v-list-item-title',
                                                {
                                                  staticClass:
                                                    'nav-item active'
                                                },
                                                [
                                                  n('a', {
                                                    domProps: {
                                                      innerHTML: t._s(e.title)
                                                    }
                                                  })
                                                ]
                                              )
                                              : n(
                                                'v-list-item-title',
                                                { staticClass: 'nav-item' },
                                                [
                                                  n('a', {
                                                    domProps: {
                                                      innerHTML: t._s(e.title)
                                                    },
                                                    on: {
                                                      click: function (a) {
                                                        return t.goTo(e.to)
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  1
                                )
                              ],
                              1
                            ),
                            n(
                              'v-col',
                              { attrs: { md: '3', justify: '' } },
                              [
                                n(
                                  'v-row',
                                  [
                                    n('h4', [t._v('Recrutement')]),
                                    n(
                                      'v-btn',
                                      {
                                        staticClass: 'mb-5',
                                        attrs: {
                                          tile: '',
                                          href: 'https://taleez.com/careers/pagesti/',
                                          target: '_blank'
                                        }
                                      },
                                      [
                                        t._v(
                                          '\n                Découvrir\n                '
                                        ),
                                        n('v-icon', { attrs: { right: '' } }, [
                                          t._v('mdi-chevron-right')
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                n(
                                  'v-row',
                                  [
                                    n('h4', [t._v('Espace client')]),
                                    n('p', [
                                      t._v(
                                        '\n                Généralement, on utilise un texte en faux latin (le texte ne\n                veut rien dire, il a été\n              '
                                      )
                                    ]),
                                    n(
                                      'v-btn',
                                      {
                                        attrs: {
                                          tile: '',
                                          href: 'https://npimmo.monsepaceclient.immo',
                                          target: '_blank'
                                        }
                                      },
                                      [
                                        t._v(
                                          '\n                Se connecter\n                '
                                        ),
                                        n('v-icon', { attrs: { right: '' } }, [
                                          t._v('mdi-chevron-right')
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            n('v-spacer'),
                            n(
                              'v-col',
                              { attrs: { md: '4' } },
                              [
                                n('h4', [t._v('Suivez-nous')]),
                                n(
                                  'v-btn',
                                  {
                                    staticClass: 'ml-0 ma-2',
                                    attrs: {
                                      fab: '',
                                      small: '',
                                      depressed: '',
                                      dark: ''
                                    }
                                  },
                                  [n('v-icon', [t._v('fab fa-instagram')])],
                                  1
                                ),
                                n(
                                  'v-btn',
                                  {
                                    staticClass: 'ma-2',
                                    attrs: {
                                      fab: '',
                                      small: '',
                                      depressed: '',
                                      dark: ''
                                    }
                                  },
                                  [n('v-icon', [t._v('fab fa-linkedin-in')])],
                                  1
                                ),
                                n(
                                  'v-btn',
                                  {
                                    staticClass: 'ma-2',
                                    attrs: {
                                      fab: '',
                                      small: '',
                                      depressed: '',
                                      dark: ''
                                    }
                                  },
                                  [n('v-icon', [t._v('fab fa-twitter')])],
                                  1
                                ),
                                n(
                                  'v-btn',
                                  {
                                    staticClass: 'ma-2',
                                    attrs: {
                                      fab: '',
                                      small: '',
                                      depressed: '',
                                      dark: ''
                                    }
                                  },
                                  [n('v-icon', [t._v('fab fa-medium-m')])],
                                  1
                                ),
                                n(
                                  'v-btn',
                                  {
                                    staticClass: 'ma-2',
                                    attrs: {
                                      fab: '',
                                      small: '',
                                      depressed: '',
                                      dark: ''
                                    },
                                    on: {
                                      click: function (e) {
                                        t.dialog2 = !0
                                      }
                                    }
                                  },
                                  [n('v-icon', [t._v('mdi-email')])],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            n(
              'v-dialog',
              {
                attrs: { 'max-width': '750' },
                model: {
                  value: t.dialog2,
                  callback: function (e) {
                    t.dialog2 = e
                  },
                  expression: 'dialog2'
                }
              },
              [
                n(
                  'v-card',
                  [
                    n(
                      'v-row',
                      { staticClass: 'pl-5 pr-1', attrs: { align: 'center' } },
                      [
                        n(
                          'v-col',
                          {
                            staticClass: 'pl-5',
                            attrs: { cols: '12', md: '6' }
                          },
                          [
                            n('h2', { staticClass: 'font-weight-bold' }, [
                              t._v('Restez informé !')
                            ]),
                            n('p', [
                              t._v(
                                '\n            de toute l’actualité de NP IMMOBILIER en vous inscrivant a notre\n            newsletter\n          '
                              )
                            ]),
                            n(
                              'v-form',
                              [
                                n('v-text-field', {
                                  attrs: { label: 'EMAIL', solo: '' }
                                }),
                                n(
                                  'v-card-actions',
                                  [
                                    n('v-spacer'),
                                    n(
                                      'v-btn',
                                      {
                                        staticClass: 'px-5',
                                        attrs: { color: '#D4EBFF' }
                                      },
                                      [t._v('ENVOYER')]
                                    ),
                                    n('v-spacer')
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        n(
                          'v-col',
                          { attrs: { cols: '12', md: '6' } },
                          [
                            n('v-img', {
                              attrs: { src: a('a232'), contain: '' }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      },
      o = [],
      l =
        (a('7f7f'),
        {
          data: function () {
            return {
              dialog: !1,
              dialog2: !1,
              navs: [
                { title: 'Accueil', to: 'home', active: !1 },
                { title: 'Digitalisation', to: 'digital', active: !1 },
                { title: 'Partenariats', to: 'partenariats', active: !1 },
                { title: 'Gestion', to: 'gestion', active: !1 },
                { title: 'Location', to: 'location', active: !1 },
                { title: 'Transaction', to: 'transaction', active: !1 },
                { title: 'Syndic', to: 'syndic', active: !1 }
              ],
              color: null
            }
          },
          created: function () {
            this.activeLink(this.$router.currentRoute),
              this.bgColor(this.$router.currentRoute.name)
          },
          watch: {
            $route: function (t) {
              this.activeLink(t), this.bgColor(t.name)
            }
          },
          methods: {
            goTo: function (t) {
              ; (this.dialog = !1), this.$router.push({ name: t })
            },
            bgColor: function (t) {
              var e
              switch (t) {
                case 'accueil':
                  e = 'rgba(212,235,255,.95)'
                  break
                case 'gestion':
                  e = 'rgba(249,234,119,.95)'
                  break
                case 'location':
                  e = 'rgba(129,249,205,.95)'
                  break
                case 'transaction':
                  e = 'rgba(255,151,142,.95)'
                  break
                case 'syndic':
                  e = 'rgba(141,132,248,.96)'
                  break
                default:
                  e = 'rgba(212,235,255,.95)'
                  break
              }
              this.color = e
            },
            activeLink: function (t) {
              var e = this
              this.navs.map(function (a, n) {
                a.to == t.name
                  ? (e.navs[n].active = !0)
                  : (e.navs[n].active = !1)
              })
            }
          }
        }),
      c = l,
      p = (a('faaf'), a('2877')),
      u = a('6544'),
      d = a.n(u),
      m = a('40dc'),
      g = a('8336'),
      b = a('b0af'),
      v = a('99d9'),
      f = a('62ad'),
      x = a('a523'),
      h = a('169a'),
      A = a('4bd4'),
      _ = a('132d'),
      w = a('adda'),
      S = a('8860'),
      C = a('da13'),
      E = a('5d23'),
      y = a('0fd9'),
      I = a('2fa4'),
      T = a('8654'),
      P = a('2a7f'),
      L = Object(p['a'])(c, s, o, !1, null, '53c41566', null),
      V = L.exports
    d()(L, {
      VAppBar: m['a'],
      VBtn: g['a'],
      VCard: b['a'],
      VCardActions: v['a'],
      VCardText: v['c'],
      VCol: f['a'],
      VContainer: x['a'],
      VDialog: h['a'],
      VForm: A['a'],
      VIcon: _['a'],
      VImg: w['a'],
      VList: S['a'],
      VListItem: C['a'],
      VListItemContent: E['a'],
      VListItemTitle: E['b'],
      VRow: y['a'],
      VSpacer: I['a'],
      VTextField: T['a'],
      VToolbarTitle: P['a']
    })
    var D = function () {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e
      return n(
        'v-footer',
        { attrs: { color: 'white' } },
        [
          n(
            'v-container',
            { attrs: { fluid: '' } },
            [
              n(
                'v-row',
                [
                  n(
                    'v-col',
                    { attrs: { cols: '12', md: '3' } },
                    [
                      n('v-img', {
                        staticClass: 'mb-5',
                        attrs: { src: a('9b19'), height: '100', contain: '' }
                      })
                    ],
                    1
                  ),
                  n('v-col', { attrs: { cols: '12', md: '5' } }, [
                    n('h4', [t._v('Coordonnées')]),
                    n(
                      'a',
                      {
                        staticClass: 'contact',
                        attrs: {
                          href: 'https://www.google.com/maps/place/56+Rue+du+Faubourg+Saint-Antoine,+75012+Paris/data=!4m2!3m1!1s0x47e67206b9bc9b09:0xc6accec82f11cf86?sa=X&ved=2ahUKEwi-3qGKvt3mAhX6D2MBHePACGAQ8gEwAHoECAsQAQ',
                          target: '_blank'
                        }
                      },
                      [
                        n('v-icon', { attrs: { left: '' } }, [
                          t._v('mdi-home')
                        ]),
                        t._v(
                          '56 Rue du Faubourg Saint-Antoine 75012\n          Paris\n        '
                        )
                      ],
                      1
                    ),
                    n(
                      'a',
                      {
                        staticClass: 'contact',
                        attrs: { href: 'tel:+33146280692' }
                      },
                      [
                        n('v-icon', { attrs: { left: '' } }, [
                          t._v('mdi-phone')
                        ]),
                        t._v('01 46 28 06 92\n        ')
                      ],
                      1
                    ),
                    n(
                      'a',
                      {
                        staticClass: 'contact',
                        attrs: { href: 'mailTo:office@np.immo' }
                      },
                      [
                        n('v-icon', { attrs: { left: '' } }, [
                          t._v('mdi-email')
                        ]),
                        t._v('office@np.immo\n        ')
                      ],
                      1
                    )
                  ]),
                  n('v-col', { attrs: { cols: '12', md: '4' } }, [
                    n('h4', [t._v('Horaires')]),
                    n('p', [
                      n('b', [t._v('Réception des appels')]),
                      n('br'),
                      t._v('\n          Lundi au vendredi : 08h00 - 20h00 '),
                      n('br'),
                      t._v('\n          Samedi : 08h00 - 13h00\n          '),
                      n('br'),
                      n('b', [t._v('Réception physique')]),
                      t._v(' sur rendez-vous uniquement\n        ')
                    ])
                  ])
                ],
                1
              ),
              n(
                'v-row',
                [
                  n('v-spacer'),
                  n(
                    'v-col',
                    { staticClass: 'text-center', attrs: { cols: 'auto' } },
                    [
                      t._v(
                        '\n        © NP IMMOBILIER ' +
                        t._s(t.moment)
                      ),
                      n('br'),
                      n(
                        'router-link',
                        {
                          staticClass: 'grey--text text--darken-2',
                          attrs: { to: 'legal' }
                        },
                        [t._v('mentions légales')]
                      )
                    ],
                    1
                  ),
                  n('v-spacer')
                ],
                1
              )
            ],
            1
          ),
          n(
            'v-dialog',
            {
              attrs: { 'max-width': '800' },
              model: {
                value: t.dialog,
                callback: function (e) {
                  t.dialog = e
                },
                expression: 'dialog'
              }
            },
            [
              n(
                'v-card',
                [
                  n(
                    'v-row',
                    {
                      staticClass: 'pl-sm-5 pr-sm-1 px-5',
                      attrs: { align: 'center' }
                    },
                    [
                      n(
                        'v-col',
                        {
                          staticClass: 'pl-sm-5',
                          attrs: { cols: '12', sm: '6' }
                        },
                        [
                          n('h2', { staticClass: 'font-weight-bold' }, [
                            t._v('Restez informé !')
                          ]),
                          n('p', [
                            t._v(
                              '\n            de toute l’actualité de NP IMMOBILIER en vous inscrivant a notre\n            newsletter\n          '
                            )
                          ]),
                          n(
                            'v-form',
                            [
                              n('v-text-field', {
                                attrs: { label: 'EMAIL', solo: '' }
                              }),
                              n(
                                'v-card-actions',
                                [
                                  n('v-spacer'),
                                  n(
                                    'v-btn',
                                    {
                                      staticClass: 'px-5',
                                      attrs: { color: '#D4EBFF' }
                                    },
                                    [t._v('ENVOYER')]
                                  ),
                                  n('v-spacer')
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      n(
                        'v-col',
                        {
                          staticClass: 'd-none d-sm-flex',
                          attrs: { cols: '12', sm: '6' }
                        },
                        [
                          n('v-img', {
                            attrs: { src: a('a232'), contain: '' }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    },
      R = [],
      k = {
        data: function () {
          return {
            dialog: !1,
            nav1: [
              { link: 'home', name: 'Accueil' },
              { link: 'gestion', name: 'Gestion' },
              { link: 'location', name: 'Location' },
              { link: 'digital', name: 'Digitalisation' }
            ],
            nav2: [
              { link: 'transaction', name: 'Transaction' },
              { link: 'syndic', name: 'Syndic' },
              { link: 'maison-passive', name: 'Maison Passive' }
            ],
            social: [
              { to: 'https://twitter.com/', icon: 'instagram' },
              {
                to: 'https://linkedin.com/company/',
                icon: 'linkedin-in'
              },
              { to: 'https://twitter.com/', icon: 'twitter' },
              { to: 'https://medium.com/', icon: 'medium-m' }
            ]
          }
        },
        computed: {
          moment: function () {
            var t = new Date()
            return t.getFullYear()
          }
        }
      },
      O = k,
      F = (a('a3aa'), a('553a')),
      N = Object(p['a'])(O, D, R, !1, null, '6a15df9f', null),
      q = N.exports
    d()(N, {
      VBtn: g['a'],
      VCard: b['a'],
      VCardActions: v['a'],
      VCol: f['a'],
      VContainer: x['a'],
      VDialog: h['a'],
      VFooter: F['a'],
      VForm: A['a'],
      VIcon: _['a'],
      VImg: w['a'],
      VRow: y['a'],
      VSpacer: I['a'],
      VTextField: T['a']
    })
    var G = {
      name: 'App',
      components: { Nav: V, Footer: q },
      data: function () {
        return {}
      }
    },
      M = G,
      U = (a('5c0b'), a('7496')),
      j = a('a75b'),
      Z = Object(p['a'])(M, i, r, !1, null, null, null),
      B = Z.exports
    d()(Z, { VApp: U['a'], VContent: j['a'] })
    var H = a('8c4f'),
      Y = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'div',
          [
            n('topPage', { attrs: { title: t.title, bgImg: t.bgImg } }),
            n(
              'v-container',
              { attrs: { 'my-5': '', id: 'next' } },
              [
                n(
                  'v-row',
                  { attrs: { align: 'center' } },
                  [
                    n(
                      'v-col',
                      { staticClass: 'text-center', attrs: { cols: '12' } },
                      [n('h3', { domProps: { innerHTML: t._s(t.title3) } })]
                    )
                  ],
                  1
                ),
                n(
                  'v-row',
                  t._l(t.list, function (e, i) {
                    return n(
                      'v-col',
                      {
                        key: i,
                        attrs: {
                          cols: '12',
                          sm: '6',
                          md: '3',
                          'data-aos': 'zoom-in',
                          'data-aos-delay': 300 * i
                        }
                      },
                      [
                        n(
                          'v-card',
                          {
                            staticClass:
                              'd-flex flex-column justify-space-between',
                            attrs: { height: '100%' }
                          },
                          [
                            n(
                              'v-card-text',
                              { staticClass: 'text-center' },
                              [
                                n('v-img', {
                                  attrs: {
                                    contain: '',
                                    height: '100',
                                    src: a('1771')('./' + e.img)
                                  }
                                }),
                                n(
                                  'v-card-title',
                                  { staticClass: 'justify-center' },
                                  [
                                    n('span', { style: 'color:' + e.color }, [
                                      t._v(t._s(e.title))
                                    ])
                                  ]
                                ),
                                t._v(
                                  '\n            ' +
                                  t._s(e.text) +
                                  '\n          '
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  1
                )
              ],
              1
            )
          ],
          1
        )
      },
      J = [],
      z = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'div',
          [
            n(
              'v-container',
              { ref: 'container', attrs: { fluid: '', id: 'container' } },
              [
                n(
                  'v-row',
                  { staticClass: 'fill-height px-5' },
                  [
                    n(
                      'v-col',
                      { attrs: { 'align-self': 'start', cols: '12' } },
                      [
                        n(
                          'v-row',
                          [
                            n(
                              'v-col',
                              [
                                n(
                                  'router-link',
                                  { attrs: { to: { name: 'home' } } },
                                  [
                                    n('v-img', {
                                      attrs: { src: a('9b19'), width: '180px' }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    n(
                      'v-col',
                      {
                        attrs: {
                          'ml-5': '',
                          'align-self': 'center',
                          cols: '12'
                        }
                      },
                      [
                        t.$vuetify.breakpoint.mdAndUp
                          ? n('h1', {
                            staticClass: 'display-3 font-weight-bold',
                            domProps: { innerHTML: t._s(t.title) }
                          })
                          : n('h1', {
                            staticClass: 'font-weight-bold text-center',
                            domProps: { innerHTML: t._s(t.title) }
                          })
                      ]
                    ),
                    n(
                      'v-col',
                      { attrs: { 'align-self': 'end', cols: '12' } },
                      [
                        n(
                          'v-row',
                          { attrs: { justify: 'center' } },
                          [
                            n('v-col', { attrs: { cols: 'auto' } }, [
                              t.$vuetify.breakpoint.mdAndUp
                                ? n(
                                  'a',
                                  {
                                    attrs: { id: 'scrollDown' },
                                    on: {
                                      click: function (e) {
                                        return t.$vuetify.goTo('#next')
                                      }
                                    }
                                  },
                                  [
                                    n('v-img', {
                                      attrs: { src: a('beac'), width: '30px' }
                                    })
                                  ],
                                  1
                                )
                                : t._e()
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                n('div', { attrs: { id: 'extranet' } }, [
                  n(
                    'a',
                    {
                      attrs: {
                        href: 'https://npimmo.monespaceclient.immo',
                        target: '_blank'
                      }
                    },
                    [
                      n('img', { attrs: { src: a('c121') } }),
                      n('span', { staticClass: 'white--text' }, [
                        t._v('ESPACE CLIENT')
                      ])
                    ]
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      },
      Q = [],
      X = {
        props: { title: String, bgImg: String },
        mounted: function () {
          this.$refs.container.style.backgroundImage = 'url('.concat(
            a('1771')('./'.concat(this.bgImg)),
            ')'
          )
        },
        methods: { scrollDown: function () { } }
      },
      K = X,
      $ = (a('5790'), Object(p['a'])(K, z, Q, !1, null, '085b83a6', null)),
      W = $.exports
    d()($, { VCol: f['a'], VContainer: x['a'], VImg: w['a'], VRow: y['a'] })
    var tt = function () {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e
      return n(
        'v-container',
        { staticStyle: { height: '100vh' } },
        [
          n(
            'v-row',
            { staticClass: 'fill-height', attrs: { align: 'center' } },
            [
              n(
                'v-col',
                [
                  n(
                    'v-row',
                    {
                      staticClass: 'py-5',
                      attrs: {
                        align: 'center',
                        justify: 'center',
                        id: 'card',
                        'data-aos': 'fade-right'
                      }
                    },
                    [
                      n('div', { ref: 'card', attrs: { id: 'inner-card' } }),
                      n(
                        'v-col',
                        { attrs: { cols: '12', md: '6' } },
                        [
                          n('v-img', {
                            attrs: {
                              src: a('1771')('./' + t.img),
                              contain: '',
                              'data-aos': 'fade-left',
                              'max-width': '100vw'
                            }
                          })
                        ],
                        1
                      ),
                      n('v-spacer'),
                      n(
                        'v-col',
                        { attrs: { cols: '12', md: '5' } },
                        [
                          n('h1', { domProps: { innerHTML: t._s(t.title) } }),
                          n('p', [t._v(t._s(t.text))]),
                          n(
                            'v-row',
                            [
                              n('v-spacer'),
                              n(
                                'v-col',
                                { attrs: { cols: 'auto' } },
                                [
                                  t.btn
                                    ? n(
                                      'v-btn',
                                      {
                                        attrs: {
                                          color: 'white',
                                          tile: '',
                                          to: { name: t.to }
                                        }
                                      },
                                      [t._v(t._s(t.btn))]
                                    )
                                    : t._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    },
      et = [],
      at = {
        props: {
          bgcolor: String,
          img: String,
          title: String,
          text: String,
          btn: String,
          to: String
        },
        mounted: function () {
          this.$refs.card.style.backgroundColor = this.bgcolor
        }
      },
      nt = at,
      it = (a('5551'), Object(p['a'])(nt, tt, et, !1, null, '78b7f6be', null)),
      rt = it.exports
    d()(it, {
      VBtn: g['a'],
      VCol: f['a'],
      VContainer: x['a'],
      VImg: w['a'],
      VRow: y['a'],
      VSpacer: I['a']
    })
    var st = function () {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e
      return n(
        'v-parallax',
        {
          staticStyle: { height: '90vh' },
          attrs: { src: a('1771')('./' + t.img) }
        },
        [
          n(
            'v-row',
            { attrs: { align: 'center', justify: 'center' } },
            [
              n(
                'v-col',
                { staticClass: 'text-center', attrs: { md: '5' } },
                [
                  n(
                    'v-card',
                    { staticClass: 'pa-5' },
                    [
                      n('h1', { domProps: { innerHTML: t._s(t.title) } }),
                      n('p', {
                        staticClass: 'mb-0',
                        domProps: { innerHTML: t._s(t.text) }
                      }),
                      t.btn
                        ? n(
                          'v-btn',
                          {
                            staticClass: 'mt-3',
                            attrs: {
                              color: '#D9EEFF',
                              href: t.to,
                              target: '_blank'
                            }
                          },
                          [t._v(t._s(t.btn))]
                        )
                        : t._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    },
      ot = [],
      lt = {
        props: {
          img: String,
          title: String,
          text: String,
          btn: String,
          to: String
        }
      },
      ct = lt,
      pt = (a('eaec'), a('8b9c')),
      ut = Object(p['a'])(ct, st, ot, !1, null, '2d70dbac', null),
      dt = ut.exports
    d()(ut, {
      VBtn: g['a'],
      VCard: b['a'],
      VCol: f['a'],
      VParallax: pt['a'],
      VRow: y['a']
    })
    var mt = {
      name: 'Home',
      components: { topPage: W, ImgAndTextLeft: rt, FullSizeImg: dt },
      data: function () {
        return {
          bgImg: 'paris_illu.png',
          title: 'VOTRE AGENCE IMMOBILIERE<br> DE PROXIMITE',
          title2: 'NP IMMOBILIER GRAND PARIS: une approche humaine',
          title3: "Nos domaines d'activités",
          list: [
            {
              img: 'gestion.svg',
              color: '#F7DE73',
              title: 'GESTION',
              text: 'On sait vous écouter et être poche de vous',
              to: 'gestion'
            },
            {
              img: 'location.svg',
              color: '#72F5C4',
              title: 'LOCATION',
              text: 'Une solution clé en main',
              to: 'location'
            },
            {
              img: 'transaction.svg',
              color: '#F76767',
              title: 'TRANSACTION',
              text: 'Au cœur des immeubles la vente est plus facile',
              to: 'transaction'
            },
            {
              img: 'syndic.svg',
              color: '#7574E9',
              title: 'SYNDIC',
              text: 'À vos côtés pour gérer votre copropriété',
              to: 'syndic'
            }
          ]
        }
      },
      mounted: function () {
        this.$refs.map.style.backgroundImage = 'url('.concat(a('8b55'), ')')
      }
    },
      gt = mt,
      bt = (a('ed42'), Object(p['a'])(gt, Y, J, !1, null, '4ef8c58e', null)),
      vt = bt.exports
    d()(bt, {
      VCard: b['a'],
      VCardText: v['c'],
      VCardTitle: v['d'],
      VCol: f['a'],
      VContainer: x['a'],
      VImg: w['a'],
      VRow: y['a']
    })
    var ft = function () {
      var t = this,
        e = t.$createElement,
        a = t._self._c || e
      return a(
        'div',
        [
          a('topPage', { attrs: { title: t.title, bgImg: t.bgImg } }),
          a('doubleImageAndText', {
            attrs: {
              id: 'next',
              img: 'computerShadow.png',
              img2: 'computer.png',
              title: 'Notre constat',
              text: "Ces dernières années, dans le but d'améliorer nos services, nous avons testé plusieurs solution pour entamer notre transition digital. La problématique d’avoir un vrai logiciel cross plateforme regroupant tout les outils nécessaires à Pagesti nous est apparu insoluble dans les offres proposer. nous avons donc décider de ne plus être dépendant des fournisseur de plateforme mais de crée la notre faite par et pour Pagesti."
            }
          }),
          a('itemList', {
            attrs: {
              color: '#D4EBFF',
              title: 'VESTAFORGE: solution immobilère 360°',
              text: 'VESTAFORGE est une plateforme crée et dédié à l’administration de bien. Elle prend en compte les aspects du métier permettant ainsi à tous les acteurs de ce secteurs de mieux communiquer et gérer leurs activité.',
              list: t.list
            }
          }),
          a('ImgAndTextLeft', {
            attrs: {
              bgcolor: '#D4EBFF',
              img: 'computer2.png',
              title: 'les gains d’un tel <br>dispositif',
              text: 'Spher nous rend la vie plus simple en nous faisant économisé du temps sur nos process de travail. Le faite que les taches simple soit réalisé par la plateforme directement nous laisse plus de temps pour réalisé des taches plus complexe nécessitant toute l’attention de nos gestionnaire. Le point crucial par ailleurs est de consacrer plus de temps a nos copropriétaire en leur fournissant un contact humain à chaque instant en répondant a leur interrogation. Une vrai visibilité sur les projets & incidents pour les gestionnaire et les copropriétaires rendent totalement transparent nos méthodes de travail en vous tenant informer a tout moment.'
            }
          }),
          a('FullSizeImg', {
            attrs: {
              img: 'parc2.png',
              title: 'POUR QUE LES COPROS & gestionnaire s’entendent',
              text: 'Spher à pour but d’etre un vrai outil de communication entre NP IMMOBILIER et nos copropriétaire. c’est pour cela que nous proposons pour chaque projet & incident une vrai timeline interactive ou les nouvelles informations seront postées et ou vous pourrez interagir ou déclarer un incident. Cette fonctionnalité réduit les suite de mail en vous proposant une interface claire et facile a suivre du début a la fin.'
            }
          })
        ],
        1
      )
    },
      xt = [],
      ht = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'v-container',
          { staticStyle: { height: '100vh' } },
          [
            n(
              'v-row',
              {
                staticClass: 'py-5 fill-height',
                attrs: {
                  align: 'center',
                  justify: 'center',
                  'data-aos': 'fade-right'
                }
              },
              [
                n(
                  'v-col',
                  {
                    attrs: {
                      cols: '12',
                      md: '6',
                      'order-md': 'first',
                      order: 'last'
                    }
                  },
                  [
                    n('h1', { domProps: { innerHTML: t._s(t.title) } }),
                    n('p', [t._v(t._s(t.text))]),
                    t.img3
                      ? n('v-img', {
                        staticClass: 'mt-5',
                        attrs: {
                          src: a('1771')('./' + t.img3),
                          width: '50%',
                          contain: ''
                        }
                      })
                      : t._e()
                  ],
                  1
                ),
                n(
                  'v-col',
                  {
                    attrs: {
                      cols: '12',
                      md: '6',
                      'order-md': 'last',
                      order: 'fisrt'
                    }
                  },
                  [
                    t.$vuetify.breakpoint.mdAndUp
                      ? n('v-img', {
                        attrs: {
                          src: a('1771')('./' + t.img),
                          'max-height': '80vh',
                          contain: '',
                          'data-aos': 'fade-left'
                        }
                      })
                      : n('v-img', {
                        attrs: {
                          src: a('1771')('./' + t.img2),
                          contain: '',
                          'data-aos': 'fade-left'
                        }
                      })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      },
      At = [],
      _t = {
        props: {
          img: String,
          img2: String,
          img3: String,
          title: String,
          text: String
        }
      },
      wt = _t,
      St = (a('baed'), Object(p['a'])(wt, ht, At, !1, null, '37f852b3', null)),
      Ct = St.exports
    d()(St, { VCol: f['a'], VContainer: x['a'], VImg: w['a'], VRow: y['a'] })
    var Et = function () {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e
      return n(
        'v-container',
        [
          n(
            'v-row',
            {
              staticStyle: { 'margin-top': '3rem' },
              attrs: { align: 'center' }
            },
            [
              n(
                'v-col',
                { staticClass: 'text-center', attrs: { cols: '12' } },
                [
                  n('h3', { domProps: { innerHTML: t._s(t.title) } }),
                  n('p', [t._v(t._s(t.text))])
                ]
              )
            ],
            1
          ),
          n(
            'v-row',
            t._l(t.list, function (e, i) {
              return n(
                'v-col',
                {
                  key: i,
                  attrs: {
                    cols: '12',
                    md: '6',
                    'data-aos': 'zoom-in',
                    'data-aos-delay': t.$vuetify.breakpoint.mdAndUp
                      ? (i % 2) * 300
                      : 0
                  }
                },
                [
                  n(
                    'v-card',
                    [
                      n(
                        'v-row',
                        { attrs: { align: 'center' } },
                        [
                          n(
                            'v-col',
                            { staticClass: 'pa-5', attrs: { md: 'auto' } },
                            [
                              n('v-img', {
                                attrs: {
                                  contain: '',
                                  height: '100',
                                  src: a('1771')('./' + e.img)
                                }
                              })
                            ],
                            1
                          ),
                          n('v-col', [
                            n('h3', { style: 'color:' + t.color }, [
                              t._v(t._s(e.title))
                            ]),
                            n('p', [t._v(t._s(e.text))])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    },
      yt = [],
      It = {
        props: { title: String, text: String, list: Array, color: String }
      },
      Tt = It,
      Pt = Object(p['a'])(Tt, Et, yt, !1, null, null, null),
      Lt = Pt.exports
    d()(Pt, {
      VCard: b['a'],
      VCol: f['a'],
      VContainer: x['a'],
      VImg: w['a'],
      VRow: y['a']
    })
    var Vt = {
      name: 'Digital',
      components: {
        topPage: W,
        doubleImageAndText: Ct,
        itemList: Lt,
        ImgAndTextLeft: rt,
        FullSizeImg: dt
      },
      data: function () {
        return {
          title: 'NP IMMOBILIER <br>& LA DIGITILISATION',
          bgImg: 'paris_illu.png',
          list: [
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            }
          ]
        }
      }
    },
      Dt = Vt,
      Rt = Object(p['a'])(Dt, ft, xt, !1, null, null, null),
      kt = Rt.exports,
      Ot = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a(
          'div',
          [
            a('topPage', { attrs: { title: t.title, bgImg: t.bgImg } }),
            a('ImgAndTextRight', {
              attrs: {
                id: 'next',
                bgcolor: '#F8E475',
                img: 'computer3.png',
                title: 'la gestion c’est quoi ?',
                text: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d’attente. L’avantage de le mettre en latin est que l’opérateur sait au premier coup d’oeil que la page contenant ces lignes n’est pas valide, et surtout l’attention du client n’est pas dérangée par le contenu, il demeure concentré seulement sur l’aspect graphique.',
                btn: 'en savoir +'
              }
            }),
            a('itemList', {
              attrs: {
                color: '#D6AE00',
                title: 'NOTRE OFFRES',
                text: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d’attente. L’avantage de le mettre en latin est que',
                list: t.list
              }
            }),
            a('crew', {
              attrs: {
                color: '#D6AE00',
                title: 'NOTRE ÉQUIPE',
                text: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d’attente. L’avantage de le mettre en latin est que',
                list: t.crew
              }
            })
          ],
          1
        )
      },
      Ft = [],
      Nt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'v-container',
          { staticStyle: { height: '100vh' } },
          [
            n(
              'v-row',
              { staticClass: 'fill-height', attrs: { align: 'center' } },
              [
                n(
                  'v-col',
                  [
                    n(
                      'v-row',
                      {
                        staticClass: 'py-5',
                        attrs: {
                          align: 'center',
                          justify: 'center',
                          id: 'card',
                          'data-aos': 'fade-right'
                        }
                      },
                      [
                        n('div', { ref: 'card', attrs: { id: 'inner-card' } }),
                        n(
                          'v-col',
                          { attrs: { cols: '12', md: '5' } },
                          [
                            n('h1', { domProps: { innerHTML: t._s(t.title) } }),
                            n('p', [t._v(t._s(t.text))]),
                            n(
                              'v-row',
                              [
                                n('v-spacer'),
                                n(
                                  'v-col',
                                  { attrs: { cols: 'auto' } },
                                  [
                                    t.btn
                                      ? n(
                                        'v-btn',
                                        {
                                          attrs: {
                                            color: 'white',
                                            tile: '',
                                            to: { name: t.to }
                                          }
                                        },
                                        [t._v(t._s(t.btn))]
                                      )
                                      : t._e()
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        n('v-spacer'),
                        n(
                          'v-col',
                          { attrs: { cols: '12', md: '6' } },
                          [
                            n('v-img', {
                              attrs: {
                                src: a('1771')('./' + t.img),
                                contain: '',
                                'data-aos': 'fade-left',
                                'max-width': '100vw'
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      },
      qt = [],
      Gt = {
        props: {
          bgcolor: String,
          img: String,
          title: String,
          text: String,
          btn: String,
          to: String
        },
        mounted: function () {
          this.$refs.card.style.backgroundColor = this.bgcolor
        }
      },
      Mt = Gt,
      Ut = (a('391f'), Object(p['a'])(Mt, Nt, qt, !1, null, '3ed17332', null)),
      jt = Ut.exports
    d()(Ut, {
      VBtn: g['a'],
      VCol: f['a'],
      VContainer: x['a'],
      VImg: w['a'],
      VRow: y['a'],
      VSpacer: I['a']
    })
    var Zt = function () {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e
      return n(
        'v-container',
        [
          n(
            'v-row',
            {
              staticStyle: { 'min-height': '50vh' },
              attrs: { align: 'center' }
            },
            [
              n(
                'v-col',
                [
                  n(
                    'v-row',
                    [
                      n(
                        'v-col',
                        { staticClass: 'text-center', attrs: { cols: '12' } },
                        [
                          n('h3', { domProps: { innerHTML: t._s(t.title) } }),
                          n('p', [t._v(t._s(t.text))])
                        ]
                      )
                    ],
                    1
                  ),
                  n(
                    'v-row',
                    t._l(t.list, function (e, i) {
                      return n(
                        'v-col',
                        {
                          key: i,
                          attrs: {
                            cols: '12',
                            md: t.size,
                            'data-aos': 'zoom-in',
                            'data-aos-delay': t.$vuetify.breakpoint.mdAndUp
                              ? (i % t.stop) * 300
                              : 0
                          }
                        },
                        [
                          n('v-hover', {
                            scopedSlots: t._u(
                              [
                                {
                                  key: 'default',
                                  fn: function (i) {
                                    var r = i.hover
                                    return [
                                      n(
                                        'v-card',
                                        {
                                          staticClass: 'pa-5',
                                          attrs: { elevation: r ? 1 : 0 }
                                        },
                                        [
                                          n('v-img', {
                                            staticClass: 'mb-5',
                                            attrs: {
                                              contain: '',
                                              height: '100',
                                              src: a('1771')('./' + e.img)
                                            }
                                          }),
                                          n(
                                            'h3',
                                            {
                                              staticClass: 'text-center',
                                              style: 'color:' + t.color
                                            },
                                            [
                                              t._v(
                                                '\n                ' +
                                                t._s(e.title) +
                                                '\n              '
                                              )
                                            ]
                                          ),
                                          n(
                                            'p',
                                            { staticClass: 'text-center' },
                                            [t._v(t._s(e.text))]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              !0
                            )
                          })
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    },
      Bt = [],
      Ht = {
        props: { title: String, text: String, list: Array, color: String },
        data: function () {
          return { size: 4, stop: 3 }
        },
        mounted: function () {
          ; (this.size = this.list.length % 2 == 0 ? 3 : 4),
            (this.stop = this.list.length % 2 == 0 ? 4 : 3)
        }
      },
      Yt = Ht,
      Jt = a('ce87'),
      zt = Object(p['a'])(Yt, Zt, Bt, !1, null, null, null),
      Qt = zt.exports
    d()(zt, {
      VCard: b['a'],
      VCol: f['a'],
      VContainer: x['a'],
      VHover: Jt['a'],
      VImg: w['a'],
      VRow: y['a']
    })
    var Xt = {
      name: 'Gestion',
      components: { topPage: W, ImgAndTextRight: jt, itemList: Lt, crew: Qt },
      data: function () {
        return {
          title: 'Gestion',
          bgImg: 'gestion_illu.png',
          list: [
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            }
          ],
          crew: [
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            },
            {
              img: 'test.png',
              title: 'test',
              text: 'balbalba balba blab lbalba bal'
            }
          ]
        }
      }
    },
      Kt = Xt,
      $t = Object(p['a'])(Kt, Ot, Ft, !1, null, null, null),
      Wt = $t.exports,
      te = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a(
          'div',
          [
            a('topPage', { attrs: { title: t.title, bgImg: t.bgImg } }),
            a('unitList', {
              attrs: {
                color: '#89FBD2',
                title: 'NOTRE OFFRES',
                text: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d’attente. L’avantage de le mettre en latin est que',
                list: t.list
              }
            }),
            a('crew', {
              attrs: {
                color: '#89FBD2',
                title: 'NOTRE OFFRES',
                text: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d’attente. L’avantage de le mettre en latin est que',
                list: t.crew
              }
            })
          ],
          1
        )
      },
      ee = [],
      ae = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'v-container',
          [
            n(
              'v-row',
              { attrs: { align: 'center' } },
              [
                n(
                  'v-col',
                  { staticClass: 'text-center', attrs: { cols: '12' } },
                  [
                    n('h3', { domProps: { innerHTML: t._s(t.title) } }),
                    n('p', [t._v(t._s(t.text))])
                  ]
                )
              ],
              1
            ),
            n(
              'v-row',
              t._l(t.list, function (e, i) {
                return n(
                  'v-col',
                  {
                    key: i,
                    attrs: {
                      cols: '6',
                      md: '4',
                      'data-aos': 'zoom-in',
                      'data-aos-delay': t.$vuetify.breakpoint.mdAndUp
                        ? 300 * i
                        : 0
                    }
                  },
                  [
                    n(
                      'v-card',
                      { staticClass: 'mx-auto', attrs: { contain: '' } },
                      [
                        n('v-img', {
                          attrs: {
                            height: '200px',
                            src: a('1771')('./' + e.img)
                          }
                        }),
                        n('v-card-title', { staticClass: 'justify-center' }, [
                          n('h4', [t._v(t._s(e.type))])
                        ]),
                        n('v-card-subtitle', { staticClass: 'pb-0' }, [
                          n(
                            'h3',
                            {
                              staticClass: 'text-center',
                              style: 'color:' + t.color
                            },
                            [
                              t._v(
                                '\n            ' +
                                t._s(e.location) +
                                '\n          '
                              )
                            ]
                          )
                        ]),
                        n(
                          'v-card-text',
                          { staticClass: 'text--primary text-center' },
                          [
                            n('div', [
                              t._v(
                                '\n            ' +
                                t._s(e.price) +
                                '€ | ' +
                                t._s(e.surface) +
                                'M² | rèf:' +
                                t._s(e.ref) +
                                '\n          '
                              )
                            ])
                          ]
                        ),
                        n(
                          'v-card-actions',
                          { staticClass: 'pb-5' },
                          [
                            n('v-spacer'),
                            n('v-btn', { attrs: { color: t.color } }, [
                              t._v('En savoir +')
                            ]),
                            n('v-spacer')
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              }),
              1
            ),
            n(
              'v-row',
              { staticClass: 'mt-5' },
              [
                n('v-spacer'),
                n('v-btn', { attrs: { color: t.color, large: '' } }, [
                  t._v('voir plus de biens')
                ]),
                n('v-spacer')
              ],
              1
            )
          ],
          1
        )
      },
      ne = [],
      ie = {
        props: { title: String, text: String, list: Array, color: String }
      },
      re = ie,
      se = Object(p['a'])(re, ae, ne, !1, null, null, null),
      oe = se.exports
    d()(se, {
      VBtn: g['a'],
      VCard: b['a'],
      VCardActions: v['a'],
      VCardSubtitle: v['b'],
      VCardText: v['c'],
      VCardTitle: v['d'],
      VCol: f['a'],
      VContainer: x['a'],
      VImg: w['a'],
      VRow: y['a'],
      VSpacer: I['a']
    })
    var le = {
      name: 'Location',
      components: { topPage: W, unitList: oe, crew: Qt },
      data: function () {
        return {
          title: 'Location',
          bgImg: 'loc_illu.png',
          crew: [
            { img: 'test.png', title: 'Geraldine Petit', text: 'test' },
            { img: 'test.png', title: 'test', text: 'test' },
            { img: 'test.png', title: 'test', text: 'test' }
          ],
          list: [
            {
              img: 'unitTest.png',
              type: 'Appartement',
              location: 'Paris 12 | 75012',
              price: 1e3,
              surface: 40,
              ref: '1837EP'
            },
            {
              img: 'unitTest.png',
              type: 'Appartement',
              location: 'Paris 12 | 75012',
              price: 1e3,
              surface: 40,
              ref: '1837EP'
            },
            {
              img: 'unitTest.png',
              type: 'Appartement',
              location: 'Paris 12 | 75012',
              price: 1e3,
              surface: 40,
              ref: '1837EP'
            },
            {
              img: 'unitTest.png',
              type: 'Appartement',
              location: 'Paris 12 | 75012',
              price: 1e3,
              surface: 40,
              ref: '1837EP'
            },
            {
              img: 'unitTest.png',
              type: 'Appartement',
              location: 'Paris 12 | 75012',
              price: 1e3,
              surface: 40,
              ref: '1837EP'
            },
            {
              img: 'unitTest.png',
              type: 'Appartement',
              location: 'Paris 12 | 75012',
              price: 1e3,
              surface: 40,
              ref: '1837EP'
            }
          ]
        }
      }
    },
      ce = le,
      pe = Object(p['a'])(ce, te, ee, !1, null, null, null),
      ue = pe.exports,
      de = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a(
          'div',
          [
            a('topPage', { attrs: { title: t.title, bgImg: t.bgImg } }),
            a('doubleImageAndText', {
              attrs: {
                id: 'next',
                img: 'archi2Shadow.png',
                img2: 'archi2.png',
                img3: 'PxMP.png',
                title: 'maison passive c’est quoi ?',
                text: 'La Maison Passive est une association loi 1901 qui a vu le jour en 2007. Écologiste et pro-active, elle propose, via la promotion d’un mode constructif particulièrement économe en énergie, une solution concrète pour mettre en place la transition énergétique. Elle a pour but de promouvoir le concept de construction selon le standard Bâtiment Passif, et d’encourager le développement d’une filière professionnelle. Elle compte actuellement 500 membres, professionnels et particuliers.'
              }
            }),
            a('FullSizeImg', {
              attrs: {
                img: 'parc3.png',
                title: 'LE + POUR NP IMMOBILIER ',
                text: 'Le but de ce partenariat est de vous apporter une véritable expertise sur la transition énergétique acquise par nos conseiller former par l’association. Un accompagnement spécialisé et complet pour l’avenir de votre copropriété.'
              }
            })
          ],
          1
        )
      },
      me = [],
      ge = {
        name: 'MaisonPassive',
        components: { topPage: W, doubleImageAndText: Ct, FullSizeImg: dt },
        data: function () {
          return { title: 'Partenriats', bgImg: 'paris_illu.png' }
        }
      },
      be = ge,
      ve = Object(p['a'])(be, de, me, !1, null, null, null),
      fe = ve.exports,
      xe = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a(
          'div',
          [
            a('topPage', { attrs: { title: t.title, bgImg: t.bgImg } }),
            a('ImgAndTextRight', {
              attrs: {
                id: 'next',
                bgcolor: '#817CF1',
                img: 'computer4.png',
                title: 'le syndic c’est quoi ?',
                text: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d’attente. L’avantage de le mettre en latin est que l’opérateur sait au premier coup d’oeil que la page contenant ces lignes n’est pas valide, et surtout l’attention du client n’est pas dérangée par le contenu, il demeure concentré seulement sur l’aspect graphique.',
                btn: 'en savoir +'
              }
            }),
            a('itemList', {
              attrs: {
                color: '#817CF1',
                title: 'NOTRE OFFRES',
                text: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d’attente. L’avantage de le mettre en latin est que',
                list: t.list
              }
            }),
            a('crew', {
              attrs: {
                color: '#817CF1',
                title: 'NOTRE OFFRES',
                text: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d’attente. L’avantage de le mettre en latin est que',
                list: t.crew
              }
            })
          ],
          1
        )
      },
      he = [],
      Ae = {
        name: 'Syndic',
        components: { topPage: W, ImgAndTextRight: jt, itemList: Lt, crew: Qt },
        data: function () {
          return {
            title: 'Syndic',
            bgImg: 'syndic_illu.png',
            list: [
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              }
            ],
            crew: [
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              },
              {
                img: 'test.png',
                title: 'test',
                text: 'balbalba balba blab lbalba bal'
              }
            ]
          }
        }
      },
      _e = Ae,
      we = Object(p['a'])(_e, xe, he, !1, null, null, null),
      Se = we.exports,
      Ce = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a(
          'div',
          [
            a('topPage', { attrs: { title: t.title, bgImg: t.bgImg } }),
            a('unitList', {
              attrs: {
                color: '#FF978E',
                title: 'NOTRE OFFRES',
                text: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d’attente. L’avantage de le mettre en latin est que',
                list: t.list
              }
            }),
            a('doubleImageAndText', {
              attrs: {
                id: 'next',
                img: 'archi3Shadow.png',
                img2: 'archi2.png',
                title: 'partenariat c’est quoi ?',
                text: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d’attente. L’avantage de le mettre en latin est que l’opérateur sait au premier coup d’oeil que la page contenant ces lignes n’est pas valide, et surtout l’attention du client n’est pas dérangée par le contenu, il demeure concentré seulement sur l’aspect graphique.'
              }
            }),
            a('crew', {
              attrs: {
                color: '#FF978E',
                title: 'NOTRE OFFRES',
                text: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d’attente. L’avantage de le mettre en latin est que',
                list: t.crew
              }
            })
          ],
          1
        )
      },
      Ee = [],
      ye = {
        name: 'Transaction',
        components: {
          topPage: W,
          unitList: oe,
          doubleImageAndText: Ct,
          crew: Qt
        },
        data: function () {
          return {
            title: 'Transaction',
            bgImg: 'transac_illu.png',
            crew: [
              { img: 'test.png', title: 'test', text: 'test' },
              { img: 'test.png', title: 'test', text: 'test' },
              { img: 'test.png', title: 'test', text: 'test' },
              { img: 'test.png', title: 'test', text: 'test' }
            ],
            list: [
              {
                img: 'unitTest.png',
                type: 'Appartement',
                location: 'Paris 12 | 75012',
                price: 1e3,
                surface: 40,
                ref: '1837EP'
              },
              {
                img: 'unitTest.png',
                type: 'Appartement',
                location: 'Paris 12 | 75012',
                price: 1e3,
                surface: 40,
                ref: '1837EP'
              },
              {
                img: 'unitTest.png',
                type: 'Appartement',
                location: 'Paris 12 | 75012',
                price: 1e3,
                surface: 40,
                ref: '1837EP'
              },
              {
                img: 'unitTest.png',
                type: 'Appartement',
                location: 'Paris 12 | 75012',
                price: 1e3,
                surface: 40,
                ref: '1837EP'
              },
              {
                img: 'unitTest.png',
                type: 'Appartement',
                location: 'Paris 12 | 75012',
                price: 1e3,
                surface: 40,
                ref: '1837EP'
              },
              {
                img: 'unitTest.png',
                type: 'Appartement',
                location: 'Paris 12 | 75012',
                price: 1e3,
                surface: 40,
                ref: '1837EP'
              }
            ]
          }
        }
      },
      Ie = ye,
      Te = Object(p['a'])(Ie, Ce, Ee, !1, null, null, null),
      Pe = Te.exports,
      Le = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a(
          'v-container',
          [
            a(
              'v-row',
              { attrs: { justify: 'center', id: 'header', align: 'center' } },
              [
                a('v-col', { attrs: { cols: '12', md: '7' } }, [
                  a('h2', [t._v('Mentions légales')])
                ])
              ],
              1
            ),
            a(
              'v-row',
              { attrs: { justify: 'center' } },
              [
                a(
                  'v-col',
                  { attrs: { cols: '12', md: '7' } },
                  [
                    a('h3', { staticClass: 'mt-5' }, [t._v('Raison sociale')]),
                    a('p', [
                      a('b', [t._v('NP IMMOBILIER SARL - capital de 5.000 €')])
                    ]),
                    a('p', [
                      a('b', [t._v('Siège social : ')]),
                      t._v(
                        '56 rue du Faubourg Saint-Antoine, Paris 75012,\n        France\n      '
                      )
                    ]),
                    a('p', [
                      a('b', [t._v('Réception des appels : ')]),
                      t._v(' 01 44 75 74 80'),
                      a('br'),
                      t._v('\n        Lundi au vendredi : 08h00 - 20h00 '),
                      a('br'),
                      t._v('\n        Samedi : 08h00 - 13h00 '),
                      a('br'),
                      a('b', [t._v('Email : ')]),
                      a(
                        'a',
                        { attrs: { href: 'mailto:welcome@pagesti.immo' } },
                        [t._v('welcome@pagesti.immo')]
                      )
                    ]),
                    a('v-divider', { staticClass: 'my-4' }),
                    a('p', [
                      a('b', [t._v('RCS : Paris ')]),
                      t._v('325 314 623')
                    ]),
                    a('p', [
                      a('b', [t._v('Carte professionnelle : ')]),
                      t._v(
                        'CPI 7501 2016 000 012 823 délivrée par\n        la CCI de Paris Île-de-France.\n      '
                      )
                    ]),
                    a('p', [
                      a('b', [t._v('Caisse de garantie financière :')]),
                      a('br'),
                      t._v(
                        '\n        GALIAN – 128 rue de la Boétie, 75008 PARIS à hauteur de '
                      ),
                      a('br'),
                      t._v(
                        '\n        4 000 000€ au titre de l’activité de Syndic '
                      ),
                      a('br'),
                      t._v(
                        '\n        860 000€ au titre de l’activité de Gestion Immobilière '
                      ),
                      a('br'),
                      t._v(
                        '\n        120 000€ au titre de l’activité de Transactions sur Immeubles et Fonds\n        de commerce\n      '
                      )
                    ]),
                    a('p', [
                      a('b', [
                        t._v(
                          'Assurance responsabilité civile professionnelle :'
                        )
                      ]),
                      t._v(
                        ' GALIAN – 128\n        rue de la Boétie, 75008 PARIS\n      '
                      )
                    ]),
                    a('p', [
                      a('b', [
                        t._v('Numéro individuel d’identification à la TVA :')
                      ]),
                      t._v(' FR12 325 314 623\n        00068\n      ')
                    ]),
                    a('p', [
                      t._v(
                        '\n        Adhérent à la Fédération Nationale de l’Immobilier (FNAIM), ayant le\n        titre professionnel d’Administrateur de Biens obtenu en France.\n      '
                      )
                    ]),
                    a('p', [
                      t._v(
                        '\n        PAGESTI SAS exerce la profession d’administrateur de biens. Ses\n        activités de Syndic de Copropriété et Gestion immobilière sont régies\n        par la Loi Hoguet n° 70-9 du 2 janvier 1970.\n      '
                      )
                    ]),
                    a('h3', { staticClass: 'mt-5' }, [
                      t._v(
                        '\n        Directeur de publication & responsable de la rédaction\n      '
                      )
                    ]),
                    a('p', [
                      t._v('Arnaud Le Bihannic, Président de PAGESTI SAS.')
                    ]),
                    a('h3', { staticClass: 'mt-5' }, [
                      t._v('Mise en garde générale')
                    ]),
                    a('p', [
                      a('b', [
                        t._v(
                          '\n          LES INFORMATIONS PRÉSENTES SUR CE SITE N’ONT PAS DE VALEUR\n          CONTRACTUELLE.\n        '
                        )
                      ])
                    ]),
                    a('p', [
                      t._v(
                        '\n        PAGESTI ne peut être tenu responsable en cas de mauvaise utilisation\n        du service par le client ou en cas d’indisponibilité temporaire du\n        service (cas de force majeure, de période de maintenance ou d’incident\n        technique, quel qu’il soit).\n      '
                      )
                    ]),
                    a('h3', { staticClass: 'mt-5' }, [
                      t._v('Droit de propriété intellectuelle')
                    ]),
                    a('p', [
                      t._v(
                        '\n        LA STRUCTURE GÉNÉRALE DU SITE AINSI QUE LES TEXTES, IMAGES ANIMÉES OU\n        NON, VIDÉOS ET LES SONS SONT LA PROPRIÉTÉ DE PAGESTI. TOUTE\n        UTILISATION OU REPRODUCTION, TOTALE OU PARTIELLE, DES INFORMATIONS\n        FIGURANT SUR LE SITE EST STRICTEMENT INTERDITE.\n      '
                      )
                    ]),
                    a('h3', { staticClass: 'mt-5' }, [
                      t._v('Herbergement du site')
                    ]),
                    a('p', [
                      t._v('\n        OVH 14,'),
                      a('br'),
                      t._v('\n        Quai de Sartel '),
                      a('br'),
                      t._v('\n        59100 ROUBAIX France\n      ')
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      },
      Ve = [],
      De = {},
      Re = De,
      ke = (a('05ea'), a('ce7e6')),
      Oe = Object(p['a'])(Re, Le, Ve, !1, null, null, null),
      Fe = Oe.exports
    d()(Oe, {
      VCol: f['a'],
      VContainer: x['a'],
      VDivider: ke['a'],
      VRow: y['a']
    }),
      n['a'].use(H['a'])
    var Ne = new H['a']({
      mode: 'history',
      base: '/',
      routes: [
        { path: '/', name: 'home', component: vt },
        { path: '/digital', name: 'digital', component: kt },
        { path: '/partenariats', name: 'partenariats', component: fe },
        { path: '/gestion', name: 'gestion', component: Wt },
        { path: '/location', name: 'location', component: ue },
        { path: '/transaction', name: 'transaction', component: Pe },
        { path: '/syndic', name: 'syndic', component: Se },
        { path: '/legal', name: 'legal', component: Fe },
        { path: '*', redirect: 'home' }
      ],
      scrollBehavior: function (t, e, a) {
        return a || { x: 0, y: 0 }
      }
    }),
      qe = (a('15f5'), a('5363'), a('f309'))
    n['a'].use(qe['a'])
    var Ge = new qe['a']({
      theme: {
        themes: {
          light: {
            primary: '#7AC3FF',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c'
          }
        }
      }
    }),
      Me = a('f5af'),
      Ue = a.n(Me),
      je = a('0284'),
      Ze = a.n(je)
    a('e829')
    Ue.a.init({ once: !0 }),
      (n['a'].config.productionTip = !1),
      n['a'].use(Ze.a, { id: 'UA-17568976-1', router: Ne }),
      new n['a']({
        router: Ne,
        vuetify: Ge,
        render: function (t) {
          return t(B)
        }
      }).$mount('#app')
  },
  5790: function (t, e, a) {
    'use strict'
    var n = a('0bd8'),
      i = a.n(n)
    i.a
  },
  '5ab1': function (t, e, a) { },
  '5c0b': function (t, e, a) {
    'use strict'
    var n = a('b263'),
      i = a.n(n)
    i.a
  },
  6333: function (t, e, a) {
    t.exports = a.p + 'img/computer.42ed17a0.png'
  },
  '65d0': function (t, e, a) {
    t.exports = a.p + 'img/archi2@2x.0aa2fc18.png'
  },
  7227: function (t, e, a) {
    t.exports = a.p + 'img/illu2@2x.979f8eac.png'
  },
  '7bb9': function (t, e, a) {
    t.exports = a.p + 'img/syndic.04923c50.svg'
  },
  8338: function (t, e, a) {
    t.exports = a.p + 'img/transac_illu@2x.8216dbf2.png'
  },
  8357: function (t, e, a) {
    t.exports = a.p + 'img/test@2x.ac10ec55.png'
  },
  '84fa': function (t, e, a) {
    t.exports = a.p + 'img/parc3@2x.f7d5f772.png'
  },
  8837: function (t, e, a) {
    t.exports = a.p + 'img/computer4.c2d26af4.png'
  },
  '89ae': function (t, e, a) {
    t.exports = a.p + 'img/illu3@2x.ecc51456.png'
  },
  '8b55': function (t, e, a) {
    t.exports = a.p + 'img/map.55a04134.png'
  },
  '8e1a': function (t, e, a) {
    t.exports = a.p + 'img/computerShadow.b337c8f6.png'
  },
  '91c6': function (t, e, a) {
    t.exports = a.p + 'img/illu1@2x.fdf160c0.png'
  },
  9276: function (t, e, a) {
    t.exports = a.p + 'img/syndic_illu.e93ebfb5.png'
  },
  9312: function (t, e, a) {
    t.exports = a.p + 'img/computer3@2x.7accc078.png'
  },
  '935c': function (t, e, a) {
    t.exports = a.p + 'img/gestion.2c7fdce3.svg'
  },
  '94d3': function (t, e, a) {
    t.exports = a.p + 'img/illu2.59f7c54a.png'
  },
  '95d1': function (t, e, a) {
    t.exports = a.p + 'img/archi3Shadow.9d6322bc.png'
  },
  '96cc': function (t, e, a) {
    t.exports = a.p + 'img/archi@2x.528af40a.png'
  },
  '97d0': function (t, e, a) {
    t.exports = a.p + 'img/paris_illu.0e1007fa.png'
  },
  '9b19': function (t, e, a) {
    t.exports = a.p + 'img/logo.7b342285.svg'
  },
  '9ca3': function (t, e, a) { },
  a0b3: function (t, e, a) {
    t.exports = a.p + 'img/illu4@2x.16fea2b0.png'
  },
  a1af: function (t, e, a) {
    t.exports = a.p + 'img/loc_illu.a9983d65.png'
  },
  a1fb: function (t, e, a) {
    t.exports = a.p + 'img/location.f25613e1.svg'
  },
  a232: function (t, e, a) {
    t.exports = a.p + 'img/contactUs.55a9ec2a.png'
  },
  a38a: function (t, e, a) {
    t.exports = a.p + 'img/map@2x.88138cb7.png'
  },
  a3aa: function (t, e, a) {
    'use strict'
    var n = a('a763'),
      i = a.n(n)
    i.a
  },
  a55c: function (t, e, a) {
    t.exports = a.p + 'img/computer3.334df0b1.png'
  },
  a703: function (t, e, a) { },
  a763: function (t, e, a) { },
  a89c: function (t, e, a) {
    t.exports = a.p + 'img/illu1.01da360d.png'
  },
  aac7: function (t, e, a) {
    t.exports = a.p + 'img/archi2.fbb91227.png'
  },
  acf1: function (t, e, a) {
    t.exports = a.p + 'img/unitTest.00a4e1ea.png'
  },
  b120: function (t, e, a) {
    t.exports = a.p + 'img/archi3Shadow@2x.29077834.png'
  },
  b263: function (t, e, a) { },
  b5ec: function (t, e, a) {
    t.exports = a.p + 'img/parc2@2x.cc2bec54.png'
  },
  ba33: function (t, e, a) {
    t.exports = a.p + 'img/transaction.f2514a08.svg'
  },
  baed: function (t, e, a) {
    'use strict'
    var n = a('cbb5'),
      i = a.n(n)
    i.a
  },
  beac: function (t, e, a) {
    t.exports = a.p + 'img/mouse.c6358630.svg'
  },
  c121: function (t, e) {
    t.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAYAAACrHtS+AAAAAXNSR0IArs4c6QAAB9tJREFUeAHtnVmPFFUYhhlQRFyQVVFQcImIGAO4AC5AwCWgMURD0Dtj8EY03qBETTRGf4IXrokIiHFPgKAGETWauISEJcGwjZCwI6sswzI+L+kxZ4qqnu6huruq+/2SJ9VVXVXn1PNNV5+uc6qmSxeHDdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdiADdhATg005bTeidVubW3VMfWC82EAXAhd4QTsg0Nwsqmp6QDThou6SjjJfpgMPghToWcBJV7HeQqOwXE4CothLbxL8k8ydeTBAEm+CmbDejgB5cZeNvgYnoSheTjmhqwjyekKt8ImSCsOs6PXYAic15Bis3rQJGQmHIRKxC52+hnclNXjb6h6kYhxsA8qHYco4AW4tF4E567RhvxhyP8Z+paYhO2stxvUSr8I1HLvDaUe+2nW3QYTadxtYJrrKPWgM3GQJFs/sebDtIQKtbJ8DXwBK+Bv2A9qlauVrha7Wu+XwBUwDtSyvw20vFhs4s2ZJP37Yiv5vRQNkPCXIS5OsXALPN2Z4thOjb/3YCtoX0mxnzfu7UwZ3qZMA4geAP8kZGIhy/uXuct2q7O9Wv39YBao0ZYUSvqYdht7Jl0DCO4JyyEap1kwD7qnWSL7u7Gw32NM4+JHFnb0FZBmlRprX8idGmedZf/CNZWyUSg36awyr1LlNvx+Eb8EoqGLJMMrLYcyRsDqaOHMHwc1+hxpGkDqHRB3an0lzXKK7Yvyu8NiiIYuyebql06x48zEewh9PWqZeZ1mL65mBSmvL6yDMFqYua6a9ajrspDZDf4IDRdev1+LA6fsO0FfJWG8UYu6dLZM9RNnOXRlTFfFonE4uqBK879Rzk+RssaQ/dx0tGQ94RrIIKIxOLqgGvNcZdOVvFfhSFDeQF53C+Yz/TLrCZdgEY2afW+SdH3Km4MKKdm5abhlPeHq8BDROKeratGddWJeo2ZyGVlPuDo+NA4tGv353lSHR60i7qxTq7qUVW7WE66xZhqHFg01kmp2Wqfs8FJurpKf6YTzfakuzeXRbBfm709YXo3FYSNtFwXmZhBkphNeyJxGl2oQQjR0fV192lUNyryWAi8PCl3FH6YTHgg515e/soONMTuR9LdJQPhpi1kt9UUj2GOfYK8a5+5I0wBJfQfiQtfY70qzrGL7oiz1mX8XqYiGXDnSNIDgKRHJ4ew3zOiKXMWDcgbDnqDwP3l9QcULbrQCkNobdgSiw5caBKFTe8UvflDGHGgbAqXps42Wi6odL3IfAPVBx8VRFirpYWMq1bqx70fgCLSFBl9cnWoh3ll7Awhe2mY7YbqZ5eMhtV8f7KsJboDt0BY6q8yGip9V2htosDkEj4SkIUe8dSbUkPsQUrl5gP08AwcgjBXMVKXd0GApPvtwEa1bjJTUjkI3Fz4GGoNeVrCN+uFvga8hGrobRXeoOqphANlKhhJZyn1lupt0LdxXat1Ydzh8Bdq/Tt1haITLDPCpvFShaa2H9MmwEUoJNeo0dv2sRhbLNF5NP7d05vgWTkJcaKTLS5CbwQ5xrnP9l4p8fY8uBH2CS/k9vI71voT1oE6P6+F2KHZdXusdhKe4hPo5U0ctDZD0HvAQbIJSQ7+hRSnxCSsNreUxuuwYAyRFo0rngxpV5xr6va2raNMh16fwGFX1s4jkqEE3Cn6BUj/BrPp/aJvfYQKEfd51IynX3+FJWSBZ6kEbAhrsqJ4tfQ+PhilwM4TJbGF+NSwCdcWuzFN3J/UtK+oy4UkG+EPQ/eF6kMBkuAw0fErdr80kOa7PnbccNmADNmADNmADNmADNmADNmADNmADNmADNmADNhA1ULeXVrmMqkuoeq5qD1CPl441HNyo+9Z02+8uLqvuYNoQkduEFxI6iCzp0VlKru4m1YAGJVgDI9Rpouvl6ihJOk4lXbckbwMlfwushK2wAg7zx7CHad1EkojMHSAJ1qdTCRwN02EGVPpJTnq0h0bININGu+gPQ/8rpSWvnS25SDjJHovkOaBk6+kPYfcms1UJPZH5GOgsoMQvAHWlrmWam8hswkmyxqiNgRdhAujR2cVCp2d9+s58ApnqFK3uz72gpz6pa1R/LL1Ap33NqwzNayiz5suNQ2ywCpT8ZST/r3J34PULBki4Rpl2FLrdZxk8AfdA2bcasc2VMBYehQ9gI7RAZ2IJG43KchIz9wlH2N0ImwtDY8TtZJlGpiyFZlgDx/lkaURLKkH5Gi0zENQgVMNPXyf9YDyoTjorFPOmhwNsgE9B/yJLDUBHnAFkD4PdEIbGlGtA4XOQyu1DcWV3tIyyNTp2EDwPH0EzdDRgchvrTAM1OB1RA4jRs8/D2MzMRKh0azxalaLz1EcPBugNI+FN2AlJcYA39JPRETWAGCW87faet3it02rmg3oq+Y/DXNgMYRtgL/MaTOmIGkBMH/gBZkXfy9M89Z8EC0D3py0C/SpwxBlATkc/v+I2y+QyjmUwxD0cOJP1daVswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAYybeA/WctFN5gCgzUAAAAASUVORK5CYII='
  },
  c28f: function (t, e, a) { },
  c4ab: function (t, e, a) {
    t.exports = a.p + 'img/syndic_illu@2x.3c617036.png'
  },
  c551: function (t, e, a) {
    t.exports = a.p + 'img/arrow_down.9b7a4535.svg'
  },
  cb3c: function (t, e, a) {
    t.exports = a.p + 'img/loc_illu@2x.a96a2962.png'
  },
  cbb5: function (t, e, a) { },
  d003: function (t, e, a) {
    t.exports = a.p + 'img/computer2@2x.20db063f.png'
  },
  d112: function (t, e, a) {
    t.exports = a.p + 'img/illu4.1d5d0f90.png'
  },
  d2c3: function (t, e, a) {
    t.exports = a.p + 'img/transac_illu.f921e07b.png'
  },
  dd19: function (t, e, a) {
    t.exports = a.p + 'img/archi2Shadow@2x.65df9e1e.png'
  },
  e72a: function (t, e, a) {
    t.exports = a.p + 'img/unitTest@2x.bc0ea1a5.png'
  },
  eaec: function (t, e, a) {
    'use strict'
    var n = a('5ab1'),
      i = a.n(n)
    i.a
  },
  ec32: function (t, e, a) {
    t.exports = a.p + 'img/parc3.fcfed511.png'
  },
  ed42: function (t, e, a) {
    'use strict'
    var n = a('a703'),
      i = a.n(n)
    i.a
  },
  faaf: function (t, e, a) {
    'use strict'
    var n = a('0192'),
      i = a.n(n)
    i.a
  }
})
//# sourceMappingURL=app.52e086c4.js.map
