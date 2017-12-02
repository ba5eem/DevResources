import React from 'react';

const Card = ({view,c,change,changeBack}) => {
  return(
    <div>
      <div>

      {view ? 
        <span onClick={(e)=>change(e)}>
        <img 
          className='cardA' 
          src='http://bit.ly/2hGMZuN'></img></span> :
        <span onClick={(e)=>changeBack(e)}>    
        <img
          className='cardA' 
          src='http://bit.ly/2rPVYOq'></img></span> }
      </div>

      <div>
      {!view ?
        <span onClick={(e)=>change(e)}>  
        <img
          className='cardA' 
          src='http://bit.ly/2hGMZuN'></img></span> : 
        <span onClick={(e)=>changeBack(e)}>    
        <img
          className='cardA' 
          src='http://bit.ly/2rPVYOq'></img></span> }
      </div>


          <div>
      {c ?
        <span onClick={(e)=>change(e)}>  
        <img
          className='cardA' 
          src='http://bit.ly/2hGMZuN'></img></span> : null }
      </div>
    </div>


    )

}

export default Card;