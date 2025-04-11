let select = document.getElementById("select");
let black = document.getElementsByClassName("black");
let body = document.getElementById("body");
select.onchange = changeMode;

function changeMode(){
    if(select.value == "dark"){
        body.style.backgroundColor = "gray";
        black[0].style.backgroundColor = "white";
        black[1].style.backgroundColor = "white";
        black[2].style.backgroundColor = "white";
        black[3].style.backgroundColor = "white";
        black[4].style.backgroundColor = "white";
        black[5].style.backgroundColor = "white";
        black[6].style.backgroundColor = "white";
        black[7].style.backgroundColor = "white";
        black[8].style.backgroundColor = "white";
        black[9].style.backgroundColor = "white";
        black[10].style.backgroundColor = "white";
        black[11].style.backgroundColor = "white";
    }
    else {
        body.style.backgroundColor = "white";
        black[0].style.backgroundColor = "gray";
        black[1].style.backgroundColor = "gray";
        black[2].style.backgroundColor = "gray";
        black[3].style.backgroundColor = "gray";
        black[4].style.backgroundColor = "gray";
        black[5].style.backgroundColor = "gray";
        black[6].style.backgroundColor = "gray";
        black[7].style.backgroundColor = "gray";
        black[8].style.backgroundColor = "gray";
        black[9].style.backgroundColor = "gray";
        black[10].style.backgroundColor = "gray";
        black[11].style.backgroundColor = "gray";
    }
}