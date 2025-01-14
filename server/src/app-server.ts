import express from "express";
import cors from "cors";
import path from "path"; // Import for serving the HTML file
import bodyParser from "body-parser"; // For parsing request body
import router from './app-router'

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
app.use(router)


app.listen(port, () => {
  console.log(
    "Server Running On Port " + port + " | Link = http://localhost:" + port
  );
});
