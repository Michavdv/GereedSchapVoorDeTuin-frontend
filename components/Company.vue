<template>
  <div class="flex-container Company">
    <div class="Company-text">
      <h2 class="Company-text-title">Samenwerkingen</h2>
      <h5 class="Company-text-subtitle">
        Bedrijven in samenwerking met RaMiJo
      </h5>
      <p class="Company-text-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut!
      </p>
    </div>
    <img
      src="~/assets/img/logo-bibliotheek-noord-veluwe.jpg"
      alt="Bibliotheek Noord-Veluwe"
      width="350"
    />
  </div>
</template>

<style lang="scss">
.Company {
  background-color: white;
  padding: 40px;
  min-height: 600px;

  .Company-text {
    color: black;
    max-width: 700px;
    flex-direction: column;
    margin-right: 50px;

    .Company-text-title {
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 0;
    }

    .Company-text-subtitle {
      font-size: 30px;
    }

    .Company-text-content {
      font-size: 20px;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .Company {
    flex-direction: column;
    padding: 60px 40px;

    .Company-text {
      margin-right: 0px;
      text-align: center;
      align-items: center;

      .Company-text-title {
        font-size: 32px;
      }

      .Company-text-subtitle {
        font-size: 22px;
      }

      .Company-text-content {
        font-size: 18px;
      }
    }
  }
}
</style>
