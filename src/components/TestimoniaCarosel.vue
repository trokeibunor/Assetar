<template>
  <swiper
    :slidesPerView="4"
    :spaceBetween="48"
    :centeredSlides="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="backg"></div>
      <div class="mainCon">
        <div class="text">
          <img id="top" src="../assets/images/upQuotes.svg" alt="" />
          <p>
            I really enjoyed trading with asseters exchange, the payment was
            instant. They have really nice rates, and like zero downtime
          </p>
          <img id="down" src="../assets/images/downQuote.svg" alt="" />
        </div>
        <img id="person_img" src="../assets/images/test_img.png" alt="" />
        <p id="userName">Okeibunor Emmanuel Osenonso</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="backg"></div>
      <div class="mainCon">
        <div class="text">
          <img id="top" src="../assets/images/upQuotes.svg" alt="" />
          <p>
            I really enjoyed trading with asseters exchange, the payment was
            instant. They have really nice rates, and like zero downtime
          </p>
          <img id="down" src="../assets/images/downQuote.svg" alt="" />
        </div>
        <img id="person_img" src="../assets/images/test_img.png" alt="" />
        <p id="userName">Okeibunor Emmanuel Osenonso</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="backg"></div>
      <div class="mainCon">
        <div class="text">
          <img id="top" src="../assets/images/upQuotes.svg" alt="" />
          <p>
            I really enjoyed trading with asseters exchange, the payment was
            instant. They have really nice rates, and like zero downtime
          </p>
          <img id="down" src="../assets/images/downQuote.svg" alt="" />
        </div>
        <img id="person_img" src="../assets/images/test_img.png" alt="" />
        <p id="userName">Okeibunor Emmanuel Osenonso</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="backg"></div>
      <div class="mainCon">
        <div class="text">
          <img id="top" src="../assets/images/upQuotes.svg" alt="" />
          <p>
            I really enjoyed trading with asseters exchange, the payment was
            instant. They have really nice rates, and like zero downtime
          </p>
          <img id="down" src="../assets/images/downQuote.svg" alt="" />
        </div>
        <img id="person_img" src="../assets/images/test_img.png" alt="" />
        <p id="userName">Okeibunor Emmanuel Osenonso</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="backg"></div>
      <div class="mainCon">
        <div class="text">
          <img id="top" src="../assets/images/upQuotes.svg" alt="" />
          <p>
            I really enjoyed trading with asseters exchange, the payment was
            instant. They have really nice rates, and like zero downtime
          </p>
          <img id="down" src="../assets/images/downQuote.svg" alt="" />
        </div>
        <img id="person_img" src="../assets/images/test_img.png" alt="" />
        <p id="userName">Okeibunor Emmanuel Osenonso</p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<style>
.swiper {
  width: 100%;
  height: 120%;
  cursor: grabbing;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  height: auto;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide .backg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(137.98deg, #0471a6 -4.84%, #e84855 108.7%);
  box-shadow: 0px 3.75758px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  transform: rotate(-3.8deg);
  z-index: -1;
}
.swiper-slide .mainCon {
  display: flex;
  width: 95%;
  height: 90%;
  background: #ffffff;
  box-shadow: 0px 3.75758px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 16px 0px;
  /* transform: rotate(-0.93deg); */
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mainCon .text {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 16px auto 8px;
  text-align: left;
}
.text p {
  margin: 0;
  padding-left: 8px;
}
#top {
  align-self: flex-start;
}
#down {
  align-self: flex-end;
}
#person_img {
  width: 75px;
  height: 75px;
  justify-self: center;
}
#userName {
  font-weight: 600;
  color: #135176;
  text-align: center;
}
</style>
