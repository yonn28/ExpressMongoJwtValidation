"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const config_1 = __importDefault(require("../config/config"));
const user_1 = __importDefault(require("../models/user"));
const debug_1 = __importDefault(require("debug"));
const debug = (0, debug_1.default)('logger:middlewarePassport');
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config_1.default.jwtSecret
};
exports.default = new passport_jwt_1.Strategy(options, async (payload, done) => {
    try {
        const user = await user_1.default.findById(payload.id);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    }
    catch (e) {
        debug('there was an error', e);
    }
});
//# sourceMappingURL=passport.js.map