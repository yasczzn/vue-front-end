<template>
    <div class="login">
      <section class="rectangle-parent" id="login" lineOnTouch="true">
        <div class="group-child" />
        <div class="group-item" />
        <div class="group-inner" />
        <div class="rectangle-div" />
        <div class="group-child1" />
        <div class="group-child2" />
        <div class="group-child3" />
        <div class="group-child4" />
        <div class="group-child5" />
        <div class="group-child6" />
        <div class="group-child7" />
        <div class="group-child8" />
        <div class="group-child9" />
      </section>
      <div class="rectangle-group">
        <div class="group-child10" />
        <div class="copyright-2023">Copyright 2023</div>
        <div class="dont-have-account-container">
          <span>Don't have account? </span>
          <span class="join-us-now">Join us now.</span>
        </div>
        <button class="rectangle-container" id="login" formmethod="get">
          <div class="group-child11" />
          <div class="login1">Login</div>
        </button>
        <div class="group-div">
          <input
            class="rectangle-input"
            type="text"
            defaultValue=""
            maxlength="20"
            minlength="4"
            required
            autofocus
            id="login"
          />
          <div class="username">Username</div>
        </div>
        <div class="rectangle-parent1">
          <input
            class="rectangle-input"
            type="text"
            defaultValue=""
            maxlength="20"
            minlength="4"
            autofocus
            id="login"
          />
          <div class="username">Password</div>
        </div>
        <div class="be-the-part">
          Be the part of the largest work management platform
        </div>
      </div>
      <h1 class="logo" id="login">Co_<br>per<br>ate</h1>
    </div>
  </template>
  <script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Login",
  });
</script>
<style scoped>
  .group-child {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 15.51rem;
    height: 17.4rem;
  }
  .group-item {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 18.5rem;
    height: 20.3rem;
  }
  .group-inner {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 21.48rem;
    height: 23.19rem;
  }
  .rectangle-div {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 24.46rem;
    height: 26.09rem;
  }
  .group-child1 {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 27.45rem;
    height: 28.99rem;
  }
  .group-child2 {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 30.43rem;
    height: 31.89rem;
  }
  .group-child3 {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 33.41rem;
    height: 34.79rem;
  }
  .group-child4 {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 36.4rem;
    height: 37.69rem;
  }
  .group-child5 {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 39.38rem;
    height: 40.59rem;
  }
  .group-child6 {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 42.36rem;
    height: 43.49rem;
  }
  .group-child7 {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 45.35rem;
    height: 46.39rem;
  }
  .group-child8 {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 48.33rem;
    height: 49.29rem;
  }
  .group-child9 {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 0px 0px var(--br-xl) 0px;
    border: 2px solid var(--white);
    box-sizing: border-box;
    width: 51.31rem;
    height: 52.19rem;
  }
  .rectangle-parent {
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 51.31rem;
    height: 52.19rem;
  }
  .group-child10 {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 2px;
    background-color: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 21.56rem;
    height: 41.25rem;
  }
  .copyright-2023 {
    position: absolute;
    top: 31.44rem;
    left: calc(50% - 40.79px);
    display: inline-block;
    width: 5.1rem;
    height: 1rem;
  }
  .join-us-now {
    color: var(--orange-btn);
  }
  .dont-have-account-container {
    position: absolute;
    top: 24.88rem;
    left: calc(50% - 90.5px);
    display: inline-block;
    width: 11.38rem;
    height: 1rem;
  }
  .group-child11 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: var(--br-8xs);
    background-color: var(--orange-btn);
  }
  .login1 {
    position: absolute;
    top: 0.81rem;
    left: 3.75rem;
    font-size: var(--btn-text-size);
    font-weight: 500;
    font-family: var(--btn-text);
    color: var(--white);
    text-align: center;
    display: inline-block;
    width: 10.75rem;
    height: 1.25rem;
  }
  .rectangle-container {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: absolute;
    height: 7.27%;
    width: 84.06%;
    top: 64.85%;
    right: 8.12%;
    bottom: 27.88%;
    left: 7.83%;
  }
  .rectangle-input {
    border: none;
    background-color: var(--white-txt);
    position: absolute;
    height: 60.61%;
    width: 100%;
    top: 39.39%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: var(--br-8xs);
  }
  .username {
    position: absolute;
    top: 0rem;
    left: 0rem;
    font-weight: 500;
    display: inline-block;
    width: 5.31rem;
    height: 1.25rem;
  }
  .group-div {
    position: absolute;
    height: 10%;
    width: 84.1%;
    top: 31.67%;
    right: 7.78%;
    bottom: 58.33%;
    left: 8.12%;
    font-size: var(--btn-text-size);
    font-family: var(--btn-text);
  }
  .rectangle-parent1 {
    position: absolute;
    height: 10%;
    width: 84.1%;
    top: 44.7%;
    right: 8.07%;
    bottom: 45.3%;
    left: 7.83%;
    font-size: var(--btn-text-size);
    font-family: var(--btn-text);
  }
  .be-the-part {
    position: absolute;
    top: 7.75rem;
    left: 1rem;
    text-transform: uppercase;
    font-family: var(--font-lexend-zetta);
    display: inline-block;
    width: 19.13rem;
    height: 2.44rem;
  }
  .rectangle-group {
    position: absolute;
    top: 0rem;
    left: 49.56rem;
    width: 21.56rem;
    height: 41.25rem;
  }
  .logo {
    margin: 0;
    position: absolute;
    top: 2.38rem;
    left: 2.38rem;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 400;
    font-family: var(--font-lexend-zetta);
    color: var(--white);
    display: inline-block;
    width: 8.81rem;
    height: 3.5rem;
  }
  .login {
    position: relative;
    background: linear-gradient(133.19deg, #c8f8ff, #1fa7e1);
    width: 100%;
    height: 41.25rem;
    text-align: center;
    font-size: var(--text-p-size);
    color: var(--grey-txt);
    font-family: var(--text-p);
  }
</style>