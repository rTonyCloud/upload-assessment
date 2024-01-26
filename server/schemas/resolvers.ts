// Other imports...
// const { GraphQLUpload } = require('graphql-upload/graphqlUploadExpress.mjs')
// const FileModel = require('../models/upload')

// Remove the existing declaration of 'resolvers'
// const resolvers = {

export const resolvers: any = {

// 	Upload: GraphQLUpload,

// 	Mutation: {
// 		uploadFile: async (_: any, { file }: { file: Promise<any> }) => {
// 			const { createReadStream, filename, mimetype } = await file

// 			const allowedMimeTypes = ['application/pdf', 'application/msword']

// 			if (!allowedMimeTypes.includes(mimetype)) {
// 				throw new Error('File type not allowed.')
// 			}

// 			const stream = createReadStream()
// 			const buffer = await streamToBuffer(stream)

// 			const uploadedFile = await File.create({
// 				filename,
// 				mimetype,
// 				fileData: buffer,
// 			})

// 			return uploadedFile
// 		},
// 	},
// }

// function streamToBuffer(stream: any) {
// 	return new Promise((resolve, reject) => {
// 		const chunks: Buffer[] = []
// 		stream.on('data', (chunk: Buffer) => chunks.push(chunk))
// 		stream.on('end', () => resolve(Buffer.concat(chunks)))
// 		stream.on('error', reject)
// 	})
}

module.exports = resolvers