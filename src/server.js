const express = require('express')
import cors from 'cors'
import routes from './routes'
import user from './routes/user'
const app = express()

// Setrings

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// Route

app.use('/api', routes)

export default app
