export const state = () => ({
  // The local data of the employees which will be fetched when the Strapi (CMS) data does not exist
  list: [
    {
      id: 1,
      Name: 'Flitsmeister One Waarschuwingsmelder',
      Price: '25,-',
      Image: {
        url: require('~/assets/img/schep.jpg'),
      },
    },
    {
      id: 2,
      Name: 'Flitsmeister One Waarschuwingsmelder',
      Price: '25,-',
      Image: {
        url: require('~/assets/img/schep.jpg'),
      },
    },
    {
      id: 3,
      Name: 'Flitsmeister One Waarschuwingsmelder',
      Price: '25,-',
      Image: {
        url: require('~/assets/img/schep.jpg'),
      },
    },
    {
      id: 4,
      Name: 'Flitsmeister One Waarschuwingsmelder',
      Price: '25,-',
      Image: {
        url: require('~/assets/img/schep.jpg'),
      },
    },
    {
      id: 5,
      Name: 'Flitsmeister One Waarschuwingsmelder',
      Price: '25,-',
      Image: {
        url: require('~/assets/img/schep.jpg'),
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
