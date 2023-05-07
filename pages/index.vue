<template>
  <div>I am home page</div>
  <p>
    <v-btn variant="flat" color="pink" @click="makeCall">Make Call</v-btn>
    <v-btn variant="flat" color="pink" @click="makeCall2">Make Call2</v-btn>
    <v-btn variant="flat" color="pink" @click="makeCall3">Make Call3</v-btn>
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
const makeCall2 = async () => {
  try {
    const data = await $fetch("/api/pic", {
      method: "POST",
      body: JSON.stringify({ id: "alex" }),
    });
    console.log(data, "call2");
  } catch (error) {
    console.log(error);
  }
};

const makeCall3 = async () => {
  try {
    const data = await $fetch("/api/getData", {
      method: "GET",
    });
    console.log(data, "call2");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
