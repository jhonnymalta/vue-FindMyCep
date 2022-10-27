import { ref } from "vue";
import { defineStore } from "pinia";

export const useLocationStore = defineStore("locations", () => {
  const locations = ref([]);

  if (localStorage.getItem("Favoritos")) {
    locations.value = JSON.parse(localStorage.getItem("Favoritos"));
  }

  const addToLocations = (location) => {
    console.log("cheguei no add");
    locations.value.push(location);
    console.log(location);
    localStorage.setItem("Favoritos", JSON.stringify(location));
  };

  return {
    locations,
    addToLocations,
  };
});
