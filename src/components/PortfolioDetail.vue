<template>
  <div class="portfolio-detail">
    <div class="detail-img">
      <img :src="imgUrl" alt="" />
      <h6 class="detail-title">{{ title }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio-detail {
  width: 100%;

  .detail-img {
    position: relative;
    width: 100%;
    height: 435px;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: #000;
      opacity: 0;
      z-index: 1;
    }

    &:hover {
      &::after {
        opacity: 0.5;
        transition: all 0.3s;
      }

      .detail-title {
        opacity: 1;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .detail-title {
    font-family: "Arial";
    font-size: 24px;
    color: #ffffff;
    position: absolute;
    white-space: nowrap;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 2;
    opacity: 0;

    @include breakpoint(md) {
      font-size: 20px;
    }

    @include breakpoint(sm) {
      font-size: 15px;
    }
  }
}
</style>
