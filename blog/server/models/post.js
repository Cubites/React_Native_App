const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        require: true,
        trim: true
    },
    meta: {
        type: String,
        require: true,
        trim: true
    }, 
    tags: {
        type: [String], // 배열 타입(내용은 String)으로 지정
    },
    author: {
        type: String,
        default: 'Admin'
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    thumbnail: {
        type: Object,
        filename: {
            type: String
        },
        originalname: {
            type: String
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);