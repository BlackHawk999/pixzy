<template>
  <div class="aboutus">
    <div class="about-header">
      <div class="header-img-wrapper">
        <img src="@/assets/img/about-header-img.png" alt="" />
        <p class="header-title">How we work</p>
      </div>
    </div>
    <div class="container">
      <div class="aboutus-body">
        <h4 class="aboutus-title">About PixYz Agency</h4>
        <div class="work-discuss">
          <div class="discuss-img">
            <img src="@/assets/img/work-image.png" alt="" />
          </div>
          <div class="discuss-title">
            <h6>First Discussion</h6>
            <p>
              The first step is to give an overview of the problem we want to
              solve and / or our needs. If the needs are not properly <br />
              understood, this will cause the creation of a web application
              <br />
              that is designed for these purposes to fail.
            </p>
          </div>
        </div>
        <div class="work-discuss">
          <div class="arrow first">
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
          <div class="arrow second">
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
              pieces that we are going to collect from end to end. For each
              task, we analyze its complexity and make a classification.
            </p>
          </div>
        </div>
        <div class="work-discuss reverse">
          <div class="arrow third">
            <img src="@/assets/img/third.png" alt="" />
          </div>
          <div class="discuss-img analys">
            <img src="@/assets/img/about-img.png" alt="" />
          </div>
          <div class="discuss-title">
            <h6>The design, Conception, and planing</h6>
            <p>
              The evaluation gives us an idea of the time required to complete
              the entire project. At this stage, our goal is to answer the
              following questions: who does what and when? What is the best
              technical approach?
            </p>
          </div>
        </div>
        <div class="work-discuss">
          <div class="arrow fourth">
            <img src="@/assets/img/fourth.png" alt="" />
          </div>
          <div class="discuss-img analys">
            <img src="@/assets/img/about-img-1.png" alt="" />
          </div>
          <div class="discuss-title">
            <h6>The development</h6>
            <p>
              This is the most famous step. Once the product requirements
              document is installed, the development phase can begin. The goal
              of this stage is to create an application that meets the needs
              identified in previous stages, and since needs tend to evolve and
              new implementation ideas may arise during the implementation
              stage, it is usually recommended to use a methodology that
              provides flexibility and proactivity.
            </p>
          </div>
        </div>
        <div class="work-discuss reverse">
          <div class="arrow fiveth">
            <img src="@/assets/img/fiveth.png" alt="" />
          </div>
          <div class="discuss-img analys">
            <img src="@/assets/img/about-img-2.png" alt="" />
          </div>
          <div class="discuss-title">
            <h6>The testing phase</h6>
            <p>
              This stage is also called the user acceptance test. At this stage,
              the test group of users checks the feature set and reports errors,
              if any. if there are any changes, you can discuss them with the
              project Manager, who will advise you on the best way to account
              for input data and feedback.
            </p>
          </div>
        </div>
        <div class="work-discuss start">
          <div class="arrow sixth">
            <img src="@/assets/img/sixth.png" alt="" />
          </div>
          <div class="discuss-img analys">
            <img src="@/assets/img/about-img-3.png" alt="" />
          </div>
          <div class="discuss-title">
            <h6>The deployment and post-production phase</h6>
            <p>
              After each feature in a given release has been checked and all
              error messages have been fixed, the deployment stage may begin,
              this may be the first launch or deployment of a new release, this
              is the moment when the web application will work in its real
              environment. Some behaviors only appear in the production
              environment, such as performance load balancer.it is important to
              set aside time for support and maintenance to fix any errors or
              performance issues found after the application is launched.
              <br />

              New ideas for expansion may appear as soon as the app is up and
              running, the post-production phase is the best time to discuss
              other needs.
            </p>
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
.aboutus {
  padding: 71px 0;

  &-wrapper {
    display: flex;
    flex-direction: column;
  }

  &-body {
    padding: 100px 0;

    @include breakpoint(md) {
    padding: 80px 0;
    }

    @include breakpoint(sm) {
    padding: 50px 0;
    }


    @include breakpoint(xs) {
    padding: 35px 0;
    }
  }

  &-title {
    font-family: "Seg-bold";
    font-size: 40px;
    line-height: 53px;
    text-align: center;
    color: #217a73;
    margin-bottom: 12px;

    @include breakpoint(md) {
      font-size: 30px;
    }
  }

  .arrow {
    &.first {
      position: absolute;
      top: 0;
      left: 35%;
      transform: translate(-37%, -60%);
      width: 1080px;
      height: 285px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @include breakpoint(lg) {
        right: 0;
        transform: translate(-25%, -60%);
        width: 765px;
        height: 205px;
      }

      @include breakpoint(md) {
        top: -10px;
        right: 0%;
        transform: translate(-36%, -50%);
        width: 100%;
        height: 195px;
      }

      @include breakpoint(sm) {
        display: none;
      }
    }

    &.second {
      position: absolute;
      top: 32px;
      left: 50%;
      transform: translate(-22%, -50%);
      height: 275px;
      width: 535px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @include breakpoint(lg) {
        top: 0px;
        left: 50%;
        transform: translate(-22%, -50%);
        height: 275px;
        width: 410px;
      }

      @include breakpoint(md) {
        top: 0;
        transform: translate(-18%, -50%);
        height: 162px;
        width: 456px;
      }

      @include breakpoint(sm) {
        display: none;
      }
    }

    &.third {
      position: absolute;
      top: -5%;
      left: 25%;
      transform: translate(-17%, -50%);
      width: 1100px;
      height: 315px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @include breakpoint(lg) {
        top: 0%;
        right: 0;
        transform: translate(-25%, -50%);
        width: 730px;
        height: 280px;
      }

      @include breakpoint(md) {
        top: 0%;
        left: 25%;
        transform: translate(-20%, -50%);
        width: 650px;
        height: 175px;
      }

      @include breakpoint(sm) {
        display: none;
      }
    }

    &.fourth {
      position: absolute;
      top: -5%;
      left: 50%;
      transform: translate(-42%, -45%);
      width: 685px;
      height: 290px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @include breakpoint(lg) {
        top: 0%;
        left: 50%;
        transform: translate(-20%, -45%);
        width: 550px;
        height: 290px;
      }

      @include breakpoint(md) {
        top: 0%;
        left: 50%;
        transform: translate(-23%, -45%);
        width: 510px;
        height: 280px;
      }

      @include breakpoint(sm) {
        display: none;
      }
    }

    &.fiveth {
      position: absolute;
      top: 5%;
      left: 30%;
      transform: translate(-20%, -55%);
      height: 280px;
      width: 1050px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @include breakpoint(lg) {
        top: 0%;
        left: 30%;
        transform: translate(-25%, -50%);
        height: 280px;
        width: 700px;
      }

      @include breakpoint(md) {
        top: 0%;
        left: 30%;
        transform: translate(-25%, -55%);
        height: 175px;
        width: 730px;
      }

      @include breakpoint(sm) {
        display: none;
      }
    }

    &.sixth {
      position: absolute;
      top: 25px;
      left: 45%;
      transform: translate(-25%, -60%);
      height: 335px;
      width: 235px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @include breakpoint(lg) {
        top: 0px;
        left: 45%;
        transform: translate(-25%, -35%);
        height: 310px;
        width: 235px;
      }

      @include breakpoint(md) {
        top: 5%;
        left: 30%;
        transform: translate(-25%, -50%);
        height: 250px;
        width: 100px;
      }

      @include breakpoint(sm) {
        display: none;
      }
    }
  }

  .work-discuss {
    position: relative;
    display: flex;
    align-items: center;
    gap: 169.5px;
    padding: 73.3px 0;

    @include breakpoint(lg) {
      gap: 50px;
    }

    @include breakpoint(md) {
      gap: 60px;
    }

    @include breakpoint(sm) {
      padding: 50px 15px;
    }

    @include breakpoint(xs) {
      padding: 30px 15px;
    }

    .discuss-img {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @include breakpoint(sm) {
        display: none;
      }
    }

    &.reverse {
      flex-direction: row-reverse;
    }

    &.start {
      position: relative;
      align-items: flex-start;
      justify-content: flex-end;

      .discuss-title {
        width: 40%;

        @include breakpoint(md) {
          width: 60%;
        }

        @include breakpoint(sm) {
          width: 100%;
        }
      }

      .discuss-img {
        position: absolute;
        left: 10%;
        top: 15%;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @include breakpoint(md) {
          width: 250px;
        }

        @include breakpoint(sm) {
          display: none;
        }
      }
    }

    .discuss-title {
      display: flex;
      flex-direction: column;
      width: 48%;
      gap: 32px;

      @include breakpoint(md) {
        gap: 25px;
        width: 100%;
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

    &-body {
      padding-top: 92px;
    }
  }
  .about-header {
    .header-img-wrapper {
      display: flex;
      position: relative;

      @include breakpoint(xs) {
        height: 20vh;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #217a73;
        opacity: 0.5;
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

        @include breakpoint(sm) {
          font-size: 30px;
        }

        @include breakpoint(xs) {
          font-size: 28px;
        }
      }
    }
  }
}
</style>
