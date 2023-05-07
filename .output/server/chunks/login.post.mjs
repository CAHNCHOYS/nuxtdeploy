import { defineEventHandler, readBody } from 'h3';
import jwt from 'jsonwebtoken';

const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  const token = jwt.sign({ email: body.email }, "key", {
    expiresIn: "2h"
  });
  return {
    data: "getted",
    token
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
