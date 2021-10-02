"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routers/auth.routes"));
const special_routes_1 = __importDefault(require("./routers/special.routes"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
//initialization
const app = (0, express_1.default)();
//settings
app.set('port', process.env.PORT || 3000);
//middleware
// Configurar cabeceras y cors
app.use((0, cors_1.default)());
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
// routes
app.get('/', (_, res) => {
    res.send(`the api is at http://localhost:${app.get('port')}`);
});
app.use(auth_routes_1.default);
app.use(special_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map