//bcy
const bcrypt = require("bcryptjs");

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function verifiyPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}
module.exports = {
  hashPassword,
  verifiyPassword,
};
