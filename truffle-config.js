const HDWalletProvider = require('@truffle/hdwallet-provider');
//
const infuraId_ropsten = "f6679b2862854d2d845968d45e0d01d3";
//
const fs = require('fs');
const mnemonic_ropsten = fs.readFileSync(".secret");

module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
   development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
    ropsten: {
      // provider: () => new HDWalletProvider(
      //   mnemonic_ropsten,
      //   `https://ropsten.infura.io/v3/${infuraId_ropsten}`
      // ),
      provider: () => new HDWalletProvider({
        mnemonic: mnemonic_ropsten,
        providerOrUrl: `https://ropsten.infura.io/v3/${infuraId_ropsten}`,
        numberOfAddresses: 1,
        shareNonce: true,
        derivationPath: "m/44'/1'/0'/0/"
      }),
      network_id: 3
      // ,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },
// Configure your compilers
  compilers: {
    solc: {
      version: "0.8.3",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};
