// import { v2 as cloudinary } from 'cloudinary'
// import multer from 'multer'
// import * as fs from 'fs'
// import { ICloudinaryResponse, IUploadFile } from '../interfaces/file'

// cloudinary.config({
//   cloud_name: 'dlfxrxafc',
//   api_key: '492396143622728',
//   api_secret: 'Q1Jb1ZvVOYj6hOTwc-DwY4hTkTM',
// })

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   },
// })

// const upload = multer({ storage: storage })

// const uploadToCloudinary = async (
//   file: IUploadFile,
// ): Promise<ICloudinaryResponse> => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(
//       file.path,
//       (error: Error, result: ICloudinaryResponse) => {
//         fs.unlinkSync(file.path)
//         if (error) {
//           reject(error)
//         } else {
//           resolve(result)
//         }
//       },
//     )
//   })
// }

// export const FileUploadHelper = {
//   uploadToCloudinary,
//   upload,
// }
