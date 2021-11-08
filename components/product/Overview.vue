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
          <div v-if="product.Image.length !== 0">
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
          <div v-else>
            <img
              class="overview-image"
              src="~/assets/img/Dummy-product.jpg"
              alt="product"
              loading="lazy"
            />
          </div>
        </div>
        <div class="flex-container overview-options">
          <div class="flex-container overview-types">
            <NuxtLink
              v-for="n in product.Type.length"
              :key="n"
              :to="
                '/product/' +
                getProductId(
                  product.id,
                  product.Type[n - 1],
                  product.category.Name
                )
              "
              class="overview-type"
            >
              {{ product.Type[n - 1] }}
            </NuxtLink>
          </div>
          <div class="flex-container overview-under-types">
            <div class="overview-buy-info">
              <span class="overview-price"
                >€{{ product.Price
                }}<span v-if="product.Price % 1 === 0">.-</span></span
              >
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
                <font-awesome-icon
                  class="heart-icon"
                  :icon="['far', 'heart']"
                />
                Bewaar
              </button>
            </div>
            <div class="flex-container shipping-info">
              <div>
                <font-awesome-icon
                  class="shipping-icon"
                  :icon="['fas', 'check']"
                />
                <span>Klantbeoordeling <strong>9,2/10</strong></span>
              </div>
              <div>
                <font-awesome-icon
                  class="shipping-icon"
                  :icon="['fas', 'check']"
                />
                <span
                  >Bezorging <strong>'s avonds</strong> of in het
                  <strong>weekend</strong></span
                >
              </div>
              <div>
                <font-awesome-icon
                  class="shipping-icon"
                  :icon="['fas', 'check']"
                />
                <span><strong>Gratis</strong> te retourneren</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-container overview-extra-info">
        <div class="flex-container overview-description">
          <h4>Productbeschrijving</h4>
          <p
            :class="descriptionOpen ? 'description-open' : 'description-closed'"
          >
            {{ product.Description }}
          </p>
          <a
            v-if="!descriptionOpen"
            class="read-more"
            @click="toggleDescription()"
            ><font-awesome-icon class="icon" :icon="['fas', 'arrow-down']" />
            Lees meer
          </a>
          <a v-else class="read-more" @click="toggleDescription()"
            ><font-awesome-icon class="icon" :icon="['fas', 'arrow-up']" />
            Lees minder
          </a>
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
      <div
        v-if="product.Measurement !== undefined"
        class="flex-container overview-specifications"
      >
        <h4>Gewicht en afmetingen</h4>
        <table class="overview-table">
          <tr>
            <td>Gewicht</td>
            <td>{{ product.Measurement.Gewicht }} kg</td>
          </tr>
          <tr>
            <td>Lengte</td>
            <td>{{ product.Measurement.Lengte }} cm</td>
          </tr>
          <tr>
            <td>Diepte</td>
            <td>{{ product.Measurement.Diepte }} cm</td>
          </tr>
          <tr>
            <td>Breedte</td>
            <td>{{ product.Measurement.Breedte }} cm</td>
          </tr>
        </table>
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
      descriptionOpen: false,
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
    toggleDescription() {
      if (this.descriptionOpen) {
        this.descriptionOpen = false
      } else {
        this.descriptionOpen = true
      }
    },
    getProductId(id, type, category) {
      const product = this.$store.state.product.list.filter(
        (product) =>
          product.category.Name === category && product.Tags.includes(type)
        // add .toLowerCase() on type when adding Strapi
      )
      if (product.length !== 0) return product[0].id
      else return id
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
            cursor: pointer;
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
              cursor: pointer;
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

        .overview-types {
          margin-bottom: 10px;
          flex-flow: wrap;
          justify-content: flex-start;

          .overview-type {
            padding: 7px 14px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 6px;
            background-color: white;
            color: rgba(0, 0, 0, 0.8);
            margin: 5px 10px 5px 0;
            text-decoration: none;
          }

          .overview-type:hover {
            border: 1px solid rgba(0, 0, 0, 0.4);
          }

          a.nuxt-link-exact-active {
            border: 2px solid #00b900;
            background-color: rgba(68, 190, 11, 0.2);
          }

          a.nuxt-link-exact-active:hover {
            border: 2px solid #00b900;
            background-color: rgba(68, 190, 11, 0.2);
          }
        }

        .overview-under-types {
          flex-direction: column;
          align-items: flex-start;

          .overview-buy-info {
            margin-left: 5px;

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
        flex-direction: column;
        align-items: flex-start;
        transition: all 0.2s ease;

        .description-closed {
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* number of lines to show */
          -webkit-box-orient: vertical;
          margin-bottom: 10px;
        }

        .description-open {
          display: block;
          margin-bottom: 10px;
        }

        .read-more {
          cursor: pointer;
          text-decoration: none;
          margin-bottom: 10px;
        }

        .read-more:hover {
          color: #0659b1;
        }
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

    .overview-specifications {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding: 0 40px;
      margin: 20px 0;

      h4 {
        font-weight: bold;
      }

      .overview-table {
        border-collapse: collapse;
        width: 100%;

        tr,
        td {
          padding: 8px;
          font-size: 15px;
        }

        tr:nth-child(even) {
          background-color: #f2f2f2;
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
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 90%;
          padding: 0 40px;

          .overview-under-types {
            flex-direction: row;
            align-items: center;

            .overview-buy-info {
              margin-right: 40px;
            }
          }
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

      .overview-specifications {
        width: 90%;
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
          width: 90%;

          .overview-types {
            justify-content: center;
          }

          .overview-under-types {
            flex-direction: column;

            .overview-buy-info {
              margin-right: 0;
            }
          }
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

      .overview-specifications {
        width: 80%;
      }
    }
  }
  .overview-recommended {
    width: 70%;
  }
}

@media screen and (max-width: 500px) {
  .overview {
    .overview-product {
      width: 45%;
      .overview-info {
        .overview-options {
          padding: 0 30px;
          .overview-under-types {
            flex-direction: column;

            .overview-buy-info {
              .shoppingcart {
                padding: 10px 10px;
              }
            }
          }
        }
      }
    }
  }
  .overview-recommended {
    width: 40%;
  }
}

@media screen and (max-width: 350px) {
  .overview {
    .overview-product {
      width: 35%;
    }
  }
}
</style>
