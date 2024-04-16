<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import { useAuthStore } from "src/stores/auth-store";
import { useUserStore } from "src/stores/user-store";
import { useInfraStore } from "src/stores/infrastructure-store.js";
import { useNotify } from "../hooks/notifyHooks.js";
import TGCLoading from "src/components/TGCLoading.vue";

const $q = useQuasar();
const infraStore = useInfraStore();
const authStore = useAuthStore();

const niveles = [
  {
    value: 2,
    label: "Nacional",
  },
  {
    value: 3,
    label: "Regional",
  },
  {
    value: 4,
    label: "Zona",
  },
  {
    value: 5,
    label: "Parroquia",
  },
];
const nivel = ref(null);
</script>

<template>
  <div style="height: 50%; width: 50%; background-color: white">
    <div
      class="new-user-header"
      style="
        height: 10%;
        width: 100%;
        background-color: #b16655;
        color: white;
        display: flex;
        align-items: center;
      "
    >
      <q-toolbar-title style="text-align: center; font-weight: bold">
        Crear Usuario
      </q-toolbar-title>
    </div>
    <div class="new-user-body" style="height: 80%; width: 100%">
      <div
        v-if="
          authStore.profile.idnivel === 1 || authStore.profile.idnivel === 0
        "
        class="new-user-body-international"
        style="height: 100%; width: 100%; padding: 1%"
      >
        <q-select
          square
          standout
          label="nivel"
          :options="niveles"
          v-model="nivel"
        ></q-select>
      </div>
      <div
        v-if="authStore.profile.idnivel === 2"
        class="new-user-body-national"
        style="height: 100%; width: 100%; padding: 1%"
      >
        Hola nacional
      </div>
      <div
        v-if="authStore.profile.idnivel === 3"
        class="new-user-body-regional"
        style="height: 100%; width: 100%; padding: 1%"
      >
        Hola regional
      </div>
      <div
        v-if="authStore.profile.idnivel === 4"
        class="new-user-body-zone"
        style="height: 100%; width: 100%; padding: 1%"
      >
        Hola zonal
      </div>
    </div>
    <div
      class="new-user-footer"
      style="
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-top: 3px solid #b16655;
      "
    >
      <q-btn style="width: 33%; color: white; background-color: #b16655">
        Guardar
      </q-btn>
      <q-btn
        @click="infraStore.changeBox(1, 'close')"
        style="width: 33%; color: white; background-color: #b16655"
      >
        Cancelar
      </q-btn>
    </div>
  </div>
</template>
