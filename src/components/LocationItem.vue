<template>
  <div
    class="border rounded-md bg-gray-200 shadown-md text-[#224538] flex my-2"
  >
    <div
      class="flex justify-center items-center w-[150px]"
      :class="`bg-cyan-500`"
    >
      <Star class="h-[70px]" />
    </div>
    <div class="p-2 w-[300px]">
      <div>
        <strong class="text-2xl">{{ Tag }}</strong>
      </div>
      <div>
        <strong>Endereço:</strong><small class="mx-4">{{ End }}</small
        ><strong class="ml-4">Complemento:</strong
        ><small class="ml-2">{{ Complemento }}</small
        ><br />
        <strong>Cidade:</strong><small class="ml-2">{{ Cidade }}</small
        ><strong class="ml-4">Cep:</strong><small class="ml-2">{{ Cep }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import Star from "../components/icons/Star.vue";
defineProps(["Tag", "End", "bgColor", "Cidade", "Cep", "Complemento"]);
</script>

<style lang="scss" scoped></style>
