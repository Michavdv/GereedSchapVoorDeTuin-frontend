<template>
  <div class="flex-container header">
    <!-- <div class="flex-container header-info">
      <a><strong>Gratis</strong> verzending vanaf 20,-</a>
      <a>Bezorging dezelfde dag, 's avonds of in het weekend*</a>
      <a><strong>Gratis</strong> retourneren</a>
    </div> -->
    <div class="header-link">
      <div class="flex-container navbar">
        <div class="logobox">
          <button
            class="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            @click="toggleMenu()"
          >
            <span class="navbar-toggler-icon">
              <font-awesome-icon
                v-if="!menuOpen"
                class="hamburger-menu-icon"
                :icon="['fas', 'bars']"
              />
              <font-awesome-icon
                v-if="menuOpen"
                class="hamburger-menu-icon"
                :icon="['fas', 'times']"
              />
            </span>
          </button>
          <NuxtLink to="/"><LazySvgLogo /></NuxtLink>
        </div>
        <div class="search-box">
          <input
            id="searchbar"
            v-model="search"
            placeholder="Waar ben je naar opzoek?"
            class="searchbar"
            type="search"
            @click="searchClick()"
          />
        </div>
        <nav class="flex-container icons">
          <NuxtLink to="/login">
            <p class="login">Aanmelden</p>
            <font-awesome-icon class="icon" :icon="['fas', 'user']" />
          </NuxtLink>
          <NuxtLink to="/">
            <font-awesome-icon class="icon" :icon="['fas', 'heart']" />
          </NuxtLink>
          <NuxtLink to="/">
            <font-awesome-icon class="icon" :icon="['fas', 'shopping-cart']"
          /></NuxtLink>
        </nav>
      </div>
    </div>
    <div class="searchbar-container" @click="searchLinkClick()">
      <NuxtLink
        v-for="product in filteredList"
        :key="product.id"
        :to="'/product/' + product.id"
        class="search-items"
        >{{ product.Name }}
      </NuxtLink>
    </div>
    <div class="flex-container categories-header">
      <div
        v-for="category in $store.state.category.list"
        :key="category.Id"
        class="category-list"
      >
        <NuxtLink :to="'/' + category.Name" class="category-header"
          >{{ category.Name }}
        </NuxtLink>
        <div
          v-if="category.SubCategory !== null"
          class="flex-container sub-category-container"
        >
          <NuxtLink
            v-for="n in category.SubCategory.length"
            :key="n"
            :to="'/category/' + category.SubCategory[n - 1]"
            class="sub-category"
            >{{ category.SubCategory[n - 1] }}
          </NuxtLink>
        </div>
      </div>
      <div class="search-box-mobile">
        <input
          id="searchbar"
          v-model="search"
          placeholder="Waar ben je naar opzoek?"
          class="searchbar"
          type="search"
          @click="searchClick()"
        />
      </div>
    </div>
    <div
      id="mobile-nav"
      :class="menuOpen ? 'mobile-nav-open' : 'mobile-nav-closed'"
    >
      <nav>
        <div class="flex-container category-list-mobile">
          <NuxtLink
            v-for="category in $store.state.category.list"
            :key="category.Id"
            :to="'/' + category.Name"
            class="category-header-mobile"
          >
            <span @click="toggleMenu()">
              {{ category.Name }}
            </span>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    // The default values for the mobile navbar
    return {
      menuOpen: false,
      search: '',
    }
  },
  computed: {
    filteredList() {
      let count = 0
      return this.$store.state.product.list.filter((product) => {
        return (
          (product.Name.toLowerCase().includes(this.search.toLowerCase()) &&
            count++ < 10) ||
          (product.Tags.includes(this.search.toLowerCase()) && count++ < 10)
        )
      })
    },
  },
  beforeMount() {
    window.addEventListener('mouseup', function (event) {
      const pol = document.querySelector('.searchbar-container')
      if (event.target !== pol && event.target.parentNode !== pol) {
        pol.style.display = 'none'
      }
    })
    window.addEventListener('search', function () {
      window.location.href =
        '/search/' + document.getElementById('searchbar').value
    })
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
    searchClick() {
      const x = document.querySelector('.searchbar-container')
      x.style.display = 'flex'
    },
    searchLinkClick() {
      const x = document.querySelector('.searchbar-container')
      x.style.display = 'none'
    },
  },
})
</script>

<style lang="scss">
.header {
  flex-direction: column;
  // position: fixed;
  // z-index: 1000;
  padding: 0;

  .header-info {
    background-color: white;
    font-size: 13px;
    padding: 5px;

    a {
      margin: 0 2.8rem;
      text-decoration: none;
      cursor: pointer;
    }
  }

  // The main class for the header
  .header-link {
    background: #009600;
    height: 80px;
    width: 100%;

    // The whole navbar
    .navbar {
      padding: 0.25rem 2rem;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: nowrap;
      height: 100%;
      min-width: 18.25rem;
      max-width: 78rem;
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
      }

      .navbar-toggler {
        display: none;
        font-size: 1.1rem;
        color: white;

        // The icon of the clickable hamburger
        .hamburger-menu-icon {
          font-size: 26px;
        }
      }

      .search-box {
        flex: 1;
        max-width: 40rem;
        margin: 0.5rem 1.5rem;

        .searchbar {
          width: 100%;
          height: 3rem;
          padding: 0 1.5rem;
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
            width: 40px;
            margin: 0 5px;
          }
        }
      }
    }
  }

  .searchbar-container {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    background-color: white;
    padding: 10px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    top: 67px;
    margin-right: 30px;
    max-width: 39rem;
    width: 100%;
    z-index: 1001;

    .search-items {
      padding: 5px 10px;
      text-decoration: none;
      color: black;
    }

    .search-items:hover {
      color: #009600;
      font-weight: 500;
    }
  }

  .categories-header {
    background-color: rgb(233, 241, 234);
    width: 100vw;
    flex-flow: wrap;
    padding: 12px 20px 0 20px;

    .category-list {
      padding: 2px 0 12px 0;
      list-style-type: none;
      justify-content: space-evenly;
      border-bottom: 3px solid rgb(233, 241, 234);

      .category-header {
        font-weight: 500;
        margin: 0 10px;
        color: #009600;
        text-decoration: none;
        cursor: pointer;
        padding: 10px 0;
      }
    }
    .category-list:hover {
      border-bottom: 3px solid #009600;

      .sub-category-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        background-color: white;
        padding: 10px 20px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
        margin-top: 15px;
        min-width: 250px;
        z-index: 1000;

        .sub-category {
          text-decoration: none;
          color: black;
          padding: 5px;
        }

        .sub-category:hover {
          color: #009600;
          font-weight: 500;
        }
      }
    }

    .sub-category-container {
      display: none;
    }

    .search-box-mobile {
      display: none;
    }
  }

  #mobile-nav {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  .header {
    .searchbar-container {
      width: 38%;
    }
  }
}

@media screen and (max-width: 900px) {
  .header {
    .header-info {
      display: none;
    }

    .header-link {
      .navbar {
        padding: 0.25rem 1rem;
        .logobox {
          .Logo {
            width: 150px;
          }
        }

        .navbar-toggler {
          display: inline;
        }

        .search-box {
          display: none;
        }

        .icons {
          .login {
            display: none;
          }

          a {
            .icon {
              font-size: 22px;
              width: 30px;
            }
          }
        }
      }
    }

    .searchbar-container {
      top: 145px;
      max-width: 40rem;
      width: 85%;
      margin: 0;
    }

    .categories-header {
      padding: 6px 0;
      .category-list {
        display: none;
      }

      .search-box-mobile {
        display: inline;
        flex: 1;
        max-width: 45rem;
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
    }

    // The main mobile navbar class
    #mobile-nav {
      background: rgb(233, 241, 234);
      align-content: center;
      justify-content: flex-start;
      display: flex;
      flex-flow: column;
      height: 0;

      .category-list-mobile {
        flex-direction: column;
        padding: 10px 0 20px 0;
        // A navbar link
        .category-header-mobile {
          font-size: 25px;
          font-weight: 700;
          padding: 10px 0;
          color: #80ac75;
          text-decoration: none;

          &:focus {
            color: gray;
          }

          &:hover {
            color: gray;
          }
        }
      }
    }

    // The contact information
    .mobile-nav-contact {
      margin-top: 30px;
      display: flex;
      align-content: center;
      justify-content: center;
      overflow: hidden;

      // The icons of the contact information
      .mobile-nav-icon {
        font-size: 32px;
        color: white;
        margin: 0 15px;
      }
    }

    // Opening the navbar
    .mobile-nav-open {
      width: 100%;
      animation: openNav 0.4s forwards;
    }

    // Closing the navbar
    .mobile-nav-closed {
      height: 0;
      width: 100%;
      animation: closeNav 0.4s forwards;

      .category-list-mobile {
        display: none;
      }
    }

    // The animation for opening the navbar
    @keyframes openNav {
      from {
        height: 0;
      }
      to {
        height: 700px;
      }
    }

    // The animation for closing the navbar
    @keyframes closeNav {
      from {
        height: 700px;
      }
      to {
        height: 0;
        display: none;
      }
    }
  }
}
</style>
