import axios from 'axios';
var ReactDOM = require('react-dom')

function geolocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            document.getElementById("maps").innerHTML = "latitude = " + position.coords.latitude + " longitude = " + position.coords.longitude
        })
    }
}

function tempo(){
    const realTime = (<h1>{new Date().toLocaleTimeString()}</h1>);
        
    ReactDOM.render(realTime,
        document.getElementById('time-content'));

        return realTime;
}
setInterval(tempo, 1000);
export {tempo, geolocation};