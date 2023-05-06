<template>
  <div>
    <h3>This is protected Page</h3>
    <p>Current user - {{ globalStore.user }}</p>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores/global";
definePageMeta({
  title: "my TItle",
});

const globalStore = useGlobalStore();

try {
  const data = await useFetch("/api/auth/errorg", {
    method: "post",
    body: { id: 20 },
  });

  console.log(data.data.value, "data");
} catch (error) {
  console.log(error);
  console.log("some error happened");
}
</script>

<style scoped></style>
