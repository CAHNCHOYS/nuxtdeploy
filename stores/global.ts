type Product = {
  id: number;
  category: string;
  title: string;
  image: string;
};

export const useGlobalStore = defineStore("global", () => {
  const id = ref(100);

  const list = ref(["item1", "list2", "wtf", "dick"]);

  const products = ref<Product[]>([]);
  const user = ref<{ email: string } | null>(null);

  const isUserLoggedIn = ref(false);

  async function getData() {
    const { data } = await useFetch<Product[]>(
      "https://fakestoreapi.com/products",
      {}
    );
    console.log(data.value);
    products.value = data.value as Product[];
  }

  async function getUser() {
  
    const headers = useRequestHeaders(["cookie"]);
    const { data, error } = await useFetch<{ email: string }>(
      "/api/auth/verify",
      {
        credentials: "include",
        headers,
        server: false,
      }
    );
    if (!error.value) {
      console.log("No error");
      isUserLoggedIn.value = true;
      console.log(data.value);
    } else {
      console.log("error", error.value);
    }
  }

  return { id, list, getData, getUser, products, user, isUserLoggedIn };
});
