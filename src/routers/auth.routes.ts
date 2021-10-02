import { Router } from 'express';
import * as Usercontroller from '../controllers/user-controller';
const authRouter = Router();


authRouter.post('/singup', Usercontroller.singUp);
authRouter.post('/singin', Usercontroller.singIn);

export default authRouter;