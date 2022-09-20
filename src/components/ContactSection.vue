<script setup></script>
<template>
  <div class="contactSectionIn">
    <h4>Hey we want to hear from you?</h4>
    <div class="contentSect">
      <div class="imgSect">
        <img src="../assets/images/mailMan.svg" alt="" />
        <p>
          We would love to hear from you, you could use our social links listed
          below or you could contact use using the contact from. We would get
          back to you immediately
        </p>
        <div class="linkRow">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/Facebook.svg" alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/Twitter.svg" alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/Instagram.svg" alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/whatsapp.svg" alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/Gmail.svg" alt="" />
          </a>
        </div>
      </div>
      <form>
        <div class="firstRow">
          <div class="formGroup">
            <p>First Name</p>
            <input type="text" />
          </div>
          <div class="formGroup">
            <p>Last Name</p>
            <input type="text" />
          </div>
        </div>
        <div class="formGroup">
          <p>Email</p>
          <input type="email" name="" id="" />
        </div>
        <div class="formGroup">
          <p>What can we help you with?</p>
          <textarea name="" id="" rows="8"></textarea>
        </div>
        <button type="submit">Talk to us</button>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contactSectionIn {
  width: 70%;
  margin: 0px auto;
  h4 {
    color: #11496a;
    font-size: 28px;
    font-weight: bold;
  }
  .contentSect {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    align-items: stretch;
    .imgSect {
      display: flex;
      flex-direction: column;
      img {
        max-height: 250px;
        align-self: flex-start;
      }
      .linkRow {
        display: flex;
        flex-direction: row;
        gap: 16px;
        a {
          img {
            width: 32px;
            height: 32px;
          }
        }
      }
    }
    form {
      width: 90%;
      .formGroup {
        margin: 8px 0;
        justify-items: end;
        p {
          margin: 8px 0px;
        }
        input,
        textarea {
          padding: 8px 16px;
          border-radius: 4px;
          outline: none;
          border: 1px solid #0471a6;
          font-size: 18px;
          width: 90%;
        }
      }
      .firstRow {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        input {
          width: 80%;
        }
      }
      button {
        background-color: #0471a6;
        width: 97.5%;
        height: fit-content;
        padding: 12px 0px;
        border: none;
        font-weight: bold;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
        // font-size: 18px;
      }
    }
  }
}
</style>
