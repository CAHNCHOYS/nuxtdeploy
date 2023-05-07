import { defineEventHandler, parseCookies } from 'h3';

const _name__get = defineEventHandler((event) => {
  const cookies = parseCookies(event);
  console.log(cookies, "cookies");
  const params = event.context.params.name;
  return {
    data: params
  };
});

export { _name__get as default };
//# sourceMappingURL=_name_.get.mjs.map
