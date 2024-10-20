import React from 'react';
import MapLayout from './page/Map/MapLayout';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="grid grid-cols-[250px_auto] lg:grid-cols-[250px_1fr] h-screen">
      <SideBar />
      <MapLayout />
    </div>
  );
}

export default App;
