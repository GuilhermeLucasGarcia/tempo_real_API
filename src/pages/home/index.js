import React from 'react';
import  { tempo } from './../../services/api';
import { Container, BoxTime } from './styles';


function home() {
  return ( 
    <Container className='row'>
      <BoxTime id='time-content' className='text-center'>
        
      </BoxTime>
    </Container>
    
  )
  
}

export default home;