const express = require('express')
const controller = require('../controllers/controller')
 router = express.Router()

  router.get("/", controller.getHomePage)
  router.get('/add-new', controller.addArticle)
  router.post('/add-new-article',controller.postArticle)
  router.get('/find-one/:id', controller.getOne)
  router.get('/update-new-article/:id',controller.updateUser)
  router.post('/update-all/:id',controller.updateAllUsers)
  router.get('/delete-user/:id',controller.deleteUsers)
  router.all('/*',controller.page404)








module.exports = router