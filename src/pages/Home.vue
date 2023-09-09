<template>
  <div class="home">
    <nav class="home-child" id="home-nav" />
    <section class="home-item" />
    <div class="home-inner" />
    <h1 class="co-perate" id="logo">Co_perate</h1>
    <img class="vector-icon" alt="" src="/vector-1.svg" />
    <img class="home-child1" alt="" src="/vector-1.svg" />
    <img class="home-child2" alt="" src="/vector-1.svg" />
    <img class="group-icon" alt="" src="/group-6.svg" />
    <div class="home1">
      <img class="vector-icon1" alt="" src="/vector.svg" />
      <div class="home2">Home</div>
    </div>
    <div class="projects">
      <img class="vector-icon2" alt="" src="/vector1.svg" />
      <div class="home2">Projects</div>
    </div>
    <div class="my-task">
      <img class="vector-icon3" alt="" src="/vector2.svg" />
      <div class="home2">My Task</div>
    </div>
    <div class="portfolio">
      <img class="vector-icon4" alt="" src="/vector3.svg" />
      <div class="home2">Portfolio</div>
    </div>
    <div class="my-workspace">
      <img class="group-icon1" alt="" src="/group.svg" />
      <div class="home2">My Workspace</div>
    </div>
    <div class="milestone">
      <img class="vector-icon5" alt="" src="/vector4.svg" />
      <div class="home2">Milestone</div>
    </div>
    <div class="settings">
      <img class="vector-icon6" alt="" src="/vector5.svg" />
      <div class="home2">Settings</div>
    </div>
    <img class="profile-icon" alt="" src="/profile.svg" :onClick="openFrame" />
    <div class="welcome-back-user-parent">
      <h1 class="welcome-back-user" id="login">Welcome back, user!</h1>
      <h1 class="your-progress-in" id="login">your progress in 9 september</h1>
    </div>
    <section class="table" id="home-table">
      <div class="div">
        <div class="frame-parent">
          <div class="show-parent">
            <div class="show">Show</div>
            <div class="parent">
              <div class="show">5</div>
              <img
                class="bicaret-down-fill-icon"
                alt=""
                src="/bicaretdownfill.svg"
              />
            </div>
            <div class="show">entries</div>
          </div>
          <div class="akar-iconssearch-parent">
            <img class="akar-iconssearch" alt="" src="/akariconssearch.svg" />
            <div class="search">Search...</div>
          </div>
          <button class="fluentadd-16-filled-parent" autofocus id="home-add">
            <img class="akar-iconssearch" alt="" src="/fluentadd16filled.svg" />
            <b class="add-customer">Add Customer</b>
          </button>
        </div>
      </div>
      <div class="table1">
        <div class="frame-group">
          <div class="tracking-id-wrapper">
            <b class="tracking-id">Tracking ID</b>
          </div>
          <div class="customer-parent">
            <b class="tracking-id">Customer</b>
            <img class="akar-iconssearch" alt="" src="/bxssortalt.svg" />
          </div>
          <div class="date-parent">
            <b class="tracking-id">Date</b>
            <img class="akar-iconssearch" alt="" src="/bxssortalt1.svg" />
          </div>
          <div class="amount-wrapper">
            <b class="tracking-id">Amount</b>
          </div>
          <div class="amount-wrapper">
            <b class="tracking-id">Payment Mode</b>
          </div>
          <div class="customer-parent">
            <b class="tracking-id">Status</b>
            <img class="akar-iconssearch" alt="" src="/bxssortalt2.svg" />
          </div>
          <div class="tracking-id-wrapper">
            <b class="tracking-id">Action</b>
          </div>
        </div>
        <div class="frame-container">
          <div class="tracking-id-wrapper">
            <div class="search">#20462</div>
          </div>
          <div class="matt-dickerson-wrapper">
            <div class="search">Matt Dickerson</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">13/05/2022</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">$4.95</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">Tranfer Bank</div>
          </div>
          <div class="frame-wrapper">
            <h4 class="delivered-wrapper" id="home-ket">
              <div class="show">Delivered</div>
            </h4>
          </div>
          <div class="frame-div">
            <div class="edit-1-2-parent">
              <img class="trash-2-2-icon" alt="" src="/edit-1-2.svg" />
              <img class="trash-2-2-icon" alt="" src="/trash2-2.svg" />
            </div>
          </div>
        </div>
        <div class="frame-group">
          <div class="tracking-id-wrapper">
            <div class="search">#18933</div>
          </div>
          <div class="matt-dickerson-wrapper">
            <div class="search">Wiktoria</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">22/05/2022</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">$8.95</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">Cash on Delivery</div>
          </div>
          <div class="frame-wrapper">
            <h4 class="delivered-wrapper" id="home-ket">
              <div class="show">Delivered</div>
            </h4>
          </div>
          <div class="frame-div">
            <div class="edit-1-2-parent">
              <img class="trash-2-2-icon" alt="" src="/edit-1-21.svg" />
              <img class="trash-2-2-icon" alt="" src="/trash2-21.svg" />
            </div>
          </div>
        </div>
        <div class="frame-container">
          <div class="tracking-id-wrapper">
            <div class="search">#45169</div>
          </div>
          <div class="matt-dickerson-wrapper">
            <div class="search">Trixie Byrd</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">15/06/2022</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">$1,149.95</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">Cash on Delivery</div>
          </div>
          <div class="frame-wrapper3">
            <h4 class="process-wrapper" id="home-ket">
              <div class="show">Process</div>
            </h4>
          </div>
          <div class="frame-div">
            <div class="edit-1-2-parent">
              <img class="trash-2-2-icon" alt="" src="/edit-1-21.svg" />
              <img class="trash-2-2-icon" alt="" src="/trash2-21.svg" />
            </div>
          </div>
        </div>
        <div class="frame-group">
          <div class="tracking-id-wrapper">
            <div class="search">#34304</div>
          </div>
          <div class="matt-dickerson-wrapper">
            <div class="search">Brad Mason</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">06/09/2022</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">$899.95</div>
          </div>
          <div class="amount-wrapper">
            <div class="search">Tranfer Bank</div>
          </div>
          <div class="frame-wrapper3">
            <h4 class="process-wrapper" id="home-ket">
              <div class="show">Process</div>
            </h4>
          </div>
          <div class="frame-div">
            <div class="edit-1-2-parent">
              <img class="trash-2-2-icon" alt="" src="/edit-1-21.svg" />
              <img class="trash-2-2-icon" alt="" src="/trash2-21.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="div14">
        <div class="show-parent">
          <div class="previous">Previous</div>
          <div class="wrapper10">
            <div class="div15">1</div>
          </div>
          <div class="wrapper11">
            <div class="div15">2</div>
          </div>
          <div class="wrapper11">
            <div class="div15">3</div>
          </div>
          <div class="previous">Next</div>
        </div>
      </div>
    </section>
    <div class="copyright-2023">Copyright 2023</div>
  </div>
  <div v-if="isFrameOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeFrame"
    >
      <frame :onClose="closeFrame" />
    </PortalPopup>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";
  import Frame from "../components/Frame.vue";
  import PortalPopup from "../components/PortalPopup.vue";

  export default defineComponent({
    name: "Home",
    data() {
      return { isFrameOpen: false };
    },
    components: { Frame, PortalPopup },
    methods: {
      openFrame() {
        this.isFrameOpen = true;
      },
      closeFrame() {
        this.isFrameOpen = false;
      },
    },
  });
</script>
<style scoped>
  .home-child {
    margin: 0;
    position: absolute;
    width: 78.75%;
    top: 0rem;
    right: 0%;
    left: 21.25%;
    background-color: var(--color-white);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    height: 6.38rem;
  }
  .home-item {
    position: absolute;
    top: 50.69rem;
    left: 0.06rem;
    background-color: var(--whale);
    width: 79.94rem;
    height: 14.25rem;
  }
  .home-inner {
    position: absolute;
    top: 0rem;
    left: 0rem;
    background-color: var(--blue-btn);
    width: 17rem;
    height: 64.94rem;
  }
  .co-perate {
    margin: 0;
    position: absolute;
    top: 1.81rem;
    left: 2rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    font-family: var(--font-lexend-zetta);
    color: var(--white);
    text-align: center;
    display: inline-block;
    width: 13rem;
    height: 1.94rem;
  }
  .vector-icon {
    position: absolute;
    top: 6.34rem;
    left: 3.75rem;
    width: 9.5rem;
    height: 0.06rem;
  }
  .home-child1 {
    position: absolute;
    top: 18.09rem;
    left: 3.75rem;
    width: 9.5rem;
    height: 0.06rem;
  }
  .home-child2 {
    position: absolute;
    top: 29.84rem;
    left: 3.75rem;
    width: 9.5rem;
    height: 0.06rem;
  }
  .group-icon {
    position: absolute;
    height: 3.67%;
    top: 3.08%;
    bottom: 93.25%;
    left: calc(50% + 227px);
    max-height: 100%;
    width: 16.81rem;
  }
  .home2 {
    position: relative;
    height: 100%;
    width: 100%;
    top: 0%;
    left: 0%;
    letter-spacing: 0.25em;
    display: flex;
    align-items: center;
  }
  .rectangle-div {
    position: absolute;
    top: 0rem;
    left: 0rem;
    background-color: var(--color-gray);
    width: 16.94rem;
    height: 3.25rem;
  }
  .vector-icon1 {
    position: absolute;
    height: 32.69%;
    width: 7.38%;
    top: 26.92%;
    right: 79.34%;
    bottom: 40.38%;
    left: 13.28%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .home1 {
    position: absolute;
    justify-content: space-around;
    top: 7.38rem;
    left: 0.06rem;
    width: 16.94rem;
    height: 3.25rem;
  }
  .vector-icon2 {
    position: absolute;
    height: 36.54%;
    width: 7.01%;
    top: 31.73%;
    right: 79.15%;
    bottom: 31.73%;
    left: 13.84%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .projects {
    position: absolute;
    top: 19.13rem;
    left: 0rem;
    width: 16.94rem;
    height: 3.25rem;
  }
  .vector-icon3 {
    position: absolute;
    height: 38.46%;
    width: 6.65%;
    top: 30.77%;
    right: 79.33%;
    bottom: 30.77%;
    left: 14.02%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .my-task {
    position: absolute;
    top: 10.63rem;
    left: 0.06rem;
    width: 16.94rem;
    height: 3.25rem;
  }
  .vector-icon4 {
    position: absolute;
    height: 26.92%;
    width: 7.3%;
    top: 32.69%;
    right: 79.42%;
    bottom: 40.38%;
    left: 13.28%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .portfolio {
    position: absolute;
    top: 22.38rem;
    left: 0rem;
    width: 16.94rem;
    height: 3.25rem;
  }
  .group-icon1 {
    position: absolute;
    height: 28.85%;
    width: 5.9%;
    top: 34.62%;
    right: 79.34%;
    bottom: 36.54%;
    left: 14.76%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .my-workspace {
    position: absolute;
    top: 25.63rem;
    left: 0.06rem;
    width: 16.94rem;
    height: 3.25rem;
  }
  .vector-icon5 {
    position: absolute;
    height: 42.31%;
    width: 8.11%;
    top: 26.92%;
    right: 78.98%;
    bottom: 30.77%;
    left: 12.92%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .milestone {
    position: absolute;
    top: 13.88rem;
    left: 0.06rem;
    width: 16.94rem;
    height: 3.25rem;
  }
  .vector-icon6 {
    position: absolute;
    height: 38.46%;
    width: 7.18%;
    top: 25%;
    right: 79.44%;
    bottom: 36.54%;
    left: 13.38%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .settings {
    position: absolute;
    top: 30.88rem;
    left: 0rem;
    width: 16.94rem;
    height: 3.25rem;
  }
  .profile-icon {
    position: absolute;
    top: 2rem;
    left: calc(50% + 521px);
    width: 4.06rem;
    height: 2.38rem;
    cursor: pointer;
  }
  .welcome-back-user {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
  }
  .your-progress-in {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: var(--h22-size);
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    height: 1.25rem;
    flex-shrink: 0;
  }
  .welcome-back-user-parent {
    position: absolute;
    width: 43.05%;
    top: 10.88rem;
    right: 19.1%;
    left: 37.85%;
    height: 4.63rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    text-align: center;
    font-size: 2rem;
    color: var(--grey-txt);
    font-family: var(--font-lexend-zetta);
  }
  .show {
    position: relative;
    font-weight: 500;
  }
  .bicaret-down-fill-icon {
    position: relative;
    width: 0.5rem;
    height: 0.5rem;
    overflow: hidden;
    flex-shrink: 0;
  }
  .parent {
    border-radius: var(--br-5xs);
    background-color: var(--color-gainsboro);
    display: flex;
    flex-direction: row;
    padding: var(--padding-5xs) var(--padding-4xs);
    align-items: center;
    justify-content: flex-start;
    gap: 0.25rem;
  }
  .show-parent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xs);
  }
  .akar-iconssearch {
    position: relative;
    width: 1rem;
    height: 1rem;
    overflow: hidden;
    flex-shrink: 0;
  }
  .search {
    flex: 1;
    position: relative;
    font-weight: 500;
  }
  .akar-iconssearch-parent {
    flex: 1;
    border-radius: var(--br-5xs);
    border: 1px solid var(--color-darkgray);
    display: flex;
    flex-direction: row;
    padding: var(--padding-5xs) var(--padding-4xs);
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    color: var(--color-darkgray);
  }
  .add-customer {
    position: relative;
    font-size: var(--text-p-size);
    font-family: var(--font-montserrat);
    color: var(--color-white);
    text-align: left;
  }
  .fluentadd-16-filled-parent {
    cursor: pointer;
    border: none;
    padding: var(--padding-5xs) var(--padding-xs);
    background-color: var(--orange);
    border-radius: var(--br-5xs);
    width: 8.69rem;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xs);
  }
  .frame-parent {
    width: 59.19rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .div {
    background-color: var(--color-white);
    width: 61.31rem;
    display: flex;
    flex-direction: row;
    padding: var(--padding-base);
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-start;
  }
  .tracking-id {
    flex: 1;
    position: relative;
  }
  .tracking-id-wrapper {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
  }
  .customer-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .date-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.44rem;
  }
  .amount-wrapper {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .frame-group {
    align-self: stretch;
    background-color: var(--color-white);
    display: flex;
    flex-direction: row;
    padding: var(--padding-base);
    align-items: center;
    justify-content: center;
    gap: var(--gap-base);
  }
  .matt-dickerson-wrapper {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .delivered-wrapper {
    margin: 0;
    border-radius: var(--br-3xl);
    background-color: var(--color-mintcream);
    display: flex;
    flex-direction: row;
    padding: var(--padding-5xs) var(--padding-xs);
    align-items: center;
    justify-content: center;
    font-size: inherit;
    font-family: inherit;
  }
  .frame-wrapper {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--text-p-size);
    color: var(--color-seagreen);
  }
  .trash-2-2-icon {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
    flex-shrink: 0;
  }
  .edit-1-2-parent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .frame-div {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .frame-container {
    align-self: stretch;
    background-color: var(--color-ghostwhite);
    display: flex;
    flex-direction: row;
    padding: var(--padding-base);
    align-items: center;
    justify-content: center;
    gap: var(--gap-base);
  }
  .process-wrapper {
    margin: 0;
    border-radius: var(--br-3xl);
    background-color: var(--color-linen);
    display: flex;
    flex-direction: row;
    padding: var(--padding-5xs) var(--padding-xs);
    align-items: center;
    justify-content: center;
    font-size: inherit;
    font-family: inherit;
  }
  .frame-wrapper3 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--text-p-size);
    color: var(--color-chocolate);
  }
  .table1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--btn-text-size);
  }
  .previous {
    position: relative;
    font-weight: 500;
    text-align: left;
  }
  .div15 {
    position: relative;
    font-weight: 500;
    display: inline-block;
    width: 0.81rem;
    height: 0.94rem;
    flex-shrink: 0;
  }
  .wrapper10 {
    border-radius: var(--br-5xs);
    background-color: var(--orange);
    display: flex;
    flex-direction: row;
    padding: var(--padding-5xs) var(--padding-4xs);
    align-items: center;
    justify-content: flex-start;
    color: var(--color-white);
  }
  .wrapper11 {
    border-radius: var(--br-5xs);
    background-color: var(--color-gainsboro);
    display: flex;
    flex-direction: row;
    padding: var(--padding-5xs) var(--padding-4xs);
    align-items: center;
    justify-content: flex-start;
    color: var(--color-black);
  }
  .div14 {
    align-self: stretch;
    background-color: var(--color-white);
    display: flex;
    flex-direction: row;
    padding: var(--padding-base);
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--color-darkgray);
  }
  .table {
    position: absolute;
    width: 76.8%;
    top: 19.38rem;
    right: 1.48%;
    left: 21.72%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    font-size: var(--text-p-size);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .copyright-2023 {
    position: absolute;
    top: 57.31rem;
    left: calc(50% + 131px);
    font-size: var(--text-p-size);
    font-family: var(--text-p);
    color: var(--white);
    text-align: center;
    display: inline-block;
    width: 5.1rem;
    height: 1rem;
  }
  .home {
    position: relative;
    background-color: var(--white);
    width: 100%;
    height: 64.94rem;
    text-align: left;
    font-size: var(--h22-size);
    color: var(--color-white);
    font-family: var(--btn-text);
  }
</style>