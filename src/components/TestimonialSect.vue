<template>
  <section>
    <div class="content">
      <div class="intro">
        <h2>Our Customers Reviews</h2>
        <p>
          Join the thousands of people already on the exchange today. <br />Hear
          from our clients
        </p>
      </div>
      <div class="testimonialCarousel">
        <div class="testimonial">
          <div class="content">
            <p class="word">
              Assetar is the best I've been with no cap, quick exchange and
              deals are always done the way it should be ngl
            </p>
            <div class="btm">
              <div class="author">
                <div class="name">Azagba Osagie Destiny</div>
                <img src="../assets/images/svg/stars.svg" alt="" />
              </div>
              <img src="../assets/images/png/inverted-comma.png" alt="" />
            </div>
          </div>
        </div>
        <div class="testimonial">
          <div class="content">
            <p class="word">
              If the scale is on 100, Assetar broke the scale. I thought I had a
              good exchange service till I started trading with Assetar. They’re
              simply top notch, I recommend
            </p>
            <div class="btm">
              <div class="author">
                <div class="name">Rahman Pablo</div>
                <img src="../assets/images/svg/stars.svg" alt="" />
              </div>
              <img src="../assets/images/png/inverted-comma.png" alt="" />
            </div>
          </div>
        </div>
        <div class="testimonial">
          <div class="content">
            <p class="word">
              I have been trading with Asseter for almost a year now and it’s
              been a really great experience so far. For me meeting up to time
              and delivery early is important and that’s what I’ve experienced
              with Assetar so far.
            </p>
            <div class="btm">
              <div class="author">
                <div class="name">Omoregie Osayande Alvan</div>
                <img src="../assets/images/svg/stars.svg" alt="" />
              </div>
              <img src="../assets/images/png/inverted-comma.png" alt="" />
            </div>
          </div>
        </div>
        <div class="testimonial">
          <div class="content">
            <p class="word">
              The only place where I don’t ever feel worried about trading
              anything. I’d exchange my kidneys here if Assetar starts buying
              kidneys❤️
            </p>
            <div class="btm">
              <div class="author">
                <div class="name">Ohunma Azike</div>
                <img src="../assets/images/svg/stars.svg" alt="" />
              </div>
              <img src="../assets/images/png/inverted-comma.png" alt="" />
            </div>
          </div>
        </div>
        <div class="testimonial">
          <div class="content">
            <p class="word">
              The team of Assetar is truly brilliant and well-versed in the
              crypto space. Furthermore their customer service is attentive,
              responsive and fast. I never had to wait over 5mins before
              receiving a reply.
            </p>
            <div class="btm">
              <div class="author">
                <div class="name">Osagie</div>
                <img src="../assets/images/svg/stars.svg" alt="" />
              </div>
              <img src="../assets/images/png/inverted-comma.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  background: var(--Grey-0, #050410);
  padding: 4rem 0px;
  color: #fff;
  .content {
    width: 90%;
    margin: 0 auto;
    .intro {
      text-align: center;

      h2 {
        font-size: 1.5rem;
        font-family: "Clash Display";
      }
      .subheader {
        font-family: Satoshi;
        color: #fff;
        font-weight: 600;
      }
    }
    .testimonialCarousel {
      width: 100%;
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      margin-top: 2rem;
      gap: 1.5rem;
      &::-webkit-scrollbar {
        height: 0px;
      }
      .testimonial {
        border-radius: var(--small, 1rem);
        background: var(--Grey-1, #2e2f35);
        // width: fit-content;
        height: 15rem;
        min-width: 30rem;
        max-width: 30rem;
        padding: 1rem 0px;
        .content {
          height: 100%;
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p {
            font-family: "Satoshi";
            line-height: 130%;
            font-family: Satoshi;
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 500;
          }
          .btm {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
