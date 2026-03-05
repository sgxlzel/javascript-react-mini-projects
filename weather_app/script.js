const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "3acda90d8294f7b4cb8652b8deb7766f";

weatherform.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityinput.value;
  if (city) {
    try {
        const weatherdata = await getweatherdata(city);
        displayweatherinfo(weatherdata);
    } catch (error) {
        displayerror(error.message);
    }
  } else {
        displayerror("Please enter a city name");
  }
});

async function getweatherdata(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const response = await fetch(apiurl);
    // console.log(response);
    if (!response.ok) {
        throw new Error("City not found");
    }
    return await response.json();

}

function displayweatherinfo(data) {
    console.log(data);
    const {name: city, 
        main: {temp, humidity}, 
        weather: [{description, id}]} = data;
    card.textContent = "";
    card.style.display = "flex";

    const citydisplay = document.createElement("h1");
    const tempdisplay = document.createElement("p");
    const humiditydisplay = document.createElement("p");
    const descdisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    citydisplay.textContent = city;
    citydisplay.classList.add("citydisplay");

    tempdisplay.textContent = `Temperature: ${temp.toFixed(1)}   °C`;
    tempdisplay.classList.add("tempdisplay");

    humiditydisplay.textContent = `Humidity: ${humidity}%`;
    humiditydisplay.classList.add("humiditydisplay");

    descdisplay.textContent = description;
    descdisplay.classList.add("descdisplay");

    weatherEmoji.textContent = getweatheremoji(id);
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiditydisplay);
    card.appendChild(descdisplay);
    card.appendChild(weatherEmoji);
}
function getweatheremoji(weatherid) {
    switch (true) {
        case (weatherid >= 200 && weatherid < 300):
            return "⛈️";
        case (weatherid >= 300 && weatherid < 400):
            return "🌧️";
        case (weatherid >= 500 && weatherid < 600):
            return "🌧️";
        case (weatherid >= 600 && weatherid < 700):
            return "❄️";
        case (weatherid >= 700 && weatherid < 800):
            return "🌫️";
        case (weatherid === 800):
            return "☀️";
        case (weatherid > 800):
            return "☁️";
        default:
            return "❓";
    }
}

function displayerror(message) {
  const errordisplay = document.createElement("p");
  errordisplay.textContent = message;
  errordisplay.classList.add("errordisplay");

  // card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errordisplay);
  // card.appendChild(errordisplay);
}
