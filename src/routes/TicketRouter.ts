import * as express from 'express'
import * as ticketController from '../controllers/TicketController'


const ticketRouter = express.Router()


ticketRouter.get('/',ticketController.getalltickets)
ticketRouter.post('/create',ticketController.createtickets)
ticketRouter.put("/:id",ticketController.updateTicket)
ticketRouter.delete("/:id",ticketController.deleteTicket)




export default ticketRouter
