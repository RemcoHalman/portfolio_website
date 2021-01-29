<template>
  <div id="header" :style="image" class="">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
  </div>
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
        backgroundAttachment: "fixed",
        backgroundPosition: "center bottom",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#header {
  height: 50vh;
}
</style>
