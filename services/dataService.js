// services/dataService.js
const axios = require('axios');
const config = require('../config/config');

const getWeatherData = async (origin,destination, flightNumber) => {
    const response=[{
        
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 298.15,
          "feels_like": 299.15,
          "temp_min": 297.15,
          "temp_max": 299.15,
          "pressure": 1015,
          "humidity": 70
        },
        "visibility": 10000,
        "wind": {
          "speed": 3.1,
          "deg": 90,
          "gust": 4.6
        },
        "clouds": {
          "all": 0
        },
        "dt": 1702549106,
        "sys": {
          "type": 2,
          "id": 2038501,
          "country": "IN",
          "sunrise": 1702571151,
          "sunset": 1702613843
        },
        "id": 1277333,
        "cod": 200
      },
      {
        
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 290.15,
          "feels_like": 289.15,
          "temp_min": 289.15,
          "temp_max": 291.15,
          "pressure": 1015,
          "humidity": 60
        },
        "visibility": 10000,
        "wind": {
          "speed": 3.6,
          "deg": 70,
          "gust": 5.1
        },
        "clouds": {
          "all": 0
        },
        "dt": 1702549106,
        "sys": {
          "type": 2,
          "id": 2041351,
          "country": "IN",
          "sunrise": 1702568623,
          "sunset": 1702606962
        },
        "id": 1264733,
        "cod": 200
      },            
      {
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 49.46,
          "feels_like": 44.89,
          "temp_min": 45.68,
          "temp_max": 51.8,
          "pressure": 1030,
          "humidity": 59
        },
        "visibility": 10000,
        "wind": {
          "speed": 11.5,
          "deg": 50,
          "gust": 20.71
        },
        "clouds": {
          "all": 0
        },
        "dt": 1702548828,
        "sys": {
          "type": 2,
          "id": 2015175,
          "country": "IN",
          "sunrise": 1702557907,
          "sunset": 1702594622
        },
        "id": 4429197,
        "cod": 200
      },
      {
        
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 295.15,
          "feels_like": 294.15,
          "temp_min": 294.15,
          "temp_max": 296.15,
          "pressure": 1013,
          "humidity": 55
        },
        "visibility": 10000,
        "wind": {
          "speed": 2.6,
          "deg": 80,
          "gust": 3.1
        },
        "clouds": {
          "all": 0
        },
        "dt": 1702549106,
        "sys": {
          "type": 2,
          "id": 2015550,
          "country": "IN",
          "sunrise": 1702567943,
          "sunset": 1702605978
        },
        "id": 1273294,
        "cod": 200
      }
      ]
      const randomindex=Math.floor(Math.random()*4);
    // const options = {
    //     method: 'GET',
    //     url: `https://open-weather13.p.rapidapi.com/city/${location}/EN`,
    //     headers: {
    //       'X-RapidAPI-Key': 'd7dfaf9650msh1a3614b11e99579p1ed297jsnfa3501ef8fd2',
    //       'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    //     }
    //   };
    // const response = await axios.request(options);
    return response[randomindex];
};

const getFlightData = async (origin,destination, flightNumber) => {
    const response = 
        {
            "flight_date": "2019-12-12",
            "flight_status": "active",
            "departure": {
                "airport": origin,
                "timezone": "IST",
                "iata": "SFO",
                "icao": "KSFO",
                "terminal": "2",
                "gate": "D11",
                "delay": 13,
                "scheduled": "2019-12-12T04:20:00+00:00",
                "estimated": "2019-12-12T04:20:00+00:00",
                "actual": "2019-12-12T04:20:13+00:00",
                "estimated_runway": "2019-12-12T04:20:13+00:00",
                "actual_runway": "2019-12-12T04:20:13+00:00"
            },
            "arrival": {
                "airport":destination,
                "timezone": "IST",
                "iata": "DFW",
                "icao": "KDFW",
                "terminal": "A",
                "gate": "A22",
                "baggage": "A17",
                "delay": 0,
                "scheduled": "2024-05-25T04:20:00+00:00",
                "estimated": "2024-05-25T04:20:00+00:00",
            },
            "flight": {
                "number": flightNumber,
                "iata": "AA1004",
                "icao": "AAL1004",
                "codeshared": null
            },
            "aircraft": {
               "registration": "AA100",
               "iata": "A321",
               "icao": "A321",
               "icao24": "A0F1BB"
            },
            "live": {
                "updated": "2019-12-12T10:00:00+00:00",
                "altitude": 8846.820,
                "direction": 114.340,
                "speed_horizontal": 894.348,
                "speed_vertical": 1.188,
                "is_ground": false
            }
        }
    return response;
};

// Add more functions to fetch data from other APIs...

module.exports = {
    getWeatherData,
    getFlightData
    // Export other functions as needed...
};
