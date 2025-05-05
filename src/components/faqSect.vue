<template>
  <section class="faqSect">
    <div class="content">
      <div class="left">
        <p class="int">FAQs</p>
        <h3 class="head">
          We are here to answer <br />
          to all your concerns
        </h3>
        <p class="sub-header">
          Here is a list of frequently asked questions (FAQs) concerning
          Assetar, including information you should be aware of regarding the
          crypto-economy. Please don't hesitate to enquire further through any
          of Assetar's numerous outreach methods.
        </p>
      </div>
      <div class="right">
        <div class="faq-list">
          <div class="faq">
            <div class="cont-row">
              <p>How does Assetar Exchange work?</p>
              <span>&#43;</span>
            </div>
            <p class="faq-content">
              Buying and selling cryptocurrencies on Assetar enables you to
              convert your cryptocurrencies into Naira. Digital assets' prices,
              including those of coins and tokens, are set based on our hourly
              trading activities. It is significant to note that based on our
              buy and sell activities, our cryptocurrency prices differ from
              those offered by other cryptocurrency exchanges in the market
              (order).
            </p>
          </div>
          <div class="faq">
            <div class="cont-row">
              <p>What is a crypto exchange vs wallet?</p>
              <span>&#43;</span>
            </div>
            <p class="faq-content">
              A wallet is used for holding your own coins, whereas an exchange
              like Assetar allows you to buy and sell coins at market value.
              This is the key distinction between a cryptocurrency exchange and
              a wallet.
            </p>
          </div>
          <div class="faq">
            <div class="cont-row">
              <p>What is the cheapest cryptocurrency?</p>
              <span>&#43;</span>
            </div>
            <p class="faq-content">
              Since the debut of the first cryptocurrency, the market for
              cryptocurrencies has expanded dramatically. Here are the top 10
              most affordable cryptocurrencies with promising futures that our
              analysts have been monitoring: USD Coin, XRP, Cardano, Dogecoin,
              Shiba Inu, Tether, Dai, Algorand, Stellar, and Decentraland.
            </p>
          </div>
          <div class="faq">
            <div class="cont-row">
              <p>How long does a transaction with Assetar Exchange take?</p>
              <span>&#43;</span>
            </div>
            <p class="faq-content">
              All our transactions are usually completed under 5 minutes except
              in rare cases of bank failures or blockchain related delays
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "/src/assets/styles/partials/variables" as v;
.faqSect {
  width: 100%;
  padding: 2rem 0px;
  .content {
    width: 90%;
    margin: 0 auto;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 3rem;
    .left {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 50%;
      .int {
        font-family: "Clash Display";
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
      }
      .head {
        color: var(--Grey-Black1, #151b1d);
        font-family: "Clash Display";
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
      }
      .sub-header {
        color: var(--Grey-Black8, #8a8b8a);
        font-family: "Satoshi";
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        span {
          text-decoration: underline;
        }
      }
    }
    .right {
      width: 50%;
      .faq-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
        .faq {
          width: 100%;
          padding: 1rem;
          border-radius: 0.5rem;
          background: var(--Light-bg-new, #f8f9f9);
          .cont-row {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
              color: var(--Grey-Black1, #151b1d);
              font-family: Satoshi;
              font-size: 1.25rem;
              font-weight: 700;
              padding: 0;
              margin: 0;
            }
            span {
              display: none;
              color: #8a8b8a;
              border: 1px solid #8a8b8a;
              border-radius: 50%;
              font-weight: 600;
              padding: 4px 8px;
              cursor: pointer;
            }
          }
          .faq-content {
            color: var(--Grey-Black8, #8a8b8a);
            font-family: Mabry Pro;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
          }
        }
      }
    }
  }
  @media #{v.$media-mobile} {
    .content {
      gap: 1rem;
      flex-direction: column;
      .left,
      .right {
        width: 100%;
      }
      .left {
        .head {
          font-size: 1rem;
          br {
            display: none;
          }
        }
      }
      .right {
        .faq-list {
          .faq {
            width: 90%;
          }
        }
      }
    }
  }
}
</style>
