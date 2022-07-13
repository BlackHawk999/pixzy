<template>
  <div class="contact-details">
    <div class="portfolio-header">
      <div class="portfolio-img-wrapper">
        <p class="header-title">Portfolio</p>
      </div>
    </div>
    <div class="contact-details-wrapper">
      <div class="contact-infos">
        <div class="adress-wrapper">
          <div class="adress-icon">
            <img src="@/assets/img/location-icon.svg" alt="" />
          </div>
          <p class="adress-title">Adress</p>
          <a
            class="link"
            href="http://https://www.google.com/maps/place/%D0%B4%D0%B2%D0%B5%D1%80%D0%B8+elporta/@41.3355118,69.29242,19.92z/data=!4m5!3m4!1s0x38aef545498aaef5:0xc70c624460aad226!8m2!3d41.3356076!4d69.292845"
            >Tashkent, Qazi Mahalla
          </a>
        </div>
        <div class="adress-wrapper">
          <div class="adress-icon">
            <img src="@/assets/img/call-icon.svg" alt="" />
          </div>
          <p class="adress-title">Phone Number</p>
          <a class="link" href="tel:++998 94 684 38145">+998 94 684 38145</a>
          <a class="link" href="tel:++998 94 684 38145">+998 94 684 38145</a>
          <a class="link" href="tel:++998 94 684 38145">+998 94 684 38145</a>
        </div>
        <div class="adress-wrapper">
          <div class="adress-icon">
            <img src="@/assets/img/email-icon.svg" alt="" />
          </div>
          <p class="adress-title">Email</p>
          <a class="link" href="mailto:Info@pixyz.uz">Info@pixyz.uz</a>
        </div>
      </div>
      <div class="getin-touch">
        <get-in-touch />
      </div>
      <div class="contact-maps">
        <iframe src="https://yandex.ru/map-widget/v1/?ll=69.279737%2C41.311151&scroll=false&z=15" width="100%" height="700" frameborder="1" style="border: 0" allowfullscreen="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import GetInTouch from "./GetInTouch.vue";
export default {
  components: { GetInTouch },
  data() {
    return {
      markers: [
        {
          position: {
            lat: 10.0,
            lng: 10.0,
          },
        },
        {
          position: {
            lat: 11.0,
            lng: 11.0,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  &-details {
    padding-top: 71px;
  }

  &-details-wrapper {
    padding: 100px 0;
  }
  .portfolio-header {
    background-image: url(../assets/img/contact-img.png);
    background-repeat: no-repeat;
    background-size: cover;

    .portfolio-img-wrapper {
      display: flex;
      position: relative;
      width: 100%;
      height: 380px;
      overflow: hidden;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(73, 214, 203, 0.63);
        opacity: 0.35;
      }

      .header-title {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        font-family: "Seg-bold";
        font-size: 40px;
        color: #ffffff;
        z-index: 2;
      }
    }
  }
  &-infos {
    display: flex;
    justify-content: space-between;
    gap: 44px;
  }

  .adress-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 47px 0 72px 0;
    filter: drop-shadow(3px 3px 40px rgba(126, 126, 126, 0.102));
    background: #ffffff;
    border-radius: 15px;
  }

  .adress-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 91px;
    height: 91px;
    padding: 26px 32px 25px 31px;
    background: #49d6cb;
    border-radius: 50%;
  }

  .adress-title {
    font-family: "Seg";
    font-size: 24px;
    color: #000;
    margin: 27px 0 38px 0;
  }

  .link {
    font-family: "Seg";
    font-size: 16px;
    color: #49d6cb;
    text-decoration: none;
  }
}
</style>
