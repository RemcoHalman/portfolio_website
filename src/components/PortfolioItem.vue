<template>
  <transition
    enter-active-class="transition ease-out duration-300 transform "
    enter-from-class="opacity-0 translate-y-10 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="ease-in duration-200"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
  >
    <div class="">
      <img :src="image" alt="" @click="showModal = !showModal" class="" />
      <modal-dialog v-if="showModal" @close="closeModal">
        <template #header> {{ name }} - {{ type }} </template>
        <template #default>
          <p>
            No description added
          </p>
        </template>
        <template #content>
          <p>{{ description }}</p>
        </template>
        <template #tags>
          <div v-if="tags">
            <span v-for="tag in tags" :key="tag">
              {{ tag }}
            </span>
          </div>
        </template>
        <template #footer>
          <div v-if="link" class="">
            Live website:
            <a :href="link" target="_blank" rel="noopener noreferrer">
              <button
                class="rounded-lg px-3 py-2 text-yellow-600 cursor-pointer hover:text-yellow-200"
              >
                {{ link_short }}
              </button>
            </a>
          </div>
          <button
            @click="closeModal"
            class="border-2 border-gray-800 rounded-lg px-3 py-2 text-gray-800 cursor-pointer hover:bg-gray-800 hover:text-gray-200"
          >
            Close
          </button>
        </template>
      </modal-dialog>
    </div>
  </transition>
</template>

<script>
import ModalDialog from "@/components/ModalDialog.vue";
import { ref } from "vue";

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
    closeModal() {
      this.showModal = false;
    },
  },
  data() {
    return {};
  },
  components: { ModalDialog },
  setup() {
    const showModal = ref(false);
    return {
      showModal,
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

button {
  color: #1a252f;
}
</style>
