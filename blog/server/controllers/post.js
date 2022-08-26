const Post = require('../models/post');
const fs = require('fs');
const path = require('path');

exports.createPost = (req, res) => {
    console.log('req.body : ', req.body);
    console.log('req.rawHeaders : ', req.rawHeaders);
    const thumbnail = {
        filename: req.file.filename,
        originalname: req.file.originalname
    }
    // res.status(200).send(req.body);
    const { title, content, meta, tags, author, slug } = req.body;
    const newPost = new Post({title, content, meta, tags, author, slug, thumbnail});
    newPost.save();
    res.json(newPost);
};