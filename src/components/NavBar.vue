<template>
  <nav>
    <img id="logo" src="../assets/images/logo.png" alt="logoImage" />
    <div class="navMenu">
      <a @click="routeTo('/')">Home</a>
      <a @click="routeTo('/#token')">Token</a>
      <a @click="routeTo('about')">Our Story</a>
      <a @click="routeTo('/#contact')" id="conBtn">Contact Us</a>
    </div>
  </nav>
</template>

<script setup>
import router from "../router";
function routeTo(x) {
  router.push(x);
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0px;
  position: relative;
  z-index: 10;
  #logo {
    width: 48px;
  }
  .navMenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 18px;
    a {
      cursor: pointer;
      text-decoration: none;
      font-size: 14px;
      color: inherit;
    }
    a:hover {
      font-weight: 600;
    }
    a#conBtn {
      background-color: #035a85;
      color: #fff;
      width: fit-content;
      height: fit-content;
      padding: 10px 24px;
      border-radius: 10px;
    }
  }
}
</style>
