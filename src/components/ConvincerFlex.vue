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
      <img src="../assets/images/card_images.png" alt="" />
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
      <img src="../assets/images/cards_image_two.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.convincerComp {
  width: 100%;
  background-color: #f6fafc;
  padding: 2rem 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .convincerCard {
    width: 80%;
    margin: 1.5rem auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 16px;
    gap: 1.5rem;
    .convincerText {
      width: 50%;
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
    img {
      width: 50%;
    }
  }
  #second {
    flex-direction: row-reverse;
  }
}
@media #{$media-mobile} {
  .convincerComp {
    .convincerCard,
    #second {
      .convincerText {
        width: 100%;
      }
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
