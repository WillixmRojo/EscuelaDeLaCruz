import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { ref } from "vue";
import { useAuthStore } from "./auth-store";
export const useQuestionStore = defineStore("question", () => {
  const authStore = useAuthStore();

  const saveData = async (data) => {
    try {
      const res = await api({
        method: "POST",
        url: "/cuestionario/forma/guardado",
        headers: {
          Authorization: "Bearer " + authStore.token,
        },
        data: {
          data,
        },
      });

      return res.data;
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  const getInfoStore = async () => {
    try {
      const res = await api({
        method: "GET",
        url: "/cuestionario/forma/info",
        headers: {
          Authorization: "Bearer " + authStore.token,
        },
      });
      return res.data;
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  return {
    saveData,
    getInfoStore,
  };
});
