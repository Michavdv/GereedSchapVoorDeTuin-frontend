<template>
  <div class="products-part">
    <h4 class="products-title">Aanbevolen voor jou</h4>
    <NuxtLink to="/products">Bekijk alle producten>></NuxtLink>
    <div class="products">
      <NuxtLink
        v-for="product in filteredRecommendedList"
        :key="product.Id"
        :to="'/product/' + product.id"
      >
        <LazyProduct :product="product" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    filteredRecommendedList() {
      let count = 0
      const data = this.$store.state.product.list.filter(() => {
        return count++ < 6
      })
      return data
    },
  },
}
</script>

<style lang="scss">
.products-part {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 40px;
  margin: 40px 0;
  max-width: 1250px;

  .products-title {
    font-weight: bold;
    margin: 0;
  }

  .products {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: hidden;
    max-height: 20rem;
    overflow-y: hidden;
  }
}

@media screen and (max-width: 1080px) {
  .products-part {
    align-items: center;

    .products {
      max-width: 800px;
      justify-content: center;
      max-height: 100%;
    }
  }
}
</style>
