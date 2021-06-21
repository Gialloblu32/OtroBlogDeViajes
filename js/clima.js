fetch("https://api.openweathermap.org/data/2.5/weather?q=Siem%20Reap&appid=c79b585c3113e2abb3daf7819ab5e525&units=metric&lang=es")
    
    .then(res => {
        if (res.ok) {
            res.json().then(clima => {
                climate.innerHTML = `En este momento en la ciudad de ${clima.name} el clima está: "${clima.weather[0].description}" y la temperatura es de ${Math.round(clima.main.temp)}°C.`
    })

        } else {
            console.error(`${res.status}`);
        }
    })

    .catch(error => {
        console.error(`${error}`);
    });