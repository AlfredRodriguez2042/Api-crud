import Category from '../models/category'

import Article from '../models/article'

export const Index = async (req, res) => {
  try {
    const article = await Article.findAll({
      include: [
        {
          association: 'tags',
          attributes: ['name'],
        },
        {
          association: 'categories',
          attributes: ['name'],
          through: { attributes: [] },
        },
      ],
      attributes: { exclude: ['updatedAt', 'user_id'] },
      order: [['createdAt', 'DESC']],
    })
    if (article.length) {
      res.status(200).json({ article })
    } else {
      res.status(204).json({ message: 'NO CONTENT' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export const Show = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id, {
      include: [{ association: 'comments' }],
      attributes: { exclude: ['user_id'] },
    })

    await Article.update(
      {
        viewCount: models.sequelize.literal('view_count +1'),
      },
      {
        where: req.params,
      }
    )
    res.status(200).json({ article })
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

export const Create = async (req, res) => {
  const { categories, ...data } = req.body
  // console.log('category' + categories)
  const [category, created] = await Category.findOrCreate({
    where: { name: categories },
  })
  // console.log('categori', category)
  try {
    const article = await Article.create(data, {
      include: [
        {
          association: 'tags',
        },
      ],
    })
    await article.addCategory(category)
    res.status(201).json({ message: 'Created successfully' })
  } catch (error) {
    console.log('Errro: ' + error)
    res.status(500).json(error)
  }
}

export const Update = async (req, res) => {
  try {
    const article = await Article.update(req.body, {
      where: req.params,
    })
    res.status(200).json({ message: 'Updated successfully', article })
  } catch (err) {
    res.status(500).send(err)
  }
}

export const Remove = async (req, res) => {
  try {
    await Article.destroy({ where: req.params })
    res.status(200).json({ message: 'Deleted successfully' })
  } catch (error) {
    res.status(500).send(error)
  }
}
