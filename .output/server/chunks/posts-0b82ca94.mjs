import { defineComponent, withAsyncContext, resolveComponent, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useGlobalStore } from './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'ohash';
import 'axios';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "posts",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const globalStore = useGlobalStore();
    [__temp, __restore] = withAsyncContext(() => globalStore.getData()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-h3">Posts page</h3>`);
      if (unref(globalStore).products.length) {
        _push(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(globalStore).products, (product) => {
                _push2(ssrRenderComponent(_component_v_col, {
                  cols: "4",
                  key: product.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_v_card, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_v_card_title, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_img, {
                                    src: product.image,
                                    height: 350
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<p${_scopeId5}></p>`);
                                      } else {
                                        return [
                                          createVNode("p")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_v_img, {
                                      src: product.image,
                                      height: 350
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p")
                                      ]),
                                      _: 2
                                    }, 1032, ["src"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_card_text, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<p${_scopeId4}>${ssrInterpolate(product.title)}</p>`);
                                } else {
                                  return [
                                    createVNode("p", null, toDisplayString(product.title), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_card_actions, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_btn, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` \u041A\u0443\u043F\u0438\u0442\u044C `);
                                      } else {
                                        return [
                                          createTextVNode(" \u041A\u0443\u043F\u0438\u0442\u044C ")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_v_btn, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041A\u0443\u043F\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: product.image,
                                    height: 350
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p")
                                    ]),
                                    _: 2
                                  }, 1032, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode("p", null, toDisplayString(product.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_card_actions, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041A\u0443\u043F\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_v_card, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: product.image,
                                  height: 350
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p")
                                  ]),
                                  _: 2
                                }, 1032, ["src"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode("p", null, toDisplayString(product.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_card_actions, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041A\u0443\u043F\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(globalStore).products, (product) => {
                  return openBlock(), createBlock(_component_v_col, {
                    cols: "4",
                    key: product.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                src: product.image,
                                height: 350
                              }, {
                                default: withCtx(() => [
                                  createVNode("p")
                                ]),
                                _: 2
                              }, 1032, ["src"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode("p", null, toDisplayString(product.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_card_actions, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, null, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041A\u0443\u043F\u0438\u0442\u044C ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=posts-0b82ca94.mjs.map
