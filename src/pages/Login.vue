<template>
  <div class="login">
    <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
      <form class="login-form" id="login">
        <h4 class="logos" id="login">Co_perate</h4>
        <div class="be-the-part">
          Be the part of the largest work management platform
        </div>
        <div class="login-username">
          <div class="username">Username</div>
            <input v-model="emailLogin" class="login-input" type="text" required id="login"/>
        </div>
        <div class="login-password">
          <div class="username">Password</div>
            <input v-model="passwordLogin" class="login-input" type="password" autofocus id="login"/>
        </div>
        <div class="dont-have-account-container">
          <span>Don't have account? </span>
          <span class="join-us-now">Join us now.</span>
        </div>
        <router-link to="/home" type="submit" class="login-btn" id="login" @click="doLogin">Login</router-link>
        <div class="copyright-2023">Copyright 2023</div>
      </form>
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
  .login-form {
    position: absolute;
    width: calc(100% - 812px);
    top: 0rem;
    right: 10.13rem;
    left: 40.63rem;
    border-radius: 2px;
    background-color: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 41.25rem;
    display: flex;
    flex-direction: column;
    padding: 6.75rem 3.75rem;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-start;
    gap: 2.81rem;
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
  .login1 {
    position: static;
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
  .login-btn {
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
    border-radius: var(--br-8xs);
    background-color: var(--orange-btn);
    font-size: var(--btn-text-size);
    font-weight: 500;
    font-family: var(--btn-text);
    color: var(--white);
    text-align: center;
    display: inline-block;
  }
  .login-input {
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
  .login-username {
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
  .login-password {
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
    position: static;
    top: 7.75rem;
    left: 1rem;
    text-transform: uppercase;
    font-family: var(--font-lexend-zetta);
    display: inline-block;
    width: 19.13rem;
    height: 2.44rem;
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
  .logos {
    visibility: hidden;
  }
  .login {
    position: relative;
    background: linear-gradient(133.19deg, #a9f4ff, #1b9cd3);
    width: 100%;
    height: 41.25rem;
    text-align: center;
    font-size: var(--text-p-size);
    color: var(--grey-txt);
    font-family: var(--text-p);
  }
  .error {
   animation-name: errorShake;
   animation-duration: 0.3s;
  }

  @keyframes errorShake {
    0% {
        transform: translateX(-25px);
    }
    25% {
        transform: translateX(25px);
    }
    50% {
        transform: translateX(-25px);
    }
    75% {
        transform: translateX(25px);
    }
    100% {
        transform: translateX(0);
    }
  }



  /* responsive media */

  @media screen and (max-width: 576px) {
   nav{
       padding: 0px 40px;
   }
   nav .basic, nav .logOut{
       display: none;
   }
   nav .resp, nav .menu-toggle, nav .logo > img{
       z-index: 999;
   }
   nav .resp{
       display: flex;
       position: absolute;
       width: 100%;
       right: 0;
       top:0;
       left:0;
       background-color: #003049;
       flex-direction: column;
       align-items: center;
       height: 80vh;
       justify-content:space-evenly;
       transform: translateY(-100%);
       transition: all 1s;
   }
   nav .resp.slide{
       transform: translateY(0);
   }
   nav .resp li .logout-btn{
       background-color: none;
       box-shadow: none;
   }
   .menu-toggle{
       display: flex;
       flex-direction: column;
       justify-content: space-between;
   }
}

  @media (max-width: 600px) {
    .login-form {
    position: absolute;
    width: 100%;
    top: 0rem;
    right: 0rem;
    left: 0rem;
    background-color: var(--white);
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 6.75rem 3.75rem;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-start;
    gap: 2.81rem;
  }
  .logo {
    visibility: hidden;
  }
  .logos {
    visibility: visible;
    margin: 0;
    position: absolute;
    top: 2.38rem;
    left: 2.38rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 300;
    font-family: var(--font-lexend-zetta);
    display: flex;
    width: 5.81rem;
    height: 1.5rem;
  }
}

</style>
