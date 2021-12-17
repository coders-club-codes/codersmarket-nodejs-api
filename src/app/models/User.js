import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
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
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: Sequelize.VIRTUAL,
        password_hash: {
          type: Sequelize.STRING,
          field: 'password',
        },
      },
      {
        tableName: 'users',
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  hashPassword(password) {
    return bcrypt.hash(password, 8);
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  // static associate(models) {
  //   this.belongsTo(models.Licence, {
  //     foreignKey: 'id_licence',
  //     as: 'licence',
  //   });
  // }
}

export default User;
