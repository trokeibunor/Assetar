<template>
  <div class="containerFreq">
    <h4>Frequently <span>Asked Questions</span></h4>
    <div class="contentList">
      <div class="question">
        <div class="titleList">
          <p>1. How do you guys Trade</p>
          <span class="material-symbols-rounded"> add </span>
        </div>
        <div class="content"></div>
      </div>
      <div class="question">
        <div class="titleList">
          <p>2. How do you guys Trade</p>
          <span class="material-symbols-rounded"> add </span>
        </div>
        <div class="content"></div>
      </div>
      <div class="question">
        <div class="titleList">
          <p>3. How do you guys Trade</p>
          <span class="material-symbols-rounded"> add </span>
        </div>
        <div class="content"></div>
      </div>
      <div class="question">
        <div class="titleList">
          <p>4. How do you guys Trade</p>
          <span class="material-symbols-rounded"> add </span>
        </div>
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.containerFreq {
  width: 100%;
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 32px;
    span {
      color: #0471a6;
    }
  }
  .titleList {
    background-color: #0471a6;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 8px;
    align-items: center;
    border-radius: 4px;
    font-weight: 600;
    margin: 8px 0;
  }
}
span {
  cursor: pointer;
}
</style>
