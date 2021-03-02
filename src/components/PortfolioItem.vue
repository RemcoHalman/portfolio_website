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
    <div v-if="link" class="link">
      <a :href="link" target="_blank">{{ link_short }}</a>
    </div>
  </div>
  <!-- tags, link -->
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "description",
    "image",
    "tags",
    "link",
    "type",
    "link_short",
  ],
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

div.link {
  margin: 10px 0 0 0;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(5, 128, 1);
  a {
    color: white;
    text-decoration: none;
  }
}
</style>
