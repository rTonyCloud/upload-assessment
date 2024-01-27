import { finished } from 'stream/promises'
import FileModel from '../models/upload'
import fs, { createReadStream } from 'fs'
import path from 'path'
// @ts-ignore
import { GraphQLUpload } from 'graphql-upload'
import { File, Resolvers } from '../interfaces/uploadTypes'

const resolvers: Resolvers = {
	Upload: GraphQLUpload,

	Query: {
		uploads: async (): Promise<File[]> => {
			try {
				const documents = await FileModel.find({})
				return documents.map((doc) => ({
					filename: doc.filename,
					mimetype: doc.mimetype,
					encoding: doc.encoding,
					createdAt: doc.createdAt,
				}))
			} catch (err) {
				console.log('Error in fetching uploads', err)
				return []
			}
		},
	},

	Mutation: {
		singleUpload: async (parent, args) => {
			const { file } = args
			const { createReadStream, filename, mimetype, encoding } = await file

			const stream = createReadStream()
			const chunks: Buffer[] = []
			for await (const chunk of stream) {
				chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
			}
			const buffer = Buffer.concat(chunks)

			const fileData = new FileModel({
				filename,
				mimetype,
				encoding,
				data: buffer,
				createdAt: new Date(),
			})
			await fileData.save()
			console.log(`File saved to MongoDB: ${fileData.filename}`);
			return {
				filename: fileData.filename,
				mimetype: fileData.mimetype,
				encoding: fileData.encoding,
				createdAt: fileData.createdAt,
			}
		},
	},
}

export { resolvers }
