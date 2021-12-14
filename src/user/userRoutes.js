const { Router } = require("express");
const { addUser, listUsers, updateUser, deleteUser } = require("./userController");
const { hashPassword, checkPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", checkPassword);
userRouter.get("/user", listUsers);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;