import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { DBName, DBHost } from '../helper/dotEnv'
dotenv.config()

console.log('Attempting to connect to database...')
export const ConnectDB = async () => {
  try {
    await mongoose.connect(DBHost)
    console.log(`Database connected successfully: ${DBName}`)
    console.log(`Database host: ${DBHost}`)
  } catch (err) {
    console.log('Error connecting to database', err)
    process.exit(1)
  }
}