import * as restify from 'restify';
import { handleRoutesFor } from './routes';

let server = restify.createServer({
    name: 'TinyUrl App'
});
// Restify Middlewares
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.throttle({
    burst: 100,
    rate: 50,
    ip: true
}));

// CORS Support
server.use(
    restify.CORS({
        origins: [
            'http://api.zbcai.xyz',
            'https://zbcai.xyz',
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

handleRoutesFor(server);

server.listen(8080, function() {
    console.log('%s listen at %s', server.name, server.url);
});
