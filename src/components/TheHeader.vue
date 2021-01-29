<template>
  <div id="nav">
    <router-link class="site" to="/">Remco Halman</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
  </div>
  <div
    v-if="$route.meta.header === 'home-header'"
    id="header-image"
    :style="image"
    class=""
  ></div>
</template>

<script>
let image = require("@/assets/img/profile.jpg");

export default {
  data() {
    return {
      image: {
        backgroundImage: `url('${image}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center center",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#header-image {
  height: 500px;
}

#nav {
  background-color: #1a252f;
  .site {
    margin-right: 40%;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    display: inline-block;
    padding: 20px 16px;
    font-size: 17px;

    &.router-link-exact-active {
      color: #fff;
    }
  }
}
</style>
