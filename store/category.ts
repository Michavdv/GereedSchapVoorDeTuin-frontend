export const state = () => ({
  // The local data of the employees which will be fetched when the Strapi (CMS) data does not exist
  list: [
    {
      id: 1,
      Name: 'Scheppen',
      SubCategory: ['Groot', 'Klein', 'Stalen stelen', 'Houten stelen'],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/werk.jpg'),
      },
    },
    {
      id: 2,
      Name: 'Harken',
      SubCategory: ['Groot', 'Klein', 'Stalen stelen', 'Houten stelen'],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 3,
      Name: 'Schoffels',
      SubCategory: ['Groot', 'Klein', 'Stalen stelen', 'Houten stelen'],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 4,
      Name: 'Bezems',
      SubCategory: ['Groot', 'Klein', 'Stalen stelen', 'Houten stelen'],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 5,
      Name: 'Gras',
      SubCategory: ['Groot', 'Klein', 'Stalen stelen', 'Houten stelen'],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 6,
      Name: 'Onkruidkrabbers',
      SubCategory: ['Groot', 'Klein', 'Stalen stelen', 'Houten stelen'],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 7,
      Name: 'Tuinscharen',
      SubCategory: ['Groot', 'Klein', 'Stalen stelen', 'Houten stelen'],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 8,
      Name: 'Grond',
      SubCategory: ['Groot', 'Klein', 'Stalen stelen', 'Houten stelen'],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
  ],
})

export const mutations = {
  // The method which stores the given data into the state
  setCategory(state: any, list: []) {
    if (list.length !== 0 && Array.isArray(list)) {
      state.list = list
    }
  },
}
