const Turtle = require('./turtle');
const Weapon = require('./weapon');
const Pizza = require('./pizza');

module.exports = (Sequelize, config) => {
  const sequelize = new Sequelize(config.db, config.login, config.password,
  {
      host: config.host,
      dialect: config.dialect,
      logging: false
  });
  
  sequelize.authenticate().then(() => {
      console.log('Success');
  }).catch((err) => {
      console.log(`Error connect ${err}`);
  });

  const turtles = Turtle(Sequelize, sequelize);
  const weapons = Weapon(Sequelize, sequelize);
  const pizzas = Pizza(Sequelize, sequelize);

  // TODO: создание связей между таблицами

  return {
    turtles,
    weapons,
    pizzas,

    sequelize: sequelize,
    Sequelize: Sequelize,
  };
};