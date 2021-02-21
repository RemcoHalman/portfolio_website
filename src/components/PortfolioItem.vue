<template>
  <div>
    <img :src="image" alt="" class="projectimage" />
    <h2>- {{ name }} -</h2>
    <h3>-- {{ type }} --</h3>
    <p>{{ description }}</p>
    <div v-if="tags">
      <span v-for="tag in tags" :key="tag">
        {{ tag }}
      </span>
    </div>
    <a :href="link" target="_blank" v-if="link">{{ link }}</a>
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

<style lang="scss" scoped>
span {
  margin-left: 10px;
  background-color: rgba(0, 121, 0, 0.473);
  border-radius: 5px;
  padding: 5px;
}

a {
  margin: 10px 0 0 0;
  background-color: rgba(0, 200, 200, 1);
}
</style>
