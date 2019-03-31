import Server from "./classes/server";
import router from "./routes/router";

import bodyParser from 'body-parser';
import cors from 'cors';



const server = Server.instance;

// Body parser
server.app.use(bodyParser.urlencoded({ extended: true}));
server.app.use(bodyParser.json());

//cors
server.app.use( cors({origin:true, credentials:true }));

//rutas de servicios
server.app.use('/', router);



server.start(()=>{
    console.log(`Servidor correidno en el puerto ${server.port}`);
});