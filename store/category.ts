export const state = () => ({
  // The local data of the employees which will be fetched when the Strapi (CMS) data does not exist
  list: [
    {
      id: 1,
      Name: 'Schoppen',
      SubCategory: [
        'Batsen',
        'Stalschoppen',
        'Balastschoppen',
        'Betonschoppen',
        'Spaden',
      ],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/werk.jpg'),
      },
    },
    {
      id: 2,
      Name: 'Werkhandschoenen',
      SubCategory: [
        'Katoen',
        'PVC',
        'Geitenleer',
        'Varkensleer',
        'Runderleer',
        'Nylon',
        'Polyester',
        'Acryl',
        'HPPE vezel',
        'Micro fiber',
      ],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 3,
      Name: 'Tuingereedschap',
      SubCategory: [
        'Tuinafvalzakken',
        'Onkruidborstels -messen',
        'Schoffels',
        'Harken',
        'Hakken',
        'Gereedschapshouders',
        'Grondboren',
        'Cultivatoren',
        'Kantafstekers',
        'Zwerfvuilgrijpers',
        'Tuinknielkussens',
        'Dekzeilen',
        'Kruiwagens',
        'Overige',
      ],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 4,
      Name: 'Bezems en borstels',
      SubCategory: [
        'Bezems',
        'Stoffer en blikken',
        'Vloertrekkers',
        'Borstels',
        'Voetenvegers',
        'Overige',
      ],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 5,
      Name: 'Landbouw',
      SubCategory: ['Vorken', 'Stalschuivers', 'Zeisen', 'Harken', 'Overige'],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 6,
      Name: 'Bouw',
      SubCategory: [
        'Emmers',
        'Kniebeschermers',
        'Hamers',
        'Betonschrapers',
        'Asfaltharken',
        'Waterpassen',
        'Metselgereedschap',
        'Overige',
      ],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 7,
      Name: 'Bijlen',
      SubCategory: null,
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 8,
      Name: 'Snoeigereedschap',
      SubCategory: [
        'Snoeischaren',
        'Snoeizagen',
        'Grasscharen',
        'Takkenscharen',
        'Heggenscharen',
        'Overige',
      ],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 9,
      Name: 'Stelen',
      SubCategory: [
        'Schop of bats',
        'Bijl of hamer',
        'Vork',
        'Sloothaak',
        'Vijlheft',
        'Hark of bezem',
        'Stalschuiver',
        'Spade',
        'Raagbol',
        'Hak',
        'Sneeuwruimer',
        'Schoffel',
        'Handvatten',
        'Overige',
      ],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 10,
      Name: 'Waterassortiment',
      SubCategory: [
        'Haspels',
        'Gieters',
        'Koppelingen',
        'Sproeiers en spuiten',
        'Slangen',
        'Overige',
      ],
      HomeImage: {
        url: require('~/assets/img/categories/schep-icon.jpg'),
      },
      PageBanner: {
        url: require('~/assets/img/banners/talen-tools.jpg'),
      },
    },
    {
      id: 11,
      Name: 'Bindartikelen',
      SubCategory: [
        'Bindraad - touw -band',
        'Plantenstokken -steun',
        'Boomband',
        'Moestuinbenodigdheden',
        'Plantenklemmen',
        'Plantenlabels',
        'Spandraad',
        'Grasrand',
        'Muurhaak',
      ],
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
