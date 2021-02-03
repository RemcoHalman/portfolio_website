<template>
  <div
    :style="{
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'fit-content',
    }"
  >
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <button>Modal</button>
  </div>

  <!-- tags, link -->
</template>

<script>
export default {
  props: ["id", "name", "description", "image", "tags", "link"],
};
</script>

<style lang="scss" scoped></style>
