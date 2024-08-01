const calculateAge = () => {
  // Getting input from html input element
  const birthDate = new Date(document.getElementById("birthDate").value);
  // Getting current date using Date function
  const presentDate = new Date();
  // calculating the year difference
  let yearDifference = presentDate.getFullYear() - birthDate.getFullYear();
  // calculating the month difference
  let monthDifference = presentDate.getMonth() - birthDate.getMonth();
  // calculating the day difference
  let dayDifference = presentDate.getDate() - birthDate.getDate();
  // check if the input date is invalid or not selected
  if (yearDifference < 0 || isNaN(birthDate.getTime())) {
    document.querySelector(
      ".ageResult"
    ).innerHTML = `<span style="color: red;">⚠ Invalid Date. Please enter a valid date.</span>`;
    // If the day difference is negative, the month difference is decremented by 1.
    if (dayDifference < 0) {
      monthDifference -= 1;
    }
    // If the month difference is negative, the year difference is decremented by 1.
    if (monthDifference < 0) {
      yearDifference -= 1;
    }
    // This ensures the age calculation is accurate when the current date is before the birth date.
    document.querySelector(
      ".ageResult"
    ).textContent = `Your are ${yearDifference} years old.`;
    document.querySelector(".ageResult").style.fontSize = "18px";
    document.querySelector(".ageResult").style.fontWeight = "bold";
    document.querySelector(".ageResult").style.color = "#2f75e5";
  } else {
    if (dayDifference < 0) {
      monthDifference -= 1;
    }
    if (monthDifference < 0) {
      yearDifference -= 1;
    }
    document.querySelector(
      ".ageResult"
    ).textContent = `Your are ${yearDifference} years old.`;
    document.querySelector(".ageResult").style.fontSize = "18px";
    document.querySelector(".ageResult").style.fontWeight = "bold";
    document.querySelector(".ageResult").style.color = "#2f75e5";
  }
};
