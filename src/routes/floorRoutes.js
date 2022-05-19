const express=require('express')
const jwtAuthenticationMiddleware = require('../middleware/jwtAuthentication')
const router =express.Router()
const validateBody = require('../middleware/validateBody')
const FloorController=require('../controller/FloorController')
const {FloorSchema}=require('../validator/floorValidator')

router.get('/floor',jwtAuthenticationMiddleware,(req,res)=>FloorController.getInstance().getList(req,res))
router.get('/floor/:id',jwtAuthenticationMiddleware,(req,res)=>FloorController.getInstance().getOne(req,res))
router.post('/floor',validateBody(FloorSchema),jwtAuthenticationMiddleware,(req,res)=>FloorController.getInstance().post(req,res))
router.put('/floor/:id',validateBody(FloorSchema),jwtAuthenticationMiddleware,(req,res)=>FloorController.getInstance().put(req,res))
router.delete('/floor/:id',jwtAuthenticationMiddleware,(req,res)=>FloorController.getInstance().delete(req,res))

module.exports=router