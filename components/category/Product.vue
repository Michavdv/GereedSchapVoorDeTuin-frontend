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
            (product) => product.Tags[0] === categoryName
          )"
          :key="product.Id"
          :to="'/product/' + product.id"
          class="flex-container product-category"
        >
          <img
            v-if="product.Image[0].url[1] !== '_'"
            class="product-image-category"
            :src="'http://localhost:1337' + product.Image[0].url"
            alt="product"
            loading="lazy"
          />
          <img
            v-else
            class="product-image-category"
            :src="product.Image[0].url"
            alt="product"
            loading="lazy"
          />
          <p class="product-description-category">{{ product.Name }}</p>
          <span class="product-price-category">{{ product.Price }},-</span>
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

      .product-category {
        flex-direction: column;
        align-items: flex-start;
        max-width: 220px;
        margin: 0 5px;
        margin-bottom: 20px;
        cursor: pointer;
        text-decoration: none;

        .product-image-category {
          max-height: 10rem;
          margin: 0 auto;
          margin-bottom: 10px;
        }

        .product-description-category {
          color: #009600;
          font-weight: 500;
        }

        .product-description-category:hover {
          text-decoration: underline;
        }

        .product-price-category {
          font-weight: bold;
          color: black;
        }
      }
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
