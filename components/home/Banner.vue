<template>
  <div class="">
    <div class="flex-container banners">
      <img
        class="banner-large"
        src="~/assets/img/Banner-sale.jpg"
        alt="Banner"
      />
      <div class="flex-container banner-small">
        <img
          class="banner-small-part"
          src="~/assets/img/schep.jpg"
          alt="Banner"
        />
        <img
          class="banner-small-part"
          src="~/assets/img/schep.jpg"
          alt="Banner"
        />
        <img
          class="banner-small-part"
          src="~/assets/img/schep.jpg"
          alt="Banner"
        />
        <img
          class="banner-small-part"
          src="~/assets/img/schep.jpg"
          alt="Banner"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banners {
  flex-direction: column;
  margin-bottom: 40px;

  .banner-large {
    width: 100%;
    margin-bottom: 20px;
  }

  .banner-small {
    width: 100%;

    .banner-small-part {
      width: 24%;
      margin: 0 10px;
    }
  }
}
</style>
