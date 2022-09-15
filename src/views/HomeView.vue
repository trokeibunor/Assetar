<script setup>
import NavView from "../components/NavView.vue";
</script>

<template>
  <main>
    <div class="container">
      <NavView />
      <section class="hero">
        <div class="content">
          <p id="toper">Asseter Exchange</p>
          <h2>
            Life is too short for your <span>crypto transactions</span> to take
            time
          </h2>
          <p id="downer">
            At asseter exchange we prioritize the speed of every customers
            transaction
          </p>
          <div class="btn-row">
            <a href="#"
              ><img src="../assets/images/Handshake.svg" alt="" /> Let's
              trade</a
            >
            <a href="#"
              ><img src="../assets/images/doubledownCarat.svg" alt="" /> Explore
              Offers</a
            >
          </div>
        </div>
        <div class="wave"></div>
      </section>
    </div>
    <div class="convincer">
      <div class="cont topCon">
        <div class="text-cont">
          <h5>EASY TRADING.</h5>
          <h3>Trading as simple as sending a text, Literally</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            interdum duis nibh venenatis faucibus ullamcorper cras sagittis.
            Pellentesque aliquet vel gravida ac vel volutpat justo. In ipsum,
            feugiat augue auctor ipsum ut enim gravida. Gravida nunc scelerisque
            a suscipit eget. Libero diam turpis egestas volutpat consectetur
            platea nunc tempor id. Eget accumsan et tellus massa, egestas. Sit
            sapien, adipiscing sapien ac habitasse ut. Mattis amet imperdiet
            tristique tellus consectetur in. Nisl eu pellentesque sit consequat
            mi, non euismod habitasse eleifend.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div class="img-cont">
          <img src="../assets/images/girl_on_phone.svg" alt="" />
        </div>
      </div>
      <div class="cont downCon">
        <div class="img-cont">
          <img src="../assets/images/tick_boxes.svg" alt="" />
        </div>
        <div class="text-cont">
          <h5>SUPERIOR TRADING EXPERIENCE</h5>
          <h3>
            We tick all the boxes, superior rates, Fast transaction, Zero down
            time
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            interdum duis nibh venenatis faucibus ullamcorper cras sagittis.
            Pellentesque aliquet vel gravida ac vel volutpat justo. In ipsum,
            feugiat augue auctor ipsum ut enim gravida. Gravida nunc scelerisque
            a suscipit eget. Libero diam turpis egestas volutpat consectetur
            platea nunc tempor id. Eget accumsan et tellus massa, egestas. Sit
            sapien, adipiscing sapien ac habitasse ut. Mattis amet imperdiet
            tristique tellus consectetur in. Nisl eu pellentesque sit consequat
            mi, non euismod habitasse eleifend.
          </p>
          <a href="#">Talk to us</a>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
body {
  font-family: "Source Sans Pro", sans-serif;
  background-color: #fafdff;
  margin: 0px;
  padding: 0px;
  color: #030709;
}
// style scrollbar
body::-webkit-scrollbar {
  width: 0.2em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
}

body::-webkit-scrollbar-thumb {
  background-color: #06161f;
  border-radius: 40px;
}
a {
  cursor: pointer;
}
.container {
  position: relative;
  width: 100%;
  height: 95vh;
  background-image: url("../assets/images/Desktop_background.svg");
  background-position: top center;
  overflow: hidden;
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5%;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: center;
      #toper {
        font-family: "Quantico";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        /* identical to box height */
        color: #2d9cdb;
        margin: 0px;
      }
      h2 {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 700;
        font-size: 52px;
        width: 60%;
        text-align: center;
        color: #ffffff;
        margin: 8px 0px;
        span {
          color: #2d9cdb;
        }
      }
      #downer {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        width: 30%;
        line-height: auto;
        text-align: center;
        margin: 0px;
        color: #ffffff;
      }
      .btn-row {
        position: relative;
        display: flex;
        flex-direction: row;
        margin-top: 4rem;
        z-index: 2;
        a {
          margin: 16px;
          display: flex;
          align-items: center;
          width: fit-content;
          flex-gap: 4px;
          color: #fff;
          text-decoration: none;
          gap: 6px;
          -webkit-gap: 6px;
        }
        a:first-child {
          width: fit-content;
          padding: 8px 16px;
          font-weight: 600;
          cursor: pointer;
          background: linear-gradient(
            162.3deg,
            #a8d0e4 -102.23%,
            #0471a6 87.9%
          );
          border-radius: 40px;
          img {
            max-width: 48px;
          }
        }
        a:last-child {
          cursor: pointer;
          font-weight: 600;
          img {
            max-width: 24px;
          }
        }
      }
    }
    .wave {
      position: absolute;
      top: 75%;
      width: 100%;
      height: 25vh;
      background-image: url("../assets/images/Hero_wave.svg");
      z-index: 1;
    }
  }
}
.convincer {
  width: 100%;
  .cont {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .text-cont {
      h5 {
        margin: 0px;
        padding: 0px;
      }
      h3 {
        font-size: 36px;
        font-weight: 600;
        margin: 0px;
        padding: 0px;
        line-height: 120%;
      }
      a {
        text-decoration: none;
        font-weight: 600;
        width: fit-content;
        padding: 8px 16px;
        color: #fff;
        border-radius: 40px;
      }
    }
    .img-cont {
      display: flex;
      img {
        width: 80%;
        height: auto;
      }
    }
  }
  .topCon {
    .text-cont {
      h5 {
        color: #e84855;
      }
      a {
        background: linear-gradient(67.65deg, #f6feaa -42.73%, #e84855 82.81%);
      }
    }
    .img-cont {
      justify-content: flex-end;
    }
  }
  .downCon {
    .text-cont {
      h5 {
        color: #0471a6;
      }
      a {
        background: linear-gradient(119.06deg, #76b9da -6.12%, #2e7093 111.86%);
      }
    }
  }
}
</style>
