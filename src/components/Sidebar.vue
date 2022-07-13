<template>
  <div class="sidebar-parent">
    <div
      :class="['sidebar-overlay', { open: active }]"
      @click="$emit('close')"
    ></div>
    <div :class="['sidebar', { open: active }]">
      <div class="wrapper">
        <div class="sidebar-menu-wrapper">
          <div class="menu-wrapper">
            <router-link class="menu" to="/" exact-active-class="active"
              >HOME</router-link
            >
            <router-link class="menu" to="/about" exact-active-class="active"
              >ABOUT US</router-link
            >
            <router-link class="menu" to="/services" exact-active-class="active"
              >SERVICES</router-link
            >
            <router-link
              class="menu"
              to="/portfolio"
              exact-active-class="active"
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
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      categoryStatus: false,
      subjectStatus: false,
      ageStatus: false,

      ex4: ["success", "success", "success"],

      models: {
        base: false,
        conditional: false,
      },
    };
  },
  props: {
    active: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-parent {
  position: relative;
  z-index: 9999999;
}

.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  &.open {
    display: block;
  }
}
.sidebar {
  background: #ffffff;
  position: fixed;
  right: 0;
  left: 65%;
  min-height: 100vh;
  display: none;
  transform: translateX(100%);
  transition: all 0.4s;
  z-index: 2222222;
  &.open {
    transform: translateX(0%);
  }

  @include breakpoint(md) {
    display: block;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    position: relative;
  }

  &-menu-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
  }

  .filter-price {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e0e0e0;

    &-icon {
      padding: 7px 16px 7px 16px;
    }

    &-body {
      p {
        font-family: "Lato";
        font-size: 15px;
        line-height: 17px;
        padding: 10px 5px 10px 11px;
        margin: 0;
        color: #414141;
        border-bottom: 1px solid #e0e0e0;

        &:first-child {
          border-top: 1px solid #e0e0e0;
        }
      }
    }

    &.open {
      .filter-price-body {
        display: block;
      }

      .filter-price-icon {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }

  .filter-price-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    gap: 5px;

    .sidebar-button {
      font-family: "Lato";
      font-size: 15px;
      line-height: 27px;
      text-transform: capitalize;
      color: #1d1d1d;
      text-decoration: none;
    }
  }

  .filter-price-body {
    display: none;
    transition: all 0.3s;
  }

  .close-icon {
    position: absolute;
    right: 5px;
    top: 0px;
  }

  .language-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px 7px 10px;

    p {
      font-family: "Lato";
      font-size: 14px;
      color: #414141;
      margin: 0;
    }

    .choose-lang {
      font-family: "Lato";
      font-size: 14px;
      line-height: 17px;
      color: #1a4900;
    }
  }
  .menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding-top: 30px;
  }
  .menu {
    font-family: "Seg";
    font-size: 15px;
    color: #000000;
    text-align: center;
    text-decoration: none;
  }
}
</style>
