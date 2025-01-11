const num = new URLSearchParams(window.location.search).get("num");
      console.log(num);
      updateTitle(num);

      document.querySelector(".container-overlay").innerText = num;
      const number = (document.getElementById("number").innerText = num);

      const factName = document.getElementById("name-fact");

      numberFactDisplay(number);

      function numberFactDisplay(number) {
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
          .getElementById("changeTheme")
          .addEventListener("click", toggleTheme);

        getRandomFact();

        async function getRandomFact() {
          const response = await fetch(`https://numbersapi.com/${number}?json`);
          const data = await response.json();
          factName.innerText = "Number";
          displayFact(data.text);
        }

        async function getMathFact() {
          const response = await fetch(
            `http://numbersapi.com/${number}/math?json`
          );
          const data = await response.json();
          factName.innerText = "Math";
          displayFact(data.text);
        }

        async function getTriviaFact() {
          const response = await fetch(
            `http://numbersapi.com/${number}/trivia?json`
          );
          factName.innerText = "Trivia";
          const data = await response.json();
          displayFact(data.text);
        }

        function displayFact(fact) {
          gsap.fromTo(
            "#fact",
            {
              opacity: 0,
              scale: 0.9,
              y: 50,
              rotation: -15,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              rotation: 0,
              duration: 1.5,
              ease: "elastic.out(1, 0.5)",
            }
          );
          document.getElementById("fact").textContent = fact;
        }
      }

      function toggleTheme() {
        document.body.classList.toggle("dark-mode");
      }

      function runSearchFunction() {
        const inputValue = document.getElementById("numberInput").value;
        if (inputValue) {
          console.log("Input value: " + inputValue);

          document.querySelector(".container-overlay").innerText = inputValue;
          const number = (document.getElementById("number").innerText =
            inputValue);
          numberFactDisplay(inputValue);
          updateTitle(inputValue)
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

      function updateTitle(number) {
        document.title = `NumPlay - ${number}`;
      }