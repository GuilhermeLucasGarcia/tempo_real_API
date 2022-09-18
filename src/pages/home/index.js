import React from 'react';
import  { tempo, geolocation } from './../../services/api';
import './styles.css';

geolocation()

function home() {
  return ( 

    <div className="row app align-items-center">
        <div className='time'>
            <div id='time-content'>

            </div >
           <div id='maps'>
             
           </div>
        </div>
        </div>
  )
  
}

export default home;