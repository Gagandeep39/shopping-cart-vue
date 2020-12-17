export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mexican_guitars_and_toys.jpg/1280px-Mexican_guitars_and_toys.jpg',
          title: 'Toys',
          description: 'A collection of tooks. Guitars and other toys',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Game-Gear-Handheld.jpg/1280px-Game-Gear-Handheld.jpg',
          title: 'Gaming Console',
          description: 'A Video game console',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
        {
          id: 'p4',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/1b/Violin_VL100.png',
          title: 'Violin',
          description: 'A music Instrument',
          price: 99.99,
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
