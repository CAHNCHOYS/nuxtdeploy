import { defineEventHandler, readBody } from 'h3';

const pic_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  return { ...body };
});

export { pic_post as default };
//# sourceMappingURL=pic.post.mjs.map
