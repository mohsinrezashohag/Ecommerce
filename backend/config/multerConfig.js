
// multer functionality

const multer = require('multer')
const path = require('path')
const { isAuthenticated } = require('../middleware/isAuthenticated')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploaded-images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
    
})
const upload = multer({ storage: storage })

module.exports = upload