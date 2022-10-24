<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="grid grid-cols-12 max-h-full">
    <header
      class="col-span-3 flex flex-col bg-[#030620] justify-center max-h-screen"
    >
      <img
        alt="Vue logo"
        class="logo mb-4 mx-auto"
        src="@/assets/logo.svg"
        width="150"
        height="150"
      />
      <h1 class="text-3xl text-white mb-2 mx-auto">Vue FindMyCep</h1>

      <div class="text-white mx-auto">
        <nav>
          <RouterLink to="/">Home |</RouterLink>
          <RouterLink to="/cep"> Cep |</RouterLink>
          <RouterLink to="/mylocations"> My Locations</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView class="max-h-screen overflow-x-auto col-span-9" />
  </div>
</template>

<style scoped></style>
