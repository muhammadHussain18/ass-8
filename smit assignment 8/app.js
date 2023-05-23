function bold(){
    var para = document.getElementById("para")
    if(true){
    para.style.fontWeight= "bold"}
    else{para.style.fontWeight= "lighter"}
    
}
function italic(){
    var para = document.getElementById("para")
    para.style.fontStyle = "italic"
}

function underLine(){
    var para = document.getElementById("para")
    para.style.textDecoration = "underLine"
}
function changeTextColor() {
    var para = document.getElementById("para");
    var colorInput = document.getElementById("colorInput").value;
    para.style.color = colorInput;
}


function changeFontSize() {
    var select = document.getElementById("size");
    var para = document.getElementById("para");
    var selectedSize = select.value;
    para.style.fontSize = selectedSize + "px";
  }
