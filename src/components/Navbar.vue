<template>
  <div :class="[{ change_color: scrollPosition > 50 }, 'navbar']">
    <div class="container">
      <div class="navbar-wrapper">
        <div class="logo-wrapper">
          <img src="@/assets/img/logo.png" alt="" />
        </div>
        <div class="menu-wrapper">
          <router-link class="menu" to="/" exact-active-class="active"
            >HOME</router-link
          >
          <router-link class="menu" to="/about" exact-active-class="active"
            >ABOUT US</router-link
          >
          <router-link class="menu" to="/service" exact-active-class="active"
            >SERVICES</router-link
          >
          <router-link class="menu" to="/portfolio" exact-active-class="active"
            >PORTFOLIO</router-link
          >
          <router-link class="menu" to="/contact" exact-active-class="active"
            >CONTACT</router-link
          >
          <div class="language">
            <p class="ru">RU</p>
            <svg
              width="17"
              height="9"
              viewBox="0 0 17 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 0.5L8.5 8.5"
                stroke="black"
                stroke-linecap="round"
              />
              <path
                d="M16.5 0.5L8.5 8.5"
                stroke="black"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      scrollPosition: null,
      open: false,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  right: 0;
  left: 0;
  background: transparent;
  z-index: 11111;

  &.change_color {
    box-shadow: 0 0 10px #aaa;
    background: #ffffff;
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-wrapper {
    display: flex;
    align-items: center;
    gap: 52px;
  }
  .menu {
    font-family: "Seg";
    font-size: 15px;
    color: #000000;
    text-align: center;
    text-decoration: none;
    padding: 29px 0 22px 0;
    position: relative;

    &::before {
      display: block;
      content: attr(title);
      font-weight: bold;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }

    &:hover {
      color: #49d6cb;
      transition: all 0.3s;
    }

    &::after {
      content: "";
      position: absolute;
      right: 50%;
      left: 50%;
      bottom: 0;
      height: 3px;
      background-color: #49d6cb;
      transition: all 0.3s;
    }

    &:hover::after {
      right: -40%;
      left: -40%;
      transition: all 0.3s;
    }

    &.active {
      font-family: "Seg-bold";
      color: #49d6cb;
    }
  }

  .language {
    display: flex;
    align-items: center;
    gap: 4.5px;
    p {
      font-family: "Seg";
      font-size: 15px;
      line-height: 17px;
      color: #000000;
    }
  }
}
</style>
