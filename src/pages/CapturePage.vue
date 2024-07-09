<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted, computed } from "vue";
import { useQuestionStore } from "src/stores/pregunta-store";
import TGCLoading from "src/components/TGCLoading.vue";

const questionStore = useQuestionStore();
const $q = useQuasar();

const saveDataQuestions = async (data) => {
  try {
    $q.loading.show({
      spinner: TGCLoading,
      delay: 300,
    });

    let prueba = await questionStore.saveData(data);

    return prueba;
  } catch (error) {
    console.log(error);
  } finally {
    $q.loading.hide();
  }
};

const hierarchyData = ref({
  inCharge: "",
  nCharge: "",
  dCharge: "",
  zCharge: "",
  pCharge: "",
});

const newData = ref({
  nombre: "",
  cruzado: "",
  escuadron: "",
  escuela: "",
  domicilio: "",
  colonia: "",
  ciudad: "",
  correo: "",
  telefonoParticular: "",
  telefonoTrabajo: "",
  telefonoCelular: "",
  viveEscuela: "",
  date: "",
  pqelv: false,
  ccc: false,
  lqec: false,
  pduc: false,
  dvat: false,
  pdda: false,
});

const cruzadoOptions = [
  {
    value: 1,
    label: "Sí",
  },
  {
    value: 0,
    label: "No",
  },
];

const escuelaOptions = [
  {
    value: 1,
    label: "Sí",
  },
  {
    value: 0,
    label: "No",
  },
];

const cargosInternacional = [
  {
    value: 1,
    label: "Director Espiritual",
  },
  {
    value: 2,
    label: "Hno. Mayor",
  },
  {
    value: 3,
    label: "Secretario",
  },
  {
    value: 4,
    label: "Economo",
  },
  {
    value: 5,
    label: "Selección y Pre-Escuela",
  },
  {
    value: 6,
    label: "Perseverancia",
  },
  {
    value: 7,
    label: "Escuelas y Cursos",
  },
];

const cargosNacional = [
  {
    value: 1,
    label: "Director Espiritual",
  },
  {
    value: 2,
    label: "Hno. Mayor",
  },
  {
    value: 3,
    label: "Secretario",
  },
  {
    value: 4,
    label: "Economo",
  },
  {
    value: 5,
    label: "Selección y Pre-Escuela",
  },
  {
    value: 6,
    label: "Perseverancia",
  },
  {
    value: 7,
    label: "Escuelas y Cursos",
  },
];

const cargosDiocesano = [
  {
    value: 1,
    label: "Director Espiritual",
  },
  {
    value: 2,
    label: "Hno. Mayor",
  },
  {
    value: 3,
    label: "Secretario",
  },
  {
    value: 4,
    label: "Economo",
  },
  {
    value: 5,
    label: "Selección y Pre-Escuela",
  },
  {
    value: 6,
    label: "Perseverancia",
  },
  {
    value: 7,
    label: "Escuelas y Cursos",
  },
];

const cargosZona = [
  {
    value: 1,
    label: "Director Espiritual",
  },
  {
    value: 2,
    label: "Hno. Mayor",
  },
  {
    value: 3,
    label: "Secretario",
  },
  {
    value: 4,
    label: "Economo",
  },
  {
    value: 5,
    label: "Selección y Pre-Escuela",
  },
  {
    value: 6,
    label: "Perseverancia",
  },
  {
    value: 7,
    label: "Escuelas y Cursos",
  },
];

const cargosParroquia = [
  {
    value: 1,
    label: "Director Espiritual",
  },
  {
    value: 2,
    label: "Hno. Mayor",
  },
  {
    value: 3,
    label: "Secretario",
  },
  {
    value: 4,
    label: "Economo",
  },
  {
    value: 5,
    label: "Selección y Pre-Escuela",
  },
  {
    value: 6,
    label: "Perseverancia",
  },
  {
    value: 7,
    label: "Jefe de Escuadron",
  },
];
</script>

<template>
  <div class="main-page" style="padding: 1%; height: 100%; width: 100%">
    <div
      class="question-box"
      style="
        width: 100%;
        height: 100%;
        background-color: #b16655;
        opacity: 0.9;
        border-radius: 10px;
        padding: 0.5%;
      "
    >
      <div
        class="question-box-header"
        style="
          height: 7.5%;
          width: 100%;
          background-color: white;
          border-radius: 10px;
          color: #b16655;
          font-weight: bold;
          font-size: large;
          display: flex;
          justify-content: space-evenly;
        "
      >
        <div
          class="diocesis"
          style="
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          Diocesis: {{ "Diocesis 1" }}
        </div>
        <q-separator
          :vertical="true"
          style="width: 2px; background-color: #b16655; opacity: 0.9"
        ></q-separator>
        <div
          class="zona"
          style="
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          Zona: {{ "Zona 1" }}
        </div>
        <q-separator
          :vertical="true"
          style="width: 2px; background-color: #b16655; opacity: 0.9"
        ></q-separator>
        <div
          class="parroquia"
          style="
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          Parroquia: {{ "Parroquia 1" }}
        </div>
        <q-separator
          :vertical="true"
          style="width: 2px; background-color: #b16655; opacity: 0.9"
        ></q-separator>
        <div
          class="nombre"
          style="
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          Nombre: {{ "Nombre 1" }}
        </div>
      </div>
      <div
        class="question-box-body"
        style="
          height: 85%;
          width: 100%;
          padding-top: 1%;
          padding-left: 1%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        "
      >
        <div
          class="questions-body-cargos"
          style="
            width: 15%;
            height: 100%;
            background-color: white;
            border-radius: 10px;
            padding: 1%;
          "
        >
          <div
            class="cargo-internacional"
            style="
              color: #b16655;
              font-weight: bold;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 20%;
            "
          >
            Cargo Internacional:
            <q-select
              :options="cargosInternacional"
              v-model="hierarchyData.inCharge"
              square
              dense
              bg-color="white"
              color="#b16655"
              style="width: 100%"
            ></q-select>
          </div>
          <!-- <q-separator
            style="height: 2px; background-color: #b16655; opacity: 0.9"
          ></q-separator> -->
          <div
            class="cargo-nacional"
            style="
              color: #b16655;
              font-weight: bold;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 20%;
            "
          >
            Cargo Nacional:
            <q-select
              :options="cargosNacional"
              v-model="hierarchyData.nCharge"
              square
              dense
              bg-color="white"
              color="#b16655"
              style="width: 100%"
            ></q-select>
          </div>
          <!-- <q-separator
            style="height: 2px; background-color: #b16655; opacity: 0.9"
          ></q-separator> -->
          <div
            class="cargo-diocesano"
            style="
              color: #b16655;
              font-weight: bold;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 20%;
            "
          >
            Cargo Diocesano:
            <q-select
              :options="cargosDiocesano"
              v-model="hierarchyData.dCharge"
              square
              dense
              bg-color="white"
              color="#b16655"
              style="width: 100%"
            ></q-select>
          </div>
          <!-- <q-separator
            style="height: 2px; background-color: #b16655; opacity: 0.9"
          ></q-separator> -->
          <div
            class="cargo-zona"
            style="
              color: #b16655;
              font-weight: bold;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 20%;
            "
          >
            Cargo Zona:
            <q-select
              :options="cargosZona"
              v-model="hierarchyData.zCharge"
              square
              dense
              bg-color="white"
              color="#b16655"
              style="width: 100%"
            ></q-select>
          </div>
          <!-- <q-separator
            style="height: 2px; background-color: #b16655; opacity: 0.9"
          ></q-separator> -->
          <div
            class="cargo-parroquia"
            style="
              color: #b16655;
              font-weight: bold;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 20%;
            "
          >
            Cargo Parroquia:
            <q-select
              :options="cargosParroquia"
              v-model="hierarchyData.pCharge"
              square
              dense
              bg-color="white"
              color="#b16655"
              style="width: 100%"
            ></q-select>
          </div>
          <!-- <q-separator
            style="height: 2px; background-color: #b16655; opacity: 0.9"
          ></q-separator> -->
        </div>
        <div
          class="questions-body-generalinfo"
          style="
            width: 80%;
            height: 100%;
            background-color: white;
            border-radius: 10px;
            padding: 1%;
            color: #b16655;
            font-weight: bold;
            overflow-y: auto;
          "
        >
          <div class="data-row-1" style="display: flex; align-items: center">
            <div
              class="sacerdote-nombre"
              style="
                height: 10%;
                width: 50%;
                display: flex;
                align-items: center;
              "
            >
              <div style="width: 20%">Sacerdote:</div>
              <q-input
                v-model="newData.nombre"
                square
                bg-color="white"
                color="#b16655"
                style="width: 90%"
              ></q-input>
            </div>
            <div
              class="sacerdote-cruzado"
              style="
                width: 25%;
                height: 10%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
              "
            >
              <div>¿Es cruzado?</div>
              <q-btn-toggle
                v-model="newData.cruzado"
                :options="cruzadoOptions"
                toggle-color="primary"
              />
            </div>
            <div
              class="numero-escuela"
              style="
                width: 25%;
                height: 10%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
              "
            >
              <div>No. Escuela</div>
              <q-input
                v-model="newData.escuela"
                square
                bg-color="white"
                color="#b16655"
                type="number"
                style="width: 40%"
              ></q-input>
            </div>
          </div>
          <div
            class="data-row-2"
            style="
              display: flex;
              align-items: center;
              padding-top: 2.5%;
              justify-content: space-evenly;
            "
          >
            <div
              class="escuadron-nombre"
              style="
                height: 10%;
                width: 45%;
                display: flex;
                align-items: center;
              "
            >
              <div style="width: 20%">Escuadrón:</div>
              <q-input
                v-model="newData.escuadron"
                square
                bg-color="white"
                color="#b16655"
                style="width: 90%"
              ></q-input>
            </div>
            <div
              class="domicilio"
              style="
                height: 10%;
                width: 45%;
                display: flex;
                align-items: center;
              "
            >
              <div style="width: 20%">Domicilio:</div>
              <q-input
                v-model="newData.domicilio"
                square
                bg-color="white"
                color="#b16655"
                style="width: 90%"
              ></q-input>
            </div>
          </div>
          <div
            class="data-row-3"
            style="
              display: flex;
              align-items: center;
              padding-top: 2.5%;
              justify-content: space-evenly;
            "
          >
            <div
              class="colonia"
              style="
                height: 10%;
                width: 45%;
                display: flex;
                align-items: center;
              "
            >
              <div style="width: 20%">Colonia:</div>
              <q-input
                v-model="newData.colonia"
                square
                bg-color="white"
                color="#b16655"
                style="width: 90%"
              ></q-input>
            </div>
            <div
              class="ciudad-población"
              style="
                height: 10%;
                width: 45%;
                display: flex;
                align-items: center;
              "
            >
              <div style="width: 20%">Ciudad o Población:</div>
              <q-input
                v-model="newData.ciudad"
                square
                bg-color="white"
                color="#b16655"
                style="width: 90%"
              ></q-input>
            </div>
          </div>
          <div
            class="data-row-4"
            style="
              display: flex;
              align-items: center;
              padding-top: 2.5%;
              justify-content: space-evenly;
            "
          >
            <div
              class="correo"
              style="
                height: 10%;
                width: 45%;
                display: flex;
                align-items: center;
              "
            >
              <div style="width: 20%">Correo Electrónico:</div>
              <q-input
                v-model="newData.correo"
                square
                bg-color="white"
                color="#b16655"
                style="width: 90%"
                :rules="[
                  (val) =>
                    (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                    'Formato de correo electrónico incorrecto.',
                ]"
              ></q-input>
            </div>
            <div
              class="telefono-particular"
              style="
                height: 10%;
                width: 45%;
                display: flex;
                align-items: center;
              "
            >
              <div style="width: 20%">Teléfono Particular:</div>
              <q-input
                v-model="newData.telefonoParticular"
                type="number"
                square
                bg-color="white"
                color="#b16655"
                style="width: 90%"
              ></q-input>
            </div>
          </div>
          <div
            class="data-row-5"
            style="
              display: flex;
              align-items: center;
              padding-top: 2.5%;
              justify-content: space-evenly;
            "
          >
            <div
              class="telefono-trabajo"
              style="
                height: 10%;
                width: 45%;
                display: flex;
                align-items: center;
              "
            >
              <div style="width: 20%">Teléfono Trabajo:</div>
              <q-input
                v-model="newData.telefonoTrabajo"
                type="number"
                square
                bg-color="white"
                color="#b16655"
                style="width: 90%"
              ></q-input>
            </div>
            <div
              class="telefono-celular"
              style="
                height: 10%;
                width: 45%;
                display: flex;
                align-items: center;
              "
            >
              <div style="width: 20%">Celular:</div>
              <q-input
                v-model="newData.telefonoCelular"
                type="number"
                square
                bg-color="white"
                color="#b16655"
                style="width: 90%"
              ></q-input>
            </div>
          </div>
          <div
            class="data-row-6"
            style="
              display: flex;
              align-items: center;
              padding-top: 2.5%;
              justify-content: space-evenly;
              height: 30%;
            "
          >
            <div style="height: 100%; width: 25%">
              <div
                class="vive-escuela"
                style="
                  height: 50%;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <div
                  style="
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                  "
                >
                  ¿Vive en escuela de ayudantes parroquial?
                </div>
                <q-btn-toggle
                  v-model="newData.viveEscuela"
                  :options="escuelaOptions"
                  toggle-color="primary"
                />
              </div>
              <div
                class="fecha"
                style="
                  height: 50%;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <div style="width: 15%">Fecha:</div>
                <div style="width: 65%; padding-left: 5%">
                  {{ newData.date }}
                </div>
                <div style="width: 10%">
                  <q-btn icon="event" round color="primary"></q-btn>
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="newData.date" minimal>
                      <div class="row items-center justify-end q-gutter-sm">
                        <q-btn
                          label="Cerrar"
                          color="primary"
                          flat
                          v-close-popup
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </div>
              </div>
            </div>
            <div
              class="testimonios"
              style="
                height: 100%;
                width: 65%;
                border: 2px solid #b16655;
                padding: 1%;
                border-radius: 10px;
                display: flex;
              "
            >
              <div
                style="
                  height: 100%;
                  width: 15%;
                  display: flex;
                  align-items: center;
                "
              >
                Testimonios:
              </div>
              <div class="testimonios-options" style="height: 100%; width: 85%">
                <div style="display: flex; width: 100%">
                  <div style="width: 50%">
                    <q-checkbox
                      v-model="newData.pqelv"
                      label="Para qué es la vida?"
                      checked-icon="task_alt"
                      unchecked-icon="highlight_off"
                    ></q-checkbox>
                    <q-checkbox
                      v-model="newData.ccc"
                      label="Cristo con Cristo?"
                      checked-icon="task_alt"
                      unchecked-icon="highlight_off"
                    ></q-checkbox>
                    <q-checkbox
                      v-model="newData.lqec"
                      label="Lo que es cristiano"
                      checked-icon="task_alt"
                      unchecked-icon="highlight_off"
                    ></q-checkbox>
                  </div>
                  <div style="width: 50%">
                    <q-checkbox
                      v-model="newData.pduc"
                      label="Preparación de un cristiano"
                      checked-icon="task_alt"
                      unchecked-icon="highlight_off"
                    ></q-checkbox>
                    <q-checkbox
                      v-model="newData.dvat"
                      label="Dónde vas a trabajar?"
                      checked-icon="task_alt"
                      unchecked-icon="highlight_off"
                    ></q-checkbox>
                    <q-checkbox
                      v-model="newData.pdda"
                      label="Pueblo de Dios arenga"
                      checked-icon="task_alt"
                      unchecked-icon="highlight_off"
                    ></q-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="data-row-7"
            style="
              display: flex;
              align-items: center;
              padding-top: 2.5%;
              justify-content: space-evenly;
              height: 30%;
            "
          ></div>
        </div>
      </div>
      <div class="question-box-footer" style="height: 7.5%; width: 100%">
        <div
          class="footer-buttons"
          style="
            padding: 1%;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: end;
          "
        >
          <q-btn
            @click="async () => await saveDataQuestions(dataprueba)"
            style="
              background-color: white;
              color: #b16655;
              font-weight: bold;
              border-radius: 5px;
              width: 10%;
              height: 90%;
              margin-right: 15px;
            "
          >
            Guardar
          </q-btn>
          <q-btn
            style="
              background-color: white;
              color: #b16655;
              font-weight: bold;
              border-radius: 5px;
              width: 10%;
              height: 90%;
            "
          >
            Limpiar
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.q-select__dropdown-icon {
  color: #b16655;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
}

.block {
  font-weight: bold;
}
</style>
