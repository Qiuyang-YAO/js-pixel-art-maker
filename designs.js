function makeGrid() {
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    let grid = '';
    for (i = 0; i < height; i++){
        grid += '<tr>';
        for (j = 0; j < width; j++){
            grid += '<td></td>';
        }
        grid += '</tr>';
    }
    document.getElementById("pixelCanvas").innerHTML = grid; //add grid to HTML
    designCanvas();
}

function changeColor(e){
    const color = document.getElementById("colorPicker").value;
    if (e.target && e.target.nodeName == "TD") {
        e.target.style.backgroundColor = color;   
    }
}

function designCanvas(){
    const table = document.getElementById("pixelCanvas");
    table.addEventListener("click", changeColor, false);
}


document.getElementById('sizePicker').onsubmit = function () {
    event.preventDefault();
    makeGrid();
}