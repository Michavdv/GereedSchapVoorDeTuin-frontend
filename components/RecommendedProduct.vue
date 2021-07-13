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
        <p class="product-name">{{ product.Name }}</p>
        <span class="product-price">{{ product.Price }},-</span>
        <button class="product-watch">
          <font-awesome-icon
            class="cart-icon"
            :icon="['fas', 'cart-arrow-down']"
          />
          Bekijk & Bestel
        </button>
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
    max-height: 21.5rem;
    overflow-y: hidden;

    .product {
      flex-direction: column;
      align-items: flex-start;
      max-width: 220px;
      margin: 5px;
      padding: 10px;
      margin-bottom: 20px;
      cursor: pointer;
      text-decoration: none;

      .product-image {
        max-height: 10rem;
        margin: 0 auto;
        margin-bottom: 10px;
      }

      .product-name {
        color: #009600;
        font-weight: 500;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
      }

      .product-name:hover {
        text-decoration: underline;
      }

      .product-price {
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

    .product:hover {
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
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
