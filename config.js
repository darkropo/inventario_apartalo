const { config } = require("dotenv");
config();

module.exports = {
    PORT: process.env.PORT,
    BASE_URL_API: process.env.BASE_URL_API,
    ROUTE_INV:process.env.ROUTE_INV
}