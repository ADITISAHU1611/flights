document.addEventListener('DOMContentLoaded', function() {
    // Fetch weather data periodically (example for simplicity)
    setInterval(async () => {
        const response = await fetch('/api/weather/New York');
        const weatherData = await response.json();
        document.getElementById('dashboard').innerHTML = `<pre>${JSON.stringify(weatherData, null, 2)}</pre>`;
    }, 60000); // Update every 60 seconds
});
