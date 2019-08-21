<template>
  <div class="section-two">
    <div class="container">
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
      <div class="content">
        <slot name="img">
          <img src="/undraw/undraw_web_devices_ad58.svg" />
        </slot>
        <div class="description">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/screen-size.scss";

.section-two {
  overflow: hidden;
  width: 100%;
  background: #edf2f7;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    padding: 5rem 1.5rem;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-weight: 500;
    font-size: 1.5rem;
    margin: 0.5rem;
    text-align: center;
  }

  img {
    flex-shrink: 0;
    width: 16rem;
    margin: 1rem 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .description {
    text-align: center;
    color: #718096;
    font-weight: 500;
    line-height: 2rem;
  }
}

@media (min-width: $sm) {
  .section-one {
    img {
      width: 20rem;
    }
  }
}

@media (min-width: $md) {
  .section-two {
    .container {
      padding: 4rem 0rem;
    }
    .content {
      display: flex;
      flex-direction: row-reverse;
      margin-top: 3rem;
    }
    img {
      width: 26rem;
      margin-right: -3rem;
    }

    .description {
      font-size: 1.15rem;
      padding: 0 3rem;
    }
  }
}

@media (min-width: $lg) {
  .section-two {
    .container {
      padding: 4rem 0rem;

      .title {
        font-size: 2rem;
      }

      .content {
        display: flex;
        flex-direction: row-reverse;
        margin-top: 3rem;
      }

      img {
        width: 28rem;
        margin-right: -3rem;
      }

      .description {
        font-size: 1.25rem;
        padding: 0 3rem;
      }
    }
  }
}

@media (min-width: $xl) {
  .section-two {
    .container {
      padding: 4rem;

      .title {
        font-size: 2rem;
      }

      img {
        width: 30rem;
        margin-right: 0;
      }

      .description {
        font-size: 1.5rem;
        padding: 0 3.5rem;
      }
    }
  }
}
</style>
