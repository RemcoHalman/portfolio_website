<template>
  <div
    class="projectimage"
    :style="{
      backgroundImage: 'url(' + image + ')',
    }"
  >
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <button>Modal</button>
    <!-- tags, link -->
  </div>
</template>

<script>
export default {
  props: ["id", "name", "description", "image", "tags", "link"],
};
</script>

<style lang="scss" scoped>
.projectimage {
  opacity: 0.5;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    animation: fadeInFromNone 0.5s ease-in-out;
  }
}

@-webkit-keyframes fadeInFromNone {
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
