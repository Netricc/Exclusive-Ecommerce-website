// Load the external navbar file and insert it into the <header> element
fetch("../assets/components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  })
  .catch((error) => console.error("Error loading the navbar:", error));
