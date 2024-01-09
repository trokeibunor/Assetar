<script setup>
import NavBar from "../components/NavBar.vue";
// import { ref, onMounted } from "vue";
</script>
<template>
  <NavBar />
  <main>
    <section class="hero">
      <div class="text-section">
        <div class="content">
          <div class="notif">
            <p>Speed</p>
            <p>Trading done in an instant, yes we're that fast</p>
          </div>
          <h2 class="intro-text">
            Easy, fast and secure cryptocurrency exchange for everyone
          </h2>
          <p class="sub-text">
            For a hassle-free cryptocurrency trading experience, we put a strong
            emphasis on simplicity, speed, and security. Get started with your
            first trade today.
          </p>
          <div class="button-row">
            <button class="main-button">Trade with Us</button>
            <button class="outline-button">Learn More</button>
          </div>
        </div>
      </div>
      <div class="image-section">
        <img src="../assets/images/hero-image.png" alt="" />
      </div>
    </section>
  </main>
</template>
<style lang="scss">
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px)";
// pop up styles
main {
  width: 100%;
  // display: relative;
  // overflow: hidden;
  section.hero {
    display: flex;
    gap: 2rem;
    width: 100%;
    height: 80vh;
    align-items: center;
    .text-section,
    .image-section {
      width: 50%;
    }
    .image-section {
      display: flex;
      justify-content: center;
      img {
        width: 90%;
        height: 100%;
        object-fit: contain;
      }
    }
    .text-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .content {
        width: 80%;
        margin: 0 auto;
      }
      .notif {
        display: flex;
        align-items: center;
        padding: 0.25rem 0.5rem;
        background: var(--White-2, #f9fbfd);
        width: fit-content;
        height: fit-content;
        gap: 4px;
        border-radius: 0.75rem;
        p {
          margin: 0;
          padding: 0;
          &:first-of-type {
            color: var(--White-1, #fff);
            background: #0471a6;
            padding: 0.5rem 1rem;
            border-radius: 0.75rem;
          }
          color: var(--Grey-2, #5d6162);
        }
      }
      .intro-text {
        color: var(--Grey-1, #2e2f35);
        font-family: "Clash Display";
        /* D2 Desktop/bold-60 */
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
      }
      .sub-text {
        align-self: stretch;
        color: var(--Grey-3, #7d7e7f);
        font-family: Satoshi;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
      }
      .button-row {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }
    }
  }
}

// Hero Section
@media #{$media-mobile} {
}
</style>
