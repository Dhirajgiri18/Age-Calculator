function CalculateAge() {

    var BirthYear = parseInt(document.getElementById("BirthYear").value);

    var BirthMonth = parseInt(document.getElementById("BirthMonth").value);

    var BirthDay = parseInt(document.getElementById("BirthDay").value);

    var CurrentYear = parseInt(document.getElementById("CurrentYear").value);

    var CurrentMonth = parseInt(document.getElementById("CurrentMonth").value);
    
    var CurrentDay = parseInt(document.getElementById("CurrentDay").value);

    var age = CurrentYear - BirthYear;

    if (CurrentMonth < BirthMonth || (CurrentMonth === BirthMonth && CurrentDay < BirthDay)) {
        age--;
    }

    document.getElementById("Result").textContent = "Your Age is: " + age + "Years";
}