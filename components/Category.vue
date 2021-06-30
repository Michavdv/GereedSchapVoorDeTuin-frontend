<template>
  <div class="flex-container categories">
    <div class="category-list">
      <a class="category">Tuingereedschap</a>
      <a class="category">Tuingereedschap</a>
      <a class="category">Tuingereedschap</a>
      <a class="category">Tuingereedschap</a>
      <a class="category">Tuingereedschap</a>
    </div>
  </div>
</template>

<style lang="scss">
.categories {
  background-color: rgb(233, 241, 234);
  width: 100vw;

  .category-list {
    padding: 12px 20px;
    list-style-type: none;
    justify-content: space-evenly;

    .category {
      font-weight: 500;
      margin: 0 10px;
      color: #80ac75;
      text-decoration: none;
      cursor: pointer;
      padding: 10px 0;
    }

    .category:hover {
      border-bottom: 3px solid #80ac75;
    }
  }
}
</style>
