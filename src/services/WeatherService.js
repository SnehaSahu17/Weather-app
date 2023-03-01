const API_KEY="3ee2d161fbc1886ffe5142d9d22269e0";
const BASE_URL="https://api.openweathermap.org/data/2.5";


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search= new URLSearchParams({...searchParams,appid: API_KEY});

    return fetch(url).then((res)=>res.json());
}

