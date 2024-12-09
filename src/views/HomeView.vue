<script setup>
import NavBar from "../components/NavBar.vue";
import socialProof from "../components/socialProof.vue";
import ourOffers from "../components/ourOffers.vue";
import ourServices from "../components/ourServices.vue";
import TestimonialSect from "../components/TestimonialSect.vue";
import FooterSect from "../components/FooterSect.vue";
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
            <a href="https://wa.link/5k6c6f" class="main-button" style="text-decoration: none;">Trade with Us</a>
            <button class="outline-button" @click="$router.push('#offers');">Learn More</button>
          </div>
        </div>
      </div>
      <div class="image-section">
        <img src="../assets/images/hero-image.png" alt="" />
      </div>
    </section>
    <socialProof />
    <ourOffers id="offers"/>
    <ourServices />
    <TestimonialSect id="testimonial" />
    <section class="btm-talk">
      <div class="content">
        <div id="cont">
          <div class="text-sect">
            <h3>Let's Secure your Future with</h3>
            <h3 id="second">
              Our Service
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <path
                  d="M27 0C29.5892 13.6971 40.3029 24.4108 54 27C40.3029 29.5892 29.5892 40.3029 27 54C24.4108 40.3029 13.6971 29.5892 0 27C13.6971 24.4108 24.4108 13.6971 27 0Z"
                  fill="#0471A6"
                />
              </svg>
            </h3>
          </div>
          <div class="btn-hold">
            <a id="hello" href="https://wa.link/5k6c6f" target="_blank">Get Started</a>
            <p>
              Join thousands of other folks to have the best trading experience
            </p>
          </div>
        </div>
      </div>
    </section>
    <FooterSect id="footer" />
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
    @media #{$media-mobile} {
      flex-direction: column-reverse;
      height: auto;
      margin: 1rem 0px 2rem;
      .text-section,
      .image-section {
        width: 100%;
      }
      .text-section {
        .content {
          width: 90%;
        }
        .notif {
          p {
            font-size: 12px;
          }
        }
        .intro-text {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: 1.75rem;
        }
        .sub-text {
          font-size: 0.8rem;
        }
      }
    }
  }

  .btm-talk {
    width: 100%;
    // height: 10rem;
    background: linear-gradient(to bottom, #050410 50%, #fff 50%);
    .content {
      background-color: #fff;
      width: 90%;
      margin: 0 auto;
      border-radius: 0.5rem;
      padding: 2rem 0px;
      #cont {
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .text-sect {
          h3 {
            color: var(--Grey-1, #2e2f35);
            font-size: 2.5rem;
            font-weight: 700;
            font-family: "Clash Display";
            &#second {
              display: flex;
              align-items: center;
              gap: 1rem;
            }
          }
        }
        .btn-hold {
          display: flex;
          flex-direction: column;
          #hello {
            width: fit-content;
            border-radius: 0.5rem;
            background: #0471a6;
            outline: none;
            color: #fff;
            padding: 12px 16px;
            border: none;
            cursor: pointer;
            text-decoration: none;
          }
          p {
            width: 10rem;
          }
        }
      }
    }
    @media #{$media-mobile} {
      .content {
        #cont {
          width: 90%;
          flex-direction: column;
          gap: 1.5rem;
          .text-sect {
            h3 {
              font-size: 2rem;
            }
          }
          .btn-hold {
            p {
              width: 80%;
            }
          }
        }
      }
    }
  }
}
</style>
