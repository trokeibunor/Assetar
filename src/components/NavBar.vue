<template>
  <nav>
    <div class="top-info">
      <p>Trade your coins and tokens crazy speed</p>
    </div>
    <div class="nav-content">
      <div class="logo" @click="$router.push('/')">
        <img src="../assets/images//logo.png" alt="" />
        <h4>Asseter</h4>
      </div>
      <div class="nav-list">
        <p @click="$router.push('/about')">About Us</p>
        <p @click="$router.push('/#testimonial')">Testimonials</p>
        <p>Contact us</p>
      </div>
      <div class="buttons">
        <p>Socials</p>
        <button>Get Started</button>
      </div>
      <button
        class="hamburger hamburger--spring"
        :class="isActive ? 'is-active' : ''"
        @click="isActive = !isActive"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <!-- mobile dropdown -->
    <div class="mobile-dropdown" v-if="isActive == true">
      <div class="mb-nav-list">
        <p class="active" @click="$router.push('/about')">Home</p>
        <p @click="$router.push('/about')">About Us</p>
        <p @click="$router.push('/#testimonial')">Testimonials</p>
        <p @click="$router.push('/about')">Socials</p>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isActive = ref(false);
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  width: 100%;
  height: auto;
  .top-info {
    background-image: url(../assets/images/top-info.png);
    width: 100%;
    height: fit-content;
    padding: 0.5rem 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .nav-content {
    width: 90%;
    margin: 0 auto;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    // position: relative;
    // z-index: 10;
    .logo,
    .nav-list,
    .buttons {
      display: flex;
      align-items: center;
    }
    .logo {
      gap: 0px;
      cursor: pointer;
      img {
        width: 48px;
        height: 48px;
      }
      h4 {
        font-family: "Clash Display";
      }
    }
    .nav-list,
    .buttons {
      gap: 12px;
      p {
        cursor: pointer;
        font-weight: 600;
      }
      button {
        border-radius: 0.5rem;
        background: #0471a6;
        outline: none;
        color: #fff;
        padding: 12px 16px;
        border: none;
        cursor: pointer;
      }
    }
    .hamburger {
      display: none;
    }
  }
  .mobile-dropdown {
    display: none;
  }
  @media #{$media-mobile} {
    .nav-content {
      .nav-list,
      .buttons {
        display: none;
      }
    }
    .hamburger {
      display: block !important;
      background-color: white;
    }
    .mobile-dropdown {
      background: white;
      width: 100%;
      display: block;
      position: absolute;
      z-index: 10;
      .mb-nav-list {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        p {
          font-size: 16px;
          font-weight: 600;
          border-bottom: 2px solid #ffffff;
          padding-bottom: 4px;
          &.active {
            border-bottom: 2px solid #0471a6;
          }
        }
      }
    }
  }
}
</style>
