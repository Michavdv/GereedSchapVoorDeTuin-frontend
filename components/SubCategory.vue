<template>
  <div class="flex-container subcategory">
    <div class="subcategory-image-container">
      <img
        v-if="subCategory.Image.url[1] !== '_'"
        class="subcategory-image"
        :src="'http://localhost:1337' + subCategory.Image.url"
        alt="product"
        loading="lazy"
      />
      <img
        v-else
        class="subcategory-image"
        :src="subCategory.Image.url"
        alt="product"
        loading="lazy"
      />
    </div>
    <p class="subcategory-name">{{ subCategory.Name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // Stores the string recieved from the Teams component in 'team'
    subCategory: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.subcategory {
  flex-direction: column;
  justify-content: space-between !important;
  width: 280px;
  height: 280px;
  margin: 5px;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;

  .subcategory-image-container {
    height: 14rem;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .subcategory-image {
      max-height: 100%;
      max-width: 250px;
      margin-bottom: 10px;
    }
  }

  .subcategory-name {
    color: #009600;
    font-weight: 500;
  }

  .subcategory-name:hover {
    text-decoration: underline;
  }
}

.subcategory:hover {
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
}
</style>
