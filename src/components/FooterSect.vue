<template>
  <footer>
    <div class="list_row">
      <div class="ftContact">
        <h5>Contact Us</h5>
        <ul>
          <li>
            <a href="tel:+2348034460010">
              <!-- <img src="../assets/images/phone_icon.svg" alt="" /> -->
              +2348034460010</a
            >
          </li>
          <li>
            <a href="mailto:assetar.co@gmail.com">
              <!-- <img
                src="../assets/images/mail_ftIcon.svg"
                alt=""
              /> -->
              assetar.co@gmail.com
            </a>
          </li>
          <!-- <li>
            <img src="../assets/images/location_pin.svg" alt="" />
            One of those places you want to be at the end of a long day
          </li> -->
        </ul>
      </div>
      <div class="ftlinks">
        <h5>Social Links</h5>
        <ul>
          <li>
            <a
              href="https://youtube.com/@assetar_co?si=p1AVedcAM-HS8IOt"
              target="_blank"
              >Youtube</a
            >
          </li>
          <li>
            <a
              href="https://instagram.com/assetar.co?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              >Instagram</a
            >
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@assetar.co?_t=8bwxxyherd7&_r=1"
              target="_blank"
              >Tiktok</a
            >
          </li>
          <li>
            <a
              href="https://twitter.com/co_assetar?t=NW1lulxHUcHmUeUchXNx1A&s=09"
              target="_blank"
              >X (Twitter)</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="copyRight">copyright &copy; AssetarExchange 2022.</div>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
// @import "../assets/variables.scss";
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
footer {
  width: 100%;
  .list_row {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    div {
      h5 {
        font-size: 18px;
        font-weight: bold;
        font-family: "Clash Display";
      }
      ul {
        img {
          width: 24px;
        }
        li,
        a {
          display: flex;
          gap: 8px;
          align-items: center;
          font-weight: 600;
          //   justify-content: center;
          cursor: pointer;
          a {
            text-decoration: none;
            color: var(--Grey-3, #7d7e7f);
          }
        }
        li {
          margin: 12px 0px;
        }
      }
    }
  }

  .copyRight {
    width: 100%;
    background-image: url(../assets/images/top-info.png);
    text-align: center;
    color: #fff;
    padding: 2rem 0px;
    margin-top: 4rem;
    // border-radius: 40px 40px 0px 0px;
    font-family: "Clash Display";
  }
  @media #{$media-mobile} {
    .list_row {
      flex-direction: column;
    }
    .copyRight {
      border-radius: 16px 16px 0px 0px;
    }
  }
}
</style>
