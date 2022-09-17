var ReactDOM = require('react-dom')

function tempo(){
    const realTime = (<h1>{new Date().toLocaleTimeString()}</h1>);
        
    ReactDOM.render(realTime,
        document.getElementById('time-content'));

        return realTime;
}
setInterval(tempo, 1000);
export default tempo;