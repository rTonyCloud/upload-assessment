import { gql } from '@apollo/client'
export const uploadFiles = gql`
	mutation SingleUpload($file: Upload!) {
		singleUpload(file: $file) {
			filename
			mimetype
			encoding
			createdAt
		}
	}
`
