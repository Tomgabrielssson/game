# game
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colorblind Mode & Sound Settings</title>
    <style>
        :root {
            --filter-none: none;
            --filter-protanopia: sepia(100%) saturate(100%) hue-rotate(-20deg);
            --filter-deuteranopia: sepia(50%) saturate(100%) hue-rotate(-10deg);
            --filter-tritanopia: sepia(80%) saturate(100%) hue-rotate(90deg);
            --filter-monochrome: grayscale(100%);
        }

        body {
            font-family: Arial, sans-serif;
            transition: filter 0.3s ease-in-out;
            padding: 20px;
        }

        nav {
            background: #333;
            padding: 10px;
            color: white;
            text-align: center;
        }

        .content {
            max-width: 600px;
            margin: 20px auto;
            text-align: center;
        }

        .settings {
            display: none;
            margin-top: 20px;
        }

        button {
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            border: none;
            background: #007bff;
            color: white;
            border-radius: 5px;
        }

        button:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
    <nav>
        <button onclick="toggleSettings()">⚙️ Settings</button>
    </nav>

    <div class="content">
        <h1>Welcome to the Colorblind Mode & Sound Settings Demo</h1>
        <p>Toggle colorblind modes and sound settings in the menu.</p>

        <div class="settings" id="settings">
            <h2>Settings</h2>
            <button id="colorblind-toggle">Colorblind Mode: Off</button>
            <button id="sound-toggle" onclick="toggleSound()">🔊 Sound On</button>
        </div>
    </div>

    <audio id="settings-sound" src="/mnt/data/Scary.mp3" preload="auto"></audio>
    
    <script>
        const modes = ["none", "protanopia", "deuteranopia", "tritanopia", "monochrome"];
        let currentModeIndex = 0;
        
        const toggleButton = document.getElementById("colorblind-toggle");
        const body = document.body;
        const settings = document.getElementById("settings");
        const soundToggleButton = document.getElementById("sound-toggle");
        const settingsSound = document.getElementById("settings-sound");
        let soundEnabled = true;
        
        // Load saved mode from local storage
        const savedMode = localStorage.getItem("colorblindMode");
        if (savedMode) {
            currentModeIndex = modes.indexOf(savedMode);
            body.style.filter = getComputedStyle(document.documentElement).getPropertyValue(`--filter-${savedMode}`);
            toggleButton.textContent = `Colorblind Mode: ${savedMode}`;
        }
        
        // Toggle function
        toggleButton.addEventListener("click", () => {
            currentModeIndex = (currentModeIndex + 1) % modes.length;
            const selectedMode = modes[currentModeIndex];
        
            // Apply the selected mode
            body.style.filter = getComputedStyle(document.documentElement).getPropertyValue(`--filter-${selectedMode}`);
            toggleButton.textContent = `Colorblind Mode: ${selectedMode}`;
        
            // Save the mode in local storage
            localStorage.setItem("colorblindMode", selectedMode);
        });
        
        // Toggle Settings Menu
        function toggleSettings() {
            settings.style.display = settings.style.display === "none" ? "block" : "none";
            if (soundEnabled) {
                settingsSound.currentTime = 0;
                settingsSound.play();
            }
        }

        // Toggle Sound On/Off
        function toggleSound() {
            soundEnabled = !soundEnabled;
            document.querySelectorAll("audio").forEach(audio => audio.muted = !soundEnabled);
            soundToggleButton.textContent = soundEnabled ? "🔊 Sound On" : "🔇 Sound Off";
        }
    </script>
</body>
</html>
