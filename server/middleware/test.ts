export default defineEventHandler((event) => {
  console.log("middleware called");
  event.context.auth = { user: 123 };
});
