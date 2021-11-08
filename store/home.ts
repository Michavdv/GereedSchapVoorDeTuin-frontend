export const state = () => ({
  // The local data of the employees which will be fetched when the Strapi (CMS) data does not exist
  banners: {
    LargeBanner: {
      url: require('~/assets/img/banners/talen-tools.jpg'),
    },
    SmallBanner: [
      {
        url: require('~/assets/img/banners/werk.jpg'),
      },
      {
        url: require('~/assets/img/banners/snoeischaar.jpg'),
      },
      {
        url: require('~/assets/img/banners/schepje.jpg'),
      },
      {
        url: require('~/assets/img/banners/samen.jpg'),
      },
    ],
  },
})

export const mutations = {
  // The method which stores the given data into the state
  setBanner(state: any, banners: any) {
    if (banners && !banners.error) {
      state.banners = banners
    }
  },
}
