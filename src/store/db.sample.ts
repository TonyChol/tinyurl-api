import * as Sequelize from 'sequelize';

export let sequelize = new Sequelize('tinyurl', '<mysql_name>', '<db_password>', {
  // mysql is the default dialect
  // for demo purporses we are defining it nevertheless :)
  // so: we want mysql!
  dialect: 'mysql'
});