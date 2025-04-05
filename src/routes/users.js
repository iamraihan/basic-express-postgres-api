const express = require("express");
const userRepo = require("../repos/user-repo");
const router = express.Router();
router.get("/users", async (req, res) => {
  const users = await userRepo.find();
  res.json(users);
});
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userRepo.findById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
router.post("/users", async (req, res) => {});
router.put("/user/:id", async (req, res) => {});
router.delete("/user/:id", async (req, res) => {});
module.exports = router;
