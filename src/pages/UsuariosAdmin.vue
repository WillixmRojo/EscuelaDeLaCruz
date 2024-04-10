<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import { useAuthStore } from "src/stores/auth-store";
import { useUserStore } from "src/stores/user-store";
import { useNotify } from "../hooks/notifyHooks.js";
import TGCLoading from "src/components/TGCLoading.vue";

const $q = useQuasar();
const { showNotify } = useNotify();
const authStore = useAuthStore();
const userStore = useUserStore();

const selectedOption = ref("Modificar");
const selectedUserModifier = ref("");
const selectedNewUserOption = ref("");
const userList = ref([null]);
const userListFiltro = ref([null]);
const userIndex = ref("");
const userSearch = ref("");
const selectedUser = ref({});
const roleOptions = ref([
  {
    value: 1,
    label: "Administrador",
  },
  {
    value: 2,
    label: "Usuario",
  },
  {
    value: 3,
    label: "Cliente",
  },
]);
const newUser = ref({
  user: "",
  email: "",
  rfc: "",
  cliente: "",
  idrol: "",
});

const getUserList = async () => {
  try {
    $q.loading.show({
      spinner: TGCLoading,
      delay: 300,
    });

    const users = await userStore.getUsers();

    userList.value = users?.filter((item) => item.usuario !== "");

    if (authStore.profile?.idrol === 1) {
      userListFiltro.value = userList.value;
    } else if (authStore.profile?.idrol === 2) {
      userListFiltro.value = userList.value.filter((item) => item.idrol === 3);
    }

    selectedUser.value = userListFiltro.value[0];

    return;
  } catch (error) {
    console.log(error);
  } finally {
    $q.loading.hide();
  }
};

const filterFnUsers = () => {
  try {
    const input = userSearch.value
      .toLowerCase()
      .trimStart()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    userListFiltro.value = userList.value.filter(
      (item) =>
        item.usuario
          .toLowerCase()
          .trimStart()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .indexOf(input) > -1 ||
        item.rfc
          .toLowerCase()
          .trimStart()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .indexOf(input) > -1
    );

    return;
  } catch (error) {
    console.log(error);
  }
};

const crearUsuario = async (usuario) => {
  try {
    const res = await userStore.createUser(usuario);

    showNotify("El usuario se creó con éxito!", "positive", "mdi-account-plus");

    return;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await getUserList();
});
</script>
<template>
  <div
    class="main"
    style="height: 100%; width: 100%; display: flex; flex-direction: column"
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
        Administración de Usuarios
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
          :class="`
            ${
              selectedOption === 'Modificar'
                ? 'user-options-selected'
                : 'user-options'
            }
          `"
          @click="
            async () => {
              selectedOption = 'Modificar';
              selectedNewUserOption = '';
              await getUserList();
            }
          "
        >
          Modificar
        </q-btn>
        <q-btn
          :class="`
            ${
              selectedOption === 'Crear'
                ? 'user-options-selected'
                : 'user-options'
            }
          `"
          @click="(selectedOption = 'Crear'), (selectedUserModifier = '')"
        >
          Crear
        </q-btn>
      </div>
    </div>
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        overflow-x: hidden;
      "
    >
      <div
        v-if="selectedOption === 'Modificar'"
        class="modify-user"
        style="
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 50px;
          padding: 25px;
        "
      >
        <div
          class="users"
          style="
            display: flex;
            width: 35%;
            height: 100%;
            align-items: center;
            justify-content: center;
          "
        >
          <q-card
            class="modify-user-card"
            style="
              width: 75%;
              height: 90%;
              padding: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border-radius: 20px;
            "
          >
            <div
              v-if="authStore.profile?.idrol === 1 && $q.screen.width >= 2400"
              class="filter-user-type"
              style="
                height: 15%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
              "
            >
              <q-btn
                :class="`
                  ${
                    selectedUserModifier === 'Admin'
                      ? 'user-option-type-selected'
                      : 'user-option-type'
                  }
                `"
                @click="
                  selectedUserModifier === 'Admin'
                    ? (selectedUserModifier = '')
                    : (selectedUserModifier = 'Admin')
                "
              >
                Administradores
              </q-btn>
              <q-btn
                :class="`
                  ${
                    selectedUserModifier === 'Users'
                      ? 'user-option-type-selected'
                      : 'user-option-type'
                  }
                `"
                @click="
                  selectedUserModifier === 'Users'
                    ? (selectedUserModifier = '')
                    : (selectedUserModifier = 'Users')
                "
              >
                Usuarios
              </q-btn>
              <q-btn
                :class="`
                  ${
                    selectedUserModifier === 'Clients'
                      ? 'user-option-type-selected'
                      : 'user-option-type'
                  }
                `"
                @click="
                  selectedUserModifier === 'Clients'
                    ? (selectedUserModifier = '')
                    : (selectedUserModifier = 'Clients')
                "
              >
                Clientes
              </q-btn>
            </div>
            <div
              v-if="authStore.profile?.idrol === 1 && $q.screen.width < 2400"
              class="filter-user-type"
              style="
                height: 20%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
              "
            >
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <q-btn
                  :class="`
                  ${
                    selectedUserModifier === 'Admin'
                      ? 'user-option-type-selected'
                      : 'user-option-type'
                  }
                `"
                  @click="
                    selectedUserModifier === 'Admin'
                      ? (selectedUserModifier = '')
                      : (selectedUserModifier = 'Admin')
                  "
                >
                  Administradores
                </q-btn>
              </div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin: auto;
                "
              >
                <q-btn
                  :class="`
                  ${
                    selectedUserModifier === 'Users'
                      ? 'user-option-type-selected'
                      : 'user-option-type'
                  }
                `"
                  @click="
                    selectedUserModifier === 'Users'
                      ? (selectedUserModifier = '')
                      : (selectedUserModifier = 'Users')
                  "
                >
                  Usuarios
                </q-btn>
                <q-btn
                  :class="`
                  ${
                    selectedUserModifier === 'Clients'
                      ? 'user-option-type-selected'
                      : 'user-option-type'
                  }
                `"
                  @click="
                    selectedUserModifier === 'Clients'
                      ? (selectedUserModifier = '')
                      : (selectedUserModifier = 'Clients')
                  "
                >
                  Clientes
                </q-btn>
              </div>
            </div>
            <div
              class="user-list"
              style="
                display: flex;
                align-items: start;
                justify-content: center;
                width: 90%;
                height: 80%;
                padding: 0 15px 15px 15px;
              "
            >
              <q-card
                style="
                  height: 95%;
                  width: 100%;
                  border-radius: 20px;
                  border: 2px solid #00563b;
                  display: flex;
                  flex-direction: column;
                "
              >
                <div
                  style="
                    width: 100%;
                    height: 15%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <q-input
                    rounded
                    outlined
                    dense
                    hide-selected
                    label="Buscar usuarios..."
                    v-model="userSearch"
                    :place-holder="userSearch"
                    @keyup="filterFnUsers"
                    type="text"
                    style="width: 85%"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        v-if="userSearch === ''"
                        name="search"
                        style="color: #00563b"
                      ></q-icon>
                      <q-icon
                        v-else
                        name="mdi-close-circle-outline"
                        style="color: #00563b; cursor: pointer"
                        @click="(userSearch = ''), filterFnUsers()"
                      ></q-icon>
                    </template>
                  </q-input>
                </div>
                <q-virtual-scroll
                  v-show="userListFiltro.length > 0"
                  :items="
                    selectedUserModifier === 'Admin'
                      ? userListFiltro.filter((users) => users.idrol === 1)
                      : selectedUserModifier === 'Users'
                      ? userListFiltro.filter((users) => users.idrol === 2)
                      : selectedUserModifier === 'Clients'
                      ? userListFiltro.filter((users) => users.idrol === 3)
                      : userListFiltro
                  "
                  type="list"
                  virtual-scroll-slice-size="25"
                  v-slot="{ index, item }"
                  style="
                    display: flex;
                    flex-direction: column;
                    padding-left: 20px;
                  "
                >
                  <q-item
                    :class="`${
                      selectedUser?.rfc === item?.rfc
                        ? 'user-list-q-item-selected'
                        : 'user-list-q-item'
                    }`"
                    :key="index"
                    dense
                    :style="`
                      align-items: center;
                      list-style-type: none;
                      font-size: ${
                        $q.screen.width >= 2400 ? '20px;' : '12.5px;'
                      }
                      font-weight: bold;
                      cursor: pointer;
                      width: 95%;
                      user-select: none;
                      border-radius: 17.5px;
                      text-align: start;
                    `"
                  >
                    <li
                      @click="(selectedUser = item), (userIndex = index)"
                      style="width: 95%; height: 100%"
                    >
                      {{ item?.rfc }} - {{ item?.usuario }}
                    </li>
                  </q-item>
                </q-virtual-scroll>
              </q-card>
            </div>
          </q-card>
        </div>
        <div
          class="user-list-options"
          style="
            display: flex;
            width: 60%;
            height: 100%;
            align-items: center;
            justify-content: center;
          "
        >
          <q-card
            class="modify-options-card"
            style="
              width: 100%;
              height: 90%;
              padding: 10px;
              display: flex;
              flex-direction: column;
              border-radius: 20px;
            "
          >
            <div
              class="user-info-title"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 10%;
                text-align: center;
                border-radius: 0;
                border-bottom: 2px solid #00563b;
              "
            >
              <q-toolbar-title style="font-size: 32px; font-weight: 600">
                {{ selectedUser.rfc }} - {{ selectedUser.usuario }}
              </q-toolbar-title>
            </div>
            <div class="user-info" style="padding: 10px; height: 80%">
              <div
                class="row-1"
                style="
                  display: flex;
                  height: 25%;
                  flex-direction: row;
                  align-items: center;
                  margin-bottom: 25px;
                "
              >
                <div
                  class="info-usuario"
                  :style="`
                    padding-left: 10px;
                    font-size: ${$q.screen.width >= 2400 ? '20px;' : '17.5px;'}
                    font-weight: 600;
                    display: flex;
                    height: 100%;
                    width: 25%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding-right: ${$q.screen.width >= 2400 ? '0px;' : '15px;'}
                  `"
                >
                  <div style="padding-right: 7.5px; height: 50%">Usuario:</div>
                  <q-input
                    rounded
                    outlined
                    dense
                    type="text"
                    v-model="selectedUser.usuario"
                    :place-holder="selectedUser.usuario"
                    :input-style="`
                      font-weight: 600;
                      width: ${$q.screen.width >= 2400 ? '200px;' : '180px;'}
                      text-align: center;
                    `"
                  ></q-input>
                </div>
                <div
                  class="info-email"
                  :style="`
                    padding-left: 10px;
                    font-size: ${$q.screen.width >= 2400 ? '20px;' : '17.5px;'}
                    font-weight: 600;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    width: ${$q.screen.width >= 2400 ? '50%;' : '25%;'}
                    align-items: center;
                    justify-content: center;
                  `"
                >
                  <div style="padding-right: 7.5px; height: 50%">Correo:</div>
                  <q-input
                    rounded
                    outlined
                    dense
                    :hide-bottom-space="true"
                    type="text"
                    v-model="selectedUser.email"
                    :place-holder="selectedUser.email"
                    :input-style="`
                      font-weight: 600;
                      width: ${$q.screen.width >= 2400 ? '350px;' : '180px;'}
                      text-align: center
                    `"
                  ></q-input>
                </div>
                <div
                  v-if="authStore.profile?.idrol === 1"
                  class="info-rol"
                  :style="`
                    padding-left: 10px;
                    font-size: ${$q.screen.width >= 2400 ? '20px;' : '17.5px;'}
                    font-weight: 600;
                    display: flex;
                    height: 100%;
                    width: 25%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  `"
                >
                  <div style="padding-right: 7.5px; height: 50%">Permisos:</div>
                  <q-select
                    rounded
                    outlined
                    dense
                    type="text"
                    v-model="selectedUser.rol"
                    :options="roleOptions"
                    :style="`
                      font-weight: 600;
                      width: ${$q.screen.width >= 2400 ? '200px;' : '180px;'}
                      text-align: center
                    `"
                    popup-content-style="border-radius: 20px; text-align: center;"
                  ></q-select>
                </div>
                <div
                  class="info-rfc"
                  :style="`
                    padding-left: 10px;
                    font-size: ${$q.screen.width >= 2400 ? '20px;' : '17.5px;'}
                    font-weight: 600;
                    display: flex;
                    height: 100%;
                    width: ${$q.screen.width >= 2400 ? '50%;' : '25%;'}
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  `"
                >
                  <div style="padding-right: 7.5px; height: 50%">RFC:</div>
                  <q-input
                    rounded
                    outlined
                    dense
                    :disable="true"
                    type="text"
                    v-model="selectedUser.rfc"
                    :place-holder="selectedUser.rfc"
                    :input-style="`
                      font-weight: 600;
                      width: ${$q.screen.width >= 2400 ? '350px;' : '180px;'}
                      text-align: center
                    `"
                  ></q-input>
                </div>
              </div>
              <div
                v-if="authStore.profile?.idrol === 1"
                class="row-3"
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-evenly;
                  width: 100%;
                  height: 65%;
                "
              >
                <q-card
                  style="
                    height: 100%;
                    width: 45%;
                    border-radius: 20px;
                    border: 2px solid #00563b;
                    overflow-y: hidden;
                  "
                >
                  <div
                    class="access-title"
                    style="
                      height: 15%;
                      border-bottom: 2px solid #00563b;
                      border-bottom-left-radius: 0;
                      border-bottom-right-radius: 0;
                      display: flex;
                      align-items: center;
                    "
                  >
                    <q-toolbar-title
                      style="
                        font-size: 17.5px;
                        text-align: center;
                        font-weight: 600;
                      "
                    >
                      Acceso a Sitios:
                    </q-toolbar-title>
                  </div>
                  <div
                    class="access-options"
                    style="
                      height: 85%;
                      width: 100%;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: space-evenly;
                      font-size: 20px;
                    "
                  >
                    <div
                      class="dev-access-toggle"
                      style="
                        display: flex;
                        width: 100%;
                        height: 33%;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <div style="width: 50%">Desarrollo:</div>
                      <q-toggle
                        v-model="selectedUser.dev_access"
                        checked-icon="check"
                        color="$primary"
                        unchecked-icon="clear"
                      />
                    </div>
                    <div
                      class="beta-access-toggle"
                      style="
                        display: flex;
                        width: 100%;
                        height: 33%;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <div style="width: 50%">QA:</div>
                      <q-toggle
                        v-model="selectedUser.beta_access"
                        checked-icon="check"
                        color="$primary"
                        unchecked-icon="clear"
                      />
                    </div>
                    <div
                      class="prod-access-toggle"
                      style="
                        display: flex;
                        width: 100%;
                        height: 33%;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <div style="width: 50%">Producción:</div>
                      <q-toggle
                        v-model="selectedUser.prod_access"
                        checked-icon="check"
                        color="$primary"
                        unchecked-icon="clear"
                      />
                    </div>
                  </div>
                </q-card>
                <q-card
                  style="
                    height: 100%;
                    width: 45%;
                    border-radius: 20px;
                    border: 2px solid #00563b;
                    overflow-y: hidden;
                  "
                >
                  <div
                    class="access-title"
                    style="
                      height: 15%;
                      border-bottom: 2px solid #00563b;
                      border-bottom-left-radius: 0;
                      border-bottom-right-radius: 0;
                      display: flex;
                      align-items: center;
                    "
                  >
                    <q-toolbar-title
                      style="
                        font-size: 17.5px;
                        text-align: center;
                        font-weight: 600;
                      "
                    >
                      Clientes Asignados al Usuario:
                    </q-toolbar-title>
                  </div>
                  <div
                    class="access-options"
                    style="
                      height: 85%;
                      width: 100%;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: space-evenly;
                      font-size: 20px;
                    "
                  ></div>
                </q-card>
              </div>
            </div>
            <div
              class="info-footer"
              style="
                height: 10%;
                width: 100%;
                display: flex;
                align-items: center;
                border-top: 2px solid #00563b;
              "
            >
              <div
                class="delete-user-info"
                style="
                  height: 100%;
                  width: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: start;
                "
              >
                <q-btn
                  v-if="authStore.profile?.idrol === 1"
                  style="
                    height: 50%;
                    width: 125px;
                    background-color: crimson;
                    color: #f1f1f1;
                    font-weight: 600;
                    border-radius: 20px;
                    margin-left: 20px;
                  "
                >
                  Eliminar
                </q-btn>
              </div>
              <div
                class="save-user-info"
                style="
                  height: 100%;
                  width: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: end;
                "
              >
                <div style="margin-right: 10px">
                  <q-btn
                    style="
                      height: 50%;
                      width: 125px;
                      background-color: #00563b;
                      color: #f1f1f1;
                      font-weight: 600;
                      border-radius: 20px;
                      margin-right: 20px;
                    "
                  >
                    Cancelar
                  </q-btn>
                  <q-btn
                    style="
                      height: 50%;
                      width: 125px;
                      background-color: #00563b;
                      color: #f1f1f1;
                      font-weight: 600;
                      border-radius: 20px;
                    "
                  >
                    Guardar
                  </q-btn>
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
      <div
        v-if="selectedOption === 'Crear'"
        class="create-user"
        style="
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 50px;
        "
      >
        <q-card style="height: 85%; width: 80%; border-radius: 20px">
          <div
            style="
              height: 10%;
              width: 100%;
              border-bottom: 2px solid #00563b;
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
              display: flex;
              align-items: end;
              justify-content: space-evenly;
            "
          >
            <q-btn
              v-if="authStore.profile?.idrol === 1"
              :class="`${
                selectedNewUserOption === 'usuario'
                  ? 'new-user-option-selected'
                  : 'new-user-option'
              }`"
              @click="selectedNewUserOption = 'usuario'"
              style="
                width: 10%;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                background-color: #00563b;
                color: #f1f1f1;
                font-weight: bold;
              "
            >
              Usuario
            </q-btn>
            <q-btn
              :class="`${
                selectedNewUserOption === 'cliente'
                  ? 'new-user-option-selected'
                  : 'new-user-option'
              }`"
              @click="selectedNewUserOption = 'cliente'"
              style="
                width: 10%;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                background-color: #00563b;
                color: #f1f1f1;
                font-weight: bold;
              "
            >
              Cliente
            </q-btn>
          </div>
          <div
            lass="new-user-info"
            style="
              width: 100%;
              height: 80%;
              padding: 10px;
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
              border-bottom: 2px solid #00563b;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            "
          >
            <div
              class="new-user-options-title"
              style="
                width: 100%;
                height: 5%;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <q-toolbar-title
                style="text-align: center; font-weight: 600; font-size: 30px"
              >
                {{
                  `${
                    selectedNewUserOption === "usuario"
                      ? "Capture la Información del Nuevo Usuario:"
                      : selectedNewUserOption === "cliente"
                      ? "Capture la Información del Nuevo Cliente:"
                      : ""
                  }`
                }}
              </q-toolbar-title>
            </div>
            <div
              v-if="selectedNewUserOption === 'usuario'"
              class="new-user-options"
              style="
                width: 100%;
                height: 65%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 15px;
              "
            >
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  width: 50%;
                "
              >
                <div
                  class="new-user-text"
                  style="font-size: 25px; font-weight: bold"
                >
                  Usuario:
                </div>
                <q-input
                  v-model="newUser.user"
                  rounded
                  outlined
                  dense
                  style="width: 50%"
                ></q-input>
                <div
                  class="new-email-text"
                  style="font-size: 25px; font-weight: bold"
                >
                  Correo:
                </div>
                <q-input
                  v-model="newUser.email"
                  rounded
                  outlined
                  dense
                  style="width: 50%"
                  :rules="[
                    (val) =>
                      (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                      'Formato de email incorrecto',
                  ]"
                ></q-input>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  width: 50%;
                "
              >
                <div
                  class="new-rfc-text"
                  style="font-size: 25px; font-weight: bold"
                >
                  RFC:
                </div>
                <q-input
                  v-model="newUser.rfc"
                  rounded
                  outlined
                  dense
                  style="width: 50%"
                  :rules="[
                    (val) =>
                      val.length === 13 || 'Formato de RFC no es válido.',
                  ]"
                ></q-input>
                <div
                  class="new-cliente-text"
                  style="font-size: 25px; font-weight: bold"
                >
                  Cliente:
                </div>
                <q-input
                  v-model="newUser.cliente"
                  rounded
                  outlined
                  dense
                  style="width: 50%"
                ></q-input>
              </div>
            </div>
            <div
              v-if="selectedNewUserOption === 'usuario'"
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 80%;
              "
            >
              <div
                class="new-rol-text"
                style="font-size: 25px; font-weight: bold"
              >
                Rol:
              </div>
              <q-select
                rounded
                outlined
                dense
                type="text"
                v-model="newUser.idrol"
                :options="roleOptions"
                :style="`
                  font-weight: 600;
                  width: ${$q.screen.width >= 2400 ? '200px;' : '180px;'}
                  text-align: center
                `"
                popup-content-style="border-radius: 20px; text-align: center;"
              ></q-select>
            </div>
          </div>
          <div
            class="new-user-footer"
            style="
              height: 10%;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <q-btn
              :disable="newUser.rfc === '' || newUser.idrol === ''"
              @click="async () => await crearUsuario(newUser)"
              style="
                height: 50%;
                width: 25%;
                background-color: #00563b;
                color: #f1f1f1;
                font-weight: 600;
                border-radius: 20px;
              "
            >
              Crear
            </q-btn>
          </div>
        </q-card>
      </div>
      <div
        v-if="selectedOption === 'Eliminar'"
        class="delete-user"
        style="
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 50px;
        "
      >
        Hola, no hay mujeres con pene, solo hombres con chichis!
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main {
  animation: slide-from-top 500ms ease-in;
}

.user-options {
  width: 40%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #00563b;
  color: #f1f1f1;
  font-weight: 600;
  opacity: 0.75;
}

.user-options-selected {
  width: 40%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #00563b;
  color: #f1f1f1;
  font-weight: 600;
}

.modify-user {
  animation: slide-from-left 1000ms ease-in;
}

.create-user {
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

.user-option-type {
  width: 175px;
  border-radius: 25px;
  background-color: #00563b;
  color: #f1f1f1;
  font-weight: 600;
  opacity: 0.75;
}

.user-option-type-selected {
  width: 175px;
  border-radius: 25px;
  background-color: #00563b;
  color: #f1f1f1;
  font-weight: 600;
}

.user-list-q-item:hover {
  background-color: #00563b;
  color: #f1f1f1;
  opacity: 0.75;
}

.user-list-q-item-selected {
  background-color: #00563b;
  color: #f1f1f1;
  opacity: 0.75;
}

.new-user-option {
  opacity: 0.75;
}

.new-user-option-selected {
  opacity: 1;
}
</style>
