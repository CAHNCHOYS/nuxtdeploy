<template>
  <v-app-bar height="70" color="orange">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <p>Main Layout</p>
    <v-spacer></v-spacer>
    <v-btn><NuxtLink to="/">Home</NuxtLink></v-btn>
    <v-btn><NuxtLink to="/about">About</NuxtLink></v-btn>
    <v-btn><NuxtLink to="/profiles/2">Profile</NuxtLink></v-btn>
    <v-btn><NuxtLink to="/login">Login</NuxtLink></v-btn>
    <v-btn><NuxtLink to="/posts">Posts</NuxtLink></v-btn>
    <v-btn><NuxtLink to="/protected">Protected</NuxtLink></v-btn>
  </v-app-bar>

  <v-main>
    <slot></slot>
  </v-main>

  <v-footer :app="true" height="70" color="pink"> Hello from footer </v-footer>
</template>

<script setup lang="ts">


</script>

<style scoped></style>
