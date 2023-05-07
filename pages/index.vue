<template>
  <div>I am home page</div>
  <p>
    <v-btn variant="flat" color="pink" @click="makeCall">Make Call</v-btn>
    <v-btn variant="flat" color="pink" @click="makeCall2">Make Call2</v-btn>
    <v-btn variant="flat" color="black" @click="makeCall3">Make Call3</v-btn>
    <v-btn variant="flat" color="red" @click="makeCall4">Make Call4</v-btn>
  </p>
</template>

<script setup lang="ts">



const {data, error} = await useFetch("/api/getData");
    if(!error.value) {
      console.log("get Data json top",data.value);
    }else {
      console.log("error top", error.value);
    }


const makeCall = async () => {
  try {
    const data = await $fetch("/api/auth/errorg", {
      method: "POST",
      body: { id: 20 },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const makeCall2 = async () => {
  try {
    const {data, error} = await useFetch("/api/pic", {
      method: "post",
      body: { id: 2 },
    });
    if(!error.value){
      console.log(data.value, "/api/pic");
    }else {
      console.log("error", error.value);
    }
   

  } catch (error) {
    console.log(error);
  }
};

const makeCall3 = async () => {
  try {
    const {data, error} = await useFetch("/api/getData");
    if(!error.value) {
      console.log("get Data json",data.value);
    }else {
      console.log("error", error.value);
    }
  
  } catch (error) {
    console.log(error);
  }
};


const makeCall4 = async () => {
  try {
    const data = await $fetch("https://test-nuxt-mu-five.vercel.app/auth/login", {
      method: "post",
      body: {email: "123@mail.ru", password: 20}
    });
    console.log("Post",data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
