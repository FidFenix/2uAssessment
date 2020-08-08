const User = require('src/domain/user/User');

const SequelizeUserMapper = {
  toEntity({ dataValues }) {
    const { id, name, team} = dataValues;

    return new User({ id, name, team});
  },

  toDatabase(survivor) {
    const { name, team} = survivor;

    return { name, team };
  }
};

module.exports = SequelizeUserMapper;
