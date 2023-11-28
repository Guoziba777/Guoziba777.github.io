import React, { useState } from 'react';
import luxuryJewelryContract from '../../luxuryJewelry';

function JewelryAuthenticity() {
  const [itemId, setItemId] = useState('');
  const [authenticityInfo, setAuthenticityInfo] = useState({});
  const [error, setError] = useState('');

  const fetchAuthenticityInfo = async () => {
    setError('');
    setAuthenticityInfo({}); // 清除先前的珠宝信息
    try {
      const info = await luxuryJewelryContract.methods.jewelryItems(itemId).call();
      if (info.isIssued) {
        setAuthenticityInfo(info);
      } else {
        setError('Jewelry ID not found or not issued yet.');
      }
    } catch (e) {
      setError('An error occurred while fetching the authenticity info.');
    }
  };

  return (
    <div>
      <h2>Jewelry Authenticity</h2>
      <input
        type="text"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
        placeholder="Enter Jewelry ID"
      />
      <button onClick={fetchAuthenticityInfo}>Get Authenticity Info</button>

      {error && <p className="error">{error}</p>}

      {!error && authenticityInfo.isIssued && (
        <div>
          <p>Mining Info: {authenticityInfo.miningInfo}</p>
          <p>Cutting Info: {authenticityInfo.cuttingInfo}</p>
          <p>Engraving Info: {authenticityInfo.engravingInfo}</p>
          <p>Making Info: {authenticityInfo.makingInfo}</p>
          <p>Ownership History: {authenticityInfo.ownershipHistory}</p>
        </div>
      )}
    </div>
  );
}

export default JewelryAuthenticity;
