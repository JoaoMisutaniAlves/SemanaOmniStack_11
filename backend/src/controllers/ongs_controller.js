const crypto = require('crypto');
const connection = require('../database/connection');
const { update } = require('../database/connection');

module.exports = {

  async create(request, response) {

    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    });

    return response.json({id});
  },

  async read(request, response) {

    const {id} = request.params;

    const ong = await connection('ongs').where('id',id);

    return response.json(ong);
  },

  async update(request, response) {

    const {id} = request.params;

    const {name, email, whatsapp, city, uf} = request.body;

    const ong = await connection('ongs')
      .where('id',id).update({
          name: name,
          email: email,
          whatsapp: whatsapp,
          city: city,
          uf: uf
      });

    return response.json(ong);
  },

  async delete(request, response) {

    const {id} = request.params;

    const ong = await connection('ongs')
      .where('id',id).del();

    return response.json(ong);
  }

};
