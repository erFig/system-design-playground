const express = require("express");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Auth Service Running" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});