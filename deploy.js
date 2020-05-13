const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
    'together wait tortoise attend glue steel device service accident finger mandate sugar','https://rinkeby.infura.io/v3/afa8dd9c15d9414d88cb7fbd0c1c32fa'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account',accounts[0]);
    try
    {
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode,arguments:['Hi there!']})
        .send({gas:'1000000',from:accounts[0]});
    console.log('Contract deployed to',result.options.address); 
    }
    catch(e){
        console.log(e);
    }
};
deploy();