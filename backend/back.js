import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "crud"
})

app.get('/',(req,res)=> {
    const sql = "select * from users";
    db.query(sql,(err,result)=> {
        if(err) return res.json({Message: "Error inside db"});

        const modifiedResult = result.map(user => {
            if (user.dob) {
                user.dob = new Date(user.dob).toISOString().split('T')[0];
            }
            return user;
        });
        return res.json(modifiedResult);

    })
})

app.post('/users', (req, res)=> {
    const sql = "INSERT INTO users (name,email,phno,dob) values (?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phno,
        req.body.dob
    ]

    db.query(sql,values,(err,result)=> {
        if(err) return res.json(err);
        return res.json(result);
    })
})


app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM student WHERE ID = ?";
    const id = req.params.id;
    db. query (sql, [id], (err, result)=> {
    if(err) return res. json({Message: "Error inside read"});
    return res.json(result);
    })
})

app.put('/update/:id' , (req,res) => {
    const sql = "UPDATE users SET name=?, email=?, phno=?, dob=? WHERE id=?";
    const id  = req.params.id;

    db.query(sql,[req.body.name, req.body.email, req.body.phno, req.body.dob, id+1], (err,result) => {
    if(err) return res. json(err);
    return res.json(result);
    })

})

app.delete('/delete/:id',(req,res) => {
    const sql = "DELETE from users where ID = ?";
    const id = req.params.id

    db.query(sql,[id],(err,result) => {
        if(err) return res. json(err);
        return res.json(result);
    })
})


app.listen(8000, () => {
    console.log("Listening");
})