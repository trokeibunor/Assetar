<template>
  <section class="qualities">
    <img
      class="pattern pattern_wave"
      src="../assets/images/patternWaves.svg"
      alt=""
      srcset=""
    />
    <img
      class="pattern pattern_shape"
      src="../assets/images/patternShapes.svg"
      alt=""
    />
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
  background-color: #035a85;
  color: #fff;
  width: 100%;
  height: auto;
  border-radius: 80px;
  position: relative;
  margin-top: 10rem;
  overflow: hidden;
  .pattern {
    position: absolute;
    z-index: 0;
    opacity: 0.8;
  }
  .pattern_wave {
    top: 0px;
    left: 0px;
  }
  .pattern_shape {
    bottom: 0px;
    right: -5%;
  }
  #title {
    font-weight: bold;
    font-size: 14px;
  }
  #anTalk {
    width: 40%;
    margin: 1rem auto;
  }
  .qualitiesCon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 80%;
    padding: 5rem 0px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    .qualityGrid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-row-gap: 62px;
      justify-items: center;
      margin: 2rem 0px;
      .qualityBox {
        width: 65%;
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
