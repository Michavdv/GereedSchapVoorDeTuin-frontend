<template>
  <div class="col header">
    <div class="navbar">
      <div class="logobox">
        <NuxtLink to="/"
          ><img src="~/static/RaMiJoLogo.png" alt="RaMiJo Logo"
        /></NuxtLink>
      </div>
      <div class="nav">
        <nav class="navbar-nav">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/over-ons">Over ons</NuxtLink>
        </nav>
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
      </div>
    </div>
    <div
      id="mobile-nav"
      :class="menuOpen ? 'mobile-nav-open' : 'mobile-nav-closed'"
    >
      <nav>
        <NuxtLink to="/" @click.native="toggleMenu()">Home</NuxtLink>
        <NuxtLink to="/over-ons" @click.native="toggleMenu()"
          >Over ons</NuxtLink
        >
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
    }
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
  },
})
</script>

<style lang="scss">
// The main class for the header
.header {
  background: white;
  height: 100px;
  position: fixed;
  z-index: 1000;
  padding: 0;

  a {
    color: black;
  }

  // The whole navbar
  .navbar {
    padding: 0 10% 0 10%;
    height: 100%;
    width: 100%;
    -webkit-box-shadow: 6px 7px 15px -9px rgba(0, 0, 0, 0.5);
    box-shadow: 6px 7px 15px -9px rgba(0, 0, 0, 0.5);

    // The navbar part with the links
    .nav {
      display: flex;
      align-content: center;
      justify-content: flex-end;

      // The navbar links
      .navbar-nav {
        display: inline;

        .apply-button {
          color: white;
          background-color: black;
          border: unset;
          padding: 10px 20px 10px 20px;
          font-weight: 600;
          margin-left: 15px;
        }

        .apply-button:hover {
          box-shadow: inset 1px 1px 20px rgba(255, 255, 255, 0.3);
          transition: 0.2s ease;
        }

        .apply-button:active {
          transform: translateY(2px);
        }

        // A navbar link
        a {
          font-size: 18px;
          font-weight: 700;
          padding: 0 15px 0 15px;

          // When hovering on a navbar link
          &:hover {
            text-decoration: unset;
            color: gray;
          }
        }

        // The nuxtlink which equals the page
        .nuxt-link-exact-active {
          color: gray;
        }
      }

      // Changes the navbar links into a clickable hamburger on 1000px width
      @media only screen and (max-width: 1000px) {
        .navbar-nav {
          display: none;
        }
      }
    }

    // The logo class
    .logobox {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      // The CoCreate logo
      img {
        width: 150px;
      }

      // Changes the width of the CoCreate on 1000px width
      @media only screen and (max-width: 1000px) {
        img {
          width: 100px;
        }
      }
    }

    // The clickable hamburger
    .navbar-toggler {
      display: none;

      // The icon of the clickable hamburger
      .hamburger-menu-icon {
        font-size: 30px;
      }
    }

    // Shows the clickable hamburger on 1000px width
    @media only screen and (max-width: 1000px) {
      .navbar-toggler {
        display: inline;
      }
    }
  }

  // The content within the clickable hamburger
  #mobile-nav {
    display: none;
  }

  // Shows the content within the clickable hamburger
  @media only screen and (max-width: 1000px) {
    // The main mobile navbar class
    #mobile-nav {
      background: gray;
      align-content: center;
      justify-content: flex-start;
      display: flex;
      flex-flow: column;
      height: 0;

      // The navbar links
      nav {
        display: flex;
        align-content: center;
        justify-content: top;
        flex-flow: column;
        padding: 2vh 0;
        text-align: center;
        overflow: hidden;

        // A navbar link
        a {
          font-size: 34px;
          font-weight: 700;
          padding-top: 5vh;
          color: black;
          text-decoration: none;

          &:focus {
            color: white;
          }

          &:hover {
            color: white;
          }
        }

        // The nuxtlink which equals the page
        .nuxt-link-exact-active {
          color: white;
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
          color: black;
          margin: 0 15px;
        }
      }
    }

    // Opening the navbar
    .mobile-nav-open {
      height: 100vh;
      animation: openNav 0.4s forwards;
    }

    // Closing the navbar
    .mobile-nav-closed {
      height: 0;
      animation: closeNav 0.4s forwards;
    }

    // The animation for opening the navbar
    @keyframes openNav {
      from {
        height: 0;
      }
      to {
        height: 100vh;
      }
    }

    // The animation for closing the navbar
    @keyframes closeNav {
      from {
        height: 100vh;
      }
      to {
        height: 0;
        display: none;
      }
    }
  }
}
</style>
