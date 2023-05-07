import { defineEventHandler, parseCookies, createError } from 'h3';
import jwt from 'jsonwebtoken';

const verify_get = defineEventHandler(async (event) => {
  const { token } = parseCookies(event);
  console.log(token, "token");
  try {
    const result = await jwt.verify(token, "key");
    console.log(result, "token result");
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 400,
      message: "error happened",
      statusMessage: "Not authorizied"
    });
  }
  return "NOTHING CHANGES";
});

export { verify_get as default };
//# sourceMappingURL=verify.get.mjs.map
