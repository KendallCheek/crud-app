const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Kendall:bjL8IZPFaS0CtQNU@crud-app-9iktt.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');