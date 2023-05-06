<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">



onMounted(() => {
  console.log("App mounted");
});
</script>

<style scoped></style>
