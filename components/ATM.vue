<template>
  <div class="flex-container ATM">
    <LazySvgATM />
    <div class="ATM-text">
      <h2 class="ATM-text-title">Pinautomaten</h2>
      <h5 class="ATM-text-subtitle">Voor in bibliotheken</h5>
      <p class="ATM-text-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut!
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.ATM {
  background-color: #fff570;
  padding: 60px 120px 60px 0px;
  min-height: 600px;

  .ATM-text {
    color: #636363;
    max-width: 700px;
    flex-direction: column;
    margin-left: 50px;

    .ATM-text-title {
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 0;
    }

    .ATM-text-subtitle {
      font-size: 30px;
    }

    .ATM-text-content {
      font-size: 20px;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .ATM {
    flex-direction: column-reverse;
    padding: 60px 40px 0px 40px;

    .ATM-text {
      text-align: center;
      align-items: center;
      margin-left: 0;

      .ATM-text-title {
        font-size: 35px;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 0;
      }

      .ATM-text-subtitle {
        font-size: 25px;
      }

      .ATM-text-content {
        font-size: 18px;
      }
    }
  }
}
</style>
