export const state = () => ({
  // The local data of the employees which will be fetched when the Strapi (CMS) data does not exist
  list: [
    {
      id: 1,
      Name: 'Talen Tools - Schep - Steel 120 cm',
      Description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      Price: '25,-',
      Tags: ['Scheppen', '120', 'talen', 'tools'],
      Rating: 1.5,
      Image: {
        url: require('~/assets/img/products/schep.jpg'),
      },
    },
    {
      id: 2,
      Name: 'Talen Tools - Bezem - Steel 120 cm',
      Description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      Price: '25,-',
      Tags: ['Bezems', '120', 'talen', 'tools'],
      Rating: 4,
      Image: {
        url: require('~/assets/img/products/bezem.jpg'),
      },
    },
    {
      id: 3,
      Name: 'Talen Tools - Bladhark - Steel 120 cm',
      Description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      Price: '25,-',
      Tags: ['Harken', '120', 'talen', 'tools'],
      Rating: 5,
      Image: {
        url: require('~/assets/img/products/hark.jpg'),
      },
    },
    {
      id: 4,
      Name: 'Talen Tools - Voegenkrabber - Steel 120 cm',
      Description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      Price: '25,-',
      Tags: ['Onkruidkrabbers', '120', 'talen', 'tools'],
      Rating: 5,
      Image: {
        url: require('~/assets/img/products/voegen.jpg'),
      },
    },
    {
      id: 5,
      Name: 'Talen Tools - Schoffel - Steel 120 cm',
      Description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      Price: '25,-',
      Tags: ['Schoffels', '120', 'talen', 'tools'],
      Rating: 2,
      Image: {
        url: require('~/assets/img/products/schoffel.jpg'),
      },
    },
    {
      id: 6,
      Name: 'Talen Tools - Schep - Steel 120 cm',
      Description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      Price: '25,-',
      Tags: ['Scheppen', '120', 'talen', 'tools'],
      Rating: 3,
      Image: {
        url: require('~/assets/img/products/schep.jpg'),
      },
    },
    {
      id: 7,
      Name: 'Talen Tools - Bezem - Steel 120 cm',
      Description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      Price: '25,-',
      Tags: ['Bezems', '120', 'talen', 'tools'],
      Rating: 1,
      Image: {
        url: require('~/assets/img/products/bezem.jpg'),
      },
    },
    {
      id: 8,
      Name: 'Talen Tools - Bladhark - Steel 120 cm',
      Description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      Price: '25,-',
      Tags: ['Harken', '120', 'talen', 'tools'],
      Rating: 3,
      Image: {
        url: require('~/assets/img/products/hark.jpg'),
      },
    },
    {
      id: 9,
      Name: 'Talen Tools - Voegenkrabber - Steel 120 cm',
      Description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      Price: '25,-',
      Tags: ['Onkruidkrabbers', '120', 'talen', 'tools'],
      Rating: 5,
      Image: {
        url: require('~/assets/img/products/voegen.jpg'),
      },
    },
    {
      id: 10,
      Name: 'Talen Tools - Schoffel - Steel 120 cm',
      Description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      Price: '25,-',
      Tags: ['Schoffels', '120', 'talen', 'tools'],
      Rating: 4,
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
