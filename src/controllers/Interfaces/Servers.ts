export enum Nodes {
    ethereum = "https://api.trustwalletapp.com/",
    classic = "https://trust-classic.herokuapp.com/",
    poa = "https://trust-poa.herokuapp.com/",
    callisto = "https://trust-callisto.herokuapp.com/",
    gochain = "https://trust-gochain.herokuapp.com/",
    ether1 = "https://api.etholabs.org/",
    localhost = "http://localhost:8000/"
}

export enum Endpoints {
    TokensList = "tokens/list",
    Tokens = "tokens",
    Assets = "assets",
    Collectibles = "assets",
    Transactions = "transactions",
    TransactionId = "transactions/",
    RegisterDevice = "push/register",
    UnegisterDevice = "push/unregister"
}

// https://github.com/satoshilabs/slips/blob/master/slip-0044.md
export enum CoinTypeIndex {
    ethereum = 60,
    classic = 61,
    ether1 = 1313114,
    poa = 178,
    callisto = 820,
    gochain = 6060,
    // localhost = 8000 // Uncomment for test pourpouse
}

export enum ERCStandarts {
    ERC20 = "ERC20",
    ERC721 = "ERC721",
}
