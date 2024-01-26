import mongoose from 'mongoose';
import { IFile } from '../interfaces/uploadInterface';


const fileSchema = new mongoose.Schema<IFile>({
    filename: {type: String, required: true},
    mimetype: {type: String, required: true},
    fileData: {type: Buffer, required: true},
    path: {type: String, required: true}
});

const FileModel = mongoose.model('FileModel', fileSchema);

export default FileModel;