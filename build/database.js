"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
mongoose_1.default.connect(config_1.default.DB.URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('mongo conection stablished');
});
connection.on('error', (e) => {
    console.log('error on db conection', e);
});
//# sourceMappingURL=database.js.map