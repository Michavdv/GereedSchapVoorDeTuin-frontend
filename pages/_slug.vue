<template>
  <div>
    <LazyCategoryList :category-name="slug" />
  </div>
</template>

<script>
export default {
  async asyncData({ params, $getData }) {
    try {
      await $getData('product/setProduct', 'products')
      await $getData('category/setCategory', 'categories')
      await $getData('subcategory/setSubCategory', 'sub-categories')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
    const slug = await params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
}
</script>
