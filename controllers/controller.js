const user = require('../module/Users')
const {handlerError} = require('../config/errorsHandler')


const getHomePage = (req,res) => {
   user.find()
   .then((result) => {
      res.render('homePage',{title: 'home page',result})
   })
   .catch(err => console.log(err))
}

const addArticle = (req, res) =>{
res.render('addArticle',{title:'post Article', errors: null}) 
}

const postArticle = (req,res) =>{
   const article = new user(req.body)
   article.save()
   .then((result) => {
      res.redirect('/')
   })
   .catch((err) => {
      // const errors = {}
      // // console.log(err.errors)
      // Object.values(err.errors).forEach((data) => {
      //       // console.log(data.properties.message)
      //       errors[data.properties.path] = data.properties.message
      // })
      const errors = handlerError(err)
      res.render('addArticle',{title:'post Article',errors}) 
// console.log(error)
   })
}


const getOne = (req, res) => {
   user.findById(req.params.id)
  .then(result => {
     res.render('showOne',{title:"show one",user: result})
  })
  .catch((err) => console.log(err))

}





const updateUser = (req, res) => {
   user.findById(req.params.id)
   .then(result => {
      res.render('updateOne',{title:"edit one",user: result,errors:null})
   })
   .catch((err) => console.log(err))

 }




 const updateAllUsers = (req, res) => {
    user.findByIdAndUpdate(req.params.id,  req.body, {runValidators: true})
    .then(() => {
       res.redirect('/')
    })

   .catch((err) => {
      // const errors = {}
      // console.log(err.errors)
   // Object.values(err.errors).forEach((data) => {
         // console.log(data.properties.message)
      // errors[data.properties.path] = data.properties.message
      // })
      const errors = handlerError(err)
      user.findById(req.params.id)
      .then((result) => {
         res.render('updateOne',{title:"edit one",user: result, errors})
      })
      // console.log(errors)
   })
 }




 const deleteUsers = (req, res) =>{
      user.findByIdAndDelete(req.params.id)
      .then(() => {
         res.redirect('/')
      })
      .catch((err) =>console.log(err) ) 
 }


 const page404 = (req,res) => {
  res.status(404).render('page404', {title:'404'})
 }


module.exports = {
	getHomePage ,
   addArticle,
   postArticle,
   getOne,
   updateUser,
   updateAllUsers,
   deleteUsers,
   page404
}