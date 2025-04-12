<script setup>
import NavBar from "../components/NavBar.vue";
import FooterSect from "../components/FooterSect.vue";
import faqSect from "../components/faqSect.vue";
</script>
<template>
  <NavBar />
  <main>
    <section class="hero">
      <div class="text-section">
        <div class="content">
          <h5>Assetar's One-of-a-kind Story</h5>
          <h2 class="intro-text">
            Africa's Fastest and Easiest Cryptocurrency Exchange
          </h2>
          <div class="button-row">
            <a
              href="https://wa.me/message/JJBUQRUINMSTM1"
              class="main-button"
              style="text-decoration: none"
              target="_blank"
              >Trade with Us</a
            >
            <!-- <button class="outline-button">Learn More</button> -->
          </div>
        </div>
      </div>
    </section>
    <faqSect />
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
            <a
              id="hello"
              href="https://wa.me/message/JJBUQRUINMSTM1"
              target="_blank"
              >Get Started</a
            >
            <p>
              Join thousands of other folks to have the best trading experience
            </p>
          </div>
        </div>
      </div>
    </section>
    <FooterSect />
  </main>
</template>

<style lang="scss" scoped>
section.hero {
  background: var(--Grey-bglast, #f9fbfc);
  padding: 1rem 0px;
  .text-section {
    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h5 {
        padding: 0;
        margin: 0;
        color: #0471a6;
      }
    }
  }
}
.btm-talk {
  background: linear-gradient(to bottom, #0471a6 50%, #fff 50%) !important;
  padding: 1rem 0rem;
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
</style>
