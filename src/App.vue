<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <h1>Vue FindMyCep</h1>

    <div class="">
      <nav>
        <RouterLink to="/">Home |</RouterLink>
        <RouterLink to="/cep"> Cep |</RouterLink>
        <RouterLink to="/mylocations"> My Locations</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
