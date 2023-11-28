import React, { useState } from 'react';
import luxuryJewelryContract from '../../luxuryJewelry'; // 确保路径正确

import web3 from '../../web3'; 

function JewelryManagement() {
  const [userAddress, setUserAddress] = useState('');
  const [itemId, setItemId] = useState('');
  const [miningInfo, setMiningInfo] = useState('');
  const [cuttingInfo, setCuttingInfo] = useState('');
  const [engravingInfo, setEngravingInfo] = useState('');
  const [makingInfo, setMakingInfo] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const authorizeUser = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      await luxuryJewelryContract.methods.authorizeUser(userAddress).send({ from: accounts[0] });
      setStatusMessage("User authorized successfully");
    } catch (error) {
      console.error("Error authorizing user:", error);
      setStatusMessage("Error authorizing user");
    }
  };

  const updateJewelryInfo = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      await luxuryJewelryContract.methods.updateJewelryInfo(itemId, miningInfo, cuttingInfo, engravingInfo, makingInfo).send({ from: accounts[0] , gasLimit: 300000});
      setStatusMessage("Jewelry information updated successfully");
    } catch (error) {
      console.error("Error updating jewelry information:", error);
      setStatusMessage(`Transfer failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Jewelry Management</h2>

      <div>
        <input 
          type="text" 
          value={userAddress} 
          onChange={(e) => setUserAddress(e.target.value)} 
          placeholder="User Ethereum Address"
        />
        <button onClick={authorizeUser}>Authorize User</button>
      </div>

      <div>
        <input 
          type="text" 
          value={itemId} 
          onChange={(e) => setItemId(e.target.value)} 
          placeholder="Jewelry ID"
        />
        <input 
          type="text" 
          value={miningInfo} 
          onChange={(e) => setMiningInfo(e.target.value)} 
          placeholder="Mining Info"
        />
        <input 
          type="text" 
          value={cuttingInfo} 
          onChange={(e) => setCuttingInfo(e.target.value)} 
          placeholder="Cutting Info"
        />
        <input 
          type="text" 
          value={engravingInfo} 
          onChange={(e) => setEngravingInfo(e.target.value)} 
          placeholder="Engraving Info"
        />
        <input 
          type="text" 
          value={makingInfo} 
          onChange={(e) => setMakingInfo(e.target.value)} 
          placeholder="Making Info"
        />
        <button onClick={updateJewelryInfo}>Update Jewelry Info</button>
      </div>

      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default JewelryManagement;
