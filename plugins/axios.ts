import axios from "axios";

export default defineNuxtPlugin(() => {
  console.log("HELLO Axios plugin");

  const axiosInstance = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    provide: {
      hello: function () {
        console.log("I am function plugin");
      },
      axios: axiosInstance,
    },
  };
});
