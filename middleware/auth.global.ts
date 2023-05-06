import { useGlobalStore } from "~/stores/global";

export default defineNuxtRouteMiddleware(async (to, from) => {
  //   if (process.server) return;
  const globalStore = useGlobalStore();

  //   console.log(to.name, from.name);
  //   console.log(globalStore.isUserLoggedIn);
  if (to.name === from.name) {
    console.log("procces", process.server);
    console.log("process client", process.client);
    //if (process.server)
     await globalStore.getUser();
  }
  //   console.log(globalStore.isUserLoggedIn);

  if (
    to.path != "/login" &&
    to.path != "/about" &&
    !globalStore.isUserLoggedIn
  ) {
    console.log(true);
    return navigateTo({ path: "/login", query: { isExpToken: "true" } });
  }
});
