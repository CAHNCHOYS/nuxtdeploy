import { eventHandler } from 'h3';

const getData_get = eventHandler(async (event) => {
  console.log("method called");
  return "Data from getData get Method";
});

export { getData_get as default };
//# sourceMappingURL=getData.get.mjs.map
