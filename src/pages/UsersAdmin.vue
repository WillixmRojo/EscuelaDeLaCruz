<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import { useAuthStore } from "src/stores/auth-store";
import { useUserStore } from "src/stores/user-store";
import { useNotify } from "../hooks/notifyHooks.js";
import TGCLoading from "src/components/TGCLoading.vue";
</script>

<template>
  <div
    class="main-users-admin"
    style="width: 100%; height: 100%; padding: 1%"
  ></div>
</template>

<style lang="scss"></style>
