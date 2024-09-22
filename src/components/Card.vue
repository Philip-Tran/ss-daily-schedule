<template>
    <div class="p-5 border border-slate-300 min-h-[220px]">
        <div class="flex p-2 h-[40px] rounded-[.25rem] bg-blue-200 w-[100px] mb-6">
            <span class="m-auto">{{ store.time }}</span>
        </div>
        <div class="flex flex-col gap-2">
            <div class="text-base flex flex-row">
                <span>
                    <Dot />
                </span>
                <span>{{ store.task1 }}</span>
            </div>
            <div class="text-base flex flex-row">
                <span>
                    <Dot />
                </span>{{ store.task2 }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { UseSetTaskStore } from "@/stores/setTask";
import { Dot } from "lucide-vue-next";
const store = UseSetTaskStore();
</script>
