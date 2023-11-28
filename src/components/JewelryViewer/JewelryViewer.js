import React, { useState } from 'react';
import luxuryJewelryContract from '../../luxuryJewelry';

function JewelryInfo() {
  const [itemId, setItemId] = useState('');
  const [jewelryDetails, setJewelryDetails] = useState(null);
  const [error, setError] = useState('');

  const fetchJewelryDetails = async () => {
    setError('');
    try {
      const details = await luxuryJewelryContract.methods.jewelryItems(itemId).call();
      if (details.isIssued) {
        setJewelryDetails(details);
      } else {
        setError('Jewelry ID not found or not issued yet.');
        setJewelryDetails(null);
      }
    } catch (e) {
      setError('An error occurred while fetching the jewelry details.');
    }
  };

  return (
    <div>
      <h2>Jewelry Info</h2>
      <input
        type="text"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
        placeholder="Enter Jewelry ID"
      />
      <button onClick={fetchJewelryDetails}>Get Details</button>
      {error && <p className="error">{error}</p>}
      {jewelryDetails && (
        <div>
          <p>Description: {jewelryDetails.description}</p>
          <p>Owner: {jewelryDetails.currentOwner}</p>
        </div>
      )}
    </div>
  );
}

export default JewelryInfo;
