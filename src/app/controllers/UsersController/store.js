import User from '../../models/User';
import * as Yup from 'yup';

export const USER_SCHEMA = {
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
};

export default async function (req, res) {
  const { name, email, password } = req.body;

  try {
    await Yup.object().shape(USER_SCHEMA).validate({ name, email, password });

    const newUser = await User.create({ name, email, password });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
