const { model, Schema } = require('mongoose')


const Post = new Schema({
   
  post: {
    title: String,
    text: String,
    required: true
  },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }
}, { timestamps: true })

module.exports = model( 'Item', Item )