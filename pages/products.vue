<template>
  <div class="products-all">
    <h1 class="products-all-title">Alle producten</h1>
    <div class="flex-container products-all-split">
      <div class="flex-container products-all-category">
        <h5>Categorieën</h5>
        <a
          v-for="category in $store.state.category.list"
          :key="category.id"
          to="/products"
          class="products-all-category-link"
          @click="categorizeProducts(category.Name)"
        >
          {{ category.Name + ' (' + countProducts(category.Name) + ')' }}
        </a>
      </div>
      <div class="products-all-product">
        <NuxtLink
          v-for="product in categorizeProducts(null)"
          :key="product.id"
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
  async asyncData({ $getData }) {
    // Tries to fetch data from Strapi (CMS) which, if exists, will be stored in the state
    try {
      await $getData('product/setProduct', 'products')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },

  methods: {
    categorizeProducts(category) {
      if (category === null) return this.$store.state.product.list
      else {
        console.log('binnen else')
        // this.$store.commit('product/remove')
        this.$store.commit(
          'product/setProduct',
          this.$store.state.product.list.filter(
            (product) => product.category === category
          )
        )
        console.log('klaar met else')
      }
    },
    countProducts(category) {
      return this.$store.state.product.list.filter(
        (product) => product.category.Name === category
      ).length
    },
  },
}
</script>

<style lang="scss">
.products-all {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin: 40px 0;
  max-width: 1250px;

  .products-all-title {
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }

  .products-all-split {
    align-items: flex-start;

    .products-all-category {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin-right: 20px;
      width: 15%;

      .products-all-category-link {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }

      .products-all-category-link:hover {
        color: #009600;
        font-weight: 500;
      }
    }

    .products-all-product {
      display: flex;
      justify-content: center;
      flex-flow: wrap;
      width: 80%;
    }
  }
}

@media screen and (max-width: 1080px) {
  .products-all {
    align-items: center;

    .products-all-product {
      max-width: 800px;
      justify-content: center;
      max-height: 100%;
    }
  }
}
</style>
