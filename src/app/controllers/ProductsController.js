import Product from '../models/Product';

class ProductsController {
  async index(req, res) {
    if (req.query.name) {
      const products = await Product.findAll({
        where: {
          name: req.query.name,
        },
      });
      return res.status(200).json(products);
    }

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
    const { id } = req.params;
    const { name, price } = req.body;
    const nUpdated = await Product.update({ name, price }, {
      where: { id: id },
    });
    return res.json({ sucess: true, nUpdated });
  }

  async delete(req, res) {
    const { id } = req.params;
    const nDeleted = await Product.destroy({
      where: { id: id },
    });
    return res.json({ sucess: true, nDeleted });
  }
}

export default new ProductsController();
