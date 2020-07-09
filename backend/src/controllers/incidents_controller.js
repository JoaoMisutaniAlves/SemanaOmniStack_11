const crypto = require('crypto');
const connection = require('../database/connection');
const { update } = require('../database/connection');

module.exports = {

  async create(request, response) {

    const {title, description, value} = request.body;

    const ong_id = request.headers.authorization;

    const id = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id
    });

    return response.json({id});
  },

  async read(request, response) {

    const {id} = request.params;
  
    const incident = await connection('incidents').where('id',id);
  
    return response.json(incident);
  },

  async update(request, response) {

    const {id} = request.params;

    const {title, description, value} = request.body;
  
    const incident = await connection('incidents')
      .where('id',id).update({
          title: title,
          description: description,
          value: value
      });
  
    return response.json(incident);
  },

  async delete(request, response) {

    const {id} = request.params;
  
    const incident = await connection('incidents')
      .where('id',id).del();
  
    return response.json(incident);
  }

};
