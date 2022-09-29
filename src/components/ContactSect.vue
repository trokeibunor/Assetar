<template>
  <div class="contactSect">
    <img
      class="pattern pattern_wave"
      src="../assets/images/patternWaves.svg"
      alt=""
      srcset=""
    />
    <img
      class="pattern pattern_shape"
      src="../assets/images/patternShapes.svg"
      alt=""
    />
    <div class="csContent">
      <div class="csIntro">
        <h3>Talk to us today</h3>
        <p>
          We leave room for criticism and applause of our service, after every
          transaction we provide users, with the link to rate our service,
          independently . Here is what they had to say
        </p>
      </div>
      <div class="csCard">
        <div class="linkBox">
          <img src="../assets/images/topCardImg.png" alt="" srcset="" />
          <div class="linkRow">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="../assets/images/facebook.svg" alt="" srcset="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="../assets/images/twitter.svg" alt="" srcset="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="../assets/images/instagram.svg" alt="" srcset="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="../assets/images/whatsapp.svg" alt="" srcset="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="../assets/images/mail.svg" alt="" srcset="" />
            </a>
          </div>
        </div>
        <div class="formBox">
          <form action="#">
            <input type="text" placeholder="Name" v-model="name" />
            <input type="email" placeholder="Email address" v-model="email" />
            <textarea
              name="message"
              placeholder="Write Message"
              v-model="message"
              rows="8"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("");
const email = ref("");
const message = ref("");
</script>

<style lang="scss" scoped>
.contactSect {
  background-color: #035a85;
  color: #fff;
  width: 100%;
  height: auto;
  position: relative;
  padding: 2rem 0px;
  margin: 2rem 0px;
  border-radius: 80px;
  overflow: hidden;
  .pattern {
    position: absolute;
    z-index: 0;
    opacity: 0.8;
  }
  .pattern_wave {
    top: 0px;
    left: 0px;
  }
  .pattern_shape {
    bottom: 0px;
    right: -5%;
  }
  .csContent {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    .csIntro {
      width: 50%;
      margin: 0px auto;
      text-align: center;
      h3 {
        font-size: 24px;
        font-weight: 600;
      }
    }
    .csCard {
      background-color: #fff;
      color: #000;
      padding: 1.5rem 1rem;
      margin: 2rem 0px;
      display: grid;
      grid-template-columns: 50% 50%;
      border-radius: 40px;
      .linkBox {
        .linkRow {
          margin: 32px 0px 0px 0px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          a {
            margin: 0px 8px;
            img {
              width: 32px;
            }
          }
        }
      }

      .formBox {
        form {
          width: 100%;
          display: flex;
          flex-direction: column;
          input,
          textarea {
            width: 85%;
            padding: 16px 24px;
            font-size: 16x;
            margin: 12px 0px;
            border: 1px solid #252525;
            outline: none;
            border-radius: 4px;
          }
          button {
            width: fit-content;
            height: fit-content;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            color: #fff;
            background-color: #035a85;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
