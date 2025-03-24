function displayPoem (res) {
    console.log("generated poem")
    //response.data.answer
    new Typewriter("#poem", {
       strings: res.data.answer,
       autoStart: true,
       delay: 1,
       cursor: "",
     });
}

function generatePoem (event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions")
    let apiKey = "016a0t85f68c4oda9e60b9cd7345774b";
    let prompt = `User instrtucions are: Generate poem about ${instructionsInput.value}`;
    let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a four line poem and separate each line with a <br/>. Make sure to follow user instructions. Sign the poem with `SheCodes AI` in bold inside a <strong> element.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generate poem")
    console.log(`Prompt: ${prompt}`)
    console.log(`context: ${context}`);

    axios.get(apiUrl).then(displayPoem)


}

let poemFormElement = document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem);




