import * as restify from 'restify';
import { handleRoutesFor } from './routes';

let server = restify.createServer({
    name: 'TinyUrl App'
});

// This line MUST appear before any route declaration such as the one below
// Restify Middleware
server.use(restify.throttle({
    burst: 100,
    rate: 50,
    ip: true
}));
server.use(restify.bodyParser());

handleRoutesFor(server);

server.listen(8080, function() {
    console.log('%s listen at %s', server.name, server.url);
});