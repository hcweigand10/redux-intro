import React from 'react';

import SongList from './SongList';
import SongDetail from './SongDetail';


const songs = [
    {
        title: "Sunflower",
        length: "3:23"
    },
    {
        title: "Aura",
        length: "2:52"
    },
   {
        title: "Heat Waves",
        length: "3:02"
    },
]

const App = () => {
    
    return (
      <div className='ui container'>
        <h2>App</h2>
        <div className='ui grid'>
            <div className='ui row'>
                <div className='ui column eight wide'>
                    <SongList />
                </div>
                <div className='ui column eight wide'>
                    <SongDetail />
                </div>

            </div>

        </div>
        
      </div>
    );
}

export default App;