const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken")

async function userDetails(req,res){
  try {
    const token = req.cookies.token || ""
    console.log('token',token)
    const user = await getUserDetailsFromToken(token)
    return res.status(200).json({
      message: "user details",
      data: user
    })
  } catch(error) {
    return res.status(501).json({
      message: error.message || error,
      error: true
    })
  }
}

module.exports = userDetails