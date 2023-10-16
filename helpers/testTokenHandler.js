const axios = require("axios");

module.exports.getToken = async () => {
  try {
    const data = JSON.stringify({
      email: "test@test.com",
      password: "test@123",
    });
    const config = {
      method: "post",
      url: `${process.env.DOMAIN_URL}/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const loginResponse = await axios.request(config);    
    return loginResponse.data?.result;
  } catch (error) {
    console.error(error);
  }
};
