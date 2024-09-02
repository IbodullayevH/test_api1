// require jsonwebtoken
const jwt = require(`jsonwebtoken`);
require(`dotenv`).config();

// my sign mtd
const my_sign = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY);
};


// my verify mtd
const my_verify = (token) => {
  try {
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    console.error("😞 error my_verify mtd:", error);
  }
};

// export modules
module.exports = {
  my_sign,
  my_verify,
};
