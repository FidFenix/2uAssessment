const UserSerializer = {
  serialize({ id, name, team}) {
    return {
      id,
      name,
      team
    };
  }
};

module.exports = UserSerializer;
