require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// product routes
const productRoutes = require("./routes/productRoutes");

//middleware
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(cors());

//to get the req.body
app.use(express.json());

//routes
app.use("/api/products", productRoutes);

//connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
