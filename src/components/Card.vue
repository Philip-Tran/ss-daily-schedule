<script setup>
import { UseSetTaskStore } from "@/stores/setTask";
import { Dot } from "lucide-vue-next";
const store = UseSetTaskStore();

const props = defineProps({
    block: Object,
})

</script>

<template>
    <div class="p-5 border border-slate-300 min-h-[240px]">
        <div class="flex p-2 h-[40px] rounded-[.25rem] bg-blue-200 w-[100px] mb-6">
            <span class="m-auto">{{ block.time }}</span>
        </div>
        <div class="flex flex-col gap-2">
            <div class="text-base flex flex-col">
                <span v-for="(taskItem, index) in block.taskItemList" :key="index"
                    class="flex flex-row item-center gap-3">
                    <span class="flex item-center ">
                        <div class="w-1 h-1 rounded-full bg-red-900 self-center"></div>
                    </span>
                    <span>{{ taskItem.name }}</span>
                </span>
                <div v-if="block.isExceptionDate" class="bg-blue-100 rounded p-2">
                    <div v-for="(exTask, index) in block.exceptionalTask" :key="index">
                        <span>{{ exTask.name }}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
