<template>
  <nav>
    <div class="top-info">
      <p>Private, Personalized, Anonymous Digital Assets Trading</p>
    </div>
    <div class="nav-content">
      <div class="logo" @click.prevent="$router.push('/')">
        <img src="../assets/images//logo.png" alt="" />
        <h4>Assetar</h4>
      </div>
      <div class="nav-list">
        <p @click.prevent="$router.push('/about')">About Us</p>
        <p @click.prevent="$router.push('/#testimonial')">Testimonials</p>
        <p @click.prevent="$router.push('/#footer')">Contact us</p>
      </div>
      <div class="buttons">
        <p @click.prevent="$router.push('/#footer')">Socials</p>
        <a href="https://wa.me/message/MDQQWHAO2DYZO1" target="_blank"
          >Get Started</a
        >
      </div>
      <button
        class="hamburger hamburger--spring"
        :class="isActive ? 'is-active' : ''"
        @click.prevent="isActive = !isActive"
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
        <p
          :class="activeLink == 'home' ? 'active' : ''"
          @click.prevent="
            $router.push('/');
            isActive = false;
            activeLink = 'home';
          "
        >
          Home
        </p>
        <p
          :class="activeLink == 'about' ? 'active' : ''"
          @click.prevent="
            $router.push('/about');
            isActive = false;
            activeLink = 'about';
          "
        >
          About Us
        </p>
        <p
          :class="activeLink == 'testimonial' ? 'active' : ''"
          @click.prevent="
            $router.push('/#testimonial');
            isActive = false;
            activeLink = 'testimonial';
          "
        >
          Testimonials
        </p>
        <p
          :class="activeLink == 'social' ? 'active' : ''"
          @click.prevent="
            $router.push('/#footer');
            isActive = false;
            activeLink = 'social';
          "
        >
          Socials
        </p>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isActive = ref(false);
const activeLink = ref("");
</script>

<style lang="scss" scoped>
@use "/src/assets/styles/partials/variables" as v;
nav {
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: auto;
  background-color: white;
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
      a {
        border-radius: 0.5rem;
        background: #0471a6;
        outline: none;
        color: #fff;
        padding: 12px 16px;
        border: none;
        cursor: pointer;
        text-decoration: none;
      }
    }
    .hamburger {
      display: none;
    }
  }
  .mobile-dropdown {
    display: none;
  }
  @media #{v.$media-mobile} {
    .nav-content {
      .nav-list,
      .buttons {
        display: none;
      }
    }
    .hamburger {
      display: block !important;
      background-color: white;
      transform: scale(0.8);
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
          &:active {
            border-bottom: 2px solid #0471a6;
          }
        }
      }
    }
  }
}
</style>
