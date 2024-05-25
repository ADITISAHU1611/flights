document.getElementById('flightForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const flightNumber = document.getElementById('flightNumber').value;

    const response = await fetch('/api/navigation/plan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ origin, destination, flightNumber }),
    });

    const result = await response.json();

    document.getElementById('results').innerHTML = `
        <h2>Flight Plan Results</h2>
        <p><strong>Origin:</strong> ${result.origin}</p>
        <p><strong>Destination:</strong> ${result.destination}</p>
        <p><strong>Weather Data:</strong> ${JSON.stringify(result.weatherData, null, 2)}</p>
        <p><strong>Flight Data:</strong> ${JSON.stringify(result.flightData, null, 2)}</p>
        <p><strong>Route Data:</strong> ${JSON.stringify(result.routeData, null, 2)}</p>
    `;
});

