import { defineStore } from "pinia";
import { scheduleData } from "../../lib/scheduleData";
import { ref } from "vue";

export const UseSetTaskStore = defineStore("task", () => {
  const taskBlocks = ref(scheduleData);

  const getTask = () => {
    return taskBlocks.value;
  };

  return { taskBlocks, getTask };
});
