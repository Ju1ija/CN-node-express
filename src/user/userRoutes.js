const { Router } = require("express");
const { addUser, listUsers, updateUser, deleteUser } = require("./userController");
const { checkEmail, hashPassword, checkPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/users", checkEmail, hashPassword, addUser);
userRouter.post("/login", checkPassword);
userRouter.get("/users", listUsers);
userRouter.put("/users/:userId", updateUser);
userRouter.delete("/users/:userId", deleteUser);

module.exports = userRouter;