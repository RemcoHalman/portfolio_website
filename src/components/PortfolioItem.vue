<template>
  <div>
    <img :src="image" alt="" class="projectimage" />
    <h2>- {{ name }} -</h2>
    <h3>-- {{ type }} --</h3>
    <p>{{ description }}</p>
  </div>
  <!-- tags, link -->
</template>

<script>
export default {
  props: ["id", "name", "description", "image", "tags", "link", "type"],
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
