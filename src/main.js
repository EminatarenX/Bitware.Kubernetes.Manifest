import express from 'express'

const app = express()

const port = process.env.PORT ?? 4000

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success"
  })
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})