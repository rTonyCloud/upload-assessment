const dotenv = require('dotenv')

dotenv.config({ path: '../.env' })

export const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
}
export const PORT = process.env.PORT
export const API_SERVER = process.env.API_SERVER

// database connection and logic
export const DBName = process.env.DATABASE_NAME
export const DBUser = process.env.DATABASE_USER
export const DBPass = process.env.DATABASE_PASSWORD
export const DBHost = `mongodb://${DBUser}:${DBPass}@localhost:27017/${DBName}?authSource=admin`

// file upload
export const UPLOAD_PATH = 'uploads/'
export const UPLOAD_URL = 'http://localhost:4000/uploads/'

export const MAX_FILE_SIZE = 15000000 // 15MB
export const MAX_FILES = 1
export const FILE_TYPES = ['msWord', 'pdf']
