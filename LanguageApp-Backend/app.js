const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000; 

//set up xml to communicate with html


//https://expressjs.com/en/resources/middleware/cors.html

app.use(cors());

const user = "root";
const password = "";
const database = "languageapp";
const host = "localhost";

app.get('/', (req, res) => {
  res.send("GET Request Called")
})

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error starting server:", err);
  } else {
    console.log(`Server running on http://localhost:${PORT}`);
  }
});

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

connection.connect((err) => {
  if (err) {
    console.error("Connect Error", err.code);
    process.exit(1); 
  }
  console.log("Connected to the database.");
});

const sqlGet = "SELECT module_title FROM module";

connection.query(sqlGet, (err, results) => {
  if (err) {
    console.error("Query Error", err);
    return;
  }

  const sendJson = JSON.stringify(results);
  console.log(sendJson); 
});

connection.end((err) => {
  if (err) {
    console.error("Error closing connection", err);
  } else {
    console.log("Database connection closed.");
  }
});
