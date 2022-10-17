<template>
  <nav>
    <img id="logo" src="../assets/images/logo.png" alt="logoImage" />
    <div class="navMenu">
      <a @click="routeTo('/')">Home</a>
      <a @click="routeTo('/#token')">Token</a>
      <a @click="routeTo('about')">Our Story</a>
      <a @click="routeTo('/#contact')" id="conBtn">Contact Us</a>
    </div>
    <!-- Mobile toggler -->
    <div class="navToggler">
      <button v-show="isNavOpen" @click="isNavOpen = false">
        <!-- <span class="material-symbols-outlined"> menu </span> -->
        <img src="../assets/images/menu_hamburger.svg" alt="" srcset="" />
      </button>
      <button v-show="!isNavOpen" @click="isNavOpen = true">
        <span class="material-symbols-outlined"> close </span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
function routeTo(x) {
  router.push(x);
}
// toggler component
const isNavOpen = ref(true);
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
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
      padding: 8px 18px;
      border-radius: 8px;
    }
  }
  .navToggler {
    display: none;
  }
}
// Mobile responsiveness
@media #{$media-tablet} {
  nav {
    width: 90%;
  }
}
@media #{$media-mobile} {
  nav {
    .navMenu {
      display: none;
    }
    .navToggler {
      display: block;
      button {
        background-color: #ffffff00;
        border: none;
      }
    }
  }
}
</style>
