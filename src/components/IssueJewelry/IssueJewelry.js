import React, { useState } from 'react';
import luxuryJewelryContract from '../../luxuryJewelry'; // 确保路径正确

function IssueJewelry() {
  const [jewelryId, setJewelryId] = useState('');
  const [description, setDescription] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const issueJewelry = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      await luxuryJewelryContract.methods.issueJewelryItem(jewelryId, description, accounts[0]).send({ from: accounts[0],gasLimit: 300000});
      setStatusMessage("Jewelry issued successfully");
    } catch (error) {
      console.error("Error issuing jewelry:", error);
      setStatusMessage(`Add failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Issue New Jewelry</h2>

      <input
        type="text"
        value={jewelryId}
        onChange={(e) => setJewelryId(e.target.value)}
        placeholder="Jewelry ID"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={issueJewelry}>Issue Jewelry</button>

      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default IssueJewelry;
