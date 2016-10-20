import * as restify from 'restify';
import { handleRoutesFor } from './routes';

let server = restify.createServer({
    name: 'TinyUrl App'
});
// Restify Middleware
server.use(restify.queryParser());
server.use(restify.bodyParser());
// This line MUST appear before any route declaration such as the one below
server.use(restify.throttle({
    burst: 100,
    rate: 50,
    ip: true
}));

server.use(restify.CORS())
server.use(restify.fullResponse());

handleRoutesFor(server);

server.listen(8080, function() {
    console.log('%s listen at %s', server.name, server.url);
});
