import { defineEventHandler } from 'h3';

const getData_get = defineEventHandler(async (event) => {
  console.log("method called");
  return {
    api: "Works"
  };
});

export { getData_get as default };
//# sourceMappingURL=getData.get.mjs.map
