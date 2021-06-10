import React from 'react';
import { Link } from 'react-router-dom';

const Nabvar = () => {
    return (
        <div class="flex bg-red-200">
            <div class="flex-auto m-4">
                <h1 class="text-3xl from-gray-700">Gallery</h1>
            </div>
            <div class="flex m-4">
                <h3 class="ml-8 text-xl"><Link to="/">Home</Link></h3>
                <h3 class="ml-8 text-xl"><Link to="/">Album</Link></h3>
                <h3 class="ml-8 text-xl"><Link to="/">Favourite</Link></h3>
            </div>
        </div>
    );
};

export default Nabvar;