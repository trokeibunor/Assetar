<template>
  <div class="testimonialSect">
    <div class="testimonialCon">
      <div class="tsIntro">
        <h3>Hear from our clients</h3>
        <p>
          We leave room for criticism and applause of our service, after every
          transaction we provide users, with the link to rate our service,
          independently . Here is what they had to say
        </p>
      </div>
      <div class="tsGrid">
        <div class="tsCard">
          <img src="../assets/images/tsImgOne.png" alt="" />
          <div class="tsCarCon">
            <p id="TCCtitle">Treasure</p>
            <p>
              “ I really enjoyed trading with this exchange, it was very fast
              and reliable “
            </p>
          </div>
        </div>
        <div class="tsCard">
          <img src="../assets/images/tsImgTwo.png" alt="" />
          <div class="tsCarCon">
            <p id="TCCtitle">Treasure</p>
            <p>
              “ I really enjoyed trading with this exchange, it was very fast
              and reliable “
            </p>
          </div>
        </div>
        <div class="tsCard">
          <img src="../assets/images/tsImgThree.png" alt="" />
          <div class="tsCarCon">
            <p id="TCCtitle">Treasure</p>
            <p>
              “ I really enjoyed trading with this exchange, it was very fast
              and reliable “
            </p>
          </div>
        </div>
        <div class="tsCard">
          <img src="../assets/images/tsImgFour.png" alt="" />
          <div class="tsCarCon">
            <p id="TCCtitle">Treasure</p>
            <p>
              “ I really enjoyed trading with this exchange, it was very fast
              and reliable “
            </p>
          </div>
        </div>
        <div class="tsCard">
          <img src="../assets/images/tsImgFive.png" alt="" />
          <div class="tsCarCon">
            <p id="TCCtitle">Treasure</p>
            <p>
              “ I really enjoyed trading with this exchange, it was very fast
              and reliable “
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.testimonialSect {
  width: 100%;
  padding: 2rem 0px;
  .testimonialCon {
    width: 80%;
    margin: 0 auto;
    .tsIntro {
      width: 40%;
      margin: 0px auto;
      text-align: center;
      h3 {
        font-size: 24px;
        font-weight: 600;
      }
    }
    .tsGrid {
      padding: 2rem 0px;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(6, 1fr);
      column-gap: 8px;
      row-gap: 12px;
      width: 100%;
      height: 90vh;
      .tsCard {
        background-color: #fff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 64px;
          height: 64px;
        }
        gap: 8px;
        .tsCarCon {
          #TCCtitle {
            color: #065c86;
          }
        }
      }
      // Iterations
      .tsCard:nth-child(1) {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 3;
        padding: 32px 24px;
      }
      .tsCard:nth-child(2) {
        grid-column-start: 5;
        grid-column-end: 8;
        grid-row-start: 2;
        padding: 12px 16px;
      }
      .tsCard:nth-child(3) {
        grid-column-start: 2;
        grid-column-end: 6;
        grid-row-start: 3;
        padding: 12px 16px;
      }
      .tsCard:nth-child(4) {
        grid-column-start: 6;
        grid-column-end: 8;
        grid-row-start: 3;
        grid-row-end: 5;
        padding: 32px 24px;
      }
      .tsCard:nth-child(5) {
        grid-column-start: 4;
        grid-column-end: 6;
        grid-row-start: 4;
        grid-row-end: 7;
        padding: 32px 24px;
      }
    }
  }
}
</style>
