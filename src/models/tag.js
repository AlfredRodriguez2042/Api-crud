export default (
  sequelize,
  { UUID, STRING, BOOLEAN, TEXT, DATE, NOW, UUIDV4 }
) => {
  const Tag = sequelize.define('Tag', {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    name: {
      type: STRING,
      allowNull: false
    }
  })
  Tag.associate = models => {
    Tag.belongsTo(models.Article)
  }
  return Tag
}
