import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { ref } from "vue";
import { useAuthStore } from "./auth-store";
import { useQuasar } from "quasar";
import TGCLoading from "src/components/TGCLoading.vue";

export const useComentarioStore = defineStore("comentario", () => {
  const authStore = useAuthStore();
  const $q = useQuasar();
  const comentarios = ref([]);

  const createComentario = async (
    IdUsuarioCaptura,
    UsuarioIndicador,
    IdIndicador,
    Comentario,
    FechaMovimiento
  ) => {
    try {
      $q.loading.show({
        spinner: TGCLoading,
        delay: 300,
      });
      await api({
        method: "POST",
        url: "/comentarios",
        headers: {
          Authorization: "Bearer " + authStore.token,
        },
        data: {
          IdUsuarioCaptura,
          UsuarioIndicador,
          IdIndicador,
          Comentario,
          FechaMovimiento,
        },
      });
    } catch (error) {
      throw error.response?.data || error;
    } finally {
      $q.loading.hide();
    }
  };

  return {
    comentarios,
    createComentario,
  };
});
