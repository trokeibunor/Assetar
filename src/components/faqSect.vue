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
              <p>How do I earn from buying a property</p>
              <span>&#43;</span>
            </div>
            <p class="faq-content">
              You can earn in a number of ways, your property definitely
              appreciates in value over time and can be source of income. You
              can also access the referral system where your downline/referral’s
              transactions gives your commissions on the platform.
            </p>
          </div>
          <div class="faq">
            <div class="cont-row">
              <p>How do I earn from buying a property</p>
              <span>&#43;</span>
            </div>
            <p class="faq-content">
              You can earn in a number of ways, your property definitely
              appreciates in value over time and can be source of income. You
              can also access the referral system where your downline/referral’s
              transactions gives your commissions on the platform.
            </p>
          </div>
          <div class="faq">
            <div class="cont-row">
              <p>How do I earn from buying a property</p>
              <span>&#43;</span>
            </div>
            <p class="faq-content">
              You can earn in a number of ways, your property definitely
              appreciates in value over time and can be source of income. You
              can also access the referral system where your downline/referral’s
              transactions gives your commissions on the platform.
            </p>
          </div>
          <div class="faq">
            <div class="cont-row">
              <p>How do I earn from buying a property</p>
              <span>&#43;</span>
            </div>
            <p class="faq-content">
              You can earn in a number of ways, your property definitely
              appreciates in value over time and can be source of income. You
              can also access the referral system where your downline/referral’s
              transactions gives your commissions on the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
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
}
</style>
