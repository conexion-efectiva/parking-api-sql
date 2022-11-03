const express = require('express')
const router = express.Router()
const UserController = require('../controller/UserController')
const validateBody = require('../middleware/validateBody')
const {userSchema, userUpdateSchema } = require('../validator/userValidator')
const jwtAuthenticationMiddleware = require('../middleware/jwtAuthentication')


router.get('/user', jwtAuthenticationMiddleware, (req, res) =>
  UserController.getInstance().getList(req, res)
)
router.get('/user/:id', jwtAuthenticationMiddleware, (req, res) =>
  UserController.getInstance().getOne(req, res)
)

router.put('/user/:id', jwtAuthenticationMiddleware, validateBody(userUpdateSchema), (req, res) => UserController.getInstance().put(req, res))
router.delete('/user/:id', jwtAuthenticationMiddleware, (req, res) =>
  UserController.getInstance().delete(req, res)
)

module.exports = router