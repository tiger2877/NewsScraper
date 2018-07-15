/*
Article Model
--------------
Creates an Article Schema and store the Article's: headline, summary, url, pic and comments (array).
*/

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ArticleSchema = new Schema({

    headline: {
        type: String,
        required: true
    },

    summary: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    pic: {
        type: String,
        trim: true
    },

    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]

});

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;