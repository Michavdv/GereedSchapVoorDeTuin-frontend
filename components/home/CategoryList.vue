<template>
  <div class="category-part">
    <h4 class="categories-title">Kies een categorie</h4>
    <div class="flex-container categories">
      <NuxtLink
        v-for="category in $store.state.category.list"
        :key="category.Id"
        :to="'/' + category.Name"
        class="flex-container category"
      >
        <img
          v-if="category.HomeImage.url[1] !== '_'"
          class="category-image"
          :src="'http://localhost:1337' + category.HomeImage.url"
          alt="product"
          loading="lazy"
        />
        <img
          v-else
          class="category-image"
          :src="category.HomeImage.url"
          alt="product"
          loading="lazy"
        />
        <p class="category-name">{{ category.Name }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.category-part {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 40px;
  max-width: 1250px;

  .categories-title {
    font-weight: bold;
  }

  .categories {
    justify-content: space-evenly;
    flex-flow: wrap;
    margin-bottom: 40px;

    .category {
      flex-direction: column;
      align-items: center;
      width: 150px;
      margin: 0 20px;
      margin-bottom: 20px;
      cursor: pointer;

      .category-image {
        max-height: 7rem;
      }

      .category-name {
        color: #009600;
        font-size: 15px;
      }
    }
  }
}

@media screen and (max-width: 1080px) {
  .category-part {
    align-items: center;

    .categories {
      max-width: 700px;
      justify-content: center;
      max-height: 100%;
    }
  }
}
</style>
