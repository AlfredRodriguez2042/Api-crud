export default (
  sequelize,
  { UUID, STRING, BOOLEAN, TEXT, DATE, NOW, UUIDV4 }
) => {
  const Category = sequelize.define('Category', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4()
    },
    name: {
      type: STRING,
      allowNull: false
    }
  })
  Category.associate = models => {
    Category.belongsToMany(models.Article, {
      foreignKey: {
        name: 'categoryId',
        field: 'category_id'
      },
      through: 'Category_Group',
      as: 'articles',
      onUpdate: 'CASCADE'
    })
  }
  return Category
}
