export default eventHandler(async (event) => {
    const body = await readBody(event);
  
    // console.log(event.context.auth);
    console.log(body);
  
  
    

    return "Data from Post Method";
  });
  