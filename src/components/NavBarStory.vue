<template>
  <nav>
    <img id="logo" src="../assets/images/logo.png" alt="logoImage" />
    <div class="navMenu">
      <a @click.prevent="routeTo('/')"
        >Home</a
      >
      <a
        @click.prevent="routeTo('/#token')"
      
        >Token</a
      >
      <a
        @click.prevent="routeTo('about')"
       
        >Our Story</a
      >
      <a
        @click.prevent="routeTo('/#contact')"
        id="conBtn"
        
        >Contact Us</a
      >
    </div>
    <!-- Mobile toggler -->
    <div class="navToggler">
      <button
        v-show="isNavOpen"
        @click.prevent="isNavOpen = false"
        
      >
        <!-- <span class="material-symbols-outlined"> menu </span> -->
        <img src="../assets/images/menu_hamburger_story.svg" alt="" srcset="" />
      </button>
      <button
        v-show="!isNavOpen"
        @click.prevent="isNavOpen = true"
        
      >
        <!-- <span class="material-symbols-outlined"> close </span> -->
        <img src="../assets/images/cancel_icon.svg" alt="" srcset="" />
      </button>
    </div>
  </nav>
  <aside v-if="!isNavOpen">
    <!-- logo -->
    <!-- sideMenu -->
    <div class="sidemenu" v-if="!isNavOpen">
      <a @click.prevent="routeTo('/')" 
        >Home</a
      >
      <a
        @click.prevent="routeTo('/#token')"
        
        >Token</a
      >
      <a
        @click.prevent="routeTo('/#contact')"
        id="conBtn"
        
        >Contact Us</a
      >
      <a
        class="active"
        @click.prevent="routeTo('about')"
        >Our Story</a
      >
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
// toggler component
const isNavOpen = ref(true);
function routeTo(x) {
  router.push(x);
}
</script>

<style lang="scss" scoped>
@use "/src/assets/styles/partials/variables" as v;
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
      border-radius: 4px;
    }
  }
  .navToggler {
    display: none;
  }
}
aside {
  display: none;
}
// Mobile responsiveness
@media #{v.$media-tablet} {
  nav {
    width: 90%;
  }
}
@media #{v.$media-mobile} {
  nav {
    position: sticky;
    z-index: 10;
    top: 0;
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
  aside {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2px);
    color: #fff;
    align-items: center;
    .sidemenu {
      width: fit-content;
      background-color: #fff;
      border-radius: 8px 0px 0px 8px;
      height: fit-content;
      color: #000;
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      padding: 1rem 0px;
      a {
        margin: 4px 4px;
        padding: 16px;
        font-size: 16px;
        font-weight: 600;
      }
      a.active {
        border-left: 2px solid #035a85;
        font-weight: 600;
        background-color: #035a852a;
      }
    }
  }
}
</style>
