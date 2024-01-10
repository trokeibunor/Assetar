<template>
  <section>
    <div class="content">
      <div class="intro">
        <h2>How Assetar Works</h2>
        <p class="subheader">
          We make it simple to buy cryptocurrency with fiat money and to <br />
          exchange cryptocurrency for fiat money.
        </p>
      </div>
      <div class="service-grid">
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Minimal transaction costs</h3>
            <p>
              There are numerous scammers out there, as we are aware. We're here
              to make sure you're protected. This is why we follow a thorough
              KYC procedure to confirm each user's identification so you may
              fund your account with the required funds before you start trading
              cryptocurrency!
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Minimal transaction costs</h3>
            <p>
              There are numerous scammers out there, as we are aware. We're here
              to make sure you're protected. This is why we follow a thorough
              KYC procedure to confirm each user's identification so you may
              fund your account with the required funds before you start trading
              cryptocurrency!
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Minimal transaction costs</h3>
            <p>
              You may buy, use, trade, and manage cryptocurrencies fast and
              conveniently using our online services. We make it simple to buy
              cryptocurrency with fiat money and to exchange cryptocurrency for
              fiat money. Additionally, we make it simple for you to build your
              own portfolio and oversee your assets.
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Minimal transaction costs</h3>
            <p>
              There are numerous scammers out there, as we are aware. We're here
              to make sure you're protected. This is why we follow a thorough
              KYC procedure to confirm each user's identification so you may
              fund your account with the required funds before you start trading
              cryptocurrency!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  background: var(--Grey-bglast, #f9fbfc);
  padding: 2rem 0px;
  .content {
    width: 90%;
    margin: 0 auto;
    .intro {
      text-align: center;

      h2 {
        font-size: 1.5rem;
        font-family: "Clash Display";
      }
      .subheader {
        font-family: Satoshi;
        color: var(--Grey-3, #7d7e7f);
        font-weight: 600;
      }
    }
    .service-grid {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 1.5rem;
      margin-top: 2rem;
      .grid-item {
        width: 100%;
        background-color: #fff;
        padding: 1rem 0px;
        border-radius: 0.5rem;
        #content {
          margin: 0 auto;
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 0.5rem;
          img {
            width: 1.5rem;
            height: 1.5rem;
            padding: 8px;
            border-radius: 50%;
            background-color: #f9fbfc;
          }
          h3 {
            font-size: 1.25rem;
            font-family: "Satoshi";
          }
          p {
            font-family: "Satoshi";
            color: var(--Grey-3, #7d7e7f);
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
