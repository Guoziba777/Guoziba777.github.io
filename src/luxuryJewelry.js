import Web3 from 'web3';
import LuxuryJewelryABI from './contracts/LuxuryJewelry.json';

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = '0xB4c04D84144F953f47b4f3E08B24b1dd7b6AcF5a';
const luxuryJewelryContract = new web3.eth.Contract(LuxuryJewelryABI.abi, contractAddress);

export default luxuryJewelryContract;
