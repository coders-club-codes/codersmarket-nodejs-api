import bcrypt from 'bcryptjs';

// CUIDADO: ☢️ DAQUI PRA BAIXO É TUDO MOCK ☢️
const MOCK_USERS = [];
// CUIDADO: ☢️ DAQUI PRA CIMA É TUDO MOCK ☢️

class User {
  async findAll(configs) {
    if (configs && configs.where) {
      return MOCK_USERS.filter(user =>
        user.name.toLowerCase().includes(configs.where.name.toLowerCase())
      );
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    return MOCK_USERS;
  }

  async findByPk(id) {
    const user = MOCK_USERS.find(user => user.id === id);
    return user;
  }

  async findOne(query) {
    const { email } = query.where;
    const user = MOCK_USERS.find(user => user.email === email);
    return user;
  }

  async create({ password, ...user }) {
    const newUser = {
      id: MOCK_USERS.length.toString(),
      password: await this.hashPassword(password),
      ...user,
    };

    MOCK_USERS.push(newUser);
    return newUser;
  }

  async update() {
    // TODO: implement mocked update method
    return 1;
  }

  async destroy() {
    // TODO: implement mocked update method
    return 1;
  }
  // banana123 -> a13094oas0984120934
  async hashPassword(password) {
    return bcrypt.hash(password, 8);
  }

  // banana123 -> a13094oas0984120934 === a13094oas0984120934
  async checkPassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }
}

export default new User();
