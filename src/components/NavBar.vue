<template>
  <nav>
    <img src="../assets/images/logo.png" alt="logoImage" />
    <div class="navMenu">
      <a href="#">Home</a>
      <a href="#">Token</a>
      <a href="#">Our Story</a>
      <a href="#" id="conBtn">Contact Us</a>
    </div>
  </nav>
</template>

<script setup></script>

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
  //   top: 0px;
  //   left: 0px;
  z-index: 10;
  .navMenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    a {
      cursor: pointer;
      //   margin: 0px 16px;
      text-decoration: none;
      font-size: 18px;
      color: #252525;
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
