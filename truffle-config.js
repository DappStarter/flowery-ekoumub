require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note noble hospital install hill flat ghost'; 
let testAccounts = [
"0x7e2e464f81870da4ac9d3a99f61e879022eb0e3d925f7f6442baff4f2043509f",
"0x78f7f161333ee0ddd92d664c58640d4688db96e048a44397c832ac8d417ad61e",
"0xa764ba196861c3f1cf7c0cea4936104efed0229bc7e0b1eef9112dc1a7fce825",
"0x94a9322c904cea0bd486657f428a54a396944531a81005bc9ac5bc03efefa499",
"0xb722d90236a62466715e0e6b7e0519fb20150255b3635e4801c5150fca80f846",
"0xc642b505ff7d168952b190d6a63d47b60ccf1f70258238762ec78a9d7c8d6e26",
"0xad468ff48a0e8cdd2ef39feac63879c8089f448c9d4c9fb2546e7f68198f2276",
"0xb96e75621ff33e879e61880fdc92b4100eb29d8b1d8d93eda061fff221cb6423",
"0x953f3634cc3d35de10703d9ab5780e1468da0989e9593dd650304e80fbef4028",
"0x2a47a8ae0b6571afef6abafed6bd3871572c8af3a6fb956d0716730084a6f63b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
