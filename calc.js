function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}
function calculate() {
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
    }
    function clearlast(value) {
        var resultInput = document.getElementById("result");
        var currentValue = resultInput.value;
        resultInput.value = currentValue.slice(0, -1);
    }