import Car from '../models/Car';

class CarController {
  async index(req, res) {
    const cars = await Car.findAll({ order: ['id'] });

    return res.json(cars);
  }

  async store(req, res) {
    const carExist = await Car.findOne({
      where: {
        placa: req.body.placa,
      },
    });

    if (carExist) {
      return res.status(400).json({ error: 'Este carro já existe.' });
    }

    const car = await Car.create(req.body);

    return res.json(car);
  }

  async update(req, res) {
    const car = await Car.findOne({ where: { id: req.body.id } });

    if (!car) {
      return res
        .status(400)
        .json({ error: 'Não existe um carro registrado com essa ID.' });
    }

    const { placa } = await car.update(req.body);

    return res.json({
      placa,
    });
  }

  async delete(req, res) {
    const cars = await Car.findByPk(req.params.id);

    if (!cars) {
      return res
        .status(400)
        .json({ error: 'Não existe um registro de carro com essa ID' });
    }

    cars.destroy();

    return res.json({ message: 'Carro deletado com sucesso.' });
  }
}

export default new CarController();
