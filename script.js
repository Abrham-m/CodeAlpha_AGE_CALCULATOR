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
  // check if the input date is invalid
  if (yearDifference < 0) {
    console.log("Invalid Date");
  } else {
    if (dayDifference < 0) {
      monthDifference -= 1;
    }
    if (monthDifference < 0) {
      yearDifference -= 1;
    }
    // console.log(yearDifference, monthDifference, dayDifference);
    document.querySelector(".ageResult").textContent = yearDifference;

    console.log(`Your age is ${yearDifference} years`);
  }
};
