show_symbol = document.getElementById("symbol")
number_1 = document.getElementById("number_1")
number_2 = document.getElementById("number_2")
result_area = document.getElementById("result_area")


function operation_option(x){
    if(x === "Sum"){
        show_symbol.textContent = "+"
        result = parseFloat(number_1.value) + parseFloat(number_2.value)
        result_area.appendChild(document.createTextNode(result))
    }
    else if(x === "Rest"){
        show_symbol.textContent = "-"
        result = parseFloat(number_1.value) - parseFloat(number_2.value)
        result_area.appendChild(document.createTextNode(result))
    }
    else if (x === "Multip"){
        show_symbol.textContent = "*"
        result = parseFloat(number_1.value) * parseFloat(number_2.value)
        result_area.appendChild(document.createTextNode(result))
    }
    else{
        show_symbol.textContent = "/"
        result = parseFloat(number_1.value) / parseFloat(number_2.value)
        result_area.appendChild(document.createTextNode(result))
    }
}

calculate_button = document.getElementById("calculate_button")
calculate_button.addEventListener("click", () => {
    result_area.textContent = ""
    operation_option(operation.value)})
