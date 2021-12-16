import * as Yup from 'yup';
import User from '../../models/User';
import jwt from 'jsonwebtoken';
import config from '../../../config/auth';

const SIGN_IN_SCHEMA = {
  email: Yup.string().email().required(),
  password: Yup.string().required(),
};

export default async function (req, res) {
  // receber o email e senha
  const { email, password } = req.body;

  try {
    // validar schema
    await Yup.object().shape(SIGN_IN_SCHEMA).validate({ email, password });

    // procurar se o usuario é valido
    const user = await User.findOne({
      where: { email: email },
    });

    // verificar o hash das senhas
    if (!user || !(await User.checkPassword(password, user.password))) {
      return res.status(401).json({
        error: 'Unauthorized access. verify your email and password',
      });
    }

    // retornar um token
    return res.json({
      user,
      token: jwt.sign({ id: user.id }, config.secret, {
        expiresIn: config.expiresIn,
      }),
    });
  } catch (error) {
    if (error.name === 'ValidationError')
      return res.status(400).json({ error: error.message });
    return res.status(500);
  }
}
