<script setup>
import { UseSetTaskStore } from '@/stores/setTask';
import { scheduleData } from '../../lib/scheduleData';
import Card from '@/components/Card.vue';

const store = UseSetTaskStore()
</script>

<template>
  <main>
    <div class="w-[1600px]">
      <div class="grid">
        <Card v-for="block in store.taskBlocks" :key="block.blockNumber" :block="block" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-auto-flow: column;
}
</style>
