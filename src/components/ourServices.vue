<template>
  <section>
    <div class="content">
      <div class="intro">
        <h2>How Assetar Works</h2>
        <p class="subheader">
          Here's how we make it happen: We help facilitate the conversion of
          Crypto currency <br />
          into real life currency through the use of Non - custodial,
          decentralized method and our extensive peer-to-peer Network
          <br />
          Note: WE DO NOT HOLD USERS FUNDS OR HOLD FIAT.
        </p>
      </div>
      <div class="service-grid">
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Decentralization Education</h3>
            <p>
              During our customer onboarding we find out our customers goals and
              recommend tools to meet their desired level of privacy .
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Secure & Silent Processing</h3>
            <p>
              Every swap, payment, transfer er is done using decentralized
              platforms that do not risk your privacy therefore removing any
              risk of exposure for your through your funds
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Extensive Peer- to - Peer Network</h3>
            <p>
              Payments in fiats are facilitated using our extensive peer to peer
              network which ensures that your information is kept unexposed.
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div id="content">
            <img src="../assets/images/svg/cursor_icon.svg" alt="" />
            <h3>Encrypted messaging Integration</h3>
            <p>
              Communication between parties is done over end-to-end encrypted
              platforms like WhatsApp to ensure your conversations are hidden
              from prying eyes.
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
  @media #{v.$media-mobile} {
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
