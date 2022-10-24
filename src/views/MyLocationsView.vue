<template>
  <div class="container mx-auto p-4">
    <h1>My Locations</h1>
    <ul>
      <li v-for="location in locations" :key="location.Id">
        <LocationItem
          :Tag="location.Tag"
          :End="location.End"
          :bgColor="location.bgColor"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import LocationItem from "../components/LocationItem.vue";
import { ref } from "vue";

const locations = ref([
  { Id: 1, Tag: "Casa", End: "Rua cardoso 11", bgColor: "blue" },
  { Id: 2, Tag: "Trabalho", End: "Av. Afonso Pena", bgColor: "green" },
]);

const AddToLocations = (location) => {
  console.log("Chamou metordo");
  //locations.value.push(location);
};
</script>

<style lang="scss" scoped></style>
