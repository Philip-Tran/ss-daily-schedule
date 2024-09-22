<script setup>
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()

// console.log(store)

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br>
    <h1>{{ counter.name }}</h1>
    <br>
    <span>{{ counter.count }}</span>
    <button @click="counter.increase()">increase</button>
    <button @click="counter.resetCount">Reset</button>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

span {
  color: red;
}
</style>
