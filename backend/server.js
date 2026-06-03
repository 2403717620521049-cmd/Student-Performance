const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
