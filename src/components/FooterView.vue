<script setup></script>
<template>
  <div class="footer">
    <div class="footer_content">
      <div class="footer_contact">
        <p class="footer_header">Contact</p>
        <ul>
          <li>
            <img src="../assets/images/phone_icon.svg" alt="" />
            <a href="tel:+234 9015379412">+234 9015379412</a>
          </li>
          <li>
            <img src="../assets/images/mail_icon.svg" alt="" />
            <a href="mailto:okeibunoremma@gmail.com">okeibunoremma@gmail.com</a>
          </li>
          <li>
            <img src="../assets/images/location_icon.svg" alt="" />
            <p>
              One of those places you really want to be at the end of a very
              long day.
            </p>
          </li>
        </ul>
      </div>
      <div class="footer_links">
        <p class="footer_header">Links</p>
        <ul>
          <li><a href="">Frequently Asked Question</a></li>
          <li><a href="">How we Operate</a></li>
          <li><a href="">Tokens</a></li>
          <li><a href="">Our Story</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer_sub">
        <p class="footer_header">Subscribe to our Emailing List</p>
        <form>
          <input type="email" name="" id="" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <div class="copyright">ASSESTAR 2022 &COPY; All rights reserved.</div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #0471a6;
  color: #fff;
  padding: 2rem 0px;
  .footer_content {
    width: 80%;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 30% 30% 40%;
    ul {
      margin: 0px;
      padding: 0px;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      li {
        margin: 8px 0px;
        display: flex;
        flex-direction: row;
        gap: 4px;
        a {
          font-size: 18px;
          text-decoration: none;
          color: #fff;
          line-height: 120%;
        }
        p {
          margin: 0px;
        }
      }
    }
    form {
      width: 100%;
      input {
        width: 100%;
        padding: 10px 0px 10px 8px;
        outline: none;
        border: none;
        border-radius: 4px;
        height: fit-content;
        margin-bottom: 8px;
      }
      button {
        width: fit-content;
        height: fit-content;
        padding: 8px 18px;
        font-weight: bold;
        border-radius: 4px;
        outline: none;
        border: none;
        background-color: #84cbff;
        color: #fff;
      }
    }
  }
  .copyright {
    width: 100%;
    text-align: center;
    margin: 2rem 0px 1rem;
  }
}
.footer_header {
  font-weight: bold;
  font-size: 20px;
}
</style>
