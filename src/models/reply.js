export default (sequelize, { UUID, TEXT, UUIDV4 }) => {
  const Reply = sequelize.define(
    'Reply',
    {
      id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4()
      },
      content: { type: TEXT, allowNull: false }
    },
    {
      timestamps: true
    }
  )

  Reply.associate = models => {
    Reply.belongsTo(models.User)
  }

  return Reply
}
