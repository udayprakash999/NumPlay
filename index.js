const factName = document.getElementById("name-fact");
document
  .getElementById("getFact")
  .addEventListener("click", getRandomFact);
document
  .getElementById("mathFact")
  .addEventListener("click", getMathFact);
document
  .getElementById("triviaFact")
  .addEventListener("click", getTriviaFact);
document
  .getElementById("yearFact")
  .addEventListener("click", getYearFact);
document
  .getElementById("dateFact")
  .addEventListener("click", getDateFact);
document
  .getElementById("changeTheme")
  .addEventListener("click", toggleTheme);

async function getRandomFact() {
  const randomNum = Math.floor(Math.random() * 100);
  const response = await fetch(`https://numbersapi.com/${randomNum}?json`);
  const data = await response.json();
  factName.innerText = "Number";
  displayFact(data.text);
}

async function getMathFact() {
  const randomNum = Math.floor(Math.random() * 100);
  const response = await fetch(
    `https://numbersapi.com/${randomNum}/math?json`
  );
  const data = await response.json();
  factName.innerText = "Math";
  displayFact(data.text);
}

async function getTriviaFact() {
  const randomNum = Math.floor(Math.random() * 100);
  const response = await fetch(
    `https://numbersapi.com/${randomNum}/trivia?json`
  );
  factName.innerText = "Trivia";
  const data = await response.json();
  displayFact(data.text);
}

async function getYearFact() {
  const randomNum = Math.floor(Math.random() * 100);
  const response = await fetch(
    `https://numbersapi.com/${randomNum}/year?json`
  );
  factName.innerText = "Year";
  const data = await response.json();
  displayFact(data.text);
}

async function getDateFact() {
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 31) + 1;
  const response = await fetch(
    `https://numbersapi.com/${month}/${day}/date?json`
  );
  factName.innerText = "Date";
  const data = await response.json();
  displayFact(data.text);
}

function displayFact(fact) {
  gsap.fromTo(
    "#fact",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 1 }
  );
  document.getElementById("fact").textContent = fact;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function runSearchFunction() {
  const inputValue = document.getElementById("numberInput").value;
  if (inputValue) {
    console.log("Input value: " + inputValue);
    const url = `number.html?num=${inputValue}`;
    window.location.href = url;
  } else {
    alert("Please enter a number.");
  }
}
function handleEvent(event) {
  if (event.key === "Enter" || event.type === "click") {
    runSearchFunction();
  }
}
document
  .getElementById("numberInput")
  .addEventListener("keydown", handleEvent);
document
  .getElementById("searchIcon")
  .addEventListener("click", handleEvent);
