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
console.log(xhttp.responseText);

xhttp.open("GET", "../LanguageApp-Backend/script.php", true);
xhttp.send();