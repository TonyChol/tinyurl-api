import * as Sequelize from 'sequelize';
import { sequelize } from '../store/db'

export const Url = sequelize.define('url', {
  url: Sequelize.STRING
}, {
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['url']
        }
    ]
});