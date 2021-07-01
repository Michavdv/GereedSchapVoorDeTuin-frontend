<template>
  <div>
    <h4 class="products-title">Best Verkocht</h4>
    <div class="flex-container products">
      <div
        v-for="product in $store.state.product.list"
        :key="product.Id"
        class="flex-container product"
      >
        <img
          class="product-image"
          :src="product.Image.url"
          alt="product"
          loading="lazy"
        />
        <p class="product-description">{{ product.Name }}</p>
        <span class="product-price">{{ product.Price }}</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum
      laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
      praesentium optio, eaque rerum! Provident similique accusantium nemo
      autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto
      voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
      sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
      aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
      laudantium molestias eos sapiente officiis modi at sunt excepturi expedita
      sint? Sed quibusdam recusandae alias error harum maxime adipisci amet
      laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
      voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
      fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
      deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
      velit hic maxime doloremque. Quaerat provident commodi consectetur veniam
      similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur
      est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia
      maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non
      architecto ab laudantium modi minima sunt esse temporibus sint culpa,
      recusandae aliquam numquam totam ratione voluptas quod exercitationem
      fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui
      corporis!
    </p>
  </div>
</template>

<style lang="scss">
.products-title {
  font-weight: bold;
}

.products {
  justify-content: space-between !important;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: 15rem;
  overflow-y: hidden;
  gap: 10px;
  margin-bottom: 40px;

  .product {
    flex-direction: column;
    align-items: flex-start;
    max-width: 220px;
    margin-bottom: 20px;

    .product-image {
      max-height: 10rem;
    }

    .product-description {
      color: #80ac75;
      font-weight: 500;
    }

    .product-price {
      font-weight: bold;
    }
  }
}
</style>
