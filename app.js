// this is the first api to get the jokes from 
function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            const joke = data.setup ? `${data.setup} ... ${data.delivery}` : data.joke;
            document.getElementById('joke').textContent = joke;
            speak(joke);
        });
}

// the second API SpeechSynthesisUtterance (built-in Web Speech API) to read the joke aloud
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    document.getElementById('jokeAudio').src = URL.createObjectURL(new Blob([text], {type: 'text/plain'}));
    speech.voice = speechSynthesis.getVoices().filter(voice => voice.name === 'Google UK English Female')[0];
    speechSynthesis.speak(speech);
}
