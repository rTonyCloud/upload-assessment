import { finished } from 'stream/promises'
import FileModel from '../models/upload'
import fs from 'fs'
import path from 'path'
// @ts-ignore
import { GraphQLUpload } from 'graphql-upload'

interface File {
	filename: string
	mimetype: string
	encoding: string
	createReadStream: () => NodeJS.ReadableStream
}

interface SingleUploadMutationArgs {
	file: Promise<File>
}

interface SingleUploadMutationResponse {
	filename: string
	mimetype: string
	encoding: string
	url: string
	createdAt: Date
}

interface Resolvers {
	Upload: GraphQLUpload
	Mutation: {
		singleUpload: (
			parent: any,
			args: SingleUploadMutationArgs,
		) => Promise<SingleUploadMutationResponse>
	}
}

const resolvers: Resolvers = {
	Upload: GraphQLUpload,
	Mutation: {
		singleUpload: async (parent, args) => {
			const { file } = args
			const { createReadStream, filename, mimetype, encoding } = await file

			const uploadPath = path.join(__dirname, '/uploads', filename)

			const out = fs.createWriteStream(uploadPath)
			const stream = createReadStream()
			stream.pipe(out)
			await finished(out)

			const fileData = new FileModel({
				filename,
				mimetype,
				encoding,
				url: uploadPath, // Adjust as needed for your URL structure
				createdAt: new Date(),
			})
			await fileData.save()

			return {
				filename: fileData.filename,
				mimetype: fileData.mimetype,
				encoding: fileData.encoding,
				url: fileData.url,
				createdAt: fileData.createdAt,
			}
		},
	},
}

export { resolvers }
