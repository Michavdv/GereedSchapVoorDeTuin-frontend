<template>
  <div class="flex-container category-page">
    <h1 class="category-title">resultaten voor '{{ productName }}'</h1>
    <div
      v-if="
        $store.state.product.list.filter(
          (product) =>
            product.Name.toLowerCase().includes(productName.toLowerCase()) ||
            product.Tags.includes(productName.toLowerCase())
        ).length !== 0
      "
      class="product-part-category"
    >
      <div class="products-category">
        <NuxtLink
          v-for="product in $store.state.product.list.filter(
            (product) =>
              product.Name.toLowerCase().includes(productName.toLowerCase()) ||
              product.Tags.includes(productName.toLowerCase())
          )"
          :key="product.Id"
          :to="'/product/' + product.id"
        >
          <LazyProduct :product="product" />
        </NuxtLink>
      </div>
    </div>
    <div v-else>
      <p class="search-error">
        Er zijn geen producten die overeenkomen met de naam
        <strong>'{{ productName }}'</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Stores the string recieved from the Teams component in 'team'
    productName: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.category-page {
  flex-direction: column;
  max-width: 1250px;

  .category-title {
    margin: 40px 0;
    font-size: 30px;
  }

  .product-part-category {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0 40px;

    .products-category {
      display: flex;
      justify-content: center;
      flex-flow: wrap;
      margin-bottom: 40px;
    }
  }

  .search-error {
    margin: 100px 40px 150px 40px;
    text-align: center;
  }
}

@media screen and (max-width: 1250px) {
  .category-page {
    .product-part-category {
      align-items: center;

      .products-category {
        max-width: 800px;
        justify-content: center;
        max-height: 100%;
      }
    }
  }
}
</style>
