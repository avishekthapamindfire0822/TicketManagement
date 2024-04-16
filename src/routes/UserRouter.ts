import * as express from 'express'
import * as userController from '../controllers/UserController'
import authenticateJWT from '../utils/AuthMiddleware'


const UserRouter = express.Router()

UserRouter.post('/', userController.createUser)
UserRouter.post('/login', userController.userloginControoler)
UserRouter.get('/:id', authenticateJWT, userController.getUserController,)


export default UserRouter
