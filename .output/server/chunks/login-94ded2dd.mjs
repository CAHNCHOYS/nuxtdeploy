import { d as defineNuxtRouteMiddleware, u as useGlobalStore, n as navigateTo } from './server.mjs';
import 'vue';
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
import 'vue/server-renderer';
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

const login = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const store = useGlobalStore();
  console.log(store.id, "logina middleware");
  navigateTo("/about");
});

export { login as default };
//# sourceMappingURL=login-94ded2dd.mjs.map
