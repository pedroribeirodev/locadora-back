import request from 'supertest';
import app from '../../src/app';

describe('Cars', () => {
  it('deve ser possivel cadastrar um carro', async () => {
    const response = await request(app)
      .post('/cars')
      .send({
        placa: 'OPK-1000',
        chassi: 'AAAAA555588877',
        renavam: 'BBBAAA111222',
        modelo: 'Fusca',
        marca: 'Volks',
        ano: '1970',
      });

    expect(response.body).toHaveProperty('id');
  });
});
