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
import { ref, onMounted } from "vue";
// design variables
const alertOpen = ref(false);
const subscribeEmail = ref("");
const subcribeModal = ref(false);
// Close modal fuction
function clearModal() {
  alertOpen.value = false;
  console.log(alertOpen);
}
onMounted(() => {
  // set timeout to open subscribe email modal
  setTimeout(() => {
    alertOpen.value = true;
    subcribeModal.value = true;
  }, 10000);
});
</script>
<template>
  <!-- Pop up modals -->
  <div class="alerts" v-if="alertOpen">
    <div class="signUpModal" v-if="subcribeModal">
      <img
        id="clearIcon"
        @click="clearModal"
        src="../assets/images/modal_remove_icon.svg"
        alt=""
      />
      <h3>Subscribe To our Emailing List</h3>
      <input
        type="email"
        v-model="subscribeEmail"
        placeholder="Email Address"
      />
      <button id="submit_btn" @click="submitEmail">Subscribe</button>
    </div>
  </div>
  <main>
    <section class="hero">
      <NavBar />
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
        <!-- <div class="heroImage">
          <img src="../assets/images/hero_image.png" alt="" />
        </div> -->
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
// pop up styles
.alerts {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: hsla(0, 0%, 0%, 0.5);
  div {
    background-color: #fff;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    width: 40%;
    border-radius: 4px;
    @media #{$media-mobile} {
      width: 70%;
    }
  }
  .signUpModal {
    #clearIcon {
      width: 18px;
      height: 18px;
      cursor: pointer;
      align-self: flex-end;
      margin: 2rem 0px;
    }
    h3 {
      font-size: 18px;
      font-weight: bold;
      // margin: 1rem 0px;
    }
    input {
      padding: 16px 8px;
      outline: none;
      margin: 1.5rem 0px;
    }
    button#submit_btn {
      width: fit-content;
      height: fit-content;
      background-color: #035a85;
      align-self: center;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      padding: 12px 24px;
      margin: 24px 0px;
      outline: none;
      border: none;
      border-radius: 4px;
    }
  }
}
main {
  width: 100%;
  display: relative;
  overflow: hidden;
}
// Hero Section
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../assets/images/asseter-hero.png);
  background-size: 100% 150%;
  background-position: center;
  height: 100dvh;
  width: 100%;
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-end;
  .heroContent {
    width: 90%;
    display: grid;
    height: 100%;
    // flex-direction: row;
    // align-items: center;
    margin: 0 auto;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-items: center;
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
        color: #fff;
      }
      p {
        color: #f2f2f2;
        width: 60%;
        margin-bottom: 2rem;
      }
      a#cta {
        text-decoration: none;
        padding: 12px 18px;
        border-radius: 4px;
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
    background-size: 200% 100%;
    .heroContent {
      display: flex;
      // flex-direction: column-reverse;
      flex-direction: column;
      justify-content: center;
      width: 90%;
      height: 100%;
      margin: 0 auto;
      .heroText {
        // height: 100%;
        h1 {
          font-size: 24px;
          font-weight: 700;
        }
        p {
          width: 90%;
        }
      }
      .heroImage {
        // height: 45vh;
        display: none;
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
