<template>
  <div>
    <h2>I am + {{ route.params.id }} page</h2>
    <div>
      <v-text-field
        v-model="searchRef"
        variant="outlined"
        color="pink"
        hide-details="auto"
      >
      </v-text-field>

      <v-list>
        <v-list-item v-for="item in getSearchedItems">
          <v-list-item-title> {{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "~/stores/global";

const { $hello } = useNuxtApp();

$hello();

const route = useRoute();

const globalStore = useGlobalStore();
const searchRef = ref("");

const getSearchedItems = computed(() => {
  return globalStore.list.filter((item) =>
    item.toLowerCase().includes(searchRef.value.toLowerCase())
  );
});
</script>

<style scoped></style>
