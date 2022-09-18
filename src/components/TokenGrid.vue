<template>
  <div class="tokenGrid">
    <div class="coin_card">
      <img id="id" src="../assets/images/iden-icon.svg" alt="" srcset="" />
      <img id="token" src="../assets/images/Bitcoin.svg" alt="" />
      <p>Bitcoin</p>
    </div>
    <div class="coin_card">
      <img id="id" src="../assets/images/iden-icon.svg" alt="" srcset="" />
      <img id="token" src="../assets/images/Bitcoin.svg" alt="" />
      <p>Bitcoin</p>
    </div>
    <div class="coin_card">
      <img id="id" src="../assets/images/iden-icon.svg" alt="" srcset="" />
      <img id="token" src="../assets/images/Bitcoin.svg" alt="" />
      <p>Bitcoin</p>
    </div>
    <div class="coin_card">
      <img id="id" src="../assets/images/iden-icon.svg" alt="" srcset="" />
      <img id="token" src="../assets/images/Bitcoin.svg" alt="" />
      <p>Bitcoin</p>
    </div>
    <div class="coin_card">
      <img id="id" src="../assets/images/iden-icon.svg" alt="" srcset="" />
      <img id="token" src="../assets/images/Bitcoin.svg" alt="" />
      <p>Bitcoin</p>
    </div>
    <div class="coin_card">
      <img id="id" src="../assets/images/iden-icon.svg" alt="" srcset="" />
      <img id="token" src="../assets/images/Bitcoin.svg" alt="" />
      <p>Bitcoin</p>
    </div>
  </div>
  <button>
    <img src="../assets/images/see_icon.svg" alt="" />
    See more
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.tokenGrid {
  width: 100%;
  margin: 2rem 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 120px;
  place-content: center;
  .coin_card {
    background: linear-gradient(119.06deg, #76b9da 39.35%, #2e7093 111.86%);
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    #id {
      width: 24px;
      align-self: flex-end;
    }
    #token {
      width: 96px;
      align-self: center;
    }
    p {
      align-self: center;
      margin: 1rem 0px;
      font-size: 32px;
      font-weight: 600;
      font-family: "Source Code Pro", monospace;
    }
  }
}
button {
  background: none;
  outline: none;
  border: none;
  width: fit-content;
  display: flex;
  font-size: 18px;
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
  gap: 4px;
  align-self: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
