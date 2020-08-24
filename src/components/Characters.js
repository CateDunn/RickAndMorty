import React from 'react'

const Characters = ( {characters, isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className='cards'>
        {characters.map(character => (
            <h1>{character.name}</h1>
        ))}

    </section>)
}

export default Characters
