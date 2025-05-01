<template>
  <div class="frequently">
    <div class="fqIntro">
      <h3>Frequently asked questions</h3>
      <p>
        We leave room for criticism and applause of our service, after every
        transaction we provide users, with the link to rate our service,
        independently . Here is what they had to say
      </p>
    </div>
    <div class="fqCon">
      <div
        class="fqBox"
        id="firstQ"
        @click.prevent="firstQ = !firstQ"
        @touchstart.prevent="firstQ = !firstQ"
      >
        <p id="fqTitle">How do I get started</p>
        <p v-if="firstQ">
          We leave room for criticism and applause of our service, after every
          transaction we provide users, with the link to rate our service,
          independently . Here is what they had to say
        </p>
      </div>
      <div
        class="fqBox"
        id="secondQ"
        @click.prevent="secondQ = !secondQ"
        @touchstart.prevent="secondQ = !secondQ"
      >
        <p id="fqTitle">How do I get started</p>
        <p v-if="secondQ">
          We leave room for criticism and applause of our service, after every
          transaction we provide users, with the link to rate our service,
          independently . Here is what they had to say
        </p>
      </div>
      <div
        class="fqBox"
        id="thirdQ"
        @click.prevent="thirdQ = !thirdQ"
        @touchstart.prevent="thirdQ = !thirdQ"
      >
        <p id="fqTitle">How do I get started</p>
        <p v-if="thirdQ">
          We leave room for criticism and applause of our service, after every
          transaction we provide users, with the link to rate our service,
          independently . Here is what they had to say
        </p>
      </div>
      <div
        class="fqBox"
        id="fourthQ"
        @click.prevent="fourthQ = !fourthQ"
        @touchstart.prevent="fourthQ = !fourthQ"
      >
        <p id="fqTitle">How do I get started</p>
        <p v-if="fourthQ">
          We leave room for criticism and applause of our service, after every
          transaction we provide users, with the link to rate our service,
          independently . Here is what they had to say
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// questions
const firstQ = ref(false);
const secondQ = ref(false);
const thirdQ = ref(false);
const fourthQ = ref(false);
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.frequently {
  margin: 2rem 0px;
  padding: 2rem 0px;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin: 0 auto;
  .fqIntro {
    width: 50%;
    margin: 0px auto;
    text-align: center;
    h3 {
      font-size: 24px;
      font-weight: 600;
    }
  }
  .fqCon {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 2rem auto;
    .fqBox {
      margin: 1rem 0;
      padding: 8px 64px;
      border-radius: 4px;
      border: 1px solid #252525;
      cursor: pointer;
      #fqTitle {
        color: #065c86;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
}
@media #{$media-mobile} {
  .frequently {
    width: 90%;
    .fqIntro {
      width: 80%;
    }
    .fqCon {
      margin: 1rem auto;
      width: 90%;
      .fqBox {
        padding: 8px 16px;
      }
    }
  }
}
</style>
