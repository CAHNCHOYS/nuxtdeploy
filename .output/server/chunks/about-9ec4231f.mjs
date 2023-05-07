import { b as buildAssetsURL } from './renderer.mjs';
import { useSSRContext, defineComponent, resolveComponent, withCtx, createTextVNode, unref, createVNode, toDisplayString, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "info-body" }, _attrs))} data-v-13f7e1ba><div class="info-body__header" data-v-13f7e1ba>I am info</div><div class="info-body__text" data-v-13f7e1ba> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae nulla obcaecati tenetur beatae. Culpa, alias? Pariatur, perspiciatis magnam mollitia quidem accusantium molestias inventore minima fugiat eius ipsa nisi minus! </div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-13f7e1ba"]]);
const useCount = () => {
  const count = ref(0);
  const addOne = () => count.value++;
  return { count, addOne };
};
const _imports_0 = "" + buildAssetsURL("MassEffect.9131b7e9.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { count, addOne } = useCount();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_AboutInfo = __nuxt_component_0;
      const _component_v_sheet = resolveComponent("v-sheet");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fa9de5aa> About page `);
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "flat",
        height: "50",
        color: "orange",
        class: "text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`I am button`);
          } else {
            return [
              createTextVNode("I am button")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AboutInfo, null, null, _parent));
      _push(ssrRenderComponent(_component_v_sheet, {
        border: "lg",
        color: "pink",
        class: "pa-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-center text-h6" data-v-fa9de5aa${_scopeId}>${ssrInterpolate(unref(count))}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-center text-h6" }, toDisplayString(unref(count)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p data-v-fa9de5aa>`);
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "flat",
        height: "50",
        color: "black",
        onClick: unref(addOne)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Add`);
          } else {
            return [
              createTextVNode("Add")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><img${ssrRenderAttr("src", _imports_0)} alt="Assets" data-v-fa9de5aa></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa9de5aa"]]);

export { about as default };
//# sourceMappingURL=about-9ec4231f.mjs.map
