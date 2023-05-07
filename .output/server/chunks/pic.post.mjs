import { eventHandler, readBody } from 'h3';

const pic_post = eventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  return "Data from Post Method";
});

export { pic_post as default };
//# sourceMappingURL=pic.post.mjs.map
