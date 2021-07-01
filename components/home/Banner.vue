<template>
  <div class="">
    <div class="flex-container banners">
      <img
        class="banner-large"
        src="~/assets/img/banners/talen-tools.jpg"
        alt="Banner"
      />
      <div class="flex-container banner-small">
        <img
          class="banner-small-part"
          src="~/assets/img/banners/snoeischaar.jpg"
          alt="Banner"
        />
        <img
          class="banner-small-part"
          src="~/assets/img/banners/werk.jpg"
          alt="Banner"
        />
        <img
          class="banner-small-part"
          src="~/assets/img/banners/samen.jpg"
          alt="Banner"
        />
        <img
          class="banner-small-part"
          src="~/assets/img/banners/schepje.jpg"
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
    justify-content: space-between;
    gap: 20px;

    .banner-small-part {
      width: 23%;
      height: 16rem;
      object-fit: cover;
    }
  }
}
</style>
