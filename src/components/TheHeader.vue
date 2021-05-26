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
    class="mh-25"
  />
</template>

<script>
let image = require("@/assets/img/profile.jpg");

export default {
  data() {
    return {
      image: image,
      // image: {
      //   backgroundImage: `url('${image}')`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100%",
      //   backgroundPosition: "center center",
      // },
    };
  },
};
</script>

<style lang="scss" scoped></style>
