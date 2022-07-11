const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment} = require('./controller.js');

const {getFortune} = require('./controller.js');

const {
    getUsers,
    deleteUser, 
    createUser 
    
} = require('./controller.js')

app.get(`/api/users`, getUsers)
app.delete(`/api/users/:id`, deleteUser)
app.post(`/api/users`, createUser)



app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);


app.listen(4000, () => console.log("Server running on 4000"));
