require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'jazz enter brand spot toy note script coconut grace slide surge strong'; 
let testAccounts = [
"0x9165a6c6f6a9015978fc660fc2027bcc9e166dfbc9ca6617d7cde6815d4edaef",
"0x5a42eb420c9587ce168054edc879e5ec0802d2dbf7b08ea1eda3e3acdc0a1f7f",
"0x119998e50c02603cdd8fc5fd339af303b026f5b184cd3ceda4ab27864db1c4af",
"0x45666e36b2df9287911e9b62201324228bfef9d4bb435d393fc37cd7a508178b",
"0x872d0da12bca085f053db1754563608d5fe336409e1cd475aec8a4b8eed90ea8",
"0xc65cdbe9a0b0a708a194e7369f6210704f3e69e9c6c602d3f47e5f3e006e58bd",
"0x12505930564f65a0283bc5f44abe2cd2b4c98b69b5c012fee5eecd2ef7b50fca",
"0xce41578345d45601ca3b80566d85ec26cb96c81df701d2c66884e7d5e5a05cc0",
"0xfe64d56a6ede30636ae726ede29abd87bf075548212df7cb193c4406af2f2937",
"0x232474fcb2e16fa17aab17d56e80540fef84fba7de973a5c62acac9ca272f7f7"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


