const router = require('express').Router();
const { createPost } = require('../controllers/post');
const { parseData } = require('../middlewares');
const multer = require('../middlewares/multer');
const { postValidator, validate } = require('../middlewares/postValidator');

router.post(
    '/create', 
    multer.single('thumbnail'), 
    parseData,
    postValidator, 
    validate, 
    createPost
);

module.exports = router;