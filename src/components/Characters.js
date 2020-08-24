import React from 'react';
import CharacterItem from './CharacterItem'

const Characters = ( {characters, isLoading} ) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className='cards'>
        {characters.map(character => (
            <CharacterItem key={character.id} character={character}></CharacterItem>
        ))}

    </section>)
}

export default Characters
