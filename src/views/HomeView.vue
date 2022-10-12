<script setup>
import NavBar from "../components/NavBar.vue";
import QualityCon from "../components/QualityCon.vue";
import ConvincerFlex from "../components/ConvincerFlex.vue";
import TokenHoleder from "../components/TokenHoleder.vue";
import TestimonialSect from "../components/TestimonialSect.vue";
import FreqAsked from "../components/FreqAsked.vue";
import ContactSect from "../components/ContactSect.vue";
import SubSect from "../components/SubSect.vue";
import FooterSect from "../components/FooterSect.vue";
import { ref } from "vue";
const subscribeEmail = ref("");
</script>
<template>
  <main>
    <!-- SignUp modal -->
    <div class="signUpModal" v-if="hasSubscribed">
      <button @click="clearModal">
        <img src="../assets/images/modal_remove_icon.svg" alt="" />
      </button>
      <h3>Subscribe To our Emailing List</h3>
      <input
        type="email"
        v-model="subscribeEmail"
        placeholder="Email Address"
      />
      <button @click="submitEmail">Subscribe</button>
    </div>
    <NavBar />
    <section class="hero">
      <div class="heroContent">
        <div class="heroText">
          <h3>ASSETAR EXCHANGE</h3>
          <h1>Life is too short for your crypto transactions to take time</h1>
          <p>
            At asseter exchange we prioritize the speed of every customers
            transaction
          </p>
          <a href="#" id="cta">Trade with Us</a>
        </div>
        <div class="heroImage">
          <img src="../assets/images/hero_image.png" alt="" />
        </div>
      </div>
    </section>
    <QualityCon />
    <ConvincerFlex />
    <TokenHoleder id="token" />
    <TestimonialSect />
    <FreqAsked />
    <ContactSect id="contact" />
    <SubSect />
    <FooterSect />
  </main>
</template>
<style lang="scss">
@import "../assets/variables.scss";
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px)";
main {
  width: 100%;
  display: relative;
  overflow: hidden;
  // Modals
  .signUpModal {
    display: flex;
    width: 60%;
    height: auto;
    background: #fff;
  }
}
// Hero Section
.hero {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  .heroContent {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    .heroText {
      h3 {
        background: radial-gradient(
            42.99% 42.99% at 30.18% 57.01%,
            #444ce4 0%,
            #037e82 100%
          )
          /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      h1 {
        margin: 1.5rem 0px;
      }
      p {
        width: 60%;
        margin-bottom: 2rem;
      }
      a#cta {
        text-decoration: none;
        padding: 12px 18px;
        border-radius: 8px;
        font-weight: 700;
        background-color: #035a85;
        color: #fff;
        margin-top: 8px !important;
      }
    }
    .heroImage {
      width: 100%;
      height: 80vh;
      position: relative;
      // overflow: hidden;
      img {
        width: 180%;
        position: absolute;
        top: -60%;
        right: -40%;
      }
    }
  }
}
@media #{$media-mobile} {
  .hero {
    .heroContent {
      flex-direction: column-reverse;
      width: 80%;
      margin: 0 auto;
      .heroText {
        h1 {
          font-size: 24px;
          font-weight: 700;
        }
        p {
          width: 90%;
        }
      }
      .heroImage {
        height: 45vh;
        img {
          position: relative;
          width: 150%;
          top: -40%;
          right: 25%;
        }
      }
    }
  }
}
</style>
