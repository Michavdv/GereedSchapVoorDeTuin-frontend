export const state = () => ({
  // The local data of the employees which will be fetched when the Strapi (CMS) data does not exist
  list: [
    {
      id: 1,
      Name: 'Talen Tools - Schep - Steel 120 cm',
      Price: '25,-',
      Tags: ['Scheppen', '120', 'talen', 'tools'],
      Image: {
        url: require('~/assets/img/products/schep.jpg'),
      },
    },
    {
      id: 2,
      Name: 'Talen Tools - Bezem - Steel 120 cm',
      Price: '25,-',
      Tags: ['Bezems', '120', 'talen', 'tools'],
      Image: {
        url: require('~/assets/img/products/bezem.jpg'),
      },
    },
    {
      id: 3,
      Name: 'Talen Tools - Bladhark - Steel 120 cm',
      Price: '25,-',
      Tags: ['Harken', '120', 'talen', 'tools'],
      Image: {
        url: require('~/assets/img/products/hark.jpg'),
      },
    },
    {
      id: 4,
      Name: 'Talen Tools - Voegenkrabber - Steel 120 cm',
      Price: '25,-',
      Tags: ['Onkruidkrabbers', '120', 'talen', 'tools'],
      Image: {
        url: require('~/assets/img/products/voegen.jpg'),
      },
    },
    {
      id: 5,
      Name: 'Talen Tools - Schoffel - Steel 120 cm',
      Price: '25,-',
      Tags: ['Schoffels', '120', 'talen', 'tools'],
      Image: {
        url: require('~/assets/img/products/schoffel.jpg'),
      },
    },
    {
      id: 6,
      Name: 'Talen Tools - Schep - Steel 120 cm',
      Price: '25,-',
      Tags: ['Scheppen', '120', 'talen', 'tools'],
      Image: {
        url: require('~/assets/img/products/schep.jpg'),
      },
    },
    {
      id: 7,
      Name: 'Talen Tools - Bezem - Steel 120 cm',
      Price: '25,-',
      Tags: ['Bezems', '120', 'talen', 'tools'],
      Image: {
        url: require('~/assets/img/products/bezem.jpg'),
      },
    },
    {
      id: 8,
      Name: 'Talen Tools - Bladhark - Steel 120 cm',
      Price: '25,-',
      Tags: ['Harken', '120', 'talen', 'tools'],
      Image: {
        url: require('~/assets/img/products/hark.jpg'),
      },
    },
    {
      id: 9,
      Name: 'Talen Tools - Voegenkrabber - Steel 120 cm',
      Price: '25,-',
      Tags: ['Onkruidkrabbers', '120', 'talen', 'tools'],
      Image: {
        url: require('~/assets/img/products/voegen.jpg'),
      },
    },
    {
      id: 10,
      Name: 'Talen Tools - Schoffel - Steel 120 cm',
      Price: '25,-',
      Tags: ['Schoffels', '120', 'talen', 'tools'],
      Image: {
        url: require('~/assets/img/products/schoffel.jpg'),
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
