
function change(button) {
   
    let h1 = document.querySelector("#h1")

if (button.id=== "red") {
     h1.style.color = "red";
}

else if(button.id ==="green"){
    h1.style.color = "green";
}
else if (button.id === "blue") {
    h1.style.color = "blue";
}
else if(button.id === "purple") {
    h1.style.color = "purple";
}
else if (button.id === "reset") {
    h1.style.color = "black";
}
}