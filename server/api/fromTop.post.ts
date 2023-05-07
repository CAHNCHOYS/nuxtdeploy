export default defineEventHandler(async (event) => {
    const body = await readBody(event);
  
    // console.log(event.context.auth);
    console.log(body);
  
  
    

    return {data: "getted"};
  });
  