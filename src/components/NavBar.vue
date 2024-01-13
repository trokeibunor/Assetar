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
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
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
  }
}
</style>
