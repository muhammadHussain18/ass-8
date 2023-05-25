var flag = false
function bold(){
    var textarea = document.getElementById("textarea-2");

    if(flag){
        textarea.style.fontWeight= "bold"
    flag = false
}
else{
    textarea.style.fontWeight= "normal"
    flag = true
}
    
}
function italic(){
    var textarea = document.getElementById("textarea-2")
    if(flag){
        textarea.style.fontStyle = "italic"
        flag = false
    }else{
        textarea.style.fontStyle = "normal"
     flag = true

    }
}

function underLine(){
    var textarea = document.getElementById("textarea-2")
    if(flag){
            textarea.style.textDecoration = "underLine"
            flag = false
    }else{
            textarea.style.textDecoration = "none"
            flag = true

    }

}
function changeTextColor() {
    var textarea = document.getElementById("textarea-2");
    var colorInput = document.getElementById("colorInput").value;
    textarea.style.color = colorInput;
}


function changeFontSize() {
    var select = document.getElementById("size");
    var textarea = document.getElementById("textarea-2");
    var selectedSize = select.value;
    textarea.style.fontSize = selectedSize + "px";
  }
