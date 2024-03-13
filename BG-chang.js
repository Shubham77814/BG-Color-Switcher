let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //console.log(e.target.id);
    //console.log(e.target.parentNode);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
  });
}); 




