module.exports = (
  sequelize,
  { UUID, STRING, BOOLEAN, TEXT, DATE, NOW, TINYINT, UUIDV4, INTEGER }
) => {
  const Article = sequelize.define('Article', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4()
    },
    title: {
      type: STRING,
      allowNull: false,
      unique: true
    },
    content: {
      type: TEXT,
      allowNull: false
    },
    viewCount: {
      type: INTEGER,
      defaultValue: 0
    }
  })
  Article.associate = models => {
    Article.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
    Article.hasMany(models.Tag, {
      foreignKey: {
        name: 'articleId',
        field: 'article_id'
      },
      as: 'tags',
      onUpdate: 'CASCADE'
    })
    Article.belongsToMany(models.Category, {
      foreignKey: {
        name: 'articleId',
        field: 'article_id'
      },
      through: 'Category_Group',
      as: 'categories',
      onUpdate: 'CASCADE'
    })
    Article.hasMany(models.Comment, {
      foreignKey: {
        name: 'articleId',
        field: 'article_id'
      },
      as: 'comments'
    })
    Article.hasMany(models.Reply, {
      foreignKey: {
        name: 'articleId',
        field: 'article_id'
      },
      as: 'replies'
    })
  }
  return Article
}
