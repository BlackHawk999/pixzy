<template>
  <div class="get-touch">
    <div class="container">
      <div class="get-touch-wrapper">
        <div class="main-wrapper">
          <form class="get-touch-body">
            <h5 class="get-touch-title">Get in Touch</h5>
            <div class="input-wrapper">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Surname" />
            </div>
            <div class="input-wrapper">
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Surname" />
            </div>
            <div class="input-wrapper">
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Surname" />
            </div>
            <div class="area-wrapper">
              <textarea
                class="area"
                cols="90"
                rows="10"
                placeholder="About your Project"
              ></textarea>
            </div>
            <div class="btn-wrapper">
              <button class="submit" type="submit">Submit</button>
            </div>
          </form>
          <div class="get-touch-contact">
            <div class="contact-infos">
              <h6>Say Hi</h6>
              <a href="#">info@pixyz.com</a>
              <a href="#">+998 71 645 57 67</a>
              <a href="#">Telegram</a>
            </div>
            <div class="get-touch-img">
              <img src="@/assets/img/get-touch.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.get-touch {
  padding: 100px 0;

  &-wrapper {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    filter: drop-shadow(3px 3px 30px rgba(0, 0, 0, 0.161));
  }
  .main-wrapper {
    display: flex;
  }
  .get-touch-body {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 60px;
    gap: 22px;
  }

  .get-touch-title {
    font-family: "Seg-bold";
    font-size: 40px;
    color: #217a73;
    text-align: start;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 30px;

    input {
      padding: 18px 0 20px 28px;
      border: 1px solid #49d6cb;
      width: 100%;

      &:focus {
        outline: none !important;
        border: 1px solid #ff8888;
      }
    }
  }

  .area {
    border: 1px solid #49d6cb;
    width: 100%;
    padding: 16px 25px;

    &:focus {
      outline: none !important;
      border: 1px solid #ff8888;
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .submit {
    font-family: "Seg";
    font-size: 16px;
    padding: 16px 60px;
    color: #ffffff;
    background: #49d6cb;
     border: 1px solid #49d6cb;
    cursor: pointer;

    &:hover {
      color: #49d6cb;
      background: #ffffff;
    }
  }

  .get-touch-contact {
    display: flex;
    align-items: flex-start;
    flex: 1;
    background: #49d6cb;
    padding: 57px 23px 11px 77px;

    h6 {
      font-family: "Seg-bold";
      font-size: 32px;
      line-height: 43px;
      color: #ffffff;
      margin-bottom: 45px;
    }

    .contact-infos {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      a {
        font-family: "Seg";
        text-decoration: none;
        font-size: 16px;
        line-height: 18px;
        color: #ffffff;

        &:not(:last-child) {
          margin-bottom: 60px;
        }
      }
    }

    .get-touch-img {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      width: 100%;
      height: 600px;
    }
  }
}
</style>
