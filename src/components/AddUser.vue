<script setup>
import { useUserStore } from "src/stores/user-store";
import { ref } from "vue";
import { useNotify } from "../hooks/notifyHooks.js";

const userStore = useUserStore();
const { showNotify } = useNotify();

const email = ref(null);
const rol = ref(null);
const dev_access = ref(false);
const beta_access = ref(false);
const prod_access = ref(false);
const options = [
  {
    value: 1,
    label: "Administrador",
  },
  {
    value: 2,
    label: "Colaborador",
  },
  {
    value: 3,
    label: "Usuario",
  },
  {
    value: 4,
    label: "Visualizador",
  },
];
const loading = ref(false);

const addUser = async () => {
  try {
    loading.value = true;
    await userStore.createUser(
      "_",
      email.value,
      rol.value.value,
      rol.value.label,
      dev_access.value,
      beta_access.value,
      prod_access.value
    );
    showNotify("Se dio de alta el usuario", "positive", "mdi-account-check");
    email.value = null;
    rol.value = null;
    dev_access.value = false;
    beta_access.value = false;
    prod_access.value = false;
  } catch (error) {
    showNotify(error.error);
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <q-form @submit.prevent="addUser">
    <q-input
      v-model="email"
      label="email"
      placeholder="email"
      :rules="[
        (val) =>
          (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
          'Formato de email incorrecto',
      ]"
    >
      <template v-slot:prepend>
        <q-icon name="mdi-at"></q-icon>
      </template>
    </q-input>
    <q-select
      v-model="rol"
      :options="options"
      label="Rol"
      :rules="[(val) => val !== null || 'Seleccione una opción']"
    >
      <template v-slot:prepend>
        <q-icon name="mdi-account-supervisor-circle-outline"></q-icon>
      </template>
    </q-select>
    <div class="q-pa-md">
      <q-chip
        square
        color="green"
        text-color="white"
        icon="mdi-card-account-details"
        >Accesos</q-chip
      >
      <div class="q-pa-md q-gutter-sm">
        <q-toggle
          v-model="dev_access"
          label="Desarrollo"
          icon="code"
        ></q-toggle>
        <q-toggle v-model="beta_access" label="Beta" icon="mdi-beta"></q-toggle>
        <q-toggle
          v-model="prod_access"
          label="Producción"
          icon="public"
        ></q-toggle>
      </div>
    </div>
    <q-btn
      label="Guardar"
      color="primary"
      type="submit"
      :loading="loading"
    ></q-btn>
  </q-form>
</template>
