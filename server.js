const mysql = require("mysql2")

const connect = mysql.createConnection({
    host:'localhost',
    user : 'root',
    password:'admin',
    database:'nodetable'
})

connect.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        connect.query(`SELECT * from persons`,function(err,result){
            if(err){
                console.log(err)
            }
            else{
                console.log(result)
            }
        })
    }
})