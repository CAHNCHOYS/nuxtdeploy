<template>
  <div>
    <h3>This is protected Page</h3>
    
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "my TItle",
});

const {data, error} = useFetch('/api/fromTop', {
  method: "POST",
  body: {id: 44, name: "Alex"},
})

if(error){
  console.log(error.value);
}else {
  console.log(data.value);
}


</script>

<style scoped></style>
