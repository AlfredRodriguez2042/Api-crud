import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import { DATABASE } from '../config'
const _ = require('lodash')
const { username, password, database, options } = DATABASE
const basename = path.basename(__filename)
const sequelize = new Sequelize(database, username, password, options)

import Article from './article'
import User from './user'
import Category from './category'
import categoryGroup from './categoryGroup'
import Tag from './tag'
import Reply from './reply'
import Comment from './comment'
import Role from './role'
import user_role from './userRole'

Article.init(sequelize)
User.init(sequelize)
Category.init(sequelize)
categoryGroup.init(sequelize)
Tag.init(sequelize)
Reply.init(sequelize)
Comment.init(sequelize)
Role.init(sequelize)
user_role.init(sequelize)

Article.associate(sequelize.models)
User.associate(sequelize.models)
Category.associate(sequelize.models)
//categoryGroup.init(sequelize.models)
Tag.associate(sequelize.models)
Reply.associate(sequelize.models)
Comment.associate(sequelize.models)
Role.associate(sequelize.models)
// const models = {}

// fs.readdirSync(__dirname)
//   .filter(file => file !== basename)
//   .forEach(file => {
//     const model = sequelize.import(path.join(__dirname, file))
//     models[model.name] = model
//   })
// console.log(models)
// Object.keys(models).forEach(modelName => {
//   if (models[modelName].associate) {
//     models[modelName].associate(models)
//   }
// })

// models.sequelize = sequelize
// //db.sequelize = sequelize

// export default models

// import Article from './article'
// import User from './user'
// import Category from './category'
// import categoryGroup from './categoryGroup'
// import Tag from './tag'
// import Reply from './reply'
// import Comment from './comment'
// const models = {
//   Article: Article.init(sequelize),
//   User: User.init(sequelize),
//   Category: Category.init(sequelize),
//   Tag: Tag.init(sequelize),
//   Reply: Reply.init(sequelize),
//   CategoryGroup: categoryGroup.init(sequelize),
//   Comment: Comment.init(sequelize)
// }

// console.log(models)

// Run `.associate` if it exists,
// ie create relationships in the ORM
// Object.values(models)
//   .filter(model => typeof model.associate === 'function')
//   .forEach(model => model.associate(models))

// const db = {
//   ...models,
//   sequelize
// }

module.exports = sequelize
