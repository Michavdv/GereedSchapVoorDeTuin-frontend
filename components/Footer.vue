<template>
  <div class="footer">
    <div class="footer-header"></div>
    <div class="flex-container footer-service">
      <h4 class="footer-service-title">Service & contact</h4>
      <div class="flex-container footer-contact">
        <div class="flex-container footer-contact-phone">
          <font-awesome-icon class="icon" :icon="['fas', 'phone-alt']" />
          <p>06-47398382</p>
        </div>
        <div class="flex-container footer-contact-mail">
          <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
          <p>gereedschap@voordetuin.com</p>
        </div>
      </div>
    </div>
    <div class="flex-container footer-logo">
      <NuxtLink to="/"><LazySvgLogo class="footer-logo-svg" /></NuxtLink>
    </div>
    <div class="flex-container footer-info">
      <div class="flex-container footer-info-important">
        <a href="/">Algemene voorwaarden</a>
        <a href="/">Privacy</a>
        <a class="cookies" href="/">Cookies</a>
      </div>
      <div class="footer-info-copyright">
        <p>©2021 - Gereedschapvoordetuin</p>
      </div>
      <div class="footer-info-reviews">
        <p>
          Beoordeling door klanten: <strong>9,2/10</strong> - 1200 beoordelingen
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  width: 100%;

  .footer-header {
    background-color: rgb(233, 241, 234);
    width: 100%;
    height: 50px;
  }

  .footer-service {
    background-color: #009600;
    height: 100px;
    padding: 0 40px;

    .footer-service-title {
      text-align: center;
      color: white;
      font-weight: bold;
      padding-right: 40px;
    }

    .footer-contact {
      color: white;
      flex-direction: column;
      align-items: flex-start;

      .icon {
        margin-right: 10px;
      }
    }
  }

  .footer-logo {
    margin: 40px 0;
    .Logo {
      filter: invert(50%);
      width: 300px;
    }
  }

  .footer-info {
    flex-direction: column;
    font-size: 14px;
    border-top: 1px solid rgba(92, 92, 92, 0.3);
    padding-top: 40px;

    .footer-info-important {
      a {
        margin-bottom: 20px;
        padding: 0 20px;
        border-right: 1px solid rgba(92, 92, 92, 0.3);
      }

      .cookies {
        border-right: 0;
      }
    }

    .footer-info-copyright {
      margin-bottom: 20px;
    }

    .footer-info-reviews {
      margin-bottom: 40px;
    }
  }
}

@media screen and (max-width: 900px) {
  .footer {
    .footer-service {
      .footer-service-title {
        width: 40%;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .footer {
    .footer-service {
      height: 200px;
      flex-direction: column;

      .footer-service-title {
        padding: 0;
        width: 60%;
      }

      .footer-contact {
        align-items: center;
      }
    }
  }
}
</style>
