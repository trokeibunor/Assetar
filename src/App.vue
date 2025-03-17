<script setup>
import { RouterView } from "vue-router";
import WhatsAppButton from "./components/WhatsAppButton.vue";
</script>

<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
  <WhatsAppButton />
</template>

<style lang="scss">
.material-symbols-rounded {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
