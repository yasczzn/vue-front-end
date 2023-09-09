<template>
  <div class="settings-parent">
    <div class="settings1">Settings</div>
    <router-link to="/" class="log-out">Log Out</router-link>
    <img class="frame-child" alt="" src="/vector-2.svg" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Frame",
    props: {
      onClose: { type: Function },
    },
  });
</script>
<style scoped>
  .settings1 {
    position: absolute;
    top: 0.94rem;
    left: 0rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9.69rem;
    height: 2.38rem;
  }
  .log-out {
    position: absolute;
    top: 3.31rem;
    left: 0rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9.69rem;
    height: 2.38rem;
  }
  .frame-child {
    position: absolute;
    top: 3.3rem;
    left: 1.19rem;
    width: 7.38rem;
    height: 0.03rem;
  }
  .settings-parent {
    position: relative;
    border-radius: 20px;
    background-color: var(--color-white);
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
    width: 9.69rem;
    height: 6.75rem;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    text-align: center;
    font-size: var(--btn-text-size);
    color: var(--grey-txt);
    font-family: var(--btn-text);
  }
</style>
