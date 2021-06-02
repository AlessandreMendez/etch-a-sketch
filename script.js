const container = document.querySelector(".grid");
const gridButton = document.getElementById("gridButton");
const blackButton = document.getElementById("blackButton");
const colorButton = document.getElementById("colorButton");

gridButton.addEventListener("click", changeGrid);
blackButton.addEventListener("click", blackEvent);
colorButton.addEventListener("click", colorEvent);

function addGrid(number) {
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    for (let c = 0; c < (number * number); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "box";
    };
  };

function changeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let newSize = prompt("Select number of grid variable: ")

    if(newSize === undefined || newSize === null || isNaN(newSize)) {
        return;
    } else if(newSize > 60 || newSize < 1) {
        alert("Please enter a number between 1 and 60")
        changeGrid();
    } else {
        addGrid(newSize);
    }
}

function changeRGB(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    e.target.style.borderColor = "black";
  }

function changeBlack(e) {
    e.target.style.backgroundColor = "black";
    e.target.style.borderColor = "white";
  }

function blackEvent() {
    let cells = document.querySelectorAll(".box");
    cells.forEach(cell => {
        cell.removeEventListener("mouseover", changeRGB);
        cell.addEventListener("mouseover", changeBlack);
    });
}

function colorEvent() {
    let cells = document.querySelectorAll(".box");
    cells.forEach(cell => {
        cell.removeEventListener("mouseover", changeBlack);
        cell.addEventListener("mouseover", changeRGB);
    });
}

addGrid(16);