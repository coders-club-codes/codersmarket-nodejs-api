import { User } from "../../models";


export default async function (req, res) {
  const users = await User.findByPk(req.params.id);
  return res.status(200).json(users);
}
