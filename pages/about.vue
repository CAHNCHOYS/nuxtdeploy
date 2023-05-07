<template>
  <div>
    About page

    <v-btn variant="flat" height="50" color="orange" class="text-white"
      >I am button</v-btn
    >

    <v-btn
      variant="flat"
      height="50"
      color="green"
      class="text-white"
      @click="makeCall2"
      >Pic POST</v-btn
    >
    <v-btn
      variant="flat"
      height="50"
      color="yellow"
      class="text-white"
      @click="makeCall3"
      >get test</v-btn
    >

    <v-btn
      variant="flat"
      height="50"
      color="blue"
      class="text-white"
      @click="makeCall4"
      >get car</v-btn
    >

    <v-btn
      variant="flat"
      height="50"
      color="red"
      class="text-white"
      @click="makeCall5"
      >get OTher backend</v-btn
    >

    <v-btn
      variant="flat"
      height="50"
      color="red"
      class="text-white"
      @click="makeCall6"
      >Patch data</v-btn
    >

    <AboutInfo />

    <v-sheet border="lg" color="pink" class="pa-5">
      <p class="text-center text-h6">{{ count }}</p>
    </v-sheet>

    <p>
      <v-btn variant="flat" height="50" color="black" @click="addOne"
        >Add</v-btn
      >
    </p>

    <img src="~/assets/MassEffect.png" alt="Assets" />
    <!-- <v-img :src="Image"></v-img> -->
  </div>
</template>

<script setup lang="ts">
const { count, addOne } = useCount();

const makeCall2 = async () => {
  try {
    const data = await $fetch("/api/pic", {
      method: "post",
      body: { id: 2 },
    });
    console.log(data, "data-about");
  } catch (error) {
    console.log(error, "error happened");
  }
};

const makeCall3 = async () => {
  try {
    const data = await $fetch("/api/test", {
      method: "get",
    });
    console.log(data, "test");
  } catch (error) {
    console.log(error, "error happened");
  }
};

const makeCall4 = async () => {
  try {
    const data = await $fetch("https://nuxtdeploy-five.vercel.app/about/car", {
      method: "get",
    });
    console.log(data, "test");
  } catch (error) {
    console.log(error, "error happened");
  }
};

const makeCall5 = async () => {
  try {
    const data = await $fetch("https://test-nuxt-mu-five.vercel.app", {
      method: "get",
    });
    console.log(data, "vercel backend");
  } catch (error) {
    console.log(error, "error happened");
  }
};


const makeCall6 = async () => {
  try {
    const data = await $fetch("/api/tryPatch", {
      method: "PATCH",
    });
    console.log(data, "PAtch method");
  } catch (error) {
    console.log(error, "error happened");
  }
};




</script>

<style scoped>
body {
  background-color: black;
}
</style>
