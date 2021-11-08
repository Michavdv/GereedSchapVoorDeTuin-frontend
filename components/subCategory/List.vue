<template>
  <div class="flex-container subcategory-page">
    <h1 class="subcategory-title">{{ subCategoryName }}</h1>
    <div class="product-part-subcategory">
      <div class="products-subcategory">
        <NuxtLink
          v-for="product in $store.state.product.list.filter((product) =>
            product.Tags.includes(subCategoryName.toLowerCase())
          )"
          :key="product.Id"
          :to="'/product/' + product.id"
        >
          <LazyProduct :product="product" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subCategoryName: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.subcategory-page {
  flex-direction: column;
  max-width: 1250px;

  .subcategory-title {
    margin: 40px 0;
    font-size: 30px;
  }

  .product-part-subcategory {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0 40px;

    .products-subcategory {
      display: flex;
      justify-content: space-between;
      flex-flow: wrap;
      margin-bottom: 40px;
    }
  }
}

@media screen and (max-width: 1250px) {
  .subcategory-page {
    .product-part-subcategory {
      align-items: center;

      .products-subcategory {
        max-width: 800px;
        justify-content: center;
        max-height: 100%;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .subcategory-page {
    margin-top: 0;
  }
}
</style>
