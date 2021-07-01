<template>
  <div>
    <h4 class="categories-title">Kies een categorie</h4>
    <div class="flex-container categories">
      <a
        v-for="category in $store.state.category.list"
        :key="category.Id"
        class="flex-container category"
      >
        <img
          class="category-image"
          :src="category.Image.url"
          alt="product"
          loading="lazy"
        />
        <p class="category-name">{{ category.Name }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.categories-title {
  font-weight: bold;
}

.categories {
  justify-content: space-around !important;
  flex-flow: wrap;
  gap: 10px;
  margin-bottom: 40px;

  .category {
    flex-direction: column;
    align-items: center;
    max-width: 150px;
    margin-bottom: 20px;
    cursor: pointer;

    .category-image {
      max-height: 7rem;
    }

    .category-name {
      color: #80ac75;
      font-size: 15px;
    }
  }
}
</style>
