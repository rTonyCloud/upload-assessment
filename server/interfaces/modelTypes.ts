interface IFile extends Document {
	filename: string
	mimetype: string
	encoding: string
	data: Buffer
	createdAt: Date
}

export { IFile }
