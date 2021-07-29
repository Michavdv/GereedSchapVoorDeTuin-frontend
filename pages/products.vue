<template>
  <div class="products-page">
    <div class="products-all">
      <h1 class="products-all-title">Alle producten</h1>
      <button class="filter-menu-button" @click="toggleMenu()">
        <font-awesome-icon class="filter-icon" :icon="['fas', 'sliders-h']" />
        <span
          v-if="
            checkedCategories.length === 0 &&
            givenMinPrice === 0 &&
            givenMaxPrice === mostExpensiveProduct
          "
          >Filter {{ countProducts(null) }} resultaten</span
        >
        <span v-else
          >Filter
          {{ countProducts(checkedCategories, givenMinPrice, givenMaxPrice) }}
          resultaten</span
        >
      </button>
      <div class="flex-container products-all-split">
        <div class="flex-container products-all-category">
          <h5>Categorieën</h5>
          <div
            v-for="category in $store.state.category.list"
            :key="category.id"
            class="filter-categories"
          >
            <input
              :id="category.Name"
              v-model="checkedCategories"
              type="checkbox"
              class="filter-checkbox"
              :value="category.Name"
            />
            <label class="filter-label" :for="category.Name">{{
              category.Name + ' (' + countProducts(category.Name) + ')'
            }}</label>
          </div>
          <h5 class="filter-price-title">Prijs</h5>
          <div class="flex-container filter-price">
            <input
              id="minPrice"
              v-model="givenMinPrice"
              type="range"
              :max="mostExpensiveProduct"
              step="0.50"
            />
            <label for="minPrice">Minimaal: €{{ givenMinPrice }}</label>
            <br />
            <input
              id="maxPrice"
              v-model="givenMaxPrice"
              type="range"
              :max="mostExpensiveProduct"
              step="0.50"
            />
            <label for="maxPrice">Maximaal: €{{ givenMaxPrice }}</label>
          </div>
        </div>
        <div
          v-if="
            checkedCategories.length === 0 &&
            givenMinPrice === 0 &&
            givenMaxPrice === mostExpensiveProduct
          "
          class="products-all-product"
        >
          <NuxtLink
            v-for="product in categorizeProducts(null)"
            :key="product.id"
            :to="'/product/' + product.id"
          >
            <LazyProduct :product="product" />
          </NuxtLink>
        </div>
        <div v-else class="products-all-product">
          <NuxtLink
            v-for="product in categorizeProducts(
              checkedCategories,
              givenMinPrice,
              givenMaxPrice
            )"
            :key="product.id"
            :to="'/product/' + product.id"
          >
            <LazyProduct :product="product" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div id="filter-menu" :class="menuOpen ? 'filter-open' : 'filter-closed'">
      <div class="flex-container filter-header">
        <font-awesome-icon
          class="filter-icon"
          :icon="['fas', 'times']"
          @click="toggleMenu()"
        />
        <h5 class="filter-title">Filteren</h5>
      </div>
      <div class="flex-container filter-items">
        <div v-for="category in $store.state.category.list" :key="category.id">
          <div v-if="countProducts(category.Name) !== 0">
            <label :for="category.Name">{{
              category.Name + ' (' + countProducts(category.Name) + ')'
            }}</label>
            <input
              :id="category.Name"
              v-model="checkedCategories"
              :value="category.Name"
              type="checkbox"
            />
          </div>
        </div>
      </div>
      <div class="flex-container filter-items-price">
        <input
          id="minPrice"
          v-model="givenMinPrice"
          type="range"
          :max="mostExpensiveProduct"
          step="0.50"
        />
        <label for="minPrice">Minimaal: €{{ givenMinPrice }}</label>
        <br />
        <input
          id="maxPrice"
          v-model="givenMaxPrice"
          type="range"
          :max="mostExpensiveProduct"
          step="0.50"
        />
        <label for="maxPrice">Maximaal: €{{ givenMaxPrice }}</label>
      </div>
      <button class="filter-button" @click="toggleMenu()">
        <font-awesome-icon class="filter-icon" :icon="['fas', 'sliders-h']" />
        <span
          v-if="
            checkedCategories.length === 0 &&
            givenMinPrice === 0 &&
            givenMaxPrice === mostExpensiveProduct
          "
          >Filter {{ countProducts(null) }} resultaten</span
        >
        <span v-else
          >Filter
          {{ countProducts(checkedCategories, givenMinPrice, givenMaxPrice) }}
          resultaten</span
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // middleware({ store, redirect }) {
  //   // If the user is not authenticated
  //   if (store.state.login.list.length === 0) {
  //     return redirect('/login')
  //   }
  // },
  async asyncData({ $getData }) {
    // Tries to fetch data from Strapi (CMS) which, if exists, will be stored in the state
    try {
      await $getData('product/setProduct', 'products')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  data() {
    // The default values for the mobile navbar
    return {
      mostExpensiveProduct:
        Math.max.apply(
          null,
          this.$store.state.product.list.map((product) => product.Price)
        ) + 1,
      menuOpen: false,
      checkedCategories: [],
      givenMinPrice: 0,
      givenMaxPrice: 100,
    }
  },

  mounted() {
    this.givenMaxPrice = this.mostExpensiveProduct
  },

  methods: {
    // Method for opening and closing the navbar on mobile
    toggleMenu() {
      if (this.menuOpen) {
        this.menuOpen = false
      } else {
        this.menuOpen = true
      }
    },
    categorizeProducts(category, minPrice, maxPrice) {
      if (category === null) {
        return this.$store.state.product.list
      } else {
        let data = []
        if (Array.isArray(category)) {
          if (category.length !== 0) {
            for (const categoryName of category) {
              const products = this.$store.state.product.list.filter(
                (product) => product.category.Name === categoryName
              )
              for (let i = 0; i < products.length; i++) {
                data.push(products[i])
              }
            }
          }
        }
        if (minPrice !== 0 || maxPrice !== this.mostExpensiveProduct) {
          if (data.length !== 0) {
            data = data.filter(
              (product) =>
                product.Price >= minPrice && product.Price <= maxPrice
            )
          } else {
            data = this.$store.state.product.list.filter(
              (product) =>
                product.Price >= minPrice && product.Price <= maxPrice
            )
          }
        }
        return data
      }
    },
    countProducts(category, minPrice, maxPrice) {
      if (category !== null && !Array.isArray(category)) {
        return this.$store.state.product.list.filter(
          (product) => product.category.Name === category
        ).length
      } else {
        let count = 0
        const data = []
        if (Array.isArray(category)) {
          if (category.length !== 0) {
            for (const categoryName of category) {
              const products = this.$store.state.product.list.filter(
                (product) => product.category.Name === categoryName
              )
              for (let i = 0; i < products.length; i++) {
                data.push(products[i])
              }
            }
            count = data.length
          }
        } else {
          return this.$store.state.product.list.length
        }
        if (minPrice !== 0 || maxPrice !== this.mostExpensiveProduct) {
          if (data.length !== 0) {
            count = data.filter(
              (product) =>
                product.Price >= minPrice && product.Price <= maxPrice
            ).length
          } else {
            count = this.$store.state.product.list.filter(
              (product) =>
                product.Price >= minPrice && product.Price <= maxPrice
            ).length
          }
        }
        return count
      }
    },
  },
}
</script>

<style lang="scss">
.products-page {
  max-width: 1250px;
  width: 100%;

  .products-all {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    margin: 40px 0;
    align-items: center;

    .products-all-title {
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
    }

    .filter-menu-button {
      display: none;
    }

    .products-all-split {
      align-items: flex-start;
      justify-content: center;
      width: 100%;

      .products-all-category {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        max-width: 230px;
        width: 100%;

        .filter-categories {
          .filter-checkbox {
            color: black;
            text-decoration: none;
            cursor: pointer;
          }

          .filter-label {
            font-size: 15px;
            cursor: pointer;
          }
        }

        .filter-categories:hover {
          color: #009600;
          font-weight: 500;
        }

        .filter-price-title {
          margin-top: 20px;
        }

        .filter-price {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      .products-all-product {
        display: flex;
        justify-content: flex-start;
        flex-flow: wrap;
        max-width: 1000px;
        width: 90%;
        margin: 0 auto;
      }
    }
  }

  #filter-menu {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .products-page {
    .products-all {
      .filter-menu-button {
        display: flex;
        width: 80%;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin-bottom: 20px;
        background-color: #00b900;
        color: white;
        font-weight: bold;
        border: 0;
        border-radius: 3px;
        box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.4);

        .filter-icon {
          margin-right: 10px;
          font-size: 20px;
        }
      }

      .filter-menu-button:focus {
        background-color: #038303;
      }

      .products-all-split {
        .products-all-product {
          justify-content: center;
        }

        .products-all-category {
          display: none;
        }
      }
    }
    #filter-menu {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: white;
      width: 100vw;
      z-index: 9999;

      .filter-header {
        background-color: #009600;
        color: white;
        justify-content: flex-start;

        .filter-title {
          font-weight: bold;
          padding: 15px 0;
          margin: auto;
        }

        .filter-icon {
          margin-left: 20px;
          margin-right: -35px;
          font-size: 20px;
        }
      }

      .filter-items {
        flex-direction: column;
        margin: auto;
        align-items: flex-start;
      }

      .filter-items-price {
        flex-direction: column;
      }

      .filter-button {
        background-color: #00b900;
        color: white;
        font-weight: bold;
        width: 80%;
        padding: 7px 0;
        border: 0;
        border-radius: 3px;
        margin: 20px auto;
      }

      .filter-button:focus {
        background-color: #038303;
      }
    }
    // Opening the filter menu
    .filter-open {
      height: 100%;
      animation: openFilter 0.4s forwards;
    }

    // Closing the filter menu
    .filter-closed {
      height: 0;
      animation: closeFilter 0.4s forwards;

      .filter-button,
      .filter-title {
        display: none;
      }
    }
  }

  // The animation for opening the filter menu
  @keyframes openFilter {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }

  // The animation for closing the filter menu
  @keyframes closeFilter {
    from {
      height: 100%;
    }
    to {
      height: 0;
      display: none;
    }
  }
}
</style>
