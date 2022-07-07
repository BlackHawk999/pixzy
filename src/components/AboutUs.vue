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
              pieces that we are going to collect from end to end.
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
  padding: 100px 0;
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
  }

  .arrow {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-25%, -50%);

    &.first {
      position: absolute;
      top: -10%;
      left: 35%;
      transform: translate(-35%, -50%);
    }

    &.second {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translate(0%, -50%);
    }

    &.third {
      position: absolute;
      top: -5%;
      left: 25%;
      transform: translate(-25%, -50%);
    }

    &.fourth {
      position: absolute;
      top: -5%;
      left: 50%;
      transform: translate(-25%, -50%);
    }

    &.fiveth {
      position: absolute;
      top: 5%;
      left: 30%;
      transform: translate(-25%, -50%);
    }

    &.sixth {
      position: absolute;
      top: 25px;
      left: 45%;
      transform: translate(-15%, -50%);
      img {
        height: 450px;
      }
    }
  }

  .work-discuss {
    position: relative;
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 100px 0;

    &.reverse {
      flex-direction: row-reverse;
    }

    &.start {
      position: relative;
      align-items: flex-start;
      justify-content: flex-end;

      .discuss-title {
        width: 40%;
      }

      .discuss-img {
        position: absolute;
        left: 10%;
        top: 15%;
      }
    }
  }

  .discuss-title {
    display: flex;
    flex-direction: column;
    gap: 32px;

    h6 {
      font-family: "Seg-bold";
      font-size: 32px;
      color: #217a73;
    }

    p {
      font-family: "Seg";
      font-size: 24px;
      line-height: 32px;
      color: #8a8a8a;
    }
  }

  .about-header {
    .header-img-wrapper {
      display: flex;
      position: relative;

      img {
        width: 100%;
        height: 100%;
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
      }
    }
  }

  &-body {
    padding-top: 92px;
  }
}
</style>
