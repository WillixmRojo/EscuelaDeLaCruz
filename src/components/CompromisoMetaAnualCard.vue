<script setup>
import { ref, computed } from "vue";

// const props = defineProps([
//   "id",
//   "titulo",
//   "flagMostrarCard",
//   "flagMetaNoDefinida",
//   "flagReplicarMeta",
//   "columnas",
//   "listado",
//   "idRow",
//   "handleChangeMetaNoDefinida",
//   "handleChangeReplicarMeta",
// ]);
const props = defineProps({
  id: Number,
  titulo: String,
  flagMostrarCard: Boolean,
  flagMetaNoDefinida: Boolean,
  flagReplicarMeta: Boolean,
  columnas: Object,
  listado: Object,
  idRow: String,
  // handleChangeMetaNoDefinida: () => {},
  // handleChangeReplicarMeta: () => {},
});

const flag_meta_no_definida = ref(props.flagMetaNoDefinida); // computed(() => props.flagMetaNoDefinida);
// const flag_meta_no_definida = computed(() => props.flagMetaNoDefinida);

// onMounted(() => {
//   AddResizeListener();
// });
</script>
<template>
  <q-card class="my-card" v-if="flagMostrarCard">
    <q-card-section style="padding: 5px">
      <div class="text-subtitle1">{{ titulo }}</div>
    </q-card-section>

    <q-card-actions align="center">
      <div
        class="full-width row wrap justify-around items-center content-center q-col-gutter-x-sm rowStyle"
      >
        <div class="col-6 col-lg-6">
          <q-toggle
            size="xs"
            label="Meta no definida"
            v-model="flag_meta_no_definida"
          />
          <!-- @update:model-value="(val) => handleChangeMetaNoDefinida(val, id)" -->
        </div>
        <div class="col-6 col-lg-6">
          <q-toggle
            size="xs"
            label="Replicar meta"
            :v-model="flagReplicarMeta"
            :disable="flag_meta_no_definida"
          />
          <!-- @update:model-value="(val) => handleChangeReplicarMeta(val, id)" -->
        </div>
        <div class="col-12 col-lg-12">
          <div class="q-pa-md">
            <q-table
              v-if="!flag_meta_no_definida"
              flat
              dense
              bordered
              :rows="props.listado"
              :columns="props.columnas"
              :row-key="props.idRow"
              :rows-per-page-options="[0]"
              hide-bottom
              :table-header-style="{
                backgroundColor: '#3255a4',
                color: 'white',
              }"
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="mes" :props="props">
                    {{ props.row.mes }}
                  </q-td>
                  <q-td key="metaAnualA" :props="props">
                    {{ props.row.metaAnualA }}
                    <q-popup-edit
                      v-model="props.row.metaAnualA"
                      buttons
                      v-slot="scope"
                    >
                      <!-- title="Cambiar meta A" -->
                      <div style="font-size: 18px">
                        Cambiar meta A de {{ props.row.mes }}
                      </div>
                      <q-input
                        type="number"
                        v-model="scope.value"
                        dense
                        autofocus
                      />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="metaAnualB" :props="props">
                    {{ props.row.metaAnualB }}
                    <q-popup-edit
                      v-model="props.row.metaAnualB"
                      buttons
                      v-slot="scope"
                    >
                      <!-- title="Cambiar Meta B" -->
                      <div style="font-size: 18px">
                        Cambiar meta B de {{ props.row.mes }}
                      </div>
                      <q-input
                        type="number"
                        v-model="scope.value"
                        dense
                        autofocus
                      />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="metaAnualC" :props="props">
                    {{ props.row.metaAnualC }}
                    <q-popup-edit
                      v-model="props.row.metaAnualC"
                      buttons
                      v-slot="scope"
                    >
                      <!-- title="Cambiar Meta C" -->
                      <div style="font-size: 18px">
                        Cambiar meta C de {{ props.row.mes }}
                      </div>
                      <q-input
                        type="number"
                        v-model="scope.value"
                        dense
                        autofocus
                      />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="metaAnualD" :props="props">
                    {{ props.row.metaAnualD }}
                    <q-popup-edit
                      v-model="props.row.metaAnualD"
                      buttons
                      v-slot="scope"
                    >
                      <!-- title="Cambiar Meta D" -->
                      <div style="font-size: 18px">
                        Cambiar meta D de {{ props.row.mes }}
                      </div>
                      <q-input
                        type="number"
                        v-model="scope.value"
                        dense
                        autofocus
                      />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="etiqueta" :props="props">
                    {{ props.row.etiqueta }}
                    <q-popup-edit v-model="props.row.etiqueta" v-slot="scope">
                      <q-input
                        v-model="scope.value"
                        dense
                        autofocus
                        counter
                        @keyup.enter="scope.set"
                      />
                    </q-popup-edit>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
          <!-- </template> -->
        </div>
      </div>
    </q-card-actions>
  </q-card>
</template>
