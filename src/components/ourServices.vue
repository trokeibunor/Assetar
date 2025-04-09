<template>
  <section>
    <div class="content">
      <div class="intro">
        <h2>How Assetar Works</h2>
        <p class="subheader">
          At Assetar, we simplify the process of buying and exchanging <br />
          cryptocurrency with fiat money. Our platform is designed to ensure a
          <br />
          seamless and secure experience for our users. Here's how we make it
          happen:
        </p>
      </div>
      <div class="service-grid">
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Minimal transaction costs</h3>
            <p>
              We keep our transaction costs minimal by optimizing our operations
              and leveraging efficient blockchain networks. This allows us to
              provide competitive rates for cryptocurrency trading while
              ensuring that you get the maximum value for your transactions. Our
              transparent fee structure means no hidden charges.
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Fast and Convenient Transactions</h3>
            <p>
              With Assetar, you can buy, use, trade, and manage cryptocurrencies
              quickly and conveniently using our online services. We make it
              easy to buy cryptocurrency with fiat money and to exchange
              cryptocurrency for fiat money. Additionally, our platform allows
              you to build and manage your own portfolio effortlessly.
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Secure and Reliable</h3>
            <p>
              Our commitment to security means that you can trade with
              confidence. We follow industry best practices to safeguard your
              assets and personal information. Whether you're a seasoned trader
              or new to the world of cryptocurrency, Assetar provides a reliable
              and user-friendly platform for all your trading needs.
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Messaging Applications Integration</h3>
            <p>
              To enhance communication and support, we utilize popular messaging
              applications. This allows us to provide timely assistance and
              updates to our users, ensuring that you have the support you need
              whenever you need it.
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
  @media #{$media-mobile} {
    .content {
      .intro {
        text-align: left;
        br {
          display: none;
        }
      }
      .service-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
    }
  }
}
</style>
