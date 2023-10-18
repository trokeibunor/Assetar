<template>
  <div class="tokenHolder">
    <div class="tokenContent">
      <div class="ls">
        <h3>How do I start trading with asseter ?</h3>
      </div>
      <div class="rs">
        <div class="lister">
          <img src="../assets/images/lister.svg" alt="" />
          <div class="list-holder">
            <div class="list">
              <h4>Decide which coin you want to trade</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                interdum duis nibh venenatis faucibus ullamcorper cras sagittis.
                Pellentac habitasse ut. Mattis amet imperdiet tristique tellus
              </p>
            </div>
            <div class="list">
              <h4>Decide which coin you want to trade</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                interdum duis nibh venenatis faucibus ullamcorper cras sagittis.
                Pellentac habitasse ut. Mattis amet imperdiet tristique tellus
              </p>
            </div>
            <div class="list">
              <h4>Decide which coin you want to trade</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                interdum duis nibh venenatis faucibus ullamcorper cras sagittis.
                Pellentac habitasse ut. Mattis amet imperdiet tristique tellus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.tokenHolder {
  color: #fff;
  width: 100%;
  height: auto;
  overflow: hidden;
  .tokenContent {
    width: 80%;
    margin: 0px auto;
    display: flex;
    gap: 1rem;
    .ls {
      width: 40%;
      color: #252525;
      h3 {
        font-size: 2rem;
        line-height: 120%;
      }
    }
    .rs {
      width: 60%;
      .lister {
        color: #252525;
        display: flex;
        gap: 1rem;
        .list-holder {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .list {
            h4,
            p {
              margin: 0;
              padding: 0;
            }
          }
        }
      }
    }
  }
}
@media #{$media-mobile} {
  .tokenHolder {
    // width: 90%;
    .tokenContent {
      width: 90%;
      flex-direction: column;
      .ls,
      .rs {
        width: 100%;
      }
    }
  }
}
</style>
