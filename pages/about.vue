<template>
  <div>
    About page

    <v-btn variant="flat" height="50" color="orange" class="text-white"
      >I am button</v-btn
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
</script>

<style scoped>
body {
  background-color: black;
}
</style>
