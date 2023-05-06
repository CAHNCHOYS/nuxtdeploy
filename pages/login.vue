<template>
  <div class="h-screen d-flex justify-center align-center bg-grey">
    <v-card width="480" class="pa-e" elevation="5" color="white">
      <v-card-title class="text-center text-wrap"
        >Авторизация lorem Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Numquam commodi, quisquam nisi architecto officiis temporibus
        magnam neque eius tempora mollitia voluptatum perferendis asperiores?
        Quia consequatur alias sed cupiditate deserunt sequi?!</v-card-title
      >
      <v-card-text>
        <v-form @submit.prevent="loginSubmit">
          <v-row>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="password"
                hide-details="auto"
                v-model="form.password"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="email"
                hint="Ваш емайл"
                hide-details="auto"
                v-model="form.email"
              >
              </v-text-field>
            </v-col>
            <v-col>
              <v-btn variant="flat" color="green" height="50" type="submit">
                Отправить
              </v-btn>

              <v-btn
                variant="flat"
                color="green"
                height="50"
                @click="getData"
              >
                Получить куки
              </v-btn>

              <v-btn variant="flat" color="blue" height="50" @click="navigate">
                Home
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from "~/stores/global";

definePageMeta({
  layout: "auth",
  middleware: "login",
});
const globalStore = useGlobalStore();

const form = ref({
  email: "",
  password: "",
});

const loginSubmit = async () => {
  console.log(form.value);

  try {
    const data = await $fetch("/api/login", {
      method: "POST",
      body: { ...form.value },
      query: {
        searchName: "HelloText",
      },
    });
    globalStore.isUserLoggedIn = true;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getData = async () => {
  try {
    const data = await $fetch("/api/datas/myParam", {
      method: "GET",
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const navigate = async () => {
  await navigateTo("/");
};
</script>

<style lang="scss" scoped></style>
