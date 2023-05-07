import { defineEventHandler, readBody } from 'h3';

const errorg_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  return "Hi from data";
});

export { errorg_post as default };
//# sourceMappingURL=errorg.post.mjs.map
