<template>
  <div>
    <h3 class="text-h3">Posts page</h3>

    <v-row v-if="globalStore.products.length">
      <v-col cols="4" v-for="product in globalStore.products" :key="product.id">
        <v-card>
          <v-card-title>
            <v-img :src="product.image" :height="350">
              <p></p>
            </v-img>
          </v-card-title>

          <v-card-text>
            <p>{{ product.title }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn> Купить </v-btn>
          </v-card-actions>
        </v-card>

        <!-- {{ product }} -->
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "~/stores/global";

const globalStore = useGlobalStore();

// const {data} =await useFetch("https://fakestoreapi.com/products");

// products.value = data.value as Product[];

await globalStore.getData();

onMounted(async () => {
  console.log("I am mounted");
//   const productsBack = await $fetch<Product[]>(
//     "https://fakestoreapi.com/products"
//   );
//   products.value = productsBack;
  // await globalStore.getData();

 
//   const { data } = await $axios.get("https://fakestoreapi.com/products");
//   console.log(data, "fetch api");
//   products.value = data;
});
</script>

<style scoped></style>
