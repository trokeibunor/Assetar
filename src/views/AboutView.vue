<template>
  <main>
    <div class="abHero">
      <NavBar />
      <div class="abIntro">
        <div class="abCon">
          <h2>Assetar's Story is unique</h2>
          <p>
            At assetar we prioritize the speed of each customer's transaction
          </p>
          <img
            @click="routeTo('/about#fromMan')"
            src="../assets/images/move_down.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="fromManagement" id="fromMan">
      <div class="fmText">
        <p id="top">THE BEST WAY TO TRADE</p>
        <h3>From the Management</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam interdum
          duis nibh venenatis faucibus ullamcorper cras sagittis. Pellentac
          habitasse ut. Mattis amet imperdiet tristique tellus consectetur in.
          Nisl eu pellentesque sit consequat mi, non euismod habitasse eleifend.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam interdum
          duis nibh venenatis faucibus ullamcorper cras sagittis. Pellentac
          habitasse ut. Mattis amet imperdiet tristique tellus consectetur in.
          Nisl eu pellentesque sit consequat mi, non euismod habitasse eleifend.
        </p>
      </div>
      <img src="../assets/images/aboutManagement.png" alt="" srcset="" />
    </div>
    <div class="ourBrand">
      <div class="obTop">
        <div>
          <p>
            <img src="../assets/images/bookmark_check.svg" alt="" /> Bonus and
            Incentives
          </p>
          <p>
            <img src="../assets/images/bookmark_check.svg" alt="" /> Fast
            payment is assured
          </p>
        </div>
        <div>
          <p>
            <img src="../assets/images/bookmark_check.svg" alt="" /> We have
            more than enough Bitcoin to go around
          </p>
          <p>
            <img src="../assets/images/bookmark_check.svg" alt="" /> Instant
            funding of account on request
          </p>
        </div>
      </div>
      <div class="brand_images">
        <img src="../assets/images/brand_img1.png" alt="" srcset="" />
        <img src="../assets/images/brand_img2.png" alt="" srcset="" />
        <img src="../assets/images/brand_img3.png" alt="" srcset="" />
        <img src="../assets/images/brand_img4.png" alt="" srcset="" />
      </div>
      <div class="obTextSect">
        <p id="top">THE BEST WAY TO TRADE</p>
        <h3>From the Management</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam interdum
          duis nibh venenatis faucibus ullamcorper cras sagittis. Pellentac
          habitasse ut. Mattis amet imperdiet tristique tellus consectetur in.
          Nisl eu pellentesque sit consequat mi, non euismod habitasse eleifend.
        </p>
      </div>
    </div>
    <div class="finalTalk">
      <div class="fiTalk">
        <p id="top">THE BEST WAY TO TRADE</p>
        <h3>From the Management</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam interdum
          duis nibh venenatis faucibus ullamcorper cras sagittis. Pellentac
          habitasse ut. Mattis amet imperdiet tristique tellus consectetur in.
          Nisl eu pellentesque sit consequat mi, non euismod habitasse eleifend.
        </p>
      </div>
      <img src="../assets/images/fiImg.png" alt="" />
    </div>
    <section class="qualities">
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
      <div class="qualitiesCon">
        <p id="title">THE BEST WAY TO TRADE</p>
        <h2>Our Mission,Vission and core values</h2>
        <p id="anTalk">
          At assetar we prioritize the speed of every customers transaction
        </p>
        <div class="qualityGrid">
          <div class="qualityBox">
            <img src="../assets/images/qualIcon.svg" alt="" />
            <p id="titleSm">Our Mission</p>
            <p>
              At asseter exchange we prioritize the speed of every customers
              transaction
            </p>
          </div>
          <div class="qualityBox">
            <img src="../assets/images/qualIcon.svg" alt="" />
            <p id="titleSm">Our Vision</p>
            <p>
              At asseter exchange we prioritize the speed of every customers
              transaction
            </p>
          </div>
          <div class="qualityBox">
            <img src="../assets/images/qualIcon.svg" alt="" />
            <p id="titleSm">Core values</p>
            <p>
              At asseter exchange we prioritize the speed of every customers
              transaction
            </p>
          </div>
        </div>
      </div>
    </section>
    <SubSect />
    <FooterSect />
  </main>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import SubSect from "../components/SubSect.vue";
import FooterSect from "../components/FooterSect.vue";
import router from "../router";
function routeTo(x) {
  router.push(x);
}
</script>

<style lang="scss" scoped>
// Main is inherited
.abHero {
  background-image: url(../assets/images/about_background.png);
  background-size: 100%;
  width: 100%;
  position: relative;
  min-height: 85vh;
  color: #fff;
  .abIntro {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .abCon {
      text-align: center;
      img {
        width: 32px;
        cursor: pointer;
      }
    }
  }
}
.abHero:before {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 15em;
  background: url(../assets/images/about_wave.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.fromManagement {
  background-color: #fff;
  border-radius: 40px;
  width: 80%;
  margin: 5rem auto 2rem;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: flex-end;
  align-items: center;
  gap: 16px;
  img {
    max-width: 420px;
  }
  .fmText {
    #top {
      font-size: 14px;
      color: #035a85;
      font-weight: 700;
    }
    h3 {
      font-weight: 600;
      font-size: 32px;
    }
    p {
      line-height: 140%;
    }
  }
}
.ourBrand {
  width: 80%;
  margin: 0px auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40% 1fr;
  gap: 32px;
  align-items: center;
  .obTop {
    grid-column: 1;
    grid-row: 1;
    background-color: #fff;
    padding: 16px 32px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      margin: 0px 8px;
      p {
        display: flex;
        gap: 8px;
        margin: 32px 0px;
      }
    }
  }
  .brand_images {
    display: grid;
    grid-column: 1;
    grid-row: 2;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 16px;
  }
  .obTextSect {
    grid-column: 2;
    grid-row: 2;
    #top {
      font-size: 14px;
      color: #035a85;
      font-weight: 700;
    }
    h3 {
      font-weight: 600;
      font-size: 32px;
    }
    p {
      line-height: 140%;
    }
  }
}
.finalTalk {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fiTalk {
    #top {
      font-size: 14px;
      color: #035a85;
      font-weight: 700;
    }
    h3 {
      font-weight: 600;
      font-size: 32px;
    }
    p {
      line-height: 140%;
    }
  }
}
.qualities {
  background-color: #035a85;
  color: #fff;
  width: 100%;
  height: auto;
  border-radius: 80px;
  position: relative;
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
  #title {
    font-weight: bold;
    font-size: 14px;
  }
  #anTalk {
    width: 40%;
    margin: 1rem auto;
  }
  .qualitiesCon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 80%;
    padding: 5rem 0px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    .qualityGrid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-row-gap: 62px;
      justify-items: center;
      margin: 2rem 0px;
      .qualityBox {
        width: 65%;
        padding: 24px;
        border: 1px solid #fff;
        border-radius: 4px;
        background-color: #035a85;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        #titleSm {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
