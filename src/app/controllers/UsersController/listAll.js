import { User } from "../../models";


export default async function (req, res) {
  const users = await User.findAll()
  return res.status(200).json(users);
}
