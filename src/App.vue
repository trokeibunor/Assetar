<script setup>
import { RouterView } from "vue-router";
import WhatsAppButton from "./components/WhatsAppButton.vue";
</script>

<template>
  <RouterView />
  <WhatsAppButton/>
</template>

<style lang="scss">
.material-symbols-rounded {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
