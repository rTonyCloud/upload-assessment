// @ts-ignore
import { GraphQLUpload } from 'graphql-upload'

interface File {
	filename: string
	mimetype: string
	encoding: string
	createdAt: Date
}

interface UploadFile extends File {
	createReadStream: () => NodeJS.ReadableStream
}

interface SingleUploadMutationArgs {
	file: Promise<UploadFile>
}

interface SingleUploadMutationResponse extends File {}

interface Resolvers {
	Upload: GraphQLUpload
	Query: {
		uploads: () => Promise<File[]>
	}
	Mutation: {
		singleUpload: (
			parent: any,
			args: SingleUploadMutationArgs,
		) => Promise<SingleUploadMutationResponse>
	}
}

export { Resolvers, File }
