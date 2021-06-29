<template>
  <div>
    <LazyBanner />
    <LazyApproach />
    <LazyATM />
    <img src="~/assets/img/arrow.png" class="arrow-atm-company" />
    <LazyCompany />
  </div>
</template>

<style lang="scss">
.arrow-atm-company {
  position: absolute;
  width: 420px;
  margin: -180px auto 0 auto;
  left: 0;
  right: 0;
  transform: rotate(10deg);
}

@media screen and (max-width: 1200px) {
  .arrow-atm-company {
    display: none;
  }
}
</style>
