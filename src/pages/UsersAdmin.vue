<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import { useAuthStore } from "src/stores/auth-store";
import { useUserStore } from "src/stores/user-store";
import { useInfraStore } from "src/stores/infrastructure-store.js";
import { useNotify } from "../hooks/notifyHooks.js";
import TGCLoading from "src/components/TGCLoading.vue";
import NewUser from "src/components/NewUser.vue";

const $q = useQuasar();
const infraStore = useInfraStore();

const createUser = async () => {
  try {
    $q.loading.show({
      spinner: TGCLoading,
      delay: 300,
    });

    console.log("1");

    return;
  } catch (error) {
    console.log(error);
  } finally {
    $q.loading.hide();
  }
};
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
    <div class="user-content" style="height: 90%; width: 100%"></div>
  </div>
  <q-dialog v-model="infraStore.userDialogBox" :persistent="true">
    <NewUser />
  </q-dialog>
</template>

<style lang="scss"></style>
