// CUIDADO: ☢️ DAQUI PRA BAIXO É TUDO MOCK ☢️
const MOCK_PRODUCTS = [
  {
    id: '0',
    name: 'Arroz 1k marca X',
    price: 5.7,
  },
  {
    id: '1',
    name: 'Feijão 1k marca Y',
    price: 10.7,
  },
  {
    id: '2',
    name: 'Danoninho 12 unidades',
    price: 15,
  },
];
// CUIDADO: ☢️ DAQUI PRA CIMA É TUDO MOCK ☢️

class Product {
  async findAll() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return MOCK_PRODUCTS;
  }

  async findByPk(id) {
    const product = MOCK_PRODUCTS.find(product => product.id === id);
    return product;
  }

  async create(product) {
    const newProduct = {
      id: MOCK_PRODUCTS.length.toString(),
      ...product,
    };
    MOCK_PRODUCTS.push(newProduct);
    return newProduct;
  }

  async update() {
    // TODO: implement mocked update method
    return 1;
  }

  async destroy() {
    // TODO: implement mocked update method
    return 1;
  }
}

export default new Product();
