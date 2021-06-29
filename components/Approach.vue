<template>
  <div class="flex-container Approach">
    <div class="Approach-text">
      <h2 class="Approach-text-title">Waarom RaMiJo</h2>
      <h5 class="Approach-text-subtitle">Redenen voor je beslissing</h5>
      <div class="flex-container descriptions">
        <div class="flex-container description">
          <font-awesome-icon
            class="approach-icon"
            :icon="['fas', 'euro-sign']"
          />
          <p class="Approach-text-content">
            RaMiJo biedt u aanzienlijke kostenbesparingen
          </p>
        </div>
        <div class="flex-container description">
          <font-awesome-icon class="approach-icon" :icon="['fas', 'code']" />
          <p class="Approach-text-content">
            U heeft altijd de beschikking over de modernste software
          </p>
        </div>
        <div class="flex-container description">
          <font-awesome-icon class="approach-icon" :icon="['fas', 'lock']" />
          <p class="Approach-text-content">Volledige beveiligde verbindingen</p>
        </div>
        <div class="flex-container description">
          <font-awesome-icon class="approach-icon" :icon="['fas', 'tasks']" />
          <p class="Approach-text-content">
            Wij bieden een totale ontzorging van uw ICT- en werkplekbeheer
          </p>
        </div>
        <div class="flex-container description">
          <font-awesome-icon class="approach-icon" :icon="['fas', 'signal']" />
          <p class="Approach-text-content">U heeft geen investeringspieken</p>
        </div>
        <div class="flex-container description">
          <font-awesome-icon
            class="approach-icon"
            :icon="['fas', 'phone-volume']"
          />
          <p class="Approach-text-content">
            Bij SLA is er een 24/7 support van Nederlandse bodem
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.Approach {
  background-color: #f2f2f2;
  padding: 40px;
  min-height: 600px;
  scroll-behavior: smooth;

  .Approach-text {
    color: black;
    max-width: 700px;
    flex-direction: column;

    .Approach-text-title {
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 0;
    }

    .Approach-text-subtitle {
      font-size: 30px;
      margin-bottom: 20px;
    }

    .descriptions {
      flex-direction: column;
      align-items: flex-start;

      .description {
        .approach-icon {
          background-color: black;
          border-radius: 50%;
          color: white;
          font-size: 30px;
          margin-bottom: 15px;
          margin-right: 20px;
          padding: 6px 8px;
          width: 30px;
        }

        .Approach-text-content {
          font-size: 20px;
        }
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .Approach {
    flex-direction: column;
    padding: 60px 40px 40px 40px;

    .Approach-text {
      text-align: center;

      .descriptions {
        align-items: center;

        .description {
          flex-direction: column;

          .approach-icon {
            margin-right: 0;
          }

          .Approach-text-content {
            margin-bottom: 30px;
          }
        }
      }
    }
  }
}
</style>
