<template>
  <div>
    <h3>This is protected Page</h3>
    
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "my TItle",
});

const {data, error} = await useFetch('/api/fromTop', {
  method: "POST",
  body: {id: 44, name: "Alex"},
})

if(error.value){
  console.log(error.value, "error");
}else {
  console.log(data.value, "data");
}


</script>

<style scoped></style>
