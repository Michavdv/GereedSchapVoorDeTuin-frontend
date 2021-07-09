<template>
  <div class="product-part">
    <h4 class="products-title">Aanbevolen voor jou</h4>
    <div class="products">
      <NuxtLink
        v-for="product in $store.state.product.list.filter(
          (product) => product.id < 7
        )"
        :key="product.Id"
        :to="'/product/' + product.id"
        class="flex-container product"
      >
        <img
          v-if="product.Image[0].url[1] !== '_'"
          class="product-image"
          :src="'http://localhost:1337' + product.Image[0].url"
          alt="product"
          loading="lazy"
        />
        <img
          v-else
          class="product-image"
          :src="product.Image[0].url"
          alt="product"
          loading="lazy"
        />
        <p class="product-description">{{ product.Name }}</p>
        <span class="product-price">{{ product.Price }},-</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.product-part {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 40px;
  margin: 40px 0;
  max-width: 1250px;

  .products-title {
    font-weight: bold;
  }

  .products {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: hidden;
    max-height: 15rem;
    overflow-y: hidden;
    margin-bottom: 40px;

    .product {
      flex-direction: column;
      align-items: flex-start;
      max-width: 220px;
      margin: 0 5px;
      margin-bottom: 20px;
      cursor: pointer;
      text-decoration: none;

      .product-image {
        max-height: 10rem;
        margin: 0 auto;
        margin-bottom: 10px;
      }

      .product-description {
        color: #009600;
        font-weight: 500;
      }

      .product-description:hover {
        text-decoration: underline;
      }

      .product-price {
        font-weight: bold;
        color: black;
      }
    }
  }
}

@media screen and (max-width: 1080px) {
  .product-part {
    align-items: center;

    .products {
      max-width: 800px;
      justify-content: center;
      max-height: 100%;
    }
  }
}
</style>
