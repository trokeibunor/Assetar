<script setup>
import NavBar from "../components/NavBar.vue";
// import { ref, onMounted } from "vue";
</script>
<template>
  <main>
    <NavBar />
    <section class="hero"></section>
  </main>
</template>
<style lang="scss">
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px)";
// pop up styles
.alerts {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: hsla(0, 0%, 0%, 0.5);
  div {
    background-color: #fff;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    width: 40%;
    border-radius: 4px;
    @media #{$media-mobile} {
      width: 70%;
    }
  }
  .signUpModal {
    #clearIcon {
      width: 18px;
      height: 18px;
      cursor: pointer;
      align-self: flex-end;
      margin: 2rem 0px;
    }
    h3 {
      font-size: 18px;
      font-weight: bold;
      // margin: 1rem 0px;
    }
    input {
      padding: 16px 8px;
      outline: none;
      margin: 1.5rem 0px;
    }
    button#submit_btn {
      width: fit-content;
      height: fit-content;
      background-color: #035a85;
      align-self: center;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      padding: 12px 24px;
      margin: 24px 0px;
      outline: none;
      border: none;
      border-radius: 4px;
    }
  }
}
main {
  width: 100%;
  display: relative;
  overflow: hidden;
}
.nav {
  position: fixed;
  width: 180%;
  left: 10%;
  top: 2.5%;
  z-index: 100;
}
// Hero Section
@media #{$media-mobile} {
}
</style>
