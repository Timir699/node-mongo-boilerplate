import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use("/api/v1/", routes);

// testing

app.get('/', (req: Request, res: Response) => {
  res.json(`working successfully`)
})
// app.get("/", async () => {
//   throw new Error("testing error logger");
// });

export default app
