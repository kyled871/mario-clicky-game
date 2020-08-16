const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./public/index.html'))
}

