const dotenv = require('dotenv')

dotenv.config({ path: '../.env' })

export const corsOptions = {
	origin: 'http://example.com', // Replace with your frontend's URL
	credentials: true, // Allows cookies to be sent
}
export const PORT = process.env.PORT
export const LOCALHOST_SERVER = process.env.LOCALHOST_SERVER

// database connection and logic
export const DBName = process.env.DATABASE_NAME
export const DBHost = `mongodb://localhost:27017/${DBName}`

// file upload
export const UPLOAD_PATH = 'uploads/'

export const UPLOAD_URL = 'http://localhost:4000/uploads/'

export const MAX_FILE_SIZE = 15000000 // 15MB

export const MAX_FILES = 1

export const FILE_TYPES = ['msWord', 'pdf']
