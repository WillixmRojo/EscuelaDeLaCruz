<script setup>
import { useAuthStore } from "src/stores/auth-store";

const authStore = useAuthStore();
</script>

<template>
  <div class="main-landing" style="width: 100%; height: 100%; padding: 1%">
    <div
      class="top-search-bar"
      style="
        display: flex;
        height: 10%;
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
      "
    >
      <q-select rounded standout style="width: 75%"></q-select>
      <img
        src="images/ImagenEscuelaCruz.jpg"
        style="width: 200px; height: 100px"
      />
    </div>
  </div>
</template>
