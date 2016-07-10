import { save } from './store/saveUrl';
import * as restify from 'restify';
import {idToShortenUrl, shortUrlToID} from './helpers/shorten';
import { Url } from './models/url';

let respond = (req, res, next) => {
    res.send('hello ' + req.params.name);
    next();
}

let storeTinyUrl = (req, res, next) => {
    let longUrl = req.params.url;
    console.log("The long url is %s", longUrl);
    save(longUrl).then(data => {
        let postfix = idToShortenUrl(data['id']);
        res.send(201, {
            success: true,
            shorten: `http://zhib.in/${ postfix }`
        });
    });
    next();
}

let redirectTo = (req, res, next) => {
    let shortenParam = req.params.shorten;
    let urlInstanceID = shortUrlToID(shortenParam);
    console.log(`ID in db is`, urlInstanceID);
    next();
    Url
    .find({ where: { id: urlInstanceID } })
    .then(result => {
        res.redirect(result['url'].trim(), next);
    })
    .catch(error => {
        res.send(404, "Sorry the url you requested is not found...");
    });
}

export let handleRoutesFor = (server:restify.Server) => {
    // Router
    server.get('/home/:name', respond);
    server.head('/home/:name', respond);

    server.post('create', storeTinyUrl);
    server.get(':shorten', redirectTo);
}