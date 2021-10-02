"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.singIn = exports.singUp = void 0;
const user_1 = __importDefault(require("../models/user"));
const debug_1 = __importDefault(require("debug"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const debug = (0, debug_1.default)('logger:UserController');
function createToken(user) {
    return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, config_1.default.jwtSecret, {
        expiresIn: 86400 /* this is basicaly a day in seconds */
    });
}
const singUp = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ msg: 'please send your password and email' });
    }
    const user = await user_1.default.findOne({ email: req.body.email });
    if (user) {
        return res.status(200).send({ msg: "User already exist.", user });
    }
    console.log(req.body);
    const newUser = new user_1.default(req.body);
    await newUser.save();
    return res.status(201).send(newUser);
};
exports.singUp = singUp;
const singIn = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ msg: 'please send your password and email' });
    }
    const user = await user_1.default.findOne({ email: req.body.email });
    debug('user found was %j', user);
    if (!user) {
        return res.status(404).send({ msg: "this user doesn't exist" });
    }
    const isMatch = await user.comparePassword(req.body.password);
    debug('its a match for password %j', isMatch);
    if (isMatch) {
        return res.status(200).json({ token: createToken(user) });
    }
    return res.status(400).json({ msg: "password or email is incorrect" });
};
exports.singIn = singIn;
//# sourceMappingURL=user-controller.js.map