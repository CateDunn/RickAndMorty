import React from 'react'

const CharacterItem = ( {character} ) => {
    return (
        <div className="card">
            <div className="card-front">
                <img src={character.image} alt=''></img>
            </div>
            <div className="card-back">
                <h1>{character.name} </h1>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
            </div>
          
        </div>
    )
}

export default CharacterItem
