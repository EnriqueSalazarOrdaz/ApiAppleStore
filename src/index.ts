import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


import gamesRoutes from './routes/gamesRoutes';
import indexRoutes from './routes/indexRoutes';

class Server{
   public app: Application;
    constructor(){
        this.app= express();
        // min 33
        this.config();
        this.routes();
    
    }

config(): void{
    // minuto 32 del video
    // checar process.env.port que se encargara de enviar el puerto que se le asigno por el servidor o usar el puerto 3000 por defecto
 this.app.set('port', process.env.PORT || 3000);
//  min 43
 this.app.use(morgan('dev'));
 this.app.use(cors());
 this.app.use(express.json()); //antes era con bodyparser pero ahora lo trae instalado express
 this.app.use(express.urlencoded({extended:false}))
}

routes(): void{
    this.app.use(indexRoutes);
    this.app.use('/api/games',gamesRoutes);
}

start(): void{
this.app.listen(this.app.get('port'), ()=>{
 console.log('Server in port ',(this.app.get('port')));

});
}

}

const server= new Server();
server.start();