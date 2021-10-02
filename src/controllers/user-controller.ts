import {Request , Response } from 'express';
import User , { IUser } from '../models/user'
import debugLib from 'debug';
import jwt from 'jsonwebtoken'
import config from '../config/config';

const debug = debugLib('logger:UserController');

function createToken(user: IUser) {
    return jwt.sign({id: user.id, email: user.email}, config.jwtSecret, {
        expiresIn: 86400 /* this is basicaly a day in seconds */
    })
}

export const singUp = async (req: Request, res: Response) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).send({msg: 'please send your password and email'});
    }
    const user = await User.findOne({email: req.body.email})
    if( user  ){
        return res.status(200).send({msg: "User already exist.", user});
    }
    console.log(req.body);
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).send(newUser);
}


export const singIn = async (req: Request, res: Response) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).send({msg: 'please send your password and email'});
    }
    const user = await User.findOne({email: req.body.email});
    debug('user found was %j', user);
    if(!user){
        return res.status(404).send({msg: "this user doesn't exist"})
    }

    const isMatch = await user.comparePassword(req.body.password); 
    debug('its a match for password %j', isMatch);
    if( isMatch ){
        return res.status(200).json({token: createToken(user) });
    }
    return res.status(400).json({msg: "password or email is incorrect"});
}