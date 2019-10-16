document.getElementById("totalTip").style.display = "none";

var billAmount = document.getElementById("billamount");
var serviceSelection = document.getElementById("service-selection");
var noOfPeople = document.getElementById("noof-people");

function caluculateTip() {

    if (billAmount.value == 0)
        alert("Enter Bill amount");
    else if (serviceSelection.value == 0)
        alert("Select service level");
    else if (noOfPeople.value == 0)
        alert("please enter correct number of people");

    var total = (billAmount.value * serviceSelection.value) / noOfPeople.value;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}