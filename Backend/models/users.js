const mongoose=require('mongoose');
const { schema } = require('./notes');

const userSchema= new schema({

})
module.exports = mongoose.model('notes', NotesSchema);