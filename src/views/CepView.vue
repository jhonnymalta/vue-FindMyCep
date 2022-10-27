<script setup>
import MapComponent from "../components/MapComponent.vue";
import AddressCard from "../components/AddressCard.vue";
import axios from "axios";
import { ref } from "vue";

import { useLocationStore } from "@/stores/locationStore.js";

var uf = ref("");
var cidade = ref("");
var logradouro = ref("");
const locals = ref([]);

const getCep = async () => {
  try {
    console.log(cidade.value);
    var estado = uf.value;
    var local = cidade.value;
    var log = logradouro.value;
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${estado}/${local}/${log}/json/`
      // "https://viacep.com.br/ws/mg/Belo%20Horizonte/Cardoso/json/"
    );
    locals.value = data;
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div class="flex flex-col items-center w-[100%]">
    <form @submit.prevent="getCep" class="w-[100%]">
      <div class="container grid grid-cols-4 bg-[#030620] h-[60px]">
        <div class="col grid">
          <label for="estado">Estado:</label>
          <select
            name="estado"
            id="estado"
            v-model="uf"
            class="border border-cyan-500 text-cyan-500 rounded py-1 ml-2"
          >
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="AB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>
        <div class="col grid">
          <label for="cidade">Cidade: {{ cidade }}</label>
          <input
            type="text"
            id="cidade"
            v-model="cidade"
            name="cidade"
            class="border border-cyan-500 text-cyan-500 rounded py-1 ml-2"
          />
        </div>
        <div class="col grid">
          <label for="logradouro">Logradouro:</label>
          <input
            type="text"
            id="logradouro"
            name="logradouro"
            v-model="logradouro"
            class="border border-cyan-500 text-cyan-500 rounded py-1 ml-2"
          />
        </div>

        <div class="col grid">
          <label for="log "></label><br />
          <button
            type="submit"
            class="bg-cyan-500 rounded text-white px-2 shadown-md py-1 ml-2"
          >
            Pesquisar
          </button>
        </div>
      </div>
    </form>

    <!-- <MapComponent class="my-8" /> -->

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
          <button
            class="bg-pink-300 px-2 rounded-b-md text-cyan-900 w-full"
            @click="useLocation.addToLocations(local)"
          >
            Adicionar para locations
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
