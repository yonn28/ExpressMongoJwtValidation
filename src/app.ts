import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRouter from './routers/auth.routes';
import specialRouter from './routers/special.routes';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

//initialization
const app = express();


//settings

app.set('port', process.env.PORT || 3000);

//middleware
// Configurar cabeceras y cors
app.use(cors())
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); 
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE'); 
    next(); 
});
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);


// routes

app.get('/', ( _ , res) => {
    res.send(`the api is at http://localhost:${app.get('port')}`);
});

app.use(authRouter);
app.use(specialRouter);

export default app;