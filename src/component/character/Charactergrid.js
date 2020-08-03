import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner'

const Charactergrid = ({isLoading, items}) => {
    return isLoading ? <Spinner /> : (
        <section className="cards">
            {items.map(item => (
                <CharacterItem item={item} />
            ))}
        </section>
    )
}

export default Charactergrid
