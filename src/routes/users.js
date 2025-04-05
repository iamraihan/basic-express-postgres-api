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
router.post("/users", async (req, res) => {
  const { username, bio } = req.body;
  const user = await userRepo.insert(username, bio);
  res.json(user);
});
router.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { username, bio } = req.body;
  try {
    const user = await userRepo.update(id, username, bio);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userRepo.delete(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
module.exports = router;
