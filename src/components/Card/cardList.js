import React from 'react';
import Card from './card';

const CardList = ({machine}) => {
 const cardArray = machine.map((users, id)=>{
   return(
      <Card name={machine[id].name} 
          email={machine[id].email} 
          id={machine[id].id}
          key={id}/>
        )})
     return (cardArray)
};
export default CardList;