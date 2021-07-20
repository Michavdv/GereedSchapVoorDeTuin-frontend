export const state = () => ({
  // The local data of the employees which will be fetched when the Strapi (CMS) data does not exist
  list: [
    {
      id: 1,
      Name: 'Batsen',
      Image: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      category: {
        Name: 'Schoppen',
      },
    },
    {
      id: 2,
      Name: 'Stalschoppen',
      Image: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      category: {
        Name: 'Schoppen',
      },
    },
  ],
})

export const mutations = {
  // The method which stores the given data into the state
  setSubCategory(state: any, list: []) {
    if (list.length !== 0 && Array.isArray(list)) {
      state.list = list
    }
  },
}
