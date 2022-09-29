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
</script>
<template>
  <main>
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
main {
  width: 100%;
  display: relative;
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
      }
    }
    .heroImage {
      width: 100%;
      height: 80vh;
      position: relative;
      img {
        position: absolute;
        top: -40%;
        right: 0;
      }
    }
  }
}
</style>
