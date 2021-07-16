<template>
  <div class="flex-container category-page">
    <div
      v-for="category in $store.state.category.list.filter(
        (category) => category.Name === categoryName
      )"
      :key="category.Id"
    >
      <img
        v-if="category.PageBanner.url[1] !== '_'"
        class="banner-category"
        :src="'http://localhost:1337' + category.PageBanner.url"
        alt="product"
        loading="lazy"
      />
      <img
        v-else
        class="banner-category"
        :src="category.PageBanner.url"
        alt="product"
        loading="lazy"
      />
    </div>
    <h1 class="category-title">{{ categoryName }}</h1>
    <div class="product-part-category">
      <div class="products-category">
        <NuxtLink
          v-for="product in $store.state.product.list.filter(
            (product) => product.category.Name === categoryName
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
    // Stores the string recieved from the Teams component in 'team'
    categoryName: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.category-page {
  flex-direction: column;
  margin-top: 40px;
  max-width: 1250px;

  .banner-category {
    width: 1200px;
    height: 20rem;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .category-title {
    margin-bottom: 40px;
    font-size: 30px;
  }

  .product-part-category {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0 40px;

    .products-category {
      display: flex;
      justify-content: space-between;
      flex-flow: wrap;
      margin-bottom: 40px;
    }
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

@media screen and (max-width: 900px) {
  .category-page {
    margin-top: 0;

    .banner-category {
      width: 100vw;
      height: 10rem;
      padding: 0;
    }
  }
}
</style>
