const express = require('express')
import cors from 'cors'
import routes from './routes'
const app = express()

// Setrings
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors(corsOptions))

// Route

app.use('/api', routes)

export default app
