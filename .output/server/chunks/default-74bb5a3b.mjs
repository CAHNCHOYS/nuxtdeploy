import { _ as __nuxt_component_0 } from './nuxt-link-691ee40a.mjs';
import { resolveComponent, withCtx, createTextVNode, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ufo';
import './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_app_bar = resolveComponent("v-app-bar");
  const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_NuxtLink = __nuxt_component_0;
  const _component_v_main = resolveComponent("v-main");
  const _component_v_footer = resolveComponent("v-footer");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_app_bar, {
    height: "70",
    color: "orange"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_app_bar_nav_icon, null, null, _parent2, _scopeId));
        _push2(`<p${_scopeId}>Main Layout</p>`);
        _push2(ssrRenderComponent(_component_v_spacer, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Home`);
                  } else {
                    return [
                      createTextVNode("Home")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/" }, {
                  default: withCtx(() => [
                    createTextVNode("Home")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`About`);
                  } else {
                    return [
                      createTextVNode("About")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/about" }, {
                  default: withCtx(() => [
                    createTextVNode("About")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/profiles/2" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Profile`);
                  } else {
                    return [
                      createTextVNode("Profile")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/profiles/2" }, {
                  default: withCtx(() => [
                    createTextVNode("Profile")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Login`);
                  } else {
                    return [
                      createTextVNode("Login")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/login" }, {
                  default: withCtx(() => [
                    createTextVNode("Login")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/posts" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Posts`);
                  } else {
                    return [
                      createTextVNode("Posts")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/posts" }, {
                  default: withCtx(() => [
                    createTextVNode("Posts")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/protected" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Protected`);
                  } else {
                    return [
                      createTextVNode("Protected")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/protected" }, {
                  default: withCtx(() => [
                    createTextVNode("Protected")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_app_bar_nav_icon),
          createVNode("p", null, "Main Layout"),
          createVNode(_component_v_spacer),
          createVNode(_component_v_btn, null, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "/" }, {
                default: withCtx(() => [
                  createTextVNode("Home")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_btn, null, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "/about" }, {
                default: withCtx(() => [
                  createTextVNode("About")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_btn, null, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "/profiles/2" }, {
                default: withCtx(() => [
                  createTextVNode("Profile")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_btn, null, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "/login" }, {
                default: withCtx(() => [
                  createTextVNode("Login")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_btn, null, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "/posts" }, {
                default: withCtx(() => [
                  createTextVNode("Posts")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_btn, null, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "/protected" }, {
                default: withCtx(() => [
                  createTextVNode("Protected")
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
  }, _parent));
  _push(ssrRenderComponent(_component_v_main, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent(_component_v_footer, {
    app: true,
    height: "70",
    color: "pink"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Hello from footer `);
      } else {
        return [
          createTextVNode(" Hello from footer ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-74bb5a3b.mjs.map
