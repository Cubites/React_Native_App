const mongoose = require('mongoose');

const featuredPostSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId, // ref에 적은 테이블에서 값을 가져옴
        ref: 'Post',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('FeaturedPost', featuredPostSchema);