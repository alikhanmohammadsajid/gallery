import React from 'react';
import forest from '../../Assets/download (1).jpg'
import sunshine from '../../Assets/download.jpg'
import river from '../../Assets/images.jpg'
const Home = () => {
    return (
        <div class=''>
            <div class='flex border-2 border-red-300 m-3 rounded-lg'>
                <div class="border-2 border-red-300 rounded-lg">
                    <img class="p-5" src={forest} alt="" />
                </div>
                <div class="border-2 border-red-300 rounded-lg p-2">
                    <img class="p-5" src={sunshine} alt="" />
                </div>
                <div class="border-2 border-red-300 rounded-lg p-2">
                    <img class="p-5" src={river} alt="" />
                </div>
                <div class="border-2 border-red-300 rounded-lg p-2">
                    <img class="p-5" src={forest} alt="" />
                </div>
                <div class="border-2 border-red-300 rounded-lg p-2">
                    <img class="p-5" src={sunshine} alt="" />
                </div>
                <div class="border-2 border-red-300 rounded-lg p-2">
                    <img class="p-5" src={river} alt="" />
                </div>
            </div>
            <div class='flex border-2 border-red-300 m-3 rounded-lg'>
                <div class="border-2 border-red-300 rounded-lg">
                    <img class="p-5" src={forest} alt="" />
                </div>
                <div class="border-2 border-red-300 rounded-lg p-2">
                    <img class="p-5" src={sunshine} alt="" />
                </div>
                <div class="border-2 border-red-300 rounded-lg p-2">
                    <img class="p-5" src={river} alt="" />
                </div>
                <div class="border-2 border-red-300 rounded-lg p-2">
                    <img class="p-5" src={forest} alt="" />
                </div>
                <div class="border-2 border-red-300 rounded-lg p-2">
                    <img class="p-5" src={sunshine} alt="" />
                </div>
                <div class="border-2 border-red-300 rounded-lg p-2">
                    <img class="p-5" src={river} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;