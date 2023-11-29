import express from 'express';
import cors from 'cors';
import "dotenv/config";
import CentralRouter from "./router/route.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Developed by Adarsh Priyadarshi"
  });
})

// Central Router
app.use('/', CentralRouter);

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
})