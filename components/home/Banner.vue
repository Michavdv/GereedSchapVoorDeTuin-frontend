<template>
  <div>
    <div class="flex-container banners">
      <img
        class="banner-large"
        src="~/assets/img/banners/talen-tools.jpg"
        alt="Banner"
        loading="lazy"
      />
      <div class="flex-container banner-small">
        <img
          class="banner-small-part"
          src="~/assets/img/banners/snoeischaar.jpg"
          alt="Banner"
          loading="lazy"
        />
        <img
          class="banner-small-part"
          src="~/assets/img/banners/werk.jpg"
          alt="Banner"
          loading="lazy"
        />
        <img
          class="banner-small-part"
          src="~/assets/img/banners/samen.jpg"
          alt="Banner"
          loading="lazy"
        />
        <img
          class="banner-small-part"
          src="~/assets/img/banners/schepje.jpg"
          alt="Banner"
          loading="lazy"
        />
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
    flex-wrap: wrap;
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

@media screen and (max-width: 1260px) {
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
