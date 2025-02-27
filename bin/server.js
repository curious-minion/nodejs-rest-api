const mongoose = require('mongoose')
require('dotenv').config()

const app = require('../app')

// const PORT = process.env.PORT || 3000

const { DB_HOST, PORT = 3000 } = process.env
mongoose.connect(DB_HOST)
  .then(() => app.listen(PORT),
    console.log(`Server running. Use our API on port: ${PORT}`))
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })
