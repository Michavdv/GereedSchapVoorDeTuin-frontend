<template>
  <div class="overview">
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
        <div class="overview-images">
          <VueSlickCarousel class="image-carousel" v-bind="settings">
            <template #prevArrow="">
              <div class="image-button">❮</div>
            </template>
            <div v-for="n in product.Image.length" :key="n">
              <img
                v-if="product.Image[n - 1].url[1] !== '_'"
                class="overview-image"
                :src="'http://localhost:1337' + product.Image[n - 1].url"
                alt="product"
                loading="lazy"
              />
              <img
                v-else
                class="overview-image"
                :src="product.Image[n - 1].url"
                alt="product"
                loading="lazy"
              />
            </div>
            <template #nextArrow="">
              <div class="image-button">❯</div>
            </template>
            <template #customPaging="page">
              <div class="images-dots">
                <img
                  v-if="product.Image[page].url[1] !== '_'"
                  :src="'http://localhost:1337' + product.Image[page].url"
                  class="image-dots"
                  alt=""
                  loadgin="lazy"
                />
                <img
                  v-else
                  :src="product.Image[page].url"
                  class="image-dots"
                  alt=""
                  loadgin="lazy"
                />
              </div>
            </template>
          </VueSlickCarousel>
        </div>
        <div class="flex-container overview-options">
          <div>
            <span class="overview-price">{{ product.Price }},-</span>
            <div class="flex-container">
              <input type="number" class="overview-quantity" value="1" />
              <button class="shoppingcart">
                <font-awesome-icon
                  class="cart-icon"
                  :icon="['fas', 'cart-arrow-down']"
                />
                In mijn winkelwagen
              </button>
            </div>
            <button class="liked-products">
              <font-awesome-icon class="heart-icon" :icon="['far', 'heart']" />
              Bewaar
            </button>
          </div>
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
    <LazyRecommendedProduct class="overview-recommended" />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'SlickSlider',
  components: { VueSlickCarousel },
  props: {
    // Stores the string recieved from the Teams component in 'team'
    productId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      settings: {
        lazyLoad: 'ondemand',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>

<style lang="scss">
.overview {
  max-width: 1250px;

  .overview-product {
    flex-direction: column;

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

        ul {
          display: flex !important;
          justify-content: center;
          flex-flow: wrap;
          list-style: none;
          padding: 0;

          li {
            display: inline-block;
            margin: 20px 20px 0 20px;
          }

          .slick-active {
            .images-dots {
              .image-dots {
                box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
              }
            }
          }
        }

        .overview-image {
          width: 600px;
          height: 30rem;
          object-fit: contain;
          margin: auto;
        }

        .image-carousel {
          width: 100%;

          .image-button {
            position: absolute;
            border: 0;
            color: #00b900;
            padding: 9px 18px;
            border-radius: 25px;
            background-color: white;
            box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
            margin: 0 5px;
            z-index: 999;
          }

          .image-button:nth-of-type(1) {
            top: 40%;
            right: 90%;
          }

          .image-button:nth-of-type(3) {
            top: 40%;
            left: 90%;
          }

          .image-button:hover {
            box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
          }

          .images-dots {
            .image-dots {
              padding: 5px;
              width: 70px;
              height: 70px;
              object-fit: contain;
            }
          }
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

        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          opacity: 1;
        }

        .overview-quantity {
          width: 50px;
          height: 40px;
          margin: 0px 10px 10px 0;
          padding-left: 10px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 3px;
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
}

@media screen and (max-width: 1250px) {
  .overview {
    width: 80%;
    margin: auto;

    .overview-product {
      .overview-info {
        flex-direction: column;
        .overview-images {
          width: 80%;
        }

        .overview-options {
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          width: 90%;
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
          width: 70%;
        }
      }
    }
  }

  .overview-recommended {
    margin: 40px auto !important;
    width: 90%;
  }
}

@media screen and (max-width: 900px) {
  .overview {
    .overview-product {
      width: 80%;
      margin: auto;
      .overview-info {
        flex-direction: column;
        .overview-images {
          .overview-image {
            width: 400px;
            height: 20rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .overview {
    .overview-product {
      width: 50%;
      h1 {
        font-size: 25px;
      }
      .overview-info {
        .overview-images {
          padding: 0 20px;
          ul {
            li {
              margin: 20px 10px 0 10px;
            }
          }

          .overview-image {
            width: 200px;
            height: 16rem;
          }
        }

        .overview-options {
          flex-direction: column;
          width: 80%;
        }
      }

      .overview-extra-info {
        .overview-description {
          width: 80%;
        }

        .overview-reviews {
          width: 80%;
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
  .overview-recommended {
    width: 70%;
  }
}

@media screen and (max-width: 500px) {
  .overview {
    width: 80%;
    .overview-product {
      width: 40%;
      .overview-info {
        .overview-options {
          padding: 0 30px;
          .shoppingcart {
            padding: 10px 12px;
          }
        }
      }
    }
  }
  .overview-recommended {
    width: 40%;
  }
}
</style>
