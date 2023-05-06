<template>
  <div class="info-body">
    <div class="info-body__header">I am info</div>
    <div class="info-body__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae
      nulla obcaecati tenetur beatae. Culpa, alias? Pariatur, perspiciatis
      magnam mollitia quidem accusantium molestias inventore minima fugiat eius
      ipsa nisi minus!
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.info-body {
  padding: 10px;
  background-color: cornflowerblue;
  border-radius: 20px;
  color: white;
  // .info-body__header

  &__header {
    font-size: 20px;
    margin: 0px 0px 10px 0px;
  }

  // .info-body__text

  &__text {
    font-size: 18px;
    line-height: 1.2;
  }
}
</style>
