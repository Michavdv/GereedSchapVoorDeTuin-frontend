<template>
  <div class="flex-container flex-container-quote">
    <div>
      <h1>Welkom bij RaMiJo</h1>
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum.
      </h6>
    </div>
    <a id="arrow-down" href="#arrow-down" class="arrow-down">
      <LazySvgDownArrow />
    </a>
  </div>
</template>

<style lang="scss">
// The main Banner component class
.flex-container-quote {
  background-image: url('~/assets/img/homepage-quote.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 0 40px;
  text-align: center;
  flex-direction: column;
  min-height: 100vh;

  // The title of the banner
  h1 {
    color: white;
    margin-bottom: 30px;
    max-width: 1000px;
  }

  // The Content of the banner
  h6 {
    color: white;
    margin-bottom: 30px;
    max-width: 1000px;
  }

  .arrow-down {
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
  }
}

// Changes the font size of the title and content of the banner
@media screen and (max-width: 900px) {
  .flex-container-quote {
    padding-top: 0;
    background-attachment: unset;

    h1 {
      font-size: 35px;
      margin: 25px 10px 25px 10px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .flex-container-quote {
    min-height: 700px;
    margin-top: 100px;
    .arrow-down {
      display: none;
    }
  }
}
</style>
