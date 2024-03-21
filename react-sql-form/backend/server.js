const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login-page'
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO LOGIN (`name`, `email`, `password`) Values (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json(err);
        } else {
            return res.json(data);
        }
    })
})

app.listen(8081, ()=> {
    console.log("Server running on port 8081")
})

