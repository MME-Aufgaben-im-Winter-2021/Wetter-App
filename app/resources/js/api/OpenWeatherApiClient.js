/* eslint-env browser */

// TODO: Persönlichen API-Key für OpenWeatherMap eintragen
const API_KEY = "YOUR_API_KEY",
    // Über diese URL erhalten Sie die Wetterdaten für die angegebene Stadt ein (ersetzen Sie vor dem Aufruf $CITY und $API_KEY durch die entsprechenden Werte)
    FETCH_CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?q=$CITY,DE&appid=$API_KEY&lang=DE&units=metric";