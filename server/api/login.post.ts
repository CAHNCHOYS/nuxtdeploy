import jwt from "jsonwebtoken";

export default eventHandler(async (event) => {
  const body = await readBody(event);

  // console.log(event.context.auth);
  console.log(body);
  // console.log(query);

  const token = jwt.sign({ email: body.email }, "key", {
    expiresIn: "2h",
  });

  // setCookie(event, "token", token, {
  //   maxAge: 24 * 3600 * 1000,
  //   httpOnly: true,
  // });

  return {
    data: "getted",
    token,
  };
});
