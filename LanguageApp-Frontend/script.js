const xhttp = new XMLHttpRequest();

const cors = require('cors');

appendFile.

xhttp.onload = function() {
  console.log("Raw Response:", xhttp.responseText); // Debug the response
  if (xhttp.status === 200) {
      try {
          const data = JSON.parse(xhttp.responseText); // Attempt to parse JSON
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