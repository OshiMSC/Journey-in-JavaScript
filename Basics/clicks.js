function myfun() {
    let colorInput = document.getElementById("color").value;//Take the value from the input field
    let colorDisplay = document.getElementById("inputColor");//Get the ID of the component where we want to display the value
    colorDisplay.innerText = colorInput;// Set the value of the component to the input value
}