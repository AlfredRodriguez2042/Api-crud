export default (
  sequelize,
  { UUID, STRING, BOOLEAN, TEXT, DATE, NOW, UUIDV4 }
) => {
  const Comment = sequelize.define('Comment', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4()
    },
    content: {
      type: TEXT,
      allowNull: false
    }
  })
  Comment.associate = models => {
    Comment.belongsTo(models.Article, {
      foreignKey: 'article_id',
      as: 'article'
    })
    Comment.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
    Comment.hasMany(models.Reply)
  }

  return Comment
}
