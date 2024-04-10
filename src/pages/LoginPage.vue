<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth-store";
import TGCLoading from "src/components/TGCLoading.vue";

const $q = useQuasar();
const authStore = useAuthStore();
const router = useRouter();

const email = ref(null);
const password = ref(null);

const handleSubmit = async () => {
  try {
    $q.loading.show({
      spinner: TGCLoading,
      delay: 300,
    });
    await authStore.login(email.value, password.value);
    router.push("/admin");
    email.value = "";
    password.value = "";
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
          height: 500px;
          text-align: center;
          border-radius: 15px;
        "
      >
        <div class="form-group" style="padding-top: 30px">
          <div
            class="subtitle"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              color: #00563b;
            "
          >
            Bienvenido
          </div>
          <div class="title" style="color: #00563b">Portal</div>
          <div
            style="
              display: flex;
              flex-direction: column;
              justify-content: center;
            "
          >
            <q-input
              color="white"
              v-model="email"
              rounded
              :standout="`${$primary}`"
              outlined
              dense
              bg-color="white"
              :rules="[
                (val) =>
                  (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                  'Formato de email incorrecto',
              ]"
              style="padding-bottom: 20px; font-size: 15px; width: 100%"
            >
              <template v-slot:prepend>
                <q-icon
                  name="mdi-email-outline"
                  style="color: #00563b; font-size: 30px"
                ></q-icon>
              </template>
              <template v-slot:append>
                <q-icon name=""></q-icon>
              </template>
            </q-input>
            <q-input
              color="cpl-text"
              type="password"
              v-model="password"
              rounded
              :standout="`${$primary}`"
              outlined
              dense
              bg-color="white"
              :rules="[(val) => val !== '' || 'Debe capturar la contraseña']"
              style="font-size: 15px; width: 100%"
            >
              <template v-slot:prepend>
                <q-icon
                  name="mdi-lock-outline"
                  style="color: #00563b; font-size: 30px"
                ></q-icon>
              </template>
              <template v-slot:append>
                <q-icon name=""></q-icon>
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
          <q-btn class="btn btn-signin" label="Ingresar" type="submit"></q-btn>
          <p class="text-cpl-text" style="font-size: 20px; color: #00563b">
            ¿No tienes una cuenta?
            <a href="/access/register" style="color: #00a9e0"> Regístrate!</a>
          </p>
        </div>
      </q-card>
    </q-form>
  </q-page>
</template>
