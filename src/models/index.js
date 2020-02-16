import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import { DATABASE } from '../config'

const { username, password, database, options } = DATABASE
const basename = path.basename(__filename)
const sequelize = new Sequelize(database, username, password, options)

const models = {}

fs.readdirSync(__dirname)
  .filter(file => file !== basename)
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    models[model.name] = model
  })

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
//db.sequelize = sequelize

export default models
