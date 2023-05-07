export default defineEventHandler(async (event) => {
    
    console.log("patch called");

    return {
        patched: true,
    }
});
