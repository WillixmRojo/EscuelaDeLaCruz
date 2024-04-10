import { useQuasar } from "quasar";

export const useNotify = () => {
  const $q = useQuasar();

  const errorNotify = (message = "Error de servidor") => {
    $q.notify({
      message,
      color: "negative",
      textColor: "white",
      icon: "report_problem",
      position: "top",
    });
  };

  const successNotify = (message = "Éxito") => {
    $q.notify({
      message,
      color: "positive",
      textColor: "white",
      icon: "mdi-account-check",
      position: "top",
    });
  };

  const showNotify = (
    message = "Error de servidor",
    color = "negative",
    icon = "report_problem"
  ) => {
    $q.notify({
      message,
      color,
      textColor: "white",
      icon,
      position: "top",
    });
  };

  return { showNotify, errorNotify, successNotify };
};
