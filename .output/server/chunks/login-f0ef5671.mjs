import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, withModifiers, useSSRContext } from 'vue';
import { u as useGlobalStore, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const globalStore = useGlobalStore();
    const form = ref({
      email: "",
      password: ""
    });
    const loginSubmit = async () => {
      console.log(form.value);
      try {
        const data = await $fetch("/api/login", {
          method: "post",
          body: { ...form.value }
        });
        globalStore.isUserLoggedIn = true;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const getData = async () => {
      try {
        const data = await $fetch("/api/datas/myParam", {
          method: "GET"
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const navigate = async () => {
      await navigateTo("/");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen d-flex justify-center align-center bg-grey" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_card, {
        width: "480",
        class: "pa-e",
        elevation: "5",
        color: "white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_title, { class: "text-center text-wrap" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi, quisquam nisi architecto officiis temporibus magnam neque eius tempora mollitia voluptatum perferendis asperiores? Quia consequatur alias sed cupiditate deserunt sequi?!`);
                } else {
                  return [
                    createTextVNode("\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi, quisquam nisi architecto officiis temporibus magnam neque eius tempora mollitia voluptatum perferendis asperiores? Quia consequatur alias sed cupiditate deserunt sequi?!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_form, { onSubmit: loginSubmit }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      variant: "outlined",
                                      label: "password",
                                      "hide-details": "auto",
                                      modelValue: unref(form).password,
                                      "onUpdate:modelValue": ($event) => unref(form).password = $event
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        variant: "outlined",
                                        label: "password",
                                        "hide-details": "auto",
                                        modelValue: unref(form).password,
                                        "onUpdate:modelValue": ($event) => unref(form).password = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      variant: "outlined",
                                      label: "email",
                                      hint: "\u0412\u0430\u0448 \u0435\u043C\u0430\u0439\u043B",
                                      "hide-details": "auto",
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        variant: "outlined",
                                        label: "email",
                                        hint: "\u0412\u0430\u0448 \u0435\u043C\u0430\u0439\u043B",
                                        "hide-details": "auto",
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": ($event) => unref(form).email = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      variant: "flat",
                                      color: "green",
                                      height: "50",
                                      type: "submit"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C `);
                                        } else {
                                          return [
                                            createTextVNode(" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      variant: "flat",
                                      color: "green",
                                      height: "50",
                                      onClick: getData
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u0443\u043A\u0438 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u0443\u043A\u0438 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      variant: "flat",
                                      color: "blue",
                                      height: "50",
                                      onClick: navigate
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Home `);
                                        } else {
                                          return [
                                            createTextVNode(" Home ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_btn, {
                                        variant: "flat",
                                        color: "green",
                                        height: "50",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        variant: "flat",
                                        color: "green",
                                        height: "50",
                                        onClick: getData
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u0443\u043A\u0438 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        variant: "flat",
                                        color: "blue",
                                        height: "50",
                                        onClick: navigate
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Home ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      variant: "outlined",
                                      label: "password",
                                      "hide-details": "auto",
                                      modelValue: unref(form).password,
                                      "onUpdate:modelValue": ($event) => unref(form).password = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      variant: "outlined",
                                      label: "email",
                                      hint: "\u0412\u0430\u0448 \u0435\u043C\u0430\u0439\u043B",
                                      "hide-details": "auto",
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      variant: "flat",
                                      color: "green",
                                      height: "50",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      variant: "flat",
                                      color: "green",
                                      height: "50",
                                      onClick: getData
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u0443\u043A\u0438 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      variant: "flat",
                                      color: "blue",
                                      height: "50",
                                      onClick: navigate
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Home ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    variant: "outlined",
                                    label: "password",
                                    "hide-details": "auto",
                                    modelValue: unref(form).password,
                                    "onUpdate:modelValue": ($event) => unref(form).password = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    variant: "outlined",
                                    label: "email",
                                    hint: "\u0412\u0430\u0448 \u0435\u043C\u0430\u0439\u043B",
                                    "hide-details": "auto",
                                    modelValue: unref(form).email,
                                    "onUpdate:modelValue": ($event) => unref(form).email = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    variant: "flat",
                                    color: "green",
                                    height: "50",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    variant: "flat",
                                    color: "green",
                                    height: "50",
                                    onClick: getData
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u0443\u043A\u0438 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    variant: "flat",
                                    color: "blue",
                                    height: "50",
                                    onClick: navigate
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Home ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_form, {
                      onSubmit: withModifiers(loginSubmit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  variant: "outlined",
                                  label: "password",
                                  "hide-details": "auto",
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  variant: "outlined",
                                  label: "email",
                                  hint: "\u0412\u0430\u0448 \u0435\u043C\u0430\u0439\u043B",
                                  "hide-details": "auto",
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  variant: "flat",
                                  color: "green",
                                  height: "50",
                                  type: "submit"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  variant: "flat",
                                  color: "green",
                                  height: "50",
                                  onClick: getData
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u0443\u043A\u0438 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  variant: "flat",
                                  color: "blue",
                                  height: "50",
                                  onClick: navigate
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Home ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_title, { class: "text-center text-wrap" }, {
                default: withCtx(() => [
                  createTextVNode("\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi, quisquam nisi architecto officiis temporibus magnam neque eius tempora mollitia voluptatum perferendis asperiores? Quia consequatur alias sed cupiditate deserunt sequi?!")
                ]),
                _: 1
              }),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_v_form, {
                    onSubmit: withModifiers(loginSubmit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                variant: "outlined",
                                label: "password",
                                "hide-details": "auto",
                                modelValue: unref(form).password,
                                "onUpdate:modelValue": ($event) => unref(form).password = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                variant: "outlined",
                                label: "email",
                                hint: "\u0412\u0430\u0448 \u0435\u043C\u0430\u0439\u043B",
                                "hide-details": "auto",
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                variant: "flat",
                                color: "green",
                                height: "50",
                                type: "submit"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                variant: "flat",
                                color: "green",
                                height: "50",
                                onClick: getData
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u0443\u043A\u0438 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                variant: "flat",
                                color: "blue",
                                height: "50",
                                onClick: navigate
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Home ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-f0ef5671.mjs.map
