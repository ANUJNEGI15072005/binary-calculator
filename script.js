function getbin(){
    let x = document.getElementById("value").value
    let y = parseFloat(x).toString(2)
    let isValidDecimal = /^\d+(\.\d+)?$/.test(x)
    if(!isValidDecimal){
        alert("Please enter a valid decimal number")
    }
    else if(isNaN(y)){
        alert("Please enter a valid decimal number")
    }
    else{
        document.getElementById("binary").value = y
    }
}
function getbin2(){
    let x2 = document.getElementById("value2").value
    let y2 = parseFloat(x2).toString(2)
    let isValidDecimal2 = /^\d+(\.\d+)?$/.test(x2)
    if(!isValidDecimal2){
        alert("Please enter a valid decimal number")
    }
    else if(isNaN(y2)){
        alert("Please enter a valid decimal number")
    }
    else{
        document.getElementById("binary2").value = y2
    }
}
