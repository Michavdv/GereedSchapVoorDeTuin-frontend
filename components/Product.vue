<template>
  <div class="flex-container product-category">
    <div class="product-image-container">
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
    </div>
    <p class="product-name-category">{{ product.Name }}</p>
    <span class="product-price-category"
      >€{{ product.Price }}<span v-if="product.Price % 1 === 0">.-</span></span
    >
    <button class="product-watch">
      <font-awesome-icon class="cart-icon" :icon="['fas', 'cart-arrow-down']" />
      Bekijk & Bestel
    </button>
  </div>
</template>

<script>
export default {
  props: {
    // Stores the string recieved from the Teams component in 'team'
    product: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.product-category {
  flex-direction: column;
  align-items: flex-start !important;
  justify-content: space-between !important;
  width: 220px;
  height: 306px;
  margin: 5px;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;

  .product-image-container {
    height: 10rem;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .product-image-category {
      max-height: 100%;
      max-width: 160px;
      margin-bottom: 10px;
    }
  }

  .product-name-category {
    color: #009600;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .product-name-category:hover {
    text-decoration: underline;
  }

  .product-price-category {
    font-weight: bold;
    color: black;
    margin-bottom: 10px;
  }

  .product-watch {
    background-color: #007eb9;
    color: white;
    border: 0;
    border-radius: 3px;
    padding: 5px 20px;
    width: 100%;

    .cart-icon {
      margin-right: 7px;
    }
  }

  .product-watch:hover {
    background-color: #016594;
  }
}

.product-category:hover {
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
}
</style>
