<template>
  <nav>
    <div class="top-info">
      <p>Trade your coins and tokens crazy speed</p>
    </div>
    <div class="nav-content">
      <div class="logo">
        <img src="../assets/images//logo.png" alt="" />
        <p>Asseter</p>
      </div>
      <div class="nav-list">
        <p>About Us</p>
        <p>Testimonials</p>
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
    .logo,
    .nav-list,
    .buttons {
      display: flex;
      align-items: center;
    }
    .logo {
      gap: 4px;
      img {
        width: 48px;
        height: 48px;
      }
    }
    .nav-list,
    .buttons {
      gap: 8px;
      p {
        cursor: pointer;
      }
    }
  }
}
</style>
