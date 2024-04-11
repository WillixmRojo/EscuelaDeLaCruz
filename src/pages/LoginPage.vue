<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth-store";
import TGCLoading from "src/components/TGCLoading.vue";

const $q = useQuasar();
const authStore = useAuthStore();
const router = useRouter();

const user = ref(null);
const password = ref(null);

const handleSubmit = async () => {
  try {
    $q.loading.show({
      spinner: TGCLoading,
      delay: 300,
    });

    await authStore.login(user.value, password.value);

    router.push("/admin");

    user.value = "";

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
          border-radius: 5px;
        "
      >
        <div class="form-group" style="padding-top: 30px">
          <img
            src="images/ImagenEscuelaCruz.jpg"
            style="width: 300px; height: 150px"
          />
          <div
            class="subtitle"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              color: #b16655;
              font-weight: bold;
              margin: 2% 0 2% 0;
            "
          >
            Bienvenido
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              justify-content: center;
            "
          >
            <q-input
              color="white"
              v-model="user"
              square
              :standout="`${$primary}`"
              outlined
              dense
              bg-color="white"
              style="padding-bottom: 20px; font-size: 15px; width: 100%"
            >
              <template v-slot:prepend>
                <q-icon
                  name="mdi-account-outline"
                  style="color: #b16655; font-size: 30px"
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
              square
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
                  style="color: #b16655; font-size: 30px"
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
        </div>
      </q-card>
    </q-form>
  </q-page>
</template>
