import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const { token } = parseCookies(event);

  // await new Promise((res) => {
  //   setTimeout(() => res("done"), 3500);
  // });
  console.log(token, "token");

  let decodedToken = "";
  try {
    const result = await jwt.verify(token, "key");
    console.log(result, "token result");
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 400,
      message: "error happened",
      statusMessage: 'Not authorizied',
    })

  } 


  return "NOTHING CHANGES";
});
