<template>
  <div class="pixzy-work">
    <div class="container">
      <div class="pixzy-work-wrapper">
        <h4 class="pixzy-work-title">How we work</h4>
        <div class="work-discuss">
          <div class="arrow">
            <img src="@/assets/img/work-arrow.png" alt="" />
          </div>
          <div class="discuss-img">
            <img src="@/assets/img/work-image.png" alt="" />
          </div>
          <div class="discuss-title">
            <h6>First Discussion</h6>
            <p>
              The first step is to give an overview of the problem we want to
              solve and / or our needs. If the needs are not properly
              understood, this will cause the creation of a web application that
              is designed for these purposes to fail.
            </p>
          </div>
        </div>
        <div class="work-discuss">
          <div class="arrow down">
            <img src="@/assets/img/arrow-down.png" alt="" />
          </div>
          <div class="discuss-title">
            <h6>Requirements analysis</h6>
            <p>
              The goal was to define the goals for implementing the web
              application. Tasks can be complex, and business logic is often
              quite complex. At this stage, it is important that these complex
              tasks can be broken down into more manageable tasks and,
              therefore, they are easier to implement, verify, and test.
            </p>
          </div>
          <div class="discuss-img analys">
            <img src="@/assets/img/work-image-2.png" alt="" />
          </div>
        </div>
        <div class="work-discuss">
          <div class="arrow pre-down">
            <img src="@/assets/img/arrow-down-2.png" alt="" />
          </div>
          <div class="discuss-img analys">
            <img src="@/assets/img/work-image-3.png" alt="" />
          </div>
          <div class="discuss-title">
            <h6>Timeline and Cost Estimation</h6>
            <p>
              Experience is a good ally when it comes to making the right
              assessment. If a similar task was completed earlier, it becomes
              easier to give an accurate estimate, and time tracking becomes our
              recommendation. From the previous step, we can collect all the
              pieces that we are going to collect from end to end.
            </p>
          </div>
        </div>
        <div class="step-wrapper">
          <div class="arrow third">
            <img src="@/assets/img/arrow-down-3.png" alt="" />
          </div>
          <router-link class="step" to="/about"> Full Steps</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pixzy-work {
  padding-top: 100px;

  @include breakpoint(lg) {
    padding-top: 70px;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
  }

  &-title {
    font-family: "Seg-bold";
    font-size: 40px;
    line-height: 53px;
    text-align: center;
    color: #217a73;
    margin-bottom: 12px;

    @include breakpoint(lg) {
      font-size: 35px;
    }
  }

  .arrow {
    position: absolute;
    top: 95px;
    left: 50%;
    transform: translate(-40%, -50%);
    width: 330px;
    height: 190px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @include breakpoint(md) {
      width: 220px;
      height: 140px;
      top: 50px;
      left: 50%;
      transform: translate(-40%, -50%);
    }

    @include breakpoint(sm) {
      width: 200px;
      height: 100px;
      top: 50px;
      left: 50%;
      transform: translate(-40%, -50%);
    }
    @include breakpoint(xs) {
      display: none;
    }

    &.down {
      position: absolute;
      top: -10%;
      left: 35%;
      transform: translate(-35%, -50%);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @include breakpoint(xl) {
        height: 300px;
        width: 775px;
        top: 0%;
        left: 0;
        transform: translate(0%, -55%);
      }

      @include breakpoint(lg) {
        top: -5%;
        right: 0;
        width: 820px;
        height: 215px;
        transform: translate(0%, -50%);
      }

      @include breakpoint(md) {
        top: 0%;
        right: 0;
        width: 485px;
        height: 160px;
        transform: translate(10%, -50%);
      }

      @include breakpoint(sm) {
        top: 0%;
        right: 0;
        width: 465px;
        height: 170px;
        transform: translate(10%, -50%);
      }

      @include breakpoint(xs) {
        display: none;
      }
    }
    &.pre-down {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translate(0%, -50%);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @include breakpoint(xl) {
        height: 245px;
        top: 25px;
        left: 50%;
        transform: translate(-35%, -50%);
      }

      @include breakpoint(lg) {
        top: 10px;
        right: 0px;
        height: 180px;
        width: 300px;

        transform: translate(35%, -50%);
      }

      @include breakpoint(md) {
        top: 10px;
        right: 0;
        height: 160px;
      }

      @include breakpoint(sm) {
        transform: translate(-15%, -50%);
        height: 185px;
        width: 300px;
      }
      @include breakpoint(xs) {
        display: none;
      }
    }

    &.third {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-5%, -100%);
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @include breakpoint(xl) {
        height: 240px;
        width: 610px;
      }

      @include breakpoint(lg) {
        top: -15px;
        width: 435px;
        height: 100px;
      }

      @include breakpoint(md) {
        top: 0px;
        width: 340px;
        height: 100px;
      }

      @include breakpoint(sm) {
        top: 0px;
        width: 250px;
        right: 0;
        height: 100px;
        transform: translate(-20%, -100%);
      }
      @include breakpoint(xs) {
        display: none;
      }
    }
  }
}

.work-discuss {
  position: relative;
  display: flex;
  align-items: center;
  gap: 100px;
  padding: 100px 0;

  @include breakpoint(lg) {
    gap: 55px;
    padding: 80px 0;
  }

  @include breakpoint(md) {
    gap: 30px;
  }
}

.discuss-img {
  width: 100%;
  height: 100%;

  @include breakpoint(md) {
    width: 1150px;
    height: 180px;
  }

  @include breakpoint(md) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
}

.discuss-title {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @include breakpoint(md) {
    gap: 15px;
  }

  @include breakpoint(sm) {
    padding: 0 15px;
  }

  h6 {
    font-family: "Seg-bold";
    font-size: 32px;
    color: #217a73;

    @include breakpoint(md) {
      font-size: 25px;
    }
  }

  p {
    font-family: "Seg";
    font-size: 24px;
    line-height: 32px;
    color: #8a8a8a;

    @include breakpoint(md) {
      font-size: 20px;
      line-height: 25px;
    }
  }
}

.step-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.step {
  font-family: "Arial";
  font-size: 16px;
  padding: 10px 52px;
  color: #ffffff;
  background: #49d6cb;
  border: 1px solid #49d6cb;
  border-radius: 5px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    color: #49d6cb;
    background: #ffffff;
  }
}
</style>
