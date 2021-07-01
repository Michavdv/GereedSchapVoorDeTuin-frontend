export const state = () => ({
  // The local data of the employees which will be fetched when the Strapi (CMS) data does not exist
  list: [
    {
      id: 1,
      Name: 'Scheppen',
      Image: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
    },
    {
      id: 2,
      Name: 'Harken',
      Image: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
    },
    {
      id: 3,
      Name: 'Schoffels',
      Image: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
    },
    {
      id: 4,
      Name: 'Bezems',
      Image: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
    },
    {
      id: 5,
      Name: 'Gras',
      Image: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
    },
    {
      id: 6,
      Name: 'Onkruidkrabbers',
      Image: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
    },
    {
      id: 7,
      Name: 'Tuinscharen',
      Image: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
    },
    {
      id: 8,
      Name: 'Bijlen',
      Image: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
    },
  ],
})

export const mutations = {
  // The method which stores the given data into the state
  set(state: any, list: []) {
    if (list.length !== 0 && Array.isArray(list)) {
      state.list = list
    }
  },
}