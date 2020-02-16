export default (
  sequelize,
  { UUID, STRING, BOOLEAN, TEXT, DATE, NOW, UUIDV4 }
) => {
  const Category_Group = sequelize.define('Category_Group', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4()
    }
  })
  return Category_Group
}
