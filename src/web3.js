import Web3 from 'web3';

let web3;

// 检查是否运行在浏览器中，并且是否已经注入了MetaMask
if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
        // 请求用户授权
        window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
        console.error("User denied account access");
    }
} else if (window.web3) {
    // 使用旧版 MetaMask 的 Web3 注入
    web3 = new Web3(window.web3.currentProvider);
} else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}

export default web3;
