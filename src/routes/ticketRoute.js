const express=require('express')
const jwtAuthenticationMiddleware = require('../middleware/jwtAuthentication')
const router =express.Router()
const validateBody = require('../middleware/validateBody')
const TicketController=require('../controller/TicketController')
const {TicketSchema}=require('../validator/ticketValidator')

router.get('/ticket',jwtAuthenticationMiddleware,(req,res)=>TicketController.getInstance().getList(req,res))
router.get('/ticket/:id',jwtAuthenticationMiddleware,(req,res)=>TicketController.getInstance().getOne(req,res))
router.post('/ticket',validateBody(TicketSchema),jwtAuthenticationMiddleware,(req,res)=>TicketController.getInstance().post(req,res))
router.put('/ticket/:id',validateBody(TicketSchema),jwtAuthenticationMiddleware,(req,res)=>TicketController.getInstance().put(req,res))
router.delete('/ticket/:id',jwtAuthenticationMiddleware,(req,res)=>TicketController.getInstance().delete(req,res))

module.exports=router