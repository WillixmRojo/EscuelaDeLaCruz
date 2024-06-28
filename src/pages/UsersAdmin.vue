<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted, computed } from "vue";
import { useAuthStore } from "src/stores/auth-store";
import { useUserStore } from "src/stores/user-store";
import { useInfraStore } from "src/stores/infrastructure-store.js";
import { useNotify } from "../hooks/notifyHooks.js";
import TGCLoading from "src/components/TGCLoading.vue";
import NewUser from "src/components/NewUser.vue";

const $q = useQuasar();
const infraStore = useInfraStore();
const userStore = useUserStore();
const authStore = useAuthStore();

const jerarquiaUsuario = computed(() => {
  return authStore.profile.idnivel;
});

const userList = ref([]);
const niveles = [
  {
    value: 1,
    label: "Internacional",
  },
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
    label: "Zonal",
  },
  {
    value: 5,
    label: "Parroquia",
  },
];

const getUsers = async () => {
  try {
    $q.loading.show({
      spinner: TGCLoading,
      delay: 300,
    });

    const user = {
      user: authStore.profile.id,
      nivel: jerarquiaUsuario.value,
    };

    userList.value = await userStore.getUsers(
      jerarquiaUsuario.value,
      authStore.profile.id
    );

    userList.value.sort((a, b) => a.idnivel.value - b.idnivel.value);

    return;
  } catch (error) {
    console.log(error);
  } finally {
    $q.loading.hide();
  }
};

onMounted(async () => {
  await getUsers();
});
</script>

<template>
  <div class="main-users-admin" style="width: 100%; height: 100%; padding: 1%">
    <div
      class="search-bar"
      style="height: 10%; width: 100%; display: flex; align-items: center"
    >
      <q-input square standout style="width: 50%"></q-input>
      <div
        style="
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        "
      >
        <div style="width: 50%">
          <q-btn
            @click="infraStore.changeBox(1, 'open')"
            icon="mdi-plus"
            rounded
            style="
              width: 7.5%;
              height: 7.5%;
              background-color: #b16655;
              color: white;
              font-size: 15px;
              font-weight: bold;
              margin-left: 5%;
            "
          >
            <q-tooltip style="font-size: 20px">Crear nuevo usuario</q-tooltip>
          </q-btn>
        </div>
        <div
          style="
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: end;
          "
        >
          <q-btn
            style="
              width: 35%;
              background-color: #b16655;
              color: white;
              font-size: 15px;
              font-weight: bold;
            "
          >
            Guardar
          </q-btn>
          <q-btn
            @click="async () => await getUsers()"
            style="
              width: 35%;
              background-color: #b16655;
              color: white;
              font-size: 15px;
              font-weight: bold;
              margin-left: 2.5%;
            "
          >
            Cancelar
          </q-btn>
        </div>
      </div>
    </div>
    <div
      class="user-content"
      style="height: 90%; width: 100%; display: flex; overflow-y: auto"
    >
      <template v-for="user of userList" :key="user.id">
        <q-card
          class="user-cards"
          style="
            width: 20%;
            height: 35%;
            margin: 1%;
            background-color: #b16655;
            color: white;
            cursor: pointer;
          "
        >
          <div
            class="user-card-header"
            style="
              height: 25%;
              width: 100%;
              background-color: white;
              color: #b16655;
              font-size: 20px;
              font-weight: bold;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border-radius: 0;
              border: 1px solid #b16655;
            "
          >
            {{ user.usuario }}
            <q-badge>{{ user.idnivel.label }}</q-badge>
          </div>
          <div
            class="user-card-detail"
            style="height: 75%; width: 100%; padding: 3%"
          >
            <div v-if="user.idnivel.value === 2">
              {{ user.email }}
            </div>
          </div>
        </q-card>
      </template>
    </div>
  </div>
  <q-dialog v-model="infraStore.userDialogBox" :persistent="true">
    <NewUser />
  </q-dialog>
</template>

<style lang="scss"></style>
