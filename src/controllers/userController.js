import User from '../models/user'
import Role from '../models/role'
import user_role from '../models/userRole'

export const Index = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          association: 'articles',
        },
        {
          association: 'roles',
          attributes: ['name'],
          through: { attributes: [] },
        },
      ],
    })
    req.user = users

    if (users.length) {
      res.status(200).json({ users })
    } else {
      res.status(204).json({ message: 'NO CONTENT' }).send('no user')
    }
    console.log(JSON.parse(users))
  } catch (error) {
    res.status(500).json(error)
  }
}

export const Show = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        {
          association: 'roles',
          attributes: ['name'],
          through: { attributes: [] },
        },
      ],
    })
    res.status(200).json({ user })
    const rol = user.toJSON()
    console.log(rol.roles[0].name)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const Create = async (req, res) => {
  const { roles, ...data } = req.body

  const [role, created] = await Role.findOrCreate({
    where: { name: roles },
  })

  try {
    const user = await User.create(data)
    user.addRole(role)
    res.status(201).json({ message: 'Created succesfuly' })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const Update = async (req, res) => {
  try {
    const user = await User.findOne(req.params.id)
    const newUser = Object.assign(user, req.body)
    await newUser.save()
    res.status(200).json({ message: 'UPDATE', newUser })
  } catch (err) {
    res.status(500).send(err)
  }
}

export const Remove = () => {}
