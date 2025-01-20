import express from "express";
import authController from "./controllers/auth-controller";
import messageController from "./controllers/message-controller";
import user from "./database/tempdata";
import adduserController from "./controllers/adduser-controller";


const router = express.Router();

router.post('/auth', authController)
  
router.get("/message", messageController);

router.post("/adduser", adduserController)

router.get("/user", (request, response) => {
    response.send(user)
})


export default router;