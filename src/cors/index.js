const cors = require("cors");

const whitelist = ["https://www.tinydesk.me", "https://tinydesk.me"];
//If
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production" ? whitelist : "http://localhost:8000",
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
  methods: ["GET", "PUT", "POST", "OPTIONS", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 200,
};
module.exports = cors(corsOptions);
