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
const userStore = useUserStore();
const { showNotify } = useNotify();

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
const nuevoUser = ref({
  usuario: "",
  correo: "",
  nivel: "",
  contra: "",
  recontra: "",
});

const newUser = async () => {
  try {
    $q.loading.show({
      spinner: TGCLoading,
      delay: 300,
    });

    await authStore.register(nuevoUser.value);

    showNotify("Registro de usuario exitoso!", "positive", "mdi-account-check");

    return;
  } catch (error) {
    console.log(error);
    // for (let errorMessage of error.errors) {
    //   console.log(errorMessage.msg);
    // }
    showNotify(
      "No se creó correctamente el usuario, favor de intentarlo nuevamente.",
      "negative",
      "mdi-account-remove"
    );
  } finally {
    $q.loading.hide();

    infraStore.changeBox(1, "close");
  }
};
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
        style="
          height: 100%;
          width: 100%;
          padding: 2.5%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        "
      >
        <q-select
          square
          standout
          label="Nivel"
          :options="niveles"
          v-model="nuevoUser.nivel"
        ></q-select>
        <q-input
          square
          standout
          label="Usuario"
          v-model="nuevoUser.usuario"
          :rules="[
            (val) =>
              (val && /^[A-Za-z]+$/.test(val)) ||
              'El nombre del usuario no debe contener números.',
            (val) =>
              val.length >= 8 ||
              'El nombre del usuario debe contener al menos 8 caractéres.',
          ]"
        ></q-input>
        <q-input
          square
          standout
          label="Correo"
          v-model="nuevoUser.correo"
          :rules="[
            (val) =>
              (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
              'Formato de email incorrecto.',
          ]"
        ></q-input>
        <q-input
          square
          type="password"
          standout
          label="Contraseña"
          v-model="nuevoUser.contra"
          :rules="[
            (val) =>
              val.length >= 8 ||
              'Contraseña debe contener al menos 8 caractéres.',
          ]"
        ></q-input>
        <q-input
          square
          type="password"
          standout
          label="Confirmar Contraseña"
          v-model="nuevoUser.recontra"
          :rules="[
            (val) => val === nuevoUser.contra || 'Contraseña no coincide.',
          ]"
        ></q-input>
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
      <q-btn
        :disable="
          nuevoUser.contra !== nuevoUser.recontra ||
          nuevoUser.usuario === '' ||
          nuevoUser.nivel === '' ||
          nuevoUser.contra.length < 8
        "
        @click="async () => await newUser()"
        style="width: 33%; color: white; background-color: #b16655"
      >
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
