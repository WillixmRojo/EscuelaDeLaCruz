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

    userList.value = await userStore.getUsers(jerarquiaUsuario.value);

    userList.value = userList.value.sort(
      (a, b) => a.idnivel.value - b.idnivel.value
    );

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
              height: 30%;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background-color: white;
              color: #b16655;
              font-size: 25px;
              font-weight: bold;
              text-align: center;
              border: 1px solid #b16655;
            "
          >
            <q-btn rounded style="width: 5%; height: 5%; font-weight: bold">
              {{
                !user.idnivel.value
                  ? user.idnivel === 1
                    ? "IN"
                    : user.idnivel === 2
                    ? "N"
                    : user.idnivel === 3
                    ? "R"
                    : user.idnivel === 4
                    ? "Z"
                    : "P"
                  : user.idnivel.value === 1
                  ? "IN"
                  : user.idnivel.value === 2
                  ? "N"
                  : user.idnivel.value === 3
                  ? "R"
                  : user.idnivel.value === 4
                  ? "Z"
                  : "P"
              }}
            </q-btn>
            <div style="width: 90%">
              <q-input v-model="user.usuario"></q-input>
            </div>
          </div>
          <div
            class="user-card-details"
            style="
              height: 70%;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: start;
              font-size: 25px;
              font-weight: bold;
              text-align: center;
              margin-top: 2.5%;
            "
          >
            <div style="width: 90%; height: 35%">
              <q-input bg-color="white" v-model="user.email"></q-input>
            </div>
            <div style="width: 90%; height: 35%">
              <q-select
                bg-color="white"
                :options="niveles"
                v-model="user.idnivel"
              ></q-select>
            </div>
            <div style="width: 90%">
              <q-btn
                icon="mdi-delete-circle"
                rounded
                flat
                style="background-color: white; color: #b16655"
              ></q-btn>
            </div>
          </div>
        </q-card>
      </template>
    </div>
    {{ userList }}
  </div>
  <q-dialog v-model="infraStore.userDialogBox" :persistent="true">
    <NewUser />
  </q-dialog>
</template>

<style lang="scss"></style>
