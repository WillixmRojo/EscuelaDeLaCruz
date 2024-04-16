import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

export const useInfraStore = defineStore("infra", () => {
  const userDialogBox = ref(false);

  const changeBox = async (type, action) => {
    try {
      if (type === 1) {
        if (action === "close") {
          userDialogBox.value = false;
        } else if (action === "open") {
          userDialogBox.value = true;
        }
      }

      return;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    changeBox,
    userDialogBox,
  };
});
