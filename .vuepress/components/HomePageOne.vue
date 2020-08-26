<template>
  <article class="home-page-one-wrapper">
    <section class="main">
      <div>
        <img
          v-if="$frontmatter.heroImage"
          :style="heroImageStyle || {}"
          :src="$withBase($frontmatter.heroImage)"
          alt="hero" />
        <!-- <h1>{{ $frontmatter.heroText || $title }}</h1> -->
        <p class="description">{{ $description }}</p>
        <div>
          <a target="_black" href="https://github.com/Charles7c/handout">
            <img alt="GitHub license" src="https://img.shields.io/github/license/charles7c/handout?&logo=github">
          </a>
          <a target="_black" href="https://github.com/Charles7c/handout">
            <img alt="GitHub stars" src="https://img.shields.io/github/stars/charles7c/handout?style=flat&logo=github">
          </a>
          <a target="_black" href="https://github.com/Charles7c/handout">
            <img alt="GitHub forks" src="https://img.shields.io/github/forks/charles7c/handout?style=flat&logo=github">
          </a>
        </div>
        <router-link class="btn-about" :to="$frontmatter.actionLink">{{ $frontmatter.actionText }}</router-link>
        <!-- <img class="banner" src="./images/blog.svg" alt=""> -->
      </div>
    </section>
    <section class="wish yesterday">
      <div class="wish-inner">
        <div class="img-wrapper">
          <img src="./images/yesterday.svg" alt="">
        </div>
        <div class="text-wrapper">
          <h1>{{ features[0].title }}</h1>
          <p class="description">{{ features[0].details }}</p>
        </div>
      </div>
    </section>
    <section class="wish today">
      <div class="wish-inner">
        <div class="text-wrapper">
          <h1>{{ features[1].title }}</h1>
          <p class="description">{{ features[1].details }}</p>
        </div>
        <div class="img-wrapper">
          <img src="./images/today.svg" alt="">
        </div>
      </div>
    </section>
    <section class="wish tomorrow">
      <div class="wish-inner">
        <div class="img-wrapper">
          <img src="./images/tomorrow.svg" alt="">
        </div>
        <div class="text-wrapper">
          <h1>{{ features[2].title }}</h1>
          <p class="description">{{ features[2].details }}</p>
        </div>
      </div>
    </section>
    <section class="md-content-wrapper">
      <Content/>
    </section>
  </article>
</template>

<script>
export default {
  data () {
    return {
      downloads: 0
    }
  },

  computed: {
    features () {
      return this.$frontmatter.features
    },
    heroImageStyle () {
      return this.$frontmatter.heroImageStyle || {
        maxHeight: '200px',
        margin: '6rem auto 1.5rem'
      }
    }
  },

  methods: {
    toThousandslsFilter (num) {
      const numStr = String(num)
      if (numStr === '' || numStr == undefined) {
        return ''
      }
      const IntPart = /\./g.test(numStr) ? numStr.slice(0, numStr.indexOf('.')) : numStr
      const FloatPart = /\./g.test(numStr) ? numStr.substring(numStr.indexOf('.')) : ''

      const orderPrice2 = (+IntPart || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ',')) + FloatPart
      return orderPrice2
    }
  }
}
</script>


<style lang="stylus" scoped>
.home-page-one-wrapper {
  padding-top: 3.4rem;

  section {
    &.main {
      display flex
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin: 0 auto;
      width: 100%;
      height: calc(100vh - 3.4rem);
      overflow hidden
      text-align: center;
      background: url('./images/bg.svg') center/cover no-repeat；

      h1 {
        margin-top: 8rem;
      }

      p {
        font-size 20px
        margin-bottom: 2rem;
      }

      .btn-about {
        margin: 2rem 0;
        display: inline-block;
        padding: .6rem 1.2rem;
        border-radius: 0.25rem;
        background: $accentColor;
        color: #fff;
        font-size: 1rem;
      }

      .banner {
        display: block;
        width: 100%;
      }
    }

    &.wish {
      overflow: hidden;

      &.yesterday, &.tomorrow {
        background: var(--code-color);
      }

      .wish-inner {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 2rem;
        max-width: 56rem;
        width: 100%;
        min-height: 25rem;
        display: flex;
        align-items: center;

        > div {
          flex: auto;

          &.img-wrapper {
            max-width: 22rem;

            img {
              display: block;
              width: 100%;
            }
          }

          &.text-wrapper {
            box-sizing: border-box;
            padding: 0 2rem;
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home-page-one-wrapper {
    section {
      padding: 0 2rem;

      &.main {
        height 580px
      }

      &.description {
        h1 {
          margin-top: 5rem;
        }
        .btn-about {
          font-size .9rem
        }
      }

      &.md-content-wrapper {
        padding: 0;
      }

      &.wish {
        .wish-inner {
          display: block;
          padding: 2rem 0;

          .img-wrapper {
            margin: 0 auto;
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-page-one-wrapper {
    section {
      padding: 0 2rem;

      &.main {
        height 580px
      }

      &.description {
        h1 {
          margin-top: 5rem;
        }
        .btn-about {
          font-size .8rem
        }
      }

      &.md-content-wrapper {
        padding: 0;
      }

      &.wish {
        .wish-inner {
          display: block;
          padding: 2rem 0;

          .img-wrapper {
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>