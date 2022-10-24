<template>
  <div class="flex flex-col items-center">
    <div class="grid grid-cols-4 bg-[#030620] container p-2">
      <div class="col grid">
        <label for="log">Cidade:</label>
        <input type="text" class="border border-cyan-500 rounded py-1 ml-2" />
      </div>
      <div class="col grid">
        <label for="log">Logradouro:</label>
        <input type="text" class="border border-cyan-500 rounded py-1 ml-2" />
      </div>
      <div class="col grid">
        <label for="log"> N°:</label>
        <input type="text" class="border border-cyan-500 rounded py-1 ml-2" />
      </div>
      <div class="col grid">
        <label for="log "></label><br />
        <button
          class="bg-cyan-500 rounded text-white px-2 shadown-md py-1 ml-2"
          @click="getCep"
        >
          Pesquisar
        </button>
      </div>
    </div>
    <MapComponent class="my-8" />

    <div>
      <ul>
        <li v-for="local in locals" :key="local.cep" class="my-2">
          <strong>Endereço:</strong><small>{{ local.logradouro }}</small
          ><strong class="ml-6">Complemento:</strong
          ><small>{{ local.complemento }}</small
          ><br />
          <strong>Cidade:</strong><small>{{ local.localidade }}</small
          ><br />
          <strong>Cep:</strong><small>{{ local.cep }}</small
          ><br />
          <button class="bg-pink-300 px-2 rounded-b-md text-cyan-900 w-full">
            Adicionar para locations
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import MapComponent from "../components/MapComponent.vue";
import AddressCard from "../components/AddressCard.vue";
import axios from "axios";
import { ref } from "vue";

var uf = "mg";
var cidade = "Belo Horizonte";
var logradouro = "sao paulo";
const locals = ref([]);

const getCep = async () => {
  try {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`
      // "https://viacep.com.br/ws/mg/Belo%20Horizonte/Cardoso/json/"
    );
    locals.value = data;
    console.log("pesquisou");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
