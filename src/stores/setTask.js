import { defineStore } from "pinia";

export const UseSetTaskStore = defineStore("task", {
  state: () => ({
    time: "6:00 AM",
    task1: "Reading",
    task2: "Learn Spanish",
  }),
  getters: {
    taskLowerCase(state) {
      state.task.taskLowerCase();
    },
  },
  actions: {
    deleteTask() {
      this.task1 = "";
      this.task2 = "";
    },
  },
});
