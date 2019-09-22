import Sequelize from 'sequelize';

import Car from '../app/models/Car';

import databaseConfig from '../config/database';

const models = [Car];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
