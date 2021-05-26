<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/cv">Cv</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
  </div>
  <img
    :src="image"
    v-if="$route.meta.header === 'home-header'"
    alt=""
    srcset=""
    class="object-cover h-96 w-full"
  />
</template>

<script>
let image = require("@/assets/img/profile.jpg");

export default {
  data() {
    return {
      image: image,
    };
  },
};
</script>

<style lang="scss" scoped></style>
