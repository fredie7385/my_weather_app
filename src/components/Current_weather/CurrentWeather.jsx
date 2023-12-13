import "./CurrentWeather.css";

function CURRENT_WEATHER({ data }) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          className="weather-icon"
          src={require(`../../assets/icons/${data.weather[0].icon}.png`)}
          alt="weather"
        />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-details">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value"> 29°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CURRENT_WEATHER;
