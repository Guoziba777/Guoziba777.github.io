import React, { useState } from 'react';
import luxuryJewelryContract from '../../luxuryJewelry';
import web3 from '../../web3'; 

function OwnershipTransfer({ itemId }) {
  const [newOwner, setNewOwner] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const transferOwnership = async () => {
      setTransactionStatus('Transferring...');
      try {
          const accounts = await web3.eth.getAccounts(); // 获取MetaMask账户
          await luxuryJewelryContract.methods.transferOwnership(itemId, newOwner).send({ from: accounts[0], gasLimit: 300000 });
          // await luxuryJewelryContract.methods.transferOwnership(itemId, newOwner).send({ from: accounts[0] });
          setTransactionStatus('Transfer successful!');
      } catch (error) {
        console.error("Error transferring ownership:", error);
        setTransactionStatus(`Transfer failed: ${error.message}`);
      } 
      
  };

  return (
      <div>
          <h2>Transfer Jewelry Ownership</h2>
          <input
              type="text"
              value={newOwner}
              onChange={(e) => setNewOwner(e.target.value)}
              placeholder="New owner address"
          />
          <button onClick={transferOwnership}>Transfer Ownership</button>
          {transactionStatus && <p>{transactionStatus}</p>}
      </div>
  );
}

export default OwnershipTransfer;
