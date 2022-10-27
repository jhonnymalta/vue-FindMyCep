<script setup>
import { useCounterStore } from "@/stores/counter.js";

const useCounter = useCounterStore();
</script>

<template>
  <main>
    <h2>home</h2>
    <p>{{ useCounter.count }}</p>
    <button
      class="bg-green-600 py-1 px-2 rounded-md"
      @click="useCounter.increment"
    >
      clicar
    </button>
  </main>
</template>
