import { defineEventHandler } from 'h3';

const test = defineEventHandler((event) => {
  return {
    api: "ready"
  };
});

export { test as default };
//# sourceMappingURL=test.mjs.map
