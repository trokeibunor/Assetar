<template>
  <section>
    <div class="content">
      <h2 class="intro">Our Values</h2>
      <p class="subheader">
        We are the best option for these reasons <br />
        count on us to deliver when you need speedy, secure transactions
      </p>
      <div class="offer-grid">
        <div class="grid-item">
          <div class="image-container">
            <img src="../assets/images/svg/security.svg" alt="" />
          </div>
          <div class="g-con">
            <h3>Decentralization</h3>
            <p>
              All transactions are routed through Decentralized channels to ensure complete privacy and protection
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div class="image-container">
            <img src="../assets/images/svg/personalized.svg" alt="" />
          </div>
          <div class="g-con">
            <h3>Personalized</h3>
            <p>
              We attend to each customer specially, catering to and Educating
              you on the best practice, depending on your trading goals
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div class="image-container">
            <img src="../assets/images/svg/prices.svg" alt="" />
          </div>
          <div class="g-con">
            <h3>Non - Custodial</h3>
            <p>
              We do not hold your funds, you are in control of your assets at
              all times, we only facilitate the transaction
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div class="image-container">
            <img src="../assets/images/svg/safe.svg" alt="" />
          </div>
          <div class="g-con">
            <h3>Confidential</h3>
            <p>
              Every detail shared during the course of trading with is kept
              strictly between both parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
@use "/src/assets/styles/partials/variables" as v;
section {
  width: 100%;
  padding: 2rem 0rem;
  .content {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2,
    p {
      padding: 0;
      margin: 0;
    }
    h2 {
      font-family: "Clash Display";
    }
    p {
      font-family: "Satoshi";
      color: var(--Grey-3, #7d7e7f);
      font-weight: 600;
    }
    .offer-grid {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
      .grid-item {
        width: 22.5%;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;

        border: 1px solid var(--Grey-bg, #dfe7f2);
        .image-container {
          background: #fdf8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem 1rem 0px 0px;
          &:nth-of-type(2) {
            background: #8fbbed;
          }
          img {
            width: 100%;
            height: 10rem;

            object-fit: contain;
          }
        }
        .g-con {
          padding: 1rem 0px;
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          h3 {
            font-size: 1.25rem;
            font-weight: 900;
            // font-family: "Clash Display";
          }
        }
      }
    }
  }
  @media #{v.$media-mobile} {
    .content {
      .offer-grid {
        position: relative;
        overflow-x: scroll;
        .grid-item {
          min-width: 90%;
        }
      }
    }
  }
}
</style>
