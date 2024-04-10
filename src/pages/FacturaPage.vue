<script setup>
import { ref } from "vue";

const selectedFacturaOption = ref("");
</script>

<template>
  <div
    class="main"
    style="
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-x: hidden;
    "
  >
    <div
      class="user-admin-title"
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-top: 10px;
      "
    >
      <q-toolbar-title
        style="font-size: 30px; color: #00563b; font-weight: 600"
      >
        Facturación
      </q-toolbar-title>
    </div>
    <div
      style="
        width: 100%;
        height: 10%;
        display: flex;
        align-items: end;
        justify-content: center;
        border-bottom: 2px solid #00563b;
      "
    >
      <div style="width: 75%; display: flex; justify-content: space-evenly">
        <q-btn
          :class="`${
            selectedFacturaOption === 'Facturar'
              ? 'factura-option-type-selected'
              : 'factura-option-type'
          }`"
          @click="selectedFacturaOption = 'Facturar'"
        >
          Facturar
        </q-btn>
        <q-btn
          :class="`${
            selectedFacturaOption === 'Consultar'
              ? 'factura-option-type-selected'
              : 'factura-option-type'
          }`"
          @click="selectedFacturaOption = 'Consultar'"
        >
          Consultar
        </q-btn>
      </div>
    </div>
    <div
      v-if="selectedFacturaOption === 'Facturar'"
      class="factura-window"
      style="
        height: 80%;
        width: 90%;
        padding: 1%;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <q-card
        style="
          height: 100%;
          width: 100%;
          border: 2px solid #00563b;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
        "
      >
        <div
          class="factura-title"
          style="
            height: 10%;
            width: 100%;
            display: flex;
            align-items: center;
            border-bottom: 2px solid #00563b;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          "
        >
          <q-toolbar-title
            style="text-align: center; font-weight: 600; font-size: 30px"
          >
            Ingresar Datos a Facturar
          </q-toolbar-title>
        </div>
      </q-card>
    </div>
    <div
      v-if="selectedFacturaOption === 'Consultar'"
      class="consulta-window"
      style="
        height: 80%;
        width: 90%;
        padding: 1%;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <q-card
        style="
          height: 100%;
          width: 100%;
          border: 2px solid #00563b;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
        "
      ></q-card>
    </div>
  </div>
</template>

<style lang="scss">
.factura-option-type {
  width: 40%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #00563b;
  color: #f1f1f1;
  font-weight: 600;
  opacity: 0.75;
}

.factura-option-type-selected {
  width: 40%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #00563b;
  color: #f1f1f1;
  font-weight: 600;
}

.factura-window {
  animation: slide-from-left 1000ms ease-in;
}

.consulta-window {
  animation: slide-from-right 500ms ease-in;
}

@keyframes slide-from-left {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-from-right {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
