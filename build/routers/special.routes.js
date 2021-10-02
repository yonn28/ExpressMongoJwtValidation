"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const specialRouter = (0, express_1.Router)();
specialRouter.get('/special', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    res.status(200).send({ msg: 'ok validation route' });
});
exports.default = specialRouter;
//# sourceMappingURL=special.routes.js.map