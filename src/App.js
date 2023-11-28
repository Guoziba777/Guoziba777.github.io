
import React from 'react';
import './App.css';
import JewelryViewer from './components/JewelryViewer/JewelryViewer';
import OwnershipTransfer from './components/OwnershipTransfer/OwnershipTransfer';
import JewelryAuthenticity from './components/JewelryAuthenticity/JewelryAuthenticity';
import JewelryManagement from './components/JewelryManagement/JewelryManagement';
import IssueJewelry from './components/IssueJewelry/IssueJewelry';


function App() {
  const exampleJewelryId = 1;
  

  return (
    <div className="App">

      <h1>Luxury Jewelry Application</h1>
      <div className="container">
        <JewelryViewer itemId={exampleJewelryId} />
        <OwnershipTransfer itemId={exampleJewelryId} />
        <JewelryAuthenticity itemId={exampleJewelryId} />
        <JewelryManagement itemId={exampleJewelryId} />
        <IssueJewelry itemId={exampleJewelryId} />

      </div>
    </div>
  );
}

export default App;