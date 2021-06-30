<template>
  <div class="page-overlay">
    <div class="flex-container header">
      <!-- <div id="header-info" class="flex-container">
      <p><strong>Gratis</strong> verzending vanaf 20,-</p>
      <p>Bezorging dezelfde dag, 's avonds of in het weekend*</p>
      <p><strong>Gratis</strong> retourneren</p>
    </div> -->
      <div class="header-link">
        <div class="flex-container navbar">
          <div class="logobox">
            <NuxtLink to="/"><LazySvgLogo /></NuxtLink>
          </div>
          <div class="search-box">
            <input
              placeholder="Waar ben je naar opzoek?"
              class="searchbar"
              type="text"
            />
          </div>
          <div class="flex-container icons">
            <a>
              <p>Aanmelden</p>
              <font-awesome-icon class="icon" :icon="['fas', 'user']" />
            </a>
            <a>
              <font-awesome-icon class="icon" :icon="['fas', 'heart']" />
            </a>
            <a>
              <font-awesome-icon class="icon" :icon="['fas', 'shopping-cart']"
            /></a>
          </div>
        </div>
      </div>
      <LazyCategory />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.header {
  flex-direction: column;
  position: fixed;
  z-index: 1000;
  padding: 0;
  width: 100vw;

  // #header-info {
  //   background-color: white;
  //   justify-content: space-evenly;
  //   font-size: 13px;
  //   padding: 5px;
  //   max-width: 1200px;
  //   margin: auto;

  //   p {
  //     margin: 0;
  //   }
  // }

  // The main class for the header
  .header-link {
    background: #80ac75;
    height: 80px;
    width: 100vw;

    // The whole navbar
    .navbar {
      padding: 0.25rem 2rem;
      flex-direction: row;
      flex-wrap: nowrap;
      height: 100%;
      min-width: 18.25rem;
      max-width: 76rem;
      margin: 0 auto;

      // The logo class
      .logobox {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        // The CoCreate logo
        .Logo {
          width: 200px;
          height: 70px;
        }

        // Changes the width of the CoCreate on 1000px width
        @media only screen and (max-width: 1000px) {
          .Logo {
            width: 150px;
          }
        }
      }

      .search-box {
        flex: 1;
        max-width: 40rem;
        margin: 0.5rem 1.5rem;

        .searchbar {
          width: 100%;
          height: 3rem;
          padding-left: 1.5rem;
          cursor: text;
          border-radius: 15px;
          border: 0px;
          transition: box-shadow 0.2s ease-in-out;
        }

        .searchbar::-webkit-input-placeholder {
          opacity: 0.8;
          font-size: 16px;
        }

        .searchbar:focus {
          outline: none;
          box-shadow: 0px 0px 10px 2px rgba($color: #000000, $alpha: 0.4);
        }
      }

      .icons {
        a {
          display: flex;
          color: white;
          text-decoration: none;
          cursor: pointer;

          .icon {
            font-size: 25px;
            color: white;
            width: 40px;
            margin: 0 5px;
          }
        }
      }
    }
  }
}
</style>
