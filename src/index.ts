import app from './app';
import './database'

app.listen(app.get('port'));

console.log(`server on port , port is ${app.get('port')}`)