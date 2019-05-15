"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        // min 33
        this.config();
        this.routes();
    }
    config() {
        // minuto 32 del video
        // checar process.env.port que se encargara de enviar el puerto que se le asigno por el servidor o usar el puerto 3000 por defecto
        this.app.set('port', process.env.PORT || 3000);
        //  min 43
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); //antes era con bodyparser pero ahora lo trae instalado express
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server in port ', (this.app.get('port')));
        });
    }
}
const server = new Server();
server.start();
