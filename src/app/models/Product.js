import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        price: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
      },
      {
        tableName: 'products',
        sequelize,
      }
    );
    return this;
  }
}

export default Product;
