function toggleSettings() {
    if (settingsDiv.style.display === 'none' || settingsDiv.style.display === '') {
        settingsDiv.style.display = 'block';
    } else {
        settingsDiv.style.display = 'none';
    }
}

function setMode(mode) {
    document.body.className = mode;
}
const settingsDiv = document.getElementById('settings');
const audioSample = document.getElementById('audio-sample');
const volumeLabel = document.getElementById('volume-label');

function toggleSettings() {
    settingsDiv.style.display = (settingsDiv.style.display === 'none' || settingsDiv.style.display === '') 
        ? 'block' : 'none';
}

function setMode(mode) {
    document.body.className = mode;
}

function playSound() {
    audioSample.play();
}

function adjustVolume(value) {
    audioSample.volume = value / 100;
    volumeLabel.textContent = `${value}%`;
}

function toggleMute() {
    audioSample.muted = !audioSample.muted;
    const buttonText = audioSample.muted ? "Unmute" : "Mute";
    document.querySelector('.sound-buttons button:last-child').textContent = buttonText;
}
