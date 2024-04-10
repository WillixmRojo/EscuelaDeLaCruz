<script setup>
import { ref } from "vue";

const props = defineProps({
  indicador: Object,
});

const flagtdc = ref(true);
const flagjdd = ref(true);
const flagtop = ref(true);
const flaginflacion = ref(true);
const flagacumulado = ref(false);
const flagtoprendicioncuenta = ref(false);

const seleccionarTarjeta = (indicador) => {
  //alert(indicador.IdIndicador);
};
</script>

<template>
  <div class="q-pa-sm">
    <q-card
      @click="seleccionarTarjeta(indicador)"
      class="my-card text-black"
      style="background: radial-gradient(circle, #e4e5e6 0%, #dcdee0 100%)"
    >
      <q-card-section
        ><div class="text-subtitle2 text-blue-10">
          <strong>{{ indicador.IdIndicador }}</strong>
        </div>
        <div class="text-title text-grey-10">
          <strong>{{ indicador.IndicadorNL }}</strong>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        {{ indicador.Descripcion }}

        <q-card-actions align="right">
          <q-badge v-if="2 > 1" color="green" text-color="white">
            Aprobado
          </q-badge>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>
