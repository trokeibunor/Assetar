<template>
  <section>
    <h4 class="intro">We trade with these platforms</h4>
    <div class="image-row">
      <img src="../assets/images/svg/access.svg" alt="" />
      <img src="../assets/images/svg/barter.svg" alt="" />
      <img src="../assets/images/svg/cowerywise.svg" alt="" />
      <img src="../assets/images/svg/ehealth.svg" alt="" />
      <img src="../assets/images/svg/farmcrowdy.svg" alt="" />
      <img src="../assets/images/svg/uba.svg" alt="" />
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  background: var(--Grey-bglast, #f9fbfc);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  padding: 1rem;
  h4 {
    font-family: "Clash Display";
  }
  .image-row {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: space-evenly;
  }
  img {
    aspect-ratio: 16/4;
    object-fit: contain;
  }
  @media #{$media-mobile} {
    .image-row {
      width: 100%;
      position: relative;
      overflow: scroll;
    }
  }
}
</style>
