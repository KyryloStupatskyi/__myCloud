const express = require("express")
const cors = require("cors")

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is working at PORT ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()