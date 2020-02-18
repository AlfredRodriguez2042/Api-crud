import Comment from '../models/comment'

export const Index = async (req, res) => {
  try {
    const comment = await Comment.findAll()

    if (comment.length) {
      res.status(200).json({ comment })
    } else {
      res.status(204).json({ message: 'NO CONTENT' })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export const Show = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id, {
      attributes: { exclude: ['updatedAt', 'user_id', 'article_id'] }
    })
    res.status(200).json({ comment })
  } catch (err) {
    res.status(500).send(err)
  }
}

export const Create = async (req, res) => {
  console.log(req.body)
  const { content, user_id } = req.body
  const { id } = req.params
  try {
    await Comment.create(req.body)
    res.status(201).json({ message: 'Created successfully' })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const Update = async (req, res) => {
  try {
    const response = await Comment.findOne(req.params.id)
    const comment = Object.assign(response, req.body)
    await newComment.save()
    res.status(200).json({ message: 'UPDATE', comment })
  } catch (err) {
    res.status(500).send(err)
  }
}

export const Remove = () => {}
