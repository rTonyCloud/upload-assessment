import mongoose, { Schema, Document } from 'mongoose'

interface IFile extends Document {
	filename: string
	mimetype: string
	encoding: string
	data: Buffer
	createdAt: Date
}

const FileSchema: Schema<IFile> = new mongoose.Schema({
	filename: { type: String, required: true },
	mimetype: { type: String, required: true },
	encoding: { type: String, required: true },
	data: { type: Buffer, required: true },
	createdAt: { type: Date, default: Date.now },
})

const FileModel = mongoose.model<IFile>('uploadedFiles', FileSchema)

export default FileModel
