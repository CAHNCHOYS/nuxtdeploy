import { defineComponent, resolveComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const makeCall = async () => {
      try {
        const data = await $fetch("/api/auth/errorg", {
          method: "POST",
          body: { id: 20 }
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const makeCall2 = async () => {
      try {
        const data = await $fetch("/api/pic", {
          method: "post",
          body: { id: 2 }
        });
        console.log(data, "/api/pic");
      } catch (error) {
        console.log(error);
      }
    };
    const makeCall3 = async () => {
      try {
        const data = await $fetch("/api/getData");
        console.log("get Data", data);
      } catch (error) {
        console.log(error);
      }
    };
    const makeCall4 = async () => {
      try {
        const data = await $fetch("https://test-nuxt-mu-five.vercel.app/auth/login", {
          method: "post",
          body: { email: "123@mail.ru", password: 20 }
        });
        console.log("Post", data);
      } catch (error) {
        console.log(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[--><div>I am home page</div><p>`);
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "flat",
        color: "pink",
        onClick: makeCall
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Make Call`);
          } else {
            return [
              createTextVNode("Make Call")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "flat",
        color: "pink",
        onClick: makeCall2
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Make Call2`);
          } else {
            return [
              createTextVNode("Make Call2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "flat",
        color: "black",
        onClick: makeCall3
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Make Call3`);
          } else {
            return [
              createTextVNode("Make Call3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "flat",
        color: "red",
        onClick: makeCall4
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Make Call4`);
          } else {
            return [
              createTextVNode("Make Call4")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-63d56c45.mjs.map
