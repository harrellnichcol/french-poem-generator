function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3ed75b5a3c03atf2beaa90eb081934of";
  let context =
    "You are a romantic Poem expert and love to write shore poems. Your mission is to generate a 4 line poem in basic HTML and separate each line.  Sign the poem with 'Nichcol with SheCodes AI' inside a <strong> element. Do not use any markdown formatting, code blocks, or ```html tags. Only output the raw HTML code. Make sure to follow the user instructions below:";
  let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⌛Generating a French poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
