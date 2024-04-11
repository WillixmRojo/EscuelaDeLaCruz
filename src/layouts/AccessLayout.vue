<template>
  <q-layout
    class="access login-block"
    view="hHh lpR fFf"
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      height: 950px;
      background-color: #b16655;
    "
  >
    <q-page-container class="container" style="max-height: 100%">
      <q-page padding class="login-sec" style="min-height: 100%">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
svg {
  filter: drop-shadow(1px 3px 1px rgb(0 0 0 / 0.4));
}

@media screen and (max-width: 912px) {
  .login-block {
    background: $primary;
  }
}

.login-block {
  width: 100%;
}

.login-sec {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cd-logo-container {
  width: 250px;
  height: 250px;
}

.login-sec .subtitle,
.login-sec .title {
  font-family: "Circular Std", sans-serif;
}

.login-sec .subtitle {
  color: #f1f1f1;
  font-size: 25px;
}

.login-sec .title {
  color: #b16655;
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 15px;
}

// Login sec

@media screen and (max-width: 912px) {
  .btn.btn-signin {
    margin-top: auto !important;
  }
}

.form-group {
  margin-bottom: 15px;
  min-width: 350px;
  max-width: 725px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  font-weight: 700;
  height: 36px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  margin-bottom: 10px;
  color: $cpl-text-color;
}

.btn.btn.btn-signin {
  width: 75%;
  background-color: #b16655;
  padding: 0px;
  font-weight: 700;
  font-size: 20px;
  height: 50px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border: none;
  transition: all 0.218s;
  -o-transition: all 0.218s;
  -moz-transition: all 0.218s;
  -webkit-transition: all 0.218s;
}

.btn.btn-signin:hover,
.btn.btn-signin:active,
.btn.btn-signin:focus {
  background-color: #b16655;
  color: #f1f1f1;
}

.text-cpl-text {
  color: $cpl-text-color;
}
</style>
