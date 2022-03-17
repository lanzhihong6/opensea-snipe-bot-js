# opensea-snipe-bot-js

Continuously scanning new listings of a collection on **OpenSea** to snipe with automatic _99%_ probability gas fee settings using the 
[Blocknative Gas-Estimator](https://www.blocknative.com/gas-estimator) API.

If the bot does not function properly, feel free to [open an issue](https://github.com/binhnguyen98/opensea-snipe-bot-js-private/issues).

The code has been **obfuscated**. If you need unobfuscated source code, explanation, or have a new feature idea, 
please contact us [contact me](https://t.me/benguen).

#### Discord will follow soon! 
#### Demo video will follow soon!

## Some tips to successfully run automatic operations on OpenSea
- Have an OpenSea API key. You can request one [here](https://docs.opensea.io/reference/request-an-api-key).
- Specify Cookies and User-Agent.
- You can run multiple bot instances simultaneously with different configurations.
- Don't do too many requests in a short time.

Exercise extreme caution while trading automatically!
Maintain a second account with a modest balance only for the purpose of testing unknown bots and services.

## Configuration

### Required settings
- `network` - network name (use `mainnet` or `rinkeby` for testing).
- `infura_key` - Infura node API key
- `mnemonic` or `private_key` - MetaMask mnemonic phrase or array with private keys.
- `wallet_address` - buyer wallet address.
- `opensea_key` - OpenSea API key.
- `blocknative_key` - Blocknative API key.
- `collection_slug` - collection name.

### Optional settings
- Snipe options:
  - `price_percent` - % below floor price for snipe trigger.
  - `additional_gas` - % added on top to 99% probability gas setting.
- Delay options:
  - `floor_interval` - interval to get floor price of a collection. (processing time not included)
  - `delay` - delay in milliseconds.
- HTTP request options:
    - `cookie` - Cookie data. No Cookie by default.
    - `user_agent` - User-Agent data. No User-Agent by default.
    
Default config file: `config.js`.

**Example**
```js
const config = {
    "production": {
        "network": "mainnet", 
        "infura_key" : "<your infura node key>", 
        "opensea_key": "<your opensea api key>", 
        "blocknative_key": "<your blocknative api key>",
      
        "collection_slug": "azuki",
      
        "price_percent": 75, 
        "additional_gas": 30, 
        "floor_interval": 2, // seconds
        "delay" : 500, // milliseconds
      
        "wallet_address": "<your wallet address>", 
        "mnemonic": "<your mnemonic phrase>",
        "private_key": [ "<your private key>" ], 
      
        "cookie": " <your cf_clearence cookie>", 
        "user_agent": "<your useragent>"
  }
}

exports.config = config.production;
```

## Command line arguments
- `--output=<file name>` - output log file. Default: `log.txt`.
- `--verbose` - print all messages to the console.

## Usage
You should have an _Infura_, an _OpenSea_ and a _Blocknative_ API key, an OpenSea account and a MetaMask account.

Make sure to have installed recent version of **Node.js**
with **Git**, **Python** and **C/C++** build tools (**npm** may require this to install dependencies).
- Install the package.
- Create a config file.
- Run `snipes.js`.

**Example**
```shell
npm install
node snipes.js --verbose
```

<!-- **Demo video** - https://youtu.be/sGwS2v-S2wk -->

## Troubleshooting
If the bot don't work with recent Node.js version, try to use **v16** or **v12** (12.14.0).
You can use **NVM** to easily switch versions.

## For tip
- `eth` Ethereum `0x0b8430c59aaa7ffa548d6318adfac21203bc3657`

#### Thanks for [automainint](https://github.com/automainint) (Mitya Selivanov) for providing guidance for this project!