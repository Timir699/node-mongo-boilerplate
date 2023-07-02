import mongoose from 'mongoose'
import config from './config'
import app from './app'
import { Server } from 'http'

process.on('uncaughtException', (error: any) => {
  console.log(error)
  process.exit(1)
})

let server: Server

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`db connected successfully`)

    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(`failed to connect db`, err)
  }

  process.on('unhandledRejection', error => {
    console.log(error)
    if (server) {
      server.close(() => {
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()
