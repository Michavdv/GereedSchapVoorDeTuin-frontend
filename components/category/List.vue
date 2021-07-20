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
      <!-- Product list for Categories without SubCategories -->
      <div v-if="getCategory().SubCategory === null" class="products-category">
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
      <!-- SubCategory list for Categories with SubCategories -->
      <div v-else class="products-category">
        <NuxtLink
          v-for="subCategory in $store.state.subcategory.list.filter(
            (subCategory) => subCategory.category.Name === categoryName
          )"
          :key="subCategory.Id"
          :to="'/category/' + subCategory.Name"
        >
          <LazySubCategory :sub-category="subCategory" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      default: '',
    },
  },
  methods: {
    getCategory() {
      const category = this.$store.state.category.list.filter(
        (category) => category.Name === this.categoryName
      )
      return category[0]
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
