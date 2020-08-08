const { attributes } = require('structure');

const User = attributes({
  id: Number,
  name: {
    type: String,
    required: true
  },
  team: {
    type: String
  }
})(class User {
  isLegal() {
    return this.team in User.TEAM;
  }
});

User.TEAM = ['ACCOUNT'];

module.exports = User;
