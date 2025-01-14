import express from "express";
import cors from "cors";
import path from "path"; // Import for serving the HTML file
import bodyParser from "body-parser"; // For parsing request body

import temp from "./assets/temp.json";

const app = express();
const port = 4200;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:6900"],
  })
);
app.use(bodyParser.json()); // Middleware to parse JSON requests
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "static")))


app.post('/auth', (request, response) => {
  const { username, password } = request.body;
  if(username === 'imprakhar' && password === 'imprakhar'){
    response.send("true");
    
  }else {
    response.send("false");
  }
})

app.get("/message", (request, response) => {
  response.json(temp);
});




app.listen(port, () => {
  console.log(
    "Server Running On Port " + port + ", Link = http://localhost:" + port
  );
});
