<template>
  <div class="section-one">
    <div class="container">
      <h2 class="title">
          <slot name="title"></slot>
      </h2>
      <div class="content">
        <slot name="img">
          <img src="/undraw/undraw_business_deal_cpi9.svg" />
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

.section-one {
  overflow: hidden;
  width: 100%;
  background: #ffffff;
  min-height: 75vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    padding: 1.5rem;
    display: flex;
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
    line-height: 1.75rem;
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
  .section-one {
    .container {
      padding: 4rem 0rem;
    }
    .content {
      display: flex;
      flex-direction: row;
      margin-top: 3rem;
    }
    img {
      width: 26rem;
      margin-left: -3rem;
    }

    .description {
      font-size: 1.15rem;
      padding: 0 3rem;
    }
  }
}

@media (min-width: $lg) {
  .section-one {
    .container {
      padding: 4rem 0rem;

      .title {
        font-size: 2rem;
      }

      .content {
        display: flex;
        flex-direction: row;
        margin-top: 3rem;
      }

      img {
        width: 28rem;
        margin-left: -3rem;
      }

      .description {
        font-size: 1.25rem;
        padding: 0 3rem;
      }
    }
  }
}

@media (min-width: $xl) {
  .section-one {
    .container {
      padding: 4rem;

      .title {
        font-size: 2rem;
      }

      img {
        width: 30rem;
        margin-left: 0;
      }

      .description {
        font-size: 1.5rem;
        padding: 0 3.5rem;
      }
    }
  }
}
</style>
