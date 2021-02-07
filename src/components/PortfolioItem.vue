<template>
  <div
    class="projectimage"
    :style="{
      backgroundImage: 'url(' + image + ')',
    }"
  >
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <button class="btn btn-info" @click="showModal">show modal</button>
    <modal v-show="isModalVisible" @close="closeModal"> </modal>
    <!-- tags, link -->
  </div>
</template>

<script>
import Modal from "../components/Modal";

export default {
  components: [Modal],
  props: ["id", "name", "description", "image", "tags", "link"],
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
.projectimage {
  opacity: 0.5;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    animation: fadeInFromNone 0.5s ease-in-out;
  }
}

button {
  padding: 10px;
  background: aqua;
  border-radius: 5px;
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
