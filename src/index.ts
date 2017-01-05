import * as restify from 'restify';
import { handleRoutesFor } from './routes';
import { Info } from './utils/log';

let server = restify.createServer({
    name: 'TinyUrl App'
});

// --------------------------------------------------------------
// Restify Middlewares

// CORS support
server.pre(function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
});

// server.pre(restify.CORS());
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.throttle({
    burst: 100,
    rate: 50,
    ip: true
}));

// Routes Handler
handleRoutesFor(server);

server.listen(8080, function() {
    Info(`${server.name} listen at ${server.url}`);
});
