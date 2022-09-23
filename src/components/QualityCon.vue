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
.qualities {
  background-color: #035a85;
  color: #fff;
  width: 100%;
  height: auto;
  border-radius: 80px;
  position: relative;
  margin-top: 5rem;
  #title {
    font-weight: bold;
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
    .qualityGrid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-row-gap: 62px;
      justify-items: center;
      margin: 2rem 0px;
      .qualityBox {
        width: 60%;
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
</style>
