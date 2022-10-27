<template>
  <div class="container mx-auto p-4">
    <h1>My Locations</h1>
    <div>
      <ul>
        <li v-for="location in mylocations" :key="location.Id">
          <locationItem
            :Tag="location.Tag"
            :End="location.logradouro"
            :Cidade="location.localidade"
            :Cep="location.cep"
            :Complemento="location.complemento"
            :bgColor="yellow"
          />
        </li>
      </ul>
    </div>
    <p>teste</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useLocationStore } from "@/stores/locationStore.js";
import locationItem from "@/components/LocationItem.vue";
import { storeToRefs } from "pinia";

const useLocation = useLocationStore();

var mylocations = ref([]);
mylocations = useLocation.locations;

console.log(mylocations[0].End);
</script>

<style lang="scss" scoped></style>
