<script setup>
import { useAuthStore } from "src/stores/auth-store";

const authStore = useAuthStore();
</script>

<template>
  <div class="main-landing">
    <div
      class="welcome-name"
      style="padding: 10px; width: 100%; text-align: center"
    >
      <q-toolbar-title
        style="font-size: 32px; font-weight: 600; color: #00563b"
      >
        Bienvenido {{ authStore.profile?.usuario }}!
      </q-toolbar-title>
    </div>
  </div>
</template>
