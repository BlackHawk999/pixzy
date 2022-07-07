<template>
  <div class="pixzy-techno">
    <div class="container">
      <div class="pixzy-techno-wrapper">
        <div class="techno-title">
          <h5>Specialties and Technologies</h5>
          <p>
            Our stratigists, designers, architectecs, developers and quality
            analysts excel in every technology powering native, hybrid, cross-
            platform and custom software development.
          </p>
          <div class="round-img-wrapper">
            <img src="@/assets/img/round.png" alt="" />
          </div>
        </div>
        <div class="technologies">
          <div class="techno-type">
            <img src="@/assets/img/js.svg" alt="" />
            <span class="name">Java Script</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/ror.svg" alt="" />
            <span class="name">ROR</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/python.svg" alt="" />
            <span class="name">Python</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/spec_13.svg" alt="" />
            <span class="name">Ruby</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/css.svg" alt="" />
            <span class="name">CSS 3</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/ruby.svg" alt="" />
            <span class="name">Ruby</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/java.svg" alt="" />
            <span class="name">Java</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/android.svg" alt="" />
            <span class="name">Android</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/react.svg" alt="" />
            <span class="name">React</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/mysql.svg" alt="" />
            <span class="name">MySQL</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/xaskell.svg" alt="" />
            <span class="name">Xaskell</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/in.svg" alt="" />
            <span class="name">In</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/basecamp.svg" alt="" />
            <span class="name">BaseCamp</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/laravel.svg" alt="" />
            <span class="name">Laravel</span>
          </div>
          <div class="techno-type">
            <img src="@/assets/img/aws.svg" alt="" />
            <span class="name">Aws</span>
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
.pixzy-techno {
  padding: 100px 0;

  .techno-title {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-bottom: 56px;

    h5 {
      font-family: "Seg-bold";
      font-size: 40px;
      color: #217a73;
      text-align: center;
    }

    p {
      font-family: "Seg";
      font-size: 24px;
      color: #8a8a8a;
    }

    .round-img-wrapper {
      position: absolute;
      top: 10%;
      left: 0;
      transform: translate(-15%);
      z-index: -1;
    }
  }

  .technologies {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 35.5px;
  }

  .techno-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    height: 120px;
    gap: 10px;
    border-radius: 10px;
    padding: 25px;
    background: #ffffff;

    &:hover {
      border: 1px solid #49d6cb;
      filter: drop-shadow(3px 3px 30px rgba(0, 0, 0, 0.161));

      .name {
        opacity: 1;
      }
    }

    .name {
      font-family: "Seg";
      font-size: 16px;
      color: #7d7d7d;
      opacity: 0;
      white-space: nowrap;
    }
  }
}
</style>
