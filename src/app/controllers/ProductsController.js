import Product from '../models/Product';

class ProductsController {
  async index(req, res) {
    const products = await Product.findAll({});

    // Status 200: OK Success
    return res.status(200).json(products);
  }

  async find(req, res) {
    const product = await Product.findByPk(req.params.id);
    return res.status(200).json(product);
  }

  async create(req, res) {
    const { name, price } = req.body;

    if (price < 0) {
      // Status 400: Bad request
      return res.status(400).json({
        success: false,
        error: 'Product price cannot be a negative value',
      });
    }

    const newProduct = await Product.create({ name, price });

    // Status 201: Created
    return res.status(201).json(newProduct);
  }

  async update(req, res) {
    const nUpdated = await Product.update(req.params.id);
    return res.json({ sucess: true, nUpdated });
  }

  async delete(req, res) {
    const nDeleted = await Product.destroy(req.params.id);
    return res.json({ sucess: true, nDeleted });
  }
}

export default new ProductsController();
