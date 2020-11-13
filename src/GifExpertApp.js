import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Harry Potter']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category, i) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>

        </>
    )
}

export default GifExpertApp
