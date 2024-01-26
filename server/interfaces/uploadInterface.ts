import { Document } from 'mongoose';




interface Upload  {
    filename: string;
    url: string;
    mimetype: string;
    size: number;
    file: File[]
    type: string;
    createdAt: Date;
}

interface IFile extends Document {
    filename: string;
    mimetype: string;
    fileData: Buffer;
    path: string;
}

export { Upload, IFile };