<template>
  <div
    class="border rounded-md bg-gray-200 shadown-md text-[#224538] flex my-2"
  >
    <div
      class="flex justify-center items-center w-[150px]"
      :class="`bg-${bgColor}-500`"
    >
      <Star class="h-[70px]" />
    </div>
    <div class="p-2 w-[300px]">
      <div>
        <strong class="text-2xl">{{ Tag }}</strong>
      </div>
      <div>
        <strong>Endereço:</strong><small class="mx-4">{{ End }}</small
        ><br />
        <strong>Cidade:</strong><small>XXXXXXX</small>' '<strong>Cep:</strong
        ><small>XXXXXXX</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import Star from "../components/icons/Star.vue";
defineProps(["Tag", "End", "bgColor"]);
</script>

<style lang="scss" scoped></style>
