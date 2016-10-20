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

// server.use(restify.CORS())
// server.use(restify.fullResponse());
server.use(
    restify.CORS({
        origins: [
            'http://api.zhibincai.com',
            'https://www.zhibincai.com',
        ],
        headers: [
            "authorization",
            "withcredentials",
            "x-requested-with",
            "x-forwarded-for",
            "x-real-ip",
            "x-customheader",
            "user-agent",
            "keep-alive",
            "host",
            "accept",
            "connection",
            "upgrade",
            "content-type",
            "dnt",
            "if-modified-since",
            "cache-control"
        ]
    })
);

// Handle all OPTIONS requests to a deadend (Allows CORS to work them out)
server.opts( /.*/, ( req, res ) => res.send( 204 ) )

handleRoutesFor(server);

server.listen(8080, function() {
    console.log('%s listen at %s', server.name, server.url);
});
