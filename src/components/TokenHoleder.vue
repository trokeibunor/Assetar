<template>
  <div class="tokenHolder">
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
    <div class="tokenContent">
      <div class="tkIntro">
        <h3>Coins and Cards</h3>
        <p>
          At asseter exchange we priorize the speed of each customers
          transaction
        </p>
      </div>
      <div class="tkGrid">
        <div class="tokencard">
          <div class="tkDiv">
            <img src="../assets/images/bitcoin_logo.png" alt="" />
            <p id="tkName">Bitcoin Cash</p>
          </div>
          <img
            src="../assets/images/exclamation_sign.svg"
            alt=""
            id="excLogo"
          />
        </div>
        <div class="tokencard">
          <div class="tkDiv">
            <img src="../assets/images/bitcoin_logo.png" alt="" />
            <p id="tkName">Bitcoin Cash</p>
          </div>
          <img
            src="../assets/images/exclamation_sign.svg"
            alt=""
            id="excLogo"
          />
        </div>
        <div class="tokencard">
          <div class="tkDiv">
            <img src="../assets/images/bitcoin_logo.png" alt="" />
            <p id="tkName">Bitcoin Cash</p>
          </div>
          <img
            src="../assets/images/exclamation_sign.svg"
            alt=""
            id="excLogo"
          />
        </div>
        <div class="tokencard">
          <div class="tkDiv">
            <img src="../assets/images/bitcoin_logo.png" alt="" />
            <p id="tkName">Bitcoin Cash</p>
          </div>
          <img
            src="../assets/images/exclamation_sign.svg"
            alt=""
            id="excLogo"
          />
        </div>
        <div class="tokencard">
          <div class="tkDiv">
            <img src="../assets/images/bitcoin_logo.png" alt="" />
            <p id="tkName">Bitcoin Cash</p>
          </div>
          <img
            src="../assets/images/exclamation_sign.svg"
            alt=""
            id="excLogo"
          />
        </div>
        <div class="tokencard">
          <div class="tkDiv">
            <img src="../assets/images/bitcoin_logo.png" alt="" />
            <p id="tkName">Bitcoin Cash</p>
          </div>
          <img
            src="../assets/images/exclamation_sign.svg"
            alt=""
            id="excLogo"
          />
        </div>
      </div>
      <button>
        <img src="../assets/images/arrow_down.svg" alt="" />
        See More
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.tokenHolder {
  background-color: #035a85;
  color: #fff;
  width: 100%;
  height: auto;
  border-radius: 80px;
  position: relative;
  padding: 4rem 0px;
  overflow: hidden;
  .pattern {
    position: absolute;
    z-index: 0;
    opacity: 0.8;
  }
  .pattern_wave {
    top: -45%;
    left: -25%;
  }
  .pattern_shape {
    bottom: -10%;
    right: -5%;
  }
  .tokenContent {
    width: 80%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tkIntro {
      width: 30%;
      margin: 0 auto;
      text-align: center;
      h3 {
        font-size: 24px;
      }
    }
    .tkGrid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 2rem 0px;
      width: 100%;
      .tokencard {
        background-color: #035a85;
        width: 80%;
        border: 1px solid #fff;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        padding: 16px;
        margin: 2rem 0px;
        position: relative;
        z-index: 1;
        cursor: pointer;
        .tkDiv {
          display: flex;
        }
      }
      .tokencard:hover {
        background-color: #fff;
        color: #035a85;
        font-weight: 700;
      }
    }
    button {
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      border-radius: 8px;
      border: none;
      outline: none;
      width: fit-content;
      height: fit-content;
      background-color: rgba(255, 255, 255, 0);
      display: flex;
      gap: 4px;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
