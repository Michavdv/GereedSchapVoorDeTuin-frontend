<template>
  <div class="flex-container category-page">
    <!-- <div
      v-for="category in $store.state.category.list.filter(
        (category) => category.Name === categoryName
      )"
      :key="category.Id"
    >
      <div v-if="category.SubCategory === null">
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
    </div> -->
    <h1 class="category-title">{{ categoryName }}</h1>
    <div class="product-part-category">
      <!-- SubCategory list for Categories with SubCategories -->
      <div v-if="getCategory().SubCategory !== null" class="products-category">
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
      <!-- Product list for Categories without SubCategories -->
      <hr class="products-divider" />
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
  max-width: 1250px;

  // .banner-category {
  //   width: 1200px;
  //   height: 20rem;
  //   object-fit: cover;
  //   margin-bottom: 20px;
  // }

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

    .products-divider {
      border: 1px solid #d7e6d8;
      margin-bottom: 60px;
    }
  }
}

@media screen and (max-width: 900px) {
  .category-page {
    .banner-category {
      width: 100vw;
      height: 10rem;
      padding: 0;
    }
  }
}
</style>
