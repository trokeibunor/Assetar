<template>
  <div class="subToNews">
    <p id="title">Subscribe to our Newsletter</p>
    <form action="#">
      <input type="email" name="subemail" id="" placeholder="Email Address" />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.subToNews {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 3rem auto;
  border-radius: 40px;
  padding: 3.5rem 0px;
  #title {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
  }
  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    input {
      padding: 16px 24px;
      width: 60%;
      border-radius: 4px;
      outline: none;
    }
    button {
      background-color: #065c86;
      font-size: 18px;
      margin: 0 8px;
      width: fit-content;
      height: fit-content;
      padding: 10px 24px;
      border-radius: 8px;
      border: none;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
