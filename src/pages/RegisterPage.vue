<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth-store";
import { useNotify } from "../hooks/notifyHooks.js";
import TGCLoading from "src/components/TGCLoading.vue";

const $q = useQuasar();
const { showNotify } = useNotify();
const authStore = useAuthStore();
const router = useRouter();

const rfc = ref("");
const usuario = ref("");
const email = ref("");
const password = ref("");
const repassword = ref("");

const handleSubmit = async () => {
  try {
    $q.loading.show({
      spinner: TGCLoading,
      delay: 300,
    });

    const res = await authStore.register(
      rfc.value,
      usuario.value,
      email.value,
      password.value,
      repassword.value
    );

    router.push("/access");

    showNotify(res, "positive", "mdi-account-plus");

    rfc.value = "";
    usuario.value = "";
    email.value = "";
    password.value = "";
    repassword.value = "";

    return;
  } catch (error) {
    console.log("error", error);
    if (error.error) {
      alertBackend(error.error);
    } else if (error.errors) {
      alertBackend(error.errors[0].msg);
    } else {
      alertBackend();
    }
  } finally {
    $q.loading.hide();
  }
};

const alertBackend = (message = "Error en el servidor") => {
  $q.dialog({
    title: "Error",
    message: message,
  });
};
</script>

<template>
  <q-page padding style="min-height: 100%">
    <q-form @submit.prevent="handleSubmit" style="height: 100%">
      <q-card
        style="
          background-color: white;
          width: 500px;
          height: 100%;
          text-align: center;
          border-radius: 15px;
        "
      >
        <div
          class="form-group q-gutter-md"
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          "
        >
          <div>
            <q-toolbar-title
              style="
                font-size: 25px;
                color: #00563b;
                font-weight: 600;
                padding-bottom: 20px;
              "
            >
              Ingrese sus datos...
            </q-toolbar-title>
            <q-input
              color="white"
              v-model="rfc"
              label="RFC"
              label-color="$primary"
              bg-color="white"
              rounded
              dense
              outlined
              standout="$primary"
              :rules="[(val) => val !== '' || 'Debe capturar su RFC...']"
              style="padding-bottom: 30px"
            >
              <template v-slot:append>
                <q-icon name="" />
              </template>
              <template v-slot:prepend>
                <q-icon
                  name="mdi-account-outline"
                  style="color: #00563b"
                ></q-icon>
              </template>
            </q-input>
            <q-input
              color="white"
              v-model="usuario"
              label="Nombre de Usuario"
              label-color="$primary"
              bg-color="white"
              rounded
              dense
              outlined
              standout="$primary"
              :rules="[
                (val) => val !== '' || 'Debe capturar el nombre de usuario...',
              ]"
              style="padding-bottom: 30px"
            >
              <template v-slot:append>
                <q-icon name="" />
              </template>
              <template v-slot:prepend>
                <q-icon
                  name="mdi-account-outline"
                  style="color: #00563b"
                ></q-icon>
              </template>
            </q-input>
            <q-input
              color="white"
              v-model="email"
              label="E-Mail"
              label-color="$primary"
              bg-color="white"
              rounded
              dense
              outlined
              standout="$primary"
              :rules="[
                (val) =>
                  (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                  'Formato de email incorrecto',
              ]"
            >
              <template v-slot:append>
                <q-icon name="" />
              </template>
              <template v-slot:prepend>
                <q-icon
                  name="mdi-email-outline"
                  style="color: #00563b"
                ></q-icon>
              </template>
            </q-input>
          </div>
          <div>
            <q-input
              color="white"
              type="password"
              v-model="password"
              label="Contraseña"
              label-color="$primary"
              bg-color="white"
              rounded
              dense
              outlined
              standout="$primary"
              :rules="[(val) => val !== '' || 'Debe capturar la contraseña']"
              style="padding-bottom: 30px"
            >
              <template v-slot:append>
                <q-icon name="" />
              </template>
              <template v-slot:prepend>
                <q-icon name="mdi-lock-outline" style="color: #00563b"></q-icon>
              </template>
            </q-input>
            <q-input
              color="white"
              type="password"
              v-model="repassword"
              label="Confirmar Contraseña"
              label-color="$primary"
              bg-color="white"
              rounded
              dense
              outlined
              standout="$primary"
              :rules="[
                (val) => val === password || 'No coinciden las contraseñas',
              ]"
            >
              <template v-slot:append>
                <q-icon name="" />
              </template>
              <template v-slot:prepend>
                <q-icon
                  name="mdi-lock-check-outline"
                  style="color: #00563b"
                ></q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          "
        >
          <q-btn
            class="btn btn-signin"
            :disable="
              rfc === '' ||
              usuario === '' ||
              email === '' ||
              password === '' ||
              repassword === ''
            "
            label="Registrarse"
            type="submit"
            style="width: 350px"
          ></q-btn>
          <p class="text-cpl-text" style="font-size: 20px; color: #00563b">
            ¿Ya tienes una cuenta?
            <a href="/access" style="color: #00a9e0"> Ingresa! </a>
          </p>
        </div>
      </q-card>
    </q-form>
  </q-page>
</template>
