function generatePoem (event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "Long live the rose that grew from concrete",
        autoStart: true,
        delay: 1, 
        cursor: "",
    });

}

let poemFormElement = document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem);

