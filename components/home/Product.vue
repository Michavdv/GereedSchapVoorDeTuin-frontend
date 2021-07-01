<template>
  <div>
    <h4 class="products-title">Best Verkocht</h4>
    <div class="flex-container products">
      <a
        v-for="product in $store.state.product.list"
        :key="product.Id"
        class="flex-container product"
      >
        <img
          class="product-image"
          :src="product.Image.url"
          alt="product"
          loading="lazy"
        />
        <p class="product-description">{{ product.Name }}</p>
        <span class="product-price">{{ product.Price }}</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.products-title {
  font-weight: bold;
}

.products {
  justify-content: space-between !important;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: 15rem;
  overflow-y: hidden;
  gap: 10px;
  margin-bottom: 40px;

  .product {
    flex-direction: column;
    align-items: flex-start;
    max-width: 220px;
    margin-bottom: 20px;
    cursor: pointer;
    text-decoration: none;

    .product-image {
      max-height: 10rem;
      margin: 0 auto;
      margin-bottom: 10px;
    }

    .product-description {
      color: #80ac75;
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
</style>
