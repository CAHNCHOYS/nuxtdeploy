<template>
  <div>I am home page</div>
  <p>
    <v-btn variant="flat" color="pink" @click="makeCall">Make Call</v-btn>
  </p>
</template>

<script setup lang="ts">
const makeCall = async () => {
  try {
    const data = await $fetch("/api/auth/errorg", {
      method: "POST",
      body: { id: 20 },
    });

  } catch (error) {
    console.log(error);
  }
};



</script>

<style scoped></style>
