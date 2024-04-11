<script setup>
import { useQuasar } from "quasar";
import { onMounted, ref } from "vue";
import { useAuthStore } from "src/stores/auth-store";
import { useRouter } from "vue-router";

const $q = useQuasar();
const router = useRouter();
const authStore = useAuthStore();
const drawer = ref(true);
const active = ref("Inicio");

function userLogout() {
  $q.dialog({
    message: "Está seguro que desea cerrar sesión?",
    ok: {
      push: true,
    },
    cancel: {
      push: true,
      color: "negative",
    },
    persistent: true,
  })
    .onOk(async () => {
      await authStore.logout();
      router.push("/access");
    })
    .onCancel(() => {
      return;
    });
}

onMounted(() => {
  if (router.currentRoute.value.path === "/") {
    active.value = "Inicio";
  } else if (router.currentRoute.value.path === "/usuarios") {
    active.value = "Usuarios";
  }
});
</script>

<template>
  <q-layout
    view="lHh lpR fFf"
    class="shadow-2 rounded-borders"
    style="
      display: flex;
      font-family: Arial, Helvetica, sans-serif;
      background-color: white;
    "
  >
    <q-drawer
      v-model="drawer"
      :breakpoint="200"
      :width="250"
      style="background-color: #b16655; color: #f1f1f1; user-select: none"
    >
      <!-- Menu de opciones -->
      <q-list
        padding
        style="
          font-size: 26px;
          display: flex;
          flex-direction: column;
          margin-top: -8px;
        "
        class="hoverMenu"
      >
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          "
        >
          <q-avatar icon="mdi-account-circle" size="200px"> </q-avatar>
          <div style="margin-top: -5%; margin-bottom: 5%">
            <div>{{ authStore.profile.usuario }}</div>
            <div>{{ authStore.profile.nivel }}</div>
          </div>
        </div>
        <q-item
          v-if="
            authStore.profile?.idnivel === 1 || authStore.profile?.idnivel === 0
          "
          clickable
          v-ripple
          :draggable="false"
          :active="active === 'Usuarios'"
          active-class="my-menu-link"
          to="/usuarios"
          @click="active = 'Usuarios'"
          style="height: 75px"
        >
          <q-item-section avatar>
            <q-icon style="font-size: 30px" name="mdi-account-key" />
          </q-item-section>

          <q-item-section class="textoBlanco"> Usuarios </q-item-section>
        </q-item>

        <!-- <q-separator style="background-color: #b16655; height: 2px" /> -->

        <q-item
          :draggable="false"
          clickable
          v-ripple
          style="height: 75px"
          @click="userLogout()"
        >
          <q-item-section avatar>
            <q-icon style="font-size: 30px" name="mdi-account-remove" />
          </q-item-section>
          <q-item-section class="textoBlanco"> Salir </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <!-- Contenido de paginas -->
    <q-page-container style="width: 100%">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.hoverMenu {
  .q-item:hover {
    color: #b16655;
    background-color: white;
  }
}

.my-menu-link {
  background-color: #b16655;
  color: #f1f1f1;
}
</style>
