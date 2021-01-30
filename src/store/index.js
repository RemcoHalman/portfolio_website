import { createStore } from "vuex";

const store = createStore({
  modules: {
    // name: nameModule,
  },
  state() {
    return {
      portfolioItems: [
        { id: 1, name: "Project 1", description: "Hello" },
        { id: 2, name: "Project 2", description: "World" },
        { id: 3, name: "Project 3", description: "Welcome!" },
        { id: 4, name: "Project 4", description: "Cool." },
        { id: 5, name: "Project 5", description: "Back!" },
      ],
    };
  },
  mutations: {},
  getters: {
    portfolioItems: (state) => state.portfolioItems,
  },
  actions: {},
});

export default store;
