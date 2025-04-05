const express = require("express");
const userRepo = require("../repos/user-repo");
const router = express.Router();
router.get("/users", async (req, res) => {
  const users = await userRepo.find();
  res.json(users);
});
router.post("/users", async (req, res) => {});
router.get("/user/:id", async (req, res) => {});
router.put("/user/:id", async (req, res) => {});
router.delete("/user/:id", async (req, res) => {});
module.exports = router;
