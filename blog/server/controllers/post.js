const Post = require('../models/post');
const FeaturedPost = require('../models/featuredPost');

const fs = require('fs');
const path = require('path');

const FEATURED_POST_COUNT = 4;

const addToFeaturedPost = async (postId) => {
    const isAlreadyExits = await FeaturedPost.findOne({ post: postId });
    if( isAlreadyExits ) return;

    const featuredPost = new FeaturedPost({ post: postId });
    await featuredPost.save();

    const featuredPosts = await FeaturedPost.find({}).sort({ createAt: -1 });
    featuredPosts.forEach(async (post, index) => {
        if(index >= FEATURED_POST_COUNT) await FeaturedPost.findByIdAndDelete(post._id);
    });
}

exports.createPost = async (req, res) => {
    // console.log('req.body : ', req.body);
    // console.log('req.rawHeaders : ', req.rawHeaders);
    // console.log('req.file : ', req.file);
    const thumbnail = {
        filename: req.file.filename,
        originalname: req.file.originalname
    }
    // res.status(200).send(req.body);
    const { title, content, meta, tags, author, slug } = req.body;
    const newPost = new Post({title, content, meta, tags, author, slug, thumbnail});

    // slug 확인
    const isAlreadyExits = await Post.findOne({slug});
    if(isAlreadyExits) return res.status(401).json({error: 'slug는 유일한 값으로 지정해야합니다.'});

    await newPost.save();

    // 최근 글 등록
    if(featured) await addToFeaturedPost(newPost._id)
    res.json({post: {
        id: newPost._id,
        title,
        content,
        meta,
        slug,
        thumbnail: newPost.thumbnail?.filename,
        author: newPost.author
    }})

    // res.json(newPost);
};