const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AddArticle = new Schema({
	title:{
type: String,
    required:[true,'Please put title '],
    minlength:[3, 'the title should has at lest 3 characters']
    
	},

  article:{
type: String,
    required:[true,'Please put article '],
    minlength:[4, 'the title should has at lest 4 characters']
    
	}
})

const user = mongoose.model ('user', AddArticle)
module.exports = user