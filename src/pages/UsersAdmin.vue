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

const getUsers = async () => {
  try {
    $q.loading.show({
      spinner: TGCLoading,
      delay: 300,
    });

    userList.value = await userStore.getUsers(jerarquiaUsuario.value);

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
        <q-btn
          @click="infraStore.changeBox(1, 'open')"
          style="
            width: 33%;
            background-color: #b16655;
            color: white;
            font-weight: bold;
          "
        >
          Crear
        </q-btn>
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
            height: 30%;
            margin: 1%;
            padding: 1%;
            background-color: #b16655;
            color: white;
            cursor: pointer;
          "
        >
          <div
            class="user-card-header"
            style="
              height: 20%;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: white;
              color: #b16655;
              font-size: 25px;
              font-weight: bold;
              text-align: center;
            "
          >
            {{ user.usuario }}
          </div>
          <div
            class="user-card-details"
            style="
              height: 20%;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;

              font-size: 25px;
              font-weight: bold;
              text-align: center;
            "
          >
            Jerarquía:
            {{
              user.idnivel === 1
                ? "Internacional"
                : user.idnivel === 2
                ? "Nacional"
                : user.idnivel === 3
                ? "Diocesano"
                : user.idnivel === 4
                ? "Zonal"
                : "Parroquia"
            }}
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
