<script setup>
import { useQuasar } from "quasar";
import { onMounted, ref } from "vue";
import { useAuthStore } from "src/stores/auth-store";
import { useRouter } from "vue-router";

const $q = useQuasar();
const router = useRouter();
const authStore = useAuthStore();
const drawer = ref(false);
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
  <!-- view="hHh Lpr lff" -->
  <q-layout
    view="lHh lpR fFf"
    class="shadow-2 rounded-borders"
    style="display: flex; font-family: Arial, Helvetica, sans-serif"
  >
    <!-- Encabezado -->
    <q-header
      elevated
      :style="`
        background-color: #00563b;
        height: ${$q.screen.height >= 1300 ? '120px;' : '100px;'}
        display: flex;
        width: 100%;
        user-select: none;
      `"
    >
      <!-- :class="$q.dark.isActive ? 'bg-secondary' : 'bg-secondary'" -->
      <q-toolbar>
        <q-btn
          flat
          round
          @click="drawer === true ? (drawer = false) : (drawer = true)"
          icon="menu"
        ></q-btn>
        <q-toolbar-title class="q-pa-md">
          <div style="display: flex; align-items: center">
            <div
              :style="`
                color: #f1f1f1;
                width: ${$q.screen.width >= 2400 ? '1800px;' : '1075px;'}
                font-size: ${$q.screen.width >= 2400 ? '75px;' : '44.5px;'}
                font-weight: 600;
              `"
            >
              Portal
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <!-- Panel izquierda de usuario y menu -->
    <q-drawer
      v-model="drawer"
      :breakpoint="400"
      style="
        background-color: #f1f1f1;
        color: #00563b;
        border-right: 1px solid #00563b;
        user-select: none;
      "
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
        <q-item
          clickable
          v-ripple
          :draggable="false"
          :active="active === 'Inicio'"
          active-class="my-menu-link"
          to="/"
          @click="active = 'Inicio'"
          style="height: 100px"
        >
          <q-item-section avatar>
            <q-icon style="font-size: 30px" name="mdi-account" />
          </q-item-section>

          <q-item-section class="textoBlanco"> Inicio </q-item-section>
        </q-item>

        <q-item
          v-if="
            authStore.profile?.idrol === 1 || authStore.profile?.idrol === 2
          "
          clickable
          v-ripple
          :draggable="false"
          :active="active === 'Facturacion'"
          active-class="my-menu-link"
          to="/factura"
          @click="active = 'Facturacion'"
          style="height: 100px"
        >
          <q-item-section avatar>
            <q-icon style="font-size: 30px" name="mdi-key" />
          </q-item-section>

          <q-item-section class="textoBlanco"> Facturación </q-item-section>
        </q-item>

        <q-item
          v-if="
            authStore.profile?.idrol === 1 || authStore.profile?.idrol === 2
          "
          clickable
          v-ripple
          :draggable="false"
          :active="active === 'Usuarios'"
          active-class="my-menu-link"
          to="/usuarios"
          @click="active = 'Usuarios'"
          style="height: 100px"
        >
          <q-item-section avatar>
            <q-icon style="font-size: 30px" name="mdi-account-key" />
          </q-item-section>

          <q-item-section class="textoBlanco">
            Administración de Usuarios
          </q-item-section>
        </q-item>

        <q-separator style="background-color: #00563b; height: 2px" />

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
          <q-item-section class="textoBlanco"> Cerrar Sesión </q-item-section>
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
// .hoverMenu {
//   .q-item:hover {
//     color: #00563b;
//     background-color: #f1f1f1;
//   }
// }

.my-menu-link {
  background-color: #00563b;
  color: #f1f1f1;
}
</style>
