document.addEventListener("DOMContentLoaded", () => {
  const jokeContainer = document.getElementById("jokeContainer");
  const generateJokeButton = document.getElementById("generateJokeButton");

  generateJokeButton.addEventListener("click", fetchJoke_en);

  async function fetchJoke_en() {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      jokeContainer.textContent = data.joke;
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  }

  async function fetchJoke_hindi() {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?lang=hi");
      const data = await response.json();
      jokeContainer.textContent = data.joke;
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  }
});