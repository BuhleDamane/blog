const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        enum: ['technology', 'lifestyle', 'law', 'politics'], // restrict topics
    },
    title: {
        type: String,
        required: true,
        trim: true, // Ensure no extra spaces at the beginning or end
    },
    description: {
        type: String,
        required: true,
        trim: true, // Ensure no extra spaces at the beginning or end
    },
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true, // The frontend will upload the image and provide a URL
    },
    date: {
        type: Date,
        required: true,
        default: Date.now, // Set default to current date if not provided
    },
    isTopPick: {
        type: Boolean,
        default: false, // Articles won't be marked as "Top Pick" by default
    },
});

// This ensures that `articleSchema` is used with the name 'Article' in the database
module.exports = mongoose.model('Article', articleSchema);
