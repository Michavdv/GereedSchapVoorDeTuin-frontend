import { defineStore } from 'pinia'

export const useStore = defineStore('product', {
  state: () => {
    return {
      list: [],

      // The local data of the employees which will be fetched when the Strapi (CMS) data does not exist
      // list: [
      //   {
      //     id: 1,
      //     Name: 'Talen Tools - Schep - Steel 120 cm',
      //     Description:
      //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      //     Price: '25',
      //     Tags: ['Scheppen', '120', 'talen', 'tools'],
      //     Type: ['120 cm hout', '100 cm hout', '120 cm staal', '100 cm staal'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     Rating: 1.5,
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/schep.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //     ],
      //     category: {
      //       Name: 'Schoppen',
      //     },
      //   },
      //   {
      //     id: 2,
      //     Name: 'Talen Tools - Bezem - Steel 120 cm',
      //     Description:
      //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      //     Price: '25',
      //     Tags: ['Bezems', '120', 'talen', 'tools'],
      //     Type: ['120 cm hout', '100 cm hout', '120 cm staal', '100 cm staal'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     Rating: 4,
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/bezem.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //     ],
      //     category: {
      //       Name: 'Bezems en borstels',
      //     },
      //   },
      //   {
      //     id: 3,
      //     Name: 'Talen Tools - Bladhark - Steel 120 cm',
      //     Description:
      //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      //     Price: '25',
      //     Tags: ['Harken', '120', 'talen', 'tools'],
      //     Type: ['120 cm hout', '100 cm hout', '120 cm staal', '100 cm staal'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     Rating: 5,
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/hark.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //     ],
      //     category: {
      //       Name: 'Tuingereedschap',
      //     },
      //   },
      //   {
      //     id: 4,
      //     Name: 'Talen Tools - Voegenkrabber - Steel 120 cm',
      //     Description:
      //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      //     Price: '25',
      //     Tags: ['Onkruidkrabbers', '120', 'talen', 'tools'],
      //     Type: ['120 cm hout', '100 cm hout', '120 cm staal', '100 cm staal'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     Rating: 5,
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/voegen.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //     ],
      //     category: {
      //       Name: 'Tuingereedschap',
      //     },
      //   },
      //   {
      //     id: 5,
      //     Name: 'Talen Tools - Schoffel - Steel 120 cm',
      //     Description:
      //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      //     Price: '25',
      //     Tags: ['Schoffels', '120', 'talen', 'tools'],
      //     Type: ['120 cm hout', '100 cm hout', '120 cm staal', '100 cm staal'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     Rating: 2,
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //     ],
      //     category: {
      //       Name: 'Tuingereedschap',
      //     },
      //   },
      //   {
      //     id: 6,
      //     Name: 'Talen Tools - Schep - Steel 120 cm',
      //     Description:
      //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      //     Price: '25',
      //     Tags: ['Scheppen', '120', 'talen', 'tools'],
      //     Type: ['120 cm hout', '100 cm hout', '120 cm staal', '100 cm staal'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     Rating: 3,
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/schep.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //     ],
      //     category: {
      //       Name: 'Schoppen',
      //     },
      //   },
      //   {
      //     id: 7,
      //     Name: 'Talen Tools - Bezem - Steel 120 cm',
      //     Description:
      //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      //     Price: '25',
      //     Tags: ['Bezems', '120', 'talen', 'tools'],
      //     Type: ['120 cm hout', '100 cm hout', '120 cm staal', '100 cm staal'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     Rating: 1,
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/bezem.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //     ],
      //     category: {
      //       Name: 'Bezems en borstels',
      //     },
      //   },
      //   {
      //     id: 8,
      //     Name: 'Talen Tools - Bladhark - Steel 120 cm',
      //     Description:
      //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      //     Price: '25',
      //     Tags: ['Harken', '120', 'talen', 'tools'],
      //     Type: ['120 cm hout', '100 cm hout', '120 cm staal', '100 cm staal'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     Rating: 3,
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/hark.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schoffel.jpg'),
      //       },
      //     ],
      //     category: {
      //       Name: 'Tuingereedschap',
      //     },
      //   },
      //   {
      //     id: 9,
      //     Name: 'Hooivork 2 T 4V',
      //     Description:
      //       'Deze hooivork is geschikt voor gebruik in de stal, bij het verplaatsen en voeren van hooi/stro voor uw dieren. De hark heeft twee tanden en is licht in gebruik, zo is hij ook te gebruiken bij het verwijderen van stro, blad of takken uit uw tuin. De tanden van de vork zijn licht gebogen, zo vormen ze een schotel met brede spleten. De vork is voorzien van een 120cm lange steel. Bij gebruik buigt u eerst uw knieën, niet uw rug. En steekt dan de vork geleidelijk en soepel in een berg ‘materiaal’, neem zoveel mogelijk op en deponeer het op de door u gewenste plaats. De afmeting van deze vork is: 150x15cm LxB. \n',
      //     Price: 29.95,
      //     Tags: [
      //       'Hooivork',
      //       'Hooivorken',
      //       'Vorken',
      //       'Landbouw',
      //       '2 T 4V',
      //       '2',
      //       'T',
      //       '4V',
      //     ],
      //     Rating: 4.6,
      //     Type: ['2 T 4V', '2 T 4,5V', '2 T 5V', '2 T 5,5V', 'Los 2 tands'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     category: {
      //       Name: 'Landbouw',
      //     },
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/hooivork.jpeg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schep.jpg'),
      //       },
      //     ],
      //   },
      //   {
      //     id: 10,
      //     Name: 'Hooivork 2 T 4,5V',
      //     Description:
      //       'Deze hooivork is geschikt voor gebruik in de stal, bij het verplaatsen en voeren van hooi/stro voor uw dieren. De hark heeft twee tanden en is licht in gebruik, zo is hij ook te gebruiken bij het verwijderen van stro, blad of takken uit uw tuin. De tanden van de vork zijn licht gebogen, zo vormen ze een schotel met brede spleten. De vork is voorzien van een 120cm lange steel. Bij gebruik buigt u eerst uw knieën, niet uw rug. En steekt dan de vork geleidelijk en soepel in een berg ‘materiaal’, neem zoveel mogelijk op en deponeer het op de door u gewenste plaats. De afmeting van deze vork is: 150x15cm LxB. \n',
      //     Price: 29.95,
      //     Tags: [
      //       'Hooivork',
      //       'Hooivorken',
      //       'Vorken',
      //       'Landbouw',
      //       '2 T 4,5V',
      //       '2',
      //       'T',
      //       '4V',
      //     ],
      //     Rating: 4.6,
      //     Type: ['2 T 4V', '2 T 4,5V', '2 T 5V', '2 T 5,5V', 'Los 2 tands'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     category: {
      //       Name: 'Landbouw',
      //     },
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/hooivork.jpeg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schep.jpg'),
      //       },
      //     ],
      //   },
      //   {
      //     id: 11,
      //     Name: 'Hooivork 2 T 5V',
      //     Description:
      //       'Deze hooivork is geschikt voor gebruik in de stal, bij het verplaatsen en voeren van hooi/stro voor uw dieren. De hark heeft twee tanden en is licht in gebruik, zo is hij ook te gebruiken bij het verwijderen van stro, blad of takken uit uw tuin. De tanden van de vork zijn licht gebogen, zo vormen ze een schotel met brede spleten. De vork is voorzien van een 120cm lange steel. Bij gebruik buigt u eerst uw knieën, niet uw rug. En steekt dan de vork geleidelijk en soepel in een berg ‘materiaal’, neem zoveel mogelijk op en deponeer het op de door u gewenste plaats. De afmeting van deze vork is: 150x15cm LxB. \n',
      //     Price: 29.95,
      //     Tags: [
      //       'Hooivork',
      //       'Hooivorken',
      //       'Vorken',
      //       'Landbouw',
      //       '2 T 5V',
      //       '2',
      //       'T',
      //       '4V',
      //     ],
      //     Rating: 4.6,
      //     Type: ['2 T 4V', '2 T 4,5V', '2 T 5V', '2 T 5,5V', 'Los 2 tands'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     category: {
      //       Name: 'Landbouw',
      //     },
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/hooivork.jpeg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schep.jpg'),
      //       },
      //     ],
      //   },
      //   {
      //     id: 12,
      //     Name: 'Hooivork 2 T 5,5V',
      //     Description:
      //       'Deze hooivork is geschikt voor gebruik in de stal, bij het verplaatsen en voeren van hooi/stro voor uw dieren. De hark heeft twee tanden en is licht in gebruik, zo is hij ook te gebruiken bij het verwijderen van stro, blad of takken uit uw tuin. De tanden van de vork zijn licht gebogen, zo vormen ze een schotel met brede spleten. De vork is voorzien van een 120cm lange steel. Bij gebruik buigt u eerst uw knieën, niet uw rug. En steekt dan de vork geleidelijk en soepel in een berg ‘materiaal’, neem zoveel mogelijk op en deponeer het op de door u gewenste plaats. De afmeting van deze vork is: 150x15cm LxB. \n',
      //     Price: 29.95,
      //     Tags: [
      //       'Hooivork',
      //       'Hooivorken',
      //       'Vorken',
      //       'Landbouw',
      //       '2 T 5,5V',
      //       '2',
      //       'T',
      //       '4V',
      //     ],
      //     Rating: 4.6,
      //     Type: ['2 T 4V', '2 T 4,5V', '2 T 5V', '2 T 5,5V', 'Los 2 tands'],
      //     Measurement: {
      //       Gewicht: '3.0',
      //       Lengte: '280',
      //       Diepte: '38',
      //       Breedte: '40',
      //     },
      //     category: {
      //       Name: 'Landbouw',
      //     },
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/hooivork.jpeg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schep.jpg'),
      //       },
      //     ],
      //   },
      //   {
      //     id: 13,
      //     Name: 'Hooivork los 2 tands',
      //     Description:
      //       'Deze hooivork is geschikt voor gebruik in de stal, bij het verplaatsen en voeren van hooi/stro voor uw dieren. De hark heeft twee tanden en is licht in gebruik, zo is hij ook te gebruiken bij het verwijderen van stro, blad of takken uit uw tuin. De tanden van de vork zijn licht gebogen, zo vormen ze een schotel met brede spleten. De vork is voorzien van een 120cm lange steel. Bij gebruik buigt u eerst uw knieën, niet uw rug. En steekt dan de vork geleidelijk en soepel in een berg ‘materiaal’, neem zoveel mogelijk op en deponeer het op de door u gewenste plaats. De afmeting van deze vork is: 150x15cm LxB. \n',
      //     Price: 29.95,
      //     Tags: ['Hooivork', 'Hooivorken', 'Vorken', 'Landbouw', 'Los 2 tands'],
      //     Rating: 4.6,
      //     Type: ['2 T 4V', '2 T 4,5V', '2 T 5V', '2 T 5,5V', 'Los 2 tands'],
      //     category: {
      //       Name: 'Landbouw',
      //     },
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/hooivork.jpeg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schep.jpg'),
      //       },
      //     ],
      //   },
      //   {
      //     id: 77,
      //     Name: 'Slakkenborstel 100cm set van 4 stuks',
      //     category: { Name: 'Overige' },
      //     Description:
      //       'Slakken vinden sommige planten heerlijk en eten graag uw plant op. Gebruik een slakkenborstel als barriere voor slakken. Deze is eenvoudig rondom uw plant te leggen. Steek de twee uiteinden in de grond en zet de borstel in het midden extra vast met de bijgeleverde gaffels. Maak een geul langs de buitenkant van de borstel en leg deze aarde aan de binnenkant van de slakkenborstel. Zorg dat er geen openingen meer zijn en voorkom overhangend blad. Ook geschikt voor moestuinbakken. De borstel dient op de rand te worden bevestigd. ',
      //     Price: 10.95,
      //     Measurement: {
      //       Lengte: '1090',
      //       Breedte: '142',
      //       Diepte: '40',
      //       Gewicht: '232',
      //     },
      //     Tags: ['Hooivork', 'Hooivorken', 'Vorken', 'Landbouw', 'Los 2 tands'],
      //     Rating: 4.6,
      //     Type: ['2 T 4V', '2 T 4,5V', '2 T 5V', '2 T 5,5V', 'Los 2 tands'],
      //     Image: [
      //       {
      //         url: require('~/assets/img/products/hooivork.jpeg'),
      //       },
      //       {
      //         url: require('~/assets/img/products/schep.jpg'),
      //       },
      //     ],
      //   },
      // ],
    }
  },
})
