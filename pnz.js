function checkNumber() {
    // Get the input value
    var number = document.getElementById("numberInput").value;

    // Convert the input to a number
    number = parseFloat(number);

    // Check if the number is positive, negative, or zero
    if (isNaN(number)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
    } else if (number > 0) {
        document.getElementById("result").innerText = number + " is a positive number.";
    } else if (number < 0) {
        document.getElementById("result").innerText = number + " is a negative number.";
    } else {
        document.getElementById("result").innerText = number + " is zero.";
    }
}
