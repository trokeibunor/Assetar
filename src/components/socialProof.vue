<template>
  <section>
    <h4 class="intro">We actively trade on these platforms</h4>
    <div class="image-row">
      <!-- <img
        src="https://cdn.brandfetch.io/idChRKdWP4/w/512/h/512/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
        alt=""
      /> -->
      <img
        src="https://cdn.brandfetch.io/id8fwcm2BN/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
        alt=""
      />
      <img
        src="https://cdn.brandfetch.io/id_9cjxPXk/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
        alt=""
      />
      <img src="../assets/svgs/exodus-seeklogo.svg" alt="" />
      <img
        src="https://cdn.brandfetch.io/idChRKdWP4/w/512/h/512/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
        alt=""
      />
      <img
        src="https://cdn.brandfetch.io/id_HKIytUb/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
        alt=""
      />
      <img src="../assets/svgs/Trust_Wallet_Core_Logo_Blue.svg" alt="" />
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "/src/assets/styles/partials/variables" as v;
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
    width: 150px;
  }
  @media #{v.$media-mobile} {
    .image-row {
      width: 100%;
      position: relative;
      overflow: scroll;
    }
  }
}
</style>
