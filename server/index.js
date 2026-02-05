require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/authRoutes')
const connectDb = require('./config/db')
const cartRouter = require('./routes/cartRoutes')
const productsRouter = require('./routes/productsRoutes')
const { loadingDashboard } = require('./controllers/productsController')
const app = express()
const port = 3000

connectDb()

app.use(express.json())
app.use(cors({
    origin:[process.env.ORIGIN],
    credentials:true
}))
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/cart",cartRouter)
app.use("/api/products",productsRouter)
app.use("/",productsRouter)

app.listen(port, '127.0.0.1', () => {
  console.log(`Server listening on port ${port}`)
})