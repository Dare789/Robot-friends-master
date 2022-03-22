import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className="bg-light-blue ma2 pa2 dib br3 grow tc">
            <img src={`https://robohash.org/${id}?size=150x150`} alt="robofriends"/>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}
export default Card;