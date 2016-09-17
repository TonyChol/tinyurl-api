import { save } from './store/saveUrl';
import * as restify from 'restify';
import {idToShortenUrl, shortUrlToID} from './helpers/shorten';
import { Url } from './models/url';

let siteName = "http://api.zhibincai.com" ;

let respond = (req, res, next) => {
    res.send('hello ' + req.params.name);
    next();
};

let storeTinyUrl = (req, res, next) => {
    let longUrl = req.params.url;
    save(longUrl).then(data => {
        let id = data['id'];
        let postfix = idToShortenUrl(id);
        res.send(201, {
            success: true,
            shorten: `${ siteName }/${ postfix }`
        });
    });
    next();
};

let redirectTo = (req, res, next) => {
    let shortenParam = req.params.shorten;
    let urlInstanceID = shortUrlToID(shortenParam);
    next();
    Url
    .find({ where: { id: urlInstanceID } })
    .then(result => {
        res.redirect(result['url'].trim(), next);
    })
    .catch(error => {
        res.send(404, `Sorry the url you requested is not found... ${ error }`);
    });
};

let goToHomePage = (req, res, next) => {
    res.send('home page');
    next();
};

export let handleRoutesFor = (server: restify.Server) => {
    server.get('/home/:name', respond);
    server.head('/home/:name', respond);

    // server.get(':home', goToHomePage);
    server.post('url/create', storeTinyUrl);
    server.get('url/:shorten', redirectTo);
};
