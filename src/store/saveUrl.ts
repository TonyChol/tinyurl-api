import * as Sequelize from 'sequelize';
import { sequelize } from './db';
import { Url } from '../models/url';

export const save = (longUrl: String) => {
    return new Sequelize.Promise( (resolve, reject) => {
        Url
            .find({ where: { url: longUrl } })
            .then( (result) => {
                if (!result) {
                    sequelize.sync().then( (obj) => {
                        Url.create({
                            url: longUrl
                        }).then(result => {
                            console.log("Success");
                            resolve(result);
                        });
                    }
                )}
                else {
                    console.log("Already exist:", result['id']);
                    resolve(result);
                }
            }, (err) => {
                reject(err);
            });
    });
}
