<template>
  <div class="convincerComp">
    <div class="convincerCard">
      <div class="convincerText">
        <h3>THE BEST WAY TO TRADE</h3>
        <h2>The Best Cryptocurrency Vendor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam interdum
          duis nibh venenatis faucibus ullamcorper cras sagittis. Pellentac
          habitasse ut. Mattis amet imperdiet tristique tellus consectetur in.
          Nisl eu pellentesque sit consequat mi, non euismod habitasse eleifend.
        </p>
      </div>
      <img src="../assets/images/topCardImg.png" alt="" />
    </div>
    <div class="convincerCard" id="second">
      <div class="convincerText">
        <h3>THE BEST WAY TO TRADE</h3>
        <h2>The Best Cryptocurrency Vendor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam interdum
          duis nibh venenatis faucibus ullamcorper cras sagittis. Pellentac
          habitasse ut. Mattis amet imperdiet tristique tellus consectetur in.
          Nisl eu pellentesque sit consequat mi, non euismod habitasse eleifend.
        </p>
      </div>
      <img src="../assets/images/downCardImg.png" alt="" />
    </div>
    <a @click="routeTo('/#contact')">Contact Us</a>
  </div>
</template>

<script setup>
import router from "../router";
function routeTo(x) {
  router.push(x);
}
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.convincerComp {
  width: 100%;
  background-color: #f6fafc;
  padding: 3rem 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .convincerCard {
    width: 70%;
    margin: 4rem auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 20px;
    background-color: #fff;
    padding: 16px;
    gap: 32px;
    .convincerText {
      h3 {
        color: #035a85;
      }
      h2 {
        margin: 1rem 0px;
      }
      p {
        line-height: 140%;
      }
    }
  }
  #second {
    flex-direction: row-reverse;
  }
  a {
    background-color: #035a85;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    border-radius: 8px;
    border: 1px solid #fff;
    outline: none;
    width: fit-content;
    height: fit-content;
    padding: 16px 40px;
    align-self: center;
    cursor: pointer;
  }
}
@media #{$media-mobile} {
  .convincerComp {
    .convincerCard,
    #second {
      margin: 1.5rem auto;
      width: 80%;
      flex-direction: column-reverse;
      text-align: center;
      img {
        width: 40%;
      }
    }
  }
}
</style>
