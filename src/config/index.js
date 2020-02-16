module.exports = {
  DATABASE: {
    database: 'practica',
    username: 'postgres',
    password: 'postgres',
    options: {
      host: 'localhost',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0
      },
      define: {
        underscored: true,
        timestamps: true
      },
      logging: false
    }
  }
}
