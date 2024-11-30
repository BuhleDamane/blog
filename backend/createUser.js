const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const MONGO_URI = process.env.MONGODB_URI; // MongoDB URI (local or Atlas)

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

mongoose.connect(MONGO_URI)
  .then(async () => {
      const username = 'testuser'; // The username you will use for testing login
      const password = 'password123'; // The password you want to test with
      
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create a new user document
      const newUser = new User({ username, password: hashedPassword });
      
      // Save the user to the database
      await newUser.save();
      
      console.log('User created successfully!');
      mongoose.disconnect();
  })
  .catch(err => {
      console.error('Error creating user:', err);
      mongoose.disconnect();
  });
