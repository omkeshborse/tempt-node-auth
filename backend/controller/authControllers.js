const signup = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  console.log(name, email, password, confirmpassword);
  res.status(200).json({
    success: true,
    data: {
      name,
      email,
      password,
      confirmpassword,
    },
  });
};

module.exports = { signup };
