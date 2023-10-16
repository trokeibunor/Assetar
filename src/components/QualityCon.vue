<template>
  <section class="qualities">
    <div class="qualitiesCon">
      <p id="title">THE BEST WAY TO TRADE</p>
      <h2>The Best Cryptocurrency Vendor</h2>
      <p id="anTalk">
        At assetar we prioritize the speed of every customers transaction
      </p>
      <div class="qualityGrid">
        <div class="qualityBox">
          <img src="../assets/images/qualIcon.svg" alt="" />
          <p id="titleSm">Satisfaction</p>
          <p>
            At asseter exchange we prioritize the speed of every customers
            transaction
          </p>
        </div>
        <div class="qualityBox">
          <img src="../assets/images/qualIcon.svg" alt="" />
          <p id="titleSm">Satisfaction</p>
          <p>
            At asseter exchange we prioritize the speed of every customers
            transaction
          </p>
        </div>
        <div class="qualityBox">
          <img src="../assets/images/qualIcon.svg" alt="" />
          <p id="titleSm">Satisfaction</p>
          <p>
            At asseter exchange we prioritize the speed of every customers
            transaction
          </p>
        </div>
        <div class="qualityBox">
          <img src="../assets/images/qualIcon.svg" alt="" />
          <p id="titleSm">Satisfaction</p>
          <p>
            At asseter exchange we prioritize the speed of every customers
            transaction
          </p>
        </div>
        <div class="qualityBox">
          <img src="../assets/images/qualIcon.svg" alt="" />
          <p id="titleSm">Satisfaction</p>
          <p>
            At asseter exchange we prioritize the speed of every customers
            transaction
          </p>
        </div>
        <div class="qualityBox">
          <img src="../assets/images/qualIcon.svg" alt="" />
          <p id="titleSm">Satisfaction</p>
          <p>
            At asseter exchange we prioritize the speed of every customers
            transaction
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.qualities {
  color: #fff;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  #title {
    font-weight: bold;
    font-size: 14px;
    color: #035a85;
  }
  h2 {
    color: #252525;
  }
  #anTalk {
    width: 40%;
    margin: 1rem auto;
    color: #252525;
  }
  .qualitiesCon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 5rem 0px;
    margin: 0 auto;
    z-index: 1;
    .qualityGrid {
      display: flex;
      flex-direction: row;
      justify-items: center;
      position: relative;
      overflow-x: scroll;
      margin: 2rem 0px;
      .qualityBox {
        width: 20rem;
        padding: 24px;
        border: 1px solid #fff;
        border-radius: 4px;
        background-color: #035a85;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        #titleSm {
          font-weight: 600;
        }
      }
    }
  }
}
@media #{$media-mobile} {
  .qualities {
    border-radius: 20px;
    .qualitiesCon {
      width: 90%;
      h2 {
        font-size: 24px;
      }
      p#anTalk {
        width: 100%;
      }
      .qualityGrid {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        .qualityBox {
          width: 85%;
          padding: 2rem 1rem;
        }
      }
    }
  }
}
</style>
