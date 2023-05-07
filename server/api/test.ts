export default defineEventHandler(async (event)=>{


    const data = await $fetch("https://test-nuxt-mu-five.vercel.app");
    return {
       data: data,
    }
})