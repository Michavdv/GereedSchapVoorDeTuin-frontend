<template>
  <div>
    <div
      v-for="product in $store.state.product.list.filter(
        (product) => product.id === parseInt(productId)
      )"
      :key="product.Id"
      class="flex-container overview-product"
    >
      <div>
        <h1>{{ product.Name }}</h1>
        <LazyProductRating :rating="product.Rating" />
      </div>
      <div class="flex-container overview-info">
        <div class="flex-container overview-images">
          <button class="image-button image-button-left">❮</button>
          <img
            v-if="product.Image[0].url[1] !== '_'"
            class="overview-image"
            :src="'http://localhost:1337' + product.Image[0].url"
            alt="product"
            loading="lazy"
          />
          <img
            v-else
            class="overview-image"
            :src="product.Image[0].url"
            alt="product"
            loading="lazy"
          />
          <button class="image-button image-button-right">❯</button>
        </div>
        <div class="flex-container overview-options">
          <span class="overview-price">{{ product.Price }},-</span>
          <button class="shoppingcart">
            <font-awesome-icon
              class="cart-icon"
              :icon="['fas', 'cart-arrow-down']"
            />
            In mijn winkelwagen
          </button>
          <button class="liked-products">
            <font-awesome-icon class="heart-icon" :icon="['far', 'heart']" />
            Bewaar
          </button>
          <div class="flex-container shipping-info">
            <div>
              <font-awesome-icon
                class="shipping-icon"
                :icon="['fas', 'check']"
              />
              <a>Klantbeoordeling <strong>9,2/10</strong></a>
            </div>
            <div>
              <font-awesome-icon
                class="shipping-icon"
                :icon="['fas', 'check']"
              />
              <a
                >Bezorging <strong>'s avonds</strong> of in het
                <strong>weekend</strong></a
              >
            </div>
            <div>
              <font-awesome-icon
                class="shipping-icon"
                :icon="['fas', 'check']"
              />
              <a><strong>Gratis</strong> te retourneren</a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-container overview-extra-info">
        <div class="overview-description">
          <h4>Productbeschrijving</h4>
          <p>{{ product.Description }}</p>
        </div>
        <div class="overview-reviews">
          <div class="flex-container write-review">
            <h4>Reviews</h4>
            <button class="review-button">
              <font-awesome-icon class="heart-icon" :icon="['fas', 'pen']" />
              Schrijf een review
            </button>
          </div>
          <div class="flex-container overview-score-review">
            <span class="score-comparisson"
              ><strong>{{ product.Rating }}</strong
              ><br />
              van de 5</span
            >
            <LazyProductRating :rating="product.Rating" />
          </div>
        </div>
      </div>
    </div>
    <LazyRecommendedProduct />
  </div>
</template>

<script>
export default {
  props: {
    // Stores the string recieved from the Teams component in 'team'
    productId: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.overview-product {
  flex-direction: column;
  max-width: 1250px;

  h1 {
    text-align: center;
    margin-top: 40px;
    width: 100%;
    padding: 0 40px;
  }

  .overview-info {
    align-items: center;
    flex-flow: wrap;
    width: 100%;
    margin-top: 40px;

    .overview-images {
      width: 63%;
      padding: 0 40px;
      margin-bottom: 40px;

      .overview-image {
        width: 600px;
        height: 30rem;
        object-fit: contain;
      }

      .image-button {
        border: 0;
        color: #00b900;
        padding: 9px 18px;
        border-radius: 25px;
        background-color: white;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
        margin: 0 5px;
      }

      .image-button:hover {
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
      }
    }

    .overview-options {
      width: 33%;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 20px 0 60px;
      margin-bottom: 40px;

      .overview-price {
        font-size: 20px;
        font-weight: 800;
        margin-bottom: 20px;
      }

      .shoppingcart {
        background-color: #00b900;
        color: white;
        border: 0;
        border-radius: 5px;
        padding: 10px 20px;
        margin-bottom: 10px;

        .cart-icon {
          margin-right: 7px;
        }
      }

      .shoppingcart:hover {
        background-color: #038303;
      }

      .liked-products {
        background-color: white;
        color: #00b900;
        border: 0;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        padding: 8px 16px;
        margin-bottom: 20px;

        .heart-icon {
          margin-right: 7px;
        }
      }

      .liked-products:hover {
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
      }

      .shipping-info {
        flex-direction: column;
        align-items: flex-start;
        font-size: 15px;

        .shipping-icon {
          color: #00b900;
        }

        strong {
          color: #ee9847;
        }
      }
    }
  }

  .overview-extra-info {
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 0 40px;

    h4 {
      font-weight: 700;
    }

    .overview-description {
      width: 45%;
    }

    .overview-reviews {
      width: 45%;

      .write-review {
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;

        .review-button {
          background-color: white;
          color: #00b900;
          border: 1px solid #00b900;
          border-radius: 5px;
          padding: 8px 16px;

          .heart-icon {
            margin-right: 7px;
          }
        }

        .review-button:hover {
          color: #038303;
          border: 1px solid #038303;
        }
      }

      .overview-score-review {
        justify-content: space-between;
        line-height: 1;
        overflow-y: hidden;

        strong {
          font-size: 50px;
          font-weight: 600;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .overview-product {
    h1 {
      width: 100%;
    }
    .overview-info {
      .overview-images {
        width: 90%;

        .overview-image {
          width: 400px;
          height: 20rem;
        }
      }

      .overview-options {
        width: 80%;
        padding: 0 40px;
      }
    }

    .overview-extra-info {
      flex-direction: column;
      align-items: center;

      .overview-description {
        margin-bottom: 40px;
        width: 90%;
      }

      .overview-reviews {
        width: 80%;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .overview-product {
    h1 {
      font-size: 25px;
    }
    .overview-info {
      .overview-images {
        width: 100%;

        .overview-image {
          width: 200px;
          height: 16rem;
        }
      }

      .overview-options {
        width: 80%;
      }
    }

    .overview-extra-info {
      .overview-reviews {
        .write-review {
          flex-direction: column;
        }

        .overview-score-review {
          align-items: flex-start;
          flex-direction: column;

          .score-comparisson {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
