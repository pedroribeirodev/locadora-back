import Sequelize, { Model } from 'sequelize';

class Car extends Model {
  static init(sequelize) {
    super.init(
      {
        placa: Sequelize.STRING,
        chassi: Sequelize.STRING,
        renavam: Sequelize.STRING,
        modelo: Sequelize.STRING,
        marca: Sequelize.STRING,
        ano: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Car;
