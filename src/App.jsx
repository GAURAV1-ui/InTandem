import React, { useState } from 'react';
import MapLayout from './page/MapLayout';
import SideBar from './components/SideBar';


function App() {
    const [pins, setPins] = useState([]);

    return (
      <div>
        <MapLayout pins={pins} setPins={setPins} />
        <SideBar/>
      </div>
    );
}

export default App
