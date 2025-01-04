const xhttp = new XMLHttpRequest();

const express = require("express");
const app = express();

const cors = require("cors");

app.use(
cors({
    origin: "http://127.0.0.1:5500",
})
)



xhttp.onload = function() {
  console.log("Raw Response:", xhttp.responseText); 
  if (xhttp.status === 200) {
      try {
          const data = JSON.parse(xhttp.responseText); 
          console.log("Parsed Data:", data);
      } catch (error) {
          console.error("JSON Parse Error:", error.message);
      }
  } else {
      console.error("HTTP Error:", xhttp.statusText);
  }
};


xhttp.open("GET", "http://localhost/languageapp/LanguageApp-Backend/script.php", true);
xhttp.send();