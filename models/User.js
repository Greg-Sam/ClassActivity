const { model, Schema } = require('mongoose')

const User = new Schema({

  
  email: {
    type: String,
    required: true,
    unique: true
  },
  user_name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
    
  },
  posts:[{
   type: Schema.Types.ObjectId,
   ref: 'Post'
  }]
 
}, {timestamps: true })

module.exports = model('User', User)
