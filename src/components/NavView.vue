<template>
  <!-- Large screen Navigation -->
  <nav class="nav">
    <div class="logo">
      <a>
        <img src="../assets/images/logo.svg" alt="" />
      </a>
    </div>
    <div class="nav-menu">
      <a>Home</a>
      <a>Tokens</a>
      <a>Our Story</a>
      <a>Contact Us</a>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  position: relative;
  top: 0;
  display: flex;
  width: 95%;
  margin: auto;
  padding-top: 16px;
  justify-content: space-between;
  align-items: center;
  .logo {
    img {
      max-width: 48px;
      max-height: 48px;
    }
  }
  .nav-menu {
    display: flex;
    align-items: center;
    gap: 16px;
    color: #fff;
    a {
      font-weight: 600;
    }
    a:last-child {
      background-color: white;
      padding: 8px 16px;
      border-radius: 24px;
      color: #0471a6;
    }
  }
}
</style>
