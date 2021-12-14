const { Router } = require("express");
const { addUser, listUsers, updateUser, deleteUser } = require("./userController");
const { checkEmail, hashPassword, checkPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", checkEmail, hashPassword, addUser);
userRouter.post("/login", checkPassword);
userRouter.get("/user", listUsers);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;