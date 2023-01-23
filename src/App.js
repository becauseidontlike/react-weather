import './App.css';
import Footer from './Footer';
import React from "react";

export default function App() {

 let form = (
    <form>
      <input type="search" className="form" placeholder="City..."></input>
      <input type="submit" value="Search" className="btn btn-outline-secondary"></input>
      <input type="submit" value="Current" className="btn btn-outline-secondary"></input>
    </form>
  );

return (
<div className="App">
   <div className="container">
     <div className="row align-items-start">
        <div className="col-3">
        <h1 className="myCity">Kraków</h1>
        </div>
        <div className="col-9">
       <div>{form}</div>
       </div>
    </div>
    <br /><br />
    <div className="row align-items-start">
      <div className="col-8 bold">
        <div>
          <div className="today">
            THURSDAY</div>LAST UPDATED: <span className="time"> 14:<span className="min">00</span></span><br /><span
            className="current">CURRENT
            WEATHER</span>
          <br />
        </div>
      </div>
      <div className="col-4">
        <div className="addition">HUMIDITY: <span className="humid">65</span>% <br />WIND: <span className="speed">3</span>
          m/s</div><br />
      </div>
    </div>

    <div className="row align-items-start">
      <div className="col-2">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather" id="icon"></img>
      </div> 
      <div className="col-4">
        <h2><span className="units"><span className="actualTemp" id="celsius">17</span><a href="/" id="celsiusT"
              className="active active2">℃</a> |
            <a href="/" id="fahrenheitT" className="active2">℉</a></span>
        </h2>
      </div>
    </div>  
  </div>
  <Footer />
</div>
);
} 