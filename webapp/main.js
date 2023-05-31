var counter = 0;

function updateDisplay(val){
    document.getElementById("counterPanel").innerHTML = val;
}


function incrementClick(){
    updateDisplay(++counter)
}

function resetCounter(){
    counter = 0
    updateDisplay(counter)
}

function decreaseClick(){
    updateDisplay(--counter)
}