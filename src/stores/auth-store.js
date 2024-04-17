import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(null);
  const expiresIn = ref(null);
  const profile = ref(null);

  const login = async (user, password) => {
    try {
      const res = await api.post("/auth/login", {
        user,
        password,
      });
      token.value = res.data.token;
      expiresIn.value = res.data.expiresIn;
      profile.value = res.data.profile;
      sessionStorage.setItem("isAuth", true);
      refreshTime();
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

  const register = async (newUser) => {
    try {
      const usuario = newUser.usuario;
      const email = newUser.correo;
      const password = newUser.contra;
      const repassword = newUser.recontra;
      const nivel = newUser.nivel;

      const res = await api.post("/auth/register", {
        usuario,
        email,
        password,
        repassword,
        nivel,
      });

      return res.data.message;
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

  const logout = async () => {
    try {
      await api.get("/auth/logout");
    } catch (error) {
      console.log(error);
    } finally {
      resetStore();
      sessionStorage.removeItem("isAuth");
    }
  };

  const refreshTime = () => {
    setTimeout(() => {
      refreshToken();
    }, expiresIn.value * 1000 - 10000);
  };

  const refreshToken = async () => {
    try {
      const res = await api.get("/auth/refresh");
      token.value = res.data.token;
      expiresIn.value = res.data.expiresIn;
      profile.value = res.data.profile;
      refreshTime();
    } catch (error) {
      console.log(error);
    }
  };

  const resetStore = () => {
    token.value = null;
    expiresIn.value = null;
    profile.value = null;
  };

  return {
    token,
    expiresIn,
    profile,
    login,
    register,
    logout,
    refreshToken,
  };
});
