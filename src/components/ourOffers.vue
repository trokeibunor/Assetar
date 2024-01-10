<template>
  <section>
    <div class="content">
      <h2 class="intro">Our Values</h2>
      <p class="subheader">
        What makes us the best option <br />
        count on us to deliver when you need speedy, secure transactions
      </p>
      <div class="offer-grid">
        <div class="grid-item">
          <div class="image-container">
            <img src="../assets/images/svg/security.svg" alt="" />
          </div>
          <div class="g-con">
            <h3>Safety</h3>
            <p>
              We ensure all transactions are done through secure and safe
              channels, directly to our customer's account.
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div class="image-container">
            <img src="../assets/images/svg/personalized.svg" alt="" />
          </div>
          <div class="g-con">
            <h3>Personalized</h3>
            <p>
              We tend to each of our customers individual need and ensure that
              there every transaction is carried out in the interest of the
              customer
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div class="image-container">
            <img src="../assets/images/svg/prices.svg" alt="" />
          </div>
          <div class="g-con">
            <h3>Prices</h3>
            <p>
              We ensure that we deliver the best rates to each and every
              customer, ensuring or service is useable by all walks
            </p>
          </div>
        </div>
        <div class="grid-item">
          <div class="image-container">
            <img src="../assets/images/svg/safe.svg" alt="" />
          </div>
          <div class="g-con">
            <h3>Stess Free</h3>
            <p>
              We ensure to the best of our ability that all our transactions are
              stress free for all our customers
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    /*--------------------
    Vars
    --------------------*/
    let progress = ref(50);
    let startX = ref(0);
    let active = ref(0);
    let isDown = ref(false);

    /*--------------------
    Constants
    --------------------*/
    const speedWheel = 0.02;
    const speedDrag = -0.1;

    /*--------------------
    Get Z
    --------------------*/
    const getZindex = (array, index) =>
      array.map((_, i) =>
        index === i ? array.length : array.length - Math.abs(index - i)
      );

    /*--------------------
    Items
    --------------------*/
    const items = ref(document.querySelectorAll(".carousel-item"));
    const cursors = ref(document.querySelectorAll(".cursor"));

    const displayItems = (item, index, active) => {
      const zIndex = getZindex([...items.value], active)[index];
      item.style.setProperty("--zIndex", zIndex);
      item.style.setProperty("--active", (index - active) / items.value.length);
    };

    /*--------------------
    Animate
    --------------------*/
    const animate = () => {
      progress.value = Math.max(0, Math.min(progress.value, 100));
      active.value = Math.floor(
        (progress.value / 100) * (items.value.length - 1)
      );

      items.value.forEach((item, index) =>
        displayItems(item, index, active.value)
      );
    };
    animate();

    /*--------------------
    Click on Items
    --------------------*/
    items.value.forEach((item, i) => {
      item.addEventListener("click", () => {
        progress.value = (i / items.value.length) * 100 + 10;
        animate();
      });
    });

    /*--------------------
    Handlers
    --------------------*/
    const handleWheel = (e) => {
      const wheelProgress = e.deltaY * speedWheel;
      progress.value = progress.value + wheelProgress;
      animate();
    };

    const handleMouseMove = (e) => {
      if (e.type === "mousemove") {
        cursors.value.forEach(($cursor) => {
          $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
      }
      if (!isDown.value) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const mouseProgress = (x - startX.value) * speedDrag;
      progress.value = progress.value + mouseProgress;
      startX.value = x;
      animate();
    };

    const handleMouseDown = (e) => {
      isDown.value = true;
      startX.value = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    };

    const handleMouseUp = () => {
      isDown.value = false;
    };

    /*--------------------
    Listeners
    --------------------*/
    document.addEventListener("mousewheel", handleWheel);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchstart", handleMouseDown);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);

    // Return any variables or methods that you want to expose
    return {
      items,
      cursors,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  padding: 2rem 0rem;
  .content {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2,
    p {
      padding: 0;
      margin: 0;
    }
    h2 {
      font-family: "Clash Display";
    }
    p {
      font-family: "Satoshi";
      color: var(--Grey-3, #7d7e7f);
      font-weight: 600;
    }
    .offer-grid {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
      .grid-item {
        width: 22.5%;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;

        border: 1px solid var(--Grey-bg, #dfe7f2);
        .image-container {
          background: #fdf8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem 1rem 0px 0px;
          &:nth-of-type(2) {
            background: #8fbbed;
          }
          img {
            width: 100%;
            height: 10rem;

            object-fit: contain;
          }
        }
        .g-con {
          padding: 1rem 0px;
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          h3 {
            font-size: 1.25rem;
            font-weight: 900;
            // font-family: "Clash Display";
          }
        }
      }
    }
  }
}
</style>
