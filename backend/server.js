const express = require(`express`);
const mongoose = require(`mongoose`);
const routes = require('./routes/ToDoRoute');
const cors = require('cors');


require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json())
app.use(cors());

mongoose.connect(process.env.MONGODB_URL).then(()=> console.log(`Connected To MongoDB...`)).catch((err) => console.log(err))

app.use(routes);

app.listen(PORT , ()=>console.log(`listening the port on: ${PORT}`))