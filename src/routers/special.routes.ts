import { Request, Response, Router } from "express";
import passport from "passport";
const specialRouter = Router();


specialRouter.get('/special', passport.authenticate('jwt', {session:false}),(req:Request, res:Response) => {
    res.status(200).send({msg:'ok validation route'});
})

export default specialRouter