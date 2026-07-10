let x = false;

function fun() {
    const status = document.getElementById("stat");
    const button = document.querySelector("button");
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const h4 = document.querySelector("h4");
    const h3 = document.querySelector("h3");
    
    if (x) {
        status.textContent = "Status:Off";
        button.textContent = "Turn On";
        body.style.backgroundColor = "darkslategray";
        h1.style.color = "white";
        h4.style.color = "white";
        h3.style.color = "white";
       
        
    }
    else {
        status.textContent = "Status:On";
        button.textContent = "Turn Off";
        body.style.backgroundColor = "white";
        h1.style.color = "black";
        h4.style.color = "black";
        h3.style.color = "black";

    }
    x = !x;
}