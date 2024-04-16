import * as express from 'express'
import * as ticketController from '../controllers/TicketController'
import authenticateJWT from '../utils/AuthMiddleware'


const ticketRouter = express.Router()


ticketRouter.get('/',ticketController.getalltickets)
ticketRouter.post('/create',authenticateJWT,ticketController.createtickets)
ticketRouter.put("/:id",authenticateJWT,ticketController.updateTicket)
ticketRouter.delete("/:id",authenticateJWT,ticketController.deleteTicket)




export default ticketRouter
