export default defineEventHandler((event)=>{
   
  const cookies = parseCookies(event);
  console.log(cookies,'cookies');
  const params = event.context.params!.name;


  return {
    data: params,
  }

})