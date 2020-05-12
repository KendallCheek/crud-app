const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://Kendall:bjL8IZPFaS0CtQNU@crud-app-9iktt.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/EmployeeDB', { 
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected.');
});

require('./employee.model');