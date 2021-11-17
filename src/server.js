const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

//midleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`server running in ${port}`);
});

const routerUserAdress = require("./controllers/UserAdressController");

routerUserAdress(app);
