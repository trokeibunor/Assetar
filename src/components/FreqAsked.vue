<template>
  <div class="frequently">
    <div class="fqIntro">
      <h3>Frequently asked questions</h3>
      <p>
        We leave room for criticism and applause of our service, after every
        transaction we provide users, with the link to rate our service,
        independently . Here is what they had to say
      </p>
    </div>
    <div class="fqCon">
      <div class="fqBox">
        <p id="fqTitle">How do I get started</p>
      </div>
      <div class="fqBox">
        <p id="fqTitle">How do I get started</p>
      </div>
      <div class="fqBox">
        <p id="fqTitle">How do I get started</p>
      </div>
      <div class="fqBox">
        <p id="fqTitle">How do I get started</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.frequently {
  margin: 2rem 0px;
  padding: 2rem 0px;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin: 0 auto;
  .fqIntro {
    width: 50%;
    margin: 0px auto;
    text-align: center;
    h3 {
      font-size: 24px;
      font-weight: 600;
    }
  }
  .fqCon {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 2rem auto;
    .fqBox {
      margin: 1rem 0;
      padding: 8px 64px;
      border-radius: 4px;
      border: 1px solid #252525;
      cursor: pointer;
      #fqTitle {
        color: #065c86;
        font-weight: 600;
        font-size: 16px;
      }
    }
    .fqBox:hover {
      background-color: #5ec9ff;
      border: 1px solid #5ec9ff;
    }
  }
}
</style>
