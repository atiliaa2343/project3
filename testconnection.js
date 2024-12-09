const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://atiliaathomas:Basketball12@cluster0.y9dfl.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connection successful');
        process.exit(0); // Exit the script if successful
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit with an error code if it fails
    });
