import { Model, DataTypes } from 'sequelize'
const { UUID, UUIDV4, STRING, TEXT, INTEGER, ENUM } = DataTypes

class User extends Model {
  static init(sequelize) {
    super.init(
      {
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
        }
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsToMany(models.Role, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      },
      through: 'user_role',
      as: 'roles',
      onUpdate: 'CASCADE'
    })
    this.hasMany(models.Article, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      },
      as: 'articles'
    })
    this.hasMany(models.Comment, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      },
      as: 'comments'
    })
    this.hasMany(models.Reply, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      },
      as: 'replies'
    })
  }
}
export default User

// export default (
//   sequelize,
//   { UUID, STRING, BOOLEAN, TEXT, DATE, NOW, UUIDV4, ENUM }
// ) => {
//   const User = sequelize.define('User', {
//     id: {
//       primaryKey: true,
//       allowNull: false,
//       type: UUID,
//       defaultValue: UUIDV4()
//     },
//     username: {
//       type: STRING,
//       allowNull: false
//     },
//     password: {
//       type: STRING,
//       allowNull: false
//     },
//     email: {
//       type: STRING,
//       allowNull: false
//     },
//     role: {
//       type: ENUM('admin', 'user'),
//       defaultValue: 'user',
//       allowNull: false
//     }
//   })
//   User.associate = models => {
//     User.hasMany(models.Article, {
//       foreignKey: {
//         name: 'userId',
//         field: 'user_id'
//       },
//       as: 'articles'
//     })
//     User.hasMany(models.Comment, {
//       foreignKey: {
//         name: 'userId',
//         field: 'user_id'
//       },
//       as: 'comments'
//     })
//     User.hasMany(models.Reply, {
//       foreignKey: {
//         name: 'userId',
//         field: 'user_id'
//       },
//       as: 'replies'
//     })
//   }
//   return User
// }
