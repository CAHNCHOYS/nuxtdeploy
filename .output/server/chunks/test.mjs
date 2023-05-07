import { defineEventHandler } from 'h3';

const test = defineEventHandler(async (event) => {
  const data = await $fetch("https://test-nuxt-mu-five.vercel.app");
  return {
    data
  };
});

export { test as default };
//# sourceMappingURL=test.mjs.map
