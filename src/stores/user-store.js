import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { ref } from "vue";
import { useAuthStore } from "./auth-store";
import { useQuasar } from "quasar";
import TGCLoading from "src/components/TGCLoading.vue";

export const useUserStore = defineStore("user", () => {
  const authStore = useAuthStore();

  const $q = useQuasar();

  const users = ref([]);

  const createUser = async (nuevoUsuario) => {
    try {
      $q.loading.show({
        spinner: TGCLoading,
        delay: 300,
      });

      const usuario = nuevoUsuario.user;
      const email = nuevoUsuario.email;
      const rfc = nuevoUsuario.rfc;
      const cliente = nuevoUsuario.cliente;
      const idrol = nuevoUsuario.idrol;

      const res = await api({
        method: "POST",
        url: "/users",
        headers: {
          Authorization: "Bearer " + authStore.token,
        },
        data: {
          usuario,
          email,
          rfc,
          cliente,
          idrol,
        },
      });

      return res.data.newUser;
    } catch (error) {
      throw error.response?.data || error;
    } finally {
      $q.loading.hide();
    }
  };

  const getUsers = async () => {
    try {
      $q.loading.show({
        spinner: TGCLoading,
        delay: 300,
      });

      const res = await api({
        method: "GET",
        url: "/users",
        headers: {
          Authorization: "Bearer " + authStore.token,
        },
      });

      users.value = [...res.data.users];

      return users.value;
    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
      $q.loading.hide();
    }
  };

  const removeUser = async (id) => {
    try {
      $q.loading.show({
        spinner: TGCLoading,
        delay: 300,
      });
      await api({
        method: "DELETE",
        url: `/users/${id}`,
        headers: {
          Authorization: "Bearer " + authStore.token,
        },
      });
      users.value = users.value.filter((item) => item.id !== id);
    } catch (error) {
      throw error.response?.data || error;
    } finally {
      $q.loading.hide();
    }
  };

  const modifiedUser = async (modUser) => {
    try {
      $q.loading.show({
        spinner: TGCLoading,
        delay: 300,
      });
      await api({
        method: "PUT",
        url: `/users/${modUser.id}`,
        data: {
          usuario: modUser.usuario,
          rfc: modUser.rfc,
          email: modUser.email,
          idrol: modUser.idrol,
          rol: modUser.rol,
          dev_access: modUser.dev_access,
          beta_access: modUser.beta_access,
          prod_access: modUser.prod_access,
        },
        headers: {
          Authorization: "Bearer " + authStore.token,
        },
      });

      users.value = users.value.map((item) =>
        item.id === modUser.id ? modUser : item
      );

      return;
    } catch (error) {
      throw error.response?.data || error;
    } finally {
      $q.loading.hide();
    }
  };

  return { createUser, removeUser, modifiedUser, getUsers };
});
