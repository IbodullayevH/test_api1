const { my_sign } = require("../utils/jwt");
const fetch_data = require("../utils/postgres");

const createUser = async (req, res) => {
  try {
    let { name, age, email, password } = req.body;

    await fetch_data(
      "insert into users(name, age, email, password) values($1, $2, $3, $4)",
      name,
      age,
      email,
      password
    );

    let newUser = await fetch_data("select * from users");

    return res.status(201).send({
      success: true,
      message: "Created",
      data: newUser.at(-1),
    });
  } catch (error) {
    return res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    let users = await fetch_data("select * from users");

    return res.status(201).send({
      success: true,
      message: "all user info",
      data: users,
    });
  } catch (error) {
    return res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};

// 
const login_user = async(req, res) => {
    let { email, password } = req.body

    let [user] = await fetch_data("Select * from users where email = $1 and password = $2", email, password)

    if(user){
       let token =  my_sign({id: user.id})
       res.send({
        success: true,
        message:"user logined successfully",
        token: token
       })
    } else {
        res.status(404).send({
            success: false,
            message: "Not available user"
        })
    }
}

// 
const mainPage = async (req, res) => {
    try {
      
  
      return res.status(201).send({
        success: true,
        message: "hello everone. I'm backend developer!",
        data: users,
      });
    } catch (error) {
      return res.status(error.status || 500).send({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = {
  getAllUsers,
  createUser,
  login_user,
  mainPage
};
