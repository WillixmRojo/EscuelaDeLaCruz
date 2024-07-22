<script setup>
import { useQuasar } from "quasar";
import { useAuthStore } from "src/stores/auth-store";
import { ref, computed, onMounted, watch } from "vue";
import { useQuestionStore } from "src/stores/pregunta-store";
import { exportFile } from "quasar";

const authStore = useAuthStore();
const infoStore = useQuestionStore();
const $q = useQuasar();

const search = ref("");
const loading = ref(false);
const rows = ref([]);
const allRows = ref([]);
const error = ref(null);
const totalRecords = ref(0);
const isFilterContentVisible = ref(false);

const pagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 50,
});

const filters = ref({
  filter1: false,
  filter2: false,
  selector1: null,
  selector2: null,
});

const options = [
  { label: "Opción 1", value: 1 },
  { label: "Opción 2", value: 2 },
  { label: "Opción 3", value: 3 },
];

// Función para alternar la visibilidad del contenido del acordeón
const toggleFilterContent = () => {
  isFilterContentVisible.value = !isFilterContentVisible.value;
};

// Función para obtener los datos desde el store
const getInfoData = async () => {
  try {
    loading.value = true;
    let result = await infoStore.getInfoStore();
    return result;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  } finally {
    loading.value = false;
  }
};

// Función para cargar los datos en la tabla
const loadTableData = async () => {
  try {
    const result = await getInfoData();

    if (result && result.data && Array.isArray(result.data[0])) {
      // Extraemos el array de datos y el total de registros
      const dataArray = result.data[0];

      totalRecords.value = dataArray[dataArray.length - 1];

      // Removemos el último elemento (total de registros) del array
      const records = dataArray.slice();
      // console.log("Resultado de records:", records);

      allRows.value = records.map((r, index) => ({ ...r, index }));

      rows.value = allRows.value.slice(0, pagination.value.rowsPerPage);
    } else {
      throw new Error("La estructura de datos no es la esperada");
    }
  } catch (err) {
    console.error("Error en loadTableData:", err);
    error.value = err.message;
  }
};

// Función para filtrar las filas basadas en la búsqueda
const filteredRows = computed(() => {
  let filtered = allRows.value;

  if (search.value) {
    const searchLower = search.value.toLowerCase();
    filtered = filtered.filter((row) =>
      row.Sacerdote.toLowerCase().includes(searchLower)
    );
  }

  if (filters.value.filter1) {
    filtered = filtered.filter((row) => row.Cruzado === true);
  }

  if (filters.value.filter2) {
    filtered = filtered.filter((row) => row.EscuelaAyudantes === true);
  }

  return filtered;
});

// Función para manejar el scroll virtual
const onScroll = ({ to }) => {
  const lastIndex = rows.value.length - 1;
  if (to === lastIndex) {
    const nextPage = pagination.value.page + 1;
    const nextPageRows = filteredRows.value.slice(
      pagination.value.rowsPerPage * (nextPage - 1),
      pagination.value.rowsPerPage * nextPage
    );
    if (nextPageRows.length > 0) {
      pagination.value.page = nextPage;
      rows.value = [...rows.value, ...nextPageRows];
    }
  }
};

// Función para exportar los datos de la tabla (ahora usa filteredRows)
const exportTable = () => {
  const headers = columns.map((col) => col.label);
  const data = filteredRows.value.map((row) =>
    columns.map((col) => row[col.field])
  );
  const csvContent = [headers, ...data].map((e) => e.join(",")).join("\n");
  const status = exportFile("table-export.csv", csvContent, "text/csv");
  if (status !== true) {
    $q.notify({
      message: "La exportación del navegador falló.",
      color: "negative",
      icon: "warning",
    });
  }
};

// Observador para resetear la paginación cuando cambia la búsqueda
watch(
  [search, filters],
  () => {
    pagination.value.page = 1;
    rows.value = filteredRows.value.slice(0, pagination.value.rowsPerPage);
  },
  { deep: true }
);

onMounted(() => {
  loadTableData();
});

const columns = [
  {
    name: "IdInternacional",
    required: true,
    label: "Internacional",
    align: "center",
    field: "IdInternacional",
    // sortable: true,
    // format: (val) => val,
    // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "IdNacional",
    required: true,
    label: "Nacional",
    align: "center",
    field: "IdNacional",
    sortable: true,
  },
  {
    name: "IdRegion",
    required: true,
    label: "Region",
    align: "center",
    field: "IdRegion",
    // sortable: true,
  },
  {
    name: "IdZona",
    required: false,
    label: "Zona",
    align: "center",
    field: "IdZona",
    // sortable: true,
  },
  {
    name: "IdParroquia",
    required: true,
    label: "Parroquia",
    align: "center",
    field: "IdParroquia",
    // sortable: true,
  },
  {
    name: "Sacerdote",
    required: true,
    label: "Sacerdote",
    align: "center",
    field: "Sacerdote",
    // sortable: true,
  },
  {
    name: "Cruzado",
    required: true,
    label: "Cruzado",
    align: "center",
    field: "Cruzado",
    // sortable: true,
    format: (val) => (val === true ? "Si" : "No"),
  },
  {
    name: "Escuadron",
    required: false,
    label: "Escuadron",
    align: "center",
    field: "Escuadron",
    // sortable: true,
  },
  {
    name: "Escuela",
    required: false,
    label: "Escuela",
    align: "center",
    field: "Escuela",
    // sortable: true,
  },
  {
    name: "Domicilio",
    required: false,
    label: "Domicilio",
    align: "center",
    field: "Domicilio",
    // sortable: true,
  },
  {
    name: "Colonia",
    required: false,
    label: "Colonia",
    align: "center",
    field: "Colonia",
    // sortable: true,
  },
  {
    name: "Ciudad",
    required: false,
    label: "Ciudad",
    align: "center",
    field: "Ciudad",
    // sortable: true,
  },
  {
    name: "Correo",
    required: false,
    label: "Correo",
    align: "center",
    field: "Correo",
    // sortable: true,
  },
  {
    name: "TelefonoParticular",
    required: false,
    label: "TelefonoParticular",
    align: "center",
    field: "TelefonoParticular",
    // sortable: true,
  },
  {
    name: "TelefonoTrabajo",
    required: false,
    label: "TelefonoTrabajo",
    align: "center",
    field: "TelefonoTrabajo",
    // sortable: true,
  },
  {
    name: "Celular",
    required: false,
    label: "Celular",
    align: "center",
    field: "Celular",
    // sortable: true,
  },
  {
    name: "EscuelaAyudantes",
    required: true,
    label: "Escuela Ayudantes",
    align: "center",
    field: "EscuelaAyudantes",
    // sortable: true,
    format: (val) => (val === true ? "Si" : "No"),
  },
  {
    name: "CargoInternacional",
    required: false,
    label: "Cargo Internacional",
    align: "center",
    field: "CargoInternacional",
    // sortable: true,
  },
  {
    name: "CargoNacional",
    required: false,
    label: "Cargo Nacional",
    align: "center",
    field: "CargoNacional",
    // sortable: true,
  },
  {
    name: "CargoRegional",
    required: false,
    label: "Cargo Regional",
    align: "center",
    field: "CargoRegional",
    // sortable: true,
  },
  {
    name: "CargoZona",
    required: false,
    label: "Cargo Zona",
    align: "center",
    field: "CargoZona",
    // sortable: true,
  },
  {
    name: "CargoParroquia",
    required: true,
    label: "Cargo Parroquia",
    align: "center",
    field: "CargoParroquia",
    // sortable: true,
  },
  {
    name: "PQELV",
    required: true,
    label: "PQELV",
    align: "center",
    field: "PQELV",
    // sortable: true,
    format: (val) => (val = true ? "Si" : "No"),
  },
  {
    name: "CCC",
    required: true,
    label: "CCC",
    align: "center",
    field: "CCC",
    // sortable: true,
    format: (val) => (val = true ? "Si" : "No"),
  },
  {
    name: "LQEC",
    required: true,
    label: "LQEC",
    align: "center",
    field: "LQEC",
    // sortable: true,
    format: (val) => (val = true ? "Si" : "No"),
  },
  {
    name: "PDUC",
    required: true,
    label: "PDUC",
    align: "center",
    field: "PDUC",
    // sortable: true,
    format: (val) => (val = true ? "Si" : "No"),
  },
  {
    name: "DVAT",
    required: true,
    label: "DVAT",
    align: "center",
    field: "DVAT",
    // sortable: true,
    format: (val) => (val = true ? "Si" : "No"),
  },
  {
    name: "PDDA",
    required: true,
    label: "PDDA",
    align: "center",
    field: "PDDA",
    // sortable: true,
    format: (val) => (val = true ? "Si" : "No"),
  },
  {
    name: "ServiciosEscuela",
    required: false,
    label: "Servicios Escuela",
    align: "center",
    field: "ServiciosEscuela",
    // sortable: true,
  },
  {
    name: "Capacitacion",
    required: true,
    label: "Capacitacion",
    align: "center",
    field: "Capacitacion",
    // sortable: true,
    format: (val) => (val = true ? "Si" : "No"),
  },
  {
    name: "Espiritu",
    required: true,
    label: "Espiritu",
    align: "center",
    field: "Espiritu",
    // sortable: true,
    format: (val) => (val = true ? "Si" : "No"),
  },
  {
    name: "DirectoresRectores",
    required: true,
    label: "Directores Rectores",
    align: "center",
    field: "DirectoresRectores",
    // sortable: true,
    format: (val) => (val = true ? "Si" : "No"),
  },
  {
    name: "ServiciosCurso",
    required: true,
    label: "Servicios Curso",
    align: "center",
    field: "ServiciosCurso",
    // sortable: true,
  },
  {
    name: "FechaCargado",
    required: true,
    label: "Fecha Cargado",
    align: "center",
    field: "FechaCargado",
    // sortable: true,
    format: (val) => new Date(val).toLocaleDateString(),
  },
  {
    name: "FechaActualizado",
    required: true,
    label: "Fecha Actualizado",
    align: "center",
    field: "FechaActualizado",
    // sortable: true,
    format: (val) => new Date(val).toLocaleDateString(),
  },
];
</script>

<template>
  <div class="main-landing" style="width: 100%; height: 100%; padding: 1%">
    <div>
      <div class="q-pa-md" style="max-width: 50%">
        <div class="q-gutter-md">
          <!--  <div>
          <q-badge color="teal">Model: "{{ search }}"</q-badge>
        </div> -->

          <q-input
            v-model="search"
            debounce="500"
            filled
            placeholder="Buscar..."
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
    <div>
      <!--     <div
      style="
        border: solid;
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: end;
        background-color: red;
        margin: 1%;
        float: left;
      "
    >
      Text
    </div> -->
      <!-- Menú de Filtrado -->
      <q-card
        flat
        style="width: 15%; margin-right: 1%; margin-left: 1%; float: left"
      >
        <div>
          <q-card-section
            style="
              background-color: #b16655;
              color: white;
              border-radius: 50px;
              cursor: pointer;
            "
            @click="toggleFilterContent"
          >
            <div class="text-h6">Opciones de Filtrado</div>
          </q-card-section>
        </div>
        <q-slide-transition>
          <div v-show="isFilterContentVisible">
            <q-card-section
              style="
                background-color: #fff5f3;
                color: #b16655;
                font-size: 100%;
                font-weight: bold;
                border-top-left-radius: 5%;
                border-top-right-radius: 5%;
              "
            >
              <div><q-toggle v-model="filters.filter1" label="Cruzados" /></div>
              <div>
                <q-toggle v-model="filters.filter2" label="Escuela Ayudantes" />
              </div>
            </q-card-section>
            <q-card-section
              style="
                background-color: #fff5f3;
                font-size: 20px;
                font-weight: bold;
              "
            >
              <q-select
                style="padding: 0%; margin: 2%; font-weight: bold"
                rounded
                outlined
                v-model="filters.selector1"
                :options="options"
                label
              >
                <template v-slot:label>
                  <div
                    style="
                      color: #b16655;
                      text-align: center;
                      font-weight: bold;
                    "
                  >
                    Selector 1
                  </div>
                </template>
              </q-select>
              <q-select
                style="padding: 0%; margin: 2%; font-weight: bold"
                rounded
                outlined
                v-model="filters.selector2"
                :options="options"
                label
              >
                <template v-slot:label>
                  <div
                    style="
                      color: #b16655;
                      text-align: center;
                      font-weight: bold;
                    "
                  >
                    Selector 2
                  </div>
                </template>
              </q-select>
            </q-card-section>
            <!--
        <q-card-section style="background-color: #b16655; color: white">
          <div class="text-h6">Opciones de Vista</div>
        </q-card-section>
        <q-separator />
        <q-card-section
          style="
            background-color: #fff5f3;
            color: #b16655;
            font-size: 20px;
            font-weight: bold;
          "
        >
          <div>
            <q-btn
              style="
                width: 100%;
                margin: 2%;
                background-color: #b16655;
                color: white;
                font-size: 15px;
                font-weight: bold;
              "
              unelevated
              rounded
              label="Zona 1"
            />
          </div>
          <div>
            <q-btn
              style="
                width: 100%;
                margin: 2%;
                background-color: #b16655;
                color: white;
                font-size: 15px;
                font-weight: bold;
              "
              unelevated
              rounded
              label="Zona 2"
            />
          </div>
          <div>
            <q-btn
              style="
                width: 100%;
                margin: 2%;
                background-color: #b16655;
                color: white;
                font-size: 15px;
                font-weight: bold;
              "
              unelevated
              rounded
              label="Zona 3"
            />
          </div>
          <div>
            <q-btn
              style="
                width: 100%;
                margin: 2%;
                background-color: #b16655;
                color: white;
                font-size: 15px;
                font-weight: bold;
              "
              unelevated
              rounded
              label="Zona 4"
            />
          </div>
        </q-card-section>-->
          </div>
        </q-slide-transition>
      </q-card>

      <q-btn
        @click="exportTable"
        style="
          width: 10%;
          background-color: #b16655;
          color: white;
          font-size: 15px;
          font-weight: bold;
          border-radius: 50px;
        "
      >
        <div class="ellipsis">Exportar</div>
      </q-btn>

      <div class="q-pa-md">
        <q-table
          class="my-sticky-dynamic compact-table"
          flat
          bordered
          :rows="filteredRows"
          :columns="columns"
          :loading="loading"
          row-key="Sacerdote"
          virtual-scroll
          :virtual-scroll-item-size="28"
          :virtual-scroll-sticky-size-start="28"
          :pagination="pagination"
          :rows-per-page-options="[0]"
          @virtual-scroll="onScroll"
        />
      </div>
    </div>
  </div>
</template>
<style lang="sass">
.my-sticky-dynamic
  /* height or max-height is important */
  overflow: hidden
  height: 650px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #b16655
    color: white

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 28px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 28px

// Nuevos estilos para quitar el interlineado
.compact-table
  .q-table__middle
    td
      padding: 2px 4px
    tr
      height: 28px

  .q-table__grid-content
    .q-table__grid-item
      padding: 2px

  // Ajustar el tamaño de la fuente si es necesario
  font-size: 12px

  // Eliminar bordes internos si se desea un aspecto aún más compacto
  .q-table__bottom
    border-top: none
  td, th
    border: none

    // Agregar estilos para la animación del acordeón si es necesario
.q-slide-transition
  transition: all 0.3s ease-in-out

// Estilos adicionales para mejorar la apariencia del acordeón
.text-h6
  display: flex
  justify-content: space-between
  align-items: center

  .q-icon
    transition: transform 0.3s
    &.rotated
      transform: rotate(180deg)
</style>
