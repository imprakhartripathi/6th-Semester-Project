import express from "express";
import temp from "./assets/temp.json";


const router = express.Router();

router.post('/auth', (request, response) => {
    const { username, password } = request.body;
    if(username === 'imprakhartripathi' && password === 'imprakhar'){
      response.send("true");
      
    }else {
      response.send("false");
    }
  })
  
  router.get("/message", (request, response) => {
    response.json(temp);
  });


export default router;