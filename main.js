const http_request = new XMLHttpRequest();
const icon = document.querySelectorAll(".ico");
const category = document.querySelectorAll(".category");
const score = document.querySelectorAll(".score");

http_request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);

    for (let i = 0; i < data.length; i++) {
      category[i].innerHTML = data[i].category;
      score[i].innerHTML = data[i].score;
      icon[i].setAttribute("src", data[i].icon);
    }
  }
};

http_request.open("GET", "data.json", true);
http_request.send();
