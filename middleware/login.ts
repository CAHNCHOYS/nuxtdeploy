import { useGlobalStore } from "~/stores/global";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useGlobalStore();

  console.log(store.id, "logina middleware");
  navigateTo("/about");
});
