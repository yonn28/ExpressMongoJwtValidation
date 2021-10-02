import {Strategy, ExtractJwt, StrategyOptions} from 'passport-jwt';
import config from '../config/config';
import User from '../models/user';
import debugLib from 'debug';

const debug = debugLib('logger:middlewarePassport')

const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

export default new Strategy(options, async (payload, done) => {
    try{
        const user = await User.findById(payload.id);
        if(user){
            return done(null, user);
        }
        return done( null, false );
    } catch (e) {
        debug('there was an error', e);
    }
})