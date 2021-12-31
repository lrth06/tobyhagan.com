const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        url: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
    },
    body: {
        type: String,
        required: true,
    },
    tags: [
        {
            type: String,
            required: true,
        },
    ],

    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});
module.exports =
    mongoose.models.Article || mongoose.model('Article', ArticleSchema);

