const mongoose = require('mongoose');
const Article = require('../models/article'); // Make sure the path is correct

// Connect to your MongoDB Atlas cluster
require('dotenv').config();

mongoose.connect('your-mongodb-uri-here') // Use your MongoDB URI
    .then(() => {
        console.log('Connected to MongoDB');
        
        const newArticle = new Article({
            topic: 'technology',
            title: 'New Tech Advancements in 2024',
            description: 'A short description of the article',
            content: 'Full content of the article',
            imageUrl: 'https://example.com/image.jpg',
            date: new Date(),
        });

        return newArticle.save();
    })
    .then((savedArticle) => {
        console.log('Article saved:', savedArticle);
        mongoose.disconnect(); // Disconnect after the test
    })
    .catch((err) => {
        console.error('Error saving article:', err);
    });
