<template>
  <div class="flex-container overview-rating">
    <div v-for="n in parseInt(rating)" :key="n">
      <font-awesome-icon class="star-icon" :icon="['fas', 'star']" />
    </div>
    <div v-for="m in 5 - parseInt(rating)" :key="m">
      <font-awesome-icon class="star-icon" :icon="['far', 'star']" />
    </div>
    <span class="overview-score"> {{ rating }}/5 (10 reviews)</span>
  </div>
</template>

<script>
export default {
  props: {
    // Stores the string recieved from the Teams component in 'team'
    rating: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.overview-rating {
  overflow-y: hidden;

  .star-icon {
    color: #ffcd00;
  }
}

.overview-score {
  color: #00b900;
  margin-left: 5px;
}
</style>
