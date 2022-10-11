const jwt = require('jsonwebtoken');
const refresh_model = require('../models/refresh_model');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN, {
      expiresIn: "1h"
    })

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {
      expiresIn: '1y'
    })
    return { accessToken, refreshToken }

  }
  generateAccessToken() {

  }
  async storeRefreshToken(token, userId) {
    try {
      await refresh_model.create({
        token,
        userId
      });
    } catch (e) { console.log(e) }
  }

  async verifyAccessToken(token) {
    return jwt.verify(token, process.env.ACCESS_TOKEN);
  }

  async verifyrefreshToken(token) {
    jwt.verify(token, process.env.JWT_REFRESH_TOKEN);
  }

  async findRefToken(userId, refreshToken) {
    const token = await refresh_model.findOne({
      _id: userId,
      token: refreshToken
    })
    return token;
  }

  async updateRefreshToken(userId, refreshToken) {
    return await refresh_model.updateOne({
      userId: userId
    },
      { token: refreshToken }
    )
  }

}

module.exports = new TokenService();