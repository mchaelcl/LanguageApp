const xhttp = new XMLHttpRequest();

xhttp.onload = function() {
  //code inside function() will execute automatically
  if (xhttp.status === 200) {
    const data = JSON.parse(xhttp.responseText);

    console.log(data);

    const datalist = document.getElementById('data-list');
    data.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item.module_title;
      datalist.appendChild(listItem);
    });
  } else {
    console.error("Error: " + xhttp.statusText);
  }
}

xhttp.open("GET", "../LanguageApp-Backend/script1. php", true); //404 error -  url shows this is being looked for in file that doesnt exist. Find out how to cull unnecessary pathway elements
xhttp.send();