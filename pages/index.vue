<template>
  <div>
    <LazyHomeBanner />
    <LazyRecommendedProduct />
    <LazyHomeCategory />
  </div>
</template>

<script>
export default {
  async asyncData({ $getData }) {
    // Tries to fetch data from Strapi (CMS) which, if exists, will be stored in the state
    try {
      await $getData('product/setProduct', 'products')
      await $getData('category/setCategory', 'categories')
      await $getData('home/setBanner', 'home-banner')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
}
</script>
