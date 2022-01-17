const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageViewSchema = new Schema({
    path: {
        type: String,
        required: true,
    },
    views: [
        {
            ip: {
                type: String,
                required: true,
            },
            time: {
                type: Date,
                default: Date.now,
            },
        },
    ]
});


module.exports =
    mongoose.models.PageView || mongoose.model('PageView', PageViewSchema);

