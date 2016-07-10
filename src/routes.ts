import { save } from './store/saveUrl';
import * as restify from 'restify';
import {idToShortenUrl, shortUrlToID} from './helpers/shorten';

let respond = (req, res, next) => {
    res.send('hello ' + req.params.name);
    next();
}

let storeTinyUrl = (req, res, next) => {
    let longUrl = req.params.url;
    console.log("The long url is %s", longUrl);
    save(longUrl).then(data => {
        let postfix = idToShortenUrl(data['id']);
        console.log(`Shorten url of htt://zhib.in/${ postfix }`);
        console.log(`, which refers to ${ shortUrlToID(postfix)} in database.`);
    });
    next();
}

let redirectTo = (req, res, next) => {
    console.log("The shorten url part is %s", req.params.shorten);
    next();
    res.send("http://google.com");
}

export let handleRoutesFor = (server:restify.Server) => {
    // Router
    server.get('/home/:name', respond);
    server.head('/home/:name', respond);

    server.post('create', storeTinyUrl);
    server.get(':shorten', redirectTo);
}