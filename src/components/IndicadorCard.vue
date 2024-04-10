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
</script>

<template>
  <q-expansion-item expand-separator:true>
    <template v-slot:header>
      <q-item-section>
        <q-item-label label-color="green">
          {{ indicador.IndicadorNL }}
        </q-item-label>
      </q-item-section>
      <q-item-section side> {{ indicador.IdIndicador }} </q-item-section>
      <q-item-section side>
        <q-item-label caption>
          <!-- AGREGAR IF PARA QUE SOLO SE MUESTRE SI SU ESTATUS ES EL ACTIVO-->
          <q-badge color="blue" text-color="white"> Nuevo </q-badge>
          <q-badge v-if="2 < 1" color="green" text-color="white">
            Validado
          </q-badge>
          <q-badge color="orange" text-color="white"> Modificado </q-badge>
          <q-badge color="red" text-color="white"> Rechazado </q-badge>
        </q-item-label>
      </q-item-section>
    </template>
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section>
          <q-field filled label="Nombre Corto" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.IndicadorNC }}
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-field filled label="Descripción" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.descripcion }}
              </div>
            </template>
          </q-field>
        </q-item-section>
        <q-item-section>
          <q-field filled label="Tipo" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                Estratégico
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-field filled label="Lógica" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.logica }}
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-field filled label="Fórmula de Cálculo" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.FormulaCalculo }}
              </div>
            </template>
          </q-field>
        </q-item-section>
        <q-item-section>
          <q-field filled label="Fórmula de Cálculo de Variación" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.FormulaVariacion }}
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-field filled label="Cálculo" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                Automático
              </div>
            </template>
          </q-field>
        </q-item-section>
        <q-item-section>
          <q-field filled label="Naturaleza" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                Positiva
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-field filled label="Tipo de Cálculo del Resultado" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.TipoCalculo }}
              </div>
            </template>
          </q-field>
        </q-item-section>
        <q-item-section>
          <q-field filled label="Decimales" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                2
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-field filled label="Tipo de Cálculo del Compromiso" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.TipoCompromiso }}
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-field filled label="Etiqueta" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.etiqueta }}
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-field filled label="Director Responsable" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.DirectorResponsable }}
              </div>
            </template>
          </q-field>
        </q-item-section>
        <q-item-section>
          <q-field filled label="Area Fuente del Dato" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.AreaFuenteDato }}
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-field filled label="Acumulable" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                <q-toggle
                  disable
                  v-model="flagacumulado"
                  size="xs"
                  checked-icon="check"
                  unchecked-icon="clear"
                />
              </div>
            </template>
          </q-field>
        </q-item-section>
        <q-item-section>
          <q-field filled label="Inf. Diaria" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                <q-toggle
                  disable
                  v-model="flagtop"
                  size="xs"
                  checked-icon="check"
                  unchecked-icon="clear"
                />
              </div>
            </template>
          </q-field>
        </q-item-section>
        <q-item-section>
          <q-field filled label="Desfase" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                <q-toggle
                  disable
                  v-model="flagtop"
                  size="xs"
                  checked-icon="check"
                  unchecked-icon="clear"
                />
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-field filled label="Nombre Alterno" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.IndicadorNA }}
              </div>
            </template>
          </q-field>
        </q-item-section>
        <q-item-section>
          <q-field filled label="Empresa" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ indicador.Empresa }}
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-field filled label="Tablero Control" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                <q-toggle
                  disable
                  v-model="flagtoprendicioncuenta"
                  size="xs"
                  checked-icon="check"
                  unchecked-icon="clear"
                />
              </div>
            </template>
          </q-field>
        </q-item-section>
        <q-item-section>
          <q-field filled label="Rendición de Cuentas" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                <q-toggle
                  disable
                  v-model="flagtoprendicioncuenta"
                  size="xs"
                  checked-icon="check"
                  unchecked-icon="clear"
                />
              </div>
            </template>
          </q-field>
        </q-item-section>
        <q-item-section>
          <q-field filled label="Asamblea" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                <q-toggle
                  disable
                  v-model="flagjdd"
                  size="xs"
                  checked-icon="check"
                  unchecked-icon="clear"
                />
              </div>
            </template>
          </q-field>
        </q-item-section>
        <q-item-section>
          <q-field filled label="Juntas Dirección" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                <q-toggle
                  disable
                  v-model="flaginflacion"
                  size="xs"
                  checked-icon="check"
                  unchecked-icon="clear"
                />
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <div class="q-pa-md q-gutter-sm" align="right">
        <q-btn
          class="q-pa-sm"
          size="sm"
          style="background: rgb(62, 131, 2); color: white"
          label="Aprobado"
        />
        <q-btn
          class="q-pa-sm"
          size="sm"
          style="background: goldenrod; color: white"
          label="No aprobado"
        />
      </div>

      <q-item> </q-item>
    </q-card>
  </q-expansion-item>
  <q-separator />
</template>
