import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  // State
  state: () => ({
    count: 2,
    name: "quyet",
  }),

  getters: {
    tripleCount: (state) => state.count * 2,
  },

  actions: {
    increase() {
      this.count++;
    },
    resetCount() {
      this.count = 0;
      console.log("your reset count");
    },
  },
});
