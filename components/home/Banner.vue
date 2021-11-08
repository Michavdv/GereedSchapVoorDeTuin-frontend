<template>
  <div>
    <div class="flex-container banners">
      <img
        v-if="$store.state.home.banners.LargeBanner.url[1] !== '_'"
        class="banner-large"
        :src="
          'http://localhost:1337' + $store.state.home.banners.LargeBanner.url
        "
        alt="Banner"
        loading="lazy"
      />
      <img
        v-else
        class="banner-large"
        :src="$store.state.home.banners.LargeBanner.url"
        alt="Banner"
        loading="lazy"
      />
      <div class="flex-container banner-small">
        <div v-for="n in $store.state.home.banners.SmallBanner.length" :key="n">
          <img
            v-if="$store.state.home.banners.SmallBanner[n - 1].url[1] !== '_'"
            class="banner-small-part"
            :src="
              'http://localhost:1337' +
              $store.state.home.banners.SmallBanner[n - 1].url
            "
            alt="Banner"
            loading="lazy"
          />
          <img
            v-else
            class="banner-small-part"
            :src="$store.state.home.banners.SmallBanner[n - 1].url"
            alt="Banner"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banners {
  flex-direction: column;
  margin: 40px auto;
  padding: 0 40px;
  max-width: 1250px;

  .banner-large {
    width: 100%;
    margin-bottom: 20px;
  }

  .banner-small {
    width: 100%;
    overflow: hidden;
    max-height: 15rem;
    overflow-y: hidden;

    .banner-small-part {
      width: 270px;
      margin: 0 10px;
      height: 16rem;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 1400px) {
  .banners {
    .banner-large {
      margin-bottom: 0;
    }
    .banner-small {
      display: none;
    }
  }
}

@media screen and (max-width: 900px) {
  .banners {
    padding: 0;
    margin: 0;
  }
}
</style>
