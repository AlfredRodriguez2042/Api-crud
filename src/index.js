import sequelize from './models'
import app from './server'

const PORT = process.env.PORT || 6060

function main() {
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`>>>   🚀   Server ready at http://localhost:${PORT}`)
    })
  })
}
main()
