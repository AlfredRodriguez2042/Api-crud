import models from '../models'

const { User } = models

export const Index = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          association: 'articles'
        }
      ]
    })
    console.log(users)
    if (users.length) {
      res.status(200).json({ users })
    } else {
      res
        .status(204)
        .json({ message: 'NO CONTENT' })
        .send('no user')
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export const Show = async (req, res) => {
  try {
    const oneUser = await User.findOne(req.params.id)
    res.status(200).json({ oneUser })
  } catch (err) {
    res.status(500).send(err)
  }
}

export const Create = async (req, res) => {
  console.log(req.body)
  try {
    await User.create(req.body)
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
