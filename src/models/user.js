export default (
  sequelize,
  { UUID, STRING, BOOLEAN, TEXT, DATE, NOW, UUIDV4, ENUM }
) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: UUID,
      defaultValue: UUIDV4()
    },
    username: {
      type: STRING,
      allowNull: false
    },
    password: {
      type: STRING,
      allowNull: false
    },
    email: {
      type: STRING,
      allowNull: false
    },
    role: {
      type: ENUM('admin', 'user'),
      defaultValue: 'user',
      allowNull: false
    }
  })
  User.associate = models => {
    User.hasMany(models.Article, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      },
      as: 'articles'
    })
    User.hasMany(models.Comment, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      },
      as: 'comments'
    })
    User.hasMany(models.Reply, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      },
      as: 'replies'
    })
  }
  return User
}
